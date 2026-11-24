// Accessibility check (quality bar 1.9): axe-core 4.10.2 over the key views of the built course,
// at desktop and phone width, in light and dark themes. Fails on any violation.
// usage: node scripts/course_site/check_a11y.mjs [exports/core-course.html]
// Model policy for training - not for live lending decisions.
import { createRequire } from "module";
import fs from "fs";
import os from "os";
import path from "path";
import { pathToFileURL } from "url";

const { chromium } = createRequire(import.meta.url)("@playwright/test");
const file = path.resolve(process.argv[2] || "exports/core-course.html");
// Checked inside a standards-mode document with lang and a viewport tag, as the page is published.
const wrapped = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "bpl-a11y-")), "page.html");
fs.writeFileSync(wrapped, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${fs.readFileSync(file, "utf8")}</body></html>`);
const url = pathToFileURL(wrapped).href;
const AXE = "https://cdn.jsdelivr.net/npm/axe-core@4.10.2/axe.min.js";
const AXE_SRC = await fetch(AXE).then((r) => { if (!r.ok) throw new Error(`axe-core download failed: ${r.status}`); return r.text(); });

const go = async (p, hash) => { await p.goto("about:blank"); await p.goto(url + "#" + hash); await p.waitForSelector("#doc h1", { timeout: 15000 }); await p.waitForTimeout(400); };
const views = [["home", (p) => go(p, "home")]];
for (const m of ["c00", "c03", "c09"]) for (const s of ["overview", "learn/1", "learn/3", "exercises", "practice", "quiz", "ojt", "jobaid", "wrapup"]) views.push([`${m}-${s}`, (p) => go(p, `${m}/${s}`)]);
// M2c: on phones Audit mode lives in the course menu; open the menu, turn it on, close the menu.
const auditOn = async (p) => { if (await p.locator("#audit").isVisible()) await p.click("#audit"); else { await p.click("#menu"); await p.click("#audit-m"); await p.keyboard.press("Escape"); await p.waitForTimeout(400); } };
views.push(
  ["c07-exercises", (p) => go(p, "c07/exercises")], ["c07-quiz", (p) => go(p, "c07/quiz")],
  ["c03-quiz-answered", async (p) => { await go(p, "c03/quiz"); await p.locator(".qpanel:not([hidden]) .qcard .opt").first().click(); }],
  ["c03-quiz-review", async (p) => { await go(p, "c03/quiz"); await p.locator(".qpanel:not([hidden]) .qcard .opt").first().click(); const sb = p.locator(".qpanel:not([hidden]) .qside .btn.primary"); await sb.click(); await sb.click(); await p.waitForTimeout(200); }],
  ["c04-overview", (p) => go(p, "c04/overview")],
  ["c04-jobaid", (p) => go(p, "c04/jobaid")],
  ["sample", (p) => go(p, "sample/c04-coverage")],
  ["sample-answered", async (p) => {
    await go(p, "sample/c04-coverage");
    await p.locator(".predict .pr-opt").nth(1).click();
    await p.locator(".desk input[type=range]").fill("5");
    const kc = p.locator("section.kc").filter({ hasText: "1.2495x" }); await kc.locator(".kc-opt").nth(0).click(); await kc.locator(".kc-go").click();
    const ex = p.locator(".exhibit"); await ex.locator(".kc-opt").nth(1).click(); await ex.locator(".kc-go").click();
    const cs = p.locator(".case .decision").first(); await cs.locator(".kc-opt").nth(0).click(); await cs.locator(".btn.primary").click();
    await p.locator(".worked .btn.sm").last().click();
  }],
  ["menu", async (p) => { await go(p, "c04/learn/2"); await p.click("#menu"); await p.waitForTimeout(250); }],
  ["drawer", async (p) => { await go(p, "c03/learn/1"); await p.locator(".stage .cite").first().click(); await p.locator("#pop .row").first().click(); await p.waitForTimeout(300); }],
  ["popover", async (p) => { await go(p, "c03/learn/1"); await p.locator(".stage .cite").first().click(); }],
  ["glossary", (p) => go(p, "glossary")],
  ["formulas", (p) => go(p, "formulas")],
  ["formula-dscr", (p) => go(p, "formulas/debt-service-coverage-ratio-dscr")],
  ["formula-balance", (p) => go(p, "formulas/remaining-balance-with-actual-360-accrual")],
  ["formula-family", (p) => go(p, "formulas/net-cash-flow-ncf")],
  ["policy", (p) => go(p, "policy")],
  ["policy-anchor", (p) => go(p, "policy/CORE-CLS-04")],
  ["state-law", (p) => go(p, "state-law/oh/res")],
  ["state-law-ca", (p) => go(p, "state-law/ca/com")],
  ["deals", (p) => go(p, "deals")],
  ["deals-open", async (p) => { await go(p, "deals/cedar-court"); await p.evaluate(() => document.querySelectorAll("#doc details").forEach((d) => { d.open = true; })); }],
  ["search", async (p) => { await go(p, "home"); await p.click("#search-open"); await p.fill("#search-q", "per diem"); await p.waitForTimeout(300); }],
  ["audit", async (p) => { await go(p, "c03/learn/1"); await auditOn(p); }],
  ["audit-policy", async (p) => { await go(p, "policy"); await auditOn(p); await p.locator(".authorview summary").click(); await p.waitForTimeout(500); }],
);
const browser = await chromium.launch();
const totals = {}, examples = {};
let checked = 0;
// Every view at desktop width in both themes; the phone width repeats them in light, and a short set in dark.
// The long policy page in Audit mode (author view open) is sampled once, at desktop width in light.
const PHONE_DARK = new Set(["home", "c03-learn/1", "c03-quiz", "formula-dscr", "state-law", "deals", "drawer", "search", "sample", "c03-quiz-review", "menu"]);
const runs = [
  [{ width: 1440, height: 900 }, "light", () => true],
  [{ width: 1440, height: 900 }, "dark", (n) => n !== "audit-policy"],
  [{ width: 390, height: 844 }, "light", (n) => n !== "audit-policy"],
  [{ width: 390, height: 844 }, "dark", (n) => PHONE_DARK.has(n)],
];
const jobs = [];
for (const [vp, theme, keep] of runs) for (const v of views.filter(([n]) => keep(n))) jobs.push({ vp, theme, v });
// The slowest views (the long policy page) go first, so the workers finish together.
jobs.sort((a, b) => (b.v[0].startsWith("policy") || b.v[0] === "audit-policy" ? 1 : 0) - (a.v[0].startsWith("policy") || a.v[0] === "audit-policy" ? 1 : 0));
const WORKERS = Math.max(1, Math.min(Number(process.env.A11Y_WORKERS || 4), jobs.length));
const slow = [];
const t0all = Date.now();
async function worker() {
  const ctxs = new Map();
  for (let job = jobs.shift(); job; job = jobs.shift()) {
    const { vp, theme, v: [name, fn] } = job;
    const key = `${vp.width}-${theme}`;
    if (!ctxs.has(key)) {
      const ctx = await browser.newContext({ viewport: vp, colorScheme: theme });
      await ctx.addInitScript(() => { try { localStorage.clear(); } catch { /* storage may be blocked */ } });
      ctxs.set(key, { ctx, p: await ctx.newPage() });
    }
    const { ctx } = ctxs.get(key);
    // A fresh page per view: Audit mode, quiz answers and practice state never leak into the next view.
    const p = await ctx.newPage();
    await p.addInitScript(() => { try { localStorage.clear(); } catch { /* storage may be blocked */ } });
    const t0 = Date.now(); const tag = `${key}-${name}`;
    try { await fn(p); } catch (e) { totals["error:navigation"] = (totals["error:navigation"] || 0) + 1; (examples["error:navigation"] ||= []).push(`${tag}: ${e.message.split("\n")[0]}`); await p.close(); continue; }
    await p.addScriptTag({ content: AXE_SRC });
    const r = await p.evaluate(async () => {
      const res = await axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] }, resultTypes: ["violations"] });
      return res.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes.slice(0, 2).map((x) => x.target.join(" ") + " :: " + (x.failureSummary || "").split("\n").slice(1, 2).join("")) }));
    });
    for (const v of r) { const k = `${v.impact}:${v.id}`; totals[k] = (totals[k] || 0) + v.n; (examples[k] ||= []).push(`${tag}: ${v.ex.join(" | ")}`.slice(0, 300)); }
    await p.close();
    checked++; slow.push([Date.now() - t0, tag]);
  }
  for (const { ctx } of ctxs.values()) await ctx.close();
}
await Promise.all(Array.from({ length: WORKERS }, worker));
await browser.close();
const n = Object.values(totals).reduce((a, b) => a + b, 0);
console.log(`axe-core 4.10.2: ${checked} views checked, ${n} violations.`);
for (const [k, v] of Object.entries(totals)) { console.log(`  ${v}\t${k}`); for (const e of examples[k].slice(0, 3)) console.log(`      ${e}`); }
console.log(`Time: ${Math.round((Date.now() - t0all) / 1000)} s with ${WORKERS} workers.`);
console.log("Slowest views:", slow.sort((a, b) => b[0] - a[0]).slice(0, 4).map(([ms, t]) => `${t} ${Math.round(ms / 1000)}s`).join("; "));
process.exit(n ? 1 : 0);
