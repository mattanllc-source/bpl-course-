**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C11-lesson-v0, C11-quiz-v0 (sets A and B), C11-ojt-v0, C11-jobaid-v0 |
| Hours | 2 (120 minutes) plus a 45-minute OJT task |
| Prerequisite | C9 |
| Bloom's levels | 3 and 4 (LD-02) |
| Formulas | F-RES-09; F-CORE-06, -33, -35, -41 (new, SUGGESTED) |
| Rules | CORE-CLS-01 to -05 (-02 to -05 new); CORE-BP-01; CORE-KYC-01, -07; CORE-VAL-02; CORE-BOR-07, -13; CORE-INS-02; CORE-EXC-01; CORE-DOC-01, -03 |
| Running deals | Worked examples: RD-RES-01 Maple Run. Practice: RD-MF-01 Cedar Court. OJT: RD-COM-01 Birchwood Plaza (LD-08) |
| Status | v0. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0, 20 Nov 2026: first draft; all numbers computed in code. New rules CORE-CLS-02 to -05 and new formula F-CORE-41 (net funding wire). Maple Run closing-table cash now adds prepaid interest |

## Timing plan

| Segment (LD-04) | Minutes |
| --- | --- |
| 1 Hook | 5 |
| 2 Objectives | 5 |
| 3 Teach chunks T1-T5, with worked examples | 55 |
| 5 Practice | 25 |
| 6 Quiz | 20 |
| 8 Job aid walk-through and wrap-up | 10 |
| Total | 120 |
| 7 OJT task (extra, per LD-03) | 45 |

## 1. Hook (5 minutes)

In 2025 the FBI logged 12,368 real estate fraud complaints and $275.1 million in losses. Business email compromise, which often targets closing wires, cost over $3 billion across all industries [VERIFY: FBI IC3 2025 report, via ALTA and HousingWire; checked 20 Nov 2026].

A loan can pass every credit test and still be lost in the last hour. One changed wire instruction sends the money to a thief. This module covers the steps between "approved" and "funded".

## 2. Objectives

By the end of C11, you will be able to:

1. **Verify** that every closing condition is cleared before funding (CORE-CLS-01, -03; CORE-EXC-01).
2. **Build** the settlement statement and the borrower's cash at closing (F-RES-09; F-CORE-06, -33, -35; CORE-CLS-04).
3. **Calculate** the net funding wire to the closing agent (F-CORE-41).
4. **Apply** closing-agent and wire-fraud controls (CORE-CLS-02, -03; CORE-KYC-07).
5. **Track** trailing documents after closing (CORE-CLS-05).

## 3. Teach

### T1. Clearing the conditions (Objective 1, 12 minutes)

Approval comes with conditions. Funding comes only when every condition is cleared and dated. Some items expire between approval and closing, so check their age on the funding day.

| Item | Limit on the funding day | Rule |
| --- | --- | --- |
| Appraisal effective date | 120 days or less | CORE-VAL-02 |
| Credit report | 90 days or less | CORE-BOR-07 |
| Liquidity statements | Two most recent, dated within 60 days | CORE-BOR-13 |
| OFAC screen | Re-run before funding | CORE-KYC-01 |
| Business-purpose certificates | Signed by borrower and every guarantor | CORE-BP-01 |
| Title, entity documents, good standing | In hand | CORE-CLS-01 |
| Insurance naming the lender | Bound | CORE-INS-01 |
| Guaranties | Signed, including completion guaranty where needed | CORE-DOC-01, -03 |

An item that cannot be cleared is an exception. It is approved before closing, never after (CORE-EXC-01).

**Worked example 1: Maple Run closes 15 Jan 2027.** The appraisal was dated 12 days before closing, so it is 12 days old: inside 120 (CORE-VAL-02). Dana's statements must be dated 16 Nov 2026 or later (60 days). OFAC is re-run that morning for the LLC, Dana and Sam (CORE-KYC-01).

### T2. The closing agent and the instructions (Objective 4, 10 minutes)

A title agent or closing attorney holds our money for a few hours. A closing protection letter (CPL) protects us if that agent fails us. The title insurer indemnifies the lender for the agent's fraud or dishonesty, or failure to follow written closing instructions [VERIFY: ALTA CPL form; checked 20 Nov 2026].

Two consequences follow. The CPL covers only written instructions, so we always send them. And the cover depends on the insurer's solvency, so the agent's own controls still matter.

