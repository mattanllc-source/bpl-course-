# C3: Real estate finance math: interest, amortization, debt service

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C3-lesson-v0, C3-quiz-v0 (sets A and B), C3-ojt-v0, C3-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C2 |
| Bloom's levels | 2 and 3 (LD-02) |
| Formulas | F-CORE-01 to F-CORE-05 |
| Conventions | D-CONV-01 (tests use the nominal rate), D-CONV-02 (funding day counts, payoff day does not) |
| Running deals | Worked examples: RD-RES-01 Maple Run and RD-COM-01 Birchwood Plaza. Practice: RD-MF-01 Cedar Court (LD-08) |
| Status | v0. Self-review against Bible Section 7 is recorded at the end of this tab |
| Change log | v0, 19 Nov 2026: first draft; all numbers computed in code |

## Timing plan

| Segment (LD-04) | Minutes |
| --- | --- |
| 1 Hook | 5 |
| 2 Objectives | 5 |
| 3 Teach chunks T1-T5, with worked examples (step 4 sits inside each chunk) | 80 |
| 5 Practice | 45 |
| 6 Quiz | 30 |
| 8 Job aid walk-through and wrap-up | 15 |
| Total | 180 |
| 7 OJT task (extra, per LD-03) | 45 |

## 1. Hook (5 minutes)

Harborline Holdings closed its $340,000 Maple Run loan on 15 Jan 2027. Dana Reyes calls on 2 April. Her February interest bill was $1,913.33. Her March bill was $2,263.54. "Nothing changed but the month," she says. "Why is March $350 higher?"

Two things changed: March has three more days than February, and a $30,000 draw funded on 15 March. By the end of this module you can explain both, to the cent.

## 2. Objectives

By the end of C3, you will be able to:

1. **Calculate** interest for any billing period on an interest-only loan, using Actual/360 and the per diem (F-CORE-01, F-CORE-05), to the cent.
2. **Calculate** the monthly payment on an amortizing loan (F-CORE-02) to the cent.
3. **Calculate** annual debt service and the loan constant (F-CORE-03, F-CORE-04), with the constant to six decimals.
4. **Distinguish** the debt service used in credit tests from the interest actually billed (D-CONV-01).
5. **Prepare** the first rows of an amortization schedule, splitting each payment into interest and principal (F-CORE-02).

## 3. Teach

### T1. Interest-only interest and the per diem (Objective 1, 20 minutes)

Most bridge and rehab loans are interest-only. The borrower pays interest each month and repays all principal at the end.

Our notes accrue interest **Actual/360**. You divide the annual rate by 360, then multiply by the actual days in the period. So a 31-day month costs more than a 30-day month, and a year of 365 days costs 365/360 of the annual rate.

One day's interest is the **per diem** (F-CORE-05). Keep it unrounded while you multiply. Round the period total to the cent once.

**Which days count (D-CONV-02).** The funding day counts. The payoff day does not. A loan funded on 15 January earns interest for 15 to 31 January: 17 days.

**Worked example 1: Maple Run, January to March 2027 (RD-RES-01)**

1. **Formula.** F-CORE-01: Interest = balance × rate ÷ 360 × actual days.
2. **Inputs.** Initial advance $240,000; note rate 10.250% (term sheet); closing 15 Jan 2027; $30,000 draw on 15 Mar 2027 (timeline).
3. **Substitution.** Per diem: $240,000 × 10.25% ÷ 360 = $68.33 (unrounded 68.3333…). January, 17 days: $68.3333 × 17 = $1,161.67. February, 28 days: × 28 = $1,913.33. January's $1,161.67 is never billed. It is collected at closing as prepaid interest (CORE-CLS-04, F-CORE-33).
4. **Result.** March splits at the draw. 1-14 March: $240,000 × 10.25% ÷ 360 × 14 = $956.67. 15-31 March: $270,000 × 10.25% ÷ 360 × 17 = $1,306.88 (unrounded 1,306.875). March total, rounded once: $2,263.54. This is the billed amount; it feeds the servicing statement (C12), not a credit test.

**Common slip.** Using balance × rate ÷ 12 gives $2,050.00 for every month on $240,000. That is right only for a 30-day month.

### T2. The amortizing payment (Objective 2, 15 minutes)

