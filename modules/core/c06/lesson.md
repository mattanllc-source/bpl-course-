# C6: Borrower, sponsor and guarantor analysis

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C6-lesson-v0, C6-quiz-v0 (sets A and B), C6-ojt-v0, C6-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C2 |
| Bloom's levels | 2, 3 and 4 (LD-02) |
| Formulas | F-CORE-21, F-CORE-24, F-CORE-25, F-CORE-26, F-CORE-27, F-CORE-29 |
| Rules | CORE-BOR-01 to -18; CORE-CONC-01, -02; CORE-AUTH-01; MF-GEN-07, COM-GEN-15 (family experience gates); RES-GU-01 (ground-up authority, D-CORE-26) |
| Running deals | Worked examples: RD-RES-01 Maple Run and RD-MF-01 Cedar Court. Practice: RD-COM-01 Birchwood Plaza (LD-08) |
| Status | v0.2. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0.2, 22 Nov 2026: review fixes, policy decisions D-CORE-17 onward, self-check. v0, 20 Nov 2026: first draft; all numbers computed in code; legal and market facts researched 20 Nov 2026 |

## Timing plan

| Segment (LD-04) | Minutes |
| --- | --- |
| 1 Hook | 5 |
| 2 Objectives | 5 |
| 3 Teach chunks T1-T5, with worked examples | 80 |
| 5 Practice | 45 |
| 6 Quiz | 30 |
| 8 Job aid walk-through and wrap-up | 15 |
| Total | 180 |
| 7 OJT task (extra, per LD-03) | 45 |

## 1. Hook (5 minutes)

Marcus Hale has a net worth of $6,800,000 and $930,000 of liquidity. That is 1.81 times what Cedar Court's $5,140,000 loan requires. On money alone, he is an easy yes.

Yet the loan cannot be approved below committee. Only 2 of his 3 apartment deals count, which makes him Tier 1, and Tier 1 caps exposure at $3,000,000. By the end of this module you can find that in any sponsor file, and say what it means.

## 2. Objectives

By the end of C6, you will be able to:

1. **Identify** who must sign the guaranty and who is the qualifying guarantor, including when a spouse may not be required (CORE-BOR-03 to -05).
2. **Apply** the credit and background tests: mid-score, score floors, credit events and liens (CORE-BOR-06 to -10).
3. **Calculate** adjusted liquidity, required liquidity and months of reserves (F-CORE-24, F-CORE-25, F-CORE-21).
4. **Calculate** adjusted net worth and test it against the family minimum (F-CORE-26, CORE-BOR-14).
5. **Analyze** experience, tier and sponsor exposure, and name the approver (F-CORE-27, F-CORE-29, CORE-CONC-01, CORE-AUTH-01).

## 3. Teach

### T1. Who signs, and who qualifies (Objective 1, 15 minutes)

The borrower is an entity, not a person (CORE-BOR-01). The people behind it carry the credit through guaranties.

| Rule | What it says |
| --- | --- |
| CORE-BOR-03 | Every individual owning 20% or more, directly or indirectly, plus the managing member, signs the guaranty |
| CORE-BOR-04 | One guarantor, the qualifying guarantor, must alone meet the FICO, liquidity, net worth and experience tests |
| CORE-BOR-05 | A spouse need not sign if the guarantor qualifies alone. A spouse who owns 20% or more signs as an owner |

**Indirect ownership multiplies through.** Say a person owns 70% of a holding LLC, and the LLC owns 30% of the borrower. They own 0.70 × 30% = 21% of the borrower, so they sign.

**Why the spouse rule is legal, not just policy.** Under Regulation B, a lender generally may not require a spouse's signature when the applicant qualifies alone. It also may not insist that the spouse be the extra guarantor, though a spouse may volunteer. On secured credit, a spouse may still have to sign what state law needs to reach the collateral [VERIFY: 12 CFR 1002.7(d)(1), (4) and (5), eCFR (current to 19 Nov 2026); checked 22 Nov 2026].

**Worked example 1: Maple Run guarantors (RD-RES-01)**

