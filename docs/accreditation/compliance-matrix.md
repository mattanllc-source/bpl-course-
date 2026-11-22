# Compliance matrix: NASBA QAS Self Study (baseline)

Model policy for training - not for live lending decisions.

Provider: BPL Academy. Audited 22 Nov 2026 against `docs/accreditation/qas-spec.md` (2026 Statement on Standards for CPE Programs, August 2026 edition). Audits the course **as it stands today**, at commit `2632c58`, before the Flagship rebuild.

**Scope read:** `modules/core/c00`-`c14/lesson.md`; `scripts/course_site/template.html` and `build.py` (the course page); `scripts/course_site/exercises/`; `docs/` (Course Bible snapshot, `SNAPSHOT.md`, changelog, accreditation spec). Credit figures come from `credit-worksheet-baseline.md`.

**Status rules.** *Met* needs evidence in a named file and section. *Partly* means some of the rule is in place. *Not met* means no evidence, or the design works against the rule. Rows that need the owner, not a build phase, say **Owner action**.

**Phases (Flagship plan):** 1 Curriculum design · 2 Content · 3 Assessment · 4 Learning experience · 5 Design and platform · 6 Accreditation package · 7 Release. The plan itself is not in the repo; phase names are as given for this audit.

**Learner and depth (owner decisions, 22 Nov 2026):** a college graduate with basic finance, new to lending; upper-undergraduate to early-graduate depth; length grows as depth needs (likely 50-70 hours); all testing multiple choice.

## Summary

| Status | Rows |
| --- | --- |
| Met | 4 |
| Partly | 22 |
| Not met | 27 |
| **Total** | **53** |

## A. Requirements per module

