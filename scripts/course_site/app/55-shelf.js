/* ---------- reference shelf: Formula Library, policy rules, state law guide, running deals ----------
 * Built from the structured data build.py parses out of the four author exports. Learner views show plain names;
 * reference codes show in Audit mode, and the full source export sits behind an "Author view" that only Audit mode shows. */
const REVIEWED = (DATA && DATA.reviewed) || {};
const STATE_LAW = (DATA && DATA.stateLaw) || { states: [], patterns: [], open: [] };
const CATS = (DATA && DATA.categories) || [];
const modByCode = (c) => MODS.find((m) => m.code === c);
const joinAnd = (xs) => (xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || "");

function shelfHead(eyebrow, title, lede, key) {
  const head = el("header", "hero");
  const h1 = el("h1", "display", title); h1.tabIndex = -1;
  head.append(el("p", "eyebrow", eyebrow), h1);
  if (lede) head.append(el("p", "lede", lede));
  const meta = el("ul", "meta");
  if (REVIEWED[key]) meta.append(el("li", "", `Last reviewed ${REVIEWED[key]}`));
  meta.append(el("li", "", "Model policy for training"));
  head.append(meta, el("div", "rule"));
  return { head, h1 };
}
/** Markdown -> learner nodes (IDs rewritten). */
function mdNodes(md, cls, ctx) {
  const d = el("div", "prose" + (cls ? " " + cls : ""));
  d.append(...render(md || "", { idPrefix: "s-" }).childNodes);
  linkIds(d, "cite", ctx);
  return d;
}
function mdInline(md, ctx) {
  const d = mdNodes(md, "", ctx);
  const only = d.children.length === 1 && d.firstElementChild.tagName === "P" ? d.firstElementChild : null;
  if (only) { const s = el("span"); s.append(...only.childNodes); return s; }
  return d;
}
/** The full source export, for the course author. Present in the page but shown only in Audit mode. */
function authorView(refKey, what) {
  const r = REFS.find((x) => x.key === refKey);
  const box = el("section", "authorview");
  if (!r) return box;
  const det = el("details");
  det.append(el("summary", "", `Author view: ${what}`));
  let done = false;
  det.addEventListener("toggle", () => {
    if (!det.open || done) return; done = true;
    const p = el("div", "prose");
    p.append(el("p", "", r.note), ...render(r.md, { idPrefix: "av-" }).childNodes);
    linkIds(p, "quiet");
    det.append(p); renderMath(p); markScrollers(p);
  });
  box.append(det);
  return box;
}
function searchBox(id, label, placeholder) {
  const wrap = el("div", "stools");
  const l = el("label", "sr", label); l.htmlFor = id;
  const q = el("input"); q.type = "search"; q.id = id; q.placeholder = placeholder; q.autocomplete = "off";
  const count = el("span", "count"); count.setAttribute("role", "status");
  const row = el("div", "row"); row.append(q, count);
  wrap.append(l, row);
  return { wrap, q, count };
}
function chipRow(label, items, cur, onPick) {
  const row = el("div", "chips"); row.setAttribute("role", "group"); row.setAttribute("aria-label", label);
  const bs = items.map((t) => {
    const b = el("button", "chip", t); b.type = "button"; b.setAttribute("aria-pressed", String(t === cur));
    b.addEventListener("click", () => { bs.forEach((x) => x.setAttribute("aria-pressed", String(x === b))); onPick(t); });
    row.append(b); return b;
  });
  return row;
}
function mountShelf(doc, nodes, title, crumbs, focus, h1) {
  doc.className = "doc refpage shelf";
  doc.replaceChildren(...nodes);
  linkIds(doc, "cite");            // a final sweep: titles and labels built as plain text
  renderMath(doc); markScrollers(doc);
  setTitle(title); setCrumbs(crumbs);
  if (focus) focusHeading(h1);
}

/* ---------- Formula Library: catalog ---------- */
function formulaWords(f) {
  let w = learnerString(plainText(f.words || ""));
  if (w.length > 90) { const c = w.search(/;|, where | where |\. /); if (c > 20) w = w.slice(0, c); }
  return w.replace(/[.;,]\s*$/, "");
}
function formulaMods(f) {
  const codes = new Set(f.modules);
  for (const m of usedIn(f.id)) codes.add(m.code);
  return [...codes].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
}
function usedText(f) {
  const cs = formulaMods(f);
  if (cs.length) return `Used in ${joinAnd(cs)}`;
  if (f.familyModules.length) return `${joinAnd(f.familyModules)} course`;
  return `${FAMILY[f.fam]} course`;
}
function showFormulaCatalog(focus) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc");
  const { head, h1 } = shelfHead("Reference", "Formula Library", "Every calculation in the course, in plain words, with a worked example you can check by hand. Pick a topic or search by name.", "formulas");
  const how = el("section", "card note hownum");
  how.append(el("h2", "", "How the numbers work"));
  const ul = el("ul");
  // The library's conventions table, in plain words for the learner.
  const HOW = [
    ["Day count.", "Bridge loans and multifamily and commercial term notes charge interest on Actual/360: balance × rate ÷ 360 × the actual days. DSCR rental loans use 30/360. Every amortizing payment is set on 30/360, at the annual rate ÷ 12."],
    ["Interest days.", "The funding day counts. The payoff day does not."],
    ["Tests use the quoted rate.", "Coverage, liquidity and sizing tests use the annual note rate, or the rate ÷ 12 for a monthly payment."],
    ["Rounding.", "Keep full precision while you work. Round only the final answer, half up: money to the cent."],
    ["Comparing to a limit.", "Compare at full precision. A DSCR of 1.2496x fails a 1.25x minimum, even though it displays as 1.25x."],
    ["Display.", "Rates show 3 decimals. LTV and LTC show 1 decimal. DSCR shows 2 decimals with an x. Debt yield and cap rate show 2 decimals."],
  ];
  for (const [k, v] of HOW) { const li = el("li"); li.append(el("b", "", k + " "), v); ul.append(li); }
  how.append(ul);
  const { wrap, q, count } = searchBox("fq", "Search formulas", "Search, for example DSCR or payoff");
  let topic = "All";
  // Default view: the formulas the core course uses (decision 14). The rest belong to the family courses.
  const SCOPES = ["Used in the core course", "All formulas"];
  let scope = SCOPES[0];
  const nCore = LIB.formulas.filter((f) => formulaMods(f).length).length;
  wrap.append(chipRow("Show", [`${SCOPES[0]} (${nCore})`, `${SCOPES[1]} (${LIB.formulas.length})`], `${SCOPES[0]} (${nCore})`, (t) => { scope = t.startsWith(SCOPES[0]) ? SCOPES[0] : SCOPES[1]; paint(); }));
  const topics = LIB.topics.filter((t) => LIB.formulas.some((f) => f.topic === t.title));
  const chips = chipRow("Topic", ["All", ...topics.map((t) => t.title)], topic, (t) => { topic = t; paint(); });
  wrap.append(chips);
  const groups = topics.map((t) => {
    const sec = el("section", "fgroup"); sec.dataset.topic = t.title;
    const hd = el("header"); hd.append(el("h2", "h2", t.title)); if (t.blurb) hd.append(el("p", "", t.blurb));
    const grid = el("div", "fgrid");
    const cards = LIB.formulas.filter((f) => f.topic === t.title).map((f) => {
      const a = el("a", "card fcardlink"); a.href = "#formulas/" + f.slug;
      a.append(el("b", "", f.name), el("span", "eq", formulaWords(f)), el("span", "pp", learnerString(plainText(f.purpose))), el("span", "mods", usedText(f)), codeA(f.id));
      grid.append(a);
      return { f, a, core: formulaMods(f).length > 0, hay: (f.name + " " + f.purpose + " " + f.words + " " + f.id).toLowerCase() };
    });
    sec.append(hd, grid);
    return { t, sec, cards };
  });
  function paint() {
    const needle = q.value.trim().toLowerCase(); let n = 0;
    for (const g of groups) {
      let shown = 0;
      for (const c of g.cards) { const ok = (scope !== SCOPES[0] || c.core || !!needle) && (topic === "All" || g.t.title === topic) && (!needle || needle.split(/\s+/).every((w) => c.hay.includes(w))); c.a.hidden = !ok; if (ok) shown++; }
      g.sec.hidden = !shown; n += shown;
    }
    count.textContent = `${n} ${n === 1 ? "formula" : "formulas"}`;
    empty.hidden = n > 0;
  }
  const empty = el("p", "loading", "No formula matches. Try a shorter word, or search the whole course with the search button.");
  q.addEventListener("input", paint);
  paint();
  mountShelf(doc, [head, wrap, how, ...groups.map((g) => g.sec), empty, authorView("formulas", "the Formula Library export")], "Formula Library", ["Reference shelf", "Formula Library"], focus, h1);
}

