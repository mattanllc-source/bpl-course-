# C11 blueprint: Closing and funding

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Module | C11, BPL-CORE (QAS Self Study program; Intermediate) |
| Provider | BPL Academy |
| Field of study | Specialized Knowledge; Finance for T2-T3 math time (Std 7.01.1) |
| Current lesson | `modules/core/c11/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current). Read in full |
| Course Bible hours | 2 (Section 3). Projected below: 2.8 credits |
| Needs analysis | `docs/curriculum/needs-analysis.md` v0, 22 Nov 2026 |
| Status | v0 blueprint, 22 Nov 2026, for owner review. No lesson or Bible text changed |

## 1. Module purpose

C11 builds the closer's and funder's skill of turning an approval into a funded, perfected and well-documented loan without losing money to error or fraud. It follows C9 (the document set) and hands a boarded loan to C12 (servicing).

## 2. Learning objectives

By the end of C11, you will be able to:

| # | Objective | Bloom | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Verify** a funding-day condition set, including document ages with F-CORE-36, and decide which open items need a pre-closing exception and who may approve it (CORE-CLS-01, -03; CORE-VAL-02; CORE-BOR-07, -13; CORE-EXC-01, -03; CORE-AUTH-01) | 3 Apply | F1, O5, K1 |
| O2 | **Prepare** a balanced settlement statement and the borrower's cash to close (F-RES-09; F-CORE-06, -33, -35; CORE-CLS-04; CORE-INS-02) | 3 Apply | F2 |
| O3 | **Reconcile** the net funding wire (F-CORE-41) to the settlement statement so that lender wire plus borrower cash equals third-party uses | 4 Analyze | F2, F3 |
| O4 | **Evaluate** a funding request for wire-fraud risk and choose the control response (CORE-CLS-02, -03; CORE-KYC-05, -07; D-CORE-25), including a name-and-number mismatch, before any wire is released | 5 Evaluate | F3, U4 |
| O5 | **Distinguish** how race, notice and race-notice recording acts, the gap period, the CPL and the title policy protect lien priority after funding | 2 Understand | F4 |
| O6 | **Assemble** the post-closing collateral file and trailing-document log, with UCC lapse dates, ready for boarding and custodian delivery (CORE-CLS-05) | 3 Apply | F5, F6 |

**Bloom mix:** 1 Understand, 3 Apply, 1 Analyze, 1 Evaluate. Five of six (83%) at Apply or above. Six objectives fits both QAS and the Bible's 3-6.

## 3. Content map

### O1 Conditions, ages and exceptions

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Reading an approval; conditions precedent | Market practice | CORE-CLS-01, -03 |
| Document ages on the funding day | — | CORE-VAL-02 (120 days, F-CORE-36); CORE-BOR-07 (90); CORE-BOR-13 (60); CORE-KYC-01 (same-day OFAC) |
| Exceptions: when, how, who | Examiners expect exceptions documented, approved and reported (OCC CRE Lending, Mar 2022, per CORE-EXC-01 rationale) | CORE-EXC-01 to -04; CORE-AUTH-01 (authority matrix) |

### O2 Settlement statement

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Why TRID and RESPA forms do not apply | Business-purpose credit is exempt from Reg Z [VERIFY: 12 CFR 1026.3(a); checked 18 Nov 2026 per Model Credit Policy] and from RESPA [VERIFY: 12 CFR 1024.5(b)(2); checked 20 Nov 2026 per CORE-INS-02] | CORE-BP-01 |
| Commercial settlement statement format | ALTA Settlement Statement - Commercial (market form; obtain at build) | — |
| Prepaid interest to month-end | — | CORE-CLS-04; F-CORE-33; D-CONV-02 |
| Points, escrows, cushion, cap purchase | — | F-CORE-06, -35; CORE-INS-02; MF-BR-09, -13; COM-BR-03 |

### O3 Wire reconciliation

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Netting lender items from the advance | — | F-CORE-41; CORE-CLS-03, -04 |
| Good funds before disbursement | NC: the settlement agent may not disburse until closing funds are in its trust or escrow account in an allowed form [VERIFY: N.C. Gen. Stat. 45A-4, via ncleg.gov search excerpt (403); checked 22 Nov 2026]. Ohio: an escrow or closing agent may not knowingly disburse until funds are wired or deposited and "immediately available", or fit set small-item rules (ORC 1349.21). It covers only one- to four-family residential property (ORC 1349.20), so Maple Run is in scope and Cedar Court and Birchwood types are not. Indiana: a closing agent "may not make disbursements" unless funds are "good funds"; above $10,000 from one party, the excess must be wired (IC 27-7-3.7-7, -8). It covers "the purchase, sale, or financing of an interest in real estate" (IC 27-7-3.7-1) [VERIFY: ORC 1349.20, 1349.21; IC 27-7-3.7-1, -7, -8; codes.findlaw.com mirror (current as of 1 Jan 2026); checked 22 Nov 2026] | CORE-CLS-02 |

### O4 Wire-fraud controls

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| BEC pattern and red flags | FinCEN Advisory FIN-2019-A005, 16 Jul 2019 (updates FIN-2016-A003) [VERIFY: fincen.gov listing via search; checked 22 Nov 2026]; FBI IC3 PSA I-060923-PSA (lesson T4) | CORE-KYC-07; D-CORE-25 |
| Name and number mismatch | If name and account number refer to different persons, the beneficiary's bank may rely on the number and need not check the name [VERIFY: UCC 4A-207(b)(1), law.cornell.edu; checked 22 Nov 2026] | CORE-CLS-03 (account must match the CPL agent's escrow account) |
| Recall and the Financial Fraud Kill Chain | Recovery is most likely when the fraud is reported within 72 hours (FinCEN Rapid Response Program; IC3 Recovery Asset Team) [VERIFY: FinCEN RRP fact sheet and IC3 FFKC brochure, via search; open before writing; checked 22 Nov 2026] | CORE-KYC-05 (same-day BSA officer) |
| Closing protection letter | [VERIFY: ALTA CPL form, as cited in lesson T4; checked 22 Nov 2026] | CORE-CLS-02 |

### O5 Priority after funding

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Recording acts and the gap | ORC 5301.23(A); G.S. 47-20; IC 32-21-4-1 (lesson T5 tags). North Carolina is described as a "pure race" state [VERIFY: *DOT v. Humphries*, 347 N.C. 649 (1998), via search; opinion not opened; checked 22 Nov 2026] | CORE-CLS-05 |
| Gap cover and final policy | 2021 ALTA Loan Policy (market) | CORE-CLS-01, -06 |

### O6 Collateral file and trailing documents

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Original note, endorsement, allonge, lost-note risk | UCC 3-204, 3-309 [VERIFY: not opened] | CORE-CLS-05 |
| UCC lapse and continuation | [VERIFY: UCC 9-515(a), (d), law.cornell.edu; checked 22 Nov 2026] | CORE-CLS-05 |
| Rate cap assignment (floating loans) | Market | MF-BR-09; COM-BR-03 |
| Custodian or buyer delivery; bailee letters | Market | **Gap: no policy rule on custodial delivery** (needs analysis F6). Teach as context; ask the owner |
| Boarding to servicing | — | CORE-CLS-04 (billing start); RES-FF-09 (draw set-up) |

## 4. Depth targets (what must be added, deepened, corrected or cut)

### Add

1. **Reconciliation (O3).** Teach that lender wire plus borrower cash equals all third-party uses. Maple Run: $233,738.33 + $75,261.67 = $309,000.00 = $300,000 price + $9,000 costs. Points and prepaid interest stay with the lender. This single check catches most wire errors.
2. **Payments law (T4).** UCC 4A-207(b) explains why the account-name check in CORE-CLS-03 matters: the receiving bank may pay by number alone. **C11 owns pre-release wire controls and UCC 4A-207** (coverage review, 22 Nov 2026). Recall steps and the kill-chain window belong to C7 O4 (response after a diversion); C11 points back to them in one line.
3. **Recording acts (T5).** The lesson says a later party "who records first could take priority". That is true in race states only. Teach race, notice and race-notice, and the gap period's reliance on the CPL and title.
4. **Collateral file (new T6 content).** Note endorsement and allonge, the original-note rule, UCC lapse dates, cap assignment and custodial delivery. This covers F6, which no module covers today.
5. **Good-funds laws.** Add NC G.S. 45A-4 as the model of a state rule on when the agent may disburse. Compare Ohio ORC 1349.21 (residential 1-4 units only) and Indiana IC 27-7-3.7 (any real estate financing).

### Deepen

1. **Exceptions (T1).** Teach the CORE-EXC-02 log fields and the CORE-EXC-03 bar, using a real funding-day item.
2. **Settlement statement (T2).** Add the commercial form layout and why TRID and RESPA do not apply (12 CFR 1026.3(a); 1024.5(b)(2)).

### Correct

1. **Exception authority for aged documents.** Set A item 1's key says "update it, or approve an exception before closing". The CORE-AUTH-01 matrix allows only leverage, DSCR, FICO and liquidity exceptions. No approver holds authority for an aged appraisal or credit report. Teach "update it" until the owner decides. Open policy question for the owner.
2. **Unused formula.** F-CORE-36 lists C11 as a module, but the lesson never works it. Add WE1: Maple Run appraisal effective 3 Jan 2027, closing 15 Jan 2027 = 12 days, passes 120 (CORE-VAL-02).
3. **LD-07 gap.** The alignment matrix shows no OJT coverage for O5 (trailing documents). The new OJT step must log trailing documents.
4. **Assessment format.** Both quiz sets are short-answer; Set A 1, 9 and Set B 8 are yes/no. Rebuild as multiple choice per section 6.
5. **Title line.** The file has no `# C11` heading. Add it.

