# C7: KYC, BSA/AML, OFAC and fraud red flags

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C7-lesson-v0, C7-quiz-v0 (sets A and B), C7-ojt-v0, C7-jobaid-v0 |
| Hours | 2 (120 minutes) plus a 30-minute OJT task |
| Prerequisite | C1 |
| Bloom's levels | 2, 3 and 4 (LD-02) |
| Formulas | None in the library. Two calculations are taught: aggregate blocked ownership (OFAC 50 Percent Rule) and calendar deadlines |
| Rules | CORE-KYC-01 to -09; CORE-BP-02; CORE-BOR-03, -09, -19; CORE-EXC-03 (no exceptions to KYC or OFAC rules) |
| Running deals | Worked examples: RD-RES-01 Maple Run and RD-MF-01 Cedar Court. Practice: RD-COM-01 Birchwood Plaza (LD-08). Red-flag scenarios are marked "what-if" and are not part of the deals |
| Status | v0. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0, 20 Nov 2026: first draft. CORE-KYC-04 to -07 added to the Model Credit Policy the same day, on the learner's decision |

## Timing plan

| Segment (LD-04) | Minutes |
| --- | --- |
| 1 Hook | 5 |
| 2 Objectives | 5 |
| 3 Teach chunks T1-T5, with worked examples | 50 |
| 5 Practice | 25 |
| 6 Quiz | 20 |
| 8 Job aid walk-through and wrap-up | 15 |
| Total | 120 |
| 7 OJT task (extra, per LD-03) | 30 |

## 1. Hook (5 minutes)

It is the day before Maple Run funds. An email that looks like it comes from the title company says its bank changed. It gives new wiring instructions for the $240,000 initial advance.

If you send it, the money is likely gone. If you spot it, you have a federal reporting decision to make within 30 days. By the end of this module you will know what to do in the next hour, and why.

## 2. Objectives

By the end of C7, you will be able to:

1. **Explain** which anti-money-laundering rules apply to our loans, and why collateral type matters (CORE-KYC-04).
2. **Apply** OFAC screening: who, when, the 50 Percent Rule and record keeping (CORE-KYC-01, -06).
3. **Build** an ownership chart that names every 20% owner and the control person (CORE-KYC-02, CORE-BOR-03).
4. **Identify** fraud red flags in a file and stop it correctly (CORE-KYC-07, CORE-BP-02).
5. **Apply** the escalation and SAR rules: timing, threshold and confidentiality (CORE-KYC-05).

## 3. Teach

### T1. Which rules apply to us (Objective 1, 10 minutes)

We are a non-bank lender. Many people assume the Bank Secrecy Act therefore skips us. For part of our book, that is wrong.

FinCEN treats non-bank residential mortgage lenders as "loan or finance companies." Its definition of a residential mortgage loan depends on the collateral: a 1-4 unit residential structure, or land for one. It has no personal-use limit [VERIFY: 31 CFR 1010.100(lll), Cornell LII, checked 20 Nov 2026]. So a business-purpose loan on a house can still be covered. Covered lenders need a written AML program with a compliance officer, training and independent testing (31 CFR 1029.210). They must also file SARs (31 CFR 1029.320).

| Rule set | Applies to us? | Course rule |
| --- | --- | --- |
| AML program and SAR filing (31 CFR 1029) | Likely yes for 1-4 unit loans; counsel to confirm | CORE-KYC-04 applies one program to every loan |
| OFAC sanctions | Yes, to every US person | CORE-KYC-01, -06 |
| Bank CDD beneficial-ownership rule (31 CFR 1010.230) | Written for banks and other covered institutions; we follow it by policy | CORE-KYC-02 |
| Corporate Transparency Act ownership reports | US companies permanently exempt from 14 Aug 2026 [VERIFY: FinCEN BOI page, fincen.gov/boi; checked 22 Nov 2026] | None: our own chart is the record |
| FinCEN residential real estate report (non-financed transfers) | Vacated by the US District Court for the Eastern District of Texas on 19 Mar 2026; FinCEN has appealed. Covers non-financed deals only [VERIFY: FinCEN RRE page, fincen.gov/resources/rre; checked 22 Nov 2026] | None |

