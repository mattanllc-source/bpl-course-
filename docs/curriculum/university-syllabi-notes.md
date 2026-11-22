# University syllabi notes: MIT 11.431J and NYU SPS REDV1-CE9636

**Model policy for training - not for live lending decisions.**

Status: research notes for course design, 22 Nov 2026. Not learner-facing. US dollars. All new example numbers are fictional and marked "illustrative".

Purpose: record what two university-level courses teach, then map it to BPL Academy. Targets are the theory map (quality bar 6.1), Formula Library gaps, item design (8.4) and Excel builds (9.2). The notes also feed the construction deepening agreed on 22 Nov 2026 (cfi-cref-comparison.md, section H).

How this was done:

- MIT: all 11 lecture-note PDFs, 3 problem-set files and 3 case PDFs were downloaded and read as text. The debt, mortgage, credit, valuation, development and capital-structure notes were read in full. The rest were skimmed.
- NYU: the course page gives only a catalog description. No syllabus, session list or textbook is public. Two related NYU pages were opened to fill the gap.
- Key MIT numbers were recomputed independently in Python. All matched, to rounding.

Copyright: MIT OCW material is CC BY-NC-SA 4.0. NYU text is NYU's. This file paraphrases. Quotes are short and attributed.

---

## A. Source summaries

### A1. MIT OCW 11.431J / 15.426J Real Estate Finance and Investment (Fall 2006)

Graduate course. Instructors: Prof. David Geltner and Prof. W. Tod McGrath (MIT Center for Real Estate and Sloan). Two 1.5-hour lectures and one recitation a week.

The syllabus says the course covers "the most fundamental concepts, principles, analytical methods and tools" for commercial real estate investment and finance. It works at the "micro" level of single properties and deals. It takes the institutional investor's view, not the lender's.

Textbook: Geltner, Miller, Clayton and Eichholtz, *Commercial Real Estate Analysis and Investments*, South-Western, 2007 (ISBN 9780324305487, the 2nd edition). Tools: Argus (student version), Excel and an HP-10B calculator.

Grading: Exam 1 25%, Exam 2 35%, four group cases 40%. Practice problem sets are mostly ungraded.

| Session | Topic (instructor) | Reading (Geltner 2nd ed.) | Key models and formulas | Assignment |
| --- | --- | --- | --- | --- |
| 1 | Course introduction (Geltner) | Ch. 1, 2; Ch. 8 in recitation | Size of US real estate capital market; space market, asset market and development "real estate system"; investor types by horizon and risk | PS1 coaching |
| 2-3 | DCF; DCF and NPV (McGrath) | Ch. 10.1-10.6 | V = Σ CF_t ÷ (1 + E[r])^t; going-in IRR; inverse price-return link; intralease vs interlease discount rates; direct capitalization V = NOI ÷ cap rate; GIGO warnings | PS1 Part B |
| 4 | NPV (Geltner) | Ch. 10.5-10.6, App. A-B | NPV rule: maximize NPV, never NPV < 0; IRR split into initial yield and growth | PS1 |
| 5 | Cash flows and pro formas (McGrath) | Ch. 11.1 | PGI − vacancy + other income − OE = NOI; NOI − CI = PBTCF; reversion = NOI_(T+1) ÷ terminal cap | PS1 Part C (Excel pro forma), Part D (Argus) |
| 6 | Opportunity cost of capital (McGrath) | Ch. 11.2 | r = rf + RP = y + g; rf ≈ 10-yr Treasury less 100-150 bp; implied r from cap rate plus growth | Guest seminar |
| 7 | Leverage (McGrath) | Ch. 13.1-13.2 | LR = V ÷ E = 1 ÷ (1 − L/V); positive and negative leverage; risk rises with LR | Case 1 |
| 8 | Case 1: Private Practice I | - | Bid three properties from unlevered pre-tax cash flows | Case 1 due |
| 9 | WACC (McGrath) | Ch. 13.3-13.5 | r_P = (E/V)r_E + (D/V)r_D; r_E = (r_P − (L/V)r_D) ÷ (1 − L/V) | PS2 |
| 10 | After-tax cash flows (McGrath) | Ch. 14.1-14.2 | EATCF; depreciation and interest tax shields; capital gains and recapture | PS2 |
| 11 | After-tax analysis, capital budgeting (Geltner) | Ch. 14.3 | Investment value vs market value; marginal investor; value additivity; APV = NPV(property) + NPV(financing) | Recitation: leverage and tax |
| 12 | Commercial mortgage underwriting (Geltner) | Ch. 18.2 (slides also cover 18.1) | Stated yield vs expected return; yield degradation; hazard functions; LTV, DCR, BER, EBTCF; worked underwriting case | Recitation: mortgage mechanics |
| 13 | Case 2: Private Practice II | Ch. 17.1 | Mortgage "four rules"; IO, CAM, CPM, GPM, ARM; YTM with points and prepayment; loan valuation | Case 2 due |
| 14 | Exam 1 | Ch. 10-13, 14.1-14.5 | - | Exam |
| 15 | Development financial feasibility (Geltner) | Ch. 28 | Development process; risk list; hard and soft costs; construction loan compounding; simple feasibility "front door" and "back door" | - |
| 16 | Development project evaluation (Geltner) | Ch. 29.1, 29.3 | Time-to-build NPV; phased risk; operational leverage; canonical development OCC | - |
| 17-18 | Madison project example (Geltner) | Madison spreadsheet | Applied development NPV | Case 3 guidance |
| 19 | Case 3: One Lincoln Street (McGrath) | - | Downtown Boston office development JV; equity-first; construction loan; preferred returns | Case 3 due |
| 20 | Lincoln debrief; Inter-Mountain preview (Geltner) | - | - | - |
| 21 | Capital structure: debt vs equity (Geltner) | Ch. 15 | Equity constraint; costs of financial distress; agency costs; inflation fallacy | - |
| 22 | Project-level capital structure (Geltner) | Ch. 15.3 | Mezzanine debt, preferred equity, JV classes, promote; multi-tier cash flow example | - |
| 23-24 | Real options and land value (Geltner) | Ch. 27 | Land as a call option; wait, phase and switch options; binomial valuation | - |
| 25-26 | Case 4: Inter-Mountain (guest from Citigroup); debrief | - | Development case (not published on OCW) | Case 4 |
| 27 | Real options (cont.); review (Geltner) | Ch. 27 | - | - |
| Final | Cumulative | Emphasis 17.1, 18.2, 15.3, 27, 28, 29.1, 29.3; Cases 3-4 | - | Exam |

