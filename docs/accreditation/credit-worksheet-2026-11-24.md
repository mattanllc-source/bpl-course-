# Credit worksheet: 24 Nov 2026 re-measure

**Shown to learners:** the course page shows the spec-rule minutes (open-answer practice excluded), rounded down to 5 minutes, and claims no CPE credit.

Model policy for training - not for live lending decisions.

Provider: BPL Academy. Delivery method: QAS Self Study. Computed 24 Nov 2026 from the working tree at commit `b55fb45` (to-do 9; owner decision 16).

This re-runs the method of `credit-worksheet-baseline.md` (22 Nov 2026, commit `2632c58`) on today's files. It is a **measure of the course as written today**, not a filing worksheet. The final worksheets are a Phase 6 deliverable, computed from the final word and item counts after Gate 3.

Machine-readable copy: `scripts/course_site/measured-credits.json`. The counting script is kept outside the repo (`count_credits.py` in the session scratchpad); it takes `--ref <commit>` so it can re-measure any commit.

## Method

Formula (Std 7.02.5-.7, from `qas-spec.md`):

credits = [(words ÷ 180) + audio/video minutes + (all questions × 1.85)] ÷ 50

Each module is its own program, so credits are rounded down per module to 0.2 (fifths). The 0.5 column is shown for state boards that use halves only. Arithmetic uses Python `Decimal`; minutes are shown to 3 decimals, half up.

**Words counted** (from `modules/core/cNN/lesson.md`), exactly as the baseline defines them:

- Section 3 "Teach" (all teach chunks and worked examples, tables included).
- Section 8 "Job aid".
- The learner part of the closing section: "Real-world check", "What to look up yourself" and "How to check it".

Fenced code blocks (Mermaid) removed, link targets removed, table rule lines removed, Markdown symbols stripped. A word is any whitespace-separated token with a letter, digit or `$`.

**Words excluded:** module facts table, timing plan, 1 Hook, 2 Objectives, 5 Practice, 6 Quiz (both sets and keys), 7 OJT task, alignment matrix, the self-review table and the self-check items. These are unchanged from the baseline.

**Questions counted** per module = Practice items + Self-check items + Quiz Set A items + interactive exercises.

- Quiz Set B is a parallel retake form, so only Set A counts.
- Each exercise in `scripts/course_site/exercises/cNN.json` counts as one question (3 per module, 45 in all).
- No module has audio or video. The page's "Listen" read-aloud is narration of the text and does not count (Std 7.02).

### Counting choices today's lessons forced

The rewritten lessons (C0, C3-C6) use layouts the baseline never met. Each choice below is applied the same way to every module.

1. **Practice with a model answer after each problem.** C0, C4 and C5 indent a model answer under each numbered problem. The baseline rule ("items before the Model answer label") would stop after item 1. The script counts every top-level numbered problem; numbered steps inside a model answer are not items.
2. **Practice labelled "Problem N".** C3 has no numbered list: it has 12 bold "**Problem N**" labels, each followed by "**Model answer**". Each label counts as one practice item.
3. **"Sources for Teach" lists.** C0, C3, C4 and C5 end section 3 with a numbered list of sources (1,574 words in all). They are **excluded**: a reference list is an appendix, which Std 7.02 excludes, and it is not reading text. Counting them would add 8.744 minutes course-wide and change no module's credit.
4. **Sub-parts.** A practice problem with parts (a) to (d) counts once, as at baseline.

### Two baseline slips, found by re-running it

The script reproduces the baseline's question counts exactly (374) on the baseline files. Its word counts differ in 12 of 15 modules, for two reasons. Both slips are in the baseline, not in the stated method.

- In C0-C2 and C10-C14 (no "Real-world check"), the baseline counted none of the closing text. That left out 63 to 186 words per module.
- In C6-C9 ("Real-world check" placed before "Self-check"), the baseline also counted the self-check text as words: 201, 212, 161 and 166 words. Those items were already counted as questions.

