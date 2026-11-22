/* ---------- exercises ---------- */
const TYPE_LABEL = { calculator: "Calculator", buildup: "Build-up", sort: "Sort", order: "Put in order", decision: "Decision path", scenario: "Scenario" };
const HALF = { money: 0.005, pct1: 0.0005, pct2: 0.00005, ratioX: 0.005, fixed6: 0.0000005, days: 0.5, months1: 0.05, text: 0 };
const isPct = (f) => f === "pct1" || f === "pct2";
function parseNum(s) {
  const t = String(s ?? "").trim().replace(/[−–]/g, "-").replace(/[$,%\sx]/gi, "");
  return /^-?(\d+\.?\d*|\.\d+)$/.test(t) ? Number(t) : NaN;
}
const showNum = (v) => String(BPLF.round.roundHalfUp(v, 8));
/** The learner's number matches the exact value, to the half-unit of the display format. */
function numMatches(typed, exact, format) {
  const v = parseNum(typed); if (Number.isNaN(v)) return false;
  const cands = isPct(format) ? [v / 100, v] : [v];
  return cands.some((c) => Math.abs(c - exact) <= (HALF[format] || 0) * 1.0001 + 1e-12);
}
function shuffled(n, seedStr, avoidIdentity) {
  let seed = 0; for (const ch of seedStr) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const idx = [...Array(n).keys()];
  const key = (i) => { let x = (seed + (i + 1) * 2654435761) >>> 0; x ^= x >>> 15; x = Math.imul(x, 2246822519) >>> 0; x ^= x >>> 13; return x; };
  idx.sort((a, b) => key(a) - key(b));
  if (avoidIdentity && idx.every((v, i) => v === i) && n > 1) idx.push(idx.shift());
  return idx;
}
function exFrame(ex, ctl) {
  const card = el("article", "ex"); card.dataset.id = ex.id; card.dataset.type = ex.type;
  const head = el("div", "exhead");
  head.append(el("h3", "", ex.title));
  const meta = el("div", "exmeta"); meta.append(el("span", "extype", TYPE_LABEL[ex.type] || ex.type));
  if (ex.deal) meta.append(el("span", "exdeal", ex.deal));
  head.prepend(meta);
  const based = el("div", "exbased");
  if ((ex.sources || []).length) { based.append(el("span", "", "Based on")); for (const id of ex.sources) based.append(known(id) ? refBtn(id) : el("span", /^[A-Z]+(-[A-Z0-9]+)+$/.test(id) ? "nb" : "", id)); }
  const intro = el("p", "speak", ex.intro);
  const foot = el("div", "exfoot");
  const doneBtn = el("button", "btn sm", "Mark done"); doneBtn.type = "button";
  const paintDone = () => { const d = !!ctl.st.done; card.dataset.done = d ? "1" : ""; doneBtn.textContent = d ? "Done. Undo" : "Mark done"; doneBtn.classList.toggle("ghost", d); };
  ctl.setDone = (v) => { if (!!ctl.st.done === v) return; ctl.st.done = v; paintDone(); ctl.save(); ctl.onDone(); };
  doneBtn.addEventListener("click", () => ctl.setDone(!ctl.st.done));
  foot.append(doneBtn);
  paintDone();
  return { card, head, intro, foot, based };
}
function field(id, label, input, cls) {
  const row = el("div", "exfield" + (cls ? " " + cls : "")); const l = el("label", "", label); l.htmlFor = id; input.id = id;
  if (cls === "chk") row.append(input, l); else row.append(l, input);
  return row;
}
function textInput(kind) { const i = el("input"); i.type = "text"; i.autocomplete = "off"; i.spellcheck = false; i.inputMode = kind === "money" || kind === "rate" ? "decimal" : kind === "list-money" ? "text" : "numeric"; return i; }