**New rule CORE-CLS-02.** The closing agent is a title agent or approved attorney of a title insurer. We hold an ALTA closing protection letter naming us before any funds move. Our written closing instructions list every condition, the exact disbursements and the policy to be issued.

### T3. The settlement statement (Objective 2, 13 minutes)

The settlement statement shows where every dollar comes from and goes to. Sources must equal uses.

**Prepaid interest.** Most loans bill interest on the first of the month. So we collect interest at closing from the funding day to month-end. The first regular payment then covers a full month. This mirrors common mortgage practice: per diem interest runs from closing to the end of that month.

**New rule CORE-CLS-04.** Collect prepaid interest at closing on the initial funding, from the funding day (counted) to month-end (F-CORE-33; D-CONV-02). Regular interest is billed monthly in arrears from the first of the next month.

**Worked example 2: Maple Run prepaid interest (F-CORE-33).**

1. Formula: prepaid interest = initial funding × rate ÷ 360 × days from funding day to month-end.
2. Inputs: $240,000; 10.25%; 15-31 Jan = 17 days.
3. Substitution: $240,000 × 10.25% ÷ 360 × 17.
4. Result: $1,161.67.

**Maple Run settlement statement.**

| Uses | Amount | Source |
| --- | --- | --- |
| Purchase price | $300,000.00 | Deal file |
| Closing costs (title, recording, legal, appraisal) | $9,000.00 | Deal file |
| Origination points, 1.50 × $340,000 | $5,100.00 | F-CORE-06 |
| Prepaid interest, 17 days | $1,161.67 | F-CORE-33 |
| **Total uses** | **$315,261.67** | |

| Sources | Amount | Source |
| --- | --- | --- |
| Initial advance | $240,000.00 | RES-FF-01 |
| Borrower cash at closing | $75,261.67 | F-RES-09 $74,100.00 + $1,161.67 |
| **Total sources** | **$315,261.67** | |

F-RES-09 gives $74,100 for sizing and liquidity. The closing table adds prepaid interest and any escrow deposits (F-CORE-35, CORE-INS-02). Maple Run has no escrow, so the table total is $75,261.67.

**Checkpoint.** Why did the cash rise after approval? Because the funding date fixes prepaid interest. Closing on 28 Jan would need 4 days, $273.33.

### T4. The funding wire (Objectives 3 and 4, 13 minutes)

We do not wire the whole advance. We net off what the borrower owes us at closing.

**F-CORE-41: Net funding wire (SUGGESTED, new).**

1. Formula: wire = initial funding − points − lender fees − prepaid interest − lender-held escrows and reserves.
2. Inputs (Maple Run): $240,000; $5,100.00; $0; $1,161.67; $0.
3. Substitution: $240,000 − $5,100.00 − $1,161.67.
4. Result: $233,738.33.

The closing agent adds the borrower's $75,261.67 and pays the seller and costs.

**Wire controls.** Wire instructions are confirmed by a call to a number already in our file, never one from the request (CORE-KYC-07). Fraudsters now clone voices, so a familiar voice is not proof on its own [VERIFY: FBI IC3 2025 report, via SecureWorld; checked 20 Nov 2026].

**New rule CORE-CLS-03.** Funding needs a signed checklist showing every condition cleared, including the same-day OFAC re-run. One person prepares the wire and a second releases it. Instructions are verified under CORE-KYC-07 and match the CPL agent's escrow account. After sending, confirm receipt with the agent by the number on file.

**Red flags that stop the wire:** a late change to wire details, or an account name that differs from the agent. A rush request or a new email address also counts. Any one goes to the BSA officer (CORE-KYC-07).

### T5. After closing (Objective 5, 7 minutes)

Funding is not the end. The security instrument must be recorded and the final title policy issued. Until then our lien rests on the commitment and the CPL.

**New rule CORE-CLS-05.** Log every trailing document at funding. These include the recorded mortgage or deed of trust and the final lender's title policy. Add the recorded assignment of leases and rents and UCC filings where used. Chase each until received. Report open items monthly.

**Worked example 3: Maple Run trailing log.** Recorded mortgage: open. Final title policy: open. Draw schedule set up for the $100,000 holdback (RES-FF-09). Interest billing set to start 1 Feb, first payment due 1 Mar for February (CORE-CLS-04).

