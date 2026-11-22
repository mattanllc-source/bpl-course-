# C13 blueprint: Default, workout, foreclosure and REO

Model policy for training - not for live lending decisions. Not legal advice.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | C13, one QAS Self Study program in the BPL-CORE integrated series |
| Knowledge level | Intermediate (`docs/accreditation/qas-spec.md`) |
| Field of study | Specialized Knowledge, with Finance for the loss, interest and REO math (Std 7.01.1). Split estimate in section 7 |
| Learner | College graduate with basic finance, new to lending. Target depth: upper-undergraduate to early-graduate |
| Testing | Multiple choice only: four options, one best answer, feedback on every option |
| Lesson read | `modules/core/c13/lesson.md`, C13-lesson-v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Sources used | Model Credit Policy, Formula Library, Running Deals, State Law Table (22 Nov 2026 snapshots); `docs/curriculum/needs-analysis.md` v0 |
| Status | v0 draft for owner review, 22 Nov 2026. Lesson not changed |

## 1. Module purpose

C13 builds the special-servicing skill of resolving a defaulted loan at the least total loss, in the right legal order. It follows C12 (which rates the default) and C10 (state law), and its loss figures feed the portfolio view in C14.

## 2. Learning objectives

By the end of C13, you will be able to:

| # | Objective | Bloom | Needs-analysis tasks | Main rule and formula IDs |
| --- | --- | --- | --- | --- |
| O1 | **Apply** the first-30-days default sequence: notice, default interest, re-rating on exit cover, state check and pre-negotiation letter | 3 Apply | S9, S1, S4 | CORE-SVC-03, -07, -08; CORE-DEF-01; D-CORE-23; F-CORE-31 |
| O2 | **Compare** forbearance, modification, deed in lieu and foreclosure by net loss, including time, carry and income collected | 4 Analyze | S9, S10 | CORE-DEF-02; F-CORE-05, -23 |
| O3 | **Structure** a forbearance or modification, with a paydown or a note split, that meets the workout and extension rules | 6 Create | S9, S5; K4 (partial) | CORE-DEF-03; CORE-SVC-08; COM-BR-01, -02; MF-BR-11; F-CORE-22, -42; F-MF-12 |
| O4 | **Decide** between a deed in lieu and foreclosure, and whether to seek a receiver, from title, state-law and environmental facts | 5 Evaluate | S10, U7, U8 | CORE-DEF-04, -05; SLT-XX-02 foreclosure column |
| O5 | **Analyze** how a borrower bankruptcy changes the resolution plan and its timeline | 4 Analyze | S10, U8 | CORE-DEF-02, -04 (no bankruptcy rule yet: section 4.5) |
| O6 | **Evaluate** whether to enforce a guaranty on a defaulted loan, given state deficiency rules, triggered carve-outs, burn-off and the guarantor's current ability and willingness to pay | 5 Evaluate | S9, U3, U8 | CORE-DOC-01, -02, -04, -05; COM-BR-07; SLT rows |
| O7 | **Record** REO at fair value less cost to sell and prepare its disposition plan, including environmental and tax-reporting steps | 3 Apply | S10; K4 (partial) | CORE-DEF-06; F-CORE-42 |

**Bloom mix.** Apply 2, Analyze 2, Evaluate 2, Create 1. Seven of seven are Apply or above.

**Note for the owner.** Bible LD-02 sets core modules at levels 2-3. This blueprint follows the depth decision and reaches levels 5-6. LD-02 needs updating.

## 3. Content map