/* ---------- Formula Library: one formula ---------- */
let TERMS = null;
/** "NOI" -> {full: "Net operating income", def}: from the glossary, else from a formula named "... (NOI)". */
function termFor(sym) {
  if (!TERMS) {
    TERMS = new Map();
    const add = (term, def) => {
      const t = plainText(term); const m = /^(.*?)\s*\(([^)]+)\)\s*$/.exec(t); const full = m ? m[1] : t;
      const entry = { full, def };
      if (!TERMS.has(full.toLowerCase())) TERMS.set(full.toLowerCase(), entry);
      if (m) for (const ab of m[2].split(/[,/;]\s*|\s+or\s+/)) if (ab.trim() && !TERMS.has(ab.trim().toLowerCase())) TERMS.set(ab.trim().toLowerCase(), entry);
    };
    for (const g of GLOSSARY) add(g.term, firstSentence(learnerString(g.def)));
    for (const x of FORMULAS.values()) add(x.name, firstSentence(learnerString(x.purpose || x.text)));
  }
  const key = plainText(sym).replace(/\\?_.*$/, "").replace(/\s*\(.*$/, "").trim().toLowerCase();
  return TERMS.get(key) || null;
}
/** The running deal a test case comes from: named in it, or every large dollar input found in one deal's file. */
function dealOfTest(t) {
  const txt = t.inputs + " " + t.expected;
  const named = DEALS.find((d) => txt.includes(dealShort(d)) || txt.includes(dealShort(d).split(" ")[0] + " "));
  if (named) return named;
  const amts = (t.inputs.match(/\$[\d,]+(?:\.\d+)?/g) || []).filter((a) => a.replace(/\D/g, "").length >= 5);
  if (amts.length < 2) return null;
  return DEALS.find((d) => { const all = JSON.stringify(d); return amts.every((a) => all.includes(a)); }) || null;
}
function idsIn(s) { return expandIds(s || "").filter((x) => known(x)); }
const LAYER = (DATA && DATA.layer) || {};
/** Formula page from the learner layer (docs/formulas/learner-layer-core.json): what it is, analogy, where, conventions,
 * worked example on a running deal, In Excel, reading, slips, checks, takeaways, related. Source checks show in Audit mode only. */
