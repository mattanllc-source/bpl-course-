# Prerequisite graph: BPL core course (C0-C14)

**Model policy for training - not for live lending decisions.**

| Item | Value |
| --- | --- |
| Quality bar row | 7.2 (prerequisite chain) |
| Inputs | `c00`-`c14-blueprint.md`; `coverage-review.md` §4; `docs/formulas/formula-library.md` (snapshot 22 Nov 2026, current); `theory-map.md`; `data/running-deals/running-deals.md` |
| Machine-readable twin | `docs/curriculum/prerequisites.json` |
| Prepared | 22 Nov 2026 |
| Status | v1 for owner review. Professor and CCO review fixes applied 22 Nov 2026. Author material. No blueprint was edited; fixes are listed for M4 and M5 |

**The rule.** A module may use a concept or formula only at or after its home module. Before the home, a module may preview it: name it at Bloom level 1-2, in a sentence or two, with a pointer to the home. Plain arithmetic on given numbers (a ratio against a limit) is not a formula use. Anything that needs the mechanism or a worked formula is a use, and must wait.

**How the scan was done.** Every formula ID in each blueprint was extracted by script, with ranges such as "F-CORE-24 to -27" expanded. Pointer-only mentions ("no F-CORE-24 to -27 work") were removed by hand. Concept use was found by keyword search, then read in context. The Library's "Modules" line was compared with the first blueprint that teaches each formula.

## 1. Module graph

The course runs C0 to C14 in order, so every prerequisite points backward. "Direct" follows the coverage review §4 proposals, which the Course Bible §3 column does not yet show.

| Module | Bible §3 prerequisite | Direct prerequisites (proposed) | All upstream modules |
| --- | --- | --- | --- |
| C0 Program orientation and the BPL market | None | None | None |
| C1 Business purpose vs consumer: the purpose test and regulatory map | C0 | C0 | C0 |
| C2 Credit fundamentals and the loan life cycle | C1 | C0, C1 | C0, C1 |
| C3 Real estate finance math | C2 | C1, C2 | C0, C1, C2 |
| C4 Property cash flow: GPR to NOI | C3 | C3 | C0, C1, C2, C3 |
| C5 Valuation | C4 | C0, C1, C2, C3, C4 | C0, C1, C2, C3, C4 |
| C6 Borrower, sponsor and guarantor analysis | C2 | C2, C3, C5 | C0, C1, C2, C3, C4, C5 |
| C7 KYC, BSA/AML, OFAC and fraud red flags | C1 | C1, C5, C6 | C0, C1, C2, C3, C4, C5, C6 |
| C8 Loan structuring and sizing | C3, C5 | C3, C4, C5, C6 | C0, C1, C2, C3, C4, C5, C6 |
| C9 Loan documents, title, insurance and collateral | C2 | C2, C3, C5, C8 | C0, C1, C2, C3, C4, C5, C6, C8 |
| C10 State law: licensing, usury, foreclosure and recourse | C1, C9 | C1, C3, C7, C9 | C0, C1, C2, C3, C4, C5, C6, C7, C8, C9 |
| C11 Closing and funding | C9 | C3, C7, C8, C9 | C0, C1, C2, C3, C4, C5, C6, C7, C8, C9 |
| C12 Servicing, draws and asset management | C11 | C3, C8, C9, C10, C11 | C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11 |
| C13 Default, workout, foreclosure and REO | C10, C12 | C6, C9, C10, C12 | C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12 |
| C14 Credit memo, committee and portfolio context | C6, C8 | C6, C8, C10, C11, C12, C13 | C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13 |

Chain in brief: C0 → C1 → C2 → C3 → C4 → C5; C2 + C3 + C5 → C6 → C7 (+ C5); C3-C6 → C8 → C9 → C10 (+ C7) → C11 → C12 → C13 (+ C6) → C14.

## 2. Formulas and concepts by module

"Assumes" lists formulas taught in an earlier module. "Introduces" lists the formulas each module teaches first. "Preview" formulas are named or given as stated figures only.

