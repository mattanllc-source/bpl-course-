# BPL Academy: prioritized to-do list

Updated 24 Nov 2026. Model policy for training - not for live lending decisions.

Priority: **P0** blocks other work or is waiting on the owner · **P1** next, highest value · **P2** the main rewrite · **P3** later or ongoing.
Decision numbers refer to [curriculum/review-2026-11-24/decisions.md](curriculum/review-2026-11-24/decisions.md).

## P0: owner actions (quick, unblock everything else)

| # | Task | Who | Notes |
| --- | --- | --- | --- |
| 1 | Approve the commit of the M3.5 fixes and the review documents | Owner: "OK commit" | All checks pass |
| 2 | Push commits to GitHub | Owner: "push" | Only off-machine backup; runs CI |
| 3 | Confirm the 17 review decisions | Owner: "adopt all" or name changes | Unblocks M4a and the Course Bible §2–3 rewrite |
| 4 | Stop the PC sleeping while checks run | Owner | Settings → System → Power → Never (plugged in). Sleep froze two check runs |
| 5 | End the old `node.exe` processes from 15 Nov | Owner | Possibly another project's dev server, so your call |

## P1: next (before the big rewrite)

| # | Task | Decision | Size |
| --- | --- | --- | --- |
| 6 | **Learner walkthrough of every page**: all 15 modules and the reference shelf, read as each of the four roles; ranked fix list | (new) | M, about 5 agents |
| 7 | **Convert the 166 open-response quiz items to multiple choice** (C0–C2, C10–C14) | 8 | L |
| 8 | **Quiz rules in the engine**: two items per critical skill (quality bar 8.7), option shuffle, a third form or item pool, one wording of the pass mark | 10, 11 | M |
| 9 | **Honest hours**: count each module by the NASBA QAS word-count method; replace "38 hours" with measured figures | 16 | S |
| 10 | **M4a: Model Credit Policy learner page**: 13 deal-order topics by a build-time map, plain topic names in citations, phone topic index, 147 core rules by default | 12 | M |
| 11 | **M4a: State law**: "by topic" comparison view, "research a new state" page, research new dimensions (redemption, mechanics' liens, lending in another state) | 13 | M |
| 12 | **Course Bible sync**: rewrite §2–3 (core + role track certificate); carry the M3.5 fixes (Bloom tags, retake text) into the Bible; re-export snapshots; fix C0 and C3 pre-fix deal numbers | 2, 17 | M |

## P2: the main rewrite (M4, then M5)

| # | Task | Decision | Size |
| --- | --- | --- | --- |
| 13 | Fix the C4 sample before rollout: case outside the lesson's objectives; open-response self-check | 15 | S |
| 14 | **M4: rewrite C0–C5** in the lesson format, in the repo: new C0 (five job objectives), life cycle moved from C2, market data to C4, new multiple-choice quizzes, full review gate and owner screenshots per module; mark each in `SNAPSHOT.md` | 5, 6, 9, 15 | XL |
| 15 | Rewrite the 164 existing multiple-choice items as each module is rewritten: full-question stems, a rationale for every option, balanced keys, exhibits, judgment items | 9 | L (within 14, 17) |
| 16 | Reference updates: show the 73 core formulas by default; drop 50 duplicate glossary examples; add analyst and founder tasks to the running deals; label Maple Run's two liquidity figures | 14 | M |
| 17 | **M5: rewrite C6–C14** the same way; move C07-O6 and C12-O8 to tracks; merge C09-O5 into C11-O2 | 7 | XL |
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

- M2b design and M2c mobile pass: commit 8018f18; published to the course artifact (version 9).
- CLAUDE.md updated for the four roles and the check and commit procedure.
- Curriculum review (reports A and B, decision list).
- M3.5: author tags stripped, quiz retake text fixed (uncommitted, waiting on item 1).