function showFormulaLayer(f, L, focus) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc"); const ctx = newCiteCtx();
  const main = el("article", "fmain");
  const head = el("header", "card fhead");
  const h1 = el("h1", "display", L.name); h1.tabIndex = -1;
  const meta = el("ul", "meta");
  for (const x of [REVIEWED.formulas ? `Last reviewed ${REVIEWED.formulas}` : "", `${FAMILY[f.fam]} formula`, "Model policy for training"]) if (x) meta.append(el("li", "", x));
  head.append(el("p", "eyebrow", `Formula Library · ${f.topic}`), h1, mdNodes(firstSentence(L.whatItIs), "lede", ctx), meta);
  main.append(head);
  const sec = (title, cls, ...nodes) => { const s = el("section", "lcard fsec" + (cls ? " " + cls : "")); s.append(el("h2", "", title), ...nodes.filter(Boolean)); main.append(s); return s; };
  const an = el("p", "analogy"); an.append(el("strong", "", "Think of it this way. "), mdInline(L.analogy, ctx));
  sec("What it is", "", mdNodes(L.whatItIs, "", ctx), L.analogy ? an : null);
  const hl = el("section", "lcard hl hl-top"); hl.append(el("h2", "", "Key highlights")); const hul = el("ul");
  const addHl = (lab, md) => { if (!md) return; const li = el("li"); li.append(el("b", "", lab + " "), mdInline(md, ctx)); hul.append(li); };
  addHl("In words:", f.words); addHl("Read it:", firstSentence(L.readTheResult || f.read)); addHl("Precision:", f.rounding);
  hl.append(hul); main.append(hl);
  const fig = el("figure", "fformula");
  if (f.tex) { const mth = el("div", "math", f.tex); mth.dataset.tex = f.tex; mth.tabIndex = 0; mth.setAttribute("role", "region"); mth.setAttribute("aria-label", `Formula: ${L.name}`); fig.append(mth); }
  const cap = el("figcaption"); cap.append(mdInline(f.words, ctx)); fig.append(cap);
  const where = el("dl", "where");
  for (const v of L.variables || []) {
    const dt = el("dt"); dt.append(mdInline(v.symbol, ctx), el("span", "expand", v.name));
    const dd = el("dd"); dd.append(mdInline(v.definition, ctx));
    if (v.unit) dd.append(el("span", "unit", ` · ${v.unit[0].toUpperCase()}${v.unit.slice(1)}`));
    if (v.sourceDocument) { const sd = el("span", "srcdoc"); sd.append(el("b", "", "Source document: "), v.sourceDocument); dd.append(sd); }
    if (v.docId) dd.append(codeA(v.docId));
    where.append(dt, dd);
  }
  sec("The formula", "", fig, el("p", "where-h", "Where:"), where);
  if (f.rounding) sec("Conventions", "", mdNodes(f.rounding, "", ctx), (() => { const p = el("p", "fine"); const a = el("a", "", "How the numbers work across the course"); a.href = "#formulas"; p.append(a); return p; })());
  const W = L.workedExample;
  if (W) {
    const s = el("section", "lcard dsheet fwork");
    const hd = el("div", "dsh-head");
    hd.append(el("p", "dsh-kicker", "WORKED EXAMPLE · DEAL SHEET"), el("h2", "dsh-title", `Worked example: ${W.deal || "running deal"}`));
    const dl = el("dl", "dsh-facts"); for (const [k, v] of [["Deal", W.deal], ["Source", W.exampleSource]]) if (v) { const x = el("div"); x.append(el("dt", "", k), el("dd", "", v)); dl.append(x); } hd.append(dl);
    s.append(hd);
    const tw = el("div", "tbl ledger"); const t = el("table");
    t.innerHTML = `<thead><tr><th scope="col">Input</th><th scope="col" class="num">Value</th></tr></thead>`;
    const tb = el("tbody");
    for (const i of W.inputs || []) { const tr = el("tr"); const a = el("td"); a.append(mdInline(i.name, ctx)); if (i.source) a.append(el("span", "isrc", "From " + i.source)); const b = el("td", "num"); b.append(mdInline(i.value, ctx)); tr.append(a, b); tb.append(tr); }
    const tr = el("tr", "total"); const r1 = el("td", "", "Result"); const r2 = el("td", "num"); r2.append(mdInline(W.result, ctx)); tr.append(r1, r2); tb.append(tr);
    t.append(tb); tw.append(t); s.append(tw);
    const ol = el("ol", "wsteps"); for (const x of W.steps || []) { const li = el("li"); li.append(mdInline(x, ctx)); ol.append(li); }
    s.append(el("p", "ws-lab", "Step by step"), ol);
    main.append(s);
  }
  const X = L.inExcel;
  if (X) {
    const tw = el("div", "tbl ledger"); const t = el("table"); t.innerHTML = `<thead><tr><th scope="col">Cell</th><th scope="col">Holds</th></tr></thead>`;
    const tb = el("tbody"); for (const c of X.cells || []) { const tr = el("tr"); tr.append(el("td", "mono", c.cell)); const h = el("td"); h.append(mdInline(c.holds, ctx)); tr.append(h); tb.append(tr); } t.append(tb); tw.append(t);
    const fp = el("p"); fp.append("Formula: ", el("code", "", X.formula));
    sec("In Excel", "", tw, fp, X.note ? mdNodes(X.note, "", ctx) : null);
  }
  if (L.readTheResult) sec("How to read the result", "", mdNodes(L.readTheResult, "", ctx));
  if ((L.commonSlips || []).length || f.edge) {
    const box = el("aside", "lcard watch"); box.setAttribute("aria-label", "Common slips");
    box.append(el("h2", "", "Common slips"));
    const wl = el("ul"); for (const x of L.commonSlips || []) { const li = el("li"); li.append(mdInline(x, ctx)); wl.append(li); } box.append(wl);
    if (f.edge) box.append(el("h3", "", "When it misleads"), mdNodes(f.edge, "", ctx));
    main.append(box);
  }
  if (f.tests.length) {
    const list = el("div", "tchecks");
    for (const t of f.tests) {
      const d = el("details", "tcheck");
      const sm = el("summary"); sm.append(el("span", "lab", `Check ${t.n}`), mdInline(t.inputs, ctx));
      const ans = el("p", "ans"); ans.append(el("b", "", "Answer: "), mdInline(t.expected, ctx));
      d.append(sm, ans); list.append(d);
    }
    sec("Check yourself", "", el("p", "", "Work each one by hand, then show the answer. These are the library's own test cases."), list);
  }
  if ((L.takeaways || []).length) { const tk = el("section", "lcard hl hl-end"); tk.append(el("h2", "", "Key takeaways")); const u = el("ul"); for (const x of L.takeaways) { const li = el("li"); li.append(mdInline(x, ctx)); u.append(li); } tk.append(u); main.append(tk); }
  const rel = (L.related || []).filter((x) => FORMULAS.has(x));
  if (rel.length) { const u = el("ul", "rel"); for (const id of rel) { const li = el("li"); li.append(formulaLink(id, FORMULAS.get(id).name)); u.append(li); } sec("Related formulas", "", u); }
  const au = el("section", "lcard audit-only");
  au.append(el("h2", "", "Source checks (Audit mode)"));
  const ul = el("ul"); for (const v of L.verify || []) ul.append(el("li", "", v));
  if (L.checks) ul.append(el("li", "", `Numbers re-computed against the library tests and the workbook: ${L.checks.allMatch ? "all match" : "see the learner-layer file"}.`));
  for (const c of L.concepts || []) ul.append(el("li", "", `Concept ${c}`));
  au.append(ul); main.append(au);
  const side = formulaSide(f);
  const wrap = el("div", "fpage"); wrap.append(main, side);
  mountShelf(doc, [wrap, formulaNav(f)], L.name, ["Reference shelf", { text: "Formula Library", href: "#formulas" }, L.name], focus, h1);
}
function formulaSide(f) {
  const mods = formulaMods(f);
  const side = el("aside", "fside"); side.setAttribute("aria-label", "Related");
  const panel = (title, items) => { if (!items.length) return; const s = el("section", "card"); s.append(el("h2", "", title)); const u = el("ul"); for (const n of items) { const li = el("li"); li.append(n); u.append(li); } s.append(u); side.append(s); };
  panel("Taught in", mods.map((c) => modByCode(c)).filter(Boolean).map((m) => { const a = el("a", "", `Module ${m.code.slice(1)} · ${m.title.split(":")[0]}`); a.href = "#" + m.key; return a; }));
  if (!mods.length && f.familyModules.length) panel("Taught in", [el("span", "", `The ${joinAnd(f.familyModules)} course`)]);
  const builds = [...new Set(idsIn(f.words + " " + f.vars.map((v) => v.sym + " " + v.def).join(" ") + " " + f.steps.join(" ")).filter((x) => x !== f.id && FORMULAS.has(x)))];
  const leads = LIB.formulas.filter((g) => g.id !== f.id && idsIn(g.words + " " + g.vars.map((v) => v.sym + " " + v.def).join(" ")).includes(f.id)).map((g) => g.id);
  const flink = (id) => formulaLink(id, FORMULAS.get(id).name);
  panel("Builds on", builds.map(flink));
  panel("Leads to", leads.map(flink));
  panel("Policy rules that use it", [...new Set(idsIn(f.related).filter((x) => RULES.has(x) && RULES.get(x).kind === "rule"))].map((id) => { const b = el("button", "refname", ruleLabel(id)); b.type = "button"; b.dataset.ref = id; b.append(" ", codeA(id)); return b; }));
  const codes = el("p", "fine", "Reference codes for this formula show in Audit mode. "); codes.append(codeA(f.id)); side.append(codes);
  return side;
}
function formulaNav(f) {
  const nav = el("nav", "modnav"); nav.setAttribute("aria-label", "Other formulas");
  const i = LIB.formulas.indexOf(f), pv = LIB.formulas[i - 1], nx = LIB.formulas[i + 1];
  if (pv) { const a = el("a", "prev"); a.href = "#formulas/" + pv.slug; a.append(el("span", "dir", "Previous formula"), el("b", "", pv.name)); nav.append(a); }
  if (nx) { const a = el("a", "next"); a.href = "#formulas/" + nx.slug; a.append(el("span", "dir", "Next formula"), el("b", "", nx.name)); nav.append(a); }
  return nav;
}
function showFormula(f, focus) {
  if (LAYER[f.id]) return showFormulaLayer(f, LAYER[f.id], focus);
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc"); const ctx = newCiteCtx();
  const main = el("article", "fmain");
  const eb = el("p", "eyebrow", f.topic);
  const h1 = el("h1", "display", f.name); h1.tabIndex = -1;
  const words = [f.purpose, f.words, f.read, ...f.steps, ...f.mistakes, f.edge, f.rounding].join(" ").split(/\s+/).length;
  const meta = el("ul", "meta");
  for (const x of [`About ${Math.max(2, Math.round(words / 150))} min`, REVIEWED.formulas ? `Last reviewed ${REVIEWED.formulas}` : "", `${FAMILY[f.fam]} formula`]) if (x) meta.append(el("li", "", x));
  main.append(eb, h1, mdNodes(firstSentence(f.purpose), "lede", ctx), meta);
  const what = el("section", "fsec"); what.append(el("h2", "", "What it is"), mdNodes([f.purpose, firstSentence(f.read)].filter(Boolean).join(" "), "", ctx));
  main.append(what);
  // Key highlights
  const hl = el("aside", "highlights"); hl.setAttribute("aria-label", "Key highlights");
  hl.append(el("h2", "", "Key highlights"));
  const hul = el("ul");
  const addHl = (lab, md) => { if (!md) return; const li = el("li"); li.append(el("b", "", lab + " "), mdInline(md, ctx)); hul.append(li); };
  addHl("In words:", f.words);
  addHl("Read it:", firstSentence(f.read));
  addHl("Precision:", f.rounding);
  const mods = formulaMods(f);
  hl.append(hul);
  main.append(hl);
  // The formula
  const sec = (title, ...nodes) => { const s = el("section", "fsec"); const h = el("h2", "", title); s.append(h, ...nodes.filter(Boolean)); main.append(s); return s; };
  const fig = el("figure", "fformula");
  if (f.tex) { const m = el("div", "math", f.tex); m.dataset.tex = f.tex; m.tabIndex = 0; m.setAttribute("role", "region"); m.setAttribute("aria-label", `Formula: ${f.name}`); fig.append(m); }
  const cap = el("figcaption"); cap.append(mdInline(f.words, ctx)); fig.append(cap);
  sec("The formula", fig);
  if (f.vars.length) {
    const dl = el("dl", "where");
    for (const v of f.vars) {
      // Each variable in words: its own definition, else the glossary entry or the formula it names.
      const g = termFor(v.sym);
      const dt = el("dt"); dt.append(mdInline(v.sym, ctx));
      if (g && g.full.toLowerCase() !== plainText(v.sym).toLowerCase()) dt.append(el("span", "expand", g.full));
      const dd = el("dd");
      if (v.def) dd.append(mdInline(v.def, ctx));
      else if (g) dd.append(g.def);
      if (v.unit) dd.append(el("span", "unit", (dd.textContent.trim() ? " · " : "") + v.unit[0].toUpperCase() + v.unit.slice(1)));
      dl.append(dt, dd);
    }
    sec("Where:", dl);
  }
  if (f.rounding) sec("Conventions", mdNodes(f.rounding, "", ctx), (() => { const p = el("p", "fine"); const a = el("a", "", "How the numbers work across the course"); a.href = "#formulas"; p.append(a); return p; })());
  // A test case on a running deal's numbers becomes the main worked example.
  const dealTest = f.tests.map((t) => ({ t, d: dealOfTest(t) })).find((x) => x.d);
  if (dealTest) {
    const ol = el("ol", "wsteps");
    const step = (lab, md) => { const li = el("li"); const sp = el("span"); sp.append(el("b", "", lab + " "), mdInline(md, ctx)); li.append(sp); ol.append(li); };
    const inputs = dealTest.t.inputs.replace(/\s*\([^)]*\)\s*$/, "");
    step("Inputs:", inputs);
    step("Formula:", f.words);
    // A one-operator formula with two dollar inputs gets a written-out substitution.
    const amts = inputs.match(/[−-]?\$[\d,]+(?:\.\d+)?/g) || [];
    const ops = (plainText(f.words).split("=").slice(1).join("=").match(/[÷×+−]/g) || []);
    const res = dealTest.t.expected.replace(/\s*\(.*$/, "");
    if (amts.length === 2 && ops.length === 1) step("Substitute:", `${amts[0]} ${ops[0]} ${amts[1]} = ${res}`);
    else step("Substitute:", `put ${inputs} into the formula and work it at full precision.`);
    step("Result:", dealTest.t.expected);
    if (f.read) step("Read it:", firstSentence(f.read));
    sec(`Worked example: ${dealShort(dealTest.d)}`, ol);
  }
  if (f.steps.length) {
    const dealHit = DEALS.find((d) => f.steps.join(" ").includes(dealShort(d)));
    const ol = el("ol", "wsteps");
    for (const s of f.steps) { const li = el("li"); li.append(mdInline(s, ctx)); ol.append(li); }
    sec(dealTest ? "Another worked example" : dealHit ? `Worked example: ${dealShort(dealHit)}` : "Worked example", ol);
  }
  if (f.read) sec("How to read the result", mdNodes(f.read, "", ctx));
  if (f.mistakes.length || f.edge) {
    const box = el("aside", "watch"); box.setAttribute("aria-label", "Common slips");
    box.append(el("h2", "", "Common slips"));
    const wl = el("ul"); for (const m of f.mistakes) { const li = el("li"); li.append(mdInline(m, ctx)); wl.append(li); }
    box.append(wl);
    if (f.edge) { box.append(el("h3", "", "Edge cases")); box.append(mdNodes(f.edge, "", ctx)); }
    main.append(box);
  }
  if (f.tests.length > (dealTest ? 1 : 0)) {
    const s = sec("Check yourself", el("p", "", "Work each one by hand, then show the answer."));
    const list = el("div", "tchecks");
    for (const t of f.tests) {
      if (dealTest && t === dealTest.t) continue;
      const d = el("details", "tcheck");
      const sm = el("summary"); sm.append(el("span", "lab", `Check ${t.n}`), mdInline(t.inputs, ctx));
      const ans = el("p", "ans"); ans.append(el("b", "", "Answer: "), mdInline(t.expected, ctx));
      d.append(sm, ans); list.append(d);
    }
    s.append(list);
  }
  // Side panel: taught in, related formulas, policy rules
  const side = el("aside", "fside"); side.setAttribute("aria-label", "Related");
  const panel = (title, items) => { if (!items.length) return; const s = el("section", "card"); s.append(el("h2", "", title)); const u = el("ul"); for (const n of items) { const li = el("li"); li.append(n); u.append(li); } s.append(u); side.append(s); };
  panel("Taught in", mods.map((c) => modByCode(c)).filter(Boolean).map((m) => { const a = el("a", "", `${m.code} · ${m.title.split(":")[0]}`); a.href = "#" + m.key; return a; }));
  if (!mods.length && f.familyModules.length) panel("Taught in", [el("span", "", `The ${joinAnd(f.familyModules)} course`)]);
  const builds = [...new Set(idsIn(f.words + " " + f.vars.map((v) => v.sym + " " + v.def).join(" ") + " " + f.steps.join(" ")).filter((x) => x !== f.id && FORMULAS.has(x)))];
  const relF = [...new Set(idsIn(f.related).filter((x) => x !== f.id && FORMULAS.has(x) && !builds.includes(x)))];
  const leads = LIB.formulas.filter((g) => g.id !== f.id && idsIn(g.words + " " + g.vars.map((v) => v.sym + " " + v.def).join(" ")).includes(f.id)).map((g) => g.id);
  const flink = (id) => formulaLink(id, FORMULAS.get(id).name);
  panel("Builds on", builds.map(flink));
  panel("Leads to", leads.map(flink));
  panel("Related formulas", relF.map(flink));
  panel("Policy rules that use it", [...new Set(idsIn(f.related).filter((x) => RULES.has(x) && RULES.get(x).kind === "rule"))].map((id) => { const b = el("button", "refname", ruleLabel(id)); b.type = "button"; b.dataset.ref = id; b.append(" ", codeA(id)); return b; }));
  const codes = el("p", "fine", "Reference codes for this formula show in Audit mode. "); codes.append(codeA(f.id)); side.append(codes);
  const wrap = el("div", "fpage"); wrap.append(main, side);
  const nav = el("nav", "modnav"); nav.setAttribute("aria-label", "Other formulas");
  const i = LIB.formulas.indexOf(f), pv = LIB.formulas[i - 1], nx = LIB.formulas[i + 1];
  if (pv) { const a = el("a", "prev"); a.href = "#formulas/" + pv.slug; a.append(el("span", "dir", "Previous formula"), el("b", "", pv.name)); nav.append(a); }
  if (nx) { const a = el("a", "next"); a.href = "#formulas/" + nx.slug; a.append(el("span", "dir", "Next formula"), el("b", "", nx.name)); nav.append(a); }
  mountShelf(doc, [wrap, nav], f.name, ["Reference shelf", "Formula Library", f.name], focus, h1);
}