### C0 Program orientation and the BPL market

- **Requires:** none.
- **Formulas assumed:** none.
- **Formulas introduced:** none.
- **Formulas previewed:** F-RES-04 Loan-to-cost (flip).
- **Concepts introduced (home):** TM-01 Real estate and credit cycles, TM-02 Lender types, funding routes and the capital partner's credit box.
- **Concepts revisited:** none.
- **Note:** F-RES-04 is named in a lookup drill only.

### C1 Business purpose vs consumer: the purpose test and regulatory map

- **Requires:** C0.
- **Formulas assumed:** none.
- **Formulas introduced:** none.
- **Concepts introduced (home):** TM-03 The regulatory perimeter: business-purpose versus consumer credit.
- **Concepts revisited:** none.
- **Note:** O7 (personal-use share of cash-out) has no Library formula; it is one division.

### C2 Credit fundamentals and the loan life cycle

- **Requires:** C0, C1.
- **Formulas assumed:** none.
- **Formulas introduced:** F-CORE-29 Aggregate sponsor exposure.
- **Formulas previewed:** F-CORE-14 Loan-to-value (LTV); F-RES-02 Loan-to-after-repair value (LTARV); F-RES-03 Loan-to-as-is value (LTAIV); F-RES-04 Loan-to-cost (flip); F-RES-09 Cash to close (flip purchase); F-CORE-05 Per diem interest; F-CORE-22 Extension fee.
- **Concepts introduced (home):** TM-04 Default as the borrower's option to walk away, TM-05 Agency problems: adverse selection, moral hazard, originate-to-distribute and sponsor incentives, TM-06 Concentration risk, TM-07 Risk ratings and credit migration, TM-19 Expected loss and credit spreads.
- **Concepts revisited:** none.
- **Note:** Ratios against limits are plain division (coverage review, sequence note 2). F-CORE-05 and F-CORE-22 are flagged (P-01).

### C3 Real estate finance math

- **Requires:** C1, C2.
- **Formulas assumed:** none.
- **Formulas introduced:** F-CORE-01 Interest-only payment (Actual/360); F-CORE-02 Amortizing payment (principal and interest); F-CORE-03 Annual debt service (ADS); F-CORE-04 Loan constant; F-CORE-05 Per diem interest; F-CORE-06 Origination points; F-CORE-40 All-in annual cost screen; F-CORE-45 Present and future value (time value of money); F-CORE-46 Effective annual rate from a nominal rate; F-CORE-47 Remaining loan balance after k payments; F-CORE-48 Internal rate of return (IRR); F-CORE-49 Remaining balance with Actual/360 accrual.
- **Formulas previewed:** F-CORE-28 Note rate (RTL grid); F-CORE-32 Payoff amount; F-CORE-33 Prepaid (odd-days) interest at closing; F-CORE-41 Net funding wire.
- **Concepts introduced (home):** TM-08 Time value of money and mortgage mathematics, TM-09 Loan types and amortization, TM-10 Contract rate, yield to maturity and expected return, TM-11 Interest-rate risk on floating-rate loans.
- **Concepts revisited:** none.
- **Note:** F-CORE-45 to -49 are listed for C3 in the Library but not yet cited in the C3 blueprint (P-09). C3 O5 tests coverage on a stated cap strike; C8 teaches the strike formula (P-16).

### C4 Property cash flow: GPR to NOI

