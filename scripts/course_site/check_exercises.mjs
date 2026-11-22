// Validate exercise specs against the bundled core formulas. Exits 1 with every problem listed.
// Usage: node check_exercises.mjs <bundle.js> <exercises-dir>
// Model policy for training - not for live lending decisions.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
const [bundle, dir] = process.argv.slice(2);
const ctx = {}; vm.runInNewContext(readFileSync(bundle, "utf8") + ";this.B=BPLF", ctx);
const B = ctx.B;
const errs = [];
const TYPES = ["calculator", "buildup", "sort", "order", "decision", "scenario"];
const FORMATS = ["money", "pct1", "pct2", "ratioX", "fixed6", "days", "months1", "text"];
const KINDS = ["money", "rate", "days", "months", "count", "date", "bool", "tier", "list-money"];
const num = (s) => String(s).replace(/[^\d.\-−]/g, "").replace("−", "-");
function callCalc(c) {
  const fn = B.funcs[c.function];
  if (typeof fn !== "function") throw new Error(`calculator names unknown function "${c.function}"`);
  const vals = c.args.map((a) => a.value);
  if (c.argStyle === "object") return fn(Object.fromEntries(c.args.map((a) => [a.name, a.value])));
  return fn(...vals);
}
export function check(file) {
  const where = path.basename(file);
  let spec;
  try { spec = JSON.parse(readFileSync(file, "utf8")); } catch (e) { errs.push(`${where}: invalid JSON (${e.message})`); return; }
  const mod = path.basename(file, ".json");
  if (spec.module !== mod) errs.push(`${where}: "module" is "${spec.module}", expected "${mod}"`);
  if (!Array.isArray(spec.exercises) || !spec.exercises.length) { errs.push(`${where}: no exercises`); return; }
  const ids = new Set();
  for (const ex of spec.exercises) {
    const w = `${where} ${ex.id || "?"}`;
    const need = (c, m) => { if (!c) errs.push(`${w}: ${m}`); };
    need(ex.id && !ids.has(ex.id), "missing or duplicate id"); ids.add(ex.id);
    need(TYPES.includes(ex.type), `bad type "${ex.type}"`);
    need(ex.title && ex.intro, "title and intro are required");
    need(Array.isArray(ex.sources), "sources must be an array");
    try {
      if (ex.type === "calculator") {
        const c = ex.calculator; need(c && Array.isArray(c.args) && c.output && c.task && c.answer, "calculator needs args, output, task, answer");
        for (const a of c.args) { need(KINDS.includes(a.kind), `arg ${a.name}: bad kind ${a.kind}`); need(a.label && "value" in a, `arg ${a.name}: label and value required`); }
        need(FORMATS.includes(c.output.format), `bad output format ${c.output.format}`);
        let r = callCalc(c);
        if (c.output.path) r = r[c.output.path];
        const got = B.fmt(c.output.format, r);
        const same = ["days", "months1"].includes(c.output.format) ? num(got) === num(c.answer) : got === c.answer;
        if (!same) errs.push(`${w}: ${c.function} gives "${got}" but answer says "${c.answer}"`);
      } else if (ex.type === "buildup") {
        const b = ex.buildup; need(b && b.context && Array.isArray(b.lines) && b.lines.length, "buildup needs context and lines");
        for (const l of b.lines) need(l.label && typeof l.expected === "number" && FORMATS.includes(l.format), `buildup line "${l.label}" incomplete`);
      } else if (ex.type === "sort") {
        const s = ex.sort; need(s && s.buckets && s.items && s.items.length >= 6 && s.items.length <= 10, "sort needs 6-10 items");
        for (const i of s.items) need(s.buckets.includes(i.bucket) && i.text && i.why, `sort item "${i.text}" has a bad bucket or no why`);
      } else if (ex.type === "order") {
        const o = ex.order; need(o && o.steps && o.steps.length >= 4 && o.steps.length <= 9 && o.why, "order needs 4-9 steps and why");
      } else if (ex.type === "decision") {
        const d = ex.decision; need(d && d.nodes && d.nodes.start && Array.isArray(d.cases), "decision needs nodes.start and cases");
        for (const [id, n] of Object.entries(d.nodes)) {
          if (n.options) for (const o of n.options) need(d.nodes[o.next], `node ${id}: option "${o.label}" points to missing "${o.next}"`);
          else need(n.result && n.explain, `end node ${id} needs result and explain`);
        }
        for (const c of d.cases) need(d.nodes[c.expect] && !d.nodes[c.expect].options, `case "${c.text}" expects a missing or non-end node`);
      } else if (ex.type === "scenario") {
        const s = ex.scenario; need(s && s.case && s.prompt && s.model_answer && Array.isArray(s.rubric) && s.rubric.length, "scenario needs case, prompt, model_answer, rubric");
      }
    } catch (e) { errs.push(`${w}: ${e.message}`); }
  }
}
if (existsSync(dir)) for (const f of readdirSync(dir).filter((f) => /^c\d\d\.json$/.test(f)).sort()) check(path.join(dir, f));
if (errs.length) { console.error("Exercise spec problems:\n - " + errs.join("\n - ")); process.exit(1); }
