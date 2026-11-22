# Formula Library

**Model policy for training - not for live lending decisions.** As of 19 Nov 2026. US dollars. All examples fictional.

## Library conventions (set 19 Nov 2026)

| Convention | Rule | Source |
| --- | --- | --- |
| Day count | Actual/360 for all interest accrual and billing: per diem, period interest, reserves, prepaid, default and payoff interest | Your decision, 19 Nov 2026; replaces Bible \[POLICY: day-count\] |
| Underwriting tests | DSCR, interest coverage, liquidity and sizing use the nominal annual rate (Loan × rate) or rate ÷ 12, as in every policy example (decided 19 Nov 2026) | Assumption; keeps all existing examples valid |
| Amortizing payments | Monthly rate = annual ÷ 12; n = amortization months (F-CORE-02) | Market convention |
| Precision | Keep full precision in working steps; round only final answers. Loan constants are shown to 6 decimals, but sizing divides by the unrounded constant (ADS ÷ L) | Course Bible style guide |
| Limit tests | Compare at full precision: 1.2496x fails a 1.25x minimum | Your decision, 19 Nov 2026; replaces Bible \[POLICY: rounding rule ID\] |
| Money | Round half up to the cent. Test cases show cents; narrative follows the Bible (no cents over $100) | Course Bible style guide |
| Display | Rates 3 decimals; LTV, LTC 1 decimal; DSCR 2 decimals with x; debt yield and cap rate 2 decimals | Course Bible style guide |
| Status | REQUIRED = listed in the Course Bible or the Model Credit Policy. SUGGESTED = added because a credit officer expects it | Your decision, 19 Nov 2026 |

## Core formulas (F-CORE)

| ID | Name | Status | Main rules |
| --- | --- | --- | --- |
| F-CORE-01 | Interest-only payment (Actual/360) | REQUIRED | CORE-PRC-01, CORE-SVC-01 |
| F-CORE-02 | Amortizing payment (principal and interest) | REQUIRED | RES-DSCR rules, MF-TRM, COM-TRM-02, COM-DSCR-09 |
| F-CORE-03 | Annual debt service (ADS) | REQUIRED | Every DSCR rule |
| F-CORE-04 | Loan constant | REQUIRED | MF-TRM, COM-TRM-02 |
| F-CORE-05 | Per diem interest | REQUIRED | CORE-CLS-01 |
| F-CORE-06 | Origination points | REQUIRED | CORE-PRC-01, -02, -03 |
| F-CORE-07 | Gross potential rent (GPR) | REQUIRED | MF-GEN-05, COM-GEN-05 |
| F-CORE-08 | Vacancy and credit loss | REQUIRED | MF-GEN-05, COM-GEN-05 |
| F-CORE-09 | Effective gross income (EGI) | REQUIRED | MF-GEN-05, COM-GEN-05 |
| F-CORE-10 | Net operating income (NOI) | REQUIRED | MF-GEN-06, COM-GEN-06 |
| F-CORE-11 | Debt service coverage ratio (DSCR) | REQUIRED | MF-GEN-11, COM-GEN-11, RES-DSCR |
| F-CORE-12 | Break-even occupancy | REQUIRED | Context for MF-GEN-05, COM-GEN-05 |
| F-CORE-13 | Capitalization (cap) rate | REQUIRED | CORE-VAL-01 to -03 |
| F-CORE-14 | Loan-to-value (LTV) | REQUIRED | CORE-VAL-01, -02 |
| F-CORE-15 | Loan-to-cost (LTC) | REQUIRED | COM-CON-01, MF-BR, RES-FF |
| F-CORE-16 | Debt yield | REQUIRED | MF-GEN-11, COM-GEN-11 |
| F-CORE-17 | Maximum loan by DSCR | REQUIRED | COM-GEN-11, MF-TRM, RES-DSCR |
| F-CORE-18 | Maximum loan by debt yield | REQUIRED | COM-GEN-11, MF-GEN-11 |
| F-CORE-19 | Maximum loan (lowest of all tests) | REQUIRED | COM-GEN-11, MF-GEN-11 |
| F-CORE-20 | Interest reserve (straight-line) | REQUIRED | COM-BR-04, CORE-SVC-01 |
| F-CORE-21 | Months of reserves | REQUIRED | COM-DSCR-07, RES-DSCR |
| F-CORE-22 | Extension fee | REQUIRED | CORE-SVC-01, -02, COM-BR-02 |
| F-CORE-23 | Loss severity | REQUIRED | CORE-DOC-01, -02, CORE-SVC-03 |
| F-CORE-24 | Adjusted liquid assets | REQUIRED | CORE-BOR-11 |
| F-CORE-25 | Required post-closing liquidity | REQUIRED | CORE-BOR-12 |
| F-CORE-26 | Adjusted net worth | REQUIRED | CORE-BOR-14 |
| F-CORE-27 | Experience count and tier | REQUIRED | CORE-BOR-15, -16 |
| F-CORE-28 | Note rate (RTL grid) | REQUIRED | CORE-PRC-01, -02, -03 |
| F-CORE-29 | Aggregate sponsor exposure | REQUIRED | CORE-CONC-01, -02 |
| F-CORE-30 | Bucket concentration | REQUIRED | CORE-CONC-03 to -07 |
| F-CORE-31 | Default interest | SUGGESTED | CORE-SVC-03, CORE-PRC-03 |
| F-CORE-32 | Payoff amount | SUGGESTED | CORE-SVC-01 |
| F-CORE-33 | Prepaid (odd-days) interest at closing | SUGGESTED | CORE-CLS-01 |
| F-CORE-34 | Insurance-to-value ratio | SUGGESTED | CORE-INS-01 |
| F-CORE-35 | Monthly tax and insurance escrow | SUGGESTED | MF-BR-13, CORE-INS-01 |
| F-CORE-36 | Appraisal age | SUGGESTED | CORE-VAL-02 |
| F-CORE-37 | Coinsurance recovery | SUGGESTED | CORE-INS-01 |
| F-CORE-40 | All-in annual cost screen | SUGGESTED | CORE-PRC-03 |
| F-CORE-41 | Net funding wire | SUGGESTED | CORE-CLS-03, -04 |
| F-CORE-42 | REO carrying value and charge-off | SUGGESTED | CORE-DEF-06 |
| F-CORE-43 | Bucket headroom | SUGGESTED | CORE-CONC-02 to -07 |
| F-CORE-44 | Cash-on-cash return | SUGGESTED | No policy limit; C5 |

### F-CORE-01: Interest-only payment (Actual/360)

**Purpose.** Interest due for one billing period on an interest-only loan.

**Formula.** Interest = Loan balance × annual rate ÷ 360 × actual days in the period

```latex
I = L \times \frac{r}{360} \times d
```

**Variables and units.** L = outstanding balance (USD); r = annual note rate (%); d = actual days in the period (days)

**Worked example.**

1. Inputs: $500,000 balance; 10.000%; 30-day month.
2. $500,000 × 10.000% ÷ 360 = $138.89 a day (unrounded 138.888…).
3. × 30 days = $4,166.67. A 31-day month gives $4,305.56.

**Interpretation.** What the borrower owes each period. Months with more days cost more under Actual/360.

**Related rules.** CORE-PRC-01, CORE-SVC-01; used in every interest-only bridge rule (RES-FF, MF-BR, COM-BR)

**Common mistakes.**

- Dividing by 12 instead of using actual days; this understates interest in 31-day months.
- Using the commitment instead of the funded balance on future-funded loans.
- Rounding the daily rate before multiplying by days.

**Edge cases.** Zero balance or rate → $0. Negative inputs are invalid. Partial period (funding mid-month) → count actual days funded, including the funding day and excluding the payoff day (decided 19 Nov 2026). Not affected by vacancy.

**Rounding and day count.** Actual/360. Keep full precision; round the period amount to the cent (half up) once.

**Modules.** C3, C11, C12; also the family bridge modules

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 10.000%; 30 days | $4,166.67 |
| 2 | $4,340,000; 7.650%; 31 days | $28,589.75 |
| 3 | $340,000; 11.500%; 28 days | $3,041.11 |

### F-CORE-02: Amortizing payment (principal and interest)

**Purpose.** Level monthly payment that repays a loan over its amortization term.

**Formula.** Payment = L × i ÷ (1 − (1 + i)^−n), where i = annual rate ÷ 12 and n = months

```latex
P = \frac{L \times i}{1-(1+i)^{-n}},\quad i=\frac{r}{12}
```

**Variables and units.** L = loan amount (USD); r = annual note rate (%); i = monthly rate (decimal); n = amortization (months)

**Worked example.**

1. Inputs: $500,000; 7.000%; 360 months.
2. i = 7.000% ÷ 12 = 0.0058333…
3. Payment = $3,326.51 a month.

**Interpretation.** The scheduled P&I payment. It is the debt-service base for DSCR on amortizing loans.

**Related rules.** RES-DSCR rules (F-RES-07, -08), MF-TRM, COM-TRM-02, COM-DSCR-09

**Common mistakes.**

- Using the term (e.g. 10 years) instead of the amortization (e.g. 30 years) for n.
- Entering the annual rate without dividing by 12.
- Applying Actual/360 here; the payment formula uses a 12-period year by convention.

**Edge cases.** Rate 0% → P = L ÷ n. n must be ≥ 1. Negative L invalid. Partial first period → interest for odd days is collected separately (F-CORE-33), not by changing P.

**Rounding and day count.** Monthly 30/360 payment convention (market standard for amortizing schedules; accrual on billing still follows the note) (decided 19 Nov 2026). Round P to the cent.

**Modules.** C3, C8; also the family term-loan modules

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 7.000%; 360 months | $3,326.51 |
| 2 | $3,900,000; 7.000%; 300 months | $27,564.39 |
| 3 | $120,000; 0.000%; 120 months | $1,000.00 |

### F-CORE-03: Annual debt service (ADS)

**Purpose.** Total scheduled payments in a year, used in DSCR.

**Formula.** ADS = monthly payment × 12 (amortizing) or Loan × annual rate (interest-only, underwriting basis)

```latex
ADS = 12 \times P \quad\text{or}\quad ADS_{IO} = L \times r
```

**Variables and units.** P = monthly payment from F-CORE-02 (USD); L = balance (USD); r = annual rate (%)

**Worked example.**

1. Amortizing: $3,326.51 × 12 = $39,918.12.
2. Interest-only (underwriting): $500,000 × 10.000% = $50,000.00.

**Interpretation.** The yearly debt cost that NOI or NCF must cover.

**Related rules.** Every DSCR rule; F-CORE-11, F-MF-10, F-COM-08

**Common mistakes.**

- Multiplying an unrounded payment by 12 in one place and a rounded one elsewhere.
- Using the Actual/360 billed interest (×365/360) in one test and nominal in another.

**Edge cases.** Zero loan → $0. For IO loans the underwriting ADS uses the nominal rate (L × r); actual billed interest is ×365/360 higher (nominal basis decided 19 Nov 2026). Not affected by vacancy.

**Rounding and day count.** Round the monthly payment to the cent first, then × 12, so ADS ties to the schedule.

**Modules.** C3, C8, C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Payment $3,326.51 | $39,918.12 |
| 2 | IO: $2,860,000 at 8.250% | $235,950.00 |
| 3 | Payment $27,564.39 | $330,772.68 |

### F-CORE-04: Loan constant

**Purpose.** Annual debt service per dollar of loan; lets sizing work without a loan amount.

**Formula.** Constant = ADS ÷ loan amount

```latex
K = \frac{ADS}{L} = \frac{12\,i}{1-(1+i)^{-n}}
```

**Variables and units.** ADS = annual debt service (USD); L = loan (USD); i, n as F-CORE-02

**Worked example.**

1. $39,918.12 ÷ $500,000 = 0.0798362 = 7.984%.

**Interpretation.** A 7.98% constant means each $1 of loan costs about 8 cents a year.

**Related rules.** F-CORE-17, F-COM-08, F-COM-10, MF-TRM, COM-TRM-02

**Common mistakes.**

- Using the note rate as the constant on an amortizing loan.
- Rounding the constant to two decimals before sizing; this moves loan size by thousands.

**Edge cases.** Rate 0% → K = 12 ÷ n. IO loan → K = r. Not defined for L = 0.

**Rounding and day count.** Show at least 6 decimal places (e.g. 0.084814). Sizing divides by the unrounded constant, ADS ÷ L (corrected 20 Nov 2026). Display as percent, three decimals.

**Modules.** C3, C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 7.000%, 25 years | 0.084814 |
| 2 | 7.750%, 25 years | 0.090639 |
| 3 | 6.500%, 30 years | 0.075848 |

### F-CORE-05: Per diem interest

**Purpose.** One day's interest; used for closings, payoffs and odd-day charges.

**Formula.** Per diem = Loan × annual rate ÷ 360

```latex
I_{day} = \frac{L \times r}{360}
```

**Variables and units.** L = balance (USD); r = annual rate (%)

**Worked example.**

1. $500,000 × 10.000% ÷ 360 = $138.89.

**Interpretation.** Each extra day the loan is outstanding costs this amount.

**Related rules.** CORE-CLS-01; F-CORE-01, -31, -32, -33

**Common mistakes.**

- Rounding the per diem to the cent, then multiplying by many days (error grows).
- Using 365 for an Actual/360 note.

**Edge cases.** Zero balance → $0. Default interest uses the default rate (F-CORE-31).

**Rounding and day count.** Actual/360. Display to the cent; calculate with the unrounded value.

**Modules.** C3, C11, C12

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 10.000% | $138.89 |
| 2 | $3,520,000; 7.650% | $748.00 |
| 3 | $5,140,000; 9.000% | $1,285.00 |

### F-CORE-06: Origination points

**Purpose.** Upfront fee charged as a percent of the loan.

**Formula.** Fee = Commitment × points ÷ 100

```latex
Fee = C \times \frac{pts}{100}
```

**Variables and units.** C = total commitment (USD); pts = points (1 point = 1%)

**Worked example.**

1. $500,000 × 2.00 points = $10,000.00.

**Interpretation.** Raises lender yield; counts toward cash to close and state fee tests.

**Related rules.** CORE-PRC-01 (never below 1.00 point), CORE-PRC-02, CORE-PRC-03 \[VERIFY: state fee limits\]

**Common mistakes.**

- Charging points on initial funding instead of total commitment (or the reverse) against the term sheet.
- Treating 1 point as 0.1%.

**Edge cases.** Zero points below the 1.00 floor breaks CORE-PRC-01. Fees may be capped by state law \[VERIFY\].

**Rounding and day count.** Round to the cent.

**Modules.** C8, C11

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $340,000; 2.00 points | $6,800.00 |
| 2 | $3,520,000; 1.00 point | $35,200.00 |
| 3 | $5,140,000; 1.50 points | $77,100.00 |

### F-CORE-07: Gross potential rent (GPR)

**Purpose.** Rent the property earns if every unit or suite is leased at its scheduled rent.

**Formula.** GPR = Σ (scheduled monthly rent per unit) × 12

```latex
GPR = 12 \sum_{u} Rent_u
```

**Variables and units.** Rent\_u = monthly in-place or market rent per unit (USD per month)

**Worked example.**

1. 10 units × $1,500 × 12 = $180,000.00.

**Interpretation.** The ceiling for rental income before vacancy and loss.

**Related rules.** MF-GEN-05, COM-GEN-05

**Common mistakes.**

- Mixing market rent for vacant units with in-place rent for leased ones without saying so.
- Including concessions or other income in GPR.

**Edge cases.** 100% vacancy still has a GPR (market rent); income comes from F-CORE-09. Zero units → $0.

**Rounding and day count.** Round to the cent.

**Modules.** C4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 10 units × $1,500 | $180,000.00 |
| 2 | 50 units, average $1,300 | $780,000.00 |
| 3 | 8 suites, $4,250 each | $408,000.00 |

### F-CORE-08: Vacancy and credit loss

**Purpose.** Income lost to empty space and unpaid rent.

**Formula.** Vacancy = GPR × vacancy rate

```latex
V = GPR \times v
```

**Variables and units.** GPR (USD per year); v = vacancy and credit loss rate (%)

**Worked example.**

1. $180,000 × 5.0% = $9,000.00.

**Interpretation.** Underwriting uses the greater of actual, market or the policy floor.

**Related rules.** MF-GEN-05 (floor 5%), COM-GEN-05 (5%, office 10%)

**Common mistakes.**

- Using physical occupancy when economic vacancy (unpaid rent) is higher.
- Applying the floor on top of actual vacancy instead of taking the greater.

**Edge cases.** v = 100% → EGI is other income only. v below the policy floor → use the floor.

**Rounding and day count.** Round to the cent.

**Modules.** C4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $180,000; 5.0% | $9,000.00 |
| 2 | $780,000; 10.0% | $78,000.00 |
| 3 | $720,000; 100.0% | $720,000.00 |

### F-CORE-09: Effective gross income (EGI)

**Purpose.** Income actually expected after vacancy, plus other income.

**Formula.** EGI = GPR − vacancy and credit loss + other income

```latex
EGI = GPR - V + OI
```

**Variables and units.** GPR, V, OI = other income (all USD per year)

**Worked example.**

1. $180,000 − $9,000 + $6,000 = $177,000.00.

**Interpretation.** The top line for NOI.

**Related rules.** MF-GEN-05, COM-GEN-05

**Common mistakes.**

- Applying vacancy to other income twice.
- Counting one-time income (e.g. a lease buyout) as recurring.

**Edge cases.** 100% vacancy → EGI = OI. Negative EGI is not possible unless OI is negative (invalid input).

**Rounding and day count.** Round to the cent.

**Modules.** C4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | GPR $180,000; V $9,000; OI $6,000 | $177,000.00 |
| 2 | GPR $720,000; V $36,000; OI $0 | $684,000.00 |
| 3 | GPR $720,000; V $720,000; OI $18,000 | $18,000.00 |

### F-CORE-10: Net operating income (NOI)

**Purpose.** Property cash flow before debt service and capital reserves.

**Formula.** NOI = EGI − operating expenses

```latex
NOI = EGI - OpEx
```

**Variables and units.** EGI (USD per year); OpEx = operating expenses incl. taxes, insurance, management (USD per year)

**Worked example.**

1. $177,000 − $72,000 = $105,000.00.

**Interpretation.** The base for value (cap rate), debt yield and DSCR. Multifamily and commercial deduct reserves next (F-MF-09, F-COM-03).

**Related rules.** MF-GEN-06, COM-GEN-06 (greater of T-12 and appraiser; management ≥ 3%)

**Common mistakes.**

- Deducting debt service or depreciation.
- Leaving out management because the owner self-manages.

**Edge cases.** NOI can be negative (e.g. 100% vacancy); then DSCR and debt yield are negative and fail.

**Rounding and day count.** Round to the cent.

**Modules.** C4, C5, C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | EGI $177,000; OpEx $72,000 | $105,000.00 |
| 2 | EGI $684,000; OpEx $204,000 | $480,000.00 |
| 3 | EGI $18,000; OpEx $310,000 | −$292,000.00 |

### F-CORE-11: Debt service coverage ratio (DSCR)

**Purpose.** How many times income covers debt service.

**Formula.** DSCR = income ÷ annual debt service (income = NOI here; families set NCF or gross rent)

```latex
DSCR = \frac{NOI}{ADS}
```

**Variables and units.** NOI (USD per year); ADS (USD per year, F-CORE-03)

**Worked example.**

1. $105,000 ÷ $84,000 = 1.25x.

**Interpretation.** Below 1.00x the property cannot pay its debt from income.

**Related rules.** Family minimums: RES-DSCR (F-RES-07), MF-GEN-11 / F-MF-10, COM-GEN-11 / F-COM-08

**Common mistakes.**

- Using the wrong income base for the family (NOI vs NCF vs gross rent).
- Rounding 1.2496x to 1.25x before comparing to a 1.25x minimum (not allowed: full precision).

**Edge cases.** ADS = 0 → undefined (no debt). Negative NOI → negative DSCR, fails.

**Rounding and day count.** Compare at full precision; display two decimals with x.

**Modules.** C4, C8, C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NOI $105,000; ADS $84,000 | 1.25x |
| 2 | NOI $434,000; ADS $330,772.68 | 1.31x (1.3121) |
| 3 | NOI $124,950; ADS $100,000 | 1.2495 → displays 1.25x but FAILS a 1.25x minimum |

### F-CORE-12: Break-even occupancy

**Purpose.** Occupancy needed to pay operating expenses and debt service.

**Formula.** Break-even = (OpEx + ADS) ÷ GPR

```latex
BE = \frac{OpEx + ADS}{GPR}
```

**Variables and units.** OpEx, ADS, GPR (USD per year)

**Worked example.**

1. ($72,000 + $84,000) ÷ $180,000 = 86.7%.

