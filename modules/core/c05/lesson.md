# C5: Valuation: appraisals, cap rates, as-is, ARV and as-stabilized

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C5-lesson-v0, C5-quiz-v0 (sets A and B), C5-ojt-v0, C5-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C4 |
| Bloom's levels | 2, 3 and 4 (LD-02) |
| Formulas | F-CORE-13, F-CORE-14, F-CORE-36; F-RES-02, F-RES-03 (as family examples) |
| Rules | CORE-VAL-01, CORE-VAL-02, CORE-VAL-03; MF-BR-02, MF-BR-04; CORE-PRC-05 |
| Running deals | Worked examples: RD-COM-01 Birchwood Plaza and RD-RES-01 Maple Run. Practice: RD-MF-01 Cedar Court (LD-08) |
| Status | v0. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0, 20 Nov 2026: first draft; all numbers computed in code; market and legal facts researched 19-20 Nov 2026 |

## Timing plan

| Segment (LD-04) | Minutes |
| --- | --- |
| 1 Hook | 5 |
| 2 Objectives | 5 |
| 3 Teach chunks T1-T5, with worked examples | 80 |
| 5 Practice | 45 |
| 6 Quiz | 30 |
| 8 Job aid walk-through and wrap-up | 15 |
| Total | 180 |
| 7 OJT task (extra, per LD-03) | 45 |

## 1. Hook (5 minutes)

Birchwood Plaza's term loan is sized at $3,900,000: 65% of a $6,000,000 as-stabilized value. That value is $480,000 of NOI divided by an 8.00% cap rate.

Move the cap rate up a quarter point, to 8.25%. The value falls to $5,818,181.82 and the same loan is 67.0% LTV. It now fails the 65% limit, and nothing about the building changed. By the end of this module you can show why, and which value each test should use.

## 2. Objectives

By the end of C5, you will be able to:

1. **Distinguish** as-is, as-completed (ARV) and as-stabilized values, and name which loan test uses each.
2. **Calculate** value from NOI and a cap rate, and the implied cap rate from a price (F-CORE-13), including a ±25 basis point sensitivity.
3. **Calculate** LTV on the lower of cost and appraisal on a purchase (F-CORE-14).
4. **Apply** the appraisal rules: who orders it, how old it may be, and how it is reviewed (CORE-VAL-01 to -03, F-CORE-36).
5. **Analyze** negative leverage by comparing the cap rate with the loan constant.

## 3. Teach

### T1. Three values, three questions (Objective 1, 15 minutes)

An appraisal can report more than one value. Each answers a different question, as of a different date.

| Value | Question it answers | Date | Tests that use it |
| --- | --- | --- | --- |
| As-is | What is it worth today, in its current condition? | Effective date of the appraisal | Day-one advance: LTAIV (F-RES-03), bridge as-is test (F-MF-13), purchase LTV (F-CORE-14) |
| As-completed (ARV) | What will it be worth when the work is done? | Projected completion date | Loan-to-ARV (F-RES-02) for fix-and-flip and construction |
| As-stabilized | What will it be worth once leased up to normal occupancy? | Projected stabilization date | Bridge stabilized LTV (F-MF-13); term loan sizing at refinance |

The federal definition of market value is "the most probable price" in a competitive, open market. It assumes typical motivation, informed parties, reasonable exposure time and cash-equivalent terms (12 CFR 323.2(h) [VERIFY: eCFR via Cornell LII, checked 20 Nov 2026]). For renovation loans, a lender generally asks for the as-is value. As needed, it also asks for prospective values on completion and stabilization [VERIFY: Interagency Appraisal and Evaluation Guidelines, 75 FR 77450, 10 Dec 2010].

**Two terms to know.** A prospective value is an opinion as of a future date. It rests on extraordinary assumptions that must be disclosed (Freddie Mac appraisal guidance). A hypothetical value assumes something that is not true today, such as "renovations complete now." Never put either one in an as-is test.

