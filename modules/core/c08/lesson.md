# C8: Loan structuring and sizing: leverage tests, reserves, pricing

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C8-lesson-v0, C8-quiz-v0 (sets A and B), C8-ojt-v0, C8-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C3, C5 |
| Bloom's levels | 3 and 4 (LD-02) |
| Formulas | F-CORE-04, -06, -14 to -20, -28; F-RES-02, -04, -07, -08, -17; F-MF-12, -13, -20; F-COM-08, -10, -17 |
| Rules | RES-FF-01 to -04; MF-BR-05 to -08, -14; COM-BR-03 to -06; COM-TRM-09; COM-BR-09; RES-DSCR-01 to -03, -07, -08, -10, -12; CORE-PRC-01 to -03, -05; D-CONV-01, -06; D-CORE-17, -27 |
| Running deals | Worked examples: RD-RES-01 Maple Run and RD-COM-01 Birchwood Plaza. Practice: RD-MF-01 Cedar Court (LD-08) |
| Status | v0.2. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0.2, 22 Nov 2026: review fixes, policy decisions D-CORE-17 onward, self-check. v0, 20 Nov 2026: first draft; all numbers computed in code. Same day: sizing now divides by the unrounded loan constant across the policy, library and running deals |

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

Birchwood Plaza's term loan faces three tests. LTV allows $3,900,000. DSCR allows $3,936,238.02. Debt yield allows $4,822,222.22. The borrower asks for the middle one.

The answer is $3,900,000, and the memo must say LTV binds. By the end of this module you can run every test for any of our products, pick the binding one, and price the result.

## 2. Objectives

By the end of C8, you will be able to:

1. **Calculate** the leverage tests (LTV, LTC, LTARV, purchase advance) and the loan each one allows (F-CORE-14, -15; F-RES-02, -04).
2. **Calculate** the income tests: maximum loan by DSCR and by debt yield, using the unrounded constant (F-CORE-16 to -18).
3. **Select** the binding test, round down correctly, and name it in the memo (F-CORE-19).
4. **Size** an interest reserve, and decide when one is needed (F-CORE-20; COM-BR-03, -04; MF-BR-07).
5. **Price** the loan: note rate and points (F-CORE-28, F-CORE-06; COM-BR-06; MF-BR-14).

## 3. Teach

### T1. Leverage tests (Objective 1, 20 minutes)

Each leverage test turns a limit into a dollar amount. Run them all; never skip one because it "usually doesn't bind."

| Test | Formula | Used by |
| --- | --- | --- |
| LTV | limit × value; value = lower of price and appraisal on a purchase | All families (F-CORE-14) |
| LTC | limit × total cost, including future funding | All families (F-CORE-15, F-RES-04) |
| LTARV | limit × after-repair value | Residential fix-and-flip (F-RES-02) |
| Purchase advance | limit × price + 100% of rehab | Residential fix-and-flip (RES-FF-01, -02) |

Residential limits rise with the sponsor's tier (RES-FF-01 to -04). For Tiers 0-3, LTC and purchase advance are 75% / 80% / 85% / 85%. LTARV is 65% / 70% / 70% / 70%.

**Worked example 1: Maple Run leverage (RD-RES-01)**

1. **Formula.** F-RES-04: LTC limit × cost. F-RES-02: LTARV limit × ARV. RES-FF-01, -02: LTP × price + rehab.
2. **Inputs.** Dana is Tier 2 (C6): LTC 85%, LTARV 70%, purchase 85%. Price $300,000; rehab $100,000; total cost $400,000; ARV $520,000.
3. **Substitution.** LTC: 85% × $400,000 = $340,000. LTARV: 70% × $520,000 = $364,000. Purchase: 85% × $300,000 + $100,000 = $355,000.
4. **Result.** Lowest is $340,000: LTC binds. The day-one advance is $240,000 and $100,000 is held back for rehab.

### T2. Income tests and the loan constant (Objective 2, 20 minutes)

**Maximum loan by DSCR** (F-CORE-17) = income ÷ minimum DSCR ÷ loan constant. **Maximum loan by debt yield** (F-CORE-18) = income ÷ minimum debt yield. Families set the income line: NCF for multifamily and commercial. Residential DSCR loans test qualifying rent ÷ monthly PITIA instead (F-RES-07).

