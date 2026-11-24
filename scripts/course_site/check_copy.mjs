// Learner-copy check: visits every page of the built course (Audit mode off)
// and fails if a learner can see codes, author notes or draft markers.
// usage: node scripts/course_site/check_copy.mjs [exports/core-course.html] [--report out.md]
import { createRequire } from "module";
import fs from "fs";
import path from "path";

const { chromium } = createRequire(import.meta.url)("@playwright/test");
const args = process.argv.slice(2);
const reportAt = args.indexOf("--report");
const reportPath = reportAt >= 0 ? args.splice(reportAt, 2)[1] : null;
const file = path.resolve(args[0] || "exports/core-course.html");

// Each rule: id, what it catches, regex. All are hard failures.
const RULES = [
  ["code-rule", "Rule ID", /\b(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\d{2}\b/g],
  ["code-formula", "Formula ID", /\bF-(?:CORE|RES|MF|COM)-\d{2}\b/g],
  ["code-deal", "Running-deal ID", /\bRD-(?:RES|MF|COM)-\d{2}\b/g],
  ["code-state", "State-law row ID", /\bSLT-[A-Z]{2}-\d{2}\b/g],
  ["code-decision", "Decision ID", /\bD-CORE-\d{2}\b/g],
  ["author-status", "Author status word", /\b(?:REQUIRED|SUGGESTED|JUDGMENT)\b/g],
  ["author-note", "Author note", /Your decision|\(N\.D\.\)|Policy note|confirm in [A-Z][a-z]+ research|Added in Phase|Phase \d|\bTODO\b|\bTBD\b|placeholder/gi],
  ["author-verify", "Raw VERIFY tag", /\[?VERIFY\b/g],
  ["author-heading", "Author section name", /\b(?:Hook|OJT|Sources for Teach|Teach chunk|Wrap-up)\b/g],
  ["author-source", "Author source wording", /Course Bible|\bthis file\b|as in every policy example|\bfamilies set\b/g],
  ["author-bloom", "Bloom-level tag", /\((?:Remember|Understand|Apply|Analy[sz]e|Evaluate|Create)[;)]/g],
  ["draft-marker", "Draft or projection marker", /\d\.\d-draft|\(projected\)|\bv\d+-draft\b/gi],
];
const LONG = 25; // words per sentence (CLAUDE.md)

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.addInitScript(() => { try { localStorage.clear(); } catch { /* storage may be blocked */ } });
const url = "file:///" + file.replace(/\\/g, "/");
await page.goto(url + "#home");
await page.waitForFunction(() => typeof MODS !== "undefined", null, { timeout: 15000 });
const mods = await page.evaluate(() => MODS.map((m) => m.key));
const refs = await page.evaluate(() => REFS.map((r) => r.key));

// Reference shelf: every formula page and every state and loan-type view of the state law guide.
const shelf = await page.evaluate(() => [
  ...(typeof LIB !== "undefined" ? LIB.formulas.map((f) => "formulas/" + f.slug) : []),
  ...(typeof STATE_LAW !== "undefined" ? STATE_LAW.states.flatMap((s) => ["res", "com"].map((t) => `state-law/${s.code}/${t}`)) : []),
]);
const samples = await page.evaluate(() => (typeof SAMPLES !== "undefined" ? SAMPLES.map((s) => "sample/" + s.key) : []));
const pages = ["home", ...refs, ...shelf, "glossary", ...samples];
for (const m of mods) {
  await page.goto(url + "#" + m); await page.waitForTimeout(300);
  const nLearn = await page.evaluate(() => new Set([...document.querySelectorAll("a[href*='/learn/']")].map((a) => a.getAttribute("href"))).size);
  pages.push(`${m}/overview`);
  for (let p = 1; p <= Math.max(1, nLearn); p++) pages.push(`${m}/learn/${p}`);
  for (const s of ["exercises", "practice", "quiz", "ojt", "jobaid", "wrapup"]) pages.push(`${m}/${s}`);
}

const hits = []; const longs = [];
for (const h of pages) {
  await page.goto(url + "#" + h); await page.waitForTimeout(250);
  // Open every reveal so hidden answers are checked too.
  await page.evaluate(() => document.querySelectorAll("#doc details").forEach((d) => { d.open = true; }));
  const text = await page.evaluate(() => {
    const doc = document.getElementById("doc");
    const crumbs = document.querySelector("header nav, .crumbs");
    return [doc ? doc.innerText : "", crumbs ? crumbs.innerText : ""].join("\n");
  });
  for (const [id, label, re] of RULES) {
    for (const m of text.matchAll(re)) {
      const i = m.index; const ctx = text.slice(Math.max(0, i - 50), i + m[0].length + 50).replace(/\s+/g, " ");
      hits.push({ page: h, rule: id, label, match: m[0], ctx });
    }
  }
  for (const s of text.split(/(?<=[.!?])\s+|\n+/)) {
    const words = s.trim().split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
    if (words.length > LONG) longs.push({ page: h, words: words.length, s: s.trim().slice(0, 160) });
  }
}
await browser.close();

const byRule = {}; for (const x of hits) byRule[x.label] = (byRule[x.label] || 0) + 1;
const byPage = {}; for (const x of hits) byPage[x.page] = (byPage[x.page] || 0) + 1;
console.log(`Checked ${pages.length} pages. ${hits.length} learner-copy violations; ${longs.length} sentences over ${LONG} words.`);
for (const [k, v] of Object.entries(byRule).sort((a, b) => b[1] - a[1])) console.log(`  ${v}\t${k}`);
if (reportPath) {
  const md = [`# Learner-copy check`, ``, `${pages.length} pages, ${hits.length} violations, ${longs.length} long sentences.`, ``,
    `## Violations by page`, ``, `| Page | Count |`, `| --- | --- |`,
    ...Object.entries(byPage).sort((a, b) => b[1] - a[1]).map(([p, n]) => `| ${p} | ${n} |`), ``,
    `## Every violation`, ``, `| Page | Type | Match | Context |`, `| --- | --- | --- | --- |`,
    ...hits.map((x) => `| ${x.page} | ${x.label} | ${x.match} | ${x.ctx.replace(/\|/g, "\\|")} |`), ``,
    `## Sentences over ${LONG} words`, ``, `| Page | Words | Sentence |`, `| --- | --- | --- |`,
    ...longs.map((x) => `| ${x.page} | ${x.words} | ${x.s.replace(/\|/g, "\\|")} |`)].join("\n");
  fs.mkdirSync(path.dirname(path.resolve(reportPath)), { recursive: true });
  fs.writeFileSync(reportPath, md);
  console.log(`Report: ${reportPath}`);
}
process.exit(hits.length ? 1 : 0);
