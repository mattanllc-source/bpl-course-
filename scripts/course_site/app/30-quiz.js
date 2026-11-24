/* ---------- hide answers until asked ---------- */
const KEY_RE = /^(answer key|model answer)/i;
const startsBold = (n) => n && n.tagName === "P" && n.firstElementChild && n.firstElementChild.tagName === "STRONG" && n.firstChild === n.firstElementChild;
const isKeyLabel = (n) => startsBold(n) && KEY_RE.test(n.firstElementChild.textContent.trim());
let uidN = 0;
const uid = (p) => `${p}-${++uidN}`;
function hideAnswers(root) {
  for (const p of [...root.querySelectorAll("p")]) {
    if (!isKeyLabel(p) || !p.parentNode || p.closest(".qans")) continue;
    const first = p.firstElementChild;
    const d = el("details", "key");
    const label = first.textContent.replace(/[.:]\s*$/, "");
    d.append(el("summary", "", "Show " + label.charAt(0).toLowerCase() + label.slice(1))); p.before(d);
    let n = p;
    while (n) {
      const next = n.nextElementSibling;
      d.append(n);
      if (!next || /^(H[1-4]|HR|DETAILS)$/.test(next.tagName) || startsBold(next)) break;
      n = next;
    }
  }
  for (const s of [...root.querySelectorAll("strong")]) {
    if (!/^answer:?$/i.test(s.textContent.trim()) || s.closest("details.key, .qans")) continue;
    const span = el("span", "ans"); span.hidden = true; span.id = uid("ans");
    const b = el("button", "reveal", "Show answer"); b.type = "button"; b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", span.id);
    b.addEventListener("click", () => { span.hidden = !span.hidden; b.setAttribute("aria-expanded", String(!span.hidden)); b.textContent = span.hidden ? "Show answer" : "Hide answer"; });
    s.before(b);
    while (s.nextSibling) span.append(s.nextSibling);
    span.prepend(s, " ");
    b.after(" ", span);
  }
}

/* ---------- block frames keyed on bold labels ---------- */
function grab(p, cls) {
  const d = el("div", cls); p.before(d);
  let n = p;
  while (n) {
    const next = n.nextElementSibling;
    d.append(n);
    if (!next || /^(H[1-6]|HR|DETAILS)$/.test(next.tagName) || startsBold(next)) break;
    n = next;
  }
  return d;
}
function frameBlocks(root) {
  for (const p of [...root.querySelectorAll("p")]) {
    if (!p.parentNode || !startsBold(p) || p.closest(".wx, .rubric, .qcard")) continue;
    const st = p.firstElementChild, t = st.textContent.trim();
    if (/^Worked example\s*\d+/i.test(t)) {
      const m = /^(Worked example\s*\d+)\s*[:.]?\s*(.*)$/i.exec(t);
      if (m && m[2] && p.childNodes.length === 1) { st.textContent = m[1]; st.after(document.createTextNode(m[2])); }
      grab(p, "wx");
    }
    else if (/^Rubric/i.test(t)) grab(p, "rubric");
    else if (/^(Checkpoint|What-if)/i.test(t)) p.classList.add("callout");
    else if (/^In this module$/i.test(t)) p.classList.add("inmod");
    else if (/^(The point|Key idea|Key point)\.?$/i.test(t)) { p.classList.add("keyidea"); st.textContent = "Key idea"; }
    else if (t.length <= 90 && /[.:?]$/.test(t) && p.parentElement === root) { p.classList.add("lead-in-p"); st.classList.add("lead-in"); }
  }
}

