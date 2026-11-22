# BPL Running Deals

**Fictional training deals - not real people, entities or properties. Model policy for training - not for live lending decisions.** As of Nov 18, 2026

Each deal is worked in role order: originator, then underwriter, then closing and servicing. Do each task before opening its answer key. Rule and formula IDs refer to the Model Credit Policy tab and the Course Bible.

**Reconciled with the Formula Library tab, 19 Nov 2026.** Bridge interest is billed Actual/360 on the funded balance: balance × rate ÷ 360 × actual days (F-CORE-01). Term notes pay on 30/360 and accrue Actual/360; DSCR loans accrue 30/360 (CORE-PRC-06). Revised 22 Nov 2026 after the C0 and C3 reviews (D-CORE-29 to -31). Sizing and coverage tests use the nominal annual rate (D-CONV-01). Interest counts the funding day, not the payoff day (D-CONV-02). Amortizing debt service is the monthly payment rounded to the cent × 12 (F-CORE-03). Results are compared with limits at full precision.

**SOFR path for course what-ifs (D-CORE-27, 22 Nov 2026).** Floating loans start at 1-month Term SOFR 3.65%. A rate stated at a month in a deal timeline holds from that month until a later rate is stated. Cedar Court uses 5.00% from month 10; Birchwood Plaza uses 4.75% from month 18. A what-if for any later month uses the latest stated rate, labelled "course assumption, not a forecast". With both 4.00% margins, that gives 9.00% for Cedar Court and 8.75% for Birchwood Plaza. Maple Run is priced on the RTL grid (F-CORE-28), so SOFR does not apply. Each deal's rate cap still applies.

## RD-RES-01: Maple Run flip-to-rent (Residential)

Harborline Holdings LLC asks for a $340,000 fix-and-flip loan on a single-family home it plans to renovate, lease and refinance into a DSCR loan. Used in R1-R6; numbers match the Course Bible glossary flip except where this file says otherwise.

**Borrower and guarantors**

| Item | Detail |
| --- | --- |
| Borrower | Harborline Holdings LLC, an Ohio LLC formed 2021, in good standing; purpose: acquire, renovate and hold residential real estate |
| Owners | Dana Reyes 60% (managing member); Sam Okafor 40% |
| Dana Reyes | Bureau scores 705 / 712 / 730. Lives at a separate Columbus address she owns. Married to Chris Reyes, who has no ownership interest |
| Dana's assets | Cash $95,000; brokerage account $40,000; vested 401(k) $60,000; unused HELOC $75,000. Total assets $1,150,000; total liabilities $610,000 |
| Dana's track record (she lists 7) | 6 flips sold in the last 36 months as 50-100% owner; 1 flip sold 14 months ago where she owned 15% |
| Dana's background | One state tax lien of $8,000, filed 2019, paid and released 2020. No bankruptcy, foreclosure, felony or open litigation |
| Sam Okafor | Bureau scores 640 / 655 / 668. Liquidity $12,000. No adverse background items |
| Other loans with us | None |

**Property and project**

| Item | Detail |
| --- | --- |
| Address | 1418 Maple Run Drive, Columbus, Ohio 43214, in the Clintonville area (fictional street) |
| Type | Single-family, 3 bed / 2 bath, 1,640 sf, built 1962; vacant; not rural |
| Purchase | $300,000, arm's-length contract with an unrelated seller |
| Appraisal (lender-ordered) | As-is $310,000; ARV $520,000 ($317 a sf); Form 1007 market rent $2,400 a month; dated 12 days before closing. Market check, 22 Nov 2026: the Columbus metro single-family rent index is $2,084, a typical observed rent, not an average (Zillow ZORI, smoothed, Oct 2026). HUD's FY2026 3-bedroom Fair Market Rent for the Columbus HUD Metro FMR Area is $1,715 (CMHA schedule, effective 1 Aug 2026). ZIP-level Small Area FMRs can differ. $2,400 assumes a premium for a fully renovated house in ZIP 43214. The typical 3-bedroom value there is $431,884 (Zillow ZHVI, Oct 2026), so the $520,000 ARV needs renovated comparables. Rent and ARV are course assumptions |
| Rehab budget | Hard costs $90,000 (kitchen, baths, roof, HVAC, flooring, paint); contingency $9,000; permits $1,000. Total $100,000. No structural work |
| Closing costs | $9,000 (title, recording, legal, appraisal) |
| Exit plan | Renovate in 5 months, lease, then refinance into a DSCR loan. Back-up: sell at ARV |
| Post-rehab costs | Taxes $520 a month; landlord insurance $160 a month; no HOA |

**Timeline (what actually happens; reveal month by month in Role 3)**

| Month | Event |
| --- | --- |
| 0 | Closing, 15 Jan 2027 |
| 2, 4, 6, 8 | Draw requests |
| 7 | Roof subcontractor quits; replacement costs $8,000 more than the roof line in the budget |
| 10 | Rehab complete |
| 11 | Lease signed at $2,450 a month with an unrelated tenant, for a 12-month initial term (RES-GEN-11) |
| 12 | Loan matures 15 Jan 2028; extension requested |
| 14 | DSCR refinance request |

**State law notes.** Ohio (SLT-OH-01). No residential mortgage licence: the house is a rental or resale with no owner or family occupant. A business loan to an LLC is usury-exempt (ORC 1343.01(B)(6)). Foreclosure is judicial, about 6 to 24 months. Deficiency is allowed. \[VERIFY: State Law Table SLT-OH-01; checked 20 Nov 2026\]

### Role 1: Originator

**Your tasks (about 60 minutes)**

1. Screen the request for business purpose and occupancy. List any red flags.
2. Decide who must sign the guaranty, and who is the qualifying guarantor.
3. List the checks to order before the term sheet.
4. Count Dana's experience and set her tier.
5. Draft the term sheet: amount, advances, rate, points, term, extensions, recourse, cash to close.

**Answer key: Role 1**

