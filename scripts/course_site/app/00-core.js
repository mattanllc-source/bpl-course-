"use strict";
document.documentElement.lang ||= "en";
const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
const LABEL = "Model policy for training - not for live lending decisions.";
const PASS = 0.8;

let DATA = null, BOOT_ERROR = "";
try {
  DATA = JSON.parse($("course-data").textContent);
  if (typeof marked === "undefined" || typeof DOMPurify === "undefined") throw new Error("renderer missing");
  marked.setOptions({ gfm: true, breaks: false });
} catch (e) { BOOT_ERROR = String(e && e.message || e); }
const MODS = DATA ? DATA.modules : [];       // [{key, code, title, hours, prereq, version, reviewed, credits, projected, md, exercises}]
const REFS = DATA ? DATA.refs : [];          // [{key, title, note, md}]
const GLOSSARY = DATA ? DATA.glossary : [];  // [{n, term, def, ex, first, family}]
const DEALS = DATA ? DATA.deals : [];        // [{id, title, family, summary, borrower, state}]

const prereqText = (p) => (!p || /^none$/i.test(p.trim())) ? "No prerequisite" : "Prerequisite: " + p;
const num1 = (n) => (Math.round(n * 10) / 10).toString();
/** "3.4 CPE credits (projected)" where the lesson header gives credits; the Course Bible hours otherwise. */
function loadText(m) {
  if (m.credits != null) return `${num1(m.credits)} CPE ${m.credits === 1 ? "credit" : "credits"}${m.projected ? " (projected)" : ""}`;
  return `${m.hours} ${m.hours === 1 ? "hour" : "hours"}`;
}
const weight = (m) => (m.credits != null ? m.credits : m.hours);
const versionText = (m) => [m.version ? "Version " + m.version.replace(/^v/, "") : "", m.reviewed ? "Last reviewed " + m.reviewed : ""].filter(Boolean).join(" · ");

/* ---------- icons ---------- */
const ICONS = {
  menu: "M4 7h16M4 12h16M4 17h16", close: "M6 6l12 12M18 6L6 18", search: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4",
  left: "M14 6l-6 6 6 6", right: "M10 6l6 6-6 6", expand: "M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5",
  sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M5 19l1.4-1.4M17.6 6.4L19 5",
  moon: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z", auto: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 4v16M12 8l5 0M12 12h7M12 16h5",
  home: "M4 11l8-7 8 7M6 10v9h12v-9M10 19v-5h4v5", book: "M5 4h9a4 4 0 0 1 4 4v12H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h10",
  policy: "M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6", fx: "M5 19c3 0 3-14 6-14M4 11h6M13 13l6 6M19 13l-6 6",
  deal: "M3 20h18M5 20V9l7-5 7 5v11M10 20v-6h4v6", map: "M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14",
  hash: "M9 4L7 20M17 4l-2 16M4 9h17M3 15h17", play: "M8 5l11 7-11 7z", stop: "M7 7h10v10H7z", list: "M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01",
};
function icon(name, cls) {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttribute("class", "i" + (cls ? " " + cls : "")); s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("d", ICONS[name] || ""); s.append(p);
  return s;
}
function glyph(status) {
  const w = el("span", "glyph-w");
  w.innerHTML = `<svg class="glyph" viewBox="0 0 16 16" aria-hidden="true" data-s="${status}"><circle cx="8" cy="8" r="6.25"/>${status === "done" ? '<path d="M5 8.2l2.1 2.1L11 6.2"/>' : status === "in-progress" ? '<path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z"/>' : ""}</svg>`;
  return w;
}
function ringSvg(r, size) {
  const c = 2 * Math.PI * r, h = size / 2;
  return { c, html: `<svg viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle class="trk" cx="${h}" cy="${h}" r="${r}"/><circle class="val" cx="${h}" cy="${h}" r="${r}" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${c.toFixed(2)}"/></svg>` };
}

/* ---------- per-viewer preferences (this browser only) ---------- */
const prefs = {
  ok: true,
  get(k) { try { return JSON.parse(localStorage.getItem("bpl:" + k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem("bpl:" + k, JSON.stringify(v)); return true; } catch { this.ok = false; return false; } },
};
try { const t = "bpl:__t"; localStorage.setItem(t, "1"); localStorage.removeItem(t); } catch { prefs.ok = false; }

let toastTimer = null;
function toast(msg, ms) {
  const t = $("toast"); t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, ms || 6000);
}

/* ---------- theme and audit mode ---------- */
const THEMES = ["system", "light", "dark"];
const THEME_ICON = { system: "auto", light: "sun", dark: "moon" };
const themeKey = () => document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function applyTheme(t) {
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme;
  const b = $("theme"); const name = t[0].toUpperCase() + t.slice(1);
  b.replaceChildren(icon(THEME_ICON[t])); b.setAttribute("aria-label", `Theme: ${name}. Change theme`); b.title = `Theme: ${name}`;
}
let themePref = THEMES.includes(prefs.get("theme")) ? prefs.get("theme") : "system";
function applyAudit(on) {
  if (on) document.documentElement.dataset.audit = "1"; else delete document.documentElement.dataset.audit;
  $("audit").setAttribute("aria-pressed", String(on));
}
let auditOn = /[?&]audit=1\b/.test(location.search) || prefs.get("audit") === true;

/* ---------- focus trap for dialogs ---------- */
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex="0"]';
const modal = { stack: [] };
function openModal(node, opts) {
  const o = { node, trigger: opts.trigger || document.activeElement, onClose: opts.onClose, scrim: opts.scrim !== false };
  modal.stack.push(o);
  node.hidden = false;
  if (o.scrim) $("scrim").hidden = false;
  const f = opts.focus || node.querySelector(FOCUSABLE);
  if (f) f.focus();
}
function closeModal(node, restore) {
  const i = modal.stack.findIndex((o) => o.node === node);
  if (i < 0) { node.hidden = true; return; }
  const [o] = modal.stack.splice(i, 1);
  node.hidden = true;
  $("scrim").hidden = !modal.stack.some((x) => x.scrim);
  if (o.onClose) o.onClose();
  if (restore !== false && o.trigger && o.trigger.isConnected && !o.trigger.closest("[hidden]")) o.trigger.focus();
  else if (restore !== false) $("main").focus({ preventScroll: true });
}
const topModal = () => modal.stack[modal.stack.length - 1] || null;
document.addEventListener("keydown", (e) => {
  const o = topModal(); if (!o) return;
  if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); closeModal(o.node); return; }
  if (e.key !== "Tab") return;
  const items = [...o.node.querySelectorAll(FOCUSABLE)].filter((x) => x.offsetParent !== null || x === document.activeElement);
  if (!items.length) { e.preventDefault(); return; }
  const first = items[0], last = items[items.length - 1];
  if (!o.node.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}, true);
$("scrim").addEventListener("click", () => { const o = topModal(); if (o) closeModal(o.node); });
