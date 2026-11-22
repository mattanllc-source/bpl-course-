# C12 blueprint: Servicing, draws and asset management

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C12, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Intermediate (`docs/accreditation/qas-spec.md`) |
| Field of study | Specialized Knowledge, with Finance for the billing, cap, sweep and payoff math (Std 7.01.1). Split estimate in section 7 |
| Learner | College graduate with basic finance, new to lending. Target depth: upper-undergraduate to early-graduate |
| Testing | Multiple choice only: four options, one best answer, feedback on every option |
| Lesson read | `modules/core/c12/lesson.md`, C12-lesson-v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Sources used | Model Credit Policy, Formula Library, Running Deals, State Law Table (all 22 Nov 2026 snapshots); `docs/curriculum/needs-analysis.md` v0 |
| Status | v0 draft for owner review, 22 Nov 2026. Lesson not changed |

## 1. Module purpose

C12 builds the asset manager's monthly job: fund draws safely, bill and collect correctly, watch reports, covenants and exits, and rate every loan. It follows C11 (closing and boarding) and hands any loan in payment default to C13.

## 2. Learning objectives

By the end of C12, you will be able to:

| # | Objective | Bloom | Needs-analysis tasks | Main rule and formula IDs |
| --- | --- | --- | --- | --- |
| O1 | **Decide** whether to fund a draw request by calculating the draw and the in-balance shortfall and confirming each draw condition | 5 Evaluate | S2; U6 (partial); F4 (date-down) | CORE-SVC-05; RES-FF-08, -09; MF-BR-10; COM-BR-05; CORE-CLS-06; F-RES-06, -18, -25 |
| O2 | **Calculate** a monthly interest bill, a late fee and a rate-cap payment on Actual/360, to the cent | 3 Apply | S1, S6 | CORE-CLS-04; CORE-SVC-04; MF-BR-09; COM-BR-03; D-CORE-27; F-CORE-01, -05 |
| O3 | **Evaluate** an extension request against its family tests, price it on the commitment, and test the exit under the deal-file stress | 5 Evaluate | S5, U10 | CORE-SVC-01, -02; RES-FF-11; MF-BR-11; COM-BR-01, -02; F-CORE-22; F-MF-12, -20; F-COM-10 |
| O4 | **Analyze** a reporting package for late items, covenant breaches and cash-management triggers, and calculate any sweep | 4 Analyze | S3 | CORE-SVC-06; RES-GEN-11; D-CORE-22; COM-GEN-12; F-COM-19 |
| O5 | **Justify** a risk rating, a watch-list action and the regulatory accrual status of a loan from its facts | 5 Evaluate | S4; K4 (partial) | CORE-SVC-07, -08; D-CORE-23; F-CORE-42 |
| O6 | **Distinguish** the lender's rights and the servicer's steps after a casualty loss, from claim to the restore-or-repay decision | 2 Understand | S7 | CORE-INS-01, -03, -04 (no proceeds rule yet: see section 4.5) |
| O7 | **Calculate** a payoff and sequence the release steps that follow it | 3 Apply | S8, F5 | F-CORE-32; D-CONV-02; RES-FF-12; MF-BR-14; CORE-CLS-05 |
| O8 | **Prepare** a monthly investor remittance and loan-level performance report for a serviced loan from its billing, payment and rating records | 3 Apply | S11; K7 (partial) | CORE-SVC-06, -07; F-CORE-01, -05 (no remittance or servicing-fee rule yet: section 4.5 item 6) |

**Bloom mix.** Understand 1, Apply 3, Analyze 1, Evaluate 3. Seven of eight (88%) are Apply or above.

**Coverage review change (22 Nov 2026).** O8 is new. Task S11 (investor reporting) had no objective in any module. C12 is its home because it uses the servicing records C12 already builds. O5 now also owns guarantor support in a rating (OCC Bulletin 2026-56), moved from C2.

**Note for the owner.** Bible LD-02 says core modules aim at levels 2-3. This blueprint follows the depth decision (upper-undergraduate to early-graduate) and reaches level 5. LD-02 needs updating to match.

## 3. Content map

"Opened" means opened on 22 Nov 2026 for this blueprint, or cited in the lesson or policy with that check date. Every legal statement keeps its tag in the lesson.