| # | Requirement (Std ref) | Status | Evidence | Fix needed | Phase |
| --- | --- | --- | --- | --- | --- |
| M1 | Learning objectives: measurable verbs, 3-8 per module (3.01) | Partly | Every lesson, section 2 "Objectives": 4 to 6 objectives per module (C0-C2 have 4; C3-C11 have 5; C12-C14 have 6), led by bold action verbs (Calculate, Classify, Analyze). Some verbs are weak for measurement: "Use" (C0), "Spot" and "Map" (C1), "Track" (C11), "Run" and "Recognize" (C14), "Record" (C13). | Rewrite in the blueprints with Bloom levels; replace weak verbs; at least half at Apply or above (Gate 1). | 1 |
| M2 | Knowledge level stated per module (3.01.1) | Not met | Lesson facts tables give "Bloom's levels" (e.g. C3: "2 and 3"), not a CPE knowledge level. The page shows none. The spec sets C0-C2 Basic and C3-C14 Intermediate. | State Basic or Intermediate in each blueprint, program description and module overview. | 1, 6 |
| M3 | Prerequisites stated; precise for Intermediate (3.02.1) | Partly | Facts table "Prerequisite(s)" row in every lesson (e.g. C8 "C3, C5"; C0 "None"). The page shows them from the Course Bible Core table (`template.html`, course home list, `prereqText(m.prereq)`). They name modules, not the knowledge or skills needed. | Add precise prerequisite statements (what the learner must already know) for C3-C14. | 1, 6 |
| M4 | Advance preparation stated, "none" where not applicable (3.02.1) | Not met | No lesson, page view or doc states advance preparation. | State "None" or the preparation for every module. | 6 |
| M5 | Publication or last-review date shown (4.01) | Partly | Lesson facts tables carry a change log with dates (e.g. C13 "v0.2, 22 Nov 2026"). `build.py` drops the facts table except Formulas, Rules and Running deals, so learners see no module date. The page shows snapshot dates only for the reference tabs (`snapshot_note`). `build.py` still flags C3-C14 "working draft" although `SNAPSHOT.md` says they were reviewed 22 Nov 2026. | Show "Last reviewed" per module on the page and in program descriptions; drop the stale DRAFT set. | 5, 6 |
| M6 | Developed by a subject matter expert; AI-assisted content checked for accuracy by the developer (4.01.1) | Partly | Every lesson ends with "Self-review against Bible Section 7", dated, and numbers are "computed in code" (C3 change log). `docs/changelog.md` (22 Nov) records [VERIFY] rechecks. No author bio or credentials exist. Course Bible section 7 requires "re-checked by a second person"; C7's self-review says "second-person check pending". | Record the developer and their qualifications; document the AI-accuracy check per module (legal verification and recomputation). | 2, 6; **Owner action**: author bio and credentials |
| M7 | Independent content review before release and after significant revision (4.02) | Not met | Solo mode: "every sign-off is a self-review" (Course Bible section 7, Release). No independent reviewer is named or recorded. | Appoint a qualified reviewer independent of the author; record review dates and findings per module. | 3, 7; **Owner action**: name the reviewer |
| M8 | Self-study materials: overview of topics (4.05.3) | Met | Page step "Overview" built from the Hook and Objectives (`template.html`, `STEPS`, id "overview"); course home lists all 15 modules with titles. | Keep through the redesign. | 5 |
| M9 | Self-study materials: search or index (4.05.3) | Not met | `template.html` has no search function and no index. Rule and formula IDs open in a reference drawer, but there is no term or topic lookup. | Build full-text search and a topic index. | 2 (index content), 5 |
| M10 | Self-study materials: glossary (4.05.3) | Partly | A 150-term glossary exists, 80 of them Core (Course Bible section 6, `docs/course-bible.md`). The page does not include it: `build.py` `REFS` lists only policy, formulas, deals and state law. | Add the glossary to the page and link terms from lessons. | 2, 5 |
| M11 | Self-study materials: navigation (4.05.3) | Met | Module nav and "Show modules" drawer; per-module step buttons with `aria-current` (`template.html`, `nav`, `.steps`); "Continue with" card on the home page. | Keep through the redesign. | 5 |
| M12 | Self-study materials: completion instructions (4.05.3) | Partly | Course home "How this works" explains the steps and says to mark yourself honestly. Each module ends with "Finished the quiz, the OJT task and the self-check? Mark this module done." Nothing explains the exam, pass rule, credit, evaluation or certificate. | Write completion instructions: exam rules, 80% pass, critical items, retake, evaluation, certificate. | 5 |
| M13 | Self-study materials: review questions with feedback (4.05.3) | Partly | Practice (section 5) has 5-8 items per module with model answers; wrap-up self-checks have 3-6 with answers. All are open answer and self-marked. Exercises give "Your answer matches" or "does not match". | Replace with scored multiple-choice review questions with per-option feedback (rows M15-M16). | 3, 5 |
| M14 | Self-study materials: final exam (4.05.3) | Not met | The module "Quiz" is the nearest thing. It is self-marked: the learner reveals the answer and clicks "Got it" or "Missed it" (`template.html`, `buildQuiz`). It cannot decide completion. | Build a graded final exam per module. | 3, 5 |
| M15 | Not reading-plus-test: interactive elements (4.05.3) | Met | 45 interactive exercises, 3 per module (calculator, build-up, sort, order, decision, scenario), validated against the formula bundle at build time (`scripts/course_site/exercises/`, `check_exercises.mjs`). | Keep; map each to an objective and add pacing (Gate 4). | 4 |
| M16 | Review questions: at least 3 scored items per credit, placed throughout; true/false does not count; no pass rate (5.01.2.1) | Not met | No scored review questions. Practice and quiz items all sit after the Teach section, not through it. At baseline credits (0.8-1.2) each module needs 3; it has 0 that qualify. | Write review questions at 4 per credit, placed inside the teach chunks, multiple choice, unscored for pass. | 3, 5 |
| M17 | Review feedback: at least correct or incorrect; we explain every option (5.01.2.2) | Partly | Practice and self-check items show a model answer. C3-C9 quiz keys explain some distractors (C3 Set A Q1: "A uses ÷ 12; B uses 365") but not every option. Exercises give right or wrong feedback. | Write a rationale for every option of every review question. | 3 |
| M18 | Final exam: at least 5 items per credit, with fraction rule (6.01.2) | Partly | Quiz sets have 8 (C0), 10 (C1, C2, C7, C10, C11) or 12 items (others), which exceeds the 5-7 needed at baseline credits. None qualify yet, since none are graded. Counts must be recomputed once lessons grow. | Size exam sets from final credits: at least 6 per credit and 2 per objective (build rule). | 3 |
| M19 | Final exam: no true/false or yes/no items (6.01.2) | Not met | 18 of 166 Set A items can be answered yes or no. Examples: C0 Set A Q1 "Can an individual borrow under our program? Answer: no"; C10 Set A Q5 "Is a $90,000 Ohio loan to an LLC for a rental usury-exempt?"; C11 Set A Q1 "Can you fund?". By module: C0 3, C1 4, C2 2, C10 2, C11 1, C12 2, C13 1, C14 3. | Rewrite as four-option multiple choice. | 3 |
| M20 | Final exam: no repeats of review questions (6.01.2) | Not met | No control exists. Practice, self-check and quiz items were written in the same lesson with no overlap check, and both quiz sets are shown on one page. Not verified item by item. | Keep review and exam banks separate; run an automated overlap check. | 3 |
| M21 | Final exam covers at least 75% of objectives (6.01.2) | Partly | The design is in place: every lesson's "Alignment matrix (LD-07)" maps each objective to Quiz A and Quiz B items, and quiz items carry objective tags (O1-O6). Example: C0 maps O1-O4 to Set A items 1-8. But no qualifying final exam exists yet (row M14), so the rule cannot be met. | Keep the mapping in the new exam; require 2 items per objective per set (build rule). | 3 |
| M22 | Pass mark at least 70% before credit (6.01.2); our mark 80% with critical items | Partly | Every quiz states 80% (e.g. C3 "80% (10 of 12) and every item marked critical correct"). The page scores self-marks against 80% and fails a set on a missed critical item (`updateScore`). No grading and no credit gating. | Enforce 80% plus critical items in a graded exam that gates credit. | 3, 5 |
| M23 | Multiple choice only, four options, one best answer (our build rule; owner decision) | Partly | C3-C9 quizzes are four-option multiple choice (82 Set A items). C0-C2 and C10-C14 quizzes are open answer (84 Set A items). Practice and self-checks are open answer. | Convert all test items to four-option multiple choice. | 3 |
| M24 | Exam feedback: none on a failed attempt without a bank; with a bank, enough to limit overlap on retakes (6.01.2) | Not met | Answers and keys can be revealed before any attempt ("Reveal answer"), and Set A and Set B appear together. A retake on Set B is fully exposed. | Hide keys; no feedback on a failed attempt; serve Set B on retake. | 5 |
| M25 | Completion decided by the exam, not self-certification (6.01) | Not met | Completion is "Mark module done", a self-certification button (`template.html`, module footer). | Record completion only on an exam pass. | 5 |
| M26 | Credit: 50-minute hour, 0.2 or 0.5 increments, round down (7.01) | Not met | The page shows clock "hours" from the Course Bible table (38 in all), not CPE credits. The word-count formula gives about 16.7 credits (15.6 after per-module rounding to fifths). | Compute and show credits per module from final counts; drop clock hours. | 3, 6 |
| M27 | Credit method: word-count formula or pilot test (7.02) | Partly | `credit-worksheet-baseline.md` (this audit) applies the formula to today's course. It is a baseline, not a final worksheet. | Recompute from final word and question counts after Gate 3. | 3, 6 |

