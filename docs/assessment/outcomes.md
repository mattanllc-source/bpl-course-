# Course outcomes: BPL core course (C0-C14)

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | BPL-CORE, C0-C14 (integrated QAS Self Study series) |
| Prepared | 22 Nov 2026 |
| Status | Draft v1 for owner review. Milestone 3 (course frame). Professor and CCO review fixes applied 22 Nov 2026 ([course-frame-summary.md](../curriculum/course-frame-summary.md)). Modules are rewritten against it in milestones 4 and 5 |
| Machine-readable twin | [outcomes.json](outcomes.json). Same data; the tables below are generated from it |
| Acceptance rows | Quality bar 7.1, 7.3, 7.4 and 8.1-8.11 ([quality-bar.md](../standards/quality-bar.md)); QAS Std 3.01 ([qas-spec.md](../accreditation/qas-spec.md)) |
| Inputs | [needs-analysis.md](../curriculum/needs-analysis.md); c00-c14 blueprints; [coverage-review.md](../curriculum/coverage-review.md); [university-syllabi-notes.md](../curriculum/university-syllabi-notes.md); [cfi-cref-comparison.md](../design/cfi-cref-comparison.md) section H; Course Bible program goals, LD-01, LD-02 and section 3 (`docs/course-bible.md`, snapshot 22 Nov 2026, current) |
| Companion | [exam-blueprint-template.md](exam-blueprint-template.md) |

**What this is.** One list of measurable outcomes for every core module. Each outcome carries the tags the quality bar needs: Bloom level and verb, course outcome, job task and a critical flag. Item writers, lesson writers and the A-checks all read from this list.

**What changed.** The blueprint objectives were the starting point. 106 outcomes result: 99 rewritten and 7 new. The new ones cover the theory map, construction (owner decision H1), zoning and highest and best use, the site visit and land as an option (C05-O8). Every change is listed under its module. The 22 Nov 2026 reviews also reworded C00-O5, C01-O4, C02-O2, C02-O4, C03-O5, C08-O4, C08-O5, C12-O1 and C14-O2.

## 1. How each outcome is written and tagged

**Statement.** One approved verb, then the object and the standard. Under 25 words. No rule, formula, deal or state-row codes, since outcomes appear on learner pages (quality bar 1.1). Codes stay in the JSON audit fields and the blueprints.

**Verbs.** Only the Course Bible LD-01 verbs, plus "apply" and "evaluate", the level names themselves.

| Level | Name | Verbs used |
| --- | --- | --- |
| 1 | Remember | identify, list, define, name |
| 2 | Understand | explain, classify, summarize, distinguish |
| 3 | Apply | calculate, size, complete, prepare, apply |
| 4 | Analyze | analyze, compare, reconcile, diagnose |
| 5 | Evaluate | recommend, justify, critique, decide, evaluate |
| 6 | Create | Not used. LD-02 keeps level 6 for capstones |

**Every outcome must be testable by multiple choice** (quality bar 8.1). So "draft a memo" and "structure a workout" become "critique a memo" and "recommend workout terms". Memo writing stays as ungraded practice (quality bar 8 and 9.3).

**Course outcome.** The course page shows three course outcomes. `build.py` (`course_outcomes()`) extracts them from the Course Bible. It drops program goals 1 and 4 because they are author rules, not learner outcomes.

| ID | Course outcome (as on the course page) |
| --- | --- |
| CO1 | Size a loan, defend it at credit committee and manage it to repayment. |
| CO2 | Work our core formulas by hand and in the house calculator. |
| CO3 | Tell a business-purpose loan from a consumer one and escalate doubt. |

These three are too coarse for clean alignment. CO1 carries 76 of the 105 outcomes, and 72 of them map to nothing else. Legal, closing, fraud and servicing outcomes have no course outcome of their own. QM 2.2 asks module outcomes to map to measurable course outcomes, so we propose seven. Each outcome is tagged to both sets. The proposed set needs an owner decision and a Course Bible edit; nothing here changes the course page.

| ID | Proposed course outcome |
| --- | --- |
| PCO1 | Classify a loan request as business-purpose or consumer, and name the federal and state rules that govern it. |
| PCO2 | Build underwritten income, value and sponsor strength from source documents, and reconcile them where they disagree. |
| PCO3 | Size, price and structure a loan within policy, showing the binding test and the downside case. |
| PCO4 | Detect fraud, sanctions and compliance red flags, and route each one to the person who may clear it. |
| PCO5 | Close a loan with a perfected lien, a correct funds flow and a complete collateral file. |
| PCO6 | Service a loan to repayment, and resolve a default at the lowest net loss. |
| PCO7 | Recommend a loan at credit committee within authority, policy and portfolio limits. |

**Job task.** Task IDs come from the needs analysis (O1-O6, U1-U11, F1-F6, S1-S11, K1-K7). "Preview" means the outcome touches the task but another module teaches it.

**Critical.** An outcome is critical when getting it wrong causes one of two things:

1. A Course Bible section 3 critical credit error. These are a wrong sizing result that changes the loan amount or approver, and a missed business-purpose or occupancy red flag. They also include a policy breach without an approved exception, an approval outside authority, and a missed KYC or OFAC hit.
2. A loss-causing or legal error from the needs-analysis risk column that cannot be undone after funding. Examples are a diverted wire, a junior lien, a usurious rate or an unlicensed loan.

Critical is kept for those errors. Other important outcomes are still tested, with at least two items per form. A critical outcome holds one critical skill, except C08-O2, which holds two. Each critical skill needs two items per form (quality bar 8.7).

**High-risk job task** (quality bar 7.1: "every high-risk job task is taught and tested"). A task is high-risk when the needs analysis rates its gap H. A task is also high-risk when a Course Bible section 3 category names it (U5, O4, O2, K2, U9, K1, U4). That gives 28 high-risk tasks. Each has at least one outcome that teaches it, and every outcome is examined. Section 4 shows the trace.

**Theory, regulatory, fraud and document keys.** There is one set of keys for the whole frame. TM-01 to TM-38 come from the theory map, REG-01 to REG-24 from the regulatory matrix, FRD-01 to FRD-12 from the fraud matrix and DOC-01 to DOC-62 from the document registry. Each outcome in `outcomes.json` lists the keys it serves. Each concept, row and document lists its outcomes. Both directions come from one script file, so they cannot disagree.

**Module IDs.** Module codes are C0 to C14. The two-digit form (C08) appears only inside outcome, skill and exhibit IDs, such as C08-O5.

**Bloom level by the thinking, not the verb** (professor review 6). A script checks that each verb is on the approved list for its level. That is not enough: "analyze which laws reach a loan" is really classification. So two reviewers tag each outcome's level, and each item's, by the cognitive task it needs. They record agreement in `bloom_review.reviewers_agree` (outcomes) and `bloom_reviewers_agree` (items). Disagreement goes to the owner. This review lowered C01-O4 and C02-O2 to level 2 and C00-O5 to level 2.

**Blocked outcomes.** C12-O8 and C14-O2 cannot be tested until the owner supplies a remittance rule and a buyer eligibility sheet. Each carries `status: blocked` in the JSON and stays out of exam forms until then.

## 2. Bloom check per module (quality bar 7.1)

Rule for C0-C2: mainly levels 1-3, read as more than half at 1-3 and none at 5-6. Rule from C3: at least half at level 3 or higher, and at least one at level 4-5. Count rule for all: 3-8 outcomes (QAS Std 3.01; Course Bible LD-01).

| Module | Outcomes | L1 | L2 | L3 | L4 | L5 | L6 | At 3+ | At 4-5 | Rule | Result | Critical outcomes (skills) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: |
| C0 | 6 | 0 | 3 | 3 | 0 | 0 | 0 | 3 | 0 | C0-C2 | Pass | 1 (1) |
| C1 | 7 | 0 | 2 | 4 | 1 | 0 | 0 | 5 | 1 | C0-C2 | Pass | 4 (4) |
| C2 | 8 | 0 | 3 | 5 | 0 | 0 | 0 | 5 | 0 | C0-C2 | Pass | 2 (2) |
| C3 | 6 | 0 | 0 | 5 | 1 | 0 | 0 | 6 | 1 | C3+ | Pass | 2 (2) |
| C4 | 6 | 0 | 1 | 3 | 1 | 1 | 0 | 5 | 2 | C3+ | Pass | 2 (2) |
| C5 | 8 | 0 | 2 | 2 | 3 | 1 | 0 | 6 | 4 | C3+ | Pass | 2 (2) |
| C6 | 7 | 0 | 0 | 3 | 3 | 1 | 0 | 7 | 4 | C3+ | Pass | 3 (3) |
| C7 | 6 | 0 | 1 | 3 | 1 | 1 | 0 | 5 | 2 | C3+ | Pass | 3 (3) |
| C8 | 8 | 0 | 0 | 2 | 5 | 1 | 0 | 8 | 6 | C3+ | Pass | 4 (5) |
| C9 | 8 | 0 | 1 | 3 | 2 | 2 | 0 | 7 | 4 | C3+ | Pass | 3 (3) |
| C10 | 7 | 0 | 1 | 2 | 2 | 2 | 0 | 6 | 4 | C3+ | Pass | 2 (2) |
| C11 | 6 | 0 | 1 | 3 | 1 | 1 | 0 | 5 | 2 | C3+ | Pass | 3 (3) |
| C12 | 8 | 0 | 1 | 3 | 1 | 3 | 0 | 7 | 4 | C3+ | Pass | 2 (3) |
| C13 | 7 | 0 | 0 | 2 | 2 | 3 | 0 | 7 | 5 | C3+ | Pass | 3 (3) |
| C14 | 8 | 0 | 1 | 0 | 3 | 4 | 0 | 7 | 7 | C3+ | Pass | 2 (2) |
| **Total** | **106** | **0** | **17** | **43** | **26** | **20** | **0** | | | | | |

