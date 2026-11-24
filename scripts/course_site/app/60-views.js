/* ---------- running-deal illustrations (inline SVG, drawn in the brand line style) ---------- */
const ART = {
  "RD-RES-01": `<svg viewBox="0 0 240 132" role="img" aria-label="Line drawing of a single-family house with a maple tree"><path class="thin" d="M12 112h216M12 116h216"/><path class="ln" d="M46 112V84"/><path class="soft" d="M46 34c16 0 27 12 27 27S62 88 46 88 19 76 19 61s11-27 27-27z"/><path class="ln" d="M46 70l-9-9M46 62l8-8"/><path class="body" d="M92 112V70l40-30 40 30v42z"/><path class="ln" d="M84 74l48-36 48 36"/><path class="body" d="M152 46V34h12v21"/><path class="body" d="M172 112V86h34v26z"/><path class="ln" d="M168 86h42"/><path class="soft" d="M178 94h22v18h-22z"/><path class="ln" d="M178 100h22M178 106h22"/><path class="acc" d="M124 88h16v24h-16z"/><path class="ln" d="M136 101h.5"/><path class="soft" d="M100 82h14v14h-14zM150 82h14v14h-14z"/><path class="ln" d="M107 82v14M100 89h14M157 82v14M150 89h14"/><circle class="soft" cx="132" cy="60" r="5"/><path class="ln" d="M118 112h28"/></svg>`,
  "RD-MF-01": `<svg viewBox="0 0 240 132" role="img" aria-label="Line drawing of a three-story garden apartment building with a cedar tree"><path class="thin" d="M12 112h216M12 116h216"/><path class="body" d="M40 112V36h132v76z"/><path class="ln" d="M34 36h144M40 61h132M40 86h132"/><path class="body" d="M92 112V28h28v84z"/><path class="ln" d="M88 28h36"/><path class="acc" d="M99 94h14v18H99z"/><path class="ln" d="M94 90h24"/><path class="soft" d="M100 38h12v12h-12zM100 64h12v12h-12z"/><g class="soft"><path d="M48 43h14v12H48zM70 43h14v12H70zM128 43h14v12h-14zM150 43h14v12h-14zM48 68h14v12H48zM70 68h14v12H70zM128 68h14v12h-14zM150 68h14v12h-14zM48 93h14v12H48zM70 93h14v12H70zM128 93h14v12h-14zM150 93h14v12h-14z"/></g><path class="ln" d="M46 57h18M68 57h18M126 57h18M148 57h18M46 82h18M68 82h18M126 82h18M148 82h18"/><path class="ln" d="M202 112V98"/><path class="soft" d="M202 30l-13 26h7l-10 22h8l-9 20h34l-9-20h8l-10-22h7z"/></svg>`,
  "RD-COM-01": `<svg viewBox="0 0 240 132" role="img" aria-label="Line drawing of a strip retail center with four storefronts and a birch tree"><path class="thin" d="M12 112h216M12 116h216"/><path class="ln" d="M28 112V62"/><path class="ln" d="M26 96h4M26 84h4M26 72h4"/><path class="soft" d="M28 26c9 0 15 8 15 19s-6 19-15 19-15-8-15-19 6-19 15-19z"/><path class="body" d="M52 112V58h168v54z"/><path class="body" d="M112 58V40h48v18z"/><path class="ln" d="M120 49h32"/><path class="ln" d="M48 58h176"/><path class="acc" d="M56 66h36l-3 10H59zM98 66h36l-3 10h-30zM140 66h36l-3 10h-30z"/><path class="dash" d="M182 66h32v46h-32z"/><path class="soft" d="M59 82h18v30H59zM101 82h18v30h-18zM143 82h18v30h-18z"/><path class="body" d="M80 86h10v26H80zM122 86h10v26h-10zM164 86h10v26h-10z"/><path class="ln" d="M87 100h.5M129 100h.5M171 100h.5"/><path class="thin" d="M70 124l6-8M100 124l6-8M130 124l6-8M160 124l6-8M190 124l6-8"/></svg>`,
};
function dealArt(id) { const d = el("div", "art"); d.innerHTML = ART[id] || ""; return d; }
const dealName = (d) => d.name || d.title.split(" ").slice(0, 2).join(" ");

