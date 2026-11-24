# Curriculum review C: learner walkthrough of the built course

Model policy for training - not for live lending decisions.

24 Nov 2026. To-do 6. Read-only: no content or code was changed and no browser checks were run.

## Method

- Built `exports/core-course.html` with `npm run build:course` (15 modules, 4 references, 2,199 KB).
- Pulled the learner text from the page's embedded course data: module pages, desks (exercises), the C4 sample lesson and the reference shelf.
- Seven agents read it as a new learner, once for each role: underwriter (U), originator (O), analyst (A) and founder (F).
  - Five instructional-designer agents, three modules each: clarity, pace, terms used before they are taught, errors, role value.
  - One lending-sme-writer: the reference shelf.
  - One lending-sme-writer: an independent job-value pass over all 15 modules.
- Agents recomputed numbers in Python (Decimal, half up, Actual/360) against `data/running-deals/running-deals.md` and the formula fixtures.
- The lead checked the claims that carry the most weight (see "Lead checks" below). Items marked *uncertain* still need a check, mostly by the legal-regulatory-verifier.
- Already-decided items (decisions 1–17) are not re-argued here.

## Headline findings

1. **The course teaches some credit decisions the running deals now reverse.** The 22 Nov foundations fixes never reached the module tabs. C8's workplace task and desk approve Maple Run's $338,000 refinance at 1.02x. The deal now declines it at 0.76x. C0, C2, C3, C9, C10, C11, C12 and C14 carry other superseded figures.
2. **Seven desks contradict their own lessons** (C1, C2, C6, C9, C10, C11, C12, C14). A learner who trusts the desk learns the wrong rule.
3. **A handful of policy and legal statements are wrong in ways a credit officer would have to un-teach.** Examples: "any occupancy" in policy taught as "more than 14 days"; refinance value ignores seasoning; a guaranty called the "second source of repayment"; California's usury cap as a flat 10%.
4. **Arithmetic is mostly right.** Of the hundreds of recomputed figures, the failures trace to stale inputs, not bad math. The exceptions are C9's coinsurance formula and C13's rate.
5. **Pace is uneven.** C3 runs about 6 hours, with no learner action for about 3 hours. C4 is too thin for the module that owns rent-roll spreading. C12's rating page is the heaviest single page.
6. **Role value.** The core serves underwriters well everywhere. Originators get little from C3, C4, C12 and C13. Analysts get little from C1, C7, C10 and C11. Founders are well served on law, controls and portfolio, but miss AML-program and unit-economics content.
7. **The reference shelf's numbers are sound, but its labels mislead.** All deal figures and layer examples check out. But family formula pages title generic test cases "Worked example: <deal>", and the residential formulas still use the old Maple Run pricing.
8. **Best practice to copy.** The C4 sample page (predict, slider, exhibit question) is the best learning flow in the course. The C4, C6, C8, C9 and C11 workplace tasks are real week-two desk outputs.

## Role value by module

H = high, M = medium, L = low. Hours are reading-and-doing estimates by the reviewers, not the NASBA QAS word count (to-do 9 does that).

| Module | U | O | A | F | Claimed h | Estimated h | Pace note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C0 Orientation and market | M | M | H | H | 1 | 2.5–3 | Capital-stack page overloaded: 4 tables, 2 examples, 2 crises |
| C1 Business purpose | H | H | L | H | 2 | 2 | 8-law × 5-column table is too dense |
| C2 Credit fundamentals | H | H | M | M–H | 2 | 2 | Ratings page has 2 critical quiz items but no desk |
| C3 Finance math | H | M | H | M | 3 | about 6 | About 2,000 words a page; first action after about 3 hours |
| C4 Property cash flow | H | M | H | L | 3 | 1.3–1.5 | Too thin; Teach pages take 3–6 minutes |
| C5 Valuation | H | M | H | M | 3 | 2 | Thin; one worked example a page |
| C6 Borrower and guarantor | H | H | M | M | 3 | 2.6 | "Experience, tier and exposure" page: 673 words, about 14 rule IDs |
| C7 KYC, AML, OFAC, fraud | H | H | L | H | 2 | 2.4 | Two-tier red-flag logic in prose |
| C8 Structuring and sizing | H | H | H | H | 3 | 2.6 | Intro lists 21 formulas, several unused |
| C9 Documents, title, insurance | H | M | M | M–H | 3 | 3.2–3.5 | Insurance chunk packs 12 requirements into one paragraph |
| C10 State law | H | H | L | H | 2 | 3–3.5 | Workplace task needs 90–120 min, not 45 |
| C11 Closing and funding | H | H | L | H | 2 | 2.6 | Fine |
| C12 Servicing and draws | H | L | H | H | 3 | 2.3 | Rating page is the heaviest page in C12–C14 |
| C13 Default and REO | M | L | H | H | 3 | 2.5 | Best-sequenced module |
| C14 Memo and committee | H | M–H | H | H | 3 | 2.3 | Fine; originator's best late module |