- **Requires:** C3.
- **Formulas assumed:** F-CORE-02 Amortizing payment (principal and interest); F-CORE-03 Annual debt service (ADS); F-CORE-04 Loan constant.
- **Formulas introduced:** F-CORE-07 Gross potential rent (GPR); F-CORE-08 Vacancy and credit loss; F-CORE-09 Effective gross income (EGI); F-CORE-10 Net operating income (NOI); F-CORE-11 Debt service coverage ratio (DSCR); F-CORE-12 Break-even occupancy; F-MF-02 Economic occupancy; F-MF-06 Replacement reserves; F-MF-09 Net cash flow (NCF); F-MF-10 Multifamily DSCR (amortizing); F-MF-12 In-place interest coverage (bridge); F-COM-03 Commercial net cash flow (NCF); F-COM-09 Rollover-stressed NCF; F-RES-07 Residential DSCR.
- **Formulas previewed:** F-COM-02 Rollover risk.
- **Concepts introduced (home):** TM-12 Pro forma realism and submarket evidence, TM-13 Cash-flow coverage and break-even.
- **Concepts revisited:** none.
- **Note:** C4 previews rollover in T6, but C14 assumes F-COM-09, so C4 must work it in full (P-15).

### C5 Valuation

- **Requires:** C0, C1, C2, C3, C4.
- **Formulas assumed:** F-CORE-04 Loan constant; F-CORE-10 Net operating income (NOI); F-MF-09 Net cash flow (NCF); F-COM-03 Commercial net cash flow (NCF).
- **Formulas introduced:** F-CORE-13 Capitalization (cap) rate; F-CORE-14 Loan-to-value (LTV); F-CORE-36 Appraisal age; F-CORE-44 Cash-on-cash return; F-RES-02 Loan-to-after-repair value (LTARV); F-RES-03 Loan-to-as-is value (LTAIV).
- **Formulas previewed:** F-MF-13 Value-add bridge maximum loan; F-MF-20 Bridge exit take-out test; F-CORE-42 REO carrying value and charge-off.
- **Concepts introduced (home):** TM-14 Discounted cash flow, cost of capital and cap rates, TM-15 Financial leverage, TM-16 Real options and land value.
- **Concepts revisited:** TM-01, TM-04, TM-12.
- **Note:** F-MF-20 use is flagged (P-05).

### C6 Borrower, sponsor and guarantor analysis

- **Requires:** C2, C3, C5.
- **Formulas assumed:** F-CORE-01 Interest-only payment (Actual/360); F-CORE-02 Amortizing payment (principal and interest); F-CORE-29 Aggregate sponsor exposure.
- **Formulas introduced:** F-CORE-21 Months of reserves; F-CORE-24 Adjusted liquid assets; F-CORE-25 Required post-closing liquidity; F-CORE-26 Adjusted net worth; F-CORE-27 Experience count and tier.
- **Formulas previewed:** F-CORE-30 Bucket concentration.
- **Concepts introduced (home):** TM-17 Guaranty value and wrong-way risk, TM-22 Capital stack and subordination.
- **Concepts revisited:** TM-05, TM-06, TM-15.
- **Note:** F-CORE-30 is a pointer to C14.

### C7 KYC, BSA/AML, OFAC and fraud red flags

- **Requires:** C1, C5, C6.
- **Formulas assumed:** none.
- **Formulas introduced:** none.
- **Concepts introduced (home):** TM-18 Fraud economics and the verification chain.
- **Concepts revisited:** TM-03, TM-05.
- **Note:** Its two calculations wait for reserved F-CORE-38 and -39, which are not in the Library yet (P-10).

### C8 Loan structuring and sizing

