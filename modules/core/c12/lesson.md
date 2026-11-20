**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C12-lesson-v0, C12-quiz-v0 (sets A and B), C12-ojt-v0, C12-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C11 |
| Bloom's levels | 3 and 4 (LD-02) |
| Formulas | F-CORE-01, -05, -22, -32; F-RES-06, -18, -25 (new, SUGGESTED); F-COM-19 |
| Rules | CORE-SVC-01 to -07 (-05 to -07 new); RES-FF-08, -09, -11; MF-BR-09 to -11; COM-BR-02, -03, -05; COM-GEN-12; CORE-CLS-04, -05 |
| Running deals | Worked examples: RD-RES-01 Maple Run (draws, extension) and RD-COM-01 Birchwood Plaza (sweep). Practice: RD-MF-01 Cedar Court (LD-08) |
| Status | v0. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0, 20 Nov 2026: first draft; all numbers computed in code. New rules CORE-SVC-05 (draw controls), -06 (reporting) and -07 (risk rating and watch list). New formula F-RES-25 (in-balance shortfall) |

## Timing plan

| Segment (LD-04) | Minutes |
| --- | --- |
| 1 Hook | 5 |
| 2 Objectives | 5 |
| 3 Teach chunks T1-T6, with worked examples | 95 |
| 5 Practice | 40 |
| 6 Quiz | 25 |
| 8 Job aid walk-through and wrap-up | 10 |
| Total | 180 |
| 7 OJT task (extra, per LD-03) | 45 |

## 1. Hook (5 minutes)

Month 7 at Maple Run. The roofer quits, and the new one costs $8,000 more. Dana asks for her next draw as usual.

Nothing has defaulted. But if we pay the draw without checking, we may fund a job that can no longer finish. Servicing is where a good loan stays good, or quietly goes bad.

## 2. Objectives

By the end of C12, you will be able to:

1. **Process** a draw request, including the in-balance test (RES-FF-09; CORE-SVC-05; F-RES-06, -18, -25).
2. **Calculate** monthly interest and rate-cap payments (F-CORE-01; MF-BR-09; COM-BR-03; CORE-CLS-04).
3. **Decide** an extension request (CORE-SVC-01, -02; RES-FF-11; MF-BR-11; COM-BR-02; F-CORE-22).
4. **Monitor** reporting, insurance, taxes and cash management (CORE-SVC-06; COM-GEN-12; F-COM-19).
5. **Assign** a risk rating and decide watch-list status (CORE-SVC-07).
6. **Calculate** a payoff (F-CORE-32).

## 3. Teach

### T1. Draws (Objective 1, 25 minutes)

A rehab or capex holdback is paid in arrears, after we see the work (RES-FF-09, MF-BR-10, COM-BR-05). Interest runs on drawn funds only (RES-FF-08).

Every draw is a small new loan decision. Lenders check the inspection, the budget, the lien waivers and the title before money moves [VERIFY: Built, construction lending primer, 2025; checked 20 Nov 2026]. Missing lien waivers matter because unpaid trades can lien the property ahead of our later advances.

**New rule CORE-SVC-05.** Before each draw:

- a third-party inspection confirms work in place against the budget lines;
- conditional lien waivers cover this draw, and unconditional waivers cover the last one;
- a title date-down shows no new liens;
- insurance is in force; and
- the loan is in balance (F-RES-25). The borrower deposits any shortfall before the draw.

**F-RES-25: In-balance shortfall (SUGGESTED, new).**

1. Formula: shortfall = max(0, cost to complete − undrawn holdback).
2. Inputs (Maple Run, month 7): unpaid budget cost $25,000 after the overrun is moved to contingency; undrawn holdback $100,000 − $75,000 = $25,000.
3. Substitution: max(0, $25,000 − $25,000).
4. Result: $0. The loan is in balance.

**Worked example 1: the roof overrun.** The $8,000 overrun fits inside the $9,000 contingency line. Approve a written reallocation from contingency to roof; $1,000 of contingency remains. The total holdback stays $100,000. Re-inspect before the month-8 draw.