1. **Purpose.** Borrower is an LLC (CORE-BOR-01) with a real estate purpose (CORE-BOR-02). The property is vacant, will be leased to an unrelated tenant, and Dana lives elsewhere. No occupancy red flag (CORE-BP-02, RES-GEN-09). Both guarantors sign the business-purpose certification (CORE-BP-01).
2. **Guarantors.** Dana (60%, managing member) and Sam (40%) both own 20% or more, so both sign (CORE-BOR-03). Chris Reyes is not an owner and is not asked to sign (CORE-BOR-05). Dana is the qualifying guarantor (CORE-BOR-04). Sam's 655 mid-score clears the 620 floor for other guarantors (CORE-BOR-06).
3. **Checks.** OFAC on the LLC, Dana and Sam (CORE-KYC-01); ID for both owners (CORE-KYC-02); credit reports and 10-year background searches (CORE-KYC-03); lender-ordered appraisal (CORE-VAL-01).
4. **Experience.** Dana lists 7, but the 15% deal is below the 20% ownership rule (CORE-BOR-15). Count = 6 (F-CORE-27), so Tier 2 (CORE-BOR-16).
5. **Term sheet (draft).**

| Term | Draft | Rule |
| --- | --- | --- |
| Total commitment | $340,000 | F-RES-13 (checked in Role 2) |
| Initial advance | $240,000 (80.0% of price) | RES-FF-01 |
| Rehab holdback | $100,000, paid in arrears after inspection | RES-FF-02, RES-FF-09 |
| Rate | 10.250%: Tier 2 base 10.00% + 0.25% (LTC at the 85% cap) | CORE-PRC-02, F-CORE-28 |
| Points | 1.50 = $340,000 × 1.50% = $5,100 | CORE-PRC-02 |
| Interest | On outstanding balance only | RES-FF-08 |
| Term | 12 months; 2 × 3-month extensions at 0.50 point if 75% complete | RES-FF-11 |
| Prepayment | None | RES-FF-12 |
| Recourse | Full-recourse guaranty from Dana and Sam; completion guaranty for the $100,000 rehab | CORE-DOC-01, -03 |
| Cash to close (F-RES-09) | $300,000 + $9,000 + $5,100 − $240,000 = $74,100 |  |

### Role 2: Underwriter

**Your tasks (about 90 minutes)**

1. Size the loan with F-RES-13 and check every leverage cap.
2. Test the project: rehab type, contingency, flip profit.
3. Test Dana: FICO, credit events, liquidity, net worth, exposure.
4. Test both exits, including the planned DSCR refinance.
5. Name the approver and outline the credit memo.

**Answer key: Role 2**

1. **Sizing (Tier 2: caps 85% / 70% / 85%).** LTC test $340,000; LTARV test $364,000; purchase test 85% × $300,000 + $100,000 = $355,000. Max loan $340,000; LTC binds. Ratios: LTC 85.0% (F-RES-04); LTARV $340,000 ÷ $520,000 = 65.4% (F-RES-02); LTAIV $240,000 ÷ $300,000 (the price, lower than the $310,000 appraisal, F-CORE-14) = 80.0% (F-RES-03). All pass.
2. **Project.** Budget is 33% of price with no structural work, so not heavy rehab (RES-FF-05). Contingency $9,000 ÷ $90,000 hard costs = 10.0% (RES-FF-06): passes. Flip profit (F-RES-10): $520,000 − $31,200 selling costs − $300,000 − $100,000 − $9,000 − $5,100 points − $17,425 interest (6 months on full $340,000 at 10.25%, nominal; billed Actual/360 over 181 days it is $17,521.81) = $57,275. That is 14.3% of the $400,000 TPC; RES-FF-10 needs 10%: passes.
3. **Dana.**
   - FICO mid-score 712 ≥ 680 (CORE-BOR-06). No credit events (CORE-BOR-08). The 2019 lien is released, so CORE-BOR-10 is met.
   - Liquidity (F-CORE-24): $95,000 + $40,000 × 0.70 + $60,000 × 0.70 + HELOC $0 − $74,100 = $90,900.
   - Required (F-CORE-25): max($34,000; 6 × $340,000 × 10.25% ÷ 12 = $17,425) + 5% × $0 = $34,000. Passes by $56,900.
   - Net worth (F-CORE-26): $1,150,000 − $610,000 − $0 = $540,000 ≥ 25% × $340,000 = $85,000. Passes.
   - Exposure (F-CORE-29): $340,000, under the Tier 2 cap of $7,500,000 (CORE-CONC-01).
4. **Exits.** The sale exit is strong (14.3% margin). The rental exit fails. Payoff plus about $7,000 refinance costs is $347,000, or 66.7% LTV, priced at 7.75% (RES-DSCR-12). PITIA = $347,000 × 0.0071641 + $520 + $160 = $3,165.95. DSCR (F-RES-07) on $2,400 market rent = $2,400 ÷ $3,165.95 = 0.76x, below 1.00x (RES-DSCR-02). At 1.00x a DSCR lender could lend at most $245,000 (Role 3, item 5). Dana would need about $102,000 plus reserves, more than her $90,900 liquidity. Approve on the sale exit; the rental exit is a weakness, not a mitigant.
5. **Approval.** $340,000, Residential, no exceptions: a senior underwriter may approve (CORE-AUTH-01). In solo mode, write the memo as underwriter, then critique it as credit committee.

**Credit memo outline**

1. Request and recommendation (approve $340,000, rule IDs cited).
2. Borrower, guarantors, experience tier.
3. Property, valuation and rehab budget.
4. Sizing table: LTC, LTARV, LTAIV against caps.
5. Exit analysis: sale profit; rental DSCR shortfall.
6. Risks and mitigants: ARV reliance; roof and HVAC execution; the rental exit fails at the $2,400 market rent, so the loan relies on the sale exit (14.3% margin); $90,900 liquidity does not cover the $102,000 refinance gap.
7. Conditions: see Role 3.

### Role 3: Closing, servicing and asset management

**Your tasks (about 90 minutes)**

1. List the closing conditions.
2. Process the four draws and the final release; track percent complete.
3. Decide how to handle the month-7 roof overrun.
4. Decide the month-12 extension request and its fee.
5. Size the month-14 DSCR refinance.
6. What-if: the 1 Aug payment arrives 45 days late. Work out the cost and the knock-on effect.

**Answer key: Role 3**

