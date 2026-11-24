/* ---------- lesson-format components (docs/standards/lesson-format.md) ----------
 * build.py parses each ```bpl:<type> block into a spec and leaves <div class="bplc" data-i="N">.
 * These functions render the specs. Practice state (picks, tries, slider) is a per-viewer convenience
 * kept in this browser (prefs "kc"). Nothing here is graded. */
const KC = prefs.get("kc") || {};
const kcGet = (id) => (KC[id] = KC[id] || {});
const kcSave = () => prefs.set("kc", KC);

/* expressions: the same grammar and rounding as lesson_format.py */
function exprTokens(src) {
  const out = []; const re = /\s*(?:(\d+(?:\.\d+)?%?)|([A-Za-z_]\w*)|(>=|<=|==|[-+*/()<>×÷−≥≤]))/y; let i = 0; src = src.trim();
  while (i < src.length) {
    re.lastIndex = i; const m = re.exec(src);
    if (!m || re.lastIndex === i) throw new Error("bad expression: " + src);
    if (m[1]) out.push(["n", m[1].endsWith("%") ? Number(m[1].slice(0, -1)) / 100 : Number(m[1])]);
    else if (m[2]) out.push(["v", m[2]]);
    else out.push(["o", { "×": "*", "÷": "/", "−": "-", "≥": ">=", "≤": "<=" }[m[3]] || m[3]]);
    i = re.lastIndex;
  }
  return out;
}
function evalExpr(src, env) {
  const t = exprTokens(src); let p = 0;
  const peek = () => t[p] || ["e"], take = () => t[p++] || ["e"];
  const is = (x, o) => x[0] === "o" && x[1] === o;
  function atom() {
    const x = take();
    if (x[0] === "n") return x[1];
    if (x[0] === "v") { if (!(x[1] in env)) throw new Error("unknown name " + x[1]); return env[x[1]]; }
    if (is(x, "(")) { const v = cmp(); take(); return v; }
    if (is(x, "-")) return -atom();
    throw new Error("bad expression: " + src);
  }
  function mul() { let v = atom(); while (is(peek(), "*") || is(peek(), "/")) { const o = take()[1], r = atom(); v = o === "*" ? v * r : v / r; } return v; }
  function add() { let v = mul(); while (is(peek(), "+") || is(peek(), "-")) { const o = take()[1], r = mul(); v = o === "+" ? v + r : v - r; } return v; }
  function cmp() {
    const v = add(); const x = peek();
    if (x[0] === "o" && [">=", "<=", ">", "<", "=="].includes(x[1])) { take(); const r = add(); return { ">=": v >= r, "<=": v <= r, ">": v > r, "<": v < r, "==": v === r }[x[1]]; }
    return v;
  }
  return cmp();
}
function fmtVal(kind, x) {
  if (typeof x === "boolean") return x ? "yes" : "no";
  const R = BPLF.round.roundHalfUp, neg = x < 0, sg = (v) => (neg && v ? "−" : "");
  if (kind === "money") { const v = R(Math.abs(x), 2); return sg(v) + "$" + v.toLocaleString("en-US", Number.isInteger(v) ? { maximumFractionDigits: 0 } : { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  if (kind === "money2") { const v = R(Math.abs(x), 2); return sg(v) + "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  if (kind === "x2" || kind === "x4") { const n = Number(kind[1]); const v = R(Math.abs(x), n); return sg(v) + v.toFixed(n) + "x"; }
  if (kind === "pct1" || kind === "pct2") { const n = Number(kind[3]); const v = R(Math.abs(x) * 100, n); return sg(v) + v.toFixed(n) + "%"; }
  if (kind === "int") { const v = R(Math.abs(x), 0); return sg(v) + v.toLocaleString("en-US"); }
  const v = R(Math.abs(x), 2); return sg(v) + String(v);
}
const fillText = (text, env) => String(text || "").replace(/\{([^{}|]+)(?:\|([a-z0-9]+))?\}/g, (_, e, f) => fmtVal(f || "num", evalExpr(e, env)));

/* helpers */
const H = (lvl, cls, text) => el("h" + Math.min(6, Math.max(2, lvl)), cls, text);
const md1 = (s, env) => mdInline(varTags(s || ""), env.ctx);
const mdB = (s, env, cls) => mdNodes(varTags(s || ""), cls || "", env.ctx);
const auditNote = (s) => { if (!s) return null; const p = el("p", "audit-only", "Audit: " + s); return p; };
/** A radio group of buttons with roving focus (arrow keys move, Space or Enter picks). */
function radios(group, buttons, onPick) {
  group.setAttribute("role", "radiogroup");
  const focusAt = (k) => { buttons.forEach((b, j) => { b.tabIndex = j === k ? 0 : -1; }); buttons[k].focus(); };
  buttons.forEach((b, k) => {
    b.setAttribute("role", "radio"); b.tabIndex = k === 0 ? 0 : -1;
    b.addEventListener("click", () => { if (b.getAttribute("aria-disabled") !== "true") onPick(k); });
    b.addEventListener("keydown", (e) => {
      const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (d) { e.preventDefault(); focusAt((k + d + buttons.length) % buttons.length); }
    });
  });
  return () => { const c = buttons.findIndex((b) => b.getAttribute("aria-checked") === "true"); buttons.forEach((b, j) => { b.tabIndex = j === (c < 0 ? 0 : c) ? 0 : -1; }); };
}
/** Lesson controller: numbers the checks and reports how many are left. */
function newLessonCtl(onChange) {
  const items = [];
  return {
    items,
    add(it) { items.push(it); return it; },
    find: (id) => items.find((x) => x.id === id),
    number() {
      const n = items.length;
      items.forEach((it, i) => { if (it.labelEl) it.labelEl.textContent = it.prefix + `Knowledge check ${i + 1} of ${n}`; });
    },
    left: () => items.filter((x) => !x.done()).length,
    changed() { if (onChange) onChange(); },
  };
}

/* ---------- simple blocks ---------- */
function compList(spec, env, title, cls) {
  const s = el("section", "lcard hl " + cls); const h = H(env.hl, "", spec.title || title); s.append(h);
  const ul = el("ul"); for (const t of spec.items) { const li = el("li"); li.append(md1(t, env)); ul.append(li); }
  s.append(ul); return s;
}
function compObjectives(spec, env) {
  const d = el("div", "objs");
  spec.items.forEach((t, i) => { const o = el("div", "obj"); o.append(el("strong", "", `Objective ${i + 1}. `), md1(t, env)); d.append(o); });
  return d;
}
function compPolicy(spec, env) {
  const s = el("aside", "lcard pnote"); s.setAttribute("aria-label", spec.title || "From the credit policy");
  const t = el("p", "pn-h"); t.append(icon("file"), spec.title || "From the credit policy");
  s.append(t, md1(spec.text, env)); const a = auditNote(spec.audit); if (a) s.append(a); return s;
}
function compFormula(spec, env) {
  const s = el("section", "lcard fcomp"); s.append(H(env.hl, "", spec.title || "The formula"));
  const box = el("p", "fbox"); box.append(md1(spec.show, env)); if (spec.label) box.setAttribute("aria-label", spec.label);
  s.append(box);
  if (spec.items) { s.append(el("p", "where-h", "Where:")); const ul = el("ul", "where-l"); for (const t of spec.items) { const li = el("li"); li.append(md1(t, env)); ul.append(li); } s.append(ul); }
  const a = auditNote(spec.audit); if (a) s.append(a);
  return s;
}
function dealHead(spec, env, titleText) {
  const head = el("div", "dsh-head");
  const k = el("p", "dsh-kicker"); k.append(el("span", "", spec.kicker || "DEAL SHEET · FICTIONAL TRAINING DEAL")); if (spec.tag) k.append(el("span", "dsh-tag", spec.tag));
  head.append(k);
  if (titleText) head.append(H(env.hl, "dsh-title", titleText));
  if (spec.facts && spec.facts.length) {
    const dl = el("dl", "dsh-facts");
    for (const [a, b] of spec.facts) { const d = el("div"); d.append(el("dt", "", a), el("dd", "", b)); dl.append(d); }
    head.append(dl);
  }
  return head;
}
function ledger(md, env, total) {
  const box = mdB(md, env, "ledger");
  for (const tr of box.querySelectorAll("tbody tr")) { const c = tr.children[0]; if (c && total && c.textContent.trim().toLowerCase() === total.toLowerCase()) tr.classList.add("total"); }
  return box;
}

/* ---------- worked example: deal sheet + step reveal ---------- */
function compWorked(spec, env) {
  const id = spec.id || env.key + "-worked-" + env.idx;
  const st = kcGet(id);
  const s = el("section", "lcard dsheet worked");
  s.append(dealHead(spec, env, spec.title));
  if (spec.table) s.append(ledger(spec.table, env, spec.total));
  const wrap = el("div", "wsteps2");
  const lab = el("p", "ws-lab", "Work it step by step");
  const ol = el("ol"); ol.id = uid("ws");
  const lis = spec.steps.map((x) => { const li = el("li", "wstep"); li.append(el("b", "", x.label + ". "), md1(x.text, env)); ol.append(li); return li; });
  const acts = el("div", "exrow");
  const nextB = el("button", "btn sm primary", "Show next step"); nextB.type = "button"; nextB.setAttribute("aria-controls", ol.id);
  const allB = el("button", "btn sm", "Show all steps"); allB.type = "button"; allB.setAttribute("aria-controls", ol.id);
  const live = el("span", "qhint"); live.setAttribute("role", "status");
  acts.append(nextB, allB, live);
  let shown = Math.max(1, Math.min(lis.length, st.shown || 1));
  const paint = (announce) => {
    lis.forEach((li, i) => li.classList.toggle("later", i >= shown));
    nextB.hidden = allB.hidden = shown >= lis.length;
    if (announce) live.textContent = `Step ${shown} of ${lis.length} shown.`;
    st.shown = shown; kcSave();
  };
  nextB.addEventListener("click", () => { shown++; paint(true); const t = lis[shown - 1]; t.tabIndex = -1; t.focus(); });
  allB.addEventListener("click", () => { shown = lis.length; paint(true); });
  paint(false);
  wrap.append(lab, ol, acts);
  s.append(wrap);
  const a = auditNote(spec.audit); if (a) s.append(a);
  return s;
}

/* ---------- predict ---------- */
function compPredict(spec, env) {
  const st = kcGet(spec.id);
  const s = el("section", "lcard kc predict");
  const lab = el("p", "kc-label");
  const stem = H(env.hl, "kc-stem", ""); stem.id = uid("ps"); stem.append(md1(spec.stem, env));
  const grp = el("div", "pr-opts"); grp.setAttribute("aria-labelledby", stem.id);
  const bs = spec.options.map((o) => { const b = el("button", "pr-opt"); b.type = "button"; b.append(md1(o.text, env)); grp.append(b); return b; });
  const note = el("p", "kc-note"); note.setAttribute("role", "status");
  const out = el("p", "kc-out"); out.hidden = true;
  const keyText = spec.options.find((o) => o.ok).text;
  const it = env.lc.add({ id: spec.id, labelEl: lab, prefix: "Predict first · ", done: () => st.pick != null });
  it.outcome = (text) => {
    if (st.pick == null) return;
    const mine = spec.options[st.pick].text, ok = spec.options[st.pick].ok;
    out.hidden = false; out.replaceChildren(el("strong", "", ok ? "Your prediction was right. " : "Not quite. "), `You predicted “${plainText(mine)}”. ${text}${ok ? "" : ` The closest answer is “${plainText(keyText)}”.`}`);
  };
  it.pickText = () => (st.pick == null ? "" : plainText(spec.options[st.pick].text));
  const fix = radios(grp, bs, (k) => { if (st.pick != null) return; st.pick = k; kcSave(); paint(); env.lc.changed(); });
  function paint() {
    bs.forEach((b, k) => { b.setAttribute("aria-checked", String(st.pick === k)); if (st.pick != null) b.setAttribute("aria-disabled", "true"); });
    note.textContent = st.pick == null ? (spec.before || "Pick one, then test it below.") : (spec.after || "Locked in. Now test it below.");
    fix();
  }
  paint();
  s.append(lab, stem, grp, note, out);
  return s;
}

/* ---------- deal desk: one control, live working, two bars and a threshold, verdict ---------- */
/**
 * The working line as stacked steps for narrow screens, built from the same template and values:
 * "(a − b × c) ÷ d = r, where …" becomes "<bar>" / "a − b × c" / "= n" / "÷ d" / "= r" / "where …".
 * Returns null when the working has another shape; the one-line working then shows at every width.
 */
function stackWorking(spec, e) {
  const m = /^\((.+)\)\s*÷\s*(\{[^{}]+\})\s*=\s*(\{[^{}]+\})(?:,\s*where\s+(.+))?$/.exec(String(spec.working || "").trim());
  if (!m) return null;
  const asExpr = (t) => t.replace(/\{([^{}|]+)(?:\|[a-z0-9]+)?\}/g, "($1)");
  let num, den;
  try { num = evalExpr(asExpr(m[1]), e); den = evalExpr(asExpr(m[2]), e); } catch { return null; }
  const barFor = (x) => (spec.bars || []).find((b) => { try { return Math.abs(evalExpr(b.expr, e) - x) < 1e-6; } catch { return false; } });
  const nb = barFor(num), db = barFor(den);
  const ol = el("ol", "dstack");
  const row = (cls, op, text, note) => { const li = el("li", cls); li.append(el("span", "dop", op), el("span", "dtx", text)); if (note) li.append(el("span", "dnt", note)); ol.append(li); };
  if (nb) row("dhd", "", nb.label);
  row("", "", fillText(m[1], e));
  row("dsub", "=", fmtVal("money", num));
  row("", "÷", fillText(m[2], e), db ? db.label.toLowerCase() : "");
  row("dres", "=", fillText(m[3], e));
  if (m[4]) row("dwh", "", "where " + fillText(m[4], e));
  return ol;
}
function compDesk(spec, env) {
  const st = kcGet(spec.id || env.key + "-desk");
  const c = spec.control;
  const envAt = (v) => { const e = { [c.name]: v }; for (const L of spec.lets) e[L.name] = evalExpr(L.expr, e); return e; };
  const s = el("section", "lcard desk");
  const hd = el("div", "desk-h"); const h = H(env.hl, "", spec.title); h.id = uid("dk"); hd.append(h); if (spec.deal) hd.append(el("span", "desk-tag", spec.deal.toUpperCase()));
  s.setAttribute("aria-labelledby", h.id);
  const body = el("div", "desk-b");
  if (spec.task) { const p = el("p", "desk-task"); p.append(md1(spec.task, env)); body.append(p); }
  const inp = el("input"); inp.id = uid("dki"); inp.type = c.kind === "slider" ? "range" : "number";
  inp.min = String(c.min); inp.max = String(c.max); inp.step = String(c.step);
  const v0 = st.v != null ? st.v : c.start; inp.value = String(v0);
  const lab = el("label", "desk-lab"); lab.htmlFor = inp.id; const labTx = el("span", "desk-lv");
  lab.append(labTx);
  const bars = el("div", "dbars"); bars.setAttribute("aria-hidden", "true");
  const scale = Math.max(1e-9, spec.scale ? evalExpr(spec.scale, envAt(c.start)) : Math.max(...spec.bars.map((b) => evalExpr(b.expr, envAt(c.start)))));
  const rows = spec.bars.map((b) => {
    const r = el("div", "dbar"); const l = el("span", "v-" + b.color + " dlab", b.label);
    const trk = el("span", "dtrk"); const fill = el("i", "f-" + b.color); trk.append(fill);
    if (spec.marker) trk.append(el("span", "dmk"));
    const val = el("span", "dval");
    r.append(l, trk, val); bars.append(r);
    return { b, fill, val, trk };
  });
  const legend = spec.marker ? el("p", "dlegend", spec.marker.label) : null;
  const work = el("p", "dwork");
  const stack = el("div", "dwork dwork-s");
  const verdict = el("div", "dverdict");
  const vi = el("span", "vi"); vi.setAttribute("aria-hidden", "true"); const vt = el("span"); verdict.append(vi, vt);
  const live = el("p", "sr"); live.setAttribute("aria-live", "polite");
  const reveal = el("p", "dreveal"); reveal.hidden = true;
  const firstFail = () => { for (let v = c.min; v <= c.max + 1e-9; v += c.step) if (!evalExpr(spec["pass-if"], envAt(v))) return v; return null; };
  const pred = spec.predict ? () => env.lc.find(spec.predict) : () => null;
  function paint(announce) {
    let v = Number(inp.value); if (!Number.isFinite(v)) v = c.start; v = Math.max(c.min, Math.min(c.max, v));
    const e = envAt(v);
    labTx.replaceChildren(md1(fillText(spec.label, e), env));
    if (spec.valuetext) inp.setAttribute("aria-valuetext", fillText(spec.valuetext, e));
    for (const r of rows) {
      const x = evalExpr(r.b.expr, e);
      r.fill.style.width = Math.max(0, Math.min(100, x / scale * 100)).toFixed(1) + "%";
      r.val.textContent = fmtVal("money", x);
      const mk = r.trk.querySelector(".dmk"); if (mk) mk.style.left = Math.min(100, evalExpr(spec.marker.expr, e) / scale * 100).toFixed(1) + "%";
    }
    work.textContent = fillText(spec.working, e);
    const st2 = stackWorking(spec, e);
    stack.hidden = !st2; work.classList.toggle("has-stack", !!st2);
    if (st2) stack.replaceChildren(st2);
    if (c.kind === "slider") {
      inp.style.setProperty("--fill", ((v - c.min) / Math.max(1e-9, c.max - c.min) * 100).toFixed(1) + "%");
      minus.setAttribute("aria-disabled", String(v <= c.min)); plus.setAttribute("aria-disabled", String(v >= c.max));
    }
    const ok = !!evalExpr(spec["pass-if"], e);
    const [vh, vb] = fillText(ok ? spec.pass : spec.fail, e).split(/\s*\|\s*/);
    verdict.dataset.v = ok ? "pass" : "fail"; vi.textContent = ok ? "✓" : "!";
    vt.replaceChildren(el("strong", "", vh + " "), vb || "");
    if (announce) live.textContent = `${inp.getAttribute("aria-valuetext") || v}. ${vh} ${vb || ""} ${work.textContent}`;
    if (!ok) st.reached = true;
    if (st.reached && spec.reveal) {
      const ff = firstFail();
      const text = ff == null ? "" : fillText(spec.reveal, envAt(ff));
      const p = pred();
      reveal.hidden = false; reveal.textContent = (p && p.pickText() ? `You predicted “${p.pickText()}”. ` : "") + text;
      if (p && p.outcome) p.outcome(text);
    }
    st.v = v; kcSave();
  }
  inp.addEventListener("input", () => paint(false));
  inp.addEventListener("change", () => paint(true));
  // − and + beside the slider: the same value, one step at a time, announced in the live region.
  const what = String(spec.label || "value").split(":")[0].replace(/[*_{}]/g, "").trim().toLowerCase() || "value";
  const stepBtn = (sign, text) => {
    const b = el("button", "btn dstep", text); b.type = "button";
    b.setAttribute("aria-label", `${sign < 0 ? "Decrease" : "Increase"} ${what} by ${c.step}`); b.setAttribute("aria-controls", inp.id);
    b.addEventListener("click", () => {
      if (b.getAttribute("aria-disabled") === "true") return;
      inp.value = String(Math.max(c.min, Math.min(c.max, Number(inp.value) + sign * c.step)));
      paint(true);
    });
    return b;
  };
  const minus = stepBtn(-1, "−"), plus = stepBtn(1, "+");
  let ctl = inp;
  if (c.kind === "slider") { ctl = el("div", "drange"); ctl.append(minus, inp, plus); }
  body.append(lab, ctl, bars); if (legend) body.append(legend); body.append(work, stack, verdict, live, reveal);
  const a = auditNote(spec.audit); if (a) body.append(a);
  s.append(hd, body);
  paint(false);
  return s;
}

/* ---------- knowledge check and exhibit question: select, Check answer, one retry ---------- */
function choiceBlock(spec, env, opts) {
  const st = kcGet(spec.id);
  const s = el("section", "lcard kc");
  const lab = el("p", "kc-label");
  const stem = H(env.hl, "kc-stem", ""); stem.id = uid("ks"); stem.append(md1(spec.stem, env));
  const grp = el("div", "kc-opts"); grp.setAttribute("aria-labelledby", stem.id);
  const bs = spec.options.map((o) => {
    const b = el("button", "kc-opt"); b.type = "button";
    const t = el("span", "kc-t"); t.append(el("strong", "kc-k", o.key + ". "), md1(o.text, env));
    b.append(t, el("span", "kc-tag"), el("span", "kc-why"));
    grp.append(b); return b;
  });
  const go = el("button", "btn primary kc-go", "Check answer"); go.type = "button";
  const fb = el("div", "kc-fb"); fb.setAttribute("role", "status");
  const key = spec.options.findIndex((o) => o.ok);
  st.tries = st.tries || 0;
  const it = env.lc.add({ id: spec.id, labelEl: lab, prefix: opts.prefix || "", done: () => !!st.final });
  const fix = radios(grp, bs, (k) => { if (st.final || st.wrong) return; st.pick = k; kcSave(); paint(); });
  go.addEventListener("click", () => {
    if (st.final) return;
    if (st.wrong) { st.wrong = false; st.pick = null; kcSave(); paint(); bs[0].focus(); return; }
    if (st.pick == null) { fb.replaceChildren(el("p", "kc-hint", "Pick an option first.")); return; }
    if (st.pick === key || st.tries >= 1) st.final = true; else st.wrong = true;
    st.tries += st.pick === key ? 0 : 1; kcSave(); paint(); env.lc.changed();
    if (st.final && opts.onFinal) opts.onFinal();
  });
  function paint() {
    bs.forEach((b, k) => {
      const o = spec.options[k], tag = b.querySelector(".kc-tag"), why = b.querySelector(".kc-why");
      b.setAttribute("aria-checked", String(st.pick === k)); delete b.dataset.r; tag.textContent = ""; why.textContent = "";
      if (st.final || st.wrong) b.setAttribute("aria-disabled", "true"); else b.removeAttribute("aria-disabled");
      if (st.final && k === key) { b.dataset.r = "right"; tag.textContent = st.pick === k ? "✓ Your answer · Correct answer" : "✓ Correct answer"; }
      else if ((st.final || st.wrong) && st.pick === k) { b.dataset.r = "wrong"; tag.textContent = "✗ Your answer"; }
      if (st.final || (st.wrong && st.pick === k)) why.replaceChildren(md1(o.why, env));
    });
    go.textContent = st.final ? "Answered" : st.wrong ? "Try again" : "Check answer";
    if (st.final) go.setAttribute("aria-disabled", "true"); else go.removeAttribute("aria-disabled");
    fb.replaceChildren();
    if (st.final || st.wrong) {
      const ok = st.pick === key;
      fb.append(el("p", "kc-fh", ok ? "Correct." : st.final ? `Not quite. The answer is ${spec.options[key].key}.` : "Not quite. You have one more try."));
      const w = el("p"); w.append(md1(spec.options[st.pick].why, env)); fb.append(w);
      if (st.final && spec.working) fb.append(el("p", "kc-work", "Working: " + spec.working));
      if (st.final && spec.next) { const n = el("div"); n.append(mdB(spec.next, env)); fb.append(n); }
    }
    fb.hidden = !fb.childNodes.length;
    fix();
    if (opts.onPaint) opts.onPaint(!!st.final);
  }
  s.append(lab, stem, grp, go, fb);
  const a = auditNote(spec.audit); if (a) s.append(a);
  it.repaint = paint; paint();
  return s;
}
const compCheck = (spec, env) => choiceBlock(spec, env, {});
function compExhibit(spec, env) {
  const wrap = el("div", "exhibit");
  const card = el("section", "lcard dsheet exh");
  card.append(dealHead({ ...spec, kicker: spec.title }, env, ""));
  if (spec.caption) card.append(el("p", "exh-cap", spec.caption));
  const tbl = ledger(spec.table, env, "");
  card.append(tbl);
  const flags = (spec.flag || "").split(/\s*,\s*/).filter(Boolean).map((x) => x.toLowerCase());
  const mark = (on) => {
    for (const tr of tbl.querySelectorAll("tbody tr")) {
      const c = tr.children[0]; const hit = on && c && flags.includes(c.textContent.replace(spec["flag-text"] || "", "").trim().toLowerCase());
      tr.classList.toggle("flagged", !!hit);
      const old = c && c.querySelector(".flagtx"); if (old) old.remove();
      if (hit) c.append(el("span", "flagtx", spec["flag-text"] || "Flagged"));
    }
  };
  const q = choiceBlock(spec, env, { prefix: "Exhibit question · ", onPaint: (fin) => mark(fin) });
  wrap.append(card, q);
  return wrap;
}

/* ---------- committee case: sequential decisions with consequence and policy ---------- */
function compCase(spec, env) {
  const st = kcGet(spec.id);
  const D = spec.decisions;
  st.picks = st.picks || D.map(() => null); st.done = st.done || D.map(() => false); st.step = st.step || 0;
  const wrap = el("div", "case");
  const head = el("section", "lcard dsheet");
  head.append(dealHead({ ...spec }, env, spec.title));
  if (spec.intro) { const p = el("p", "case-intro"); p.append(md1(spec.intro, env)); head.append(p); }
  const sit = el("section", "lcard");
  sit.append(H(env.hl, "", "The situation")); if (spec.situation) sit.append(mdB(spec.situation, env)); if (spec.table) sit.append(ledger(spec.table, env, ""));
  const box = el("div", "case-d");
  const it = env.lc.add({ id: spec.id, labelEl: null, prefix: "", done: () => st.done.every(Boolean) });
  wrap.append(head, sit, box);
  function decision(d, i) {
    const s = el("section", "lcard kc decision");
    s.append(el("p", "kc-label", `Decision ${i + 1} of ${D.length}`));
    const h = H(env.hl, "kc-stem", d.title); h.id = uid("cd"); s.append(h);
    const stem = el("p"); stem.append(md1(d.stem, env)); s.append(stem);
    const grp = el("div", "kc-opts"); grp.setAttribute("aria-labelledby", h.id);
    const key = d.options.findIndex((o) => o.ok);
    const bs = d.options.map((o, k) => {
      const b = el("button", "kc-opt"); b.type = "button";
      const t = el("span", "kc-t"); t.append(el("strong", "kc-k", o.key + ". "), md1(o.text, env));
      const tag = el("span", "kc-tag");
      b.setAttribute("aria-checked", String(st.picks[i] === k));
      if (st.done[i]) { b.setAttribute("aria-disabled", "true"); if (k === key) { b.dataset.r = "right"; tag.textContent = st.picks[i] === k ? "✓ Your answer · Best answer" : "✓ Best answer"; } else if (st.picks[i] === k) { b.dataset.r = "wrong"; tag.textContent = "✗ Your answer"; } }
      b.append(t, tag); grp.append(b); return b;
    });
    const fix = radios(grp, bs, (k) => { if (st.done[i]) return; st.picks[i] = k; kcSave(); render(); s.querySelectorAll(".kc-opt")[k].focus(); });
    fix();
    s.append(grp);
    const commit = el("button", "btn primary", st.done[i] ? "Decision committed" : st.picks[i] == null ? "Choose an option to commit" : "Commit decision"); commit.type = "button";
    if (st.done[i] || st.picks[i] == null) commit.setAttribute("aria-disabled", "true");
    commit.addEventListener("click", () => { if (st.done[i] || st.picks[i] == null) return; st.done[i] = true; kcSave(); render(); env.lc.changed(); const r = box.querySelectorAll(".case-res")[i]; if (r) { r.tabIndex = -1; r.focus(); } });
    s.append(commit);
    if (st.done[i]) {
      const ch = d.options[st.picks[i]], best = d.options[key], right = st.picks[i] === key;
      const res = el("div", "case-res"); res.setAttribute("role", "status");
      const rh = el("p", "case-rh"); rh.dataset.v = right ? "pass" : "fail"; rh.textContent = right ? "✓ Your decision matches the committee's." : "✗ The committee would decide differently.";
      const row = (k, node) => { const p = el("p"); p.append(el("strong", "", k + " "), node); return p; };
      res.append(rh, row("Your answer:", md1(`${ch.key}. ${ch.text}`, env)), row("Best answer:", md1(`${best.key}. ${best.text}${right ? "" : " " + best.why}`, env)), row("What happens:", md1(ch.why, env)));
      const pol = el("p", "case-pol"); pol.append(el("strong", "", "What the policy says: "), md1(d.policy, env)); res.append(pol);
      if (d.working) res.append(el("p", "kc-work", "Working: " + d.working));
      s.append(res);
      if (st.step === i) {
        const nx = el("button", "btn", i < D.length - 1 ? "Next decision ›" : "See the debrief ›"); nx.type = "button";
        nx.addEventListener("click", () => { st.step = i + 1; kcSave(); render(); const t = box.querySelectorAll(".decision")[i + 1] || box.querySelector(".debrief"); if (t) { const hh = t.querySelector("h2, h3, h4, h5"); if (hh) focusHeading(hh); } });
        s.append(nx);
      }
    }
    return s;
  }
  function render() {
    box.replaceChildren();
    D.forEach((d, i) => { if (st.step >= i) box.append(decision(d, i)); });
    if (st.step >= D.length) {
      const nRight = D.filter((d, i) => st.done[i] && d.options[st.picks[i]] && d.options[st.picks[i]].ok).length;
      const db = el("section", "lcard debrief");
      const dh = el("div", "desk-h"); dh.append(H(env.hl, "", "What the committee decided and why"), el("span", "desk-tag", `${nRight} OF ${D.length} MATCH THE COMMITTEE · PRACTICE`));
      const b = el("div", "desk-b"); if (spec.debrief) b.append(mdB(spec.debrief, env));
      const again = el("button", "btn", "Start the case again"); again.type = "button";
      again.addEventListener("click", () => { st.picks = D.map(() => null); st.done = D.map(() => false); st.step = 0; kcSave(); render(); env.lc.changed(); focusHeading(box.querySelector(".kc-stem")); });
      b.append(again); db.append(dh, b); box.append(db);
    }
    markScrollers(box);
  }
  render();
  return wrap;
}

const COMPONENTS = {
  highlights: (s, e) => compList(s, e, "Key highlights", "hl-top"), takeaways: (s, e) => compList(s, e, "Key takeaways", "hl-end"),
  objectives: compObjectives, policy: compPolicy, formula: compFormula, worked: compWorked, predict: compPredict,
  desk: compDesk, check: compCheck, exhibit: compExhibit, case: compCase,
};
function buildComp(spec, env) {
  const f = COMPONENTS[spec.type];
  if (!f) return el("p", "loading", "This block type is not supported.");
  try { return f(spec, env); } catch (e) { console.error(e); return el("p", "loading", "This exercise could not load."); }
}
/**
 * Rendered nodes -> white cards. A heading at splitTag starts a new card; each component is its own card.
 * comps are the module's or sample's block specs.
 */
function cardify(nodes, splitTag, comps, env) {
  const out = []; let cur = null;
  const flush = () => { if (cur && cur.childNodes.length) out.push(cur); cur = null; };
  for (const n of nodes) {
    if (n.nodeType === 3 && !n.textContent.trim()) continue;
    if (n.nodeType === 1 && n.classList.contains("bplc")) {
      flush(); const spec = comps[Number(n.dataset.i)];
      if (spec && spec.type !== "lesson" && spec.type !== "objectives") { env.idx = Number(n.dataset.i); out.push(buildComp(spec, env)); }
      continue;
    }
    if (n.nodeType === 1 && n.tagName === splitTag) flush();
    if (!cur) cur = el("section", "lcard prose");
    cur.append(n);
  }
  flush();
  return out;
}