Assignment types (from the published files):

| Assignment | What it asks | Skill tested |
| --- | --- | --- |
| PS1 Part A | Even-numbered Chapter 8 problems by calculator and Excel | Time-value mechanics |
| PS1 Part B | Broker vs realistic cash flows; two properties at the same 8% cap but different growth; IRR decomposition | Spotting optimistic pro formas; r = y + g |
| PS1 Part C | Excel pro forma for "Rentleg Plaza", 30,000 SF, two suites, expense stops, 50% renewal, TI and commissions, 12% discount rate; target PV $2,292,810 | Building a lease-by-lease pro forma to a check value |
| PS1 Part D | Rebuild Part C in Argus | Reading lease-by-lease software output |
| PS2 | Firm WACC for a REIT; 10-year before- and after-tax pro forma; leverage and risk range; income and growth components of levered return; EBTCF and EATCF; depreciation | Leverage algebra; tax mechanics |
| Case 1 | Bid prices for an office, an NNN warehouse and a mixed-income apartment complex; 3-page memo | Valuation judgment; risk by tenant credit and lease term |
| Case 2 | After-tax and levered analysis of the same three; 6.5% loans, 30-year amortization, 10-year term, 1 point, 50% and 80% LTV; a state agency IO loan and LIHTC | Amortization schedules; leverage; tax effects on bids |
| Case 3 | One Lincoln Street development JV: unlevered cash flows, construction interest schedule, IRRs to the venture and the pension fund | Development budget, construction loan cost, JV economics |

Level of rigor: high for a master's course. Math is algebra, time value of money, IRR and probability. Theory is financial economics: equilibrium, market value versus investment value, value additivity, option pricing. Every lecture uses a worked numeric example. The perspective is the equity investor. Only Session 12 (with parts of 13 and 15) is written from the lender's side.

### A2. NYU SPS REDV1-CE9636 Financing Real Estate Development Projects

Non-credit continuing education course, 2 CEUs. Schack Institute of Real Estate. Search results show it as self-paced at $767 tuition; the course page itself shows no dates or price. Prerequisite: Real Estate Financial Analysis (REFI1-CE9351) or equivalent experience, with an assessment at the start.

"Ideal for" real estate developers and lenders. Stated outcomes: "knowledge of lender requirements" and "the ability to prepare a loan submission" (NYU SPS course page).

No session list, instructor, syllabus or textbook is published. The table below orders the catalog's topic list into a probable teaching sequence. **The sequence is our inference, not NYU's.**

| Block (inferred) | Topics named in the catalog description | Likely models and frameworks | Likely assignment type |
| --- | --- | --- | --- |
| 1. Parties and loan types | Motivations and requirements of each party; loan types; the development team | Construction, mini-perm, permanent and bridge loans; developer, GC, architect, lender's engineer | Unknown |
| 2. Lender credit criteria | Credit criteria; loan proposal | LTC, LTV, DSCR, debt yield, sponsor liquidity and net worth | Prepare a loan submission (stated outcome) |
| 3. Budget and feasibility | Hard- and soft-cost budgets; appraisal; feasibility | Sources and uses; contingency; as-complete and as-stabilized value | Budget review |
| 4. Diligence and contracts | Due diligence; construction contracts; legal documentation | Stipulated sum, cost-plus, GMP; plans and specs; permits | - |
| 5. Risk transfer | Guarantees; insurance and bonding; title insurance; liens; environmental reports | Completion and carry guaranties; payment and performance bonds; builder's risk; mechanics' liens | - |
| 6. Loan administration | Building Loan Agreement (BLA); requisitions; retainage; lender's engineer | Draw requests; percent complete; in-balance test; lien waivers; title date-down | - |
| 7. Exit | The takeout | Permanent commitment; tri-party or buy-sell agreement; sale exit | - |

Related NYU course opened for context: REFI1-CE9503 *Underwriting and Structuring Construction Loans* (2 CEUs; for CRE lenders and brokers). Outcomes: "Underwrite a construction loan" and "Develop a credit memorandum". Topics include sponsorship and completion guarantees, lien waivers, release provisions, draws and interest reserves. They also include contingency planning, third-party reports, budgets, percent complete, work in place and the borrower profile. Its assignment is a credit memo to a "committee".

Level of rigor: professional practice, not theory. The course teaches documents, process and lender requirements. Its strength for us is the full construction-loan document and administration list. Its weakness is that we cannot see its examples or problems.

---

## B. Theory-map input

Bloom levels: 1 Remember, 2 Understand, 3 Apply, 4 Analyze, 5 Evaluate, 6 Create. "Home" is where the concept is first taught in full. "Revisit" modules apply it without reteaching (quality bar 7.2).

### B1. Concepts required by quality bar 6.1