/* ---------- quiz and practice cards ---------- */
function makeSaver(qs, key) {
  let t = null, dirty = false;
  const flush = () => { clearTimeout(t); if (!dirty) return; dirty = false; store.saveQuiz(key, qs); };
  const touch = () => { dirty = true; clearTimeout(t); t = setTimeout(flush, 800); };
  flushers.push(flush);
  return { flush, touch };
}
function answerBox(label, value, onInput, placeholder) {
  const ta = el("textarea"); ta.value = value || ""; ta.placeholder = placeholder; ta.setAttribute("aria-label", label);
  ta.addEventListener("input", () => onInput(ta.value));
  return ta;
}
function takeCritical(body) {
  let crit = false;
  for (const e of [...body.querySelectorAll("em, strong")]) {
    if (!body.contains(e) || !/^\(critical\)$/i.test(e.textContent.trim())) continue;
    crit = true;
    let t = e;
    while (t.parentElement && t.parentElement !== body && t.parentElement.textContent.trim() === e.textContent.trim()) t = t.parentElement;
    t.remove();
  }
  return crit;
}
/** Pull "A) ..." option lines out of a question body. Returns [{letter, nodes}] or null. */
function takeOptions(body) {
  const ul = [...body.querySelectorAll("ul")].find((u) => { const ls = [...u.children]; return ls.length >= 2 && ls.every((li) => /^[A-F]\)\s/.test(li.textContent.trim())); });
  if (!ul) return null;
  const opts = [...ul.children].map((li) => {
    const letter = li.textContent.trim()[0];
    const first = li.firstChild; if (first && first.nodeType === 3) first.nodeValue = first.nodeValue.replace(/^\s*[A-F]\)\s*/, "");
    return { letter, nodes: [...li.childNodes] };
  });
  ul.remove();
  return opts;
}
function revealToggle(btn, panel, labels) {
  panel.id = panel.id || uid("rev"); btn.setAttribute("aria-controls", panel.id);
  const set = (open) => { panel.hidden = !open; btn.setAttribute("aria-expanded", String(open)); btn.textContent = open ? labels[1] : labels[0]; };
  set(!panel.hidden);
  return set;
}
/**
 * The module quiz, graded. Taking: one item per screen, no feedback until you submit.
 * Review: score and verdict first, missed items first with "Your answer" and "Correct answer",
 * the rationale, a link back to the lesson, and a retake with the other form.
 * Open-response items are self-marked on the review page (Got it / Missed it).
 */
