# Coverage review: BPL core course (C0-C14)

Model policy for training - not for live lending decisions.

| Item | Value |
| --- | --- |
| Provider | BPL Academy |
| Program | BPL-CORE, C0-C14 (integrated QAS Self Study series) |
| Inputs | `docs/curriculum/needs-analysis.md` v0; `docs/curriculum/c00`-`c14-blueprint.md` v0 (all 22 Nov 2026); Course Bible §3, §4 and §7 (`docs/course-bible.md`, snapshot 22 Nov 2026, current per `docs/SNAPSHOT.md`); `docs/accreditation/qas-spec.md` |
| Prepared | 22 Nov 2026 |
| Status | v0 for owner review. Blueprints were edited where this review moved a topic; no lesson, Course Bible or changelog text was changed |

**What this checks.** Four things, across all 15 blueprints:

1. Every needs-analysis task (41) has at least one objective.
2. No topic is taught in depth in two modules. Each has one owner; other modules point to it.
3. Prerequisites run in order and match Course Bible §3.
4. The industry topics the needs analysis flags as missing (§4, items 1-7) each have a home.

## 1. Coverage matrix (task × module)

**Key.** **T** = taught: an objective is built on this task. A = applied or partial: an objective uses the task, or covers part of it. p = preview only. Blank = not tagged. "Owner" is the module that teaches the task in full. Tags come from each blueprint's objective table, after the edits in §2.

