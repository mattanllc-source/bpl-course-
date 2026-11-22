/* ---------- running-deal illustrations (inline SVG, drawn in the brand line style) ---------- */
const ART = {
  "RD-RES-01": `<svg viewBox="0 0 240 132" role="img" aria-label="Line drawing of a single-family house with a maple tree"><path class="thin" d="M12 112h216M12 116h216"/><path class="ln" d="M46 112V84"/><path class="soft" d="M46 34c16 0 27 12 27 27S62 88 46 88 19 76 19 61s11-27 27-27z"/><path class="ln" d="M46 70l-9-9M46 62l8-8"/><path class="body" d="M92 112V70l40-30 40 30v42z"/><path class="ln" d="M84 74l48-36 48 36"/><path class="body" d="M152 46V34h12v21"/><path class="body" d="M172 112V86h34v26z"/><path class="ln" d="M168 86h42"/><path class="soft" d="M178 94h22v18h-22z"/><path class="ln" d="M178 100h22M178 106h22"/><path class="acc" d="M124 88h16v24h-16z"/><path class="ln" d="M136 101h.5"/><path class="soft" d="M100 82h14v14h-14zM150 82h14v14h-14z"/><path class="ln" d="M107 82v14M100 89h14M157 82v14M150 89h14"/><circle class="soft" cx="132" cy="60" r="5"/><path class="ln" d="M118 112h28"/></svg>`,
  "RD-MF-01": `<svg viewBox="0 0 240 132" role="img" aria-label="Line drawing of a three-story garden apartment building with a cedar tree"><path class="thin" d="M12 112h216M12 116h216"/><path class="body" d="M40 112V36h132v76z"/><path class="ln" d="M34 36h144M40 61h132M40 86h132"/><path class="body" d="M92 112V28h28v84z"/><path class="ln" d="M88 28h36"/><path class="acc" d="M99 94h14v18H99z"/><path class="ln" d="M94 90h24"/><path class="soft" d="M100 38h12v12h-12zM100 64h12v12h-12z"/><g class="soft"><path d="M48 43h14v12H48zM70 43h14v12H70zM128 43h14v12h-14zM150 43h14v12h-14zM48 68h14v12H48zM70 68h14v12H70zM128 68h14v12h-14zM150 68h14v12h-14zM48 93h14v12H48zM70 93h14v12H70zM128 93h14v12h-14zM150 93h14v12h-14z"/></g><path class="ln" d="M46 57h18M68 57h18M126 57h18M148 57h18M46 82h18M68 82h18M126 82h18M148 82h18"/><path class="ln" d="M202 112V98"/><path class="soft" d="M202 30l-13 26h7l-10 22h8l-9 20h34l-9-20h8l-10-22h7z"/></svg>`,
  "RD-COM-01": `<svg viewBox="0 0 240 132" role="img" aria-label="Line drawing of a strip retail center with four storefronts and a birch tree"><path class="thin" d="M12 112h216M12 116h216"/><path class="ln" d="M28 112V62"/><path class="ln" d="M26 96h4M26 84h4M26 72h4"/><path class="soft" d="M28 26c9 0 15 8 15 19s-6 19-15 19-15-8-15-19 6-19 15-19z"/><path class="body" d="M52 112V58h168v54z"/><path class="body" d="M112 58V40h48v18z"/><path class="ln" d="M120 49h32"/><path class="ln" d="M48 58h176"/><path class="acc" d="M56 66h36l-3 10H59zM98 66h36l-3 10h-30zM140 66h36l-3 10h-30z"/><path class="dash" d="M182 66h32v46h-32z"/><path class="soft" d="M59 82h18v30H59zM101 82h18v30h-18zM143 82h18v30h-18z"/><path class="body" d="M80 86h10v26H80zM122 86h10v26h-10zM164 86h10v26h-10z"/><path class="ln" d="M87 100h.5M129 100h.5M171 100h.5"/><path class="thin" d="M70 124l6-8M100 124l6-8M130 124l6-8M160 124l6-8M190 124l6-8"/></svg>`,
};
function dealArt(id) { const d = el("div", "art"); d.innerHTML = ART[id] || ""; return d; }
const dealName = (d) => d.title.split(" ").slice(0, 2).join(" ");

/* ---------- shared view state ---------- */
let view = "home";
let flushers = [];
let routeTok = 0;
let cur = null;             // the open module's controller
const flushAll = () => { for (const f of flushers) { try { f(); } catch { /* ignore */ } } };
function setTitle(t) { document.title = t ? `${t} · BPL Academy` : "BPL Academy"; }
function setCrumbs(parts) {
  const c = $("crumbs"); c.replaceChildren();
  $("barmod").textContent = cur ? (MODS.find((x) => x.key === cur.key) || {}).code || "" : "";
  parts.forEach((p, i) => { if (i) c.append(el("span", "sep", "/")); c.append(i === parts.length - 1 ? el("b", "", p) : el("span", "", p)); });
}
function focusHeading(h) { if (!h) return; if (!h.hasAttribute("tabindex")) h.tabIndex = -1; h.focus({ preventScroll: true }); }

/* ---------- progress ---------- */
function progress() {
  let done = 0, w = 0, total = 0, started = 0;
  for (const m of MODS) {
    total += weight(m);
    const s = state.status[m.key] || "not-started";
    if (s === "done") { done++; w += weight(m); } else if (s === "in-progress") started++;
  }
  return { done, w, total, started, pct: total ? Math.round(w / total * 100) : 0 };
}
function paintProgress() {
  const p = progress();
  const ring = $("ring"); ring.querySelector(".val").style.strokeDashoffset = String(94.25 * (1 - p.pct / 100));
  ring.querySelector("b").textContent = String(p.pct);
  $("ring-text").textContent = `Course progress ${p.pct}%: ${p.done} of ${MODS.length} modules done. Go to course home`;
  ring.title = `${p.done} of ${MODS.length} modules done`;
  for (const m of MODS) {
    const s = state.status[m.key] || "not-started";
    const a = document.querySelector(`#nav-modules a[data-key="${m.key}"]`);
    if (a && a.dataset.s !== s) { a.dataset.s = s; a.querySelector(".glyph-w").replaceWith(glyph(s)); a.querySelector(".sr").textContent = `, ${STATUS_TEXT[s].toLowerCase()}`; }
  }
  const pill = $("pill");
  if (pill) { const s = state.status[pill.dataset.for] || "not-started"; pill.dataset.s = s; pill.textContent = STATUS_TEXT[s]; }
  const btn = $("donebtn");
  if (btn) { const d = (state.status[btn.dataset.for] || "") === "done"; btn.textContent = d ? "Module done. Undo" : "Mark module done"; btn.classList.toggle("primary", !d); }
}