A term loan repays principal over its **amortization**, which is often longer than its term. The payment stays level. Early payments are mostly interest; later ones are mostly principal.

The payment formula (F-CORE-02) uses a monthly rate i = annual rate ÷ 12 and n = amortization months. It uses 12 equal periods by convention, not Actual/360.

**Worked example 2: Birchwood Plaza term loan (RD-COM-01, month 24)**

1. **Formula.** F-CORE-02: Payment = L × i ÷ (1 − (1 + i)⁻ⁿ).
2. **Inputs.** Loan $3,900,000; rate 7.000% (Role 3 answer key, COM-TRM-04 floor); 25-year amortization, so n = 300 (COM-TRM-02).
3. **Substitution.** i = 7.000% ÷ 12 = 0.0058333…; (1 + i)⁻³⁰⁰ = 0.17466; payment = $3,900,000 × 0.0058333 ÷ 0.82534 = $27,564.39.
4. **Result.** Monthly payment $27,564.39. It is the base for annual debt service in T3.

**Common slip.** Using the loan's term (say 7 years, an example only) instead of the 25-year amortization for n. That payment is far too high and the loan looks unaffordable.

### T3. Annual debt service and the loan constant (Objective 3, 15 minutes)

**Annual debt service (ADS)** is a year of scheduled payments (F-CORE-03). For an amortizing loan, round the monthly payment to the cent first, then multiply by 12. For an interest-only loan, the underwriting ADS is balance × annual rate.

The **loan constant** is ADS ÷ loan (F-CORE-04). It tells you the yearly cost of each dollar of loan. Sizing formulas divide by it, so keep six decimals or more.

**Worked example 3: Birchwood ADS and constant (RD-COM-01)**

1. **Formula.** F-CORE-03: ADS = payment × 12. F-CORE-04: constant = ADS ÷ loan.
2. **Inputs.** Payment $27,564.39 (worked example 2); loan $3,900,000.
3. **Substitution.** ADS = $27,564.39 × 12 = $330,772.68. Constant = $330,772.68 ÷ $3,900,000 = 0.0848135.
4. **Result.** ADS $330,772.68; constant 0.084814 (8.481%). Preview: in C8, NCF $434,000 ÷ $330,772.68 = 1.31x DSCR (F-CORE-11), which passes the 1.30x unanchored-retail minimum (COM-TRM limits table).

**Why the constant, not the rate.** At 7.000% the constant is 8.481%, because it includes principal. A loan sized with the rate would carry about 21% more debt than the cash flow supports.

### T4. Debt service in tests versus interest billed (Objective 4, 15 minutes)

Credit tests use the **nominal** annual rate (D-CONV-01). Billing uses Actual/360. The two differ by 365/360, about 1.4% a year.

**Worked example 4: Birchwood bridge, day one (RD-COM-01)**

1. **Formula.** F-CORE-03 interest-only: ADS = balance × test rate. F-CORE-01 for a 365-day year: balance × rate ÷ 360 × 365.
2. **Inputs.** Funded balance $2,860,000; test rate 8.25%, the higher of note rate 7.65% and cap strike 4.25% + spread 4.00% (COM-BR-03).
3. **Substitution.** Test ADS = $2,860,000 × 8.25% = $235,950.00. Billed over 365 days = $2,860,000 × 8.25% ÷ 360 × 365 = $239,227.08.
4. **Result.** Use $235,950.00 in the coverage test: $254,000 ÷ $235,950 = 1.08x (COM-BR-04). The borrower actually pays $3,277.08 more over the year. Liquidity reviews should remember the gap.

**Why it matters.** Mixing the two bases inside one test makes ratios inconsistent between loans. Pick the nominal basis for every test, and the billed basis for every bill.

**Test versus bill.** The same Birchwood balance, measured two ways for one 365-day year:

| Item | Test basis (D-CONV-01) | Billed basis (F-CORE-01) |
| --- | --- | --- |
| Calculation | Balance × nominal rate | Balance × rate ÷ 360 × 365 days |
| Birchwood day one | $2,860,000 × 8.25% = $235,950.00 | $2,860,000 × 8.25% ÷ 360 × 365 = $239,227.08 |
| Used for | DSCR, coverage, sizing and liquidity tests | Monthly bills, payoffs and prepaid interest |

The billed figure is 365/360 of the test figure, about 1.4% higher.

