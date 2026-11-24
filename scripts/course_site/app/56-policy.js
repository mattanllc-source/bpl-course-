/* ---------- Model Credit Policy by deal-order topic (decision 12; docs/design/policy-topics-spec.md) ----------
 * build.py reads scripts/course_site/policy_topics.json, checks it against the parsed policy (the build fails on any
 * mismatch) and gives each rule its topic, its citation label ("Credit Policy 4: ...") and a core-course flag.
 * This file only arranges the rules. Rule text, limits and IDs come from the policy export unchanged.
 * Routes: #policy, #policy/4, #policy/7/<product>, #policy/<rule ID>, #policy/limits; filters ride in the query
 * (#policy/4?all=1&q=liquidity) so a link reproduces the view. */
const PTOP = (POLICY && POLICY.topics && POLICY.topics.topics) || [];
const P7 = PTOP.find((t) => t.products) || null;
const PPROD = P7 ? P7.products : [];
const FAMS3 = ["Residential", "Multifamily", "Commercial"];
const RULE_ID_RE = /^(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\d{2}$/;
const ruleOf = (id) => { const r = RULES.get(id); return r && r.kind === "rule" ? r : null; };
const isCoreRule = (id) => !!(ruleOf(id) && ruleOf(id).core);
const nWord = (n, one, many) => `${n} ${n === 1 ? one : many || one + "s"}`;
const stripCode = (s) => String(s || "").replace(/\s*\((?:[A-Z]{2,4}-[A-Z]{2,5})\)/g, "");
const polH = (lvl, cls, text) => el("h" + Math.min(6, Math.max(1, lvl)), cls, text);
const prodOf = (slug) => PPROD.find((p) => p.slug === slug) || null;
const topicOf = (n) => PTOP.find((t) => t.n === n) || null;

function polState() {
  const h = decodeURIComponent(location.hash.slice(1)); const i = h.indexOf("?");
  const p = new URLSearchParams(i >= 0 ? h.slice(i + 1) : "");
  return { all: p.get("all") === "1", q: p.get("q") || "", product: p.get("product") || "" };
}
function polHref(path, st) {
  const p = new URLSearchParams();
  if (st && st.all) p.set("all", "1");
  if (st && st.product) p.set("product", st.product);
  if (st && st.q) p.set("q", st.q);
  const qs = p.toString(); return "#" + path + (qs ? "?" + qs : "");
}
/** "7 of 9 rules" when the core filter hides some, else "9 rules". */
function countText(ids, st) {
  const total = ids.length, nc = ids.filter(isCoreRule).length;
  return st.all || nc === total ? nWord(total, "rule") : `${nc} of ${nWord(total, "rule")}`;
}

/* ---------- small builders ---------- */
function mdTableOf(t, learner) {
  const keep = t.head.map((h, k) => k).filter((k) => !(learner && t.head[k] === "Policy section"));
  const cell = (s, k) => (learner && k === 0 ? stripCode(s) : s || "");
  return ["| " + keep.map((k) => t.head[k]).join(" | ") + " |", "| " + keep.map(() => "---").join(" | ") + " |",
    ...t.rows.map((r) => "| " + keep.map((k) => cell(r[k], k)).join(" | ") + " |")].join("\n");
}
/** A Part 3B table: the learner version (no policy-section column, no product codes) and the Audit version. */
function dualTable(t, ctx) {
  const box = el("div", "ptable");
  box.append(mdNodes(mdTableOf(t, true), "lv-learn", ctx));
  if (t.head.includes("Policy section") || t.rows.some((r) => stripCode(r[0]) !== r[0])) box.append(mdNodes(mdTableOf(t, false), "lv-audit", ctx));
  if (t.foot && t.foot.length) box.append(mdNodes(t.foot.join("\n"), "pfoot", ctx));
  return box;
}
/** Test | Limit, with a small link to the rule card at the end of each row. Stacks on phones. */
function glanceTable(rows, caption, ctx, st) {
  const w = el("div", "tbl pkv pglance"); const t = el("table");
  t.append(el("caption", "sr", caption));
  const hd = el("thead"); const hr = el("tr");
  for (const x of ["Test", "Limit"]) { const th = el("th", "", x); th.scope = "col"; hr.append(th); }
  hd.append(hr); t.append(hd);
  const tb = el("tbody");
  for (const r of rows) {
    const tr = el("tr"); const th = el("th", "", stripCode(r.test)); th.scope = "row";
    const td = el("td"); td.append(mdInline(r.limit, ctx));
    if (r.rule) { const a = el("a", "rlink", "Rule"); a.href = polHref("policy/" + r.rule, { all: st.all }); a.setAttribute("aria-label", `Rule: ${stripCode(r.test)}`); td.append(" ", a); }
    if (r.src) td.append(" ", codeA(r.src));
    tr.append(th, td); tb.append(tr);
  }
  t.append(tb); w.append(t);
  return w;
}
function checkBlock(c, lvl, ctx) {
  const s = el("section", "lcard dsheet pcheck");
  const hd = el("div", "dsh-head");
  hd.append(el("p", "dsh-kicker", "WORKED CHECK · RUNNING DEAL"), polH(lvl, "dsh-title", c.title));
  const deals = [c.deal, ...(c.otherDeals || [])].map(dealById).filter(Boolean);
  if (deals.length) {
    const p = el("p", "pdeals");
    deals.forEach((d, k) => { if (k) p.append(" · "); const a = el("a", "", `Deal file: ${dealShort(d)}`); a.href = "#deals/" + d.slug; p.append(a); });
    hd.append(p);
  }
  s.append(hd);
  const w = el("div", "tbl ledger pkv"); const t = el("table"); t.append(el("caption", "sr", c.title));
  const tb = el("tbody");
  for (const [k, v] of c.lines || []) { const tr = el("tr"); const th = el("th", "", k); th.scope = "row"; const td = el("td"); td.append(mdInline(v, ctx)); tr.append(th, td); tb.append(tr); }
  const tr = el("tr", "total"); const th = el("th", "", "Result"); th.scope = "row"; const td = el("td"); td.append(mdInline(c.result, ctx)); tr.append(th, td); tb.append(tr);
  t.append(tb); w.append(t);
  s.append(w, el("p", "fine pnum", "Numbers from the running deal file; results compared at full precision."));
  return s;
}
function modLink(code) {
  const m = modByCode(code); if (!m) return null;
  const a = el("a", "", `Module ${code.slice(1)} · ${m.title}`); a.href = "#" + m.key; return a;
}
function taughtBlock(ids, homes) {
  const box = el("div", "ptaught");
  const list = (codes) => { const ul = el("ul", "plinks"); for (const c of codes) { const a = modLink(c); if (a) { const li = el("li"); li.append(a); ul.append(li); } } return ul; };
  if (homes.length) box.append(list(homes));
  const byNum = (a, b) => Number(a.slice(1)) - Number(b.slice(1));
  const also = [...new Set(ids.flatMap((id) => (ruleOf(id) || {}).usedBy || []))].filter((c) => !homes.includes(c)).sort(byNum);
  if (also.length) box.append(el("p", "plab", "Also used in"), list(also));
  if (!homes.length && !also.length) box.append(el("p", "", "No core module cites these rules yet."));
  return box;
}
/** A plain-name link to a rule whose home is another topic or product. */
function relLabel(id) {
  const r = ruleOf(id); if (!r) return id;
  const t = topicOf(r.topicN), p = r.product ? prodOf(r.product) : null;
  const place = p && p.kind === "product" ? p.name : t ? t.name.replace(/\?$/, "") : "";
  let words = (r.block ? r.name : shortName(r.rule)).replace(/…$/, "").split(/\s+/);
  if (words.length > 9) { words = words.slice(0, 9); while (words.length > 4 && /^(a|an|the|of|to|and|or|in|on|for|at|by|with|is|are|must)$/i.test(words[words.length - 1])) words.pop(); }
  return `${place}: ${lowerName(words.join(" ").replace(/[,;:]$/, ""))}`;
}
function seeAlsoBlock(ids, st) {
  const ok = ids.filter(ruleOf); if (!ok.length) return null;
  const ul = el("ul", "plinks");
  for (const id of ok) { const li = el("li"); const a = el("a", "", relLabel(id)); a.href = polHref("policy/" + id, { all: st.all }); li.append(a, " ", codeA(id)); ul.append(li); }
  return ul;
}
function polCard(id, ctx, lvl) {
  const r = ruleOf(id); if (!r) return null;
  const c = ruleCard({ ...r, text: r.rule }, ctx, lvl);     // the full rule text, never a cut-down first sentence
  c.dataset.core = r.core ? "1" : "0";
  if (!r.core) c.prepend(el("p", "rtag", "Outside the core course"));
  return c;
}
function attachNodes(items, ctx) {
  const out = [];
  for (const it of items || []) {
    if (it.kind === "md") out.push(mdNodes(it.md, "pmd", ctx));
    else if (it.kind === "formula" && FORMULAS.has(it.id)) {
      const d = el("details", "pformula"); const fm = FORMULAS.get(it.id);
      d.append(el("summary", "", `Worked example: ${fm.name}`));
      const p = el("p", "fine"); p.append("Formula page: ", formulaLink(it.id, fm.name));
      d.append(p, mdNodes(it.md, "", ctx)); out.push(d);
    }
  }
  return out;
}
/** "All rules in this topic (7 of 9)": collapsed; the core filter hides cards, never the topic content above. */
function rulesBlock(title, ids, o) {
  const { ctx, st, lvl, groups, attach, onAll } = o;
  const nc = ids.filter(isCoreRule).length;
  const det = el("details", "prules polrules");
  det.append(el("summary", "", `${title} (${countText(ids, st).replace(/ rules?$/, "")})`));
  const body = el("div", "prbody");
  const addCards = (box, list, l) => { for (const id of list) { const c = polCard(id, ctx, l); if (!c) continue; if (!st.all && !isCoreRule(id)) c.hidden = true; box.append(c); } };
  if (groups) {
    for (const g of groups) {
      if (!g.ids.length) continue;
      const sec = el("section", "prgroup"); sec.append(polH(lvl, "", g.title));
      addCards(sec, g.ids, lvl + 1);
      if (!st.all && !g.ids.some(isCoreRule)) sec.hidden = true;
      body.append(sec);
    }
  } else addCards(body, ids, lvl);
  if (!st.all && nc < ids.length) {
    const p = el("p", "pmore");
    const more = ids.length - nc;
    p.append(nc ? `${nWord(more, "more rule")} ${more === 1 ? "applies" : "apply"} outside the core course. ` : "No rule here is used in the core course. ");
    const b = el("button", "linkbtn", "Show all rules"); b.type = "button"; b.addEventListener("click", onAll);
    p.append(b); body.append(p);
  }
  body.append(...attachNodes(attach, ctx));
  det.append(body);
  return det;
}
function mapCheck(t, lvl) {
  const s = el("section", "audit-only pmap");
  s.append(polH(lvl, "", "Map check (Audit mode)"));
  const ul = el("ul");
  const line = (k, v) => ul.append(el("li", "", `${k}: ${v || "none"}`));
  line(`Rules (${t.rules.length})`, t.rules.join(", "));
  line("Used in the core course", `${t.rules.filter(isCoreRule).length} of ${t.rules.length}`);
  line("Related elsewhere", (t.seeAlso || []).join(", "));
  line("Limits rows from", [...(t.coreRows || []).map((r) => r.rule), ...(t.glance || []).map((g) => g[2])].join(", "));
  s.append(ul);
  return s;
}
function polNav(prev, next, label) {
  const nav = el("nav", "modnav"); nav.setAttribute("aria-label", label);
  if (prev) { const a = el("a", "prev"); a.href = prev.href; a.append(el("span", "dir", prev.dir), el("b", "", prev.name)); nav.append(a); }
  if (next) { const a = el("a", "next"); a.href = next.href; a.append(el("span", "dir", next.dir), el("b", "", next.name)); nav.append(a); }
  return nav;
}

/* ---------- pages ---------- */
function topicHead(art, kicker, title, sub, lvl) {
  const h = polH(lvl, "display ptitle", title); h.tabIndex = -1;
  art.append(el("p", "eyebrow pkick", kicker), h);
  if (sub) art.append(el("p", "lede psub", sub));
  if (REVIEWED.policy) { const meta = el("ul", "meta pmeta"); meta.append(el("li", "", `Last reviewed ${REVIEWED.policy}`)); art.append(meta); }
  return h;
}
function topicPage(t, st, lvl, ctx, onAll) {
  const art = el("article", "ptopic");
  const h = topicHead(art, `Credit Policy · Topic ${t.n} of ${PTOP.length}`, t.name, t.oneLine, lvl);
  const sec = (title, cls, ...nodes) => { const s = el("section", "pblk" + (cls ? " " + cls : "")); s.append(polH(lvl + 1, "", title), ...nodes.filter(Boolean)); art.append(s); return s; };
  sec("In plain English", "psum", el("p", "", t.summary));
  if (t.products) {
    art.append(chooser(st, lvl + 1));
  } else {
    const rows = [...(t.coreRows || []).map((r) => ({ test: r.cells[0], limit: r.cells[1], rule: r.rule, src: r.cells[2] })),
      ...(t.glance || []).map(([a, b, c]) => ({ test: a, limit: b, rule: c }))];
    if (rows.length) sec("Limits at a glance", "", glanceTable(rows, `Limits at a glance: ${t.name}`, ctx, st));
    if ((t.apply || []).length) { const ol = el("ol", "papply"); for (const x of t.apply) ol.append(el("li", "", x)); sec("How to apply it on a file", "", ol); }
    if (t.check) art.append(checkBlock(t.check, lvl + 1, ctx));
  }
  if (t.why) sec("Why these rules exist", "", el("p", "", t.why));
  sec("Where the course teaches it", "", taughtBlock(t.rules, t.modules || []));
  const rel = seeAlsoBlock(t.seeAlso || [], st); if (rel) sec("Related rules elsewhere", "", rel);
  const groups = t.products ? t.products.map((p) => ({ title: p.name, ids: p.rules })) : null;
  art.append(rulesBlock("All rules in this topic", t.rules, { ctx, st, lvl: lvl + 1, groups, attach: t.attach, onAll }));
  if (t.products) art.append(compareBlock(lvl + 1, ctx));
  art.append(mapCheck(t, lvl + 1));
  const pv = topicOf(t.n - 1), nx = topicOf(t.n + 1);
  art.append(polNav(pv && { href: polHref("policy/" + pv.n, { all: st.all }), dir: `Previous topic · ${pv.n}`, name: pv.name },
    nx && { href: polHref("policy/" + nx.n, { all: st.all }), dir: `Next topic · ${nx.n}`, name: nx.name }, "Other topics"));
  return { art, h };
}
function keyLimits(p) {
  const tb = P7 && P7.familyTables[p.family];
  if (!tb || !p.rows.length) return null;
  const box = el("span", "pkl");
  if (p.rows.length > 1) { box.append(`Limits by property type: ${p.rows.length} rows`); return box; }
  for (const k of [1, 2]) if (p.rows[0][k] && p.rows[0][k] !== "n/a") box.append(el("span", "", `${tb.head[k]}: ${learnerString(p.rows[0][k]).replace(/\s*\(\s*\)/g, "")}`));
  return box;
}
function chooser(st, lvl) {
  const s = el("section", "pblk pchoose");
  s.append(polH(lvl, "", "Choose a product"));
  const every = PPROD.find((p) => p.kind === "all");
  if (every) { const p = el("p", "pevery"); const a = el("a", "", `${every.name} (${countText(every.rules, st)})`); a.href = polHref("policy/7/" + every.slug, { all: st.all }); p.append("Applies to every product: ", a); s.append(p); }
  const cols = el("div", "pcols");
  for (const fam of FAMS3) {
    const col = el("section", "pcol"); col.append(polH(lvl + 1, "", fam));
    const fp = PPROD.find((p) => p.kind === "family" && p.family === fam);
    if (fp) { const a = el("a", "pfamlink", `Rules for every ${fam.toLowerCase()} loan (${countText(fp.rules, st)})`); a.href = polHref("policy/7/" + fp.slug, { all: st.all }); col.append(a); }
    const ul = el("ul", "pprods");
    for (const p of PPROD.filter((x) => x.kind === "product" && x.family === fam)) {
      const li = el("li"); const a = el("a", "pprod"); a.href = polHref("policy/7/" + p.slug, { all: st.all });
      a.append(el("b", "", p.name), el("span", "pc", countText(p.rules, st)));
      const kl = keyLimits(p); if (kl) a.append(kl);
      if (!st.all && !p.rules.some(isCoreRule)) { a.classList.add("dim"); a.append(el("span", "pnot", "Not used in the core course")); }
      li.append(a); ul.append(li);
    }
    col.append(ul); cols.append(col);
  }
  s.append(cols);
  return s;
}
function compareBlock(lvl, ctx) {
  const s = el("section", "pblk pcompare");
  s.append(polH(lvl, "", "Compare products"), el("p", "", "Each family's limits table, as the policy states it. Core limits apply on top."));
  for (const fam of FAMS3) {
    const t = P7.familyTables[fam]; if (!t) continue;
    s.append(polH(lvl + 1, "", `${fam} products`), dualTable(t, ctx));
  }
  return s;
}
function productPage(p, st, ctx, onAll) {
  const art = el("article", "ptopic pproduct");
  const lvl = 1;
  const h = topicHead(art, `Credit Policy · Topic 7 of ${PTOP.length} · ${p.family === "Core" ? "Every product" : p.family}`, p.name,
    p.kind === "product" ? `Every limit for ${p.name} in one place.` : p.kind === "family" ? `The rules that apply to every ${p.family.toLowerCase()} loan, whatever the product.` : "The rule that applies to every loan we make.", lvl);
  const sec = (title, cls, ...nodes) => { const s = el("section", "pblk" + (cls ? " " + cls : "")); s.append(polH(lvl + 1, "", title), ...nodes.filter(Boolean)); art.append(s); return s; };
  const tb = P7 && P7.familyTables[p.family];
  if (tb && p.rows.length) {
    const s = sec("Limits at a glance", "");
    for (const row of p.rows) {
      const rows = tb.head.slice(1).map((hh, k) => ({ test: hh, limit: row[k + 1] })).filter((r) => r.limit);
      if (p.rows.length > 1) s.append(polH(lvl + 2, "prow-h", stripCode(row[0])));
      s.append(glanceTable(rows, `Limits at a glance: ${stripCode(row[0])}`, ctx, st));
    }
  } else if (tb && p.kind === "family" && tb.foot.length) sec("Limits at a glance", "", mdNodes(tb.foot.join("\n"), "pfoot", ctx));
  if (p.kind === "product") {
    const fp = PPROD.find((x) => x.kind === "family" && x.family === p.family), every = PPROD.find((x) => x.kind === "all");
    const ids = [...(fp ? fp.rules : []), ...(every ? every.rules : [])];
    if (ids.length) {
      const d = el("details", "prules pfamblk");
      d.append(el("summary", "", `Also applies to every ${p.family.toLowerCase()} loan (${countText(ids, st).replace(/ rules?$/, "")})`));
      const body = el("div", "prbody");
      if (tb && tb.foot.length) body.append(mdNodes(tb.foot.join("\n"), "pfoot", ctx));
      for (const id of ids) { const c = polCard(id, ctx, lvl + 2); if (c) { if (!st.all && !isCoreRule(id)) c.hidden = true; body.append(c); } }
      const link = el("p", "fine"); const a = el("a", "", `Open the rules for every ${p.family.toLowerCase()} loan`); a.href = polHref("policy/7/" + (fp ? fp.slug : ""), { all: st.all }); link.append(a); if (fp) body.append(link);
      d.append(body); art.append(d);
    }
  }
  if (p.check) art.append(checkBlock(p.check, lvl + 1, ctx));
  sec("Where the course teaches it", "", taughtBlock(p.rules, []));
  art.append(rulesBlock(p.kind === "product" ? "All rules for this product" : "All rules here", p.rules, { ctx, st, lvl: lvl + 1, attach: p.attach, onAll }));
  const i = PPROD.indexOf(p), pv = PPROD[i - 1], nx = PPROD[i + 1];
  const back = { href: polHref("policy/7", { all: st.all }), dir: "Topic 7", name: P7.name };
  art.append(polNav(pv ? { href: polHref("policy/7/" + pv.slug, { all: st.all }), dir: "Previous product", name: pv.name } : back,
    nx ? { href: polHref("policy/7/" + nx.slug, { all: st.all }), dir: "Next product", name: nx.name } : back, "Other products"));
  return { art, h };
}
function limitsPage(ctx) {
  const art = el("article", "ptopic plimits");
  const h = topicHead(art, "Model Credit Policy · Print view", "All limits at a glance",
    "The four limits tables from the policy, intact: Core first, then each loan family. Use your browser's print command to print them.", 1);
  if (REVIEWED.policy) art.append(el("p", "fine", `Policy snapshot of ${REVIEWED.policy}.`));
  art.append(el("p", "pprint", LABEL));       // on screen the notice bar carries the label; a printout needs its own
  for (const F of POLICY.families) for (const t of F.tables || []) { const s = el("section", "pblk"); s.append(polH(2, "", `${F.name} limits`), dualTable(t, ctx)); art.append(s); }
  return { art, h };
}

/* ---------- search across the whole policy ---------- */
let POL_HAY = null;
function polHay(id) {
  if (!POL_HAY) {
    POL_HAY = new Map();
    for (const t of PTOP) for (const rid of t.rules) {
      const r = ruleOf(rid); if (!r) continue;
      const p = r.product ? prodOf(r.product) : null;
      POL_HAY.set(rid, [rid, r.name, r.rule, plainText(learnerString(r.rule || "")), r.why, t.name, p ? p.name : ""].join(" ").toLowerCase());
    }
  }
  return POL_HAY.get(id) || "";
}
function polMatches(st) {
  const toks = st.q.toLowerCase().split(/\s+/).filter(Boolean);
  const by = new Map();
  if (!toks.length) return { toks, by, n: 0 };
  let n = 0;
  for (const t of PTOP) for (const id of t.rules) {
    const r = ruleOf(id); if (!r) continue;
    if (!st.all && !r.core) continue;
    const p = r.product ? prodOf(r.product) : null;
    if (st.product && p && p.kind === "product" && p.slug !== st.product) continue;
    if (!toks.every((w) => polHay(id).includes(w))) continue;
    if (!by.has(t.n)) by.set(t.n, []);
    by.get(t.n).push(id); n++;
  }
  return { toks, by, n };
}
function highlight(root, toks) {
  const re = new RegExp("(" + toks.map(escRe).join("|") + ")", "ig");
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (x) => x.parentElement.closest(".cx-raw, .code-a, button, mark, .math") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const n of nodes) {
    re.lastIndex = 0; if (!re.test(n.nodeValue)) continue;
    const frag = document.createDocumentFragment(); markText(frag, n.nodeValue, toks); n.replaceWith(frag);
  }
}
function searchPane(st, m, ctx, onAll) {
  const box = el("section", "psearch");
  const h = el("h2", "", `Search results for “${st.q}”`); h.tabIndex = -1; box.append(h);
  if (!m.n) {
    const p = el("p", "pempty");
    if (!st.all) { p.append("No rule matches in the core course. "); const b = el("button", "linkbtn", "Search all rules"); b.type = "button"; b.addEventListener("click", onAll); p.append(b); }
    else p.append("No rule matches. Try a shorter word.");
    box.append(p); return box;
  }
  for (const [n, ids] of m.by) {
    const t = topicOf(n);
    const s = el("section", "pres");
    const hh = el("h3", ""); const a = el("a", "", `Topic ${n} · ${t.name} (${ids.length})`); a.href = polHref("policy/" + n, { all: st.all }); hh.append(a);
    s.append(hh);
    for (const id of ids) { const c = polCard(id, ctx, 4); if (c) { highlight(c, m.toks); s.append(c); } }
    box.append(s);
  }
  return box;
}

