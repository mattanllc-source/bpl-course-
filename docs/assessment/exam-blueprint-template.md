# Exam blueprint template

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Prepared | 22 Nov 2026 |
| Status | Draft v1 for owner review. Milestone 3 (course frame). Professor and CCO review fixes applied 22 Nov 2026 ([course-frame-summary.md](../curriculum/course-frame-summary.md)) |
| Acceptance rows | Quality bar 8.1-8.11, 7.4 ([quality-bar.md](../standards/quality-bar.md)); QAS Std 5.01.2, 6.01.2, 7.01, 7.02 ([qas-spec.md](../accreditation/qas-spec.md)) |
| Outcomes used | [outcomes.md](outcomes.md) and [outcomes.json](outcomes.json) |
| Worked example | C8, section 7 |

**What this is.** The format every module exam must follow before items are written. A blueprint fixes, for each outcome, how many items sit at each Bloom level on each form. It also fixes how many items use an exhibit, which items are critical, and which questions are review rather than exam. Item writers fill the cells; the A-checks test the counts.

## 1. The rules a blueprint must meet

| # | Rule | Source | Check |
| --- | --- | --- | --- |
| R1 | Four options, one best answer, plausible distractors. No true/false or yes/no | 8.1; Std 6.01.2 | A |
| R2 | Two parallel forms, A and B. No item appears on both | 8.5, 8.10 | A |
| R3 | Forms A and B together cover 100% of outcomes; each form covers at least 75% | 8.5; Std 6.01.2 | A |
| R4 | Our build rule is stricter: at least 2 items per outcome on each form, so each form covers 100% | qas-spec.md build rule | A |
| R5 | From C3 on, at least 60% of each form's items are at Bloom level 3 or 4 | 8.5 | A |
| R6 | An item's level is never above its outcome's level. Each outcome has at least one item at its own level per form | This template | A |
| R7 | At least 40% of each form's items use an exhibit. The learner must find, reconcile or judge something in it | 8.4 | A |
| R8 | At least one item per form asks "what is missing?" or "what do you do next?" | 8.4 | A |
| R9 | Each critical skill has exactly 2 items per form (3 if the owner adopts option B in section 5), each tied to a named loss-causing or legal error | 8.7 | A, R |
| R10 | Review questions: at least 3 per credit (QAS table); build target 4 per credit, rounded up | 8.6; Std 5.01.2.1 | A |
| R11 | Exam items: at least 5 per credit (QAS table); build target 6 per credit, rounded up, per form | 8.6; Std 6.01.2 | A |
| R12 | No review question, or review exhibit with the same figures, appears on an exam | 8.6; Std 6.01.2 | A |
| R13 | From C3 on, 15-20% of review questions revisit outcomes from at least two earlier modules | 7.4 | A |
| R14 | At least one grey case per module: the best answer is to escalate, request an exception with mitigants, or condition. Inventing a limit is never the key | 9.4 | R |
| R15 | Items follow the Haladyna-Downing-Rodriguez guidelines. No "all of the above" or "none of the above". Negative stems only if bolded. Options of similar length | 8.3 | A, R |
| R16 | Numeric distractors come from named errors, such as 30/360 for Actual/360, the wrong denominator, or the wrong value basis | 8.3 | A, R |
| R17 | Two reviewers agree on every key. Critical items also pass a two-reviewer ambiguity check | 8.3, 8.7 | R |
| R18 | Two reviewers tag each item's Bloom level by the thinking it needs, not by its verb, and record agreement in `bloom_reviewers_agree` | 7.1, 8.5 | R |
| R19 | Every exhibit names its registry source documents (`source_document`, DOC IDs) | 8.4, 9.1 | A |
| R20 | Spread the keys. No more than about a third of a module's keys may be "stop the file and refer it", since test-wise learners spot a repeated key | 8.3 | R |

## 2. Item counts per CPE credit

The exam size depends on credits, and credits depend partly on the number of questions. So the blueprint is sized after the lesson's word count is final.

**Step 1. Credits** (Std 7.02.5-.7):

credits = [(words ÷ 180) + media minutes + (all questions × 1.85)] ÷ 50

"All questions" counts scored items only: review questions, scored interactive exercises and **one** exam form. The retake form is not added. Open-answer practice and on-the-job tasks are excluded (qas-spec.md, counting rule of 22 Nov 2026). Round the result **down** to the nearest 0.2 (Std 7.01).

