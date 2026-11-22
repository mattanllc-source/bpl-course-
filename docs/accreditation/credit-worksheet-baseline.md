# Credit worksheet: baseline (before the rebuild)

Model policy for training - not for live lending decisions.

Provider: BPL Academy. Delivery method: QAS Self Study. Computed 22 Nov 2026 from the repo as it stands at commit `2632c58`.

This is a **baseline estimate**, not a filing worksheet. It shows where the course stands before Phases 1-3 rebuild the lessons and the assessments. The final worksheets are a Phase 6 deliverable, computed from the final word counts after Gate 3.

## Method

Formula (Std 7.02.5-.7, from `qas-spec.md`):

credits = [(words ÷ 180) + audio/video minutes + (all questions × 1.85)] ÷ 50

Each module is its own program, so credits are rounded down per module to 0.2 (fifths). The 0.5 column is shown for state boards that use halves only.

**Words counted** (from `modules/core/cNN/lesson.md`, counted with Python): fenced code blocks (Mermaid) removed, link targets removed, table rule lines removed, Markdown symbols stripped. A word is any whitespace-separated token with a letter, digit or `$`.

- Section 3 "Teach" (all teach chunks and worked examples, tables included).
- Section 8 "Job aid".
- The learner part of the closing section: "Real-world check", "What to look up yourself" and "How to check it".

**Words excluded**, per Std 7.02 or because the text is not learner content:

| Excluded part | Words (all 15 modules) | Why |
| --- | ---: | --- |
| Module facts table | 2,066 | Author scaffolding; only three rows reach the page |
| Timing plan | 591 | Author scaffolding; not on the page |
| 1 Hook | 1,082 | Introduction |
| 2 Objectives | 1,256 | Introduction |
| 5 Practice | 4,769 | Counted as questions, not words |
| 6 Quiz (both sets and keys) | 9,825 | Counted as questions, not words |
| 7 OJT task | 3,118 | Instructions for an off-page activity; not measurable by the formula |
| Alignment matrix | 1,080 | Author scaffolding; not on the page |
| Self-review table and self-check items | 4,080 | Table is author scaffolding; self-check items are counted as questions |
| Mermaid diagram code | not counted | Code, not reading text |

**Questions counted** per module = Practice items + Self-check items + Quiz Set A items + interactive exercises.

- Practice items are the top-level numbered items before the "Model answer" or "Answer key" label. Self-check items are the numbered items under "Self-check." Set A items are the numbered items before Set A's answer key.
- Quiz Set B is a parallel retake form. A learner takes one set, so only Set A counts.
- Each exercise in `scripts/course_site/exercises/cNN.json` counts as one question (3 per module, 45 in all). Sub-steps inside a build-up or sort exercise are not counted separately.
- No module has audio or video. The page's "Listen" button reads the text aloud, which is narration of the text and does not count (Std 7.02).

**Important.** Std 7.02 counts all questions in the time formula. That is separate from whether a question *qualifies* as a review question or exam item. At baseline, no question qualifies as a QAS review question or final exam item, because every quiz is self-marked and its answers can be revealed (see the compliance matrix, rows M13-M16 and M24-M25). Phase 3 replaces them.

## Per-module worksheet

| Module | Counted words | Words ÷ 180 (min) | Practice | Self-check | Quiz Set A | Exercises | All questions | Questions × 1.85 (min) | Media (min) | Total (min) | Credits, raw | Credits (0.2, round down) | Credits (0.5, round down) | Hours claimed (Course Bible) | Min review Qs at this credit | Min exam items at this credit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| C0 | 1,055 | 5.861 | 5 | 5 | 8 | 3 | 21 | 38.850 | 0 | 44.711 | 0.894 | 0.8 | 0.5 | 1 | 3 | 5 |
| C1 | 1,588 | 8.822 | 7 | 3 | 10 | 3 | 23 | 42.550 | 0 | 51.372 | 1.027 | 1.0 | 1.0 | 2 | 3 | 5 |
| C2 | 1,455 | 8.083 | 6 | 4 | 10 | 3 | 23 | 42.550 | 0 | 50.633 | 1.013 | 1.0 | 1.0 | 2 | 3 | 5 |
| C3 | 1,291 | 7.172 | 5 | 4 | 12 | 3 | 24 | 44.400 | 0 | 51.572 | 1.031 | 1.0 | 1.0 | 3 | 3 | 5 |
| C4 | 1,324 | 7.356 | 5 | 4 | 12 | 3 | 24 | 44.400 | 0 | 51.756 | 1.035 | 1.0 | 1.0 | 3 | 3 | 5 |
| C5 | 1,543 | 8.572 | 6 | 5 | 12 | 3 | 26 | 48.100 | 0 | 56.672 | 1.133 | 1.0 | 1.0 | 3 | 3 | 5 |
| C6 | 2,270 | 12.611 | 6 | 6 | 12 | 3 | 27 | 49.950 | 0 | 62.561 | 1.251 | 1.2 | 1.0 | 3 | 3 | 7 |
| C7 | 2,476 | 13.756 | 5 | 6 | 10 | 3 | 24 | 44.400 | 0 | 58.156 | 1.163 | 1.0 | 1.0 | 2 | 3 | 5 |
| C8 | 1,722 | 9.567 | 5 | 6 | 12 | 3 | 26 | 48.100 | 0 | 57.667 | 1.153 | 1.0 | 1.0 | 3 | 3 | 5 |
| C9 | 2,925 | 16.250 | 5 | 5 | 12 | 3 | 25 | 46.250 | 0 | 62.500 | 1.250 | 1.2 | 1.0 | 3 | 3 | 7 |
| C10 | 1,830 | 10.167 | 5 | 5 | 10 | 3 | 23 | 42.550 | 0 | 52.717 | 1.054 | 1.0 | 1.0 | 2 | 3 | 5 |
| C11 | 1,354 | 7.522 | 6 | 6 | 10 | 3 | 25 | 46.250 | 0 | 53.772 | 1.075 | 1.0 | 1.0 | 2 | 3 | 5 |
| C12 | 1,780 | 9.889 | 6 | 6 | 12 | 3 | 27 | 49.950 | 0 | 59.839 | 1.197 | 1.0 | 1.0 | 3 | 3 | 5 |
| C13 | 1,926 | 10.700 | 6 | 6 | 12 | 3 | 27 | 49.950 | 0 | 60.650 | 1.213 | 1.2 | 1.0 | 3 | 3 | 7 |
| C14 | 1,587 | 8.817 | 8 | 6 | 12 | 3 | 29 | 53.650 | 0 | 62.467 | 1.249 | 1.2 | 1.0 | 3 | 3 | 7 |
| **Total** | **26,126** | **145.144** | **86** | **77** | **166** | **45** | **374** | **691.900** | **0** | **837.044** | **16.741** | **15.6** | **14.5** | **38** | **45** | **83** |