## B. Program design decisions (`qas-spec.md`)

| # | Decision | Status | Evidence | Fix needed | Phase |
| --- | --- | --- | --- | --- | --- |
| P1 | Each module is its own self-study program; the core is an integrated series | Partly | Modules are separate on the page, each with its own quiz. No program description per module and no series statement. | Write one program description per module and a series description. | 6 |
| P2 | Field of study: Specialized Knowledge, with Finance split by content time (7.01.1) | Not met | No field of study appears anywhere. | Assign fields per module, splitting Finance time for C3-C5 and C8 math. | 6 |
| P3 | Final exam pass mark 80%; missing any critical item fails | Partly | Stated in every quiz and scored on self-marks (row M22). | Enforce in the exam engine. | 5 |
| P4 | Yearly review cycle (4.01) | Partly | Course Bible section 8 lists "VERIFY re-check cycle" as an open `[CONFIRM]` decision. The spec sets yearly. Nothing schedules it. | Adopt and publish the yearly cycle; record each review date. | 6 |
| P5 | Records retention 7 years | Not met | No retention policy or mechanism. | Write the policy; set up record storage and export. | 5, 6 |

## C. Course-level requirements

| # | Requirement (Std ref) | Status | Evidence | Fix needed | Phase |
| --- | --- | --- | --- | --- | --- |
| C1 | Evaluation for every program: objectives met, prerequisites, materials and exam relevant, time, author, comments (4.04.1) | Not met | No evaluation form in `template.html` or `docs/`. | Build a per-module evaluation form with the six required items. | 5 |
| C2 | Evaluation results reviewed periodically (4.04.2) | Not met | No results, no review process. | Store results; log a periodic review. | 5, 6 |
| C3 | Advance disclosure: learning objectives (8.01) | Partly | Objectives are shown inside each module's Overview step, not before enrollment. | Show in program descriptions before a learner starts. | 6 |
| C4 | Advance disclosure: program type "QAS Self Study" (8.01) | Not met | Not stated. | Add to descriptions and the page. | 6, 5 |
| C5 | Advance disclosure: credits and field of study (8.01) | Not met | Only clock hours are shown (row M26). | Add credits by field. | 6 |
| C6 | Advance disclosure: prerequisites (8.01) | Met | Course home shows each module's prerequisite before it is opened (`template.html`, `prereqText`). | Keep; add precise wording (row M3). | 6 |
| C7 | Advance disclosure: knowledge level and advance preparation (8.01) | Not met | Neither is stated (rows M2, M4). | Add to descriptions. | 6 |
| C8 | Advance disclosure: program description (8.01) | Partly | The page shows only module titles. Course Bible section 1 has a scope statement that learners do not see. | Write a short description per module. | 6 |
| C9 | Advance disclosure: registration, refund and cancellation policies (8.01) | Not met | None exist. | Write the policies, even if the course is free. | 6 |
| C10 | Advance disclosure: complaint resolution policy (8.01) | Not met | None exists. | Write the policy with a contact and response time. | 6 |
| C11 | Advance disclosure: NASBA sponsor statement (8.01.1) | Not met | None. It needs a NASBA sponsor ID, which needs an approved application. | Draft the statement with a placeholder ID. | 6; **Owner action**: QAS application |
| C12 | Certificate with sponsor name, participant, title, date, program type, credits by field, sponsor ID, 50-minute statement, board statements (9.01) | Not met | No certificate. Course home only says "Course complete. Every module is marked done." | Build a certificate per module with every field. | 5; **Owner action**: sponsor ID |
| C13 | Records per learner: completion, credits, date (9.02) | Partly | In db mode the page stores status, quiz self-marks, answers and notes per user at `data/users/<uid>/...`, with `updatedAt` (`template.html`, `store`). No completion date, exam score or credits. Browser-only fallback keeps nothing server-side. | Record exam attempts, scores, pass date and credits per learner; export them. | 5 |
| C14 | Program records: credit worksheets, author and reviewer credentials, evaluation results, marketing and course materials (9.02) | Partly | Course materials and history are in git; a baseline credit worksheet now exists. No credentials, evaluations or marketing records. | Assemble the records file per module. | 6; **Owner action**: credentials |
| C15 | Course expiration at most 1 year from enrollment (9.02.2(3)) | Not met | No enrollment date or expiry. Course Bible section 2 proposes 24-month certificate life ([CONFIRM]), which is a different thing. | Record enrollment; expire at 1 year (or set a series rule). | 5 |
| C16 | Provider name "BPL Academy" on certificates and descriptions | Not met | The page title and header say "BPL Core Course". "BPL Academy" appears only in `qas-spec.md` and the agent files. | Apply the provider name across the page, descriptions and certificate. | 5, 6 |
| C17 | IACET: needs analysis linked to outcomes (4.1) | Not met | None. Course Bible section 2 describes roles but not a needs analysis. | Write the needs analysis (job tasks to modules). | 1 |
| C18 | IACET: identity check (5.2) | Partly | In db mode the page uses the signed-in viewer's ID (`window.claude.use("user")`). The browser-only fallback has no identity. | Require sign-in for exams and records. | 5 |
| C19 | IACET: learner told whether criteria met (8.1) | Partly | The quiz banner says "Passed" or "Below the pass mark" on self-marks (`updateScore`). | Report graded results per attempt. | 5 |
| C20 | IACET: records privacy policy (8.4-8.6) | Not met | None. | Write the policy. | 6 |
| C21 | IACET: anti-discrimination and proprietary-interest disclosures (1.6, 1.7) | Not met | None. | Write both disclosures. | 6 |

