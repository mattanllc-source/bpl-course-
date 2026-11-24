# Curriculum review B: reference shelf, assessments and learning experience

Review date: 24 Nov 2026. Reviewer: instructional design. Scope: part B of the curriculum review. Part A (job-task analysis and module mapping) is a separate report.

**Model policy for training - not for live lending decisions.** This is a review. No content, policy, formula or code was changed. No browser checks were run.

## How this review was done

| Item | Detail |
| --- | --- |
| Sources read | `docs/credit-policy/model-credit-policy.md`, `docs/credit-policy/state-law-table.md`, `docs/state-law-table.csv`, `docs/formulas/formula-library.md`, `data/running-deals/running-deals.md`, Course Bible section 6 (glossary), `scripts/course_site/app/55-shelf.js`, `30-quiz.js`, `60-views.js`, `build.py`, all 15 `modules/core/cNN/lesson.md`, `scripts/course_site/exercises/*.json`, `docs/standards/quality-bar.md`, `lesson-format.md`, `lesson-format-sample-c04.md`, the three design benchmarks |
| Snapshot status | All sources are the 22 Nov 2026 exports (`docs/SNAPSHOT.md`). D-CORE-29 to -31 and some formula edits were mirrored by hand, not re-exported. C0 and C3 still use pre-fix deal numbers |
| Counts | Rule, ID, word and item counts were made with Python over the Markdown sources. Item defects in section 4 were classified by hand |
| Not checked | Rendered pages, screen-reader output, colour contrast and video captions. These need the visual review gate |

---

## 1. Model Credit Policy as a reference

### 1.1 Is it necessary?

Yes. Keep it. Three reasons:

1. CLAUDE.md forbids any limit not in the policy. Every lesson number traces to it.
2. Reading a credit policy and applying it to a file is a daily task for all four roles.
3. It is the course's main differentiator against CFI (`cfi-cref-comparison.md` section D).

The problem is the shape, not the existence.

### 1.2 What makes it confusing (diagnosis)

| # | Cause | Evidence | Effect on the learner |
| --- | --- | --- | --- |
| 1 | **Built in the order it was researched, not the order a deal is worked.** | The source runs Family → Part 1 research → Part 2 rules → Part 3 decisions → Part 3 summary. The learner page keeps Family → Part 2 sections (16 sections). | To answer "can I fund Maple Run?" the learner opens five places: Core 2A, 2B, 2C, Residential 2A, 2B. |
| 2 | **Topic sections bundle unrelated subjects.** | "Core Part 2C: Recourse, third-party reports, pricing and extensions". "Core Part 2D: Concentration, exceptions and approval authority". | No heading predicts what is inside. Search is the only way in. |
| 3 | **Core and family rules are split, with an override rule.** | "Rules here apply to every family unless a family rule is stricter" (Core 2A). The DSCR minimum lives in MF-GEN-11, COM-TRM-09 and others, not in Core. | The learner cannot see the binding limit for one deal in one place. |
| 4 | **Too many code systems.** | 282 rules in 36 topic codes; 86 decisions (D-CORE, D-RES, D-MF, D-COM, D-CONV); SLT rows; F- IDs; BASIS tags; LD-xx. 76 rules (27%) cite other codes inside the rule text. | Codes read as noise. The memory rule "no bare rule-ID lists" is hard to meet while rule text cites codes. |
| 5 | **The citation scheme exposes research scaffolding.** | Lessons cite "Model Credit Policy, Multifamily Part 2B: Value-add bridge and stabilized bridge" (lesson-format.md section 5). | "Part 2B" means nothing to a learner. It names a research step. |
| 6 | **Rules and evidence share a row.** | The Rationale column mixes plain reasons with lender names, dates and [VERIFY] tags. The page guesses which is which with a regex (`55-shelf.js`, `ruleCard`). | Some cards show "Why it exists"; others hide the only reason inside "Market evidence". |
| 7 | **Length and scope.** | 38,936 words: research 35%, rules 47%, decisions and summaries 15%. The core lessons cite 147 of the 282 rules (52%). The page shows all 282 with no "used in this course" filter. | A core learner reads twice what the course uses. |
| 8 | **A few rules are procedures, not rules.** | Median rule is 16 words, which is fine. But CORE-SVC-08 (142 words), CORE-KYC-07 (135) and CORE-PRC-06 (133) are multi-step procedures. 11 rule sentences exceed 25 words. | The longest rules are the high-risk ones (fraud, wires, day count), where clarity matters most. |
| 9 | **Formula conventions sit in the policy.** | D-CONV-01 to -12 (day count, rounding, experience boundary) open the policy. | Arithmetic conventions belong with the formulas. They delay the first rule. |
| 10 | **Author residue.** | "Decided 18 Nov 2026: all 16 set to the recommended option A" above a table of 31; "Core complete. Residential follows." The builder strips most of this, but the export carries it. | Harmless on the page today. It shows the source is a work log, not a reference. |

