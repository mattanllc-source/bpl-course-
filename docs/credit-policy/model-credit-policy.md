# BPL Model Credit Policy

**Model policy for training - not for live lending decisions.** As of Nov 18, 2026

## How this model policy works

This tab builds a model credit policy for the BPL course, one family at a time: Core, then Residential, Multifamily and Commercial. Each family has three parts, and work stops after each part for your "continue".

1. **Part 1, Research:** market evidence per parameter, as low, typical and high, with sources.
2. **Part 2, Model policy:** a course baseline per parameter, with a rule ID and BASIS tag.
3. **Part 3, Decisions and summary:** open choices for you, then a one-page limits table.

**Source order.** Rating agency and securitization material first. Then government programs, lender term sheets and product pages, and industry associations.

**Flags used in Part 1**

| Flag | Meaning |
| --- | --- |
| OLD | Source dated more than 24 months before 18 Nov 2026, i.e. before 18 Nov 2024 |
| MAX | A marketing claim such as "up to 90%" or "as low as 7.75%". It is a ceiling or floor, not a norm |
| N.D. | The page shows no date. Treated as current only if a dated source agrees |
| PAYWALL | Only the abstract or press coverage was read |

**BASIS tags used in Part 2:** MARKET (consistent across several sources), JUDGMENT (thin or mixed sources; the baseline is a recommendation), LEGAL (depends on law; carries \[VERIFY\]).

**Conventions decided 19 Nov 2026 (D-CONV).** These settle the open \[CONFIRM\] questions from the Formula Library build. They apply wherever the listed rules and formulas are used.

| ID | Question | Decision | Rules and formulas |
| --- | --- | --- | --- |
| D-CONV-01 | Rate used in tests | Sizing, DSCR, coverage, liquidity and reserve tests use the nominal annual rate. Billing is Actual/360 | All sizing rules; F-CORE-01, -03, -25 |
| D-CONV-02 | Interest days | Funding day counts; payoff day does not | F-CORE-01, -05, -32, -33 |
| D-CONV-03 | Experience boundary | A project exited exactly 36 months ago counts | CORE-BOR-15; F-CORE-27 |
| D-CONV-04 | Recovery above balance | Report 0% loss severity; show the gain separately | F-CORE-23 |
| D-CONV-05 | Stored materials | Only installed work counts toward percent complete | RES-FF-09; F-RES-06, -18 |
| D-CONV-06 | Land equity | Free-and-clear land counts toward the 15% at the lower of cost or appraised value | RES-GU-07; F-RES-22 |
| D-CONV-07 | Cash back on a flip purchase | Never allowed | RES-FF-03; F-RES-09 |
| D-CONV-08 | Interest reserve balance | Higher of 60% and the draw schedule's average outstanding | F-RES-16, MF-CON-05, COM-CON-06; F-MF-15, F-COM-14 |
| D-CONV-09 | Vacancy when T-3 binds | Deduct only the vacancy above what T-3 already reflects | MF-GEN-05; F-MF-17, -18 |
| D-CONV-10 | Combined DSCR basis | Stabilized NCF | MF-MEZ-02; F-MF-27 |
| D-CONV-11 | SBC LTV cut | One 5% cut, even if the building is office and over 20% vacant | COM-DSCR-05; F-COM-23 |
| D-CONV-12 | Retainage and prepayment year | Retainage released at completion; prepayment year counted from closing | COM-CON-10, COM-TRM-05, MF-TRM-06; F-COM-21, -24 |

# Core

## Core Part 1A: Borrower, guarantor and entity eligibility; credit and background

The market norm is an LLC or corporation borrower, guaranteed by individuals with a mid-score around 650-680. Rated securitizations push credit higher. Background and OFAC checks are universal, but lookback periods are rarely published.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Borrower vesting | Individuals allowed alongside LLCs (DSCR programs) | LLC or corporation required for RTL | LLC or corporation only | Griffin Funding, DSCR page, Aug 2026; OfferMarket, Fix and Flip Loan guidelines, 22 Apr 2025 |
| Guarantor ownership trigger | 20% owners sign | 25% owners sign | Not found | Lender post, BiggerPockets forum (N.D., weak); LendingHome Operational Procedures, May 2020 (OLD) |
| Minimum guarantor FICO, RTL | 550-600 | 650-680 | 700-730 | CLS CRE, hard money requirements (N.D.); Easy Street 600 and Groundfloor 640 via CrowdfundedWealth, 12 Nov 2026; RCN 650, New Silver 650, Lima One 660, Anchor 660-720 (same); CIVIC brochure 660 (N.D.); OfferMarket 680 (Apr 2025); New Silver 700 if fewer than 2 projects (help page, N.D.); Fidelis 2026-RTL1 eligibility WA FICO 730, National Mortgage News 2026 |
| FICO in rated RTL pools | n/a | Rated deals use stronger FICO floors than unrated | WA 742 in a 2026 Castlelake pool | KBRA, Laying the Foundation: The Evolution of RTL Lending, 30 Jul 2026 (PAYWALL; press release); NMP, Castlelake, 2026 |
| Bankruptcy / foreclosure lookback | 24 months | Not consistently published | 7 years since bankruptcy (institutional bridge) | Groundfloor via CrowdfundedWealth, 12 Nov 2026; CLS CRE, bridge loan requirements (N.D.) |
| Felony history | None in last 5 years | Reviewed case by case | Any felony makes guarantor ineligible | Groundfloor via CrowdfundedWealth, 12 Nov 2026; FundLoans Arete DSCR Guidelines v1.1, 22 Oct 2025; AAPL, Navigating Borrower Background Checks (N.D.) |
| Credit report and background check | Credit run even if score not used | Credit, background, liens, judgments, OFAC on every guarantor | Plus full litigation search; active material litigation is a decline | PrivateLenderLink, fix-and-flip guide (N.D.); FundLoans Alta Guidelines, 2 Jun 2025; CLS CRE (N.D.) |

**Findings worth teaching**

- FICO is the most published Core parameter: nine lenders checked, floors from 600 to 680.
- Lima One's experience rule conflicts across sources: "no experience" (FlipperForce, N.D.) versus "one exit in 36 months" (CrowdfundedWealth, Nov 2026). Treat the newer one as current.
- Lookback periods for bankruptcy and foreclosure are almost never printed by RTL lenders. Agency consumer rules (e.g. 7 years after foreclosure) are not a valid BPL benchmark.

## Core Part 1B: Liquidity, net worth and experience tiers

Experience tiers are the most consistent Core control: lenders count completed projects over a 24-36 month lookback. Liquidity and net worth tests are common in bridge lending but rarely printed for fix-and-flip.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Post-closing liquidity | No minimum printed (none of 7 flip lenders print one) | Enough to cover interest, overruns and delays; bridge lenders ask 10% of loan | 10% of total commitment incl. unfunded; rated pool example of $1M for sponsors without FICO | CrowdfundedWealth, 12 Nov 2026; RCN Capital, What Makes a Fix & Flip Deal Financeable (2026); CLS CRE, bridge and bridge-to-perm requirements (N.D.); American Banker, NRMLT RTL deal (N.D.) |
| Liquidity haircuts | Cash at 100% | Retirement and securities at 70%; unused HELOC at 50% | Not found | Lender post, BiggerPockets forum (N.D., weak; single source) |
| Guarantor net worth | 10% of loan | About 1.0x loan amount | At least total commitment incl. unfunded draws | OfferMarket, flip loans blog (N.D.); CLS CRE, bridge requirements (N.D.); CLS CRE, bridge-to-perm (N.D.) |
| Experience lookback | 24 months | 36 months | 5 years (rehab projects) | OfferMarket blog (N.D.); LendingOne FAQ (N.D.); Lima One via CrowdfundedWealth, Nov 2026; OfferMarket loan page, Apr 2025 |
| Experience tier bands | 0-2 / 3-9 / 10+ | 0 / 1-4 / 5+ / 10+ | 0 / 1-3 / 4-6 / 7-9 / 10+ | OfferMarket blog (N.D.); RCN Capital via CrowdfundedWealth, Nov 2026, and RCN blog, 20 Feb 2026; lender intake form (N.D., weak) |
| Minimum flips for RTL | 0 (beginners accepted) | 0-1 | 1-2 in 3 years | New Silver, CoreVest, Groundfloor via CrowdfundedWealth, Nov 2026; Lima One one exit in 36 months (same); LendingOne FAQ (N.D.) |
| Minimum ground-up projects | 1 | Not consistent | 5 | LendingOne FAQ (N.D.); Lima One via FlipperForce (N.D.) |
| Leverage step by tier | Beginners about 75-85% LTC | Each tier adds about 5 points of LTC | 90% LTC for 3+ or 5+ flips (MAX) | RCN Capital blog, 2026; OfferMarket blog (N.D.); LoanFunders newsletter (N.D.) |

**Findings worth teaching**

- Liquidity is the weakest-sourced Core parameter for RTL. Part 2 will need a JUDGMENT baseline.
- Ground-up experience minimums range from 1 to 5 projects. This is a direct source conflict for Part 3.

## Core Part 1C: Pricing, concentration, exceptions and approval authority

Short-term RTL pricing clusters at 8.5-12% interest plus 1-3 points in 2026. Concentration limits exist in every securitization, but their numbers vary by issuer. No public source gives numeric approval-authority norms for private lenders.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| RTL interest rate | 7.75% (MAX, "as low as") | 8.5-12% | 14-15% | Kiavi, Investor Pulse, Mar 2026; Mortgage-Info, Fix and Flip Loans 2026, 16 Oct 2026; New Silver RTL page 8.5-11% (N.D.); Crestmont Capital, Hard Money Loan Rates 2026, 11 Jun 2026; Huge Capital, loan costs (N.D.) |
| Origination points | 0 | 1-3 | 4 | Easy Street "zero to two" via CrowdfundedWealth, Nov 2026; New Silver 1-1.75% (same); Mortgage-Info, Oct 2026; Ridge Street, Beginners guide 1-4% (N.D.); Crestmont, Jun 2026 |
| Extension fee | 0.5 point per extension | 0.5-1 point per 3-6 months | 1 point | Mortgage-Info, 16 Oct 2026 (single source; confirm in Residential research) |
| Pricing driver | Experience tier | Experience + FICO + leverage | Plus property type and loan size | Huge Capital (N.D.); Ridge Street, Best Fix and Flip Lenders 2026; Crestmont, Jun 2026 |
| Borrower concentration | Limited in every revolving RTL pool | Limit set per issuer; varies widely | Not published numerically | KBRA research release, 30 Jul 2026; NMP, Rated Deals Gain Ground, 3 Aug 2026 |
| Product-mix concentration | Small multifamily under 10 units up to 10% (KBRA view) | Ground-up and bridge-only capped per deal | Example pool: 40.1% ground-up, 24.5% bridge-only | AAPL, Choice Comes to RTL Ratings, 2026; American Banker, NRMLT (N.D.) |
| Exception management | Exceptions documented and approved | Exceptions reported and tracked in aggregate | Rising exception counts treated as a warning sign | OCC, Comptroller's Handbook: Commercial Real Estate Lending v2.0, Mar 2022 (OLD, but current version); OCC Loan Portfolio Management booklet |
| Approval authority | Not found | Not found | Not found | No public private-lender source. Bank examiner guidance frames it only (OCC, above) |

**Findings worth teaching**

- Every rate and leverage claim on lender product pages is a marketing ceiling or floor. Dated aggregator surveys give better typical values.
- Approval authority and concentration limits will be JUDGMENT rules in Part 2.

## Core Part 1D: Sources and gaps

**Gaps against your source rules**

- Rating agencies: KBRA and Morningstar DBRS RTL criteria are paywalled. I used their press releases and trade-press coverage. Fitch and S&P RTL criteria were not found.
- Lender count: FICO and experience each have 5+ lenders. Liquidity, net worth, background lookbacks and extension fees have fewer than 5.
- Government programs (Fannie, Freddie, SBA) are not Core benchmarks. They appear in the Multifamily and Commercial research.
- No public source sets approval-authority limits for private lenders.

**Sources read (checked 18 Nov 2026)**

