# C8 blueprint: Loan structuring and sizing: leverage tests, reserves, pricing

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Module | C8, BPL-CORE (QAS Self Study program in an integrated series) |
| Provider | BPL Academy |
| Knowledge level | Intermediate (qas-spec.md) |
| Field of study | Finance (sizing and pricing math) and Specialized Knowledge (policy limits, structure), split by content time (Std 7.01.1) |
| Current lesson | `modules/core/c08/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Blueprint status | v0 draft for owner review, 22 Nov 2026. Changes no lesson, policy or deal file |
| Needs analysis | `docs/curriculum/needs-analysis.md` (task IDs below) |

## 1. Module purpose

C8 builds the underwriter's core skill: turning value, cost and cash flow into a loan amount, reserves, price and structure that the policy allows and the exit can repay. It joins C3 (math), C4 (NOI and NCF), C5 (value) and C6 (tier), and feeds C10 (usury), C12 (extensions and draws) and C14 (the memo's sizing table).

## 2. Learning objectives

By the end of C8, you will be able to:

| # | Objective (one verb, LD-01) | Bloom | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Calculate** the loan each leverage test allows: LTV, LTC, LTARV and purchase advance (F-CORE-14, -15; F-RES-02, -04; RES-FF-01 to -04; MF-BR-02 to -04; COM-BR-09). | 3 Apply | U5, O4 |
| O2 | **Determine** the binding test across leverage, DSCR and debt-yield results, and the change in value, income or rate that would move it (F-CORE-16 to -19; F-COM-08; F-MF-13, -14; CORE-PRC-05). | 4 Analyze | U5, U9 |
| O3 | **Size** a bridge's day-one advance, future funding, rate-cap strike and interest reserve (F-CORE-20; F-MF-12, -21, -22; F-COM-17; F-RES-16; COM-BR-03 to -05; MF-BR-07, -09, -10). | 3 Apply | U5, U6 |
| O4 | **Calculate** the note rate, points and all-in cost screen for an RTL, a floating bridge and a fixed term loan (F-CORE-28, -06, -40; F-MF-24; F-COM-18; CORE-PRC-01 to -03; RES-DSCR-12; MF-BR-14; COM-BR-06). | 3 Apply | U5, O4, U8 |
| O5 | **Analyze** a bridge's exit by solving for the break-even income and take-out rate, and test a stated what-if (F-MF-20; F-COM-10; MF-BR-08; COM-BR-09). | 4 Analyze | U10, S5 |
| O6 | **Recommend** a complete structure (amount, reserves, recourse, prepayment, extensions, cap) for a request, and justify each term with rule IDs. | 5 Evaluate | O4, U9, K2 |

**Bloom mix:** 3 Apply, 2 Analyze, 1 Evaluate. All 6 at Apply or above.

**Conflict to resolve (owner).** LD-02 limits core modules to levels 2-3. Update it in the live Course Bible to match the depth decision.

## 3. Content map

| Obj | Concepts | Real rules and market practice (primary source) | Model policy |
| --- | --- | --- | --- |
| O1 | Value basis (lower of price and appraisal); total cost incl. future funding; ARV; purchase advance; why limits rise with tier | Bank comparator: supervisory LTV limits are 65% raw land, 75% land development, 80% commercial and multifamily construction, 85% 1-4 family construction and 85% improved property [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, Cornell LII; checked 22 Nov 2026]. Loans above these limits should not exceed 100% of capital in aggregate, 30% for non-1-4 family [VERIFY: same; checked 22 Nov 2026]. Why bank buyers care: see C14 and the capital-markets gap in the needs analysis | F-CORE-14, -15; F-RES-02, -04, -13; RES-FF-01 to -04; MF-BR-02 to -04; COM-BR-05, -09 |
| O2 | Loan constant; unrounded K; DSCR vs debt yield (rate- and term-independent); negative leverage; solving backwards for the binding input | OCC, *Comptroller's Handbook: Commercial Real Estate Lending* v2.0 (Mar 2022), sections "Debt Service Coverage Ratio", "Debt Yield", "Loan-to-Value" (needs-analysis source S4). Negative leverage: loan constant above cap rate (F-CORE-44 interpretation) | F-CORE-04, -16 to -19, -44; F-COM-08; F-MF-13, -14; F-RES-07, -17; COM-TRM-09; MF-TRM-02 to -04; RES-DSCR-01 to -03; CORE-PRC-05; D-CORE-17 |
| O3 | Day-one vs total commitment; holdbacks in arrears; in-place coverage at max(note, strike + spread); cap strike that keeps 1.00x; shortfall vs full reserve; ground-up reserve inside cost | SOFR is a volume-weighted median of overnight Treasury repo trades, published each business day by the New York Fed [VERIFY: newyorkfed.org SOFR page; checked 22 Nov 2026]. The LIBOR Act put a Board-selected replacement into LIBOR contracts that lacked a workable fallback [VERIFY: 12 U.S.C. 5803(a)-(b), Cornell LII; checked 22 Nov 2026]. Data series: FRED `SOFR`, `SOFR30DAYAVG` | F-CORE-20; F-MF-12, -21, -22; F-COM-17; F-RES-16, -20; COM-BR-03, -04, -05; MF-BR-07, -09, -10; RES-FF-07; RES-GU-02 to -07; D-CONV-01; D-CORE-27 |
| O4 | Price build-up (cost of funds, expected loss, servicing, margin); tier grid; adjusters; points on commitment; SOFR spread; Treasury floor; all-in cost; usury exemption before rate | Usury: test the property state's row before the term sheet. Ohio business loans to an LLC are exempt [VERIFY: ORC 1343.01(B)(6) via State Law Table SLT-OH-01; checked 20 Nov 2026]. A North Carolina loan of this size to an LLC is an exempt loan [VERIFY: G.S. 24-9 via SLT-NC-02; checked 20 Nov 2026; ncleg.gov returned 403 on 22 Nov 2026]. Indiana: SLT-IN-02. Data series: US Treasury daily par yield curve and FRED `DGS10` for F-COM-18 | F-CORE-06, -28, -40; F-MF-24, -25; F-COM-18; CORE-PRC-01 to -05; RES-DSCR-12; MF-BR-14; MF-TRM-08; COM-BR-06; COM-TRM-04 |
| O5 | Take-out sizing; exit cushion; break-even NCF; break-even take-out rate; extension as a second chance | Refinance risk near maturity is an examiner focus; CRE loans are named among the loan types most affected [VERIFY: OCC Bulletin 2024-29, *Commercial Lending: Refinance Risk*, 3 Oct 2024; occ.gov; checked 22 Nov 2026 (Gate 1 review)] | F-MF-20; F-COM-10; F-RES-24; MF-BR-08, -11; COM-BR-01, -02, -09; CORE-SVC-01, -07 |
| O6 | Recourse vs non-recourse with carve-outs; completion guaranty; prepayment (none, step-down, yield maintenance, defeasance); extension tests; cap term | A REMIC may hold a defeased mortgage only if the substitute collateral is government securities, the documents allow it, the release eases a "customary commercial transaction", and it is not within 2 years of the startup day [VERIFY: 26 CFR 1.860G-2(a)(8), Cornell LII; checked 22 Nov 2026]. This is why CMBS loans defease rather than prepay | CORE-DOC-01 to -03; MF-BR-11, -12; COM-BR-01, -07; RES-FF-11, -12; RES-DSCR-11; MF-TRM-06; COM-TRM-05, -06; F-COM-24; F-CORE-22 |

**Policy and library gaps (stop and ask).**

| Gap | Owner action |
| --- | --- |
| P-C8-1: no standard stress grid (rate, NCF or value shocks) | O5 uses break-even solving and the stated running-deal what-ifs only. Add a grid to policy if wanted |
| P-C8-2: COM-TRM-05 allows yield maintenance, but no Library formula exists | Add a formula (new F-COM ID) or teach yield maintenance as a concept with no scored math |
| P-C8-3: F-CORE-40 lists C10 as its module | Confirm C8 may use it as a pricing screen, with the state test left to C10 |
| P-C8-4: no running deal is ground-up | The U6 primer uses the Library's F-RES-20 and F-RES-16 test cases, labelled "illustrative", until a deal is added |

## 4. Depth targets

### 4.1 Add

1. **Exit stress by break-even (O5, task U10).** The needs analysis flags exit stress-testing as uncovered. Solve for the NCF and take-out rate at which the exit just repays the commitment (section 5, T6). **C8 owns the break-even method** (coverage review, 22 Nov 2026). C12 applies it at extension and C14 at committee; neither reteaches it.
2. **Cap-strike sizing (O3).** Why a cap strike is set off coverage, not today's SOFR (F-MF-22 common mistake). **C3 owns floating-rate mechanics** (SOFR construction, Term versus daily SOFR, the LIBOR Act and Regulation ZZ). C8 recaps them in two sentences.
3. **Pricing theory (O4).** Rate as cost of funds plus expected loss plus servicing plus margin. Points as up-front yield. The all-in cost screen (F-CORE-40) and why it is not an APR. Business-purpose loans fall outside TILA (C1), so no APR is disclosed.
4. **Prepayment and recourse design (O6).** Step-down (F-COM-24), yield maintenance (concept, P-C8-2) and defeasance (26 CFR 1.860G-2(a)(8)). Recourse by size and leverage (MF-BR-12, COM-BR-07, COM-TRM-06). **C8 owns the premium designs and their pricing.** C10 owns their legal enforceability (perfect tender, penalty doctrine) and does not reteach the designs.
5. **Bank comparator (O1).** Apply C2's supervisory LTV table (12 CFR Part 34, Subpart D, Appendix A) to each running deal's sizing. C2 teaches the table; C8 does not reteach it. It shows why loan buyers re-test leverage.
6. **Construction and rehab feasibility primer (O3, task U6; needs analysis §4 item 6).** RES-GU-02 to -07: LTC by build count, equity first, interest reserve inside cost. Add budget review: line items against a schedule of values, contingency, soft versus hard costs, contractor review and completion risk. Source: OCC CRE handbook, "Underwriting ADC Loans" (Mar 2022). No contingency or contractor limit exists in the Model Credit Policy, so none is scored: owner decision (coverage review, open item 5). Core primer only; C12 runs draws; R3, M5 and CM5 go deeper. Add about 1,000 words, offset by the floating-rate words moved to C3, so the total stays 22,000.

### 4.2 Deepen

1. **Debt yield (O2).** Explain why it ignores rate and amortization, and why lenders added it after 2008. Source: OCC CRE handbook "Debt Yield".
2. **Solving backwards (O2).** Birchwood: LTV binds. To lend the DSCR result, value would need to be $3,936,238.02 ÷ 65% = $6,055,750.80. A $3,995.52 drop in NCF makes DSCR bind instead.
3. **Negative leverage (O2).** Link the lesson's CRED iQ point to F-CORE-44 and F-CORE-04 with numbers.

### 4.3 Correct

1. Objectives 3 and 4 each hold two or three verbs ("Select ..., round down ... and name"; "Size ... and decide"). LD-01 allows one. Rewritten as O2 and O3.
2. The alignment matrix maps O5 (pricing) to OJT rubric item 1, which tests sizing. Add a pricing rubric item.
3. Practice item 4 shows only F-MF-20's DSCR leg. F-MF-20 is the lower of that and 80% × $8,600,000 = $6,880,000. Show both legs; the DSCR leg, $5,583,273.69, binds.
4. The OJT model answer shows the P&I constant rounded (0.00716412) in one line and unrounded (0.0071641225) in the next. Show the unrounded constant throughout, and round only the payment to the cent (F-CORE-03 convention).
5. The real-world check cites CREFC pages. The needs analysis found CREFC blocked (HTTP 403) on 22 Nov 2026. Re-open them or replace with another dated source.
6. Quiz structure: two 12-item sets do not meet QAS at the projected credits. Rebuild (section 6).
7. Course Bible §3 lists C3 and C5 as prerequisites. C8 also needs C4 (NCF) and C6 (tier). Make it C3, C4, C5 and C6.

### 4.4 Cut

1. Trim the T2 "Residential DSCR primer" to the rules the OJT needs. R4 teaches DSCR rental underwriting in full.
2. Keep cash management (lockboxes, sweeps, F-COM-19) out. CM4 owns it.

## 5. Sequence

All numbers below are from `data/running-deals/running-deals.md` or the Formula Library, unless marked "computed for this blueprint". The lesson must recompute those in code before use.

| # | Chunk (min) | Obj | Worked example | Practice |
| --- | --- | --- | --- | --- |
| 0 | Hook (5) | all | RD-COM-01 term: LTV $3,900,000.00; DSCR $3,936,238.02; debt yield $4,822,222.22. Loan $3,900,000; LTV binds | n/a |
| T1 | Leverage tests (20) | O1 | RD-RES-01, Tier 2: LTC 85% × $400,000 = $340,000; LTARV 70% × $520,000 = $364,000; purchase 85% × $300,000 + $100,000 = $355,000. LTC binds. Then the 12 CFR 34 comparator | RD-MF-01: LTC $5,400,000; stabilized LTV $6,020,000; as-is plus capex $5,140,000 |
| T2 | Income tests and the binding test (25) | O2 | RD-COM-01: K = $330,772.68 ÷ $3,900,000 = 0.0848135077; DSCR $3,936,238.02. Solve backwards: value $6,055,750.80 (computed for this blueprint), or NCF $3,995.52 lower | RD-MF-01 debt yields: 9.10% as-is, 10.89% stabilized |
| T3 | Bridge structure and floating rate (25) | O3 | RD-COM-01: day one $2,860,000; commitment $3,520,000; LTC cap $3,626,000. Coverage $254,000 ÷ $235,950 = 1.08x at 8.25%, no reserve. What-if NCF $200,000: shortfall reserve $53,925.00. RD-MF-01: maximum strike $395,000 ÷ $4,340,000 − 4.00% = 5.101% (F-MF-22) | RD-MF-01 coverage: $395,000 ÷ $358,050 = 1.10x |
| T3b | Ground-up primer (10) | O3 | F-RES-20 and F-RES-16 Library test cases, labelled illustrative (P-C8-4) | One illustrative case |
| T4 | Pricing and the all-in screen (20) | O4 | RD-RES-01: 10.00% + 0.25% = 10.25%; points $5,100.00; all-in screen 10.25% + 1.50% ÷ 1 = 11.75% (F-CORE-40); Ohio exemption first (CORE-PRC-03). RD-MF-01: 3.65% + 3.75% + 0.25% = 7.65%; all-in 8.15% over 24 months (F-CORE-40 test 2) | RD-MF-01 origination $51,400.00; usury row SLT-NC-02 |
| T5 | Prepayment, recourse and extensions (15) | O6 | F-COM-24: year 2 on $3,850,000 = $154,000.00. Defeasance and the REMIC 2-year rule. RD-MF-01: non-recourse with carve-outs at $5,140,000 (MF-BR-12) | Match four structures to their rules |
| T6 | Exit stress by break-even (20) | O5 | RD-MF-01: break-even stabilized NCF = $5,140,000 × 1.25 × 0.0802396631 = $515,539.84, 7.94% under the $560,000 plan (computed for this blueprint). Break-even take-out rate about 7.89%, so agency about 7.39%, 84 bp above 6.55% (computed for this blueprint; recompute with payment rounding). Stated what-if: NCF $500,000 gives $4,886,322.54, short $253,677.46 | RD-COM-01: break-even NCF $414,766.09, 4.43% under $434,000; break-even take-out rate about 8.28% vs 7.75% (computed for this blueprint) |
| T7 | Recommend a structure (15) | O6 | Walk RD-RES-01's term sheet line by line with rule IDs | RD-MF-01: write the full structure and justify each term |
| X | Final exam (separate) | all | n/a | Form A or B |
| OJT | Extra (45) | all | Maple Run DSCR refinance sizing table ($338,000; 1.02x), with a pricing rubric item added | n/a |

## 6. Assessment plan

Sized from 4.6 projected credits (section 7) and `docs/accreditation/qas-spec.md`. Multiple choice only, four options, feedback on every option, no overlap between review and exam items.

| Obj | Review questions | Exam Form A | Exam Form B | Critical items (per form) |
| --- | --- | --- | --- | --- |
| O1 | 3 | 4 | 4 | 1 (a leverage result that changes the loan) |
| O2 | 3 | 5 | 5 | 2 (binding test; rounding down per CORE-PRC-05) |
| O3 | 4 | 5 | 5 | 1 (interest reserve required or not) |
| O4 | 3 | 5 | 5 | 0 |
| O5 | 3 | 5 | 5 | 0 |
| O6 | 3 | 4 | 4 | 0 |
| **Total** | **19** | **28** | **28** | 4 |

- **Minimums at 4.6 credits:** review 3 × 4 + 2 = 14; exam 5 × 4 + 4 = 24. Plan meets them.
- **Build rule:** review 4 × 4.6 = 18.4, rounded up to 19. Exam 6 × 4.6 = 27.6, rounded up to 28 per form; at least 2 per objective. Met.
- **Critical items** follow Course Bible §3: a wrong sizing result that changes the loan amount is a critical credit error.
- **Coverage:** all 6 objectives examined. Pass mark 80% and all critical items correct.

## 7. Hour estimate

| Input | Projected |
| --- | --- |
| Words counted (excludes intro, instructions, glossary, job aid appendix) | 22,000 (current lesson: 4,140 words in total) |
| Review questions | 19 |
| Practice exercises | 14 |
| Exam items (one form) | 28 |
| Audio or video (not narration) | 0 minutes; one optional calculator walk-through only if it is not narration of the text |

**Credit calculation (Std 7.02.5-.7):**

1. Words: 22,000 ÷ 180 = 122.222 minutes.
2. Questions: (19 + 14 + 28) × 1.85 = 61 × 1.85 = 112.850 minutes.
3. Media: 0.000 minutes.
4. Total: 235.072 minutes ÷ 50 = 4.701, rounded down to **4.6 credits**.

About 3.9 hours, against 3 hours in Course Bible §3. This is close to the LD-03 cap of 4 hours. If the final lesson runs over, split C8 into "Sizing" (O1-O3) and "Pricing and structure" (O4-O6).

## 8. Prerequisites and overlaps

**Prerequisites.** C3 (payment, ADS, loan constant), C4 (NOI and NCF), C5 (as-is, ARV, as-stabilized value) and C6 (tier). Advance preparation: none.

| Topic | C8 does | Left to |
| --- | --- | --- |
| Usury and fees | Runs the F-CORE-40 screen and checks for an exemption | C10: state rules and fee inclusion |
| Draws and extensions | Sets the holdback and extension terms | C12: draw administration, extension decisions (F-CORE-22) |
| Sizing table in the memo | Produces it | C14: memo section 5 (CORE-AUTH-02) |
| Family sizing | Core tests on all three deals | R2, R4; M3, M4; CM3, CM4 (cash management, F-COM-19) |
| Construction | Primer only | R3, M5, CM5 |
| Loan sale and capital markets | Bank LTV comparator only | C14 (new O2): buyer eligibility, repurchase, risk retention |
| Floating-rate mechanics | Cap strike only | C3 owns |
| Prepayment premiums | Designs and pricing (owned here) | C10: enforceability under state law |
| Exit break-even | Owned here | C12 (extension) and C14 (committee) apply it |

## Self-check

| Request item | Status |
| --- | --- |
| 8-part format | Done |
| 6 objectives, all Apply or above | Done |
| Objectives mapped to tasks | Done (U10 and U6 gaps now partly covered) |
| Primary sources opened | Done on Cornell LII and newyorkfed.org; state usury rests on the State Law Table (checked 20 Nov 2026) |
| Add, deepen, correct, cut | Done |
| QAS sizing and credit formula | Done |
| No invented policy numbers | Done; break-even figures are computed from deal data, not limits; four gaps listed |

## What to look up yourself

1. Open the OCC CRE handbook (Mar 2022) "Debt Yield" section and quote its definition in the lesson.
2. Re-check SOFR and the 10-year Treasury on the day the lesson is written. Label them as dated inputs (D-CORE-27).
3. Re-open G.S. 24-9 on ncleg.gov (403 on 22 Nov 2026).

## How to check it

1. `=22000/180+(19+14+28)*1.85` should give 235.072; divided by 50 gives 4.701.
2. `=5140000*1.25*0.0802396631` should give 515,539.84.
3. `=3520000*1.3*(319050.84/3520000)` should give 414,766.09.
4. `=3936238.02/0.65` should give 6,055,750.80.
