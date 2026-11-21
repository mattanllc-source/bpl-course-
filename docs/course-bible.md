# BPL Course Bible — Business-Purpose Real Estate Lending

Nov 18, 2026 · @aj

## Status and how to use this bible

This bible is **DRAFT v0.1**. It is the single source of truth for how every BPL training asset is scoped, structured, written and accepted. When this bible and any other course document disagree, this bible wins until a reviewer changes it.

**What this draft is built on.** The program Overview guide was not available. The policy, formula library, running deals and State Law Table now exist as tabs (19-20 Nov 2026). So:

- Section 3 (program structure) is a **proposal** for sign-off, not a copy of the Overview guide.
- Every policy limit appears as a placeholder, e.g. `[POLICY: max LTC]`. Since 19 Nov 2026 most are replaced by rule IDs from the Model Credit Policy tab; Section 8 lists the rest.
- Industry ranges are shown only as market context, labelled "market range", with a source.
- Legal and regulatory statements carry `[VERIFY]` with source and date.

**Decisions already confirmed (18 Nov 2026).** ID prefixes are CORE, RES, MF and COM. Learners are originators, underwriters and analysts, and closing, servicing and asset management staff. The bible lives as a shared doc.

**Working assumptions.** A1: "FF" in RES-FF-03 is the Fix-and-Flip topic code. A2: asset names follow `code-asset-vN`, e.g. `C3-lesson-v1`. A3: credit committee members take the program as reviewers, not learners.

## 1. Purpose and scope

BPL trains our people to originate, underwrite, close and manage business-purpose real estate loans to a common standard. A graduate can size a loan, defend it at credit committee and manage it to repayment.

**Program goals**

1. Every credit decision cites a policy rule ID and a formula ID.
2. Every learner can work our core formulas by hand and in the house calculator.
3. Every learner can tell a business-purpose loan from a consumer one and escalate doubt.
4. Every asset uses the same names, data rules and review steps.

**In scope: four product families**

| Family | Code | Collateral | Typical products | Primary sizing tests |
| --- | --- | --- | --- | --- |
| Core | C | All | Shared skills: credit, valuation, legal, closing, servicing | All below |
| Residential 1-4 | R | 1-4 unit non-owner-occupied homes, condos, townhomes | RTL: fix-and-flip, heavy rehab, ground-up; rental: DSCR single-asset and portfolio | RTL: LTC, LTARV, LTAIV. Rental: DSCR, LTV |
| Multifamily 5+ | M | 5+ unit apartments, incl. small-balance | Bridge, value-add, construction, stabilized term | DSCR, LTV, debt yield, LTC |
| Commercial | CM | Retail, office, industrial, mixed-use, self-storage, hospitality, special-purpose | Bridge, term, construction, owner-user excluded | DSCR, LTV, debt yield, tenant and lease risk |

**Out of scope**

- Consumer-purpose credit of any kind.
- Loans on property the borrower or a relative occupies, or will occupy, as a dwelling.
- Owner-occupied commercial (owner-user) loans. Confirmed out of scope, 18 Nov 2026.
- Agency (Fannie Mae, Freddie Mac), HUD/FHA and SBA programs, except as comparison.
- Securities trading, fund management and capital-markets execution, except as context in C14.

**The business-purpose test (taught in C1, used everywhere)**

