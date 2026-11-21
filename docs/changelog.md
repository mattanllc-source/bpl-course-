# Changelog

## 2026-11-21
- TypeScript port of the core family complete: all 41 formulas (F-CORE-01 to -37, -40 to -43), each tested against its fixtures with the same display rounding, plus a `RangeError` test. A catalogue test checks that every core fixture ID is ported.
- New `formulas/core/policy.ts` holds the Model Credit Policy limits the formulas use, by rule ID: CORE-BOR-11, -12, -15, -16; CORE-PRC-02 grid; CORE-SVC-03; CORE-VAL-02; CORE-CONC-01. Values checked against the 21 Nov 2026 policy snapshot and the reference script.
- New display helpers `ratioX` and `fixed` (`fixed` matches Python `format()`, ties to even). `pct` now shows negatives with a true minus sign, matching the fixtures.
- A negative F-CORE-41 wire throws, per the Library ("stop and recheck"). F-CORE-31 takes an optional state usury cap.
- Formulas F-CORE-40 to -43 and F-RES-25 added to the reference scripts from the 21 Nov 2026 Formula Library export, and fixtures rebuilt. Core now has 41 formulas and 123 test cases; residential has 25 and 75. All 118 formulas and 354 test cases are now scripted.
- Doc snapshots refreshed from the live Course Bible: Course Bible, Model Credit Policy, Formula Library, State Law Table (and `state-law-table.csv`), and running deals, now `running-deals.md`; the `.pdf` and `.txt` are kept but superseded (see `SNAPSHOT.md`).

## 2026-11-20
- Repository created. Folder layout set up.
- Snapshots of the Course Bible, policy, formula library, State Law Table and running deals added (see `SNAPSHOT.md`).
- Core modules C0 to C14 added as lesson drafts.
- Doc changes the same day: C0, C1 and C2 written; new rule CORE-BP-04 (use of proceeds on cash-out refinances).
- Tooling: npm workspaces, Vitest, ESLint, Playwright, GitHub Actions workflow, LibreOffice recalculation script, Remotion scaffold.
- First TypeScript formulas: F-CORE-01, -02, -14, -15, tested against the Library's expected values.