**Result.** All 15 modules pass the 7.1 ratio and the 3-8 count. 38 of 106 outcomes (36%) are critical. No outcome sits at level 1 or 6. C0 and C2 now have no level-4 outcome; the C0-C2 rule does not need one. C5 and C8 still have 8 outcomes, the maximum. A further C8 or C12 outcome would break the rule, so the CCO's new construction outcomes were folded into C08-O4 and C12-O1.

## 3. Outcomes by module

Columns: ID; the outcome as the learner reads it; Bloom level and verb; course outcome, current then proposed. Then job tasks, and the critical flag with the error it guards against.

### C0 Program orientation and the BPL market

Foundations. Basic. 6 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C00-O1 | Distinguish a business-purpose loan from bank, agency and consumer mortgage loans by borrower, collateral, term, repayment source and governing law. | 2 Understand (distinguish) | CO3; PCO1 | O2; preview O4 | Yes: Treating a consumer loan as business-purpose (Course Bible section 3: missed business-purpose red flag) |
| C00-O2 | Explain where banks, debt funds, mortgage REITs and specialist lenders sit in the lending market, and which regulator or law reaches each. | 2 Understand (explain) | CO1; PCO7 | -preview O1, K7 | No |
| C00-O3 | Complete a funding-route map for a running-deal loan, naming whose eligibility rules and risk-retention duty apply at each step. | 3 Apply (complete) | CO1; PCO7 | -preview U11, F6, S11, K7 | No |
| C00-O4 | Calculate shares, growth rates and percentage-point changes from a named public data series, each matched to its published headline. | 3 Apply (calculate) | CO2; PCO2 | -preview O6, U2 | No |
| C00-O5 | Explain how the cycle phase shows in four indicators, using a documented past downturn, and why refinance risk follows. | 2 Understand (explain) | CO1; PCO3 | -preview U10, S4, S5, O6 | No |
| C00-O6 | Apply the reference shelf to a credit question: find the governing policy section, formula, state-law row and primary source. | 3 Apply (apply) | CO1, CO2; PCO7 | -preview K1, K2, U8 | No |

**Bloom check.** Levels 1-6: 0, 3, 3, 0, 0, 0. 3 of 6 at level 3 or higher; 0 at level 4-5. Rule: C0-C2: mainly levels 1-3 (more than half at 1-3; none at 5-6). **Pass.**

**Changes from the blueprint.** C00-O1: Kept; O4 moved to preview. C00-O2: Origination channels added to content (coverage review); capital stack previewed, home C8. C00-O3: Verb 'trace' replaced by approved verb 'complete'. C00-O4: Kept. C00-O5: P-06 applied (professor review 10): level 2 here; C8 and C13 analyze the cycle at level 4. Documented episode named (quality bar 6.7). C00-O6: Codes removed; learner cites by plain section name (quality bar 1.1).

### C1 Business purpose vs consumer: the purpose test and regulatory map

Foundations. Basic. 7 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C01-O1 | Explain how the business-purpose and non-natural-person exemptions take a loan outside TILA, RESPA and the SAFE Act, and why the test runs at origination. | 2 Understand (explain) | CO3; PCO1 | O2 | No |
| C01-O2 | Apply the federal purpose test and its official examples to classify a loan as business, consumer or unclear. | 3 Apply (apply) | CO3; PCO1 | O2 | Yes: Misclassifying a consumer loan as business-purpose (Course Bible section 3) |
| C01-O3 | Apply the property state's purpose or occupancy test from the State Law Table to confirm or change the federal result before a term sheet. | 3 Apply (apply) | CO3; PCO1 | O2, O4; preview U8 | No |
| C01-O4 | Classify which federal laws reach a business-purpose loan, including TILA, RESPA, ECOA, the Fair Housing Act, HMDA, section 1071, UDAAP, BSA/AML and OFAC. | 2 Understand (classify) | CO3; PCO1 | O2, K6; preview U4 | No |
| C01-O5 | Apply fair-lending rules to a business-purpose file: adverse-action timing, the spousal-signature limit, prohibited bases and Fair Housing Act reach. | 3 Apply (apply) | CO1; PCO4 | K6, O1 | Yes: A fair-lending breach on a business file: a late adverse-action notice or a spouse required to sign (legal error) |
| C01-O6 | Diagnose occupancy and purpose red flags in a loan file, with the person who may clear each one: the credit officer or BSA officer. | 4 Analyze (diagnose) | CO3; PCO4 | O2, O3; preview U4 | Yes: A missed business-purpose or occupancy red flag (Course Bible section 3) |
| C01-O7 | Calculate the personal-use share of cash-out proceeds and apply the more-than-half test to the loan's purpose. | 3 Apply (calculate) | CO2, CO3; PCO1 | O2; preview F2 | Yes: A wrong personal-use share that flips the purpose result (Course Bible section 3) |

**Bloom check.** Levels 1-6: 0, 2, 4, 1, 0, 0. 5 of 7 at level 3 or higher; 1 at level 4-5. Rule: C0-C2: mainly levels 1-3 (more than half at 1-3; none at 5-6). **Pass.**

**Changes from the blueprint.** C01-O1: Shortened. C01-O2: Commentary paragraph numbers moved to audit notes. C01-O3: State-row codes removed; not critical here because C10 O2 carries the critical licensing skill. C01-O4: Level 4 'analyze' lowered to level 2 'classify': the cognitive task is classification (professor review 6). C01-O5: Verb 'determine' replaced by 'apply'. C01-O6: Verb 'analyze ... and decide' cut to one verb. C01-O7: Kept.

### C2 Credit fundamentals and the loan life cycle

Foundations. Basic. 8 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C02-O1 | Apply the five Cs to a running deal, assigning each fact to one C and separating primary from secondary repayment sources. | 3 Apply (apply) | CO1; PCO2 | U3, O6; preview U9 | No |
| C02-O2 | Distinguish the model credit box from the interagency real estate lending standards, including the supervisory loan-to-value and exception limits. | 2 Understand (distinguish) | CO1; PCO3 | K2 | No |
| C02-O3 | Calculate each credit-box test for a loan at full precision, showing which test binds. | 3 Apply (calculate) | CO1, CO2; PCO3 | K1, O4; preview U5 | Yes: A breach of a policy limit missed, or a binding test misread, so the loan amount changes (Course Bible section 3) |
| C02-O4 | Apply the authority matrix to name the approver from loan size, sponsor exposure, exceptions and triggers, and explain why correlated defaults justify sponsor caps. | 3 Apply (apply) | CO1; PCO7 | K1, K2, K3 | Yes: An approval outside delegated authority (Course Bible section 3) |
| C02-O5 | Prepare a dated life-cycle timeline for a running deal, naming the role, output document and governing rule at each stage. | 3 Apply (prepare) | CO1; PCO7 | O4, O5, F1, F5, S8 | No |
| C02-O6 | Apply the risk-rating scale and its regulatory definitions to assign a rating to a loan's facts. | 3 Apply (apply) | CO1; PCO6 | S4 | No |
| C02-O7 | Explain why lenders rely on collateral, equity and guaranties rather than price alone, using adverse selection, moral hazard and credit rationing. | 2 Understand (explain) | CO1; PCO3 | K2; preview U9 | No |
| C02-O8 | Explain default as the borrower's option to walk away, and how default chance, loss severity and exposure set expected loss and the spread. | 2 Understand (explain) | CO1; PCO3 | -preview K4, U9 | No |

**Bloom check.** Levels 1-6: 0, 3, 5, 0, 0, 0. 5 of 8 at level 3 or higher; 0 at level 4-5. Rule: C0-C2: mainly levels 1-3 (more than half at 1-3; none at 5-6). **Pass.**

**Changes from the blueprint.** C02-O1: Kept. C02-O2: Level 4 'compare' lowered to level 2 'distinguish': the task is reading two tables (professor review 6). C02-O3: Verb 'test' replaced by 'calculate'. C02-O4: Correlated-default reason for sponsor caps added (professor review 2; TM-06 home). Rule and formula codes moved to audit notes. C02-O5: Kept. C02-O6: Verb 'assign' replaced by 'apply'. C02-O7: Moral hazard added (theory map). C02-O8: New (theory map). Concept only, illustrative numbers (owner decision H3). C14 O7 owns the allowance.

### C3 Real estate finance math: interest, amortization, debt service

Real estate analysis. Intermediate. 6 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C03-O1 | Calculate interest for any billing period on an interest-only loan, Actual/360, with mid-period draws and paydowns, to the cent. | 3 Apply (calculate) | CO2; PCO3 | S1, F2, S8 | No |
| C03-O2 | Calculate the equivalent rate when a quote moves between nominal, effective annual and Actual/360 bases, using present and future value. | 3 Apply (calculate) | CO2; PCO3 | U5, S1, U8 | No |
| C03-O3 | Calculate the amortizing payment, schedule rows and balloon, including term notes that pay on 30/360 but accrue on Actual/360. | 3 Apply (calculate) | CO2; PCO3 | U5, U10, S8 | No |
| C03-O4 | Calculate annual debt service and the loan constant on the policy test basis for interest-only, amortizing and partial interest-only loans. | 3 Apply (calculate) | CO2; PCO3 | U5 | Yes: Wrong debt service, so the coverage test sizes the wrong loan amount (Course Bible section 3) |
| C03-O5 | Calculate a floating note rate and its coverage test rate from the index, the spread and a stated cap strike. | 3 Apply (calculate) | CO2; PCO3 | U5, S6 | Yes: Testing coverage at today's index instead of the higher of note rate and strike plus spread, so the loan is oversized |
| C03-O6 | Analyze how points, term and early payoff move the lender's yield and the borrower's all-in cost away from the note rate. | 4 Analyze (analyze) | CO2; PCO3 | O4, U8, K7 | No |

