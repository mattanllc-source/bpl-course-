# C3 industry review: Real estate finance math (interest, amortization, debt service)

**Model policy for training - not for live lending decisions.**

| Item | Detail |
| --- | --- |
| Module reviewed | `modules/core/c03/lesson.md` (v1.0-draft, Phase 2 pilot, exported 22 Nov 2026; SNAPSHOT.md says current) |
| Also read | `docs/curriculum/c03-blueprint.md`; `data/running-deals/running-deals.md`; `docs/credit-policy/model-credit-policy.md` (D-CONV, CORE-CLS, CORE-PRC, MF-BR, COM-BR, MF-TRM, COM-TRM, RES-DSCR rows); `docs/formulas/formula-library.md` (F-CORE-01, -02, -33) |
| Reviewer stance | Chief credit officer, US BPL lender. I am not the author |
| Date | 22 Nov 2026 |
| Recomputation | Python, double precision, rounded half up for display. I reproduced worked examples 1, 3, 5, 6, 7 and 13, the 6-month IRR (13.368%), the Cedar Court exit-fee IRRs (8.194% and 8.425%), the Birchwood borrower IRR (8.819%) and the EARs (10.902%, 7.229%, 7.333%). All matched. My new figures are below, each with its inputs |

This file also holds the running-deal review (section "Running deals"), because C3 works all three deals hardest.

## Verdict

**Would I use this to train my analysts? Yes, after one structural fix. Score: 7/10.**

This is the stronger of the two modules. The math is right to the cent. The hook (Dana Reyes asking why March cost $350 more) is exactly the call a servicer gets in week two. The rest also reads like people who have billed loans: "round the period, not the segment", the split-period method, the per-diem rounding trap, the test-versus-billed basis, the cap-netting example and the points-versus-hold-period grid. The *JNT Properties* and *American Timber* pairing is the best explanation of why the interest clause matters that I have seen in a training deck.

The structural problem is the course's claim that one convention covers the whole book: "Every note bills Actual/360 ... so one rule covers the book." Then it teaches amortization schedules on rate ÷ 12 and calls Actual/360 schedule interest a "slip". That is not how amortizing commercial notes work. It is also not how 30-year DSCR notes work, though for the opposite reason. A new servicer would build a wrong schedule and a wrong balloon on day one. Fix that, name Dutch interest, and fix the cap notional, and this is an 8.5. Add Excel build exercises and it is a 9.

## Strengths

1. **Split-period billing taught as a servicer does it.** Worked example 1 plus the variance table ("Three more days on $240,000 ... $205.00; The $30,000 draw for 17 days ... $145.21") is the right habit. If the parts do not add up, a day count is wrong.
2. **Round once.** "Round each segment first and you get ... $2,263.55, one cent high." Penny breaks between the servicing system and the payoff letter cause real disputes. Good.
3. **Test basis versus billed basis** (T4, Worked example 9) is clearly separated, and the liquidity caveat ("The borrower's real cash cost is the billed figure") is the right practical warning.
4. **The IO trap.** "Notice the trap in Birchwood's 1.59x ... it measures a payment the loan will not always have." This is correct and well sourced to the OCC handbook.
5. **Balloon refinance table at 7%, 8% and 9%** (T3). It shows why amortization is the borrower's rate cushion. Committee-grade.
6. **Points versus hold period grid** (T6). "Repay Maple Run after 6 months and the nominal IRR rises to 13.368%." This is the right lesson for RTL pricing and for usury screening.
7. **Day-count law.** "*JNT* asks what the contract means. *American Timber* asks whether the result breaks a statutory cap." That is practitioner-quality framing.

## Findings

### Critical

