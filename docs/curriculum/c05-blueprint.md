# C5 blueprint: Valuation: appraisals, cap rates, as-is, ARV and as-stabilized

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C5, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Intermediate (qas-spec.md) |
| Field of study | Specialized Knowledge about 60% (appraisal regulation, review, governance), Finance about 40% (income approach, leverage). Planning split by content time (Std 7.01.1) |
| Current lesson read | `modules/core/c05/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Inputs | Formula Library F-CORE-04, -13, -14, -36, -44, F-RES-02, -03, F-MF-13, -20; Model Credit Policy CORE-VAL-01 to -03, CORE-PRC-05, RES-GEN-06, MF-GEN-08, COM-GEN-13, MF-BR-02, -04, -08, COM-BR-09, COM-TRM-09; Running Deals (22 Nov 2026) |
| Needs analysis | `docs/curriculum/needs-analysis.md` v0 (tasks U2, U5, U6, U10, U11, K5, K6, O6) and §4 item 4 (appraisal regulation and valuation governance) |
| Status | v0 blueprint, 22 Nov 2026, for owner review. Nothing in the lesson or Course Bible was changed |

## 1. Module purpose

C5 builds the skill of testing a collateral value: which value a test needs, how it was reached, and whether to rely on it. It follows C4's NOI and feeds C8 (leverage tests), C13 (REO value), C14 (valuation in the memo) and the family valuation modules (R2, M3, CM3).

## 2. Learning objectives

By the end of C5, you will be able to:

| # | Objective (one verb, LD-01) | Bloom level | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Distinguish** market value, as-is, prospective (as-completed and as-stabilized) and hypothetical values, and the loan test each one feeds. | 2 Understand | U2 |
| O2 | **Calculate** value by direct capitalization and by discounted cash flow, with a ±25 basis point cap-rate sensitivity (F-CORE-13). | 3 Apply | U2, U10 |
| O3 | **Calculate** value indications by the sales comparison and cost approaches, and reconcile them with the income approach. | 3 Apply | U2, U6 |
| O4 | **Apply** the lender's value rules: lower of cost or value, appraisal ordering, age and review, and the federal appraisal framework (F-CORE-14, -36; CORE-VAL-01 to -03; CORE-PRC-05). | 3 Apply | U2, U5, K5, U11 |
| O5 | **Analyze** leverage by comparing the going-in cap rate with the loan constant and the cash-on-cash return (F-CORE-04, -44). | 4 Analyze | U5, U10, O6 |
| O6 | **Evaluate** an appraisal in a desk review and recommend accept, revise or reject, citing each deficiency. | 5 Evaluate | U2, K5, K6 |

**Bloom mix:** 1 Understand, 3 Apply, 1 Analyze, 1 Evaluate. Five of six are at Apply or above.

**Conflict to resolve (owner).** Course Bible LD-02 aims core at levels 2-3. O5 and O6 need LD-02 amended for the agreed depth.

## 3. Content map

| Obj | Concepts | Real rules and primary sources | Model policy and formulas |
| --- | --- | --- | --- |
| O1 | Market value; premises of value; effective date versus report date; extraordinary assumption; hypothetical condition; prospective value | Market value is "the most probable price which a property should bring in a competitive and open market", with five listed conditions [VERIFY: 12 CFR 34.42(h) (OCC) and 12 CFR 323.2(h) (FDIC); checked 22 Nov 2026]. Lenders generally request the as-is value and, as applicable, prospective values on completion and stabilization [VERIFY: Interagency Appraisal and Evaluation Guidelines, 75 FR 77450 (10 Dec 2010), Section VIII; checked 22 Nov 2026]. Glossary: extraordinary assumption, hypothetical condition, prospective market value [VERIFY: same Guidelines, Appendix D, 75 FR 77471-77473; checked 22 Nov 2026] | F-RES-02, -03; F-MF-13; COM-TRM-09 |
| O2 | Direct capitalization; DCF with reversion at a terminal cap rate; discount rate versus cap rate; cap rate build-up (band of investment; yield less growth); spread over the 10-year Treasury | Direct cap "is appropriate when applied to a stabilized NOI"; DCF "is useful in estimating the as-is market value of properties that have not reached stabilized occupancy"; "Rising interest rates may lead to higher capitalization rates and lower property values" [VERIFY: OCC, *Comptroller's Handbook: Commercial Real Estate Lending* v2.0, Mar 2022, pp. 43-44; checked 22 Nov 2026] | F-CORE-13. **New formulas needed** (owner): DCF value with reversion; band of investment |
| O3 | Comparable selection; adjustment grid; price per unit or per square foot; cost new less depreciation plus land; ARV support; reconciliation | OCC: sales comparison typically uses "at least three recently sold properties"; cost approach is land plus construction cost less depreciation [VERIFY: OCC CRE Handbook v2.0, p. 44; checked 22 Nov 2026] | F-RES-02; RES-GEN-06 |
| O4 | Lower of cost or value; transaction value; federal thresholds; minimum standards; independence; validity; AVM rule scope | Evaluations allowed for residential up to $400,000, CRE up to $500,000, and business loans up to $1 million not dependent on real estate income [VERIFY: 12 CFR 34.43(a)(1), (a)(5), (a)(13), (b); checked 22 Nov 2026]. Certified appraiser for CRE over $500,000 [VERIFY: 12 CFR 34.43(d)(2); checked 22 Nov 2026]. Minimum standards: USPAP, written, reviewed, and "deductions and discounts" for renovation and partly leased buildings [VERIFY: 12 CFR 34.44(a)-(f); checked 22 Nov 2026]. Fee appraiser "engaged directly by the regulated institution or its agent" [VERIFY: 12 CFR 34.45(b)(1); checked 22 Nov 2026]. A borrower-ordered appraisal "violates the Agencies' appraisal regulations" [VERIFY: Guidelines Section V; checked 22 Nov 2026]. Validity factors, not a fixed age [VERIFY: Guidelines Section XIV; OCC CRE Handbook v2.0, p. 61; checked 22 Nov 2026]. AVM quality-control rule covers a consumer's principal dwelling only [VERIFY: 12 CFR 34.221, 34.222 (89 FR 64571, 7 Aug 2024); checked 22 Nov 2026]. Purchase value is the lower of cost and value [VERIFY: 12 CFR 365, Appendix A; checked 22 Nov 2026 per lesson] | F-CORE-14, -36; CORE-VAL-01, -02, -03; CORE-PRC-05; RES-GEN-06; MF-GEN-08; COM-GEN-13 |
| O5 | Positive versus negative leverage; constant versus cap rate; cash-on-cash; why the exit test binds on DSCR | OCC: debt yield "independent of the interest rate, amortization period, and capitalization rate" (contrast) [VERIFY: OCC CRE Handbook v2.0, p. 43; checked 22 Nov 2026] | F-CORE-04, -13, -44; MF-BR-08; F-MF-20 |
| O6 | Desk review scope; reviewer independence; risk-focused depth; resolving deficiencies; appraisal bias | Reviewers "should be independent of and insulated from any influence by loan production staff"; depth is risk-focused [VERIFY: Guidelines Section XV.A, XV.B; checked 22 Nov 2026]. Fair Housing Act reaches "appraising of residential real property" [VERIFY: 42 U.S.C. 3605(b)(2); checked 22 Nov 2026] | CORE-VAL-03; CORE-VAL-01 |

**New formulas and data (owner decision).** O2 needs a DCF formula and a band-of-investment formula; the Library has neither. The running deals carry no DCF inputs (discount rate, growth, terminal cap) and no comparable sales. **Data gap:** add them to the RD-COM-01 and RD-RES-01 appraisal records in Running Deals before T2 and T3 are written. This blueprint invents no rate.

## 4. Depth targets

1. **The full income approach.** DCF with a reversion at a terminal cap rate, and when the OCC says each method fits (pp. 43-44). The lesson teaches direct cap only.
2. **Where cap rates come from.** Market extraction from comparables, band of investment, yield less growth, and the spread to the 10-year Treasury. Birchwood's 8.00% sits 400 bp over the course's month-24 Treasury of 4.00% (RD-COM-01). Against the real FRED DGS10 of 5.04% on 19 Nov 2026 (read 22 Nov 2026), the spread is 296 bp. Real data stays labelled.
3. **As-is value of a partly leased property.** Birchwood's in-place NOI of $300,000 at 8.00% gives $3,750,000. The as-is appraisal is $4,500,000, $1,500,000 below the $6,000,000 as-stabilized value. The learner explains the gap with 12 CFR 34.44(d) and Appendix C deductions (lease-up cost, TI/LC, capex, profit), not by capping in-place income.
4. **Sales comparison and cost approaches.** Adjustment grids, price per unit, and the cost approach's role on newer or special buildings. Maple Run's $520,000 ARV needs finished-home comps the running deal lacks.
5. **The federal framework in full.** FIRREA Title XI as applied in 12 CFR 34 subpart C: 34.42 definitions, 34.43 thresholds, 34.44 standards, 34.45 independence. The 2010 Guidelines Sections V, VI, XIV and XV. The 2024 AVM rule and why it stops at a consumer's principal dwelling.
6. **Validity versus a bright line.** CORE-VAL-02 sets 120 days. The Guidelines (XIV) and the OCC (p. 61) say "an arbitrary period of time ... should not be used as the decisive criteria". Teach 120 days as a ceiling, with the validity factors on top. Policy text is the owner's call.
7. **Appraisal bias and fair housing.** 42 U.S.C. 3605(b)(2) covers appraisals of residential property, including RTL and DSCR collateral (needs-analysis K6).
8. **Market data series.** FRED COMREPUSQ159N, commercial real estate prices (IMF), latest Q1 2026: +6.58% year on year. CBRE's survey is behind registration.

## 5. Sequence

| # | Chunk (objective) | Words | Worked example (running deal) | Practice (second deal, LD-05/LD-08) |
| --- | --- | --- | --- | --- |
| T1 | Values, premises and dates (O1) | 2,600 | Keep: three values table. Maple Run as-is $310,000, ARV $520,000 (RD-RES-01) | Cedar Court as-is $6,300,000, as-stabilized $8,600,000; which test uses each (RD-MF-01) |
| T2 | Income approach: direct cap and DCF (O2) | 3,400 | Keep: Birchwood $480,000 ÷ 8.00% = $6,000,000.00; ±25 bp gives $5,818,181.82 and $6,193,548.39. Add DCF once inputs exist (data gap) | Cedar Court: $575,000 ÷ $8,600,000 = 6.69%; at 7.00%, $8,214,285.71 |
| T3 | Sales comparison, cost and reconciliation (O3) | 2,800 | Maple Run ARV support (comps to be added, data gap) | Fictional comps grid for a small office (illustrative, Bible §6) |
| T4 | Lender value rules and federal framework (O4) | 3,600 | Keep: Birchwood bridge $2,860,000 ÷ min($4,400,000, $4,500,000) = 65.00%; Maple Run 12-day appraisal age. Add: 12 CFR 34.43 thresholds applied to each running deal | Cedar Court: 124-day age fails CORE-VAL-02; appraisal at $6,000,000 gives a $4,200,000.00 day-one loan (MF-BR-02) |
| T5 | Leverage (O5) | 2,000 | Keep: Birchwood constant 8.4814% versus 8.00% cap; cash-on-cash 7.11% (F-CORE-44) | Cedar Court exit: 6.51% NCF cap versus 8.0240% constant (MF-BR-08) |
| T6 | The desk review (O6) | 2,600 | Birchwood as-is: explain the $1,500,000 gap between as-is and as-stabilized | Keep the OJT desk review of the Birchwood as-stabilized appraisal |
| Job aid | One page | 700 | Mini-example kept | n/a |
| Real-world check, "What to look up yourself", "How to check it" |  | 800 | n/a | n/a |
| **Total counted words** |  | **18,500** |  |  |

**What must change in the current lesson.**

| Action | Item |
| --- | --- |
| Add | DCF and cap-rate derivation (T2); sales comparison and cost approaches (T3); 12 CFR 34.42-34.45 and Guidelines V, VI, XIV, XV (T4); the AVM rule's scope; reviewer independence and the desk review as its own chunk (T6); appraisal bias under 42 U.S.C. 3605(b)(2) |
| Deepen | T1: extraordinary assumptions and hypothetical conditions with the Guidelines' glossary text. T4: validity factors beyond the 120-day age. T5: why negative leverage makes DSCR bind |
| Correct | **T5 and F-CORE-44:** the lesson calls value less loan "total cash invested". It is equity at appraised value. Birchwood's actual cash to close was $1,735,200 (RD-COM-01). Relabel, and ask the owner whether the Library note "C5 takes E = value − loan" should stay. **Practice 5:** "the exit test sizes on DSCR, not on value" is misleading. MF-BR-08 tests both 1.25x DSCR and 80% LTV; DSCR binds because of negative leverage. **T4:** add 12 CFR 34.43 (OCC) beside the FDIC 323.3 cite; the thresholds match. The facts table lacks a knowledge level (M2) |
| Cut | The CBRE Albuquerque and Houston ranges in the OJT model answer: they do not fit an Indiana strip center. Use the Treasury spread with labelled real data, and keep CBRE as a look-up |
| Replace | Quiz sets A and B become review questions and two exam forms (§6) with feedback on every option |

## 6. Assessment plan

Sized at the projected 4.0 credits (§7). Four-option multiple choice, one best answer, feedback for every option. No true/false.

| Obj | Review questions | Exam Set A | Exam Set B | Critical items per form |
| --- | ---: | ---: | ---: | --- |
| O1 | 2 | 3 | 3 | 1 (as-is, never ARV, for the day-one advance) |
| O2 | 3 | 5 | 5 | 1 (value from NOI and cap rate) |
| O3 | 3 | 4 | 4 | 0 |
| O4 | 3 | 5 | 5 | 2 (lower of cost or value; appraisal age) |
| O5 | 2 | 3 | 3 | 0 |
| O6 | 3 | 4 | 4 | 1 (borrower-ordered appraisal rejected) |
| **Total** | **16** | **24** | **24** | **5** |

- Review: 16, above the QAS minimum of 12 at 4.0 credits (3 × 4) and equal to the build target of 4 per credit.
- Exam: 24 per form, above the minimum of 20 (5 × 4) and equal to the build target of 6 per credit. Every objective has at least 3 items per form. No overlap with review questions or between forms.
- O6 items give a short appraisal extract and ask for the best-supported reviewer action.
- Practice: 12 open problems (Cedar Court, a fictional office). Interactive: 4 exercises (value-type matcher, cap-rate slider, comps grid, appraisal-age calendar).

## 7. Hour estimate

| Input | Count | Minutes |
| --- | ---: | ---: |
| Counted words (§5) | 18,500 | 18,500 ÷ 180 = 102.778 |
| Review questions | 16 |  |
| Exam items (one form) | 24 |  |
| Practice problems | 12 |  |
| Interactive exercises | 4 |  |
| All questions | 56 | 56 × 1.85 = 103.600 |
| Media | 0 | 0.000 |
| **Total** |  | **206.378** |

206.378 ÷ 50 = 4.128 credits, rounded down to fifths: **4.0 credits** (3.4 clock hours, plus the OJT task). At halves only, 4.0. The Course Bible lists 3 hours. It stays under LD-03's 4-hour cap, so no split is needed.

## 8. Prerequisites and overlaps

**Prerequisites (precise, Std 3.02.1).** Before C5, a learner can:

- build underwritten NOI and NCF, and tell in-place from stabilized income (C4);
- calculate the loan constant (C3);
- state the purpose test and the regulatory map (C1);
- explain why bank rules reach a non-bank lender through its loan buyers (C0 preview; C2 supervisory standards).

Advance preparation: none.

| Module | Relationship | No duplication rule |
| --- | --- | --- |
| C1 | Fair lending map | C1 owns ECOA and the Fair Housing Act; C5 applies 3605(b)(2) to appraisals only |
| C4 | NOI and NCF | C5 uses them; it does not rebuild them |
| C8 | LTV, LTC, LTARV sizing; binding test | C5 teaches which value; C8 sizes the loan |
| C9 | Environmental and condition reports | C9 owns them; C5 notes their effect on value |
| C12, C13 | Value monitoring; REO value (F-CORE-42; CORE-SVC-08) | C5 teaches validity; C12 and C13 apply it after closing |
| C14 | Valuation section of the memo | C14 owns committee use. C5 owns the review and valuation governance (K5) in full (coverage review, 22 Nov 2026) |
| R2, M3, CM3 | Family valuation detail (ARV comps, rent comps, TI/LC) | Family modules add property-type depth |

## Self-check

| Check | Result |
| --- | --- |
| 8 parts in the role-file order | Met |
| 4-8 objectives, at least half Apply or above | Met: 6, five at Apply or above |
| Objectives mapped to needs-analysis tasks | Met; adds K5 and K6, which §3 of the needs analysis flagged as gaps |
| Real rules name an opened primary source | Met. 12 CFR 365 Appendix A rests on the lesson's 22 Nov check |
| No invented policy limit or rate | Met. DCF inputs and comps are flagged as data gaps |
| Running-deal numbers match | Met |

## What to look up yourself

1. CBRE's H1 2026 Cap Rate Survey (registration needed): the Indianapolis neighborhood retail range for Class B and C.
2. USPAP Standard 3 (appraisal review), 2024 edition, from The Appraisal Foundation.
3. The AMC minimum requirements in 12 CFR 34 subpart H. They were not opened for this blueprint.

## How to check it

1. `=300000/8%` should return 3,750,000: Birchwood's in-place NOI capped, below the $4,500,000 as-is value.
2. `=8%-5.04%` should return 2.96%, the spread to the real 10-year Treasury.
3. Open 12 CFR 34.43 on eCFR and confirm the $400,000, $500,000 and $1,000,000 figures.
