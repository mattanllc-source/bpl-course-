**Model policy for training - not for live lending decisions.** Fictional data only.

```bpl:lesson
module: c04
key: c04-coverage
number: 4.4
title: Coverage and the Cushion
summary: Coverage tells you whether a property can pay its loan. The cushion tells you how much can go wrong before it cannot.
minutes: 14
level: Intermediate
replaces: 4, 5
reviewed: 23 Nov 2026
policy: Each loan type sets its own coverage minimum and test rate. For Cedar Court, see Model Credit Policy, Multifamily Part 2B: Value-add bridge and stabilized bridge.
audit: Converted from C4 T4 (DSCR at full precision) and T5 (break-even and the cushion). Formulas F-CORE-11, F-CORE-12, F-MF-12. Rules MF-BR-07, MF-BR-09, MF-BR-11.
```

```bpl:objectives
- Calculate interest coverage and compare it with a minimum at full precision.
- Measure the cushion and how much vacancy erases it.
```

```bpl:highlights
- Coverage is [ncf]net cash flow[/ncf] divided by the year's [ds]test debt service[/ds].
- The cushion is the cash flow left after those payments.
- A thin cushion disappears fast when vacancy rises.
```

```bpl:formula
title: Interest coverage formula
show: Coverage = [ncf]Net cash flow[/ncf] ÷ [ds]Test debt service[/ds]
label: Coverage equals net cash flow divided by test debt service
- [ncf]Net cash flow:[/ncf] net operating income after replacement reserves (US dollars a year).
- [ds]Test debt service:[/ds] the year's interest-only payments at the rate the policy tests (US dollars a year).
audit: F-MF-12 (interest coverage on NCF); F-CORE-11 (DSCR)
```

## Why the income base matters

Core teaches coverage on net operating income. Each loan type then sets its own income base.

Multifamily and commercial loans test net cash flow, which is net operating income less replacement reserves. Reserves are real cash the property must set aside, so the test leaves them out of the income.

On a bridge loan the payment is interest only. The policy tests it at the higher of the note rate and the cap strike plus the spread. For Cedar Court that is the higher of 7.65% and 4.25% + 4.00% = 8.25%.

```bpl:worked
title: Example: Cedar Court today
kicker: WORKED EXAMPLE · DEAL SHEET
deal: Cedar Court
facts: Deal = Cedar Court; Property = 50 units, Charlotte, NC; Loan type = Value-add bridge; As of = Closing
deal-figures: $395,000; $358,050; $4,340,000; $410,000; $15,000
| Line | Amount |
| --- | --- |
| [ncf]Net cash flow[/ncf] | $395,000 |
| [ds]Test debt service[/ds] | $358,050 |
| Cushion (cash flow − debt service) | $36,950 |
| Coverage | 1.1032x |
total: Coverage
step Inputs: [ncf]Net cash flow[/ncf] $395,000 ($410,000 net operating income − $15,000 reserves). [ds]Test debt service[/ds] $4,340,000 funded × 8.25% = $358,050.
step Substitute: $395,000 ÷ $358,050.
step Compute: = 1.1032x to 4 decimals. The cushion is $395,000 − $358,050 = $36,950.
step Read: Income covers the year's interest 1.10 times. There is $36,950 to spare.
step Policy test: The bridge minimum is 1.00x. 1.1032x is above it, so no interest reserve is needed.
audit: F-MF-12; MF-BR-07; deal RD-MF-01 Role 2
```

```bpl:predict
id: c04-cov-predict
stem: Each point of extra vacancy loses 1% of full-occupancy rent, $7,800. The 4% management fee falls with it, so cash flow drops $7,488. Roughly how many points before income stops paying the loan?
- About 2
- About 5*
- About 10
- About 20
before: Pick one, then test it in the exercise below.
after: Locked in. Now test it below.
```

