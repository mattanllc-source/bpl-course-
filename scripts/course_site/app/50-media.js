/* ---------- on-demand libraries: loaded only when a page needs them ---------- */
const LIBS = {
  mermaid: "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js",
  katex: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js",
};
const libP = {};
function loadLib(name) {
  if (!libP[name]) libP[name] = new Promise((res, rej) => {
    const s = document.createElement("script"); s.src = LIBS[name]; s.async = true;
    const t = setTimeout(() => rej(new Error("timeout")), 15000);
    s.onload = () => { clearTimeout(t); res(); }; s.onerror = () => { clearTimeout(t); rej(new Error("load")); };
    document.head.append(s);
  });
  return libP[name];
}

/* ---------- math: KaTeX to MathML (no extra stylesheet or font files needed) ---------- */
function renderMath(root) {
  const nodes = [...root.querySelectorAll(".math[data-tex]:not([data-done]), .imath[data-tex]:not([data-done])")];
  if (!nodes.length) return;
  for (const n of nodes) if (!n.textContent) n.textContent = n.dataset.tex;      // readable source if KaTeX cannot load
  loadLib("katex").then(() => {
    for (const n of nodes) {
      if (!n.isConnected && !root.contains(n)) continue;
      try {
        // renderToString, not render: render() refuses to run in quirks mode, and MathML output does not need standards mode.
        n.innerHTML = katex.renderToString(n.dataset.tex, { displayMode: n.classList.contains("math"), output: "mathml", throwOnError: false, strict: "ignore" });
        n.dataset.done = "1";
      } catch { n.textContent = n.dataset.tex; }
    }
    document.dispatchEvent(new CustomEvent("bpl:layout"));
  }).catch(() => { /* the TeX source stays visible */ });
}

