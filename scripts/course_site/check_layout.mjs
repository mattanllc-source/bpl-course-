// Layout check (quality bar 1.7 and 1.8): visits every page of the built course at phone and desktop width
// and fails on (1) sideways page scroll, (2) an element whose content spills out of its own box,
// (3) a table cell squeezed under about 12 characters wide while its text needs more.
// Scroll regions made for wide tables (overflow-x: auto) are allowed; what is inside them is not checked.
// usage: node scripts/course_site/check_layout.mjs [exports/core-course.html] [--report out.md] [--widths 390,1440]
// Model policy for training - not for live lending decisions.
import { createRequire } from "module";
import fs from "fs";
import os from "os";
import path from "path";
import { pathToFileURL } from "url";

const { chromium } = createRequire(import.meta.url)("@playwright/test");
const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : null; };
const reportPath = opt("--report");
const widths = (opt("--widths") || "390,1440").split(",").map(Number);
const file = path.resolve(args[0] || "exports/core-course.html");
// The page is published inside a standards-mode document with a viewport tag; check it the same way.
const wrapped = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "bpl-layout-")), "page.html");
fs.writeFileSync(wrapped, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${fs.readFileSync(file, "utf8")}</body></html>`);
const url = pathToFileURL(wrapped).href;
const MIN_CH = 12;

const browser = await chromium.launch();
async function listPages() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(url + "#home");
  await page.waitForFunction(() => typeof MODS !== "undefined", null, { timeout: 15000 });
  const base = await page.evaluate(() => [
    "home", ...REFS.map((r) => r.key), "glossary",
    ...(typeof LIB !== "undefined" ? LIB.formulas.map((f) => "formulas/" + f.slug) : []),
    ...(typeof STATE_LAW !== "undefined" ? STATE_LAW.states.flatMap((s) => ["res", "com"].map((t) => `state-law/${s.code}/${t}`)) : []),
  ]);
  const mods = await page.evaluate(() => MODS.map((m) => m.key));
  for (const m of mods) {
    await page.goto(url + "#" + m); await page.waitForTimeout(300);
    const nLearn = await page.evaluate(() => document.querySelectorAll("a[href*='/learn/']").length);
    base.push(`${m}/overview`);
    for (let p = 1; p <= Math.max(1, nLearn); p++) base.push(`${m}/learn/${p}`);
    for (const s of ["exercises", "practice", "quiz", "ojt", "jobaid", "wrapup"]) base.push(`${m}/${s}`);
  }
  await page.close();
  return base;
}
const pages = await listPages();

function probe(minCh) {
  const out = { scroll: null, spill: [], narrow: [] };
  const de = document.documentElement;
  if (de.scrollWidth > de.clientWidth + 1) out.scroll = { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth };
  const doc = document.getElementById("doc");
  if (!doc) return out;
  const name = (e) => {
    const cls = typeof e.className === "string" && e.className.trim() ? "." + e.className.trim().split(/\s+/).slice(0, 2).join(".") : "";
    const txt = (e.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60);
    return `${e.tagName.toLowerCase()}${cls} “${txt}”`;
  };
  const scrolls = (e) => { const ox = getComputedStyle(e).overflowX; return ox === "auto" || ox === "scroll"; };
  const insideScroller = (e) => { for (let p = e.parentElement; p && p !== doc; p = p.parentElement) if (scrolls(p)) return true; return false; };
  const shown = (e) => e.getClientRects().length > 0 && getComputedStyle(e).visibility !== "hidden";
  for (const e of doc.querySelectorAll("*")) {
    if (!shown(e) || e.closest("svg, math, .mermaid-diagram")) continue;
    const cs = getComputedStyle(e);
    if (cs.display === "inline" || cs.display === "contents" || cs.position === "absolute" || cs.position === "fixed") continue;
    if (scrolls(e) || cs.overflowX === "hidden" || cs.overflowX === "clip" || insideScroller(e)) continue;
    if (e.scrollWidth > e.clientWidth + 2 && e.clientWidth > 0) out.spill.push(`${name(e)}: content ${e.scrollWidth}px in a ${e.clientWidth}px box`);
  }
  // Character width of the body font, per font size.
  const chW = new Map();
  const ch = (cs) => {
    const k = cs.fontSize + cs.fontFamily + cs.fontWeight;
    if (!chW.has(k)) { const s = document.createElement("span"); s.textContent = "0".repeat(20); s.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;font:${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`; document.body.append(s); chW.set(k, s.getBoundingClientRect().width / 20); s.remove(); }
    return chW.get(k);
  };
  for (const c of doc.querySelectorAll("td, th")) {
    if (!shown(c)) continue;
    const cs = getComputedStyle(c);
    if (cs.display === "block") continue;                 // stacked phone tables: each cell is a full-width row
    const text = (c.innerText || "").trim().replace(/\s+/g, " ");          // what the reader sees
    const longest = Math.max(0, ...text.split(" ").map((w) => w.length));
    if (text.length <= minCh) continue;
    const inner = c.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const chars = inner / ch(cs);
    if (chars < Math.min(minCh, text.length) - 0.5 && chars < Math.max(longest, minCh)) out.narrow.push(`${name(c)}: ${chars.toFixed(1)} characters wide`);
  }
  return out;
}

const hits = [];
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  await ctx.addInitScript(() => { try { localStorage.clear(); } catch { /* storage may be blocked */ } });
  const page = await ctx.newPage();
  for (const h of pages) {
    await page.goto("about:blank"); await page.goto(url + "#" + h);
    await page.waitForSelector("#doc h1, #doc .steps", { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(250);
    await page.evaluate(() => document.querySelectorAll("#doc details").forEach((d) => { d.open = true; }));
    const r = await page.evaluate(probe, MIN_CH);
    if (r.scroll) hits.push({ w, page: h, kind: "page scroll", what: `page is ${r.scroll.scrollWidth}px wide in a ${r.scroll.clientWidth}px window` });
    for (const s of r.spill) hits.push({ w, page: h, kind: "overflow", what: s });
    for (const s of r.narrow) hits.push({ w, page: h, kind: "narrow cell", what: s });
  }
  await ctx.close();
}
await browser.close();

const byKind = {}; for (const x of hits) byKind[`${x.kind} at ${x.w}px`] = (byKind[`${x.kind} at ${x.w}px`] || 0) + 1;
console.log(`Checked ${pages.length} pages at ${widths.join(" and ")} px. ${hits.length} layout problems.`);
for (const [k, v] of Object.entries(byKind)) console.log(`  ${v}\t${k}`);
for (const x of hits.slice(0, 25)) console.log(`  ${x.w} ${x.page} ${x.kind}: ${x.what}`);
if (reportPath) {
  const md = ["# Layout check", "", `${pages.length} pages at ${widths.join(", ")} px; ${hits.length} problems.`, "",
    "| Width | Page | Problem | Detail |", "| --- | --- | --- | --- |",
    ...hits.map((x) => `| ${x.w} | ${x.page} | ${x.kind} | ${x.what.replace(/\|/g, "\\|")} |`)].join("\n");
  fs.mkdirSync(path.dirname(path.resolve(reportPath)), { recursive: true });
  fs.writeFileSync(reportPath, md);
  console.log(`Report: ${reportPath}`);
}
process.exit(hits.length ? 1 : 0);