### T5. Reading an amortization schedule (Objective 5, 15 minutes)

Each scheduled payment covers that month's interest first. The rest repays principal. Monthly schedule interest = opening balance × annual rate ÷ 12 (the F-CORE-02 convention).

**Worked example 5: Birchwood schedule, months 1-3 (RD-COM-01)**

1. **Formula.** Interest = opening balance × i; principal = payment − interest; closing balance = opening − principal (F-CORE-02).
2. **Inputs.** Loan $3,900,000; 7.000%; payment $27,564.39.
3. **Substitution.** Month 1 interest: $3,900,000 × 0.07 ÷ 12 = $22,750.00. Principal: $27,564.39 − $22,750.00 = $4,814.39.
4. **Result.** See the table. Principal grows each month as interest falls.

| Month | Opening balance | Interest | Principal | Closing balance |
| --- | --- | --- | --- | --- |
| 1 | $3,900,000.00 | $22,750.00 | $4,814.39 | $3,895,185.61 |
| 2 | $3,895,185.61 | $22,721.92 | $4,842.47 | $3,890,343.14 |
| 3 | $3,890,343.14 | $22,693.67 | $4,870.72 | $3,885,472.42 |

## 5. Practice (45 minutes)

Work alone, then check the model answer. The case is RD-MF-01 Cedar Court. It differs from the worked examples in loan size, rate, amortization and day counts (LD-05).

1. Month 10: the funded balance is $4,740,000 and the rate is 9.00%. Find the per diem and the interest for a 31-day month.
2. In a 30-day month, the balance is $4,640,000 until a $100,000 capex draw funds on the 12th. Find that month's interest.
3. The month-27 term loan is $5,472,000 at 7.250% on 30-year amortization. Find the payment, ADS and constant.
4. Find month 1 interest, principal and closing balance on that term loan.
5. On day one, the bridge was $4,340,000 with a test rate of 8.25%. Find the test ADS, the interest billed over 365 days, and the gap.

**Model answer**

1. Per diem (F-CORE-05): $4,740,000 × 9.00% ÷ 360 = $1,185.00. 31 days (F-CORE-01): $1,185.00 × 31 = $36,735.00.
2. Days 1-11 at $4,640,000 and days 12-30 at $4,740,000 (the funding day counts, D-CONV-02). Interest = $4,640,000 × 9% ÷ 360 × 11 + $4,740,000 × 9% ÷ 360 × 19 = $12,760.00 + $22,515.00 = $35,275.00.
3. Payment (F-CORE-02, n = 360): $37,328.69. ADS (F-CORE-03): $37,328.69 × 12 = $447,944.28. Constant (F-CORE-04): 0.081861. This ADS gives 1.25x on $560,000 NCF (F-MF-10).
4. Interest: $5,472,000 × 7.25% ÷ 12 = $33,060.00. Principal: $37,328.69 − $33,060.00 = $4,268.69. Closing balance: $5,467,731.31.
5. Test ADS: $4,340,000 × 8.25% = $358,050.00. Billed over 365 days: $363,022.92. Gap: $4,972.92 (D-CONV-01).

**Self-score.** One point per correct figure (12 figures). Ten or more: move on. Fewer: redo the matching worked example.

## 6. Quiz: C3-quiz-v0

Pass mark: 80% (10 of 12) and every item marked **critical** correct. Two retakes, each with the other set. Answers and rationale follow each set.

### Set A

