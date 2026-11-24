# Snapshot status

The live Course Bible (Claude Doc) is the source of truth until migration is finished.

| File | Snapshot taken | Fresh? |
| --- | --- | --- |
| `course-bible.md` | 24 Nov 2026 (re-exported, doc rev 90) | Current. §2-3 rewritten for the certificate as core + one role track (curriculum review decisions 1-17, 24 Nov 2026); status lines and §1 scope lines updated to match; LD-01 adds that Bloom levels are author metadata |
| `credit-policy/model-credit-policy.md` | 22 Nov 2026 (re-exported) | Current (includes D-CORE-17 to -31 and CORE-PRC-06; CORE-DEF-04 source cell cites *Thorp v. Hartigan*). D-CORE-29 to -31 edits mirrored by hand on 22 Nov 2026, not re-exported. D-CORE-32 and the CORE-PRC-06 (2) part-month sentence (24 Nov 2026, live rev 242) mirrored by hand, not re-exported |
| `formulas/formula-library.md` | 22 Nov 2026 (re-exported) | Current (includes F-CORE-44 to -49; MF and COM loans round to $1,000). F-CORE-49 and the F-CORE-01, -02, -45, -47, -48 edits mirrored by hand on 22 Nov 2026, not re-exported |
| `credit-policy/state-law-table.md` | 22 Nov 2026 | Current (no change since 21 Nov) |
| `state-law-table.csv` | 21 Nov 2026 | Current: derived from the State Law Table, which did not change on 22 Nov |
| `../data/running-deals/running-deals.md` | 22 Nov 2026 | Current (includes the D-CORE-27 SOFR path and the 22 Nov 2026 foundations fixes; see `docs/curriculum/foundations-changes-2026-11-22.md`) |
| `../data/running-deals/running-deals.pdf` and `running-deals.txt` | 20 Nov 2026, 10:21 | Superseded by running-deals.md |
| `../modules/core/c00` | 24 Nov 2026 (re-exported, doc rev 172) | Current. Bloom tags removed from objectives (M3.5). Running-deal numbers now match `data/running-deals/` (22 Nov 2026 foundations fixes: 22 edits). Practice 3 step 5 now cites 17 CFR 246.8 for agency securitizations (open `[VERIFY]` closed; Bible rev 174, mirrored by hand, not re-exported) |
| `../modules/core/c03` | 24 Nov 2026 (re-exported, doc rev 328; rev 348 edits mirrored by hand in `lesson.md`, `lesson-export.txt` not re-exported) | Current. Rev 329-348: O3 cites F-CORE-49; quiz items A6, A10 and B6 fixed and item objective tags relabelled to O1-O6. Bloom paragraph removed and retake text fixed (M3.5). Running-deal numbers now match `data/running-deals/` (95 edits: cap notional, Actual/360 balloons by F-CORE-49, 8.00% cap rate, Birchwood extension at 8.75%, IRR wording). Assumed first payment periods: Jan 2029 (Birchwood), Apr 2029 (Cedar Court) |
| `../modules/core/c04`, `c05`, `c06` | 24 Nov 2026 (re-exported) | Current. The export brings in the v1.0-draft rewrites made in the live tabs after 22 Nov (the repo held v0), plus the M3.5 retake text |
| `../modules/core/c07` | 24 Nov 2026 (re-exported, doc rev 39) | Current. Brings in the C7-lesson-v1.0-draft rewrite (Teach, Practice, OJT task and job aid to the C7 blueprint) and the M3.5 retake text. The quiz is still C7-quiz-v0 (sets A and B) |
| `../modules/core/c08`, `c09` | 22 Nov 2026 | Current (still v0 live). The 24 Nov M3.5 retake text ("Each retake uses the other form.") was mirrored by hand, not re-exported |
| `../modules/core/c01`, `c02`, `c10`-`c14` | 22 Nov 2026 | Reviewed 22 Nov 2026 (round 2); check open items in the review manual. Some use pre-fix deal numbers: see `docs/curriculum/foundations-changes-2026-11-22.md` |

**To refresh:** export each tab from the doc as Markdown and replace the file.

## Pending in the live Bible (24 Nov 2026)

- **Running Deals tab:** 14 suggestions (fund-analyst and founder roles for all three deals; Maple Run liquidity labels; US spelling), from docs/curriculum/running-deals-additions-draft.md. Not yet accepted. After the owner accepts, re-export the tab to data/running-deals/running-deals.md.
- **State Law Table tab:** 6 suggestions (groups (c) redemption, (d) mechanics' lien priority, (e) doing business as an out-of-state lender; counsel and source lists; US spelling), from docs/credit-policy/state-law-new-dimensions-draft.md. Not yet accepted. After acceptance, re-export to docs/credit-policy/state-law-table.md and re-derive state-law-table.csv.
- **C7 tab:** the committed modules/core/c07/lesson.md carries the v1.0-draft header but a v0 body (objectives, Teach, Practice, Job aid). Re-export C7 (found by the credit audit, 24 Nov 2026).

## Repo-owned sources (not in the Bible)

| File | Since | Note |
| --- | --- | --- |
| docs/credit-policy/state-law-research-method.md | 24 Nov 2026 | "How to research a new state" learner page (M4a). The repo copy is the source of truth |
| scripts/course_site/policy_topics.json | 24 Nov 2026 | Build-time map of policy rules to the 13 learner topics, with topic summaries and worked checks. Rule text stays in the Bible's policy |
| scripts/course_site/measured-credits.json | 24 Nov 2026 | Measured study time, from scripts/count_credits.py (`npm run measure:time`). Re-run after any lesson change |