/* ---------- diagrams (mermaid): natural size, expand view, plain-language text version ---------- */
const cleanLabel = (s) => s.replace(/<br\s*\/?>/gi, "; ").replace(/^"|"$/g, "").replace(/\s+/g, " ").replace(/;\s*;/g, ";").trim();
function parseFlow(src) {
  const nodes = new Map(), order = [], edges = [];
  const see = (id, label) => { if (!nodes.has(id)) { nodes.set(id, label || id); order.push(id); } else if (label) nodes.set(id, label); };
  const OP = /^(?:--\s*"([^"]*)"\s*-->|--\s+([^-">|][^>|]*?)\s+-->|-\.\s*"?([^".|>]+?)"?\s*\.->|-\.->|-->|---|==>)(?:\|\s*"?([^"|]*)"?\s*\|)?/;
  for (let line of src.split("\n")) {
    line = line.trim();
    if (!line || /^(flowchart|graph|subgraph|end\b|style|classDef|class |linkStyle|direction|%%)/.test(line)) continue;
    let i = 0, groups = [[]], ops = [];
    while (i < line.length) {
      const rest = line.slice(i);
      const ws = /^\s+/.exec(rest); if (ws) { i += ws[0].length; continue; }
      if (rest[0] === "&") { i++; continue; }
      if (rest[0] === ";") { i++; continue; }
      const om = OP.exec(rest);
      if (om && groups[groups.length - 1].length) { ops.push({ label: cleanLabel(om[1] || om[2] || om[3] || om[4] || ""), dotted: om[0].startsWith("-.") }); groups.push([]); i += om[0].length; continue; }
      const im = /^[A-Za-z0-9_]+/.exec(rest);
      if (!im) return null;
      const id = im[0]; i += id.length; let label = "";
      const open = /^\s*([\[({>]+)/.exec(line.slice(i));
      if (open) {
        i += open[0].length;
        if (line[i] === '"') { const e = line.indexOf('"', i + 1); if (e < 0) return null; label = line.slice(i + 1, e); i = e + 1; }
        else { const e = line.slice(i).search(/[\])}]/); if (e < 0) return null; label = line.slice(i, i + e); i += e; }
        const close = /^[\])}]+/.exec(line.slice(i)); if (close) i += close[0].length;
      }
      see(id, cleanLabel(label));
      groups[groups.length - 1].push(id);
    }
    for (let g = 0; g < ops.length; g++) for (const a of groups[g]) for (const b of groups[g + 1] || []) edges.push({ a, b, ...ops[g] });
  }
  return order.length >= 2 ? { nodes, order, edges } : null;
}
const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);
function flowText(flow) {
  const num = new Map(flow.order.map((id, i) => [id, i + 1]));
  const ol = el("ol");
  for (const id of flow.order) {
    const outs = flow.edges.filter((e) => e.a === id);
    let s = flow.nodes.get(id).replace(/[.;]\s*$/, "") + ".";
    if (!outs.length) s += flow.edges.some((e) => e.b === id) ? " This path ends here." : "";
    else if (outs.length === 1 && !outs[0].label) s += ` Next: step ${num.get(outs[0].b)}.`;
    else s += " " + outs.map((e) => `${e.label ? `If “${e.label}”` : e.dotted ? "Where it applies" : "Also"}: go to step ${num.get(e.b)} (${clip(flow.nodes.get(e.b), 48)}).`).join(" ");
    ol.append(el("li", "", s));
  }
  return ol;
}
function prepareDiagrams(root, figPrefix) {
  let n = 0;
  for (const code of [...root.querySelectorAll("pre > code.language-mermaid")]) {
    const pre = code.parentElement, src = code.textContent;
    n++;
    const flow = parseFlow(src);
    const fig = el("figure", "fig");
    const head = el("div", "fig-head");
    const figName = `Figure ${figPrefix ? figPrefix + "." : ""}${n}`;
    const exp = el("button", "btn sm ghost fig-expand"); exp.type = "button"; exp.append(icon("expand"), "Expand"); exp.setAttribute("aria-label", `Expand ${figName} to full screen`);
    head.append(el("span", "lab", figName), exp);
    const scroll = el("div", "fig-scroll");
    const box = el("div", "mermaid-diagram", "Loading diagram…"); box.dataset.src = src; box.setAttribute("role", "img");
    scroll.append(box);
    fig.append(head, scroll);
    // The author's sentence after the diagram ("The flowchart shows ...") becomes the caption and the accessible name.
    const next = pre.nextElementSibling;
    let name = "";
    if (next && next.tagName === "P" && /^The (diagram|flowchart|flow|tree|chart|timeline|figure|map|stack)\b/i.test(next.textContent.trim())) {
      const cap = el("figcaption"); name = next.textContent.trim(); cap.append(...next.childNodes); next.remove(); fig.append(cap);
    }
    if (!name && flow) name = `Flowchart with ${flow.order.length} steps, starting at “${clip(flow.nodes.get(flow.order[0]), 80)}”.`;
    box.setAttribute("aria-label", `${figName}. ${name || "Diagram."}${flow ? " A step-by-step text version follows." : ""}`);
    fig.dataset.name = figName;
    if (flow) { const det = el("details"); det.append(el("summary", "", "Read this diagram as text"), flowText(flow)); fig.append(det); }
    pre.replaceWith(fig);
  }
}
const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
let mermaidTheme = null, diagramBusy = Promise.resolve();
function initMermaid() {
  const key = themeKey() + "|" + cssVar("--brand") + "|" + cssVar("--surface");
  if (mermaidTheme === key) return;
  mermaid.initialize({
    startOnLoad: false, securityLevel: "strict", logLevel: 5, theme: "base",
    flowchart: { useMaxWidth: false, htmlLabels: true, nodeSpacing: 30, rankSpacing: 40, wrappingWidth: 200, padding: 12 },
    themeVariables: {
      darkMode: themeKey() === "dark", background: cssVar("--surface"), fontFamily: cssVar("--font-body"), fontSize: "14px",
      primaryColor: cssVar("--brand-soft"), primaryTextColor: cssVar("--ink"), primaryBorderColor: cssVar("--brand"),
      lineColor: cssVar("--muted"), secondaryColor: cssVar("--surface-2"), tertiaryColor: cssVar("--surface"),
      textColor: cssVar("--ink"), nodeBorder: cssVar("--brand"), clusterBkg: cssVar("--surface-2"), clusterBorder: cssVar("--line-strong"), edgeLabelBackground: cssVar("--surface"),
    },
  });
  mermaidTheme = key;
}
function diagramFallback(box) {
  const fig = box.closest(".fig");
  box.removeAttribute("role"); box.removeAttribute("aria-label");
  box.textContent = "The picture could not load. Use the text version below.";
  if (fig) { const d = fig.querySelector("details"); if (d) d.open = true; const b = fig.querySelector(".fig-expand"); if (b) b.hidden = true; }
}
function renderDiagrams(scope) {
  const boxes = [...scope.querySelectorAll(".mermaid-diagram")];
  if (!boxes.length) return;
  diagramBusy = diagramBusy.then(async () => {
    try { await loadLib("mermaid"); } catch { for (const b of boxes) if (b.isConnected) diagramFallback(b); return; }
    for (const box of boxes) {
      if (!box.isConnected) continue;
      const src = box.dataset.src;
      try {
        initMermaid();
        if (box.dataset.theme === mermaidTheme && box.querySelector("svg")) continue;
        box.textContent = src; box.removeAttribute("data-processed");
        const ok = await mermaid.parse(src, { suppressErrors: true });
        if (!ok) { diagramFallback(box); continue; }
        await mermaid.run({ nodes: [box], suppressErrors: true });
        const svg = box.querySelector("svg");
        if (svg) { box.dataset.theme = mermaidTheme; svg.setAttribute("aria-hidden", "true"); svg.removeAttribute("role"); svg.removeAttribute("aria-roledescription"); } else diagramFallback(box);
      } catch { if (box.isConnected) diagramFallback(box); }
    }
    markScrollers(scope);
    document.dispatchEvent(new CustomEvent("bpl:layout"));
  }).catch(() => { /* diagrams are optional */ });
}
function onThemeChange() { const st = document.querySelector(".stage"); if (st) renderDiagrams(st); }
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", onThemeChange);
new MutationObserver(onThemeChange).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

