# Document registry: BPL core course (C0-C14)

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | BPL-CORE, C0-C14, and the ground-up capstone |
| Quality bar rows | 9.1 real documents; 9.6 input sources; 9.7 servicing and portfolio documents; 9.3 capstone file |
| Inputs | `docs/standards/quality-bar.md` (v2 draft); `docs/curriculum/needs-analysis.md`; `c00`-`c14-blueprint.md`; `coverage-review.md`; `university-syllabi-notes.md`; `docs/design/cfi-cref-comparison.md` section H; `npla-resources-review.md` (inspiration only); `docs/credit-policy/model-credit-policy.md` and `docs/formulas/formula-library.md` (snapshots 22 Nov 2026, current per `docs/SNAPSHOT.md`); `data/running-deals/running-deals.md` (22 Nov 2026); `foundations-changes-2026-11-22.md` |
| Machine-readable twin | `docs/curriculum/document-registry.json` (same content, for the planned automated registry check in quality bar 9.1) |
| Prepared | 22 Nov 2026 |
| Status | v1 for owner review. Professor and CCO review fixes applied 22 Nov 2026 (`course-frame-summary.md`). No module, Course Bible, policy or formula text was changed |

**What this is.** The list of every fictional source document the course teaches from. Each entry gives the real format, the fields a junior analyst reads and the defects reviewers catch. It also names where the document is taught, its deal and the formulas it feeds. Module authors build exhibits and planted defects from it. It is author material: learner pages name documents in plain words, never by DOC code (quality bar 1.1).

**Rules used.** No policy limit is invented. Each defect points to an existing rule or formula, or tests a fact with no limit at all. Where the policy has no rule, the gap is listed in section 7, not filled. Deal facts are copied from the Running Deals tab. Any new deal detail must tie to those totals and be added in the Course Bible first.

**Counts.** 62 documents. 18 cover the 15 types in quality bar 9.1. 4 cover 9.7 and 9 the construction set. 31 support specific outcomes.

## 1. Summary

| ID | Document | Group | Previews | First taught | Reappears | Outcomes | Deals |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DOC-01 | Rent roll | 9.1 | - | C4 | C5, C8, C9, C12, C14 | C04-O1, C04-O3, C05-O2, C08-O2, C09-O7, C09-O8, C12-O4, C14-O5 | RD-MF-01, RD-COM-01 |
| DOC-02 | T-12 operating statement | 9.1 | - | C4 | C5, C8, C12, C14 | C04-O2, C04-O3, C04-O4, C05-O2, C08-O2, C12-O4, C14-O5 | RD-MF-01, RD-COM-01 |
| DOC-03 | Appraisal excerpt | 9.1 | - | C5 | C8, C11, C12, C13, C14 | C05-O1, C05-O3, C05-O4, C05-O6, C05-O8, C08-O1, C11-O1, C12-O3, C13-O2, C14-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-04 | Appraisal review (desk review) | 9.1 | - | C5 | C8, C14 | C05-O7, C08-O1, C14-O1 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-05 | Purchase contract and chain of title | supporting | - | C5 | C7, C8, C11 | C05-O4, C07-O3, C08-O1, C11-O2 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-06 | Credit report (tri-merge) | 9.1 | - | C6 | C7, C11, C14 | C06-O2, C07-O3, C11-O1, C14-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-07 | Background report | 9.1 | - | C6 | C7, C11 | C06-O2, C07-O3, C11-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-08 | Operating agreement | 9.1 | - | C6 | C7, C9, C11 | C06-O1, C06-O7, C07-O2, C09-O1, C11-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-09 | Good-standing certificate | 9.1 | - | C6 | C11 | C06-O1, C11-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-10 | Personal financial statement and schedule of real estate owned | supporting | - | C6 | C12, C13, C14 | C06-O4, C06-O5, C12-O5, C13-O6, C14-O1 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-11 | Bank and brokerage statements | supporting | - | C4 | C6, C7, C11, C12 | C04-O3, C06-O3, C06-O4, C07-O3, C11-O1, C12-O4 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-12 | Ownership chart and OFAC screening record | supporting | - | C7 | C11, C14 | C07-O2, C11-O1, C14-O8 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-13 | Wire instructions and funding request | supporting | - | C7 | C11 | C07-O4, C11-O3, C11-O4 | RD-RES-01, RD-COM-01 |
| DOC-14 | Term sheet | 9.1 | - | C8 | C10, C11, C14 | C08-O3, C08-O5, C08-O8, C10-O3, C11-O1, C14-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-15 | Construction contract or GMP summary | construction | - | C8 | C12, Capstone | C08-O4, C12-O1 | CAP-01 |
| DOC-16 | Hard and soft cost budget | construction | - | C8 | C12, Capstone | C08-O4, C12-O1 | CAP-01, RD-RES-01 |
| DOC-17 | Construction schedule | construction | - | C8 | C12, Capstone | C08-O4, C12-O1 | CAP-01 |
| DOC-18 | Builder background report | construction | - | C8 | C12, Capstone | C08-O4, C12-O1 | CAP-01 |
| DOC-19 | Title commitment | 9.1 | - | C9 | C11, C12, C13, Capstone | C09-O3, C11-O5, C12-O1, C13-O4 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-20 | Survey | 9.1 | - | C9 | C11, C13 | C09-O3, C11-O1, C13-O4 | RD-COM-01, RD-MF-01, CAP-01 |
| DOC-21 | Property condition assessment summary | 9.1 | - | C9 | C12, C14 | C09-O8, C12-O4, C14-O1 | RD-MF-01, RD-COM-01, CAP-01 |
| DOC-22 | Phase I environmental site assessment summary | 9.1 | - | C9 | C11, C13, C14, Capstone | C09-O6, C11-O1, C13-O4, C13-O7, C14-O1 | RD-COM-01, RD-MF-01, CAP-01 |
| DOC-23 | Insurance certificate and evidence of property insurance | 9.1 | - | C9 | C11, C12, Capstone | C09-O4, C11-O1, C12-O6 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-24 | Flood hazard determination | supporting | - | C9 | C11 | C09-O4, C11-O1 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-25 | Promissory note and loan agreement excerpt | supporting | - | C9 | C10, C12, C13 | C09-O1, C09-O2, C10-O3, C10-O4, C12-O2, C12-O3, C13-O1 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-26 | Tenant estoppel certificate and SNDA | supporting | - | C9 | C12 | C09-O7, C12-O4 | RD-COM-01 |
| DOC-27 | Closing checklist (funding conditions) | 9.1 | - | C11 | C12, C14 | C11-O1, C12-O1, C14-O3 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-28 | Settlement statement | supporting | - | C11 | C12 | C11-O2, C11-O3, C12-O7 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-29 | Draw request | 9.1 | - | C12 | C13, Capstone | C12-O1, C13-O2 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-30 | Draw inspection report | 9.1 | - | C12 | C13, Capstone | C12-O1, C13-O2 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-31 | Loan-monitor (construction consultant) report | construction | - | C12 | Capstone | C12-O1 | CAP-01 |
| DOC-32 | Change order | construction | - | C12 | Capstone | C12-O1 | CAP-01, RD-RES-01 |
| DOC-33 | Lien waivers | construction | - | C12 | Capstone | C12-O1 | RD-RES-01, CAP-01 |
| DOC-34 | Loan servicing report | 9.1 | - | C12 | C13, C14 | C12-O2, C12-O4, C13-O1, C14-O8 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-35 | Executed residential lease | supporting | - | C4 | C9, C12, C14 | C04-O1, C04-O2, C04-O5, C09-O8, C12-O4, C14-O5 | RD-RES-01 |
| DOC-36 | Watchlist with risk ratings | 9.7 | - | C12 | C13, C14 | C12-O5, C13-O1, C14-O8 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-37 | Delinquency tape | 9.7 | - | C12 | C13, C14 | C12-O5, C13-O1, C14-O7 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-38 | Investor remittance report | 9.7 | - | C12 | C14 | C12-O8, C14-O2 | RD-MF-01 |
| DOC-39 | Extension or modification request | 9.7 | - | C12 | C13 | C12-O3, C13-O3 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-40 | Default notice and pre-negotiation letter | supporting | - | C13 | C14 | C13-O1, C14-O8 | RD-COM-01, RD-RES-01 |
| DOC-41 | Updated valuation for resolution | supporting | - | C13 | C14 | C13-O2, C13-O7, C14-O7 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-42 | Credit memo | supporting | - | C14 | Capstone | C14-O1, C14-O6 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-43 | Exception request and log entry | supporting | - | C14 | Capstone | C14-O3 | RD-MF-01, RD-COM-01, CAP-01 |
| DOC-44 | Loan sale data tape | supporting | - | C14 | - | C14-O2 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-45 | Portfolio concentration report | supporting | - | C14 | - | C14-O4 | RD-MF-01, RD-COM-01 |
| DOC-46 | Business-purpose, non-occupancy and use-of-proceeds certification | supporting | C1 | C6 | C7, C11, C12 | C06-O1, C07-O3, C11-O1, C12-O4 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-47 | Security instruments: mortgage or deed of trust, assignment of leases and rents, UCC-1 | supporting | - | C9 | C11, C13 | C09-O1, C09-O3, C11-O5, C11-O6, C13-O4 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-48 | Guaranty agreements: payment, carve-out and completion guaranties; environmental indemnity | supporting | C6 | C9 | C10, C13 | C09-O1, C09-O2, C10-O7, C13-O6 | RD-RES-01, RD-MF-01 |
| DOC-49 | Zoning report | supporting | - | C5 | C9 | C05-O6, C09-O8 | RD-MF-01, RD-COM-01 |
| DOC-50 | Site visit report with photos | supporting | - | C9 | C12, C13 | C09-O8, C12-O4, C13-O4 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-51 | Title date-down and UCC search | supporting | - | C11 | C12, C13 | C11-O5, C12-O1, C13-O4 | RD-RES-01, RD-COM-01, CAP-01 |
| DOC-52 | Experience verification pack: prior settlement statements and deeds | supporting | - | C6 | C7 | C06-O6, C07-O3 | RD-RES-01, RD-MF-01 |
| DOC-53 | Government ID | supporting | - | C7 | C11 | C07-O2, C07-O3, C11-O4 | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| DOC-54 | AMC engagement letter | supporting | - | C5 | C7 | C05-O4, C05-O7, C07-O3 | RD-RES-01, RD-MF-01, RD-COM-01 |
| DOC-55 | Rate-cap confirmation and collateral assignment | supporting | - | C8 | C11, C12 | C08-O3, C11-O1, C12-O2, C12-O3 | RD-MF-01, RD-COM-01 |
| DOC-56 | Plans, specifications and building permit | construction | - | C8 | C12, Capstone | C08-O4, C12-O1 | CAP-01, RD-RES-01 |
| DOC-57 | Payoff letter | supporting | - | C11 | C12 | C11-O2, C12-O7 | RD-RES-01, RD-MF-01 |
| DOC-58 | Intercreditor agreement | supporting | - | C9 | C13 | C09-O1, C13-O3 | exam-only deal |
| DOC-59 | Take-out lender quote | supporting | - | C8 | C12, C14 | C08-O6, C12-O3, C14-O5 | RD-MF-01, RD-COM-01 |
| DOC-60 | Sources and uses with mezzanine debt and preferred equity | supporting | - | C8 | C14 | C08-O7, C14-O1 | exam-only deal |
| DOC-61 | Buyer or warehouse eligibility sheet | supporting | - | C14 | - | C14-O2 | exam-only deal |
| DOC-62 | Market or feasibility study | construction | - | C8 | C14, Capstone | C08-O4, C08-O6, C14-O1 | CAP-01 |

**Deal codes**

- RD-RES-01: Maple Run (Ohio), fix-and-flip to DSCR refinance
- RD-MF-01: Cedar Court (North Carolina), value-add bridge to agency take-out
- RD-COM-01: Birchwood Plaza (Indiana), retail bridge to bank take-out
- CAP-01: Capstone ground-up construction deal (fourth, unseen deal; not yet authored)

## 2. Coverage checks

### 2.1 Quality bar 9.1: the 15 required types

| 9.1 item | Type | Documents | First taught |
| --- | --- | --- | --- |
| 1 | Rent roll | DOC-01 | C4 |
| 2 | T-12 operating statement | DOC-02 | C4 |
| 3 | Appraisal excerpt | DOC-03 | C5 |
| 4 | Appraisal review | DOC-04 | C5 |
| 5 | Title commitment (Schedules B-I and B-II) | DOC-19 | C9 |
| 6 | Survey | DOC-20 | C9 |
| 7 | Draw request with inspection report | DOC-29, DOC-30 | C12 |
| 8 | Credit and background reports | DOC-06, DOC-07 | C6 |
| 9 | Operating agreement and good-standing certificate | DOC-08, DOC-09 | C6 |
| 10 | Property condition summary | DOC-21 | C9 |
| 11 | Phase I environmental summary | DOC-22 | C9 |
| 12 | Insurance certificate | DOC-23 | C9 |
| 13 | Term sheet | DOC-14 | C8 |
| 14 | Closing checklist | DOC-27 | C11 |
| 15 | Servicing report | DOC-34 | C12 |

All 15 types are mapped. Every one is first taught in C4 or later, as 9.1 requires. The build also checks that no outcome uses a document before its first-taught module, except named previews in C0-C3 or with a pointer.

### 2.2 Quality bar 9.7: servicing and portfolio documents

| Type | Document | First taught | Reappears |
| --- | --- | --- | --- |
| Delinquency tape | DOC-37 | C12 | C13, C14 |
| Watchlist with risk ratings | DOC-36 | C12 | C13, C14 |
| Investor remittance report | DOC-38 | C12 | C14 |
| Extension or modification request | DOC-39 | C12 | C13 |

All four are used in C12 and again in C13, as 9.7 requires.

### 2.3 Construction set (owner decisions H.1 and H.2)

| Type | Document | First taught | Reappears |
| --- | --- | --- | --- |
| Construction contract or GMP summary | DOC-15 | C8 | C12, Capstone |
| Hard and soft cost budget | DOC-16 | C8 | C12, Capstone |
| Construction schedule | DOC-17 | C8 | C12, Capstone |
| Loan-monitor or inspection report | DOC-31 | C12 | Capstone |
| Change order | DOC-32 | C12 | Capstone |
| Lien waivers | DOC-33 | C12 | Capstone |
| Builder background report | DOC-18 | C8 | C12, Capstone |
| Plans, specifications and building permit | DOC-56 | C8 | C12, Capstone |
| Market or feasibility study | DOC-62 | C8 | C14, Capstone |

C8 teaches the pre-closing set (contract, budget, schedule, builder). C12 teaches the monitoring set (loan monitor, change orders, lien waivers). The capstone uses all seven.

### 2.4 Module coverage, C4 to C14

| Module | First taught here | Reappears here | Count |
| --- | --- | --- | --- |
| C4 | DOC-01, DOC-02, DOC-11, DOC-35 | - | 4 |
| C5 | DOC-03, DOC-04, DOC-05, DOC-49, DOC-54 | DOC-01, DOC-02 | 7 |
| C6 | DOC-06, DOC-07, DOC-08, DOC-09, DOC-10, DOC-46, DOC-52 | DOC-11 | 8 |
| C7 | DOC-12, DOC-13, DOC-53 | DOC-05, DOC-06, DOC-07, DOC-08, DOC-11, DOC-46, DOC-52, DOC-54 | 11 |
| C8 | DOC-14, DOC-15, DOC-16, DOC-17, DOC-18, DOC-55, DOC-56, DOC-59, DOC-60, DOC-62 | DOC-01, DOC-02, DOC-03, DOC-04, DOC-05 | 15 |
| C9 | DOC-19, DOC-20, DOC-21, DOC-22, DOC-23, DOC-24, DOC-25, DOC-26, DOC-47, DOC-48, DOC-50, DOC-58 | DOC-01, DOC-08, DOC-35, DOC-49 | 16 |
| C10 | - | DOC-14, DOC-25, DOC-48 | 3 |
| C11 | DOC-27, DOC-28, DOC-51, DOC-57 | DOC-03, DOC-05, DOC-06, DOC-07, DOC-08, DOC-09, DOC-11, DOC-12, DOC-13, DOC-14, DOC-19, DOC-20, DOC-22, DOC-23, DOC-24, DOC-46, DOC-47, DOC-53, DOC-55 | 23 |
| C12 | DOC-29, DOC-30, DOC-31, DOC-32, DOC-33, DOC-34, DOC-36, DOC-37, DOC-38, DOC-39 | DOC-01, DOC-02, DOC-03, DOC-10, DOC-11, DOC-15, DOC-16, DOC-17, DOC-18, DOC-19, DOC-21, DOC-23, DOC-25, DOC-26, DOC-27, DOC-28, DOC-35, DOC-46, DOC-50, DOC-51, DOC-55, DOC-56, DOC-57, DOC-59 | 34 |
| C13 | DOC-40, DOC-41 | DOC-03, DOC-10, DOC-19, DOC-20, DOC-22, DOC-25, DOC-29, DOC-30, DOC-34, DOC-36, DOC-37, DOC-39, DOC-47, DOC-48, DOC-50, DOC-51, DOC-58 | 19 |
| C14 | DOC-42, DOC-43, DOC-44, DOC-45, DOC-61 | DOC-01, DOC-02, DOC-03, DOC-04, DOC-06, DOC-10, DOC-12, DOC-14, DOC-21, DOC-22, DOC-27, DOC-34, DOC-35, DOC-36, DOC-37, DOC-38, DOC-40, DOC-41, DOC-59, DOC-60, DOC-62 | 26 |

**Gaps (a module with no document):** none.

**Thin:** C10 introduces no new document. C10 teaches from the note excerpt (DOC-25) and the term sheet (DOC-14), first taught in C9 and C8. That meets 9.1. The State Law Table is a reference, not a source document, so it does not count. Recommendation: plant C10's defect in DOC-25 (a default rate or prepayment premium the property state bars).

C0 to C3 are outside 9.1. They may preview documents, but none is required there.

### 2.5 Capstone file (9.3)

The capstone loan file is a ground-up construction loan on a fourth, unseen deal (owner decision H.2). It draws on these 31 documents:

- DOC-03 Appraisal excerpt
- DOC-05 Purchase contract and chain of title
- DOC-06 Credit report (tri-merge)
- DOC-07 Background report
- DOC-08 Operating agreement
- DOC-09 Good-standing certificate
- DOC-12 Ownership chart and OFAC screening record
- DOC-14 Term sheet
- DOC-15 Construction contract or GMP summary
- DOC-16 Hard and soft cost budget
- DOC-17 Construction schedule
- DOC-18 Builder background report
- DOC-19 Title commitment
- DOC-20 Survey
- DOC-21 Property condition assessment summary
- DOC-22 Phase I environmental site assessment summary
- DOC-23 Insurance certificate and evidence of property insurance
- DOC-24 Flood hazard determination
- DOC-27 Closing checklist (funding conditions)
- DOC-29 Draw request
- DOC-30 Draw inspection report
- DOC-31 Loan-monitor (construction consultant) report
- DOC-32 Change order
- DOC-33 Lien waivers
- DOC-42 Credit memo
- DOC-43 Exception request and log entry
- DOC-46 Business-purpose, non-occupancy and use-of-proceeds certification
- DOC-51 Title date-down and UCC search
- DOC-53 Government ID
- DOC-56 Plans, specifications and building permit
- DOC-62 Market or feasibility study