**Interpretation.** The cushion is current occupancy minus break-even.

**Related rules.** Context for MF-GEN-05 and COM-GEN-05 vacancy assumptions

**Common mistakes.**

- Leaving out ADS.
- Comparing to physical occupancy when economic occupancy is lower.

**Edge cases.** Above 100% → the property cannot break even even fully leased. GPR = 0 → undefined.

**Rounding and day count.** Display percent, one decimal.

**Modules.** C4, C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | OpEx $72,000; ADS $84,000; GPR $180,000 | 86.7% |
| 2 | OpEx $204,000; ADS $330,772.68; GPR $720,000 | 74.3% |
| 3 | OpEx $310,000; ADS $500,000; GPR $780,000 | 103.8% |

### F-CORE-13: Capitalization (cap) rate

**Purpose.** Converts NOI to value, or value to an income yield.

**Formula.** Cap rate = NOI ÷ value; value = NOI ÷ cap rate

```latex
CR = \frac{NOI}{V}, \qquad V = \frac{NOI}{CR}
```

**Variables and units.** NOI (USD per year); V = value (USD); CR (%)

**Worked example.**

1. $105,000 ÷ $1,500,000 = 7.00%; $105,000 ÷ 7.00% = $1,500,000.

**Interpretation.** Lower cap rate = higher value for the same NOI.

**Related rules.** CORE-VAL-01 to -03 (the appraiser sets the rate)

**Common mistakes.**

- Capping a projected NOI and calling it as-is value.
- Using a cap rate below the loan constant without noticing negative leverage.

**Edge cases.** CR = 0 → undefined. Negative NOI → value not meaningful by this method.

**Rounding and day count.** Display cap rate as percent, two decimals; value to the dollar.

**Modules.** C5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NOI $105,000; V $1,500,000 | 7.00% |
| 2 | NOI $480,000; CR 8.00% | $6,000,000.00 |
| 3 | NOI $240,000; V $4,000,000 | 6.00% |

### F-CORE-14: Loan-to-value (LTV)

**Purpose.** Leverage against value.

**Formula.** LTV = loan ÷ value (value = lower of cost and appraisal on a purchase)

```latex
LTV = \frac{L}{\min(Price,\ Appraisal)}
```

**Variables and units.** L (USD); Price (USD); Appraisal (USD)

**Worked example.**

1. $1,050,000 ÷ $1,500,000 = 70.0%.

**Interpretation.** Higher LTV = less borrower equity cushion.

**Related rules.** CORE-VAL-01, -02; family limits (RES, MF-BR, COM-BR, COM-TRM); 12 CFR 365 value definition \[VERIFY\]

**Common mistakes.**

- Using appraised value above the purchase price on an acquisition.
- Mixing as-is and as-stabilized values.

**Edge cases.** Value 0 → undefined. Loan above value → over 100%: fails every limit.

**Rounding and day count.** Compare at full precision; display one decimal.

**Modules.** C5, C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $1,050,000; value $1,500,000 | 70.0% |
| 2 | $2,860,000; price $4,400,000, appraisal $4,500,000 | 65.0% |
| 3 | $3,900,000; value $6,000,000 | 65.0% |

### F-CORE-15: Loan-to-cost (LTC)

**Purpose.** Leverage against total project cost.

**Formula.** LTC = total loan commitment ÷ total project cost

```latex
LTC = \frac{C}{Cost_{total}}
```

**Variables and units.** C = commitment incl. future funding (USD); Cost\_total = purchase or land + hard + soft + reserves (USD)

**Worked example.**

1. $1,200,000 ÷ $1,600,000 = 75.0%.

**Interpretation.** Shows how much of the project the lender funds.

**Related rules.** COM-CON-01, COM-BR table, MF-BR, RES-FF

**Common mistakes.**

- Leaving the interest reserve out of cost but in the loan.
- Using initial funding instead of total commitment.

**Edge cases.** Cost 0 → undefined. Land counted at lower of cost and value.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $1,200,000; $1,600,000 | 75.0% |
| 2 | $3,520,000; $5,180,000 | 68.0% |
| 3 | $5,969,283; $9,183,512 | 65.0% |

### F-CORE-16: Debt yield

**Purpose.** Income return on the loan, independent of rate and amortization.

**Formula.** Debt yield = NOI ÷ loan

```latex
DY = \frac{NOI}{L}
```

**Variables and units.** NOI (USD per year; families may use NCF); L (USD)

**Worked example.**

1. $105,000 ÷ $1,050,000 = 10.00%.

**Interpretation.** The lender's income return if it took the property at the loan amount.

**Related rules.** MF-GEN-11 / F-MF-11, COM-GEN-11, COM-BR exit debt yields

**Common mistakes.**

- Using NOI where the family requires NCF.
- Comparing as-is NOI to a stabilized loan amount.

**Edge cases.** L = 0 → undefined. Negative NOI → negative, fails.

**Rounding and day count.** Full precision; display two decimals.

**Modules.** C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $105,000; $1,050,000 | 10.00% |
| 2 | $434,000; $3,520,000 | 12.33% |
| 3 | $254,000; $2,860,000 | 8.88% |

### F-CORE-17: Maximum loan by DSCR

**Purpose.** Largest loan the income supports at a minimum DSCR.

**Formula.** Max loan = NOI ÷ minimum DSCR ÷ loan constant

```latex
L_{DSCR} = \frac{NOI}{DSCR_{min} \times K}
```

**Variables and units.** NOI (USD per year); DSCR\_min (x); K = loan constant (F-CORE-04)

**Worked example.**

1. $105,000 ÷ 1.25 ÷ 8.00% = $1,050,000.00.

**Interpretation.** Usually the binding test when rates are high relative to cap rates.

**Related rules.** COM-GEN-11, F-COM-08, MF-TRM, RES-DSCR

**Common mistakes.**

- Rounding the constant first.
- Dividing by DSCR × rate on an amortizing loan.

**Edge cases.** NOI ≤ 0 → $0 loan. K must be > 0.

**Rounding and day count.** Full precision; round the final loan down to the nearest $1,000 (CORE-PRC-05).

**Modules.** C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $105,000; 1.25x; 8.00% | $1,050,000.00 |
| 2 | $434,000; 1.30x; K = $330,772.68 ÷ $3,900,000 | $3,936,238.02 |
| 3 | $430,000; 1.25x; K = $319,050.84 ÷ $3,520,000 | $3,795,257.21 |

### F-CORE-18: Maximum loan by debt yield

**Purpose.** Largest loan at a minimum debt yield.

**Formula.** Max loan = NOI ÷ minimum debt yield

```latex
L_{DY} = \frac{NOI}{DY_{min}}
```

**Variables and units.** NOI (USD per year); DY\_min (%)

**Worked example.**

1. $105,000 ÷ 10.50% = $1,000,000.00.

**Interpretation.** A rate-free cap on loan size.

**Related rules.** COM-GEN-11, MF-GEN-11, COM-BR table

**Common mistakes.**

- Using a stabilized debt yield floor against in-place NOI.
- Using NOI where the family requires NCF (multifamily, commercial).

**Edge cases.** NOI ≤ 0 → $0.

**Rounding and day count.** Full precision; round the final loan down to the nearest $1,000 (CORE-PRC-05).

**Modules.** C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $105,000; 10.50% | $1,000,000.00 |
| 2 | $434,000; 9.00% | $4,822,222.22 |
| 3 | $720,000; 9.00% | $8,000,000.00 |

### F-CORE-19: Maximum loan (lowest of all tests)

**Purpose.** Final loan size from every applicable test.

**Formula.** Max loan = minimum of the LTV, LTC, DSCR and debt-yield results that apply

```latex
L = \min(L_{LTV}, L_{LTC}, L_{DSCR}, L_{DY})
```

**Variables and units.** Each test result (USD)

**Worked example.**

1. min($1,125,000; $1,050,000; $1,000,000) = $1,000,000.00. Debt yield binds.

**Interpretation.** Name the binding test in the credit memo.

**Related rules.** COM-GEN-11 (F-COM-08), MF-GEN-11, family sizing rules

**Common mistakes.**

- Skipping a test because it 'usually doesn't bind'.
- Rounding up to a round number above the binding test.

**Edge cases.** If any test gives $0 or less, no loan.

**Rounding and day count.** Take the minimum at full precision, then round down to the nearest $1,000 (CORE-PRC-05).

**Modules.** C8, C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $1,125,000; $1,050,000; $1,000,000 | $1,000,000.00 |
| 2 | $3,900,000; $3,936,238; $4,822,222 | $3,900,000.00 |
| 3 | $2,800,000; $2,468,378 (NNN) | $2,468,000.00 |

### F-CORE-20: Interest reserve (straight-line)

**Purpose.** Loan proceeds held back to pay interest for a set period.

**Formula.** Reserve = balance × annual rate ÷ 360 × actual days in the reserve period

```latex
IR = L \times \frac{r}{360} \times d
```

**Variables and units.** L = funded balance (USD); r (%); d = days covered (days)

**Worked example.**

1. $500,000 × 10.000% ÷ 360 × 180 days = $25,000.00. Over 182 actual days: $25,277.78.

**Interpretation.** Straight-line reserves suit fully funded loans. Construction uses an average-balance version (F-RES-16, F-MF-15, F-COM-14).

**Related rules.** COM-BR-04, CORE-SVC-01

**Common mistakes.**

- Counting 6 × 30 = 180 days instead of actual days.
- Sizing on initial funding when draws will raise the balance.

**Edge cases.** Zero days → $0. Floating rate → size at cap strike + spread (COM-BR-03).

**Rounding and day count.** Actual/360; round to the cent.

**Modules.** C8, C11, C12

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 10.000%; 182 days | $25,277.78 |
| 2 | $2,860,000; 8.250%; 184 days | $120,596.67 |
| 3 | $340,000; 11.500%; 90 days | $9,775.00 |

### F-CORE-21: Months of reserves

**Purpose.** How many monthly payments liquid assets cover.

**Formula.** Months = adjusted liquid assets ÷ monthly payment (PITIA or interest)

```latex
Months = \frac{LA_{adj}}{P_{month}}
```

**Variables and units.** LA\_adj = F-CORE-24 (USD); P\_month = monthly PITIA or interest (USD)

**Worked example.**

1. $60,000 ÷ $5,000 = 12.0 months.

**Interpretation.** Tests staying power if the property stops paying.

**Related rules.** COM-DSCR-07 (6 months PITIA), RES-DSCR reserve rules

**Common mistakes.**

- Using gross, not adjusted, liquidity.
- Using P&I only when the rule says PITIA.

**Edge cases.** P\_month = 0 → undefined. Negative liquidity → negative months, fails.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** C6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $60,000; $5,000 | 12.0 months |
| 2 | $45,313.80; $7,552.30 | 6.0 months |
| 3 | $20,000; $3,043.35 | 6.6 months |

### F-CORE-22: Extension fee

**Purpose.** Fee to extend maturity.

**Formula.** Fee = commitment (or balance, per the note) × fee rate

```latex
Fee_{ext} = C \times f
```

**Variables and units.** C (USD); f = fee (%)

**Worked example.**

1. $500,000 × 0.50% = $2,500.00.

**Interpretation.** Compensates the lender for added time risk.

**Related rules.** CORE-SVC-01, CORE-SVC-02 (0.50 point of commitment), COM-BR-02 (≥ 0.25%), MF-BR-11

**Common mistakes.**

- Using the outstanding balance when the rule says commitment.
- Granting the extension before the progress test (CORE-SVC-01) is met.

**Edge cases.** A failed extension test means no fee and no extension.

**Rounding and day count.** Round to the cent.

**Modules.** C12

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $340,000; 0.50% | $1,700.00 |
| 2 | $3,520,000; 0.25% | $8,800.00 |
| 3 | $5,140,000; 0.50% | $25,700.00 |

### F-CORE-23: Loss severity

**Purpose.** Loss as a share of the balance at default.

**Formula.** Severity = (balance + costs − net recovery) ÷ balance

```latex
LS = \frac{B + Costs - Recovery}{B}
```

**Variables and units.** B = balance at default (USD); Costs = legal, carry, sale costs (USD); Recovery = net sale proceeds (USD)

**Worked example.**

1. ($500,000 + $40,000 − $430,000) ÷ $500,000 = 22.0%.

**Interpretation.** Feeds recourse, pricing and reserve judgements.

**Related rules.** CORE-DOC-01, CORE-DOC-02 (recourse), CORE-SVC-03

**Common mistakes.**

- Leaving out accrued interest and carry costs.
- Using gross, not net, sale proceeds.

**Edge cases.** Recovery above B + costs → negative severity (a gain); report 0% loss and show the gain separately (decided 19 Nov 2026). B = 0 → undefined.

**Rounding and day count.** Display one decimal.

**Modules.** C13, C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; $40,000; $430,000 | 22.0% |
| 2 | $3,520,000; $310,000; $3,150,000 | 19.3% |
| 3 | $340,000; $28,000; $400,000 | −9.4% → report 0.0% loss |

### F-CORE-24: Adjusted liquid assets

**Purpose.** Liquidity after haircuts and cash to close.

**Formula.** Adjusted = cash × 1.00 + securities × 0.70 + vested retirement × 0.70 + HELOC × 0 − cash to close

```latex
LA_{adj} = Cash + 0.70\,Sec + 0.70\,Ret - CTC
```

**Variables and units.** Cash, Sec, Ret, CTC (USD)

**Worked example.**

1. $110,000 + $21,000 + $35,000 + $0 − $75,800 = $90,200.00.

**Interpretation.** Post-closing liquidity available to the guarantor.

**Related rules.** CORE-BOR-11

**Common mistakes.**

- Counting an unused credit line as liquidity.
- Forgetting to subtract cash to close.

**Edge cases.** Negative result → borrower cannot close from own funds.

**Rounding and day count.** Round to the cent.

**Modules.** C6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $110,000; $30,000; $50,000; CTC $75,800 | $90,200.00 |
| 2 | $550,000; $300,000; $0; CTC $0 | $760,000.00 |
| 3 | $40,000; $10,000; $0; CTC $60,000 | −$13,000.00 |

### F-CORE-25: Required post-closing liquidity

**Purpose.** Minimum liquidity a guarantor must hold after closing.