1. **Rule.** CORE-BOR-03, -04, -05.
2. **Inputs.** Harborline Holdings LLC: Dana Reyes 60% (managing member); Sam Okafor 40%. Dana is married to Chris Reyes, who owns nothing.
3. **Apply.** Dana (60%) and Sam (40%) are both at or over 20%, so both sign. Chris owns nothing and Dana qualifies alone, so he is not asked to sign.
4. **Result.** Guarantors: Dana and Sam. Qualifying guarantor: Dana. Sam does not have to meet the qualifying tests, only the 620 score floor for other guarantors.

### T2. Credit and background (Objective 2, 15 minutes)

**Mid-score** is the middle of three bureau scores. With two scores, use the lower. The report must be no older than 90 days at closing (CORE-BOR-07).

| Rule | Test |
| --- | --- |
| CORE-BOR-06 | Qualifying guarantor 680+; 700+ if Experience Tier 0. Other guarantors 620+ |
| CORE-BOR-08 | No bankruptcy discharge, foreclosure, deed in lieu or short sale in the last 48 months |
| CORE-BOR-09 | A fraud, financial-crime or real estate felony at any time: ineligible. Any other felony in 10 years: credit officer |
| CORE-BOR-10 | Open material litigation, open tax liens, or unpaid judgments over $25,000: resolve at or before closing |

**Worked example 2: Maple Run credit (RD-RES-01)**

1. **Rule.** CORE-BOR-06 to -10.
2. **Inputs.** Dana Reyes: scores 705 / 712 / 730; one $8,000 state tax lien filed 2019, paid and released 2020; nothing else. Sam: 640 / 655 / 668; no adverse items.
3. **Apply.** Dana's mid-score is 712. She has 6 completed flips, so she is not Tier 0 and her floor is 680. Sam's mid-score is 655, above the 620 floor. The 2019 lien is released, so it is not open.
4. **Result.** Both pass. Note the lien in the memo as history, not as an open item.

### T3. Liquidity and months of reserves (Objective 3, 20 minutes)

Liquidity is what a guarantor could actually use if the project stalls. It is counted after haircuts and after paying cash to close (F-CORE-24, CORE-BOR-11).

| Asset | Counts at |
| --- | --- |
| Cash | 100% |
| Listed securities | 70% |
| Vested retirement | 70% |
| Unused credit lines, crypto, business equity | 0% |

The requirement is the greater of 10% of the commitment or 6 months' interest, plus 5% of other open commitments with us (F-CORE-25, CORE-BOR-12). Interest here uses the nominal rate ÷ 12 (D-CONV-01). Two recent monthly statements, dated within 60 days of closing, prove it (CORE-BOR-13).

**Months of reserves** (F-CORE-21) turns the same liquidity into staying power: adjusted liquidity ÷ the monthly payment.

**Worked example 3: Dana Reyes's liquidity (RD-RES-01)**

1. **Formula.** F-CORE-24: cash + 0.70 × securities + 0.70 × retirement − cash to close. F-CORE-25: max(10% × C, 6 × C × r ÷ 12) + 5% × O. F-CORE-21: liquidity ÷ monthly payment.
2. **Inputs.** Cash $95,000; brokerage $40,000; vested 401(k) $60,000; unused HELOC $75,000; cash to close $74,100. Commitment $340,000 at 10.25%; no other loans with us.
3. **Substitution.** Adjusted = $95,000 + $28,000 + $42,000 + $0 − $74,100 = $90,900.00. Required = max($34,000; 6 × $340,000 × 10.25% ÷ 12 = $17,425) + $0 = $34,000.00. Monthly interest = $340,000 × 10.25% ÷ 12 = $2,904.17, so months = $90,900 ÷ $2,904.17 = 31.3.
4. **Result.** Passes by $56,900.00, with 31.3 months of interest in reserve. The $75,000 HELOC counts for nothing.

**Common slip.** Forgetting cash to close. Dana's statements show $195,000 of gross liquid assets, but $74,100 leaves at the closing table.

### T4. Adjusted net worth (Objective 4, 15 minutes)

Adjusted net worth (F-CORE-26) is total assets less total liabilities less equity in the subject property. The subject's equity is excluded because it is the collateral: it cannot also back the guaranty.

CORE-BOR-14 sets the floor: at least 25% of the commitment for Residential, and at least 100% for Multifamily and Commercial.

**Worked example 4: Dana Reyes's net worth (RD-RES-01)**