The deal is not authored yet. Its family, numbers and planted defects wait on the owner (section 7).

## 3. Input provenance (9.6)

Where two documents give different figures for the same input, this rule decides. Formula pages state the rule beside the input.

| Conflict | Rule | Source | Documents | Deal example |
| --- | --- | --- | --- | --- |
| Value: price versus appraisal | Lower of price and appraised as-is value | F-CORE-14; COM-CON-01 (land) | Purchase contract (DOC-05); appraisal (DOC-03) | Cedar Court: $6,200,000 price, not $6,300,000 |
| Residential rent: lease versus appraisal | Lesser of lease rent and appraisal market rent | RES-DSCR-01; F-RES-23 | Lease (DOC-35); appraisal (DOC-03) | Maple Run: $2,400, not $2,450 |
| Multifamily income: rent roll versus trailing 3 months | Lesser of the two annualized | MF-GEN-05 | Rent roll (DOC-01); T-12 (DOC-02) | Cedar Court: $702,000, not $708,000 |
| Expenses: T-12 versus appraiser | Greater of the two | MF-GEN-06; COM-GEN-06 | T-12 (DOC-02); appraisal (DOC-03) | Cedar Court $310,000; Birchwood $204,000 |
| Commercial lease facts: rent roll versus lease and estoppel | Lease and estoppel control | COM-GEN-09 | Rent roll (DOC-01); estoppel (DOC-26) | Birchwood largest tenant: lease ends month 20 |
| Work in place: draw request versus inspection | Inspection controls; stored materials do not count | CORE-SVC-05; D-CONV-05 | Draw request (DOC-29); inspection (DOC-30) | Maple Run month 8: $90,000 in place; draw capped at 90% of holdback |
| Liquidity: PFS versus statements | Dated statements control; unused lines count at zero | CORE-BOR-11; CORE-BOR-13; D-CORE-06 | PFS (DOC-10); statements (DOC-11) | Dana Reyes: HELOC $75,000 counts as $0 |
| Ownership: application versus operating agreement | Signed operating agreement, multiplied through layers | CORE-BOR-03; CORE-BOR-15 | Operating agreement (DOC-08); ownership chart (DOC-12) | Marcus Hale's 8% stake does not count toward experience |
| Hard costs: budget versus contract | Signed contract plus approved change orders | MF-CON-04; COM-CON-11 | Budget (DOC-16); contract (DOC-15); change order (DOC-32) | Capstone (not yet authored) |
| Billing terms: term sheet versus note | Signed note controls | CORE-PRC-06 | Term sheet (DOC-14); note (DOC-25) | Bridges bill Actual/360 on the funded balance |
| Insurable value: loan amount versus replacement cost | Replacement cost of improvements, excluding land | CORE-INS-01; F-CORE-34 | Insurance evidence (DOC-23); appraisal cost approach (DOC-03) | No deal figure yet |
| Value in default: stabilized versus as-is | As-is value less cost to sell | CORE-SVC-08; F-CORE-42 | Updated valuation (DOC-41) | No deal figure yet |
| Purpose: certification versus file evidence | Contrary evidence wins; contradictions go to the BSA officer | CORE-BP-02; CORE-KYC-07 | Certification (DOC-46); ID (DOC-53); lease (DOC-35); site visit (DOC-50) | Maple Run: Dana lives elsewhere; no red flag |

## 4. Formula inputs by document

Each row is one input. A formula page's "Where:" list takes its source document from here.