**What is already good.** The learner page hides research and decisions behind an Audit-only author view (quality bar 5.2). Each rule card shows limit, basis and "Taught in". The per-family "limits at a glance" tables (Part 3B) are the most usable part. Keep all three.

### 1.3 Target information architecture

**Principle.** Re-index; do not rewrite. A build-time topic map (`topic → rule IDs`) regroups the existing rules. Rule text, limits and IDs stay exactly as the Course Bible states them. New learner copy is limited to one plain-English summary per topic, drawn only from the rules in that topic.

**Order: the life of a deal.**

| No. | Topic (learner name) | Rules it gathers (current codes) | Home module |
| --- | --- | --- | --- |
| 1 | Is it a business-purpose loan? | CORE-BP; state screen CORE-BP-03 | C1, C10 |
| 2 | Who can borrow and who guarantees | CORE-BOR-01 to -05; CORE-KYC-08, -09 | C6 |
| 3 | Know your customer, sanctions and fraud flags | CORE-KYC-01 to -07 | C7 |
| 4 | Guarantor credit, liquidity, net worth and experience | CORE-BOR-06 to -19 | C6 |
| 5 | Valuation and third-party reports | CORE-VAL; family appraisal rules | C5 |
| 6 | Underwriting income and expenses | RES-GEN, MF-GEN, COM-GEN income and expense rules | C4 |
| 7 | Sizing limits by product | RES-FF, RES-GU, RES-LND, RES-DSCR, RES-STR, RES-PF, MF-BR, MF-TRM, MF-DSCR, MF-SB, MF-LU, MF-CON, MF-MEZ, COM-BR, COM-TRM, COM-DSCR, COM-NNN, COM-CON, COM-LND | C8 |
| 8 | Pricing, fees and extensions | CORE-PRC; CORE-SVC-01 to -03 | C3, C8 |
| 9 | Recourse, documents, title and insurance | CORE-DOC, CORE-INS, CORE-CLS-01, -06 | C9 |
| 10 | Approval authority and exceptions | CORE-AUTH, CORE-EXC | C2, C14 |
| 11 | Closing and funding | CORE-CLS | C11 |
| 12 | Servicing, draws, risk rating and default | CORE-SVC-04 onward, CORE-DEF | C12, C13 |
| 13 | Portfolio and concentration limits | CORE-CONC | C14 |

Topic 7 is the only one organised by product. Inside it, one sub-page per product holds every limit for that product, Core and family together.

**Navigation.**

| Screen | Desktop | Phone (390 px) |
| --- | --- | --- |
| Index | Left rail of the 13 topics; right pane shows the selected topic | Full-screen list: topic name, one-line summary, rule count. Tap opens the topic page |
| Topic page | Summary, limits table, rules, worked check | Same order, single column; rules collapsed under "All rules in this topic" |
| Filters | "Used in the core course" (default on), product, search | Same, in a filter sheet |
| Author view | Research, decisions and change notes, Audit mode only | Same |

**Citation scheme.** Cite "Credit Policy 4: Guarantor credit, liquidity, net worth and experience". Rule IDs stay as citation markers and in Audit mode. This replaces "Core Part 2B" everywhere learners see it.

### 1.4 Sketch of one topic page

```
CREDIT POLICY · TOPIC 4 OF 13
Guarantor credit, liquidity, net worth and experience
Model policy for training - not for live lending decisions.   Last reviewed 22 Nov 2026

IN PLAIN ENGLISH
One guarantor must pass every test alone. We check four things: credit score,
cash left after closing, net worth, and recent completed projects.

LIMITS AT A GLANCE                              (all products unless noted)
| Test                      | Limit                                          |
| Mid-score                 | 680; 700 for an Experience Tier 0 guarantor    |
| Post-closing liquidity    | Greater of 10% of commitment or 6 months'      |
|                           | interest, plus 5% of other open loans with us  |
| Liquidity haircuts        | Cash 100%; securities 70%; retirement 70%;     |
|                           | credit lines 0%                                |
| Adjusted net worth        | 25% of commitment (Residential); 100% (MF, COM)|
| Experience                | 36-month lookback; Tiers 0 / 1-4 / 5-9 / 10+   |

HOW TO APPLY IT ON A FILE
1. Pick the qualifying guarantor.  2. Haircut liquid assets.
3. Subtract cash to close.  4. Compare with the requirement at full precision.

WORKED CHECK: MAPLE RUN (Dana Reyes)
Adjusted assets  $95,000 + $40,000 × 0.70 + $60,000 × 0.70 + $0 = $165,000
After closing    $165,000 − $74,100 cash to close = $90,900
Required         max(10% × $340,000 = $34,000; 6 × $340,000 × 10.25% ÷ 12 = $17,425) = $34,000
Result           Passes by $56,900

WHY THESE RULES EXIST        (2-3 sentences, from the existing rationales)
WHERE THE COURSE TEACHES IT  C6 Borrower and guarantor analysis
ALL RULES IN THIS TOPIC (14)  ▸ collapsed rule cards, as today
MARKET EVIDENCE               ▸ Audit mode only
```

