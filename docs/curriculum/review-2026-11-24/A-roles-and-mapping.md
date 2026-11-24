# Curriculum review A: roles, task analysis and module mapping

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Scope | Core C0-C14 (106 objectives in `docs/assessment/outcomes.md`), mapped to the four roles in CLAUDE.md (updated 23-24 Nov 2026) |
| Prepared | 24 Nov 2026. Review only: no lesson, policy, formula or code was changed |
| Inputs | Blueprints c00-c14; `outcomes.md`; needs-analysis v0; coverage-review; gate1-review; course-frame-summary; prerequisites; theory, regulatory and fraud matrices; CFI CREF comparison; competitive benchmark; university syllabi notes; Course Bible §2-3 |
| Snapshot status | `docs/SNAPSHOT.md`: all inputs current as of 22 Nov 2026. C0 and C3 lessons use pre-fix deal numbers (see `foundations-changes-2026-11-22.md`). No deal figure is quoted in this report |
| Status | Author material, not learner-facing. Decisions for the owner are in §7 |

**Role codes.** U = new underwriter. L = loan originator. A = analyst at a private lender or fund. F = founder of a lending business.

---

## 1. Job-task analysis (DACUM style)

### 1.1 Method and evidence

The needs analysis (v0, 22 Nov 2026) used five roles: originator, underwriter, closer, servicer and credit officer. CLAUDE.md now names four learner roles. I re-cut the 41 v0 tasks (O1-K7) into 31 tasks (T01-T31) for the four roles. I added tasks only where new evidence supports them.