| Obj | Concepts | Real rules and primary sources | Model-policy rules |
| --- | --- | --- | --- |
| O1 | Draw methods (percent complete, line item); work in place versus invoices; contingency control; in-balance test; lien waivers (conditional, unconditional); title date-down; draw insured by pending disbursement | State mechanics' lien priority: ORC 1311.13 and 1311.14 (OH); G.S. 44A-11.1 and 44A-11.2(m) (NC); IC 32-28-3-16 (IN) [VERIFY: FindLaw state code mirrors, official sites blocked; checked 22 Nov 2026]. Examiner expectation that inspections show a draw fits the stage of work, with funds left to finish: OCC *Comptroller's Handbook: Commercial Real Estate Lending*, v2.0, Mar 2022, "Monitoring Progress of Construction Projects" (needs-analysis S4) | CORE-SVC-05; RES-FF-06, -08, -09; MF-BR-10; COM-BR-05; CORE-CLS-06; D-CORE-20; CORE-INS-04. F-RES-06, -18, -25 |
| O2 | Actual/360 billing in arrears; the funding day counts, the payoff day does not; late fee on the installment only; default interest (preview of C13); SOFR and Term SOFR; caplets; cap strike, notional, expiry; counterparty rating | SOFR is "a broad measure of the cost of borrowing cash overnight collateralized by Treasury securities", published by the New York Fed each business day at about 8:00 a.m. ET (newyorkfed.org, opened 22 Nov 2026). Late-fee limits per state: State Law Table rows SLT-OH-01, SLT-NC-01 (G.S. 24-10.1: 4% after 15 days, for 24-1.1 loans only), SLT-IN-01 [VERIFY: State Law Table; checked 20 Nov 2026]. Cap day count Actual/360 (Wells Fargo confirmation template, cited in Running Deals, checked 19 Nov 2026): market practice | CORE-CLS-04; CORE-SVC-03, -04; MF-BR-09; COM-BR-03; D-CORE-27; D-CONV-02. F-CORE-01, -05 |
| O3 | Extension as a conditional option; family tests; fee on commitment; the cap extension; refinance (exit) risk near maturity; sensitivity of take-out sizing to NCF and rate | No statute. Regulator view of refinance risk near maturity: OCC Bulletin 2024-29, *Commercial Lending: Refinance Risk*, 3 Oct 2024, as cited in CORE-SVC-07 [VERIFY: occ.gov; checked 22 Nov 2026 (Gate 1 review)]. Interagency *Policy Statement on Prudent CRE Loan Accommodations and Workouts*, 30 Jun 2023 (OCC Bulletin 2023-23, 29 Jun 2023; Fed SR 23-5 attachment, opened 22 Nov 2026): Section II on short-term accommodations | CORE-SVC-01, -02, -07; RES-FF-11; MF-BR-09, -11; COM-BR-01, -02, -03. F-CORE-22; F-MF-12, -20; F-COM-10 |
| O4 | Reporting calendar; reporting default after written notice; covenant tests; springing lockbox; sweep and leasing reserve; insurance and tax tracking | No statute. Credit administration of income property: OCC CRE Handbook, "Income-Producing Property Credit Administration" (S4). Loan-agreement reporting timelines: market clause samples (cited in CORE-SVC-06) | CORE-SVC-06; RES-GEN-11; D-CORE-22; COM-GEN-12; CORE-INS-01, -02. F-COM-19 |
| O5 | The interagency scale (pass, special mention, substandard, doubtful, loss); pass split into watch; exit cover; collateral-dependent loans; the Loss and Substandard split; nonaccrual and return to accrual | Shared scale: OCC Bulletin 2026-56, 10 Nov 2026 [VERIFY: checked 22 Nov 2026]. Special mention and substandard definitions: OCC *Comptroller's Handbook, Rating Credit Risk* [VERIFY: page cite, see 4.3; checked 22 Nov 2026]. Collateral-dependent CRE: the excess over fair value less costs to sell is loss; the rest "no more severely than substandard"; Section V and Appendix 5 of the 2023 Policy Statement (opened 22 Nov 2026). Return to accrual "generally would be a minimum of six months" of sustained repayment: Section VI.B (opened 22 Nov 2026). Nonaccrual at 90 days past due unless "well secured and in the process of collection": FFIEC Call Report instructions, Glossary and Schedule RC-N [VERIFY: FDIC-hosted Call Report instructions found by search; open the current glossary; checked 22 Nov 2026] | CORE-SVC-07, -08; D-CORE-23; F-CORE-42. No accrual rule exists in the model policy (section 4.5) |
| O6 | Lender as mortgagee and loss payee; the standard mortgagee clause; claim adjustment; restore or repay; holding proceeds as a draw; builder's risk during rehab; flood | No statute applies to a non-bank lender directly. Flood: 42 USC 4012a(b) binds regulated lenders only, as recorded in CORE-INS-01 and -03 [VERIFY: checked 20 Nov 2026]. Mortgagee-clause and restoration practice: Fannie Mae Multifamily Guide insurance chapters (cited in CORE-INS-01, 16 Nov 2026), market practice | CORE-INS-01, -03, -04; CORE-SVC-05 (draw controls reused for restoration). Proceeds handling: owner decision needed |
| O7 | Payoff statement; per diem; exit fee and waiver; release of lien; escrow refund; closing the trailing-document log | State deadlines to record a satisfaction (for example ORC 5301.36 and G.S. 45-36.9) could not be opened: both sites refused access on 22 Nov 2026. No legal statement is made until they are opened | F-CORE-32; D-CONV-02; RES-FF-12; MF-BR-14; CORE-CLS-05; CORE-INS-02 |

