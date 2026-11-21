"""Recalculate .xlsx workbooks with LibreOffice headless, so tests can read formula results.

openpyxl writes formulas but not their results, and files saved by Excel can hold stale
results. This opens each workbook in LibreOffice with a throwaway profile set to
"always recalculate on load", then saves it back in place (or to --out).

Usage:
  python3 scripts/recalc_xlsx.py excel/output/model.xlsx [more.xlsx ...]
  python3 scripts/recalc_xlsx.py --out recalculated/ excel/output/*.xlsx
Then read values with openpyxl.load_workbook(path, data_only=True).
"""
from __future__ import annotations

import argparse
import pathlib
import shutil
import subprocess
import sys
import tempfile

RECALC_PROFILE = """<?xml version="1.0" encoding="UTF-8"?>
<oor:items xmlns:oor="http://openoffice.org/2001/registry" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<item oor:path="/org.openoffice.Office.Calc/Formula/Load"><prop oor:name="OOXMLRecalcMode" oor:op="fuse"><value>0</value></prop></item>
<item oor:path="/org.openoffice.Office.Calc/Formula/Load"><prop oor:name="ODFRecalcMode" oor:op="fuse"><value>0</value></prop></item>
</oor:items>
"""


def find_soffice() -> str:
    for name in ("soffice", "libreoffice"):
        path = shutil.which(name)
        if path:
            return path
    sys.exit("LibreOffice not found. Install it (Ubuntu: sudo apt-get install -y libreoffice-calc).")


def recalc(files: list[pathlib.Path], out_dir: pathlib.Path | None, timeout: int = 180) -> list[pathlib.Path]:
    soffice = find_soffice()
    results = []
    with tempfile.TemporaryDirectory(prefix="lo-profile-") as prof, tempfile.TemporaryDirectory(prefix="lo-out-") as tmp_out:
        user = pathlib.Path(prof) / "user"
        user.mkdir(parents=True)
        (user / "registrymodifications.xcu").write_text(RECALC_PROFILE)
        cmd = [soffice, f"-env:UserInstallation={pathlib.Path(prof).as_uri()}", "--headless", "--norestore",
               "--calc", "--convert-to", "xlsx:Calc MS Excel 2007 XML", "--outdir", tmp_out,
               *[str(f) for f in files]]
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        for f in files:
            produced = pathlib.Path(tmp_out) / (f.stem + ".xlsx")
            if not produced.exists():
                sys.exit(f"LibreOffice did not convert {f}:\n{proc.stdout}\n{proc.stderr}")
            dest = (out_dir / f.name) if out_dir else f
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(produced), dest)
            results.append(dest)
    return results


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("files", nargs="+", type=pathlib.Path)
    ap.add_argument("--out", type=pathlib.Path, help="write here instead of overwriting the originals")
    args = ap.parse_args()
    missing = [f for f in args.files if not f.exists()]
    if missing:
        sys.exit(f"not found: {', '.join(map(str, missing))}")
    for p in recalc([f.resolve() for f in args.files], args.out.resolve() if args.out else None):
        print(f"recalculated: {p}")


if __name__ == "__main__":
    main()