**Bloom check.** Levels 1-6: 0, 0, 5, 1, 0, 0. 6 of 6 at level 3 or higher; 1 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C03-O1: Kept. C03-O2: Verb 'convert' replaced by 'calculate'. C03-O3: Mixed-basis balloon added (decision of 22 Nov 2026 on payment basis). C03-O4: Kept. C03-O5: Strike given as a stated figure; C8 teaches the strike (professor review 10; P-16). C03-O6: Contract rate versus yield framed (TM-10 home).

### C4 Property cash flow: from gross potential rent to NOI

Real estate analysis. Intermediate. 6 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C04-O1 | Calculate gross potential rent, vacancy and credit loss, loss-to-lease and effective gross income from a rent roll, with the vacancy floor. | 3 Apply (calculate) | CO2; PCO2 | U1 | No |
| C04-O2 | Classify each operating-statement line and each lease's expense terms (gross, modified gross, net) by its place in the NOI build. | 2 Understand (classify) | CO1; PCO2 | U1, U7 | No |
| C04-O3 | Reconcile a seller's T-12 and rent roll to underwritten NOI, testing them against deposits and submarket evidence, and naming each adjustment. | 4 Analyze (reconcile) | CO1; PCO2 | U1, U2, O6, U10 | No |
| C04-O4 | Calculate underwritten NOI and net cash flow with the family expense and reserve rules. | 3 Apply (calculate) | CO2; PCO2 | U1, U5 | Yes: Overstated NOI or cash flow that oversizes the loan (Course Bible section 3) |
| C04-O5 | Calculate coverage on the family income base and break-even occupancy, each against its policy minimum at full precision. | 3 Apply (calculate) | CO2; PCO3 | U5, U9 | Yes: A coverage ratio rounded up past its minimum, so a failing loan passes (Course Bible section 3) |
| C04-O6 | Recommend proceed, resize or decline after testing whether in-place cash flow survives vacancy, rent and expense shocks. | 5 Evaluate (recommend) | CO1; PCO3 | U10, U9 | No |

**Bloom check.** Levels 1-6: 0, 1, 3, 1, 1, 0. 5 of 6 at level 3 or higher; 2 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C04-O1: Kept. C04-O2: Kept. C04-O3: Rent roll tied to deposits (fake-lease typology, quality bar 11.3). C04-O4: Kept. C04-O5: Kept. C04-O6: Verb 'evaluate ... and recommend' cut to one verb.

### C5 Valuation: appraisals, cap rates, as-is, ARV and as-stabilized

Real estate analysis. Intermediate. 8 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C05-O1 | Distinguish market value, as-is, prospective and hypothetical values, and the loan test each one feeds. | 2 Understand (distinguish) | CO1; PCO2 | U2 | No |
| C05-O2 | Calculate value by direct capitalization and by discounted cash flow, with a cap-rate sensitivity of 25 basis points each way. | 3 Apply (calculate) | CO2; PCO2 | U2, U10 | No |
| C05-O3 | Reconcile value indications from the sales comparison, cost and income approaches into one supported value. | 4 Analyze (reconcile) | CO1; PCO2 | U2, U6 | No |
| C05-O4 | Apply the lender's value rules: lower of cost or value, appraisal order and age, review, and the federal appraisal framework. | 3 Apply (apply) | CO1; PCO2 | U2, U5, K5, U11 | Yes: The wrong value basis, so the loan amount changes; or an appraisal ordered in breach of independence rules |
| C05-O5 | Analyze leverage by comparing the going-in cap rate with the loan constant and the cash-on-cash return. | 4 Analyze (analyze) | CO2; PCO3 | U5, U10, O6 | No |
| C05-O6 | Analyze an appraisal's zoning, land-use and highest and best use findings, including legal nonconforming use and rebuild risk after a casualty. | 4 Analyze (analyze) | CO1; PCO2 | U2, U7 | No |
| C05-O7 | Decide whether to accept, revise or reject an appraisal in a desk review, citing each deficiency, including an inflated or broker-supplied ARV. | 5 Evaluate (decide) | CO1; PCO2 | U2, K5, K6 | Yes: Accepting an inflated or pressured value: the classic fraud loss (needs analysis U2) |
| C05-O8 | Explain why land value behaves like an option, and why land loans carry the lowest leverage. | 2 Understand (explain) | CO1; PCO3 | U6, U5 | No |

**Bloom check.** Levels 1-6: 0, 2, 2, 3, 1, 0. 6 of 8 at level 3 or higher; 4 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C05-O1: Kept. C05-O2: Kept. C05-O3: Two verbs cut to 'reconcile'; level 3 to 4. C05-O4: Rule codes moved to audit notes. C05-O5: Kept. C05-O6: New (CFI gap rank 6). No policy limit exists, so no critical item. C05-O7: Verb 'evaluate ... and recommend' cut to 'decide'; ARV fraud named. C05-O8: New (professor review 2): serves TM-16 at its home.

### C6 Borrower, sponsor and guarantor analysis

Underwriting. Intermediate. 7 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C06-O1 | Apply the guarantor rules to a multi-layer ownership chart, trusts and spouses included, to name every required guarantor and guaranty type. | 3 Apply (apply) | CO1; PCO2 | U3, O3 | Yes: A required guarantor missed, or a non-owner spouse required to sign (loss and legal error) |
| C06-O2 | Diagnose each credit-report and background finding as disqualifying, approver-referred, a closing condition or history only. | 4 Analyze (diagnose) | CO1; PCO2 | U3, O3 | No |
| C06-O3 | Calculate adjusted liquidity, required post-closing liquidity, the coverage multiple and months of reserves from dated statements. | 3 Apply (calculate) | CO2; PCO2 | U3 | Yes: A liquidity shortfall missed, so a policy limit is breached without an exception (Course Bible section 3) |
| C06-O4 | Reconcile a personal financial statement to bank statements, tax returns and the real estate schedule, finding adjusted net worth and altered items. | 4 Analyze (reconcile) | CO1; PCO2 | U3, O3 | No |
| C06-O5 | Decide whether a guaranty adds real credit support, given contingent liabilities, global cash flow and enforceability, with one structural mitigant. | 5 Evaluate (decide) | CO1; PCO2 | U3, U9, S9 | No |
| C06-O6 | Apply the experience count, verified against public deed records, and the sponsor-exposure caps to set the borrower's tier and approver. | 3 Apply (apply) | CO1; PCO2 | K1, K3, U3 | Yes: A wrong tier or approver, so the loan amount or approval route changes (Course Bible section 3) |
| C06-O7 | Analyze a joint-venture operating agreement to find who controls the borrower, who is paid first and how the promote shapes sponsor incentives. | 4 Analyze (analyze) | CO1; PCO2 | U3, O3 | No |

**Bloom check.** Levels 1-6: 0, 0, 3, 3, 1, 0. 7 of 7 at level 3 or higher; 4 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C06-O1: Verb 'determine' replaced by 'apply'. C06-O2: Verb 'differentiate' replaced by 'diagnose'. C06-O3: Kept. C06-O4: Altered-statement typology named (quality bar 11.3). C06-O5: Verb 'evaluate ... and recommend' cut to 'decide'. C06-O6: Deed-record check added (straw sponsor, C6 depth item 2). C06-O7: New (theory map TM-05; CFI gap ranks 10-11). Read only; no waterfall build.

### C7 KYC, BSA/AML, OFAC and fraud red flags

Underwriting. Intermediate. 6 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C07-O1 | Classify a loan's federal AML, sanctions and beneficial-ownership duties by lender type and collateral, including real estate reporting status. | 2 Understand (classify) | CO1; PCO4 | U4, K2 | No |
| C07-O2 | Apply sanctions screening and the 50 Percent Rule to an ownership chart traced to natural persons, trusts included, with its reporting deadlines. | 3 Apply (apply) | CO1; PCO4 | U4, O3 | Yes: A missed OFAC hit (Course Bible section 3) |
| C07-O3 | Diagnose fraud red flags in a file, such as straw buyers, flip chains, broker-fed files and altered papers, with each one's clearing path. | 4 Analyze (diagnose) | CO1; PCO4 | U4, O1, O3, U2 | Yes: A missed KYC or fraud red flag (Course Bible section 3) |
| C07-O4 | Complete the first-hour response to an attempted or completed wire diversion: stop, recall request, law-enforcement report and SAR decision. | 3 Apply (complete) | CO1; PCO4 | F3, U4 | Yes: A slow or wrong response to a wire diversion: the whole advance can be lost |
| C07-O5 | Calculate SAR deadlines and apply the filing, confidentiality and record rules to a red-flag case. | 3 Apply (calculate) | CO1; PCO4 | U4 | No |
| C07-O6 | Critique a small lender's AML and sanctions program against the BSA program pillars and the OFAC compliance framework. | 5 Evaluate (critique) | CO1; PCO4 | K2, U4 | No |

