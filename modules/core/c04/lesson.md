# C4: Property cash flow: from gross potential rent to NOI

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C4-lesson-v0, C4-quiz-v0 (sets A and B), C4-ojt-v0, C4-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C3 |
| Bloom's levels | 2 and 3 (LD-02) |
| Formulas | F-CORE-07 to F-CORE-12 |
| Rules | MF-GEN-05, MF-GEN-06, COM-GEN-05, COM-GEN-06 (used as examples of how families set the inputs) |
| Running deals | Worked examples: RD-MF-01 Cedar Court. Practice: RD-COM-01 Birchwood Plaza (LD-08) |
| Status | v0. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0, 19 Nov 2026: first draft; all numbers computed in code |

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

The broker's package for Cedar Court shows NOI of $575,000. Your underwriting shows $410,000. It is the same 50-unit building, and the gap is $165,000 a year.

At a 7.00% loan constant, that gap is worth about $2.4 million of loan. By the end of this module you can rebuild the $410,000 line by line and say why the broker's number is not the one we lend on.

## 2. Objectives

By the end of C4, you will be able to:

1. **Calculate** gross potential rent, vacancy and credit loss, and effective gross income (F-CORE-07 to F-CORE-09).
2. **Classify** each line of an operating statement as income, operating expense, capital item, debt service or non-recurring.
3. **Calculate** NOI (F-CORE-10) using the family underwriting rules for expenses and management.
4. **Calculate** DSCR (F-CORE-11) and compare it with a minimum at full precision.
5. **Calculate** break-even occupancy (F-CORE-12) and the cushion against current occupancy.

## 3. Teach

### T1. From rent to effective gross income (Objective 1, 20 minutes)

**Gross potential rent (GPR)** is the rent if every unit is leased all year (F-CORE-07). **Vacancy and credit loss** is the rent you do not collect: empty units, unpaid rent and concessions (F-CORE-08). **Effective gross income (EGI)** is GPR less vacancy and credit loss, plus other income such as parking, laundry or RUBS (F-CORE-09).

Underwriting never uses a vacancy rate below the family floor. Multifamily uses the greater of actual, market or 5% (MF-GEN-05). Commercial uses 5%, or 10% for office (COM-GEN-05).

**Worked example 1: Cedar Court income (RD-MF-01)**

1. **Formula.**
   - F-CORE-07: GPR = units × monthly rent × 12.
   - F-CORE-08: vacancy and credit loss = GPR × vacancy rate.
   - F-CORE-09: EGI = GPR − vacancy + other income.
2. **Inputs.** 50 units at $1,300 market rent; rent-roll collections annualized $702,000; trailing 3 months annualized $708,000; other income (T-12) $18,000.
3. **Substitution.** GPR = 50 × $1,300 × 12 = $780,000.00. Underwritten collections = lesser of $702,000 and $708,000 = $702,000 (MF-GEN-05). Vacancy rate = 1 − $702,000 ÷ $780,000 = 10.0%. Vacancy and loss = $780,000 × 10.0% = $78,000.00. EGI = $780,000 − $78,000 + $18,000 = $720,000.00.
4. **Result.** EGI $720,000.00. The 10.0% vacancy is above the 5% floor, so no top-up is needed (D-CONV-09).

### T2. What belongs above the NOI line (Objective 2, 15 minutes)

NOI measures what the property earns from operations. Only recurring operating items belong above the line.

| Item | Where it goes | Why |
| --- | --- | --- |
| Property taxes, insurance, utilities, repairs, payroll | Operating expense | Recur every year |
| Management fee | Operating expense | Charge it even if the owner self-manages (MF-GEN-06, COM-GEN-06: at least 3% of EGI) |
| Roof, HVAC, parking lot replacement | Capital item, below NOI | Covered by replacement reserves (F-MF-06, F-COM-03) |
| Tenant improvements and leasing commissions | Capital item, below NOI | Covered by the TI/LC reserve (F-COM-03) |
| Mortgage interest and principal | Debt service | NOI is measured before debt (F-CORE-03) |
| Depreciation and amortization | Excluded | Non-cash accounting entries |
| Insurance claim proceeds, lease buyouts | Excluded | One-time, not recurring |
| Concessions (free rent) | Reduce rent, inside vacancy and loss | They cut collected rent |
| RUBS, parking, laundry, pet fees | Other income | Recurring income that is not rent |