### Cut or move

1. **Duplicate red-flag lists in T4.** "Stop the wire if..." and the "Stop-and-verify flags" list overlap and restate C7. Merge into one decision table that cites CORE-KYC-07 and D-CORE-25 (saves about 150 words).

## 5. Sequence

| Chunk | Objective | Teach | Worked example (running deal) | Practice |
| --- | --- | --- | --- | --- |
| Hook | — | FBI IC3 2025 real estate and BEC losses (keep) | — | — |
| T1 Conditions, ages, exceptions (2,200 words) | O1 | Funding checklist; ages; exception rules and authority | **WE1 Maple Run, 15 Jan 2027:** appraisal 3 Jan → 15 Jan = 12 days, passes 120 (F-CORE-36; CORE-VAL-02). Statements dated 16 Nov 2026 or later (CORE-BOR-13). OFAC re-run that morning (CORE-KYC-01) | P1: Cedar Court: four ages to check; one aged item; who can approve? |
| T2 Settlement statement (2,600) | O2 | Sources and uses; prepaid interest; escrows; cap purchase; why no TRID | **WE2 Maple Run** (keep): $240,000 × 10.25% ÷ 360 × 17 = $1,161.67 (F-CORE-33). Uses $315,261.67 = sources $240,000 + $75,261.67 | P2: Cedar Court prepaid $4,340,000 × 7.65% ÷ 360 × 1 = $922.25; cash $2,240,066.67 + $922.25 = $2,240,988.92 |
| T3 Wire and reconciliation (1,200) | O3 | F-CORE-41; reconciliation identity; negative-wire stop | **WE3 Maple Run:** $240,000 − $5,100.00 − $1,161.67 = $233,738.33. Check: $233,738.33 + $75,261.67 = $309,000.00 = $300,000 + $9,000 | P3: Cedar Court: $4,340,000 − $51,400.00 − $922.25 − $68,666.67 = $4,219,011.08. Check: + $2,240,988.92 = $6,460,000.00 = $6,200,000 + $200,000 + $60,000 cap |
| T4 Closing agent and wire controls (3,200) | O4 | CPL; written instructions; callback; two-person release; UCC 4A-207 (recall and kill chain: one-line pointer to C7) | **WE4 Maple Run what-if:** at 11 a.m. a look-alike domain asks to wire today to a new account. Rush plus new domain: hold the wire, callback to the number on file (CORE-KYC-07; D-CORE-25). Account name differs from the CPL agent: stop (CORE-CLS-03; UCC 4A-207(b)) | P4: Cedar Court 3 p.m. "audit" email (keep); add: a second request that matches the agent's name but gives a new account number. Decide release or hold, and cite the control (C7 practises the post-diversion steps) |
| T5 Recording and priority (1,800) | O5 | Race, notice, race-notice; gap period; final policy | **WE5** the three deal states: Ohio ORC 5301.23(A), NC G.S. 47-20, Indiana IC 32-21-4-1. Classify each once the statutes are opened | P5: a what-if second lender records first in each state: who wins? |
| T6 Collateral file and trailing log (2,500) | O6 | Original note and allonge; recorded instruments; final policy; ALR and UCC; cap assignment; boarding; custodian | **WE6 Maple Run log** (deepen current WE3): recorded mortgage open; final policy open; draw schedule for the $100,000 holdback (RES-FF-09); billing from 1 Feb, first payment 1 Mar (CORE-CLS-04). **WE7 Cedar Court UCC what-if:** filed 31 Mar 2027, lapses 31 Mar 2032; continuation window opens 30 Sep 2031 (UCC 9-515) | P6: Birchwood file checklist, including the assigned $40,000 cap (COM-BR-03) |
| Wrap-up | All | Self-check, What to look up yourself, How to check it | — | — |