| Task | C0 | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 | Owner |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | --- |
| O1 Find and qualify borrowers, brokers | p | A |  |  |  |  |  | A |  |  |  |  |  |  |  | Partial: C7 (broker diligence), C1 (marketing limits). Selling is on-the-job (open item 6) |
| O2 Screen business purpose and occupancy | p | **T** |  |  |  |  |  |  |  |  | A |  |  |  |  | C1 |
| O3 Collect the application file |  | A |  |  |  |  | **T** | A |  | A |  |  |  |  |  | C6 |
| O4 Pre-size; non-binding term sheet | p | A | A | A |  |  |  |  | **T** |  | A |  |  |  |  | C8 |
| O5 Manage borrower to closing |  |  | A |  |  |  |  |  |  |  |  | **T** |  |  |  | C11 |
| O6 Pitch the deal to committee | p |  | A |  | A | A |  |  |  |  |  |  |  |  | **T** | C14 |
| U1 Spread rent roll to NOI and NCF |  |  |  |  | **T** |  |  |  |  |  |  |  |  |  |  | C4 |
| U2 Review appraisals, BPOs, AVMs | p |  |  |  | A | **T** |  | A |  |  |  |  |  |  |  | C5 |
| U3 Analyze sponsor and guarantor |  |  | A |  |  |  | **T** |  |  |  | A |  |  | A |  | C6 |
| U4 KYC, OFAC, fraud red flags |  | p |  |  |  |  |  | **T** |  |  |  | A |  |  |  | C7 |
| U5 Size the loan; binding test | | | p | **T** | A | A |  |  | **T** | A |  |  |  |  |  | C8 (C3 owns the math) |
| U6 Construction and rehab feasibility |  |  |  |  |  | A |  |  | **T** |  |  |  | A |  |  | C8 primer; R3, M5 in depth |
| U7 Title, insurance, environmental, tenant papers |  |  |  |  | A |  |  |  |  | **T** |  |  |  | A |  | C9 |
| U8 State licensing, usury, foreclosure, recourse | p | p |  | A |  |  |  |  | A |  | **T** |  |  | A |  | C10 |
| U9 Credit memo, conditions, exceptions |  |  | p |  | A |  | A |  | A | A |  |  |  |  | **T** | C14 |
| U10 Stress-test exit and refinance | p |  |  | A | A | A |  |  | **T** |  |  |  | A |  | A | C8 |
| U11 Investor and securitization fit | p |  |  |  |  | A |  |  |  |  |  |  |  |  | **T** | C14 (new O2) |
| F1 Clear conditions precedent |  |  | p |  |  |  |  |  |  |  |  | **T** |  |  |  | C11 |
| F2 Settlement statement and funds flow |  | p |  | A |  |  |  |  |  | A |  | **T** |  |  |  | C11 |
| F3 Closing instructions and wire control |  |  |  |  |  |  |  | A |  |  |  | **T** |  |  |  | C11 (pre-release); C7 owns the post-diversion response |
| F4 Title policy, recording, UCC |  |  |  |  |  |  |  |  |  | **T** |  | **T** | A |  |  | C9 (title, UCC); C11 (recording acts, gap period). Split by subtopic, no overlap |
| F5 Post-close file; board to servicing |  |  | p |  |  |  |  |  |  |  |  | **T** | A |  |  | C11 |
| F6 Deliver collateral file to custodian or buyer | p |  |  |  |  |  |  |  |  |  |  | **T** |  |  | p | C11 |
| S1 Bill interest; late fees; default interest |  |  |  | A |  |  |  |  |  |  | A |  | **T** | A |  | C12 (C3 math; C10 legal limits; C13 default interest) |
| S2 Administer draws |  |  |  |  |  |  |  |  |  |  |  |  | **T** |  |  | C12 |
| S3 Reporting, covenants, cash management |  |  |  |  |  |  |  |  |  | p |  |  | **T** |  |  | C12 |
| S4 Risk-rate; watch list | p |  | A |  |  |  |  |  |  |  |  |  | **T** | A |  | C12 (C2 owns the scale and definitions) |
| S5 Maturities, extensions, modifications | p |  |  |  |  |  |  |  | A |  |  |  | **T** | A |  | C12 |
| S6 Interest rate caps |  |  |  | A |  |  |  |  |  |  |  |  | **T** |  |  | C12 (C3 owns rate mechanics) |
| S7 Casualty and insurance proceeds |  |  |  |  |  |  |  |  |  | p |  |  | **T** |  |  | C12 (Understand level until a proceeds rule exists) |
| S8 Payoff and lien release |  |  | p | A |  |  |  |  |  |  |  |  | **T** |  |  | C12 |
| S9 Work defaults; forbearance |  |  |  |  |  |  | A |  |  |  |  |  |  | **T** |  | C13 |
| S10 Deed in lieu, foreclosure, receiver, REO |  |  |  |  |  |  |  |  |  | p | A |  |  | **T** |  | C13 |
| S11 Report to investors | p |  |  |  |  |  |  |  |  |  |  |  | **T** |  |  | C12 (new O8) |
| K1 Approve within authority | p |  | **T** |  |  |  | A |  |  |  |  | A |  |  | A | C2 |
| K2 Set credit policy; track exceptions | p |  | **T** |  |  |  |  | A | A | A |  |  |  |  | **T** | C2 (policy and standards); C14 (exception log and layering). Split by subtopic |
| K3 Portfolio concentration limits |  |  | A |  |  |  | A |  |  |  |  |  |  |  | **T** | C14 |
| K4 Expected loss; rating validation; loan review |  |  |  |  |  |  |  |  |  |  |  |  | A | A | **T** | C14 |
| K5 Valuation governance |  |  |  |  |  | **T** |  |  |  |  |  |  |  |  |  | C5 |
| K6 Fair lending on residential collateral |  | **T** |  |  |  | A |  |  |  |  |  |  |  |  |  | C1 (file level). Program level is open item 4 |
| K7 Capital-partner terms |  | | | A |  |  |  |  |  |  |  |  | A |  | **T** | C14 (new O2 and O4) |

**Result.** All 41 tasks now have at least one objective. Before this review, S11 had a C0 preview only, and U11 rested on one appraisal-rule tag in C5. O1 is covered only in part, by design (open item 6).

## 2. Duplications found and resolved