1. **(Critical, O1)** A $600,000 interest-only loan at 9.500% Actual/360. Interest for a 31-day month? A) $4,750.00 B) $4,841.10 C) $4,908.33 D) $4,987.50
2. (O1) Per diem on $1,200,000 at 8.750%? A) $287.67 B) $291.67 C) $8,750.00 D) $29.17
3. (O1) A loan funds on 20 April and April has 30 days. How many interest days in April? A) 10 B) 11 C) 30 D) 20
4. **(Critical, O2)** Monthly payment on $750,000 at 7.500%, 10-year term, 30-year amortization? A) $4,687.50 B) $5,244.11 C) $8,902.63 D) $5,542.97
5. (O2) A 10-year term loan amortizes over 25 years. What is n in F-CORE-02? A) 120 B) 240 C) 300 D) 360
6. (O3) The monthly payment is $5,244.11. ADS? A) $62,929.32 B) $62,929.44 C) $5,244.11 D) $63,804.01
7. (O3) Loan constant at 8.000% on 25-year amortization, to six decimals? A) 0.080000 B) 0.092618 C) 0.088052 D) 0.092600
8. **(Critical, O3)** Why do sizing formulas divide by the constant, not the note rate? A) The rate ignores Actual/360 B) The constant includes principal repayment C) The constant is always lower D) Policy rounds the rate
9. (O4) A $2,000,000 interest-only bridge at 9.00%. ADS for the coverage test? A) $180,000.00 B) $182,500.00 C) $15,000.00 D) $185,000.00
10. (O4) Which statement matches D-CONV-01? A) Tests and bills both use Actual/360 B) Tests use the nominal rate; bills use Actual/360 C) Tests use 365/360; bills use 30/360 D) Both use the nominal rate
11. (O5) $1,000,000 at 7.200%, 30-year amortization, payment $6,787.88. Month 1 principal? A) $6,000.00 B) $787.88 C) $6,787.88 D) $833.33
12. (O5) Over the life of a level-payment loan, the interest part of each payment: A) rises B) falls C) stays the same D) falls, then rises

**Answer key, Set A**

1. C. $600,000 × 9.5% ÷ 360 × 31 = $4,908.33 (F-CORE-01). A uses ÷ 12; B uses 365.
2. B. $1,200,000 × 8.75% ÷ 360 = $291.67 (F-CORE-05). A uses 365.
3. B. 20-30 April inclusive is 11 days; the funding day counts (D-CONV-02).
4. B. F-CORE-02 with i = 0.625%, n = 360. C uses n = 120 (the term). A is interest only.
5. C. n = amortization months: 25 × 12 = 300.
6. A. $5,244.11 × 12 = $62,929.32 (F-CORE-03). B multiplies a different payment.
7. B. 12 × i ÷ (1 − (1 + i)⁻³⁰⁰) = 0.092618 (F-CORE-04). A is the rate.
8. B. ADS includes principal, so the constant exceeds the rate on an amortizing loan.
9. A. Tests use L × r = $180,000.00 (F-CORE-03, D-CONV-01). B is the 365-day billed amount.
10. B. D-CONV-01.
11. B. Interest $1,000,000 × 7.2% ÷ 12 = $6,000.00; principal $6,787.88 − $6,000.00 = $787.88.
12. B. Interest is charged on a falling balance.

### Set B

1. **(Critical, O1)** An $850,000 interest-only loan at 10.750% Actual/360. Interest for a 30-day month? A) $7,614.58 B) $7,868.40 C) $7,510.27 D) $9,137.50
2. (O1) Per diem on $2,500,000 at 8.250%? A) $565.07 B) $572.92 C) $20,625.00 D) $687.50
3. (O1) A loan funds on 3 March and is paid off on 31 March. How many interest days? A) 29 B) 28 C) 31 D) 27
4. **(Critical, O2)** Monthly payment on $1,250,000 at 6.750%, 10-year term, 25-year amortization? A) $7,031.25 B) $8,107.48 C) $8,636.39 D) $14,353.01
5. (O2) A 5-year loan amortizes over 30 years. What is n in F-CORE-02? A) 60 B) 300 C) 360 D) 30
6. (O3) The monthly payment is $31,877.45. ADS? A) $382,529.40 B) $31,877.45 C) $388,000.00 D) $382,529.00
7. (O3) Loan constant at 8.250% on 25-year amortization, to six decimals? A) 0.082500 B) 0.094614 C) 0.090150 D) 0.094600
8. **(Critical, O3)** A 7.000% loan on 25-year amortization is sized at the rate instead of the constant. The result is: A) too small B) correct C) too large D) unaffected
9. (O4) A $3,200,000 interest-only bridge at 8.50%. ADS for the coverage test? A) $275,777.78 B) $272,000.00 C) $22,666.67 D) $279,555.56
10. (O4) Over a 365-day year, billed Actual/360 interest compared with the test figure is: A) the same B) about 1.4% lower C) about 1.4% higher D) 5% higher
11. (O5) $2,000,000 at 6.900%, 25-year amortization, payment $14,008.25. Month 1 principal? A) $11,500.00 B) $2,508.25 C) $14,008.25 D) $2,333.33
12. (O5) Month 1 closing balance equals: A) opening − payment B) opening − interest C) opening − principal D) opening + interest

