# BPL Academy quality bar

Status: DRAFT v2 for owner sign-off, 22 Nov 2026. v2 adds the findings of an academic review (professor of real estate finance and private credit) and an industry review (chief credit officer of a business-purpose lender).

Every learner-facing page and module must pass this bar before it counts as done. "Done" is a pass on this checklist plus the owner's sign-off, never a claim.

The bar has three layers. A course needs all three:

- **Page quality** (sections 1-5): layout, readability, accessibility. Sources: Quality Matters Higher Education Rubric, 7th ed. (QM); WCAG 2.2 AA; CFI and Wall Street Prep lesson pages as the visual reference ([layout-patterns.md](layout-patterns.md)).
- **Academic substance** (sections 6-8): theory, learning design, valid assessment. Sources: QM; NASBA/AICPA QAS self-study rules (QAS, [qas-spec.md](../accreditation/qas-spec.md)); standard real estate finance texts.
- **Job readiness** (sections 9-11): real documents, current market practice, regulation and fraud. Source: the job tasks in [needs-analysis.md](../curriculum/needs-analysis.md).

CLAUDE.md content rules apply in full: training label, no invented limits, step-by-step math, `[VERIFY]` tags in source, plain English, sentences under 25 words.

## How items are checked

| Mark | Check | Who or what |
| --- | --- | --- |
| **A** | Automated, in CI | `check:copy`, `npm test`, `test:excel`, axe-core, overflow checks, registry and matrix checks |
| **V** | Visual | Screenshots read one by one against this bar |
| **R** | Reviewer | Specialist agents screen (academic, industry, numbers, legal, assessment, design), each scoring against the rubric in section 13 |
| **H** | Human sign-off | A named human subject-matter expert. Required before release; agents cannot give it |

**Fail** rows send work back. **Advisory** rows (marked *adv*) are logged and fixed when convenient, but never block on their own.

---

## Layer 1: page quality

### 1. Every page

| # | Requirement | Check |
| --- | --- | --- |
| 1.1 | No codes in learner prose: no rule, formula, deal, state-row or decision IDs. Codes show only in Audit mode. Where a learner must cite policy (memo practice, exception requests), they cite it by plain section name, e.g. "Model Credit Policy, Leverage limits". | A |
| 1.2 | No author material: status words (REQUIRED, SUGGESTED), "Your decision", research notes, draft or version markers, "projected", phase notes, raw `[VERIFY]` tags, author section names (Hook, OJT, Teach). | A |
| 1.3 | Sentences of 25 words or fewer in learner prose (CLAUDE.md). | A |
| 1.4 | The training label shows once, in the notice bar. | V |
| 1.5 | One clear purpose per page, stated in its first two lines. | V |
| 1.6 | Line length 60-80 characters. No more than one screen of text without a heading, table, example or check. (QM 8.2) | A (CSS measure), V |
| 1.7 | No table or element overflows its box. No table column so narrow that a cell wraps to one word per line. | A (overflow and column-width check) |
| 1.8 | No sideways page scroll at 390 px (phone width). | A |
| 1.9 | axe-core: 0 violations. WCAG 2.2 AA contrast, headings, labels and keyboard use. (QM 8.3-8.6) | A |
| 1.10 | Formulas are text, not images, with a text alternative. (QM 8.3) | A |
| 1.11 | Breadcrumbs, previous and next links, and search work. (QM 8.1) | V |
| 1.12 | Each page shows "Last reviewed <month year>". (QM 4.4) | A |

### 2. Module overview

| # | Requirement | Check |
| --- | --- | --- |
| 2.1 | Opens with "You will be able to:" and the module's outcomes (see 7.1). | V |
| 2.2 | A facts panel: category, time, CPE credits (computed from the QAS formula, never "projected"), prerequisites (see 7.2), what is graded and the pass mark. (QM 1.7, 3.2) | A (credit figure matches worksheet), V |
| 2.3 | A contents list with counts and minutes per item. Practice is kept apart from graded work. | V |
| 2.4 | Downloads near the top: blank workbook, completed workbook, formula sheet. *adv* on position. | V |
| 2.5 | Says why the module matters on the credit desk, with a running deal. | V, R (industry) |