1. **Closing conditions.** Signed business-purpose certifications (CORE-BP-01); OFAC and background clear (CORE-KYC-01, -03); LLC documents and good standing (CORE-CLS-01); lender's title policy; vacant-property and builder's-risk cover naming the lender (RES-GEN-08); full-recourse and completion guaranties signed (CORE-DOC-01, -03); flood determination; appraisal under 120 days old (CORE-VAL-02); scope of work review; Dana's two most recent statements (CORE-BOR-13); cash at closing of $75,261.67 received: $74,100 plus prepaid interest of $1,161.67 for 15-31 Jan (F-CORE-33, CORE-CLS-04). Liquidity after it is $89,738.33, still above the $34,000 required. Net funding wire $233,738.33 (F-CORE-41); see C11.
2. **Draws (RES-FF-09, F-RES-18: inspected, one per 30 days, final 10% held).**

| Month | Work in place (cumulative) | Percent complete (F-RES-06) | Draw paid | Loan balance after draw | Interest, 30-day month (F-CORE-01) |
| --- | --- | --- | --- | --- | --- |
| 0 | $0 | 0% | Initial advance $240,000 | $240,000 | $2,050.00 |
| 2 | $30,000 | 30% | $30,000 | $270,000 | $2,306.25 |
| 4 | $55,000 | 55% | $25,000 | $295,000 | $2,519.79 |
| 6 | $75,000 | 75% | $20,000 | $315,000 | $2,690.63 |
| 8 | $90,000 | 90% | $15,000 (cap: 90% of holdback) | $330,000 | $2,818.75 |
| 10 | $100,000 (complete) | 100% | Final $10,000 | $340,000 | $2,904.17 |

Interest is billed Actual/360 (F-CORE-01): balance × 10.25% ÷ 360 × actual days. The table shows a 30-day month. A 31-day month costs more: $2,118.33 on $240,000 and $3,000.97 on $340,000. Per diems (F-CORE-05) run from $68.33 at $240,000 to $96.81 at $340,000.

3. **Roof overrun.** The $8,000 is covered by the $9,000 contingency line. Approve a budget reallocation from contingency to roof, in writing. Total holdback stays $100,000. Re-inspect before the month-8 draw.
4. **Extension (month 12).** Tests (CORE-SVC-01, RES-FF-11): no default; payments current; 100% complete (75% needed). Approve one 3-month extension to 15 Apr 2028. Fee (F-CORE-22): $340,000 × 0.50% = $1,700.
5. **DSCR refinance (month 14).**
   - Owned 14 months, so the appraised $520,000 is used, not cost basis (RES-DSCR-05).
   - Qualifying rent: lesser of lease $2,450 and 1007 $2,400 = $2,400 (RES-DSCR-01, F-RES-23).
   - FICO 712, rate-term: max LTV 70% = $364,000 (RES-DSCR-03).
   - Requested $347,000 (payoff $340,000 + costs $7,000): LTV 66.7%, rate 7.75%. PITIA = $347,000 × 0.0071641 + $680 = $3,165.95. DSCR = $2,400 ÷ $3,165.95 = 0.76x: fails.
   - Max by DSCR at 7.75% (F-RES-17): ($2,400 − $680) ÷ 0.0071641 = $240,085, which is 46.2% LTV.
   - At 65% LTV or less the rate falls to 7.50% (RES-DSCR-12). Max by DSCR at 7.50%: $1,720 ÷ 0.0069921 = $245,990, rounded down to $245,000 (CORE-PRC-05); LTV 47.1%.
   - Check at $245,000 and 7.50%: P&I $1,713.08 (F-CORE-02); PITIA $1,713.08 + $680 = $2,393.08. DSCR = $2,400 ÷ $2,393.08 = 1.00x (1.0029x): passes.
   - Decision: the refinance cannot repay the bridge. $245,000 leaves $347,000 − $245,000 = $102,000 to find, plus 3 months' PITIA in reserves, $7,179.24 (RES-DSCR-08): $109,179.24 in all. Dana's liquidity after closing was $89,738.33, and Sam has $12,000. Decline the refinance as requested; the exit is the sale. The 12-month lease runs to month 23, past the final extended maturity (15 Jul 2028). So the sale is to an investor with the tenant in place, or follows the tenant's agreement to leave [VERIFY: Ohio law on whether a sale ends a residential lease; counsel; not yet checked]. Order an updated value on that basis now. The take-out would have been a third-party DSCR lender, sized here on our RES-DSCR rules as a stand-in (D-CORE-31). Its 7.50% grid rate sits inside the 6.0-8.0% market band cited in RES-DSCR-12.
6. **What-if: 45 days late.**
   - The late payment is an event of default. Default interest is note rate + 5.00% = 15.25% (CORE-SVC-03), usury-capped \[VERIFY: Ohio\].
   - On the $315,000 balance: default per diem $315,000 × 15.25% ÷ 360 = $133.44; normal per diem $315,000 × 10.25% ÷ 360 = $89.69 (F-CORE-05). Extra cost $43.75 a day, or $1,968.75 over 45 days.
   - Knock-on effect: a 30-day late in the last 12 months fails RES-DSCR-09. A DSCR refinance would be ineligible until 12 months after the late payment, past the latest maturity with two extensions (15 Jul 2028). At $2,400 rent the refinance already fails (item 5), so the sale was the exit anyway. The late payment adds default cost and a default rating to that sale (CORE-SVC-08).
   - Lesson: a single servicing event can close the planned exit. Asset managers watch exits, not only payments.

---

## RD-MF-01: Cedar Court value-add bridge to term loan (Multifamily)

Cedar Court Partners LLC asks for a value-add bridge loan to buy and renovate a 50-unit apartment property, then refinance into a term loan. Used in M1-M6. Numbers match the glossary and Multifamily Part 2 examples.

**Borrower and sponsors**

| Item | Detail |
| --- | --- |
| Borrower | Cedar Court Partners LLC, a North Carolina single-purpose LLC formed for this purchase |
| Owners | Marcus Hale 60% (managing member); Priya Nand 40%. Equity of $2,240,066.67 comes from the two owners and passive investors in a separate holding LLC |
| Marcus Hale | Mid-score 728. Liquid assets: cash $650,000; listed securities $400,000. Net worth $6,800,000 |
| Marcus's apartment record (he lists 3) | 40-unit property, owned 50%, 2021-present. 24-unit property, owned 35%, bought 2022, sold 2025. 18-unit property, owned 8%, 2023-present |
| Priya Nand | Mid-score 702. Property manager for 12 years; no ownership record |
| Other loans with us | None |

