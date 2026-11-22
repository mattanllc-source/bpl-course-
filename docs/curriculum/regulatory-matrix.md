# Regulatory coverage matrix

**Model policy for training - not for live lending decisions. Not legal advice.**

Author document for Milestone 3 (Course frame). It meets quality bar rows 11.1 and 11.2. Each row maps a regulatory topic to the module that teaches it and two multiple-choice item ideas. Learner pages show none of the codes or tags used here.

Built 22 Nov 2026. Machine-readable twin: [regulatory-matrix.json](regulatory-matrix.json).

## How to read it

Exhibit figures that are not in `data/running-deals/` are what-if practice data. Label them that way on any item built from this file.

- **Previews** come before the teaching module and stay at Bloom level 1-2 with a pointer. **Revisits** come after it. No revisit comes before its home (quality bar 7.2).
- **Outcomes** are the `outcomes.json` IDs each row serves. REG-01 to REG-24 are the only regulatory keys in the frame.
- **Checked** tags mean this author opened the source on the date shown. **Not opened** tags carry an earlier check from another file, or flag a site that refused the connection.
- **MOVING** marks a rule whose status changed in 2025-2026. Re-check these at every build.
- **Policy gap** marks a place where the Model Credit Policy has no rule. Nothing is invented to fill it.

## Summary

| Row | Topic | Previews | Teaches | Revisits | Outcomes | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REG-01 | Business-purpose determination: Truth in Lending (Reg Z) exemption | C0 | C1 | C6, C14 | C01-O1, C01-O2, C01-O4, C01-O7, C06-O1, C14-O3 | Settled |
| REG-02 | Business-purpose determination: RESPA (Reg X) exemption | - | C1 | C9, C11 | C01-O1, C01-O4, C09-O5, C11-O2 | Settled |
| REG-03 | Occupancy and disguised consumer-loan risk | - | C1 | C6, C7, C9, C10, C12, C14 | C01-O2, C01-O3, C01-O6, C06-O2, C07-O3, C09-O8, C10-O2, C12-O4, C14-O3 | Settled |
| REG-04 | State licensing of business-purpose lenders | C1, C2 | C10 | C14 | C10-O2, C14-O3 | Settled |
| REG-05 | ECOA and Reg B for business credit: coverage and adverse action | - | C1 | C6, C14 | C01-O4, C01-O5, C06-O2, C14-O6 | Settled |
| REG-06 | Spousal signatures (ECOA/Reg B) | - | C1 | C6, C9, C11 | C01-O5, C06-O1, C09-O2, C11-O1 | Settled |
| REG-07 | Small-business lending data collection (ECOA section 1071) | - | C1 | - | C01-O4 | MOVING |
| REG-08 | BSA/AML scope for non-bank lenders | C1 | C7 | C11, C14 | C07-O1, C07-O5, C07-O6, C11-O4, C14-O8 | Settled |
| REG-09 | OFAC screening of borrowers, owners and guarantors | C6 | C7 | C11, C14 | C07-O2, C11-O1, C14-O8 | Settled |
| REG-10 | Beneficial ownership: the CDD rule and Corporate Transparency Act changes | C6 | C7 | C11 | C07-O1, C07-O2, C11-O1 | MOVING |
| REG-11 | FinCEN residential real estate reporting rule | - | C7 | C11 | C07-O1, C11-O1 | MOVING |
| REG-12 | UDAAP (federal) and state UDAP | - | C1 | C13 | C01-O4, C13-O1 | Settled |
| REG-13 | Appraisal independence and USPAP | - | C5 | C7, C8, C14 | C05-O4, C05-O7, C07-O3, C08-O1, C14-O8 | Settled |
| REG-14 | Environmental due diligence: ASTM E1527-21 and CERCLA lender protections | - | C9 | C13, C14 | C09-O6, C13-O4, C13-O7, C14-O1 | Settled |
| REG-15 | Insurance: flood determination and flood cover | - | C9 | C11, C12 | C09-O4, C11-O1, C12-O6 | Settled |
| REG-16 | Insurance: builder's risk, loss of rents, mortgagee clause and certificate types | - | C9 | C12, C13 | C09-O4, C12-O6, C13-O4 | Settled |
| REG-17 | HMDA (Regulation C): reporting of business-purpose loans on dwellings | - | C1 | - | C01-O4 | Settled |
| REG-18 | State usury, default interest and late fees | C3 | C10 | C12, C13 | C10-O3, C10-O4, C12-O2, C13-O1 | Settled |
| REG-19 | Mechanics' lien priority and notice of commencement | C8 | C9 | C12 | C09-O3, C12-O1 | Settled |
| REG-20 | FCRA: permissible purpose and adverse action for guarantor reports | C1 | C6 | - | C06-O2 | Settled |
| REG-21 | Foreclosure overlays: servicemember, tenant and bankruptcy protections | - | C10 | C13 | C10-O6, C13-O5 | Settled |
| REG-22 | State foreclosure route, redemption and deficiency | - | C10 | C13 | C10-O1, C10-O5, C10-O7, C13-O4, C13-O6 | Settled |
| REG-23 | Fair Housing Act on residential collateral | - | C1 | C5 | C01-O4, C01-O5, C05-O7 | Settled |
| REG-24 | Interagency real estate lending standards (12 CFR Part 34, Subpart D) | - | C2 | C8 | C02-O2, C08-O1 | Settled |

## REG-01: Business-purpose determination: Truth in Lending (Reg Z) exemption

**The rule.** Reg Z exempts credit made mainly for a business, commercial or agricultural purpose, and credit to anyone who is not a natural person. Credit for a rental the owner does not occupy is business credit, unless the owner expects to live there over 14 days next year.

**Primary sources.**