All figures above come from CORE-BOR-06, -11, -12, -14 to -16 and Running Deals RD-RES-01 Role 2.

### 1.5 Inside lessons

Introduce each rule where the learner needs it, with the existing `bpl:policy` note. Each note links to its topic page. Lessons stop sending learners to the full policy to find one limit.

### 1.6 Verdicts

| Verdict | Item | Effort |
| --- | --- | --- |
| KEEP | The policy as the single source of every limit; rule IDs in Audit mode; the author view; the per-family limits tables | — |
| CHANGE | Learner page regrouped into 13 deal-order topics by a build-time topic map. No rule text changes | M |
| CHANGE | Citation scheme from "Family Part 2X" to "Credit Policy N: Topic name" in lessons, lesson-format.md and the sample | S |
| CHANGE | "Used in the core course" filter on by default (147 rules) | S |
| CHANGE | Split the three procedure-length rules (CORE-SVC-08, CORE-KYC-07, CORE-PRC-06) into steps on the page. Owner edits the Bible wording if wanted | S |
| ADD | One plain-English summary and one worked check per topic, using running-deal numbers only | M |
| ADD | Phone pattern: topic index, then topic page | S |
| CUT | D-CONV conventions from the learner policy page; show them only on the Formula Library "How the numbers work" card, which already holds them | S |

---

## 2. State law reference

### 2.1 Verdict on the draft view

**Validated: do not expand to 50 states.** Three additions sharpen it.

Reasons to stay small:

| Reason | Evidence |
| --- | --- |
| Upkeep scales with cells, and each cell is a dated legal claim | Today: 4 states × 2 loan groups × 7 topics = 56 cells, plus 4 change rows. Fifty states would be about 700 cells, each needing primary-source checks and re-dating |
| The policy already requires a lookup, not a table | CORE-BP-03: "A state with no row gets no term sheet until one is added." The job skill is building the row |
| The course already teaches the skill | C10 is built by dimension (licensing, usury, fees, foreclosure, deficiency). C10's OJT task asks the learner to build a new state's rows |
| Industry practice | Lenders use state counsel and licensing tools for multistate work. A training table would imply a reliability it cannot keep |

**Three challenges to the draft.**

1. **The founder role needs more than four examples.** A founder decides where to lend. Teach the three licensing patterns the table already shows: consumer-purpose-only licensing (OH, NC), a commercial lender licence (CA), and broker licensing by collateral type (IN, open item). Do not add states to do this.
2. **Missing dimensions.** The table lacks several dimensions that change loss or enforceability. Candidates are listed in 2.3. Each needs research and [VERIFY] tags before it appears; none is stated here as law.
3. **The lookup method must be assessable under the multiple-choice-only rule.** Use exhibit items: a statute or regulator excerpt, then "which entry belongs in the licensing column?" The OJT row-building task stays ungraded practice with a rubric.

### 2.2 What the reference page should contain

| Part | Content | Status today |
| --- | --- | --- |
| By state | Pick state and loan type; one-line verdict per topic, detail, statute, date checked, "counsel to confirm" flag | Built (quality bar 5.5) |
| By topic (new) | One dimension across all four states, for example "Foreclosure method". This is the comparison view that teaches variation | Missing |
| How to research a new state (new) | Six steps: confirm purpose and collateral; find the licensing statute and regulator page; find usury exemptions; find foreclosure and deficiency statutes; record source, subsection and date; mark every cell [VERIFY] and send to counsel | Missing. Steps exist only inside C10 prose |
| Source map (new) | For each dimension, which kind of source answers it: state code, financial regulator site, court self-help page. Primary first, secondary marked | Missing |
| Open questions | The four counsel items (IN broker licence, NC late fee, OH prepayment, commercial late fees) | Built |
| Running-deal notes | What each state means for its deal | Built |

### 2.3 Candidate dimensions to add (research first)