/* ---------- shared view state ---------- */
let view = "home";
let flushers = [];
let routeTok = 0;
let cur = null;             // the open module's (or sample's) controller
const flushAll = () => { for (const f of flushers) { try { f(); } catch { /* ignore */ } } };
function setTitle(t) { document.title = t ? `${t} · BPL Academy` : "BPL Academy"; }
/** Breadcrumbs in the navy bar; null shows the main navigation instead (course home). */
function setCrumbs(parts) {
  const c = $("crumbs"); c.replaceChildren();
  const nav = $("topnav");
  nav.hidden = !!parts; c.hidden = !parts;
  if (!parts) return;
  parts.forEach((p, i) => {
    if (i) c.append(el("span", "sep", "›"));
    if (typeof p === "object" && p.href) { const a = el("a", "", p.text); a.href = p.href; c.append(a); }
    else c.append(i === parts.length - 1 ? el("b", "", p) : el("span", "", p));
  });
}
function focusHeading(h) { if (!h) return; if (!h.hasAttribute("tabindex")) h.tabIndex = -1; h.focus({ preventScroll: true }); }
const catOf = (m) => CATS.find((c) => c.modules.includes(m.key));
const shortTitle = (m) => m.title.split(":")[0];
const modNo = (m) => m.code.slice(1);

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
/** The progress strip under the navy bar: context, bar, percent. The training notice sits in it on every page. */
function setStrip(ctx, pct, text) {
  $("strip-ctx").textContent = ctx;
  const bar = $("strip-bar"); bar.hidden = pct == null; if (pct != null) bar.firstElementChild.style.width = Math.max(0, Math.min(100, pct)) + "%";
  $("strip-pct").textContent = text || "";
}
/** Every stop of a module from its Markdown: overview, each Learn part, then the other steps (rail, home, sample). */
function moduleStops(m) {
  const out = [{ id: "overview", key: "overview", label: STOP_LABEL.overview }]; let step = "overview", code = false, n = 0;
  for (const line of m.md.split("\n")) {
    if (/^```/.test(line)) { code = !code; continue; }
    if (code) continue;
    const h = /^(#{2,3})\s+(.*)$/.exec(line); if (!h) continue;
    const t = learnerString(plainText(h[2]));
    if (h[1].length === 2) {
      const s = STEPS.find((x) => x.re.test(t));
      if (!s || s.id === step) continue;
      if (step === "learn" && (m.exercises || []).length) out.push({ id: "exercises", key: "exercises", label: STOP_LABEL.exercises });
      step = s.id;
      if (s.id !== "learn" && !out.some((o) => o.id === s.id)) out.push({ id: s.id, key: s.id, label: STOP_LABEL[s.id] });
    } else if (step === "learn") { out.push({ id: "learn", page: n, key: "learn:" + n, label: `${modNo(m)}.${n + 1} ${t}` }); n++; }
  }
  return out;
}
const STOP_LABEL = { overview: "Module overview", exercises: "Exercises", practice: "Practice", quiz: "Module quiz", ojt: "Workplace task", jobaid: "Quick reference", wrapup: "Review and next steps" };
const doneStops = (key) => new Set((pos[key] && pos[key].done) || []);
function modulePct(m) {
  const stops = moduleStops(m), d = doneStops(m.key);
  if ((state.status[m.key] || "") === "done") return 100;
  return stops.length ? Math.round(stops.filter((s) => d.has(s.key)).length / stops.length * 100) : 0;
}
function paintProgress() {
  const p = progress();
  if (view !== "module" && view !== "sample") setStrip(view === "home" ? `Core course · ${MODS.length} modules` : "Core course", p.pct, `${p.done} of ${MODS.length} modules complete`);
  for (const m of MODS) {
    const s = state.status[m.key] || "not-started";
    const a = document.querySelector(`#nav-modules a[data-key="${m.key}"]`);
    if (a && a.dataset.s !== s) { a.dataset.s = s; a.querySelector(".glyph-w").replaceWith(glyph(s)); a.querySelector(".sr").textContent = `, ${STATUS_TEXT[s].toLowerCase()}`; }
  }
  const pill = $("pill");
  if (pill) { const s = state.status[pill.dataset.for] || "not-started"; pill.dataset.s = s; pill.textContent = STATUS_TEXT[s]; }
  const btn = $("donebtn");
  if (btn) { const d = (state.status[btn.dataset.for] || "") === "done"; btn.textContent = d ? "Module done. Undo" : "Mark module done"; btn.classList.toggle("primary", !d); }
  if (cur && cur.paintStatus) cur.paintStatus();
}

/* ---------- course menu (a drawer at every width) and the main navigation ---------- */
const REF_ICON = { policy: "policy", formulas: "fx", deals: "deal", "state-law": "map", glossary: "book" };
function buildNav() {
  const home = el("li"); const ha = el("a"); ha.href = "#home"; ha.dataset.key = "home"; ha.append(icon("home"), "Course home"); home.append(ha); $("nav-home").append(home);
  for (const [t, h] of [["Home", "#home"], ["Modules", "#home/path"], ["Reference shelf", "#home/shelf"]]) { const a = el("a", "", t); a.href = h; $("topnav").append(a); }
  const ol = $("nav-modules");
  const groups = CATS.length ? CATS : [{ title: "", modules: MODS.map((m) => m.key) }];
  groups.forEach((c, ci) => {
    const cli = el("li", "navcat");
    const lab = el("span", "catlabel", c.title); lab.id = "navcat-" + ci;
    const col = el("ol"); col.setAttribute("aria-labelledby", lab.id);
    for (const key of c.modules) {
      const m = MODS.find((x) => x.key === key); if (!m) continue;
      const li = el("li"); const a = el("a"); a.href = "#" + m.key; a.dataset.key = m.key; a.dataset.s = "not-started";
      const t = el("span", "t", shortTitle(m)); t.title = m.title;
      a.append(el("span", "code", modNo(m)), t, glyph("not-started"), el("span", "sr", ", not started"));
      li.append(a); col.append(li);
    }
    if (c.title) cli.append(lab);
    cli.append(col); ol.append(cli);
  });
  const ul = $("nav-refs");
  for (const r of [...REFS, { key: "glossary", title: "Glossary" }]) {
    const li = el("li"); const a = el("a"); a.href = "#" + r.key; a.dataset.key = r.key; a.append(icon(REF_ICON[r.key] || "book"), SHELF_TITLE[r.key] || r.title); li.append(a); ul.append(li);
  }
}
function paintNavCurrent(key) {
  for (const a of document.querySelectorAll("#nav-home a, #nav-modules a[data-key], #nav-refs a")) {
    if (a.dataset.key === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  }
  for (const a of document.querySelectorAll("#topnav a")) { if (a.getAttribute("href") === "#home" && key === "home") a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); }
}
const railSmall = () => true;
function openRail() {
  const r = $("rail"); r.classList.add("open"); $("menu").setAttribute("aria-expanded", "true");
  r.setAttribute("role", "dialog"); r.setAttribute("aria-modal", "true"); r.setAttribute("aria-labelledby", "rail-title");
  openModal(r, { trigger: $("menu"), focus: r.querySelector("#nav-module:not([hidden]) [aria-current]") || r.querySelector("[aria-current]") || $("rail-close"), onClose: () => { r.hidden = false; r.classList.remove("open"); r.removeAttribute("role"); r.removeAttribute("aria-modal"); r.removeAttribute("aria-labelledby"); $("menu").setAttribute("aria-expanded", "false"); } });
}
function closeRail(restore) { if ($("rail").classList.contains("open")) closeModal($("rail"), restore); }

/* ---------- the lesson rail: module contents, course files, policy used ---------- */
const STATE_ICON = { done: ["tick", "Done"], current: ["chev", "Current"], todo: ["ring", "Not started"] };
function stopHref(m, s) { return `#${m.key}/${s.id}${s.id === "learn" ? "/" + (s.page + 1) : ""}`; }
/** The module's contents as a list of links, with a status word for each (visible on phones, read aloud everywhere). */
function contentsList(m, stops, curKey, extra) {
  const ol = el("ol", "mcontents");
  const d = doneStops(m.key);
  const all = extra ? [...stops.slice(0, extra.at), extra.stop, ...stops.slice(extra.at)] : stops;
  for (const s of all) {
    const li = el("li"); const a = el("a"); a.href = s.href || stopHref(m, s); a.dataset.stop = s.key;
    const k = s.key === curKey ? "current" : d.has(s.key) ? "done" : "todo";
    li.dataset.s = k;
    if (k === "current") a.setAttribute("aria-current", "step");
    const ic = k === "current" ? icon("chev", "st") : glyph(k === "done" ? "done" : "not-started");
    a.append(ic, el("span", "t", s.label), el("span", "stx", STATE_ICON[k][1]));
    li.append(a); ol.append(li);
  }
  return ol;
}
function dealsFor(m) {
  const ids = [...new Set(m.md.match(/\bRD-(?:RES|MF|COM)-\d{2}\b/g) || [])];
  return ids.map((id) => DEALS.find((d) => d.id === id)).filter(Boolean);
}
function courseFiles(m, steps) {
  const ul = el("ul", "files");
  const add = (href, text, ic) => { const li = el("li"); const a = el("a"); a.href = href; a.append(icon(ic || "file"), el("span", "", text)); li.append(a); ul.append(li); };
  if (!steps || steps.includes("jobaid")) add(`#${m.key}/jobaid`, `Module ${modNo(m)} desk card (printable)`, "print");
  for (const d of dealsFor(m).slice(0, 2)) add(`#deals/${d.slug}`, `${dealName(d)} deal file`, "deal");
  add("#formulas", "Formula sheet", "calc");
  return ul;
}
function policyUsed(m) {
  const counts = new Map();
  for (const id of m.md.match(/\b(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\d{2}\b/g) || []) { const r = RULES.get(id); if (r && r.kind === "rule" && r.sectionName) counts.set(r.sectionName, (counts.get(r.sectionName) || 0) + 1); }
  return [...counts].sort((a, b) => b[1] - a[1]).slice(0, 3).map((x) => x[0]);
}
function railCard(title, ...nodes) { const s = el("section", "card rcardx"); const h = el("h2", "", title); s.append(h, ...nodes.filter(Boolean)); return s; }
function policyCard(m, text) {
  const names = policyUsed(m);
  if (!text && !names.length) return null;
  const s = el("section", "card rcardx pside");
  s.append(el("h2", "", text ? "From the credit policy" : "Policy used in this module"));
  if (text) { const p = el("p"); p.append(mdInline(text)); s.append(p); }
  else { s.append(el("p", "fine", "Model Credit Policy sections:")); const ul = el("ul", "plain-l"); for (const n of names) ul.append(el("li", "", n)); s.append(ul); }
  return s;
}
/** The bottom bar's Next names the page it opens ("Next: Vacancy and credit loss"); CSS cuts it to one line. */
function nextLink(href, label) {
  const short = String(label || "").replace(/^\d+\.\d+\s+/, "");
  const a = el("a", "btn primary mb-next"); a.href = href; a.setAttribute("aria-label", `Next: ${short}`);
  a.append(el("span", "mb-nx", `Next: ${short}`), el("span", "mb-ch", "›"));
  return a;
}
/** Phone: a sticky bottom bar with module progress and the next step. */
function bottomBar(m, pct, next) {
  const nav = el("nav", "mbar"); nav.setAttribute("aria-label", "Module progress");
  const l = el("span", "mb-l"); const t = el("span", "mb-t"); t.append(el("strong", "", `Module ${modNo(m)}`), ` · ${pct}%`, el("span", "sr", " complete"));
  const bar = el("span", "pbar"); const i = el("i"); i.style.width = pct + "%"; bar.append(i); bar.setAttribute("aria-hidden", "true");
  l.append(t, bar); nav.append(l);
  if (next) nav.append(next);
  return nav;
}
/** The phone drawer gets the same module contents. */
function setDrawerModule(m, list) {
  const box = $("nav-module");
  if (!m) { box.hidden = true; box.replaceChildren(); return; }
  box.hidden = false;
  box.replaceChildren(el("h2", "navlabel", `Module ${modNo(m)} contents`), list);
}

/* ---------- home ---------- */
function resumeTarget() {
  const open = MODS.filter((m) => (state.status[m.key] || "") !== "done");
  if (!open.length) return null;
  const recent = open.filter((m) => pos[m.key] && pos[m.key].t).sort((a, b) => pos[b.key].t - pos[a.key].t)[0];
  const m = recent || open[0], p = pos[m.key] || {};
  const started = !!recent || (state.status[m.key] || "") === "in-progress";
  let where = "", href = "#" + m.key, title = "";
  if (recent && p.step) { where = p.label || ""; title = p.title || ""; href += "/" + p.step + (p.step === "learn" ? "/" + ((p.page || 0) + 1) : ""); }
  return { m, started, where, href, title, page: p.step === "learn" ? (p.page || 0) + 1 : 0 };
}
function bars2(label, pct, kind, empty) {
  const r = el("div", "ev-bar");
  const trk = el("span", "ev-trk" + (pct == null ? " none" : "")); trk.setAttribute("aria-hidden", "true");
  if (pct != null) { const i = el("i", kind); i.style.width = pct + "%"; trk.append(i); }
  r.append(trk, el("span", "ev-v" + (pct == null ? " muted" : ""), pct == null ? empty : `${label} ${pct}%`));
  return r;
}
async function paintEvidence(box, tok) {
  const all = await Promise.all(MODS.map((m) => store.loadQuiz(m.key).then((q) => [m, q]).catch(() => [m, null])));
  if (tok !== routeTok) return;
  const latest = {}, pre = {};
  let anyQuiz = false, anyPre = false;
  for (const [m, q] of all) {
    if (!q) continue;
    for (const s of Object.values(q.submitted || {})) if (s && s.at && s.total && s.marked === s.total) { const c = catOf(m); if (!c) continue; anyQuiz = true; if (!latest[c.title] || s.at > latest[c.title].at) latest[c.title] = { ...s, code: m.code }; }
    if (q.pretest && q.pretest.total) { const c = catOf(m); if (c) { anyPre = true; pre[c.title] = q.pretest; } }
  }
  // Pre-test bars and legend appear only once a pre-test result exists.
  const leg = box.querySelector(".ev-leg"); leg.hidden = !(anyQuiz || anyPre); leg.querySelector(".pre").hidden = !anyPre;
  box.querySelector(".ev-intro").textContent = anyPre ? "Your pre-test score against your latest module quiz score, by category." : "Your latest module quiz score, by category.";
  // Nothing to show until the first module quiz is scored: the block stays out of the page.
  box.hidden = !(anyQuiz || anyPre);
  if (box.hidden) return;
  const rows = el("div", "ev-rows");
  for (const c of CATS) {
    const row = el("div", "ev-row");
    const L = latest[c.title], P = pre[c.title];
    const v = el("div", "ev-v2");
    if (anyPre) v.append(bars2("Pre-test", P ? Math.round(P.got / P.total * 100) : null, "pre", "Not taken"));
    v.append(bars2("Latest", L ? Math.round(L.got / L.total * 100) : null, "lat", "No quiz yet"));
    row.append(el("span", "ev-c", c.title), v); rows.append(row);
  }
  box.querySelector(".ev-body").replaceChildren(rows, el("p", "fine", "Your own results, saved where your progress is saved. The latest quiz is the most recent form you submitted in each category."));
}
function showHome(focus, anchor) {
  view = "home"; const tok = ++routeTok; cur = null;
  setDrawerModule(null);
  const doc = $("doc"); doc.className = "doc home";
  const grid = el("div", "lgrid"); const main = el("div", "lmain"); const rail = el("aside", "lrail"); rail.setAttribute("aria-label", "Course facts and reference shelf");
  // continue card
  const r = resumeTarget();
  const cont = el("section", "card cont"); const tx = el("div", "tx");
  const h1 = el("h1", "", ""); h1.id = "cont-h"; h1.tabIndex = -1; cont.setAttribute("aria-labelledby", h1.id);
  if (r) {
    const mp = modulePct(r.m);
    h1.textContent = r.page && r.title ? `Lesson ${modNo(r.m)}.${r.page}: ${r.title}` : `Module ${modNo(r.m)}: ${r.m.title}`;
    const a = el("a", "btn primary", r.started ? "Resume lesson ›" : "Start module ›"); a.href = r.href;
    // The title names the module or lesson; the line under it adds only what the title does not say.
    const sub = [r.page ? `Module ${modNo(r.m)} · ${shortTitle(r.m)}` : "", loadText(r.m), `${mp}% complete`].filter(Boolean).join(" · ");
    tx.append(el("p", "eyebrow", r.started ? "Continue where you left off" : "Start here"), h1, el("p", "", sub));
    cont.append(tx, a);
  } else { h1.textContent = "Every module is marked done."; tx.append(el("p", "eyebrow", "Course complete"), h1, el("p", "", "Review any module from the learning path below.")); cont.append(tx); }
  // evidence
  const ev = el("section", "card evid"); ev.setAttribute("aria-labelledby", "ev-h");
  const eh = el("div", "ev-head"); const eh2 = el("h2", "", "Your evidence"); eh2.id = "ev-h"; eh.append(eh2);
  const leg = el("div", "ev-leg"); leg.setAttribute("aria-hidden", "true"); leg.append(el("span", "lg pre", "Pre-test"), el("span", "lg lat", "Latest quiz"));
  leg.hidden = true;
  ev.append(eh, el("p", "fine ev-intro", "Your latest module quiz score, by category."), leg, Object.assign(el("div", "ev-body"), { textContent: "Loading your results…" }));
  ev.hidden = true;
  paintEvidence(ev, tok);
  // learning path
  const path = el("section", "card path"); path.id = "path"; path.setAttribute("aria-labelledby", "path-h");
  const ph = el("h2", "", "Learning path"); ph.id = "path-h";
  path.append(ph, el("p", "fine", "Five categories, three modules each. Work them in order: each builds on the last. A module shows its CPE credits once they are measured."));
  const cats = CATS.length ? CATS : [{ title: "", blurb: "", modules: MODS.map((m) => m.key) }];
  cats.forEach((c, ci) => {
    const box = el("section", "catblock");
    const h3 = el("h3", "", c.title); h3.id = "cat-" + ci;
    box.append(h3, el("p", "fine", c.blurb));
    const list = el("ol", "plist"); list.setAttribute("aria-labelledby", h3.id);
    for (const key of c.modules) {
      const m = MODS.find((x) => x.key === key); if (!m) continue;
      const li = el("li"); const s = state.status[m.key] || "not-started";
      if (r && r.m === m) li.setAttribute("aria-current", "step");
      const a = el("a", "pt", m.title); a.href = "#" + m.key;
      const st = el("span", "pst"); st.dataset.s = s; st.append(icon(s === "done" ? "tick" : s === "in-progress" ? "chev" : "ring"), STATUS_TEXT[s] === "Done" ? "Complete" : STATUS_TEXT[s]);
      li.append(el("span", "pc", modNo(m)), a, el("span", "ph", m.credits != null ? `${num1(m.credits)} CPE` : ""), st); list.append(li);
    }
    path.append(box); box.append(list);
  });
  main.append(cont, ev, path);
  // rail: outcomes, shelf, deals, how it works
  const outs = (DATA && DATA.outcomes) || [];
  if (outs.length) { const oc = el("section", "card rcardx outcomes"); oc.append(el("h2", "", "Course outcomes"), el("p", "fine", "When you finish the course, you can:")); const ol = el("ol", "nums"); outs.forEach((o, i) => { const li = el("li"); li.append(el("span", "n", String(i + 1).padStart(2, "0")), el("span", "", o)); ol.append(li); }); oc.append(ol); rail.append(oc); }
  const shelf = el("section", "card rcardx"); shelf.id = "shelf"; shelf.append(el("h2", "", "Reference shelf"));
  const sl = el("ul", "files");
  for (const r2 of [...REFS, { key: "glossary", title: "Glossary" }]) { const li = el("li"); const a = el("a"); a.href = "#" + r2.key; a.append(icon(REF_ICON[r2.key] || "book"), el("span", "", SHELF_TITLE[r2.key] || r2.title)); li.append(a); sl.append(li); }
  shelf.append(sl, el("p", "fine", "Look things up while you work. Nothing here is graded."));
  const ds = el("section", "card rcardx"); ds.append(el("h2", "", "Running deals"), el("p", "fine", "Three fictional training deals carry through the course."));
  const dg = el("div", "deals");
  for (const d of DEALS) { const a = el("a", "deal"); a.href = "#deals/" + d.slug; const t = el("span", "tx"); t.append(el("b", "", dealName(d)), el("span", "tags", [d.family, d.state].filter(Boolean).join(" · "))); a.append(dealArt(d.id), t); dg.append(a); }
  ds.append(dg);
  const how = el("section", "card rcardx howto");
  how.innerHTML = `<h2>How this works</h2><ul>
<li>Each module has an overview, short lessons, exercises, practice, a graded quiz, a workplace task and a desk card.</li>
<li>Lessons ask you to predict, then try, then read why. Practice checks allow one retry.</li>
<li>The module quiz is graded. It gives no feedback until you submit, then shows a full review.</li>
<li>Small numbers in the text cite a policy rule or a formula. Tap one to read it.</li>
<li>Your answers and progress save as you go. The course menu says where.</li></ul>`;
  rail.append(shelf, ds, how);
  grid.append(main, rail);
  doc.replaceChildren(grid);
  setTitle(""); setCrumbs(null); paintProgress();
  const target = anchor === "path" ? path : anchor === "shelf" ? shelf : null;
  if (target) { target.scrollIntoView({ block: "start" }); focusHeading(target.querySelector("h2")); }
  else if (focus) focusHeading(h1);
}

/* ---------- reference pages (built in 55-shelf.js) ---------- */
const SHELF_TITLE = { policy: "Model Credit Policy", formulas: "Formula Library", deals: "Running deals", "state-law": "State law guide" };
function showRef(r, a, b, focus) {
  if (r.key === "formulas") { const f = a && (FSLUG.get(a) || FORMULAS.get(a)); if (f) showFormula(f, focus); else showFormulaCatalog(focus); }
  else if (r.key === "policy") showPolicy(a, focus);
  else if (r.key === "state-law") showStateLaw(a, b, focus);
  else if (r.key === "deals") showDeals(a, focus);
}

/* ---------- glossary ---------- */
function inlineMd(md) { const d = el("div"); d.append(...render(md, { idPrefix: "g-" }).childNodes); linkIds(d, "quiet"); return d; }
function showGlossary(anchor, focus) {
  view = "glossary"; routeTok++; cur = null;
  const doc = $("doc"); doc.className = "doc refpage";
  const head = el("header", "hero"); const h1 = el("h1", "display", "Glossary");
  head.append(el("p", "eyebrow", "Reference"), h1, el("p", "lede", `${GLOSSARY.length} terms used across the course. Worked-example numbers are illustrative and fictional; a limit shown in an example is for arithmetic only, never policy.`));
  if (REVIEWED.glossary) { const meta = el("ul", "meta"); meta.append(el("li", "", `Last reviewed ${REVIEWED.glossary}`), el("li", "", "Model policy for training")); head.append(meta); }
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
  setTitle("Glossary"); setCrumbs(["Reference shelf", "Glossary"]);
  const t = anchor ? $("term-" + anchor) : null;
  if (t) { t.classList.add("hit"); t.tabIndex = -1; t.scrollIntoView({ block: "center" }); t.focus({ preventScroll: true }); }
  else if (focus) focusHeading(h1);
}

/* ---------- search (client-side, built on first use; quiz and answer keys are left out) ---------- */
const STEPS = [
  { id: "overview", label: "Overview", re: /^(hook|objectives?|why this matters|what you will be able)/i },
  { id: "learn", label: "Learn", re: /^teach/i },
  { id: "practice", label: "Practice", re: /^practice/i },
  { id: "quiz", label: "Quiz", re: /^quiz/i },
  { id: "ojt", label: "Workplace task", re: /^(ojt|workplace task)/i },
  { id: "jobaid", label: "Quick reference", re: /^(job aid|quick reference)/i },
  { id: "wrapup", label: "Review", re: /^(wrap|review and next)/i },
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
  for (const r of [...RULES.values(), ...FORMULAS.values()]) if (r.kind !== "decision") idx.push({ type: "ref", id: r.id, title: r.name, text: r.kind === "formula" ? r.text : plainText(r.rule).slice(0, 400), low: (r.id + " " + r.name + " " + plainText(r.rule || r.purpose || r.text || "")).toLowerCase() });
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
  if (!toks.length) { res.append(el("p", "empty", "Type two or more letters. Try “per diem”, “DSCR” or “title insurance”.")); foot.textContent = ""; return; }
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
      if (type === "ref" && FORMULAS.has(e.id)) { row = el("a"); row.href = formulaHref(e.id); row.addEventListener("click", () => closeModal($("search"), false)); }
      else if (type === "ref") { row = el("button", "hitrow"); row.type = "button"; row.addEventListener("click", () => { closeModal($("search"), false); openDrawer(e.id, $("search-open")); }); }
      else { row = el("a"); row.href = type === "glossary" ? `#glossary/${e.n}` : `#${e.key}/${e.step}${e.step === "learn" && e.page ? "/" + e.page : ""}`; if (type === "lesson") row.dataset.anchor = e.title; row.addEventListener("click", () => { pendingAnchor = row.dataset.anchor || ""; closeModal($("search"), false); }); }
      const t = el("span", "t"); markText(t, e.title, toks);
      const audit = document.documentElement.dataset.audit === "1";
      const txt = audit ? e.text : learnerString(e.text);
      const x = el("span", "x"); const at = Math.max(0, txt.toLowerCase().indexOf(toks[0]) - 50); markText(x, (at ? "…" : "") + txt.slice(at, at + 170), toks);
      row.append(el("span", "k", type === "lesson" ? e.code : type === "glossary" ? "Term" : audit ? e.id : FORMULAS.has(e.id) ? "Formula" : "Rule"), t, x);
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
/** Reading time for a set of nodes: prose at 200 words a minute; tables and lists at 100; each figure or formula adds a minute. At least 3 minutes. */
function readMinutes(nodes) {
  let prose = 0, dense = 0, figs = 0;
  const words = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
  for (const n of nodes) {
    if (n.nodeType !== 1) { prose += words(n.textContent || ""); continue; }
    const tbl = [...n.querySelectorAll("table, ul, ol")].filter((x) => !x.parentElement.closest("table, ul, ol"));
    if (n.matches("table, ul, ol, .tbl")) { dense += words(n.textContent); continue; }
    const d = tbl.reduce((a, x) => a + words(x.textContent), 0);
    dense += d; prose += Math.max(0, words(n.textContent) - d);
    figs += n.matches(".fig, .fcard") ? 1 : n.querySelectorAll(".fig, .fcard").length;
  }
  return Math.max(3, Math.round(prose / 200 + dense / 100 + figs));
}
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
  for (const p of pages) p.min = readMinutes(p.nodes);
  return pages;
}
const OUTLINE_SEL = "h2:not(.step-eyebrow):not(.steptitle), h3:not(.pagetitle), h4, strong.lead-in, .wx > p:first-child > strong:first-child";
function outlineTargets(sec) {
  const out = []; let n = 0;
  const hasH = !!sec.querySelector("h4, h3:not(.pagetitle), h2:not(.step-eyebrow):not(.steptitle)");
  for (const t of sec.querySelectorAll(OUTLINE_SEL)) {
    if (t.closest("[hidden], details:not([open]), .qcard, .reflist, .notes, .fig, .qans, .jobcard table, .kc, .case-d, .qreview, .qtake")) continue;
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
    // One card per marker; it shows only the rules and formulas cited here for the first time.
    const nOf = Object.fromEntries((c.dataset.idn || "").split(" ").map((x) => x.split(":")));
    const ids = (c.dataset.fresh || c.dataset.refs).split(" ").filter((id) => refInfo(id));
    if (!ids.length) continue;
    const note = el("div", "mnote"); note.dataset.n = c.dataset.n; note.dataset.refs = c.dataset.refs;
    for (const id of ids) {
      const row = el("div", "row");
      const top = el("div", "hd"); top.append(el("span", "n", nOf[id] || c.dataset.n), el("span", "id", refHead(id)));
      const body = el("div", "nm", refBody(id));
      row.append(top, body);
      note.append(row);
    }
    col.append(note);
    for (const body of note.querySelectorAll(".nm")) {
      if (body.scrollHeight > body.clientHeight + 2) {
        const more = el("span", "nmore", "More");
        more.addEventListener("click", (e) => { e.stopPropagation(); const open = body.classList.toggle("open"); more.textContent = open ? "Less" : "More"; queueRelayout(); });
        body.after(more);
      }
    }
    const top = Math.max(c.getBoundingClientRect().top - base - 6, floor);
    note.style.top = top + "px";
    floor = top + note.offsetHeight + 10;
  }
  col.style.minHeight = floor + "px";
}

/* ---------- module overview ---------- */
const COMPONENT_SEL = ".qtabs, .qhowto, .qpanel, .qset, .exlist, .notes, .exsum, .jobcard, .reflist";
/** Step content -> white cards: prose runs become cards; built components stay as they are. */
function stepCards(nodes) {
  const out = []; let c = null;
  for (const n of nodes) {
    if (n.nodeType === 1 && n.matches(COMPONENT_SEL)) { c = null; out.push(n); continue; }
    if (n.nodeType === 1 && n.matches(".lcard, .kc, .desk, .exhibit, .case")) { c = null; out.push(n); continue; }
    if (!c) { c = el("section", "lcard prose"); out.push(c); }
    c.append(n);
  }
  return out;
}
function buildOverview(m, sec, stops, ctlRef) {
  const kids = [...sec.children];
  const take = (re) => { const i = kids.findIndex((n) => n.tagName === "H2" && re.test(n.textContent.trim())); if (i < 0) return null; const out = [kids[i]]; for (let j = i + 1; j < kids.length && kids[j].tagName !== "H2"; j++) out.push(kids[j]); for (const n of out) kids.splice(kids.indexOf(n), 1); return out; };
  const why = take(/why this matters|^hook/i);
  const objs = take(/what you will be able|objectives?/i);
  // "In this module": the running deals line feeds the facts panel; the formula names feed mastery.
  const inmod = kids.find((n) => n.classList && n.classList.contains("inmod"));
  let dealsLine = "";
  if (inmod) {
    const ul = inmod.nextElementSibling && inmod.nextElementSibling.tagName === "UL" ? inmod.nextElementSibling : null;
    if (ul) { for (const li of ul.children) { const cl = li.cloneNode(true); for (const x of cl.querySelectorAll(".cx-raw, .cx-m")) x.remove(); const t = cl.textContent.replace(/\s+/g, " ").trim(); if (/^Running deals:/i.test(t)) dealsLine = t.replace(/^Running deals:\s*/i, ""); } kids.splice(kids.indexOf(ul), 1); }
    kids.splice(kids.indexOf(inmod), 1);
  }
  const cat = catOf(m);
  // hero
  const hero = el("section", "card mhero");
  const htx = el("div", "htx");
  const eb = el("p", "eyebrow", [cat && cat.title, `Module ${modNo(m)}`].filter(Boolean).join(" · "));
  const pill = el("span", "pill"); pill.id = "pill"; pill.dataset.for = m.key; eb.append(" ", pill);
  const h1slot = el("div", "h1slot");
  htx.append(eb, h1slot);
  if (m.job) { const j = el("p", "job"); j.append(el("strong", "", "The job: "), m.job); htx.append(j); }
  const acts = el("div", "exrow hacts");
  const go = el("a", "btn primary"); go.id = "ov-go"; acts.append(go);
  if (stops.some((s) => s.id === "jobaid")) { const q = el("a", "btn", "Desk card (printable)"); q.href = `#${m.key}/jobaid`; acts.append(q); }
  htx.append(acts);
  const dl = el("dl", "facts");
  const fact = (k, v) => { if (!v) return; const d = el("div"); const dd = el("dd"); dd.append(v); d.append(el("dt", "", k), dd); dl.append(d); };
  if (m.credits == null) fact("Time", "Not yet measured");
  if (m.credits != null) fact("CPE credits", `${num1(m.credits)}`);
  const pre = MODS.find((x) => x.code === (m.prereq || "").trim());
  fact("Prerequisite", pre ? Object.assign(el("a", "", `Module ${modNo(pre)}: ${shortTitle(pre)}`), { href: "#" + pre.key }) : (/^none$/i.test((m.prereq || "").trim()) ? "None" : m.prereq));
  if (stops.some((s) => s.id === "quiz")) fact("Graded", `Module quiz. Pass mark ${Math.round(PASS * 100)}% with every critical item correct.`);
  if (dealsLine) fact("Running deal", dealsLine);
  if (m.reviewed) fact("Last reviewed", m.reviewed);
  hero.append(htx, dl);
  const out = [hero];
  if (objs) {
    const ol = objs.find((n) => n.tagName === "OL");
    const card = el("section", "card ywba"); card.setAttribute("aria-labelledby", "ywba-" + m.key);
    const h = el("h2", "", "You will be able to"); h.id = "ywba-" + m.key; card.append(h);
    if (ol) { const nums = el("ol", "nums"); [...ol.children].forEach((li, i) => { const x = el("li"); const t = el("span"); t.append(...li.childNodes); x.append(el("span", "n", String(i + 1).padStart(2, "0")), t); nums.append(x); }); card.append(nums); }
    else card.append(...objs.slice(1));
    out.push(card);
  }
  if (why) { const c = el("section", "lcard prose"); why[0].textContent = "Why this matters on the credit desk"; c.append(...why); out.push(c); }
  const files = el("section", "card"); files.append(el("h2", "", "Course files"), courseFiles(m, stops.map((s) => s.id)));
  out.push(files);
  const contents = el("section", "card"); contents.setAttribute("aria-labelledby", "cont-" + m.key);
  const ch = el("h2", "", "Contents"); ch.id = "cont-" + m.key;
  contents.append(ch, el("p", "fine", "Reading times come from the lesson word counts. Practice is not graded. The module quiz is."));
  const tw = el("div", "tbl ctbl"); const tbl = el("table");
  tbl.innerHTML = `<thead><tr><th scope="col">Item</th><th scope="col" class="num">Reading</th><th scope="col" class="num">Checks</th><th scope="col">Status</th></tr></thead>`;
  const tb = el("tbody"); tbl.append(tb); tw.append(tbl); contents.append(tw);
  out.push(contents);
  const rest = kids.filter((n) => n.isConnected !== false);
  if (rest.length) out.push(...stepCards(rest));
  ctlRef.paintContents = (info, doneSet, curKey) => {
    tb.replaceChildren();
    for (const s of stops) {
      if (s.id === "overview") continue;
      const i = info(s), tr = el("tr");
      if (s.key === curKey) tr.setAttribute("aria-current", "step");
      if (s.id === "quiz") tr.className = "qrow";
      const a = el("a", "", s.label); a.href = stopHref(m, s);
      const td1 = el("td"); td1.append(a); if (i.tag) td1.append(" ", el("span", "tag " + (i.tagKind || ""), i.tag));
      const k = doneSet.has(s.key) ? "done" : "todo";
      const st = el("span", "pst"); st.dataset.s = k === "done" ? "done" : "not-started"; st.append(icon(k === "done" ? "tick" : "ring"), k === "done" ? "Complete" : "Not started");
      const td4 = el("td"); td4.append(st);
      tr.append(td1, Object.assign(el("td", "num", i.min ? `${i.min} min` : "–")), Object.assign(el("td", "num", i.checks ? String(i.checks) : "–")), td4);
      tb.append(tr);
    }
  };
  return { nodes: out, h1slot, go };
}
/** Formula mastery from saved work: Not yet, Practiced (attempted in exercises or the quiz), Proficient (every quiz item on it correct). */
function masteryCard(m, qs, sets) {
  const ids = [...new Set(m.md.match(/\bF-CORE-\d{2}\b/g) || [])].filter((id) => FORMULAS.has(id)).slice(0, 8);
  if (!ids.length) return null;
  const card = el("section", "card rcardx");
  card.append(el("h2", "", "Formula mastery"), el("p", "fine", "Proficient means correct at full precision in the quiz. Practiced means you have worked it."));
  const ul = el("ul", "mastery");
  const sub = sets.filter((s) => qs.submitted && qs.submitted[s.id]).sort((a, b) => (qs.submitted[b.id].at > qs.submitted[a.id].at ? 1 : -1))[0];
  for (const id of ids) {
    const cites = (c) => (c.body.textContent + " " + c.ansBox.textContent).includes(id);
    let lvl = "not";
    const ex = (m.exercises || []).some((e) => (e.sources || []).includes(id) && ((qs.exercises || {})[e.id] || {}).done);
    const tried = sets.some((s) => s.cards.some((c) => cites(c) && qs.answers[c.id]));
    if (ex || tried) lvl = "prac";
    if (sub) { const cs = sub.cards.filter(cites); if (cs.length && cs.every((c) => qs.marks[c.id] === "got")) lvl = "prof"; }
    const li = el("li"); const name = formulaLink(id, FORMULAS.get(id).name);
    const lab = el("span", "lv lv-" + lvl); lab.append(icon(lvl === "prof" ? "tick" : lvl === "prac" ? "chev" : "ring"), lvl === "prof" ? "Proficient" : lvl === "prac" ? "Practiced" : "Not yet");
    li.append(name, lab); ul.append(li);
  }
  card.append(ul);
  return card;
}
function dealSheetCard(m) {
  const d = dealsFor(m)[0]; if (!d) return null;
  const s = el("section", "card dsheet rcardx");
  const head = el("div", "dsh-head");
  const k = el("h2", "dsh-kicker", "DEAL SHEET");
  const dl = el("dl", "dsh-facts");
  for (const [a, b] of [["Deal", dealName(d)], ["Type", d.family], ["Loan", (() => { const t = d.title.replace(dealName(d), "").trim(); return t ? t[0].toUpperCase() + t.slice(1) : ""; })()], ["State", d.state]]) if (b) { const x = el("div"); x.append(el("dt", "", a), el("dd", "", b)); dl.append(x); }
  head.append(k, dl);
  const p = el("p", "dsh-sum", d.summary);
  const a = el("a", "", "Open the deal file"); a.href = "#deals/" + d.slug;
  const pa = el("p", "dsh-sum"); pa.append(a, el("span", "muted", " · Fictional training deal"));
  s.append(head, p, pa);
  return s;
}

/* ---------- module page: overview, then lessons with the contents rail ---------- */
async function showModule(m, want, focus) {
  view = "module";
  const tok = ++routeTok;
  const doc = $("doc");
  const slow = setTimeout(() => { if (tok === routeTok) { doc.className = "doc"; doc.replaceChildren(el("p", "loading", `Loading module ${modNo(m)}…`)); } }, 300);
  const [qs, noteText] = await Promise.all([store.loadQuiz(m.key), store.loadNote(m.key)]);
  clearTimeout(slow);
  if (tok !== routeTok) return;
  const idx = MODS.indexOf(m);
  const h1 = el("h1", "mtitle", m.title); h1.tabIndex = -1;
  const sctx = Object.fromEntries(STEPS.map((x) => [x.id, newCiteCtx()]));
  const box = render(m.md);
  for (const p of [...box.querySelectorAll("p")]) {
    const t = p.textContent.replace(/\s+/g, " ").trim();
    if (t === LABEL || t === LABEL + " Fictional data only.") p.remove();
    else if (t.startsWith(LABEL) && p.firstElementChild && p.firstElementChild.textContent.trim() === LABEL) { p.firstElementChild.remove(); p.firstChild && p.firstChild.nodeType === 3 && (p.firstChild.nodeValue = p.firstChild.nodeValue.replace(/^\s+/, "")); }
  }
  prepareDiagrams(box, modNo(m));
  const steps = splitSteps(box);
  const saver = makeSaver(qs, m.key);
  if ((m.exercises || []).length) {
    const at = steps.findIndex((x) => x.id === "learn");
    steps.splice(at + 1, 0, { id: "exercises", label: "Exercises", sec: buildExercises(m, qs, saver) });
  }
  let quizSets = [];
  for (const s of steps) {
    if (s.id === "exercises") { const h = s.sec.querySelector("h2.steptitle"); if (h) h.tabIndex = -1; continue; }
    if (s.id === "learn") { s.pages = splitPages(s.sec); s.sec.replaceChildren(); continue; }
    const first = s.sec.firstElementChild;
    if (first && first.tagName === "H2" && s.id !== "overview") { first.classList.add("steptitle"); first.tabIndex = -1; }
    pageCtx = sctx[s.id] || newCiteCtx();
    if (s.id === "quiz") quizSets = buildQuiz(s.sec, qs, saver, m);
    if (s.id === "practice") buildPractice(s.sec, qs, saver);
    frameBlocks(s.sec); hideAnswers(s.sec);
    if (s.id === "jobaid") deskCard(m, s);
    const listRefs = s.id === "overview" || s.id === "ojt" || s.id === "wrapup";
    linkIds(s.sec, "cite", pageCtx);
    if (listRefs) { const rl = refList(s.sec, "h3"); if (rl) s.sec.append(rl); }
    pageCtx = null;
  }
  // notes live in the workplace task step (or the last step)
  const notes = el("section", "notes");
  notes.innerHTML = `<label for="note-${m.key}">Your notes and workplace-task write-up</label><p>Saved as you type. Use fictional data only.</p><textarea id="note-${m.key}"></textarea><span class="saved" role="status"></span>`;
  (steps.find((s) => s.id === "ojt") || steps[steps.length - 1]).sec.append(notes);
  const ta = notes.querySelector("textarea"), saved = notes.querySelector(".saved");
  ta.value = noteText; ta.placeholder = "Your answers, calculations and workplace-task notes for module " + modNo(m);
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
  // stops: one per step, one per Learn part
  const stops = [];
  steps.forEach((s, si) => {
    if (s.pages) s.pages.forEach((p, pi) => stops.push({ id: "learn", si, pi, page: pi, key: "learn:" + pi, label: `${modNo(m)}.${pi + 1} ${p.title.replace(/^\d+\.\d+\s+/, "")}`, title: p.title, min: p.min }));
    else stops.push({ id: s.id, si, pi: 0, key: s.id, label: STOP_LABEL[s.id] || s.label, min: s.id === "exercises" || s.id === "quiz" ? 0 : readMinutes([s.sec]) });
  });
  // the overview layout (built once; statuses repaint)
  const ovCtl = {};
  const ovStep = steps.find((s) => s.id === "overview");
  let ov = null;
  if (ovStep) { ov = buildOverview(m, ovStep.sec, stops, ovCtl); ovStep.sec.replaceChildren(...ov.nodes); ovStep.sec.classList.add("ovw"); }
  // other steps: a title card and white cards
  for (const s of steps) {
    if (s.pages || s.id === "overview") continue;
    const head = s.sec.querySelector("h2.steptitle") || s.sec.querySelector("h2");
    const rest = [...s.sec.childNodes].filter((n) => n !== head && !(n.nodeType === 3 && !n.textContent.trim()));
    const tcard = el("div", "lcard ltitle");
    tcard.append(el("div", "h1slot"), Object.assign(el("p", "eyebrow lt-eb"), { textContent: "" }));
    if (head) tcard.append(head);
    if (s.id === "quiz" && head) head.textContent = `Module ${modNo(m)} quiz`;
    s.tcard = tcard;
    s.sec.replaceChildren(tcard, ...(s.id === "jobaid" ? rest : stepCards(rest)));
  }
  const end = el("div", "endcap card");
  const row = el("div", "row");
  const done = el("button", "btn", "Mark module done"); done.type = "button"; done.id = "donebtn"; done.dataset.for = m.key;
  done.addEventListener("click", () => setStatus(m.key, (state.status[m.key] || "") === "done" ? "in-progress" : "done"));
  row.append(done, el("span", "", "Finished the quiz, the workplace task and the self-check? Mark this module done."));
  const mn = el("nav", "modnav"); mn.setAttribute("aria-label", "Other modules");
  const pv = MODS[idx - 1], nx = MODS[idx + 1];
  if (pv) { const a = el("a", "prev"); a.href = "#" + pv.key; a.append(el("span", "dir", "Previous module"), el("b", "", `Module ${modNo(pv)}: ${pv.title}`)); mn.append(a); }
  if (nx) { const a = el("a", "next"); a.href = "#" + nx.key; a.append(el("span", "dir", "Next module"), el("b", "", `Module ${modNo(nx)}: ${nx.title}`), el("small", "", prereqText(nx.prereq))); mn.append(a); }
  else mn.append(el("p", "", "This is the last module."));
  end.append(row, mn);

  // layout: main column and the rail
  const grid = el("div", "lgrid"), mainCol = el("div", "lmain"), rail = el("aside", "lrail");
  rail.setAttribute("aria-label", `Module ${modNo(m)} contents and course files`);
  const stage = el("div", "stage");
  const outline = el("nav", "outline card"); outline.setAttribute("aria-label", "On this page");
  const tocM = el("details", "toc-m");
  const pager = el("nav", "pager"); pager.setAttribute("aria-label", "Previous and next");
  mainCol.append(stage); grid.append(mainCol, rail);
  const reader = grid;      // margin notes are off in this layout; layoutNotes finds no column and returns
  const seen = new Set((pos[m.key] && pos[m.key].seen) || []);
  const doneSet = () => doneStops(m.key);
  const contCard = el("section", "card rcardx mcont"); const contH = el("h2", "", `Module ${modNo(m)} contents`); contCard.append(contH);
  const filesCard = railCard("Course files", courseFiles(m, steps.map((s) => s.id)));
  const polCard = policyCard(m);
  let mastery = null, dealCard = dealSheetCard(m);
  let bar = null;
  const stopInfo = (s) => {
    if (s.id === "exercises") return { checks: (m.exercises || []).length, tag: "Practice: not graded", tagKind: "warn" };
    if (s.id === "practice") { const n = steps.find((x) => x.id === "practice"); return { min: s.min, checks: n ? n.sec.querySelectorAll(".qcard").length : 0, tag: "Practice: not graded", tagKind: "warn" }; }
    if (s.id === "quiz") { const n = quizSets[0] ? quizSets[0].cards.length : 0; return { checks: n, tag: `${n} questions · graded` }; }
    return { min: s.min, checks: 0 };
  };
  function paintStatus() {
    if (!cur || cur.key !== m.key) return;
    const st = stops[cur.stopI] || stops[0];
    const d = doneSet();
    const pct = (state.status[m.key] || "") === "done" ? 100 : Math.round(stops.filter((x) => d.has(x.key)).length / stops.length * 100);
    setStrip(`Module ${modNo(m)} · ${shortTitle(m)}`, pct, `${pct}% complete`);
    const list = contentsList(m, stops, st.key);
    contCard.replaceChildren(contH, list);
    setDrawerModule(m, contentsList(m, stops, st.key));
    if (ovCtl.paintContents) ovCtl.paintContents(stopInfo, d, st.key);
    if (ov) {
      const firstOpen = stops.find((x) => x.id !== "overview" && !d.has(x.key)) || stops[1] || stops[0];
      const started = stops.some((x) => d.has(x.key)) || seen.size > 1;
      ov.go.textContent = started ? `Continue: ${firstOpen.label} ›` : `Start lesson ${firstOpen.label.split(" ")[0]} ›`;
      ov.go.href = stopHref(m, firstOpen);
    }
    const nextStop = stops[cur.stopI + 1];
    let nb = null;
    if (nextStop) { nb = nextLink(stopHref(m, nextStop), nextStop.label); nb.addEventListener("click", () => markDone(stops[cur.stopI].key)); }
    // While a quiz is being taken, its own Previous and Next own the bottom of the phone screen.
    const qTaking = steps[cur.si] && steps[cur.si].id === "quiz" && !!steps[cur.si].sec.querySelector(".qpanel:not([hidden]) .qtake:not([hidden])");
    if (qTaking) doc.dataset.quiz = "taking"; else delete doc.dataset.quiz;
    const nbBar = bottomBar(m, pct, nb);
    if (bar) bar.replaceWith(nbBar); else doc.append(nbBar);
    bar = nbBar;
    const mc = masteryCard(m, qs, quizSets);
    if (mastery && mastery.isConnected) { if (mc) mastery.replaceWith(mc); } mastery = mc;
  }
  function markDone(key) { const d = doneSet(); d.add(key); savePos(m.key, { done: [...d] }); if ((state.status[m.key] || "not-started") === "not-started") setStatus(m.key, "in-progress"); }
  document.addEventListener("bpl:quiz", () => { if (cur && cur.key === m.key) paintStatus(); });

  function learnPage(s, pi) {
    const pg = s.pages[pi];
    if (!pg.el) {
      const d = el("div", "lpage");
      const h = pg.nodes.find((n) => n.tagName === "H3"); h.classList.add("pagetitle"); h.tabIndex = -1;
      const body = pg.nodes.filter((n) => n !== h);
      const tmp = el("div"); tmp.append(...body);
      frameBlocks(tmp); hideAnswers(tmp);
      const ctx = newCiteCtx();
      linkIds(tmp, "cite", ctx);
      const rl = refList(tmp, "h4"); if (rl) tmp.append(rl);
      const env = { hl: 4, ctx, lc: newLessonCtl(() => paintLprog()), key: m.key + "-l" + pi, idx: 0 };
      d.append(...cardify([...tmp.childNodes], "H4", m.comps || [], env));
      env.lc.number();
      const tcard = el("div", "lcard ltitle");
      const top = el("div", "lt-top");
      const eye = el("h2", "step-eyebrow", `Lesson ${modNo(m)}.${pi + 1} · about ${pg.min} min`);
      const lprog = el("span", "lprog");
      top.append(eye, lprog);
      tcard.append(el("div", "h1slot"), top, h);
      const paintLprog = () => { const n = env.lc.items.length, left = env.lc.left(); lprog.textContent = `Part ${pi + 1} of ${s.pages.length}` + (n ? ` · ${left} ${left === 1 ? "check" : "checks"} left` : ""); };
      paintLprog();
      pg.el = d; pg.h = h; pg.tcard = tcard;
    }
    s.sec.replaceChildren(pg.tcard, pg.el);
    return pg.h;
  }
  function paintPager(stopI) {
    pager.replaceChildren();
    const pv2 = stops[stopI - 1], nx2 = stops[stopI + 1];
    if (pv2) { const b = el("button", "prevb"); b.type = "button"; b.append(el("span", "dir", "Previous"), el("b", "", "‹ " + pv2.label)); b.addEventListener("click", () => go(pv2.si, pv2.pi, { focus: "heading" })); pager.append(b); }
    if (nx2) {
      const b = el("button", "nextb"); b.type = "button";
      b.append(el("b", "", "Mark complete and continue ›"), el("span", "dir", "Next: " + nx2.label + (nx2.min ? ` (about ${nx2.min} min)` : "")));
      b.addEventListener("click", () => { markDone(stops[stopI].key); go(nx2.si, nx2.pi, { focus: "heading" }); });
      pager.append(b);
    }
  }
  function go(si, pi, o) {
    o = o || {};
    const s = steps[si];
    if (pi == null) pi = s.pages ? Math.min((pos[m.key] && pos[m.key].lp) || 0, s.pages.length - 1) : 0;
    if (s.pages) pi = Math.max(0, Math.min(pi, s.pages.length - 1));
    cur.si = si; cur.pi = pi;
    cur.stopI = stops.findIndex((x) => x.si === si && x.pi === (s.pages ? pi : 0));
    stopListening(); closePop(false);
    const heading = s.pages ? learnPage(s, pi) : (s.sec.querySelector("h2.steptitle") || h1);
    const isOv = s.id === "overview";
    // the one h1: big in the overview, a short module line on lesson pages
    const slot = isOv ? ov && ov.h1slot : (s.pages ? s.pages[pi].tcard : s.tcard).querySelector(".h1slot");
    h1.classList.toggle("compact", !isOv);
    if (slot) slot.replaceChildren(h1);
    if (!s.pages && s.tcard) s.tcard.querySelector(".lt-eb").textContent = `Module ${modNo(m)} · ${STOP_LABEL[s.id] || s.label}`;
    const last = si === steps.length - 1;
    stage.replaceChildren(listenTools(() => s.sec), tocM, s.sec, pager, ...(last ? [end] : []));
    doc.dataset.compact = si > 0 ? "1" : "0";
    doc.dataset.step = s.id;
    seen.add(s.id);
    // rail
    rail.replaceChildren(...(isOv ? [dealCard, mastery = masteryCard(m, qs, quizSets), polCard] : [contCard, filesCard, polCard, outline]).filter(Boolean));
    const label = s.pages ? `Learn, part ${pi + 1} of ${s.pages.length}` : s.label;
    savePos(m.key, { step: s.id, page: s.pages ? pi : 0, ...(s.pages ? { lp: pi } : {}), label, title: s.pages ? stops[cur.stopI].label.replace(/^\d+\.\d+\s+/, "") : "", seen: [...seen] });
    try { history.replaceState(null, "", `#${m.key}/${s.id}${s.pages ? "/" + (pi + 1) : ""}`); } catch { /* sandboxed */ }
    setTitle(`Module ${modNo(m)} ${s.pages ? "lesson " + modNo(m) + "." + (pi + 1) : s.label}`);
    const cat = catOf(m);
    setCrumbs([...(cat ? [cat.title] : []), isOv ? shortTitle(m) : { text: shortTitle(m), href: "#" + m.key + "/overview" }, ...(isOv ? [] : [s.pages ? stops[cur.stopI].label : (STOP_LABEL[s.id] || s.label)])]);
    paintPager(cur.stopI);
    if ((si > 0 || pi > 0) && (state.status[m.key] || "not-started") === "not-started") setStatus(m.key, "in-progress");
    renderDiagrams(stage); renderMath(stage);
    buildOutline(s.sec, outline, tocM); layoutNotes(reader); markScrollers(doc);
    paintProgress();
    let target = null;
    if (o.anchor) { const low = o.anchor.toLowerCase(); target = [...s.sec.querySelectorAll("h2, h3, h4, strong.lead-in")].find((h) => h.textContent.trim().toLowerCase().replace(/^\d+\.\d+\s+/, "") === low) || null; }
    if (target) { target.scrollIntoView({ block: "start" }); focusHeading(target); }
    else {
      if (o.scroll !== false) scrollTo(0, 0);
      if (o.focus === "heading") focusHeading(heading);
    }
  }
  const relayout = () => { if (!grid.isConnected) return; markScrollers(doc); buildOutline(steps[cur.si].sec, outline, tocM); };
  cur = { key: m.key, si: 0, pi: 0, stopI: 0, relayout, paintStatus,
    goto(w, o) { const si = w.step ? steps.findIndex((x) => x.id === w.step) : -1; if (si < 0) return go(0, 0, o); go(si, w.page != null ? w.page : null, o); } };
  doc.className = "doc module";
  doc.replaceChildren(grid);
  bar = null;
  paintNavCurrent(m.key);
  const saved0 = pos[m.key] || {};
  const w = want && want.step ? want : { step: saved0.step, page: saved0.step === "learn" ? saved0.page : null };
  cur.goto(w, { focus: focus ? "heading" : "none", scroll: true, anchor: want && want.anchor });
  if (focus && cur.si === 0) focusHeading(h1);
}
/** Quick reference as a printable desk card. */
function deskCard(m, s) {
  const card = el("article", "jobcard deskcard");
  const top = el("header", "dc-head");
  const left = el("div");
  left.append(el("p", "dsh-kicker", `DESK CARD · MODULE ${modNo(m)} · ${shortTitle(m).toUpperCase()}`));
  const pr = el("button", "btn sm noprint", ""); pr.type = "button"; pr.append(icon("print"), "Print"); pr.addEventListener("click", () => { try { window.print(); } catch { /* blocked */ } });
  top.append(left, el("p", "dc-label print-only", LABEL), pr);
  const head = s.sec.querySelector("h2.steptitle") || s.sec.firstElementChild;
  card.append(top, ...[...s.sec.childNodes].filter((n) => n !== head));
  card.append(Object.assign(el("footer", "dc-foot"), { textContent: `BPL Academy · Module ${modNo(m)} desk card · Fictional training deals · Round only for display; compare every ratio with its minimum at full precision.` }));
  s.sec.replaceChildren(...(head ? [head] : []), card);
}
let relayoutT = null;
const queueRelayout = () => { clearTimeout(relayoutT); relayoutT = setTimeout(() => { if (cur && cur.relayout && view === "module") cur.relayout(); else markScrollers($("doc")); }, 120); };
document.addEventListener("bpl:layout", queueRelayout);
addEventListener("resize", queueRelayout);
document.addEventListener("toggle", (e) => { if (e.target.closest && e.target.closest(".stage")) queueRelayout(); }, true);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueRelayout);

/* ---------- phone top bar: hides while reading down, returns on scroll up, at the top and on focus ---------- */
function autoHideBar() {
  const mq = matchMedia("(max-width: 719px)"), bar = document.querySelector(".appbar"), root = document.documentElement;
  let lastY = Math.max(0, scrollY), raf = 0;
  const set = (away) => { bar.classList.toggle("away", away); root.classList.toggle("bar-on", mq.matches && !away); };
  function onScroll() {
    raf = 0;
    const y = Math.max(0, scrollY), d = y - lastY;
    if (!mq.matches || y <= bar.offsetHeight || bar.contains(document.activeElement)) { set(false); lastY = y; return; }
    if (Math.abs(d) < 8) return;            // ignore jitter; small moves add up until they count
    set(d > 0); lastY = y;
  }
  addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(onScroll); }, { passive: true });
  bar.addEventListener("focusin", () => set(false));
  mq.addEventListener("change", () => set(false));
  set(false);
}