- **Requires:** C3, C4, C5, C6.
- **Formulas assumed:** F-CORE-02 Amortizing payment (principal and interest); F-CORE-03 Annual debt service (ADS); F-CORE-04 Loan constant; F-CORE-06 Origination points; F-CORE-10 Net operating income (NOI); F-CORE-11 Debt service coverage ratio (DSCR); F-CORE-13 Capitalization (cap) rate; F-CORE-14 Loan-to-value (LTV); F-CORE-27 Experience count and tier; F-CORE-40 All-in annual cost screen; F-CORE-44 Cash-on-cash return; F-MF-09 Net cash flow (NCF); F-MF-12 In-place interest coverage (bridge); F-COM-03 Commercial net cash flow (NCF); F-RES-02 Loan-to-after-repair value (LTARV); F-RES-07 Residential DSCR.
- **Formulas introduced:** F-CORE-15 Loan-to-cost (LTC); F-CORE-16 Debt yield; F-CORE-17 Maximum loan by DSCR; F-CORE-18 Maximum loan by debt yield; F-CORE-19 Maximum loan (lowest of all tests); F-CORE-20 Interest reserve (straight-line); F-CORE-22 Extension fee; F-CORE-28 Note rate (RTL grid); F-RES-04 Loan-to-cost (flip); F-RES-13 Fix-and-flip maximum loan; F-RES-16 Ground-up interest reserve; F-RES-17 Maximum loan by DSCR (residential); F-RES-20 Ground-up maximum loan; F-RES-24 Rental exit DSCR; F-MF-13 Value-add bridge maximum loan; F-MF-14 Term loan maximum; F-MF-20 Bridge exit take-out test; F-MF-21 Interest shortfall reserve; F-MF-22 Maximum rate cap strike; F-MF-24 Bridge note rate; F-MF-25 Term loan note rate; F-COM-08 Three-test loan sizing; F-COM-10 Bridge exit test (take-out DSCR); F-COM-17 Bridge interest shortfall reserve; F-COM-18 Fixed-rate floor; F-COM-24 Step-down prepayment premium.
- **Formulas proposed (theory map):** F-MF-15 Construction interest reserve; F-MF-16 Combined leverage; F-COM-14 Construction sizing with interest reserve; F-RES-22 Equity-first requirement.
- **Concepts introduced (home):** TM-20 Risk-based pricing, TM-21 Commercial mortgage underwriting: several tests and the binding constraint, TM-23 Refinance and extension risk, TM-24 Prepayment option and prepayment premiums, TM-25 Development phases and phased risk, TM-26 Development feasibility: front door and back door, TM-27 Interest during construction, TM-28 Completion and cost-overrun risk, TM-29 Take-out risk.
- **Concepts revisited:** TM-01, TM-04, TM-05, TM-08, TM-09, TM-10, TM-11, TM-12, TM-13, TM-14, TM-15, TM-16, TM-19, TM-22.
- **Note:** Proposed formulas carry the theory-map additions (capital stack, interest during construction, equity first).

### C9 Loan documents, title, insurance and collateral

- **Requires:** C2, C3, C5, C8.
- **Formulas assumed:** F-CORE-14 Loan-to-value (LTV).
- **Formulas introduced:** F-CORE-34 Insurance-to-value ratio; F-CORE-35 Monthly tax and insurance escrow; F-CORE-37 Coinsurance recovery.
- **Concepts introduced (home):** TM-30 Lien priority and perfection, TM-31 Intercreditor terms and mezzanine foreclosure.
- **Concepts revisited:** TM-04, TM-17, TM-22, TM-28.

### C10 State law: licensing, usury, foreclosure and recourse

- **Requires:** C1, C3, C7, C9.
- **Formulas assumed:** F-CORE-05 Per diem interest; F-CORE-24 Adjusted liquid assets; F-CORE-40 All-in annual cost screen; F-COM-24 Step-down prepayment premium.
- **Formulas introduced:** F-CORE-23 Loss severity; F-CORE-31 Default interest.
- **Concepts introduced (home):** TM-32 Loss severity and recovery timing.
- **Concepts revisited:** TM-03, TM-04, TM-17, TM-19, TM-24.
- **Note:** F-CORE-23 is introduced here, not in C13 as the Library says (P-04).

### C11 Closing and funding

- **Requires:** C3, C7, C8, C9.
- **Formulas assumed:** F-CORE-05 Per diem interest; F-CORE-06 Origination points; F-CORE-35 Monthly tax and insurance escrow; F-CORE-36 Appraisal age.
- **Formulas introduced:** F-CORE-33 Prepaid (odd-days) interest at closing; F-CORE-41 Net funding wire; F-RES-09 Cash to close (flip purchase).
- **Concepts introduced (home):** TM-33 Conditions precedent and the point of no return.
- **Concepts revisited:** TM-02, TM-03, TM-18, TM-30.