| Dimension | Why it matters to the lender | Course use |
| --- | --- | --- |
| Statutory right of redemption after sale | Delays the lender's clean title and resale; raises loss severity | C10 T4, C13 |
| Mechanics' lien priority | Decides whether contractor liens can rank ahead of construction draws | C9, C12 |
| Out-of-state lender qualification ("doing business") | Can bar enforcement in that state's courts if not handled | C10 T1, founder track |
| Marital property rules | Affect guaranty collection and spouse signatures (with the Reg B rule in CORE-BOR-05) | C6, C10 T5 |
| Recording taxes and fees on mortgages | Change closing costs and borrower cash to close | C11 |
| Receivership for 1-4 unit loans | Group (a) rows do not cover it; group (b) rows do | C13 |

The legal-regulatory-verifier should research each before any cell is written. Add a dimension only if it changes a course decision.

### 2.4 What the C10 lesson should contain

| Element | Change |
| --- | --- |
| Opening | A screen decision: "A Texas deal arrives with no row. What do you do?" (CORE-BP-03) |
| Teach chunks | Keep T1-T5 by dimension. Add a short chunk on the research method and when to call counsel |
| Worked examples | Running-deal states, as now. California as the contrast on licensing, usury and deficiency |
| Exercise | A guided row-build: the learner fills a blank row from supplied excerpts, then compares with a model row for California, which already exists |
| Quiz | Exhibit-based multiple choice on reading a statute excerpt. Today's C10 quiz is open-response (section 4) |
| OJT | Keep "build a row for a new state". Add a rubric: primary source, subsection cited, date checked, [VERIFY] on every cell, counsel question listed |

### 2.5 Verdicts

| Verdict | Item | Effort |
| --- | --- | --- |
| KEEP | Four states; CA as contrast; [VERIFY] on every cell; the counsel open-items list | — |
| CHANGE | C10 quiz to exhibit-based multiple choice | M |
| ADD | "By topic" comparison view on the state law page | S |
| ADD | "How to research a new state" page and source map | S |
| ADD | Researched dimensions from 2.3 that change a course decision | M |
| ADD | Founder-track note on the three licensing patterns | S |
| CUT | Any plan for a 50-state table | — |

---

## 3. Formulas, running deals and glossary

| Asset | Size | Verdict | Reason | Effort |
| --- | --- | --- | --- | --- |
| **Formula Library** | 118 formulas, 354 tests; learner layer for 47 core | KEEP | Tested, consistent, and taught step by step. Catalog, topic chips and search already meet quality bar 5.3 | — |
| | | CHANGE | Default the catalog to formulas used in the core course: 46 core plus 27 family formulas cited in lessons (73 of 118). Others behind a "Family courses" chip | S |
| | | ADD | Learner layers for the 27 family formulas the core lessons use (F-MF-12, F-COM-08 and others) | M |
| | | ADD | A one-page formula sheet per module, printable, as the job aid's back page | S |
| **Running deals** | 3 deals, each worked in three roles | KEEP | They are the course's case spine and its best asset. Practice on a second deal after a worked example on the first is sound transfer design | — |
| | | CHANGE | Fix C0 and C3 to post-fix deal numbers (SNAPSHOT.md) before any other change | S |
| | | CHANGE | Label the two Maple Run liquidity figures. $90,900 (Role 2) is before prepaid interest. $89,738.33 (Role 3) is after $1,161.67 prepaid interest ($240,000 × 10.25% ÷ 360 × 17). Both are right; the file does not say why they differ | S |
| | | ADD | Role tasks for the fund analyst (loan tape, concentration, warehouse eligibility, investor report) and the founder (unit economics, licensing footprint, policy-setting decision). Today the roles are originator, underwriter and closing only | L |
| | | ADD | A "deal clock" on each module overview: which month of which deal this module sits at | S |
| **Glossary** | 150 terms: 80 Core, 70 family | KEEP | Required by QAS (self-study materials need a glossary). Search and family chips work | — |
| | | CHANGE | Default filter to Core terms. Family terms stay one tap away | S |
| | | CUT | The 50 formula worked examples inside glossary rows. Link to the formula page instead. They duplicate the library today and will drift | S |
| | | ADD | First-use definitions inside lessons (a term link or popover), so learners do not leave the page | M |

---

## 4. Assessment quality audit

### 4.1 Format status across all 15 modules

| Format | Modules | Items (both forms) | Meets the multiple-choice-only rule? |
| --- | --- | --- | --- |
| Four-option multiple choice with a key | C3, C4, C5, C6, C7, C8, C9 | 164 | Yes, in format |
| Open response ("**Answer:**" inline or a free-text key) | C0, C1, C2, C10, C11, C12, C13, C14 | 166 | **No** |

Half the course's quiz items (166 of 330) break the owner's rule. C0 is a "rewritten to blueprint" module and still has open-response items.

### 4.2 Sample audit: C3, C4, C8 and C9 (96 items, Forms A and B)