function exCalculator(ex, ctl) {
  const c = ex.calculator, st = ctl.st, root = el("div", "exbody");
  root.append(el("p", "speak", c.task));
  const fs = el("fieldset", "exfields"); fs.append(el("legend", "", "Inputs from the deal"));
  const grid = el("div", "exgrid"); fs.append(grid);
  const scales = c.args.map((a) => (a.kind === "rate" && Math.abs(a.value) <= 1 ? 100 : 1));
  const dflt = (a, i) => a.kind === "bool" ? !!a.value : a.kind === "rate" ? showNum(a.value * scales[i]) : a.kind === "list-money" ? [].concat(a.value).join(", ") : String(a.value);
  st.inputs = Array.isArray(st.inputs) ? st.inputs : [];
  const ctrls = c.args.map((a, i) => {
    let inp;
    if (a.kind === "bool") { inp = el("input"); inp.type = "checkbox"; }
    else if (a.kind === "tier") { inp = el("select"); for (let t = 0; t <= 3; t++) { const o = el("option", "", "Tier " + t); o.value = String(t); inp.append(o); } }
    else if (a.kind === "date") { inp = el("input"); inp.type = "date"; }
    else inp = textInput(a.kind);
    const v = st.inputs[i] !== undefined ? st.inputs[i] : dflt(a, i);
    if (a.kind === "bool") inp.checked = !!v; else inp.value = v;
    inp.addEventListener(a.kind === "bool" || a.kind === "tier" ? "change" : "input", () => { st.inputs[i] = a.kind === "bool" ? inp.checked : inp.value; ctl.save(); });
    grid.append(field(`${ex.id}-in-${i}`, a.label + (scales[i] === 100 ? " (%)" : ""), inp, a.kind === "bool" ? "chk" : ""));
    return inp;
  });
  const reset = el("button", "btn sm", "Reset to the deal"); reset.type = "button";
  const resetRow = el("div", "exrow"); resetRow.append(reset);
  const mine = textInput("money"); mine.value = st.mine || ""; mine.inputMode = "text";
  mine.addEventListener("input", () => { st.mine = mine.value; ctl.save(); });
  const mineRow = field(`${ex.id}-mine`, `Your answer: ${c.output.label}`, mine);
  const go = el("button", "btn sm primary", "Calculate and compare"); go.type = "button";
  const out = el("div", "exres"); out.hidden = true; out.setAttribute("role", "status");
  const readArgs = () => c.args.map((a, i) => {
    const raw = a.kind === "bool" ? ctrls[i].checked : ctrls[i].value;
    if (a.kind === "bool") return raw;
    if (a.kind === "date") { if (!raw) throw new RangeError(`Pick a date for ${a.label}.`); return raw; }
    if (a.kind === "tier") return Number(raw);
    if (a.kind === "list-money") { const xs = String(raw).split(",").map(parseNum); if (!xs.length || xs.some(Number.isNaN)) throw new RangeError(`Enter ${a.label} as numbers separated by commas.`); return xs; }
    const n = parseNum(raw); if (Number.isNaN(n)) throw new RangeError(`Enter a number for ${a.label}.`);
    return a.kind === "rate" ? n / scales[i] : n;
  });
  const same = (a, b) => Array.isArray(b) ? Array.isArray(a) && a.length === b.length && a.every((x, k) => Math.abs(x - b[k]) < 1e-9) : typeof b === "number" ? Math.abs(a - b) < 1e-9 : a === b;
  function compute() {
    out.hidden = false; out.replaceChildren();
    try {
      const vals = readArgs();
      const fn = BPLF.funcs[c.function];
      let r = c.argStyle === "object" ? fn(Object.fromEntries(c.args.map((a, i) => [a.name, vals[i]]))) : fn(...vals);
      if (c.output.path) r = r[c.output.path];
      const shown = BPLF.fmt(c.output.format, r);
      out.append(el("span", "exnote", c.output.label), el("b", "", shown));
      const atDefault = vals.every((v, i) => same(v, c.args[i].value));
      const typed = mine.value.trim();
      let ok = false;
      if (typed) {
        ok = c.output.format === "text" ? typed.toLowerCase() === String(r).toLowerCase() : numMatches(typed, r, c.output.format);
        out.append(el("span", ok ? "exok" : "exbad", ok ? "Your answer matches." : `Your answer (${typed}) does not match. Check your steps.`));
      }
      if (!atDefault) out.append(el("span", "exnote", "You changed the inputs, so this is a what-if. Use “Reset to the deal” to go back."));
      else if (ok) ctl.setDone(true);
      st.revealed = true; ctl.save();
    } catch (e) {
      out.append(el("span", "exbad", e instanceof RangeError ? e.message : "Could not calculate with these inputs."));
    }
  }
  go.addEventListener("click", () => {
    if (!mine.value.trim() && !st.revealed) { out.hidden = false; out.replaceChildren(el("span", "exnote", "Type your own answer first, then calculate to compare.")); mine.focus(); return; }
    compute();
  });
  reset.addEventListener("click", () => {
    c.args.forEach((a, i) => { if (a.kind === "bool") ctrls[i].checked = !!a.value; else ctrls[i].value = dflt(a, i); });
    st.inputs = c.args.map((a, i) => dflt(a, i)); out.hidden = true; out.replaceChildren(); ctl.save();
  });
  const goRow = el("div", "exrow"); goRow.append(go);
  root.append(fs, resetRow, mineRow, goRow, out);
  if (st.revealed && st.done) compute();
  return root;
}

