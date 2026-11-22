# Theory map: BPL core course (C0-C14)

**Model policy for training - not for live lending decisions.**

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | BPL-CORE, C0-C14 |
| Quality bar rows | 6.1 (theory map), 6.2 (mechanism), 6.6 (misconceptions), 6.7 (cases and cycles) |
| Inputs | `docs/standards/quality-bar.md` v2; `docs/curriculum/university-syllabi-notes.md` (sections B and F); `c00`-`c14-blueprint.md`; `coverage-review.md`; `needs-analysis.md`; `docs/design/cfi-cref-comparison.md` section H; `docs/credit-policy/model-credit-policy.md`; `data/running-deals/running-deals.md`; `foundations-changes-2026-11-22.md`. All snapshots current per `docs/SNAPSHOT.md` (22 Nov 2026) |
| Machine-readable twin | `docs/curriculum/theory-map.json` |
| Prepared | 22 Nov 2026 |
| Status | v1 for owner review. Professor and CCO review fixes applied 22 Nov 2026 (see `course-frame-summary.md`). Author material, not learner-facing. No blueprint, module or Course Bible text was changed |

**What this is.** Every core concept gets one home module, where its mechanism is taught in full. Later modules revisit it at a stated Bloom level. Earlier modules may only preview it: name it at level 1 or 2 and point to the home. `prerequisites.md` checks the blueprints against this rule.

**Sources of the concept list.** Quality bar 6.1 (eight concept groups, here TM-01, -04, -05, -06, -11, -19, -22, -23, -31, -32). Syllabi notes section B2 (TM-02, -08 to -10, -12, -14 to -16, -21, -24, -26, -27, -29, -36, -37). The task's construction set (TM-25, -27, -28, -29) and risk-based pricing (TM-20). Seven concepts were added so that every module has a home mechanism (TM-03, -07, -13, -17, -18, -30, -33 to -35).

**Rules followed.** No policy limit, threshold or rate is created. Every number is from the running deals, a blueprint, the Formula Library, or syllabi notes section D, where it is marked illustrative. Illustrative numbers were recomputed in Python on 22 Nov 2026. Readings come from syllabi notes section F; none has been opened page by page yet.

**Bloom levels.** 1 Remember, 2 Understand, 3 Apply, 4 Analyze, 5 Evaluate, 6 Create.

**Keys.** TM-01 to TM-38 are the only theory keys in the frame. `outcomes.json` tags each outcome with these IDs, and each concept below lists the outcomes it serves (quality bar 7.3). Module IDs are C0-C14; the two-digit form appears only inside outcome IDs such as C08-O5.

**Citation standard (6.5).** One edition per concept: the 4th edition of Geltner et al. (Routledge, 2026) or the 2024 Release of Brueggeman and Fisher (McGraw Hill, 2024), both confirmed on publisher pages on 22 Nov 2026. TM-01 alone keeps the 2nd edition, the MIT session reading. Chapter numbers come from the syllabi notes and must be confirmed in the book before a lesson cites them. Journal papers added by the professor's review are marked to confirm before citing. Linneman is not cited; whether to cite it or drop it from quality bar 6.5 is an owner question.

## 1. Summary

| ID | Concept | Home (level) | Revisits (level) | Previews | Outcomes served | Blueprint status |
| --- | --- | --- | --- | --- | --- | --- |
| TM-01 | Real estate and credit cycles | C0 (2) | C5 (2), C8 (4), C13 (4), C14 (5) | - | C00-O5, C05-O2, C08-O6, C13-O2, C14-O5 | present |
| TM-02 | Lender types, funding routes and the capital partner's credit box | C0 (3) | C11 (3), C12 (3), C14 (4) | - | C00-O2, C00-O3, C11-O6, C12-O8, C14-O2 | present |
| TM-03 | The regulatory perimeter: business-purpose versus consumer credit | C1 (4) | C7 (4), C10 (3), C11 (3) | C0 | C01-O1, C01-O2, C01-O4, C07-O3, C10-O2, C11-O1 | present |
| TM-04 | Default as the borrower's option to walk away | C2 (2) | C5 (2), C8 (4), C9 (4), C10 (5), C13 (4) | - | C02-O8, C05-O5, C08-O1, C09-O2, C10-O7, C13-O6 | missing |
| TM-05 | Agency problems: adverse selection, moral hazard, originate-to-distribute and sponsor incentives | C2 (2) | C6 (4), C7 (4), C8 (4), C13 (4), C14 (4) | C0 | C02-O7, C06-O7, C07-O3, C08-O8, C13-O3, C14-O2 | partial |
| TM-06 | Concentration risk | C2 (2) | C6 (3), C14 (5) | - | C02-O4, C06-O6, C14-O4 | partial |
| TM-07 | Risk ratings and credit migration | C2 (3) | C12 (5), C13 (3), C14 (4) | C0 | C02-O6, C12-O5, C13-O1, C14-O8 | present |
| TM-08 | Time value of money and mortgage mathematics | C3 (3) | C8 (3), C12 (3), C13 (3), C14 (3) | - | C03-O2, C03-O3, C08-O3, C12-O7, C13-O3, C14-O2 | partial |
| TM-09 | Loan types and amortization | C3 (3) | C8 (4) | - | C03-O3, C03-O4, C08-O8 | present |
| TM-10 | Contract rate, yield to maturity and expected return | C3 (4) | C8 (4), C14 (4) | - | C03-O6, C08-O5, C14-O2 | present |
| TM-11 | Interest-rate risk on floating-rate loans | C3 (3) | C8 (3), C12 (4) | - | C03-O5, C08-O3, C12-O2 | partial |
| TM-12 | Pro forma realism and submarket evidence | C4 (4) | C5 (5), C8 (4), C14 (5) | - | C04-O3, C05-O7, C08-O6, C14-O5 | present |
| TM-13 | Cash-flow coverage and break-even | C4 (5) | C8 (4), C12 (4) | C2 | C04-O5, C04-O6, C08-O2, C12-O4 | present |
| TM-14 | Discounted cash flow, cost of capital and cap rates | C5 (3) | C8 (3), C13 (3) | - | C05-O2, C08-O2, C13-O7 | present |
| TM-15 | Financial leverage | C5 (4) | C6 (4), C8 (4) | C3 | C05-O5, C06-O7, C08-O2 | present |
| TM-16 | Real options and land value | C5 (2) | C8 (2) | C2 | C05-O8, C08-O4 | missing |
| TM-17 | Guaranty value and wrong-way risk | C6 (5) | C9 (4), C10 (5), C13 (5) | C2 | C06-O5, C09-O2, C10-O7, C13-O6 | partial |
| TM-18 | Fraud economics and the verification chain | C7 (4) | C11 (5) | C1 | C07-O3, C07-O4, C11-O4 | present |
| TM-19 | Expected loss and credit spreads | C2 (2) | C8 (4), C10 (3), C13 (4), C14 (3) | - | C02-O8, C08-O5, C10-O5, C13-O2, C14-O7 | partial |
| TM-20 | Risk-based pricing | C8 (4) | C14 (4) | C3 | C08-O5, C14-O2 | partial |
| TM-21 | Commercial mortgage underwriting: several tests and the binding constraint | C8 (4) | C14 (5) | C2 | C08-O1, C08-O2, C14-O1 | present |
| TM-22 | Capital stack and subordination | C6 (4) | C8 (4), C9 (2), C13 (4), C14 (4) | C0 | C06-O7, C08-O7, C09-O1, C13-O3, C14-O1 | missing |
| TM-23 | Refinance and extension risk | C8 (4) | C12 (5), C14 (4) | C0, C3 | C08-O6, C12-O3, C14-O5 | present |
| TM-24 | Prepayment option and prepayment premiums | C8 (3) | C10 (5) | C3 | C08-O8, C10-O4 | present |
| TM-25 | Development phases and phased risk | C8 (4) | C12 (4), C14 (5) | C0, C5 | C08-O4, C12-O1, C14-O1 | partial |
| TM-26 | Development feasibility: front door and back door | C8 (3) | C14 (4) | C5 | C08-O4, C08-O6, C14-O1 | missing |
| TM-27 | Interest during construction | C8 (3) | C12 (3) | - | C08-O4, C12-O1 | partial |
| TM-28 | Completion and cost-overrun risk | C8 (4) | C9 (3), C12 (5), C14 (5) | C6 | C08-O4, C09-O2, C12-O1, C14-O1 | partial |
| TM-29 | Take-out risk | C8 (4) | C12 (5), C14 (5) | - | C08-O6, C12-O3, C14-O5 | partial |
| TM-30 | Lien priority and perfection | C9 (4) | C11 (2), C12 (3), C13 (4) | - | C09-O3, C11-O5, C12-O1, C13-O4 | present |
| TM-31 | Intercreditor terms and mezzanine foreclosure | C9 (2) | C13 (3) | C0 | C09-O1, C13-O3 | missing |
| TM-32 | Loss severity and recovery timing | C10 (4) | C13 (5), C14 (3) | C2 | C10-O5, C13-O2, C14-O7 | present |
| TM-33 | Conditions precedent and the point of no return | C11 (5) | C12 (3) | C2 | C11-O1, C12-O1 | present |
| TM-34 | Covenants, monitoring and early warning | C12 (4) | C13 (3), C14 (4) | C4 | C12-O4, C13-O1, C14-O8 | present |
| TM-35 | Workout economics | C13 (5) | C14 (4) | C10 | C13-O2, C13-O3, C14-O7 | present |
| TM-36 | Loan valuation at a market yield | C14 (3) | - | C0 | C14-O2 | missing |
| TM-37 | Lifetime expected loss and the allowance | C14 (2) | - | C2, C12 | C14-O7 | partial |
| TM-38 | Bankruptcy and bankruptcy-remote borrowers | C13 (4) | - | C9 | C13-O5 | missing |

Status: **present** means the home blueprint already teaches the mechanism. **Partial** means it teaches the procedure or part of the concept. **Missing** means no blueprint teaches it yet. Each concept below names the fix.

## 2. Module check: at least one mechanism per module (6.2)