| Defect | Standard | Count in sample | Representative example |
| --- | --- | --- | --- |
| Stem is a fragment, not a question that states the task | Haladyna-Downing-Rodriguez (HDR): "the central idea in the stem" | about 60 of 96 | C4 A1 "GPR?"; C8 A4 "Loan and binding test?"; C9 A7 "Payment?" |
| No rationale for distractors | Quality bar 8.2; owner rule "rationale per option" | 270 of 288 distractors | C8 and C9 keys give the key letter and working only |
| Key position unbalanced | HDR: balance the key | A 23, B 45, C 25, D 3 | Across all 164 multiple-choice items: B 46%, D 3%. A test-wise learner can rule out D |
| Implausible distractors (no named error) | Quality bar 8.3 | at least 30, in about 22 items | C9 A4 "Raise the rate"; C9 B4 "Ignore it"; C8 A10 "$3,000,000; average"; C4 A8 "Needs a second appraisal" |
| Items chained to earlier answers | HDR: items independent | 18 | C4 critical item 3 (EGI) needs answers 1 and 2. C8 items 4 and 10 need items 1-3 and 7-9 |
| Cue: key is the longest or differently formatted option | HDR: options similar in length and form | 8 | C4 A12 key B carries its own explanation; C4 B7 key "1.3499, fails" is the only option without "x" |
| Code recall in the stem | Owner rule: no bare IDs; test the skill, not the label | 5 | C3 A10 "Which statement matches D-CONV-01?"; C8 A5 "Note rate (F-CORE-28)?" |
| Negative stem not bolded | Quality bar 8.3 | 1 | C4 A6 "Which is NOT an operating expense?" |
| No exhibit | Quality bar 8.4: at least 40% of graded items | 0 of 96 have an exhibit | Every item states figures in one line |
| No grey case or "what next" item | Quality bar 8.4, 9.4 | C9 has 2; C3, C4, C8 have 0 | — |
| Key wrong or indefensible | Two-reviewer key agreement | 0 found | Keys recomputed by hand for C3, C4, C8; all match |

**Bloom spread in the sample.**

| Level | Items | Share | Quality bar target |
| --- | --- | --- | --- |
| 1-2 Remember, understand | about 21 | 22% | — |
| 3 Apply (calculate, apply a rule) | about 70 | 73% | At least 60% at levels 3-4 from C3 on: met |
| 4 Analyze, evaluate (judge, reconcile, choose an action) | about 5 | 5% | At least one outcome at level 4-5: tested thinly |

The quizzes test arithmetic well. They barely test judgment, which is the job.

### 4.3 Structural findings

| # | Finding | Evidence | Fix |
| --- | --- | --- | --- |
| S1 | Critical-item rule conflicts with the quality bar | Lessons and UI: one critical miss fails. Quality bar 8.7: each critical skill tested twice per form; fail means missing both, or one with a total under 80%. Every sampled form has one item per critical skill | Write two items per critical skill. Change the pass rule to 8.7 |
| S2 | Quiz intro wording no longer matches the UI | Lesson text: "Two retakes, each with the other set." UI: unlimited retakes, alternating Form A and Form B, headed "Form" (`30-quiz.js`). The intro paragraph renders inside "How this quiz works" beside the UI's own bullets, so learners read both | Delete the intro paragraph from the lesson files. Let the UI state the rules once (quality bar 8.11) |
| S3 | Pass-mark statement worded three ways | "Pass mark 80%. Items marked (C) are critical."; "Pass mark: 80% (10 of 12) and every item marked critical correct."; "...a wrong answer fails the quiz whatever the score." | One generated statement |
| S4 | Retakes reuse the same two forms | After two attempts the learner sees Form A again | Bank of three forms, or a pool drawn by blueprint (owner decision 7) |
| S5 | No option or item shuffling | No shuffle in `30-quiz.js`; quality bar 8.10 requires it | Shuffle options except ordered numeric sets |
| S6 | No review questions in Learn | C3 has six "Review questions. Added in Phase 3" placeholders. C4-C14 have none. QAS needs at least 3 review questions per credit, with feedback | Roll out `bpl:check` items per chunk |
| S7 | Quiz does not cover all objectives in pilot modules | C3 self-review: O2, O5 and O6 have no items | Write items to the C3 blueprint |
| S8 | The C4 sample's self-check is open-response | Four "**Answer:**" items at the end of `lesson-format-sample-c04.md`. Memory rule: self-checks are multiple choice | Convert to four `bpl:check` items, or label them ungraded worked practice |

**Proposed quiz intro text** (generated once by the UI, nothing in the lesson file):

> Pass mark 80%, with each critical skill shown. You start with Form A. Each retake gives you the other form, with different questions. No feedback until you submit.

### 4.4 Representative rewrites

**C4 Form A item 1** (fragment stem, no rationales).