### T2. Direct capitalization (Objective 2, 20 minutes)

The income approach turns one year of NOI into value with a cap rate (F-CORE-13): value = NOI ÷ cap rate. Turn it round and the implied cap rate is NOI ÷ price.

A lower cap rate means a higher value for the same NOI. Small rate moves create large value moves, so always test ±25 basis points.

**Worked example 1: Birchwood as-stabilized value and sensitivity (RD-COM-01)**

1. **Formula.** F-CORE-13: V = NOI ÷ CR. F-CORE-14: LTV = L ÷ V.
2. **Inputs.** Stabilized NOI $480,000 (C4 practice); appraiser's cap rate 8.00%; term loan $3,900,000; 65% LTV limit for unanchored retail (COM-TRM limits table).
3. **Substitution.** At 8.00%: $480,000 ÷ 0.0800 = $6,000,000.00; LTV $3,900,000 ÷ $6,000,000 = 65.00%. At 8.25%: $480,000 ÷ 0.0825 = $5,818,181.82; LTV 67.03%. At 7.75%: $480,000 ÷ 0.0775 = $6,193,548.39; LTV 62.97%.
4. **Result.** The base case passes at exactly 65.00%. At 8.25%, the 65% test allows $3,781,818.18. Rounded down to the nearest $1,000 (CORE-PRC-05), the loan is $3,781,000, which is $119,000 less. A 25-basis-point move is worth about $182,000 to $194,000 of value.

**Common slip.** Capping a pro forma NOI and calling it as-is value. The as-is value caps in-place income; the as-stabilized value caps the stabilized income.

### T3. Lower of cost or value (Objective 3, 15 minutes)

On a purchase, value for LTV is the lower of the price and the appraisal (F-CORE-14). That is also the federal value definition for purchase loans [VERIFY: 12 CFR 365 Appendix A, eCFR, checked 19 Nov 2026]. A high appraisal cannot create equity the buyer has not paid for.

**Worked example 2: Birchwood bridge LTV (RD-COM-01)**

1. **Formula.** F-CORE-14: LTV = L ÷ min(price, appraisal).
2. **Inputs.** Price $4,400,000; as-is appraisal $4,500,000; bridge loan $2,860,000; limit 65% as-is for unanchored retail (COM-BR limits table).
3. **Substitution.** min($4,400,000, $4,500,000) = $4,400,000. LTV = $2,860,000 ÷ $4,400,000 = 65.00%.
4. **Result.** Passes at exactly 65.00%. Dividing by the appraisal would show 63.56% and invite a $2,925,000 loan, $65,000 too much.

**Worked example 3: Maple Run day-one advance (RD-RES-01)**

1. **Formula.** F-RES-03: LTAIV = initial advance ÷ as-is value, using the lower of price and appraisal (F-CORE-14).
2. **Inputs.** Price $300,000; as-is appraisal $310,000; ARV $520,000; initial advance $240,000; total loan $340,000.
3. **Substitution.** As-is value = min($300,000, $310,000) = $300,000. LTAIV = $240,000 ÷ $300,000 = 80.00%. LTARV (F-RES-02) = $340,000 ÷ $520,000 = 65.38%.
4. **Result.** Both pass the Tier 2 caps in RD-RES-01. Note that ARV is a different value for a different test. It never replaces as-is.

### T4. The appraisal process (Objective 4, 15 minutes)

| Rule | What it requires | Why |
| --- | --- | --- |
| CORE-VAL-01 | The lender orders the appraisal through an appraisal management company from a state-certified appraiser. Borrower-supplied reports are not accepted. | Independence: the appraiser works for the lender |
| CORE-VAL-02 | The effective date is no more than 120 days before closing (F-CORE-36). | Markets move; 120 days is our conservative choice |
| CORE-VAL-03 | Every appraisal gets a desk review. BPOs and AVMs are secondary checks only. | A second look catches weak comparables and cap rates |

**Measure age from the effective date, not the report date.** The effective date is when the value applies. The report is often signed days or weeks later.

