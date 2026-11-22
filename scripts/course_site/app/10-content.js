/* ---------- markdown: source tags and math are converted in the Markdown string, before parsing ---------- */
const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const TAG_MD_RE = /(?:\\?\[|&#91;)((?:VERIFY\b:?|POLICY\b:?|CONFIRM\b:?)[^\]]*?)(?:\\?\]|&#93;)/g;
/** Source tags in plain text (exercise specs), after the text is in the DOM. */
function sourceTagsInText(root) {
  for (const n of textNodes(root)) {
    const s = n.nodeValue; TAG_MD_RE.lastIndex = 0;
    if (!TAG_MD_RE.test(s)) continue;
    const frag = document.createDocumentFragment(); let last = 0, m; TAG_MD_RE.lastIndex = 0;
    while ((m = TAG_MD_RE.exec(s))) { const c = document.createElement("cite"); c.className = "srctag"; c.dataset.full = m[1].replace(/\s+/g, " ").trim(); frag.append(s.slice(last, m.index), c); last = m.index + m[0].length; }
    frag.append(s.slice(last)); n.replaceWith(frag);
  }
  decorateSources(root);
}
function preMd(md) {
  const out = []; let code = false;
  for (const line of md.split("\n")) {
    if (/^\s*```/.test(line)) { code = !code; out.push(line); continue; }
    if (code) { out.push(line); continue; }
    let l = line;
    if (l.includes("VERIFY") || l.includes("POLICY") || l.includes("CONFIRM")) {
      l = l.replace(TAG_MD_RE, (_, t) => `<cite class="srctag" data-full="${escAttr(t.replace(/\\([\[\]_*()])/g, "$1").replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1").replace(/\s+/g, " ").trim())}"></cite>`);
    }
    if (l.includes("\\(")) l = l.replace(/\\\((.+?)\\\)/g, (_, t) => `<span class="imath" data-tex="${escAttr(t)}"></span>`);
    out.push(l);
  }
  return out.join("\n");
}
const SRC_KIND = { VERIFY: ["source", "Source"], POLICY: ["policy", "Policy note"], CONFIRM: ["confirm", "To confirm"] };
function decorateSources(box) {
  for (const c of [...box.querySelectorAll("cite.srctag")]) {
    const full = c.dataset.full || "";
    const [kind, short] = SRC_KIND[(/^[A-Z]+/.exec(full) || ["VERIFY"])[0]] || SRC_KIND.VERIFY;
    const detail = full.replace(/^[A-Z]+:?\s*/, "").trim();
    const b = el("button", "src"); b.type = "button"; b.dataset.kind = kind; b.dataset.full = full;
    b.setAttribute("aria-label", detail ? `${short}: ${detail}` : `${short}: to be verified; no source is listed yet`);
    b.setAttribute("aria-expanded", "false");
    b.append(el("span", "short", short), el("span", "full", `[${full}]`));
    c.replaceWith(b);
  }
}
function decorateMath(box) {
  for (const code of [...box.querySelectorAll("pre > code.language-latex, pre > code.language-math, pre > code.language-tex")]) {
    const tex = code.textContent.trim();
    const fig = el("figure", "fcard");
    const m = el("div", "math", tex); m.dataset.tex = tex;
    fig.append(el("div", "lab", "Formula"), m);
    code.parentElement.replaceWith(fig);
  }
}
function decorateTables(box) {
  for (const t of box.querySelectorAll("table")) {
    const w = el("div", "tbl"); t.replaceWith(w); w.appendChild(t);
    const ths = [...t.querySelectorAll("thead th")];
    const heads = ths.map((h) => h.textContent.trim());
    for (const th of ths) th.scope = "col";
    const rows = [...t.querySelectorAll("tbody tr")];
    const ncol = heads.length || (rows[0] ? rows[0].children.length : 0);
    let numCols = 0;
    for (const tr of rows) {
      [...tr.children].forEach((td, i) => {
        td.dataset.label = heads[i] || "";
        const v = el("span", "v"); while (td.firstChild) v.append(td.firstChild); td.append(v);   // one element per cell, so stacked rows never split inline content
      });
      if (/^(total|net|sum)\b/i.test(tr.children[0]?.textContent.trim() || "")) tr.classList.add("total");
    }
    for (let c = 0; c < ncol; c++) {
      const cells = rows.map((r) => r.children[c]).filter(Boolean);
      const filled = cells.filter((td) => { const x = td.textContent.trim(); return x && !/^[—–-]$/.test(x); });
      const money = filled.filter((td) => /^[−-]?\$\s?[\d,]/.test(td.textContent.trim()));
      const numeric = filled.filter((td) => /^[−-]?[$]?\s?[\d,.]+\s?(%|x|bps)?$/.test(td.textContent.trim()));
      if (filled.length >= 2 && money.length / filled.length >= 0.6) {
        for (const td of cells) td.classList.add("num");
        if (ths[c]) ths[c].classList.add("num");
      }
      if (c > 0 && filled.length >= 2 && numeric.length / filled.length >= 0.7) numCols++;
    }
    // Text tables stack into cards on phones; mostly-numeric tables (schedules) scroll sideways instead.
    if (ncol >= 3 && numCols < Math.max(2, (ncol - 1) * 0.6)) w.classList.add("stack");
  }
}
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "s";
function render(md, opts) {
  const box = document.createElement("div");
  box.innerHTML = DOMPurify.sanitize(marked.parse(preMd(md)));
  decorateTables(box); decorateSources(box); decorateMath(box);
  const used = new Set(), pre = (opts && opts.idPrefix) || "sec-";
  for (const h of box.querySelectorAll("h2, h3, h4")) {
    let id = slug(h.textContent);
    while (used.has(id)) id += "-x";
    used.add(id); h.id = pre + id;
  }
  return box;
}
/** Scrollable regions get keyboard focus and a name (WCAG 2.1.1). Call after the content is in the page. */
function markScrollers(root) {
  const names = new Map();
  for (const s of root.querySelectorAll(".tbl, .prose pre, .fig-scroll, .fcard .math")) {
    if (s.scrollWidth > s.clientWidth + 1) {
      if (s.hasAttribute("tabindex")) continue;
      s.tabIndex = 0; s.setAttribute("role", "region");
      let h = s.closest(".fig") ? s.closest(".fig").querySelector(".lab") : null, n = s;
      while (!h && n && n !== root) { let p = n.previousElementSibling; while (p && !/^H[2-4]$/.test(p.tagName)) p = p.previousElementSibling; h = p; n = n.parentElement; }
      const kind = s.classList.contains("tbl") ? "Table" : s.classList.contains("fig-scroll") ? "Diagram" : s.classList.contains("math") ? "Formula" : "Code";
      const base = `${kind}${h ? ": " + h.textContent.trim().slice(0, 80) : ""}`;
      const k = (names.get(base) || 0) + 1; names.set(base, k);
      s.setAttribute("aria-label", `${base}${k > 1 ? ", " + k : ""} (scrolls sideways)`);
      if (s.classList.contains("tbl")) { s.classList.add("scrolls"); if (!(s.nextElementSibling && s.nextElementSibling.classList.contains("tbl-hint"))) { const h2 = el("span", "tbl-hint", "Scroll sideways for more columns →"); h2.setAttribute("aria-hidden", "true"); s.after(h2); } }
    } else if (s.getAttribute("role") === "region") {
      s.removeAttribute("tabindex"); s.removeAttribute("role"); s.removeAttribute("aria-label"); s.classList.remove("scrolls");
      if (s.nextElementSibling && s.nextElementSibling.classList.contains("tbl-hint")) s.nextElementSibling.remove();
    }
  }
}