| Module | Category | Home concepts | Count | Revisited here |
| --- | --- | --- | ---: | --- |
| C0 Program orientation and the BPL market | Foundations | TM-01, TM-02 | 2 | - |
| C1 Business purpose vs consumer: the purpose test and regulatory map | Foundations | TM-03 | 1 | - |
| C2 Credit fundamentals and the loan life cycle | Foundations | TM-04, TM-05, TM-06, TM-07, TM-19 | 5 | - |
| C3 Real estate finance math | Real estate analysis | TM-08, TM-09, TM-10, TM-11 | 4 | - |
| C4 Property cash flow: GPR to NOI | Real estate analysis | TM-12, TM-13 | 2 | - |
| C5 Valuation | Real estate analysis | TM-14, TM-15, TM-16 | 3 | TM-01, TM-04, TM-12 |
| C6 Borrower, sponsor and guarantor analysis | Underwriting | TM-17, TM-22 | 2 | TM-05, TM-06, TM-15 |
| C7 KYC, BSA/AML, OFAC and fraud red flags | Underwriting | TM-18 | 1 | TM-03, TM-05 |
| C8 Loan structuring and sizing | Underwriting | TM-20, TM-21, TM-23, TM-24, TM-25, TM-26, TM-27, TM-28, TM-29 | 9 | TM-01, TM-04, TM-05, TM-08, TM-09, TM-10, TM-11, TM-12, TM-13, TM-14, TM-15, TM-16, TM-19, TM-22 |
| C9 Loan documents, title, insurance and collateral | Legal and closing | TM-30, TM-31 | 2 | TM-04, TM-17, TM-22, TM-28 |
| C10 State law: licensing, usury, foreclosure and recourse | Legal and closing | TM-32 | 1 | TM-03, TM-04, TM-17, TM-19, TM-24 |
| C11 Closing and funding | Legal and closing | TM-33 | 1 | TM-02, TM-03, TM-18, TM-30 |
| C12 Servicing, draws and asset management | Managing the loan | TM-34 | 1 | TM-02, TM-07, TM-08, TM-11, TM-13, TM-23, TM-25, TM-27, TM-28, TM-29, TM-30, TM-33 |
| C13 Default, workout, foreclosure and REO | Managing the loan | TM-35, TM-38 | 2 | TM-01, TM-04, TM-05, TM-07, TM-08, TM-14, TM-17, TM-19, TM-22, TM-30, TM-31, TM-32, TM-34 |
| C14 Credit memo, committee and portfolio context | Managing the loan | TM-36, TM-37 | 2 | TM-01, TM-02, TM-05, TM-06, TM-07, TM-08, TM-10, TM-12, TM-19, TM-20, TM-21, TM-22, TM-23, TM-25, TM-26, TM-28, TM-29, TM-32, TM-34, TM-35 |

**Result.** All 15 modules have at least one home concept. Every concept serves at least one outcome in its home and in each revisit module. C8 is home to 9 of 38, down from 11 of 37: TM-19 moved to C2 and TM-22 to C6. TM-25 to TM-29 sit in a separate construction lesson inside C8. C8 still has only 4.9 minutes under the 240-minute cap, so splitting C8 into sizing and pricing, and construction and structure, stays an owner decision (owner decision 2 below).

## 3. Concepts

### TM-01. Real estate and credit cycles

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** Space markets clear slowly. Developers build on today's rents, and new supply arrives two or three years later, often after demand has turned. Vacancy then rises while rents and values fall together. Credit is easiest near the peak, when values are highest and recent losses are lowest. So loans made near a peak are sized on the top of the curve and default more often (MIT lec. 12: lifetime default by origination year tracks the cycle). A lender that sizes on current value is betting that value at maturity will be similar. The cycle explains why that bet fails in clusters, not one loan at a time.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Home | 2 Understand | Teaches the mechanism in full |
| C5 | Revisit | 2 Understand | cap rates widen in downturns; value at maturity differs from value at origination |
| C8 | Revisit | 4 Analyze | vintage effect; why debt yield entered US practice after 2008 |
| C13 | Revisit | 4 Analyze | workouts and REO cluster in busts |
| C14 | Revisit | 5 Evaluate | portfolio losses are correlated through the cycle |

**Standard-text reading.** None listed in syllabi notes section F. Nearest: Geltner, Miller, Clayton and Eichholtz, *Commercial Real Estate Analysis and Investments*, 2nd ed. (Thomson South-Western, 2007), Ch. 1-2 (MIT session 1 reading, section A1); DiPasquale and Wheaton (1992) and Mueller (1995), named in the C0 blueprint; confirm titles before citing; Wheaton, W. C. (1999), "Real Estate 'Cycles': Some Fundamentals", *Real Estate Economics* 27(2) (citation from the professor's review; paper not opened; confirm before citing); Geltner, D. (1991), "Smoothing in Appraisal-Based Returns", *Journal of Real Estate Finance and Economics* 4(3) (citation from the professor's review; paper not opened; confirm before citing).

**Common misconceptions.**

1. *"Today's appraised value is a fair guide to value at maturity."* Cedar Court's exit uses stabilized cash flow two years out. If stabilized NCF is $500,000, the take-out is $4,886,322.54 against a $5,165,700 payoff: short $279,377.46 (RD-MF-01).
2. *"Low default rates today mean the book is safe."* Defaults lag origination by years. Loans written at a peak look clean until values turn, then fail together.

**Historical episode (C0).** The commercial real estate boom and bust of the 1980s and early 1990s. Show overbuilding, falling values and bank losses as one cycle. Tie it to FIRREA and appraisal regulation (C5). Source: FDIC, *History of the Eighties: Lessons for the Future*, Vol. 1 (1997), Ch. 3, "Commercial Real Estate and the Banking Crises of the 1980s and Early 1990s". [VERIFY: FDIC, History of the Eighties, Vol. 1, Ch. 3; chapter title and 1997 date confirmed on fdic.gov publication page; chapter text not opened; checked 22 Nov 2026]

**Outcomes served (7.3).** C00-O5, C05-O2, C08-O6, C13-O2, C14-O5.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C0 O5 and depth item 5 (cycle models) teach it. Depth item 8 names the S&L crisis and 2008 only as history; add the FDIC chapter as the cited episode. P-06 applied: C0 O5 now explains the cycle (level 2); C8 and C13 analyze it (level 4).

### TM-02. Lender types, funding routes and the capital partner's credit box

*Origin:* Syllabi B2 (CMBS and securitization; REIT debt; loan valuation context).

**Mechanism (why it matters to a lender).** Most non-bank business-purpose lenders do not hold their loans. They fund through a warehouse line, a whole-loan sale or a securitization. Each capital partner has its own eligibility rules, advance rates and repurchase rights. A loan outside those rules cannot be financed or sold at par. So the partner's box quietly sets the lender's credit box. Bank and REIT lenders face different regulators and capital rules, which explains why they price and size differently.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Home | 3 Apply | Teaches the mechanism in full |
| C11 | Revisit | 3 Apply | collateral file delivery to a custodian or buyer (O6) |
| C12 | Revisit | 3 Apply | loan-level investor reporting (O8) |
| C14 | Revisit | 4 Analyze | eligibility, repurchase and risk retention analysis (O2) |

**Standard-text reading.** Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 19-20 "The Secondary Mortgage Market"; Ch. 21 "REITs"; Ch. 23 "Real Estate Funds"; Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 26 "Real Estate Investment Trusts (REITs)".

**Common misconceptions.**

1. *"A lender's credit policy is set only by its own risk appetite."* A loan that breaks a warehouse eligibility rule gets no advance, so the lender must fund it with its own equity. The buyer's box binds first.
2. *"Selling the loan removes all the lender's risk."* Sale agreements carry representations and warranties. A breach found later can force a repurchase at par.

**Outcomes served (7.3).** C00-O2, C00-O3, C11-O6, C12-O8, C14-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C0 O2-O3 and C14 O2 cover it. C14 needs the fictional buyer eligibility sheet (coverage review, open item 2).

### TM-03. The regulatory perimeter: business-purpose versus consumer credit

*Origin:* Added so C1 has a home concept (quality bar 6.2).

**Mechanism (why it matters to a lender).** Consumer credit law assumes a household borrower who cannot easily judge loan terms. Business-purpose and entity loans fall outside most of it. That exemption lowers cost and speeds closing. It also creates a strong incentive to dress a consumer loan as a business loan. If the purpose test fails, the lender can lose the exemption and face consumer-law remedies on a loan priced as commercial [VERIFY: 12 CFR 1026.3(a); checked 18 Nov 2026 per Course Bible §1]. Fair-lending law is the exception: it follows the credit, not only the consumer.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | names the two Reg Z exemptions only |
| C1 | Home | 4 Analyze | Teaches the mechanism in full |
| C7 | Revisit | 4 Analyze | occupancy fraud as a red flag |
| C10 | Revisit | 3 Apply | state purpose and licensing tests |
| C11 | Revisit | 3 Apply | use of proceeds and certifications at closing (O1) |

**Standard-text reading.** None listed in syllabi notes section F. Primary law: 12 CFR 1026.3(a) and its commentary (C1 blueprint).

**Common misconceptions.**

1. *"An LLC borrower makes any loan business purpose."* Reg Z looks at purpose as well as the borrower. A loan that funds a guarantor's own home is a red flag, whatever the borrower's form [VERIFY: 12 CFR 1026.3(a) and comment 3(a)-1; checked 18 Nov 2026 per Course Bible §1].
2. *"Business-purpose loans are outside fair-lending law."* Reg B covers business credit [VERIFY: 12 CFR 1002.2(g); checked 22 Nov 2026]. The Fair Housing Act reaches loans secured by residential real estate [VERIFY: 42 U.S.C. 3605(b)(1); checked 22 Nov 2026].

**Outcomes served (7.3).** C01-O1, C01-O2, C01-O4, C07-O3, C10-O2, C11-O1; previewed in C00-O1.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: present.** C1 O1-O4 teach it. Add one paragraph on why the exemption creates the disguised-consumer-loan incentive.

### TM-04. Default as the borrower's option to walk away

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** A non-recourse borrower can hand back the property instead of paying. That is a put option on the property, with the loan balance as the strike. The option gains value as property value falls toward the balance, and as value becomes more volatile. Equity below the loan is what keeps the option out of the money. That is the economic reason for LTV limits, equity-first rules and lower leverage on riskier collateral. Recourse and springing carve-outs raise the cost of exercising the option, so they change behavior, not only recovery.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Home | 2 Understand | Teaches the mechanism in full |
| C5 | Revisit | 2 Understand | value volatility and cap-rate sensitivity move the option |
| C8 | Revisit | 4 Analyze | why leverage limits fall as volatility rises; land and construction lowest |
| C9 | Revisit | 4 Analyze | carve-out guaranties make walking away costly (O2) |
| C10 | Revisit | 5 Evaluate | what recourse is worth after state deficiency rules (O7) |
| C13 | Revisit | 4 Analyze | strategic default in a workout |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 "Commercial Mortgage Analysis and Underwriting"; Titman, S. and Torous, W. (1989), "Valuing Commercial Mortgages: An Empirical Investigation of the Contingent-Claims Approach to Pricing Risky Debt", *Journal of Finance* 44(2) (citation from the professor's review; paper not opened; confirm before citing); Foote, C., Gerardi, K. and Willen, P. (2008), "Negative Equity and Foreclosure: Theory and Evidence", *Journal of Urban Economics* 64(2), for double-trigger default (citation from the professor's review; paper not opened; confirm before citing).

**Common misconceptions.**

1. *"Borrowers default only when they run out of cash."* A borrower with cash may still stop paying when the property is worth less than the loan. MIT's illustration: a 75% LTV loan, 15% annual value volatility and 7 years give about a 1-in-6 chance of being under water. Model convention: that figure assumes no amortization and a value drift of about 1.4% a year (log), measured at maturity only. At zero drift it is about 1 in 4 (23.4%). The chance of being under water at some point during the loan is higher: 38.8% at the same drift (recomputed 22 Nov 2026).
2. *"A full guaranty makes default impossible."* A guaranty raises the cost of walking away. It works only if the guarantor can pay when the property fails (TM-17).