/* full-screen view */
const lb = { zoom: 1, w: 0, h: 0 };
function lbApply() { const svg = $("lightbox-body").querySelector("svg"); if (!svg) return; svg.setAttribute("width", String(lb.w * lb.zoom)); svg.setAttribute("height", String(lb.h * lb.zoom)); svg.style.width = `${lb.w * lb.zoom}px`; svg.style.height = `${lb.h * lb.zoom}px`; }
function initLightbox() {
  const head = $("lightbox").querySelector(".lhead");
  const mk = (label, d) => { const b = el("button", "btn sm", label); b.type = "button"; b.addEventListener("click", () => { lb.zoom = Math.max(0.5, Math.min(3, lb.zoom * d)); lbApply(); }); return b; };
  $("lightbox-close").before(mk("Zoom out", 1 / 1.25), mk("Zoom in", 1.25));
  $("lightbox-close").addEventListener("click", () => closeModal($("lightbox")));
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".fig-expand"); if (!b) return;
    const fig = b.closest(".fig"), svg = fig.querySelector(".mermaid-diagram svg"); if (!svg) return;
    const r = svg.getBoundingClientRect(); lb.w = r.width; lb.h = r.height;
    const body = $("lightbox-body"); const c = svg.cloneNode(true); c.removeAttribute("id"); c.style.maxWidth = "none";
    body.replaceChildren(c);
    $("lightbox-h").textContent = fig.dataset.name || "Diagram";
    body.setAttribute("role", "img"); body.setAttribute("aria-label", fig.querySelector(".mermaid-diagram").getAttribute("aria-label") || "Diagram");
    openModal($("lightbox"), { trigger: b, focus: $("lightbox-close"), scrim: false, onClose: () => body.replaceChildren() });
    lb.zoom = Math.max(1, Math.min(2, (body.clientWidth - 48) / lb.w, (body.clientHeight - 48) / lb.h)); lbApply();
  });
}