| Concept | Academic treatment (MIT / NYU) | Home | Revisit | Target depth |
| --- | --- | --- | --- | --- |
| Expected loss (PD × LGD × EAD) and credit spreads | MIT 18.1 frames loss as **yield degradation**, not a PD × LGD product. E[r] = YTM − Σ PrDEF_t × YDEGR_t. Spread over Treasuries must cover expected loss plus a risk premium. Typical ex ante yield degradation then: "60 to 120 basis points" (MIT lec. 12). NYU: not covered | C2 (concept, both forms) | C8 O4 (pricing build-up), C13 (severity), C14 O7 (CECL) | 3 Apply in C2 with illustrative numbers; 4 Analyze in C8 (spread vs expected loss) |
| Default as the borrower's option to walk away | MIT gives the intuition, not an option model. A 75% LTV loan, 15% annual value volatility and a 7-year horizon give about a 1-in-6 chance the property is "under water". "Comm. Mtgs effectively 'non-recourse'" (MIT lec. 12) | C2 | C5 (value volatility), C8 O1 (why LTV limits fall as volatility rises), C10 O7 (recourse value), C13 | 2 Understand in C2; 4 Analyze in C8 |
| Loss severity and recovery timing | MIT: recovery rate, loss severity, conditional on default year. "The earlier the default occurs" the larger the yield hit. Typical recovery then assumed 60-70% | C13 (F-CORE-23) | C10 O5 (timeline), C2 (preview), C14 O7 | 3 Apply; 4 Analyze in C13 (timing changes IRR loss, not only dollar loss) |
| Capital stack; contractual and structural subordination; intercreditor terms; mezzanine foreclosure | MIT 15.3: mezzanine debt, preferred equity, common equity, JV classes and promote. Mezz is "drawn" first and is a buffer for senior debt. No intercreditor or UCC foreclosure content. NYU: not named | C8 (structure and combined leverage, F-MF-16) | C0 O2 (preview), C6 (read JV and promote), C9 (intercreditor, pledge of equity), C13 (mezz foreclosure in a workout) | 4 Analyze in C8 (who loses first); 2 Understand for intercreditor law in C9 |
| Agency problems (moral hazard, adverse selection, originate-to-distribute, sponsor incentives) | MIT 15.1-15.2: costs of financial distress; "agency costs" at high L/V; debt as discipline. Lec. 12: a borrower can "bleed" a property and use Chapter 11. Originate-to-distribute is absent (pre-2008) | C2 O7 | C6 (sponsor incentives, promote), C8 (equity-first, recourse), C14 O2 (risk retention) | 2 Understand in C2; 4 Analyze in C6 and C14 |
| Interest-rate, refinance and extension risk | MIT 17: interest-only balloon "maximizes refinancing stress"; ARM shifts rate risk to the borrower; yield-curve shapes. Lec. 12: maximum projected terminal LTV of 65% | C8 O5 (break-even exit) | C3 O5 (floating rate), C12 O3 (extension), C14 O5 | 4 Analyze |
| Concentration risk | Not taught in 11.431J (portfolio theory sits in later Geltner chapters). NYU: no | C14 O4 | C2 O4, C6 O6 (sponsor exposure) | 4 Analyze; 5 Evaluate on a breach |
| Real estate and credit cycles | MIT lec. 12: lifetime default rates by origination year track the property cycle. Loans made near peaks default more. Lec. 1 and 2: tech-bubble development case and bubble warnings | C0 O5 | C5 (cap-rate cycles), C8 (vintage), C13 (historical episode), C14 | 4 Analyze |

### B2. Further concepts these courses treat as core for a lender

| Concept | Academic treatment | Home | Revisit | Target depth |
| --- | --- | --- | --- | --- |
| Mortgage mathematics ("four rules") | MIT 17: INT_t = OLB_(t−1) × r_t; AMORT_t = PMT_t − INT_t; OLB_t = OLB_(t−1) − AMORT_t; OLB_0 = L. Each loan type fixes one column. Built in Excel | C3 | C8, C12 (payoff), C13 (modification) | 3 Apply |
| Loan types: IO, CPM, CAM, GPM, ARM; negative amortization | MIT 17 with pros and cons of each | C3 (IO, CPM, partial IO) | C8 (amortization as a risk mitigant) | 2 Understand for CAM, GPM; 3 Apply for IO and CPM |
| Contract rate vs YTM vs expected return | MIT 17.2: points and prepayment move YTM; default moves expected return below YTM | C3 O6 (yield) | C8 O4 (expected return), C14 | 4 Analyze |
| Prepayment option and penalties | MIT 17: shorter payoff horizon raises the yield effect of points; penalties raise it further | C8 O6 (designs) | C3 O6 (yield), C10 O4 (enforceability) | 3 Apply |
| Loan valuation at a market yield | MIT 17.2.3: price = PV of contract cash flows at market YTM; premium when rates fall | C14 O2 (capital partner price) | C0 O3 (funding routes) | 2 Understand; 3 Apply as read-only |
| Commercial mortgage underwriting | MIT 18.2: borrower and property foci; value test at lower of direct cap and DCF; initial and terminal LTV; DCR; break-even ratio; negative EBTCF year as "red flag"; multi-year pro forma; negotiable terms | C8 | C4 (BER = F-CORE-12), C5 (value), C14 (memo) | 4 Analyze; 5 Evaluate in C14 |
| Pro forma realism | MIT 10.4 and 11.1: rent growth below inflation; capex 10-20% of NOI; going-out cap above going-in; broker vs realistic cash flows | C4 O3 | C5 O6, C8 | 4 Analyze |
| DCF, OCC and r = y + g | MIT 10-11 | C5 O2 | C8 (value test) | 3 Apply |
| Financial leverage and WACC | MIT 13: positive leverage if property yield exceeds loan constant; equity risk scales with LR | C5 O5 | C6 (sponsor claims), C8 | 4 Analyze (read-only math) |
| Development feasibility and NPV | MIT 28-29: simple feasibility front door and back door; time-to-build; phased risk; operational leverage. NYU: feasibility and appraisal | C8 (ground-up primer, deepened) | C5 (as-complete value), capstone | 3 Apply (front and back door); 2 Understand (NPV, operational leverage) |
| Construction loan mechanics and interest during construction | MIT 29.3: draws compound to completion; "commitment for future advances". NYU: BLA, requisitions, retainage, lender's engineer | C8 (sizing and IDC) | C9 (BLA, guaranties), C11 (closing a future-advance loan), C12 O1 (draws) | 3 Apply; 5 Evaluate for draw decisions in C12 |
| Take-out | MIT 29.3: "classical" structure; construction lender waits for a permanent commitment. NYU: "the takeout" | C8 O5 | C12 O3, C14 O5, capstone | 4 Analyze |
| CMBS and securitization | MIT lec. 1 and 15 mention conduits and CMBS only. Geltner Ch. 20 covers it but was not assigned | C0 O3 | C14 O2 | 2 Understand; 4 Analyze eligibility in C14 |
| REIT debt | MIT PS2 Q1: firm-level WACC for a REIT. Lec. 7: lower debt rate is not lower cost of capital | C0 O2 (mortgage REITs as lenders) | C14 (capital partners) | 2 Understand |
| Real options and land value | MIT 27: land as a call option; option premium from volatility | C5 (land value basis) | C8 (why land LTV is lowest) | 2 Understand |
| Hazard functions and lifetime default | MIT 18.1.2: conditional, unconditional and cumulative default probabilities | C14 O7 | C2 | 3 Apply (read-only) |
| Development risk taxonomy | MIT lec. 15 quotes a ten-factor list: entitlement, construction, leasing, operating expense, credit, partnership, capital market, pricing, event and valuation risk | C8 | C12, capstone | 4 Analyze |