**Worked example 1: which loans fall under 31 CFR 1029?**

1. **Rule.** 31 CFR 1010.100(lll): a residential mortgage loan is secured by a 1-4 unit residential structure.
2. **Inputs.** Maple Run: one single-family house. Cedar Court: 50 units. Birchwood Plaza: a retail center.
3. **Apply.** Maple Run is 1-4 units, so it is likely a covered loan. Cedar Court and Birchwood are not residential mortgage loans under this definition.
4. **Result.** Federal law likely reaches Maple Run only. CORE-KYC-04 applies the same program to all three, so staff run one process, not two.

### T2. OFAC screening and the 50 Percent Rule (Objective 2, 10 minutes)

CORE-KYC-01 screens the borrower, every guarantor and every 20% owner. Screening happens before the term sheet and again before funding. An unresolved match is a decline, and no exception is allowed (CORE-EXC-03).

**The 50 Percent Rule.** An entity owned 50% or more, directly or indirectly, in aggregate by blocked persons is itself blocked. That is true even if it is not on the list. Stakes held by different blocked persons are added together. Control without ownership does not trigger the rule [VERIFY: OFAC FAQs 398-401, ofac.treasury.gov, checked 20 Nov 2026].

**Records and reports (CORE-KYC-06).** Keep screening records for 10 years, the period OFAC set in March 2025. Report a rejected transaction within 10 business days [VERIFY: 31 CFR 501.601 and 501.604, checked 20 Nov 2026]. Report blocked property within 10 business days of blocking it. Then report all blocked property held on 30 June by 30 September each year [VERIFY: 31 CFR 501.603(b), Cornell LII; checked 22 Nov 2026].

**Worked example 2: aggregate ownership (what-if)**

1. **Rule.** OFAC 50 Percent Rule: add all blocked owners' stakes.
2. **Inputs.** A borrower LLC is owned 30% by person A and 25% by person B. Both are on the SDN List. Nobody else is listed.
3. **Calculation.** 30% + 25% = 55%.
4. **Result.** 55% ≥ 50%, so the LLC is blocked. Neither stake alone reaches 50%; the aggregate does. Stop, do not fund, and escalate to the BSA officer the same day.

### T3. The ownership chart (Objective 3, 10 minutes)

You cannot screen people you have not found. CORE-KYC-02 names every 20% owner and one control person, with government ID. It is set lower than FinCEN's 25% bank prong to match the guaranty rule (CORE-BOR-03).

Build the chart down to people. Multiply percentages through each layer. Since 14 Aug 2026, US LLCs file no ownership report with FinCEN [VERIFY: FinCEN BOI page, fincen.gov/boi; checked 22 Nov 2026]. Our chart, with a signed ownership certification, is the only record.

**Trusts (CORE-KYC-08, -09; CORE-BOR-19).** A trust may own part of a borrower but never be the borrower. Chart each kind of owner this way.

| Owner type | Who goes on the chart | Rule |
| --- | --- | --- |
| Person | Each person with 20% or more, direct or indirect | CORE-KYC-02 |
| LLC or other entity | Multiply through each layer to the people; chart each 20% person | CORE-KYC-02 |
| Trust holding 20% or more | Every trustee; the grantor of a revocable trust; any beneficiary with a 20% look-through share | CORE-KYC-08 |

For a 20% trust owner, collect a certification of trust signed by every trustee. Also collect the trust agreement pages naming trustees, beneficiaries, revocability and powers. Get ID for each charted person, and screen the trust and each of them (CORE-KYC-09). The control person is always a natural person (CORE-KYC-08). For the guaranty, a revocable trust's grantor guarantees personally. An irrevocable trust guarantees, signed by every trustee (CORE-BOR-19).

**Worked example 3: Cedar Court's chart (RD-MF-01)**