### C12 Servicing, draws and asset management

- **Requires:** C3, C8, C9, C10, C11.
- **Formulas assumed:** F-CORE-01 Interest-only payment (Actual/360); F-CORE-05 Per diem interest; F-CORE-16 Debt yield; F-CORE-22 Extension fee; F-CORE-31 Default interest; F-MF-12 In-place interest coverage (bridge); F-MF-20 Bridge exit take-out test; F-COM-10 Bridge exit test (take-out DSCR).
- **Formulas introduced:** F-CORE-32 Payoff amount; F-CORE-42 REO carrying value and charge-off; F-RES-06 Draw percent complete; F-RES-18 Draw amount; F-RES-25 In-balance shortfall; F-COM-19 Cash sweep amount.
- **Concepts introduced (home):** TM-34 Covenants, monitoring and early warning.
- **Concepts revisited:** TM-02, TM-07, TM-08, TM-11, TM-13, TM-23, TM-25, TM-27, TM-28, TM-29, TM-30, TM-33.
- **Note:** F-CORE-42 single-loan charge-off is C12's under coverage review D19; the Library lists C13 only (P-08).

### C13 Default, workout, foreclosure and REO

- **Requires:** C6, C9, C10, C12.
- **Formulas assumed:** F-CORE-01 Interest-only payment (Actual/360); F-CORE-05 Per diem interest; F-CORE-22 Extension fee; F-CORE-23 Loss severity; F-CORE-31 Default interest; F-CORE-42 REO carrying value and charge-off; F-MF-12 In-place interest coverage (bridge).
- **Formulas introduced:** none.
- **Concepts introduced (home):** TM-35 Workout economics, TM-38 Bankruptcy and bankruptcy-remote borrowers.
- **Concepts revisited:** TM-01, TM-04, TM-05, TM-07, TM-08, TM-14, TM-17, TM-19, TM-22, TM-30, TM-31, TM-32, TM-34.

### C14 Credit memo, committee and portfolio context

- **Requires:** C6, C8, C10, C11, C12, C13.
- **Formulas assumed:** F-CORE-14 Loan-to-value (LTV); F-CORE-19 Maximum loan (lowest of all tests); F-CORE-23 Loss severity; F-CORE-24 Adjusted liquid assets; F-CORE-25 Required post-closing liquidity; F-CORE-26 Adjusted net worth; F-CORE-27 Experience count and tier; F-CORE-29 Aggregate sponsor exposure; F-CORE-42 REO carrying value and charge-off; F-CORE-45 Present and future value (time value of money); F-MF-13 Value-add bridge maximum loan; F-MF-20 Bridge exit take-out test; F-COM-08 Three-test loan sizing; F-COM-09 Rollover-stressed NCF; F-COM-10 Bridge exit test (take-out DSCR).
- **Formulas introduced:** F-CORE-30 Bucket concentration; F-CORE-43 Bucket headroom.
- **Concepts introduced (home):** TM-36 Loan valuation at a market yield, TM-37 Lifetime expected loss and the allowance.
- **Concepts revisited:** TM-01, TM-02, TM-05, TM-06, TM-07, TM-08, TM-10, TM-12, TM-19, TM-20, TM-21, TM-22, TM-23, TM-25, TM-26, TM-28, TM-29, TM-32, TM-34, TM-35.
- **Note:** F-CORE-45 is assumed for TM-36 (loan price).

## 3. Flags: use before the home module, and fixes