```bpl:desk
id: c04-cov-desk
title: Interactive exercise: stress the cushion
deal: Cedar Court
deal-figures: $780,000; $395,000; $358,050; includes 4% management
task: **Your task:** drag the slider until income no longer pays the loan. Was your prediction right?
let gpr = 780000 | deal
let ncf0 = 395000 | deal
let ds = 358050 | deal
let rent = gpr × 1%
let mgmt = 4%
let per = rent × (1 − mgmt)
slider k = 0 | min 0 | max 10 | step 1
let lost = k × per
let ncf = ncf0 − lost
let cov = ncf ÷ ds
label: Extra vacancy, in points: {k|int} ({lost|money} of cash flow lost a year)
valuetext: Extra vacancy {k|int}, {lost|money} of cash flow lost a year
bar: ncf | Net cash flow | ncf
bar: ds | Test debt service | ds
scale: ncf0
marker: ds | Dashed line: test debt service. Cash flow left of it means coverage below 1.00x.
working: ({ncf0|money} − {k|int} × {per|money}) ÷ {ds|money} = {cov|x4}, where {per|money} = {rent|money} × (1 − 4%)
pass-if: ncf >= ds
pass: Income still pays the loan. | Money left after payments: {ncf − ds|money}.
fail: Income no longer pays the loan. | Short by {ds − ncf|money} a year. The cushion is gone.
predict: c04-cov-predict
reveal: Coverage first falls below 1.00x at {k|int} points.
expect: k = 0 → cov|x4 = 1.1032x
expect: k = 1 → per|money = $7,488
expect: k = 4 → cov|x4 = 1.0195x
expect: k = 5 → ncf|money = $357,560
expect: k = 5 → cov|x4 = 0.9986x
expect: k = 5 → ds − ncf|money = $490
audit: F-MF-12; stress of 1% of GPR per point, net of the 4% management fee in the appraiser's expenses (RD-MF-01 property table); owner decision 23 Nov 2026
```

## Why it happens

The cushion is $36,950. One point of vacancy loses $7,800 of rent. Management is 4% of collected income, so the fee falls by 4% × $7,800 = $312. Cash flow drops $7,800 − $312 = $7,488 a point. The cushion lasts $36,950 ÷ $7,488 = 4.9 points. A loan at 1.10x looks safe, yet a few empty units end it. That is why lenders stress-test coverage before they approve.

Break-even occupancy is the quick method. It holds all expenses fixed, including the management fee, and leaves out other income and reserves: ($310,000 + $358,050) ÷ $780,000 = 85.6%. Against 90.0% economic occupancy, that is about 4.4 points. Holding the fee fixed is why its cushion is smaller. Both views say about five points of vacancy end the cushion.

```bpl:policy
title: From the credit policy
text: Below 1.00x, a value-add bridge must fund an interest reserve for the shortfall for 12 months. At 5 extra points the shortfall is $490 a year. See Model Credit Policy, Multifamily Part 2B: Value-add bridge and stabilized bridge.
audit: MF-BR-07
```

```bpl:exhibit
id: c04-cov-exhibit
title: EXHIBIT 4.4-A · CEDAR COURT UNDERWRITING SUMMARY
tag: FROM THE DEAL FILE, FICTIONAL
deal: Cedar Court
facts: Property = Cedar Court, Charlotte, NC; Prepared by = Underwriter; Loan type = Value-add bridge; As of = Closing
deal-figures: $780,000; $702,000; $18,000; $720,000; $310,000; $410,000; $15,000; $395,000; $358,050
caption: Underwritten figures for the first year. Amounts are a year.
| Line | Amount | Source |
| --- | --- | --- |
| Gross potential rent | $780,000 | Rent roll at market |
| Rent-roll collections | $702,000 | Rent roll, annualized |
| Other income | $18,000 | T-12 |
| Effective gross income | $720,000 | Collections + other income |
| Operating expenses | −$310,000 | Appraiser's estimate |
| Net operating income | $410,000 | Income − expenses |
| Replacement reserves | −$15,000 | 50 units × $300 |
| Net cash flow | $395,000 | NOI − reserves |
| Test debt service | $358,050 | $4,340,000 × 8.25% |
flag: Net cash flow
flag-text: Use this line
stem: Which line from Exhibit 4.4-A goes on top of Cedar Court's coverage ratio?
- A: Net operating income, $410,000.
  why: Net operating income is before reserves. Multifamily tests net cash flow, so this overstates coverage.
- B*: Net cash flow, $395,000.
  why: Multifamily coverage uses net cash flow: income after expenses and reserves.
- C: Effective gross income, $720,000.
  why: Income before expenses cannot pay the loan. Expenses come first.
- D: Net operating income plus reserves, $425,000.
  why: Reserves come off income, not on top of it. This adds them back the wrong way.
next: The flagged row is now marked in the exhibit. Coverage is $395,000 ÷ $358,050 = 1.1032x.
audit: F-MF-12; MF-GEN-05; MF-GEN-06
```