1. **Rule.** CORE-KYC-02, CORE-KYC-01.
2. **Inputs.** Cedar Court Partners LLC: Marcus Hale 60% (managing member); Priya Nand 40%. Equity also comes from passive investors in a separate holding LLC.
3. **Apply.** 20% owners: Marcus and Priya. Control person: Marcus. Screen the borrower LLC, Marcus and Priya. The holding LLC is a source of funds, so ask who owns it and screen its 20% owners too (CORE-KYC-07: money from an unrelated third party).
4. **Result.** Three screens are required by rule. The holding LLC's owners are screened as a source-of-funds check, and the file says so.

### T4. Fraud red flags (Objective 4, 10 minutes)

CORE-KYC-07 lists red flags that stop the file until the BSA officer clears them. They follow FinCEN's mortgage fraud advisory and Fannie Mae's red-flag list.

| Red flag | What it can mean | First check |
| --- | --- | --- |
| Occupancy signs (CORE-BP-02) | A consumer loan dressed as business purpose | Where do the guarantors live? Utility and mail at the subject? |
| Straw or nominee owner | Someone hides behind another name | Who really controls the money and decisions? |
| Sale in the last 12 months at 20%+ below today's price or value | Illegal flipping or an inflated value | Chain of title; what work was done; arm's length? |
| Cash to close from an unrelated third party | Undisclosed lender or laundered money | Gift or investor documents; screen the source |
| Conflicting documents | Altered statements or IDs | Verify direct with the bank or issuer |
| Any change to wire instructions | Business email compromise | Call a number already in our file, never one in the request |

**Worked example 4: Maple Run red-flag check (RD-RES-01)**

1. **Rule.** CORE-KYC-07, CORE-BP-02.
2. **Inputs.** The house is vacant and will be leased to an unrelated tenant. Dana Reyes lives at a separate Columbus address she owns. Cash to close of $74,100 comes from Dana's own accounts, proved by two statements (CORE-BOR-13). Price $300,000.
3. **Apply.** No occupancy sign. Funds are the guarantor's own. Now suppose (what-if) title shows the seller bought it 7 months ago for $210,000: that is 1 − $210,000 ÷ $300,000 = 30.0% below today's price.
4. **Result.** As written, the file is clean. In the what-if, 30.0% ≥ 20% within 12 months, so the file stops. It can clear: a wholesaler buying a distressed house cheaply is common. The BSA officer clears it on evidence, such as the prior sale's condition and the appraiser's comment.

### T5. Escalation and SARs (Objective 5, 10 minutes)

CORE-KYC-05 sends every red flag to the BSA officer the same business day. Only the BSA officer decides whether to file a SAR. A SAR is required when $5,000 or more is involved and the activity looks suspicious [VERIFY: 31 CFR 1029.320, Cornell LII, checked 20 Nov 2026]. Attempted transactions count, so a failed wire fraud can still need one.

| Timing | Rule |
| --- | --- |
| Normal deadline | 30 calendar days after first detection |
| No suspect identified | Up to 30 more days to find one; never more than 60 days after first detection |
| Records | SAR and support kept 5 years from filing |
| Confidentiality | Never tell the borrower or anyone outside need-to-know that a SAR exists or is being considered |

**Worked example 5: the wire email (what-if, RD-RES-01)**

1. **Rule.** CORE-KYC-07 (wire change); CORE-KYC-05 (escalation and SAR).
2. **Inputs.** On Friday 20 Nov 2026, an email asks us to send the $240,000 advance to a new account. A call to the title company's number in our file confirms it sent no such email. The sender is unknown.
3. **Calculation.** First detection 20 Nov 2026. 30 calendar days = Sunday 20 Dec 2026, the deadline (CORE-KYC-05). It falls on a weekend, so plan to file by Friday 18 Dec. No suspect is known, so the outer limit is 20 Nov + 60 days = 19 Jan 2027.
4. **Result.** Do not wire to the new account. Fund only to the verified account. Report to the BSA officer that day. The attempt involved $240,000, over $5,000, so a SAR is likely. Tell Dana Reyes only that closing proceeds on verified instructions.

## 5. Practice (25 minutes)

Work alone, then check the model answer. The case is RD-COM-01 Birchwood Plaza. It differs from the worked examples in property type, the ownership layers and the dates (LD-05). Items 2-4 are what-ifs.

