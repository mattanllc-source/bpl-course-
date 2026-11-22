# C7 blueprint: KYC, BSA/AML, OFAC and fraud red flags

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Module | C7, BPL-CORE (QAS Self Study program in an integrated series) |
| Provider | BPL Academy |
| Knowledge level | Intermediate (qas-spec.md) |
| Field of study | Specialized Knowledge |
| Current lesson | `modules/core/c07/lesson.md`, v0.2, exported 22 Nov 2026 (`docs/SNAPSHOT.md`: current) |
| Blueprint status | v0 draft for owner review, 22 Nov 2026. Changes no lesson, policy or deal file |
| Needs analysis | `docs/curriculum/needs-analysis.md` (task IDs below) |

## 1. Module purpose

C7 builds the skill of keeping criminal money, sanctioned parties and fraud out of a loan file, and of acting correctly when a red flag appears. It follows C1's regulatory map and C6's ownership analysis, and it sets the controls that C11 (funding) and C12 (servicing) rely on.

## 2. Learning objectives

By the end of C7, you will be able to:

| # | Objective (one verb, LD-01) | Bloom | Needs-analysis tasks |
| --- | --- | --- | --- |
| O1 | **Classify** a loan's federal AML, sanctions and beneficial-ownership duties by lender type and collateral (31 CFR 1010.100, 1029.210, 1029.320; CORE-KYC-04). | 2 Understand | U4, K2 |
| O2 | **Apply** OFAC screening, the 50 Percent Rule and OFAC reporting deadlines to an ownership chart built down to natural persons, trusts included (CORE-KYC-01, -02, -06, -08, -09). | 3 Apply | U4, O3 |
| O3 | **Diagnose** fraud red flags in a loan file and assign each one its clearing path and approver (CORE-KYC-07; CORE-BP-02; D-CORE-24). | 4 Analyze | U4, O1, O3, U2 |
| O4 | **Execute** the first-hour response to an attempted or completed wire diversion: stop, recall request, law-enforcement report and SAR decision (CORE-KYC-05, -07; D-CORE-25). | 3 Apply | F3, U4 |
| O5 | **Calculate** SAR deadlines and apply the filing, confidentiality and record rules to a red-flag case (CORE-KYC-05; 31 CFR 1029.320). | 3 Apply | U4 |
| O6 | **Evaluate** a small lender's AML and sanctions program against the BSA program pillars and OFAC's compliance framework, and recommend fixes (CORE-KYC-04; CORE-EXC-03). | 5 Evaluate | K2, U4 |

**Bloom mix:** 1 Understand, 3 Apply, 1 Analyze, 1 Evaluate. 5 of 6 are Apply or above.

**Conflict to resolve (owner).** LD-02 limits core modules to levels 2-3. O3 and O6 go higher, per the depth decision. Update LD-02 in the live Course Bible.

## 3. Content map