1. **Formula.** F-CORE-26: NW = assets − liabilities − subject equity.
2. **Inputs.** Assets $1,150,000; liabilities $610,000; subject equity $0 (a purchase).
3. **Substitution.** $1,150,000 − $610,000 − $0 = $540,000.00. Test: 25% × $340,000 = $85,000.00.
4. **Result.** Passes by a wide margin.

**Credit officer's check.** The asset figure is dated before closing. After closing, the $74,100 of cash to close has become equity in the subject. A post-closing view is $540,000 − $74,100 = $465,900, which still passes. Tip, not a policy rule: run this view whenever the margin is thin.

### T5. Experience, tier and exposure (Objective 5, 15 minutes)

**Experience** (F-CORE-27) counts projects completed in the last 36 months where the guarantor owned at least 20% (CORE-BOR-15). There are three ways a project completes. It is sold; it is renovated and refinanced into a term rental loan; or it is held and operated 12+ months (CORE-BOR-18, D-CORE-18). Proof is a settlement statement, deed or public record. A held property also needs a rent roll or operating statement. It counts as rental experience, not rehab experience (CORE-BOR-17). Exactly 36 months counts (D-CONV-03), and so does a hold of exactly 12 months (CORE-BOR-18). Tiers: 0 projects is Tier 0, 1-4 is Tier 1, 5-9 is Tier 2, and 10 or more is Tier 3 (CORE-BOR-16).

**Family gates come on top.** Multifamily needs 2 apartment properties owned or managed in 5 years. One must be at least half the subject's size (MF-GEN-07). Commercial bridge needs 2 or more of the same type in 5 years (COM-GEN-15). A gate can be met by managing, but the tier counts only ownership.

**Exposure** (F-CORE-29) is the new commitment plus all open commitments to the sponsor and affiliates. Use commitments, not balances. CORE-CONC-01 caps it by tier. Above the cap, only committee can approve.

| Tier | Dollar cap | Loan cap (open loans) |
| --- | --- | --- |
| 0 | $1,000,000 | 2 |
| 1 | $3,000,000 | 5 |
| 2 | $7,500,000 | 10 |
| 3 | $15,000,000 | 20 |

No sponsor may exceed 5% of the portfolio (CORE-CONC-02).

Above either the dollar cap or the loan cap, only committee can approve (CORE-CONC-01). Within the caps, the approver depends on loan size, exposure and family (CORE-AUTH-01).

| Approver | Max single loan | Max sponsor exposure (F-CORE-29) | Exceptions allowed |
| --- | --- | --- | --- |
| Senior underwriter (holds family certificate) | $500,000, Residential only | $1,000,000 | None |
| Credit officer | $2,000,000 | $5,000,000 | One |
| Credit committee | Above $2,000,000 | Above $5,000,000 | Up to two |

Committee also approves, at any size, related-party or employee loans, ground-up with one completed build (the RES-GU-01 exception) and any CONC breach (CORE-AUTH-01). Ground-up with no completed build is declined, and no one has authority to approve it (RES-GU-01, D-CORE-26).

**Worked example 5: Dana Reyes's tier and exposure (RD-RES-01)**

1. **Formula.** F-CORE-27 count; F-CORE-29: E = new + open commitments.
2. **Inputs.** Dana lists 7 flips: 6 sold in 36 months as a 50-100% owner; 1 sold 14 months ago at 15%. No other loans with us.
3. **Substitution.** Count = 6; the 15% deal fails the 20% test. Exposure = $340,000 + $0 = $340,000.00.
4. **Result.** Tier 2. $340,000 is far under the $7,500,000 Tier 2 cap. A senior underwriter may approve (CORE-AUTH-01: Residential only, loan up to $500,000, sponsor exposure up to $1,000,000, no exceptions).

**Worked example 6: Marcus's tier and exposure (RD-MF-01)**