### 3. Lesson page

| # | Requirement | Check |
| --- | --- | --- |
| 3.1 | Title block: name, one-line summary, about N min, last reviewed. | V |
| 3.2 | Key highlights near the top; key takeaways at the end. | V |
| 3.3 | An "On this page" list. *adv*: keep it near 8 items. | V |
| 3.4 | A multiple-choice check every 5-10 minutes of reading, with instant feedback and a rationale for each option. (QM 3.5, 5.2) | A (count per minute), R (assessment) |
| 3.5 | Worked examples follow Formula, Inputs, Substitution, Result, on a running deal. Long tables show first and last rows. | V, R (numbers) |
| 3.6 | Worked examples fade: a full example, then a partly completed problem, then an independent problem. | V, R (academic) |
| 3.7 | Says how the material connects to the practice items, workbook and quiz. (QM 4.2) | V |

### 4. Formula page

Follow the anatomy in [layout-patterns.md](layout-patterns.md) section C, without an ID chip.

| # | Requirement | Check |
| --- | --- | --- |
| 4.1 | Order: what it is; highlights; formula in words; "Where:" list with units and the source document of each input; conventions; worked example; In Excel; how to read the result; when it misleads; quick check; takeaways; related formulas. | V |
| 4.2 | Policy limits are named in plain words and link to the policy; a policy number appears only if the policy states it. Market ranges may appear only if sourced and dated, labelled "Market, as of <month year>", and kept visibly separate from policy. | V, R (numbers) |
| 4.3 | Taught-in and builds-on links use module and formula names, not codes. | A |

### 5. Reference shelf

| # | Requirement | Check |
| --- | --- | --- |
| 5.1 | Sections: glossary, formula sheet, policy rules, state law, running deals, downloads. All searchable and printable; nothing gated. | V |
| 5.2 | Learner views are built for learners. Decision logs, research tables and change notes live in an author view only. | A, V |
| 5.3 | Formula catalog grouped by topic, searchable, one card per formula linking to its page. | V |
| 5.4 | Policy rules grouped by topic in plain English: the rule, its limit, why it exists, the modules that teach it, its source. | V, R (academic) |
| 5.5 | State law: pick a state and loan type; one-line answer, detail, statute, date checked and a "counsel to confirm" flag per topic. | V, R (legal) |
| 5.6 | Running deals: a card per deal with facts, numbers, timeline, documents and the modules that use it. | V |

---

## Layer 2: academic substance

### 6. Theory and rigor

| # | Requirement | Check |
| --- | --- | --- |
| 6.1 | **Theory map.** A course theory map assigns each core concept a home module and the modules that revisit it. At minimum: expected loss (default probability × loss given default × exposure) and credit spreads; default as the borrower's option to walk away; loss severity and recovery timing; the capital stack, contractual and structural subordination, intercreditor terms and mezzanine foreclosure; agency problems (moral hazard, adverse selection, originate-to-distribute, sponsor incentives); interest-rate, refinance and extension risk; concentration risk; real estate and credit cycles. | A (every concept has a home module), R (academic) |
| 6.2 | **Mechanism, not only procedure.** Each module teaches its theory-map concepts as why, not just how. At least one section per module explains the economic reason a rule or test exists. Depth is judged against the theory map and the job tasks a credit committee expects, not by impression. | R (academic, industry) |
| 6.3 | **Model versus market.** Every simplifying convention is labelled as a model convention, with how real notes or markets differ and the size of the effect. | R (academic, numbers) |
| 6.4 | **Independent recomputation.** A reviewer recomputes key figures independently of `fixtures.json`. A fixture that disagrees with theory is a finding, not a pass. The recomputation file is kept. | R (numbers) |
| 6.5 | **Citation standard.** Each module cites at least one standard text by edition and chapter (e.g. Geltner et al., *Commercial Real Estate Analysis and Investments*; Brueggeman and Fisher, *Real Estate Finance and Investments*; Linneman, *Real Estate Finance and Investments*). Regulators are cited by section. No citation is written from memory without being opened. | A (format), R (sources opened) |
| 6.6 | **Misconceptions.** Each module names the 2-3 commonest misconceptions in its topic and corrects each with an example. | R (academic) |
| 6.7 | **Cases and cycles.** C0, C8, C13 and C14 each use at least one documented historical episode (for example the early-1990s commercial real estate bust, 2008-09, the 2023 office stress), cited to a regulator or academic source. | R (academic) |