```bpl:check
id: c04-cov-check
stem: A loan's coverage is 1.2495x and its policy minimum is 1.25x. What do you report?
- A: Pass: it rounds to 1.25x.
  why: Rounding first hides the shortfall. The test uses the full figure.
- B*: Fail: 1.2495x is below 1.25x.
  why: The full-precision figure is below the minimum, so the test is not met.
- C: Pass: coverage is above 1.00x.
  why: Above 1.00x means income pays the loan, not that the minimum is met.
- D: Ask for an appraisal first.
  why: Value does not change coverage. You already have the two numbers you need.
working: 1.2495 < 1.2500, so the test is not met.
audit: F-CORE-11; library test 3
```

```bpl:case
id: c04-cov-case
title: Committee decision: Cedar Court at month 24
kicker: CREDIT COMMITTEE · EXTENSION REQUEST
tag: PRACTICE: NOT GRADED
deal: Cedar Court
facts: Deal = Cedar Court; Property = 50 units, Charlotte, NC; Loan type = Value-add bridge; Date = Month 24, initial maturity
deal-figures: $5,140,000; $520,000; $560,000; $25,700; $930,000; $514,000; $19,275; $462,600; $885,025
intro: The renovation is done, but cash flow is short of the plan. The borrower asks for the first 6-month extension. You sit on the committee. Make three decisions, in order.
situation: Capex finished at month 18 and occupancy reached 93%. Trailing cash flow is $520,000, short of the $560,000 plan. SOFR has been 5.00% since month 10. The rate cap ends with the initial term.
| Fact | Figure | Note |
| --- | --- | --- |
| Loan, fully funded | $5,140,000 | Capex draws complete |
| [ncf]Net cash flow, trailing[/ncf] | $520,000 | Plan: $560,000 stabilized |
| Capex complete | 100% | Finished at month 18 |
| 1-month Term SOFR | 5.00% | Course assumption, not a forecast |
| Note rate (SOFR + 4.00%) | 9.00% | Cap strike 4.25%, ends at month 24 |
| Extension fee (0.50%) | $25,700 | $5,140,000 × 0.50% |
| Marcus Hale, last verified liquidity | $930,000 | Required: $514,000 |
decision: Do the extension tests support the request?
stem: The loan has two 6-month extension options. Choose the response that the facts and the policy support.
- A*: Approve, on condition that the rate cap is extended.
  why: Three tests are met today. The fourth, an extended cap, becomes a condition of approval.
- B: Decline: cash flow of $520,000 is below the $560,000 plan.
  why: The borrower must pay off at maturity or default. Missing the plan matters for the refinance, but it is not an extension test.
- C: Approve only after a paydown that brings cash flow up to plan.
  why: You impose a test the policy does not set. With every test met, a forced paydown has no policy basis.
- D: Approve with no conditions: the borrower has performed.
  why: The loan would run six months with no hedge while SOFR sits above the strike. The policy requires the cap to be extended.
policy: Multifamily Part 2B: an extension needs no default, an extended cap, capex at least 75% complete and a current debt yield of at least 7.5%.
working: Debt yield: $520,000 ÷ $5,140,000 = 10.12%. Capex: 100% complete.
decision: What hedge do you require for the extension?
stem: The cap ends at initial maturity. SOFR is 5.00%, above the 4.25% strike, so a new cap is in the money and costs more.
- A*: A 6-month cap on the full $5,140,000 notional from an A-rated counterparty.
  why: The borrower pays about $19,275 for the cap (course assumption). Every dollar of the loan stays hedged for the extension.
- B: Waive the cap: coverage at 9.00% is already 1.12x.
  why: Coverage holds only at today's rate. A further SOFR rise would erode it with no hedge, and the policy allows no exception here.
- C: Accept a 6-month interest reserve instead of a cap.
  why: A reserve covers a shortfall that already exists. It does not cap future rate rises, and it does not satisfy the cap rule.
- D: Cap only the $4,340,000 funded at closing, to save cost.
  why: The capex draws, now $800,000, would float unhedged. The notional must equal the full commitment.
policy: Multifamily Part 2B: a rate cap is required for the initial term and any extension, from an A-rated counterparty, on a notional equal to the full commitment. Multifamily Part 2D allows no exception to the cap rule.
working: Course assumption: $5,140,000 × (5.00% − 4.25%) × 6 ÷ 12 = $19,275.
decision: How do you handle the cost of extending?
stem: The fee and the cap cost $44,975 together. The borrower may need Marcus Hale, the qualifying guarantor, to fund them.
- A*: Re-verify Marcus's liquidity with current statements, then approve.
  why: After the costs his liquidity is about $885,025, still above the $514,000 required. Fresh statements confirm it.
- B: Approve on his last verified $930,000.
  why: That figure dates from underwriting, about 24 months ago. The committee would rely on balances nobody has checked since.
- C: Require a 12-month interest reserve funded now.
  why: Coverage on the extension is 1.12x, above 1.00x, so the policy does not call for a reserve. You add cost with no basis.
- D: Decline: the costs cut his liquidity too far.
  why: His liquidity after costs still clears the requirement by $371,025. Declining loses a performing loan.
policy: Core Part 2B: post-closing liquidity must meet the greater of 10% of the commitment or 6 months' interest, plus 5% of other open loans with us. It is verified with the two most recent monthly statements.
working: $930,000 − $25,700 − $19,275 = $885,025; required 10% × $5,140,000 = $514,000.
debrief: **Decision:** approve the first 6-month extension, with three conditions.

1. The borrower buys a 6-month cap extension on the full $5,140,000 notional, from an A-rated counterparty, assigned to the lender.
2. The borrower pays the $25,700 extension fee.
3. Marcus's liquidity is re-verified with current statements before the extension closes.

| Test | Working | Result |
| --- | --- | --- |
| Capex complete | 100% vs 75% needed | ✓ Meets |
| Current debt yield | $520,000 ÷ $5,140,000 = 10.12% | ✓ Meets 7.5% |
| [ds]Test debt service[/ds] at 9.00% | $5,140,000 × 9.00% = $462,600 | Input |
| Coverage on extension | $520,000 ÷ $462,600 = 1.1241x | ✓ At least 1.00x |
| Liquidity after costs | $930,000 − $25,700 − $19,275 = $885,025 | ✓ Above $514,000 |

**What to watch next.** The extension buys time, not a refinance. The take-out is sized on $560,000 of cash flow. If cash flow stays near $500,000, the refinance falls $279,377.46 short of the payoff.
```

