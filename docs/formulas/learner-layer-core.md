# Learner layer: core formulas

**Model policy for training - not for live lending decisions.** Fictional borrowers and deals. US dollars.

Draft of 23 Nov 2026 for the formula pages on the course site. Covers 47 core formulas. The same content is in `learner-layer-core.json`, one object per formula.

Sources: the Formula Library snapshot (`docs/formulas/formula-library.md`, 22 Nov 2026), `formulas/core/tests/fixtures.json`, Running Deals (`data/running-deals/running-deals.md`, 22 Nov 2026), the Document Registry, the Theory Map and the Model Credit Policy snapshot. The Course Bible stays the source of truth; this file changes nothing in it.

How to use it: learner prose (what it is, analogy, variables, In Excel, how to read the result, common slips, takeaways, worked example) carries no codes. Codes sit only in the `id`, `related`, `concepts`, `docId` and `verify` fields, for Audit mode. Policy limits are named by plain section name.

Summary: 39 formulas use a running deal (3 of them as a library what-if on a running deal: F-CORE-42, F-CORE-47, F-CORE-49). 8 use the library's first test case with no deal: F-CORE-20, F-CORE-21, F-CORE-23, F-CORE-30, F-CORE-34, F-CORE-36, F-CORE-37, F-CORE-43.

## F-CORE-01: Interest-only payment

*Library name: Interest-only payment (Actual/360).*

**What it is.** This is the interest a borrower owes for one billing month on an interest-only loan. It answers: what is this month's bill? The lender charges a daily rate on the funded balance for each actual day.

**Analogy.** It works like a parking meter: a fixed charge per day, so a 31-day month costs more than a 30-day month.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Funded balance | The principal outstanding during the month, after any draws. | US dollars | Loan servicing report (DOC-34) |
| r | Annual note rate | The yearly interest rate written in the note. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| d | Days in the period | Actual calendar days in the billing month. The funding day counts; the payoff day does not. | days | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1*B2/360*B3`

| Cell | Holds |
| --- | --- |
| B1 | Funded balance ($240,000) |
| B2 | Annual note rate (10.25%) |
| B3 | Actual days in the month (31) |
| B4 | Interest for the month: =B1*B2/360*B3 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** This is a cost to the borrower, not a test, so there is no safer direction. Check it against the servicing bill each month. The billing basis is set in the Model Credit Policy, Pricing structure.

**Common slips.**

- Why not divide the yearly interest by 12? Months have 28 to 31 days. Dividing by 12 undercharges every 31-day month.
- Which balance do I use? Use the funded balance, not the full commitment, unless the note charges the full commitment from day one.
- Can I round the daily rate first? No. Keep the daily rate unrounded and round the month's total to the cent once.

**Key takeaways.**

- Interest = funded balance × rate ÷ 360 × actual days.
- A 31-day month costs more than a 30-day month at the same rate.
- Round once, at the end, to the cent.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run closing and servicing.

| Input | Value | Source |
| --- | --- | --- |
| Funded balance at closing | $240,000 | Running Deals: initial advance |
| Note rate | 10.25% | Running Deals: term sheet |
| Days in the month | 31 | Running Deals: 31-day month |

1. Daily interest: $240,000 × 10.25% ÷ 360 = $68.333… a day. Keep it unrounded.
2. Month: $68.333… × 31 days = $2,118.333…
3. Round to the cent: $2,118.33. A 30-day month on the same balance is $2,050.00.

Result: **$2,118.33 for a 31-day month**

**Related formulas.** F-CORE-05 (Per diem interest), F-CORE-20 (Interest reserve (straight-line)), F-CORE-33 (Prepaid (odd-days) interest at closing (SUGGESTED)), F-CORE-32 (Payoff amount (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: 31-day month $2,118.33 = $2,118.33 (Running Deals, Maple Run); 30-day month $2,050.00 = $2,050.00 (Running Deals, Maple Run draw table). Excel formula recalculated in LibreOffice: B4 $2,118.33, matches. Fixtures recomputed independently: test 1 $4,166.67; test 2 $28,589.75; test 3 $3,041.11, all match fixtures.json.

## F-CORE-02: Amortizing payment

*Library name: Amortizing payment (principal and interest).*

**What it is.** This is the level monthly payment that repays a loan over its amortization period. It answers: what does the borrower pay each month on a term loan? Each payment covers that month's interest and repays some principal.

**Analogy.** It is like paying off a phone over 25 years in equal instalments, where the early ones are mostly interest.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Loan amount | The principal at the start of the amortization. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| r | Annual note rate | The yearly rate in the note. The monthly rate is this rate ÷ 12. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| n | Amortization | The number of monthly payments used to set the payment. It is often longer than the loan term. | months | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=ROUND(PMT(B2/12,B3,-B1),2)`

| Cell | Holds |
| --- | --- |
| B1 | Loan amount ($3,900,000) |
| B2 | Annual note rate (7.00%) |
| B3 | Amortization in months (300) |
| B4 | Monthly payment: =ROUND(PMT(B2/12,B3,-B1),2) |

Rounding: Here ROUND is part of the rule, not display: the note fixes the payment at the cent. Debt service and balance cells must use this rounded payment.

**How to read the result.** A higher payment means less cash left for the owner, so coverage is lower. The payment feeds annual debt service and coverage tests. The payment basis is set in the Model Credit Policy, Pricing structure.

**Common slips.**

- Why does my payment look far too high? You may have used the loan term (say 10 years) instead of the amortization (say 25 years).
- Do I enter the annual rate? No. Divide the annual rate by 12 for a monthly payment.
- Should the payment change in a 31-day month? No. The payment is set on 12 equal months. Day count affects interest accrual only.

**Key takeaways.**

- The payment is set on 12 equal months: monthly rate = annual rate ÷ 12.
- Use the amortization, not the term, for the number of payments.
- Round the payment to the cent, then use that rounded figure everywhere.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan (loan and rate); the 300-month amortization is from the library's test 2.

| Input | Value | Source |
| --- | --- | --- |
| Term loan | $3,900,000 | Running Deals: month 24 term loan |
| Note rate | 7.00% | Running Deals: term loan rate |
| Amortization | 300 months | Library test 2 |

1. Monthly rate: 7.00% ÷ 12 = 0.583333…% (0.00583333…).
2. Discount factor: 1 − (1.00583333…)^−300 = 0.825340…
3. Payment: $3,900,000 × 0.00583333… ÷ 0.825340… = $27,564.39 after rounding to the cent.

Result: **$27,564.39 a month**

