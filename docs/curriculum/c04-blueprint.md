# C4 blueprint: Property cash flow: from gross potential rent to NOI

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C4, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Intermediate (qas-spec.md) |
| Field of study | Finance about 60%, Specialized Knowledge about 40% (lease structures, property-tax law, fraud checks). Planning split by content time (Std 7.01.1) |
| Current lesson read | `modules/core/c04/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Inputs | Formula Library F-CORE-03, -07 to -12, F-MF-02, -06, -09, -10, -12, F-COM-02, -03; Model Credit Policy MF-GEN-04 to -06, -09, -11; COM-GEN-05 to -08, -11; MF-BR-07, -08; D-CONV-09; Running Deals (22 Nov 2026) |
| Needs analysis | `docs/curriculum/needs-analysis.md` v0 (tasks U1, U2, U3, U5, U9, U10, O6) |
| Status | v0 blueprint, 22 Nov 2026, for owner review. Nothing in the lesson or Course Bible was changed |

## 1. Module purpose

C4 builds the underwriter's core skill: turning a rent roll, leases and an operating statement into supportable NOI and NCF. It follows C3's debt-service math and feeds value in C5, sizing in C8, covenants in C12, and the M2 and CM2-CM3 family modules.

## 2. Learning objectives

By the end of C4, you will be able to:

| # | Objective (one verb, LD-01) | Bloom level | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Calculate** gross potential rent, vacancy and credit loss, loss-to-lease and effective gross income from a rent roll, applying the family vacancy floor (F-CORE-07 to -09, F-MF-02; MF-GEN-05; COM-GEN-05). | 3 Apply | U1 |
| O2 | **Classify** each operating-statement line and each lease's expense terms (gross, modified gross, triple net) by where it sits in the NOI build. | 2 Understand | U1, U7 |
| O3 | **Reconcile** a seller's T-12 or broker's pro forma to underwritten NOI, testing rent and vacancy against submarket evidence and naming each adjustment and its amount. | 4 Analyze | U1, U2, O6, U10 |
| O4 | **Calculate** underwritten NOI and NCF with the family expense and reserve rules (F-CORE-10, F-MF-06, -09, F-COM-03; MF-GEN-06; COM-GEN-06, -07). | 3 Apply | U1, U5 |
| O5 | **Calculate** DSCR on the family income base and break-even occupancy, and compare each with its minimum at full precision (F-CORE-11, -12, F-MF-10, -12). | 3 Apply | U5, U9 |
| O6 | **Evaluate** whether in-place cash flow supports the request after vacancy, rent and expense shocks, and recommend proceed, resize or decline. | 5 Evaluate | U10, U9 |

**Bloom mix:** 1 Understand, 3 Apply, 1 Analyze, 1 Evaluate. Five of six are at Apply or above.

**Conflict to resolve (owner).** Course Bible LD-02 aims core modules at levels 2-3. O3 (level 4) and O6 (level 5) need LD-02 amended for the agreed depth. Six objectives fit LD-01 (3-6), the role file and Std 3.01.

## 3. Content map

| Obj | Concepts | Real rules and primary sources | Model policy and formulas |
| --- | --- | --- | --- |
| O1 | GPR at market versus in-place rent; physical versus economic occupancy; loss-to-lease; concessions; bad debt; T-3 versus rent-roll annualizing; seasonality | OCC: analyze "historical, current, and projected rental rates, operating expenses, capital expenditures, and vacancy and absorption rates", under "both normal and stressed conditions" [VERIFY: OCC, *Comptroller's Handbook: Commercial Real Estate Lending* v2.0, Mar 2022, p. 42; checked 22 Nov 2026] | F-CORE-07, -08, -09; F-MF-02; MF-GEN-05; COM-GEN-05; D-CONV-09 |
| O2 | Operating expense versus capital item versus debt service versus non-cash; lease types; CAM and tax recoveries; percentage rent; RUBS | OCC: NOI "may assume ... expenses that may not represent an actual or immediate cash expense, such as management fees and reserves for capital replacements" [VERIFY: OCC CRE Handbook v2.0, p. 42; checked 22 Nov 2026] | MF-GEN-06; COM-GEN-06, -07; F-COM-03 |
| O3 | Normalizing a T-12: one-time items, owner add-backs, cash versus accrual, tax reassessment on sale, insurance repricing; rent roll tied to deposits; data red flags | OCC: cash-basis statements may omit unpaid taxes and "understate expenses and overstate income"; compare expenses "with expenses incurred by comparable properties" [VERIFY: OCC CRE Handbook v2.0, p. 42; checked 22 Nov 2026]. North Carolina counties must reappraise at least every eighth year and may advance the cycle [VERIFY: N.C. Gen. Stat. 105-286(a)(1), (a)(3), via Durham County mirror; checked 22 Nov 2026]. Indiana caps property tax at 3% of gross assessed value for nonresidential property and 2% for non-homestead residential [VERIFY: Indiana DLGF, *Property Tax Caps / Circuit Breaker Credits* fact sheet, Nov 2025; checked 22 Nov 2026]. Ohio: Franklin County's 2026 triennial update follows the 2023 sexennial reappraisal [VERIFY: Franklin County Auditor, 2026 Triennial Update notices; checked 22 Nov 2026] | MF-GEN-04 (rent roll to deposits within 5%); MF-GEN-06; COM-GEN-06; F-CORE-10 |
| O4 | NOI; replacement reserves; TI/LC reserves; NCF; why lenders size on NCF | OCC: recurring capital items such as HVAC, roofs and parking lots "are captured in a replacement reserve" [VERIFY: OCC CRE Handbook v2.0, p. 42; checked 22 Nov 2026] | F-CORE-10; F-MF-06, -09; F-COM-03; MF-GEN-06; COM-GEN-07, -11 |
| O5 | DSCR income base by family; coverage versus DSCR; break-even; cushion; full-precision comparison | OCC: covenant DSCR definitions "may differ from the DSCR used for underwriting and risk-rating analysis" [VERIFY: OCC CRE Handbook v2.0, p. 42; checked 22 Nov 2026] | F-CORE-11, -12; F-MF-10, -12; F-RES-07; MF-BR-07; COM-GEN-11 |
| O6 | Single-variable and combined shocks; NCF cushion; rollover (preview); recommendation logic | OCC lists "underwriting analyses that fail to consider possible stressed market conditions" as a weakness [VERIFY: OCC CRE Handbook v2.0, p. 57; checked 22 Nov 2026] | MF-BR-07, -08; COM-GEN-08 (rollover stress, F-COM-02, -09) |

**Policy gap (owner decision; nothing invented).** The Model Credit Policy has no rule on re-underwriting property taxes after a sale or a revaluation. MF-GEN-06 and COM-GEN-06 take the greater of T-12 and appraiser. Teach reassessment as market practice and a what-if. Ask the owner whether to add a rule.

## 4. Depth targets

1. **Rent roll reading.** Lease start and end, concessions, deposits, month-to-month tenants, delinquency aging, loss-to-lease. The current lesson starts from totals, not from a rent roll.
2. **Lease structures and recoveries.** Gross, modified gross and triple net; CAM and tax reconciliations. The lesson's practice puts recoveries inside GPR without explaining the lease terms behind them.
3. **Physical versus economic occupancy as a fraud and data check.** Cedar Court shows 44 of 50 units leased (88%) but economic occupancy of 90% (F-MF-02). That implies in-place rent of $1,329.55, above the $1,300 market rent, before renovation. An underwriter should ask why (see the running-deal flag in §5).
4. **Expense normalization with real law.** Property taxes reset after a sale or revaluation. Mecklenburg County (Cedar Court) revalues as of 1 Jan 2027; local press reports median residential values up about 15% (WFAE, 4 Sep 2026; secondary) [VERIFY: secondary only; open the Mecklenburg County Assessor's revaluation notice before writing; the cycle rule itself is G.S. 105-286, content map O3]. Indiana's 3% circuit-breaker cap bounds Birchwood's tax bill. What-if: a 15% rise on Cedar Court's $74,000 taxes, rate unchanged, is $85,100. NCF falls to $383,900 and coverage to 1.07x.
5. **Cash versus accrual statements and tax returns.** OCC p. 42: cash-basis statements can overstate income. Teach IRS Schedule E and Form 8825 as evidence, with their limits.
6. **Stress testing.** OCC asks for "normal and stressed conditions". Cedar Court has $36,950 of NCF cushion over $358,050 test debt service, 4.74% of GPR. A five-point vacancy rise takes coverage to 0.99x and fails MF-BR-07.
7. **Market data series.** Census rental vacancy rate, FRED RRVRUSQ156N: 7.6% in Q3 2026 (updated 28 Oct 2026). Use it to judge whether a 5% floor is conservative for a submarket. Label real data; never replace a running-deal input.
8. **Real estate market and submarket analysis (needs analysis §4 item 7; tasks O6, U2, U10).** Placed in C4 by the coverage review (22 Nov 2026), about 2,000 words in T3. Supply pipeline, absorption, submarket vacancy and rent growth, and how each tests a pro forma rent or vacancy line. National series as anchors: Census Housing Vacancies and Homeownership (CPS/HVS) and New Residential Construction (starts and completions). Submarket data from brokers and data vendors are secondary and paywalled: label them market, dated. C0 owns the cycle models and teaches how to read a series; C5 owns cap-rate spreads; M1 and CM1 add property-type depth. Course researcher to open the Census release pages before writing.

## 5. Sequence

| # | Chunk (objective) | Words | Worked example (running deal) | Practice (second deal, LD-05/LD-08) |
| --- | --- | --- | --- | --- |
| T1 | Rent roll to EGI: GPR, vacancy, loss-to-lease, occupancy (O1) | 2,800 | Keep: Cedar Court GPR $780,000, lesser of $702,000 and $708,000, 10.0% vacancy, EGI $720,000.00 (RD-MF-01). Add: physical 88% versus economic 90% | Birchwood stabilized: $600,000 + $120,000, 5% vacancy, EGI $684,000.00 (RD-COM-01) |
| T2 | Lease structures and line classification (O2) | 2,300 | Birchwood in-place: base rent $420,000 and recoveries $84,000; what recoveries mean under each lease type | Classify 12 lines from a fictional T-12 |
| T3 | Reconciling the seller's numbers, with submarket evidence (O3) | 5,000 | Keep: broker $575,000 versus $410,000 on Cedar Court. Add: tax reassessment what-if ($85,100) | Keep the Alegre Park OM exercise (real public document, Bible 5.4) |
| T4 | NOI and NCF (O4) | 2,200 | Cedar Court: NOI $410,000.00, reserves $15,000, NCF $395,000.00 (F-MF-09) | Birchwood: NOI $480,000.00, TI/LC $40,000, replacement $6,000, NCF $434,000.00 (F-COM-03) |
| T5 | DSCR, coverage and break-even (O5) | 2,000 | Cedar Court: coverage on NCF $395,000 ÷ $358,050 = 1.10x (F-MF-12); break-even 85.6% | Birchwood: $434,000 ÷ $330,772.68 = 1.31x (COM-TRM-09 unanchored retail: 65% LTV, 1.30x, 9.0%); break-even 74.3% |
| T6 | Shocks and the recommendation (O6) | 1,900 | Cedar Court: +5 points vacancy, NCF $356,000, coverage 0.99x, fails MF-BR-07 | Birchwood in-place: NCF $254,000 versus test ADS $235,950 (1.08x); find the vacancy that breaks 1.00x |
| Job aid | One page | 600 | Mini-example kept | n/a |
| Real-world check, "What to look up yourself", "How to check it" |  | 700 | n/a | n/a |
| **Total counted words** |  | **17,500** |  |  |

**What must change in the current lesson.**

| Action | Item |
| --- | --- |
| Add | T2 lease structures and recoveries; rent roll reading in T1; T3 normalization with property-tax law; T6 stress and recommendation; cash versus accrual |
| Deepen | T1: physical versus economic occupancy. T3: reconcile every line, not only the stabilized versus in-place gap |
| Correct | **Hook:** "$165,000 ... is worth about $2.4 million of loan" assumes 1.00x DSCR. At 1.25x and a 7.00% constant it is $1,885,714.29; state the coverage used. **T5:** "Losing about 2 of 50 units' rent would leave nothing for debt" is wrong. A 4.4-point cushion (about 2.2 units) brings cash flow *after* debt service to zero. **T4 worked example 3** is titled "DSCR on NOI" but uses interest-only test debt service: call it coverage. **Practice 1** puts recoveries in GPR; keep the F-CORE-09 fixture math but say it is a course convention. The facts table lacks a knowledge level (M2) |
| Flag to owner (running deals) | Cedar Court: 44 of 50 leased (88%) with $702,000 collected on $780,000 GPR (90%) implies in-place rent above market before renovation. Either confirm it as a deliberate red flag or adjust the deal. This blueprint changes nothing |
| Cut | The T4 family DSCR table beyond one line per family: C8 and the family modules own sizing bases |
| Replace | Quiz sets A and B become review questions and two exam forms (§6) with feedback on every option |

## 6. Assessment plan

Sized at the projected 3.8 credits (§7, after the coverage review added submarket analysis to O3). Four-option multiple choice, one best answer, feedback for every option. No true/false.

| Obj | Review questions | Exam Set A | Exam Set B | Critical items per form |
| --- | ---: | ---: | ---: | --- |
| O1 | 3 | 4 | 4 | 1 (vacancy at the greater of actual, market or floor) |
| O2 | 2 | 3 | 3 | 0 |
| O3 | 4 | 5 | 5 | 1 (one-time item left in NOI) |
| O4 | 3 | 4 | 4 | 1 (expenses at the greater of T-12 and appraiser) |
| O5 | 2 | 4 | 4 | 1 (full-precision DSCR test) |
| O6 | 2 | 3 | 3 | 0 |
| **Total** | **16** | **23** | **23** | **4** |

- Review: 16. The QAS minimum at 3.8 credits is 12 (3 × 3 + 3). The build target is 4 per credit: 15.2, rounded up to 16.
- Exam: 23 per form. The minimum is 20 (5 × 3 + 5). The build target is 6 per credit: 22.8, rounded up to 23. Every objective has at least 3 items per form. No overlap with review questions or between forms.
- O6 items are case-based: a short cash-flow table, then "which recommendation is best supported". One best answer, with the rule ID in the feedback.
- Practice: 12 open problems (Birchwood, Alegre Park). Interactive: 4 exercises (line sorter, rent roll builder, reconciliation waterfall, shock slider).

## 7. Hour estimate

| Input | Count | Minutes |
| --- | ---: | ---: |
| Counted words (§5) | 17,500 | 17,500 ÷ 180 = 97.222 |
| Review questions | 16 |  |
| Exam items (one form) | 23 |  |
| Practice problems | 12 |  |
| Interactive exercises | 4 |  |
| All questions | 55 | 55 × 1.85 = 101.750 |
| Media | 0 | 0.000 |
| **Total** |  | **198.972** |

198.972 ÷ 50 = 3.979 credits, rounded down to fifths: **3.8 credits** (3.3 clock hours, plus the OJT task). At halves only, 3.5. The raw figure is 1.03 minutes short of 4.0; do not rely on 4.0 until the lesson is final. The Course Bible lists 3 hours.

## 8. Prerequisites and overlaps

**Prerequisites (precise, Std 3.02.1).** Before C4, a learner can:

- calculate annual debt service and the loan constant for interest-only and amortizing loans (C3);
- say which rate basis a credit test uses (C3, D-CONV-01);
- compare a ratio with a minimum at full precision (C3);
- read an income statement and tell cash from accrual (bachelor's-level accounting).

Advance preparation: none.

| Module | Relationship | No duplication rule |
| --- | --- | --- |
| C3 | ADS and constants | C4 uses them; it does not reteach them |
| C0 | Cycle models; reading a data series | C0 owns them; C4 owns submarket rent and vacancy evidence (coverage review) |
| C5 | Value from NOI | C4 owns NOI; C5 owns the cap rate and value |
| C8 | Exit break-even | C4 O6 tests in-place cash-flow shocks only; C8 owns exit and take-out stress |
| C6 | Borrower and guarantor cash flow | C6 owns global cash flow; C4 is property-level only |
| C8 | Sizing on NCF | C8 owns maximum loan by DSCR and debt yield |
| C9 | Leases, estoppels and SNDAs as documents | C9 owns the documents; C4 reads their economics |
| C12 | Covenant DSCR and sweeps (COM-GEN-12) | C12 owns monitoring; C4 notes that covenant definitions differ |
| M2, CM2, CM3 | Rent roll and T-12 depth; rollover (F-COM-02, -09) | Family modules go deeper by property type. C4 previews rollover only in T6 |

## Self-check

| Check | Result |
| --- | --- |
| 8 parts in the role-file order | Met |
| 4-8 objectives, at least half Apply or above | Met: 6, five at Apply or above |
| Objectives mapped to needs-analysis tasks | Met |
| Real rules name an opened primary source | Met. The NC statute was read on a county mirror; the WFAE figure is secondary and labelled |
| No invented policy limit | Met. The tax re-underwriting gap goes to the owner |
| Running-deal numbers match | Met. The Cedar Court occupancy tension is flagged, not changed |

## What to look up yourself

1. N.C. Gen. Stat. 105-286 on ncleg.gov (blocked, HTTP 403, on 22 Nov 2026) and Mecklenburg County's revaluation FAQ (also blocked).
2. Ohio Rev. Code 5715.33 on codes.ohio.gov (connection refused on 22 Nov 2026).
3. The text of Ind. Code 6-1.1-20.6-7.5 on iga.in.gov, to confirm the DLGF fact sheet.
4. Fannie Mae Multifamily Selling and Servicing Guide, underwritten NCF. The current lesson cites Section 203.01; confirm the section number.

## How to check it

1. `=(395000-780000*5%)/358050` should return 0.9943: the five-point shock fails 1.00x.
2. `=702000/12/44` should return 1,329.55, the implied in-place rent per leased unit.
3. `=165000/1.25/0.07` should return 1,885,714.29, the corrected hook figure.