| Code | Evidence | Opened |
| --- | --- | --- |
| S1-S15 | As listed in `needs-analysis.md` §0 (O*NET, BLS, OCC and FDIC manuals, BPL job postings) | 22 Nov 2026 (by the needs analysis) |
| N1 | Senior Analyst - Real Estate, private real estate credit team at an asset manager, [jobs.workable.com/jobs/72559971...](https://jobs.workable.com/jobs/72559971-e9f6-4c50-8187-6f526233c1e0.md). Undated. Duties include underwriting bridge, mezzanine and preferred-equity investments; building valuation and underwriting models; market research to "forecast rent, absorption, vacancy, and liquidity"; term sheets and LOIs; investment memos | 24 Nov 2026 |
| N2 | 15 U.S.C. 80a-3(c)(1), (c)(5)(C), (c)(7)(A) on Cornell LII. (c)(5)(C) excludes a person "primarily engaged in ... purchasing or otherwise acquiring mortgages and other liens on and interests in real estate" | 24 Nov 2026 |
| N3 | 17 CFR 230.506(b)(2)(i) and (c)(2) on Cornell LII (Rule 506(b) purchaser limit; Rule 506(c) all purchasers accredited, with "reasonable steps to verify") | 24 Nov 2026 |
| N4 | Search-result summaries of AAPL and Chron articles on starting a private lending business: licensing varies by state; warehouse lines come only at "fairly significant volume". **Secondary, not opened in full.** Used only to shape founder tasks, never as a legal source | 24 Nov 2026 |
| N5 | 12 CFR 1026.3(a), 1024.5(b)(2) and 1026.43(a), (c)(1) on Cornell LII (for the C0 purpose objective) | 24 Nov 2026 |

**Frequency** (F): D daily, W weekly, M monthly, Q quarterly or per project, A annual or at set-up. **Criticality** (C): H can cause a critical credit error, legal breach or large loss; M slows or weakens a deal; L inconvenience. Frequency and criticality are reviewer judgments from the evidence. They need an SME panel check (see "What to look up yourself").

**Core rule used.** A task goes to the core if at least three roles need it, or if it carries a critical-error or legal risk for anyone who touches the file. Everything else goes to a role track. "s" marks a secondary need (the role must read the output, not produce it).

### 1.2 Task chart

| ID | Duty / task | U | L | A | F | Core or track | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **A** | **Origination and intake** | | | | | | |
| T01 | Source and qualify borrowers, brokers and referral partners; keep a pipeline | - | D/H | - | s | Track L | S1, S11; v0 O1 |
| T02 | Screen business purpose, occupancy and product fit before any quote | D/H | D/H | s | M/H | Core | S11; v0 O2; 12 CFR 1026.3(a) |
| T03 | Collect the application package and know what each document proves | D/M | D/M | s | - | Core | S1, S10; v0 O3 |
| T04 | Quick-size and quote: LTV, LTC, LTARV, DSCR; rate, points, all-in yield | D/H | D/H | W/M | W/M | Core | S1, S9, S11; v0 O4, U5 |
| T05 | Issue a non-binding term sheet or LOI; manage the borrower to commitment | s | D/H | W/M | s | Track L (A reads) | S11, N1; v0 O4 |
| T06 | Deal with applicants inside fair-lending rules: no discouragement; adverse action on time | W/H | D/H | - | M/H | Core | 12 CFR 1002.4(b); v0 O1, K6 |
| **B** | **Underwriting** | | | | | | |
| T07 | Spread the rent roll and T-12 to underwritten NOI and net cash flow | D/H | s | D/H | - | Core | S14, N1; v0 U1 |
| T08 | Review the appraisal, BPO or AVM; test as-is, ARV and as-stabilized values | D/H | s | W/H | - | Core | S9, S15, N1; v0 U2 |
| T09 | Analyze the sponsor and guarantor: credit, liquidity, net worth, experience | D/H | W/M | W/M | - | Core | S2, S4; v0 U3 |
| T10 | Run KYC, beneficial ownership, OFAC and fraud red-flag checks | D/H | D/H | s | M/H | Core | S4; v0 U4 |
| T11 | Review a construction or rehab budget and the project's feasibility | W/H | - | W/H | - | Core (depth in families) | S4 "ADC", S9; v0 U6 |
| T12 | Review title, survey, insurance, environmental, tenant documents and the site visit | W/H | s | M/M | - | Core | S4, S9; v0 U7 |
| T13 | Check the property state's licensing, usury, fee and remedy rules | W/H | W/H | - | Q/H | Core | v0 U8 |
| T14 | Size and structure the loan: binding test, reserves, recourse, prepayment, extensions | D/H | W/M | W/H | s | Core | S4, S9; v0 U5 |
| T15 | Stress-test the exit and refinance; place the deal in the market cycle | W/H | - | W/H | s | Core | S13, S14; v0 U10 |
| T16 | Research the market and submarket: rents, vacancy, supply, absorption, cap rates | s | s | W/H | s | Core intro; Track A depth | N1; S8 (CRC: 10-15% of items) |
| T17 | Build or review a deal underwriting model in a spreadsheet | s | - | D/H | - | Track A; workbooks in core | N1; CFI rec. 3 |
| T18 | Write the credit or investment memo, set conditions, state exceptions; present to committee | W/H | M/M | W/H | s | Core | S2, S14, N1; v0 U9, O6 |
| T19 | Check the loan against a capital partner's eligibility criteria | W/H | s | W/M | M/H | Core (check only) | S10; v0 U11 |
| **C** | **Closing** | | | | | | |
| T20 | Clear conditions, check the settlement statement and control the wire | W/H | W/M | - | M/H | Core | S10; v0 F1-F3 |
| T21 | Perfect the lien and build the collateral file | M/M | - | M/M | M/M | Core | S4; v0 F4-F5 |
| **D** | **Managing the loan and portfolio** | | | | | | |
| T22 | Monitor loans: draws, reporting, covenants, extensions, payoffs, ratings | s | s | W/H | M/H | Core | S2-S5, S13; v0 S2-S8 |
| T23 | Resolve defaults: workout, deed in lieu, foreclosure, REO | s | - | M/H | Q/H | Core | S6, S12; v0 S9-S10 |
| T24 | Analyze the portfolio: concentration, delinquency, vintage, expected loss | - | - | M/H | M/H | Core (C14); Track A depth | S4, S5, S7; v0 K3, K4 |
| T25 | Report to investors and lenders: remittance, loan-level and fund-level reports | - | - | M/H | M/H | Track A + F (shared unit) | S13; v0 S11 |
| T26 | Run capital-markets steps: warehouse draws, whole-loan sale, data tape, repurchase | - | - | M/H | M/H | Track A + F (shared unit) | v0 K7, F6; needs analysis §4.1; N4 |
| **E** | **Building the business** | | | | | | |
| T27 | Design products, the credit box and a written credit policy with an authority matrix | s | - | s | Q/H | Track F (core reads policy) | S4 "Loan Policies"; v0 K1, K2 |
| T28 | Map the firm's legal footprint: entity, state licences, AML duty, compliance program | - | s | - | A/H | Track F | v0 U8, U4; N4 |
| T29 | Raise and structure capital: equity, notes, a private fund, a warehouse line | - | - | s | Q/H | Track F | N2, N3, N4 |
| T30 | Model unit economics; price the product to cover loss, funding cost and overhead | - | s | Q/M | M/H | Track F | Theory map TM-19, TM-20; C08-O5 |
| T31 | Set up operations and vendors (LOS, AMC, title, subservicer); run QC and loan review | - | - | - | Q/H | Track F | S4 "Control Systems", S5 "Loan Review" |

### 1.3 Tasks per role

| Role | Primary tasks | Count | Most critical (daily and H) |
| --- | --- | ---: | --- |
| U new underwriter | T02-T04, T06-T15, T18-T21 | 17 (15 at H; T03 and T21 are M) | T02, T04, T07, T08, T09, T10, T14 |
| L loan originator | T01-T06, T09, T10, T13, T14, T18, T20 | 12 | T01, T02, T04, T05, T06, T10 |
| A fund or lender analyst | T04, T05, T07-T09, T11, T12, T14-T18, T21-T26 | 18 (13 at H) | T07, T17 |
| F founder | T02, T04, T06, T10, T13, T19-T31 | 18 (16 at H) | None daily: monthly and set-up tasks dominate |

**Read.** The underwriter is the core's centre of gravity. Of 31 tasks, 21 are core (T16 and T24 at intro level only). The originator and the founder each own four or more tasks no core module teaches (T01, T05; T27-T31). That is what the tracks are for.

---

## 2. Mapping matrix: objectives to tasks and roles

**Verdicts.** KEEP, REVISE (change wording or scope in place), MOVE (to the named place), MERGE (into the named objective), CUT.

### C0 Program orientation and the BPL market. Module verdict: **REVISE (rewrite; see §5)**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C00-O1 | Distinguish BPL loans from bank, agency and consumer loans | T02 | U L A F | REVISE → new C0-1 | Becomes the purpose screen at Apply. C1 keeps the full test |
| C00-O2 | Place lenders in the capital stack; name their regulators | T26, T29 | A F | MOVE | Lender types → C1-O4 table; capital stack → C8-O7 (home) and C6-O7. Market background, not a day-one skill |
| C00-O3 | Map a funding route; name risk-retention duties | T19, T26 | A F (U s) | MOVE | Eligibility check → C14-O2 (narrowed); full topic → shared capital-markets unit (tracks A, F) |
| C00-O4 | Calculate shares and growth from a data series | T16 | A | MOVE | → Track A unit A1; one public series into C4-O3. A real analyst task, but not a core lending skill |
| C00-O5 | Explain the cycle and refinance risk | T15 | U A F | MOVE | → content in C8-O6 and C14-O5, after exits are sized. No new objective (C8 is at 8) |
| C00-O6 | Locate rule IDs and sources in the course tabs | none | - | CUT | Course navigation. CLAUDE.md bars it. Becomes an unscored "Start here" page |

### C1 Business purpose vs consumer. Module verdict: **KEEP** (one REVISE)

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C01-O1 | Explain the exemptions from TILA, RESPA, SAFE Act | T02 | U L F | KEEP | Deep version of new C0-1 |
| C01-O2 | Apply the federal purpose test | T02 | U L F | KEEP | Critical error; daily front-line task |
| C01-O3 | Apply the state occupancy test | T02, T13 | U L F | KEEP | State result can override federal |
| C01-O4 | Classify which federal laws reach a BPL loan | T06, T10, T28 | U L F | REVISE | Add the lender-type row from C00-O2: founders must know which laws reach their firm |
| C01-O5 | Apply fair-lending rules to a business file | T06 | L U F | KEEP | Critical; originator conduct |
| C01-O6 | Diagnose occupancy and purpose red flags | T02, T10 | U L | KEEP | Critical |
| C01-O7 | Calculate personal-use share of cash-out | T02 | U L | KEEP | Critical; common on cash-out refinances |

### C2 Credit fundamentals and the loan life cycle. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C02-O1 | Apply the five Cs; separate primary and secondary repayment | T09, T18 | U L A | REVISE | Primary-versus-secondary moves to new C0-3. C2 goes deeper on the five Cs |
| C02-O2 | Distinguish credit box from interagency standards | T19, T27 | U A F | KEEP | Founders set a box; bank buyers apply the interagency one |
| C02-O3 | Calculate each credit-box test; find the binding one | T04, T14 | U L A F | KEEP | Critical. Applies C0's ratios against policy caps |
| C02-O4 | Name the approver from the authority matrix | T18, T27 | U F | KEEP | Critical |
| C02-O5 | Prepare a dated life-cycle timeline | T03, T20, T22 | U L A F | MOVE → new C0-2 | Orientation skill. The owner asked for it in C0 |
| C02-O6 | Assign a risk rating | T22, T24 | U A F | KEEP | C12-O5 justifies; C2 assigns |
| C02-O7 | Explain adverse selection, moral hazard, rationing | T27 | U A F | KEEP | University depth; why collateral beats price |
| C02-O8 | Explain default as an option; expected loss | T24, T30 | U A F | KEEP | Base for pricing (C8) and allowance (C14) |

### C3 Real estate finance math. Module verdict: **KEEP**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C03-O1 | Interest on Actual/360 with draws and paydowns | T20, T22 | U A F | KEEP | Billing and payoff checks |
| C03-O2 | Convert nominal, effective and Actual/360 rates | T04, T13 | U L A | KEEP | Quoting and usury tests |
| C03-O3 | Amortizing payment, schedule and balloon | T14 | U A | KEEP | Term-loan sizing |
| C03-O4 | Debt service and loan constant on the test basis | T14 | U L A | KEEP | Critical |
| C03-O5 | Floating rate and coverage test rate with a cap strike | T14, T22 | U A | KEEP | Critical |
| C03-O6 | Points, term and payoff versus yield and all-in cost | T04, T30 | U L A F | KEEP | Originator quotes and founder pricing both use it |

### C4 Property cash flow. Module verdict: **KEEP** (one REVISE)

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C04-O1 | GPR, vacancy, loss-to-lease, EGI | T07 | U A | KEEP | Core spreading |
| C04-O2 | Classify statement lines and lease types | T07 | U A | KEEP | Base for O3 and O4 |
| C04-O3 | Reconcile T-12 and rent roll to underwritten NOI | T07, T16 | U A | REVISE | Add one public submarket series from C00-O4 as evidence |
| C04-O4 | Calculate underwritten NOI and NCF | T07, T14 | U A | KEEP | Critical |
| C04-O5 | Coverage and break-even occupancy | T14 | U L A | KEEP | Critical |
| C04-O6 | Recommend proceed, resize or decline under shocks | T15 | U A | KEEP | Evaluate-level judgment |

### C5 Valuation. Module verdict: **KEEP**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C05-O1 | Distinguish value types and the test each feeds | T08 | U L A | KEEP | Originators misquote on the wrong value |
| C05-O2 | Direct cap and DCF with sensitivity | T08, T17 | U A | KEEP | |
| C05-O3 | Reconcile the three approaches | T08 | U A | KEEP | |
| C05-O4 | Apply the lender's value rules and federal framework | T08, T19 | U A F | KEEP | Critical |
| C05-O5 | Cap rate versus loan constant (leverage) | T15, T30 | U A F | KEEP | |
| C05-O6 | Zoning, HBU, nonconforming use | T08, T12 | U A | KEEP | CFI gap 6 closed |
| C05-O7 | Accept, revise or reject an appraisal | T08, T10 | U A | KEEP | Critical; fraud loss |
| C05-O8 | Explain land as an option | T11 | U A | REVISE | Shorten; tie to the ground-up capstone. First to trim if C5 runs long |

### C6 Borrower, sponsor and guarantor. Module verdict: **KEEP**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C06-O1 | Name every required guarantor | T09 | U L | KEEP | Critical |
| C06-O2 | Diagnose credit-report findings | T09 | U L | KEEP | |
| C06-O3 | Calculate liquidity and reserves | T09 | U L A | KEEP | Critical |
| C06-O4 | Reconcile a personal financial statement | T09, T10 | U | KEEP | Fraud catch |
| C06-O5 | Decide if a guaranty adds real support | T09 | U A | KEEP | |
| C06-O6 | Experience tier and sponsor exposure | T04, T09 | U L | KEEP | Critical; originators quote by tier |
| C06-O7 | Read a JV operating agreement | T09 | U A | KEEP | Fund analysts read these weekly (N1) |

### C7 KYC, BSA/AML, OFAC and fraud. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C07-O1 | Classify AML and sanctions duties by lender type | T10, T28 | U F | KEEP | Founders must know their duty |
| C07-O2 | OFAC 50 Percent Rule on an ownership chart | T10 | U L F | KEEP | Critical |
| C07-O3 | Diagnose fraud red flags | T10 | U L A | KEEP | Critical |
| C07-O4 | First-hour wire-diversion response | T20 | U F | KEEP | Whole advance at risk |
| C07-O5 | SAR deadlines and confidentiality | T10, T28 | U F | REVISE | Frame as "if your firm has a SAR duty", after O1 decides that |
| C07-O6 | Critique a small lender's AML program | T28 | F | MOVE → Track F unit F2 | Only founders design programs |

### C8 Loan structuring and sizing. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C08-O1 | Loan by each leverage test | T04, T14 | U L A F | KEEP | Critical |
| C08-O2 | Find the binding test and what moves it | T14 | U L A | KEEP | Critical |
| C08-O3 | Bridge day-one advance, future funding, cap, reserve | T14 | U A | KEEP | Critical |
| C08-O4 | Analyze a construction budget and contract | T11 | U A | KEEP | Owner decision 22 Nov: construction depth here |
| C08-O5 | Rate build-up and all-in cost screen | T04, T30 | U L A F | KEEP | Founder pricing starts here |
| C08-O6 | Exit break-even income and take-out rate | T15 | U A F | REVISE | Add cycle phase, maturity wall and leading indicators from C00-O5 |
| C08-O7 | Capital stack with mezzanine or pref | T14 | U A | KEEP | Home for C0's capital-stack math |
| C08-O8 | Recommend a full structure | T05, T14 | U L A | KEEP | Track L builds the term sheet on it |

### C9 Loan documents, title, insurance and collateral. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C09-O1 | Jobs of each loan document | T03, T21 | U L A | KEEP | |
| C09-O2 | Recourse package and springing recourse | T09, T14 | U L A | KEEP | Originators negotiate carve-outs |
| C09-O3 | Title commitment and survey | T12 | U | KEEP | Critical |
| C09-O4 | Insurance-to-value and coverage evidence | T12 | U | KEEP | Critical |
| C09-O5 | Tax and insurance escrows | T20 | U | MERGE → C11-O2 | Escrows are closing math; one home |
| C09-O6 | Environmental diligence and CERCLA | T12 | U A | KEEP | Critical |
| C09-O7 | Estoppel, SNDA, lockbox rules | T12 | U A | KEEP | |
| C09-O8 | Diagnose a site visit report | T02, T12 | U L | KEEP | Occupancy fraud; CFI gap 3 closed |

### C10 State law. Module verdict: **KEEP**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C10-O1 | Lien, title, intermediate theories; redemption | T13 | U F | KEEP | |
| C10-O2 | State licence decision | T13, T28 | U L F | KEEP | Critical; founder's first legal question |
| C10-O3 | Usury analysis of a fee package | T04, T13 | U L F | KEEP | Critical |
| C10-O4 | Enforceability of default interest, late fee, prepayment | T13 | U F | KEEP | |
| C10-O5 | Judicial versus power-of-sale foreclosure | T23 | U A F | KEEP | |
| C10-O6 | SCRA and PTFA overlays | T23 | U A | KEEP | |
| C10-O7 | Value recourse at origination | T09, T23 | U A | KEEP | |

### C11 Closing and funding. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C11-O1 | Funding-day condition check | T20 | U L | KEEP | Critical |
| C11-O2 | Balanced settlement statement | T20 | U L F | REVISE | Absorb C09-O5 escrows |
| C11-O3 | Reconcile the net funding wire | T20 | U F | KEEP | Critical |
| C11-O4 | Control response to wire-fraud signs | T10, T20 | U L F | KEEP | Critical |
| C11-O5 | Recording acts, gap, CPL, title policy | T21 | U A | KEEP | |
| C11-O6 | Post-closing collateral file and lapse dates | T21, T26 | U A F | REVISE | Keep the trailing-document log. Custodian delivery and bailee letters go to the capital-markets unit |

### C12 Servicing, draws and asset management. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C12-O1 | Fund a draw; test in balance | T11, T22 | U A F | KEEP | Critical |
| C12-O2 | Interest bill, late fee, cap payment | T22 | A F | REVISE | Frame as checking a servicer's bill. None of the four roles bills daily |
| C12-O3 | Decide an extension | T15, T22 | U A F | KEEP | Critical |
| C12-O4 | Reporting package and cash sweep | T22 | U A | KEEP | |
| C12-O5 | Justify rating, watch list, accrual | T22, T24 | U A F | KEEP | |
| C12-O6 | Casualty: lender versus servicer steps | T22 | U A | KEEP | Stays level 2 until a proceeds rule exists |
| C12-O7 | Payoff and lien release | T22 | U A | KEEP | |
| C12-O8 | Investor remittance report (blocked) | T25 | A F | MOVE → shared unit A5/F3 | Track task; still needs the owner's remittance rule |

### C13 Default, workout, foreclosure and REO. Module verdict: **KEEP**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C13-O1 | First-30-days default sequence | T23 | U A F | KEEP | |
| C13-O2 | Compare resolutions by net loss | T23 | A F | KEEP | Critical |
| C13-O3 | Recommend workout terms | T23 | A F | KEEP | |
| C13-O4 | Deed in lieu versus foreclosure; receiver | T23 | A F | KEEP | Critical |
| C13-O5 | Effect of borrower bankruptcy | T23 | A F | KEEP | |
| C13-O6 | Enforce a guaranty or not | T09, T23 | A F | KEEP | |
| C13-O7 | REO entry and disposition plan | T23, T24 | A F | KEEP | |

### C14 Credit memo, committee and portfolio. Module verdict: **REVISE**

| Obj | Short form | Tasks | Roles | Verdict | Reason |
| --- | --- | --- | --- | --- | --- |
| C14-O1 | Critique a draft credit memo | T18 | U L A | KEEP | |
| C14-O2 | Capital-partner fit, sale price, repurchase (blocked) | T19, T26 | U A F | REVISE | Core keeps the eligibility check (T19). Sale price at market yield and repurchase go to the capital-markets unit |
| C14-O3 | Decide an exception request | T18, T27 | U F | KEEP | Critical |
| C14-O4 | Portfolio-limit breach and participation cure | T24 | A F | KEEP | |
| C14-O5 | Exit under committee stresses | T15 | U A | REVISE | Add cycle indicators and the maturity wall (from C00-O5) at portfolio level |
| C14-O6 | Critique a committee presentation | T18 | U L A | KEEP | Originators pitch at committee |
| C14-O7 | Ratings to allowance | T24 | A F | KEEP | Stays level 2 until an expected-loss formula exists |
| C14-O8 | Diagnose loan-review findings | T24, T31 | A F | KEEP | Founders own loan review |

### 2.1 Totals

| Verdict | Count of 106 |
| --- | ---: |
| KEEP | 86 |
| REVISE | 11 |
| MOVE | 7 (C00-O2 to -O5, C02-O5, C07-O6, C12-O8) |
| MERGE | 1 (C09-O5) |
| CUT | 1 (C00-O6) |

After changes the core has 101 objectives: C0 5, C1 7, C2 7, C3 6, C4 6, C5 8, C6 7, C7 5, C8 8, C9 7, C10 7, C11 6, C12 7, C13 7, C14 8.

**Role coverage by module.** All roles: C0, C2, C8. U, L, F: C1, C7, C10, C11. U, A: C4, C5. U, L, A: C6, C9. A, F lead: C12, C13. U, A, F, L: C3, C14. The originator gets least from C4, C5, C12 and C13 (about 16 credits). See decision 3.

---

## 3. Gaps: tasks no module teaches (ADD)

| # | Gap | Tasks | Placement | Rough hours | Notes |
| --- | --- | --- | --- | ---: | --- |
| G1 | Origination as a job: channels, broker management, discovery call, pipeline | T01 | Track L, units L1-L2 | 3.0 | No core module teaches it (needs analysis §3) |
| G2 | Term sheet, LOI and commitment letter: anatomy, non-binding language, deposits | T05 | Track L, unit L4; one paragraph in C8-O8 | 1.5 | Legal effect of preliminary agreements needs a deal-state case. None opened yet |
| G3 | Market and submarket analysis: supply, absorption, vacancy, rent growth, cap-rate spreads | T16 | Core intro in C4-O3 (+0.2 credit); depth in Track A, unit A1 | 2.0 | Former C00-O4 skills land here. N1 and S8 support it |
| G4 | Building and reviewing a spreadsheet underwriting model | T17 | Track A, unit A2; blank and completed workbooks for C3-C8, C12-C14 | 2.5 | CFI ships files in all nine courses; we ship none. Test by exhibit-based MC only |
| G5 | Capital markets: warehouse lines, whole-loan sale, securitization, data tape, repurchase, risk retention, custodian delivery | T19, T26 | Shared unit for Tracks A and F | 2.0 | Former C00-O3, part of C11-O6 and C14-O2 land here. Needs the buyer eligibility sheet (registry open item 9) |
| G6 | Investor and lender reporting; fund metrics (gross versus net yield, fees, marks) | T25 | Shared unit for Tracks A and F | 2.0 | Needs the owner's remittance rule (registry open item 7) and fund-metric formulas. None exist |
| G7 | Raising capital and fund formation: notes, Reg D 506(b) versus 506(c), Investment Company Act 3(c)(5)(C), 3(c)(1), 3(c)(7) | T29 | Track F, unit F3 | 2.5 | Teach issue-spotting, not how-to. [VERIFY: 15 U.S.C. 80a-3(c)(1), (c)(5)(C), (c)(7)(A); Cornell LII; checked 24 Nov 2026] [VERIFY: 17 CFR 230.506(b)(2)(i), (c)(2); Cornell LII; checked 24 Nov 2026] |
| G8 | Lender unit economics: points, spread, cost of funds, loss, overhead, break-even volume | T30 | Track F, unit F1 | 2.0 | No formula exists in the Library. Owner must supply them; none may be invented |
| G9 | Writing a credit policy, authority matrix and exception process; QC and loan review program | T27, T31 | Track F, unit F4 | 2.0 | Learners read the Model Credit Policy in core; here they draft a policy section |
| G10 | Operations and vendor management: LOS, AMC panel, title agents, subservicer oversight | T31 | Track F, unit F5 | 1.5 | Wire controls from C11 reused |
| G11 | Portfolio analytics: delinquency, roll rates, vintage curves, concentration dashboards | T24 | Track A, unit A4 | 2.0 | Needs owner formulas or labelled illustrative data |
| G12 | Full third-party report reads: whole appraisal, Phase I, property condition report | T08, T12 | Track U, unit U2 | 2.0 | CFI gaps 5 and 6; exhibits from the document registry |
| G13 | Casualty proceeds and expected-loss pricing rules | T22, T30 | Model Credit Policy (owner) | 0 | Policy gaps already listed (course frame §5 item 10). Blocks raising C12-O6 and C14-O7 |

**Total new track content:** about 25 hours across four tracks. None of it is core.

---

## 4. Role tracks

**How they hang off the core.** Every learner takes the same core (C0-C14). Each track is a short sequence of units on the same running deals and the RES-GU ground-up capstone deal (owner decision 22 Nov 2026). Each track ends with a role-specific capstone on that one deal. Units may open early where the core prerequisite is met, so the originator is not idle until C14.

### Track L: Loan originator (about 8 h)

| Unit | Content | Hours | Opens after |
| --- | --- | ---: | --- |
| L1 | The originator's market: channels, brokers, referral partners, reading a competitor's public term sheet | 1.5 | C2 |
| L2 | The first call: discovery, purpose and occupancy screen, what not to say (Reg B discouragement) | 1.5 | C1, C2 |
| L3 | Quick-size and price: back-of-envelope sizing, points versus rate, all-in yield to the borrower | 1.5 | C3, C8 |
| L4 | Term sheet and LOI: anatomy, non-binding language, deposits, conditions; commitment letter contrasted | 1.5 | C8, C9 |
| L5 | Pipeline to close: third parties, condition chasing, counter-offers and declines, adverse-action handoff | 1.0 | C11 |
| L6 | **Capstone:** term sheet and a 5-minute committee pitch for the capstone deal; answer 10 committee MC questions | 1.0 | C14 |

### Track U: New underwriter (about 8 h)

| Unit | Content | Hours | Opens after |
| --- | --- | ---: | --- |
| U1 | Spreading lab: full rent roll and T-12 into the workbook, with planted defects | 2.0 | C4 |
| U2 | Third-party report lab: whole appraisal, Phase I, property condition report, title commitment | 2.0 | C5, C9 |
| U3 | Rehab and construction budget review on the capstone deal (bridge to family R3) | 1.5 | C8 |
| U4 | Conditions, exceptions and capital-partner eligibility in practice | 1.0 | C14 |
| U5 | **Capstone:** full credit memo on the capstone deal, then critique from the committee side | 1.5 | C14 |

### Track A: Analyst at a private lender or fund (about 12 h)

| Unit | Content | Hours | Opens after |
| --- | --- | ---: | --- |
| A1 | Market and submarket analysis: public series, percent versus percentage point, cycle indicators | 2.0 | C4 |
| A2 | The underwriting model: build, audit, sensitivity and scenario tables, IRR | 2.5 | C5, C8 |
| A3 | Capital markets (shared with F): warehouse, whole-loan sale, securitization, data tape, repurchase, risk retention | 2.0 | C14 |
| A4 | Portfolio analytics: delinquency, roll rates, vintages, concentration, expected loss | 2.0 | C14 |
| A5 | Investor reporting (shared with F): remittance, loan-level and fund-level reports | 2.0 | C12, C14 |
| A6 | **Capstone:** investment memo plus model plus portfolio-impact note for the capstone deal | 1.5 | A1-A5 |

### Track F: Founder of a lending business (about 12 h)

| Unit | Content | Hours | Opens after |
| --- | --- | ---: | --- |
| F1 | Business model and unit economics (needs owner formulas) | 2.0 | C8 |
| F2 | Legal footprint: entity, state licence map, AML duty and program design (former C07-O6), compliance calendar | 2.0 | C7, C10 |
| F3 | Capital: equity, notes, private fund issue-spotting, warehouse line, forward-flow buyer; shares A3 and A5 | 2.5 | C14 |
| F4 | Writing the credit policy: credit box, authority matrix, exceptions, QC and loan review | 2.0 | C14 |
| F5 | Operations: LOS, vendors, subservicer oversight, wire controls | 1.5 | C11, C12 |
| F6 | **Capstone:** 12-month plan for a new lender whose first loan is the capstone deal: product sheet, one policy section, capital plan, risk register | 2.0 | F1-F5 |

**Build once, use twice.** A3 and A5 serve Track F too. Real new build is about 36 hours of track content, not 40.

---

## 5. C0 rewrite proposal

### 5.1 The owner's draft view: validate or challenge

| Owner point | My view | Why |
| --- | --- | --- |
| C0 objectives are market background, not job skills | **Agree** | Five of six map to no daily task for any role. Only C00-O1 maps to a critical task (T02) |
| Make business-purpose versus consumer objective 1 | **Agree, at screen level** | It decides whether TILA, RESPA and the ATR rule apply. C1 keeps the full test, so C0 must not duplicate C01-O2 |
| Shorten the capital stack | **Agree** | C0 T2 works a mezzanine combined-DSCR test. That is C08-O7's job (coverage review home) |
| Move funding routes and risk retention later | **Agree** | Learners cannot read a funder's criteria before C2 and C8. Core keeps an eligibility check in C14; tracks A and F get the rest |
| Cut or move the market-data objective | **Move, do not cut** | Market research is a named analyst duty (N1) and 10-15% of the ProSight CRC exam (S8). It belongs in Track A and C4-O3, not hour one |
| Move cycle analysis after bridge exits | **Agree, as content not a new objective** | C8 already has 8 objectives and sits near the 4-hour cap (LD-03). Fold it into C08-O6 and C14-O5 |
| Cut objective 06 (locating rule IDs) | **Agree** | CLAUDE.md: "Objectives describe lending skills, not course navigation." Keep an unscored "Start here" page |
| Add life cycle, two credit questions, ratios, who does what | **Agree, but these already live in C2** | C02-O5 is the life-cycle timeline. C02-O1 splits primary and secondary repayment. C02-O3 calculates the ratios against caps. Adding them to C0 without changing C2 creates duplicates. Fix: move C02-O5 into C0; trim C02-O1; C0 computes ratios with no caps, C2 tests them against caps |
| No author metadata on learner pages | **Agree; it is live now** | `exports/core-course.html` shows six C0 tags such as "(Understand; the 'Reading market data' section)". C3's lesson source has four more. Fix it in the build, and make `check:copy` fail on the pattern |

### 5.2 New C0 objectives

Module title: **"The BPL deal: who, what and the two credit questions"** (working title).

| # | Objective | Bloom | Roles | Tasks | Worked example | Practice |
| --- | --- | --- | --- | --- | --- | --- |
| C0-1 | **Apply** a three-fact purpose screen (borrower, property use, use of proceeds) to a loan request. Decide business-purpose, consumer or refer. Name the consumer rules that result switches on or off | 3 Apply | U L A F | T02 | Maple Run (entity borrower, investment house) beside a what-if: a person buying a home to live in | Three requests, one deliberately unclear (refer) |
| C0-2 | **Sequence** a running-deal loan through the life-cycle stages (inquiry, quote, application, underwriting, approval, closing, servicing, payoff or default). Name who acts, the document produced and the decision at each stage | 3 Apply | U L A F | T03, T20, T22 | Cedar Court timeline (moved from C02-O5) | Birchwood Plaza: put shuffled documents and roles in order |
| C0-3 | **Differentiate** the two credit questions: will the borrower repay from the planned source, and what does the lender recover if not? Sort a deal's facts under each and name the weakest one | 4 Analyze | U L A F | T09, T14, T18 | Maple Run: sale or DSCR refinance versus house value and guaranty | Birchwood: lease-up exit versus collateral |
| C0-4 | **Calculate** LTV, LTC, LTARV and DSCR for a running deal from stated inputs. State in one sentence the loss each ratio guards against | 3 Apply | U L A F | T04 | F-CORE-14 (LTV), F-RES-04 (LTC, flip), F-RES-02 (LTARV), F-CORE-11 (DSCR) on Maple Run and Cedar Court, using current `running-deals.md` figures. No policy caps: C02-O3 adds them | One ratio per deal, with a "which number is wrong" exhibit |
| C0-5 | **Compare** the five BPL products (fix-and-flip, ground-up, DSCR rental, multifamily bridge, commercial bridge) by repayment source, exit and main way each fails | 2 Understand | U L A F | T04, T15 | Existing C0 T1 product table, kept | Match five short requests to products |

**Bloom check.** Four of five at Apply or above (80%). One verb each (LD-01). Every objective maps to a T-task and all four roles.

**Legal anchors for C0-1** (each opened 24 Nov 2026 on Cornell LII):
- Reg Z exempts "an extension of credit primarily for a business, commercial or agricultural purpose" and credit "to other than a natural person" [VERIFY: 12 CFR 1026.3(a)(1)-(2); checked 24 Nov 2026].
- RESPA's Regulation X exempts business-purpose loans "as defined by 12 CFR 1026.3(a)(1)" [VERIFY: 12 CFR 1024.5(b)(2); checked 24 Nov 2026].
- The ability-to-repay rule covers "any consumer credit transaction that is secured by a dwelling" [VERIFY: 12 CFR 1026.43(a); checked 24 Nov 2026]. A business-purpose loan is not consumer credit, so the rule does not reach it.

**Unscored context in C0 (no objective).** One paragraph on how a non-bank funds loans, previewing C14 and the tracks. A scope box: owner-occupied CRE, consumer mortgages and non-US practice are out (CFI rec. 12). The "Start here" navigation page, excluded from credit as instructions (Std 7.02).

### 5.3 What moves where

| From C0 today | To | Form |
| --- | --- | --- |
| T1 five products and exits | New C0-5 | Kept, trimmed |
| T2 capital stack and mezzanine math | C08-O7 (home); C06-O7 for JV control | Worked example moves |
| T2 lender types and regulators | C01-O4 (new lender-type row); Track F unit F2 | Table |
| T2 "two crises in one page" | C1 T1 (why consumer rules exist); C14 (CRE concentration) | Short history box |
| T3 funding routes, risk retention | C14-O2 (eligibility check); shared unit A3/F3 | Objective and unit |
| T4 market data and percent versus percentage point | Track A unit A1; one series in C04-O3; the percentage-point note in C3 | Unit and box |
| T5 market cycle and refinance risk | C08-O6 and C14-O5 content | Worked example on Cedar Court's exit |
| T6 roles, IDs and tags | Roles → C0-2; IDs and tags → "Start here" page | Unscored |
| C02-O5 life-cycle timeline | New C0-2 | Objective moves |

**Size.** Today's C0 lesson is 15,550 words against a 2.0-credit blueprint. The rewrite targets about 10,000 counted words and about 26 scored items. That is about 2.0 credits: (10,000 ÷ 180 + 26 × 1.85) ÷ 50 = (55.6 + 48.1) ÷ 50 = 2.07, rounded down to 2.0.

---

## 6. Sequence and hours

### 6.1 Revised core sequence

The order and the five categories of three stay (owner decision 22 Nov 2026). Content shifts inside them.

| Category | Module | Change | Credits now (blueprint) | Credits revised (estimate) |
| --- | --- | --- | ---: | ---: |
| Foundations | C0 The BPL deal | Rewritten (§5) | 2.0 | 2.0 |
| | C1 Business purpose vs consumer | + lender-type row, crises box | 3.2 | 3.4 |
| | C2 Credit fundamentals | − life cycle; trimmed O1 | 3.4 | 3.0 |
| Real estate analysis | C3 Finance math | No change | 3.4 | 3.4 |
| | C4 Property cash flow | + one submarket series | 3.8 | 4.0 |
| | C5 Valuation | No change | 4.0 | 4.0 |
| Underwriting | C6 Borrower and guarantor | No change | 4.4 | 4.4 |
| | C7 KYC, AML, fraud | − O6 to Track F | 3.6 | 3.4 |
| | C8 Structuring and sizing | + cycle content in O6 | 4.6 | 4.8 |
| Legal and closing | C9 Documents and collateral | − escrows | 4.2 | 4.0 |
| | C10 State law | No change | 3.4 | 3.4 |
| | C11 Closing and funding | + escrows; − custodian delivery | 2.8 | 3.0 |
| Managing the loan | C12 Servicing | − O8 to tracks | 4.4 | 4.0 |
| | C13 Default to REO | No change | 4.4 | 4.4 |
| | C14 Memo, committee, portfolio | O2 narrowed; + cycle in O5 | 4.6 | 4.6 |
| **Total** | | | **56.2** | **55.8** |

### 6.2 Hours against the target

| Measure | Hours | Credits (50 min) |
| --- | ---: | ---: |
| Course Bible §3 claim today | 38.0 | (not measured) |
| Blueprint projection today (coverage review §5) | 46.8 | 56.2 |
| Revised core (this review) | 46.5 | 55.8 |
| Revised core + Track L or U (8 h) | 54.5 | 65.4 |
| Revised core + Track A or F (12 h) | 58.5 | 70.2 |
| Revised core + a role track + a product family (20 h, Bible §3) | 74.5-78.5 | 89.4-94.2 |

**Read.** Core plus one role track lands inside 50-70 hours for every role. Adding a product family as well breaks the ceiling. That is decision 2. All figures are planning estimates. Final credits come from word and item counts once lessons are final (Std 7.02). C8 at 4.8 credits is 4.0 hours, exactly at the LD-03 cap. Any further growth forces the C8 split the owner deferred.

---

## 7. Top 10 decisions for the owner

| # | Decision | Recommendation | Trade-off |
| --- | --- | --- | --- |
| 1 | Adopt the four-role task chart (§1) as the needs-analysis basis | Yes. Keep closer, servicer and credit-officer tasks as core content, not as audiences | Needs analysis v0 and every objective's task links (O1-K7) must be re-keyed to T01-T31 |
| 2 | What is the 50-70 hour certificate? | Core plus one role track. Product families (R, M, CM) become later electives | Product depth arrives later. Course Bible §2-3 certificates must be rewritten |
| 3 | One core for all four roles, or a lighter core for originators? | One core. Originators who can size and read a value make fewer bad promises | Originators spend about 16 credits on C4, C5, C12 and C13 that they use less often |
| 4 | Adopt the C0 rewrite in §5 | Yes: five job objectives, business-purpose screen first | About 60% of today's 15,550-word C0 lesson relocates or is discarded |
| 5 | Move the life-cycle objective from C2 into C0 | Yes, and trim C02-O1 so the two credit questions live in C0 | C2 drops to about 3.0 credits. Theory-map homes and the C2 blueprint must be updated |
| 6 | Where do funding routes and risk retention live? | Core keeps a buyer-eligibility check in C14-O2. The full topic goes to a shared A/F unit | Underwriters meet securitization late. Both homes still need the buyer eligibility sheet |
| 7 | Where do market data and the market cycle live? | Data skills in Track A and C04-O3. Cycle as content in C08-O6 and C14-O5 | C8 reaches the 4-hour cap. One more addition forces the C8 split |
| 8 | How far does the founder track go on law and economics? | Issue-spotting only for securities, fund and licensing law. You supply unit-economics formulas | Founders get less "how-to". It avoids legal-advice risk and invented numbers |
| 9 | Strip author metadata at build time | Yes. Keep Bloom tags in source and JSON only. Make `check:copy` fail on "(Understand;" and similar | Small build change. The live C0 page needs a rebuild |
| 10 | Move C07-O6 and C12-O8 to tracks; merge C09-O5 into C11-O2 | Yes | Core loses about 0.6 credits; tracks A and F gain. C7 falls to five objectives |

---

## Self-check

| Requirement | Status |
| --- | --- |
| 8-15 tasks per role, with frequency, criticality and evidence | Done (§1.3). U lists 17 tasks; two are low-weight and could drop to reach 15 |
| Every objective C0-C14 mapped with a verdict and reason | Done: 106 rows (§2), totals reconcile (86 + 11 + 7 + 1 + 1) |
| Gaps placed with hours | Done: 13 gaps (§3) |
| Four role tracks with units, hours, capstone | Done (§4) |
| C0 rewrite with measurable, job-framed objectives | Done (§5): one verb each, 80% Apply or above |
| No invented policy limit, rate or formula | Done. Unit-economics, fund-metric and remittance needs are listed as owner gaps |
| Legal statements tagged and opened | Done for the five new cites (N2, N3, N5). The preliminary-agreements case in G2 is not opened and not cited |
| No files changed except this report | Done |

## What to look up yourself

1. Two or three working originators and fund analysts: have each mark T01-T31 for frequency and criticality. The founder tasks rest on thin evidence (N4 is secondary).
2. A BPL founder's view of T27-T31. Ask what they wish they had known in year one.
3. A deal-state case on the binding effect of a term sheet or commitment letter, before Track L unit L4 is written.
4. The full AAPL article on private-lender funding options, which did not load (N4).
5. Whether a non-bank BPL lender in each deal state has any SAR duty, before C07-O5 is reframed.

## How to check it

1. Count rows per module in §2 against `docs/assessment/outcomes.md` §3: 6, 7, 8, 6, 6, 8, 7, 6, 8, 8, 7, 6, 8, 7, 8 = 106.
2. Recompute §6.1: the revised column sums to 55.8; 55.8 × 50 ÷ 60 = 46.5 hours.
3. Search `exports/core-course.html` for "(Understand;" to see the metadata defect in §5.1.
4. Open N2, N3 and N5 on Cornell LII and confirm the quoted text.
5. Check that every task ID in §2 appears in the §1.2 chart.