### 7. Learning design

| # | Requirement | Check |
| --- | --- | --- |
| 7.1 | **Outcomes.** 3-8 measurable outcomes per module (QAS). Each is tagged with a Bloom level and maps to a course outcome and a job task in needs-analysis.md. C0-C2 mainly levels 1-3. From C3, at least half at level 3 or higher and at least one at level 4-5. Every high-risk job task is taught and tested. (QM 2.1-2.5) | A (tags, ratio, traceability), R (academic) |
| 7.2 | **Prerequisite chain.** A published graph states which modules and formulas each module assumes. No lesson uses a concept before its home module. | A |
| 7.3 | **Off-objective content.** Each section serves a named outcome, including conceptual outcomes from the theory map. Anything else is cut. (QM 4.1) | R (academic) |
| 7.4 | **Spaced retrieval.** From C3 on, 15-20% of each module's review questions revisit outcomes from at least two earlier modules. | A (outcome tags) |
| 7.5 | **Transfer.** Each module ends with a job aid and one "on the desk" decision that maps to a job task. | V |
| 7.6 | **Diagnostic.** An optional pre-test per module, outside the credit count, lets a strong learner go straight to the quiz. *adv* | V |

### 8. Assessment validity (multiple choice only)

Multiple choice tests recognition and judgment, not memo writing. The course says so in writing. Memo practice is offered ungraded, with a model answer and rubric (see 9.3).

| # | Requirement | Check |
| --- | --- | --- |
| 8.1 | Multiple choice only: four options, one best answer, plausible distractors. | A |
| 8.2 | **Rationales.** Review questions show a rationale for every option. Exam items show none until the attempt closes. After a fail, feedback is by outcome only. | A |
| 8.3 | **Item writing.** Items follow the Haladyna-Downing-Rodriguez guidelines. No "all/none of the above". No negative stems unless bolded. Options of similar length. Numeric distractors come from named errors (30/360 vs Actual/360, wrong denominator). Two reviewers agree on the key. | A (banned patterns), R (item reviewer) |
| 8.4 | **Exhibit sets.** At least 40% of graded items present an exhibit (rent roll, operating statement, appraisal excerpt, term sheet, title commitment, draw request, spreadsheet extract). The learner must find, reconcile or judge something in it. At least one item per module asks "what is missing?" or "what do you do next?". | A (item tags and count), R (assessment) |
| 8.5 | **Blueprint.** Each exam has a blueprint: outcomes × Bloom level × item count. Two forms together cover 100% of outcomes; each form covers at least 75% (QAS). At least 60% of items at level 3-4 from C3 on. | A |
| 8.6 | **Counts.** At least 3 review questions and 5 exam questions per CPE credit (QAS). No review question repeats on an exam. | A |
| 8.7 | **Critical items.** Each critical skill is tested by at least two items per form. A fail means missing both, or missing one with a total under 80%. Each critical item is tied to a loss-causing or legal error from the needs analysis and passes a two-reviewer ambiguity check. | A, R |
| 8.8 | **Pass mark.** The 80% pass mark is set and recorded with a modified-Angoff study by at least three qualified judges before launch. | H (document kept) |
| 8.9 | **Pilot and item analysis.** Pilot with at least three independent testers before launch (QAS). After about 30 attempts, flag items with difficulty outside 0.30-0.90, point-biserial under 0.20, or a distractor chosen by under 5%; revise or retire them. | A (report script), R |
| 8.10 | **Security.** Two parallel forms, shuffled item and option order, and a retake that serves the other form. | A |
| 8.11 | **Grading statement.** One pass-mark statement, worded the same everywhere. (QM 3.2) | A |

