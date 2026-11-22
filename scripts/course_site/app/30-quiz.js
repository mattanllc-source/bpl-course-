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
function buildQuiz(sec, qs, saver, m) {
  const groups = []; let cur = null;
  for (const n of [...sec.children]) {
    if (n.tagName === "H3") { cur = { h: n, nodes: [] }; groups.push(cur); } else if (cur) cur.nodes.push(n);
  }
  const sets = [];
  for (const g of groups) {
    const setId = ((/Set\s+([A-Za-z0-9]+)/i.exec(g.h.textContent) || [, g.h.textContent.trim()])[1]).toUpperCase();
    const ki = g.nodes.findIndex(isKeyLabel);
    let keyOl = null;
    if (ki >= 0) keyOl = g.nodes.slice(ki + 1).find((n) => n.tagName === "OL") || null;
    const ol = g.nodes.find((n) => n.tagName === "OL" && n !== keyOl);
    if (!ol) continue;
    const items = [...ol.children].filter((x) => x.tagName === "LI");
    const panel = el("div", "qpanel"); panel.dataset.set = setId;
    const wrap = el("div", "qset"); wrap.dataset.set = setId;
    const score = el("div", "score");
    const ring = ringSvg(23, 56);
    score.innerHTML = `<div class="sring">${ring.html}<b></b></div><div class="big"></div><div class="cap"><span class="rule"></span> <span class="verdict" role="status"></span></div>`;
    wrap.append(score);
    const cards = [];
    items.forEach((li, i) => {
      const id = `${setId}${i + 1}`;
      let ansBox = el("div");
      const st = [...li.querySelectorAll("strong")].find((s) => /^answer:?$/i.test(s.textContent.trim()) && s.parentNode === li);
      if (st) { let n = st.nextSibling; while (n) { const nx = n.nextSibling; ansBox.append(n); n = nx; } st.remove(); }
      else if (keyOl && keyOl.children[i]) ansBox.append(...keyOl.children[i].childNodes);
      const body = el("div", "qbody");
      while (li.firstChild) body.append(li.firstChild);
      const crit = takeCritical(body);
      const opts = takeOptions(body);
      let correct = null;
      if (opts) {
        const tn = ansBox.firstChild && ansBox.firstChild.nodeType === 1 && ansBox.firstChild.tagName === "P" ? ansBox.firstChild.firstChild : ansBox.firstChild;
        const lm = tn && tn.nodeType === 3 ? /^\s*([A-F])[.):]\s*/.exec(tn.nodeValue) : null;
        if (lm && opts.some((o) => o.letter === lm[1])) { correct = lm[1]; tn.nodeValue = tn.nodeValue.slice(lm[0].length); }
      }
      linkIds(body, "quiet"); linkIds(ansBox, "quiet");
      const hasAns = ansBox.textContent.trim().length > 0;
      const card = el("article", "qcard"); card.dataset.id = id; if (crit) card.dataset.critical = "1";
      const head = el("div", "qhead"); const qn = el("span", "qnum", `Set ${setId} · Question ${i + 1} of ${items.length}`); qn.id = uid("q"); head.append(qn);
      card.setAttribute("aria-labelledby", qn.id);
      if (crit) head.append(el("span", "crit", "Critical"));
      card.append(head, body);
      const c = { id, crit, card, mc: !!(opts && correct) };
      const paintMark = () => { const mk = qs.marks[id] || ""; if (mk) card.dataset.m = mk; else delete card.dataset.m; };
      if (c.mc) {
        const grp = el("div", "opts"); grp.setAttribute("role", "group"); grp.setAttribute("aria-label", `Options for question ${i + 1}`);
        const fb = el("div", "qfb"); fb.setAttribute("aria-live", "polite");
        const btns = opts.map((o) => {
          const b = el("button", "opt"); b.type = "button"; b.dataset.letter = o.letter;
          const tx = el("span", "otx"); tx.append(...o.nodes); linkIdsPlain(tx);
          b.append(el("span", "ltr", o.letter), tx, el("span", "mk"));
          b.addEventListener("click", () => { if (qs.answers[id]) return; qs.answers[id] = o.letter; qs.marks[id] = o.letter === correct ? "got" : "missed"; saver.touch(); c.paint(true); updateScore(true); });
          grp.append(b); return b;
        });
        c.paint = (announce) => {
          const chosen = qs.answers[id] || "";
          for (const b of btns) {
            const L = b.dataset.letter, mk = b.querySelector(".mk");
            if (!chosen) { delete b.dataset.r; b.removeAttribute("aria-disabled"); b.removeAttribute("aria-pressed"); mk.textContent = ""; continue; }
            b.setAttribute("aria-disabled", "true"); b.setAttribute("aria-pressed", String(L === chosen));
            b.dataset.r = L === correct ? "right" : L === chosen ? "wrong" : "dim";
            mk.textContent = L === correct ? (L === chosen ? "Your answer · correct" : "Correct answer") : L === chosen ? "Your answer" : "";
          }
          fb.replaceChildren();
          if (chosen) {
            const ok = chosen === correct;
            fb.append(el("span", "v " + (ok ? "ok" : "no"), ok ? "Correct." : `Not quite. The answer is ${correct}.`));
            if (hasAns) { const at = el("div", "ans-text"); at.append(...[...ansBox.childNodes].map((n) => n.cloneNode(true))); fb.append(at); }
            if (!ok && crit) fb.append(el("span", "qflag", "Critical item: a miss fails the set."));
          }
          paintMark();
          if (announce) { const nx = card.nextElementSibling; if (nx && nx.classList.contains("qcard")) { /* focus stays on the chosen option */ } }
        };
        card.append(grp, fb);
      } else {
        if (opts) { const ul = el("ul"); for (const o of opts) { const li2 = el("li"); li2.append(`${o.letter}) `, ...o.nodes); ul.append(li2); } body.append(ul); }
        const ta = answerBox(`Your answer to Set ${setId} question ${i + 1}`, qs.answers[id], (v) => { qs.answers[id] = v; saver.touch(); }, "Your answer and working");
        const acts = el("div", "qacts");
        const rev = el("button", "btn sm", "Show model answer"); rev.type = "button";
        const hint = el("span", "qhint"); hint.setAttribute("role", "status");
        acts.append(rev, hint);
        const ans = el("div", "qans"); ans.hidden = true;
        const at = el("div", "ans-text"); if (hasAns) at.append(...ansBox.childNodes); else at.append(el("em", "", "No answer is listed for this item."));
        const marks = el("div", "qacts"); marks.setAttribute("role", "group"); marks.setAttribute("aria-label", "Mark your answer");
        const got = el("button", "btn sm", "Got it"), miss = el("button", "btn sm miss", "Missed it");
        got.type = miss.type = "button";
        marks.append(got, miss);
        if (crit) marks.append(el("span", "qflag", "Critical item: a miss fails the set."));
        ans.append(el("span", "lab", "Model answer"), at, marks);
        const setOpen = revealToggle(rev, ans, ["Show model answer", "Hide model answer"]);
        let nudged = false;
        rev.addEventListener("click", () => {
          if (ans.hidden && !ta.value.trim() && !nudged) { nudged = true; hint.textContent = "Write your own answer first. Press again to show it anyway."; ta.focus(); return; }
          hint.textContent = ""; setOpen(ans.hidden);
        });
        const setMark = (v) => { qs.marks[id] = qs.marks[id] === v ? "" : v; if (!qs.marks[id]) delete qs.marks[id]; c.paint(); saver.touch(); updateScore(true); };
        got.addEventListener("click", () => setMark("got")); miss.addEventListener("click", () => setMark("missed"));
        c.paint = () => {
          const mk = qs.marks[id] || "";
          got.setAttribute("aria-pressed", String(mk === "got")); miss.setAttribute("aria-pressed", String(mk === "missed"));
          ta.value = qs.answers[id] || "";
          if (!mk && !qs.answers[id]) { setOpen(false); nudged = false; }
          paintMark();
        };
        card.append(ta, acts, ans);
        if (qs.marks[id]) setOpen(true);
      }
      c.paint(false);
      cards.push(c); wrap.append(card);
    });
    const end = el("div", "qend");
    function updateScore(live) {
      const total = cards.length, need = Math.ceil(PASS * total - 1e-9);
      const got = cards.filter((c) => qs.marks[c.id] === "got").length;
      const marked = cards.filter((c) => qs.marks[c.id]).length;
      const missedCrit = cards.filter((c) => c.crit && qs.marks[c.id] === "missed").map((c) => c.id.replace(setId, "Q"));
      let v = "", msg = "";
      if (missedCrit.length) { v = "fail"; msg = `Not passed: critical item missed (${missedCrit.join(", ")}).`; }
      else if (marked === total) { v = got >= need ? "pass" : "fail"; msg = got >= need ? "Passed." : "Not passed: below the pass mark."; }
      else if (marked - got > total - need) { v = "fail"; msg = "Not passed: below the pass mark."; }
      score.dataset.v = v;
      score.querySelector(".val").style.strokeDashoffset = String(ring.c * (1 - (total ? got / total : 0)));
      score.querySelector(".sring b").textContent = `${total ? Math.round(got / total * 100) : 0}%`;
      score.querySelector(".big").textContent = `Set ${setId}: ${got} of ${total} correct`;
      score.querySelector(".rule").textContent = `${marked} answered. Pass mark ${Math.round(PASS * 100)}% (${need} of ${total}), with every critical item right.`;
      const vd = score.querySelector(".verdict"); if (vd.textContent !== msg) vd.textContent = msg;
      end.replaceChildren();
      if (marked) {
        const other = sets.find((s) => s.id !== setId);
        const again = el("button", "btn sm", `Clear Set ${setId} and start again`); again.type = "button";
        again.addEventListener("click", () => { resetSet(); g.h.focus(); g.h.scrollIntoView({ block: "start" }); });
        if (other && (v === "fail" || marked === total)) {
          const b = el("button", "btn sm primary", `Retake with Set ${other.id}`); b.type = "button";
          b.addEventListener("click", () => { other.reset(); showSet(other.id, true); });
          end.append(b);
        }
        end.append(again);
      }
      if (live && m) paintProgress();
    }
    function resetSet() { for (const c of cards) { delete qs.answers[c.id]; delete qs.marks[c.id]; c.paint(false); } saver.touch(); updateScore(true); }
    wrap.append(end);
    updateScore(false);
    ol.replaceWith(wrap);
    if (ki >= 0) { g.nodes[ki].remove(); if (keyOl) keyOl.remove(); }
    g.h.before(panel); g.h.tabIndex = -1;
    panel.append(g.h, ...g.nodes.filter((n) => n.isConnected && n !== wrap), wrap);
    panel.querySelector(".qset") || panel.append(wrap);
    sets.push({ id: setId, panel, reset: resetSet, cards, h: g.h });
  }
  let tabBtns = [];
  function showSet(id, focus) {
    for (const s of sets) s.panel.hidden = s.id !== id;
    tabBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.set === id)));
    savePos(m ? m.key : "x", { qset: id });
    const s = sets.find((x) => x.id === id);
    if (focus && s) { s.h.focus(); s.h.scrollIntoView({ block: "start" }); }
    document.dispatchEvent(new CustomEvent("bpl:layout"));
  }
  if (sets.length > 1) {
    const tabs = el("div", "qtabs"); tabs.setAttribute("role", "group"); tabs.setAttribute("aria-label", "Question set");
    tabBtns = sets.map((s) => { const b = el("button", "", `Set ${s.id}`); b.type = "button"; b.dataset.set = s.id; b.addEventListener("click", () => showSet(s.id, false)); tabs.append(b); return b; });
    sets[0].panel.before(tabs);
    const saved = m && pos[m.key] && pos[m.key].qset;
    const withMarks = sets.find((s) => s.cards.some((c) => qs.marks[c.id]));
    showSet((sets.find((s) => s.id === saved) || withMarks || sets[0]).id, false);
  }
  return sets;
}
/** Wrap IDs inside an option so they never break; options stay plain (the whole option is one button). */
function linkIdsPlain(root) {
  for (const n of textNodes(root)) {
    const s = n.nodeValue; TOKEN_RE.lastIndex = 0;
    if (!TOKEN_RE.test(s)) continue;
    const frag = document.createDocumentFragment(); let last = 0, mm; TOKEN_RE.lastIndex = 0;
    while ((mm = TOKEN_RE.exec(s))) { frag.append(s.slice(last, mm.index), el("span", "nb", mm[0])); last = mm.index + mm[0].length; }
    frag.append(s.slice(last)); n.replaceWith(frag);
  }
}
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