| Reference shelf | U | O | A | F |
| --- | --- | --- | --- | --- |
| Model Credit Policy | H | H | M | H as a template, but the reasons behind limits are author-only |
| Formula Library and 47 layers | H | M (no quote sheet) | H for time value; L for portfolio | M (no unit economics) |
| Running deals | H (best shelf asset) | H | L–M | L (decision 14 adds tasks) |
| Glossary | M | M | L | L–M |
| State law | M | H (pre-quote screen) | L | H on licensing |

## Fix now

These are wrong on the live page today. For modules not yet moved to the repo, the Course Bible is the source of truth: fix the tab, then re-export (to-do 12). Items 30–33 are build or desk fixes in this repo.

### A. Superseded running-deal figures (the course teaches the old deal)

Most of these are already listed in `docs/curriculum/foundations-changes-2026-11-22.md` ("Module impact"). The walkthrough confirms them on the built page and adds the ones marked **new**.

1. **C8 workplace task and desk c08-3, "Resize Maple Run's refinance".** Uses lease $3,200, 1007 rent $3,100, and approves "$338,000 … 1.02x: passes". RD-RES-01 now has $2,450 and $2,400, 0.76x, a maximum of $245,000, a $109,179.24 cash need against $89,738.33 liquidity, and a **decline**. This teaches the opposite credit decision.
2. **C0, Maple Run "$338,000" refinance in five places:** worked example 1 table, worked example 4 step 4, diagram node H, the cycle table ("1.02x at $338,000"), and the c00-3 rationale. Rewrite as "requested in month 14, declined at 0.76x; the sale is the exit".
3. **C0 worked example 6 step 3** (Cedar Court shortfall). $253,677.46 should be $279,377.46 against the $5,165,700 payoff, because the 0.50% exit fee applies on a third-party take-out. The cushion is gone at a 7.9% NCF miss at 7.05% (6.1% at 7.25%), not 10.7%. "Pays down about $254,000" becomes about $280,000.
4. **C0 Practice 3 step 5, "our term loan … Our MF-TRM rules apply".** The take-out is a third-party agency lender (D-CORE-31). We approve only the payoff and the lien release.
5. **C2 five Cs and desk c02-1, "lease at about $3,100 a month".** Use $2,400 market rent and the $2,450 lease. The rental exit fails, so the "back-up exit" label is wrong.
6. **C3, the full 22 Nov list:**
   - Cap payments on the funded balance instead of the notional (D-CORE-30). WE12 should be $3,212.50, net $32,337.50, 8.187%, not "exactly 8.25%". Practice 10 should be $1,466.67, net $23,762.50. The "What the cap protects" table should show 8.112% and 1.12x (SOFR 5.00%), and 7.927% and 1.15x (SOFR 6.00%).
   - Extension test: $3,520,000 × 8.75% = $308,000, 1.23x (not $290,400, 1.31x). COM-BR-02 requires no new cap.
   - "Every note bills Actual/360" (DSCR loans accrue 30/360 under CORE-PRC-06). The term-loan schedules and balloons use the superseded basis: Birchwood should be $3,118,446.42 and Cedar Court $4,803,418.77 (F-CORE-49).
   - IRR reinvestment claims, and "use NPV when signs change", contradict the F-CORE-45 and F-CORE-48 edits. Fixture 3 has a unique IRR of 12.081% nominal.
   - Birchwood "7.23% cap rate" on NCF should be 8.00% on NOI.
   - Desk c03-3 bills Cedar Court at 8.25%; the note bills 7.65%. Label it hypothetical.
