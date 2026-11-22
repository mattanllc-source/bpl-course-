# C0 industry review: Program orientation and the BPL market

**Model policy for training - not for live lending decisions.**

| Item | Detail |
| --- | --- |
| Module reviewed | `modules/core/c00/lesson.md` (v1.0-draft, Phase 2 pilot, exported 22 Nov 2026; SNAPSHOT.md says current) |
| Also read | `docs/curriculum/c00-blueprint.md`; `data/running-deals/running-deals.md`; `docs/credit-policy/model-credit-policy.md`; `docs/formulas/formula-library.md` (selected entries) |
| Reviewer stance | Chief credit officer, US BPL lender (RTL, DSCR, MF and COM bridge and term). I am not the author |
| Date | 22 Nov 2026 |
| Recomputation | Python script, double precision, rounded half up for display. Every C0 number I spot-checked reproduced (mezzanine ADS $452,586.00 + $98,746.80; cushions; worked example 5 table) |

## Verdict

**Would I use this to train my analysts? Partly. Score: 6/10.**

The arithmetic is clean. The sourcing is better than most lender onboarding decks, and the three running deals give it a spine. The capital stack, the warehouse margin-call loop and the "a buyer reads your file as a stranger" point are exactly what I want a new hire to hear in week one.

But C0 is written as an accredited survey course, not a desk orientation. About a third of it (FIRREA history, the four-quadrant model, Mueller's cycle, CPE timing tables) is material my analysts would never use. Meanwhile the things they get asked about on day one are missing. These include current pricing and leverage ranges, who actually buys RTL and DSCR loans (forward-flow buyers and aggregators), how a warehouse line really works (repo, aging, eligibility haircuts), and what a broker will tell them about a competitor's terms.

Two content points would mislead a new hire. First, Worked example 2 teaches the cushion against *as-stabilized* value. Second, the product table implies a specialist BPL lender funds 5- to 10-year fixed term loans from its own balance sheet. Fix those, cut the academic padding by half, and add a pricing and funding reality section. Do that and it would be an 8.

## Strengths

1. **The stack and the "layers below are not a cushion" point.** T2 says "More debt beneath you is not a cushion. Mezzanine and hard-pay preferred equity need cash every month". That is a lesson most juniors learn by losing money. The F-MF-16 mezzanine test case shows the combined DSCR failing at 1.02x while leverage passes. That is a real committee conversation.
2. **Warehouse margin calls tied to liquidity.** T3: "In a falling market, several loans can be marked down at once. Margin calls then arrive just when selling loans is hardest." That is a correct description of 2020 and 2022-2023 in the non-bank space.
3. **File discipline for sale.** "A buyer reviews your loan as a stranger would. It sees the file, not the conversation." The repurchase illustration (one missing guarantor certification) is exactly how buybacks happen.
4. **Percent versus percentage point, with reconciliation to the headline.** Juniors get this wrong in credit memos every year. The "gap within rounding versus large gap" rule is practical.
5. **"Underwrite the exit under the next phase, not the current one."** That is the right takeaway from T5, and Worked example 6 (Cedar Court NCF down 10.7%, cushion gone) proves it with numbers.
6. **Competition does not move limits** (CORE-EXC-01; Practice 6). That is the right culture to set on day one.

## Findings

### Critical

**C-1. The cushion is measured against a value that does not exist yet.**
- *Location:* T2, Worked example 2, step 3.
- *Quote:* "Inputs: fully funded loan $5,140,000; as-stabilized value $8,600,000 ... Result: the stabilized value could fall 40.2% before the senior loan is impaired, before sale costs."
- *Why it matters:* This is the single most expensive habit of the 2021-2022 vintage. Bridge lenders took comfort from as-stabilized LTVs around 60%. Then the business plan stalled, the loan was marked against as-is value, and the "cushion" was half what the memo said. If we take the keys in month 12, the asset is not stabilized. A new hire who learns "40% cushion" first will carry it into every memo.
- *Fix:* Show three cushions side by side and say which one committee leans on.
  - Day-one: 1 − ($4,340,000 ÷ $6,200,000) = 30.0%.
  - Fully funded against cost-basis value: 1 − ($5,140,000 ÷ ($6,200,000 + $800,000)) = 26.6%.
  - Fully funded against stabilized value: 40.2%.

  Then add: "If the plan fails, you recover on the as-is value, less 8-10% foreclosure and sale costs. Underwrite to that, not to the stabilized number." Apply the same lesson to Birchwood (as-is $4,500,000, price $4,400,000).

**C-2. The product line implies the lender holds 5- to 10-year fixed term loans. It never says who funds them.**
- *Location:* T1 product table and Worked example 1 ("Month 27: term loan of $5,472,000 repays the bridge"; "Month 24: term loan of $3,900,000 repays the bridge"). Also T3, Practice 3 step 5 ("our term loan ... may itself be sold or securitized").
- *Why it matters:* A specialist non-bank lender has no deposits. Warehouse lines and CRE CLOs fund *floating-rate, short* assets. A 10-year fixed loan has to be pre-sold, put into a CMBS conduit, or hedged, or the lender carries rate risk it cannot fund. In the market, Cedar Court's exit is an agency loan (Freddie Mac or Fannie Mae), a bank, a life company or a CMBS conduit. It is usually not the bridge lender's own book. The running deal's own inputs make this worse: the agency 10-year is 6.55% and "our" term loan is 7.25%. Any sponsor would take the agency loan. A new hire who thinks the bridge lender "keeps the borrower" will misunderstand both the exit risk and the exit-fee waiver.
- *Fix:* Add a "Who is the take-out lender?" row to the product table. Name agency (Fannie Mae DUS, Freddie Mac), CMBS conduit, life company, bank and debt-fund term programs. Say in one sentence that our term product is funded by sale to a conduit or a forward buyer, and name the price risk between closing and sale. Add to Worked example 1: "Credit committee will ask why the sponsor would not refinance with an agency at 6.55%. Our answer is speed and certainty, not price."

### Major

**M-1. No current pricing or leverage ranges anywhere in the market snapshot.**
- *Location:* T4, "Market snapshot (first checked 20 Nov 2026; re-checked 22 Nov 2026)".
- *Why it matters:* The snapshot has issuance volumes, vacancy, CRE prices and maturities. It has no coupons, spreads, points or leverage. On day one a broker will call an originator and say "Lender X is at 9.25 and 1 with 90% LTC." The analyst has no frame to answer. The model policy already contains sourced ranges (for example, the RTL band 8.50-12.75% and the DSCR base 7.000%), so this is assembly, not research.
- *Fix:* Add a "Where the market prices today" table, labelled "market range" and dated. Use one row per product: coupon or spread, points or fees, typical maximum leverage, term, and prepayment. As a check, lender-published 2026 RTL guides cite about 8.5-12% interest-only and 1-3 points, and leverage around 80-90% of purchase, up to 100% of rehab, capped at 70-75% of ARV ([Mortgage-Info, updated 16 Oct 2026](https://mortgage-info.com/blog/fix-and-flip-loans-hard-money-2026-guide); [Crestmont Capital](https://www.crestmontcapital.com/blog/fix-and-flip-loan-rates); both lender marketing, opened 22 Nov 2026). Then position our model policy against it: "We sit at the conservative end on ARV and recourse."

**M-2. The RTL funding picture leaves out the channel that sets most originators' credit box: forward-flow buyers.**
- *Location:* T3, "Why a lender needs funding routes" and "The whole-loan sale".
- *Quote:* "When a buyer pays a good price for a pool of loans."
- *Why it matters:* Most mid-size RTL originators sell loans under forward-flow (committed purchase) agreements to aggregators, insurance-backed funds and securitizers. The buyer's guidelines are often the *binding* credit box, tighter than the originator's own policy. Some lenders are pure table-funded correspondents. "Whole-loan sale when the price is good" makes it sound occasional. A junior who does not know the buyer's guide will approve loans that cannot be sold.
- *Fix:* Add a paragraph on forward flow. Cover the committed price, the buyer's eligibility guide, the "kick-outs" (loans the buyer rejects), and servicing-released versus servicing-retained. Add a row to "How funders' rules reach our credit box": "Buyer's guideline matrix: if a loan fails it, it is a portfolio loan whatever our policy says."

**M-3. The warehouse line is described as a bank loan. In this market it is usually a repurchase facility with features that drive daily decisions.**
- *Location:* T3, "The warehouse line".
- *Quote:* "A warehouse line is a revolving credit line secured by the loans themselves."
- *Why it matters:* Most non-bank BPL warehouse lines are master repurchase agreements: the lender "sells" the loan to the bank and agrees to buy it back. In practice they carry aging limits (the advance steps down or stops after a set number of days), concentration sub-limits, extra haircuts for exceptions or for loans 30 days late, mark-to-market by the buyer, and wet or dry funding mechanics. Underwriters feel these every week: "That exception makes it warehouse-ineligible; it will need 100% equity."
- *Fix:* Rename the row "Warehouse line (usually a repurchase facility)". Add aging, sub-limits and "eligible versus ineligible collateral" as named terms. Add one worked number: an advance rate of, say, 80% on $340,000 means $68,000 of our equity per Maple Run. Label the advance rate as illustrative, because the model policy sets no warehouse terms. Then show the equity needed if the loan is ineligible ($340,000).

**M-4. Risk retention is shown as a 5% slice of one loan. RTL and CRE CLO sponsors usually hold first loss.**
- *Location:* T3, Worked example 4, final step.
- *Quote:* "the sponsor bears $17,000 of Maple Run's credit risk. Investors bear $323,000."
- *Why it matters:* The vertical-interest arithmetic is correct. But it leaves a new hire thinking our exposure on a sold loan is 5% pro rata. In practice RTL and CRE CLO sponsors commonly keep the subordinate or residual classes (horizontal, first loss), and CRE CLO managers often keep well above 5%. A 10% loss on a few loans can wipe out a lot more of the sponsor's retained piece than "$1,700".
- *Fix:* Keep the vertical example. Add a horizontal one on a simple fictional $200 million pool with a 5% first-loss piece ($10 million): a 2% pool loss ($4 million) takes 40% of the sponsor's piece. End with: "Under horizontal retention, the weak loans you approve hit us first."

**M-5. "Who regulates it" understates the non-bank picture, and the governing-law row says consumer rules mostly fall away without naming ECOA.**
- *Location:* T1 comparison table ("Commercial law; most consumer rules do not apply if the purpose test is met") and T2 lender table ("Debt fund ... No bank examiner"; "Mortgage REIT ... No bank examiner").
- *Why it matters:* Originators need to know that the Equal Credit Opportunity Act and Regulation B still reach business credit, including adverse-action notice duties. A debt-fund manager is usually an SEC-registered investment adviser. A public mortgage REIT files with the SEC and must meet REIT tax tests. Bank regulators also reach non-banks indirectly through the warehouse banks' own supervision. "No examiner" reads as "no rules".
- *Fix:* In T1 add: "Fair-lending law still applies to business credit [VERIFY: 15 U.S.C. 1691(a); 12 CFR 1002.9(a)(3); checked <date>]." In T2 change "No bank examiner" to "No bank examiner; the manager is usually an SEC-registered adviser [VERIFY: 15 U.S.C. 80b-3; checked <date>]" and, for the mortgage REIT, "SEC reporting if public; REIT tax rules [VERIFY: 26 U.S.C. 856; checked <date>]".

**M-6. The academic cycle content crowds out the 2022-2025 cycle every lender in this market just lived through.**
- *Location:* T5, "Two markets, not one" (DiPasquale and Wheaton four-quadrant table) and "The four phases of the physical cycle" (Mueller).
- *Why it matters:* No credit committee I have sat on has referred to the four-quadrant model. What new hires need is the floating-rate bridge story of 2021-2025. Sunbelt value-add apartments were bought at low cap rates on SOFR-floating CLO debt with short caps. Rates rose, cap replacement costs exploded and supply arrived in the same metros. Extensions and "bridge-to-bridge" refinances followed. Moody's cited a three-year cap on a $100 million loan that cost $98,000 in 2019 and nearly $3.5 million by 2023 ([Bisnow, via search 22 Nov 2026](https://www.bisnow.com/news/national/capital-markets/multifamily-clo-distress-is-spiking-apartment-flippers-are-in-the-line-of-fire-125442)). Fitch reported landlords rolling one floating-rate bridge loan into the next ([Bisnow](https://www.bisnow.com/news/national/capital-markets/bridge-to-bridge-bet-holding-off-cre-day-of-reckoning)). Cedar Court is a Charlotte value-add deal, which is the centre of that story.
- *Fix:* Cut the four-quadrant table to two sentences: space market, asset market, capital market. Keep Mueller's single quotation on hypersupply. Replace the rest with a one-page fictional case, "The 2022 vintage". Use a fictional Charlotte 120-unit bought at a 4.5% cap with 80% LTC at SOFR + 325 and a 2-year cap at 2%. Walk it from purchase to the cap-replacement bill to extension to rescue capital. Tie it to Cedar Court's month-24 extension.

**M-7. Learner-facing pages carry course-production metadata that a practitioner would strip out.**
- *Location:* Header table ("2.0 CPE credits projected (QAS Self Study word-count formula ...)"; "Bloom's levels 2 to 4 ... (LD-02)"); timing plan ("10,248 counted words ÷ 180"); in-text citations such as "(Course Bible 5.4, rule 6)"; the closing "Self-review against Bible Section 7".
- *Why it matters:* A new analyst reading "LD-04", "QAS" and "Bloom's levels" in the first screen concludes this was written by course designers, not lenders. That costs the credibility that the strong parts earn.
- *Fix:* Move the header, timing plan, alignment matrix and self-review to an author appendix or a separate tab. Learner text should cite rule and formula IDs only.

**M-8. The quiz, job aid and alignment matrix were not updated to the rewrite, and they contradict the lesson.**
- *Location:* Section 6 ("Each set has 7 items and covers all four objectives"); Alignment matrix (O1-O4, including "O4 Course structure"); Quiz Set B item 3 ("(T3; C7)" for fraud, which T5 teaches); Quiz Set B item 7 and Job aid item 6 ("a legal point awaiting compliance confirmation").
- *Why it matters:* T6 defines a [VERIFY] tag as "what the law is, where it was read and when", not "awaiting compliance". The objectives are O1-O6. A new hire who sees the quiz contradict the lesson stops trusting both. Self-review row "Sources dated ... checked 20 Nov 2026" also conflicts with the 22 Nov dates in the body.
- *Fix:* Re-key the quiz and matrix to O1-O6 now, even before Phase 3. Use the T6 wording for [VERIFY] in the quiz and job aid. Change the fraud citation to T5. Re-date the self-review.

### Minor

**m-1. "None of these properties ... fits a bank's standard loan."** (Section 1, Hook.) Banks do make bridge and construction loans to experienced sponsors, often cheaper than ours. *Fix:* "None fits a bank's standard term loan, and many banks will not lend on them quickly or at this leverage."

**m-2. Combined DSCR on a floating bridge is computed on 30-year amortizing debt service.** (T2, F-MF-16 test case: "Senior annual debt service (ADS) $452,586.00 (30 years at 8.00%)".) A bridge senior pays interest only, and bridge mezzanine is almost always interest only at 12-15%. The F-MF-27 basis is a policy choice. *Fix:* Add one line: "Our policy tests combined coverage on an amortizing basis to be conservative. In the market you will see it tested on actual interest-only payments, which gives a higher ratio."

**m-3. The origination-channels table omits the economics.** (T2, "How loans reach a lender".) Add that brokers are typically paid in borrower points on top of ours, which raises the borrower's all-in cost (links to C3 T6). Add that correspondents earn a premium on sale, which is why they push leverage.

**m-4. "Non-QM securitization" for a DSCR loan needs one clarifying sentence.** (T3, Worked example 4, step 5.) Business-purpose DSCR loans are outside the ability-to-repay rule, so "non-QM" is a shelf label, not a legal status. Many issuers now run DSCR-only deals. *Fix:* add that sentence.

**m-5. The SOFR comparison treats a 26 bp gap as normal.** (T4: "Overnight SOFR printed 3.91% on 19 Nov 2026 ... 3.65% ... 26 bp".) One-month Term SOFR usually sits within a few basis points of overnight SOFR unless cuts are priced in. I confirmed overnight SOFR at 3.91% on 19 Nov 2026 ([NY Fed API](https://markets.newyorkfed.org/api/rates/secured/sofr/last/5.json), opened 22 Nov 2026). *Fix:* Say that 3.65% is a stale course input, not a market gap, and point learners to CME's delayed Term SOFR page for the real one-month figure.

**m-6. Rating agencies.** (T3 securitization table: "such as KBRA".) Name the agencies juniors will actually see on RTL and DSCR deals: KBRA, Morningstar DBRS, Fitch, Moody's and S&P.

**m-7. Product table gaps.** Stabilized (no-rehab) bridge, DSCR portfolio or blanket loans, and 5-9 unit small-balance multifamily all appear in the model policy (RES-BR, CORE-CONC-04, -05; MF-DSCR) but not in T1. Add one line each, or a "variants" footnote.

**Running deals.** The deal-by-deal review of Maple Run, Cedar Court and Birchwood Plaza is in `docs/reviews/c03-industry.md`, section "Running deals". C-1 and C-2 above come from it. The two other items that matter most for C0's introduction are Birchwood's rollover figure (R-11) and Maple Run's $3,100 rent (R-1).

## What to add

1. **"Your first broker call" script (originators).** Ten questions: purchase or refinance; price and contract date; rehab scope and who prepared it; ARV source (the broker's or an appraiser's); exit plan and timeline; entity and owners; experience in the last 36 months, with addresses; liquidity; who else is quoting; why the deal is coming to us. Model answers for Maple Run.
2. **Market terms table (M-1)**, refreshed each quarter, with a self-check: "A broker says 90% LTC and 0.75 points. Where does that sit in the range, and which of our rules does it fail?"
3. **Fictional war stories, one paragraph each.**
   - "The 2022 cap" (MF bridge, M-6).
   - "The kicked-out tape": 14 loans rejected by a forward buyer for missing guarantor certifications, held on the warehouse past its aging limit, then a margin call.
   - "The ARV that was a list price": a broker-supplied comp set in a flip.
4. **Excel exercise: equity consumed by a pipeline.** Ten fictional RTL loans, an illustrative 80% advance rate, a 120-day aging limit and one ineligible loan. Compute the equity tied up and the day the first loan ages out.
5. **Funding-chain diagram for Cedar Court**, ending at an agency or CMBS take-out, not "our term loan" (C-2).
6. **Common new-analyst mistakes box.** Cushion on stabilized value (C-1); treating the buyer's guide as optional (M-2); quoting a competitor's rate without the day count, points and fees; and "percent" for "points" (already taught well).

## Self-check

1. Cedar Court's plan stalls in month 12 with $4,740,000 funded. The as-is value is still $6,200,000. What is the cushion before sale costs? **Answer:** 1 − ($4,740,000 ÷ $6,200,000) = 0.235484, or 23.5%. That is not the 40.2% in the lesson.
2. Why would Cedar Court's sponsor refinance with an agency rather than our 7.25% term loan? **Answer:** the agency 10-year is 6.55% (RD-MF-01 market inputs), 70 bp cheaper. We win only on speed or certainty.
3. A forward-flow buyer's guide caps LTC at 85% and requires a guarantor FICO of 700. Sam Okafor's mid-score is 655. Is Maple Run saleable? **Answer:** That depends on whether the buyer tests every guarantor or only the qualifying one. Read the guide before you approve, not after.

## What to look up yourself

1. CME Group's published one-month Term SOFR for 19 Nov 2026 (the delayed page is free), to replace the 26 bp "gap".
2. A current Freddie Mac or Fannie Mae small-balance multifamily rate sheet, to check the 6.55% agency input in RD-MF-01.
3. A public RTL securitization presale report from KBRA or Morningstar DBRS. Read the "Transaction Parties", "Risk Retention" and "Eligibility Criteria" sections. That is what the buyer and rating agency check on our loans.

## How to check it

1. For self-check 1: `=1-4740000/6200000` should return 0.235484.
2. For the cushions in C-1: `=1-4340000/6200000` gives 0.300000 and `=1-5140000/7000000` gives 0.265714.
3. For the presale report: confirm that the retention form (vertical, horizontal or both) is stated, and compare it with the 17 CFR 246.4 options in T3.

## Sources opened for this review (22 Nov 2026)

- Federal Reserve Bank of New York, SOFR API, last 5 observations: <https://markets.newyorkfed.org/api/rates/secured/sofr/last/5.json>.
- Mortgage-Info, fix-and-flip 2026 guide (lender marketing, updated 16 Oct 2026): <https://mortgage-info.com/blog/fix-and-flip-loans-hard-money-2026-guide>.
- Crestmont Capital, fix-and-flip loan rates 2026 (lender marketing): <https://www.crestmontcapital.com/blog/fix-and-flip-loan-rates>.
- Bisnow, multifamily CLO distress and rate-cap costs (Moody's example): <https://www.bisnow.com/news/national/capital-markets/multifamily-clo-distress-is-spiking-apartment-flippers-are-in-the-line-of-fire-125442>.
- Bisnow, bridge-to-bridge refinancing (Fitch): <https://www.bisnow.com/news/national/capital-markets/bridge-to-bridge-bet-holding-off-cre-day-of-reckoning>.

Secondary and marketing sources are used for market context only, never policy. Statutory cites under M-5 carry `[VERIFY: ...; checked <date>]` placeholders. The reviewer did not open those sources, so they need checking before use.