1. **Formula.** MF-GEN-07 gate; F-CORE-27 count; F-CORE-29 exposure; F-CORE-24 and -25 liquidity.
2. **Inputs.** 40-unit, owned 50%, 2021-present; 24-unit, owned 35%, sold 2025; 18-unit, owned 8%. Cash $650,000; securities $400,000; net worth $6,800,000. Commitment $5,140,000 at 7.65%; no other loans.
3. **Substitution.** Gate: 2 properties in 5 years, and the 40-unit is over half of 50 units: passes. Count = 2. The 24-unit was sold in 2025. The 40-unit, held and operated since 2021, counts under CORE-BOR-18. The 8% stake fails the 20% test. Tier 1. Liquidity = $650,000 + $280,000 = $930,000.00 against required max($514,000; $196,605.00) = $514,000.00: 1.81x. Net worth $6,800,000 ≥ 100% × $5,140,000.
4. **Result.** Every money test passes. Exposure $5,140,000 is over the $3,000,000 Tier 1 cap, and the loan is over $2,000,000. Committee only (CORE-CONC-01, CORE-AUTH-01).

**Why Priya does not fix it.** Priya Nand has 12 years as a property manager. That could help the MF-GEN-07 gate, which allows "managed." But she owns no properties, so she adds nothing to the tier count. The qualifying guarantor must also meet every test alone (CORE-BOR-04).

## 5. Practice (45 minutes)

Work alone, then check the model answer. The case is RD-COM-01 Birchwood Plaza. It differs from the worked examples in property type, the experience gate and the size of the commitment (LD-05).

1. Owners: Dana Whitlow 75% (managing member); Leo Marsh 25%. Who signs, and who is the qualifying guarantor?
2. Dana Whitlow's mid-score is 742; Leo's is 690. Do both pass?
3. Dana Whitlow holds cash $550,000 and listed securities $300,000; none is used to close. The commitment is $3,520,000 at 7.65%. Find adjusted liquidity, required liquidity, the coverage multiple and months of reserves on interest.
4. Dana Whitlow's net worth is $5,200,000 with no equity in the subject. Does she pass CORE-BOR-14?
5. Dana Whitlow lists 3 retail deals: a 32,000 sf center, 100%, 2019-present; an 18,000 sf center, 40%, sold 2024; a 60,000 sf grocery-anchored center, 10%. Answer in three parts. (a) Gate: apply COM-GEN-15. (b) Count: count her experience and set the tier. (c) Exposure: test it and name the approver.
6. What if Dana Whitlow also had a $1,200,000 open loan with us? Recompute required liquidity and exposure.

**Model answer**

1. Both are at or over 20%, so both sign (CORE-BOR-03). Dana Whitlow is the qualifying guarantor (CORE-BOR-04).
2. Yes. Dana Whitlow 742 ≥ 680; Leo 690 ≥ 620 (CORE-BOR-06).
3. Adjusted (F-CORE-24) = $550,000 + $210,000 = $760,000.00. Required (F-CORE-25) = max($352,000; 6 × $3,520,000 × 7.65% ÷ 12 = $134,640) = $352,000.00. Coverage 2.16x. Monthly interest $22,440.00, so 33.9 months (F-CORE-21).
4. Yes: $5,200,000 ≥ 100% × $3,520,000 (F-CORE-26, CORE-BOR-14).
5. (a) Gate: the 32,000 sf and 18,000 sf centers are 2 same-type properties in 5 years: passes (COM-GEN-15). (b) Count = 2. The 18,000 sf center was sold in 2024. The 32,000 sf center, held and operated since 2019, counts under CORE-BOR-18. The 10% stake fails the 20% test. Tier 1 (CORE-BOR-16). (c) Exposure $3,520,000 is over the $3,000,000 Tier 1 cap, and the loan is over $2,000,000. Committee only (CORE-CONC-01, CORE-AUTH-01).
6. Required = $352,000 + 5% × $1,200,000 = $412,000.00; still covered, $348,000 to spare. Exposure = $4,720,000.00 on 2 loans: still over the Tier 1 dollar cap, inside the 5-loan count.

**Self-score.** One point per correct figure or call, 10 in all. Eight or more: move on. Fewer: redo the matching worked example.

## 6. Quiz: C6-quiz-v0

Pass mark: 80% (10 of 12) and every item marked **critical** correct. Two retakes, each with the other set. Items are independent unless they say otherwise.

### Set A

Guarantor Kim Ortiz: cash $80,000; listed securities $50,000; vested IRA $40,000; unused HELOC $100,000; crypto $30,000; cash to close $65,000. Commitment $400,000 at 11.00%; other open commitments with us $300,000. Items 1-4 use Kim.