/* ---------- course rail ---------- */
const REF_ICON = { policy: "policy", formulas: "fx", deals: "deal", "state-law": "map", glossary: "book" };
function buildNav() {
  const home = el("li"); const ha = el("a"); ha.href = "#home"; ha.dataset.key = "home"; ha.append(icon("home"), "Course home"); home.append(ha); $("nav-home").append(home);
  const ol = $("nav-modules");
  for (const m of MODS) {
    const li = el("li"); const a = el("a"); a.href = "#" + m.key; a.dataset.key = m.key; a.dataset.s = "not-started";
    const t = el("span", "t", m.title.split(":")[0]); t.title = m.title;
    a.append(el("span", "code", m.code), t, glyph("not-started"), el("span", "sr", ", not started"));
    li.append(a); ol.append(li);
  }
  const ul = $("nav-refs");
  for (const r of [...REFS, { key: "glossary", title: "Glossary" }]) {
    const li = el("li"); const a = el("a"); a.href = "#" + r.key; a.dataset.key = r.key; a.append(icon(REF_ICON[r.key] || "book"), r.title); li.append(a); ul.append(li);
  }
}
function paintNavCurrent(key) {
  for (const a of document.querySelectorAll("#rail > ul a, #nav-modules > li > a, #nav-refs a")) {
    if (a.dataset.key === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  }
  for (const s of document.querySelectorAll("#nav-modules > li > .sub")) if (!cur || s.dataset.for !== key) s.remove();
}
const railSmall = () => matchMedia("(max-width: 1199px)").matches;
function openRail() {
  const r = $("rail"); r.classList.add("open"); $("menu").setAttribute("aria-expanded", "true");
  r.setAttribute("role", "dialog"); r.setAttribute("aria-modal", "true");
  openModal(r, { trigger: $("menu"), focus: r.querySelector("[aria-current]") || $("rail-close"), onClose: () => { r.hidden = false; r.classList.remove("open"); r.removeAttribute("role"); r.removeAttribute("aria-modal"); $("menu").setAttribute("aria-expanded", "false"); } });
}
function closeRail(restore) { if ($("rail").classList.contains("open")) closeModal($("rail"), restore); }

/* ---------- home ---------- */
function resumeTarget() {
  const open = MODS.filter((m) => (state.status[m.key] || "") !== "done");
  if (!open.length) return null;
  const recent = open.filter((m) => pos[m.key] && pos[m.key].t).sort((a, b) => pos[b.key].t - pos[a.key].t)[0];
  const m = recent || open[0], p = pos[m.key] || {};
  const started = !!recent || (state.status[m.key] || "") === "in-progress";
  let where = "", href = "#" + m.key;
  if (recent && p.step) { where = p.label || ""; href += "/" + p.step + (p.page ? "/" + (p.page + 1) : ""); }
  return { m, started, where, href };
}
function showHome(focus) {
  view = "home"; routeTok++; cur = null;
  const doc = $("doc"); doc.className = "doc home";
  const p = progress(), any = p.done + p.started > 0 || Object.keys(pos).length > 0;
  const hero = el("header", "hero");
  const h1 = el("h1", "display", any ? "Welcome back" : "Core course: business-purpose real estate lending"); h1.tabIndex = -1;
  hero.append(el("p", "eyebrow", "BPL Academy · Core course C0-C14"), h1,
    el("p", "lede", `${MODS.length} modules take you from the market to the exit. Three running deals carry through every module: ${DEALS.map(dealName).join(", ").replace(/, ([^,]*)$/, " and $1")}.`), el("div", "rule"));
  // resume card + progress
  const dash = el("div", "dash");
  const cont = el("section", "card cont"); const tx = el("div", "tx");
  const r = resumeTarget();
  if (r) {
    const deal = DEALS[MODS.indexOf(r.m) % Math.max(1, DEALS.length)];
    tx.append(el("p", "eyebrow", r.started ? "Continue where you left off" : "Start here"), el("h2", "", `${r.m.code}: ${r.m.title}`),
      el("p", "", [r.where, loadText(r.m), prereqText(r.m.prereq)].filter(Boolean).join(" · ")));
    const a = el("a", "btn primary", r.started ? `Continue ${r.m.code}` : `Start ${r.m.code}`); a.href = r.href; tx.append(a);
    cont.append(tx); if (deal) { const art = dealArt(deal.id); art.setAttribute("aria-hidden", "true"); art.querySelector("svg").removeAttribute("role"); cont.append(art); }
  } else { tx.append(el("p", "eyebrow", "Course complete"), el("h2", "", "Every module is marked done."), el("p", "", "Review any module from the learning path below.")); cont.append(tx); }
  const prog = el("section", "card prog"); prog.setAttribute("aria-label", "Your progress");
  const big = ringSvg(39, 92);
  const ringBox = el("div", "bigring"); ringBox.innerHTML = big.html + `<b>${p.pct}%</b>`; ringBox.querySelector(".val").style.strokeDashoffset = String(big.c * (1 - p.pct / 100));
  const dl = el("dl");
  const row = (k, v) => { const d = el("div"); d.append(el("dt", "", k), el("dd", "", v)); dl.append(d); };
  row("Modules done", `${p.done} of ${MODS.length}`); row("In progress", String(p.started)); row("Study load done", `${num1(p.w)} of ${num1(p.total)}`);
  prog.append(ringBox, dl, el("p", "cap", "The ring counts finished study load: CPE credits where a module projects them, Course Bible hours otherwise."));
  dash.append(cont, prog);
  // learning path
  const path = el("section", "sect"); const ph = el("header"); ph.append(el("h2", "h2", "Learning path"), el("p", "", "Work the modules in order. Each one builds on the last."));
  const list = el("ol", "plist card");
  for (const m of MODS) {
    const li = el("li"); const a = el("a"); a.href = "#" + m.key;
    const s = state.status[m.key] || "not-started";
    const mid = el("span", "t"); mid.append(m.title, el("small", "", [loadText(m), prereqText(m.prereq)].join(" · ")));
    const pill = el("span", "pill", STATUS_TEXT[s]); pill.dataset.s = s;
    a.append(glyph(s), el("span", "code", m.code), mid, pill); li.append(a); list.append(li);
  }
  path.append(ph, list);
  // running deals
  const ds = el("section", "sect"); const dh = el("header"); dh.append(el("h2", "h2", "The running deals"), el("p", "", "Fictional borrowers and properties, used in every module."));
  const dg = el("div", "deals");
  for (const d of DEALS) {
    const a = el("a", "card deal"); a.href = "#deals/" + d.id;
    const t = el("div", "tx");
    t.append(el("span", "id", d.id), el("h3", "", dealName(d)), el("span", "tags", [d.family, d.state, d.title.replace(dealName(d), "").trim()].filter(Boolean).join(" · ")), el("p", "", d.summary));
    a.append(dealArt(d.id), t); dg.append(a);
  }
  ds.append(dh, dg);
  // reference tiles
  const rs = el("section", "sect"); const rh = el("header"); rh.append(el("h2", "h2", "Reference shelf"));
  const tiles = el("div", "tiles");
  const TILE = { policy: "Every rule, with its basis and source.", formulas: "Every formula, worked with real numbers.", deals: "The full file for each running deal.", "state-law": "State rules for Ohio, North Carolina and Indiana, with sources.", glossary: `${GLOSSARY.length} terms in plain English.` };
  for (const r2 of [...REFS, { key: "glossary", title: "Glossary" }]) {
    const a = el("a", "card tile"); a.href = "#" + r2.key; a.append(icon(REF_ICON[r2.key] || "book"), el("b", "", r2.title), el("span", "", TILE[r2.key] || "")); tiles.append(a);
  }
  rs.append(rh, tiles);
  const how = el("section", "card howto");
  how.innerHTML = `<h2>How this works</h2><ul>
<li>Each module is a short series of steps: Overview, Learn, Exercises, Practice, Quiz, OJT task, Job aid and Wrap-up.</li>
<li>Learn is split into short parts. Your place in each module is remembered in this browser.</li>
<li>Small numbers in the text, like this<sup style="font:500 11px var(--font-mono);color:var(--brand)">1</sup>, cite a rule or formula. Tap one to read it. Turn on Audit mode to see every ID in the text.</li>
<li>Answers stay hidden until you ask. Work each item yourself first.</li>
<li>Your answers, notes and progress save as you go. The line under the course menu says where.</li></ul>`;
  doc.replaceChildren(hero, dash, path, ds, rs, how);
  setTitle(""); setCrumbs(["Course home"]);
  if (focus) focusHeading(h1);
}

/* ---------- reference pages ---------- */
function showRef(r, anchor, focus) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc"); doc.className = "doc refpage";
  const head = el("header", "hero"); const h1 = el("h1", "display", r.title);
  head.append(el("p", "eyebrow", "Reference"), h1, el("p", "lede", r.note), el("div", "rule"));
  const prose = el("div", "prose");
  prose.append(...render(r.md).childNodes); linkIds(prose, "quiet");
  doc.replaceChildren(head, prose);
  renderMath(prose); markScrollers(prose);
  setTitle(r.title); setCrumbs(["Reference", r.title]);
  let target = null;
  if (anchor) {
    if (r.key === "policy") target = [...prose.querySelectorAll("tbody tr")].find((tr) => tr.children[0] && tr.children[0].textContent.trim() === anchor && /^rule id$/i.test(tr.closest("table").querySelector("th")?.textContent.trim() || "")) || [...prose.querySelectorAll("tbody tr")].find((tr) => tr.children[0] && tr.children[0].textContent.trim() === anchor) || [...prose.querySelectorAll("p > strong")].find((s) => s.textContent.includes(`(${anchor})`));
    else target = [...prose.querySelectorAll("h2, h3")].find((h) => h.textContent.trim().startsWith(anchor));
  }
  if (target) { target.classList.add("hit"); target.tabIndex = -1; target.scrollIntoView({ block: "center" }); target.focus({ preventScroll: true }); }
  else if (focus) focusHeading(h1);
}

