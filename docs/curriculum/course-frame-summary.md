# Course frame summary: Milestone 3 (C0-C14)

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Milestone | 3, Course frame |
| Prepared | 22 Nov 2026 |
| Status | v1 for owner review. Professor and chief credit officer (CCO) review fixes applied. Author material, not learner-facing |
| Acceptance rows | Quality bar 6.1-6.7, 7.1-7.4, 8.1-8.11, 9.1, 9.3, 9.6, 9.7, 11.1-11.3 ([quality-bar.md](../standards/quality-bar.md)) |
| Not changed | `modules/`, `scripts/`, `exports/`, `formulas/`, the Course Bible, the Model Credit Policy and the quality bar |

## 1. What the frame contains

| Document | Machine-readable twin | What it fixes |
| --- | --- | --- |
| [outcomes.md](../assessment/outcomes.md) | [outcomes.json](../assessment/outcomes.json) | Measurable outcomes per module, with Bloom level, job tasks, critical skills and every key each outcome serves |
| [exam-blueprint-template.md](../assessment/exam-blueprint-template.md) | Item JSON Schema inside it | Exam rules, item counts, item metadata, critical-item options, reliability, and the C8 worked blueprint |
| [theory-map.md](theory-map.md) | [theory-map.json](theory-map.json) | One home module per concept, revisits and previews, mechanism, misconceptions, readings, episodes |
| [prerequisites.md](prerequisites.md) | [prerequisites.json](prerequisites.json) | Module and formula prerequisites, and the 18 use-before-home flags with fixes |
| [regulatory-matrix.md](regulatory-matrix.md) | [regulatory-matrix.json](regulatory-matrix.json) | Each legal topic: rule, tagged sources, teaching module, outcomes, two review-only item ideas |
| [fraud-matrix.md](fraud-matrix.md) | [fraud-matrix.json](fraud-matrix.json) | Each fraud typology: red flags, registry documents, policy control, outcomes, one item idea |
| [document-registry.md](document-registry.md) | [document-registry.json](document-registry.json) | Every fictional source document: real format, fields, planted defects, modules, outcomes, formula inputs |

**One set of keys.** TM-01 to TM-38, REG-01 to REG-24, FRD-01 to FRD-12 and DOC-01 to DOC-62 are the only keys. The old TH-, FR- and outcomes-only REG keys are gone. Both link directions (key to outcome, outcome to key) are generated from one file, so they cannot disagree.

**Module IDs.** Modules are C0 to C14. The two-digit form appears only inside outcome, skill and exhibit IDs, such as C08-O5 and EXH-C08-05.

## 2. Counts

| Item | Count |
| --- | ---: |
| Modules | 15 |
| Outcomes | 106 (Bloom levels 1-6: 0, 17, 43, 26, 20, 0) |
| Critical outcomes | 38, holding 40 critical skills |
| Blocked outcomes (owner decision) | 2: C12-O8, C14-O2 |
| Theory concepts | 38 |
| Regulatory rows | 24 (REG-01 to -16 cover the ten quality bar 11.1 groups; REG-17 to -24 are new) |
| Fraud rows | 12 (the ten quality bar 11.3 typologies, plus FRD-11 and FRD-12) |
| Registry documents | 62 (45 before review, 17 added) |
| Prerequisite flags | 18 (15 before review, 3 added) |
| Exhibits mapped to documents | 8 (C8 worked example) |

## 3. Validation results (22 Nov 2026)

A script ran 29 checks on the six JSON twins and `outcomes.md`. All 29 passed.

| Check | Result |
| --- | --- |
| Every JSON file parses as UTF-8 | Pass (6 of 6) |
| Every module C0-C14 appears in the theory map, prerequisites and outcomes | Pass |
| Every module from C4 on has at least one document | Pass. C10 is thin: it teaches from DOC-25, DOC-14 and DOC-48, first taught elsewhere |
| Every regulatory and fraud topic has a teaching module and at least one outcome | Pass (24 and 12 rows) |
| Bloom ratios and 3-8 outcome counts meet quality bar 7.1 | Pass, all 15 modules |
| `outcomes.json` `check_errors` is empty | Pass |
| Theory, regulatory, fraud and document links agree in both directions | Pass (4 of 4) |
| Theory map: no revisit before its home; home and every revisit serve an outcome (7.2, 7.3) | Pass |
| Matrices: previews before the home, revisits after it, no outcome before the home (7.2) | Pass |
| Registry: no document used before its first-taught module | Pass |
| Fraud matrix and exhibit map point only to real DOC IDs | Pass |
| No retired keys (TH-nn, FR-nn) remain | Pass |
| Outcome homes match the theory map | Pass |
| Blocked outcomes marked | Pass |

