# C3 blueprint: Real estate finance math: interest, amortization, debt service

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C3, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Intermediate (qas-spec.md) |
| Field of study | Finance about 85%, Specialized Knowledge about 15% (legal day-count and usury content). Planning split by content time (Std 7.01.1); confirm from the final lesson |
| Current lesson read | `modules/core/c03/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Inputs | Formula Library F-CORE-01 to -05, -33, -40; Model Credit Policy D-CONV-01, -02; CORE-CLS-04; CORE-PRC-02, -03, -05; COM-BR-03, -06; MF-BR-09, -14; COM-TRM-02, -04; MF-TRM-05, -08; Running Deals (22 Nov 2026) |
| Needs analysis | `docs/curriculum/needs-analysis.md` v0 (tasks U5, U8, U10, S1, S6, S8, F2, O4, K7) |
| Status | v0 blueprint, 22 Nov 2026, for owner review. Nothing in the lesson or Course Bible was changed |

## 1. Module purpose

C3 builds the interest, payment and debt-service math that every sizing, billing and payoff task uses. It follows C2's loan life cycle and feeds DSCR in C4, leverage in C5, sizing in C8, and closing and billing in C11 and C12.

## 2. Learning objectives

By the end of C3, you will be able to:

| # | Objective (one verb, LD-01) | Bloom level | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Calculate** the interest for any billing period on an interest-only loan, Actual/360, with mid-period draws and paydowns, to the cent (F-CORE-01, -05; D-CONV-02). | 3 Apply | S1, F2, S8 |
| O2 | **Convert** a quoted rate between nominal, effective annual and Actual/360 bases, using present value, future value and annuity formulas. | 3 Apply | U5, S1, U8 |
| O3 | **Calculate** the amortizing payment, the schedule rows and the balloon balance at maturity (F-CORE-02). | 3 Apply | U5, U10, S8 |
| O4 | **Calculate** annual debt service and the loan constant on the test basis for interest-only, amortizing and partial interest-only loans (F-CORE-03, -04; D-CONV-01). | 3 Apply | U5 |
| O5 | **Calculate** a floating note rate and its coverage test rate from Term SOFR, the spread and the cap strike (COM-BR-03; MF-BR-09). | 3 Apply | U5, S6 |
| O6 | **Analyze** the lender's yield and the borrower's all-in cost from the note rate, points and term (F-CORE-06, -40). | 4 Analyze | O4, U8, K7 |

**Bloom mix:** 5 Apply, 1 Analyze. All six are at Apply or above.

**Conflict to resolve (owner).** Course Bible LD-02 says core modules aim at levels 2-3. O6 is level 4. The depth decision (upper-undergraduate to early-graduate) needs LD-02 amended to allow level 4 in core. Six objectives fit LD-01 (3-6), the role file (4-8) and Std 3.01 (3-8).

## 3. Content map

| Obj | Concepts | Real rules and primary sources | Model policy and formulas |
| --- | --- | --- | --- |
| O1 | Per diem; period interest; funding day counts, payoff day does not; split periods at draws; round once; prepaid interest to month-end | The note's day-count clause governs. Ohio's supreme court held a "365/360 basis" clause unambiguous: interest is the annual rate over 360 days, times actual days [VERIFY: *JNT Properties, L.L.C. v. KeyBank Natl. Assn.*, 134 Ohio St.3d 209, 2012-Ohio-5369 (21 Nov 2012); checked 22 Nov 2026]. ARRC recommends Actual/360 for SOFR business loans [VERIFY: ARRC, SOFR syndicated loan conventions, newyorkfed.org; checked 22 Nov 2026] | F-CORE-01, -05, -33; D-CONV-02; CORE-CLS-04 |
| O2 | Time value of money: PV, FV, ordinary annuity; nominal versus effective annual rate; Actual/360 uplift (r × 365/360); monthly compounding | Market convention; no statute sets a business-purpose disclosure basis. TILA's APR rules do not apply to business-purpose credit (C1) [VERIFY: 12 CFR 1026.3(a); checked 18 Nov 2026 per Course Bible §1] | D-CONV-01. **New formulas needed** (see note below): PV/FV/annuity; effective annual rate |
| O3 | Level payment; amortization versus term; schedule; remaining balance; balloon risk at maturity | OCC: examiners flag "loans that are renewed on an interest-only basis without appropriate mitigants" and failure to require curtailments [VERIFY: OCC, *Comptroller's Handbook: Commercial Real Estate Lending* v2.0, Mar 2022, p. 57; checked 22 Nov 2026] | F-CORE-02; COM-TRM-02 (5, 7 or 10 years; 25-year amortization); MF-TRM-05. **New formula needed:** remaining balance |
| O4 | ADS; loan constant to six decimals; interest-only test ADS = L × r; partial interest-only; why sizing divides by the constant | OCC: DSCR "should consider the loan amortization period and the expected volatility of the cash flow" [VERIFY: OCC CRE Handbook v2.0, p. 43; checked 22 Nov 2026] | F-CORE-03, -04; D-CONV-01; MF-TRM-05; COM-TRM-03 |
| O5 | Term SOFR; spread; index floor; rate cap strike; coverage test rate = higher of note rate and strike + spread; LIBOR's legislated replacement as history | For non-consumer contracts, the Fed's replacement for one-month LIBOR is one-month CME Term SOFR plus 0.11448% [VERIFY: 12 CFR 253.4(b)(1)(ii), (c)(2) (Regulation ZZ); checked 22 Nov 2026]. Cap confirmations use Actual/360 (lesson's cited Wells Fargo template) | COM-BR-03, -06; MF-BR-09, -14; D-CORE-27 (SOFR path); Running Deals SOFR 3.65% |
| O6 | Lender IRR with points; borrower all-in cost; F-CORE-40 screen versus a true yield; why a usury test may count fees | Usury and fee rules follow the property state; check exemptions first [VERIFY: State Law Table SLT-OH-01, SLT-NC-02, SLT-IN-02; checked 20 Nov 2026] | F-CORE-06, -28, -40; CORE-PRC-02, -03. **New formula needed:** internal rate of return |

**New formulas (owner decision, Formula Library).** O2, O3 and O6 need four formulas the Library lacks: PV/FV/annuity, effective annual rate, remaining balance and IRR. This blueprint assigns no IDs. The owner adds them to the Library tab, with fixtures (`npm run fixtures`), before the lesson is rewritten. No new policy limit is needed.

## 4. Depth targets

What a university real estate finance course covers that the current lesson does not.

1. **Time value of money as the foundation.** PV, FV, annuity and the payment formula derived from the annuity. The current lesson gives F-CORE-02 without its origin. Learners should derive the constant from the annuity factor.
2. **Rate conversions.** Nominal, effective annual and Actual/360 effective. At 10.250% Actual/360, Maple Run pays 10.392% over a 365-day year. Monthly compounding of 7.000% gives 7.229% effective.
3. **Remaining balance and balloon risk.** Birchwood's $3,900,000 term loan still owes $3,066,702.23 after 120 payments (what-if term; see §5 data gap). Cedar Court's $5,472,000 owes $4,722,901.67 after 120. Refinance risk at maturity is the U10 task.
4. **Day-count law, not only convention.** *JNT Properties v. KeyBank* (Ohio 2012) on a 365/360 clause, in Maple Run's state. Contrast the usury cases that challenged 365/360 (see "What to look up yourself").
5. **Floating-rate mechanics.** Term SOFR versus overnight SOFR, spreads, floors, caps, and the LIBOR Act replacement under Regulation ZZ (12 CFR 253.4). **C3 owns this topic** (coverage review, 22 Nov 2026). C8 uses it for cap-strike sizing and C12 for cap operations; neither reteaches it.
6. **Lender yield versus all-in cost screen.** Simplify Maple Run to full funding on day one. Its IRR is 11.848% nominal (12.513% effective). The F-CORE-40 screen gives 11.75%, and it is not a yield.
7. **Partial interest-only structures.** Debt service in the IO period versus after it; which one the test uses (MF-TRM-05; COM-TRM-03).
8. **Market data series.** NY Fed SOFR; CME Term SOFR; 10-year Treasury, FRED series DGS10 (5.04% on 19 Nov 2026, as read 22 Nov 2026). Real data stays labelled and never replaces a running-deal input (Bible 5.4).

## 5. Sequence

Each chunk follows LD-04: teach, a four-line worked example, then a review question. Word budgets are counted words.

| # | Chunk (objective) | Words | Worked example (running deal) | Practice (second deal, LD-05/LD-08) |
| --- | --- | --- | --- | --- |
| T1 | Interest-only interest, per diem, split periods; the note clause and *JNT* (O1) | 2,300 | Keep: Maple Run Jan-Mar 2027, $240,000 at 10.250%, draw $30,000 on 15 Mar: March $2,263.54 (RD-RES-01) | Cedar Court month 10, $4,740,000 at 9.00%: 31-day month $36,735.00 (RD-MF-01) |
| T2 | Time value of money and rate conversions (O2) | 2,400 | Maple Run: 10.250% Actual/360 = 10.392% over 365 days; derive F-CORE-02 from the annuity factor | Cedar Court: 7.65% bridge rate converted to its 365-day effective rate (7.756%) |
| T3 | Amortizing payment, schedule and balloon (O3) | 2,300 | Keep: Birchwood $3,900,000, 7.000%, n = 300: $27,564.39; months 1-3. Add: balance after 120 payments $3,066,702.23 | Cedar Court $5,472,000, 7.250%, n = 360: $37,328.69; balance after 120 $4,722,901.67 |
| T4 | ADS, constant, test versus bill, partial IO (O4) | 2,200 | Keep: Birchwood ADS $330,772.68, constant 0.084814; bridge test ADS $235,950.00 versus billed $239,227.08 | Cedar Court day one: $358,050.00 test versus $363,022.92 billed |
| T5 | Floating rates, SOFR, caps and the test rate (O5) | 1,800 | Cedar Court: 3.65% + 4.00% = 7.65%; test rate max(7.65%, 4.25% + 4.00%) = 8.25% (MF-BR-09); month 10 at 5.00% SOFR: 9.00% | Birchwood month 18: 4.75% + 4.00% = 8.75%; cap pays 0.50% (COM-BR-03) |
| T6 | Lender yield and all-in cost (O6) | 1,900 | Maple Run: 1.50 points ($5,100), 12 months, IRR versus F-CORE-40 (11.75%) | Birchwood bridge: 1.00% origination ($35,200) on the $3,520,000 commitment |
| Job aid | One page | 700 | Mini-example kept | n/a |
| Real-world check, "What to look up yourself", "How to check it" | Primary sources replace secondary ones | 900 | n/a | n/a |
| **Total counted words** |  | **14,500** |  |  |

**What must change in the current lesson.**

| Action | Item |
| --- | --- |
| Add | T2 (time value of money and rate conversions); the balloon balance in T3; T5 (floating rates); T6 (yield); partial interest-only in T4; *JNT* and Regulation ZZ in T1 and T5 |
| Deepen | T1: what the note says, and what a court reads it to mean. T3: derive the payment from the annuity. T4: the constant's role in sizing, with the condition that sizing is DSCR-bound |
| Correct | T3 says a rate-sized loan "would carry about 21% more debt". That holds only when DSCR binds; say so. T2's common slip uses a 7-year term "as an example only": the running deals set no term. **Data gap:** Running Deals sets no term for the Birchwood or Cedar Court term loan. COM-TRM-02 and MF-TRM-05 allow 5, 7 or 10 years; the owner picks one. Until then, label 120 months a what-if. The Real-world check rests on Law Insider and a law-firm blog: replace them with the *JNT* opinion and the ARRC conventions. The facts table shows Bloom levels but no knowledge level (compliance matrix M2) |
| Cut | The T4 prose that repeats the test-versus-bill table. The 45-minute timing plan and the OJT minutes in the facts table do not reach the page; keep them as author notes only |
| Replace | Quiz sets A and B become review questions and two exam forms (§6). Every item gets feedback on every option (M17) |

## 6. Assessment plan

Sized at the projected 3.4 credits (§7). All items are four-option multiple choice, one best answer, with feedback for every option. No true/false.

| Obj | Review questions (in-lesson, scored) | Exam Set A | Exam Set B | Critical items per form |
| --- | ---: | ---: | ---: | --- |
| O1 | 3 | 4 | 4 | 1 (period interest with a draw) |
| O2 | 2 | 3 | 3 | 0 |
| O3 | 3 | 4 | 4 | 1 (n = amortization, not term) |
| O4 | 2 | 4 | 4 | 1 (constant, not rate, in sizing) |
| O5 | 2 | 3 | 3 | 1 (test rate under COM-BR-03 or MF-BR-09) |
| O6 | 2 | 3 | 3 | 0 |
| **Total** | **14** | **21** | **21** | **4** |

- Review: 14 items. The QAS minimum at 3.4 credits is 10 (3 × 3 + 1). The build target is 4 per credit: 13.6, rounded up to 14. Place two or three after each chunk.
- Exam: 21 items per form. The minimum is 18 (5 × 3 + 3). The build target is 6 per credit: 20.4, rounded up to 21. Every objective has at least 3 items per form, so coverage is 100% (at least 75% needed). No item repeats a review question; Sets A and B do not overlap.
- Pass mark 80% and every critical item correct. Without a test bank, no feedback after a failed attempt (Std 6.01.2).
- Practice: 12 open problems on Cedar Court and Birchwood, with model answers. Interactive: 4 exercises (day-count picker, schedule builder, rate converter, yield slider).

## 7. Hour estimate

Word-count formula (Std 7.02.5-.7): credits = [(words ÷ 180) + media minutes + (all questions × 1.85)] ÷ 50.

| Input | Count | Minutes |
| --- | ---: | ---: |
| Counted words (§5) | 14,500 | 14,500 ÷ 180 = 80.556 |
| Review questions | 14 |  |
| Exam items (one form taken) | 21 |  |
| Practice problems | 12 |  |
| Interactive exercises | 4 |  |
| All questions | 51 | 51 × 1.85 = 94.350 |
| Media (no narration-only video) | 0 | 0.000 |
| **Total** |  | **174.906** |

174.906 ÷ 50 = 3.498 credits, rounded down to fifths: **3.4 credits** (2.9 clock hours of measured time, plus the off-page OJT task). At halves only, 3.0. The raw figure sits 0.002 below 3.5; do not rely on a half-credit board result until the lesson is final. The Course Bible lists 3 hours; the rise reflects the added depth.

## 8. Prerequisites and overlaps

**Prerequisites (precise, for the Intermediate level, Std 3.02.1).** Before C3, a learner can:

- use a spreadsheet: cell references, absolute references and ROUND;
- work with percentages and exponents;
- read a term sheet's rate, points and term, and place a loan in its life-cycle stage (C2);
- say whether a loan is business purpose (C1).

Advance preparation: none.

| Module | Relationship | No duplication rule |
| --- | --- | --- |
| C1 | TILA exemption for business purpose | C3 cites it once; it does not reteach it |
| C2 | Life cycle and term sheet | C3 uses the terms; C2 owns them |
| C4 | DSCR uses C3's ADS | C4 owns income; C3 owns debt service |
| C5 | Constant versus cap rate (leverage) | C3 computes the constant; C5 owns the leverage analysis |
| C8 | Sizing by DSCR, debt yield and the binding test | C8 owns sizing and pricing grids; C3 gives the math only |
| C10 | Usury and fee limits by state | C3 shows the yield math; C10 owns the legal test |
| C11 | Prepaid interest, net funding (F-CORE-33, -41) | C3 previews CORE-CLS-04; C11 owns the closing statement |
| C12 | Billing, caps, payoffs (F-CORE-32) | C3 teaches the math once; C12 applies it to servicing |
| C8; CM4, M3 | Prepayment premiums (F-COM-24; MF-TRM-06; COM-TRM-05), yield maintenance | Out of C3. C8 owns the core designs; CM4 and M3 add family depth. Yield maintenance needs PV, which C3 now teaches |

## Self-check

| Check | Result |
| --- | --- |
| 8 parts in the role-file order | Met |
| 4-8 objectives, measurable, one verb, at least half Apply or above | Met: 6, all Apply or above |
| Every objective mapped to needs-analysis tasks | Met |
| Real rules name an opened primary source | Met, except the 1026.3(a) cite, which rests on the Course Bible's 18 Nov check |
| No invented policy limit | Met. New formulas are flagged for the owner; no IDs assigned |
| Running-deal numbers match `data/running-deals/` | Met; the 120-month balances are labelled what-ifs (data gap) |
| Assessment sized per qas-spec.md | Met: 14 review, 21 per exam form |

## What to look up yourself

1. *American Timber & Trading Co. v. First National Bank of Oregon*, 334 F. Supp. 888 (D. Or. 1971), a usury challenge to 365/360. Justia blocked access on 22 Nov 2026.
2. The Illinois Interest Act amendment that permits 365/360 on commercial loans (Public Act 96-1421, 2010). The exact section was not opened.
3. The Ohio Supreme Court's own PDF of 2012-Ohio-5369. Its server refused the connection; the text was read on a case-law mirror.

## How to check it

1. In a spreadsheet, `=FV(7%/12,120,27564.39,-3900000)` should return about 3,066,702.23, the Birchwood what-if balloon.
2. `=10.25%*365/360` should return 0.103924.
3. Open 12 CFR 253.4 on eCFR and confirm the 0.11448% one-month tenor spread.