**Common slip.** Sellers often leave out management and add back one-time costs. Both raise NOI. Check every line against this table.

### T3. Underwritten NOI (Objective 3, 15 minutes)

**NOI** = EGI − operating expenses (F-CORE-10). The family rules decide which expense figure to use. Multifamily and commercial take the greater of the T-12 and the appraiser's estimate, with management at least 3% of EGI (MF-GEN-06, COM-GEN-06).

**Worked example 2: Cedar Court NOI (RD-MF-01)**

1. **Formula.** F-CORE-10: NOI = EGI − OpEx.
2. **Inputs.** EGI $720,000 (worked example 1); OpEx T-12 $298,000; appraiser's estimate $310,000, including 4% management.
3. **Substitution.** OpEx = greater of $298,000 and $310,000 = $310,000. Management check: 4% of EGI = $28,800, above the 3% floor. NOI = $720,000 − $310,000 = $410,000.00.
4. **Result.** Underwritten NOI $410,000.00. Using the T-12 would give $422,000 and overstate NOI by $12,000.

**Back to the hook.** The broker's $575,000 is the stabilized NOI after the renovation (RD-MF-01 business plan: stabilized NCF $560,000 + $15,000 reserves). It is a pro forma. We size the day-one loan on in-place NOI and test the pro forma only at exit (MF-BR-08).

### T4. DSCR at full precision (Objective 4, 15 minutes)

**DSCR** = income ÷ annual debt service (F-CORE-11). Core teaches it on NOI. Each family then sets its own income base: net cash flow for multifamily and commercial, and gross rent for residential rentals. Net cash flow (NCF) is NOI less replacement reserves, and less TI/LC reserves on commercial (F-MF-09, F-COM-03).

| Family | DSCR income base | Formula |
| --- | --- | --- |
| Residential rental (1-4 units) | Gross rent ÷ PITIA | F-RES-07 |
| Multifamily | NCF ÷ ADS | F-MF-10 |
| Commercial | NCF ÷ ADS | F-CORE-11 on NCF (F-COM-03) |

Compare the unrounded ratio with the minimum. A DSCR of 1.2495 displays as 1.25x but fails a 1.25x test.

**Worked example 3: Cedar Court DSCR on NOI (RD-MF-01)**

1. **Formula.** F-CORE-11: DSCR = NOI ÷ ADS.
2. **Inputs.** NOI $410,000 (worked example 2); bridge test ADS $358,050.00 = $4,340,000 × 8.25% (F-CORE-03, C3).
3. **Substitution.** $410,000 ÷ $358,050 = 1.1451.
4. **Result.** 1.15x on NOI. NCF is $410,000 − $15,000 reserves = $395,000. Interest coverage is NCF ÷ interest-only test debt service (F-MF-12): $395,000 ÷ $358,050 = 1.10x. The multifamily bridge policy tests this figure against 1.00x (MF-BR-07).

### T5. Break-even occupancy and the cushion (Objective 5, 15 minutes)

**Break-even occupancy** is the share of GPR needed to pay operating expenses and debt service (F-CORE-12). The **cushion** is current occupancy minus break-even. A thin cushion means a few lost tenants stop the loan from paying.

**Worked example 4: Cedar Court break-even (RD-MF-01)**

1. **Formula.** F-CORE-12: break-even = (OpEx + ADS) ÷ GPR.
2. **Inputs.** OpEx $310,000; ADS $358,050.00; GPR $780,000. Economic occupancy 90.0% ($702,000 ÷ $780,000, F-MF-02).
3. **Substitution.** ($310,000 + $358,050) ÷ $780,000 = $668,050 ÷ $780,000 = 85.6%.
4. **Result.** Break-even 85.6%; cushion 90.0% − 85.6% = 4.4 points. Losing about 2 of 50 units' rent would leave nothing for debt. That is why the bridge needs a rate cap (MF-BR-09) and a value-add plan.

**Cedar Court, built up across worked examples 1 to 4 (RD-MF-01)**