**Divide by the unrounded constant.** The constant is ADS ÷ loan (F-CORE-04). Size with the full value, because a rounded K moves the loan: Birchwood's K of 0.0848135077 gives $3,936,238.02, but 0.08481351 gives $3,936,237.92.

**Residential DSCR primer (used in the OJT).** A DSCR rental loan sizes on rent, not NOI. DSCR = qualifying monthly rent ÷ monthly PITIA (F-RES-07). Qualifying rent is the lesser of the lease and the appraiser's market rent (RES-DSCR-01). PITIA is principal and interest on 30-year amortization, plus taxes, insurance and HOA dues (F-RES-08, RES-DSCR-10). Qualify on the amortizing payment, even on an interest-only loan (RES-DSCR-07). The minimum is 1.00x for a purchase or rate-term refinance, and 1.10x for cash-out (RES-DSCR-02). Maximum LTV comes from the FICO matrix (RES-DSCR-03), and the rate from the DSCR grid (RES-DSCR-12). Keep 3 months' PITIA in post-closing reserves on loans up to $1,000,000 (RES-DSCR-08). The maximum loan by DSCR is (rent − monthly taxes, insurance and HOA) ÷ the monthly P&I constant (F-RES-17).

**Worked example 2: Birchwood term loan (RD-COM-01, month 24)**

1. **Formula.** COM-TRM-09 unanchored retail: 65% LTV, 1.30x, 9.0%. F-COM-08: LTV 65% × value; DSCR NCF ÷ 1.30 ÷ K; debt yield NCF ÷ 9.0%.
2. **Inputs.** As-stabilized value $6,000,000; NCF $434,000; 7.00%, 25-year amortization; ADS $330,772.68 (C3), so K = $330,772.68 ÷ $3,900,000.
3. **Substitution.** LTV: 65% × $6,000,000 = $3,900,000.00. DSCR: K = $330,772.68 ÷ $3,900,000 = 0.0848135077 (unrounded), so $434,000 ÷ 1.30 ÷ 0.0848135077 = $3,936,238.02. Debt yield: $434,000 ÷ 9.0% = $4,822,222.22.
4. **Result.** Feeds T3. Note how close DSCR is: NCF just $3,995.52 lower would make DSCR bind.

### T3. The binding test (Objective 3, 10 minutes)

The loan is the lowest result of every test that applies (F-CORE-19). Round down to the nearest $1,000, never up past any test (CORE-PRC-05, D-CORE-17). Keep every test result at full precision. Name the binding test in the memo, because it tells committee what would have to change for a bigger loan.

**Worked example 3: Birchwood binding test (RD-COM-01)**

1. **Formula.** F-CORE-19: L = min(LTV, DSCR, DY), rounded down to the nearest $1,000 (CORE-PRC-05).
2. **Inputs.** $3,900,000.00; $3,936,238.02; $4,822,222.22.
3. **Substitution.** min = $3,900,000.00, already a $1,000 multiple.
4. **Result.** $3,900,000; LTV binds. A higher value, not more income, would be needed to lend more.

| Test | Limit | Result | Binds? |
| --- | --- | --- | --- |
| LTV | 65% × $6,000,000 | $3,900,000.00 | Yes |
| DSCR | 1.30x at K = 0.0848135077 | $3,936,238.02 | No |
| Debt yield | 9.0% | $4,822,222.22 | No |

**Bridge sizing has two stages.** The day-one advance comes from as-is tests. The total commitment adds future funding, then must pass LTC and an exit test.

**Worked example 4: Birchwood bridge (RD-COM-01, closing)**

1. **Formula.** COM-BR-09 unanchored retail: 65% as-is, 70% LTC, exit 1.30x and 9.5% debt yield at 7.75% (F-COM-10).
2. **Inputs.** Price $4,400,000; as-is appraisal $4,500,000; total cost $5,180,000; future funding $660,000; stabilized NCF $434,000; exit ADS on $3,520,000 = $319,050.84.
3. **Substitution.** Day one: 65% × min($4,400,000, $4,500,000) = $2,860,000. Commitment $2,860,000 + $660,000 = $3,520,000. LTC cap 70% × $5,180,000 = $3,626,000. Exit by DSCR: $434,000 ÷ 1.30 ÷ ($319,050.84 ÷ $3,520,000) = $3,683,232.62. Exit by debt yield: $434,000 ÷ 9.5% = $4,568,421.05.
4. **Result.** The $3,520,000 commitment is below every cap. The as-is test binds the day-one advance.