**Bloom check.** Levels 1-6: 0, 1, 3, 1, 1, 0. 5 of 6 at level 3 or higher; 2 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C07-O1: Regulation section numbers moved to audit notes. C07-O2: Kept. C07-O3: Typologies named (quality bar 11.3); broker-fed files added (coverage review). C07-O4: Verb 'execute' replaced by 'complete'. C07-O5: Kept; not critical because the BSA officer files, but tested. C07-O6: Verb 'evaluate ... and recommend' cut to 'critique'.

### C8 Loan structuring and sizing: leverage tests, reserves, pricing

Underwriting. Intermediate. 8 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C08-O1 | Calculate the loan each leverage test allows: loan-to-value, loan-to-cost, loan-to-after-repair value and the purchase advance. | 3 Apply (calculate) | CO1, CO2; PCO3 | U5, O4 | Yes: A leverage result that changes the loan amount (Course Bible section 3) |
| C08-O2 | Analyze which test binds across leverage, coverage and debt yield, and the change in value, income or rate that would move it. | 4 Analyze (analyze) | CO1; PCO3 | U5, U9 | Yes: The wrong binding test, or a loan amount rounded up instead of down (Course Bible section 3) |
| C08-O3 | Size a bridge loan's day-one advance, future funding, rate-cap strike and interest reserve. | 3 Apply (size) | CO2; PCO3 | U5, U6 | Yes: An interest reserve omitted when in-place coverage is below 1.00x (Course Bible section 3) |
| C08-O4 | Analyze a construction budget, contract and schedule: total cost, contingency, interest during construction, equity first, contractor, contract type and permits. | 4 Analyze (analyze) | CO1; PCO3 | U6, U5 | Yes: Loan-to-cost on a partial cost base, or loan funds before equity (loss severity is worst on unfinished projects) |
| C08-O5 | Analyze a note rate as cost of funds, expected loss, capital, cost and margin, and calculate the all-in cost screen. | 4 Analyze (analyze) | CO2; PCO3 | U5, O4, U8 | No |
| C08-O6 | Analyze a bridge loan's exit by solving for the break-even income and take-out rate, including a stated what-if. | 4 Analyze (analyze) | CO1; PCO3 | U10, S5 | No |
| C08-O7 | Analyze a capital stack with mezzanine debt or preferred equity to find combined leverage, who loses first and the senior lender's net recovery. | 4 Analyze (analyze) | CO1; PCO3 | U5, U9 | No |
| C08-O8 | Recommend a complete structure for a request, covering amount, reserves, recourse, prepayment, extensions and cap, with the policy reason for each term. | 5 Evaluate (recommend) | CO1; PCO3 | O4, U9, K2 | No |

**Bloom check.** Levels 1-6: 0, 0, 2, 5, 1, 0. 8 of 8 at level 3 or higher; 6 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C08-O1: Formula and rule codes moved to audit notes. C08-O2: Verb 'determine' replaced by 'analyze'. C08-O3: Kept. C08-O4: New (owner decision H1). Contractor, contract type and permits added (CCO review 8; TM-26, TM-28). Contingency adequacy is taught but not scored (no policy rule). C08-O5: Rebuilt as an analysis of the rate build-up (professor review 2; TM-19 revisit, TM-20 home). Illustrative numbers only (owner decision H3). C08-O6: Kept; C8 owns the break-even method. C08-O7: New (TM-22 revisit, home C6; quality bar 9.5 downside first). C08-O8: Codes replaced by plain policy section names.

### C9 Loan documents, title, insurance and collateral

Legal and closing. Intermediate. 8 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C09-O1 | Distinguish the jobs of the note, mortgage, loan agreement, guaranties, assignment of rents, UCC filings and an intercreditor agreement. | 2 Understand (distinguish) | CO1; PCO5 | O3, F4, U7 | No |
| C09-O2 | Decide whether a loan's recourse and guaranty package protects the lender, including when a carve-out springs to full recourse. | 5 Evaluate (decide) | CO1; PCO5 | U7, U9, K2 | No |
| C09-O3 | Analyze a title commitment and survey for exception type, policy amount, endorsements, lien priority and prior-pledge risk. | 4 Analyze (analyze) | CO1; PCO5 | U7, F4 | Yes: An unperfected or junior lien, or collateral already pledged to another lender |
| C09-O4 | Calculate insurance-to-value, coinsurance recovery and loss-of-rents cover, with flood, builder's risk and mortgagee-clause evidence checked against policy. | 3 Apply (calculate) | CO2; PCO5 | U7, F4; preview S7 | Yes: An uninsured or under-insured loss, or a flood-zone loan without required cover |
| C09-O5 | Calculate tax and insurance escrows, the closing cushion and multifamily reserves. | 3 Apply (calculate) | CO2; PCO5 | F2, U5 | No |
| C09-O6 | Decide whether environmental diligence is complete: Phase I currency, when a finding needs a Phase II, and conduct that keeps the lender's CERCLA protection. | 5 Evaluate (decide) | CO1; PCO5 | U7; preview S10 | Yes: Environmental liability or an unsaleable asset: a stale Phase I, or a finding not followed up |
| C09-O7 | Apply the tenant-document rules to a rent roll to set the estoppel, SNDA and lockbox requirements. | 3 Apply (apply) | CO1; PCO5 | U7; preview S3 | No |
| C09-O8 | Diagnose defects in a site visit report and photos: occupancy signs, deferred maintenance, environmental clues and mismatches with the rent roll. | 4 Analyze (diagnose) | CO1, CO3; PCO5 | U7, U2, O2 | No |

**Bloom check.** Levels 1-6: 0, 1, 3, 2, 2, 0. 7 of 8 at level 3 or higher; 4 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C09-O1: Intercreditor agreement added (TM-31 home). C09-O2: Verb 'evaluate' replaced by 'decide'. C09-O3: Double-pledge and title-chain typologies named (quality bar 11.3). C09-O4: Builder's risk and mortgagee clause named (quality bar 11.1). C09-O5: Kept. C09-O6: Verb 'evaluate' replaced by 'decide'. C09-O7: Two verbs cut to 'apply'; the SNDA priority point stays in content. C09-O8: New (CFI gap rank 3). Site visit report joins the document registry.

### C10 State law: licensing, usury, foreclosure and recourse

Legal and closing. Intermediate. 7 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C10-O1 | Explain why the property state sets remedies, and how lien, title and intermediate theories and redemption rights differ. | 2 Understand (explain) | CO1; PCO6 | U8 | No |
| C10-O2 | Apply the federal consumer-purpose floor and the State Law Table to decide whether a loan needs a state lender or broker licence. | 3 Apply (apply) | CO3; PCO1 | O2, O4, U8 | Yes: Lending or brokering without a required state licence (legal error) |
| C10-O3 | Analyze a rate, points and fees package for usury: exemption first, then the all-in cost screen, floating caps and federal preemption. | 4 Analyze (analyze) | CO1; PCO6 | O4, U8 | Yes: A usurious rate or fee package (legal error with penalties) |
| C10-O4 | Decide whether default interest, late fee and prepayment terms are enforceable under state limits and the common-law penalty doctrine. | 5 Evaluate (decide) | CO1; PCO6 | U8, S1 | No |
| C10-O5 | Compare judicial and power-of-sale foreclosure by timeline, carry cost and loss on a running deal. | 4 Analyze (compare) | CO1; PCO6 | U8, S10 | No |
| C10-O6 | Apply the federal tenant and servicemember overlays to a deal to find how each changes the recovery path. | 3 Apply (apply) | CO1; PCO6 | S10, U8 | No |
| C10-O7 | Justify a value for recourse at origination after anti-deficiency, fair-value, one-action and guarantor-waiver rules. | 5 Evaluate (justify) | CO1; PCO6 | U8, U3, S10 | No |

**Bloom check.** Levels 1-6: 0, 1, 2, 2, 2, 0. 6 of 7 at level 3 or higher; 4 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C10-O1: Two verbs cut to 'explain'. C10-O2: Verb 'determine' replaced by 'apply'. C10-O3: Kept. C10-O4: Verb 'evaluate' replaced by 'decide'. C10-O5: Two verbs cut to 'compare'. C10-O6: Bankruptcy moved to C13 (coverage review D15). C10-O7: Verb 'judge' replaced by 'justify'.

### C11 Closing and funding

Legal and closing. Intermediate. 6 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C11-O1 | Complete a funding-day condition check, including document ages, naming the approver for any open item that needs an exception. | 3 Apply (complete) | CO1; PCO5 | F1, O5, K1 | Yes: Funding on an unmet condition, or an exception approved outside authority (Course Bible section 3) |
| C11-O2 | Prepare a balanced settlement statement and the borrower's cash to close, including prepaid interest to month-end. | 3 Apply (prepare) | CO2; PCO5 | F2 | No |
| C11-O3 | Reconcile the net funding wire to the settlement statement so that lender funds plus borrower cash equal all uses. | 4 Analyze (reconcile) | CO2; PCO5 | F2, F3 | Yes: A wrong advance: the wire does not match the approved uses |
| C11-O4 | Decide the control response to a funding request with wire-fraud signs, such as a name-and-number mismatch, before any wire leaves. | 5 Evaluate (decide) | CO1; PCO4 | F3, U4 | Yes: Releasing a wire to a diverted account: the whole advance can be lost |
| C11-O5 | Distinguish how recording acts, the gap period, the closing protection letter and the title policy protect lien priority after funding. | 2 Understand (distinguish) | CO1; PCO5 | F4 | No |
| C11-O6 | Prepare the post-closing collateral file and trailing-document log, with UCC lapse dates, ready for boarding and custodian delivery. | 3 Apply (prepare) | CO1; PCO5 | F5, F6 | No |

