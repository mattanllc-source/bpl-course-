# BPL Academy: prioritized to-do list

Updated 24 Nov 2026. Model policy for training - not for live lending decisions.

Priority: **P0** blocks other work or is waiting on the owner · **P1** next, highest value · **P2** the main rewrite · **P3** later or ongoing.
Decision numbers refer to [curriculum/review-2026-11-24/decisions.md](curriculum/review-2026-11-24/decisions.md).

## P0: owner actions (quick, unblock everything else)

| # | Task | Who | Notes |
| --- | --- | --- | --- |
| 4 | Stop the PC sleeping while checks run | Owner | Settings → System → Power → Never (plugged in). Sleep froze two check runs |
| 5 | End the old `node.exe` processes from 15 Nov | Owner | Possibly another project's dev server, so your call |

## P1: next (before the big rewrite)

| # | Task | Decision | Size |
| --- | --- | --- | --- |
| 6a | **Walkthrough fix-now, repo side** (report C items 19–25, 30–33, S1–S2, S4–S5): desk contradictions in `scripts/course_site/exercises/`; "Workplace task task" heading in `build.py`; footnote conversion for `[VERIFY]` in desk text; desks that reuse quiz items; shelf `dealOfTest` replaced by an explicit deal field; residential formula cases updated to current Maple Run pricing (rebuild fixtures, changelog); MF-BR-14 card split and COM-BR-09 / COM-TRM-09 duplicate IDs | C | M |
| 6b | **Walkthrough fix-now, Course Bible side** (report C items 1–18, 26–29, S3, S6): carry the 22 Nov deal fixes into the module tabs and fix the new errors (C11/C9 interest reserve, C13 rerun at 8.75% / 9.00%, C1 occupancy and HMDA lines, C5 seasoning, C2 "second source", C9 coinsurance cap, C4 vacancy and hook); glossary definitions; then re-export. Widens to-do 12 | C | L |
| 6c | **Legal check of the walkthrough's uncertain items** (report C list: California Article XV, HMDA temporary financing, 31 CFR 1029, Section 1071, Ohio 1343.01, undated shelf tags and others) by the legal-regulatory-verifier | C | M |
| 7 | **Convert the 166 open-response quiz items to multiple choice** (C0–C2, C10–C14) | 8 | L |
| 8 | **Quiz rules in the engine**: two items per critical skill (quality bar 8.7), option shuffle, a third form or item pool, one wording of the pass mark | 10, 11 | M |
| 9 | **Honest hours**: count each module by the NASBA QAS word-count method; replace "38 hours" with measured figures | 16 | S |
| 10 | **M4a: Model Credit Policy learner page**: 13 deal-order topics by a build-time map, plain topic names in citations, phone topic index, 147 core rules by default | 12 | M |
| 11 | **M4a: State law**: "by topic" comparison view, "research a new state" page, research new dimensions (redemption, mechanics' liens, lending in another state) | 13 | M |
| 12 | **Course Bible sync**: rewrite §2–3 (core + role track certificate); carry the M3.5 fixes (Bloom tags, retake text) into the Bible; re-export snapshots; fix pre-fix deal numbers in C0, C2, C3, C8–C12 and C14 (with 6b) | 2, 17 | M |

## P2: the main rewrite (M4, then M5)

| # | Task | Decision | Size |
| --- | --- | --- | --- |
| 13 | Fix the C4 sample before rollout: case outside the lesson's objectives; open-response self-check | 15 | S |
| 14 | **M4: rewrite C0–C5** in the lesson format, in the repo, taking in report C's rewrite and add items for each module: new C0 (five job objectives), life cycle moved from C2, market data to C4, new multiple-choice quizzes, full review gate and owner screenshots per module; mark each in `SNAPSHOT.md` | 5, 6, 9, 15 | XL |
| 15 | Rewrite the 164 existing multiple-choice items as each module is rewritten: full-question stems, a rationale for every option, balanced keys, exhibits, judgment items | 9 | L (within 14, 17) |
| 16 | Reference updates: show the 73 core formulas by default; drop 50 duplicate glossary examples; add analyst and founder tasks to the running deals; label Maple Run's two liquidity figures | 14 | M |
| 17 | **M5: rewrite C6–C14** the same way, with report C's rewrite and add items; move C07-O6 and C12-O8 to tracks; merge C09-O5 into C11-O2 | 7 | XL |
| 18 | Bring sentences under 25 words (180 left) as each module is rewritten | CLAUDE.md | within 14, 17 |

## P3: later or ongoing

| # | Task | Size |
| --- | --- | --- |
| 19 | **M6: four role tracks** (originator ~8 h, underwriter ~8 h, analyst ~12 h, founder ~12 h), capstones on the ground-up deal, final exams | XL |
| 20 | Owner to supply the limits and formulas the tracks need (e.g. founder unit economics); nothing gets invented | Owner |
| 21 | Have a practitioner check the founder task list (thin evidence) | Owner |
| 22 | Legal check before release: re-verify every `[VERIFY]` tag against primary sources | M |
| 23 | NASBA QAS accreditation audit at each gate and before release | M |
| 24 | Hosting decision: accounts and synced progress across devices (today progress stays in one browser) | Decision |
| 25 | Tooling: per-view timeout and progress output in `check_a11y`; make checks survive sleep | S |
| 26 | Design follow-ups: reading-progress bar in the sample's "On this page" box; heading order (module line is the h1, page title an h3); decide whether margin footnotes return on wide screens | S |
| 27 | Product-family electives (residential, multifamily, commercial) after the core and tracks | XL |

## Done recently

- Learner walkthrough of every page (to-do 6): [C-learner-walkthrough.md](curriculum/review-2026-11-24/C-learner-walkthrough.md), 7 agents, ranked fix list.
- Owner adopted all 17 review decisions (24 Nov 2026), and the four walkthrough recommendations (C13 at D-CORE-27 rates; full names for both Danas; F-CORE-44 renamed; policy gaps wait for the owner).
- M2b design and M2c mobile pass: commit 8018f18; published to the course artifact (version 9).
- CLAUDE.md updated for the four roles and the check and commit procedure.
- Curriculum review (reports A and B, decision list).
- M3.5: author tags stripped, quiz retake text fixed; committed (affaed8) and pushed.