function exBuildup(ex, ctl) {
  const b = ex.buildup, st = ctl.st, root = el("div", "exbody");
  st.ok = st.ok || {}; st.vals = st.vals || {}; st.tries = st.tries || {};
  root.append(el("p", "speak", b.context));
  const list = el("ol", "exlines");
  const live = el("div", "sr"); live.setAttribute("aria-live", "polite");
  const firstOpen = () => { const i = b.lines.findIndex((_, k) => !st.ok[k]); return i < 0 ? b.lines.length : i; };
  function paint(focusIdx) {
    list.replaceChildren();
    const open = firstOpen();
    b.lines.forEach((l, i) => {
      if (i > open) return;
      const li = el("li", "exline"); li.dataset.ok = st.ok[i] ? "1" : "";
      const id = `${ex.id}-l${i}`;
      const lab = el("label", "speak", `${i + 1}. ${l.label}`); lab.htmlFor = id;
      const inp = textInput("money"); inp.id = id; inp.value = st.vals[i] || ""; inp.inputMode = "text"; inp.readOnly = !!st.ok[i];
      const btn = el("button", "btn sm primary", "Check"); btn.type = "button"; btn.hidden = !!st.ok[i];
      const fb = el("div", "exnote"); fb.id = id + "-fb";
      const row = el("div", "exrow"); row.append(inp, btn);
      li.append(lab, row, fb);
      if (st.ok[i]) fb.replaceChildren(el("span", "exok", `Correct: ${BPLF.fmt(l.format, l.expected)}`));
      else if (st.tries[i]) { fb.replaceChildren(el("span", "exbad", "Not quite. "), document.createTextNode("Hint: " + l.hint)); inp.setAttribute("aria-invalid", "true"); inp.setAttribute("aria-describedby", fb.id); }
      const check = () => {
        const tol = Math.min(l.tolerance ?? 0.005, HALF[l.format] || 0.005);
        const typed = inp.value.trim(); st.vals[i] = typed;
        const v = parseNum(typed);
        const cands = isPct(l.format) ? [v, v / 100] : [v];
        const ok = !Number.isNaN(v) && cands.some((x) => Math.abs(x - l.expected) <= tol * 1.0001 + 1e-12);
        if (ok) st.ok[i] = true; else st.tries[i] = (st.tries[i] || 0) + 1;
        ctl.save();
        if (firstOpen() >= b.lines.length) ctl.setDone(true);
        paint(ok ? i + 1 : i);
        live.textContent = ok ? `Line ${i + 1} is correct: ${BPLF.fmt(l.format, l.expected)}.${firstOpen() >= b.lines.length ? " Build-up complete." : ""}` : `Line ${i + 1}: not quite. Hint: ${l.hint}`;
      };
      btn.addEventListener("click", check);
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !inp.readOnly) { e.preventDefault(); check(); } });
      list.append(li);
    });
    const target = focusIdx != null ? list.children[Math.min(focusIdx, list.children.length - 1)] : null;
    if (target) { const f = target.querySelector("input:not([readonly])") || target.querySelector("input"); if (f) f.focus(); }
  }
  paint();
  root.append(list, live);
  return root;
}