| Line | Amount | Worked example and formula |
| --- | --- | --- |
| GPR | $780,000.00 | 1, F-CORE-07 |
| Vacancy and credit loss (10.0%) | −$78,000.00 | 1, F-CORE-08 |
| Other income | $18,000.00 | 1, MF-GEN-05 |
| EGI | $720,000.00 | 1, F-CORE-09 |
| Operating expenses | −$310,000.00 | 2, MF-GEN-06 |
| NOI | $410,000.00 | 2, F-CORE-10 |
| Replacement reserves | −$15,000.00 | 3, F-MF-09 |
| NCF | $395,000.00 | 3, F-MF-09 |
| Test debt service ($4,340,000 × 8.25%) | $358,050.00 | 3, F-CORE-03 |
| DSCR on NOI | 1.15x | 3, F-CORE-11 |
| Interest coverage on NCF | 1.10x | 3, F-MF-12 |
| Break-even occupancy | 85.6% | 4, F-CORE-12 |

## 5. Practice (45 minutes)

Work alone, then check the model answer. The case is RD-COM-01 Birchwood Plaza at stabilization. It differs from the worked examples in property type, rent, vacancy rule and debt (LD-05).

1. Stabilized base rent $600,000 and expense recoveries $120,000. For commercial property, GPR here = base rent + expense recoveries. Vacancy is 5% (COM-GEN-05). Find GPR, vacancy and EGI.
2. Expenses: T-12 $196,000; appraiser $204,000 including 4% management. Which figure do you use, and does management clear the floor?
3. Find stabilized NOI.
4. The term loan's ADS is $330,772.68 (C3). Find DSCR on NOI. Then find it on the commercial NCF of $434,000 and say which one the policy tests.
5. Find break-even occupancy using the stabilized figures, and the cushion against 93% occupancy.

**Model answer**

1. GPR (F-CORE-07) = $600,000 + $120,000 = $720,000.00. Vacancy (F-CORE-08) = 5% × $720,000 = $36,000.00. EGI (F-CORE-09) = $684,000.00 (no other income).
2. Greater of $196,000 and $204,000 = $204,000 (COM-GEN-06). Management 4% of $684,000 = $27,360, above the 3% floor of $20,520.
3. NOI (F-CORE-10) = $684,000 − $204,000 = $480,000.00.
4. On NOI: $480,000 ÷ $330,772.68 = 1.45x. On NCF: $434,000 ÷ $330,772.68 = 1.31x. The policy tests NCF (COM-GEN-11, F-COM-08), against a 1.30x minimum for unanchored retail: passes.
5. Break-even (F-CORE-12) = ($204,000 + $330,772.68) ÷ $720,000 = 74.3%. Cushion against the 93% occupancy Birchwood reaches (RD-COM-01, month 16): 93.0% − 74.3% = 18.7 points. The 5% vacancy in item 1 is an underwriting floor, not observed occupancy.

**Self-score.** One point per correct figure (10 figures). Eight or more: move on. Fewer: redo the matching worked example.

## 6. Quiz: C4-quiz-v0

Pass mark: 80% (10 of 12) and every item marked **critical** correct. Two retakes, each with the other set. Items 1-12 in each set are independent unless they say otherwise.

### Set A

A 24-unit building has an average market rent of $1,450 a month. Items 1, 2, 3, 5, 7 and 10 use it.

1. (O1) GPR? A) $34,800.00 B) $417,600.00 C) $348,000.00 D) $397,968.00
2. (O1) Underwritten vacancy and credit loss is 7.0%. Amount? A) $29,232.00 B) $24,360.00 C) $20,880.00 D) $2,436.00
3. **(Critical, O1)** Other income is $9,600. EGI? A) $427,200.00 B) $388,368.00 C) $397,968.00 D) $417,600.00
4. (O2) A $60,000 roof replacement appears in the T-12 expenses. Where does it belong? A) Operating expense B) Capital item, below NOI C) Debt service D) Other income
5. (O3) Operating expenses are $151,000. NOI? A) $246,968.00 B) $266,600.00 C) $237,368.00 D) $548,968.00
6. (O2) Which is NOT an operating expense? A) Property taxes B) Management fee C) Mortgage interest D) Insurance
7. (O4) ADS is $158,400. DSCR on NOI? A) 1.46x B) 1.56x C) 1.64x D) 0.64x
8. **(Critical, O4)** NOI $124,950; ADS $100,000; policy minimum 1.25x. Result? A) Passes at 1.25x B) Fails at 1.2495 C) Passes after rounding D) Needs a second appraisal
9. **(Critical, O3)** Multifamily T-12 expenses are $151,000; the appraiser estimates $158,000. Which expense figure is underwritten? A) $151,000 B) $154,500 C) $158,000 D) $309,000
10. (O5) With OpEx $151,000 and ADS $158,400, break-even occupancy? A) 74.1% B) 77.8% C) 70.6% D) 36.2%
11. (O3) EGI is $397,968. The minimum management charge under MF-GEN-06? A) $11,939.04 B) $15,918.72 C) $12,528.00 D) $0, if the owner self-manages
12. (O5) Break-even is 86% and occupancy is 88%. What does that tell you? A) Strong cushion B) Thin cushion: a small vacancy rise stops debt service being covered C) The loan is in default D) DSCR is 0.88x