**Related formulas.** F-CORE-03 (Annual debt service (ADS)), F-CORE-04 (Loan constant), F-CORE-45 (Present and future value (time value of money) (SUGGESTED)), F-CORE-47 (Remaining loan balance after k payments (SUGGESTED)), F-CORE-49 (Remaining balance with Actual/360 accrual (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics), TM-09 (Loan types and amortization)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Monthly payment $27,564.39 = $27,564.39 (Library test 2); Payment × 12 equals the stated debt service $330,772.68 = $330,772.68 (Running Deals, Birchwood Plaza). Excel formula recalculated in LibreOffice: B4 $27,564.39, matches. Fixtures recomputed independently: test 1 $3,326.51; test 2 $27,564.39; test 3 $1,000.00, all match fixtures.json.

## F-CORE-03: Annual debt service

*Library name: Annual debt service (ADS).*

**What it is.** Annual debt service is the total of a year's scheduled loan payments. It answers: how much debt cost must the property's income cover each year? It is the bottom of every coverage ratio.

**Analogy.** It is the year's rent the property pays to the bank.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| P | Monthly payment | The scheduled payment, rounded to the cent, from the amortizing payment formula. | US dollars a month | Promissory note and loan agreement excerpt (DOC-25) |
| L | Loan balance (interest-only loans) | The balance used for an interest-only loan's yearly cost. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| r | Annual note rate (interest-only loans) | The yearly rate in the note. Tests use the plain yearly rate. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=ROUND(PMT(B2/12,B3,-B1),2)*12`

| Cell | Holds |
| --- | --- |
| B1 | Loan amount ($3,900,000) |
| B2 | Annual note rate (7.00%) |
| B3 | Amortization in months (300) |
| B4 | Annual debt service: =ROUND(PMT(B2/12,B3,-B1),2)*12 |

Rounding: ROUND here applies the rule that the payment is fixed at the cent before × 12. For an interest-only loan use =B1*B2 and leave it unrounded.

**How to read the result.** Lower debt service is safer, because more income is left after paying the loan. It is the denominator of the coverage ratio. The tests that use it are in the Model Credit Policy, Rules for all commercial loans and Rules for all multifamily loans.

**Common slips.**

- Why does my debt service differ by a few cents from the schedule? Round the monthly payment to the cent first, then multiply by 12.
- Why not use the interest actually billed? Tests use the plain yearly rate (loan × rate) so every loan is compared the same way. Billed interest on actual days is slightly higher.

**Key takeaways.**

- Amortizing loan: debt service = rounded monthly payment × 12.
- Interest-only loan: debt service = balance × annual rate.
- Use the same debt service figure in every test for the same loan.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan.

| Input | Value | Source |
| --- | --- | --- |
| Monthly payment | $27,564.39 | Amortizing payment on $3,900,000 at 7.00% |
| Months a year | 12 | Convention |

1. Start from the rounded monthly payment: $27,564.39.
2. Multiply by 12: $27,564.39 × 12 = $330,772.68.

Result: **$330,772.68 a year**

**Related formulas.** F-CORE-02 (Amortizing payment (principal and interest)), F-CORE-04 (Loan constant), F-CORE-11 (Debt service coverage ratio (DSCR)), F-CORE-12 (Break-even occupancy)

**Concepts.** TM-09 (Loan types and amortization), TM-13 (Cash-flow coverage and break-even)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Annual debt service $330,772.68 = $330,772.68 (Running Deals, Birchwood Plaza; library test 3); Interest-only variant on the bridge: $2,860,000 × 8.25% $235,950.00 = $235,950 (Running Deals, Birchwood Plaza in-place coverage (shown without cents)). Excel formula recalculated in LibreOffice: B4 $330,772.68, matches. Fixtures recomputed independently: test 1 $39,918.12; test 2 $235,950.00; test 3 $330,772.68, all match fixtures.json.

## F-CORE-04: Loan constant

**What it is.** The loan constant is annual debt service per dollar of loan. It answers: how much yearly payment does each dollar borrowed cost? It lets you size a loan before you know the amount.

**Analogy.** It is the price tag per dollar borrowed: 8.5 cents a year for every dollar.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| ADS | Annual debt service | Twelve rounded monthly payments for the loan. | US dollars a year | Promissory note and loan agreement excerpt (DOC-25) |
| L | Loan amount | The loan the debt service was worked out on. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Annual debt service ($330,772.68) |
| B2 | Loan amount ($3,900,000) |
| B3 | Loan constant: =B1/B2 |

Rounding: Show at least six decimals. Never round the constant before using it to size a loan; sizing divides by the unrounded cell. Without a loan amount, =12*PMT(rate/12,months,-1) gives the same constant to six decimals.

**How to read the result.** A lower constant is safer for the lender, because the same income supports more loan. Compare it with the cap rate: a constant above the cap rate means debt costs more than the property yields. No policy limit applies to the constant itself.

**Common slips.**

- Is the constant just the note rate? Only for an interest-only loan. Amortization adds principal repayment, so the constant is higher.
- Can I round it to two decimals? No. A constant of 8.48% instead of 8.4814% moves a loan size by thousands of dollars.

**Key takeaways.**

- Loan constant = annual debt service ÷ loan amount.
- On an amortizing loan it is higher than the note rate.
- Keep at least six decimals and size with the unrounded value.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan.

| Input | Value | Source |
| --- | --- | --- |
| Annual debt service | $330,772.68 | Running Deals |
| Loan amount | $3,900,000 | Running Deals |

1. Divide: $330,772.68 ÷ $3,900,000 = 0.0848135…
2. Show six decimals: 0.084814, or 8.481%.

Result: **0.084814 (8.481%)**

**Related formulas.** F-CORE-02 (Amortizing payment (principal and interest)), F-CORE-03 (Annual debt service (ADS)), F-CORE-17 (Maximum loan by DSCR), F-CORE-13 (Capitalization (cap) rate), F-CORE-44 (Cash-on-cash return (SUGGESTED))

**Concepts.** TM-09 (Loan types and amortization), TM-15 (Financial leverage)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Loan constant 0.084814 = 0.084814 (Library test 1 (7.00%, 25 years)); Closed form 12 × payment per $1 0.084814 = 0.084814 (Library test 1). Excel formula recalculated in LibreOffice: B3 0.084814, matches. Fixtures recomputed independently: test 1 0.084814; test 2 0.090639; test 3 0.075848, all match fixtures.json.

## F-CORE-05: Per diem interest

**What it is.** Per diem interest is one day's interest on the loan. It answers: what does each extra day cost? Closers and servicers use it for odd days at closing, payoffs and late payments.

**Analogy.** It is the nightly rate on a hotel room you keep adding nights to.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Balance | The principal outstanding on that day. | US dollars | Loan servicing report (DOC-34) |
| r | Annual note rate | The yearly rate in the note. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1*B2/360`

| Cell | Holds |
| --- | --- |
| B1 | Balance ($340,000) |
| B2 | Annual note rate (10.25%) |
| B3 | Per diem: =B1*B2/360 |

Rounding: Show the per diem to the cent, but multiply days by the unrounded cell. Rounding first and then multiplying by many days lets the error grow.

**How to read the result.** It is a cost per day, so there is no pass or fail. It tells the borrower what a delay costs and the closer what to collect. The interest basis is set in the Model Credit Policy, Pricing structure.

**Common slips.**

- Why 360 and not 365? The note bills Actual/360: a 360-day year with actual days counted. Using 365 undercharges.
- Can I round the per diem and multiply it by 45 days? No. Multiply the unrounded daily figure, then round the total once.

**Key takeaways.**

- Per diem = balance × rate ÷ 360.
- It changes whenever the balance changes, for example after a draw.
- Use the unrounded per diem in any multi-day total.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run servicing.

| Input | Value | Source |
| --- | --- | --- |
| Balance after the final draw | $340,000 | Running Deals |
| Note rate | 10.25% | Running Deals |

1. Year's interest at the nominal rate: $340,000 × 10.25% = $34,850.
2. One day: $34,850 ÷ 360 = $96.805…
3. Round for display: $96.81.

Result: **$96.81 a day**

**Related formulas.** F-CORE-01 (Interest-only payment (Actual/360)), F-CORE-31 (Default interest (SUGGESTED)), F-CORE-32 (Payoff amount (SUGGESTED)), F-CORE-33 (Prepaid (odd-days) interest at closing (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics), TM-32 (Loss severity and recovery timing)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Per diem at $340,000 $96.81 = $96.81 (Running Deals, Maple Run); Per diem at $240,000 $68.33 = $68.33 (Running Deals, Maple Run). Excel formula recalculated in LibreOffice: B3 $96.81, matches. Fixtures recomputed independently: test 1 $138.89; test 2 $748.00; test 3 $1,285.00, all match fixtures.json.

## F-CORE-06: Origination points

**What it is.** Points are an upfront fee charged as a percent of the loan. It answers: how much does the lender collect at closing for making the loan? One point is 1% of the total commitment.

**Analogy.** It is a cover charge at the door, sized by how big the party is.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| C | Total commitment | The full loan amount, including any holdback for rehab or capex. | US dollars | Term sheet (DOC-14) |
| pts | Points | The fee in points. One point equals 1% of the commitment. | points | Term sheet (DOC-14) |

**In Excel.**

Formula: `=B1*B2/100`

| Cell | Holds |
| --- | --- |
| B1 | Total commitment ($340,000) |
| B2 | Points (1.50) |
| B3 | Fee: =B1*B2/100 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** More points raise the lender's yield and the borrower's cash to close. The Model Credit Policy, Pricing structure sets points by experience tier and never below 1.00. Every fee is also tested against state rules before the term sheet.

**Common slips.**

- Do points apply to the first advance or the whole loan? Check the term sheet. Ours charges the total commitment.
- Is one point 0.1%? No. One point is 1% of the commitment.

**Key takeaways.**

- Fee = commitment × points ÷ 100.
- One point = 1% of the commitment.
- Points add to cash to close and raise the lender's yield.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run term sheet.

| Input | Value | Source |
| --- | --- | --- |
| Total commitment | $340,000 | Running Deals |
| Points | 1.50 | Running Deals: experience tier pricing |

1. Convert points to a percent: 1.50 points = 1.50%.
2. Multiply: $340,000 × 1.50% = $5,100.00.

Result: **$5,100.00**

**Related formulas.** F-CORE-40 (All-in annual cost screen (SUGGESTED)), F-CORE-41 (Net funding wire (SUGGESTED)), F-CORE-48 (Internal rate of return (IRR) (SUGGESTED)), F-CORE-28 (Note rate (RTL grid))

**Concepts.** TM-10 (Contract rate, yield to maturity and expected return)

**Legal tags (Audit mode only).** [VERIFY: State Law Table, fee columns for the deal's state; checked 20 Nov 2026]

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Points fee $5,100.00 = $5,100.00 (Running Deals, Maple Run (shown as $5,100)). Excel formula recalculated in LibreOffice: B3 $5,100.00, matches. Fixtures recomputed independently: test 1 $6,800.00; test 2 $35,200.00; test 3 $77,100.00, all match fixtures.json.

## F-CORE-07: Gross potential rent

*Library name: Gross potential rent (GPR).*

**What it is.** Gross potential rent is the rent a property would earn in a year if every unit were leased at its scheduled rent. It answers: what is the ceiling on rental income? Everything below it is a deduction.

**Analogy.** It is a full house at a theatre: the takings if every seat sells at the ticket price.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| Rent_u | Scheduled monthly rent per unit | The in-place rent for leased units and market rent for vacant units, each labelled. | US dollars a month | Rent roll (DOC-01) |

**In Excel.**

Formula: `=B1*B2*12`

| Cell | Holds |
| --- | --- |
| B1 | Number of units (50) |
| B2 | Average scheduled monthly rent ($1,300) |
| B3 | Gross potential rent: =B1*B2*12 |

Rounding: With one row per unit on the rent roll, use =SUM(rent column)*12 instead. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** Gross potential rent is a ceiling, not a forecast. A higher figure is not safer by itself. Check it against the rent roll and market rents before you deduct vacancy.

**Common slips.**

- Can I mix in-place and market rents? Yes, but label each. Unlabelled mixing hides a jump to market rent.
- Do concessions or parking fees go here? No. Concessions reduce rent. Fees and parking are other income, added later.

**Key takeaways.**

- Gross potential rent = scheduled monthly rents × 12.
- It is the most the property could earn from rent.
- Other income and concessions stay out of it.

**Worked example (Cedar Court).** Basis: Running Deals, Cedar Court (50 units, $780,000); the $1,300 average rent is from the library's test 2.

| Input | Value | Source |
| --- | --- | --- |
| Units | 50 | Running Deals |
| Average scheduled rent | $1,300 a month | Library test 2 |

1. Monthly rent for all units: 50 × $1,300 = $65,000.
2. Annual: $65,000 × 12 = $780,000.00.

Result: **$780,000.00**

**Related formulas.** F-CORE-08 (Vacancy and credit loss), F-CORE-09 (Effective gross income (EGI)), F-CORE-12 (Break-even occupancy)

**Concepts.** TM-12 (Pro forma realism and submarket evidence)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Gross potential rent $780,000.00 = $780,000.00 (Library test 2; Running Deals, Cedar Court GPR $780,000). Excel formula recalculated in LibreOffice: B3 $780,000.00, matches. Fixtures recomputed independently: test 1 $180,000.00; test 2 $780,000.00; test 3 $408,000.00, all match fixtures.json.

## F-CORE-08: Vacancy and credit loss

**What it is.** Vacancy and credit loss is the income lost to empty space and unpaid rent. It answers: how much of the gross rent will not be collected? Underwriting uses the highest of actual, market or the policy minimum.

**Analogy.** It is the empty seats and the bounced cheques at the theatre.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| GPR | Gross potential income | Scheduled rent for the year, plus recoveries where leases pass costs to tenants. | US dollars a year | Rent roll (DOC-01) |
| v | Vacancy and credit loss rate | The greatest of actual vacancy, market vacancy and the policy minimum. | percent | Appraisal excerpt (market vacancy), checked against the rent roll and the policy minimum (DOC-03) |

**In Excel.**

Formula: `=B1*MAX(B2,B3)`

| Cell | Holds |
| --- | --- |
| B1 | Gross potential income ($720,000) |
| B2 | Vacancy rate from the appraisal (5%) |
| B3 | Policy minimum vacancy (5%) |
| B4 | Vacancy and credit loss: =B1*MAX(B2,B3) |

Rounding: MAX picks the greater rate, so the minimum is never added on top. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** A higher vacancy allowance is more conservative. The minimum rate is set in the Model Credit Policy, Rules for all commercial loans and Rules for all multifamily loans. Never go below it.

**Common slips.**

- Should I add the minimum to actual vacancy? No. Take the greater of the two, not the sum.
- Is physical occupancy enough? No. Unpaid rent counts as loss too, so economic vacancy can be higher than empty units suggest.

**Key takeaways.**

- Vacancy = gross potential income × vacancy rate.
- Use the greatest of actual, market and the policy minimum.
- Unpaid rent is a loss even when the unit is full.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza stabilized income.

| Input | Value | Source |
| --- | --- | --- |
| Stabilized base rent plus recoveries | $720,000 | Running Deals: $600,000 + $120,000 |
| Vacancy | 5% | Running Deals: appraiser |

1. Pick the rate: the appraiser uses 5%, the same as the commercial minimum, so 5% applies.
2. Multiply: $720,000 × 5% = $36,000.00.

Result: **$36,000.00**

**Related formulas.** F-CORE-07 (Gross potential rent (GPR)), F-CORE-09 (Effective gross income (EGI)), F-CORE-10 (Net operating income (NOI))

**Concepts.** TM-12 (Pro forma realism and submarket evidence)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Vacancy $36,000.00 = $36,000.00 (Running Deals, Birchwood Plaza ($36,000)). Excel formula recalculated in LibreOffice: B4 $36,000.00, matches. Fixtures recomputed independently: test 1 $9,000.00; test 2 $78,000.00; test 3 $720,000.00, all match fixtures.json.

## F-CORE-09: Effective gross income

*Library name: Effective gross income (EGI).*

**What it is.** Effective gross income is the income the property should actually collect in a year. It answers: after vacancy, what comes in? It is gross potential income, less vacancy, plus other income.

**Analogy.** It is the theatre's real takings: full-house sales, less empty seats, plus the snack bar.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| GPR | Gross potential income | Scheduled rent (and recoveries) if fully leased. | US dollars a year | Rent roll (DOC-01) |
| V | Vacancy and credit loss | Income lost to empty space and unpaid rent. | US dollars a year | Appraisal excerpt, checked against the rent roll (DOC-03) |
| OI | Other income | Recurring income such as fees, parking or laundry. | US dollars a year | T-12 operating statement (DOC-02) |

**In Excel.**

Formula: `=B1-B2+B3`

| Cell | Holds |
| --- | --- |
| B1 | Gross potential income ($720,000) |
| B2 | Vacancy and credit loss ($36,000) |
| B3 | Other income ($0) |
| B4 | Effective gross income: =B1-B2+B3 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** Higher income is better, but only if it is real and recurring. It is the top line for net operating income. Income rules are in the Model Credit Policy, Rules for all commercial loans and Rules for all multifamily loans.

**Common slips.**

- Should I apply vacancy to other income too? Only once. Do not take vacancy off other income twice.
- Can a one-time lease buyout count? No. Count only income that recurs each year.

**Key takeaways.**

- Effective gross income = gross potential income − vacancy + other income.
- It is the top line of the operating statement.
- Count only recurring income.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza stabilized income.

| Input | Value | Source |
| --- | --- | --- |
| Gross potential income | $720,000 | Running Deals |
| Vacancy | $36,000 | Running Deals |
| Other income | $0 | Running Deals: none listed |

1. Start with gross potential income: $720,000.
2. Less vacancy: $720,000 − $36,000 = $684,000.
3. Plus other income of $0: $684,000.00.

Result: **$684,000.00**

**Related formulas.** F-CORE-07 (Gross potential rent (GPR)), F-CORE-08 (Vacancy and credit loss), F-CORE-10 (Net operating income (NOI))

**Concepts.** TM-12 (Pro forma realism and submarket evidence)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Effective gross income $684,000.00 = $684,000.00 (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B4 $684,000.00, matches. Fixtures recomputed independently: test 1 $177,000.00; test 2 $684,000.00; test 3 $18,000.00, all match fixtures.json.

## F-CORE-10: Net operating income

*Library name: Net operating income (NOI).*

**What it is.** Net operating income is the property's cash flow before loan payments. It answers: what does the property earn from operations in a year? It drives value, debt yield and coverage.

**Analogy.** It is the shop's profit before the owner pays the mortgage.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| EGI | Effective gross income | Income after vacancy, plus other income. | US dollars a year | T-12 operating statement (DOC-02) |
| OpEx | Operating expenses | Taxes, insurance, management, repairs, utilities and payroll. The greater of the trailing 12 months and the appraiser's estimate. | US dollars a year | T-12 operating statement, compared with the appraisal excerpt (DOC-02) |

**In Excel.**

Formula: `=B1-MAX(B2,B3)`

| Cell | Holds |
| --- | --- |
| B1 | Effective gross income ($684,000) |
| B2 | Expenses, trailing 12 months ($196,000) |
| B3 | Expenses, appraiser's estimate ($204,000) |
| B4 | Net operating income: =B1-MAX(B2,B3) |

Rounding: MAX applies the greater-of rule for expenses. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** Higher net operating income is safer, if the income and expenses are realistic. The Model Credit Policy, Rules for all commercial loans and Rules for all multifamily loans set the greater-of expense rule and a management fee floor.

**Common slips.**

- Do loan payments or depreciation come off? No. Net operating income is before debt service, depreciation and income tax.
- The owner manages the property. Can I leave out management? No. Include a market management fee; a buyer or receiver would pay one.

**Key takeaways.**

- Net operating income = effective gross income − operating expenses.
- Use the greater of actual and appraised expenses.
- Leave out debt service, depreciation and income tax.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza stabilized income.

| Input | Value | Source |
| --- | --- | --- |
| Effective gross income | $684,000 | Running Deals |
| Expenses, trailing 12 months | $196,000 | Running Deals |
| Expenses, appraiser | $204,000 | Running Deals |

1. Take the greater expense figure: $204,000.
2. Subtract: $684,000 − $204,000 = $480,000.00.

Result: **$480,000.00**

**Related formulas.** F-CORE-09 (Effective gross income (EGI)), F-CORE-11 (Debt service coverage ratio (DSCR)), F-CORE-13 (Capitalization (cap) rate), F-CORE-16 (Debt yield)

**Concepts.** TM-12 (Pro forma realism and submarket evidence)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Net operating income $480,000.00 = $480,000.00 (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B4 $480,000.00, matches. Fixtures recomputed independently: test 1 $105,000.00; test 2 $480,000.00; test 3 −$292,000.00, all match fixtures.json.

## F-CORE-11: Debt service coverage ratio

*Library name: Debt service coverage ratio (DSCR).*

**What it is.** The debt service coverage ratio shows how many times the property's income covers its loan payments. It answers: can the property pay its debt from its own income, with room to spare?

**Analogy.** It is how many times your pay covers your rent: 1.3 times means you have 30% to spare.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| NOI | Income | Net operating income, or net cash flow where the family rules require it. Commercial and multifamily loans use net cash flow. | US dollars a year | T-12 operating statement and rent roll, as underwritten in the credit memo (DOC-02) |
| ADS | Annual debt service | Twelve rounded monthly payments, or balance × rate for interest-only. | US dollars a year | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Net cash flow ($434,000) |
| B2 | Annual debt service ($330,772.68) |
| B3 | Coverage: =B1/B2 |

Rounding: Compare B3 with the minimum at full precision, for example =B3>=1.30. Format to two decimals with an x only for display.

**How to read the result.** Higher is safer. Below 1.00x the property cannot pay its debt from income. Each family's minimum is in the Model Credit Policy, for example Term loans, small-balance commercial DSCR and single-tenant NNN.

**Common slips.**

- Which income do I use? Use the family's base: net cash flow for commercial and multifamily, other bases where the family rules say so.
- 1.2495x shows as 1.25x. Does it pass a 1.25x minimum? No. Compare at full precision; it fails.

**Key takeaways.**

- Coverage = income ÷ annual debt service.
- Below 1.00x, income cannot pay the debt.
- Compare with the minimum before any rounding.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan.

| Input | Value | Source |
| --- | --- | --- |
| Stabilized net cash flow | $434,000 | Running Deals |
| Annual debt service on $3,900,000 | $330,772.68 | Running Deals |

1. Divide: $434,000 ÷ $330,772.68 = 1.3121…
2. Display: 1.31x. It clears the 1.30x minimum for this loan, but only just.

Result: **1.31x (1.3121)**

**Related formulas.** F-CORE-03 (Annual debt service (ADS)), F-CORE-10 (Net operating income (NOI)), F-CORE-12 (Break-even occupancy), F-CORE-17 (Maximum loan by DSCR)

**Concepts.** TM-13 (Cash-flow coverage and break-even)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Coverage 1.31x (1.3121) = 1.31x (1.3121) (Library test 2; Running Deals, Birchwood Plaza (1.31x)). Excel formula recalculated in LibreOffice: B3 1.3121, matches. Fixtures recomputed independently: test 1 1.25x; test 2 1.31x (1.3121); test 3 1.2495 → displays 1.25x but FAILS a 1.25x minimum, all match fixtures.json.

## F-CORE-12: Break-even occupancy

**What it is.** Break-even occupancy is the share of gross rent needed to pay expenses and debt service. It answers: how empty can the property get before it cannot pay its bills?

**Analogy.** It is the number of seats the theatre must sell to cover the lights and the loan.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| OpEx | Operating expenses | Underwritten yearly expenses. | US dollars a year | T-12 operating statement (DOC-02) |
| ADS | Annual debt service | Twelve rounded monthly payments. | US dollars a year | Promissory note and loan agreement excerpt (DOC-25) |
| GPR | Gross potential income | Scheduled income if fully leased. | US dollars a year | Rent roll (DOC-01) |

**In Excel.**

Formula: `=(B1+B2)/B3`

| Cell | Holds |
| --- | --- |
| B1 | Operating expenses ($204,000) |
| B2 | Annual debt service ($330,772.68) |
| B3 | Gross potential income ($720,000) |
| B4 | Break-even occupancy: =(B1+B2)/B3 |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Lower is safer. The cushion is actual occupancy minus break-even. There is no policy limit; it gives context for the vacancy rules in the Model Credit Policy, Rules for all commercial loans.

**Common slips.**

- Can I leave out debt service? No. That gives operating break-even only, which hides the loan's risk.
- Which occupancy do I compare? Economic occupancy, which counts unpaid rent as empty.

**Key takeaways.**

- Break-even = (expenses + debt service) ÷ gross potential income.
- The cushion is occupancy minus break-even.
- Above 100% means the property cannot break even even when full.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza stabilized figures; result from the library's test 2.

| Input | Value | Source |
| --- | --- | --- |
| Expenses | $204,000 | Running Deals |
| Annual debt service | $330,772.68 | Running Deals |
| Gross potential income | $720,000 | Running Deals |

1. Add the yearly costs: $204,000 + $330,772.68 = $534,772.68.
2. Divide by gross potential income: $534,772.68 ÷ $720,000 = 0.74274…
3. Display: 74.3%. Birchwood is 93% leased at stabilization, well above it.

Result: **74.3%**

**Related formulas.** F-CORE-07 (Gross potential rent (GPR)), F-CORE-03 (Annual debt service (ADS)), F-CORE-11 (Debt service coverage ratio (DSCR))

**Concepts.** TM-13 (Cash-flow coverage and break-even)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Break-even occupancy 74.3% = 74.3% (Library test 2). Excel formula recalculated in LibreOffice: B4 74.3%, matches. Fixtures recomputed independently: test 1 86.7%; test 2 74.3%; test 3 103.8%, all match fixtures.json.

## F-CORE-13: Capitalization rate

*Library name: Capitalization (cap) rate.*

**What it is.** The cap rate links a property's income to its value. It answers: what yield does the price give, or what is the income worth? Value = net operating income ÷ cap rate.

**Analogy.** It is the interest rate on a savings account, read backwards to find the balance.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| NOI | Net operating income | Yearly income before debt service. | US dollars a year | Appraisal excerpt (DOC-03) |
| V | Value | The appraised value for the same income state (as-is or stabilized). | US dollars | Appraisal excerpt (DOC-03) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Stabilized net operating income ($480,000) |
| B2 | As-stabilized value ($6,000,000) |
| B3 | Cap rate: =B1/B2 |

Rounding: For value from a cap rate, use =B1/rate. Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** A lower cap rate means a higher value for the same income, and less room if rates rise. The appraiser sets the rate; see the Model Credit Policy, Third-party reports. Match the income state to the value state.

**Common slips.**

- Can I cap next year's income and call it today's value? No. That is a stabilized value, not an as-is value.
- What if the cap rate is below the loan constant? Then debt costs more than the property yields. That is negative leverage.

**Key takeaways.**

- Cap rate = net operating income ÷ value.
- Lower cap rate, higher value.
- Use as-is income with as-is value and stabilized with stabilized.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza valuation.

| Input | Value | Source |
| --- | --- | --- |
| Stabilized net operating income | $480,000 | Running Deals |
| As-stabilized value | $6,000,000 | Running Deals: appraisal |

1. Divide: $480,000 ÷ $6,000,000 = 0.08.
2. Display: 8.00%.

Result: **8.00%**

**Related formulas.** F-CORE-10 (Net operating income (NOI)), F-CORE-14 (Loan-to-value (LTV)), F-CORE-44 (Cash-on-cash return (SUGGESTED)), F-CORE-04 (Loan constant)

**Concepts.** TM-14 (Discounted cash flow, cost of capital and cap rates)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Cap rate 8.00% = 8.00% (Running Deals, Birchwood Plaza); Value at 8.00% $6,000,000.00 = $6,000,000.00 (Library test 2). Excel formula recalculated in LibreOffice: B3 8.00%, matches. Fixtures recomputed independently: test 1 7.00%; test 2 $6,000,000.00; test 3 6.00%, all match fixtures.json.

## F-CORE-14: Loan-to-value

*Library name: Loan-to-value (LTV).*

**What it is.** Loan-to-value is the loan as a share of the property's value. It answers: how much of the property does the lender fund, and how big is the owner's cushion? On a purchase, value is the lower of price and appraisal.

**Analogy.** It is how much of the house the bank owns on day one.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Loan amount | The amount being tested, such as the initial funding. | US dollars | Term sheet (DOC-14) |
| Price | Purchase price | The contract price on an acquisition. | US dollars | Purchase contract and chain of title (DOC-05) |
| Appraisal | Appraised value | The appraiser's value for the same state (as-is or stabilized). | US dollars | Appraisal excerpt (DOC-03) |

**In Excel.**

Formula: `=B1/MIN(B2,B3)`

| Cell | Holds |
| --- | --- |
| B1 | Initial funding ($2,860,000) |
| B2 | Purchase price ($4,400,000) |
| B3 | As-is appraisal ($4,500,000) |
| B4 | Loan-to-value: =B1/MIN(B2,B3) |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Lower is safer, because the owner has more equity to lose first. Limits are in the Model Credit Policy, for example Commercial bridge by property type. A result exactly at the limit passes.

**Common slips.**

- The appraisal is above the price. Can I use it? No. On a purchase, use the lower of price and appraisal.
- Can I mix as-is and stabilized figures? No. Test as-is loan against as-is value, and stabilized against stabilized.

**Key takeaways.**

- Loan-to-value = loan ÷ value.
- On a purchase, value = lower of price and appraisal.
- Compare with the limit at full precision.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza bridge term sheet.

| Input | Value | Source |
| --- | --- | --- |
| Initial funding | $2,860,000 | Running Deals |
| Price | $4,400,000 | Running Deals |
| As-is appraisal | $4,500,000 | Running Deals |

1. Pick the value: the lower of $4,400,000 and $4,500,000 is $4,400,000.
2. Divide: $2,860,000 ÷ $4,400,000 = 0.65.
3. Display: 65.0%, exactly at the 65% as-is limit for unanchored retail, so it passes.

Result: **65.0%**

**Related formulas.** F-CORE-15 (Loan-to-cost (LTC)), F-CORE-19 (Maximum loan (lowest of all tests)), F-CORE-13 (Capitalization (cap) rate)

**Concepts.** TM-21 (Commercial mortgage underwriting: several tests and the binding constraint)

**Legal tags (Audit mode only).** [VERIFY: 12 CFR 365 (FDIC real estate lending standards), value definition; checked 20 Nov 2026]

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Loan-to-value 65.0% = 65.0% (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B4 65.0%, matches. Fixtures recomputed independently: test 1 70.0%; test 2 65.0%; test 3 65.0%, all match fixtures.json.

## F-CORE-15: Loan-to-cost

*Library name: Loan-to-cost (LTC).*

**What it is.** Loan-to-cost is the total loan as a share of the total project cost. It answers: how much of the project does the lender pay for? It matters most when value depends on work not yet done.

**Analogy.** It is the share of the restaurant bill your friend pays.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| C | Total commitment | The whole loan, including future funding for capex or rehab. | US dollars | Term sheet (DOC-14) |
| Cost_total | Total project cost | Price plus closing costs, hard and soft costs and reserves. | US dollars | Hard and soft cost budget, with the purchase contract and settlement statement (DOC-16) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Total commitment ($3,520,000) |
| B2 | Total project cost ($5,180,000) |
| B3 | Loan-to-cost: =B1/B2 |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Lower is safer, because the borrower funds more of the project. Limits are in the Model Credit Policy, for example Commercial bridge by property type. Use the full commitment, not the first advance.

**Common slips.**

- Can I put the interest reserve in the loan but not the cost? No. Anything the loan funds must also sit in cost.
- Do I use the first advance? No. Use the total commitment, including future funding.

**Key takeaways.**

- Loan-to-cost = total commitment ÷ total project cost.
- Count every cost the loan funds.
- It guards against lending on value the work has not yet created.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza sizing.

| Input | Value | Source |
| --- | --- | --- |
| Total commitment | $3,520,000 | Running Deals: $2,860,000 + $660,000 |
| Total cost | $5,180,000 | Running Deals: price, closing, capex, TI/LC |

1. Divide: $3,520,000 ÷ $5,180,000 = 0.67953…
2. Display: 68.0%. The limit is 70%, so it passes.

Result: **68.0%**

**Related formulas.** F-CORE-14 (Loan-to-value (LTV)), F-CORE-19 (Maximum loan (lowest of all tests))

**Concepts.** TM-21 (Commercial mortgage underwriting: several tests and the binding constraint)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Loan-to-cost 68.0% = 68.0% (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B3 68.0%, matches. Fixtures recomputed independently: test 1 75.0%; test 2 68.0%; test 3 65.0%, all match fixtures.json.

## F-CORE-16: Debt yield

**What it is.** Debt yield is the property's income as a share of the loan. It answers: if the lender took the property today, what return would it earn on its money? Rates and amortization do not change it.

**Analogy.** It is the rent you would collect on the money you lent if you had to take the keys.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| NOI | Income | Net operating income, or net cash flow where the family rules require it. | US dollars a year | T-12 operating statement and rent roll, as underwritten in the credit memo (DOC-02) |
| L | Loan amount | The amount being tested, for example the initial funding. | US dollars | Term sheet (DOC-14) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | In-place net cash flow ($395,000) |
| B2 | Initial funding ($4,340,000) |
| B3 | Debt yield: =B1/B2 |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Higher is safer. Minimums are in the Model Credit Policy, for example Value-add bridge and stabilized bridge. Match the income state to the loan amount you test.

**Common slips.**

- Which income do I use? Net cash flow for multifamily and commercial, unless the family rules say otherwise.
- Can I divide today's income by the fully funded loan? Only if the test says so. Pair in-place income with the in-place loan.

**Key takeaways.**

- Debt yield = income ÷ loan.
- It ignores rate and amortization.
- Higher is safer.

**Worked example (Cedar Court).** Basis: Running Deals, Cedar Court underwriting.

| Input | Value | Source |
| --- | --- | --- |
| In-place net cash flow | $395,000 | Running Deals |
| Initial funding | $4,340,000 | Running Deals |

1. Divide: $395,000 ÷ $4,340,000 = 0.091013…
2. Display: 9.10%. The as-is minimum is 7.0%, so it passes.

Result: **9.10%**

**Related formulas.** F-CORE-18 (Maximum loan by debt yield), F-CORE-10 (Net operating income (NOI)), F-CORE-19 (Maximum loan (lowest of all tests))

**Concepts.** TM-21 (Commercial mortgage underwriting: several tests and the binding constraint)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Debt yield 9.10% = 9.10% (Running Deals, Cedar Court). Excel formula recalculated in LibreOffice: B3 9.10%, matches. Fixtures recomputed independently: test 1 10.00%; test 2 12.33%; test 3 8.88%, all match fixtures.json.

## F-CORE-17: Maximum loan by coverage

*Library name: Maximum loan by DSCR.*

**What it is.** This is the largest loan the property's income can support at the minimum coverage ratio. It answers: how much can we lend before payments eat too much of the income?

**Analogy.** It is the biggest rent you can afford if rent must stay under a set share of your pay.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| NOI | Income | Net operating income, or net cash flow where the family rules require it. | US dollars a year | T-12 operating statement and rent roll, as underwritten in the credit memo (DOC-02) |
| DSCR_min | Minimum coverage | The lowest coverage ratio the policy allows for this loan. | times (x) | Model Credit Policy, Term loans, small-balance commercial DSCR and single-tenant NNN |
| K | Loan constant | Annual debt service per dollar of loan at the loan's rate and amortization. | decimal | Take-out lender quote or term sheet (rate and amortization) (DOC-59) |

**In Excel.**

Formula: `=B1/B2/(B3/B4)`

| Cell | Holds |
| --- | --- |
| B1 | Net cash flow ($434,000) |
| B2 | Minimum coverage (1.30) |
| B3 | Annual debt service on the test loan ($330,772.68) |
| B4 | Test loan ($3,900,000) |
| B5 | Maximum loan: =B1/B2/(B3/B4) |

Rounding: B3/B4 is the unrounded loan constant. Keep B5 unrounded; the final loan is rounded down to the nearest $1,000 only after all tests.

**How to read the result.** A bigger result means more room on this test. The final loan is the lowest of all the tests. The minimum coverage is set in the Model Credit Policy, for example Term loans, small-balance commercial DSCR and single-tenant NNN.

**Common slips.**

- Can I round the constant first? No. Rounding it moves the loan by thousands of dollars.
- Can I divide by coverage × note rate? Only for interest-only loans. Amortizing loans need the full constant.

**Key takeaways.**

- Maximum loan = income ÷ minimum coverage ÷ loan constant.
- Use the unrounded constant.
- Round down to $1,000 only after the lowest test is chosen.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan sizing.

| Input | Value | Source |
| --- | --- | --- |
| Net cash flow | $434,000 | Running Deals |
| Minimum coverage | 1.30x | Running Deals |
| Loan constant | $330,772.68 ÷ $3,900,000 | Running Deals |

1. Income allowed for debt: $434,000 ÷ 1.30 = $333,846.15…
2. Constant: $330,772.68 ÷ $3,900,000 = 0.0848135…
3. Loan: $333,846.15… ÷ 0.0848135… = $3,936,238.02.

Result: **$3,936,238.02**

**Related formulas.** F-CORE-04 (Loan constant), F-CORE-11 (Debt service coverage ratio (DSCR)), F-CORE-18 (Maximum loan by debt yield), F-CORE-19 (Maximum loan (lowest of all tests))

**Concepts.** TM-21 (Commercial mortgage underwriting: several tests and the binding constraint)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Maximum loan by coverage $3,936,238.02 = $3,936,238.02 (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B5 $3,936,238.02, matches. Fixtures recomputed independently: test 1 $1,050,000.00; test 2 $3,936,238.02; test 3 $3,795,257.21, all match fixtures.json.

## F-CORE-18: Maximum loan by debt yield

**What it is.** This is the largest loan that still meets the minimum debt yield. It answers: how much can we lend if the property's income must be a set share of the loan? Rates do not affect it.

**Analogy.** It is a speed limit that does not care what car you drive.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| NOI | Income | Net operating income, or net cash flow where the family rules require it. | US dollars a year | T-12 operating statement and rent roll, as underwritten in the credit memo (DOC-02) |
| DY_min | Minimum debt yield | The lowest debt yield the policy allows for this loan. | percent | Model Credit Policy, Term loans, small-balance commercial DSCR and single-tenant NNN |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Net cash flow ($434,000) |
| B2 | Minimum debt yield (9.0%) |
| B3 | Maximum loan: =B1/B2 |

Rounding: Keep B3 unrounded; round the final loan down to $1,000 only after choosing the lowest test.

**How to read the result.** A bigger result means more room on this test. It caps the loan even when rates are low. The minimum is in the Model Credit Policy, for example Term loans, small-balance commercial DSCR and single-tenant NNN.

**Common slips.**

- Can I use a stabilized minimum against today's income? No. Match the minimum to the income state it was set for.
- Is net operating income always the base? No. Multifamily and commercial use net cash flow.

**Key takeaways.**

- Maximum loan = income ÷ minimum debt yield.
- Interest rates do not move it.
- It is one of the tests in the lowest-of sizing.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan sizing.

| Input | Value | Source |
| --- | --- | --- |
| Net cash flow | $434,000 | Running Deals |
| Minimum debt yield | 9.0% | Running Deals |

1. Divide: $434,000 ÷ 9.0% = $4,822,222.22.
2. Running Deals rounds it for display to $4,822,222.

Result: **$4,822,222.22**

**Related formulas.** F-CORE-16 (Debt yield), F-CORE-17 (Maximum loan by DSCR), F-CORE-19 (Maximum loan (lowest of all tests))

**Concepts.** TM-21 (Commercial mortgage underwriting: several tests and the binding constraint)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Maximum loan by debt yield $4,822,222.22 = $4,822,222.22 (Library test 2; Running Deals shows $4,822,222). Excel formula recalculated in LibreOffice: B3 $4,822,222.22, matches. Fixtures recomputed independently: test 1 $1,000,000.00; test 2 $4,822,222.22; test 3 $8,000,000.00, all match fixtures.json.

## F-CORE-19: Maximum loan (lowest of all tests)

**What it is.** The final loan is the lowest result of every sizing test that applies. It answers: which limit binds, and how much can we lend? The memo must name the binding test.

**Analogy.** It is like a convoy: it moves at the speed of its slowest truck.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L_LTV, L_LTC, L_DSCR, L_DY | Each test result | The maximum loan from each test: value, cost, coverage and debt yield, as the family requires. | US dollars | Credit memo (DOC-42) |

**In Excel.**

Formula: `=ROUNDDOWN(MIN(B1:B3),-3)`

| Cell | Holds |
| --- | --- |
| B1 | Value test: 65% × $6,000,000 ($3,900,000) |
| B2 | Coverage test ($3,936,238.02) |
| B3 | Debt-yield test ($4,822,222.22) |
| B4 | Loan: =ROUNDDOWN(MIN(B1:B3),-3) |

Rounding: ROUNDDOWN to the nearest $1,000 is the sizing rule, not display rounding. Never round up past any test.

**How to read the result.** The lowest test is the binding one; name it in the credit memo. The Model Credit Policy, Pricing structure rounds the loan down to the nearest $1,000. Family rules list which tests apply.

**Common slips.**

- This test usually does not bind. Can I skip it? No. Run every test that applies, every time.
- Can I round up to a nicer number? No. Round down, so no test is breached.

**Key takeaways.**

- Loan = lowest of the applicable tests.
- Round down to the nearest $1,000, never up.
- Name the binding test in the memo.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan sizing.

| Input | Value | Source |
| --- | --- | --- |
| Value test | $3,900,000 | Running Deals: 65% × $6,000,000 |
| Coverage test | $3,936,238.02 | Running Deals |
| Debt-yield test | $4,822,222.22 | Running Deals |

1. Find the lowest: $3,900,000 (value test).
2. Round down to $1,000: $3,900,000.00. Value binds.

Result: **$3,900,000.00; the value test binds**

**Related formulas.** F-CORE-14 (Loan-to-value (LTV)), F-CORE-15 (Loan-to-cost (LTC)), F-CORE-17 (Maximum loan by DSCR), F-CORE-18 (Maximum loan by debt yield)

**Concepts.** TM-21 (Commercial mortgage underwriting: several tests and the binding constraint)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Loan $3,900,000.00 = $3,900,000.00 (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B4 $3,900,000.00, matches. Fixtures recomputed independently: test 1 $1,000,000.00; test 2 $3,900,000.00; test 3 $2,468,000.00, all match fixtures.json.

## F-CORE-20: Interest reserve

*Library name: Interest reserve (straight-line).*

**What it is.** An interest reserve is loan money held back to pay interest for a set period. It answers: how much must we set aside so interest is paid while the property earns too little?

**Analogy.** It is like prepaying six months of a phone plan before you start a new job.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Funded balance | The balance the reserve covers interest on. | US dollars | Term sheet (DOC-14) |
| r | Annual note rate | The yearly rate in the note, or the cap strike plus margin for a floating loan. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| d | Days covered | Actual calendar days in the reserve period. | days | Term sheet (DOC-14) |

**In Excel.**

Formula: `=B1*B2/360*B3`

| Cell | Holds |
| --- | --- |
| B1 | Funded balance ($500,000) |
| B2 | Annual rate (10.00%) |
| B3 | Actual days covered (182) |
| B4 | Reserve: =B1*B2/360*B3 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** A bigger reserve protects the lender longer, but adds to the loan. Reserve rules are in the Model Credit Policy, for example Commercial bridge by property type. This straight-line version suits a fully funded balance.

**Common slips.**

- Can I count six months as 180 days? No. Count actual days; six months are often 181 to 184 days.
- The loan has draws. Is the first balance enough? No. Draws raise the balance, so size on the expected balance.

**Key takeaways.**

- Reserve = balance × rate ÷ 360 × actual days.
- Count actual days, not 30 per month.
- Construction loans use an average-balance version.

**Worked example (no running deal).** Basis: Library test 1 (no running-deal case uses a straight-line reserve).

| Input | Value | Source |
| --- | --- | --- |
| Funded balance | $500,000 | Library test 1 |
| Rate | 10.00% | Library test 1 |
| Days | 182 | Library test 1 |

1. Daily interest: $500,000 × 10.00% ÷ 360 = $138.888…
2. Reserve: $138.888… × 182 = $25,277.777…
3. Round to the cent: $25,277.78. Using 180 days would give $25,000.00, too little.

Result: **$25,277.78**

**Related formulas.** F-CORE-01 (Interest-only payment (Actual/360)), F-CORE-05 (Per diem interest)

**Concepts.** TM-27 (Interest during construction)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Interest reserve $25,277.78 = $25,277.78 (Library test 1). Excel formula recalculated in LibreOffice: B4 $25,277.78, matches. Fixtures recomputed independently: test 1 $25,277.78; test 2 $120,596.67; test 3 $9,775.00, all match fixtures.json.

## F-CORE-21: Months of reserves

**What it is.** Months of reserves shows how many monthly payments the guarantor's usable cash could cover. It answers: how long could the borrower keep paying if the property stopped paying?

**Analogy.** It is how many months your savings would cover rent if you lost your job.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| LA_adj | Adjusted liquid assets | Cash and investments after policy haircuts and cash to close. | US dollars | Bank and brokerage statements (DOC-11) |
| P_month | Monthly payment | The payment the rule names: principal, interest, taxes, insurance and dues, or interest only. | US dollars a month | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Adjusted liquid assets ($60,000) |
| B2 | Monthly payment ($5,000) |
| B3 | Months of reserves: =B1/B2 |

Rounding: Compare B3 with the required months at full precision. Format one decimal only for display.

**How to read the result.** More months is safer. Required months are set by family, for example in the Model Credit Policy, DSCR rental loans. Use the payment the rule names.

**Common slips.**

- Can I use the account balances as listed? No. Apply the policy haircuts and take off cash to close first.
- The rule says full payment with taxes and insurance. Can I use principal and interest only? No. That overstates the months.

**Key takeaways.**

- Months = adjusted liquid assets ÷ monthly payment.
- Use haircut liquidity, after cash to close.
- Use the payment the rule names.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals states no months-of-reserves result).

| Input | Value | Source |
| --- | --- | --- |
| Adjusted liquid assets | $60,000 | Library test 1 |
| Monthly payment | $5,000 | Library test 1 |

1. Divide: $60,000 ÷ $5,000 = 12.
2. Display: 12.0 months.

Result: **12.0 months**

**Related formulas.** F-CORE-24 (Adjusted liquid assets), F-CORE-25 (Required post-closing liquidity)

**Concepts.** TM-17 (Guaranty value and wrong-way risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Months of reserves 12.0 months = 12.0 months (Library test 1). Excel formula recalculated in LibreOffice: B3 12.0, matches. Fixtures recomputed independently: test 1 12.0 months; test 2 6.0 months; test 3 6.6 months, all match fixtures.json.

## F-CORE-22: Extension fee

**What it is.** The extension fee is what the borrower pays to push back the maturity date. It answers: what does more time cost? It is a percent of the commitment, or of the balance if the note says so.

**Analogy.** It is the late-checkout fee for keeping the hotel room past noon.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| C | Commitment | The total commitment, or the balance if the note says so. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| f | Fee rate | The extension fee as a percent. Half a point is 0.50%. | percent | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1*B2`

| Cell | Holds |
| --- | --- |
| B1 | Total commitment ($340,000) |
| B2 | Fee rate (0.50%) |
| B3 | Extension fee: =B1*B2 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** It is a fee, not a test, so there is no safer direction. The fee is due only if every extension test passes. The rules are in the Model Credit Policy, Extensions and default.

**Common slips.**

- The rule says commitment. Can I use the balance? No. Use the base the rule or note names.
- Can I take the fee before the progress test? No. A failed test means no extension and no fee.

**Key takeaways.**

- Fee = commitment × fee rate.
- Pass the extension tests first.
- Use the base the note names.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run month-12 extension.

| Input | Value | Source |
| --- | --- | --- |
| Total commitment | $340,000 | Running Deals |
| Fee | 0.50 point | Running Deals |

1. Check the tests: no default, payments current, 100% complete. The extension is allowed.
2. Fee: $340,000 × 0.50% = $1,700.00.

Result: **$1,700.00**

**Related formulas.** F-CORE-06 (Origination points)

**Concepts.** TM-23 (Refinance and extension risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Extension fee $1,700.00 = $1,700.00 (Running Deals, Maple Run; library test 1). Excel formula recalculated in LibreOffice: B3 $1,700.00, matches. Fixtures recomputed independently: test 1 $1,700.00; test 2 $8,800.00; test 3 $25,700.00, all match fixtures.json.

## F-CORE-23: Loss severity

**What it is.** Loss severity is the loss on a defaulted loan as a share of its balance. It answers: of every dollar owed at default, how much does the lender lose after selling the property and paying costs?

**Analogy.** It is the share of a dropped cake you cannot save.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| B | Balance at default | Principal owed when the loan defaults. | US dollars | Loan servicing report (DOC-34) |
| Costs | Resolution costs | Legal, carrying, accrued interest and sale costs. | US dollars | Updated valuation for resolution and the servicing ledger (DOC-41) |
| Recovery | Net recovery | Sale proceeds after the sale costs. | US dollars | Updated valuation for resolution (DOC-41) |

**In Excel.**

Formula: `=MAX(0,(B1+B2-B3)/B1)`

| Cell | Holds |
| --- | --- |
| B1 | Balance at default ($500,000) |
| B2 | Resolution costs ($40,000) |
| B3 | Net recovery ($430,000) |
| B4 | Loss severity: =MAX(0,(B1+B2-B3)/B1) |

Rounding: MAX(0, …) reports a gain as a 0% loss; show any gain in its own cell. Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Lower is better. It feeds recourse, pricing and reserve judgements. The workout rules in the Model Credit Policy, Extensions and default compare options by net loss.

**Common slips.**

- Can I leave out accrued interest and carry costs? No. They are part of the loss.
- Gross or net sale price? Net. Take off broker and closing costs first.

**Key takeaways.**

- Severity = (balance + costs − net recovery) ÷ balance.
- Include every cost of getting the money back.
- A gain is reported as a 0% loss, with the gain shown apart.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals has no default resolution).

| Input | Value | Source |
| --- | --- | --- |
| Balance at default | $500,000 | Library test 1 |
| Costs | $40,000 | Library test 1 |
| Net recovery | $430,000 | Library test 1 |

1. Total owed plus costs: $500,000 + $40,000 = $540,000.
2. Loss: $540,000 − $430,000 = $110,000.
3. Severity: $110,000 ÷ $500,000 = 22.0%.

Result: **22.0%**

**Related formulas.** F-CORE-42 (REO carrying value and charge-off (SUGGESTED)), F-CORE-31 (Default interest (SUGGESTED))

**Concepts.** TM-32 (Loss severity and recovery timing), TM-35 (Workout economics), TM-37 (Lifetime expected loss and the allowance), TM-38 (Bankruptcy and bankruptcy-remote borrowers)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Loss severity 22.0% = 22.0% (Library test 1). Excel formula recalculated in LibreOffice: B4 22.0%, matches. Fixtures recomputed independently: test 1 22.0%; test 2 19.3%; test 3 −9.4% → report 0.0% loss, all match fixtures.json.

## F-CORE-24: Adjusted liquid assets

**What it is.** Adjusted liquid assets is the guarantor's usable cash after policy haircuts and cash to close. It answers: how much real money is left after closing to support the loan?

**Analogy.** It is your wallet after the bank marks your shares down and you pay for the house.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| Cash | Cash | Bank balances, counted in full. | US dollars | Bank and brokerage statements (DOC-11) |
| Sec | Listed securities | Stocks and bonds in a brokerage account, counted at 70%. | US dollars | Bank and brokerage statements (DOC-11) |
| Ret | Vested retirement | Vested retirement balances, counted at 70%. | US dollars | Bank and brokerage statements (DOC-11) |
| HELOC | Unused credit lines | Undrawn credit lines, counted at 0%. | US dollars | Personal financial statement and schedule of real estate owned (DOC-10) |
| CTC | Cash to close | Cash the borrower brings to closing. | US dollars | Settlement statement (DOC-28) |

**In Excel.**

Formula: `=B1+0.7*B2+0.7*B3+0*B4-B5`

| Cell | Holds |
| --- | --- |
| B1 | Cash ($95,000) |
| B2 | Brokerage account ($40,000) |
| B3 | Vested 401(k) ($60,000) |
| B4 | Unused HELOC ($75,000) |
| B5 | Cash to close ($74,100) |
| B6 | Adjusted liquid assets: =B1+0.7*B2+0.7*B3+0*B4-B5 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** Higher is safer. Compare it with the required post-closing liquidity. Haircuts are set in the Model Credit Policy, Liquidity, net worth and experience tiers.

**Common slips.**

- Is an unused credit line liquid? No. It is borrowed money and counts at 0%.
- Did I take off cash to close? Liquidity must be what is left after closing.

**Key takeaways.**

- Cash 100%, securities 70%, retirement 70%, credit lines 0%.
- Subtract cash to close.
- Compare with required liquidity.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run underwriting (Dana Reyes).

| Input | Value | Source |
| --- | --- | --- |
| Cash | $95,000 | Running Deals |
| Brokerage | $40,000 | Running Deals |
| Vested 401(k) | $60,000 | Running Deals |
| Unused HELOC | $75,000 | Running Deals |
| Cash to close | $74,100 | Running Deals: term sheet |

1. Haircut: $40,000 × 0.70 = $28,000; $60,000 × 0.70 = $42,000; HELOC $0.
2. Add: $95,000 + $28,000 + $42,000 = $165,000.
3. Less cash to close: $165,000 − $74,100 = $90,900.00.

Result: **$90,900.00**

**Related formulas.** F-CORE-25 (Required post-closing liquidity), F-CORE-21 (Months of reserves), F-CORE-26 (Adjusted net worth)

**Concepts.** TM-17 (Guaranty value and wrong-way risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Adjusted liquid assets $90,900.00 = $90,900.00 (Running Deals, Maple Run ($90,900)); After prepaid interest of $1,161.67 $89,738.33 = $89,738.33 (Running Deals, Maple Run closing). Excel formula recalculated in LibreOffice: B6 $90,900.00, matches. Fixtures recomputed independently: test 1 $90,200.00; test 2 $760,000.00; test 3 −$13,000.00, all match fixtures.json.

## F-CORE-25: Required post-closing liquidity

**What it is.** This is the minimum usable cash a guarantor must hold after closing. It answers: is the guarantor strong enough to carry the loan through trouble? It is the greater of 10% of the commitment or 6 months' interest, plus an add-on.

**Analogy.** It is the rainy-day fund a landlord wants to see before handing over the keys.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| C | Total commitment | The full loan amount. | US dollars | Term sheet (DOC-14) |
| r | Note rate | The yearly rate; the test uses 6 × commitment × rate ÷ 12. | percent a year | Term sheet (DOC-14) |
| O | Other open commitments with us | The guarantor's other open loan commitments with this lender. | US dollars | Portfolio concentration report (DOC-45) |

**In Excel.**

Formula: `=MAX(0.1*B1,6*B1*B2/12)+0.05*B3`

| Cell | Holds |
| --- | --- |
| B1 | Total commitment ($340,000) |
| B2 | Note rate (10.25%) |
| B3 | Other open commitments ($0) |
| B4 | Required liquidity: =MAX(0.1*B1,6*B1*B2/12)+0.05*B3 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** The guarantor's adjusted liquid assets must be at least this figure. A larger surplus is safer. The rule is in the Model Credit Policy, Liquidity, net worth and experience tiers.

**Common slips.**

- Should the 6 months use actual days? No. The test uses plain months: commitment × rate ÷ 12.
- The guarantor has other loans with us. Do they matter? Yes. Add 5% of those open commitments.

**Key takeaways.**

- Required = greater of 10% of commitment or 6 months' interest, plus 5% of other commitments.
- Compare with adjusted liquid assets.
- Use plain months for the interest leg.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run underwriting.

| Input | Value | Source |
| --- | --- | --- |
| Commitment | $340,000 | Running Deals |
| Note rate | 10.25% | Running Deals |
| Other open commitments | $0 | Running Deals: none |

1. 10% leg: $340,000 × 10% = $34,000.
2. Interest leg: 6 × $340,000 × 10.25% ÷ 12 = $17,425.
3. Take the greater, $34,000, and add 5% × $0: $34,000.00.
4. Dana has $90,900, so she passes by $56,900.

Result: **$34,000.00**

**Related formulas.** F-CORE-24 (Adjusted liquid assets), F-CORE-26 (Adjusted net worth)

**Concepts.** TM-17 (Guaranty value and wrong-way risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Required liquidity $34,000.00 = $34,000.00 (Running Deals, Maple Run ($34,000)); Interest leg $17,425.00 = $17,425.00 (Running Deals, Maple Run ($17,425)). Excel formula recalculated in LibreOffice: B4 $34,000.00, matches. Fixtures recomputed independently: test 1 $64,000.00; test 2 $352,000.00; test 3 $514,000.00, all match fixtures.json.

## F-CORE-26: Adjusted net worth

**What it is.** Adjusted net worth is what the guarantor owns minus what they owe, leaving out equity in the property being financed. It answers: what is behind the guaranty if the property fails?

**Analogy.** It is your net worth without counting the house you are asking the bank to lend on.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| A | Total assets | Documented assets on the personal financial statement. | US dollars | Personal financial statement and schedule of real estate owned (DOC-10) |
| Lb | Total liabilities | All debts on the personal financial statement and credit report. | US dollars | Personal financial statement and schedule of real estate owned (DOC-10) |
| E_subj | Equity in the subject property | The guarantor's equity in the property this loan finances. | US dollars | Personal financial statement and schedule of real estate owned (DOC-10) |

**In Excel.**

Formula: `=B1-B2-B3`

| Cell | Holds |
| --- | --- |
| B1 | Total assets ($1,150,000) |
| B2 | Total liabilities ($610,000) |
| B3 | Equity in the subject property ($0) |
| B4 | Adjusted net worth: =B1-B2-B3 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** Higher is safer. The Model Credit Policy, Liquidity, net worth and experience tiers sets the minimum as a share of the commitment. Residential needs 25%; multifamily and commercial need 100%.

**Common slips.**

- Can I count equity in the property we are lending on? No. If the loan fails, that equity is gone too.
- Can I use stated figures? No. Use documented assets and liabilities.

**Key takeaways.**

- Adjusted net worth = assets − liabilities − subject equity.
- Leave out the subject property's equity.
- Compare with the family minimum share of the commitment.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run underwriting (Dana Reyes).

| Input | Value | Source |
| --- | --- | --- |
| Total assets | $1,150,000 | Running Deals |
| Total liabilities | $610,000 | Running Deals |
| Subject equity | $0 | Running Deals: new purchase |

1. Subtract: $1,150,000 − $610,000 − $0 = $540,000.00.
2. Minimum: 25% × $340,000 = $85,000. She passes.

Result: **$540,000.00**

**Related formulas.** F-CORE-24 (Adjusted liquid assets), F-CORE-25 (Required post-closing liquidity)

**Concepts.** TM-17 (Guaranty value and wrong-way risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Adjusted net worth $540,000.00 = $540,000.00 (Running Deals, Maple Run ($540,000)); Residential minimum $85,000.00 = $85,000.00 (Running Deals, Maple Run ($85,000)). Excel formula recalculated in LibreOffice: B4 $540,000.00, matches. Fixtures recomputed independently: test 1 $400,000.00; test 2 $5,200,000.00; test 3 $500,000.00, all match fixtures.json.

## F-CORE-27: Experience count and tier

**What it is.** This counts the guarantor's qualifying past projects and sets their experience tier. It answers: has this sponsor done this before, often enough, with real ownership? The tier drives pricing and exposure caps.

**Analogy.** It is like counting only the flights where you were the pilot, not a passenger.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| t_p | Months since completion | Months since each project was sold, refinanced into a rental or met the hold test. | months | Experience verification pack: prior settlement statements and deeds (DOC-52) |
| own_p | Ownership share | The guarantor's share in each project's owning entity. | percent | Experience verification pack: prior settlement statements and deeds (DOC-52) |

**In Excel.**

Formula: `=COUNTIFS(B2:B8,"<=36",C2:C8,">=0.2")`

| Cell | Holds |
| --- | --- |
| B2:B8 | Months since each project was completed (one row per project) |
| C2:C8 | Guarantor's ownership share in each project |
| B10 | Count: =COUNTIFS(B2:B8,"<=36",C2:C8,">=0.2") |
| B11 | Tier: =LOOKUP(B10,{0,1,5,10},{0,1,2,3}) |

Rounding: Both tests are inclusive: exactly 36 months and exactly 20% count. The count is a whole number, so no rounding applies.

**How to read the result.** More qualifying projects mean a better tier, a lower rate and higher exposure caps. The rules are in the Model Credit Policy, Liquidity, net worth and experience tiers. Verify each project from settlement statements or deeds.

**Common slips.**

- She owned 15%. Does it count? No. Ownership must be at least 20%.
- It was sold 40 months ago. Does it count? No. The lookback is 36 months.

**Key takeaways.**

- Count projects completed in the last 36 months with at least 20% ownership.
- Tiers: 0, 1 to 4, 5 to 9, 10 or more.
- Verify every project from documents.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run originator review (Dana Reyes).

| Input | Value | Source |
| --- | --- | --- |
| Projects listed | 7 | Running Deals |
| Six flips | sold in the last 36 months, 50-100% owned | Running Deals |
| One flip | sold 14 months ago, 15% owned | Running Deals |

1. Six flips pass both tests.
2. The 15% flip fails the 20% ownership test.
3. Count = 6, which falls in 5 to 9: Tier 2.

Result: **6 projects; Tier 2**

**Related formulas.** F-CORE-28 (Note rate (RTL grid)), F-CORE-29 (Aggregate sponsor exposure)

**Concepts.** TM-20 (Risk-based pricing)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Count and tier 6; Tier 2 = 6; Tier 2 (Running Deals, Maple Run). Excel formula recalculated in LibreOffice: B10 6; B11 2, matches. Fixtures recomputed independently: test 1 4 → Tier 1; test 2 0 → Tier 0; test 3 11 → Tier 3, all match fixtures.json.

## F-CORE-28: Note rate from the pricing grid

*Library name: Note rate (RTL grid).*

**What it is.** This builds a residential bridge loan's rate from the pricing grid. It answers: what rate fits this sponsor and this deal? It is a base rate by tier plus risk add-ons, kept inside a floor and a ceiling.

**Analogy.** It is like a car insurance quote: a base price by driving record, plus surcharges for risk.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| b_tier | Tier base rate | The grid's base rate for the guarantor's experience tier. | percent a year | Model Credit Policy, Pricing structure |
| a_FICO | Credit score add-on | Added when the qualifying score is 680 to 699. | percent a year | Model Credit Policy, Pricing structure |
| a_lev | Leverage add-on | Added when leverage is within 2.5 points of the product maximum. | percent a year | Model Credit Policy, Pricing structure |
| a_GU | Ground-up add-on | Added for ground-up construction. | percent a year | Model Credit Policy, Pricing structure |

**In Excel.**

Formula: `=MIN(MAX(SUM(B1:B4),8.5%),12.75%)`

| Cell | Holds |
| --- | --- |
| B1 | Tier 2 base rate (10.00%) |
| B2 | Credit score add-on (0.00%; score 712) |
| B3 | Leverage add-on (0.25%) |
| B4 | Ground-up add-on (0.00%; rehab) |
| B5 | Note rate: =MIN(MAX(SUM(B1:B4),8.5%),12.75%) |

Rounding: Format to three decimals. No rounding is needed: the grid steps are exact.

**How to read the result.** A higher rate means the grid sees more risk. The final rate must stay between 8.50% and 12.75%. The grid is in the Model Credit Policy, Pricing structure.

**Common slips.**

- The score is 712. Does the credit add-on apply? No. It applies only to scores from 680 to 699.
- The add-ons sum to 13.00%. Can we charge it? No. The ceiling is 12.75%.

**Key takeaways.**

- Rate = tier base + add-ons, kept within 8.50% to 12.75%.
- Experience sets the base; risk sets the add-ons.
- Every rate is tested against state rules before the term sheet.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run term sheet.

| Input | Value | Source |
| --- | --- | --- |
| Tier | Tier 2: base 10.00% | Running Deals |
| Credit score | 712 (no add-on) | Running Deals |
| Leverage | loan-to-cost at the 85% cap: +0.25% | Running Deals |
| Project | rehab (no ground-up add-on) | Running Deals |

1. Add: 10.00% + 0.00% + 0.25% + 0.00% = 10.25%.
2. Bounds: 10.25% is between 8.50% and 12.75%, so it stands.

Result: **10.250%**

**Related formulas.** F-CORE-27 (Experience count and tier), F-CORE-06 (Origination points), F-CORE-40 (All-in annual cost screen (SUGGESTED))

**Concepts.** TM-20 (Risk-based pricing)

**Legal tags (Audit mode only).** [VERIFY: State Law Table, usury column for the deal's state; checked 20 Nov 2026]

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Note rate 10.250% = 10.250% (Running Deals, Maple Run). Excel formula recalculated in LibreOffice: B5 10.250%, matches. Fixtures recomputed independently: test 1 11.500%; test 2 9.500%; test 3 12.750% (capped), all match fixtures.json.

## F-CORE-29: Aggregate sponsor exposure

**What it is.** Sponsor exposure is the total of all loan commitments to one sponsor and its affiliates, including the new loan. It answers: how much do we already have riding on this person?

**Analogy.** It is the total you have lent one friend, not just today's request.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| C_new | New commitment | The commitment being approved. | US dollars | Term sheet (DOC-14) |
| C_open | Open commitments | Commitments on the sponsor's and affiliates' open loans with us. | US dollars | Portfolio concentration report (DOC-45) |

**In Excel.**

Formula: `=B1+SUM(B2:B5)`

| Cell | Holds |
| --- | --- |
| B1 | New commitment ($3,520,000) |
| B2:B5 | Open commitments to the sponsor and affiliates (none) |
| B6 | Exposure: =B1+SUM(B2:B5) |
| B7 | Tier cap ($3,000,000) |
| B8 | Within cap?: =IF(B6<=B7,"Yes","No: committee") |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** Lower exposure is safer. Caps by tier, in dollars and in open loans, are in the Model Credit Policy, Concentration, exceptions and approval authority. Above the cap, only committee can approve.

**Common slips.**

- Can I use outstanding balances? No. Use commitments, because undrawn amounts can still fund.
- Do affiliate entities count? Yes. Search for every entity the sponsor controls.

**Key takeaways.**

- Exposure = new commitment + all open commitments to the sponsor group.
- Use commitments, not balances.
- Over the tier cap means committee only.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza underwriting (Dana Whitlow).

| Input | Value | Source |
| --- | --- | --- |
| New commitment | $3,520,000 | Running Deals |
| Other loans with us | none | Running Deals |
| Tier 1 cap | $3,000,000 | Running Deals |

1. Add: $3,520,000 + $0 = $3,520,000.00.
2. Compare: $3,520,000 is above the $3,000,000 Tier 1 cap, so committee must approve.

Result: **$3,520,000.00; over the Tier 1 cap**

**Related formulas.** F-CORE-27 (Experience count and tier), F-CORE-30 (Bucket concentration), F-CORE-43 (Bucket headroom (SUGGESTED))

**Concepts.** TM-06 (Concentration risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Exposure $3,520,000.00 = $3,520,000.00 (Running Deals, Birchwood Plaza; library test 2). Excel formula recalculated in LibreOffice: B6 $3,520,000.00; B8 No: committee, matches. Fixtures recomputed independently: test 1 $940,000.00; test 2 $3,520,000.00 (over Tier 1 cap); test 3 $5,140,000.00 (over Tier 1 cap), all match fixtures.json.

## F-CORE-30: Bucket concentration

**What it is.** Bucket concentration is the share of the loan book in one product, state or market. It answers: are too many eggs in one basket? Each bucket has a cap.

**Analogy.** It is checking what share of your savings sits in one company's shares.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| C_bucket | Bucket commitments | Commitments in the bucket, including the new loan. | US dollars | Portfolio concentration report (DOC-45) |
| C_base | Base commitments | Total commitments for the base the cap uses, including the new loan. | US dollars | Portfolio concentration report (DOC-45) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Ground-up commitments ($5,000,000) |
| B2 | Residential commitments ($25,000,000) |
| B3 | Bucket share: =B1/B2 |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Lower is safer. Caps are in the Model Credit Policy, Concentration, exceptions and approval authority. A bucket over its cap takes no new loans without committee.

**Common slips.**

- Which base do I use? The one the cap names, for example residential commitments, not the whole book.
- Do I measure before or after the new loan? After. Add it to the bucket and to the base.

**Key takeaways.**

- Bucket share = bucket commitments ÷ base commitments.
- Include the new loan in both.
- A breached bucket needs committee.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals has no portfolio data).

| Input | Value | Source |
| --- | --- | --- |
| Ground-up commitments | $5,000,000 | Library test 1 |
| Residential commitments | $25,000,000 | Library test 1 |

1. Divide: $5,000,000 ÷ $25,000,000 = 0.20.
2. Display: 20.0%, under the 25% ground-up cap.

Result: **20.0%**

**Related formulas.** F-CORE-43 (Bucket headroom (SUGGESTED)), F-CORE-29 (Aggregate sponsor exposure)

**Concepts.** TM-06 (Concentration risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Bucket share 20.0% = 20.0% (Library test 1). Excel formula recalculated in LibreOffice: B3 20.0%, matches. Fixtures recomputed independently: test 1 20.0%; test 2 27.0%; test 3 15.0%, all match fixtures.json.

## F-CORE-31: Default interest

*Library name: Default interest (SUGGESTED).*

**What it is.** Default interest is interest at a higher rate while a loan is in default. It answers: what does a default cost the borrower each day? Our model rate is the note rate plus 5.00%, capped by state law.

**Analogy.** It is the penalty rate a credit card charges after you miss a payment.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Balance | Principal outstanding during the default. | US dollars | Loan servicing report (DOC-34) |
| r | Note rate | The regular yearly rate; the default rate adds 5.00%. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| d | Days in default | Actual days from the date the note names (missed payment or notice). | days | Default notice and pre-negotiation letter (DOC-40) |

**In Excel.**

Formula: `=B1*(B2+B3)/360*B4`

| Cell | Holds |
| --- | --- |
| B1 | Balance ($315,000) |
| B2 | Note rate (10.25%) |
| B3 | Default margin (5.00%) |
| B4 | Days (1) |
| B5 | Default interest: =B1*(B2+B3)/360*B4 |
| B6 | Extra cost over 45 days: =B1*B3/360*45 |

Rounding: If the state cap is below the default rate, use the cap in B2+B3. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** It is a cost, not a test. A higher figure shows how fast a default eats the borrower's equity. The rule is in the Model Credit Policy, Extensions and default; the state cap always applies.

**Common slips.**

- When does default interest start? On the date the note names. Some notes start it at notice, not at the missed payment.
- Can I ignore the state cap? No. Check the State Law Guide for the deal's state.

**Key takeaways.**

- Default interest = balance × (note rate + 5.00%) ÷ 360 × days.
- The extra cost is balance × 5.00% ÷ 360 × days.
- State law can cap it.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run what-if: payment 45 days late.

| Input | Value | Source |
| --- | --- | --- |
| Balance | $315,000 | Running Deals |
| Note rate | 10.25% | Running Deals |
| Default rate | 15.25% | Running Deals: note rate + 5.00% |
| Days late | 45 | Running Deals |

1. Default per diem: $315,000 × 15.25% ÷ 360 = $133.4375, shown as $133.44.
2. Normal per diem: $315,000 × 10.25% ÷ 360 = $89.69.
3. Extra each day: $315,000 × 5.00% ÷ 360 = $43.75.
4. Extra over 45 days: $43.75 × 45 = $1,968.75.

Result: **$133.44 a day at the default rate; $1,968.75 extra over 45 days**

**Related formulas.** F-CORE-05 (Per diem interest), F-CORE-01 (Interest-only payment (Actual/360)), F-CORE-23 (Loss severity)

**Concepts.** TM-35 (Workout economics)

**Legal tags (Audit mode only).** [VERIFY: State Law Table, default interest and usury columns, Ohio; checked 20 Nov 2026]

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Default per diem $133.44 = $133.44 (Running Deals, Maple Run); Normal per diem $89.69 = $89.69 (Running Deals, Maple Run); Extra over 45 days $1,968.75 = $1,968.75 (Running Deals, Maple Run). Excel formula recalculated in LibreOffice: B5 $133.44; B6 $1,968.75, matches. Fixtures recomputed independently: test 1 $6,250.00; test 2 $55,660.00; test 3 $9,505.83, all match fixtures.json.

## F-CORE-32: Payoff amount

*Library name: Payoff amount (SUGGESTED).*

**What it is.** The payoff amount is what it takes to repay a loan in full on a given date. It answers: how much must the title company wire to close out the loan? It is principal plus accrued interest plus fees.

**Analogy.** It is the final bill when you check out: the room, the nights since your last payment and any extras.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Principal | The balance owed on the payoff date. | US dollars | Payoff letter (DOC-57) |
| r | Note rate | The yearly rate in the note. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| d | Days of accrued interest | Days from the paid-to date up to, but not including, the payoff day. | days | Payoff letter (DOC-57) |
| Fee_exit | Exit fee | Any exit fee in the note, as a percent of the loan. | percent | Promissory note and loan agreement excerpt (DOC-25) |
| Fees | Other unpaid fees | Late fees or other charges still owed. | US dollars | Loan servicing report (DOC-34) |

**In Excel.**

Formula: `=B1+B1*B2/360*B3+B1*B4+B5`

| Cell | Holds |
| --- | --- |
| B1 | Principal ($5,140,000) |
| B2 | Note rate (9.00%) |
| B3 | Days of accrued interest (0) |
| B4 | Exit fee (0.50%) |
| B5 | Other unpaid fees ($0) |
| B6 | Payoff: =B1+B1*B2/360*B3+B1*B4+B5 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** It is an amount due, not a test. Any refinance must raise at least this much, plus closing costs. Payoff rules sit in the Model Credit Policy, Extensions and default, and in the note.

**Common slips.**

- Does the payoff day earn interest? No. Count the funding day, not the payoff day.
- Did I add the exit fee? Check the note. It applies unless a waiver condition is met.

**Key takeaways.**

- Payoff = principal + accrued interest + exit fee + unpaid fees.
- Accrued interest runs to the day before payoff.
- The take-out must cover the payoff plus costs.

**Worked example (Cedar Court).** Basis: Running Deals, Cedar Court month-27 refinance; the 9-day variant is the library's test 3.

| Input | Value | Source |
| --- | --- | --- |
| Principal | $5,140,000 | Running Deals |
| Exit fee | 0.50% | Running Deals: not our term loan, so not waived |
| Accrued interest | none (paid-to date) | Running Deals settles principal plus fee |

1. Exit fee: $5,140,000 × 0.50% = $25,700.
2. Payoff: $5,140,000 + $0 + $25,700 = $5,165,700.00.
3. If paid 9 days after the paid-to date at 9.00%: interest $5,140,000 × 9.00% ÷ 360 × 9 = $11,565. Payoff becomes $5,177,265.00.

Result: **$5,165,700.00; $5,177,265.00 if 9 days of interest have accrued**

**Related formulas.** F-CORE-05 (Per diem interest), F-CORE-01 (Interest-only payment (Actual/360)), F-CORE-47 (Remaining loan balance after k payments (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Payoff on a paid-to date $5,165,700.00 = $5,165,700.00 (Running Deals, Cedar Court ($5,165,700)); Payoff with 9 days $5,177,265.00 = $5,177,265.00 (Library test 3). Excel formula recalculated in LibreOffice: B6 $5,165,700.00, matches. Fixtures recomputed independently: test 1 $501,666.67; test 2 $3,531,220.00; test 3 $5,177,265.00, all match fixtures.json.

## F-CORE-33: Prepaid interest at closing

*Library name: Prepaid (odd-days) interest at closing (SUGGESTED).*

**What it is.** Prepaid interest covers the days from funding to the end of the first month. It answers: how much interest is collected at closing so billing starts on the first of next month?

**Analogy.** It is paying for the rest of this month's gym membership on the day you join.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L_0 | Initial funding | The amount funded at closing, not the full commitment. | US dollars | Settlement statement (DOC-28) |
| r | Note rate | The yearly rate in the note. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| d_odd | Odd days | Days from the funding day (counted) to month-end. | days | Settlement statement (DOC-28) |

**In Excel.**

Formula: `=B1*B2/360*(EOMONTH(B3,0)-B3+1)`

| Cell | Holds |
| --- | --- |
| B1 | Initial funding ($240,000) |
| B2 | Note rate (10.25%) |
| B3 | Funding date (15 Jan 2027) |
| B4 | Prepaid interest: =B1*B2/360*(EOMONTH(B3,0)-B3+1) |

Rounding: The +1 counts the funding day. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** It is a closing charge, not a test. It adds to cash to close and comes off the lender's wire. The rule is in the Model Credit Policy, Third-party reports, under closing.

**Common slips.**

- Commitment or initial funding? Initial funding. Undrawn money earns no interest.
- Is 15 to 31 January 16 days? No. The funding day counts, so it is 17 days.

**Key takeaways.**

- Prepaid interest = initial funding × rate ÷ 360 × odd days.
- Count the funding day.
- It runs to month-end; regular billing starts next month.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run closing.

| Input | Value | Source |
| --- | --- | --- |
| Initial funding | $240,000 | Running Deals |
| Note rate | 10.25% | Running Deals |
| Funding date | 15 Jan 2027 | Running Deals: closing |

1. Odd days: 31 − 15 + 1 = 17 days (15 to 31 January).
2. Interest: $240,000 × 10.25% ÷ 360 × 17 = $1,161.666…
3. Round to the cent: $1,161.67.

Result: **$1,161.67**

**Related formulas.** F-CORE-01 (Interest-only payment (Actual/360)), F-CORE-41 (Net funding wire (SUGGESTED)), F-CORE-05 (Per diem interest)

**Concepts.** TM-33 (Conditions precedent and the point of no return)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Prepaid interest $1,161.67 = $1,161.67 (Running Deals, Maple Run); Odd days 17 = 17 (Running Deals: 15-31 Jan). Excel formula recalculated in LibreOffice: B4 $1,161.67, matches. Fixtures recomputed independently: test 1 $1,527.78; test 2 $7,900.75; test 3 $922.25, all match fixtures.json.

## F-CORE-34: Insurance-to-value ratio

*Library name: Insurance-to-value ratio (SUGGESTED).*

**What it is.** This compares the property insurance limit with the cost to rebuild. It answers: if the building burned down, would the insurance pay to replace it? Policy wants at least 100%.

**Analogy.** It is checking that your phone insurance covers the price of a new phone, not a used one.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| Coverage | Coverage limit | The property insurance limit for the buildings. | US dollars | Insurance certificate and evidence of property insurance (DOC-23) |
| RC | Replacement cost | The cost to rebuild the improvements, excluding land. | US dollars | Appraisal excerpt or the insurer's replacement cost estimate (DOC-03) |

**In Excel.**

Formula: `=B1/B2`

| Cell | Holds |
| --- | --- |
| B1 | Coverage limit ($1,800,000) |
| B2 | Replacement cost ($2,000,000) |
| B3 | Ratio: =B1/B2 |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Higher is safer; at least 100% is required. The rule is in the Model Credit Policy, Third-party reports, under insurance. Below 100%, a total loss is not fully covered.

**Common slips.**

- Can I compare cover with market value or the loan? No. Use the cost to rebuild, without land.
- Does a coinsurance clause matter? Yes. It cuts every claim when cover is short.

**Key takeaways.**

- Ratio = coverage limit ÷ replacement cost.
- Use replacement cost, not value or loan.
- At least 100% is required.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals states no replacement cost).

| Input | Value | Source |
| --- | --- | --- |
| Coverage limit | $1,800,000 | Library test 1 |
| Replacement cost | $2,000,000 | Library test 1 |

1. Divide: $1,800,000 ÷ $2,000,000 = 0.90.
2. Display: 90.0%. It is below 100%, so it fails.

Result: **90.0%: fails**

**Related formulas.** F-CORE-37 (Coinsurance recovery (SUGGESTED))

**Concepts.** TM-32 (Loss severity and recovery timing)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Ratio 90.0% = 90.0% (Library test 1). Excel formula recalculated in LibreOffice: B3 90.0%, matches. Fixtures recomputed independently: test 1 90.0%; test 2 107.1%; test 3 100.0%, all match fixtures.json.

## F-CORE-35: Monthly tax and insurance escrow

*Library name: Monthly tax and insurance escrow (SUGGESTED).*

**What it is.** This is the monthly deposit the lender collects to pay taxes and insurance when they fall due. It answers: how much goes into escrow each month, and what cushion is held at closing?

**Analogy.** It is a jar you drop money into each month so the big yearly bills never surprise you.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| Tax | Annual property taxes | The current yearly tax bill, after any sale reassessment. | US dollars a year | T-12 operating statement, checked against the tax bill (DOC-02) |
| Ins | Annual insurance premium | The yearly premium for required cover. | US dollars a year | Insurance certificate and evidence of property insurance (DOC-23) |

**In Excel.**

Formula: `=(B1+B2)/12`

| Cell | Holds |
| --- | --- |
| B1 | Annual taxes ($74,000) |
| B2 | Annual insurance ($38,000) |
| B3 | Monthly deposit: =(B1+B2)/12 |
| B4 | Closing cushion: =2*B3 |

Rounding: Build the cushion from the unrounded deposit in B3. Rounding B3 first gives $18,666.66, one cent short. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** A cushion protects against a rise in taxes or premiums. The Model Credit Policy, Third-party reports sets a 2-month cushion at closing. The deposit is part of the full monthly payment in residential coverage tests.

**Common slips.**

- Is the cushion optional? No. Collect 2 months' deposits at closing where taxes and insurance are escrowed.
- Can I use last year's tax bill? Not after a sale triggers a reassessment. Use the new bill.

**Key takeaways.**

- Deposit = (annual taxes + annual insurance) ÷ 12.
- Cushion = 2 × deposit, collected at closing.
- Build the cushion from the unrounded deposit.

**Worked example (Cedar Court).** Basis: Running Deals, Cedar Court term sheet.

| Input | Value | Source |
| --- | --- | --- |
| Real estate taxes | $74,000 a year | Running Deals |
| Property insurance | $38,000 a year | Running Deals |

1. Annual total: $74,000 + $38,000 = $112,000.
2. Monthly: $112,000 ÷ 12 = $9,333.333…, shown as $9,333.33.
3. Cushion: 2 × $9,333.333… = $18,666.67.

Result: **$9,333.33 a month; cushion $18,666.67**

**Related formulas.** F-CORE-41 (Net funding wire (SUGGESTED))

**Concepts.** TM-33 (Conditions precedent and the point of no return)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Monthly deposit $9,333.33 = $9,333.33 (Running Deals, Cedar Court); Cushion $18,666.67 = $18,666.67 (Running Deals, Cedar Court). Excel formula recalculated in LibreOffice: B3 $9,333.33; B4 $18,666.67, matches. Fixtures recomputed independently: test 1 $3,800.00 a month; cushion $7,600.00; test 2 $420.00 a month; cushion $840.00; test 3 $9,208.33 a month; cushion $18,416.67, all match fixtures.json.

## F-CORE-36: Appraisal age

*Library name: Appraisal age (SUGGESTED).*

**What it is.** Appraisal age is the number of days from the appraisal's effective date to closing. It answers: is the value still fresh enough to lend on? Policy allows no more than 120 days.

**Analogy.** It is the best-before date on the value.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| Date_eff | Effective date | The date the value applies to, stated in the appraisal. It is not the report date. | date | Appraisal excerpt (DOC-03) |
| Date_close | Closing date | The date the loan closes and funds. | date | Closing checklist (funding conditions) (DOC-27) |

**In Excel.**

Formula: `=B2-B1`

| Cell | Holds |
| --- | --- |
| B1 | Appraisal effective date (1 Aug 2026) |
| B2 | Closing date (18 Nov 2026) |
| B3 | Age in days: =B2-B1 |
| B4 | Pass?: =IF(B3<=120,"Pass","Fail") |

Rounding: Format B3 as a number, not a date. Whole days need no rounding.

**How to read the result.** Younger is safer. The limit is in the Model Credit Policy, Third-party reports: no more than 120 days. Exactly 120 days passes.

**Common slips.**

- Can I use the report date? No. Use the effective date.
- Do I measure to the application date? No. Measure to the closing date.

**Key takeaways.**

- Age = closing date − effective date, in actual days.
- No more than 120 days.
- Use the effective date, not the report date.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals gives only an age, not an effective date).

| Input | Value | Source |
| --- | --- | --- |
| Effective date | 1 Aug 2026 | Library test 1 |
| Closing date | 18 Nov 2026 | Library test 1 |

1. Days left in August after the 1st: 30. September 30, October 31, November 18.
2. Total: 30 + 30 + 31 + 18 = 109 days.
3. 109 is no more than 120: pass.

Result: **109 days: pass**

**Related formulas.** F-CORE-14 (Loan-to-value (LTV)), F-CORE-13 (Capitalization (cap) rate)

**Concepts.** TM-01 (Real estate and credit cycles)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Appraisal age 109 days: pass = 109 days: pass (Library test 1). Excel formula recalculated in LibreOffice: B3 109; B4 Pass, matches. Fixtures recomputed independently: test 1 109 days: pass; test 2 120 days: pass; test 3 126 days: fail, all match fixtures.json.

## F-CORE-37: Coinsurance recovery

*Library name: Coinsurance recovery (SUGGESTED).*

**What it is.** This shows what a claim pays when cover is below the policy's coinsurance requirement. It answers: how much of a partial loss will the insurer actually pay? Short cover cuts every claim, not just a total loss.

**Analogy.** It is like a store refunding only 94 cents on the dollar because you paid for 94% of the warranty.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| Did | Limit carried | The coverage limit actually bought. | US dollars | Insurance certificate and evidence of property insurance (DOC-23) |
| c | Coinsurance percent | The share of replacement cost the policy says you must carry. | percent | Insurance certificate and evidence of property insurance (DOC-23) |
| RC | Replacement cost | Cost to rebuild at the time of loss. | US dollars | Insurance certificate and evidence of property insurance, or the insurer's estimate (DOC-23) |
| Loss | Loss | The covered loss before the deductible. | US dollars | Insurance certificate and evidence of property insurance (DOC-23) |
| Ded | Deductible | The amount the owner bears first. | US dollars | Insurance certificate and evidence of property insurance (DOC-23) |

**In Excel.**

Formula: `=MIN(B1,MIN(1,B1/(B2*B3))*B4-B5)`

| Cell | Holds |
| --- | --- |
| B1 | Limit carried ($4,400,000) |
| B2 | Coinsurance percent (90%) |
| B3 | Replacement cost ($5,200,000) |
| B4 | Loss ($500,000) |
| B5 | Deductible ($25,000) |
| B6 | Payment: =MIN(B1,MIN(1,B1/(B2*B3))*B4-B5) |

Rounding: Keep the ratio unrounded inside the formula. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** A higher payment is safer for the lender's collateral. The Model Credit Policy, Third-party reports bars coinsurance clauses unless an agreed-amount provision covers at least 100%. This formula shows what a barred clause would cost.

**Common slips.**

- Do I take off the deductible first? No. Apply the ratio to the loss, then subtract the deductible.
- The loss is under the limit, so no penalty? Wrong. Short cover cuts every partial claim.

**Key takeaways.**

- Payment = (carried ÷ required) × loss − deductible, with the ratio capped at 1.
- Required = coinsurance percent × replacement cost.
- Short cover cuts every claim.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals has no insurance claim).

| Input | Value | Source |
| --- | --- | --- |
| Replacement cost | $5,200,000 | Library test 1 |
| Coinsurance | 90% | Library test 1 |
| Limit carried | $4,400,000 | Library test 1 |
| Loss | $500,000 | Library test 1 |
| Deductible | $25,000 | Library test 1 |

1. Required: 90% × $5,200,000 = $4,680,000.
2. Ratio: $4,400,000 ÷ $4,680,000 = 0.940171…
3. Payment: 0.940171… × $500,000 − $25,000 = $445,085.47.
4. The owner bears $54,914.53.

Result: **$445,085.47**

**Related formulas.** F-CORE-34 (Insurance-to-value ratio (SUGGESTED))

**Concepts.** TM-32 (Loss severity and recovery timing)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Claim payment $445,085.47 = $445,085.47 (Library test 1); Owner bears $54,914.53 = $54,914.53 (Library worked example). Excel formula recalculated in LibreOffice: B6 $445,085.47, matches. Fixtures recomputed independently: test 1 $445,085.47; test 2 $240,000.00; test 3 $412,500.00, all match fixtures.json.

## F-CORE-40: All-in annual cost screen

*Library name: All-in annual cost screen (SUGGESTED).*

**What it is.** This is a quick screen of the note rate plus upfront fees spread over the term. It answers: could the loan's cost come near a state rate cap? It is a screen, not a yield and not a legal test.

**Analogy.** It is like adding a gym's joining fee to the monthly price to see what a year really costs.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| r | Note rate | The yearly rate in the term sheet. | percent a year | Term sheet (DOC-14) |
| p | Points | Origination points as a percent of the commitment. | percent | Term sheet (DOC-14) |
| f | Other lender fees | Other lender fees as a percent of the commitment. Third-party costs stay out. | percent | Term sheet (DOC-14) |
| T | Term | The loan term. | months | Term sheet (DOC-14) |

**In Excel.**

Formula: `=B1+(B2+B3)/(B4/12)`

| Cell | Holds |
| --- | --- |
| B1 | Note rate (10.25%) |
| B2 | Points (1.50%) |
| B3 | Other lender fees (0%) |
| B4 | Term in months (12) |
| B5 | All-in cost: =B1+(B2+B3)/(B4/12) |

Rounding: Format two decimals. Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** Lower is safer against a rate cap. Compare it with the state cap only when no exemption applies. The Model Credit Policy, Pricing structure requires a state check before any term sheet.

**Common slips.**

- Do I test the rate before checking for an exemption? No. Check the exemption first.
- Can I leave out fees other than points? No. Include every lender fee.

**Key takeaways.**

- All-in cost = note rate + fees ÷ term in years.
- Short terms inflate it.
- It is a screen; counsel decides how a state counts fees.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run term sheet.

| Input | Value | Source |
| --- | --- | --- |
| Note rate | 10.25% | Running Deals |
| Points | 1.50 | Running Deals |
| Term | 12 months | Running Deals |

1. Term in years: 12 ÷ 12 = 1.
2. Fees a year: 1.50% ÷ 1 = 1.50%.
3. All-in: 10.25% + 1.50% = 11.75%.

Result: **11.75%**

**Related formulas.** F-CORE-06 (Origination points), F-CORE-48 (Internal rate of return (IRR) (SUGGESTED)), F-CORE-46 (Effective annual rate from a nominal rate (SUGGESTED))

**Concepts.** TM-10 (Contract rate, yield to maturity and expected return)

**Legal tags (Audit mode only).** [VERIFY: State Law Table, usury column and each state's fee-inclusion rule; checked 20 Nov 2026]

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: All-in cost 11.75% = 11.75% (Library test 1 (Maple Run)). Excel formula recalculated in LibreOffice: B5 11.75%, matches. Fixtures recomputed independently: test 1 11.75%; test 2 8.15%; test 3 16.00%, all match fixtures.json.

## F-CORE-41: Net funding wire

*Library name: Net funding wire (SUGGESTED).*

**What it is.** The net funding wire is the money the lender sends to the closing agent. It answers: how much leaves our account at closing? It is the initial funding less what the lender keeps.

**Analogy.** It is your paycheck after deductions: the gross is the loan, the net is the wire.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L_0 | Initial funding | The advance made at closing. | US dollars | Term sheet (DOC-14) |
| Pts | Points | Origination fee, on the commitment. | US dollars | Settlement statement (DOC-28) |
| Fees | Other lender fees | Lender fees collected at closing. | US dollars | Settlement statement (DOC-28) |
| I_odd | Prepaid interest | Interest from funding to month-end. | US dollars | Settlement statement (DOC-28) |
| Esc | Escrows and reserves held | Tax and insurance cushion, repair escrow and other reserves the lender holds. | US dollars | Settlement statement (DOC-28) |

**In Excel.**

Formula: `=B1-B2-B3-B4-B5`

| Cell | Holds |
| --- | --- |
| B1 | Initial funding ($240,000) |
| B2 | Points ($5,100) |
| B3 | Other lender fees ($0) |
| B4 | Prepaid interest ($1,161.67) |
| B5 | Escrows and reserves held ($0) |
| B6 | Wire: =B1-B2-B3-B4-B5 |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** It is an amount, not a test. The settlement statement's sources must equal its uses. A negative wire means the deal is built wrong. Closing rules are in the Model Credit Policy, Third-party reports, under closing.

**Common slips.**

- Do I wire the full advance? No. Net out what the lender keeps.
- Should I net a cost the borrower pays a third party? No. Only items the lender keeps come off the wire.

**Key takeaways.**

- Wire = initial funding − points − fees − prepaid interest − escrows held.
- Sources must equal uses.
- A negative wire means stop and recheck.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run closing.

| Input | Value | Source |
| --- | --- | --- |
| Initial funding | $240,000 | Running Deals |
| Points | $5,100 | Running Deals |
| Prepaid interest | $1,161.67 | Running Deals |
| Fees and escrows | $0 | Running Deals |

1. Start: $240,000.
2. Less points: $240,000 − $5,100 = $234,900.
3. Less prepaid interest: $234,900 − $1,161.67 = $233,738.33.

Result: **$233,738.33**

**Related formulas.** F-CORE-06 (Origination points), F-CORE-33 (Prepaid (odd-days) interest at closing (SUGGESTED)), F-CORE-35 (Monthly tax and insurance escrow (SUGGESTED))

**Concepts.** TM-33 (Conditions precedent and the point of no return)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Net wire $233,738.33 = $233,738.33 (Running Deals, Maple Run; library test 1). Excel formula recalculated in LibreOffice: B6 $233,738.33, matches. Fixtures recomputed independently: test 1 $233,738.33; test 2 $4,219,011.08; test 3 $2,816,899.25, all match fixtures.json.

## F-CORE-42: Foreclosed property carrying value and charge-off

*Library name: REO carrying value and charge-off (SUGGESTED).*

**What it is.** When the lender takes title, it books the property at fair value less cost to sell, capped at the loan. It answers: what is the property worth on our books, and what loss do we take now?

**Analogy.** It is marking a trade-in at what the dealer will really pay, after its costs.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Recorded loan amount | The loan balance on the books at title. | US dollars | Loan servicing report (DOC-34) |
| FV | Fair value | Value from a new appraisal at title. | US dollars | Updated valuation for resolution (DOC-41) |
| CTS | Cost to sell | Estimated broker, legal and closing costs to sell. | US dollars | Updated valuation for resolution (DOC-41) |

**In Excel.**

Formula: `=MIN(B1,B2-B3)`

| Cell | Holds |
| --- | --- |
| B1 | Recorded loan ($3,520,000) |
| B2 | Fair value ($3,400,000) |
| B3 | Cost to sell ($102,000) |
| B4 | Carrying value: =MIN(B1,B2-B3) |
| B5 | Charge-off: =MAX(0,B1-(B2-B3)) |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** A smaller charge-off is better. Later falls in value are written down; rises are not booked until sale. The rule is in the Model Credit Policy, Extensions and default.

**Common slips.**

- Gross value or value less cost to sell? Value less cost to sell.
- Can I use the original appraisal? No. Order a new one at title.

**Key takeaways.**

- Carrying value = lower of the loan and fair value less cost to sell.
- Charge-off = loan − (fair value − cost to sell), if positive.
- Re-test value often; write down falls, never book rises.

**Worked example (Birchwood Plaza).** Basis: Library test 1, a what-if on the Birchwood Plaza commitment; Running Deals has no foreclosure.

| Input | Value | Source |
| --- | --- | --- |
| Recorded loan | $3,520,000 | Running Deals: commitment |
| Fair value | $3,400,000 | Library test 1 (what-if) |
| Cost to sell | $102,000 | Library test 1 (what-if) |

1. Net value: $3,400,000 − $102,000 = $3,298,000.
2. Carrying value: the lower of $3,520,000 and $3,298,000 is $3,298,000.00.
3. Charge-off: $3,520,000 − $3,298,000 = $222,000.00.

Result: **Carrying value $3,298,000.00; charge-off $222,000.00**

**Related formulas.** F-CORE-23 (Loss severity)

**Concepts.** TM-35 (Workout economics), TM-37 (Lifetime expected loss and the allowance)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Carrying value; charge-off $3,298,000.00; $222,000.00 = $3,298,000.00; $222,000.00 (Library test 1). Excel formula recalculated in LibreOffice: B4 $3,298,000.00; B5 $222,000.00, matches. Fixtures recomputed independently: test 1 $3,298,000.00; $222,000.00; test 2 $4,850,000.00; $290,000.00; test 3 $855,000.00; $145,000.00, all match fixtures.json.

## F-CORE-43: Bucket headroom

*Library name: Bucket headroom (SUGGESTED).*

**What it is.** Headroom is the largest new loan a concentration bucket can take before it breaches its cap. It answers: how much room is left in this bucket? A new loan adds to both the bucket and the base.

**Analogy.** It is how much more water a glass can take when the glass grows a little as you pour.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| c | Cap | The bucket's maximum share of its base. | percent | Model Credit Policy, Concentration, exceptions and approval authority |
| T | Base commitments | Total commitments for the base the cap uses. | US dollars | Portfolio concentration report (DOC-45) |
| B | Bucket commitments | Commitments already in the bucket. | US dollars | Portfolio concentration report (DOC-45) |

**In Excel.**

Formula: `=(B1*B2-B3)/(1-B1)`

| Cell | Holds |
| --- | --- |
| B1 | Cap (25%) |
| B2 | Base commitments ($120,000,000) |
| B3 | Bucket commitments ($28,500,000) |
| B4 | Headroom: =(B1*B2-B3)/(1-B1) |

Rounding: Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** More headroom is safer. A negative result means the bucket is already over its cap. Caps are in the Model Credit Policy, Concentration, exceptions and approval authority.

**Common slips.**

- Is headroom just cap × base − bucket? No. The new loan also grows the base, so divide by (1 − cap).
- Balances or commitments? Commitments.

**Key takeaways.**

- Headroom = (cap × base − bucket) ÷ (1 − cap).
- The new loan grows the base too.
- Negative headroom means committee for any new loan.

**Worked example (no running deal).** Basis: Library test 1 (Running Deals has no portfolio data).

| Input | Value | Source |
| --- | --- | --- |
| Cap | 25% | Library test 1 |
| Base commitments | $120,000,000 | Library test 1 |
| Bucket commitments | $28,500,000 | Library test 1 |

1. Cap × base: 25% × $120,000,000 = $30,000,000.
2. Less the bucket: $30,000,000 − $28,500,000 = $1,500,000.
3. Divide by 75%: $1,500,000 ÷ 0.75 = $2,000,000.00.

Result: **$2,000,000.00**

**Related formulas.** F-CORE-30 (Bucket concentration), F-CORE-29 (Aggregate sponsor exposure)

**Concepts.** TM-06 (Concentration risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Headroom $2,000,000.00 = $2,000,000.00 (Library test 1). Excel formula recalculated in LibreOffice: B4 $2,000,000.00, matches. Fixtures recomputed independently: test 1 $2,000,000.00; test 2 $5,333,333.33; test 3 $588,235.29, all match fixtures.json.

## F-CORE-44: Cash-on-cash return

*Library name: Cash-on-cash return (SUGGESTED).*

**What it is.** Cash-on-cash return is the owner's yearly cash flow after debt service, as a share of the cash they put in. It answers: what does the borrower earn on their own money? It is the borrower's measure, not a credit test.

**Analogy.** It is the interest your own savings earn after the bank takes its share.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| NOI | Net operating income | Yearly income before debt service. | US dollars a year | T-12 operating statement (DOC-02) |
| ADS | Annual debt service | Twelve rounded monthly payments. | US dollars a year | Promissory note and loan agreement excerpt (DOC-25) |
| E | Cash invested | The owner's cash in the deal; here value less loan. | US dollars | Appraisal excerpt (value) and term sheet (loan) (DOC-03) |

**In Excel.**

Formula: `=(B1-B2)/(B3-B4)`

| Cell | Holds |
| --- | --- |
| B1 | Net operating income ($480,000) |
| B2 | Annual debt service ($330,772.68) |
| B3 | Value ($6,000,000) |
| B4 | Loan ($3,900,000) |
| B5 | Cash-on-cash: =(B1-B2)/(B3-B4) |

Rounding: Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** No policy limit applies. A return below the cap rate signals negative leverage: the loan costs more than the property yields. A thin or negative return can weaken the sponsor's will to support the deal.

**Common slips.**

- Did I take off debt service? Without it you get the cap rate, not the owner's return.
- Do I divide by value or price? No. Divide by the cash invested.

**Key takeaways.**

- Cash-on-cash = (income − debt service) ÷ cash invested.
- Below the cap rate means negative leverage.
- It is a borrower measure; no policy minimum applies.

**Worked example (Birchwood Plaza).** Basis: Running Deals, Birchwood Plaza term loan; result from the library's test 1.

| Input | Value | Source |
| --- | --- | --- |
| Stabilized net operating income | $480,000 | Running Deals |
| Annual debt service | $330,772.68 | Running Deals |
| Value | $6,000,000 | Running Deals |
| Loan | $3,900,000 | Running Deals |

1. Cash flow after debt: $480,000 − $330,772.68 = $149,227.32.
2. Cash invested: $6,000,000 − $3,900,000 = $2,100,000.
3. Return: $149,227.32 ÷ $2,100,000 = 7.11%.
4. The cap rate is 8.00% and the loan constant 8.48%: leverage is negative.

Result: **7.11%**

**Related formulas.** F-CORE-13 (Capitalization (cap) rate), F-CORE-04 (Loan constant), F-CORE-03 (Annual debt service (ADS)), F-CORE-10 (Net operating income (NOI))

**Concepts.** TM-15 (Financial leverage)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Cash-on-cash 7.11% = 7.11% (Library test 1). Excel formula recalculated in LibreOffice: B5 7.11%, matches. Fixtures recomputed independently: test 1 7.11%; test 2 7.78%; test 3 −1.47%, all match fixtures.json.

## F-CORE-45: Present and future value

*Library name: Present and future value (time value of money) (SUGGESTED).*

**What it is.** Present value is what a stream of future payments is worth today at a given rate. It answers: what is this loan worth now, or what will today's money grow to? It underlies payment, balance and yield formulas.

**Analogy.** It is asking how much you must deposit today to fund a set of future bills.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| PMT | Level payment | The payment at the end of each period. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| FV_n | Lump sum at the end | A balloon or payoff paid with the last payment. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| i | Rate per period | The annual rate ÷ 12 for monthly payments. | decimal a month | Promissory note and loan agreement excerpt (DOC-25) |
| n | Number of periods | How many payments. | months | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=PV(B2/12,B3,-B1,-B4)`

| Cell | Holds |
| --- | --- |
| B1 | Monthly payment ($2,904.17) |
| B2 | Annual rate (10.25%) |
| B3 | Months (12) |
| B4 | Lump sum at month 12 ($340,000) |
| B5 | Present value: =PV(B2/12,B3,-B1,-B4) |
| B6 | Future value: =B5*(1+B2/12)^B3 |

Rounding: Excel's PV assumes end-of-period payments, as this formula does. Keep the result cell unrounded and format it for display. If you need a rounded figure, put =ROUND(cell,2) in a separate display cell that no other formula uses.

**How to read the result.** At the note rate, a loan's payments are worth its amount. Discount them at a higher rate and they are worth less. No policy limit applies.

**Common slips.**

- Can I use the annual rate for monthly payments? No. Divide by 12 first.
- Payments at the start or end of the month? This formula assumes the end.
- Did I leave out the balloon? An interest-only loan's value is mostly its final payoff.

**Key takeaways.**

- Present value = payments × annuity factor + lump sum discounted.
- At the note rate, a loan is worth its amount.
- Use the rate per period and the right number of periods.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run (interest $2,904.17 a month on $340,000; 12-month term); library test 2.

| Input | Value | Source |
| --- | --- | --- |
| Monthly interest | $2,904.17 | Running Deals |
| Rate | 10.25% ÷ 12 | Running Deals |
| Months | 12 | Running Deals |
| Payoff at month 12 | $340,000 | Running Deals |

1. Monthly rate: 10.25% ÷ 12 = 0.854166…%.
2. Annuity factor over 12 months: 11.359479.
3. Payments: $2,904.17 × 11.359479 = $32,989.86.
4. Payoff today: $340,000 ÷ 1.00854166…^12 = $307,010.18.
5. Present value: $340,000.04, the loan plus 4 cents from rounding the payment.
6. Future value at month 12: $340,000.04 × 1.00854166…^12 = $376,534.79.

Result: **PV $340,000.04; FV $376,534.79**

**Related formulas.** F-CORE-02 (Amortizing payment (principal and interest)), F-CORE-47 (Remaining loan balance after k payments (SUGGESTED)), F-CORE-48 (Internal rate of return (IRR) (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics), TM-36 (Loan valuation at a market yield)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: PV; FV PV $340,000.04; FV $376,534.79 = PV $340,000.04; FV $376,534.79 (Library test 2). Excel formula recalculated in LibreOffice: B5 $340,000.04; B6 $376,534.79, matches. Fixtures recomputed independently: test 1 PV $3,900,000.18; FV $22,329,132.07; test 2 PV $340,000.04; FV $376,534.79; test 3 PV $5,472,000.00; FV $11,273,590.40, all match fixtures.json.

## F-CORE-46: Effective annual rate

*Library name: Effective annual rate from a nominal rate (SUGGESTED).*

**What it is.** The effective annual rate is what a quoted rate really costs over a year, after day count and compounding. It answers: are two loans with the same quote really the same price?

**Analogy.** It is the price per kilo once you read the small print on pack size.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| r | Nominal annual rate | The rate quoted in the note. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| D | Days of accrual a year | 365 (366 in a leap year) for Actual/360; 360 for 30/360. | days | Promissory note and loan agreement excerpt (DOC-25) |
| m | Payments a year | How often interest is paid or added to principal. | times a year | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=(1+B1*B2/360/B3)^B3-1`

| Cell | Holds |
| --- | --- |
| B1 | Nominal rate (10.25%) |
| B2 | Days of accrual (365) |
| B3 | Payments a year (12) |
| B4 | Effective rate: =(1+B1*B2/360/B3)^B3-1 |

Rounding: Format three decimals. Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** A higher effective rate means a dearer loan. Compare loans on it, but never use it in coverage or sizing tests, which use the nominal rate. No policy limit applies.

**Common slips.**

- Can I use it in a coverage test? No. Tests use the nominal rate.
- Interest is paid only at maturity. Do I still compound monthly? No. Set payments a year to 1.

**Key takeaways.**

- Effective rate = (1 + rate × days ÷ 360 ÷ m)^m − 1.
- Actual/360 billing adds about 1.4% of the rate.
- Compare loans on it; test loans on the nominal rate.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run note rate; library test 2.

| Input | Value | Source |
| --- | --- | --- |
| Note rate | 10.25% | Running Deals |
| Billing | Actual/360, 365-day year | Course convention |
| Payments a year | 12 | Running Deals: monthly |

1. Day-count uplift: 10.25% × 365 ÷ 360 = 10.392% simple.
2. Monthly compounding: (1 + 10.392% ÷ 12)^12 − 1 = 0.109019.
3. Display: 10.902%.

Result: **10.902%**

**Related formulas.** F-CORE-01 (Interest-only payment (Actual/360)), F-CORE-40 (All-in annual cost screen (SUGGESTED)), F-CORE-48 (Internal rate of return (IRR) (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Effective rate 10.902% = 10.902% (Library test 2); Without the uplift (30/360) 10.746% = 10.746% (Library worked example). Excel formula recalculated in LibreOffice: B4 10.902%, matches. Fixtures recomputed independently: test 1 7.229%; test 2 10.902%; test 3 7.756%, all match fixtures.json.

## F-CORE-47: Remaining balance after k payments

*Library name: Remaining loan balance after k payments (SUGGESTED).*

**What it is.** This is the principal still owed after a number of scheduled payments, on a note that accrues on 30/360. It answers: how big is the balloon at maturity? A short term on a long amortization leaves a large one.

**Analogy.** It is how much of the mountain is still above you after a set number of steps.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Original loan | The loan at the start. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| i | Monthly rate | The annual rate ÷ 12. | decimal a month | Promissory note and loan agreement excerpt (DOC-25) |
| P | Monthly payment | The scheduled payment, rounded to the cent. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| k | Payments made | Number of payments so far, for example to maturity. | months | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=B1*(1+B2/12)^B5-B4*((1+B2/12)^B5-1)/(B2/12)`

| Cell | Holds |
| --- | --- |
| B1 | Original loan ($3,900,000) |
| B2 | Annual rate (7.00%) |
| B3 | Amortization in months (300) |
| B4 | Payment: =ROUND(PMT(B2/12,B3,-B1),2) |
| B5 | Payments made (120) |
| B6 | Balance: =B1*(1+B2/12)^B5-B4*((1+B2/12)^B5-1)/(B2/12) |

Rounding: ROUND in B4 is the payment rule, not display. Keep B6 unrounded; format it for display.

**How to read the result.** A smaller balloon is safer, because the borrower must refinance or sell to pay it. Size the take-out on it. For notes that accrue on actual days, use the Actual/360 balance instead.

**Common slips.**

- Can I use the unrounded payment? No. The schedule uses the rounded payment, so the balance drifts by cents.
- Is the balance the payoff? No. Payoff adds accrued interest and fees.

**Key takeaways.**

- Balance = loan grown at the rate − payments grown at the rate.
- Use the payment rounded to the cent.
- It suits 30/360 notes; Actual/360 notes need the month-by-month balance.

**Worked example (Birchwood Plaza).** Basis: Library test 1, a what-if on the Birchwood Plaza term loan (Running Deals sets no term).

| Input | Value | Source |
| --- | --- | --- |
| Loan | $3,900,000 | Running Deals |
| Rate | 7.00% | Running Deals |
| Amortization | 300 months | Library test 1 |
| Payments made | 120 (a 10-year what-if) | Library test 1 |

1. Growth factor: 1.0058333…^120 = 2.009661.
2. Loan grown: $3,900,000 × 2.009661 = $7,837,679.37.
3. Payments grown: $27,564.39 × (2.009661 − 1) ÷ 0.0058333… = $4,770,977.14.
4. Balance: $3,066,702.23.

Result: **$3,066,702.23**

**Related formulas.** F-CORE-02 (Amortizing payment (principal and interest)), F-CORE-49 (Remaining balance with Actual/360 accrual (SUGGESTED)), F-CORE-45 (Present and future value (time value of money) (SUGGESTED)), F-CORE-32 (Payoff amount (SUGGESTED))

**Concepts.** TM-08 (Time value of money and mortgage mathematics), TM-29 (Take-out risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Balance after 120 payments $3,066,702.23 = $3,066,702.23 (Library test 1). Excel formula recalculated in LibreOffice: B6 $3,066,702.23, matches. Fixtures recomputed independently: test 1 $3,066,702.23; test 2 $4,722,901.67; test 3 $3,555,323.85, all match fixtures.json.

## F-CORE-48: Internal rate of return

*Library name: Internal rate of return (IRR) (SUGGESTED).*

**What it is.** The internal rate of return is the one rate that makes a set of cash flows worth zero today. It answers: what yield does the lender really earn, once points and timing count? Points raise it above the note rate.

**Analogy.** It is the steady interest rate a savings account would need to match the deal's cash flows.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| CF_t | Cash flow in period t | Money out (negative) or in (positive) for the lender in each period. | US dollars | Term sheet and note (amount, points, rate, term) (DOC-14) |
| t | Period | The month the cash flow falls in, from 0. | months | Promissory note and loan agreement excerpt (DOC-25) |
| m | Periods a year | 12 for monthly flows. | times a year | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `=IRR(B2:B14)*12`

| Cell | Holds |
| --- | --- |
| B2 | Month 0: −$340,000 + $5,100 points = −$334,900 |
| B3 | Month 1: interest $2,904.17 |
| B4 | Month 2: interest $2,904.17 |
| B5 | Month 3: interest $2,904.17 |
| B6 | Month 4: interest $2,904.17 |
| B7 | Month 5: interest $2,904.17 |
| B8 | Month 6: interest $2,904.17 |
| B9 | Month 7: interest $2,904.17 |
| B10 | Month 8: interest $2,904.17 |
| B11 | Month 9: interest $2,904.17 |
| B12 | Month 10: interest $2,904.17 |
| B13 | Month 11: interest $2,904.17 |
| B14 | Month 12: $340,000 + $2,904.17 = $342,904.17 |
| B16 | Nominal yield: =IRR(B2:B14)*12 |
| B17 | Effective yield: =(1+IRR(B2:B14))^12-1 |

Rounding: IRR returns a monthly rate. Format the results to three decimals. Keep the ratio unrounded and format the cell as a percentage. Compare it with a limit at full precision. Use ROUND only in a separate display cell.

**How to read the result.** A higher yield is better for the lender. Points paid up front raise the yield more on a short loan. It is not a state usury test; counsel decides how a state counts fees.

**Common slips.**

- Is the monthly IRR an annual rate? No. Multiply by 12 for nominal, or compound for effective.
- Points came off the loan. Do I count them again as income? No. Count each dollar once.

**Key takeaways.**

- The yield is the rate that makes the cash flows' present value zero.
- Points push it above the note rate.
- Multiply a monthly yield by 12, or compound it.

**Worked example (Maple Run).** Basis: Running Deals, Maple Run, simplified to full funding on day one; library test 1.

| Input | Value | Source |
| --- | --- | --- |
| Commitment | $340,000 | Running Deals |
| Points | $5,100 | Running Deals |
| Monthly interest | $2,904.17 | Running Deals |
| Term | 12 months | Running Deals |

1. Month 0: the lender sends $340,000 and keeps $5,100, so −$334,900.
2. Months 1 to 11: +$2,904.17. Month 12: +$342,904.17.
3. Solve for the monthly rate that sets present value to zero: 0.9873% a month.
4. Nominal: × 12 = 11.848%. Effective: (1 + 0.9873%)^12 − 1 = 12.513%.
5. The all-in screen gave 11.75%; it is not a yield.

Result: **11.848% nominal; 12.513% effective**

**Related formulas.** F-CORE-40 (All-in annual cost screen (SUGGESTED)), F-CORE-45 (Present and future value (time value of money) (SUGGESTED)), F-CORE-46 (Effective annual rate from a nominal rate (SUGGESTED)), F-CORE-06 (Origination points)

**Concepts.** TM-10 (Contract rate, yield to maturity and expected return)

**Legal tags (Audit mode only).** [VERIFY: State Law Table usury column; checked 20 Nov 2026]

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Yield 11.848% nominal; 12.513% effective = 11.848% nominal; 12.513% effective (Library test 1). Excel formula recalculated in LibreOffice: B16 11.848%; B17 12.513%, matches. Fixtures recomputed independently: test 1 11.848% nominal; 12.513% effective; test 2 8.194% nominal; 8.509% effective; test 3 12.081% nominal; 12.772% effective, all match fixtures.json.

## F-CORE-49: Remaining balance with Actual/360 interest

*Library name: Remaining balance with Actual/360 accrual (SUGGESTED).*

**What it is.** This is the balance after a number of payments on a note whose payment is set on 30/360 but whose interest accrues on actual days. It answers: how big is the real balloon on a term loan?

**Analogy.** It is a treadmill set a little faster than you walk: you still move forward, but more slowly.

**Where:**

| Symbol | Name | Definition | Unit | Source document |
| --- | --- | --- | --- | --- |
| L | Original loan | The loan at the start. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| r | Annual rate | The yearly rate in the note. | percent a year | Promissory note and loan agreement excerpt (DOC-25) |
| P | Monthly payment | The payment set on 30/360, rounded to the cent. | US dollars | Promissory note and loan agreement excerpt (DOC-25) |
| d_t | Days in month t | Actual days in each accrual month. | days | Promissory note and loan agreement excerpt (DOC-25) |
| k | Payments made | Payments so far. | months | Promissory note and loan agreement excerpt (DOC-25) |

**In Excel.**

Formula: `E8: =ROUND(D8*$B$2/360*C8,2); G8: =D8+E8-$B$4 (fill rows 8 to 127)`

| Cell | Holds |
| --- | --- |
| B1 | Original loan ($3,900,000) |
| B2 | Annual rate (7.00%) |
| B3 | Amortization in months (300) |
| B4 | Payment: =ROUND(PMT(B2/12,B3,-B1),2) |
| B5 | First accrual month (1 Jan 2029) |
| A8 | Payment number (1, 2, 3 …) |
| B8 | Month start: =EDATE($B$5,A8-1) |
| C8 | Days in the month: =DAY(EOMONTH(B8,0)) |
| D8 | Opening balance: =$B$1 in row 8, then =G7 |
| E8 | Interest: =ROUND(D8*$B$2/360*C8,2) |
| F8 | Principal: =$B$4-E8 |
| G8 | Closing balance: =D8+E8-$B$4 |
| G127 | Balance after 120 payments |

Rounding: ROUND in E8 is the note's rule: each month's interest is rounded to the cent once. It is not display rounding. Keep the balance column unrounded beyond that.

**How to read the result.** A smaller balloon is safer. Size the refinance on this balloon, not the 30/360 one. The payment and accrual rule is in the Model Credit Policy, Pricing structure.

**Common slips.**

- Can I use the 30/360 balance formula? No. It understates the balloon on an Actual/360 note.
- Should the payment change each month? No. The payment stays fixed; only interest changes.
- Does the start month matter? Yes. Leap years and month lengths change the result.

**Key takeaways.**

- Each month: interest on actual days, rounded to the cent; balance = balance + interest − payment.
- The balloon is larger than on 30/360.
- Size the take-out on this balance.

**Worked example (Birchwood Plaza).** Basis: Library test 1, a what-if on the Birchwood Plaza term loan (Running Deals sets no term or start month).

| Input | Value | Source |
| --- | --- | --- |
| Loan | $3,900,000 | Running Deals |
| Rate | 7.00% | Running Deals |
| Payment | $27,564.39 | Amortizing payment, 300 months |
| First accrual month | January 2029 (what-if) | Library test 1 |
| Payments | 120 | Library test 1 |

1. Month 1 (31 days): interest $23,508.33; principal $4,056.06; balance $3,895,943.94.
2. Month 2 (28 days): interest $21,211.25; principal $6,353.14; balance $3,889,590.80.
3. Month 3 (31 days): interest $23,445.59; principal $4,118.80; balance $3,885,472.00.
4. Repeat to month 120: balance $3,118,446.42.
5. The 30/360 balance is $3,066,702.23, so the Actual/360 balloon is $51,744.19 higher.

Result: **$3,118,446.42**

**Related formulas.** F-CORE-47 (Remaining loan balance after k payments (SUGGESTED)), F-CORE-02 (Amortizing payment (principal and interest)), F-CORE-01 (Interest-only payment (Actual/360))

**Concepts.** TM-08 (Time value of money and mortgage mathematics), TM-29 (Take-out risk)

**Checks.** Python Decimal, ROUND_HALF_UP at display. Worked example: Balance after 120 payments $3,118,446.42 = $3,118,446.42 (Library test 1); Month 1 balance $3,895,943.94 = $3,895,943.94 (Library worked example); Month 3 balance $3,885,472.00 = $3,885,472.00 (Library worked example); Gap to the 30/360 balance $51,744.19 = $51,744.19 (Library worked example). Excel formula recalculated in LibreOffice: G127 $3,118,446.42, matches. Fixtures recomputed independently: test 1 $3,118,446.42; test 2 $4,803,418.77; test 3 $42,293.30, all match fixtures.json.

## Open issues

1. Mismatches found: worked examples 0, Excel recalculation 0, fixture cases 0 of 141. The library and fixtures were not changed.
2. Snapshot status: `docs/SNAPSHOT.md` says F-CORE-49 and the F-CORE-01, -02, -45, -47 and -48 edits were mirrored by hand on 22 Nov 2026, not re-exported. Re-check those six entries after the next export.
3. F-CORE-11, -16, -17 and -18 test 2 label Birchwood Plaza's $434,000 as NOI. Running Deals calls it stabilized NCF ($480,000 NOI less $46,000 reserves). The numbers agree; the label in the library may need fixing.
4. F-CORE-12 test 2 uses Birchwood Plaza's $720,000 (base rent plus expense recoveries) as GPR. F-CORE-07 says other income stays out of GPR. Recoveries are not rent. Decide whether the library should call this "gross potential income". The learner text uses that phrase.
5. F-CORE-17 and -18 fixtures show unrounded loan amounts; the $1,000 round-down (Pricing structure) is applied only at F-CORE-19. The library's rounding lines for -17 and -18 say "round the final loan down", which could be read as applying to each test. Consider rewording.
6. F-CORE-24: the library's worked example and test 1 (cash $110,000, securities $30,000, retirement $50,000, cash to close $75,800) do not match Maple Run ($95,000, $40,000, $60,000, $74,100 → $90,900). They are not labelled Maple Run, so this is not an error, but learners may expect a match. The learner layer uses the Maple Run figures.
7. F-CORE-32: Running Deals settles the Cedar Court bridge at principal plus exit fee ($5,165,700) with no accrued interest. The learner text treats that as a payoff on a paid-to date and shows the library's 9-day case beside it. Confirm that reading, or add the accrued days to Running Deals.
8. F-CORE-36: Running Deals says Maple Run's appraisal was "dated 12 days before closing". The rule tests the effective date, and the library warns against using the report date. Running Deals should say which date it means; the learner layer uses library test 1 instead.
9. F-CORE-02, -07 and -12 combine running-deal numbers with one library-test input (300-month amortization for Birchwood; $1,300 average rent for Cedar Court). Running Deals does not state Birchwood's amortization or Maple Run's refinance amortization (the $1,713.08 payment implies 360 months). Consider adding both to Running Deals.
10. F-CORE-42, -47 and -49 are library what-ifs on Birchwood Plaza (foreclosure values, a 10-year term, a January 2029 start). Running Deals has no such events. The learner text labels them as what-ifs.
11. F-CORE-27 Excel check: Running Deals gives only ranges for Dana Reyes's six flips ("last 36 months", "50-100% owner"). The LibreOffice harness used the boundary case (36 months, 50%) for each. The count and tier do not depend on the exact values inside those ranges.
12. Legal statements: CLAUDE.md asks for `[VERIFY]` tags, but quality bar 1.2 bars raw tags in learner prose. Tags sit in a separate `verify` field for Audit mode (F-CORE-06, -14, -28, -31, -40, -48). The site renderer needs to show them only in Audit mode.
13. Training label: the JSON array carries no label field; the site shows it once in the notice bar (quality bar 1.4). This Markdown file carries it at the top.
14. Plain names differ from library names where the library uses a code-like or jargon title (for example "Maximum loan by coverage" for "Maximum loan by DSCR"). Both are in the JSON (`name`, `libraryName`).
15. Quick-check items (layout C step 13) and key highlights (step 4) were not in scope. They are still needed before the pages meet quality bar 4.1.
16. Concept links added by judgment (the Theory Map does not list the formula under that concept): F-CORE-03 → TM-13; F-CORE-21 → TM-17; F-CORE-27 → TM-20; F-CORE-32 → TM-08; F-CORE-34 → TM-32; F-CORE-35 → TM-33; F-CORE-36 → TM-01; F-CORE-37 → TM-32; F-CORE-47 → TM-29; F-CORE-49 → TM-29. Review them, or add the formulas to the Theory Map.

## Self-check

- All 47 formula IDs are present, F-CORE-01 to -37 and -40 to -49, each with exactly three takeaways.
- Every worked example was recomputed with Decimal and ROUND_HALF_UP; 0 mismatches.
- Every Excel formula was written to a workbook, recalculated in LibreOffice and compared at display precision; 0 mismatches.
- All 141 core fixture cases were recomputed independently of the reference script; 0 mismatches.
- Learner prose was linted for codes, author words and sentences over 25 words; 0 findings.
- Every variable with a document source names a Document Registry entry; policy inputs name a Model Credit Policy section instead.
- No policy limit was invented: every limit quoted appears in the Model Credit Policy snapshot or Running Deals.
- Money uses $1,234.56 and a true minus sign; interest is Actual/360 with the funding day counted and the payoff day not.

## What to look up yourself

- Excel's PMT, PV, IRR, EOMONTH and ROUNDDOWN help pages, to confirm argument order and sign conventions.
- The Fannie Mae Multifamily Guide and a Freddie Mac multifamily note, for how Actual/360 accrual works with a 30/360 payment.
- The State Law Table rows for Ohio, North Carolina and Indiana, for usury, fee and default-interest limits.
- A cap rate and debt yield explainer from a regulator or a university real estate course, to compare definitions.

## How to check it

- Rerun the generator (`ll_build.py` with `ll_calc.py`, `ll_fixtures.py`, `ll_content_a.py` and `ll_content_b.py`). These were run from a session scratch folder and are not in the repo; add them under `scripts/` if you want them kept. The build prints any mismatch or lint finding.
- Open the generator's `ll_excel_check.xlsx` (LibreOffice-recalculated copy in `recalc/`) and compare each sheet's output cell with the Checks line above.
- Pick three formulas and redo the worked example by hand or on a calculator. Match the result to the cent.
- Compare each worked-example input with `data/running-deals/running-deals.md` or the library's test table.
- Search the JSON learner fields for patterns like `F-CORE`, `CORE-` or `TM-`; only the `id`, `related`, `concepts`, `docId` and `verify` fields should match.