/* ---------- lookups: rules (Model Credit Policy) and formulas (Formula Library) ---------- */
const plainText = (s) => s.replace(TAG_MD_RE, "").replace(/\*\*|`|\*/g, "").replace(/\\([_\[\]*])/g, "$1").replace(/\s+/g, " ").trim();
function firstSentence(s) {
  s = plainText(s);
  const m = /^(.*?[.!?])(\s|$)/.exec(s);
  let out = m ? m[1] : s;
  if (out.length > 240) out = out.slice(0, 237).trimEnd() + "…";
  return out;
}
/** A short handle for a rule that has no title of its own: its first clause. */
function shortName(s) {
  let t = firstSentence(s).replace(/[.!?]$/, "");
  const cut = t.search(/[:;(]| - /);
  if (cut > 18) t = t.slice(0, cut).trim();
  if (t.length > 78) { const c = t.lastIndexOf(",", 78); t = (c > 30 ? t.slice(0, c) : t.slice(0, 76).replace(/\s+\S*$/, "")) + "…"; }
  return t;
}
const ID_SRC = "F-(?:CORE|RES|MF|COM)-\\d{2}|(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\\d{2}|D-[A-Z]{2,5}-\\d{2}";
const ID_RE = new RegExp(`\\b(${ID_SRC})\\b`, "g");
const FAMILY = { CORE: "Core", RES: "Residential", MF: "Multifamily", COM: "Commercial" };
const FORMULAS = new Map(), RULES = new Map();
function buildLookups() {
  const lib = REFS.find((r) => r.key === "formulas");
  if (lib) for (const p of lib.md.split(/^(?=### F-[A-Z]+-\d+:)/m)) {
    const m = /^### (F-[A-Z]+-\d+):\s*(.*)$/m.exec(p);
    if (!m || !p.startsWith("### " + m[1])) continue;
    const body = p.split(/^## /m)[0].replace(/^###.*\n/, "").trim();
    const part = (label) => { const r = new RegExp(`^\\*\\*${label}\\.?\\*\\*\\.?\\s*([\\s\\S]*?)(?=^\\*\\*[A-Z][^*\\n]*\\*\\*|(?![\\s\\S]))`, "m").exec(body); return r ? r[1].trim() : ""; };
    const purpose = part("Purpose"), formula = part("Formula");
    let rest = body;
    for (const lab of ["Purpose", "Formula"]) rest = rest.replace(new RegExp(`^\\*\\*${lab}\\.?\\*\\*\\.?\\s*[\\s\\S]*?(?=^\\*\\*[A-Z][^*\\n]*\\*\\*|(?![\\s\\S]))`, "m"), "");
    const name = plainText(m[2]).replace(/\s*\(SUGGESTED\)$/i, "");
    FORMULAS.set(m[1], { id: m[1], kind: "formula", name, text: purpose ? firstSentence(purpose) : firstSentence(formula), purpose, formula, rest: rest.trim(), body });
  }
  const pol = REFS.find((r) => r.key === "policy");
  if (!pol) return;
  const lines = pol.md.split("\n");
  const split = (l) => l.trim().replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map((c) => c.trim());
  let header = null;
  for (const l of lines) {
    if (!l.startsWith("|")) { header = null; continue; }
    if (header === null) { header = split(l); continue; }
    if (/^\|\s*:?-/.test(l)) continue;
    const cells = split(l);
    const idm = new RegExp(`^(?:${ID_SRC})$`).exec(cells[0] || "");
    if (!idm || idm[0].startsWith("F-")) continue;
    const id = idm[0], primary = /^rule id$/i.test(header[0]);
    if (RULES.has(id) && !(primary && !RULES.get(id).primary)) continue;
    const f = {}; header.forEach((h, i) => { if (i) f[h] = cells[i] || ""; });
    const pick = (re) => { const k = Object.keys(f).find((h) => re.test(h)); return k ? f[k] : ""; };
    const isD = id.startsWith("D-");
    const rule = pick(/^rule\b(?!s)/i) || pick(/^decision/i) || pick(/^recommend/i) || cells[1] || "";
    const question = pick(/^question/i), covered = pick(/^rules covered/i);
    const info = { id, kind: isD ? "decision" : "rule", primary, rule, basis: plainText(pick(/^basis/i)), why: pick(/rationale|source|why/i), text: firstSentence(rule) };
    if (isD) {
      info.name = question ? plainText(question) : covered ? "Policy decision: " + shortName(covered) : shortName(rule);
      if (pick(/^options/i)) { info.why = pick(/^options/i); info.rule = "Option chosen: " + (pick(/^recommend/i) || ""); info.text = plainText(info.rule); }
      if (pick(/^rules and formulas/i)) info.applies = pick(/^rules and formulas/i);
      if (covered) info.applies = covered;
    } else info.name = shortName(rule);
    RULES.set(id, info);
  }
  // Rules written as a bold heading, e.g. "**Approval authority matrix (CORE-AUTH-01)**", then prose and a table.
  for (let i = 0; i < lines.length; i++) {
    const hm = /^\*\*([^*]*?)\s*\(((?:CORE|RES|MF|COM)-[A-Z]+-\d+)\)\*\*\s*$/.exec(lines[i]);
    if (!hm || RULES.has(hm[2])) continue;
    const block = []; let j = i + 1;
    while (j < lines.length && !/^(\*\*[^*]+\*\*\s*$|#{1,4}\s)/.test(lines[j])) { block.push(lines[j]); j++; }
    const para = block.find((b) => b.trim() && !b.startsWith("|"));
    RULES.set(hm[2], { id: hm[2], kind: "rule", primary: true, name: hm[1], rule: block.join("\n").trim(), basis: "", why: "", text: para ? firstSentence(para) : hm[1] });
  }
}
const refInfo = (id) => FORMULAS.get(id) || RULES.get(id) || null;
const known = (id) => FORMULAS.has(id) || RULES.has(id);
const refTitle = (id) => { const r = refInfo(id); return r ? `${id}: ${r.name}` : id; };
let USED = null;
function usedIn(id) {
  if (!USED) {
    USED = new Map();
    for (const m of MODS) for (const x of new Set(m.md.match(ID_RE) || [])) { if (!USED.has(x)) USED.set(x, []); USED.get(x).push(m); }
  }
  return USED.get(id) || [];
}

/* ---------- IDs in text: quiet mono links, numbered citation markers, never broken mid-token ---------- */
function textNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => n.parentElement.closest("a, button, pre, textarea, select, .mermaid-diagram, .fcard, .cx, .nb, .reflist") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function refBtn(id) {
  const b = el("button", "ref", id); b.type = "button"; b.dataset.ref = id; b.title = refTitle(id);
  b.setAttribute("aria-label", `${id}: ${refInfo(id).name.replace(/[.…]+$/, "")}. Look up`);
  return b;
}
const RD_RE = /\bRD-(?:RES|MF|COM)-\d{2}\b/g;
const TOKEN_RE = new RegExp(`\\b(?:${ID_SRC}|RD-(?:RES|MF|COM)-\\d{2})\\b`, "g");
/** Text with IDs -> fragment of text, quiet ID buttons and no-break spans. */
function quietize(s) {
  const frag = document.createDocumentFragment(); let last = 0, m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(s))) {
    const id = m[0];
    // Keep the ID together with the punctuation that touches it, so "(" or "." never wraps alone.
    let before = s.slice(last, m.index), lead = "";
    const lm = /[(\[“"]+$/.exec(before); if (lm) { lead = lm[0]; before = before.slice(0, -lead.length); }
    let end = m.index + id.length;
    const tm = /^[)\]”".,;:!?]+/.exec(s.slice(end)); const trail = tm ? tm[0] : ""; end += trail.length;
    frag.append(before);
    const nb = el("span", "nb"); nb.append(lead, known(id) ? refBtn(id) : id, trail); frag.append(nb);
    last = end; TOKEN_RE.lastIndex = end;
  }
  frag.append(s.slice(last));
  return frag;
}
/** "CORE-PRC-01, -02; F-CORE-01 to F-CORE-03" -> every ID, with short forms and ranges expanded. */
function expandIds(inner) {
  const out = []; let fam = null, range = false;
  for (const tok of inner.match(new RegExp(`${ID_SRC}|(?<![\\w-])-\\d{2}\\b|\\bto\\b`, "g")) || []) {
    if (tok === "to") { range = true; continue; }
    const id = tok.startsWith("-") ? (fam ? fam + tok : null) : tok;
    if (!id) continue;
    fam = id.slice(0, id.lastIndexOf("-"));
    if (range && out.length) {
      const prev = out[out.length - 1], a = Number(prev.slice(-2)), b = Number(id.slice(-2));
      if (prev.slice(0, -3) === fam && b > a && b - a <= 12) for (let k = a + 1; k < b; k++) out.push(`${fam}-${String(k).padStart(2, "0")}`);
    }
    range = false;
    if (!out.includes(id)) out.push(id);
  }
  return out;
}
const PAREN_RE = /(\s*)\(([^()]*)\)([.,;:!?]?)/g;
const PURE_REST_RE = /^[\s;,]*(?:(?:-\d{2}|to|and|or|see)\b[\s;,]*)*$/;
function newCiteCtx() { return { n: 0, bySet: new Map(), sets: [] }; }
function citeMarker(ids, ctx) {
  const key = ids.join(" ");
  let n = ctx.bySet.get(key);
  const first = !n;
  if (!n) { n = ++ctx.n; ctx.bySet.set(key, n); ctx.sets.push({ n, ids }); }
  const wrap = el("span", "cx-m");
  const b = el("button", "cite", String(n)); b.type = "button"; b.dataset.refs = key; b.dataset.n = String(n); if (first) b.dataset.first = "1";
  b.setAttribute("aria-label", `Citation ${n}: ${ids.join(", ")}`); b.setAttribute("aria-haspopup", "dialog");
  wrap.append(b);
  return wrap;
}
/**
 * mode "cite": a parenthetical made only of IDs, such as "(CORE-CLS-04; F-CORE-33)", collapses to one numbered marker
 * placed after the sentence punctuation. The raw IDs stay in the DOM for audit mode. IDs used as words stay as quiet links.
 * mode "quiet": every ID becomes a quiet link (tables, job aids, answers, reference pages, the drawer).
 */
function linkIds(root, mode, ctx) {
  for (const n of textNodes(root)) {
    const s = n.nodeValue;
    TOKEN_RE.lastIndex = 0;
    if (!TOKEN_RE.test(s)) continue;
    const cite = mode === "cite" && !n.parentElement.closest("table, .jobcard, .qcard, .ex, figcaption, h1, h2, h3, h4, .idlist");
    if (!cite) { n.replaceWith(quietize(s)); continue; }
    const frag = document.createDocumentFragment(); let last = 0, m;
    PAREN_RE.lastIndex = 0;
    while ((m = PAREN_RE.exec(s))) {
      const inner = m[2];
      ID_RE.lastIndex = 0;
      if (!ID_RE.test(inner) || !PURE_REST_RE.test(inner.replace(ID_RE, ""))) continue;
      const ids = expandIds(inner).filter(known);
      if (!ids.length) continue;
      frag.append(quietize(s.slice(last, m.index)));
      const cx = el("span", "cx"), raw = el("span", "cx-raw");
      raw.append(m[1] + "(", quietize(inner), ")");
      cx.append(raw, m[3], citeMarker(ids, ctx));
      frag.append(cx);
      last = m.index + m[0].length;
    }
    frag.append(quietize(s.slice(last)));
    n.replaceWith(frag);
  }
}
/** Every distinct ID under root, in reading order, with the citation numbers that point at it. */
function collectRefs(root) {
  const seen = new Map();
  for (const b of root.querySelectorAll(".cite[data-refs], .ref[data-ref]")) {
    if (b.closest(".reflist")) continue;
    const ids = b.dataset.refs ? b.dataset.refs.split(" ") : [b.dataset.ref];
    for (const id of ids) {
      if (!known(id)) continue;
      if (!seen.has(id)) seen.set(id, new Set());
      if (b.dataset.n) seen.get(id).add(Number(b.dataset.n));
    }
  }
  return [...seen].map(([id, ns]) => ({ id, ns: [...ns].sort((a, b) => a - b) }));
}
function refList(root, level) {
  const refs = collectRefs(root);
  if (!refs.length) return null;
  const box = el("section", "reflist");
  const h = el(level || "h4", "", "Rules and formulas on this page"); box.append(h);
  const ol = el("ol");
  for (const r of refs) {
    const li = el("li");
    const n = el("span", "n", r.ns.length ? r.ns.join(", ") : "");
    if (r.ns.length) n.setAttribute("aria-label", `Citation ${r.ns.join(", ")}`);
    li.append(n, refBtn(r.id), el("span", "nm", refInfo(r.id).name));
    ol.append(li);
  }
  box.append(ol);
  return box;
}

/* ---------- popover: citations and source notes (opens on tap, click or keyboard focus) ---------- */
const pop = { anchor: null };
function placePop() {
  const p = $("pop"), a = pop.anchor; if (!a) return;
  const r = a.getBoundingClientRect(), w = p.offsetWidth, vw = document.documentElement.clientWidth;
  let left = Math.max(12, Math.min(r.left + r.width / 2 - w / 2, vw - w - 12));
  let top = r.bottom + 8;
  if (top + p.offsetHeight > innerHeight - 8 && r.top - p.offsetHeight - 8 > 60) top = r.top - p.offsetHeight - 8;
  p.style.left = `${left + scrollX}px`; p.style.top = `${top + scrollY}px`;
}
function closePop(refocus) {
  const p = $("pop"); if (p.hidden) return;
  p.hidden = true; p.replaceChildren();
  const a = pop.anchor; pop.anchor = null;
  if (a) { if (a.hasAttribute("aria-expanded")) a.setAttribute("aria-expanded", "false"); if (refocus && a.isConnected) a.focus(); }
}
function openPop(anchor, nodes, label) {
  closePop(false);
  const p = $("pop"); p.replaceChildren(...nodes); p.setAttribute("role", "dialog"); p.setAttribute("aria-label", label);
  pop.anchor = anchor; if (anchor.hasAttribute("aria-expanded")) anchor.setAttribute("aria-expanded", "true");
  p.hidden = false; placePop();
}
function openCitePop(b, focusIn) {
  const ids = b.dataset.refs.split(" ");
  const ul = el("ul");
  for (const id of ids) {
    const r = refInfo(id); if (!r) continue;
    const row = el("button", "row"); row.type = "button";
    row.append(el("span", "id", id), el("span", "nm", r.kind === "formula" ? r.name : r.text));
    row.addEventListener("click", () => { closePop(false); openDrawer(id, b); });
    const li = el("li"); li.append(row); ul.append(li);
  }
  openPop(b, [el("h2", "", `Citation ${b.dataset.n}`), ul], `Citation ${b.dataset.n}`);
  if (focusIn) { const f = $("pop").querySelector("button"); if (f) f.focus(); }
}
function openSrcPop(b) {
  const full = b.dataset.full || "", kindLabel = b.querySelector(".short").textContent;
  const detail = full.replace(/^[A-Z]+:?\s*/, "").trim();
  const parts = detail.split(/;\s*(?=checked\b)/i);
  const p1 = el("p", "", parts[0] || "To be verified. No source is listed yet.");
  const nodes = [el("h2", "", kindLabel), p1];
  if (parts[1]) nodes.push(Object.assign(el("p", "", parts[1][0].toUpperCase() + parts[1].slice(1)), { style: "margin-top:4px;color:var(--muted);font-size:12.5px" }));
  openPop(b, nodes, kindLabel);
}
document.addEventListener("click", (e) => {
  const t = e.target;
  const c = t.closest(".cite");
  if (c) { if (pop.anchor === c) closePop(true); else openCitePop(c, e.detail === 0); return; }
  const s = t.closest(".src");
  if (s) { if (document.documentElement.dataset.audit === "1") return; if (pop.anchor === s && !s.dataset.byFocus) closePop(false); else { delete s.dataset.byFocus; openSrcPop(s); } return; }
  const r = t.closest(".ref");
  if (r) { closePop(false); openDrawer(r.dataset.ref, r.closest(".drawer") ? null : r, !!r.closest(".drawer")); return; }
  const mn = t.closest(".mnote");
  if (mn) { const b = document.querySelector(`.stage .cite[data-n="${mn.dataset.n}"]`); const ids = mn.dataset.refs.split(" "); if (ids.length === 1) openDrawer(ids[0], b); else if (b) openCitePop(b, false); return; }
  if (!t.closest("#pop")) closePop(false);
});
document.addEventListener("focusin", (e) => {
  const s = e.target.closest && e.target.closest(".src");
  if (s && s.matches(":focus-visible") && document.documentElement.dataset.audit !== "1" && pop.anchor !== s) { s.dataset.byFocus = "1"; openSrcPop(s); }
  else if (pop.anchor && !e.target.closest("#pop") && e.target !== pop.anchor) closePop(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && pop.anchor && !topModal()) { e.preventDefault(); closePop(true); }
  if (e.key === "Tab" && pop.anchor && $("pop").contains(document.activeElement)) {
    const bs = [...$("pop").querySelectorAll("button")];
    if ((!e.shiftKey && document.activeElement === bs[bs.length - 1]) || (e.shiftKey && document.activeElement === bs[0])) { e.preventDefault(); closePop(true); }
  }
});
document.addEventListener("mouseover", (e) => {
  const c = e.target.closest && e.target.closest(".cite, .mnote"); if (!c) return;
  const n = c.dataset.n;
  for (const x of document.querySelectorAll(`.mnote[data-n="${n}"], .stage .cite[data-n="${n}"]`)) x.classList.add("hot");
  c.addEventListener("mouseleave", () => { for (const x of document.querySelectorAll(".hot")) x.classList.remove("hot"); }, { once: true });
});
addEventListener("resize", () => { if (pop.anchor) placePop(); });

/* ---------- reference drawer (modal dialog; bottom sheet on phones) ---------- */
const drawer = { stack: [] };
function mdBlock(md, cls) {
  const d = el("div", "prose" + (cls ? " " + cls : ""));
  d.append(...render(md, { idPrefix: "dw-" }).childNodes);
  linkIds(d, "quiet");
  return d;
}
function drawerSection(title, ...nodes) {
  const s = el("section"); s.append(el("h3", "", title), ...nodes.filter(Boolean)); return s;
}
function paintDrawer(id) {
  const r = refInfo(id); if (!r) return false;
  $("drawer-title").textContent = id;
  const famKey = id.replace(/^F-/, "").split("-")[0];
  $("drawer-fam").textContent = r.kind === "formula" ? `${FAMILY[famKey] || ""} formula` : r.kind === "decision" ? "Policy decision" : `${FAMILY[famKey] || ""} rule`;
  const body = $("drawer-body"); body.replaceChildren();
  const h = el("h2", "", r.name); h.id = "drawer-name"; h.tabIndex = -1;
  body.append(h);
  if (r.kind === "formula") {
    if (r.purpose) body.append(drawerSection("What it is for", mdBlock(r.purpose)));
    if (r.formula) body.append(drawerSection("The formula", mdBlock(r.formula)));
    if (r.rest) body.append(drawerSection("Variables and worked example", mdBlock(r.rest)));
  } else {
    body.append(drawerSection(r.kind === "decision" ? "The decision" : "The rule", mdBlock(r.rule)));
    if (r.basis || r.why) {
      const basis = r.basis ? el("span", "basis", "Basis: " + r.basis) : null;
      body.append(drawerSection(r.kind === "decision" && /\*\*A\*\*/.test(r.why) ? "Options considered" : "Why", basis, r.why ? mdBlock(r.why) : null));
    }
    if (r.applies) body.append(drawerSection("Applies to", mdBlock(r.applies)));
  }
  const used = usedIn(id);
  if (used.length) {
    const ul = el("ul", "used");
    for (const m of used) { const li = el("li"); const a = el("a", "", `${m.code} ${m.title.split(":")[0]}`); a.href = "#" + m.key; a.title = m.title; li.append(a); ul.append(li); }
    body.append(drawerSection("Used in", ul));
  }
  const go = el("a", "btn sm", r.kind === "formula" ? "Open in the Formula Library" : "Open in the Model Credit Policy");
  go.href = "#" + (r.kind === "formula" ? "formulas" : "policy") + "/" + id; go.style.justifySelf = "start";
  body.append(go);
  if (typeof renderMath === "function") renderMath(body);
  $("drawer-back").hidden = drawer.stack.length < 2;
  body.scrollTop = 0;
  return true;
}
function openDrawer(id, trigger, nested) {
  if (!refInfo(id)) return;
  const d = $("drawer");
  if (d.hidden) { drawer.stack = [id]; if (!paintDrawer(id)) return; openModal(d, { trigger, focus: $("drawer-close"), onClose: () => { drawer.stack = []; } }); }
  else { if (nested) drawer.stack.push(id); else drawer.stack = [id]; paintDrawer(id); $("drawer-name").focus(); }
  markScrollers(d);
}
function initDrawer() {
  $("drawer-back").append(icon("left"));
  $("drawer-close").addEventListener("click", () => closeModal($("drawer")));
  $("drawer-back").addEventListener("click", () => { drawer.stack.pop(); paintDrawer(drawer.stack[drawer.stack.length - 1]); $("drawer-name").focus(); });
}