## Owner actions (no build phase can close these)

1. Author bio and credentials for the developer (M6, C14).
2. An independent content reviewer, named and qualified (M7).
3. The QAS application, which yields the sponsor ID for the statement and certificate (C11, C12).
4. Ask cpe@nasba.org whether internal training for a non-CPA audience is eligible (spec, "Not confirmed").

## Self-check

1. Why is the module quiz not a final exam today? It is self-marked and its answers can be revealed before an attempt, so it cannot decide completion (Std 6.01).
2. Do the 45 exercises meet the interactivity rule? Yes: they are hands-on and checked against the formula bundle, so the course is not reading-plus-test (Std 4.05.3).
3. Why is a yes/no item a problem even in a multiple-choice exam? Std 6.01.2 bars true/false and yes/no items from final exams.

## What to look up yourself

- The QAS self-study application checklist, to confirm which sample program and policies must be attached ([NASBA QAS self-study](https://www.nasbaregistry.org/preparing-to-apply/qas-self-study)).

## How to check it

- Recount yes/no items: search each lesson's Set A for items whose answer starts with "yes" or "no", or that open with "Can", "Is", "Does" or "Should". Then read each hit, since "Effect?" items can have a "no" answer without being yes/no. The count was 18 of 166.
- Confirm the self-marking: open any module, Quiz step, and press "Reveal answer" before typing anything. The answer shows.