### T4. Interest reserves (Objective 4, 15 minutes)

A floating-rate bridge must test in-place coverage at the higher of the note rate and the cap strike plus spread (COM-BR-03, F-MF-12). If coverage is under 1.00x, an interest reserve funds the shortfall (COM-BR-04 to projected stabilization; MF-BR-07 for 12 months).

A **full interest reserve** (F-CORE-20) instead holds back all the interest for a period: balance × rate ÷ 360 × actual days.

**Worked example 5: Birchwood coverage, then a what-if (RD-COM-01)**

1. **Formula.** Coverage = NCF ÷ (balance × test rate). Shortfall reserve (F-COM-17) = (interest − NCF) ÷ 12 × months. F-CORE-20 = L × r ÷ 360 × days.
2. **Inputs.** Day-one balance $2,860,000; test rate max(7.65%, 4.25% + 4.00%) = 8.25%; in-place NCF $254,000. What-if NCF $200,000; 18 months to projected stabilization.
3. **Substitution.** Interest = $2,860,000 × 8.25% = $235,950. Actual: $254,000 ÷ $235,950 = 1.08x, so no reserve. What-if: $200,000 ÷ $235,950 = 0.85x. Shortfall reserve = ($235,950 − $200,000) ÷ 12 × 18 = $53,925.00. A full 184-day reserve would be $2,860,000 × 8.25% ÷ 360 × 184 = $120,596.67.
4. **Result.** As closed, no reserve. In the what-if, fund $53,925.00 at closing and add it to the commitment, then re-run LTC. The shortfall reserve uses nominal interest, like every test (D-CONV-01); billing is Actual/360, so check the balance quarterly.

### T5. Pricing (Objective 5, 15 minutes)

**Residential RTL** (F-CORE-28, CORE-PRC-02): tier base rate plus adjusters, kept within 8.50%-12.75%.

| Tier | Base rate | Points |
| --- | --- | --- |
| 3 (10+) | 9.50% | 1.00 |
| 2 (5-9) | 10.00% | 1.50 |
| 1 (1-4) | 10.75% | 2.00 |
| 0 | 11.50% | 2.50 |

Add every adjuster that applies, from the table below (F-CORE-28). Points are charged on the total commitment (F-CORE-06), never below 1.00 (CORE-PRC-01).

| RTL adjuster (CORE-PRC-02) | Add to rate |
| --- | --- |
| Qualifying FICO 680-699 | +0.50% |
| Leverage within 2.5 points of the product maximum | +0.25% |
| Ground-up construction | +0.75% |

**Floating bridges** price over SOFR. Multifamily is 375 bp for a value-add bridge, or 325 bp for a stabilized bridge. Three risks each add 25 bp, as the table below shows (MF-BR-14). Commercial is at least 400 bp, office 500 bp, with 1.00% origination (COM-BR-06). Every combination is tested against state usury and fee rules before the term sheet (CORE-PRC-03).

| Multifamily bridge item (MF-BR-14) | Spread or fee |
| --- | --- |
| Base, value-add bridge | SOFR + 375 bp |
| Base, stabilized bridge | SOFR + 325 bp |
| Total commitment over 70% of cost | +25 bp |
| As-is debt yield below 8.0% | +25 bp |
| Occupancy below 85% | +25 bp |
| Origination | 1.00% |

**Worked example 6: Maple Run pricing (RD-RES-01)**

1. **Formula.** F-CORE-28: base + adjusters; F-CORE-06: commitment × points ÷ 100.
2. **Inputs.** Tier 2; mid-score 712; LTC 85.0% at the 85% maximum; rehab, not ground-up; commitment $340,000.
3. **Substitution.** 10.00% + 0.00% + 0.25% + 0.00% = 10.25%. Points: $340,000 × 1.50 ÷ 100 = $5,100.00.
4. **Result.** 10.250% note rate, inside the band; $5,100 origination.

## 5. Practice (45 minutes)