Each row names the owner. The other modules now point to it. Every listed blueprint was edited on 22 Nov 2026.

| # | Topic | Taught in depth in | Owner now | What changed in the others |
| --- | --- | --- | --- | --- |
| D1 | Supervisory LTV table, 100% and 30% exception aggregates, board reporting (12 CFR 34 Subpart D App. A) | C0, C2, C8, C14 | **C2** (O2) | C0 previews the 85% figure only. C8 applies it as a sizing comparator. C14 applies it to buyer re-tests |
| D2 | CRE concentration criteria (OCC Bulletin 2006-46) | C0, C2, C14 | **C14** (O4) | C0 one sentence. C2 keeps the sponsor cap (CORE-CONC-01) only |
| D3 | Risk retention (17 CFR 246.4, 246.7) | C0, C14 | **C14** (new O2) | C0 names the 5% floor and keeps its $17,000 illustration |
| D4 | Approver routing (CORE-AUTH-01, F-CORE-29) | C2 O4, C14 O2, C6 O6 | **C2** (O4) | C14's old O2 was the same objective. It is replaced by the capital-partner objective. C6 and C11 apply the routing |
| D5 | Rating justification with guarantor support (OCC Bulletin 2026-56) | C2 O6, C12 O5 | **C12** (O5) | C2 O6 becomes "Assign a rating, citing the definition" (Apply). C2 keeps the scale and definitions |
| D6 | Expected loss and CECL | C2 O7, C14 O7 | **C14** (O7) | C2 O7 now carries information economics (Akerlof; Stiglitz and Weiss), moved from its depth list. The missing expected-loss formula is now C14's open item only |
| D7 | Exception log and layering (CORE-EXC-02, -04) | C2, C14 | **C14** (O3) | C2 names both as routing facts |
| D8 | Springing recourse, *Cherryland*, guaranty law, suretyship waivers | C2, C6, C9 | **C9** (O2) | C2 one sentence; C6 keeps guaranty type as a credit input and points to C9 |
| D9 | Guarantor collectibility (liquidity, net worth, contingent liabilities) | C6, C10 | **C6** (O3-O5) | C10 O7 uses C6's result and adds only state limits |
| D10 | Guaranty value: origination versus default | C10 O7, C13 O6 | Split | C10 O7 judges recourse at origination. C13 O6 rewritten: whether to enforce on a live default |
| D11 | ECOA guarantor-as-applicant split (*Hawkins*, *RL BB*, *Loper Bright*) | C1, C6 | **C1** (O5) | C6 applies CORE-BOR-05 and points to C1. *Loper Bright* moved to C1 |
| D12 | Floating-rate mechanics (SOFR, LIBOR Act, Regulation ZZ) | C3, C8 | **C3** (O5) | C8 keeps cap-strike sizing only; its freed words go to the construction primer |
| D13 | Exit break-even NCF | C8 O5, C14 O5 | **C8** (O5) | C14 reads the result at committee; C12 applies it at extension; C4 O6 stays with in-place shocks |
| D14 | Prepayment premium designs (step-down, yield maintenance, defeasance) | C8, C10 | **C8** (O6) | C10 tests enforceability only (perfect tender, penalty doctrine) |
| D15 | Bankruptcy (stay, SARE, 506, 548) | C10 O6, C13 O5 | **C13** (O5) | C10 O6 keeps SCRA and PTFA. C10 WE8 is dropped: it priced Birchwood at 7.65%, against D-CORE-27's 8.75%. C13 already has the corrected $24,791.67 case. C10 falls from 17,000 to 16,000 words and stays 3.4 credits |
| D16 | Wire fraud controls and recall | C7 O4, C11 O4 | Split | **C11** owns pre-release controls and UCC 4A-207. **C7** owns the post-diversion response (recall, IC3, SAR). Both objectives were rewritten |
| D17 | Mechanics' lien priority law | C9, C12 | **C12** (T3) | C9 keeps the title-commitment side (exception, endorsement, date-down) |
| D18 | CERCLA lender liability | C9, C13 | Split | **C9** owns the secured-creditor exemption and "participation in management". **C13** owns the post-foreclosure divestment duty |
| D19 | Rating versus nonaccrual versus charge-off | C12, C14 | **C12** for one loan | C14 aggregates them and owns the allowance |
| D20 | Valuation governance (K5) | C5, C14 (claimed in C5's overlap table) | **C5** | C14 never taught it; C5's overlap row corrected |

**Kept as introduce-then-apply, not duplication.** Business-credit adverse action (C1 teaches, C6 applies). Fair Housing Act (C1 owns; C5 applies 3605(b)(2) to appraisals). Market data series (C0 teaches how to read one; C3, C4, C5, C12 and C13 use one each, labelled). Late fees (C12 bills; C10 sets the legal limit).

## 3. Gaps placed (needs analysis §4)

No new module is proposed. Each topic fits an existing blueprint within the 1.5-6 credit band.

| # | Topic (needs analysis §4) | Tasks | Placed in | What was added |
| --- | --- | --- | --- | --- |
| 1 | Capital markets and loan sale | U11, F6, S11, K7 | **C14** new O2 and T2 (U11, K7); **C11** O6 (F6, already there); **C12** new O8 and T11 (S11); C0 preview | Warehouse advance and margin call; data tape and due diligence; reps, warranties and repurchase; pool eligibility; Regulation RR. C12 adds a loan-level investor report. C14 rises from 4.4 to 4.6 credits; C12 from 4.0 to 4.4 |
| 2 | Credit risk measurement | S4, K4 | C2 (scale, O6); C12 (rating, accrual, O5); C14 (expected loss, allowance, loan review, O7-O8) | Ownership clarified (D5, D6, D19). A worked expected-loss example still needs a formula (open item 1) |
| 3 | Environmental risk and lender liability | U7, S10 | C9 O6; C13 T8 | Split by stage (D18). RES collateral has no environmental screen: C9 lists it for the owner |
| 4 | Appraisal regulation and valuation governance | U2, K5 | C5 O4, O6 | Already placed by the C5 blueprint (12 CFR 34.42-34.45; 2010 Guidelines) |
| 5 | Fair lending on business-purpose loans | O1, K6 | C1 O4, O5; C5 O6 | Already placed (42 U.S.C. 3605(b)(1)(B), (b)(2)). Program-level oversight is open item 4 |
| 6 | Construction and development risk | U6, S2 | C8 O3 (feasibility primer, new); C12 O1 (draws) | Budget review, contingency, soft versus hard cost, contractor review, completion risk (OCC CRE handbook, "Underwriting ADC Loans"). Words offset by D12, so C8 stays 22,000 words and 4.6 credits |
| 7 | Market and submarket analysis | O6, U2, U10 | C0 O5 (cycle models); **C4** O3, new depth item 8 | Supply, absorption, submarket vacancy and rent growth, tested against a pro forma. C4 rises from 15,500 to 17,500 words and 3.6 to 3.8 credits |

**Smaller gap placed.** Task O1 (prospecting, brokers): C0 adds an origination-channel preview; C7 adds broker due diligence and broker-fed red flags (new depth item 6).

## 4. Sequence notes

The course runs C0 to C14 in order, so every blueprint's prerequisites point backward. No sequence breaks. But nine blueprints need more than Course Bible §3 lists. These are proposals for the owner; the Bible is unchanged.

| Module | Bible §3 prerequisite | Blueprint needs | Why | Proposed |
| --- | --- | --- | --- | --- |
| C6 | C2 | C2, C3 | F-CORE-21 uses C3's payment math | C2, C3 |
| C7 | C1 | C1, C6 | Look-through ownership (CORE-BOR-03) | C1, C6 |
| C8 | C3, C5 | C3, C4, C5, C6 | NCF (C4) and tier (C6) set the size and price | C4 comes through C5; add C6 |
| C9 | C2 | C2, C3, C5, C8 | Cost approach for ITV; commitment and holdback terms | C5, C8 |
| C10 | C1, C9 | C1, C3, C7, C9 | Per diem; red-flag routing | Add C3, C7 |
| C11 | C9 | C3, C7, C8, C9 | Day counts; wire red flags; points | Add C7, C8 |
| C12 | C11 | C3, C8, C9, C10, C11 | State Law Table rows; sizing tables | Add C8, C10 |
| C13 | C10, C12 | C6, C9, C10, C12 | Guaranty value (C6) is not on the C10 or C12 path | Add C6 |
| C14 | C8, C6 | C6, C8, C10, C11, C12, C13 | T2 uses C11's collateral file; T7 uses C12 and C13 results | Add C10, C13 (C11 and C12 come through C13) |

**Other sequence points.**

1. **C7 before C11.** C7 now teaches the response after a wire diversion. It needs one sentence on what the pre-release controls are; C11 teaches them in full. This keeps the order.
2. **C2 uses simple sums before C3 and C6.** C2 O3 tests ratios against limits, and O4 adds open exposure (F-CORE-29). Both are plain division and addition, so no break.
3. **C0 uses a C8 number.** C0 T5 quotes Cedar Court's $253,677.46 stressed shortfall as a given figure, not a calculation. That is a preview, so no break.
4. **Course Bible rules the blueprints exceed.** These need an owner decision, not a resequence:
   - §4 says 3-6 objectives. C1, C2, C9, C10, C12 and C13 have 7; C12 and C14 have 8. QAS allows 3-8 (Std 3.01).
   - LD-02 says core aims at levels 2-3. Every blueprint from C2 on reaches level 4 or above.
   - LD-03 caps a module at 4 hours (240 minutes). All 15 fit. C8 (235.1 minutes) and C14 (234.2) have under 6 minutes of headroom.
   - §3 hours (38 in all) are replaced by the formula figures below.

## 5. Totals

Credits use the Std 7.02 word-count formula: [(words ÷ 180) + media minutes + (all questions × 1.85)] ÷ 50, rounded down per module. Media is 0 everywhere. Figures are from the blueprints after this review's edits.

| Module | Counted words | All questions | Minutes | Raw credits | Credits (0.2) | Credits (0.5) | Bible §3 hours |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| C0 | 11,200 | 23 | 104.772 | 2.095 | 2.0 | 2.0 | 1 |
| C1 | 17,500 | 36 | 163.822 | 3.276 | 3.2 | 3.0 | 2 |
| C2 | 19,000 | 38 | 175.856 | 3.517 | 3.4 | 3.5 | 2 |
| C3 | 14,500 | 51 | 174.906 | 3.498 | 3.4 | 3.0 | 3 |
| C4 | 17,500 | 55 | 198.972 | 3.979 | 3.8 | 3.5 | 3 |
| C5 | 18,500 | 56 | 206.378 | 4.128 | 4.0 | 4.0 | 3 |
| C6 | 22,000 | 57 | 227.672 | 4.553 | 4.4 | 4.5 | 3 |
| C7 | 18,000 | 47 | 186.950 | 3.739 | 3.6 | 3.5 | 2 |
| C8 | 22,000 | 61 | 235.072 | 4.701 | 4.6 | 4.5 | 3 |
| C9 | 21,000 | 55 | 218.417 | 4.368 | 4.2 | 4.0 | 3 |
| C10 | 16,000 | 45 | 172.139 | 3.443 | 3.4 | 3.0 | 2 |
| C11 | 13,500 | 39 | 147.150 | 2.943 | 2.8 | 2.5 | 2 |
| C12 | 22,000 | 54 | 222.122 | 4.442 | 4.4 | 4.0 | 3 |
| C13 | 22,500 | 53 | 223.050 | 4.461 | 4.4 | 4.0 | 3 |
| C14 | 23,500 | 56 | 234.156 | 4.683 | 4.6 | 4.5 | 3 |
| **Total** | **278,700** | **726** | **2,891.433** | | **56.2** | **53.5** | **38** |

**Worked total.** 278,700 ÷ 180 = 1,548.333 minutes of reading. 726 × 1.85 = 1,343.100 minutes of questions. Sum: 2,891.433 minutes, or 48.2 hours of measured time. Credits are rounded down per module, so the claimable total is 56.2 credits, or 56.2 × 50 = 2,810 minutes (46.8 hours). Counting rule (22 Nov 2026, `qas-spec.md`): "all questions" counts review questions (self-checks included), scored interactive exercises and one exam form; open-answer practice and OJT are excluded. C0-C2 already count this way, so their rows and these totals are unchanged. C3, C4 and C5 still count 12 open-answer practice problems each; under the rule they would fall to 3.0, 3.4 and 3.6 credits (690 questions, 2,824.833 minutes, 55.0 credits in all).

**Range check (1.5-6 credits).** No module falls outside it. The smallest is C0 at 2.0; the largest are C8 and C14 at 4.6.

**Against the target.** The agreed target is about 50-70 hours, or 60-84 credits. The projection is 56.2 credits, 3.8 credits under the floor. Do not pad to close it. Final counts come from the finished lessons. The gap may close as lessons are written, or the owner may accept a shorter core.

**Fragile figures.** Four modules sit close to a rounding line. Recount them first when the lessons are final.

| Module | Raw | Line | Margin |
| --- | ---: | --- | --- |
| C3 | 3.498 | 3.5 at halves | 0.1 minute short |
| C4 | 3.979 | 4.0 | 1.0 minute short |
| C0 | 2.095 | 2.0 | 4.8 minutes over (about 860 words) |
| C10 | 3.443 | 3.4 | 2.1 minutes over (about 385 words) |

**Counting method is not uniform (fix before filing).** C0-C2 count review questions + 3 exercises + one exam form. C3-C14 also count scored practice items (8-14 each). C0-C2 list practice tasks in every chunk but do not count them. If those are scored, C0-C2 rise; if not, C3-C14 must show that theirs are. Pick one rule and apply it in the Phase 6 worksheets (open item 7).

## 6. Blueprint edits made in this review

| Blueprint | Edits |
| --- | --- |
| C0 | Depth items 2-4 cut to previews (D1-D3); origination-channel preview added; overlap table rebuilt |
| C1 | Owns the *Hawkins* split and *Loper Bright* (D11); overlap rows added; K6 program row marked as an open item |
| C2 | O6 rewritten to Apply (D5); O7 rewritten to information economics (D6); depth items 2-5 and 7 trimmed to owner pointers (D1, D2, D7, D8); overlap table rebuilt. Credits unchanged at 3.4 |
| C3 | Owns floating-rate mechanics (D12); prepayment row points to C8 |
| C4 | O3 extended to submarket evidence; new depth item 8 (gap 7); 3.6 to 3.8 credits; overlap rows added |
| C5 | Owns K5 (D20); prerequisite wording fixed (bank rules come from C0 and C2, not C1) |
| C6 | Guaranty law to C9 and *Hawkins* to C1, with freed words moved to items 1-2 (D8, D11); overlap rows added. Credits unchanged |
| C7 | O4 rewritten to the post-diversion response (D16); broker-fed files added (O1 gap); overlap rows corrected |
| C8 | Owns the exit break-even (D13) and prepayment designs (D14); floating-rate content to C3; construction feasibility primer (gap 6) |
| C9 | Owns guaranty law (D8); lien law and CERCLA divestment pointed to C12 and C13 (D17, D18) |
| C10 | Bankruptcy to C13 and WE8 dropped (D15); O6 and O7 rewritten; 17,000 to 16,000 words, still 3.4 credits |
| C11 | O4 limited to pre-release controls (D16); F6 ownership and C14 hand-off stated |
| C12 | New O8 investor reporting and T11 (S11); owns rating justification, lien law and loan-level accrual (D5, D17, D19); 4.0 to 4.4 credits |
| C13 | O6 rewritten to enforcement at default (D10); owns bankruptcy and CERCLA divestment (D15, D18) |
| C14 | O2 replaced by the capital-partner objective (D4, gap 1); O7 rewritten; supervisory LTV check corrected from 78.2% to 80.0%; 4.4 to 4.6 credits |

**Correction found.** C14 tested Birchwood's supervisory LTV as $3,520,000 ÷ $4,500,000 = 78.2%. For a purchase, Appendix A defines value as "the lesser of the actual acquisition cost or the estimate of value" [VERIFY: 12 CFR Part 34, Subpart D, Appendix A, "Value"; Cornell LII; checked 22 Nov 2026]. So the test is $3,520,000 ÷ $4,400,000 = 0.800000, or 80.0%. That matches C0. It is still under the 85% improved-property limit.

## 7. Open items for the owner

1. **Expected-loss formula.** No Formula Library entry and no PD source. C14 O7 stays at Understand until one exists.
2. **Buyer and warehouse eligibility sheet.** C14 O2 needs a fictional loan-level sheet: limits, advance rate, aging, repurchase window. Until then it uses the pool-level rating-agency anchors, labelled market.
3. **Investor remittance rule.** C12 O8 needs a servicing-fee strip, remittance date and report deadline, or it shows gross collections only.
4. **Fair-lending program oversight (K6, program level).** No core blueprint teaches program design. Decide: a compliance unit after C14, or out of scope.
5. **Construction feasibility limits.** No contingency or contractor-review rule exists. C8's primer is unscored on those points until one does.
6. **Origination as a sales skill (O1).** Consultative selling and pipeline building are not credit content. Confirm they stay on-the-job training.
7. **One question-counting rule** for all 15 credit worksheets (§5).
8. **Course Bible §3 and §4.** Prerequisites (§4 table), objective counts, LD-02 levels and the hours column, as listed in §4.

## Self-check

1. Does every needs-analysis task have an objective? Yes: 41 of 41 (§1). O1 is partial by design.
2. Is any topic still taught in depth in two modules? No. Twenty overlaps were given one owner, or split by subtopic or stage (§2).
3. Is any policy limit invented? No. New content uses existing rule IDs, market anchors labelled as such, or `[DATA]` and owner items.
4. Do the totals reproduce? Yes: 278,700 ÷ 180 + 726 × 1.85 = 2,891.433 minutes; module credits sum to 56.2.

## What to look up yourself

1. The Census Housing Vacancies and Homeownership and New Residential Construction release pages, before C4's submarket chunk is written. Not opened in this review.
2. The OCC CRE handbook section "Underwriting ADC Loans" (Mar 2022), for C8's feasibility primer. Cited from the needs analysis; not re-opened here.
3. The CREFC Investor Reporting Package, for C12 O8. CREFC returned HTTP 403 during the needs analysis, so it stays a look-up.
4. 17 CFR 246.4 and 246.7, re-opened before C14 T2 is drafted. This review relied on the needs analysis reading of 22 Nov 2026.

## How to check it

1. Pick any row in §1. Open the named owner blueprint and find the objective that carries the task tag.
2. Pick any row in §2. Search the non-owner blueprints for the topic and confirm each now points to the owner.
3. Recompute §5 in a spreadsheet: `=278700/180+726*1.85` should show 2891.43. For one module, C14: `=ROUNDDOWN(((23500/180)+(56*1.85))/50*5,0)/5` should show 4.6.
4. Open 12 CFR Part 34, Subpart D, Appendix A on LII and confirm the "Value" definition and the 85% improved-property limit.