1. (O3) Kim's adjusted liquid assets? A) $143,000.00 B) $78,000.00 C) $178,000.00 D) $99,000.00
2. (O3) Required post-closing liquidity? A) $40,000.00 B) $55,000.00 C) $22,000.00 D) $70,000.00
3. **(Critical, O3)** Does Kim pass CORE-BOR-12? A) Yes, by $23,000 B) No, short by $23,000 C) Yes, by $38,000 D) Only if the HELOC counts
4. (O3) Months of reserves on interest? A) 21.3 B) 19.5 C) 39.0 D) 7.1
5. **(Critical, O2)** A Tier 0 qualifying guarantor has scores 676 / 684 / 701. Result? A) Passes at 684 B) Passes at 701 C) Fails: 684 is below 700 D) Fails: 676 is below 680
6. (O2) Only two bureaus return scores: 690 and 702. Mid-score? A) 696 B) 702 C) 690 D) No score; decline
7. **(Critical, O1)** Owners: A 55%, B 25%, C 15%, D 5% (managing member). Who signs the guaranty? A) A only B) A and B C) A, B and D D) All four
8. (O1) The qualifying guarantor meets every test alone. May we require her spouse, who owns nothing, to sign the guaranty? A) Yes, always B) No C) Yes, if the loan is over $1,000,000 D) Only for residential loans
9. (O4) Assets $2,400,000; liabilities $1,100,000; equity in the subject (a refinance) $250,000. Residential commitment $400,000. Adjusted net worth and result? A) $1,300,000; passes B) $1,050,000; passes C) $1,050,000; fails D) $850,000; passes
10. (O5) In the last 36 months: 4 flips sold at 50%; 1 sold at exactly 20%; 2 at 15%. One more sold 38 months ago at 100%. Count and tier? A) 8; Tier 2 B) 5; Tier 2 C) 4; Tier 1 D) 6; Tier 2
11. (O5) A Tier 0 sponsor: new $400,000; open $300,000; an affiliate LLC's open loan $450,000. Result? A) $700,000; within cap B) $1,150,000; over the Tier 0 cap, committee only C) $1,150,000; within cap D) $850,000; within cap
12. (O2) A guarantor's bankruptcy was discharged 30 months before closing. Result? A) Eligible B) Credit officer review C) Ineligible D) Eligible with a higher rate

**Answer key, Set A**

1. B. $80,000 + 0.70 × $50,000 + 0.70 × $40,000 − $65,000 = $78,000.00. HELOC and crypto count 0% (F-CORE-24, CORE-BOR-11).
2. B. max($40,000; 6 × $400,000 × 11% ÷ 12 = $22,000) + 5% × $300,000 = $55,000.00 (F-CORE-25).
3. A. $78,000 − $55,000 = $23,000.
4. A. $78,000 ÷ $3,666.67 = 21.3 (F-CORE-21).
5. C. Mid-score 684; Tier 0 needs 700 (CORE-BOR-06).
6. C. With two scores, use the lower (CORE-BOR-07).
7. C. A and B are at or over 20%; D is the managing member (CORE-BOR-03).
8. B. She qualifies alone, so her non-owner spouse may not be required to sign (CORE-BOR-05; 12 CFR 1002.7(d), as tagged in T1).
9. B. $2,400,000 − $1,100,000 − $250,000 = $1,050,000.00 ≥ 25% × $400,000 = $100,000 (F-CORE-26).
10. B. 4 + 1 (exactly 20% counts) = 5; the 15% and 38-month deals fail. Tier 2.
11. B. Affiliates count (F-CORE-29); the Tier 0 cap is $1,000,000.
12. C. 30 months is inside the 48-month bar on a bankruptcy discharge (CORE-BOR-08).

### Set B

Guarantor Lee Park: cash $150,000; listed securities $100,000; vested 401(k) $80,000; business equity $200,000; cash to close $120,000. Commitment $900,000 at 10.75%; other open commitments with us $1,000,000. Items 1-4 use Lee.