/* ---------- policy rules ---------- */
function ruleCard(r, ctx, level) {
  const art = el("article", "rcard"); art.id = "rule-" + r.id; art.dataset.id = r.id;
  if (r.block) art.append(el("h" + Math.min(6, level || 5), "rname", r.name));
  art.append(mdNodes(r.text, "rtext", ctx));
  const dl = el("dl", "rfacts");
  const row = (k, node, cls) => { if (!node) return; const d = el("div", cls || ""); const dd = el("dd"); dd.append(node); d.append(el("dt", "", k), dd); dl.append(d); };
  if (r.limit) row("Limit at a glance", mdInline(r.limit, ctx));
  let evid = null;
  if (r.why || r.basis) {
    // A rationale made of dated sources is research evidence: Audit mode shows it in a collapsed "Market evidence" box.
    // A reason in plain words, with no dated source, is shown to learners as "Why it exists". Basis is Audit-only too.
    const evidence = /\b(?:19|20)\d{2}\b|\[VERIFY|\bCFR\b|U\.S\.C\.|Guide\b|Bulletin\b/.test(r.why || "");
    if (r.why && !evidence) { const w = el("div"); w.append(mdInline(r.why, ctx)); row("Why it exists", w); }
    if (r.basis) row("Basis", el("span", "rbasis", r.basis), "aud");
    if (r.why && evidence) { evid = el("details", "evid aud"); evid.append(el("summary", "", "Market evidence"), mdNodes(r.why, "", ctx)); }
  }
  const used = usedIn(r.id);
  if (used.length) { const s = el("span"); used.forEach((m, k) => { if (k) s.append(", "); const a = el("a", "", `Module ${m.code.slice(1)} · ${m.title.split(":")[0]}`); a.href = "#" + m.key; s.append(a); }); row("Taught in", s); }
  art.append(dl, ...(evid ? [evid] : []), codeA(r.id));
  return art;
}
/* showPolicy lives in 56-policy.js (deal-order topics, decision 12). */

/* ---------- state law guide (decision 13): by state, by topic, and how to research a new state ----------
 * build.py reads every column group of the State Law Table: the core topics (groups a and b) and any dimension group
 * the Bible adds later (redemption, mechanics' liens, doing business), so new groups appear here with no code change. */
const LOAN_TYPES = [["res", "1-4 unit residential"], ["com", "Commercial and 5+ units"]];
const LOAN_LONG = { res: "1-4 unit residential business-purpose loans", com: "Commercial and 5+ unit loans" };
const SLT_TOPICS = STATE_LAW.topics || [];
const sltTopic = (key) => SLT_TOPICS.find((t) => t.key === key) || null;
/** One answer: badge, detail, statute, date checked and the counsel flag. */
function slCell(r, ctx, hLevel, title) {
  const a = el("article", "sltopic");
  const left = el("div");
  if (title) left.append(el("h" + hLevel, "", title));
  left.append(Object.assign(el("span", "verdict", r.verdict), { className: "verdict v-" + r.tone }));
  const right = el("div"); right.append(mdNodes(r.detail, "", ctx));
  const c = el("p", "slcite");
  if (r.cite) c.append(el("span", "cite-txt", r.cite));
  if (r.checked) c.append(el("span", "chk", `Checked ${r.checked}`));
  if (r.confirm) c.append(el("span", "confirm", "Counsel to confirm"));
  if (c.childNodes.length) right.append(c);
  a.append(left, right);
  return a;
}
/** By state, By topic, How to research: three views of the same guide. */
function slViews(cur, st, lt) {
  const nav = el("nav", "slviews"); nav.setAttribute("aria-label", "State law guide views");
  const first = SLT_TOPICS[0] ? SLT_TOPICS[0].key : "";
  for (const [k, label, href] of [["state", "By state", `#state-law/${st ? st.code : "oh"}/${lt || "res"}`], ["topic", "By topic", `#state-law/topic/${first}`], ["research", "Research a new state", "#state-law/research"]]) {
    const a = el("a", "", label); a.href = href; if (k === cur) a.setAttribute("aria-current", "page"); nav.append(a);
  }
  return nav;
}
function slHead(title, lede, reviewed) {
  const head = el("header", "hero");
  const h1 = el("h1", "display", title); h1.tabIndex = -1;
  head.append(el("p", "eyebrow", "Reference · State law guide"), h1);
  if (lede) head.append(el("p", "lede", lede));
  const meta = el("ul", "meta"); if (reviewed) meta.append(el("li", "", `Last reviewed ${reviewed}`));
  meta.append(el("li", "", "Not legal advice"));
  head.append(meta, el("div", "rule"));
  return { head, h1 };
}
const SL_LEDE = "What each course state's law says about licensing, interest, fees, prepayment and foreclosure. This is not legal advice: counsel in the state confirms every point before any live deal.";
function researchLink() {
  const p = el("p", "slresearch");
  const a = el("a", "", "How to research a new state"); a.href = "#state-law/research";
  p.append("A deal in another state? ", a, " gives the eight steps and a source map.");
  return p;
}
function showStateLaw(stKey, typeKey, focus) {
  if (stKey === "topic") return showStateTopic(typeKey, focus);
  if (stKey === "research") return showStateResearch(focus);
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc");
  const states = STATE_LAW.states;
  let st = states.find((s) => s.code === stKey) || states[0], lt = LOAN_TYPES.some((t) => t[0] === typeKey) ? typeKey : (st && st.dealType) || "res";
  const { head, h1 } = slHead("State law guide", SL_LEDE + " Pick a state and a loan type, or compare one topic across states.", REVIEWED["state-law"]);
  head.append(researchLink());
  const views = slViews("state", st, lt);
  const picks = el("div", "picks");
  const g1 = el("div"); const l1 = el("p", "plabel", "State"); l1.id = "st-l"; const r1 = el("div", "chips"); r1.setAttribute("role", "group"); r1.setAttribute("aria-labelledby", "st-l");
  const g2 = el("div"); const l2 = el("p", "plabel", "Loan type"); l2.id = "lt-l"; const r2 = el("div", "seg"); r2.setAttribute("role", "group"); r2.setAttribute("aria-labelledby", "lt-l");
  const sbs = states.map((s) => { const b = el("button", "stbtn"); b.type = "button"; b.append(el("b", "", s.name), el("small", "", s.deal)); b.addEventListener("click", () => { st = s; paint(true); }); r1.append(b); return b; });
  const tbs = LOAN_TYPES.map(([k, label]) => { const b = el("button", "", label); b.type = "button"; b.addEventListener("click", () => { lt = k; paint(true); }); r2.append(b); return b; });
  g1.append(l1, r1); g2.append(l2, r2); picks.append(g1, g2);
  const summary = el("section", "slsum"); summary.setAttribute("aria-live", "polite");
  const list = el("div", "sltopics");
  const foot = el("section", "slfoot");
  function paint(user) {
    sbs.forEach((b, k) => b.setAttribute("aria-pressed", String(states[k] === st)));
    tbs.forEach((b, k) => b.setAttribute("aria-pressed", String(LOAN_TYPES[k][0] === lt)));
    const typeLabel = LOAN_TYPES.find((t) => t[0] === lt)[1];
    summary.replaceChildren(el("h2", "", `${st.name}: ${typeLabel.toLowerCase()} business-purpose loans`));
    if (st.note && (!st.dealType || st.dealType === lt)) summary.append(mdNodes(st.note.text, "", newCiteCtx()));
    else summary.append(el("p", "", st.dealType ? `No running deal uses this combination. ${st.deal} is a ${st.dealType === "res" ? "1-4 unit" : "commercial or 5+ unit"} loan. Read each topic below.` : "Read each topic below."));
    const ctx = newCiteCtx();
    const rows = st.rows[lt] || [];
    const nodes = rows.filter((r) => r.group === "core").map((r) => slCell(r, ctx, 3, r.topic));
    // Dimension groups: a heading, why it matters, then each sub-answer.
    for (const t of SLT_TOPICS.filter((x) => x.group !== "core")) {
      const cells = rows.filter((r) => r.group === t.key); if (!cells.length) continue;
      const s = el("section", "slgroup");
      const h = el("h3", ""); const a = el("a", "", t.label); a.href = `#state-law/topic/${t.key}`; h.append(a); s.append(h);
      if (t.why) s.append(el("p", "slwhy", t.why));
      for (const r of cells) s.append(slCell(r, ctx, 4, r.topic));
      nodes.push(s);
    }
    list.replaceChildren(...nodes);
    foot.replaceChildren();
    foot.append(el("p", "fine", `Checked against statutes and regulator pages on ${st.checked || STATE_LAW.checked}. “None found” means no statute or regulator page was found on the point. It does not mean no rule exists. “Secondary” marks a law-firm or legal-aid page used where no primary page gave the point.`));
    if (st.changes) { const s = el("section"); s.append(el("h3", "", "Recent or pending changes"), mdNodes(st.changes, "", ctx)); foot.append(s); }
    if (st.sources.length) {
      const s = el("section"); s.append(el("h3", "", `${st.name} sources`)); const u = el("ul", "srcs");
      for (const x of st.sources) { const li = el("li"); const a = el("a", "", x.label); a.href = x.url; a.target = "_blank"; a.rel = "noopener"; li.append(a); u.append(li); }
      s.append(u); foot.append(s);
    }
    if (user) { try { history.replaceState(null, "", `#state-law/${st.code}/${lt}`); } catch { /* sandboxed */ } }
    const vs = views.querySelector("a"); if (vs) vs.href = `#state-law/${st.code}/${lt}`;
    renderMath(list); markScrollers(doc);
  }
  const pats = el("section", "card note");
  pats.append(el("h2", "", "Three patterns hold in all four states"));
  const pu = el("ul"); for (const p of STATE_LAW.patterns) { const li = el("li"); li.append(mdInline(p)); pu.append(li); } pats.append(pu);
  const open = el("section", "card note");
  if (STATE_LAW.open.length) {
    open.append(el("h2", "", "Open questions for counsel"));
    const ol = el("ol"); for (const p of STATE_LAW.open) { const li = el("li"); li.append(mdInline(p)); ol.append(li); } open.append(ol);
  }
  paint(false);
  mountShelf(doc, [head, views, picks, summary, list, foot, pats, ...(STATE_LAW.open.length ? [open] : []), authorView("state-law", "the State Law Table export")], "State law guide", ["Reference shelf", "State law guide"], focus, h1);
}

/* ---------- one topic across all four states ---------- */
function showStateTopic(key, focus) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc");
  const t = sltTopic(key) || SLT_TOPICS[0];
  const { head, h1 } = slHead(`${t.label} in four states`, "One topic across all four course states, side by side for each loan group. Pick another topic to compare.", REVIEWED["state-law"]);
  head.append(researchLink());
  const views = slViews("topic", null, null);
  const pickBox = el("div", "sltpick");
  const pl = el("p", "plabel", "Topic"); pl.id = "slt-l";
  const chips = el("ul", "chips sltchips"); chips.setAttribute("aria-labelledby", "slt-l");
  for (const x of SLT_TOPICS) {
    const li = el("li"); const a = el("a", "chip", x.label); a.href = `#state-law/topic/${x.key}`;
    if (x === t) a.setAttribute("aria-current", "page");
    li.append(a); chips.append(li);
  }
  pickBox.append(pl, chips);
  const nodes = [head, views, pickBox];
  if (t.why) { const w = el("p", "slwhy slwhy-top"); w.append(el("strong", "", "Why it matters to the lender. "), t.why); nodes.push(w); }
  const ctx = newCiteCtx();
  for (const [lt] of LOAN_TYPES) {
    const sec = el("section", "slcmpsec");
    sec.append(el("h2", "", LOAN_LONG[lt]));
    const grid = el("div", "slcmp");
    for (const st of STATE_LAW.states) {
      const cells = (st.rows[lt] || []).filter((r) => t.columns.includes(r.key));
      const card = el("section", "slstate");
      const h = el("h3", ""); h.append(st.name);
      card.append(h, el("p", "sldeal", st.dealType === lt ? `Running deal: ${st.deal}` : st.dealType ? `${st.deal} is the other loan type` : st.deal));
      if (!cells.length) card.append(el("p", "", "Not in the table yet."));
      for (const r of cells) card.append(slCell(r, ctx, 4, t.columns.length > 1 ? r.topic : ""));
      const more = el("p", "fine"); const a = el("a", "", `All topics for ${st.name}`); a.href = `#state-law/${st.code}/${lt}`; more.append(a); card.append(more);
      grid.append(card);
    }
    sec.append(grid); nodes.push(sec);
  }
  nodes.push(el("p", "fine", "“None found” means no statute or regulator page was found on the point. It does not mean no rule exists. Each answer shows the date it was checked."));
  const i = SLT_TOPICS.indexOf(t), pv = SLT_TOPICS[i - 1], nx = SLT_TOPICS[i + 1];
  const nav = el("nav", "modnav"); nav.setAttribute("aria-label", "Other topics");
  if (pv) { const a = el("a", "prev"); a.href = `#state-law/topic/${pv.key}`; a.append(el("span", "dir", "Previous topic"), el("b", "", pv.label)); nav.append(a); }
  if (nx) { const a = el("a", "next"); a.href = `#state-law/topic/${nx.key}`; a.append(el("span", "dir", "Next topic"), el("b", "", nx.label)); nav.append(a); }
  nodes.push(nav);
  mountShelf(doc, nodes, `${t.label} · State law guide`, ["Reference shelf", { text: "State law guide", href: "#state-law" }, `By topic: ${t.label}`], focus, h1);
  if (!focus) scrollTo(0, 0);
}