- [12 CFR 1026.3(a)(1)-(2)](https://www.consumerfinance.gov/rules-policy/regulations/1026/3/) [VERIFY: 12 CFR 1026.3(a)(1)-(2), consumerfinance.gov eRegulations; checked 22 Nov 2026]
- [Supplement I to Part 1026, comments 3(a)-4 and 3(a)-5](https://www.consumerfinance.gov/rules-policy/regulations/1026/3/) [VERIFY: Reg Z comments 3(a)-4 (14-day test) and 3(a)-5 (owner-occupied: more than 2 units to acquire, more than 4 to improve), consumerfinance.gov; checked 22 Nov 2026]
- [Comments 3(a)-3 (factors), 3(a)-6 (rewritten business credit), 3(a)-10 (trusts)](https://www.consumerfinance.gov/rules-policy/regulations/1026/3/) [VERIFY: Reg Z comments 3(a)-3, -6, -10; not opened; C1 blueprint lists them as checked 22 Nov 2026]

**Status.** Settled. No pending change found.

**Model policy.** CORE-BOR-01; CORE-BP-01; CORE-BP-02; RES-GEN-09.

**Previews:** C0. **Teaches:** C1. **Revisits:** C6, C14.

**Outcomes served:** C01-O1, C01-O2, C01-O4, C01-O7, C06-O1, C14-O3; previewed in C00-O1.

**Misconception to correct.** "Lending to an LLC settles it." The entity test does take the loan out of Reg Z. But a guarantor or relative living in the house still creates fair-lending, state-law and fraud exposure, and some trusts count as natural persons (comment 3(a)-10).

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Maple Run occupancy certificate plus a utility bill in Dana Reyes's name at 1418 Maple Run Drive, dated month 3. Which conclusion is best supported? *(Exhibit type: certificate and utility bill.)*
   - Key: The bill is a red flag that stops the file until the occupancy evidence is explained (CORE-BP-02).
   - Distractor: The LLC borrower keeps the loan outside Reg Z, so no action is needed.
   - Distractor: The signed certification is conclusive, so the bill can be filed.
   - Distractor: The loan converts to consumer credit automatically on that date.
2. A fictional owner will live in one unit of a duplex for 30 days next year and borrows to buy it. Under Reg Z comments 3(a)-4 and 3(a)-5, how is the purpose decided?
   - Key: It is owner-occupied, has only 2 units, so the comment 3(a)-3 factors decide.
   - Distractor: It is non-owner-occupied rental property, so it is business credit.
   - Distractor: Any rental income makes it business credit.
   - Distractor: Owner occupancy always makes it consumer credit.

## REG-02: Business-purpose determination: RESPA (Reg X) exemption

**The rule.** RESPA and Reg X do not apply to credit made primarily for a business, commercial or agricultural purpose, as Reg Z defines it. A lender may rely on the Reg Z purpose test to decide whether the RESPA exemption applies.

**Primary sources.**

- [12 CFR 1024.5(b)(2)](https://www.consumerfinance.gov/rules-policy/regulations/1024/5/) [VERIFY: 12 CFR 1024.5(b)(2), consumerfinance.gov eRegulations; checked 22 Nov 2026]

**Status.** Settled. No pending change found.

**Model policy.** CORE-INS-02 (escrow cushion mirrors 1024.17(c)(5) as a benchmark only).

**Previews:** none. **Teaches:** C1. **Revisits:** C9, C11.

**Outcomes served:** C01-O1, C01-O4, C09-O5, C11-O2.

**Misconception to correct.** "RESPA has its own business-purpose test." It borrows the Reg Z test. A learner who passes the Reg Z test has also decided RESPA. Our escrow cushion copies a RESPA number by choice, not by law.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. A closer asks whether Cedar Court needs a RESPA escrow analysis. What is the best answer?
   - Key: No. The loan is business purpose under Reg Z, and Reg X relies on that test (1024.5(b)(2)).
   - Distractor: Yes. RESPA covers every loan secured by real estate.
   - Distractor: Yes, because the property has more than four units.
   - Distractor: No, but only because the borrower is in North Carolina.
2. Exhibit: Maple Run escrow worksheet showing a two-month cushion. Why does the course collect it? *(Exhibit type: escrow worksheet.)*
   - Key: Policy choice (CORE-INS-02) that mirrors a consumer cap; RESPA does not require it on this loan.
   - Distractor: RESPA requires a cushion on every 1-4 unit loan.
   - Distractor: Ohio law requires a two-month cushion.
   - Distractor: Reg Z requires it on loans to LLCs.

## REG-03: Occupancy and disguised consumer-loan risk

**The rule.** A loan papered as business purpose can be consumer credit if an owner or relative lives there, or cash-out goes mainly to personal use. State tests can look past the entity: Ohio's business-purpose carve-out ends if the borrower or immediate family will occupy the dwelling.

**Primary sources.**

- [Reg Z comments 3(a)-4, 3(a)-6](https://www.consumerfinance.gov/rules-policy/regulations/1026/3/) [VERIFY: Reg Z comment 3(a)-4 (14-day occupancy test), consumerfinance.gov; checked 22 Nov 2026]
- [OAC 1301:8-7-02(F), (G)](https://codes.ohio.gov/ohio-administrative-code/rule-1301:8-7-02) [VERIFY: OAC 1301:8-7-02(F)-(G); not opened; codes.ohio.gov refused connection; State Law Table SLT-OH-01 checked 20 Nov 2026]

**State examples.**

- SLT-OH-01 (immediate-family occupancy; 'more than half' consumer use)
- SLT-NC-01 (SAFE Act consumer-purpose test)

**Status.** Ohio rule rewritten effective 19 Sep 2025 (SLT-OH-03). No pending change found.

**Model policy.** CORE-BP-01; CORE-BP-02; CORE-BP-04; CORE-KYC-07; RES-GEN-09; RES-GEN-11.

**Previews:** none. **Teaches:** C1. **Revisits:** C6, C7, C9, C10, C12, C14.

**Outcomes served:** C01-O2, C01-O3, C01-O6, C06-O2, C07-O3, C09-O8, C10-O2, C12-O4, C14-O3.

**Misconception to correct.** "The signed certification proves purpose." It supports purpose but proves nothing. Contrary evidence wins, and a red flag triggers diligence and a SAR decision, not an automatic finding of fraud.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a month-14 Maple Run cash-out refinance request; the use-of-proceeds letter shows 55% for a personal home renovation. What does policy require? *(Exhibit type: use-of-proceeds letter.)*
   - Key: Treat it as consumer purpose and decline; no exception (CORE-BP-04).
   - Distractor: Approve, because the borrower is an LLC.
   - Distractor: Approve with a credit-officer exception.
   - Distractor: Approve if the guarantor re-signs the certification.
2. Exhibit: a lease to 'J. Reyes' and a driver's licence for Chris Reyes at the subject address. Who may clear the flag? *(Exhibit type: lease and ID.)*
   - Key: The file stops. The ID contradicts the certification, so only the BSA officer may clear it (CORE-BP-02; CORE-KYC-07).
   - Distractor: A credit officer, after a phone call with the borrower.
   - Distractor: The originator, once the tenant signs a new lease.
   - Distractor: The closing agent, at the funding call.

## REG-04: State licensing of business-purpose lenders

**The rule.** The federal SAFE Act licenses originators of home loans made mainly for personal, family or household use, so true business loans usually fall outside. Some states license commercial lenders anyway, and broker laws may turn on the collateral, so the property state's rules are checked before every term sheet.

**Primary sources.**

- [12 USC 5102(9)](https://www.law.cornell.edu/uscode/text/12/5102) [VERIFY: 12 USC 5102(9); not opened; C1 blueprint lists it as checked 22 Nov 2026 on Cornell LII]
- [State Law Table licence columns](docs/credit-policy/state-law-table.md) [VERIFY: State Law Table SLT-OH-01, SLT-NC-01, SLT-IN-01, SLT-CA-01; checked 20 Nov 2026]

**State examples.**

- Ohio: none for business purpose (ORC 1322; OAC 1301:8-7-02(G))
- North Carolina: none (G.S. 53-244.030(30))
- Indiana: lender none (IC 24-4.4-1-202); broker possibly (IC 23-2.5-1-14)
- California: CFL licence for commercial lenders unless DRE-broker exempt (Fin. Code 22057)

**Status.** North Carolina modernized its SAFE Act from 1 Oct 2025. California AB 2116 licenses commercial financing from 1 Jul 2028 but excludes real-property-secured deals (SLT-CA-03).

**Model policy.** CORE-BP-03.

**Previews:** C1, C2. **Teaches:** C10. **Revisits:** C14.

**Outcomes served:** C10-O2, C14-O3; previewed in C01-O3.

**Misconception to correct.** "Business-purpose lenders never need a licence." California licenses commercial lenders, and Indiana's broker law may reach a business-purpose 1-4 unit loan.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: State Law Table rows SLT-OH-01 and SLT-CA-01. A fictional lender with no California licence gets a broker-free business loan request on a Los Angeles fourplex. What should the analyst do? *(Exhibit type: State Law Table rows.)*
   - Key: Issue no term sheet unless the lender holds a CFL licence or meets a listed exemption (CORE-BP-03).
   - Distractor: Proceed, because business-purpose loans are exempt everywhere.
   - Distractor: Proceed, because California regulates only consumer loans.
   - Distractor: Proceed and get the licence after closing.
2. Why does Maple Run need no Ohio RMLA licence?
   - Key: The house is for rent or resale and no borrower or immediate family member will occupy it.
   - Distractor: The loan is under $500,000.
   - Distractor: Ohio has no mortgage licence law.
   - Distractor: The guarantor lives in Ohio.

## REG-05: ECOA and Reg B for business credit: coverage and adverse action

**The rule.** ECOA and Reg B cover business credit: no lender may discriminate on a basis such as race, sex, marital status or age. Businesses with $1 million or less in revenue get the 30-day notice rules, with changes; larger ones get notice in a reasonable time.

**Primary sources.**

- [12 CFR 1002.9(a)(3)(i)-(ii)](https://www.consumerfinance.gov/rules-policy/regulations/1002/9/) [VERIFY: 12 CFR 1002.9(a)(3)(i)-(ii), consumerfinance.gov eRegulations; checked 22 Nov 2026]
- [12 CFR 1002.2(g), (z)](https://www.consumerfinance.gov/rules-policy/regulations/1002/2/) [VERIFY: 12 CFR 1002.2(g), (z); not opened; C1 blueprint lists it as checked 22 Nov 2026]
- [42 USC 3605(a), (b)(1)(B) (Fair Housing Act, loans secured by residential real estate)](https://www.law.cornell.edu/uscode/text/42/3605) [VERIFY: 42 USC 3605; not opened; C1 blueprint lists it as checked 22 Nov 2026]

**Status.** Settled text. HUD proposed on 14 Jan 2026 to remove its disparate-impact rule (C1 blueprint); not re-opened here.

**Model policy.** CORE-BOR-03; CORE-BOR-05.

**Previews:** none. **Teaches:** C1. **Revisits:** C6, C14.

**Outcomes served:** C01-O4, C01-O5, C06-O2, C14-O6.

**Misconception to correct.** "Fair-lending law is consumer law." ECOA covers business credit. The Fair Housing Act covers loans secured by residential real estate, whatever the purpose.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a decline letter to a fictional LLC with $640,000 revenue last year, sent 45 days after a completed application. What is wrong? *(Exhibit type: decline letter.)*
   - Key: For a business at or under $1 million, the 30-day timing still applies, so the notice is late.
   - Distractor: Nothing; business credit has no notice rule.
   - Distractor: Nothing; reasons are owed only if asked within 60 days.
   - Distractor: The notice had to be in writing and sent within 10 days.
2. Cedar Court Partners LLC had revenue over $1 million last year and is declined. Which notice meets Reg B?
   - Key: Notice within a reasonable time, oral or written, with written reasons if asked within 60 days.
   - Distractor: No notice is needed for an LLC.
   - Distractor: Written reasons within 30 days in every case.
   - Distractor: Notice only if the guarantor asks.

## REG-06: Spousal signatures (ECOA/Reg B)

**The rule.** A lender may not require the signature of an applicant's spouse if the applicant qualifies alone under the lender's own credit standards. If another party is needed, the lender may ask for a guarantor; the spouse may serve, but the lender may not require it.

**Primary sources.**

- [12 CFR 1002.7(d)(1), (d)(4), (d)(5)](https://www.consumerfinance.gov/rules-policy/regulations/1002/7/) [VERIFY: 12 CFR 1002.7(d)(1), (d)(4), (d)(5), consumerfinance.gov eRegulations; checked 22 Nov 2026]
- [Hawkins v. Community Bank of Raymore, No. 14-520 (2016), affirmed by an equally divided Court](https://www.law.cornell.edu/supremecourt/text/14-520) [VERIFY: Hawkins, No. 14-520; not opened; C1 blueprint lists it as checked 22 Nov 2026]

**Status.** Rule text settled. Courts remain split on whether a guarantor is an 'applicant' who can sue (C1 owns this).

**Model policy.** CORE-BOR-05; CORE-BOR-03; CORE-BOR-04.

**Running deal.** Maple Run: Dana Reyes (60%, managing member) and Sam Okafor (40%) guarantee under CORE-BOR-03. Chris Reyes, Dana's spouse, owns nothing. CORE-BOR-05 says he is not asked to sign if Dana qualifies alone. The collateral is owned by the LLC, so the 1002.7(d)(4) exception for documents needed to reach collateral does not reach him.

**Previews:** none. **Teaches:** C1. **Revisits:** C6, C9, C11.

**Outcomes served:** C01-O5, C06-O1, C09-O2, C11-O1.

**Misconception to correct.** "Get the spouse's signature to be safe." If the guarantor qualifies alone, requiring it is itself a Reg B violation.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Maple Run ownership chart and Dana Reyes's credit summary. The closer adds Chris Reyes to the guaranty signature page 'as standard'. What is the best response? *(Exhibit type: ownership chart and credit summary.)*
   - Key: Remove him: Dana qualifies alone, Chris owns nothing, and Reg B bars requiring a spouse's signature (1002.7(d)(1); CORE-BOR-05).
   - Distractor: Keep him: spouses of guarantors must always sign.
   - Distractor: Keep him: Ohio is a community property state.
   - Distractor: Keep him: he can sign as a joint applicant without asking.
2. A fictional guarantor fails the liquidity test alone. Which request is allowed?
   - Key: Ask for an additional guarantor, letting the guarantor choose who, including the spouse if they wish.
   - Distractor: Require the spouse to guarantee.
   - Distractor: Require the spouse to sign the mortgage.
   - Distractor: Decline without saying why.

## REG-07: Small-business lending data collection (ECOA section 1071)

**The rule.** Covered lenders must collect and report data on credit applications from small businesses, including demographic data the applicant chooses to give. Since the 2026 revision, a lender is covered only after 1,000 small-business originations in each of the two prior years.

**Primary sources.**

- [CFPB, small business lending rule page (final rule 1 May 2026; compliance 1 Jan 2028)](https://www.consumerfinance.gov/compliance/compliance-resources/small-business-lending-resources/small-business-lending-collection-and-reporting-requirements/) [VERIFY: consumerfinance.gov small business lending requirements page; checked 22 Nov 2026]
- [12 CFR 1002.104(b)(2), 1002.105(b), 1002.106(b), 1002.114(b) as revised](https://files.consumerfinance.gov/f/documents/cfpb_1071-redline-final-rule_2026-05.pdf) [VERIFY: CFPB unofficial redline of the 2026 final rule, 1002.104-.106 and .114; checked 22 Nov 2026]
- [FR Doc. 2026-08494, 91 FR 23530 (1 May 2026)](https://www.federalregister.gov/d/2026-08494) [VERIFY: Federal Register 2026-08494; not opened; page cite and effective date from GAO and law-firm summaries]

**Status.** MOVING. Final rule published 1 May 2026. One compliance date: 1 Jan 2028. Thresholds: 1,000 originations in each of two prior years; revenue of $1 million or less. HMDA-reportable loans are excluded. The effective date differs by source (30 Jun 2026 per GAO; 21 Jul 2026 per KPMG); open the Federal Register text to settle it.

**Model policy.** None.

**Policy gap.** No policy rule. A lender at or above 1,000 small-business originations a year needs a 1071 program; the course lender's volume is not set. Ask the owner.

**Previews:** none. **Teaches:** C1. **Revisits:** none.

**Outcomes served:** C01-O4.

**Misconception to correct.** "1071 starts in 2024 for everyone." The 2023 tiered dates were replaced. Small lenders under 1,000 originations a year are outside it entirely.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a fictional lender's origination log: 640 small-business loans in 2026 and 710 in 2027. Is it covered by section 1071 on 1 Jan 2028? *(Exhibit type: origination log.)*
   - Key: No. It did not reach 1,000 covered originations in each of the two preceding years.
   - Distractor: Yes. Any lender with 100 or more originations is covered.
   - Distractor: Yes. All non-bank lenders are covered.
   - Distractor: Only for loans over $1 million.
2. Which Maple Run-type loan is excluded from 1071 even at a covered lender?
   - Key: One that is reportable under HMDA (Reg C covered loan; see REG-17).
   - Distractor: Any loan secured by real estate.
   - Distractor: Any loan to an LLC.
   - Distractor: Any loan under $1 million.

## REG-08: BSA/AML scope for non-bank lenders

**The rule.** A non-bank residential mortgage lender or originator is a 'loan or finance company' that must keep a written AML program and file SARs. Coverage turns on the collateral: a 'residential mortgage loan' is one secured by a 1-4 unit residential structure or residential land, whatever the loan's purpose.

**Primary sources.**

- [31 CFR 1010.100(lll)](https://www.law.cornell.edu/cfr/text/31/1010.100) [VERIFY: 31 CFR 1010.100(lll), Cornell LII; checked 22 Nov 2026]
- [31 CFR 1029.210(a)](https://www.law.cornell.edu/cfr/text/31/1029.210) [VERIFY: 31 CFR 1029.210(a), Cornell LII; checked 22 Nov 2026]
- [31 CFR 1029.320 (SAR: $5,000; 30/60 days)](https://www.law.cornell.edu/cfr/text/31/1029.320) [VERIFY: 31 CFR 1029.320; not opened; CORE-KYC-05 lists it as checked 20 Nov 2026]
- [31 USC 5318(h)(1) (program pillars)](https://www.law.cornell.edu/uscode/text/31/5318) [VERIFY: 31 USC 5318(h)(1); not opened; C7 blueprint lists it as checked 22 Nov 2026]

**Status.** Settled for 1-4 unit collateral. Coverage of a lender making only 5+ unit and commercial loans is the open counsel question in CORE-KYC-04.

**Model policy.** CORE-KYC-04; CORE-KYC-05; CORE-KYC-07.

**Previews:** C1. **Teaches:** C7. **Revisits:** C11, C14.

**Outcomes served:** C07-O1, C07-O5, C07-O6, C11-O4, C14-O8; previewed in C01-O4.

**Misconception to correct.** "BSA is for banks." A non-bank lender on a 1-4 unit rental is covered by its collateral, even on a business-purpose loan.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. A fictional non-bank lender makes only fix-and-flip loans on single-family houses to LLCs. Does it need an AML program?
   - Key: Yes. The loans are secured by 1-4 unit residential structures, so it is a residential mortgage lender (1010.100(lll)).
   - Distractor: No. Business-purpose loans are outside the BSA.
   - Distractor: No. Only banks need AML programs.
   - Distractor: Only if a loan exceeds $10,000 in cash.
2. Exhibit: a red-flag log entry on day 1 naming a suspect, $42,000 involved. When is the SAR due at the latest? *(Exhibit type: red-flag log.)*
   - Key: 30 calendar days after first detection.
   - Distractor: 60 days, because the amount is over $5,000.
   - Distractor: 10 business days.
   - Distractor: No SAR is needed until a loss occurs.

## REG-09: OFAC screening of borrowers, owners and guarantors

**The rule.** Every US person, lenders included, must block property of sanctioned persons and must report a rejected transaction to OFAC within 10 business days. An entity owned 50% or more in total by blocked persons is itself blocked, so screening must reach through the ownership chart.

**Primary sources.**

- [31 CFR 501.604(a), (c)](https://www.law.cornell.edu/cfr/text/31/501.604) [VERIFY: 31 CFR 501.604, Cornell LII; checked 22 Nov 2026]
- [31 CFR 501.601 (10-year records), 501.603; OFAC FAQs 398-401 (50 Percent Rule)](https://ofac.treasury.gov/faqs) [VERIFY: 31 CFR 501.601, 501.603; OFAC FAQs 398-401; not opened; CORE-KYC-06 lists them as checked 20 Nov 2026]

**Status.** Records retention rose from 5 to 10 years effective 21 Mar 2025 (C7 blueprint).

**Model policy.** CORE-KYC-01; CORE-KYC-06; CORE-KYC-08; CORE-CLS-03; CORE-EXC-03.

**Previews:** C6. **Teaches:** C7. **Revisits:** C11, C14.

**Outcomes served:** C07-O2, C11-O1, C14-O8; previewed in C06-O1.

**Misconception to correct.** "Screen the borrower entity name." OFAC liability is strict. A 50%-owned entity is blocked even if unlisted, so every owner and guarantor is screened twice.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a fictional ownership chart: two listed persons own 30% and 25% of a holding LLC that owns 100% of the borrower. Which is correct? *(Exhibit type: ownership chart.)*
   - Key: The borrower is blocked: listed persons own 55% in aggregate, indirectly.
   - Distractor: Neither owner is over 50%, so the borrower is clear.
   - Distractor: Only the holding LLC is blocked.
   - Distractor: Screening is needed only for the managing member.
2. Exhibit: a Cedar Court funding checklist with an OFAC run dated 9 days before funding. What does policy require? *(Exhibit type: funding checklist.)*
   - Key: A same-day OFAC re-run before the wire (CORE-CLS-03).
   - Distractor: Nothing; screening lasts 30 days.
   - Distractor: A re-run only for the borrower entity.
   - Distractor: A re-run after funding, within 10 business days.

## REG-10: Beneficial ownership: the CDD rule and Corporate Transparency Act changes

**The rule.** The CDD rule makes covered financial institutions identify and verify each 25% owner and one control person of a legal entity customer. Since March 2025, US companies and US persons no longer file ownership reports with FinCEN; a 2026 final rule made this permanent.

**Primary sources.**

- [31 CFR 1010.230(a), (d)(1)-(2), (f)](https://www.law.cornell.edu/cfr/text/31/1010.230) [VERIFY: 31 CFR 1010.230, Cornell LII; checked 22 Nov 2026; (f) refers to 1010.605(e)(1) for 'covered financial institution', not opened]
- [FinCEN, Beneficial Ownership Information Reporting Requirement Revision, final rule (RIN 1506-AB67), Aug 2026](https://www.fincen.gov/system/files/2026-08/BOIFinalRuleforFR.pdf) [VERIFY: FinCEN BOI final rule, pre-publication PDF, fincen.gov; checked 22 Nov 2026]
- [Interim final rule, 26 Mar 2025](https://www.fincen.gov/boi) [VERIFY: FinCEN BOI final rule PDF, Background section C (describes the IFR); checked 22 Nov 2026]

**Status.** MOVING (settled for now). IFR of 26 Mar 2025 exempted all domestic reporting companies. The August 2026 final rule makes that permanent, effective on publication; law-firm summaries date it 11-14 Aug 2026. Foreign reporting companies still report. Summaries say the CDD rule is unchanged; the rule text read here does not discuss it.

**Model policy.** CORE-KYC-02; CORE-KYC-08; CORE-KYC-09; CORE-BOR-03.

**Previews:** C6. **Teaches:** C7. **Revisits:** C11.

**Outcomes served:** C07-O1, C07-O2, C11-O1; previewed in C06-O1.

**Misconception to correct.** "FinCEN's registry will tell us who owns the borrower." US companies no longer report. The lender must build the ownership chart itself, from operating agreements and IDs.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. A fictional analyst plans to pull Birchwood Plaza LLC's beneficial ownership report from FinCEN. What is the best response?
   - Key: Domestic companies are exempt from BOI reporting, so build the chart from the operating agreement and IDs (CORE-KYC-02).
   - Distractor: Request it; lenders have direct access.
   - Distractor: Ask the borrower to file one first.
   - Distractor: Skip ownership review, since FinCEN has cleared it.
2. Exhibit: a Birchwood ownership chart (75% / 25%). Under policy, whom must the lender identify? *(Exhibit type: ownership chart.)*
   - Key: Both owners, since each holds 20% or more, plus one control person (CORE-KYC-02).
   - Distractor: Only Dana Whitlow, the majority owner.
   - Distractor: Only the managing member.
   - Distractor: Nobody; the CDD rule does not bind non-banks.

## REG-11: FinCEN residential real estate reporting rule

**The rule.** FinCEN's 2024 rule would have made closing or settlement agents report certain non-financed transfers of residential property to entities and trusts. A federal court vacated the rule on 19 Mar 2026, so no reports are now required; FinCEN has appealed.

**Primary sources.**

- [FinCEN, Residential Real Estate Rule page](https://www.fincen.gov/resources/rre/) [VERIFY: fincen.gov/resources/rre; checked 22 Nov 2026]
- [31 CFR 1031.320 (scope; financed-transfer exception)](https://www.law.cornell.edu/cfr/text/31/1031.320) [VERIFY: 31 CFR 1031.320; not opened; scope summary from general knowledge; open before teaching]
- [Flowers Title Companies v. Bessent (E.D. Tex.); notice of appeal to the Fifth Circuit, 11 May 2026](https://www.fincen.gov/resources/rre/) [VERIFY: FinCEN RRE page (vacatur, appeal); checked 22 Nov 2026; case name and appeal date from law-firm summaries]

**Status.** MOVING. The start date was moved from 1 Dec 2025 to 1 Mar 2026 [VERIFY: FinCEN postponement notice; not opened]. Vacated nationwide 19 Mar 2026. FinCEN says filers face no liability for not filing. Appeal pending in the Fifth Circuit; outcome not known on 22 Nov 2026.

**Model policy.** None.

**Policy gap.** None needed now. If the rule returns, it targets mainly non-financed (cash) transfers, so it would touch our closing agents, not our loans. Re-check at each build.

**Previews:** none. **Teaches:** C7. **Revisits:** C11.

**Outcomes served:** C07-O1, C11-O1.

**Misconception to correct.** "Every LLC purchase is reported to FinCEN." The start moved to 1 Mar 2026, and a court vacated the rule on 19 Mar 2026.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. On 22 Nov 2026, a fictional title agent asks whether it must file a Real Estate Report on an all-cash LLC purchase. Which answer is best?
   - Key: No filing is required while the vacatur stands; watch the Fifth Circuit appeal.
   - Distractor: Yes, within 30 days of closing.
   - Distractor: Yes, but only above $300,000.
   - Distractor: No, because the CTA replaced it.
2. Why would the rule, if revived, matter less to a lender-financed Maple Run purchase?
   - Key: It targets mainly non-financed transfers; a loan from an AML-covered lender was carved out [VERIFY before use].
   - Distractor: It covers only commercial property.
   - Distractor: It covers only individuals, not LLCs.
   - Distractor: It covers only transfers over $1 million.

## REG-12: UDAAP (federal) and state UDAP

**The rule.** The CFPB's UDAAP power covers consumer financial products, meaning those used mainly for personal, family or household purposes. True business loans usually fall outside it, but state laws vary; North Carolina's reaches unfair acts 'in or affecting commerce'.

**Primary sources.**

- [12 USC 5531(a), (c)(1), (d)](https://www.law.cornell.edu/uscode/text/12/5531) [VERIFY: 12 USC 5531, Cornell LII; checked 22 Nov 2026]
- [12 USC 5481(4)-(6)](https://www.law.cornell.edu/uscode/text/12/5481) [VERIFY: 12 USC 5481(4)-(6), Cornell LII; checked 22 Nov 2026]
- [N.C. G.S. 75-1.1(a)](https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_75/GS_75-1.1.html) [VERIFY: N.C. G.S. 75-1.1; not opened; ncleg.gov returned 403; wording from search results; Bumpers v. Community Bank of N. Va. (N.C. 2013) reached a lender, opinion not opened]
- [Ohio ORC 1345.01(A); Indiana IC 24-5-0.5-2](https://codes.ohio.gov/ohio-revised-code/section-1345.01) [VERIFY: ORC 1345.01; IC 24-5-0.5-2; not opened; both sites refused connection; consumer-purpose scope not confirmed]

**State examples.**

- North Carolina G.S. 75-1.1 (commerce-wide)
- Ohio ORC 1345 and Indiana IC 24-5-0.5 (consumer transactions; scope to confirm)

**Status.** Settled federal text. State scope not confirmed for Ohio and Indiana.

**Model policy.** None.

**Policy gap.** No policy rule on fair dealing or marketing claims. C10 does not teach state UDAP, so C10 is no longer listed; C13 revisits it for default notices. Whether C10 should add it is an owner question.

**Previews:** none. **Teaches:** C1. **Revisits:** C13.

**Outcomes served:** C01-O4, C13-O1.

**Misconception to correct.** "No consumer law applies, so any sales claim is fine." A disguised consumer loan brings UDAAP back. North Carolina's statute can reach business deals.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a fictional broker flyer promising 'no-doc loans to live in your new home through your LLC'. Which risk is most direct? *(Exhibit type: broker flyer.)*
   - Key: Disguised consumer lending, which brings back consumer law, including UDAAP and state law.
   - Distractor: None; the LLC removes all consumer law.
   - Distractor: Only a usury risk.
   - Distractor: Only an OFAC risk.
2. Why is a Cedar Court dispute more exposed to a state unfair-practices claim than an Ohio deal might be?
   - Key: North Carolina's statute reaches acts 'in or affecting commerce', not only consumer transactions.
   - Distractor: North Carolina caps business loan rates.
   - Distractor: Ohio has no unfair-practices law.
   - Distractor: The CFPB supervises North Carolina loans directly.

## REG-13: Appraisal independence and USPAP

**The rule.** Reg Z's appraisal-independence rule covers consumer loans secured by the consumer's principal dwelling, so it does not bind a business-purpose loan directly. Bank rules require USPAP appraisals engaged by the lender; our policy adopts that, and the Fair Housing Act covers residential appraisals.

**Primary sources.**

- [12 CFR 1026.42(a), (c)(1)](https://www.law.cornell.edu/cfr/text/12/1026.42) [VERIFY: 12 CFR 1026.42, Cornell LII; checked 22 Nov 2026]
- [12 CFR 34.44(a), 34.45(b)(1) (OCC; parallel FDIC and Fed rules)](https://www.law.cornell.edu/cfr/text/12/34.44) [VERIFY: 12 CFR 34.44-34.45; not opened; C5 blueprint lists them as checked 22 Nov 2026]
- [42 USC 3605(b)(2)](https://www.law.cornell.edu/uscode/text/42/3605) [VERIFY: 42 USC 3605(b)(2); not opened; C5 blueprint lists it as checked 22 Nov 2026]
- [USPAP 2024 edition (The Appraisal Foundation)](https://www.appraisalfoundation.org/) [Industry standard: confirm the edition in force on the build date; not opened]

**Status.** Settled. Check which USPAP edition is in force at build.

**Model policy.** CORE-VAL-01; CORE-VAL-02; CORE-VAL-03; RES-GEN-06.

**Previews:** none. **Teaches:** C5. **Revisits:** C7, C8, C14.

**Outcomes served:** C05-O4, C05-O7, C07-O3, C08-O1, C14-O8.

**Misconception to correct.** "The law does not bind us, so a borrower's appraisal is fine." Policy bans it. A pressured value is a fraud typology (FRD-03).

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Maple Run file with a borrower-supplied appraisal showing ARV $560,000 and the lender's AMC appraisal at $520,000. Which value sizes the loan? *(Exhibit type: two appraisal summaries.)*
   - Key: $520,000 from the lender-ordered AMC appraisal; borrower appraisals are not accepted (CORE-VAL-01).
   - Distractor: $560,000, the higher value.
   - Distractor: The average, $540,000.
   - Distractor: Either, if a BPO supports it.
2. Which statement about Reg Z's appraisal-independence rule is correct for Maple Run?
   - Key: It does not apply directly, because the loan is not consumer credit on a principal dwelling.
   - Distractor: It applies to every 1-4 unit loan.
   - Distractor: It applies because Ohio adopted it for LLCs.
   - Distractor: It applies only above $400,000.

## REG-14: Environmental due diligence: ASTM E1527-21 and CERCLA lender protections

**The rule.** EPA's all-appropriate-inquiries rule accepts a Phase I report done under ASTM E1527-21, which supports the landowner defences under CERCLA. A lender holding title only to protect its loan is not an owner or operator, unless it takes part in management.

**Primary sources.**

- [40 CFR 312.11(a)-(b)](https://www.law.cornell.edu/cfr/text/40/312.11) [VERIFY: 40 CFR 312.11, Cornell LII; checked 22 Nov 2026]
- [42 USC 9601(20)(F)(i)-(ii), (G)(i)](https://www.law.cornell.edu/uscode/text/42/9601) [VERIFY: 42 USC 9601(20)(F)-(G), Cornell LII; checked 22 Nov 2026]
- [40 CFR 312.20(a)-(b) (1-year and 180-day windows)](https://www.law.cornell.edu/cfr/text/40/312.20) [VERIFY: 40 CFR 312.20; not opened; C9 blueprint cites it]

**Status.** PFOA and PFOS became CERCLA hazardous substances on 8 Jul 2024; the C9 blueprint reports the D.C. Circuit upheld this on 18 Aug 2026 (opinion not opened).

**Model policy.** COM-GEN-14; MF-GEN-08; CORE-DOC-03; CORE-DEF-04; CORE-DEF-06.

**Policy gap.** No residential environmental screen in policy (C9 blueprint gap). Ask the owner. The no-further-action letter is a what-if: add the basis for Birchwood to the Course Bible (owner).

**Previews:** none. **Teaches:** C9. **Revisits:** C13, C14.

**Outcomes served:** C09-O6, C13-O4, C13-O7, C14-O1.

**Misconception to correct.** "The secured-creditor exemption protects the lender whatever it does." Running the site loses it. After foreclosure, the lender must seek to sell at the earliest practicable, commercially reasonable time.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Birchwood what-if: the Phase I reports a former dry cleaner as a historical condition, and a state no-further-action letter is on file. What supports ordering no Phase II? *(Exhibit type: Phase I summary and closure letter.)*
   - Key: The closure letter and the Phase I's historical-condition finding, which together show no current recognized condition (COM-GEN-14).
   - Distractor: The borrower's statement that the site was checked and cleared.
   - Distractor: The building's age and its recent renovation.
   - Distractor: The loan's non-recourse structure with an indemnity.
2. After foreclosing a fictional strip center, the lender leases it out long term and makes no sale effort for three years. What is the main environmental risk?
   - Key: It may lose the secured-creditor exemption for not divesting at the earliest practicable, commercially reasonable time.
   - Distractor: None; foreclosure always keeps the exemption.
   - Distractor: Only a tax risk.
   - Distractor: Only a flood insurance risk.

## REG-15: Insurance: flood determination and flood cover

**The rule.** Regulated lenders may not lend on a building in a flood zone unless flood cover equals the lesser of the balance and the NFIP maximum. This binds regulated lenders, not us, but policy copies it; NFIP caps are $250,000 for 1-4 family and $500,000 for other buildings.

**Primary sources.**

- [42 USC 4012a(b)(1)(A)](https://www.law.cornell.edu/uscode/text/42/4012a) [VERIFY: 42 USC 4012a(b), Cornell LII; checked 22 Nov 2026]
- [44 CFR 61.6 (regular program limits)](https://www.law.cornell.edu/cfr/text/44/61.6) [VERIFY: 44 CFR 61.6, Cornell LII; checked 22 Nov 2026]

**Status.** NFIP authority depends on periodic reauthorization by Congress; check the lapse status at build.

**Model policy.** CORE-INS-01; CORE-INS-03; MF-GEN-10; COM-GEN-13; COM-GEN-16.

**Previews:** none. **Teaches:** C9. **Revisits:** C11, C12.

**Outcomes served:** C09-O4, C11-O1, C12-O6.

**Misconception to correct.** "NFIP cover is enough." On larger buildings, the $500,000 cap sits far below the lesser-of test, so excess cover is needed (CORE-INS-03).

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: flood determination for a fictional Zone AE apartment building; loan $3,000,000; replacement cost $4,200,000. What flood cover does policy require? *(Exhibit type: flood determination.)*
   - Key: $3,000,000: NFIP $500,000 plus $2,500,000 private or excess cover (CORE-INS-03).
   - Distractor: $500,000, the NFIP cap.
   - Distractor: $4,200,000, the replacement cost.
   - Distractor: None, because we are not a regulated lender.
2. Why does a private BPL lender order a flood determination on every loan?
   - Key: Policy requires it to apply the lender's own flood rule, which mirrors the federal one (CORE-INS-01, -03). Loan buyers and warehouse lenders also expect it (quality bar 10.3).
   - Distractor: Federal law requires every lender to order one.
   - Distractor: Only to set the interest rate.
   - Distractor: Only for properties in Zone X.

## REG-16: Insurance: builder's risk, loss of rents, mortgagee clause and certificate types

**The rule.** No federal statute sets these covers for a private lender; the loan documents and our policy do. A standard mortgagee clause protects the lender despite owner breach; a certificate of insurance is evidence only and changes nothing.

**Primary sources.**

- [Model Credit Policy CORE-INS-01, -04; RES-GEN-08; MF-GEN-10; COM-GEN-16](docs/credit-policy/model-credit-policy.md) [Policy, not law]
- [ACORD 25 (liability certificate), ACORD 27 and 28 (evidence of property insurance)](https://www.acord.org/) [Industry forms: confirm form numbers and the 'evidence only' wording; not opened]

**Status.** Settled practice.

**Model policy.** CORE-INS-01; CORE-INS-04; RES-GEN-08; MF-GEN-10; COM-GEN-16; CORE-SVC-05; CORE-SVC-06.

**Previews:** none. **Teaches:** C9. **Revisits:** C12, C13.

**Outcomes served:** C09-O4, C12-O6, C13-O4.

**Misconception to correct.** "A liability certificate proves the lender is covered." It shows liability cover only. Property cover must name the lender as mortgagee and loss payee.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Maple Run insurance evidence during rehab: a landlord policy at ARV $520,000 with 6 months' rent loss. What is wrong? *(Exhibit type: insurance evidence.)*
   - Key: During rehab, builder's risk (or vacant cover) on completed value is needed, and ARV is not completed value (CORE-INS-04; RES-GEN-08).
   - Distractor: Nothing; ARV is the right limit.
   - Distractor: Rent-loss cover must be 12 months.
   - Distractor: Only the flood cover is missing.
2. Exhibit: a Cedar Court certificate listing general liability and 'certificate holder: lender'. What does it fail to show? *(Exhibit type: certificate of insurance.)*
   - Key: Property cover with the lender as mortgagee and loss payee, and 12 months' loss of rents (CORE-INS-01; MF-GEN-10).
   - Distractor: Nothing; certificate holder status is enough.
   - Distractor: Only the policy number.
   - Distractor: Only the flood zone.

## REG-17: HMDA (Regulation C): reporting of business-purpose loans on dwellings

**The rule.** Reg C excludes business-purpose loans, except home purchase loans, home improvement loans and refinancings. A dwelling includes an apartment building, so many business-purpose purchase and refinance loans are reportable once a lender is covered.

**Primary sources.**

- [12 CFR 1003.3(c)(10)](https://www.law.cornell.edu/cfr/text/12/1003.3) [VERIFY: 12 CFR 1003.3(c)(10), Cornell LII; opening words and the purchase, improvement and refinance exceptions confirmed; checked 22 Nov 2026]
- [12 CFR 1003.2(g); comment 3(c)(10)-2](https://www.consumerfinance.gov/rules-policy/regulations/1003/) [VERIFY: 12 CFR 1003.2(g) coverage tests and comment 3(c)(10)-2; not opened; cited by the CCO review]

**Status.** Settled text. Coverage tests for a non-depository lender not opened; open 1003.2(g) before C1 teaches coverage.

**Model policy.** None.

**Policy gap.** No rule says whether the course lender is a Reg C financial institution. Ask the owner.

**Previews:** none. **Teaches:** C1. **Revisits:** none.

**Outcomes served:** C01-O4.

**Misconception to correct.** "Business-purpose loans are never HMDA-reportable." The exclusion does not reach purchase, improvement or refinance loans on dwellings, apartment buildings included.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a fictional Reg C lender's log shows a business-purpose purchase loan to an LLC on a 12-unit apartment building. Is it excluded from HMDA? *(Exhibit type: loan log.)*
   - Key: No. It is a home purchase loan on a dwelling, so the business-purpose exclusion does not apply.
   - Distractor: Yes. Every loan to an LLC is excluded.
   - Distractor: Yes. A building over four units is not a dwelling.
   - Distractor: Yes. Every business-purpose loan is excluded.
2. At a Reg C lender, which loan on an apartment building is most likely outside HMDA?
   - Key: A business-purpose loan that funds another business and does not buy, improve or refinance the building.
   - Distractor: A loan to buy the building.
   - Distractor: A loan that refinances the building's bridge loan.
   - Distractor: A loan to renovate the building's units.

## REG-18: State usury, default interest and late fees

**The rule.** Each state sets its own usury ceiling and exemptions. Business loans, entity borrowers and larger loans are often exempt. Default interest and late fees face state limits and the penalty doctrine. Policy tests every rate and fee package before the term sheet (CORE-PRC-03).

**Primary sources.**

- [ORC 1343.01(B)](https://codes.ohio.gov/ohio-revised-code/section-1343.01) [VERIFY: ORC 1343.01(B); not opened; State Law Table checked 20 Nov 2026]
- [N.C. G.S. 24-1.1, 24-9](https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_24.html) [VERIFY: N.C. G.S. 24-1.1 and 24-9; not opened; State Law Table checked 20 Nov 2026]
- [IC 35-45-7-3](https://iga.in.gov/laws/2024/ic/titles/35) [VERIFY: IC 35-45-7-3 (consumer loans only); not opened; State Law Table checked 20 Nov 2026; secondary source for non-consumer loans]

**State examples.**

- SLT-OH-02 (entity loans and loans over $100,000 exempt, ORC 1343.01(B))
- SLT-NC-02 (loans of $300,000 or more, or to entities, exempt, G.S. 24-9)
- SLT-IN-02 (no cap found for non-consumer loans)

**Status.** Settled per the State Law Table. Re-check at each build.

**Model policy.** CORE-PRC-03; CORE-SVC-03; CORE-SVC-04.

**Previews:** C3. **Teaches:** C10. **Revisits:** C12, C13.

**Outcomes served:** C10-O3, C10-O4, C12-O2, C13-O1; previewed in C03-O6.

**Misconception to correct.** "An entity borrower makes any rate legal." Exemptions differ by state, size and product. Default interest is still capped by state usury (CORE-SVC-03).

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Birchwood Plaza note excerpt with default interest at the note rate plus 5.00%. What must be checked before the term sheet? *(Exhibit type: note excerpt.)*
   - Key: The full rate, points and fee package against Indiana's usury and fee rules (CORE-PRC-03; SLT-IN-02).
   - Distractor: Nothing, because commercial loans have no limits in any state.
   - Distractor: Only the federal usury ceiling for business loans.
   - Distractor: Only whether the borrower agreed to the rate in writing.
2. North Carolina what-if: a $250,000 business loan to an individual. Why might the usury answer differ from Cedar Court's?
   - Key: G.S. 24-9 exempts loans of $300,000 or more, or to entities, and this loan is neither (SLT-NC-02).
   - Distractor: It does not differ; North Carolina has no usury statute.
   - Distractor: It does not differ; business purpose always exempts the loan.
   - Distractor: It differs because the collateral has five or more units.

## REG-19: Mechanics' lien priority and notice of commencement

**The rule.** Unpaid contractors and suppliers can lien the property. In some states that lien takes priority from the start of work or a recorded notice. Lenders record before work starts and follow the state's notice or lien-agent process. They take lien waivers and a title date-down at each draw.

**Primary sources.**

- [ORC 1311.04](https://codes.ohio.gov/ohio-revised-code/section-1311.04) [VERIFY: ORC 1311.04 notice of commencement; not opened; cited by the CCO review]
- [N.C. G.S. 44A-11.1](https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_44A/GS_44A-11.1.html) [VERIFY: N.C. G.S. 44A-11.1 lien agent; not opened; cited by the CCO review]
- [IC 32-28-3](https://iga.in.gov/laws/2024/ic/titles/32) [VERIFY: IC 32-28-3 mechanics' liens; not opened; cited by the CCO review]

**State examples.**

- Not in the State Law Table yet. Owner to add a mechanics' lien column.

**Status.** Not opened. Open each statute before C9 teaches it.

**Model policy.** CORE-SVC-05; CORE-CLS-06; COM-CON-10.

**Policy gap.** No rule requires recording before work starts or a notice of commencement. Ask the owner.

**Previews:** C8. **Teaches:** C9. **Revisits:** C12.

**Outcomes served:** C09-O3, C12-O1; previewed in C08-O4.

**Misconception to correct.** "Our mortgage was recorded first, so it always ranks first." In some states a mechanics' lien relates back to the start of work, which can come before the mortgage.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Maple Run title date-down at the month-8 draw shows a recorded claim of lien from the roofer. What may be released? *(Exhibit type: title date-down.)*
   - Key: Nothing until a date-down shows no new lien (CORE-SVC-05).
   - Distractor: The full draw, since it will pay the roofer.
   - Distractor: The draw less the amount of the lien.
   - Distractor: The draw, once the borrower signs an affidavit.
2. Why does a construction lender check when work started relative to its recording date?
   - Key: In some states a mechanics' lien takes priority from the start of work, which could rank it ahead of the mortgage.
   - Distractor: The start date sets the loan's interest rate.
   - Distractor: Recording after work starts voids the note.
   - Distractor: Only the builder's risk insurer needs that date.

## REG-20: FCRA: permissible purpose and adverse action for guarantor reports

**The rule.** A lender may pull a guarantor's consumer report because the guarantor will be personally liable on the credit. Where a decline rests on that report, FCRA adverse-action duties may apply. Confirm their reach on business credit with counsel.

**Primary sources.**

- [15 U.S.C. 1681b(a)(3)(A)](https://www.law.cornell.edu/uscode/text/15/1681b) [VERIFY: 15 U.S.C. 1681b(a)(3)(A); not opened; cited by the CCO review]
- [15 U.S.C. 1681m(a)](https://www.law.cornell.edu/uscode/text/15/1681m) [VERIFY: 15 U.S.C. 1681m(a); not opened; cited by the CCO review]

**Status.** Not opened. Confirm how 1681m applies to a business loan declined on a guarantor's report.

**Model policy.** CORE-BOR-07; CORE-KYC-03.

**Policy gap.** No rule on guarantor credit authorizations or FCRA notices. Ask the owner.

**Previews:** C1. **Teaches:** C6. **Revisits:** none.

**Outcomes served:** C06-O2; previewed in C01-O4.

**Misconception to correct.** "FCRA is consumer law, so it never touches a business loan." The guarantor is a person, and the lender pulls that person's consumer report.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Why may the lender pull a guarantor's consumer report on a business-purpose loan?
   - Key: The guarantor will be personally liable, which ties the report to a credit transaction involving that person.
   - Distractor: The LLC borrower consents on behalf of its owners.
   - Distractor: FCRA does not apply to business-purpose loans.
   - Distractor: OFAC screening rules require a credit report.
2. A fictional business loan is declined because of a guarantor's recent delinquencies on her credit report. What is the best next step?
   - Key: Send the business-credit decline notice and ask counsel whether an FCRA notice to the guarantor is also due.
   - Distractor: Send nothing, because no notice rule reaches business loans.
   - Distractor: Mail the guarantor a full copy of the lender's file.
   - Distractor: Tell the broker, who then tells the guarantor.

## REG-21: Foreclosure overlays: servicemember, tenant and bankruptcy protections

**The rule.** Federal overlays can pause or change a foreclosure: servicemember protections, the tenant notice law and the bankruptcy stay. Each changes the timeline and the recovery, so the lender checks for them before filing and again before sale.

**Primary sources.**

- [50 U.S.C. 3953](https://www.law.cornell.edu/uscode/text/50/3953) [VERIFY: 50 U.S.C. 3953 (SCRA mortgages); not opened; cited by the CCO review]
- [Protecting Tenants at Foreclosure Act, 12 U.S.C. 5220 note](https://www.law.cornell.edu/uscode/text/12/5220) [VERIFY: 12 U.S.C. 5220 note (PTFA); not opened; cited by the CCO review]
- [11 U.S.C. 362(a), (d)(3)](https://www.law.cornell.edu/uscode/text/11/362) [VERIFY: 11 U.S.C. 362(d)(3), Cornell LII; single asset real estate relief after 90 days unless a plan or interest payments; 362(a) not opened; checked 22 Nov 2026]

**Status.** Only 362(d)(3) opened. Open the others before C10 and C13 teach them.

**Model policy.** CORE-DEF-02.

**Policy gap.** No rule requires a servicemember status check or a tenant-notice step before sale. Ask the owner.

**Previews:** none. **Teaches:** C10. **Revisits:** C13.

**Outcomes served:** C10-O6, C13-O5.

**Misconception to correct.** "A filing after the notice of sale is too late to matter." A filing any time before the sale stops it until the court grants relief.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Cedar Court what-if: the borrower LLC files for bankruptcy two days before the trustee's sale. What happens to the sale?
   - Key: It stops under the automatic stay until the court grants relief.
   - Distractor: It goes ahead, because notice of sale was already given.
   - Distractor: It goes ahead, because the borrower is a single-purpose entity.
   - Distractor: It goes ahead if the guarantor consents in writing.
2. Maple Run what-if: the lender forecloses while a tenant holds a bona fide lease. Which federal law should the servicer check before any eviction?
   - Key: The Protecting Tenants at Foreclosure Act.
   - Distractor: The Real Estate Settlement Procedures Act.
   - Distractor: The Equal Credit Opportunity Act.
   - Distractor: The Flood Disaster Protection Act.

## REG-22: State foreclosure route, redemption and deficiency

**The rule.** The property state sets the foreclosure route, judicial or power of sale, with its timeline, redemption rights and deficiency limits. Ohio and Indiana foreclose judicially; North Carolina uses power of sale. Deficiency and guaranty rules differ by state.

**Primary sources.**

- [State Law Table rows SLT-OH-01/-02, SLT-NC-01/-02, SLT-IN-01/-02](../credit-policy/state-law-table.md) [VERIFY: State Law Table foreclosure and deficiency columns; not opened; State Law Table checked 20 Nov 2026; statutes cited there not re-opened]

**State examples.**

- SLT-OH-02 (judicial; deficiency allowed; ORC 2329.08 covers only 1-2 family homes)
- SLT-NC-02 (power of sale; the primary-residence bar does not apply)
- SLT-IN-02 (judicial, with no sale until 3 months after filing; deficiency allowed)

**Status.** Settled per the State Law Table.

**Model policy.** CORE-DOC-04; CORE-DEF-02; CORE-DEF-05.

**Previews:** none. **Teaches:** C10. **Revisits:** C13.

**Outcomes served:** C10-O1, C10-O5, C10-O7, C13-O4, C13-O6.

**Misconception to correct.** "Foreclosure takes about the same time everywhere." Judicial and power-of-sale states differ by months of carry, and carry drives loss severity (TM-32).

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: Birchwood Plaza state note and a draft workout memo that assumes a power-of-sale timeline. What is wrong? *(Exhibit type: state note and memo.)*
   - Key: Indiana forecloses judicially, with no sale until 3 months after filing, so the memo understates time and carry (SLT-IN-02).
   - Distractor: Nothing; Indiana forecloses by power of sale.
   - Distractor: Only the default rate in the memo is wrong.
   - Distractor: Indiana bars deficiency claims on commercial loans.
2. Which state fact most changes the value of Maple Run's recourse guaranty?
   - Key: Ohio's deficiency rules, checked against the loan before the term sheet (CORE-DOC-04; SLT-OH-01).
   - Distractor: Ohio's usury ceiling for entity loans.
   - Distractor: Ohio's broker licensing rules.
   - Distractor: Ohio's flood insurance rules.

## REG-23: Fair Housing Act on residential collateral

**The rule.** The Fair Housing Act bars discrimination in residential real estate-related transactions, including loans secured by residential property and appraisals. It applies whatever the loan's purpose, so business-purpose loans on 1-4 unit and apartment collateral are covered.

**Primary sources.**

- [42 U.S.C. 3605](https://www.law.cornell.edu/uscode/text/42/3605) [VERIFY: 42 U.S.C. 3605; not opened; REG-05 and REG-13 cite the same reach]

**Status.** Settled. No pending change found in this build.

**Model policy.** None.

**Policy gap.** No fair-lending rule in the Model Credit Policy. Ask the owner.

**Previews:** none. **Teaches:** C1. **Revisits:** C5.

**Outcomes served:** C01-O4, C01-O5, C05-O7.

**Misconception to correct.** "Fair housing law protects home buyers, not investors." It reaches the transaction and the collateral, so an investor loan on a rental is covered.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: a fictional appraisal comment calls a neighborhood's 'changing ethnic make-up' a value risk. What should the desk reviewer do? *(Exhibit type: appraisal comment.)*
   - Key: Return the report for revision, because the comment raises a fair-housing concern (CORE-VAL-03).
   - Distractor: Accept it, because the loan is business purpose.
   - Distractor: Accept it, if the value is otherwise supported.
   - Distractor: Lower the value to reflect the comment.
2. Why does the Fair Housing Act reach Cedar Court even though the loan is business purpose?
   - Key: It covers loans secured by residential real estate, and Cedar Court is an apartment building.
   - Distractor: Because the borrower is based in North Carolina.
   - Distractor: Because the loan is over $2,000,000.
   - Distractor: It does not reach Cedar Court at all.

## REG-24: Interagency real estate lending standards (12 CFR Part 34, Subpart D)

**The rule.** Bank regulators require real estate lending policies with supervisory loan-to-value limits by loan type, and track loans above them as exceptions. The rules bind banks, not the course lender. The course uses them as a benchmark for its credit box.

**Primary sources.**

- [12 CFR Part 34, Subpart D and Appendix A](https://www.ecfr.gov/current/title-12/chapter-I/part-34/subpart-D) [VERIFY: 12 CFR Part 34, Subpart D, Appendix A; not opened; C2 blueprint lists it as checked 22 Nov 2026]

**Status.** Settled. No pending change found in this build.

**Model policy.** None.

**Previews:** none. **Teaches:** C2. **Revisits:** C8.

**Outcomes served:** C02-O2, C08-O1.

**Misconception to correct.** "Supervisory limits are legal caps for every lender." They bind bank policies. A non-bank lender adopts them only by choice.

**Item ideas (MCQ, review-only drafts).** They use running deals or what-ifs, so they may appear only as review questions, never on an exam form.

1. Exhibit: the supervisory LTV table beside the model credit box. A raw-land request asks for 70% LTV. What is the best reading? *(Exhibit type: supervisory LTV table.)*
   - Key: A bank would log it as an exception to the 65% benchmark; our own land rule decides our answer.
   - Distractor: It is illegal for any lender above 65%.
   - Distractor: It passes, because 70% is under every supervisory limit.
   - Distractor: It passes, because supervisory limits apply only to houses.
2. Why does the course compare its credit box with the interagency standards?
   - Key: They show where a bank buyer or warehouse lender would see a policy exception.
   - Distractor: They bind every lender in the United States.
   - Distractor: They set the state usury limits.
   - Distractor: They replace the Model Credit Policy.

## Self-check

| Check | Result |
| --- | --- |
| Every quality bar 11.1 topic has a row | Met: 24 rows. REG-01 to REG-16 cover the 10 topic groups; REG-17 to REG-24 add HMDA, usury, mechanics' liens, FCRA, foreclosure overlays, state foreclosure, the Fair Housing Act and the interagency standards |
| No revisit before its teaching module | Met: earlier modules moved to Previews; the build stops on a breach |
| Every row serves a named outcome in its teaching module | Met (build check) |
| Each row names a teaching module and two MCQ ideas | Met |
| Every legal statement tagged | Met. Tags say checked or not opened |
| Business-purpose test and spousal-signature rule included | Met: REG-01, REG-06 (Maple Run) |
| Moving items have a dated status | Met: REG-07, REG-10, REG-11 |
| No invented limits | Met. Gaps are flagged in REG-07, REG-11, REG-12, REG-14, REG-17, REG-19 to REG-21 and REG-23 |

## What to look up yourself

1. Open the Federal Register text of FR Doc. 2026-08494 and settle the section 1071 effective date (30 Jun or 21 Jul 2026).
2. Open 31 CFR 1031.320 and confirm the financed-transfer exception before teaching REG-11's second item.
3. Check the Fifth Circuit docket in Flowers Title Companies v. Bessent for any ruling after June 2026.
4. Open the Federal Register version of FinCEN's 2026 BOI final rule for its publication and effective date.
5. Open 31 CFR 1010.605(e)(1) to confirm the CDD rule does not reach a loan or finance company.
6. Open ORC 1345.01 and IC 24-5-0.5-2 (both sites refused connection) and N.C. G.S. 75-1.1 (403).
7. Confirm ACORD certificate form numbers and the current USPAP edition.
8. Check NFIP reauthorization status on the build date.
9. Open 12 CFR 1003.2(g) and comment 3(c)(10)-2 to settle Reg C coverage for a non-depository lender (REG-17).
10. Open ORC 1311.04, N.C. G.S. 44A-11.1 and IC 32-28-3 before C9 teaches mechanics' liens (REG-19).
11. Open 15 U.S.C. 1681b and 1681m, and any FTC or CFPB guidance on guarantor reports (REG-20).
12. Open 50 U.S.C. 3953, the PTFA note at 12 U.S.C. 5220 and 11 U.S.C. 362(a) and 101(51B) (REG-21; TM-38).
13. Open 42 U.S.C. 3605 and 12 CFR Part 34, Subpart D, Appendix A (REG-23, REG-24).

## How to check it

1. Run the JSON check below. Every quality bar 11.1 topic maps to a row, and every row has two MCQ ideas and outcomes in its teaching module.
2. Open each URL in the sources column and find the quoted subsection.
3. Spot-check: 12 CFR 1002.7(d)(5) should say the creditor 'shall not require that the spouse be the additional party'.
4. Spot-check: the CFPB redline at 1002.105(b) should read 1,000 covered credit transactions.
5. For any row, confirm every module in `previews` comes before `teach`, and every module in `revisit` comes after it.

```
python -c "import json;d=json.load(open('docs/curriculum/regulatory-matrix.json',encoding='utf-8'));print(len(d['rows']), all(len(r['mcq'])==2 for r in d['rows']))"
```