## 5. Practice (25 minutes)

Use RD-MF-01 Cedar Court. C10 facts plus: closing on the last day of a month, so 1 day of prepaid interest. Origination 1.00% on the $5,140,000 commitment. Lender holds the $50,000 repair escrow and the $18,666.67 escrow cushion. The borrower buys the $60,000 rate cap through closing. Pre-interest cash to close is $2,240,066.67 (deal file).

1. List four items whose age you check on the funding day.
2. Work prepaid interest (F-CORE-33).
3. Work the net funding wire (F-CORE-41).
4. Work the borrower's cash at closing.
5. At 3 p.m. the title agent emails new wire details "because of an audit". What do you do?

**Answer key.**

1. Appraisal (120 days, CORE-VAL-02); credit reports (90 days, CORE-BOR-07); liquidity statements (60 days, CORE-BOR-13); OFAC re-run on the funding day (CORE-KYC-01).
2. $4,340,000 × 7.65% ÷ 360 × 1 = $922.25.
3. $4,340,000 − $51,400.00 − $922.25 − $50,000.00 − $18,666.67 = $4,219,011.08.
4. $2,240,066.67 + $922.25 = $2,240,988.92.
5. Stop the wire. Call the agent on the number in our file, not the email. Send the item to the BSA officer the same day (CORE-KYC-07, CORE-CLS-03).

**Common wrong answers.** Wiring the full $4,340,000. Taking points on initial funding instead of the commitment. Calling the number in the suspicious email.

## 6. Quiz: C11-quiz-v0

Pass mark 80%. Items marked (C) are critical: a wrong answer fails the quiz whatever the score. Each set has 10 items and covers all five objectives.

### Set A

1. (O1) The appraisal is 125 days old on the funding day. Can you fund? **Answer:** no; over 120 days (CORE-VAL-02). Update it or approve an exception before closing (CORE-EXC-01). (C)
2. (O1) When must an exception be approved? **Answer:** before closing, never after (CORE-EXC-01).
3. (O2) Prepaid interest on $500,000 at 10.00% for 11 days? **Answer:** $1,527.78 (F-CORE-33).
4. (O2) Funding on 15 Jan: when is the first regular payment due? **Answer:** 1 Mar, for February (CORE-CLS-04).
5. (O3) Initial funding $1,000,000; 2.00 points on a $1,200,000 commitment; prepaid interest $2,000; no escrows. Wire? **Answer:** $1,000,000 − $24,000 − $2,000 = $974,000.00 (F-CORE-41).
6. (O3) Why not wire the full advance? **Answer:** points, prepaid interest and escrows are netted from it.
7. (O4) What does a closing protection letter cover? **Answer:** loss from the agent's fraud or dishonesty, or failure to follow our written instructions (CORE-CLS-02).
8. (O4) Changed wire details arrive by email. First step? **Answer:** stop and verify by a number already in our file (CORE-KYC-07). (C)
9. (O4) How many people release a wire? **Answer:** two: one prepares, one releases (CORE-CLS-03). (C)
10. (O5) Name two trailing documents. **Answer:** recorded mortgage and final title policy (CORE-CLS-05).

### Set B

1. (O1) The credit report is 95 days old at funding. Action? **Answer:** pull a new report; the limit is 90 days (CORE-BOR-07). (C)
2. (O1) When is OFAC run for the last time? **Answer:** before funding, on the funding day (CORE-KYC-01, CORE-CLS-03).
3. (O2) Maple Run closes 28 Jan instead of 15 Jan. Prepaid interest? **Answer:** 4 days = $273.33 (F-CORE-33).
4. (O2) Sources are $315,261.67. What must uses total? **Answer:** the same, $315,261.67.
5. (O3) Birchwood: $2,860,000 initial; 1.00% on $3,520,000; 13 days at 7.65%; no escrows. Wire? **Answer:** $2,860,000 − $35,200 − $7,900.75 = $2,816,899.25 (F-CORE-41).
6. (O3) Which escrow is collected at closing under CORE-INS-02? **Answer:** a 2-month cushion, one-sixth of annual taxes and insurance (F-CORE-35).
7. (O4) Why is a call-back not enough on its own? **Answer:** voices can be cloned; the number must come from our file and the account must match the CPL agent (CORE-CLS-03).
8. (O4) Can we fund through an agent with no CPL? **Answer:** no (CORE-CLS-02). (C)
9. (O4) The account name differs from the title agent's name. Action? **Answer:** stop the wire and refer to the BSA officer (CORE-KYC-07). (C)
10. (O5) How often are open trailing documents reported? **Answer:** monthly (CORE-CLS-05).