1. (O3) Lee's adjusted liquid assets? A) $210,000.00 B) $356,000.00 C) $156,000.00 D) $276,000.00
2. (O3) Required post-closing liquidity? A) $90,000.00 B) $140,000.00 C) $98,375.00 D) $190,000.00
3. **(Critical, O3)** Does Lee pass CORE-BOR-12? A) No, short by $16,000 B) Yes, by $16,000 C) Yes, by $66,000 D) Only if business equity counts at 70%
4. (O3) Months of reserves on interest? A) 19.3 B) 17.4 C) 27.2 D) 1.6
5. **(Critical, O2)** A Tier 2 qualifying guarantor has scores 671 / 679 / 688. Result? A) Passes at 679 B) Fails: 679 is below 680 C) Passes at 688 D) Passes: Tier 2 needs 620
6. (O2) Scores 700 / 715 / 690. Mid-score? A) 702 B) 690 C) 715 D) 700
7. **(Critical, O1)** Owners: A 40%; B 20%; C 19% (managing member); a holding LLC 21%, owned 100% by D. Who signs? A) A and B B) A, B and C C) A, B, C and D D) A and C
8. (O1) A guarantor's spouse owns 25% of the borrower. Must the spouse sign? A) No, never B) Yes, as a 20%+ owner C) Only in community property states D) Only if the guarantor fails a test
9. (O4) Multifamily commitment $5,000,000. Assets $9,000,000; liabilities $4,500,000; no subject equity. Result? A) $4,500,000; fails the 100% test B) $4,500,000; passes C) $9,000,000; passes D) $4,500,000; passes the 25% test
10. (O5) 3 flips sold in the last 36 months at 50%; 2 sold at 37 and 40 months; 1 refinanced into a rental 10 months ago at 25%. Count and tier? A) 6; Tier 2 B) 3; Tier 1 C) 4; Tier 1 D) 5; Tier 2
11. (O5) A Tier 1 sponsor: new $900,000 plus 2 open loans totaling $1,000,000. Result? A) $1,900,000 on 3 loans: within the Tier 1 cap B) Over the dollar cap C) Over the loan-count cap D) $900,000: within cap
12. (O2) A guarantor was convicted of mortgage fraud 15 years ago. Result? A) Eligible: outside 10 years B) Credit officer review C) Ineligible at any time D) Eligible with full recourse

**Answer key, Set B**

1. C. $150,000 + $70,000 + $56,000 − $120,000 = $156,000.00. Business equity counts 0%.
2. B. max($90,000; 6 × $900,000 × 10.75% ÷ 12 = $48,375) + 5% × $1,000,000 = $140,000.00.
3. B. $156,000 − $140,000 = $16,000.
4. A. $156,000 ÷ $8,062.50 = 19.3.
5. B. Compare the mid-score at face: 679 < 680.
6. D. The middle of 690, 700 and 715.
7. C. D owns 100% × 21% = 21% indirectly; C is the managing member (CORE-BOR-03).
8. B. A spouse who owns 20% or more signs as an owner (CORE-BOR-05).
9. A. $4,500,000 is below 100% × $5,000,000 (CORE-BOR-14).
10. C. 3 + 1 = 4; the refinance into a rental counts as completed (CORE-BOR-15); 37 and 40 months are outside. Tier 1.
11. A. Tier 1 allows $3,000,000 and 5 loans (CORE-CONC-01).
12. C. A fraud or financial-crime felony makes a guarantor ineligible at any time (CORE-BOR-09).

## 7. OJT task: C6-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Underwriter |
| Output | A one-page guarantor summary for Cedar Court: each owner, each test, the figure, the rule and pass or fail, then the approver |
| Source | RD-MF-01 borrower and guarantor table; Model Credit Policy Core Part 2A, 2B and 2D |
| Time allowed | 45 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All fictional; nothing to remove |

**Rubric (meets standard = all five)**

1. Names both signers and the qualifying guarantor, with the rule.
2. Shows liquidity with every haircut, the requirement and the multiple.
3. Shows net worth against the 100% Multifamily test.
4. Shows the MF-GEN-07 gate and the tier count separately, and explains the 8% stake.
5. Names the approver with both reasons.

**Model answer**