**Step 2. QAS minimums.** Split the credits into whole credits and a fraction. Then read the fraction from this table (qas-spec.md, rows 8 and 10).

| Fraction of a credit | 0.0 | 0.2 | 0.4 | 0.5 | 0.6 | 0.8 |
| --- | --: | --: | --: | --: | --: | --: |
| Review items added | 0 | 0 | 1 | 2 | 2 | 3 |
| Exam items added | 0 | 2 | 3 | 4 | 4 | 5 |

- Review minimum = 3 × whole credits + review items added.
- Exam minimum = 5 × whole credits + exam items added.

**Step 3. Build targets** (qas-spec.md, "Our build rule"):

- Review = 4 × credits, rounded up.
- Exam per form = the larger of 6 × credits (rounded up) and 2 × outcomes.

**Step 4. Close the loop.** Put the step 3 counts back into step 1. If the credits change, repeat. Stop when the counts no longer change.

**Step 5. Check the 4-hour cap.** Course Bible LD-03 allows at most 240 minutes. If the minutes exceed it, split the module.

## 3. The blueprint table

Fill one table per module. Forms A and B share the same table: parallel forms have the same cells.

| Outcome | Outcome level | L1 | L2 | L3 | L4 | L5 | Items per form | Exhibit items | Critical items (skill) | Missing or next |
| --- | --: | --: | --: | --: | --: | --: | --: | --: | --- | --: |
| Cxx-O1 | | | | | | | | | | |
| ... | | | | | | | | | | |
| **Total** | | | | | | | | | | |

Under the table, record the checks:

| Check | Required | This blueprint | Pass |
| --- | --- | --- | --- |
| Items per form | ≥ exam build target | | |
| Outcomes per form | 100% (R4); never under 75% (R3) | | |
| Items at level 3-4 (C3 on) | ≥ 60% | | |
| Exhibit items | ≥ 40% | | |
| Missing or next items | ≥ 1 | | |
| Critical items | 2 per critical skill | | |
| Review items | ≥ review build target | | |
| Retrieval items (C3 on) | 15-20% of review, from ≥ 2 earlier modules | | |
| Overlap, review to exam | 0 | | |
| Overlap, Form A to Form B | 0 | | |

**Parallel forms.** Each cell holds the same number of items on both forms. Both forms use the same exhibit types, built on different exam-only deal facts. After the pilot, the two forms' mean difficulty should differ by no more than 0.05; revise items if not.

## 4. Review questions and exam questions stay apart (8.6)

| Point | Review question | Exam question |
| --- | --- | --- |
| Where it lives | In the lesson, every 5-10 minutes (3.4) | In the exam bank only |
| Rationale | Shown at once, for every option (8.2) | None until the attempt closes. After a fail, feedback by outcome only (8.2) |
| Deals | Running deals allowed | Exam-only fictional deals, or running-deal variants with changed figures. Never a figure shown in the lesson or a review question |
| Storage | Lesson source, committed | `assessments/answer-keys/` only. That folder is git-ignored; exam keys are never committed (CLAUDE.md) |
| Item ID | `C08-R-007` | `C08-XA-014`, `C08-XB-014` |
| Counts toward credits | Yes | One form only |
| Separation check | A-check compares stems, exhibits and key figures across both sets. Any match fails the build | |

## 5. Critical items, grading and the pass mark

**Critical skill.** A critical outcome (see outcomes.md, section 1) holds one or more critical skills. Today each skill has exactly two items per form.

**Grading rule, per quality bar 8.7.** A learner fails when they miss both items of any critical skill. They also fail when they miss one and the total is under 80%. Since every pass needs 80% anyway, the rule reduces to "at least one of the two items right on every critical skill".

**The weakness (professor review 5).** With four options, a learner who guesses blindly on both items still gets at least one right with probability 1 − 0.75² = 43.75%. So the rule cannot tell a learner who lacks the skill from one who has it. Three options:

| Option | Items per skill per form | Rule for each skill | Chance a blind guesser passes the skill | C8 critical items per form | Effect |
| --- | --: | --- | --: | --: | --- |
| A (quality bar 8.7 now) | 2 | At least 1 of 2 right | 1 − 0.75² = 43.75% | 10 of 28 | Tolerates one slip; weak screen |
| B (recommended) | 3 | At least 2 of 3 right | 3 × 0.25² × 0.75 + 0.25³ = 15.625% | 15 of 28 | Tolerates one slip; strong screen; 50% more critical items |
| C | 2 | Both right | 0.25² = 6.25% | 10 of 28 | Strongest screen; one misread item fails the learner |

