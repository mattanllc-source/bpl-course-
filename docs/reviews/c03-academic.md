# C3 academic review: Real estate finance math (interest, amortization, debt service)

Model policy for training - not for live lending decisions.

| Item | Detail |
| --- | --- |
| Module | C3, `modules/core/c03/lesson.md` (v1.0-draft, rewritten to blueprint 22 Nov 2026; `docs/SNAPSHOT.md`: current) |
| Plan read | `docs/curriculum/c03-blueprint.md` v0; `docs/accreditation/qas-spec.md` |
| Also read | Formula Library F-CORE-01 to -05, -13, -40, -45 to -48, F-MF-12; Model Credit Policy D-CONV-01, -02, COM-BR-02, -03, COM-TRM-02 to -09, MF-BR-09, -11, -14, MF-TRM-02, -05, -08; `data/running-deals/running-deals.md` |
| Reviewer stance | Independent academic reviewer (graduate CRE finance; curriculum committee). Not the author |
| Date | 22 Nov 2026 |
| Method | Every number in T1-T6, Practice, the quiz keys and the job aid was recomputed in Python (float, half-up display, bisection IRR). An Actual/360 amortization schedule and the real Maple Run draw-pattern IRR were built independently. Literature cited from memory; confirm details before quoting |

## Overall grade: B (Teach section alone: B+)

**Justification.** This is the strongest module I have reviewed in the series. The arithmetic is correct to the cent almost everywhere. I recomputed about 120 figures and found no arithmetic error in T1-T6. The payment is derived from the annuity rather than asserted. The test-basis versus billed-basis distinction is taught with unusual care, and the IO-gate and cap-strike material is genuinely graduate-level.

Four things keep it from an A.

1. **A conceptual contradiction about Actual/360 on amortizing loans.** T2 says our 7.000% Actual/360 term note costs 7.333%. T3 says schedule interest uses rate ÷ 12, which implies 7.229%, and calls Actual/360 schedule interest a "slip". Real Actual/360 amortizing notes accrue actual days, and the balloon is larger.
2. **Two standard IRR teaching errors.** One is the "reinvestment assumption" claim. The other is the advice to abandon IRR whenever cash flows change sign more than once, which stops learners computing a yield that is in fact unique.
3. **The quiz is still v0.** It covers three of six objectives, has mislabeled objectives and contradicts the lesson on one critical item.
4. **No anchor in the standard texts.** The module re-derives material Brueggeman and Fisher teach as the "effective cost of borrowing" without citing it. It also misses the accounting link (ASC 310-20) that a CPA audience would expect.

## Strengths

1. **Derivation over memorization (T2, WE3).** "So the payment formula is not a rule to memorize. It is the annuity solved for PMT." The geometric-series origin is stated, and the 18-cent rounding residue is explained. This is exactly the depth a graduate course wants.
2. **Rounding discipline.** Round once per period (WE1: $2,263.54 versus $2,263.55 if segments are rounded), per-diem drift ($1,645.69 versus $1,645.77), row-by-row versus closed-form balance (4 cents), and PV of remaining payments (38 cents). Learners see why three correct methods differ by cents.
3. **Legal reasoning on day count (T1).** Pairing *JNT Properties* (contract meaning) with *American Timber* (statutory cap) and stating "The two cases do not conflict" is a model of how to teach law to finance students.
4. **The constant and the binding constraint (T4).** The correction that the "about 21% more debt" warning applies only when DSCR binds, illustrated by Birchwood (LTV-bound) versus Cedar Court (DSCR-bound), is excellent. It is better than most textbooks.
5. **Partial IO (T4, WE10).** The IO-period balloon comparison ($115,545.36 saved, $216,098.65 more owed) and the OCC "as though the loan were amortizing" quote make a clear, sourced credit point.
6. **Cap mechanics (T5).** The four-column SOFR table separating coverage at the note rate, the borrower's net capped rate and the policy test rate is precise. It also states why the policy test reads coverage before cap income.
7. **Sensitivity grid (T6).** Points × holding period, with the F-CORE-40 screen beside each IRR, is a well-designed analysis artifact that supports O6 at level 4.

## Findings

### Critical

**C-1. Actual/360 on an amortizing note: T2 and T3 contradict each other, and T3 calls real-world practice a mistake.**

