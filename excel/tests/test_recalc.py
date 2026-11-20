"""Checks that scripts/recalc_xlsx.py fills in formula results, including stale ones."""
import pathlib
import re
import shutil
import sys
import zipfile

import openpyxl
import pytest

ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts"))
from recalc_xlsx import recalc  # noqa: E402

pytestmark = pytest.mark.skipif(not (shutil.which("soffice") or shutil.which("libreoffice")),
                                reason="LibreOffice not installed")


def build(path: pathlib.Path) -> None:
    """Maple Run LTC (F-CORE-15): $340,000 ÷ $400,000."""
    wb = openpyxl.Workbook()
    ws = wb.active
    ws["A1"], ws["A2"], ws["A3"] = 340000, 400000, "=A1/A2"
    wb.save(path)


def test_fills_results_openpyxl_left_empty(tmp_path):
    f = tmp_path / "ltc.xlsx"
    build(f)
    assert openpyxl.load_workbook(f, data_only=True).active["A3"].value is None
    recalc([f], None)
    assert openpyxl.load_workbook(f, data_only=True).active["A3"].value == pytest.approx(0.85)


def test_replaces_stale_cached_result(tmp_path):
    f = tmp_path / "ltc.xlsx"
    build(f)
    recalc([f], None)  # now holds a cached 0.85
    # Change the cost to $390,000 inside the file, leaving the old cached 0.85 in place.
    stale = tmp_path / "stale.xlsx"
    with zipfile.ZipFile(f) as zin, zipfile.ZipFile(stale, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename == "xl/worksheets/sheet1.xml":
                data = re.sub(rb'(<c r="A2"[^>]*><v>)400000(</v>)', rb"\g<1>390000\g<2>", data)
            zout.writestr(item, data)
    assert openpyxl.load_workbook(stale, data_only=True).active["A3"].value == pytest.approx(0.85)
    recalc([stale], None)
    assert openpyxl.load_workbook(stale, data_only=True).active["A3"].value == pytest.approx(340000 / 390000)
