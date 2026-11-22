# C6 blueprint: Borrower, sponsor and guarantor analysis

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Module | C6, BPL-CORE (QAS Self Study program in an integrated series) |
| Provider | BPL Academy |
| Knowledge level | Intermediate (qas-spec.md) |
| Field of study | Specialized Knowledge; Finance for the liquidity, net worth and exposure math (split by content time, Std 7.01.1) |
| Current lesson | `modules/core/c06/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Blueprint status | v0 draft for owner review, 22 Nov 2026. Changes no lesson, policy or deal file |
| Needs analysis | `docs/curriculum/needs-analysis.md` (task IDs below) |

## 1. Module purpose

C6 builds the underwriter's skill of deciding whether the people behind an entity borrower make the loan safe: who must guarantee, what each guarantor is really worth, and who may approve. It follows C2's credit box and feeds C8 (tier sets leverage and price), C9 (guaranty documents), C13 (enforcing guaranties) and C14 (the memo).

## 2. Learning objectives

By the end of C6, you will be able to:

| # | Objective (one verb, LD-01) | Bloom | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Determine** every required guarantor, the qualifying guarantor and the guaranty type for a multi-layer ownership chart, including trusts and spouses (CORE-BOR-03 to -05, -19; CORE-DOC-01 to -03). | 3 Apply | U3, O3 |
| O2 | **Differentiate** each credit-report and background finding as disqualifying, approver-referred, a closing condition or history only (CORE-BOR-06 to -10; CORE-KYC-03). | 4 Analyze | U3, O3 |
| O3 | **Calculate** adjusted liquidity, required post-closing liquidity, the coverage multiple and months of reserves from dated statements (F-CORE-24, -25, -21; CORE-BOR-11 to -13). | 3 Apply | U3 |
| O4 | **Reconcile** a personal financial statement to statements, tax returns and a schedule of real estate owned, then calculate adjusted net worth before and after closing (F-CORE-26; CORE-BOR-14). | 4 Analyze | U3 (fraud risk), O3 |
| O5 | **Evaluate** whether a guaranty adds real credit support, given contingent liabilities, global cash flow and enforceability, and recommend one structural mitigant. | 5 Evaluate | U3, U9, S9 |
| O6 | **Apply** the experience count, family gates and sponsor-exposure caps to name the tier and the approver (F-CORE-27, -29; CORE-BOR-15 to -18; MF-GEN-07; COM-GEN-15; CORE-CONC-01, -02; CORE-AUTH-01; RES-GU-01). | 3 Apply | K1, K3, U3 |

**Bloom mix:** 3 Apply, 2 Analyze, 1 Evaluate. All 6 are at Apply or above (rule: at least half).

**Conflict to resolve (owner).** Course Bible LD-02 says core modules aim at levels 2-3. The project depth decision (upper-undergraduate to early-graduate) needs levels 4-5 here. Update LD-02 in the live Course Bible before the lesson is rewritten.

## 3. Content map

| Obj | Concepts | Real rules (primary source) | Model policy |
| --- | --- | --- | --- |
| O1 | Look-through ownership (multiply each layer); managing member; qualifying vs other guarantor; revocable vs irrevocable trust; guaranty of payment, completion guaranty, carve-out guaranty | Reg B: a creditor may not require a spouse's signature when the applicant qualifies alone [VERIFY: 12 CFR 1002.7(d)(1), Cornell LII; checked 22 Nov 2026]. It may ask for a guarantor but may not insist that the spouse be that party [VERIFY: 12 CFR 1002.7(d)(5); checked 22 Nov 2026]. It may require signatures that state law needs to reach the collateral [VERIFY: 12 CFR 1002.7(d)(4); checked 22 Nov 2026]. For 1002.7(d) only, "applicant" includes guarantors [VERIFY: 12 CFR 1002.2(e); checked 22 Nov 2026]. Business credit is in scope of Reg B [VERIFY: 12 CFR 1002.2(g); checked 22 Nov 2026] | CORE-BOR-01, -03, -04, -05, -19; CORE-KYC-08; CORE-DOC-01, -02, -03; MF-BR-12; COM-BR-07 |
| O2 | Mid-score; bureau report age; credit events and seasoning; felony screen; open liens and judgments; permissible purpose to pull a guarantor's report; adverse action on business credit | A consumer report may be furnished for "a credit transaction involving the consumer" [VERIFY: 15 U.S.C. 1681b(a)(3)(A), Cornell LII; checked 22 Nov 2026]. Whether a personal guarantor's report fits this purpose is the open point to confirm with counsel. Business-credit adverse-action notices differ for firms at or under $1 million revenue and over it [VERIFY: 12 CFR 1002.9(a)(3)(i)-(ii); checked 22 Nov 2026] | CORE-BOR-06 to -10; CORE-KYC-03; CORE-EXC-03 (no exception to the CORE-BOR-09 fraud bar) |
| O3 | Haircuts; cash to close; commitment vs balance; nominal-rate interest for sizing (D-CONV-01); statement dating | Market practice only; no federal rule. Examiners expect analysis of guarantor liquidity and cash flow (OCC, *Comptroller's Handbook: Commercial Real Estate Lending* v2.0, Mar 2022, "Analysis of Borrower's and Guarantor's Financial Condition") | CORE-BOR-11, -12, -13; F-CORE-21, -24, -25 |
| O4 | Personal financial statement (PFS); schedule of real estate owned (SREO); Form 1040 Schedule E (rents, pass-through K-1 income); Form 1065 and Schedule K-1; IRS transcript check (Form 4506-C); subject-property equity exclusion; post-closing view | Examiners weigh a guarantor's "global financial condition, income, liquidity, cash flow, contingent liabilities" [VERIFY: Interagency Policy Statement on Prudent CRE Loan Accommodations and Workouts, 88 FR 43115 (6 Jul 2023), Section IV.B; checked 22 Nov 2026]. False statements to a mortgage lending business are a federal crime (see C7) | CORE-BOR-14; F-CORE-26 |
| O5 | Contingent liabilities (other guaranties); global cash flow; willingness and incentive; guaranty of payment vs collection; suretyship defences and waivers; springing recourse; anti-deficiency limits | A "financially responsible guarantor possesses the financial ability, the demonstrated willingness, and the incentive" to support the loan; examiners ask whether the guarantor can meet "the total number and amount of guarantees currently extended" [VERIFY: 88 FR 43115, Section IV.B; checked 22 Nov 2026]. Solvency-covenant carve-outs, *Cherryland* and the Michigan and Ohio statutes: pointer only; C9 owns them and their sources (coverage review D8; Gate 1 review removed the secondary-sourced copy here) | CORE-DOC-01 to -05; CORE-DEF-03 (guarantor reaffirmation); State Law Table SLT-OH-02, SLT-NC-02, SLT-IN-02 deficiency columns |
| O6 | Ownership threshold; 36-month lookback; completion types; held-property rule; family gates; tier; aggregate exposure incl. affiliates; commitments not balances; authority matrix | Separation of approval from underwriting follows OCC CRE guidance (OCC handbook, Mar 2022, as cited at CORE-AUTH-03). No public rule sets private-lender caps (Model Credit Policy Core Part 1D) | CORE-BOR-15 to -18; F-CORE-27, -29; MF-GEN-07; COM-GEN-15; CORE-CONC-01, -02; CORE-AUTH-01; RES-GU-01 (D-CORE-26) |

**Policy gaps found (stop and ask: no number may be invented).**

| Gap | Why it matters | Owner action |
| --- | --- | --- |
| P-C6-1: no rule requires tax returns or IRS transcripts for guarantors | O4 needs a document standard to grade against | Add a CORE-BOR rule, or teach as best practice with no scored threshold |
| P-C6-2: no contingent-liability or global cash flow test, and no formula | O5 needs a calculation and possibly a limit | Add a formula to the Formula Library (new F-CORE ID) and decide whether a limit applies. Until then, O5 items test reasoning, not a pass mark |
| P-C6-3: no PFS age rule (statements are covered by CORE-BOR-13; the PFS is not) | Stale net worth is a common file defect | Decide a PFS dating rule or leave it unscored |
| P-C6-4: no Running Deals data for SREO, contingent guaranties or tax-return extracts | O4 and O5 worked examples need deal numbers | Add these rows to RD-MF-01 (Marcus Hale) and RD-COM-01 (Dana Whitlow) in the live Running Deals tab. Do not write them in this repo first |

## 4. Depth targets

What a university course on sponsor and guarantor credit covers that the current lesson does not.

### 4.1 Add

1. **Guarantor financial-statement analysis (O4).** PFS line-by-line verification; the SREO tied to deeds and mortgage statements; Schedule E and K-1 reading; IRS transcript matching (Form 4506-C); spotting assets listed twice (as cash and as entity equity). Source: OCC CRE handbook (Mar 2022), "Analysis of Borrower's and Guarantor's Financial Condition".
2. **Contingent liabilities and global cash flow (O5).** Sum every guaranty the sponsor has given. Compare global cash flow with global debt service. Explain why a large net worth can be illiquid and already pledged. Source: 88 FR 43115, Section IV.B ("total number and amount of guarantees"). Blocked on P-C6-2 for any scored threshold.
3. **Guaranty type as a credit input (O5).** Name the types (payment, collection, completion, carve-out) and say how each changes what the guarantor is really worth. **C9 owns guaranty law** (coverage review, 22 Nov 2026): springing recourse, *Cherryland*, suretyship defences and waivers. C10 owns state anti-deficiency limits. C6 points to both and spends the freed words (about 1,500) on items 1 and 2.
4. **ECOA and the guarantor: pointer only (O1).** **C1 owns** the *Hawkins* / *RL BB* split and the *Loper Bright* question. C6 applies CORE-BOR-05 and 12 CFR 1002.7(d) to each ownership chart, with one sentence that the split is open. The circuit cites C6 found (761 F.3d 937; 754 F.3d 380, from secondary summaries) pass to C1's look-up list.
5. **Adverse action on business credit (O2).** Apply C1's 12 CFR 1002.9(a)(3) rule to a declined guarantor-driven file. Do not reteach it.

### 4.2 Deepen

1. **Credit and background (O2).** Add credit-report anatomy: tradelines, inquiries, public records, fraud alerts. Add why seasoning periods exist (CORE-BOR-08). Add FCRA permissible purpose (15 U.S.C. 1681b(a)(3)(A)).
2. **Experience verification (O6).** Add verification against public deed and sale records. Add the straw-sponsor pattern (track record borrowed from a partner), with a pointer to C7.
3. **Exposure (O6).** Add why concentration limits exist (correlated loss), using OCC "Concentration Risk Management" (Mar 2022). Add F-CORE-30 bucket concentration as a look-ahead to C14.

### 4.3 Correct

1. Header says Bloom levels 2-4, but objective 1 uses "Identify" (level 1). Rewrite as O1 above.
2. Worked example 1 says Sam "does not have to meet the qualifying tests, only the 620 score floor." CORE-BOR-08 to -10 and CORE-KYC-03 apply to every guarantor. Fix the sentence.
3. Alignment matrix maps objective 2 (credit) to OJT rubric item 1 (signers). The rubric has no credit item. Add one.
4. The T1 Reg B paragraph reads as settled law. Add one sentence that courts split on guarantors as applicants, and point to C1, which teaches it (4.1 item 4).
5. Quiz structure: 12 items in two sets do not meet QAS. Rebuild as embedded review questions plus two non-overlapping exam forms (section 6). Self-check items show answers inline: keep them as practice, not review items.
6. Course Bible §3 lists C6's prerequisite as C2 only. F-CORE-21 needs C3's payment math. Make it C2 and C3.

### 4.4 Cut

1. The "Beneficial ownership: the rules moved in 2026" bullets and "What that means for us". They duplicate C7 T1 and T3. Keep one line pointing to C7.
2. Market-blog citations used as benchmarks (CrowdfundedWealth, LendSure, OfferMarket) stay only as labelled "market context, secondary". Regulator sources replace them as support.

## 5. Sequence

Each chunk follows LD-04: teach, worked example, practice. Worked examples use running deals; practice uses a second deal (LD-08).

| # | Chunk (min) | Obj | Worked example (deal numbers as in `data/running-deals/`) | Practice |
| --- | --- | --- | --- | --- |
| 0 | Hook (5) | all | Cedar Court: Marcus has $930,000 of liquidity, 1.81x the $514,000 need, yet only committee can approve | n/a |
| T1 | Who signs and on what (20) | O1 | RD-RES-01: Dana Reyes 60% and Sam Okafor 40% sign; Chris Reyes does not (CORE-BOR-03 to -05). Then RD-MF-01: carve-out guaranty from Marcus plus completion guaranty and environmental indemnity (CORE-DOC-02, -03; MF-BR-12) | RD-COM-01 owners; plus a trust-layer what-if (CORE-BOR-19, CORE-KYC-08) |
| T2 | Credit report and background (20) | O2 | RD-RES-01: mid-scores 712 and 655; 2019 tax lien paid and released, so history only (CORE-BOR-06, -10) | Five what-if findings to classify into four bins |
| T3 | Liquidity and reserves (20) | O3 | RD-RES-01: $95,000 + $28,000 + $42,000 − $74,100 = $90,900.00 vs $34,000.00; 31.3 months (F-CORE-24, -25, -21) | RD-COM-01: $760,000.00 vs $352,000.00; 2.16x; 33.9 months |
| T4 | PFS, tax returns and SREO (25) | O4 | RD-RES-01: $1,150,000 − $610,000 − $0 = $540,000.00; post-closing view $465,900 (F-CORE-26). Then the SREO reconciliation on Marcus Hale's PFS **(needs P-C6-4 data)** | RD-COM-01 Dana Whitlow PFS reconciliation **(needs P-C6-4 data)** |
| T5 | What a guaranty is worth (25) | O5 | RD-MF-01: Marcus's $6,800,000 net worth vs any guaranties he has given on debt against the 40-unit and 18-unit properties **(needs P-C6-4 data; the deal file names no such debt today)**; carve-out triggers named (C9 teaches springing recourse and *Cherryland*) | Recommend one mitigant for a what-if guarantor with large contingent debt; reasoning graded, no threshold (P-C6-2) |
| T6 | Experience, exposure and approver (20) | O6 | RD-RES-01: count 6, Tier 2, exposure $340,000, senior underwriter. RD-MF-01: gate passes, count 2, Tier 1, $5,140,000 over the $3,000,000 cap, committee (CORE-CONC-01, CORE-AUTH-01) | RD-COM-01: Tier 1, $3,520,000, committee; what-if with a $1,200,000 open loan |
| W | Integrated case (15) | all | n/a | One-page guarantor summary for RD-COM-01, all tests, approver |
| X | Final exam (separate) | all | n/a | Form A or B |
| OJT | Extra (45) | all | Cedar Court guarantor summary (current OJT, rubric extended for O2, O4, O5) | n/a |

## 6. Assessment plan

Sized from the projected credits in section 7 (4.4 credits) and the build rule in `docs/accreditation/qas-spec.md`. Multiple choice only, four options, one best answer, feedback on every option. No exam item repeats a review question.

| Obj | Review questions | Exam Form A | Exam Form B | Critical items (per form) |
| --- | --- | --- | --- | --- |
| O1 | 3 | 4 | 4 | 1 (who signs) |
| O2 | 3 | 4 | 4 | 1 (fraud-felony bar or 48-month event) |
| O3 | 3 | 5 | 5 | 1 (pass or fail CORE-BOR-12) |
| O4 | 3 | 5 | 5 | 0 |
| O5 | 3 | 4 | 4 | 0 (no policy threshold yet, P-C6-2) |
| O6 | 3 | 5 | 5 | 1 (approver) |
| **Total** | **18** | **27** | **27** | 4 |

- **Minimums at 4.4 credits:** review 3 × 4 + 1 = 13; exam 5 × 4 + 3 = 23. Plan meets them (18 and 27).
- **Build rule:** review 4 per credit, rounded up = 18. Exam 6 per credit = 26.4, rounded up to 27 per form, at least 2 per objective. Met.
- **Coverage:** every objective is examined (rule: at least 75%).
- **Pass mark:** 80%, and every critical item correct.
- **Placement:** review questions sit after each chunk, 3 per chunk.

## 7. Hour estimate

| Input | Projected |
| --- | --- |
| Words counted (teach chunks, worked examples, practice and feedback; excludes intro, instructions, glossary, job aid appendix) | 22,000 (current lesson: 5,082 words in total) |
| Review questions | 18 |
| Practice exercises (scored items in T1-T6 practice and the integrated case) | 12 |
| Exam items (one form taken) | 27 |
| Audio or video (not narration) | 0 minutes (diagrams only) |

**Credit calculation (Std 7.02.5-.7):**

1. Words: 22,000 ÷ 180 = 122.222 minutes.
2. Questions: (18 + 12 + 27) × 1.85 = 57 × 1.85 = 105.450 minutes.
3. Media: 0.000 minutes.
4. Total: 227.672 minutes ÷ 50 = 4.553, rounded down to **4.4 credits** (fifths).

That is about 3.8 hours of learner time, against 3 hours in Course Bible §3. It stays under the LD-03 cap of 4 hours. The OJT task (45 minutes) is extra and earns no credit. Final credits come from the finished lesson's real count.

## 8. Prerequisites and overlaps

**Prerequisites.** C2 (credit box, approval path) and C3 (monthly interest and payment for F-CORE-21). C1 introduces Reg B and ECOA; C6 applies them. Advance preparation: none.

| Topic | C6 does | Left to |
| --- | --- | --- |
| Ownership chart and beneficial ownership | Uses the chart to find guarantors | C7: ID, OFAC, CDD, beneficial-ownership law |
| Fraud in sponsor files | Flags overstated assets and borrowed track records | C7: red-flag process, SAR, criminal statutes |
| Guaranty documents and guaranty law | Credit value of each guaranty type; guarantor collectibility (liquidity, net worth, contingent liabilities) is owned here | C9: guaranty law, springing recourse, *Cherryland*, waivers; C10: state anti-deficiency and one-action (uses C6's collectibility result); C13: enforcement at default |
| ECOA guarantor-as-applicant split; business adverse action | Applies CORE-BOR-05 and 1002.9(a)(3) | C1 owns both |
| Approver routing (CORE-AUTH-01) | Applies it to name the approver once the tier is set | C2 owns the routing |
| Tier | Sets the tier | C8: tier drives leverage limits and price |
| Exposure and concentration | Sponsor caps and approver | C14: portfolio buckets (F-CORE-30, CORE-CONC-03 to -07) |
| Family gates | Applies MF-GEN-07 and COM-GEN-15 | M1, CM1: full family eligibility |

## Self-check

| Request item | Status |
| --- | --- |
| 8-part format from the role file | Done (sections 1-8) |
| 4-8 objectives, measurable, Bloom-tagged, half or more Apply+ | Done: 6 objectives, all Apply or above |
| Each objective mapped to needs-analysis tasks | Done (section 2) |
| Real primary sources and rule IDs | Done; LII pages opened 22 Nov 2026. The two circuit opinions rest on secondary summaries, tagged; the Michigan statute moved to C9 |
| Lesson read in full; add, deepen, correct, cut | Done (section 4) |
| Assessment sized to QAS from projected credits | Done (sections 6-7) |
| No invented policy numbers | Done: four gaps listed for owner decision |

## What to look up yourself

1. Open *Hawkins*, 761 F.3d 937 (8th Cir. 2014), and *RL BB Acquisition*, 754 F.3d 380 (6th Cir. 2014). The court PDFs did not render during research.
2. Open MCL 445.1591-.1593 on legislature.mi.gov. The site refused the connection on 22 Nov 2026.
3. Find FTC or CFPB guidance on pulling a personal guarantor's consumer report for business credit under 15 U.S.C. 1681b(a)(3)(A).

## How to check it

1. Re-run the credit math: `=22000/180+(18+12+27)*1.85` should give 227.672; divided by 50 gives 4.553.
2. Open each `[VERIFY]` source and confirm the quoted words.
3. Check every running-deal figure in section 5 against `data/running-deals/running-deals.md`.