**Bloom check.** Levels 1-6: 0, 1, 3, 1, 1, 0. 5 of 6 at level 3 or higher; 2 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C11-O1: Verb 'verify ... and decide' cut to 'complete'. C11-O2: Kept. C11-O3: Kept. C11-O4: Verb 'evaluate ... and choose' cut to 'decide'. C11-O5: Kept. C11-O6: Verb 'assemble' replaced by 'prepare'.

### C12 Servicing, draws and asset management

Managing the loan. Intermediate. 8 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C12-O1 | Decide whether to fund a draw and whether the loan stays in balance, from the draw, inspection, loan-monitor report, waivers, date-down and change orders. | 5 Evaluate (decide) | CO1; PCO6 | S2, U6, F4 | Yes: Overfunding against work in place, or funding a draw for work not done |
| C12-O2 | Calculate a monthly interest bill, a late fee and a rate-cap payment on Actual/360, to the cent. | 3 Apply (calculate) | CO2; PCO6 | S1, S6 | No |
| C12-O3 | Decide an extension request against its family tests, priced on the commitment, with the exit tested under the stated stress. | 5 Evaluate (decide) | CO1; PCO6 | S5, U10 | Yes: An extension granted that fails a policy test, with no approved exception (Course Bible section 3) |
| C12-O4 | Analyze a reporting package for late items, covenant breaches, cash-management triggers and the resulting sweep. | 4 Analyze (analyze) | CO1; PCO6 | S3 | No |
| C12-O5 | Justify a risk rating, a watch-list action and the accrual status of a loan from its facts, including guarantor support. | 5 Evaluate (justify) | CO1; PCO6 | S4, K4 | No |
| C12-O6 | Distinguish the lender's rights from the servicer's steps after a casualty loss, from claim to the restore-or-repay decision. | 2 Understand (distinguish) | CO1; PCO6 | S7 | No |
| C12-O7 | Calculate a payoff with interest up to but not including the payoff day, and the release steps that follow. | 3 Apply (calculate) | CO2; PCO6 | S8, F5 | No |
| C12-O8 | Prepare a monthly investor remittance and loan-level performance report from a loan's billing, payment and rating records. | 3 Apply (prepare) | CO1; PCO6 | S11, K7 | No (**blocked: owner decision (registry open item 7, remittance rule)**) |

**Bloom check.** Levels 1-6: 0, 1, 3, 1, 3, 0. 7 of 8 at level 3 or higher; 4 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C12-O1: Loan-monitor review folded in (CCO review 8): schedule slippage, contingency against percent complete and reallocations. A ninth C12 outcome would break the 3-8 rule. C12-O2: Kept. C12-O3: Verb 'evaluate' replaced by 'decide'. C12-O4: Kept. C12-O5: Kept. C12-O6: Kept at level 2 until a proceeds rule exists. C12-O7: Two verbs cut to 'calculate'. C12-O8: Kept. Blocked until a remittance rule exists (CCO review 15).

### C13 Default, workout, foreclosure and REO

Managing the loan. Intermediate. 7 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C13-O1 | Apply the first-30-days default sequence: notice, default interest, re-rating, state check and pre-negotiation letter. | 3 Apply (apply) | CO1; PCO6 | S9, S1, S4 | Yes: Lender rights waived, or a notice defect that delays enforcement (legal error) |
| C13-O2 | Compare forbearance, modification, deed in lieu and foreclosure by net loss, including time, carry and income collected. | 4 Analyze (compare) | CO1; PCO6 | S9, S10 | Yes: Choosing a resolution path with a higher net loss |
| C13-O3 | Recommend forbearance or modification terms, such as a paydown or a note split, that meet the workout and extension rules. | 5 Evaluate (recommend) | CO1; PCO6 | S9, S5, K4 | No |
| C13-O4 | Decide between a deed in lieu and foreclosure, and whether to seek a receiver, from title, state-law and environmental facts. | 5 Evaluate (decide) | CO1; PCO6 | S10, U7, U8 | Yes: Taking title subject to junior liens or contamination |
| C13-O5 | Analyze how a borrower bankruptcy changes the resolution plan and its timeline. | 4 Analyze (analyze) | CO1; PCO6 | S10, U8 | No |
| C13-O6 | Decide whether to enforce a guaranty on a defaulted loan, given deficiency rules, triggered carve-outs, burn-off and the guarantor's ability to pay. | 5 Evaluate (decide) | CO1; PCO6 | S9, U3, U8 | No |
| C13-O7 | Prepare the REO entry at fair value less cost to sell, and a disposition plan with environmental and tax steps. | 3 Apply (prepare) | CO1; PCO6 | S10, K4 | No |

**Bloom check.** Levels 1-6: 0, 0, 2, 2, 3, 0. 7 of 7 at level 3 or higher; 5 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C13-O1: Kept. C13-O2: TM-32 revisit at level 5 (home C10) and TM-19 revisit (home C2). C13-O3: Level 6 'structure' cut to level 5 'recommend' (Course Bible LD-02: level 6 is capstone only). C13-O4: Kept. C13-O5: Kept. Now the home of TM-38, bankruptcy and bankruptcy-remote borrowers (professor review 2). C13-O6: Verb 'evaluate' replaced by 'decide'. C13-O7: Two verbs cut to 'prepare'.

### C14 Credit memo, committee and portfolio context

Managing the loan. Intermediate. 8 outcomes.

You will be able to:

| ID | Outcome | Bloom | Course outcome | Job tasks | Critical |
| --- | --- | --- | --- | --- | --- |
| C14-O1 | Critique a draft credit memo against the eleven-section house standard, finding uncited tests and risks with no mitigant. | 5 Evaluate (critique) | CO1; PCO7 | U9, O6 | No |
| C14-O2 | Analyze a loan's fit with a capital partner's criteria, its sale price at the market yield, and its repurchase exposure. | 4 Analyze (analyze) | CO1; PCO7 | U11, K7, F6 | No (**blocked: owner decision (registry open item 9, buyer eligibility sheet)**) |
| C14-O3 | Decide whether an exception request meets the exception rules and authority limits, including its log entry. | 5 Evaluate (decide) | CO1; PCO7 | K2 | Yes: A policy breach without an approved exception, or approval outside authority (Course Bible section 3) |
| C14-O4 | Recommend a response to a portfolio-limit breach after calculating the bucket share, the headroom and the smallest participation that cures it. | 5 Evaluate (recommend) | CO1; PCO7 | K3, K7 | No |
| C14-O5 | Analyze a loan's exit under the deal-file and committee stresses, using the family exit tests, and show who loses first. | 4 Analyze (analyze) | CO1; PCO7 | U10 | No |
| C14-O6 | Critique a committee presentation and its minutes against the committee rule. | 5 Evaluate (critique) | CO1; PCO7 | K1, O6 | No |
| C14-O7 | Explain how loan ratings, nonaccrual and charge-offs roll up into the portfolio allowance, and what expected loss adds. | 2 Understand (explain) | CO1; PCO7 | K4 | No |
| C14-O8 | Diagnose which loan-review findings are critical credit errors, and the review route for each one. | 4 Analyze (diagnose) | CO1; PCO7 | K1, K4 | Yes: A critical credit error not escalated under the review rule |

**Bloom check.** Levels 1-6: 0, 1, 0, 3, 4, 0. 7 of 8 at level 3 or higher; 7 at level 4-5. Rule: C3 on: at least half at level 3+, and at least one at level 4-5. **Pass.**

**Changes from the blueprint.** C14-O1: Level 6 'draft' cut to level 5 'critique': memo writing is ungraded practice (quality bar 8 and 9.3). C14-O2: Sale price at the market yield added (professor review 2; TM-36). Blocked until the buyer eligibility sheet exists (CCO review 15). C14-O3: Verb 'evaluate' replaced by 'decide'. C14-O4: TM-06 revisit at level 5 (home C2). C14-O5: Who-loses-first added (quality bar 9.5). C14-O6: Kept. C14-O7: Kept at level 2 until an expected-loss formula exists (coverage review open item 1). C14-O8: Verb 'differentiate' replaced by 'diagnose'.

## 4. Job-task traceability (quality bar 7.1; IACET 5.2)

Every one of the 41 needs-analysis tasks is taught by at least one outcome. All 28 high-risk tasks are taught. Every active outcome is examined, at two or more items per form (template, section 2). "Critical outcomes" lists where a task is also guarded by critical items.

Four high-risk tasks have no critical outcome: F6, S7, S11 and K7. A miss on them does not fail the exam alone. S7, S11 and K7 wait on owner rules: a proceeds rule, a remittance rule and a buyer eligibility sheet. C12-O8 (S11) and C14-O2 (K7, U11) are blocked until then. O1 is taught only in part, by design. Selling skills stay on-the-job training (coverage review open item 6).