Re-run correctly on the baseline files, the baseline is 26,186 words, 837.378 minutes and 15.8 credits, not 26,126 words, 837.044 minutes and 15.6 credits. C12 moves from 1.0 to 1.2 credits; no other module changes.

**Important.** Std 7.02 counts all questions in the time formula. That is separate from whether a question *qualifies* as a QAS review question or final exam item. **Today no question qualifies.** Every quiz and self-check is self-marked, its answers can be revealed, and C0-C2 and C10-C14 still use open-answer quizzes (compliance matrix rows M13-M16, M24-M25). Phase 3 replaces them.

## Per-module worksheet

| Module | Counted words | Words ÷ 180 (min) | Practice | Self-check | Quiz Set A | Exercises | All questions | Questions × 1.85 (min) | Media (min) | Total (min) | Credits, raw | Credits (0.2, round down) | Credits (0.5, round down) | Planned credits (Course Bible §3, 24 Nov) | Min review Qs at this credit | Min exam items at this credit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| C0 | 10,922 | 60.678 | 7 | 5 | 7 | 3 | 22 | 40.700 | 0 | 101.378 | 2.028 | 2.0 | 2.0 | 2.0 | 6 | 10 |
| C1 | 1,652 | 9.178 | 7 | 3 | 10 | 3 | 23 | 42.550 | 0 | 51.728 | 1.035 | 1.0 | 1.0 | 3.4 | 3 | 5 |
| C2 | 1,513 | 8.406 | 6 | 4 | 10 | 3 | 23 | 42.550 | 0 | 50.956 | 1.019 | 1.0 | 1.0 | 3.0 | 3 | 5 |
| C3 | 11,581 | 64.339 | 12 | 4 | 12 | 3 | 31 | 57.350 | 0 | 121.689 | 2.434 | 2.4 | 2.0 | 3.4 | 7 | 13 |
| C4 | 16,164 | 89.800 | 12 | 4 | 12 | 3 | 31 | 57.350 | 0 | 147.150 | 2.943 | 2.8 | 2.5 | 4.0 | 9 | 15 |
| C5 | 16,976 | 94.311 | 12 | 5 | 12 | 3 | 32 | 59.200 | 0 | 153.511 | 3.070 | 3.0 | 3.0 | 4.0 | 9 | 15 |
| C6 | 14,767 | 82.039 | 6 | 6 | 12 | 3 | 27 | 49.950 | 0 | 131.989 | 2.640 | 2.6 | 2.5 | 4.4 | 8 | 14 |
| C7 | 2,264 | 12.578 | 5 | 6 | 10 | 3 | 24 | 44.400 | 0 | 56.978 | 1.140 | 1.0 | 1.0 | 3.4 | 3 | 5 |
| C8 | 1,561 | 8.672 | 5 | 6 | 12 | 3 | 26 | 48.100 | 0 | 56.772 | 1.135 | 1.0 | 1.0 | 4.8 | 3 | 5 |
| C9 | 2,759 | 15.328 | 5 | 5 | 12 | 3 | 25 | 46.250 | 0 | 61.578 | 1.232 | 1.2 | 1.0 | 4.0 | 3 | 7 |
| C10 | 2,016 | 11.200 | 5 | 5 | 10 | 3 | 23 | 42.550 | 0 | 53.750 | 1.075 | 1.0 | 1.0 | 3.4 | 3 | 5 |
| C11 | 1,451 | 8.061 | 6 | 6 | 10 | 3 | 25 | 46.250 | 0 | 54.311 | 1.086 | 1.0 | 1.0 | 3.0 | 3 | 5 |
| C12 | 1,940 | 10.778 | 6 | 6 | 12 | 3 | 27 | 49.950 | 0 | 60.728 | 1.215 | 1.2 | 1.0 | 4.0 | 3 | 7 |
| C13 | 2,033 | 11.294 | 6 | 6 | 12 | 3 | 27 | 49.950 | 0 | 61.244 | 1.225 | 1.2 | 1.0 | 4.4 | 3 | 7 |
| C14 | 1,652 | 9.178 | 8 | 6 | 12 | 3 | 29 | 53.650 | 0 | 62.828 | 1.257 | 1.2 | 1.0 | 4.6 | 3 | 7 |
| **Total** | **89,251** | **495.839** | **108** | **77** | **165** | **45** | **395** | **730.750** | **0** | **1,226.589** | **24.532** | **23.6** | **22.0** | **55.8** | **69** | **125** |