**OJT (solo mode):** Birchwood settlement statement, wire and funding checklist (keep). Add step 5: a trailing-document log with dates. Model answer: prepaid $2,860,000 × 7.65% ÷ 360 × 13 = $7,900.75; cash $1,743,100.75; wire $2,816,899.25. Reconcile: $2,816,899.25 + $1,743,100.75 = $4,560,000.00 = $4,400,000 + $120,000 + $40,000 cap.

Interactive elements (Std 4.05.3): a sources-and-uses builder that flags imbalance, a wire calculator tied to F-CORE-41, and a branching wire-fraud scenario.

## 6. Assessment plan

Sized on the projected 2.8 credits. Multiple choice only, four options, one best answer, feedback on every option. No yes/no items.

| Objective | Review questions | Exam Set A | Exam Set B | Critical items per form |
| --- | --- | --- | --- | --- |
| O1 Conditions | 2 | 3 | 3 | 1 (funding with a missing same-day OFAC re-run) |
| O2 Settlement | 2 | 3 | 3 | 0 |
| O3 Wire | 2 | 3 | 3 | 0 |
| O4 Fraud controls | 3 | 4 | 4 | 2 (changed instructions; name and account mismatch) |
| O5 Priority | 1 | 2 | 2 | 0 |
| O6 Collateral file | 2 | 2 | 2 | 0 |
| **Total** | **12** | **17** | **17** | 3 |