**What-if: the overrun is $12,000.** Contingency covers $9,000. Cost to complete rises to $28,000 against $25,000 undrawn. Shortfall: max(0, $28,000 − $25,000) = $3,000. Dana deposits $3,000 before any further draw.

**Worked example 2: Maple Run draws (F-RES-06, F-RES-18).**

| Month | Work in place | % complete | Draw: min(% × $100,000, $90,000) − prior | Balance after |
| --- | --- | --- | --- | --- |
| 2 | $30,000 | 30% | $30,000 − $0 = $30,000 | $270,000 |
| 4 | $55,000 | 55% | $55,000 − $30,000 = $25,000 | $295,000 |
| 6 | $75,000 | 75% | $75,000 − $55,000 = $20,000 | $315,000 |
| 8 | $90,000 | 90% | $90,000 − $75,000 = $15,000 | $330,000 |
| 10 | $100,000 | 100% | Final 10% released: $10,000 | $340,000 |

### T2. Interest billing and rate caps (Objective 2, 15 minutes)

Interest is billed monthly in arrears on the drawn balance, Actual/360 (F-CORE-01; CORE-CLS-04). A 31-day month costs more than a 30-day one.

**Worked example 3: Maple Run, a 31-day month at $315,000 (F-CORE-01).**

1. Formula: interest = balance × rate ÷ 360 × days.
2. Inputs: $315,000; 10.25%; 31 days.
3. Substitution: $315,000 × 10.25% ÷ 360 × 31.
4. Result: $2,780.31. A 30-day month is $2,690.63.

**Rate caps.** Floating-rate bridges carry a SOFR cap (MF-BR-09, COM-BR-03). When SOFR is above the strike, the cap counterparty pays the difference on the same Actual/360 basis. Servicing checks the cap is in force, assigned to us and extended with any loan extension.

**Worked example 4: Birchwood, month 18 (deal file).** SOFR 4.75%, so the rate is 8.75%. Funded balance $3,460,000. Interest for 30 days: $3,460,000 × 8.75% ÷ 360 × 30 = $25,229.17. The cap pays 0.50% above 4.25%: $3,460,000 × 0.50% ÷ 360 × 30 = $1,441.67. Net cost $23,787.50.

### T3. Extensions (Objective 3, 15 minutes)

An extension is a borrower option, not a right. It exists only if every test is met on the date (CORE-SVC-01).

| Family | Tests | Fee | Rule |
| --- | --- | --- | --- |
| Residential RTL | No default; payments current; at least 75% complete | 0.50 point of commitment, 3 months each, at most 2 | CORE-SVC-02, RES-FF-11 |
| Multifamily bridge | No default; cap extended; capex 75% complete; debt yield 7.5% | 0.50%, 6 months each | MF-BR-11 |
| Commercial bridge | No default; in-place DSCR 1.00x | At least 0.25% | COM-BR-02 |

**Worked example 5: Maple Run, month 12 (F-CORE-22).**

1. Formula: fee = commitment × fee rate.
2. Inputs: $340,000; 0.50%.
3. Substitution: $340,000 × 0.50%.
4. Result: $1,700.00. Tests: no default, current, 100% complete. Approve one 3-month extension to 15 Apr 2028.

### T4. Monitoring and cash management (Objective 4, 20 minutes)

Between draws and maturity, we watch four things: reports, insurance, taxes and cash.

**New rule CORE-SVC-06.** Reporting and checks:

| Item | Residential | Multifamily and commercial |
| --- | --- | --- |
| Rent roll and operating statement | Lease copy at rent-up | Monthly, within 45 days of month-end |
| Borrower and guarantor financial statements | Annually, within 90 days of year-end | Same |
| Insurance renewal evidence | Before each expiry | Same |
| Tax payment | Confirmed each tax cycle, unless escrowed | Same |
| Site inspection | Each draw; annually after rehab | Annually |

A late report counts as a reporting default after written notice. It also goes on the watch-list review (CORE-SVC-07).

**Cash management.** Commercial loans carry a springing lockbox (COM-GEN-12). A sweep starts if DSCR on debt service actually due falls below 1.10x, or a 20%+ tenant gives notice.