1. Birchwood Plaza LLC is owned by Dana Whitlow 75% (managing member) and Leo Marsh 25%. Who must be screened under CORE-KYC-01, and who is the control person?
2. What-if: Leo's 25% is held through Marsh Retail Holdings LLC. That LLC is 60% owned by a person on the SDN List. Is Marsh Retail Holdings blocked? Is Birchwood Plaza LLC blocked? What do you do?
3. What-if: $400,000 of the equity arrives by wire from "Lakeshore Capital Partners," which is not in the file. Which rule applies, and what do you ask for?
4. What-if: the BSA officer first detects suspicious activity on Monday 5 Oct 2026, with no suspect identified. Give the normal and the outer SAR deadline.
5. Does 31 CFR 1029 reach Birchwood? Does CORE-KYC-04 still apply?

**Model answer**

1. The LLC, Dana and Leo (both are 20%+ owners). Control person: Dana Whitlow, the managing member (CORE-KYC-02).
2. Marsh Retail Holdings is 60% owned by a blocked person, so it is blocked (50 Percent Rule). It owns 25% of Birchwood, so blocked persons own 25% in aggregate: Birchwood itself is not blocked. But a blocked entity holds an interest in our borrower. That is an unresolved match under CORE-KYC-01: stop, escalate the same day, and decline unless OFAC guidance or counsel clears it. No exception is allowed (CORE-EXC-03).
3. CORE-KYC-07: cash to close from an unrelated third party. Ask who Lakeshore is, its owners, and the documents behind the money (investment or loan agreement). Screen Lakeshore and its 20% owners. If it is a loan, it is undisclosed debt and changes the credit analysis.
4. 5 Oct 2026 + 30 days = Wednesday 4 Nov 2026. Outer limit 5 Oct + 60 days = Friday 4 Dec 2026.
5. No: a retail center is not 1-4 unit residential collateral. Yes: CORE-KYC-04 applies the program to every loan.

**Self-score.** One point per correct call or date, 8 in all. Seven or more: move on. Fewer: redo the matching worked example.

## 6. Quiz: C7-quiz-v0

Pass mark: 80% (8 of 10) and every item marked **critical** correct. Two retakes, each with the other set.

### Set A

1. (O1) Why can a business-purpose loan on a duplex fall under FinCEN's AML rules for non-bank lenders? A) All loans over $250,000 are covered B) The definition turns on 1-4 unit residential collateral, not purpose C) Duplexes are consumer loans D) It cannot
2. **(Critical, O2)** An LLC is owned 35% by person X and 20% by person Y, both on the SDN List. Is the LLC blocked? A) No, neither owns 50% B) Yes, 55% in aggregate C) Only if X controls it D) Only if listed by name
3. (O2) How long must OFAC screening records be kept (CORE-KYC-06)? A) 3 years B) 5 years C) 7 years D) 10 years
4. (O2) A transaction is rejected for sanctions reasons on Friday 20 Nov 2026. Report to OFAC by? A) 30 Nov 2026 B) 4 Dec 2026 C) 7 Dec 2026 D) 20 Dec 2026
5. (O3) Owners: A 50%; B 30%; the Lane Family Trust 20%. It is an irrevocable trust with trustee T and sole beneficiary C. Who goes on the chart for the trust's stake? A) The trust only B) C only C) Trustee T and beneficiary C D) No one: trusts are exempt
6. **(Critical, O4)** The day before funding, an email from the title company's address gives a new account number. What do you do? A) Wire as instructed B) Reply to the email to confirm C) Call the title company on the number already in our file, and escalate D) Ask the borrower to confirm
7. (O4) Title shows the seller bought the subject 8 months ago for $180,000. Our price is $240,000. Is CORE-KYC-07 triggered? A) No, 8 months is too long B) Yes: 25.0% below today's price within 12 months C) No: 33% is a gain, not a discount D) Only if the appraisal is lower
8. **(Critical, O5)** A guarantor asks why closing is delayed. A SAR is under review. What may you say? A) That a SAR is being prepared B) That compliance is reviewing a suspicious item C) That closing is waiting on standard checks, with no mention of a SAR D) Nothing; cancel the loan
9. (O5) First detection Monday 14 Sep 2026; no suspect identified. Outer SAR deadline? A) 14 Oct 2026 B) 13 Nov 2026 C) 28 Sep 2026 D) 14 Dec 2026
10. (O1) Which statement is true in November 2026? A) US LLCs still file ownership reports with FinCEN B) The FinCEN residential real estate report rule is in force C) Our ownership chart and certification are the only ownership record for a US LLC borrower D) OFAC only applies to banks