| Check | Minimum (Std) | Plan | Met |
| --- | --- | --- | --- |
| Review items at 2.8 credits | 3 × 2 + 3 = 9 | 12 | Yes |
| Exam items at 2.8 credits | 5 × 2 + 5 = 15 | 17 per form | Yes |
| At least 2 exam items per objective | 12 | Lowest is 2 | Yes |
| Objectives covered by exam | 75% | 100% | Yes |
| Pass mark | 70% | 80%, all critical items correct | Yes |

## 7. Hour estimate

**Counted words (13,500):** T1 2,200; T2 2,600; T3 1,200; T4 3,200; T5 1,800; T6 2,500. Excluded: hook, objectives, instructions, glossary, job aid and OJT brief.

**Questions counted:** 12 review + 17 exam (one form) + 10 scored practice exercises = 39. Video: 0 counted minutes.

1. Words: 13,500 ÷ 180 = 75.000 minutes.
2. Questions: 39 × 1.85 = 72.150 minutes.
3. Total: 75.000 + 72.150 + 0 = 147.150 minutes.
4. Credits: 147.150 ÷ 50 = 2.943, rounded down to fifths = **2.8 credits**.

At 2.8 credits the build rule gives 12 review and 17 exam items, as used. Recompute after the lesson is final.

## 8. Prerequisites and overlaps

| Direction | Module | What |
| --- | --- | --- |
| Prerequisite | C3 | Actual/360 and day counts (F-CORE-05) |
| Prerequisite | C7 | Red flags, callback rule and BSA routing (CORE-KYC-01, -05, -07). C11 applies them; it does not reteach them |
| Prerequisite | C8 | Commitment, initial advance, points (F-CORE-06) |
| Prerequisite | C9 | Title commitment, insurance evidence, escrows (F-CORE-35), UCC basics |
| Takes further | C12 | Boarding, billing, draws (CORE-SVC-05), escrow administration |
| Takes further | C14 | Exception reporting and authority in committee (CORE-EXC-05; CORE-AUTH-01) |
| Owned here | C11 | Collateral file delivery to a custodian, warehouse lender or buyer (F6), via O6: bailee letter, note endorsement and allonge, custodial exception report. Pre-release wire controls and UCC 4A-207 |
| Takes further | C14 | Buyer and warehouse eligibility, repurchase claims and risk retention (U11, K7), in C14's new O2 (coverage review, 22 Nov 2026) |
| Uses | C7 | Post-diversion response (recall, IC3, SAR), owned by C7 O4 |

## Self-check

| Requirement | Status |
| --- | --- |
| Eight parts in role-file order | Met |
| 4-8 objectives; at least half Apply or above | Met: 6; 5 at Apply or above |
| Objectives mapped to tasks | Met |
| No invented limits | Met. Gaps flagged: aged-document exception authority; custodial delivery |
| Legal statements tagged | Met; unopened sources marked "not opened" |
| Running-deal numbers match | Met; closing dates for Cedar and Birchwood are labelled what-ifs |

## What to look up yourself

1. The official text of G.S. 45A-4 and 47-18/47-20 on ncleg.gov, and *DOT v. Humphries*.
2. Official texts of ORC 1349.20-1349.21 (codes.ohio.gov) and IC 27-7-3.7 (iga.in.gov); mirrors used so far.
3. FinCEN's Rapid Response Program fact sheet and the IC3 kill-chain brochure, read directly.
4. UCC 3-204 and 3-309 on LII, and the ALTA commercial settlement statement form.

## How to check it

1. Credits: `=13500/180 + 39*1.85` gives 147.15; ÷ 50 = 2.94; round down to 2.8.
2. `=233738.33+75261.67` gives 309,000.00.
3. `=4219011.08+2240988.92` gives 6,460,000.00.
4. `=DATE(2027,1,15)-DATE(2027,1,3)` gives 12.