/* ---------- rail (desktop) and topic index (phone) ---------- */
function polRail(cur, st, m) {
  const nav = el("nav", "polrail"); nav.setAttribute("aria-label", "Policy topics");
  const ol = el("ol", "prail");
  for (const t of PTOP) {
    const li = el("li"); const a = el("a", "prow"); a.href = polHref("policy/" + t.n, { all: st.all, product: st.product });
    a.title = t.oneLine;
    let cnt, dim = false;
    if (m) { const k = (m.by.get(t.n) || []).length; cnt = k ? nWord(k, "match", "matches") : "No match"; dim = !k; }
    else { cnt = countText(t.rules, st); dim = !st.all && !t.rules.some(isCoreRule); }
    const tx = el("span", "ptx"); tx.append(el("span", "pnm", t.name), el("span", "pone", t.oneLine));
    if (dim && !m) tx.append(el("span", "pnot", "Not used in the core course"));
    tx.append(el("span", "pcnt", cnt));
    a.append(el("span", "pno", String(t.n)), tx);
    if (dim) a.classList.add("dim");
    // On the index the pane previews topic 1 on desktop; the phone index has no current topic.
    if (!m && cur.n === t.n && !cur.product) { if (cur.index) a.classList.add("preview"); else a.setAttribute("aria-current", "page"); }
    li.append(a);
    if (t.products && cur.n === 7 && !m) {
      const sub = el("div", "psubnav");
      for (const fam of ["Core", ...FAMS3]) {
        const ps = t.products.filter((p) => p.family === fam); if (!ps.length) continue;
        if (fam !== "Core") sub.append(el("p", "pfam", fam));
        const ul = el("ul");
        for (const p of ps) {
          const li2 = el("li"); const a2 = el("a", "psrow"); a2.href = polHref("policy/7/" + p.slug, { all: st.all });
          a2.append(el("span", "", p.kind === "family" ? "Rules for every loan" : p.name), el("span", "pcnt", countText(p.rules, st).replace(/ rules?$/, "")));
          if (cur.product === p.slug) a2.setAttribute("aria-current", "page");
          li2.append(a2); ul.append(li2);
        }
        sub.append(ul);
      }
      li.append(sub);
    }
    ol.append(li);
  }
  nav.append(ol);
  return nav;
}