Every module fits option B. The largest loads are C1 at 12 of 20 and C8 at 15 of 28 (outcomes.md, section 7). **Owner decision (8.7, 8.11):** pick A, B or C. B or C changes the signed quality bar 8.7 wording, so the owner edits it. Course Bible section 3 ("every item tagged critical correct") and qas-spec.md ("missing any critical item fails") must then say the same.

**Draft grading statements (8.11).** Once one is chosen, it is worded the same everywhere:

> A: You pass when you score at least 80% and get at least one of the two items right on every critical skill.
>
> B: You pass when you score at least 80% and get at least two of the three items right on every critical skill.
>
> C: You pass when you score at least 80% and get every critical item right.

**Pass mark.** 80% is provisional until a modified-Angoff study with at least three qualified judges sets and records it (8.8).

**Retakes.** Quality bar 8.10 serves the other form on a retake. The Course Bible allows two retakes with a new item set each time, which needs a third set. Owner decision: build a Form C per module, or allow one retake only.

**Security (8.10).** Shuffle item order on every attempt. Shuffle option order, except for numeric options: those stay in ascending order, as the item-writing guidelines advise. The A-check should allow `option_order: "ascending"` for numeric items.

**Pilot and item analysis (8.9).** Pilot with at least three independent testers. After about 30 attempts, flag any item with:

- difficulty (proportion correct) under 0.30 or over 0.90;
- point-biserial under 0.20;
- a distractor chosen by under 5% of learners.

Revise or retire flagged items.

**Reliability (professor review 12).** Item statistics alone do not show whether the pass or fail decision is stable. On a 28-item form, the binomial standard error near the 80% cut is about √(28 × 0.8 × 0.2) = 2.12 items. So a learner one or two items either side of 23 correct could land on the other side on the parallel form. The item-analysis report therefore adds, per form:

- **KR-20**, internal consistency for right-or-wrong items: KR-20 = (k ÷ (k − 1)) × (1 − Σpq ÷ σ²). Here k is the item count, p each item's difficulty, q = 1 − p, and σ² the variance of total scores.
- **A decision-consistency index**: the share of learners classified the same (pass or fail) on Forms A and B, where both were taken. Where not, use a single-form estimate, for example Subkoviak's method.
- **The standard error of measurement** at the cut score.

**Owner decision (8.9):** set the minimum KR-20 and decision-consistency values. None is set here; no figure is invented.

## 6. Item metadata schema

Every item, review or exam, carries these fields. Codes are fine here: this is audit data, never learner prose (1.1).

| Field | Type | Rule |
| --- | --- | --- |
| `item_id` | string | `Cxx-R-nnn` (review) or `Cxx-XA-nnn` / `Cxx-XB-nnn` (exam) |
| `module` | string | `C0` to `C14` |
| `use` | `review` or `exam` | |
| `form` | `A`, `B` or null | null for review items |
| `outcome_id` | string | Must exist in outcomes.json. For a retrieval item, the earlier outcome |
| `retrieval` | boolean | True when the outcome is from an earlier module (7.4) |
| `bloom_level` | 1-6 | No higher than the outcome's level |
| `bloom_verb` | string | The task the item asks for, from the approved verbs |
| `bloom_reviewers_agree` | boolean or null | True when two reviewers, tagging by the cognitive task, agree on `bloom_level`. Null until reviewed (R18) |
| `exhibit_id` | string or null | Exhibit ID, for example `EXH-C08-05-A`. Mapped to registry documents in document-registry.md, section 6a |
| `source_document` | array of strings | Registry IDs the exhibit is built from, for example `["DOC-16", "DOC-17"]`. Required when `exhibit_id` is set (R19) |
| `exhibit_task` | `find`, `reconcile`, `judge` or null | Required when `exhibit_id` is set (8.4) |
| `missing_or_next` | boolean | True for "what is missing?" or "what do you do next?" items |
| `grey_case` | boolean | True when the key is to escalate, request an exception or condition (9.4) |
| `critical` | boolean | Exam items only score as critical |
| `critical_skill_id` | string or null | Required when `critical` is true, for example `C08-O2-K2` |
| `deal` | string | Running-deal ID (review only) or exam-only deal ID |
| `stem` | string | Plain English; sentences under 25 words; no codes |
| `negative_stem` | boolean | If true, the negative word is bold |
| `option_order` | `shuffle` or `ascending` | `ascending` for numeric options |
| `options` | array of exactly 4 | Each: `key` (A-D), `text`, `is_key`, `rationale`, `error_tag` |
| `options[].error_tag` | string or null | Named error behind a numeric distractor, for example `rehab-left-out-of-cost` |
| `options[].rationale` | string | Required for every option, review and exam (8.2) |
| `sources` | object | `rules`, `formulas`, `fixture` (a fixtures.json case for numeric keys) |
| `recomputed_by` | string | Who recomputed the key independently of the fixture (6.4) |
| `reviewers` | array of 2 or more | Each: `name`, `role`, `date`, `key_agrees`, `ambiguity_ok` |
| `status` | `draft`, `reviewed`, `piloted`, `live`, `retired` | |
| `last_reviewed` | date | |
| `stats` | object | `n`, `difficulty`, `point_biserial`, `option_rates` (8.9) |