**Outcomes served (7.3).** C02-O8, C05-O5, C08-O1, C09-O2, C10-O7, C13-O6.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: missing.** No C2 blueprint section teaches it. Fix: add about 400 words to C2 T1 ("Why loans fail"), with the MIT under-water example labelled illustrative.

### TM-05. Agency problems: adverse selection, moral hazard, originate-to-distribute and sponsor incentives

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** Borrowers know more about their projects than lenders do. Raising the rate to cover unknown risk drives away safe borrowers first (adverse selection, credit rationing). After closing, a borrower with little equity left gains from riskier choices, or from "bleeding" the property (moral hazard). A lender that sells its loans keeps less of the loss, so its screening incentive weakens (originate-to-distribute). Risk retention [VERIFY: 17 CFR 246.4(a); checked 22 Nov 2026 per needs analysis §4] and repurchase rights push that loss back. Sponsors paid by promote share the upside but not the downside below their equity. Collateral, equity first, guaranties and covenants are the lender's answers to all four.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | names risk retention and the 2008 crisis as history |
| C2 | Home | 2 Understand | Teaches the mechanism in full |
| C6 | Revisit | 4 Analyze | sponsor incentives; guaranty as an incentive device; read a JV and promote |
| C7 | Revisit | 4 Analyze | fraud as the extreme form of hidden information; broker-fed files |
| C8 | Revisit | 4 Analyze | equity first and recourse as structure |
| C13 | Revisit | 4 Analyze | moral hazard near default: deferred maintenance, diverted rents |
| C14 | Revisit | 4 Analyze | risk retention and repurchase in capital-partner terms (O2) |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 15 "Advanced Topics II: Capital Structure"; Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 18 "Structuring Real Estate Investments: Organizational Forms and Joint Ventures"; Not in section F (named in the C2 blueprint): Akerlof (1970) *QJE*; Stiglitz and Weiss (1981) *AER*. Confirm volume and pages; Akerlof, G. (1970), "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism", *Quarterly Journal of Economics* 84(3) (citation from the professor's review; paper not opened; confirm before citing); Stiglitz, J. and Weiss, A. (1981), "Credit Rationing in Markets with Imperfect Information", *American Economic Review* 71(3) (citation from the professor's review; paper not opened; confirm before citing); Keys, B., Mukherjee, T., Seru, A. and Vig, V. (2010), "Did Securitization Lead to Lax Screening? Evidence from Subprime Loans", *Quarterly Journal of Economics* 125(1) (citation from the professor's review; paper not opened; confirm before citing).

**Common misconceptions.**

1. *"A riskier borrower can always be approved at a higher rate."* A higher rate attracts the borrowers most willing to take risk and pushes safe ones to cheaper lenders. Lenders ration credit and demand equity instead.
2. *"If we sell the loan, its quality is the buyer's problem."* Buyers price and police the originator's incentive. Repurchase claims and risk retention return the loss to the originator.

**Formulas.** F-RES-09 Cash to close (flip purchase).

**Outcomes served (7.3).** C02-O7, C06-O7, C07-O3, C08-O8, C13-O3, C14-O2; previewed in C00-O3.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C2 O7 covers adverse selection, moral hazard and credit rationing. Fix: add one paragraph each on originate-to-distribute and sponsor promote to C2 T7, with a pointer to C14 O2 and C6.

### TM-06. Concentration risk

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** Loans to one sponsor, one state or one property type tend to fail together. Diversification only works if defaults are not correlated. A sponsor cap limits single-name exposure: one sponsor's failure can hit several loans at once. Portfolio buckets limit correlated exposure to one market or product. Capital partners and bank buyers set their own limits for the same reason.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Home | 2 Understand | Teaches the mechanism in full |
| C6 | Revisit | 3 Apply | aggregate sponsor exposure with affiliates (O6) |
| C14 | Revisit | 5 Evaluate | bucket share, headroom and participations to cure a breach (O4) |

**Standard-text reading.** None listed in syllabi notes section F. Regulator source: OCC Bulletin 2006-46 (C14 blueprint).

**Common misconceptions.**

1. *"A cap on any single loan size controls concentration."* Ten small loans to one sponsor can exceed one large loan. Maple Run's exposure test adds open loans: $340,000 + $0 = $340,000 against the Tier 2 sponsor cap (F-CORE-29; CORE-CONC-01).
2. *"A bucket share is tested before the new loan."* The new loan joins both the bucket and the portfolio total, so the share is tested after it (F-CORE-43 logic, C14 blueprint).

**Historical episode (C14).** Bank failures of 2008-2011 and the 2023 commercial real estate stress, read against the regulators' 2006 concentration guidance. Show the 2006 warning on CRE concentration, the concentrated books that later failed together, and office stress flagged in 2023. Source: OCC, Federal Reserve and FDIC, *Concentrations in Commercial Real Estate Lending, Sound Risk Management Practices*, 71 FR 74580 (12 Dec 2006); Federal Reserve, *Financial Stability Report* (May 2023), "Asset Valuations". [VERIFY: 71 FR 74580, interagency CRE concentration guidance, 12 Dec 2006; citation from the professor's review; not opened 22 Nov 2026] [VERIFY: Federal Reserve Financial Stability Report, May 2023, Asset Valuations: office fundamentals "particularly weak" in central business districts; checked 22 Nov 2026]

**Formulas.** F-CORE-29 Aggregate sponsor exposure; F-CORE-30 Bucket concentration; F-CORE-43 Bucket headroom.

**Outcomes served (7.3).** C02-O4, C06-O6, C14-O4.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: partial.** C14 O4 teaches correlation; C2 O4 and C6 O6 apply the sponsor cap earlier without the mechanism. Fix: add a 150-word mechanism paragraph to C2 T4 so C2 is the home. C2 O4 now names correlated defaults as the reason for sponsor caps.

### TM-07. Risk ratings and credit migration

*Origin:* Added: core lender concept (needs analysis S4, K4).

**Mechanism (why it matters to a lender).** A risk rating is the lender's shorthand for default likelihood and loss if default happens. Ratings migrate before losses appear. Catching a move from pass to special mention buys time to act while options remain. Ratings also drive reporting, accrual status and the allowance, so a late downgrade understates risk to managers and capital partners.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | names the rating scale |
| C2 | Home | 3 Apply | Teaches the mechanism in full |
| C12 | Revisit | 5 Evaluate | justify a rating with guarantor support and accrual status (O5) |
| C13 | Revisit | 3 Apply | re-rate on default and upgrade after cure |
| C14 | Revisit | 4 Analyze | validate ratings in loan review (O8) |

**Standard-text reading.** None listed in syllabi notes section F. Regulator source: SR 13-18 attachment 1 definitions (C2 blueprint).

**Common misconceptions.**

1. *"A loan that is current is a pass loan."* A current loan within 90 days of maturity with no confirmed exit is at least a 2 under CORE-SVC-07 (C2 blueprint, T6).
2. *"A rating changes only when a payment is missed."* Ratings should move on leading facts: a tenant notice, a value drop or a failed extension test.

**Outcomes served (7.3).** C02-O6, C12-O5, C13-O1, C14-O8.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: present.** C2 O6 and C12 O5 cover it.

### TM-08. Time value of money and mortgage mathematics

*Origin:* Syllabi B2 (four rules).

**Mechanism (why it matters to a lender).** A loan is a set of dated cash flows. Present value turns them into one comparable number. Four rules run every schedule. Interest is the prior balance times the period rate. Principal is the payment less interest. The new balance is the old balance less principal, and the first balance is the loan. Each loan type fixes one column and lets the others follow. Lenders need this to know the balance at maturity, which is what the exit must repay.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Home | 3 Apply | Teaches the mechanism in full |
| C8 | Revisit | 3 Apply | balloon balance and loan constant in sizing |
| C12 | Revisit | 3 Apply | payoff amounts |
| C13 | Revisit | 3 Apply | modified schedules |
| C14 | Revisit | 3 Apply | loan price at a market yield (TM-36) |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 2 "Present Value Mathematics for Real Estate"; Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 19-20 "Mortgage Basics I" and "II".

**Common misconceptions.**

1. *"A 30-year amortizing loan is nearly paid down at a 10-year maturity."* Most principal is repaid late. Birchwood's what-if balance after 120 payments is $3,118,446.42 on a $3,900,000 loan (F-CORE-49 test 1).
2. *"Monthly interest is the annual rate divided by 12 on every loan."* Bridge loans accrue Actual/360, so a 31-day month costs more than a 30-day one (F-CORE-01; CORE-PRC-06).

**Formulas.** F-CORE-01 Interest-only payment (Actual/360); F-CORE-02 Amortizing payment (principal and interest); F-CORE-05 Per diem interest; F-CORE-45 Present and future value (time value of money); F-CORE-46 Effective annual rate from a nominal rate; F-CORE-47 Remaining loan balance after k payments; F-CORE-49 Remaining balance with Actual/360 accrual.

**Outcomes served (7.3).** C03-O2, C03-O3, C08-O3, C12-O7, C13-O3, C14-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C3 teaches the math. Fix: cite F-CORE-45 to -49 in the C3 blueprint; it still says an IRR formula is needed, but F-CORE-48 now exists.

### TM-09. Loan types and amortization

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** Interest-only loans keep the payment low and leave the whole balance for the exit. Amortizing loans repay principal and lower the balance the exit must cover. Partial interest-only sits between the two. The choice shifts risk between today's cash flow test and tomorrow's refinance test. Constant-amortization, graduated-payment and negative-amortization loans are rare in business-purpose lending; they are named so the learner can spot them.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Home | 3 Apply | Teaches the mechanism in full |
| C8 | Revisit | 4 Analyze | amortization as a risk mitigant against refinance risk |

**Standard-text reading.** Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 4-5 (fixed and adjustable rate loans); Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 20.

**Common misconceptions.**

1. *"Interest-only is always the safer structure because the payment is lower."* Lower payment helps coverage now but leaves the full balance at maturity. MIT: an interest-only balloon "maximizes refinancing stress" (Geltner Ch. 17, MIT session 13).
2. *"The loan constant equals the note rate."* On an amortizing loan the constant includes principal, so it exceeds the rate (F-CORE-04).

**Formulas.** F-CORE-02 Amortizing payment (principal and interest); F-CORE-03 Annual debt service (ADS); F-CORE-04 Loan constant.

**Outcomes served (7.3).** C03-O3, C03-O4, C08-O8.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C3 O3-O4 cover it.