Total time: 1,226.589 minutes, or 20.443 hours. Minimums follow the spec's fraction rules (Std 5.01.2.1 and 6.01.2): review = 3 per whole credit, plus 0, 1, 2 or 3 for a 0.2, 0.4, 0.6 or 0.8 fraction; exam = 5 per whole credit, plus 2, 3, 4 or 5.

**Where the counted words sit** (Teach excludes the Sources list):

| Module | Teach | Job aid | Closing (learner part) | Sources list (excluded) |
| --- | ---: | ---: | ---: | ---: |
| C0 | 10,764 | 95 | 63 | 647 |
| C1 | 1,485 | 103 | 64 | 0 |
| C2 | 1,310 | 145 | 58 | 0 |
| C3 | 10,759 | 424 | 398 | 308 |
| C4 | 15,301 | 361 | 502 | 384 |
| C5 | 16,074 | 404 | 498 | 235 |
| C6 | 14,181 | 260 | 326 | 0 |
| C7 | 1,799 | 210 | 255 | 0 |
| C8 | 1,158 | 199 | 204 | 0 |
| C9 | 2,313 | 220 | 226 | 0 |
| C10 | 1,678 | 152 | 186 | 0 |
| C11 | 1,260 | 94 | 97 | 0 |
| C12 | 1,647 | 133 | 160 | 0 |
| C13 | 1,786 | 140 | 107 | 0 |
| C14 | 1,465 | 122 | 65 | 0 |

### Worked example: C4

1. Words: 15,301 Teach + 361 Job aid + 502 closing = 16,164. 16,164 ÷ 180 = 89.800 minutes.
2. Questions: 12 practice + 4 self-check + 12 quiz (Set A) + 3 exercises = 31. 31 × 1.85 = 57.350 minutes.
3. Media: 0 minutes.
4. Total: 89.800 + 57.350 + 0 = 147.150 minutes. 147.150 ÷ 50 = 2.943 credits.
5. Round down to fifths: 2.8 credits (0.5 increments: 2.5). Minimums at 2.8: review 3 × 2 + 3 = 9; exam 5 × 2 + 5 = 15.

C4 needs 2.850 more minutes, about 513 words, to reach 3.0.

## Depth: which modules are written in full

| Group | Modules | Counted words | Minutes | Credits (0.2) | Share of reading time |
| --- | --- | ---: | ---: | ---: | --- |
| Teach written to blueprint depth (v1.0-draft) | C0, C3, C4, C5, C6 | 70,410 | 655.717 | 12.8 | Reading is 53-62% of each module's time |
| Thin (v0 teach text) | C1, C2, C7, C8, C9, C10, C11, C12, C13, C14 | 18,841 | 570.872 | 10.8 | Reading is 15-25% of each module's time |

- **Full depth (teach text only).** C0, C3, C4, C5 and C6 carry 10,900 to 17,000 counted words each. Their review questions and exams are still the v0 quizzes, so their credit will change in Phase 3.
- **Thin.** The other ten modules carry 1,450 to 2,760 words. Each lands at 1.0 or 1.2 credits, and about 80% of that is question time, not reading.
- **C7 is stale in the repo.** `docs/SNAPSHOT.md` and the changelog say C7 was re-exported with its v1.0-draft rewrite. The committed `modules/core/c07/lesson.md` has the new header table only. Its objectives (5, not 6), Teach, Practice and Job aid are still the v0 text: word and item counts match the baseline file exactly. Re-export C7 before relying on this row. Its measured 1.0 credit is the v0 lesson.