**Formula.** Required = max(10% × commitment, 6 months' interest) + 5% × other open commitments with us

```latex
LR = \max(0.10\,C,\ 6 \times \tfrac{C\,r}{12}) + 0.05\,O
```

**Variables and units.** C = commitment (USD); r = note rate (%); O = other open commitments (USD)

**Worked example.**

1. max($34,000; $18,700) + $30,000 = $64,000.00.

**Interpretation.** Compare to F-CORE-24.

**Related rules.** CORE-BOR-12

**Common mistakes.**

- Using Actual/360 billed interest here; the test uses nominal months (decided 19 Nov 2026).
- Leaving out other open commitments.

**Edge cases.** O = 0 → no add-on.

**Rounding and day count.** Underwriting test: nominal monthly interest (r ÷ 12). Round to the cent.

**Modules.** C6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $340,000; 11.000%; O $600,000 | $64,000.00 |
| 2 | $3,520,000; 7.650%; O $0 | $352,000.00 |
| 3 | $5,140,000; 7.650%; O $0 | $514,000.00 |

### F-CORE-26: Adjusted net worth

**Purpose.** Guarantor net worth without equity in the subject property.

**Formula.** Adjusted NW = total assets − total liabilities − equity in subject property

```latex
NW_{adj} = A - Lb - E_{subj}
```

**Variables and units.** A, Lb, E\_subj (USD)

**Worked example.**

1. $900,000 − $500,000 − $0 = $400,000.00.

**Interpretation.** Compare to the family test (25% of commitment residential; 100% MF and commercial).

**Related rules.** CORE-BOR-14

**Common mistakes.**

- Counting the subject property's equity.
- Using stated, not documented, assets.

**Edge cases.** Negative NW → fails.

**Rounding and day count.** Round to the cent.

**Modules.** C6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $900,000; $500,000; $0 | $400,000.00 |
| 2 | $7,500,000; $2,300,000; $0 | $5,200,000.00 |
| 3 | $2,000,000; $1,200,000; $300,000 | $500,000.00 |

### F-CORE-27: Experience count and tier

**Purpose.** Counts qualifying projects to set the experience tier.

**Formula.** Count = completed projects in the last 36 months where ownership ≥ 20%; tier 0 / 1-4 / 5-9 / 10+

```latex
N = \sum_{p} \mathbf{1}[t_p \le 36\ \text{mo} \wedge own_p \ge 20\%]
```

**Variables and units.** t\_p = months since completion; own\_p = ownership share (%)

**Worked example.**

1. 3 sold + 1 refinanced = 4 (40-month sale and 10% stake excluded) → Tier 1.

**Interpretation.** Drives pricing (F-CORE-28) and exposure caps (CORE-CONC-01).

**Related rules.** CORE-BOR-15, CORE-BOR-16; family experience rules (MF-GEN-07, COM-GEN-15)

**Common mistakes.**

- Counting projects under 20% ownership.
- Counting projects outside the lookback.

**Edge cases.** Exactly 36 months → counts (inclusive; decided 19 Nov 2026). Exactly 20% → counts. A project counts once completed: sold, refinanced into a rental, or held and operated 12+ months (CORE-BOR-18). Exactly 12 months counts.

**Rounding and day count.** Integer count.

**Modules.** C6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 3 sold, 1 refi, 1 at 40 months, 1 at 10% | 4 → Tier 1 |
| 2 | 0 projects | 0 → Tier 0 |
| 3 | 11 qualifying | 11 → Tier 3 |

### F-CORE-28: Note rate (RTL grid)

**Purpose.** Builds the residential RTL note rate from the grid.

**Formula.** Rate = tier base + FICO adjuster + leverage adjuster + ground-up adjuster, bounded 8.500%-12.750%

```latex
r = \min(\max(b_{tier} + a_{FICO} + a_{lev} + a_{GU},\ 8.5\%),\ 12.75\%)
```

**Variables and units.** b\_tier (%); adjusters (%)

**Worked example.**

1. 10.750% + 0.500% + 0.250% + 0.000% = 11.500%.

**Interpretation.** Higher risk, higher rate, within the band.

**Related rules.** CORE-PRC-01, CORE-PRC-02, CORE-PRC-03 \[VERIFY: usury\]

**Common mistakes.**

- Applying the FICO adjuster to 700+ scores.
- Ignoring the 12.750% cap.

**Edge cases.** Tier 0 + all adjusters = 13.000% → capped at 12.750%.

**Rounding and day count.** Display three decimals.

**Modules.** C8

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Tier 1, FICO 690, near max, rehab | 11.500% |
| 2 | Tier 3, FICO 760, no adjusters | 9.500% |
| 3 | Tier 0, FICO 685, near max, ground-up | 12.750% (capped) |

### F-CORE-29: Aggregate sponsor exposure

**Purpose.** Total commitments to one sponsor, for concentration caps.

**Formula.** Exposure = new commitment + all open commitments to the sponsor and affiliates

```latex
E = C_{new} + \sum C_{open}
```

**Variables and units.** Commitments (USD); count of open loans

**Worked example.**

1. $340,000 + $250,000 + $350,000 = $940,000.00; 3 loans.

**Interpretation.** Compare to the tier cap in CORE-CONC-01.

**Related rules.** CORE-CONC-01, CORE-CONC-02

**Common mistakes.**

- Using outstanding balances instead of commitments.
- Missing affiliate entities.

**Edge cases.** Paid-off loans drop out.

**Rounding and day count.** Round to the cent.

**Modules.** C6, C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $340,000 + $250,000 + $350,000 | $940,000.00 |
| 2 | $3,520,000 + none | $3,520,000.00 (over Tier 1 cap) |
| 3 | $5,140,000 + none | $5,140,000.00 (over Tier 1 cap) |

### F-CORE-30: Bucket concentration

**Purpose.** Share of the book in one product, state or market.

**Formula.** Bucket % = commitments in the bucket ÷ total commitments for that base

```latex
B\% = \frac{C_{bucket}}{C_{base}}
```

**Variables and units.** C\_bucket, C\_base (USD)

**Worked example.**

1. $5,000,000 ground-up ÷ $25,000,000 residential = 20.0% (cap 25%).

**Interpretation.** A breached bucket takes no new loans without committee.

**Related rules.** CORE-CONC-03 to -07

**Common mistakes.**

- Using the wrong base (total book vs residential only).
- Measuring before adding the new loan.

**Edge cases.** Base 0 → undefined.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $5,000,000; $25,000,000 | 20.0% |
| 2 | $6,500,000 + new $340,000; $25,340,000 | 27.0% (breaches 25%) |
| 3 | $3,900,000; $26,000,000 (one MSA) | 15.0% |

### F-CORE-31: Default interest (SUGGESTED)

**Purpose.** Interest on a loan in default, at the default rate.

**Formula.** Default interest = balance × (note rate + 5.00%) ÷ 360 × days in default, capped by state usury

```latex
I_{def} = L \times \frac{r + 5\%}{360} \times d
```

**Variables and units.** L (USD); r (%); d = days in default (days)

**Worked example.**

1. $500,000 × 15.000% ÷ 360 × 30 = $6,250.00.

**Interpretation.** The extra charge over normal interest is L × 5% ÷ 360 × d.

**Related rules.** CORE-SVC-03, CORE-PRC-03 \[VERIFY: state usury\]

**Common mistakes.**

- Charging default interest from the missed payment date when the note says from notice.
- Ignoring the usury cap.

**Edge cases.** Usury cap below r + 5% → charge the cap. d = 0 → $0.

**Rounding and day count.** Actual/360; round to the cent.

**Modules.** C10, C12, C13

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 10.000%; 30 days | $6,250.00 |
| 2 | $3,520,000; 7.650%; 45 days | $55,660.00 |
| 3 | $340,000; 11.500%; 61 days | $9,505.83 |

### F-CORE-32: Payoff amount (SUGGESTED)

**Purpose.** Amount needed to repay the loan on a given date.

**Formula.** Payoff = principal + accrued interest (Actual/360 days since last paid-to date) + exit fee + unpaid fees

```latex
PO = L + L\frac{r}{360}d + Fee_{exit} + Fees
```

**Variables and units.** L (USD); r (%); d (days); fees (USD)

**Worked example.**

1. $500,000 + $500,000 × 10.000% ÷ 360 × 12 + $0 = $501,666.67.

**Interpretation.** What the title company wires to close out the loan.

**Related rules.** CORE-SVC-01; exit fees in MF-BR-14 and term sheets

**Common mistakes.**

- Counting the payoff day as an interest day (it is excluded; decided 19 Nov 2026).
- Forgetting the exit fee.

**Edge cases.** Payoff on a paid-to date → zero accrued interest.

**Rounding and day count.** Actual/360; round to the cent.

**Modules.** C12, C13

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 10.000%; 12 days; no fees | $501,666.67 |
| 2 | $3,520,000; 7.650%; 15 days; exit $0 | $3,531,220.00 |
| 3 | $5,140,000; 9.000%; 9 days; exit 0.50% | $5,177,265.00 |

### F-CORE-33: Prepaid (odd-days) interest at closing (SUGGESTED)

**Purpose.** Interest from funding to the end of the first period, collected at closing.

**Formula.** Prepaid interest = funded amount × rate ÷ 360 × days from funding date to period end (funding day counts)

```latex
I_{odd} = L_0 \times \frac{r}{360} \times d_{odd}
```

**Variables and units.** L\_0 = initial funding (USD); r (%); d\_odd (days)

**Worked example.**

1. $500,000 funded 20 Nov at 10.000%: 11 days → $1,527.78.

**Interpretation.** Lines the loan up with the first regular payment date.

**Related rules.** CORE-CLS-01

**Common mistakes.**

- Using the commitment instead of initial funding.
- Off-by-one on the day count.

**Edge cases.** Funding on the first day of a period → a full period, because the funding day counts (decided 19 Nov 2026).

**Rounding and day count.** Actual/360; round to the cent.

**Modules.** C11

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $500,000; 10.000%; 11 days | $1,527.78 |
| 2 | $2,860,000; 7.650%; 13 days | $7,900.75 |
| 3 | $4,340,000; 7.650%; 1 day | $922.25 |

### F-CORE-34: Insurance-to-value ratio (SUGGESTED)

**Purpose.** Checks hazard cover against replacement cost.

**Formula.** Ratio = hazard coverage limit ÷ replacement cost estimate

```latex
ITV = \frac{Coverage}{RC}
```

**Variables and units.** Coverage (USD); RC = replacement cost from the appraisal or insurer (USD)

**Worked example.**

1. $1,800,000 ÷ $2,000,000 = 90.0%: below 100%, fails.

**Interpretation.** Under 100% means a total loss is not fully covered.

**Related rules.** CORE-INS-01

**Common mistakes.**

- Comparing coverage to market value or loan amount instead of replacement cost.
- Ignoring a coinsurance clause that cuts the payout when cover is under a set percent.

**Edge cases.** RC = 0 → undefined. Builder's risk on rehab or construction is tested against completed value, including soft costs, not hard cost (CORE-INS-04).

**Rounding and day count.** Full precision; display one decimal.

**Modules.** C9

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $1,800,000; $2,000,000 | 90.0% |
| 2 | $6,000,000; $5,600,000 | 107.1% |
| 3 | $2,500,000; $2,500,000 | 100.0% |

### F-CORE-35: Monthly tax and insurance escrow (SUGGESTED)

**Purpose.** Monthly deposit to pay taxes and insurance when due.

**Formula.** Deposit = (annual taxes + annual insurance) ÷ 12. Cushion at closing = 2 × deposit (one-sixth of the annual total)

```latex
Esc = \frac{Tax + Ins}{12},\quad Cushion = 2 \times Esc
```

**Variables and units.** Tax, Ins (USD per year)

**Worked example.**

1. ($36,000 + $9,600) ÷ 12 = $3,800.00 a month.
2. Cushion = 2 × $3,800.00 = $7,600.00, collected at closing (CORE-INS-02).

**Interpretation.** Part of PITIA in DSCR tests. The cushion absorbs a tax or premium rise before the next escrow analysis.

**Related rules.** CORE-INS-02, MF-BR-13, CORE-INS-01; F-RES-08 (PITIA)

**Common mistakes.**

- Leaving out the 2-month cushion required by CORE-INS-02.
- Using last year's tax bill after a sale-triggered reassessment.

**Edge cases.** Annual premium due soon after closing → fund at closing.

**Rounding and day count.** Round to the cent.

**Modules.** C9, C11, C12

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $36,000; $9,600 | $3,800.00 a month; cushion $7,600.00 |
| 2 | $3,600; $1,440 | $420.00 a month; cushion $840.00 |
| 3 | $84,000; $26,500 | $9,208.33 a month; cushion $18,416.67 |

### F-CORE-36: Appraisal age (SUGGESTED)

**Purpose.** Days between the appraisal's effective date and closing.

**Formula.** Age = closing date − appraisal effective date (actual days)

```latex
Age = Date_{close} - Date_{eff}
```

**Variables and units.** Dates (days)

**Worked example.**

1. Effective 1 Aug 2026; closing 18 Nov 2026 → 109 days: passes 120.

**Interpretation.** Over 120 days needs a new appraisal or update.

**Related rules.** CORE-VAL-02

**Common mistakes.**

- Using the report date instead of the effective date.
- Measuring to the application date instead of the closing date.

**Edge cases.** Exactly 120 days → passes (no more than 120).

**Rounding and day count.** Actual calendar days.

**Modules.** C5, C11

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 1 Aug 2026 → 18 Nov 2026 | 109 days: pass |
| 2 | 21 Jul 2026 → 18 Nov 2026 | 120 days: pass |
| 3 | 15 Jul 2026 → 18 Nov 2026 | 126 days: fail |

### F-CORE-37: Coinsurance recovery (SUGGESTED)

**Purpose.** Shows what a property claim pays when cover is below the policy's coinsurance requirement.

**Formula.** Payment = (carried ÷ required) × loss − deductible, where required = coinsurance % × replacement cost. The ratio is capped at 1; payment is capped at the limit

```latex
Pay = \min\left(1, \frac{Did}{c \times RC}\right) \times Loss - Ded
```

**Variables and units.** Did = limit carried (USD); c = coinsurance percent; RC = replacement cost at the time of loss (USD); Loss (USD); Ded = deductible (USD)

**Worked example.**

1. Inputs: RC $5,200,000; 90% clause; carried $4,400,000; loss $500,000; deductible $25,000.
2. Required = 90% × $5,200,000 = $4,680,000. Ratio = $4,400,000 ÷ $4,680,000 = 0.940171.
3. Payment = 0.940171 × $500,000 − $25,000 = $445,085.47. The owner bears $54,914.53.

**Interpretation.** A shortfall cuts every partial claim, not just a total loss. That is why F-CORE-34 must reach 100%.

**Related rules.** CORE-INS-01; F-CORE-34

**Common mistakes.**

- Subtracting the deductible before applying the ratio.
- Testing against market value instead of replacement cost.
- Assuming no penalty because the loss is smaller than the limit.

**Edge cases.** Carried ≥ required → ratio 1, no penalty. Total loss → pays the limit. An agreed-value endorsement suspends the clause for its term.

**Rounding and day count.** Keep the ratio at full precision; round the payment to the cent.

**Modules.** C9

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Did $4,400,000; RC $5,200,000; 90%; loss $500,000; ded $25,000 | $445,085.47 |
| 2 | Did $1,800,000; RC $2,400,000; 90%; loss $300,000; ded $10,000 | $240,000.00 |
| 3 | Did $2,800,000; RC $4,000,000; 80%; loss $500,000; ded $25,000 | $412,500.00 |

### F-CORE-40: All-in annual cost screen (SUGGESTED)

**Purpose.** A quick screen of rate plus up-front charges against a state usury cap. Numbers F-CORE-38 and -39 are reserved for the C7 proposals.

**Formula.** AIC = note rate + (points % + other lender fees %) ÷ term in years

```latex
AIC = r + \frac{p + f}{T/12}
```

**Variables and units.** r = note rate (%); p = points (% of commitment); f = other lender fees (% of commitment); T = term (months)

**Worked example.**

1. Maple Run: 10.25% + 1.50% ÷ (12 ÷ 12) = 11.75%.

**Interpretation.** Compare with the state cap only when no usury exemption applies. It is a screen, not an APR; counsel decides how a state counts fees.

**Related rules.** CORE-PRC-03; State Law Table usury column \[VERIFY: each state's fee-inclusion rule\]

**Common mistakes.**

- Testing the rate before checking for an exemption.
- Leaving out lender fees other than points.

**Edge cases.** Short terms inflate AIC: 2 points over 6 months adds 4.00%. Third-party costs (title, appraisal) are left out.

**Rounding and day count.** Nominal annual; display two decimals.

**Modules.** C10

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 10.25%; 1.50 points; 12 months | 11.75% |
| 2 | 7.65%; 1.00 point; 24 months | 8.15% |
| 3 | 12.00%; 2.00 points; 6 months | 16.00% |

### F-CORE-41: Net funding wire (SUGGESTED)

**Purpose.** The amount the lender wires to the closing agent.

**Formula.** Wire = initial funding − points − lender fees − prepaid interest − lender-held escrows and reserves

```latex
W = L_0 - Pts - Fees - I_{odd} - Esc
```

**Variables and units.** L\_0 = initial funding (USD); Pts from F-CORE-06; I\_odd from F-CORE-33; Esc = escrow cushion (F-CORE-35), repair escrow and other reserves held by the lender (USD)

**Worked example.**

1. Maple Run: $240,000 − $5,100.00 − $0 − $1,161.67 − $0 = $233,738.33.

**Interpretation.** The closing agent adds the borrower's cash and pays the seller and costs. Sources must equal uses.

**Related rules.** CORE-CLS-03, -04; CORE-INS-02

**Common mistakes.**

- Wiring the full advance.
- Taking points on initial funding instead of the commitment.
- Netting a borrower-paid third-party cost, such as a rate cap paid by title.

**Edge cases.** Items paid outside closing are left out. A negative wire means the deal is mis-built: stop and recheck.

**Rounding and day count.** Round to the cent.

**Modules.** C11

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $240,000; $5,100; $0; $1,161.67; $0 | $233,738.33 |
| 2 | $4,340,000; $51,400; $0; $922.25; $68,666.67 | $4,219,011.08 |
| 3 | $2,860,000; $35,200; $0; $7,900.75; $0 | $2,816,899.25 |

### F-CORE-42: REO carrying value and charge-off (SUGGESTED)

**Purpose.** Book value of foreclosed property at title, and the loss recognised then.

**Formula.** Carrying value = min(recorded loan, fair value − cost to sell); charge-off = max(0, recorded loan − (fair value − cost to sell))

```latex
CV = \min(L,\ FV - CTS),\quad CO = \max(0,\ L - (FV - CTS))
```

**Variables and units.** L = recorded loan amount (USD); FV = fair value from a new appraisal (USD); CTS = estimated cost to sell (USD)

**Worked example.**

1. Birchwood: $3,400,000 − $102,000 = $3,298,000 carrying value; charge-off $3,520,000 − $3,298,000 = $222,000.00.

**Interpretation.** Mirrors bank accounting for foreclosed real estate. Later falls in value are written down; rises above cost are not booked.

**Related rules.** CORE-DEF-06; F-CORE-23

**Common mistakes.**

- Using gross value instead of value less cost to sell.
- Using an old appraisal.

**Edge cases.** FV − CTS above the loan → carry at the loan amount; the excess is a gain only when sold.

**Rounding and day count.** Round to the cent.

**Modules.** C13

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $3,520,000; $3,400,000; $102,000 | $3,298,000.00; $222,000.00 |
| 2 | $5,140,000; $5,000,000; $150,000 | $4,850,000.00; $290,000.00 |
| 3 | $1,000,000; $900,000; $45,000 | $855,000.00; $145,000.00 |

### F-CORE-43: Bucket headroom (SUGGESTED)

**Purpose.** The largest new commitment a concentration bucket can take before it breaches its cap.

**Formula.** Headroom = (cap × total commitments − bucket commitments) ÷ (1 − cap)

```latex
H = \frac{c \cdot T - B}{1 - c}
```

**Variables and units.** c = cap (%); T = total commitments for the base (USD); B = commitments in the bucket (USD)

**Worked example.**

1. Indiana, 25% cap: (25% × $120,000,000 − $28,500,000) ÷ 75% = $2,000,000.00.

**Interpretation.** A new loan adds to both the bucket and the base, so headroom is larger than cap × total − bucket.

**Related rules.** CORE-CONC-02 to -07; F-CORE-30

**Common mistakes.**

- Leaving the new loan out of the denominator.
- Using outstanding balances instead of commitments.

**Edge cases.** Negative result → the bucket is already over its cap; any new loan needs committee (CORE-CONC-07).

**Rounding and day count.** Round to the cent.

**Modules.** C14

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 25%; $120,000,000; $28,500,000 | $2,000,000.00 |
| 2 | 25%; $120,000,000; $26,000,000 | $5,333,333.33 |
| 3 | 15%; $120,000,000; $17,500,000 | $588,235.29 |

### F-CORE-44: Cash-on-cash return (SUGGESTED)

**Purpose.** The owner's annual pre-tax cash return on the cash put into the deal.

**Formula.** Cash-on-cash = (NOI − annual debt service) ÷ total cash invested

```latex
CoC = \frac{NOI - ADS}{E}
```

**Variables and units.** NOI (USD per year) from F-CORE-10; ADS (USD per year) from F-CORE-03; E = total cash invested by the owner (USD); C5 takes E = value − loan

**Worked example.**

1. Birchwood term loan (C5 worked example 5): NOI $480,000; value $6,000,000; loan $3,900,000; ADS $330,772.68.
2. Cash flow after debt service = $480,000 − $330,772.68 = $149,227.32.
3. Cash invested = $6,000,000 − $3,900,000 = $2,100,000.
4. Cash-on-cash = $149,227.32 ÷ $2,100,000 = 0.071061 = 7.11%.

**Interpretation.** A borrower's measure, not a credit test; the policy sets no minimum. Below the cap rate (F-CORE-13) means negative leverage: the loan constant (F-CORE-04) is above the cap rate.

**Related rules.** No policy limit. F-CORE-03, F-CORE-04, F-CORE-10, F-CORE-13

**Common mistakes.**

- Leaving debt service out of the numerator; that gives the unlevered cap rate.
- Dividing by the value or the price instead of the cash invested.
- Using one month's payment instead of annual debt service.

**Edge cases.** Cash flow below debt service → a negative return, shown with a minus sign. Cash invested zero or negative → undefined; do not report it.

**Rounding and day count.** Full precision; display two decimals.

**Modules.** C5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NOI $480,000; ADS $330,772.68; cash $2,100,000 | 7.11% |
| 2 | NOI $480,000; ADS $330,772.68; cash $1,918,181.82 (value at 8.25% cap) | 7.78% |
| 3 | NOI $300,000 (in place); ADS $330,772.68; cash $2,100,000 | −1.47% |

**Core library complete: 30 REQUIRED and 12 SUGGESTED formulas, 126 test cases.**

## Residential formulas (F-RES)

| ID | Name | Status | Main rules |
| --- | --- | --- | --- |
| F-RES-01 | Total project cost (TPC) | REQUIRED | RES-FF-03, RES-FF-06 |
| F-RES-02 | Loan-to-after-repair value (LTARV) | REQUIRED | RES-FF-04 |
| F-RES-03 | Loan-to-as-is value (LTAIV) | REQUIRED | RES-FF-01, CORE-VAL-01 |
| F-RES-04 | Loan-to-cost (flip) | REQUIRED | RES-FF-03 |
| F-RES-05 | Initial advance (purchase) | REQUIRED | RES-FF-01, -02 |
| F-RES-06 | Draw percent complete | REQUIRED | RES-FF-09, RES-FF-11, RES-GU-09 |
| F-RES-07 | Residential DSCR | REQUIRED | RES-DSCR-01, -02, RES-STR-05 |
| F-RES-08 | PITIA | REQUIRED | RES-DSCR-01, -07, -10 |
| F-RES-09 | Cash to close (flip purchase) | REQUIRED | CORE-BOR-11, -12, RES-FF-07 |
| F-RES-10 | Flip profit | REQUIRED | RES-FF-10 |
| F-RES-11 | Release price (portfolio) | REQUIRED | RES-PF-05 |
| F-RES-12 | Cash-out proceeds | REQUIRED | RES-DSCR-06, -08 |
| F-RES-13 | Fix-and-flip maximum loan | REQUIRED | RES-FF-01 to -04 |
| F-RES-14 | Portfolio DSCR | REQUIRED | RES-PF-03 |
| F-RES-15 | STR qualifying monthly rent | REQUIRED | RES-STR-04, -05 |
| F-RES-16 | Ground-up interest reserve | REQUIRED | RES-GU-06 |
| F-RES-17 | Maximum loan by DSCR (residential) | REQUIRED | RES-DSCR-02, -03 |
| F-RES-18 | Draw amount | SUGGESTED | RES-FF-09 |
| F-RES-19 | Flip profit margin | SUGGESTED | RES-FF-10 |
| F-RES-20 | Ground-up maximum loan | SUGGESTED | RES-GU-02, -03, -06 |
| F-RES-21 | Land advance | SUGGESTED | RES-GU-04 |
| F-RES-22 | Equity-first requirement | SUGGESTED | RES-GU-07 |
| F-RES-23 | Qualifying rent | SUGGESTED | RES-DSCR-01, -04 |
| F-RES-24 | Rental exit DSCR | SUGGESTED | RES-BR-04 |
| F-RES-25 | In-balance shortfall | SUGGESTED | CORE-SVC-05, RES-FF-09, MF-BR-10, COM-BR-05 |

### F-RES-01: Total project cost (TPC)

**Purpose.** All-in cost of a flip: purchase plus rehab budget.

**Formula.** TPC = purchase price + rehab budget (incl. contingency)

```latex
TPC = Price + Rehab
```

**Variables and units.** Price (USD); Rehab = budget incl. 10% contingency (USD)

**Worked example.**

1. $300,000 + $100,000 = $400,000.00.

**Interpretation.** The base for LTC (F-RES-04) and profit margin (F-RES-19).

**Related rules.** RES-FF-03 (LTC base), RES-FF-06 (10% contingency)

**Common mistakes.**

- Leaving the contingency out of the budget.
- Adding closing costs and points here; the course TPC excludes them (they sit in cash to close, F-RES-09).

**Edge cases.** Rehab 0 → a bridge with no rehab (RES-BR). Negative inputs invalid.

**Rounding and day count.** Round to the cent.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $300,000; $100,000 | $400,000.00 |
| 2 | $185,000; $62,500 | $247,500.00 |
| 3 | $420,000; $0 | $420,000.00 |

### F-RES-02: Loan-to-after-repair value (LTARV)

**Purpose.** Total loan against the value after the rehab is done.

**Formula.** LTARV = total commitment ÷ after-repair value

```latex
LTARV = \frac{C}{ARV}
```

**Variables and units.** C = initial advance + rehab holdback (USD); ARV (USD)

**Worked example.**

1. $340,000 ÷ $520,000 = 65.4%.

**Interpretation.** Checks the exit: the finished house must cover the loan with a cushion.

**Related rules.** RES-FF-04 (65% Tier 0; 70% Tier 1-3)

**Common mistakes.**

- Using the initial advance instead of the full commitment.
- Accepting an ARV without comparable sales of finished homes.

**Edge cases.** ARV 0 → undefined. ARV below as-is value → flag the appraisal.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $340,000; $520,000 | 65.4% |
| 2 | $320,000; $520,000 | 61.5% |
| 3 | $210,000; $300,000 | 70.0% |

### F-RES-03: Loan-to-as-is value (LTAIV)

**Purpose.** Day-one advance against current value.

**Formula.** LTAIV = initial advance ÷ as-is value

```latex
LTAIV = \frac{Adv_0}{V_{as\text{-}is}}
```

**Variables and units.** Adv\_0 = initial advance (USD); V\_as-is (USD)

**Worked example.**

1. Maple Run: as-is appraisal $310,000 is above the $300,000 price, so use $300,000 (F-CORE-14). $240,000 ÷ $300,000 = 80.0%.

**Interpretation.** Exposure if the borrower walks away before any work.

**Related rules.** RES-FF-01, CORE-VAL-01

**Common mistakes.**

- Including the rehab holdback in the numerator.
- Using ARV as the denominator.

**Edge cases.** As-is below price → use the lower (F-CORE-14).

**Rounding and day count.** Full precision; display one decimal.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $240,000; $310,000 | 77.4% |
| 2 | $148,000; $185,000 | 80.0% |
| 3 | $255,000; $300,000 | 85.0% |

### F-RES-04: Loan-to-cost (flip)

**Purpose.** Total commitment against total project cost.

**Formula.** LTC = (initial advance + rehab holdback) ÷ TPC

```latex
LTC = \frac{Adv_0 + HB}{TPC}
```

**Variables and units.** Adv\_0, HB = holdback (USD); TPC (F-RES-01)

**Worked example.**

1. ($240,000 + $100,000) ÷ $400,000 = 85.0%.

**Interpretation.** Borrower skin in the game; caps rise with experience.

**Related rules.** RES-FF-03 (75% / 80% / 85% / 85% by tier)

**Common mistakes.**

- Using TPC that excludes contingency while the holdback includes it.
- Leaving out the holdback; that gives LTAIV-style leverage, not LTC.

**Edge cases.** TPC 0 → undefined.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $240,000 + $100,000; $400,000 | 85.0% |
| 2 | $220,000 + $100,000; $400,000 | 80.0% |
| 3 | $123,125 + $62,500; $247,500 | 75.0% |

### F-RES-05: Initial advance (purchase)

**Purpose.** Day-one loan toward the purchase.

**Formula.** Advance = advance rate × min(price, as-is value)

```latex
Adv_0 = a \times \min(Price, V_{as\text{-}is})
```

**Variables and units.** a = tier advance rate (%); Price, V (USD)

**Worked example.**

1. 80% × min($300,000, $310,000) = $240,000.00.

**Interpretation.** Sets cash to close (F-RES-09).

**Related rules.** RES-FF-01, -02 (75% / 80% / 85% / 85%)

**Common mistakes.**

- Applying the rate to the higher of price and value.
- Forgetting that F-RES-13 may cut the advance further.

**Edge cases.** Advance may be reduced so the loan fits F-RES-13.

**Rounding and day count.** Round to the cent.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Tier 1; $300,000; $310,000 | $240,000.00 |
| 2 | Tier 0; $185,000; $180,000 | $135,000.00 |
| 3 | Tier 2; $300,000; $295,000 | $250,750.00 |

### F-RES-06: Draw percent complete

**Purpose.** Share of the rehab budget verified as done.

**Formula.** % complete = inspector-verified work in place ÷ rehab budget

```latex
PC = \frac{W_{verified}}{Rehab}
```

**Variables and units.** W\_verified (USD); Rehab (USD)

**Worked example.**

1. $60,000 ÷ $100,000 = 60.0%.

**Interpretation.** Drives draws (F-RES-18) and extension tests (75% complete).

**Related rules.** RES-FF-09 (draws after inspection), RES-FF-11 and RES-GU-09 (75% for extensions)

**Common mistakes.**

- Using the borrower's invoices instead of the inspection.
- Counting materials on site but not installed (not allowed; decided 19 Nov 2026).

**Edge cases.** Over 100% → budget overrun; borrower funds the excess.

**Rounding and day count.** Display one decimal.

**Modules.** R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $60,000; $100,000 | 60.0% |
| 2 | $46,875; $62,500 | 75.0% |
| 3 | $105,000; $100,000 | 105.0% (overrun) |

### F-RES-07: Residential DSCR

**Purpose.** Rental coverage on 1-4 unit and 5-10 unit DSCR loans.

**Formula.** DSCR = qualifying monthly rent ÷ monthly PITIA (amortizing P&I)

```latex
DSCR_{res} = \frac{Rent_q}{PITIA}
```

**Variables and units.** Rent\_q = F-RES-23 (USD per month); PITIA = F-RES-08 (USD per month)

**Worked example.**

1. $2,300 ÷ $1,800.60 = 1.28x.

**Interpretation.** Uses gross rent, not NOI (unlike F-CORE-11).

**Related rules.** RES-DSCR-01, -02 (1.00x; 1.10x cash-out), RES-STR-05 (1.15x); also small multifamily DSCR (5-10 units)

**Common mistakes.**

- Using the IO payment on an IO loan; policy qualifies on amortizing PITIA (RES-DSCR-07).
- Using market rent when the lease is lower.

**Edge cases.** Vacant property → market rent with LTV cut (RES-DSCR-04). PITIA 0 → undefined.

**Rounding and day count.** Full precision; display two decimals with x.

**Modules.** R4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $2,300; $1,800.60 | 1.28x |
| 2 | $2,250; $2,262.22 | 0.9946 → displays 0.99x; fails 1.00x |
| 3 | $3,075; $2,500 | 1.23x |

### F-RES-08: PITIA

**Purpose.** Monthly housing cost for DSCR.

**Formula.** PITIA = principal and interest + taxes + insurance + HOA (monthly)

```latex
PITIA = P\&I + T + I + HOA
```

**Variables and units.** All USD per month; P&I from F-CORE-02 on 30-year amortization

**Worked example.**

1. $1,330.60 + $300 + $120 + $50 = $1,800.60.

**Interpretation.** The denominator of F-RES-07.

**Related rules.** RES-DSCR-01, -07, -10

**Common mistakes.**

- Leaving out flood insurance or HOA dues.
- Using the IO payment.

**Edge cases.** No HOA → $0. Escrow cushion is not part of PITIA.

**Rounding and day count.** Round P&I to the cent, then add.

**Modules.** R4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $200,000 at 7.000%; $300; $120; $50 | $1,800.60 |
| 2 | $225,000 at 7.750%; $350; $120; $0 | $2,081.93 |
| 3 | $300,000 at 7.500%; $400; $150; $75 | $2,722.64 |

### F-RES-09: Cash to close (flip purchase)

**Purpose.** Borrower cash needed at closing.

**Formula.** Cash to close = price + closing costs + points − initial advance

```latex
CTC = Price + CC + Pts - Adv_0
```

**Variables and units.** All USD

**Worked example.**

1. $300,000 + $9,000 + $6,800 − $240,000 = $75,800.00.

**Interpretation.** Must be sourced and seasoned; subtracted in F-CORE-24.

**Related rules.** CORE-BOR-11, -12; RES-FF-07 (Tier 0 interest escrow adds to cash to close)

**Common mistakes.**

- Leaving out points (F-CORE-06).
- Forgetting the Tier 0 three-month interest escrow (RES-FF-07).

**Edge cases.** Negative → cash back at closing: never allowed on a purchase (decided 19 Nov 2026).

**Rounding and day count.** Round to the cent.

**Modules.** R2, R6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $300,000; $9,000; $6,800; $240,000 | $75,800.00 |
| 2 | $185,000; $5,500; $4,640.63; $123,125 | $72,015.63 |
| 3 | $400,000; $12,000; $8,500; $320,000 | $100,500.00 |

### F-RES-10: Flip profit

**Purpose.** Projected borrower profit on sale.

**Formula.** Profit = ARV − selling costs − price − rehab − closing − points − interest

```latex
\Pi = ARV - SC - Price - Rehab - CC - Pts - Int
```

**Variables and units.** All USD; SC usually 6% of ARV

**Worked example.**

1. $520,000 − $31,200 − $300,000 − $100,000 − $9,000 − $6,800 − $18,700 = $54,300.00.

**Interpretation.** The borrower's cushion; too thin and the exit fails.

**Related rules.** RES-FF-10 (profit ≥ 10% of TPC, F-RES-19)

**Common mistakes.**

- Leaving out carry interest.
- Using list price instead of appraised ARV.

**Edge cases.** Negative profit → decline.

**Rounding and day count.** Round to the cent.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Bible flip | $54,300.00 |
| 2 | ARV $300,000; SC 6%; $185,000; $62,500; $5,500; $4,640.63; $13,000 | $11,359.37 |
| 3 | ARV $480,000; SC 6%; $320,000; $110,000; $9,000; $8,500; $22,000 | −$18,300.00 |

### F-RES-11: Release price (portfolio)

**Purpose.** Payment needed to release one property from a blanket loan.

**Formula.** Release price = allocated loan amount × release premium

```latex
RP = ALA \times p
```

**Variables and units.** ALA (USD); p = premium (115%)

**Worked example.**

1. $150,000 × 115% = $172,500.00.

**Interpretation.** Protects the remaining collateral pool.

**Related rules.** RES-PF-05

**Common mistakes.**

- Using sale price instead of allocated loan amount.
- Skipping the re-test of the remaining pool (F-RES-14).

**Edge cases.** Release that breaks RES-PF-02 or -03 → refuse or require paydown.

**Rounding and day count.** Round to the cent.

**Modules.** R5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $150,000; 115% | $172,500.00 |
| 2 | $212,400; 115% | $244,260.00 |
| 3 | $98,000; 115% | $112,700.00 |

### F-RES-12: Cash-out proceeds

**Purpose.** Net cash to the borrower on a refinance.

**Formula.** Cash-out = new loan − payoff − closing costs

```latex
CO = L_{new} - Payoff - CC
```

**Variables and units.** All USD

**Worked example.**

1. $260,000 − $200,000 − $7,000 = $53,000.00.

**Interpretation.** Tested against the cash-out cap.

**Related rules.** RES-DSCR-06 ($500,000 cap), RES-DSCR-08 (cash-out does not count as reserves)

**Common mistakes.**

- Counting cash-out as reserves.
- Ignoring the payoff's accrued interest (F-CORE-32).

**Edge cases.** Negative → borrower brings cash: a rate-term refinance.

**Rounding and day count.** Round to the cent.

**Modules.** R4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $260,000; $200,000; $7,000 | $53,000.00 |
| 2 | $900,000; $350,000; $14,000 | $536,000.00 (over $500,000 cap) |
| 3 | $180,000; $185,000; $4,000 | −$9,000.00 |

### F-RES-13: Fix-and-flip maximum loan

**Purpose.** Largest flip loan under all three tests.

**Formula.** Max = min(LTC cap × TPC, LTARV cap × ARV, purchase cap × min(price, as-is) + rehab)

```latex
L = \min(c_{LTC} TPC,\ c_{ARV} ARV,\ c_{P}\min(P,V) + R)
```

**Variables and units.** Caps by tier (RES-FF-01, -03, -04); all amounts USD

**Worked example.**

1. Tier 1: min($320,000; $364,000; $340,000) = $320,000.00 (LTC binds).

**Interpretation.** Then initial advance = max loan − rehab holdback.

**Related rules.** RES-FF-01, -02, -03, -04

**Common mistakes.**

- Skipping the purchase test.
- Applying the Tier 2 caps to a Tier 1 borrower.

**Edge cases.** Rehab 0 → product is RES-BR, not RES-FF.

**Rounding and day count.** Round to the cent; then down to policy increments.

**Modules.** R2, R6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Tier 1 Bible flip | $320,000.00 |
| 2 | Tier 2 Bible flip | $340,000.00 |
| 3 | Tier 0: TPC $247,500; ARV $300,000; price $185,000; as-is $180,000; rehab $62,500 | $185,625.00 |

### F-RES-14: Portfolio DSCR

**Purpose.** Coverage across all properties in a blanket loan.

**Formula.** Portfolio DSCR = Σ qualifying rent ÷ Σ PITIA

```latex
DSCR_{pf} = \frac{\sum Rent_q}{\sum PITIA}
```

**Variables and units.** Sums across properties (USD per month)

**Worked example.**

1. $13,800 ÷ $11,200 = 1.23x.

**Interpretation.** Pool test; each house must also be ≥ 0.80x.

**Related rules.** RES-PF-03 (1.20x pool; 0.80x per property)

**Common mistakes.**

- Averaging property DSCRs instead of summing rent and PITIA.
- Skipping the 0.80x single-property floor.

**Edge cases.** A release changes both sums; re-test.

**Rounding and day count.** Full precision; two decimals with x.

**Modules.** R5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $13,800; $11,200 | 1.23x |
| 2 | $12,100; $9,600 | 1.26x |
| 3 | $9,000; $7,560 | 1.1905 → 1.19x: fails 1.20x |

### F-RES-15: STR qualifying monthly rent

**Purpose.** Converts short-term rental revenue into qualifying rent.

**Formula.** Rent\_q = 75% × min(AirDNA projection, 12-month platform revenue) ÷ 12

```latex
Rent_{STR} = \frac{0.75 \times \min(P, H)}{12}
```

**Variables and units.** P = projection (USD per year); H = trailing history (USD per year)

**Worked example.**

1. 75% × $49,200 ÷ 12 = $3,075.00.

**Interpretation.** Feeds F-RES-07 at a 1.15x minimum.

**Related rules.** RES-STR-04, -05

**Common mistakes.**

- Using gross bookings before platform fees.
- Using the higher of the two sources.

**Edge cases.** No history → projection only.

**Rounding and day count.** Round to the cent.

**Modules.** R5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $54,000; $49,200 | $3,075.00 |
| 2 | $60,000; none | $3,750.00 |
| 3 | $41,000; $46,500 | $2,562.50 |

### F-RES-16: Ground-up interest reserve

**Purpose.** Interest reserve for a construction draw schedule.

**Formula.** Reserve = commitment × rate ÷ 12 × months × 60% average outstanding

```latex
IR_{GU} = C \times \frac{r}{12} \times m \times 0.60
```

**Variables and units.** C (USD); r (%); m = term (months)

**Worked example.**

1. $600,000 × 11.50% ÷ 12 × 18 × 0.60 = $62,100.00.

**Interpretation.** Counted inside TPC (RES-GU-06).

**Related rules.** RES-GU-06; D-MF-11 (60%)

**Common mistakes.**

- Using 50% average outstanding (superseded).
- Leaving the reserve out of TPC.

**Edge cases.** Front-loaded draws → use the higher of 60% and the draw schedule's average outstanding (decided 19 Nov 2026).

**Rounding and day count.** Underwriting estimate on nominal months; billing later accrues Actual/360. Round to the cent.

**Modules.** R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $600,000; 11.500%; 18 months | $62,100.00 |
| 2 | $450,000; 12.250%; 12 months | $33,075.00 |
| 3 | $800,000; 11.250%; 18 months | $81,000.00 |

### F-RES-17: Maximum loan by DSCR (residential)

**Purpose.** Largest loan whose PITIA meets the minimum DSCR.

**Formula.** Max loan = (rent ÷ DSCR min − taxes, insurance, HOA) ÷ monthly P&I factor

```latex
L = \frac{Rent_q / DSCR_{min} - TIA}{f_{P\&I}}
```

**Variables and units.** TIA (USD per month); f = monthly P&I per dollar (30-year)

**Worked example.**

1. ($2,250 ÷ 1.00 − $470) ÷ 0.0071641 = $248,460 (7.750%).

**Interpretation.** Compare with the LTV limit; the lower binds (F-CORE-19).

**Related rules.** RES-DSCR-02, -03

**Common mistakes.**

- Forgetting to subtract TIA.
- Using an IO factor.

**Edge cases.** Rent ÷ DSCR ≤ TIA → $0.

**Rounding and day count.** Full precision; round down to policy increments.

**Modules.** R4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $2,250; 1.00x; $470; 7.750% | $248,460.30 |
| 2 | $2,250; 1.10x; $470; 7.750% | $219,908.94 |
| 3 | $3,075; 1.15x; $550; 7.500% | $303,757.00 |

### F-RES-18: Draw amount (SUGGESTED)

**Purpose.** Holdback released on a draw request.

**Formula.** Draw = min(% complete × holdback, 90% of holdback until completion) − prior draws

```latex
D = \min(PC \cdot HB,\ 0.90\,HB) - D_{prior}
```

**Variables and units.** PC (F-RES-06); HB = rehab holdback (USD); D\_prior (USD)

**Worked example.**

1. min(60% × $100,000, $90,000) − $25,000 = $35,000.00.

**Interpretation.** Keeps 10% back until the job is finished.

**Related rules.** RES-FF-09 (inspection; final 10% at completion)

**Common mistakes.**

- Releasing the final 10% before the completion inspection.
- Paying against invoices, not verified work.

**Edge cases.** At 100% complete the final 10% is released. Result below 0 → $0.

**Rounding and day count.** Round to the cent.

**Modules.** R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 60%; $100,000; prior $25,000 | $35,000.00 |
| 2 | 95%; $100,000; prior $60,000 | $30,000.00 |
| 3 | 100%; $100,000; prior $90,000 | $10,000.00 |

### F-RES-19: Flip profit margin (SUGGESTED)

**Purpose.** Profit as a share of total project cost.

**Formula.** Margin = flip profit (F-RES-10) ÷ TPC

```latex
PM = \frac{\Pi}{TPC}
```

**Variables and units.** Π, TPC (USD)

**Worked example.**

1. $54,300 ÷ $400,000 = 13.6%.

**Interpretation.** Exit test: at least 10%.

**Related rules.** RES-FF-10

**Common mistakes.**

- Dividing by ARV.
- Comparing a rounded 9.96% as 10.0% (full precision fails it).

**Edge cases.** Negative profit → negative margin, fails.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** R2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $54,300; $400,000 | 13.6% |
| 2 | $11,359.37; $247,500 | 4.6%: fails 10% |
| 3 | $39,900; $400,000 | 9.975% → shows 10.0% but FAILS 10% |

### F-RES-20: Ground-up maximum loan (SUGGESTED)

**Purpose.** Largest construction loan under LTC and as-completed value.

**Formula.** Max = min(LTC cap × TPC incl. reserve, 70% × as-completed value)

```latex
L_{GU} = \min(c_{LTC}\,TPC,\ 0.70\,V_{AC})
```

**Variables and units.** c\_LTC = 80% (2-4 builds) or 85% (5+); TPC, V\_AC (USD)

**Worked example.**

1. min(80% × $700,000, 70% × $850,000) = min($560,000, $595,000) = $560,000.00.

**Interpretation.** Borrower funds the rest, equity first (F-RES-22).

**Related rules.** RES-GU-02, RES-GU-03, RES-GU-06

**Common mistakes.**

- Leaving the interest reserve out of TPC.
- Using the 85% cap for a 3-build sponsor.

**Edge cases.** Under 2 builds → ineligible except as a committee exception (RES-GU-01).

**Rounding and day count.** Round down to policy increments.

**Modules.** R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 3 builds; TPC $700,000; V\_AC $850,000 | $560,000.00 |
| 2 | 6 builds; TPC $700,000; V\_AC $850,000 | $595,000.00 |
| 3 | 2 builds; TPC $900,000; V\_AC $980,000 | $686,000.00 |

### F-RES-21: Land advance (SUGGESTED)

**Purpose.** Part of the ground-up loan that funds the lot.

**Formula.** Land advance = 65% (permitted) or 50% (unpermitted) × min(land value, price)

```latex
A_{land} = a \times \min(V_{land}, P_{land})
```

**Variables and units.** a = 65% or 50%; V\_land, P\_land (USD)

**Worked example.**

1. 65% × min($150,000, $140,000) = $91,000.00.

**Interpretation.** No construction draw until permits are issued.

**Related rules.** RES-GU-04

**Common mistakes.**

- Using the higher of value and price.
- Using 65% before permits are in hand.

**Edge cases.** Land owned free and clear → its equity counts toward the 15% (F-RES-22), at the lower of cost or appraised value (decided 19 Nov 2026).

**Rounding and day count.** Round to the cent.

**Modules.** R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Permitted; $150,000; $140,000 | $91,000.00 |
| 2 | Unpermitted; $150,000; $140,000 | $70,000.00 |
| 3 | Permitted; $95,000; $110,000 | $61,750.00 |

### F-RES-22: Equity-first requirement (SUGGESTED)

**Purpose.** Borrower equity that must be spent or escrowed before draws.

**Formula.** Required equity = max(15% × TPC, TPC − loan)

```latex
E = \max(0.15\,TPC,\ TPC - L)
```

**Variables and units.** TPC, L (USD)

**Worked example.**

1. max(15% × $700,000, $700,000 − $560,000) = max($105,000, $140,000) = $140,000.00.

**Interpretation.** Lender money goes in last.

**Related rules.** RES-GU-07

**Common mistakes.**

- Counting soft costs paid before application without receipts.
- Allowing draws before equity is in.

**Edge cases.** Loan at 85% LTC → equity is exactly 15%.

**Rounding and day count.** Round to the cent.

**Modules.** R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | TPC $700,000; L $560,000 | $140,000.00 |
| 2 | TPC $700,000; L $595,000 | $105,000.00 |
| 3 | TPC $900,000; L $686,000 | $214,000.00 |

### F-RES-23: Qualifying rent (SUGGESTED)

**Purpose.** Monthly rent used in residential DSCR.

**Formula.** Rent\_q = min(in-place lease rent, appraiser's market rent); vacant → market rent

```latex
Rent_q = \min(Rent_{lease},\ Rent_{mkt})
```

**Variables and units.** USD per month

**Worked example.**

1. min($2,400 lease, $2,300 market) = $2,300.00.

**Interpretation.** Conservative: no credit for above-market leases.

**Related rules.** RES-DSCR-01, -04

**Common mistakes.**

- Using the higher lease rent.
- Using a lease under 12 months without checking market rent.

**Edge cases.** Vacant refinance → market rent and max 70% LTV (RES-DSCR-04).

**Rounding and day count.** Round to the cent.

**Modules.** R4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $2,400; $2,300 | $2,300.00 |
| 2 | $2,150; $2,300 | $2,150.00 |
| 3 | vacant; $2,250 | $2,250.00 |

### F-RES-24: Rental exit DSCR (SUGGESTED)

**Purpose.** Tests whether a bridge loan can refinance into a DSCR loan.

**Formula.** Exit DSCR = projected rent ÷ PITIA at (current DSCR rate + 0.50%)

```latex
DSCR_{exit} = \frac{Rent_q}{L \cdot f(r_{DSCR}+0.5\%) + TIA}
```

**Variables and units.** L = bridge payoff (USD); f = monthly P&I factor; TIA (USD per month)

**Worked example.**

1. $2,250 ÷ ($225,000 × f(8.250%) + $470) = 1.04x.

**Interpretation.** At least 1.10x for the rental exit.

**Related rules.** RES-BR-04

**Common mistakes.**

- Testing at today's rate without the 0.50% buffer.
- Using the bridge's IO payment.

**Edge cases.** Below 1.10x → paydown or decline.

**Rounding and day count.** Full precision; two decimals with x.

**Modules.** R2, R4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $2,250; $225,000; 7.750% + 0.50%; $470 | 1.04x: fails 1.10x |
| 2 | $2,650; $225,000; 7.750% + 0.50%; $470 | 1.23x |
| 3 | $3,100; $300,000; 7.500% + 0.50%; $550 | 1.13x |

### F-RES-25: In-balance shortfall (SUGGESTED)

**Purpose.** Cash the borrower must deposit before a draw when the remaining holdback cannot finish the job.

**Formula.** Shortfall = max(0, cost to complete − undrawn holdback)

```latex
S = \max(0,\ CTC - (HB - D_{prior}))
```

**Variables and units.** CTC = unpaid budget cost, including work in place not yet drawn and revised line items (USD); HB = holdback (USD); D\_prior = draws paid (USD)

**Worked example.**

1. Maple Run month 7: max(0, $25,000 − ($100,000 − $75,000)) = $0.00. In balance after the $8,000 roof overrun is moved to contingency.

**Interpretation.** A positive result is paid in by the borrower before the next draw (CORE-SVC-05). Applies to rehab, capex and TI/LC holdbacks in every family.

**Related rules.** CORE-SVC-05; RES-FF-09; MF-BR-10; COM-BR-05

**Common mistakes.**

- Leaving out work in place that has not yet been drawn.
- Counting unused contingency twice.

**Edge cases.** An overrun inside contingency gives $0 after a written reallocation.

**Rounding and day count.** Round to the cent.

**Modules.** C12, R3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $25,000; $100,000; $75,000 | $0.00 |
| 2 | $28,000; $100,000; $75,000 | $3,000.00 |
| 3 | $800,000; $800,000; $0 | $0.00 |

**Residential library complete: 17 REQUIRED and 8 SUGGESTED formulas, 75 test cases.**

## Multifamily formulas (F-MF)

The 5-10 unit DSCR loan (MF-DSCR) uses the Residential formula F-RES-07 (gross rent ÷ PITIA). Every other multifamily test uses NCF (F-MF-09).

| ID | Name | Status | Main rules |
| --- | --- | --- | --- |
| F-MF-01 | Physical occupancy | REQUIRED | MF-BR-01 |
| F-MF-02 | Economic occupancy | REQUIRED | MF-GEN-05 |
| F-MF-03 | Loss-to-lease | REQUIRED | MF-GEN-05 |
| F-MF-04 | Expense ratio | REQUIRED | MF-GEN-06 |
| F-MF-05 | Expense per unit | REQUIRED | MF-GEN-06 |
| F-MF-06 | Replacement reserves | REQUIRED | MF-GEN-06 |
| F-MF-07 | Loan per unit | REQUIRED | MF-GEN-03 |
| F-MF-08 | Return on cost | REQUIRED | MF-BR-01 |
| F-MF-09 | Net cash flow (NCF) | REQUIRED | MF-GEN-05, MF-GEN-06, MF-GEN-11 |
| F-MF-10 | Multifamily DSCR (amortizing) | REQUIRED | MF-TRM-02 |
| F-MF-11 | Debt yield on NCF | REQUIRED | MF-BR-05, MF-BR-06, MF-BR-11, MF-SB-03, MF-TRM-04, MF-LU-03, MF-CON-02 |
| F-MF-12 | In-place interest coverage (bridge) | REQUIRED | MF-BR-07, MF-BR-09, MF-SB-03 |
| F-MF-13 | Value-add bridge maximum loan | REQUIRED | MF-BR-02, MF-BR-03, MF-BR-04, MF-BR-05, MF-BR-06 |
| F-MF-14 | Term loan maximum | REQUIRED | MF-TRM-02, MF-TRM-03, MF-TRM-04, MF-TRM-08 |
| F-MF-15 | Construction interest reserve | REQUIRED | MF-CON-05 |
| F-MF-16 | Combined leverage | REQUIRED | MF-MEZ-02 |
| F-MF-17 | Underwritten in-place rent | SUGGESTED | MF-GEN-05 |
| F-MF-18 | Underwritten vacancy rate | SUGGESTED | MF-GEN-05 |
| F-MF-19 | Rent roll to deposits variance | SUGGESTED | MF-GEN-04 |
| F-MF-20 | Bridge exit take-out test | SUGGESTED | MF-BR-08, MF-SB-04 |
| F-MF-21 | Interest shortfall reserve | SUGGESTED | MF-BR-07 |
| F-MF-22 | Maximum rate cap strike | SUGGESTED | MF-BR-09 |
| F-MF-23 | Repair escrow | SUGGESTED | MF-BR-13 |
| F-MF-24 | Bridge note rate | SUGGESTED | MF-BR-14 |
| F-MF-25 | Term loan note rate | SUGGESTED | MF-TRM-08 |
| F-MF-26 | Value per unit | SUGGESTED | MF-GEN-03 |
| F-MF-27 | Combined DSCR | SUGGESTED | MF-MEZ-02, MF-MEZ-03 |
| F-MF-28 | Residential income share | SUGGESTED | MF-GEN-01 |

### F-MF-01: Physical occupancy

**Purpose.** Share of units with a tenant in place on the rent roll date.

**Formula.** Physical occupancy = occupied units ÷ total units

```latex
Occ_{phys} = \frac{U_{occ}}{U_{total}}
```

**Variables and units.** U\_occ = occupied units (count); U\_total = all units, including down and model units (count)

**Worked example.**

1. Cedar Court rent roll: 46 occupied of 50 units.
2. 46 ÷ 50 = 0.92 = 92.0%.

**Interpretation.** Entry and stability gate for most multifamily products: 75% for value-add bridge, 90% for stabilized bridge and term, 50% for lease-up.

**Related rules.** MF-BR-01 (75%); MF-SB-01 and MF-TRM-01 (90% for 3 months); MF-LU-01 (50%); MF-DSCR-01 (at most 2 vacant)

**Common mistakes.**

- Dropping down or model units from the denominator, which overstates occupancy.
- Counting signed leases with future move-in dates as occupied (that is leased, not occupied).
- Testing one month when the rule needs 3 months in a row.

**Edge cases.** Total units 0 → undefined. 100% vacancy → 0.0%. Units occupied part of a month count as occupied on the rent roll date only.

**Rounding and day count.** Full precision for tests; display one decimal.

**Modules.** M2, M3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 46 occupied; 50 units | 92.0% |
| 2 | 0 occupied; 24 units | 0.0% (fails every entry test) |
| 3 | 38 occupied; 40 units | 95.0% |

### F-MF-02: Economic occupancy

**Purpose.** Share of gross potential rent actually collected.

**Formula.** Economic occupancy = rent collected ÷ GPR

```latex
Occ_{econ} = \frac{Collections}{GPR}
```

**Variables and units.** Collections = rent received over the period (USD); GPR = F-CORE-07 for the same period (USD)

**Worked example.**

1. Cedar Court: collections $702,000; GPR $780,000.
2. $702,000 ÷ $780,000 = 0.90 = 90.0%.

**Interpretation.** The gap to physical occupancy shows concessions, bad debt and loss-to-lease. A wide gap means the rent roll overstates income.

**Related rules.** MF-GEN-05 (vacancy at the greater of actual, market or 5%)

**Common mistakes.**

- Using a different period for collections and GPR.
- Including other income (RUBS, fees) in collections.
- Treating physical occupancy as if it were economic occupancy.

**Edge cases.** GPR 0 → undefined. 100% vacancy → 0.0%. Partial year: annualize both figures over the same months, or compare like months only.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $702,000; $780,000 | 90.0% |
| 2 | $0; $360,000 | 0.0% |
| 3 | $1,104,000; $1,200,000 | 92.0% |

### F-MF-03: Loss-to-lease

**Purpose.** Gap between market rent and in-place lease rent, as a share of market.

**Formula.** Loss-to-lease = (market GPR − in-place rent) ÷ market GPR

```latex
LTL = \frac{GPR_{mkt} - Rent_{inplace}}{GPR_{mkt}}
```

**Variables and units.** GPR\_mkt = all units at market rent (USD per year); Rent\_inplace = all units at current lease rent, vacant units at market (USD per year)

**Worked example.**

1. Cedar Court: market GPR $780,000; in-place $741,000.
2. ($780,000 − $741,000) ÷ $780,000 = $39,000 ÷ $780,000 = 5.0%.

**Interpretation.** Shows how much rent a value-add plan can capture by re-leasing. It is upside, never underwritten day-one income.

**Related rules.** MF-GEN-05 (underwrite in-place rents); MF-BR-08 (stabilized figures for the exit only)

**Common mistakes.**

- Underwriting market rent instead of in-place rent.
- Leaving vacant units out of in-place rent, which mixes vacancy into loss-to-lease.

**Edge cases.** Negative result = gain-to-lease (in-place above market): a warning that rents may fall at renewal. Market GPR 0 → undefined.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M2, M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $780,000; $741,000 | 5.0% |
| 2 | $600,000; $618,000 | −3.0% (gain-to-lease) |
| 3 | $960,000; $921,600 | 4.0% |

### F-MF-04: Expense ratio

**Purpose.** Operating expenses as a share of EGI.

**Formula.** Expense ratio = OpEx ÷ EGI

```latex
ER = \frac{OpEx}{EGI}
```

**Variables and units.** OpEx = underwritten operating expenses, before reserves (USD per year); EGI = F-CORE-09 (USD per year)

**Worked example.**

1. Cedar Court: OpEx $310,000; EGI $720,000.
2. $310,000 ÷ $720,000 = 0.430556 = 43.1%.

**Interpretation.** A sanity check on the T-12. A ratio far below similar properties suggests missing expenses.

**Related rules.** MF-GEN-06 (greater of T-12 and appraiser; management at least 3% of EGI)

**Common mistakes.**

- Including replacement reserves or debt service in OpEx.
- Comparing ratios across properties where tenants pay different utilities.

**Edge cases.** EGI 0 (100% vacancy) → undefined; report OpEx per unit (F-MF-05) instead. Ratio above 100% means negative NOI.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $310,000; $720,000 | 43.1% |
| 2 | $51,300; $114,000 | 45.0% |
| 3 | $420,000; $900,000 | 46.7% |

### F-MF-05: Expense per unit

**Purpose.** Annual operating expenses per apartment unit.

**Formula.** Expense per unit = OpEx ÷ units

```latex
OpEx_{unit} = \frac{OpEx}{U_{total}}
```

**Variables and units.** OpEx (USD per year); U\_total (count)

**Worked example.**

1. Cedar Court: $310,000 ÷ 50 = $6,200.00 per unit per year.

**Interpretation.** Compared with the appraiser's survey of similar buildings. Unlike the expense ratio, it still works when income is low.

**Related rules.** MF-GEN-06

**Common mistakes.**

- Dividing by occupied units instead of total units.
- Mixing a partial-year T-12 with a full-year comparison.

**Edge cases.** Units 0 → undefined. 100% vacancy still gives a valid result. Partial year: annualize OpEx first, and watch seasonal items such as heating.

**Rounding and day count.** Round to the cent.

**Modules.** M2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $310,000; 50 units | $6,200.00 |
| 2 | $51,300; 8 units | $6,412.50 |
| 3 | $420,000; 72 units | $5,833.33 |

### F-MF-06: Replacement reserves

**Purpose.** Annual allowance for roofs, HVAC and other capital items, deducted before sizing.

**Formula.** Reserves = units × $300 per unit per year

```latex
Res = U_{total} \times 300
```

**Variables and units.** U\_total (count); 300 = policy reserve (USD per unit per year)

**Worked example.**

1. Cedar Court: 50 × $300 = $15,000.00 per year.
2. Monthly escrow: $15,000 ÷ 12 = $1,250.00.

**Interpretation.** Reserves turn NOI into NCF (F-MF-09). They are also collected monthly as an escrow.

**Related rules.** MF-GEN-06 ($300 per unit); MF-BR-13 (escrow)

**Common mistakes.**

- Using a lower reserve because the T-12 shows little capital spending.
- Deducting reserves twice: once inside OpEx and again in NCF.

**Edge cases.** An appraiser or property condition report above $300 per unit governs (use the greater). Partial year: escrow by month.

**Rounding and day count.** Round to the cent.

**Modules.** M3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 50 units | $15,000.00 |
| 2 | 8 units | $2,400.00 |
| 3 | 72 units | $21,600.00 |

### F-MF-07: Loan per unit

**Purpose.** Loan amount divided by unit count; a quick leverage check.

**Formula.** Loan per unit = loan ÷ units

```latex
L_{unit} = \frac{L}{U_{total}}
```

**Variables and units.** L = loan; use the fully funded commitment for bridge loans (USD); U\_total (count)

**Worked example.**

1. Bible example: $6,000,000 ÷ 50 = $120,000.00.
2. Cedar Court bridge: $5,140,000 ÷ 50 = $102,800.00.

**Interpretation.** Compared with recent sales per unit and replacement cost. A loan per unit near either is a warning.

**Related rules.** MF-GEN-03 (value at least $75,000 per unit; see F-MF-26)

**Common mistakes.**

- Using the initial funded amount on a bridge loan with future funding.
- Comparing across markets without adjusting for unit size.

**Edge cases.** Units 0 → undefined.

**Rounding and day count.** Round to the cent.

**Modules.** M3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $6,000,000; 50 units | $120,000.00 |
| 2 | $5,140,000; 50 units | $102,800.00 |
| 3 | $840,000; 8 units | $105,000.00 |

### F-MF-08: Return on cost

**Purpose.** Stabilized NOI as a share of all-in cost; tests whether the plan creates value.

**Formula.** Return on cost = stabilized NOI ÷ total cost

```latex
RoC = \frac{NOI_{stab}}{Cost_{total}}
```

**Variables and units.** NOI\_stab (USD per year); Cost\_total = price + capex + closing costs (USD)

**Worked example.**

1. Bible example: $520,000 ÷ $8,000,000 = 6.50%.
2. Cedar Court: stabilized NCF $560,000 + reserves $15,000 = NOI $575,000.
3. $575,000 ÷ $7,200,000 = 7.99%.

**Interpretation.** If return on cost is not clearly above the market cap rate, the plan adds little value and the exit is at risk.

**Related rules.** MF-BR-01 (light value-add); MF-BR-08 (exit test)

**Common mistakes.**

- Using NCF on one side and a cap rate built on NOI on the other.
- Leaving closing costs or carry out of total cost.

**Edge cases.** Negative NOI → negative return: decline. Cost 0 → undefined.

**Rounding and day count.** Full precision; display two decimals.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $520,000; $8,000,000 | 6.50% |
| 2 | $575,000; $7,200,000 | 7.99% |
| 3 | $410,000; $6,200,000 | 6.61% (going-in, before the plan) |

### F-MF-09: Net cash flow (NCF)

**Purpose.** Multifamily sizing base: NOI after replacement reserves.

**Formula.** NCF = EGI − OpEx − replacement reserves

```latex
NCF = EGI - OpEx - Res
```

**Variables and units.** EGI (F-CORE-09), OpEx, Res (F-MF-06), all USD per year

**Worked example.**

1. Cedar Court: NOI = $720,000 − $310,000 = $410,000.
2. Reserves = 50 × $300 = $15,000.
3. NCF = $410,000 − $15,000 = $395,000.00.

**Interpretation.** Every multifamily coverage and debt-yield test uses NCF, except the 5-10 unit DSCR loan (F-RES-07).

**Related rules.** MF-GEN-05, MF-GEN-06, MF-GEN-11

**Common mistakes.**

- Sizing on NOI and forgetting reserves.
- Using pro forma income instead of in-place income (MF-GEN-05).

**Edge cases.** 100% vacancy → NCF is minus OpEx and reserves: negative, so every test fails. Partial year: annualize before reserves.

**Rounding and day count.** Round to the cent.

**Modules.** M2, M3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | EGI $720,000; OpEx $310,000; 50 units | $395,000.00 |
| 2 | EGI $114,000; OpEx $51,300; 8 units | $60,300.00 |
| 3 | EGI $0; OpEx $120,000; 20 units | −$126,000.00 |

### F-MF-10: Multifamily DSCR (amortizing)

**Purpose.** Coverage of amortizing debt service by NCF, for term, stabilized and exit tests.

**Formula.** DSCR = NCF ÷ annual debt service; ADS = monthly P&I (F-CORE-02, 30 years) × 12

```latex
DSCR_{MF} = \frac{NCF}{12 \times PMT(L, r, 360)}
```

**Variables and units.** NCF (USD per year); L (USD); r = note rate, or take-out rate for exit tests (percent per year)

**Worked example.**

1. Cedar Court bridge: L $4,340,000 at 7.000%, 30 years. Monthly P&I $28,874.13.
2. ADS = $28,874.13 × 12 = $346,489.56.
3. DSCR = $395,000 ÷ $346,489.56 = 1.14x.

**Interpretation.** Minimum 1.25x for term loans (1.35x outside the top 50 metros) and for exit tests.

**Related rules.** MF-TRM-02; MF-BR-08; MF-LU-03; MF-CON-02; MF-DSCR-03 (NCF warning check)

**Common mistakes.**

- Using the bridge's interest-only payment (that is F-MF-12).
- Using the rounded constant 7.9836% instead of the payment, which moves ADS by a few dollars.
- Rounding DSCR to 1.25x before comparing with 1.25x.

**Edge cases.** NCF negative → negative DSCR: fails. Loan 0 → undefined. Interest-only term loans (MF-TRM-05) still test on 30-year amortization.

**Rounding and day count.** Payment rounded to the cent, then × 12; DSCR at full precision; display two decimals with x.

**Modules.** M3, M4, M5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NCF $395,000; $4,340,000; 7.000% | ADS $346,489.56; 1.14x |
| 2 | NCF $60,300; $840,000; 7.750% | ADS $72,214.32; 0.84x |
| 3 | NCF $560,000; $5,472,000; 7.250% | ADS $447,944.28; 1.25x (1.2502x unrounded: passes) |

### F-MF-11: Debt yield on NCF

**Purpose.** NCF as a share of the loan; a rate-free leverage test.

**Formula.** Debt yield = NCF ÷ loan

```latex
DY = \frac{NCF}{L}
```

**Variables and units.** NCF (USD per year); L = funded loan for as-is tests, fully funded for stabilized tests (USD)

**Worked example.**

1. Cedar Court as-is: $395,000 ÷ $4,340,000 = 9.10%.
2. Stabilized: $560,000 ÷ $5,140,000 = 10.89%.

**Interpretation.** Floors: 7.0% as-is and 8.5% stabilized for value-add bridge; 7.5% to extend; 8.0% for stabilized bridge and term.

**Related rules.** MF-BR-05, MF-BR-06, MF-BR-11, MF-SB-03, MF-TRM-04, MF-LU-03, MF-CON-02

**Common mistakes.**

- Using NOI (F-CORE-16) instead of NCF; multifamily uses the stricter NCF base.
- Pairing stabilized NCF with the funded loan instead of the fully funded loan.

**Edge cases.** Negative NCF → negative yield: fails. Loan 0 → undefined.

**Rounding and day count.** Full precision; display two decimals.

**Modules.** M3, M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $395,000; $4,340,000 | 9.10% |
| 2 | $560,000; $5,140,000 | 10.89% |
| 3 | $560,000; $5,472,000 | 10.23% |

### F-MF-12: In-place interest coverage (bridge)

**Purpose.** Coverage of a floating-rate bridge loan's interest by today's NCF.

**Formula.** Coverage = NCF ÷ (funded loan × max(note rate, cap strike + spread))

```latex
IC = \frac{NCF}{L_{funded} \times \max(r_{note},\ K_{cap} + s)}
```

**Variables and units.** NCF (USD per year); L\_funded (USD); r\_note, K\_cap, s (percent per year)

**Worked example.**

1. Cedar Court: funded $4,340,000; note rate 8.000% (F-MF-24); cap strike 4.25% + spread 4.00% (3.75% base + 0.25% leverage adjuster) = 8.250%.
2. Higher rate = 8.250%. Interest = $4,340,000 × 8.250% = $358,050.
3. Coverage = $395,000 ÷ $358,050 = 1.10x.

**Interpretation.** Below 1.00x, fund a 12-month interest reserve (F-MF-21). Stabilized bridges need 1.05x.

**Related rules.** MF-BR-07, MF-BR-09, MF-SB-03

**Common mistakes.**

- Testing at today's rate only, ignoring the cap strike.
- Using fully funded instead of funded loan.
- Using actual-day interest (Actual/360 gives about 1.4% more a year) instead of the nominal rate (decided 19 Nov 2026).

**Edge cases.** 100% vacancy → 0.00x. Interest on future funding is added as it is drawn (MF-BR-10).

**Rounding and day count.** Full precision; display two decimals with x. Billing is Actual/360; the test uses the nominal rate.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NCF $395,000; $4,340,000; note 8.000%; cap 8.250% | 8.250% used; 1.10x |
| 2 | NCF $300,000; $4,340,000; note 8.100%; cap 8.000% | 8.100% used; 0.85x: below 1.00x |
| 3 | NCF $0; $3,000,000; note 8.250%; cap 8.000% | 8.250% used; 0.00x |

### F-MF-13: Value-add bridge maximum loan

**Purpose.** Largest total commitment and day-one funding for a value-add bridge.

**Formula.** Total = min(75% × total cost, 70% × as-stabilized value, 70% × as-is value + capex); funded = min(70% × as-is value, total − capex). On a purchase, as-is value = lower of price and appraisal (F-CORE-14)

```latex
L_{total} = \min(0.75\,C,\ 0.70\,V_{stab},\ 0.70\,\min(P, V_{asis}) + Capex)
```

**Variables and units.** C = price + capex + closing costs (USD); P = purchase price (USD); V\_stab, V\_asis = appraised values (USD); Capex = future funding (USD)

**Worked example.**

1. Cedar Court: price $6,200,000; as-is appraisal $6,300,000; cost $7,200,000; as-stabilized $8,600,000; capex $800,000.
2. LTC: 75% × $7,200,000 = $5,400,000. Stabilized LTV: 70% × $8,600,000 = $6,020,000.
3. As-is: value = lower of $6,200,000 and $6,300,000 = $6,200,000. 70% × $6,200,000 + $800,000 = $5,140,000. Smallest = $5,140,000.
4. Funded = $4,340,000; capex future funding $800,000.

**Interpretation.** Then check the debt-yield floors (F-MF-11), coverage (F-MF-12) and the exit (F-MF-20) before approving.

**Related rules.** MF-BR-02, MF-BR-03, MF-BR-04, MF-BR-05, MF-BR-06

**Common mistakes.**

- Using an appraisal above the purchase price in the as-is test, or stopping at the leverage tests and skipping the debt-yield and exit tests.
- Funding capex at closing instead of in arrears (MF-BR-10).

**Edge cases.** Refinance (no purchase) → use the as-is appraisal (value definition: 12 CFR 365 App. A). Capex 0 → a stabilized bridge (MF-SB). Capex over 50% of price → ineligible (MF-BR-01).

**Rounding and day count.** Full precision; round the final commitment down to the nearest $1,000 (CORE-PRC-05).

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Price $6.2M; as-is $6.3M; capex $800k; cost $7.2M; V\_stab $8.6M | Total $5,140,000.00 (as-is binds); funded $4,340,000.00 |
| 2 | Price $6.2M; as-is $6.3M; capex $2.0M; cost $8.4M; V\_stab $9.5M | Total $6,300,000.00 (LTC binds); funded $4,300,000.00 |
| 3 | Price $6.2M; as-is $6.3M; capex $800k; cost $7.2M; V\_stab $7.2M | Total $5,040,000.00 (stabilized LTV binds); funded $4,240,000.00 |

### F-MF-14: Term loan maximum

**Purpose.** Largest small-balance term loan that passes DSCR, LTV and debt yield.

**Formula.** Max = min(NCF ÷ DSCR\_min ÷ constant, LTV\_max × value, NCF ÷ 8.0%), rounded down to $1,000

```latex
L_{max} = \min\left(\frac{NCF}{DSCR_{min} \cdot K},\ LTV_{max} V,\ \frac{NCF}{0.08}\right)
```

**Variables and units.** NCF (USD per year); DSCR\_min = 1.25x or 1.35x; K = annual loan constant at the note rate (F-CORE-04, 30 years); LTV\_max = 75% (70% cash-out); V (USD)

**Worked example.**

1. Cedar Court stabilized: NCF $560,000; value $8,600,000; try the 7.25% band, K = 0.081861.
2. DSCR: $560,000 ÷ 1.25 ÷ 0.081861 = $5,472,681.24.
3. LTV: $6,450,000.00. Debt yield: $7,000,000.00.
4. Smallest, rounded down: $5,472,000.00. LTV 63.6%, so the 7.25% band holds.

**Interpretation.** The rate depends on LTV and DSCR (F-MF-25), and they depend on the loan. Re-run until the band is stable.

**Related rules.** MF-TRM-02, MF-TRM-03, MF-TRM-04, MF-TRM-08

**Common mistakes.**

- Using the 1.25x minimum for a property outside the top 50 metros (1.35x).
- Not re-checking the rate band after sizing.

**Edge cases.** NCF zero or negative → no loan. Cash-out: LTV 70%.

**Rounding and day count.** Constant at full precision; final loan rounded down to $1,000 so tests still pass.

**Modules.** M3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NCF $560,000; V $8,600,000; 7.250%; 1.25x | $5,472,000.00 |
| 2 | NCF $395,000; V $6,300,000; 7.250%; 1.25x | $3,860,000.00 |
| 3 | NCF $560,000; V $8,600,000; 7.000%; 1.35x (outside top 50) | $5,195,000.00 |

### F-MF-15: Construction interest reserve

**Purpose.** Interest budget for a construction loan drawn over time.

**Formula.** Reserve = commitment × rate ÷ 12 × months × 60% average outstanding

```latex
IR = C \times \frac{r}{12} \times n \times 0.60
```

**Variables and units.** C = commitment (USD); r (percent per year); n = construction months; 0.60 = average balance factor

**Worked example.**

1. Commitment $10,000,000; 8.00%; 24 months.
2. $10,000,000 × 8.00% ÷ 12 = $66,666.67 a month; × 24 = $1,600,000.
3. × 0.60 = $960,000.00. The 50% rule of thumb gives $800,000: $160,000 short.

**Interpretation.** If the reserve runs out before completion, the guarantor's interest carry guaranty pays.

**Related rules.** MF-CON-05; MF-CON-03 (carry guaranty); D-MF-11 (60% for MF and RES ground-up)

**Common mistakes.**

- Using the 50% rule of thumb.
- Forgetting that Actual/360 billing costs about 1.4% more than r ÷ 12 over a year.

**Edge cases.** Front-loaded draws (land at closing) → use the higher of 60% and the schedule's average (decided 19 Nov 2026). Partial months: count the month.

**Rounding and day count.** Round to the cent.

**Modules.** M5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $10,000,000; 8.000%; 24 | $960,000.00 |
| 2 | $6,000,000; 8.500%; 18 | $459,000.00 |
| 3 | $12,500,000; 7.750%; 20 | $968,750.00 |

### F-MF-16: Combined leverage

**Purpose.** Leverage of our senior loan plus any mezzanine or hard-pay preferred equity.

**Formula.** Combined LTC = (senior + subordinate) ÷ total cost; combined LTV = (senior + subordinate) ÷ as-stabilized value

```latex
CLTC = \frac{L_{sr} + L_{sub}}{C};\quad CLTV = \frac{L_{sr} + L_{sub}}{V_{stab}}
```

**Variables and units.** L\_sr, L\_sub = fully funded amounts (USD); C, V\_stab (USD)

**Worked example.**

1. Cedar Court: $5,140,000 + mezzanine $800,000 = $5,940,000.
2. CLTC: $5,940,000 ÷ $7,200,000 = 82.5% (cap 85%).
3. CLTV: $5,940,000 ÷ $8,600,000 = 69.1% (cap 80%). Passes on leverage, but fails combined DSCR (F-MF-27).

**Interpretation.** Subordinate capital raises our default risk even though it sits behind us. Always run F-MF-27 too.

**Related rules.** MF-MEZ-02 (85% / 80%); MF-MEZ-03 (hard-pay preferred equity counts)

**Common mistakes.**

- Leaving hard-pay preferred equity out.
- Using the funded senior amount instead of the fully funded amount.

**Edge cases.** No subordinate capital → same as F-CORE-15 and F-CORE-14.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M4, M6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $5,140,000 + $800,000; C $7,200,000; V $8,600,000 | 82.5%; 69.1% |
| 2 | $5,140,000 + $1,000,000; same | 85.3% (fails 85%); 71.4% |
| 3 | $5,400,000 + hard-pay pref $600,000; same | 83.3%; 69.8% |

### F-MF-17: Underwritten in-place rent (SUGGESTED)

**Purpose.** The rent figure that underwriting starts from.

**Formula.** In-place rent = min(current rent roll × 12, trailing 3 months' collections × 4)

```latex
Rent_{uw} = \min(RR_{month} \times 12,\ T3 \times 4)
```

**Variables and units.** RR\_month = scheduled monthly rent on the rent roll (USD); T3 = rent collected in the last 3 months (USD)

**Worked example.**

1. Rent roll $63,000 a month × 12 = $756,000.
2. T-3 collections $183,000 × 4 = $732,000.
3. Lesser: $732,000.00.

**Interpretation.** Stops a freshly raised rent roll from being underwritten before the rents are collected.

**Related rules.** MF-GEN-05

**Common mistakes.**

- Taking the higher of the two.
- Then applying the full vacancy factor to a T-3 figure that already reflects vacancy (decided 19 Nov 2026: when T-3 binds, deduct only the vacancy above what T-3 already reflects).

**Edge cases.** Vacant building → $0. A T-3 with a one-off catch-up payment overstates income: remove it.

**Rounding and day count.** Round to the cent.

**Modules.** M2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $63,000; $183,000 | $732,000.00 |
| 2 | $58,500; $180,000 | $702,000.00 |
| 3 | $0; $0 | $0.00 |

### F-MF-18: Underwritten vacancy rate (SUGGESTED)

**Purpose.** Vacancy and credit loss rate used in underwriting.

**Formula.** Vacancy = max(actual vacancy, market vacancy, 5%)

```latex
v_{uw} = \max(v_{act},\ v_{mkt},\ 5\%)
```

**Variables and units.** v\_act = 1 − economic occupancy (F-MF-02); v\_mkt from the appraisal (percent)

**Worked example.**

1. Actual 8.0%; market 6.0%; floor 5.0%.
2. max(8.0%, 6.0%, 5.0%) = 8.0%.

**Interpretation.** Feeds F-CORE-08. The 5% floor applies even to a fully leased building.

**Related rules.** MF-GEN-05

**Common mistakes.**

- Using physical vacancy when economic vacancy is higher.
- Dropping the 5% floor for a 100% occupied building.

**Edge cases.** 100% vacancy → 100%. Lease-up loans use projected stabilized vacancy for the exit test only.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 8.0%; 6.0% | 8.0% |
| 2 | 3.0%; 4.5% | 5.0% (floor) |
| 3 | 100.0%; 6.0% | 100.0% |

### F-MF-19: Rent roll to deposits variance (SUGGESTED)

**Purpose.** Checks that the rent roll matches cash actually banked.

**Formula.** Variance = (rent roll rent for 3 months − bank deposits for 3 months) ÷ rent roll rent

```latex
Var = \frac{RR_{3m} - Dep_{3m}}{RR_{3m}}
```

**Variables and units.** RR\_3m = scheduled rent for 3 months (USD); Dep\_3m = rent deposits for the same months (USD)

**Worked example.**

1. Rent roll $189,000; deposits $182,000.
2. ($189,000 − $182,000) ÷ $189,000 = 3.7%. Within 5%: passes.

**Interpretation.** A large positive gap means rent is not being collected or the rent roll is padded.

**Related rules.** MF-GEN-04 (within 5%)

**Common mistakes.**

- Including security deposits or other income in deposits.
- Testing the absolute value only and missing which way the gap runs.

**Edge cases.** Negative result (deposits above rent roll): catch-up payments or other income; investigate. Rent roll 0 → undefined.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $189,000; $182,000 | 3.7%: passes |
| 2 | $189,000; $176,000 | 6.9%: fails |
| 3 | $189,000; $191,000 | −1.1%: passes, investigate |

### F-MF-20: Bridge exit take-out test (SUGGESTED)

**Purpose.** Checks that an agency-style loan could repay the bridge at stabilization.

**Formula.** Take-out = min(stabilized NCF ÷ 1.25 ÷ K at (agency rate + 0.50%), 80% × as-stabilized value); pass if take-out ≥ fully funded loan

```latex
TO = \min\left(\frac{NCF_{stab}}{1.25 \cdot K(r_{ag} + 0.5\%)},\ 0.80\,V_{stab}\right) \geq L_{total}
```

**Variables and units.** NCF\_stab (USD per year); r\_ag = current agency rate (percent); K = 30-year constant; V\_stab, L\_total (USD)

**Worked example.**

1. Cedar Court: NCF $560,000; agency 6.55% + 0.50% = 7.05%; K = 0.080240.
2. DSCR leg: $560,000 ÷ 1.25 ÷ 0.080240 = $5,583,273.69. LTV leg: $6,880,000.
3. Take-out $5,583,273.69 − $5,140,000 = $443,273.69 spare: passes.

**Interpretation.** The bridge is only as good as its exit. A fail means a smaller loan or a larger equity check.

**Related rules.** MF-BR-08, MF-SB-04

**Common mistakes.**

- Testing at today's agency rate with no 0.50% buffer.
- Comparing with the funded loan instead of the fully funded loan.

**Edge cases.** Agency rate is a dated market input \[VERIFY: source and date each time\]. Negative spare = shortfall.

**Rounding and day count.** Constant at full precision; result to the cent.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NCF $560,000; V $8,600,000; 6.550%; loan $5,140,000 | $5,583,273.69; spare $443,273.69 |
| 2 | NCF $500,000; V $8,600,000; 6.550%; loan $5,140,000 | $4,985,065.79; short $154,934.21: fails |
| 3 | NCF $700,000; V $8,000,000; 6.550%; loan $6,500,000 | $6,400,000.00 (LTV binds); short $100,000.00: fails |

### F-MF-21: Interest shortfall reserve (SUGGESTED)

**Purpose.** Cash held at closing when in-place NCF cannot cover bridge interest.

**Formula.** Reserve = max(0, funded loan × test rate − NCF), for 12 months

```latex
IR_{short} = \max(0,\ L_{funded} \cdot r_{test} - NCF)
```

**Variables and units.** L\_funded (USD); r\_test = the higher rate in F-MF-12 (percent per year); NCF (USD per year)

**Worked example.**

1. Funded $4,340,000 at 8.100%: interest $351,540.
2. NCF $300,000. Reserve = $351,540 − $300,000 = $51,540.00.

**Interpretation.** Funds the gap until the business plan lifts NCF. Coverage of 1.00x or more needs no reserve.

**Related rules.** MF-BR-07

**Common mistakes.**

- Sizing on today's rate when the cap strike + spread is higher.
- Releasing the reserve before coverage reaches 1.00x.

**Edge cases.** NCF negative → reserve also covers the operating deficit. Actual/360 billing runs about 1.4% above this nominal figure.

**Rounding and day count.** Round to the cent.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $4,340,000; 8.100%; NCF $300,000 | $51,540.00 |
| 2 | $4,340,000; 8.250%; NCF $395,000 | $0.00 (coverage 1.10x) |
| 3 | $3,000,000; 8.250%; NCF $0 | $247,500.00 |

### F-MF-22: Maximum rate cap strike (SUGGESTED)

**Purpose.** Highest cap strike that keeps in-place coverage at 1.00x.

**Formula.** Max strike = NCF ÷ funded loan − spread

```latex
K_{max} = \frac{NCF}{L_{funded}} - s
```

**Variables and units.** NCF (USD per year); L\_funded (USD); s = loan spread over SOFR (percent)

**Worked example.**

1. Cedar Court: $395,000 ÷ $4,340,000 = 9.101%.
2. Spread 4.00% (F-MF-24). 9.101% − 4.00% = 5.101%. A 4.25% strike passes.

**Interpretation.** The borrower buys a cap at or below this strike.

**Related rules.** MF-BR-09

**Common mistakes.**

- Setting the strike off today's SOFR instead of coverage.
- Forgetting the cap must cover any extension too.

**Edge cases.** Result at or below 0% → no cap can fix coverage; use an interest reserve (F-MF-21) or a smaller loan.

**Rounding and day count.** Full precision; display three decimals; buy the strike at or below.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $395,000; $4,340,000; 4.00% | 5.101% |
| 2 | $300,000; $4,340,000; 3.75% | 3.162% |
| 3 | $250,000; $5,000,000; 3.75% | 1.250% |

### F-MF-23: Repair escrow (SUGGESTED)

**Purpose.** Cash held at closing for immediate repairs.

**Formula.** Repair escrow = 125% × immediate repairs in the property condition report

```latex
RE = 1.25 \times Repairs_{imm}
```

**Variables and units.** Repairs\_imm (USD)

**Worked example.**

1. Immediate repairs $120,000 × 1.25 = $150,000.00.

**Interpretation.** The extra 25% covers cost overruns.

**Related rules.** MF-BR-13

**Common mistakes.**

- Using total capex instead of immediate (life-safety) repairs.
- Funding the repairs out of the capex holdback instead of a separate escrow.

**Edge cases.** No immediate repairs → $0.

**Rounding and day count.** Round to the cent.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $120,000 | $150,000.00 |
| 2 | $0 | $0.00 |
| 3 | $37,450 | $46,812.50 |

### F-MF-24: Bridge note rate (SUGGESTED)

**Purpose.** Builds the floating rate from the MF-BR-14 grid.

**Formula.** Rate = 1-month Term SOFR + base spread + adjusters

```latex
r = SOFR_{1M} + s_{base} + \sum adj
```

**Variables and units.** SOFR\_1M (percent, illustrative; set each period); base 3.75% value-add or 3.25% stabilized; adjusters 0.25% each

**Worked example.**

1. Cedar Court: SOFR 4.00% (illustrative); value-add base 3.75%.
2. Total commitment 71.4% of cost → +0.25%. Debt yield 9.10% and occupancy 92%: no other adjusters.
3. Rate = 4.00% + 3.75% + 0.25% = 8.000%.

**Interpretation.** Each adjuster prices a known risk: high leverage, thin debt yield, low occupancy.

**Related rules.** MF-BR-14 (applies to MF-BR and MF-SB)

**Common mistakes.**

- Missing the leverage adjuster when the total commitment is above 70% of cost.
- Quoting a fixed rate when the product floats.

**Edge cases.** SOFR is a market input \[VERIFY: New York Fed or CME Term SOFR, date\]. Course figures are illustrative.

**Rounding and day count.** Display three decimals.

**Modules.** M4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | SOFR 4.00%; value-add; LTC 71.4%; DY 9.10%; occ 92% | 8.000% |
| 2 | SOFR 3.80%; value-add; LTC 74.0%; DY 7.50%; occ 80% | 8.300% |
| 3 | SOFR 4.00%; stabilized; LTC 65.0%; DY 9.00%; occ 93% | 7.250% |

### F-MF-25: Term loan note rate (SUGGESTED)

**Purpose.** Builds the fixed rate from the MF-TRM-08 grid.

**Formula.** Rate = 7.00% + 0.25% (LTV 65.01-75%) + 0.25% (DSCR 1.25-1.34x) + 0.25% (interest-only)

```latex
r = 7.00\% + \sum adj
```

**Variables and units.** LTV (F-CORE-14), DSCR (F-MF-10), IO flag

**Worked example.**

1. Cedar Court term: LTV 63.6%; DSCR 1.25x; amortizing.
2. 7.00% + 0.00% + 0.25% + 0.00% = 7.250%.

**Interpretation.** Rate, DSCR and loan size depend on each other; re-run F-MF-14 until the band holds.

**Related rules.** MF-TRM-08; MF-TRM-05 (IO only at LTV 65% or less and DSCR 1.35x or more)

**Common mistakes.**

- Pricing interest-only on a loan that does not qualify for it.
- Using the band from before sizing.

**Edge cases.** DSCR below 1.25x → no rate: the loan fails MF-TRM-02.

**Rounding and day count.** Display three decimals.

**Modules.** M3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | LTV 63.6%; DSCR 1.25x; amortizing | 7.250% |
| 2 | LTV 72.0%; DSCR 1.30x; amortizing | 7.500% |
| 3 | LTV 60.0%; DSCR 1.40x; IO | 7.250% |

### F-MF-26: Value per unit (SUGGESTED)

**Purpose.** Checks the property clears the minimum value per unit.

**Formula.** Value per unit = value ÷ units (on a purchase, value = lower of price and appraisal)

```latex
V_{unit} = \frac{V}{U_{total}}
```

**Variables and units.** V = as-is value; lower of price and appraisal on a purchase (USD); U\_total (count)

**Worked example.**

1. Cedar Court: value = lower of price $6,200,000 and appraisal $6,300,000 (F-CORE-14). $6,200,000 ÷ 50 = $124,000.00. Above $75,000: eligible.

**Interpretation.** Very low value per unit signals weak rents, poor condition or a small market.

**Related rules.** MF-GEN-03 ($75,000 minimum)

**Common mistakes.**

- Using as-stabilized value to clear the minimum.
- Counting unpermitted units.

**Edge cases.** Units 0 → undefined.

**Rounding and day count.** Round to the cent.

**Modules.** M1

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $6,200,000; 50 units | $124,000.00 |
| 2 | $1,200,000; 8 units | $150,000.00 |
| 3 | $2,880,000; 48 units | $60,000.00: ineligible |

### F-MF-27: Combined DSCR (SUGGESTED)

**Purpose.** Coverage of senior plus subordinate debt service.

**Formula.** Combined DSCR = NCF ÷ (senior ADS + subordinate ADS), each on 30-year amortization at its rate

```latex
DSCR_{comb} = \frac{NCF}{ADS_{sr} + ADS_{sub}}
```

**Variables and units.** NCF (USD per year); ADS by F-CORE-03 for each layer (USD per year)

**Worked example.**

1. Cedar Court stabilized NCF $560,000. Senior $5,140,000 at 8.000%: ADS $452,586.00.
2. Mezzanine $800,000 at 12.000%: ADS $98,746.80.
3. Combined = $560,000 ÷ $551,332.80 = 1.02x. Fails 1.10x.
4. So the $800,000 mezzanine in the F-MF-16 example passes on leverage but fails on coverage: it is not allowed.

**Interpretation.** Minimum 1.10x. Leverage alone (F-MF-16) can pass while coverage fails, so always run both.

**Related rules.** MF-MEZ-02, MF-MEZ-03

**Common mistakes.**

- Using interest-only on the mezzanine.
- Leaving out hard-pay preferred equity.

**Edge cases.** Uses stabilized NCF (decided 19 Nov 2026); in-place coverage is tested on the senior loan (F-MF-12).

**Rounding and day count.** Payments to the cent; DSCR at full precision; display two decimals with x.

**Modules.** M4, M6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $560,000; $5,140,000 at 8.000%; $800,000 at 12.000% | ADS $551,332.80; 1.02x: fails |
| 2 | $650,000; $5,400,000 at 8.000%; pref $600,000 at 11.000% | ADS $544,046.76; 1.19x: passes |
| 3 | $395,000; $5,140,000 at 8.000%; $800,000 at 12.000% | ADS $551,332.80; 0.72x: fails |

### F-MF-28: Residential income share (SUGGESTED)

**Purpose.** Decides whether a mixed-use property counts as multifamily.

**Formula.** Residential share = residential income ÷ total income

```latex
Share_{res} = \frac{Inc_{res}}{Inc_{total}}
```

**Variables and units.** Income figures for the same period (USD per year)

**Worked example.**

1. $640,000 ÷ $720,000 = 88.9%. At least 80%: multifamily.

**Interpretation.** Below 80%, the loan goes under the Commercial mixed-use rules.

**Related rules.** MF-GEN-01

**Common mistakes.**

- Using square footage instead of income.
- Counting parking or laundry as commercial income (they follow the residential units).

**Edge cases.** Total income 0 → use appraiser's market income.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** M1

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $640,000; $720,000 | 88.9% |
| 2 | $540,000; $720,000 | 75.0%: not multifamily |
| 3 | $720,000; $720,000 | 100.0% |

**Multifamily library complete: 16 REQUIRED and 12 SUGGESTED formulas, 84 test cases.**

## Commercial formulas (F-COM)

Hospitality formulas (F-COM-04, -05) are taught for analysis in CM5; hospitality lending is out of scope (COM-GEN-02). Construction and land formulas sit in CM4 and the CM6 capstone, as there is no separate construction module.

| ID | Name | Status | Main rules |
| --- | --- | --- | --- |
| F-COM-01 | Weighted average lease term (WALT) | REQUIRED | COM-TRM-07 |
| F-COM-02 | Rollover risk | REQUIRED | COM-GEN-08 |
| F-COM-03 | Commercial net cash flow (NCF) | REQUIRED | COM-GEN-07 |
| F-COM-04 | Average daily rate (ADR) | REQUIRED | COM-GEN-02 |
| F-COM-05 | Revenue per available room (RevPAR) | REQUIRED | COM-GEN-02 |
| F-COM-06 | Loan per square foot | REQUIRED | F-COM-08 |
| F-COM-07 | Occupancy cost ratio | REQUIRED | COM-NNN-06 |
| F-COM-08 | Three-test loan sizing | REQUIRED | COM-GEN-11 |
| F-COM-09 | Rollover-stressed NCF | REQUIRED | COM-GEN-08 |
| F-COM-10 | Bridge exit test (take-out DSCR) | REQUIRED | Bridge table |
| F-COM-11 | Small-balance commercial DSCR | REQUIRED | COM-DSCR-03 |
| F-COM-12 | Dark-value coverage (NNN Tier 2) | REQUIRED | COM-NNN-03 |
| F-COM-13 | Lease-term cushion | REQUIRED | COM-NNN-04 |
| F-COM-14 | Construction sizing with interest reserve | REQUIRED | COM-CON-01, -02, -03, -06, -07 |
| F-COM-15 | Underwritten vacancy | SUGGESTED | COM-GEN-05 |
| F-COM-16 | Tenant rent share | SUGGESTED | COM-GEN-09 |
| F-COM-17 | Bridge interest shortfall reserve | SUGGESTED | COM-BR-03, COM-BR-04 |
| F-COM-18 | Fixed-rate floor | SUGGESTED | COM-TRM-04 |
| F-COM-19 | Cash sweep amount | SUGGESTED | COM-GEN-12 |
| F-COM-20 | Land loan maximum | SUGGESTED | COM-LND-01, -02, -03 |
| F-COM-21 | Construction draw with retainage | SUGGESTED | COM-CON-10 |
| F-COM-22 | Pre-leasing ratio | SUGGESTED | COM-CON-05 |
| F-COM-23 | SBC DSCR maximum LTV | SUGGESTED | COM-DSCR-05 |
| F-COM-24 | Step-down prepayment premium | SUGGESTED | COM-TRM-05 |

### F-COM-01: Weighted average lease term (WALT)

**Purpose.** Average remaining lease term, weighted by rent.

**Formula.** WALT = Σ(years remaining × annual rent) ÷ Σ annual rent

```latex
WALT = \frac{\sum_i y_i R_i}{\sum_i R_i}
```

**Variables and units.** y\_i = years left on lease i (months ÷ 12); R\_i = annual base rent of lease i (USD per year)

**Worked example.**

1. Bible building: A $300,000, 6 years; B $100,000, 2 years; C $100,000, 4 years.
2. (6 × $300,000 + 2 × $100,000 + 4 × $100,000) ÷ $500,000 = $2,400,000 ÷ $500,000 = 4.80 years.

**Interpretation.** A short WALT means income can disappear soon. Compare it with the loan term.

**Related rules.** COM-TRM-07 (rollover before maturity); COM-NNN-04 (lease cushion)

**Common mistakes.**

- Weighting by square feet when the rule needs rent (state which you use).
- Counting renewal options as remaining term.

**Edge cases.** Vacant space has no rent, so it drops out and WALT looks better than the building is. Leases past maturity: count actual years. Partial years: months ÷ 12.

**Rounding and day count.** Full precision; display two decimals in years.

**Modules.** CM2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | A 6y $300k; B 2y $100k; C 4y $100k | 4.80 years |
| 2 | One tenant, 14y, $240k | 14.00 years |
| 3 | A 10y $200k; B 1y $200k; vacant $0 | 5.50 years |

### F-COM-02: Rollover risk

**Purpose.** Share of rent from leases ending in a stated period.

**Formula.** Rollover = rent expiring in the period ÷ total rent

```latex
Roll = \frac{R_{exp}}{R_{total}}
```

**Variables and units.** R\_exp = annual base rent of leases ending in the period (USD per year); R\_total (USD per year)

**Worked example.**

1. Bible building, next 24 months: lease B, $100,000.
2. $100,000 ÷ $500,000 = 20.0%.

**Interpretation.** Above 15% within 24 months triggers the rollover stress (F-COM-09).

**Related rules.** COM-GEN-08 (15% in 24 months); COM-TRM-07

**Common mistakes.**

- Leaving out month-to-month tenants (they expire now).
- Using a period that does not match the rule (24 months).

**Edge cases.** All rent expiring → 100%: treat as a bridge, not a term loan. Total rent 0 → undefined.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** CM2, CM3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $100,000; $500,000 | 20.0% |
| 2 | $0; $480,000 | 0.0% |
| 3 | $300,000; $500,000 | 60.0% |

### F-COM-03: Commercial net cash flow (NCF)

**Purpose.** Commercial sizing base: NOI after TI/LC and replacement reserves.

**Formula.** NCF = NOI − (TI/LC rate × sf) − (replacement rate × sf)

```latex
NCF = NOI - sf \times (TILC_{psf} + Rep_{psf})
```

**Variables and units.** NOI (USD per year); sf = rentable square feet; TI/LC and replacement rates per COM-GEN-07 (USD per sf per year)

**Worked example.**

1. Birchwood Plaza, 40,000 sf unanchored retail; NOI $480,000.
2. TI/LC: 40,000 × $1.00 = $40,000. Replacement: 40,000 × $0.15 = $6,000.
3. NCF = $480,000 − $40,000 − $6,000 = $434,000.00.

**Interpretation.** Every commercial test uses NCF, except NNN and SBC DSCR loans, which use NOI (COM-GEN-11).

**Related rules.** COM-GEN-07; COM-GEN-11

**Common mistakes.**

- Using retail rates for office space ($1.50 and $0.20 per sf).
- Deducting reserves already inside OpEx.

**Edge cases.** Mixed-use: apply each rate to its own area. Negative NCF → no loan.

**Rounding and day count.** Round to the cent.

**Modules.** CM3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NOI $480,000; 40,000 sf retail | $434,000.00 |
| 2 | NOI $900,000; 50,000 sf office | $815,000.00 |
| 3 | NOI $650,000; 100,000 sf industrial | $610,000.00 |

### F-COM-04: Average daily rate (ADR)

**Purpose.** Hotel room revenue per occupied room night.

**Formula.** ADR = room revenue ÷ rooms sold

```latex
ADR = \frac{Rev_{rooms}}{Rooms_{sold}}
```

**Variables and units.** Rev\_rooms (USD); Rooms\_sold (room nights)

**Worked example.**

1. $2,920,000 ÷ 20,000 = $146.00.

**Interpretation.** Hospitality is outside our lending scope (COM-GEN-02). Learners use ADR to read appraisals and comparables in CM5.

**Related rules.** COM-GEN-02 (hospitality out of scope)

**Common mistakes.**

- Including food, beverage or parking revenue.
- Dividing by available rooms (that is RevPAR).

**Edge cases.** Rooms sold 0 → undefined.

**Rounding and day count.** Round to the cent.

**Modules.** CM5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $2,920,000; 20,000 | $146.00 |
| 2 | $1,500,000; 12,500 | $120.00 |
| 3 | $4,380,000; 24,000 | $182.50 |

### F-COM-05: Revenue per available room (RevPAR)

**Purpose.** Room revenue per available room night; equals ADR × occupancy.

**Formula.** RevPAR = room revenue ÷ (rooms × days)

```latex
RevPAR = \frac{Rev_{rooms}}{Rooms \times Days}
```

**Variables and units.** Rev\_rooms (USD); Rooms (count); Days in the period (365, or 366 in a leap year)

**Worked example.**

1. $2,920,000 ÷ (100 × 365) = $2,920,000 ÷ 36,500 = $80.00.
2. Check: ADR $146.00 × occupancy 54.8% = $80.00.

**Interpretation.** Combines price and occupancy; the standard hotel comparison measure (CM5 only).

**Related rules.** COM-GEN-02

**Common mistakes.**

- Using 360 days (the Actual/360 billing basis is for interest, not hotel nights).
- Mixing a partial year's revenue with a full year's rooms.

**Edge cases.** Leap year: 366 days. Rooms closed for renovation still count as available unless the comparison set excludes them.

**Rounding and day count.** Round to the cent.

**Modules.** CM5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $2,920,000; 100 rooms; 365 | $80.00 |
| 2 | $2,920,000; 100 rooms; 366 | $79.78 |
| 3 | $1,500,000; 60 rooms; 365 | $68.49 |

### F-COM-06: Loan per square foot

**Purpose.** Loan amount divided by rentable area.

**Formula.** Loan per sf = loan ÷ rentable sf

```latex
L_{sf} = \frac{L}{sf}
```

**Variables and units.** L = loan, fully funded for bridge (USD); sf = rentable square feet

**Worked example.**

1. $5,000,000 ÷ 50,000 = $100.00 per sf.
2. Birchwood: $3,900,000 ÷ 40,000 = $97.50.

**Interpretation.** Compared with sales per sf and replacement cost. Close to replacement cost is a warning.

**Related rules.** F-COM-08 (sizing)

**Common mistakes.**

- Using gross building area instead of rentable area.
- Using funded instead of fully funded bridge amount.

**Edge cases.** Land loans: per acre or per lot instead.

**Rounding and day count.** Round to the cent.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $5,000,000; 50,000 sf | $100.00 |
| 2 | $3,900,000; 40,000 sf | $97.50 |
| 3 | $5,969,000; 60,000 sf | $99.48 |

### F-COM-07: Occupancy cost ratio

**Purpose.** A retail tenant's rent and charges as a share of its sales.

**Formula.** Occupancy cost = (base rent + CAM, tax and insurance charges) ÷ tenant sales

```latex
OCR = \frac{Rent + Charges}{Sales}
```

**Variables and units.** Rent, Charges, Sales for the same 12 months (USD per year)

**Worked example.**

1. ($75,000 + $15,000) ÷ $1,000,000 = 9.0%.

**Interpretation.** A high ratio means the tenant may not renew, or may fail. NNN loans need 10% or less where sales are reported.

**Related rules.** COM-NNN-06 (10% or less)

**Common mistakes.**

- Leaving out CAM and other charges.
- Using sales from a different year than rent.

**Edge cases.** Sales not reported → no test; note it as a risk. Sales 0 → undefined.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** CM5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $75,000 + $15,000; $1,000,000 | 9.0% |
| 2 | $180,000 + $0; $1,500,000 | 12.0%: fails 10% |
| 3 | $60,000 + $12,000; $900,000 | 8.0% |

### F-COM-08: Three-test loan sizing

**Purpose.** Largest commercial loan that passes LTV, DSCR and debt yield.

**Formula.** Loan = min(LTV\_max × value, NCF ÷ DSCR\_min ÷ constant, NCF ÷ DY\_min), rounded down to $1,000 (CORE-PRC-05)

```latex
L = \min\left(LTV_{max} V,\ \frac{NCF}{DSCR_{min} K},\ \frac{NCF}{DY_{min}}\right)
```

**Variables and units.** V (USD); NCF (USD per year; NOI for NNN); K = annual constant at the note rate, 25-year amortization (F-CORE-04); limits by property type (COM-TRM table)

**Worked example.**

1. Birchwood term loan: value $6,000,000; NCF $434,000; 65% / 1.30x / 9.0%; 7.000%, K = $330,772.68 ÷ $3,900,000 (shown 0.084814).
2. LTV: $3,900,000.00. DSCR: $434,000 ÷ 1.30 ÷ K = $3,936,238.02.
3. Debt yield: $434,000 ÷ 9.0% = $4,822,222.22.
4. Lowest: $3,900,000.00 (LTV binds). ADS $330,772.68; DSCR 1.31x; debt yield 11.13%.

**Interpretation.** The binding test tells the borrower what would raise proceeds: more value, more income or a lower rate.

**Related rules.** COM-GEN-11; COM-TRM table; COM-TRM-04 (rate floor, F-COM-18); COM-NNN-02, -03

**Common mistakes.**

- Using the rate before the Treasury + 300 bp floor (F-COM-18).
- Using NCF on an NNN loan, which tests on NOI.
- Rounding the result up.

**Edge cases.** NCF zero or negative → no loan. NNN Tier 1 has no debt-yield test. The 7.000% example assumes a 4.00% Treasury (RD-COM-01); at 5.13% the floor is 8.130%.

**Rounding and day count.** Constant at full precision; payment to the cent; loan rounded down to $1,000 (CORE-PRC-05).

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | V $6.0M; NCF $434,000; 65% / 1.30x / 9.0%; 7.000% | $3,900,000.00 (LTV binds) |
| 2 | NNN Tier 1: V $4.0M; NOI $240,000; 70% / 1.20x; 6.500% | $2,468,000.00 (DSCR binds; $2,468,378.24 before rounding) |
| 3 | Office: V $10.0M; NCF $800,000; 60% / 1.40x / 10.0%; 8.130% | $6,000,000.00 (LTV binds; DSCR leg $6,101,503.27) |

### F-COM-09: Rollover-stressed NCF

**Purpose.** Cuts NCF for rent at risk when leases roll soon.

**Formula.** If rollover (F-COM-02) > 15% in 24 months: stressed NCF = NCF − expiring rent × haircut (15%; 20% office); stressed DSCR ≥ 1.20x

```latex
NCF_{stress} = NCF - h \times R_{exp,24m}
```

**Variables and units.** NCF (USD per year); R\_exp,24m = rent expiring within 24 months (USD per year); h = 15% or 20% for office

**Worked example.**

1. Birchwood: $120,000 of $600,000 base rent expires within 24 months = 20.0% (above 15%).
2. Stress: $120,000 × 15% = $18,000. Stressed NCF = $434,000 − $18,000 = $416,000.00.
3. Stressed DSCR: $416,000 ÷ $330,772.68 = 1.26x. Passes 1.20x.

**Interpretation.** Shows whether the loan survives the expiring tenants re-leasing at lower rents.

**Related rules.** COM-GEN-08

**Common mistakes.**

- Stressing at 15% for office (20%).
- Applying the stress when rollover is 15% or less.

**Edge cases.** All expiring tenants are vacant already → the vacancy rule (F-COM-15) covers them, so do not stress twice.

**Rounding and day count.** NCF to the cent; DSCR at full precision, display two decimals with x.

**Modules.** CM3, CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NCF $434,000; $120,000 of $600,000 expiring; retail; ADS $330,772.68 | $416,000.00; 1.26x |
| 2 | NCF $815,000; $300,000 of $1,000,000 expiring; office | $755,000.00 |
| 3 | NCF $434,000; $60,000 of $600,000 expiring (10.0%) | $434,000.00: no stress |

### F-COM-10: Bridge exit test (take-out DSCR)

**Purpose.** Checks that a permanent loan at the course take-out rate could repay the bridge.

**Formula.** Exit DSCR = stabilized NCF ÷ ADS at 7.75%, 25-year amortization; max loan = NCF ÷ DSCR\_exit ÷ constant

```latex
DSCR_{exit} = \frac{NCF_{stab}}{12 \cdot PMT(L, 7.75\%, 300)}
```

**Variables and units.** NCF\_stab (USD per year); L = fully funded bridge (USD); 7.75% = course take-out rate (D-COM-08)

**Worked example.**

1. Industrial flex bridge: $4,000,000 requested; stabilized NCF $430,000; K = $319,050.84 ÷ $3,520,000 (shown 0.090639).
2. ADS = $362,557.80. Exit DSCR = $430,000 ÷ $362,557.80 = 1.19x: fails 1.25x.
3. Max loan = $430,000 ÷ 1.25 ÷ K = $3,795,257.21, rounded down to $3,795,000.00.
4. Debt yield: $430,000 ÷ $3,795,000.00 = 11.33%: passes 9.0%.

**Interpretation.** The bridge is sized to its exit, not to today's income.

**Related rules.** Bridge table (1.25-1.35x by type); COM-CON-07; D-COM-08

**Common mistakes.**

- Using today's bridge rate instead of the take-out rate.
- Testing the funded amount instead of the fully funded amount.

**Edge cases.** The take-out rate resets when the 10-year Treasury moves 25 bp \[VERIFY: Treasury yield and date\].

**Rounding and day count.** Payment to the cent; max loan rounded down to $1,000 (CORE-PRC-05).

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $4,000,000; NCF $430,000; 1.25x | 1.19x: fails; max $3,795,000.00 |
| 2 | $3,795,000; NCF $430,000; 1.25x | 1.25x: passes |
| 3 | $5,969,000; NCF $720,000; 1.25x | 1.33x: passes |

### F-COM-11: Small-balance commercial DSCR

**Purpose.** Coverage for SBC DSCR loans on NOI and 30-year amortization.

**Formula.** DSCR = NOI ÷ (monthly P&I at the note rate, 30 years × 12)

```latex
DSCR_{SBC} = \frac{NOI}{12 \cdot PMT(L, r, 360)}
```

**Variables and units.** NOI (USD per year; no TI/LC deduction); L (USD); r ≥ 8.50% floor (COM-DSCR-09)

**Worked example.**

1. Linden Corner: NOI $96,000; loan $800,000; 8.750%, 30 years.
2. ADS = $75,523.20. DSCR = $96,000 ÷ $75,523.20 = 1.27x: passes 1.25x.
3. Max loan at 1.25x: $96,000 ÷ 1.25 ÷ 0.094404 = $813,524.43.

**Interpretation.** Minimum 1.25x, or 1.30x for office and unanchored retail. Uses NOI, so it is looser than the term-loan test.

**Related rules.** COM-DSCR-03; COM-DSCR-04 (mixed-use may use F-RES-07 at 1.15x); COM-DSCR-09

**Common mistakes.**

- Deducting TI/LC (that is the term-loan basis).
- Pricing below the 8.50% floor.

**Edge cases.** Loan above $2,000,000 → COM-TRM instead. NOI negative → decline.

**Rounding and day count.** Payment to the cent; DSCR at full precision; display two decimals with x.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NOI $96,000; $800,000; 8.750% | ADS $75,523.20; 1.27x |
| 2 | NOI $60,000; $600,000; 8.750% | ADS $56,642.40; 1.06x: fails 1.25x |
| 3 | Office NOI $120,000; $1,000,000; 9.000% | ADS $96,554.76; 1.24x: fails 1.30x |

### F-COM-12: Dark-value coverage (NNN Tier 2)

**Purpose.** Caps an unrated-tenant NNN loan at 80% of the building's value empty.

**Formula.** Max = min(60% × value, 80% × dark value), then the 1.35x DSCR test

```latex
L_{max} = \min(0.60\,V,\ 0.80\,V_{dark})
```

**Variables and units.** V = as-is value with the lease (USD); V\_dark = appraiser's value with the tenant gone (USD)

**Worked example.**

1. Franchise restaurant: value $3,500,000; dark value $2,400,000.
2. LTV: $2,100,000. Dark: 80% × $2,400,000 = $1,920,000.
3. Dark value binds: $1,920,000.00 before the DSCR test.

**Interpretation.** If the tenant leaves, the empty building must still cover most of the loan.

**Related rules.** COM-NNN-03

**Common mistakes.**

- Using the leased value as the dark value.
- Skipping the DSCR test after the dark-value cap.

**Edge cases.** Special-use building with no other user → dark value near 0: decline.

**Rounding and day count.** Round to the cent; loan rounded down to $1,000 (CORE-PRC-05).

**Modules.** CM5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $3,500,000; dark $2,400,000 | $1,920,000.00 (dark binds) |
| 2 | $3,000,000; dark $2,500,000 | $1,800,000.00 (LTV binds) |
| 3 | $3,500,000; dark $0 | $0.00: decline |

### F-COM-13: Lease-term cushion

**Purpose.** Checks the NNN lease runs well past the loan.

**Formula.** Cushion = years left on the primary lease − loan term; need ≥ 5 years and lease ≥ 7 years

```latex
Cushion = y_{lease} - y_{loan} \geq 5,\quad y_{lease} \geq 7
```

**Variables and units.** y\_lease = years left at closing (months ÷ 12); y\_loan = loan term (years)

**Worked example.**

1. 14 years left; 10-year loan: 14 − 10 = 4 years. Fails.
2. Fix: 7-year loan gives 14 − 7 = 7 years. Passes.

**Interpretation.** The tenant must stay through the loan and long enough for a refinance.

**Related rules.** COM-NNN-04

**Common mistakes.**

- Counting renewal options as lease term.
- Measuring from lease start instead of loan closing.

**Edge cases.** Partial years: count in months (e.g. 11 years 6 months = 11.5).

**Rounding and day count.** Full precision in years.

**Modules.** CM2, CM5

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 14 years; 10-year loan | 4.0 years: fails |
| 2 | 14 years; 7-year loan | 7.0 years: passes |
| 3 | 11.5 years; 5-year loan | 6.5 years: passes |

### F-COM-14: Construction sizing with interest reserve

**Purpose.** Largest construction loan when the interest reserve sits inside cost.

**Formula.** Loan = min(LTC × base cost ÷ (1 − LTC × rate × months ÷ 12 × 60%), LTV × as-complete value)

```latex
L = \min\left(\frac{LTC \cdot C_{base}}{1 - LTC \cdot r \cdot \frac{m}{12} \cdot 0.60},\ LTV \cdot V_{comp}\right)
```

**Variables and units.** C\_base = land + hard + soft + contingency (USD); r (percent per year); m = months to stabilization; LTC, LTV = 65%

**Worked example.**

1. Ridgeline Flex: base cost $8,700,000; 9.00%; 18 months.
2. Reserve factor: 9.00% × 18 ÷ 12 × 60% = 8.10% of the loan.
3. LTC loan: 65% × $8,700,000 ÷ (1 − 65% × 8.10%) = $5,655,000 ÷ 0.94735 = $5,969,282.74. Reserve $483,511.90.
4. LTV: 65% × $9,800,000 = $6,370,000.00. LTC binds: $5,969,000.00 rounded down.

**Interpretation.** Putting the reserve inside cost stops the loan from funding its own interest above the LTC limit.

**Related rules.** COM-CON-01, -02, -03 (80% supervisory ceiling \[VERIFY\]), -06, -07

**Common mistakes.**

- Adding the reserve on top of an already-maximum loan.
- Using 100% average balance or the 50% rule of thumb.

**Edge cases.** Front-loaded draws (land funded at closing) → use the higher of 60% and the schedule's average (decided 19 Nov 2026). Then run the exit test (F-COM-10).

**Rounding and day count.** Full precision; loan rounded down to $1,000 (CORE-PRC-05).

**Modules.** CM4, CM6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Base $8.7M; 9.00%; 18 months; as-complete $9.8M | $5,969,000.00 (LTC binds) |
| 2 | Base $5.0M; 8.50%; 15 months; as-complete $7.0M | $3,390,000.00 (LTC binds; $3,390,493.58 before rounding) |
| 3 | Base $8.7M; 9.00%; 18 months; as-complete $8.8M | $5,720,000.00 (LTV binds) |

### F-COM-15: Underwritten vacancy (SUGGESTED)

**Purpose.** Vacancy rate used in commercial underwriting.

**Formula.** Vacancy = max(actual, market, 5%); floor 10% for office

```latex
v_{uw} = \max(v_{act},\ v_{mkt},\ f),\ f = 5\%\ (10\%\ office)
```

**Variables and units.** v\_act, v\_mkt (percent of potential rent)

**Worked example.**

1. Retail: actual 3%, market 6%, floor 5% → 6.0%.

**Interpretation.** Feeds F-CORE-08. Office carries the higher floor because re-leasing is slowest.

**Related rules.** COM-GEN-05

**Common mistakes.**

- Using 5% for office.
- Using physical vacancy when rent-weighted vacancy is higher.

**Edge cases.** Single-tenant NNN: vacancy is all or nothing; the dark-value test (F-COM-12) handles it.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** CM3

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Retail: 3%; 6% | 6.0% |
| 2 | Office: 4%; 8% | 10.0% (office floor) |
| 3 | Industrial: 0%; 2% | 5.0% |

### F-COM-16: Tenant rent share (SUGGESTED)

**Purpose.** Share of rent from one tenant; drives estoppels, SNDAs and the sweep rule.

**Formula.** Share = tenant's annual base rent ÷ total base rent

```latex
Share_i = \frac{R_i}{R_{total}}
```

**Variables and units.** R\_i, R\_total (USD per year)

**Worked example.**

1. Bible tenant A: $300,000 ÷ $500,000 = 60.0%. Needs estoppel (20%+), SNDA (10%+), and a lease past maturity or a sweep (25%+).

**Interpretation.** The bigger the tenant, the more of the loan rests on one lease.

**Related rules.** COM-GEN-09 (20% estoppel, 10% SNDA); COM-GEN-10 (25%); COM-GEN-12 (20% notice sweep)

**Common mistakes.**

- Using square footage share.
- Forgetting the top five tenants also give estoppels.

**Edge cases.** Single tenant → 100%: NNN rules apply.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** CM2

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $300,000; $500,000 | 60.0%: estoppel, SNDA, 25% rule |
| 2 | $100,000; $500,000 | 20.0%: estoppel, SNDA |
| 3 | $40,000; $500,000 | 8.0%: none unless top five |

### F-COM-17: Bridge interest shortfall reserve (SUGGESTED)

**Purpose.** Cash held when in-place NCF cannot cover bridge interest until stabilization.

**Formula.** Reserve = max(0, funded loan × test rate − NCF) × months to stabilization ÷ 12

```latex
IR = \max(0,\ L\,r_{test} - NCF) \times \frac{m}{12}
```

**Variables and units.** L = funded loan (USD); r\_test = higher of note rate and cap strike + spread (COM-BR-03); NCF (USD per year); m = months to stabilization

**Worked example.**

1. $4,000,000; note 9.000%; cap 4.50% + 4.00% = 8.500%; test rate 9.000%.
2. Interest $360,000; NCF $300,000; shortfall $60,000 a year.
3. 18 months: $60,000 × 18 ÷ 12 = $90,000.00.

**Interpretation.** Unlike multifamily (12 months, MF-BR-07), commercial funds the gap all the way to stabilization.

**Related rules.** COM-BR-03, COM-BR-04

**Common mistakes.**

- Sizing on 12 months by habit.
- Ignoring the cap strike when it is higher than the note rate.

**Edge cases.** Actual/360 billing runs about 1.4% above this nominal figure; tests use nominal (decided 19 Nov 2026).

**Rounding and day count.** Round to the cent.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $4,000,000; 9.000%; NCF $300,000; 18 months | $90,000.00 |
| 2 | $4,000,000; 9.000%; NCF $380,000; 18 months | $0.00 (coverage 1.06x) |
| 3 | $3,000,000; 9.500%; NCF $150,000; 24 months | $270,000.00 |

### F-COM-18: Fixed-rate floor (SUGGESTED)

**Purpose.** Applies the Treasury-based rate floors to term and NNN loans.

**Formula.** Rate = max(quoted rate, matching Treasury + floor spread)

```latex
r = \max(r_{quote},\ T + s_{floor})
```

**Variables and units.** T = matching Treasury yield (percent); s\_floor = 300 bp term, 175 bp NNN Tier 1, 250 bp NNN Tier 2

**Worked example.**

1. Term loan, Treasury 5.13% (16 Nov 2026): floor 8.13%. Quote 7.00% → 8.130%.

**Interpretation.** Protects margin when the market quote is too tight for a private lender.

**Related rules.** COM-TRM-04; COM-NNN-08

**Common mistakes.**

- Using a Treasury of a different maturity from the loan term.
- Sizing at the quoted rate and pricing at the floor.

**Edge cases.** Treasury is a dated market input \[VERIFY: US Treasury daily yield curve, date\]. Floating bridge loans use COM-BR-06 instead.

**Rounding and day count.** Display three decimals.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Term; quote 7.000%; T 5.13% | 8.130% |
| 2 | NNN Tier 1; quote 6.500%; T 5.13% | 6.880% |
| 3 | NNN Tier 2; quote 7.900%; T 5.13% | 7.900% (quote above 7.630% floor) |

### F-COM-19: Cash sweep amount (SUGGESTED)

**Purpose.** Monthly excess cash trapped once a sweep trigger is hit.

**Formula.** If DSCR < 1.10x or a 20%+ tenant gives notice: sweep = (NCF − ADS) ÷ 12 per month, if positive

```latex
Sweep_{month} = \max\left(0,\ \frac{NCF - ADS}{12}\right)
```

**Variables and units.** NCF, ADS (USD per year)

**Worked example.**

1. Birchwood NCF falls to $360,000; ADS $330,772.68; DSCR 1.09x: trigger.
2. Sweep = ($360,000 − $330,772.68) ÷ 12 = $2,435.61 a month.

**Interpretation.** Trapped cash builds a reserve for re-leasing or pays down the loan.

**Related rules.** COM-GEN-12; COM-NNN-07; COM-TRM-07

**Common mistakes.**

- Sweeping without a trigger.
- Releasing trapped cash before the cure test is met.

**Edge cases.** NCF below ADS → nothing to sweep; the borrower must cover the gap.

**Rounding and day count.** Round to the cent.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | NCF $360,000; ADS $330,772.68 | $2,435.61 |
| 2 | NCF $400,000; ADS $330,772.68 (1.21x, no trigger) | $0.00 |
| 3 | NCF $434,000; tenant notice; ADS $330,772.68 | $8,602.28 |

### F-COM-20: Land loan maximum (SUGGESTED)

**Purpose.** Largest loan on entitled land.

**Formula.** Max = min(50% × as-is value, 60% × cost)

```latex
L_{land} = \min(0.50\,V,\ 0.60\,C)
```

**Variables and units.** V = as-is land value (USD); C = purchase cost (USD)

**Worked example.**

1. Value $2,000,000; cost $1,800,000.
2. min($1,000,000, $1,080,000) = $1,000,000.00.

**Interpretation.** Land earns nothing, so leverage is low and the exit must be shown at approval.

**Related rules.** COM-LND-01, -02, -03

**Common mistakes.**

- Lending on unentitled land.
- Using the borrower's planned value after entitlement.

**Edge cases.** Supervisory ceilings: raw land 65%, land development 75% \[VERIFY: 12 CFR 365 App. A\]; ours sits below.

**Rounding and day count.** Round to the cent.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | V $2,000,000; C $1,800,000 | $1,000,000.00 |
| 2 | V $1,500,000; C $1,200,000 | $720,000.00 |
| 3 | V $3,000,000; C $3,200,000 | $1,500,000.00 |

### F-COM-21: Construction draw with retainage (SUGGESTED)

**Purpose.** Amount released for work inspected in a draw period.

**Formula.** Draw = work in place this period × (1 − 10% retainage while under 50% complete)

```latex
Draw = W \times (1 - 0.10 \cdot \mathbb{1}[pc < 50\%])
```

**Variables and units.** W = inspected work in place this period (USD); pc = percent complete after this draw

**Worked example.**

1. 30% complete; work this period $600,000.
2. $600,000 × 0.90 = $540,000.00; $60,000 held.

**Interpretation.** Retainage keeps the contractor committed through the riskiest early stage.

**Related rules.** COM-CON-10

**Common mistakes.**

- Funding before third-party inspection.
- Skipping the title date-down.

**Edge cases.** Held retainage is released at completion (decided 19 Nov 2026). Equity goes in first.

**Rounding and day count.** Round to the cent.

**Modules.** CM4, CM6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | 30% complete; $600,000 | $540,000.00 |
| 2 | 70% complete; $900,000 | $900,000.00 |
| 3 | 45% complete; $250,000 | $225,000.00 |

### F-COM-22: Pre-leasing ratio (SUGGESTED)

**Purpose.** Share of a planned building already leased before construction.

**Formula.** Pre-leasing = signed lease sf ÷ rentable sf

```latex
PL = \frac{sf_{signed}}{sf_{rentable}}
```

**Variables and units.** sf\_signed (sf under signed leases); sf\_rentable

**Worked example.**

1. Ridgeline: 24,000 ÷ 60,000 = 40.0%. Industrial needs 30%: passes.

**Interpretation.** Retail and office need 50%; industrial 30% or speculative at 60% LTC.

**Related rules.** COM-CON-05

**Common mistakes.**

- Counting letters of intent as signed leases.
- Using gross instead of rentable area.

**Edge cases.** Self-storage: no pre-leasing, max 60% LTC.

**Rounding and day count.** Full precision; display one decimal.

**Modules.** CM4, CM6

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Industrial: 24,000; 60,000 | 40.0%: passes 30% |
| 2 | Retail: 18,000; 40,000 | 45.0%: fails 50% |
| 3 | Office: 26,000; 50,000 | 52.0%: passes 50% |

### F-COM-23: SBC DSCR maximum LTV (SUGGESTED)

**Purpose.** Sets the LTV limit for a small-balance commercial loan.

**Formula.** Max LTV = 70% (65% cash-out) − 5% if office or more than 20% vacant

```latex
LTV_{max} = LTV_{base} - 5\% \cdot \mathbb{1}[office \lor vac > 20\%]
```

**Variables and units.** LTV\_base = 70% purchase or rate-term, 65% cash-out

**Worked example.**

1. Retail purchase, 25% vacant: 70% − 5% = 65.0%.

**Interpretation.** Office and partly empty buildings get less leverage.

**Related rules.** COM-DSCR-05

**Common mistakes.**

- Using the purchase base (70%) for a cash-out loan (65%).
- Taking 5% twice when the building is office and also over 20% vacant (one 5% cut only; decided 19 Nov 2026).

**Edge cases.** Vacancy exactly 20% → no cut (rule says more than 20%).

**Rounding and day count.** Display one decimal.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | Retail purchase; 25% vacant | 65.0% |
| 2 | Office cash-out; 0% vacant | 60.0% |
| 3 | Light industrial rate-term; 10% vacant | 70.0% |

### F-COM-24: Step-down prepayment premium (SUGGESTED)

**Purpose.** Fee for repaying a term loan early under a 5-4-3-2-1 schedule.

**Formula.** Premium = principal prepaid × step % for the loan year (5, 4, 3, 2, 1, then 0)

```latex
PP = P \times s_{year}
```

**Variables and units.** P = principal prepaid (USD); s\_year = 5%, 4%, 3%, 2%, 1%, then 0%

**Worked example.**

1. Year 2, balance $3,850,000: $3,850,000 × 4% = $154,000.00.

**Interpretation.** Compensates the lender for lost interest; it is simpler than yield maintenance.

**Related rules.** COM-TRM-05; MF-TRM-06 (same schedule)

**Common mistakes.**

- Counting the year from the first payment instead of closing (the year runs from closing; decided 19 Nov 2026).
- Charging a premium the state does not allow \[VERIFY: state law table\].

**Edge cases.** Year 6 or later → 0%. Partial prepayment → premium on the amount prepaid only.

**Rounding and day count.** Round to the cent.

**Modules.** CM4

| Test | Inputs | Expected |
| --- | --- | --- |
| 1 | $3,850,000; year 2 | $154,000.00 |
| 2 | $3,700,000; year 5 | $37,000.00 |
| 3 | $3,600,000; year 6 | $0.00 |

**Commercial library complete: 14 REQUIRED and 10 SUGGESTED formulas, 72 test cases. All four family libraries are done: 118 formulas and 354 test cases. Next: reconcile the running deals against the library.**