---

## Layer 3: job readiness

### 9. Real work

| # | Requirement | Check |
| --- | --- | --- |
| 9.1 | **Real documents.** From C4 on, each module teaches from at least one fictional source document in its real format, with at least one planted defect. Across the course, all of these appear: rent roll; T-12 operating statement; appraisal excerpt and appraisal review; title commitment (Schedules B-I and B-II); survey; draw request with inspection report; credit and background reports; operating agreement and good-standing certificate; property condition and Phase I environmental summaries; insurance certificate; term sheet; closing checklist; servicing report. | A (document registry: every type mapped to a module), R (industry: "would I recognize this as the real document?") |
| 9.2 | **Excel build.** Every quantitative module ships a blank workbook the learner builds, with check cells that tie to fixtures, plus a completed version. Graded items ask for results from the learner's own model. | A (`test:excel` recalculates; check cells TRUE), R (numbers) |
| 9.3 | **Capstone.** After C14, a full loan file on a fourth, unseen deal. The learner writes a credit memo from the house template (recommendation, sizing, risks and mitigants, exceptions, conditions) and self-scores it against a model memo and rubric. A graded multiple-choice exam runs on the same file. | V, R (industry signs off the model memo as committee-grade) |
| 9.4 | **Judgment under ambiguity.** Each module has at least one grey case: the policy is silent, two rules conflict, or documents disagree. The best answer is to escalate, request an exception with mitigants, or condition the approval. Inventing a limit is never correct. | R (assessment, industry) |
| 9.5 | **Downside first.** Every sizing example also shows as-is value, a stalled plan, rates +200 basis points and NOI −10%. It ends with who loses first and the recovery after sale costs. | R (numbers, industry) |
| 9.6 | **Input sources.** Every formula input names its source document. Where sources disagree, the page states the rule (for example lease rent vs appraisal market rent; price vs appraised value). | V, R |
| 9.7 | **Servicing and portfolio documents.** C12 and C13 use a delinquency tape, a watchlist with risk ratings, an investor remittance report and an extension or modification request. | R (industry) |

### 10. Market realism

| # | Requirement | Check |
| --- | --- | --- |
| 10.1 | **Dated market figures.** Every market figure (coupon, spread, points, leverage, cap rate, rent, take-out rate, SOFR, default rates) has a source and an as-of date in the source file. The learner sees "Market, as of <month year>". | A (lint rejects untagged market numbers) |
| 10.2 | **Refresh cycle.** Rates and spreads older than 6 months fail the build; other market figures older than 12 months fail. The build warns 30 days before expiry. | A |
| 10.3 | **Capital markets.** Every product names its funding route and the outside credit box that binds it: a forward-flow buyer's guide, warehouse eligibility (aging, haircuts, ineligible loans) or rating-agency securitization criteria. Each running deal names a realistic take-out and the cheaper alternative a sponsor would weigh. | R (industry) |
| 10.4 | **Running-deal realism.** Rent, value, tax, capex per unit and pricing inputs are checked against at least two dated submarket sources. Each deal passes a "would committee stop here?" review with no open critical finding, using the deal checklist kept with this bar. | R (industry), H |

### 11. Regulation and fraud