**Answer key, Set A**

1. B. 31 CFR 1010.100(lll) (T1).
2. B. Stakes add up: 35% + 20% = 55% (T2).
3. D. Ten years since March 2025.
4. C. 10 business days, skipping Thanksgiving on 26 Nov (31 CFR 501.604).
5. C. A 20% trust stake means charting every trustee (T) and each beneficiary with a 20% look-through share: C has 100% × 20% = 20% (CORE-KYC-08). A grantor is charted only for a revocable trust.
6. C. CORE-KYC-07 callback, then CORE-KYC-05 escalation.
7. B. 1 − $180,000 ÷ $240,000 = 25.0% ≥ 20%.
8. C. Confidentiality: never reveal a SAR (CORE-KYC-05).
9. B. 14 Sep + 60 days = 13 Nov 2026.
10. C.

### Set B

1. (O1) Which of our running deals is most likely a "residential mortgage loan" under 31 CFR 1010.100(lll)? A) Cedar Court (50 units) B) Birchwood Plaza (retail) C) Maple Run (one house) D) None
2. **(Critical, O2)** An LLC is 49% owned by an SDN and 51% by an unlisted person, but the SDN runs it day to day. Is it blocked under the 50 Percent Rule? A) Yes, the SDN controls it B) No: the rule is about ownership, and 49% is under 50%. Still escalate C) Yes, 49% rounds to 50% D) Only if the unlisted person is related
3. (O2) When does CORE-KYC-01 require screening? A) Only at application B) Before the term sheet and again before funding C) After funding D) Once a year
4. (O2) A rejected transaction occurs on Monday 14 Sep 2026. OFAC report due by? A) 24 Sep 2026 B) 28 Sep 2026 C) 14 Oct 2026 D) 21 Sep 2026
5. (O3) A holding LLC owns 40% of the borrower. Person D owns 60% of the holding LLC; person E owns 40%. Who is a 20% owner of the borrower? A) D only (24%) B) D and E C) E only D) Neither
6. **(Critical, O4)** Cash to close of $150,000 arrives from an LLC not named in the file. What applies? A) Nothing; money is money B) Stop, identify and screen the source, and check for undisclosed debt C) Accept if under $250,000 D) Refund it
7. (O4) A guarantor's mail goes to the subject house, and its utilities are in her name. Which flag? A) Straw owner B) Occupancy sign C) Wire change D) None
8. **(Critical, O5)** Who decides whether to file a SAR? A) The underwriter who found it B) The borrower's attorney C) The BSA officer D) Credit committee
9. (O5) First detection Monday 5 Oct 2026; the suspect is known. SAR deadline? A) 4 Nov 2026 B) 4 Dec 2026 C) 19 Oct 2026 D) 5 Nov 2026
10. (O5) A wire fraud attempt for $240,000 failed and no money left the lender. Can a SAR still be required? A) No, nothing was lost B) Yes: attempted transactions of $5,000 or more count C) Only over $1,000,000 D) Only if police are involved

**Answer key, Set B**

1. C.
2. B. Control alone does not trigger the rule (OFAC FAQ 398). Escalate anyway: a listed person runs the borrower.
3. B.
4. B. 10 business days.
5. A. D: 60% × 40% = 24%. E: 40% × 40% = 16%, under 20%.
6. B. CORE-KYC-07: cash to close from an unrelated third party stops the file.
7. B. CORE-BP-02: the guarantor appears to live at the subject.
8. C. CORE-KYC-05.
9. A. 30 calendar days.
10. B.