## 4. Depth targets

The current lesson is a sound checklist course. It reads at roughly the level of a new-hire procedure manual. A university course in real estate credit administration would add the items below.

### 4.1 Add (new content)

1. **Late fees and payment application (S1).** CORE-SVC-04 is not taught. Add the 5% installment fee, the 10-day grace period, the bar on charging it on the balloon, and the state caps. Worked numbers are in section 5, T4.
2. **Nonaccrual and accrual (K4).** Add the Call Report 90-day rule, the "well secured and in the process of collection" exception and the six-month return-to-accrual test. Teach how rating, accrual and charge-off differ. The model policy has no accrual rule, so this is taught as the bank-buyer and examiner view.
3. **Casualty and insurance proceeds (S7).** The needs analysis names C12 as the home. Teach the claim sequence, the standard mortgagee clause, and the restore-or-repay choice. Numeric rules wait for an owner decision (4.5).
4. **Exit stress at the extension decision (U10).** Use the deal-file stresses already in Running Deals: Cedar Court NCF $500,000 and Birchwood NCF $380,000. No new stress sizes are invented. Apply C8's break-even method; C8 owns it.
8. **Investor reporting and remittance (S11, new O8, T11).** What a loan buyer, warehouse lender or trust receives each month: collections, balance, paid-to date, delinquency status, rating and watch-list flag, and the remittance date. Teach the CREFC Investor Reporting Package as the CMBS market standard, as a look-up (the site returned HTTP 403 in the needs analysis). The model policy has no remittance, servicing-fee or reporting-deadline rule, so the worked example shows gross collections only (4.5 item 6).
5. **Rate-cap life cycle (S6).** Add cap expiry tracking, the cap-extension condition (MF-BR-11), counterparty rating at purchase (MF-BR-09: A / A2) and what servicing does if the cap lapses.
6. **Release after payoff (S8, F5).** Add the release sequence and a "look up yourself" item on state satisfaction deadlines.
7. **Market context data.** FRED series DRCRELEXFACBS (delinquency rate on CRE loans excluding farmland, all commercial banks): 1.53% in Q2 2026. FRED CORCREXFACBS (charge-off rate, same base): 0.14% in Q2 2026. Both from the Federal Reserve's "Charge-Off and Delinquency Rates" release, updated 25 Aug 2026 (opened 22 Nov 2026).

### 4.2 Deepen (existing content, more rigour)