/* ---------- glossary ---------- */
function inlineMd(md) { const d = el("div"); d.append(...render(md, { idPrefix: "g-" }).childNodes); linkIds(d, "quiet"); return d; }
function showGlossary(anchor, focus) {
  view = "glossary"; routeTok++; cur = null;
  const doc = $("doc"); doc.className = "doc refpage";
  const head = el("header", "hero"); const h1 = el("h1", "display", "Glossary");
  head.append(el("p", "eyebrow", "Reference"), h1, el("p", "lede", `${GLOSSARY.length} terms from the Course Bible. Worked-example numbers are illustrative and fictional; a limit shown in an example is for arithmetic only, never policy.`));
  const tools = el("div", "gtools");
  const q = el("input"); q.type = "search"; q.id = "gq"; q.placeholder = "Filter terms, for example DSCR or draw"; q.autocomplete = "off";
  const ql = el("label", "sr", "Filter glossary terms"); ql.htmlFor = "gq";
  const rowEl = el("div", "row"); rowEl.setAttribute("role", "group"); rowEl.setAttribute("aria-label", "Family");
  const fams = ["All", ...new Set(GLOSSARY.map((g) => g.family))];
  let fam = "All";
  const count = el("span", "count"); count.setAttribute("role", "status");
  const chips = fams.map((f) => { const b = el("button", "chip", f); b.type = "button"; b.setAttribute("aria-pressed", String(f === fam)); b.addEventListener("click", () => { fam = f; chips.forEach((c) => c.setAttribute("aria-pressed", String(c === b))); paint(); }); rowEl.append(b); return b; });
  rowEl.append(count);
  tools.append(ql, q, rowEl);
  const list = el("div", "glist");
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  const items = sorted.map((g) => {
    const d = el("dl", "gterm"); d.id = "term-" + g.n; d.style.margin = "0";
    const dt = el("dt", "", plainText(g.term)); dt.append(el("small", "", `${g.family} · first used in ${g.first}`));
    const dd = el("dd"); dd.append(...inlineMd(g.def).childNodes);
    if (g.ex) { const det = el("details"); const box = inlineMd(g.ex); det.append(el("summary", "", "Formula and worked example"), box); dd.append(det); }
    d.append(dt, dd);
    return { g, d, hay: (g.term + " " + g.def).toLowerCase(), letter: (plainText(g.term)[0] || "#").toUpperCase() };
  });
  function paint() {
    const needle = q.value.trim().toLowerCase(); let n = 0, last = "";
    list.replaceChildren();
    for (const it of items) {
      if ((fam !== "All" && it.g.family !== fam) || (needle && !it.hay.includes(needle))) continue;
      const L = /[A-Z]/.test(it.letter) ? it.letter : "0-9";
      if (L !== last) { last = L; list.append(el("h2", "gletter", L)); }
      list.append(it.d); n++;
    }
    count.textContent = `${n} of ${items.length} terms`;
    if (!n) list.append(el("p", "loading", "No terms match. Try a shorter word, or search the whole course with the search button."));
  }
  q.addEventListener("input", paint);
  paint();
  doc.replaceChildren(head, tools, list);
  renderMath(list);
  setTitle("Glossary"); setCrumbs(["Reference", "Glossary"]);
  const t = anchor ? $("term-" + anchor) : null;
  if (t) { t.classList.add("hit"); t.tabIndex = -1; t.scrollIntoView({ block: "center" }); t.focus({ preventScroll: true }); }
  else if (focus) focusHeading(h1);
}