| Test | Marcus Hale (qualifying) | Priya Nand | Rule |
| --- | --- | --- | --- |
| Signs? | Yes, 60%, managing member | Yes, 40% | CORE-BOR-03 |
| Mid-score | 728 ≥ 680 | 702 ≥ 620 | CORE-BOR-06 |
| Liquidity | $650,000 + 0.70 × $400,000 = $930,000.00 vs $514,000.00: 1.81x | Not tested | F-CORE-24, -25 |
| Months of reserves | $930,000 ÷ $32,767.50 interest = 28.4 | n/a | F-CORE-21 |
| Net worth | $6,800,000 ≥ $5,140,000 | Not tested | F-CORE-26, CORE-BOR-14 |
| Family gate | 40-unit and 24-unit in 5 years; 40 ≥ 25 units: passes | Management record may help the gate; adds no tier count | MF-GEN-07 |
| Tier count | 2 (24-unit sold 2025; 40-unit held and operated since 2021, CORE-BOR-18; 18-unit excluded: 8% < 20%): Tier 1 | 0 | F-CORE-27 |
| Exposure | $5,140,000 > $3,000,000 Tier 1 cap | n/a | F-CORE-29, CORE-CONC-01 |
| Approver | Committee: over $2,000,000 and over the tier cap |  | CORE-AUTH-01 |

## 8. Job aid: C6-jobaid-v0 (one page)

**Who signs (CORE-BOR-03 to -05)**: every 20%+ owner, direct or indirect (multiply through), plus the managing member. One qualifying guarantor meets every test alone. Don't require a non-owner spouse when the guarantor qualifies.

**Credit (CORE-BOR-06 to -10)**: mid-score = middle of three, or the lower of two. Qualifying 680 (Tier 0: 700); others 620. No BK, foreclosure, DIL or short sale in 48 months. Fraud felony: never. Open material litigation, open tax liens or unpaid judgments over $25,000: resolve at or before closing (CORE-BOR-10).

**Liquidity (F-CORE-24)** = cash + 70% securities + 70% vested retirement − cash to close. Credit lines, crypto, business equity: 0%.

**Required (F-CORE-25)** = max(10% × C, 6 × C × r ÷ 12) + 5% × other open commitments.

**Months of reserves (F-CORE-21)** = liquidity ÷ monthly payment.

**Net worth (F-CORE-26)** = assets − liabilities − subject equity; 25% of C Residential, 100% MF and Commercial.

**Tier (F-CORE-27)**: completed in 36 months, 20%+ owned. Completed = sold, refinanced into a rental, or held and operated 12+ months (CORE-BOR-15, -18). Tiers 0 / 1-4 / 5-9 / 10+.

**Exposure (F-CORE-29)**: new + open commitments, affiliates included. Caps by tier: $1M and 2 loans / $3M and 5 / $7.5M and 10 / $15M and 20 (CORE-CONC-01). No sponsor over 5% of the portfolio (CORE-CONC-02). Over a cap: committee only.

Approver (CORE-AUTH-01): senior underwriter to a $500,000 loan and $1M exposure, Residential only, no exceptions. Credit officer to $2M and $5M. Committee above that, and for any CONC breach, related-party loan or one-build ground-up loan. Ground-up with no completed build: decline (RES-GU-01, D-CORE-26).