**Worked example 6: Birchwood, month 9.** The largest tenant (21.4% of rent) gives notice. The sweep starts (COM-GEN-12). What-if: trailing NCF is still $254,000 and debt service due is $218,790 (F-COM-19):

1. Formula: sweep a month = max(0, (NCF − debt service) ÷ 12).
2. Inputs: $254,000; $218,790.
3. Substitution: ($254,000 − $218,790) ÷ 12.
4. Result: $2,934.17 a month, held in a leasing reserve until a replacement lease is signed.

### T5. Risk rating and the watch list (Objective 5, 15 minutes)

US bank regulators share one scale. Special mention, substandard, doubtful and loss mark rising weakness; everything else is pass [VERIFY: OCC Bulletin 2026-56, 10 Nov 2026; checked 20 Nov 2026]. Many banks split pass further, for example a pass/watch grade. We use the same scale so our ratings read the way any examiner or buyer expects.

**New rule CORE-SVC-07.**

| Rating | Meaning (plain English) | Examples |
| --- | --- | --- |
| 1 Pass | Performing to plan | Draws on schedule; reports on time |
| 2 Pass/Watch | Performing, but a trigger has fired | Sweep started; overrun covered by contingency; maturity within 90 days with no confirmed exit [CONFIRM] |
| 3 Special mention | Potential weakness that could worsen if not fixed | Out of balance; extension test failed; payment 30+ days late |
| 4 Substandard | Well-defined weakness; loss possible if not corrected | In default; exit no longer covers the loan |
| 5 Doubtful / Loss | Full collection unlikely, or uncollectable | Move to C13 workout |

Rate every loan at each monthly review. Ratings 2 and above go on the watch list, with an action and an owner. Review the watch list monthly.

**Worked example 7: Maple Run ratings.** Month 6: 1 Pass. Month 7, overrun covered by contingency: 2 Pass/Watch. Month 10, rehab complete: back to 1. What-if, 45 days late in month 8: 3 Special mention, and the DSCR exit fails (RES-DSCR-09).

### T6. Payoff (Objective 6, 5 minutes)

**Worked example 8: Maple Run refinance payoff, 10 days after the last paid-to date (F-CORE-32).**

1. Formula: payoff = principal + interest for days since the paid-to date + exit fee + unpaid fees.
2. Inputs: $340,000; 10.25%; 10 days; no exit fee (RES-FF-12).
3. Substitution: $340,000 + $340,000 × 10.25% ÷ 360 × 10.
4. Result: $340,968.06. The payoff day itself does not accrue (D-CONV-02).

After payoff: release the lien, return any escrow balance and close the trailing log (CORE-CLS-05).

## 5. Practice (40 minutes)

Use RD-MF-01 Cedar Court. Facts from the deal file: commitment $5,140,000; $4,340,000 funded at closing; capex $800,000 drawn in arrears; cap strike 4.25%.

1. Month 9: capex inspected at $400,000 of work in place, nothing drawn yet. Work still to do is $400,000. Lien waivers and title date-down are clean. What do you release, and is the loan in balance?
2. Month 10: SOFR is 5.00%. Work 30 days' interest and the cap payment.
3. Month 10: the March rent roll arrives 60 days after month-end. What happens?
4. Month 24: no default; capex 100%; NCF $520,000; cap extended. Decide the extension and the fee.
5. Rate the loan at month 10 and at month 24.
6. Month 27: payoff after 9 days, at 9.00%, exit fee 0.50% (F-CORE-32 test 3).

**Answer key.**