---

## C. Formulas and models the universities teach that our Library lacks

Checked against the headings in `docs/formulas/formula-library.md` (snapshot 22 Nov 2026, current per `docs/SNAPSHOT.md`). This is a list only. No formula is added. F-CORE-38 and -39 stay reserved for the C7 proposals.

| # | Formula or model (as taught) | Nearest Library item | Lender needs it? | Why |
| --- | --- | --- | --- | --- |
| C1 | **Expected loss** EL = PD × LGD × EAD | None ("expected loss" has 0 hits) | Yes, core | Quality bar 6.1 names it. C8 pricing and C14 CECL both need it. Owner decision H3 allows illustrative numbers only |
| C2 | **Conditional yield degradation** YDEGR_t = YTM − IRR(cash flows if default in year t at recovery R) | None | Yes, core | Shows that early default costs more. Teaches why spread must exceed loss rate |
| C3 | **Expected return on a loan** E[r] = YTM − Σ_t PrDEF_t × YDEGR_t | None | Yes, core | Links rating to spread (decision H3). Concept only |
| C4 | **Hazard to unconditional default** PrDEF_t = h_t × S_(t−1); S_t = S_(t−1)(1 − h_t); cumulative = 1 − S_T | None | Read-only | Underlies lifetime-loss (CECL) thinking in C14 O7. No scored math needed |
| C5 | **Terminal (balloon) LTV** = OLB at maturity ÷ (NOI_(T+1) ÷ terminal cap) | Exit tests F-MF-20, F-COM-10 (DSCR legs) | Yes, core | MIT's case fails on terminal LTV (71% vs 65%). Needs an owner limit before any scored use |
| C6 | **Value test at lower of direct cap and DCF** | F-CORE-13, F-CORE-45, F-CORE-48 | Yes, family course | C5 teaches both methods. A "lower of" sizing rule would be new policy |
| C7 | **Equity before-tax cash flow** EBTCF = NOI − DS − CI, tested every year | F-MF-09, F-COM-03 (NCF) | Yes, family course | Catches a rollover year with negative cash after debt service. CM courses |
| C8 | **Lender yield to an expected payoff date** with points and a prepayment penalty: solve CF_0 = L(1 − points) against PMT and OLB_N(1 + penalty) | F-CORE-06, F-CORE-40, F-CORE-48 | Yes, core | F-CORE-40 is a straight-line screen. The exact IRR shows how points raise yield on a short bridge. C3 O6 |
| C9 | **Loan price at a market yield** P = Σ PMT_t ÷ (1 + y/m)^t + OLB_N ÷ (1 + y/m)^N | F-CORE-45 (PV) | Read-only | Explains whole-loan sale premiums and discounts in C14 O2 and C0 O3 |
| C10 | **Bond-equivalent to mortgage-equivalent yield** MEY = 12[(1 + CEY/2)^(1/6) − 1] | F-CORE-46 (EAR) | Yes, family course | Fixed-rate term loans price off semiannual Treasury yields |
| C11 | **ARM rate with caps** r_t = min(lifetime cap, interval cap, index + margin); teaser = index + margin − r_0 | C3 O5 floating rate; F-MF-22 cap strike | Read-only | BPL bridges float monthly over SOFR with a purchased cap, not interval caps. Useful contrast only |
| C12 | **CAM and GPM payments; negative amortization** | F-CORE-02 | No | Rare in BPL. One sentence in C3 is enough |
| C13 | **Leverage ratio and WACC** LR = V ÷ E; r_E = (r_P − (L/V) r_D) ÷ (1 − L/V) | F-CORE-44 (cash-on-cash) | Read-only | Explains why a sponsor's levered IRR claim rises with risk. C5 O5 and C6 |
| C14 | **After-tax cash flow, depreciation, recapture, APV** | None | No | Equity-side. The lender reads tax returns, not after-tax IRRs |
| C15 | **Construction balance with compounding draws** B_t = (B_(t−1) + D_t)(1 + r/12), draws at start of month; IDC = B_T − Σ D_t | F-MF-15, F-COM-14, F-RES-16 (average-balance factor) | Yes, core | Our "schedule's average" edge case needs a schedule method. C8 IDC deepening (decision H1) |
| C16 | **Simple feasibility, front door**: required rent = [(Cost × LTV × K × DCR) + OE] ÷ occupancy ÷ rentable SF | None (F-MF-08 return on cost is related) | Yes, core | Ground-up primer in C8 and the capstone. Shows whether the take-out can work |
| C17 | **Simple feasibility, back door**: supportable land = (NOI ÷ DCR ÷ K ÷ LTV) − construction cost | None | Yes, core | Tests a land price or a land loan request. C8 and capstone |
| C18 | **Development NPV with phase discount rates** NPV = PV(V_T at r_V) − PV(K at r_K) − land | None | Read-only | Explains why construction cost overruns hurt so much |
| C19 | **Canonical development OCC** E[r_C] = ((V_T − K_T) ÷ (V_0 − K_0))^(1/T) − 1 | None | No | Equity hurdle-rate theory |
| C20 | **Real-option land value** (binomial) | None | No | Theory of land value. Concept only in C5 |
| C21 | **Preferred return and promote waterfall** | None | No | Owner decision: read structures, do not build waterfalls (comparison C, rank 11) |
| C22 | **Value volatility over time** σ_T = σ × √T, and P(V_T < OLB) | None | Read-only | Teaching device for default as an option in C2 |