1. **Draw administration.** Compare percent-complete draws (F-RES-18) with line-item draws against a schedule of values. Explain stored materials and retainage as market concepts, with no policy figures. Show why "interest on drawn funds only" (RES-FF-08) changes the per diem after each draw.
2. **Lien priority doctrine.** Move from "liens can rank ahead" to how each deal state decides it. Ohio's construction-mortgage rule (ORC 1311.14), North Carolina's lien agent (G.S. 44A-11.1, 44A-11.2(m)) and Indiana's waiver rule (IC 32-28-3-16(b)) are already tagged in the lesson. Link each to why CORE-CLS-06 insures each draw by date-down. **C12 owns this law** (coverage review, 22 Nov 2026); add relation-back risk, moved from C9. C9 teaches only the title-commitment side.
3. **Risk rating as evidence.** Teach the examiner's three tests: repayment capacity, guarantor support and collateral. Use the 2023 Policy Statement's guarantor test: "the financial ability, the demonstrated willingness" to support the loan (Section IV, opened 22 Nov 2026). Add OCC Bulletin 2026-56 on guarantor support: it more often yields special mention, or prevents doubtful or loss, than it supports a pass [VERIFY: OCC Bulletin 2026-56, 10 Nov 2026; occ.gov, read via search summary for the C2 blueprint; open the full text before writing]. **C12 owns rating justification** (coverage review); C2 teaches the scale and definitions; C13 re-rates at default.
4. **Cash management.** Distinguish hard, soft and springing lockboxes as market terms. Show the sweep on the real balance after draws, not only the closing balance, once the deal file gives monthly draw amounts.
5. **Extension economics.** Show that an extension is an option the borrower holds and the lender prices. Compare the 0.50% fee with the cost of a failed exit.

### 4.3 Correct

1. **Cap extension statement is too broad.** T2 says servicing checks the cap is "extended with any loan extension". That holds for multifamily (MF-BR-09, MF-BR-11). COM-BR-03 requires a cap for the initial term only, and COM-BR-02 has no cap test. Either limit the sentence to multifamily, or the owner adds a commercial cap-extension rule.
2. **OCC page cite.** T5 cites *Rating Credit Risk* "p. 15". CORE-SVC-08 cites "pp. 16-17, updated Mar 2025". Reconcile against the handbook and use one cite.
3. **Draw source.** T1 tags Built (2017, industry). CORE-SVC-05 cites Built (2025). Replace the lesson tag with the OCC CRE Handbook section in the content map, and keep Built as market practice only.
4. **Hours.** The lesson claims 3 hours (180 minutes). The QAS word-count formula gives far less for the current text (section 7: about 1.2 credits). Hours must come from the formula, not the timing plan.
5. **Quiz format.** Items are open response, not four-option multiple choice. Several are yes/no, which a QAS final exam bars (Std 6.01.2): Set A items 6 and 12, Set B items 2 and 3. Rewrite all as multiple choice with feedback on every option.
6. **Running Deals discrepancy to fix at source (not in C12 text).** RD-COM-01 Role 3, item 5 tests the month-24 extension at 8.25%. COM-BR-02 uses the F-MF-12 basis: the higher of note rate and strike + spread. From month 18 the note rate is 8.75% (D-CORE-27). The test becomes $380,000 ÷ ($3,520,000 × 8.75% = $308,000) = 1.23x, still a pass. The owner must correct the Running Deals tab before C12 uses this case.

### 4.4 Cut or move

1. **Timing plan with fixed minutes.** Replace with the credit worksheet in section 7.
2. **OJT task.** QAS credit cannot rest on an unscored workplace task. Keep it as an optional, non-credit activity after the exam, or turn steps 1-3 into scored practice exercises.
3. **Self-review table and alignment matrix.** Keep them, but in the review log, not learner-facing text. They are excluded from the word count anyway.

### 4.5 Owner decisions needed (no limit invented)

| # | Gap | Why it blocks a worked example |
| --- | --- | --- |
| 1 | No rule on casualty or condemnation proceeds: who holds them, when they fund restoration, when they pay down the loan | O6 can only be taught at Understand level until a rule exists |
| 2 | No accrual or nonaccrual rule in the model policy | O5 teaches the Call Report rule as context only |
| 3 | No payment-application order (fees, default interest, interest, principal) | T4 cannot show how a partial payment is applied |
| 4 | No commercial cap-extension rule (see 4.3 item 1) | T5 must state the multifamily rule only |
| 5 | No lien-release deadline rule | T10 can only point to state law |
| 6 | No investor remittance rule: servicing-fee strip, remittance date or report deadline | O8 shows gross collections and status only; no net remittance is computed |

## 5. Sequence

Each chunk has a worked example on a running deal and a practice task on a second deal (LD-08). Review questions (RQ) sit after the chunk they test.