## 7. OJT task: C11-ojt-v0 (solo mode)

**Output.** A settlement statement, a funding wire calculation and a signed funding checklist for RD-COM-01 Birchwood Plaza.

**Source.** Running deals file. Assume funding with 13 days left in the month. No live data.

**Time.** 45 minutes.

**Steps.**

1. List Birchwood's closing conditions and the age limit for each.
2. Work prepaid interest and the borrower's cash at closing.
3. Work the wire with F-CORE-41.
4. Write the wire-verification steps you would follow.

**Model answer.** Prepaid interest $2,860,000 × 7.65% ÷ 360 × 13 = $7,900.75. Cash at closing $1,735,200.00 + $7,900.75 = $1,743,100.75. Wire $2,816,899.25.

**Rubric.**

| Criterion | Pass |
| --- | --- |
| Conditions | Every Role 3 condition listed with its rule ID and age limit |
| Numbers | Within $0.01 of the model answer |
| Balance | Sources equal uses |
| Controls | Call-back to a number on file, two-person release, receipt confirmed |

**Sign-off.** Self-review against this rubric, dated (solo mode, Bible Section 7).

## 8. Job aid: C11-jobaid-v0 (one page)

**From approval to funded**

1. **Agent.** Title agent or approved attorney; CPL naming us in hand; written instructions sent (CORE-CLS-02).
2. **Ages.** Appraisal 120 days; credit 90 days; statements 60 days (CORE-VAL-02, CORE-BOR-07, -13).
3. **Same day.** OFAC re-run (CORE-KYC-01).
4. **Statement.** Prepaid interest to month-end (F-CORE-33); escrow cushion (F-CORE-35); sources = uses.
5. **Wire.** F-CORE-41 = funding − points − fees − prepaid interest − escrows.
6. **Release.** Call-back to a number on file; two people; confirm receipt (CORE-CLS-03, CORE-KYC-07).
7. **After.** Log trailing documents; report monthly (CORE-CLS-05).

**Mini-example.** Maple Run: prepaid interest $1,161.67; borrower cash $75,261.67; wire $233,738.33.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A | Quiz B | OJT | Job aid |
| --- | --- | --- | --- | --- | --- | --- | --- |
| O1 Conditions | T1 | WE1 | P1 | 1-2 | 1-2 | Step 1 | Steps 2-3 |
| O2 Settlement | T3 | WE2 | P2, P4 | 3-4 | 3-4, 6 | Step 2 | Step 4 |
| O3 Wire amount | T4 | F-CORE-41 example | P3 | 5-6 | 5 | Step 3 | Step 5 |
| O4 Controls | T2, T4 | T4 controls | P5 | 7-9 | 7-9 | Step 4 | Steps 1, 6 |
| O5 Trailing documents | T5 | WE3 | None | 10 | 10 | None | Step 7 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| LD-04 order; fits 2 hours | Met: 120 minutes plus 45 OJT |
| Every threshold cites a rule; every calculation a formula | Met. Four new rules and F-CORE-41 added to the policy and library |
| Formulas worked in four lines with real numbers | Met; computed in code |
| Deal numbers match the running deals file | Met. Maple Run closing-table cash $75,261.67 is now noted in the deal file. Cedar and Birchwood funding dates are C11 assumptions |
| Two quiz sets; at least one item per objective; critical items flagged | Met: 10 items each; 3 critical in A, 4 in B |
| Objective 5 practised | Partly: quiz and job aid only. Add a trailing-log exercise in v1 |
| No open tags | Not met: [VERIFY] on the FBI and ALTA sources. Stays v0 |

**What to look up yourself.**

1. The ALTA closing protection letter form your title insurer uses, and its exclusions.
2. Whether any state on the State Law Table limits per diem interest before disbursement. California's regulator has acted on interest charged before funds left escrow.

**How to check it.** Maple Run: $240,000 + $75,261.67 = $315,261.67, which equals $300,000 + $9,000 + $5,100 + $1,161.67. Wire: $240,000 − $5,100 − $1,161.67 = $233,738.33.