**Federal thresholds, for context [VERIFY: 12 CFR 323.3(a) and (b), Cornell LII, checked 20 Nov 2026].** Regulated banks need no certified appraisal in three cases:

- commercial real estate transactions of $500,000 or less;
- residential transactions of $400,000 or less;
- business loans of $1 million or less that do not rely on real estate income or sale.

They must still get an evaluation. Maple Run's $340,000 loan falls under the residential threshold, yet our policy still requires a full appraisal (CORE-VAL-01). Course policy is stricter than the floor.

**Worked example 4: Maple Run appraisal age (RD-RES-01)**

1. **Formula.** F-CORE-36: age = closing date − effective date, in actual days.
2. **Inputs.** Appraisal effective 12 days before closing; limit 120 days (CORE-VAL-02).
3. **Substitution.** 12 ≤ 120.
4. **Result.** Passes. If closing slipped past day 120, the file would need a new appraisal or an update before funding.

### T5. Negative leverage (Objective 5, 15 minutes)

**Leverage is positive** when the cap rate is above the loan constant: borrowing raises the equity return. **It is negative** when the constant is above the cap rate. Each borrowed dollar costs more than it earns, so equity earns less than an all-cash buyer would.

**Worked example 5: Birchwood term loan (RD-COM-01)**

1. **Formula.** Loan constant = ADS ÷ L (F-CORE-04). Cash-on-cash = (NOI − ADS) ÷ equity.
2. **Inputs.** NOI $480,000; value $6,000,000 (cap 8.00%); loan $3,900,000; ADS $330,772.68 (C3).
3. **Substitution.** Constant = $330,772.68 ÷ $3,900,000 = 8.4814%. Equity = $6,000,000 − $3,900,000 = $2,100,000. Cash-on-cash = ($480,000 − $330,772.68) ÷ $2,100,000 = 7.11%.
4. **Result.** The cap rate (8.00%) is below the constant (8.4814%): negative leverage. Equity earns 7.11% against 8.00% unlevered.

**Why a lender cares.** Under negative leverage, value growth or rent growth must do the work. There is less cash cushion for a dip. DSCR still passes here (C4: 1.31x on NCF), but the borrower's incentive to keep investing is weaker.

## 5. Practice (45 minutes)

Work alone, then check the model answer. The case is RD-MF-01 Cedar Court. It differs from the worked examples in property type and cap rate level (LD-05). Item 6 shows what happens when the appraisal comes in below the price.

1. The as-stabilized value is $8,600,000 on a stabilized NOI of $575,000 (C4). Find the implied cap rate.
2. A reviewer thinks 7.00% is the right cap rate. Find the value, and the stabilized LTV of the $5,140,000 total commitment. Does it pass the 70% limit (MF-BR-04)?
3. Find the going-in cap rate on in-place NOI of $410,000: first on the $6,200,000 price, then on the $6,300,000 appraisal. Which one is the as-is value for sizing, and why?
4. Suppose the appraisal's effective date is 19 Jul 2026 and closing is 20 Nov 2026. Find the age. What must happen? What if the effective date were 23 Jul?
5. The exit test uses the 6.55% agency rate plus a 0.50% buffer, 7.05%, over 30 years, a constant of 8.0240% (MF-BR-08). Compare it with the stabilized NCF cap rate ($560,000 ÷ $8,600,000). Is leverage at exit positive or negative?
6. Suppose Cedar Court's as-is appraisal had come in at $6,000,000, below the $6,200,000 price. Find the as-is value for sizing and the day-one loan at 70% (MF-BR-02). How much smaller is it than $4,340,000?

**Model answer**