function exSort(ex, ctl) {
  const s = ex.sort, st = ctl.st, root = el("div", "exbody");
  st.assign = st.assign || {};
  const order = shuffled(s.items.length, ex.id, false);
  root.append(el("p", "exnote", "Choose a bucket for each item, then check. The buttons work with the keyboard."));
  const list = el("div", "exlist"); list.style.marginTop = "0";
  const msg = el("p", "exnote"); msg.setAttribute("aria-live", "polite");
  const rows = order.map((idx) => {
    const it = s.items[idx];
    const row = el("div", "sortrow"); row.dataset.r = "";
    row.append(el("div", "speak", it.text));
    const grp = el("div", "seg"); grp.setAttribute("role", "group"); grp.setAttribute("aria-label", `Bucket for ${it.text}`);
    const btns = s.buckets.map((bk) => {
      const b = el("button", "btn sm choice", bk); b.type = "button";
      b.addEventListener("click", () => { st.assign[idx] = bk; st.checked = false; paint(); ctl.save(); });
      grp.append(b); return b;
    });
    const why = el("p", "exnote"); why.hidden = true;
    row.append(grp, why); list.append(row);
    return { idx, it, row, btns, why };
  });
  function paint() {
    for (const r of rows) {
      r.btns.forEach((b, k) => b.setAttribute("aria-pressed", String(st.assign[r.idx] === s.buckets[k])));
      r.row.dataset.r = ""; r.why.hidden = true;
      if (st.checked) {
        const right = st.assign[r.idx] === r.it.bucket;
        r.row.dataset.r = right ? "right" : "wrong"; r.why.hidden = false;
        r.why.textContent = (right ? "Right. " : `Not quite. It belongs in “${r.it.bucket}”. `) + r.it.why;
      }
    }
    if (st.checked) {
      const n = rows.filter((r) => st.assign[r.idx] === r.it.bucket).length;
      msg.textContent = `${n} of ${rows.length} right.`;
      if (n === rows.length) ctl.setDone(true);
    } else msg.textContent = "";
  }
  const chk = el("button", "btn sm primary", "Check"); chk.type = "button";
  chk.addEventListener("click", () => {
    if (rows.some((r) => !st.assign[r.idx])) { msg.textContent = "Choose a bucket for every item first."; return; }
    st.checked = true; paint(); ctl.save();
  });
  const act = el("div", "exrow"); act.append(chk);
  root.append(list, act, msg);
  paint();
  return root;
}

function exOrder(ex, ctl) {
  const o = ex.order, st = ctl.st, root = el("div", "exbody"), n = o.steps.length;
  if (!Array.isArray(st.seq) || st.seq.length !== n) st.seq = shuffled(n, ex.id, true);
  root.append(el("p", "exnote", "Use the move buttons to put the steps in the right order, then check."));
  const list = el("ol", "orderlist"); list.setAttribute("aria-label", "Steps");
  const live = el("p", "exnote"); live.setAttribute("aria-live", "polite");
  const why = el("p", "speak"); why.hidden = true;
  function paint(focus) {
    list.replaceChildren();
    st.seq.forEach((orig, pos) => {
      const li = el("li", "orderrow"); li.dataset.r = st.checked ? (orig === pos ? "right" : "wrong") : "";
      li.append(el("span", "speak", o.steps[orig]));
      const row = el("div", "exrow");
      const up = el("button", "btn sm", "Move up"), dn = el("button", "btn sm", "Move down");
      up.type = dn.type = "button"; up.disabled = pos === 0; dn.disabled = pos === n - 1;
      up.setAttribute("aria-label", `Move up: ${o.steps[orig]}`); dn.setAttribute("aria-label", `Move down: ${o.steps[orig]}`);
      const move = (d, which) => {
        [st.seq[pos], st.seq[pos + d]] = [st.seq[pos + d], st.seq[pos]]; st.checked = false; ctl.save();
        live.textContent = `Moved to position ${pos + d + 1} of ${n}.`;
        paint({ pos: pos + d, which });
      };
      up.addEventListener("click", () => move(-1, "up")); dn.addEventListener("click", () => move(1, "down"));
      row.append(up, dn); li.append(row); list.append(li);
    });
    why.hidden = true;
    if (st.checked) {
      const good = st.seq.filter((orig, pos) => orig === pos).length;
      if (good === n) { why.hidden = false; why.textContent = "Right order. " + o.why; live.textContent = `${n} of ${n} in place.`; ctl.setDone(true); }
      else live.textContent = `${good} of ${n} in the right place. Keep moving steps.`;
    }
    if (focus) {
      const bs = list.children[focus.pos].querySelectorAll("button");
      const pick = focus.which === "up" ? bs[0] : bs[1];
      (pick && !pick.disabled ? pick : (bs[0].disabled ? bs[1] : bs[0])).focus();
    }
  }
  const chk = el("button", "btn sm primary", "Check order"); chk.type = "button";
  chk.addEventListener("click", () => { st.checked = true; ctl.save(); paint(); });
  const act = el("div", "exrow"); act.append(chk);
  root.append(list, act, live, why);
  paint();
  return root;
}