| Publisher | Title | Date | Flag |
| --- | --- | --- | --- |
| KBRA | [Laying the Foundation: The Evolution of RTL Lending (release)](https://www.kbra.com/publications/CfwBDnbf/kbra-releases-research-laying-the-foundation-the-evolution-of-rtl-lending) | 30 Jul 2026 | PAYWALL |
| KBRA | [U.S. RTL Securitization Rating Methodology (release)](https://www.kbra.com/publications/pkKVKjxw) | 24 Mar 2026 | PAYWALL |
| Morningstar DBRS | [Residential Transition Loans: A Primer](https://dbrs.morningstar.com/research/439707) | 2024 | PAYWALL |
| National Mortgage News | [Fidelis Mortgage Trust 2026-RTL1](https://www.nationalmortgagenews.com/news/fidelis-mortgage-trust-sets-out-to-raise-112-1-million-from-fix-and-flip-pool) | 2026 |  |
| NMP | [Rated Deals Gain Ground in RTL Securitization](https://nationalmortgageprofessional.com/news/rated-deals-gain-ground-rtl-securitization-market) | 3 Aug 2026 |  |
| NMP | [Castlelake investor loan funding](https://nationalmortgageprofessional.com/news/castlelake-builds-261-million-funding-pipeline-investor-loans) | 2026 |  |
| American Banker | [NRMLT RTL securitization](https://asreport.americanbanker.com/news/nrmlt-raises-500-million-on-resi-transition-loans) | N.D. | N.D. |
| AAPL | [Choice Comes to RTL Ratings](https://aaplonline.com/articles/operations/choice-comes-to-rtl-ratings/) | 2026 |  |
| AAPL | [Navigating Borrower Background Checks](https://aaplonline.com/articles/ethics/navigating-borrower-background-checks/) | N.D. | N.D. |
| CrowdfundedWealth | [Hard Money Loan Requirements 2026: What 7 Lenders Publish](https://www.crowdfundedwealth.com/articles/hard-money-loan-requirements-2026) | 12 Nov 2026 |  |
| RCN Capital | [How Experience Shapes Loan Terms](https://rcncapital.com/blog/fix-flip-lending-for-repeat-investors-how-experience-shapes-loan-terms) | 20 Feb 2026 |  |
| RCN Capital | [What Makes a Fix & Flip Deal Financeable](https://rcncapital.com/blog/what-makes-a-fix-flip-deal-financeable-in-todays-market) | 2026 |  |
| New Silver | [Minimum FICO score](https://help.newsilver.com/en/articles/3230261-what-is-the-minimum-fico-score-required) | N.D. | N.D. |
| New Silver | [RTL Loans](https://newsilver.com/hard-money-loans-fix-and-flip/rtl-loans/) | N.D. | N.D., MAX |
| CIVIC Financial | [Product brochure](https://civicfs.com/brochure) | N.D. | N.D. |
| OfferMarket | [Fix and Flip Loan guidelines](https://www.offermarket.us/fix-and-flip-loan) | 22 Apr 2025 | MAX |
| OfferMarket | [Fix and flip funding guide](https://www.offermarket.us/blog/fix-and-flip-funding) | N.D. | N.D. |
| LendingOne | [FAQ](https://lendingone.com/?p=359) | N.D. | N.D. |
| FlipperForce | [Lima One Capital profile](https://flipperforce.com/lenders/lima-one-capital) | N.D. | N.D. |
| Kiavi | [Investor Pulse, March 2026](https://www.kiavi.com/blog/investor-pulse-mar-2026) | Mar 2026 | MAX |
| Mortgage-Info | [Fix and Flip Loans 2026](https://mortgage-info.com/blog/fix-and-flip-loans-hard-money-2026-guide) | 16 Oct 2026 |  |
| Crestmont Capital | [Hard Money Loan Rates 2026](https://www.crestmontcapital.com/blog/hard-money-loan-rates-2026) | 11 Jun 2026 |  |
| CLS CRE | [How to qualify for bridge loans](https://clscre.com/financing/how-to-qualify-for-bridge-loans.html) | N.D. | N.D. |
| FundLoans | [Arete DSCR Guidelines v1.1](<https://www.fundloans.com/hubfs/Arete%20DSCR%20Guidelines%20(10-22-2025)%20v1.1.pdf?hsLang=en>) | 22 Oct 2025 |  |
| LendingHome | [Operational Procedures, Bridge](https://mortgagedepot.com/wp-content/uploads/sites/83/md-lh-Operational-Procedures.pdf) | May 2020 | OLD |
| OCC | [Comptroller's Handbook: Commercial Real Estate Lending v2.0](https://www.occ.treas.gov/publications-and-resources/publications/comptrollers-handbook/files/commercial-real-estate-lending/pub-ch-commercial-real-estate.pdf) | Mar 2022 | OLD (current version) |

---

**Core Part 1 complete. Say "continue" for Core Part 2 (model policy).**

## Core Part 2A: Eligible borrowers and guarantors; credit and background

Every loan goes to a US entity, guaranteed by every 20% owner, with at least one qualifying guarantor at a 680 mid-score. Rules here apply to every family unless a family rule is stricter.

**New topic codes.** PRC (pricing), CONC (concentration) and EXC (exceptions) are confirmed Core topic codes, added to Course Bible 5.7 on 18 Nov 2026.

**Eligible borrowers and guarantors**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-BOR-01 | Borrower is an LLC, LP or corporation formed in a US state and in good standing. Individuals and trusts are ineligible. | MARKET | RTL lenders require an entity (OfferMarket, Apr 2025); DSCR programs allowing individuals are the looser end (Griffin, Aug 2026) |
| CORE-BOR-02 | The borrower's stated purpose is limited to owning and operating real estate. | JUDGMENT | Entity-vesting rules seen in one guideline (ForwardLending vesting rules, 2023, OLD); keeps unrelated business risk out |
| CORE-BOR-03 | Every individual owning 20% or more of the borrower, directly or indirectly, plus the managing member, signs the guaranty. | JUDGMENT | Sources split 20% (forum, weak) and 25% (LendingHome, 2020, OLD); the lower figure is the conservative side |
| CORE-BOR-04 | At least one guarantor (the "qualifying guarantor") alone meets the FICO, liquidity, net worth and experience rules. | JUDGMENT | Lenders let a co-guarantor cure a weak score (New Silver, N.D.); one person meeting all tests keeps analysis simple for training |
| CORE-BOR-05 | A spouse is not required to sign as guarantor if the guarantor qualifies alone. A spouse who is a 20% owner signs as an owner. | LEGAL | \[VERIFY: 12 CFR 1002.7(d); FDIC FIL-9-2002; checked 18 Nov 2026\] |
| CORE-BP-01 | Borrower and every guarantor sign a business-purpose and non-occupancy certification before closing. | LEGAL | Standard in BPL guidelines (FundLoans Arete, Oct 2025). \[VERIFY: 12 CFR 1026.3(a) and commentary; checked 18 Nov 2026\] |
| CORE-BP-02 | No guarantor or relative may occupy, or intend to occupy, a 1-4 unit collateral property. A red flag stops the file until a credit officer clears it. | LEGAL | Occupancy decides consumer coverage. \[VERIFY: Official Interpretation 3(a)-4, 14-day test; checked 18 Nov 2026\] |
| CORE-BP-03 | Before the term sheet, check the property state's State Law Table row. Proceed only if we hold every lender or broker licence it lists, or meet a listed exemption. A state with no row gets no term sheet until one is added. | LEGAL | Licensing varies by state: California licenses commercial lenders; Ohio and North Carolina license consumer-purpose loans only. Added 20 Nov 2026 with C10. \[VERIFY: State Law Table licence columns; checked 20 Nov 2026\] |
| CORE-BP-04 | On any refinance with cash out, the borrower states the use of proceeds in writing. If more than half will go to personal, family or household use, treat the loan as consumer purpose and decline. No exception (CORE-EXC-03). | LEGAL | Mirrors Ohio's 'more than half' consumer-purpose test and closes the cash-out gap left by the Reg Z rental rule. Added 20 Nov 2026 with C1. \[VERIFY: OAC 1301:8-7-02(F); Reg Z comment 3(a)-3; checked 20 Nov 2026\] |

**Credit and background**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-BOR-06 | Qualifying guarantor mid-score at least 680; at least 700 for an Experience Tier 0 guarantor. Other guarantors at least 620. | MARKET | Typical floor 650-680 across nine lenders; 680 is the conservative end (OfferMarket, Apr 2025); 700 for beginners (New Silver, N.D.). 620 for others is JUDGMENT |
| CORE-BOR-07 | Mid-score = middle of three bureau scores; with two scores, the lower. Report no older than 90 days at closing. | JUDGMENT | "Mid-score" used by lenders (CIVIC, N.D.); 90-day age not sourced |
| CORE-KYC-01 | Screen the borrower, every guarantor and every 20% owner against OFAC lists before term sheet and again before funding. Any unresolved match is a decline. | LEGAL | OFAC search appears in guidelines (FundLoans Alta, Jun 2025). \[VERIFY: 31 CFR Part 501; treasury.gov; checked 18 Nov 2026\] |
| CORE-KYC-02 | Identify every 20% owner and one control person, with government ID. | LEGAL | Mirrors FinCEN's 25% CDD prong, set lower to match CORE-BOR-03. \[VERIFY: 31 CFR 1010.230; whether it binds us\] |
| CORE-KYC-03 | Run a background search on each guarantor: criminal, bankruptcy, foreclosure, liens, judgments and litigation, 10-year lookback. | JUDGMENT | Background checks are standard (AAPL, N.D.; PrivateLenderLink, N.D.); 10-year lookback matches a common screening product (AAPL handout, Apr 2026) |
| CORE-BOR-08 | No bankruptcy discharge, foreclosure, deed in lieu or short sale in the last 48 months. | JUDGMENT | Sources range 24 months (Groundfloor) to 7 years (CLS, N.D.); 48 months sits between |
| CORE-BOR-09 | A felony for fraud, financial crime or a real estate offence at any time makes a guarantor ineligible. Any other felony in 10 years goes to a credit officer. | JUDGMENT | Sources range "no felony in 5 years" (Groundfloor) to "any felony" (FundLoans Arete, Oct 2025). Check state fair-chance laws. \[VERIFY\] |
| CORE-BOR-10 | Active material litigation, open tax liens, or unpaid judgments over $25,000 must be resolved at or before closing. | JUDGMENT | Litigation is a decline trigger for bridge lenders (CLS, N.D.); $25,000 threshold not sourced |

**AML program, suspicious activity, sanctions records and fraud red flags (added 20 Nov 2026)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-KYC-04 | The lender keeps one written AML program for every loan it makes. Senior management approves it. A named BSA officer runs it. Procedures are risk-based and cover brokers. Staff are trained each year, and someone other than the BSA officer tests the program each year. | LEGAL + JUDGMENT | Required for loans secured by 1-4 unit residential property: FinCEN's residential mortgage loan definition turns on the collateral, not the loan's purpose. \[VERIFY: 31 CFR 1010.100(lll) and 1029.210; counsel to confirm coverage; checked 20 Nov 2026\]. Applying it to 5+ unit and commercial loans, and the yearly cycle, are JUDGMENT |
| CORE-KYC-05 | Any red flag (CORE-KYC-07) goes to the BSA officer the same business day. The BSA officer decides on a SAR. A SAR is filed within 30 calendar days of first detection, or 60 if no suspect is identified, when $5,000 or more is involved. No one tells the borrower or anyone outside need-to-know. The SAR and its support are kept 5 years. | LEGAL | \[VERIFY: 31 CFR 1029.320; checked 20 Nov 2026\]. Same-day escalation is JUDGMENT |
| CORE-KYC-06 | OFAC screening records are kept 10 years. A rejected transaction is reported to OFAC within 10 business days; blocked property is reported as 31 CFR 501.603 requires. An entity owned 50% or more in aggregate, directly or indirectly, by blocked persons is itself blocked. | LEGAL | \[VERIFY: 31 CFR 501.601, 501.603, 501.604; OFAC 50 Percent Rule FAQs 398-401; checked 20 Nov 2026\] |
| CORE-KYC-07 | These red flags stop the file until the BSA officer clears them: occupancy signs (CORE-BP-02); a straw or nominee owner; a sale of the subject in the last 12 months at 20% or more below today's price or value; cash to close from an unrelated third party; documents that conflict; any change to wire instructions. Wire instructions are confirmed by a call to a number already in our file, never one from the request. | JUDGMENT | Red-flag families follow FinCEN's mortgage fraud advisory (FIN-2012-A009) and Fannie Mae's red-flag list (2026). The 12-month and 20% triggers and the callback rule are course choices |

## Core Part 2B: Liquidity, net worth and experience tiers

The qualifying guarantor must hold post-closing liquidity of the greater of 10% of the commitment or 6 months' interest. Experience is counted over 36 months into four tiers. Worked examples use the Course Bible's illustrative flip: $340,000 commitment at 11.000%, cash to close $75,800.

**Rules**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-BOR-11 | Liquid assets are counted with haircuts: cash 100%; listed securities 70%; vested retirement 70%; unused credit lines, crypto and business equity 0%. | JUDGMENT | Haircuts seen in one lender post (forum, N.D.); HELOC set to 0% (source used 50%) as the conservative choice |
| CORE-BOR-12 | Post-closing liquidity must meet F-CORE-25: the greater of 10% of total commitment or 6 months' interest, plus 5% of the guarantor's other open commitments with us. | JUDGMENT | 10% of loan is the bridge norm (CLS, N.D.); flip lenders print none (CrowdfundedWealth, Nov 2026). Months-of-interest and portfolio add-on are recommendations |
| CORE-BOR-13 | Liquidity is verified with the two most recent monthly statements, dated within 60 days of closing. | JUDGMENT | One lender asks one month's statement (Groundfloor, Nov 2026); two months is conservative |
| CORE-BOR-14 | Adjusted net worth (F-CORE-26) at least 25% of total commitment for Residential; at least 100% for Multifamily and Commercial. | JUDGMENT | Sources range 10% (OfferMarket blog) to 1.0x (CLS bridge); split by family |
| CORE-BOR-15 | Experience counts only projects completed in the last 36 months, where the guarantor owned at least 20%, verified by settlement statement or deed. | MARKET | 36 months is the most common lookback (LendingOne; Lima One via CrowdfundedWealth, Nov 2026) |
| CORE-BOR-16 | Experience tiers: Tier 0 = 0 projects; Tier 1 = 1-4; Tier 2 = 5-9; Tier 3 = 10 or more. | MARKET | RCN bands 0 / 1-4 / 5+ / 10+ (RCN, Feb 2026; CrowdfundedWealth, Nov 2026) |
| CORE-BOR-17 | Ground-up and rental projects are counted separately from rehab projects. Each family sets its own minimum count per product. | MARKET | Lenders set separate ground-up minimums (LendingOne; Lima One) |

**F-CORE-24: Adjusted liquid assets**

```latex
AdjLiquid = Cash \times 1.00 + Securities \times 0.70 + Retirement_{vested} \times 0.70 - CashToClose
```

1. Inputs (illustrative): cash $110,000; securities $30,000; vested 401(k) $50,000; unused HELOC $50,000; cash to close $75,800 (F-RES-09).
2. Substitute: $110,000 × 1.00 + $30,000 × 0.70 + $50,000 × 0.70 + $50,000 × 0 − $75,800.
3. Work: $110,000 + $21,000 + $35,000 + $0 − $75,800 = $90,200.
4. Result: post-closing adjusted liquidity = $90,200. Feeds CORE-BOR-12.

**F-CORE-25: Required post-closing liquidity**

```latex
ReqLiquid = \max(0.10 \times Commitment,\ 6 \times \frac{Commitment \times Rate}{12}) + 0.05 \times OtherOpenCommitments
```

1. Inputs: commitment $340,000; note rate 11.000%; other open commitments with us $600,000.
2. 10% test: $340,000 × 0.10 = $34,000.
3. Interest test: $340,000 × 11.000% ÷ 12 = $3,116.67; × 6 = $18,700.
4. Greater of the two: $34,000. Add-on: $600,000 × 0.05 = $30,000. Required = $64,000.
5. Result: $90,200 ≥ $64,000. CORE-BOR-12 passes with $26,200 to spare.

**F-CORE-26: Adjusted net worth**

```latex
AdjNW = TotalAssets - TotalLiabilities - EquityInSubject
```

1. Inputs: total assets $900,000; total liabilities $500,000; equity in subject property $0 (a purchase).
2. Work: $900,000 − $500,000 − $0 = $400,000.
3. Test (Residential): 25% × $340,000 = $85,000. $400,000 ≥ $85,000: CORE-BOR-14 passes.

**F-CORE-27: Experience count and tier**

```latex
ExpCount = \sum Projects_{36m,\ \geq 20\%\ owned,\ exited,\ verified}
```

1. Inputs: in 36 months, 3 flips sold, 1 flip refinanced into a rental, 1 flip sold 40 months ago, 1 flip owned through a 10% stake.
2. Count: 3 + 1 = 4. The 40-month sale is outside the lookback. The 10% stake is below the 20% ownership minimum.
3. Result: 4 projects = Tier 1 (CORE-BOR-16).

## Core Part 2C: Recourse, third-party reports, pricing and extensions

Residential loans carry full-recourse guaranties; multifamily and commercial bridge loans are non-recourse with carve-outs. The lender orders every appraisal. RTL pricing sits inside the 8.5-12% market band, stepped by experience tier.

**Recourse and guaranty**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-DOC-01 | Residential loans (RTL and DSCR): full-recourse guaranty of payment from every guarantor under CORE-BOR-03. | JUDGMENT | Market is mixed: some RTL lenders offer non-recourse (Lima One via FlipperForce, N.D.). Full recourse is the conservative teaching default |
| CORE-DOC-02 | Multifamily and commercial bridge: non-recourse, with full recourse for fraud, misapplied funds, unpermitted transfer or voluntary bankruptcy. Carve-out guaranty from the qualifying guarantor. | MARKET | Institutional bridge is "generally non-recourse with standard carve-outs" ([Arbor, Structured Financing Bridge, 2 Sep 2025](https://arbor.com/wp-content/uploads/2025/04/Structured-Financing-Bridge-090225.pdf)) |
| CORE-DOC-03 | Any loan with future funding or construction adds a completion guaranty. Multifamily and commercial add an environmental indemnity. | JUDGMENT | Completion risk sits with the sponsor; not separately sourced in Core research |
| CORE-DOC-04 | Guaranty and remedy terms must be checked against state anti-deficiency and one-action rules before term sheet. | LEGAL | \[VERIFY: State Law Table, deficiency column, SLT-XX-01/-02; checked 20 Nov 2026\] |
| CORE-DOC-05 | Every guaranty on California collateral includes the guarantor waivers allowed by Civ. Code 2856, including those for anti-deficiency, one-action and election-of-remedies defences. Without them, foreclose judicially if the guaranty is needed. | LEGAL | CCP 580d(b): the borrower's protection does not affect guarantor liability. Civ. Code 2856(a)(3) and (d) let guarantors waive real-property and election-of-remedies defences. Added 20 Nov 2026. \[VERIFY: SLT-CA-01; checked 20 Nov 2026\] |

**Third-party reports (every loan; families add more)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-VAL-01 | The lender orders the appraisal through an appraisal management company from a state-certified appraiser. Borrower-supplied appraisals are not accepted. | MARKET | Lenders "typically order their own" (CLS, N.D.); DBRS tightened appraisal validation in May 2026 (Pulse summary of DBRS event, 21 May 2026) |
| CORE-VAL-02 | Appraisal effective date no more than 120 days before closing. | JUDGMENT | CLS cites 6 months as the outer limit; 120 days is the conservative choice |
| CORE-VAL-03 | Every appraisal gets an internal or third-party desk review. BPOs and AVMs are secondary checks only. | JUDGMENT | Reflects rating-agency focus on valuation (DBRS, May 2026); review depth not sourced |
| CORE-CLS-01 | Title commitment with lender's policy; entity documents and good-standing certificate; credit, background and OFAC under 2A. | JUDGMENT | Standard closing items; not separately sourced in Core research |
| CORE-CLS-02 | The closing agent is a title agent or approved attorney of a title insurer. An ALTA closing protection letter naming the lender is in hand before funds move. Written closing instructions list every condition, the exact disbursements and the policy to be issued. | MARKET | A CPL indemnifies the lender for the agent's fraud or dishonesty or failure to follow written closing instructions (ALTA CPL form; Starfield & Smith, 2016, OLD). Cover depends on the insurer's solvency (MBA Newslink). Added 20 Nov 2026 with C11. \[VERIFY: insurer's CPL form\] |
| CORE-CLS-03 | Funding needs a signed checklist showing every condition cleared, including a same-day OFAC re-run. One person prepares the wire and a second releases it. Instructions are verified under CORE-KYC-07 and match the CPL agent's escrow account. Receipt is confirmed with the agent by the number on file. | JUDGMENT | Real estate fraud losses $275.1 million and BEC over $3 billion in 2025; voice cloning now used in BEC (FBI IC3 2025 report, via ALTA, Apr 2026, and SecureWorld). Two-person release not separately sourced. Added 20 Nov 2026. |
| CORE-CLS-04 | Prepaid interest is collected at closing on the initial funding, from the funding day (counted) to month-end (F-CORE-33). Regular interest is billed monthly in arrears from the first of the next month. | MARKET | Per diem interest from closing to month-end is standard mortgage practice (Rocket Mortgage; Virginia Housing); private DSCR lenders call it stub interest (BiggerPockets lender post). Consumer sources applied by analogy. Added 20 Nov 2026. |
| CORE-CLS-05 | Every trailing document is logged at funding: recorded security instrument, final lender's title policy, recorded assignment of leases and rents and UCC filings where used. Each is chased until received; open items are reported monthly. | JUDGMENT | Until recording, the lien rests on the title commitment and CPL. Monthly reporting matches CORE-CONC-07. Added 20 Nov 2026. |
| CORE-INS-01 | Hazard insurance at replacement cost, general liability, flood determination; builder's risk on construction. Lender named as mortgagee. | JUDGMENT | Standard; coverage amounts set per family. Flood rules \[VERIFY: 42 USC 4012a(b) mandatory purchase binds regulated lending institutions, not non-bank lenders directly; NFIP authorized only to 11 Dec 2026 (CRS R44593, 5 Oct 2026); checked 20 Nov 2026\] |
| CORE-INS-02 | Where taxes and insurance are escrowed, collect a cushion at closing of 2 months' deposits, one-sixth of the annual total (F-CORE-35). | JUDGMENT | Mirrors the consumer cap in 12 CFR 1024.17(c)(5); RESPA exempts business-purpose loans under 1024.5(b)(2), so this is a benchmark, not a legal duty \[VERIFY: eCFR, checked 20 Nov 2026\]. Set by the course owner, 20 Nov 2026 |
| CORE-INS-03 | Any building in a FEMA special flood hazard area (Zone A or V) carries flood cover of at least the lesser of the loan amount and the building's replacement cost. Use the NFIP up to its cap, plus private or excess cover above it. Lender named as mortgagee. This is what "flood where required" means in MF-GEN-10 and COM-GEN-16. | JUDGMENT | Mirrors the mandatory purchase rule for regulated lenders, which does not bind us directly \[VERIFY: 42 USC 4012a(b); NFIP caps 44 CFR 61.6; checked 20 Nov 2026\]. Set by the course owner, 20 Nov 2026 |

**Pricing structure (CORE-PRC)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-PRC-01 | Rate = tier base rate + adjusters (F-CORE-28). Points are set by tier, never below 1.00. | MARKET | Market prices by experience, FICO and leverage (Huge Capital, N.D.; Crestmont, Jun 2026); 1-3 points typical (Mortgage-Info, Oct 2026) |
| CORE-PRC-02 | RTL grid: see table below. Final rate must stay within 8.50%-12.75%. | JUDGMENT | Grid placed inside the 8.5-12% typical band (Mortgage-Info, Oct 2026; New Silver 8.5-11%, N.D.); allocation by tier is a recommendation |
| CORE-PRC-03 | Every rate, point and fee combination is tested against the state usury and fee rules before term sheet. | LEGAL | \[VERIFY: State Law Table, usury and fee columns, SLT-XX-01/-02; checked 20 Nov 2026\] |
| CORE-PRC-04 | Multifamily and commercial grids are set in their family policies. | JUDGMENT | Different spread drivers; see later parts |

**RTL pricing grid (illustrative course figures)**

| Experience tier | Base rate | Points |
| --- | --- | --- |
| Tier 3 (10+) | 9.50% | 1.00 |
| Tier 2 (5-9) | 10.00% | 1.50 |
| Tier 1 (1-4) | 10.75% | 2.00 |
| Tier 0 (0) | 11.50% | 2.50 |

| Adjuster | Add to rate |
| --- | --- |
| Qualifying FICO 680-699 | +0.50% |
| Leverage within 2.5 points of the product maximum | +0.25% |
| Ground-up construction | +0.75% |

**F-CORE-28: Note rate**

```latex
Rate = \min(\max(BaseRate_{tier} + \sum Adjusters,\ 8.50\%),\ 12.75\%)
```

1. Inputs: Tier 1 guarantor, FICO 690, leverage 1.0 point under maximum, rehab project.
2. Substitute: 10.75% + 0.50% + 0.25% + 0.00% = 11.50%.
3. Bounds: 11.50% is between 8.50% and 12.75%, so it stands.
4. Result: 11.500% note rate and 2.00 points. Feeds CORE-PRC-02.

**Extensions and default (CORE-SVC)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-SVC-01 | An extension needs: no default, payments current, family progress test met, fee paid, and an updated value if requested. | JUDGMENT | Servicers evaluate extension requests against set terms (Mayer Brown, Jun 2023, OLD) |
| CORE-SVC-02 | RTL extension: 3 months per extension, at most 2, fee 0.50 point of the commitment each. | JUDGMENT | Market 0.5-1 point per 3-6 months (Mortgage-Info, Oct 2026, single source); low end of the fee is matched with the short term |
| CORE-SVC-03 | Default interest = note rate + 5.00%, capped by state usury. | JUDGMENT + LEGAL | Not sourced in Core research. \[VERIFY: State Law Table, default interest column; CA bars it on the full balance before maturity (SLT-CA-01); checked 20 Nov 2026\] |
| CORE-SVC-04 | Late fee = 5% of the late installment, charged once, only after 10 days. Never charged on the full balance or the balloon at maturity. Where the State Law Table shows a lower cap, the cap applies. | MARKET + LEGAL | Lenders often charge 5% of the unpaid installment (Richards Layton & Finger, Delaware Banker, Jun 2026). California broker-arranged loans cap at 10% after 10 days (B&P 10242.5); NC caps 24-1.1 loans at 4% (SLT-NC-01). Fees on the whole balance are penalties in California (Honchariw, 2022). Added 20 Nov 2026. \[VERIFY: State Law Table; checked 20 Nov 2026\] |
| CORE-SVC-05 | Before each draw: third-party inspection of work in place against budget lines; conditional lien waivers for this draw and unconditional waivers for the last; title date-down with no new liens; insurance in force; loan in balance (F-RES-25), with any shortfall deposited by the borrower first. | MARKET | Each draw needs inspection, budget analysis, lien waivers and compliance review (Built, 2025); date-down confirming no mechanics' liens (Live Oak Bank draw requirements, N.D.); title update per draw (Rabbet draw package standard). Added 20 Nov 2026 with C12. |
| CORE-SVC-06 | Reporting: MF and COM rent roll and operating statement monthly within 45 days of month-end; borrower and guarantor statements annually within 90 days of year-end; insurance evidence before expiry; tax payment confirmed each cycle unless escrowed; site inspection at each draw and annually. A late item is a reporting default after written notice. | MARKET + JUDGMENT | Sample loan agreements: monthly rent roll and operating statement 45 days after month-end; annual statements 90 days after year-end (Law Insider clause samples). Annual inspection mirrors agency surveillance (Fannie Mae Multifamily Guide Part V Ch. 5); frequency is JUDGMENT. Added 20 Nov 2026. |
| CORE-SVC-07 | Risk rating at each monthly review: 1 Pass; 2 Pass/Watch (a trigger fired, still performing); 3 Special mention (potential weakness); 4 Substandard (well-defined weakness, loss possible); 5 Doubtful/Loss. Ratings 2-5 go on the watch list with an action and owner; reviewed monthly. Maturity within 90 days with no confirmed exit is at least a 2 (90 days is JUDGMENT, decided 20 Nov 2026). | LEGAL + MARKET | Regulators share the scale special mention, substandard, doubtful, loss; all else is pass; many banks split pass further (OCC Bulletin 2026-56, 10 Nov 2026). Refinance risk reviewed near maturity (OCC Bulletin 2024-29). Added 20 Nov 2026. \[VERIFY: OCC bulletins; checked 20 Nov 2026\] |
| CORE-DEF-01 | Before any workout discussion, the borrower and every guarantor sign a pre-negotiation letter: talks, partial payments and delays waive no rights; only a signed written agreement changes the loan. | MARKET | Fannie Mae requires a signed pre-negotiation letter before any workout discussion, to block oral-modification claims (Fannie Mae pre-negotiation form instructions, N.D.). Added 20 Nov 2026 with C13. |
| CORE-DEF-02 | Every resolution memo compares forbearance, modification, deed in lieu and foreclosure by F-CORE-23 net loss, including lost interest, legal, receiver and sale costs and income collected. Guarantor recovery is shown separately. Recommend the lowest expected loss, or explain why not. | JUDGMENT | Regulators view prudent accommodations and workouts as often in the interest of lender and borrower (Interagency Policy Statement, 29 Jun 2023). Added 20 Nov 2026. |
| CORE-DEF-03 | Forbearance or modification is written and time-limited, and needs: a signed pre-negotiation letter; guarantor reaffirmation; all net operating income paid to the lender; current taxes and insurance; a plan with dated milestones. Default interest is waived only on full performance. Approval per the authority matrix for the original loan. | MARKET + JUDGMENT | Fannie Mae makes remittance of net operating income a condition of workout talks (pre-negotiation form, N.D.). Other conditions JUDGMENT. Added 20 Nov 2026. |
| CORE-DEF-04 | A deed in lieu is accepted only after: a title, UCC and judgment search with no junior liens or each released; a borrower estoppel affidavit; anti-merger wording and, where available, a non-merger title endorsement; and an environmental review. Otherwise foreclose. | MARKET | Junior liens are not extinguished by a deed in lieu (WealthManagement.com; Blank Rome); estoppel affidavit required by title insurers (Virtual Underwriter). New York may bar non-merger endorsements (First American blog). Added 20 Nov 2026. California offers CLTA 107.11 (non-merger after lender acquires title), which needs anti-merger recitals in the deed of trust and note (Stewart guideline); availability elsewhere varies by insurer. \[VERIFY: insurer for OH, NC, IN\] |
| CORE-DEF-05 | In judicial-foreclosure states, seek a receiver on multifamily and commercial loans at filing, where the loan documents allow. In power-of-sale states, seek one if the sale will take longer than the property can safely run unmanaged. | MARKET | Without a receiver the mortgagor keeps possession and rents during foreclosure (National Law Review, Wisconsin). Added 20 Nov 2026. Written consent in the loan documents is a statutory ground in OH (ORC 2735.01(A)(2)(b)), IN (IC 32-30-5-1) and NC (G.S. 1-507.24(f)(2)); CA uses CCP 564(b)(11). So every deed of trust and mortgage must include receiver consent. \[VERIFY: State Law Table group (b) foreclosure column; checked 20 Nov 2026\] |
| CORE-DEF-06 | REO at title: new appraisal; record at F-CORE-42 (fair value less cost to sell); secure, insure and manage; list with a broker under a written sale plan; re-test value quarterly and write down if it falls. Every offer goes to the approver for the original loan. | LEGAL + JUDGMENT | Banks record foreclosed real estate at fair value less cost to sell; any excess loan amount is a loss (FDIC FIL-62-2008; Federal Reserve OREO Q&A). Quarterly re-test is JUDGMENT. Added 20 Nov 2026. |

## Core Part 2D: Concentration, exceptions and approval authority

Sponsor exposure is capped by experience tier, and product, state and market buckets are capped as shares of the book. Every exception is logged with a rule ID. Approval authority rises from senior underwriter to credit committee, and no one may approve an exception to a legal or KYC rule.

**Concentration limits**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-CONC-01 | Aggregate sponsor exposure (F-CORE-29) caps: Tier 0 $1,000,000 and 2 open loans; Tier 1 $3,000,000 and 5; Tier 2 $7,500,000 and 10; Tier 3 $15,000,000 and 20. Above these, committee only. | JUDGMENT | Securitizations cap borrower concentration but numbers vary by issuer (KBRA release, 30 Jul 2026) |
| CORE-CONC-02 | No sponsor above 5% of total portfolio commitments. | JUDGMENT | Not published numerically (KBRA, Jul 2026) |
| CORE-CONC-03 | Ground-up construction at most 25% of Residential commitments. | JUDGMENT | One rated pool held 40.1% ground-up (American Banker, NRMLT, N.D.); 25% is a conservative training cap |
| CORE-CONC-04 | Bridge with no rehab at most 25% of Residential commitments. | JUDGMENT | Same pool held 24.5% bridge-only (American Banker, N.D.) |
| CORE-CONC-05 | 5-9 unit properties at most 10% of Residential commitments. | JUDGMENT | KBRA reportedly allows up to 10% small multifamily under 10 units (AAPL, 2026; single source) |
| CORE-CONC-06 | One state at most 25%, one MSA at most 15% of total commitments. | JUDGMENT | Agencies focus on geographic concentration (NPLA, KBRA view, 2026); figures not published |
| CORE-CONC-07 | Buckets are reported monthly. A breached bucket takes no new loans without committee approval. | JUDGMENT | Aggregate tracking expected by examiners (OCC, Mar 2022, OLD) |

**F-CORE-29: Aggregate sponsor exposure**

```latex
SponsorExposure = \sum Commitments_{all\ loans\ to\ entities\ the\ sponsor\ controls\ or\ guarantees}
```

1. Inputs: new loan $340,000; two open loans $250,000 and $350,000.
2. Work: $340,000 + $250,000 + $350,000 = $940,000; 3 open loans.
3. Test: Tier 1 cap $3,000,000 and 5 loans. CORE-CONC-01 passes.

**F-CORE-30: Bucket concentration**

```latex
Bucket\% = \frac{Commitments_{bucket}}{Commitments_{total\ for\ that\ base}}
```

1. Inputs: ground-up commitments $9,000,000; Residential commitments $40,000,000.
2. Work: $9,000,000 ÷ $40,000,000 = 22.5%.
3. Test: 22.5% ≤ 25.0%. CORE-CONC-03 passes with 2.5 points of room ($1,000,000).

**Exceptions**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-EXC-01 | An exception is any approval outside a rule in this policy. It is approved before closing, never after. | MARKET | Examiners expect exceptions documented, approved and reported (OCC CRE Lending, Mar 2022, OLD but current) |
| CORE-EXC-02 | Each exception logs: rule ID, policy value, approved value, at least two compensating factors, approver and date. | MARKET | Same OCC source; compensating-factor count is JUDGMENT |
| CORE-EXC-03 | No exception is ever allowed to LEGAL rules, KYC or OFAC rules, CORE-BP rules or the fraud bar in CORE-BOR-09. | JUDGMENT | These protect compliance status, not just credit risk |
| CORE-EXC-04 | At most two exceptions per loan. | JUDGMENT | Layered exceptions compound risk; not sourced numerically |
| CORE-EXC-05 | If exceptions exceed 10% of new loans by count in a quarter, the Chief Credit Officer reviews the policy. | JUDGMENT | Rising exceptions may signal relaxed underwriting (OCC, Mar 2022) |

Accepted compensating factors: leverage at least 10 points under the maximum; liquidity at least 2x F-CORE-25; qualifying FICO 760 or more; Tier 3 experience; extra collateral; at least 3 repaid loans with us and no late payments.

**Approval authority matrix (CORE-AUTH-01)**

Every approval needs a written underwriter recommendation and a separate approver. The approver cannot be the underwriter of record. BASIS: JUDGMENT, framed by OCC loan-approval guidance (Mar 2022).

| Approver | Max single loan (commitment) | Max sponsor exposure (F-CORE-29) | Exceptions allowed | Must go higher when |
| --- | --- | --- | --- | --- |
| Senior underwriter (holds family certificate) | $500,000, Residential only | $1,000,000 | None | Any exception; any Multifamily or Commercial loan |
| Credit officer | $2,000,000 | $5,000,000 | One: leverage +2.5 points; DSCR −0.05x; FICO −20; liquidity −10% of requirement | Tier 0 ground-up; first loan in a new state |
| Credit committee (3 voters incl. Chief Credit Officer) | Above $2,000,000 | Above $5,000,000 | Up to two: leverage +5.0 points; DSCR −0.10x; FICO −40; liquidity −25% of requirement | Beyond these limits the loan is declined; no one has authority |

Committee approval is also required, at any size, for: related-party or employee loans, Tier 0 ground-up, and any CONC breach.

**Approval process (added 20 Nov 2026 with C14)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| CORE-AUTH-02 | Every credit memo has eleven sections in order: request and recommendation; borrower and guarantors; property and valuation; cash flow or budget; sizing table with rule and formula IDs; exit with cushion; state law check; portfolio impact; risks paired with mitigants; risk rating; conditions to close. | MARKET | Regulators expect a credit approval document before origination, renewal, annual review or workout (NCUA Examiner's Guide); memos end in a rating and recommendation (Abrigo) |
| CORE-AUTH-03 | Committee: three voters including the Chief Credit Officer; the underwriter presents but does not vote. Two votes decide; the CCO may veto an approval, not a decline. Minutes record each vote, dissent with reasons, and every condition. A tabled loan returns with written answers. | JUDGMENT | Separation of underwriting and approval follows CORE-AUTH-01 and OCC loan-approval guidance (Mar 2022) |
| CORE-AUTH-04 | A reviewer independent of underwriting re-tests a sample of new loans each year, including every committee loan: sizing, rule citations and risk rating. Findings go to the CCO; a critical credit error (Main Section 3) goes to committee within one month. | MARKET + JUDGMENT | An independent source, usually loan review, should periodically validate ratings (Federal Reserve, credit risk guidance); sample and timing are JUDGMENT |

---

**Core Part 2 complete. Say "continue" for Core Part 3 (decisions and summary).**

## Core Part 3A: Policy decisions

Sixteen decisions cover all 34 JUDGMENT rules and every Core source conflict. Option A is always the Part 2 baseline. \*\*Decided 18 Nov 2026: all 16 set to the recommended option A.\*\*

| ID | Rules covered | Options: pros (+) and cons (−) | Recommend |
| --- | --- | --- | --- |
| D-CORE-01 | CORE-BOR-03 (conflict: 20% vs 25%) | **A** 20% owners guarantee: + more people on the hook; − more paperwork. **B** 25%: + matches FinCEN CDD prong; − five equal 20% owners would leave no guarantor. **C** 10%: + widest net; − off-market, slows closings | A |
| D-CORE-02 | CORE-BOR-02, CORE-BOR-04 | **A** Single-purpose entity; one guarantor passes every test alone: + simple to teach and audit; − turns away strong teams. **B** Tests may be met by guarantors combined: + matches market practice; − harder to assess who really stands behind the loan | A |
| D-CORE-03 | CORE-BOR-07 | **A** Mid-score, report under 90 days: + current data; − more re-pulls. **B** Under 120 days: + fewer re-pulls; − staler credit | A |
| D-CORE-04 | CORE-BOR-08 (conflict: 24 months vs 7 years) | **A** 48 months: + middle of the range. **B** 24 months: + matches some RTL lenders; − weak for training a conservative eye. **C** 84 months: + matches institutional bridge; − excludes many investors | A |
| D-CORE-05 | CORE-BOR-09, CORE-BOR-10, CORE-KYC-03 (conflict: 5-year vs any felony) | **A** Fraud-type felony bars for life; others in 10 years to credit officer; $25,000 lien threshold; 10-year search: + balanced. **B** Any felony bars: + simplest; − fair-chance law risk \[VERIFY\]. **C** Only 5-year lookback: + market-friendly; − misses old fraud | A |
| D-CORE-06 | CORE-BOR-11, CORE-BOR-13 | **A** Unused credit lines 0%; two statements: + only real cash counts. **B** Lines at 50%, one statement: + matches one lender; − counts borrowed money as liquidity | A |
| D-CORE-07 | CORE-BOR-12 | **A** Greater of 10% or 6 months' interest, plus 5% of other loans: + scales with sponsor exposure; − extra arithmetic. **B** 10% of commitment only: + simplest, bridge norm; − ignores portfolio. **C** 6 months' interest only: + ties to carry; − low on cheap loans | A |
| D-CORE-08 | CORE-BOR-14 (conflict: 10% vs 1.0x) | **A** 25% Residential, 100% MF/COM: + fits loan sizes. **B** 100% for all: + one rule; − blocks most RTL borrowers. **C** 10% Residential: + market low end; − near meaningless | A |
| D-CORE-09 | CORE-DOC-01, CORE-DOC-03 | **A** Full recourse on all Residential; completion guaranty on future funding: + strongest recovery. **B** Non-recourse with carve-outs for Tier 2-3: + competitive; − more complex to teach. **C** Partial (25%) recourse: + middle ground; − rare in RTL | A |
| D-CORE-10 | CORE-VAL-02, CORE-VAL-03, CORE-CLS-01, CORE-INS-01 | **A** Appraisal under 120 days; desk review on every loan: + catches inflated values. **B** Under 180 days; desk review above $1,000,000 only: + cheaper, faster; − weaker on small loans, where RTL volume is | A |
| D-CORE-11 | CORE-PRC-02, CORE-PRC-04 | **A** Tier grid plus adjusters (8.50-12.75%): + teaches risk-based pricing. **B** One rate, points vary by tier: + simple; − hides risk. **C** Full FICO × leverage matrix: + realistic; − too much detail for a course | A |
| D-CORE-12 | CORE-SVC-01, CORE-SVC-02, CORE-SVC-03 | **A** Two 3-month extensions at 0.50 point; default rate +5.00%: + frequent check-ins. **B** One 6-month extension at 1.00 point: + less admin; − longer unchecked time. **C** Default rate +3.00%: + less usury risk; − weaker incentive | A |
| D-CORE-13 | CORE-CONC-01, CORE-CONC-02 | **A** Caps by tier ($1M to $15M) and 5% of book: + links exposure to skill. **B** Flat $5,000,000 per sponsor: + simple; − too high for beginners. **C** Exposure up to 10x liquidity: + ties to balance sheet; − not seen in sources | A |
| D-CORE-14 | CORE-CONC-03 to CORE-CONC-07 | **A** Ground-up 25%, no-rehab 25%, 5-9 units 10%, state 25%, MSA 15%: + conservative. **B** Ground-up 40%, no-rehab 30%, state 35%, MSA 20%: + matches one rated pool; − more construction risk | A |
| D-CORE-15 | CORE-EXC-03, CORE-EXC-04, CORE-EXC-05 | **A** No exceptions to legal or KYC rules; at most 2 per loan; review at 10%: + firm limits. **B** At most 1 per loan; review at 5%: + stricter; − more declines | A |
| D-CORE-16 | CORE-AUTH-01 | **A** $500k / $2M / committee: + lets seniors work. **B** $250k / $1M / committee: + tighter control; − committee overload. **C** Committee approves every loan in training: + maximum oversight; − unrealistic for OJT | A |

**Source conflicts handled elsewhere.** Lima One's experience rule (no experience vs one exit in 36 months) only affects evidence, not the baseline. Ground-up minimum experience (1 vs 5 projects) is decided in Residential Part 3.

## Core Part 3B: Summary of Core limits

**Model policy for training - not for live lending decisions.** As of 18 Nov 2026. All figures are the confirmed Core baselines (Part 3A, all option A, decided 18 Nov 2026).

| Area | Limit | Rule ID | BASIS |
| --- | --- | --- | --- |
| Borrower | US LLC, LP or corporation; real estate purpose only | CORE-BOR-01, -02 | MARKET; JUDGMENT |
| Guarantors | Every 20% owner plus managing member | CORE-BOR-03 | JUDGMENT |
| Qualifying guarantor FICO | 680 mid-score; 700 if Tier 0; others 620 | CORE-BOR-06 | MARKET |
| Credit report age | 90 days at closing | CORE-BOR-07 | JUDGMENT |
| Credit events | None in 48 months | CORE-BOR-08 | JUDGMENT |
| Felony | Fraud-type: never; other: 10 years to credit officer | CORE-BOR-09 | JUDGMENT |
| Liens and judgments | Over $25,000 resolved by closing | CORE-BOR-10 | JUDGMENT |
| Post-closing liquidity | Max(10% of commitment, 6 months' interest) + 5% of other open commitments | CORE-BOR-12 (F-CORE-25) | JUDGMENT |
| Liquidity haircuts | Cash 100%; securities 70%; retirement 70%; credit lines 0% | CORE-BOR-11 (F-CORE-24) | JUDGMENT |
| Adjusted net worth | 25% of commitment (Residential); 100% (MF, COM) | CORE-BOR-14 (F-CORE-26) | JUDGMENT |
| Experience | 36-month lookback; Tier 0 / 1-4 / 5-9 / 10+ | CORE-BOR-15, -16 | MARKET |
| Recourse | Full (Residential); non-recourse with carve-outs (MF, COM) | CORE-DOC-01, -02 | JUDGMENT; MARKET |
| Appraisal | Lender-ordered; 120 days; desk review on all | CORE-VAL-01 to -03 | MARKET; JUDGMENT |
| RTL rate band | 8.50%-12.75% | CORE-PRC-02 (F-CORE-28) | JUDGMENT |
| RTL base rate / points | Tier 3 9.50% / 1.00; Tier 2 10.00% / 1.50; Tier 1 10.75% / 2.00; Tier 0 11.50% / 2.50 | CORE-PRC-02 | JUDGMENT |
| RTL extensions | 2 × 3 months at 0.50 point each | CORE-SVC-02 | JUDGMENT |
| Default rate | Note rate + 5.00%, usury-capped | CORE-SVC-03 | JUDGMENT; LEGAL |
| Sponsor exposure | Tier 0 $1M / 2 loans; Tier 1 $3M / 5; Tier 2 $7.5M / 10; Tier 3 $15M / 20; 5% of book | CORE-CONC-01, -02 (F-CORE-29) | JUDGMENT |
| Residential buckets | Ground-up 25%; no-rehab 25%; 5-9 units 10% | CORE-CONC-03 to -05 (F-CORE-30) | JUDGMENT |
| Geography | State 25%; MSA 15% | CORE-CONC-06 | JUDGMENT |
| Exceptions | Max 2 per loan; none on LEGAL, KYC, BP rules; review above 10% | CORE-EXC-03 to -05 | JUDGMENT |
| Senior underwriter | $500k loan; $1M sponsor; no exceptions; Residential only | CORE-AUTH-01 | JUDGMENT |
| Credit officer | $2M loan; $5M sponsor; 1 exception: +2.5 pts LTV, −0.05x DSCR, −20 FICO, −10% liquidity | CORE-AUTH-01 | JUDGMENT |
| Credit committee | Above those; 2 exceptions: +5.0 pts, −0.10x, −40 FICO, −25% liquidity | CORE-AUTH-01 | JUDGMENT |

---

**Core complete. Residential follows.**

# Residential (1-4 units)

## Residential Part 1: Overview of findings

Residential evidence is rich for fix-and-flip and DSCR rentals and thin for land and lots. Short-term loans cluster at 85-90% loan-to-cost and 70-75% loan-to-ARV. DSCR rentals cluster at a 1.00x minimum with 75-80% purchase LTV. Every table below gives low, typical and high values, with flags from the Core Part 1 key.

**Rating-agency anchors (securitized pools, not single-loan limits)**

| Pool | Agency | Key figures | Date |
| --- | --- | --- | --- |
| Fidelis 2026-RTL1 (RTL) | Morningstar DBRS | Eligibility: minimum WA FICO 730; max LTC 85.0%; max as-repaired LTV 70% | 2026 |
| Castlelake RTL pool | KBRA | WA FICO 742; WA LTC 60.8%; WA as-repaired LTV 63.9% | 2026 |
| NRMLT RTL pool | Morningstar DBRS | 40.1% ground-up; 24.5% bridge-only | N.D. |
| PMT Loan Trust 2026-DSC1 (DSCR) | KBRA | WA original CLTV 65.5%; 13.0% interest-only; all loans business-purpose and exempt from ATR/QM | 19 Oct 2026 |
| DBRS RTL methodology update | Morningstar DBRS | Stricter appraisal validation; ground-up risk split into entitlement and execution | May 2026 |

**Biggest gaps.** Land and lot loans have fewer than 5 published lender programs. Release prices on blanket loans are rarely published. Extension fees appear in few sources.

## Residential Part 1A: Fix-and-flip

Fix-and-flip lenders fund 85-90% of purchase plus 100% of rehab, capped at 70-75% of ARV, for 12 months at 8.5-12% plus 1-3 points.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | 1-4 unit SFR, condo, townhome; no rural | Same; some exclude rural or require 3+ experience there | Adds 5+ unit and mixed-use (some lenders) | CIVIC brochure (N.D.); OfferMarket loan page, Apr 2025; FlipperForce on CIVIC (N.D.) |
| Minimum ARV / value | $50,000 as-is | $100,000 ARV | n/a | BiggerPockets lender term sheet (N.D.); OfferMarket, Apr 2025; RCN, 2026 |
| Purchase advance (LTP) | 75-80% (beginners) | 85-90% | 95% (MAX) | RCN blog, Feb 2026; lender term sheet (N.D.); Lima One 90% LTP via FlipperForce (N.D.); Bond Street 95% (N.D., MAX) |
| Rehab funded | 100% | 100% | 100% | CIVIC (N.D.); Anchor Loans (N.D.); RCN, 2026 |
| Max LTC | 75% (beginners) | 85-90% | 92.5-95% (MAX) | RCN Feb 2026; New Silver 90% and CoreVest 93.5% via CrowdfundedWealth, Nov 2026; Fidelis pool cap 85% (2026); Kiavi 95% (FlipperForce, N.D., MAX); Anchor 95% (N.D., MAX) |
| Max loan-to-ARV | 60-70% | 70-75% | 80% (MAX) | RCN tiers 60-75% (CrowdfundedWealth, Nov 2026); Groundfloor 70% (same); CIVIC 75% (N.D.); New Silver 75%; Fidelis pool 70%; Kiavi 80% (MAX) |
| Min FICO | 600 | 650-680 | 700 for beginners | See Core Part 1A |
| Experience | None | 0-1 exit in 36 months | 1-2 in 3 years | See Core Part 1B |
| Term | 9 months | 12 months | 18-24 months | LendingOne 9-24 (FlipperForce, N.D.); CIVIC 12, 18 at discretion; Anchor 12 (N.D.) |
| Interest charged | On full commitment ("full boat") under $100,000 | On drawn funds only | n/a | OfferMarket, Apr 2025; LendingOne (FlipperForce, N.D.) |
| Rate | 7.75% (MAX) | 8.5-12% | 14% | Kiavi, Mar 2026; Mortgage-Info, Oct 2026; Huge Capital (N.D.) |
| Points | 0 | 1-2 | 3-4 | Anchor 1.00-1.75 (N.D.); New Silver 1-1.75%; Mortgage-Info 1-3, Oct 2026; Ridge Street 1-4% (N.D.) |
| Extensions | 2 × 3 months | 0.5-1 point per 3-6 months | 1.5% for a second 3 months | New Silver (help page, N.D.); Mortgage-Info, Oct 2026; OfferMarket stabilized bridge (N.D.) |
| Interest reserve | None | None for experienced; may be required for beginners | Required | OfferMarket funding guide (N.D.) |
| Contingency in budget | n/a | 10-15% | n/a | RCN blog, 2026 |
| Recourse | Non-recourse available | Full recourse | Full recourse only | Lima One via FlipperForce (N.D.); CIVIC (N.D.); RGC Capital, Jul 2022 (OLD) |
| Third-party reports | BPO accepted instead of appraisal | Appraisal with as-is and ARV; draw inspections | Plus desk review | FlipperForce on CIVIC (N.D.); DBRS appraisal validation, May 2026 |
| Prepayment penalty | None | None | n/a | Lima One bridge (FlipperForce, N.D.); LoanFunders (N.D.) |

## Residential Part 1B: Bridge with no rehab (stabilized bridge)

A no-rehab bridge carries a turnkey 1-4 unit home to sale or DSCR refinance. Lenders cap it near 70% of as-is value for 12 months.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | 1-4 unit, warrantable condo, townhome, PUD | Stabilized, condition C2 or better | n/a | CIVIC brochure (N.D.); Peersense, 19 Mar 2026 |
| Max LTV, purchase (as-is) | 65-70% | 70-75% | 80% LTP (MAX) | OfferMarket stabilized bridge 70% (N.D.); QuickLend 70% (N.D.); CIVIC 75% if owned 6+ months (N.D.); Peersense 70% LTV / 85% LTC, Mar 2026; Lima One 80% (FlipperForce, N.D., MAX) |
| Max LTV, rate-term refinance | 65% | 65-75% | 75% | Lender forum post (N.D.); Lima One 75% (N.D.) |
| Max LTV, cash-out | 50% | 65% | 65% | Lender term sheet (N.D.); Lima One 65% (N.D.) |
| Min FICO | 660 | 660 | 680 | OfferMarket (N.D.); CIVIC 660 (N.D.); Peersense 660, Mar 2026 |
| Exit DSCR test | None (sale exit) | 1.10x at take-out rate (rental exit) | n/a | Peersense, Mar 2026 (single source) |
| Term | 12 months | 12 months | 18-24 months | OfferMarket (N.D.); CIVIC (N.D.); Peersense, Mar 2026 |
| Extensions | Up to 6 months | 1% for first 3 months; 1.5% for next 3 | n/a | OfferMarket stabilized bridge (N.D.; single source) |
| Rate | 9.00% | 9.25-11.5% | 11.5% | Peersense, Mar 2026; Anchor Loans Nashville page 9.125-11.5% (2026) |
| Points | n/a | Same as fix-and-flip | n/a | No separate source; see 1A |
| Prepayment penalty | None | None | n/a | Fidelity Bridge Financial (N.D.); Lima One (N.D.) |

## Residential Part 1C: Ground-up construction

Ground-up lenders advance 60-75% of land plus 100% of construction, capped at 85-90% LTC and 70-75% of as-completed value. Experience minimums conflict sharply, from 1 to 5 completed builds.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | Shovel-ready 1-4 unit SFR, townhome, condo | Permitted or near-permitted lots; no rural, mixed-use or 5+ | n/a | New Silver (help page, N.D.); CIVIC ground-up page (N.D.) |
| Land advance | 60% of land value if unpermitted | 70-75% of lower of land value or price | 75% | CIVIC (N.D.); RGC, Jul 2022 (OLD); Rehab Financial 70% (N.D.); Peersense 75%, Mar 2026 |
| Construction funded | 100% | 100% | 100% | CIVIC (N.D.); Peersense, Mar 2026 |
| Max LTC | 60% (FICO 660-699) | 85-90% | 95% (MAX) | LoanFunders (N.D.); CIVIC 85-90% by experience (N.D.); New Silver 90% (N.D.); LendingOne 90% (N.D., MAX); Peersense 85-90%, Mar 2026; PPF "special" 95% (N.D., MAX) |
| Max loan-to-completed value | 70% | 70-75% | 75% | Rehab Financial 70% ACV (N.D.); New Silver 75% (N.D.); PPF 75% (N.D.) |
| Borrower equity | $15,000 or 25% of construction budget, whichever is greater | 10-15% of total cost | n/a | Rehab Financial (N.D.); Peersense, Mar 2026 |
| Experience (ground-up builds) | 1 in 36 months | 2-3 | 5 | LendingOne (N.D.); Ridge Street, May 2026; OfferMarket tiers (N.D.); New Silver 2 in 3 years (N.D.); Rehab Financial 3 (N.D.); CIVIC 3+ for top tier (N.D.); Lima One 5 (FlipperForce, N.D.) |
| Min FICO | 600 (broker network) | 650-660 | 700 for best leverage | Huge Capital (N.D.); New Silver 650; LoanFunders 660; CIVIC 660 |
| Term | 12 months | 12-24 months | 24 months | CIVIC 12/18/24 (N.D.); Peersense, Mar 2026 |
| Extensions | n/a | 2 × 3 months | n/a | New Silver (N.D.; single source) |
| Rate | 8.25% (MAX) | 9-14% | 14% | LoanFunders (N.D., MAX); REInvestorGuide, 2026; Huge Capital example 9.5% (N.D.) |
| Interest reserve | Funded interest inside project cost | Common | n/a | PPF term sheet builder (N.D.); Real Lending, May 2026 |
| Hard-cost contingency | 10% | 10-15% | 15% | CLS CRE, bridge-to-perm (N.D.); LendSure, Jun 2026 |
| Recourse | n/a | Full recourse | Full recourse only | CIVIC (N.D.) |
| Third-party reports | As-completed appraisal on plans and specs | Plus budget review, permits, draw inspections | Plus entitlement review | REInvestorGuide, 2026; DBRS ground-up split into entitlement and execution risk, May 2026 |

## Residential Part 1D: Land and lots

**Thin evidence: fewer than 5 lender programs.** Private and specialty lenders lend 50-65% on entitled land, with full recourse and 12-36 month terms. Raw land is rarely financed.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible land | Entitled lots ready for 1-4 construction | Entitled or partly entitled | Raw land (rare) | CLS CRE, land loans (N.D.); Janover, Land Financing (2025) |
| Max LTV | 50% | 60-65% | 70-75% (bank, development land) | CLS CRE entitled land 50-65%, Jul 2026; CIVIC 60% unpermitted (N.D.); Crestmont, community bank 70-75% (2026) |
| Bank supervisory reference | Raw land 65% | Land development 75% | n/a | Interagency real estate lending guidelines, in OCC CRE Lending handbook, Mar 2022 (OLD). Figures confirmed 18 Nov 2026 against the FDIC version, 12 CFR Part 365 Appendix A (eCFR): raw land 65%, land development 75%, commercial construction 80%, 1-4 family construction 85%, improved property 85%. \[VERIFY: 12 CFR Part 34, Appendix A to Subpart D\] |
| Term | 12 months | 12-36 months | 36 months | CLS CRE (N.D.) |
| Rate | 8% | 8-14% | 14% | Crestmont, subdivision loans 2026 |
| Recourse | n/a | Full recourse | n/a | CLS CRE, Jul 2026 |
| Third-party reports | Appraisal | Plus survey, utility access, zoning and entitlement proof | Plus feasibility studies (water, septic) | Vaster, Private Land Financing, 2025 |
| Points, extensions | Not found | Not found | Not found | No source |

## Residential Part 1E: DSCR rental, single property

Most programs size on gross rent divided by PITIA, with a 1.00x minimum. Purchase LTV runs 75-80%, cash-out 70-75%, and reserves step from 3 to 12 months by loan size. Rating agencies note that DSCR calculations still vary between lenders.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| DSCR calculation | Gross rent ÷ ITIA (interest-only loans) | Gross rent ÷ PITIA (fully amortizing) | Rent less management fee ÷ PITIA | AD Mortgage DSCR guide, 14 Aug 2026; Sharp N matrix, Sep 2025; LoanStream 5-8 unit matrix, Feb 2025; CIVIC 1.05x gross rent ÷ PITIA (N.D.) |
| Rent used | Lower of lease and market rent (purchase) | Market rent schedule (Form 1007) or lease | Greater of lease and 1007 (refinance) | Plaza DSCR comparison, 13 Jan 2026; DBRS: "calculations still vary", May 2026 |
| Min DSCR | 0.75x (with lower LTV) | 1.00x | 1.20-1.25x | Spring EQ, 12 Jan 2026; AD Mortgage, Aug 2026; Homebridge, Jul 2026; Plaza, Jan 2026; Lima One 1.00 (N.D.); CIVIC 1.05; CoreVest sizes to 1.20x (FAQ, N.D.); OfferMarket 1.25x under $150k (N.D.) |
| Max LTV, purchase | 70% (first-time investor) | 75-80% | 85% (MAX, FICO 740+) | Plaza, Jan 2026; eLEND 80%, May 2026; Homebridge 80%, Jul 2026; Spring EQ 80%, Jan 2026; The Lender NONI+ 85%, Jul 2025 |
| Max LTV, rate-term | 70% | 75-80% | 80% | Same sources |
| Max LTV, cash-out | 60% (FICO 660-679) | 70-75% | 75% | Spring EQ, Jan 2026; eLEND 75%; Homebridge 75% |
| Max cash in hand | $250,000 | $500,000 | $750,000 | FundLoans Spectrum, Apr 2026; Spring EQ; Windsor, Feb 2026; Homebridge |
| Min FICO | 620 | 660-680 | 700 (first-time investor) | OfferMarket floor 640 (N.D.); Spring EQ 660; FundLoans 660; Plaza 680 and 700 first-time (Jan 2026) |
| Interest-only | Not allowed | Allowed with 5% LTV cut, often 700+ FICO | n/a | Plaza, Jan 2026; Windsor, Feb 2026 |
| Reserves (months of PITIA) | 0 (DSCR 1.25x+) | 3 months to $1M; 6 to $2M; 12 above | 6-12 if DSCR under 1.00x | AD Mortgage, Aug 2026; Plaza matrix, Jan 2026; OfferMarket (N.D.) |
| Credit events | 24 months | 24-36 months | 36 months | FundLoans Spectrum, Apr 2026; LoanStream 5-8 unit, Feb 2025 |
| Vacant property | Ineligible below 1.00x | 70% max LTV or 5% cut | n/a | The Lender NONI+, Jul 2025; eLEND, May 2026; OfferMarket (N.D.) |
| Rate | 6.0% | 6.0-8.0% | 8.75% | RentalRealEstate, Apr 2026; Griffin from 6.375%, Aug 2026 |
| Spread vs agency investor loans | 0.5 point | 1-3 points | 3 points | REInvestorGuide (N.D.); MortgageQuote, 2026 |
| Term | 30-year fixed | 30-year fixed or 5/6, 7/6 ARM | 40-year with 10-year IO | Spring EQ; Plaza; CIVIC (N.D.) |
| Prepayment penalty | None (priced up) | 5-year step-down 5/4/3/2/1 | 6 months' interest on amount over 20% | Spring EQ, Jan 2026; AD Mortgage, Aug 2026. State limits apply \[VERIFY: State Law Table, prepayment column, SLT-XX-01\] |
| Pool leverage (rated) | n/a | WA CLTV 65.5% | n/a | KBRA, PMT 2026-DSC1, 19 Oct 2026 |

## Residential Part 1F: DSCR portfolio and blanket loans

Blanket programs lend 70-80% of value on 2-20+ properties under one lien. Only 4 of 10 published programs state a minimum DSCR, and release terms are set loan by loan.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Minimum properties | 2 | 5 | 20 units | CrowdfundedWealth, Blanket Loans, 7 Oct 2026 (Lima One 2; CoreVest 5; RCN 20); Peersense 5+, Mar 2026 |
| Max LTV | 65% (foreign nationals) | 70-75% | 80% | CoreVest 75%, 70% on 3-year term (N.D.); RCN 70%; Lima One, LendingOne, Easy Street 80% (CrowdfundedWealth, Oct 2026); CIVIC 65% foreign nationals |
| Min DSCR | 0.75x (MAX, low end) | 1.00-1.20x | 1.20x | Rental Home Financing 0.75x (N.D.); Lima One 1.0, CoreVest 1.00, LendingOne 1.10-1.20, Easy Street 1.20 (CrowdfundedWealth, Oct 2026) |
| DSCR calculation | Gross rent ÷ PITIA per property | Portfolio NOI ÷ portfolio debt service | n/a | Peersense, Mar 2026 |
| Occupancy | n/a | At least 90% of units leased | n/a | CIVIC rental portfolio (N.D.; single source) |
| Min FICO | 660 | 680 | 680 | Janover / multifamily.loans, 24 Oct 2026; Peersense, Mar 2026 |
| Term | 3 years | 5-10 years fixed | 30 years | CoreVest 3/5/7/10 (N.D.); Peersense 30-year |
| Release terms | Set loan by loan | Not published | n/a | Janover, Oct 2026 |
| Prepayment penalty | Only 2 of 10 publish | 5/4/3/2/1 | n/a | CrowdfundedWealth, Oct 2026 |
| Rate | 6.25% (MAX) | 6.3-7.5% | n/a | Lima One via Awning (N.D.); CIVIC from 6.3% (N.D.) |
| Recourse | Limited recourse available | Full recourse | Full recourse | Rental Home Financing (N.D.); see Core |

## Residential Part 1G: Short-term rental (STR) DSCR

STR programs count 75-80% of projected or historic gross income, need 1.00-1.15x coverage, and cap LTV at 70-80%. Many need 720+ FICO or experienced investors.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Income source | AirDNA projection | AirDNA, 12-month platform history or STR appraisal addendum | Lowest source if several | JVM Lending (N.D.); MortgageQuote, 2026; The Lender NONI+, Jul 2025 |
| Income haircut | 70% of projection | 75-80% of gross | 100% (MAX) | JVM 70-80% (N.D.); Plaza 75% and 80%, Jan 2026; Ridge Street 80% (N.D.); CMRE 100% (2025) |
| Min DSCR | 1.00x | 1.00x | 1.15x | Plaza, Jan 2026; CMRE (2025); Sharp N 1.15, Sep 2025 |
| Max LTV | 70% (refinance) | 75% purchase | 80% (MAX) | Plaza 75% / 70%, Jan 2026; Sharp N 75%, Sep 2025; eLEND minus 5%, May 2026; Newrez 80% (2026, MAX) |
| Min FICO | 620 (MAX) | 660-700 | 720 | Rabbu, Jul 2026; CMRE 660; OfferMarket 720 (N.D.); Newrez 720 (2026) |
| Eligibility limits | 1-unit only | Experienced investors only | 2-4 unit STR ineligible | Plaza, Jan 2026 |
| Reserves | 3 months | 3-6 months | 6-12 months below 1.00x | AirROI calculator (N.D.) |
| Rate premium over DSCR | 0.25% | 0.25-0.75% | 0.75% | AirROI (N.D.; single source) |
| Legal use | n/a | Must be legal under city, county and HOA rules | n/a | JVM Lending (N.D.). \[VERIFY: local ordinance at each address\] |

## Residential Part 1H: Sources and gaps

**Gaps against your source rules**

- Five-lender minimum met for fix-and-flip, ground-up, DSCR single property and STR. Not met for no-rehab bridge (4), portfolio (rests on one 10-lender survey) or land (3).
- Land and lot loans have no published points, extensions or experience rules.
- Many lender pages carry no date (N.D.). Dated wholesale matrices (2025-2026) carry the DSCR evidence.
- Fitch and S&P criteria for RTL and investor DSCR were not found. KBRA and DBRS reports are paywalled; press releases and trade press were used.

**Sources read for Residential (checked 18 Nov 2026; Core sources listed in Part 1D)**

| Publisher | Title | Date | Flag |
| --- | --- | --- | --- |
| KBRA | [PMT Loan Trust 2026-DSC1 preliminary ratings](https://www.kbra.com/publications/kfNTzLQn/kbra-assigns-preliminary-ratings-to-pmt-loan-trust-2026-dsc1-pmtlt-2026-dsc1) | 19 Oct 2026 |  |
| Pulse (DBRS event summary) | [Rate volatility and valuation shaping RTL and DSCR lending](https://www.pulse.bot/real-estate/news/morningstar-dbrs-takeaways-from-its-financing-the-future-event-rate-volatility-and-valuation-practic-6f17b3f3-65c5-42da-b62e-41fde285a4e9/) | 21 May 2026 |  |
| CIVIC Financial | [Ground-Up Construction](https://civicfs.com/ground-up-construction-loan/) | N.D. | N.D. |
| CIVIC Financial | [Rental Portfolio Loan](https://civicfs.com/?p=5087) | N.D. | N.D. |
| New Silver | [How does a ground-up loan work](https://help.newsilver.com/en/articles/3683500-how-does-a-ground-up-loan-work) | N.D. | N.D., MAX |
| Rehab Financial Group | [Ground Up Construction](https://rehabfinancial.com/ground-up-construction) | N.D. | N.D. |
| LoanFunders | [Ground-Up Construction Loans](https://loanfunders.beehiiv.com/p/ground-up-construction-guc-loans-with-loanfunders-com-build-faster-with-smart-ltc) | N.D. | N.D., MAX |
| Peersense | [Ground-Up Construction Loans](https://peersense.com/ground-up-construction-loans) | 19 Mar 2026 |  |
| Peersense | [Stabilized Bridge Loans](https://peersense.com/stabilized-bridge-loans) | 19 Mar 2026 |  |
| Peersense | [DSCR Portfolio Loans](https://peersense.com/dscr-portfolio-loans) | 2026 |  |
| OfferMarket | [Ground Up Construction Loan](https://www.offermarket.us/ground-up-construction-loan) | N.D. | N.D. |
| OfferMarket | [Stabilized Bridge Loan](https://www.offermarket.us/stabilized-bridge-loan) | N.D. | N.D. |
| OfferMarket | [DSCR Loan Requirements](https://www.offermarket.us/blog/dscr-loan-requirements) | N.D. | N.D. |
| LendingOne | [New Construction Loans](https://lendingone.com/?p=353) | N.D. | N.D., MAX |
| FlipperForce | [Lima One](https://flipperforce.com/lenders/lima-one-capital), [CIVIC](https://flipperforce.com/lenders/civic-financial-services), [Kiavi](https://flipperforce.com/lenders/kiavi) profiles | N.D. | N.D., MAX |
| Anchor Loans | [Fix and Flip / Bridge](https://anchorloans.com/loans/fix-and-flip-loan); [Nashville](https://www.anchorloans.com/locations/nashville-tn) | 2026 | MAX |
| CLS CRE | [Entitled Land Financing](https://clscre.com/property/land-entitled-financing.html) | Jul 2026 |  |
| Crestmont Capital | [Subdivision Developer Loans](https://www.crestmontcapital.com/blog/subdivision-developer-loans?hs_amp=true) | 2026 |  |
| Vaster | [Private Land Financing in Florida](https://blog.vaster.com/private-land-financing-florida) | 2025 |  |
| Spring EQ | [DSCR Program Guides](https://wholesale.springeq.com/hubfs/Spring%20EQ%20DSCR%20Program%20Guides%20-%20Released%201.12.2026.pdf?hsLang=en) | 12 Jan 2026 |  |
| Plaza Home Mortgage | [DSCR Investor Solutions 2 Guidelines](https://info.plazahomemortgage.com/hubfs/Program%20Updates/DSCR%20Investor%20Solutions%202%20Program%20Guidelines%20-%20Correspondent%201.13.26.pdf); [Program comparison](https://info.plazahomemortgage.com/hubfs/Program%20Updates/DSCR%20Investor%20Solutions%20Program%20Comparison%201.13.26.pdf) | 13 Jan 2026 |  |
| A&D Mortgage | [DSCR underwriting guide](https://admortgage.com/wp-content/uploads/UW-DSCR_8_14_2026.pdf) | 14 Aug 2026 |  |
| eLEND | [DSCR program matrix](https://www.elend.com/wp-content/uploads/2026/06/eLEND_Program-Matrix_Non-QM-Debt-Service-Coverage-Ratio-DSCR_Wholesale-5.18.26.pdf) | 18 May 2026 |  |
| Homebridge | [DSCR Plus matrix](https://www.homebridgewholesale.com/wp-content/uploads/2026/07/DSCR-Plus-4-8-26.pdf) | Jul 2026 |  |
| FundLoans | [Spectrum DSCR matrix](<https://www.fundloans.com/hubfs/Spectrum%20Matrix%20v%201.0%20(04-13-2026)%20v1.0.pdf?hsLang=en>) | 13 Apr 2026 |  |
| Windsor Mortgage | [DSCR Plus matrix](https://www.windsormortgage.com/assets/general-uploads/Windsor-DSCR-Plus-Matrix-02242026.pdf) | 24 Feb 2026 |  |
| The Lender | [NONI+ DSCR matrix](https://wholesale.thelender.com/wp-content/uploads/2025/08/NONI-Plus-matrix.pdf) | 15 Jul 2025 | MAX |
| FCM | [Sharp N DSCR matrix](https://fcmtpo.com/wp-content/uploads/2025/09/Sharp-N-DSCR-Matrix-09-09-25.pdf) | 9 Sep 2025 |  |
| LoanStream | [5-8 Unit Residential Matrix](https://loanstreamwholesale.com/wp-content/uploads/2025/02/LSM-5-8-Unit-Residential-Matrix-eff-02.14.25.pdf) | 14 Feb 2025 |  |
| CoreVest | [Rental portfolio](https://corevestfinance.com/?p=5054); [FAQ](https://www.corevestfinance.com/faq/) | N.D. | N.D. |
| CrowdfundedWealth | [Blanket Loan for a Rental Portfolio](https://www.crowdfundedwealth.com/articles/blanket-loan-rental-portfolio) | 7 Oct 2026 |  |
| Janover | [Rental Portfolio and Blanket Loans](https://www.multifamily.loans/residential-portfolio-blanket-loans/) | 24 Oct 2026 |  |
| Rental Home Financing | [Portfolio lending programs](https://rentalhomefinancing.com/articles/what-types-of-portfolio-lending-programs-are-available.html) | N.D. | N.D., MAX |
| RentalRealEstate | [DSCR loans](https://rentalrealestate.com/loans/dscr/) | Apr 2026 |  |
| JVM Lending | [DSCR loan for Airbnb](https://www.jvmlending.com/blog/dscr-loan-for-airbnb-short-term-rentals/) | N.D. | N.D. |
| AirROI | [STR DSCR calculator](https://airroi.com/calculator/dscr-loan) | N.D. | N.D. |
| Rabbu | [STR income and 85% LTV](https://rabbu.com/blog/how-str-income-and-85-ltv-are-changing-the-math-on-short-term-rental-investing) | 15 Jul 2026 | MAX |
| Newrez Wholesale | [DSCR webinar deck](https://www.newrezwholesale.com/media/5lyhm0fe/2-10-webinar-deck-dscr-v5-3.pdf) | 2026 | MAX |

---

**Residential Part 1 complete. Say "continue" for Residential Part 2 (model policy).**

## Residential Part 2A: Rules for all residential loans

Every residential loan is secured by a non-owner-occupied 1-4 unit property worth at least $100,000, outside rural areas. Core rules apply in full; where a residential rule is stricter, it wins. New topic codes BR, LND and GEN were added to Course Bible 5.7 on 18 Nov 2026.

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-GEN-01 | Eligible: non-owner-occupied SFR, 2-4 unit, townhome, PUD and warrantable condo. 5-9 units only under CORE-CONC-05. | MARKET | CIVIC, OfferMarket, Lima One programs (Part 1A, 1E) |
| RES-GEN-02 | Ineligible: rural properties, mixed-use, condotels, co-ops, manufactured homes, log homes, farms, and lots over 5 acres. | MARKET | CIVIC ineligible list (N.D.); Windsor rural not eligible, Feb 2026; OfferMarket 5-acre cap (N.D.) |
| RES-GEN-03 | Minimum value: $100,000 as-is (DSCR, bridge) or ARV / as-completed value (RTL, ground-up). | MARKET | OfferMarket, Apr 2025; RCN, 2026 |
| RES-GEN-04 | Loan size $75,000 to $2,000,000. Larger loans go to committee under CORE-AUTH-01. | JUDGMENT | Market ranges run $50,000 to $3,500,000+ (CIVIC, Kiavi); a lower cap suits training |
| RES-GEN-05 | Experience counts by product type: rehab projects for fix-and-flip and bridge; ground-up builds for ground-up and land; rentals held 12+ months for DSCR. | MARKET | Separate counts used by lenders (Part 1C); rental experience rule (FundLoans Spectrum, Apr 2026) |
| RES-GEN-06 | Valuation: full interior appraisal by the lender's appraisal management company. BPOs and AVMs never size a loan. | MARKET | CORE-VAL-01; CIVIC accepts BPOs (N.D.), so this is the conservative side |
| RES-GEN-07 | Recourse: full-recourse guaranty on every residential loan (CORE-DOC-01). | JUDGMENT | Core decision D-CORE-09 |
| RES-GEN-08 | Insurance: vacant or builder's risk cover during rehab or construction; landlord policy with 6 months' rent-loss cover on rentals. | JUDGMENT | Coverage types not sourced numerically |
| RES-GEN-09 | Business purpose: no guarantor or relative may live in the property (CORE-BP-02). A guarantor's former home is eligible only if they have moved out and it is leased to a third party. | LEGAL | \[VERIFY: Official Interpretation 3(a)-4; checked 18 Nov 2026\] |
| RES-GEN-10 | Prepayment penalties are allowed only where state law permits them (DSCR products). | LEGAL | State limits noted in lender guides (A&D Mortgage, Aug 2026). \[VERIFY: State Law Table, prepayment column, SLT-XX-01\] |

**Third-party reports by product**

| Report | Fix-and-flip | Bridge, no rehab | Ground-up | Land | DSCR (all) |
| --- | --- | --- | --- | --- | --- |
| Appraisal | As-is and ARV | As-is | As-is land and as-completed value | As-is | As-is with rent schedule (Form 1007) |
| Scope or budget review | Yes | No | Third-party plan and cost review | No | No |
| Draw inspections | Every draw | No | Every draw | No | No |
| Permits and approved plans | If structural | No | Before first construction draw | Entitlement proof | No |
| Title, survey, flood | Yes | Yes | Yes, with survey | Yes, with survey | Yes |
| Leases or income proof | No | If rental exit | No | No | Leases, or STR revenue history |

## Residential Part 2B: Fix-and-flip and bridge with no rehab

Fix-and-flip leverage steps up by experience tier to a cap of 85% LTC and 70% LTARV. A no-rehab bridge is capped at 70% of as-is value. The loan is the smallest of the sizing tests in F-RES-13.

**Fix-and-flip leverage by experience tier (Core tiers)**

| Limit | Tier 0 (0) | Tier 1 (1-4) | Tier 2 (5-9) | Tier 3 (10+) | Rule ID | BASIS | Rationale |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Max purchase advance (LTP) and LTAIV | 75% | 80% | 85% | 85% | RES-FF-01 | MARKET | Typical 85-90%, beginners 75-80% (Part 1A); the cap takes the conservative end |
| Rehab funded from holdback | 100% | 100% | 100% | 100% | RES-FF-02 | MARKET | 100% across all sources (Part 1A) |
| Max LTC (F-RES-04) | 75% | 80% | 85% | 85% | RES-FF-03 | MARKET | Typical 85-90%; Fidelis pool cap 85% (2026) |
| Max LTARV (F-RES-02) | 65% | 70% | 70% | 70% | RES-FF-04 | MARKET | Typical 70-75%; Fidelis pool cap 70% (2026) |
| Heavy rehab allowed (budget over 50% of price, or structural) | No | Yes | Yes | Yes | RES-FF-05 | JUDGMENT | One lender restricts beginners on heavy rehab (lender post, N.D.) |

**Other fix-and-flip rules**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-FF-06 | Rehab budget must include a contingency of at least 10% of hard costs. | MARKET | 10-15% typical (RCN, 2026) |
| RES-FF-07 | Tier 0 borrowers prepay 3 months' interest into escrow at closing. Others need no interest reserve. | JUDGMENT | Beginners may be asked for reserves (OfferMarket, N.D.) |
| RES-FF-08 | Interest is charged on the outstanding balance only, not the full commitment. | MARKET | Interest on drawn funds (LendingOne; OfferMarket over $100,000) |
| RES-FF-09 | Draws: reimbursement only after inspection of work in place; at most one draw per 30 days; final 10% of holdback released at completion. | JUDGMENT | Draw controls are standard (Part 1A); cadence and holdback share not sourced |
| RES-FF-10 | Exit test: projected flip profit (F-RES-10) at least 10% of total project cost. | JUDGMENT | Market requires a "clear exit" (RCN, 2026); 10% margin is a recommendation |
| RES-FF-11 | Term 12 months. Extensions per CORE-SVC-02 (2 × 3 months at 0.50 point). Each extension also needs at least 75% of rehab complete. | JUDGMENT | 12-month term is typical (CIVIC, Anchor); progress test not sourced |
| RES-FF-12 | No prepayment penalty. | MARKET | No-penalty bridge programs (Lima One; LoanFunders) |
| RES-FF-13 | Pricing: Core RTL grid (CORE-PRC-02). | MARKET | Rate band 8.5-12% (Part 1A) |

**Bridge with no rehab**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-BR-01 | Property must be rent-ready or sale-ready, appraisal condition C3 or better, and no repair need over $10,000. | JUDGMENT | Lenders require "stabilized" condition, one at C2 (Peersense, Mar 2026); C3 widens eligibility slightly |
| RES-BR-02 | Max LTV 70% of the lesser of price and as-is value (purchase); 65% (rate-term refinance); 60% (cash-out). | MARKET | Purchase 70% (OfferMarket, QuickLend, Peersense); refi 65-75%; cash-out 50-65% (Part 1B). Cash-out is JUDGMENT |
| RES-BR-03 | If owned under 6 months, value = lesser of appraisal and documented cost basis (price + receipted capital work). | MARKET | CIVIC limits by ownership period (N.D.); eLEND cuts LTV under 6 months (May 2026) |
| RES-BR-04 | Rental exit: projected rental DSCR (F-RES-07) at least 1.10x at the current DSCR rate plus 0.50%. | JUDGMENT | Peersense requires 1.10x at take-out (Mar 2026, single source); the 0.50% buffer is a recommendation |
| RES-BR-05 | Term 12 months; one 3-month extension at 1.00 point. | MARKET | 1% for first 3-month extension (OfferMarket, N.D.) |
| RES-BR-06 | Pricing: Core RTL grid less 0.25%; no prepayment penalty. | JUDGMENT | Stabilized bridge prices 9.00-11.5% (Peersense; Anchor) |

**F-RES-13: Fix-and-flip maximum loan**

```latex
MaxLoan = \min(LTC_{cap} \times TPC,\ LTARV_{cap} \times ARV,\ LTP_{cap} \times \min(Price, AsIs) + Rehab)
```

Course Bible illustrative flip: price $300,000; as-is $310,000; rehab $100,000; total project cost (TPC) $400,000; ARV $520,000.

*Tier 1 borrower (caps 80% / 70% / 80%)*

1. LTC test: 80% × $400,000 = $320,000.
2. LTARV test: 70% × $520,000 = $364,000.
3. Purchase test: 80% × min($300,000, $310,000) + $100,000 = $240,000 + $100,000 = $340,000.
4. Smallest: $320,000. LTC binds. With $100,000 held back for rehab, the initial advance is $220,000.

*Tier 2 borrower (caps 85% / 70% / 85%)*

1. LTC test: 85% × $400,000 = $340,000.
2. LTARV test: $364,000 (unchanged).
3. Purchase test: 85% × $300,000 + $100,000 = $355,000.
4. Smallest: $340,000. The requested $340,000 loan fits (LTC 85.0%, LTARV 65.4%, LTAIV 80.0% on the lower $300,000 price).

## Residential Part 2C: Ground-up construction and land

Ground-up needs at least 2 completed builds, caps LTC at 80-85% and loan-to-completed value at 70%, and carries a funded interest reserve. Land loans are limited to entitled lots at 50% of value for borrowers who will build within 12 months.

**Ground-up construction**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-GU-01 | Minimum 2 completed ground-up builds in 36 months. One build only as a committee exception. This supersedes the Tier 0 ground-up line in CORE-AUTH-01. | JUDGMENT | Sources conflict: 1 (LendingOne), 2-3 (New Silver, Rehab Financial, CIVIC), 5 (Lima One). See D-RES decisions |
| RES-GU-02 | Max LTC: 80% with 2-4 builds; 85% with 5 or more. | MARKET | Typical 85-90% (CIVIC, New Silver, Peersense); conservative end used |
| RES-GU-03 | Max loan-to-as-completed value 70%. | MARKET | 70-75% typical (Rehab Financial 70%; New Silver, PPF 75%) |
| RES-GU-04 | Land advance at most 65% of the lesser of land value and price if permitted; 50% if not. Permits needed before the first construction draw. | MARKET | CIVIC 75% / 60% (N.D.); RGC same (2022, OLD); conservative 10 points lower is JUDGMENT |
| RES-GU-05 | Hard-cost contingency at least 10%, inside the budget. | MARKET | 10-15% (CLS; LendSure, Jun 2026) |
| RES-GU-06 | Interest reserve funded at closing, sized by F-RES-16, and counted in total project cost. | MARKET | Funded interest in project cost (PPF, N.D.); interest reserves common (Real Lending, May 2026) |
| RES-GU-07 | Borrower equity goes in first; no construction draw until equity of at least 15% of TPC is spent or in escrow. | JUDGMENT | 10-15% equity typical (Peersense, Mar 2026); equity-first ordering not sourced |
| RES-GU-08 | Qualifying guarantor FICO at least 700. | JUDGMENT | 650-660 floors; 700+ for best leverage (LoanFunders, N.D.) |
| RES-GU-09 | Term 18 months; extensions 2 × 3 months at 0.50 point, if 75% complete and on budget. | MARKET | 12-24 month terms; 2 × 3-month extensions (New Silver, N.D.) |
| RES-GU-10 | General contractor licensed and insured; builder's risk cover; third-party plan and cost review. | JUDGMENT | Standard; DBRS weights execution risk (May 2026) |
| RES-GU-11 | Pricing: Core RTL grid + 0.75% ground-up adjuster. | JUDGMENT | Market 9-14% (REInvestorGuide, 2026) |

**F-RES-16: Ground-up interest reserve**

```latex
IR = Commitment \times \frac{Rate}{12} \times TermMonths \times AvgOutstanding\%
```

Average outstanding is 60%, because a real draw schedule front-loads land and early hard costs (Apers, 2026; decided in D-MF-11, 18 Nov 2026).

1. Inputs: commitment $600,000; rate 11.50% (Tier 1 10.75% + 0.75% adjuster); term 18 months; average outstanding 60%.
2. Monthly interest on full commitment: $600,000 × 11.50% ÷ 12 = $5,750.
3. Over the term: $5,750 × 18 = $103,500.
4. At 60% average outstanding: $103,500 × 0.60 = $62,100 interest reserve (the old 50% rule gave $51,750).

**Ground-up sizing check (illustrative)**

1. Inputs: TPC $700,000 including the reserve; loan $560,000; as-completed value $850,000; borrower has 3 builds.
2. LTC: $560,000 ÷ $700,000 = 80.0%. Cap with 2-4 builds is 80%: passes.
3. Loan-to-completed value: $560,000 ÷ $850,000 = 65.9%. Cap 70%: passes.

**Land and lots**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-LND-01 | Only entitled, finished lots for 1-4 unit homes the borrower will start within 12 months. Raw or unentitled land is ineligible. | JUDGMENT | Raw land is rarely financed (CLS, N.D.); thin sources |
| RES-LND-02 | Max LTV 50% of as-is value. | JUDGMENT | Private range 50-65% (CLS, Jul 2026); bank reference 75% land development (Terrapin, Sep 2026, citing 12 CFR Part 365); 65% raw land (confirmed: 12 CFR Part 365 App. A, eCFR, 18 Nov 2026) \[VERIFY: 12 CFR Part 34, Appendix A to Subpart D\] |
| RES-LND-03 | Guarantor must meet RES-GU-01 (2+ completed builds). | JUDGMENT | Exit is a construction loan or sale; ties land to build skill |
| RES-LND-04 | 6 months' interest prepaid into escrow at closing. | JUDGMENT | Land has no income; not sourced |
| RES-LND-05 | Term 12 months; one 6-month extension at 1.00 point if permits are filed. | JUDGMENT | Market terms 12-36 months (CLS); no extension sources |
| RES-LND-06 | Max loan $1,000,000; land at most 5% of Residential commitments. | JUDGMENT | Not sourced; limits concentration in the riskiest product |
| RES-LND-07 | Pricing: Core RTL grid + 1.00%, within 8-14%. Full recourse. | JUDGMENT | Market 8-14% (Crestmont, 2026); recourse typical (CLS) |

## Residential Part 2D: DSCR rental loans

All DSCR loans qualify on gross rent divided by fully amortizing PITIA. Single properties need 1.00x and at most 75-80% LTV by credit score. Portfolios need 1.20x at 70% LTV. Short-term rentals use 75% of documented income and need 1.15x at 70% LTV.

**F-RES-07 (exact course definition): Rental DSCR**

```latex
DSCR = \frac{QualifyingMonthlyRent}{P\&I_{fully\ amortizing\ at\ note\ rate} + Taxes + Insurance + HOA}
```

- Numerator: gross monthly rent, no vacancy or management deduction. Leased: lesser of lease and Form 1007 market rent. Vacant purchase: 1007 rent. Vacant refinance: 90% of 1007 rent.
- Denominator: PITIA (F-RES-08), with P&I on a 30-year fully amortizing basis even for interest-only loans.

**DSCR single property**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-DSCR-01 | Qualifying rent and DSCR as defined above. | JUDGMENT | Market uses gross rent ÷ PITIA (A&D, Aug 2026; Sharp N; LoanStream) but varies on rent source and IO (DBRS, May 2026). Lesser-of rent and amortizing P&I are the conservative choices |
| RES-DSCR-02 | Min DSCR 1.00x purchase and rate-term; 1.10x cash-out. Below 1.00x is ineligible. | MARKET | 1.00x typical (Homebridge, Plaza, Lima One); 0.75x programs exist (Spring EQ). Cash-out 1.10x is JUDGMENT |
| RES-DSCR-03 | Max LTV by FICO: see matrix below. First-time rental investor: max 70% and FICO 700+. Loans over $1,500,000: minus 5 points. | MARKET | Matrices at 75-80% purchase, 70-75% cash-out (Spring EQ, Homebridge, eLEND); first-time 70% / 700 (Plaza, Jan 2026) |
| RES-DSCR-04 | Vacant refinance or non-warrantable condo: lesser of 70% or the matrix. | MARKET | NONI+ 70% vacant (Jul 2025); eLEND 70% (May 2026) |
| RES-DSCR-05 | Owned under 6 months: value = lesser of appraisal and documented cost basis. | MARKET | eLEND 5% cut under 6 months (May 2026); CIVIC seasoning (N.D.) |
| RES-DSCR-06 | Cash-out capped at $500,000. | MARKET | Spring EQ, Windsor $500,000; Homebridge $750,000 |
| RES-DSCR-07 | Interest-only allowed only at FICO 720+ and LTV 70% or less; still qualifies on amortizing PITIA. | MARKET | IO with 5% LTV cut and 700+ FICO (Plaza; Windsor). Qualifying on amortizing payment is JUDGMENT |
| RES-DSCR-08 | Post-closing reserves in months of PITIA: 3 (loan to $1M); 6 ($1M-$2M). Cash-out proceeds do not count. | MARKET | A&D, Aug 2026; Plaza matrix; Forward Lending excludes cash-out, May 2026 |
| RES-DSCR-09 | Mortgage history 0 × 30 days late in the last 12 months. | JUDGMENT | 1x30x12 (FundLoans) and 0x30x12 (Forward Lending); stricter one used |
| RES-DSCR-10 | Term: 30-year fixed, fully amortizing. 5/6 and 7/6 ARMs allowed. | MARKET | Spring EQ, Plaza, CIVIC |
| RES-DSCR-11 | Prepayment: 5-year step-down 5/4/3/2/1 where allowed; no-penalty option priced +0.75%. | MARKET + LEGAL | 5/4/3/2/1 typical (Spring EQ, Jan 2026). \[VERIFY: State Law Table, prepayment column, SLT-XX-01\] |
| RES-DSCR-12 | Pricing: DSCR grid below; 1.00 point. | JUDGMENT | Market 6.0-8.0% (RentalRealEstate, Apr 2026); grid allocation is a recommendation |

**RES-DSCR-03 maximum LTV matrix (DSCR 1.00x or higher)**

| Qualifying FICO | Purchase | Rate-term refinance | Cash-out |
| --- | --- | --- | --- |
| 740+ | 80% | 75% | 70% |
| 720-739 | 75% | 75% | 70% |
| 700-719 | 75% | 70% | 65% |
| 680-699 | 70% | 70% | 60% |
| Below 680 | Ineligible | Ineligible | Ineligible |

**RES-DSCR-12 pricing grid (illustrative)**

| Item | Rate |
| --- | --- |
| Base: FICO 740+, LTV 65% or less | 7.000% |
| FICO 720-739 / 700-719 / 680-699 | +0.25% / +0.50% / +0.75% |
| LTV 65.01-70% / 70.01-75% / 75.01-80% | +0.25% / +0.50% / +0.75% |
| Cash-out; interest-only (each) | +0.25% |
| No prepayment penalty | +0.75% |
| Short-term rental | +0.50% |

**Worked example: DSCR single property (illustrative)**

1. Inputs: purchase $300,000; FICO 725; lease $2,300; Form 1007 rent $2,250; taxes $300, insurance $120, HOA $50 a month.
2. Max LTV (720-739, purchase): 75%. Loan = $300,000 × 75% = $225,000.
3. Rate: 7.000% + 0.25% (FICO) + 0.50% (LTV 75%) = 7.750%.
4. P&I (F-CORE-02), 360 months at 7.750%: $225,000 × 0.0071641 = $1,611.93.
5. PITIA (F-RES-08): $1,611.93 + $300 + $120 + $50 = $2,081.93.
6. Qualifying rent: lesser of $2,300 and $2,250 = $2,250.
7. DSCR: $2,250 ÷ $2,081.93 = 1.08x. Minimum 1.00x: passes.

**F-RES-17: Max loan by DSCR**

```latex
MaxLoan_{DSCR} = \frac{QualifyingRent / DSCR_{min} - (Taxes + Insurance + HOA)}{PaymentFactor}
```

1. Same inputs: ($2,250 ÷ 1.00 − $470) ÷ 0.0071641 = $1,780 ÷ 0.0071641 = $248,460.
2. LTV gives $225,000; DSCR gives $248,460. The binding constraint (F-CORE-19) is LTV: loan $225,000.

**DSCR portfolio (blanket)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-PF-01 | 5 to 50 properties; each worth at least $100,000; loan $500,000 to $10,000,000. | MARKET | 5+ typical (CoreVest; Peersense); $500,000 minimum (CoreVest). Cap of 50 and $10M is JUDGMENT |
| RES-PF-02 | Max LTV 70% on aggregate value (purchase and rate-term); 65% cash-out. | MARKET | 70-75% typical (CoreVest, RCN); cash-out 65% is JUDGMENT |
| RES-PF-03 | Min portfolio DSCR 1.20x (F-RES-14); no single property below 0.80x. | MARKET | 1.00-1.20x; CoreVest sizes to 1.20x (FAQ). The 0.80x floor is JUDGMENT |
| RES-PF-04 | At least 90% of units leased at closing. | JUDGMENT | CIVIC 90% (N.D.; single source) |
| RES-PF-05 | Release price 115% of the property's allocated loan amount (F-RES-11). The rest must still pass RES-PF-02 and RES-PF-03 after release. | JUDGMENT | Release terms are set loan by loan (Janover, Oct 2026); not published |
| RES-PF-06 | Term 5, 7 or 10 years fixed on 30-year amortization; step-down prepayment over the first 5 years. | MARKET + LEGAL | CoreVest terms (N.D.); 5/4/3/2/1 (Easy Street). \[VERIFY: State Law Table, prepayment column, SLT-XX-01\] |
| RES-PF-07 | Escrow taxes and insurance; capital reserve $250 per unit per year; 6 months' aggregate PITIA in liquidity. | JUDGMENT | Market often has no capex escrow (Rental Home Financing); conservative choice |
| RES-PF-08 | Pricing: DSCR grid less 0.25%. | JUDGMENT | Portfolio rates from 6.25-6.3% (Lima One, CIVIC) |

**F-RES-14: Portfolio DSCR**

```latex
DSCR_{portfolio} = \frac{\sum QualifyingMonthlyRent_i}{\sum PITIA_i}
```

1. Inputs: six houses with total qualifying rent $13,800 and total PITIA $11,200 a month.
2. Work: $13,800 ÷ $11,200 = 1.23x. Minimum 1.20x: passes.
3. Release: allocated loan $150,000 × 115% = $172,500 to release one house (F-RES-11). Re-test the remaining five houses.

**Short-term rental (STR)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| RES-STR-01 | 1-unit SFR, townhome or warrantable condo only. STR use must be legal under city, county and HOA rules, with any permit in hand. | MARKET + LEGAL | Plaza 1-unit only, Jan 2026; JVM on local rules. \[VERIFY: local ordinance\] |
| RES-STR-02 | Experience Tier 1+ with at least 12 months' rental or STR management. | MARKET | Plaza: experienced investors only (Jan 2026) |
| RES-STR-03 | Qualifying FICO at least 720. | MARKET | OfferMarket 720; Newrez 720 |
| RES-STR-04 | Qualifying rent: F-RES-15, 75% of the lower of the AirDNA projection and 12-month platform history (if any), divided by 12. | MARKET | Plaza 75%; JVM 70-80%; NONI+ lowest source (Part 1G) |
| RES-STR-05 | Min DSCR 1.15x. | JUDGMENT | 1.00x typical; Sharp N 1.15x (Sep 2025); conservative end used |
| RES-STR-06 | Max LTV 70% purchase; 65% rate-term; 60% cash-out. | JUDGMENT | Plaza 75% / 70%; conservative 5 points lower |
| RES-STR-07 | 6 months' PITIA reserves; STR liability insurance. | MARKET | 3-6 months (AirROI) |
| RES-STR-08 | Pricing: DSCR grid + 0.50%. | MARKET | 0.25-0.75% premium (AirROI) |

**F-RES-15: STR qualifying monthly rent**

```latex
Rent_{STR} = \frac{0.75 \times \min(AirDNA_{annual},\ T12_{annual})}{12}
```

1. Inputs: AirDNA projection $54,000 a year; trailing 12-month platform revenue $49,200; PITIA $2,500.
2. Lower source: $49,200. 75% × $49,200 = $36,900. ÷ 12 = $3,075 a month.
3. DSCR: $3,075 ÷ $2,500 = 1.23x. Minimum 1.15x: passes.

**Exceptions.** All residential exceptions follow CORE-EXC and CORE-AUTH-01. No exception is allowed to RES-GEN-09 (occupancy), RES-STR-01 (legal STR use) or the permit rule in RES-GU-04.

---

**Residential Part 2 complete. Say "continue" for Residential Part 3 (decisions and summary).**

## Residential Part 3A: Policy decisions

Sixteen decisions cover all 32 Residential JUDGMENT rules, the JUDGMENT parts of mixed rules, and every Residential source conflict. Option A is the Part 2 baseline. RES-GEN-07 (recourse) was already settled by D-CORE-09. \*\*Decided 18 Nov 2026: all 16 set to option A.\*\*

| ID | Rules covered | Options: pros (+) and cons (−) | Recommend |
| --- | --- | --- | --- |
| D-RES-01 | RES-GEN-04 | **A** $75,000-$2,000,000: + keeps files small. **B** $50,000-$3,000,000: + matches market range; − tiny loans cost more to service than they earn. **C** $100,000-$1,500,000: + simplest book; − excludes cheaper markets | A |
| D-RES-02 | RES-GEN-08 | **A** Builder's risk or vacant cover, plus 6 months' rent-loss cover on rentals: + protects income. **B** Hazard only: + cheaper for borrower; − rent loss falls on the loan | A |
| D-RES-03 | RES-FF-05 | **A** No heavy rehab for Tier 0: + beginners start cosmetic. **B** Heavy rehab at 70% LTC: + more volume; − riskiest mix. **C** Allowed with a licensed GC contract: + realistic; − depends on GC quality | A |
| D-RES-04 | RES-FF-07 | **A** Tier 0 prepays 3 months' interest: + cushion for beginners. **B** No reserve: + market-like. **C** 6 months: + safer; − drains liquidity | A |
| D-RES-05 | RES-FF-09 | **A** Inspected reimbursement draws; 1 per 30 days; final 10% at completion: + tight control. **B** 2 draws a month; no final hold: + faster cash to borrower; − less leverage over completion | A |
| D-RES-06 | RES-FF-10 | **A** Profit at least 10% of TPC: + screens thin deals. **B** 15%: + stronger buffer; − rejects many sound flips. **C** No test: + market-like; − misses the core flip risk | A |
| D-RES-07 | RES-FF-11, RES-GU-09 progress test | **A** 75% complete to extend: + rewards progress. **B** 50%: + more flexible. **C** No test: + simplest; − extends stalled projects | A |
| D-RES-08 | RES-BR-01, RES-BR-04, RES-BR-06 | **A** C3 condition; 1.10x exit at rate + 0.50%; grid less 0.25%: + tests the rental exit. **B** C2 condition; 1.10x at current rate: + matches one lender; − no rate cushion | A |
| D-RES-09 | RES-GU-01 (conflict: 1, 2-3 or 5 builds) | **A** 2 builds; 1 as committee exception: + middle of sources. **B** 1 build: + market low end; − thin track record. **C** 5 builds: + safest; − excludes most small builders | A |
| D-RES-10 | RES-GU-07, -08, -10, -11 | **A** 15% equity first; FICO 700; plan and cost review; +0.75%: + strong controls. **B** 10% equity; FICO 680; no third-party review: + cheaper; − weaker on execution risk | A |
| D-RES-11 | RES-LND-01 to -07 (thin sources) | **A** Entitled lots only; 50% LTV; 2+ builds; 6 months' interest prepaid; $1M; 5% of book: + very cautious. **B** 60% LTV; 3 months prepaid: + closer to private market. **C** No land lending; teach only: + avoids the riskiest product; − gaps in the course | A |
| D-RES-12 | RES-DSCR-01 (conflict: rent source and IO payment) | **A** Lesser of lease and 1007; amortizing P&I even on IO: + conservative and consistent. **B** 1007 or lease per market; IO loans on ITIA: + matches most lenders; − overstates coverage | A |
| D-RES-13 | RES-DSCR-02 (conflict: 0.75x vs 1.00x minimum) | **A** 1.00x; cash-out 1.10x; nothing below 1.00x: + property pays its own way. **B** Allow 0.75-0.99x at 65% LTV and 12 months' reserves: + teaches the sub-1.00 market; − more default risk | A |
| D-RES-14 | RES-DSCR-09, RES-DSCR-12 | **A** 0 lates in 12 months; illustrative grid from 7.000%: + clean credit. **B** 1 late allowed: + market-like; − weaker signal | A |
| D-RES-15 | RES-PF-01 to -05, -07, -08 (conflict: portfolio DSCR on NOI vs gross rent) | **A** Gross rent ÷ PITIA; 1.20x; 70% LTV; 115% release; 90% leased; capex reserve: + same math as single loans. **B** NOI ÷ debt service at 1.10x; 75% LTV; 110% release: + matches some institutional programs; − two DSCR methods to teach | A |
| D-RES-16 | RES-STR-05, RES-STR-06 (conflict: 70-100% income used) | **A** 1.15x; 70 / 65 / 60% LTV: + cushions seasonal income. **B** 1.00x; 75 / 70 / 65% LTV: + matches Plaza; − thinner buffer | A |

## Residential Part 3B: Summary of Residential limits

**Model policy for training - not for live lending decisions.** As of 18 Nov 2026. Figures are the confirmed option A in every D-RES decision (decided 18 Nov 2026). Core limits (FICO 680, liquidity, net worth, concentration, approval) apply on top.

| Loan type | Max leverage | Coverage test | Min FICO | Experience | Term and extensions | Rate (illustrative) | Points | Reserves |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fix-and-flip | LTP/LTAIV 75-85%, LTC 75-85%, LTARV 65-70% by tier (RES-FF-01, -03, -04) | Profit at least 10% of TPC (RES-FF-10) | 680; 700 Tier 0 | Tier 0 cosmetic only | 12 months; 2 × 3 months at 0.50 pt, 75% done | Core grid 9.50-11.50% base | 1.00-2.50 | 10% contingency; Tier 0 prepays 3 months' interest |
| Bridge, no rehab | 70% purchase; 65% refi; 60% cash-out (RES-BR-02) | Rental exit 1.10x at rate + 0.50% (RES-BR-04) | 680 | Core rules | 12 months; 1 × 3 months at 1.00 pt | Core grid less 0.25% | 1.00-2.50 | None beyond Core |
| Ground-up | LTC 80% (2-4 builds), 85% (5+); 70% of completed value; land 65% / 50% unpermitted (RES-GU-02 to -04) | n/a | 700 | 2+ ground-up builds | 18 months; 2 × 3 months at 0.50 pt, 75% done | Core grid + 0.75% | 1.00-2.50 | 10% hard-cost contingency; funded interest reserve (F-RES-16); 15% equity first |
| Land and lots | 50% of as-is (RES-LND-02) | n/a | 680 | 2+ ground-up builds | 12 months; 1 × 6 months at 1.00 pt | Core grid + 1.00% | 1.00-2.50 | 6 months' interest prepaid; max loan $1M |
| DSCR single | By FICO: purchase 70-80%; rate-term 70-75%; cash-out 60-70% (RES-DSCR-03) | 1.00x; 1.10x cash-out; gross rent ÷ amortizing PITIA | 680; 700 first-time | None; first-time max 70% | 30-year fixed or ARM; 5/4/3/2/1 prepay | 7.000% base + adjusters | 1.00 | 3 months PITIA to $1M; 6 months to $2M |
| DSCR portfolio | 70%; 65% cash-out (RES-PF-02) | 1.20x portfolio; 0.80x per property (RES-PF-03) | 680 | Core rules | 5/7/10-year fixed; 30-year amortization | DSCR grid less 0.25% | 1.00 | 6 months' aggregate PITIA; $250 per unit per year capex |
| Short-term rental | 70% purchase; 65% refi; 60% cash-out (RES-STR-06) | 1.15x on 75% of the lower of AirDNA and T12 (RES-STR-04, -05) | 720 | Tier 1 + 12 months' rental management | 30-year fixed or ARM | DSCR grid + 0.50% | 1.00 | 6 months PITIA |

All loans: $75,000-$2,000,000; value at least $100,000; no rural; full recourse; lender-ordered appraisal (RES-GEN rules).

---

**Residential complete. Its running deal, RD-RES-01, is in the Running Deals tab. Multifamily follows.**

# Multifamily (5+ units)

## Multifamily Part 1: Overview, rating-agency anchors and take-out reference

Multifamily bridge lenders size to 70-75% of as-is value and 70-75% of stabilized value, often with no in-place DSCR test. Rating agencies warn that many bridge loans only reach agency-level debt yields if the business plan works. The agency take-out (Fannie Mae, Freddie Mac) sets the exit bar: 1.25x DSCR and 80% LTV.

**Rating-agency and securitization anchors**

| Item | Publisher | Key figures | Date |
| --- | --- | --- | --- |
| Multifamily share of CRE CLO collateral | CRE Daily | 69.6% in 2026; 70% in 2025 | 2026 |
| CRE CLO bridge-to-stabilization study | KBRA | Median multifamily debt yield 5.6% as-is, expected 8.5% stabilized. Nearly half of CRE CLO loans fall short of agency/conduit debt yields even if stabilized | 31 Mar 2025 |
| ACRE CRE CLO pool | KBRA (via American Banker) | WA as-is LTV 70.1%; fully funded 70.9%; as-is DSCR 0.64x; rate caps 3.25-5.50% strike, WA 4.25%; initial term 1.8 years, fully extended 4.8 | N.D. |
| 2026 CRE CLO pricing | CREFC Securitized Debt Updates | Pool WA spreads SOFR + 288 bp and SOFR + 335 bp; 19-30 months remaining term, 47-53 with extensions | May 2026 |
| Freddie Mac K-deals, early 2026 | CRED iQ via Commercial Observer | WA DSCR 1.41x at 63.9% LTV | 2026 |

**Agency and bank take-out reference points (not products in this policy)**

| Take-out | Max LTV | Min DSCR | Notes | Source |
| --- | --- | --- | --- | --- |
| Fannie Mae Small Loans (to $9M) | 80%; 75% cash-out | 1.25x | Non-recourse with carve-outs; DSCR on amortizing debt service | Fannie Mae term sheet, 2026; Greystone term sheet, 2026; Fannie Guide 1102, May 2026 |
| Fannie Mae conventional | 80% | 1.25x | 5-year at 80% / 1.25x quoted at a 142-182 bp spread (5.36-5.76% rate) | Fannie Mae conventional term sheet, 2026; Lee & Associates, Q1 2026 |
| Freddie Mac Conventional Small (5-50 units) | 80% | 1.25x | Small Balance Loan program retired 15 Apr 2026 and folded into Conventional | Janover, Jul 2026; Select Commercial, 2026 |
| Bank multifamily | 65-75% | Not stated | 30-year amortization; 170-210 bp spread | Lee & Associates, Q1 2026 |
| HUD 221(d)(4) (construction) | 80-85% of cost | 1.11-1.15x | 40-year, non-recourse | CLS CRE, Apr 2026; Janover construction page, 2026 |

## Multifamily Part 1A: Bridge and value-add, with future funding

Value-add bridge loans fund 75-85% of cost, capped at 70-75% of stabilized value, floating over SOFR with a purchased rate cap. Institutional lenders test as-is and stabilized debt yield; small-balance lenders lean on recourse and fixed rates.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | 5+ units; $50,000 minimum value per unit | 5+ units, market-rate; 75%+ occupied for light value-add | $100,000 per unit minimum | LendingOne MF bridge (N.D.); CLS CRE pricing report, Q1 2026; CIVIC multifamily (N.D.) |
| Max as-is LTV | 70% | 75% | 80% (MAX) | KBRA CLO pool WA 70.1% (N.D.); CIVIC 75%; Lima One 75%; RCN 80% as-is (N.D.); Greystone up to 80% of current value (2020, OLD) |
| Max LTC (incl. capex) | 65-75% (bank) | 75-80% | 85% (MAX) | CLS bridge vs bank, 2026; CLS light value-add 70-75%, Q1 2026; NewPoint 80% (Mar 2025); Lima One 85% (N.D.); New Silver 85% (N.D.) |
| Max as-stabilized LTV | 65-70% (bank) | 70-75% | 75% | CLS bridge vs bank, 2026; Greystone Monticello 70% (2024); NewPoint 75% (Mar 2025); Buchanan Street 75%, Jul 2026 |
| Max loan-to-ARV (small balance) | 70% | 70-75% | 75% | New Silver 70% (N.D.); Lima One 75% LTARV (N.D.) |
| In-place DSCR | None required | 1.00x at note rate, or interest reserve if below | 1.00x on cash-out | LendingOne "no DSCR minimum at purchase" (N.D.); Greystone program (N.D.); Greystone small and medium bridge-to-agency, Nov 2024; RGC, Jul 2022 (OLD) |
| Stabilized DSCR (exit) | 1.20x | 1.25x on NCF | 1.25x | RGC 1.25x NCF (2022, OLD); agency take-out 1.25x (Fannie, 2026) |
| Debt yield | As-is 5.6% (median CLO loan) | As-is 7.0%; stabilized 8.5% | Stabilized 8.5-10% | KBRA, Mar 2025; Greystone bridge (2020, OLD); Greystone Monticello (2024) |
| Rate (floating) | SOFR + 275 bp | SOFR + 350-425 bp | SOFR + 495-500 bp | Apers, 2026; CLS, Q1 2026; Greystone, Nov 2024; Buchanan Street, Jul 2026 |
| Rate (fixed, small balance) | 7.5% | 9.00-11.50% | 11% | New Silver multifamily rates (2026); New Silver MF hard money (N.D.); CIVIC 10.99% (N.D., MAX) |
| Index level | n/a | 1-month Term SOFR about 3.64-3.67% | n/a | Lee & Associates, Q1 2026; COR Advisors, Jul 2026 |
| Origination / commitment fee | 0.50% | 1.00% | 2.00% | Apers 0.50-0.75% institutional, 2026; Greystone 1.0% (2020, OLD); New Silver 1-2% (N.D.) |
| Exit fee | Waived if lender gives the permanent loan | Charged | n/a | Lument (2021, OLD); Greystone (2020, OLD) |
| Initial term | 12 months | 24-36 months | 36 months | Greystone, Nov 2024; Lima One (N.D.); CIVIC 18-24 (N.D.) |
| Extensions | 3-6 months at 0.50% | 2 × 6 months at 0.50%, max 3 years total | Subject to debt yield and DSCR tests | Greystone, Nov 2024; RGC (2022, OLD); Greystone Monticello (2024) |
| Interest rate cap | Not required (fixed-rate lenders) | Required for initial term; counterparty A2/A or better | Cap plus replacement-cap escrow | Buchanan (Jun 2026); Greystone (2020, OLD); KBRA CLO WA strike 4.25%; Fannie cap escrow FAQ (2026) |
| Future funding | Capex held back | Capex funded in arrears, interest only on drawn funds | 100% of capex | Greystone, Nov 2024; Buchanan Street, Jun 2026 |
| Reserves | Taxes and insurance escrow | Plus replacement reserves monthly; repair escrow | Plus interest and operating reserves | Arbor, Sep 2025; Lument (2021, OLD); x-caliber, Dec 2025; Greystone, Nov 2024 |
| Sponsor net worth / liquidity | Not stated | Net worth 100% of loan; liquidity 10% | Liquidity 20% | Greystone Monticello, Dec 2023 (OLD); CLS bridge (N.D.) |
| Sponsor cash equity | 10% | 10-15% | 20-25% | Greystone (2020, OLD); CLS (N.D.) |
| Recourse | Non-recourse with carve-outs | Carve-outs (institutional); full PG (small balance) | Full recourse under $2M | Arbor, Sep 2025; CLS, 2026; New Silver PG (N.D.); RGC (2022, OLD) |
| Third-party reports | Appraisal | MAI appraisal, property condition report, Phase I environmental | Plus market study | Greystone (2020, OLD); Greystone Monticello (2024) |

## Multifamily Part 1B: Stabilized bridge

A stabilized bridge carries a performing property to an agency or bank loan, usually because of timing, seasoning or a recent purchase. Lenders want about 1.00x in-place coverage and an agency-ready exit.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Occupancy | 85% | 90%+ | n/a | CLS financing guide, Mar 2026 |
| Max LTV | 70% | 75% | 80% (MAX) | Lima One 75% LTC/LTV (N.D.); CIVIC 75% (N.D.); RCN 75% stabilized (N.D.); Greystone 80% current value (2020, OLD) |
| In-place DSCR | 1.00x | 1.00x at note rate | 1.05x (refinance) | Greystone program (N.D.); Greystone Freddie lease-up 1.00x / 1.05x (2020, OLD) |
| Exit test | Must qualify for agency refinance | Agency 1.25x DSCR, 80% LTV at maturity | n/a | Lument (2021, OLD); NewPoint, Apr 2026 |
| Term | 6 months | 12-24 months | 36 months | Lument 6-36 (2021, OLD); Greystone, Nov 2024 |
| Rate | SOFR + 275 bp | SOFR + 300-375 bp | SOFR + 425 bp | Apers, 2026; Greystone, Nov 2024 |
| Recourse | Non-recourse | Carve-outs only | Full PG (small balance) | Arbor, Sep 2025; New Silver (N.D.) |

## Multifamily Part 1C: Light construction overview

The course covers multifamily construction as an overview only. Banks lend 60-65% of cost with recourse; debt funds go to 65-85% at higher spreads. Sizing uses cost and projected stabilized debt yield, because there is no income during construction.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Max LTC | 60% (bank) | 60-75% | 80-85% (debt fund, MAX) | COR Advisors, Jul 2026; CLS HUD vs bank, Apr 2026; Mag Mile 80% debt fund deal, Mar 2026; Multi-Housing News, 2026 |
| Max loan-to-stabilized value | 60% | 60-70% (bank) | 75% | Terrapin, 2026; Janover construction page, 2026 |
| Stabilized DSCR | 1.15x (HUD) | 1.20x | 1.25x (agency take-out) | Janover construction page, 2026; CLS build-to-rent, Apr 2026 |
| Stabilized debt yield | n/a | 8.0%+ | n/a | Apers, construction loans, 2026 |
| Spread | SOFR + 250 bp (bank) | SOFR + 275-400 (bank) | SOFR + 400-700 (debt fund) | COR Advisors, Jul 2026; CLS build-to-rent, Apr 2026 |
| Term | 18 months | 18-36 months | 36 months | CLS HUD vs bank, Apr 2026 |
| Guaranties | Completion | Completion, interest carry, operating deficit | Full recourse (bank) | Multi-Housing News, "When non-recourse means recourse", 2026; COR Advisors, Jul 2026 |
| Interest reserve sizing | 50% average balance (rule of thumb) | 60-65% average balance on an S-curve | n/a | Apers, construction draw schedules, 2026 |

**Finding worth teaching.** The Apers source says the usual 50% average-balance rule understates construction interest. A real draw S-curve averages 60-65% outstanding. This challenges the 50% assumption in the Residential F-RES-16. Resolved by D-MF-11 on 18 Nov 2026: F-RES-16 now uses 60%.

## Multifamily Part 1E: Small multifamily DSCR term loans (5-10 units)

Non-QM lenders extend residential-style DSCR loans to 5-8 or 5-10 unit buildings. Most still use gross rent ÷ PITIA, but minimums run higher than for 1-4 units (1.00-1.25x) and LTV caps lower (65-75%). Some brokers describe a rent-roll-less-expenses basis instead; the two methods give different answers.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | 5-8 units | 5-8 or 5-10 units, all non-owner-occupied | 5-16 units | LoanStream 5-8, Jun 2026; Mortgage Depot 5-10 (Jul 2023, OLD); DSCR simulator guide (2026) |
| DSCR calculation | Gross rent ÷ ITIA (IO loans) | Gross rent ÷ PITIA; rent reduced by any management fee shown on the appraisal | Rent roll less operating expenses ÷ debt service | LoanStream, Jun 2026 and Feb 2025; DSCR simulator guide (2026); REInvestorGuide, Apr 2025 |
| Min DSCR | 1.00x | 1.10-1.15x | 1.20-1.25x | LoanStream 1.00; Forward Lending 1.00, May 2026; A&D 1.10 (N.D.); Ridge Street 1.15+, May 2026; DSCR simulator 1.20-1.25 (2026) |
| Max LTV, purchase | 70% (FICO 680) | 75% | 75-80% | Forward Lending 5-8, May 2026; LoanStream 75%, Jun 2026; A&D 75% CLTV (N.D.); DSCR simulator 75-80% |
| Max LTV, cash-out | 60% | 65% | 65% | Forward Lending 5-8, May 2026; LoanStream $1M max cash at 65% |
| Min FICO | 680 | 680-700 | 720 | LoanStream 680, Jul 2026; A&D 680 (N.D.); Forward Lending grid |
| Loan amount | $250,000-$400,000 minimum | Up to $2-3M | $3M | LoanStream $250k-$3M; A&D $400k-$3M; Mortgage Depot $250k-$3M (OLD) |
| Reserves | 6 months PITIA | 6 months | 12 months (foreign national) | A&D (N.D.) |
| Experience | First-time investors allowed | One prior 5+ unit property, or three 1-4 unit rentals | n/a | A&D (N.D.); Ridge Street, May 2026 |
| Vacancy | n/a | Max 2 vacant units | n/a | A&D (N.D.) |
| Credit events | 36 months | 36 months | n/a | LoanStream, Feb 2025; Forward Lending, May 2026 |
| Prepayment | n/a | Up to 3-5 year step-down; state limits | n/a | LoanStream, Forward Lending. \[VERIFY: State Law Table, prepayment column, SLT-XX-02\] |
| Rate | 6.50% | 6.50-8.25% (30-year fixed, Sep 2026 surveys, all DSCR) | 8.25% | FreeFinCalc, Oct 2026 |

## Multifamily Part 1F: Small-balance multifamily term loans (NOI-based)

Stabilized 5-50 unit buildings get 5-10 year fixed loans from private lenders, banks, CMBS and the agencies. These size on net cash flow ÷ amortizing debt service, typically 1.20-1.25x at 75-80% LTV. Smaller markets need more coverage.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | 5+ units, stabilized | 5-50 units, 90%+ occupied | n/a | CLS financing guide, Mar 2026; Janover on Freddie Conventional Small, Jul 2026 |
| DSCR calculation | n/a | Net cash flow ÷ annual principal + interest at the amortizing constant | Agencies also test IO structures on amortizing debt service | Fannie Guide 1102 and SARM definitions, May 2026; Greystone Freddie Conventional Small ("minimum amortizing DCR"), Apr 2026 |
| Min DSCR | 1.20x (top markets) | 1.25x | 1.30-1.40x (small and very small markets) | Janover, Freddie Small, Jul 2026; Fannie Small Loans term sheet, 2026; Select Commercial, Oct 2026 |
| Max LTV, purchase | 70-75% (bank, short term) | 75-80% | 80% | CLS bank terms, Mar 2026; Lima One small-balance term 75% (N.D.); Finance of America 75% stabilized (N.D.); Fannie / Freddie 80% |
| Max LTV, refinance or cash-out | 65% (full-term IO) | 70-75% | 75% | Greystone Freddie Conventional Small, Apr 2026; Fannie Small Loans 75% cash-out (Greystone, 2026) |
| Term and amortization | 3-year term | 5, 7 or 10-year fixed; 25-30 year amortization | 30-year fixed (up to 10 units) | CoreVest MF term (N.D.); Lima One (N.D.); CLS bank, Mar 2026 |
| Loan amount | $500,000 | $1M-$10M | $20M+ | CoreVest $500k-$20M+ (N.D.); Freddie Conventional Small $2M-$10M (Apr 2026) |
| Rate | 5.75% (bank) | 6.4-6.8% (agency small, 80% / 1.25x) | 7.0% (bank) | CLS, Mar 2026; Walker & Dunlop, 28 Apr 2026; Select Commercial Freddie rates, Nov 2026 |
| Prepayment | Declining 3-2-1 | Step-down 5-4-3-2-1 | Yield maintenance or defeasance (CMBS) | Lument Freddie SBL options (Jul 2025); apartment loan guide (CMBS), 2026 |
| Recourse | Full (bank, small private) | Non-recourse with carve-outs (agency, CMBS) | n/a | Fannie and Freddie term sheets, 2026; CLS bank case study (2026) |
| Reserves | Taxes and insurance | Plus replacement reserves | Plus repair escrow from property condition report | Greystone Fannie Small, 2026; Lument (OLD) |

## Multifamily Part 1G: Lease-up bridge

A lease-up bridge takes out a construction loan once the building has its certificates of occupancy, and carries it to about 90% occupancy. Lenders size at 65-75% of value or about 70% of cost, on projected stabilized debt yield.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Entry point | Certificates of occupancy issued | 100% of certificates of occupancy; leasing under way | 65% occupied and 75% leased (agency lease-up at closing) | Peersense multifamily bridge matrix, May 2026; Lument Freddie Mac Lease-Up term sheet, Jul 2026 |
| Max LTC / LTV | 65% LTC | 65-70% LTC; 70-75% as-stabilized LTV | 75% as-stabilized (agency, refinance) | Peersense, May 2026; Lument Freddie Lease-Up 75% refi / 70% acquisition, Jul 2026 |
| DSCR | 1.00-1.05x at closing (agency) | 1.10x stabilized (private bridge) | 1.25-1.35x (agency, by market) | Lument Freddie Lease-Up, Jul 2026; Peersense, May 2026 |
| Time to stabilize | 12 months | 12-18 months | 18 months | Greystone Monticello take-out, Dec 2023 (OLD); Peersense bridge-to-perm (2026) |
| Term | 18 months | 18-36 months | 36 months | Peersense, May 2026 |
| Rate | 9.25% | 9.25-10.5% fixed (private) | 10.5% | Peersense, May 2026 |
| Cash equity | 15% (agency refinance) | 15-25% | 25% (agency acquisition) | Lument Freddie Lease-Up, Jul 2026 |
| Credit enhancement | None | Lease-up credit enhancement of at least 5% of balance (agency) | n/a | Janover on Freddie Lease-Up (2024, OLD); Lument, Jul 2026 |
| Earn-out | None | Extra proceeds when debt-yield or NOI hurdles are met | n/a | Greystone Monticello (OLD); Freddie Mac Lease Up program, early 2026 (Connect CRE, Mar 2026) |
| Recourse | Non-recourse with carve-outs | Carve-outs | Partial recourse possible | Peersense, May 2026; Greystone Monticello (OLD) |

## Multifamily Part 1H: Mezzanine and preferred equity (subordinate capital)

Mezzanine and preferred equity sit behind the senior loan and lift combined leverage to 80-90%. They are business-purpose financing but not first liens. The course teaches them so learners can size the whole capital stack, not as a product to originate.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Security | Pledge of LLC interests (mezz, UCC) | Mezz: UCC pledge; pref equity: priority in the operating agreement | n/a | COR Advisors, Sep 2026; Peersense, Mar 2026 |
| Combined leverage | 80% combined LTC | 85% combined LTV or LTC | 90%+ (preferred equity) | Peersense, Mar 2026; Greystone Fannie DLA mezz 85% (OLD) |
| Combined DSCR | n/a | 1.10x on 30-year amortization of both loans | n/a | Greystone Fannie DLA mezz term sheet (OLD) |
| Pricing | 10% | 11-15% current pay (mezz); 10-14% target (pref) | 18% all-in | COR Advisors, Sep 2026; Peersense mezz guide (2026); CLS Los Angeles guide (2026) |
| Fees | 1% | 1-2% | 3-6% | Greystone short-term mezz (OLD); Janover mezz page (2024, OLD) |
| Senior-lender consent | Intercreditor agreement required | Agencies allow only approved mezz or preferred equity | Some seniors bar mezz entirely | Greystone short-term mezz (OLD); Peersense mezz vs pref, Mar 2026; CLS mezz vs pref, Jul 2026 |

## Other multifamily business-purpose loans: reference only

These exist in the market but stay outside the model policy. The course explains them; it does not set limits for them.

| Loan type | Why reference only | Key published limits | Source |
| --- | --- | --- | --- |
| Fannie Mae and Freddie Mac term and supplemental loans | Government-sponsored; your stated scope uses them as take-out benchmarks | 80% LTV, 1.25x DSCR | Fannie and Freddie term sheets, 2026 |
| HUD 221(d)(4) and 223(f) | Government programs | Construction 80-85% of cost, 1.11-1.15x; 40-year | CLS, Apr 2026 |
| CMBS and life-company loans | Large-balance capital-markets products | CMBS 75-80% LTV, 1.20x; defeasance | Apartment loan guide, 2026 |
| Bank balance-sheet loans | Same credit logic as 1F; bank capital rules differ | 65-75% LTV; 25-30 year amortization | Lee & Associates, Q1 2026; CLS, Mar 2026 |

## Multifamily Part 1D: Sources and gaps

**Gaps against your source rules**

- Five-lender minimum met for value-add bridge (Greystone, Arbor, NewPoint, Lima One, New Silver, CIVIC, RCN, Buchanan, LendingOne) and construction (bank and debt-fund surveys plus deals). Stabilized bridge has 5 programs but several old pages.
- Several Greystone and Lument term sheets are OLD (2020-2021 uploads). Dated 2024-2026 sources confirm the same structure, so they are kept as supporting evidence only.
- No Fitch, S&P or Morningstar DBRS CRE CLO criteria were readable; KBRA material came through press releases and coverage.
- No source publishes extension debt-yield hurdles as numbers.

**Sources read for Multifamily (checked 18 Nov 2026)**

| Publisher | Title | Date | Flag |
| --- | --- | --- | --- |
| KBRA | [From Origination to Stabilization: Can CRE CLOs Bridge the Gap?](https://www.businesswire.com/news/home/20250331429214/en/KBRA-Releases-Research-%E2%80%93-From-Origination-to-Stabilization-Can-CRE-CLOs-Bridge-the-Gap) | 31 Mar 2025 | PAYWALL |
| American Banker | [ACRE CRE CLO](https://asreport.americanbanker.com/news/multifamily-homes-drive-acre-credits-893-million-clo) | N.D. | N.D. |
| CREFC | [CRE Securitized Debt Update, 5 May 2026](https://www.crefc.org/cre/content/News/Items/Research_and_Data/CRE_Securitized_Debt_Update_5_5_26.aspx); [12 May 2026](https://www.crefc.org/cre/content/News/Items/Research_and_Data/2026/CRE_Securitized_Debt_Update_5_12_26.aspx) | May 2026 |  |
| CRE Daily | [CRE CLO issuance nears record levels](https://www.credaily.com/?p=216046) | 2026 |  |
| Commercial Observer | [Freddie Mac underwriting tightening](https://commercialobserver.com/?p=572728) | 2026 |  |
| Fannie Mae | [Small Loans term sheet](https://multifamily.fanniemae.com/media/37046/display); [Conventional term sheet](https://multifamily.fanniemae.com/media/document/pdf/conventional-properties-term-sheet); [Guide 1102](https://mfguide-acpt.fanniemae.com/fnmf-pdf/download/5271) | 2026 |  |
| Greystone | [Fannie Mae Small Mortgage Loans](https://www.greystone.com/wp-content/uploads/2024/04/Greystone-Fannie-Mae-Small-Mortgage-Loans-Term-Sheet-1.pdf) | 2026 |  |
| Greystone | [Small and Medium Bridge-to-Agency](https://www.greystone.com/wp-content/uploads/2024/11/Greystone_Small-and-Medium-Bridge-to-Agency_Term-Sheet.pdf) | Nov 2024 |  |
| Greystone | [Multifamily Bridge Loan](https://www.greystone.com/wp-content/uploads/2020/06/Greystone-Multifamily-Bridge-Loan-Term-Sheet.pdf); [Bridge Loan Program](https://www.greystone.com/wp-content/uploads/2020/06/Greystone_Multifamily_Bridge_Loan_Program.pdf) | 2020 upload | OLD |
| Greystone Monticello | [Bridge Loan Program](https://www.greystone.com/wp-content/uploads/2020/06/Greystone_Monticello_Multifamily_Bridge_Loan_Program_Term_Sheet.pdf); [Construction Takeout](https://www.greystone.com/wp-content/uploads/2023/12/Greystone_Monticello_Multifamily_Construction_Takeout_Term_Sheet.pdf) | 2024; Dec 2023 | OLD (takeout) |
| Arbor | [Structured Financing: Bridge](https://arbor.com/wp-content/uploads/2025/04/Structured-Financing-Bridge-090225.pdf) | 2 Sep 2025 |  |
| NewPoint | [Bridge](https://newpoint.com/sites/default/files/2025-03/NewPoint%20Bridge.pdf); [Bridge to Agency](https://newpoint.com/sites/default/files/2026-04/NewPoint_Proprietary_BridgeToAgencyFinancing041426.pdf) | Mar 2025; Apr 2026 |  |
| Buchanan Street Partners | [Tear sheet](https://www.buchananstreet.com/wp-content/uploads/2026/07/BSP-Tear-Sheet-Juy-2026.pdf) | Jul 2026 |  |
| Lument | [Bridge Lending Guidelines](https://lument.com/wp-content/uploads/2021/03/Bridge-Lending-Guidelines-Multifamily-Housing.pdf) | 2021 | OLD |
| Lima One | [Multifamily](https://limaone.com/multifamily/) | N.D. | N.D., MAX |
| New Silver | [Multifamily loan rates](https://newsilver.com/commercial-real-estate-loans/multifamily-loan-rates/); [MF hard money](https://newsilver.com/commercial-real-estate-loans/hard-money-loans-for-multifamily/) | 2026; N.D. | MAX |
| CIVIC | [Multifamily](https://www.civicfs.com/multifamily) | N.D. | N.D. |
| RCN Capital | [Loan criteria](https://rcncapital.com/rei-ink) | N.D. | N.D., MAX |
| LendingOne | [Multifamily Bridge](https://lendingone.com/multifamily-bridge-loan) | N.D. | N.D. |
| CLS CRE | [Lender Pricing Report Q1 2026](https://clscre.com/research/lender-pricing-report-q1-2026.html); [Bridge fund vs bank](https://clscre.com/comparisons/bridge-debt-fund-vs-bank-balance-sheet.html); [HUD vs bank](https://clscre.com/comparisons/hud-221d4-vs-bank-construction.html); [Build-to-rent](https://clscre.com/property/build-to-rent-financing.html) | 2026 |  |
| Lee & Associates | [Q1 2026 Capital Advisory Report](https://www.lee-associates.com/new-york/wp-content/uploads/sites/42/2026/03/Q1-2026-Capital-Advisory-Report.pdf) | Mar 2026 |  |
| Apers | [Bridge loans](https://apers.app/learn/capital-structure/senior-debt/bridge-loans-floating-rate-risk-exit-assumptions); [Construction draw schedules](https://apers.app/learn/capital-structure/senior-debt/construction-loans-draw-schedules-interest-reserves) | 2026 |  |
| COR Advisors | [Construction loan rates 2026](https://www.coradvisors.net/2026/05/construction-loan-rates-2026.html) | Jul 2026 |  |
| Multi-Housing News | [When non-recourse construction financing means recourse](https://www.multihousingnews.com/when-non-recourse-construction-financing-means-recourse/) | 2026 |  |
| Janover / multifamily.loans | [Freddie Mac Small Balance](https://www.multifamily.loans/freddie-mac-small-balance-apartment-loans/); [Construction loans](https://www.multifamily.loans/multifamily-construction-loans) | Jul 2026 |  |

**Added sources for Parts 1E-1H (checked 18 Nov 2026).** Five-lender minimum met for 1E (LoanStream, Forward Lending, A&D, Mortgage Depot, Ridge Street) and 1F (agencies, CoreVest, Lima One, Finance of America, banks). Lease-up (1G) leans on old Greystone sheets plus 2026 primers. Mezzanine (1H) is an overview.

| Publisher | Title | Date | Flag |
| --- | --- | --- | --- |
| LoanStream | [DSCR 5-8 Unit Matrix](https://loanstreamwholesale.com/wp-content/uploads/2026/06/LSM-5-8-Unit-Residential-Matrix-dtd-260608-1.pdf); [July 2026 webinar](https://loanstreamwholesale.com/wp-content/uploads/2026/07/LoanStream-Broker-Webinar-July-2026-DSCR-Fusion-and-DSCR-5_8.pdf) | Jun-Jul 2026 |  |
| Forward Lending | [5-8 Unit Matrix](https://forwardlendingmtg.com/wp-content/uploads/2026/05/FL-5-8-Unit-Residential-Matrix-dtd-260511.pdf) | 11 May 2026 |  |
| A&D Mortgage | [DSCR Multifamily 5-8](https://admortgage.com/wp-content/uploads/DSCR_Multifamily_AD_Products-4.pdf) | N.D. | N.D. |
| Mortgage Depot | [Platinum DSCR 5-10](https://mortgagedepot.com/wp-content/uploads/sites/83/md-Platinum-DSCR-5-10-or-2-8-Matrix.pdf) | 1 Jul 2023 | OLD |
| Ridge Street Capital | [DSCR Loan for Multifamily](https://www.ridgestreetcap.com/blog/dscr-loan-for-multifamily-property) | 5 May 2026 |  |
| DSCR simulator guide | [Multifamily DSCR qualification](https://dscr-loan-qualification-rate-stress-simulator.pages.dev/blog/dscr-loan-multifamily-qualification-guide/) | 2026 |  |
| FreeFinCalc | [DSCR Loan Requirements 2026](https://www.freefincalc.net/blog/dscr-loan-requirements-2026) | Oct 2026 |  |
| Greystone | [Freddie Mac Conventional Small](https://www.greystone.com/wp-content/uploads/2026/04/Freddie-Mac-Conventional-Small-Loan-Term-Sheet.pdf) | Apr 2026 |  |
| Walker & Dunlop | [Small Balance Multifamily rates](https://www.walkerdunlop.com/small-balance/) | 28 Apr 2026 |  |
| Select Commercial | [Freddie Mac rates](https://selectcommercial.com/freddie-mac-multifamily-loan-rates.php) | Oct 2026 |  |
| CoreVest | [Multifamily Term Loans](https://www.corevestfinance.com/loan-types/multifamily-term-loans) | N.D. | N.D. |
| CLS CRE | [How to finance multifamily property 2026](https://clscre.com/blog/how-to-finance-multifamily-property-2026.html); [Mezzanine vs preferred equity](https://clscre.com/comparisons/mezzanine-vs-preferred-equity.html) | Mar, Jul 2026 |  |
| Peersense | [Mezzanine financing guide](https://peersense.com/learn/mezzanine-financing-guide); [Mezz vs pref](https://peersense.com/learn/mezzanine-vs-preferred-equity); [Multifamily bridge value-add](https://peersense.com/learn/multifamily-bridge-value-add) | 2026 |  |
| COR Advisors | [Preferred equity financing 2026](https://www.coradvisors.net/2026/09/preferred-equity-financing-cre-2026.html) | Sep 2026 |  |
| Greystone | [Fannie Mae DLA Mezzanine](https://www.greystone.com/wp-content/uploads/2020/06/Fannie-Mae-Greystone-Mezzanine-Loan-Term-Sheet.pdf); [Freddie Lease-Up](https://www.greystone.com/wp-content/uploads/2020/04/Greystone-Freddie-Mac-Lease-Up-Loan-Term-Sheet-2.pdf) | 2020 upload | OLD |
| Connect CRE (via Pulse) | [Freddie Mac Lease Up program](https://www.pulse.bot/real-estate/news/gowanus-refi-scores-a-first-with-freddie-macs-new-lease-up-program-147f51a6-08a7-4d61-aa55-fe45cdcee87b) | 23 Mar 2026 |  |

US-only lease-up sources (replacing a removed UK-leaning primer, 18 Nov 2026): [Peersense multifamily bridge matrix](https://peersense.com/bridge-loans/multifamily), May 2026; [Lument Freddie Mac Lease-Up term sheet](https://lument.com/wp-content/uploads/2021/01/Freddie-Mac-Lease-Up-Loan.pdf), revised 6 Jul 2026; [Fannie Mae Near Stabilization Execution](https://multifamily.fanniemae.com/financing-options/products/near-stabilization-execution), 2026. Scope rule: all Multifamily evidence is from US lenders and US programs.

---

**Multifamily Part 1 complete. Say "continue" for Multifamily Part 2 (model policy).**

## Multifamily Part 2A: Rules for all multifamily loans

Every multifamily loan is underwritten on a reconciled rent roll and T-12, with replacement reserves deducted, and tested with the DSCR definition that fits its product. Core rules apply in full. New topic codes SB, DSCR, MEZ and GEN were added to Course Bible 5.7 on 18 Nov 2026.

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-GEN-01 | Eligible: 5+ unit market-rate apartments; mixed-use counts as multifamily only if residential gives at least 80% of income. | JUDGMENT | Lenders treat 70%+ residential as multifamily-dominant (Peersense mixed-use, 2026); 80% is stricter |
| MF-GEN-02 | Out of course scope: student, seniors, manufactured housing, co-ops, and income-restricted (LIHTC) housing. | JUDGMENT | Separate agency programs and rules (Freddie student housing; Fannie MAH); keeps the course focused |
| MF-GEN-03 | Minimum value $75,000 per unit. | JUDGMENT | Market floors $50,000 (LendingOne) to $100,000 (CIVIC) per unit |
| MF-GEN-04 | Rent roll must tie to bank deposits within 5% for the last 3 months. | JUDGMENT | Standard diligence; tolerance not sourced |
| MF-GEN-05 | Underwritten income: in-place rents (lesser of rent roll and trailing 3 months annualized), vacancy at the greater of actual, market or 5%, other income at T-12. | JUDGMENT | Agency practice uses conservative in-place income (Fannie Guide, 2026); exact conventions are recommendations |
| MF-GEN-06 | Underwritten expenses: greater of T-12 and appraiser's estimate; management at least 3% of EGI; replacement reserves $300 per unit per year (F-MF-06). | JUDGMENT | Reserves of $250 per unit appear in small multifamily guides (DSCR simulator, 2026); $300 is conservative |
| MF-GEN-07 | Sponsor experience: at least 2 apartment properties (5+ units) owned or managed in the last 5 years, one at least half the subject's unit count. | JUDGMENT | 5+ unit DSCR lenders want one 5+ unit property or three 1-4 rentals (Ridge Street, May 2026); bridge needs more |
| MF-GEN-08 | Reports: MAI appraisal (as-is and as-stabilized), property condition report, Phase I environmental report, zoning report, flood determination. | MARKET | Greystone bridge (OLD) and Monticello (2024); agency practice |
| MF-GEN-09 | Local rent regulation (rent control, just-cause eviction) must be checked and reflected in rent growth assumptions. | LEGAL | \[VERIFY: state and city rent regulation at the address\] |
| MF-GEN-10 | Insurance: replacement-cost property, general liability, flood where required (CORE-INS-03), 12 months' loss of rents. | JUDGMENT | Coverage amounts not sourced |
| MF-GEN-11 | Every loan reports all three tests that apply: DSCR (definition below), debt yield, LTV/LTC. | MARKET | Lenders size on LTV, LTC, DSCR and debt yield together (Part 1A) |

**The three DSCR definitions used in this policy**

| Product | DSCR formula | Payment basis | Formula ID |
| --- | --- | --- | --- |
| Small multifamily DSCR loan (5-10 units) | Gross monthly rent ÷ monthly PITIA | 30-year fully amortizing at note rate | F-RES-07 (as residential) |
| Term, stabilized bridge, lease-up exit, construction exit | Net cash flow ÷ annual debt service | Amortizing constant at note rate (or take-out rate for exit tests) | F-MF-10 |
| Value-add bridge, in place | Net cash flow ÷ annual interest | Interest-only at the higher of note rate and cap strike + spread | F-MF-12 |

**F-MF-09: Net cash flow (NCF)**

```latex
NCF = NOI - ReplacementReserves
```

Illustrative 50-unit "Cedar Court" (glossary property): GPR $780,000; collections $702,000; other income $18,000; EGI $720,000; OpEx $310,000.

1. NOI (F-CORE-10): $720,000 − $310,000 = $410,000.
2. Reserves (F-MF-06): 50 × $300 = $15,000.
3. NCF: $410,000 − $15,000 = $395,000.

**F-MF-10: Multifamily DSCR (amortizing)**

```latex
DSCR_{MF} = \frac{NCF}{Loan \times Constant_{30yr,\ rate}}
```

1. Inputs: NCF $395,000; loan $4,340,000; rate 7.00%, 30-year amortization; constant 7.9836% (F-CORE-04).
2. Annual debt service: monthly P&I $28,874.13 × 12 = $346,489.56 (F-CORE-03).
3. DSCR: $395,000 ÷ $346,489.56 = 1.14x.

**F-MF-11: Debt yield on NCF**

```latex
DY = \frac{NCF}{Loan}
```

$395,000 ÷ $4,340,000 = 9.10%. (F-CORE-16 uses NOI; multifamily uses NCF, the stricter base.)

**F-MF-12: In-place interest coverage (bridge)**

```latex
ICR = \frac{NCF}{Loan_{funded} \times \max(NoteRate,\ CapStrike + Spread)}
```

1. Inputs: funded loan $4,340,000; SOFR cap strike 4.25% + spread 4.00% (3.75% base + 0.25% because the total commitment is over 70% of cost, MF-BR-14) = 8.25%.
2. Interest: $4,340,000 × 8.25% = $358,050.
3. Coverage: $395,000 ÷ $358,050 = 1.10x.

## Multifamily Part 2B: Value-add bridge and stabilized bridge

Value-add bridge loans are capped at 70% of as-is value on day one, 75% of total cost and 70% of stabilized value fully funded. They must pass as-is and stabilized debt-yield floors and an agency-style exit test. Stabilized bridges need 90% occupancy and 1.05x coverage.

**Value-add bridge (MF-BR)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-BR-01 | At least 75% physically occupied at closing; capex budget at most 50% of purchase price. | JUDGMENT | Light value-add at 75%+ occupancy (CLS, Q1 2026); 50% budget cap (RGC, 2022, OLD) |
| MF-BR-02 | Initial funded loan at most 70% of as-is value. | MARKET | Typical 70-75%; CLO pool WA 70.1% (KBRA via American Banker) |
| MF-BR-03 | Total commitment at most 75% of total cost (price + capex + closing costs). | MARKET | Typical 75-80% (NewPoint, CLS); conservative end |
| MF-BR-04 | Fully funded loan at most 70% of as-stabilized value. | MARKET | 65-75% (Greystone Monticello 70%, NewPoint 75%, bank 65-70%) |
| MF-BR-05 | As-is debt yield (F-MF-11, funded loan) at least 7.0%. | JUDGMENT | Greystone 7.0% (OLD) vs KBRA median CLO loan at 5.6% (Mar 2025): sources conflict |
| MF-BR-06 | Stabilized debt yield (stabilized NCF ÷ fully funded loan) at least 8.5%. | MARKET | Greystone 8.5% (OLD); KBRA median stabilized 8.5% (Mar 2025) |
| MF-BR-07 | If in-place coverage (F-MF-12) is below 1.00x, fund an interest reserve for the shortfall for 12 months. | MARKET | Interest reserve required below 1.0x DSCR (Greystone, Nov 2024) |
| MF-BR-08 | Exit test: a 30-year amortizing loan at the current agency rate + 0.50%, sized at 1.25x DSCR and 80% LTV on stabilized figures, must repay the fully funded loan. | MARKET | Agency 1.25x / 80% (Fannie, Freddie 2026); 0.50% rate buffer is JUDGMENT |
| MF-BR-09 | Rate cap required for the initial term (and any extension), from a counterparty rated A / A2 or better, with strike set so F-MF-12 is at least 1.00x. | MARKET | Greystone (OLD); KBRA CLO WA strike 4.25%; cap common in 2026 bridges (Apers) |
| MF-BR-10 | Capex is future-funded in arrears after inspection, at most one draw a month; interest accrues on drawn funds only. | MARKET | Greystone small and medium bridge, Nov 2024; Buchanan Street, Jun 2026 |
| MF-BR-11 | Term 24 months; 2 × 6-month extensions at 0.50% each if: no default, cap extended, capex at least 75% complete, current debt yield at least 7.5%. | MARKET + JUDGMENT | 2 × 6 months at 0.50% (Greystone, Nov 2024); the extension tests are JUDGMENT |
| MF-BR-12 | Loan size $1,000,000 to $25,000,000. Under $2,000,000: full-recourse guaranty. $2,000,000 and up: non-recourse with carve-outs plus a completion guaranty for capex. | MARKET + JUDGMENT | Full recourse under $2M (RGC, 2022, OLD); carve-outs for larger loans (Arbor, Sep 2025) |
| MF-BR-13 | Escrows: taxes and insurance monthly; replacement reserves $300 per unit per year; repair escrow 125% of immediate repairs in the property condition report. | MARKET + JUDGMENT | Escrows standard (Arbor; Lument, OLD; x-caliber, Dec 2025); 125% is JUDGMENT |

**F-MF-13: Value-add bridge maximum loan**

```latex
Total = \min(LTC_{cap} \times TotalCost,\ LTV_{stab} \times V_{stab},\ LTV_{asis} \times V_{asis} + Capex)
```

Cedar Court purchase: price $6,200,000; capex $800,000; closing costs $200,000; total cost $7,200,000; as-is appraisal $6,300,000 (value for sizing = lower of price and appraisal = $6,200,000, F-CORE-14); as-stabilized value $8,600,000; in-place NCF $395,000; stabilized NCF $560,000.

1. LTC test: 75% × $7,200,000 = $5,400,000.
2. Stabilized LTV test: 70% × $8,600,000 = $6,020,000.
3. As-is test: 70% × $6,200,000 + $800,000 = $4,340,000 + $800,000 = $5,140,000.
4. Smallest: $5,140,000 total (as-is test binds). Initial funded $4,340,000; capex future funding $800,000.
5. Checks: LTC 71.4%; stabilized LTV 59.8%; as-is debt yield $395,000 ÷ $4,340,000 = 9.10% (≥ 7.0%); stabilized debt yield $560,000 ÷ $5,140,000 = 10.89% (≥ 8.5%); in-place coverage 1.10x at 8.25% (F-MF-12), so no interest reserve.
6. Exit test (MF-BR-08) at a 6.55% agency rate (Freddie 10-year, Select Commercial, Nov 2026) + 0.50% = 7.05%: constant 8.0240%. Max by DSCR $560,000 ÷ 1.25 ÷ 0.080240 = $5,583,274; 80% LTV = $6,880,000. Take-out $5,583,274 repays $5,140,000 with $443,274 to spare: passes.

**Stabilized bridge (MF-SB)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-SB-01 | At least 90% physically occupied for the last 3 months. | MARKET | Stabilized at 90%+ (CLS financing guide, Mar 2026) |
| MF-SB-02 | Max LTV 70% of as-is value. | MARKET | Typical 75% (Lima One, CIVIC, RCN); conservative side |
| MF-SB-03 | Min coverage 1.05x on F-MF-12 (interest-only at cap strike + spread) and debt yield at least 8.0%. | JUDGMENT | 1.00x typical (Greystone), 1.05x refinance (Freddie lease-up); 8.0% debt yield between bridge as-is and stabilized floors |
| MF-SB-04 | Exit test as MF-BR-08. | MARKET | Agency take-out bar |
| MF-SB-05 | Term 12-24 months; one 6-month extension at 0.50%. Rate cap as MF-BR-09. | MARKET | Greystone, Nov 2024 |

## Multifamily Part 2C: Small multifamily DSCR, small-balance term, lease-up

Small 5-10 unit DSCR loans need 1.20x on gross rent ÷ PITIA, and the NCF method is shown alongside as a warning check. Small-balance term loans size on NCF at 1.25x and 75% LTV. Lease-up loans stop at 65% of cost until occupancy proves out.

**Small multifamily DSCR loan, 5-10 units (MF-DSCR)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-DSCR-01 | 5-10 units, all non-owner-occupied, residential zoning; at most 2 vacant units. | MARKET | LoanStream 5-8, Jun 2026; A&D 2-vacancy cap (N.D.) |
| MF-DSCR-02 | Qualify on F-RES-07 (gross rent ÷ amortizing PITIA) at 1.20x or more. | MARKET | Minimums 1.00-1.25x; 1.15+ (Ridge Street), 1.20-1.25 (DSCR simulator guide) |
| MF-DSCR-03 | Also compute F-MF-10 on NCF. Below 1.00x is not a decline but needs credit officer review. | JUDGMENT | Some brokers size on rent roll less expenses (DSCR simulator; REInvestorGuide); teaches the gap between methods |
| MF-DSCR-04 | Max LTV by FICO: 740+: 75% purchase / 70% rate-term / 65% cash-out; 720-739: 70 / 70 / 60; 700-719: 70 / 65 / 60; below 700 ineligible. | JUDGMENT | Forward Lending 75 / 75 / 65 at 720 (May 2026); LoanStream 75%; set 5 points lower for training |
| MF-DSCR-05 | Reserves 6 months' PITIA; experience of one 5+ unit property or three 1-4 unit rentals held 12+ months. | MARKET | A&D 6 months (N.D.); Ridge Street, May 2026 |
| MF-DSCR-06 | Loan $400,000 to $2,000,000; 30-year fixed; prepayment 3/2/1 step-down where allowed. | MARKET + LEGAL | A&D $400k minimum (N.D.); LoanStream up to $3M. \[VERIFY: State Law Table, prepayment column, SLT-XX-02\] |
| MF-DSCR-07 | Pricing: Residential DSCR grid (RES-DSCR-12) + 0.50%. | JUDGMENT | Not sourced separately |

**Worked example: 8-unit building, both DSCR methods (illustrative)**

1. Inputs: purchase $1,200,000; FICO 745; rents $10,000 a month; taxes $1,100 and insurance $450 a month; loan 70% = $840,000.
2. Rate: 7.00% base + 0.25% (LTV 65.01-70%) + 0.50% (MF-DSCR-07) = 7.75%.
3. PITIA: P&I $840,000 × 0.0071641 = $6,017.86; + $1,550 = $7,567.86.
4. Gross method (F-RES-07): $10,000 ÷ $7,567.86 = 1.32x. Passes 1.20x.
5. NCF method (F-MF-10): EGI $120,000 × 95% = $114,000; OpEx at 45% of EGI (including taxes and insurance) $51,300; NOI $62,700; reserves 8 × $300 = $2,400; NCF $60,300. Debt service $6,017.86 × 12 = $72,214. DSCR = 0.84x.
6. Result: eligible on the gross test, but flagged for credit officer review (MF-DSCR-03). The same building looks safe or unsafe depending on the method.

**Small-balance term loan, 5-50 units (MF-TRM)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-TRM-01 | Stabilized: at least 90% occupied for 3 months. | MARKET | CLS, Mar 2026 |
| MF-TRM-02 | Min DSCR 1.25x on F-MF-10 at the note rate, 30-year amortization; 1.35x outside the top 50 metro areas. | MARKET + JUDGMENT | 1.20-1.25x standard; 1.30-1.40x small markets (Freddie tiers via Janover, Jul 2026). Metro cutoff is JUDGMENT |
| MF-TRM-03 | Max LTV 75% (purchase and rate-term); 70% cash-out. | MARKET | 75-80% typical; agency 75% cash-out (Greystone Fannie, 2026) |
| MF-TRM-04 | Min debt yield 8.0% on NCF. | JUDGMENT | Not sourced for term loans; ties to bridge exit floors |
| MF-TRM-05 | Term 5, 7 or 10 years fixed. Interest-only only at LTV 65% or less and DSCR 1.35x or more. | MARKET | Freddie full-term IO at 65% (Greystone, Apr 2026) |
| MF-TRM-06 | Prepayment: 5-4-3-2-1 step-down (5-year term), longer terms by year. | MARKET + LEGAL | Freddie SBL options (Lument, Jul 2025). \[VERIFY: State Law Table, prepayment column, SLT-XX-02\] |
| MF-TRM-07 | Loan $750,000 to $10,000,000. Under $2,000,000 full recourse; above, non-recourse with carve-outs. | JUDGMENT | Agencies non-recourse from $1-2M; small private loans recourse (Part 1F) |
| MF-TRM-08 | Pricing: 7.00% base (LTV ≤ 65%, DSCR ≥ 1.35x); +0.25% for LTV 65.01-75%; +0.25% for DSCR 1.25-1.34x; +0.25% interest-only; 1.00 point. | JUDGMENT | Agency small loans 6.4-6.8% (Walker & Dunlop, Apr 2026); private premium is a recommendation |

**F-MF-14: Term loan maximum**

```latex
MaxLoan = \min(\frac{NCF}{DSCR_{min} \times Constant},\ LTV_{max} \times Value,\ \frac{NCF}{DY_{min}})
```

Cedar Court after stabilization: NCF $560,000; value $8,600,000.

1. Try the 7.25% band (LTV ≤ 65%, DSCR 1.25-1.34x): constant 8.1861%.
2. DSCR test: $560,000 ÷ 1.25 ÷ 0.081861 = $5,472,681.
3. LTV test: 75% × $8,600,000 = $6,450,000. Debt-yield test: $560,000 ÷ 8.0% = $7,000,000.
4. Smallest: $5,472,681, rounded down to $5,472,000. LTV 63.6% (so the 7.25% band holds); DSCR 1.25x; debt yield 10.2%.

**Lease-up bridge (MF-LU)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-LU-01 | 100% of certificates of occupancy issued and at least 50% physically occupied. | JUDGMENT | Agency lease-up closes at 65% occupied, 75% leased (Lument, Jul 2026); private bridges enter at C of O (Peersense) |
| MF-LU-02 | Max 65% of cost; max 70% of as-stabilized value. | MARKET | 65-70% LTC (Peersense, May 2026); agency 70-75% as-stabilized |
| MF-LU-03 | Stabilized tests: DSCR 1.25x (F-MF-10 at take-out rate + 0.50%) and debt yield 8.5%. | MARKET + JUDGMENT | Agency lease-up 1.25-1.35x (Lument, Jul 2026); rate buffer and debt yield are JUDGMENT |
| MF-LU-04 | Interest reserve sized to projected stabilization + 6 months. Operating deficit guaranty until 3 months at 1.10x. | JUDGMENT | Deficit guaranties common (Multi-Housing News, 2026); sizing is a recommendation |
| MF-LU-05 | Sponsor has leased up at least 2 apartment projects of similar size. | MARKET | Greystone Monticello requires lease-up experience (OLD); Freddie lease-up eligibility |
| MF-LU-06 | Term 24 months; one 6-month extension at 0.50%; pricing SOFR + 400 bp with rate cap. | JUDGMENT | Private lease-up 18-36 months at 9.25-10.5% (Peersense, May 2026) |

## Multifamily Part 2D: Construction, subordinate capital, bridge pricing and exceptions

Construction limits are teaching limits only, set at bank levels: 60% of cost with full guaranties. Our senior loans allow mezzanine or preferred equity only up to 85% combined cost. Bridge pricing starts at SOFR + 375 bp.

**Construction (MF-CON): teaching limits, not an origination product**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-CON-01 | Max 60% of total cost; max 60% of as-stabilized value. | MARKET | Bank construction 60-65% (COR Advisors, Jul 2026; CLS, Apr 2026) |
| MF-CON-02 | Stabilized tests: DSCR 1.25x (F-MF-10 at take-out rate + 0.50%); debt yield 8.5%. | MARKET + JUDGMENT | Stabilized debt yield 8.0%+ (Apers, 2026); 1.20-1.25x (Janover, CLS) |
| MF-CON-03 | Guaranties: completion, interest carry, operating deficit, and 25% repayment guaranty that falls away after 2 quarters at 1.25x. | MARKET + JUDGMENT | Construction guaranties shift risk to sponsor (Multi-Housing News, 2026); burn-off terms are JUDGMENT |
| MF-CON-04 | Guaranteed maximum price contract with a licensed general contractor; hard-cost contingency at least 10%. | MARKET | 10-15% contingency (CLS, 2026) |
| MF-CON-05 | Interest reserve by F-MF-15 at 60% average outstanding. | MARKET | Real draw S-curve averages 60-65% (Apers, 2026; single source) |
| MF-CON-06 | Sponsor has completed at least 2 apartment developments of similar size. Pricing SOFR + 325 bp. | JUDGMENT | Bank spreads 275-400 bp (COR Advisors, Jul 2026) |

**F-MF-15: Construction interest reserve**

```latex
IR = Commitment \times \frac{Rate}{12} \times Months \times AvgOutstanding\%
```

1. Inputs: commitment $10,000,000; rate 8.00%; 24 months; 60% average outstanding.
2. Work: $10,000,000 × 8.00% ÷ 12 = $66,666.67 a month; × 24 = $1,600,000; × 0.60 = $960,000.
3. At the 50% rule of thumb it would be $800,000: $160,000 short.

**Mezzanine and preferred equity behind our loans (MF-MEZ)**

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| MF-MEZ-01 | We do not originate mezzanine or preferred equity. Our senior loans allow them only with our written consent and an intercreditor or recognition agreement. | MARKET | Intercreditor required (Greystone mezz, OLD; CLS, Jul 2026) |
| MF-MEZ-02 | Combined tests (F-MF-16): total debt at most 85% of cost and 80% of as-stabilized value; combined DSCR at least 1.10x on 30-year amortization of all debt. | MARKET | Mezz stops at 80-85% combined (Peersense, Mar 2026); 1.10x combined (Greystone DLA, OLD) |
| MF-MEZ-03 | Preferred equity with a fixed payment or a forced-sale right counts as debt in combined tests. | JUDGMENT | Hard-pay pref behaves like debt (COR Advisors, Sep 2026) |

**F-MF-16: Combined leverage**

```latex
CLTC = \frac{Senior + Mezz}{TotalCost}
```

1. Cedar Court: senior $5,140,000 + mezzanine $800,000 = $5,940,000.
2. Combined LTC: $5,940,000 ÷ $7,200,000 = 82.5% (cap 85%): passes.
3. Combined as-stabilized LTV: $5,940,000 ÷ $8,600,000 = 69.1% (cap 80%): passes. But combined DSCR (F-MF-27) on stabilized NCF, senior at 8.00% and mezzanine at 12.00%, is $560,000 ÷ $551,332.80 = 1.02x, below the 1.10x minimum. The mezzanine as sized fails MF-MEZ-02 (corrected 19 Nov 2026).

**Bridge pricing (MF-BR-14, applies to MF-BR and MF-SB)**

| Item | Spread or fee |
| --- | --- |
| Base (value-add bridge) | 1-month Term SOFR + 375 bp |
| Stabilized bridge | SOFR + 325 bp |
| Total commitment over 70% of cost | +25 bp |
| As-is debt yield below 8.0% | +25 bp |
| Occupancy below 85% | +25 bp |
| Origination | 1.00% |
| Exit fee | 0.50%, waived if refinanced into our MF-TRM loan |

BASIS: MARKET for the range (SOFR + 350-425 bp, CLS Q1 2026; Greystone Nov 2024), JUDGMENT for the grid.

**Exceptions.** Multifamily exceptions follow CORE-EXC and CORE-AUTH-01. Senior underwriters approve Residential loans only, so every multifamily loan goes to a credit officer (up to $2,000,000) or to committee (above). No exception is allowed to MF-GEN-09 (rent regulation), MF-BR-09 (rate cap), or an unresolved environmental finding in the Phase I report.

---

**Multifamily Part 2 complete. Say "continue" for Multifamily Part 3 (decisions and summary).**

## Multifamily Part 3A: Policy decisions

Thirteen decisions cover all 22 Multifamily JUDGMENT rules, the JUDGMENT parts of 8 mixed rules, and the three source conflicts: as-is debt yield, the small-multifamily DSCR method, and interest-reserve sizing. Option A is the Part 2 baseline. D-MF-11 also settled the former open question in Residential F-RES-16. \*\*Decided 18 Nov 2026: all 13 set to option A.\*\*

| ID | Rules covered | Options: pros (+) and cons (−) | Recommend |
| --- | --- | --- | --- |
| D-MF-01 | MF-GEN-01, -02, -03 | **A** 80% residential income; no specialty housing; $75,000 per unit minimum: + clean, focused scope. **B** 70% residential; $50,000 per unit: + wider market; − more mixed-use and low-value risk | A |
| D-MF-02 | MF-GEN-04, -05, -06, -10 | **A** Lesser-of income, 5% vacancy floor, 3% management floor, $300 per unit reserves: + conservative NCF. **B** T-12 income, actual vacancy, $250 reserves: + matches many small lenders; − overstates NCF in a weak year | A |
| D-MF-03 | MF-GEN-07 | **A** 2 apartment properties in 5 years, one at least half the size: + proven operator. **B** One 5+ unit property or three 1-4 rentals: + matches DSCR lenders; − thin for bridge. **C** 3 properties: + safest; − excludes growing sponsors | A |
| D-MF-04 | MF-BR-01 | **A** 75% occupied; capex at most 50% of price: + light value-add only. **B** 60% occupied; capex up to 75%: + teaches heavy value-add; − much higher execution risk | A |
| D-MF-05 | MF-BR-05 (conflict: 7.0% lender floor vs 5.6% median CLO loan) | **A** 7.0% as-is debt yield: + protects day-one cash flow. **B** 6.0%: + nearer the securitized market. **C** No as-is floor; rely on rate cap and interest reserve: + market-like; − weak day-one test | A |
| D-MF-06 | MF-BR-08, -11, -12, -13 (JUDGMENT parts) | **A** 0.50% exit rate buffer; extension needs 75% capex done and 7.5% debt yield; full recourse under $2M; repair escrow 125%: + strong controls. **B** No buffer; extension on no default only; full recourse under $1M; repair escrow 100%: + simpler; − weaker exit protection | A |
| D-MF-07 | MF-SB-03 | **A** 1.05x interest coverage; 8.0% debt yield: + cushion over break-even. **B** 1.00x; 7.5%: + matches typical lenders; − no cushion | A |
| D-MF-08 | MF-DSCR-03, -04, -07 (conflict: gross rent vs NCF method) | **A** Gross rent ÷ PITIA at 1.20x, NCF shown and reviewed below 1.00x; LTV 5 points under market; DSCR grid + 0.50%: + teaches both methods. **B** Gross method only, market LTVs: + simplest; − hides expense risk. **C** NCF only at 1.15x: + most realistic; − off-market for 5-10 unit loans | A |
| D-MF-09 | MF-TRM-02, -04, -07, -08 | **A** 1.25x (1.35x outside top 50 metros); 8.0% debt yield; full recourse under $2M; grid from 7.00%: + agency-like discipline. **B** 1.20x / 1.30x; no debt-yield floor; recourse under $1M: + more proceeds; − thinner cushion | A |
| D-MF-10 | MF-LU-01, -03, -04, -06 | **A** Enter at C of O and 50% occupied; 1.25x at take-out + 0.50%; 8.5% debt yield; deficit guaranty; SOFR + 400: + early but guarded. **B** Enter at 65% occupied and 75% leased (agency standard); no rate buffer: + less lease-up risk; − later, so less useful to borrowers | A |
| D-MF-11 | MF-CON-02, -03, -05, -06, and Residential F-RES-16 (conflict: 50% vs 60-65% average balance) | **A** 60% average outstanding for multifamily and residential ground-up: + matches draw-curve evidence. **B** 50% for both: + common rule of thumb; − underfunds interest. **C** 60% multifamily, 50% residential: + short builds draw faster; − two rules to teach | A |
| D-MF-12 | MF-MEZ-03 | **A** Hard-pay preferred equity counts as debt in combined tests: + reflects real risk. **B** All preferred equity excluded: + simpler; − understates leverage | A |
| D-MF-13 | MF-BR-14 (grid) | **A** SOFR + 375 bp base with 25 bp adjusters: + teaches risk-based pricing. **B** Flat SOFR + 375 bp: + simple; − no link to risk | A |

## Multifamily Part 3B: Summary of Multifamily limits

**Model policy for training - not for live lending decisions.** As of 18 Nov 2026. Figures are the confirmed option A in every D-MF decision (decided 18 Nov 2026). Core limits (FICO 680, liquidity, net worth 100% of commitment, concentration, approval) apply on top. All sources US-only.

| Loan type | Max leverage | Coverage and debt yield | Experience | Term and extensions | Pricing (illustrative) | Reserves and guaranties |
| --- | --- | --- | --- | --- | --- | --- |
| Value-add bridge (MF-BR) | 70% as-is (funded); 75% of cost; 70% as-stabilized (fully funded) | As-is DY 7.0%; stabilized DY 8.5%; interest coverage at cap ≥ 1.00x or reserve; exit 1.25x at agency + 0.50% | 2 apartment properties in 5 years | 24 months; 2 × 6 months at 0.50% | SOFR + 375 bp + adjusters; 1.00% fee; 0.50% exit fee | Rate cap; T&I and $300 per unit reserves; 125% repair escrow; full recourse under $2M, carve-outs and completion guaranty above |
| Stabilized bridge (MF-SB) | 70% as-is | 1.05x interest coverage; DY 8.0%; exit as MF-BR | As MF-BR | 12-24 months; 1 × 6 months at 0.50% | SOFR + 325 bp | Rate cap; escrows as MF-BR |
| Small MF DSCR, 5-10 units (MF-DSCR) | By FICO: 70-75% purchase; 65-70% rate-term; 60-65% cash-out | Gross rent ÷ PITIA ≥ 1.20x; NCF DSCR < 1.00x goes to review | One 5+ unit or three 1-4 rentals; FICO 700+ | 30-year fixed; 3/2/1 prepay | Residential DSCR grid + 0.50% | 6 months PITIA; full recourse |
| Small-balance term (MF-TRM) | 75%; 70% cash-out | NCF DSCR 1.25x (1.35x outside top 50 metros); DY 8.0% | As MF-BR | 5/7/10-year fixed; IO only ≤ 65% LTV and ≥ 1.35x | 7.00% base + adjusters; 1.00 point | Escrows; full recourse under $2M, carve-outs above |
| Lease-up (MF-LU) | 65% of cost; 70% as-stabilized | Stabilized 1.25x at take-out + 0.50%; DY 8.5% | 2 similar lease-ups | 24 months; 1 × 6 months at 0.50% | SOFR + 400 bp | Interest reserve to stabilization + 6 months; deficit guaranty to 3 months at 1.10x |
| Construction (MF-CON), teaching only | 60% of cost; 60% as-stabilized | Stabilized 1.25x; DY 8.5% | 2 similar developments | Per project | SOFR + 325 bp | 10% contingency; interest reserve at 60% average (F-MF-15); completion, carry, deficit and 25% repayment guaranties |
| Mezzanine / preferred equity behind our loans (MF-MEZ) | Combined 85% of cost; 80% as-stabilized | Combined DSCR 1.10x, all debt amortizing | n/a | Coterminous | Not priced by us | Intercreditor and our written consent |

All multifamily loans: 5+ units; 80%+ residential income; $75,000 per unit minimum; MAI appraisal, property condition and Phase I reports (MF-GEN rules).

---

**Multifamily complete. Its running deal, RD-MF-01, is in the Running Deals tab. Commercial follows.**

# Commercial

## Commercial Part 1: Overview and securitization anchors

Commercial bridge lending prices and sizes by property type. Industrial and grocery-anchored retail get the most leverage; office gets the least, at 55-65% LTV and the widest spreads. Lenders test LTV, DSCR and debt yield together, with debt-yield floors of 7-10% by asset class. All sources are US-only. Owner-user loans are out of course scope (Course Bible Section 1) and appear only as reference points in 1C.

**Securitization and market anchors (US)**

| Item | Publisher | Key figures | Date |
| --- | --- | --- | --- |
| CMBS new-issue cap rates by sector | CRED iQ via CRE Daily | Hospitality 8.02%, office 7.45%, retail 6.81%, mixed-use 6.10%, industrial 6.03%, self-storage 5.70% | 2026 |
| Office CMBS loans that reach market | CRED iQ via CRE Daily | WA debt yield 13.8%; LTV 55.4% | 2026 |
| CMBS leverage, Jun-Aug 2026 | CRED iQ via CRE Daily | Office LTV 49.5%, DSCR 1.94x; retail LTV 47.8%; retail, industrial, self-storage at lower leverage | 2026 |
| Debt-yield floors | Select Commercial | Typically 7-10% by asset class; multifamily, industrial and grocery-anchored retail price tighter; hotel, office, special-use wider | 24 Oct 2026 |
| CRE CLO pools | CREFC Securitized Debt Updates | WA spreads SOFR + 288-335 bp; pools mix multifamily, hotel, industrial, self-storage, office | May 2026 |
| Self-storage portfolio SASB | CREFC | Underwritten at 73.5% LTV, 7.0% debt yield, 1.16x DSCR | 28 Apr 2026 |
| Bank supervisory LTV reference | OCC CRE Lending handbook (Interagency Guidelines) | Commercial construction 80% and land development 75% (confirmed: Terrapin, Sep 2026, citing 12 CFR Part 365); improved property 85%; raw land 65% (all read on eCFR, 12 CFR Part 365 App. A, 18 Nov 2026) | Mar 2022 (OLD). \[VERIFY: 12 CFR Part 34, Appendix A to Subpart D\] |

## Commercial Part 1A: Commercial bridge, common parameters

Commercial bridge loans run 12-36 months, interest-only, at SOFR + 400-500 bp for mid-tier sponsors (8-14% all-in), with 65-75% leverage. TI/LC and capex are future-funded; cash management tightens as risk rises.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Max as-is LTV | 50% (asset-based, no income verification) | 65-75% | 80% (MAX) | Peersense, Mar 2026; Peersense bridge rates, Jul 2026; Ladder under 75% (May 2025); Lev, Aug 2026 |
| Max LTC (incl. TI/LC and capex) | 60% (bank initial) | 65-75% | 75% (bridge total) | Apers (NAIOP/MBA data), May 2026; JLL financing guidance (N.D.) |
| Max as-stabilized LTV | 60% | 70-75% | 75% | Buchanan Street, Jul 2026; Ladder (May 2025) |
| Min DSCR | 1.15x stabilized | 1.20-1.25x (trailing or stabilized) | 1.35x | Lev, 2025-2026; Wiss (N.D.); Peersense matrices, May 2026 |
| Debt yield floor | 7% | 7-10% | 9.5%+ (office CMBS) | Select Commercial, Oct 2026; Peersense office CMBS (2026) |
| Spread | SOFR + 350 bp | SOFR + 400-500 bp (mid-tier office, retail, industrial) | SOFR + 970 bp | Rets.ai, Jul 2026; Apers, May 2026; Peersense, Jul 2026 |
| All-in rate | 8.0% (bank bridge) | 9.5-11.5% (debt fund) | 14% | Lev, Aug 2026; Peersense, Jul 2026 |
| Origination fee | 0.50% | 1.00-1.50% | 1.50% | Apers, May 2026; Ladder 1.00% (May 2025) |
| Exit fee | None | 1.0%, waived if lender refinances | 1.0% | Ladder (May 2025) |
| Term | 12 months | 12-36 months + extensions | 60 months incl. extensions | Lev, Jul 2026; Buchanan Street 12-60, Jul 2026 |
| Future funding | n/a | Capex, TI/LC, interest and carry reserves funded per business plan | 100% of TI/LC and capex, non-accruing until drawn | Ready Capital, Jan 2025; Buchanan Street, Dec 2025 |
| Earn-outs | None | Available | n/a | Ready Capital, Jan 2025 |
| Cash management | Springing lockbox (stabilized) | Hard lockbox on higher-risk assets | Cash sweep on DSCR or rollover triggers | Commercial Loan Direct, 21 May 2026 |
| TI/LC reserves | Deal-specific | Upfront and ongoing for office and retail | Front-loaded for lease rollover | Ladder (May 2025); Greystone CMBS sheet (OLD); Peersense office CMBS (2026) |
| Re-leasing assumption | n/a | Stressed rents 10-25% below market on rollover | n/a | Peersense office CMBS (2026) |
| Recourse | Non-recourse with carve-outs | Carve-outs (institutional); partial or full (smaller loans, weak assets) | Full recourse | Ready Capital, Jan 2025; Buchanan, 2026; Peersense matrices, May 2026 |
| Borrower | Single-purpose entity | SPE required | n/a | Ladder (May 2025); Greystone CMBS (OLD) |

## Commercial Part 1B: Bridge by property type

Leverage falls and pricing rises from industrial and grocery-anchored retail, through unanchored retail and mixed-use, to office. Self-storage lease-up is underwritten on a rent ramp rather than trailing income.

| Property type | Max LTV (low / typical / high) | Min DSCR | Rate (2026) | Term | Recourse | Sources |
| --- | --- | --- | --- | --- | --- | --- |
| Retail: grocery-anchored | 65% / 70-75% / 75% | 1.25x trailing | 9.5-10.75% | 18-36 months | Non-recourse | Peersense retail matrix, May 2026; Peersense bridge rates, Jul 2026 |
| Retail: unanchored strip | 60% / 65-70% / 75% | 1.20-1.35x (median 1.25x) | 10.5-11.75% | 18-36 months | Majority full, some partial | Lev unanchored centers, Jan-Jun 2026; Peersense, May 2026; CLS strip center, Jul 2026 |
| Retail: power center / mall | 50% / 60-70% / 70% | 1.25-1.30x | 10.5-12.0% | 18-36 months | Partial to full | Peersense, May 2026 |
| Office: Class B repositioning | 55% / 55-60% / 65% | 1.15x stabilized | 11.5-13.0% | 24-36 months | Full, burning off | Peersense office matrix, May 2026; Peersense bridge rates, Jul 2026 |
| Office: medical | 60% / 60-70% / 75% LTC | 1.20-1.25x | 9.25-12.0% | 12-36 months | Partial or burn-off | Peersense office and medical office, May 2026 |
| Industrial / flex | 60% / 65-70% / 75% | 1.25x stabilized; 1.25-1.30x in-place (flex) | 9.0-10.75% | 12-36 months | Non-recourse at size | Peersense industrial, May 2026; CLS self-storage vs flex, May 2026; Lev core industrial (2026) |
| Mixed-use: retail-dominant | 60% / 60-65% / 65% | 1.25x trailing | 10.0-11.5% | 18-36 months | Partial | Peersense mixed-use, 2026 |
| Mixed-use: multifamily-dominant (70%+ residential NOI) | 70% / 70-75% / 75% | 1.25x trailing | 9.0-10.5% | 18-36 months | Non-recourse ($10M+) | Peersense mixed-use, 2026 |
| Self-storage: stabilized acquisition | 65% / 65-75% / 75% | 1.25-1.35x on stabilized NOI | 9.25-11.0% | 12-36 months | Non-recourse ($10M+) | Peersense self-storage, May 2026; CLS, May 2026; Inside Self Storage (2026) |
| Self-storage: C of O lease-up | 70% / 70-75% LTC / 80% (MAX) | Sized to projected occupancy | 9.75-10.75% | 18-36 months | Varies | Peersense, May 2026; Extra Space bridge program (N.D., MAX); CLS climate-controlled, 2026 |

**Findings worth teaching**

- Office needs the most protection: lower leverage, stressed re-leasing rents, front-loaded TI/LC reserves, and long WALT for permanent take-out.
- In 2026 storage debt is often DSCR-bound, not LTV-bound, because cap rates sit below loan coupons (CRED iQ: storage cap rate 5.70% vs coupon 6.05%).
- Peersense is a broker publishing indicative matrices, not a lender. Its numbers are used because they are dated and split by property type; Lev and CLS quote data confirm the ranges.

## Commercial Part 1C: Owner-occupied vs investor (reference points)

Owner-user loans size on the operating business's cash flow and reach 80-90% leverage through banks and the SBA. Investor loans size on rent from third-party tenants at 65-80%. Owner-user lending is out of course scope (decided 18 Nov 2026), so this section only teaches the difference and the SBA and bank benchmarks.

| Feature | Investor (in scope) | Owner-occupied (reference only) | Sources |
| --- | --- | --- | --- |
| Repayment source | Rent from third-party tenants | The occupying business's cash flow | Wiss (N.D.); x2mortgage (2026) |
| Typical max LTV | 65-80% | 80% (bank); up to 90% (SBA; some owner-occupied office programs) | x2mortgage (2026); Riverview Bank, 2026; Select Commercial office, Nov 2026 |
| Min DSCR | 1.20-1.25x on property NOI | Business and global cash flow tested | Financer (2026); x2mortgage (2026) |
| Occupancy rule | n/a | Business must occupy at least 51% (60% for new construction under SBA) | Riverview Bank, 2026; RentalRealEstate SBA, Apr 2026 |
| Rate (2026) | 6.5-8.5% permanent; 8-14% bridge | Bank 5.75% promo to 6.5-8%; SBA 504 CDC 6.58-6.59% | x2mortgage; Lev, Aug 2026; Riverview Bank; Bay Street Lending, Nov 2026 |

**SBA reference points (government programs; not products in this policy)**

| Program | Key limits | Source |
| --- | --- | --- |
| SBA 504 | Owner-occupied real estate and major equipment only; 50% bank / 40% CDC / 10% borrower; CDC debenture up to $5M ($5.5M for small manufacturers and energy projects); 10, 20 or 25-year terms; no investment property | Lev, 2026; NerdWallet, 2026; Clearly Acquired, 2026 |
| SBA 504 rate | CDC portion 6.58-6.59% at the 5 Nov 2026 debenture sale (20 and 25-year) | Bay Street Lending, Nov 2026 |
| SBA 7(a) | Up to $5M; real estate maturity up to 25 years; variable rates capped at 10.00-13.50% on a 7.00% base rate (Nov 2026); businesses in rental real estate or investing are ineligible | Bay Street Lending, Nov 2026; sba7a.loans (citing sba.gov), Jul 2026; Policy Risk wiki (2026) |
| 7(a) + 504 stacking | From 4 Jul 2026, $5M 7(a) plus $5M 504 debentures, up to $10M combined (7(a) approved first) | The CO Letter, 2026; CDC Small Business Finance, 2026 |

&#91;VERIFY: SBA limits and eligibility against SBA SOP 50 10 and sba.gov before teaching them as current; checked 18 Nov 2026 only through secondary sources\]

**Teaching point.** A building that is 51% owner-occupied is an owner-user loan even if 49% is leased to tenants. The course's business-purpose test (C1) and scope rule mean such loans are declined or referred, not underwritten.

## Commercial Part 1E: Commercial term (permanent) loans

Stabilized commercial property refinances into 5-10 year fixed loans from banks, CMBS conduits and life companies, usually at 60-75% LTV, 1.20-1.30x DSCR and an 8-10% debt yield. Required coverage rises with property risk: about 1.25x industrial, 1.30-1.35x anchored retail, 1.40x+ office.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Max LTV | 60% (life company) | 65-75% | 75% (CMBS, bank) | RentalRealEstate commercial, Apr 2026; CLS life company, Oct 2026; CBRE note (2026) |
| LTV by property type | Office 55-65% | Industrial and net-lease retail 65-70% | Multifamily 70-75% | Daylongs CRE rates guide (2026); CLS rate commentary, Apr 2026 |
| Min DSCR | 1.15-1.20x (credit net lease) | 1.20-1.30x; 1.25x CMBS | 1.30x+ life company; 1.40x+ office | CLS permanent rates, Nov 2026; Rets.ai permanent loan (2026); Commercial IQ, May 2026 |
| Debt yield | 8% | 8-10% | 13.2% (2026 conduit average) | Rets.ai citing Peersense (2026); CommercialCafe (2026); CRE Daily conduit stats (2026) |
| Rate | 5.84% (top-tier life company) | 6.0-8.75% by lender | 8.09% (bank and credit union) | CLS live rates, 5 Nov 2026; RentalRealEstate, Apr 2026 |
| Spread | 154 bp (60-65% LTV, Mar 2026) | Life company \~170 bp; CMBS \~250 bp | n/a | Commercial Observer (CRED iQ), Apr 2026; GlobeSt, 22 Apr 2026 |
| Term and amortization | 5 years | 5-10 years; 25-30 year amortization | 20 years (life company) | RentalRealEstate, Apr 2026; Peersense rates, Jul 2026 |
| Interest-only | None (bank) | Partial | Full term (93%+ of conduit loans) | CRE Daily, 2026 |
| Prepayment | Step-down (bank) | Yield maintenance or defeasance (CMBS, life company) | Lockout | Ladder (May 2025); COR Advisors CMBS, Aug 2026 |
| Recourse | Non-recourse (CMBS, life company) | Usually recourse (bank) | Full recourse | COR Advisors CMBS comparison, Aug 2026 |
| Loan size | $500,000 (bank) | $2M+ (CMBS) | $5M+ (life company) | RentalRealEstate, Apr 2026 |

**Teaching point.** Final loan = the lowest of what LTV, DSCR and debt yield allow (CommercialCafe, 2026). A $500,000 NOI at a 9% debt-yield floor caps the loan near $5.55M whatever LTV says (Commercial IQ, May 2026).

## Commercial Part 1F: Small-balance commercial (SBC) DSCR loans

SBC lenders make $250,000-$5M investor loans on small retail, office, industrial and mixed-use buildings, qualifying on property cash flow rather than tax returns. Coverage runs 1.20-1.25x (1.25-1.35x for retail), at 65-75% LTV. Velocity's rated pools show what the product looks like at scale.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Eligible property | 2-8 unit mixed-use (at least 1 commercial unit) | Small retail, office, light industrial, mixed-use | Auto service, commercial condo, daycare (in rated pools) | The Lender NONI58+, Jul 2025; CMRE commercial DSCR (2026); KBRA VCC 2026-4, 6 Oct 2026 |
| DSCR calculation | Gross rent ÷ PITIA (2-8 mixed-use programs) | NOI ÷ annual debt service | NOI with retail rollover stress | The Lender NONI58+ (2025); CMRE (2026); Biz2Credit (2026); COR Advisors, Oct 2026 |
| Min DSCR | 1.00x (mixed-use non-QM) | 1.20-1.25x | 1.25-1.35x (retail, unanchored) | EMM NONI58 (Jan 2023, OLD); COR Advisors no-doc CRE, Oct 2026; alc-lending program page (N.D., weak) |
| Max LTV | 60-65% (larger loans, cash-out) | 65-75% | 80% (MAX) | The Lender NONI58+ (2025); COR Advisors, Oct 2026; CMRE 75% (2026) |
| Pool leverage (rated) | n/a | WA appraisal LTV 61.0%; WA FICO 696 | n/a | KBRA, VCC 2026-1, 12 Feb 2026 |
| Loan size | $31,500 (smallest in a rated pool) | Average about $365,000; programs $500,000-$5M | $10M | KBRA VCC 2026-1; CMRE (2026); alc-lending (weak) |
| Min FICO | 640 | 650-680 | 700+ for best pricing | CMRE 640 (2026); COR Advisors, Oct 2026 |
| Experience | Owned and managed real estate 1 year in the last 3 | Required for mixed-use; first-time investors excluded | n/a | eLEND, May 2026; The Lender NONI58+ (2025) |
| Reserves | 6 months | 6 months | 12 months | EMM NONI58 (OLD); A&D 5-8 unit (N.D.) |
| Term | 5-year fixed | 5, 7, 10-year fixed; up to 30-year amortization | 30-year fixed | CMRE commercial (2026) |
| Rate | 8.5% | 8.5-10% | n/a | CMRE commercial from 8.5% (2026); range thin |

**Gap.** Few SBC lenders publish full guidelines. The rated Velocity pools (KBRA) and non-QM mixed-use matrices give the most solid numbers; broker pages fill in the rest.

## Commercial Part 1G: Single-tenant net lease (NNN)

One tenant pays rent plus taxes, insurance and maintenance. Lenders underwrite the tenant first and the building second. Investment grade means Baa3 or higher (Moody's) or BBB- or higher (S&P). For non-credit tenants, dark value and replacement rent set the floor for loan size.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Max LTV | 40% (actual closed bank deal) | 65-70% (shorter lease or big box) | 70-75% (investment-grade, 10+ years left) (MAX: best-case pricing) | CLS bank program (2026); Peersense CVS, May 2026; Select Commercial, Sep 2026 |
| Min DSCR | 1.15x (credit tenant) | 1.20-1.25x | 1.25-1.35x (big box) | Commercial IQ, May 2026; CLS STNL rates, Oct 2026; CLS big box (2026) |
| Amortization for DSCR test | n/a | 25 years | n/a | CLS STNL bank program (2026) |
| Remaining lease term | 7 years minimum (bank) | Lease runs 5-7 years past loan maturity | 15-25 years (big box initial) | CLS bank program; CLS net lease overview; CLS big box (all 2026) |
| Loan term | 5 years | 10-year fixed, matched to lease | 25 years | Peersense guide, Mar 2026; CLS big box (2026) |
| Rate, investment-grade | 5.75% | 6.00-7.75% | 7.75% | Peersense CVS, May 2026; CLS STNL, Oct 2026 |
| Rate, non-credit or franchisee | 6.75% | 6.75-8.75% | 8.75% | CLS STNL, Oct 2026 |
| Cap rate (Q2 2026) | Retail 6.60% | Overall 6.82% | Office 7.90%; industrial 7.25% | Select Commercial citing Q2 2026 data, Sep 2026 |
| Recourse | Non-recourse with carve-outs | Non-recourse (CMBS, life company) | Recourse (bank) | Peersense guide, Mar 2026; CLS big box (2026) |
| Min loan | $540,000 (closed bank example) | $1M-$1.5M | n/a | CLS bank program; Peersense; Select Commercial (2026) |

**Teaching point.** On low-cap-rate credit deals, DSCR binds before LTV (CLS, Oct 2026). Example: a 6.60% cap rate on a $2,000,000 value gives $132,000 NOI. At 6.37% on 25-year amortization, the annual constant is about 8.00%. At 1.20x, debt service can be $110,000, so the loan is $1,375,000, or 68.8% LTV, below the 75% headline.

## Commercial Part 1H: Commercial construction and land

Construction loans fund land, hard costs, soft costs and an interest reserve. They are sized by the lower of LTC and LTV-on-completion. Banks want pre-leasing, 10-15% contingency and full recourse; debt funds go higher on leverage at higher rates.

| Parameter | Low | Typical | High | Sources |
| --- | --- | --- | --- | --- |
| Max LTC | 60-65% (bank) | 65-75% | 80-90% (MAX: marketing, strict conditions) | CLS construction, Oct 2026; Terrapin (2026); Reynolds, May 2026 |
| LTV on completion (sizing check) | 65% | 65-75% | 80% (supervisory ceiling) | CLS construction landing (2026); Terrapin, Sep 2026 citing 12 CFR Part 365 \[VERIFY: 12 CFR 365 App A, checked 18 Nov 2026\] |
| Contingency | 10% | 10-15% | 15% | Daylongs CRE guide (2026) |
| DSCR at stabilization | 1.20x (2025 bank) | 1.25x | 1.25x+ with stress test | COR Advisors construction, Apr 2026 |
| Pre-leasing | None (spec, debt fund) | Required by many banks; anchor tenant signed for industrial | n/a | Reynolds, May 2026; CLS construction, Oct 2026. Office bank lenders 30-50% (WealthManagement, undated); anchor 30%+ improves LTC (CLS, undated) |
| Term | 12 months | 12-36 months, plus optional mini-perm | 36 months | CLS construction, Oct 2026 |
| Interest-only | n/a | IO on drawn balance; interest reserve inside loan | n/a | CLS construction; Terrapin (2026) |
| Rate | 7.75% (bank) | 7.75-9.25% bank; 9.25-10.75% debt fund | 10.75% | CLS construction, Oct 2026 |
| Recourse | Non-recourse (loans over $20M) | Full recourse | Full recourse | CommercialRealEstate.loans (2026); Daylongs (2026) |
| Land development LTV | n/a | n/a | 75% (supervisory ceiling) | Terrapin citing 12 CFR Part 365 \[VERIFY\] |
| Raw land LTV | n/a | n/a | 65% (supervisory ceiling) | 12 CFR Part 365 App. A (eCFR, read 18 Nov 2026) \[VERIFY before live use\] |

**Teaching point.** Retail, office and hotel construction price wider than multifamily or industrial because leasing is uncertain (CLS, Oct 2026). Example: a $8,000,000 project at 70% LTC allows $5,600,000. If the completed value is $8,400,000, 75% LTV allows $6,300,000. The loan is the lower: $5,600,000 (matches Terrapin's worked case).

## Commercial Part 1D: Sources and gaps (US only)

**Gaps against your source rules**

- Property-type splits lean heavily on one broker's dated matrices (Peersense). Lev quote data, CLS, Ready Capital, Ladder and Buchanan confirm the general ranges, but few lenders publish terms by property type.
- No rating-agency CRE CLO or CMBS criteria were readable; CREFC weekly updates and CRED iQ data are used instead.
- SBA figures come from secondary sources, not sba.gov or the SBA SOP directly. Tagged \[VERIFY\].
- Resolved 18 Nov 2026: bank supervisory LTV figures confirmed against 12 CFR Part 365 Appendix A on eCFR.
- No published standards for TI/LC reserve amounts per square foot beyond one broker's ranges ($15-$40 per sf for strip retail re-tenanting).

**Sources read for Commercial (checked 18 Nov 2026)**

| Publisher | Title | Date | Flag |
| --- | --- | --- | --- |
| CRE Daily (CRED iQ data) | [CMBS lending concentrates in multifamily and office](https://www.credaily.com/?p=223084); [CMBS data shows zero leverage](https://www.credaily.com/?p=218947) | 2026 |  |
| CREFC | [Securitized Debt Update, 28 Apr 2026](https://www.crefc.org/cre/content/News/Items/Research_and_Data/CRE_Securitized_Debt_Update_4_28_26.aspx); [5 May 2026](https://www.crefc.org/cre/cre/content/News/Items/Research_and_Data/CRE_Securitized_Debt_Update_5_5_26.aspx); [12 May 2026](https://www.crefc.org/cre/content/News/Items/Research_and_Data/2026/CRE_Securitized_Debt_Update_5_12_26.aspx) | Apr-May 2026 |  |
| Select Commercial | [Commercial mortgage rates](https://www.selectcommercial.com/commercial-mortgage-rates.php); [Office loans](https://selectcommercial.com/commercial-real-estate-loans/office-building-loans/) | Oct-Nov 2026 |  |
| Peersense | [Bridge loan rates](https://peersense.com/bridge-loan-rates); [Office](https://peersense.com/bridge-loans/office); [Retail](https://peersense.com/bridge-loans/retail); [Industrial](https://peersense.com/bridge-loans/industrial); [Mixed-use](https://peersense.com/bridge-loans/mixed-use); [Self-storage](https://peersense.com/bridge-loans/self-storage); [Medical office](https://peersense.com/bridge-loans/medical-office); [Office CMBS](https://peersense.com/cmbs-loans/office) | May-Jul 2026 | Broker, not lender |
| Lev | [What is a bridge loan](https://www.lev.com/blog/what-is-a-bridge-loan-2026); [Unanchored center bridge loans](https://www.lev.com/blog/unanchored-center-bridge-loans-nationally); [SBA 504](https://www.lev.com/blog/sba-504-loans-owner-occupied-cre-2026) | 2026 |  |
| Apers | [Bridge loans: floating-rate risk](https://apers.app/learn/capital-structure/senior-debt/bridge-loans-floating-rate-risk-exit-assumptions) | May 2026 |  |
| Ready Capital | [Commercial Bridge flyer](https://readycapital.com/wp-content/uploads/2025/01/Commercial-Bridge-flyer_FINAL-1.25.pdf) | Jan 2025 |  |
| Ladder Capital | [Lending Parameters](https://www.laddercapital.com/wp-content/uploads/2025/05/Lending-Parameters.pdf) | May 2025 |  |
| Buchanan Street Partners | [Tear sheet](https://www.buchananstreet.com/wp-content/uploads/2026/07/BSP-Tear-Sheet-Juy-2026.pdf); [Winter tear sheet](https://www.buchananstreet.com/wp-content/uploads/2025/12/BMH-Winter-Tear-Sheet-2025_Final-1-1.pdf) | Dec 2025; Jul 2026 |  |
| CLS CRE | [Strip center financing](https://clscre.com/property/strip-center-unanchored-retail-financing.html); [Self-storage vs flex](https://clscre.com/comparisons/self-storage-vs-flex-industrial-financing.html); [Climate-controlled storage](https://clscre.com/blog/climate-controlled-self-storage-financing.html) | 2026 |  |
| Commercial Loan Direct | [Cash management and reserve rules](https://commercialloandirect.com/2026-cre-loan-proceeds-cash-management-reserve-rules) | 21 May 2026 |  |
| Greystone | [CMBS fixed-rate term sheet](https://www.greystone.com/wp-content/uploads/2020/06/CMBS-Lending-Fixed-Rate-Loan-Term-Sheet.pdf) | 2020 upload | OLD |
| Inside Self Storage | [Financing for self-storage acquisitions](https://www.insideselfstorage.com/financing/a-comprehensive-guide-to-financing-for-self-storage-acquisitions) | 2026 |  |
| Extra Space Storage | [Bridge loan program](https://www.extraspace.com/inside-exr/third-party-management/extra-space-storage-bridge-loan-program/) | N.D. | N.D., MAX |
| Riverview Bank | [Owner-occupied CRE](https://www.riverviewbank.com/business/owner-occupied-commercial-real-estate) | 2026 |  |
| x2mortgage | [Commercial property loans](https://x2mortgage.com/blog/everything-you-need-to-know-about-commercial-property-loans) | 2026 |  |
| Bay Street Lending | [SBA loan rates and terms](https://www.baystreetlending.com/lending-resources/sba-loan-rates-and-terms) | Nov 2026 |  |
| The CO Letter | [The real math on the new SBA loan cap](https://thecoletter.beehiiv.com/p/the-real-math-on-the-new-sba-loan-cap) | 2026 |  |
| sba7a.loans | [SBA 7(a) terms](https://sba7a.loans/sba-7a-loan-terms-rates-fees-maturity) | Jul 2026 |  |
| NerdWallet | [SBA loan rates](https://www.nerdwallet.com/article/small-business/sba-loan-rates) | 2026 |  |

**Sources added for 1E-1H (all US; as of 18 Nov 2026).**

| Source | Date | Used for | Flag |
| --- | --- | --- | --- |
| CLS CRE live permanent rates | 5 Nov 2026 | 1E rates, DSCR | Broker |
| CLS STNL rates; STNL bank program; big box; construction rates | Oct 2026 | 1G, 1H | Broker |
| Commercial Observer (CRED iQ spreads) | Apr 2026 | 1E spreads |  |
| GlobeSt spreads article | 22 Apr 2026 | 1E spreads |  |
| CRE Daily conduit stats; CREFC securitized debt update | 2026 | 1E debt yield, IO |  |
| RentalRealEstate commercial loans | Apr 2026 | 1E LTV, size | Broker |
| Commercial IQ DSCR by asset class | May 2026 | 1E, 1G DSCR | Weak (blog) |
| KBRA VCC 2026-1 and 2026-4 rating releases | Feb and Oct 2026 | 1F pool data | Strong (rating agency) |
| The Lender NONI58+ matrix | Jul 2025 | 1F mixed-use | Lender |
| EMM NONI58 matrix | Jan 2023 | 1F reserves, DSCR | OLD (over 24 months) |
| CMRE commercial DSCR; alc-lending | 2026; N.D. | 1F size, rate | Weak (marketing) |
| COR Advisors no-doc CRE; construction | Oct 2026; Apr 2026 | 1F, 1H | Blog |
| Peersense NNN guide; CVS and Walgreens pages | Mar-May 2026 | 1G | Broker |
| Select Commercial NNN | Sep 2026 | 1G LTV, cap rates | MAX (best case) |
| Terrapin construction rates; qualifier | Sep 2026 | 1H LTC, supervisory LTV | Contractor site |
| Reynolds construction; Daylongs CRE guide | May 2026; 2026 | 1H LTC high, contingency | MAX; weak |

**Gaps added for 1E-1H.**

- Partly resolved 18 Nov 2026: bank office pre-leasing 30-50% (WealthManagement, undated) and anchor pre-leases of 30%+ (CLS, undated). No dated 2026 lender figure yet (1H).
- Resolved 18 Nov 2026: raw land 65% confirmed in 12 CFR Part 365 Appendix A (1H).
- SBC DSCR rates are thin; only one lender's starting rate found (1F).
- Several lender figures (for example the bank LTC table) come from blogs, not the lender (1E, 1H).
- Done 18 Nov 2026: 80% and 75% read on eCFR. Recheck before any live use \[VERIFY\].

**Sources added in the 18-19 Nov 2026 check-up research (all US).**

| Source | Date | Used for | Flag |
| --- | --- | --- | --- |
| eCFR, 12 CFR Part 365 Appendix A | Read 18 Nov 2026 | Supervisory LTV limits | Primary (regulation) |
| Beveridge & Diamond; EnSafe; Winston & Strawn on 40 CFR Part 312 | Dec 2022-Feb 2023 | COM-GEN-14 (ASTM E1527-21) | OLD (over 24 months) but still the governing rule; law-firm summaries |
| WealthManagement on spec office financing | Undated | COM-CON-05 pre-leasing | Weak (no date) |
| CLS how to qualify for construction loans | Undated | COM-CON-05, contingency | Broker |
| Terrapin construction qualifier | 2026 | COM-CON-07 office 1.35x | Contractor site |
| CMBS free-writing prospectus (capedge) | 2024 | COM-GEN-07 TI/LC $/sf | Primary (offering) |
| MMCG on replacement reserves | Undated | COM-GEN-07 replacement $/sf | Weak (no date) |
| Trading Economics; YCharts 10-year Treasury | 6-16 Nov 2026 | F-COM-10 take-out rate | Market data |

---

**Commercial Part 1 complete, now including 1E term loans, 1F SBC DSCR, 1G single-tenant NNN and 1H construction and land. Say "continue" for Commercial Part 2 (model policy).**

## Commercial Part 2A: Rules for all commercial loans

Every commercial loan is underwritten on signed leases, a reconciled rent roll and a T-12, with TI/LC and replacement reserves deducted (F-COM-03). Loans are sized by the lowest of LTV or LTC, DSCR and debt yield (F-COM-08). Core rules apply in full. New topic codes GEN, BR, TRM, DSCR, NNN, CON and LND were added to Course Bible 5.7 on 18 Nov 2026.

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| COM-GEN-01 | Eligible: investor-owned retail, office, industrial/flex, mixed-use and self-storage. | JUDGMENT | Scope chosen for this course (Part 1 overview) |
| COM-GEN-02 | Out of scope: owner-occupied (51%+ occupied by borrower's business), hospitality, special-purpose, mezzanine and preferred equity. Refer or decline. | JUDGMENT | Course Bible Section 1; 1C teaching point |
| COM-GEN-03 | Mixed-use with 80%+ of income from apartments goes to the Multifamily policy (MF-GEN-01). | JUDGMENT | Keeps one rule set per collateral type |
| COM-GEN-04 | Borrower is a single-purpose entity; Core business-purpose and KYC rules apply. | MARKET | SPE required (Ladder, May 2025) |
| COM-GEN-05 | Income: signed leases with tenants in occupancy and paying. Vacancy at the greater of actual, market or 5% (10% for office). | JUDGMENT | Conventions not published; office stressed hardest (1B findings) |
| COM-GEN-06 | Expenses: greater of T-12 and appraiser's estimate; management at least 3% of EGI. | JUDGMENT | Mirrors MF-GEN-06 |
| COM-GEN-07 | Reserves per year (F-COM-03): TI/LC $1.50/sf office, $1.00/sf retail and mixed-use, $0.25/sf industrial; replacement $0.20/sf office, $0.15/sf retail, mixed-use, industrial and storage. | MARKET (retail TI/LC: JUDGMENT) | CMBS TI/LC deposits $1.30-1.50/sf office and $0.25/sf industrial (2024 CMBS offering, capedge); replacement floors $0.15/sf retail, industrial, storage and $0.20/sf office (MMCG, undated). Retail $1.00 not sourced |
| COM-GEN-08 | Rollover: if more than 15% of rent expires within 24 months (F-COM-02), stress NCF by F-COM-09. Stressed DSCR must be at least 1.20x. | MARKET | Re-leasing stressed 10-25% below market (Peersense office CMBS, 2026) |
| COM-GEN-09 | Estoppels from tenants paying 20%+ of rent and the top five tenants; SNDAs from tenants paying 10%+. | JUDGMENT | Standard diligence; thresholds not sourced |
| COM-GEN-10 | A tenant paying more than 25% of rent must have a lease running past maturity, or a cash sweep applies. | JUDGMENT | Concentration control; not sourced |
| COM-GEN-11 | Every loan reports LTV or LTC, DSCR and debt yield, on NCF. Exceptions: NNN (COM-NNN-02) and SBC DSCR (F-COM-11) test DSCR on NOI. Loan = lowest of the tests (F-COM-08). | MARKET | Lowest of LTV, DSCR and debt yield (CommercialCafe, 2026) |
| COM-GEN-12 | Cash management: springing lockbox on all loans. Hard lockbox on office bridge and NNN Tier 2. Sweep if DSCR falls below 1.10x or a 20%+ tenant gives notice. Sweep DSCR = trailing 3 months' NCF, annualized, ÷ debt service actually due: interest at the note rate net of any cap payment, or scheduled P&I on amortizing loans. | MARKET | Springing to hard lockbox and sweeps (Commercial Loan Direct, May 2026); trigger levels JUDGMENT. Sweep DSCR basis set by the course owner, 20 Nov 2026 |
| COM-GEN-13 | Reports: MAI appraisal (as-is, and as-stabilized or as-complete), property condition report, zoning report, flood determination. | MARKET | Same report set as MF-GEN-08 |
| COM-GEN-14 | Phase I environmental report on every loan; Phase II if it finds a recognized environmental condition (dry cleaners, gas stations, auto service). | LEGAL | \[VERIFY: 40 CFR Part 312 recognizes ASTM E1527-21 from 13 Feb 2023; E1527-13 not accepted from 13 Feb 2024 (Beveridge & Diamond; EnSafe). Checked 18 Nov 2026 through law-firm summaries, not the CFR text\] |
| COM-GEN-15 | Sponsor experience: bridge and construction need 2+ properties of the same type owned or managed in the last 5 years. Term, SBC DSCR and NNN need 1 year in the last 3. | MARKET | 1 year in 3 (eLEND, May 2026); bridge stricter (JUDGMENT) |
| COM-GEN-16 | Insurance: replacement-cost property, general liability, flood where required (CORE-INS-03), 12 months' loss of rents. | JUDGMENT | Mirrors MF-GEN-10 |

**F-COM-03 (existing): Commercial net cash flow**

```latex
NCF = NOI - TILC_{reserve} - Replacement_{reserve}
```

Illustrative 40,000 sf unanchored retail center "Birchwood Plaza" (fictional): value $6,000,000; NOI $480,000.

1. TI/LC reserve (COM-GEN-07): 40,000 × $1.00 = $40,000.
2. Replacement reserve: 40,000 × $0.15 = $6,000.
3. NCF: $480,000 − $40,000 − $6,000 = $434,000.

**F-COM-08: Three-test loan sizing**

```latex
Loan_{max} = \min\left(LTV_{max} \times Value,\ \frac{NCF}{DSCR_{min} \times Constant},\ \frac{NCF}{DY_{min}}\right)
```

1. Inputs (COM-TRM, unanchored retail): 65% LTV, 1.30x DSCR, 9.0% debt yield; 7.00% rate, 25-year amortization; constant 8.4814% (F-CORE-04). The 7.00% assumes a 4.00% 10-year Treasury, as in RD-COM-01. At 5.13% (16 Nov 2026) the COM-TRM-04 floor would be 8.13%.
2. LTV test: $6,000,000 × 65% = $3,900,000.
3. DSCR test: $434,000 ÷ 1.30 = $333,846.15 debt service; ÷ ($330,772.68 ÷ $3,900,000) = $3,936,238.02.
4. Debt yield test: $434,000 ÷ 9.0% = $4,822,222.
5. Loan = lowest = $3,900,000 (LTV binds). Check: DSCR $434,000 ÷ $330,772.68 = 1.31x; debt yield 11.13%.

**F-COM-09: Rollover-stressed NCF**

```latex
NCF_{stressed} = NCF - Rent_{rolling,24m} \times Haircut
```

1. Inputs: $120,000 of $600,000 base rent expires within 24 months (F-COM-02: 20.0%, above the 15% trigger). Haircut 15% (20% for office).
2. Stress: $120,000 × 15% = $18,000.
3. Stressed NCF: $434,000 − $18,000 = $416,000.
4. Stressed DSCR: $416,000 ÷ $330,772.68 = 1.26x. This passes the 1.20x floor (COM-GEN-08).

## Commercial Part 2B: Commercial bridge by property type

Bridge loans fund transitional assets for 12-36 months, interest-only, with TI/LC and capex future-funded. They must show a credible exit: the stabilized NCF must support a permanent loan at the course take-out rate (F-COM-10).

| Property type | Max as-is LTV | Max LTC | Exit DSCR (F-COM-10) | Exit debt yield | BASIS | Part 1 source |
| --- | --- | --- | --- | --- | --- | --- |
| Industrial / flex | 70% | 75% | 1.25x | 9.0% | MARKET | 1B: 65-70% typical, 1.25x stabilized |
| Retail: grocery-anchored | 70% | 75% | 1.25x | 9.0% | MARKET | 1B: 70-75% typical, 1.25x |
| Retail: unanchored | 65% | 70% | 1.30x | 9.5% | MARKET | 1B: 65-70%, median 1.25x; set stricter |
| Retail: power center or mall | 60% | 65% | 1.30x | 10.0% | JUDGMENT | 1B: 60-70%; committee only |
| Mixed-use (under 80% residential) | 65% | 70% | 1.30x | 9.5% | MARKET | 1B: 60-75% by mix |
| Office: medical | 65% | 70% | 1.25x | 9.5% | MARKET | 1B: 60-70% |
| Office: Class B repositioning | 55% | 60% | 1.35x | 10.0% | MARKET | 1B: 55-60%; debt yield 9.5%+ (Peersense office CMBS) |
| Self-storage: stabilized | 70% | 75% | 1.30x | 8.5% | MARKET | 1B: 65-75%, 1.25-1.35x |
| Self-storage: lease-up | n/a | 70% | 1.30x on projected NCF | 9.0% | JUDGMENT | 1B: 70-75% LTC; 80% flagged MAX |

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| COM-BR-01 | Term: up to 24 months, plus up to two 6-month extensions (36 months maximum). | MARKET | 12-36 months plus extensions (1A) |
| COM-BR-02 | Extension tests: in-place DSCR at least 1.00x (F-MF-12 basis), no default, fee at least 0.25%. | JUDGMENT | Mirrors multifamily bridge |
| COM-BR-03 | Floating rate needs a SOFR cap for the initial term; in-place coverage uses the higher of note rate and cap strike + spread. | MARKET | Same method as F-MF-12 |
| COM-BR-04 | If in-place coverage is under 1.00x, fund an interest reserve covering the shortfall to projected stabilization. | JUDGMENT | Not sourced |
| COM-BR-05 | TI/LC and capex are future-funded, drawn against signed leases and inspected work, and count inside max LTC. | MARKET | 100% of TI/LC and capex future-funded (Ready Capital, Jan 2025) |
| COM-BR-06 | Pricing floor: SOFR + 400 bp, 1.00% origination; office SOFR + 500 bp. | MARKET | SOFR + 400-500 bp; fees 1.00-1.50% (1A) |
| COM-BR-07 | Recourse: non-recourse with carve-outs at 60% LTV or below; otherwise a full guarantee that burns off at stabilization. | MARKET | Carve-outs to full, burning off (1A, 1B) |
| COM-BR-08 | Office and power-center or mall bridge always go to committee. | JUDGMENT | Highest-risk types (1B findings) |

**F-COM-10: Bridge exit test (take-out DSCR)**

```latex
DSCR_{exit} = \frac{NCF_{stabilized}}{Loan \times Constant_{25yr,\ 7.75\%}}
```

The course take-out rate is 7.75% on 25-year amortization. Basis (MARKET, set 18 Nov 2026): 10-year Treasury 5.13% on 16 Nov 2026 + about 250 bp CMBS spread = 7.63%, rounded up. It sits inside the 5.84-8.09% permanent range (CLS, 5 Nov 2026). Reset it when the 10-year Treasury moves 25 bp or more. Re-checked 19 Nov 2026: 5.12% on 17 Nov (CNBC, via RootData), a 1 bp move, so no reset.

1. Inputs: industrial flex bridge, requested loan $4,000,000; stabilized NCF $430,000; constant 9.0639%.
2. Debt service at take-out: monthly P&I $30,213.15 × 12 = $362,557.80.
3. Exit DSCR: $430,000 ÷ $362,557.80 = 1.19x. This fails the 1.25x test.
4. Maximum loan: $430,000 ÷ 1.25 ÷ ($319,050.84 ÷ $3,520,000) = $3,795,257.21. Round down to $3,790,000.
5. Check debt yield: $430,000 ÷ $3,790,000 = 11.3%. This passes 9.0%.

## Commercial Part 2C: Term loans, small-balance commercial DSCR and single-tenant NNN

These three products lend on stabilized income. Term loans and NNN use NCF or NOI over an amortizing payment; SBC DSCR loans use NOI over principal and interest. Tenant credit drives NNN; property type drives the term limits.

**Term loan limits by property type (COM-TRM)**

| Property type | Max LTV | Min DSCR (NCF, note rate, 25-year amortization) | Min debt yield (NCF) | BASIS | Part 1 source |
| --- | --- | --- | --- | --- | --- |
| Industrial / flex | 70% | 1.25x | 8.5% | MARKET | 1E: 65-70%; 1.25x industrial |
| Retail: grocery-anchored | 70% | 1.25x | 8.5% | MARKET | 1E: 65-75%; 1.20-1.30x |
| Retail: unanchored | 65% | 1.30x | 9.0% | MARKET | 1E: anchored 1.30-1.35x; unanchored set no looser |
| Mixed-use (under 80% residential) | 65% | 1.30x | 9.0% | MARKET | 1E and 1B |
| Office: medical | 65% | 1.30x | 9.0% | MARKET | 1E: office 55-65% |
| Office: other | 60% | 1.40x | 10.0% | MARKET | 1E: office 1.40x+ (Commercial IQ, May 2026) |
| Self-storage | 65% | 1.30x | 8.5% | MARKET | 1B: 1.25-1.35x; DSCR-bound in 2026 |

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| COM-TRM-01 | Stabilized only: 85%+ physical occupancy for the last 3 months (90% for office). | JUDGMENT | Bridge-to-perm sequence (CLS life company, Oct 2026); levels not sourced |
| COM-TRM-02 | Term 5, 7 or 10 years; 25-year amortization. | MARKET | 5-10 years; 25-30 year amortization (1E) |
| COM-TRM-03 | Interest-only up to 2 years only if LTV is 60% or less and amortizing DSCR is 1.40x or more. | JUDGMENT | Conduits run IO widely (1E); this lender is more conservative |
| COM-TRM-04 | Rate floor: matching Treasury yield + 300 bp. | JUDGMENT | Life company about 170 bp, CMBS about 250 bp (1E); private lender prices above |
| COM-TRM-05 | Prepayment: 5-4-3-2-1 step-down, or yield maintenance on 10-year loans. | MARKET | Step-down (bank) or yield maintenance (1E) |
| COM-TRM-06 | Recourse: non-recourse with carve-outs at 65% LTV or below and 1.35x DSCR or above; otherwise full recourse. | MARKET | Non-recourse (CMBS, life) vs recourse (bank) (1E); cut-offs JUDGMENT |
| COM-TRM-07 | Leases paying 50%+ of rent may not expire within 12 months before maturity, unless a rollover sweep runs for the last 24 months. | JUDGMENT | Re-leasing risk at maturity (Peersense NNN guide, Mar 2026) |
| COM-TRM-08 | Minimum loan $1,000,000; smaller loans go to COM-DSCR. | JUDGMENT | Bank minimums $500,000-$1M (1E) |

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| COM-DSCR-01 | Loan $250,000-$2,000,000. | JUDGMENT | Market $250,000-$5M (1F); capped at credit-officer authority |
| COM-DSCR-02 | Eligible: small retail, office, light industrial, and 2-8 unit mixed-use with at least one commercial unit. Not eligible: auto service, gas stations, daycare. | JUDGMENT | Rated pools include these (KBRA, Oct 2026); excluded for environmental and special-use risk |
| COM-DSCR-03 | DSCR = NOI ÷ annual principal and interest (F-COM-11); minimum 1.25x, or 1.30x for office and unanchored retail. | MARKET | 1.20-1.25x typical; 1.25-1.35x retail (COR Advisors, Oct 2026) |
| COM-DSCR-04 | 2-8 unit mixed-use may instead use gross rent ÷ PITIA (F-RES-07), minimum 1.15x. | MARKET | Mixed-use matrices allow 1.00x (EMM, OLD; The Lender, 2025); set stricter |
| COM-DSCR-05 | Max LTV 70% purchase or rate-term, 65% cash-out; 5% lower for office or if more than 20% of space is vacant. | MARKET | 65-75% typical; 60-65% for cash-out (1F) |
| COM-DSCR-06 | Guarantor FICO at least 680. | MARKET | 650-680 typical (COR Advisors, Oct 2026) |
| COM-DSCR-07 | Post-closing reserves: 6 months of PITIA. | MARKET | 6 months (1F) |
| COM-DSCR-08 | Experience: owned and managed real estate for 1 year in the last 3; no first-time investors on mixed-use. | MARKET | eLEND, May 2026; The Lender, 2025 |
| COM-DSCR-09 | Fixed 5, 7 or 10 years on 30-year amortization; rate floor 8.50%. | MARKET | CMRE from 8.5% (2026); thin source |
| COM-DSCR-10 | Full recourse personal guarantee. | JUDGMENT | Small-balance norm; not sourced |

**F-COM-11: Small-balance commercial DSCR**

```latex
DSCR_{SBC} = \frac{NOI}{Loan \times Constant_{30yr,\ rate}}
```

1. Inputs: "Linden Corner" (fictional), 3-tenant retail building; value $1,200,000; NOI $96,000; loan $800,000 (66.7% LTV); 8.75% on 30-year amortization; constant 9.4404%.
2. Debt service: monthly P&I $6,293.60 × 12 = $75,523.20.
3. DSCR: $96,000 ÷ $75,523.20 = 1.27x. This passes 1.25x.
4. Maximum loan at 1.25x: $96,000 ÷ 1.25 ÷ 0.094404 = $813,524.

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| COM-NNN-01 | Tier 1: the tenant or lease guarantor is rated BBB- or Baa3 or better. Tier 2: any other tenant (unrated national, regional or franchisee). | MARKET | Investment-grade definition (CLS, 2026) |
| COM-NNN-02 | Tier 1: max LTV 70%; DSCR 1.20x on NOI at the note rate, 25-year amortization. | MARKET | 70-75% LTV; 1.15-1.25x (1G) |
| COM-NNN-03 | Tier 2: max LTV 60%; DSCR 1.35x; loan no more than 80% of dark value (F-COM-12). | JUDGMENT | Dark value is the proceeds floor for non-credit (CLS, 2026); levels not sourced |
| COM-NNN-04 | Remaining primary lease term at least loan term + 5 years, and never under 7 years (F-COM-13). | MARKET | 5-7 years past maturity; 7-year minimum (CLS, 2026) |
| COM-NNN-05 | Lease must be NNN or absolute NNN. If the landlord keeps roof or structure, fund a reserve from the property condition report. | JUDGMENT | Absolute-net verification (CLS, 2026) |
| COM-NNN-06 | Where sales are reported, occupancy cost (F-COM-07) must be 10% or less. | JUDGMENT | Rent-to-sales drives LTV (Peersense CVS, May 2026); level not sourced |
| COM-NNN-07 | Cash sweep if the tenant is downgraded below BBB-, goes dark, gives non-renewal notice or files for bankruptcy. | JUDGMENT | Not sourced |
| COM-NNN-08 | Loan term matches the lease: 5-10 years fixed. Rate floor: matching Treasury + 175 bp (Tier 1) or + 250 bp (Tier 2). | MARKET | Terms matched to remaining lease (1G). Floors: life company about 170 bp, CMBS about 250 bp (GlobeSt, Apr 2026). At a 5.13% Treasury they give 6.88% and 7.63%, inside the 1G ranges (6.00-7.75% and 6.75-8.75%). Confirmed by you 19 Nov 2026 |

**F-COM-08 applied to NNN Tier 1**

1. Inputs: "Harbor Pharmacy" (fictional), price $4,000,000; NOI $240,000 (6.00% cap rate); 6.50% on 25-year amortization; constant 8.1025%. The 6.50% assumes a 4.00% Treasury (floor 5.75%), as in RD-COM-01. At 5.13% the Tier 1 floor would be 6.88%.
2. LTV test: $4,000,000 × 70% = $2,800,000.
3. DSCR test: $240,000 ÷ 1.20 ÷ 0.081025 = $2,468,378.
4. Loan = lowest, rounded down: $2,460,000 (61.5% LTV). DSCR binds, not LTV.
5. Check: monthly P&I on $2,460,000 × 12 = $199,321.20; $240,000 ÷ $199,321.20 = 1.20x.

**F-COM-12: Dark-value coverage (NNN Tier 2)**

```latex
Loan_{max,dark} = 80\% \times DarkValue
```

1. Inputs: franchise restaurant (fictional), value $3,500,000; appraiser's dark value $2,400,000.
2. LTV test: $3,500,000 × 60% = $2,100,000.
3. Dark-value test: $2,400,000 × 80% = $1,920,000.
4. The dark-value test binds: maximum $1,920,000 before the DSCR test.

**F-COM-13: Lease-term cushion**

```latex
Cushion = LeaseYears_{remaining} - LoanTerm \geq 5
```

1. Inputs: 14 years of lease remaining; requested 10-year loan.
2. Cushion: 14 − 10 = 4 years. This fails.
3. Fix: a 7-year loan gives 14 − 7 = 7 years. This passes.

## Commercial Part 2D: Construction, land, approvals and exceptions

Construction loans are sized by the lower of LTC and as-complete LTV, include the interest reserve inside cost, and must pass the take-out test. Land is lent only when it is entitled and has a clear next step.

| Rule ID | Rule (course baseline) | BASIS | Rationale (Part 1 source) |
| --- | --- | --- | --- |
| COM-CON-01 | Max LTC 65%. Total cost includes land (lower of cost and appraised value), hard and soft costs, contingency and interest reserve. | MARKET | Bank 60-65%; typical 65-75% (1H) |
| COM-CON-02 | Max as-complete LTV 65%. | MARKET | 65-75% (1H) |
| COM-CON-03 | Never above the supervisory construction ceiling of 80% LTV. | LEGAL | \[VERIFY: 12 CFR Part 365, Appendix A; checked 18 Nov 2026 via Terrapin, Sep 2026\] |
| COM-CON-04 | Hard-cost contingency at least 10%. | MARKET | 10-15% (1H) |
| COM-CON-05 | Pre-leasing: retail and office 50%+ of rentable area signed; industrial 30%+, or speculative at max 60% LTC; self-storage none, at max 60% LTC. | MARKET | Bank office pre-leasing 30-50% at 50-60% LTC (WealthManagement, undated); anchor 30%+ (CLS, undated); 50% sits at the top of the range |
| COM-CON-06 | Interest reserve by F-RES-16 (60% average outstanding), at the cap strike + spread if floating. | JUDGMENT | Interest reserve inside the loan (Terrapin, 2026); 60% from F-RES-16 |
| COM-CON-07 | Exit test: stabilized NCF gives 1.25x (1.35x for office and mixed-use) at the course take-out rate (F-COM-10) and 9.0% debt yield. | MARKET | 1.25x at stabilization (COR Advisors, Apr 2026); office and mixed-use 1.35x (Terrapin, 2026) |
| COM-CON-08 | Full recourse, plus completion, cost-overrun and carry guarantees. | MARKET | Almost always full recourse (1H) |
| COM-CON-09 | Term up to 24 months plus one 6-month extension; all-in rate floor 8.50%. | MARKET | 12-36 months; bank 7.75-9.25% (1H) |
| COM-CON-10 | Draws monthly after third-party inspection; 10% retainage until 50% complete; title date-down every draw. | JUDGMENT | Not sourced |
| COM-CON-11 | General contractor licensed, with payment and performance bonds or a guaranteed-maximum-price contract. | JUDGMENT | Not sourced |
| COM-LND-01 | Entitled land only (zoning and approved site plan in place). Raw unentitled land is out of scope. | JUDGMENT | Not sourced |
| COM-LND-02 | Max 50% of as-is value and 60% of cost. | JUDGMENT | Below the supervisory 75% land-development ceiling (1H) and 65% raw-land ceiling (12 CFR Part 365 App. A, confirmed 18 Nov 2026) |
| COM-LND-03 | Term up to 24 months; interest paid monthly by the borrower; exit (construction term sheet or sale contract) shown at approval. | JUDGMENT | Not sourced |
| COM-GEN-17 | Exceptions: one per loan, committee only, two documented compensating factors, LTV no more than 5% above limit. No exceptions to LEGAL rules, scope or a DSCR under 1.15x. | JUDGMENT | Mirrors Core exception rules |

**F-COM-14: Construction loan sizing with interest reserve**

```latex
Loan = \min\left(\frac{LTC \times Cost_{base}}{1 - LTC \times r \times \frac{m}{12} \times 60\%},\ LTV \times Value_{complete}\right)
```

1. Inputs: "Ridgeline Flex" (fictional), 60,000 sf industrial flex, 40% pre-leased (meets 30%). Land $1,200,000; hard $6,000,000; soft $900,000; contingency 10% of hard $600,000.
2. Base cost: $1,200,000 + $6,000,000 + $900,000 + $600,000 = $8,700,000.
3. Reserve factor, covering 18 months from closing to projected stabilization: 9.00% × 18 ÷ 12 × 60% = 8.10% of the loan.
4. LTC loan: 65% × $8,700,000 = $5,655,000; ÷ (1 − 65% × 8.10%) = $5,655,000 ÷ 0.94735 = $5,969,283.
5. Interest reserve: $5,969,283 × 8.10% = $483,512. Total cost $9,183,512; LTC 65.0%.
6. LTV test: 65% × $9,800,000 as-complete = $6,370,000. LTC binds; loan $5,960,000 rounded down.
7. Exit test (F-COM-10): stabilized NCF $720,000; ADS on $5,960,000 at 7.75%, 25 years = $540,211.08; DSCR 1.33x; debt yield 12.1%. Both pass.

**Commercial approval matrix**

| Loan | Senior underwriter | Credit officer | Committee | BASIS |
| --- | --- | --- | --- | --- |
| Term (COM-TRM), within policy | None | Up to $2M | Above $2M | JUDGMENT (Core matrix) |
| SBC DSCR (COM-DSCR), within policy | None | Up to $2M (all) | Exceptions | JUDGMENT |
| NNN Tier 1 | None | Up to $2M | Above $2M | JUDGMENT |
| NNN Tier 2 | None | None | All | JUDGMENT |
| Bridge: industrial, retail (not power center or mall), mixed-use, medical office, storage | None | Up to $2M | Above $2M | JUDGMENT |
| Bridge: office (non-medical), power center or mall | None | None | All | JUDGMENT |
| Construction and land | None | None | All | JUDGMENT |
| Any exception (COM-GEN-17) | None | None | All | JUDGMENT |

The senior underwriter's $500,000 authority covers Residential only (Core), so it has no commercial row.

**Commercial Part 2 complete. Say "continue" for Commercial Part 3 (decisions and summary).**

## Commercial Part 3A: Policy decisions

Fourteen decisions cover every Commercial JUDGMENT rule, the JUDGMENT parts of mixed rules, and the take-out rate. Option A is the Part 2 baseline. **Decided 19 Nov 2026: all 14 set to option A. NNN rate floor added to COM-NNN-08 on 19 Nov 2026 at your request.**

| ID | Rules covered | Options: pros (+) and cons (−) | Recommend |
| --- | --- | --- | --- |
| D-COM-01 | COM-GEN-01, -02, -03 | **A** Investor retail, office, industrial, mixed-use, storage; owner-user, hotel, special-purpose and mezzanine out; 80%+ residential goes to Multifamily: + focused, matches course scope. **B** Add hospitality: + wider market; − operating-business risk, needs RevPAR skills (F-COM-04, -05) | A |
| D-COM-02 | COM-GEN-05, -06, -16 | **A** Vacancy greater of actual, market or 5% (office 10%); management 3%: + reflects office risk. **B** Flat 5% everywhere: + simpler; − understates office. **C** Flat 10%: − too tight for industrial | A |
| D-COM-03 | COM-GEN-07 (retail TI/LC) | **A** $1.00/sf: + between industrial and office sources. **B** $0.50/sf: + more proceeds; − thin for rollover. **C** Appraiser's leasing-cost estimate per deal: + precise; − inconsistent for learners | A |
| D-COM-04 | COM-GEN-09, -10 | **A** Estoppels from 20%+ and top five tenants; SNDAs from 10%+; a 25%+ tenant needs a lease past maturity or a sweep: + proportionate. **B** Estoppels from every tenant: + complete; − slow and costly on small loans | A |
| D-COM-05 | COM-GEN-12, COM-NNN-07 | **A** Sweep below 1.10x DSCR or on a 20%+ tenant's notice; NNN downgrade, go-dark, non-renewal or bankruptcy: + standard triggers. **B** Sweep below 1.15x: + earlier warning; − trips often on bridge loans | A |
| D-COM-06 | COM-GEN-15 (bridge and construction) | **A** 2+ properties of the same type in 5 years: + proven operators. **B** 1 property: + more borrowers; − sponsor learns on the lender's money | A |
| D-COM-07 | COM-BR-02, -04, -08; power center, mall and storage lease-up limits | **A** Extensions at 1.00x in place; shortfall interest reserve; office and mall to committee: + safe exits. **B** Extensions at 1.10x: + stronger; − forces more defaults at maturity | A |
| D-COM-08 | F-COM-10, COM-CON-07 | **A** Fixed course take-out rate 7.75%, reset on a 25 bp Treasury move: + stable examples. **B** Live rate per deal (10-year Treasury + 250 bp): + always current; − examples drift | A |
| D-COM-09 | COM-TRM-01, -03, -04, -07, -08 | **A** 85% occupancy (90% office); IO max 2 years at 60% LTV or less; Treasury + 300 bp floor; 50% rollover rule; $1M minimum: + conservative. **B** Treasury + 250 bp floor: + CMBS-competitive; − thin margin for a private lender | A |
| D-COM-10 | COM-DSCR-01, -02, -10 | **A** $250,000-$2M; no auto service, gas or daycare; full recourse: + fits credit-officer authority. **B** Up to $5M: + matches market; − above authority, needs committee | A |
| D-COM-11 | COM-NNN-03, -05, -06 | **A** Tier 2 at 60% LTV, 1.35x, 80% of dark value; occupancy cost 10% or less: + cushion if the tenant leaves. **B** 100% of dark value: + more proceeds; − no cushion when dark | A |
| D-COM-12 | COM-CON-05, -06, -10, -11 | **A** Pre-leasing 50% office and retail, 30% industrial; 60% average balance; 10% retainage; bonds or GMP: + matches bank range. **B** 30% pre-leasing for all: + more deals; − lease-up risk on office and retail | A |
| D-COM-13 | COM-LND-01, -02, -03 | **A** Entitled land only; 50% of value, 60% of cost; 24 months: + clear exit. **B** Raw land at 40%: + more deals; − entitlement risk, no clear exit | A |
| D-COM-14 | COM-GEN-17; approval matrix | **A** As written: exceptions to committee only. **B** Credit officer may approve one exception up to $1M: + faster; − weaker control in role-play | A |

## Commercial Part 3B: Summary of Commercial limits

**Model policy for training - not for live lending decisions.** As of 18 Nov 2026. Figures are the confirmed option A in every D-COM decision (decided 19 Nov 2026). Core limits (FICO 680, liquidity, net worth, concentration, approval) apply on top. All sources US-only.

| Product | Max LTV / LTC | Min DSCR | Min debt yield | Term | Approval |
| --- | --- | --- | --- | --- | --- |
| Bridge: industrial, grocery-anchored retail | 70% / 75% | 1.25x exit at 7.75% | 9.0% | 24 months + two 6-month extensions | Credit officer to $2M |
| Bridge: unanchored retail, mixed-use | 65% / 70% | 1.30x exit | 9.5% | Same | Credit officer to $2M |
| Bridge: medical office | 65% / 70% | 1.25x exit | 9.5% | Same | Credit officer to $2M |
| Bridge: Class B office | 55% / 60% | 1.35x exit | 10.0% | Same | Committee |
| Bridge: power center or mall | 60% / 65% | 1.30x exit | 10.0% | Same | Committee |
| Bridge: self-storage | 70% / 75% (lease-up 70% LTC) | 1.30x exit | 8.5-9.0% | Same | Credit officer to $2M |
| Term loan | 60-70% by type | 1.25-1.40x (NCF, 25-year amortization) | 8.5-10.0% | 5, 7 or 10 years | Credit officer to $2M |
| SBC DSCR ($250,000-$2M) | 70% (65% cash-out) | 1.25x (1.30x office, unanchored retail) | n/a | 5-10 years fixed, 30-year amortization | Credit officer |
| NNN Tier 1 (BBB- or better) | 70% | 1.20x | n/a | 5-10 years; lease at least loan term + 5 years, never under 7; floor Treasury + 175 bp (Tier 2: + 250 bp) | Credit officer to $2M |
| NNN Tier 2 | 60%; 80% of dark value | 1.35x | n/a | Same | Committee |
| Construction | 65% LTC; 65% as-complete LTV | 1.25x exit (1.35x office, mixed-use) | 9.0% exit | 24 months + 6 | Committee |
| Land (entitled) | 50% of value; 60% of cost | n/a | n/a | 24 months | Committee |

**Key numbers to remember**

- Size every loan by the lowest of LTV or LTC, DSCR and debt yield (F-COM-08).
- Course take-out rate 7.75% on 25-year amortization (F-COM-10); reset on a 25 bp Treasury move. Rate floors: term Treasury + 300 bp; NNN Tier 1 + 175 bp, Tier 2 + 250 bp.
- Reserves: TI/LC $1.50/sf office, $1.00 retail, $0.25 industrial; replacement $0.20 office, $0.15 others.
- Stress rollover above 15% of rent in 24 months; stressed DSCR at least 1.20x (F-COM-09).
- Supervisory ceilings: raw land 65%, land development 75%, construction 80%, improved property 85% \[VERIFY: 12 CFR Part 365 App. A\].
- Formulas: F-COM-03 and F-COM-08 to F-COM-14.

**Commercial complete. Its running deal, RD-COM-01, is in the Running Deals tab.**