## Borderline modules

One minute of formula time is 180 words or about half a question.

| Module | Minutes | Nearest boundary | Margin | Note |
| --- | ---: | --- | --- | --- |
| C12 | 60.728 | 1.2 at 60 min | 0.728 min over (131 words) | Was 1.0 in the published baseline; any trim drops it |
| C2 | 50.956 | 1.0 at 50 min | 0.956 min over (172 words) | |
| C13 | 61.244 | 1.2 at 60 min | 1.244 min over (224 words) | |
| C0 | 101.378 | 2.0 at 100 min | 1.378 min over (248 words) | Losing one quiz item drops it to 1.8 |
| C4 | 147.150 | 3.0 at 150 min | 2.850 min short (513 words) | |

**Sensitivity.** These choices could move the figures:

- Counting the Sources lists: +1,574 words, +8.744 minutes. No module changes credit.
- Leaving out the `[VERIFY: ...]` source tags in Teach and Job aid (the page shows them as footnotes): −3,397 words, −18.872 minutes. Most of it falls in C4 (669 words), C5 (763) and C6 (523).
- **Applying the spec's own counting rule.** `qas-spec.md` ("Counting items for credits", decided 22 Nov 2026, Gate 1 observation 1) excludes open-answer practice. The baseline predates that rule, and this re-run follows the baseline as instructed. Under the spec rule the course measures **1,026.789 minutes (17.113 hours)** and 18.8 credits. Every module drops 0.2 to 0.6 credits; C1 and C2 fall to 0.6.

## What the numbers say

1. **The course measures about 20.4 hours (23.6 credits), not 38 hours.** That is 1,226.589 minutes by the formula. The published baseline was 837.044 minutes (14.0 hours, 15.6 credits).
2. **All the growth comes from five rewrites.** C0 and C3-C6 grew from 7,345 counted words (baseline re-run) to 70,410. The other ten modules did not change.
3. **The thin modules are mostly question time.** In C1, C2, C8, C11, C12 and C14, reading is under 18% of the measured time.
4. **The planned 55.8 credits are not yet reached anywhere but C0.** C0 measures 2.0 against 2.0 planned. C3-C6 reach 59-75% of plan before their Phase 3 review questions and exams. The ten thin modules reach 21-33%.
5. **No credit is claimable yet.** No question qualifies as a QAS review question or exam item. Under the spec's counting rule the honest upper figure is 17.1 hours; the course may claim nothing until Phase 3 items exist.
6. **Distance to the target.** The 50-70 hour target is 60-84 credits. Today's 23.6 credits is 28-39% of that.

## Comparison

