# C2 blueprint: Credit fundamentals and the loan life cycle

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C2, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Basic (`docs/accreditation/qas-spec.md`) |
| Prerequisites | C1. Advance preparation: none |
| Field of study | Specialized Knowledge |
| Learner | College graduate with basic finance, new to lending |
| Depth target | Upper-undergraduate; early-graduate on credit-risk economics and rating definitions |
| Testing | Multiple choice only: four options, one best answer, feedback on every option |
| Current lesson read | `modules/core/c02/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Needs analysis | `docs/curriculum/needs-analysis.md`, v0, 22 Nov 2026 |
| Primary sources opened | 22 Nov 2026: 12 CFR Part 34, Subpart D, Appendix A (Cornell LII); OCC Bulletin 2006-46 (occ.gov); SR 13-18 Uniform Agreement, attachment 1 (federalreserve.gov); OCC Risk Rating topic page, listing BB 1993-35 and *Rating Credit Risk* (Apr 2001) (occ.gov); OCC Bulletin 2026-56 (occ.gov, via search summary); OCC Bulletin 2023-23 (occ.gov). The Federal Register copy of the 2023 policy statement redirected to a block page |
| Status | v0 blueprint for owner review, 22 Nov 2026 |

## 1. Module purpose

C2 teaches you to frame any loan as a credit decision: judge it on the five Cs, test it against the credit box, route it to the right approver, place it in the loan life cycle and rate its risk. It closes the Basic block (C0-C2) and gives C3-C14 the frame every later skill plugs into.

## 2. Learning objectives

By the end of C2, you will be able to:

| # | Objective | Bloom level | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Apply** the five Cs to a running deal, assigning each fact to one C and separating the primary from the secondary source of repayment. | 3 Apply | U3, O6, U9 (preview) |
| O2 | **Compare** the model credit box with the interagency real estate lending standards, including the supervisory LTV limits and the exception limits. | 4 Analyze | K2 |
| O3 | **Test** a loan against its family's credit-box limits at full precision and identify the binding test. | 3 Apply | U5 (preview), K1, O4 |
| O4 | **Determine** the approver under CORE-AUTH-01 by combining loan size, aggregate sponsor exposure (F-CORE-29), exceptions and committee triggers. | 3 Apply | K1, K2, K3 |
| O5 | **Prepare** a dated life-cycle timeline for a running deal, naming the role, output document and governing rule at each stage. | 3 Apply | O4, O5, F1, F5, S8 (preview) |
| O6 | **Assign** a risk rating under CORE-SVC-07 and CORE-SVC-08 to a loan's facts, citing the regulatory definition that fits. | 3 Apply | S4 |
| O7 | **Explain** why lenders rely on collateral, equity and guaranties rather than price alone, using adverse selection and credit rationing. | 2 Understand | K2, U9 (preview) |

**Bloom mix:** 1 at Understand, 5 at Apply, 1 at Analyze. Six of seven (86%) are Apply or above.

**Coverage review change (22 Nov 2026).** O6 was "Justify ... including the effect of guarantor support" (Evaluate). C12 O5 owns rating justification with guarantor support, so C2 now owns the scale and its definitions only. O7 was an expected-loss and CECL objective. C14 O7 owns that, so C2's O7 now carries the information-economics content (4.1 item 1). See `docs/curriculum/coverage-review.md`.

## 3. Content map

| Obj. | Concepts | Real rules and primary sources | Model-policy rules |
| --- | --- | --- | --- |
| O1 | Five Cs; asset-based versus borrower-based capacity; primary and secondary repayment; adverse selection and moral hazard | Banks' lending policies should set "minimum net worth and debt service coverage standards" and "borrower equity requirements" for CRE [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, "Underwriting standards"; Cornell LII; checked 22 Nov 2026]. Guarantor support is usually a secondary repayment source; it needs both capacity and willingness to pay [VERIFY: OCC Bulletin 2026-56, 10 Nov 2026; occ.gov; checked 22 Nov 2026]. Economics, not law: Akerlof, "The Market for 'Lemons'", *QJE* 1970; Stiglitz and Weiss, "Credit Rationing in Markets with Imperfect Information", *AER* 1981 | CORE-BOR-03; CORE-BOR-04; CORE-BOR-14 |
| O2 | Supervisory limits versus house limits; aggregate exception limits; policy content expected by examiners | Supervisory LTV limits: raw land 65%; land development 75%; commercial, multifamily and other non-residential construction 80%; 1-4 family construction 85%; improved property 85%. Loans above them should total no more than 100% of total capital, and 30% for non-1-4 family loans. They must be identified and reported to the board at least quarterly [VERIFY: 12 CFR Part 34, Subpart D, Appendix A; Cornell LII; checked 22 Nov 2026]. CRE concentration criteria 100% and 300% with 50% growth in 36 months [VERIFY: OCC Bulletin 2006-46, 71 FR 74580, 6 Dec 2006; occ.gov; checked 22 Nov 2026] | CORE-EXC-01 to -05; CORE-CONC-01 to -07; RES-FF-01, -03, -04 |
| O3 | Ratio tests against limits; full-precision comparison; binding test; loan-amount rounding | Course convention: compare at full precision (Course Bible 5.2) | RES-FF-01, -03, -04; RES-GEN-04; CORE-PRC-05; F-CORE-14; F-RES-02, -03, -04 (preview; C8 and R2 teach in full) |
| O4 | Delegated authority; separation of underwriting and approval; exception routing; concentration triggers | Policies should set "origination and approval procedures, by size and type of loan" and review procedures for exception loans [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, "Loan portfolio management"; Cornell LII; checked 22 Nov 2026] | CORE-AUTH-01 to -04; CORE-EXC-01 to -04; CORE-CONC-01; F-CORE-29; RES-GU-01; D-CORE-26 |
| O5 | Eight stages; handoffs between roles; term sheet versus commitment; recourse and carve-outs | Policies should cover "documentation, disbursement, collateral inspection, collection, and loan review" [VERIFY: 12 CFR Part 34, Subpart D, Appendix A; checked 22 Nov 2026] | CORE-BP-01 to -04; CORE-KYC-01; CORE-CLS-03, -06; CORE-DOC-01, -02; COM-BR-07; CORE-SVC-01, -02, -07; CORE-DEF-01 to -06; RES-GEN-11 |
| O6 | Pass, special mention, substandard, doubtful, loss; watch list; default rating on exit cover (guarantor support named only; C12 teaches it) | Substandard: "inadequately protected by the current sound worth and paying capacity of the obligor or of the collateral pledged". Doubtful: full collection "highly questionable and improbable". Loss: "uncollectible and of such little value that their continuance as bankable assets is not warranted" [VERIFY: SR 13-18, attachment 1, 29 Oct 2013; federalreserve.gov; checked 22 Nov 2026]. Special mention: the interagency definition in BB 1993-35, June 1993 [VERIFY: listed on OCC "Risk Rating" topic page; text not opened; open before writing]. Common scale; everything else is pass [VERIFY: OCC Bulletin 2026-56; checked 22 Nov 2026] | CORE-SVC-07; CORE-SVC-08; CORE-SVC-06 |
| O7 | Asymmetric information; adverse selection; moral hazard; credit rationing; collateral, equity and guaranties as screening and incentive devices | Economics, not law: Akerlof, "The Market for 'Lemons'", *QJE* 1970; Stiglitz and Weiss, "Credit Rationing in Markets with Imperfect Information", *AER* 1981. Confirm volume and pages before the lesson cites them. One-sentence pointer: C14 teaches expected loss and CECL | CORE-BOR-03; CORE-BOR-14; RES-FF-03; CORE-DOC-01 |

## 4. Depth targets: what to add, deepen, correct and cut

The current lesson is 1,455 counted words and measures 1.0 credit. A university course on commercial lending or credit risk would cover the items below.

### 4.1 Add

1. **Why credit fails: information economics.** Adverse selection (Akerlof 1970) and credit rationing (Stiglitz and Weiss 1981). Show why lenders use collateral, equity and guaranties rather than price alone. Tie to the FDIC's "technical incompetence" cause of loan problems (needs analysis, S5).
2. **The interagency real estate lending standards** (12 CFR Part 34, Subpart D, Appendix A). Teach the supervisory LTV table, the 100% and 30% exception aggregates and quarterly board reporting. Compare each with our credit box and our CORE-EXC-05 trigger (exceptions above 10% of new loans by count in a quarter). C2 owns this topic (coverage review). C0 previews one figure; C8 and C14 apply the table and do not reteach it.
3. **The 2006 CRE concentration criteria: pointer only.** C14 owns them, beside CORE-CONC-03 to -07. C2 teaches only the sponsor cap (CORE-CONC-01) that routing needs.
4. **The regulatory rating definitions**, quoted. SR 13-18 for substandard, doubtful and loss. BB 1993-35 for special mention. The OCC *Rating Credit Risk* booklet (April 2001) for the pass grades. Name OCC Bulletin 2026-56 on guarantor support in one sentence; C12 O5 teaches its effect on a rating.
5. **Expected loss and the allowance: pointer only.** One sentence: ratings feed expected loss and the allowance, which C14 O7 teaches (needs analysis K4). Item 1 above becomes the T7 chunk for O7.
6. **Alternative credit frameworks.** Name one other mnemonic (for example CAMPARI) and show it maps onto the five Cs. Course researcher to source it before use.
7. **Springing recourse: one sentence.** Say that a carve-out can turn a non-recourse loan into full recourse. C9 owns the doctrine and *Cherryland*; C2 does not teach the case.

### 4.2 Deepen

1. **T2 credit box.** Today it is one table on Maple Run. Add the bank comparison and a second family (Cedar Court, multifamily bridge). Teach that a supervisory LTV is on value and an RTL LTC is on cost, so the two are not the same test. For a purchase, Appendix A "value" is "the lesser of the actual acquisition cost or the estimate of value" [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, "Value"; Cornell LII; checked 22 Nov 2026 (coverage review)].
2. **T4 routing.** Name exception logging (CORE-EXC-02) and the two-exception cap (CORE-EXC-04) as routing facts only. **C14 O3 owns** the full log entry and layering (coverage review, 22 Nov 2026); C2 does not complete a log.
3. **T6 ratings.** Add a worked default case under CORE-SVC-08. The guarantor-support case moves to C12 (coverage review).

### 4.3 Correct

1. **The five Cs source.** T1 cites USDA guaranteed-loan rules (7 CFR 5001.202). That is a farm-and-rural program, outside our scope. Replace with the OCC CRE handbook and 12 CFR Part 34 Appendix A, or label USDA as an illustration only.
2. **Leverage display.** The lesson shows 80.00%, 85.00%, 65.38% and 87.18%. Course Bible 5.2 sets leverage at one decimal: 80.0%, 85.0%, 65.4%, 87.2%. Tests stay at full precision.
3. **Rating definitions** cite only OCC Bulletin 2026-56, which is about guarantor support. Add the definition sources (SR 13-18; BB 1993-35).
4. **Practice 3 answer** offers a 2.18-point exception but omits CORE-EXC-02. Say that the exception needs a log entry and two compensating factors, and route it. C14 practises completing the log.
5. **Objective verbs.** "Explain", "Check", "Sequence" and "Assign" give one Apply objective at most by LD-01's table. The new set has six of seven at Apply or above.
6. **Quiz items break QAS rules.** Set A items 6 and 7 and Set B item 6 are yes/no. All items are open response. Rebuild as four-option multiple choice.

### 4.4 Cut or move

1. **Full exit-cover arithmetic under CORE-SVC-08.** Keep the rule and one case; C12 works the numbers (the lesson already defers this).
2. **Recourse detail** (carve-out list, burn-off). Keep one paragraph; C9 owns it.

## 5. Teach sequence

Worked examples use RD-RES-01 Maple Run; practice uses RD-MF-01 Cedar Court and RD-COM-01 Birchwood Plaza (LD-08). Each chunk ends with scored review questions.

| # | Chunk (objective) | Words | Worked example | Practice | Review Qs |
| --- | --- | ---: | --- | --- | ---: |
| T1 | Why loans fail, and the two ways out (O1) | 2,000 | Maple Run's two ways out: the sale at $520,000 ARV or the DSCR refinance (primary); Dana Reyes's and Sam Okafor's full-recourse guaranty (secondary, CORE-DOC-01) | Birchwood Plaza: name its primary and secondary sources | 2 |
| T2 | The five Cs (O1) | 2,600 | Maple Run through the five Cs. Capital, step by step (F-RES-09): $300,000 + $9,000 + $5,100 − $240,000 = $74,100. Character: 6 counted deals, Tier 2 (CORE-BOR-15, -16); 2019 lien paid and released | Exercise 1 (sort): twelve Cedar Court facts into the five Cs | 2 |
| T3 | The credit box versus the interagency standards (O2, O3) | 3,200 | Maple Run, Tier 2 caps 85% / 85% / 70% (RES-FF-01, -03, -04). Purchase advance: $240,000 ÷ $300,000 = 0.800000, or 80.0%. LTC (F-RES-04): $340,000 ÷ ($300,000 + $100,000) = 0.850000, or 85.0%, at the cap. LTARV (F-RES-02): $340,000 ÷ $520,000 = 0.653846, or 65.4%. Loan size $340,000 is within $75,000 to $2,000,000 (RES-GEN-04). Binding test: LTC. Then set beside the 85% supervisory limit for 1-4 family construction and say why the bases differ | Rehab budget cut to $90,000 with the loan at $340,000: LTC $340,000 ÷ $390,000 = 0.871795, or 87.2%, over 85%. Max at the cap: 85% × $390,000 = $331,500, rounded down to $331,000 (CORE-PRC-05) | 2 |
| T4 | Authority, exceptions and concentration (O4) | 3,200 | Maple Run: $340,000, Residential, no exceptions. Exposure (F-CORE-29): $340,000 + $0 open = $340,000. Under $1,000,000 and the Tier 2 cap of $7,500,000 (CORE-CONC-01), with $7,160,000 headroom. Senior underwriter, not the underwriter of record (CORE-AUTH-01) | Exercise 2 (build-up): route Cedar Court ($5,140,000; Tier 1 cap $3,000,000; over by $2,140,000) and Birchwood Plaza ($3,520,000; over by $520,000): both committee | 2 |
| T5 | The life cycle and handoffs (O5) | 2,600 | Maple Run timeline: screen and term sheet before 15 Jan 2027; closing 15 Jan 2027; draws in months 2, 4, 6 and 8; rehab complete month 10; lease month 11; maturity 15 Jan 2028, extension to 15 Apr 2028 for $340,000 × 0.50% = $1,700 (F-CORE-22); DSCR refinance month 14 starts a new loan at stage 1 | Order six documents and name the role that owns each | 2 |
| T6 | Risk ratings (O6) | 3,100 | (1) Watch date: 90 days before 15 Jan 2028 is 17 Oct 2027 (15 days of January + 31 of December + 30 of November + 14 of October = 90). Unconfirmed exit: at least 2 (CORE-SVC-07). (2) Default what-if (RD-RES-01, Role 3, item 6): the 1 Aug payment is 45 days late, a payment default. Extra default interest: ($133.44 − $89.69) × 45 = $43.75 × 45 = $1,968.75 (F-CORE-05, CORE-SVC-03). Rating 4 if exit cover is 1.00 or more (CORE-SVC-08) [DATA: as-is value at month 7 to compute exit cover] | Exercise 3 (scenario): Birchwood Plaza month 9 tenant notice; assign the rating and cite the definition that fits (C12 later adds Dana Whitlow's guaranty) | 3 |
| T7 | Why price alone cannot clear credit risk (O7) | 1,400 | Maple Run: the sponsor puts in $74,100 of capital (T2, F-RES-09) and two guarantors sign full recourse (CORE-DOC-01). Label each a screen (it deters weak sponsors) or an incentive (it makes default costly). Explain why a higher rate would instead draw riskier borrowers (Stiglitz and Weiss). No new number | Classify six Birchwood Plaza structure features as screening or incentive devices | 1 |
| — | Job aid, "What to look up yourself", "How to check it" | 900 | — | — | Self-check: last 3 review Qs |
| | **Total counted words** | **19,000** | | | **14** |

**Formula gap (moved).** The Formula Library has no expected-loss formula, and the Model Credit Policy sets no PD values. Expected loss now sits in C14 O7, which carries this open item (C14 §4.5 item 1). C2 no longer needs the formula.

The self-check is the last block of review questions (one each on O3, O4 and O6), scored and counted once.

## 6. Assessment plan

Projected credits: 3.4 (section 7). QAS minimums at 3.4 credits: 10 review questions and 18 exam items. Build rule: review = 4 × 3.4 = 13.6, rounded up to 14. Each exam form = the greater of 6 × 3.4 = 20.4 (rounded up to 21) and 2 per objective (14) = 21.

| Obj. | Review Qs | Exam Set A | Exam Set B | Critical items (per form) |
| --- | ---: | ---: | ---: | --- |
| O1 | 4 | 3 | 3 | — |
| O2 | 1 | 3 | 3 | — |
| O3 | 1 | 3 | 3 | 1: a wrong sizing result that changes the loan amount |
| O4 | 2 | 4 | 4 | 2: approval outside authority; underwriter approving own loan |
| O5 | 2 | 2 | 2 | — |
| O6 | 3 | 4 | 4 | 1: maturity within 90 days with no confirmed exit is at least a 2 |
| O7 | 1 | 2 | 2 | — |
| **Total** | **14** | **21** | **21** | **4** |

O1 has four review questions because T1 and T2 both teach it.

- Exam covers 7 of 7 objectives (100%).
- Critical items follow the Course Bible §3 critical-credit-error list.
- Pass mark 80%, and every critical item correct. Two parallel forms; no item repeats a review question.

## 7. Hour estimate

**Inputs.** Counted words 19,000. Review questions 14, including the 3 self-check items. Scored interactive exercises 3. One exam form of 21 items (Set B is a retake form). Audio or video 0 minutes.

**Counting rule** (`docs/accreditation/qas-spec.md`, "Counting items for credits"). Only scored items count: review questions, scored interactive exercises and one exam form. The other practice tasks in section 5 are open-answer and are excluded, as is the OJT task. Applying the rule changes no count here: 14 + 3 + 21 = 38.

**Calculation (Std 7.02.5-.7).**

1. Words: 19,000 ÷ 180 = 105.556 minutes.
2. Questions: (14 + 3 + 21) × 1.85 = 38 × 1.85 = 70.300 minutes.
3. Media: 0.000 minutes.
4. Total: 105.556 + 70.300 + 0.000 = 175.856 minutes.
5. Credits: 175.856 ÷ 50 = 3.517, rounded down to fifths = **3.4 credits**.

**Margin.** The module clears 3.4 by 5.86 minutes, about 1,050 words. Keep counted words at 17,950 or more with this question count.

**Against the baseline.** Today: 1,455 words, 23 questions, 1.0 credit. The Course Bible claims 2 hours.

## 8. Prerequisites and overlaps

**Prerequisites from C1.** The business-purpose test and the CORE-BP rules (stage 1 screening); CORE-EXC-03 (no exceptions to business-purpose, KYC or OFAC rules). From C0: product families, rule and formula IDs.

| C2 topic | Taken further in | C2 limit |
| --- | --- | --- |
| LTV, LTC, LTARV, DSCR formulas | C3 (math), C8 (sizing), R2, M3, CM4 | Ratios against limits; no sizing build |
| Character and capital: credit, liquidity, net worth, tiers | C6 | Assign facts to a C; no F-CORE-24 to -27 work |
| Recourse, guaranties, carve-outs | C9, C10 | One paragraph; one case named |
| Servicing reviews, exit cover, watch list | C12 | Rule and one case |
| Rating justification with guarantor support; watch list; accrual | C12 (O5 owns) | Scale, definitions and one assignment |
| Default and loss severity | C13 | Not worked in C2 |
| Approver routing (CORE-AUTH-01, F-CORE-29) | C2 owns (O4); C6, C11 and C14 apply it without reteaching | Full routing taught here |
| Portfolio concentration (OCC 2006-46; CORE-CONC-03 to -07), credit memo, committee | C14 | Sponsor cap only; route and name the memo; no memo writing |
| Expected loss, CECL, loan review | C14 (O7, O8) | One sentence |

## Self-check

1. Six of seven objectives at Apply or above, each mapped to needs-analysis tasks. Yes.
2. Every number from the Running Deals tab or the Formula Library: $74,100; $340,000; $400,000; $520,000; $7,500,000; $5,140,000; $3,520,000; $1,700; $133.44; $89.69; $1,968.75. Yes.
3. Any invented limit or formula? No. The expected-loss formula is flagged as missing, not created.

## What to look up yourself

1. BB 1993-35, the interagency special mention definition. The OCC topic page lists it; I did not open the text.
2. The full text of OCC Bulletin 2026-56. I read it through a search summary.
3. The volume and page cites for Akerlof (1970) and Stiglitz and Weiss (1981).
4. The 12 CFR Part 34 Appendix A definition of "value" for construction loans.
5. The as-is value of Maple Run at month 7, for the CORE-SVC-08 exit-cover example. It is not in the Running Deals tab.

## How to check it

1. Recompute section 7: `=ROUNDDOWN(((19000/180)+(38*1.85))/50*5,0)/5` should show 3.4.
2. Count back 90 days from 15 Jan 2028 on a calendar. You should land on 17 Oct 2027.
3. Open SR 13-18 attachment 1 and confirm the three quoted definitions.