> A 24-unit building has an average market rent of $1,450 a month. What is its annual gross potential rent?
> - A. $34,800.00. *Why not:* this is one month's rent for all units; GPR is annual (× 12).
> - **B. $417,600.00.** *Why:* 24 × $1,450 × 12 = $417,600.00 (F-CORE-07).
> - C. $388,368.00. *Why not:* this deducts 7% vacancy. GPR is before vacancy.
> - D. $397,968.00. *Why not:* this is effective gross income, after vacancy and other income.

**C4 Form A item 8** (implausible distractor D). Replace "Needs a second appraisal" with "Fails: coverage is 0.80x." *Why not:* that divides debt service by NOI, the inverted ratio ($100,000 ÷ $124,950 = 0.8003).

**C8 Form A item 10** (chained, "average" option). Make it stand alone with an exhibit:

> Exhibit: term-loan sizing results. LTV $2,800,000.00; DSCR $3,006,151.36; debt yield $3,333,333.33. What loan do you offer, and which test sets it?
> - **A. $2,800,000; LTV.** *Why:* the lowest result binds; it is already a $1,000 multiple (CORE-PRC-05).
> - B. $3,006,000; DSCR. *Why not:* treats DSCR as the only term-loan test.
> - C. $3,333,000; debt yield. *Why not:* takes the highest result, not the lowest.
> - D. $3,006,151.36; DSCR. *Why not:* wrong test and not rounded down to $1,000.

**C9 Form B item 4** (three implausible options).

> Schedule B-I of the title commitment lists the seller's existing deed of trust. What do you require before funding?
> - **A. Payoff from closing proceeds and a recorded release.**
> - B. Accept it as a Schedule B-II exception, since it is already recorded.
> - C. An estoppel from the seller's lender confirming the balance only.
> - D. A subordination agreement placing the seller's lien behind ours.
>
> Each option gets a rationale. The legal-regulatory-verifier checks B-D before use.

**C4 Form A item 12** (length cue). Make the options parallel: "Strong: occupancy is far above break-even." / "Thin: about two points of vacancy end coverage." / "Failed: the loan is already in default." / "Unknown: break-even does not measure risk."

### 4.5 Verdicts

| Verdict | Item | Effort |
| --- | --- | --- |
| KEEP | Two parallel forms; 80% pass mark; critical items; four options; the C3 and C4 numeric distractors built from named errors (÷ 12, 365-day, n = term) | — |
| CHANGE | Convert 166 open-response items in eight modules to multiple choice (assessment-psychometrician, then item-reviewer) | L |
| CHANGE | Rewrite the 164 existing multiple-choice items: full stems, rationale per option, balanced keys, no chains, no ID recall | L |
| CHANGE | Pass rule to quality bar 8.7, with two items per critical skill | M |
| CHANGE | Quiz intro: delete from lesson files; one UI statement | S |
| ADD | Exhibits on at least 40% of items; one grey-case item per module | L |
| ADD | Option shuffling | S |
| ADD | Review questions per teach chunk (QAS minimum 3 per credit) | L |
| CUT | Items that test a code or decision ID by name | S |

---

## 5. Learning experience

### 5.1 Is the module structure right?

Current steps: Overview → Learn → Exercises → Practice → Quiz → Workplace task → Quick reference → Review.

The sequence is sound for adult professional learners: goal, teach, practise, test, apply on the job, keep a reference. Four problems sit inside it.

| # | Problem | Evidence | Change |
| --- | --- | --- | --- |
| 1 | **Learn has no interaction.** | 0 of 15 modules use the new components. C3's T1 runs about 2,500 words with no check. C4's chunks are 15-20 minutes of prose. Quality bar 3.4 asks for a check every 5-10 minutes | Put `bpl:check`, `bpl:predict` and `bpl:exhibit` inside each chunk |
| 2 | **Exercises and Practice are split from Learn.** | Three exercises per module sit in a separate step after all teaching | Move each exercise next to the chunk it practises. Keep Practice as the end-of-module mixed set |
| 3 | **No fading.** | Worked example, then a full independent practice set (C4 section 5). Quality bar 3.6 asks for full → partial → independent | Add one partly completed problem per chunk |
| 4 | **No spaced retrieval.** | No quiz or review item revisits an earlier module. Quality bar 7.4 asks for 15-20% from C3 on | Tag review items by outcome; draw 2-3 per module from earlier modules |

**Recommended module flow.**

| Step | Content | Change from today |
| --- | --- | --- |
| Overview | The deal clock (which deal, which month), a decision hook, objectives, optional pre-test | Add the deal clock and pre-test (quality bar 7.6, advisory) |
| Learn | Chunks of 8-12 minutes: teach, worked example on a running deal, check, partial problem | Interleave checks and exercises |
| Practice | Mixed independent problems on the second running deal | Keep |
| Case | One committee or desk decision with consequences (`bpl:case`) | New; replaces Exercises as a separate step |
| Quiz | Graded multiple choice, exhibit-based | Rewrite (section 4) |
| Workplace task | Role-specific: the learner picks a track | Add role variants |
| Wrap-up | Takeaways, job aid with formula sheet, self-check, look-up, how to check | Merge "Quick reference" into Wrap-up |