**Mini-example**: cash $50,000, securities $20,000, cash to close $30,000 → $34,000. Commitment $250,000 at 11% → required $25,000. Passes by $9,000.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 Signers | T1 | 1 | 1 | 7, 8 / 7, 8 | 1 |
| O2 Credit | T2 | 2 | 2 | 5, 6, 12 / 5, 6, 12 | 1 |
| O3 Liquidity | T3 | 3 | 3, 6 | 1-4 / 1-4 | 2 |
| O4 Net worth | T4 | 4 | 4 | 9 / 9 | 3 |
| O5 Tier and exposure | T5 | 5, 6 | 5, 6 | 10, 11 / 10, 11 | 4, 5 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [POLICY], [CONFIRM] or [DATA] tags | Met. [VERIFY] tags on legal statements carry source and date |
| Every calculation cites a formula ID; thresholds cite rules | Met |
| Four-line worked formulas; re-checked by a second person | Four lines met; second-person check pending (solo: re-run in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-RES-01, RD-MF-01, RD-COM-01 |
| Lesson follows LD-04 order; alignment matrix; fits 3 hours | Met (180 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (12 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no color-only meaning |

**Real-world check (researched 20 Nov 2026): how the market and the law treat sponsors.**

- **Published liquidity rules are rare.** A 12 Nov 2026 review of seven fix-and-flip lenders found none that prints a liquidity or reserve minimum ([CrowdfundedWealth](https://www.crowdfundedwealth.com/articles/hard-money-loan-requirements-2026)). Where lenders do say something, it is about holding costs. RCN asks novices for verified liquidity covering 6+ months of holding costs ([RCN Capital, 20 Feb 2026](https://rcncapital.com/blog/fix-flip-lending-for-repeat-investors-how-experience-shapes-loan-terms)). LendSure cites a 660 minimum score with six months' reserves ([LendSure, Dec 2025](https://lendsure.com/?p=8272)). Our F-CORE-25 sits at the conservative end.
- **Experience tiers are standard.** OfferMarket treats 0-2 flips in the last 36 months as a new investor and 10+ as a seasoned one ([OfferMarket](https://www.offermarket.us/blog/flip-loans)). That matches our 36-month lookback and the 10+ top tier.
- **Beneficial ownership: the rules moved in 2026.** A FinCEN final rule took effect on 14 Aug 2026. It permanently exempts US companies from Corporate Transparency Act ownership reports [VERIFY: FinCEN BOI page, fincen.gov/boi (final rule issued 11 Aug 2026, effective 14 Aug 2026); checked 22 Nov 2026]. It leaves the separate Customer Due Diligence rule for banks and other covered institutions in place ([Morrison Foerster, 20 Aug 2026](https://www.mofo.com/resources/insights/260820-fincen-ends-beneficial-ownership-reporting)). On 13 Feb 2026, FinCEN also let covered institutions skip re-verifying owners at each new account in some cases ([Mayer Brown, 26 Feb 2026](https://www.mayerbrown.com/en/insights/publications/2026/02/more-is-not-always-better-fincen-grants-risk-based-relief-from-repeat-beneficial-ownership-verification-requirements)). FinCEN proposed CDD rule changes on 12 Nov 2026 ([Treasury NPRM](https://home.treasury.gov/system/files/136/CDD_NPRM_11_12_2026_508FINAL.pdf)) [VERIFY: 31 CFR 1010.230(f) and 1010.605(e)(1), eCFR: the CDD rule binds banks, broker-dealers, futures commission merchants and mutual funds, not a non-bank lender, as CORE-KYC-02 notes; checked 22 Nov 2026].
- **What that means for us.** No government ownership filing now exists for a US LLC borrower. Our own ownership chart, with signed certifications (CORE-KYC-02, CORE-BOR-03), is the only record. C7 covers this in depth.

**Self-check.**

1. Owners are 60% and 40%. The 60% owner's spouse owns nothing, and she qualifies alone. Who signs the guaranty? **Answer:** Both owners. The spouse is not asked to sign (CORE-BOR-03, CORE-BOR-05).
2. A guarantor has cash $100,000, listed securities $50,000 and cash to close $40,000. What is adjusted liquidity? **Answer:** $100,000 + 0.70 × $50,000 − $40,000 = $95,000.00 (F-CORE-24).
3. A guarantor has owned 30% of a rental and operated it for exactly 12 months in the lookback. Does it count? **Answer:** Yes, as rental experience (CORE-BOR-18, F-CORE-27).
4. A Tier 1 sponsor asks for $600,000 and has 5 open loans totaling $1,500,000. Is it within the cap? **Answer:** No. $2,100,000 is under $3,000,000, but 6 loans is over the 5-loan cap: committee only (F-CORE-29, CORE-CONC-01).
5. A Tier 2 sponsor's $450,000 Residential loan brings exposure to $1,200,000. Can a senior underwriter approve it? **Answer:** No. Exposure is over $1,000,000, so a credit officer approves (CORE-AUTH-01).
6. A Tier 0 sponsor with no completed ground-up build asks for a ground-up loan. Can committee approve it? **Answer:** No. With no completed build the loan is declined, and no one has authority. One completed build goes to committee as an exception (RES-GU-01, CORE-AUTH-01, D-CORE-26).

**What to look up yourself.** Nothing for this module. Every market and legal point above was found and cited.

**How to check it:** in a spreadsheet, `=95000+40000*0.7+60000*0.7-74100` should give 90,900, and `=MAX(0.1*340000,6*340000*10.25%/12)` should give 34,000.
