# Foundations changes, 22 Nov 2026

**Model policy for training - not for live lending decisions.**

This log records every change made to the shared foundations after the C0 and C3 reviews (`docs/reviews/c00-academic.md`, `c00-industry.md`, `c03-academic.md`, `c03-industry.md`). It covers the Model Credit Policy, the Formula Library and the Running Deals tabs of the live Course Bible, and their repo mirrors. Module tabs C0-C14 were not edited. All numbers were recomputed in Python (half-up display rounding).

## Decisions added (Model Credit Policy, Core Part 3A)

| ID | Rules | Choice (option A) |
| --- | --- | --- |
| D-CORE-29 | New CORE-PRC-06; D-CONV-01; RES-FF-08; F-CORE-01, -02, -47, -49 | Interest and payment basis by product. Bridges (RTL, MF, COM): interest-only, Actual/360 on the funded balance; Dutch interest taught as the market alternative. DSCR loans: payment and accrual 30/360, so they fully amortize. MF and COM term notes: payment set on 30/360, interest accrues Actual/360, balloon by new F-CORE-49 |
| D-CORE-30 | MF-BR-09; COM-BR-03 | Rate-cap notional equals the full commitment for the cap's term |
| D-CORE-31 | Running Deals take-outs; MF-TRM, COM-TRM, RES-DSCR; MF-BR-14 | Each bridge exits to a third-party lender (agency small loan, bank, DSCR lender). Our term rules size the take-out as a stand-in for that lender's box |

Rule text changed: new CORE-PRC-06; D-CONV-01 billing cell; MF-BR-09 and COM-BR-03 (notional sentence added); RES-FF-08 ("non-Dutch interest; CORE-PRC-06" added); CORE-PRC-05 rationale (RD-RES-01 example now $245,990 to $245,000); Part 3A intro ("Thirty-one decisions"). No policy limit, threshold or rate was added or changed.

### Sources opened for the decisions (22 Nov 2026)