**C-1. Amortizing schedules are taught on rate ÷ 12 while the notes are said to accrue Actual/360. The two cannot both be true, and the market does it differently.**
- *Location:* T1, "How our model policy applies it" ("Every note bills Actual/360 (F-CORE-01)"); T1, Market practice ("Maple Run's fixed rate uses it too, so one rule covers the book"); T3, schedule steps ("Interest = opening balance × i") and Common slips ("Applying Actual/360 to schedule interest. Schedules use rate ÷ 12, the F-CORE-02 convention"); Job aid ("Schedule row: interest = opening × rate ÷ 12"). The Formula Library itself says, under F-CORE-02: "accrual on billing still follows the note".
- *Why it matters:* Bank, CMBS, life-company and agency multifamily term notes very commonly set a level payment on a 30/360 amortization. They then **accrue interest Actual/360 each month and apply the rest of the payment to principal.** Interest is higher in 31-day months, so principal paydown is smaller and the balloon is larger. Servicers, payoff letters and refinance sizing all use the actual schedule. If an analyst sizes a refinance off the rate ÷ 12 balloon, the number is short.

  Recomputed for Birchwood: $3,900,000 at 7.000%, payment $27,564.39, 120 payments, first accrual month January 2029 (a what-if start date).
  - Rate ÷ 12 schedule (lesson): balloon $3,066,702.27.
  - Actual/360 accrual, same payment: balloon **$3,118,446.42**, which is **$51,744.15 higher (+1.7%)**.
  - Month 1 (31 days): Actual/360 interest is $23,508.33, not the lesson's $22,750.00. Principal is $4,056.06, not $4,814.39.

  The lesson's own rules mean that if Birchwood's term note "bills Actual/360", worked example 6 is the wrong bill.
- *Fix:* Teach both schedules and say which the note uses.
  1. In T3, add a "30/360 payment, Actual/360 accrual" schedule beside the rate ÷ 12 one, for months 1-3 and the 120-month balloon.
  2. Delete the "slip" bullet and replace it: "Check the note. Many commercial notes fix the payment on 30/360 but accrue Actual/360. Then the balloon is larger than F-CORE-47 shows."
  3. Add a Formula Library entry (owner decision; no new policy limit) for the Actual/360 balance roll, with fixtures via `npm run fixtures`.
  4. State plainly in D-CONV or F-CORE-02 which convention our *term* notes use. Today the course implies both.

**C-2. The DSCR rental loan cannot be "30-year fixed, fully amortizing" and also bill Actual/360.**
- *Location:* T1 ("Every note bills Actual/360 ... so one rule covers the book"); RES-DSCR-10 ("30-year fixed, fully amortizing"); Running Deals, Maple Run Role 3 item 5 (DSCR refinance at $338,000, 7.50%).
- *Why it matters:* Residential-style DSCR notes in the US are, in my experience, almost universally monthly 30/360 (rate ÷ 12) on fixed P&I, like agency single-family notes. Non-QM and DSCR securitization tapes and residential servicing platforms assume that. Recomputed: $338,000 at 7.50%, payment $2,363.35, accrued Actual/360 for 360 months from April 2028, leaves **$34,926.50 unpaid at month 360**. That is not fully amortizing. A new hire taught "one rule covers the book" will set up the refinance wrongly and will not understand a buyer's tape.
- *Fix:* Split the convention by product. RTL and floating bridge use the note's basis, commonly Actual/360 but check it. DSCR 30-year and ARMs use 30/360 monthly. Commercial term loans use a 30/360 payment with the accrual per the note (C-1). Record it as a D-CONV decision and update the T1 job-aid table.

### Major