Work alone, then check the model answer. The case is RD-MF-01 Cedar Court, a multifamily bridge. It differs from the worked examples in product, the as-is test with capex, and the debt-yield floors (LD-05).

1. Run the three F-MF-13 tests: 75% LTC on $7,200,000; 70% stabilized LTV on $8,600,000; 70% as-is (lower of $6,200,000 price and $6,300,000 appraisal) plus $800,000 capex. Which binds?
2. Find the day-one funding, and the as-is and stabilized debt yields on NCF of $395,000 and $560,000 (floors 7.0% and 8.5%, MF-BR-05, -06).
3. Test in-place coverage at the higher of 7.65% and 4.25% + 4.00%. Is an interest reserve needed (MF-BR-07)?
4. Exit test (MF-BR-08): 7.05% over 30 years gives an unrounded constant of 0.0802396631; stabilized NCF $560,000; 1.25x. Find the take-out and the cushion over the total commitment.
5. Price it: SOFR 3.65% (the latest stated SOFR, carried forward as a course assumption, D-CORE-27), MF-BR-14, 1.00% origination on the total commitment.

**Model answer**

1. LTC $5,400,000; stabilized LTV $6,020,000; as-is 70% × $6,200,000 + $800,000 = $5,140,000. As-is binds (F-MF-13).
2. Day one = $5,140,000 − $800,000 = $4,340,000. As-is DY $395,000 ÷ $4,340,000 = 9.10%; stabilized $560,000 ÷ $5,140,000 = 10.89%. Both pass.
3. $4,340,000 × 8.25% = $358,050. $395,000 ÷ $358,050 = 1.10x ≥ 1.00x: no reserve.
4. $560,000 ÷ 1.25 ÷ 0.0802396631 = $5,583,273.69 (F-MF-20); cushion $443,273.69.
5. Commitment is 71.4% of cost, over 70%: +25 bp. As-is debt yield 9.10% (not below 8.0%) and occupancy 88% (not below 85%) add nothing. 3.65% + 3.75% + 0.25% = 7.65% (MF-BR-14). Origination $5,140,000 × 1.00% = $51,400.00.

**Self-score.** One point per correct figure, 10 in all. Eight or more: move on. Fewer: redo the matching worked example.

## 6. Quiz: C8-quiz-v0

Pass mark: 80% (10 of 12) and every item marked **critical** correct. Two retakes, each with the other set. Items 1-6 share one flip; items 7-10 share one term loan.

### Set A

Flip: Tier 1 sponsor (LTC 80%, purchase 80%, LTARV 70%); price $250,000; rehab $70,000; ARV $420,000; mid-score 690. Term loan: NOI $300,000; value $4,000,000; limits 70% LTV, 1.25x DSCR, 9.0% debt yield; 7.00% over 30 years (K = 0.0798362994).

1. (O1) Maximum by LTC? A) $256,000.00 B) $272,000.00 C) $320,000.00 D) $224,000.00
2. (O1) Maximum by LTARV? A) $336,000.00 B) $294,000.00 C) $273,000.00 D) $420,000.00
3. (O1) Maximum by purchase advance plus rehab? A) $200,000.00 B) $256,000.00 C) $270,000.00 D) $320,000.00
4. **(Critical, O3)** Loan and binding test? A) $294,000; LTARV B) $270,000; purchase C) $256,000; LTC D) $273,000; average
5. (O5) Note rate (F-CORE-28)? A) 10.75% B) 11.25% C) 11.00% D) 11.50%
6. (O5) Origination at 2.00 points on the loan? A) $5,120.00 B) $512.00 C) $5,400.00 D) $6,400.00
7. (O1) Term loan by LTV? A) $2,800,000.00 B) $3,000,000.00 C) $2,600,000.00 D) $4,000,000.00
8. (O2) Term loan by DSCR? A) $3,006,151.36 B) $3,428,571.43 C) $3,757,749.63 D) $2,404,921.09
9. (O2) Term loan by debt yield? A) $2,700,000.00 B) $3,333,333.33 C) $3,000,000.00 D) $2,727,272.73
10. **(Critical, O3)** Final loan and binding test? A) $3,006,151; DSCR B) $3,333,333; debt yield C) $2,800,000; LTV D) $3,000,000; average
11. (O4) Full interest reserve: $1,000,000 at 9.00% for 182 actual days? A) $45,000.00 B) $45,500.00 C) $44,876.71 D) $90,000.00
12. **(Critical, O2)** For a sizing result, which constant do you divide by? A) The note rate B) The constant rounded to two decimals C) The unrounded constant, ADS ÷ L D) The cap strike