/* ---------- the page ---------- */
function showPolicy(a, focus, b) {
  view = "ref"; routeTok++; cur = null;
  const doc = $("doc");
  const st = polState();
  // What the route asks for: the index, a topic, a product, a rule (legacy and lesson deep links) or the print view.
  let route = { kind: "index", n: 1, product: "", anchor: "" }, missing = false;
  if (a === "limits") route = { kind: "limits", n: 0 };
  else if (/^\d+$/.test(a || "")) {
    const t = topicOf(Number(a));
    if (!t) missing = true;
    else if (b) { const p = t.products && prodOf(b); if (p) route = { kind: "product", n: 7, product: p.slug }; else { route = { kind: "topic", n: t.n }; missing = true; } }
    else route = { kind: "topic", n: t.n };
  } else if (a && RULE_ID_RE.test(a)) {
    const r = ruleOf(a);
    if (!r) missing = true;
    else route = r.product ? { kind: "product", n: 7, product: r.product, anchor: a } : { kind: "topic", n: r.topicN, anchor: a };
  } else if (a) missing = true;
  const path = route.kind === "index" ? "policy" : route.kind === "limits" ? "policy/limits"
    : route.anchor ? "policy/" + route.anchor : route.kind === "product" ? "policy/7/" + route.product : "policy/" + route.n;

  // Head: the index carries the page title; a topic page carries the topic as its title.
  // The training label shows once, in the notice bar (or under the title on phones), so the meta line holds only the date.
  let head = null, h1 = null;
  if (route.kind === "index") {
    head = el("header", "hero polhead");
    h1 = el("h1", "display", "Model Credit Policy"); h1.tabIndex = -1;
    head.append(el("p", "eyebrow", "Reference"), h1, el("p", "lede", "The rules every loan in this course must meet, in the order you work a deal. Pick a topic, or search every rule."));
    const meta = el("ul", "meta");
    if (REVIEWED.policy) meta.append(el("li", "", `Last reviewed ${REVIEWED.policy}`));
    meta.append(el("li", "", `${PTOP.length} topics`), el("li", "", nWord(PTOP.reduce((a, t) => a + t.rules.length, 0), "rule")));
    head.append(meta);
  }
  const back = el("p", "pback"); const ba = el("a", "", "‹ All topics"); ba.href = polHref("policy", { all: st.all }); back.append(ba);

  // Filters: inline on desktop; a sheet (dialog) on phones.
  const bar = el("div", "pfbar"); bar.id = "pol-filters";
  const sheetH = el("h2", "pfh", "Filters"); sheetH.id = "pol-filters-h";
  const sw = el("button", "pswitch"); sw.type = "button"; sw.setAttribute("role", "switch");
  const swTrack = el("span", "trk"); swTrack.setAttribute("aria-hidden", "true");
  sw.append(swTrack, el("span", "", "Used in the core course"));
  const swCount = el("span", "pfnote");
  const ps = el("div", "pfsel");
  const pl = el("label", "", "Product"); pl.htmlFor = "pol-prod";
  const sel = el("select"); sel.id = "pol-prod";
  sel.append(Object.assign(el("option", "", "All products"), { value: "" }));
  for (const fam of FAMS3) {
    const og = el("optgroup"); og.label = fam;
    for (const p of PPROD.filter((x) => x.kind === "product" && x.family === fam)) og.append(Object.assign(el("option", "", p.name), { value: p.slug }));
    sel.append(og);
  }
  ps.append(pl, sel);
  const prodNote = el("p", "pfnote", "Showing rules for every product.");
  const ql = el("label", "sr", "Search the whole policy"); ql.htmlFor = "pol-q";
  const q = el("input"); q.type = "search"; q.id = "pol-q"; q.placeholder = "Search the policy, for example liquidity"; q.autocomplete = "off";
  const qw = el("div", "pfq"); qw.append(ql, q);
  const done = el("button", "btn primary pfdone", "Done"); done.type = "button";
  bar.append(sheetH, sw, swCount, ps, prodNote, qw, done);
  const fbtn = el("button", "btn pfbtn"); fbtn.type = "button"; fbtn.setAttribute("aria-haspopup", "dialog");
  const live = el("p", "sr"); live.setAttribute("aria-live", "polite"); live.id = "pol-live";
  const nf = el("p", "pnf", "That rule or topic was not found. Here is the full list of topics."); nf.setAttribute("role", "status"); nf.hidden = !missing;

  const wrap = el("div", "pol");
  const railBox = el("div", "pol-rail"), pane = el("div", "pol-pane");
  wrap.append(railBox, pane);

  let paneH = null;
  const setAll = (v) => { st.all = v; paint(true); };
  // "Show all rules" rebuilds the pane, so focus moves to the rebuilt rules list (or the results heading).
  const onAll = () => {
    setAll(true);
    const sm = pane.querySelector(".polrules > summary");
    if (sm && !st.q) { sm.parentElement.open = true; sm.focus(); } else if (paneH) focusHeading(paneH);
  };
  function paint(user) {
    const ctx = newCiteCtx();
    sw.setAttribute("aria-checked", String(!st.all));
    swCount.textContent = `${countText(PTOP.flatMap((t) => t.rules), { all: false })} in the policy`;
    sel.value = st.product && prodOf(st.product) ? st.product : "";
    prodNote.hidden = !st.product || route.n === 7;
    fbtn.textContent = `Filters · ${st.all ? "All rules" : "Core course"}${st.q ? " · Search" : ""}`;
    const m = st.q.trim() ? polMatches(st) : null;
    wrap.dataset.view = m ? "search" : route.kind === "index" ? "index" : "topic";
    back.hidden = !m && route.kind === "index";
    railBox.replaceChildren(polRail(route.kind === "index" ? { n: 1, index: true } : route, st, m));
    let built = null;
    if (m) { pane.replaceChildren(searchPane(st, m, ctx, onAll)); live.textContent = `${nWord(m.n, "rule")} in ${nWord(m.by.size, "topic")}`; }
    else {
      live.textContent = user ? (st.all ? "Showing all rules." : "Showing rules used in the core course.") : "";
      if (route.kind === "limits") built = limitsPage(ctx);
      else if (route.kind === "product") built = productPage(prodOf(route.product), st, ctx, onAll);
      else built = topicPage(topicOf(route.n), st, route.kind === "index" ? 2 : 1, ctx, onAll);
      pane.replaceChildren(built.art);
    }
    paneH = built ? built.h : pane.querySelector("h2");
    if (user) {
      try { history.replaceState(null, "", polHref(path, st)); } catch { /* sandboxed */ }
    }
    renderMath(pane); markScrollers(doc);
  }
  sw.addEventListener("click", () => setAll(!st.all));
  sel.addEventListener("change", () => {
    st.product = sel.value;
    if (st.product && route.n === 7) { location.hash = polHref("policy/7/" + st.product, { all: st.all }); return; }
    paint(true);
  });
  let tmr = null;
  q.value = st.q;
  q.addEventListener("input", () => { clearTimeout(tmr); tmr = setTimeout(() => { st.q = q.value.trim(); paint(true); }, 150); });
  const closeSheet = () => { bar.classList.remove("sheet"); bar.removeAttribute("role"); bar.removeAttribute("aria-modal"); bar.removeAttribute("aria-labelledby"); bar.hidden = false; };
  fbtn.addEventListener("click", () => {
    bar.classList.add("sheet"); bar.setAttribute("role", "dialog"); bar.setAttribute("aria-modal", "true"); bar.setAttribute("aria-labelledby", sheetH.id);
    openModal(bar, { trigger: fbtn, focus: sw, onClose: closeSheet });
  });
  done.addEventListener("click", () => closeModal(bar));

  paint(false);
  const title = route.kind === "product" ? prodOf(route.product).name : route.kind === "limits" ? "All limits at a glance" : route.kind === "topic" ? topicOf(route.n).name : "Model Credit Policy";
  const crumbs = ["Reference shelf", route.kind === "index" ? "Model Credit Policy" : { text: "Model Credit Policy", href: "#policy" }];
  if (route.kind === "topic") crumbs.push(`${route.n} ${topicOf(route.n).name}`);
  else if (route.kind === "product") crumbs.push({ text: `7 ${P7.name}`, href: "#policy/7" }, prodOf(route.product).name);
  else if (route.kind === "limits") crumbs.push("All limits at a glance");
  const limitsLink = el("p", "fine plimlink"); const ll = el("a", "", "All limits at a glance (print view)"); ll.href = "#policy/limits"; limitsLink.append(ll);
  const tools = el("div", "ptools"); tools.append(back, fbtn);
  mountShelf(doc, [...(head ? [head] : []), tools, bar, live, nf, wrap, limitsLink, authorView("policy", "research, decision log and change notes")], title, crumbs, false, null);
  doc.classList.add("polpage");
  if (route.anchor) {
    const t = $("rule-" + route.anchor);
    if (t) {
      t.hidden = false; for (let s = t.closest("[hidden]"); s && doc.contains(s); s = s.closest("[hidden]")) s.hidden = false;
      for (let d = t.closest("details"); d; d = d.parentElement && d.parentElement.closest("details")) d.open = true;
      t.classList.add("hit"); t.tabIndex = -1; t.scrollIntoView({ block: "center" }); t.focus({ preventScroll: true });
      return;
    }
  }
  scrollTo(0, 0);
  if (focus) focusHeading(route.kind === "index" ? h1 : paneH);
}