| # | Module | Kind | Item | Finding | Fix |
| --- | --- | --- | --- | --- | --- |
| P-01 | C2 | formula before home | F-CORE-05 per diem; F-CORE-22 extension fee | C2 T6 works default interest as ($133.44 − $89.69) × 45 = $1,968.75 (F-CORE-05). C2 T5 works the extension fee $340,000 × 0.50% = $1,700 (F-CORE-22). Per diem is taught in C3; the extension fee in C8 and C12. | Give both as stated figures from the deal file, with a pointer ("C3 shows how to compute this"). Keep the rating decision in C2. |
| P-02 | C8 | concept before home | TM-19 expected loss | C8 4.1 item 3 builds price from cost of funds plus expected loss. Coverage review D6 makes C14 O7 the owner of expected loss. | Superseded 22 Nov 2026 (professor review 3). C2 is the home at level 2, with labelled illustrative numbers. C8 O5 revisits at level 4. C14 O7 applies it to the allowance. |
| P-03 | C2, C6 | concept before home | TM-06 concentration risk | C2 O4 and C6 O6 apply the sponsor cap (CORE-CONC-01) before C14 O4 teaches concentration as correlated risk. | Add a 150-word mechanism paragraph to C2 T4. C2 becomes the home; C14 deepens to portfolio buckets. |
| P-04 | C10 | concept before home | TM-32 loss severity and recovery timing; F-CORE-23 | C10 O5 and T7 compute loss severity (F-CORE-23) before C13, which syllabi notes B1 and the Library name as home. | Make C10 the home (this map). C13 revisits at levels 4-5. Add C10 to the F-CORE-23 Modules line in the Formula Library. |
| P-05 | C5 | concept before home | TM-23 refinance risk; F-MF-20 | C5 O5 content teaches "why the exit test binds on DSCR" with F-MF-20. C8 owns the exit (coverage review D13). | Keep C5 on leverage (cap rate versus constant). State the exit result as a given with a pointer to C8 T6. |
| P-06 | C0 | concept before home (level) | TM-23 refinance risk | C0 O5 asks the learner to Analyze (level 4) refinance and collateral risk before C8 teaches refinance risk. | Applied. C0 O5 now reads "Explain how the cycle phase shows in four indicators, using a documented past downturn, and why refinance risk follows" (level 2). C8 O6 and C13 O2 analyze the cycle at level 4. |
| P-07 | C6 | revisit before home | TM-22 capital stack | Syllabi notes B1 list C6 (read JV and promote) as a revisit of the capital stack, but C6 comes before its C8 home. C8 does not teach the capital stack at all yet. | Settled. C6 is the home of TM-22 (C6 O7, level 4). C8 O7 revisits with combined leverage. |
| P-08 | C12 | formula before Library module | F-CORE-42 | C12 O5 uses charge-off (F-CORE-42). The Library lists C13 only. Coverage review D19 gives C12 the single-loan charge-off. | Add C12 to the F-CORE-42 Modules line. No blueprint change. |
| P-09 | C3 | missing citation | F-CORE-45 to -49 | The C3 blueprint says an IRR formula is needed. F-CORE-45 to -49 now exist and list C3. | Cite F-CORE-45 to -49 in C3 O2, O3 and O6. |
| P-10 | C7 | missing formula | F-CORE-38, F-CORE-39 | C7's two calculations depend on reserved IDs not yet in the Library. | Owner adds both formulas to the Course Bible Library tab, then `npm run fixtures`. |
| P-11 | all | Library metadata | Modules lines | Core blueprints teach many formulas that the Library lists only for later or family modules: F-CORE-06, -28, -40 (C3); F-MF-02, -06, -09, -10, -12, F-COM-03, F-RES-07 (C4); F-RES-02, -03 (C5); F-CORE-22 and the F-MF, F-COM and F-RES sizing formulas (C8); F-RES-06, -18, F-COM-19 (C12). | Update each Modules line in the Course Bible Library to name the first core module, then re-export. The registry check (quality bar 7.2) should read this map, not the Modules lines, until then. |
| P-12 | C0, C8 | stale deal number | Cedar Court shortfall; Maple Run refinance | C0 T3 and T5 and C8 T6 quote a $253,677.46 shortfall. Running deals now give $279,377.46 (exit fee included). C0's self-check and C8's OJT use $338,000 and 1.02x; the refinance now fails at $245,000 and 1.00x and the exit is the sale. | Update both blueprints from data/running-deals/running-deals.md before M4 and M5 rewrites. |
| P-13 | C2 | stale deal fact | Maple Run exits | C2 T1 names the DSCR refinance as a way out for Maple Run. Running deals now say the refinance cannot repay; the exit is the sale. | Recast T1: the sale is the primary exit; the failed refinance becomes the example of an exit that does not work. |
| P-14 | C10 | number not in deal file | Birchwood recovery $3,150,000 | C10 WE10 uses a $3,150,000 recovery. That figure is not in data/running-deals/running-deals.md. | Labelled a C10 scenario assumption in TM-32 (22 Nov 2026). Adding it to the Running Deals tab stays an owner option. |
| P-15 | C4, C14 | formula before home | F-COM-09 rollover-stressed NCF | C14 O5 uses F-COM-09. C4 only previews rollover in T6, and the Library lists CM3 and CM4. | Work F-COM-09 in full in C4 T6 on Birchwood, or give C14 the stressed NCF as a stated figure. |
| P-16 | C3 | formula before home | F-MF-22 cap strike | C3 O5 is critical. It tests coverage at the higher of the note rate and strike plus spread, but the strike formula is taught in C8 O3. | Applied in the outcome: C3 uses a stated strike from the deal file (Cedar Court 4.25%), with a pointer to C8. |
| P-17 | C6, C7 | missing prerequisite | C5 valuation | C6 revisits TM-15 (home C5), and C7 O3 covers fraud in the after-repair value. Neither listed C5 upstream. | Applied: C5 added to the direct prerequisites of C6 and C7. |
| P-18 | C9 | concept before home | TM-38 bankruptcy | C9 O2 names recourse that springs on a voluntary filing before C13 teaches bankruptcy. | Preview only in C9 (level 1-2, with a pointer to C13 O5). |