Two items are covered differently, not missing. MIT's break-even ratio BER = (OE + DS) ÷ PGI matches F-CORE-12. Combined leverage with mezzanine is F-MF-16.

One item we teach that MIT does not: **debt yield** (F-CORE-16, -18). It entered US practice after 2008 (C8 blueprint 4.2 item 1).

---

## D. Assignment and problem patterns for item sets and Excel builds

Each pattern below suits a multiple-choice exhibit set (quality bar 8.4) and, where marked, an Excel build (9.2). All numbers are **illustrative** and fictional. They were computed for this note and must be recomputed in code before use. Rates are not market figures (quality bar 10.1).

| # | Pattern (source) | Module | Exhibit | Example stem idea (illustrative) | Excel build? |
| --- | --- | --- | --- | --- | --- |
| D1 | Conditional yield degradation (MIT 18.1) | C2, C8 | Loan cash-flow table | A $1,000,000 three-year IO loan at 9% pays annually. It defaults in year 3 and recovers 65% of balance. What is the lender's realized IRR? Key −6.69% (yield degradation 15.69 points). Distractors: 9% less 35% severity spread evenly; recovery applied to interest too; IRR on $650,000 alone | Yes: small IRR grid |
| D2 | Stated yield vs expected return (MIT 18.1) | C8 | Rating-to-loss table | Same loan, 8% chance of a year-3 default. Expected return? Key 7.74%. Distractor 9.00% (ignores default); 6.20% (subtracts 8% × 35% as points) | No |
| D3 | Hazard table to cumulative default (MIT 18.1.2) | C14 | Hazard row 1.0%, 1.5%, 2.0% | Cumulative three-year default probability? Key 4.44%. Distractor 4.50% (adds hazards) | Yes |
| D4 | Lender yield with points and early payoff (MIT 17.2) | C3, C8 | Term sheet | 10% IO bridge, 2 points, repaid at month 24. Lender's nominal yield? Key about 11.12%. If repaid at month 12, about 12.13%. Distractor 12.00% (points ÷ 1 year at 24 months) | Yes: IRR from term-sheet inputs |
| D5 | "Spot the failing test" in a lender pro forma (MIT 18.2 case) | C8 | 10-year pro forma with DCR, BER and EBTCF rows | Which row flags a problem? Key: year-8 EBTCF negative from TI and commissions on rollover, though DCR passes every year. "What is missing?": a leasing reserve | Yes: pro forma with check cells |
| D6 | Terminal LTV (MIT 18.2) | C8, C12 | Year-11 NOI and terminal cap | $6,000,000 IO loan; year-11 NOI $520,000; terminal cap 7.5%. Terminal LTV? Key 86.5%. Distractor uses going-in cap. Needs an owner limit before scoring pass or fail | No |
| D7 | Fix the loan, don't just decline (MIT 18.2 step 4) | C8 | Two structures side by side | Which change cures both initial and terminal LTV with the least loss of proceeds? Options: smaller IO loan, amortizing loan, added recourse, higher rate | No |
| D8 | Back-door feasibility (MIT 28) | C8, capstone | Developer budget and rent survey | 24,000 SF; $28 rent; 7% vacancy; OE $210,000; DCR 1.25; 7.00% 30-year constant; 70% LTV; hard and soft cost $5,400,000. Maximum supportable land cost? Key about $540,155. Distractor forgets vacancy | Yes |
| D9 | Front-door feasibility (MIT 28) | C8, capstone | Cost summary | Cost $3,200,000; 75% LTV; 7.50% 25-year constant; DCR 1.25; OE $140,000; 93% occupancy; 18,000 SF. Required rent per SF? Key about $24.26 | Yes |
| D10 | Construction interest by draw schedule (MIT 29.3) | C8, C12 | Draw schedule | Draws $400,000, $600,000, $900,000, $1,100,000 at the start of months 1-4 at 9%, compounding. Interest to completion? Key about $47,538. Compare a 60% average-balance estimate of $54,000. Which method fits a back-loaded schedule? | Yes: draw and interest schedule |
| D11 | Phase risk and cost overrun (MIT 29) | C8 | Two-scenario table | Value falls 10% at completion. Why does the developer's return fall much more than the property's? Key: operational leverage, costs fixed before value is known | No |
| D12 | Who loses first (MIT 15.3) | C8, C13 | Capital stack chart | Value $10,000,000 falls to $8,000,000; sale costs 6%. Senior $6,000,000, mezz $1,500,000, preferred $1,000,000, common $1,500,000. Who takes the first dollar of loss beyond common? Key: preferred equity (net $7,520,000 covers senior and mezz, ignoring accrued interest) | Yes: stack waterfall by priority |
| D13 | Positive vs negative leverage (MIT 13) | C5 | Cap rate and constant | Cap rate 6.5%, loan constant 7.6%, 65% LTV. Equity cash yield? Key about 4.46%: negative leverage | No |
| D14 | Broker vs realistic pro forma (MIT PS1 Q1) | C4 | Two cash-flow rows | Same price, two forecasts. Which assumption explains most of the gap? Options: rent growth, capex, terminal cap, vacancy | No |
| D15 | Loan sale price (MIT 17.2.3) | C14 | Loan tape line | $2,000,000 IO at 8%, 36 months left; market yield 9%. Price? Key about $1,947,589. Distractor: par | Yes |
| D16 | Development JV term sheet read (MIT Case 3) | C6, capstone | Excerpt: equity first, 50% of cost, 11% preferred return, construction loan 4 years | What must be in place before the first loan draw? Key: all required equity spent (equity-first). Grey case: GMP contract signed but no completion guaranty | No |
| D17 | Loan submission review (NYU outcomes) | C8, capstone | Developer loan request package | "What is missing?" Options: lender's engineer cost review, permanent commitment, payment and performance bond, appraisal as-complete | No |

---

## E. Construction and development finance notes for C8, C12 and the capstone

These notes support owner decisions H1 and H2 (22 Nov 2026). They name concepts and sources only. No limit, threshold or rate is proposed. Where a rule is needed, it is listed as an owner question.