/* ---------- narration (only where the viewer offers it) ---------- */
const BLOCK_SEL = "h1, h2, h3, h4, p, li, blockquote, .speak, table, figcaption";
const NESTED = new Set(["UL", "OL", "LI", "P", "BLOCKQUOTE", "TABLE", "PRE", "DIV", "DETAILS", "FIGURE", "ARTICLE", "SECTION", "FIELDSET", "H1", "H2", "H3", "H4", "H5", "H6"]);
const hiddenNode = (e) => !!e.closest("[hidden], details:not([open]) > :not(summary), .mermaid-diagram, .src, .steptools, .reflist, .pagebar, .pager, .toc-m, .fcard");
function ownSpeech(e) {
  let s = "";
  for (const n of e.childNodes) {
    if (n.nodeType === 3) s += n.nodeValue;
    else if (n.nodeType === 1) {
      if (NESTED.has(n.tagName) || n.hidden || n.classList.contains("src") || n.classList.contains("cx-raw") || n.classList.contains("cx-m")) continue;
      if (["BUTTON", "INPUT", "TEXTAREA", "SELECT", "SUMMARY", "SCRIPT", "STYLE"].includes(n.tagName) && !n.classList.contains("ref")) continue;
      s += ownSpeech(n);
    }
  }
  return s;
}
function speechLines(root) {
  const lines = [];
  for (const e of root.querySelectorAll(BLOCK_SEL)) {
    if (hiddenNode(e)) continue;
    if (e.tagName === "TABLE") { lines.push("There is a table here. Read it on the screen."); continue; }
    if (e.closest("table, pre")) continue;
    const t = ownSpeech(e).replace(/\s+/g, " ").trim();
    if (t) lines.push(t);
  }
  const out = [];
  for (const l of lines) {
    if (l.length < 2000) { out.push(l); continue; }
    let cur = "";
    for (const sentence of l.split(/(?<=[.!?])\s+/)) {
      if ((cur + " " + sentence).length >= 1900) { if (cur) out.push(cur); cur = sentence.slice(0, 1900); } else cur = cur ? cur + " " + sentence : sentence;
    }
    if (cur) out.push(cur);
  }
  return out;
}
const tts = { api: null, speaking: false, off: false };
function hideListen() { tts.off = true; for (const b of document.querySelectorAll(".steptools")) b.hidden = true; }
async function stopListening() {
  if (!tts.speaking) return;
  tts.speaking = false;
  for (const b of document.querySelectorAll(".listen")) b.replaceChildren(icon("play"), "Listen");
  try { if (tts.api) await tts.api.stop(); } catch { /* ignore */ }
}
function listenTools(getSec) {
  const bar = el("div", "steptools");
  if (tts.off || !(window.claude && typeof window.claude.use === "function")) { bar.hidden = true; return bar; }
  const b = el("button", "btn sm listen"); b.type = "button"; b.append(icon("play"), "Listen");
  const note = el("span", "listen-note"); note.setAttribute("role", "status");
  b.addEventListener("click", async () => {
    note.textContent = "";
    if (tts.speaking) { await stopListening(); return; }
    try { if (!tts.api) tts.api = await withTimeout(window.claude.use("tts"), 8000); } catch { hideListen(); return; }
    if (!tts.api) { hideListen(); return; }
    const lines = speechLines(getSec());
    if (!lines.length) return;
    tts.speaking = true; b.replaceChildren(icon("stop"), "Stop");
    try { await tts.api.speak(lines.map((text) => ({ text }))); }
    catch (e) {
      const code = e && e.code;
      if (code === "not_granted") hideListen();
      else if (code === "busy" || code === "rate_limited") note.textContent = code === "busy" ? "Narration is busy. Try again in a moment." : "Too many requests. Try again shortly.";
    }
    if (tts.speaking) { tts.speaking = false; b.replaceChildren(icon("play"), "Listen"); }
  });
  bar.append(b, note);
  return bar;
}