/* ---------- search (client-side, built on first use; quiz and answer keys are left out) ---------- */
const STEPS = [
  { id: "overview", label: "Overview", re: /^(hook|objectives?)/i },
  { id: "learn", label: "Learn", re: /^teach/i },
  { id: "practice", label: "Practice", re: /^practice/i },
  { id: "quiz", label: "Quiz", re: /^quiz/i },
  { id: "ojt", label: "OJT task", re: /^ojt/i },
  { id: "jobaid", label: "Job aid", re: /^job aid/i },
  { id: "wrapup", label: "Wrap-up", re: /^wrap/i },
];
let searchIndex = null;
function buildSearchIndex() {
  const idx = [];
  for (const m of MODS) {
    let step = "overview", page = 0, title = m.title, buf = [], code = false, skip = false;
    const push = () => { const text = plainText(buf.join(" ")); if (text.length > 20 && step !== "quiz" && step !== "practice") idx.push({ type: "lesson", key: m.key, code: m.code, step, page, title, text, low: (title + " " + text).toLowerCase() }); buf = []; };
    for (const line of m.md.split("\n")) {
      if (/^```/.test(line)) { code = !code; continue; }
      if (code || line.startsWith("|")) { if (!code && !skip) buf.push(line.replace(/\|/g, " ").replace(/-{3,}/g, "")); continue; }
      const h = /^(#{2,4})\s+(.*)$/.exec(line);
      if (h) {
        push(); skip = false;
        const t = plainText(h[2]);
        if (h[1].length === 2) { const s = STEPS.find((x) => x.re.test(t)); if (s) { step = s.id; page = 0; } }
        else if (h[1].length === 3 && step === "learn") page++;
        title = t; continue;
      }
      if (/^\*\*(Answer key|Model answer)/i.test(line)) skip = true;
      if (!skip) buf.push(line);
    }
    push();
  }
  for (const g of GLOSSARY) { const t = plainText(g.term), d = plainText(g.def); idx.push({ type: "glossary", n: g.n, title: t, text: d, low: (t + " " + d).toLowerCase() }); }
  for (const r of [...RULES.values(), ...FORMULAS.values()]) idx.push({ type: "ref", id: r.id, title: r.name, text: r.kind === "formula" ? r.text : plainText(r.rule).slice(0, 400), low: (r.id + " " + r.name + " " + plainText(r.rule || r.text || "")).toLowerCase() });
  return idx;
}
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function markText(node, text, toks) {
  const re = new RegExp("(?<![A-Za-z0-9])(" + toks.map(escRe).join("|") + ")", "ig"); let last = 0, m;
  while ((m = re.exec(text))) { node.append(text.slice(last, m.index), el("mark", "", m[0])); last = m.index + m[0].length; if (!m[0]) break; }
  node.append(text.slice(last));
}
function runSearch(qv) {
  const res = $("search-res"), foot = $("search-foot"); res.replaceChildren();
  const toks = qv.toLowerCase().split(/\s+/).filter((t) => t.length >= 2);
  if (!toks.length) { res.append(el("p", "empty", "Type two or more letters. Try “per diem”, “DSCR” or a rule ID such as CORE-CLS-04.")); foot.textContent = ""; return; }
  if (!searchIndex) searchIndex = buildSearchIndex();
  const hits = [];
  for (const e of searchIndex) {
    if (!toks.every((t) => e.low.includes(t))) continue;
    const tl = e.title.toLowerCase(); let score = 0;
    for (const t of toks) { if (tl.includes(t)) score += 10; if (e.id && e.id.toLowerCase() === t) score += 50; if (tl.startsWith(t)) score += 5; }
    if (e.low.includes(toks.join(" "))) score += 8;
    if (tl.includes(toks.join(" "))) score += 12;
    hits.push({ e, score });
  }
  hits.sort((a, b) => b.score - a.score);
  const groups = [["lesson", "Lessons", 8], ["glossary", "Glossary", 5], ["ref", "Rules and formulas", 6]];
  let shown = 0;
  for (const [type, label, max] of groups) {
    const g = hits.filter((h) => h.e.type === type); if (!g.length) continue;
    const hd = el("h3", "", `${label} (${g.length})`); const ul = el("ul");
    for (const { e } of g.slice(0, max)) {
      const li = el("li"); let row;
      if (type === "ref") { row = el("button", "hitrow"); row.type = "button"; row.addEventListener("click", () => { closeModal($("search"), false); openDrawer(e.id, $("search-open")); }); }
      else { row = el("a"); row.href = type === "glossary" ? `#glossary/${e.n}` : `#${e.key}/${e.step}${e.step === "learn" && e.page ? "/" + e.page : ""}`; if (type === "lesson") row.dataset.anchor = e.title; row.addEventListener("click", () => { pendingAnchor = row.dataset.anchor || ""; closeModal($("search"), false); }); }
      const t = el("span", "t"); markText(t, e.title, toks);
      const x = el("span", "x"); const at = Math.max(0, e.text.toLowerCase().indexOf(toks[0]) - 50); markText(x, (at ? "…" : "") + e.text.slice(at, at + 170), toks);
      row.append(el("span", "k", type === "lesson" ? e.code : type === "glossary" ? "Term" : e.id.replace(/^(F-)?([A-Z]+)-.*/, "$1$2")), t, x);
      li.append(row); ul.append(li); shown++;
    }
    res.append(hd, ul);
  }
  if (!shown) res.append(el("p", "empty", `Nothing found for “${qv}”. Check the spelling, or try one key word.`));
  foot.textContent = shown ? `${hits.length} ${hits.length === 1 ? "result" : "results"}. Quiz items and answer keys are not searched.` : "";
}
let pendingAnchor = "";
function initSearch() {
  const open = () => { if (!$("search").hidden) return; openModal($("search"), { trigger: document.activeElement && document.activeElement !== document.body ? document.activeElement : $("search-open"), focus: $("search-q") }); $("search-q").select(); runSearch($("search-q").value); };
  $("search-open").prepend(icon("search"));
  $("search-open").addEventListener("click", open);
  $("search-close").addEventListener("click", () => closeModal($("search")));
  let t = null;
  $("search-q").addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => runSearch($("search-q").value), 90); });
  $("search").addEventListener("keydown", (e) => {
    const rows = [...$("search-res").querySelectorAll("a, button.hitrow")]; if (!rows.length) return;
    const i = rows.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); rows[Math.min(i + 1, rows.length - 1)].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (i <= 0) $("search-q").focus(); else rows[i - 1].focus(); }
    else if (e.key === "Enter" && document.activeElement === $("search-q")) { e.preventDefault(); clearTimeout(t); runSearch($("search-q").value); const f = $("search-res").querySelector("a, button.hitrow"); if (f) f.click(); }
  });
  document.addEventListener("keydown", (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.key === "/" && !typing && !e.ctrlKey && !e.metaKey && !topModal()) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); open(); }
  });
}

