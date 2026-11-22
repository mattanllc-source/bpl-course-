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

## Commands

| Command | What it does |
| --- | --- |
| `npm ci` | Install Node dependencies (root and `calculators/`) |
| `pip install -r excel/requirements.txt` | Install Python dependencies |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check for `formulas/` |
| `npm test` | Vitest: formula tests against the Library's expected values |
| `npm run test:excel` | pytest: Excel tests (needs LibreOffice) |
| `npm run test:e2e` | Playwright browser tests of `calculators/`. Set `PW_CHANNEL=chrome` to use an installed Chrome |
| `npm run fixtures` | Rebuild `formulas/*/tests/fixtures.json` from the reference scripts |
| `npm run xlsx:recalc -- <files>` | Recalculate `.xlsx` files with LibreOffice headless |
| `npm run dev -w @bpl/calculators` | Run the calculators locally |
| `cd videos && npm install && npm run studio` | Open Remotion Studio |

On Windows, activate .venv first (.venv\Scripts\activate)

CI (`.github/workflows/tests.yml`) runs all of these checks on every push.

## Formula port status

The reference scripts hold all 123 formulas and 369 test cases (core 46, residential 25, multifamily 28, commercial 24). Ported to TypeScript so far (46 of 123):

| Family | Ported | Status |
| --- | --- | --- |
| Core | 46 of 46 (F-CORE-01 to -37, -40 to -48; -38 and -39 are reserved) | Done. Policy limits in `formulas/core/policy.ts` |
| Residential | 0 of 25 | Not started |
| Multifamily | 0 of 28 | Not started |
| Commercial | 0 of 24 | Not started |