| Point | Source |
| --- | --- |
| Commercial notes set the installment on 30/360 but accrue and allocate on Actual/360 | Freddie Mac Multifamily Note, Floating Rate (rev. 9-4-2015), Section 3(b), filed as SEC 8-K Exhibit 10.2, 14 Jan 2016: [Law Insider copy](https://www.lawinsider.com/contracts/gNMNIgD11Sw) |
| Actual/360 accrual definition | Fannie Mae Multifamily Guide 204.02A, effective 16 Nov 2026: [PDF](https://mfguide.fanniemae.com/fnmf-pdf/download/7941) |
| Single-family (residential-style) notes: a full month's interest on a 360-day year | Fannie Mae Servicing Guide F-1-09, 19 Oct 2016: [page](https://guide-servicing.fanniemae.com/svc/f-1-09/processing-mortgage-loan-payments-and-payoffs) |
| Dutch interest common in fix-and-flip | Backflip, "Dutch Interest: A Primer for Borrowers", 9 Dec 2024 (lender marketing): [page](https://backflip.com/dutch-interest-a-primer-for-borrowers/) |
| Cap notional equals the loan amount for the cap's term; replacement-cap reserve | Fannie Mae Multifamily Guide Part III 1105.01, effective 16 Nov 2026: [PDF](https://mfguide.fanniemae.com/fnmf-pdf/download/5316) |
| Cap cost rises with notional, term and volatility | Chatham Financial, "What is an interest rate cap" (undated): [page](https://cf.com/insights/what-is-an-interest-rate-cap) |
| Columbus single-family rent index, Oct 2026: $2,084 | Zillow Observed Rent Index, metro single-family: [CSV](https://files.zillowstatic.com/research/public_csvs/zori/Metro_zori_uc_sfr_sm_month.csv) |
| ZIP 43214 typical 3-bedroom value, Oct 2026: $431,884 | Zillow Home Value Index by bedroom count: [CSV](https://files.zillowstatic.com/research/public_csvs/zhvi/Zip_zhvi_bdrmcnt_3_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv) |
| Columbus FY2026 3-bedroom Fair Market Rent: $1,715 | Columbus Metropolitan Housing Authority, FY2026 FMR schedule, effective 1 Aug 2026: [PDF](https://cmhanet.com/media/Documents/2026/FY2026_CMHA_Payment_Standards_8_1_26.pdf) |

Sale-comparable pages (Redfin, Homes.com, Columbus REALTORS reports) refused automated access, so no single sale was cited. The ARV stays a labelled course assumption.

## Formula Library changes

| Formula | Change |
| --- | --- |
| Conventions table | Day count row now states the basis by product (CORE-PRC-06) |
| F-CORE-01 | Common mistake reworded for Dutch interest; rounding line names the product basis |
| F-CORE-02 | Basis stated: payment 30/360 on every product; DSCR accrues 30/360; MF and COM term notes accrue Actual/360, balloon by F-CORE-49. "Applying Actual/360 here" mistake reworded |
| F-CORE-45 | Step 5: the FV is a future-wealth measure, not what the 7.000% yield means |
| F-CORE-47 | Basis stated (30/360; exact for DSCR loans); step 4 adds the Actual/360 balloon $3,118,446.42. Tests unchanged |
| F-CORE-48 | Edge case: cumulative-sign test (Norstrom, 1972), not "abandon IRR at several sign changes". Interpretation: IRR does not assume reinvestment. Step 6: real draw pattern. Test 3 changed (see below) |
| F-CORE-49 (new) | Remaining balance with Actual/360 accrual and a 30/360 payment. Full entry, three tests |
| Core count line | 30 REQUIRED and 17 SUGGESTED formulas, 141 test cases (was 16 and 138) |

| Test | Old | New | Why |
| --- | --- | --- | --- |
| F-CORE-48 test 3 | −$340,000 no-points case: 10.250% nominal; 10.746% effective | Maple Run real draw pattern: 12.081% nominal; 12.772% effective | Review asked for the draw-pattern case as a fixture. The no-points case moved to a TypeScript unit test |
| F-CORE-49 test 1 | (new) | $3,900,000; 7.000%; 300 months; 120 payments from Jan 2029: $3,118,446.42 | Birchwood what-if |
| F-CORE-49 test 2 | (new) | $5,472,000; 7.250%; 360 months; 120 payments from Apr 2029: $4,803,418.77 | Cedar Court what-if |
| F-CORE-49 test 3 | (new) | $500,000; 7.000%; 360 months; 360 payments from Jan 2027: $42,293.30 left | Shows why DSCR loans accrue 30/360 |

### Worked: F-CORE-49 on Birchwood (first three months)

1. P = $27,564.39 (F-CORE-02, 7.000% ÷ 12, 300 months).
2. Jan (31 days): $3,900,000 × 7.000% ÷ 360 × 31 = $23,508.33 interest; principal $4,056.06; balance $3,895,943.94.
3. Feb (28 days): interest $21,211.25; principal $6,353.14; balance $3,889,590.80.
4. Mar (31 days): interest $23,445.59; principal $4,118.80; balance $3,885,472.00.
5. Month 120: $3,118,446.42, against $3,066,702.23 on 30/360: $51,744.19 (1.7%) higher.

### Worked: Maple Run draw-pattern IRR (F-CORE-48)

1. Flows: −$234,900; $2,050.00; −$27,950.00; $2,306.25; −$22,693.75; $2,519.79; −$17,480.21; $2,690.63; −$12,309.37; $2,818.75; −$7,181.25; $2,904.17; $342,904.17.
2. Running total: negative to month 11 (−$307,224.99), positive at month 12 ($35,679.18). One change, so the IRR is unique.
3. Bisection: monthly 1.006717%; nominal 1.006717% × 12 = 12.081%; effective 1.01006717^12 − 1 = 12.772%. NPV at 1% a month = $222.37.

## Running Deals: every changed number

### RD-RES-01 Maple Run

| Item | Old | New | Why |
| --- | --- | --- | --- |
| Address | Columbus, Ohio | Columbus, Ohio 43214, Clintonville area (fictional street) | Names the submarket that the ARV assumes |
| Form 1007 market rent | $3,100 a month | $2,400 a month | $3,100 was 49% above the Columbus single-family index ($2,084) and 81% above the HUD 3-bedroom FMR ($1,715). $2,400 allows a 15% premium for a renovated house in ZIP 43214 |
| Lease (month 11) | $3,200 a month | $2,450 a month | Keeps the lease just above the 1007 rent, so the 1007 rent still binds |
| ARV | $520,000 | $520,000 (unchanged; $317 a sf) | 20% above the ZIP 43214 typical 3-bedroom value ($431,884). Kept, labelled a course assumption that needs renovated comparables |
| Role 2 rental exit DSCR | 0.98x on $3,100 | $2,400 ÷ $3,165.95 = 0.76x | Rent change |
| Role 2 cash needed at refinance | about $9,000; "liquidity covers it" | about $102,000 plus reserves; more than $90,900 liquidity | Rent change |
| Role 3 qualifying rent | $3,100 | lesser of $2,450 and $2,400 = $2,400 | Rent change |
| Role 3 DSCR at $347,000 | 0.98x | 0.76x | Rent change |
| Role 3 max by DSCR at 7.75% | ($3,100 − $680) ÷ 0.0071641 = $337,794 (64.96% LTV) | ($2,400 − $680) ÷ 0.0071641 = $240,085 (46.2% LTV) | Rent change |
| Role 3 max by DSCR at 7.50% | $338,000 (65% band edge) | $1,720 ÷ 0.0069921 = $245,990, rounded down to $245,000 (CORE-PRC-05); LTV 47.1% | Rent change |
| Role 3 check | PITIA $3,043.35; DSCR 1.02x | P&I $1,713.08; PITIA $2,393.08; DSCR 1.00x (1.0029x) | Rent change |
| Role 3 decision | approve $338,000; $9,000 to close; reserves $9,130 | refinance cannot repay: $102,000 gap + reserves $7,179.24 = $109,179.24 against $89,738.33 liquidity (Sam $12,000); decline; exit is the sale | Rent change. Lease to month 23 outlasts the 15 Jul 2028 final maturity, so the sale is tenant-in-place or by agreement |
| Role 3 what-if knock-on | late payment closes the refinance, "exit becomes the sale" | refinance already fails; late payment adds default cost and a CORE-SVC-08 rating | Rent change |
| Credit memo risk line | thin rental exit, mitigated by liquidity | rental exit fails; loan relies on the sale exit | Rent change |
| Take-out | "a DSCR loan" | third-party DSCR lender, sized on RES-DSCR as a stand-in; 7.50% inside the 6.0-8.0% band in RES-DSCR-12 | D-CORE-31 |

Step by step, Role 3 item 5 at $2,400:

1. Requested $347,000 at 7.75%: P&I $2,485.95; PITIA $2,485.95 + $680 = $3,165.95; DSCR $2,400 ÷ $3,165.95 = 0.758 = 0.76x: fails.
2. 7.50% band: $1,720 ÷ 0.0069921 = $245,990.32 → $245,000. P&I $1,713.08; PITIA $2,393.08; DSCR 1.0029x: passes.
3. Gap: $347,000 − $245,000 = $102,000. Reserves 3 × $2,393.08 = $7,179.24. Total $109,179.24.
4. Dana's liquidity after closing $89,738.33: short by $19,440.91 before the $1,700 extension fee.

Unchanged: purchase, as-is value, rehab, sizing ($340,000), LTARV 65.4%, flip profit $57,275 (14.3%), draws, interest, extension fee, the 45-day-late cost ($1,968.75). Not changed (reviewer minor items): taxes $520 a month (R-3), lender fees (R-4).

### RD-MF-01 Cedar Court

| Item | Old | New | Why |
| --- | --- | --- | --- |
| Cap notional | not stated | $5,140,000 (full commitment) | D-CORE-30 |
| Cap cost $60,000 | "Strike matches KBRA" | labelled a course assumption (no quote source) | No cap quote opened |
| Agency 6.55% | market input | named as the take-out rate basis; Freddie SBL folded into Conventional Small (Policy MF Part 1) | D-CORE-31 |
| Timeline month 27 | refinance into a term loan | refinance with a third-party agency small-loan lender | D-CORE-31 |
| Month 10 cap payment (30 days) | $4,740,000 × 0.75% ÷ 360 × 30 = $2,962.50 | $5,140,000 × 0.75% ÷ 360 × 30 = $3,212.50 | Notional |
| Month 10 net cost (30 days) | $32,587.50, "equal to 8.25%" | $35,550.00 − $3,212.50 = $32,337.50, or 8.187% on $4,740,000 funded | Notional |
| Month 10, 31-day month | interest $36,735.00 only | cap $3,319.58; net $33,415.42 | Added |
| Month 24 extension cap | "borrower buys a cap extension" | intrinsic floor $5,140,000 × 0.75% × 6 ÷ 12 = $19,275.00 (course assumption: quote at least intrinsic value) | Review C3 M-3 |
| Month 24 coverage on extension | not shown | $520,000 ÷ ($5,140,000 × 9.00% = $462,600) = 1.12x | MF-BR-09 strike test at extension |
| Month 24 liquidity check | not shown | cap $19,275 + fee $25,700 = $44,975; Marcus $930,000 → $885,025 ≥ $514,000 (CORE-BOR-12) | Review C3 M-3 |
| Role 2 exit break-even | not shown | $5,140,000 × 1.25 × 0.0802397 = $515,539.84 (7.9% miss) at 7.05%; $5,140,000 × 1.25 × 0.0818612 = $525,957.91 (6.1% miss) at 7.25% | Review C0 M-5 |
| Memo value cushions | stabilized only (implied 40.2%) | day-one as-is 30.0%; stalled at month 10 ($4,740,000) 23.5%; stabilized 40.2% | Review C0 industry C-1 |
| Month 27 exit fee | waived (our term loan) | $5,140,000 × 0.50% = $25,700 paid; payoff $5,165,700 | Third-party take-out |
| Month 27 proceeds over payoff | $332,000 | $5,472,000 − $5,165,700 = $306,300 | Exit fee |
| Month 27 approval | committee (CORE-AUTH-01) | take-out lender approves; we approve payoff and release | Third-party take-out |
| What-if shortfall (NCF $500,000) | $253,677.46 against $5,140,000 | $5,165,700 − $4,886,322.54 = $279,377.46 | Exit fee |
| What-if paydown | about $254,000 | about $280,000 | Exit fee |
| What-if lesson | cushion gone at an 11% miss | gone at 7.9% (7.05%) or 6.1% (7.25%; 5.6% with the exit fee); the what-if is a 10.7% miss | Review C0 M-5 |

Unchanged: the $5,472,000 refinance (MF-TRM sizing at 7.25% kept as a conservative stand-in, 0.70% above the 6.55% agency quote), $443,273.69 exit cushion, all Role 1 and Role 2 sizing, the month-24 extension fee $25,700.

### RD-COM-01 Birchwood Plaza

| Item | Old | New | Why |
| --- | --- | --- | --- |
| Leases expiring within 24 months | $60,000 | $150,000 (largest tenant $90,000, lease ends month 20, plus $60,000) | The month-20 lease end is inside 24 months (review R-11) |
| Rollover ratio | $60,000 ÷ $420,000 = 14.3%: no stress | $150,000 ÷ $420,000 = 35.7%: stress at underwriting | COM-GEN-08 |
| Stressed exit DSCR | none | $434,000 − 15% × $150,000 = $411,500; ÷ $319,050.84 = 1.29x ≥ 1.20x: passes | F-COM-09 on the bridge's exit test (course reading) |
| In-place coverage | 1.08x, no reserve | 1.08x, no reserve by COM-BR-04; committee condition: interest reserve ($235,950 − $164,000) × 4 ÷ 12 = $23,983.33 | Without the $90,000 tenant, in-place coverage is $164,000 ÷ $235,950 = 0.70x (review R-12) |
| Cash to close | $1,735,200 | $1,735,200 + $23,983.33 = $1,759,183.33 (after committee) | Reserve. Role 1 draft term sheet unchanged |
| Cap rate basis | not stated in the deal | $480,000 ÷ $6,000,000 = 8.00% on NOI (F-CORE-13); in-place NOI yield $300,000 ÷ $4,400,000 = 6.82% | One convention (review C3 M-4) |
| Cap notional | not stated | $3,520,000 (full commitment) | D-CORE-30 |
| Cap cost $40,000 | "cost illustrative" | labelled a course assumption (no quote source) | No cap quote opened |
| Month 18 cap payment (30 days) | $3,460,000 × 0.50% ÷ 360 × 30 = $1,441.67 | $3,520,000 × 0.50% ÷ 360 × 30 = $1,466.67 | Notional |
| Month 18 net cost (30 days) | $23,787.50, "equal to 8.25%" | $25,229.17 − $1,466.67 = $23,762.50, or 8.241% on $3,460,000 | Notional |
| Month 18, 31-day month | interest $26,070.14 only | cap $1,515.56; net $24,554.58 | Added |
| Month 24 take-out | our term loan at 7.00%; committee | third-party regional bank; COM-TRM rules as stand-in; 7.00% = Treasury + 300 bp, inside the bank range to about 8.09% (Policy COM Part 1E); CMBS non-recourse alternative noted | D-CORE-31 |
| What-if extension test | $3,520,000 × 8.25% = $290,400; 1.31x | $3,520,000 × 8.75% = $308,000; $380,000 ÷ $308,000 = 1.23x ≥ 1.00x | F-MF-12 basis with SOFR 4.75% (D-CORE-27); review C3 M-3 |
| What-if cap extension and liquidity | not shown | not required by COM-BR-02; if bought, intrinsic floor $3,520,000 × 0.50% × 6 ÷ 12 = $8,800.00; fee + cap $17,600; Dana $760,000 → $742,400 ≥ $352,000 | Review C3 M-3 |

Unchanged: all sizing ($3,520,000 commitment; exit 1.36x; term loan $3,900,000; term rollover stress 1.26x), the what-if DSCR test ($3,446,475.69) and shortfall ($73,524.31).

## Module impact (not edited in this run)

These module tabs still carry superseded numbers and need a follow-up pass:

| Old number or claim | Modules |
| --- | --- |
| Maple Run $3,100 rent, $3,200 lease, $338,000 refinance, 0.98x | C0, C2, C3, C8, C9, C10, C11, C14 |
| Cedar Court cap $2,962.50, net $32,587.50 at 8.25%; Birchwood cap $1,441.67, net $23,787.50 | C3, C12 |
| Birchwood extension 8.25%, $290,400, 1.31x | C3 |
| Cedar Court shortfall $253,677.46, cushion "gone at 10.7%"; "our term loan" take-out and exit-fee waiver | C0, C3, C12 |
| Birchwood 7.23% "cap rate" on NCF | C3 |
| Rate ÷ 12 term-loan balloon as the real balloon; Actual/360 schedule interest as a "slip"; "every note bills Actual/360" | C3 |
| IRR "reinvestment" and "use NPV when flows change sign more than once" | C3 |
| Birchwood rollover 14.3%, "no stress" (check: 14.3% is also Maple Run's flip margin) | C9, C14 |

## Open items

1. Bibliographic details of Norstrom (1972), cited in F-CORE-48 from the academic review; confirm before quoting.
2. A dated rate-cap quote or broker grid, to replace the cap-cost course assumptions ($60,000, $40,000, and the intrinsic-value extension floors).
3. Renovated sale comparables for ZIP 43214, to replace the ARV course assumption.
4. Snapshots of the three tabs were updated by mirroring the same edits, not by a fresh export. Re-export when convenient.

## Independent numbers check (22 Nov 2026)

Every changed number in the Running Deals tab, CORE-PRC-06 and D-CORE-29 to -31, the CORE-PRC-05 example, and F-CORE-01, -02, -45, -47, -48 and -49 was recomputed in Python (Decimal, half up). The live tabs were exported and compared with the repo mirrors.

| Check | Result |
| --- | --- |
| Maple Run refinance: P&I, PITIA, 0.76x, $240,085, $245,990 → $245,000, 1.0029x, $7,179.24, $109,179.24, $19,440.91 short | All match (unrounded constants; display only rounds) |
| Cedar Court: cap $3,212.50 / $3,319.58, net $32,337.50 (8.187%) / $33,415.42; $19,275.00; 1.12x; $885,025; $515,539.84 and $525,957.91; 30.0% / 23.5% / 40.2%; $306,300; $279,377.46 | All match |
| Birchwood: 35.7%, 1.29x, $23,983.33, $1,759,183.33, 8.00%, 6.82%, cap $1,466.67 / $1,515.56, net $23,762.50 (8.241%) / $24,554.58, 1.23x, $8,800.00, $742,400 | All match |
| F-CORE-49 tests: $3,118,446.42; $4,803,418.77; $42,293.30; Birchwood months 1-3 | All match |
| F-CORE-48 draw pattern: 12.081% / 12.772%; running totals −$307,224.99 and $35,679.18; 11 sign changes; NPV at 1% $222.37; no-points case 10.250% / 10.746% | All match |
| Counts: core 47 formulas, 141 cases; all families 124 and 372; D-CORE-01 to -31 present | Match. `npm run fixtures` leaves fixtures.json unchanged; `npm test` 235 passed |
| Live Running Deals and Formula Library tabs against the repo | Identical |
| Live Model Credit Policy against the repo | One difference: the CORE-PRC-06 source cell in the live tab is newer (it adds a [VERIFY] tag). The repo row was synced to the live text |

No number errors were found, so no live tab was edited.
