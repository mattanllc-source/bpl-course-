# C14 blueprint: Credit memo, committee and portfolio context

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C14, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Intermediate (`docs/accreditation/qas-spec.md`) |
| Field of study | Specialized Knowledge, with Finance for concentration, stress and loss math (Std 7.01.1). Split estimate in section 7 |
| Learner | College graduate with basic finance, new to lending. Target depth: upper-undergraduate to early-graduate |
| Testing | Multiple choice only: four options, one best answer, feedback on every option |
| Lesson read | `modules/core/c14/lesson.md`, C14-lesson-v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Sources used | Model Credit Policy, Formula Library, Running Deals, State Law Table (22 Nov 2026 snapshots); `docs/curriculum/needs-analysis.md` v0 |
| Status | v0 draft for owner review, 22 Nov 2026. Lesson not changed |

## 1. Module purpose

C14 builds the credit officer's skill of turning analysis into a defensible decision: the memo, the right approver, disciplined exceptions, portfolio fit, committee debate and independent review. It closes the core course and leads into the family capstones (R6, M6, CM6), where learners take a whole file to committee.

## 2. Learning objectives

By the end of C14, you will be able to:

| # | Objective | Bloom | Needs-analysis tasks | Main rule and formula IDs |
| --- | --- | --- | --- | --- |
| O1 | **Draft** a credit memo that meets the eleven-section house standard, with every test cited and every risk paired with a mitigant | 6 Create | U9, O6 | CORE-AUTH-02; CORE-SVC-07 |
| O2 | **Analyze** a loan against a capital partner's eligibility criteria (loan buyer, warehouse lender or securitization pool), and identify the repurchase and risk-retention exposure each breach creates | 4 Analyze | U11, K7; F6 (preview) | CORE-CONC-01 to -07 (buyer limits shaped them); Model Credit Policy rating-agency anchors (market, pool-level); 17 CFR 246.4, 246.7 |
| O3 | **Evaluate** an exception request against the exception rules and authority limits, and complete its log entry | 5 Evaluate | K2 | CORE-EXC-01 to -05; CORE-AUTH-01; F-CORE-25 |
| O4 | **Recommend** a response to a portfolio-limit breach, by calculating the bucket share, the headroom and the smallest participation that cures it | 5 Evaluate | K3, K7 | CORE-CONC-01 to -07; CORE-AUTH-01; F-CORE-30, -43 |
| O5 | **Analyze** a loan's exit under the deal-file and committee what-if stresses, using the family exit tests | 4 Analyze | U10 | F-MF-20; F-COM-10; MF-BR-08; COM-TRM-09 |
| O6 | **Critique** a committee presentation and its minutes against the committee rule | 5 Evaluate | K1, O6 | CORE-AUTH-03 |
| O7 | **Explain** how loan-level ratings, nonaccrual and charge-offs roll up into the portfolio allowance under CECL, and what expected loss adds | 2 Understand | K4 | CORE-SVC-07, -08; F-CORE-23, -42 |
| O8 | **Differentiate** critical credit errors from other review findings, and route each one under the review rule | 4 Analyze | K1, K4 | CORE-AUTH-04; Bible section 3 (critical credit error) |

**Bloom mix.** Understand 1, Analyze 3, Evaluate 3, Create 1. Seven of eight (88%) are Apply or above.

**Coverage review change (22 Nov 2026).** O2 was "Determine the approver", a duplicate of C2 O4. It is now the capital-partner objective, which places the needs-analysis capital-markets gap (U11, K7) without a new module. O7 now owns expected loss and the allowance, moved from C2.

**Note for the owner.** Bible LD-02 sets core modules at levels 2-3. This blueprint follows the depth decision and reaches levels 5-6. LD-02 needs updating.

## 3. Content map

"Opened" means opened on 22 Nov 2026 for this blueprint.