Under Regulation Z, credit extended primarily for a business, commercial or agricultural purpose is exempt from TILA. Loans to non-natural persons (e.g. LLCs) are also exempt. Credit to acquire, improve or maintain non-owner-occupied rental property is deemed business purpose, regardless of unit count. A property is owner-occupied if the owner expects to live there more than 14 days in the coming year. \[VERIFY: 12 CFR 1026.3(a) and Official Interpretation 3(a)-4 and 3(a)-5, [CFPB](https://www.consumerfinance.gov/rules-policy/regulations/1026/3/), checked 18 Nov 2026\]

"Investment property" is not the same as "rental property" in Reg Z. A non-rental investment purpose must pass the general primary-purpose test. \[VERIFY: Official Interpretation 3(a)-3; [BankersOnline Q&A](https://bankersonline.com/qa/new-trid-disclosures-reg-z), checked 18 Nov 2026\]

Business purpose does not mean compliance-exempt. ECOA/Reg B, BSA/AML, OFAC, UDAAP-style state laws, usury and state licensing can still apply. \[VERIFY: [Hunton & Williams, "Beware of Business Purpose", Apr 2017](https://hunton.com/media/legal/30111_beware-business-purpose-regulatory-implications-investment-morta.pdf); 12 CFR 1002.2(g), [eCFR](https://www.ecfr.gov/current/title-12/chapter-X/part-1002), checked 18 Nov 2026\]

## 2. Learners and certificate paths

Every learner completes Core, then at least one family track for their desk. Roles differ in their on-the-job (OJT) tasks and capstone role, not in the modules they take. This keeps one shared vocabulary across the loan life cycle.

**Learner roles**

| Role | What they do on a deal | Entry level assumed | Required path | Capstone role |
| --- | --- | --- | --- | --- |
| Originator / sales | Sources borrowers, screens purpose, builds the term sheet, manages the borrower to close | Can read a closing statement; no formal credit training | BPL-CORE + one family certificate for their desk | Pitches the deal and term sheet; answers committee questions on sponsor and market |
| Underwriter / credit analyst | Spreads financials, sizes the loan, writes the credit memo, sets conditions | Spreadsheet skills; basic accounting | BPL-CORE + every family certificate they will underwrite | Writes and defends the credit memo |
| Closing, servicing and asset management | Clears conditions, funds, administers draws, monitors, handles extensions and defaults | Loan file and document handling | BPL-CORE + one family certificate for their portfolio | Runs the closing checklist, draw and default scenarios |

Credit committee members do not take the program as learners. They act as reviewers and capstone panelists. \[CONFIRM\]

**Certificates (proposed)**

| Certificate | Modules | Hours | Who needs it |
| --- | --- | --- | --- |
| BPL-CORE: Business-Purpose Lending Foundations | C0-C14 | 38 | All three roles |
| BPL-RES: Residential 1-4 Credit | BPL-CORE + R1-R6 | 38 + 20 = 58 | Residential desk (RTL and rental) |
| BPL-MF: Multifamily 5+ Credit | BPL-CORE + M1-M6 | 38 + 20 = 58 | Multifamily desk |
| BPL-CRE: Commercial Credit | BPL-CORE + CM1-CM6 | 38 + 20 = 58 | Commercial desk |

**Path rules (proposed, for sign-off)**

1. Core modules C0-C2 come first and in order. After that, a family module may start once its listed prerequisites pass.
2. A learner may not sign a credit memo, term sheet or closing checklist alone until the matching certificate is issued. (CORE-AUTH-01)
3. Target time to BPL-CORE: 90 days from start. Target to first family certificate: 150 days. \[CONFIRM\]
4. Certificates last 24 months. Renewal needs a refresher quiz and one live-file OJT review. \[CONFIRM\]
5. Experienced hires may test out of a module by passing its quiz and OJT task at the pass mark. They may not test out of C1, C7 or the capstone.

**Solo study mode (decided 18 Nov 2026)**

This course is being built and taken by one learner. The three roles stay, and the learner rotates through all of them on every deal.

1. **Originator:** screen the fictional borrower for business purpose, gather the file and draft the term sheet.
2. **Underwriter:** size the loan with the model policy, write the credit memo and decide approve, decline or restructure.
3. **Closing, servicing and asset management:** clear conditions, fund, run draws and extensions, and work a default scenario.

The roles hand work to each other through written outputs: term sheet, then credit memo, then closing checklist. That way each role checks the one before it.

- **OJT tasks** become role tasks on the running deals or on public material (a for-sale listing, a lender's public term sheet, public rent data). No live loan files are used.
- **Supervisor sign-off** becomes self-review against the module's model answer and rubric. The learner records a score and the gaps found.
- **Certificates** are personal milestones. Pass marks in Section 3 still apply.
- **Credit committee** is simulated: the learner writes the memo as underwriter, then critiques it from the committee's side using the CORE-AUTH-01 matrix.

## 3. Program structure (DRAFT proposal)

The program has 33 modules and 98 hours: Core 38 hours, then 20 hours per family track. **This structure is a proposal.** The Overview guide was not available. Replace titles, hours and pass marks with the guide's figures once supplied.

**Assessment and pass marks (proposed)**

| Assessment | Where | Pass mark | Retakes |
| --- | --- | --- | --- |
| Module quiz | Every module | 80%, and every item tagged "critical" correct | 2 retakes, new item set each time |
| Practice exercise | Every module | Completed with worked numbers; coach sign-off | Unlimited |
| OJT task | Every module | Supervisor rates "meets standard" on the module rubric | 1 redo |
| Family capstone | R6, M6, CM6 | 85% on the rubric, no critical credit error, panel sign-off | 1 retake after coaching |

A "critical credit error" is any of: a wrong sizing result that changes the loan amount or approver; a missed business-purpose or occupancy red flag; a breach of a policy limit without an approved exception; an approval outside authority; or a missed KYC or OFAC hit. The final outcome of the loan does not matter. (Confirmed 20 Nov 2026 with C14 and CORE-AUTH-04.)

**Core: C0-C14 (38 hours)**

| Code | Module | Hours | Prerequisite |
| --- | --- | --- | --- |
| C0 | Program orientation and the BPL market | 1 | None |
| C1 | Business purpose vs consumer: the purpose test and regulatory map | 2 | C0 |
| C2 | Credit fundamentals and the loan life cycle | 2 | C1 |
| C3 | Real estate finance math: interest, amortization, debt service | 3 | C2 |
| C4 | Property cash flow: from gross potential rent to NOI | 3 | C3 |
| C5 | Valuation: appraisals, cap rates, as-is, ARV and as-stabilized | 3 | C4 |
| C6 | Borrower, sponsor and guarantor analysis | 3 | C2 |
| C7 | KYC, BSA/AML, OFAC and fraud red flags | 2 | C1 |
| C8 | Loan structuring and sizing: leverage tests, reserves, pricing | 3 | C3, C5 |
| C9 | Loan documents, title, insurance and collateral | 3 | C2 |
| C10 | State law: licensing, usury, foreclosure and recourse | 2 | C1, C9 |
| C11 | Closing and funding | 2 | C9 |
| C12 | Servicing, draws and asset management | 3 | C11 |
| C13 | Default, workout, foreclosure and REO | 3 | C10, C12 |
| C14 | Credit memo, committee and portfolio context | 3 | C8, C6 |

**Residential 1-4: R1-R6 (20 hours)**

| Code | Module | Hours | Prerequisite |
| --- | --- | --- | --- |
| R1 | Residential BPL products: RTL and rental | 2 | BPL-CORE |
| R2 | RTL underwriting: purchase, rehab budget, LTC and LTARV | 4 | R1 |
| R3 | Rehab and ground-up: budgets, draws and inspections | 3 | R2 |
| R4 | DSCR rental underwriting: rent, PITIA and DSCR | 4 | R1 |
| R5 | Rental portfolios and short-term rentals | 3 | R4 |
| R6 | Residential capstone: from application to committee | 4 | R2-R5 |

**Multifamily 5+: M1-M6 (20 hours)**

| Code | Module | Hours | Prerequisite |
| --- | --- | --- | --- |
| M1 | Multifamily market, asset classes and submarkets | 2 | BPL-CORE |
| M2 | Rent roll and T-12 analysis | 4 | M1 |
| M3 | Multifamily sizing: DSCR, debt yield, LTV and the binding constraint | 4 | M2 |
| M4 | Value-add bridge: business plan, stabilization and extension tests | 3 | M3 |
| M5 | Construction and lease-up | 3 | M3 |
| M6 | Multifamily capstone | 4 | M2-M5 |

**Commercial: CM1-CM6 (20 hours)**

| Code | Module | Hours | Prerequisite |
| --- | --- | --- | --- |
| CM1 | CRE asset types and their risks | 2 | BPL-CORE |
| CM2 | Leases, tenants and rollover | 4 | CM1 |
| CM3 | CRE cash flow and valuation: TI, LC, reserves and NCF | 4 | CM2 |
| CM4 | CRE structuring: sizing, cash management and covenants | 3 | CM3 |
| CM5 | Specialty assets: hospitality, self-storage, mixed-use | 3 | CM3 |
| CM6 | Commercial capstone | 4 | CM2-CM5 |

**Running deals.** Each family uses one fictional deal from first module to capstone, so numbers carry forward. They live in the Running Deals tab (RD-RES-01, RD-MF-01, RD-COM-01). Section 6 glossary examples stay separate and are labelled "illustrative".

## 4. Learning design rules

Every module is 1-4 hours, has 3-6 measurable objectives, and ends with practice plus an on-the-job task. A module that breaks a rule below is not done.

**Rule LD-01: Objectives use one Bloom's verb each.** Write "By the end of \[code\], you will be able to \[verb\] \[object\] \[standard\]." One verb per objective. Never use "understand", "know", "learn", "be aware of" or "appreciate".

| Bloom's level | Use for | Approved verbs | BPL example |
| --- | --- | --- | --- |
| 1 Remember | Terms, thresholds, document names | list, define, identify, name | Identify the five documents in a standard RTL closing package |
| 2 Understand | Explaining why a rule exists | explain, classify, summarize, distinguish | Classify a loan as business or consumer purpose using the C1 test |
| 3 Apply | Running a formula or checklist | calculate, size, complete, prepare | Calculate DSCR (F-RES-07) for a single-family rental to two decimals |
| 4 Analyze | Reading a file for risk | analyze, compare, reconcile, diagnose | Reconcile a rent roll to the T-12 and flag three variances |
| 5 Evaluate | Making and defending a credit call | recommend, justify, critique, decide | Recommend approve, decline or restructure, citing rule IDs |
| 6 Create | Building a credit product | draft, structure, design | Structure a bridge loan with extension tests for a value-add deal |

**Rule LD-02: Level mix.** Core modules aim at levels 2-3. Family modules reach level 4. Capstones reach level 5 or 6. At least one objective per module is level 3 or above.

**Rule LD-03: Module length.** 1-4 hours of learner time, including practice and quiz. OJT time is extra. A topic needing more than 4 hours splits into two modules.

**Rule LD-04: Fixed module sequence.**

1. Hook: a 2-minute deal problem from the running deal.
2. Objectives, stated as in LD-01.
3. Teach: short chunks of 10-15 minutes, each tied to one objective.
4. Worked example: every formula worked with real numbers, step by step.
5. Practice: learner works a new case alone, then checks against a model answer.
6. Quiz: maps one or more items to every objective.
7. OJT task: a real or shadowed task on a live file, signed off by a supervisor.
8. Job aid: one page the learner keeps at their desk.

**Rule LD-05: Practice is mandatory.** Every module ends with practice that uses the module's formulas or checklists on a new case. The case differs from the worked example in at least two inputs.

**Rule LD-06: OJT is mandatory.** Every module ends with an OJT task. Each OJT task states the output, the live-file source, time allowed, the rubric and the sign-off role. Learners must strip borrower personal data from any OJT output that leaves the file. In solo study mode (Section 2), the live-file source is a running deal or public material, and the sign-off role is self-review.

**Rule LD-07: Alignment.** Each objective maps to teach content, practice, at least one quiz item and the OJT rubric. The module blueprint shows this as a matrix.

**Rule LD-08: Running deal.** Worked examples use the family's running deal. Practice uses a second fictional deal. Numbers must carry forward without contradiction between modules.

**Rule LD-09: Accessibility.** Captions and transcripts on all video. Alt text on every image and chart. Colour is never the only signal. Calculators work by keyboard alone.

## 5. Style guide, naming, data and ID rules

Every asset is written in plain US English, names itself `code-asset-vN`, uses only fictional data, and cites rule and formula IDs. Four placeholder tags mark anything not yet settled.

### 5.1 Writing style

- Sentences under 25 words. Paragraphs of three sentences or fewer.
- Second person, active voice: "You size the loan", not "The loan is sized".
- Define every acronym at first use in each asset, then use the acronym.
- Use the glossary term exactly. Say "LTARV", never "ARV LTV" or "LTV on ARV".
- One idea per bullet. Numbered lists only for steps in order.
- No idioms, sports metaphors or humour that depends on culture.

### 5.2 Numbers and units

| Item | Format | Example |
| --- | --- | --- |
| Money | US dollars, comma separators, no cents unless under $100 | $1,250,000 |
| Interest rate | Percent, three decimals | 10.250% |
| Leverage (LTV, LTC, LTARV) | Percent, one decimal | 72.5% |
| Coverage (DSCR) | Two decimals with "x" | 1.25x |
| Debt yield, cap rate | Percent, two decimals | 9.50% |
| Dates | Day, short month, year | 18 Nov 2026 |
| Area | Square feet, "sf" | 12,400 sf |

Keep full precision in working steps. Round only the final answer. Decided 19 Nov 2026: test results are compared to limits at full precision, never rounded or truncated first (Formula Library conventions).

**Worked formulas** always show four lines: formula ID and formula; inputs with sources; substitution; result with units and the policy test it feeds.

### 5.3 Asset naming: `code-asset-vN`

| Part | Allowed values | Notes |
| --- | --- | --- |
| code | C0-C14, R1-R6, M1-M6, CM1-CM6, or BPL for program-wide | Upper case, no spaces |
| asset | lesson, jobaid, quiz, scenario, ojt, script, deck, calc, xlsx, video | Lower case. Add a two-digit part number if a module has several: `video-02` |
| vN | v0 = draft; v1 = first approved; +1 for every published change | Never reuse a number. Never append "final" |

Examples: `C3-lesson-v1`, `R2-calc-v2`, `M3-video-02-v1`, `BPL-glossary-v1`.

### 5.4 Data rules

1. **All people, entities and properties are fictional.** Never use a real borrower, broker, sponsor or address.
2. Entities use a fictional name plus a real entity type: "Harborline Holdings LLC".
3. Property addresses use fictional street names in a real US state, so state-law content stays meaningful.
4. Phone numbers use 555-0100 to 555-0199. Emails use the example.com domain.
5. Deal numbers come only from the running deals file. Never change a running-deal input inside one asset.
6. Market rates and ranges are labelled "market range" with a source and date. They are context, never policy.
7. Policy limits come only from the credit policy, cited by rule ID. If missing, write `[POLICY: description]`.
8. OJT outputs from live files leave the file with personal data removed.

### 5.5 Placeholder tags

| Tag | Meaning | Who clears it |
| --- | --- | --- |
| `[VERIFY: …]` | A legal or regulatory statement that needs checking | Legal or compliance reviewer |
| `[POLICY: …]` | A threshold, limit or rule that must come from the credit policy | Chief Credit Officer delegate |
| `[CONFIRM: …]` | A program design choice awaiting sign-off | Program owner |
| `[DATA: …]` | A deal number missing from the running deals file | Instructional designer |

No asset with an open tag may move past v0.

### 5.6 The \[VERIFY\] convention

Every legal or regulatory statement carries a VERIFY tag in this form:

`[VERIFY: authority and section; source link or document; date checked]`

Example: `[VERIFY: 12 CFR 1026.3(a), Official Interpretation 3(a)-4; consumerfinance.gov; checked 18 Nov 2026]`

- Write legal content as "generally", "may" or "can". Never as a final legal conclusion.
- Prefer primary sources (statute, regulation, agency guidance) over law-firm or industry summaries.
- A VERIFY tag older than 6 months must be re-checked before any re-release. \[CONFIRM\]
- State-law statements also cite the State Law Table row, e.g. `SLT-CA-01`. Format SLT-XX-NN: -01 = 1-4 unit business purpose, -02 = commercial and 5+ multifamily, -03 = changes and sources.

### 5.7 Policy rule IDs: `FAMILY-TOPIC-NN`

FAMILY is CORE, RES, MF or COM. TOPIC is a 2-4 letter code below. NN is a two-digit number, never reused. Example: `RES-FF-03` is the third Residential fix-and-flip rule.

| Family | Topic codes (proposed) |
| --- | --- |
| CORE | BP business purpose · KYC know your customer and AML · BOR borrower and guarantor · VAL valuation · SZ sizing and structure · DOC documents and collateral · INS insurance · CLS closing · SVC servicing · DEF default and workout · AUTH approval authority · PRC pricing · CONC concentration · EXC exceptions |
| RES | FF fix-and-flip and RTL · GU ground-up construction · DRW draws · DSCR rental · PF rental portfolio · STR short-term rental · BR bridge with no rehab · LND land and lots · GEN rules for all residential loans |
| MF | RR rent roll · BR bridge and value-add · TRM stabilized term · CON construction · LU lease-up · SB stabilized bridge · DSCR small multifamily DSCR (5-10 units) · MEZ mezzanine and preferred equity · GEN rules for all multifamily loans |
| COM | LS leases and tenants · OFF office · RTL retail · IND industrial · HOS hospitality · SS self-storage · MX mixed-use · CM cash management · GEN rules for all commercial loans · BR commercial bridge · TRM term loans · DSCR small-balance commercial DSCR · NNN single-tenant net lease · CON construction · LND land |

Note: COM-RTL means commercial retail. Residential transition loans are RES-FF.

### 5.8 Formula IDs: `F-FAMILY-NN`

Example: `F-RES-07` is formula 7 in the Residential library. The IDs in Section 6 are **confirmed**: since 19 Nov 2026 every ID here matches an entry in the Formula Library tab (118 formulas, 354 test cases, after F-CORE-40 to -43 (C10, C11, C13, C14) and F-RES-25 (C12) were added as of 20 Nov 2026). The library governs if the two ever differ.

## 6. Glossary (150 terms)

The glossary holds 150 terms: 80 Core, 28 Residential, 21 Multifamily and 21 Commercial. Each formula term has a proposed formula ID and a worked example.

**Read this first.** All worked-example numbers are illustrative and fictional. Any limit shown in an example (e.g. a 1.25x minimum DSCR) is for arithmetic only, never policy. Formula IDs match the Formula Library (5.8). Interest accrues Actual/360 (decided 19 Nov 2026; see the Formula Library tab).

### 6.1 Core (C0-C14): 80 terms

| # | Term | Definition | Formula and worked example | First used |
| --- | --- | --- | --- | --- |
| 1 | Business-purpose loan | Credit extended primarily for a business, commercial or investment purpose, not personal, family or household use. Our whole program lends only on this basis. \[VERIFY: 12 CFR 1026.3(a); consumerfinance.gov; checked 18 Nov 2026\] | None | C1 |
| 2 | Consumer-purpose credit | Credit primarily for personal, family or household purposes. Out of scope; such loans trigger consumer lending laws and licensing. | None | C1 |
| 3 | Owner-occupied (Reg Z test) | Under Reg Z commentary, a property the owner expects to occupy for more than 14 days in the coming year. \[VERIFY: Official Interpretation 3(a)-4; checked 18 Nov 2026\] | None | C1 |
| 4 | Non-natural person | A borrower that is not an individual, such as an LLC, corporation, partnership or trust. Credit to non-natural persons is generally exempt from TILA. \[VERIFY: 12 CFR 1026.3(a)(2); checked 18 Nov 2026\] | None | C1 |
| 5 | Business-purpose certification | A signed borrower statement of loan purpose and non-occupancy. It supports, but does not prove, business purpose. | None | C1 |
| 6 | TILA / Regulation Z | Federal Truth in Lending law and rule on consumer credit disclosure. Business-purpose credit is generally exempt. \[VERIFY: 15 USC 1603; 12 CFR 1026.3(a); checked 18 Nov 2026\] | None | C1 |
| 7 | RESPA / Regulation X | Federal settlement-procedures law for consumer mortgage loans. Business-purpose credit is generally exempt. \[VERIFY: 12 CFR 1024.5(b)(2); checked 18 Nov 2026\] | None | C1 |
| 8 | ECOA / Regulation B | Federal fair-lending law. It applies to business credit as well as consumer credit. \[VERIFY: 12 CFR 1002.2(g); eCFR; checked 18 Nov 2026\] | None | C1 |
| 9 | Spousal signature rule | Reg B generally bars requiring a spouse's signature or guaranty when the applicant qualifies alone. It covers guarantors' spouses too. \[VERIFY: 12 CFR 1002.7(d); FDIC FIL-9-2002; checked 18 Nov 2026\] | None | C6 |
| 10 | Mortgage licensing (state) | Some states require a lender or broker license even for business-purpose loans, often on 1-4 unit collateral. \[VERIFY: State Law Table, licence columns (CA requires one; OH, NC, IN none found for business purpose); checked 20 Nov 2026\] | None | C10 |
| 11 | Usury | A state-law cap on interest and charges. Rules for business and entity borrowers vary by state. \[VERIFY: State Law Table, usury column; checked 20 Nov 2026\] | None | C10 |
| 12 | Bridge loan | A short-term, usually interest-only loan that carries a property to a sale, refinance or stabilization. | None | C0 |
| 13 | Credit box | The set of policy limits and eligibility rules a loan must fit, by product. | None | C2 |
| 14 | Five Cs of credit | Character, capacity, capital, collateral and conditions: the frame for every credit decision. | None | C2 |
| 15 | Risk rating | A grade assigned to a loan for its probability and severity of loss. Scale 1 Pass, 2 Pass/Watch, 3 Special mention, 4 Substandard, 5 Doubtful/Loss (CORE-SVC-07, set 20 Nov 2026). | None | C2 |
| 16 | Term sheet | A non-binding summary of proposed loan amount, rate, fees, term and conditions. | None | C2 |
| 17 | Recourse | The lender's right to pursue the borrower or guarantor personally beyond the collateral. | None | C2 |
| 18 | Non-recourse carve-outs | Acts, such as fraud or unpermitted transfer, that make a non-recourse loan recourse. Also called "bad-boy" carve-outs. | None | C9 |
| 19 | Personal guaranty | A person's promise to pay the loan if the borrower does not. | None | C6 |
| 20 | Interest-only payment | The monthly payment when no principal is repaid. | F-CORE-01: Balance × rate ÷ 360 × actual days. $500,000 × 10.000% ÷ 360 × 30 = $4,166.67 for a 30-day month; a 31-day month is $4,305.56. | C3 |
| 21 | Amortizing payment | A level monthly payment that repays principal and interest over the term. | F-CORE-02: P × r ÷ (1 − (1 + r)^−n), r = rate ÷ 12. $500,000, 7.000%, 360 months: r = 0.0058333. Payment = $3,326.51. | C3 |
| 22 | Annual debt service (ADS) | Total scheduled loan payments in one year. | F-CORE-03: Monthly payment × 12. $3,326.51 × 12 = $39,918.12. | C3 |
| 23 | Loan constant | Annual debt service as a share of loan amount. | F-CORE-04: ADS ÷ loan. $39,918.12 ÷ $500,000 = 0.079836 (6 decimals; sizing uses the unrounded value). | C3 |
| 24 | Per diem interest | One day's interest, used at closing and payoff. | F-CORE-05: Loan × rate ÷ 360. $500,000 × 10.000% ÷ 360 = $138.89 per day. | C3 |
| 25 | Origination points | An upfront fee stated as a percent of the loan. One point = 1%. | F-CORE-06: Loan × points. $500,000 × 2.00% = $10,000. | C8 |
| 26 | Prepayment penalty | A charge for repaying early, e.g. a step-down or minimum interest. Some states limit them. \[VERIFY: State Law Table, prepayment column; checked 20 Nov 2026\] | None | C8 |
| 27 | Gross potential rent (GPR) | Rent if every unit leased at market rent all year. | F-CORE-07: Units × monthly rent × 12. 10 × $1,500 × 12 = $180,000. | C4 |
| 28 | Vacancy and credit loss | Rent lost to empty units and non-payment. | F-CORE-08: GPR × vacancy rate. $180,000 × 5.0% = $9,000. | C4 |
| 29 | Effective gross income (EGI) | Income actually expected after vacancy, plus other income. | F-CORE-09: GPR − vacancy + other income. $180,000 − $9,000 + $6,000 = $177,000. | C4 |
| 30 | Operating expenses (OpEx) | Recurring costs to run the property: taxes, insurance, utilities, repairs, management. Excludes debt service and capital items. | None | C4 |
| 31 | Net operating income (NOI) | Income left after operating expenses, before debt service. | F-CORE-10: EGI − OpEx. $177,000 − $72,000 = $105,000. | C4 |
| 32 | T-12 | The trailing twelve months of actual income and expenses. | None | C4 |
| 33 | Pro forma | A projected operating statement based on the sponsor's plan. Never sized on alone: day-one loans size on in-place income, and pro forma is tested only at exit (MF-BR-08, F-COM-10). | None | C4 |
| 34 | Debt service coverage ratio (DSCR) | How many times NOI covers annual debt service. | F-CORE-11: NOI ÷ ADS. $105,000 ÷ $84,000 = 1.25x. | C4 |
| 35 | Break-even occupancy | Occupancy needed to pay operating costs and debt service. | F-CORE-12: (OpEx + ADS) ÷ GPR. ($72,000 + $84,000) ÷ $180,000 = 86.7%. | C4 |
| 36 | Appraisal | A licensed appraiser's opinion of value for a stated date and premise. | None | C5 |
| 37 | Sales comparison approach | Value from adjusted prices of similar recent sales. | None | C5 |
| 38 | Income approach | Value from the property's income, by direct capitalization or discounted cash flow. | None | C5 |
| 39 | Capitalization (cap) rate | NOI as a share of value; also used to turn NOI into value. | F-CORE-13: NOI ÷ value. $105,000 ÷ $1,500,000 = 7.00%. Rearranged: $105,000 ÷ 7.00% = $1,500,000. | C5 |
| 40 | As-is value | Market value in the property's current condition on the valuation date. | None | C5 |
| 41 | As-stabilized value | Projected value once the business plan is done and occupancy is stable. | None | C5 |
| 42 | Loan-to-value (LTV) | Loan amount as a share of property value. | F-CORE-14: Loan ÷ value. $1,050,000 ÷ $1,500,000 = 70.0%. | C8 |
| 43 | Loan-to-cost (LTC) | Loan amount as a share of total project cost. | F-CORE-15: Loan ÷ total cost. $1,200,000 ÷ $1,600,000 = 75.0%. | C8 |
| 44 | Debt yield | NOI as a share of the loan; independent of rate and amortization. | F-CORE-16: NOI ÷ loan. $105,000 ÷ $1,050,000 = 10.00%. | C8 |
| 45 | Max loan by DSCR | Largest loan whose debt service meets the minimum DSCR. | F-CORE-17: NOI ÷ min DSCR ÷ loan constant. $105,000 ÷ 1.25 ÷ 8.00% = $1,050,000. | C8 |
| 46 | Max loan by debt yield | Largest loan that meets the minimum debt yield. | F-CORE-18: NOI ÷ min debt yield. $105,000 ÷ 10.50% = $1,000,000. | C8 |
| 47 | Binding constraint | The sizing test that gives the smallest loan; it sets the loan amount. | F-CORE-19: Min of all test results. Min($1,125,000 LTV; $1,050,000 DSCR; $1,000,000 debt yield) = $1,000,000. Debt yield binds. | C8 |
| 48 | Interest reserve | Loan proceeds set aside to pay interest for a set period. | F-CORE-20: Balance × rate ÷ 360 × days. $500,000 × 10.000% ÷ 360 × 180 = $25,000.00. | C8 |
| 49 | Sponsor | The person or team who controls the borrower and runs the business plan. | None | C6 |
| 50 | Liquidity | Cash and near-cash a borrower or guarantor can reach quickly. | F-CORE-21: Liquid assets ÷ monthly payment = months of reserves. $60,000 ÷ $5,000 = 12.0 months. | C6 |
| 51 | Net worth | Total assets minus total liabilities. Guarantor minimum: CORE-BOR-14 (F-CORE-26). | None | C6 |
| 52 | Beneficial owner | An individual who owns or controls the borrowing entity. FinCEN's CDD rule uses a 25% ownership prong plus one control person. We use 20% by policy (CORE-KYC-02). \[VERIFY: 31 CFR 1010.230 is written for banks and other covered institutions; C6 and C7; checked 20 Nov 2026\] | None | C7 |
| 53 | OFAC screening | Checking every party against US sanctions lists before any deal. \[VERIFY: 31 CFR Part 501; treasury.gov\] | None | C7 |
| 54 | Straw buyer | A person who fronts a deal for someone hidden. A key fraud red flag. | None | C7 |
| 55 | Occupancy fraud | Claiming a property is non-owner-occupied when the borrower lives there. It can convert a loan to consumer credit. | None | C7 |
| 56 | FinCEN Real Estate Report | A report due on certain non-financed transfers of residential property to entities or trusts. It took effect 1 Mar 2026, but a federal court vacated it nationwide on 19 Mar 2026 (C7). Before that, private lender financing could still count as "non-financed". \[VERIFY: 31 CFR 1031.320; Gibson Dunn, 1 Apr 2026; checked 20 Nov 2026\] | None | C7 |
| 57 | Promissory note | The borrower's written promise to repay, stating amount, rate and terms. | None | C9 |
| 58 | Mortgage / deed of trust | The security instrument that pledges real property for the note. Type depends on state. \[VERIFY: State Law Table, foreclosure column; checked 20 Nov 2026\] | None | C9 |
| 59 | Assignment of leases and rents (ALR) | Gives the lender rights to property rents, usually on default. | None | C9 |
| 60 | UCC financing statement | A public filing that perfects a lien on personal property or entity interests. | None | C9 |
| 61 | Lender's title policy | Insurance that protects the lender's lien priority against title defects. | None | C9 |
| 62 | Hazard insurance | Property cover against fire, wind and other perils, naming the lender as mortgagee. Minimums: CORE-INS-01, RES-GEN-08, MF-GEN-10, COM-GEN-16 (C9). | None | C9 |
| 63 | Flood insurance | Cover for flood loss. Federally regulated lenders must require it in special flood hazard areas. It does not bind non-bank lenders directly; see C9. \[VERIFY: 42 USC 4012a(b); checked 20 Nov 2026\] | None | C9 |
| 64 | Covenant | A borrower promise in the loan documents, such as a minimum DSCR or reporting duty. | None | C9 |
| 65 | Closing conditions | Items that must be met before funding, such as title, insurance and entity documents. | None | C11 |
| 66 | Settlement statement | The itemized list of every dollar paid and received at closing. | None | C11 |
| 67 | Wire fraud verification | Confirming wire instructions by a known, independent phone number before sending funds. | None | C11 |
| 68 | Escrow / impounds | Monthly collections held to pay taxes and insurance. | None | C12 |
| 69 | Extension option | A borrower right to extend maturity if stated tests are met, usually for a fee. | F-CORE-22: Commitment × extension fee (CORE-SVC-02). $500,000 × 0.50% = $2,500. | C12 |
| 70 | Event of default | A breach that lets the lender use its remedies, such as non-payment or unpermitted transfer. | None | C13 |
| 71 | Forbearance | A lender's agreement not to enforce remedies for a set time, on conditions. | None | C13 |
| 72 | Judicial foreclosure | Foreclosure through a court case. Used in Ohio and Indiana, for example. \[VERIFY: State Law Table SLT-OH-01, SLT-IN-01; checked 20 Nov 2026\] | None | C10 |
| 73 | Non-judicial foreclosure | Foreclosure by power of sale without court, where state law allows, e.g. California and North Carolina. \[VERIFY: State Law Table SLT-CA-01, SLT-NC-01; checked 20 Nov 2026\] | None | C10 |
| 74 | Deed in lieu | The borrower deeds the property to the lender to settle the debt. | None | C13 |
| 75 | REO (real estate owned) | Property the lender owns after foreclosure or deed in lieu. | None | C13 |
| 76 | Loss severity | Loss as a share of the loan balance at default. | F-CORE-23: (Balance + costs − net proceeds) ÷ balance. ($500,000 + $40,000 − $430,000) ÷ $500,000 = 22.0%. | C13 |
| 77 | Credit memo | The written case for a loan: deal, sizing, risks, mitigants and recommendation, citing rule IDs. | None | C14 |
| 78 | Credit committee | The body that approves loans above delegated authority. Matrix: CORE-AUTH-01. | None | C14 |
| 79 | Policy exception | Approval of a loan outside a policy limit, with stated mitigants and approver. | None | C14 |
| 80 | Concentration limit | A cap on exposure to one borrower, market, product or property type. Limits: CORE-CONC-01, -02. | None | C14 |

*Added from the Model Credit Policy tab (19 Nov 2026), with worked examples there:* F-CORE-24 adjusted liquid assets · F-CORE-25 required post-closing liquidity · F-CORE-26 adjusted net worth · F-CORE-27 experience count and tier · F-CORE-28 note rate · F-CORE-29 aggregate sponsor exposure · F-CORE-30 bucket concentration.

### 6.2 Residential 1-4 (R1-R6): 28 terms

RTL examples use one illustrative flip: purchase $300,000, rehab $100,000, closing costs $9,000, as-is value $310,000, ARV $520,000. The loan is $340,000 at 11.000% interest-only for 6 months, with 2.00 points. Selling costs are 6.0% of ARV. Rental examples use a $200,000 DSCR loan at 7.000% over 30 years.

| # | Term | Definition | Formula and worked example | First used |
| --- | --- | --- | --- | --- |
| 81 | Residential transition loan (RTL) | A short-term business-purpose loan to buy, renovate or build a 1-4 unit home, then sell or refinance. Includes fix-and-flip. | None | R1 |
| 82 | Ground-up construction loan | An RTL that funds land plus new construction of a 1-4 unit home, released in draws. | None | R1 |
| 83 | DSCR loan | A long-term rental loan sized on the property's rent, not the borrower's personal income. | None | R1 |
| 84 | Total project cost | Purchase price plus rehab budget. Closing costs are excluded (F-RES-01). | F-RES-01: Purchase + rehab. $300,000 + $100,000 = $400,000. | R2 |
| 85 | Rehab budget | The line-item scope of work, cost and timeline for renovation. | None | R2 |
| 86 | After-repair value (ARV) | Appraised value once the planned rehab is complete. | None | R2 |
| 87 | Loan-to-ARV (LTARV) | Total loan commitment as a share of ARV. | F-RES-02: Total loan ÷ ARV. $340,000 ÷ $520,000 = 65.4%. | R2 |
| 88 | Loan-to-as-is value (LTAIV) | Initial advance as a share of as-is value. | F-RES-03: Initial advance ÷ as-is value. $240,000 ÷ $300,000 (the price, lower than the $310,000 appraisal) = 80.0%. | R2 |
| 89 | RTL loan-to-cost | Total loan commitment as a share of total project cost. | F-RES-04: (Initial advance + rehab holdback) ÷ total project cost. ($240,000 + $100,000) ÷ $400,000 = 85.0%. | R2 |
| 90 | Initial advance | Loan funded at closing toward the purchase price. | F-RES-05: Purchase × advance rate. $300,000 × 80.0% = $240,000. | R2 |
| 91 | Rehab holdback | Loan funds held back at closing and released in draws as work is done. | None | R3 |
| 92 | Draw request | A borrower request to release holdback funds, supported by an inspection of work in place. | None | R3 |
| 93 | Percent complete | Share of the rehab budget verified as done. | F-RES-06: Verified work in place ÷ rehab budget. $60,000 ÷ $100,000 = 60.0%. | R3 |
| 94 | Rental DSCR | Monthly rent divided by monthly PITIA. Uses gross rent, unlike F-CORE-11, which uses NOI. | F-RES-07: Monthly rent ÷ PITIA. $2,300 ÷ $1,800.60 = 1.28x. | R4 |
| 95 | PITIA | Monthly principal, interest, taxes, insurance and association dues. | F-RES-08: P&I + taxes + insurance + HOA. $1,330.60 + $300 + $120 + $50 = $1,800.60. | R4 |
| 96 | Cash to close | Money the borrower must bring to closing. | F-RES-09: Purchase + closing costs + points − initial advance. $300,000 + $9,000 + $6,800 − $240,000 = $75,800. | R2 |
| 97 | Projected flip profit | Expected borrower profit after sale and all costs. | F-RES-10: ARV − selling costs − purchase − rehab − closing − points − interest. $520,000 − $31,200 − $300,000 − $100,000 − $9,000 − $6,800 − $18,700 = $54,300. | R2 |
| 98 | Market rent schedule | The appraiser's estimate of market rent from comparable rentals. | None | R4 |
| 99 | Short-term rental (STR) | A home rented by the night or week. Income is seasonal and harder to verify. Rules: RES-STR-01 to -05. | None | R5 |
| 100 | Rental portfolio loan | One loan secured by several rental properties, often called a blanket loan. | None | R5 |
| 101 | Partial release price | The payoff needed to release one property from a blanket lien. | F-RES-11: Allocated loan × release premium. $150,000 × 115% = $172,500. | R5 |
| 102 | Cash-out refinance | A new loan larger than the payoff, with the difference paid to the borrower. | F-RES-12: New loan − payoff − closing costs. $260,000 − $200,000 − $7,000 = $53,000. | R4 |
| 103 | BRRRR | Buy, rehab, rent, refinance, repeat: an RTL exits into a DSCR loan. | None | R6 |
| 104 | Experience tier | A borrower grade based on completed similar projects. It drives allowed leverage. Tiers: CORE-BOR-15, -16 (36-month lookback). | None | R2 |
| 105 | Broker price opinion (BPO) | A broker's estimate of value; not an appraisal. | None | R2 |
| 106 | Automated valuation model (AVM) | A computer-generated value estimate from data. Used for screening, not sizing (CORE-VAL-03, RES-GEN-06). | None | R4 |
| 107 | Seasoning | Time since the borrower acquired the property. It decides whether value or cost basis is used (RES-DSCR-05). | None | R4 |
| 108 | Exit strategy | How the loan will be repaid: sale, refinance or both. Underwrite each exit. | None | R2 |

*Added from the Model Credit Policy tab (19 Nov 2026):* F-RES-13 fix-and-flip maximum loan · F-RES-14 portfolio DSCR · F-RES-15 STR qualifying monthly rent · F-RES-16 ground-up interest reserve (60% average balance) · F-RES-17 max loan by DSCR.

### 6.3 Multifamily 5+ (M1-M6): 21 terms

Examples use one illustrative 50-unit property: market rent $1,300 per unit per month, GPR $780,000, collections $702,000, other income $18,000, EGI $720,000, OpEx $310,000.

| # | Term | Definition | Formula and worked example | First used |
| --- | --- | --- | --- | --- |
| 109 | Multifamily (5+) | A residential building or complex with five or more units, underwritten as commercial real estate. | None | M1 |
| 110 | Property class (A, B, C) | An informal grade of age, quality and location. Class A is newest and best located. | None | M1 |
| 111 | Rent roll | A unit-by-unit list of tenants, lease dates, rents and balances owed, as of one date. | None | M2 |
| 112 | Physical occupancy | Share of units with a tenant in place. | F-MF-01: Occupied units ÷ total units. 46 ÷ 50 = 92.0%. | M2 |
| 113 | Economic occupancy | Share of GPR actually collected. | F-MF-02: Rent collected ÷ GPR. $702,000 ÷ $780,000 = 90.0%. | M2 |
| 114 | Loss-to-lease | Gap between market rent and in-place lease rent, as a share of market. | F-MF-03: (Market GPR − in-place rent) ÷ market GPR. ($780,000 − $741,000) ÷ $780,000 = 5.0%. | M2 |
| 115 | Concessions | Free rent or discounts given to sign leases. They reduce effective rent. | None | M2 |
| 116 | RUBS | Ratio utility billing system: charging tenants a share of utility costs. Counts as other income. | None | M2 |
| 117 | Expense ratio | Operating expenses as a share of EGI. | F-MF-04: OpEx ÷ EGI. $310,000 ÷ $720,000 = 43.1%. | M2 |
| 118 | Expense per unit | Annual operating expenses per apartment unit. | F-MF-05: OpEx ÷ units. $310,000 ÷ 50 = $6,200. | M2 |
| 119 | Replacement reserves | An annual allowance for roofs, HVAC and other capital items, deducted in underwriting. | F-MF-06: Units × reserve per unit. 50 × $300 = $15,000. Policy: 300 dollars per unit (MF-GEN-06, MF-BR-13). | M3 |
| 120 | Loan per unit | Loan amount divided by unit count; a quick leverage check. | F-MF-07: Loan ÷ units. $6,000,000 ÷ 50 = $120,000. | M3 |
| 121 | Value-add business plan | The sponsor's plan to raise NOI through renovation, re-leasing or better management. | None | M4 |
| 122 | Return on cost | Stabilized NOI as a share of all-in cost; tests whether the plan creates value. | F-MF-08: Stabilized NOI ÷ total cost. $520,000 ÷ $8,000,000 = 6.50%. | M4 |
| 123 | Future funding | Loan proceeds committed for capex or leasing, released after closing. | None | M4 |
| 124 | Extension test | DSCR, debt yield or LTV hurdles the loan must pass to extend maturity (MF-BR-11, COM-BR-02). | None | M4 |
| 125 | Interest rate cap | A purchased contract that limits a floating rate's exposure above a strike rate. | None | M4 |
| 126 | SOFR | Secured Overnight Financing Rate, the main US floating-rate index. \[VERIFY: published by the New York Fed; checked 18 Nov 2026\] | None | M4 |
| 127 | Completion guaranty | A guarantor's promise to finish construction and pay overruns. | None | M5 |
| 128 | Hard and soft costs | Hard costs build the asset (labour, materials). Soft costs support it (design, permits, fees, interest). | None | M5 |
| 129 | Lease-up | The period after completion when units are leased to reach stabilization. | None | M5 |

*Added from the Model Credit Policy tab (19 Nov 2026):* F-MF-09 net cash flow · F-MF-10 multifamily DSCR (amortizing) · F-MF-11 debt yield on NCF · F-MF-12 in-place interest coverage · F-MF-13 value-add bridge maximum loan · F-MF-14 term loan maximum · F-MF-15 construction interest reserve · F-MF-16 combined leverage.

### 6.4 Commercial (CM1-CM6): 21 terms

Lease examples use one illustrative three-tenant building of 50,000 sf. Tenant A pays $300,000 with 6 years left; B pays $100,000 with 2 years; C pays $100,000 with 4 years.

| # | Term | Definition | Formula and worked example | First used |
| --- | --- | --- | --- | --- |
| 130 | Commercial real estate (CRE) | Income property other than 1-4 unit homes: retail, office, industrial, hospitality, self-storage and mixed-use. | None | CM1 |
| 131 | Triple-net (NNN) lease | A lease where the tenant pays rent plus its share of taxes, insurance and maintenance. | None | CM2 |
| 132 | Gross / modified gross lease | A lease where the landlord pays all (gross) or some (modified gross) operating costs. | None | CM2 |
| 133 | Lease abstract | A one-page summary of a lease's key terms: rent, term, options, rights and obligations. | None | CM2 |
| 134 | Estoppel certificate | A tenant's signed confirmation of lease terms and that no defaults exist. | None | CM2 |
| 135 | SNDA | Subordination, non-disturbance and attornment agreement: sets lease priority versus the mortgage. | None | CM2 |
| 136 | Tenant credit | A tenant's ability to pay rent through the lease term, judged on financials or rating. | None | CM2 |
| 137 | WALT | Weighted average lease term: remaining lease term weighted by rent. | F-COM-01: Σ(years left × rent) ÷ total rent. (6 × $300,000 + 2 × $100,000 + 4 × $100,000) ÷ $500,000 = 4.8 years. | CM2 |
| 138 | Rollover risk | Share of rent from leases ending in a stated period. | F-COM-02: Rent expiring in period ÷ total rent. Next 24 months: $100,000 ÷ $500,000 = 20.0%. | CM2 |
| 139 | TI and LC | Tenant improvements and leasing commissions: costs to sign or renew tenants. | None | CM3 |
| 140 | Net cash flow (NCF) | NOI after TI, LC and capital reserves; the CRE sizing base. | F-COM-03: NOI − TI/LC reserve − replacement reserve. $420,000 − $25,000 − $10,000 = $385,000. | CM3 |
| 141 | Average daily rate (ADR) | Hotel room revenue per occupied room night. | F-COM-04: Room revenue ÷ rooms sold. $2,920,000 ÷ 20,000 = $146.00. | CM5 |
| 142 | RevPAR | Revenue per available room. Equals ADR × occupancy. | F-COM-05: Room revenue ÷ available room nights. $2,920,000 ÷ (100 rooms × 365) = $80.00. | CM5 |
| 143 | Loan per square foot | Loan amount divided by rentable area. | F-COM-06: Loan ÷ rentable sf. $5,000,000 ÷ 50,000 sf = $100.00 per sf. | CM4 |
| 144 | Occupancy cost ratio | A retail tenant's rent and charges as a share of its sales. | F-COM-07: (Rent + CAM) ÷ tenant sales. ($75,000 + $15,000) ÷ $1,000,000 = 9.0%. | CM5 |
| 145 | Lockbox | An account that receives tenant rents directly, controlled by the lender. Hard or springing. | None | CM4 |
| 146 | Cash sweep | Trapping excess cash flow when a trigger, such as low DSCR, is hit. Triggers: COM-GEN-12. | None | CM4 |
| 147 | Yield maintenance | A prepayment charge that gives the lender the yield it would have earned. | None | CM4 |
| 148 | Defeasance | Replacing the loan's collateral with government securities instead of prepaying. | None | CM4 |
| 149 | CMBS | Commercial mortgage-backed securities: CRE loans pooled and sold as bonds. A common take-out for our bridge loans. | None | CM4 |
| 150 | Single-purpose entity (SPE) | A borrower entity that owns only the collateral, with separateness covenants to limit outside risk. | None | CM4 |

*Added from the Model Credit Policy tab (19 Nov 2026):* F-COM-08 three-test loan sizing · F-COM-09 rollover-stressed NCF · F-COM-10 bridge exit test (7.75% take-out) · F-COM-11 small-balance commercial DSCR · F-COM-12 dark-value coverage · F-COM-13 lease-term cushion · F-COM-14 construction sizing with interest reserve.

## 7. Definition of done

An asset is done when it meets every common check below, every check for its type, and has named sign-off. Done means version v1 or higher; anything less stays v0.

**Common checks (every asset)**

- [ ] Named `code-asset-vN` per 5.3, with a change log line for this version.
- [ ] No open `[VERIFY]`, `[POLICY]`, `[CONFIRM]` or `[DATA]` tags.
- [ ] Every threshold cites a policy rule ID; every calculation cites a formula ID.
- [ ] Every formula worked with real numbers in four lines (5.2), and re-checked by a second person.
- [ ] Deal numbers match the running deals file exactly.
- [ ] All people, entities and properties fictional (5.4).
- [ ] Plain English: sentences under 25 words; glossary terms used exactly.
- [ ] Accessibility checks in LD-09 passed.

**Type-specific checks and sign-off**

| Asset | Must contain | Done when | Sign-off |
| --- | --- | --- | --- |
| Lesson (`lesson`) | Hook, Bloom's objectives, teach chunks, worked example, practice, links to quiz, OJT and job aid | Follows LD-04 order; alignment matrix (LD-07) complete; fits the module's hours | Instructional designer + subject expert (credit) |
| Job aid (`jobaid`) | One page: steps or checklist, formulas with IDs, rule IDs, one worked mini-example | Fits one printed page; a new hire completes the task with it in a test run | Subject expert + one target learner |
| Quiz (`quiz`) | 10-20 items; at least one per objective; "critical" items flagged; answer key with rationale citing rule or formula IDs | Two equivalent item sets exist for retakes; no item answerable without the module; pass mark stated | Instructional designer + credit reviewer |
| Scenario (`scenario`) | Fictional deal pack, task brief, model answer, scoring rubric, common wrong answers | Two reviewers score a sample answer within 5 points of each other | Credit reviewer + capstone panel lead (for R6, M6, CM6) |
| OJT task (`ojt`) | Output, live-file source, time allowed, rubric, sign-off role, data-removal instruction | Piloted with one learner and one supervisor; rubric used without questions | Learner's supervisor + program owner |
| Script (`script`) | Spoken text, on-screen text, visuals cues, timing per segment | Read aloud within 10% of target time; matches lesson content word for word on numbers | Instructional designer + subject expert |
| Deck (`deck`) | Title, objectives, one idea per slide, worked examples, speaker notes, source and VERIFY notes | No slide carries an unsourced number; notes let a substitute deliver it | Instructional designer + facilitator |
| Calculator (`calc`) | Inputs, outputs, formula IDs on screen, policy-limit flags, help text | Matches hand-worked results to the cent on 5 test cases, incl. edge cases; works by keyboard alone | Subject expert + second-person tester |
| Excel model (`xlsx`) | Input, calculation and output tabs; named ranges; formula ID beside each calculation; locked formulas; version tab | No hard-coded numbers in formulas; zero errors; ties to the calculator and hand results on 5 test cases | Credit analyst reviewer + model reviewer |
| Video (`video`) | Approved script, captions, transcript, chapter marks | Under 10 minutes per file; captions checked by a person; audio clear; numbers on screen match the script | Instructional designer + subject expert |

**Release.** The program owner publishes an asset only when all its sign-offs are recorded. In solo study mode, every sign-off is a self-review against the checklist, recorded with a date. Any change to a policy rule, formula or VERIFY source reopens every asset that cites it.

## 8. Self-check, manual gaps and reviewers

**Self-check against the request**

| Request item | Status |
| --- | --- |
| 1. Purpose and scope across RTL, rental, 5+ and commercial; consumer and owner-occupied out | Done (Section 1). Owner-user CRE confirmed out of scope |
| 2. Learners and certificate paths | Done for the three confirmed roles (Section 2) |
| 3. Structure "exactly as in the Overview" | **Not met as asked.** Guide not supplied; a proposal is given instead, per your instruction |
| 4. Learning design rules | Done (Section 4, LD-01 to LD-09) |
| 5. Style, naming, data, VERIFY, ID formats | Done (Section 5) |
| 6. Glossary of 150 terms with formula and first module | Done: 150 terms; 50 with worked formulas. Formula IDs and first-module codes are proposed |
| 7. Definition of done for 10 asset types | Done (Section 7) |
| Worked numbers | All 50 examples recomputed in code on 18 Nov 2026 |

**MANUAL GAPS you must fill**

- [ ] Program Overview guide: real module titles, hours, certificates and pass marks (replaces Section 3).
- [ ] Credit policy: every `[POLICY]` tag, including day-count, rounding, leverage limits, DSCR minimums, experience tiers, STR rules and authority matrix. Mostly done 19-20 Nov 2026 (Model Credit Policy tab). Risk rating scale set by CORE-SVC-07 (20 Nov 2026). Done 20 Nov 2026: the critical-credit-error definition (Section 3).
- [x] Formula library: reconcile all proposed F-CORE, F-RES, F-MF and F-COM IDs. Done: Formula Library tab.
- [x] State law table: row ID format and content for licensing, usury, prepayment and foreclosure.

  Done 20 Nov 2026 for OH, NC, IN and CA. Add a state before using a deal located there.
- [x] Running deals file: one deal per family to replace the illustrative numbers. Done: Running Deals tab.
- [ ] Decisions marked `[CONFIRM]`: committee role, time-to-certificate targets, certificate life, VERIFY re-check cycle.
- [x] Whether FinCEN CDD beneficial-ownership rules and federal flood requirements bind us as a lender type. Answered in C7 and C9: neither binds a non-bank lender directly; we follow CDD by policy (CORE-KYC-02).

**Suggested reviewers**

| Sections | Reviewer |
| --- | --- |
| 1, 6 (legal terms), all `[VERIFY]` tags | Compliance counsel, or outside counsel for state law |
| 3, 6 (formulas), 7 | Chief Credit Officer or delegate |
| 2, 4, 5, 7 | Head of learning or program owner |
| 6 (RES, MF, COM) | One senior underwriter per desk |

**Sources checked 18 Nov 2026**

- [12 CFR 1026.3, Official Interpretation](https://www.consumerfinance.gov/rules-policy/regulations/1026/3/) (CFPB)
- [12 CFR Part 1002 (Regulation B)](https://www.ecfr.gov/current/title-12/chapter-X/part-1002) (eCFR)
- [FDIC FIL-9-2002, spousal signatures](https://www.fdic.gov/news/inactive-financial-institution-letters/2002/fil0209a.html)
- [Hunton & Williams, Beware of Business Purpose (Apr 2017)](https://hunton.com/media/legal/30111_beware-business-purpose-regulatory-implications-investment-morta.pdf)
- [BankersOnline: Reg Z and rental property](https://bankersonline.com/qa/does-reg-z-apply-rental-property-loans)
- [Eversheds Sutherland: FinCEN Real Estate Rule in effect (Mar 2026)](https://www.jdsupra.com/legalnews/fincen-real-estate-rule-goes-into-effect-8265062/)
- [Roetzel: FinCEN residential rule (Feb 2026)](https://www.ralaw.com/media/insights/alert/fincen_finalizes_nationwide_residential_real_estate_reporting_rule_effective_march_1_2026)
- [AAPL: mortgage lender licensing for business-purpose loans](https://aaplonline.com/articles/compliance/mortgage-lender-licensingwhat-you-need-to-know/)
- [RCN Capital: fix-and-flip structure (market context)](https://rcncapital.com/blog/fix-and-flip-loans-for-brokers-how-to-structure-deals-right)
- [Altus Group: debt yield (Aug 2026)](https://altusgroup.com/insights/how-to-calculate-debt-yield-in-cre)