**Property**

| Item | Detail |
| --- | --- |
| Address | 2200 Cedar Court Way, Charlotte, North Carolina (fictional street) |
| Type | 50 units, garden-style, built 1986; 100% residential; market-rate; urban |
| Occupancy | 44 of 50 units leased (88%) |
| Price and costs | Price $6,200,000 ($124,000 per unit); closing costs $200,000; capex plan $800,000 (interiors, roofs, parking) |
| Valuation (MAI appraisal) | As-is $6,300,000 (sizing uses the $6,200,000 price, the lower figure, F-CORE-14); as-stabilized $8,600,000 |
| Income | GPR $780,000; rent-roll collections annualized $702,000; trailing 3 months annualized $708,000; other income (T-12) $18,000 |
| Expenses | T-12 $298,000; appraiser's estimate $310,000 (includes 4% management). Within the expenses: real estate taxes $74,000 and property insurance $38,000 a year |
| Business plan | Renovate 50 units over 18 months; stabilized NCF $560,000 |
| Reports | Property condition report: immediate repairs $40,000. Phase I: no recognized environmental conditions |

**Market inputs on the closing date (illustrative)**

| Item | Value | Source |
| --- | --- | --- |
| 1-month Term SOFR | 3.65% | Within the 3.64-3.67% range in Part 1A (Lee & Associates; COR Advisors), which dates from mid-2026. Re-checked 19 Nov 2026: overnight SOFR was about 3.95% in November and the 30-day average 3.92% on 12 Nov (FRED). Kept as an illustrative closing-date input. At 3.95% the note rate would be 7.95%, still below the 8.25% cap test rate, so no sizing result changes |
| Rate cap | Strike 4.25%, 24 months, notional $5,140,000 (full commitment, D-CORE-30), cost $60,000 | Strike matches the KBRA CLO weighted average (Part 1). The $60,000 cost is a course assumption (no quote source) |
| Agency 10-year fixed rate | 6.55% | Select Commercial, Freddie Mac small-balance 10-year fixed, 6.55% as of 16 Nov 2026 (re-checked 19 Nov 2026). This is the take-out rate basis (D-CORE-31). Freddie Mac folded its Small Balance Loan program into Conventional Small on 15 Apr 2026 (Policy MF Part 1) [VERIFY: Freddie Mac Multifamily news release and Seller/Servicer Guide Bulletin M2026-3; site unreachable 22 Nov 2026, not yet checked], so read it as an agency small-loan quote |

**Timeline (reveal month by month in Role 3)**

| Month | Event |
| --- | --- |
| 0 | Closing |
| 2-18 | Monthly capex draws |
| 10 | SOFR rises to 5.00% |
| 18 | Capex complete; occupancy 93% |
| 24 | Initial maturity; NCF $520,000; extension requested |
| 27 | NCF $560,000 on trailing 3 months; refinance with a third-party agency small-loan lender |

**State law notes.** North Carolina (SLT-NC-02). A $5,140,000 commitment to an LLC is an exempt loan under G.S. 24-9: any agreed rate and fees, and no usury claim. Foreclosure is power of sale before the clerk, with 10-day upset-bid periods. Deficiency is allowed, subject to a fair-value defence. Rent regulation was not researched. \[VERIFY: State Law Table SLT-NC-02; checked 20 Nov 2026\]

### RD-MF-01 Role 1: Originator

**Your tasks (about 60 minutes)**

1. Confirm the property and borrower are eligible.
2. Decide who guarantees, and test Marcus's experience.
3. Price the loan and list the checks to order.
4. Draft the term sheet, including cash to close.

**Answer key: Role 1**

1. **Eligibility.** 50 units, 100% residential, market-rate, urban: eligible (MF-GEN-01, -02). Value $124,000 per unit, above $75,000 (MF-GEN-03). Occupancy 88%, above 75%; capex $800,000 is 12.9% of price, under 50% (MF-BR-01). Single-purpose LLC (CORE-BOR-01, -02).
2. **Guarantors.** Marcus (60%) and Priya (40%) both sign (CORE-BOR-03). Marcus is the qualifying guarantor (CORE-BOR-04).
   - Experience (MF-GEN-07): the 40-unit (50% owned) and 24-unit (35% owned, sold 2025) count. The 18-unit does not, because 8% is under the 20% ownership rule (CORE-BOR-15).
   - Count = 2, and the 40-unit is at least half of 50 units: passes. Priya's management record supports the plan but does not count toward Marcus's test.
3. **Pricing (MF-BR-14, F-MF-24).** SOFR + 375 bp, plus 25 bp because total commitment is 71.4% of cost (over 70%). As-is debt yield 9.10% (≥ 8.0%) and occupancy 88% (≥ 85%) add nothing. Rate = 3.65% + 4.00% = 7.65%.
   - Checks: OFAC, ID, credit and background on both owners (CORE-KYC-01 to -03); MAI appraisal, property condition, Phase I and zoning reports (MF-GEN-08); rent roll tied to bank deposits (MF-GEN-04); rent regulation check (MF-GEN-09).
4. **Term sheet (draft).**

| Term | Draft | Rule |
| --- | --- | --- |
| Total commitment | $5,140,000 | F-MF-13 (checked in Role 2) |
| Initial funding | $4,340,000 | MF-BR-02 |
| Capex future funding | $800,000, in arrears after inspection | MF-BR-10 |
| Rate | 1-month Term SOFR + 4.00% (7.65% today), interest only on funded balance | MF-BR-14 |
| Rate cap | Strike 4.25%, 24 months, notional $5,140,000 (full commitment), A-rated counterparty | MF-BR-09 |
| Fees | Origination 1.00% = $51,400; exit 0.50%, waived if refinanced into our term loan | MF-BR-14 |
| Term | 24 months; 2 × 6-month extensions at 0.50% | MF-BR-11 |
| Recourse | Non-recourse with carve-outs; completion guaranty for capex; environmental indemnity | MF-BR-12, CORE-DOC-03 |
| Escrows | Taxes and insurance ($74,000 + $38,000) ÷ 12 = $9,333.33 a month, plus a 2-month cushion of $18,666.67 at closing (F-CORE-35); reserves 50 × $300 = $15,000 a year; repair escrow 125% × $40,000 = $50,000 | MF-BR-13, CORE-INS-02 |
| Cash to close | $6,200,000 + $200,000 + $51,400 + $60,000 cap + $50,000 repair escrow + $18,666.67 escrow cushion − $4,340,000 = $2,240,066.67 |  |