/* ---------- routing ---------- */
// Phones show the training label once, in the page flow, right under the block that holds the page title
// (CSS hides it on wider screens, where the notice bar carries it). Views re-render #doc in place, so an
// observer keeps it there; moving it is a no-op once placed, so the observer does not loop.
function keepFlowLabel() {
  const lab = document.querySelector(".flowlabel"), doc = $("doc"); if (!lab || !doc) return;
  let queued = false;
  const place = () => {
    queued = false;
    // Directly after the visible page title: module steps show it as .pagetitle (lessons) or .steptitle
    // (quiz and other steps) under the small module h1; every other page uses its h1.
    const h1 = doc.querySelector(".ltitle .pagetitle, .ltitle .steptitle") || doc.querySelector("h1");
    if (h1) { if (h1.nextElementSibling !== lab) h1.after(lab); } else if (lab.parentElement !== $("main")) $("main").append(lab);
  };
  new MutationObserver(() => { if (!queued) { queued = true; requestAnimationFrame(place); } }).observe(doc, { childList: true, subtree: true });
  place();
}

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
  delete $("doc").dataset.quiz;
  if (cur && cur.bar) cur.bar.remove();
  for (const x of document.querySelectorAll("#doc ~ .mbar, .mbar")) x.remove();
  setDrawerModule(null);
  if (key === "sample") { paintNavCurrent(""); showSample(a, focus); if (!b) scrollTo(0, 0); return; }
  paintNavCurrent(r ? key : key === "glossary" ? "glossary" : "home");
  if (r) showRef(r, a, b, focus); else if (key === "glossary") showGlossary(a, focus); else showHome(focus, a);
  if (!a || key === "home" && !a) scrollTo(0, 0);
}