**Answer key, Set A**

1. A. 80% × ($250,000 + $70,000) = $256,000.00 (F-RES-04).
2. B. 70% × $420,000 (F-RES-02).
3. C. 80% × $250,000 + $70,000 (RES-FF-01, -02).
4. C. Lowest of the three (F-CORE-19).
5. D. 10.75% + 0.50% (FICO 690) + 0.25% (LTC at the maximum) = 11.50%.
6. A. $256,000 × 2.00 ÷ 100 (F-CORE-06).
7. A. 70% × $4,000,000.
8. A. $300,000 ÷ 1.25 ÷ 0.0798362994 = $3,006,151.36 (F-CORE-17).
9. B. $300,000 ÷ 9.0% (F-CORE-18).
10. C. Lowest; already a $1,000 multiple (CORE-PRC-05).
11. B. $1,000,000 × 9% ÷ 360 × 182 (F-CORE-20).
12. C. T2.

### Set B

Flip: Tier 3 sponsor (LTC 85%, purchase 85%, LTARV 70%); price $400,000; rehab $150,000; ARV $700,000; mid-score 720. Term loan: NOI $520,000; value $8,000,000; limits 65% LTV, 1.30x DSCR, 8.5% debt yield; 7.25% over 25 years (K = 0.0867368237).

1. (O1) Maximum by LTC? A) $467,500.00 B) $495,000.00 C) $550,000.00 D) $412,500.00
2. (O1) Maximum by LTARV? A) $595,000.00 B) $490,000.00 C) $455,000.00 D) $525,000.00
3. (O1) Maximum by purchase advance plus rehab? A) $340,000.00 B) $467,500.00 C) $490,000.00 D) $550,000.00
4. **(Critical, O3)** Loan and binding test? A) $490,000; LTARV B) $490,000; purchase C) $467,000; LTC, rounded down D) $482,500; average
5. (O5) Note rate (F-CORE-28)? A) 9.50% B) 9.75% C) 10.25% D) 10.00%
6. (O5) Origination at 1.00 point on the loan? A) $467.00 B) $4,670.00 C) $5,500.00 D) $9,340.00
7. (O1) Term loan by LTV? A) $5,200,000.00 B) $5,600,000.00 C) $4,800,000.00 D) $8,000,000.00
8. (O2) Term loan by DSCR? A) $5,517,241.38 B) $4,611,651.46 C) $5,995,146.90 D) $4,000,000.00
9. (O2) Term loan by debt yield? A) $6,117,647.06 B) $5,200,000.00 C) $4,420,000.00 D) $6,500,000.00
10. **(Critical, O3)** Final loan and binding test? A) $5,200,000; LTV B) $4,611,651; DSCR C) $4,611,000; DSCR, rounded down D) $4,612,000; DSCR, rounded up
11. (O4) Full interest reserve: $2,000,000 at 8.50% for 184 actual days? A) $85,000.00 B) $86,888.89 C) $85,698.63 D) $170,000.00
12. **(Critical, O4)** A commercial bridge shows in-place coverage of 0.92x at the cap test rate. What does policy require? A) Nothing B) A larger loan C) An interest reserve for the shortfall to projected stabilization D) A lower rate

**Answer key, Set B**

1. A. 85% × $550,000.
2. B. 70% × $700,000.
3. C. 85% × $400,000 + $150,000.
4. C. Lowest is $467,500 (LTC); round down to $467,000 (F-CORE-19, CORE-PRC-05).
5. B. 9.50% + 0.25% (LTC at the maximum). No FICO adjuster at 720.
6. B. $467,000 × 1.00 ÷ 100 = $4,670.00 (F-CORE-06).
7. A. 65% × $8,000,000.
8. B. $520,000 ÷ 1.30 ÷ 0.0867368237 = $4,611,651.46 (F-CORE-17).
9. A. $520,000 ÷ 8.5%.
10. C. DSCR binds at $4,611,651.46; round down to the nearest $1,000, never up (CORE-PRC-05).
11. B. $2,000,000 × 8.5% ÷ 360 × 184.
12. C. COM-BR-04: fund the shortfall to projected stabilization.