**Answer key, Set A**

1. B. 24 × $1,450 × 12 = $417,600.00 (F-CORE-07).
2. A. 7% × $417,600 = $29,232.00 (F-CORE-08).
3. C. $417,600 − $29,232 + $9,600 = $397,968.00 (F-CORE-09). A adds other income without vacancy.
4. B. Capital items sit below NOI and are covered by reserves (T2; F-MF-06).
5. A. $397,968 − $151,000 = $246,968.00 (F-CORE-10).
6. C. Debt service is below NOI.
7. B. $246,968 ÷ $158,400 = 1.559, so 1.56x (F-CORE-11).
8. B. Compare at full precision: 1.2495 is below 1.25.
9. C. Greater of T-12 and appraiser (MF-GEN-06).
10. A. ($151,000 + $158,400) ÷ $417,600 = 74.1% (F-CORE-12).
11. A. 3% × $397,968 = $11,939.04. Management is charged even if self-managed (MF-GEN-06).
12. B. A 2-point cushion is thin.

### Set B

A 36-unit building has an average market rent of $1,180 a month. Items 1, 2, 3, 5, 7 and 10 use it.

1. (O1) GPR? A) $42,480.00 B) $509,760.00 C) $479,174.40 D) $424,800.00
2. (O1) Underwritten vacancy and credit loss is 6.0%. Amount? A) $25,488.00 B) $30,585.60 C) $2,548.80 D) $35,683.20
3. **(Critical, O1)** Other income is $12,000. EGI? A) $491,174.40 B) $521,760.00 C) $479,174.40 D) $509,760.00
4. (O2) A $25,000 leasing commission on a retail suite appears in expenses. Where does it belong? A) Operating expense B) Capital item covered by the TI/LC reserve C) Other income D) Debt service
5. (O3) Operating expenses are $205,000. NOI? A) $286,174.40 B) $304,760.00 C) $274,174.40 D) $696,174.40
6. (O2) Which IS an operating expense? A) Depreciation B) Property insurance C) Principal repayment D) A one-time insurance claim
7. **(Critical, O4)** ADS is $212,000 and the minimum is 1.35x. DSCR on NOI, and the result? A) 1.35x, passes B) 1.3499, fails C) 1.40x, passes D) 0.74x, fails
8. **(Critical, O1)** A commercial retail center: actual vacancy 3%, market 4%. Underwritten vacancy rate? A) 3% B) 4% C) 5% D) 10%
9. (O3) Commercial T-12 expenses are $212,500; the appraiser estimates $205,000. Which figure is underwritten? A) $205,000 B) $208,750 C) $212,500 D) $417,500
10. (O5) With OpEx $205,000 and ADS $212,000, break-even occupancy? A) 81.8% B) 40.2% C) 84.9% D) 78.0%
11. (O3) EGI is $491,174.40. The minimum management charge (3%)? A) $14,735.23 B) $19,646.98 C) $15,292.80 D) $0
12. (O5) Break-even is 81.8% and economic occupancy is 90%. The cushion? A) 8.2 points B) 18.2 points C) 9.0 points D) 1.10x

**Answer key, Set B**