**JSON Schema** (draft 2020-12), for the A-check:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "bpl-academy/item.schema.json",
  "type": "object",
  "required": ["item_id", "module", "use", "form", "outcome_id", "retrieval", "bloom_level", "bloom_verb",
               "exhibit_id", "exhibit_task", "missing_or_next", "grey_case", "critical", "critical_skill_id",
               "deal", "stem", "negative_stem", "option_order", "options", "sources", "reviewers", "status", "last_reviewed",
               "bloom_reviewers_agree", "source_document"],
  "properties": {
    "item_id": {"type": "string", "pattern": "^C(0[0-9]|1[0-4])-(R|XA|XB)-[0-9]{3}$"},
    "module": {"type": "string", "pattern": "^C([0-9]|1[0-4])$"},
    "use": {"enum": ["review", "exam"]},
    "form": {"enum": ["A", "B", null]},
    "outcome_id": {"type": "string", "pattern": "^C(0[0-9]|1[0-4])-O[1-8]$"},
    "retrieval": {"type": "boolean"},
    "bloom_level": {"type": "integer", "minimum": 1, "maximum": 6},
    "bloom_verb": {"type": "string"},
    "bloom_reviewers_agree": {"type": ["boolean", "null"]},
    "source_document": {"type": "array", "items": {"type": "string", "pattern": "^DOC-[0-9]{2}$"}},
    "exhibit_id": {"type": ["string", "null"], "pattern": "^EXH-C(0[0-9]|1[0-4])-[0-9]{2}(-[AB])?$"},
    "exhibit_task": {"enum": ["find", "reconcile", "judge", null]},
    "missing_or_next": {"type": "boolean"},
    "grey_case": {"type": "boolean"},
    "critical": {"type": "boolean"},
    "critical_skill_id": {"type": ["string", "null"], "pattern": "^C(0[0-9]|1[0-4])-O[1-8]-K[1-9]$"},
    "deal": {"type": "string"},
    "stem": {"type": "string", "minLength": 10},
    "negative_stem": {"type": "boolean"},
    "option_order": {"enum": ["shuffle", "ascending"]},
    "options": {
      "type": "array", "minItems": 4, "maxItems": 4,
      "items": {
        "type": "object",
        "required": ["key", "text", "is_key", "rationale", "error_tag"],
        "properties": {
          "key": {"enum": ["A", "B", "C", "D"]},
          "text": {"type": "string", "not": {"pattern": "(?i)(all|none) of the above"}},
          "is_key": {"type": "boolean"},
          "rationale": {"type": "string", "minLength": 10},
          "error_tag": {"type": ["string", "null"]}
        }
      },
      "contains": {"type": "object", "properties": {"is_key": {"const": true}}},
      "minContains": 1, "maxContains": 1
    },
    "sources": {"type": "object", "properties": {
      "rules": {"type": "array", "items": {"type": "string"}},
      "formulas": {"type": "array", "items": {"type": "string"}},
      "fixture": {"type": ["string", "null"]}}},
    "recomputed_by": {"type": ["string", "null"]},
    "reviewers": {"type": "array", "minItems": 2, "items": {"type": "object",
      "required": ["name", "role", "date", "key_agrees", "ambiguity_ok"]}},
    "status": {"enum": ["draft", "reviewed", "piloted", "live", "retired"]},
    "last_reviewed": {"type": "string", "format": "date"},
    "stats": {"type": "object", "properties": {
      "n": {"type": "integer"}, "difficulty": {"type": "number"},
      "point_biserial": {"type": "number"}, "option_rates": {"type": "object"}}}
  },
  "allOf": [
    {"if": {"properties": {"use": {"const": "review"}}}, "then": {"properties": {"form": {"const": null}, "item_id": {"pattern": "-R-"}}}},
    {"if": {"properties": {"use": {"const": "exam"}}}, "then": {"properties": {"form": {"enum": ["A", "B"]}}}},
    {"if": {"properties": {"critical": {"const": true}}}, "then": {"properties": {"critical_skill_id": {"type": "string"}}}},
    {"if": {"properties": {"exhibit_id": {"type": "string"}}}, "then": {"properties": {"exhibit_task": {"enum": ["find", "reconcile", "judge"]}, "source_document": {"minItems": 1}}}}
  ]
}
```

Some checks run in the A-check script, since the schema cannot express them. They are: item level at or below the outcome level; overlap; the section 3 counts; every `source_document` ID exists in document-registry.json; and no item on an outcome with `status: blocked` sits on an exam form.

### 6a. Item shells for levels 4 and 5 (professor review 6)

A level-4 or level-5 item must make the learner weigh evidence, not recall a rule. Use these shells. Each uses an exhibit whose evidence conflicts. The four options are each defensible actions or reasons, and only one is best under policy.

**Level 4 shell (analyze: which fact decides?).**

- Exhibit: two documents that disagree on one input, such as a rent roll and three months of deposits, plus a fact that explains part of the gap.
- Stem: "Which finding most changes the underwritten figure, and why?"
- Options: four findings, each true in the exhibit. The key is the one the policy's input rule makes decisive. Each distractor is a real but smaller or irrelevant difference.
- Metadata: `bloom_level: 4`, `exhibit_task: "reconcile"`, and `source_document` naming both documents.

**Level 5 shell (evaluate: which action is best?).**

- Exhibit: a short file with one strength, one weakness and one fact the policy is silent on.
- Stem: "What is the best next step for the credit officer?"
- Options: four defensible actions, such as approve as is, approve with a condition, request an exception with named mitigants, or escalate. The key follows policy and never invents a limit. The others are reasonable but miss one fact.
- Metadata: `bloom_level: 5`, `exhibit_task: "judge"`, and `grey_case` true where the policy is silent.

Both shells keep options of similar length, and the key is not always "stop and refer" (R20).

## 7. Worked example: C8 Loan structuring and sizing

### 7.1 Outcomes

From [outcomes.md](outcomes.md). Five critical skills sit in four critical outcomes.

| Outcome | Short name | Level | Critical skill |
| --- | --- | --: | --- |
| C08-O1 | Leverage tests | 3 | C08-O1-K1: leverage test on the right value or cost basis |
| C08-O2 | Binding test | 4 | C08-O2-K1: pick the binding test. C08-O2-K2: round the loan down per policy |
| C08-O3 | Bridge structure and reserves | 3 | C08-O3-K1: interest reserve required or not, and its amount |
| C08-O4 | Construction budget, contract and schedule | 4 | C08-O4-K1: loan-to-cost on total cost, with equity in first |
| C08-O5 | Rate build-up and all-in cost | 4 | - |
| C08-O6 | Exit break-even | 4 | - |
| C08-O7 | Capital stack | 4 | - |
| C08-O8 | Recommend a structure | 5 | - |

### 7.2 Credits and item counts

Inputs are the C8 blueprint figures (its section 7). They are 22,000 counted words, 19 review questions, 14 scored exercises, 28 items on one form and no media.

**Step 1. Credits.**

1. Words: 22,000 ÷ 180 = 122.222 minutes.
2. Questions: 19 + 14 + 28 = 61. 61 × 1.85 = 112.850 minutes.
3. Media: 0.000 minutes.
4. Total: 122.222 + 112.850 + 0.000 = 235.072 minutes.
5. Credits: 235.072 ÷ 50 = 4.701. Rounded down to fifths: **4.6 credits**.

**Step 2. QAS minimums at 4.6 credits.** Whole credits 4; fraction 0.6.

- Review: 3 × 4 + 2 = **14**.
- Exam: 5 × 4 + 4 = **24**.

**Step 3. Build targets.**

- Review: 4 × 4.6 = 18.4, rounded up to **19**.
- Exam per form: 6 × 4.6 = 27.6, rounded up to 28. Two per outcome: 2 × 8 = 16. The larger is **28**.

**Step 4. Loop.** Step 3 gives 19 and 28, the counts used in step 1. The credits stay at 4.6, so the loop closes.

**Step 5. Cap.** 240 − 235.072 = 4.928 minutes of headroom. That is about 887 words (4.928 × 180) or 2 more items (2 × 1.85 = 3.700). Construction now sits in its own lesson inside C8, and C08-O4 and C08-O5 grew. If the words exceed the headroom, split C8 into sizing and pricing, and construction and structure (owner decision). Option B in section 5 adds 5 critical items per form, but they replace other items inside the 28, so the count does not change.

### 7.3 Review questions (19)

| Outcome | Items | Levels | Note |
| --- | --: | --- | --- |
| C08-O1 to C08-O8 | 2 each, 16 in all | At or below each outcome's level | Running deals allowed |
| C03-O4 debt service and loan constant | 1 | 3 | Retrieval |
| C04-O5 coverage at full precision | 1 | 3 | Retrieval |
| C06-O6 tier and approver | 1 | 3 | Retrieval |
| **Total** | **19** | | |

Retrieval: 3 of 19 = 15.8%, inside 15-20%, from three earlier modules (R13).

### 7.4 Exam blueprint (Form A and Form B, same cells)

| Outcome | Outcome level | L1 | L2 | L3 | L4 | L5 | Items per form | Exhibit items | Critical items (skill) | Missing or next |
| --- | --: | --: | --: | --: | --: | --: | --: | --: | --- | --: |
| C08-O1 | 3 | 0 | 0 | 3 | 0 | 0 | 3 | 2 | 2 (O1-K1) | 0 |
| C08-O2 | 4 | 0 | 0 | 1 | 4 | 0 | 5 | 3 | 4 (O2-K1 2; O2-K2 2) | 0 |
| C08-O3 | 3 | 0 | 0 | 4 | 0 | 0 | 4 | 2 | 2 (O3-K1) | 0 |
| C08-O4 | 4 | 0 | 0 | 1 | 3 | 0 | 4 | 3 | 2 (O4-K1) | 1 |
| C08-O5 | 4 | 0 | 0 | 1 | 2 | 0 | 3 | 1 | 0 | 0 |
| C08-O6 | 4 | 0 | 0 | 1 | 2 | 0 | 3 | 1 | 0 | 0 |
| C08-O7 | 4 | 0 | 1 | 0 | 2 | 0 | 3 | 1 | 0 | 0 |
| C08-O8 | 5 | 0 | 0 | 0 | 1 | 2 | 3 | 1 | 0 | 1 |
| **Total** | | **0** | **1** | **11** | **14** | **2** | **28** | **14** | **10** | **2** |

The C08-O4 "missing" item gives a budget with soft costs left out. The C08-O8 "next" item is the grey case. Policy is silent on when the lender must approve a change order (document registry, open item 5). The key is to condition the next draw on credit-officer approval of the change order (R14). Policy is not silent on contingency: RES-FF-06, RES-GU-05 and MF-CON-04 each require at least 10%, so contingency is never the grey case.

**Checks.**

| Check | Required | This blueprint | Pass |
| --- | --- | --- | --- |
| Items per form | ≥ 28 | 28 | Yes |
| QAS exam minimum | ≥ 24 | 28 | Yes |
| Outcomes per form | 8 of 8 (R4); at least 6 of 8 (R3, 75%) | 8 of 8 | Yes |
| Level 3-4 items | ≥ 60% of 28 = 16.8, so 17 | 11 + 14 = 25 (89.3%) | Yes |
| Item level at or below outcome level; one at own level | Every outcome | Every row | Yes |
| Exhibit items | ≥ 40% of 28 = 11.2, so 12 | 14 (50.0%) | Yes |
| Missing or next items | ≥ 1 | 2 | Yes |
| Critical items | 2 × 5 skills = 10 | 10 | Yes |
| Review items | ≥ 19 (build); ≥ 14 (QAS) | 19 | Yes |
| Retrieval items | 2.85 to 3.8, so 3 | 3, from C3, C4 and C6 | Yes |
| Overlap, review to exam; Form A to Form B | 0 | 0 (rule for item writers; A-check confirms) | Pending items |

**Pass on one form.** 80% of 28 = 22.4, so a pass needs 23 correct (23 ÷ 28 = 82.1%; 22 ÷ 28 = 78.6%). The learner must also get at least one item right on each of the five critical skills.

### 7.5 Exhibits

Each exhibit has an A and a B version, built on different exam-only deal facts. Its source documents come from the document registry (section 6a there). Items carry them in `source_document`.

| Exhibit | Document | Registry source | Used by | Learner must |
| --- | --- | --- | --- | --- |
| EXH-C08-01 | Fix-and-flip loan request and term sheet | DOC-14, DOC-05 | O1, O5 | Find the cost base and price terms |
| EXH-C08-02 | Appraisal excerpt: as-is, after-repair and as-stabilized values | DOC-03 | O1, O2 | Pick the value each test uses |
| EXH-C08-03 | Underwriting spreadsheet extract: the sizing table (derived from its sources) | DOC-01, DOC-02, DOC-03 | O2 | Reconcile the tests; find the binding one |
| EXH-C08-04 | Bridge term sheet with a rate-cap confirmation and in-place cash flow | DOC-14, DOC-55, DOC-02 | O3 | Judge whether a reserve is needed |
| EXH-C08-05 | Construction budget, contract and schedule, with a planted defect | DOC-16, DOC-17, DOC-15 | O4 | Find what is missing; judge equity timing |
| EXH-C08-06 | Take-out lender quote and stabilized pro forma | DOC-59, DOC-02 | O6 | Reconcile break-even with the quote |
| EXH-C08-07 | Sources and uses with mezzanine debt and preferred equity | DOC-60 | O7 | Find who loses first |
| EXH-C08-08 | Sponsor's proposed terms, set against the term sheet | DOC-14 | O8 | Judge each term against policy |

### 7.6 Sample review item (metadata)

A review item, so its key and rationales may sit in committed lesson source. Figures are from the Maple Run running deal (`data/running-deals/running-deals.md`, sizing step 1). Recomputed: 85% × ($300,000 + $100,000) = $340,000; 70% × $520,000 = $364,000; 85% × $300,000 + $100,000 = $355,000. The lowest, $340,000, binds.

```json
{
  "item_id": "C08-R-001",
  "module": "C8",
  "use": "review",
  "form": null,
  "outcome_id": "C08-O1",
  "retrieval": false,
  "bloom_level": 3,
  "bloom_verb": "calculate",
  "bloom_reviewers_agree": null,
  "exhibit_id": null,
  "source_document": [],
  "exhibit_task": null,
  "missing_or_next": false,
  "grey_case": false,
  "critical": false,
  "critical_skill_id": null,
  "deal": "RD-RES-01",
  "stem": "Maple Run's sponsor is Tier 2. Price is $300,000, as-is value $310,000, rehab budget $100,000 and after-repair value $520,000. Policy caps are 85% of total cost, 70% of after-repair value, and 85% of price plus the rehab budget. What is the largest loan policy allows?",
  "negative_stem": false,
  "option_order": "ascending",
  "options": [
    {"key": "A", "text": "$255,000", "is_key": false, "error_tag": "rehab-left-out-of-cost",
     "rationale": "This applies 85% to the price alone. Loan-to-cost uses total cost, which adds the $100,000 rehab budget."},
    {"key": "B", "text": "$340,000", "is_key": true, "error_tag": null,
     "rationale": "85% of $400,000 total cost is $340,000. It is the lowest of the three tests, so it binds."},
    {"key": "C", "text": "$355,000", "is_key": false, "error_tag": "wrong-test-binds",
     "rationale": "This is the purchase test: 85% of $300,000 plus $100,000. It is not the lowest result, so it does not bind."},
    {"key": "D", "text": "$364,000", "is_key": false, "error_tag": "highest-test-chosen",
     "rationale": "This is the after-repair test: 70% of $520,000. Choosing the highest result oversizes the loan."}
  ],
  "sources": {"rules": ["RES-FF-01", "RES-FF-02", "RES-FF-03", "RES-FF-04"], "formulas": ["F-RES-02", "F-RES-04", "F-RES-13"], "fixture": null},
  "recomputed_by": "<name>",
  "reviewers": [
    {"name": "<reviewer 1>", "role": "credit", "date": "<date>", "key_agrees": true, "ambiguity_ok": true},
    {"name": "<reviewer 2>", "role": "assessment", "date": "<date>", "key_agrees": true, "ambiguity_ok": true}
  ],
  "status": "draft",
  "last_reviewed": "2026-11-22"
}
```

An exam item has the same fields, with `use: "exam"`, a form, an exam-only deal and, for a critical item, `critical_skill_id`. Exam items, keys and rationales are stored only in `assessments/answer-keys/`, so no exam sample appears here.

## 8. Blank template to copy

```markdown
## Cxx exam blueprint