### RD-MF-01 Role 2: Underwriter

**Your tasks (about 2 hours)**

1. Build underwritten NCF using the multifamily conventions.
2. Size the loan with F-MF-13 and run every test: debt yields, interest coverage, exit.
3. Test Marcus: credit, liquidity, net worth, sponsor exposure.
4. Name the approver and outline the credit memo.

**Answer key: Role 2**

1. **NCF (MF-GEN-05, -06; F-MF-09).**
   - Income: lesser of rent-roll collections $702,000 and trailing 3 months $708,000 = $702,000. Vacancy is already 10% (above the 5% floor). Other income $18,000. EGI = $720,000.
   - Expenses: greater of T-12 $298,000 and appraiser $310,000 = $310,000 (management 4%, above the 3% floor).
   - NOI $410,000 − reserves $15,000 = NCF $395,000.
2. **Sizing (F-MF-13).** LTC $5,400,000; stabilized LTV $6,020,000; as-is 70% × $6,200,000 (lower of price and appraisal) = $4,340,000 + $800,000 = $5,140,000. Loan $5,140,000; the as-is test binds.
   - As-is debt yield $395,000 ÷ $4,340,000 = 9.10% (≥ 7.0%, MF-BR-05).
   - Stabilized debt yield $560,000 ÷ $5,140,000 = 10.89% (≥ 8.5%, MF-BR-06).
   - Interest coverage (F-MF-12) at the higher of 7.65% and strike 4.25% + 4.00% = 8.25%: $4,340,000 × 8.25% = $358,050. $395,000 ÷ $358,050 = 1.10x (≥ 1.00x): no interest reserve (MF-BR-07).
   - Exit (MF-BR-08) at 6.55% + 0.50% = 7.05%: $560,000 ÷ 1.25 ÷ 0.0802397 = $5,583,273.69 (F-MF-20), above $5,140,000 by $443,273.69: passes. NCF break-even for that test: $5,140,000 × 1.25 × 0.0802397 = $515,539.84, a 7.9% miss. At the 7.25% refinance rate it is $5,140,000 × 1.25 × 0.0818612 = $525,957.91, only a 6.1% miss.
3. **Marcus.**
   - FICO 728 ≥ 680 (CORE-BOR-06).
   - Liquidity (F-CORE-24): $650,000 + $400,000 × 0.70 = $930,000. His personal funds are not used for equity, so this is post-closing.
   - Required (F-CORE-25): max(10% × $5,140,000 = $514,000; 6 × $5,140,000 × 7.65% ÷ 12 = $196,605.00) = $514,000. Passes.
   - Net worth $6,800,000 ≥ 100% × $5,140,000 (CORE-BOR-14). Passes.
   - Sponsor exposure (CORE-CONC-01): 2 counted projects puts Marcus in Tier 1, capped at $3,000,000. The $5,140,000 loan is above the cap, so only committee can approve.
4. **Approver.** Committee, for two reasons: the loan is over $2,000,000 and the Tier 1 exposure cap is exceeded (CORE-AUTH-01, CORE-CONC-01). In solo mode, write the memo, then argue the committee side: is a 40-unit operator ready for $5.2 million?

**Credit memo outline**

1. Request and recommendation, with rule IDs.
2. Sponsors: experience count, the 8% stake excluded, Priya's management role.
3. Property and market; rent regulation check result.
4. NCF build table (in-place and stabilized).
5. Sizing table: as-is, LTC, stabilized LTV, debt yields, interest coverage, exit test.
6. Risks and mitigants: renovation execution (completion guaranty); floating rate (cap at 4.25%); refinance risk ($443,273.69 exit cushion, gone at a 6.1% NCF miss at 7.25%). Value cushions: day-one as-is 1 − $4,340,000 ÷ $6,200,000 = 30.0%; plan stalled at month 10 with $4,740,000 funded, 1 − $4,740,000 ÷ $6,200,000 = 23.5%; fully funded against stabilized value, 1 − $5,140,000 ÷ $8,600,000 = 40.2%. Committee leans on the as-is figures, because a stalled plan recovers on as-is value less sale costs; sponsor scale (Tier 1 cap exceeded; mitigated by $930,000 liquidity, 1.8x the requirement).
7. Conditions: see Role 3.

### RD-MF-01 Role 3: Closing and asset management

**Your tasks (about 90 minutes)**

1. List the closing conditions.
2. Month 10: SOFR is 5.00%. Work out the interest and what the rate cap pays.
3. Month 24: decide the extension request.
4. Month 27: size the refinance into a term loan and settle the bridge.
5. What-if: at month 27 NCF is only $500,000. What happens?

**Answer key: Role 3**

1. **Closing conditions.** Certificates and OFAC clear (CORE-BP-01, CORE-KYC-01); SPE documents; rate cap on a $5,140,000 notional bought and assigned to the lender (MF-BR-09, D-CORE-30); MAI appraisal under 120 days (CORE-VAL-02); property condition, Phase I and zoning reports reviewed (MF-GEN-08); escrows funded, including $50,000 repair escrow (MF-BR-13); insurance with 12 months' loss of rents (MF-GEN-10); completion guaranty and environmental indemnity signed; rent regulation check filed (MF-GEN-09).
2. **Month 10 interest.** Funded balance $4,340,000 + $400,000 capex drawn = $4,740,000.
   - Note rate: 5.00% + 4.00% = 9.00%. Interest for a 30-day month (F-CORE-01, Actual/360): $4,740,000 × 9.00% ÷ 360 × 30 = $35,550.00. A 31-day month is $36,735.00.
   - Cap pays the rate above 4.25% on its $5,140,000 notional (D-CORE-30), not on the funded balance: $5,140,000 × 0.75% ÷ 360 × 30 = $3,212.50 (caps pay on the same Actual/360 basis: a standard cap confirmation sets the floating rate day count fraction at Actual/360, Wells Fargo template, checked 19 Nov 2026).
   - Borrower's net cost for 30 days: $35,550.00 − $3,212.50 = $32,337.50, or 8.187% on the $4,740,000 funded ($32,337.50 ÷ $4,740,000 × 360 ÷ 30). That is below strike + spread (8.25%), because the cap also pays on the $400,000 not yet drawn. A 31-day month: interest $36,735.00, cap $3,319.58, net $33,415.42. MF-BR-09 sets the strike so coverage stays at 1.00x or more.
