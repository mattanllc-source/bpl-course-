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
const SRC_KIND = { VERIFY: ["source", "Source"], POLICY: ["policy", "Course choice"], CONFIRM: ["confirm", "To confirm"] };
function decorateSources(box) {
  for (const c of [...box.querySelectorAll("cite.srctag")]) {
    const full = c.dataset.full || "";
    const [kind, short] = SRC_KIND[(/^[A-Z]+/.exec(full) || ["VERIFY"])[0]] || SRC_KIND.VERIFY;
    const detail = full.replace(/^[A-Z]+:?\s*/, "").trim();
    const b = el("button", "src"); b.type = "button"; b.dataset.kind = kind; b.dataset.full = full;
    b.setAttribute("aria-label", detail ? `${short}: ${learnerString(detail)}` : `${short}: to be verified; no source is listed yet`);
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
    // A cell with more than a few words keeps a readable width; the table scrolls sideways instead of squeezing it.
    for (const c of t.querySelectorAll("th, td")) if (c.textContent.trim().length > 12) c.classList.add("wcell");
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
  for (const s of root.querySelectorAll(".tbl, .prose pre, .fig-scroll, .math")) {
    if (s.scrollWidth > s.clientWidth + 1) {
      if (s.hasAttribute("tabindex")) continue;
      s.tabIndex = 0; s.setAttribute("role", "region");
      let h = s.closest(".fig") ? s.closest(".fig").querySelector(".lab") : null, n = s;
      while (!h && n && n !== root) { let p = n.previousElementSibling; while (p && !/^H[2-4]$/.test(p.tagName)) p = p.previousElementSibling; h = p; n = n.parentElement; }
      const kind = s.classList.contains("tbl") ? "Table" : s.classList.contains("fig-scroll") ? "Diagram" : s.classList.contains("math") ? "Formula" : "Code";
      const base = `${kind}${h ? ": " + h.textContent.trim().slice(0, 80) : ""}`;
      let k = (names.get(base) || 0) + 1;
      while (document.querySelector(`[aria-label="${CSS.escape(`${base}${k > 1 ? ", " + k : ""} (scrolls sideways)`)}"]`)) k++;
      names.set(base, k);
      s.setAttribute("aria-label", `${base}${k > 1 ? ", " + k : ""} (scrolls sideways)`);
      if (s.classList.contains("tbl")) { s.classList.add("scrolls"); if (!(s.nextElementSibling && s.nextElementSibling.classList.contains("tbl-hint"))) { const h2 = el("span", "tbl-hint", "Scroll sideways for more columns →"); h2.setAttribute("aria-hidden", "true"); s.after(h2); } }
    } else if (s.classList.contains("math")) {
      // Formula boxes can scroll on narrower fonts or screens: keep them focusable and named at all times.
      if (!s.hasAttribute("tabindex")) { s.tabIndex = 0; s.setAttribute("role", "region"); }
      if (!s.hasAttribute("aria-label")) {
        let k = 1;
        while (document.querySelector(`[aria-label="${k > 1 ? "Formula " + k : "Formula"}"]`)) k++;
        s.setAttribute("aria-label", k > 1 ? `Formula ${k}` : "Formula");
      }
    } else if (s.getAttribute("role") === "region") {
      s.removeAttribute("tabindex"); s.removeAttribute("role"); s.removeAttribute("aria-label"); s.classList.remove("scrolls");
      if (s.nextElementSibling && s.nextElementSibling.classList.contains("tbl-hint")) s.nextElementSibling.remove();
    }
  }
}

/* ---------- lookups: rules (Model Credit Policy) and formulas (Formula Library), parsed by build.py ---------- */
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
  let t = firstSentence(learnerString(s)).replace(/[.!?]$/, "");
  const cut = t.search(/[:;(]| - /);
  if (cut > 18) t = t.slice(0, cut).trim();
  if (t.length > 78) { const c = t.lastIndexOf(",", 78); t = (c > 30 ? t.slice(0, c) : t.slice(0, 76).replace(/\s+\S*$/, "")) + "…"; }
  return t;
}
const ID_SRC = "F-(?:CORE|RES|MF|COM)-\\d{2}|(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\\d{2}|D-[A-Z]{2,5}-\\d{2}";
const ID_RE = new RegExp(`\\b(${ID_SRC})\\b`, "g");
const FAMILY = { CORE: "Core", RES: "Residential", MF: "Multifamily", COM: "Commercial" };
const LIB = (DATA && DATA.library) || { formulas: [], topics: [], conventions: [] };
const POLICY = (DATA && DATA.policy) || { families: [], rules: [], decisions: [] };
const FORMULAS = new Map(), RULES = new Map(), FSLUG = new Map();
function buildLookups() {
  for (const f of LIB.formulas) {
    const info = { ...f, kind: "formula", text: firstSentence(f.purpose || f.words) };
    FORMULAS.set(f.id, info); FSLUG.set(f.slug, info);
  }
  for (const r of POLICY.rules) {
    if (RULES.has(r.id)) continue;
    RULES.set(r.id, { ...r, kind: "rule", rule: r.text, name: r.name || "", text: firstSentence(r.text) });
  }
  for (const r of RULES.values()) r.name = r.name ? learnerString(r.name) : shortName(r.rule);
  for (const r of RULES.values()) if (r.topic) r.topic = learnerString(r.topic);
  for (const d of POLICY.decisions) {
    if (RULES.has(d.id)) continue;
    const rule = d.decision || (d.recommend ? "Option chosen: " + d.recommend : "");
    RULES.set(d.id, { id: d.id, kind: "decision", name: d.question || "Policy decision", rule, text: firstSentence(rule || d.options), why: d.options, applies: d.covered, basis: "" });
  }
}
const refInfo = (id) => FORMULAS.get(id) || RULES.get(id) || null;
const known = (id) => FORMULAS.has(id) || RULES.has(id);
const refTitle = (id) => { const r = refInfo(id); return r ? r.name : id; };
const formulaHref = (id) => { const f = FORMULAS.get(id); return f ? "#formulas/" + f.slug : "#formulas"; };
let USED = null;
function usedIn(id) {
  if (!USED) {
    USED = new Map();
    const re = new RegExp(`\\b(?:${ID_SRC}|RD-(?:RES|MF|COM)-\\d{2})\\b`, "g");
    for (const m of MODS) for (const x of new Set(m.md.match(re) || [])) { if (!USED.has(x)) USED.set(x, []); USED.get(x).push(m); }
  }
  return USED.get(id) || [];
}
const dealById = (id) => DEALS.find((d) => d.id === id);

/* ---------- codes out of learner view ----------
 * Every rule, formula, deal, state-law row and decision ID is rewritten for the learner:
 *   rule IDs        -> a numbered citation marker (the note shows the rule's plain name and text);
 *   formula IDs     -> the formula's plain name, linked to its formula page (in a citation: the marker);
 *   running deals   -> the deal's name;  state-law rows -> a link to the state law guide;
 *   decision IDs and status words (REQUIRED, SUGGESTED) -> dropped.
 * The raw text stays in the DOM (.cx-raw) and shows in Audit mode instead of the learner text (.cx-l). */
const ONE_ID = "(?:F-(?:CORE|RES|MF|COM)-\\d{2}|RD-(?:RES|MF|COM)-\\d{2}|SLT-[A-Z]{2}-\\d{2}|D-[A-Z]{2,5}-\\d{2}|(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\\d{2}|REQUIRED|SUGGESTED)";
const SHORT_ID = "(?<![\\w-])-\\d{2}(?![\\d%])(?![.,]\\d)";
const GROUP_SRC = `\\b${ONE_ID}\\b(?:(?:\\s*(?:,|;|/|&|\\band\\b|\\bor\\b|\\bto\\b)\\s*|\\s+)(?:\\b${ONE_ID}\\b|${SHORT_ID}))*`;
const GROUP_RE = new RegExp(GROUP_SRC, "g");
const HAS_ID_RE = new RegExp(`\\b${ONE_ID}\\b|\\b(?:JUDGMENT|MARKET|LEGAL)\\b`);
const WHOLE_ID_RE = new RegExp(`^(?:${GROUP_SRC})[:.]?$`);
const TOKEN_RE = new RegExp(`\\b(?:${ID_SRC}|RD-(?:RES|MF|COM)-\\d{2}|SLT-[A-Z]{2}-\\d{2})\\b`, "g");
const kindOf = (id) => id.startsWith("F-") ? "f" : id.startsWith("RD-") ? "d" : id.startsWith("SLT-") ? "s" : id.startsWith("D-") ? "x" : /^(REQUIRED|SUGGESTED)$/.test(id) ? "w" : "r";
/** "CORE-PRC-01, -02; F-CORE-01 to F-CORE-03" -> every ID, with short forms and ranges expanded. */
function expandIds(inner) {
  const out = []; let fam = null, range = false;
  for (const tok of inner.match(new RegExp(`${ONE_ID}|${SHORT_ID}|\\bto\\b`, "g")) || []) {
    if (tok === "to") { range = true; continue; }
    if (/^(REQUIRED|SUGGESTED)$/.test(tok)) { if (!out.includes(tok)) out.push(tok); continue; }
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
const FILLER_RE = /^[\s,;:/&.]*(?:(?:see|per|also|and|or|the|under|via|from|in|decided|set|rule|rules|formula|formulas|policy|test|tests|basis|table|row|rows|grid|matrix|e\.g\.|\d{1,2} [A-Z][a-z]{2} \d{4}|[A-Z][a-z]{2} \d{4})[\s,;:/&.]*)*$/i;
const DATE_ONLY_RE = /\d{1,2} [A-Z][a-z]{2} \d{4}/;
const lowerName = (n) => (/^[A-Z][a-z]/.test(n) ? n[0].toLowerCase() + n.slice(1) : n);
const dealShort = (d) => d.name || d.title.split(" ").slice(0, 2).join(" ");
const STATE_OF_SLT = { OH: "oh", NC: "nc", IN: "in", CA: "ca" };
/**
 * Learner version of one string. Returns parts: strings and {t:"cite", ids} | {t:"flink", id, text} | {t:"slt", href, text}.
 * plain: no markers or links (inside buttons, links, headings and labels).
 */
function learnParts(s, plain) {
  if (!HAS_ID_RE.test(s)) return null;
  const objs = [];
  const ph = (o) => { objs.push(o); return `\u0001${objs.length - 1}\u0002`; };
  const cite = (ids) => (ids.length && !plain ? ph({ t: "cite", ids }) : "");
  const wcite = (ids) => (ids.length && !plain ? ph({ t: "cite", ids, word: true }) : "");   // stays on its noun
  let L = s;
  // 1. A parenthetical made only of IDs (and filler such as "see" or a decision date) collapses to a marker.
  L = L.replace(/(\s*)\(([^()]*)\)/g, (all, sp, inner, off, str) => {
    GROUP_RE.lastIndex = 0;
    if (!GROUP_RE.test(inner)) return all;
    const rest = inner.replace(GROUP_RE, " ");
    const ids = expandIds(inner);
    if (FILLER_RE.test(rest)) {
      const deals = ids.filter((x) => kindOf(x) === "d").map(dealById).filter(Boolean).map(dealShort);
      const before = str.slice(0, off);
      const rest2 = before + " " + str.slice(off + all.length);   // a deal already named in this text is not repeated
      const named = deals.filter((n) => !rest2.includes(n) && !before.trimEnd().endsWith(n.split(" ")[0]));
      return (named.length ? `${sp}(${named.join(" and ")})` : "") + cite(ids.filter((x) => /[rf]/.test(kindOf(x)) && known(x)));
    }
    // 2. A parenthetical with other words: the IDs move to one marker after it.
    const cids = [];
    let inner2 = inner.replace(GROUP_RE, (g) => {
      const gi = expandIds(g);
      cids.push(...gi.filter((x) => /[rf]/.test(kindOf(x)) && known(x)));
      const deals = gi.filter((x) => kindOf(x) === "d").map(dealById).filter(Boolean).map(dealShort);
      const fresh = deals.filter((n) => !str.includes(n));
      return fresh.length ? fresh.join(" and ") : "\u0003";
    });
    inner2 = inner2
      .replace(/\s*(?:[,;:]|\band\b|\bor\b)?\s*\u0003\s*(?=$|[,;:])/g, "")      // "75%; ID" or "ID" at the end
      .replace(/\u0003\s*(?:[,;:]|\band\b|\bor\b)?\s*/g, "")                    // "ID, 75%" at the start or middle
      .replace(/^\s*(?:see|per|under|from)\s*$/i, "").replace(/\s{2,}/g, " ").replace(/^[\s,;:]+|[\s,;:]+$/g, "")
      .replace(/^(?:and|or)\s+|\s+(?:and|or)$/g, "");
    if (!inner2 || DATE_ONLY_RE.test(inner2) && FILLER_RE.test(inner2)) return cite(cids);
    return `${sp}(${inner2})` + cite(cids);
  });
  // 3. IDs used as words.
  L = L.replace(new RegExp(`(${GROUP_SRC})(\\s*:\\s*)?`, "g"), (all, g, colon, off, str) => {
    const ids = expandIds(g).filter((x) => x !== "to");
    const before = str.slice(0, off), after = str.slice(off + all.length);
    const atStart = /(^|\n)\s*$/.test(before) || /\u0002\s*$/.test(before) && !before.replace(/\u0001\d+\u0002/g, "").trim();
    const bare = !before.replace(/\u0001\d+\u0002/g, "").trim() && !after.replace(/\u0001\d+\u0002/g, "").trim().replace(/^[.:]$/, "");
    const label = colon && atStart && after.trim();           // "F-CORE-42: REO carrying value" -> "REO carrying value"
    const pieces = [];
    const deals = ids.filter((x) => kindOf(x) === "d").map(dealById).filter(Boolean).map(dealShort);
    const fs = ids.filter((x) => kindOf(x) === "f" && FORMULAS.has(x));
    const rs = ids.filter((x) => kindOf(x) === "r" && RULES.has(x));
    const ss = ids.filter((x) => kindOf(x) === "s");
    const nextText = after.replace(/^[\s:]+/, "").toLowerCase();
    const others = (before + " " + after).replace(/\u0001\d+\u0002/g, "");
    const newDeals = deals.filter((n) => !others.includes(n));
    if (newDeals.length && !label) pieces.push(newDeals.join(" and "));
    if (fs.length) {
      const names = fs.map((x) => FORMULAS.get(x).name);
      if (!(label || names.length === 1 && nextText.startsWith(names[0].toLowerCase().replace(/\s*\(.*$/, "")))) {
        const start = !before.trim() || /[.!?]\s*$/.test(before);
        // "F-CORE-29 exposure" -> "aggregate sponsor exposure", not "... exposure exposure".
        const nextWord = (/^\s+([A-Za-z-]+)/.exec(after) || [])[1];
        const last = names.length - 1;
        if (nextWord) { const bare2 = names[last].replace(/\s*\([^)]*\)\s*$/, ""); if (new RegExp(`\\s${nextWord}$`, "i").test(bare2)) names[last] = bare2.replace(new RegExp(`\\s+${nextWord}$`, "i"), ""); }
        const items = fs.map((x, k) => { const nm = start && k === 0 ? names[k] : lowerName(names[k]); return plain ? nm : ph({ t: "flink", id: x, text: nm }); });
        pieces.push(items.length > 1 ? items.slice(0, -1).join(", ") + " and " + items[items.length - 1] : items[0]);
      }
    }
    if (rs.length) {
      if (label) { /* the label that follows names it */ }
      else if (bare) pieces.push([...new Set(rs.map((x) => RULES.get(x).topic || RULES.get(x).name))].join("; ") + cite(rs));
      else if (/\b(?:rule|rules|policy|policies|limit|limits|section|requirement)\s+$/i.test(before)) pieces.push("\u0004" + cite(rs));
      else {
        const aft = after.replace(/\u0001\d+\u0002/g, "");
        const start = !before.replace(/\u0001\d+\u0002/g, "").trim() || /[.!?]\s*$/.test(before);
        const topics = () => [...new Set(rs.map((x) => refHead(x)))].join("; ");
        if (/^\s*(?:\([^)]*\))?\s*[.;,]?\s*$/.test(aft)) pieces.push((start ? topics() : lowerName(topics())) + cite(rs));   // no verb follows: name it
        else if (/^\s+(?:met|not met|passes|passed|fails|failed|applies|holds|binds|breached|satisfied|cleared)\s*(?:[.,;:)]|$)/i.test(aft)) pieces.push((start ? "Policy test" : "the policy test") + wcite(rs));
        else {
          const art = /\b(?:the|a|an|this|that|our|its|each|every|any|whose)\s+$/i.test(before) ? "policy"
            : start ? "Our credit policy" : /:\s*$/.test(before) ? "see the policy" : "the policy";
          pieces.push(art + wcite(rs));
        }
      }
    }
    if (ss.length && !label) {
      const st = /SLT-([A-Z]{2})-0(\d)/.exec(ss[0]);
      const href = st && STATE_OF_SLT[st[1]] ? `#state-law/${STATE_OF_SLT[st[1]]}/${st[2] === "2" ? "com" : "res"}` : "#state-law";
      if (!/State Law Table\s*$/i.test(before)) {
        const txt = /\bthe\s+$|,\s*$/i.test(before) ? "state law guide" : bare ? "State law guide" : "the state law guide";
        pieces.push(plain ? txt : ph({ t: "slt", href, text: txt }));
      }
    }
    let out = pieces.filter(Boolean).join(" and ");
    if (colon && !label) out += out ? colon : "";
    else if (colon && label) out += "\u0005";          // the label after it starts the sentence
    return out;
  });
  // 4. Basis and status words read as plain words.
  L = L.replace(/\b(JUDGMENT|MARKET|LEGAL)\b/g, (w, _, off, str) => {
    const low = { JUDGMENT: "judgment", MARKET: "market", LEGAL: "legal" }[w];
    const before = str.slice(0, off).replace(/\u0001\d+\u0002/g, "");
    return !before.trim() || /[.!?:|]\s*$/.test(before) ? low[0].toUpperCase() + low.slice(1) : low;
  });
  // 5. Tidy what the removals leave behind.
  L = L.replace(/\u0005\s*(\S)/g, (m, c) => c.toUpperCase()).replace(/\u0005/g, "").replace(/\s*\u0004/g, "")
    .replace(/\(\s*[,;:]?\s*\)/g, "").replace(/\(\s*[,;]\s*/g, "(").replace(/\s*[,;]\s*\)/g, ")")
    .replace(/[ \t]+([,.;:!?)])/g, "$1").replace(/\(\s+/g, "(").replace(/([,;])\s*[,;]/g, "$1")
    .replace(/[ \t]{2,}/g, " ").replace(/^\s*[,;]\s*/, "").replace(/\b(and|or)\s+(and|or)\b/g, "$1")
    .replace(/(\u0001(\d+)\u0002)([.,;:!?]+)/g, (m, p, k, punct) => (objs[Number(k)].t === "cite" && !objs[Number(k)].word ? punct + p : m))
    .replace(/[ \t]+(\u0001\d+\u0002)/g, (m, p, off, str) => (objs[Number(p.slice(1, -1))].t === "cite" ? p : m));
  // Adjacent markers merge into one.
  L = L.replace(/\u0001(\d+)\u0002(?:\s*\u0001(\d+)\u0002)+/g, (m) => {
    const ns = [...m.matchAll(/\u0001(\d+)\u0002/g)].map((x) => Number(x[1]));
    if (!ns.every((k) => objs[k].t === "cite")) return m;
    objs[ns[0]].ids = [...new Set(ns.flatMap((k) => objs[k].ids))];
    return `\u0001${ns[0]}\u0002`;
  });
  const parts = [];
  for (const bit of L.split(/(\u0001\d+\u0002)/)) {
    if (!bit) continue;
    const m = /^\u0001(\d+)\u0002$/.exec(bit);
    parts.push(m ? objs[Number(m[1])] : bit);
  }
  return parts;
}
/** Plain learner text (search snippets, titles, aria labels, popovers). */
function learnerString(s) {
  if (!s) return s;
  const parts = learnParts(s, true);
  if (!parts) return s;
  return parts.map((p) => (typeof p === "string" ? p : p.text || "")).join("").replace(/\s{2,}/g, " ").trim();
}
/** Diagram labels: plain names without brackets, so the diagram source stays valid. */
const learnerLabel = (s) => (HAS_ID_RE.test(s) ? learnerString(s).replace(/[()[\]{}"|]/g, "") : s);

/* ---------- IDs in the DOM ---------- */
function textNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => n.parentElement.closest("pre, textarea, select, script, style, .mermaid-diagram, .fcard .math, .math, .imath, .cx, .src, .code-a, .noid") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function refBtn(id) {
  const b = el("button", "ref", id); b.type = "button"; b.dataset.ref = id; b.title = refTitle(id);
  b.setAttribute("aria-label", `${id}: ${refTitle(id).replace(/[.…]+$/, "")}. Look up`);
  return b;
}
/** Audit text: IDs as quiet lookup buttons, never broken mid-token. */
function quietize(s) {
  const frag = document.createDocumentFragment(); let last = 0, m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(s))) {
    const id = m[0];
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
function newCiteCtx() { return { n: 0, byId: new Map() }; }
/** Each rule or formula gets one number per page; a later citation of it reuses that number. */
function citeMarker(ids, ctx) {
  const key = ids.join(" ");
  const fresh = [];
  const nums = ids.map((id) => { if (!ctx.byId.has(id)) { ctx.byId.set(id, ++ctx.n); fresh.push(id); } return ctx.byId.get(id); });
  const uniq = [...new Set(nums)].sort((a, b) => a - b);
  const n = uniq[0];
  const wrap = el("span", "cx-m");
  const b = el("button", "cite", uniq.join(",")); b.type = "button"; b.dataset.refs = key; b.dataset.n = String(n);
  b.dataset.idn = ids.map((id, k) => `${id}:${nums[k]}`).join(" ");
  if (fresh.length) { b.dataset.first = "1"; b.dataset.fresh = fresh.join(" "); }
  b.setAttribute("aria-label", `Citation ${uniq.join(", ")}: ${ids.map(refTitle).join("; ")}`); b.setAttribute("aria-haspopup", "dialog");
  wrap.append(b);
  return wrap;
}
/** A short plain title: the formula's name, or the policy topic a rule sits under. */
function refHead(id) {
  const r = refInfo(id); if (!r) return id;
  if (r.kind !== "rule") return r.name;
  return (r.block ? r.name : (r.topic || r.name)).replace(/\s*\([^)]*\)\s*$/, "").replace(/\s*:\s*.*$/, "").trim();
}
/** Topic plus a short label of at most about six words, for links that name one rule. */
function ruleLabel(id) {
  const r = refInfo(id); if (!r || r.kind !== "rule") return refTitle(id);
  const head = refHead(id);
  if (r.block) return head;
  let words = shortName(r.rule).replace(/…$/, "").split(/\s+/);
  if (words.length > 6) { words = words.slice(0, 6); while (words.length > 3 && /^(a|an|the|of|to|and|or|in|on|for|at|by|with|is|are|must)$/i.test(words[words.length - 1])) words.pop(); }
  const label = words.join(" ").replace(/[,;:]$/, "");
  return `${head}: ${label[0].toLowerCase() + label.slice(1)}`;
}
/** The full learner text of a rule or formula (no ellipsis). */
const refBody = (id) => { const r = refInfo(id); return r ? plainText(learnerString(r.kind === "formula" ? (r.purpose || r.text) : (r.rule || r.text))) : ""; };
function formulaLink(id, text) {
  const a = el("a", "fl", text || refTitle(id)); a.href = formulaHref(id); a.dataset.id = id; return a;
}
/** One audit-only code, for places that list IDs (reference lists, lookups, cards). */
const codeA = (id) => el("span", "code-a", id);
const PLAIN_SEL = "button, a, summary, label, legend, option, h1, h2, h3, h4, h5, h6, th, dt, .opt, .plain-ids, .exdeal, .extype";
/**
 * Rewrites every ID under root for the learner (see learnParts). Safe to run more than once.
 * ctx numbers the citation markers on one page; a fresh one is made when none is given.
 */
let pageCtx = null;          // the citation numbering of the step or page being built
function linkIds(root, mode, ctx) {
  ctx = ctx || pageCtx || newCiteCtx();
  // "(**F-CORE-10**)" reads as one string once the bold around a bare ID is gone.
  for (const e of [...root.querySelectorAll("strong, em, b, i, code")]) {
    if (e.closest("pre, .cx, .fcard, .code-a") || e.children.length) continue;
    if (WHOLE_ID_RE.test(e.textContent.trim())) e.replaceWith(document.createTextNode(e.textContent));
  }
  root.normalize();
  for (const n of textNodes(root)) {
    const s = n.nodeValue;
    if (!HAS_ID_RE.test(s)) continue;
    const plain = mode === "plain" || !!n.parentElement.closest(PLAIN_SEL);
    const parts = learnParts(s, plain);
    if (!parts) continue;
    const cx = el("span", "cx"), raw = el("span", "cx-raw"), lv = el("span", "cx-l");
    raw.append(plain ? s : quietize(s));
    for (const p of parts) {
      if (typeof p === "string") lv.append(p);
      else if (p.t === "cite") lv.append(citeMarker(p.ids, ctx));
      else if (p.t === "flink") lv.append(formulaLink(p.id, p.text));
      else if (p.t === "slt") { const a = el("a", "fl", p.text); a.href = p.href; lv.append(a); }
    }
    cx.append(raw, lv);
    n.replaceWith(cx);
    const cell = cx.closest("td, th");
    if (cell && cell.closest(".tbl") && lv.textContent.trim().length > 12) cell.classList.add("wcell");
  }
  return ctx;
}
/** Every distinct rule and formula under root, in reading order, with the citation numbers that point at it. */
function collectRefs(root) {
  const seen = new Map();
  for (const b of root.querySelectorAll(".cx-l .cite[data-refs], .cx-l a.fl[data-id]")) {
    if (b.closest(".reflist")) continue;
    const pairs = b.dataset.idn ? b.dataset.idn.split(" ").map((x) => x.split(":")) : [[b.dataset.id, ""]];
    for (const [id, n] of pairs) {
      if (!known(id)) continue;
      if (!seen.has(id)) seen.set(id, new Set());
      if (n) seen.get(id).add(Number(n));
    }
  }
  return [...seen].map(([id, ns]) => ({ id, ns: [...ns].sort((a, b) => a - b) }));
}
/** A rule or formula by name: rules open the lookup, formulas go to their page. The ID shows in Audit mode. */
function refName(id) {
  const r = refInfo(id);
  if (r.kind === "formula") { const a = formulaLink(id, r.name); a.append(" ", codeA(id)); return a; }
  const b = el("button", "refname", r.name); b.type = "button"; b.dataset.ref = id; b.append(" ", codeA(id));
  return b;
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
    li.append(n, refName(r.id), el("span", "kind", refInfo(r.id).kind === "formula" ? "Formula" : "Policy rule"));
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
    const top = el("span", "nm"); top.append(el("b", "", refHead(id)), " ", codeA(id));
    row.append(top, el("span", "tx", refBody(id)));
    row.addEventListener("click", () => { closePop(false); openDrawer(id, b); });
    const li = el("li"); li.append(row); ul.append(li);
  }
  openPop(b, [el("h2", "", `Citation ${b.dataset.n}`), ul], `Citation ${b.dataset.n}`);
  if (focusIn) { const f = $("pop").querySelector("button"); if (f) f.focus(); }
}
function openSrcPop(b) {
  const full = b.dataset.full || "", kindLabel = b.querySelector(".short").textContent;
  const detail = learnerString(full.replace(/^[A-Z]+:?\s*/, "").trim());
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
  const r = t.closest(".ref, .refname");
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
function modLinks(mods) {
  const ul = el("ul", "used");
  for (const m of mods) { const li = el("li"); const a = el("a", "", `${m.code} ${m.title.split(":")[0]}`); a.href = "#" + m.key; a.title = m.title; li.append(a); ul.append(li); }
  return ul;
}
function paintDrawer(id) {
  const r = refInfo(id); if (!r) return false;
  $("drawer-title").replaceChildren(codeA(id));
  const famKey = id.replace(/^F-/, "").split("-")[0];
  $("drawer-fam").textContent = r.kind === "formula" ? `${FAMILY[famKey] || ""} formula` : r.kind === "decision" ? "Policy decision" : `${FAMILY[famKey] || ""} policy rule`;
  const body = $("drawer-body"); body.replaceChildren();
  const h = el("h2", "", r.name); h.id = "drawer-name"; h.tabIndex = -1;
  body.append(h);
  if (r.kind === "formula") {
    if (r.purpose) body.append(drawerSection("What it is for", mdBlock(r.purpose)));
    if (r.words) {
      const fig = el("figure", "fcard"); fig.append(el("div", "lab", "Formula"));
      if (r.tex) { const m = el("div", "math", r.tex); m.dataset.tex = r.tex; fig.append(m); }
      body.append(drawerSection("The formula", mdBlock(r.words), r.tex ? fig : null));
    }
    if (r.read) body.append(drawerSection("How to read the result", mdBlock(r.read)));
  } else {
    body.append(drawerSection(r.kind === "decision" ? "The decision" : "The rule", mdBlock(r.rule || r.text || "")));
    if (r.limit) body.append(drawerSection("Limit at a glance", mdBlock(r.limit)));
    if (r.basis || r.why) {
      const basis = r.basis ? el("span", "basis", "Basis: " + r.basis) : null;
      body.append(drawerSection(r.kind === "decision" && /\*\*A\*\*/.test(r.why) ? "Options considered" : "Why it exists", basis, r.why ? mdBlock(r.why) : null));
    }
    if (r.applies) body.append(drawerSection("Applies to", mdBlock(r.applies)));
  }
  const used = usedIn(id);
  if (used.length) body.append(drawerSection("Taught in", modLinks(used)));
  const go = el("a", "btn sm", r.kind === "formula" ? "Open the formula page" : "Open in the policy rules");
  go.href = r.kind === "formula" ? formulaHref(id) : "#policy/" + id; go.style.justifySelf = "start";
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
  // A link inside the drawer closes it before the page changes.
  $("drawer").addEventListener("click", (e) => { const a = e.target.closest("a[href^='#']"); if (a) closeModal($("drawer"), false); });
}