### E1. What MIT adds

1. **Construction loan as a balance that compounds.** Each draw is added to the balance. Interest accrues on drawn funds from the draw date. In the "classical" form the borrower pays nothing until completion (MIT lec. 15, 29.3). Today an interest reserve inside the loan does the same job. Teach the two as one idea.
2. **Worked example (MIT, recomputed).** Commitment $2,780,100 covers $2,750,000 of cost over three months at 8% compounded monthly. Draws are $500,000, $750,000 and $1,500,000 at the start of each month. Interest is $3,333.33, $8,355.55 and $18,411.26, total $30,100.14. The slide text prints the first figure as "8333"; the table shows $3,333.33.
3. **Financing cost is real cost.** "Time is money" applies even without a construction loan (MIT lec. 15). This supports putting the reserve inside cost (F-COM-14, F-RES-20).
4. **The classical take-out.** The construction lender "won't approve" a loan until a permanent lender has "conditionally approved a 'take-out' loan" (MIT lec. 15). Today many BPL ground-up loans exit by sale or by a bridge-to-agency refinance instead. Label the classical structure as history.
5. **Simple feasibility is a lender's test.** Front door: cost to required rent. Back door: rent to supportable land cost. MIT warns it is not an investment test. It ignores value at completion and NPV. For a lender it answers one question: can a take-out repay this loan?
6. **Feasibility versus value.** MIT's back-door case "seemed feasible" by $91,647 of headroom. A proper NPV was still negative. For a lender: an as-complete appraisal below cost means thin or negative sponsor equity at completion.
7. **Phased risk.** Development is riskier than the stabilized asset. MIT's example puts development risk at 2.1 to 2.9 times stabilized risk. The cause is "operational leverage": costs are committed before value is known. This is the economic reason for LTC limits below LTV limits and for equity first.
8. **Ten development risks.** MIT quotes a ten-factor risk list (entitlement through valuation). Use it as the risk-and-mitigant frame for the capstone memo.
9. **One Lincoln Street (Case 3) features.** Equity funds first, at the greater of a fixed amount or 50% of total cost. The construction loan has a 4-year term, quarterly interest-only payments and up-front fees. A GMP contract is in place. The lender still requires a completion guaranty, which may "devolve into negotiations" over line items. An investor demands 25% pre-leasing; the developer refuses. Each feature maps to a capstone document or grey case.
10. **Land as an option.** Land value is volatile because it is an option on a future building (MIT 27). This explains why raw land carries the lowest supervisory LTV (C8 blueprint content map). It also explains why a land loan should not be sized on a hoped-for building.

### E2. What NYU adds

The NYU catalog gives the document and administration list a construction lender works through. Map each item to a home:

| NYU topic | BPL home | Note |
| --- | --- | --- |
| Loan types; development team; lender criteria | C8 | Add the team roles to the ground-up primer |
| Loan proposal and submission | C8, capstone | Capstone file = a loan submission in real format (9.1) |
| Hard- and soft-cost budgets | C8 | Budget line review against a schedule of values (C8 4.1 item 6) |
| Appraisal; feasibility | C5, C8 | As-complete and as-stabilized values; front and back door |
| Due diligence; construction contracts | C8, C9 | Stipulated sum, cost-plus, GMP (CFI gap rank 1) |
| Legal documentation; Building Loan Agreement | C9 | The BLA is the construction loan agreement. A state may treat it specially; check Ohio, North Carolina and Indiana before writing [VERIFY: state statutes; not opened 22 Nov 2026] |
| Guarantees | C6, C9 | Completion, carry and interest guaranties |
| Insurance and bonding | C9 | Builder's risk; payment and performance bonds |
| Title insurance; liens | C9, C12 | Mechanics' lien priority and date-down per draw (C12 4.2 item 2) |
| Environmental reports | C9 | Phase I before closing |
| Requisitions and loan administration | C12 O1 | Draw request package |
| Retainage | C12 | F-COM-21 exists |
| Lender's engineer | C12 | Inspection and percent-complete sign-off |
| The takeout | C8 O5, C12 O3 | Refinance or sale exit |

NYU's related course REFI1-CE9503 adds interest reserves, contingency planning and work in place versus percent complete. It also adds lien waivers, release provisions and a credit memo to committee. These match C8 and C12 depth targets and quality bar 9.3.

### E3. Proposed deepening (concepts only; no new limits)

**C8 (sizing):**

1. Add a 15-minute chunk on construction budget review: line items, hard versus soft, contingency, developer fee, IDC.
2. Teach IDC by draw schedule (D10) next to the average-balance factor (F-MF-15). Show when each one misleads.
3. Teach front- and back-door feasibility (D8, D9) as the take-out reality check.
4. Explain equity-first and LTC below LTV through phased risk and operational leverage (E1 item 7).
5. Use the ten-factor risk list for the ground-up risk-and-mitigant table.

**C12 (administration):**

1. Use the NYU loan-administration list as the outline of the draw lesson: requisition, lender's engineer, lien waivers, retainage, date-down, in-balance.
2. Add change orders and contingency draw-down as the usual route to an out-of-balance loan (CFI gap rank 8).
3. Show interest on drawn funds rising after each draw (C12 4.2 item 1), using the D10 schedule.

**Capstone (ground-up deal):**

1. File contents: loan submission, development budget, draw schedule, GMP contract excerpt and completion guaranty. Add an appraisal (as-is land, as-complete, as-stabilized), a lender's engineer report and exit evidence.
2. Planted defects to consider: soft costs left out of the budget, and contingency below the owner's rule. Others: a front-loaded draw schedule against the IDC estimate, a take-out sized on pro forma rent, and equity counted after loan draws.
3. Grey cases: GMP signed but completion guaranty refused; pre-leasing below an investor's requirement but the policy is silent.

**Owner questions before any scored item:**