1. F-CORE-13: $575,000 ÷ $8,600,000 = 6.69%.
2. $575,000 ÷ 0.0700 = $8,214,285.71. Stabilized LTV = $5,140,000 ÷ $8,214,285.71 = 62.57% (F-CORE-14). Passes 70%. The cap rate would have to reach 7.83% before the 70% limit binds.
3. On price: $410,000 ÷ $6,200,000 = 6.61%. On appraisal: 6.51%. The as-is value for sizing is the $6,200,000 price, the lower figure (F-CORE-14).
4. 20 Nov 2026 − 19 Jul 2026 = 124 days. That fails CORE-VAL-02, so order an update or new appraisal before closing. From 23 Jul it is 120 days, which passes (no more than 120).
5. Stabilized NCF cap 6.51% is below the 8.0240% constant: negative leverage. That is why the exit test sizes on DSCR, not on value: the take-out is $5,583,273.69 (F-MF-20), well below 80% LTV.
6. As-is value = min($6,200,000, $6,000,000) = $6,000,000 (F-CORE-14). Day-one loan = 70% × $6,000,000 = $4,200,000.00 (MF-BR-02). That is $140,000 less than $4,340,000, so the buyer brings $140,000 more equity.

**Self-score.** One point per correct figure (10 figures). Eight or more: move on. Fewer: redo the matching worked example.

## 6. Quiz: C5-quiz-v0

Pass mark: 80% (10 of 12) and every item marked **critical** correct. Two retakes, each with the other set. Items are independent unless they say otherwise.

### Set A

A small office building has NOI of $252,000. Items 1, 2, 6 and 11 use it.

1. (O2) The appraiser's cap rate is 7.20%. Value? A) $1,814,400.00 B) $3,500,000.00 C) $3,150,000.00 D) $3,600,000.00
2. (O2) The asking price is $3,600,000. Implied cap rate? A) 7.20% B) 6.50% C) 7.00% D) 14.29%
3. **(Critical, O3)** Purchase price $2,000,000; appraisal $2,100,000; loan $1,400,000. LTV for the policy test? A) 66.7% B) 70.0% C) 68.3% D) 67.5%
4. (O1) Which value sizes the day-one advance on a renovation loan? A) As-is B) As-completed (ARV) C) As-stabilized D) Insurable value
5. (O1) An appraiser reports a value "as if the renovation were complete today." That is: A) An as-is value B) A hypothetical value C) A market rent D) An evaluation
6. (O2) The cap rate moves from 7.00% to 7.50%. Change in value? A) −$240,000 B) −$180,000 C) +$240,000 D) −$126,000
7. **(Critical, O4)** Appraisal effective 15 Jul 2026; closing 18 Nov 2026. Result under CORE-VAL-02? A) 126 days: passes B) 126 days: fails C) 120 days: passes D) 4 months: passes
8. (O4) Which date measures appraisal age? A) Report signature date B) Application date C) Effective date of value D) Inspection booking date
9. (O4) The borrower sends an appraisal it ordered last month. Under CORE-VAL-01: A) Accept if certified B) Accept with a desk review C) Not accepted; the lender orders its own D) Accept if under 120 days
10. **(Critical, O5)** Cap rate 6.50%; loan constant 7.80%. Which is true? A) Positive leverage B) Negative leverage: levered equity return is below 6.50% C) DSCR must be under 1.00x D) LTV must exceed 80%
11. (O3) Value $3,360,000; LTV limit 65%. Maximum loan? A) $2,184,000.00 B) $2,340,000.00 C) $5,169,230.77 D) $2,016,000.00
12. (O1) Which is NOT part of the market value definition in 12 CFR 323.2? A) Typically motivated buyer and seller B) Reasonable exposure time C) Price inflated by seller financing D) Cash or equivalent terms

**Answer key, Set A**