| Obj | Concepts | Real rules and primary sources | Model-policy rules |
| --- | --- | --- | --- |
| O1 | The memo as decision record and legal record; answer first; risk-mitigant pairs; the rating at approval; conditions to close | Each exception approval needs a written justification kept in the permanent loan file: Interagency Guidelines for Real Estate Lending Policies, 12 CFR Part 34, Subpart D, Appendix A (Cornell LII, opened). (The NCUA Examiner's Guide cite carried in CORE-AUTH-02 could not be opened; Gate 1 review removed it here. The 12 CFR 34 cite above supports the memo-as-record point) | CORE-AUTH-02; CORE-SVC-07; CORE-BP-03; CORE-PRC-03; CORE-DOC-04 |
| O2 | Warehouse line (advance rate, eligibility, margin call); whole-loan sale (data tape, due diligence, reps and warranties, repurchase); securitization (rated and unrated pools, pool-level eligibility); risk retention; bank buyers re-testing supervisory LTV | A securitization sponsor generally keeps an eligible vertical interest of at least 5%, or an equivalent horizontal interest [VERIFY: 17 CFR 246.4(a); Cornell LII; checked 22 Nov 2026 for the needs analysis]. CMBS may use a third-party purchaser with an operating advisor [VERIFY: 17 CFR 246.7; Cornell LII; checked 22 Nov 2026]. For a purchase, bank "value" is "the lesser of the actual acquisition cost or the estimate of value" [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, definition of "Value"; Cornell LII; checked 22 Nov 2026]. Warehouse and loan-sale terms are contract, not law: market practice, sources to open before writing (no CREFC or MBA access, needs analysis) | CORE-CONC-01 to -07; Model Credit Policy rating-agency anchors (pool-level, MARKET); F-CORE-14 |
| O3 | Exception versus waiver versus policy change; compensating factors; layering; exception-rate monitoring; the log | Prudent exceptions allowed; exceptions "of a significant size" reported to the board one by one; loans above supervisory LTV limits reported in aggregate at least quarterly: 12 CFR Part 34, Subpart D, Appendix A (opened). Same text for Fed banks: 12 CFR Part 208, Appendix C (lesson tag, checked 22 Nov 2026) | CORE-EXC-01 to -05; CORE-AUTH-01; D-CORE-15. F-CORE-25 |
| O4 | Concentration as correlated risk; buckets; share after the loan; headroom; participations sold to cure a breach; why bank buyers have their own limits | Supervisory CRE screening criteria: construction and land loans at 100% or more of total risk-based capital, or total CRE at 300% or more with 50% growth over 36 months: OCC Bulletin 2006-46, 6 Dec 2006 (opened). These trigger more analysis; they are not limits. Bank lending limit: 15% of unimpaired capital and surplus, plus 10% if fully secured by readily marketable collateral: 12 U.S.C. 84(a)(1)-(2) (opened). Securitizer risk retention of at least 5%: 17 CFR 246.4(a) [VERIFY: opened by the needs analysis on 22 Nov 2026; re-open before drafting] | CORE-CONC-01 to -07; CORE-AUTH-01; D-CORE-13, -14. F-CORE-29, -30, -43 |
| O5 | Exit (take-out) sizing; sensitivity to NCF; break-point NCF; the cushion; why the bridge exit test is a refinance test | No statute. Supervisory LTV limits a bank refinancing lender would apply: improved property 85%; commercial, multifamily and other non-residential construction 80%: 12 CFR Part 34, Subpart D, Appendix A (opened) | MF-BR-08; COM-TRM-09; COM-GEN-08. F-MF-20; F-COM-09, -10 |
| O6 | Committee roles; quorum and vote; veto asymmetry; dissent; conditions; tabling; challenge culture | No statute. Board and management oversight of concentrations and exceptions: OCC Bulletin 2006-46 (opened); 12 CFR 34 Appendix A (opened) | CORE-AUTH-03 |
| O7 | Rating versus accrual versus charge-off versus allowance; expected credit loss; probability of default, loss given default and exposure at default (concepts only); collateral-dependent measurement; delinquency and charge-off data | CECL in ASC Topic 326 covers assets at amortized cost; effective for SEC filers (excluding smaller reporting companies) for fiscal years beginning after 15 Dec 2019, and for all others after 15 Dec 2022; the interagency ACL policy statement was revised April 2023: FDIC CECL page (opened). Modified loans are estimated under the same CECL method; collateral-dependent loans use collateral fair value: 2023 *Policy Statement on Prudent CRE Loan Accommodations and Workouts*, Appendix 5 (Fed SR 23-5 attachment, opened). Data: FRED DRCRELEXFACBS 1.53% and CORCREXFACBS 0.14%, Q2 2026 (Federal Reserve, updated 25 Aug 2026, opened) | CORE-SVC-07, -08; D-CORE-23. F-CORE-23, -42. No expected-loss formula exists (4.5) |
| O8 | Critical credit error; independent credit risk review; sample design; escalation; feedback to policy | Reviews of significant loans "typically annually, on renewal, or more frequently" when risk signs appear; reviewers independent of the credits reviewed: *Interagency Guidance on Credit Risk Review Systems*, May 2020 (OCC Bulletin 2020-50, 8 May 2020; Fed SR 20-13 attachment, opened) | CORE-AUTH-04; CORE-EXC-03; Bible section 3 |

## 4. Depth targets

The current lesson teaches the house process clearly. A university course in credit management would add how regulators and buyers judge that process, and how a portfolio measures loss.

### 4.1 Add (new content)

1. **The regulatory frame for concentration.** **C14 owns OCC Bulletin 2006-46** (screening criteria) beside CORE-CONC-03 to -07 (coverage review, 22 Nov 2026). C2 owns 12 CFR 34 Appendix A (supervisory LTV limits, exception aggregates, board reporting); C14 applies it to exception reporting and buyer re-testing and does not reteach the table. Our lender is not a bank. But bank buyers, participants and warehouse lenders apply these rules, so they shape what we can sell.
2. **Participations (K3, K7).** What a participation is; why buyers have lending limits (12 U.S.C. 84); voting on modifications (the lesson's look-up item becomes taught content). Still to open: ASC 860 on participating interests, and FDIC guidance on purchased loan participations.
2a. **Capital partners and loan sale (new O2 and T2; U11, K7; needs analysis §4 item 1).** Placed here instead of a new module (coverage review). Warehouse lines: advance rate, eligibility, aging limits and margin calls. Whole-loan sale: the data tape, buyer due diligence, representations and warranties, and repurchase claims. Securitization: rated versus unrated pools, pool-level eligibility (the Model Credit Policy's rating-agency anchors, labelled market and pool-level), and risk retention. **C14 owns Regulation RR**: the 5% vertical or horizontal interest (17 CFR 246.4(a)) and the CMBS third-party purchaser with an operating advisor (17 CFR 246.7). C0 previews the 5% floor only. C11 owns physical file delivery (F6); C12 owns monthly investor reporting (S11). The policy has no buyer or warehouse eligibility sheet, so no loan-level eligibility limit is scored until the owner adds a fictional one (4.5 item 5).
3. **Exit stress at committee (U10).** Use only stresses in the deal file or labelled committee what-ifs: Birchwood NCF $380,000 and 10% short; Cedar Court NCF $500,000. Apply C8's break-point method (the NCF at which exit DSCR equals the test); C8 owns it, and C14 shows how committee reads it.
3a. **Approver routing: recap only.** C2 O4 owns CORE-AUTH-01 routing in full. C14 recaps it in 300 words inside T6 and tests it through the O6 critique. The old O2 ("Determine the approver") duplicated C2 O4 and was replaced (coverage review).
4. **Portfolio loss measurement (K4).** Rating, nonaccrual, charge-off and allowance are four different things. Use the C13 numbers to show each one. Teach expected loss as a concept. A worked expected-loss calculation needs a new Library formula first (4.5 item 1).
5. **Exception log.** CORE-EXC-02 is a log rule: rule ID, policy value, approved value, at least two factors, approver and date. The lesson teaches only the factor count. Add a completed log entry.
6. **Layering limit.** CORE-EXC-04 (at most two exceptions per loan) is not taught. Add it to T3.
7. **Market data.** FRED delinquency and charge-off series (section 3, O7) to show the gap between how often loans default and how much is lost.

### 4.2 Deepen (existing content, more rigour)

1. **The memo.** Treat it as the record an examiner, buyer or court reads later. Teach claim-evidence-rule structure for each section. Show a weak and a strong section 9 side by side.
2. **Concentration.** Explain why a bucket share is tested after the loan (the loan joins both numerator and denominator), which is the logic behind F-CORE-43. Explain correlation in plain terms: one state's economy or one sponsor's failure hits many loans at once.
3. **Committee.** Replace the generic "how to present" tips with a critique rubric built from CORE-AUTH-03. Teach why the CCO veto is one-way (it can only make the outcome safer).
4. **Independent review.** Use the 2020 interagency guidance on independence and frequency. Explain sampling: why every committee loan is in the sample (CORE-AUTH-04).

### 4.3 Correct

1. **"They set no fixed caps" (T4).** True for hard limits, but incomplete. OCC Bulletin 2006-46 sets screening criteria (100% and 300% of total risk-based capital, with 50% growth over 36 months) that trigger more supervisory analysis. Reword so learners do not think regulators publish no figures.
2. **CORE-EXC-02 misdescribed (T3).** The lesson states CORE-EXC-02 as "needs at least two compensating factors". The rule is the full log entry (4.1 item 5). The factor list sits below the rule in the policy.
3. **Open NCUA tag (T1).** The site was unreachable. Replace it with 12 CFR Part 34, Subpart D, Appendix A, opened 22 Nov 2026.
4. **Stress inputs need labels.** WE6 "NCF 10% short" is a committee what-if, not a policy stress. Label it so, as C12 labels the 8% cost to sell. The math holds: $434,000 × 90% = $390,600; $390,600 ÷ $319,050.84 = 1.22x, below 1.30x.
5. **Hours and quiz format.** The lesson claims 3 hours; the formula gives about 1.2 credits (section 7). Items are open response, and several are yes/no (Set A items 6 and 10; Set B items 4 and 11). Rewrite all as four-option multiple choice.
6. **O5 committee objective had no practice (lesson self-review).** Add a scored critique exercise (section 5, T6).

### 4.4 Cut or move

1. **Duplicated memo outline.** The Running Deals tab already holds a memo outline per deal. Cite it rather than repeat it.
2. **Generic presentation tips (T5).** Replace with the CORE-AUTH-03 critique rubric.
3. **Timing plan, self-review table, OJT.** As in C12 and C13: credit worksheet instead; review log; optional non-credit OJT.

### 4.5 Owner decisions needed (no limit invented)

| # | Gap | Effect |
| --- | --- | --- |
| 1 | No expected-loss formula (probability of default × loss given default × exposure) and no PD source | O7 stays at Understand; no numeric expected-loss example |
| 2 | No rule on selling participations: minimum size, buyer approval, retained voting | T4 shows the cure arithmetic only (F-CORE-43) |
| 3 | No portfolio stress-test rule | O5 uses loan-level exit tests only |
| 4 | No rule on loan-review sample size beyond "every committee loan" | T8 cannot size a sample |
| 5 | No fictional buyer or warehouse eligibility sheet (loan-level limits, advance rate, aging, repurchase window) | O2 uses only the pool-level rating-agency anchors, labelled market; the Cedar Court practice waits for the sheet |

## 5. Sequence

Worked examples use the running deals. The $120,000,000 book and its state and MSA balances are the lesson's C14 training figures. Practice uses a second deal (LD-08).

| Chunk | Objective | Teach | Worked example (running deal) | Practice | RQ |
| --- | --- | --- | --- | --- | --- |
| T1 The memo | O1 | CORE-AUTH-02's eleven sections; answer first; claim-evidence-rule; risk-mitigant pairs; the memo as record (12 CFR 34 App. A justification) | Maple Run section 1 and the risk table (lesson WE1): $340,000; LTARV 65.4%; DSCR 0.98x on the rental exit, mitigated by $90,900 liquidity and the sale exit | Cedar Court section 1 in under 80 words; then fix a weak section 9 | 3 |
| T2 Capital partners and loan sale (new, coverage review) | O2 | Warehouse advance and margin call; data tape and due diligence; reps, warranties and repurchase; pool-level eligibility; Regulation RR (246.4, 246.7) | Maple Run against the Fidelis 2026-RTL1 pool anchors in the Model Credit Policy (max LTC 85.0%; max as-repaired LTV 70%; labelled market, pool-level, illustrative): LTC $340,000 ÷ $400,000 = 0.850000, or 85.0%, at the maximum; LTARV $340,000 ÷ $520,000 = 0.653846, or 65.4%, under 70%. Risk retention, illustrative: a sponsor keeping a 5% vertical interest holds $340,000 × 5% = $17,000 of this loan (246.4(a)). A bank buyer of Birchwood re-tests supervisory LTV: $3,520,000 ÷ $4,400,000 (lesser of cost and value) = 0.800000, or 80.0%, under 85% | Cedar Court against a fictional buyer sheet **[DATA: owner to supply a fictional buyer and warehouse eligibility sheet, 4.5 item 5]**; name each breach and its repurchase exposure | 4 |
| T3 Exceptions | O3 | CORE-EXC-01 to -05; the log entry; layering; the 10% review trigger; board reporting in 12 CFR 34 App. A | Dana Reyes asks for 87.5% LTC (lesson WE3): +2.5 points; required liquidity $35,000; $90,900 is 2.6x; one factor of two needed; decline. Complete the CORE-EXC-02 log for the declined request | Marcus Hale: test all six factors; zero met (lesson P5) | 2 |
| T4 Portfolio fit and participations | O4 | F-CORE-30 after the loan; F-CORE-43 headroom; CORE-CONC-07; participation as a cure; buyer limits (12 U.S.C. 84); bank screening criteria (OCC Bulletin 2006-46) | Birchwood: Indiana ($28,500,000 + $3,520,000) ÷ $123,520,000 = 25.9%, over 25%. Headroom $2,000,000, so sell at least $1,520,000. (The buyer's supervisory LTV re-test moved to T2 and is corrected there to 80.0%: Appendix A values a purchase at the lesser of cost and value, $4,400,000, not the $4,500,000 appraisal) | Cedar Court: North Carolina 24.9%; headroom $5,333,333.33 before Cedar, $193,333.33 to spare | 3 |
| T5 Exit stress | O5 | Take-out sizing; cushion; break-point NCF; deal-file stresses only | Birchwood: committee what-if NCF 10% short gives 1.22x against 1.30x (COM-TRM-09). Deal-file what-if NCF $380,000 sizes the term loan to $3,446,475.69, a $73,524.31 shortfall | Cedar Court: deal-file what-if NCF $500,000 sizes to $4,886,322.54, a $253,677.46 shortfall (Running Deals RD-MF-01 Role 3, item 5) | 2 |
| T6 The committee | O6 | CORE-AUTH-03 roles, votes, veto, minutes, tabling; challenge and dissent; 300-word recap of C2's CORE-AUTH-01 routing (approval outside authority is a planted defect) | Birchwood at committee (lesson WE6): approve on condition of a $1,800,000 participation; Indiana ($28,500,000 + $1,720,000) ÷ $121,720,000 = 24.8% | Critique a set of Birchwood minutes with three planted defects (missing dissent reason, CCO veto of a decline, unlisted condition) | 2 |
| T7 Measuring portfolio loss | O7 | Rating, nonaccrual, charge-off, allowance; CECL scope and dates; collateral-dependent measurement; delinquency versus charge-off data | Cedar Court from C13: rating 5; F-CORE-42 split $290,000 Loss and $4,850,000 Substandard; charge-off $290,000 at title. Show where each number lands: rating report, accrual status, charge-off, allowance | Classify five statements about Birchwood as rating, accrual, charge-off or allowance facts | 1 |
| T8 Critical errors and independent review | O8 | Bible section 3 definition; CORE-AUTH-04; independence and frequency (2020 interagency guidance) | Three findings from the lesson: a credit officer approves $2,400,000 (critical); exit DSCR shown as 1.37x not 1.36x with no change to amount or approver (not critical); a missed OFAC hit on a 10% owner (critical) | Five new findings; classify and route each | 2 |

**Interactive elements (Std 4.05.3).** A loan-tape eligibility checker (replaces the approver router, which C2 now owns); a concentration and headroom calculator (F-CORE-30, -43); an exit-stress slider showing the break-point NCF; a memo builder with section checks; a minutes-critique exercise.

## 6. Assessment plan

Sized for the projected 4.6 credits (section 7, after the coverage review). Spec minimums at 4.6 credits: review 3 × 4 + 2 = 14; exam 5 × 4 + 4 = 24. Our build rule: review 4 × 4.6 = 18.4, rounded up to 19; each exam form at least 6 × 4.6 = 27.6, rounded up to 28 items, and at least 2 per objective.

| Objective | Review questions | Exam Set A | Exam Set B | Critical items (per set) |
| --- | --- | --- | --- | --- |
| O1 Memo | 3 | 4 | 4 | 0 |
| O2 Capital partners | 4 | 5 | 5 | 0 |
| O3 Exceptions | 2 | 4 | 4 | 1 (no exception to OFAC, KYC, LEGAL or CORE-BP rules) |
| O4 Portfolio | 3 | 4 | 4 | 1 (a breached bucket goes to committee) |
| O5 Exit stress | 2 | 3 | 3 | 0 |
| O6 Committee | 2 | 3 | 3 | 1 (approval outside authority, in the minutes critique) |
| O7 Loss measurement | 1 | 2 | 2 | 0 |
| O8 Critical errors | 2 | 3 | 3 | 1 (a missed OFAC or occupancy flag is critical whatever the outcome) |
| **Total** | **19** | **28** | **28** | **4** |

- Four-option multiple choice, one best answer, feedback on every option.
- No true/false or yes/no items. Each form covers all eight objectives.
- O1 is a Create objective. Multiple choice tests memo choices (which section, which pairing, which cite is wrong). The full memo is drafted in the T1 practice exercise and scored against a model answer.
- Practice exercises: 9 scored (one per chunk, plus the T1 section-9 repair).
- Pass mark 80%, with every critical item correct.

## 7. Hour estimate

**Projected countable words:**

| Chunk | Words |
| --- | --- |
| T1 The memo | 3,200 |
| T2 Capital partners and loan sale (replaces "Who approves", 1,800) | 3,000 |
| T3 Exceptions | 2,400 |
| T4 Portfolio and participations | 3,200 |
| T5 Exit stress | 2,400 |
| T6 Committee (plus 300-word routing recap) | 2,500 |
| T7 Measuring portfolio loss | 2,800 |
| T8 Errors and review | 2,000 |
| Practice case narratives | 1,000 |
| Summary and job aid | 1,000 |
| **Total** | **23,500** |

**Questions:** 19 review + 28 exam (one form) + 9 practice exercises = 56.

**Media:** no qualifying video.

**Credit calculation (Std 7.02):**

1. Reading: 23,500 ÷ 180 = 130.556 minutes.
2. Questions: 56 × 1.85 = 103.600 minutes.
3. Video: 0.000 minutes.
4. Total: 234.156 minutes ÷ 50 = 4.683, rounded down to fifths: **4.6 credits**. At 4.6 the build rule gives 19 review and 28 exam items, the counts used.

**Current lesson, for comparison.** 3,862 words (upper bound) and 26 questions (8 practice, 12 quiz, 6 self-check). 3,862 ÷ 180 = 21.456; 26 × 1.85 = 48.100; total 69.556 minutes ÷ 50 = 1.391, so **1.2 credits**.

**Field split estimate.** Finance (T4, T5, the T7 numbers): about 6,000 words, roughly 1.2 credits. Specialized Knowledge: about 3.4 credits. Confirm by content time.

**Bible LD-03.** 234.156 minutes is under the 4-hour (240-minute) module cap, by 5.8 minutes.

## 8. Prerequisites and overlaps

**Prerequisites (Std 3.02.1).** C6 and C8 (Bible section 3). For the depth in this blueprint, C11, C12 and C13 are also needed (T2 uses C11's collateral file; T7 uses C12's and C13's ratings and charge-offs). The owner should add them to the Bible prerequisite column (coverage review, sequence note 3). Learners must already be able to:

- size a loan and find the binding test (C8: F-CORE-19; F-MF-13; F-COM-08);
- analyze a guarantor's liquidity, net worth and experience tier (C6: F-CORE-24 to -27);
- run state-law checks (C10: CORE-PRC-03, CORE-DOC-04);
- rate a loan and split Loss from Substandard (C12, C13: CORE-SVC-08; F-CORE-42).

**Advance preparation:** none.

**Overlaps.**

| Topic | Owner module | C14's limit |
| --- | --- | --- |
| Sizing tests and binding constraint | C8; M3; CM4 | C14 cites results in the memo; it does not re-teach sizing |
| Guarantor analysis | C6 | Section 2 of the memo summarizes it |
| Single-loan rating and REO entries | C12, C13 | C14 aggregates them |
| Capital-markets mechanics (data tapes, reps and warranties, repurchase, risk retention) | C14 owns (new O2, coverage review) | Collateral file delivery is C11 (F6); monthly investor reporting is C12 (S11) |
| Approver routing (CORE-AUTH-01) | C2 owns | 300-word recap in T6 |
| Supervisory LTV table (12 CFR 34 App. A) | C2 owns | C14 applies it to buyer re-tests and exception reporting |
| Exit break-point method | C8 owns | C14 reads it at committee |
| Rating, nonaccrual, charge-off on one loan | C12 owns | C14 aggregates and owns the allowance and expected loss |
| Full file to committee | R6, M6, CM6 capstones | C14 practises each part; capstones combine them |

## Blueprint checks

**Self-check.**

1. Does each objective map to a needs-analysis task? Yes: U9, U10, U11, O6, K1, K2, K3, K4 and K7.
2. Is any new policy figure introduced? No. Regulatory figures (85%, 80%, 100%, 300%, 15% and 10%) are taught as how banks are supervised, not as our limits.
3. Does every exam form reach 75% of objectives? Yes: 8 of 8.
4. Are the counts above the spec minimum? Yes: 19 ≥ 14 review; 28 ≥ 24 exam per form.

**What to look up yourself.**

1. ASC 860-10-40 on participating interests, and FDIC guidance on purchased loan participations. Open them before writing T4.
2. The full *Interagency Guidance on Credit Risk Review Systems* (85 FR 33278). The Federal Register site redirected to a block page; the Fed attachment was read instead.
3. 17 CFR 246.4(a) on risk retention, re-opened before drafting.

**How to check it.**

1. Birchwood supervisory LTV: $3,520,000 ÷ $4,400,000 (lesser of cost and value, Appendix A) = 0.800000, shown as 80.0%. The earlier 78.2% used the appraisal and was wrong.
2. Indiana share: $32,020,000 ÷ $123,520,000 = 0.2592, shown as 25.9%.
3. Credits: 23,500 ÷ 180 + 56 × 1.85 = 234.156; ÷ 50 = 4.683.
4. Open CORE-EXC-02 and -04 in the Model Credit Policy and confirm the corrections in 4.3.