/* ---------- module page ---------- */
function splitSteps(box) {
  const by = Object.fromEntries(STEPS.map((s) => [s.id, []]));
  let target = "overview";
  for (const n of [...box.children]) {
    if (n.tagName === "H2") { const s = STEPS.find((x) => x.re.test(n.textContent.trim())); if (s) target = s.id; }
    by[target].push(n);
  }
  return STEPS.filter((s) => by[s.id].length).map((s) => {
    const sec = el("section", "prose step"); sec.dataset.step = s.id; sec.append(...by[s.id]);
    return { ...s, sec };
  });
}
const wordsIn = (nodes) => nodes.reduce((a, n) => a + (n.textContent.trim().split(/\s+/).length || 0), 0);
const minutes = (w) => Math.max(1, Math.round(w / 200));
/** Learn is paged by teach chunk (the ### headings). */
function splitPages(sec) {
  const kids = [...sec.children]; const pages = []; let pre = [], curP = null;
  for (const n of kids) {
    if (n.tagName === "H2" && !curP) continue;                   // the "Teach" heading is replaced by the step eyebrow
    if (n.tagName === "H3") { curP = { title: n.textContent.trim(), nodes: [n] }; pages.push(curP); }
    else if (curP) curP.nodes.push(n); else pre.push(n);
  }
  if (!pages.length) { const h = el("h3", "", "Learn"); pages.push({ title: "Learn", nodes: [h, ...pre] }); pre = []; }
  if (pre.length) pages[0].nodes.splice(1, 0, ...pre);
  for (const p of pages) p.min = minutes(wordsIn(p.nodes));
  return pages;
}
const OUTLINE_SEL = "h2:not(.step-eyebrow):not(.steptitle), h3:not(.pagetitle), h4, strong.lead-in, .wx > p:first-child > strong:first-child";
function outlineTargets(sec) {
  const out = []; let n = 0;
  const hasH = !!sec.querySelector("h4, h3:not(.pagetitle), h2:not(.step-eyebrow):not(.steptitle)");
  for (const t of sec.querySelectorAll(OUTLINE_SEL)) {
    if (t.closest("[hidden], details:not([open]), .qcard, .reflist, .notes, .fig, .qans, .jobcard table")) continue;
    const isH = /^H[2-4]$/.test(t.tagName);
    const node = isH ? t : t.closest("p") || t;
    if (!node.id) node.id = `o-${++n}-${slug(t.textContent).slice(0, 24)}`;
    const c = t.cloneNode(true); for (const x of c.querySelectorAll(".cx-raw, .cx-m, .secno, .src")) x.remove();
    out.push({ node, label: c.textContent.trim().replace(/[.:]$/, ""), l2: hasH && !isH });
  }
  return out;
}
const spy = { targets: [], links: [], sec: null, bar: null, txt: null, raf: 0 };
function runSpy() {
  spy.raf = 0;
  if (!spy.sec || !spy.sec.isConnected) return;
  const line = 140; let active = -1;
  spy.targets.forEach((t, i) => { if (t.node.getBoundingClientRect().top <= line) active = i; });
  spy.links.forEach((a, i) => { if (i === active) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current"); });
  const r = spy.sec.getBoundingClientRect(), span = Math.max(1, r.height - innerHeight + 200);
  const pct = Math.max(0, Math.min(100, Math.round((line - r.top) / span * 100)));
  if (spy.bar) spy.bar.style.width = pct + "%";
}
addEventListener("scroll", () => { if (!spy.raf) spy.raf = requestAnimationFrame(runSpy); }, { passive: true });
function jumpTo(node) { node.scrollIntoView({ block: "start" }); focusHeading(node); }
function buildOutline(sec, aside, tocM) {
  const ts = outlineTargets(sec);
  spy.targets = ts; spy.sec = sec; spy.links = [];
  aside.replaceChildren(); tocM.replaceChildren(); tocM.hidden = ts.length < 2; aside.hidden = ts.length < 2;
  const mk = (t, store) => {
    const li = el("li"); const a = el("a", t.l2 ? "l2" : "", t.label); a.href = "#" + t.node.id;
    a.addEventListener("click", (e) => { e.preventDefault(); const d = a.closest("details"); if (d) d.open = false; jumpTo(t.node); });
    if (store) spy.links.push(a);
    li.append(a); return li;
  };
  if (ts.length >= 2) {
    const ol = el("ol"); for (const t of ts) ol.append(mk(t, true));
    aside.append(el("h2", "", "On this page"), ol);
    const ol2 = el("ol"); for (const t of ts) ol2.append(mk(t, false));
    tocM.append(el("summary", "", `On this page (${ts.length})`), ol2);
  }
  const pr = el("div", "prog"); const bar = el("div", "bar"); const fill = el("i"); bar.append(fill); pr.append(el("span", "", "Reading progress"), bar);
  pr.setAttribute("aria-hidden", "true");
  aside.append(pr); spy.bar = fill;
  runSpy();
}
/** Margin notes: one per citation marker, aligned to its line, on wide screens only. */
function layoutNotes(reader) {
  const col = reader.querySelector(".mnotes"), stage = reader.querySelector(".stage");
  if (!col) return;
  const cites = [...stage.querySelectorAll(".cite[data-first]")];
  reader.dataset.notes = cites.length ? "1" : "0";
  col.replaceChildren();
  if (!cites.length || getComputedStyle(col).display === "none") return;
  const base = col.getBoundingClientRect().top; let floor = 0;
  for (const c of cites) {
    if (c.offsetParent === null) continue;
    const ids = c.dataset.refs.split(" ");
    const note = el("div", "mnote" + (ids.length > 1 ? " multi" : "")); note.dataset.n = c.dataset.n; note.dataset.refs = c.dataset.refs;
    ids.slice(0, 3).forEach((id, i) => {
      const r = refInfo(id); if (!r) return;
      const row = el("div", "row");
      const top = el("div"); if (!i) top.append(el("span", "n", c.dataset.n)); top.append(el("span", "id", id));
      row.append(top, el("div", "nm", r.kind === "formula" ? r.name : r.text));
      note.append(row);
    });
    if (ids.length > 3) note.append(el("div", "row more", `and ${ids.length - 3} more: ${ids[3]} to ${ids[ids.length - 1]}`));
    col.append(note);
    const top = Math.max(c.getBoundingClientRect().top - base - 6, floor);
    note.style.top = top + "px";
    floor = top + note.offsetHeight + 10;
  }
  col.style.minHeight = floor + "px";
}

async function showModule(m, want, focus) {
  view = "module";
  const tok = ++routeTok;
  const doc = $("doc");
  const slow = setTimeout(() => { if (tok === routeTok) { doc.className = "doc"; doc.replaceChildren(el("p", "loading", `Loading ${m.code}…`)); } }, 300);
  const [qs, noteText] = await Promise.all([store.loadQuiz(m.key), store.loadNote(m.key)]);
  clearTimeout(slow);
  if (tok !== routeTok) return;
  const idx = MODS.indexOf(m);
  // header
  const head = el("header", "mhead");
  const eb = el("p", "eyebrow"); eb.append(el("span", "", m.code), el("span", "hide-c", "Core course"));
  const pill = el("span", "pill"); pill.id = "pill"; pill.dataset.for = m.key; eb.append(pill);
  const h1 = el("h1", "", m.title); h1.tabIndex = -1; h1.title = m.title;
  const meta = el("ul", "meta"); for (const x of [loadText(m), prereqText(m.prereq), versionText(m)]) if (x) meta.append(el("li", "", x));
  head.append(eb, h1, meta);
  // content
  const box = render(m.md);
  // The notice bar shows the training label once for the whole page; drop in-lesson repeats (job aids, OJT briefs).
  for (const p of [...box.querySelectorAll("p")]) {
    const t = p.textContent.replace(/\s+/g, " ").trim();
    if (t === LABEL || t === LABEL + " Fictional data only.") p.remove();
    else if (t.startsWith(LABEL) && p.firstElementChild && p.firstElementChild.textContent.trim() === LABEL) { p.firstElementChild.remove(); p.firstChild && p.firstChild.nodeType === 3 && (p.firstChild.nodeValue = p.firstChild.nodeValue.replace(/^\s+/, "")); }
  }
  prepareDiagrams(box, m.code.slice(1));
  const steps = splitSteps(box);
  const saver = makeSaver(qs, m.key);
  if ((m.exercises || []).length) {
    const at = steps.findIndex((x) => x.id === "learn");
    steps.splice(at + 1, 0, { id: "exercises", label: "Exercises", sec: buildExercises(m, qs, saver) });
  }
  for (const s of steps) {
    if (s.id === "exercises") continue;
    if (s.id === "learn") { s.pages = splitPages(s.sec); s.sec.replaceChildren(); continue; }
    const first = s.sec.firstElementChild;
    if (first && first.tagName === "H2" && s.id !== "overview") { first.classList.add("steptitle"); first.tabIndex = -1; }
    if (s.id === "quiz") buildQuiz(s.sec, qs, saver, m);
    if (s.id === "practice") buildPractice(s.sec, qs, saver);
    frameBlocks(s.sec); hideAnswers(s.sec);
    if (s.id === "jobaid") { const card = el("div", "jobcard"); card.append(...s.sec.childNodes); s.sec.append(card); }
    const cite = s.id === "overview" || s.id === "ojt" || s.id === "wrapup";
    for (const li of s.sec.querySelectorAll("li")) if (/^F-[A-Z]+-\d+:/.test(li.textContent.trim())) li.classList.add("idlist");
    linkIds(s.sec, cite ? "cite" : "quiet", newCiteCtx());
    if (cite) { const rl = refList(s.sec, "h3"); if (rl) s.sec.append(rl); }
  }
  // notes live in the OJT step (or the last step)
  const notes = el("section", "notes");
  notes.innerHTML = `<label for="note-${m.key}">Your notes and OJT write-up</label><p>Saved as you type. Use fictional data only.</p><textarea id="note-${m.key}"></textarea><span class="saved" role="status"></span>`;
  (steps.find((s) => s.id === "ojt") || steps[steps.length - 1]).sec.append(notes);
  const ta = notes.querySelector("textarea"), saved = notes.querySelector(".saved");
  ta.value = noteText; ta.placeholder = "Your answers, calculations and OJT notes for " + m.code;
  let nt = null, lastNote = ta.value;
  const flushN = () => {
    clearTimeout(nt); if (ta.value === lastNote) return; const v = ta.value; lastNote = v;
    saved.textContent = "Saving…"; delete saved.dataset.bad;
    store.saveNote(m.key, v).then(() => { saved.textContent = store.mode === "db" ? "Saved to your account" : "Saved in this browser"; },
      () => { saved.dataset.bad = "1"; saved.textContent = "Not saved. Copy your notes somewhere safe, then reload."; lastNote = null; });
  };
  ta.addEventListener("input", () => { clearTimeout(nt); nt = setTimeout(flushN, 900); });
  ta.addEventListener("blur", flushN);
  flushers.push(flushN);
  // end of the last step
  const end = el("div", "endcap");
  const row = el("div", "row");
  const done = el("button", "btn", "Mark module done"); done.type = "button"; done.id = "donebtn"; done.dataset.for = m.key;
  done.addEventListener("click", () => setStatus(m.key, (state.status[m.key] || "") === "done" ? "in-progress" : "done"));
  row.append(done, el("span", "", "Finished the quiz, the OJT task and the self-check? Mark this module done."));
  const mn = el("nav", "modnav"); mn.setAttribute("aria-label", "Other modules");
  const pv = MODS[idx - 1], nx = MODS[idx + 1];
  if (pv) { const a = el("a", "prev"); a.href = "#" + pv.key; a.append(el("span", "dir", "Previous module"), el("b", "", `${pv.code}: ${pv.title}`)); mn.append(a); }
  if (nx) { const a = el("a", "next"); a.href = "#" + nx.key; a.append(el("span", "dir", "Next module"), el("b", "", `${nx.code}: ${nx.title}`), el("small", "", prereqText(nx.prereq))); mn.append(a); }
  else mn.append(el("p", "", "This is the last module."));
  end.append(row, mn);

  // step tabs, reader grid, pager
  const tabs = el("ol", "steps"); tabs.setAttribute("aria-label", "Steps in this module");
  const reader = el("div", "reader");
  const stage = el("div", "stage"), mnotes = el("div", "mnotes"), aside = el("aside", "outline");
  mnotes.setAttribute("aria-hidden", "true"); aside.setAttribute("aria-label", "On this page");
  reader.append(stage, mnotes, aside);
  const tocM = el("details", "toc-m");
  const pager = el("nav", "pager"); pager.setAttribute("aria-label", "Previous and next");
  const stops = [];
  steps.forEach((s, si) => { if (s.pages) s.pages.forEach((p, pi) => stops.push({ si, pi, kind: `Learn · part ${pi + 1} of ${s.pages.length}`, title: p.title, min: p.min })); else stops.push({ si, pi: 0, kind: `Step ${si + 1} of ${steps.length}`, title: s.label }); });
  const seen = new Set((pos[m.key] && pos[m.key].seen) || []);
  const tabBtns = steps.map((s, i) => {
    const li = el("li"); const b = el("button"); b.type = "button"; b.dataset.step = s.id;
    b.append(el("small", "", String(i + 1)), el("span", "sr", "Step " + (i + 1) + ": "), s.label); b.addEventListener("click", () => go(i, null, { focus: "tab" }));
    li.append(b); tabs.append(li); return b;
  });
  // rail: this module's steps and Learn parts
  const navA = document.querySelector(`#nav-modules a[data-key="${m.key}"]`);
  for (const s of document.querySelectorAll("#nav-modules > li > .sub")) s.remove();
  const sub = el("ol", "sub"); sub.dataset.for = m.key;
  steps.forEach((s) => {
    const li = el("li"); const a = el("a", "", s.label); a.href = `#${m.key}/${s.id}`; a.dataset.step = s.id; li.append(a);
    if (s.pages && s.pages.length > 1) { const o2 = el("ol", "sub"); s.pages.forEach((p, pi) => { const l2 = el("li"); const a2 = el("a", "", `${pi + 1}. ${p.title}`); a2.href = `#${m.key}/learn/${pi + 1}`; a2.dataset.step = "learn"; a2.dataset.page = String(pi); l2.append(a2); o2.append(l2); }); o2.hidden = true; li.append(o2); }
    sub.append(li);
  });
  if (navA) navA.after(sub);

  function learnPage(s, pi) {
    const pg = s.pages[pi];
    if (!pg.el) {
      const d = el("div", "lpage"); d.append(...pg.nodes);
      const h = d.querySelector("h3"); h.classList.add("pagetitle"); h.tabIndex = -1;
      h.prepend(Object.assign(el("span", "secno", `${m.code.slice(1)}.${pi + 1}`), {}), " ");
      frameBlocks(d); hideAnswers(d);
      linkIds(d, "cite", newCiteCtx());
      const rl = refList(d, "h4"); if (rl) d.append(rl);
      pg.el = d; pg.h = h;
    }
    const eye = el("h2", "step-eyebrow", `Learn · part ${pi + 1} of ${s.pages.length} · about ${pg.min} min`);
    const bar = el("div", "pagebar");
    const dots = el("div", "dots"); dots.setAttribute("aria-hidden", "true");
    s.pages.forEach((_, k) => dots.append(el("i", k < pi ? "on" : k === pi ? "cur" : "")));
    const pb = el("button", "ib"); pb.type = "button"; pb.append(icon("left")); pb.setAttribute("aria-label", "Previous part"); pb.disabled = pi === 0; pb.addEventListener("click", () => go(cur.si, pi - 1, { focus: "heading" }));
    const nb = el("button", "ib"); nb.type = "button"; nb.append(icon("right")); nb.setAttribute("aria-label", "Next part"); nb.disabled = pi === s.pages.length - 1; nb.addEventListener("click", () => go(cur.si, pi + 1, { focus: "heading" }));
    bar.append(dots, el("span", "sp"), pb, el("span", "", `${pi + 1} / ${s.pages.length}`), nb);
    s.sec.replaceChildren(eye, bar, pg.el);
    return pg.h;
  }
  function paintPager(stopI) {
    pager.replaceChildren();
    const mk = (st, dir, cls) => {
      const b = el("button", cls); b.type = "button";
      b.append(el("span", "dir", `${dir} · ${st.kind}`), el("b", "", st.title + (st.min ? ` (about ${st.min} min)` : "")));
      b.addEventListener("click", () => go(st.si, st.pi, { focus: "heading" }));
      return b;
    };
    if (stopI > 0) pager.append(mk(stops[stopI - 1], "Back", "prevb"));
    if (stopI < stops.length - 1) pager.append(mk(stops[stopI + 1], "Next", "nextb"));
  }
  function go(si, pi, o) {
    o = o || {};
    const s = steps[si];
    if (pi == null) pi = s.pages ? Math.min((pos[m.key] && pos[m.key].lp) || 0, s.pages.length - 1) : 0;
    if (s.pages) pi = Math.max(0, Math.min(pi, s.pages.length - 1));
    cur.si = si; cur.pi = pi;
    stopListening(); closePop(false);
    const heading = s.pages ? learnPage(s, pi) : (s.sec.querySelector("h2.steptitle") || h1);
    const last = si === steps.length - 1;
    stage.replaceChildren(listenTools(() => s.sec), tocM, s.sec, pager, ...(last ? [end] : []));
    doc.dataset.compact = si > 0 ? "1" : "0";
    seen.add(s.id);
    tabBtns.forEach((b, j) => { if (j === si) { b.setAttribute("aria-current", "step"); if (o.focus !== "tab") b.scrollIntoView({ block: "nearest", inline: "center" }); } else b.removeAttribute("aria-current"); });
    for (const a of sub.querySelectorAll("a")) {
      const on = a.dataset.step === s.id && (a.dataset.page == null ? true : Number(a.dataset.page) === pi);
      if (on) a.setAttribute("aria-current", a.dataset.page != null ? "location" : "step"); else a.removeAttribute("aria-current");
    }
    for (const o2 of sub.querySelectorAll(".sub")) o2.hidden = s.id !== "learn";
    const label = s.pages ? `Learn, part ${pi + 1} of ${s.pages.length}` : s.label;
    savePos(m.key, { step: s.id, page: s.pages ? pi : 0, ...(s.pages ? { lp: pi } : {}), label, seen: [...seen] });
    try { history.replaceState(null, "", `#${m.key}/${s.id}${s.pages ? "/" + (pi + 1) : ""}`); } catch { /* sandboxed */ }
    setTitle(`${m.code} ${s.pages ? "Learn " + (pi + 1) + " of " + s.pages.length : s.label}`);
    setCrumbs(["Core course", `${m.code} ${m.title.split(":")[0]}`, s.pages ? `Learn ${pi + 1} of ${s.pages.length}` : s.label]);
    paintPager(stops.findIndex((x) => x.si === si && x.pi === (s.pages ? pi : 0)));
    if ((si > 0 || pi > 0) && (state.status[m.key] || "not-started") === "not-started") setStatus(m.key, "in-progress");
    renderDiagrams(stage); renderMath(stage);
    buildOutline(s.sec, aside, tocM); layoutNotes(reader); markScrollers(stage);
    paintProgress();
    let target = null;
    if (o.anchor) { const low = o.anchor.toLowerCase(); target = [...s.sec.querySelectorAll("h2, h3, h4, strong.lead-in")].find((h) => h.textContent.trim().toLowerCase().replace(/^\d+\.\d+\s+/, "") === low) || null; }
    if (target) { target.scrollIntoView({ block: "start" }); focusHeading(target); }
    else {
      if (o.scroll !== false) scrollTo(0, si === 0 ? 0 : Math.max(0, tabs.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 100) + 12));
      if (o.focus === "heading") focusHeading(heading);
    }
  }
  const relayout = () => { if (!reader.isConnected) return; layoutNotes(reader); markScrollers(stage); buildOutline(steps[cur.si].sec, aside, tocM); };
  cur = { key: m.key, si: 0, pi: 0, relayout,
    goto(w, o) { const si = w.step ? steps.findIndex((x) => x.id === w.step) : -1; if (si < 0) return go(0, 0, o); go(si, w.page != null ? w.page : null, o); } };
  doc.className = "doc module";
  doc.replaceChildren(head, tabs, reader);
  paintNavCurrent(m.key); if (navA && !sub.isConnected) navA.after(sub);
  const saved0 = pos[m.key] || {};
  const w = want && want.step ? want : { step: saved0.step, page: saved0.step === "learn" ? saved0.page : null };
  cur.goto(w, { focus: focus ? "heading" : "none", scroll: !!(want && want.step) || false, anchor: want && want.anchor });
  if (!(want && want.step)) scrollTo(0, 0);
  if (focus && cur.si === 0) focusHeading(h1);
}
let relayoutT = null;
const queueRelayout = () => { clearTimeout(relayoutT); relayoutT = setTimeout(() => { if (cur && view === "module") cur.relayout(); if (view !== "module") markScrollers($("doc")); }, 120); };
document.addEventListener("bpl:layout", queueRelayout);
addEventListener("resize", queueRelayout);
document.addEventListener("toggle", (e) => { if (e.target.closest && e.target.closest(".stage")) queueRelayout(); }, true);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueRelayout);