function buildQuiz(sec, qs, saver, m) {
  qs.submitted = qs.submitted || {};
  const groups = []; let cur = null;
  for (const n of [...sec.children]) {
    if (n.tagName === "H3") { cur = { h: n, nodes: [] }; groups.push(cur); } else if (cur) cur.nodes.push(n);
  }
  const sets = [];
  const objPage = (o) => (m && m.objPages && o && m.objPages[o]) || 0;
  for (const g of groups) {
    const setId = ((/Set\s+([A-Za-z0-9]+)/i.exec(g.h.textContent) || [, g.h.textContent.trim()])[1]).toUpperCase();
    const ki = g.nodes.findIndex(isKeyLabel);
    let keyOl = null;
    if (ki >= 0) keyOl = g.nodes.slice(ki + 1).find((n) => n.tagName === "OL") || null;
    const ol = g.nodes.find((n) => n.tagName === "OL" && n !== keyOl);
    if (!ol) continue;
    g.h.textContent = g.h.textContent.replace(/\bSet\s+([A-Za-z0-9]+)/i, "Form $1");
    g.h.classList.add("sr");              // the form heading is for screen readers and focus; the course picks the form
    const items = [...ol.children].filter((x) => x.tagName === "LI");
    const panel = el("div", "qpanel"); panel.dataset.set = setId;
    const cards = [];
    items.forEach((li, i) => {
      const id = `${setId}${i + 1}`;
      const ansBox = el("div");
      const st = [...li.querySelectorAll("strong")].find((s) => /^answer:?$/i.test(s.textContent.trim()) && s.parentNode === li);
      if (st) { let n = st.nextSibling; while (n) { const nx = n.nextSibling; ansBox.append(n); n = nx; } st.remove(); }
      else if (keyOl && keyOl.children[i]) ansBox.append(...keyOl.children[i].childNodes);
      const body = el("div", "qbody");
      while (li.firstChild) body.append(li.firstChild);
      const qo = body.querySelector(".qo"); const obj = qo ? qo.dataset.o : ""; for (const x of body.querySelectorAll(".qo")) x.remove();
      const crit = takeCritical(body);
      const opts = takeOptions(body);
      let correct = null;
      if (opts) {
        const tn = ansBox.firstChild && ansBox.firstChild.nodeType === 1 && ansBox.firstChild.tagName === "P" ? ansBox.firstChild.firstChild : ansBox.firstChild;
        const lm = tn && tn.nodeType === 3 ? /^\s*([A-F])[.):]\s*/.exec(tn.nodeValue) : null;
        if (lm && opts.some((o) => o.letter === lm[1])) { correct = lm[1]; tn.nodeValue = tn.nodeValue.slice(lm[0].length); }
      }
      linkIds(body, "quiet"); linkIds(ansBox, "quiet");
      const card = el("article", "qcard"); card.dataset.id = id; if (crit) card.dataset.critical = "1";
      const head = el("div", "qhead"); const qn = el("span", "qnum", `Question ${i + 1} of ${items.length}`); qn.id = uid("q"); head.append(qn);
      if (crit) head.append(el("span", "crit", "Critical item"));
      head.append(el("span", "qgrade", "Graded · no feedback until you submit"));
      card.setAttribute("aria-labelledby", qn.id);
      card.append(head, body);
      const c = { id, n: i + 1, crit, card, body, ansBox, obj, mc: !!(opts && correct), correct, opts: opts || [] };
      if (c.mc) {
        const grp = el("div", "opts"); grp.setAttribute("role", "group"); grp.setAttribute("aria-label", `Options for question ${i + 1}`);
        c.btns = opts.map((o) => {
          const b = el("button", "opt"); b.type = "button"; b.dataset.letter = o.letter;
          const tx = el("span", "otx"); tx.append(...o.nodes); linkIdsPlain(tx);
          b.append(el("span", "ltr", o.letter), tx, el("span", "mk"));
          b.addEventListener("click", () => { if (qs.submitted[setId]) return; qs.answers[id] = o.letter; saver.touch(); c.paint(); paintMap(); });
          grp.append(b); return b;
        });
        c.paint = () => { for (const b of c.btns) b.setAttribute("aria-pressed", String(qs.answers[id] === b.dataset.letter)); };
        card.append(grp);
      } else {
        if (opts) { const ul = el("ul"); for (const o of opts) { const li2 = el("li"); li2.append(`${o.letter}) `, ...o.nodes); ul.append(li2); } body.append(ul); }
        c.ta = answerBox(`Your answer to question ${i + 1}`, qs.answers[id], (v) => { qs.answers[id] = v; saver.touch(); paintMap(); }, "Your answer and working");
        c.paint = () => { c.ta.value = qs.answers[id] || ""; };
        card.append(c.ta);
      }
      c.paint();
      cards.push(c);
    });
    const answered = (c) => !!String(qs.answers[c.id] || "").trim();
    // ---- taking ----
    const take = el("div", "qtake");
    const stage = el("div", "qstage");
    const dots = el("ol", "qdots"); dots.setAttribute("aria-hidden", "true");
    const dotEls = cards.map(() => { const d = el("li"); dots.append(d); return d; });
    const nav = el("div", "qnav");
    const prev = el("button", "btn", "‹ Previous"); prev.type = "button";
    const next = el("button", "btn primary", "Next ›"); next.type = "button";
    nav.append(prev, next);
    const side = el("section", "card qside"); side.setAttribute("aria-label", `Your answers, Form ${setId}`);
    const sideH = el("h4", "", "Your answers");
    const cnt = el("p", "qcount"); cnt.setAttribute("role", "status");
    const map = el("ol", "qmap"); map.setAttribute("aria-label", "Questions");
    const mapBtns = cards.map((c, k) => { const li = el("li"); const b = el("button"); b.type = "button"; b.append(String(k + 1), el("span", "sr", "")); b.addEventListener("click", () => show(k, true)); li.append(b); map.append(li); return b; });
    const submit = el("button", "btn primary", "Submit quiz"); submit.type = "button";
    const warn = el("p", "qwarn"); warn.setAttribute("role", "status");
    const critN = cards.filter((c) => c.crit).length;
    side.append(sideH, cnt, map, submit, warn);
    take.append(dots, stage, nav, side);
    let at = 0, armed = false;
    function paintMap() {
      const n = cards.filter(answered).length;
      cnt.textContent = `${n} of ${cards.length} answered. You can return to any question before you submit.`;
      mapBtns.forEach((b, k) => { const a = answered(cards[k]); b.dataset.a = a ? "1" : ""; b.querySelector(".sr").textContent = a ? ", answered" : ", not answered"; if (k === at) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
      dotEls.forEach((d, k) => { d.dataset.a = answered(cards[k]) ? "1" : ""; d.dataset.cur = k === at ? "1" : ""; });
      armed = false; warn.textContent = ""; submit.textContent = "Submit quiz";
      paintStrip();
    }
    function show(k, focus) {
      at = Math.max(0, Math.min(cards.length - 1, k));
      stage.replaceChildren(cards[at].card);
      prev.disabled = at === 0; next.textContent = at === cards.length - 1 ? "Review your answers ›" : "Next ›";
      paintMap();
      if (focus) { const t = cards[at].card.querySelector(".qnum"); t.tabIndex = -1; t.focus({ preventScroll: true }); cards[at].card.scrollIntoView({ block: "nearest" }); }
      document.dispatchEvent(new CustomEvent("bpl:layout"));
    }
    prev.addEventListener("click", () => show(at - 1, true));
    next.addEventListener("click", () => { if (at === cards.length - 1) { submit.focus(); return; } show(at + 1, true); });
    submit.addEventListener("click", () => {
      const left = cards.length - cards.filter(answered).length;
      if (left && !armed) { armed = true; warn.textContent = `${left} ${left === 1 ? "question is" : "questions are"} not answered. Press Submit quiz again to submit anyway.`; submit.textContent = "Submit anyway"; return; }
      for (const c of cards) if (c.mc) qs.marks[c.id] = qs.answers[c.id] === c.correct ? "got" : "missed";
      qs.submitted[setId] = { at: new Date().toISOString() };
      score(); saver.touch(); paint(true);
    });
    // ---- review ----
    const review = el("div", "qreview");
    function score() {
      const total = cards.length, need = Math.ceil(PASS * total - 1e-9);
      const got = cards.filter((c) => qs.marks[c.id] === "got").length;
      const marked = cards.filter((c) => qs.marks[c.id]).length;
      const missedCrit = cards.filter((c) => c.crit && qs.marks[c.id] === "missed").map((c) => c.n);
      const pass = !missedCrit.length && marked === total && got >= need;
      const sub = qs.submitted[setId];
      if (sub) Object.assign(sub, { got, total, marked, need, critMissed: missedCrit, pass, form: setId, module: m ? m.key : "" });
      return { total, need, got, marked, missedCrit, pass };
    }
    function reviewItem(c) {
      const art = el("article", "qitem"); art.dataset.r = qs.marks[c.id] || "open"; art.id = `qi-${m ? m.key : "x"}-${c.id}`;
      const top = el("p", "qitop"); top.append(el("span", "qnum", `Question ${c.n}`)); if (c.crit) top.append(el("span", "crit", "Critical item"));
      const stem = el("div", "qbody"); stem.append(...[...c.body.childNodes].map((x) => x.cloneNode(true)));
      art.append(top, stem);
      const ans = String(qs.answers[c.id] || "");
      if (c.mc) {
        const grid = el("div", "qpair");
        const box = (letter, kind) => {
          const o = c.opts.find((x) => x.letter === letter);
          const d = el("div", "qans-opt"); d.dataset.r = kind;
          const tx = el("span", "otx"); if (o) tx.append(...o.nodes.map((x) => x.cloneNode(true)));
          d.append(el("b", "", `${letter}. `), tx, el("span", "mk", kind === "right" ? (ans === c.correct ? "✓ Your answer · Correct answer" : "✓ Correct answer") : "✗ Your answer"));
          return d;
        };
        if (!ans) grid.append(Object.assign(el("div", "qans-opt"), { textContent: "No answer given." }));
        else if (ans !== c.correct) grid.append(box(ans, "wrong"));
        grid.append(box(c.correct, "right"));
        art.append(grid);
      } else {
        const yours = el("div", "qopen"); yours.append(el("span", "lab", "Your answer"), el("p", "", ans || "No answer given."));
        const model = el("div", "qopen"); const mt = el("div", "ans-text"); mt.append(...[...c.ansBox.childNodes].map((x) => x.cloneNode(true)));
        model.append(el("span", "lab", "Model answer"), mt);
        const marks = el("div", "qacts"); marks.setAttribute("role", "group"); marks.setAttribute("aria-label", `Mark question ${c.n}`);
        const got = el("button", "btn sm", "Got it"), miss = el("button", "btn sm miss", "Missed it"); got.type = miss.type = "button";
        const setMark = (v) => { qs.marks[c.id] = v; score(); saver.touch(); paint(false, c.id); };
        got.addEventListener("click", () => setMark("got")); miss.addEventListener("click", () => setMark("missed"));
        got.setAttribute("aria-pressed", String(qs.marks[c.id] === "got")); miss.setAttribute("aria-pressed", String(qs.marks[c.id] === "missed"));
        marks.append(el("span", "qhint", qs.marks[c.id] ? "Marked." : "Compare, then mark it:"), got, miss);
        art.append(yours, model, marks);
      }
      if (c.mc && c.ansBox.textContent.trim()) { const why = el("div", "qwhy"); why.append(el("b", "", "Why: ")); const at2 = el("span", "ans-text"); at2.append(...[...c.ansBox.childNodes].map((x) => x.cloneNode(true))); why.append(at2); art.append(why); }
      const p = objPage(c.obj);
      const link = el("a", "qlink", p ? `Review lesson ${m.code.slice(1)}.${p}` : "Review the lessons"); link.href = m ? `#${m.key}/learn${p ? "/" + p : ""}` : "#home";
      const lp = el("p", "qlinkp"); lp.append(link); art.append(lp);
      return art;
    }
    function paintReview(focusId) {
      const s = score();
      review.replaceChildren();
      const head = el("section", "card qscore"); head.setAttribute("aria-labelledby", `qs-${setId}`);
      const tx = el("div", "qs-tx");
      const lab = el("p", "eyebrow", `Form ${setId} review`);
      const h = el("h4", "qs-h"); h.id = `qs-${setId}`; h.tabIndex = -1;
      h.append(`${s.got} of ${s.total} correct `, el("span", "qs-pct", `${s.total ? Math.round(s.got / s.total * 100) : 0}%`));
      const rule = el("p", "", `Pass mark: ${Math.round(PASS * 100)}% (${s.need} of ${s.total})${critN ? " with every critical item correct" : ""}.${s.missedCrit.length ? ` You missed ${s.missedCrit.length} critical ${s.missedCrit.length === 1 ? "item" : "items"}.` : ""}`);
      tx.append(lab, h, rule);
      const open = s.total - s.marked;
      const verdict = el("div", "qverdict"); verdict.setAttribute("role", "status");
      const kind = open ? "wait" : s.pass ? "pass" : "fail"; verdict.dataset.v = kind;
      verdict.append(el("span", "vi", kind === "pass" ? "✓" : kind === "fail" ? "!" : "…"));
      const vt = el("span");
      if (kind === "wait") vt.append(el("strong", "", "Not scored yet. "), `Mark the ${open} open ${open === 1 ? "answer" : "answers"} below against the model answer.`);
      else if (kind === "pass") vt.append(el("strong", "", "Passed. "), "You met the pass mark with every critical item correct.");
      else if (s.missedCrit.length) vt.append(el("strong", "", "Not passed yet. "), `A critical item was missed (question ${s.missedCrit.join(", ")}). Review it, then retake with the other form.`);
      else vt.append(el("strong", "", "Not passed yet. "), "You are below the pass mark. Review the missed items, then retake with the other form.");
      verdict.append(vt);
      const acts = el("div", "qend");
      const other = sets.find((x) => x.id !== setId);
      if (other) { const b = el("button", "btn primary", "Retake the quiz"); b.type = "button"; b.addEventListener("click", () => { other.reset(); showSet(other.id, true); }); acts.append(b); }
      const jump = el("a", "btn", "Jump to missed items"); jump.href = "#"; jump.addEventListener("click", (e) => { e.preventDefault(); const t = review.querySelector(".qmissed-h"); if (t) { t.tabIndex = -1; t.scrollIntoView({ block: "start" }); t.focus({ preventScroll: true }); } });
      acts.append(jump);
      // With one form, a retake clears it; with two, every retake uses the other form.
      if (!other) { const again = el("button", "btn", "Clear your answers and start again"); again.type = "button"; again.addEventListener("click", () => { resetSet(); paint(true); }); acts.append(again); }
      head.append(tx, verdict, acts);
      if (other) head.append(el("p", "fine qs-next", `A retake uses Form ${other.id}, with different questions.`));
      review.append(head);
      const missed = cards.filter((c) => qs.marks[c.id] === "missed"), opens = cards.filter((c) => !qs.marks[c.id]), right = cards.filter((c) => qs.marks[c.id] === "got");
      if (opens.length) { const h2 = el("h4", "qsec-h", `To mark (${opens.length})`); review.append(h2, ...opens.map(reviewItem)); }
      const mh = el("h4", "qsec-h qmissed-h", missed.length ? `Missed items first (${missed.length})` : "No missed items");
      review.append(mh, ...missed.map(reviewItem));
      if (right.length) { const d = el("details", "qright"); d.append(el("summary", "", `Correct items (${right.length})`), ...right.map(reviewItem)); review.append(d); }
      if (focusId) { const t = $(`qi-${m ? m.key : "x"}-${focusId}`); if (t) t.querySelector("button[aria-pressed='true']")?.focus(); }
      paintStrip();
    }
    function paint(focus, focusId) {
      const done = !!qs.submitted[setId];
      take.hidden = done; review.hidden = !done;
      if (done) { paintReview(focusId); if (focus) focusHeading(review.querySelector(".qs-h")); }
      else { show(at, false); if (focus) focusHeading(g.h); }
      document.dispatchEvent(new CustomEvent("bpl:layout"));
    }
    function resetSet() { for (const c of cards) { delete qs.answers[c.id]; delete qs.marks[c.id]; c.paint(); } delete qs.submitted[setId]; at = 0; saver.touch(); }
    if (ki >= 0) { g.nodes[ki].remove(); if (keyOl) keyOl.remove(); }
    ol.remove();
    g.h.before(panel); g.h.tabIndex = -1;
    panel.append(g.h, ...g.nodes.filter((n) => n.isConnected && n !== ol), take, review);
    const S = { id: setId, panel, reset: resetSet, cards, h: g.h, paint, score };
    sets.push(S);
    paint(false);
  }
  function paintStrip() { if (m) document.dispatchEvent(new CustomEvent("bpl:quiz")); }
  function showSet(id, focus) {
    for (const s of sets) s.panel.hidden = s.id !== id;
    savePos(m ? m.key : "x", { qset: id });
    const s = sets.find((x) => x.id === id);
    if (s) s.paint(focus);
    document.dispatchEvent(new CustomEvent("bpl:layout"));
  }
  // No form tabs: the course assigns Form A first and the other form on each retake.
  // The quiz rules fold into "How this quiz works" so the first question shows on the first screen.
  if (sets.length) {
    const intro = [];
    for (const n of [...sec.children]) { if (n === sets[0].panel) break; if (n.tagName !== "H2") intro.push(n); }
    const anyCrit = sets.some((x) => x.cards.some((c) => c.crit));
    const how = el("details", "qhowto"); const sm = el("summary");
    sm.append(el("span", "qh-t", "How this quiz works"), el("span", "qh-s", `Pass mark ${Math.round(PASS * 100)}%${anyCrit ? " · every critical item correct" : ""}`));
    const ul = el("ul", "qhow");
    for (const t of [`Pass mark ${Math.round(PASS * 100)}%${anyCrit ? ", with every critical item correct" : ""}.`, "Graded. No feedback until you submit.", "You cannot change answers after you submit.", sets.length > 1 ? "A retake uses the other form, with different questions." : ""]) if (t) ul.append(el("li", "", t));
    const body = el("div", "qh-b"); body.append(...intro, ul);
    how.append(sm, body);
    sets[0].panel.before(how);
  }
  if (sets.length > 1) {
    const saved = m && pos[m.key] && pos[m.key].qset;
    const withWork = sets.find((s) => s.cards.some((c) => qs.answers[c.id] || qs.marks[c.id]));
    showSet((sets.find((s) => s.id === saved) || withWork || sets[0]).id, false);
  }
  return sets;
}
/** Wrap IDs inside an option so they never break; options stay plain (the whole option is one button). */
function linkIdsPlain(root) { linkIds(root, "plain"); }
const RATINGS = [["matched", "Matched"], ["partly", "Partly"], ["missed", "Missed"]];
function buildPractice(sec, qs, saver) {
  const kids = [...sec.children];
  for (const n of kids) {
    if (isKeyLabel(n)) break;
    if (n.tagName !== "OL") continue;
    const items = [...n.children].filter((x) => x.tagName === "LI");
    // A shared key after the list ("**Model answer**" then a numbered list) maps to the items one to one.
    let keyLabel = null, keyOl = null;
    for (let k = n.nextElementSibling; k; k = k.nextElementSibling) {
      if (/^H[1-3]$/.test(k.tagName)) break;
      if (isKeyLabel(k)) { keyLabel = k; const o = k.nextElementSibling; if (o && o.tagName === "OL" && o.children.length === items.length) keyOl = o; break; }
    }
    const wrap = el("div", "qset");
    items.forEach((li, i) => {
      const id = String(i + 1);
      const card = el("article", "qcard");
      const body = el("div", "qbody"), ansNodes = [];
      let inAns = false;
      for (const c of [...li.childNodes]) {
        if (!inAns && c.nodeType === 1 && isKeyLabel(c)) { inAns = true; const rest = c.cloneNode(true); rest.firstElementChild.remove(); if (rest.textContent.trim()) ansNodes.push(rest); continue; }
        if (inAns) ansNodes.push(c); else body.append(c);
      }
      if (!ansNodes.length && keyOl) ansNodes.push(...keyOl.children[i].childNodes);
      const head = el("div", "qhead"); const qn = el("span", "qnum", `Practice ${i + 1} of ${items.length}`); qn.id = uid("p"); head.append(qn);
      card.setAttribute("aria-labelledby", qn.id);
      const ta = answerBox(`Your answer to practice item ${i + 1}`, qs.practice[id], (v) => { qs.practice[id] = v; saver.touch(); }, "Your working and answer");
      card.append(head, body, ta);
      if (ansNodes.length) {
        const acts = el("div", "qacts");
        const rev = el("button", "btn sm", "Show model answer"); rev.type = "button";
        const hint = el("span", "qhint"); hint.setAttribute("role", "status");
        acts.append(rev, hint);
        const ans = el("div", "qans"); ans.hidden = true;
        const at = el("div", "ans-text"); at.append(...ansNodes);
        const rate = el("div", "qacts"); rate.setAttribute("role", "group"); rate.setAttribute("aria-label", "How close were you?");
        rate.append(el("span", "qhint", "How close were you?"));
        const rb = RATINGS.map(([v, label]) => {
          const b = el("button", "btn sm" + (v === "missed" ? " miss" : ""), label); b.type = "button";
          b.addEventListener("click", () => { qs.practice["r" + id] = qs.practice["r" + id] === v ? "" : v; paint(); saver.touch(); });
          rate.append(b); return [v, b];
        });
        const paint = () => { for (const [v, b] of rb) b.setAttribute("aria-pressed", String(qs.practice["r" + id] === v)); };
        paint();
        ans.append(el("span", "lab", "Model answer"), at, rate);
        const setOpen = revealToggle(rev, ans, ["Show model answer", "Hide model answer"]);
        let nudged = false;
        rev.addEventListener("click", () => {
          if (ans.hidden && !ta.value.trim() && !nudged) { nudged = true; hint.textContent = "Work it yourself first. Press again to show the answer anyway."; ta.focus(); return; }
          hint.textContent = ""; setOpen(ans.hidden); document.dispatchEvent(new CustomEvent("bpl:layout"));
        });
        card.append(acts, ans);
      }
      wrap.append(card);
    });
    n.replaceWith(wrap);
    if (keyOl) { keyOl.remove(); keyLabel.remove(); }
  }
}