```bpl:takeaways
- Coverage is cash flow divided by the year's loan payments.
- Divide the cushion by cash flow lost per point to see how much vacancy it absorbs.
- Compare with a minimum at full precision, never after rounding.
```

## Self-check

1. Net cash flow is $395,000 and test debt service is $358,050. What is the cushion? **Answer:** $395,000 − $358,050 = $36,950.
2. Vacancy rises 4 points. What is coverage? **Answer:** ($395,000 − 4 × $7,488) ÷ $358,050 = $365,048 ÷ $358,050 = 1.0195x. It still passes 1.00x.
3. Why does a point of vacancy cost $7,488 of cash flow, not $7,800? **Answer:** Management is 4% of collected income, so it falls by 4% × $7,800 = $312. $7,800 − $312 = $7,488.
4. At 5 points, by how much is the loan short? **Answer:** $395,000 − 5 × $7,488 = $357,560. $358,050 − $357,560 = $490 a year. Coverage is $357,560 ÷ $358,050 = 0.9986x.

## What to look up yourself

1. Open Fannie Mae's Multifamily Selling and Servicing Guide and find the section on underwritten net cash flow. Note the vacancy and management figures it uses. Compare them with the course's 5% vacancy floor and 3% management minimum.
2. Find a published bridge-lender term sheet that states an interest-reserve trigger. Compare its coverage test with Multifamily Part 2B.

## How to check it

In a spreadsheet, `=(395000-5*7800*(1-4%))/358050` gives 0.99863, the 0.9986x stress result. `=395000/358050` gives 1.10320, the 1.1032x coverage today.