- *Location.* T2 "Comparing two quotes"; T3 "The payment (F-CORE-02)" and "Common slips"; job aid "Schedule row".
- *Quote.* T2: "Our note is 7.000%, Actual/360, paid monthly. ... Ours costs ... 7.333% (D = 365)." T3: "The formula uses 12 equal months by market convention, not Actual/360." T3 slips: "Applying Actual/360 to schedule interest. Schedules use rate ÷ 12, the F-CORE-02 convention."
- *Why it matters.* Both statements cannot be true of one note. If Birchwood's term loan bills Actual/360, as T1 says every note does ("Every note bills Actual/360 (F-CORE-01)"), then each month's interest is balance × 7% ÷ 360 × actual days. The level payment is still set on the 30/360 annuity. So less of each payment repays principal, and the balloon is larger. F-CORE-02 itself says so: "accrual on billing still follows the note". I rebuilt Birchwood's schedule with Actual/360 accrual and the fixed $27,564.39 payment, starting 1 Jan 2029. The balance after 120 payments is **$3,118,446.42**, not $3,066,702.23. That is $51,744 (1.7%) more balloon. It changes the refinance tables in T3. Teaching learners that the actual accrual method is a "slip" is a conceptual error that a servicer or credit officer would carry into practice.
- *Fix.*
  1. In T3, replace "The formula uses 12 equal months by market convention, not Actual/360." with: "The payment uses 12 equal months by convention. On an Actual/360 note, interest still accrues on actual days. So more of each payment goes to interest than the 30/360 schedule shows, and the balloon is larger. Our model schedule (F-CORE-02, F-CORE-47) uses rate ÷ 12 for simplicity. That is a model convention, not how every real note works."
  2. Replace the slip with: "Mixing bases inside one schedule. Our model schedule uses rate ÷ 12 throughout (F-CORE-02). A real Actual/360 note accrues actual days, so check which basis the note uses before quoting a balloon."
  3. Add a what-if line under WE7: "If the note accrued Actual/360 on the same payment, the balance after 120 payments would be about $3,118,446 (from 1 Jan 2029), about $51,700 more. The exact figure depends on the dates."
  4. In T2, qualify the comparison: "Ours costs 7.333% if interest accrues Actual/360 every month, as our bridge notes do. Under our model term-loan schedule (rate ÷ 12), the two quotes would cost the same 7.229%."
  5. Owner action: decide whether model term notes bill Actual/360 (then F-CORE-47 needs an Actual/360 variant and fixtures) or 30/360 (then T1's "Every note bills Actual/360" needs an exception for amortizing term notes). This is a Formula Library decision; I do not propose a value.

**C-2. The quiz cannot assess the module as written.**

- *Location.* Section 6, Sets A and B and keys; Alignment matrix.
- *Quote.* Set A item 4 "(Critical, O2) Monthly payment on $750,000 ..."; items 11-12 "(O5) ... Month 1 principal?" Set B key 8: "so dividing by the rate gives a loan about 21% too large."
- *Why it matters.* (a) Only O1, O3 and O4 content is tested; O2, O5 and O6 have no items. That is 50% objective coverage, below the 75% minimum in Std 6.01.2. (b) Objective labels are wrong: payment items are labeled O2, ADS and constant items O3, and schedule items O5. (c) Set B key 8 restates the "21% more debt" claim that T4 corrects. (d) Keys explain only some distractors (Set A item 4 does not explain D; item 6's distractor B "multiplies a different payment" is not a plausible error). The build rule requires feedback for every option.
- *Fix.* Replace both sets with the 14 review questions and two 21-item forms specified in blueprint section 6, using the item specifications under "Assessment readiness" below. Until then, at minimum, change Set B key 8 to: "C. The rate (7.000%) is below the constant (8.481%), so the DSCR test allows about 21% more loan. That matters only when DSCR is the binding test (T4)."

### Major

**M-1. The "reinvestment assumption" is taught as a property of TVM and IRR.**

- *Location.* T2 after WE3 and "What compounding assumes".
- *Quote.* "The lender who reinvests every payment ends where it would have been with the loan left to compound. That equality is what 'earning 7.000%' means." "The same assumption sits inside every internal rate of return (IRR) in T6."
- *Why it matters.* This is a long-standing textbook myth. The IRR is the rate earned on the investment balance still outstanding each period. A mortgage's balance accrues at 7% and is paid down by each payment, so the lender earns 7% on what it has outstanding. That holds whatever the lender does with the cash it gets back. Reinvestment rates matter only if you convert to terminal wealth, for which the modified IRR (MIRR) exists. See Dudley, "A Note on Reinvestment Assumptions in Choosing between Net Present Value and Internal Rate of Return," *Journal of Finance* 27(4), 1972; Lohmann, "The IRR, NPV and the Fallacy of the Reinvestment Rate Assumptions," *The Engineering Economist* 33(4), 1988. Learners who believe the myth later misuse IRR in C8 and in equity analysis.
- *Fix.* Replace both passages with: "There is a second way to see 'earning 7.000%'. Each month the lender earns 7.000% ÷ 12 on the balance still owed. The rest of the payment returns its money. The IRR in T6 means the same thing: the rate earned on money still invested. It does not assume the lender reinvests payments at that rate. If you want to measure wealth at a future date, you must pick a reinvestment rate. That gives a different measure, the modified IRR." Keep the $22,329,132.07 FV as an illustration of growth, not of what 7% "means".

**M-2. IRR uniqueness: learners are told to abandon IRR on a loan whose IRR is unique.**

- *Location.* T6 "IRR and NPV answer the same question two ways"; "What drives the gap", item 2; "How to analyze a pricing quote", step 2. Also F-CORE-48 edge case.
- *Quote.* "When flows change sign more than once, use NPV; it always has one answer." "Those flows change sign several times, so F-CORE-48 says to report NPV at a stated rate. ... The real pattern yields more than 12%".
- *Why it matters.* Descartes' rule of signs gives only an upper bound on the number of roots. A loan with draws is a "pure investment": the cumulative cash flow stays negative until payoff, so it changes sign once, and the IRR is unique (Norstrom, "A Sufficient Condition for a Unique Nonnegative Internal Rate of Return," *Journal of Financial and Quantitative Analysis* 7(3), 1972). I built the real Maple Run flows: −$234,900 at closing ($240,000 less $5,100 points), monthly interest on the drawn balance, and draws of $30,000, $25,000, $20,000, $15,000 and $10,000 in months 2, 4, 6, 8 and 10. Cumulative flow changes sign once (−$307,225 at month 11, +$35,679 at month 12). The NPV at 1% a month is +$222.37, which matches the lesson. The IRR is unique: **12.081% nominal, 12.772% effective**. That is the answer O6 should expect, and the lesson stops short of it.
- *Fix.* Replace the sentence with: "Several sign changes can give several IRRs. But a loan is a special case. Add the flows up month by month. If the running total stays negative until payoff and then turns positive, the IRR is unique. Most loans with draws pass this test." Replace item 2's ending with: "The running total turns positive only at payoff, so the IRR is unique: 12.081% nominal (1.0067% a month). The real draw pattern yields more than the simplified 11.848%, because points are charged on the $340,000 commitment while less cash is out." Ask the owner to amend the F-CORE-48 edge case to the same cumulative-sign test and add the draw-pattern case as a fixture (`npm run fixtures`).

**M-3. The month-24 extension test uses the wrong rate under the lesson's own rule.**

- *Location.* T5 "The test rate at extension". Source: RD-COM-01 Role 3, what-if 5.
- *Quote.* "The extension test (COM-BR-02) uses the F-MF-12 basis: $3,520,000 × 8.25% = $290,400.00 of test interest. $380,000 ÷ $290,400 = 1.31x".
- *Why it matters.* F-MF-12 uses max(note rate, strike + spread). Under D-CORE-27, SOFR is 4.75% from month 18, so the month-24 note rate is 8.75%, above 8.25%. Problem 11 says exactly this: "In month 18 the note rate does (8.75%)". On the correct basis, $3,520,000 × 8.75% = $308,000 and coverage is $380,000 ÷ $308,000 = 1.23x. The extension still passes (≥ 1.00x), but the lesson contradicts its own rule and practice key on an O5 calculation.
- *Fix.* Replace with: "The extension test (COM-BR-02) uses the F-MF-12 basis. SOFR is 4.75% (D-CORE-27), so the note rate is 8.75%, above strike + spread. Test interest is $3,520,000 × 8.75% = $308,000.00. $380,000 ÷ $308,000 = 1.23x, at least 1.00x, so a 6-month extension is allowed." Owner action: the same figure appears in `data/running-deals/running-deals.md` (RD-COM-01, Role 3, what-if 5). Correct the running deal first, so lesson and data match.

**M-4. "Cap rate" is computed on NCF here and on NOI in C0 and F-CORE-13.**

- *Location.* T4, after the constant table.
- *Quote.* "Birchwood's 8.481% constant against a 7.23% cap rate ($434,000 ÷ $6,000,000)."
- *Why it matters.* F-CORE-13 defines cap rate = NOI ÷ value. C0 T5 uses Birchwood's NOI: $480,000 ÷ $6,000,000 = 8.00%. NCF ÷ value is a different measure (an NCF yield). The positive-versus-negative-leverage comparison C5 will build depends on which is used. Learners who meet 8.00% in C0 and 7.23% in C3 for the same property will be confused.
- *Fix.* Replace with: "One example is Birchwood's 8.481% constant against its 8.00% cap rate ($480,000 NOI ÷ $6,000,000; F-CORE-13). On NCF, the yield is $434,000 ÷ $6,000,000 = 7.23%. Either way the constant is higher, which C5 calls negative leverage."

**M-5. The academic anchor and the accounting link are missing.**

- *Location.* Whole module; T6 especially.
- *Why it matters.* (a) Brueggeman and Fisher teach T6's core idea as the "effective cost of borrowing" with points and early repayment. Their treatment includes the result that the effective cost rises as the holding period shortens, which is the lesson's sensitivity grid. Geltner, Miller, Clayton and Eichholtz cover the same mortgage mathematics and the yield-versus-APR distinction. Citing them tells a graduate learner where the standard treatment lives. (b) The program is NASBA CPE. Under US GAAP, nonrefundable loan fees net of direct costs are deferred and recognized as a yield adjustment by the interest method. That is the IRR of F-CORE-48. A CPA learner will look for that link, and it validates T6's central claim from an authority they already trust.
- *Fix.* Add to T6 after the F-CORE-40 table: "Accountants measure the same yield. Under US GAAP, net loan fees are recognized over the loan's life by the interest method. That method is the IRR on the net cash out [VERIFY: FASB ASC 310-20-35; checked: pending]. So the 11.848% is also how a lender's income statement would spread Maple Run's points." Add a "Further reading" line at the end of Teach: "Brueggeman and Fisher, *Real Estate Finance and Investments* (latest edition), chapters on fixed-rate mortgage loans and effective borrowing cost; Geltner, Miller, Clayton and Eichholtz, *Commercial Real Estate Analysis and Investments*, 3rd ed. (2014), chapters on present value mathematics and mortgage basics."

**M-6. The rate cap is taught as a mechanism but not as an option, and its premium is treated as a pure cost.**

- *Location.* T5 "Rate caps"; T6 "The borrower's all-in cost"; Problem 12.
- *Quote.* "The borrower buys it from a bank or dealer for a one-time premium." "Costs caused by the loan, such as the cap, go in." Problem 12: "The borrower's all-in cost is 8.819%, ignoring any cap payouts."
- *Why it matters.* A cap is a strip of call options (caplets) on the index. Its premium depends on strike, term, notional and rate volatility. That is why Cedar Court's cap ($60,000) and Birchwood's ($40,000) differ, and why extension caps get expensive when rates rise. Treating the premium as a pure cost overstates all-in cost. The cap has positive expected payoffs, and in the running deals it pays in month 18 ($1,441.67 a month on Birchwood). A graduate course would at least name the option structure.
- *Fix.* Add to T5 after "the cap pays the difference": "A cap is a series of options, one for each period, called caplets. Each pays if the index ends the period above the strike. The premium rises with the term, the notional and expected rate volatility, and falls as the strike rises. C12 covers buying and extending caps." Change Problem 12's result to: "8.819% if the cap never pays. Cap payouts reduce the borrower's net cost. In month 18 Birchwood's cap pays $1,441.67 for a 30-day month (Problem 10). So 8.819% is an upper bound, not the expected cost."

**M-7. Credit projection uses a superseded counting rule.**

- *Location.* Facts table "Hours"; blueprint section 7.
- *Quote.* "That projection counted open-answer practice, which the amended counting rule (qas-spec.md) excludes; recount".
- *Why it matters.* The lesson flags this, which is good. But the facts table still leads with "3.4 CPE credits". Under the amended rule, the blueprint's own inputs give 14,500 ÷ 180 + (14 + 21 + 4) × 1.85 = 80.556 + 72.150 = 152.706 minutes, or 3.054 credits. That rounds down to **3.0 credits**, not 3.4. Advertising 3.4 would be an overstatement (Std 7.02).
- *Fix.* Change the facts table to: "Projected 3.0 CPE credits under the amended counting rule (14,500 words; 14 review, 4 scored exercises, one 21-item exam form). Recount from the final lesson." To reach 3.4 honestly, the 12 practice problems would have to become scored interactive items, which also strengthens retrieval practice.

**M-8. Forward references overload an Intermediate learner whose stated prerequisites are C1 and C2.**

- *Location.* Facts table "Prerequisite"; T3 refinance-DSCR table and LTV calculation; T4 WE8, WE10, IO gates; T5 coverage and interest reserves.
- *Quote.* "Preview of C4: NCF $434,000 ÷ $330,772.68 = 1.31x DSCR (F-CORE-11). COM-TRM-09 unanchored retail needs 1.30x: passes."
- *Why it matters.* DSCR, NCF, debt yield, LTV gates and interest reserves are taught in C4, C5 and C8. C3 uses them in worked examples, practice and the IO flowchart. The blueprint says "C3 gives the math only", but O4 ("test basis for ... partial interest-only loans") and Problem 9 require policy-gate reasoning. That is extraneous load, and it makes O4 items depend on content not yet taught.
- *Fix.* (1) Add a 120-word "Terms used before they are taught" box at the top of T3: NCF, DSCR = NCF ÷ ADS, LTV, debt yield, interest reserve, each in one line with the module that teaches it. (2) In O4 and Problem 9, assess only which ADS the test uses, not whether the IO gate passes. (3) Move the IO-gate flowchart to C8, leaving a one-line pointer.

**M-9. Spreads and credit risk are not explained.**

- *Location.* T5 "Index plus spread"; "Spreads and floors".
- *Quote.* "The spread, or margin, is fixed in the note and pays the lender for credit risk, costs and profit." "The spread is set by policy."
- *Why it matters.* A university course would decompose the spread: expected loss (probability of default × loss given default), a risk premium, liquidity and funding cost, and operating cost. That links C0's capital stack to C3's pricing and explains the 25 bp leverage adjuster (MF-BR-14) and the higher office spread (COM-BR-06). The option-based view of mortgage default is the standard graduate treatment (Titman and Torous, "Valuing Commercial Mortgages: An Empirical Investigation of the Contingent-Claims Approach to Pricing Risky Debt," *Journal of Finance* 44(2), 1989).
- *Fix.* Add after the spread sentence: "A spread has parts. The largest is expected credit loss: the chance of default times the loss if it happens. Lenders add a premium for uncertainty, plus funding and operating costs. That is why our policy charges more for higher leverage (MF-BR-14) and for office (COM-BR-06). C8 builds the pricing grid."

### Minor

**m-1. LIBOR spread adjustment is explained as credit risk only.** *Location:* T5 History. *Quote:* "The adjustment bridges the gap between LIBOR, which included bank credit risk, and the near-riskless SOFR." *Why:* One-month LIBOR also carried a term premium over overnight SOFR. The adjustment was not a model estimate of either. It was fixed as the five-year historical median spread, the ISDA fallback method that Regulation ZZ adopted. *Fix:* "The adjustment reflects the historical gap between LIBOR, which carried bank credit risk and a term premium, and overnight-based SOFR. It is fixed: the median spread over the five years before LIBOR's announced end."

**m-2. Liquidity statement in WE9 uses a hypothetical rate.** *Location:* T4 WE9 and the sentence below the table. *Quote:* "The borrower's real cash cost is the billed figure, not the test figure." *Why:* Birchwood bills at 7.65% on day one, not 8.25%. Its real 365-day cash cost is $2,860,000 × 7.65% ÷ 360 × 365 = $221,828.75, *below* the $235,950 test figure. The general point holds only at equal rates. *Fix:* "At the same rate, the bill is 1.4% above the test figure. Today Birchwood bills at 7.65%, so its cash cost is $221,828.75 a year, below the test. The test is deliberately conservative."

**m-3. F-CORE-46 with m = 12 is an approximation for Actual/360.** *Location:* T2, F-CORE-46. *Why:* Actual/360 monthly interest varies with 28-31-day months. The exact effective rate is the product of (1 + r × d ÷ 360) over the year's months. For Maple Run in 2027 it is 10.90190% against the formula's 10.90194%: negligible here, but learners should know the formula's assumption. *Fix:* Add: "F-CORE-46 spreads the 365 days evenly over 12 months. Real months vary, but the difference is tiny (0.00004 points for Maple Run in 2027)."

**m-4. "Common slips" leap-year bullet is slightly misleading.** *Location:* T1 slips. *Quote:* "Using 365 in a leap year by habit. Actual/360 always divides by 360". *Fix:* "Dividing by 365 or 366. Actual/360 always divides by 360; a leap year only adds a billable day (29 Feb)."

**m-5. Cap notional versus funded balance.** *Location:* T5 WE12 and slips. *Quote:* slip "Forgetting that the cap pays on the notional, which may differ from the funded balance"; WE12 pays on the funded $4,740,000. *Why:* The example contradicts the warning unless the running deal sets notional equal to funded balance. *Fix:* State the notional in WE12's inputs: "cap notional assumed equal to the funded balance (course simplification); real caps often use the full commitment or a fixed schedule".

**m-6. Missing interest-rate risk for the fixed-rate lender.** *Location:* T3 and T6. *Why:* A graduate course would note that a fixed-rate term loan loses value when rates rise (WE4 shows this at 12%), and that prepayment premiums exist to protect it. The lesson defers yield maintenance to C8, correctly, but never names the lender's price risk. *Fix:* One sentence after WE4: "The reverse also holds. If market rates rise after closing, a fixed-rate loan is worth less than face. Prepayment premiums (C8) protect the lender when rates fall."

**m-7. Hook arithmetic precision.** *Location:* Hook. *Quote:* "Why is March $350 higher?" and "March has three more days". *Fix:* None needed; the full $350.21 decomposition in WE1 is exemplary. Consider asking the learner to predict the split before reading it (generation effect).

**m-8. Problem 3's model answer conflates "nominal" with "test rate".** *Location:* Problem 3. *Quote:* "coverage uses the nominal rate, here the 8.25% test rate". *Why:* D-CONV-01's "nominal" is the quoted-basis rate; MF-BR-09 sets which quoted rate is tested. The answer is right but compresses two rules. *Fix:* "Neither. Tests use a nominal rate (D-CONV-01). For a capped bridge, the nominal rate tested is the higher of note rate and strike + spread: 8.25% (MF-BR-09)."

**m-9. Fewer secondary-source traces than C0, but two remain.** *Location:* Sources 2, 3, 10. *Why:* *JNT* and *American Timber* were read on vLex and HallApproved mirrors; ORC, G.S. and IC on FindLaw and Justia 2014 text. These are acceptable for a draft and are honestly disclosed. Before release, read the official reporters (Ohio Supreme Court PDF; Westlaw or CourtListener for 511 F.2d 980) and the current Indiana Code. Also confirm the "7-0" vote count in *JNT*, which the paragraph cites do not obviously support.

**m-10. F-MF-12's library example differs from the running deal.** *Location:* Formula Library F-MF-12 worked example ("note rate 8.000% (F-MF-24)") versus lesson WE11 (7.65%). *Why:* A learner who opens the library sees a different Cedar Court note rate. *Fix:* Owner action in the Formula Library: label the library example as a test case, or align it to 7.65%.

## Academic framing: what a university course would add at this level

| Topic | Where it fits | Reference |
| --- | --- | --- |
| Effective cost of borrowing with points and early repayment | T6 (already taught; cite it) | Brueggeman and Fisher, *Real Estate Finance and Investments*, fixed-rate mortgage chapters |
| Constant payment versus constant amortization loans; graduated payment | T3, one paragraph, so learners see the level payment is a choice | Brueggeman and Fisher; Geltner et al. mortgage chapters |
| IRR as return on outstanding balance; MIRR | T2/T6 (M-1) | Dudley (1972); Lohmann (1988) |
| IRR uniqueness for loans | T6 (M-2) | Norstrom (1972) |
| Caps as options; Black's model at a conceptual level | T5 (M-6) | Hull, *Options, Futures, and Other Derivatives*, interest-rate caps chapter |
| Spread decomposition and default as an option | T5 (M-9) | Titman and Torous (1989) |
| Loan fee accounting by the interest method | T6 (M-5) | FASB ASC 310-20 |
| Interest-rate (price) risk of fixed-rate loans; duration | T2/T3, one paragraph (m-6) | Geltner et al., bond-mathematics treatment of mortgages |
| Real versus nominal rates (Fisher relation) | T2, optional | Any corporate finance text |

## Use of sources

- **Law.** Well chosen and quoted precisely. *JNT* and *American Timber* are the right pair. The Regulation ZZ and LIBOR Act citations are pinpointed. The OCC Handbook quotes (pp. 11, 12, 40, 43, 57) are used appropriately as supervisory expectation, not law. The lesson says "examiners expect", not "the law requires". Good.
- **Overclaiming from a case.** Slight. "A clause that does not match your servicing system invites a breach-of-contract claim, as in *JNT*." In *JNT*, the clause matched the billing and the bank won. Rephrase: "*JNT* shows borrowers will sue over the wording. A clause that does not match your billing gives them a better case."
- **Overclaiming from market convention.** "Banks fund themselves in money markets, and US money markets have long quoted on Actual/360" is fair. The inference "So commercial lenders match their loans to their funding" is plausible but unsourced. Add the ARRC quote's "standard convention in U.S. money markets" as the support, which the lesson already has two paragraphs later.
- **Balance.** Law and policy dominate; theory is present only through derivation. That is acceptable for a mathematics module, but the absence of any textbook citation is unusual at this level (M-5).

## Pedagogy

- **Objective alignment.** Excellent at Teach and Practice: each of O1-O6 has a chunk, at least one worked example and practice. Broken at assessment (C-2).
- **Scaffolding.** The derivation sequence works: single sum, then annuity, then payment, then balance, then constant, then IRR. T2's WE4 deliberately previews T6. That spaced-retrieval design is good.
- **Worked examples.** Thirteen four-line examples is a lot. Research on the worked-example effect supports many examples early, then fading. Convert three into faded examples (give formula and inputs; learner completes the substitution): WE5 (EAR), WE7 (balloon) and WE12 (cap payment).
- **Practice and transfer.** Problems 1-9 all use Cedar Court, so practice is near transfer and blocked by topic. Add two interleaved, far-transfer problems at the end: (a) a fictional 30/360 bank quote versus our Actual/360 bridge with different points, asking which is cheaper over a 9-month hold; (b) a loan with a 3-year IO period, asking for the balloon and the test ADS.
- **Cognitive load.** About 16,400 words in the tab, eight tables in T3-T4 alone, and frequent policy cross-references. For an Intermediate learner this is heavy. Cut the duplicated "How our model policy applies it" paragraphs where they repeat the chunk, and move the v0 quiz out of the learner page.
- **Misconceptions addressed well.** Term versus amortization for n; rate versus constant; IO test basis; screen versus yield; per-diem rounding; payoff day. **Created or left open:** Actual/360 schedule interest as a "slip" (C-1); reinvestment assumption (M-1); "IRR is unreliable with draws" (M-2); cap premium as pure cost (M-6).
- **C0 to C3 sequencing.** C0 uses C3's constants (0.0802397, 0.0818612) and DSCR without definitions; C3 should reference those C0 examples ("In C0 you saw Cedar Court's exit constant of 0.0802397. Here is where it comes from") to close the loop. Fix the cap-rate inconsistency (M-4).

## Assessment readiness

Item specifications for the 14 review questions and two 21-item forms (blueprint section 6). Four options, one best answer, feedback for every option. Distractors should each encode a named slip from the lesson.

| Obj. | Bloom | What items should test | Example stem and key distractors | Assessable as written? |
| --- | --- | --- | --- | --- |
| O1 | 3 | Period interest with one draw and one paydown; funding-day and payoff-day counting; round-once rule; prepaid stub | "$500,000 at 9.00% Actual/360; $50,000 draw on the 10th of a 30-day month. Interest?" Distractors: ÷ 12; 365 basis; draw counted from the 11th (critical) | Yes |
| O2 | 3 | Convert nominal to EAR on Actual/360 and 30/360; choose which rate a task uses (bill, schedule, test, comparison); PV of a short IO loan at a higher discount rate | "Two quotes at 8.00%: one 30/360, one Actual/360, both monthly. Which costs more, and by about how much?" Distractors: same; 0.14 points; 1.4 points | Yes, but the verb bundles two skills. Split O2 into "Convert ..." and "Value a loan's cash flows at a given discount rate (F-CORE-45)" if the exam is to diagnose them separately |
| O3 | 3 | Payment with n = amortization; a schedule row; balloon by F-CORE-47; effect of longer amortization on payment and balloon | "10-year term, 25-year amortization, $2,000,000 at 7.5%. Balloon?" Distractors: n = 120; unrounded payment; payoff with accrued interest (critical: n) | Yes, after C-1 states which accrual basis the item assumes |
| O4 | 3 | ADS on amortizing and IO loans; constant to six decimals; which ADS a test uses for a partial-IO loan; why sizing divides by the constant | "A loan has 2 years IO, then 30-year amortization. Which ADS goes in the DSCR test?" (critical: constant, not rate) | Yes, if items avoid IO-gate eligibility (M-8) |
| O5 | 3 | Note rate from Term SOFR + spread; test rate = max(note, strike + spread); cap payment; net capped cost; test rate at extension | "SOFR 5.10%, spread 4.00%, strike 4.25%. Test rate and net cost?" Distractors: 8.25% test (strike rule misapplied, as in M-3); 9.10% net (critical: test rate) | Yes, after M-3 |
| O6 | 4 | Compare yields across points and hold periods; explain why the screen understates IRR; identify which costs enter all-in cost under a stated convention; recognize when IRR is unique | "Quote A: 10.00% + 2.00 points; Quote B: 10.75% + 1.00 point. The borrower expects to repay in 6 months. Which costs more, and why?" | Partly. "Analyze the borrower's all-in cost" depends on a judgment (which costs go in) that the lesson leaves open. Items must state the convention in the stem, or the objective should read "under a stated cost convention" |

Critical items: blueprint section 6 lists four (period interest with a draw; n = amortization; constant not rate; test rate). I agree. Add none for O6: judgment-dependent items are poor candidates for critical status.

## Writing

- **Register.** Appropriate for early-graduate learners in T2-T6. The prose is precise, and the "why it matters" closers are useful. T1's opening paragraphs are pitched lower than the rest ("What interest-only means").
- **Precision.** Strong overall. Fix: "IRR nominal" should be defined once as "the monthly IRR × 12, an annual rate compounded monthly"; "nominal" in D-CONV-01 means "quoted, before day-count uplift", which differs from the macroeconomic "nominal versus real". Say so once in T2.
- **Sentence length.** About 27 sentences exceed 25 words, mostly in model answers and policy restatements. The short-sentence house style occasionally separates a claim from its reason ("So no statute tells us how to quote their rates." stands alone after two sentences of premise). Join such pairs with "so" or "because".

## What to look up yourself

1. Whether model term notes accrue Actual/360 or 30/360 on amortizing loans (owner decision, C-1). Then rebuild the WE7 and T3 tables if needed.
2. The official Ohio Supreme Court PDF of 2012-Ohio-5369, to confirm paragraphs 4 and 10-12 and the vote.
3. FASB ASC 310-20-35 (interest method for net deferred fees), for M-5.
4. CME Term SOFR methodology (still unopened per the lesson), so T5 can say how Term SOFR is derived from SOFR futures.
5. Bibliographic details for Dudley (1972), Lohmann (1988), Norstrom (1972) and Titman and Torous (1989). I cited them from memory as a reviewer.

## How to check it

1. Actual/360 balloon (C-1): build 120 rows with interest `=ROUND(B*7%/360*days,2)` and the fixed $27,564.39 payment from 1 Jan 2029. The closing balance is about $3,118,446.42, against `=FV(7%/12,120,27564.39,-3900000)` ≈ $3,066,702.23.
2. Real-draw IRR (M-2): enter −234,900; 2,050; −27,950; 2,306.25; −22,693.75; 2,519.79; −17,480.21; 2,690.63; −12,309.37; 2,818.75; −7,181.25; 2,904.17; 342,904.17. `=IRR(range)*12` returns about 12.081%. `=NPV(1%,C2:C13)+C1` returns about 222.37.
3. Extension coverage (M-3): `=380000/(3520000*8.75%)` returns 1.234.
4. Credit (M-7): `=ROUNDDOWN(((14500/180)+(39*1.85))/50*5,0)/5` returns 3.