### 5.2 C4 sample format versus older lessons

| Feature | Older C4 (`lesson.md`) | C4 sample (`lesson-format-sample-c04.md`) | Verdict |
| --- | --- | --- | --- |
| Unit size | 5 chunks, 15-20 min each; 180 min claimed | One 14-minute lesson covering T4 and T5 | Sample is right-sized |
| Interactions | 0 inside Learn; practice at the end | 6 in 14 minutes: predict, desk, exhibit, check, 3-step case | Sample meets 3.4; slightly dense |
| Worked example | Prose steps on Cedar Court | Deal-sheet card, Inputs → Substitute → Compute → Read → Policy test | Sample better |
| Feedback | Answer key only | Rationale for every option; one retry | Sample meets 8.2 |
| Policy | Rule IDs inline | `bpl:policy` note by section name | Sample better; fix the citation name (1.3) |
| Objective alignment | All content maps to O1-O5 | The case tests extension tests, cap cost and liquidity re-verification, which are not the lesson's two objectives | **Sample defect:** move the case to C12, or add an objective |
| Self-check | n/a | Open-response | **Sample defect:** convert (S8) |
| Downside | Not shown | Vacancy stress to failure | Sample better (quality bar 9.5 partly) |
| Build checks | None | `deal-figures` and `expect:` fail the build on a wrong number | Sample much safer |

**Recommendation.** Adopt the sample format for every module. Before rollout, fix its two defects and cap each lesson at one desk and one case.

### 5.3 Per-module audit

QAS minutes use the word-count formula: words ÷ 180 + items × 1.85 (one quiz form). Words exclude the quiz, alignment matrix and self-review. Interaction count is graded or feedback-bearing checks inside Learn.

| Module | Words | Stated time | QAS-formula minutes | Checks in Learn | Exercise types | Quiz format | Workplace role |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C0 | 14,667 | about 105 min | 94 | 0 | sort, buildup, order | Open | Market note (any) |
| C1 | 2,623 | 120 min | 33 | 0 | decision ×2, sort | Open | File review (underwriter) |
| C2 | 2,792 | 120 min | 34 | 0 | sort, order, decision | Open | Deal on a page (originator) |
| C3 | 14,484 | 3.4 cr projected | 103 | 0 (6 placeholders) | calculator, buildup ×2 | MC | Closing and servicing |
| C4 | 2,262 | 180 min | 35 | 0 | buildup, calculator, scenario | MC | Underwriter |
| C5 | 2,573 | 180 min | 36 | 0 | calculator ×2, decision | MC | Appraisal reviewer |
| C6 | 3,121 | 180 min | 40 | 0 | calculator, sort, decision | MC | Underwriter |
| C7 | 3,436 | 120 min | 38 | 0 | sort ×2, order | MC | Underwriter, BSA officer |
| C8 | 2,698 | 180 min | 37 | 0 | buildup, calculator, scenario | MC | Underwriter |
| C9 | 4,021 | 180 min | 45 | 0 | sort, calculator, decision | MC | Closer |
| C10 | 3,046 | 120 min | 35 | 0 | decision, buildup, scenario | Open | State row (compliance) |
| C11 | 2,300 | 120 min | 31 | 0 | buildup, calculator, sort | Open | Closer |
| C12 | 3,058 | 180 min | 39 | 0 | buildup ×2, sort | Open | Servicer |
| C13 | 3,203 | 180 min | 40 | 0 | buildup, calculator, order | Open | Asset manager |
| C14 | 2,900 | 180 min | 38 | 0 | sort, decision, calculator | Open | Credit officer |
| **Total** | **67,184** | **about 38 h** | **about 11 h** | **0** | 7 types, 3 per module | 7 MC, 8 open | No fund analyst or founder task |

**Readings.**

- **Objective alignment.** Quizzes map to objectives in C4-C9. C3's quiz misses O2, O5 and O6. The sample case is off-objective.
- **Interaction cadence.** Fails everywhere inside Learn. The exercises are varied (sort, order, buildup, calculator, decision, scenario), but they sit outside the teaching.
- **Variety.** Good across exercises. Quizzes are one type: single-line numeric items.
- **Accessibility.** Not checked in a browser. From code: quiz and checks are native radio groups with keyboard support; the desk slider has `aria-valuetext`. One video script exists (C0); no captions to audit yet.
- **Time on task.** The biggest gap in the course. C0 and C3, rewritten to blueprint, carry about 14,500 words each. The other 13 modules carry 2,300-4,000 words but claim 2-3 hours. QAS counting gives about 11 hours against about 38 stated and a 50-70 hour goal. Credits must not be claimed from the stated hours.