3. **Month 24 extension (MF-BR-11).** No default; capex 100% complete (75% needed); current debt yield $520,000 ÷ $5,140,000 = 10.12% (7.5% needed); borrower buys a 6-month cap extension on the $5,140,000 notional (MF-BR-09, D-CORE-30). SOFR is 5.00% (D-CORE-27; course assumption, not a forecast), above the 4.25% strike, so the extension cap is in the money. Course assumption: it costs about its intrinsic value (undiscounted), $5,140,000 × 0.75% × 6 ÷ 12 = $19,275.00; a real quote adds time value. Coverage on extension (F-MF-12): $520,000 ÷ ($5,140,000 × 9.00% = $462,600) = 1.12x (≥ 1.00x). Fee: $5,140,000 × 0.50% = $25,700. Liquidity check: cap $19,275 + fee $25,700 = $44,975. If the borrower cannot pay, Marcus's last verified liquidity of $930,000 falls to $885,025, still above the $514,000 minimum (CORE-BOR-12). Re-verify his statements first (CORE-BOR-13). Approve.
4. **Month 27 refinance (MF-TRM).**
   - Occupancy 93% for 3 months: stabilized (MF-TRM-01).
   - Take-out: a third-party agency small-loan lender (D-CORE-31). The course sizes it with our MF-TRM rules as a stand-in for that lender's box, at the 7.25% MF-TRM grid rate. That is 0.70% above the 6.55% agency quote, so the sizing is conservative. Size (F-MF-14) in the 7.25% band (F-MF-25): DSCR test $5,472,681; LTV test $6,450,000; debt-yield test $7,000,000. Loan $5,472,000; LTV 63.6%, so the band holds.
   - Payoff bridge $5,140,000 plus the 0.50% exit fee, $25,700, because the take-out is not our term loan (MF-BR-14): $5,165,700. Proceeds over payoff: $5,472,000 − $5,165,700 = $306,300 before closing costs, so it is a cash-out; 63.6% is under the 70% cash-out cap (MF-TRM-03).
   - Over $2,000,000: non-recourse with carve-outs (MF-TRM-07), as agency small loans are (Policy MF Part 1 take-out table). The take-out lender approves its own loan; we approve only the payoff and lien release.
5. **What-if: NCF $500,000.**
   - DSCR test: $500,000 ÷ 1.25 ÷ 0.0818612 = $4,886,322.54. Shortfall against the $5,165,700 payoff (bridge plus exit fee): $279,377.46.
   - Options: borrower pays down about $280,000; or uses the second 6-month extension (still needs 7.5% debt yield: $500,000 ÷ $5,140,000 = 9.73%, passes) to finish lease-up; or refinances elsewhere.
   - Lesson: the $443,273.69 exit cushion is gone at a 7.9% NCF miss at the 7.05% exit-test rate, or 6.1% at the 7.25% refinance rate (5.6% once the $25,700 exit fee is added). The $500,000 what-if is a 10.7% miss, well past break-even. Even the extra cushion from lower-of-cost sizing is not enough.

## RD-COM-01: Birchwood Plaza retail bridge to term loan (Commercial)

Birchwood Plaza LLC asks for a bridge loan to buy a 70%-leased strip center, lease it up, and refinance into a term loan. Used in CM1-CM6. Numbers match the Commercial Part 2 examples (F-COM-03, -08, -09). All people, entities and the property are fictional.

**Borrower and sponsors**

| Item | Detail |
| --- | --- |
| Borrower | Birchwood Plaza LLC, an Indiana single-purpose LLC formed for this purchase |
| Owners | Dana Whitlow 75% (managing member); Leo Marsh 25%. Equity comes from the owners and passive investors in a separate holding LLC |
| Dana Whitlow | Mid-score 742. Liquid assets: cash $550,000; listed securities $300,000. Net worth $5,200,000 |
| Dana's retail record (she lists 3) | 32,000 sf strip center, owned 100%, 2019-present. 18,000 sf strip center, owned 40%, 2021-2024 (sold). 60,000 sf grocery-anchored center, owned 10%, 2022-present |
| Leo Marsh | Mid-score 690. Retail leasing broker for 9 years; no ownership record |
| Other loans with us | None |

**Property**

| Item | Detail |
| --- | --- |
| Address | 410 Birchwood Avenue, Indianapolis, Indiana (fictional street) |
| Type | 40,000 sf unanchored strip center, built 1998; 11 suites; no owner-occupied space |
| Occupancy | 28,000 sf leased (70%) |
| Price and costs | Price $4,400,000; closing costs $120,000; capex $300,000 (facade, parking, roof); TI/LC budget $360,000 (12,000 sf × $30) |
| Valuation (MAI appraisal) | As-is $4,500,000; as-stabilized $6,000,000. Stabilized cap rate on NOI (F-CORE-13): $480,000 ÷ $6,000,000 = 8.00%. In-place NOI yield on price: $300,000 ÷ $4,400,000 = 6.82%. Every Birchwood cap rate in the course uses NOI, not NCF |
| In-place income | Base rent $420,000; expense recoveries $84,000. Largest tenant pays $90,000 on a lease ending in month 20. Leases expiring within 24 months: $150,000 (that $90,000 plus $60,000 of other leases) |
| Expenses | T-12 $196,000; appraiser's estimate $204,000 (includes 4% management) |
| Stabilized (appraiser) | Base rent $600,000; recoveries $120,000; vacancy 5%; expenses $204,000 |
| Reports | Property condition: no immediate repairs. Phase I: no recognized environmental conditions; former dry cleaner checked and cleared |

**Market inputs on the closing date (illustrative)**

| Item | Value | Source |
| --- | --- | --- |
| 1-month Term SOFR | 3.65% | Same as RD-MF-01 (Multifamily Part 1A) |
| Rate cap | Strike 4.25%, 24 months, notional $3,520,000 (full commitment, D-CORE-30), cost $40,000 | Strike as RD-MF-01. The $40,000 cost is a course assumption (no quote source) |
| Course take-out rate | 7.75% | F-COM-10 (Commercial Part 2B, 18 Nov 2026) |