### TM-10. Contract rate, yield to maturity and expected return

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** The note rate is what the contract says. Points and fees paid up front raise the lender's yield, and more so if the loan pays off early. Default lowers the return actually earned below the promised yield. A lender that compares loans on note rate alone misprices short loans with points and risky loans with high coupons. C3 teaches contract rate versus yield; C8 adds expected return through expected loss (TM-19).

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Home | 4 Analyze | Teaches the mechanism in full |
| C8 | Revisit | 4 Analyze | expected return below yield (TM-19) |
| C14 | Revisit | 4 Analyze | price on a whole-loan sale |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 20 "Mortgage Basics II: Payments, Yields and Values"; Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 4-5 (fees and effective cost).

**Common misconceptions.**

1. *"The all-in cost screen is the lender's yield."* F-CORE-40 adds points straight-line. Maple Run's screen gives 11.75%; its true IRR on the real draw pattern is 12.081% nominal (F-CORE-48 test 3).
2. *"Points add the same yield whatever the loan's life."* Points spread over fewer months add more yield per year. Early payoff raises the yield effect of points.

**Formulas.** F-CORE-06 Origination points; F-CORE-40 All-in annual cost screen; F-CORE-48 Internal rate of return (IRR).

**Outcomes served (7.3).** C03-O6, C08-O5, C14-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C3 O6 covers it.

### TM-11. Interest-rate risk on floating-rate loans

*Origin:* Quality bar 6.1 (interest-rate risk, split from refinance and extension risk).

**Mechanism (why it matters to a lender).** A floating loan moves rate risk to the borrower. When SOFR rises, the payment rises while the property's income does not. Rate risk the lender passed on comes back as credit risk if coverage falls below 1.00x. A rate cap limits the borrower's rate, so the lender sizes and tests coverage at the cap strike, not at today's rate. When a cap expires, replacing it at higher cost is a second shock.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Home | 3 Apply | Teaches the mechanism in full |
| C8 | Revisit | 3 Apply | cap strike sizing (O3) |
| C12 | Revisit | 4 Analyze | cap payments and replacement in servicing (O2) |

**Standard-text reading.** Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 4-5 (adjustable rate loans); Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 20.

**Common misconceptions.**

1. *"A floating-rate loan protects the lender from rising rates."* The lender's coupon rises, but the borrower's coverage falls. Cedar Court's test rate is the higher of 7.65% and 4.25% + 4.00% = 8.25% (MF-BR-09, C3 blueprint T5).
2. *"A cap protects for the whole loan life."* A cap has a term. At Cedar Court's extension the borrower must buy more cap; the intrinsic floor is $19,275.00 (RD-MF-01).

**Historical episode (C3).** The end of LIBOR (optional). Explain why US loans now float over SOFR and how legacy contracts were moved. Source: Adjustable Interest Rate (LIBOR) Act, 12 U.S.C. 5801-5807; Regulation ZZ, 12 CFR Part 253. [VERIFY: 12 U.S.C. 5803(a)-(b), Cornell LII; checked 22 Nov 2026 per C8 blueprint] [VERIFY: 12 CFR Part 253; not opened 22 Nov 2026]

**Formulas.** F-MF-22 Maximum rate cap strike.

**Outcomes served (7.3).** C03-O5, C08-O3, C12-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C3 O5 teaches mechanics. Fix: add one paragraph to C3 T5 on rate risk turning into credit risk.

### TM-12. Pro forma realism and submarket evidence

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** Sellers and brokers forecast the best plausible case. A lender repaid from cash flow must underwrite the likely case. Rent growth, vacancy, capital spending and exit cap rate are the usual places where a pro forma hides optimism. Testing each against submarket evidence turns a sales document into an underwriting input.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C4 | Home | 4 Analyze | Teaches the mechanism in full |
| C5 | Revisit | 5 Evaluate | appraisal review (O6) |
| C8 | Revisit | 4 Analyze | sizing on underwritten, not pro forma, NCF |
| C14 | Revisit | 5 Evaluate | committee challenge |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 5 "Income Definitions".

**Common misconceptions.**

1. *"A broker pro forma is a neutral forecast."* It is written to sell. MIT PS1 compares broker and realistic cash flows for the same price; most of the gap sits in growth and capital spending (illustrative).
2. *"Market rent in an appraisal is what the tenant will pay."* Maple Run's qualifying rent is the lesser of the $2,450 lease and the $2,400 Form 1007 rent (RD-RES-01).

**Formulas.** F-CORE-07 Gross potential rent (GPR); F-CORE-08 Vacancy and credit loss; F-CORE-09 Effective gross income (EGI); F-CORE-10 Net operating income (NOI).

**Outcomes served (7.3).** C04-O3, C05-O7, C08-O6, C14-O5.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C4 O3 and depth item 8 cover it.

### TM-13. Cash-flow coverage and break-even

*Origin:* Added so C4 has a cash-flow mechanism; syllabi B2 (break-even ratio).

**Mechanism (why it matters to a lender).** A loan is repaid from net cash flow, not from net operating income. Reserves and leasing costs come first. DSCR measures the cushion between cash flow and debt service. Break-even occupancy shows how much income can be lost before the loan stops paying. A thin cushion means a small vacancy shock turns a performing loan into a default.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | names DSCR as a credit-box ratio |
| C4 | Home | 5 Evaluate | Teaches the mechanism in full |
| C8 | Revisit | 4 Analyze | maximum loan by DSCR |
| C12 | Revisit | 4 Analyze | covenant DSCR and sweeps |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 (DCR and break-even ratio).

**Common misconceptions.**

1. *"NOI and cash flow are the same thing."* NCF deducts reserves and leasing costs. Coverage on NOI overstates the cushion.
2. *"A DSCR above the minimum means the loan is safe."* Cedar Court's in-place coverage is $395,000 ÷ $358,050 = 1.10x; a modest income loss erases it (F-MF-12, C4 blueprint T5).

**Formulas.** F-CORE-11 Debt service coverage ratio (DSCR); F-CORE-12 Break-even occupancy; F-MF-09 Net cash flow (NCF); F-MF-12 In-place interest coverage (bridge); F-COM-03 Commercial net cash flow (NCF).

**Outcomes served (7.3).** C04-O5, C04-O6, C08-O2, C12-O4.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C4 O4-O6 cover it.

### TM-14. Discounted cash flow, cost of capital and cap rates

*Origin:* Syllabi B2 (DCF, OCC and r = y + g).