1. Release $400,000 (MF-BR-10, CORE-SVC-05). Cost to complete is $400,000 to pay now plus $400,000 still to do. F-RES-25: max(0, $800,000 − $800,000) = $0, in balance. Balance becomes $4,740,000.
2. Interest $4,740,000 × 9.00% ÷ 360 × 30 = $35,550.00. Cap $4,740,000 × 0.75% ÷ 360 × 30 = $2,962.50. Net $32,587.50.
3. It is 15 days past the 45-day deadline (CORE-SVC-06). Send written notice; add the loan to the watch list as 2 Pass/Watch until it arrives (CORE-SVC-07).
4. Debt yield $520,000 ÷ $5,140,000 = 10.12%, above 7.5%. Approve 6 months (MF-BR-11). Fee $5,140,000 × 0.50% = $25,700.00 (F-CORE-22).
5. Month 10: 2 Pass/Watch while the report is late; otherwise 1. Month 24: 1 Pass; the exit is the refinance into our term loan.
6. With the fee: $5,140,000 + $5,140,000 × 9.00% ÷ 360 × 9 + $25,700 = $5,177,265.00. Refinanced into our term loan, the fee is waived (deal file): $5,151,565.00.

**Common wrong answers.** Paying a draw without a title date-down. Charging the extension fee on the funded balance instead of the commitment. Leaving a late report off the watch list.

## 6. Quiz: C12-quiz-v0

Pass mark 80%. Items marked (C) are critical. Each set has 12 items and covers all six objectives.

### Set A

1. (O1) 60% complete; $100,000 holdback; $25,000 drawn. Draw? **Answer:** $35,000.00 (F-RES-18).
2. (O1) Cost to complete $40,000; undrawn holdback $32,000. Action? **Answer:** borrower deposits $8,000 before the next draw (F-RES-25). (C)
3. (O1) Which document shows no new liens since the last draw? **Answer:** the title date-down (CORE-SVC-05).
4. (O2) $200,000 at 12.00% for 31 days? **Answer:** $2,066.67 (F-CORE-01).
5. (O2) SOFR 5.25%, strike 4.25%, $1,000,000, 30 days. Cap payment? **Answer:** $833.33.
6. (O3) RTL loan 70% complete at maturity. Extend? **Answer:** no; 75% needed (RES-FF-11). (C)
7. (O3) Extension fee on a $3,520,000 commercial commitment at 0.25%? **Answer:** $8,800.00 (F-CORE-22).
8. (O4) When is a multifamily rent roll due? **Answer:** monthly, within 45 days of month-end (CORE-SVC-06).
9. (O4) DSCR on debt service due falls to 1.08x on a commercial bridge. Action? **Answer:** start the cash sweep (COM-GEN-12). (C)
10. (O5) Which ratings go on the watch list? **Answer:** 2 Pass/Watch and worse (CORE-SVC-07).
11. (O5) A payment is 35 days late. Rating? **Answer:** 3 Special mention (CORE-SVC-07).
12. (O6) Does the payoff day accrue interest? **Answer:** no (D-CONV-02).

### Set B

1. (O1) 95% complete; $100,000 holdback; $60,000 drawn; not finished. Draw? **Answer:** $30,000.00; the cap is 90% until completion (F-RES-18).
2. (O1) Can a draw be paid against invoices alone? **Answer:** no; inspected work in place only (RES-FF-09, CORE-SVC-05). (C)
3. (O1) Overrun $5,000; contingency $9,000 unused. In balance? **Answer:** yes, after a written reallocation (F-RES-25 = $0).
4. (O2) Interest on $3,460,000 at 8.75% for 31 days? **Answer:** $26,070.14 (F-CORE-01).
5. (O2) Why must the cap be extended with the loan? **Answer:** MF-BR-11 and MF-BR-09 require cap cover for any extension.
6. (O3) Multifamily bridge at maturity: debt yield 7.0%. Extend? **Answer:** no; 7.5% needed (MF-BR-11). (C)
7. (O3) RTL: how many extensions, how long? **Answer:** at most 2 × 3 months (CORE-SVC-02).
8. (O4) Guarantor annual statements: due when? **Answer:** within 90 days of year-end (CORE-SVC-06).
9. (O4) NCF $360,000; debt service $330,772.68; trigger hit. Monthly sweep? **Answer:** $2,435.61 (F-COM-19).
10. (O5) In default and the exit no longer covers the loan. Rating? **Answer:** 4 Substandard (CORE-SVC-07). (C)
11. (O5) How often is the watch list reviewed? **Answer:** monthly (CORE-SVC-07).
12. (O6) $500,000 at 10.00%, 12 days since paid-to, no fees. Payoff? **Answer:** $501,666.67 (F-CORE-32).