| Task | Name | Gap | High-risk | Taught in | Critical outcomes |
| --- | --- | --- | --- | --- | --- |
| O1 | Find and qualify borrowers and referral sources | H | Yes | C01-O5, C07-O3 | C01-O5, C07-O3 |
| O2 | Screen business purpose and occupancy | H | Yes | C00-O1, C01-O1, C01-O2, C01-O3, C01-O4, C01-O6, C01-O7, C09-O8, C10-O2 | C00-O1, C01-O2, C01-O6, C01-O7, C10-O2 |
| O3 | Collect the application file | M | No | C01-O6, C06-O1, C06-O2, C06-O4, C06-O7, C07-O2, C07-O3, C09-O1 | C01-O6, C06-O1, C07-O2, C07-O3 |
| O4 | Pre-size the loan; issue a term sheet | H | Yes | C01-O3, C02-O3, C02-O5, C03-O6, C08-O1, C08-O5, C08-O8, C10-O2, C10-O3 | C02-O3, C08-O1, C10-O2, C10-O3 |
| O5 | Manage the borrower to closing | L | No | C02-O5, C11-O1 | C11-O1 |
| O6 | Pitch the deal to committee | M | No | C02-O1, C04-O3, C05-O5, C14-O1, C14-O6 | - |
| U1 | Spread rent roll and operating statement to NOI and NCF | M | No | C04-O1, C04-O2, C04-O3, C04-O4 | C04-O4 |
| U2 | Review appraisals, BPOs and AVMs | H | Yes | C04-O3, C05-O1, C05-O2, C05-O3, C05-O4, C05-O6, C05-O7, C07-O3, C09-O8 | C05-O4, C05-O7, C07-O3 |
| U3 | Analyze borrower, sponsor and guarantor | M | No | C02-O1, C06-O1, C06-O2, C06-O3, C06-O4, C06-O5, C06-O6, C06-O7, C10-O7, C13-O6 | C06-O1, C06-O3, C06-O6 |
| U4 | KYC, beneficial ownership, OFAC, fraud red flags | H | Yes | C07-O1, C07-O2, C07-O3, C07-O4, C07-O5, C07-O6, C11-O4 | C07-O2, C07-O3, C07-O4, C11-O4 |
| U5 | Size the loan; find the binding test | M | Yes | C03-O2, C03-O3, C03-O4, C03-O5, C04-O4, C04-O5, C05-O4, C05-O5, C05-O8, C08-O1, C08-O2, C08-O3, C08-O4, C08-O5, C08-O7, C09-O5 | C03-O4, C03-O5, C04-O4, C04-O5, C05-O4, C08-O1, C08-O2, C08-O3, C08-O4 |
| U6 | Review construction and rehab budgets and feasibility | H | Yes | C05-O3, C05-O8, C08-O3, C08-O4, C12-O1 | C08-O3, C08-O4, C12-O1 |
| U7 | Review title, insurance, environmental, condition, tenant papers | H | Yes | C04-O2, C05-O6, C09-O1, C09-O2, C09-O3, C09-O4, C09-O6, C09-O7, C09-O8, C13-O4 | C09-O3, C09-O4, C09-O6, C13-O4 |
| U8 | Check state licensing, usury, foreclosure, recourse | H | Yes | C03-O2, C03-O6, C08-O5, C10-O1, C10-O2, C10-O3, C10-O4, C10-O5, C10-O6, C10-O7, C13-O4, C13-O5, C13-O6 | C10-O2, C10-O3, C13-O4 |
| U9 | Write the credit memo, conditions, exceptions | H | Yes | C04-O5, C04-O6, C06-O5, C08-O2, C08-O7, C08-O8, C09-O2, C14-O1 | C04-O5, C08-O2 |
| U10 | Stress-test exit and refinance | M | No | C03-O3, C04-O3, C04-O6, C05-O2, C05-O5, C08-O6, C12-O3, C14-O5 | C12-O3 |
| U11 | Confirm investor, warehouse or securitization fit | H | Yes | C05-O4, C14-O2 | C05-O4 |
| F1 | Clear conditions precedent | M | No | C02-O5, C11-O1 | C11-O1 |
| F2 | Settlement statement and funds flow | M | No | C03-O1, C09-O5, C11-O2, C11-O3 | C11-O3 |
| F3 | Closing instructions; wire control | H | Yes | C07-O4, C11-O3, C11-O4 | C07-O4, C11-O3, C11-O4 |
| F4 | Title policy, insurance evidence, recording, UCC | H | Yes | C09-O1, C09-O3, C09-O4, C11-O5, C12-O1 | C09-O3, C09-O4, C12-O1 |
| F5 | Post-close file; board to servicing | M | No | C02-O5, C11-O6, C12-O7 | - |
| F6 | Deliver collateral file to custodian or buyer | H | Yes | C11-O6, C14-O2 | - |
| S1 | Bill interest; late fees; default interest | M | No | C03-O1, C03-O2, C10-O4, C12-O2, C13-O1 | C13-O1 |
| S2 | Administer draws | H | Yes | C12-O1 | C12-O1 |
| S3 | Monitor reporting, covenants, cash management | M | No | C12-O4 | - |
| S4 | Risk-rate; keep the watch list | H | Yes | C02-O6, C12-O5, C13-O1 | C13-O1 |
| S5 | Maturities, extensions, modifications | M | No | C08-O6, C12-O3, C13-O3 | C12-O3 |
| S6 | Track and replace rate caps | H | Yes | C03-O5, C12-O2 | C03-O5 |
| S7 | Casualty losses and insurance proceeds | H | Yes | C12-O6 | - |
| S8 | Payoff statements and lien release | L | No | C02-O5, C03-O1, C03-O3, C12-O7 | - |
| S9 | Work defaults; forbearance; modification | H | Yes | C06-O5, C13-O1, C13-O2, C13-O3, C13-O6 | C13-O1, C13-O2 |
| S10 | Deed in lieu, foreclosure, receiver, REO | H | Yes | C10-O5, C10-O6, C10-O7, C13-O2, C13-O4, C13-O5, C13-O7 | C13-O2, C13-O4 |
| S11 | Report to investors, warehouse lenders, trusts | H | Yes | C12-O8 | - |
| K1 | Approve within delegated authority | H | Yes | C02-O3, C02-O4, C06-O6, C11-O1, C14-O6, C14-O8 | C02-O3, C02-O4, C06-O6, C11-O1, C14-O8 |
| K2 | Set credit policy; approve and track exceptions | H | Yes | C02-O2, C02-O4, C02-O7, C07-O1, C07-O6, C08-O8, C09-O2, C14-O3 | C02-O4, C14-O3 |
| K3 | Portfolio concentration limits | H | Yes | C02-O4, C06-O6, C14-O4 | C02-O4, C06-O6 |
| K4 | Expected credit loss; rating validation; loan review | H | Yes | C12-O5, C13-O3, C13-O7, C14-O7, C14-O8 | C14-O8 |
| K5 | Valuation governance | H | Yes | C05-O4, C05-O7 | C05-O4, C05-O7 |
| K6 | Fair lending on residential collateral | H | Yes | C01-O4, C01-O5, C05-O7 | C01-O5, C05-O7 |
| K7 | Capital-partner terms | H | Yes | C03-O6, C12-O8, C14-O2, C14-O4 | - |

## 5. Theory, regulatory and fraud coverage (quality bar 6.1, 7.3, 11.1, 11.3)

Quality bar 7.3 says each section must serve a named outcome, including theory-map concepts. This table shows which outcomes carry each key, and the home module from the theory map or matrix. A lesson section on, say, mezzanine foreclosure serves C09-O1 or C13-O3; if it serves none, it is cut.

The homes agree with the theory map and matrices: expected loss TM-19 in C2 (C02-O8), loss severity TM-32 in C10 (C10-O5), concentration TM-06 in C2 (C02-O4), rate risk TM-11 in C3 (C03-O5), and capital stack TM-22 in C6 (C06-O7).