The generators also stop on any sentence over 25 words in mechanisms, misconceptions and registry defects. No such sentence remains.

## 4. Review findings and how each was resolved

Both reviews were cut off at the end: professor item 15 and the CCO's list of cross-document inconsistencies. Everything visible was applied. Where the two reviews conflicted, the stricter requirement won unless it would invent a limit or cross an owner decision.

### 4.1 Professor's review

| # | Finding | Severity | Resolution |
| --- | --- | --- | --- |
| 1 | Three sets of IDs; homes disagree | Critical | TM, REG-01 to -24 and FRD keys only. Outcomes section 5 rebuilt from them, with homes from the theory map. Old change notes ("theory map home for concentration", "for loss severity") replaced; C03-O6 now says "TM-10 home". Every concept, row and document has an `outcomes` array |
| 2 | Theory-map homes with no outcome | Critical | New C05-O8 (land as an option; TM-16). C14-O2 reworded with sale price at the market yield (TM-36). C08-O5 now analyzes the rate build-up (TM-19 revisit, TM-20). C02-O4 adds correlated defaults (TM-06); a C02-O9 would break the 8-outcome limit. New TM-38 bankruptcy: home C13 (C13-O5), preview C9, tagged to 11 U.S.C. 362(a), 362(d)(3), 101(51B) |
| 3 | C8 holds 11 of 37 homes | Critical | TM-19 home moved to C2 (level 2); TM-22 home to C6 (level 4), which settles P-07. C8 now holds 9 of 38. TM-25 to -29 sit in a separate construction lesson inside C8. Splitting C8 is listed for the owner |
| 4 | Matrices put revisits before the home | Critical | `previews` column added; earlier modules moved there. FRD-09 home C7. FRD-08 drops C11. FRD-07: see conflict 1 below |
| 5 | Critical rule passes a guesser 43.75% of the time | Important | Template section 5 sets out options A (now), B (2 of 3, 15.6%) and C (both, 6.25%), with item counts. B recommended; owner decides (8.7, 8.11) |
| 6 | Bloom set by verb | Important | Two-reviewer tagging by cognitive task; `bloom_review` on outcomes and `bloom_reviewers_agree` on items. Level 4 and 5 item shells added. C01-O4 lowered to "Classify" (level 2); C02-O2 lowered to "Distinguish" (level 2) |
| 7 | Numbers; model versus market | Important | TM-19 shows both figures: 7.74% (approximation) and the expected-cash-flow IRR 7.91%. TM-27 labels 9% ÷ 12 a textbook convention; Actual/360 gives $47,612.08 (January-April, $74.28 more) or $48,650.92 (July-October). TM-04 states the 1.4% log drift, no amortization and maturity-only measurement (23.4% at zero drift; 38.8% at any point). TM-32 labels the $3,150,000 recovery a scenario assumption (P-14) |
| 8 | Citation standard | Important | Full forms, one edition per concept. Geltner et al. 4th ed. (Routledge, 2026) and Brueggeman and Fisher 2024 Release (McGraw Hill, 2024) confirmed on publisher pages. OCC Bulletin 2026-56 replaced by OCC Bulletin 2023-23, section IV.B (opened). Seven journal papers added, each marked "confirm before citing". Chapter numbers flagged to confirm in the books. Linneman: owner question |
| 9 | Registry inputs and order | Important | Credit memo, loan sale tape and extension request no longer feed formulas; rent roll, T-12 and note do. Lease and bank statements now first taught in C4; C4 gives estoppel facts as stated figures. Added site visit, intercreditor, take-out quote, sources and uses with mezzanine, rate-cap confirmation, guaranty, buyer eligibility sheet, feasibility study and more (DOC-46 to -62). Exhibits mapped to DOC IDs |
| 10 | Prerequisite graph | Important | C5 added to C6 and C7 (P-17). C03-O5 uses a stated cap strike (P-16). P-06 applied: C00-O5 now explains (level 2); TM-01's C0 level is 2; C8 and C13 analyze the cycle |
| 11 | Regulatory coverage gaps | Important | New REG-17 HMDA, REG-18 usury and fees, REG-19 mechanics' liens, REG-20 FCRA, REG-21 foreclosure overlays (SCRA, PTFA, bankruptcy), REG-22 state foreclosure and deficiency (points to State Law Table rows), REG-23 Fair Housing Act, REG-24 12 CFR Part 34 Subpart D. REG-12: C10 dropped from revisits; C13 kept; whether C10 should teach state UDAP is an owner question |
| 12 | Reliability | Important | KR-20, a decision-consistency index and the SEM (about 2.12 items at the cut) added to item analysis. Minimums left to the owner |
| 13 | Draft items | Nice | All matrix items labelled review-only drafts. Rule R20 limits "stop and refer" keys. Weak FRD-04 distractor replaced |
| 14 | Module ID format | Nice | C0-C14 for modules; two-digit form only inside IDs (stated in every twin) |
| 15 | Historical episodes | Nice | C14 now cites the 2006 interagency CRE concentration guidance (71 FR 74580) and the May 2023 Financial Stability Report; C8 keeps GAO-13-71 and GAO-13-704T. The C0, C8 and 2006 sources must be opened before citing |

