# Impact map: foundations changes, C0-C5 (22 Nov 2026)

**Model policy for training - not for live lending decisions.** Internal authoring note. Fictional data only.

| Item | Detail |
| --- | --- |
| Date | 22 Nov 2026 (revision 2, after the change log) |
| Scope | C0-C5 lessons (live Course Bible tabs and exports), `scripts/course_site/exercises/*.json`, Model Credit Policy, Formula Library, Running Deals |
| Status | Read-only map. Nothing in the lessons, policy, library, running deals or exercises was changed |
| Replaces | Revision 1 (same file), written before the change log existed |

## 0. Read this first: inputs and limits

1. **Change log.** `docs/curriculum/foundations-changes-2026-11-22.md` now exists and was read in full. Revision 1 built its own register (CH-01 to CH-39) from the reviews. This revision keeps those IDs, maps each one to the change log (section 1), and replaces every "owner" and "what-if" value with the value decided today. Where the change log made no change, the row says **review only**.
2. **Change-log keys.** The change log has no IDs, so this map uses these short keys:

   | Key | Change-log entry |
   | --- | --- |
   | D29 | D-CORE-29: basis by product; new CORE-PRC-06; D-CONV-01 billing cell; RES-FF-08 "non-Dutch interest" |
   | D30 | D-CORE-30: cap notional = full commitment (MF-BR-09, COM-BR-03) |
   | D31 | D-CORE-31: every bridge exits to a third-party lender; our term rules are a stand-in |
   | F02 | F-CORE-01 and F-CORE-02 wording (Dutch mistake; payment 30/360 on every product) |
   | F45 | F-CORE-45 step 5 (FV is a future-wealth measure) |
   | F47 | F-CORE-47 basis line and step 4 |
   | F48 | F-CORE-48 edge case (cumulative-sign test, Norstrøm 1972), interpretation (no reinvestment), step 6 and test 3 (12.081% / 12.772%) |
   | F49 | New F-CORE-49 (Actual/360 balloon) and its three tests |
   | RES | Running Deals, RD-RES-01 Maple Run table |
   | MF | Running Deals, RD-MF-01 Cedar Court table |
   | COM | Running Deals, RD-COM-01 Birchwood Plaza table |
   | PRC05 | CORE-PRC-05 rationale example ($245,990 to $245,000) |