| Obj | Concepts | Real rules (primary source) | Model policy |
| --- | --- | --- | --- |
| O1 | BSA purpose; "loan or finance company"; residential mortgage loan turns on 1-4 unit collateral, not purpose; program pillars; CDD rule scope; CTA reporting status; AML/CFT priorities | An AML program needs, at a minimum, policies and controls, "the designation of a compliance officer", "an ongoing employee training program" and "an independent audit function to test programs" [VERIFY: 31 U.S.C. 5318(h)(1), Cornell LII; checked 22 Nov 2026]. Programs must be risk-based [VERIFY: 31 U.S.C. 5318(h)(2)(B); checked 22 Nov 2026]. Treasury publishes AML/CFT priorities, updated at least every four years [VERIFY: 31 U.S.C. 5318(h)(4)(A); checked 22 Nov 2026]. The first priorities list (30 Jun 2021) has eight items, including fraud and cybercrime [VERIFY: FinCEN, AML/CFT Priorities, 30 Jun 2021; checked 22 Nov 2026 via fincen.gov search listing; open the PDF]. Lender coverage and the 1-4 unit test stay as the lesson tags them (31 CFR 1010.100(lll), 1029.210) | CORE-KYC-04 |
| O2 | SDN List; aggregate blocked ownership; control vs ownership; blocked vs rejected; strict liability; 10-year records and why | OFAC records rule raised retention from 5 to 10 years, effective 21 Mar 2025 [VERIFY: 90 FR (21 Mar 2025), FR Doc. 2025-04864, federalregister.gov; checked 22 Nov 2026]. It tracks the 21st Century Peace through Strength Act (24 Apr 2024), sec. 3111, which set a 10-year limitations period for IEEPA and TWEA violations [VERIFY: interim final rule, 89 FR 74832 (13 Sep 2024); checked 22 Nov 2026 via the Federal Register listing]. 50 Percent Rule and reporting deadlines stay as the lesson tags them (OFAC FAQs 398-401; 31 CFR 501.601, 501.603, 501.604) | CORE-KYC-01, -02, -06, -08, -09; CORE-EXC-03 |
| O3 | Red-flag families; occupancy, straw buyer, illegal flip, third-party funds, altered documents, appraisal pressure, identity theft, synthetic identity, deepfake ID, seller impersonation; "no single red flag" is proof; criminal exposure for borrowers | False statements to "a mortgage lending business" carry up to $1,000,000 and 30 years [VERIFY: 18 U.S.C. 1014, Cornell LII; checked 22 Nov 2026]. A mortgage lending business is any organization that "finances or refinances any debt secured by an interest in real estate", private mortgage companies included [VERIFY: 18 U.S.C. 27; checked 22 Nov 2026]. Section 1014 reaches false statements, not true-but-misleading ones [VERIFY: *Thompson v. United States*, No. 23-1095 (21 Mar 2025), supremecourt.gov listing; checked 22 Nov 2026]. Wire fraud needs no intent to cause economic loss [VERIFY: *Kousisis v. United States*, No. 23-909 (22 May 2025); checked 22 Nov 2026]. FinCEN advisories: FIN-2012-A009 (mortgage fraud, as tagged in the lesson); FIN-2024-Alert004 (deepfake media, 13 Nov 2024) | CORE-KYC-07; CORE-BP-01, -02; CORE-BOR-09; D-CORE-24 |
| O4 | Business email compromise as a typology; recall and kill chain; reporting to IC3; SAR link. (Pre-release controls, callback, dual control, CPL and the name-number rule: C11 owns them; coverage review, 22 Nov 2026) | C7 cites UCC 4A-207(b)(1) once, as the reason recovery is hard; C11 teaches it [VERIFY: UCC 4A-207(b)(1), Cornell LII model text; check each state's enactment; checked 22 Nov 2026]. Title and closing parties are the most impersonated in real estate BEC (FinCEN Financial Trend Analysis, 30 Mar 2023, 2020-21 data). Email-compromise typologies: FinCEN Advisory FIN-2019-A005 (16 Jul 2019). Data series: FBI IC3 annual report, real estate and BEC categories (2025 report) | CORE-KYC-07; CORE-CLS-02, -03; D-CORE-25 |
| O5 | $5,000 threshold incl. attempts; 30/60-day clock; no tipping off; safe harbor; 5-year records; voluntary 314(b) sharing | No tipping off a person involved that a transaction was reported [VERIFY: 31 U.S.C. 5318(g)(2)(A)(i); checked 22 Nov 2026]. Safe harbor: filers "shall not be liable to any person under any law or regulation of the United States" for the disclosure [VERIFY: 31 U.S.C. 5318(g)(3)(A); checked 22 Nov 2026]. Institutions with an AML program may share information on suspected money laundering after a notice to FinCEN that lasts one year [VERIFY: 31 CFR 1010.540(b)(2)-(3), (5); checked 22 Nov 2026]. Timing and threshold stay as the lesson tags them (31 CFR 1029.320) | CORE-KYC-05 |
| O6 | Program design; risk assessment; independent testing; training; broker oversight; sanctions compliance components; root causes of violations | OFAC's *A Framework for OFAC Compliance Commitments* (2 May 2019): management commitment, risk assessment, internal controls, testing and auditing, training [VERIFY: ofac.treasury.gov framework PDF; checked 22 Nov 2026 via OFAC listing only, the PDF did not render: open it]. BSA pillars from 31 U.S.C. 5318(h)(1) | CORE-KYC-04; CORE-EXC-03; CORE-AUTH-04 (independent re-test model) |

**Policy and library gaps (stop and ask).**

| Gap | Owner action |
| --- | --- |
| P-C7-1: the two C7 calculations (aggregate blocked ownership; deadline dates) have no formula. F-CORE-38 and -39 are reserved "for the C7 proposals" (Formula Library, F-CORE-40 note) | Add F-CORE-38 and -39 to the Library tab, then `npm run fixtures` |
| P-C7-2: no rule on what to do after a diverted wire (bank recall, IC3 report, who calls) | Add a CORE-KYC or CORE-CLS rule, or teach as market practice with no scored step order |
| P-C7-3: no rule on identity-document checks beyond "government ID" (CORE-KYC-02) | Decide whether to add liveness or database checks; until then teach as best practice |

## 4. Depth targets

### 4.1 Add

1. **Federal fraud statutes and what they mean for a lender (O3).** 18 U.S.C. 1014 and 27 make a private lender a "mortgage lending business". *Thompson* (2025) narrows 1014 to false statements. *Kousisis* (2025) removes any economic-loss element from wire fraud. Teach why precise, written borrower certifications (CORE-BP-01) matter in a prosecution.
2. **Wire-fraud typology and recovery (O4).** C7 owns what happens after a diversion; C11 owns the pre-release controls and the UCC 4A-207 name-number rule (coverage review, 22 Nov 2026). FinCEN's 2023 real estate BEC analysis (title parties most impersonated; money mules; nearly 88% of first transfers to US depository institutions). IC3 real estate losses as a data series. The first-hour recall sequence is blocked on P-C7-2 for scoring.
3. **SAR safe harbor and 314(b) sharing (O5).** 31 U.S.C. 5318(g)(3) and 31 CFR 1010.540. Teach when a lender may talk to the receiving bank about a fraud.
4. **Program evaluation (O6).** The four BSA pillars, the 2021 AML/CFT priorities and the OFAC five-component framework. A short case: rate a fictional lender's program and write three fixes.
5. **Modern identity fraud (O3).** Synthetic identities and deepfake ID images (FIN-2024-Alert004). Seller impersonation on vacant or free-and-clear property.
6. **Broker-fed files and referral sources (O3, task O1).** The needs analysis lists straw buyers and broker-fed files as fraud risks in origination. Teach broker due diligence and the red flags of a broker-sourced file (one broker, many files, the same appraiser). No policy limit exists for broker approval; teach it as market practice and list it for the owner (coverage review, open item 6).

### 4.2 Deepen

1. **Why OFAC records last 10 years (O2).** Link the 2025 records rule to the 2024 limitations change.
2. **Blocked interest in a borrower (O2).** Practice item 2 (Birchwood what-if) ends at "decline". Add the blocked-property duty: a blocked entity's interest is blocked property, reported under 31 CFR 501.603 [VERIFY: 31 CFR 501.603(b); counsel to confirm how it applies to a declined loan; checked 22 Nov 2026].
3. **Red flags as a diagnosis (O3).** Move from "identify" to "diagnose": evidence for, evidence against, clearing path, approver. Pair each flag with the document that clears it.
4. **Strict liability and penalties (O2).** Explain that OFAC liability does not need intent, using OFAC enforcement releases as case studies.

### 4.3 Correct

1. Objective 4 uses "Identify" (Bloom 1) for a task that needs analysis. Replace with O3 ("Diagnose").
2. The self-review says the two calculations "have no library formula yet". The Library reserves F-CORE-38 and -39 for them. Say so and cite the reserved IDs once added (P-C7-1).
3. The alignment matrix maps O1 to quiz items 1 and 10 in Set A but only item 1 in Set B. Rebuild with the exam plan in section 6.
4. Quiz structure: two 10-item sets do not meet QAS minimums at the projected credits. Rebuild (section 6).
5. Re-verify the residential real estate rule history (effective 1 Mar 2026; vacated 19 Mar 2026; appeal). The lesson's tag cites fincen.gov; this research did not reopen it.
6. Course Bible §3 lists C1 as the only prerequisite. The ownership chart uses C6's look-through method and CORE-BOR-03. Make it C1 and C6.

### 4.4 Cut

1. Nothing in C7's own scope. Take in the beneficial-ownership bullets cut from C6, as one table row (already in T1). Do not repeat the CTA history twice.

## 5. Sequence

| # | Chunk (min) | Obj | Worked example (deal numbers as in `data/running-deals/`) | Practice |
| --- | --- | --- | --- | --- |
| 0 | Hook (5) | all | RD-RES-01 what-if: the fake title-company email for the $240,000 initial advance | n/a |
| T1 | Which rules reach us (15) | O1 | Maple Run (1 house), Cedar Court (50 units), Birchwood Plaza (retail): only Maple Run is likely a residential mortgage loan; CORE-KYC-04 covers all three | Classify four what-if collateral types |
| T2 | Chart and screen (20) | O2 | RD-MF-01: Marcus 60% and Priya 40%; screen the LLC and both; screen the passive-investor holding LLC's 20% owners as a source-of-funds check. What-if: two SDNs at 30% and 25% = 55%, blocked | RD-COM-01: Leo's 25% held through an LLC 60% owned by an SDN; Birchwood not blocked, blocked interest present, decline and report |
| T3 | Fraud red flags and the law (25) | O3 | RD-RES-01 what-if: prior sale at $210,000 seven months before the $300,000 contract: 1 − $210,000 ÷ $300,000 = 30.0%, so the file stops (CORE-KYC-07). Then 18 U.S.C. 1014 and *Thompson* | Eight-flag file review for RD-COM-01 what-ifs, each with clearing path and approver |
| T4 | Diversion response (20) | O4 | RD-RES-01 what-if: the $240,000 initial advance went to a spoofed title account; the first hour, step by step: stop further wires, recall request, IC3 report, BSA officer and SAR clock (CORE-KYC-05, -07; D-CORE-25). One line on why UCC 4A-207 makes recall hard (C11 teaches the rule) | Step-order exercise for a diversion found two hours after release |
| T5 | SAR decision and timing (15) | O5 | RD-RES-01 what-if: first detection Fri 20 Nov 2026; 30 days = Sun 20 Dec 2026, plan to file Fri 18 Dec; no suspect: 19 Jan 2027 | RD-COM-01 what-if: first detection Mon 5 Oct 2026: 4 Nov 2026; outer 4 Dec 2026 |
| T6 | Program review (15) | O6 | Map CORE-KYC-04 to the four pillars and OFAC's five components | Rate a fictional lender's program; three fixes |
| X | Final exam (separate) | all | n/a | Form A or B |
| OJT | Extra (30) | all | Current Cedar Court checklist and escalation note | n/a |

## 6. Assessment plan

Sized from 3.6 projected credits (section 7) and `docs/accreditation/qas-spec.md`. Multiple choice only, four options, feedback on every option, no review item reused on the exam.

| Obj | Review questions | Exam Form A | Exam Form B | Critical items (per form) |
| --- | --- | --- | --- | --- |
| O1 | 3 | 3 | 3 | 0 |
| O2 | 3 | 4 | 4 | 1 (missed OFAC hit, a critical credit error per Course Bible §3) |
| O3 | 3 | 5 | 5 | 1 (missed occupancy red flag) |
| O4 | 2 | 4 | 4 | 1 (wire change) |
| O5 | 2 | 3 | 3 | 1 (no tipping off) |
| O6 | 2 | 3 | 3 | 0 |
| **Total** | **15** | **22** | **22** | 4 |

- **Minimums at 3.6 credits:** review 3 × 3 + 2 = 11; exam 5 × 3 + 4 = 19. Plan meets them.
- **Build rule:** review 4 × 3.6 = 14.4, rounded up to 15. Exam 6 × 3.6 = 21.6, rounded up to 22 per form; at least 2 per objective. Met.
- **Coverage:** all 6 objectives examined. Pass mark 80% and all critical items correct.

## 7. Hour estimate

| Input | Projected |
| --- | --- |
| Words counted (excludes intro, instructions, glossary, job aid appendix) | 18,000 (current lesson: 5,298 words in total) |
| Review questions | 15 |
| Practice exercises | 10 |
| Exam items (one form) | 22 |
| Audio or video (not narration) | 0 minutes |

**Credit calculation (Std 7.02.5-.7):**

1. Words: 18,000 ÷ 180 = 100.000 minutes.
2. Questions: (15 + 10 + 22) × 1.85 = 47 × 1.85 = 86.950 minutes.
3. Media: 0.000 minutes.
4. Total: 186.950 minutes ÷ 50 = 3.739, rounded down to **3.6 credits**.

About 3.1 hours, against 2 hours in Course Bible §3. Under the LD-03 cap. The OJT task (30 minutes) earns no credit.

## 8. Prerequisites and overlaps

**Prerequisites.** C1 (regulatory map, business purpose, CORE-BP rules) and C6 (look-through ownership, CORE-BOR-03). Advance preparation: none.

| Topic | C7 does | Left to |
| --- | --- | --- |
| Guarantor identity and track record | Screens and charts the people | C6 found them and tested their credit |
| Appraisal fraud | Flags inflated value as a red flag | C5: appraisal review and valuation governance (K5, owned by C5) |
| Wire release | First-hour response after a diversion; BEC typology | C11 owns pre-release controls: callback, dual control, CPL match, UCC 4A-207 (CORE-CLS-02, -03) |
| Ongoing monitoring | Screening before term sheet and funding | C12: re-screening during servicing; C13: REO buyers |
| Fair lending | None | C1 (ECOA and the Fair Housing Act) |

## Self-check

| Request item | Status |
| --- | --- |
| 8-part format | Done |
| 6 objectives, Bloom-tagged, 5 of 6 Apply+ | Done |
| Objectives mapped to tasks | Done |
| Primary sources opened | Done on Cornell LII and Federal Register listings; OFAC framework and FinCEN priorities PDFs did not render, tagged |
| Add, deepen, correct, cut | Done |
| QAS sizing and credit formula | Done |
| No invented policy numbers | Done; three gaps listed |

## What to look up yourself

1. Open OFAC's *Framework for OFAC Compliance Commitments* PDF and confirm the five components.
2. Open FinCEN's AML/CFT Priorities PDF. Check whether a four-year update replaced the 2021 list.
3. Read the FBI IC3 2025 annual report tables for BEC and real estate totals. The PDF did not render during research.
4. Check whether Ohio, North Carolina and Indiana enacted UCC 4A-207 without change.

## How to check it

1. `=18000/180+(15+10+22)*1.85` should give 186.95; divided by 50 gives 3.739.
2. `=DATE(2026,11,20)+30` should show 20 Dec 2026; `+60` should show 19 Jan 2027.
3. Confirm each `[VERIFY]` quote on its source page.