7. **C9 worked example 5, "Maple Run lease $3,200 a month".** Use $2,450: 6 × $2,450 = $14,700, not $19,200. Drop "after the refinance".
8. **C9 worked example 6 and C10 worked example 3b** use the declined Maple Run refinance. Label each one "what-if: a refinance with us".
9. **C11 workplace task (and C9's condition list), Birchwood: the $23,983.33 interest reserve is missing.** It is a committee closing condition in RD-COM-01. Cash at closing should be $1,767,084.08, not $1,743,100.75. The model answer fails its own rubric. **New.**
10. **C8 worked example 5, "As closed, no reserve".** The same committee reserve applies. "Check the balance quarterly" is not in the policy: drop it or label it a tip. **New.**
11. **C12 cap payments** on the funded balance: WE4 should be $1,466.67, net $23,762.50. Practice 2 should be $3,212.50, net $32,337.50.
12. **C12 "extended with any loan extension".** The deal file says COM-BR-02 needs no new cap. Limit it to multifamily (MF-BR-11).
13. **C12 Practice 5 and 6, "Refinanced into our term loan, the fee is waived: $5,151,565.00".** The month-27 take-out is a third-party lender, so the fee applies: $5,177,265.00.
14. **C12 worked example 8 and workplace task step 7, "Maple Run refinance payoff".** Reframe as the payoff on the investor sale.
15. **C13, rate used at months 28–30 is 7.65%.** D-CORE-27 holds the latest stated SOFR: 8.75% for Birchwood and 9.00% for Cedar Court. Monthly interest becomes $25,666.67, default interest $40,333.33, and per diem $855.56. The deed in lieu saves $56,000, not $26,960. Cedar Court's margin shrinks to $4,350. **New.** *Owner question 1.*
16. **C13 worked examples 1 and 3, "$850,000 of liquid assets".** Policy liquidity is $760,000 (F-CORE-24), as C14 uses. WE3's "8.25% test rate … as Running Deals uses" should be 8.75% (coverage 1.065x, still a pass). **New.**
17. **C14 worked example 1 risk table, "DSCR 0.98x … liquidity covers about $9,000".** Use 0.76x and a gap of about $102,000: "the rental exit is a weakness; the sale is the exit".
18. **C7 hook, WE5 and desk c07-3, "the day before Maple Run funds … Friday 20 Nov 2026".** The deal closes 15 Jan 2027, and the wire is the $233,738.33 net funding. Label it a what-if or move the dates. **New.**

### B. Desks that contradict their lessons

19. **c12-3 "Rate it".** "45 days late" is keyed to 3 (Special mention). CORE-SVC-08, WE7 and Quiz A11 say 4. The "Birchwood month 30" item is keyed to 4 without the guarantor fact that justifies it.
20. **c10-1 decision tree.** The `occ_stop` node says "A credit officer clears it"; the lesson says the BSA officer alone clears it. The `in` node repeats the State Law Table error the lesson corrects ("turns on collateral, not purpose").
21. **c11-3.** A rush request and a new email address are "not a listed stop". CORE-KYC-07 lists both as stop-and-verify flags that hold the wire.
22. **c09-1 against worked example 3.** WE3 says the seller's deed of trust blocks closing; the desk files it under "Cure at closing". The desk's three buckets are never taught.
23. **c02-3 and c14-2, "Tier 0 ground-up" → committee.** D-CORE-26 declines ground-up with no completed build, and sends one-build ground-up to committee. Add the decline branch.
24. **c06-3.** No branch for two exceptions, related party or one-build ground-up. A loan of $2,000,000 or less with two exceptions routes to the credit officer, which is wrong under CORE-AUTH-01.
25. **c01-1 and the C1 what-if, "more than 14 days?" No → proceed.** CORE-BP-02 bars any occupancy, or intent to occupy, of a 1–4 unit property. The 14 days is the Reg Z test only.

### C. Policy, legal and math statements that are wrong

26. **C1 worked example 2, "If our institution meets the HMDA coverage tests, we report it".** The third-party DSCR lender reports the application.
27. **C5 Quick reference, "the appraisal alone on a refinance".** RES-DSCR-05: owned under 6 months, use the lesser of appraisal and documented cost.
28. **C2 five Cs, "a guarantor's own assets are a second source of repayment"** (lines 42 and 150, self-check 1). In BPL the collateral is the secondary source, and the guaranty sits behind it.
29. **Other single-line fixes:**
    - **C4 Teach 1, "Commercial uses 5%, or 10% for office".** COM-GEN-05 says the greater of actual, market or 5%. Critical quiz item B8 tests exactly that.
    - **C4 hook, "At a 7.00% loan constant … about $2.4 million of loan".** No deal uses 7.00%, and $2.4M is debt at 1.00x. Use a deal rate and a policy DSCR minimum. The c04-3 model answer has the same error.
    - **C4 worked example 4, "would leave nothing for debt".** It should say "nothing after debt service".
    - **C5 Practice 5, "exit test sizes on DSCR, not on value".** MF-BR-08 runs both tests, and DSCR binds.
    - **C9 coinsurance formula** has no cap at 1. Practice 3 then gives $385,256.41 instead of $375,000 (F-CORE-37 caps the ratio and the payment).
    - **C10 California, "Article XV caps non-exempt lenders at 10%".** Untagged, and probably the wrong rule: the higher of 10% or 5% plus the SF Fed rate. *Uncertain; send to the legal-regulatory-verifier.*
    - **C0 source-tag definitions conflict.** The IDs page differs from Quick reference item 6 and quiz B7. Use one definition.
    - **C0 worked example 2** shows only the stabilized cushion (40.2%). Add the day-one as-is cushion (30.0%).

### D. Broken tasks, desks and build output

30. **"Workplace task task" heading in every module.** In `scripts/course_site/build.py`, `author_clean` rewrites "OJT" to "Workplace task" inside the heading "OJT task". Map the heading before the word swap.
31. **16 raw `[VERIFY …]` tags in desk text** (C1: 4, C7: 2, C10: 10). The desk script (`app/40-exercises.js`) has no tag conversion, so learners see the raw tag. Run desk text through the same footnote converter. C13's intro prose also shows a literal "[VERIFY]".
32. **Desks reuse quiz items and say so:** "(quiz A10)", "quiz B5", "self-check 4" (c06-2, c06-3, c07-1, c07-2). This trains the answers before the quiz. Replace them with fresh what-ifs.
33. **Tasks that cannot be completed as written:**
    - **C4 workplace rubric item 4** asks for "two causes and their amounts". The data has neither.
    - **C7 workplace model answer** lacks the two stop-and-verify rows its own rubric item 3 requires.
    - **C12 Practice Q1** is unanswerable: it gives no prior-draws total.
    - **C12 workplace task** asks for interest "within $0.01" but gives no draw dates.
    - **C8 Practice 5** omits the 88% occupancy and 71.4% of cost that it needs.
    - **C8 quizzes** size on "NOI", but the Teach page sizes on NCF.
    - **C14 workplace step 2**, "Fill sections 2–6 from the … answer keys". Copying a key is not memo writing. Have learners use their own C4–C8 work, then check it against the keys.
    - **C0 self-check Q3 and Q4** test a consumer statistic and C12 content. Remove both.

## Fix in the M4–M5 rewrite

These need the lesson-format rewrite, not a patch. Add each to the module's blueprint before writing.

### Cross-cutting

- **Define terms where first used, or link the glossary.** The worst cases:
  - C0: tiers and counted deals, loan constant, debt yield, stabilized, commitment, non-QM, ABS interests, repo, intercreditor, hard-pay preferred equity.
  - C3: notional and strike.
  - C8: debt yield, which is never defined anywhere in lesson text, and PITIA.
  - C9: deficiency, one-action rule, trustee's sale, ALTA, insure over, EP.
  - C12: conditional and unconditional lien waiver, paid-to date.
  - C13: receiver, anti-merger, estoppel affidavit (borrower).
  - C7: SDN List, blocked, control person.
  - The glossary's "first used" fields lag actual first use.
- **Interaction cadence.** Put a check or desk every 5–10 minutes. C3 is the worst case. The C0 capital-stack, cycle and IDs pages, the C2 ratings page, C9's escrow and reports pages, and C11's after-closing page have none.
- **Bare decision and rule codes on learner pages.** Examples: D-CONV-01/-03, D-CORE-17/-18/-23/-24/-25/-27, "(SUGGESTED)", "F-CORE-32 test 3", "R2 and R4", "solo mode", "T1/T3", "Role 3". CLAUDE.md allows only a small source link.
- **One-page job aids.** Every module has only a one-line description; C0 has none.
- **"How to check it" should check what the learner looked up**, not repeat the page math (C0, C2).
- **Sources below the bar.** Replace with statutes or regulators: C12's lien-waiver blog (getbuilt.com) and C13's WealthManagement.com and Blank Rome citations. Confirm "OCC Bulletin 2026-56".
- **Two sponsors named Dana** (Dana Reyes, Dana Whitlow). Learners confuse them in C2, C12 and C13. *Owner question 2.*
- **Hours.** The reviewer estimates above differ from the claims in both directions (C0 and C3 far over, C4 and C5 under). To-do 9 sets the measured figure.

### By module

| Module | Rewrite items |
| --- | --- |
| C0 | Workplace task becomes a purpose screen for U and O (market note goes to the analyst track, decision 6). Explain the non-QM contradiction. |
| C1 | HMDA "bridge and construction excluded as temporary financing" may be too broad for a flip with a sale exit. *Uncertain (legal verifier).* BSA duty under 31 CFR 1029 may turn on 1–4 unit collateral. *Uncertain.* Answer 6 should lead with CORE-BP-02, not Reg Z 3(a)-4. Remove the duplicate red-flag list. Split the 8-law table. |
| C2 | Turn the default-rating paragraph into a table. Label the cash-to-close inputs ($9,000 closing costs vs the $9,000 contingency; $5,100 points). Mapped objectives O2, O7 and O8 are not on the page. |
| C3 | Split each Teach page into 2–3 sample-format lessons with a predict or check item. Fix the stale framings (payoff via the refinance; "exit fee waived"). Map the job-task line to billing, quoting and yield, not sizing. |
| C4 | Teach physical vs economic occupancy, and compare like with like (88% vs 90%). Explain T-3, RUBS and the D-CONV-09 top-up. The sample-format rollout must keep the DSCR income-base table and a learner-computed break-even. Add tax reassessment and insurance repricing to underwritten NOI; if the policy has no rule, ask the owner. |
| C5 | Use one cap-rate basis per problem, labelled NOI or NCF. Define BPO, AVM, desk review, evaluation and going-in cap rate. The workplace task should compare stabilized value with stabilized comps. Replace "Freddie Mac small-balance rate" (folded into Conventional Small). Make the rubric reward rejecting non-local comps. Verify P.L. 119-101. |
| C6 | Split "Experience, tier and exposure". Restore "at some point in the lookback" (CORE-BOR-18), and state that the loan cap counts the new loan. Define Tier 0 before the credit page. Explain nominal ÷ 12 for sizing vs Actual/360 for billing. Move the FinCEN BOI paragraph to C7. Add an originator intake version of the task. |
| C7 | Make the red-flag logic one table: flag, what it stops, who clears it. Reweight the escalation note: request documents, escalate the same day, the BSA officer decides, then the clock runs. Documented LP equity is normal. "You have a federal reporting decision" belongs to the BSA officer. Teach the federal holidays in business-day counts (quiz A4). Align the 7/8 pass with 80%. |
| C8 | Cut the 21-formula intro list to the formulas used. Define LTP and explain the $240,000 day-one advance. Source the 7.75% take-out rate. Split worked example 5. Add C6 as a prerequisite. |
| C9 | Turn the insurance requirements into a checklist table with plain definitions. Move the deficiency and one-action material to C10, or define it (C10 is not a prerequisite). The workplace role "Closer" is not one of the four roles. |
| C10 | Replace "author a State Law Table row" with: apply the table to Cedar Court, then write an escalation to counsel on the G.S. 24-10.1 late-fee question. Row-writing moves to the founder track. "Net worth alone covers $680,000" should teach collectability (liquidity $760,000). Explain Civ. Code 2856 waivers. State the 30- vs 31-day month in WE3a. Fix "The the". |
| C11 | Add family lines to the checklist: cap assignment, estoppels and SNDAs, Phase I age, flood, interest reserve. "13 days left in the month" should say whether the funding day counts. Use "hold", "stop" and "stop-and-verify" consistently. |
| C12 | Split the rating page in two. Define or move "F-CORE-42 shortfall" (taught in C13). Replace WE6's deliberately wrong balance. Explain the two debt-service bases ($330,772.68 in B9 and F-COM-19). Shrink the workplace task to a month-7 draw and bill check plus the month-12 extension memo. Fix the month-24 rating after extension (Q5). |
| C13 | Label the WE2 course assumptions (18 months, legal costs, 3% sale cost). Say that the first extension was taken at month 24. Rename the c13-1 "Modification" lines "Extension after cure". |
| C14 | Fix the WE3 factor numbering. Spell out MSA. Objective 6 needs a measurable verb. Teach the one-page short-form approval against the 11-section memo, if CORE-AUTH-02 allows it; otherwise ask the owner. |

## Add

New content, by the role it serves most. Nothing here may invent a limit: where the policy is silent, the item waits for the owner (to-do 20).

### Highest value for job readiness (both lenses agree)

1. **C5: ARV and sales-comparison review on Maple Run**, with a "which comp is weak" exhibit and a desk-review checklist. This is the most frequent residential bridge (RTL) underwriting task, and it has no core coverage. Running Deals has the inputs (1007 $2,400 vs ZORI $2,084 and FMR $1,715; ARV $520,000 vs ZHVI $431,884). U H, O H.
2. **C8: write C08-O4, the rehab-budget review on Maple Run.** Cover line items, contingency, cost against scope, and a GC or borrower-as-contractor check. It feeds the C12 draws and the capstone. U H.
3. **C3 or C8: an originator quote exercise.** Compare our quote with a competitor's Dutch-interest quote on all-in cost (CORE-PRC-06, F-CORE-40, F-CORE-48). CORE-PRC-06 says Dutch interest is taught, but no lesson teaches it. O H, F H.
4. **C1: a fair-lending page** (C01-O5, critical for O). C0 promises it, and it does not exist. Cover discouragement, adverse-action timing and the spousal-signature rule, using Dana and Chris Reyes as the example. Verify all of it.
5. **C4: a residential DSCR worked example** (Maple Run $2,400 ÷ $3,165.95 = 0.76x), a rent-roll and T-12 spreading exhibit with a sort desk, and the commercial NCF build ($480,000 − $40,000 − $6,000 = $434,000).

### Underwriter

- C6: what guarantors sign (full recourse, completion, environmental). How to verify a track record (deeds, closing statements, entity documents). The schedule of real estate owned, and contingent liabilities, which the job aid promises.
- C9: a survey item and a real Schedule B exhibit (C09-O3); a site-visit case (C09-O8); reading an insurance certificate.
- C12: a final-release checklist for the last 10%; a sample draw request and inspection report.
- C13: vacant-property preservation for 1–4 unit REO (secure, insure, utilities).

### Originator

- C1: a first-call purpose-screen script (T02), and "why run the occupancy test on an LLC loan" (three reasons).
- C1 and C2: a compliant decline note from the originator's side.
- C6 to C8: "your tier sets your price and leverage", in one table.
- C7: an intake document list and a script for asking without tipping off.
- C8: how to explain the binding test to a borrower.
- C13: a first-call script for a default.

### Analyst

- C2: a credit-box calculator desk showing the binding test (LTC $340,000, LTARV $364,000, purchase test $355,000) and a risk-rating desk.
- C2: the mapped objectives that are missing: credit box vs interagency standards, adverse selection, expected loss.
- C8: all-in yield (rate, points, exit fee) and a sizing sensitivity desk.
- C11: hand-off to servicing and the data-tape fields.
- C14: a draft memo to critique (the blueprint's C14-O1 verb); delinquency and vintage reporting (T24).

### Founder

- C7: an AML-program checklist (BSA officer, written program, training, independent test, E-Filing, OFAC tool). *Uncertain: whether 314(a) and Form 8300 apply; research first.*
- C7 and C12: seller-impersonation and deed fraud on vacant property; draw and contractor fraud.
- C5: who the appraisal rules bind (FIRREA thresholds reach banks; private lenders follow policy and loan buyers). *Verify.*
- C14: staffing an approval matrix and committee in a small shop; conflicts of interest. Ratings to allowance (C14-O7) waits for an owner expected-loss rule.
- C1: "which laws reach my firm", by lender type. Confirm Section 1071 coverage of LLC investor loans and the 1,000-origination threshold. *Uncertain.*

### Legal content missing from objectives already kept

- C10: redemption rights and lien or title theories (C10-O1); SCRA and PTFA tenant overlays (C10-O6).
- C13: bankruptcy (relief from stay, the single-asset real estate rule, rents as cash collateral) (C13-O5). Today it is one sentence.
- C12: nonaccrual status (C12-O5); casualty steps (C12-O6, blocked on a proceeds rule).
- C11: why TRID does not apply, and an ALTA settlement statement exhibit.
- C10: check Indiana's criminal loansharking statute (IC 35-45-7) before saying "no rate cap found". *Uncertain.*

## Reference shelf

Checked:
- **Running deals:** 374 figures compared with `data/running-deals/running-deals.md`. All match, and the page text is identical to the file.
- **Learner layers:** all 47 worked examples recomputed. All are correct.
- **Formula Library:** all 372 tests compared with the fixtures. They match, apart from 3 that differ only in escaping.
- **Glossary:** all 150 terms read.
- **Policy:** all 283 rules scanned, and about 15 read in full.
- **State law:** all 56 cells read.

Every limit a layer quotes traces to a policy rule. The training label renders on every shelf page.

### Fix now

- **S1. Family formula pages present test cases as running-deal worked examples, with numbers that are not the deal's.**
  - Cause: `dealOfTest` in `scripts/course_site/app/55-shelf.js` titles a test "Worked example: <deal>" when its dollar inputs appear anywhere in that deal's data.
  - Examples:
    - F-RES-03 shows Maple Run at 77.4%, next to its own 80.0% example.
    - F-MF-12 gives Cedar Court an "8.000%" note rate; the actual rate is 7.65%.
    - F-MF-10 amortizes the interest-only Cedar Court bridge at 7.000%.
    - F-MF-27 gives Cedar Court a second loan it doesn't have.
    - F-COM-16 puts a retail tenant test on Cedar Court.
    - F-COM-17 matched Birchwood only through the $3,000,000 tier cap.
    - Also affected: F-COM-11, F-COM-19, F-RES-06, F-RES-18, F-MF-22.
  - Fix: add an explicit deal field to the fixture cases in `library_source.py`, rebuild with `npm run fixtures`, and remove the amount matching.
- **S2. Pre-fix Maple Run pricing in the residential formulas.**
  - F-RES-09 shows "$75,800"; the deal is $74,100.
  - F-RES-10 shows "$54,300"; the deal is $57,275.
  - F-RES-19 shows 13.6%; the deal is 14.3%.
  - The same figures appear in glossary #96 and #97, and probably in the F-CORE-24 and F-CORE-25 steps.
  - The author word "Bible flip" shows as a check label.
  - Fix: update the cases in `formulas/residential/reference/library_source.py` to the current deal ($5,100 points, $17,425 interest), then rebuild the fixtures.
- **S3. F-CORE-44 cash-on-cash** divides by value less loan, the exact slip its own list warns against, and uses NOI where Birchwood sizes on NCF. *Owner choice:* rename it "return on equity at stabilized value", or use cash invested.
- **S4. MF-BR-14 card text is corrupt.** A rationale fragment ("CLS Q1 2026; Greystone Nov 2024, JUDGMENT for the grid") leaked into the exit-fee row, and the "why" is empty. Fix the builder's rule/rationale split.
- **S5. Duplicate IDs COM-BR-09 and COM-TRM-09:** one card holds the table and one holds the label, so the anchors collide. Merge each pair into one card.
- **S6. Glossary definitions that conflict with the formula pages:**
  - #34 DSCR, #44 and #45 debt yield say NOI only; MF and COM loans use NCF.
  - #48 interest reserve uses 180 days, which the F-CORE-20 layer calls "too little".
  - #50 liquidity points to months of reserves; the real test is F-CORE-24 and F-CORE-25.
  - #84 "closing costs are excluded" is the residential rule only.
- **S7. Legal citations with no date or no source become empty footnotes.**
  - Glossary #53.
  - 14 policy tags, plus untagged FDIC FIL-62-2008 (CORE-DEF-06) and OCC guidance (CORE-AUTH-01).
  - 3 deal tags, one marked "not yet checked", which CLAUDE.md does not allow.
  - 13 library tags.
  - Send all of them to the legal-regulatory-verifier.
- **S8. Ohio usury subsection.** The Maple Run note and SLT-OH cite ORC 1343.01(B)(6) as the LLC business exemption. The grid order reads (B)(6) as a cap, and the cite field shows only 1343.01(A). *Uncertain; the verifier settles it.*

### Fix in the M4–M5 rewrite

- Add an assumptions line to each deal. Birchwood's debt service needs the 25-year amortization (stated only in COM-TRM-09); at 30 years a learner gets 1.43x, not 1.36x. Explain Maple Run's 0.0071641 constant.
- Remove deal-text pointers into author-only material (D-CORE-27/-30/-31, "Policy COM Part 1E", "MF Part 1 take-out table"). State the fact, with a footnote.
- Link Ohio's prepayment statute (ORC 1343.011) to the Maple Run DSCR take-out and RES-DSCR-11.
- State-law sourcing:
  - "ORC 2329.20, secondary" should say "read on a secondary site".
  - Link Indiana statutes to iga.in.gov.
  - The Maple Run note's source is the State Law Table itself (circular).
- Move glossary #104 "Experience tier" from Residential to Core.
- Replace the 21 bare rule IDs in glossary definitions with plain names and small links.
- Label F-CORE-45 "simplified" (Maple Run fully funded on day one).
- Remove "(SUGGESTED)", "reserved for the C7 proposals" and "Bible tenant A".
- Fill the empty "why" on CORE-AUTH-01, MF-BR-14, COM-BR-09 and COM-TRM-09.
- Shorten the long policy sentences (CORE-AUTH-01 has 49 words).

### Add

- **About 40 glossary terms** the shelf uses but never defines:
  - Interest and closing: Actual/360, 30/360, prepaid interest, balloon, Dutch interest, Term SOFR.
  - Pricing and structure: exit fee, rate cap strike and notional.
  - Third-party reports: Phase I, MAI, desk review.
  - Title and compliance: CPL, ALTA, BSA, AML, SAR.
  - Default and recovery: deficiency, one-action rule, upset bid, receiver, workout, watch list, charge-off, default interest.
  - Product acronyms: LTP, SBC, PUD, LIHTC.
- **Analyst portfolio formulas:** expected loss (CORE-DEF-02 already asks for "the lowest expected loss"), delinquency rate, weighted-average coupon and LTV, portfolio yield. *Owner supplies; nothing invented.*
- **Founder view of policy rationale:** each limit's "why" and the options weighed, drawn from the author-only decision log (task T27).
- **Originator quote sheet per product,** assembled only from existing rules.
- **Document shelf** (what each document proves, which condition it clears). The layers cite 21 DOC-nn codes; whether learners can open them is *uncertain*.

## Lead checks

- **Training label: false positive.** Four agents reported it missing in C0, C2, C4–C9, C11, C12 and C14. The built page shows it on every page, in the top strip and below the content. C1, C10 and C13 repeat it in the body. No change needed.
- **Confirmed in the data:** Maple Run lease $2,450 (RD-RES-01 month 11); Birchwood's $23,983.33 interest reserve as a closing condition (RD-COM-01 Role 3 item 1); the D-CORE-27 SOFR path (8.75% Birchwood, 9.00% Cedar Court); 16 raw `[VERIFY` tags in desk text; the "OJT task" heading rewrite in `build.py`; the amount-matching `dealOfTest` in `55-shelf.js`; and the pre-fix $75,800 and $54,300 in `formulas/residential/reference/library_source.py`.
- **Already on the 22 Nov follow-up list:** items 1–8, 11–14 and 17. New from this walkthrough: items 9, 10, 15, 16 and 18–33.

## Questions for the owner

1. **C13's 7.65% rate.** Was the 3.65% SOFR meant as a frozen what-if for C13? If yes, label it. If no, the C13 figures are rerun at 8.75% and 9.00% (D-CORE-27).
2. **Two Danas.** Rename one sponsor in the running deals (for example, Birchwood's guarantor)? It is a data change across modules.
3. **F-CORE-44 cash-on-cash:** rename it "return on equity at stabilized value", or recompute it on cash invested (S3)?
4. **Policy gaps the fixes need:** a short-form approval for small loans (C14), tax reassessment and insurance repricing in underwritten NOI (C4), and an expected-loss rule (C14-O7). Supply the rule, or confirm these stay out.

## Uncertain items for the legal-regulatory-verifier

C10 California Article XV cap; C1 HMDA temporary-financing exclusion for flips; C1 31 CFR 1029 coverage for MF/COM-only lenders; C1 Section 1071 threshold and coverage; C6 FCRA permission to pull a guarantor's report and Reg B adverse action on business credit; C7 CTA and RRE dates in 2026 and 314(a)/Form 8300; C12 "OCC Bulletin 2026-56"; C5 P.L. 119-101; C10 Indiana IC 35-45-7; C14 OCC 2006-46 thresholds as context; C9 the CERCLA "within one year before acquisition" test applied to lenders; shelf S7 (undated and untagged citations) and S8 (Ohio ORC 1343.01 subsection).