### 5.4 Verdicts

| Verdict | Item | Effort |
| --- | --- | --- |
| KEEP | The step sequence; running deals as worked examples with practice on a second deal; the OJT model answers and rubrics; exercise variety | — |
| CHANGE | Interleave checks and exercises inside Learn, every 5-10 minutes | L |
| CHANGE | Merge Quick reference into Wrap-up | S |
| CHANGE | Fix the sample's off-objective case and open self-check before rollout | S |
| ADD | Case-based spine: a deal clock and a decision hook per module | M |
| ADD | Worked-example fading: one partial problem per chunk | M |
| ADD | Spaced retrieval: 15-20% of review items from earlier modules | M |
| ADD | Role variants of the workplace task for all four roles | L |
| ADD | Optional pre-test per module (advisory) | M |
| CUT | Separate "Exercises" step | S |

---

## Top 10 decisions for the owner

| # | Decision | Recommendation | Trade-off |
| --- | --- | --- | --- |
| 1 | Keep the Model Credit Policy as a learner reference? | Keep it. Regroup the learner page into 13 deal-order topics with a build-time map. Leave rule text unchanged | One mapping file to maintain. Every new rule needs a topic |
| 2 | How do lessons cite policy? | Use "Credit Policy 4: Guarantor credit, liquidity, net worth and experience". Drop "Core Part 2B" from learner text | Lessons and the format guide need a one-time sweep |
| 3 | Expand state law to 50 states? | No. Stay at four. Add a "by topic" view, a research-method page and researched new dimensions | Learners outside OH, NC, IN and CA get a method, not an answer. That matches CORE-BP-03 |
| 4 | Fix the open-response quizzes now or in Phase 3? | Now, for all eight modules (166 items). They break your multiple-choice rule today | Large writing load before other content work |
| 5 | Patch or rewrite the 164 multiple-choice items? | Rewrite. Fragment stems, missing rationales and a 3% "D" key affect almost every item | Patching is faster, but the item-reviewer would fail most patched items |
| 6 | How should critical items fail a learner? | Follow quality bar 8.7: two items per critical skill; fail on both, or one plus under 80% | Longer quizzes. One slip no longer fails a strong learner |
| 7 | What happens on the third attempt? | Build a third form, or a blueprint-drawn pool, and shuffle options | More items to write and review. Prevents memorising Form A |
| 8 | Roll out the C4 sample format? | Yes, after fixing its off-objective case and open self-check. Cap each lesson at one desk and one case | Every module needs conversion. The build checks make numbers safer |
| 9 | Serve all four roles? | Add fund analyst and founder tasks to the running deals and the workplace tasks | Two new task sets per deal need answer keys and number checks |
| 10 | What hours do we claim? | Claim only QAS-counted time. Today that is about 11 hours. Grow lessons to C0 and C3 depth to reach 50-70 | Either a smaller claim now or a long writing programme |

---

## Self-check

| Check | Result |
| --- | --- |
| Every count traced to a file | Yes: Python over the Markdown sources; the item classification in 4.2 is by hand |
| No new policy limit, rate or threshold | None proposed. The topic page sketch uses existing rules and Running Deals figures only |
| Every number in examples recomputed | 24 × $1,450 × 12 = $417,600; $417,600 × 0.93 = $388,368; $100,000 ÷ $124,950 = 0.8003; $240,000 × 10.25% ÷ 360 × 17 = $1,161.67; $165,000 − $74,100 = $90,900 |
| Legal statements | None new. Section 2.3 lists dimensions to research, not legal claims |
| Sentences under 25 words outside tables | Checked by eye |

## What to look up yourself

1. QAS self-study standards on review questions and exam items per credit, in `docs/accreditation/qas-spec.md` rows 8 and 10. Confirm the item minimums for each module once credits are recounted.
2. Haladyna, Downing and Rodriguez (2002), "A Review of Multiple-Choice Item-Writing Guidelines", *Applied Measurement in Education* 15(3). Use it as the item-reviewer's checklist.
3. Your state counsel's view on which of the 2.3 dimensions matter for your lending footprint.

## How to check it

1. Run `grep -c "\*\*Answer:\*\*" modules/core/c1[234]/lesson.md` to confirm open-response items remain in C12-C14. C10 and C11 list stems with no options and a key with no letters.
2. Count key letters in any quiz answer key; D should appear about a quarter of the time.
3. Open `#policy` and try to find every limit that applies to Maple Run. Count the sections you open. The target after the change is one topic page per test.
