# Needs analysis: BPL core course (C0-C14)

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | BPL-CORE, C0-C14 (integrated QAS Self Study series) |
| Learner | College graduate with basic finance, new to lending |
| Target depth | Upper-undergraduate to early-graduate |
| Testing | Multiple choice only |
| Standard served | IACET 4.1 (needs analysis) and 5.2 (outcomes linked to needs), per `docs/accreditation/qas-spec.md` |
| Prepared | 22 Nov 2026, from snapshots dated 22 Nov 2026 (`docs/SNAPSHOT.md`: all current) |
| Status | v0 draft for owner review. Feeds every `docs/curriculum/<code>-blueprint.md` |

**How to use it.** Each job task below has an ID (O1, U3, S9...). Blueprint objectives cite these IDs. That gives the IACET 5.2 link from need to outcome.

## 0. Method and sources

We built the task list from three kinds of source. All were opened on 22 Nov 2026.

1. **Occupational data:** the federal job-task taxonomy and outlook data.
2. **Regulator exam manuals:** what examiners expect a sound CRE lender to do, and how lending goes wrong.
3. **Live job postings** from US business-purpose lenders: RTL, DSCR and bridge desks.

We then checked each task against the C0-C14 lessons (`modules/core/c*/lesson.md`, 22 Nov 2026) and the Course Bible section 3 titles.