1. B. 36 × $1,180 × 12 = $509,760.00 (F-CORE-07).
2. B. 6% × $509,760 = $30,585.60 (F-CORE-08).
3. A. $509,760 − $30,585.60 + $12,000 = $491,174.40 (F-CORE-09).
4. B. Leasing commissions are TI/LC, covered by the reserve below NOI (F-COM-03).
5. A. $491,174.40 − $205,000 = $286,174.40 (F-CORE-10).
6. B. Insurance recurs every year. Depreciation is non-cash, principal is debt service and a claim is one-time.
7. B. $286,174.40 ÷ $212,000 = 1.3499: displays 1.35x but fails a 1.35x minimum (full precision).
8. C. Greater of actual, market or the 5% floor (COM-GEN-05; office would be 10%).
9. C. Greater of T-12 and appraiser (COM-GEN-06).
10. A. ($205,000 + $212,000) ÷ $509,760 = 81.8% (F-CORE-12).
11. A. 3% × $491,174.40 = $14,735.23.
12. A. 90.0% − 81.8% = 8.2 points.

## 7. OJT task: C4-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Underwriter |
| Output | A one-page underwritten NOI build for Cedar Court: each line with its source, the rule applied, and the reconciliation to the broker's $575,000 |
| Source | RD-MF-01 property table (income, expenses, business plan) |
| Time allowed | 45 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All fictional; nothing to remove |

**Rubric (meets standard = all four)**

1. Every line shows a source and a formula or rule ID.
2. Income uses the lesser of rent roll and T-3; expenses use the greater of T-12 and appraiser.
3. NOI is exactly $410,000.00.
4. The reconciliation to $575,000 names at least two causes and their amounts.

**Model answer**

| Line | Amount | Source and rule |
| --- | --- | --- |
| GPR | $780,000.00 | 50 × $1,300 × 12 (F-CORE-07) |
| Vacancy and credit loss | −$78,000.00 | GPR × 10.0% vacancy rate, where 10.0% = 1 − lesser of $702,000 and $708,000 ÷ GPR (MF-GEN-05; F-CORE-08) |
| Other income | $18,000.00 | T-12 (MF-GEN-05) |
| EGI | $720,000.00 | F-CORE-09 |
| Operating expenses | −$310,000.00 | Greater of T-12 $298,000 and appraiser $310,000 (MF-GEN-06) |
| NOI | $410,000.00 | F-CORE-10 |

Reconciliation to the broker's $575,000: the broker uses stabilized NOI after the $800,000 renovation (RD-MF-01 business plan). The $165,000 gap is the value-add plan: higher post-renovation rents and lower vacancy. It is not yet earned, so we lend on $410,000 in place. Only the exit test uses the stabilized figures: $560,000 NCF, which is $575,000 NOI less $15,000 reserves (MF-BR-08, F-MF-20).

## 8. Job aid: C4-jobaid-v0 (one page)

**Build NOI in five lines**

1. GPR = units or suites × monthly rent × 12 (F-CORE-07).
2. Vacancy and credit loss = GPR × the greater of actual, market or the floor (F-CORE-08; floors: 5%, office 10%).
3. EGI = GPR − vacancy + other income (F-CORE-09).
4. OpEx = greater of T-12 and appraiser; management at least 3% of EGI (MF-GEN-06, COM-GEN-06).
5. NOI = EGI − OpEx (F-CORE-10).

**Above or below the line?** Operating costs above. Capital items, TI/LC, debt service, depreciation and one-time items below or out.

**DSCR (F-CORE-11)** = income ÷ ADS. Compare unrounded. Income base: NOI here; NCF for multifamily and commercial; gross rent for residential rentals.

**Break-even (F-CORE-12)** = (OpEx + ADS) ÷ GPR. Cushion = occupancy − break-even.

**Mini-example** (10 units at $1,500 a month):

| Line | Amount |
| --- | --- |
| GPR | $180,000 |
| Vacancy (5%) | −$9,000 |
| Other income | $6,000 |
| EGI | $177,000 |
| OpEx | −$72,000 |
| NOI | $105,000 |
| ADS | $84,000 |
| DSCR | 1.25x |
| Break-even | 86.7% |

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 GPR, vacancy, EGI | T1 | 1 | 1 | 1-3 / 1-3, 8 | 2 |
| O2 Classify lines | T2 | T2 table | 2 | 4, 6 / 4, 6 | 1 |
| O3 NOI | T3 | 2 | 2, 3 | 5, 9, 11 / 5, 9, 11 | 2, 3, 4 |
| O4 DSCR | T4 | 3 | 4 | 7, 8 / 7 | n/a (C8 OJT) |
| O5 Break-even | T5 | 4 | 5 | 10, 12 / 10, 12 | n/a (C8 OJT) |