**Concept homes the blueprints do not yet teach** (theory map status "missing"): TM-04 Default as the borrower's option to walk away (C2), TM-16 Real options and land value (C5), TM-22 Capital stack and subordination (C6), TM-26 Development feasibility: front door and back door (C8), TM-31 Intercreditor terms and mezzanine foreclosure (C9), TM-36 Loan valuation at a market yield (C14), TM-38 Bankruptcy and bankruptcy-remote borrowers (C13). Each now serves a named outcome (theory map, "Outcomes served"). A missing home is the more serious gap: every later revisit depends on it.

**What passes.** No module needs a later module. The coverage review's own sequence notes stand: C0 quotes a C8 result as a given; C2 uses plain ratios before C3; C7 names pre-release wire controls before C11 teaches them.

## Self-check

1. Does every module list its required modules and formulas? Yes (section 2 and `prerequisites.json`).
2. Is every assumed formula introduced in an earlier module? Yes. The generator stops if one is not.
3. Is every formula ID real? Yes: each was matched to a heading in the Formula Library. F-CORE-38 and -39 are listed only as missing (P-10).
4. Were blueprints scanned for concepts used before their home? Yes: 18 flags, each with a fix.
5. Was any blueprint, module or Course Bible text changed? No.

## What to look up yourself

1. **Course Bible §3 prerequisite column.** It still shows the old prerequisites. The owner decides whether to adopt the direct column above.
2. **Formula Library Modules lines** (P-11). Each needs the first core module; that is a Course Bible edit and a re-export.
3. **C10 WE10's $3,150,000 recovery** (P-14). Not in the running deals file; find where it came from.

## How to check it

1. Open `prerequisites.json`. For each module, every ID in `requires` must be lower-numbered, and each formula in `formulas` must appear in an earlier module's `formulas_introduced`.
2. Search a blueprint for `F-` IDs and compare them with section 2. Pointer-only mentions are expected to be missing.
3. Open `data/running-deals/running-deals.md` and search for 253,677.46 and 338,000. Neither should appear, which confirms P-12.
4. Pick one flag, open the named blueprint row, and confirm the use and the home module.
