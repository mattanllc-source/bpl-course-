# BPL Course — Business-Purpose Real Estate Lending

Internal training course. **Model policy for training - not for live lending decisions.** All deal data is fictional.

## Layout

| Path | What it holds |
| --- | --- |
| `docs/` | Course Bible, model credit policy, formula library, State Law Table (CSV), style guide, changelog |
| `formulas/{core,residential,multifamily,commercial}/` | Formula code, `tests/`, and `reference/` (the Python scripts that generated the library and its test cases) |
| `data/running-deals/` | RD-RES-01 Maple Run, RD-MF-01 Cedar Court, RD-COM-01 Birchwood Plaza |
| `data/sample-files/` | Fictional sample documents (rent rolls, T-12s, appraisals) |
| `calculators/` | Vite + React + TypeScript calculators |
| `excel/` | Python (openpyxl) workbook builders |
| `videos/` | Remotion video projects |
| `modules/` | One folder per module: `core/c00`-`c14`, `residential/r1`-`r6`, `multifamily/m1`-`m6`, `commercial/cm1`-`cm6` |
| `assessments/` | Quiz banks. `answer-keys/` is git-ignored |
| `exports/` | Generated outputs (PDF, DOCX, XLSX) |
| `scripts/` | Build and maintenance scripts |

## Source of truth

The live Course Bible is a Claude Doc. Files in `docs/` and `modules/` are snapshots of it. See `docs/SNAPSHOT.md` for dates and freshness.