| Chunk | Objective | Teach | Worked example (running deal) | Practice | RQ |
| --- | --- | --- | --- | --- | --- |
| T1 Boarding and the servicing file | O2, O7 | What servicing receives from closing (CORE-CLS-05); the first bill after prepaid interest (CORE-CLS-04) | Maple Run, funded 15 Jan 2027: prepaid interest for 15-31 Jan was $1,161.67 (Running Deals). The first regular bill covers February: $240,000 × 10.25% ÷ 360 × 28 = $1,913.33 (F-CORE-01) | Cedar Court: list the boarding items and the first bill date | 1 |
| T2 Draws I: what we pay for | O1 | Work in place, percent complete, the 90% cap, one draw per 30 days (RES-FF-09; F-RES-06, -18); the CORE-SVC-05 checklist | Maple Run draws, months 2-10 (lesson WE1; Running Deals table): $30,000, $25,000, $20,000, $15,000 and the final $10,000 | Cedar Court month 9: total capex funded becomes $400,000 (MF-BR-10) | 2 |
| T3 Draws II: budget, balance and liens | O1 | Contingency control; the in-balance test (F-RES-25); lien waivers; date-down and pending disbursement (CORE-CLS-06; D-CORE-20); state lien priority | Maple Run month 7: $8,000 overrun inside $9,000 contingency; F-RES-25 = $0. What-if $12,000 overrun: shortfall $3,000, deposited before the next draw (lesson WE2) | Birchwood: a TI/LC draw with an unsigned lease. Decide (COM-BR-05) | 2 |
| T4 Billing, late fees and default interest | O2 | Actual/360 in arrears; 31-day months; late fee on the installment only (CORE-SVC-04); state caps; default interest preview (CORE-SVC-03) | Maple Run, 1 Aug installment for July on $315,000: $315,000 × 10.25% ÷ 360 × 31 = $2,780.31. Paid 45 days late: late fee 5% × $2,780.31 = $139.02 (CORE-SVC-04). SLT-OH-01 finds no business-loan cap. Default per diem $133.44 against $89.69 normal (Running Deals Role 3, item 6) | Cedar Court: late fee and the NC check (SLT-NC-02: exempt loan under G.S. 24-9) | 2 |
| T5 Rate caps | O2 | How a cap pays; Actual/360 basis; strike and test rate (F-MF-12); expiry, extension and counterparty checks (MF-BR-09, -11; COM-BR-03) | Birchwood month 18: interest $25,229.17, cap $1,441.67, net $23,787.50 (lesson WE4) | Cedar Court month 10: $35,550.00 interest, $2,962.50 cap, $32,587.50 net | 2 |
| T6 Monitoring and cash management | O4 | The CORE-SVC-06 calendar; reporting default after notice; the RES-GEN-11 lease check; springing lockbox and sweep (COM-GEN-12; F-COM-19) | Birchwood month 9: 21.4% tenant gives notice; sweep starts. What-if sweep on the closing balance: $2,934.17 a month (lesson WE6) | Cedar Court: rent roll still missing on day 60 | 2 |
| T7 Maturity, extension and exit stress | O3 | Extension tests by family; fee on commitment (F-CORE-22); exit sizing (F-MF-20, F-COM-10); the deal-file stress cases | Maple Run month 12: fee $1,700.00; one 3-month extension. Cedar Court month 24: debt yield $520,000 ÷ $5,140,000 = 10.12%; fee $25,700.00. Exit what-if from Running Deals: NCF $500,000 sizes to $4,886,322.54, a $253,677.46 shortfall | Birchwood month 24 what-if: NCF $380,000. Test COM-BR-02 at 8.75% after the Running Deals fix (4.3 item 6): 1.23x, pass; fee $8,800.00 | 1 |
| T8 Risk rating, watch list and accrual | O5 | The interagency scale; CORE-SVC-07 and -08; exit cover; the six-month upgrade; nonaccrual (Call Report) versus rating versus charge-off | Maple Run ratings by month (lesson WE7). Exit-cover loan: $1,058,000 ÷ $1,020,000 = 1.0373; a payment default makes it a 4 | Cedar Court at months 10 and 24 | 2 |
| T9 Casualty and insurance proceeds | O6 | Mortgagee and loss payee (CORE-INS-01); claim steps; builder's risk during rehab (CORE-INS-04); restore or repay; restoration funded through draw controls (CORE-SVC-05) | Maple Run month 5 what-if: a kitchen fire during rehab. Walk the steps only, with no dollar rule until owner decision 4.5 item 1 | Birchwood: hail damage to the roof after capex. Order the steps | 1 |
| T11 Investor reporting (new, coverage review) | O8 | Loan-level monthly report; remittance; delinquency and rating fields; CREFC IRP as the market standard (look-up) | Maple Run February 2027: interest billed and collected $240,000 × 10.25% ÷ 360 × 28 = $1,913.33 (F-CORE-01; as T1); balance $240,000; paid to 28 Feb 2027; current; rating as T8. Gross collections only (4.5 item 6) | Cedar Court month 10: build the same report line from T5's $35,550.00 interest bill | 2 |
| T10 Payoff and release | O7 | Payoff statement (F-CORE-32); payoff day excluded (D-CONV-02); exit fee and waiver; release, escrow refund, trailing log closed (CORE-CLS-05) | Maple Run refinance payoff, 10 days: $340,968.06 (lesson WE8) | Cedar Court month 27: $5,177,265.00 with the exit fee; $5,151,565.00 waived (lesson P6) | 1 |