## 7. OJT task: C8-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Underwriter |
| Output | A one-page sizing table for Maple Run's refinance into a DSCR rental loan: every test, its result, the binding test and the pricing |
| Source | RD-RES-01 refinance section; RES-DSCR rules; F-RES-07 |
| Time allowed | 45 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All fictional; nothing to remove |

**Rubric (meets standard = all four)**

1. Shows LTV, DSCR and the payoff test, each with its rule.
2. Uses the unrounded constant and PITIA, not P&I alone, for DSCR.
3. Names the binding test and rounds correctly.
4. States the cash Dana needs at refinance, if any.

**Model answer**

| Test | Result | Rule |
| --- | --- | --- |
| LTV (rate-term, mid-score 712) | 70% × $520,000 = $364,000 | RES-DSCR-03 |
| Payoff needed | $340,000 + about $7,000 costs = $347,000 (66.7% LTV) | RD-RES-01 |
| PITIA on $347,000 at 7.75% | $347,000 × 0.00716412 + $520 + $160 = $3,165.95 | F-RES-07 |
| DSCR on $3,100 market rent | $3,100 ÷ $3,165.95 = 0.98x: fails 1.00x | RES-DSCR-02 |
| Binding test | DSCR binds. Max by DSCR at 7.75% (F-RES-17): ($3,100 − $680) ÷ 0.0071641225 = $337,794, or 64.96% LTV. At 65% LTV or less the rate is 7.50% (RES-DSCR-12), so the loan rises to the 65% band edge: $338,000, a $1,000 multiple (CORE-PRC-05). Check: $338,000 × 0.0069921451 + $680 = $3,043.35; $3,100 ÷ $3,043.35 = 1.02x: passes | F-CORE-19 |
| Cash at refinance | $347,000 − $338,000 = $9,000 to close, plus reserves of 3 × $3,043.35 = $9,130.05, shown as $9,130 in RD-RES-01 (RES-DSCR-08). Dana Reyes's $90,900 liquidity covers both | C6 |

## 8. Job aid: C8-jobaid-v0 (one page)

**Run every test, then take the lowest (F-CORE-19)**

1. LTV = limit × min(price, appraisal) on a purchase (F-CORE-14).
2. LTC = limit × total cost including future funding (F-CORE-15, F-RES-04).
3. LTARV = limit × ARV; purchase = limit × price + rehab (F-RES-02; RES-FF-01, -02).
4. DSCR loan = income ÷ DSCR ÷ K, with K = ADS ÷ L unrounded (F-CORE-17). Residential DSCR = qualifying rent ÷ PITIA, at least 1.00x, or 1.10x cash-out (F-RES-07, RES-DSCR-02).
5. Debt-yield loan = income ÷ minimum DY (F-CORE-18).
6. Round down to the nearest $1,000, never up past a test (CORE-PRC-05); name the binding test.

**Bridge**: day-one advance from as-is tests; commitment = day one + future funding; then LTC and exit.

**Reserves**: coverage at max(note rate, strike + spread). Under 1.00x: fund the shortfall (COM-BR-04, MF-BR-07). Full reserve = L × r ÷ 360 × days (F-CORE-20).

**Pricing**: RTL base by tier 9.50 / 10.00 / 10.75 / 11.50%; +0.50% FICO 680-699; +0.25% near max leverage; +0.75% ground-up; band 8.50-12.75%. Points 1.00 / 1.50 / 2.00 / 2.50 on the commitment. Multifamily bridge: SOFR + 375 bp (stabilized 325 bp); +25 bp each for commitment over 70% of cost, as-is debt yield under 8.0% or occupancy under 85% (MF-BR-14).