## 7. OJT task: C7-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Underwriter, then BSA officer (solo: play both) |
| Output | A KYC and red-flag checklist for Cedar Court, plus a one-paragraph escalation note for one what-if flag |
| Source | RD-MF-01 borrower and guarantor table; Model Credit Policy CORE-KYC-01 to -07 |
| Time allowed | 30 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All fictional. The escalation note must not be shared outside the file: practise SAR confidentiality |

**Rubric (meets standard = all four)**

1. Lists every party to screen, with the rule and the two screening points.
2. Shows an ownership chart down to people, with the control person.
3. Checks all six CORE-KYC-07 flags and records the evidence for each.
4. The escalation note gives facts, the date of first detection and both SAR deadlines, and never addresses the borrower.

**Model answer**

| Check | Finding | Rule |
| --- | --- | --- |
| Screen | Cedar Court Partners LLC, Marcus Hale, Priya Nand; before term sheet and before funding. Also the passive-investor holding LLC and its 20% owners, as a source-of-funds check | CORE-KYC-01, -07 |
| Chart | Marcus 60% (control person, managing member); Priya 40% | CORE-KYC-02 |
| Occupancy | 50-unit apartment building: CORE-BP-02 covers 1-4 units only. Not applicable | CORE-BP-02 |
| Straw owner | Both owners sign guaranties and show personal assets: none seen | CORE-KYC-07 |
| Prior sale | Ask title for 12-month history; none supplied in RD-MF-01 | CORE-KYC-07 |
| Source of funds | Equity of $2,240,066.67 partly from passive investors: obtain the holding LLC's documents and owner list | CORE-KYC-07 |
| Documents | Rent roll tied to bank deposits (MF-GEN-04) | CORE-KYC-07 |
| Wire | Confirm funding instructions by callback to the title company's number in our file | CORE-KYC-07 |

Escalation note (what-if): "On 20 Nov 2026 the underwriter found that $400,000 of equity came from an LLC not named in the file. Owners unknown. First detection 20 Nov 2026; SAR deadline Sunday 20 Dec 2026 (plan to file by Friday 18 Dec), or 19 Jan 2027 if no suspect is identified. File held under CORE-KYC-07."

## 8. Job aid: C7-jobaid-v0 (one page)

**Coverage**: 1-4 unit collateral → likely a covered residential mortgage loan (31 CFR 1029). Our program covers every loan anyway (CORE-KYC-04).

**Screen (CORE-KYC-01)**: borrower, guarantors, 20% owners; before term sheet and before funding. Unresolved match = decline. No exceptions.

**50 Percent Rule**: add every blocked owner's stake, direct and indirect. 50% or more = blocked. Control alone does not count, but escalate it.

**Records (CORE-KYC-06)**: OFAC records 10 years; rejected-transaction report in 10 business days.

**Chart (CORE-KYC-02)**: down to people; multiply through layers; 20% owners plus one control person, with ID. A 20% trust: every trustee, a revocable trust's grantor and 20% look-through beneficiaries, plus a certification of trust (CORE-KYC-08, -09).

**Red flags (CORE-KYC-07)**: occupancy; straw owner; 12-month prior sale 20%+ below; third-party funds; conflicting documents; any wire change (call back on our number).

**SAR (CORE-KYC-05)**: same-day escalation; BSA officer decides; $5,000+; 30 days, 60 at most with no suspect; keep 5 years; never tip off.