**Answer key, Set B**

1. A. $850,000 × 10.75% ÷ 360 × 30 = $7,614.58 (F-CORE-01). B is a 31-day month; C uses 365.
2. B. $2,500,000 × 8.25% ÷ 360 = $572.92 (F-CORE-05).
3. B. 3-30 March: the funding day counts and the payoff day (31st) does not (D-CONV-02). That is 28 days.
4. C. F-CORE-02 with i = 0.5625%, n = 300. A is interest only; B uses n = 360; D uses n = 120.
5. C. 30 × 12 = 360.
6. A. $31,877.45 × 12 = $382,529.40 (F-CORE-03).
7. B. 0.094614 (F-CORE-04).
8. C. The rate (7.000%) is below the constant (8.481%), so dividing by the rate gives a loan about 21% too large.
9. B. L × r = $272,000.00 (D-CONV-01). A is the 365-day billed amount.
10. C. 365 ÷ 360 = 1.0139.
11. B. Interest $11,500.00; principal $2,508.25.
12. C. Only principal reduces the balance.

## 7. OJT task: C3-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Closing, servicing and asset management |
| Output | Interest billing statement for Maple Run, January to June 2027: one row per billing period with dates, days, balance segments and interest; mark January as prepaid at closing (CORE-CLS-04) |
| Source | RD-RES-01: initial advance $240,000 on 15 Jan 2027; draws of $30,000 on 15 Mar and $25,000 on 15 May; 10.250% Actual/360 (draws 1 and 2 of the Role 3 draw table, dated on the 15th) |
| Time allowed | 45 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All fictional; nothing to remove |

**Rubric (meets standard = all four)**

1. Every period counts the funding day and uses actual days (D-CONV-02).
2. Each draw splits its period at the funding date.
3. Each period is rounded to the cent once, not day by day.
4. Every row cites F-CORE-01, and the six-month total ties to the model answer.

**Model answer**

| Period | Days | Balance | Interest (F-CORE-01) |
| --- | --- | --- | --- |
| 15-31 Jan 2027 (prepaid at closing, CORE-CLS-04) | 17 | $240,000 | $1,161.67 |
| 1-28 Feb 2027 | 28 | $240,000 | $1,913.33 |
| 1-31 Mar 2027 | 31 | $240,000 (14 days), $270,000 (17 days) | $2,263.54 |
| 1-30 Apr 2027 | 30 | $270,000 | $2,306.25 |
| 1-31 May 2027 | 31 | $270,000 (14 days), $295,000 (17 days) | $2,504.13 |
| 1-30 Jun 2027 | 30 | $295,000 | $2,519.79 |
| Total | 167 |  | $12,668.71 |

**Rounding rule.** Round each period to the cent once (F-CORE-01). The total adds the rounded rows, because those are the amounts charged: $12,668.71. Adding the unrounded rows gives $12,668.72, which nobody is charged. January's $1,161.67 is collected at closing (CORE-CLS-04, F-CORE-33), so the February to June bills total $11,507.04.

## 8. Job aid: C3-jobaid-v0 (one page)

**Interest-only interest (F-CORE-01, F-CORE-05)**

1. Per diem = balance × rate ÷ 360. Keep it unrounded.
2. Count days: the funding day counts, the payoff day does not (D-CONV-02).
3. Split the period at each draw or paydown.
4. Interest = Σ (per diem × days) for each segment. Round once to the cent.

**Amortizing payment (F-CORE-02)**: i = rate ÷ 12; n = amortization months (not the term). Excel: =ROUND(PMT(rate/12, n, −loan), 2).

**ADS (F-CORE-03)**: amortizing = rounded payment × 12; interest-only test = balance × rate.

**Constant (F-CORE-04)**: ADS ÷ loan, six decimals. Excel: =PMT(rate/12, n, −1)*12.

**Schedule row**: interest = opening × rate ÷ 12; principal = payment − interest; closing = opening − principal.

**Tests vs bills (D-CONV-01)**: tests use the nominal rate; bills use Actual/360 (about 1.4% more over 365 days).