**Timeline (reveal month by month in Role 3)**

| Month | Event |
| --- | --- |
| 0 | Closing |
| 1-12 | Monthly capex draws |
| 9 | Largest tenant ($90,000 rent) gives notice it will not renew at lease end (month 20) |
| 16 | Replacement tenant signs for that space; occupancy 93% |
| 18 | SOFR rises to 4.75%; $300,000 of TI/LC drawn |
| 24 | Maturity. 10-year Treasury 4.00%. Trailing NCF $434,000; refinance requested |

**State law notes.** Indiana (SLT-IN-02). No lender or broker licence found for commercial loans. No rate cap found for non-consumer loans. Foreclosure is judicial, with no sale until 3 months after filing. Deficiency and the guaranty are enforceable, unless the borrower waives the wait with our consent. \[VERIFY: State Law Table SLT-IN-02; checked 20 Nov 2026\]

### RD-COM-01 Role 1: Originator

**Your tasks (about 60 minutes)**

1. Confirm the property and borrower are eligible.
2. Decide who guarantees, and test Dana's experience.
3. Price the loan and list the checks to order.
4. Draft the term sheet, including cash to close.

**Answer key: Role 1**

1. **Eligibility.** Investor-owned unanchored retail with no owner-occupied space: eligible (COM-GEN-01, -02). Single-purpose LLC (COM-GEN-04). Former dry cleaner was checked in the Phase I (COM-GEN-14).
2. **Guarantors.** Dana (75%) and Leo (25%) both sign (CORE-BOR-03). Dana is the qualifying guarantor (CORE-BOR-04).
   - Experience (COM-GEN-15): the 32,000 sf center (100%) and the 18,000 sf center (40%, sold 2024) count. The grocery-anchored center does not, because 10% is under the 20% ownership rule (CORE-BOR-15).
   - Count = 2 retail properties in 5 years: passes. Leo's leasing record supports the plan but does not count.
3. **Pricing (COM-BR-06).** Retail floor SOFR + 400 bp: 3.65% + 4.00% = 7.65%. Origination 1.00%.
   - Checks: OFAC, ID, credit and background on both owners (CORE-KYC-01 to -03); MAI appraisal, property condition, zoning and flood (COM-GEN-13); Phase I (COM-GEN-14); estoppels and SNDAs (COM-GEN-09); rent roll tied to leases and bank deposits.
4. **Term sheet (draft).**

| Term | Draft | Rule |
| --- | --- | --- |
| Total commitment | $3,520,000 | Checked in Role 2 |
| Initial funding | $2,860,000 (65% of the $4,400,000 price, the lower of cost and value) | COM-BR table; 12 CFR 365 value definition \[VERIFY\] |
| Future funding | Capex $300,000 and TI/LC $360,000, drawn against inspected work and signed leases | COM-BR-05 |
| Rate | 1-month Term SOFR + 4.00% (7.65% today), interest only on funded balance | COM-BR-06 |
| Rate cap | Strike 4.25%, 24 months, notional $3,520,000 (full commitment), A-rated counterparty | COM-BR-03 |
| Fees | Origination 1.00% = $35,200; extension fee 0.25% | COM-BR-06, -02 |
| Term | 24 months; two 6-month extensions | COM-BR-01 |
| Recourse | Full guarantee from Dana and Leo, burning off at stabilization (LTV is over 60%); completion guaranty for the $660,000 future funding | COM-BR-07, CORE-BOR-03, CORE-DOC-03 |
| Cash management | Springing lockbox; sweep on DSCR under 1.10x or a 20%+ tenant's notice | COM-GEN-12 |
| Cash to close | $4,400,000 + $120,000 + $35,200 + $40,000 cap − $2,860,000 = $1,735,200 |  |

### RD-COM-01 Role 2: Underwriter

**Your tasks (about 2 hours)**

1. Build in-place and stabilized NCF with the commercial conventions.
2. Size the bridge and run every test: LTV, LTC, in-place coverage, exit.
3. Check rollover and tenant concentration.
4. Test Dana: credit, liquidity, net worth, sponsor exposure. Name the approver.

**Answer key: Role 2**

1. **NCF (COM-GEN-05, -06, -07; F-COM-03).**
   - In-place: $420,000 + $84,000 − $204,000 (greater of T-12 and appraiser) = NOI $300,000. Reserves: TI/LC 40,000 × $1.00 = $40,000; replacement 40,000 × $0.15 = $6,000. NCF $254,000.
   - Stabilized: $600,000 + $120,000 = $720,000; less 5% vacancy $36,000 = EGI $684,000; less $204,000 = NOI $480,000; less $46,000 reserves = NCF $434,000.
2. **Sizing (COM-BR table, unanchored retail: 65% as-is, 70% LTC, 1.30x exit, 9.5% exit debt yield).**
   - Total cost: $4,400,000 + $120,000 + $300,000 + $360,000 = $5,180,000. 70% LTC = $3,626,000.
   - Commitment $2,860,000 + $660,000 = $3,520,000. LTC 68.0%: passes.
   - In-place coverage (COM-BR-03) at the higher of 7.65% and 4.25% + 4.00% = 8.25%: $2,860,000 × 8.25% = $235,950. $254,000 ÷ $235,950 = 1.08x, so COM-BR-04 requires no interest reserve. Committee condition (a judgment for this deal, not a policy limit): the largest tenant's lease ends in month 20. Without its $90,000 of base rent, in-place NCF falls to $164,000, or 0.70x. Fund an interest reserve sized by F-COM-17 for the 4 months from lease end to maturity: ($235,950 − $164,000) × 4 ÷ 12 = $23,983.33. Cash to close becomes $1,735,200 + $23,983.33 = $1,759,183.33. Release the reserve when a replacement tenant pays rent.
   - Exit (F-COM-10) at 7.75%: ADS on $3,520,000 = monthly P&I × 12 = $319,050.84. $434,000 ÷ $319,050.84 = 1.36x (≥ 1.30x). Exit debt yield $434,000 ÷ $3,520,000 = 12.3% (≥ 9.5%). Passes.