/* ---------- start ---------- */
function boot() {
  if (BOOT_ERROR) {
    const p = el("p", "loading", "The course could not load. Reload the page to try again."); p.setAttribute("role", "alert");
    $("doc").replaceChildren(p); $("sync").textContent = ""; return;
  }
  $("menu").append(icon("menu")); $("audit").prepend(icon("hash"));
  const nextTheme = () => { themePref = THEMES[(THEMES.indexOf(themePref) + 1) % THEMES.length]; prefs.set("theme", themePref); applyTheme(themePref); toast(`Theme: ${themePref}`, 1800); };
  const flipAudit = () => { auditOn = !auditOn; prefs.set("audit", auditOn); applyAudit(auditOn); closePop(false); toast(auditOn ? "Audit mode on: rule and formula IDs show in the text." : "Audit mode off: IDs become numbered citations.", 3200); queueRelayout(); };
  $("theme").addEventListener("click", nextTheme); $("theme-m").addEventListener("click", nextTheme);
  $("audit").addEventListener("click", flipAudit); $("audit-m").addEventListener("click", flipAudit);
  $("audit-m").prepend(icon("hash")); applyTheme(themePref); applyAudit(auditOn);
  autoHideBar(); keepFlowLabel();
  $("menu").addEventListener("click", () => { if ($("rail").classList.contains("open")) closeRail(); else openRail(); });
  $("rail-close").addEventListener("click", () => closeRail());
  $("rail").addEventListener("click", (e) => { if (e.target.closest("a")) closeRail(false); });
  buildLookups(); buildNav(); initDrawer(); initLightbox(); initSearch();
  // Text written after the page is built (exercise feedback, revealed answers) gets the same learner wording.
  new MutationObserver((recs) => {
    const seen = new Set();
    for (const r of recs) {
      const t = r.type === "characterData" ? r.target.parentElement : r.target;
      if (!t || seen.has(t) || !t.isConnected || t.closest(".cx, .code-a, pre, textarea, .math, .mermaid-diagram, .audit-only")) continue;
      seen.add(t);
      if (HAS_ID_RE.test(t.textContent)) linkIds(t, "cite");
    }
  }).observe($("doc"), { childList: true, subtree: true, characterData: true });
  addEventListener("hashchange", () => route(false));
  addEventListener("pagehide", flushAll);
  route(true);
  initStore();
}
try { boot(); } catch (e) {
  const p = el("p", "loading", "The course could not load. Reload the page to try again."); p.setAttribute("role", "alert");
  $("doc").replaceChildren(p); console.error(e);
}