### 4.2 CCO's review

| # | Finding | Severity | Resolution |
| --- | --- | --- | --- |
| 1 | No business-purpose certification document | Critical | DOC-46 added: previewed in C1, first taught in C6, reappears C7, C11, C12; all four deals; the four planted defects named. Registry section 6 lists occupancy fraud as DOC-46, DOC-06, DOC-35 first |
| 2 | ID collisions | Critical | Resolved with professor 1. The "provisional keys" paragraph is deleted |
| 3 | Home conflicts | Critical | Homes now match the theory map. Expected loss follows the professor's stricter fix (home C2, revisit C8 at level 4), not C08-O5 as home; see conflict 2 |
| 4 | False grey case on contingency | Critical | Grey case now uses the change-order approval silence (registry open item 5); the key conditions the draw on credit-officer approval. The template notes the three 10% contingency rules |
| 5 | Missing regulatory rows | Critical | REG-17 to REG-21 added as specified, with [VERIFY] tags; REG-17 opening text and 362(d)(3) opened, the rest marked "not opened" |
| 6 | Capstone unauthored | Critical | Registry open item 1 records the recommendation: RES-GU ground-up 1-4 unit spec build. Owner decides before M4 |
| 7 | Desk documents missing | Important | Added DOC-47 security instruments, DOC-48 guaranties, DOC-49 zoning, DOC-50 site visit, DOC-51 date-down and UCC search, DOC-52 experience pack, DOC-53 ID, DOC-54 AMC letter, DOC-55 rate cap, DOC-56 plans and permit, DOC-57 payoff letter |
| 8 | Thin construction outcomes | Important | Folded into existing outcomes, because C8 and C12 already have 8 (the maximum). C08-O4 adds contractor, contract type and permits. C12-O1 adds the loan-monitor report and the in-balance decision, with a second critical skill |
| 9 | Revisits before the home | Important | Resolved with professor 4 |
| 10 | REG-03 item 2 key | Important | Key reworded as given; distractors rebuilt |
| 11 | REG-14 dry-cleaner item | Important | Re-keyed as "What supports no Phase II?" on a stated what-if closure letter. Adding the basis to Birchwood is an owner Course Bible edit |
| 12 | FRD-05 figure | Important | Stem now starts "Cedar Court what-if:" |
| 13 | Indiana instrument | Important | FRD-10 says "mortgage" for Birchwood |
| 14 | Missing typologies | Important | FRD-11 seller impersonation and FRD-12 dual contracts added, each with a flagged policy gap and no limit |
| 15 | Untestable outcomes | Important | C12-O8 and C14-O2 carry `status: blocked` |
| 16 | C8 load | Nice | Resolved with professor 3 (TM-22 to C6, not C9) |
| 17 | FRD-03 bullets | Nice | Controls now split outside parentheses; CORE-VAL-03 cited for the desk review |
| 18 | FRD-04 boundary | Nice | $230,000, 23.3% below $300,000 |
| 19 | REG-15 item 2 | Nice | Key adds that loan buyers and warehouse lenders expect flood cover |
| - | Outcomes and documents not linked | Inconsistency | `document_ids` on outcomes, `outcomes` on registry entries, `source_document` on items |
| - | Fraud matrix said "no registry" | Inconsistency | DOC IDs added from registry section 6 |
| - | Topic modules differ between tags and matrices | Inconsistency | Tags are now derived from the matrices, so they agree by construction |

### 4.3 Conflicts between the reviews

1. **FRD-07 home.** The professor proposed C7; the CCO proposed C5. C5 is stricter: C05-O7, a critical outcome, tests related-party appraisers first. A C7 home would make that a use before the home. Home C5; revisits C7, C8 (contractor) and C12.
2. **Expected loss home.** The CCO asked for C8 as home; the professor asked for C2 at level 2 with C8 at level 4. C2 was chosen. It matches C02-O8 and frees C8 time. It stays within owner decision H3, since C2 uses labelled illustrative numbers.
3. **Capital stack.** The CCO suggested C9; the professor C6. C6 was chosen because C06-O7 already asks who is paid first at level 4.
4. **New outcomes.** Both reviews asked for new C8 or C12 outcomes. The 3-8 rule (7.1) is stricter, so the content was folded into C08-O4 and C12-O1.