| # | Gap | Needed for |
| --- | --- | --- |
| Q1 | No terminal (balloon) LTV limit in policy | D6 pass or fail |
| Q2 | No contingency minimum or developer-fee rule | Capstone budget defects |
| Q3 | No rule on schedule-based IDC versus the 60% factor beyond the edge case in F-MF-15 | D10 as a scored item |
| Q4 | No pre-leasing rule outside F-COM-22 | Capstone grey case |
| Q5 | No expected-loss or rating-to-spread table (decision H3 says concept only) | D1-D3 must stay illustrative |

---

## F. Reading list mapped to modules (quality bar 6.5)

Chapter numbers for Geltner are given for **two** editions. The 2nd edition is the one MIT used in 2006. The 4th edition is the current one. The 4th edition chapter titles below come from the Routledge page. Chapters 16-29 of the 4th edition are online only. Nothing below has been checked page by page yet. Open each before citing it.

| Text and chapter | Topic | BPL modules |
| --- | --- | --- |
| Geltner et al., 2nd ed. (2007), Ch. 8; 4th ed. Ch. 2 "Present Value Mathematics for Real Estate" | Time value of money | C3 |
| 2nd ed. Ch. 10; 4th ed. Ch. 4 "Micro-level Valuation of Real Estate: DCF & NPV" | DCF, NPV, direct cap | C5 |
| 2nd ed. Ch. 11; 4th ed. Ch. 5 "Income Definitions" and Ch. 11 "Finding the Cost of Capital" | Pro formas, OCC | C4, C5 |
| 2nd ed. Ch. 13; 4th ed. Ch. 12 "Use of Debt in Real Estate Investment: The Effect of Leverage" | Leverage, WACC | C5, C8 |
| 2nd ed. Ch. 15; 4th ed. Ch. 15 "Advanced Topics II: Capital Structure" | Capital stack, mezz, preferred equity, promote | C6, C8 |
| 2nd ed. Ch. 16-17; 4th ed. Ch. 19-20 "Mortgage Basics I" and "II: Payments, Yields and Values" | Mortgage math, yields, loan value | C3, C8, C14 |
| 2nd ed. Ch. 18; 4th ed. Ch. 21 "Commercial Mortgage Analysis and Underwriting" | Yield degradation, hazard, underwriting criteria | C2, C8, C13, C14 |
| 2nd ed. Ch. 27; 4th ed. Ch. 16 "Real Options and Land Value" | Land value | C5, C8 |
| 2nd ed. Ch. 28-29; 4th ed. Ch. 17-18 "Investment Analysis of Real Estate Development Projects I and II" | Feasibility, construction loan, development NPV | C8, C12, capstone |
| 4th ed. Ch. 26 "Real Estate Investment Trusts (REITs)" | REITs | C0 |
| 4th ed. Ch. 28 "Real Estate, Sustainability, and Climate Risk" | Climate risk to collateral | C5, C9 (insurance) |
| Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (McGraw Hill), Ch. 4-5 | Fixed and adjustable rate loans, fees, effective cost | C3 |
| Same, Ch. 2 | Notes, mortgages, default, foreclosure, bankruptcy | C9, C10, C13 |
| Same, Ch. 12 "Financial Leverage and Financing Alternatives" | Positive leverage, break-even rate, income-property underwriting | C5, C8 |
| Same, Ch. 16 "Financing Project Development"; Ch. 17 "Financing Land Development Projects" | Lender requirements, rates and fees for construction and land loans | C8, C12, capstone |
| Same, Ch. 18 "Structuring Real Estate Investments: Organizational Forms and Joint Ventures" | JV structures | C6 |
| Same, Ch. 19-20 "The Secondary Mortgage Market" | Pass-throughs, CMOs, CDOs, CLOs | C0, C14 |
| Same, Ch. 21 "REITs"; Ch. 23 "Real Estate Funds" (adds debt funds in the 2024 Release) | Lender types | C0 |
| Linneman, *Real Estate Finance and Investments: Risks and Opportunities* | Named in quality bar 6.5. Not opened in this pass | Check edition and chapters |

Editions to check:

- Geltner: a 3rd edition (listed as 2013, 864 pages; publisher not confirmed) sits between the two above. The 4th edition, *Commercial Real Estate Analysis for Investment, Finance, and Development* (Routledge, copyright 2026), adds Van de Minne, Lindenthal and Shen. Its Routledge page lists ISBN-like number 9781041076391; confirm before citing.
- Brueggeman and Fisher: the 17th edition is 2021 (ISBN 9781264892884). The 2024 Release (ISBN 9781265064846) adds chapter learning objectives and a debt-fund section. McGraw Hill now moves to "Evergreen" updates, so cite the release year, not only an edition number.
- MIT's 2006 cases (Private Practice I and II, One Lincoln Street) are fictionalized or disguised. Cite them as teaching cases, not facts.

### F1. Dated content in the MIT 2006 materials

Use the concept. Refresh every fact before a learner sees it (quality bar 10.1-10.2).

| Item in MIT 2006 | Why it is dated | Refresh with |
| --- | --- | --- |
| 10-year Treasury 6.00%; 200 bp commercial mortgage spread; 8% loan yield | 2006 market levels | Dated rate and spread sources, as of month and year |
| Typical maximum LTV 75%; DCR at least 1.20x; BER at most 85% | Pre-2008 underwriting norms; ours come from the Model Credit Policy | Model Credit Policy only. Never cite MIT numbers as limits |
| 16% lifetime commercial mortgage default rate; hazard curve and recovery of 60-70% (Esaki et al. 2002; Snyderman) | Data end before the 2008-09 and 2023 office stresses | Newer life-company and CMBS loss studies; Federal Reserve delinquency and charge-off series (C12 already cites FRED) |
| Average credit loss of 62 bp a year, 1972-2004 (Giliberto-Levy index) | Excludes 2008-09 | Updated index or regulator data |
| LIBOR as the ARM index | LIBOR panels ended; SOFR replaced it in US contracts [VERIFY: LIBOR Act, Pub. L. 117-103, Div. U; and 12 CFR Part 253 (Regulation ZZ); not opened 22 Nov 2026] | C3 owns SOFR mechanics |
| Conduit and CMBS take-out with no risk retention | Pre-crisis "CMBS 1.0". Credit risk retention now applies to securitizers [VERIFY: 12 CFR Part 43 (OCC) / Regulation RR; not opened 22 Nov 2026] | C14 O2 |
| No HVCRE, no Basel III | Bank capital rules for high-volatility CRE came later [VERIFY: 12 CFR 3.2 "high volatility commercial real estate exposure"; not opened 22 Nov 2026] | C0 O2 and C8 as context for bank competitors |
| No debt yield | Became standard after 2008 | Already in F-CORE-16, -18 |
| Tax rates 35%, 15% and 25% recapture; 39- and 27.5-year lives | Rates changed since 2006 [VERIFY: 26 USC 1, 1(h), 168(c); not opened 22 Nov 2026] | Not needed for lender modules |
| Fixed 8% construction loan rate, compounded quarterly | Construction and bridge loans now mostly float over Term SOFR | Running-deal pricing (D-CORE-27) |
| "Cramdown insurance"; Argus DOS-era steps; HP-10B | Old terms and tools | Plain language; Excel builds |
| Cap rates of 5-6% (institutional) and 7-9% (non-institutional) "in 2005" | Market data | Dated cap-rate survey |
| APR and TILA discussion | Consumer law; BPL loans are outside TILA (C1) | C1 and C8 4.1 item 3 |