1. B. $252,000 ÷ 0.072 = $3,500,000.00 (F-CORE-13).
2. C. $252,000 ÷ $3,600,000 = 7.00%.
3. B. $1,400,000 ÷ min($2,000,000, $2,100,000) = 70.0% (F-CORE-14). A uses the appraisal.
4. A. As-is (T1).
5. B. A hypothetical condition: not true today (T1).
6. A. $252,000 ÷ 0.07 = $3,600,000; ÷ 0.075 = $3,360,000; change −$240,000.
7. B. 126 days is over 120 (F-CORE-36).
8. C. Age runs from the effective date of value; the report is often signed later (T4).
9. C. The lender orders its own appraisal through an AMC; borrower-supplied reports are never accepted (CORE-VAL-01).
10. B. The constant is above the cap rate (T5).
11. A. 65% × $3,360,000 = $2,184,000.00.
12. C. Market value excludes prices distorted by special financing or concessions.

### Set B

A retail building has NOI of $315,000. Items 1, 2, 6 and 11 use it.

1. (O2) The appraiser's cap rate is 7.50%. Value? A) $2,362,500.00 B) $4,000,000.00 C) $4,200,000.00 D) $4,500,000.00
2. (O2) The asking price is $4,500,000. Implied cap rate? A) 7.50% B) 7.00% C) 6.50% D) 14.29%
3. **(Critical, O3)** Purchase price $1,500,000; appraisal $1,440,000; loan $1,008,000. LTV for the policy test? A) 67.2% B) 68.6% C) 70.0% D) 65.0%
4. (O1) Which value is the denominator in loan-to-ARV (F-RES-02)? A) As-is B) As-completed C) Purchase price D) Assessed value
5. (O1) A value "as of the projected stabilization date, 18 months from now" is: A) As-is B) Prospective as-stabilized, with extraordinary assumptions C) A BPO D) Liquidation value
6. (O2) The cap rate moves from 7.50% to 7.00%. Change in value? A) +$300,000 B) −$300,000 C) +$210,000 D) +$157,500
7. **(Critical, O4)** Appraisal effective 21 Jul 2026; closing 18 Nov 2026. Result under CORE-VAL-02? A) 120 days: fails B) 121 days: fails C) 120 days: passes D) 119 days: passes
8. (O4) An AVM comes in $50,000 above the appraisal. Under CORE-VAL-03 you: A) Use the AVM B) Average them C) Treat the AVM as a secondary check and keep the reviewed appraisal D) Order a BPO to replace the appraisal
9. (O4) What review does every appraisal get (CORE-VAL-03)? A) None if certified B) A desk review C) A second full appraisal D) A borrower sign-off
10. **(Critical, O5)** NOI $480,000; value $6,000,000; loan $3,900,000; ADS $330,772.68. Levered cash-on-cash? A) 8.00% B) 7.11% C) 12.31% D) 3.83%
11. (O3) Value $4,200,000; LTV limit 65%. Maximum loan? A) $2,730,000.00 B) $2,925,000.00 C) $6,461,538.46 D) $2,520,000.00
12. (O1) For a renovation loan, the 2010 Interagency Guidelines say a lender generally asks for: A) As-is only B) As-is and, as needed, prospective values on completion and stabilization C) Stabilized only D) Liquidation value only

**Answer key, Set B**

1. C. $315,000 ÷ 0.075 = $4,200,000.00 (F-CORE-13).
2. B. $315,000 ÷ $4,500,000 = 7.00%.
3. C. $1,008,000 ÷ min($1,500,000, $1,440,000) = 70.0%. A uses the price; here the appraisal is lower.
4. B. Loan-to-ARV divides the loan by the as-completed value (F-RES-02).
5. B. A value as of a future date is prospective and rests on extraordinary assumptions (T1).
6. A. $4,500,000 − $4,200,000 = +$300,000.
7. C. Exactly 120 days passes (no more than 120).
8. C. AVMs and BPOs are secondary checks only, so the reviewed appraisal stands (CORE-VAL-03).
9. B. Every appraisal gets a desk review, however it was prepared (CORE-VAL-03).
10. B. ($480,000 − $330,772.68) ÷ $2,100,000 = 7.11% (T5).
11. A. 65% × $4,200,000 = $2,730,000.00.
12. B. The guidelines ask for the as-is value and, as needed, prospective values on completion and stabilization (T1).