**Mini-example**: NOI $100,000; value $1,500,000; 70% LTV = $1,050,000; DSCR 1.25 at K 0.080000 = $1,000,000; DY 9% = $1,111,111. Loan $1,000,000: DSCR binds.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 Leverage tests | T1 | 1 | 1 | 1-3, 7 / 1-3, 7 | 1 |
| O2 Income tests | T2 | 2 | 2, 4 | 8, 9, 12 / 8, 9 | 2 |
| O3 Binding test | T3 | 3, 4 | 1 | 4, 10 / 4, 10 | 3 |
| O4 Reserves | T4 | 5 | 3 | 11 / 11, 12 | 4 |
| O5 Pricing | T5 | 6 | 5 | 5, 6 / 5, 6 | 1 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [POLICY], [CONFIRM] or [DATA] tags | Met. Usury checks stay [VERIFY] under CORE-PRC-03 |
| Every calculation cites a formula ID; thresholds cite rules | Met |
| Four-line worked formulas; re-checked by a second person | Four lines met; second-person check pending (solo: re-run in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-RES-01, RD-MF-01, RD-COM-01 |
| Lesson follows LD-04 order; alignment matrix; fits 3 hours | Met (180 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (12 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no color-only meaning |

**Real-world check (researched 20 Nov 2026): where 2026 sizing and pricing sit.**

- **Fix-and-flip leverage.** RCN describes a typical 2026 structure as 80% of the purchase price, up to 100% of rehab, and a total capped at 70-75% of ARV ([RCN Capital](https://rcncapital.com/blog/fix-and-flip-loans-for-brokers-how-to-structure-deals-right)). Experienced investors can reach about 90% LTC, and first-timers about 75%. Our 75-85% LTC and 65-70% LTARV caps sit at the conservative end.
- **Fix-and-flip pricing.** LendingOne puts 2026 fix-and-flip interest at 9-12% with 1-2 points ([LendingOne](https://lendingone.com/?p=23855)). Our grid of 9.50-11.50% before adjusters, with 1.00-2.50 points, fits that range.
- **Bridge spreads.** Recent CRE CLOs show weighted-average loan spreads of SOFR + 288 bp (MF1, May 2026) and SOFR + 335 bp (VMC, May 2026) ([CREFC, 5 May 2026](https://www.crefc.org/cre/cre/content/News/Items/Research_and_Data/CRE_Securitized_Debt_Update_5_5_26.aspx); [CREFC, 12 May 2026](https://www.crefc.org/cre/content/News/Items/Research_and_Data/2026/CRE_Securitized_Debt_Update_5_12_26.aspx)). Our 375-400 bp floors price above large institutional loans, which suits small-balance bridges.
- **Negative leverage is the norm in some sectors.** In CRED iQ's 2026 new-issue CMBS data, multifamily and industrial cap rates sit below mortgage coupons. Office, retail and hotels still show positive leverage ([CRE Daily](https://www.credaily.com/?p=218947)). That is why DSCR, not LTV, binds more often on multifamily (C5).

**Self-check.**

1. A flip has price $300,000, rehab $60,000 and an 80% LTC limit. What loan does LTC allow? **Answer:** 80% × $360,000 = $288,000.00 (F-RES-04).
2. NCF is $200,000, the minimum DSCR is 1.25x and K is 0.08. What loan does DSCR allow? **Answer:** $200,000 ÷ 1.25 ÷ 0.08 = $2,000,000.00 (F-CORE-17).
3. Three tests give $512,400.00, $498,765.43 and $530,000.00. What is the loan? **Answer:** The lowest, $498,765.43, rounded down to $498,000 (F-CORE-19, CORE-PRC-05).
4. What is a full interest reserve on $2,000,000 at 8.25% for 91 actual days? **Answer:** $2,000,000 × 8.25% ÷ 360 × 91 = $41,708.33 (F-CORE-20).
5. A Tier 1 RTL sponsor has FICO 690 and leverage 1 point under the maximum, on a rehab. What is the note rate? **Answer:** 10.75% + 0.50% + 0.25% = 11.50% (F-CORE-28).
6. Birchwood Plaza is unanchored retail. Which rule sets its bridge limits, and what are they? **Answer:** COM-BR-09 unanchored retail: 65% as-is LTV, 70% LTC, 1.30x and 9.5% debt yield. Its term-loan test is COM-TRM-09: 65% LTV, 1.30x, 9.0%.

**What to look up yourself.** Nothing for this module.

**How to check it:** in a spreadsheet, `=434000/1.3/(330772.68/3900000)` should give 3,936,238.02, and `=MIN(3900000,3936238.02,4822222.22)` should give 3,900,000.
