# C0 blueprint: Program orientation and the BPL market

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C0, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Basic (`docs/accreditation/qas-spec.md`) |
| Prerequisites | None. Advance preparation: none |
| Field of study | Specialized Knowledge |
| Learner | College graduate with basic finance, new to lending |
| Depth target | Upper-undergraduate |
| Testing | Multiple choice only: four options, one best answer, feedback on every option |
| Current lesson read | `modules/core/c00/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Needs analysis | `docs/curriculum/needs-analysis.md`, v0, 22 Nov 2026 |
| Status | v0 blueprint for owner review, 22 Nov 2026 |

## 1. Module purpose

C0 teaches you to place any business-purpose real estate loan in its market: who lends it, who funds it, what repays it and what market forces change its risk. It is the first program in the core path and gives the shared vocabulary, data habits and lookup skills that C1-C14 assume.

## 2. Learning objectives

By the end of C0, you will be able to:

| # | Objective | Bloom level | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Distinguish** a business-purpose loan from bank, agency and consumer mortgage loans by borrower, collateral, term, repayment source and governing law. | 2 Understand | O2, O4 (preview) |
| O2 | **Explain** where banks, debt funds, mortgage REITs and specialist BPL lenders sit in the capital stack, and which regulator or law reaches each. | 2 Understand | O1, K7 (preview) |
| O3 | **Trace** a running-deal loan through a funding route (warehouse line, whole-loan sale or securitization), naming the party whose eligibility criteria and risk-retention rule apply at each step. | 3 Apply | U11, F6, S11, K7 (preview) |
| O4 | **Calculate** shares, growth rates and percentage-point changes from a named primary data series, and reconcile each to its published headline. | 3 Apply | O6, U2 (preview) |
| O5 | **Analyze** how a market-cycle phase and four indicators (vacancy, price index, interest rates, loan maturities) change the refinance and collateral risk of a bridge loan. | 4 Analyze | U10, S4, S5, O6 (preview) |
| O6 | **Locate**, for a given credit question, the governing rule ID, formula ID, State Law Table row and `[VERIFY]` source in the course tabs. | 3 Apply | K1, K2, U8 (preview) |

**Bloom mix:** 2 at Understand, 3 at Apply, 1 at Analyze. Four of six (67%) are Apply or above.

**Tasks C0 previews (needs analysis §3 asks C0 to say this).** C0 teaches no job task in full. It previews O1, O2, O4, O6, U2, U8, U10, U11, F6, S4, S5, S11, K1, K2 and K7. Each preview names the module that teaches the task in full (section 8).

## 3. Content map

| Obj. | Concepts | Real rules and primary sources | Model-policy rules |
| --- | --- | --- | --- |
| O1 | Business purpose; non-natural-person borrower; product families (RTL, ground-up, DSCR, MF bridge, COM bridge); bridge loan; exit | Business-purpose and entity exemptions from TILA [VERIFY: 12 CFR 1026.3(a)(1)-(2); consumerfinance.gov, Reg Z §1026.3 and Supplement I comments 3(a)-1 to -10; checked 22 Nov 2026]. Federal loan-originator licensing covers only loans "primarily for personal, family, or household use" [VERIFY: 12 U.S.C. 5102(9); Cornell LII; checked 22 Nov 2026]. Preview only; C1 teaches both | CORE-BOR-01; CORE-BP-01; RES-GEN-04 |
| O2 | Capital stack (senior debt, mezzanine, preferred equity, common equity); bank versus non-bank lenders; supervisory limits versus house limits | Banks must keep written real estate lending policies. The interagency guidelines set supervisory LTV limits: raw land 65%, land development 75%, commercial and multifamily construction 80%, 1-4 family construction 85%, improved property 85% [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, "Supervisory Loan-to-Value Limits"; Cornell LII; checked 22 Nov 2026]. Interagency CRE concentration criteria: construction and land loans at 100% or more of total risk-based capital; total CRE at 300% or more with 50% growth over 36 months. These flag banks for review; they are not lending limits [VERIFY: OCC Bulletin 2006-46, 6 Dec 2006, 71 FR 74580; occ.gov; checked 22 Nov 2026]. Preview only: C2 teaches the LTV table, C14 the concentration criteria | CORE-EXC-01; COM-BR-07 (recourse, preview) |
| O3 | Warehouse line; whole-loan sale; securitization; rated and unrated pools; buyer eligibility; risk retention | A securitization sponsor generally keeps an eligible vertical interest of at least 5%, or an equivalent horizontal interest [VERIFY: 17 CFR 246.4(a)(1)-(2); Cornell LII; checked 22 Nov 2026]. CMBS may use a third-party purchaser with an operating advisor [VERIFY: 17 CFR 246.7; Cornell LII, opened for the needs analysis; checked 22 Nov 2026]. Preview only: C14 teaches the options | CORE-CONC-01 to -07 (buyer limits shaped them; source notes cite KBRA, 30 Jul 2026) |
| O4 | Percent versus percentage point; growth rate; share; nominal headline versus unrounded inputs; vintage and revision | Market data, not law. Primary series: Census Bureau rental vacancy rate (FRED RRVRUSQ156N, Q3 2026 7.6%, updated 28 Oct 2026); IMF commercial real estate prices, United States (FRED COMREPUSQ159N, Q1 2026 +6.58% year on year, updated 1 Oct 2026); Federal Reserve Z.1 Financial Accounts (2026:Q2 release 11 Sep 2026; next 10 Dec 2026); KBRA RTL securitization releases | None. Market figures are "market range" context only (Course Bible 5.4, rule 6) |
| O5 | Space and capital markets; the four-quadrant model; cycle phases (recovery, expansion, hyper-supply, recession); maturity wall; refinance risk; competition and leverage drift | Examiners expect refinance risk reviewed near maturity: "During ongoing monitoring and near maturity, management should conduct analysis" [VERIFY: OCC Bulletin 2024-29, *Commercial Lending: Refinance Risk*, 3 Oct 2024; occ.gov; checked 22 Nov 2026 (Gate 1 review)]. Common regulatory rating scale (special mention, substandard, doubtful, loss) [VERIFY: OCC Bulletin 2026-56, 10 Nov 2026; occ.gov; checked 22 Nov 2026]. Preview only; C2 teaches ratings | CORE-SVC-07; CORE-EXC-01 |
| O6 | Rule IDs (FAMILY-TOPIC-NN); formula IDs (F-FAMILY-NN); BASIS tags (MARKET, JUDGMENT, LEGAL); State Law Table rows (SLT-XX-NN); the `[VERIFY]` convention | Course Bible 5.6-5.8 | CORE-AUTH-01 (lookup drill only); RES-FF-03; SLT-OH-01 |

## 4. Depth targets: what to add, deepen, correct and cut

The current lesson is 1,055 counted words and measures 0.8 credits (`docs/accreditation/credit-worksheet-baseline.md`). An upper-undergraduate real estate finance course would cover the items below in its opening unit.

### 4.1 Add

1. **The capital stack.** Senior, mezzanine, preferred equity and common equity, with who is paid first and who loses first. Use Cedar Court's $5,140,000 commitment and $2,240,066.67 cash to close (RD-MF-01) as the stack.
2. **Why banks and non-banks differ (preview).** Name the interagency real estate lending standards (12 CFR Part 34, Subpart D, Appendix A) and show one figure: the 85% limit for improved property, on Birchwood Plaza. C2 owns the table, the 100% and 30% exception aggregates and board reporting (coverage review, 22 Nov 2026). C0 does not teach them.
3. **The 2006 CRE concentration guidance (one sentence).** Name it as one reason banks ration CRE credit and non-banks gain share. C14 owns the 100% and 300% criteria.
4. **Risk retention (preview).** Name Regulation RR's 5% floor (17 CFR 246.4(a)) and show the one illustrative Maple Run figure in T3. C14 owns the vertical, horizontal and third-party options (17 CFR 246.7) and the operating advisor.
4a. **Origination channels (preview of task O1).** Direct, broker and correspondent origination, and why broker-fed files need extra diligence. C1 (fair-lending limits on marketing) and C7 (broker red flags) teach the parts in scope. Consultative selling stays on-the-job training (coverage review, 22 Nov 2026).
5. **Two named cycle models.** The DiPasquale-Wheaton four-quadrant model of space and asset markets (*Real Estate Economics*, 1992). Mueller's four-phase physical market cycle (*Real Estate Finance*, 1995). Use them to explain why supply, absorption and cap rates move a bridge loan's exit. Course researcher to open both before writing.
6. **Primary data series and how to read them.** Census Housing Vacancies and Homeownership; the IMF CRE price index on FRED; Federal Reserve Z.1 mortgage tables; FDIC Quarterly Banking Profile; New York Fed SOFR. Teach vintage, revision, seasonal adjustment, and percent versus percentage point.
7. **A role-and-task map.** The five roles and 41 tasks from the needs analysis, so you see where each module leads.
8. **History in one page.** The savings and loan crisis and FIRREA (1989); the 2008 crisis and the Dodd-Frank Act (2010). Each explains a rule you will meet: appraisal regulation (C5) and risk retention (this module). Course researcher to open the FIRREA Title XI text (12 U.S.C. 3331 et seq.) before writing.

### 4.2 Deepen

1. **T2 funding routes.** Today it is three bullets. Add the warehouse advance rate and margin call, the whole-loan data tape and due diligence, and rated versus unrated pools. Name repurchase claims for breached representations (preview of K7).
2. **T3 market risk.** Today it is four numbered points. Tie each to a running-deal number: Cedar Court's $443,273.69 exit cushion and the $253,677.46 shortfall if NCF is $500,000 (RD-MF-01, Role 3, what-if 5).
3. **Worked example 2.** Keep the four checks. Add one percentage-point example from a primary series (vacancy 7.1% to 7.6%).

### 4.3 Correct

1. **Objectives fail the Apply rule.** Today only O4 "Use" is Apply. "Describe", "Explain" and "Name" are levels 1-2. The new set has four of six at Apply or above.
2. **Secondary sources.** Three market rows cite trade press (HousingWire, Multi-Housing News). Replace with the primary publisher (Bank of America, MBA, the debt-fund data owner), or label them secondary with date.
3. **The DSCR "30 years" term** has no source. Label it "market range" with a dated source (Course Bible 5.4, rule 6), or cut it.
4. **Out-of-order content.** Practice 4 and self-check 4 need C2 skills (exception routing under CORE-AUTH-01; the CORE-SVC-07 watch trigger). Recast them as lookup drills (O6): "where would you find the rule?" not "what is the answer?".
5. **Quiz items break QAS rules.** Set A item 1, item 6 and item 8 and Set B item 1 are yes/no. Every item is open response with a revealed answer. Std 6.01.2 bars yes/no exam items. Rebuild all items as four-option multiple choice.
6. **Market snapshot is dated 20 Nov 2026.** Re-check every row on the build date and show both dates.

### 4.4 Cut or move

1. **T4 course-mechanics table** (pass mark, test-out, solo mode). Move it to the program instructions. It is navigation, which QAS requires (Std 4.05.3) but the word-count formula excludes.
2. **Self-review table.** Keep it as an author record outside the learner page.

## 5. Teach sequence

Each chunk has a worked example on a running deal and scored review questions placed at its end. Practice uses a different case from the worked example in at least two inputs (LD-05, LD-08).

| # | Chunk (objective) | Words | Worked example (running deal) | Practice | Review Qs |
| --- | --- | ---: | --- | --- | ---: |
| T1 | What a BPL is; the five products and their exits (O1) | 1,600 | All three deals classified: family, product, repayment source, exit. Maple Run: $340,000 RTL, exit by lease then DSCR refinance. Cedar Court: $5,140,000 MF bridge, exit by term refinance. Birchwood Plaza: $3,520,000 COM bridge, exit by refinance after lease-up | Exercise 1 (sort): five fictional requests into family and product | 1 |
| T2 | Capital stack, lender types and their regulators (O2) | 2,000 | Birchwood Plaza leverage two ways. Commitment ÷ lower of price and value: $3,520,000 ÷ $4,400,000 = 0.800000, or 80.0%. Compare with the 85% bank supervisory limit for improved property (12 CFR Part 34, Subpart D, App. A). Then the initial advance: $2,860,000 ÷ $4,400,000 = 0.650000, or 65.0%, our COM-BR as-is test. The house limit binds before the bank guideline | A bank and a debt fund quote on the same fictional strip-center loan; place each in the stack | 2 |
| T3 | Funding routes and risk retention (O3) | 2,200 | Maple Run's chain: fund $340,000; hold or sell into an RTL pool; DSCR refinance at $338,000 in month 14 (RD-RES-01, Role 3); possible non-QM pool. Illustrative only: if the sponsor of a pool holding Maple Run keeps a 5% vertical interest, its share of that loan is $340,000 × 5% = $17,000 (17 CFR 246.4(a)(1)) | Exercise 2 (build-up): trace Cedar Court from bridge to term loan, naming each party's criteria | 1 |
| T4 | Reading market data (O4) | 2,000 | (1) Rated share of 2026 RTL issuance: $3.5 billion ÷ $4.8 billion = 0.729167, or 72.9%; KBRA says about 73%. (2) Rental vacancy: 7.6% − 7.1% = 0.5 percentage point; 0.5 ÷ 7.1 = 0.070423, a 7.0% relative rise (Census via FRED, Q3 2025 to Q3 2026). (3) RTL issuance change: ($4.8 billion − $5.5 billion) ÷ $5.5 billion = −0.127273, or −12.7%; KBRA reports a 12% fall | New series: compute the CRE price change and say which headline is percent and which is points | 2 |
| T5 | The market cycle and credit risk (O5) | 2,000 | Cedar Court's exit under stress. Underwritten exit cushion $443,273.69. If stabilized NCF is $500,000, the DSCR-sized take-out is $4,886,322.54. Shortfall: $5,140,000 − $4,886,322.54 = $253,677.46 (RD-MF-01, Role 3, what-if 5). Place the stress in a cycle phase and name the indicator that would warn first | Exercise 3 (scenario): Birchwood Plaza in a hyper-supply phase; pick the two indicators to watch | 1 |
| T6 | Your job and this course: roles, tasks, IDs, tags (O6) | 1,000 | Lookup drill on Maple Run: the LTC cap is RES-FF-03; the formula is F-RES-04; the state row is SLT-OH-01; the approver matrix is CORE-AUTH-01 | Five lookups on Birchwood Plaza | 1 |
| — | Job aid, "What to look up yourself", "How to check it" | 400 | — | — | Self-check: last 3 review Qs below |
| | **Total counted words** | **11,200** | | | **8** |

The self-check is the final block of review questions, so it is scored and counted once. It has three items, one each on O3, O4 and O5 (included in the 8 above).

## 6. Assessment plan

Projected credits: 2.0 (section 7). QAS minimums at 2.0 credits: 6 review questions and 10 exam items (Std 5.01.2.1, 6.01.2). Build rule: review = 4 per credit = 8; each exam form = the greater of 6 per credit (12) and 2 per objective (12) = 12.

| Obj. | Review Qs | Exam Set A | Exam Set B | Critical items (per form) |
| --- | ---: | ---: | ---: | --- |
| O1 | 1 | 2 | 2 | 1: an individual or trust as borrower (CORE-BOR-01) |
| O2 | 2 | 2 | 2 | — |
| O3 | 1 | 2 | 2 | — |
| O4 | 2 | 2 | 2 | — |
| O5 | 1 | 2 | 2 | — |
| O6 | 1 | 2 | 2 | 1: model policy is never used on a live loan |
| **Total** | **8** | **12** | **12** | **2** |

- Exam covers 6 of 6 objectives (100%; Std 6.01.2 needs 75%).
- Sets A and B are parallel forms. No item repeats a review question.
- Pass mark 80%, and every critical item correct. No feedback on a failed exam attempt (Std 6.01.2).
- Review questions give feedback on every option, placed at the end of each chunk.
- Interactive elements (Std 4.05.3): the 3 exercises above.

## 7. Hour estimate

**Inputs.** Counted words 11,200 (section 5). Review questions 8, including the 3 self-check items. Scored interactive exercises 3. One exam form of 12 items (a learner takes one form; Set B is a retake form, as in the baseline worksheet). Audio or video 0 minutes.

**Counting rule** (`docs/accreditation/qas-spec.md`, "Counting items for credits"). Only scored items count: review questions, scored interactive exercises and one exam form. The other practice tasks in section 5 are open-answer and are excluded, as is the OJT task. Applying the rule changes no count here: 8 + 3 + 12 = 23.

**Calculation (Std 7.02.5-.7).**

1. Words: 11,200 ÷ 180 = 62.222 minutes.
2. Questions: (8 + 3 + 12) × 1.85 = 23 × 1.85 = 42.550 minutes.
3. Media: 0.000 minutes.
4. Total: 62.222 + 42.550 + 0.000 = 104.772 minutes.
5. Credits: 104.772 ÷ 50 = 2.095, rounded down to fifths = **2.0 credits**.

**Margin.** The module clears 2.0 by 4.77 minutes, about 860 words. Do not let the final text fall below 10,341 words with this question count.

**Against the baseline.** Today: 1,055 words, 21 questions, 0.8 credits. The Course Bible claims 1 hour. The rebuild adds about 10,150 words of teaching text.

## 8. Prerequisites and overlaps

**Prerequisites.** None.

**What later modules take further (C0 previews only, no duplication).**

| C0 topic | Taught in full in | C0 limit |
| --- | --- | --- |
| Business-purpose and entity tests | C1 | Name the two exemptions only; no Reg Z commentary |
| Credit box, approver, risk rating | C2 | Look up the rule; do not route or rate |
| Supervisory LTV limits versus house limits | C2 owns; C8 applies as a sizing comparator | One comparison on Birchwood Plaza (85% limit only) |
| CRE concentration criteria (OCC Bulletin 2006-46) | C14 | One sentence |
| Valuation and appraisal regulation | C5 | Name FIRREA as history only |
| Fraud in fast-growing products; broker-fed files | C7 | One sentence each |
| Buyer and warehouse eligibility, repurchase, risk retention options | C14 (new O2, coverage review 22 Nov 2026) | Trace the route; name the 5% floor; no data tapes or reps |
| Collateral file delivery to a custodian or buyer | C11 (O6) | Name the step only |
| Investor reporting and remittance | C12 (new O8) | Name the step only |
| Refinance and exit stress | C4 (cash-flow shocks), C8 (owns the exit break-even), C12 (at extension), C14 (at committee) | Qualitative, plus one running-deal number |
| Market and submarket analysis | C0 owns cycle models; C4 owns submarket rent and vacancy evidence; M1 and CM1 add property-type depth | Cycle phases and four indicators only |

## Self-check

1. Does every objective use an observable verb with a Bloom level? Yes: six objectives, four at Apply or above.
2. Does every number match `data/running-deals/running-deals.md`? Yes: $340,000, $338,000, $5,140,000, $2,240,066.67, $3,520,000, $4,400,000, $2,860,000, $443,273.69, $4,886,322.54, $253,677.46.
3. Is any policy limit invented? No. The 85% figure is the bank supervisory guideline, cited as real law, not model policy.

## What to look up yourself

1. OCC Bulletin 2024-29 (3 Oct 2024), opened in the Gate 1 review. Read its full text before T5 quotes more than the near-maturity sentence.
2. The DiPasquale-Wheaton (1992) and Mueller (1995) articles. Confirm the titles, journals and phase names before the lesson cites them.
3. FIRREA Title XI (12 U.S.C. 3331 et seq.) for the one-page history.
4. The 12 CFR Part 34 appendix definition of "value" for a purchase: the lesser of cost or appraised value. Confirm it before T2 uses it.
5. The latest KBRA RTL release and the Z.1 release of 10 Dec 2026.

## How to check it

1. Recompute section 7 in a spreadsheet: `=ROUNDDOWN(((11200/180)+(23*1.85))/50*5,0)/5` should show 2.
2. Open FRED RRVRUSQ156N and confirm 7.1% (Q3 2025) and 7.6% (Q3 2026).
3. Open 12 CFR Part 34, Subpart D, Appendix A on eCFR or LII and confirm the supervisory LTV table.
