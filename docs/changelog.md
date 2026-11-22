# Changelog

## 2026-11-22
- Modules C0 to C14 re-exported from the Course Bible after the module review: accuracy fixes, content gaps filled, and a self-check, "What to look up yourself" and "How to check it" in every module.
- Policy decisions D-CORE-17 to -22 added to the Model Credit Policy: loans round down to the nearest $1,000 (CORE-PRC-05); a property held and operated 12+ months counts as rental experience (CORE-BOR-15, -18); property cover at 100% of replacement cost and builder's risk at 100% of completed value (CORE-INS-01, -04); lender's title policy for the full commitment, each draw insured as it funds (CORE-CLS-06); trusts may own part of a borrower but never borrow (CORE-KYC-08, -09, CORE-BOR-19); residential leases of 12 to 36 months, copy within 10 business days (RES-GEN-11, CORE-SVC-06).
- Reference snapshots refreshed: Model Credit Policy, Formula Library (rounding notes, F-CORE-19 test 3, F-CORE-27 and -34 edge cases) and running deals (Maple Run lease term).
- F-CORE-19 `maxLoan` now rounds the lowest sizing test down to the nearest $1,000 (CORE-PRC-05, D-CORE-17), via new `LOAN_ROUNDING_INCREMENT` in `formulas/core/policy.ts`; the F-CORE-17 to -19 notes in the reference script cite CORE-PRC-05, test 3 now expects $2,468,000.00 (was $2,468,378.00), and fixtures are rebuilt.

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