function exDecision(ex, ctl) {
  const d = ex.decision, st = ctl.st, root = el("div", "exbody");
  st.path = Array.isArray(st.path) ? st.path : []; st.matched = st.matched || {}; if (st.case == null) st.case = "";
  const cases = d.cases || [];
  const caseSel = el("select"); const o0 = el("option", "", "Walk the tree freely"); o0.value = ""; caseSel.append(o0);
  cases.forEach((c, i) => { const o = el("option", "", ""); o.value = String(i); caseSel.append(o); });
  const paintOpts = () => caseSel.querySelectorAll("option").forEach((o, k) => { if (k > 0) o.textContent = `Case ${k}${st.matched[k - 1] ? " (matched)" : ""}`; });
  paintOpts(); caseSel.value = String(st.case);
  const caseText = el("p", "speak");
  const stage = el("div", "exbody");
  const cur = () => { let id = "start"; for (const p of st.path) id = d.nodes[id].options[p].next; return id; };
  const refocus = () => { const t = stage.querySelector(".dopts button") || stage.querySelector(".dres"); if (t) t.focus(); };
  function paint() {
    caseText.textContent = st.case === "" ? "" : "Case: " + cases[Number(st.case)].text;
    stage.replaceChildren();
    if (st.path.length) {
      const pl = el("ol", "dpath"); let id = "start";
      for (const p of st.path) { const n = d.nodes[id]; pl.append(el("li", "", `${n.q} → ${n.options[p].label}`)); id = n.options[p].next; }
      stage.append(pl);
    }
    const id = cur(), n = d.nodes[id];
    if (n.options) {
      stage.append(el("p", "speak", n.q));
      const box = el("div", "dopts");
      n.options.forEach((op, i) => { const b = el("button", "btn sm", op.label); b.type = "button"; b.addEventListener("click", () => { st.path.push(i); ctl.save(); paint(); refocus(); }); box.append(b); });
      stage.append(box);
    } else {
      const end = el("div", "dend"); const res = el("b", "", n.result); res.tabIndex = -1; res.className = "dres"; end.append(res, el("p", "speak", n.explain));
      if (st.case !== "") {
        const c = cases[Number(st.case)], ok = id === c.expect;
        if (ok) { st.matched[st.case] = true; paintOpts(); if (cases.every((_, i) => st.matched[i])) ctl.setDone(true); }
        end.append(el("span", ok ? "exok" : "exbad", ok ? "Your path matches the expected outcome for this case." : `This is not the expected outcome for this case. Expected: ${d.nodes[c.expect].result}. Start over and recheck each question.`));
      }
      stage.append(end);
    }
    const acts = el("div", "exrow");
    const undo = el("button", "btn sm", "Undo last choice"); undo.type = "button"; undo.disabled = !st.path.length;
    undo.addEventListener("click", () => { st.path.pop(); ctl.save(); paint(); refocus(); });
    const again = el("button", "btn sm", "Start over"); again.type = "button"; again.disabled = !st.path.length;
    again.addEventListener("click", () => { st.path = []; ctl.save(); paint(); refocus(); });
    acts.append(undo, again); stage.append(acts);
  }
  caseSel.addEventListener("change", () => { st.case = caseSel.value; st.path = []; ctl.save(); paint(); });
  root.append(field(`${ex.id}-case`, "Pick a case to run, or walk the tree freely", caseSel), caseText, stage);
  paint();
  return root;
}