/* ---------- how to research a new state (docs/credit-policy/state-law-research-method.md) ---------- */
function showStateResearch(focus) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc");
  const R = STATE_LAW.research || { title: "How to research a new state", lede: "", md: "", notes: [], reviewed: "" };
  const { head, h1 } = slHead(R.title, R.lede, R.reviewed);
  const views = slViews("research", null, null);
  const body = mdNodes(R.md, "slmethod", newCiteCtx());
  // Source notes: each [VERIFY] tag in the source is a numbered footnote, listed at the end of the page.
  const notes = el("section", "fnotes"); notes.append(el("h2", "", "Sources"));
  const ol = el("ol");
  R.notes.forEach((n, k) => { const li = el("li", "", n); li.id = `rs-fn-${k + 1}`; li.tabIndex = -1; ol.append(li); });
  notes.append(ol);
  for (const s of body.querySelectorAll("sup.fnref")) {
    const n = s.dataset.n;
    const b = el("button", "fnbtn", n); b.type = "button"; b.setAttribute("aria-label", `Source note ${n}`);
    b.addEventListener("click", () => { const li = $(`rs-fn-${n}`); if (!li) return; for (const x of ol.querySelectorAll(".hit")) x.classList.remove("hit"); li.classList.add("hit"); li.scrollIntoView({ block: "center" }); li.focus({ preventScroll: true }); });
    s.replaceChildren(b);
  }
  const back = el("p", "fine"); const a = el("a", "", "Back to the four states in the guide"); a.href = "#state-law"; back.append(a);
  mountShelf(doc, [head, views, body, ...(R.notes.length ? [notes] : []), back], R.title, ["Reference shelf", { text: "State law guide", href: "#state-law" }, R.title], focus, h1);
  if (!focus) scrollTo(0, 0);
}