**Mechanism (why it matters to a lender).** Value is the present value of expected cash flows at an investor's required return. A cap rate is a shortcut: income yield equals required return less expected growth. So a cap rate moves when interest rates, risk premiums or growth expectations move. A lender relying on value must know which assumption would cut value most if it proved wrong.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C5 | Home | 3 Apply | Teaches the mechanism in full |
| C8 | Revisit | 3 Apply | value test in sizing |
| C13 | Revisit | 3 Apply | REO value at fair value less cost to sell |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 4 "Micro-level Valuation of Real Estate: DCF & NPV" and Ch. 11 "Finding the Cost of Capital"; Geltner, D. (1991), "Smoothing in Appraisal-Based Returns", *Journal of Real Estate Finance and Economics* 4(3), on appraisal lag in C5 (citation from the professor's review; paper not opened; confirm before citing).

**Common misconceptions.**

1. *"A low cap rate means a safe property."* A low cap rate can mean high expected growth or low required return. Either can reverse, and value falls when it does.
2. *"Small cap-rate changes barely move value."* Value is income divided by the cap rate. A 25 basis point rise on an 8.00% cap cuts value by about 3% (C5 O2 sensitivity).

**Formulas.** F-CORE-13 Capitalization (cap) rate.

**Outcomes served (7.3).** C05-O2, C08-O2, C13-O7.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C5 O2 covers it.

### TM-15. Financial leverage

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** Debt raises the equity return when the property yield exceeds the loan constant (positive leverage). It cuts the equity return when the constant is higher (negative leverage). Either way, leverage raises the risk of the equity. A sponsor showing a high levered return may be showing high risk, not skill. Negative leverage also means the property alone cannot cover debt service growth.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Preview | 1-2 | computes the loan constant |
| C5 | Home | 4 Analyze | Teaches the mechanism in full |
| C6 | Revisit | 4 Analyze | reading a sponsor's levered return claims |
| C8 | Revisit | 4 Analyze | negative leverage and debt yield |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 12 "Use of Debt in Real Estate Investment: The Effect of Leverage"; Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 12 "Financial Leverage and Financing Alternatives".

**Common misconceptions.**

1. *"A lower interest rate means a lower cost of capital."* Cheaper debt raises the risk and required return of the equity. MIT lec. 7: a lower debt rate is not a lower cost of capital.
2. *"Positive leverage means the deal is safe."* It means the equity yield is higher today. If the cap rate is below the constant later, coverage tightens.

**Formulas.** F-CORE-04 Loan constant; F-CORE-44 Cash-on-cash return.

**Outcomes served (7.3).** C05-O5, C06-O7, C08-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C5 O5 covers it.

### TM-16. Real options and land value

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** Vacant land is worth what someone could build on it, and when. That makes land an option on a future building. Options are worth more when outcomes are uncertain, so land prices swing more than building prices. This is why raw land carries the lowest supervisory LTV, 65% [VERIFY: 12 CFR Part 34, Subpart D, Appendix A; checked 22 Nov 2026 per C2 blueprint]. A land loan should not be sized on a hoped-for building.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | the 65% raw-land supervisory limit appears in the table only |
| C5 | Home | 2 Understand | Teaches the mechanism in full |
| C8 | Revisit | 2 Understand | why land and construction leverage is lowest |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 16 "Real Options and Land Value".

**Common misconceptions.**

1. *"Land is low risk because it does not wear out."* Land value depends on entitlement, demand and construction cost. It can fall faster than built property.
2. *"An as-complete value supports a land loan."* Until the building exists, the lender holds land. Size on the land's own value.

**Formulas.** F-COM-20 Land loan maximum; F-RES-21 Land advance.

**Outcomes served (7.3).** C05-O8, C08-O4.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: missing.** C5 has no land-as-option content. Fix: add one paragraph to C5 T3 (cost approach: land value). New outcome C5 O8 serves it.

### TM-17. Guaranty value and wrong-way risk

*Origin:* Added so C6 has a home concept.

**Mechanism (why it matters to a lender).** A guaranty is only as good as the guarantor's ability and willingness to pay when the loan fails. Sponsors often hold their wealth in similar real estate, financed by similar loans. The guarantor's net worth then falls at the same time as the collateral. Contingent liabilities on other guaranties compete for the same cash. So lenders count verified liquidity, not reported net worth.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | guaranty as the secondary source of repayment |
| C6 | Home | 5 Evaluate | Teaches the mechanism in full |
| C9 | Revisit | 4 Analyze | guaranty law and carve-outs |
| C10 | Revisit | 5 Evaluate | state deficiency limits on recourse |
| C13 | Revisit | 5 Evaluate | whether to enforce on a live default (O6) |

**Standard-text reading.** None listed in syllabi notes section F. Regulator source: OCC Bulletin 2023-23, the interagency *Policy Statement on Prudent Commercial Real Estate Loan Accommodations and Workouts*, section IV.B "Supervisory Assessment of Guarantees and Sponsorships" [VERIFY: 88 FR 43115 (6 Jul 2023), govinfo.gov; section heading and the capacity and willingness wording confirmed; checked 22 Nov 2026]. It replaces "OCC Bulletin 2026-56", which could not be confirmed.

**Common misconceptions.**

1. *"A guarantor's net worth shows what the guaranty is worth."* Net worth tied up in other leveraged properties may vanish in the same downturn. Birchwood counts Dana Whitlow's $760,000 liquidity, not her net worth (C10 blueprint WE10).
2. *"Two guarantors double the support."* If both own the same properties, their wealth falls together.

**Formulas.** F-CORE-24 Adjusted liquid assets; F-CORE-25 Required post-closing liquidity; F-CORE-26 Adjusted net worth.

**Outcomes served (7.3).** C06-O5, C09-O2, C10-O7, C13-O6; previewed in C02-O1.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: partial.** C6 O5 covers contingent liabilities and willingness. Fix: name the correlation (wrong-way) point explicitly in C6 T5.

### TM-18. Fraud economics and the verification chain

*Origin:* Added so C7 has a home concept.

**Mechanism (why it matters to a lender).** Fraud concentrates where verification is weakest and growth is fastest. Every document the lender does not verify is a place to lie. Broker-fed files, rapid flips and related-party appraisers each remove one independent check. Sanctions and AML failures are different: they create legal liability even when the loan performs. So screening is binary, not a credit trade-off.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C1 | Preview | 1-2 | names BSA/AML and OFAC in the regulatory map |
| C7 | Home | 4 Analyze | Teaches the mechanism in full |
| C11 | Revisit | 5 Evaluate | wire controls before release (O4) |

**Standard-text reading.** None listed in syllabi notes section F. Regulator sources in the C7 blueprint (31 CFR Chapter X; OFAC).

**Common misconceptions.**

1. *"Fraud is rare, so red flags are mostly noise."* A missed red flag can cost the whole loan. Each flag has a clearing path and an approver (CORE-KYC-07).
2. *"A performing loan cannot create a sanctions problem."* Dealing with a blocked person is a violation whether or not the loan pays [VERIFY: OFAC regulations, 31 CFR Chapter V; strict liability per needs analysis U4; not opened 22 Nov 2026].

**Outcomes served (7.3).** C07-O3, C07-O4, C11-O4.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: present.** C7 O3 and O6 cover it. F-CORE-38 and -39 are still reserved and not in the Library.

### TM-19. Expected loss and credit spreads

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** Expected loss is the average loss a lender should plan for: probability of default × loss given default × exposure at default. It is a cost of doing business, like servicing. The spread over the cost of funds must cover it before any profit. Default also lowers the return actually earned below the promised yield. Early defaults cost more because less interest has been collected (yield degradation). Illustrative only: PD 8%, LGD 35% and exposure $1,000,000 give 0.08 × 0.35 × $1,000,000 = $28,000 of expected loss over the loan's life.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Home | 2 Understand | Teaches the mechanism in full |
| C8 | Revisit | 4 Analyze | note rate built from cost of funds, expected loss, capital, cost and margin (O5) |
| C10 | Revisit | 3 Apply | the timeline changes LGD (TM-32) |
| C13 | Revisit | 4 Analyze | realized LGD in a workout |
| C14 | Revisit | 3 Apply | lifetime expected loss in the allowance (TM-37) |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 (yield degradation; expected return).

**Common misconceptions.**

1. *"A high coupon means a high return."* Illustrative (syllabi D1-D2): a 9% three-year loan that defaults in year 3 with 65% recovery earns −6.69%. Add an 8% chance of that default. The probability-weighted average of yields is 9.00% − 0.08 × 15.69 = 7.74%; that is an approximation. The IRR of the expected cash flows (9, 9, then 0.92 × 109 + 0.08 × 65 = 105.48, on 100) is 7.91%, the measure Geltner uses. The gap is 0.17 points.
2. *"Expected loss is what the lender will lose."* It is an average. Actual losses come in clusters during downturns (TM-01), which is why capital is held beyond expected loss.

**Outcomes served (7.3).** C02-O8, C08-O5, C10-O5, C13-O2, C14-O7.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** Home moved to C2 (professor review 3; syllabi notes B1). C2 O8 teaches it at level 2 with labelled illustrative numbers (owner decision H3). C8 O5 analyzes a note rate built from expected loss. C14 O7 owns the allowance.

### TM-20. Risk-based pricing

*Origin:* Task: risk-based pricing as a concept (owner decision H3).

**Mechanism (why it matters to a lender).** A loan's spread should pay for five things: spread = cost of funds + expected loss + capital charge + operating cost + margin. Cost of funds is what the lender pays its warehouse or investors. Expected loss rises with the risk rating. The capital charge pays for equity held against losses worse than expected. Operating cost covers origination and servicing. The margin is profit. If a riskier loan is priced like a safer one, the riskier loans win the business and the book's quality falls (TM-05).

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Preview | 1-2 | computes SOFR plus a spread without explaining it |
| C8 | Home | 4 Analyze | Teaches the mechanism in full |
| C14 | Revisit | 4 Analyze | is the price right for the rating and the capital partner's box |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 (spread must cover expected loss plus a risk premium).

**Common misconceptions.**

1. *"The rate grid is set by competitors, so risk does not matter."* Matching a competitor's price on a riskier loan means earning less than its expected loss and capital cost.
2. *"Points are profit."* Points are up-front yield that also pays origination cost. They belong in the build-up, not on top of it.

**Formulas.** F-CORE-28 Note rate (RTL grid); F-MF-24 Bridge note rate.

**Outcomes served (7.3).** C08-O5, C14-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C8 4.1 item 3 lists cost of funds, expected loss, servicing and margin. Fix: add the capital charge term and the rating-to-spread link. Concept only, labelled illustrative numbers, no pricing grid (owner decision H3). C8 O5 now analyzes the rate build-up at level 4, with illustrative numbers only (owner decision H3).

### TM-21. Commercial mortgage underwriting: several tests and the binding constraint

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** Each sizing test guards against a different failure. LTV and LTC protect recovery if the property must be sold. DSCR protects payment from cash flow. Debt yield protects against low rates and long amortization flattering DSCR. The lowest result binds because the loan must pass every guard at once. Knowing which test binds tells the lender what input to verify hardest.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | tests ratios against limits and names the binding test (plain division) |
| C8 | Home | 4 Analyze | Teaches the mechanism in full |
| C14 | Revisit | 5 Evaluate | sizing table in the memo |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 "Commercial Mortgage Analysis and Underwriting".

**Common misconceptions.**

1. *"Passing DSCR means the loan is sized correctly."* Birchwood passes DSCR at $3,936,238.02 but LTV binds at $3,900,000 (C8 blueprint T2).
2. *"Debt yield duplicates DSCR."* Debt yield ignores rate and amortization, so it cannot be flattered by a low rate. It entered US practice after 2008.

**Historical episode (C8).** Why debt yield became standard after 2008 (optional, supports the required C8 episode in TM-25). Show that DSCR on cheap debt overstated safety before 2008. Source: OCC, *Comptroller's Handbook: Commercial Real Estate Lending*, v2.0 (Mar 2022), "Debt Yield". [VERIFY: OCC CRE Handbook v2.0, Debt Yield section; cited in C8 blueprint; not re-opened 22 Nov 2026]

**Formulas.** F-CORE-14 Loan-to-value (LTV); F-CORE-15 Loan-to-cost (LTC); F-CORE-16 Debt yield; F-CORE-17 Maximum loan by DSCR; F-CORE-18 Maximum loan by debt yield; F-CORE-19 Maximum loan (lowest of all tests).

**Outcomes served (7.3).** C08-O1, C08-O2, C14-O1.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C8 O1-O2 cover it.

### TM-22. Capital stack and subordination

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** Claims on a property are paid in order: senior debt, then mezzanine debt, then preferred equity, then common equity. Losses run the other way. Contractual subordination is a promise in a document. Structural subordination comes from where the claim sits: mezzanine lends to the owner of the borrower, not on the property. Every dollar of junior capital is a buffer for the senior lender. Combined leverage, not senior LTV alone, shows how thin the total equity cushion is. Illustrative (syllabi D12): value falls to $8,000,000, and 6% sale costs leave $7,520,000. That covers senior $6,000,000 and mezz $1,500,000 with $20,000 left, so preferred equity takes the next loss.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | names the layers and who is paid first (O2) |
| C6 | Home | 4 Analyze | Teaches the mechanism in full |
| C8 | Revisit | 4 Analyze | combined leverage, who loses first and the senior net recovery (O7) |
| C9 | Revisit | 2 Understand | subordination as a document promise (TM-31) |
| C13 | Revisit | 4 Analyze | who absorbs a workout loss |
| C14 | Revisit | 4 Analyze | combined leverage in the memo |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 15 "Advanced Topics II: Capital Structure".

**Common misconceptions.**

1. *"Senior LTV shows the whole risk."* Mezz and preferred equity can push combined leverage near 100%. The sponsor then has little left to lose (F-MF-16).
2. *"Preferred equity is equity, so it protects the senior lender like common equity."* Preferred equity often has redemption rights and control triggers. It can act like debt in a downturn.

**Formulas.** F-MF-16 Combined leverage.

**Outcomes served (7.3).** C06-O7, C08-O7, C09-O1, C13-O3, C14-O1; previewed in C00-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: missing.** Home moved to C6 (professor review 3). C6 O7 already asks who is paid first, at level 4. C8 O7 revisits with combined leverage. Settles P-07.

### TM-23. Refinance and extension risk

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** A bridge loan is repaid by a new loan or a sale, not by its own cash flow. At maturity the take-out lender sizes on its own rules and today's rates. If rates rose or income fell, the take-out is smaller than the payoff. An extension buys time but adds cost and can extend into a deeper loss. So the lender solves for the break-even income and take-out rate on day one, and knows how much room it has.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | cycle phase and refinance risk named (O5) |
| C3 | Preview | 1-2 | balloon balance computed |
| C8 | Home | 4 Analyze | Teaches the mechanism in full |
| C12 | Revisit | 5 Evaluate | extension decision under stress (O3) |
| C14 | Revisit | 4 Analyze | exit at committee (O5) |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 20-21 (balloon risk; terminal LTV).

**Common misconceptions.**

1. *"A loan that performs to maturity has no exit risk."* Cedar Court's cushion is gone at a 6.1% NCF miss at 7.25% (RD-MF-01 memo). Performance before maturity says little about the take-out.
2. *"An extension cures a weak exit."* It adds a fee and more interest and leaves the take-out gap in place unless income or rates change.

**Formulas.** F-MF-20 Bridge exit take-out test; F-COM-10 Bridge exit test (take-out DSCR); F-RES-24 Rental exit DSCR; F-CORE-22 Extension fee.

**Outcomes served (7.3).** C08-O6, C12-O3, C14-O5; previewed in C00-O5.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C8 O5 owns it. Fix: replace the stale $253,677.46 shortfall in C8 T6 with $279,377.46 (exit fee included).

### TM-24. Prepayment option and prepayment premiums

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** A borrower can usually repay early, and will when rates fall or the plan finishes early. That cuts the lender's expected interest. Premiums, step-downs, yield maintenance and defeasance price that option. Securitized loans defease because a REMIC may release a mortgage only for substitute government securities [VERIFY: 26 CFR 1.860G-2(a)(8); checked 22 Nov 2026 per C8 blueprint].

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C3 | Preview | 1-2 | early payoff changes the yield of points (O6) |
| C8 | Home | 3 Apply | Teaches the mechanism in full |
| C10 | Revisit | 5 Evaluate | enforceability under state law and the penalty doctrine (O4) |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 20.

**Common misconceptions.**

1. *"A prepayment premium is a penalty for bad behavior."* It prices an option the borrower holds. Courts still test it against the penalty doctrine (C10).
2. *"No-premium bridges have no prepayment risk."* The lender loses expected interest. Minimum-interest periods and exit fees play the same role.

**Formulas.** F-COM-24 Step-down prepayment premium.

**Outcomes served (7.3).** C08-O8, C10-O4.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C8 O6 owns it (coverage review D14).

### TM-25. Development phases and phased risk

*Origin:* Task: construction risk (development phases); syllabi B2 (development risk taxonomy).

**Mechanism (why it matters to a lender).** A development passes through land, entitlement, construction, lease-up and stabilization. Each phase has its own risks and its own lender. Costs are committed before value is known, so the project is far riskier than the finished building (operational leverage). MIT's example puts development risk at 2.1 to 2.9 times stabilized risk (illustrative). That is the economic reason LTC limits sit below LTV limits and equity goes in first. The ten-factor risk list (entitlement to valuation) frames the risk-and-mitigant table.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | construction limits appear in the supervisory table |
| C5 | Preview | 1-2 | as-completed and as-stabilized values defined (O1) |
| C8 | Home | 4 Analyze | Teaches the mechanism in full |
| C12 | Revisit | 4 Analyze | which phase a stalled draw sits in |
| C14 | Revisit | 5 Evaluate | capstone memo on the ground-up deal |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 17-18 "Investment Analysis of Real Estate Development Projects I and II"; Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 16 "Financing Project Development"; Ch. 17 "Financing Land Development Projects".

**Common misconceptions.**

1. *"A 10% fall in completed value cuts the developer's return by about 10%."* Costs are fixed before value is known, so the equity return falls by much more (syllabi D11; operational leverage).
2. *"A construction loan is a bridge loan with draws."* Until completion there is no income and no finished collateral. The lender's recovery depends on someone finishing the job.

**Historical episode (C8).** Construction and land loans in the 2008-2011 bank failures. Show how acquisition, development and construction exposure drove small-bank failures, and why survivors had stronger controls. Source: GAO-13-704T (June 2013) and GAO-13-71 (Jan 2013); FDIC OIG, EVAL-13-001 (Oct 2012), on banks with ADC concentrations that did not fail. [VERIFY: GAO-13-704T: small-bank failures in ten states driven mainly by CRE losses, "especially" land development and construction loans; 298 of 414 failures; seen via search summary only; open before citing; checked 22 Nov 2026] [VERIFY: FDIC OIG EVAL-13-001; seen via search summary; not opened; checked 22 Nov 2026]

**Formulas.** F-RES-22 Equity-first requirement; F-RES-20 Ground-up maximum loan.

**Outcomes served (7.3).** C08-O4, C12-O1, C14-O1.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C8 T3b is a 10-minute primer on Library test cases. Fix: add phased risk, operational leverage and the ten-factor list (syllabi E3 C8 items 4-5). Taught in a separate construction lesson inside C8 (professor review 3). Splitting C8 stays an owner decision.

### TM-26. Development feasibility: front door and back door

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** Simple feasibility asks one lender question: can a take-out loan repay this project? Front door: from cost, find the rent the project must earn to support the take-out. Back door: from market rent, find the most the land can cost. If the required rent is above the market, the take-out cannot work, however good the developer is.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C5 | Preview | 1-2 | as-complete value (O1) |
| C8 | Home | 3 Apply | Teaches the mechanism in full |
| C14 | Revisit | 4 Analyze | capstone feasibility check |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 17.

**Common misconceptions.**

1. *"A feasible project is a good investment."* MIT's back-door case shows $91,647 of headroom while its NPV is still negative. Feasibility tests the loan, not the equity.
2. *"Feasibility can ignore vacancy."* Leaving out vacancy is the named distractor in syllabi D8. It overstates supportable land cost.

**Outcomes served (7.3).** C08-O4, C08-O6, C14-O1.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: missing.** No Library formula (syllabi C16-C17). Fix: teach D8 and D9 in C8 as illustrative, unscored until the owner adds formulas. C8 O4 (contract, schedule, permits) and C8 O6 (back-door test) now serve it. Taught in a separate construction lesson inside C8 (professor review 3). Splitting C8 stays an owner decision.

### TM-27. Interest during construction

*Origin:* Task: construction risk (interest during construction); syllabi B2.

**Mechanism (why it matters to a lender).** Each draw starts accruing interest on its draw date, so the balance and the interest grow together. Before completion there is no income to pay it. The interest reserve inside the loan pays it, which makes financing cost part of project cost. An average-balance factor estimates the reserve; a draw schedule computes it. A back-loaded or delayed schedule can make the estimate wrong in either direction. Illustrative (syllabi D10): draws of $400,000, $600,000, $900,000 and $1,100,000 at 9% compound to $47,537.80 of interest; a 60% average-balance estimate gives $54,000.00.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C8 | Home | 3 Apply | Teaches the mechanism in full |
| C12 | Revisit | 3 Apply | interest rising after each draw; reserve depletion |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 18; Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 16.

**Common misconceptions.**

1. *"The interest reserve is a borrower cost, not a lender risk."* If the reserve runs out before completion, unpaid interest becomes a default with no income behind it.
2. *"The average-balance factor is always conservative."* It assumes a draw shape. A delay that stretches the schedule adds months of interest the factor never counted.

**Formulas.** F-CORE-20 Interest reserve (straight-line); F-RES-16 Ground-up interest reserve; F-MF-15 Construction interest reserve; F-COM-14 Construction sizing with interest reserve.

**Outcomes served (7.3).** C08-O4, C12-O1.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C8 O3 sizes the interest reserve by factor. Fix: add D10's schedule method beside F-MF-15 (syllabi E3 C8 item 2); owner question Q3 governs scoring. Taught in a separate construction lesson inside C8 (professor review 3). Splitting C8 stays an owner decision.

### TM-28. Completion and cost-overrun risk

*Origin:* Task: construction risk (completion and cost overrun).

**Mechanism (why it matters to a lender).** An unfinished building is worth far less than its cost. So the lender's first risk is that the project stops. Overruns come from change orders, soft costs left out and contingency spent early. Each one leaves the loan out of balance: remaining funds no longer cover remaining work. Equity first, a contingency line, a completion guaranty, bonds and an in-balance test each move overrun risk away from the lender.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C6 | Preview | 1-2 | names the completion guaranty as a guaranty type (O1) |
| C8 | Home | 4 Analyze | Teaches the mechanism in full |
| C9 | Revisit | 3 Apply | completion guaranty, payment and performance bonds, builder's risk |
| C12 | Revisit | 5 Evaluate | draws, change orders and the in-balance test (O1) |
| C14 | Revisit | 5 Evaluate | capstone defects and grey cases |

**Standard-text reading.** Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 16 "Financing Project Development"; Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 17.

**Common misconceptions.**

1. *"A guaranteed maximum price contract removes overrun risk."* Owner changes, soft costs and contractor failure sit outside the GMP. MIT's One Lincoln Street case still required a completion guaranty.
2. *"Contingency is spare money."* It is budget for known unknowns. Spending it early is a warning sign. The policy sets no contingency minimum yet (coverage review, open item 5).

**Formulas.** F-RES-25 In-balance shortfall; F-COM-21 Construction draw with retainage.

**Outcomes served (7.3).** C08-O4, C09-O2, C12-O1, C14-O1.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C8 4.1 item 6 adds budget review; C12 O1 runs the in-balance test. No contingency or contractor rule exists, so these stay unscored. C8 O4 now names the contractor, contract type and permits (CCO review 8). Taught in a separate construction lesson inside C8 (professor review 3). Splitting C8 stays an owner decision.

### TM-29. Take-out risk

*Origin:* Task: construction risk (take-out risk); syllabi B2.

**Mechanism (why it matters to a lender).** A construction loan is repaid by a permanent loan or a sale after completion. The classical structure made the construction lender wait for a permanent commitment. Today many business-purpose projects exit to a third-party lender or a sale with no commitment in hand. The lender then carries the risk that the finished, leased building will not qualify for enough debt at the rates of that day.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C8 | Home | 4 Analyze | Teaches the mechanism in full |
| C12 | Revisit | 5 Evaluate | extension and exit at maturity (O3) |
| C14 | Revisit | 5 Evaluate | capstone exit evidence |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 18; Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 16.

**Common misconceptions.**

1. *"Our own term rules decide the take-out."* Each running deal exits to a third-party lender. Our term rules only stand in for that lender's box (D-CORE-31).
2. *"A take-out sized on pro forma rent is evidence of an exit."* It is a planted defect in the capstone design (syllabi E3). Size on achievable rent and a stressed rate.

**Formulas.** F-MF-20 Bridge exit take-out test; F-COM-10 Bridge exit test (take-out DSCR).

**Outcomes served (7.3).** C08-O6, C12-O3, C14-O5.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C8 O5 covers the bridge exit. Fix: add the classical take-out and the sale exit for ground-up (syllabi E1 item 4). Taught in a separate construction lesson inside C8 (professor review 3). Splitting C8 stays an owner decision.

### TM-30. Lien priority and perfection

*Origin:* Added so C9 has a property-law mechanism.

**Mechanism (why it matters to a lender).** A lender's collateral is only as good as its place in line. Recording, title insurance and UCC filings set and prove that place. Anything recorded or attached ahead of the mortgage, such as a tax lien or a mechanic's lien, is paid first in a sale. So the lender reads every title exception and closes only when it knows who stands ahead of it.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C9 | Home | 4 Analyze | Teaches the mechanism in full |
| C11 | Revisit | 2 Understand | recording acts and the gap period (O5) |
| C12 | Revisit | 3 Apply | mechanics' lien priority and date-downs per draw |
| C13 | Revisit | 4 Analyze | junior liens survive a deed in lieu |

**Standard-text reading.** Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 2 (notes, mortgages, default, foreclosure).

**Common misconceptions.**

1. *"A title policy means there are no prior liens."* The policy lists exceptions it does not insure. Schedule B-I and B-II items must be cleared or accepted.
2. *"A mortgage recorded first always comes first."* Some state mechanics' liens can relate back to the start of work [VERIFY: Ohio, North Carolina and Indiana lien statutes; not opened 22 Nov 2026]. C12 owns that state law.

**Outcomes served (7.3).** C09-O3, C11-O5, C12-O1, C13-O4.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C9 O3 and C11 O5 cover it.

### TM-31. Intercreditor terms and mezzanine foreclosure

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** When a senior and a mezzanine lender share one project, an intercreditor agreement sets who may act and when. Typical terms give the mezz lender notice, cure rights and a purchase option, and limit what the senior may change. A mezz lender holds a pledge of the borrower's ownership interests. It forecloses by a UCC sale of those interests, not by a mortgage foreclosure. The sale must be commercially reasonable in every aspect [VERIFY: UCC 9-610(b), Cornell LII; checked 22 Nov 2026]. It can be fast, which changes who the senior lender's borrower is.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | names mezzanine in the capital stack |
| C9 | Home | 2 Understand | Teaches the mechanism in full |
| C13 | Revisit | 3 Apply | a mezz foreclosure in a workout changes the counterparty |

**Standard-text reading.** None listed in syllabi notes section F; MIT does not cover intercreditor law (syllabi B1). Primary law: UCC Article 9, Part 6; enacted text in each state.

**Common misconceptions.**

1. *"A mezz lender forecloses on the property."* It forecloses on the ownership interests. The senior mortgage stays in place.
2. *"The senior lender can ignore the mezz lender after a default."* The intercreditor agreement usually requires notice and gives cure rights first.

**Outcomes served (7.3).** C09-O1, C13-O3.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: missing.** No blueprint teaches it. Fix: add a short C9 section (intercreditor terms; pledge; UCC 9-610 sale) and a C13 grey case. Open the enacted UCC 9-610 text in Ohio, North Carolina and Indiana first.

### TM-32. Loss severity and recovery timing

*Origin:* Quality bar 6.1.

**Mechanism (why it matters to a lender).** Loss given default is the balance plus unpaid interest and costs, less net recovery, as a share of the balance. Time drives it. Every month to recovery adds unpaid interest, taxes, insurance and legal cost. The property state's foreclosure process sets much of that time, so the same loan loses more in a slow judicial state. Early default also hurts yield more, because less interest has been collected (TM-19).

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | names loss severity |
| C10 | Home | 4 Analyze | Teaches the mechanism in full |
| C13 | Revisit | 5 Evaluate | compare workout options by net loss (O2) |
| C14 | Revisit | 3 Apply | LGD in the allowance (O7) |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 (recovery and loss severity); Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 2 (default, foreclosure, bankruptcy).

**Common misconceptions.**

1. *"Loss is balance minus sale price."* Interest, carry and sale costs come first. The $3,150,000 recovery is a C10 scenario assumption (P-14), not a running-deal figure. On it, Birchwood's severity is ($3,520,000 + $310,000 − $3,150,000) ÷ $3,520,000 = 19.3% (F-CORE-23).
2. *"A strong appraisal at origination caps the loss."* Recovery is the value at sale, after months of carry, in a market that has usually fallen.

**Formulas.** F-CORE-23 Loss severity; F-CORE-05 Per diem interest.

**Outcomes served (7.3).** C10-O5, C13-O2, C14-O7.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** Home moved from C13 (syllabi B1) to C10, where F-CORE-23 is first computed (C10 O5, T7). C13 revisits at Analyze and Evaluate.

### TM-33. Conditions precedent and the point of no return

*Origin:* Added so C11 has a home concept.

**Mechanism (why it matters to a lender).** Before funding, the lender can still say no. After the wire, its only protections are the documents and the collateral. Conditions precedent are the last chance to make every earlier approval true on the funding day. A wire is close to irreversible, so a diverted wire is a total loss of the advance. That is why controls sit before release, not after.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | names the stage in the life cycle |
| C11 | Home | 5 Evaluate | Teaches the mechanism in full |
| C12 | Revisit | 3 Apply | draw conditions repeat the same logic on each advance |

**Standard-text reading.** None listed in syllabi notes section F. Primary law: UCC Article 4A (C11 blueprint).

**Common misconceptions.**

1. *"A condition can be cleared after closing if the borrower promises."* After funding the lender has lost its leverage. Post-closing items need an approved exception (CORE-EXC-01).
2. *"The closing agent's wire instructions can be trusted if they come by email."* Business email compromise targets exactly that step. Verify by callback (CORE-CLS-03).

**Formulas.** F-CORE-33 Prepaid (odd-days) interest at closing; F-CORE-41 Net funding wire.

**Outcomes served (7.3).** C11-O1, C12-O1.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: present.** C11 O1 and O4 cover it.

### TM-34. Covenants, monitoring and early warning

*Origin:* Added so C12 has a home concept.

**Mechanism (why it matters to a lender).** Covenants are tripwires set at origination. They let the lender act while the borrower still has options and the property still has value. Reporting, cash-management triggers and sweeps turn a slow decline into an early, contractual response. A lender that waits for a missed payment has usually waited too long.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C4 | Preview | 1-2 | notes that covenant DSCR definitions differ |
| C12 | Home | 4 Analyze | Teaches the mechanism in full |
| C13 | Revisit | 3 Apply | a covenant breach opens the workout |
| C14 | Revisit | 4 Analyze | portfolio watchlist |

**Standard-text reading.** None listed in syllabi notes section F. Regulator source: OCC CRE Handbook, "Credit Administration" (needs analysis S4).

**Common misconceptions.**

1. *"A covenant breach means the loan is in default and must be called."* It gives the lender rights. The best response is often a sweep, a reserve or a cure plan.
2. *"Late reports are an administrative issue."* Missing reports often hide falling income. Treat lateness as a credit signal.

**Formulas.** F-COM-19 Cash sweep amount.

**Outcomes served (7.3).** C12-O4, C13-O1, C14-O8.

**Citation status.** Primary or regulator source; see its tag.

**Blueprint status: present.** C12 O4 covers it.

### TM-35. Workout economics

*Origin:* Added so C13 has a home concept (loss severity moved to C10).

**Mechanism (why it matters to a lender).** After default, the lender chooses the path with the lowest net loss, counting time, carry and income collected. Foreclosure is not always best: it is slow, costly and leaves the lender owning the property. A modification can lose less if the borrower adds equity or a guarantor reaffirms. Regulators accept prudent workouts with creditworthy borrowers [VERIFY: OCC Bulletin 2023-23; checked 22 Nov 2026 per needs analysis S6]. That frees the lender to choose on economics.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C10 | Preview | 1-2 | timeline effect on loss (TM-32) |
| C13 | Home | 5 Evaluate | Teaches the mechanism in full |
| C14 | Revisit | 4 Analyze | losses roll up into the allowance and loan review |

**Standard-text reading.** Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 2 (default, foreclosure, bankruptcy).

**Common misconceptions.**

1. *"Foreclosure is the conservative choice."* It is often the most expensive. C13 compares options by net loss, including time (F-CORE-23).
2. *"A modification hides a loss."* A prudent modification on reasonable terms is accepted by regulators; the rating and accrual must still reflect the facts.

**Historical episode (C13).** The 2009 interagency workout policy statement and its 2023 replacement. Show regulators telling banks, during the 2008-09 CRE downturn and again in the 2023 office stress, how to restructure rather than foreclose by reflex. Source: Federal Reserve press release and *Policy Statement on Prudent Commercial Real Estate Loan Workouts*, 30 Oct 2009; OCC Bulletin 2023-23, 29 Jun 2023. [VERIFY: Federal Reserve press release, 30 Oct 2009: performing loans "renewed or restructured on reasonable modified terms, made to creditworthy borrowers, will not be subject to adverse classification solely because the value of the underlying collateral declined"; checked 22 Nov 2026] [VERIFY: OCC Bulletin 2023-23, 29 Jun 2023; occ.gov; checked 22 Nov 2026 per needs analysis S6]

**Formulas.** F-CORE-23 Loss severity; F-CORE-42 REO carrying value and charge-off; F-CORE-31 Default interest.

**Outcomes served (7.3).** C13-O2, C13-O3, C14-O7.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: present.** C13 O2-O3 cover it. Fix: add the 2009 to 2023 episode to C13 T3.

### TM-36. Loan valuation at a market yield

*Origin:* Syllabi B2.

**Mechanism (why it matters to a lender).** A loan's price is the present value of its remaining payments at today's market yield. If market yields rise above the note rate, the loan sells below par. That is why a lender holding fixed-rate loans in a rising-rate market cannot sell them without a loss. Illustrative (syllabi D15): $2,000,000 interest-only at 8% with 36 months left, priced at a 9% yield (monthly), is worth $1,947,588.66.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C0 | Preview | 1-2 | names whole-loan sale (O3) |
| C14 | Home | 3 Apply | Teaches the mechanism in full |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 20.

**Common misconceptions.**

1. *"A performing loan is always worth par."* Price depends on market yield. A sound loan can sell at a discount.
2. *"Only credit problems create loan-sale losses."* Rate moves alone can, as the D15 example shows.

**Formulas.** F-CORE-45 Present and future value (time value of money).

**Outcomes served (7.3).** C14-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: missing.** C14 O2 covers eligibility, not price. Fix: add the D15 example to C14 T2 as read-only math, recomputed in code. C14 O2 now names the sale price at the market yield.

### TM-37. Lifetime expected loss and the allowance

*Origin:* Syllabi B2 (hazard functions); needs analysis K4.

**Mechanism (why it matters to a lender).** Under CECL, a lender reserves for expected losses over a loan's whole life, not only losses already incurred [VERIFY: FDIC CECL page (ASC 326); checked 22 Nov 2026 per needs analysis S7]. Lifetime loss builds from yearly default chances (hazard rates) applied to the loans that survive each year. Illustrative (syllabi D3): hazards of 1.0%, 1.5% and 2.0% give 1 − (0.99 × 0.985 × 0.98) = 4.44% cumulative default, not 4.50%. Ratings, accrual and charge-offs on single loans roll up into this portfolio estimate.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C2 | Preview | 1-2 | one sentence pointer |
| C12 | Preview | 1-2 | single-loan rating, accrual and charge-off |
| C14 | Home | 2 Understand | Teaches the mechanism in full |

**Standard-text reading.** Geltner, Miller, van de Minne, Eichholtz, Lindenthal and Shen, *Commercial Real Estate Analysis for Investment, Finance, and Development*, 4th ed. (Routledge, 2026), Ch. 21 (hazard functions).

**Common misconceptions.**

1. *"Add the yearly default rates to get lifetime default."* Loans that already defaulted cannot default again. Multiply survival rates: 4.44%, not 4.50% (illustrative).
2. *"The allowance equals this year's charge-offs."* It is a forward estimate over the remaining life of the book.

**Formulas.** F-CORE-23 Loss severity; F-CORE-42 REO carrying value and charge-off.

**Outcomes served (7.3).** C14-O7.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: partial.** C14 O7 explains the allowance. Fix: add the D3 hazard example as read-only; no PD source exists (coverage review open item 1).

### TM-38. Bankruptcy and bankruptcy-remote borrowers

*Origin:* Professor review 2 (C13 O5 had no theory home).

**Mechanism (why it matters to a lender).** A bankruptcy filing stops foreclosure at once through the automatic stay [VERIFY: 11 U.S.C. 362(a); Cornell LII; not opened 22 Nov 2026]. Time is the lender's main loss in a stay: interest, taxes and carry run while the collateral cannot be sold. For a single-asset real estate debtor, the court must lift the stay unless the debtor acts within about 90 days. It must file a plan with a reasonable chance of confirmation, or start monthly interest payments [VERIFY: 11 U.S.C. 362(d)(3); Cornell LII; checked 22 Nov 2026] [VERIFY: 11 U.S.C. 101(51B), single asset real estate; Cornell LII; not opened 22 Nov 2026]. So lenders lend to single-purpose entities with separateness covenants. They add recourse that springs to the guarantor on a voluntary filing. That makes a filing costly for the sponsor, not impossible.

| Module | Role | Target level | What the module does |
| --- | --- | --- | --- |
| C9 | Preview | 1-2 | single-purpose entity covenants and recourse that springs on a filing (O2) |
| C13 | Home | 4 Analyze | Teaches the mechanism in full |

**Standard-text reading.** None listed in syllabi notes section F. Primary law: 11 U.S.C. 362(a), 362(d)(3) and 101(51B) (Cornell LII); Brueggeman and Fisher, *Real Estate Finance and Investments*, 2024 Release (18th ed.) (McGraw Hill, 2024), Ch. 2 (default, foreclosure, bankruptcy).

**Common misconceptions.**

1. *"A single-purpose entity cannot file for bankruptcy."* It can. Separateness covenants and springing recourse make a filing less likely and more costly for the sponsor. They do not remove the right to file.
2. *"Once a sale notice goes out, the sale goes ahead whatever the borrower does."* A filing before the sale stops it. The lender must ask the court for relief, and carry costs run meanwhile.

**Formulas.** F-CORE-23 Loss severity.

**Outcomes served (7.3).** C13-O5; previewed in C09-O2.

**Citation status.** Editions confirmed on publisher pages 22 Nov 2026. Chapter numbers come from the syllabi notes; confirm each chapter number and title in the book before citing (book not opened).

**Blueprint status: missing.** New. C9 O2 previews single-purpose entity covenants and springing recourse. C13 O5 analyzes how a filing changes the plan and its timeline. The C13 blueprint needs the mechanism section.

## 4. Historical episodes (6.7)

C0, C8, C13 and C14 each need one documented episode cited to a regulator or academic source.

| Module | Concept | Episode | Source | Opened? |
| --- | --- | --- | --- | --- |
| C0 | TM-01 | The commercial real estate boom and bust of the 1980s and early 1990s | FDIC, *History of the Eighties: Lessons for the Future*, Vol. 1 (1997), Ch. 3, "Commercial Real Estate and the Banking Crises of the 1980s and Early 1990s" | Publication page only; chapter text not opened |
| C3 | TM-11 | The end of LIBOR (optional) | Adjustable Interest Rate (LIBOR) Act, 12 U.S.C. 5801-5807; Regulation ZZ, 12 CFR Part 253 | Statute via C8 blueprint; Reg ZZ not opened |
| C8 | TM-21 | Why debt yield became standard after 2008 (optional, supports the required C8 episode in TM-25) | OCC, *Comptroller's Handbook: Commercial Real Estate Lending*, v2.0 (Mar 2022), "Debt Yield" | Not re-opened |
| C8 | TM-25 | Construction and land loans in the 2008-2011 bank failures | GAO-13-704T (June 2013) and GAO-13-71 (Jan 2013); FDIC OIG, EVAL-13-001 (Oct 2012), on banks with ADC concentrations that did not fail | Search summary only |
| C13 | TM-35 | The 2009 interagency workout policy statement and its 2023 replacement | Federal Reserve press release and *Policy Statement on Prudent Commercial Real Estate Loan Workouts*, 30 Oct 2009; OCC Bulletin 2023-23, 29 Jun 2023 | Fed press release opened |
| C14 | TM-06 | Bank failures of 2008-2011 and the 2023 commercial real estate stress, read against the regulators' 2006 concentration guidance | OCC, Federal Reserve and FDIC, *Concentrations in Commercial Real Estate Lending, Sound Risk Management Practices*, 71 FR 74580 (12 Dec 2006); Federal Reserve, *Financial Stability Report* (May 2023), "Asset Valuations" | Fed report opened; 2006 guidance not opened |

**Result.** C0 (TM-01), C8 (TM-25), C13 (TM-35) and C14 (TM-06) each have an episode, and each now has its own source. C14 uses the 2006 interagency concentration guidance, the regulators' response, so it no longer shares GAO-13-71 with C8. The C0, C8 and 2006 sources must be opened before a lesson cites them.

## 5. Changes from syllabi notes section B

| Concept | Syllabi notes B | This map | Why |
| --- | --- | --- | --- |
| Expected loss and spreads (TM-19) | Home C2 | Home C2 (level 2); C8 revisits at level 4 | Professor review 3: matches C2 O8 and frees C8 time. Reverses the earlier move to C8 |
| Loss severity and recovery timing (TM-32) | Home C13 | Home C10 | C10 O5 and T7 compute F-CORE-23 before C13 |
| Concentration risk (TM-06) | Home C14 | Home C2 | C2 O4 and C6 O6 apply the sponsor cap first; C2 gets the mechanism, C14 the portfolio depth |
| Interest-rate, refinance and extension risk | One concept, home C8 | TM-11 home C3; TM-23 home C8 | C3 O5 teaches floating-rate risk before C8 |
| Capital stack (TM-22) | Revisit C6 before home C8 | Home C6 (level 4); C8 revisits | Professor review 3: C6 O7 already asks who is paid first at level 4. Settles P-07 |
| Bankruptcy | Not listed | TM-38, home C13; C9 previews | Professor review 2: C13 O5 had no theory home |
| Intercreditor and mezz foreclosure | Part of the capital-stack row | TM-31, home C9 | Legal content belongs with C9 documents |
| Agency problems; CMBS; REIT debt | Separate rows | TM-05 (agency, incl. originate-to-distribute); TM-02 (lender types, funding routes, CMBS) | Fewer, larger concepts with one home each |
| Construction set | Four B2 rows | TM-25 to -29 | Matches the task's construction list and owner decision H1 |

## Self-check

1. Does every quality bar 6.1 concept have a home? Yes. The homes are: expected loss and spreads TM-19 (C2); default option TM-04 (C2); severity TM-32 (C10); capital stack TM-22 (C6) and intercreditor TM-31 (C9); agency TM-05 (C2); rate risk TM-11 (C3) and refinance and extension TM-23 (C8); concentration TM-06 (C2); cycles TM-01 (C0).
1a. Does every concept serve a named outcome in its home and in each revisit module (7.3)? Yes. The generator stops if one does not.
2. Are all syllabi B2 concepts, the construction set and risk-based pricing mapped? Yes: section 1 and the origin line of each concept.
3. Does every module have a home concept? Yes (section 2).
4. Does any revisit come before its home? No. The generator script checks this and stops on any breach.
5. Does every concept have 1-2 misconceptions and a reading? Yes. Eleven concepts have no section F text; each says so and names the nearest source.
6. Do C0, C8, C13 and C14 each have a historical episode with a tagged source? Yes (section 4).
7. Is any policy limit, threshold or rate invented? No. Risk-based pricing and expected loss are concepts with labelled illustrative numbers (owner decision H3).

## What to look up yourself

Open items were researched first (GAO, Federal Reserve, FDIC and Cornell LII pages, 22 Nov 2026). These remain:

1. **FDIC, *History of the Eighties*, Vol. 1, Ch. 3.** The PDF did not extract as text. Open it and pick two quotable facts on overbuilding and losses for C0.
2. **GAO-13-704T (June 2013) and FDIC OIG EVAL-13-001 (Oct 2012).** Seen only in search summaries. Open both and confirm the ADC wording and the 298-of-414 figure before C8 cites them.
3. **12 CFR Part 253 (Regulation ZZ).** Not opened; needed only if C3 uses the LIBOR episode.
4. **Enacted UCC 9-610 in Ohio (R.C. Chapter 1309), North Carolina (G.S. Chapter 25, Article 9) and Indiana (IC 26-1-9.1).** Confirm section numbers before C9 teaches mezzanine foreclosure.
5. **Each section F reading.** Open the chapter and confirm the edition before a lesson cites it (quality bar 6.5).
6. **The seven journal papers added from the professor's review** (TM-01, -04, -05, -14). Open each and confirm the volume, issue and pages before citing.
7. **Geltner et al., 4th ed. (2026), and Brueggeman and Fisher, 2024 Release.** Both editions exist (publisher pages, 22 Nov 2026). Confirm each chapter number and title used here in the book's table of contents.
8. **71 FR 74580 (12 Dec 2006).** Open the interagency concentration guidance before C14 cites it.

**Owner decisions needed.**

1. Confirm the home moves in section 5: TM-19 to C2, TM-22 to C6, TM-32 to C10 and TM-06 to C2, and the new TM-38 in C13.
2. C8 load: the construction chunk (TM-25 to -29) is now its own lesson within C8. Decide whether to split C8 into two modules, sizing and pricing, and construction and structure.
3a. Linneman, *Real Estate Finance and Investments*: cite it in a module, or remove it from the quality bar 6.5 example list.
3. Formulas for feasibility (syllabi C16-C17), schedule-based interest during construction (C15) and expected loss (C1). Until then those numbers stay illustrative and unscored.

## How to check it

1. Open `theory-map.json`. Confirm 38 concepts, and that `module_home_check` lists at least one ID for each of C0-C14.
1a. For any concept, confirm each module in `bloom` has at least one outcome in `outcomes` from that module, and each outcome exists in `docs/assessment/outcomes.json`.
2. For any concept, confirm every module in `revisit` comes after `home`, and every module in `previews` comes before it.
3. Recompute the illustrative numbers: 0.08 × 0.35 × $1,000,000 = $28,000; IRR of −$1,000,000, $90,000, $90,000, $650,000 = −6.69%; IRR of −100, 9, 9, 105.48 = 7.91%; 1 − 0.99 × 0.985 × 0.98 = 4.4353%; draws $400,000, $600,000, $900,000, $1,100,000 at 9% ÷ 12 compounding give $47,537.80, and at Actual/360 on January-April days (31, 28, 31, 30) $47,612.08; the D15 loan prices at $1,947,588.66.
3a. TM-04: with value volatility 15% and 7 years, `=NORM.S.DIST((LN(0.75)-0.01375*7)/(0.15*SQRT(7)),TRUE)` gives 0.1667, and a zero drift gives 0.2343.
4. Check deal numbers against `data/running-deals/running-deals.md`: $279,377.46, $4,886,322.54, $5,165,700, $19,275.00, $2,400 and $2,450.
5. Open each `[VERIFY]` source in section 4 and confirm the quoted wording.