## 7. OJT task: C5-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Underwriter (appraisal desk reviewer) |
| Output | A one-page desk review of the Birchwood Plaza as-stabilized appraisal for the month-24 term loan |
| Source | RD-COM-01 property table and month-24 sizing; C4 practice NOI; CBRE H1 2026 Cap Rate Survey (public summary) |
| Time allowed | 45 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All deal data fictional. Market data is real and cited; do not attach it to a running deal as fact |

**Rubric (meets standard = all five)**

1. Names each value in the file (as-is $4,500,000; as-stabilized $6,000,000) and the test each one feeds.
2. Recomputes value from NOI and cap rate (F-CORE-13), with ±25 bp sensitivity and the LTV at each.
3. Confirms the bridge used the lower of price and appraisal (F-CORE-14).
4. Compares the 8.00% cap rate with cited market evidence and says whether it looks aggressive or conservative.
5. States the leverage position (cap rate vs constant) and a clear recommendation.

**Model answer**

| Check | Finding | Rule |
| --- | --- | --- |
| Values and uses | As-is $4,500,000 fed the bridge, capped by the $4,400,000 price. As-stabilized $6,000,000 feeds the term loan | F-CORE-14; T1 |
| Direct cap | $480,000 ÷ 8.00% = $6,000,000.00. At 8.25%: $5,818,181.82 (LTV 67.03%, fails). At 7.75%: $6,193,548.39 (62.97%) | F-CORE-13 |
| Market evidence | CBRE's H1 2026 survey reports Class A neighborhood retail at 6.75%-7.25% in Albuquerque and 6.00%-6.75% in Houston. A 70%-leased unanchored strip should price wider, so 8.00% looks reasonable to conservative. Neither market is in the Midwest, so treat them as rough context and check an Indianapolis range (see What to look up yourself) | CORE-VAL-03 |
| Leverage | Constant 8.4814% vs cap 8.00%: negative. Cash-on-cash 7.11% | T5 |
| Recommendation | Accept the value. Condition the term loan on 65% of the lower of $6,000,000 and any updated value at closing. Note that a 25 bp cap move takes $119,000 off the loan, after rounding down to the nearest $1,000 (CORE-PRC-05) | CORE-VAL-02 |

## 8. Job aid: C5-jobaid-v0 (one page)

**Which value for which test**

1. Day-one advance and purchase LTV: as-is, capped at the price (F-CORE-14, F-RES-03).
2. Fix-and-flip and construction exit: as-completed / ARV (F-RES-02).
3. Bridge stabilized test and term loan: as-stabilized (F-MF-13, COM-TRM).

**Direct cap (F-CORE-13)**: value = NOI ÷ cap rate; implied cap = NOI ÷ price. Always run ±25 bp.

**LTV (F-CORE-14)** = loan ÷ min(price, appraisal) on a purchase; the appraisal alone on a refinance.

**Appraisal checks**: lender-ordered via AMC from a state-certified appraiser (CORE-VAL-01). Effective date no more than 120 days before closing (CORE-VAL-02, F-CORE-36). Desk review on every report; AVMs and BPOs only as checks (CORE-VAL-03).

**Leverage**: cap rate above the constant is positive; below is negative.