## 7. OJT task: C12-ojt-v0 (solo mode)

**Output.** A servicing file for RD-RES-01 Maple Run, months 0-14: draw log, interest bills, extension memo, ratings by month and the payoff letter.

**Source.** Running deals file. No live data.

**Time.** 45 minutes.

**Rubric.**

| Criterion | Pass |
| --- | --- |
| Draws | Each draw matches F-RES-18 and shows the CORE-SVC-05 checks |
| Interest | Each month's bill matches F-CORE-01 for the actual days |
| Extension | Tests and fee cited (CORE-SVC-01, -02; F-CORE-22) |
| Ratings | A rating each month with a reason (CORE-SVC-07) |
| Payoff | Within $0.01 of F-CORE-32 |

**Sign-off.** Self-review against this rubric, dated (solo mode, Bible Section 7).

## 8. Job aid: C12-jobaid-v0 (one page)

**Monthly servicing cycle**

1. **Draw?** Inspection, waivers, title date-down, insurance, in balance. Then pay min(% × holdback, 90%) − prior (CORE-SVC-05; F-RES-18, -25).
2. **Bill.** Balance × rate ÷ 360 × actual days. Check the cap payment (F-CORE-01; MF-BR-09).
3. **Reports.** Rent roll and statement by day 45; annual statements by day 90 (CORE-SVC-06).
4. **Cash.** Sweep test on debt service due (COM-GEN-12; F-COM-19).
5. **Rate.** 1-5; 2 and above go on the watch list (CORE-SVC-07).
6. **Maturity.** Extension tests and fee on commitment (CORE-SVC-01; F-CORE-22).
7. **Payoff.** Principal + interest to the day before payoff + fees (F-CORE-32).

**Mini-example.** Maple Run month 7: $8,000 overrun inside $9,000 contingency. In balance; rate 2 Pass/Watch; re-inspect before the next draw.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A | Quiz B | OJT | Job aid |
| --- | --- | --- | --- | --- | --- | --- | --- |
| O1 Draws | T1 | WE1, WE2 | P1 | 1-3 | 1-3 | Draw log | Step 1 |
| O2 Interest and caps | T2 | WE3, WE4 | P2 | 4-5 | 4-5 | Interest bills | Step 2 |
| O3 Extensions | T3 | WE5 | P4 | 6-7 | 6-7 | Extension memo | Step 6 |
| O4 Monitoring | T4 | WE6 | P3 | 8-9 | 8-9 | None | Steps 3-4 |
| O5 Risk rating | T5 | WE7 | P5 | 10-11 | 10-11 | Ratings | Step 5 |
| O6 Payoff | T6 | WE8 | P6 | 12 | 12 | Payoff letter | Step 7 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| LD-04 order; fits 3 hours | Met: 180 minutes plus 45 OJT |
| Every threshold cites a rule; every calculation a formula | Met. Three new rules and F-RES-25 added |
| Formulas worked in four lines | Met; computed in code |
| Deal numbers match the running deals file | Met. Draws, month-18 Birchwood interest, Cedar month 10 and 24, and the Cedar payoff match the deal file and library tests. The month-9 sweep figure and the $12,000 overrun are labelled what-ifs |
| Quiz sets; one item per objective; critical items | Met: 12 items each; 3 critical in A, 4 in B |
| O4 in OJT | Not met: the OJT has no reporting step. Add one in v1 |
| No open tags | Not met: [VERIFY] on Built and OCC sources; [CONFIRM] on the 90-day maturity trigger. Stays v0 |

**What to look up yourself.**

1. Whether a title date-down endorsement is available, and its cost, in each SLT state.
2. Your state's lien-waiver forms. Some states prescribe statutory forms.

**How to check it.** Maple Run draws add to $30,000 + $25,000 + $20,000 + $15,000 + $10,000 = $100,000. The balance ends at $240,000 + $100,000 = $340,000.