function exScenario(ex, ctl) {
  const s = ex.scenario, st = ctl.st, root = el("div", "exbody");
  st.rubric = st.rubric || {};
  root.append(el("p", "speak", s.case), el("p", "speak", s.prompt));
  const ta = el("textarea"); ta.value = st.text || ""; ta.setAttribute("aria-label", "Your answer");
  ta.placeholder = "Write your answer first. Use fictional data only.";
  ta.addEventListener("input", () => { st.text = ta.value; ctl.save(); });
  const rev = el("button", "btn sm primary", "Show model answer"); rev.type = "button";
  const box = el("div", "exres"); box.hidden = true;
  box.append(el("b", "", "Model answer"), el("p", "speak", s.model_answer), el("span", "exlab", "Check your answer against each point"));
  const ul = el("ul", "rubric-list");
  s.rubric.forEach((r, i) => {
    const li = el("li"); const lab = el("label"); const cb = el("input"); cb.type = "checkbox"; cb.checked = !!st.rubric[i];
    cb.addEventListener("change", () => { st.rubric[i] = cb.checked; ctl.save(); if (s.rubric.every((_, k) => st.rubric[k])) ctl.setDone(true); });
    lab.append(cb, el("span", "", r)); li.append(lab); ul.append(li);
  });
  box.append(ul);
  box.id = `${ex.id}-model`; rev.setAttribute("aria-controls", box.id); rev.setAttribute("aria-expanded", "false");
  const show = () => { box.hidden = false; rev.textContent = "Hide model answer"; rev.setAttribute("aria-expanded", "true"); };
  rev.addEventListener("click", () => {
    if (!box.hidden) { box.hidden = true; rev.textContent = "Show model answer"; rev.setAttribute("aria-expanded", "false"); return; }
    if (!ta.value.trim() && !st.revealed) { ta.placeholder = "Write your answer first, then reveal the model answer."; ta.focus(); return; }
    st.revealed = true; ctl.save(); show();
  });
  if (st.revealed) show();
  const act = el("div", "exrow"); act.append(rev);
  root.append(ta, act, box);
  return root;
}
const EX_BUILDERS = { calculator: exCalculator, buildup: exBuildup, sort: exSort, order: exOrder, decision: exDecision, scenario: exScenario };

function buildExercises(m, qs, saver) {
  const sec = el("section", "prose step"); sec.dataset.step = "exercises";
  qs.exercises = qs.exercises || {};
  const h = el("h2", "steptitle", "Exercises");
  const sum = el("p", "exsum"); sum.setAttribute("aria-live", "polite");
  const intro = el("p", "speak", "Work each exercise yourself first. Your answers and progress save automatically.");
  const list = el("div", "exlist");
  const count = () => { const n = m.exercises.filter((e) => (qs.exercises[e.id] || {}).done).length; sum.textContent = `${n} of ${m.exercises.length} exercises done`; };
  for (const ex of m.exercises) {
    const st = (qs.exercises[ex.id] = qs.exercises[ex.id] || {});
    const ctl = { st, save: () => saver.touch(), onDone: count };
    const f = exFrame(ex, ctl);
    const body = EX_BUILDERS[ex.type] ? EX_BUILDERS[ex.type](ex, ctl) : el("p", "", "This exercise type is not supported.");
    f.card.append(f.head, f.intro, body, f.foot);
    if (f.based.childNodes.length) f.card.append(f.based);
    sourceTagsInText(f.card);
    for (const t of f.card.querySelectorAll("p.speak, div.speak, p.exnote")) linkIds(t, "quiet");
    list.append(f.card);
  }
  count();
  sec.append(h, intro, sum, list);
  return sec;
}