/* ---------- running deals ---------- */
function showDeals(slugKey, focus) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc");
  const { head, h1 } = shelfHead("Reference", "Running deals", "Three fictional loans carry through every module. Each card holds the facts, the key numbers, the timeline and the modules that use it. Work each role's tasks before you open its answer key.", "deals");
  const cards = DEALS.map((d) => {
    const ctx = newCiteCtx();
    const sec = el("section", "card dealcard"); sec.id = "deal-" + d.slug;
    const top = el("div", "dtop");
    const tx = el("div", "tx");
    tx.append(el("h2", "", d.name), el("p", "tags", [d.family, d.state, d.title.replace(d.name, "").trim()].filter(Boolean).join(" · ")), mdNodes(d.intro, "", ctx));
    const art = dealArt(d.id); art.setAttribute("aria-hidden", "true"); const svg = art.querySelector("svg"); if (svg) svg.removeAttribute("role");
    top.append(art, tx); sec.append(top);
    for (const [title, rows] of Object.entries(d.facts)) {
      const s = el("section", "dfacts"); s.append(el("h3", "", title));
      const dl = el("dl");
      for (const r of rows) {
        const dd = el("dd"); dd.append(mdInline(r.v, ctx));
        if (r.src) { const sm = el("small", "dsrc"); sm.append("Source: ", mdInline(r.src, ctx)); dd.append(sm); }
        const dt = el("dt"); dt.append(mdInline(r.k, ctx)); dl.append(dt, dd);
      }
      s.append(dl); sec.append(s);
    }
    if (d.timeline.length) {
      const s = el("section", "dtime"); s.append(el("h3", "", "Timeline"));
      const ol = el("ol", "timeline");
      for (const t of d.timeline) { const li = el("li"); li.append(el("span", "when", /^\d/.test(t.when) ? `Month ${t.when}` : t.when), mdInline(t.what, ctx)); ol.append(li); }
      s.append(ol); sec.append(s);
    }
    if (d.stateNote) {
      const s = el("section", "dstate"); s.append(el("h3", "", "State law"), mdNodes(d.stateNote, "", ctx));
      const st = STATE_LAW.states.find((x) => x.name === d.state);
      if (st) { const p = el("p", "fine"); const a2 = el("a", "", `Open the state law guide for ${st.name}`); a2.href = `#state-law/${st.code}/${st.dealType || "res"}`; p.append(a2); s.append(p); }
      sec.append(s);
    }
    const used = usedIn(d.id);
    if (used.length) { const s = el("section", "dused"); s.append(el("h3", "", "Modules that use it"), modLinks(used)); sec.append(s); }
    if (d.roles.length) {
      const s = el("section", "droles"); s.append(el("h3", "", "Work the deal"));
      for (const r of d.roles) {
        const det = el("details", "role");
        det.append(el("summary", "", r.title));
        const ol = el("ol"); for (const t of r.tasks) { const li = el("li"); li.append(mdInline(t, ctx)); ol.append(li); }
        det.append(el("p", "plabel", "Your tasks"), ol);
        if (r.key) { const k = el("details", "key"); k.append(el("summary", "", "Show the answer key"), mdNodes(r.key, "", ctx)); det.append(k); }
        s.append(det);
      }
      sec.append(s);
    }
    const rl = refList(sec, "h3"); if (rl) sec.append(rl);
    sec.append(codeA(d.id));
    return sec;
  });
  // #deals lists the three deals; #deals/<slug> shows one deal's full card.
  const d = slugKey ? DEALS.find((x) => x.slug === slugKey || x.id === slugKey) : null;
  if (!d) {
    const grid = el("div", "deals");
    for (const x of DEALS) {
      const a = el("a", "card deal"); a.href = "#deals/" + x.slug;
      const t = el("div", "tx");
      t.append(el("h2", "dname", x.name), el("span", "tags", [x.family, x.state, x.title.replace(x.name, "").trim()].filter(Boolean).join(" · ")), el("p", "", x.summary), el("span", "go", "Open the deal file"));
      a.append(dealArt(x.id), t); grid.append(a);
    }
    mountShelf(doc, [head, grid, authorView("deals", "the Running Deals export")], "Running deals", ["Reference shelf", "Running deals"], focus, h1);
    return;
  }
  const card = cards[DEALS.indexOf(d)];
  const top = el("header", "hero");
  const h1d = el("h1", "display", d.name); h1d.tabIndex = -1;
  top.append(el("p", "eyebrow", "Running deal"), h1d);
  const meta = el("ul", "meta"); if (REVIEWED.deals) meta.append(el("li", "", `Last reviewed ${REVIEWED.deals}`)); meta.append(el("li", "", "Fictional borrower and property")); top.append(meta);
  const back = el("p", "fine"); const ba = el("a", "", "All running deals"); ba.href = "#deals"; back.append(ba);
  card.querySelector(".dtop h2").textContent = "Overview";
  const nav = el("nav", "modnav"); nav.setAttribute("aria-label", "Other deals");
  for (const x of DEALS) if (x !== d) { const a = el("a", "next"); a.href = "#deals/" + x.slug; a.append(el("span", "dir", "Running deal"), el("b", "", x.name)); nav.append(a); }
  mountShelf(doc, [top, back, card, nav], d.name, ["Reference shelf", "Running deals", d.name], focus, h1d);
}