---

## G. Sources

| Source | URL | Accessed |
| --- | --- | --- |
| MIT OCW 11.431J lecture notes page | https://ocw.mit.edu/courses/11-431j-real-estate-finance-and-investment-fall-2006/pages/lecture-notes/ | 22 Nov 2026 |
| MIT OCW 11.431J assignments page | https://ocw.mit.edu/courses/11-431j-real-estate-finance-and-investment-fall-2006/pages/assignments/ | 22 Nov 2026 |
| MIT OCW 11.431J syllabus | https://ocw.mit.edu/courses/11-431j-real-estate-finance-and-investment-fall-2006/pages/syllabus/ | 22 Nov 2026 |
| MIT OCW 11.431J calendar (readings by session) | https://ocw.mit.edu/courses/11-431j-real-estate-finance-and-investment-fall-2006/pages/calendar/ | 22 Nov 2026 |
| MIT lecture PDFs (lec1, lec2_3_4, lec5_7, lec7, lec11_12, lec12, lec13, lec15, lec16, lec21, lec23) | Linked from https://ocw.mit.edu/courses/11-431j-real-estate-finance-and-investment-fall-2006/resources/ (for example .../resources/lec12/) | 22 Nov 2026 |
| MIT assignment PDFs (ps1, ps1cal, ps2, case1, case2, case3) | Linked from the same resources path (for example .../resources/case3/) | 22 Nov 2026 |
| NYU SPS REDV1-CE9636 course page | https://www.sps.nyu.edu/courses/REDV1-CE9636-financing-real-estate-development-projects.html | 22 Nov 2026 |
| NYU SPS REFI1-CE9503 Underwriting and Structuring Construction Loans | https://www.sps.nyu.edu/courses/REFI1-CE9503-underwriting-and-structuring-construction-loans.html | 22 Nov 2026 |
| NYU bulletin pages (REDV1-CE, DEVE1-GC) | https://bulletins.nyu.edu/courses/redv1_ce | Failed: HTTP 503 and connection refused, 22 Nov 2026 |
| Routledge, Geltner et al. 4th ed. | https://www.routledge.com/Commercial-Real-Estate-Analysis-for-Investment-Finance-and-Development/Geltner-Miller-VanDeMinne-Eichholtz-Lindenthal-Shen/p/book/9781041076391 | 22 Nov 2026 |
| McGraw Hill, Brueggeman and Fisher 2024 Release preface and contents | https://info.mheducation.com/rs/128-SJW-347/images/Preface_Brueggeman_Real%20Estate%20Finance%20and%20Investments_2024%20Release.pdf | 22 Nov 2026 |

## Self-check

1. Does every quality bar 6.1 concept have a home module? Yes, in B1. Concentration risk has no university treatment here; its home is C14.
2. Were any formulas added to the Library? No. Section C lists gaps only. F-CORE-38 and -39 remain reserved.
3. Is any MIT 2006 number presented as a limit? No. Section F1 flags them all as dated.
4. Are all new example numbers marked illustrative? Yes, in section D. Each was computed in Python for this note.
5. Is the NYU session order NYU's own? No. It is inferred from the catalog list and labelled so.
6. Are legal statements tagged? Yes. Each is marked "not opened" where the source was not opened today.

## What to look up yourself

Open items were researched first. These remain:

1. **NYU syllabus.** No public syllabus was found. Ask Schack (sps.realestate@nyu.edu) for the session list, text and assignments.
2. **NYU bulletin entry.** The bulletin site refused connections. Retry for course hours and the older course number REDV1-CE 9127 named in search results.
3. **Geltner 4th edition chapters.** Confirm the online chapter numbers and the ISBN at routledge.com/cw/geltner-miller.
4. **Linneman edition.** Find the current edition and the chapters on debt, construction and CMBS.
5. **Newer default and loss data** to replace Esaki (2002) and the Giliberto-Levy series.
6. **LIBOR Act, Regulation ZZ, Regulation RR and the HVCRE definition.** Open each and replace the "not opened" tags.
7. **State treatment of building loan agreements** in Ohio, North Carolina and Indiana before C9 or C12 mention it.

## How to check it

1. Open the MIT calendar page. Compare session titles and readings with table A1.
2. Open MIT lec12 (Chapter 18). Recompute the yield-degradation example: −$100, $10, $10, $77 gives an IRR of −1.12%. The hazard example gives 9.12% expected return.
3. Open MIT lec15. Recompute the draw table: $500,000, $750,000, $1,500,000 at 8% ÷ 12, compounding, gives $30,100.14 of interest.
4. Open MIT lec13. Check $1,000,000 at 12%, 360 months: payment $10,286.13; 10-year balloon $934,180.
5. Recompute each section D stem in code before it enters an item bank.
6. Check `docs/SNAPSHOT.md` before relying on any Library heading cited in section C.
7. Search the Library for "expected loss", "terminal" and "yield degradation" to confirm the gaps still exist.