Outcomes: <n> (from outcomes.json). Critical skills: <list>.

### Credits and counts
1. Words: <w> ÷ 180 = <a> minutes.
2. Questions: <review> + <exercises> + <exam one form> = <q>; <q> × 1.85 = <b> minutes.
3. Media: <m> minutes.
4. Total: <a + b + m> minutes ÷ 50 = <raw>, rounded down to fifths: <credits>.
5. QAS minimums: review 3 × <whole> + <table> = <r_min>; exam 5 × <whole> + <table> = <x_min>.
6. Build targets: review ceil(4 × <credits>) = <r>; exam max(ceil(6 × <credits>), 2 × <n>) = <x>.
7. Loop closed: <yes/no>. Minutes under 240: <yes/no>.

### Review questions
| Outcome | Items | Levels | Note |

### Exam blueprint (Forms A and B)
| Outcome | Outcome level | L1 | L2 | L3 | L4 | L5 | Items per form | Exhibit items | Critical items (skill) | Missing or next |

### Checks
| Check | Required | This blueprint | Pass |

### Exhibits
| Exhibit | Document | Used by | Learner must |
```

## Self-check

| Requirement | Status |
| --- | --- |
| Outcomes × Bloom × item count format (8.5) | Done: section 3, filled for C8 in 7.4 |
| Two parallel forms; 100% across forms and 75% per form (8.5, 8.10) | Done: R2-R4; C8 covers 8 of 8 on each form |
| At least 60% of items at level 3-4 from C3 (8.5) | Done: R5; C8 at 89.3% |
| At least 40% exhibit items; one "missing or next" item (8.4) | Done: R7, R8; C8 at 50.0% with 2 such items |
| Two items per critical skill per form (8.7) | Done: R9; C8 has 10 for 5 skills. The guessing weakness and options A-C are in section 5 (owner decision) |
| Bloom level by cognitive task; level 4-5 shells | Done: R18, `bloom_reviewers_agree`, section 6a |
| Exhibits mapped to registry documents | Done: R19, `source_document`, section 7.5 |
| Reliability | Done: KR-20, decision consistency and SEM added to item analysis (section 5). Minimums are an owner decision |
| Grey case is a real policy silence (9.4) | Done: change-order approval, not contingency |
| Review and exam separation (8.6) | Done: section 4 |
| Item counts per credit with the computation shown (Std 5.01.2.1, 6.01.2, 7.02) | Done: section 2 and 7.2 (4.6 credits) |
| Item metadata schema (outcome, Bloom, exhibit, critical, rationale per option, form, review or exam) | Done: section 6, table and JSON Schema |
| No invented limit | Done: the sample item uses existing policy caps and running-deal figures |
| Open owner decisions | Four: the critical pass rule (options A-C), reliability minimums, a third form for the second retake, and ascending numeric options |

## What to look up yourself

1. Haladyna, Downing and Rodriguez (2002), "A review of multiple-choice item-writing guidelines for classroom assessment", *Applied Measurement in Education* 15(3), 309-334. Confirm the guideline on ordering numeric options before the A-check allows `ascending`.
2. A modified-Angoff method guide, such as Cizek and Bunch, *Standard Setting* (2007), before the 8.8 study is planned.
3. The *Statement on Standards for CPE Programs* (August 2026), sections 5.01.2 and 6.01.2. Re-check the fraction tables against the source PDF linked in qas-spec.md.
4. Kuder and Richardson (1937), *Psychometrika*, for KR-20, and Subkoviak's single-form decision-consistency method (*Journal of Educational Measurement*). Confirm each citation before the 8.9 report cites it.

## How to check it

1. `=22000/180+(19+14+28)*1.85` gives 235.072. `=ROUNDDOWN(235.072/50*5,0)/5` gives 4.6.
2. `=3*4+2` gives 14 and `=5*4+4` gives 24, the QAS minimums at 4.6 credits.
3. `=ROUNDUP(4*4.6,0)` gives 19 and `=ROUNDUP(6*4.6,0)` gives 28.
4. In section 7.4, add each row's L1-L5 cells. Each must equal its "Items per form". The L3 and L4 totals, 11 + 14, divided by 28 give 0.893.
5. `=0.85*400000`, `=0.7*520000` and `=0.85*300000+100000` give 340,000, 364,000 and 355,000.
6. Validate an item file against the schema in section 6 with any JSON Schema 2020-12 validator.
7. Guess rates: `=1-0.75^2` gives 0.4375; `=3*0.25^2*0.75+0.25^3` gives 0.15625; `=0.25^2` gives 0.0625. `=SQRT(28*0.8*0.2)` gives 2.117.