| # | Requirement | Check |
| --- | --- | --- |
| 11.1 | **Coverage matrix.** A matrix maps each topic to the module that teaches it and at least two graded items. Topics: business-purpose determination (Reg Z and RESPA exemptions); occupancy and disguised-consumer-loan risk; state licensing of business-purpose lenders; ECOA/Reg B for business credit, including adverse action and spousal signatures; small-business data collection (section 1071) status; BSA/AML scope for non-banks, OFAC screening of owners and guarantors, beneficial ownership, FinCEN real estate reporting status; UDAAP and state UDAP; appraisal independence and USPAP; environmental due diligence (ASTM E1527-21, CERCLA lender protections); insurance (flood determination, builder's risk, loss of rents, mortgagee clause, certificate types). | A (matrix complete), R (legal) |
| 11.2 | **Legal currency.** Every legal statement carries a `[VERIFY: source; checked <date>]` tag in source, checked within the last 12 months against a US primary source. | A (tag dates), R (legal) |
| 11.3 | **Fraud typologies.** The course teaches and tests each typology with its red flag and the document that reveals it: straw borrower; occupancy fraud; inflated or broker-supplied after-repair value; rapid flip chains (title chain, seasoning); fake leases or rent rolls; altered bank statements; related-party appraiser or contractor; draw fraud; closing wire fraud; double-pledged collateral. | A (matrix), R (industry) |

---

## 12. Course level

| # | Requirement | Check |
| --- | --- | --- |
| 12.1 | Home has one "Start here" path, the 5 categories, measurable course outcomes and a map of the reference shelf. (QM 1.1, 1.2, 2.1) | V |
| 12.2 | Help page, accessibility statement, privacy note (where progress is stored) and an error-report route. (QM 1.3, 6.4, 7.1-7.3) | V |
| 12.3 | Technology and skills needed are stated: browser, spreadsheet, Excel skills. (QM 1.5, 1.6) | V |
| 12.4 | Evidence for awards and accreditation is collected from launch: pre- and post-module scores, completion, and a short learner survey. | A |
| 12.5 | **Human review.** Each module has a named human subject-matter expert review on record before release (QAS requires a qualified independent reviewer). Until then the course is labelled "not yet industry-validated". | H |

## 13. Reviewer scoring

Agent reviewers screen; they do not sign off. Each scores its rows 0-3 with this anchor, and a module needs every row at 2 or more and no open critical finding:

| Score | Meaning |
| --- | --- |
| 3 | Meets the row fully; a practitioner or professor would use it as is |
| 2 | Meets the row; minor fixes logged |
| 1 | Partly meets it; must be reworked |
| 0 | Missing or wrong |

## Review gate

For each unit of work (a reference page, a module):

1. Build it.
2. Run every A check. Fix until each reports 0.
3. Screenshot every page at 1440 px and read each one against sections 1-5. Phone width is covered by the automated checks plus a 20% sample read by eye.
4. Agent reviewers score sections 6-11 using section 13.
5. Fix and repeat steps 2-4 until everything passes.
6. Show the owner the screenshots, the A-check results and the scores.
7. Before release: human sign-off on the H rows.

## Definition of done by milestone

| Milestone | Done when |
| --- | --- |
| M1 Standard | This file is signed off; `check:copy` exists; CLAUDE.md points here. |
| M2 Builder and reference shelf | Sections 1, 4 and 5 pass on every shelf page; `check:copy` and the overflow checks report 0 on every page and run in CI; categories are live. |
| M3 Course frame | Theory map (6.1), prerequisite graph (7.2), document registry (9.1), regulatory and fraud matrices (11.1, 11.3), exam blueprint template (8.5) and outcome tags exist. These are built once, before modules are rewritten, so each module is written against them. |
| M4 C0-C5 | Each module passes the gate on the corrected foundations. |
| M5 C6-C14 | Each module is rewritten and passes the gate, one at a time. |
| M6 Capstone and exams | Capstone, exam forms, pilot and Angoff study complete. |
| Release | All H rows signed. |
