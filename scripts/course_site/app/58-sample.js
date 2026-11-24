/* ---------- lesson-format samples: #sample/<key> renders a lesson written in the new format ---------- */
const SAMPLES = (DATA && DATA.samples) || [];
function showSample(key, focus) {
  const S = SAMPLES.find((x) => x.key === key) || SAMPLES[0];
  view = "sample"; routeTok++; cur = null;
  const doc = $("doc");
  if (!S) { doc.className = "doc"; doc.replaceChildren(el("h1", "", "No sample lesson"), el("p", "", "There is no lesson-format sample in this build.")); setCrumbs(["Sample"]); return; }
  const meta = S.meta, m = MODS.find((x) => x.key === meta.module);
  const comps = S.comps;
  const box = render(S.md, { idPrefix: "sl-" });
  const ctx = newCiteCtx();
  const main = el("div", "lmain"), rail = el("aside", "lrail"); rail.setAttribute("aria-label", "Module contents and course files");
  const grid = el("div", "lgrid"); grid.append(main, rail);
  // title card
  const t = el("section", "lcard ltitle big");
  const top = el("div", "lt-top");
  top.append(el("p", "eyebrow", [`Lesson ${meta.number}`, meta.minutes && `${meta.minutes} min`, meta.level].filter(Boolean).join(" · ")));
  const lprog = el("span", "lprog"); top.append(lprog);
  const h1 = el("h1", "ltitle-h", meta.title); h1.tabIndex = -1;
  t.append(top, h1);
  if (meta.summary) t.append(el("p", "lede", meta.summary));
  const objSpec = comps.find((c) => c.type === "objectives");
  const env = { hl: 2, ctx, key: meta.key, idx: 0, lc: newLessonCtl(() => paint()) };
  if (objSpec) t.append(compObjectives(objSpec, env));
  if (meta.reviewed) t.append(el("p", "fine", `Last reviewed ${meta.reviewed}`));
  if (meta.audit) t.append(auditNote(meta.audit));
  const cards = cardify([...box.childNodes], "H2", comps, env);
  env.lc.number();
  for (const c of cards) if (c.classList.contains("prose")) linkIds(c, "cite", ctx);
  // in-lesson progress: checks left and minutes left (words below the first open check)
  const allWords = (nodes) => nodes.reduce((a, n) => a + (n.textContent.trim().split(/\s+/).length || 0), 0);
  function paint() {
    const n = env.lc.items.length, left = env.lc.left();
    const firstOpen = env.lc.items.find((x) => !x.done());
    let words = allWords(cards);
    if (firstOpen) { const node = cards.find((c) => c.querySelector && (c.contains(firstOpen.labelEl) || (firstOpen.labelEl === null && c.classList.contains("case")))); const i = node ? cards.indexOf(node) : 0; words = allWords(cards.slice(i)); }
    else words = allWords(cards.slice(-2));
    const mins = Math.max(1, Math.round(words / 200 * ((meta.minutes || 14) / Math.max(1, allWords(cards) / 200))));
    lprog.textContent = `${left} ${left === 1 ? "check" : "checks"} left · about ${mins} min`;
    if (m) { const pct = modulePct(m); setStrip(`Module ${modNo(m)} · ${shortTitle(m)} · Lesson ${meta.number}`, pct, `${pct}% complete`); }
  }
  // prev and next: around the Learn parts this sample replaces
  const stops = m ? moduleStops(m) : [];
  const rep = String(meta.replaces || "").split(/\s*,\s*/).map(Number).filter(Boolean);
  const firstRep = stops.findIndex((s) => s.id === "learn" && rep.includes(s.page + 1));
  const lastRep = stops.reduce((a, s, i) => (s.id === "learn" && rep.includes(s.page + 1) ? i : a), -1);
  const pv = firstRep > 0 ? stops[firstRep - 1] : null, nx = lastRep >= 0 ? stops[lastRep + 1] : null;
  const pager = el("nav", "pager"); pager.setAttribute("aria-label", "Previous and next");
  if (pv) { const a = el("a", "prevb"); a.href = stopHref(m, pv); a.append(el("span", "dir", "Previous"), el("b", "", "‹ " + pv.label)); pager.append(a); }
  if (nx) { const a = el("a", "nextb"); a.href = stopHref(m, nx); a.append(el("b", "", "Mark complete and continue ›"), el("span", "dir", "Next: " + nx.label)); a.addEventListener("click", () => { const d = doneStops(m.key); for (const s of stops) if (s.id === "learn" && rep.includes(s.page + 1)) d.add(s.key); savePos(m.key, { done: [...d] }); }); pager.append(a); }
  const outline = el("nav", "outline card"); outline.setAttribute("aria-label", "On this page");
  const tocM = el("details", "toc-m");
  const stage = el("div", "stage"); const sec = el("section", "prose step sample"); sec.append(t, ...cards);
  stage.append(tocM, sec, pager);
  main.append(stage);
  // rail
  if (m) {
    const extra = { at: firstRep >= 0 ? firstRep : stops.length, stop: { key: "sample", label: `${meta.number} ${meta.title}`, href: "#sample/" + S.key } };
    const kept = stops.filter((s) => !(s.id === "learn" && rep.includes(s.page + 1)));
    extra.at = firstRep >= 0 ? firstRep : kept.length;
    const cc = el("section", "card rcardx mcont"); cc.append(el("h2", "", `Module ${modNo(m)} contents`), contentsList(m, kept, "sample", extra));
    rail.append(cc, railCard("Course files", courseFiles(m)));
    const pc = policyCard(m, meta.policy); if (pc) rail.append(pc);
    rail.append(outline);
    setDrawerModule(m, contentsList(m, kept, "sample", extra));
  }
  doc.className = "doc module sample-doc";
  doc.dataset.step = "learn";
  doc.replaceChildren(grid);
  if (m) { let nb = null; if (nx) nb = nextLink(stopHref(m, nx), nx.label); doc.append(bottomBar(m, modulePct(m), nb)); }
  paint();
  renderMath(doc); markScrollers(doc); buildOutline(sec, outline, tocM);
  const cat = m ? catOf(m) : null;
  setTitle(`Lesson ${meta.number} ${meta.title}`);
  setCrumbs([...(cat ? [cat.title] : []), ...(m ? [{ text: shortTitle(m), href: "#" + m.key + "/overview" }] : []), meta.title]);
  if (focus) focusHeading(h1);
}