## 5. Open owner questions

1. **Critical-item pass rule:** option A, B or C (template section 5). B or C needs a quality bar 8.7 edit and matching words in the Course Bible and qas-spec.md.
2. **Reliability minimums** for KR-20 and decision consistency (8.9).
3. **Split C8** into sizing and pricing, and construction and structure, or keep one module with a construction lesson.
4. **Capstone family:** RES-GU recommended; decide before M4.
5. **Confirm home moves:** TM-19 to C2, TM-22 to C6, TM-32 to C10, TM-06 to C2, FRD-07 to C5, FRD-09 to C7, new TM-38 in C13.
6. **Linneman:** cite it in a module, or drop it from the quality bar 6.5 example list.
7. **Blocked outcomes:** a remittance rule (C12-O8) and a buyer eligibility sheet (C14-O2).
8. **Birchwood environmental basis:** add a no-further-action letter to the Course Bible, or keep REG-14 item 1 a what-if.
9. **State UDAP in C10** (REG-12): add it, or leave it in C1 and C13.
10. **Policy gaps** with no rule today: Reg C coverage, mechanics' lien recording, FCRA notices, servicemember and tenant checks, fair lending, site visits, seller identity, seller credits, mezzanine debt, change-order consent. No limit was invented for any.
11. **Course outcomes** PCO1-PCO7, carried over from the first draft.

## Self-check

| Requirement | Status |
| --- | --- |
| Every critical and important finding fixed or listed for the owner | Done: sections 4 and 5 |
| IDs stable | Done: no ID was renumbered. New IDs were appended (C05-O8, TM-38, REG-17 to -24, FRD-11, -12, DOC-46 to -62, P-16 to -18) |
| JSON valid and consistent with the markdown | Done: both are generated from the same data; 29 checks pass |
| No invented policy limit, threshold or rate | Done: gaps are listed, not filled |
| Legal statements tagged | Done: new rows carry [VERIFY] tags that say checked or not opened |
| Running-deal numbers match | Done: new deal facts copied from `running-deals.md`; other figures labelled what-if |

## What to look up yourself

1. Open each "not opened" [VERIFY] source in REG-17 to REG-24 and TM-38 before C1, C6, C9, C10 and C13 teach them.
2. Confirm the chapter numbers and titles cited from Geltner et al. (4th ed.) and Brueggeman and Fisher (2024 Release) in each book's table of contents.
3. Open the seven journal papers in TM-01, -04, -05 and -14, and 71 FR 74580, and confirm each citation.
4. Confirm 12 CFR 1003.2(g) coverage for a non-depository lender before C01-O4's HMDA item is written.
5. Read the cut-off end of both reviews, and send back anything not covered here.

## How to check it

1. Run the validator with the repo's Python: `.venv\Scripts\python.exe -X utf8 validate_frame.py`. The script sits in the session scratchpad, outside the repo, because `scripts/` was out of scope. Ask for it to be added to `scripts/` if you want it in CI. It should print 29 PASS lines and no FAIL.
2. Pick any key, say TM-22. Its `outcomes` in `theory-map.json` should list C06-O7, and C06-O7 in `outcomes.json` should list TM-22.
3. In `fraud-matrix.json`, confirm every module in `previews` comes before `teach`, and every module in `revisit` after it.
4. Recompute two fixes: the IRR of −100, 9, 9, 105.48 is 7.91%; `=1-0.75^2` is 0.4375 and `=3*0.25^2*0.75+0.25^3` is 0.15625.
5. Search `docs/` for "TH-0" or "FR-0". Neither should appear in the frame files.

## 6. Owner decisions (22 Nov 2026)

1. **Capstone deal:** a ground-up 1-4 unit residential spec build (RES-GU).
2. **C8:** stays one module, with a dedicated construction lesson. The 5 categories of 3 stay.
3. **Concept home moves** in section 5 item 5 are accepted.
4. **Reliability minimums** (KR-20, decision consistency) are set at the pilot, using standard targets.
5. **Linneman** is cited only where a module genuinely uses it; otherwise it leaves the quality bar 6.5 example list.
6. **Birchwood environmental item** stays a what-if; no Course Bible change.
7. **Blocked outcomes** (C12-O8, C14-O2) stay blocked until the policy rules they need exist.
8. **Critical-item scoring option** is decided with the exam build (M6).