| ID | Concept or topic | Home module | Outcomes | Home outcome |
| --- | --- | --- | --- | --- |
| TM-01 | Real estate and credit cycles | C0 | C00-O5, C05-O2, C08-O6, C13-O2, C14-O5 | C00-O5 |
| TM-02 | Lender types, funding routes and the capital partner's credit box | C0 | C00-O2, C00-O3, C11-O6, C12-O8, C14-O2 | C00-O2 |
| TM-03 | The regulatory perimeter: business-purpose versus consumer credit | C1 | C01-O1, C01-O2, C01-O4, C07-O3, C10-O2, C11-O1 | C01-O1 |
| TM-04 | Default as the borrower's option to walk away | C2 | C02-O8, C05-O5, C08-O1, C09-O2, C10-O7, C13-O6 | C02-O8 |
| TM-05 | Agency problems: adverse selection, moral hazard, originate-to-distribute and sponsor incentives | C2 | C02-O7, C06-O7, C07-O3, C08-O8, C13-O3, C14-O2 | C02-O7 |
| TM-06 | Concentration risk | C2 | C02-O4, C06-O6, C14-O4 | C02-O4 |
| TM-07 | Risk ratings and credit migration | C2 | C02-O6, C12-O5, C13-O1, C14-O8 | C02-O6 |
| TM-08 | Time value of money and mortgage mathematics | C3 | C03-O2, C03-O3, C08-O3, C12-O7, C13-O3, C14-O2 | C03-O2 |
| TM-09 | Loan types and amortization | C3 | C03-O3, C03-O4, C08-O8 | C03-O3 |
| TM-10 | Contract rate, yield to maturity and expected return | C3 | C03-O6, C08-O5, C14-O2 | C03-O6 |
| TM-11 | Interest-rate risk on floating-rate loans | C3 | C03-O5, C08-O3, C12-O2 | C03-O5 |
| TM-12 | Pro forma realism and submarket evidence | C4 | C04-O3, C05-O7, C08-O6, C14-O5 | C04-O3 |
| TM-13 | Cash-flow coverage and break-even | C4 | C04-O5, C04-O6, C08-O2, C12-O4 | C04-O5 |
| TM-14 | Discounted cash flow, cost of capital and cap rates | C5 | C05-O2, C08-O2, C13-O7 | C05-O2 |
| TM-15 | Financial leverage | C5 | C05-O5, C06-O7, C08-O2 | C05-O5 |
| TM-16 | Real options and land value | C5 | C05-O8, C08-O4 | C05-O8 |
| TM-17 | Guaranty value and wrong-way risk | C6 | C06-O5, C09-O2, C10-O7, C13-O6 | C06-O5 |
| TM-18 | Fraud economics and the verification chain | C7 | C07-O3, C07-O4, C11-O4 | C07-O3 |
| TM-19 | Expected loss and credit spreads | C2 | C02-O8, C08-O5, C10-O5, C13-O2, C14-O7 | C02-O8 |
| TM-20 | Risk-based pricing | C8 | C08-O5, C14-O2 | C08-O5 |
| TM-21 | Commercial mortgage underwriting: several tests and the binding constraint | C8 | C08-O1, C08-O2, C14-O1 | C08-O1 |
| TM-22 | Capital stack and subordination | C6 | C06-O7, C08-O7, C09-O1, C13-O3, C14-O1 | C06-O7 |
| TM-23 | Refinance and extension risk | C8 | C08-O6, C12-O3, C14-O5 | C08-O6 |
| TM-24 | Prepayment option and prepayment premiums | C8 | C08-O8, C10-O4 | C08-O8 |
| TM-25 | Development phases and phased risk | C8 | C08-O4, C12-O1, C14-O1 | C08-O4 |
| TM-26 | Development feasibility: front door and back door | C8 | C08-O4, C08-O6, C14-O1 | C08-O4 |
| TM-27 | Interest during construction | C8 | C08-O4, C12-O1 | C08-O4 |
| TM-28 | Completion and cost-overrun risk | C8 | C08-O4, C09-O2, C12-O1, C14-O1 | C08-O4 |
| TM-29 | Take-out risk | C8 | C08-O6, C12-O3, C14-O5 | C08-O6 |
| TM-30 | Lien priority and perfection | C9 | C09-O3, C11-O5, C12-O1, C13-O4 | C09-O3 |
| TM-31 | Intercreditor terms and mezzanine foreclosure | C9 | C09-O1, C13-O3 | C09-O1 |
| TM-32 | Loss severity and recovery timing | C10 | C10-O5, C13-O2, C14-O7 | C10-O5 |
| TM-33 | Conditions precedent and the point of no return | C11 | C11-O1, C12-O1 | C11-O1 |
| TM-34 | Covenants, monitoring and early warning | C12 | C12-O4, C13-O1, C14-O8 | C12-O4 |
| TM-35 | Workout economics | C13 | C13-O2, C13-O3, C14-O7 | C13-O2 |
| TM-36 | Loan valuation at a market yield | C14 | C14-O2 | C14-O2 |
| TM-37 | Lifetime expected loss and the allowance | C14 | C14-O7 | C14-O7 |
| TM-38 | Bankruptcy and bankruptcy-remote borrowers | C13 | C13-O5 | C13-O5 |
| REG-01 | Business-purpose determination: Truth in Lending (Reg Z) exemption | C1 | C01-O1, C01-O2, C01-O4, C01-O7, C06-O1, C14-O3 | C01-O1 |
| REG-02 | Business-purpose determination: RESPA (Reg X) exemption | C1 | C01-O1, C01-O4, C09-O5, C11-O2 | C01-O1 |
| REG-03 | Occupancy and disguised consumer-loan risk | C1 | C01-O2, C01-O3, C01-O6, C06-O2, C07-O3, C09-O8, C10-O2, C12-O4, C14-O3 | C01-O2 |
| REG-04 | State licensing of business-purpose lenders | C10 | C10-O2, C14-O3 | C10-O2 |
| REG-05 | ECOA and Reg B for business credit: coverage and adverse action | C1 | C01-O4, C01-O5, C06-O2, C14-O6 | C01-O4 |
| REG-06 | Spousal signatures (ECOA/Reg B) | C1 | C01-O5, C06-O1, C09-O2, C11-O1 | C01-O5 |
| REG-07 | Small-business lending data collection (ECOA section 1071) | C1 | C01-O4 | C01-O4 |
| REG-08 | BSA/AML scope for non-bank lenders | C7 | C07-O1, C07-O5, C07-O6, C11-O4, C14-O8 | C07-O1 |
| REG-09 | OFAC screening of borrowers, owners and guarantors | C7 | C07-O2, C11-O1, C14-O8 | C07-O2 |
| REG-10 | Beneficial ownership: the CDD rule and Corporate Transparency Act changes | C7 | C07-O1, C07-O2, C11-O1 | C07-O1 |
| REG-11 | FinCEN residential real estate reporting rule | C7 | C07-O1, C11-O1 | C07-O1 |
| REG-12 | UDAAP (federal) and state UDAP | C1 | C01-O4, C13-O1 | C01-O4 |
| REG-13 | Appraisal independence and USPAP | C5 | C05-O4, C05-O7, C07-O3, C08-O1, C14-O8 | C05-O4 |
| REG-14 | Environmental due diligence: ASTM E1527-21 and CERCLA lender protections | C9 | C09-O6, C13-O4, C13-O7, C14-O1 | C09-O6 |
| REG-15 | Insurance: flood determination and flood cover | C9 | C09-O4, C11-O1, C12-O6 | C09-O4 |
| REG-16 | Insurance: builder's risk, loss of rents, mortgagee clause and certificate types | C9 | C09-O4, C12-O6, C13-O4 | C09-O4 |
| REG-17 | HMDA (Regulation C): reporting of business-purpose loans on dwellings | C1 | C01-O4 | C01-O4 |
| REG-18 | State usury, default interest and late fees | C10 | C10-O3, C10-O4, C12-O2, C13-O1 | C10-O3 |
| REG-19 | Mechanics' lien priority and notice of commencement | C9 | C09-O3, C12-O1 | C09-O3 |
| REG-20 | FCRA: permissible purpose and adverse action for guarantor reports | C6 | C06-O2 | C06-O2 |
| REG-21 | Foreclosure overlays: servicemember, tenant and bankruptcy protections | C10 | C10-O6, C13-O5 | C10-O6 |
| REG-22 | State foreclosure route, redemption and deficiency | C10 | C10-O1, C10-O5, C10-O7, C13-O4, C13-O6 | C10-O1 |
| REG-23 | Fair Housing Act on residential collateral | C1 | C01-O4, C01-O5, C05-O7 | C01-O4 |
| REG-24 | Interagency real estate lending standards (12 CFR Part 34, Subpart D) | C2 | C02-O2, C08-O1 | C02-O2 |
| FRD-01 | Straw borrower or nominee owner | C7 | C07-O3 | C07-O3 |
| FRD-02 | Occupancy fraud | C1 | C01-O6, C07-O3, C09-O8, C12-O4 | C01-O6 |
| FRD-03 | Inflated or broker-supplied after-repair value (ARV) | C5 | C05-O7, C07-O3, C08-O1 | C05-O7 |
| FRD-04 | Rapid flip chains (title chain and seasoning) | C7 | C07-O3, C09-O3 | C07-O3 |
| FRD-05 | Fake leases or rent rolls | C4 | C04-O3, C07-O3, C09-O8, C12-O4 | C04-O3 |
| FRD-06 | Altered bank statements | C6 | C06-O4, C07-O3 | C06-O4 |
| FRD-07 | Related-party appraiser or contractor | C5 | C05-O7, C07-O3, C08-O4, C12-O1 | C05-O7 |
| FRD-08 | Draw fraud | C12 | C12-O1 | C12-O1 |
| FRD-09 | Closing wire fraud (business email compromise) | C7 | C07-O4, C11-O4 | C07-O4 |
| FRD-10 | Double-pledged collateral | C9 | C09-O3, C11-O5, C12-O1 | C09-O3 |
| FRD-11 | Seller impersonation or title theft | C7 | C07-O3, C09-O3, C11-O4 | C07-O3 |
| FRD-12 | Dual contracts or undisclosed seller credits | C7 | C07-O3, C11-O3 | C07-O3 |

Three topics sit in one outcome: REG-07 (section 1071) and REG-17 (HMDA) in C01-O4, and REG-20 (FCRA) in C06-O2. Quality bar 11.1 needs two graded items per topic, so the C1 and C6 exams must give each its own item on both forms.

## 6. Spaced retrieval quota (quality bar 7.4)

From C3 on, 15-20% of each module's review questions revisit outcomes from at least two earlier modules. Review counts are the blueprint figures. Source outcomes are proposals; item writers may swap them for others from earlier modules.

| Module | Review items | 15%-20% range | Retrieval items | Source outcomes | Fix |
| --- | ---: | --- | ---: | --- | --- |
| C3 | 14 | 2.1-2.8 | 3 | C00-O4, C02-O3, C02-O5 | No whole number fits. Raise review items to 15, with 3 retrieval items |
| C4 | 16 | 2.4-3.2 | 3 | C02-O1, C03-O4, C03-O1 | None |
| C5 | 16 | 2.4-3.2 | 3 | C02-O2, C03-O2, C04-O4 | None |
| C6 | 18 | 2.7-3.6 | 3 | C01-O5, C02-O4, C03-O4 | None |
| C7 | 15 | 2.25-3.0 | 3 | C01-O6, C06-O1, C06-O4 | None |
| C8 | 19 | 2.85-3.8 | 3 | C03-O4, C04-O5, C05-O4, C06-O6 | None |
| C9 | 17 | 2.55-3.4 | 3 | C05-O4, C06-O1, C08-O3 | None |
| C10 | 14 | 2.1-2.8 | 3 | C01-O3, C03-O6, C07-O3 | No whole number fits. Raise review items to 15, with 3 retrieval items |
| C11 | 12 | 1.8-2.4 | 2 | C03-O1, C07-O4, C09-O3 | None |
| C12 | 18 | 2.7-3.6 | 3 | C03-O1, C08-O6, C09-O4, C10-O4 | None |
| C13 | 18 | 2.7-3.6 | 3 | C06-O5, C10-O5, C12-O5 | None |
| C14 | 19 | 2.85-3.8 | 3 | C02-O4, C08-O2, C12-O5, C13-O2 | None |

