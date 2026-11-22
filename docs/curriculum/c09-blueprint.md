# C9 blueprint: Loan documents, title, insurance and collateral

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Module | C9, BPL-CORE (QAS Self Study program; Intermediate) |
| Provider | BPL Academy |
| Field of study | Specialized Knowledge; Finance for T4 and T6 math time (Std 7.01.1) |
| Current lesson | `modules/core/c09/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current). Read in full |
| Course Bible hours | 3 (Section 3). Projected below: 4.2 credits |
| Needs analysis | `docs/curriculum/needs-analysis.md` v0, 22 Nov 2026. Task IDs below refer to it |
| Status | v0 blueprint, 22 Nov 2026, for owner review. No lesson or Bible text changed |

## 1. Module purpose

C9 builds the closer's and underwriter's skill of reading the collateral package: documents, recourse, title, insurance, environmental and tenant papers. It sits after C2 and before C10 (state remedies) and C11 (closing), which both rely on its document vocabulary.

## 2. Learning objectives

By the end of C9, you will be able to:

| # | Objective | Bloom | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Distinguish** the job of the note, security instrument, loan agreement, guaranties, assignment of leases and rents and UCC filings, and name the body of law that governs each | 2 Understand | O3, F4, U7 |
| O2 | **Evaluate** the recourse and guaranty package for a loan, including whether a carve-out can spring to full recourse (CORE-DOC-01 to -05; RES-GEN-07; MF-BR-12; COM-BR-07) | 5 Evaluate | U7, U9, K2 |
| O3 | **Analyze** a title commitment and survey: classify each Schedule B item, set the policy amount and endorsements, and flag mechanics' lien priority risk (CORE-CLS-01, -06; CORE-SVC-05) | 4 Analyze | U7, F4 |
| O4 | **Calculate** insurance-to-value, coinsurance recovery, loss-of-rents and flood cover, and decide whether the insurance evidence meets policy (CORE-INS-01, -03, -04; F-CORE-34, -37; RES-GEN-08; MF-GEN-10; COM-GEN-16) | 3 Apply | U7, F4, S7 (preview) |
| O5 | **Calculate** tax and insurance escrows, the closing cushion and multifamily reserves (F-CORE-35; CORE-INS-02; MF-BR-13) | 3 Apply | F2, U5 |
| O6 | **Evaluate** environmental diligence: Phase I currency, when a finding needs a Phase II, and lender conduct that keeps CERCLA's secured-creditor protection (COM-GEN-14; MF-GEN-08; CORE-DOC-03) | 5 Evaluate | U7, S10 (preview) |
| O7 | **Determine** estoppel, SNDA and lockbox requirements from a rent roll, and explain what an SNDA does to lease priority (COM-GEN-09, -12) | 3 Apply | U7, S3 (preview) |

**Bloom mix:** 1 Understand, 3 Apply, 1 Analyze, 2 Evaluate. Six of seven (86%) are Apply or above. Seven objectives sits inside QAS 3-8 (Std 3.01). It exceeds Course Bible LD-02 ("core aims at levels 2-3") and the 3-6 objectives in Section 4. Owner decision needed: the project depth decision (upper-undergraduate to early-graduate) conflicts with LD-02 as written.

## 3. Content map

### O1 Document architecture

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Note as the debt; negotiability; endorsement | UCC Article 3 (state-enacted). Open UCC 3-104 and 3-204 on LII at build [VERIFY: not opened for this blueprint] | CORE-CLS-05 (trailing documents) |
| The mortgage follows the note | Attachment of a security interest in a secured right to payment also attaches to the mortgage [VERIFY: UCC 9-203(g), law.cornell.edu/ucc/9/9-203; checked 22 Nov 2026] | — |
| UCC financing statement on personal property and fixtures | A registered organization is located in its state of organization [VERIFY: UCC 9-307(e), LII; checked 22 Nov 2026]. Filings last 5 years; continuation only in the last 6 months [VERIFY: UCC 9-515(a), (d), LII; checked 22 Nov 2026] | CORE-CLS-05 |
| Assignment of leases and rents | State real property law; receiver consent clause | CORE-DEF-05 (receiver consent in every instrument, previewed); CORE-CLS-05 |
| Loan agreement covenants; SPE covenants | Market practice | COM-GEN-04 (SPE) |

### O2 Recourse, guaranties and carve-outs

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Recourse by family, size and LTV | — | CORE-DOC-01, -02, -03; RES-GEN-07; MF-BR-12; COM-BR-07; F-CORE-14 (LTV on lower of price and value) |
| Carve-out ("bad boy") guaranty; springing full recourse | Market practice | CORE-DOC-02 (fraud, misapplied funds, unpermitted transfer, voluntary bankruptcy) |
| Solvency covenants as recourse triggers | Ohio bars a post-closing solvency covenant as a non-recourse carve-out on Ohio-secured commercial loans [VERIFY: ORC 1319.07(B), (D), 1319.08, via codes.findlaw.com, current to 1 Jan 2026; checked 22 Nov 2026]. Ohio's act followed Michigan's 2012 Nonrecourse Mortgage Loan Act, passed after *Wells Fargo Bank v. Cherryland Mall*, 295 Mich. App. 99 (2011) [VERIFY: case history via law-firm summaries; open the opinion before teaching; checked 22 Nov 2026] | CORE-DOC-02 |
| State check of remedies before the term sheet | Pointer only; taught in C10 | CORE-DOC-04, -05 |

### O3 Title, survey and mechanics' liens

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Commitment: Schedule A, B-I, B-II | ALTA forms (market standard). Coverage is capped at the lesser of Amount of Insurance and Indebtedness [VERIFY: 2021 ALTA Loan Policy, Conditions 1 and 8.a; checked 22 Nov 2026, per CORE-CLS-06 rationale] | CORE-CLS-01, -06 |
| Draw cover: pending disbursement, date-down, ALTA 32/33, ALTA 14 | ALTA endorsement guidelines (market) | CORE-CLS-06; CORE-SVC-05 |
| Survey and survey-based endorsements | ALTA/NSPS Minimum Standard Detail Requirements (market). Obtain current edition at build | Gap: no survey rule in the Model Credit Policy. Do not invent one; ask the owner |
| Mechanics' lien priority on rehab and capex loans (title side only; C12 teaches the state law below) | North Carolina: an owner must designate a lien agent for improvements costing $30,000 or more; lien agents are title insurers or agencies [VERIFY: N.C. Gen. Stat. 44A-11.1(a), 58-26-45, via ncleg.gov search excerpt (site returned 403); checked 22 Nov 2026]. Ohio notice of commencement (ORC 1311.04) and Indiana (IC 32-28-3): open at build [VERIFY: not opened] | CORE-CLS-01 (clear anything that could prime the lien); CORE-SVC-05 (waivers and date-down at each draw) |

### O4 Insurance

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Special-form, replacement cost, 100% of insurable value; no coinsurance clause | Market (Fannie Mae MF Guide 501.02A, cited in policy) | CORE-INS-01; F-CORE-34, -37; D-CORE-19, -28 |
| Mortgagee clause versus loss payee: why the lender wants both | A contract term, not a statute. The standard (union) mortgage clause says the lender's interest "shall not be invalidated by any act or neglect of the mortgagor". North Carolina treats it as "a distinct and independent contract between the insurance company and the mortgagee". A simple loss-payable clause gives the lender only the borrower's rights: *Green v. Fidelity-Phenix Fire Ins. Co.*, 233 N.C. 321 (1951) [VERIFY: Green v. Fidelity-Phenix, 233 N.C. 321, static.case.law/nc/233/cases/0321-01.json; checked 22 Nov 2026]. Quote the policy's own clause at build; the ISO form text is still not opened | CORE-INS-01 (lender named as mortgagee and loss payee) |
| Builder's risk at 100% of completed value | Market | CORE-INS-04; RES-GEN-08 |
| Loss of rents | — | RES-GEN-08 (6 months); MF-GEN-10, COM-GEN-16 (12 months) |
| Flood: federal mandatory purchase and NFIP caps | 42 USC 4012a(b) binds regulated lenders, not us directly; NFIP caps in 44 CFR 61.6 [VERIFY: both as cited in lesson T3, checked 22 Nov 2026]. NFIP authorized only to 11 Dec 2026 [VERIFY: CRS R44593, 5 Oct 2026] | CORE-INS-03 |
| Terrorism cover on commercial collateral | The federal Terrorism Risk Insurance Program runs to 31 Dec 2027 [VERIFY: Treasury data-call notice, 91 FR (25 Mar 2026), govinfo FR-2026-03-25 doc 2026-05794, via search excerpt; checked 22 Nov 2026] | **Gap: no terrorism-cover rule exists.** Teach as context only. Ask the owner whether to add one |

### O5 Escrows and reserves

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Monthly deposit and 2-month cushion | RESPA escrow cap is a consumer benchmark only; business-purpose loans are exempt [VERIFY: 12 CFR 1024.17(c)(1), (c)(5), 1024.5(b)(2), as cited in lesson T4; checked 22 Nov 2026] | F-CORE-35; CORE-INS-02 |
| MF replacement and repair reserves | — | MF-BR-13 |

### O6 Environmental

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| All appropriate inquiries: 1-year and 180-day windows | [VERIFY: 40 CFR 312.20(a)-(b), as cited in lesson T5; checked 22 Nov 2026]. ASTM E1527-21 recognition: open 40 CFR 312.11 at build [VERIFY: not opened] | COM-GEN-14; MF-GEN-08 |
| Secured-creditor exemption | A lender holding title indicia mainly to protect a security interest, without participating in management, is not an "owner or operator". After foreclosure it keeps that status if it seeks to divest "at the earliest practicable, commercially reasonable time" [VERIFY: 42 USC 9601(20)(F)(i)-(ii), law.cornell.edu; checked 22 Nov 2026] | CORE-DOC-03 (environmental indemnity); CORE-DEF-06 (REO sale plan, previewed) |
| New hazardous substances in scope | EPA designated PFOA and PFOS as CERCLA hazardous substances (89 FR 39124, effective 8 Jul 2024). The D.C. Circuit upheld it on 18 Aug 2026, No. 24-1193 [VERIFY: govinfo 2024-08547; court result via law-firm alerts, opinion not opened; checked 22 Nov 2026] | COM-GEN-14 (a REC triggers a Phase II) |
| Residential collateral | No federal Phase I duty for 1-4 unit BPL | **Gap: no RES environmental screen in policy** (needs analysis §4.3). Ask the owner; do not invent |

### O7 Tenant documents and cash management

| Concept | Real rule and primary source | Model policy |
| --- | --- | --- |
| Estoppel and SNDA thresholds | Market; lease priority follows the recording act (C11) | COM-GEN-09 |
| Subordination, non-disturbance and attornment as three separate promises | Market practice | COM-GEN-09 |
| Springing versus hard lockbox; sweep DSCR | — | COM-GEN-12; COM-GEN-10 (25% tenant lease term) |

## 4. Depth targets (what must be added, deepened, corrected or cut)

### Add

1. **Document law (new T1, about 2,600 words).** The lesson lists documents but never says what law makes them work. Add UCC Article 3 negotiability and endorsement, the "mortgage follows the note" rule (UCC 9-203(g)), and Article 9 perfection. Use 9-307(e) to find the filing office for each running-deal borrower. Teach the 5-year lapse and the 6-month continuation window (9-515). Classic case to cite once opened: *Carpenter v. Longan*, 83 U.S. 271 (1872) [VERIFY: not opened].
2. **Springing recourse doctrine.** Teach how a carve-out guaranty turns non-recourse into full recourse. Teach the *Cherryland* solvency-covenant problem and Ohio's statutory fix (ORC 1319.07-.09). This matters for every MF and COM non-recourse loan under CORE-DOC-02. **C9 owns guaranty and recourse law** (coverage review, 22 Nov 2026), including the suretyship defences and waivers moved from C6 (*Restatement (Third) of Suretyship and Guaranty*, secondary). Michigan's 2012 response (MCL 445.1591 et seq.) also moves here from C6; open it before citing. C2 and C6 point here; C10 owns state anti-deficiency limits.
3. **Mechanics' lien risk on the title commitment.** The lesson treats a recorded roofer's lien but not unrecorded lien rights on rehab and capex. Teach the title side only: the Schedule B exception, the endorsement or affirmative cover, and why each draw needs a date-down (CORE-SVC-05). **C12 owns state lien-priority law** (relation-back, ORC 1311.14, NC lien agent G.S. 44A-11.1, Indiana waivers); C9 names it in one sentence.
4. **Mortgagee clause.** Explain why a standard mortgage clause protects the lender when the borrower voids the policy. Bridge to C12 claims handling (S7).
5. **CERCLA lender liability.** The lesson covers Phase I timing only. Add the secured-creditor exemption and "participation in management" (42 USC 9601(20)(E)-(G)). **C9 owns the exemption; C13 owns the post-foreclosure divestment duty** (9601(20)(F)(ii)), which C9 names in one sentence. Add the PFOA and PFOS designation as a Phase I scope question.
6. **Policy gaps to raise, not fill:** survey standard, terrorism cover, RES environmental screen. Each is listed for the owner. Do not write a limit.

### Deepen

1. **Title.** Add the 2021 ALTA Loan Policy's covered risks, exclusions and the "lesser of amount or indebtedness" cap. Add survey-based endorsements (ALTA 9 family, 17 access, 25 same-as-survey) once the endorsement guide is opened.
2. **Insurance-to-value.** Add how replacement cost is estimated (insurer valuation versus appraisal cost approach). Show why market value and ITV diverge on old buildings such as Cedar Court (built 1986).
3. **SNDA.** Split subordination, non-disturbance and attornment into three promises. Show what each does on foreclosure.

### Correct

1. **Learning objectives.** "Review" (current O2) and "Select" are weak observable verbs for the target depth. Replace with the verbs above.
2. **Assessment format.** The quiz sets are 12 items each, with rationale for the right answer only. QAS needs separate review questions with feedback on every option, and exam forms with no repeats (Std 5.01.2, 6.01.2). Rebuild per section 6.
3. **WE7 rent roll versus RD-COM-01.** WE7 uses nine suites. RD-COM-01 lists 11 suites with 70% leased. The practice label is there, but the suite count is not reconciled. Ask the owner to add a suite-level rent roll to the Running Deals tab, or relabel as "9 occupied suites of 11" once confirmed. Do not invent suite data.
4. **NFIP date.** The lesson relies on authorization to 11 Dec 2026. That is 19 days after this blueprint. Re-check at build and rewrite T3, practice 5 and the job aid.
5. **Rule citation.** T1 says assignment of leases and UCC filings are "Standard; not a separate rule". CORE-CLS-05 does name them as trailing documents. Cite it.

### Cut or move

1. **State remedies table and the California one-action paragraph in T1.** They duplicate C10 T4-T5. Replace with one line: "CORE-DOC-04 requires a state check; C10 teaches it." Saves about 300 words and removes a second copy of [VERIFY] tags that would drift.

## 5. Sequence

| Chunk | Objective | Teach | Worked example (running deal) | Practice |
| --- | --- | --- | --- | --- |
| Hook | — | Birchwood fire: why documents decide recovery (keep current hook) | — | — |
| T1 Document architecture (2,600 words) | O1 | Note, mortgage or deed of trust, loan agreement, guaranties, ALR, UCC; governing law | **WE1 Filing offices.** Harborline Holdings LLC is an Ohio LLC: file with the Ohio Secretary of State. Cedar Court Partners LLC: North Carolina. Birchwood Plaza LLC: Indiana (UCC 9-307(e)). **WE2 Lapse.** A filing made at the Maple Run closing, 15 Jan 2027, lapses 15 Jan 2032. Continuation is allowed only from 15 Jul 2031 (UCC 9-515(a), (d)) | P1: match 6 documents to their job and governing law |
| T2 Recourse and carve-outs (3,200) | O2 | Recourse grid; carve-out triggers; springing recourse; *Cherryland*; ORC 1319.08 | **WE3 Birchwood** (keep current WE1): $2,860,000 ÷ min($4,400,000, $4,500,000) = 65.0%, above 60%: full guarantee burning off (COM-BR-07; F-CORE-14). **WE4 what-if:** a $2,640,000 advance gives 60.0%, so non-recourse with carve-outs. If the property sat in Ohio, a solvency-covenant trigger would be void (ORC 1319.08). **WE5 Maple Run** (keep): full recourse plus completion guaranty | P2: Cedar Court $5,140,000: non-recourse with carve-outs, completion guaranty for $800,000 capex, environmental indemnity (MF-BR-12; CORE-DOC-02, -03) |
| T3 Title, survey, liens (3,600) | O3 | Schedules A, B-I, B-II; policy amount; draw endorsements; survey; mechanics' liens | **WE6 Maple Run title** (keep current WE3 practice data). Policy $340,000, the full commitment (CORE-CLS-06). **WE7 Cedar Court lien agent:** $800,000 capex exceeds $30,000, so confirm the lien-agent designation before the first draw (G.S. 44A-11.1). Date-down at each draw (CORE-SVC-05) | P3: a 6-item Schedule B-II for Cedar Court (labelled practice data): accept, clear or insure over |
| T4 Property insurance (3,400) | O4 | ITV; coinsurance as the cost of a barred clause; mortgagee clause; builder's risk; loss of rents | **WE8 Birchwood cover test** (keep; what-if values): ITV $4,400,000 ÷ $5,200,000 = 84.6%. Required 90% × $5,200,000 = $4,680,000. Ratio 0.940171. Pay 0.940171 × $500,000 − $25,000 = $445,085.47 (F-CORE-34, -37). **WE9 Loss of rents:** Birchwood $420,000 + $84,000 = $504,000; Maple Run 6 × $3,200 = $19,200 | P4: Cedar Court RC $6,500,000, limit $6,000,000, 90% clause, $400,000 loss, $25,000 deductible: ITV 92.3%, pays $375,000.00; rent loss $720,000 |
| T5 Flood and terrorism (1,600) | O4 | Flood determination; Zone A or V; NFIP caps and lapse; excess cover; terrorism context | **WE10 Cedar Court flood** (labelled practice data): a Zone AE building needs $1,300,000; NFIP gives $500,000; add $800,000 excess (CORE-INS-03; 44 CFR 61.6) | P5 (what-if): Birchwood in Zone AE, RC $5,200,000, loan $3,520,000: required cover = lesser = $3,520,000; NFIP $500,000; excess $3,020,000 |
| T6 Escrows and reserves (1,500) | O5 | F-CORE-35; cushion; MF reserves; early-due bills | **WE11 Maple Run refinance:** ($6,240 + $1,920) ÷ 12 = $680.00; cushion $1,360.00 (F-CORE-35; CORE-INS-02) | P6: Cedar Court: ($74,000 + $38,000) ÷ 12 = $9,333.33; reserves 50 × $300 ÷ 12 = $1,250.00; closing escrow $18,666.67 + $50,000 = $68,666.67 (MF-BR-13) |
| T7 Environmental (2,600) | O6 | AAI windows; RECs and Phase II; CERCLA secured creditor; PFAS scope; RES gap | **WE12 Birchwood Phase I age** (keep what-if): 15 Mar to 20 Nov 2026 = 250 days, over 180: update before closing (40 CFR 312.20(b)). **WE13 Birchwood former dry cleaner:** cleared in the Phase I (RD-COM-01). Decide what lender conduct after a default would risk "participation in management" (42 USC 9601(20)(F)) | P7: Cedar Court Phase I with a what-if REC: Phase II needed? Which document shifts cost to the sponsor (CORE-DOC-03)? |
| T8 Tenant documents and cash management (2,500) | O7 | Estoppel; SNDA's three promises; lockbox types; sweep DSCR | **WE14 Birchwood estoppels and SNDAs** (keep WE7 table, after the suite count is reconciled). **WE15 Sweep test** (keep): $230,000 ÷ $218,790 = 1.05x, under 1.10x: sweep (COM-GEN-12) | P8: a tenant at 10.0% ranked sixth: SNDA only (COM-GEN-09) |
| Wrap-up | All | Self-check, What to look up yourself, How to check it | — | — |

Interactive elements (Std 4.05.3): a Schedule B decision drill (P3), an ITV and coinsurance calculator tied to F-CORE-34 and -37, and a rent-roll sorter for COM-GEN-09. All work by keyboard (LD-09).

## 6. Assessment plan

Sized on the projected 4.2 credits (section 7). Multiple choice only, four options, one best answer, feedback on every option.

| Objective | Review questions | Exam Set A | Exam Set B | Critical items per form |
| --- | --- | --- | --- | --- |
| O1 Documents | 2 | 3 | 3 | 0 |
| O2 Recourse | 3 | 4 | 4 | 1 (recourse LTV on lower of price and value) |
| O3 Title | 3 | 4 | 4 | 1 (lien that could prime ours) |
| O4 Insurance | 3 | 5 | 5 | 1 (ITV or coinsurance breach of CORE-INS-01) |
| O5 Escrows | 2 | 3 | 3 | 0 |
| O6 Environmental | 2 | 4 | 4 | 0 |
| O7 Tenant documents | 2 | 3 | 3 | 0 |
| **Total** | **17** | **26** | **26** | 3 |

| Check | Minimum (Std) | Plan | Met |
| --- | --- | --- | --- |
| Review items at 4.2 credits | 3 × 4 + 0 = 12 (5.01.2.1) | 17 (build rule: 4 per credit, rounded up) | Yes |
| Exam items at 4.2 credits | 5 × 4 + 2 = 22 (6.01.2) | 26 per form (6 per credit, rounded up) | Yes |
| At least 2 exam items per objective | 14 | Lowest is 3 | Yes |
| Objectives covered by exam | 75% | 100% | Yes |
| No review item repeated on an exam | Required | Separate banks | To build |
| Pass mark | 70% minimum | 80%, and every critical item correct | Yes |

Critical items follow the Course Bible definition: a breach of a policy limit without an approved exception.

## 7. Hour estimate

**Counted words (21,000):** T1 2,600; T2 3,200; T3 3,600; T4 3,400; T5 1,600; T6 1,500; T7 2,600; T8 2,500. Excluded per Std 7.02: hook, objectives, instructions, glossary, job aid (appendix) and OJT brief. Question stems and feedback are counted as questions, not words, to avoid double counting.

**Questions counted:** 17 review + 26 exam (one form; the learner sits one) + 12 scored practice exercises = 55. Video: 0 counted minutes (no non-narration video planned).

**Calculation (Std 7.02.5-.7):**

1. Words: 21,000 ÷ 180 = 116.667 minutes.
2. Questions: 55 × 1.85 = 101.750 minutes.
3. Total: 116.667 + 101.750 + 0 = 218.417 minutes.
4. Credits: 218.417 ÷ 50 = 4.368, rounded down to fifths = **4.2 credits**.

Check the sizing loop: at 4.2 credits the build rule gives 17 review and 26 exam items, the counts used above. It fits LD-03's 4-hour cap (218 minutes). Recompute after the lesson is final. Exceeding about 23,500 words would push past 4.4 credits; the 4-hour cap then forces a split (for example C9a documents and title, C9b insurance, environmental and tenants).

## 8. Prerequisites and overlaps

| Direction | Module | What |
| --- | --- | --- |
| Prerequisite | C2 | Loan life cycle, the credit box, business-purpose certification (CORE-BP-01) |
| Prerequisite | C3 | Percent and ratio math for ITV and escrows |
| Prerequisite | C5 | Replacement cost and the cost approach; F-CORE-14 lower of price and value |
| Prerequisite | C8 | Commitment, holdback and future funding terms |
| Takes further | C10 | State anti-deficiency, one-action and the CA guarantor waivers (CORE-DOC-04, -05). C9 points to C10 only |
| Takes further | C11 | Condition clearing, CPL, recording acts and trailing documents (CORE-CLS-02 to -05) |
| Takes further | C12 | Draw administration (CORE-SVC-05), state mechanics' lien priority law, insurance renewals and casualty claims (S7), sweeps in operation |
| Owned here | C2, C6 | Guaranty and recourse law, springing recourse, *Cherryland*, suretyship waivers. C2 and C6 point here |
| Takes further | C13 | Receivers (CORE-DEF-05), deed in lieu (CORE-DEF-04), REO and post-foreclosure CERCLA conduct (CORE-DEF-06) |
| Takes further | R3, M5, CM4 | Construction budgets, lien law in depth, cash management structuring |

## Self-check

| Requirement | Status |
| --- | --- |
| Eight parts in role-file order | Met |
| 4-8 objectives; at least half Apply or above | Met: 7; 6 at Apply or above |
| Each objective mapped to needs-analysis tasks | Met |
| No invented limits | Met. Three gaps flagged for the owner: survey, terrorism cover, RES environmental screen |
| Legal statements tagged with source and date | Met. Items not opened are marked "not opened" |
| Running-deal numbers match `data/running-deals/` | Met. What-if and practice values are labelled |

## What to look up yourself

1. ORC 1311.04 (Ohio notice of commencement) and IC 32-28-3 (Indiana mechanic's liens). The Ohio site refused connection on 22 Nov 2026.
2. The official text of G.S. 44A-11.1 on ncleg.gov (403 during research).
3. *Carpenter v. Longan* and the *Cherryland* opinions, from a court or official reporter site.
4. Whether Congress extended the NFIP past 11 Dec 2026, and TRIA past 31 Dec 2027.
5. 40 CFR 312.11 on ASTM E1527-21, and the D.C. Circuit opinion in No. 24-1193.
6. The standard mortgage clause wording in the ISO or carrier policy form used for the running deals.

## How to check it

1. Re-run the credit math: `=21000/180 + 55*1.85` gives 218.42; divide by 50 to get 4.37; round down to 4.2.
2. `=MIN(1,4400000/(0.9*5200000))*500000-25000` gives 445,085.47.
3. Date check: `=DATE(2026,11,20)-DATE(2026,3,15)` gives 250.
4. Open each [VERIFY] source and confirm the cited subsection still reads as summarized.