| ID | Source | Date shown | Used for |
| --- | --- | --- | --- |
| S1 | O*NET 13-2072.00 Loan Officers, [onetonline.org](https://www.onetonline.org/link/summary/13-2072.00) | Site updated 6 Oct 2026 | Originator and credit officer tasks; knowledge areas |
| S2 | O*NET 13-2041.00 Credit Analysts, [onetonline.org](https://www.onetonline.org/link/summary/13-2041.00) | Site updated 6 Oct 2026 | Underwriter tasks |
| S3 | BLS Occupational Outlook Handbook, Loan Officers, [bls.gov](https://www.bls.gov/ooh/business-and-financial/loan-officers.htm) | Last modified 27 Aug 2026 | Entry profile: bachelor's degree, then on-the-job training |
| S4 | OCC, *Comptroller's Handbook: Commercial Real Estate Lending*, v2.0, [PDF](https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/commercial-real-estate-lending/pub-ch-commercial-real-estate.pdf) | Mar 2022; reputation-risk text removed 20 Mar 2025 | Underwriting, credit administration, risk rating, appraisal, environmental, workouts, concentrations |
| S5 | FDIC, *RMS Manual of Examination Policies*, Section 3.2 Loans, [PDF](https://www.fdic.gov/regulations/safety/manual/section3-2.pdf) | 05/23 | Loan review, CECL, participations, environmental program, "Loan Problems" |
| S6 | OCC Bulletin 2023-23, *Interagency Policy Statement on Prudent CRE Loan Accommodations and Workouts*, [occ.gov](https://www.occ.gov/news-issuances/bulletins/2023/bulletin-2023-23.html) | 29 Jun 2023 | Workout tasks |
| S7 | FDIC, *Current Expected Credit Losses*, [fdic.gov](https://www.fdic.gov/accounting/current-expected-credit-losses-cecl) | Updated 20 Jun 2025 | Allowance tasks (ASC 326; interagency ACL statement revised Apr 2023) |
| S8 | ProSight Financial Association (formerly RMA), Credit Risk Certification, [prosightfa.org](https://www.prosightfa.org/training/professional-development/credentialing) | © 2026 | Industry body of knowledge: 7 domains |
| S9 | LBC Mortgage, Underwriter (private money), [Workable](https://jobs.workable.com/jobs/9da00b5d-4354-4a35-a889-8eda8b3d0b4c.md) | Not dated | RTL and DSCR underwriting tasks |
| S10 | Park Place Finance, Loan Processor (DSCR/RTL), [Workable](https://jobs.workable.com/jobs/10aa25b2-7dc3-471b-9049-ccfd87f6b146.md) | Not dated | File, condition and settlement-statement tasks |
| S11 | Asteris Lending, Loan Originator - DSCR and business-purpose loans, [Workable](https://jobs.workable.com/jobs/063e08fb-0b54-498d-9cc8-7b786a37a22a.md) | Not dated | Originator tasks |
| S12 | Builders Capital Exchange, REO Asset Manager, [Workable](https://jobs.workable.com/jobs/7978b76f-6c18-46a2-8719-0825f7a57bb3.md) | Not dated | REO tasks |
| S13 | Keller Augusta, AVP Credit Manager (bridge), [SelectLeaders](https://www.selectleaders.com/job/231967/avp-credit-manager/) | Closed posting | Bridge asset management and securitization reporting |
| S14 | Sunday Capital, Director of Credit and Underwriting, [SelectLeaders](https://www.selectleaders.com/job/294349/director-of-credit-underwriting/) | Closed posting | MF and CRE bridge credit tasks |
| S15 | LendingOne, Director of Valuations and Collateral Risk, [Workable](https://jobs.workable.com/jobs/3e346c04-d33d-4a30-b0a9-7961e27634a7.md) | Not dated | Valuation governance |

**Primary law opened** (Cornell LII, 22 Nov 2026): 12 CFR 34.43; 40 CFR 312.20; 42 U.S.C. 9601(20)(F)-(G); 42 U.S.C. 3605; 12 CFR 1002.2(g) and 1002.4; 17 CFR 246.3, 246.4 and 246.7.

**Not reached.** CREFC, MBA and the OFN job bank returned HTTP 403. No closer or funder posting could be opened. Closer tasks therefore rest on S4, S5, S10 and the C11 lesson. See "What to look up yourself".

**Entry profile (the gap baseline).** Loan officers typically hold a bachelor's degree in business or finance. They learn the job through on-the-job training in the first months (S3). Commercial lending needs the ability to read financial statements (S3). Our learner has the degree but none of the lending training. The FDIC lists "technical incompetence" as a cause of loan problems: an inability "to obtain and evaluate credit information or put together a well-conceived loan package" (S5, "Loan Problems"). That is the risk this course must close.

## 1-2. Roles, tasks, knowledge, gap and risk

**Key.** Products: R = RTL (fix-and-flip, heavy rehab, ground-up); D = DSCR rental; M = multifamily bridge or term; C = commercial bridge or term. Stage: App = application and screening; UW = underwriting and approval; Cls = closing and funding; Svc = servicing to payoff; Def = default to REO. Gap: H = new graduate cannot do it; M = has some base skill (spreadsheet, accounting) but not the lending method; L = transferable skill. Risk: CL = credit loss; Reg = regulatory or legal; Fr = fraud.

### 2.1 Originator (sales, loan officer)

Sources: S1, S3, S11.

| ID | Task | Stage | Products | Knowledge and skills | Gap | Risk if done wrong |
| --- | --- | --- | --- | --- | --- | --- |
| O1 | Find and qualify borrowers and referral sources (brokers, agents, attorneys); build a pipeline (S1, S11) | App | RDMC | Product menu; the credit box; market and competitor terms; consultative selling | H | CL: adverse selection from chasing volume. Reg: statements that discourage applicants on a prohibited basis [VERIFY: 12 CFR 1002.4(b); checked 22 Nov 2026]. Fr: straw buyers and broker-fed files |
| O2 | Screen business purpose and occupancy before any term sheet | App | RD (MC by entity) | Reg Z purpose test; occupancy red flags; purpose file | H | Reg: a consumer loan made as business-purpose loses the TILA exemption [VERIFY: 12 CFR 1026.3(a); checked 18 Nov 2026 per Course Bible §1] |
| O3 | Collect the application file: entity papers, track record, financial statements, contract, budget or rent roll (S1, S10) | App | RDMC | Entity types and authority; what each document proves | M | Fr: forged or altered documents. CL: missing information hides weak sponsors |
| O4 | Pre-size the loan and issue a non-binding term sheet; explain loan types and terms (S1, S11) | App | RDMC | Leverage and DSCR tests; pricing; state licensing and usury check first (CORE-BP-03) | H | CL: promising terms the credit box cannot support. Reg: an unlicensed or usurious offer in the property state |
| O5 | Manage the borrower from approval to closing; coordinate processing, underwriting, closing and capital markets (S11) | App-Cls | RDMC | Conditions list; third-party report timing | L | CL: pressure to close before conditions clear |
| O6 | Pitch the deal and answer committee questions on sponsor and market | UW | RDMC | Credit memo structure; market data | M | CL: weak sponsor or market facts reach approval unchallenged |

### 2.2 Underwriter and credit analyst

Sources: S2, S4 ("Underwriting Practices"), S9, S14, S15.

| ID | Task | Stage | Products | Knowledge and skills | Gap | Risk if done wrong |
| --- | --- | --- | --- | --- | --- | --- |
| U1 | Spread rent rolls and operating statements to underwritten NOI and NCF (S4 "Income-Generating Capacity of CRE"; S14) | UW | DMC | Vacancy, concessions, expense norms, reserves; NOI versus cash flow | M | CL: overstated NOI oversizes the loan |
| U2 | Review appraisals, BPOs and AVMs; test ARV, as-is and as-stabilized values; flag inconsistencies (S9, S15) | UW | RDMC | Three approaches to value; cap rates; ARV method; appraisal review | H | CL and Fr: inflated value is the classic mortgage-fraud loss. Reg: bank buyers must meet appraisal rules (see §4) |
| U3 | Analyze borrower, sponsor and guarantor: credit, liquidity, net worth, experience, contingent liabilities (S2; S4 "Analysis of Borrower's and Guarantor's Financial Condition") | UW | RDMC | Personal financial statements; tax returns; schedule of real estate owned; global exposure | M | CL: a guaranty worth less than it looks. Fr: overstated assets |
| U4 | Run KYC and beneficial ownership, OFAC screening and fraud red-flag review | App-UW | RDMC | Ownership charts; 50 Percent Rule; SAR escalation | H | Reg: sanctions breach is strict liability. Fr: hidden owners, flips, straw parties |
| U5 | Size the loan: LTC, LTARV, LTV, DSCR, debt yield; find the binding test; set reserves and price (S4 "Loan Structure", "DSCR", "Debt Yield", "LTV"; S9) | UW | RDMC | Time value of money; amortization; loan constant; Actual/360 | M | CL: wrong sizing changes the loan amount (a critical credit error, Course Bible §3) |
| U6 | Review construction and rehab budgets and project feasibility (S4 "Underwriting ADC Loans"; S9) | UW | R, M and C bridge | Cost estimating; contractor review; contingency; completion risk | H | CL: unfinished projects are the worst loss severity. Fr: padded budgets |
| U7 | Review title, insurance, environmental, condition and tenant documents (S4 "Environmental Risk Management"; S9) | UW-Cls | RDMC | Title exceptions; coverage types; Phase I and ASTM E1527-21; estoppels and SNDAs | H | CL: uninsured loss or senior lien. Reg: environmental liability can follow title (see §4) |
| U8 | Check the property state's licensing, usury, foreclosure and recourse rules | UW | RDMC | State Law Table; judicial versus non-judicial; deficiency limits | H | Reg: unenforceable rate or fees. CL: slower, costlier recovery |
| U9 | Write the credit memo, set conditions and state exceptions (S2; S14) | UW | RDMC | Memo structure; risk and mitigant logic; exception discipline | H | CL: risks not disclosed to the approver. Reg: approval outside authority |
| U10 | Stress-test exit and refinance: higher rates, lower value, slower lease-up (S13; S14) | UW-Svc | RMC (D refi) | Sensitivity and scenario analysis; take-out sizing | M | CL: bridge loans that cannot refinance at maturity |
| U11 | Confirm the loan fits investor, warehouse or securitization criteria ("investor requirements", S10) | UW | RDMC | Buyer guidelines; data tapes; eligibility | H | CL: an unsellable loan stays on balance sheet. Reg and contract: repurchase claims |

### 2.3 Closer and funder (closing, post-closing)

Sources: S4 "File Documentation"; S5; S10; C11 lesson.

| ID | Task | Stage | Products | Knowledge and skills | Gap | Risk if done wrong |
| --- | --- | --- | --- | --- | --- | --- |
| F1 | Clear conditions precedent against the approval; track open items (S10) | Cls | RDMC | Reading an approval; document checklists | M | CL: funding on an unmet condition |
| F2 | Prepare or approve the settlement statement and funds flow, including prepaid interest to month-end (CORE-CLS-04) (S10: HUD-1 experience) | Cls | RDMC | Closing math; holdbacks; points and fees | M | CL: wrong advance. Reg: fees over state limits |
| F3 | Issue closing instructions; control the wire; verify the closing agent | Cls | RDMC | Call-back verification; insured closing letters | H | Fr: business email compromise diverts the whole loan |
| F4 | Confirm title policy and endorsements, insurance evidence, recording and UCC filings | Cls | RDMC | Lien perfection; policy amount (CORE-CLS-06) | H | CL: unperfected or junior lien |
| F5 | Post-close: trailing documents, file quality check, board the loan to servicing (S4 "File Documentation") | Cls-Svc | RDMC | Collateral file standards | M | CL and Reg: missing note or mortgage blocks enforcement or sale |
| F6 | Deliver the collateral file to a warehouse lender, custodian or loan buyer | Cls | RDMC | Custodial requirements; bailee letters | H | CL: delayed sale funding; repurchase exposure |

### 2.4 Servicer and asset manager

Sources: S4 "Credit Administration", "Loan Workouts and Restructures"; S6; S12; S13.

| ID | Task | Stage | Products | Knowledge and skills | Gap | Risk if done wrong |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | Bill interest (Actual/360), apply payments, charge late fees and default interest | Svc | RDMC | Day counts; note terms; state fee limits | M | Reg: illegal fees or usury. CL: billing errors cost revenue |
| S2 | Administer draws: inspection, budget lines, lien waivers, remaining-funds test (S4 "Monitoring Progress of Construction Projects"; S13; S14) | Svc | R, M and C bridge | Construction progress; lien law; title date-downs | H | CL: overfunding versus work in place. Fr: draws for work not done |
| S3 | Monitor reporting, covenants, insurance, taxes and cash management (S4 "Income-Producing Property Credit Administration") | Svc | DMC | Covenant tests; lockboxes and sweeps | M | CL: late warning of decline |
| S4 | Risk-rate each loan and keep the watch list (S4 "Risk-Rating CRE Loans"; S13) | Svc | RDMC | Rating scale; Special Mention to Loss | H | CL: problem loans found late. Reg: misclassification |
| S5 | Track maturities; run extension tests; negotiate extensions and modifications (S13) | Svc | RMC | Extension conditions; exit analysis | M | CL: extending into a deeper loss |
| S6 | Track and replace interest rate caps on floating loans | Svc | MC | SOFR; cap mechanics | H | CL: payment shock when rates rise |
| S7 | Handle casualty losses and insurance proceeds | Svc | RDMC | Loss-payee rights; rebuild versus pay down | H | CL: proceeds released without restoration |
| S8 | Issue payoff statements and release liens | Svc | RDMC | Per diem; payoff day excluded | L | CL: short payoff. Reg: late lien release |
| S9 | Work defaults: notices, pre-negotiation letters, forbearance and modification (S6) | Def | RDMC | Workout options; net-loss comparison (F-CORE-23) | H | CL: weak workout terms; waived rights |
| S10 | Pursue deed in lieu, foreclosure or receiver; manage and sell REO (S12) | Def | RDMC | Foreclosure process; REO valuation; vendor oversight | H | CL: high loss severity. Reg: environmental owner liability (see §4) |
| S11 | Report loan performance to investors, warehouse lenders or securitization trusts (S13: "securitization reporting") | Svc | RDMC | Investor reporting standards; remittance | H | Reg and contract: reporting breach; loss of funding lines |

### 2.5 Credit officer (approval and portfolio)

Sources: S1 ("approve loans within specified limits"); S4 "Risk Management", "Concentration Risk Management", "Control Systems"; S5 "Loan Review Systems", CECL; S7; S14; S15.

| ID | Task | Stage | Products | Knowledge and skills | Gap | Risk if done wrong |
| --- | --- | --- | --- | --- | --- | --- |
| K1 | Approve within delegated authority; run or sit on credit committee | UW | RDMC | Authority matrix (CORE-AUTH-01); critical-error test | H | CL and Reg: approval outside authority |
| K2 | Set and enforce credit policy; approve and track exceptions (S4 "Loan Policies", "Exceptions to General Lending Policy") | UW | RDMC | Policy design; exception reporting | H | CL: drift from the credit box |
| K3 | Set and monitor portfolio concentration limits (S4 "Concentration Risk Management") | Svc | RDMC | Concentration measures by state, sponsor, product | H | CL: correlated losses |
| K4 | Estimate expected credit losses; validate risk ratings; commission independent loan review (S4 "Allowance for Credit Losses", "Credit Risk Review"; S5; S7) | Svc-Def | RDMC | CECL under ASC 326; PD and LGD basics; loan review | H | CL: under-reserving. Reg: misstated financial reports to investors |
| K5 | Govern valuation: appraisal panel, AMCs, review standards, disputes (S15) | UW | RDMC | Appraisal regulation; independence; USPAP | H | Fr: appraiser pressure or collusion. CL: systemic overvaluation |
| K6 | Oversee fair lending and compliance where the collateral is residential | App-UW | RDM | ECOA, Fair Housing Act, state law | H | Reg: discrimination claims even on business-purpose loans (see §4) |
| K7 | Manage capital-partner terms: warehouse covenants, loan-sale eligibility, repurchase risk (S11, S14) | UW-Svc | RDMC | Funding structures; reps and warranties; risk retention | H | CL: forced sales or margin calls. Reg: securitization rules |

## 3. Task-to-module map (C0-C14)

Module titles and hours are from Course Bible §3. "Partial" means the lesson touches the task but not at the depth the task needs.

| Code | Module (hours) | Tasks covered | Tasks partial |
| --- | --- | --- | --- |
| C0 | Program orientation and the BPL market (1) | None in full | O1 (market context), K7 (funding routes named only) |
| C1 | Business purpose vs consumer: the purpose test and regulatory map (2) | O2 | K6 (ECOA and adverse action covered; no Fair Housing Act) |
| C2 | Credit fundamentals and the loan life cycle (2) | K1 (credit box) | S4 (rating introduced), O4 (term sheet stage) |
| C3 | Real estate finance math (3) | U5 (math), S1 | F2 (per diem) |
| C4 | Property cash flow: GPR to NOI (3) | U1 | U10 (break-even only) |
| C5 | Valuation (3) | U2 | K5 (thresholds as context), U10 (±25 bp cap-rate sensitivity) |
| C6 | Borrower, sponsor and guarantor analysis (3) | U3 | O3 |
| C7 | KYC, BSA/AML, OFAC and fraud red flags (2) | U4 | O1 (fraud sources), O3 |
| C8 | Loan structuring and sizing (3) | U5, O4 | U6 (interest and rehab reserves only) |
| C9 | Loan documents, title, insurance and collateral (3) | U7, F4 | S7 (coverage, not claims handling) |
| C10 | State law: licensing, usury, foreclosure and recourse (2) | U8 | S1 (fee limits), S10 |
| C11 | Closing and funding (2) | F1, F2, F3, F5, O5 | F6 (not covered) |
| C12 | Servicing, draws and asset management (3) | S2, S3, S4, S5, S6, S8 | U10 (exit), K3 |
| C13 | Default, workout, foreclosure and REO (3) | S9, S10 | — |
| C14 | Credit memo, committee and portfolio context (3) | U9, O6, K1, K2, K3 | K7 (buyer limits as a look-up only) |

**Tasks no module covers in full (flagged).**

| Task | Gap | Suggested home |
| --- | --- | --- |
| O1 Prospecting, broker management, consultative selling | No module teaches origination as a job skill | Short originator unit in C0 or C14; or treat as OJT, outside credit scope |
| U6 Construction and rehab feasibility | Core touches reserves and draws only | Core primer, then R3, M5 (family tracks exist) |
| U10 Exit and refinance stress testing | Single-variable sensitivity only | C8 or C14 |
| U11, F6, S11, K7 Investor eligibility, file delivery, investor reporting, capital-partner terms | Only named in C0 | New capital-markets module (see §4.1) |
| S7 Casualty and insurance proceeds | Not taught | C12 |
| K4 Expected credit loss and loan review | Not taught | New credit-risk unit (see §4.2) |
| K5 Valuation governance and appraisal regulation | Context only | Extend C5 (see §4.4) |
| K6 Fair lending on residential collateral | Fair Housing Act absent | Extend C1 (see §4.5) |

**Modules that cover no task.** None is empty. C0 covers no task in full. That suits an orientation module, but C0 should state which tasks it previews.

## 4. Industry topics the C0-C14 titles miss

A university course on real estate credit would cover each of these. Each item says why.

1. **Capital markets and loan sale mechanics.** Most non-bank BPL lenders fund through warehouse lines, whole-loan sales and securitization (C0, T2). The buyer's criteria shape our credit box. A course should cover data tapes, due diligence, reps and warranties, repurchase, participations (S5, "Loan Participations"), servicer reporting and risk retention. Securitizers must keep at least 5% of the credit risk [VERIFY: 17 CFR 246.4(a); checked 22 Nov 2026]. CMBS deals may use a third-party horizontal holder instead, with an Operating Advisor [VERIFY: 17 CFR 246.7; checked 22 Nov 2026]. Tasks: U11, F6, S11, K7.
2. **Credit risk measurement basics.** Risk ratings, migration, probability of default, loss given default and expected loss. Lenders reporting under GAAP estimate allowances under CECL (ASC 326). The interagency ACL policy statement was revised in April 2023 (S7) [VERIFY: FDIC CECL page; checked 22 Nov 2026]. OCC examiners test risk ratings against repayment capacity, guarantees and collateral (S4, "Risk-Rating CRE Loans"). Tasks: S4, K4.
3. **Environmental risk and lender liability.** C9 covers Phase I timing for MF and COM. It does not cover why a lender cares after foreclosure. A secured lender is not an "owner or operator" under CERCLA if it does not participate in management [VERIFY: 42 U.S.C. 9601(20)(F)(i), (G); checked 22 Nov 2026]. After foreclosure it keeps the exemption only if it seeks to sell "at the earliest practicable, commercially reasonable time" [VERIFY: 42 U.S.C. 9601(20)(F)(ii); checked 22 Nov 2026]. Tasks: U7, S10. RES collateral has no environmental screen in the core today.
4. **Appraisal regulation and valuation governance.** Bank buyers and warehouse lenders apply federal appraisal rules. For OCC banks, CRE transactions of $500,000 or less and residential ones of $400,000 or less need no appraisal. An evaluation is still required [VERIFY: 12 CFR 34.43(a)(1), (a)(13), (b); checked 22 Nov 2026]. A course should also cover the interagency appraisal guidelines, appraiser independence, AMC use and appraisal review. Tasks: U2, K5.
5. **Fair lending boundaries for business-purpose loans.** Business purpose does not end fair-lending duty. Reg B covers business credit [VERIFY: 12 CFR 1002.2(g); checked 22 Nov 2026] and bars discrimination in any aspect of a transaction [VERIFY: 12 CFR 1002.4(a); checked 22 Nov 2026]. The Fair Housing Act covers loans "secured by residential real estate", whatever the purpose [VERIFY: 42 U.S.C. 3605(b)(1); checked 22 Nov 2026]. That reaches RTL, DSCR and multifamily loans. C1 names ECOA but not the Fair Housing Act. Tasks: O1, K6.
6. **Construction and development risk at core level.** RTL ground-up and MF and COM bridge loans fund work in progress. Examiners expect inspections that show whether a draw fits the stage of work, "with adequate funds remaining for completion" (S4, "Monitoring Progress of Construction Projects"). Core teaches draws (C12) but not feasibility or contractor review. Tasks: U6, S2.
7. **Real estate market and submarket analysis.** ProSight's CRC exam gives 10-15% of items to industry, market and competitor analysis (S8). C0 gives market size, not cycle, supply, absorption or cap-rate spread analysis. Tasks: O6, U2, U10.

**Effect on course length.** Items 1, 2 and 7 each need about 2-3 hours if they become modules or units. Items 3-6 extend existing modules by about 0.5-1 hour each. That adds about 8-13 hours to the 38-hour core. These are planning estimates only. Final hours come from the word-count formula after lessons are final (Std 7.02).

## Self-check

| Request item | Status |
| --- | --- |
| 1. Five roles; tasks across the life cycle for RTL, DSCR, MF and COM, with dated sources | Done (§1-2). Closer tasks rest on regulator and lesson sources; no closer posting opened |
| 2. Knowledge and skills, gap and risk per task | Done (§2 tables) |
| 3. Task-to-module map with flags both ways | Done (§3) |
| 4. Missing industry topics, each with why | Done (§4, seven items) |
| Legal statements tagged and primary-sourced | Done: every statute or CFR cite opened on LII, 22 Nov 2026 |
| No invented policy limits | Done: only rule IDs already in the Model Credit Policy |

## What to look up yourself

1. A closer or funder job description from a BPL lender. Compare its tasks with F1-F6.
2. CREFC's Investor Reporting Package. Search results show v8.4 (Mar 2024) and v8.5 due Dec 2026; the site blocked direct access.
3. MBA's commercial and multifamily education outlines (blocked during research).
4. The full ProSight CRC Body of Knowledge. Compare its seven domains with C0-C14.
5. The Interagency Appraisal and Evaluation Guidelines (2010) and the FIRREA Title XI appraiser-independence rules.

## How to check it

1. Open each S-source link and confirm the quoted task wording and date.
2. Open each `[VERIFY]` cite on eCFR or the U.S. Code and confirm the text is unchanged.
3. Pick three tasks marked "covered" in §3. Find the objective and worked example in that lesson that teaches them.
4. Have one working underwriter and one servicer review §2 for missing tasks. Record the date and changes in `docs/changelog.md`.