**Interactive elements (Std 4.05.3).** A draw calculator (F-RES-18, -25), an Actual/360 billing calculator with a cap line, a rating decision tree, and a drag-and-drop draw checklist. Each must pass Bible LD-09 accessibility.

## 6. Assessment plan

Sized for the projected 4.4 credits (section 7, after the coverage review added O8). Spec minimums at 4.4 credits: review 3 × 4 + 1 = 13; exam 5 × 4 + 3 = 23. Our build rule: review 4 × 4.4 = 17.6, rounded up to 18; each exam form at least 6 × 4.4 = 26.4, rounded up to 27 items, and at least 2 per objective; no overlap with review questions.

| Objective | Review questions | Exam Set A | Exam Set B | Critical items (per set) |
| --- | --- | --- | --- | --- |
| O1 Draws | 3 | 4 | 4 | 1 (in-balance shortfall) |
| O2 Billing, late fees, caps | 3 | 4 | 4 | 0 |
| O3 Extensions and exit | 2 | 5 | 5 | 1 (family test failed) |
| O4 Reporting and sweep | 2 | 3 | 3 | 1 (sweep trigger) |
| O5 Rating and accrual | 3 | 4 | 4 | 1 (payment default rated 4, not 3) |
| O6 Casualty | 1 | 2 | 2 | 0 |
| O7 Payoff and release | 2 | 3 | 3 | 0 |
| O8 Investor reporting | 2 | 2 | 2 | 0 |
| **Total** | **18** | **27** | **27** | **4** |

- All items are four-option multiple choice with one best answer. Every option has feedback that cites a rule or formula ID.
- No true/false or yes/no items. Rewrite the current yes/no items as "which action" or "which amount" items.
- Each exam form covers all eight objectives (100%, above the 75% minimum).
- Pass mark 80%, and every critical item correct (qas-spec decisions).
- Practice exercises: 9 scored exercises, one per chunk T2-T8, T10 and T11 (counted in section 7).
- O6 is assessed at Understand level until the owner adds a proceeds rule.

## 7. Hour estimate

**Projected countable words** (excludes introduction, instructions, glossary and appendixes, Std 7.02.5-.7):

| Chunk | Words |
| --- | --- |
| T1 Boarding | 1,500 |
| T2 Draws I | 2,500 |
| T3 Draws II and lien law | 2,800 |
| T4 Billing and late fees | 1,800 |
| T5 Rate caps | 1,700 |
| T6 Monitoring and sweep | 2,200 |
| T7 Extension and exit stress | 2,500 |
| T8 Rating and accrual | 2,600 |
| T9 Casualty | 1,400 |
| T10 Payoff and release | 1,000 |
| T11 Investor reporting (coverage review) | 1,500 |
| Summary and job aid | 500 |
| **Total** | **22,000** |

**Questions:** 18 review + 27 exam (one form, as taken by the learner) + 9 practice exercises = 54.

**Media:** no qualifying video. Narration of the text does not count (Std 7.02).

**Credit calculation (Std 7.02):**