"Opened" means opened on 22 Nov 2026 for this blueprint (Cornell LII for the U.S. Code; the Federal Reserve's SR 23-5 attachment PDF for the 2023 Policy Statement).

| Obj | Concepts | Real rules and primary sources | Model-policy rules |
| --- | --- | --- | --- |
| O1 | Monetary and non-monetary default; notice and cure; default interest; acceleration; reservation of rights; waiver by conduct; oral-modification claims | Fannie Mae pre-negotiation letter practice, as recorded in CORE-DEF-01 (market) [VERIFY: Fannie Mae pre-negotiation form instructions; checked 20 Nov 2026]. Default-interest caps: State Law Table default-interest column; California bars it on the full balance before maturity (SLT-CA-01, -02) [VERIFY: checked 20 Nov 2026] | CORE-SVC-03, -07, -08; CORE-DEF-01; D-CORE-23. F-CORE-31 |
| O2 | Net loss and severity; time as cost; carry, legal, receiver and sale costs; income during the hold; ranking options; timeline sensitivity | Regulators view prudent workouts as often in the interest of lender and borrower: 2023 *Policy Statement on Prudent CRE Loan Accommodations and Workouts* (agencies, 30 Jun 2023; OCC Bulletin 2023-23, 29 Jun 2023), Sections I-IV (opened) | CORE-DEF-02. F-CORE-05, -23 |
| O3 | Short-term accommodation versus long-term workout; paydown; extension under existing options; guarantor reaffirmation; cash control; multiple-note (A/B) restructuring; return to accrual | Note A sized "using the fair value of the collateral"; Note B classed loss and charged off: Policy Statement, Section V (opened). Return to accrual after sustained repayment, "generally ... a minimum of six months": Section VI.B (opened). Modified loans are estimated under the same CECL method as other loans: Appendix 5, citing ASC Topic 326 (opened) | CORE-DEF-03; CORE-SVC-08; COM-BR-01, -02, -03; MF-BR-11; COM-GEN-12. F-CORE-22, -42; F-MF-12 |
| O4 | Deed in lieu; junior liens survive; merger and anti-merger; estoppel affidavit; judicial versus power-of-sale foreclosure; receivers and their statutory grounds | Receiver grounds on written consent: ORC 2735.01(A)(2) (OH); IC 32-30-5-1 (IN); G.S. 1-507.24(f) (NC); CCP 564(b)(11) (CA) [VERIFY: State Law Table group (b) and FindLaw mirrors; checked 22 Nov 2026]. Junior liens survive a deed in lieu. In *Thorp Consumer Discount Co. v. Hartigan*, 114 Ohio App.3d 424 (2d Dist. 1996), the senior lender took a quitclaim deed. Mechanic's and judgment liens of over $98,000 stayed on the property. The lender then sued to foreclose its senior mortgage against them. The court inferred "as a matter of law" that the lender meant to keep its senior mortgage alive. Merger would have given "a windfall to all of the subordinate lienholders". The court followed *Bell v. Tenny*, 29 Ohio St. 240 (1876) [VERIFY: Thorp v. Hartigan, 114 Ohio App.3d 424, static.case.law/ohio-app-3d/114/cases/0424-01.json; checked 22 Nov 2026]. NC and Indiana cases are not yet opened | CORE-DEF-04, -05; SLT-OH-02, SLT-NC-02, SLT-IN-02, SLT-CA-02 |
| O5 | Automatic stay; single asset real estate (SARE); secured and unsecured claim split; oversecured interest; constructive fraudulent transfer of a deed in lieu; foreclosure price as reasonably equivalent value | Stay of "any act to create, perfect, or enforce any lien": 11 U.S.C. 362(a)(4); also 362(a)(1) (opened). SARE defined: 11 U.S.C. 101(51B), real property "other than residential real property with fewer than 4 residential units" producing "substantially all of the gross income" (opened). SARE stay relief unless, within 90 days of the order for relief (or 30 days after the SARE finding, if later), the debtor files a plan with "a reasonable possibility of being confirmed" or starts monthly payments of interest "at the then applicable nondefault contract rate" on the value of the creditor's interest: 11 U.S.C. 362(d)(3) (opened). Secured claim limited to collateral value; the rest unsecured: 11 U.S.C. 506(a)(1). Interest allowed only to an oversecured creditor: 506(b) (opened). Avoidance of a transfer within 2 years for less than "reasonably equivalent value" while insolvent: 11 U.S.C. 548(a)(1)(B) (opened). For foreclosed property, reasonably equivalent value is "the price in fact received at the foreclosure sale" if state law was followed: *BFP v. Resolution Trust Corp.*, 511 U.S. 531 (1994) (opened on Cornell LII) | CORE-DEF-02, -04. No model-policy bankruptcy rule |
| O6 | Full recourse versus non-recourse with carve-outs; burn-off; anti-deficiency and one-action rules; fair-value defence; guarantor waivers; reaffirmation | Indiana: no deficiency if the borrower waives the 3-month wait with lender consent, IC 32-29-7-3 and -5. North Carolina: fair-value defence, G.S. 45-21.36. California: CCP 580d, 726 and Civ. Code 2856 waivers [VERIFY: State Law Table SLT-IN-01, SLT-NC-01, SLT-CA-01; FindLaw mirrors; checked 22 Nov 2026] | CORE-DOC-01 to -05; COM-BR-07; MF-BR-12 |
| O7 | REO at fair value less cost to sell; charge-off at title; quarterly re-test; sale plan; CERCLA secured-creditor exemption after foreclosure; information returns | Banks record foreclosed real estate at fair value less cost to sell: Fed SR 12-10 attachment, OREO Q&A, revised Oct 2025 [VERIFY: checked 22 Nov 2026]. A lender that did not participate in management keeps the CERCLA exemption after foreclosure if it seeks to sell "at the earliest practicable, commercially reasonable time, on commercially reasonable terms": 42 U.S.C. 9601(20)(F)(ii); see also (F)(i) (opened). A lender that acquires property "in full or partial satisfaction of any indebtedness" files a return: 26 U.S.C. 6050J(a) (opened). An "applicable financial entity", including "any organization a significant trade or business of which is the lending of money", reports a discharge of debt: 26 U.S.C. 6050P(a), (c)(2)(D) (opened) | CORE-DEF-06. F-CORE-42 |

## 4. Depth targets

The current lesson teaches the decision tree well. It lacks bankruptcy, the law behind lender conduct, workout accounting and post-foreclosure duties. A university course in real estate workouts would cover all four.

### 4.1 Add (new content)

1. **Bankruptcy (new chunk T6).** The automatic stay; SARE and its 90-day clock; secured-claim bifurcation under 506(a); why an undersecured lender earns no postpetition interest (506(b)); deed-in-lieu avoidance risk under 548 and the *BFP* contrast. **C13 owns bankruptcy** (coverage review, 22 Nov 2026). C10 now keeps SCRA and PTFA only, and its old SARE worked example (WE8) is replaced by T6's 8.75% case. Sources in section 3, all opened. Still to open before drafting: 11 U.S.C. 363(a) and 552(b) (rents as cash collateral), 1111(b) and 1129(b) (cramdown), and *Till v. SCS Credit Corp.*, 541 U.S. 465 (2004).
2. **Lender conduct risk (new chunk T2).** Waiver by course of dealing, oral-modification claims and the credit-agreement statute of frauds. This is the legal reason for CORE-DEF-01. Open each deal state's credit-agreement statute before drafting. No legal statement is made until then.
3. **Multiple-note (A/B) restructuring.** From Section V of the 2023 Policy Statement. The model policy has no A/B rule, so teach it as the bank-buyer view and flag owner decision 4.5 item 2.
4. **A fifth option: selling the note.** Market lenders also sell non-performing notes. CORE-DEF-02 compares four options only. Teach it as market practice; the owner decides whether to add it to the rule.
5. **Environmental duties after title.** The post-foreclosure divestment duty: the lender keeps the secured-creditor exemption only if it seeks to sell "at the earliest practicable, commercially reasonable time" [VERIFY: 42 U.S.C. 9601(20)(F)(ii); checked 22 Nov 2026 per needs analysis]. Teach why CORE-DEF-06's written sale plan protects it. C9 owns the exemption itself and "participation in management"; C13 recaps it in one sentence (coverage review, 22 Nov 2026).
6. **Tax information returns.** 26 U.S.C. 6050J on acquiring property in satisfaction of debt and 6050P on discharging debt. Still to open: the IRS instructions for Forms 1099-A and 1099-C, which name the forms and deadlines.
7. **Market context data.** FRED DRCRELEXFACBS, 1.53% CRE delinquency in Q2 2026, and CORCREXFACBS, 0.14% charge-offs (Federal Reserve, updated 25 Aug 2026, opened 22 Nov 2026). Use them to show why severity, not frequency, drives loss.

### 4.2 Deepen (existing content, more rigour)

1. **Option economics.** Add timeline sensitivity: rerun foreclosure severity for Maple Run at the C10 180-day and 720-day cases. Explain that F-CORE-23 is undiscounted and so understates the cost of slow paths. A discounted version would need a new Library formula (owner decision 4.5 item 4).
2. **Receivers.** Move from "the court may appoint" to what a receiver can and cannot do. Explain why consent is a ground but not a guarantee. North Carolina's Commercial Receivership Act (G.S. 1-507.20 onward, effective 1 Jan 2021, per SLT-NC-02) is the deal-state model.
3. **Deed in lieu doctrine.** Add merger, the estoppel affidavit's role, the non-merger endorsement, and the 548 risk when the property is worth more than the debt.
4. **Guaranty enforcement.** Use the 2023 Policy Statement's test of the guarantor's "financial ability" and "demonstrated willingness" (Section IV, opened). Separate the legal right to a deficiency from the practical ability to collect.

### 4.3 Correct

1. **SOFR path (D-CORE-27).** The lesson prices Birchwood at month 30 and Cedar Court at month 28 at 7.65% (SOFR 3.65%). D-CORE-27 carries the latest stated rate forward: Birchwood 8.75% from month 18, Cedar Court 9.00% from month 10. Recomputed figures (F-CORE-01, -05, -23, -31; half-up display):

| Line | Lesson (7.65%) | Corrected |
| --- | --- | --- |
| Birchwood 30-day interest | $22,440.00 | $3,520,000 × 8.75% ÷ 360 × 30 = $25,666.67 |
| Birchwood 30-day default interest | $37,106.67 at 12.65% | $3,520,000 × 13.75% ÷ 360 × 30 = $40,333.33 ($14,666.67 more) |
| Birchwood per diem | $748.00 | $855.56 |
| Birchwood lost interest: foreclosure, 540 days | $403,920.00 | $462,000.00 |
| Birchwood lost interest: deed in lieu, 270 days | $201,960.00 | $231,000.00 |
| Birchwood loss and severity: foreclosure | $265,920.00; 7.6% | $3,520,000 + $462,000 + $90,000 + $102,000 − $3,850,000 = $324,000.00; 9.2% |
| Birchwood loss and severity: deed in lieu | $238,960.00; 6.8% | $3,520,000 + $231,000 + $40,000 + $102,000 − $3,625,000 = $268,000.00; 7.6% |
| Reconciliation to the $222,000 charge-off | $222,000 + $403,920 + $90,000 − $450,000 | $222,000 + $462,000 + $90,000 − $450,000 = $324,000 |
| Cedar Court lost interest: foreclosure, 270 days | $294,907.50 | $5,140,000 × 9.00% ÷ 360 × 270 = $346,950.00 |
| Cedar Court lost interest: deed in lieu, 180 days | $196,605.00 | $231,300.00 |
| Cedar Court loss and severity: foreclosure | $329,907.50; 6.4% | $381,950.00; 7.4% |
| Cedar Court loss and severity: deed in lieu | $311,605.00; 6.1% | $346,300.00; 6.7% |
| Cedar Court deed in lieu after paying the $40,000 lien | $351,605.00 | $386,300.00, still above foreclosure by $4,350.00, so the answer (foreclose) holds |

   State in the lesson that the cap lapsed at month 24 unless extended (COM-BR-03 requires it for the initial term only), so interest is unhedged.

2. **Modification coverage test (WE3, Set B item 5).** COM-BR-02 uses the F-MF-12 basis: the higher of note rate and strike + spread. At month 30 that is 8.75%, not 8.25%. $3,220,000 × 8.75% = $281,750; $300,000 ÷ $281,750 = 1.06x (the lesson shows 1.13x). It still passes 1.00x.
3. **Guaranty burn-off (WE1, T5).** COM-BR-07 makes Birchwood's full guarantee burn off at stabilization. Birchwood reached 93% occupancy at month 16, above COM-TRM-01's stabilized test (85%+ physical occupancy for the last 3 months; 90% for office). The lesson relies on Dana Whitlow's full guarantee at month 30. Either state a what-if fact that stabilization never occurred, or treat her as a carve-out guarantor only. That changes the WE1 rating (4 becomes 5, with a Loss and Substandard split) and the T5 table. The policy does not define "stabilization" for burn-off: owner decision 4.5 item 1.
4. **Open tags.** Fannie Mae and SLT-IN-02 remain open (lesson self-review). The two law-firm tags on junior liens are replaced by *Thorp v. Hartigan* (22 Nov 2026); replace them in the lesson too.
5. **Hours and quiz format.** The lesson claims 3 hours; the word-count formula gives about 1.2 credits (section 7). Items are open response, and some are yes/no (Set B items 6 and 9). Rewrite all as four-option multiple choice.
6. **OJT gap.** O6 (REO) is not in the OJT. Make REO a scored practice exercise instead (section 5, T8).

### 4.4 Cut or move

1. **State-law recital.** T4 and T5 restate receiver and deficiency statutes that C10 owns. Keep one line and a pointer to the SLT row; spend the words on application.
2. **Timing plan, self-review table, OJT.** As in C12: replace the timing plan with the credit worksheet; move the self-review to the review log; keep OJT as optional, non-credit.

### 4.5 Owner decisions needed (no limit invented)

| # | Gap | Effect |
| --- | --- | --- |
| 1 | COM-BR-07 does not define "stabilization" for guarantee burn-off | Birchwood's month-30 rating and guaranty recovery cannot be fixed until decided |
| 2 | No rule on multiple-note (A/B) restructurings | Taught as the bank-buyer view only |
| 3 | No bankruptcy rule (for example, when to seek SARE relief or counsel) | O5 is taught from statute, not policy |
| 4 | No discounted net-loss formula | F-CORE-23 stays undiscounted; time is counted as lost interest only |
| 5 | CORE-DEF-02 lists four options; note sale is not one | Note sale taught as market practice |

## 5. Sequence

Worked examples use the running deals; C13 what-if facts stay labelled as what-ifs, because the deal file ends at month 24-27. Practice uses a second deal (LD-08).

| Chunk | Objective | Teach | Worked example (running deal) | Practice | RQ |
| --- | --- | --- | --- | --- | --- |
| T1 The first 30 days | O1 | Default types; notice; default interest (CORE-SVC-03); re-rate on exit cover (CORE-SVC-08); SLT check | Birchwood month 30 what-if: default interest $40,333.33 for 30 days (corrected). Exit cover ($3,400,000 − $102,000) ÷ $3,520,000 = 0.9369, before accrued interest. Rating depends on correction 4.3 item 3 | Cedar Court month 28: exit cover $4,850,000 ÷ $5,140,000 = 0.9436; non-recourse, so 5; split $290,000 Loss, $4,850,000 Substandard | 2 |
| T2 Talking without waiving | O1 | Waiver by conduct; oral-modification claims; the pre-negotiation letter (CORE-DEF-01); who signs | Birchwood: Dana Whitlow calls "to talk options". Script the reply and the letter's three terms | Maple Run: Dana Reyes offers a partial payment before signing. What do you do? | 1 |
| T3 Option economics | O2 | F-CORE-23 net loss; lost interest (F-CORE-05); costs; income collected; timeline sensitivity | Birchwood: foreclosure $324,000.00 (9.2%) versus deed in lieu $268,000.00 (7.6%), corrected | Cedar Court: foreclosure $381,950.00 (7.4%) versus deed in lieu $346,300.00 (6.7%) | 3 |
| T4 Forbearance, modification and note splits | O3 | CORE-DEF-03 conditions; extension tests (COM-BR-02; MF-BR-11); the six-month upgrade (CORE-SVC-08); A/B notes (Section V) | Birchwood: $300,000 paydown leaves $3,220,000; $300,000 ÷ $281,750 = 1.06x at 8.75%; fee $8,800.00 (F-CORE-22). Note split on the lesson's exit-cover loan: under F-CORE-42 terms, $920,000 retained and $100,000 charged off | Cedar Court month 29: cure, then test the second extension: debt yield $420,000 ÷ $5,140,000 = 8.17%; fee $25,700.00 | 3 |
| T5 Deed in lieu, foreclosure and receivers | O4 | CORE-DEF-04 checklist; merger; judicial versus power of sale; receiver grounds (CORE-DEF-05) | Cedar Court: the $40,000 mechanic's lien makes the deed in lieu $386,300.00 against $381,950.00 for foreclosure. Foreclose | Birchwood: title is clean, but Phase I is 30 months old. Decide | 2 |
| T6 When the borrower files | O5 | 362(a) stay; SARE and the 90-day clock (101(51B), 362(d)(3)); 506(a) and (b); 548 and *BFP* | Birchwood files Chapter 11 at month 31 (what-if). A single strip center producing substantially all the LLC's income fits the SARE test [VERIFY: 11 U.S.C. 101(51B); checked 22 Nov 2026]. Monthly payments at the nondefault rate on a $3,400,000 value: $3,400,000 × 8.75% ÷ 12 = $24,791.67. Secured claim $3,400,000; unsecured $120,000 plus accrued; no postpetition interest (506(b)) | Maple Run what-if: Harborline offers a deed in lieu on a $520,000 ARV house owing $340,000, then files within 2 years. Why is the deed at risk under 548(a)(1)(B), and why would a foreclosure sale price be safer under *BFP*? | 3 |
| T7 What the guaranty adds | O6 | Full recourse versus carve-outs; burn-off (COM-BR-07); state deficiency rules; collectability | Birchwood table rebuilt with corrected losses and the burn-off decision; Indiana 3-month-wait trap (IC 32-29-7-5) | Cedar Court: non-recourse, no carve-out triggered. What can you recover? (CORE-DOC-02) | 2 |
| T8 REO and disposition | O7 | F-CORE-42; quarterly re-test; sale plan; CERCLA post-foreclosure divestiture; 6050J and 6050P returns | Birchwood at title: carrying value $3,298,000.00; charge-off $222,000.00 (F-CORE-42). Former dry cleaner already cleared (Phase I), but the sale plan still protects the exemption | Cedar Court REO: carry $4,850,000.00; charge off $290,000.00; draft the sale plan headings | 2 |

**Interactive elements (Std 4.05.3).** A net-loss comparison calculator (F-CORE-05, -23) with a timeline slider; a deed-in-lieu title checklist; a bankruptcy timeline builder; an REO entry calculator (F-CORE-42).

## 6. Assessment plan

Sized for the projected 4.4 credits (section 7). Spec minimums at 4.4 credits: review 3 × 4 + 1 = 13; exam 5 × 4 + 3 = 23 (fraction 0.4 → 1 and 3). Our build rule: review 4 × 4.4 = 17.6, so 18; each exam form at least 6 × 4.4 = 26.4, so 27, and at least 2 per objective.

| Objective | Review questions | Exam Set A | Exam Set B | Critical items (per set) |
| --- | --- | --- | --- | --- |
| O1 First 30 days | 3 | 4 | 4 | 1 (letter before any talk) |
| O2 Option economics | 3 | 4 | 4 | 0 |
| O3 Workout structure | 3 | 4 | 4 | 1 (only a signed written agreement changes the loan) |
| O4 Deed in lieu, foreclosure, receivers | 2 | 4 | 4 | 1 (no deed in lieu over an unreleased junior lien) |
| O5 Bankruptcy | 3 | 4 | 4 | 1 (the stay stops foreclosure at filing) |
| O6 Guaranty | 2 | 4 | 4 | 1 (no deficiency claim on a non-recourse loan without a carve-out) |
| O7 REO | 2 | 3 | 3 | 0 |
| **Total** | **18** | **27** | **27** | **5** |

- Four-option multiple choice, one best answer, feedback on every option citing a rule, formula or statute.
- No true/false or yes/no items. Each form covers all seven objectives.
- O3 is a Create objective. Multiple choice tests the design choices (which term fails which rule). The full structure is built in the T4 practice exercise, which is scored against a model answer.
- Practice exercises: 8 scored, one per chunk.
- Pass mark 80%, with every critical item correct.

## 7. Hour estimate

**Projected countable words:**

| Chunk | Words |
| --- | --- |
| T1 First 30 days | 2,200 |
| T2 Talking without waiving | 1,800 |
| T3 Option economics | 3,000 |
| T4 Workouts and note splits | 3,000 |
| T5 Deed in lieu, foreclosure, receivers | 2,800 |
| T6 Bankruptcy | 3,200 |
| T7 Guaranty | 2,200 |
| T8 REO and disposition | 3,000 |
| Practice case narratives | 800 |
| Summary and job aid | 500 |
| **Total** | **22,500** |

**Questions:** 18 review + 27 exam (one form) + 8 practice exercises = 53.

**Media:** no qualifying video.

**Credit calculation (Std 7.02):**

1. Reading: 22,500 ÷ 180 = 125.000 minutes.
2. Questions: 53 × 1.85 = 98.050 minutes.
3. Video: 0.000 minutes.
4. Total: 223.050 minutes ÷ 50 = 4.461, rounded down to fifths: **4.4 credits**.

**Current lesson, for comparison.** 4,296 words (upper bound) and 24 questions. 4,296 ÷ 180 = 23.867; 24 × 1.85 = 44.400; total 68.267 minutes ÷ 50 = 1.365, so **1.2 credits**.

**Field split estimate.** Finance (T3, the T4 math, T8 entries): about 7,000 words, roughly 1.4 credits. Specialized Knowledge: about 3.0 credits. Confirm by content time.

**Bible LD-03.** 223.050 minutes is under the 4-hour module cap.

## 8. Prerequisites and overlaps

**Prerequisites (Std 3.02.1).** C10 and C12 (Bible section 3). Learners must already be able to:

- read a State Law Table row for foreclosure, deficiency and receivers (C10);
- rate a loan on exit cover and place it on the watch list (C12: CORE-SVC-07, -08);
- calculate per diem and Actual/360 interest (C3: F-CORE-05, F-CORE-01);
- explain recourse, carve-outs and guaranty types (C6, C9: CORE-DOC-01 to -05);
- run extension tests (C12: COM-BR-02, MF-BR-11).

**Advance preparation:** none.

**Overlaps.**

| Topic | Owner module | C13's limit |
| --- | --- | --- |
| State foreclosure, deficiency and usury law | C10 | C13 applies the SLT row; it does not re-teach it |
| Rating scale and watch list | C12 | C13 uses the rating; upgrades after cure |
| Loss reporting, CECL allowance and portfolio losses | C14 | C13 records one loan's REO and charge-off |
| Environmental due diligence at origination (Phase I); CERCLA secured-creditor exemption | C9 | C13 owns the post-foreclosure divestment duty only |
| Guaranty value | C6 (collectibility at origination), C9 (guaranty law), C10 (state limits, judged at origination) | C13 O6 decides enforcement on a live default; it applies the earlier modules and does not reteach them |
| Bankruptcy (stay, SARE, 506, 548, cramdown) | C13 owns | C10 names the stay only |
| Family capstone workouts | R6, M6, CM6 | Capstones combine C13 with family underwriting |

## Blueprint checks

**Self-check.**

1. Does each objective map to a needs-analysis task? Yes: S1, S4, S5, S9, S10, U3, U7, U8 and K4.
2. Are all corrected numbers reproducible from the Formula Library? Yes: F-CORE-01, -05, -23, -31 and -42, half-up at display.
3. Is any policy limit invented? No. The $24,791.67 payment applies the statutory test in 362(d)(3) to deal facts. Five gaps go to the owner (4.5).
4. Do item counts meet the spec? Yes: 18 ≥ 13 review; 27 ≥ 23 exam per form.

**What to look up yourself.**

1. 11 U.S.C. 363(a), 552(b), 1111(b) and 1129(b), and *Till v. SCS Credit Corp.*, 541 U.S. 465 (2004). Open them before writing T6.
2. The credit-agreement statute of frauds in Ohio, North Carolina and Indiana. Open them before writing T2.
3. The IRS instructions for Forms 1099-A and 1099-C: form names, triggers and filing dates.
4. ASU 2022-02 on the FASB site, for how modification disclosures replaced TDR accounting. The 2023 Policy Statement refers to ASC Topic 326 but does not name the ASU.

**How to check it.**

1. Birchwood per diem: $3,520,000 × 0.0875 ÷ 360 = $855.5556. × 540 = $462,000.00; × 270 = $231,000.00.
2. Cedar Court: $5,140,000 × 0.09 ÷ 360 = $1,285.00 a day. × 270 = $346,950.00; × 180 = $231,300.00.
3. Credits: 22,500 ÷ 180 + 53 × 1.85 = 223.05; ÷ 50 = 4.461.
4. Open COM-BR-02, -03 and -07, COM-TRM-01 and D-CORE-27 in the Model Credit Policy to confirm the corrections in 4.3.