3. **Reviews read in full:** `docs/reviews/c00-academic.md`, `c00-industry.md`, `c03-academic.md`, `c03-industry.md` (the last holds the running-deal review, R-1 to R-14). Benchmark: `docs/design/competitive-benchmark.md`.
4. **Live tabs read in full** through the Claude Docs tools on 22 Nov 2026, every page to the end: C0 (rev 143), C1 (rev 161), C2 (rev 100), C3 (rev 209), C4 (rev 101), C5 (rev 188) and Running Deals (rev 142, which carries today's fixes). The module revisions are the same as in revision 1, so no module tab changed between the two revisions. Model Credit Policy and Formula Library: the repo mirrors were searched for every changed rule and formula (CORE-PRC-06, D-CONV-01, D-CORE-29 to -31, RES-FF-08, MF-BR-09, COM-BR-03, F-CORE-01, -02, -45, -47, -48, -49). The change log reports the live tabs identical to the mirrors.
5. **Freshness of the exports.**
   - C0 and C3: the export matches the live tab. Every C0 and C3 location below holds for both.
   - C1, C2, C4 and C5: the live tabs are the v1.0-draft rewrites, five to six times longer than the exports. `modules/core/c01`, `c02`, `c04` and `c05/lesson.md` are **stale**. Locations below cite the live tab. Only one changed number survives in those exports (`c02/lesson.md` line 65, "$3,100 a month"). Re-export before editing files.
   - Running Deals: `data/running-deals/running-deals.md` mirrors today's fixes.
6. **No new policy value is set here.** Every "New" value is from the change log, the Policy or the Library. A few rows give **derived** figures, marked "(derived)". These are knock-on numbers the change log did not print, computed here in Python (Decimal, half up) from F-CORE-49 or D-CORE-30 inputs. Recheck them in the module pass.
7. **Not changed today (do not "fix" these):** Maple Run purchase, as-is value, rehab, sizing ($340,000), LTARV 65.4%, flip profit $57,275 (14.3%), draws, interest, extension fee, 45-day-late cost ($1,968.75), taxes $520 (R-3), lender fees (R-4); Cedar Court $5,472,000 refinance, $443,273.69 exit cushion, Role 1 and Role 2 sizing, $25,700 extension fee; Birchwood sizing ($3,520,000; exit 1.36x; term loan $3,900,000; term rollover stress 1.26x), the what-if DSCR test ($3,446,475.69) and shortfall ($73,524.31).

## 1. Change register

"Old" is what the modules say today. "New" is the value or wording decided on 22 Nov 2026, or the reviewer's fix where the change log made no change.

| ID | Change | Old | New | Change log | Review driver |
| --- | --- | --- | --- | --- | --- |
| CH-01 | Accrual on MF and COM term notes | Schedule interest = rate ÷ 12; Birchwood balloon $3,066,702.23 (F-CORE-47) | **Decided.** Payment set on 30/360; interest accrues Actual/360; balloon by F-CORE-49. Birchwood, 120 payments from Jan 2029: month 1 interest $23,508.33, principal $4,056.06; balloon $3,118,446.42, $51,744.19 (1.7%) above F-CORE-47. Cedar Court, 120 payments from Apr 2029: $4,803,418.77. F-CORE-47 is exact only for DSCR loans | D29; F02; F47; F49 tests 1-2 | C3-acad C-1; C3-ind C-1 |
| CH-02 | Convention by product | "Every note bills Actual/360"; "one rule covers the book" | **Decided (CORE-PRC-06).** (1) RTL and all MF and COM bridges: interest-only, Actual/360 on the funded balance. (2) DSCR loans: payment and accrual 30/360, so they fully amortize. (3) MF and COM term notes: CH-01. (4) Tests still use the nominal rate (D-CONV-01). Option B would leave $42,293.30 on $500,000 at 7.000% over 360 months (F-CORE-49 test 3) | D29; F49 test 3 | C3-ind C-2 |
| CH-03 | Comparing two 7.000% quotes | "Our note is 7.000%, Actual/360 ... Ours costs 7.333%" | **Resolved by D29.** Term notes now accrue Actual/360, so 7.333% against the bank's 7.229% stands. Drop the reviewer's "would cost the same" qualifier. Under D31 the term lender is a third party, so say "a note that accrues Actual/360", not "our note" | D29; D31 | C3-acad C-1 fix 4 |
| CH-04 | What "earning 7.000%" means | Reinvestment of payments; "The same assumption sits inside every IRR" | **Decided.** The FV is a future-wealth measure, not what the 7.000% yield means. The IRR is the rate on money still invested; it does not assume reinvestment. Terminal wealth needs its own rate (MIRR) | F45; F48 | C3-acad M-1 |
| CH-05 | IRR with draws | "When flows change sign more than once, use NPV"; real pattern "yields more than 12%" | **Decided.** Cumulative-sign test (Norstrøm 1972): Maple Run's running total is negative to month 11 (−$307,224.99) and positive at month 12 ($35,679.18), so the IRR is unique: 1.0067% a month, 12.081% nominal, 12.772% effective. NPV at 1% a month is $222.37. Report NPV only if the running total changes sign more than once. XIRR: review only | F48 (test 3) | C3-acad M-2; C3-ind M-8 |
| CH-06 | Birchwood month-24 extension test | $3,520,000 × 8.25% = $290,400; 1.31x | **Decided.** SOFR 4.75% (D-CORE-27), note 8.75%: $3,520,000 × 8.75% = $308,000; $380,000 ÷ $308,000 = 1.23x ≥ 1.00x | COM | C3-acad M-3 |
| CH-07 | Cap-rate basis | C3: "7.23% cap rate ($434,000 ÷ $6,000,000)" | **Decided.** $480,000 ÷ $6,000,000 = 8.00% on NOI (F-CORE-13); in-place NOI yield $300,000 ÷ $4,400,000 = 6.82%. Call 7.23% the NCF yield. C0 and C5 already match | COM | C3-acad M-4 |
| CH-08 | Cap notional | Cap pays on the funded balance | **Decided (D-CORE-30).** Notional = full commitment. Cedar Court $5,140,000: month 10, 30 days, cap $3,212.50, net $32,337.50 (8.187% on $4,740,000); 31 days, cap $3,319.58, net $33,415.42. Birchwood $3,520,000: month 18, 30 days, cap $1,466.67, net $23,762.50 (8.241% on $3,460,000); 31 days, cap $1,515.56, net $24,554.58 | D30; MF; COM | C3-ind M-2; C3-acad m-5; R-10 |
| CH-09 | Extension cap cost and liquidity | "The borrower must also extend the cap"; "buys a cap extension" | **Decided (course assumption: quote at least intrinsic value).** Cedar Court month 24: floor $5,140,000 × 0.75% × 6 ÷ 12 = $19,275.00; strike test $520,000 ÷ ($5,140,000 × 9.00% = $462,600) = 1.12x; cash out $19,275 + $25,700 = $44,975; Marcus $930,000 → $885,025 ≥ $514,000 (CORE-BOR-12). Birchwood what-if: cap not required by COM-BR-02; if bought, floor $8,800.00; fee + cap $17,600; Dana $760,000 → $742,400 ≥ $352,000. No cap-reserve rule was added | MF; COM | C3-ind M-3; R-8 |
| CH-10 | Index floors | "written into some notes" | **Review only.** "Most bridge notes carry an index floor; our model policy does not (a training simplification)" | none | C3-ind M-4 |
| CH-11 | Dutch interest | Slip: "Billing interest on the commitment" | **Decided.** Dutch interest is a common market alternative; we do not use it and compare a Dutch quote on all-in cost (CORE-PRC-06(1); RES-FF-08 "non-Dutch interest"). Slip reads "... when the note charges the funded balance". Box figure: $500,000 of undrawn month-dollars × 10.25% ÷ 12 = $4,270.83 more on Maple Run over 12 months (30-day draw-table basis; reviewer's figure, rechecked) | D29; F02 | C3-ind M-1 |
| CH-12 | Cap as an option; all-in cost | "8.819%, ignoring any cap payouts" | **Review only.** Caplets; "8.819% if the cap never pays: an upper bound" | none | C3-acad M-6 |
| CH-13 | CPE projections | C0 2.0; C3 3.4 | **Review only.** C0 1.8 unless the recount reaches 10,341 words; C3 3.0 | none | C0-acad C-2; C3-acad M-7 |
| CH-14 | Constant versus rate key | "dividing by the rate gives a loan about 21% too large" | **Review only.** "...allows about 21% more loan; it matters only when DSCR binds" | none | C3-acad C-2 |
| CH-15 | Birchwood cash cost | "The borrower's real cash cost is the billed figure" ($239,227.08 at 8.25%) | **Review only.** Billed at 7.65%: $221,828.75, below the $235,950 test | none | C3-acad m-2 |
| CH-16 | Birchwood rollover | "$60,000" expiring within 24 months; 14.3%, no stress | **Decided.** $150,000 (largest tenant $90,000, lease ends month 20, plus $60,000) ÷ $420,000 = 35.7%: COM-GEN-08 stress applies at underwriting. Stressed exit NCF $434,000 − 15% × $150,000 = $411,500; ÷ $319,050.84 = 1.29x ≥ 1.20x (F-COM-09 on the bridge exit test, course reading) | COM | R-11 |
| CH-17 | Maple Run inputs | Market rent $3,100; lease $3,200; ARV $520,000 with no support; "Columbus, Ohio" | **Decided.** 1007 market rent $2,400; lease (month 11) $2,450, so the 1007 rent still binds; ARV $520,000 kept ($317 a sf), labelled a course assumption, 20% above the ZIP 43214 typical 3-bedroom value ($431,884); address Columbus, Ohio 43214, Clintonville area. Taxes $520 unchanged (R-3 not adopted). R-2's $470,000 what-if was not adopted | RES | R-1; R-2; R-3 |
| CH-18 | Take-out lenders | "Our term loan" repays Cedar Court and Birchwood; Maple Run "a DSCR loan"; committee approves the refinance | **Decided (D-CORE-31).** Cedar Court: third-party agency small-loan lender at month 27; 6.55% agency rate is the basis; Freddie SBL folded into Conventional Small. Birchwood: third-party regional bank at month 24; 7.00% = Treasury + 300 bp, inside the bank range to about 8.09%; CMBS non-recourse noted. Maple Run: third-party DSCR lender; 7.50% inside the 6.0-8.0% band (RES-DSCR-12). Our MF-TRM, COM-TRM and RES-DSCR rules size each take-out as a stand-in. The take-out lender approves; we approve payoff and release | D31; MF; COM; RES | C0-ind C-2; R-5 |
| CH-19 | Cushion basis | "the stabilized value could fall 40.2%" | **Decided.** Memo shows three cushions: day-one as-is 30.0%; stalled at month 10 ($4,740,000 funded) 23.5%; stabilized 40.2%. The reviewer's 26.6% cost-basis cushion was not adopted | MF | C0-ind C-1 |
| CH-20 | Cedar Court break-even and shortfall | "$253,677.46 short"; "cushion gone after ... 10.7%"; "pays down about $254,000" | **Decided.** Break-even NCF $515,539.84 at 7.05% (7.9% miss) and $525,957.91 at 7.25% (6.1% miss; 5.6% with the exit fee). The what-if is a 10.7% miss. Shortfall $5,165,700 − $4,886,322.54 = $279,377.46; paydown about $280,000 | MF | C0-acad M-5 |
| CH-21 to CH-32 | C0 framing and sources: supply pipeline (21), banks and transitional loans (22), non-bank regulators (23), consumer-law boundary (24), HVCRE (25), S&L history (26), risk-retention evidence (27), warehouse as repo (28), headline range method (29), meaning of [VERIFY] (30), combined-DSCR basis (31), SOFR gap (32) | As revision 1 | **Review only.** Wording as in revision 1 (section 2, C0 rows) | none | C0-acad M-1 to M-8, m-1, m-7; C0-ind M-3, M-5, M-8, m-1, m-2, m-5 |
| CH-33 | No-reserve calls | Birchwood 1.08x and Cedar Court 1.10x "so no interest reserve is needed" | **Partly decided.** Birchwood: policy result stands (COM-BR-04 needs none), but committee conditions approval on an interest reserve of ($235,950 − $164,000) × 4 ÷ 12 = $23,983.33, because without the $90,000 tenant coverage is $164,000 ÷ $235,950 = 0.70x. Cash to close after committee $1,735,200 + $23,983.33 = $1,759,183.33; the Role 1 draft term sheet stays $1,735,200. Cedar Court downtime test (R-7): **review only** | COM | R-12; R-7 |
| CH-34 | F-MF-12 library example | Note rate 8.000% | **Review only.** Label as a test case, or align to 7.65% | none | C3-acad m-10 |
| CH-35 | Partial IO life | "From month 25 the payment would be $27,564.39" | **Review only.** Say it is a 27-year total life | none | C3-ind m-5 |
| CH-36 | Lender fees | Points only | **Not changed** (R-4 explicitly left). Illustrative $1,295 fee case stays a review suggestion | none (listed as not changed) | C3-ind M-7; R-4 |
| CH-37 | LIBOR spread adjustment | "LIBOR, which included bank credit risk" | **Review only.** Credit risk and a term premium | none | C3-acad m-1 |
| CH-38 | Cedar Court capex | $800,000, no breakdown | **Review only** | none | R-6 |
| CH-39 | Secondary figures in scored items | Debt-fund 15%; HousingWire forecast | **Review only.** Drop from scored items | none | C0-acad C-1(5), m-9 |
| CH-40 (new) | Maple Run refinance outcome and exit | Refinance approved at $338,000; 1.02x; $9,000 to close; reserves $9,130; "liquidity covers it"; risk line "thin rental exit, mitigated by liquidity" | **Decided.** At $347,000 and 7.75%: PITIA $3,165.95; DSCR $2,400 ÷ $3,165.95 = 0.76x, fails. Max by DSCR $240,085 at 7.75% (46.2% LTV); $245,990 → $245,000 at 7.50% (47.1%; CORE-PRC-05); check P&I $1,713.08, PITIA $2,393.08, 1.00x (1.0029x). Gap $102,000 + reserves $7,179.24 = $109,179.24 against $89,738.33 liquidity (Sam $12,000): decline; the exit is the sale. Role 2: "Approve on the sale exit; the rental exit is a weakness, not a mitigant." Lease runs to month 23, past the 15 Jul 2028 final maturity, so the sale is tenant-in-place or by agreement | RES; PRC05 | R-1 |
| CH-41 (new) | Cap costs and strike wording | Cedar Court $60,000 "strike matches KBRA"; Birchwood $40,000 "cost illustrative" | **Decided.** Both costs labelled course assumptions (no cap quote opened). Strike "is consistent with" the KBRA CLO average, not "matches" | MF; COM | C0-acad sources (b) |
| CH-42 (new) | Cedar Court exit fee and payoff | Exit fee waived for "our term loan"; proceeds over payoff $332,000 | **Decided.** Third-party take-out, so the 0.50% fee is paid: $25,700; payoff $5,165,700; proceeds $5,472,000 − $5,165,700 = $306,300 | MF; D31 | R-5 |

### Reverse map: change-log entry to CH IDs

| Change-log entry | CH IDs |
| --- | --- |
| D-CORE-29, CORE-PRC-06, D-CONV-01, RES-FF-08 | CH-01, CH-02, CH-03, CH-11 |
| D-CORE-30, MF-BR-09, COM-BR-03 | CH-08 |
| D-CORE-31 | CH-03, CH-18, CH-42 |
| F-CORE-01, -02 wording | CH-01, CH-11 |
| F-CORE-45 step 5 | CH-04 |
| F-CORE-47 basis | CH-01 |
| F-CORE-48 edge case, interpretation, test 3 | CH-04, CH-05 |
| F-CORE-49 (new) | CH-01, CH-02 |
| CORE-PRC-05 example | CH-40 |
| RD-RES-01 rows | CH-17, CH-18, CH-40 |
| RD-MF-01 rows | CH-08, CH-09, CH-18, CH-19, CH-20, CH-41, CH-42 |
| RD-COM-01 rows | CH-06, CH-07, CH-08, CH-09, CH-16, CH-18, CH-33, CH-41 |
| Not changed (R-3 taxes, R-4 fees) | CH-17 (taxes), CH-36 |
| No change-log entry | CH-10, CH-12 to CH-15, CH-21 to CH-32, CH-34, CH-35, CH-37 to CH-39 |

## 2. Impact by module

Columns: location (section), a short quote, old value, new value or wording, and the driver (CH ID; change-log key, or "review").

### C0 Orientation and market (export = live, rev 143)

| # | Location | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| C0-01 | Facts table, Hours; Timing plan; Credit basis | "2.0 CPE credits projected"; "10,248 counted words ÷ 180" | 2.0 | 1.8, unless the recount reaches 10,341 words | CH-13; review |
| C0-02 | 1. Hook | "none fits a bank's standard loan" | Banks do not lend | "None fits a bank's standard term loan, and many banks will not lend on them quickly or at this leverage" | CH-22; review |
| C0-03 | T1, after the comparison table | "A BPL lender lends because the property does not work yet" | Banks avoid transition | M-1 replacement; bank collateral cell adds construction, land and some bridge loans | CH-22; review |
| C0-04 | T1, Governing law row | "most consumer rules do not apply" | No rule named | Add ECOA/Reg B and BSA/AML, with [VERIFY] | CH-24; review |
| C0-05 | T1, Worked example 1 table, exit-plan and deal-file rows | "then refinance into a term loan" (twice); "Month 27: term loan of $5,472,000 repays the bridge"; "Month 24: term loan of $3,900,000 repays the bridge" | Our term loans | "Month 27: a third-party agency small-loan lender lends $5,472,000 (MF-TRM as a stand-in) and repays the $5,165,700 payoff, including the $25,700 exit fee." "Month 24: a third-party regional bank lends $3,900,000 (COM-TRM as a stand-in; 7.00% = Treasury + 300 bp)" | CH-18, CH-42; D31, MF, COM |
| C0-06 | T1, Worked example 1 table | "Month 14: DSCR refinance approved at $338,000" | Approved | "Month 14: DSCR refinance requested and declined: 0.76x at $347,000 on $2,400 rent; at most $245,000. The exit is the sale" | CH-40; RES |
| C0-07 | T2, "Where each lender sits" | "No bank examiner. Its investors' agreements and its own funders set the limits" | Funders only | Add a "Main law or regulator" column and a life-insurer row | CH-23; review |
| C0-08 | T2, "Why banks and non-banks write different loans" | Three reasons only | No capital reason | Add the HVCRE paragraph | CH-25; review |
| C0-09 | T2, "two crises in one page" | "often on weak appraisals" | Single cause | M-7 replacement paragraph | CH-26; review |
| C0-10 | T2, "The 2008 crisis and the Dodd-Frank Act" | "has less reason to underwrite well" | Asserted | Add Keys et al. (2010) | CH-27; review |
| C0-11 | T2, Worked example 2, cushion step | "the stabilized value could fall 40.2% before the senior loan is impaired" | One cushion | Three cushions, as in the credit memo: day-one as-is 1 − $4,340,000 ÷ $6,200,000 = 30.0%; stalled at month 10, 1 − $4,740,000 ÷ $6,200,000 = 23.5%; stabilized 40.2% | CH-19; MF |
| C0-12 | T2, Worked example 2, F-MF-16 case | "$452,586.00 (30 years at 8.00%) plus mezzanine ADS $98,746.80 ... 1.02x" | Basis unlabeled | Add the MF-MEZ-02 amortizing-basis sentence; define ADS and DSCR | CH-31; review |
| C0-13 | T3, funding table, warehouse row | "a revolving credit line secured by the loans themselves" | Bank loan | "usually a repurchase facility" | CH-28; review |
| C0-14 | T3, "The whole-loan sale" | "When a buyer pays a good price" | Occasional sale | Add forward flow and the buyer's matrix | review (C0-ind M-2) |
| C0-15 | T3, risk retention; Worked example 4 | "the sponsor bears $17,000 ... Investors bear $323,000" | Vertical only | Keep; add the horizontal example | CH-27; review |
| C0-16 | T3, Worked example 4, "Refinance" step | "In month 14 the borrower refinances into a DSCR loan of $338,000 ... That repays the RTL loan. The DSCR loan is sized under our DSCR rules" | Refinance repays the bridge | "The plan was a third-party DSCR loan, sized here on RES-DSCR as a stand-in (D-CORE-31). At $2,400 rent it fails (0.76x; at most $245,000), so the sale repays the RTL loan" | CH-40, CH-18; RES, D31 |
| C0-17 | T3, Worked example 4, Mermaid node H | "Month 14: DSCR refinance $338,000 repays the RTL loan" | $338,000 | "Planned: third-party DSCR refinance. Actual: refinance fails; sale repays the RTL loan" | CH-40; RES |
| C0-18 | T3, Worked example 4, "Long-term pool"; node I | "The DSCR loan may go into a non-QM securitization" | No label | Now a "had it closed" step. Add: "non-QM" is a shelf label; DSCR business loans are outside ATR | CH-40; review (C0-ind m-4) |
| C0-19 | T3, securitization table | "such as KBRA" | One agency | KBRA, Morningstar DBRS, Fitch, Moody's, S&P | review (C0-ind m-6) |
| C0-20 | T3, "What a funder checks" | "Its 4.25% strike matches the KBRA CLO weighted average" | "matches" | "is consistent with"; the $60,000 cap cost is a course assumption | CH-41; MF |
| C0-21 | T4, "Reconciling to the headline" | "a few tenths of a point" | Rule of thumb | Range method | CH-29; review |
| C0-22 | T4, Worked example 5, row 6 | "$5.05 trillion still rounds to $5.0 trillion" | $5.0 trillion | $5.1 trillion; range 17.3%-17.7% | CH-29; review |
| C0-23 | T4, Worked example 5, SOFR row | "Overnight SOFR printed 3.91% ... 26 bp" | Market gap | Stale course input; check CME Term SOFR | CH-32; review |
| C0-24 | T4, market snapshot, debt-fund row | "About 15% of CRE loans ... primary data owner not found" | In Quiz B4 | Drop, or use a Z.1 or MBA share | CH-39; review |
| C0-25 | T5, "Two markets, not one" | "Rising interest rates usually push cap rates up" | Rates drive cap rates | Add the cap-rate identity; partial and lagged | review (C0-acad m-4) |
| C0-26 | T5, "Four indicators"; "Name the indicator that warns first" | "Vacancy warns first" | Four; vacancy first | Five, with supply pipeline first | CH-21; review |
| C0-27 | T5, deal table, Maple Run row | "The exit is a DSCR refinance sized on rent and rate. Its DSCR was already thin: 1.02x at $338,000"; indicator "Rental vacancy and DSCR loan rates" | Thin refinance | "The planned DSCR refinance fails: 0.76x at $347,000 on $2,400 market rent. The exit is the sale (14.3% margin)." Indicator to watch first: renovated sale prices in ZIP 43214 (suggested wording) | CH-40, CH-17; RES |
| C0-28 | T5, Worked example 6, opening | "Cedar Court is repaid by a term loan at month 27" | Our term loan | "...by a third-party agency small-loan lender at month 27" | CH-18; D31, MF |
| C0-29 | T5, Worked example 6, rate effect | "The term loan is still $5,472,000 and repays the bridge" | Repays $5,140,000 | "The take-out is still $5,472,000. It repays the $5,165,700 payoff (exit fee $25,700 paid) with $306,300 over" | CH-42; MF |
| C0-30 | T5, Worked example 6, cash-flow stress | "Shortfall: $5,140,000 − $4,886,322.54 = $253,677.46 ... cushion is gone after a drop in NCF of ... 10.7%" | $253,677.46; 10.7% | Shortfall $5,165,700 − $4,886,322.54 = $279,377.46. The cushion is gone at a 7.9% miss (7.05%) or 6.1% (7.25%; 5.6% with the exit fee): break-even NCF $515,539.84 and $525,957.91. The what-if is a 10.7% miss | CH-20; MF |
| C0-31 | T5, Worked example 6, "What the borrower can do" | "The borrower pays down about $254,000" | $254,000 | About $280,000 | CH-20; MF |
| C0-32 | T5, Worked example 6 | "That fits the hypersupply phase" | Cycle blamed | Add the systematic-versus-idiosyncratic check | review (C0-acad Pedagogy) |
| C0-33 | T5, Worked example 6; MF-BR-11 line | Constants 0.0802397 and 0.0818612 | Undefined terms | Define, or move to a "For later" box | review (C0-acad M-9) |
| C0-34 | T5, Birchwood cap rate | "$480,000 ÷ $6,000,000 = 0.080000 ... 8.00%" | 8.00% on NOI | No change; now matches the RD-COM-01 cap-rate row | CH-07; COM (aligned) |
| C0-35 | 5. Practice, Exercise 2, last step | "At month 27 our term loan of $5,472,000 repays the $5,140,000 bridge. Our MF-TRM rules apply" | Our term loan | "A third-party agency small-loan lender's $5,472,000 loan repays the $5,165,700 payoff. Its box applies; our MF-TRM rules stand in for it. It approves the loan; we approve the payoff and release" | CH-18, CH-42; D31, MF |
| C0-36 | 5. Practice, item 5 model answer | Answer keyed to vacancy | Vacancy | "construction pipeline and submarket vacancy" | CH-21; review |
| C0-37 | 6. Quiz Set B item 7 | "a legal point awaiting compliance confirmation" | Old definition | T6 definition | CH-30; review |
| C0-38 | 6. Quiz Set B item 4 | Debt-fund 15% stem | Secondary | Remove from scored items | CH-39; review |
| C0-39 | 6. Quiz Set B item 3 | "(T3; C7)" for fraud | Wrong chunk | T5 | review (C0-ind M-8) |
| C0-40 | 8. Job aid, item 6 | "A [VERIFY] tag marks a legal point that compliance has not yet confirmed" | Old definition | C-1 fix (3) wording | CH-30; review |
| C0-41 | Self-check, item 3 | Builds on the HousingWire forecast | Secondary | KBRA share $3.5 billion ÷ $4.8 billion = 72.9% | CH-39; review |
| C0-42 | Self-check, item 4 | CORE-SVC-07 rating drill | Rating drill | Lookup drill | review (C0-acad C-1(d)) |
| C0-43 | Self-review row | "checked 20 Nov 2026" | 20 Nov | 22 Nov dates | review (C0-ind M-8) |
| C0-44 | Objectives, O6; LD-02 claim | "Four of the six objectives are at Apply or above" | 4 of 6 | "Determine ..." rewrite; 3 of 6 as written | review (C0-acad M-10) |

### C1 Business purpose (live rev 161; export stale)

| # | Location | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| C1-01 | Header banner | "Legal statements are [VERIFY] until compliance counsel confirms them" | Old definition | C0 T6 definition (authority, where read, date) | CH-30; review |
| C1-02 | T2, "Each new obligation gets its own test" | "Maple Run's month-14 DSCR ... refinance is a new loan. It gets a new purpose test" | Refinance happens | "...would be a new loan with a new purpose test". The month-14 request is declined | CH-40; RES |
| C1-03 | T2, what-if C | "not the $338,000 rate-term loan that Running Deals approves" | Approved | "Running Deals declines the rate-term refinance: at $2,400 rent the most is $245,000, against $347,000." What-if C stays a labelled purpose what-if | CH-40; RES |
| C1-04 | T4, Worked example 4 (HMDA), inputs | "Month-14 loan: $338,000 DSCR refinance to the same borrower, paying off the bridge" | $338,000, same lender implied | The planned month-14 loan is a third-party DSCR lender's loan (D-CORE-31), and it is declined. The exit plan of record still reads "refinance into a DSCR loan; back-up sale", so the bridge stays "designed to be replaced by permanent financing" [VERIFY: 12 CFR 1003.3(c)(3) and comment 3(c)(3)-1 on permanent financing from a different lender; not yet checked]. Owner question: Role 2 now says "Approve on the sale exit". If the memo's exit plan becomes the sale, the lesson's own flip what-if ("Suppose Harborline planned to sell at the $520,000 ARV") becomes the real case and the bridge is a reportable home purchase loan for a covered lender | CH-40, CH-18; RES, D31 |
| C1-05 | T4, Worked example 5 (count to 25) | "The $338,000 Maple Run refinance, which closes in month 14, would not be reported"; "The Maple Run refinance goes on the register" | Our refinance | The refinance does not close. Had it closed, the third-party lender, not us, would test its own coverage and report. Recast as a fictional refinance | CH-40, CH-18; RES, D31 |
| C1-06 | T6, Worked example 9 (purpose file), inputs | "market rent $3,100 a month. Lease signed in month 11 at $3,200 a month" | $3,100; $3,200 | $2,400; $2,450 | CH-17; RES |
| C1-07 | T6, Worked example 9, substitution | "$3,200 ÷ $3,100 = 1.032, so the rent is 103.2% of market"; "the month-14 refinance at $338,000 pays out no cash" | 103.2%; $338,000 | $2,450 ÷ $2,400 = 1.020833, or 102.1% of market. "The month-14 request is a rate-term refinance of $347,000 with no cash out, and it is declined on DSCR" | CH-17, CH-40; RES |
| C1-08 | T7, Worked example 10 | "Running Deals approves a $338,000 rate-and-term refinance in month 14, with no cash out" | Approved | "Running Deals sizes the rate-term refinance and declines it." Continue what-if C as a labelled what-if | CH-40; RES |
| C1-09 | 7. OJT step 3 | "Add the HMDA answer for the month-14 refinance (T4)" | Our refinance | "...for the planned third-party refinance" | CH-18, CH-40; D31 |
| C1-10 | 7. OJT rubric, "Law map" | "bridge excluded as temporary financing; month-14 refinance covered if the lender is covered" | Our coverage | Bridge answer per C1-04. "A month-14 refinance by a third-party lender is that lender's HMDA question" | CH-18; D31 |
| C1-11 | 8. Job aid, mini-example | "the bridge is temporary financing for HMDA" | Excluded | Stands while the exit plan of record is the refinance; recheck against C1-04 | CH-40; RES |
| C1-12 | Self-check, item 2 | "like Maple Run's later DSCR refinance" | Refinance closes | "like a DSCR refinance of a rental house" (Maple Run's is declined) | CH-40; RES |

### C2 Credit fundamentals (live rev 100; export stale)

| # | Location | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| C2-01 | T1, "Why loans fail, and the two ways out" | "Its exit is a refinance into a term loan ... take-out loan of $5,583,273.69, which is $443,273.69 more than the $5,140,000 bridge" | Our term loan | "...a refinance with a third-party agency small-loan lender". $443,273.69 stays; add that the payoff includes the $25,700 exit fee | CH-18, CH-42; D31, MF |
| C2-02 | T1, same passage | "$4,886,322.54, which is $253,677.46 short of the payoff"; "income came in about 11% below plan" | $253,677.46; 11% | $279,377.46 short of the $5,165,700 payoff. The miss is 10.7%; the cushion was gone at 6.1% (7.25%; 5.6% with the exit fee) | CH-20; MF |
| C2-03 | T1, exit-as-a-sentence | "The house sells for about $520,000 within the term" | ARV unsupported | Value unchanged; label it a course assumption that needs renovated comparables (ZIP 43214 typical 3-bedroom value $431,884) | CH-17; RES |
| C2-04 | T1, repayment table, term-loan row | "Monthly net cash flow, then a refinance or sale of the balloon" | Balloon on rate ÷ 12 | Balloon is F-CORE-49 on MF and COM term notes (Actual/360 accrual) | CH-01; D29, F49 |
| C2-05 | Worked example 1 (two ways out) table | "Market rent $3,100; refinance DSCR 0.98x at $347,000 (Role 2)" | $3,100; 0.98x | "Market rent $2,400; refinance DSCR 0.76x at $347,000 (Role 2); at most $245,000 at 1.00x." Flip profit $57,275 (14.3%) unchanged. Lesson: "the flip-to-rent works only as a flip" | CH-17, CH-40; RES |
| C2-06 | Worked example 2 (five Cs), Capacity row | "Plan A: lease near $3,100 a month and refinance; DSCR 0.98x. Plan B: sell at $520,000" | $3,100; 0.98x | "Plan A: lease at $2,450 (1007 rent $2,400) and refinance; DSCR 0.76x, fails. Plan B: sell at $520,000; profit 14.3% of cost (RES-FF-10)" | CH-17, CH-40; RES |
| C2-07 | Worked example 2, judgment cell | "Rests on the sale exit. The refinance is thin" | Thin | "Rests on the sale exit. The refinance fails" | CH-40; RES |
| C2-08 | Worked example 3 (Tier 2 box) | LTARV $340,000 ÷ $520,000 = 65.4% | Passes | No change. R-2's $470,000 what-if was not adopted | CH-17; RES (aligned) |
| C2-09 | Worked example 4 (Cedar Court box) | "As-stabilized value $8,600,000" | Cushion not shown | Add the memo's three cushions: 30.0% day-one, 23.5% stalled at month 10, 40.2% stabilized. T3's "70% of as-is value survives a fall of up to 30%" already matches | CH-19; MF |
| C2-10 | T5, fourth handoff | "The underwriter knew Maple Run's refinance exit was thin (T1)" | Thin | "...knew the refinance exit fails at $2,400 rent (T1)" | CH-40; RES |
| C2-11 | Worked example 6 (dated timeline) | "Lease signed at $3,200 a month; copy due in 10 business days" | $3,200 | $2,450 | CH-17; RES |
| C2-12 | Worked example 6 / OJT step, timeline | "refinance request month 14 as a new loan" | Request only | "...refinance request month 14; declined (0.76x); exit is the sale" | CH-40; RES |
| C2-13 | T7 / Worked example 7, Conditions | "Columbus rental market" | City only | "Columbus, ZIP 43214 (Clintonville)" | CH-17; RES |
| C2-14 | 5. Practice (O3), Birchwood sources of repayment | "Its $254,000 covers bridge interest of $235,950 by 1.08x, but it repays no principal" | No reserve | Add: committee conditions approval on an interest reserve of $23,983.33 (0.70x without the $90,000 tenant). Call $235,950 "test interest" (billed at 7.65% is $221,828.75, review only). Add the rollover line: 35.7%, stressed exit DSCR 1.29x | CH-33, CH-16, CH-15; COM |
| C2-15 | 5. Practice (O5), Cedar Court stage map | "Month 27: refinance into our term loan; stage 7. ... It goes to committee because it is above $2,000,000" | Our term loan; committee | "Month 27: a third-party agency small-loan lender refinances; stage 7. That lender approves its loan; we approve the $5,165,700 payoff and the release" | CH-18, CH-42; D31, MF |
| C2-16 | 5. Practice, Cedar Court extension fee | "$25,700. The tests come first: no default, capex 100% complete, and the cap extended" | Cap extension costless | Add: cap extension at least the intrinsic floor $19,275 (course assumption); strike test 1.12x; cash out $44,975; Marcus $885,025 ≥ $514,000 (CORE-BOR-12) | CH-09; MF |
| C2-17 | 5. Practice (O6), Birchwood month-9 rating | "will not renew when its lease ends in month 20" | Rollover $60,000 implied | Rating answer stands (2, Pass/Watch). Add that this lease was already inside the 24-month rollover at underwriting ($150,000; 35.7%) | CH-16; COM |
| C2-18 | 5. Practice (O7), screening and incentives, item (a) | "Cash to close of $1,735,200" | $1,735,200 | Say which figure: draft term sheet $1,735,200; after the committee reserve $1,759,183.33 | CH-33; COM |
| C2-19 | 7. OJT rubric, "Ways out" | "sale at the $520,000 ARV (profit 14.3% of cost, RES-FF-10) and the DSCR refinance (0.98x, thin)" | 0.98x | "Primary: the sale at the $520,000 ARV (14.3%). The DSCR refinance fails (0.76x; a $102,000 gap)" | CH-40; RES |
| C2-20 | 8. Job aid, mini-example | "Exits are a sale at $520,000 and a thin refinance" | Thin | "The exit is a sale at $520,000; the refinance fails" | CH-40; RES |
| C2-21 | 6. Quiz Set B | "(O1) Maple Run's ARV? Answer: $520,000" | $520,000 | No change in value. The item stays a v0 open-answer item until Phase 3 | CH-17; RES (aligned) |
| C2-22 | Header banner | "Legal statements are [VERIFY] until compliance counsel confirms them" | Old definition | C0 T6 definition | CH-30; review |

### C3 Real estate finance math (export = live, rev 209)

| # | Location | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| C3-01 | Facts table, Hours | "Blueprint projection 3.4 CPE credits" | 3.4 | 3.0 | CH-13; review |
| C3-02 | T1, "How our model policy applies it" | "Every note bills Actual/360 (F-CORE-01)"; "never the undrawn commitment (RES-FF-08; MF-BR-10)" | All notes | "Bridges, and MF and COM term notes, accrue Actual/360; DSCR loans accrue 30/360 (CORE-PRC-06)." Add "(non-Dutch interest)" after RES-FF-08 | CH-02; D29 |
| C3-03 | T1, market practice | "Maple Run's fixed rate uses it too, so one rule covers the book" | One rule | Product split per CORE-PRC-06 | CH-02; D29 |
| C3-04 | T1, Common slips | "It is right only for a 30-day month under 30/360, which our notes do not use" | Never 30/360 | "...which our bridge notes do not use. DSCR loans do (CORE-PRC-06)" | CH-02; D29 |
| C3-05 | T1, Common slips | "Billing interest on the commitment. Maple Run's commitment is $340,000" | A slip | "...when the note charges the funded balance (RES-FF-08)." Add a Dutch box: market alternative, compared on all-in cost; about $4,270.83 more on Maple Run over 12 months | CH-11; D29, F02 |
| C3-06 | Worked example 2 (payoff) | "The DSCR ... refinance in Role 3 happens in month 14. Place the payoff on 15 Mar 2028 as a what-if date" | Refinance pays off | The refinance is declined; the payoff comes from the sale. Keep the what-if date; change the source of the payoff | CH-40; RES |
| C3-07 | T2, Worked example 3 and "What compounding assumes" | "The lender who reinvests every payment ... That equality is what 'earning 7.000%' means"; "The same assumption sits inside every IRR" | Reinvestment | F-CORE-45 step 5: $22,329,132.07 is what the payments would grow to; a future-wealth measure, not what the 7.000% yield means. F-CORE-48: IRR does not assume reinvestment | CH-04; F45, F48 |
| C3-08 | T2, "Comparing two quotes" | "Our note is 7.000%, Actual/360 ... Ours costs ... 7.333%" | 7.333% | Keep 7.333% (now the CORE-PRC-06 term-note basis). Say "a 7.000% note that accrues Actual/360", because the term lender is a third party (D31) | CH-03; D29, D31 |
| C3-09 | T2, "When to use which rate" | "To build a payment or schedule, use the nominal rate ÷ 12" | ÷ 12 always | "Payment: rate ÷ 12 on every product (30/360). Schedule interest: by product; Actual/360 on MF and COM term notes (F-CORE-49)" | CH-01; D29, F02 |
| C3-10 | T2, "How our model policy applies it" | "Payments use a 12-period year (F-CORE-02). Bills use Actual/360 (F-CORE-01)" | One billing basis | "Bills follow CORE-PRC-06: Actual/360, except DSCR loans (30/360)" | CH-02; D29 |
| C3-11 | T3, "The payment (F-CORE-02)" | "The formula uses 12 equal months by market convention, not Actual/360" | Model = market | "Every product sets the payment on 12 equal months; accrual then follows the note (CORE-PRC-06)" | CH-01; F02 |
| C3-12 | Worked example 6, schedule | Month 1 "$22,750.00 / $4,814.39 / $3,895,185.61"; months 2-3; month 120 "$17,945.21 / $9,619.18 / $3,066,702.27"; "Principal rises by about $28 a month" | Rate ÷ 12 rows | F-CORE-49, first accrual month Jan 2029 (what-if, as test 1): month 1 $23,508.33 / $4,056.06 / $3,895,943.94; month 2 $21,211.25 / $6,353.14 / $3,889,590.80; month 3 $23,445.59 / $4,118.80 / $3,885,472.00; month 120 (31 days) $18,849.83 / $8,714.56 / $3,118,446.42 (derived). Principal now moves with the days in the month | CH-01; F49 |
| C3-13 | Worked example 6, after the table | "In month 1, principal is 17.5% ... By month 120 it is 34.9%"; "Only $833,297.73 ... repaid principal; the other $2,474,429.07 was interest" | 30/360 shares | 14.7% and 31.6%; principal $781,553.58, interest $2,526,173.22 of the same $3,307,726.80 (derived) | CH-01; F49 |
| C3-14 | T3, year-end balance table and text | Years 1, 5, 10, 15, 20, 25: $3,840,337.26; $3,555,323.85; $3,066,702.23; $2,374,019.89; $1,392,055.90; −$1.06. "principal first exceeds interest in month 182"; "Half ... after about 17 years" | F-CORE-47 | Keep F-CORE-47 as the payment-schedule balance, or switch to F-CORE-49 (Jan 2029 start, derived): $3,844,174.65 (98.6%); $3,577,647.68 (91.7%); $3,118,446.42 (80.0%); $2,464,272.76 (63.2%); $1,532,671.61 (39.3%); $204,756.03 left after 300 payments. Crossover month 189; half owed after 216 payments (18 years). The month-300 figure shows why only DSCR loans accrue 30/360 | CH-01; F47, F49 |
| C3-15 | T3, "Our standard is F-CORE-47" | "Our standard is F-CORE-47, with P rounded to the cent first" | F-CORE-47 | "F-CORE-47 for DSCR loans; F-CORE-49 for MF and COM term notes" | CH-01; F47, F49 |
| C3-16 | Worked example 7 (Birchwood balloon) | "Balance after 120 payments = ... $3,066,702.23 ... 78.6% of the original loan" | $3,066,702.23 | Real balloon $3,118,446.42 (80.0%) by F-CORE-49; F-CORE-47's $3,066,702.23 is $51,744.19 lower. Running Deals still sets no term, so the 120-month term stays a what-if | CH-01; F49 test 1 |
| C3-17 | T3, term table (5, 7, 10 years) | "$3,555,323.85 ... $3,380,050.79 ... $3,066,702.23" | F-CORE-47 | $3,577,647.68 (91.7%); $3,412,896.13 (87.5%); $3,118,446.42 (80.0%) (derived; Jan 2029 start) | CH-01; F49 |
| C3-18 | T3, amortization table | 20 years $2,604,172.90; 25 years $3,066,702.23; 30 years $3,346,682.49; "It costs $279,980.26 more balloon" | F-CORE-47 | $2,653,258.28; $3,118,446.42; $3,400,036.14; 30 years costs $281,589.72 more (derived). Payments and ADS unchanged | CH-01; F49 |
| C3-19 | T3, refinance table | "Refinance $3,066,702.23 amortized balloon: DSCR" 1.67x / 1.53x / 1.41x | On $3,066,702.23 | On $3,118,446.42: 1.64x / 1.50x / 1.38x at 7% / 8% / 9% (derived). Still passes 1.30x at 9.00%. IO column unchanged | CH-01; F49 |
| C3-20 | T3, value test | "51.1% of today's $6,000,000"; "$3,066,702.23 ÷ 65% = $4,718,003.43 ... could fall 21.4%" | 21.4% | 52.0%; $3,118,446.42 ÷ 65% = $4,797,609.88; could fall 20.0% | CH-01; F49 |
| C3-21 | T3, Common slips | "Applying Actual/360 to schedule interest. Schedules use rate ÷ 12, the F-CORE-02 convention" | A slip | Reverse it: "Using F-CORE-47 or rate ÷ 12 interest on an MF or COM term note; use F-CORE-49." Add F-CORE-02's "Setting the payment on actual days" | CH-01; F02, F49 |
| C3-22 | Worked example 8 | "Birchwood's 8.481% constant against a 7.23% cap rate ($434,000 ÷ $6,000,000)" | 7.23% | "...against an 8.00% cap rate on NOI; 7.23% is the NCF yield" | CH-07; COM |
| C3-23 | Worked example 8 | "the 'about 21% more debt' warning applies only when DSCR is the binding test" | Correct | No change; the quiz key must match (C3-50) | CH-14 (aligned) |
| C3-24 | T4, "Test basis versus billed basis (D-CONV-01)" | "Credit tests use the nominal annual rate. Bills use Actual/360" | One billing basis | "Bills follow CORE-PRC-06" (D-CONV-01's new billing cell) | CH-02; D29 |
| C3-25 | Worked example 9, result | "$254,000 ÷ $235,950 = 1.08x, so no interest reserve is needed (COM-BR-04)" | No reserve | "COM-BR-04 needs none. Committee conditions approval on an interest reserve of ($235,950 − $164,000) × 4 ÷ 12 = $23,983.33, because the largest tenant's exit leaves 0.70x" | CH-33; COM |
| C3-26 | Worked example 9, table note | "The borrower's real cash cost is the billed figure" ($239,227.08) | 8.25% billed | At 7.65% billed: $221,828.75 | CH-15; review |
| C3-27 | Worked example 10, IO table | Fully amortizing "$3,307,726.80 / $3,066,702.23"; 2 years IO "$3,192,181.44 / $3,282,800.88"; "saves $115,545.36 ... $216,098.65 more owing" | Rate ÷ 12 | Actual/360 on both legs, Jan 2029 start (derived): $3,307,726.80 / $3,118,446.42; $3,199,764.72 / $3,322,396.07; saves $107,962.08; $203,949.65 more owing. Add the 27-year total-life note | CH-01, CH-35; F49 |
| C3-28 | Worked example 11 (Cedar Court at closing) | "Coverage ... 1.10x ... so no interest reserve is needed (MF-BR-07)" | No downtime | Add the downtime test | CH-33; review (R-7) |
| C3-29 | T5, "Spreads and floors" | "An index floor ... written into some notes" | Some notes | Most bridge notes | CH-10; review |
| C3-30 | T5, "Index plus spread" | "pays the lender for credit risk, costs and profit" | Undecomposed | Spread-parts paragraph | review (C3-acad M-9) |
| C3-31 | T5, "Rate caps" | "the cap pays the difference on the notional amount, Actual/360" | No notional stated | "...on the notional, which our policy sets at the full commitment for the cap's term (D-CORE-30)." Add caplets (review) | CH-08, CH-12; D30 |
| C3-32 | Worked example 12, formula and substitution | "cap payment = funded balance × (SOFR − strike)"; "Cap pays $4,740,000 × 0.75% ÷ 360 × 30 = $2,962.50" | Funded balance | "cap payment = notional × ..."; $5,140,000 × 0.75% ÷ 360 × 30 = $3,212.50 | CH-08; D30, MF |
| C3-33 | Worked example 12, result | "a net $32,587.50. That is exactly 8.25% on $4,740,000"; "the borrower's net cost stays at 8.25%" | 8.25% | Net $35,550.00 − $3,212.50 = $32,337.50, or 8.187% on $4,740,000 funded. Add the 31-day month: interest $36,735.00, cap $3,319.58, net $33,415.42. The net cost is below strike + spread while the notional exceeds the funded balance | CH-08; MF |
| C3-34 | Worked example 12, "What the cap protects" table | "Borrower's net rate with the 4.25% cap": 8.25% at SOFR 5.00% and 6.00%; "coverage on that cost stays at 1.10x" | Funded-balance cap | On a $5,140,000 notional and $4,340,000 funded: 8.112% and 7.927%; coverage on that cost 1.12x and 1.15x (derived). Rows at 3.65% and 4.25% unchanged | CH-08; D30 |
| C3-35 | T5, extension test | "$3,520,000 × 8.25% = $290,400.00 ... 1.31x" | 8.25%; 1.31x | $3,520,000 × 8.75% = $308,000.00; $380,000 ÷ $308,000 = 1.23x ≥ 1.00x | CH-06; COM |
| C3-36 | T5, extension test | "The borrower must also extend the cap, because the worst-case rate exists only while the cap runs" | Required, no cost | COM-BR-02 does not require it. If bought: intrinsic floor $3,520,000 × 0.50% × 6 ÷ 12 = $8,800.00 (course assumption); fee + cap $17,600; Dana $760,000 → $742,400 ≥ $352,000 | CH-09; COM |
| C3-37 | T5, Common slips | "Forgetting that the cap pays on the notional, which may differ from the funded balance" | Contradicted WE12 | Consistent now: notional = full commitment (D-CORE-30) | CH-08; D30 |
| C3-38 | T5, History | "LIBOR, which included bank credit risk" | Credit risk only | m-1 wording | CH-37; review |
| C3-39 | T6, "IRR and NPV answer the same question two ways" | "When flows change sign more than once, use NPV; it always has one answer" | Abandon IRR | "Add the flows period by period. If the running total changes sign once, the IRR is unique (F-CORE-48). Otherwise report NPV at a stated rate" | CH-05; F48 |
| C3-40 | Worked example 13, "Funding pattern" | "Those flows change sign several times, so F-CORE-48 says to report NPV ... The real pattern yields more than 12%" | No IRR | Running total −$307,224.99 at month 11, +$35,679.18 at month 12: unique IRR 1.0067% a month, 12.081% nominal, 12.772% effective. NPV at 1% $222.37 stays. XIRR line: review only | CH-05; F48 test 3 |
| C3-41 | T6, "How to analyze a pricing quote", step 2 | "or the NPV at a stated rate if the signs change more than once" | Sign changes | "...if the running total changes sign more than once" | CH-05; F48 |
| C3-42 | Worked example 13, exit fee | "a 0.50% exit fee ($25,700), waived if the loan refinances into our term loan"; "So the waiver gives up about 0.23 points of yield to keep the borrower for the term loan" | Waived | The take-out is third party, so the fee is paid: base-case IRR 8.425%, screen 8.40%. Drop the waiver sentence, or recast 8.194% as a "fee waived" what-if | CH-42, CH-18; D31, MF |
| C3-43 | Worked example 13, all-in cost | "Cedar Court's cap cost $60,000 and Birchwood's $40,000 (Running Deals)"; "Costs caused by the loan, such as the cap, go in" | Facts | Both labelled course assumptions. Cap payouts reduce cost (review). Fees row: review only (R-4 not changed) | CH-41, CH-12, CH-36; MF, COM |
| C3-44 | Practice, Problems 4-9 | "Cedar Court's term loan is $5,472,000 at 7.250%" | Our term loan | "The take-out lender's loan, sized on MF-TRM as a stand-in; 7.25% is 0.70% above the 6.55% agency quote." Numbers stand | CH-18; D31, MF |
| C3-45 | Practice, Problem 5 | "Interest $5,472,000 × 7.25% ÷ 12 = $33,060.00" | Rate ÷ 12 | Actual/360 (CORE-PRC-06(3)). With an April 2029 first month (30 days, F-CORE-49 test 2): $5,472,000 × 7.25% ÷ 360 × 30 = $33,060.00, the same figure by a different formula. A 31-day month gives $34,162.00 (derived). State the month | CH-01; F49 test 2 |
| C3-46 | Practice, Problem 6 | "Balloon ... $4,722,901.67, which is 86.3% ... Birchwood's 25-year loan (78.6%)" | F-CORE-47 | $4,803,418.77 (87.8%), F-CORE-49 test 2 from Apr 2029; Birchwood 80.0% | CH-01; F49 tests 1-2 |
| C3-47 | Practice, Problem 10 | "Cap $3,460,000 × 0.50% ÷ 360 × 30 = $1,441.67 ... $23,787.50, which is 8.25%" | Funded balance | Cap $3,520,000 × 0.50% ÷ 360 × 30 = $1,466.67; net $23,762.50, or 8.241% on $3,460,000 | CH-08; D30, COM |
| C3-48 | Practice, Problem 11, result | "though the cap holds the borrower's net cost at 8.25%" | 8.25% | "...holds the net cost at 8.241% on the funded balance in a 30-day month" | CH-08; COM |
| C3-49 | Practice, Problem 12 | "$40,000 cap premium"; "8.819%, ignoring any cap payouts" | Fact; point cost | $40,000 is a course assumption. "8.819% if the cap never pays: an upper bound" (review) | CH-41, CH-12; COM |
| C3-50 | 6. Quiz Set B, key 8 | "dividing by the rate gives a loan about 21% too large" | Contradicts T4 | CH-14 wording | CH-14; review |
| C3-51 | 6. Quiz Set A, D-CONV-01 item and key | "B) Tests use the nominal rate; bills use Actual/360" | One billing basis | D-CONV-01 now says billing follows the product (Actual/360 on bridge and MF and COM term notes; 30/360 on DSCR loans). Reword option B to match | CH-02; D29 |
| C3-52 | Practice, Problem 3 | "coverage uses the nominal rate, here the 8.25% test rate" | Two rules merged | m-8 wording | review (C3-acad m-8) |
| C3-53 | 8. Job aid, schedule row | "Schedule row: interest = opening × rate ÷ 12" | ÷ 12 | "Interest: balance × rate ÷ 360 × days on MF and COM term notes; ÷ 12 on DSCR loans (CORE-PRC-06)" | CH-01, CH-02; D29 |
| C3-54 | 8. Job aid, balloon row | "Balloon (F-CORE-47) ... Excel: =FV(rate/12, k, P, −loan)" | F-CORE-47 | F-CORE-49 for MF and COM term notes (row-by-row sheet with actual days); FV for DSCR loans | CH-01; F47, F49 |
| C3-55 | 8. Job aid, floating-rate row | "Cap pays balance × (SOFR − strike) ÷ 360 × days" | Balance | "Cap pays notional (full commitment) × ..." | CH-08; D30 |
| C3-56 | 8. Job aid, yield row | "solve NPV = 0 ... =IRR(range)*12" | No uniqueness check | Add the cumulative-sign test | CH-05; F48 |
| C3-57 | Self-check; How to check it | "=FV(7%/12,120,27564.39,-3900000) should return about 3,066,702.23, the Birchwood what-if balloon"; "=IRR(range)*12 should return about 11.848%" | One basis; simplified IRR | FV gives the payment-schedule balance only; the real balloon is $3,118,446.42. Add the draw-pattern check: −234,900, then the 12 Role 3 flows, =IRR(range)*12 ≈ 12.081% | CH-01, CH-05; F49, F48 |

### C4 Cash flow underwriting (live rev 101; export stale)

| # | Location | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| C4-01 | Worked example 14 (Birchwood rollover), inputs and substitution | "In place: $60,000 of $420,000 expires within 24 months ... 14.3%, under the 15% trigger" | $60,000; 14.3% | $150,000 ($90,000 largest tenant ending month 20, plus $60,000) ÷ $420,000 = 35.7%, over the trigger. Stressed exit NCF $434,000 − 15% × $150,000 = $411,500; ÷ $319,050.84 = 1.29x ≥ 1.20x. Term-loan line unchanged: 20.0%, 1.26x | CH-16; COM |
| C4-02 | Worked example 14, result | "No rollover stress applies in place" | No stress | "Rollover stress applies at underwriting, on the bridge's exit test (course reading of COM-GEN-08): 1.29x passes" | CH-16; COM |
| C4-03 | 5. Practice (T6), model answer (a) | "Coverage = $254,000 ÷ $235,950 = 1.0765, or 1.08x. It is above 1.00x, so no interest reserve is needed (COM-BR-03; COM-BR-04)" | No reserve | Policy result stands. Add the committee condition: reserve ($235,950 − $164,000) × 4 ÷ 12 = $23,983.33, built on (c)'s 0.70x | CH-33; COM |
| C4-04 | 5. Practice (T6), model answer (d) | "Rollover is 14.3%, under the 15% trigger (COM-GEN-08)" | 14.3% | "Rollover is 35.7%, over the 15% trigger; the stressed exit DSCR is 1.29x (COM-GEN-08; F-COM-09)" | CH-16; COM |
| C4-05 | Worked example 11 (Cedar Court in-place) | "In-place coverage is 1.10x on NCF ... no interest reserve is needed (MF-BR-07)" | No downtime | Add a downtime-adjusted low point | CH-33; review (R-7) |
| C4-06 | 7. OJT table, "In-place coverage" | "1.10x (1.1032)"; "$395,000 ÷ $358,050; at least 1.00x, so no interest reserve" | No downtime | As C4-05 | CH-33; review (R-7) |
| C4-07 | Worked example 5 (Cedar Court comps) | "$1,521.05 a month per unit, 17.0% above the $1,300 market rent" | Rent premium only | Tie to a per-unit capex breakdown | CH-38; review (R-6) |
| C4-08 | T5, DSCR table, residential row | "PITIA: 1.00x; 1.10x for cash-out" | Basis unstated | "DSCR loans pay and accrue 30/360 (CORE-PRC-06), so PITIA uses the rate ÷ 12 payment" | CH-02; D29 |
| C4-09 | T5, "The test rate" | "Tests use the nominal annual rate, not the Actual/360 billing figure (D-CONV-01)" | One billing basis | "...not the billed figure; billing follows CORE-PRC-06" | CH-02; D29 |
| C4-10 | Facts table, Hours | "Projected 3.0 to 3.2 CPE credits" | Range | Recount under the amended rule | CH-13; review |

### C5 Valuation (live rev 188; export stale)

| # | Location | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| C5-01 | T2, direct capitalization | "the NOI cap rate is 8.00%. The NCF cap rate is $434,000 ÷ $6,000,000 = 7.23%" | Both labeled | No change; matches RD-COM-01 | CH-07; COM (aligned) |
| C5-02 | T2, "Three cap rates on one deal" | In-place "6.82%"; stabilized "8.00%" | Labeled | No change; matches RD-COM-01's in-place NOI yield $300,000 ÷ $4,400,000 = 6.82% | CH-07; COM (aligned) |
| C5-03 | Worked example 11 (Birchwood term loan) | "The 8.00% cap rate is below the 8.4814% constant" | 8.00% | No change | CH-07 (aligned) |
| C5-04 | Worked example 12 (binding test) | "Birchwood's NCF cap rate = $434,000 ÷ $6,000,000 = 7.2333%" | NCF labeled | No change | CH-07 (aligned) |
| C5-05 | T6, leverage, "Birchwood's rate is 7.00%" | "Birchwood's rate is 7.00% and its cap rate is 8.00%" | Our term loan rate | Label: the third-party bank's rate, Treasury + 300 bp, inside the bank range to about 8.09% (Policy COM Part 1E) | CH-18; D31, COM |
| C5-06 | T3, sales comparison | "the Form 1007 market rent of $3,100 a month supports the refinance (RD-RES-01)" | Supports | "the Form 1007 market rent of $2,400 a month does not support the refinance: 0.76x at $347,000" | CH-17, CH-40; RES |
| C5-07 | T3, units-of-comparison table | "Maple Run ARV: $520,000 ÷ 1,640 sf = $317.07 per sf" | No context | Value unchanged. Add: 20% above the ZIP 43214 typical 3-bedroom value ($431,884, Zillow ZHVI, Oct 2026); a course assumption | CH-17; RES |
| C5-08 | Worked example 1 (two values) | "ARV $520,000 ... LTARV 65.38%" | $520,000 | No change; R-2's $470,000 what-if was not adopted | CH-17 (aligned) |
| C5-09 | Worked example 6 (supporting the ARV) | "Running Deals ... lists no comparable sales. The three comps and the adjustment rates below are illustrative" | Lesson-only comps | Still true: Running Deals lists no comps and calls the ARV a course assumption needing renovated comparables. Add the ZIP 43214 context; keep the comps labeled illustrative | CH-17; RES |
| C5-10 | Worked example 9 (seasoning) | "Maple Run's month-14 refinance is past that window, so it uses the $520,000 appraisal" | Refinance proceeds | Seasoning answer stands (RES-DSCR-05). Add that the refinance then fails on DSCR and is declined | CH-40; RES |
| C5-11 | T5, re-appraisal | "The month-24 term loan is a new loan in any case. It needs an appraisal with an effective date within 120 days" | Our new loan | The take-out is a third-party bank's loan; its own appraisal rules apply. We need a payoff, not a new appraisal | CH-18; D31, COM |
| C5-12 | Self-check context | "Freddie Mac's 10-year small-balance rate was 6.55% on 16 Nov 2026" | Context only | Name it the take-out rate basis for Cedar Court's third-party agency lender; Freddie SBL is folded into Conventional Small (Policy MF Part 1) | CH-18; D31, MF |
| C5-13 | 5. Practice, Cedar Court values | "$5,140,000 ÷ $8,600,000 = 59.77% ... Only the as-is value, capped at the price, does that" | Aligned | No change; matches the memo's 30.0% day-one cushion | CH-19 (aligned) |
| C5-14 | Worked example 4 (band of investment) | OCC: "Rising interest rates may lead to higher capitalization rates" | Aligned | C0's m-4 fix can point here | review (C0-acad m-4) |
| C5-15 | Facts table, Hours | "Blueprint projection 4.0 CPE credits" | 4.0 | Recount | CH-13; review |

## 3. Impact on exercise files

| # | File, exercise | Quote | Old | New | Driver |
| --- | --- | --- | --- | --- | --- |
| EX-01 | c00.json, c00-2 "Headline check", sources | "T2 market snapshot" | T2 | T4 | review (C0 structure) |
| EX-02 | c00.json, c00-2, line 3 | Non-QM "$175 billion ... up from $108 billion" (HousingWire) | Secondary forecast | Primary series | CH-39; review |
| EX-03 | c00.json, c00-2, line 2 hint | "KBRA's 12% likely comes from unrounded figures" | Hunch | Range method: −11.0% to −14.4% contains −12% | CH-29; review |
| EX-04 | c00.json, c00-3 "Maple Run's funding chain", steps and why | "In month 14 the borrower asks to refinance into a DSCR loan"; "The DSCR refinance repays it in month 14. That new loan can then be pooled into a non-QM securitization" | Refinance repays | "The plan was a third-party DSCR refinance; at $2,400 rent it fails, so a sale repays the bridge." Keep the securitization step as "had it closed"; add the shelf-label note | CH-40, CH-18; RES, D31 |
| EX-05 | c00.json, c00-3, sources | "T3 worked example 3" | WE3 | Worked example 4 | review (C0 structure) |
| EX-06 | c01.json, c01-2, cap item | "The rate cap confirmation, strike 4.25% for 24 months" | No notional | "...strike 4.25%, notional $5,140,000 (the full commitment), 24 months" | CH-08; D30 |
| EX-07 | c02.json, c02-1 "Maple Run's five Cs" | "Exit: lease at about $3,100 a month, then a DSCR refinance" | $3,100 | "Exit: lease at $2,450 (market rent $2,400); the DSCR refinance fails (0.76x), so the exit is the sale." ARV item ($520,000) unchanged | CH-17, CH-40; RES |
| EX-08 | c02.json, c02-2, why | "Maturity on 15 Jan 2028 and the month-14 DSCR refinance are the exit" | Refinance exit | "...and the planned month-14 refinance, which is declined, are the exit stage; the sale repays the loan" | CH-40; RES |
| EX-09 | c03.json, c03-1 | "month 18: SOFR is 4.75%, so the note rate is ... 8.75%" | 8.75% | No change | CH-06 (aligned) |
| EX-10 | c03.json, c03-3, context | "Tests use the nominal rate; bills use Actual/360 (D-CONV-01)" | One rule | Bridge case is right. Reword: "bills follow CORE-PRC-06 (Actual/360 on bridges)" | CH-02; D29 |
| EX-11 | c04.json, c04-1, last line | "$395,000 ÷ $358,050. MF-BR-07 tests this against 1.00x" | 1.10x | Optional downtime line | CH-33; review (R-7) |
| EX-12 | c04.json, c04-3, model answer | "stabilized NOI after the $800,000 renovation" | No capex check | Optional capex per unit | CH-38; review |
| EX-13 | c05.json, c05-1 | "implied cap rate of 8.00%" | 8.00% | No change | CH-07 (aligned) |
| EX-14 | c05.json, c05-3, item | "Maple Run loan-to-ARV: $340,000 total loan; ARV $520,000" | $520,000 | No change (ARV kept as a course assumption) | CH-17 (aligned) |
| EX-15 | c08.json, "Resize Maple Run's refinance", case | "The lease is $3,200 a month; the 1007 market rent is $3,100" | $3,200; $3,100 | $2,450; $2,400. Taxes $520 and the 30/360 constants stand (CORE-PRC-06(2)) | CH-17; RES |
| EX-16 | c08.json, same, model answer | "$3,100 ÷ $3,165.95 = 0.98x"; "$337,794, or 64.96% LTV"; "$338,000 ... 1.02x: passes. Dana brings ... $9,000 ... Reserves ... $9,130.05 ... Her $90,900 liquidity covers both" | Approve $338,000 | Qualifying rent $2,400. $347,000: PITIA $3,165.95; 0.76x, fails. Max at 7.75%: $1,720 ÷ 0.0071641225 = $240,085 (46.2%). At 7.50%: $1,720 ÷ 0.0069921451 = $245,990 → $245,000 (47.1%; CORE-PRC-05). Check: P&I $1,713.08; PITIA $2,393.08; 1.0029x. Gap $102,000 + reserves $7,179.24 = $109,179.24 against $89,738.33 liquidity: decline; the exit is the sale | CH-40; RES, PRC05 |
| EX-17 | c08.json, same, rubric | "Uses the lesser ... $3,100"; "$3,165.95 and 0.98x"; "lands on $338,000, checked at 1.02x"; "$9,000 cash to close plus $9,130 of reserves" | Old outcome | "$2,400"; "$3,165.95 and 0.76x"; "lands on $245,000, checked at 1.00x"; "$102,000 gap plus $7,179.24 reserves exceeds liquidity: decline" | CH-40; RES |
| EX-18 | c13.json, Cedar Court default what-if | "Cedar Court's month-27 refinance falls through" | Our refinance | "The agency lender's month-27 take-out falls through." Balance $5,140,000 stays; if the what-if adds payoff fees, the exit fee is $25,700 | CH-18, CH-42; D31, MF |
| EX-19 | c14.json, "Memo builder: Birchwood", coverage card | "LTC 68.0% against 70%; in-place coverage 1.08x at the 8.25% test rate" | No reserve, no rollover | Add "committee condition: interest reserve $23,983.33" and "rollover 35.7%; stressed exit DSCR 1.29x" | CH-33, CH-16; COM |
| EX-20 | c14.json, same, structure card | "Rate cap bought and assigned" | No notional | "...notional $3,520,000 (full commitment); $40,000 cost is a course assumption" | CH-08, CH-41; D30, COM |

No impact found in c00-1, c01-1, c01-3, c02-3, c03-2, c04-2, c05-2, c06, c07, c09, c10, c11 or c12. (c06's "refinanced into a rental" and c01's cash-out cases are generic, not Maple Run.)

## 4. Findings that apply beyond the changed numbers

Revision-1 items now settled by the change log have moved to section 2 (R-11, R-12 for Birchwood, R-1, R-5, C0-ind C-1, C0-acad M-5, C3-acad M-1 to M-4, C3-ind C-1, C-2, M-1 to M-3, the F-CORE-48 label). What remains:

### C0

- **Academic.** Rebuild the assessment: 8 review questions and two 12-item MCQ forms, four options, feedback on each (C-1; QAS Std 6.01.2). Define C3/C8 terms where first used, or use a "For later" box (M-9). Add a holder table from the MBA release or Z.1 L.220 (M-11). Add habit 5 on sampling error (m-2) and appraisal smoothing (m-3). Name the lender's own capital stack (m-5), attachment points (m-6) and ASC 860 sale accounting [VERIFY] (m-11). Label lender pages "secondary" (m-8, m-10). One version per line in the facts table (m-12). Add "Further reading". Pedagogy: a faded example in T4 and a far-transfer task.
- **Industry.** Add a dated "Where the market prices today" table, labeled "market range" (M-1). Add forward flow (M-2). Cut the four-quadrant material; add a fictional "2022 vintage" case tied to Cedar Court's month-24 extension (M-6), which can now reuse the $19,275 cap floor and 1.12x test. Move production metadata to an author appendix (M-7). Add channel economics (m-3) and product variants (m-7). Add-ons: broker call script, war stories, pipeline-equity exercise, a Cedar Court funding diagram ending at the agency take-out (now matches D-CORE-31), and a new-analyst mistakes box.
- **Benchmark.** Review questions per chunk (rec 1). Move IDs out of prose; C0 Teach has about 14 per 1,000 words (rec 2). Add "Key takeaways" (rec 4). Hide the quiz author note and header metadata (rec 8). Add a "You will be able to" line (rec 9). Question headings (rec 10). Reorder the overview (rec 14).

### C1

- **Academic (from C0).** Quiz v0 still has yes/no open-answer items, for example "(O3) Does ECOA apply to business credit? Answer: yes (Reg B). (C)". Rebuild as MCQ (C0-acad C-1(a); assessment standard). O3 has no Set A item, so LD-07 is unmet for it. Keep the ECOA and Reg B citations in step with C0's M-4 fix.
- **Industry (from C0).** Learner page carries LD, QAS and Bible section codes (C0-ind M-7). C1 T4 is the place for the "non-QM is a shelf label" sentence (C0-ind m-4). New from D-CORE-31: teach that the take-out lender owns its own HMDA, purpose and fair-lending answers for the refinance.
- **Benchmark.** Recs 1, 2, 4, 6, 8, 9 and 10. Rec 11 (OJT self-assessment rubric) is met; keep it as the pattern.

### C2

- **Academic (from C0 and C3).** C0 says HVCRE "C2 and C14 return to it"; C2 T3 has no HVCRE text (C0-acad M-3). Expected loss and default-as-option belong in T1. Do not contradict C8's spread decomposition (C3-acad M-9). Quiz v0 yes/no items need the MCQ rebuild. O2 and O7 have no quiz items.
- **Industry.** Teach recovery on as-is value less sale costs in T1 collateral; the 23.5% stalled cushion is the case (C0-ind C-1). The buyer's matrix can be the binding credit box (C0-ind M-2). Cedar Court needs GP co-invest and a key-principal line (R-9). Teach recourse as a negotiation point (R-13). Maple Run is now the clean "flip-to-rent works only as a flip" example; use it in T1.
- **Benchmark.** Recs 1, 2, 4, 6, 8 and 9. Rec 5 (capstone) draws on C2's life cycle and approval routing.

### C3

- **Academic.** Cite Brueggeman and Fisher and Geltner et al.; add the ASC 310-20 link [VERIFY] (M-5). Add a "Terms used before they are taught" box; move the IO-gate flowchart to C8 (M-8). Note F-CORE-46's even-month assumption (m-3); it matters more now that term notes accrue Actual/360. Fix the leap-year slip (m-4). Name fixed-rate price risk (m-6). Read the official reporters for *JNT* and *American Timber* (m-9). Label the F-MF-12 library example (CH-34). Rebuild the quiz: 14 review questions, two 21-item forms; O2, O5 and O6 untested (C-2). Fade WE5, WE7 and WE12; add two far-transfer problems; cut repeated "How our model policy applies it" text. Define "IRR nominal" and D-CONV's "nominal" once.
- **Industry.** Add a "Rate-reset clause: what to check" table [VERIFY] (M-5). Add minimum interest or spread maintenance, with one IRR (M-6). Say our coverage test is stricter than net-of-cap practice (m-3); with a commitment-size notional the gap is larger (C3-34). Add payoff-letter habits (m-4). Footnote the bisection (m-2). Add-ons: four Excel builds (dual-convention schedule, now the F-CORE-49 sheet; IO ledger; XIRR; cap reconciliation), a "Read the note" exercise, a three-quote worksheet that includes a Dutch quote, and war stories.
- **Benchmark.** Blank and completed workbook (rec 3). "In Excel" line under each formula (rec 7); F-CORE-49 has no single Excel function, so the workbook matters. About 25 IDs per 1,000 words in Teach (rec 2). T1 lists 14 subsections in "about 10 min" (rec 6). First T1 table clipped (rec 18). Overview opens with 13 formula IDs (rec 14). Question headings (rec 10). Hide header metadata (rec 8).

### C4

- **Academic (from C3).** C3 uses NCF, DSCR, debt yield and LTV before C4 teaches them; point the C3 glossary box here (C3-acad M-8). O3 and O6 have no quiz items.
- **Industry.** Month-by-month Cedar Court NCF with renovation downtime (R-7). Capex breakdown and rent-premium comps; WE5 starts this (R-6). R-11 is now decided, so the lease-by-lease rollover in CM2 and CM3 should reuse the 35.7% case. Flag R-14's 30-month lease-up what-if for C8.
- **Benchmark.** Workbook for the GPR-to-DSCR build (rec 3). Recs 1, 2, 4, 6 and 8.

### C5

- **Academic (from C0).** C5 owns appraisal smoothing and index choice (C0-acad m-3) and the cap-rate identity (m-4). WE4 Route 3 teaches the identity; add the smoothing note. O3 and O6 have no quiz items.
- **Industry.** Running Deals still lists no ARV comps; WE6's illustrative comps are the only support, and the ARV sits 20% above the ZIP's typical value (R-2, still open). Lease-up timing what-if belongs to C8 (R-14).
- **Benchmark.** Workbook for cap-rate and DCF examples (rec 3). Recs 1, 2, 4, 6 and 8.

## 5. Summary counts

| Module | Locations listed | Changed by today's decisions | Review only | Already aligned (checked, no edit) | Beyond-number action items (section 4) |
| --- | --- | --- | --- | --- | --- |
| C0 | 44 | 12 | 31 | 1 | 22 |
| C1 | 12 | 11 | 1 | 0 | 10 |
| C2 | 22 | 19 | 1 | 2 | 12 |
| C3 | 57 | 48 | 8 | 1 | 24 |
| C4 | 10 | 6 | 4 | 0 | 8 |
| C5 | 15 | 7 | 2 | 6 | 7 |
| Exercise files (9 files) | 20 | 11 | 6 | 3 | n/a |
| **Total** | **180** | **114** | **53** | **13** | **83** |

"Changed by today's decisions" counts rows whose driver names a change-log key (including rows with derived knock-on figures). "Review only" rows name no change-log key. Rows that mix both are counted as changed. Section 4 is counted one action item per sentence; some sentences hold more than one finding.

Revision 1 listed 141 locations, 53 of them waiting on an owner decision. Every one is now settled, either by a decided value or by "no change" (R-2's $470,000 ARV, R-3 taxes and R-4 fees were not adopted). No row in this revision waits on an owner decision except the HMDA exit-plan question in C1-04. This revision adds 39 locations the first draft missed: mostly the take-out and exit-fee knock-ons in C0 and C2, the Maple Run refinance outcome in C1, the cap-notional effects in C3's "What the cap protects" table and job aid, the F-CORE-49 knock-ons across C3's T3 tables, and the c08 and c14 exercise updates.

The largest dependency is now CH-40 (Maple Run refinance outcome): 29 locations across C0, C1, C2, C3, C5 and five exercise entries. Next is CH-01 (Actual/360 term-note accrual): 19 locations, all but one in C3. CH-17 (Maple Run inputs) and CH-18 (third-party take-outs) touch 17 each.

## Self-check

1. What does Cedar Court's cap pay in a 30-day month at SOFR 5.00%, and what is the net cost? **Answer:** $5,140,000 × 0.75% ÷ 360 × 30 = $3,212.50 (D-CORE-30). Net $35,550.00 − $3,212.50 = $32,337.50, or 8.187% on the $4,740,000 funded.
2. What is Birchwood's in-place rollover, and does COM-GEN-08 stress it? **Answer:** $150,000 ÷ $420,000 = 35.7%, over 15%. Stressed exit NCF $434,000 − $22,500 = $411,500; ÷ $319,050.84 = 1.29x, at least 1.20x.
3. Why does Maple Run's month-14 refinance fail? **Answer:** Qualifying rent is $2,400. At $347,000 and 7.75%, PITIA is $3,165.95 and DSCR 0.76x. The most at 1.00x is $245,000, leaving a $102,000 gap plus $7,179.24 of reserves, more than the $89,738.33 liquidity.

## What to look up yourself

1. Reg C comment 3(c)(3)-1: does "permanent financing to the same borrower" include financing from a different lender? This decides C1-04 and C1-10 [VERIFY: 12 CFR 1003.3(c)(3); not yet checked].
2. Whether Maple Run's memo exit plan of record stays "refinance; back-up sale" or becomes "sale" after Role 2's "Approve on the sale exit". That is an owner call; it moves C1's HMDA answer.
3. The four change-log open items: Norstrøm (1972) bibliography; a dated cap quote; renovated ZIP 43214 comps; a fresh export of the three tabs. The Library now cites Norstrøm as *JFQA* 7(3), June 1972, pp. 1835-1839; confirm on the JSTOR or Cambridge record before quoting.
4. COM-GEN-08's wording on bridge loans: the change log calls the 1.29x test a "course reading".

## How to check it

1. `=ROUND(5140000*0.75%/360*30,2)` returns 3212.50; `=(35550-3212.5)/4740000*12` returns 0.081867.
2. `=150000/420000` returns 0.357143; `=(434000-0.15*150000)/319050.84` returns about 1.290.
3. `=(2400-680)/0.0069921451` returns about 245,990; `=2400/(ROUND(PMT(7.5%/12,360,-245000),2)+680)` returns about 1.0029.
4. `=(235950-164000)*4/12` returns 23,983.33.
5. In a sheet, start at 3,900,000 in Jan 2029. Each month add `ROUND(balance*7%/360*days,2)` and subtract 27,564.39. After 120 rows the balance is 3,118,446.42.
6. `=380000/(3520000*8.75%)` returns 1.234.