**M-1. Dutch (full-commitment) interest is taught as an error. In RTL it is a common market structure.**
- *Location:* T1, Common slips ("Billing interest on the commitment. Maple Run's commitment is $340,000, but only $240,000 was funded"); "Balance | Funded balance, not the commitment".
- *Why it matters:* Many fix-and-flip lenders charge "Dutch" or "full-boat" interest on the full loan, including the undrawn rehab holdback, from day one. Lender and investor sources describe it as a common default ([Backflip primer](https://backflip.com/dutch-interest-a-primer-for-borrowers/); [Ridge Street Capital](https://www.ridgestreetcap.com/blog/non-dutch-interest); opened 22 Nov 2026; marketing sources). An originator who calls it a "slip" will misread a competitor's quote. On Maple Run's actual draw schedule, Dutch interest costs about **$4,270.83 more** over 12 months (rate ÷ 12 basis, balances $240,000 to $340,000 as drawn). That is 1.26 points of cost on the commitment, which is more than many rate differences brokers argue about.
- *Fix:* Keep RES-FF-08 (non-Dutch) as our policy. Rename the slip "Billing interest on the commitment *when the note says funded balance*". Add a box: "Dutch versus non-Dutch interest: how to compare a Dutch quote with ours", using the $4,270.83.

**M-2. The cap pays on its notional, but the worked examples pay on the funded balance.**
- *Location:* T5, Worked example 12 ("Cap pays $4,740,000 × 0.75% ÷ 360 × 30 = $2,962.50"); Practice 10; and Common slips ("Forgetting that the cap pays on the notional, which may differ from the funded balance").
- *Why it matters:* The lesson warns about the very thing its examples do. Bridge lenders usually require the cap notional to equal the full loan amount, or an accreting schedule that matches the expected draws. Running Deals says "Strike 4.25%, 24 months" with no notional. On a $5,140,000 notional, month 10 pays **$3,212.50, not $2,962.50**. The borrower's net cost on $4,740,000 is then $32,337.50, or 8.187%, not "exactly 8.25%". An asset manager reconciling cap receipts will find the difference on the first statement.
- *Fix:* Add "Notional $5,140,000 (full commitment)" to RD-MF-01 and "Notional $3,520,000" to RD-COM-01, or state an accreting schedule. Rework Worked example 12 and Practice 10, and teach the "cap pays on notional" line with the numbers.

**M-3. Cap extension and replacement cost, the defining bridge-loan problem of 2022-2025, is missing.**
- *Location:* T5, "The test rate at extension" ("The borrower must also extend the cap"); Running Deals RD-MF-01 Role 3 item 3 ("borrower buys a 6-month cap extension. Approve").
- *Why it matters:* At month 24, SOFR is 5.00% against a 4.25% strike. The extension cap is in the money, so it costs at least its intrinsic value: $5,140,000 × 0.75% × 0.5 = **$19,275**, plus time value. Across the market, cap replacement costs forced rescue capital and extensions on 2021-2022 vintage loans. Moody's cited a three-year cap on a $100 million loan that cost $98,000 in 2019 and nearly $3.5 million by 2023 ([Bisnow](https://www.bisnow.com/news/national/capital-markets/multifamily-clo-distress-is-spiking-apartment-flippers-are-in-the-line-of-fire-125442), opened 22 Nov 2026). Lenders responded with monthly cap-replacement reserves. A new asset manager must know to ask "what will the new cap cost, and who has the cash?"
- *Fix:* Add a T5 subsection, "Pricing the extension cap", with the $19,275 floor computed. Add a what-if to RD-MF-01 month 24: the cap quote, the borrower's liquidity check, and the option of a cap reserve. If the policy needs a cap-reserve rule, flag it for the owner. Do not invent a threshold.

**M-4. SOFR floors are described as rare. On bridge loans they are near-universal.**
- *Location:* T5, Spreads and floors ("An index floor ... written into some notes. Our model policy sets no index floor").
- *Why it matters:* Since 2022, most floating CRE bridge notes I see carry a SOFR floor, often set near the index at closing. The floor changes the yield, the cap economics and the borrower's cost when rates fall. "Some notes" understates it. A new hire comparing quotes will miss it.
- *Fix:* Change to: "Most bridge notes in today's market carry an index floor; our model policy does not (a training simplification)." Add a two-line what-if: SOFR falls to 3.00% with a 3.50% floor, so the note rate is 7.50%, not 7.00%.

**M-5. Term SOFR mechanics a servicer needs are missing.**
- *Location:* T5, "Overnight SOFR versus Term SOFR".
- *Why it matters:* The table says Term SOFR is "known at the start of the period". In practice the note names a determination date (commonly two US Government Securities Business Days before the period starts), a rounding rule and a fallback. The cap confirmation must use the same index and reset convention, or the hedge does not match. The lesson's "What to look up yourself" admits the CME page timed out, so this gap is known.
- *Fix:* Add a "Rate-reset clause: what to check" table to mirror the five-element interest-clause table in T1. Cover the index and tenor, the determination date, rounding, floor, fallback and cap match. Tag each legal point `[VERIFY: note form and CME Term SOFR methodology; checked <date>]`.

**M-6. Minimum-interest and exit-fee economics are missing from the yield section.**
- *Location:* T6, "What drives the gap" and "Exit fees are yield too".
- *Why it matters:* The term-versus-yield grid correctly shows the fee effect of an early payoff. But MF and COM bridge loans in the market commonly carry 12-18 months of minimum interest or spread maintenance, plus an exit fee, to protect exactly that yield. Our policy has none on MF bridges (Model Credit Policy, MF bridge table: "Prepayment n/a"). A junior who sees only this lesson will not recognise a spread-maintenance clause in a competitor's term sheet.
- *Fix:* Add a paragraph and one IRR: Cedar Court repaid at month 9 with and without 12 months of minimum interest. Label it as market practice, not our policy.

**M-7. Real lender fees are missing, so the yield and all-in cost are understated.**
- *Location:* T6, Worked example 13 (points only); RD-RES-01 term sheet.
- *Why it matters:* RTL lenders typically also charge an underwriting or processing fee, a legal or doc fee and per-draw inspection fees, and the broker charges its own points. Adding a fictional $1,295 underwriting fee at closing to the simplified Maple Run flows lifts the lender's nominal IRR from 11.848% to **12.258%**. Committee prices on all-in yield.
- *Fix:* Add a fee row to the "How to analyze a pricing quote" steps. Add Practice 13: Maple Run with an illustrative underwriting fee and $200 per draw (labelled illustrative, because the policy sets no fee). Add broker points to the borrower view only.

**M-8. Yield should be computed on dated cash flows (XIRR), not only on a monthly grid.**
- *Location:* T6 ("Those flows change sign several times, so F-CORE-48 says to report NPV at a stated rate"); Job aid ("Excel: =IRR(range)*12").
- *Why it matters:* Draws, mid-month fundings, Actual/360 bills and payoffs on odd dates are how loans really pay. Capital-markets desks and buyers price on dated flows. For a lender, the multiple-IRR problem is mostly academic, because the lender's net position stays positive. Telling juniors "use NPV instead" makes them avoid a tool they will use every week.
- *Fix:* Keep NPV. Add XIRR on Maple Run's real dated schedule (draws on the 15th, bills on the 1st, payoff 15 Mar 2028) as the practitioner method. Note that XIRR returns an effective annual rate, not a nominal one.

### Minor

**m-1. Why Actual/360.** (T1: "Banks fund themselves in money markets ... So commercial lenders match their loans to their funding.") This is fine as history. Add the blunter truth: it is 1.4% more interest, and borrowers who know accept it on commercial loans because everyone charges it.

**m-2. Bisection detail.** (T6: "Stop when the bracket is narrower than 1e-12.") A working lender skips this. Move it to a footnote and say "Excel's IRR or XIRR does this".

**m-3. Coverage test after SOFR passes strike + spread.** (T5: "once the note rate passes strike + spread, it tests at the note rate. That reads coverage before cap income".) Many lenders' covenants measure debt service net of cap receipts while the counterparty is in good standing. Our stricter rule is defensible, but say it is stricter than common market practice.

**m-4. Payoff detail.** (T1, Worked example 2.) Add the payoff-letter habits: a good-through date, a per diem after that date, a wire cut-off time, and the rule that a wire received after cut-off posts next business day (one more day of interest).

**m-5. Partial IO amortization.** (T4, "From month 25 the payment would be $27,564.39".) That is a 27-year total life. Say so. Some notes instead keep the original amortization end date, which raises the post-IO payment.

**m-6. Header metadata.** "Blueprint projection 3.4 CPE credits (QAS Self Study word-count formula ...)" and the Bloom lines belong in an author appendix, as for C0.

## Running deals (all three)

Overall the deals are well built: sized correctly against the model policy, internally reconciled, and good teaching vehicles. A credit committee would still stop at the items below.

### RD-RES-01 Maple Run (Ohio)

| # | Severity | Issue (quote) | Why committee would question it | Fix |
| --- | --- | --- | --- | --- |
| R-1 | Major | "Form 1007 market rent $3,100 a month" for a 1962, 3-bed, 1,640 sf house in Columbus | 2026 listing data put typical Columbus 3-bed house rents at about $1,800-$2,050 (Rentometer median $1,795 as of 19 May 2026; Trulia $2,050 Sep 2026; via search 22 Nov 2026). $3,100 is about 50-70% above typical. The DSCR exit rests on it. | Either relocate the house to a named premium fictional neighbourhood with comparables, or cut rent to about $2,200 and let the DSCR exit fail outright. That is a better lesson: "the flip-to-rent works only as a flip". |
| R-2 | Major | "ARV $520,000" against a $300,000 price and $100,000 of cosmetic rehab ("No structural work") | That is a $120,000 margin over all-in cost on a kitchen, baths and systems job. Committee would ask for the ARV comps, their distance and date, and a desk review. It is the classic broker-ARV risk. | Add three fictional ARV comps with distance, sale date and price per sf, and a lender desk-review value. Consider a what-if with ARV $470,000. |
| R-3 | Minor | "Taxes $520 a month" | $6,240 a year is 1.2% of ARV. Columbus effective rates are usually higher, and Ohio reappraisal follows sales. That understates PITIA on the exit. | Cite the fictional county auditor estimate, or raise taxes and recompute the DSCR exit. |
| R-4 | Minor | Term sheet has points only | No underwriting, doc or draw-inspection fees (C3 M-7). | Add illustrative fees, or note "fees omitted for simplicity". |

### RD-MF-01 Cedar Court (North Carolina)

| # | Severity | Issue (quote) | Why committee would question it | Fix |
| --- | --- | --- | --- | --- |
| R-5 | Critical | Exit into "our term loan" at 7.25% while "Agency 10-year fixed rate 6.55%" | The sponsor will refinance with the agency 70 bp cheaper. Our exit-fee waiver is not enough to keep them. Committee would also ask how a non-bank funds a 10-year fixed loan (see C0 C-2). | Make the take-out an agency or a fictional third-party lender. Keep our MF-TRM rules as the "take-out lender's box" for sizing. Or justify ours (speed, certainty, a sponsor issue the agency will not take). |
| R-6 | Major | "Capex plan $800,000 (interiors, roofs, parking)" for 50 units, with a stabilized NCF of $560,000 | That is $16,000 per unit including roofs. Roofs alone on a 1986 garden complex can take a large share of it. The plan implies roughly a 20%+ rent lift in Charlotte, a market that took heavy new supply in 2023-2025. The lesson's own T5 calls this hypersupply. | Add a per-unit capex breakdown and a rent-premium comp table, or raise capex and add a contingency line. |
| R-7 | Major | "Coverage $395,000 ÷ $358,050.00 = 1.10x, so no interest reserve is needed" | Renovating 50 units while 88% leased takes units offline. In-place NCF will fall during the work. Committee would ask for a downtime-adjusted cash flow and probably an interest and carry reserve. | Add a month-by-month NCF with renovation downtime, and test coverage at its low point. |
| R-8 | Major | "borrower buys a 6-month cap extension. Approve" | No cost or liquidity check for an in-the-money cap: at least $19,275 (C3 M-3). | Add the cap quote and the liquidity check to the month-24 decision. |
| R-9 | Minor | Equity "from the two owners and passive investors in a separate holding LLC" | A syndication. Committee will ask about the GP's co-invest, control rights, key-principal replacement and investor KYC above 25%. | Add one line on the GP co-invest and a key-principal clause. |
| R-10 | Minor | Rate cap has no notional | See C3 M-2. | State the notional. |

### RD-COM-01 Birchwood Plaza (Indiana)

| # | Severity | Issue (quote) | Why committee would question it | Fix |
| --- | --- | --- | --- | --- |
| R-11 | Critical | "Leases expiring within 24 months: $60,000" and "Largest tenant ($90,000 rent) gives notice it will not renew at lease end (month 20)" | If the largest lease ends in month 20, it expires within 24 months of closing. Expiring rent is then at least $90,000, not $60,000. The rollover ratio is at least $90,000 ÷ $420,000 = 21.4%, and $150,000 ÷ $420,000 = 35.7% if the two are separate. That breaks the "14.3%, under the 15% trigger, so no stress" conclusion. This is the first thing a committee member checks on a strip center. | Either move the largest tenant's lease end past month 24 (with notice at month 9 as an early termination or a non-renewal of an option), or restate the rollover at 35.7% and run the COM-GEN-08 stress at underwriting. |
| R-12 | Major | "Coverage ... 1.08x: no interest reserve (COM-BR-04)" | This is a 70%-leased unanchored center with a 21% tenant and 12,000 sf to lease. A 1.08x coverage with no reserve would not get past most bridge committees. Billed Actual/360 interest on $2,860,000 at 8.25% is $239,227.08 a year against $254,000 of NCF, which leaves $14,772.92 of headroom before TI/LC and leasing downtime. | Keep the policy result, but add a committee question: "Would you require a reserve anyway?" Model answer: yes, sized to the expected downtime. |
| R-13 | Major | Term loan at 7.00%, full recourse ("DSCR 1.31x is under 1.35x, so full recourse") for 10 years | A sponsor with $5.2 million of net worth would take a non-recourse CMBS or bank loan at similar leverage. A 10-year fixed full-recourse loan from a non-bank is an unusual product. | Present the take-out as a fictional third-party lender or a conduit. Teach recourse as a negotiation point. |
| R-14 | Minor | Price $4,400,000 against in-place NOI of $300,000 (6.8% in-place yield) for a 70%-leased unanchored strip, against an 8.0% stabilized cap | The buyer pays a rich price for upside. Committee would ask what the sponsor's going-in yield and equity IRR are, and what happens if lease-up takes 30 months. | Add a lease-up timing what-if at 30 months to the C8 materials. |

## What to add

1. **Excel build exercises.** These are the most important missing piece for day-one readiness.
   - (a) A 120-month amortization schedule for Birchwood on both conventions (C-1), with the balloon difference.
   - (b) A Maple Run IO billing ledger built from dates. The OJT does this on paper; make it a spreadsheet with `=DAY(EOMONTH())` logic and `ROUND` at the period.
   - (c) An XIRR on Maple Run's dated flows (M-8).
   - (d) A cap payment reconciliation on notional (M-2).

   Give each one a check cell that ties to a model answer.
2. **"Read the note" exercise.** A one-page fictional promissory note with interest, default-rate, late-charge, Term SOFR reset, floor and prepayment clauses. Planted errors: the servicing system set to 30/360, a floor missing from the system, and a determination date off by one day. The learner finds them.
3. **Comparing quotes worksheet.** Three fictional RTL quotes on Maple Run: Dutch at 9.75% with 1 point; non-Dutch at 10.25% with 1.5 points; and 10.00% with 1 point plus $1,495 in fees. Rank them on all-in cost over 8 and 12 months.
4. **War stories (fictional, one paragraph each).**
   - "The 31-day month": a servicing system set to 30/360 on an Actual/360 note, found after 18 months, with refund or rebill politics.
   - "The cap that expired first": a 2022 bridge whose cap ended at month 24 with SOFR above the strike.
   - "The penny that held a payoff": a payoff wire short by $0.04 because of per-segment rounding.
5. **Common new-analyst mistakes box (add to the existing slips).** A wrong amortization convention for the product (C-1, C-2); a cap on the funded balance instead of the notional (M-2); forgetting the index floor (M-4); quoting the note rate as the yield (already covered well).

## Self-check

1. Birchwood's term note fixes the payment at $27,564.39 on 30/360 and accrues Actual/360. What is month 1's interest in a 31-day month? **Answer:** $3,900,000 × 7.00% ÷ 360 × 31 = $23,508.33, so principal is $27,564.39 − $23,508.33 = $4,056.06.
2. Cedar Court's cap notional is $5,140,000. In a 30-day month with SOFR at 5.00%, what does the cap pay? **Answer:** $5,140,000 × 0.75% ÷ 360 × 30 = $3,212.50.
3. What is the minimum cost of a 6-month cap extension at a 4.25% strike when SOFR is 5.00%, on $5,140,000? **Answer:** the intrinsic value, $5,140,000 × 0.75% × 0.5 = $19,275, before time value.

## What to look up yourself

1. A public Fannie Mae multifamily or CMBS note form. Find the interest-accrual and "application of payments" sections, and confirm whether the payment is set on 30/360 while interest accrues Actual/360.
2. CME Group's Term SOFR reference-rate methodology and a sample note's "determination date" definition.
3. A rate-cap broker's published indicative cap-pricing grid, to test the $60,000 and $40,000 running-deal premiums and the M-3 extension cost.

## How to check it

1. Self-check 1: `=ROUND(3900000*7%/360*31,2)` returns 23508.33.
2. Self-check 2: `=ROUND(5140000*0.75%/360*30,2)` returns 3212.50.
3. C-1 balloon: build 120 rows with `interest = ROUND(balance*7%/360*DAY(EOMONTH(date,0)),2)` starting January 2029. Month 120 should close at about $3,118,446.42.
4. C-2 residual: the same build at 7.50% on $338,000, payment $2,363.35, 360 rows from April 2028, should leave about $34,926.50.

## Sources opened for this review (22 Nov 2026)

- Backflip, "Dutch Interest: A Primer for Borrowers" (lender marketing): <https://backflip.com/dutch-interest-a-primer-for-borrowers/>.
- Ridge Street Capital, "Non-Dutch Interest Explained" (lender marketing): <https://www.ridgestreetcap.com/blog/non-dutch-interest>.
- Bisnow, multifamily CLO distress and rate-cap costs (Moody's example): <https://www.bisnow.com/news/national/capital-markets/multifamily-clo-distress-is-spiking-apartment-flippers-are-in-the-line-of-fire-125442>.
- Rentometer, Columbus OH average rent (data as of 19 May 2026): <https://www.rentometer.com/average-rent-in/oh/columbus-oh>.
- Trulia, Columbus OH single-family rentals: <https://www.trulia.com/for_rent/Columbus,OH/SINGLE-FAMILY_HOME_type/>.
- Federal Reserve Bank of New York, SOFR API: <https://markets.newyorkfed.org/api/rates/secured/sofr/last/5.json>.

The DSCR 30/360 convention (C-2), the commercial note payment and accrual convention (C-1) and the prevalence of SOFR floors (M-4) are the reviewer's practitioner judgement. Confirm each against the note forms in "What to look up yourself" before you change the policy. All market figures are context, never policy.