1. Reading: 22,000 ÷ 180 = 122.222 minutes.
2. Questions: 54 × 1.85 = 99.900 minutes.
3. Video: 0.000 minutes.
4. Total: 122.222 + 99.900 = 222.122 minutes. ÷ 50 = 4.442, rounded down to fifths: **4.4 credits**. At 4.4 the build rule gives 18 review and 27 exam items, the counts used.

**Current lesson, for comparison.** 4,235 words (all text, an upper bound) and 24 questions (6 practice, 12 quiz, 6 self-check). 4,235 ÷ 180 = 23.528; 24 × 1.85 = 44.400; total 67.928 minutes ÷ 50 = 1.359, so **1.2 credits**, not 3 hours.

**Field split estimate.** Finance (T4, T5, T7 sizing, T10): about 7,000 of 22,000 words, roughly 1.4 credits. Specialized Knowledge: the rest, about 3.0 credits. Confirm by content time once the lesson is final (Std 7.01.1).

**Bible LD-03.** 222.122 minutes is under the 4-hour (240-minute) module cap.

## 8. Prerequisites and overlaps

**Prerequisites (state in the advance disclosure, Std 3.02.1).** C11 (direct), which itself needs C9. Learners must already be able to:

- calculate Actual/360 interest and per diem (C3: F-CORE-01, -05);
- read a sizing table, interest coverage and debt yield (C8: F-MF-12, F-CORE-16);
- read a title commitment, endorsements and insurance evidence (C9: CORE-CLS-06, CORE-INS-01);
- read a State Law Table row (C10);
- explain boarding, prepaid interest and the trailing-document log (C11: CORE-CLS-04, -05).

**Advance preparation:** none beyond the prerequisites.

**What C12 does not teach (no duplication).**

| Topic | Owner module | C12's limit |
| --- | --- | --- |
| Default notices, workouts, foreclosure, REO | C13 | C12 stops at rating a payment default (4 or 5) and handing it over |
| Default interest math in full (F-CORE-31) | C13 | C12 shows the per diem difference only |
| Portfolio concentration, loan review, CECL | C14 | C12 rates one loan; C14 aggregates |
| Budget review, inspection practice, contractor review | R3, M5 | C12 teaches the core draw cycle only |
| Value-add extension strategy | M4 | C12 runs the tests; M4 designs them |
| Lockbox and covenant structuring | CM4 | C12 operates the sweep; CM4 sets it |
| Investor reporting (S11) | C12 owns (O8, coverage review) | Loan-level report and gross collections; buyer eligibility and repurchase go to C14 O2 |
| State mechanics' lien priority law | C12 owns (T3) | C9 covers the title-commitment side only |
| Rating, nonaccrual and charge-off on one loan | C12 owns (O5) | C14 aggregates them and owns the allowance |

## Blueprint checks

**Self-check.**

1. Does every objective use one observable verb and map to a task ID? Yes: O1-O8 map to S1-S8, S11, U6, U10, F4, F5, K4 and K7.
2. Are at least half the objectives Apply or above? Yes: 7 of 8.
3. Does any number in this blueprint come from outside the policy, Formula Library or Running Deals? No. The $1,913.33 and $139.02 figures apply F-CORE-01 and CORE-SVC-04 to Running Deals inputs.
4. Do the item counts meet the spec? Yes: 18 ≥ 13 review; 27 ≥ 23 exam per form; at least 2 exam items per objective.

**What to look up yourself.**

1. Ohio, North Carolina and Indiana deadlines to record a mortgage satisfaction after payoff. Codes.ohio.gov and ncleg.gov refused access on 22 Nov 2026.
2. The current FFIEC Call Report Glossary entry "Nonaccrual Status". The search found FDIC-hosted copies dated 2012-2024 and a 2024 draft revision.
3. The exact page of the OCC *Rating Credit Risk* handbook for the special mention and substandard definitions.

**How to check it.**

1. Re-run the credit maths: 22,000 ÷ 180 + 54 × 1.85 = 222.122; ÷ 50 = 4.442.
2. Check T1: $240,000 × 0.1025 ÷ 360 × 28 = $1,913.333, shown as $1,913.33.
3. Check T4: 5% × $2,780.31 = $139.0155, half-up to $139.02.
4. Open CORE-SVC-04, COM-BR-02, COM-BR-03 and MF-BR-11 in the Model Credit Policy and confirm the corrections in 4.3.