**Mini-example**: $500,000 at 10.000%: per diem $138.89; 31-day month $4,305.56. At 7.000% over 30 years: payment $3,326.51; ADS $39,918.12; constant 0.079836.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 Interest-only interest | T1 | 1 | 1, 2 | 1-3 / 1-3 | 1, 2, 3 |
| O2 Amortizing payment | T2 | 2 | 3 | 4-5 / 4-5 | n/a (C12 OJT) |
| O3 ADS and constant | T3 | 3 | 3 | 6-8 / 6-8 | n/a (C8 OJT) |
| O4 Tests vs bills | T4 | 4 | 5 | 9-10 / 9-10 | 4 |
| O5 Schedule rows | T5 | 5 | 4 | 11-12 / 11-12 | n/a (C12 OJT) |

The OJT covers O1 and O4. O2, O3 and O5 are practised on the job in the C8 and C12 OJT tasks, which reuse these formulas.

## Self-review against Bible Section 7 (19 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [VERIFY], [POLICY], [CONFIRM] or [DATA] tags | Met |
| Every calculation cites a formula ID; thresholds cite rules | Met |
| Four-line worked formulas; re-checked by a second person | Four lines met; second-person check pending (solo: re-run in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-RES-01, RD-COM-01, RD-MF-01 |
| Lesson follows LD-04 order; alignment matrix; fits 3 hours | Met (180 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (12 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no colour-only meaning |

**Self-check.**

1. A $240,000 loan at 10.25% funds on 15 January. How many interest days fall in January, and what is the interest? **Answer:** 17 days, because the funding day counts (D-CONV-02). $240,000 × 10.25% ÷ 360 × 17 = $1,161.67 (F-CORE-01), collected at closing (CORE-CLS-04, F-CORE-33).
2. A 10-year loan amortizes over 25 years. What is n in the payment formula? **Answer:** n = 25 × 12 = 300 months, not the 120-month term (F-CORE-02).
3. A $1,500,000 interest-only bridge is at 8.00%. What ADS goes in the coverage test, and what is billed over 365 days? **Answer:** Test ADS = $1,500,000 × 8.00% = $120,000.00 (F-CORE-03, D-CONV-01). Billed = $1,500,000 × 8.00% ÷ 360 × 365 = $121,666.67 (F-CORE-01).
4. Why is the loan constant at 7.000% on 25-year amortization above 7.000%? **Answer:** It includes principal repayment: 0.084814, or 8.481% (F-CORE-04).

**Real-world check (researched 19 Nov 2026).** These real documents use the same conventions taught in T1 and T4.

- **Note wording.** A typical US promissory note clause says interest is "computed on a 365/360 basis". It then describes the rate over a 360-day year, times the balance, times the actual days outstanding. That is F-CORE-01 ([Law Insider, interest rate computation clause](https://lawinsider.com/clause/interest-rate-computation/_1)).
- **The cost of the convention.** A law-firm example: $10,000,000 at 8% costs $800,000 a year on a 365-day basis, but $811,111 on the bank (Actual/360) method. That is 1.39% more, the same 365/360 gap taught in T4 ([Reinhart Boerner Van Deuren](https://www.reinhartlaw.com/knowledge/calculating-interest-the-stated-rate-method-and-the-bank-method/)).
- **Rate caps.** A bank's standard rate cap confirmation sets the floating rate day count fraction at Actual/360 ([Wells Fargo cap confirmation template](https://wellsfargo.com/assets/pdf/commercial/swap-disclosures/templates/rates-cap-floor-straddle-corridor.pdf)). The ARRC recommends Actual/360 for SOFR loans as the US money-market standard ([ARRC syndicated loan conventions](https://www.newyorkfed.org/medialibrary/Microsites/arrc/files/2020/ARRC_SOFR_Synd_Loan_Conventions.pdf)). So cap payouts and loan interest use the same basis, as the running deals assume.

**What to look up yourself.** Open the ARRC's recommended conventions for SOFR business loans on the [New York Fed ARRC business loans page](https://www.newyorkfed.org/arrc/publications/business-loans). Find the day count it recommends and compare it with F-CORE-01. Then find the day-count clause in a promissory note you can see at work, and check that it matches D-CONV-02.

**How to check it:** in a spreadsheet, `=ROUND(240000*10.25%/360*14+270000*10.25%/360*17,2)` should give $2,263.54, the March bill in the hook.