Minimums follow the spec's fraction rules (Std 5.01.2.1 and 6.01.2). Review = 3 per whole credit, plus 3 for a 0.8 fraction and 0 for a 0.2 fraction. Exam = 5 per whole credit, plus 5 for 0.8 and 2 for 0.2. So C0 (0.8) needs 3 review and 5 exam items; a 1.2-credit module needs 3 and 7.

**Borderline.** C12 is 1.197 credits, 0.15 minutes short of 1.2. Small changes in the word-count rules move it either way. Do not rely on the baseline figure for C12.

### Worked example: C9

1. Words: 2,925 ÷ 180 = 16.250 minutes.
2. Questions: 5 practice + 5 self-check + 12 quiz (Set A) + 3 exercises = 25. 25 × 1.85 = 46.250 minutes.
3. Media: 0 minutes.
4. Total: 16.250 + 46.250 + 0 = 62.500 minutes. 62.500 ÷ 50 = 1.250 credits.
5. Round down to fifths: 1.2 credits. Minimums: review 3 × 1 + 0 = 3; exam 5 × 1 + 2 = 7.

## What the numbers say

1. **The course measures about 16.7 credits, not 38 hours.** By the formula it takes 837.0 minutes, about 14.0 hours. The Course Bible lists 38 clock hours, which would be 45.6 credits. The gap is not claimable.
2. **Questions, not reading, carry the credit.** Question time is 691.9 of 837.0 minutes (83%). Reading time is only 145.1 minutes (17%). The teaching text is thin: about 1,740 words per module.
3. **Every module lands at 0.8 to 1.2 credits.** The modules are near-uniform in size, whatever their claimed hours (1 to 3).
4. **Distance to the target.** The target of 50-70 hours is 60-84 credits. The baseline (16.7) is 20-28% of that. At 180 words a minute, each added credit needs about 9,000 words of teaching text, or fewer words plus more qualifying questions. Phase 2 must grow the teaching text several times over.
5. **Sensitivity.** Counting the Hook, Objectives and OJT text as words would add 5,456 words (30.3 minutes, about 0.6 credits course-wide). It would not change the conclusion.

## How to reproduce

Run a Python word count on each `lesson.md` with the inclusions and exclusions above. Split on `## ` headings. Count exercises as the length of the `exercises` array in each JSON file. Compute credits with `Decimal`, rounded down to fifths.

## Self-check

1. A module has 9,000 counted words, 20 review questions, 36 exam items and no media. Credits? 9,000 ÷ 180 = 50.000; 56 × 1.85 = 103.600; 153.600 ÷ 50 = 3.072, rounded down to 3.0.
2. Why is Set B left out of the count? A learner takes one set per attempt, so Set B adds no learner time.
3. Does the "Listen" read-aloud count as media? No. It narrates the text, and Std 7.02 excludes narration of the text.

## What to look up yourself

- Whether your target state boards accept 0.2 increments or only 0.5 for self-study. The spec lists this as not confirmed. Check each board's CPE rules page.

## How to check it

- In a spreadsheet, for C9: `=ROUNDDOWN(((2925/180)+(25*1.85))/50*5,0)/5` should show 1.2.
- For the total minutes: `=26126/180+374*1.85` should show 837.04.