| Module | Words, baseline (published) | Words, baseline (re-run) | Words, today | Questions, baseline | Questions, today | Credits, baseline (published) | Credits, baseline (re-run) | Credits, today | Minutes, today, spec rule | Credits, today, spec rule | Planned credits (Course Bible) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| C0 | 1,055 | 1,118 | 10,922 | 21 | 22 | 0.8 | 0.8 | 2.0 | 88.428 | 1.6 | 2.0 |
| C1 | 1,588 | 1,652 | 1,652 | 23 | 23 | 1.0 | 1.0 | 1.0 | 38.778 | 0.6 | 3.4 |
| C2 | 1,455 | 1,513 | 1,513 | 23 | 23 | 1.0 | 1.0 | 1.0 | 39.856 | 0.6 | 3.0 |
| C3 | 1,291 | 1,291 | 11,581 | 24 | 31 | 1.0 | 1.0 | 2.4 | 99.489 | 1.8 | 3.4 |
| C4 | 1,324 | 1,324 | 16,164 | 24 | 31 | 1.0 | 1.0 | 2.8 | 124.950 | 2.4 | 4.0 |
| C5 | 1,543 | 1,543 | 16,976 | 26 | 32 | 1.0 | 1.0 | 3.0 | 131.311 | 2.6 | 4.0 |
| C6 | 2,270 | 2,069 | 14,767 | 27 | 27 | 1.2 | 1.2 | 2.6 | 120.889 | 2.4 | 4.4 |
| C7 | 2,476 | 2,264 | 2,264 | 24 | 24 | 1.0 | 1.0 | 1.0 | 47.728 | 0.8 | 3.4 |
| C8 | 1,722 | 1,561 | 1,561 | 26 | 26 | 1.0 | 1.0 | 1.0 | 47.522 | 0.8 | 4.8 |
| C9 | 2,925 | 2,759 | 2,759 | 25 | 25 | 1.2 | 1.2 | 1.2 | 52.328 | 1.0 | 4.0 |
| C10 | 1,830 | 2,016 | 2,016 | 23 | 23 | 1.0 | 1.0 | 1.0 | 44.500 | 0.8 | 3.4 |
| C11 | 1,354 | 1,451 | 1,451 | 25 | 25 | 1.0 | 1.0 | 1.0 | 43.211 | 0.8 | 3.0 |
| C12 | 1,780 | 1,940 | 1,940 | 27 | 27 | 1.0 | 1.2 | 1.2 | 49.628 | 0.8 | 4.0 |
| C13 | 1,926 | 2,033 | 2,033 | 27 | 27 | 1.2 | 1.2 | 1.2 | 50.144 | 1.0 | 4.4 |
| C14 | 1,587 | 1,652 | 1,652 | 29 | 29 | 1.2 | 1.2 | 1.2 | 48.028 | 0.8 | 4.6 |
| **Total** | **26,126** | **26,186** | **89,251** | **374** | **395** | **15.6** | **15.8** | **23.6** | **1,026.789** | **18.8** | **55.8** |

What changed since the baseline:

- **C0:** Teach rewritten to blueprint (about 10,800 words). Practice went from 5 to 7 items. Quiz Set A went from 8 to 7 (item 7 deleted, author note of 22 Nov 2026).
- **C3:** Teach rewritten (about 10,800 words). Practice went from 5 to 12 problems.
- **C4, C5:** Teach rewritten (15,300 and 16,100 words). Practice went from 5 and 6 to 12 problems each.
- **C6:** Teach rewritten (14,200 words). Practice, quiz and job aid unchanged.
- **C7-C9:** only header and retake-text edits; counts unchanged.
- **Course Bible.** §3 now lists planned credits (55.8 for the core), not the old 38 clock hours. It says the written lessons "measure about 11 hours". That figure came from review B's quick count (one quiz form, no practice, self-check or exercises, before the C4-C6 rewrites). This worksheet replaces it.

## How to reproduce

Run `python count_credits.py` (session scratchpad) from any folder. `--ref 2632c58` re-measures the baseline files; `--json <path>` writes the machine-readable file. Words: split each `lesson.md` on `## ` headings and apply the inclusions above. Exercises: the length of the `exercises` array in each JSON file. Credits: `Decimal`, rounded down to fifths.

## Self-check

1. Why does C3 count 12 practice items when its Practice section has no numbered list? Each "**Problem N**" label is one problem, and each is followed by its own model answer.
2. Why is C12 1.2 credits today but 1.0 in the published baseline, when its lesson did not change? The baseline missed C12's closing text (160 words), which the stated method counts.
3. Can the course claim 23.6 CPE credits today? No. No question qualifies as a QAS review question or exam item yet, and the spec's counting rule would also drop open-answer practice.

## What to look up yourself

- Whether your target state boards accept 0.2 increments or only 0.5 for self-study. The spec lists this as not confirmed. Check each board's CPE rules page.

## How to check it

- In a spreadsheet, for C4: `=ROUNDDOWN(((16164/180)+(31*1.85))/50*5,0)/5` should show 2.8.
- For the total minutes: `=89251/180+395*1.85` should show 1226.59.
- For hours: `=(89251/180+395*1.85)/60` should show 20.44.