| Formula | Source documents (input) |
| --- | --- |
| F-CORE-01 | DOC-25 (rate and day count); DOC-29 (balance after draw); DOC-34 (balance, rate, days); DOC-38 (interest collected) |
| F-CORE-05 | DOC-29 (balance after draw); DOC-34 (balance and rate); DOC-38 (per diem for partial periods); DOC-40 (balance and rate); DOC-57 (per diem) |
| F-CORE-06 | DOC-14 (commitment and points); DOC-28 (commitment) |
| F-CORE-07 | DOC-01 (market rent per unit (GPR)) |
| F-CORE-08 | DOC-01 (vacant units and delinquency) |
| F-CORE-09 | DOC-01 (other income lines) |
| F-CORE-10 | DOC-02 (operating expenses) |
| F-CORE-11 | DOC-02 (NOI); DOC-25 (debt service terms) |
| F-CORE-13 | DOC-03 (NOI and value) |
| F-CORE-14 | DOC-03 (as-is value); DOC-04 (accepted value (gate)); DOC-05 (price) |
| F-CORE-15 | DOC-05 (price within total cost); DOC-15 (total cost); DOC-16 (total cost) |
| F-CORE-21 | DOC-11 (liquid reserves) |
| F-CORE-22 | DOC-25 (extension fee); DOC-25 (commitment and extension fee) |
| F-CORE-23 | DOC-36 (value, costs, balance); DOC-41 (value and costs) |
| F-CORE-24 | DOC-11 (cash, securities and retirement balances) |
| F-CORE-25 | DOC-11 (verified liquidity); DOC-43 (liquidity shortfall) |
| F-CORE-26 | DOC-06 (liabilities); DOC-10 (total assets and liabilities) |
| F-CORE-27 | DOC-06 (track-record properties (cross-check)); DOC-07 (properties in the track record (cross-check)); DOC-08 (ownership share in each track-record entity); DOC-10 (properties and ownership shares); DOC-52 (projects and ownership shares) |
| F-CORE-28 | DOC-14 (tier and adjusters) |
| F-CORE-29 | DOC-08 (ownership links for exposure); DOC-10 (other loans with us); DOC-12 (ownership links for exposure); DOC-43 (exposure); DOC-45 (sponsor commitments) |
| F-CORE-30 | DOC-37 (balances by bucket); DOC-45 (bucket and total commitments) |
| F-CORE-31 | DOC-25 (default rate); DOC-34 (default rate); DOC-37 (default rate and days); DOC-40 (default rate and dates) |
| F-CORE-32 | DOC-34 (balance, accrued interest, fees); DOC-57 (balance, rate, days and fees) |
| F-CORE-33 | DOC-28 (funding date and rate) |
| F-CORE-34 | DOC-23 (limit and insurable value) |
| F-CORE-35 | DOC-02 (annual taxes and insurance); DOC-14 (escrow deposits); DOC-23 (annual premium); DOC-28 (taxes and insurance) |
| F-CORE-36 | DOC-03 (effective date); DOC-27 (document dates) |
| F-CORE-37 | DOC-23 (limit, insurable value, coinsurance %) |
| F-CORE-40 | DOC-14 (rate and fees); DOC-25 (fees and rate) |
| F-CORE-41 | DOC-13 (wire amount); DOC-19 (title charges in uses); DOC-27 (wire amount tie); DOC-28 (all uses) |
| F-CORE-42 | DOC-36 (as-is value less cost to sell, balance); DOC-37 (balance for charge-off); DOC-41 (fair value less cost to sell) |
| F-CORE-43 | DOC-45 (limit and commitments) |
| F-CORE-44 | DOC-03 (value and NOI) |
| F-RES-01 | DOC-05 (price); DOC-15 (hard costs); DOC-16 (all budget lines) |
| F-RES-02 | DOC-03 (ARV); DOC-04 (accepted ARV (gate)) |
| F-RES-03 | DOC-03 (as-is value) |
| F-RES-05 | DOC-05 (price); DOC-14 (initial advance) |
| F-RES-06 | DOC-29 (work in place and budget); DOC-30 (work in place); DOC-31 (work in place) |
| F-RES-07 | DOC-35 (qualifying rent) |
| F-RES-09 | DOC-05 (price); DOC-14 (cash to close); DOC-19 (closing costs); DOC-28 (price, costs, points, advance) |
| F-RES-13 | DOC-14 (commitment) |
| F-RES-16 | DOC-16 (interest reserve inputs); DOC-17 (months of construction) |
| F-RES-17 | DOC-35 (qualifying rent) |
| F-RES-18 | DOC-29 (work in place, prior draws); DOC-30 (work in place); DOC-31 (work in place) |
| F-RES-20 | DOC-15 (hard costs); DOC-16 (total project cost) |
| F-RES-21 | DOC-16 (land value and price) |
| F-RES-22 | DOC-16 (equity required) |
| F-RES-23 | DOC-03 (market rent); DOC-35 (lease rent) |
| F-RES-25 | DOC-29 (balance to finish and undisbursed funds); DOC-30 (cost to complete); DOC-31 (cost to complete); DOC-32 (revised budget) |
| F-MF-01 | DOC-01 (occupied units) |
| F-MF-02 | DOC-01 (collected rent) |
| F-MF-03 | DOC-01 (market versus contract rent) |
| F-MF-04 | DOC-02 (total expenses) |
| F-MF-05 | DOC-02 (total expenses) |
| F-MF-06 | DOC-21 (reserve per unit (cross-check)) |
| F-MF-09 | DOC-02 (expenses and other income) |
| F-MF-11 | DOC-02 (NCF) |
| F-MF-12 | DOC-02 (in-place NCF); DOC-25 (note rate); DOC-55 (strike plus spread) |
| F-MF-13 | DOC-03 (as-is and as-stabilized value) |
| F-MF-15 | DOC-15 (hard costs); DOC-16 (loan and rate); DOC-17 (months and average outstanding) |
| F-MF-16 | DOC-60 (senior and mezzanine amounts) |
| F-MF-17 | DOC-01 (in-place rent) |
| F-MF-19 | DOC-01 (rent roll total, compared with deposits) |
| F-MF-20 | DOC-02 (stabilized NCF); DOC-59 (take-out rate) |
| F-MF-22 | DOC-55 (strike) |
| F-MF-23 | DOC-21 (immediate repairs) |
| F-MF-24 | DOC-14 (spread and adjusters) |
| F-COM-01 | DOC-01 (lease end dates and rent); DOC-26 (lease terms) |
| F-COM-02 | DOC-01 (rent expiring within 24 months); DOC-26 (lease end dates) |
| F-COM-03 | DOC-02 (expenses and recoveries); DOC-21 (reserve basis (cross-check)) |
| F-COM-06 | DOC-20 (building square feet (cross-check)) |
| F-COM-08 | DOC-03 (as-stabilized value) |
| F-COM-09 | DOC-01 (rent expiring within 24 months) |
| F-COM-10 | DOC-02 (NCF); DOC-59 (take-out rate) |
| F-COM-14 | DOC-15 (hard costs); DOC-16 (total cost); DOC-17 (months and average outstanding) |
| F-COM-16 | DOC-01 (largest tenant's rent); DOC-26 (tenant rent) |
| F-COM-19 | DOC-34 (trailing NCF and debt service); DOC-36 (sweep inputs) |
| F-COM-21 | DOC-29 (work in place and retainage); DOC-30 (work in place); DOC-31 (work in place and retainage); DOC-32 (revised contract sum) |
| F-COM-24 | DOC-25 (prepayment premium schedule) |

79 formulas have at least one source document here. Formulas fed only by other formulas (for example F-CORE-19) are not listed.

## 5. Registry entries

### DOC-01: Rent roll

**What it is.** A list of every unit or suite with its tenant, lease dates and rent, as of one date. **Who produces it.** Borrower or its property manager, exported from property management software. The lender ties it to leases and bank deposits.

**Real format.** Spreadsheet or PDF export. Multifamily rolls list units; commercial rolls list suites and lease terms. No single industry form.

- Agency multifamily lenders publish their own rent roll templates [VERIFY: Fannie Mae and Freddie Mac multifamily rent roll forms; not yet checked]
- For 2-4 unit residential collateral, rent data sits in the appraisal: legacy Fannie Mae Form 1025, now the redesigned URAR Small Residential Income report [VERIFY: Freddie Mac UAD and forms redesign FAQ; checked 22 Nov 2026]

**Fields a junior analyst must read**

- As-of date, and whether it matches the T-12 end date
- Unit or suite, type and square feet
- Status: occupied, vacant, notice, model, down
- Tenant name, lease start and end, move-in date
- Market rent and contract rent; concessions and free rent
- Security deposit and balance owed (delinquency)
- Commercial only: base rent per square foot, escalations, recovery type (NNN, modified gross, gross), renewal options, share of total rent

**Defects a reviewer most often catches (planted-defect bank)**

1. Rent roll collections do not tie to bank deposits within the MF-GEN-04 tolerance for the last 3 months (fake rent roll).
2. Occupied units include model, down or long-delinquent units, so physical occupancy overstates economic occupancy.
3. Contract rent shown gross of concessions; free months appear only in the lease file.
4. A lease end date disagrees with the lease or estoppel (Birchwood: the largest tenant's lease ends in month 20).
5. Several new leases signed in the last 60 days at rents above the rest of the roll, to tenants with no deposit.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 1 |
| First taught | C4 |
| Previews | - |
| Reappears | C5, C8, C9, C12, C14 |
| Outcomes served | C04-O1, C04-O3, C05-O2, C08-O2, C09-O7, C09-O8, C12-O4, C14-O5 |
| Deals | RD-MF-01, RD-COM-01 |
| Deal facts it must match | Cedar Court: 44 of 50 units leased (88%); GPR $780,000; rent-roll collections annualized $702,000; trailing 3 months annualized $708,000. Birchwood Plaza: 11 suites, 28,000 of 40,000 sf leased (70%); base rent $420,000; largest tenant $90,000, lease ends month 20; $150,000 of rent expires within 24 months. |
| Formulas fed (input) | F-CORE-07 (market rent per unit (GPR)); F-CORE-08 (vacant units and delinquency); F-CORE-09 (other income lines); F-MF-01 (occupied units); F-MF-02 (collected rent); F-MF-03 (market versus contract rent); F-MF-17 (in-place rent); F-MF-19 (rent roll total, compared with deposits); F-COM-01 (lease end dates and rent); F-COM-02 (rent expiring within 24 months); F-COM-09 (rent expiring within 24 months); F-COM-16 (largest tenant's rent) |
| Input rule | Multifamily income is the lesser of rent-roll collections annualized and trailing 3 months annualized (MF-GEN-05): Cedar Court $702,000, not $708,000. Commercial rent is checked against leases and estoppels; where they differ, the lease and estoppel control and the difference is a finding (COM-GEN-09). |
| Policy rules | MF-GEN-04, MF-GEN-05, COM-GEN-05, COM-GEN-08, COM-GEN-09, CORE-SVC-06 |
| Fraud typologies (11.3) | FRD-05 Fake leases or rent rolls |
| Data still needed | Unit-level Cedar Court rows (unit mix, rents, concessions) and suite-level Birchwood rows that sum to the deal totals. Not in the Running Deals tab. |

### DOC-02: T-12 operating statement

**What it is.** Twelve months of income and expenses, month by month, for the property. **Who produces it.** Borrower or property manager, from the property's books. The underwriter normalizes it to underwritten NOI.

**Real format.** Spreadsheet with 12 monthly columns and a total. Cash or accrual basis, which the statement should state.

- Fannie Mae Form 216, Operating Income Statement, for 2-4 unit residential [VERIFY: Fannie Mae Selling Guide forms page; not yet checked]
- CREFC Investor Reporting Package Operating Statement Analysis Report as the normalization layout in CMBS [VERIFY: CREFC IRP v8.4, Mar 2024; crefc.org; not yet checked]

**Fields a junior analyst must read**

- Period covered and basis (cash or accrual)
- Income lines: rent, vacancy loss, concessions, other income, recoveries
- Expense lines: taxes, insurance, utilities, repairs, payroll, management, general and administrative
- Items that are capital, one-time or non-cash
- Monthly pattern: seasonality and late-year jumps
- NOI line and whether it ties to the monthly columns

**Defects a reviewer most often catches (planted-defect bank)**

1. One-time income left in revenue, such as an insurance recovery or a lease termination fee.
2. Capital work booked as repairs, or repairs capitalized below the NOI line.
3. Taxes at the seller's old assessment and insurance at the old premium, with no reset for the sale.
4. Cash-basis statement that omits an unpaid tax installment, so expenses are understated.
5. Management fee missing or below the family floor (MF-GEN-06; COM-GEN-06).

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 2 |
| First taught | C4 |
| Previews | - |
| Reappears | C5, C8, C12, C14 |
| Outcomes served | C04-O2, C04-O3, C04-O4, C05-O2, C08-O2, C12-O4, C14-O5 |
| Deals | RD-MF-01, RD-COM-01 |
| Deal facts it must match | Cedar Court: T-12 expenses $298,000; appraiser $310,000; other income $18,000; taxes $74,000 and insurance $38,000 a year. Birchwood Plaza: T-12 expenses $196,000; appraiser $204,000; recoveries $84,000. |
| Formulas fed (input) | F-CORE-10 (operating expenses); F-MF-04 (total expenses); F-MF-05 (total expenses); F-MF-09 (expenses and other income); F-COM-03 (expenses and recoveries); F-CORE-35 (annual taxes and insurance); F-CORE-11 (NOI); F-MF-12 (in-place NCF); F-MF-11 (NCF); F-MF-20 (stabilized NCF); F-COM-10 (NCF) |
| Input rule | Expenses are the greater of the T-12 and the appraiser's estimate (MF-GEN-06; COM-GEN-06): Cedar Court $310,000, Birchwood $204,000. |
| Policy rules | MF-GEN-06, COM-GEN-06, COM-GEN-07, CORE-SVC-06 |
| Fraud typologies (11.3) | FRD-05 Fake leases or rent rolls |
| Data still needed | Monthly line items for both deals that sum to the stated totals. |

### DOC-03: Appraisal excerpt

**What it is.** Key pages of the appraiser's report: value conclusions, premises, approaches, comparables and certification. **Who produces it.** State-certified appraiser engaged by the lender through an appraisal management company (CORE-VAL-01). MAI-designated for multifamily and commercial (MF-GEN-08; COM-GEN-13).

**Real format.** 1-4 unit: the redesigned Uniform Residential Appraisal Report, with a rental section. Income property: a narrative report.

- Redesigned URAR under UAD 3.6, mandatory for GSE submissions from 2 Nov 2026 [VERIFY: Fannie Mae UAD 3.6 FAQ; checked 22 Nov 2026; a later exception date was reported but not confirmed]
- Single Family Comparable Rent Schedule (legacy Form 1007), now a URAR rental section; the legacy form is accepted only in limited cases [VERIFY: Freddie Mac UAD and forms redesign FAQ; checked 22 Nov 2026]
- Federally related transactions: appraisals follow USPAP and the agencies' minimum standards [VERIFY: 12 CFR 34.44; not yet checked]. Our model lender is a non-bank, so this is a benchmark.

**Fields a junior analyst must read**

- Client and intended user (the lender, not the borrower)
- Effective date versus report date
- Value premises: as-is, as-complete or as-stabilized, ARV
- Extraordinary assumptions and hypothetical conditions
- Income approach: NOI, cap rate, vacancy and expenses used
- Sales comparison grid: dates, distance, condition, adjustments
- Cost approach where used (new or heavily renovated property)
- Market rent (residential rental section, or the commercial rent survey)
- Reconciliation and final value; exposure time
- Certification, license number and expiry

**Defects a reviewer most often catches (planted-defect bank)**

1. Client is the borrower or a broker: a borrower-supplied appraisal is rejected (CORE-VAL-01).
2. Effective date more than 120 days before closing (CORE-VAL-02, F-CORE-36).
3. ARV comparables are unrenovated, outside the submarket, or listings rather than sales.
4. An as-stabilized value is presented as as-is, or a hypothetical condition is not disclosed.
5. Appraiser's NOI uses rents above the rent roll with no explanation.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 3 |
| First taught | C5 |
| Previews | - |
| Reappears | C8, C11, C12, C13, C14 |
| Outcomes served | C05-O1, C05-O3, C05-O4, C05-O6, C05-O8, C08-O1, C11-O1, C12-O3, C13-O2, C14-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run: as-is $310,000; ARV $520,000; market rent $2,400 a month; effective 12 days before closing. Cedar Court: as-is $6,300,000; as-stabilized $8,600,000. Birchwood Plaza: as-is $4,500,000; as-stabilized $6,000,000; stabilized cap rate on NOI 8.00%. |
| Formulas fed (input) | F-CORE-13 (NOI and value); F-CORE-14 (as-is value); F-CORE-36 (effective date); F-RES-02 (ARV); F-RES-03 (as-is value); F-RES-23 (market rent); F-MF-13 (as-is and as-stabilized value); F-COM-08 (as-stabilized value); F-CORE-44 (value and NOI) |
| Input rule | Value is the lower of price and appraised as-is value (F-CORE-14): Maple Run $300,000, Cedar Court $6,200,000, Birchwood $4,400,000. DSCR rent is the lesser of lease rent and appraisal market rent (RES-DSCR-01, F-RES-23): Maple Run $2,400. |
| Policy rules | CORE-VAL-01, CORE-VAL-02, CORE-VAL-03, MF-GEN-08, COM-GEN-13, RES-GEN-06 |
| Fraud typologies (11.3) | FRD-03 Inflated or broker-supplied after-repair value, FRD-07 Related-party appraiser or contractor |
| Data still needed | Comparable grids and approach detail for each deal. ARV and rent are labelled course assumptions in the Running Deals tab. |

### DOC-04: Appraisal review (desk review)

**What it is.** A second appraiser's or internal reviewer's check of whether the appraisal is credible and usable. **Who produces it.** Internal review appraiser or third-party reviewer, independent of loan production (CORE-VAL-03).

**Real format.** Review memo or review form: scope, checks by approach, deficiencies, conclusion.

- USPAP Standard 3 sets appraisal review development and reporting [VERIFY: USPAP current edition, The Appraisal Foundation; not yet checked]
- Reviewer independence from production [VERIFY: Interagency Appraisal and Evaluation Guidelines, Section XV; cited in C5 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Reviewer name, credential and reporting line
- Scope: desk or field; report version and effective date reviewed
- Checks on each approach and on the comparables
- Deficiencies, each with its effect on value
- Conclusion: accept, revise or reject
- Whether the reviewer states a value opinion of their own

**Defects a reviewer most often catches (planted-defect bank)**

1. Reviewer reports to the loan officer or was paid by production.
2. Review accepts a comparable that the appraisal excerpt shows is unrenovated or stale.
3. Review checks a different report version or effective date than the one in the file.
4. Review of a flip appraisal checks ARV but not the as-is value that sizes the day-one advance.
5. Review is dated after closing.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 4 |
| First taught | C5 |
| Previews | - |
| Reappears | C8, C14 |
| Outcomes served | C05-O7, C08-O1, C14-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Reviews the DOC-03 report for each deal. No review exists in the Running Deals tab. |
| Formulas fed (input) | F-CORE-14 (accepted value (gate)); F-RES-02 (accepted ARV (gate)) |
| Input rule | Only a value the review accepts may enter a formula. A rejected appraisal leaves the value input blank, not estimated. |
| Policy rules | CORE-VAL-03 |
| Fraud typologies (11.3) | FRD-03 Inflated or broker-supplied after-repair value |
| Data still needed | Review text and findings, written to match DOC-03. |

### DOC-05: Purchase contract and chain of title

**What it is.** The signed contract to buy the property, with any assignment, read against the recorded deeds. **Who produces it.** Buyer and seller, often through brokers or a wholesaler. The title company supplies the deed history.

**Real format.** Purchase and sale agreement with addenda; assignment of contract; deed history from the title search.

- No standard national form; state realtor forms are common for 1-4 units [VERIFY: Ohio REALTORS purchase contract; not yet checked]

**Fields a junior analyst must read**

- Buyer entity and seller names
- Price, deposit, credits and seller concessions
- Assignment and assignment fee
- Closing date and contingencies
- Seller's acquisition date and price on the deed history
- Relationship between buyer and seller

**Defects a reviewer most often catches (planted-defect bank)**

1. Assignment fee lifts the price well above the seller's recent purchase price (rapid flip chain).
2. Seller credits make the real price lower than the contract price.
3. Seller is related to the borrower, so the deal is not arm's length.
4. Buyer on the contract differs from the borrowing entity.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; 11.3 |
| First taught | C5 |
| Previews | - |
| Reappears | C7, C8, C11 |
| Outcomes served | C05-O4, C07-O3, C08-O1, C11-O2 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run: $300,000 arm's-length contract with an unrelated seller. Cedar Court price $6,200,000. Birchwood Plaza price $4,400,000. |
| Formulas fed (input) | F-CORE-14 (price); F-CORE-15 (price within total cost); F-RES-01 (price); F-RES-05 (price); F-RES-09 (price) |
| Input rule | Price is the contract price net of seller credits. Where an assignment adds a fee, test value against the price paid by the end buyer and flag the chain. |
| Policy rules | CORE-VAL-01 |
| Fraud typologies (11.3) | FRD-04 Rapid flip chains (title chain, seasoning), FRD-01 Straw borrower |
| Data still needed | Contract terms beyond price, and a deed history, for each deal. |

### DOC-06: Credit report (tri-merge)

**What it is.** A merged personal credit report on each guarantor, from the three national bureaus. **Who produces it.** A credit reporting agency or reseller, pulled by the lender with a permissible purpose.

**Real format.** Tri-merge report: scores, identity, addresses, tradelines, public records, inquiries, alerts.

- Permissible purpose for a report on a guarantor [VERIFY: 15 U.S.C. 1681b(a)(3)(A); cited in C6 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Report date
- Three scores and the mid-score (CORE-BOR-07)
- Name, SSN match and address history
- Current address versus the subject property
- Mortgage tradelines and late payments
- Public records, collections, recent inquiries
- Fraud and identity alerts

**Defects a reviewer most often catches (planted-defect bank)**

1. Report older than 90 days at closing (CORE-BOR-07).
2. Subject property shows as the guarantor's current address (occupancy red flag, CORE-BP-02).
3. Highest score used instead of the mid-score.
4. Mortgages on the report that are missing from the schedule of real estate owned.
5. Foreclosure or short sale inside 48 months (CORE-BOR-08), or an SSN mismatch alert.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 8 |
| First taught | C6 |
| Previews | - |
| Reappears | C7, C11, C14 |
| Outcomes served | C06-O2, C07-O3, C11-O1, C14-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Dana Reyes 705 / 712 / 730 (mid 712); Sam Okafor 640 / 655 / 668 (mid 655). Marcus Hale mid 728; Priya Nand mid 702. Dana Whitlow mid 742; Leo Marsh mid 690. |
| Formulas fed (input) | F-CORE-26 (liabilities); F-CORE-27 (track-record properties (cross-check)) |
| Input rule | Mid-score is the middle of three scores, or the lower of two (CORE-BOR-07). Liabilities on the PFS must include every debt on the credit report. |
| Policy rules | CORE-BOR-06, CORE-BOR-07, CORE-BOR-08, CORE-BP-02, RES-DSCR-03, RES-GU-08 |
| Fraud typologies (11.3) | FRD-02 Occupancy fraud, FRD-01 Straw borrower |
| Data still needed | Tradelines and addresses for each guarantor. Only scores exist in the Running Deals tab. |

### DOC-07: Background report

**What it is.** A public-records search on each guarantor and the borrower: criminal, bankruptcy, foreclosure, liens, judgments, litigation. **Who produces it.** A background search vendor, ordered by the lender (CORE-KYC-03).

**Real format.** Vendor report with search scope, lookback period, sources and hits.

- Fair-chance hiring laws do not govern credit decisions, but state rules on criminal history should be checked [VERIFY: CORE-BOR-09 tag; not yet checked]

**Fields a junior analyst must read**

- Subject identifiers: name, aliases, date of birth
- Lookback period (10 years, CORE-KYC-03)
- Criminal records
- Bankruptcy, foreclosure, deed in lieu, short sale
- Liens, judgments and their status
- Active litigation
- Affiliated entities and property records

**Defects a reviewer most often catches (planted-defect bank)**

1. Search run on a name match with a different date of birth, or without aliases.
2. A lien shows as open with no release in the file (Maple Run: the 2019 lien is released; the file must prove it).
3. Active litigation or judgment over the CORE-BOR-10 threshold not resolved before closing.
4. Affiliated entity with a foreclosure that is missing from the track record.
5. Lookback shorter than 10 years, or the borrowing LLC was not searched.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 8 |
| First taught | C6 |
| Previews | - |
| Reappears | C7, C11 |
| Outcomes served | C06-O2, C07-O3, C11-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Dana Reyes: one $8,000 state tax lien, filed 2019, paid and released 2020; no bankruptcy, foreclosure, felony or open litigation. Sam Okafor: no adverse items. |
| Formulas fed (input) | F-CORE-27 (properties in the track record (cross-check)) |
| Input rule | Where the background report and the borrower's disclosure differ, the report controls until the borrower documents otherwise. |
| Policy rules | CORE-KYC-03, CORE-BOR-08, CORE-BOR-09, CORE-BOR-10 |
| Fraud typologies (11.3) | FRD-01 Straw borrower |
| Data still needed | Report pages for each guarantor. Only Maple Run has background facts in the Running Deals tab. |

### DOC-08: Operating agreement

**What it is.** The borrowing LLC's governing contract: members, percentages, managers and authority. **Who produces it.** Borrower's counsel; signed by the members. The lender's counsel reviews it.

**Real format.** LLC operating agreement under the state LLC act, with a borrowing resolution or consent.

- Ohio Revised Code chapter 1706; N.C. G.S. chapter 57D; Indiana Code 23-18.1 [VERIFY: state code sites; not yet checked]

**Fields a junior analyst must read**

- Members and ownership percentages
- Managing member and authority to borrow and sign
- Purpose clause
- Single-purpose entity covenants (MF and COM)
- Transfer and admission rules
- Signatures, amendments and date

**Defects a reviewer most often catches (planted-defect bank)**

1. Percentages differ from the application, hiding a 20% owner who must guarantee and be screened (CORE-BOR-03; CORE-KYC-01).
2. Signer lacks authority; the agreement needs a member consent that is missing.
3. Purpose clause is not real estate, or the entity is not single-purpose where required (CORE-BOR-02; COM-GEN-04).
4. Unsigned copy, or an older version with later amendments missing.
5. A member is a trust, with no look-through to the people behind it.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 9 |
| First taught | C6 |
| Previews | - |
| Reappears | C7, C9, C11 |
| Outcomes served | C06-O1, C06-O7, C07-O2, C09-O1, C11-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Harborline Holdings LLC (Ohio, 2021): Dana Reyes 60%, Sam Okafor 40%. Cedar Court Partners LLC (NC SPE): Marcus Hale 60%, Priya Nand 40%. Birchwood Plaza LLC (Indiana SPE): Dana Whitlow 75%, Leo Marsh 25%. |
| Formulas fed (input) | F-CORE-27 (ownership share in each track-record entity); F-CORE-29 (ownership links for exposure) |
| Input rule | Ownership comes from the signed operating agreement, multiplied through each layer. The application is a claim to test, not a source. |
| Policy rules | CORE-BOR-01, CORE-BOR-02, CORE-BOR-03, CORE-BOR-15, CORE-KYC-02, COM-GEN-04, CORE-CLS-01 |
| Fraud typologies (11.3) | FRD-01 Straw borrower |
| Data still needed | Agreement text. Ownership percentages exist in the Running Deals tab. |

### DOC-09: Good-standing certificate

**What it is.** The state's certificate that the entity exists and is current on its filings. **Who produces it.** The Secretary of State of the formation state (and of the property state, if different).

**Real format.** One-page state certificate with entity name, number, status and issue date.

- Certificate names vary by state (good standing, existence) [VERIFY: Ohio, North Carolina and Indiana Secretary of State sites; not yet checked]

**Fields a junior analyst must read**

- Exact entity name and number
- State of formation
- Status
- Issue date
- Foreign registration in the property state, if formed elsewhere

**Defects a reviewer most often catches (planted-defect bank)**

1. Name differs from the operating agreement or title commitment by a word or suffix.
2. Status is inactive, forfeited or revoked.
3. Entity formed in another state with no foreign registration in the property state.
4. Certificate issued for a similarly named, different entity.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 9 |
| First taught | C6 |
| Previews | - |
| Reappears | C11 |
| Outcomes served | C06-O1, C11-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Harborline Holdings LLC is in good standing (Running Deals). The other two are newly formed SPEs. |
| Formulas fed (input) | None (gate document) |
| Input rule | Not a formula input. A gate for CORE-BOR-01 and CORE-CLS-01. |
| Policy rules | CORE-BOR-01, CORE-CLS-01 |
| Fraud typologies (11.3) | - |
| Data still needed | None beyond entity names. The policy has no age limit for this certificate (open item). |

### DOC-10: Personal financial statement and schedule of real estate owned

**What it is.** The guarantor's own statement of assets, liabilities and properties owned. **Who produces it.** The guarantor, on the lender's form, signed and dated.

**Real format.** Lender PFS form with a schedule of real estate owned (SREO).

- No federal form for private lenders. SBA Form 413 is a familiar public example [VERIFY: SBA Form 413; sba.gov; not yet checked]

**Fields a junior analyst must read**

- Date signed
- Liquid assets by type
- Retirement assets
- Real estate at stated value
- Liabilities and contingent liabilities (guaranties given)
- SREO: each property, ownership share, value, debt, payment, rent

**Defects a reviewer most often catches (planted-defect bank)**

1. Mortgages on the credit report are missing from the SREO.
2. Values on the SREO exceed recent purchase prices with no support.
3. Contingent liabilities left blank while the guarantor has guaranteed other loans.
4. Statement is unsigned or old (no policy age rule yet: P-C6-3).

| Item | Value |
| --- | --- |
| Quality bar | 9.6 |
| First taught | C6 |
| Previews | - |
| Reappears | C12, C13, C14 |
| Outcomes served | C06-O4, C06-O5, C12-O5, C13-O6, C14-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Dana Reyes: total assets $1,150,000; total liabilities $610,000. Marcus Hale net worth $6,800,000. Dana Whitlow net worth $5,200,000. |
| Formulas fed (input) | F-CORE-26 (total assets and liabilities); F-CORE-27 (properties and ownership shares); F-CORE-29 (other loans with us) |
| Input rule | Liquid assets come from statements (DOC-11), not the PFS. The PFS supplies net worth, tested against the credit report and SREO. |
| Policy rules | CORE-BOR-14, CORE-BOR-15 |
| Fraud typologies (11.3) | FRD-06 Altered bank statements, FRD-10 Double-pledged collateral |
| Data still needed | SREO rows and contingent guaranties for Marcus Hale and Dana Whitlow (P-C6-4). |

### DOC-11: Bank and brokerage statements

**What it is.** The guarantor's two most recent monthly account statements, used to verify liquidity. **Who produces it.** The guarantor's bank or broker; delivered by the guarantor or by a verification service.

**Real format.** Monthly statement PDF: account holder, period, balances, transactions.

- No standard form. Direct verification services are market practice [VERIFY: market practice; not yet checked]

**Fields a junior analyst must read**

- Account holder name
- Statement period and date
- Ending and average balance
- Large recent deposits and their source
- Account type (cash, securities, retirement)

**Defects a reviewer most often catches (planted-defect bank)**

1. Statements older than 60 days at closing, or only one month (CORE-BOR-13).
2. Fonts, totals or running balances do not add up (altered statement).
3. A large deposit days before the statement with no source (borrowed funds).
4. Account held by a different person or entity.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; 11.3 |
| First taught | C4 |
| Previews | - |
| Reappears | C6, C7, C11, C12 |
| Outcomes served | C04-O3, C06-O3, C06-O4, C07-O3, C11-O1, C12-O4 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Dana Reyes: cash $95,000; brokerage $40,000; vested 401(k) $60,000; unused HELOC $75,000. Marcus Hale: cash $650,000; securities $400,000. Dana Whitlow: cash $550,000; securities $300,000. |
| Formulas fed (input) | F-CORE-24 (cash, securities and retirement balances); F-CORE-25 (verified liquidity); F-CORE-21 (liquid reserves) |
| Input rule | Unused credit lines count at zero (D-CORE-06). Securities and retirement balances take the F-CORE-24 haircut. |
| Policy rules | CORE-BOR-11, CORE-BOR-12, CORE-BOR-13 |
| Fraud typologies (11.3) | FRD-06 Altered bank statements |
| Data still needed | Statement pages that match the balances above. |

### DOC-12: Ownership chart and OFAC screening record

**What it is.** A chart of every ownership layer down to people, with the sanctions screening result for each. **Who produces it.** Originator builds the chart; compliance runs and records the screening.

**Real format.** Org chart plus a screening log: name screened, list, date and time, result, resolution.

- OFAC regulations and the 50 Percent Rule [VERIFY: 31 CFR Part 501; treasury.gov; cited in CORE-KYC-01; not yet checked here]
- Beneficial ownership customer due diligence rule [VERIFY: 31 CFR 1010.230; CORE-KYC-02 tag; not yet checked here]

**Fields a junior analyst must read**

- Each entity layer and percentage
- Control person
- Trusts: trustee and beneficiaries
- Names screened, list version, date and time
- Potential matches and how each was cleared

**Defects a reviewer most often catches (planted-defect bank)**

1. A middle layer is missing, so a 20% indirect owner is not screened.
2. Screening predates a name change or was not re-run before funding (CORE-KYC-01; CORE-CLS-03).
3. A potential match closed with no note of why it is a false positive.
4. Trust shown as owner with no trustee or beneficiary named.

| Item | Value |
| --- | --- |
| Quality bar | 11.1 |
| First taught | C7 |
| Previews | - |
| Reappears | C11, C14 |
| Outcomes served | C07-O2, C11-O1, C14-O8 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Cedar Court and Birchwood equity also comes from passive investors in a separate holding LLC; their percentages are not in the Running Deals tab. |
| Formulas fed (input) | F-CORE-29 (ownership links for exposure) |
| Input rule | The chart is built from operating agreements (DOC-08), never from the application alone. |
| Policy rules | CORE-KYC-01, CORE-KYC-02, CORE-BOR-03, CORE-EXC-03 |
| Fraud typologies (11.3) | FRD-01 Straw borrower |
| Data still needed | Holding-LLC investor list for Cedar Court and Birchwood. F-CORE-38 and -39 are reserved for C7 and not yet defined. |

### DOC-13: Wire instructions and funding request

**What it is.** The closing agent's instructions for where the lender sends loan funds, and the request to release them. **Who produces it.** Closing agent (title agent or attorney); verified by the lender's closer.

**Real format.** Letter or secure-portal instructions; the lender's funding request and callback record.

- Name and account number mismatch: the beneficiary's bank may rely on the number [VERIFY: UCC 4A-207(b)(1); cited in C11 blueprint; not yet checked here]
- ALTA closing protection letter [VERIFY: ALTA CPL form; cited in C11 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Beneficiary name and account
- Bank and ABA routing number
- How and when received
- Match to the CPL agent's escrow account
- Callback: number used, person, time
- Preparer and releaser

**Defects a reviewer most often catches (planted-defect bank)**

1. Instructions changed by email the day before funding.
2. Beneficiary name and account number belong to different parties.
3. Sender's email domain differs by one character from the agent's.
4. Callback made to the number in the email, not the number on file.
5. One person prepared and released the wire (CORE-CLS-03).

| Item | Value |
| --- | --- |
| Quality bar | 11.3 |
| First taught | C7 |
| Previews | - |
| Reappears | C11 |
| Outcomes served | C07-O4, C11-O3, C11-O4 |
| Deals | RD-RES-01, RD-COM-01 |
| Deal facts it must match | Maple Run net funding wire $233,738.33 (F-CORE-41). |
| Formulas fed (input) | F-CORE-41 (wire amount) |
| Input rule | The wire amount must equal the settlement statement (DOC-28), not the funding request. |
| Policy rules | CORE-CLS-02, CORE-CLS-03, CORE-KYC-05, CORE-KYC-07 |
| Fraud typologies (11.3) | FRD-09 Closing wire fraud |
| Data still needed | Agent names and fictional account details for each deal. |

### DOC-14: Term sheet

**What it is.** The lender's non-binding summary of proposed loan terms, issued before full underwriting. **Who produces it.** Originator, from the lender's template; approved for issue by credit where required.

**Real format.** Two to four pages: parties, amount, advances, rate, fees, term, recourse, escrows, conditions, expiry.

- No standard form. Non-binding language and a deposit clause are market practice [VERIFY: market practice; not yet checked]

**Fields a junior analyst must read**

- Borrower and guarantors
- Total commitment, initial advance, holdbacks
- Rate, index, spread, cap; points and fees
- Term and extensions
- Recourse and guaranties
- Prepayment
- Escrows and reserves
- Cash to close
- Conditions and expiry

**Defects a reviewer most often catches (planted-defect bank)**

1. Cash to close does not add up (Maple Run $74,100; Cedar Court $2,240,066.67; Birchwood $1,735,200).
2. Points computed on the initial advance, not the commitment (F-CORE-06).
3. Rate leaves out a grid adjuster (Maple Run: +0.25% at the 85% LTC cap).
4. Recourse or completion guaranty wrong for the product (CORE-DOC-01 to -03).
5. Issued before the State Law Table check or OFAC screen (CORE-BP-03; CORE-KYC-01).

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 13 |
| First taught | C8 |
| Previews | - |
| Reappears | C10, C11, C14 |
| Outcomes served | C08-O3, C08-O5, C08-O8, C10-O3, C11-O1, C14-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run: $340,000 commitment; $240,000 initial; $100,000 holdback; 10.250%; 1.50 points ($5,100). Cedar Court: $5,140,000; $4,340,000 initial; SOFR + 4.00%; 1.00% fee ($51,400). Birchwood Plaza: $3,520,000; $2,860,000 initial; SOFR + 4.00%; 1.00% fee ($35,200). |
| Formulas fed (input) | F-CORE-06 (commitment and points); F-CORE-28 (tier and adjusters); F-MF-24 (spread and adjusters); F-RES-05 (initial advance); F-RES-09 (cash to close); F-RES-13 (commitment); F-CORE-35 (escrow deposits); F-CORE-40 (rate and fees) |
| Input rule | The term sheet is an output, not a source. Its numbers must be recomputed from the source documents before approval. |
| Policy rules | CORE-PRC-01, CORE-PRC-02, CORE-PRC-03, CORE-BP-03, CORE-DOC-01, CORE-DOC-02, CORE-DOC-03 |
| Fraud typologies (11.3) | - |
| Data still needed | None: all terms are in the Running Deals tab. |

### DOC-15: Construction contract or GMP summary

**What it is.** The contract between owner and general contractor, or a summary of its price, scope and risk terms. **Who produces it.** Owner and general contractor; reviewed by the lender's construction consultant and counsel.

**Real format.** Standard-form owner-contractor agreement, or a lender's one-page GMP summary of it.

- AIA A102 (cost of the work plus a fee, with a guaranteed maximum price) and A101 (stipulated sum) [VERIFY: AIA Contract Documents; aiacontracts.com; not yet checked]

**Fields a junior analyst must read**

- Parties and the contractor's license
- Contract sum or GMP; fee; general conditions
- Contractor contingency versus owner contingency
- Allowances and exclusions
- Retainage terms
- Substantial completion date; liquidated damages
- Bonds and insurance
- Change order procedure
- Contractor's consent to assignment to the lender

**Defects a reviewer most often catches (planted-defect bank)**

1. GMP excludes work the budget assumes is in the contract, so the budget has a gap.
2. Contractor is an affiliate of the borrower and this is not disclosed.
3. No payment and performance bond and no GMP (COM-CON-11).
4. Completion date falls after loan maturity or after the interest reserve runs out.
5. Unsigned, or dated after closing.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C8 and C12 deepening |
| First taught | C8 |
| Previews | - |
| Reappears | C12, Capstone |
| Outcomes served | C08-O4, C12-O1 |
| Deals | CAP-01 |
| Deal facts it must match | Capstone not yet authored. |
| Formulas fed (input) | F-RES-01 (hard costs); F-RES-20 (hard costs); F-COM-14 (hard costs); F-MF-15 (hard costs); F-CORE-15 (total cost) |
| Input rule | Hard costs come from the signed contract plus approved change orders. The borrower's budget is checked against it; the contract controls. |
| Policy rules | MF-CON-04, COM-CON-11, RES-GU-10, CORE-DOC-03 |
| Fraud typologies (11.3) | FRD-07 Related-party appraiser or contractor |
| Data still needed | Whole document, once the capstone deal is authored. |

### DOC-16: Hard and soft cost budget

**What it is.** Line-item budget for the project: land, hard costs, soft costs, contingency, interest reserve, and who funds each. **Who produces it.** Borrower or developer; checked by the lender's construction consultant (plan and cost review).

**Real format.** Sources and uses table with a line-item budget, often in the same lines as the schedule of values.

- Line-item budget against a schedule of values is market practice [VERIFY: OCC Comptroller's Handbook, CRE Lending v2.0, 'Underwriting ADC Loans'; cited in needs analysis; not yet checked here]

**Fields a junior analyst must read**

- Land at cost and at appraised value
- Hard costs by trade
- Hard-cost contingency
- Soft costs: design, permits, legal, insurance, taxes, financing fees
- Interest reserve
- Developer fee
- Equity and loan funding by line; equity-first order

**Defects a reviewer most often catches (planted-defect bank)**

1. Contingency below 10% of hard costs, or computed on total cost (RES-GU-05; MF-CON-04; COM-CON-04).
2. Interest reserve missing, or sized at the note rate where COM-CON-06 needs strike + spread.
3. Land carried at contract price above appraised value (COM-CON-01).
4. Soft costs missing: builder's risk, property taxes during construction.
5. Developer fee counted as borrower equity.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C8 deepening |
| First taught | C8 |
| Previews | - |
| Reappears | C12, Capstone |
| Outcomes served | C08-O4, C12-O1 |
| Deals | CAP-01, RD-RES-01 |
| Deal facts it must match | Rehab variant, Maple Run: hard costs $90,000; contingency $9,000; permits $1,000; total $100,000. Capstone not yet authored. |
| Formulas fed (input) | F-RES-01 (all budget lines); F-RES-16 (interest reserve inputs); F-RES-20 (total project cost); F-RES-21 (land value and price); F-RES-22 (equity required); F-MF-15 (loan and rate); F-COM-14 (total cost); F-CORE-15 (total cost) |
| Input rule | Land is the lower of cost and appraised value (COM-CON-01). Hard costs tie to the contract (DOC-15). Contingency is tested on hard costs only. |
| Policy rules | RES-GU-02, RES-GU-04, RES-GU-05, RES-GU-06, RES-GU-07, MF-CON-01, MF-CON-04, MF-CON-05, COM-CON-01, COM-CON-04, COM-CON-06, RES-FF-05, RES-FF-06 |
| Fraud typologies (11.3) | FRD-08 Draw fraud |
| Data still needed | Capstone budget. Maple Run rehab budget exists. |

### DOC-17: Construction schedule

**What it is.** The contractor's timeline from permits to certificate of occupancy, with the expected draw curve. **Who produces it.** General contractor; reviewed by the construction consultant.

**Real format.** Gantt or critical-path schedule with milestones and a monthly draw forecast.

- No standard form; critical-path scheduling is industry practice [VERIFY: industry practice; not yet checked]

**Fields a junior analyst must read**

- Start date and permit milestones
- Foundation, framing, dry-in, systems, finishes
- Critical path and float
- Substantial completion and certificate of occupancy
- Monthly draw forecast (S-curve)
- Lease-up start, where income-producing

**Defects a reviewer most often catches (planted-defect bank)**

1. Completion falls after maturity, so an extension is assumed from day one.
2. First construction draw scheduled before permits are issued (RES-GU-04).
3. Draw curve front-loads spending, so the 60% average outstanding assumption fails (MF-CON-05; COM-CON-06).
4. No float on the critical path.
5. Leasing income starts before the certificate of occupancy.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C8 deepening |
| First taught | C8 |
| Previews | - |
| Reappears | C12, Capstone |
| Outcomes served | C08-O4, C12-O1 |
| Deals | CAP-01 |
| Deal facts it must match | Capstone not yet authored. |
| Formulas fed (input) | F-RES-16 (months of construction); F-MF-15 (months and average outstanding); F-COM-14 (months and average outstanding) |
| Input rule | The interest reserve uses the policy's 60% average outstanding. The schedule tests whether that holds; it does not replace it. |
| Policy rules | RES-GU-04, RES-GU-09, MF-CON-05, COM-CON-06, COM-CON-09 |
| Fraud typologies (11.3) | - |
| Data still needed | Whole document, once the capstone deal is authored. |

### DOC-18: Builder background report

**What it is.** The lender's check on the general contractor: license, insurance, record, liens, litigation and capacity. **Who produces it.** Lender's credit staff or construction consultant, from public records and references.

**Real format.** Short report or checklist with license lookup, insurance certificate, project list and search results.

- Contractor licensing is state law [VERIFY: Ohio, North Carolina and Indiana contractor licensing boards; not yet checked]
- General liability evidence on ACORD 25 [VERIFY: ACORD forms FAQ; acord.org; checked 22 Nov 2026 via search summary]

**Fields a junior analyst must read**

- License number, class and status
- General liability and workers' compensation evidence
- Years in business; completed projects of similar size
- Current backlog
- Mechanics' liens filed by subcontractors on past jobs
- Litigation, bankruptcy
- Relationship to the borrower

**Defects a reviewer most often catches (planted-defect bank)**

1. License expired, or for a different trade or state.
2. Several subcontractor liens on recent jobs, a sign the builder pays late.
3. Builder owned by a guarantor's relative (related party), not disclosed.
4. Liability insurance lapsed between the certificate date and closing.
5. Project several times larger than any the builder has finished.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C8 and C12 deepening |
| First taught | C8 |
| Previews | - |
| Reappears | C12, Capstone |
| Outcomes served | C08-O4, C12-O1 |
| Deals | CAP-01 |
| Deal facts it must match | Capstone not yet authored. |
| Formulas fed (input) | None (gate document) |
| Input rule | Not a formula input. A gate for RES-GU-10, MF-CON-04 and COM-CON-11. |
| Policy rules | RES-GU-10, MF-CON-04, COM-CON-11 |
| Fraud typologies (11.3) | FRD-07 Related-party appraiser or contractor |
| Data still needed | Whole document, once the capstone deal is authored. |

### DOC-19: Title commitment

**What it is.** The title insurer's promise to issue a lender's policy once listed requirements are met, subject to listed exceptions. **Who produces it.** Title insurer or its agent.

**Real format.** ALTA Commitment for Title Insurance: Schedule A, Schedule B Part I (Requirements), Schedule B Part II (Exceptions).

- ALTA Commitment for Title Insurance, 2021 v. 01.00 (07-01-2021); not valid without its notice, conditions and schedules [VERIFY: ALTA 2021 Commitment form, Florida OIR filed copy; checked 22 Nov 2026]
- Endorsements named in policy: ALTA 32-series, ALTA 33 at each draw, ALTA 14 for other future advances (CORE-CLS-06) [VERIFY: ALTA endorsement forms; not yet checked]

**Fields a junior analyst must read**

- Commitment date and number
- Proposed insured lender and policy amount
- Vested owner and legal description
- Schedule B-I: payoffs, deeds, authority documents, lien releases
- Schedule B-II: standard exceptions, taxes, easements, recorded leases, liens, judgments
- Endorsements requested

**Defects a reviewer most often catches (planted-defect bank)**

1. Policy amount equals the initial funding, not the full commitment (CORE-CLS-06; Maple Run $340,000, not $240,000).
2. A mechanics' lien or judgment in B-II with no matching release in B-I.
3. Vested owner is not the seller on the contract, or took title weeks ago at a lower price.
4. Proposed insured or borrower name differs from the operating agreement.
5. Standard survey exception left in although a survey was ordered.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 5 |
| First taught | C9 |
| Previews | - |
| Reappears | C11, C12, C13, Capstone |
| Outcomes served | C09-O3, C11-O5, C12-O1, C13-O4 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run closing costs $9,000 include title. Policy amounts must equal commitments: $340,000; $5,140,000; $3,520,000. |
| Formulas fed (input) | F-CORE-41 (title charges in uses); F-RES-09 (closing costs) |
| Input rule | The deed history in the commitment is checked against the purchase contract (DOC-05). Where they differ, the recorded record controls and the gap is a finding. |
| Policy rules | CORE-CLS-01, CORE-CLS-06, CORE-SVC-05, CORE-DEF-04 |
| Fraud typologies (11.3) | FRD-04 Rapid flip chains (title chain, seasoning), FRD-10 Double-pledged collateral |
| Data still needed | Schedules for each deal. None in the Running Deals tab. |

### DOC-20: Survey

**What it is.** A licensed surveyor's drawing of the boundaries, improvements, easements and encroachments. **Who produces it.** Licensed land surveyor, certified to the lender and title insurer.

**Real format.** Income property: ALTA/NSPS Land Title Survey with chosen Table A items. 1-4 units: often a boundary survey, or none.

- 2026 Minimum Standard Detail Requirements for ALTA/NSPS Land Title Surveys, effective 23 Feb 2026 [VERIFY: alta.org; read via law-firm summaries, primary text not opened; checked 22 Nov 2026]
- Residential product table requires title, survey and flood for some products (Model Credit Policy, residential table)

**Fields a junior analyst must read**

- Certification parties and title commitment number
- Field work date
- Legal description
- Boundaries and area
- Easements plotted with recording references
- Encroachments
- Flood zone note
- Zoning setbacks and parking count, where ordered
- Access to a public road

**Defects a reviewer most often catches (planted-defect bank)**

1. Certification omits the lender or cites a different commitment.
2. Legal description or area differs from Schedule A.
3. An encroachment on the drawing is not an exception in Schedule B-II.
4. Survey flood zone differs from the flood determination.
5. Old field date; newer improvements missing.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 6 |
| First taught | C9 |
| Previews | - |
| Reappears | C11, C13 |
| Outcomes served | C09-O3, C11-O1, C13-O4 |
| Deals | RD-COM-01, RD-MF-01, CAP-01 |
| Deal facts it must match | Birchwood Plaza: 40,000 sf, 11 suites. Cedar Court: 50 units, garden-style. |
| Formulas fed (input) | F-COM-06 (building square feet (cross-check)) |
| Input rule | Building area is cross-checked across survey, appraisal and rent roll. A difference is a finding, not an average. |
| Policy rules | CORE-CLS-01, CORE-INS-03 |
| Fraud typologies (11.3) | - |
| Data still needed | Drawing content for each deal. |

### DOC-21: Property condition assessment summary

**What it is.** An engineer's walk-through report on the building's condition, repairs needed and future capital costs. **Who produces it.** Property condition consultant engaged by the lender, with reliance to the lender.

**Real format.** Executive summary, immediate repairs table, replacement reserve table, system descriptions.

- ASTM E2018-24, baseline property condition assessment guide; replaced E2018-15 in Jan 2024 [VERIFY: ASTM store page; checked 22 Nov 2026]

**Fields a junior analyst must read**

- Site visit date and consultant
- Immediate repairs and cost
- Short-term and long-term costs
- Replacement reserve table
- Remaining useful life of roof, systems, paving
- Reliance letter to the lender

**Defects a reviewer most often catches (planted-defect bank)**

1. Immediate repairs total differs from the repair escrow basis (Cedar Court: $40,000, so escrow $50,000).
2. Roof shown near the end of its life, yet not in repairs or reserves.
3. Report prepared for the borrower, with no reliance to the lender.
4. Report is for a different address or an old site visit.
5. Condition in the report contradicts the appraisal's condition rating.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 10 |
| First taught | C9 |
| Previews | - |
| Reappears | C12, C14 |
| Outcomes served | C09-O8, C12-O4, C14-O1 |
| Deals | RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Cedar Court: immediate repairs $40,000; repair escrow 125% = $50,000. Birchwood Plaza: no immediate repairs. |
| Formulas fed (input) | F-MF-23 (immediate repairs); F-MF-06 (reserve per unit (cross-check)); F-COM-03 (reserve basis (cross-check)) |
| Input rule | Repair escrow uses the report's immediate repairs (F-MF-23). Underwriting reserves use the policy figures; a higher report figure is a finding to raise, not a silent swap. |
| Policy rules | MF-GEN-08, MF-BR-13, COM-GEN-13 |
| Fraud typologies (11.3) | - |
| Data still needed | Reserve table and system detail for each deal. |

### DOC-22: Phase I environmental site assessment summary

**What it is.** An environmental professional's review of current and past uses for contamination risk. **Who produces it.** Environmental professional engaged by the lender or borrower, with reliance to the lender.

**Real format.** Phase I report: findings, recognized environmental conditions (RECs), data gaps, recommendations.

- ASTM E1527-21 satisfies all appropriate inquiries; E1527-13 could be used only until 13 Feb 2024 [VERIFY: 40 CFR 312.11(a), (c); ecfr.gov; checked 22 Nov 2026]
- Inquiry within one year before acquisition; interviews, lien search, records review, site visit and declaration within 180 days [VERIFY: 40 CFR 312.20(a), (b); ecfr.gov; checked 22 Nov 2026]
- Lender secured-creditor exemption [VERIFY: 42 U.S.C. 9601(20)(E)-(F) and 40 CFR 300.1100; cited in C9 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Standard used and user
- Site visit date and each component's date
- Historical uses and sources
- RECs, controlled RECs, historical RECs, de minimis conditions
- Data gaps
- Recommendations, including Phase II
- Environmental professional's declaration
- Reliance letter

**Defects a reviewer most often catches (planted-defect bank)**

1. Components older than 180 days, or the whole inquiry older than one year, at closing.
2. Former dry cleaner found in the history but called de minimis with no reason.
3. Report prepared under E1527-13.
4. User is the borrower, with no reliance letter to the lender.
5. A significant data gap, such as no owner interview, is not addressed.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 11; 11.1 |
| First taught | C9 |
| Previews | - |
| Reappears | C11, C13, C14, Capstone |
| Outcomes served | C09-O6, C11-O1, C13-O4, C13-O7, C14-O1 |
| Deals | RD-COM-01, RD-MF-01, CAP-01 |
| Deal facts it must match | Birchwood Plaza: no RECs; former dry cleaner checked and cleared. Cedar Court: no RECs. |
| Formulas fed (input) | None (gate document) |
| Input rule | Not a formula input. A REC triggers a Phase II before closing (COM-GEN-14). |
| Policy rules | COM-GEN-14, MF-GEN-08, CORE-DOC-03, CORE-DEF-04 |
| Fraud typologies (11.3) | - |
| Data still needed | Report text for each deal. |

### DOC-23: Insurance certificate and evidence of property insurance

**What it is.** The agent's evidence that required property, liability and other cover is in force and names the lender. **Who produces it.** Borrower's insurance agent or broker.

**Real format.** Liability: ACORD 25. Property: ACORD 28 Evidence of Commercial Property Insurance. Policy declarations and the mortgagee endorsement behind them.

- ACORD 25 is the certificate of liability insurance; ACORD 28 is evidence of commercial property insurance and confers no rights [VERIFY: ACORD certificates FAQ and NY DFS approved forms list; checked 22 Nov 2026 via search summary]
- Mortgagee rights come from the policy's mortgage clause, not the certificate [VERIFY: ISO standard mortgage clause; not yet checked]

**Fields a junior analyst must read**

- Named insured and property address
- Policy number and dates
- Cause of loss form and valuation basis
- Limit versus insurable value
- Coinsurance or agreed amount
- Deductible
- Business income or loss of rents period
- Builder's risk or vacancy cover during works
- Mortgagee and loss payee wording
- Flood cover where required

**Defects a reviewer most often catches (planted-defect bank)**

1. Lender shown only as certificate holder or additional insured on an ACORD 25, not as mortgagee on property cover.
2. 90% coinsurance with no agreed amount (CORE-INS-01; F-CORE-37 prices the gap).
3. Limit set at the loan amount, not insurable value (F-CORE-34).
4. Loss of rents shorter than 12 months (MF-GEN-10; COM-GEN-16) or 6 months (RES-GEN-08).
5. No builder's risk or vacant cover during rehab (CORE-INS-04).

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 12; 11.1 |
| First taught | C9 |
| Previews | - |
| Reappears | C11, C12, Capstone |
| Outcomes served | C09-O4, C11-O1, C12-O6 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Cedar Court property insurance $38,000 a year. Maple Run landlord insurance $160 a month after rehab. |
| Formulas fed (input) | F-CORE-34 (limit and insurable value); F-CORE-37 (limit, insurable value, coinsurance %); F-CORE-35 (annual premium) |
| Input rule | Insurable value is replacement cost of improvements, excluding land (CORE-INS-01). It comes from an insurance valuation or the appraisal's cost approach, never the loan amount. |
| Policy rules | CORE-INS-01, CORE-INS-02, CORE-INS-03, CORE-INS-04, RES-GEN-08, MF-GEN-10, COM-GEN-16 |
| Fraud typologies (11.3) | - |
| Data still needed | Insurable values and limits for each deal. |

### DOC-24: Flood hazard determination

**What it is.** A determination of whether the building sits in a FEMA special flood hazard area. **Who produces it.** Flood zone determination company, ordered by the lender.

**Real format.** FEMA Standard Flood Hazard Determination Form.

- Standard Flood Hazard Determination Form, FEMA Form 086-0-32, now FF-206-FY-21-116 [VERIFY: OMB 1660-0040 supporting statement; checked 22 Nov 2026 via search summary]
- Regulated lenders need flood cover of at least the lesser of the principal balance and the NFIP maximum [VERIFY: 42 U.S.C. 4012a(b)(1)(A); law.cornell.edu; checked 22 Nov 2026]. Our non-bank model follows CORE-INS-03 instead.

**Fields a junior analyst must read**

- Property address and building
- NFIP community number and participation
- Map panel and effective date
- Flood zone
- Building in special flood hazard area: yes or no
- Letter of map amendment, if any

**Defects a reviewer most often catches (planted-defect bank)**

1. Map panel superseded by a newer map.
2. Zone differs from the survey.
3. Determination covers the wrong building on a multi-building site.
4. Zone A or V, but the insurance evidence shows no flood cover (CORE-INS-03).

| Item | Value |
| --- | --- |
| Quality bar | 11.1 |
| First taught | C9 |
| Previews | - |
| Reappears | C11 |
| Outcomes served | C09-O4, C11-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | No flood zones in the Running Deals tab. |
| Formulas fed (input) | None (gate document) |
| Input rule | Not a formula input. Sets whether CORE-INS-03 applies. |
| Policy rules | CORE-INS-03, MF-GEN-08, COM-GEN-13 |
| Fraud typologies (11.3) | - |
| Data still needed | Zone for each property. |

### DOC-25: Promissory note and loan agreement excerpt

**What it is.** The clauses that set interest, late fees, default interest, prepayment and extensions. **Who produces it.** Lender's counsel, from the lender's forms; signed by the borrower.

**Real format.** Note and loan agreement sections; the guaranty's key clauses.

- Negotiable instruments rules that may apply to a note [VERIFY: UCC 3-104, 3-204, 3-309; cited in C11 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Interest basis and day count
- Payment dates
- Late fee and grace period
- Default rate and trigger
- Prepayment terms
- Extension conditions
- Notice addresses
- Recourse and carve-outs

**Defects a reviewer most often catches (planted-defect bank)**

1. Late fee applies to the balloon at maturity (CORE-SVC-04 forbids it).
2. Default rate exceeds the state usury cap where one applies (CORE-SVC-03; State Law Table).
3. Prepayment premium where state law bars it (RES-GEN-10).
4. Day count differs from the servicing system (Actual/360 versus 30/360).
5. Extension conditions differ from the term sheet.

| Item | Value |
| --- | --- |
| Quality bar | 11.1 |
| First taught | C9 |
| Previews | - |
| Reappears | C10, C12, C13 |
| Outcomes served | C09-O1, C09-O2, C10-O3, C10-O4, C12-O2, C12-O3, C13-O1 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Default rate is note rate + 5.00% (CORE-SVC-03): Maple Run 15.25%. Bridges bill Actual/360 (CORE-PRC-06). |
| Formulas fed (input) | F-CORE-01 (rate and day count); F-CORE-31 (default rate); F-COM-24 (prepayment premium schedule); F-CORE-40 (fees and rate); F-CORE-22 (extension fee); F-CORE-11 (debt service terms); F-MF-12 (note rate); F-CORE-22 (commitment and extension fee) |
| Input rule | The signed note controls billing. Where the term sheet and note differ, the note controls and the difference is a closing finding. |
| Policy rules | CORE-PRC-06, CORE-SVC-03, CORE-SVC-04, RES-GEN-10, CORE-DOC-01, CORE-DOC-02 |
| Fraud typologies (11.3) | - |
| Data still needed | Clause text for each deal. |

### DOC-26: Tenant estoppel certificate and SNDA

**What it is.** The tenant's signed confirmation of lease facts, and its agreement on priority with the lender. **Who produces it.** Tenant signs; landlord's counsel prepares from the lender's form.

**Real format.** Estoppel certificate; subordination, non-disturbance and attornment agreement (SNDA).

- No standard national form; lenders use their own [VERIFY: market practice; not yet checked]

**Fields a junior analyst must read**

- Lease date, amendments and term
- Current rent and rent paid ahead
- Security deposit
- Landlord defaults claimed
- Options: renewal, termination, purchase, right of first refusal
- Signature and date

**Defects a reviewer most often catches (planted-defect bank)**

1. Rent or end date differs from the rent roll.
2. A side letter grants free rent not shown anywhere else.
3. Tenant holds a purchase option or right of first refusal.
4. Unsigned, or signed months before closing.
5. Missing for a tenant that COM-GEN-09 requires.

| Item | Value |
| --- | --- |
| Quality bar | 9.6 |
| First taught | C9 |
| Previews | - |
| Reappears | C12 |
| Outcomes served | C09-O7, C12-O4 |
| Deals | RD-COM-01 |
| Deal facts it must match | Birchwood Plaza: largest tenant pays $90,000 (21.4% of base rent); estoppels from 20%+ tenants and the top five; SNDAs from 10%+. |
| Formulas fed (input) | F-COM-01 (lease terms); F-COM-02 (lease end dates); F-COM-16 (tenant rent) |
| Input rule | Where rent roll, lease and estoppel disagree, the estoppel and lease control; the rent roll is corrected (COM-GEN-09). C4 gives the estoppel's lease facts as stated figures; C9 teaches the document. |
| Policy rules | COM-GEN-09, COM-GEN-10, COM-GEN-12 |
| Fraud typologies (11.3) | FRD-05 Fake leases or rent rolls |
| Data still needed | Tenant names and lease terms for Birchwood's suites. |

### DOC-27: Closing checklist (funding conditions)

**What it is.** The list of every condition to closing, its source document, status, date and who cleared it. **Who produces it.** Lender's closer or processor; signed off before funding.

**Real format.** Spreadsheet or loan-system checklist with document ages and sign-offs.

- No standard form (lender's own).

**Fields a junior analyst must read**

- Each condition and its rule
- Document date and age at funding
- Cleared by and date
- Exceptions with approval reference
- Same-day OFAC re-run
- Preparer and releaser of the wire

**Defects a reviewer most often catches (planted-defect bank)**

1. Appraisal past 120 days at funding but marked cleared (CORE-VAL-02, F-CORE-36).
2. No same-day OFAC re-run (CORE-CLS-03).
3. Item marked waived with no pre-closing exception (CORE-EXC-01).
4. CPL missing or naming the wrong agent (CORE-CLS-02).
5. Same person prepared and released the wire.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 14 |
| First taught | C11 |
| Previews | - |
| Reappears | C12, C14 |
| Outcomes served | C11-O1, C12-O1, C14-O3 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Closing conditions listed in Role 3 of each deal. Maple Run: cash at closing $75,261.67, including prepaid interest $1,161.67. |
| Formulas fed (input) | F-CORE-36 (document dates); F-CORE-41 (wire amount tie) |
| Input rule | Each condition cites its source document and date. A condition with no document is open, whatever its status says. |
| Policy rules | CORE-CLS-01, CORE-CLS-02, CORE-CLS-03, CORE-CLS-05, CORE-VAL-02, CORE-BOR-07, CORE-BOR-13, CORE-EXC-01 |
| Fraud typologies (11.3) | FRD-09 Closing wire fraud |
| Data still needed | None for conditions; dates must be set for each document. |

### DOC-28: Settlement statement

**What it is.** The closing agent's statement of every source and use of funds at closing. **Who produces it.** Closing agent; approved by the lender's closer.

**Real format.** ALTA Settlement Statement, commercial version. TRID disclosures do not apply to business-purpose credit.

- ALTA Settlement Statement - Commercial [VERIFY: alta.org; not yet checked]
- Business-purpose exemption from Regulation Z: 'An extension of credit primarily for a business, commercial or agricultural purpose' [VERIFY: 12 CFR 1026.3(a)(1); ecfr.gov; checked 22 Nov 2026]

**Fields a junior analyst must read**

- Price, deposits and credits
- Loan amount and holdbacks
- Points and lender fees
- Prepaid interest and its days
- Escrow deposits and cushion
- Rate cap and reserves
- Payoffs and other payees
- Borrower cash and lender wire

**Defects a reviewer most often catches (planted-defect bank)**

1. Prepaid interest days miscounted (Maple Run: 15-31 Jan is 17 days, $1,161.67).
2. Escrow cushion wrong (Cedar Court: $18,666.67).
3. Lender wire does not tie to loan less holdback and lender charges (Maple Run: $233,738.33).
4. Points on the initial advance, not the commitment.
5. A payee with no link to the deal (third-party funds or diverted proceeds).

| Item | Value |
| --- | --- |
| Quality bar | 9.6 |
| First taught | C11 |
| Previews | - |
| Reappears | C12 |
| Outcomes served | C11-O2, C11-O3, C12-O7 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Maple Run: cash at closing $75,261.67; wire $233,738.33. Cedar Court cash to close $2,240,066.67. Birchwood: $1,759,183.33 with the interest reserve. |
| Formulas fed (input) | F-CORE-33 (funding date and rate); F-CORE-35 (taxes and insurance); F-CORE-41 (all uses); F-CORE-06 (commitment); F-RES-09 (price, costs, points, advance) |
| Input rule | Sources must equal uses. The term sheet's cash to close is recomputed, not copied. |
| Policy rules | CORE-CLS-04, CORE-INS-02, CORE-CLS-03 |
| Fraud typologies (11.3) | FRD-09 Closing wire fraud |
| Data still needed | Line items for Cedar Court and Birchwood beyond the term-sheet totals. |

### DOC-29: Draw request

**What it is.** The borrower's request to release holdback or construction funds for work done, by budget line. **Who produces it.** Borrower or general contractor; reviewed by the lender's draw desk.

**Real format.** Construction: application for payment with a continuation sheet (schedule of values). Rehab: lender's draw form by budget line.

- AIA G702 Application and Certificate for Payment with G703 Continuation Sheet (1992 editions most used) [VERIFY: AIA help center, G702-1992 instructions; checked 22 Nov 2026 via search summary]

**Fields a junior analyst must read**

- Draw number and period
- Budget by line: original, changes, revised
- Prior draws and this request by line
- Percent complete by line
- Retainage
- Stored materials
- Balance to finish
- Invoices and lien waivers attached

**Defects a reviewer most often catches (planted-defect bank)**

1. A line's request exceeds the work the inspector saw (D-CONV-05: stored materials do not count).
2. Contingency moved to a line with no written approval (Maple Run month 7 roof).
3. Lines do not sum to the request, hiding an out-of-balance loan (F-RES-25).
4. Missing waivers for this draw or the last (CORE-SVC-05).
5. Request under 30 days after the last, or the final 10% asked for early (RES-FF-09).

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 7 |
| First taught | C12 |
| Previews | - |
| Reappears | C13, Capstone |
| Outcomes served | C12-O1, C13-O2 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run draws: month 2 $30,000; month 4 $25,000; month 6 $20,000; month 8 $15,000; month 10 final $10,000. Cedar Court $400,000 capex drawn by month 10. Birchwood $300,000 capex and $300,000 TI/LC by month 18. |
| Formulas fed (input) | F-RES-06 (work in place and budget); F-RES-18 (work in place, prior draws); F-RES-25 (balance to finish and undisbursed funds); F-COM-21 (work in place and retainage); F-CORE-01 (balance after draw); F-CORE-05 (balance after draw) |
| Input rule | Work in place comes from the inspection report (DOC-30), never the request. Fund the lower of the requested and inspected amounts. |
| Policy rules | CORE-SVC-05, RES-FF-08, RES-FF-09, MF-BR-10, COM-BR-05, COM-CON-10, D-CONV-05, CORE-CLS-06 |
| Fraud typologies (11.3) | FRD-08 Draw fraud |
| Data still needed | Line-by-line requests for each Maple Run draw that tie to the table above. |

### DOC-30: Draw inspection report

**What it is.** A site inspector's report of work in place by budget line, with photos, for one draw. **Who produces it.** Third-party inspector engaged by the lender (CORE-SVC-05).

**Real format.** Short report: date, line-by-line percent complete, photos, comments, recommended amount.

- No standard form; examiners expect inspections to show a draw fits the stage of work [VERIFY: OCC CRE Handbook v2.0, 'Monitoring Progress of Construction Projects'; cited in C12 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Inspection date and inspector
- Percent complete by line
- Stored materials (noted, not counted)
- Dated photos
- Work outside the scope
- Permit card status
- Recommended draw

**Defects a reviewer most often catches (planted-defect bank)**

1. Photos reused from a prior visit or another property.
2. Stored materials counted as complete.
3. Overall percent complete does not match the weighted lines.
4. Inspector related to the borrower or contractor.
5. Permits not posted, but full funding recommended.

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 7 |
| First taught | C12 |
| Previews | - |
| Reappears | C13, Capstone |
| Outcomes served | C12-O1, C13-O2 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run work in place: $30,000; $55,000; $75,000; $90,000; $100,000 (30%, 55%, 75%, 90%, 100%). |
| Formulas fed (input) | F-RES-06 (work in place); F-RES-18 (work in place); F-RES-25 (cost to complete); F-COM-21 (work in place) |
| Input rule | Inspection controls the draw amount. Extension progress tests use the same figure (RES-FF-11; MF-BR-11). |
| Policy rules | CORE-SVC-05, RES-FF-09, RES-FF-11, D-CONV-05, COM-CON-10 |
| Fraud typologies (11.3) | FRD-08 Draw fraud, FRD-07 Related-party appraiser or contractor |
| Data still needed | Line-level inspection results for each Maple Run draw. |

### DOC-31: Loan-monitor (construction consultant) report

**What it is.** The lender's construction consultant's review: plan and cost review before closing, then a monthly monitoring report. **Who produces it.** Independent construction consultant engaged by the lender (RES-GU-10: third-party plan and cost review).

**Real format.** Pre-closing plan and cost review; monthly report with budget status, schedule, change orders and an in-balance opinion.

- No standard form [VERIFY: OCC CRE Handbook v2.0, 'Underwriting ADC Loans' and 'Monitoring Progress of Construction Projects'; not yet checked here]

**Fields a junior analyst must read**

- Budget adequacy and missing items
- Contract and permit review
- Schedule status and delay
- Percent complete by line
- Change orders reviewed
- Retainage held
- Balance to complete and in-balance opinion
- Recommended draw

**Defects a reviewer most often catches (planted-defect bank)**

1. Consultant flags the budget as short but recommends a full draw.
2. Cumulative percent complete exceeds the line totals.
3. Retainage not withheld before 50% complete (COM-CON-10).
4. Change orders approved by the contractor alone.
5. In-balance opinion ignores pending change orders.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C12 deepening |
| First taught | C12 |
| Previews | - |
| Reappears | Capstone |
| Outcomes served | C12-O1 |
| Deals | CAP-01 |
| Deal facts it must match | Capstone not yet authored. |
| Formulas fed (input) | F-RES-25 (cost to complete); F-COM-21 (work in place and retainage); F-RES-06 (work in place); F-RES-18 (work in place) |
| Input rule | Cost to complete comes from the consultant, not the borrower. Pending change orders count in the in-balance test. |
| Policy rules | RES-GU-10, COM-CON-10, CORE-SVC-05 |
| Fraud typologies (11.3) | FRD-08 Draw fraud |
| Data still needed | Whole document, once the capstone deal is authored. |

### DOC-32: Change order

**What it is.** A signed change to the construction contract's scope, price or time. **Who produces it.** General contractor proposes; owner, architect and, where the loan documents need it, the lender approve.

**Real format.** Standard change order form, carried as a line on the continuation sheet.

- AIA G701 Change Order; changes appear as lines on the G703 [VERIFY: AIA payment application procedure; checked 22 Nov 2026 via search summary; G701 form itself not yet checked]

**Fields a junior analyst must read**

- Change order number and date
- Description and reason
- Cost change and revised contract sum
- Time change and revised completion date
- Funding source: contingency or new equity
- Signatures

**Defects a reviewer most often catches (planted-defect bank)**

1. Raises the contract sum with no funding source, putting the loan out of balance.
2. Signed by the contractor only.
3. One change split into several small ones.
4. Time change pushes completion past maturity.
5. Charges for work already in the base scope.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C12 deepening |
| First taught | C12 |
| Previews | - |
| Reappears | Capstone |
| Outcomes served | C12-O1 |
| Deals | CAP-01, RD-RES-01 |
| Deal facts it must match | Maple Run month 7: roof subcontractor quits; replacement costs $8,000 more than the roof line; covered by the $9,000 contingency as a written reallocation (a budget change, not a contract change order). |
| Formulas fed (input) | F-RES-25 (revised budget); F-COM-21 (revised contract sum) |
| Input rule | An approved change order changes the budget line before the next in-balance test. |
| Policy rules | CORE-SVC-05 |
| Fraud typologies (11.3) | FRD-08 Draw fraud |
| Data still needed | Capstone change orders. The policy has no lender-consent threshold for change orders (open item). |

### DOC-33: Lien waivers

**What it is.** Releases of lien rights from the contractor, subcontractors and suppliers for amounts paid. **Who produces it.** Contractor, subcontractors and suppliers; collected by the borrower or title company.

**Real format.** Conditional (on receipt of payment) and unconditional waivers, progress and final. Some states set statutory forms.

- Lien priority and waiver rules in the deal states: ORC 1311.13-.14 (OH); G.S. 44A-11.1, 44A-11.2(m) (NC); IC 32-28-3-16 (IN) [VERIFY: cited in C12 blueprint via FindLaw mirrors; checked 22 Nov 2026 there]

**Fields a junior analyst must read**

- Claimant and customer
- Job address
- Through date
- Amount
- Conditional or unconditional
- Exceptions
- Signature and notary

**Defects a reviewer most often catches (planted-defect bank)**

1. Conditional waiver from the last draw never replaced by an unconditional one (CORE-SVC-05).
2. Through date stops short of the draw period.
3. Amount less than the sum paid.
4. A subcontractor on the job has no waiver.
5. Contractor signs on behalf of a subcontractor.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C12 deepening |
| First taught | C12 |
| Previews | - |
| Reappears | Capstone |
| Outcomes served | C12-O1 |
| Deals | RD-RES-01, CAP-01 |
| Deal facts it must match | Maple Run: five draws, months 2 to 10. |
| Formulas fed (input) | None (gate document) |
| Input rule | Not a formula input. A gate for each draw (CORE-SVC-05) and the title date-down (CORE-CLS-06). |
| Policy rules | CORE-SVC-05, CORE-CLS-06 |
| Fraud typologies (11.3) | FRD-08 Draw fraud |
| Data still needed | Subcontractor list for Maple Run's rehab. |

### DOC-34: Loan servicing report

**What it is.** The servicer's monthly loan-level record: billing, payments, balance, escrows, reserves, draws and reporting status. **Who produces it.** Servicer (in-house or subservicer), from the servicing system.

**Real format.** System report or monthly statement per loan.

- CMBS loan-level fields: CREFC Investor Reporting Package, Loan Periodic Update File [VERIFY: CREFC IRP v8.4, Mar 2024; v8.5 approval reported 2026, status unconfirmed; crefc.org; checked 22 Nov 2026 via search summary]

**Fields a junior analyst must read**

- Funded balance and commitment
- Rate, index and day count
- Interest billed: days and amount
- Payment received date and paid-through date
- Late fees and default interest
- Escrow and reserve balances
- Rate-cap receipts
- Maturity and extension status
- Reporting items due and received
- Risk rating

**Defects a reviewer most often catches (planted-defect bank)**

1. A 31-day month billed as 30 days (Maple Run at $340,000: $3,000.97, not $2,904.17).
2. Late fee charged on the full balance or the balloon (CORE-SVC-04).
3. Cap payment computed on the funded balance, not the notional (Cedar Court month 10: $3,212.50).
4. Paid-through date wrong after a partial payment.
5. Overdue rent roll or operating statement not flagged (CORE-SVC-06).

| Item | Value |
| --- | --- |
| Quality bar | 9.1 item 15 |
| First taught | C12 |
| Previews | - |
| Reappears | C13, C14 |
| Outcomes served | C12-O2, C12-O4, C13-O1, C14-O8 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Maple Run interest at 10.25% Actual/360; Cedar Court month 10 interest $35,550.00 for 30 days; Birchwood month 18 interest $25,229.17 for 30 days. |
| Formulas fed (input) | F-CORE-01 (balance, rate, days); F-CORE-05 (balance and rate); F-CORE-31 (default rate); F-CORE-32 (balance, accrued interest, fees); F-COM-19 (trailing NCF and debt service) |
| Input rule | Billing follows the signed note (DOC-25). Cap receipts follow the cap confirmation's notional (D-CORE-30). |
| Policy rules | CORE-PRC-06, CORE-CLS-04, CORE-SVC-04, CORE-SVC-06, CORE-SVC-07, MF-BR-09, COM-BR-03, COM-GEN-12 |
| Fraud typologies (11.3) | - |
| Data still needed | Monthly payment history for each deal. |

### DOC-35: Executed residential lease

**What it is.** The signed lease on a residential collateral property, delivered during the loan. **Who produces it.** Borrower (landlord) and tenant; delivered to the servicer (RES-GEN-11).

**Real format.** State residential lease form or landlord's own lease.

- Ohio landlord-tenant law [VERIFY: ORC chapter 5321; not yet checked]

**Fields a junior analyst must read**

- Tenant names
- Term and start date
- Monthly rent and deposit
- Purchase option
- Signatures and date
- Delivery date to lender

**Defects a reviewer most often catches (planted-defect bank)**

1. Tenant related to a guarantor (occupancy fraud; CORE-BP-02).
2. Term under 12 months or a purchase option (RES-GEN-11).
3. Rent well above market with no deposit (fake lease).
4. Delivered after the 10 business days RES-GEN-11 allows.

| Item | Value |
| --- | --- |
| Quality bar | 9.6 |
| First taught | C4 |
| Previews | - |
| Reappears | C9, C12, C14 |
| Outcomes served | C04-O1, C04-O2, C04-O5, C09-O8, C12-O4, C14-O5 |
| Deals | RD-RES-01 |
| Deal facts it must match | Maple Run month 11: lease at $2,450 a month, 12-month term, unrelated tenant. |
| Formulas fed (input) | F-RES-23 (lease rent); F-RES-07 (qualifying rent); F-RES-17 (qualifying rent) |
| Input rule | Qualifying rent is the lesser of lease rent and appraisal market rent (RES-DSCR-01, F-RES-23): $2,400, not $2,450. |
| Policy rules | RES-GEN-11, RES-DSCR-01, CORE-BP-02, D-CORE-22 |
| Fraud typologies (11.3) | FRD-02 Occupancy fraud, FRD-05 Fake leases or rent rolls |
| Data still needed | None beyond lease terms. |

### DOC-36: Watchlist with risk ratings

**What it is.** The monthly list of loans rated 2 to 5, each with its trigger, action, owner and review date. **Who produces it.** Asset management or credit administration; reviewed monthly (CORE-SVC-07).

**Real format.** Spreadsheet or system report. CMBS servicers keep a Servicer Watchlist with set criteria.

- CREFC Servicer Watchlist guideline: a loan two or more payments past due is added as a credit item [VERIFY: CREFC IRP watchlist implementation guideline, v8.0; crefc.org; checked 22 Nov 2026 via search summary]
- Interagency rating scale (pass, special mention, substandard, doubtful, loss) [VERIFY: OCC Bulletin 2026-56; cited in C12 blueprint; open full text]

**Fields a junior analyst must read**

- Loan, balance and maturity
- Rating 1-5 and date changed
- Trigger
- Exit cover (CORE-SVC-08)
- Action, owner and due date
- Next review date

**Defects a reviewer most often catches (planted-defect bank)**

1. Maturity within 90 days with no confirmed exit, but rated 1 (CORE-SVC-07 needs at least 2).
2. A sweep trigger (Birchwood month 9) is not on the list.
3. Action with no owner or due date.
4. Exit cover computed without accrued interest and fees.
5. A payment default rated 3, not 4 (CORE-SVC-08).

| Item | Value |
| --- | --- |
| Quality bar | 9.7 |
| First taught | C12 |
| Previews | - |
| Reappears | C13, C14 |
| Outcomes served | C12-O5, C13-O1, C14-O8 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Birchwood month 9: largest tenant gives notice; sweep starts. Maple Run month 12: maturity and extension request. Cedar Court month 24: maturity, NCF $520,000. |
| Formulas fed (input) | F-CORE-42 (as-is value less cost to sell, balance); F-CORE-23 (value, costs, balance); F-COM-19 (sweep inputs) |
| Input rule | Exit cover uses as-is value less cost to sell over balance plus accrued interest and fees (CORE-SVC-08). |
| Policy rules | CORE-SVC-07, CORE-SVC-08, COM-GEN-12, D-CORE-23 |
| Fraud typologies (11.3) | - |
| Data still needed | Updated as-is values at each rating date. |

### DOC-37: Delinquency tape

**What it is.** A one-row-per-loan portfolio file showing payment status, days past due and default flags. **Who produces it.** Servicer, monthly, from the servicing system; sent to management, warehouse lenders and loan buyers.

**Real format.** Spreadsheet or CSV with a data dictionary.

- Loan-level delinquency fields in CMBS: CREFC IRP Loan Periodic Update File [VERIFY: CREFC IRP v8.4; not yet checked for field names]
- Market context: the delinquency rate on bank CRE loans (excluding farmland) was 1.53% in Q2 2026. Source: FRED DRCRELEXFACBS, cited in the C12 blueprint, opened 22 Nov 2026. Market, as of Aug 2026

**Fields a junior analyst must read**

- Loan ID, product, state
- Balance and next due date
- Paid-through date
- Days past due and bucket
- Maturity and extension status
- Default interest accrued
- Rating and accrual status
- Forbearance or modification flag

**Defects a reviewer most often catches (planted-defect bank)**

1. Days past due counted from the paid-through date in one row and the due date in another.
2. A loan past maturity shown current because interest was paid.
3. A loan in forbearance shown current with no flag.
4. Tape totals do not tie to the servicing trial balance.
5. Rating does not match delinquency (CORE-SVC-08).

| Item | Value |
| --- | --- |
| Quality bar | 9.7 |
| First taught | C12 |
| Previews | - |
| Reappears | C13, C14 |
| Outcomes served | C12-O5, C13-O1, C14-O7 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Maple Run what-if: 1 Aug payment 45 days late on $315,000; default per diem $133.44 versus $89.69. |
| Formulas fed (input) | F-CORE-30 (balances by bucket); F-CORE-31 (default rate and days); F-CORE-42 (balance for charge-off) |
| Input rule | Days past due run from the contractual due date. The tape is checked against the servicing report (DOC-34), which controls. |
| Policy rules | CORE-SVC-03, CORE-SVC-07, CORE-SVC-08, CORE-CONC-07 |
| Fraud typologies (11.3) | - |
| Data still needed | A fictional portfolio of loans around the three deals. No portfolio list exists in the Running Deals tab. |

### DOC-38: Investor remittance report

**What it is.** The servicer's monthly report to a loan buyer, warehouse lender or trust: collections, remittance and loan status. **Who produces it.** Servicer, under the servicing or sale agreement.

**Real format.** Remittance summary with loan-level detail; CMBS uses the CREFC package.

- CREFC Investor Reporting Package as the CMBS standard [VERIFY: CREFC IRP v8.4; crefc.org; not yet checked for remittance fields]

**Fields a junior analyst must read**

- Reporting period and cut-off
- Collections by loan: interest, principal, fees
- Servicing fee
- Net remittance and date
- Delinquency and rating per loan
- Advances, if any

**Defects a reviewer most often catches (planted-defect bank)**

1. Collections do not tie to the servicing report (DOC-34).
2. A defaulted loan reported as current.
3. Payments received after cut-off included in the period.
4. Remitted total differs from the sum of the lines.
5. Rate-cap receipts left out.

| Item | Value |
| --- | --- |
| Quality bar | 9.7 |
| First taught | C12 |
| Previews | - |
| Reappears | C14 |
| Outcomes served | C12-O8, C14-O2 |
| Deals | RD-MF-01 |
| Deal facts it must match | Uses a what-if in which Cedar Court is a serviced loan sold to a loan buyer (owner to confirm). Month 10: interest $35,550.00; cap receipt $3,212.50. |
| Formulas fed (input) | F-CORE-01 (interest collected); F-CORE-05 (per diem for partial periods) |
| Input rule | Collections come from the servicing report. The policy has no servicing-fee, remittance-date or deadline rule (C12 blueprint 4.5 item 6), so the report shows gross collections only. |
| Policy rules | CORE-SVC-06, CORE-SVC-07 |
| Fraud typologies (11.3) | - |
| Data still needed | A remittance rule (owner decision) and the sale what-if. |

### DOC-39: Extension or modification request

**What it is.** The borrower's written request to extend maturity or change loan terms, with its support. **Who produces it.** Borrower, often with its broker; reviewed by asset management.

**Real format.** Letter or lender form with an updated rent roll, operating statement, budget, schedule and cap quote.

- No standard form. Workout talks need a pre-negotiation letter first (CORE-DEF-01).

**Fields a junior analyst must read**

- Terms requested
- Reason
- Progress evidence: percent complete, occupancy, NCF
- Proposed paydown or fee
- Cap extension quote
- Guarantor reaffirmation

**Defects a reviewer most often catches (planted-defect bank)**

1. No evidence for the family progress test (RES-FF-11; MF-BR-11).
2. NCF from a pro forma, not trailing figures.
3. Fee computed on the balance, not the commitment (F-CORE-22).
4. A rate cut bundled in, with talks begun before a pre-negotiation letter (CORE-DEF-01).
5. No cap extension where MF-BR-11 needs one.

| Item | Value |
| --- | --- |
| Quality bar | 9.7 |
| First taught | C12 |
| Previews | - |
| Reappears | C13 |
| Outcomes served | C12-O3, C13-O3 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Maple Run month 12: 100% complete; fee $1,700. Cedar Court month 24: debt yield 10.12%; fee $25,700; cap about $19,275.00. Birchwood what-if month 24: NCF $380,000; fee $8,800. |
| Formulas fed (input) | None (gate document) |
| Input rule | The request is a trigger, not an input source. Its tests take NCF from the rent roll and T-12 and the rate and commitment from the note. |
| Policy rules | CORE-SVC-01, CORE-SVC-02, RES-FF-11, MF-BR-11, COM-BR-01, COM-BR-02, CORE-DEF-01, CORE-DEF-03 |
| Fraud typologies (11.3) | - |
| Data still needed | Request letters written to the timeline facts above. |

### DOC-40: Default notice and pre-negotiation letter

**What it is.** The lender's written notice of default, and the letter all parties sign before any workout talk. **Who produces it.** Lender's asset manager and counsel; signed by borrower and every guarantor.

**Real format.** Notice letter citing the loan documents; pre-negotiation agreement.

- Pre-negotiation letter practice [VERIFY: Fannie Mae Multifamily Guide, as cited in CORE-DEF-01; not yet checked here]

**Fields a junior analyst must read**

- Default described and cited
- Cure period
- Default interest start date
- Reservation of rights
- Notice address used
- Pre-negotiation terms and signatures

**Defects a reviewer most often catches (planted-defect bank)**

1. A guarantor has not signed the letter.
2. Notice sent to an address other than the note's notice clause.
3. No reservation of rights, inviting a waiver-by-conduct claim.
4. Default interest start date wrong.
5. Letter dated after talks began.

| Item | Value |
| --- | --- |
| Quality bar | 9.4 |
| First taught | C13 |
| Previews | - |
| Reappears | C14 |
| Outcomes served | C13-O1, C14-O8 |
| Deals | RD-COM-01, RD-RES-01 |
| Deal facts it must match | Birchwood: Dana Whitlow calls 'to talk options' (C13 T2). Maple Run what-if: 45 days late; default rate 15.25%. |
| Formulas fed (input) | F-CORE-31 (default rate and dates); F-CORE-05 (balance and rate) |
| Input rule | Dates come from the servicing report. The note's notice clause sets the address. |
| Policy rules | CORE-DEF-01, CORE-SVC-03, CORE-SVC-08 |
| Fraud typologies (11.3) | - |
| Data still needed | Letter text and dates. |

### DOC-41: Updated valuation for resolution

**What it is.** A new appraisal, appraisal update or broker opinion used to value a troubled loan's collateral. **Who produces it.** Appraiser (update) or broker (opinion of value), ordered by asset management.

**Real format.** Appraisal update, restricted report or broker opinion of value with sale comparables.

- Banks record foreclosed real estate at fair value less cost to sell [VERIFY: Fed SR 12-10 attachment; cited in C13 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Effective date
- As-is value
- Marketing time
- Cost to sell
- Condition and occupancy
- Preparer independence

**Defects a reviewer most often catches (planted-defect bank)**

1. Uses as-stabilized value or ARV instead of as-is.
2. No cost to sell, so exit cover is overstated.
3. A broker opinion used to size a new loan (CORE-VAL-03 allows it only as a check).
4. Stale effective date.

| Item | Value |
| --- | --- |
| Quality bar | 9.5; 9.6 |
| First taught | C13 |
| Previews | - |
| Reappears | C14 |
| Outcomes served | C13-O2, C13-O7, C14-O7 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Maple Run: updated value on a tenant-in-place basis ordered after the refinance fails (Role 3, item 5). |
| Formulas fed (input) | F-CORE-23 (value and costs); F-CORE-42 (fair value less cost to sell) |
| Input rule | Resolution uses as-is value less cost to sell (CORE-SVC-08; F-CORE-42). |
| Policy rules | CORE-VAL-03, CORE-SVC-08, CORE-DEF-02, CORE-DEF-06 |
| Fraud typologies (11.3) | FRD-03 Inflated or broker-supplied after-repair value |
| Data still needed | Updated values and sale costs for each what-if. |

### DOC-42: Credit memo

**What it is.** The underwriter's decision record for committee, in the eleven-section house standard. **Who produces it.** Underwriter; approved by the authority in CORE-AUTH-01.

**Real format.** House template, eleven sections (CORE-AUTH-02).

- Regulators expect a written credit approval record [VERIFY: Interagency Guidelines for Real Estate Lending Policies, 12 CFR 34 Subpart D Appendix A; cited in C14 blueprint; not yet checked here]

**Fields a junior analyst must read**

- Request and recommendation
- Borrower and guarantors
- Property and valuation
- Cash flow or budget
- Sizing table with rule and formula references
- Exit with cushion
- State law check
- Portfolio impact
- Risks with mitigants
- Risk rating
- Conditions to close

**Defects a reviewer most often catches (planted-defect bank)**

1. A section missing or out of order.
2. A risk with no mitigant.
3. Sizing table names the wrong binding test.
4. An exception used but not logged.
5. Approver outside authority.

| Item | Value |
| --- | --- |
| Quality bar | 9.3 |
| First taught | C14 |
| Previews | - |
| Reappears | Capstone |
| Outcomes served | C14-O1, C14-O6 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Memo outlines exist for Maple Run and Cedar Court (Role 2). |
| Formulas fed (input) | None (gate document) |
| Input rule | Derived document: it reports results; it is never an input source. Inputs come from the rent roll, T-12 and note (section 4). |
| Policy rules | CORE-AUTH-01, CORE-AUTH-02, CORE-AUTH-03 |
| Fraud typologies (11.3) | - |
| Data still needed | A model memo per deal; the capstone model memo needs industry sign-off (9.3). |

### DOC-43: Exception request and log entry

**What it is.** A request to approve a loan outside a policy rule, with its compensating factors, and its log line. **Who produces it.** Underwriter requests; approver signs; credit administration logs it.

**Real format.** Request form and exception log (CORE-EXC-02 fields).

- Exceptions documented, approved and reported [VERIFY: OCC CRE Lending handbook, Mar 2022; cited in CORE-EXC-01; not yet checked here]

**Fields a junior analyst must read**

- Rule, policy value and approved value
- At least two compensating factors
- Approver and date
- Before or after closing

**Defects a reviewer most often catches (planted-defect bank)**

1. Only one compensating factor (CORE-EXC-02).
2. Exception to a KYC, OFAC, LEGAL or CORE-BP rule (CORE-EXC-03 bars it).
3. Approved after closing (CORE-EXC-01).
4. Approver lacks authority (CORE-AUTH-01).

| Item | Value |
| --- | --- |
| Quality bar | 9.4 |
| First taught | C14 |
| Previews | - |
| Reappears | Capstone |
| Outcomes served | C14-O3 |
| Deals | RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Cedar Court and Birchwood exceed the Tier 1 sponsor exposure cap, so committee approves (CORE-CONC-01). |
| Formulas fed (input) | F-CORE-25 (liquidity shortfall); F-CORE-29 (exposure) |
| Input rule | Policy value comes from the Model Credit Policy, never from the request. |
| Policy rules | CORE-EXC-01, CORE-EXC-02, CORE-EXC-03, CORE-AUTH-01, CORE-CONC-01 |
| Fraud typologies (11.3) | - |
| Data still needed | None. |

### DOC-44: Loan sale data tape

**What it is.** One row per loan offered to a buyer or warehouse lender, with the fields its eligibility rules test. **Who produces it.** Lender's capital markets team, from the loan file and servicing system.

**Real format.** Spreadsheet in the buyer's template, with a data dictionary.

- Risk retention for securitizations [VERIFY: 17 CFR 246.4 and 246.7; cited in coverage review; re-open before C14 T2]

**Fields a junior analyst must read**

- Loan amount, rate, term, product
- Value and LTV or LTC
- DSCR or debt yield
- FICO and experience tier
- State and property type
- Days since funding (aging)
- Payment status

**Defects a reviewer most often catches (planted-defect bank)**

1. Tape value differs from the accepted appraisal.
2. DSCR on the tape uses a different rent than the file.
3. Loan past the buyer's aging limit still listed as eligible.
4. Payment status differs from the delinquency tape.

| Item | Value |
| --- | --- |
| Quality bar | 10.3 |
| First taught | C14 |
| Previews | - |
| Reappears | - |
| Outcomes served | C14-O2 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Uses the three deals' sizing results. |
| Formulas fed (input) | None (gate document) |
| Input rule | Derived document: it reports results; it is never an input source. Inputs come from the rent roll, T-12 and note (section 4). |
| Policy rules | CORE-CONC-01 |
| Fraud typologies (11.3) | FRD-10 Double-pledged collateral |
| Data still needed | A fictional buyer eligibility sheet (coverage review open item 2). |

### DOC-45: Portfolio concentration report

**What it is.** The portfolio by bucket (state, product, sponsor) against each limit, with headroom. **Who produces it.** Credit administration, monthly (CORE-CONC-07).

**Real format.** Table by bucket: commitment, share, limit, headroom.

- Supervisory CRE concentration screens [VERIFY: OCC Bulletin 2006-46; cited in C14 blueprint as opened]

**Fields a junior analyst must read**

- Total commitments
- Each bucket's commitments and share
- Limit and headroom
- Loans in the pipeline

**Defects a reviewer most often catches (planted-defect bank)**

1. Uses balances, not commitments.
2. A sponsor's affiliated entities not combined.
3. Pipeline loan not added before the share is tested.
4. Breached bucket not sent to committee.

| Item | Value |
| --- | --- |
| Quality bar | 6.1 |
| First taught | C14 |
| Previews | - |
| Reappears | - |
| Outcomes served | C14-O4 |
| Deals | RD-MF-01, RD-COM-01 |
| Deal facts it must match | Commitments: Cedar Court $5,140,000; Birchwood $3,520,000; Maple Run $340,000. |
| Formulas fed (input) | F-CORE-30 (bucket and total commitments); F-CORE-43 (limit and commitments); F-CORE-29 (sponsor commitments) |
| Input rule | Commitments, not funded balances (CORE-CONC-02). |
| Policy rules | CORE-CONC-01, CORE-CONC-02, CORE-CONC-07 |
| Fraud typologies (11.3) | - |
| Data still needed | A fictional portfolio around the three deals. |

### DOC-46: Business-purpose, non-occupancy and use-of-proceeds certification

**What it is.** A statement signed by the borrower and every guarantor. It says the loan is for business purposes and no guarantor or relative will occupy the property. On a cash-out refinance it states the use of proceeds. **Who produces it.** Lender's form, signed by the borrower and each guarantor before closing. The closer checks signatures and dates; the underwriter tests it against the file.

**Real format.** One- or two-page lender form with a business-purpose statement, an occupancy statement and, for cash-out, a proceeds table. No industry standard form.

- Purpose test it supports: Reg Z business-purpose exemption [VERIFY: 12 CFR 1026.3(a) and comment 3(a)-4; checked 18 Nov 2026 per Model Credit Policy CORE-BP-01]

**Fields a junior analyst must read**

- Borrower entity name and every guarantor's name and signature
- Signature dates against the closing date
- Occupancy statement covering guarantors and relatives
- Stated purpose of the loan
- Cash-out only: use-of-proceeds lines and the personal-use total
- Property address as shown on IDs and bills

**Defects a reviewer most often catches (planted-defect bank)**

1. One guarantor has not signed it (CORE-BP-01).
2. It is dated after the closing date.
3. The proceeds table puts more than half of cash-out to personal use (CORE-BP-04).
4. A utility bill or the guarantor's ID shows the subject address, contradicting the occupancy statement (CORE-BP-02).

| Item | Value |
| --- | --- |
| Quality bar | 9.6; 11.1; 11.3 |
| First taught | C6 |
| Previews | C1 |
| Reappears | C7, C11, C12 |
| Outcomes served | C06-O1, C07-O3, C11-O1, C12-O4; previewed in C01-O6, C01-O7 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Maple Run: both guarantors, Dana Reyes and Sam Okafor, sign the certifications. Dana lives elsewhere, and the property will be leased to an unrelated tenant. Cedar Court and Birchwood: signed certifications are closing conditions. |
| Formulas fed (input) | None (gate document) |
| Input rule | The certification supports purpose but never overrides contrary evidence. Any contradiction stops the file for the BSA officer (CORE-BP-02; CORE-KYC-07). |
| Policy rules | CORE-BP-01, CORE-BP-02, CORE-BP-04, CORE-KYC-07, RES-GEN-09 |
| Fraud typologies (11.3) | FRD-02 Occupancy fraud |
| Data still needed | The lender's form text. Course Bible needs a template; cash-out what-if figures for C1 come from REG-03 (55% personal). |

### DOC-47: Security instruments: mortgage or deed of trust, assignment of leases and rents, UCC-1

**What it is.** The recorded documents that give the lender its lien on the real estate and the rents, and its filing on personal property. **Who produces it.** Lender's counsel drafts; the borrower signs; the title agent records them and files the UCC-1.

**Real format.** State-form mortgage or deed of trust with a legal description, a separate or embedded assignment of leases and rents, and a UCC-1 financing statement.

- Ohio and Indiana use mortgages; North Carolina uses deeds of trust with a power of sale [VERIFY: State Law Table SLT-OH-01, SLT-NC-01, SLT-IN-01; checked 20 Nov 2026]
- UCC-1 national form [VERIFY: UCC 9-521 national financing statement form; not yet checked]

**Fields a junior analyst must read**

- Grantor matches the borrower entity exactly
- Legal description matches the title commitment and survey
- Secured amount covers the full commitment
- Recording data and date
- Assignment of rents: present assignment and licence terms
- UCC-1: debtor name, collateral description, filing office, lapse date

**Defects a reviewer most often catches (planted-defect bank)**

1. The grantor name differs from the borrower's legal name.
2. The legal description omits a parcel shown on the survey.
3. The UCC-1 is filed in the wrong state or office.
4. The secured amount covers only the initial advance, not future funding.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C9 O1 |
| First taught | C9 |
| Previews | - |
| Reappears | C11, C13 |
| Outcomes served | C09-O1, C09-O3, C11-O5, C11-O6, C13-O4 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | Maple Run (Ohio) and Birchwood Plaza (Indiana) take mortgages; Cedar Court (North Carolina) takes a deed of trust. |
| Formulas fed (input) | None (gate document) |
| Input rule | Trailing recorded originals are logged at funding and chased until received (CORE-CLS-05). |
| Policy rules | CORE-CLS-05, CORE-CLS-06 |
| Fraud typologies (11.3) | FRD-10 Double-pledged collateral |
| Data still needed | Legal descriptions and recording data for each deal. |

### DOC-48: Guaranty agreements: payment, carve-out and completion guaranties; environmental indemnity

**What it is.** The guarantor's signed promises to pay the loan, to pay losses from listed bad acts, to finish the work, and to cover environmental cost. **Who produces it.** Lender's counsel drafts; each guarantor signs at closing.

**Real format.** Separate agreements per guarantor or one joint and several agreement, with a schedule of carve-outs and waivers.


**Fields a junior analyst must read**

- Each guarantor's name, signature and capacity
- Guaranty type and cap
- Carve-out list and springing full-recourse triggers
- Completion scope and budget reference
- Waivers and governing law
- Environmental indemnity scope and survival

**Defects a reviewer most often catches (planted-defect bank)**

1. A 20% owner has not signed (CORE-BOR-03).
2. A non-owner spouse is required to sign though the guarantor qualifies alone (CORE-BOR-05).
3. No completion guaranty on a loan with future funding (CORE-DOC-03).
4. The carve-out list omits voluntary bankruptcy on a non-recourse bridge (CORE-DOC-02).

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C9 O2 |
| First taught | C9 |
| Previews | C6 |
| Reappears | C10, C13 |
| Outcomes served | C09-O1, C09-O2, C10-O7, C13-O6; previewed in C06-O1 |
| Deals | RD-RES-01, RD-MF-01 |
| Deal facts it must match | Maple Run: full-recourse guaranty from Dana and Sam, and a completion guaranty for the $100,000 rehab. Cedar Court: non-recourse with carve-outs, a completion guaranty for capex and an environmental indemnity. |
| Formulas fed (input) | None (gate document) |
| Input rule | Guaranty and remedy terms are checked against state deficiency and one-action rules before the term sheet (CORE-DOC-04). |
| Policy rules | CORE-BOR-03, CORE-BOR-05, CORE-DOC-01, CORE-DOC-02, CORE-DOC-03, CORE-DOC-04 |
| Fraud typologies (11.3) | - |
| Data still needed | Birchwood Plaza guaranty package is not stated in the deal file. |

### DOC-49: Zoning report

**What it is.** A third-party report on the property's zoning, permitted use, conformity and any open violations. **Who produces it.** Zoning consultant ordered by the lender.

**Real format.** Report with the zoning district, permitted uses, required versus actual parking and setbacks, conformity status, rebuild rights and municipal letters.


**Fields a junior analyst must read**

- Zoning district and permitted use
- Legal conforming, legal nonconforming or illegal
- Rebuild rights after casualty
- Open code or zoning violations
- Certificates of occupancy

**Defects a reviewer most often catches (planted-defect bank)**

1. The use is legal nonconforming and rebuild after a major casualty is limited.
2. Parking is short of the code requirement.
3. An open violation is noted but not addressed in the conditions.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C5 O6 |
| First taught | C5 |
| Previews | - |
| Reappears | C9 |
| Outcomes served | C05-O6, C09-O8 |
| Deals | RD-MF-01, RD-COM-01 |
| Deal facts it must match | Cedar Court: zoning report required (MF-GEN-08). Birchwood Plaza: zoning report required (COM-GEN-13). |
| Formulas fed (input) | None (gate document) |
| Input rule | Where the appraisal's highest and best use and the zoning report disagree, the zoning report controls on legal use; the difference is a finding. |
| Policy rules | MF-GEN-08, COM-GEN-13 |
| Fraud typologies (11.3) | - |
| Data still needed | Zoning facts for both deals. |

### DOC-50: Site visit report with photos

**What it is.** The lender's own record of a property visit, with dated photos and notes on condition, occupancy and the neighbourhood. **Who produces it.** Originator, underwriter or third-party inspector.

**Real format.** Short form with checklist, narrative and dated, labelled photos.


**Fields a junior analyst must read**

- Date, visitor and access
- Occupancy signs by unit
- Condition and deferred maintenance
- Environmental clues
- Match to the rent roll and the appraisal

**Defects a reviewer most often catches (planted-defect bank)**

1. Photos show personal belongings in a unit the file calls vacant.
2. Units on the rent roll as leased look empty.
3. Photos are undated or of a different property.
4. Staining or drums near a former service use are not followed up.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C9 O8 |
| First taught | C9 |
| Previews | - |
| Reappears | C12, C13 |
| Outcomes served | C09-O8, C12-O4, C13-O4 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | No site visit facts in the deal file. |
| Formulas fed (input) | None (gate document) |
| Input rule | Contradictions with the certification go to the BSA officer (CORE-BP-02). |
| Policy rules | CORE-BP-02, CORE-KYC-07 |
| Fraud typologies (11.3) | FRD-02 Occupancy fraud, FRD-05 Fake leases or rent rolls |
| Data still needed | Visit notes and photo list for each deal. No policy rule requires a site visit (open item). |

### DOC-51: Title date-down and UCC search

**What it is.** An update of the title search to a later date, and a search of UCC filings against the borrower. **Who produces it.** Title agent (date-down); search vendor or Secretary of State (UCC).

**Real format.** Date-down endorsement or letter listing new matters; UCC search report by debtor name and filing office.


**Fields a junior analyst must read**

- Effective date
- New liens, deeds or judgments since the last date
- Mechanics' liens
- UCC filings by other lenders on rents or fixtures

**Defects a reviewer most often catches (planted-defect bank)**

1. A new mortgage to another lender appears.
2. A recorded claim of lien from a contractor appears before a draw.
3. A UCC filing by another lender covers rents.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; 11.3 |
| First taught | C11 |
| Previews | - |
| Reappears | C12, C13 |
| Outcomes served | C11-O5, C12-O1, C13-O4 |
| Deals | RD-RES-01, RD-COM-01, CAP-01 |
| Deal facts it must match | No date-down facts in the deal file; FRD-08 and FRD-10 items are what-ifs. |
| Formulas fed (input) | None (gate document) |
| Input rule | Each draw is insured as it funds (CORE-CLS-06); date-down with no new liens before each draw (CORE-SVC-05). |
| Policy rules | CORE-CLS-06, CORE-SVC-05, CORE-DEF-04, COM-CON-10 |
| Fraud typologies (11.3) | FRD-10 Double-pledged collateral, FRD-08 Draw fraud |
| Data still needed | No rule requires a UCC search at origination (FRD-10 policy gap). |

### DOC-52: Experience verification pack: prior settlement statements and deeds

**What it is.** The evidence behind each project in the guarantor's track record. **Who produces it.** Borrower supplies; the underwriter checks public deed records.

**Real format.** Schedule of projects with settlement statements, deeds and entity records for each.


**Fields a junior analyst must read**

- Project address and dates
- Guarantor's ownership share in the owning entity
- Completion evidence: sale, refinance or 12 months held
- Match to public deed records

**Defects a reviewer most often catches (planted-defect bank)**

1. The guarantor owned under 20% of a listed project (CORE-BOR-15).
2. A project completed more than 36 months ago is counted.
3. A deed shows a different owner with no link to the guarantor.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; 11.3 |
| First taught | C6 |
| Previews | - |
| Reappears | C7 |
| Outcomes served | C06-O6, C07-O3 |
| Deals | RD-RES-01, RD-MF-01 |
| Deal facts it must match | Maple Run: Dana Reyes lists 7 projects; the 15% deal fails the 20% rule, so 6 count (Tier 2). Cedar Court: Marcus Hale lists 3 apartment properties; the 18-unit property owned 8% does not count. |
| Formulas fed (input) | F-CORE-27 (projects and ownership shares) |
| Input rule | Signed operating agreements, multiplied through layers, control ownership shares (CORE-BOR-03; CORE-BOR-15). |
| Policy rules | CORE-BOR-15, CORE-BOR-16, CORE-BOR-18 |
| Fraud typologies (11.3) | FRD-01 Straw borrower |
| Data still needed | Project-level track records for each guarantor. |

### DOC-53: Government ID

**What it is.** A photo ID for each 20% owner, the control person, each guarantor and, on a purchase, the seller's signer. **Who produces it.** Borrower parties; verified by the lender or closing agent.

**Real format.** Driver's licence or passport copy, with the verification record.


**Fields a junior analyst must read**

- Name matching the ownership chart
- Address
- Expiry date
- Verification method and date

**Defects a reviewer most often catches (planted-defect bank)**

1. The ID address is the subject property (CORE-BP-02).
2. The ID has expired.
3. The name does not match the ownership chart.

| Item | Value |
| --- | --- |
| Quality bar | 11.1; 11.3 |
| First taught | C7 |
| Previews | - |
| Reappears | C11 |
| Outcomes served | C07-O2, C07-O3, C11-O4 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01, CAP-01 |
| Deal facts it must match | Cedar Court: ID checks on both owners (CORE-KYC-01 to -03). |
| Formulas fed (input) | None (gate document) |
| Input rule | ID and OFAC results must name the same person as the ownership chart (CORE-KYC-02). |
| Policy rules | CORE-KYC-02, CORE-KYC-01 |
| Fraud typologies (11.3) | FRD-01 Straw borrower, FRD-02 Occupancy fraud, FRD-11 Seller impersonation or title theft |
| Data still needed | None beyond names in the deal file. |

### DOC-54: AMC engagement letter

**What it is.** The lender's order to an appraisal management company, naming the appraiser, the scope and the client. **Who produces it.** Lender, through its AMC.

**Real format.** Engagement letter or order confirmation with the intended user, value types and fee.


**Fields a junior analyst must read**

- Client and intended user is the lender
- Ordered through the AMC, not the borrower
- Value types: as-is, after-repair, as-stabilized
- Appraiser licence

**Defects a reviewer most often catches (planted-defect bank)**

1. The borrower or broker is named as client.
2. The appraiser was named by the broker.
3. The scope omits the after-repair value the loan sizes on.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; 11.1 |
| First taught | C5 |
| Previews | - |
| Reappears | C7 |
| Outcomes served | C05-O4, C05-O7, C07-O3 |
| Deals | RD-RES-01, RD-MF-01, RD-COM-01 |
| Deal facts it must match | All three deals use lender-ordered appraisals (CORE-VAL-01). |
| Formulas fed (input) | None (gate document) |
| Input rule | Only an appraisal ordered under this letter may size a loan (CORE-VAL-01). |
| Policy rules | CORE-VAL-01, CORE-VAL-03, RES-GEN-06 |
| Fraud typologies (11.3) | FRD-03 Inflated or broker-supplied after-repair value, FRD-07 Related-party appraiser or contractor |
| Data still needed | None. |

### DOC-55: Rate-cap confirmation and collateral assignment

**What it is.** The trade confirmation for the interest-rate cap and the assignment of its payments to the lender. **Who produces it.** Cap counterparty, through the borrower's hedge adviser; assignment signed by the borrower and acknowledged by the counterparty.

**Real format.** Confirmation with notional, strike, index, term, premium and day count; separate assignment and acknowledgement.


**Fields a junior analyst must read**

- Counterparty and its rating
- Notional against the full commitment
- Strike and index
- Term against loan maturity
- Day count
- Assignment to the lender acknowledged

**Defects a reviewer most often catches (planted-defect bank)**

1. The notional covers the funded balance, not the full commitment (D-CORE-30).
2. The term ends before loan maturity.
3. The counterparty is rated below A / A2 (MF-BR-09).
4. The assignment is not acknowledged by the counterparty.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C8 O3 |
| First taught | C8 |
| Previews | - |
| Reappears | C11, C12 |
| Outcomes served | C08-O3, C11-O1, C12-O2, C12-O3 |
| Deals | RD-MF-01, RD-COM-01 |
| Deal facts it must match | Cedar Court: strike 4.25%, 24 months, notional $5,140,000, A-rated counterparty, cost $60,000 (course assumption). Birchwood Plaza: strike 4.25%, 24 months, notional $3,520,000, cost $40,000. |
| Formulas fed (input) | F-MF-22 (strike); F-MF-12 (strike plus spread) |
| Input rule | Coverage is tested at the higher of the note rate and strike plus spread (F-MF-12; MF-BR-09). |
| Policy rules | MF-BR-09, MF-BR-11 |
| Fraud typologies (11.3) | - |
| Data still needed | None. |

### DOC-56: Plans, specifications and building permit

**What it is.** The drawings and specifications for the work, and the municipal permit that allows it. **Who produces it.** Architect or engineer; the municipality issues the permit.

**Real format.** Plan set and specification book; permit card or letter with scope and expiry.


**Fields a junior analyst must read**

- Permit number, scope and expiry
- Plans match the budget and the contract
- Third-party plan and cost review

**Defects a reviewer most often catches (planted-defect bank)**

1. No permit before the first construction draw (RES-GU-04).
2. The permit scope is narrower than the budget.
3. The plan set differs from the one priced in the contract.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; C8 O4 |
| First taught | C8 |
| Previews | - |
| Reappears | C12, Capstone |
| Outcomes served | C08-O4, C12-O1 |
| Deals | CAP-01, RD-RES-01 |
| Deal facts it must match | Maple Run: rehab budget includes $1,000 for permits; no structural work. |
| Formulas fed (input) | None (gate document) |
| Input rule | Permits are needed before the first construction draw; no exception (RES-GU-04). |
| Policy rules | RES-GU-04, RES-GU-10 |
| Fraud typologies (11.3) | FRD-07 Related-party appraiser or contractor |
| Data still needed | Capstone plan set (CAP-01 not authored). |

### DOC-57: Payoff letter

**What it is.** A lender's statement of the amount needed to repay a loan in full on a stated date, with per diem after that date. **Who produces it.** The servicer of the loan being repaid.

**Real format.** Letter with principal, accrued interest to the payoff date, fees, per diem and wire instructions.


**Fields a junior analyst must read**

- Good-through date
- Principal and accrued interest
- Exit and other fees
- Per diem
- Wire instructions verified by callback

**Defects a reviewer most often catches (planted-defect bank)**

1. Interest counts the payoff day (the payoff day does not count).
2. The exit fee is missing.
3. Wire instructions differ from those on file.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C12 O7 |
| First taught | C11 |
| Previews | - |
| Reappears | C12 |
| Outcomes served | C11-O2, C12-O7 |
| Deals | RD-RES-01, RD-MF-01 |
| Deal facts it must match | Maple Run bridge payoff $340,000. Cedar Court bridge payoff $5,140,000 plus the 0.50% exit fee, $25,700: $5,165,700. |
| Formulas fed (input) | F-CORE-32 (balance, rate, days and fees); F-CORE-05 (per diem) |
| Input rule | Interest runs up to but not including the payoff day. |
| Policy rules | CORE-PRC-06, CORE-KYC-07 |
| Fraud typologies (11.3) | FRD-09 Closing wire fraud |
| Data still needed | None. |

### DOC-58: Intercreditor agreement

**What it is.** The agreement between the senior lender and a mezzanine lender on payment priority, cure rights and foreclosure on the pledged equity. **Who produces it.** Counsel for both lenders.

**Real format.** Agreement with standstill, cure, purchase-option and transfer terms.


**Fields a junior analyst must read**

- Payment priority
- Cure rights and periods
- Purchase option
- Qualified transferee test for a mezzanine foreclosure
- Modification consents

**Defects a reviewer most often catches (planted-defect bank)**

1. The mezzanine lender may foreclose without meeting a transferee test.
2. Cure periods run past the senior lender's remedies.
3. The senior loan cannot be modified without mezzanine consent.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; TM-31 |
| First taught | C9 |
| Previews | - |
| Reappears | C13 |
| Outcomes served | C09-O1, C13-O3 |
| Deals | Exam-only fictional deal |
| Deal facts it must match | No running deal has mezzanine debt. Items use an exam-only fictional deal. |
| Formulas fed (input) | None (gate document) |
| Input rule | Senior documents and the intercreditor agreement decide who loses first. |
| Policy rules |  |
| Fraud typologies (11.3) | - |
| Data still needed | An exam-only deal with mezzanine debt. No policy rule on mezzanine debt (open item). |

### DOC-59: Take-out lender quote

**What it is.** A refinance lender's indicative terms for the loan that will repay the bridge. **Who produces it.** Agency, bank or life-company lender, often through a broker.

**Real format.** Term sheet or quote letter with rate, amortization, DSCR and LTV tests and its date.


**Fields a junior analyst must read**

- Quote date and expiry
- Rate basis
- Amortization and term
- DSCR and LTV tests
- Conditions

**Defects a reviewer most often catches (planted-defect bank)**

1. The quote is stale.
2. The quote's DSCR uses pro forma income.
3. The rate omits a spread or fee the course adds.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C8 O6 |
| First taught | C8 |
| Previews | - |
| Reappears | C12, C14 |
| Outcomes served | C08-O6, C12-O3, C14-O5 |
| Deals | RD-MF-01, RD-COM-01 |
| Deal facts it must match | Cedar Court: agency 10-year fixed 6.55% as of 16 Nov 2026; the course sizes at the 7.25% grid rate. Birchwood Plaza: course take-out rate 7.75%. |
| Formulas fed (input) | F-MF-20 (take-out rate); F-COM-10 (take-out rate) |
| Input rule | The course sizes exits on its own stated rate, not the quote, where the policy says so (D-CORE-31). |
| Policy rules | MF-BR-08 |
| Fraud typologies (11.3) | - |
| Data still needed | None. |

### DOC-60: Sources and uses with mezzanine debt and preferred equity

**What it is.** A table of every source and every use of funds for a deal with a layered capital stack. **Who produces it.** Sponsor or its adviser; the underwriter rebuilds it.

**Real format.** Two-column table, sources and uses, with totals that tie.


**Fields a junior analyst must read**

- Senior loan, mezzanine, preferred equity and common equity
- Uses: price, costs, reserves, fees
- Totals tie
- Combined leverage

**Defects a reviewer most often catches (planted-defect bank)**

1. Sources do not equal uses.
2. Preferred equity with a fixed return is shown as common equity.
3. Fees financed by the mezzanine loan are left out of combined leverage.

| Item | Value |
| --- | --- |
| Quality bar | 9.6; C8 O7 |
| First taught | C8 |
| Previews | - |
| Reappears | C14 |
| Outcomes served | C08-O7, C14-O1 |
| Deals | Exam-only fictional deal |
| Deal facts it must match | No running deal has a layered stack. Items use an exam-only fictional deal. |
| Formulas fed (input) | F-MF-16 (senior and mezzanine amounts) |
| Input rule | Combined leverage counts every layer ahead of common equity. |
| Policy rules |  |
| Fraud typologies (11.3) | - |
| Data still needed | An exam-only deal. No policy rule on combined leverage beyond F-MF-16 (open item). |

### DOC-61: Buyer or warehouse eligibility sheet

**What it is.** A capital partner's list of loans it will buy or finance, with advance rates and exclusions. **Who produces it.** Loan buyer or warehouse lender.

**Real format.** Matrix of eligibility criteria, concentration limits and repurchase triggers.


**Fields a junior analyst must read**

- Eligible products and states
- Leverage and coverage limits
- Advance rate
- Exclusions and concentration limits
- Repurchase triggers

**Defects a reviewer most often catches (planted-defect bank)**

1. A loan breaches one criterion but is listed as eligible.
2. A repurchase trigger is missed on a seasoned loan.
3. A concentration limit is breached by a new loan.

| Item | Value |
| --- | --- |
| Quality bar | 10.3; C14 O2 |
| First taught | C14 |
| Previews | - |
| Reappears | - |
| Outcomes served | C14-O2 |
| Deals | Exam-only fictional deal |
| Deal facts it must match | Not authored. C14 O2 is blocked until the owner supplies it. |
| Formulas fed (input) | None (gate document) |
| Input rule | The partner's sheet binds the loan's financing; our policy binds approval. |
| Policy rules |  |
| Fraud typologies (11.3) | - |
| Data still needed | Owner to supply a fictional sheet (open item 9). No figures are invented here. |

### DOC-62: Market or feasibility study

**What it is.** A study of demand, supply, rents or sale prices and absorption that tests whether a project can lease or sell as planned. **Who produces it.** Market consultant, or the appraiser's market section.

**Real format.** Narrative report with supply pipeline, comparable rents or sales, absorption and a stabilization date.


**Fields a junior analyst must read**

- Comparable rents or sale prices
- Supply pipeline
- Absorption rate and stabilization date
- Sensitivity to rent and cap rate

**Defects a reviewer most often catches (planted-defect bank)**

1. Comparables are newer or in a stronger submarket.
2. The supply pipeline omits permitted projects.
3. Absorption assumes no competition.

| Item | Value |
| --- | --- |
| Quality bar | 9.3; TM-26 |
| First taught | C8 |
| Previews | - |
| Reappears | C14, Capstone |
| Outcomes served | C08-O4, C08-O6, C14-O1 |
| Deals | CAP-01 |
| Deal facts it must match | Capstone not authored. |
| Formulas fed (input) | None (gate document) |
| Input rule | Stabilized income for the back-door test comes from the study, cross-checked to the appraisal. |
| Policy rules |  |
| Fraud typologies (11.3) | - |
| Data still needed | Capstone study. No policy rule on feasibility (theory map owner decision 3). |

## 6. Fraud typologies by document (11.3 cross-check)

| Row | Typology | Documents that reveal it |
| --- | --- | --- |
| FRD-01 | Straw borrower | DOC-05, DOC-06, DOC-07, DOC-08, DOC-12, DOC-52, DOC-53 |
| FRD-02 | Occupancy fraud | DOC-46, DOC-06, DOC-35, DOC-50, DOC-53 |
| FRD-03 | Inflated or broker-supplied after-repair value | DOC-03, DOC-04, DOC-41, DOC-54 |
| FRD-04 | Rapid flip chains (title chain, seasoning) | DOC-05, DOC-19 |
| FRD-05 | Fake leases or rent rolls | DOC-01, DOC-02, DOC-26, DOC-35, DOC-50 |
| FRD-06 | Altered bank statements | DOC-10, DOC-11 |
| FRD-07 | Related-party appraiser or contractor | DOC-03, DOC-15, DOC-18, DOC-30, DOC-54, DOC-56 |
| FRD-08 | Draw fraud | DOC-16, DOC-29, DOC-30, DOC-31, DOC-32, DOC-33, DOC-51 |
| FRD-09 | Closing wire fraud | DOC-13, DOC-27, DOC-28, DOC-57 |
| FRD-10 | Double-pledged collateral | DOC-10, DOC-19, DOC-44, DOC-47, DOC-51 |
| FRD-11 | Seller impersonation or title theft | DOC-53 |
| FRD-12 | Dual contracts or undisclosed seller credits | GAP |

Every typology in 11.3, plus FRD-11 and FRD-12, has at least one revealing document. The fraud matrix cites these IDs in `document_ids`.

## 6a. Exhibit IDs mapped to documents

Exam exhibits carry `EXH-Cxx-nn` IDs (exam-blueprint-template.md). Each is built from these registry documents; items record them in `source_document`.

| Exhibit | Source documents |
| --- | --- |
| EXH-C08-01 | DOC-14, DOC-05 |
| EXH-C08-02 | DOC-03 |
| EXH-C08-03 | DOC-01, DOC-02, DOC-03 |
| EXH-C08-04 | DOC-14, DOC-55, DOC-02 |
| EXH-C08-05 | DOC-16, DOC-17, DOC-15 |
| EXH-C08-06 | DOC-59, DOC-02 |
| EXH-C08-07 | DOC-60 |
| EXH-C08-08 | DOC-14 |

## 7. Open items (no limit invented)

| # | Item | Detail | Needs |
| --- | --- | --- | --- |
| 1 | Capstone deal | The ground-up capstone (CAP-01) is not authored. Recommendation (CCO review 6): RES-GU, a ground-up 1-4 unit spec build, because RES-GU-02 to -10 give a full rule set while MF-CON is teaching only. The owner decides before M4; DOC-15 to -18, -31 to -33, -56 and -62 wait on it. | Owner decision (cfi-cref-comparison H.2) |
| 2 | Running Deals detail | Most documents need detail the Running Deals tab lacks: unit and suite rows, T-12 lines, comparables, title schedules, survey, insurable values, SREO, payment history. Each addition must tie to existing totals and be made in the Course Bible. | Course Bible change; changelog |
| 3 | Good-standing certificate age | No policy age limit. Defects test name and status only until a rule exists. | Owner decision |
| 4 | PFS age | No policy age limit (P-C6-3). | Owner decision |
| 5 | Change-order consent | No rule on when the lender must approve a change order. This is the C8 grey case in the exam template (7.4): the key is to condition the draw on credit-officer approval. | Owner decision |
| 6 | Retainage outside commercial construction | Only COM-CON-10 sets retainage. Residential and multifamily drafts treat retainage as a market concept. | Owner decision |
| 7 | Remittance rule | No servicing-fee, remittance-date or deadline rule (C12 4.5 item 6). DOC-38 shows gross collections only. | Owner decision |
| 8 | Remittance deal | DOC-38 needs a what-if in which Cedar Court is sold to a loan buyer. Confirm, or pick another deal. | Owner decision |
| 9 | Buyer eligibility sheet | DOC-44 needs a fictional buyer or warehouse eligibility sheet (coverage review item 2). | Owner decision |
| 10 | Portfolio list | DOC-37 and DOC-45 need a small fictional portfolio around the three deals. | Course Bible change |
| 11 | F-CORE-38 and -39 | Reserved for C7. DOC-12 feeds them once defined. | Formula Library |
| 12 | Site visit rule | No policy rule requires a site visit (DOC-50). | Owner decision |
| 13 | Seller identity and seller credits | No rule on confirming the seller's identity on a purchase (FRD-11) or on netting seller credits (FRD-12). | Owner decision |
| 14 | Mezzanine and preferred equity | No rule on subordinate debt (DOC-58, DOC-60). Items use exam-only deals. | Owner decision |
| 15 | Birchwood environmental basis | REG-14 item 1 needs a stated basis for no Phase II, such as a no-further-action letter. Add it to the Course Bible or keep the item a what-if. | Course Bible change |

## 8. Format references checked

Opened or searched on 22 Nov 2026. Tags in section 5 say which were read in the primary text and which only through a summary.

| Reference | What was confirmed | How |
| --- | --- | --- |
| 40 CFR 312.11 | E1527-21 meets all appropriate inquiries; E1527-13 only until 13 Feb 2024 | eCFR, primary text |
| 40 CFR 312.20(a), (b) | One-year inquiry window; five components within 180 days | eCFR, primary text |
| 12 CFR 1026.3(a)(1) | Business, commercial or agricultural purpose credit is exempt | eCFR, primary text |
| 42 U.S.C. 4012a(b)(1)(A) | Flood cover at least the lesser of principal balance and the NFIP maximum (regulated lenders) | LII, primary text |
| ALTA Commitment 2021 v. 01.00 | Schedule A, B-I Requirements, B-II Exceptions; not valid without all parts | Filed copy (Florida OIR), via search summary |
| 2026 ALTA/NSPS standards | Effective 23 Feb 2026; supersede 2021 for new surveys | Law-firm and ALTA summaries; primary text not opened |
| ASTM E2018-24 | Current PCA guide; replaced E2018-15 (Jan 2024) | ASTM store page and summaries; standard not opened |
| ACORD 25 and 28 | 25 is liability; 28 is evidence of commercial property insurance and confers no rights | ACORD FAQ and NY DFS list, via search summary |
| UAD 3.6 and redesigned URAR | Mandatory for GSE submissions from 2 Nov 2026; legacy 1007 only in limited cases | Fannie Mae and Freddie Mac FAQs, via search summary |
| AIA G702 and G703 | Application for payment and continuation sheet; change orders carried as G703 lines | AIA help center, via search summary |
| CREFC IRP | v8.4 (Mar 2024) current; v8.5 approval reported in 2026; watchlist guideline adds loans two or more payments past due | CREFC pages, via search summary |
| FEMA SFHDF | Form 086-0-32, now FF-206-FY-21-116 | OMB 1660-0040 supporting statement, via search summary |

## Self-check

1. Are all 15 types in 9.1 mapped to a document first taught in C4 or later? Yes (section 2.1).
2. Are the four 9.7 documents used in both C12 and C13? Yes (section 2.2).
3. Are all seven construction documents registered, with C8 and C12 homes? Yes (section 2.3).
4. Does every module from C4 to C14 have at least one document? Yes. C10 is thin; see section 2.4.
5. Does every entry give 3-5 defects, a first module and its formula inputs? Yes; the build script rejects an entry that does not. Four entries use an exam-only fictional deal (DOC-58, -60, -61) or the unauthored capstone.
5a. Does every entry name the outcomes it serves, with none before its first-taught module? Yes (build check). Derived documents (DOC-39, -42, -44) feed no formula.
6. Is any policy limit invented? No. Every formula and rule ID was matched to the current Formula Library and Model Credit Policy snapshots.
7. Do deal facts match the Running Deals tab? They were copied from `running-deals.md` (22 Nov 2026). Recheck them after any Course Bible change.

## What to look up yourself

1. The 2026 ALTA/NSPS Minimum Standard Detail Requirements primary text on alta.org. Only summaries were read.
2. The AIA A101, A102 and G701 forms on aiacontracts.com, before DOC-15 and DOC-32 are drafted.
3. The CREFC IRP data dictionary, to name delinquency, watchlist and remittance fields in DOC-36 to -38. CREFC refused automated access in the needs analysis.
4. Fannie Mae Form 216 and the URAR rental section, to confirm whether DOC-02's residential variant should use a legacy form.
5. Lien waiver forms in Ohio, North Carolina and Indiana. No statutory form was confirmed for these states.
6. Secretary of State certificate names in the three deal states (DOC-09).

## How to check it

1. Validate the twin: `.venv\Scripts\python.exe -c "import json; d=json.load(open('docs/curriculum/document-registry.json', encoding='utf-8')); print(len(d['documents']))"` should print 62.
2. For any entry, find each ID in `outcomes` in `docs/assessment/outcomes.json` and confirm that outcome lists the document in `document_ids`.
3. For any deal fact, search `data/running-deals/running-deals.md` for the figure.
4. For any formula or rule ID, search `docs/formulas/formula-library.md` or `docs/credit-policy/model-credit-policy.md`.
5. Recompute one provenance example: Cedar Court income is the lesser of $702,000 and $708,000, so $702,000.
6. Open 40 CFR 312.20 on ecfr.gov and confirm the one-year and 180-day windows used in DOC-22.