**Mini-example**: SDN A owns 30% and SDN B 25% → 55%: blocked. Flag found 5 Oct → SAR by 4 Nov; outer limit 4 Dec.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 Coverage | T1 | 1 | 5 | 1, 10 / 1 | 1 |
| O2 OFAC | T2 | 2 | 2 | 2, 3, 4 / 2, 3, 4 | 1 |
| O3 Ownership chart | T3 | 3 | 1 | 5 / 5 | 2 |
| O4 Red flags | T4 | 4, 5 | 3 | 6, 7 / 6, 7 | 3 |
| O5 Escalation and SAR | T5 | 5 | 4 | 8, 9 / 8, 9, 10 | 4 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [POLICY], [CONFIRM] or [DATA] tags | Met. The policy gap was closed with CORE-KYC-04 to -07. [VERIFY] tags on legal statements carry source and date |
| Every calculation cites a formula ID; thresholds cite rules | Met for rules. The two calculations (aggregate blocked ownership and deadline dates) have no library formula yet |
| Four-line worked examples; re-checked by a second person | Four lines met; second-person check pending (solo: re-run the dates in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-RES-01, RD-MF-01, RD-COM-01. All red-flag scenarios are labelled what-if |
| Lesson follows LD-04 order; alignment matrix; fits 2 hours | Met (120 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (10 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no colour-only meaning |

**Real-world check (researched 20 Nov 2026).**

- **Coverage.** FinCEN's 2012 rule brought non-bank residential mortgage lenders under AML program and SAR duties from August 2012 ([Federal Register, 14 Feb 2012](https://www.federalregister.gov/documents/2012/02/14/2012-3074/anti-money-laundering-program-and-suspicious-activity-report-filing-requirements-for-residential)). The definition of a residential mortgage loan rests on 1-4 unit collateral ([31 CFR 1010.100, Cornell LII](https://www.law.cornell.edu/cfr/text/31/1010.100)). Whether a given business-purpose lender is covered is a question for counsel [VERIFY].
- **SAR rule.** $5,000 threshold; 30 days, extendable to 60 with no suspect; 5-year records; confidentiality ([31 CFR 1029.320](https://www.law.cornell.edu/cfr/text/31/1029.320)).
- **OFAC.** Records went from 5 to 10 years with a rule effective 21 Mar 2025 ([Federal Register, 21 Mar 2025](https://www.govinfo.gov/content/pkg/FR-2025-03-21/html/2025-04864.htm)). Ownership stakes of blocked persons are aggregated, and control alone does not block an entity ([OFAC FAQs](https://ofac.treasury.gov/faqs/topic/1521)).
- **Residential real estate reporting.** The FinCEN rule took effect on 1 Mar 2026. A federal court in Texas vacated it on 19 Mar 2026 ([Gibson Dunn, 1 Apr 2026](https://www.gibsondunn.com/fincen-residential-real-estate-reporting-rule-vacated-nationwide/)). It covered non-financed transfers, so our financed deals were never in scope.
- **Fraud patterns.** FinCEN's mortgage fraud advisory lists red flags including occupancy fraud and straw buyers ([FIN-2012-A009](https://fincen.gov/resources/advisories/fincen-advisory-fin-2012-a009)). Fannie Mae's current list adds signs such as an investment-property buyer who owns no residence ([Fannie Mae](https://singlefamily.fanniemae.com/mortgage-fraud-prevention)).

**Self-check.**

1. A borrower LLC is owned 30% by person A and 25% by person B. Both are on the SDN List. Is the LLC blocked? **Answer:** Yes. 30% + 25% = 55%, which is 50% or more in aggregate (CORE-KYC-06, OFAC 50 Percent Rule).
2. When must OFAC screening run? **Answer:** Before the term sheet and again before funding (CORE-KYC-01).
3. A holding LLC owns 50% of the borrower. Person D owns 40% of the holding LLC. Does D go on the chart? **Answer:** Yes. 40% × 50% = 20%, which meets the 20% test (CORE-KYC-02).
4. Cash to close arrives from an LLC not named in the file. What do you do? **Answer:** Stop the file, tell the BSA officer the same business day, and identify and screen the source (CORE-KYC-07, CORE-KYC-05).
5. First detection is Monday 2 Nov 2026 and the suspect is known. When is the SAR due? **Answer:** 2 Nov + 30 calendar days = Wednesday 2 Dec 2026 (CORE-KYC-05).

**What to look up yourself.** One item: ask counsel whether your lending entity is a "loan or finance company" under 31 CFR 1029. That depends on your structure and is not something public sources can settle.

**How to check it:** in a spreadsheet, `=DATE(2026,10,5)+30` should show 4 Nov 2026, and `=WORKDAY(DATE(2026,11,20),10,DATE(2026,11,26))` should show 7 Dec 2026.