**Mini-example**: NOI $105,000 at 7.00% = $1,500,000. At 7.25% = $1,448,275.86. A $1,050,000 loan is 70.0% and 72.5%.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 Value types | T1 | 3 | 3 | 4, 5, 12 / 4, 5, 12 | 1 |
| O2 Direct cap | T2 | 1 | 1, 2 | 1, 2, 6 / 1, 2, 6 | 2 |
| O3 Lower of cost or value | T3 | 2, 3 | 3 | 3, 11 / 3, 11 | 3 |
| O4 Appraisal rules | T4 | 4 | 4 | 7, 8, 9 / 7, 8, 9 | 4 |
| O5 Negative leverage | T5 | 5 | 5 | 10 / 10 | 5 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [POLICY], [CONFIRM] or [DATA] tags | Met. [VERIFY] tags on legal statements carry source and date, as required |
| Every calculation cites a formula ID; thresholds cite rules | Met |
| Four-line worked formulas; re-checked by a second person | Four lines met; second-person check pending (solo: re-run in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-COM-01, RD-RES-01, RD-MF-01 |
| Lesson follows LD-04 order; alignment matrix; fits 3 hours | Met (180 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (12 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no colour-only meaning |

**Self-check.**

1. Which value sizes the day-one advance on a purchase? **Answer:** The as-is value, capped at the price: the lower of price and appraisal (F-CORE-14).
2. NOI is $200,000 and the cap rate is 8.00%. What is the value, and what is it at 8.25%? **Answer:** $200,000 ÷ 0.0800 = $2,500,000.00; $200,000 ÷ 0.0825 = $2,424,242.42 (F-CORE-13).
3. The price is $1,000,000, the appraisal $950,000 and the loan $650,000. What is the LTV? **Answer:** $650,000 ÷ min($1,000,000, $950,000) = $650,000 ÷ $950,000 = 68.4% (F-CORE-14).
4. An appraisal is effective 1 Aug 2026 and closing is 1 Dec 2026. Does it pass? **Answer:** No. 31 + 30 + 31 + 30 = 122 days, over the 120-day limit (CORE-VAL-02, F-CORE-36).
5. The cap rate is 7.00% and the loan constant is 7.50%. Is leverage positive or negative? **Answer:** Negative, because the constant is above the cap rate (F-CORE-04, T5).

**Real-world check (researched 19-20 Nov 2026): where cap rates and appraisal rules stand.**

- **Cap rates held flat in H1 2026.** CBRE's survey drew on about 3,600 estimates in over 50 markets, gathered in late June. The 10-year Treasury peaked at 4.67% in mid-May. Neighborhood retail compressed the most; infill multifamily drew the most bearish outlook ([CBRE, 12 Aug 2026](https://www.cbre.com/insights/reports/us-cap-rate-survey-h1-2026); market ranges via [Orion summary](https://www.orionprop.com/?p=32516)).
- **Negative leverage is common now.** A broker's Q2 2026 report puts multifamily cap rates near 5.2% and retail near 6.7% (secondary source, [Apartment Loan Store, 10 Aug 2026](https://apartmentloanstore.com/index.php/node/12718)). Freddie Mac's 10-year small-balance rate was 6.55% on 16 Nov 2026 (C3 research), a constant above 7.6%. So most stabilized multifamily buys at today's caps sit in negative leverage, like Cedar Court.
- **Appraisal standards.** The 2024 edition of USPAP took effect 1 Jan 2024. It has no set end date; the Appraisal Standards Board updates it as needed [VERIFY: [The Appraisal Foundation, USPAP page](https://www.appraisalfoundation.org/pages/uspap); checked 22 Nov 2026]. New appraiser qualification criteria took effect 1 Jan 2026 [VERIFY: AQB Criteria, via Iowa rulemaking, 2026].
- **New federal law.** The 21st Century ROAD to Housing Act (P.L. 119-101) became law on 11 Jul 2026. Its appraisal provisions mainly cover federally backed home mortgages, such as reconsideration-of-value procedures and FHA appraiser eligibility. They do not change business-purpose lending thresholds [VERIFY: [govinfo P.L. 119-101](https://www.govinfo.gov/content/pkg/PLAW-119publ101/pdf/PLAW-119publ101.pdf); Appraisal Institute, 21 Jul 2026].

**What to look up yourself.** CBRE's full cap rate tables by market and class sit behind a registration form. Register there to get the Class B and C neighborhood retail range for Indianapolis or the nearest Midwest market. Compare it with Birchwood's 8.00% cap rate. Everything else in this tab was found and cited.

**How to check it:** in a spreadsheet, `=480000/8.25%` should give 5,818,181.82, and `=3900000/(480000/8.25%)` should give 0.6703, the failing LTV in worked example 1.