**C3 and C10 cannot meet the rule at 14 review items.** 15% of 14 is 2.1 and 20% is 2.8. No whole number fits. Raise each to 15 review items, with 3 retrieval items (20.0%). Credit effect, by the Std 7.02 formula:

1. C3: 174.906 + 1.85 = 176.756 minutes. 176.756 ÷ 50 = 3.535, so still 3.4 credits in fifths (3.5 at halves).
2. C10: 172.139 + 1.85 = 173.989 minutes. 173.989 ÷ 50 = 3.480, so still 3.4 credits.

## 7. Exam minimums per form, from these outcomes (quality bar 8.4, 8.5, 8.7)

Exam items per form are the blueprint figures (6 per credit, rounded up). The other columns are minimums these outcomes set. "Level 3-4" applies from C3 on. Every module fits: two items per outcome and two per critical skill fit inside each form.

| Module | Exam items per form | 2 per outcome | Critical items (2 per skill) | Exhibit items (40%) | Level 3-4 items (60%) | Outcomes per form (75%) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| C0 | 12 | 12 | 2 | 5 | n/a | 5 of 6 |
| C1 | 20 | 14 | 8 | 8 | n/a | 6 of 7 |
| C2 | 21 | 16 | 4 | 9 | n/a | 6 of 8 |
| C3 | 21 | 12 | 4 | 9 | 13 | 5 of 6 |
| C4 | 23 | 12 | 4 | 10 | 14 | 5 of 6 |
| C5 | 24 | 16 | 4 | 10 | 15 | 6 of 8 |
| C6 | 27 | 14 | 6 | 11 | 17 | 6 of 7 |
| C7 | 22 | 12 | 6 | 9 | 14 | 5 of 6 |
| C8 | 28 | 16 | 10 | 12 | 17 | 6 of 8 |
| C9 | 26 | 16 | 6 | 11 | 16 | 6 of 8 |
| C10 | 21 | 14 | 4 | 9 | 13 | 6 of 7 |
| C11 | 17 | 12 | 6 | 7 | 11 | 5 of 6 |
| C12 | 27 | 16 | 6 | 11 | 17 | 6 of 8 |
| C13 | 27 | 14 | 6 | 11 | 17 | 6 of 7 |
| C14 | 28 | 16 | 4 | 12 | 17 | 6 of 8 |

**Critical items change from the blueprints.** Blueprint plans often had one critical item per skill. Quality bar 8.7 needs two per form. New minimums per form, against the blueprint plans:

| Module | C0 | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 |
| --- | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: |
| Blueprint plan | 2 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 3 | 3 | 4 | 5 | 4 |
| Minimum now | 2 | 8 | 4 | 4 | 4 | 4 | 6 | 6 | 10 | 6 | 4 | 6 | 6 | 6 | 4 |

**If the owner adopts three items per critical skill** (exam template, section 5, option B), each minimum rises by half: C1 to 12 of 20 and C8 to 15 of 28. Every module still fits its form.

## 8. Decisions and conflicts for the owner

| # | Point | What we did | Owner action |
| --- | --- | --- | --- |
| 1 | The course page shows three course outcomes; CO1 carries most of the course | Tagged every outcome to CO1-CO3 and to a proposed PCO1-PCO7 | Adopt PCO1-PCO7 in the live Course Bible, or keep three. `build.py` would need to read the new list |
| 2 | Course Bible LD-02 keeps level 6 for capstones; C13 O3 and C14 O1 were level 6 | Lowered both to level 5 ("recommend", "critique"). Both are also now testable by multiple choice | Confirm |
| 3 | **Critical-item pass rule.** Course Bible section 3, qas-spec.md and quality bar 8.7 state three different rules. The professor's review adds that 1 of 2 four-option items is passed by guessing 43.75% of the time | Template section 5 sets out three options with guess rates and item counts | Pick one rule and word it once (8.7, 8.11). Then edit the other sources |
| 4 | Expected loss home | Settled with the theory map: home C2 (C02-O8, level 2), revisit C8 (C08-O5, level 4), allowance C14 (C14-O7) | Confirm |
| 5 | Seven new outcomes add content: C02-O8, C05-O6, C05-O8, C06-O7, C08-O4, C08-O7, C09-O8. C08-O4, C08-O5 and C12-O1 grew | Tagged and placed; blueprints not edited | Update each blueprint's content map, words and credit worksheet |
| 6 | C8 has 8 outcomes and 4.9 minutes under the 4-hour cap (LD-03). Construction now has its own lesson inside C8 | Kept the blueprint counts (19 review, 28 per form) | Decide whether to split C8 into sizing and pricing (O1-O3, O5, O6) and construction and structure (O4, O7, O8) |
| 7 | C12-O6 (casualty proceeds) and C14-O7 (allowance) stay at level 2 | No proceeds rule and no expected-loss formula exist. No limit was invented | Add the rules, then raise both to level 3 or higher |
| 8 | C08-O4 construction: no contingency-adequacy or change-order rule | Contingency adequacy is taught but never scored. The grey case uses the change-order silence | Add a rule if either should be scored |
| 9 | C3 and C10 review counts | Need 15, not 14 (section 6) | Update both blueprints |
| 10 | C12-O8 and C14-O2 blocked | Marked `status: blocked` | Supply a remittance rule (registry open item 7) and a buyer eligibility sheet (open item 9) |
| 11 | Reliability on a 28-item form | Template section 5 adds KR-20 and a decision-consistency index to item analysis | Set the minimum values (8.9) |

## Self-check

| Requirement | Status |
| --- | --- |
| 3-8 measurable outcomes per module (7.1; Std 3.01) | Done: 6-8 per module, 106 in all |
| Bloom level and verb per outcome; ratio rule per module (7.1) | Done: all 15 pass (section 2). The script checks the verb; two reviewers check the level by the thinking it needs |
| Course outcome and job task per outcome (7.1) | Done: every outcome has both; all 41 tasks traced (section 4) |
| Every high-risk task taught and tested (7.1) | Done: 28 of 28 taught. Tests for S11 and K7 wait on the two blocked outcomes |
| Critical flag tied to a loss-causing or legal error (8.7) | Done: 38 critical outcomes, each naming its error |
| One set of keys across the frame | Done: TM, REG, FRD and DOC IDs only; homes match the theory map and matrices |
| Off-objective test (7.3) | Ready: every TM, REG, FRD and DOC key names the outcomes it serves (section 5 and the JSON) |
| Spaced retrieval quota (7.4) | Done: quota per module; C3 and C10 need one more review item |
| No invented limit, threshold or rate | Done: outcomes name policy tests by plain name only |
| Statements under 25 words, no codes | Done: script-checked |
| JSON twin | Done: [outcomes.json](outcomes.json), with the same data and the check results (`check_errors` is empty) |

## What to look up yourself

1. FinCEN's residential real estate reporting rule, for C07-O1. A federal court in the Eastern District of Texas vacated it on 19 Mar 2026. FinCEN and the Department of Justice have appealed. While the order stands, no Real Estate Reports are required [VERIFY: FinCEN, fincen.gov/rre; checked 22 Nov 2026]. Check the appeal's outcome before C07-O1 items are written.
2. The section 1071 final rule and its compliance dates (C1 blueprint item 3). C01-O4 tests its status, so the date must be current when items are written.
3. QM Higher Education Rubric, 7th ed., Standards 2.1-2.5. Confirm the alignment wording behind the proposed course outcomes.
4. Haladyna, Downing and Rodriguez (2002), "A review of multiple-choice item-writing guidelines", *Applied Measurement in Education* 15(3). It backs the item rules in the template.
5. 12 CFR 1003.2(g) and comment 3(c)(10)-2, for the HMDA part of C01-O4 (REG-17).
6. A decision-consistency method for single-form tests, such as Subkoviak (1988) or Livingston and Lewis (1995), before the 8.9 report is scripted. Confirm each citation first.

## How to check it

1. Open [outcomes.json](outcomes.json) and confirm `check_errors` is an empty list. It parses as UTF-8 JSON.
2. Pick one module in section 3. Count the levels and compare with its row in section 2.
3. Pick three outcomes and count their words. Each must be under 25.
4. Pick a high-risk task in section 4, say S2. Find C12-O1 in section 3 and confirm it names the task.
5. For C3: `=0.15*14` gives 2.1 and `=0.2*14` gives 2.8, so no whole number fits. At 15, `=3/15` gives 0.2.
6. Compare each "Changes from the blueprint" note with that blueprint's section 2.
7. Pick any TM, REG, FRD or DOC ID in section 5. Open its theory map, matrix or registry entry and confirm the same outcomes are listed.
8. In outcomes.json, confirm `blocked_outcomes` lists C12-O8 and C14-O2.