/* ---------- routing ---------- */
function route(initial) {
  flushAll(); flushers = [];
  closePop(false);
  for (const o of [...modal.stack]) closeModal(o.node, false);
  const raw = decodeURIComponent(location.hash.slice(1)) || "home";
  const [key, a, b] = raw.split("/");
  const focus = !initial;
  const m = MODS.find((x) => x.key === key), r = REFS.find((x) => x.key === key);
  if (m) {
    const want = { step: a || null, page: b ? Math.max(0, parseInt(b, 10) - 1 || 0) : (a === "learn" ? null : 0), anchor: pendingAnchor };
    pendingAnchor = "";
    if (cur && cur.key === key && view === "module" && a) { cur.goto(want, { focus: "heading", anchor: want.anchor }); return; }
    paintNavCurrent(key);
    showModule(m, want, focus);
    return;
  }
  pendingAnchor = "";
  paintNavCurrent(r ? key : key === "glossary" ? "glossary" : "home");
  if (r) showRef(r, a, focus); else if (key === "glossary") showGlossary(a, focus); else showHome(focus);
  if (!a) scrollTo(0, 0);
}

/* ---------- start ---------- */
function boot() {
  if (BOOT_ERROR) {
    const p = el("p", "loading", "The course could not load. Reload the page to try again."); p.setAttribute("role", "alert");
    $("doc").replaceChildren(p); $("sync").textContent = ""; return;
  }
  $("menu").append(icon("menu")); $("rail-close").append(icon("close")); $("audit").prepend(icon("hash"));
  applyTheme(themePref); applyAudit(auditOn);
  $("theme").addEventListener("click", () => { themePref = THEMES[(THEMES.indexOf(themePref) + 1) % THEMES.length]; prefs.set("theme", themePref); applyTheme(themePref); toast(`Theme: ${themePref}`, 1800); });
  $("audit").addEventListener("click", () => { auditOn = !auditOn; prefs.set("audit", auditOn); applyAudit(auditOn); closePop(false); toast(auditOn ? "Audit mode on: rule and formula IDs show in the text." : "Audit mode off: IDs become numbered citations.", 3200); queueRelayout(); });
  $("menu").addEventListener("click", () => { if ($("rail").classList.contains("open")) closeRail(); else openRail(); });
  $("rail-close").addEventListener("click", () => closeRail());
  $("rail").addEventListener("click", (e) => { if (e.target.closest("a") && railSmall()) closeRail(false); });
  matchMedia("(min-width: 1200px)").addEventListener?.("change", (e) => { if (e.matches) closeRail(false); });
  buildLookups(); buildNav(); initDrawer(); initLightbox(); initSearch();
  addEventListener("hashchange", () => route(false));
  addEventListener("pagehide", flushAll);
  route(true);
  initStore();
}
try { boot(); } catch (e) {
  const p = el("p", "loading", "The course could not load. Reload the page to try again."); p.setAttribute("role", "alert");
  $("doc").replaceChildren(p); console.error(e);
}