3. **Rollover and concentration.** Expiring within 24 months: the largest tenant's $90,000 (lease ends month 20) plus $60,000 of other leases = $150,000. $150,000 ÷ $420,000 = 35.7%, over the 15% trigger, so stress at underwriting (COM-GEN-08, F-COM-02). The bridge's DSCR test is its exit test, so the course stresses that (F-COM-09): $434,000 − 15% × $150,000 = $411,500; $411,500 ÷ $319,050.84 = 1.29x ≥ 1.20x: passes. Largest tenant (F-COM-16) $90,000 ÷ $420,000 = 21.4%: under 25%, so no lease-term rule (COM-GEN-10), but over 20%, so its notice triggers a sweep (COM-GEN-12).
4. **Dana.**
   - FICO 742 ≥ 680 (CORE-BOR-06).
   - Liquidity (F-CORE-24): $550,000 + $300,000 × 0.70 = $760,000, post-closing.
   - Required (F-CORE-25): max(10% × $3,520,000 = $352,000; 6 × $3,520,000 × 7.65% ÷ 12 = $134,640) = $352,000. Passes.
   - Net worth $5,200,000 ≥ 100% × $3,520,000 (CORE-BOR-14). Passes.
   - Sponsor exposure (CORE-CONC-01): 2 counted projects puts Dana in Tier 1, capped at $3,000,000. $3,520,000 is above the cap.
   - **Approver:** committee. The loan is over $2,000,000 and over the Tier 1 cap (Commercial approval matrix; CORE-CONC-01). In solo mode, write the memo, then argue the committee side: can a 32,000 sf operator lease up 12,000 sf in 18 months?

### RD-COM-01 Role 3: Closing and asset management

**Your tasks (about 90 minutes)**

1. List the closing conditions.
2. Month 9: the largest tenant gives notice. What happens?
3. Month 18: SOFR is 4.75%. Work out the interest and what the cap pays.
4. Month 24: size the term loan and settle the bridge.
5. What-if: at month 24 the replacement tenant has fallen through and NCF is only $380,000.

**Answer key: Role 3**

1. **Closing conditions.** OFAC and KYC clear (CORE-KYC-01); SPE documents (COM-GEN-04); cap on a $3,520,000 notional bought and assigned (COM-BR-03, D-CORE-30); MAI appraisal under 120 days (CORE-VAL-02); reports reviewed (COM-GEN-13, -14); estoppels from tenants paying 20%+ and the top five, SNDAs from 10%+ (COM-GEN-09); insurance with 12 months' loss of rents (COM-GEN-16); guarantee, completion guaranty and environmental indemnity signed (COM-BR-07, CORE-DOC-03); springing lockbox in place (COM-GEN-12); $23,983.33 interest reserve funded (committee condition, Role 2).
2. **Month 9 notice.** The tenant pays 21.4% of rent, over 20%, so the cash sweep starts (COM-GEN-12). Each month, NCF left after bridge interest is trapped (F-COM-19). Excess cash goes to a leasing reserve until a replacement lease is signed. Track it on the watch list.
3. **Month 18 interest.** Funded balance: $2,860,000 + $300,000 capex + $300,000 TI/LC = $3,460,000.
   - Note rate 4.75% + 4.00% = 8.75%. Interest for a 30-day month (F-CORE-01, Actual/360): $3,460,000 × 8.75% ÷ 360 × 30 = $25,229.17. A 31-day month is $26,070.14.
   - Cap pays 0.50% above 4.25% on its $3,520,000 notional (D-CORE-30): $3,520,000 × 0.50% ÷ 360 × 30 = $1,466.67. Net cost for 30 days: $25,229.17 − $1,466.67 = $23,762.50, or 8.241% on the $3,460,000 funded. A 31-day month: cap $1,515.56; net $24,554.58.
4. **Month 24 term loan (COM-TRM).**
   - Occupancy 93% for 3 months: stabilized (COM-TRM-01). Take-out: a third-party regional bank (D-CORE-31). Banks usually take recourse, with rates up to about 8.09% (Policy COM Part 1E). The course sizes the loan with our COM-TRM rules as a stand-in for the bank's box. Rate 7.00%, at the COM-TRM-04 floor of 4.00% Treasury + 300 bp (F-COM-18).
   - Size (F-COM-08): LTV 65% × $6,000,000 = $3,900,000; DSCR $434,000 ÷ 1.30 ÷ ($330,772.68 ÷ $3,900,000) = $3,936,238.02; debt yield $434,000 ÷ 9.0% = $4,822,222. Loan $3,900,000 (LTV binds).
   - Rollover (F-COM-09): $120,000 of $600,000 rent expires within 24 months (20%, over 15%). Stressed DSCR 1.26x ≥ 1.20x: passes.
   - Payoff bridge $3,520,000 (fully funded). Proceeds over payoff $380,000 before costs.
   - Recourse: LTV 65% but DSCR 1.31x is under 1.35x, so full recourse (COM-TRM-06), as a bank would usually require. A CMBS conduit would lend non-recourse at a tighter spread (about 250 bp, Part 1E), so the sponsor should price both. We approve only the bridge payoff.
5. **What-if: NCF $380,000.**
   - DSCR test: $380,000 ÷ 1.30 ÷ ($330,772.68 ÷ $3,900,000) = $3,446,475.69. Shortfall against the $3,520,000 payoff: $73,524.31.
   - Extension test (COM-BR-02, F-MF-12 basis): SOFR is 4.75% (D-CORE-27), so the note rate is 8.75%, above strike + spread (8.25%). $380,000 ÷ ($3,520,000 × 8.75% = $308,000) = 1.23x ≥ 1.00x, so a 6-month extension is allowed. Fee 0.25% = $8,800. COM-BR-02 does not require a new cap. If the borrower buys one on the $3,520,000 notional, it is in the money (4.75% against 4.25%). Course assumption: it costs about its intrinsic value (undiscounted), $3,520,000 × 0.50% × 6 ÷ 12 = $8,800.00. Liquidity check: fee + cap = $17,600; Dana's last verified $760,000 less $17,600 = $742,400, above the $352,000 minimum (CORE-BOR-12).
   - Options: pay down about $74,000; extend and re-lease the space; or refinance elsewhere.
   - Lesson: one 21% tenant leaving turns a $380,000 cash-out into a $73,524.31 shortfall.
