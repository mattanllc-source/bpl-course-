"""Export each family's formula test cases to formulas/<family>/tests/fixtures.json.

The reference scripts in formulas/<family>/reference/ generated the Formula Library.
This runs them in a sandbox namespace (no file writes) and saves their test cases,
so the TypeScript formulas can be tested against the same expected values.
Run: python3 scripts/export_formula_fixtures.py
"""
import json
import os
import pathlib
import types

ROOT = pathlib.Path(__file__).resolve().parent.parent
FAMILIES = ["core", "residential", "multifamily", "commercial"]


def load(path: pathlib.Path) -> list:
    src = path.read_text()
    fake_json = types.SimpleNamespace(dump=lambda *a, **k: None, dumps=json.dumps, load=json.load)
    ns = {"__name__": "reference", "__file__": str(path)}
    # Silence prints and file writes from the original generator.
    ns["print"] = lambda *a, **k: None
    code = compile(src, str(path), "exec")
    import builtins
    real_open = builtins.open
    builtins.open = lambda *a, **k: real_open(os.devnull, "w") if ("w" in (a[1:2] or [k.get("mode", "r")])[0]) else real_open(*a, **k)
    try:
        exec(code, ns)
    finally:
        builtins.open = real_open
    del fake_json
    return ns["F"]


def main() -> None:
    total = 0
    for fam in FAMILIES:
        F = load(ROOT / "formulas" / fam / "reference" / "library_source.py")
        out = [
            {"id": f["id"], "name": f["name"],
             "tests": [{"inputs": a, "expected": b} for a, b in f["tests"]]}
            for f in F
        ]
        dest = ROOT / "formulas" / fam / "tests" / "fixtures.json"
        dest.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
        n = sum(len(f["tests"]) for f in out)
        total += n
        print(f"{fam}: {len(out)} formulas, {n} test cases -> {dest.relative_to(ROOT)}")
    print(f"total test cases: {total}")


if __name__ == "__main__":
    main()