## Self-review against Bible Section 7 (19 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [VERIFY], [POLICY], [CONFIRM] or [DATA] tags | Met |
| Every calculation cites a formula ID; thresholds cite rules | Met |
| Four-line worked formulas; re-checked by a second person | Four lines met; second-person check pending (solo: re-run in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-MF-01, RD-COM-01 |
| Lesson follows LD-04 order; alignment matrix; fits 3 hours | Met (180 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (12 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no colour-only meaning |

**Self-check.**

1. A 20-unit building rents at $1,200 a month, with 5% vacancy and $4,000 of other income. What is EGI? **Answer:** GPR = 20 × $1,200 × 12 = $288,000 (F-CORE-07). Vacancy = $288,000 × 5% = $14,400 (F-CORE-08). EGI = $288,000 − $14,400 + $4,000 = $277,600 (F-CORE-09).
2. A multifamily T-12 shows $120,000 of expenses; the appraiser estimates $126,000. Which do you underwrite? **Answer:** $126,000, the greater of the two (MF-GEN-06).
3. NOI is $249,900 and ADS is $200,000. Does it pass a 1.25x minimum? **Answer:** No. $249,900 ÷ $200,000 = 1.2495, below 1.25 at full precision (F-CORE-11).
4. OpEx is $120,000, ADS $100,000 and GPR $288,000. What is break-even occupancy? **Answer:** ($120,000 + $100,000) ÷ $288,000 = 76.4% (F-CORE-12).

**Real-world check (researched 19 Nov 2026): a live offering memorandum.** Alegre Park is a 24-unit building in Tempe, Arizona, offered at $3,800,000 by Matthews in 2026 ([offering memorandum](https://cms.matthews.com/wp-content/uploads/2026/05/Alegre-Park-1827-E-Lemon-St-Tempe-AZ-OM-PP.pdf)). It is a real, public document, so it is used only for this exercise and never as a running deal (Bible 5.4). Its operating statement shows three NOIs: T-12 $218,554, broker's Year 1 $232,211 and Pro Forma $265,813.

| Line | Broker Year 1 | Our underwriting | Rule |
| --- | --- | --- | --- |
| Effective gross income | $310,248 | $301,886 (T-12; no rent roll or T-3 in the OM) | MF-GEN-05 |
| Operating expenses | $78,037 | $83,332 (the T-12 is higher than the broker's figure) | MF-GEN-06 |
| Management | 5.00% | 3.87% in the T-12; above the 3% floor | MF-GEN-06 |
| NOI | $232,211 | $218,554 | F-CORE-10 |
| Replacement reserves | none in the table | 24 × $300 = $7,200 | F-MF-06 |
| NCF | n/a | $211,354 | F-MF-09 |

What changed between the T-12 and the broker's Year 1: repairs cut from $17,939 to $9,600; administration cut from $11,694 to $2,400; payroll of $3,380 removed; insurance raised from $5,964 to $9,600. The underwritten NOI is $47,259 (17.8%) below the Pro Forma. At the $3,800,000 price, it is a 5.75% cap rate, not the advertised 7.00%.

**Data flags an underwriter would raise.** The T-12 vacancy, concessions and loss-to-lease lines are all exactly $13,064. T-12 administration equals the management fee to the dollar. The Pro Forma cap rate appears as both 7.00% and 7.30%. Each one means: ask for the rent roll, bank deposits (MF-GEN-04) and the owner's actual T-12 before trusting any figure.

**What to look up yourself.** Open Fannie Mae's [Multifamily Selling and Servicing Guide](https://mfguide.fanniemae.com) and find Section 203.01, Underwritten Net Cash Flow. Note the vacancy and management fee it uses. Compare them with our 5% vacancy floor (MF-GEN-05) and 3% management minimum (MF-GEN-06).

**How to check it:** in a spreadsheet, `=(310000+4340000*8.25%)/780000` should give 0.8565, the 85.6% break-even in worked example 4.
