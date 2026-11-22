// Bundle formulas/core/{index,policy}.ts and formulas/shared/round.ts into one browser script (global BPLF).
// Uses TypeScript's transpileModule (esbuild is not installed). Prints the script to stdout.
// Model policy for training - not for live lending decisions.
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const ts = createRequire(path.join(root, "package.json"))("typescript");
const files = { "./policy": "formulas/core/policy.ts", "./index": "formulas/core/index.ts", "../shared/round": "formulas/shared/round.ts" };
let out = "var BPLF=(function(){\"use strict\";var defs={},cache={};\n";
for (const [name, rel] of Object.entries(files)) {
  const src = readFileSync(path.join(root, rel), "utf8");
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }, reportDiagnostics: false }).outputText;
  out += `defs[${JSON.stringify(name)}]=function(exports,require){${js}\n};\n`;
}
out += `function req(n){if(!defs[n])throw new Error("missing module "+n);if(!cache[n]){cache[n]={};defs[n](cache[n],req);}return cache[n];}
var core=req("./index"),rnd=req("../shared/round");
var F=Object.assign({},core);
function fmt(kind,v){
  switch(kind){
    case "money":return rnd.money(v);
    case "pct1":return rnd.pct(v,1);
    case "pct2":return rnd.pct(v,2);
    case "ratioX":return rnd.ratioX(v);
    case "fixed6":return rnd.fixed(v,6);
    case "days":return String(Math.round(v))+" days";
    case "months1":return rnd.fixed(v,1)+" months";
    case "text":return String(v);
    default:throw new Error("unknown format "+kind);
  }
}
return {funcs:F,fmt:fmt,round:rnd};
})();
`;
process.stdout.write(out);
