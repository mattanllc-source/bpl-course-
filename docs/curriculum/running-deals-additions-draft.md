# Running deals additions: draft for the Course Bible (to-do 16)

**Model policy for training - not for live lending decisions.** Draft of 24 Nov 2026. Owner decision 14 (adopted 24 Nov 2026): add analyst and founder tasks to the deals; label Maple Run's two liquidity figures.

**Status.** Draft for the quant-fact-checker and the owner. Not yet pasted into the live Running Deals tab. `data/running-deals/running-deals.md` is a Bible export and is not edited.

**Scope (owner ruling, 24 Nov 2026).** Only what the policy supports. Nothing invented. Warehouse eligibility, investor-report limits and unit economics wait on the owner (to-do 20) and are not drafted.

**Sources read.** `data/running-deals/running-deals.md` (snapshot 22 Nov 2026, marked current in `docs/SNAPSHOT.md`); Model Credit Policy Core Part 2D (CORE-CONC-01 to -07, F-CORE-29, F-CORE-30, CORE-AUTH-01), Part 3A (D-CORE-12, -30, -31), CORE-CLS-04, CORE-PRC-06; Formula Library F-CORE-33 and F-CORE-41; State Law Table rows SLT-OH-01, -NC-02, -IN-02 and the open-items list; review B §3; review A §1.2 and §4.

**How to use this file.** Each change gives the insertion point in `running-deals.md` (by heading and line), then the text to paste in a fenced block. Paste the block contents unchanged. Line numbers refer to the 22 Nov 2026 export.

---

## Change 1: Role order sentence

**Where.** Top of the file, line 5, the paragraph that starts "Each deal is worked in role order". Replace the first sentence only.

**Replace this:**

```
Each deal is worked in role order: originator, then underwriter, then closing and servicing.
```

**With this:**

```
Each deal is worked in role order: originator, then underwriter, then closing and servicing. Roles 4 and 5 add the fund analyst and the founder.
```

---

## Change 2: Maple Run liquidity labels

**Check against the deal and CORE-CLS-04.**

1. CORE-CLS-04: prepaid interest is collected at closing on the initial funding, from the funding day (counted) to month-end (F-CORE-33).
2. Closing is 15 Jan 2027 (timeline, month 0). 15 Jan to 31 Jan, counting 15 Jan, is 17 days.
3. F-CORE-33: $240,000 × 10.25% ÷ 360 × 17 = $1,161.666… = $1,161.67. This matches Role 3 item 1 and F-CORE-41's Maple Run example.
4. Role 2 (F-CORE-24): $95,000 + $28,000 + $42,000 + $0 − $74,100 = $90,900. The $74,100 is cash to close before prepaid interest (F-RES-09, Role 1).
5. Role 3: $90,900 − $1,161.666… = $89,738.333… = $89,738.33. Cash at closing $74,100 + $1,161.67 = $75,261.67.

Report B is confirmed: $90,900 is before prepaid interest; $89,738.33 is after it. Both pass the $34,000 requirement (F-CORE-25), by $56,900 and $55,738.33.

### 2a. Role 2, item 3 (the defining line)

**Where.** Under `### Role 2: Underwriter` → **Answer key: Role 2** → item 3 **Dana.**, line 102.

**Replace this:**

```
   - Liquidity (F-CORE-24): $95,000 + $40,000 × 0.70 + $60,000 × 0.70 + HELOC $0 − $74,100 = $90,900.
```

**With this:**

```
   - Post-closing liquidity, before prepaid interest (F-CORE-24): $95,000 + $40,000 × 0.70 + $60,000 × 0.70 + HELOC $0 − $74,100 cash to close = $90,900.
```

### 2b. Role 3, item 1 (the second figure, with the note)

**Where.** Under `### Role 3: Closing, servicing and asset management` → **Answer key: Role 3** → item 1 **Closing conditions.**, line 132. Replace one sentence inside the item.

**Replace this:**

```
Liquidity after it is $89,738.33, still above the $34,000 required.
```

**With this:**

```
Post-closing liquidity, after prepaid interest: $90,900 − $1,161.67 = $89,738.33, still above the $34,000 required by $55,738.33. The two liquidity figures differ only by the $1,161.67 prepaid interest: Role 2's $90,900 is before it, and $89,738.33 is after it.
```

### 2c. Consistency edits (optional, recommended)

Three later lines quote the figures without a label. Each edit adds the label only.

| Line | Heading | Replace this | With this |
| --- | --- | --- | --- |
| 106 | Role 2, item 4 **Exits.** | `more than her $90,900 liquidity.` | `more than her $90,900 post-closing liquidity (before prepaid interest).` |
| 116 | **Credit memo outline**, item 6 | `$90,900 liquidity does not cover the $102,000 refinance gap.` | `$90,900 post-closing liquidity (before prepaid interest) does not cover the $102,000 refinance gap.` |
| 156 | Role 3, item 5, decision bullet | `Dana's liquidity after closing was $89,738.33, and Sam has $12,000.` | `Dana's post-closing liquidity, after prepaid interest, was $89,738.33, and Sam has $12,000.` |

---

## Change 3: RD-RES-01 Maple Run, Role 4 (fund analyst)

**Where.** After the last line of `### Role 3: Closing, servicing and asset management` (line 161, "Lesson: a single servicing event can close the planned exit. Asset managers watch exits, not only payments."). Before the `---` on line 163. Leave one blank line on each side.

```
### Role 4: Fund analyst

**Your tasks**

1. Write Maple Run's loan-tape line at closing, using only figures in this file.
2. Test sponsor exposure against the tier caps and the 5% cap.
3. Test the three Residential buckets.
4. Test state and metropolitan statistical area (MSA) concentration.

**Answer key: Role 4**

1. **Loan-tape line (as of closing, 15 Jan 2027).** Every field ties to a figure already in this deal.

| Field | Maple Run | Where it comes from |
| --- | --- | --- |
| Loan ID | RD-RES-01 | Deal heading |
| Product | Residential fix-and-flip bridge (RTL) with a rehab holdback | Role 1 |
| Property | Single-family, 1 unit, 3 bed / 2 bath; vacant at closing | Property table |
| State | Ohio | Property table |
| City and MSA | Columbus. No MSA is stated; the market check cites the Columbus metro | Property table |
| Borrower and qualifying guarantor | Harborline Holdings LLC; Dana Reyes | Role 1, item 2 |
| Sponsor tier | Tier 2 (6 counted projects) | Role 1, item 4 (CORE-BOR-16) |
| Commitment | $340,000 | Role 1 term sheet |
| Funded balance | $240,000 | Initial advance |
| Unfunded | $100,000 rehab holdback | Role 1 term sheet |
| Rate and index | 10.250% fixed, RTL grid; no index | Role 1 (F-CORE-28) |
| Interest basis | Actual/360 on the funded balance, interest only | CORE-PRC-06 (1), F-CORE-01 |
| Points | 1.50 = $5,100 | Role 1 |
| LTC | 85.0% | Role 2, item 1 (F-RES-04) |
| LTARV | 65.4% | Role 2, item 1 (F-RES-02) |
| LTAIV | 80.0% (on the $300,000 price) | Role 2, item 1 (F-RES-03) |
| DSCR | None at closing: an interest-only bridge. The rental exit tested 0.76x | Role 2, item 4 (F-RES-07) |
| Maturity | 15 Jan 2028; 2 × 3-month extensions, latest 15 Jul 2028 | Timeline; Role 3, item 5 |
| Recourse | Full recourse from Dana Reyes and Sam Okafor; completion guaranty | Role 1 term sheet (CORE-DOC-01, -03) |
| Approver | Senior underwriter | Role 2, item 5 (CORE-AUTH-01) |

2. **Sponsor exposure (F-CORE-29, CORE-CONC-01).**
   - Formula: exposure = sum of commitments to entities the sponsor controls or guarantees.
   - Inputs: this loan $340,000; Dana Reyes's other loans with us $0 (none).
   - Work: $340,000 + $0 = $340,000; 1 open loan.
   - Result: Tier 2 cap is $7,500,000 and 10 loans. $340,000 and 1 loan pass, with $7,160,000 of room.
3. **5% of the book (CORE-CONC-02).** Formula: sponsor exposure ÷ total portfolio commitments ≤ 5%.
   - Missing input: the lender's total commitments are not given in the running deals.
   - Method: the test passes when total commitments, including this loan, are at least $340,000 ÷ 5% = $6,800,000.
   - Illustration: the Model Credit Policy's F-CORE-30 worked-example book has $40,000,000 of Residential commitments.
   - After Maple Run, Residential alone is $40,000,000 + $340,000 = $40,340,000.
   - Total commitments are at least that, so Dana Reyes's share is at most $340,000 ÷ $40,340,000 = 0.84%. Passes.
4. **Residential buckets (F-CORE-30; CORE-CONC-03 to -05).** Maple Run is a fix-and-flip on one unit with a $100,000 rehab.
   - It is not ground-up, not a bridge with no rehab, and not a 5-9 unit property.
   - It adds $0 to each bucket and $340,000 to the Residential base. Every bucket share can only fall.
   - Ground-up on the F-CORE-30 book: $9,000,000 ÷ $40,340,000 = 22.31%, down from 22.50%. At most 25% (CORE-CONC-03): passes, with $1,085,000 of room (25% × $40,340,000 − $9,000,000).
   - No-rehab bridge (CORE-CONC-04) and 5-9 units (CORE-CONC-05): the F-CORE-30 example gives no figures. Maple Run adds nothing to either bucket, so it cannot breach them.
5. **State and MSA (F-CORE-30 basis; CORE-CONC-06).** Formula: (existing Ohio commitments + $340,000) ÷ total commitments ≤ 25%. The same test applies to the MSA at 15%.
   - Missing inputs: existing Ohio and MSA commitments, total commitments, and the MSA itself.
   - If Maple Run is the only Ohio loan, total commitments must be at least $340,000 ÷ 25% = $1,360,000.
   - If it is the only loan in its MSA, total commitments must be at least $340,000 ÷ 15% = $2,266,666.67.
   - Buckets are reported monthly. A breached bucket takes no new loans without committee approval (CORE-CONC-07).
6. **Lesson.** A tape line is only as good as its tie-out to the file. Concentration is a portfolio test: one loan cannot be judged without the book.
```

---

## Change 4: RD-RES-01 Maple Run, Role 5 (founder)

**Where.** Directly after Change 3's block, still before the `---` on line 163.

```
### Role 5: Founder

**Your tasks**

1. Map the licensing footprint for this loan in Ohio: lender license, broker license and rate cap. List what you must decide or ask counsel.
2. Policy decision D-CORE-12 (extensions and default rate): show what each option means for Maple Run.

**Answer key: Role 5**

1. **Licensing footprint (SLT-OH-01).** \[VERIFY: State Law Table SLT-OH-01; checked 20 Nov 2026\]

| Question | What the State Law Table says | What it means for Maple Run |
| --- | --- | --- |
| Lender license | None found for business purpose. The Residential Mortgage Lending Act (RMLA, ORC 1322) excludes a loan to buy a dwelling to lease, rent or resell. It applies again if the borrower or immediate family will occupy it (OAC 1301:8-7-02(G), eff. 19 Sep 2025) | No RMLA license for this loan. The house is for rent or resale, and Dana Reyes lives elsewhere |
| Broker license | Same carve-out: RMLA broker registration does not apply to business-purpose loans (OAC 1301:8-7-02(G)) | A broker who arranges this loan needs no RMLA registration |
| Rate cap | Base cap 8% (ORC 1343.01(A)). Exempt: principal over $100,000; business loans to entities (1343.01(B)(1), (6)) | $340,000 to an LLC for a business purpose is exempt on two grounds. The 8% cap should not limit the 10.250% note rate |
| Prepayment | ORC 1343.011 allows up to 1% in the first 5 years on 2 or fewer units. It appears to reach business-purpose loans \[VERIFY\] | Maple Run has no prepayment fee (RES-FF-12), so the open point does not affect this loan |

   - **Decide or ask counsel.**
     1. Confirm the RMLA carve-out covers a flip-to-rent loan to an LLC.
     2. Decide how the firm proves and monitors occupancy after closing. The RMLA applies again if the borrower or family moves in (CORE-BP-01, -02).
     3. Ask how the 2025 rule's "more than half consumer" test treats mixed-purpose loans (SLT-OH-03).
     4. Before offering any prepayment fee on Ohio 1-2 unit houses, ask whether ORC 1343.011 reaches business-purpose loans (State Law Table open item 3).
     5. Ask whether the 15.250% default rate faces any limit. No statute was found, so the common-law penalty rule governs (open item 4).
   - **Approval.** CORE-AUTH-01 lists a first loan in a new state as a case the credit officer must send higher. If Maple Run is the firm's first Ohio loan, it goes to committee.
2. **Policy decision D-CORE-12 (CORE-SVC-01 to -03).** Each option changes only the term it names. Inputs are the month-12 extension (Role 3, item 4) and the 45-day late what-if (Role 3, item 6).

| Option | Extension terms | Maple Run extension cost | Default rate | Extra cost of 45 days late on $315,000 |
| --- | --- | --- | --- | --- |
| **A** (adopted 18 Nov 2026) | 2 × 3 months at 0.50 point | $340,000 × 0.50% = $1,700 each; $3,400 if both are used | 10.250% + 5.000% = 15.250% | $315,000 × 5.000% ÷ 360 = $43.75 a day; × 45 = $1,968.75 |
| **B** | 1 × 6 months at 1.00 point | $340,000 × 1.00% = $3,400, once | 15.250% (as A) | $1,968.75 (as A) |
| **C** | As A | As A | 10.250% + 3.000% = 13.250% | $315,000 × 3.000% ÷ 360 = $26.25 a day; × 45 = $1,181.25 |

   - **Extensions, A against B.** At month 12 the house is 100% complete. Under A the lender extends to 15 Apr 2028 for $1,700 and re-tests at month 15.
   - Under B the borrower pays $3,400 for 6 months to 15 Jul 2028, with no month-15 check.
   - If the borrower needs all 6 months, both cost $3,400. A buys a check-in for nothing. If the sale closes within 3 months, A costs the borrower $1,700 less.
   - **Default rate, A against C.** Default per diem under C is $315,000 × 13.250% ÷ 360 = $115.94, against $133.44 under A. C cuts the 45-day cost by $787.50.
   - C's pro, less usury risk, carries little weight here. SLT-OH-01 finds this loan exempt from the Ohio cap \[VERIFY: State Law Table SLT-OH-01; checked 20 Nov 2026\]. Its con, a weaker incentive to pay, remains.
   - **Lesson.** A founder sets these terms once for the whole book. Every loan then lives with them.
```

---

## Change 5: RD-MF-01 Cedar Court, Role 4 (fund analyst)

**Where.** After the last line of `### RD-MF-01 Role 3: Closing and asset management` (line 311, the item 5 bullet that starts "Lesson: the $443,273.69 exit cushion is gone"). Before `## RD-COM-01: Birchwood Plaza retail bridge to term loan (Commercial)` on line 313. Leave one blank line on each side.

```
### RD-MF-01 Role 4: Fund analyst

**Your tasks**

1. Write Cedar Court's loan-tape line at closing, using only figures in this file.
2. Test sponsor exposure against the tier caps and the 5% cap.
3. Decide which Residential buckets apply.
4. Test state and MSA concentration.

**Answer key: Role 4**

1. **Loan-tape line (as of closing, month 0).** Every field ties to a figure already in this deal.

| Field | Cedar Court | Where it comes from |
| --- | --- | --- |
| Loan ID | RD-MF-01 | Deal heading |
| Product | Multifamily value-add bridge with capex future funding | Role 1 |
| Property | 50 units, garden-style, market-rate; 88% occupied | Property table |
| State | North Carolina | Property table |
| City and MSA | Charlotte. No MSA is stated | Property table |
| Borrower and qualifying guarantor | Cedar Court Partners LLC; Marcus Hale | Role 1, item 2 |
| Sponsor tier | Tier 1 (2 counted projects) | Role 2, item 3 (CORE-CONC-01) |
| Commitment | $5,140,000 | Role 1 term sheet |
| Funded balance | $4,340,000 | Initial funding |
| Unfunded | $800,000 capex | Role 1 term sheet |
| Rate and index | 1-month Term SOFR + 4.000%; 7.650% at closing (SOFR 3.650%) | Role 1 (MF-BR-14) |
| Rate cap | Strike 4.250%, 24 months, notional $5,140,000 | Market inputs (D-CORE-30) |
| Interest basis | Actual/360 on the funded balance, interest only | CORE-PRC-06 (1), F-CORE-01 |
| Fees | Origination 1.00% = $51,400; exit 0.50% | Role 1 term sheet |
| LTV (initial funding ÷ price) | 70.0% of the $6,200,000 price | Role 2, item 2 (F-MF-13) |
| LTC | 71.4% (commitment ÷ cost) | Role 1, item 3 |
| Debt yield | As-is 9.10%; stabilized 10.89% | Role 2, item 2 |
| DSCR | None at closing: an interest-only bridge. Interest coverage 1.10x at 8.250% | Role 2, item 2 (F-MF-12) |
| Maturity | Month 24; 2 × 6-month extensions. No calendar dates are stated | Timeline; Role 1 term sheet |
| Recourse | Non-recourse with carve-outs; completion guaranty; environmental indemnity | Role 1 term sheet (MF-BR-12) |
| Approver | Credit committee | Role 2, item 4 (CORE-AUTH-01) |

2. **Sponsor exposure (F-CORE-29, CORE-CONC-01).**
   - Inputs: this loan $5,140,000; Marcus's other loans with us $0 (none).
   - Work: $5,140,000 + $0 = $5,140,000; 1 open loan.
   - Result: Tier 1 cap is $3,000,000 and 5 loans. $5,140,000 is $2,140,000 over the cap, so committee only.
   - It is also $140,000 over the credit officer's $5,000,000 sponsor-exposure authority (CORE-AUTH-01).
3. **5% of the book (CORE-CONC-02).** Formula: sponsor exposure ÷ total portfolio commitments ≤ 5%.
   - Missing input: the lender's total commitments are not given.
   - Method: the test passes when total commitments, including this loan, are at least $5,140,000 ÷ 5% = $102,800,000.
   - The F-CORE-30 example gives only $40,000,000 of Residential commitments. Multifamily and Commercial totals are unknown, so the test cannot be decided.
4. **Residential buckets (CORE-CONC-03 to -05).** Not applicable. Cedar Court is a 50-unit Multifamily loan. It sits outside the Residential base, and 50 units is not a 5-9 unit property.
5. **State and MSA (CORE-CONC-06).** Formula: (existing North Carolina commitments + $5,140,000) ÷ total commitments ≤ 25%. The MSA test is the same at 15%.
   - Missing inputs: existing North Carolina and MSA commitments, total commitments, and the MSA itself.
   - If Cedar Court is the only North Carolina loan, total commitments must be at least $5,140,000 ÷ 25% = $20,560,000.
   - If it is the only loan in its MSA, total commitments must be at least $5,140,000 ÷ 15% = $34,266,666.67.
   - A breach goes to committee, and the breached bucket takes no new loans without committee approval (CORE-CONC-07).
6. **Lesson.** One $5,140,000 loan needs a book of at least $102,800,000 to pass the 5% test. Large loans are a portfolio decision, not only a credit one.
```

---

## Change 6: RD-MF-01 Cedar Court, Role 5 (founder)

**Where.** Directly after Change 5's block, still before `## RD-COM-01` on line 313.

```
### RD-MF-01 Role 5: Founder

**Your tasks**

1. Map the licensing footprint for this loan in North Carolina: lender license, broker license and rate cap. List what you must decide or ask counsel.
2. Policy decision D-CORE-30 (rate cap notional): show what each option means for Cedar Court at month 10.

**Answer key: Role 5**

1. **Licensing footprint (SLT-NC-02).** \[VERIFY: State Law Table SLT-NC-02; checked 20 Nov 2026\]

| Question | What the State Law Table says | What it means for Cedar Court |
| --- | --- | --- |
| Lender license | None found. The SAFE Act covers consumer-purpose residential loans only. The table itself flags "no other NC commercial lender license" for counsel \[VERIFY\] | No North Carolina lender license found for this loan |
| Broker license | None found | No broker license found for this loan |
| Rate cap | Loans of $300,000 or more, or to entities, are exempt from rate and fee limits (G.S. 24-9) | $5,140,000 to an LLC is exempt on both grounds: any agreed rate and fees, and no usury claim |
| Late fees | The 4% rule covers loans under G.S. 24-1.1. Exempt 24-9 loans may agree any fees \[VERIFY\] | The 4% cap appears not to bind this loan |

   - **Decide or ask counsel.**
     1. Confirm no other North Carolina license applies to commercial lending (the table's own open point).
     2. Confirm the 4% late-fee cap does not bind an exempt G.S. 24-9 loan (State Law Table open item 2).
     3. Commission the rent regulation check. This file says it was not researched (MF-GEN-09).
     4. Track the SAFE Act changes of SL 2025-43, eff. 1 Oct 2025. The consumer-purpose test is unchanged today (SLT-NC-03).
   - **Approval.** Cedar Court already goes to committee (Role 2). A first loan in a new state would send it there too (CORE-AUTH-01).
2. **Policy decision D-CORE-30 (MF-BR-09).** Month 10, 30-day month (Role 3, item 2). SOFR 5.000%; note rate 9.000%; strike 4.250%; funded $4,740,000.
   - Interest on the funded balance (F-CORE-01): $4,740,000 × 9.000% ÷ 360 × 30 = $35,550.00 under every option.
   - Cap payment: notional × (5.000% − 4.250%) ÷ 360 × 30.

| Option | Notional at month 10 | Cap pays | Net interest | Net rate on $4,740,000 funded |
| --- | --- | --- | --- | --- |
| **A** (adopted 22 Nov 2026): full commitment | $5,140,000 | $5,140,000 × 0.750% ÷ 360 × 30 = $3,212.50 | $35,550.00 − $3,212.50 = $32,337.50 | $32,337.50 ÷ $4,740,000 × 360 ÷ 30 = 8.187% |
| **B**: funded balance at closing | $4,340,000 | $4,340,000 × 0.750% ÷ 360 × 30 = $2,712.50 | $35,550.00 − $2,712.50 = $32,837.50 | $32,837.50 ÷ $4,740,000 × 360 ÷ 30 = 8.313% |
| **C**: accreting on the draw schedule, if draws run to schedule | $4,740,000 | $4,740,000 × 0.750% ÷ 360 × 30 = $2,962.50 | $35,550.00 − $2,962.50 = $32,587.50 | $32,587.50 ÷ $4,740,000 × 360 ÷ 30 = 8.250% |

   - **A** hedges $400,000 of capex not yet drawn ($5,140,000 − $4,740,000). The borrower pays for that, but nets 8.187%, below strike + spread (8.250%).
   - **B** leaves the $400,000 already drawn unhedged ($4,740,000 − $4,340,000). The net rate, 8.313%, is above the 8.250% that MF-BR-09 uses to set coverage.
   - **C** nets exactly 8.250%, but only if draws match the schedule. This file gives no planned schedule, so a mismatch cannot be shown.
   - The $60,000 cap cost under A is a course assumption. No cost is given for B or C, so the cheaper cap cannot be priced here.
   - **Lesson.** Option A is the only one that holds coverage at strike + spread whatever the draw timing. A founder buys that certainty with the borrower's cap budget.
```

---

## Change 7: RD-COM-01 Birchwood Plaza, Role 4 (fund analyst)

**Where.** After the last line of `### RD-COM-01 Role 3: Closing and asset management` (line 450, "Lesson: one 21% tenant leaving turns a $380,000 cash-out into a $73,524.31 shortfall."). This is the end of the file. Leave one blank line before.

```
### RD-COM-01 Role 4: Fund analyst

**Your tasks**

1. Write Birchwood Plaza's loan-tape line at closing, using only figures in this file.
2. Test sponsor exposure against the tier caps and the 5% cap.
3. Decide which Residential buckets apply.
4. Test state and MSA concentration.
5. What-if: the three running deals are the lender's whole book. Run the concentration tests.

**Answer key: Role 4**

1. **Loan-tape line (as of closing, month 0).** Every field ties to a figure already in this deal.

| Field | Birchwood Plaza | Where it comes from |
| --- | --- | --- |
| Loan ID | RD-COM-01 | Deal heading |
| Product | Commercial bridge, unanchored retail, with capex and TI/LC future funding | Role 1 |
| Property | 40,000 sf strip center, 11 suites; 70% leased | Property table |
| State | Indiana | Property table |
| City and MSA | Indianapolis. No MSA is stated | Property table |
| Borrower and qualifying guarantor | Birchwood Plaza LLC; Dana Whitlow | Role 1, item 2 |
| Sponsor tier | Tier 1 (2 counted projects) | Role 2, item 4 (CORE-CONC-01) |
| Commitment | $3,520,000 | Role 1 term sheet |
| Funded balance | $2,860,000 | Initial funding |
| Unfunded | $660,000 ($300,000 capex; $360,000 TI/LC) | Role 1 term sheet |
| Rate and index | 1-month Term SOFR + 4.000%; 7.650% at closing (SOFR 3.650%) | Role 1 (COM-BR-06) |
| Rate cap | Strike 4.250%, 24 months, notional $3,520,000 | Market inputs (D-CORE-30) |
| Interest basis | Actual/360 on the funded balance, interest only | CORE-PRC-06 (1), F-CORE-01 |
| Fees | Origination 1.00% = $35,200; extension 0.25% | Role 1 term sheet |
| LTV (initial funding ÷ price) | 65.0% of the $4,400,000 price | Role 1 term sheet |
| LTC | 68.0% | Role 2, item 2 |
| DSCR | None at closing: an interest-only bridge. In-place coverage 1.08x at 8.250%; exit DSCR 1.36x at 7.750%; rollover-stressed 1.29x | Role 2, items 2 and 3 |
| Exit debt yield | 12.3% | Role 2, item 2 |
| Reserves | Interest reserve $23,983.33 (committee condition) | Role 2, item 2 (F-COM-17) |
| Maturity | Month 24; two 6-month extensions. No calendar dates are stated | Timeline; Role 1 term sheet |
| Recourse | Full guarantee from Dana Whitlow and Leo Marsh, burning off at stabilization; completion guaranty | Role 1 term sheet (COM-BR-07) |
| Approver | Credit committee | Role 2, item 4 (CORE-AUTH-01) |

2. **Sponsor exposure (F-CORE-29, CORE-CONC-01).**
   - Inputs: this loan $3,520,000; Dana Whitlow's other loans with us $0 (none).
   - Work: $3,520,000 + $0 = $3,520,000; 1 open loan.
   - Result: Tier 1 cap is $3,000,000 and 5 loans. $3,520,000 is $520,000 over the cap, so committee only.
3. **5% of the book (CORE-CONC-02).** Formula: sponsor exposure ÷ total portfolio commitments ≤ 5%.
   - Missing input: the lender's total commitments are not given.
   - Method: the test passes when total commitments, including this loan, are at least $3,520,000 ÷ 5% = $70,400,000.
4. **Residential buckets (CORE-CONC-03 to -05).** Not applicable. Birchwood Plaza is a Commercial loan, outside the Residential base.
5. **State and MSA (CORE-CONC-06).** Formula: (existing Indiana commitments + $3,520,000) ÷ total commitments ≤ 25%. The MSA test is the same at 15%.
   - Missing inputs: existing Indiana and MSA commitments, total commitments, and the MSA itself.
   - If Birchwood is the only Indiana loan, total commitments must be at least $3,520,000 ÷ 25% = $14,080,000.
   - If it is the only loan in its MSA, total commitments must be at least $3,520,000 ÷ 15% = $23,466,666.67.
6. **What-if: the three running deals are the whole book.**
   - Total commitments: $340,000 + $5,140,000 + $3,520,000 = $9,000,000.
   - The three sponsors are different people, and each deal is in a different state. Columbus, Charlotte and Indianapolis are different metros. So each deal's sponsor, state and MSA shares are all the same number.

| Deal | Commitment | Share of $9,000,000 | Sponsor, 5% (CORE-CONC-02) | State, 25% (CORE-CONC-06) | MSA, 15% (CORE-CONC-06) |
| --- | --- | --- | --- | --- | --- |
| Maple Run | $340,000 | $340,000 ÷ $9,000,000 = 3.78% | Passes | Ohio 3.78%: passes | Passes |
| Cedar Court | $5,140,000 | $5,140,000 ÷ $9,000,000 = 57.11% | Fails | North Carolina 57.11%: fails | Fails |
| Birchwood Plaza | $3,520,000 | $3,520,000 ÷ $9,000,000 = 39.11% | Fails | Indiana 39.11%: fails | Fails |

   - Residential buckets: the Residential base is Maple Run's $340,000, and every bucket holds $0. All three pass at 0%.
   - Under CORE-CONC-07, North Carolina, Indiana and both of their MSAs take no new loans without committee approval.
7. **Lesson.** Percentage caps bind hardest on a small book. A new lender breaches them with its first large loans, so it plans book size before it lends.
```

---

## Change 8: RD-COM-01 Birchwood Plaza, Role 5 (founder)

**Where.** Directly after Change 7's block, at the end of the file.

```
### RD-COM-01 Role 5: Founder

**Your tasks**

1. Map the licensing footprint for this loan in Indiana: lender license, broker license and rate cap. List what you must decide or ask counsel.
2. Policy decision D-CORE-31 (who takes the bridge out): show what each option means for Birchwood Plaza at month 24.

**Answer key: Role 5**

1. **Licensing footprint (SLT-IN-02).** \[VERIFY: State Law Table SLT-IN-02; checked 20 Nov 2026\]

| Question | What the State Law Table says | What it means for Birchwood Plaza |
| --- | --- | --- |
| Lender license | None found. Indiana mortgage lending licenses cover dwellings and residential real estate (IC 24-4.4) | No Indiana lender license found for a strip-center loan |
| Broker license | None found. The Loan Broker Act covers residential mortgage loans only (IC 23-2.5-1-14) | No broker license found for this loan |
| Rate cap | Not capped for non-consumer loans (secondary source). The loansharking statute covers consumer loans only (IC 35-45-7-3) | No cap found on the 7.650% note rate. The no-cap finding rests on a secondary source |

   - **Decide or ask counsel.**
     1. Confirm from a primary source that non-consumer loans carry no Indiana rate cap.
     2. Before taking Indiana 1-4 unit loans from brokers, ask whether they need a Loan Broker Act license (SLT-IN-01; open item 1).
     3. Ask whether default interest and late fees face any limit. No statute was found, so the common-law penalty rule governs (open item 4).
   - **Approval.** Birchwood already goes to committee (Role 2). A first loan in a new state would send it there too (CORE-AUTH-01).
2. **Policy decision D-CORE-31.** Month 24 inputs (Role 3, item 4): term loan $3,900,000; bridge payoff $3,520,000. Dana Whitlow is Tier 1, cap $3,000,000 (Role 2).

| Option | Who takes Birchwood out | What it means for this deal |
| --- | --- | --- |
| **A** (adopted 22 Nov 2026) | A third-party regional bank, sized with our COM-TRM rules as a stand-in | Loan $3,900,000. Proceeds over payoff $3,900,000 − $3,520,000 = $380,000 before costs. Full recourse (COM-TRM-06). Our exposure to Dana Whitlow ends at payoff |
| **B** | Our own term loan | Same sizing, so no number changes: $3,900,000. Our exposure to Dana Whitlow rises to $3,900,000, which is $900,000 over the Tier 1 cap. Committee again (CORE-CONC-01) |
| **C** | Sized on live market terms | No number can be fixed. A bank quote (rates up to about 8.09%) or a CMBS conduit (about 250 bp spread) would change the loan (Policy COM Part 1E). The rate goes stale |

   - **A** moves the long-term loan off our book. That is the decision's point: "a non-bank cannot fund 10-year fixed loans on warehouse lines" (D-CORE-31, a con of option B).
   - **B** keeps the borrower and the fee income, but the firm must hold a fixed-rate term loan. It also keeps Indiana and Dana Whitlow's exposure on the book.
   - **C** is the most realistic, but the course could not reproduce its numbers later.
   - **Lesson.** A founder's take-out choice is a funding decision first. The exit you offer must fit the money you lend.
```

---

## Needs the owner

Missing inputs and open questions. None of these is drafted or guessed above.

1. **Total portfolio commitments.** Needed to decide CORE-CONC-02 for Cedar Court and Birchwood, and CORE-CONC-06 for all three. The draft states the minimum book each test needs instead.
2. **Existing state and MSA commitments, and each deal's MSA.** No deal states an MSA. Maple Run cites the "Columbus metro" and the "Columbus HUD Metro FMR Area" only in its rent check.
3. **Residential bucket figures for no-rehab bridge and 5-9 units.** The F-CORE-30 example gives only ground-up ($9,000,000 of $40,000,000). Maple Run's result does not depend on them, but a lesson using the book would. The two F-CORE-30 examples also differ: the policy's is $9,000,000 ÷ $40,000,000 = 22.5%, and the Formula Library's is $5,000,000 ÷ $25,000,000 = 20.0%. This draft uses the policy's. Align the two.
4. **Use of the F-CORE-30 example book with Maple Run.** The draft treats its $40,000,000 Residential book as an illustration, as the scope ruling allows. Confirm, or cut those lines.
5. **Three-deal book what-if (Birchwood Role 4, item 6).** Its $9,000,000 total is the sum of the three deals. Keep it, or cut it if the owner reads it as an invented portfolio.
6. **Which guarantors CORE-CONC-01 tests.** The deals test only the qualifying guarantor. F-CORE-29 counts loans a sponsor "controls or guarantees". Priya Nand and Leo Marsh have no ownership record, so 0 counted projects and Tier 0 ($1,000,000 cap). If each guarantor is tested, Priya's $5,140,000 and Leo's $3,520,000 exceed that. Sam Okafor's record is not stated.
7. **Closing dates for Cedar Court and Birchwood.** The tape shows "month 24" because no calendar dates are stated.
8. **CORE-AUTH-01, first loan in a new state.** The matrix lists it under the credit officer's "must go higher" column only. Confirm it also binds a senior underwriter (Maple Run). Also confirm whether each running deal is the firm's first loan in its state.
9. **D-CORE-12 reading.** The draft reads option B as changing only extensions and option C only the default rate. Confirm.
10. **D-CORE-30 options B and C.** The deal gives no cap cost for B or C and no planned draw schedule, so C's mismatch and the cap costs are not shown.
11. **Warehouse eligibility and investor-report limits (to-do 20).** Not in the policy. Not drafted.
12. **Founder unit economics (to-do 20; review A decision 8).** Needs owner formulas. Not drafted.
13. **Task times.** These are unconfirmed, so they are out of the paste blocks. Each new block's tasks line reads `**Your tasks**` with no time. Proposed times: Role 4 and Role 5 for Maple Run and Cedar Court, about 45 minutes each; Birchwood Plaza Role 4, about 60 minutes; Birchwood Plaza Role 5, about 45 minutes. Existing roles all show a time, so add these as `**Your tasks (about N minutes)**` once confirmed.
14. **Legal tags.** The founder tables summarize State Law Table rows checked 20 Nov 2026. I did not re-open the statutes. The legal-regulatory-verifier should re-check before release.

---

## Every figure and its source

"RD" = `data/running-deals/running-deals.md` line. "MCP" = `docs/credit-policy/model-credit-policy.md` line. "SLT" = `docs/credit-policy/state-law-table.md` line. Derived figures show their working; all were recomputed in Python with `Decimal` and rounded half up for display only.

### Change 2: Maple Run liquidity

| Figure | Source or working |
| --- | --- |
| $240,000; 10.25% | RD 76, 78 |
| 15 Jan 2027 closing | RD 45 |
| 17 days (15-31 Jan, funding day counted) | MCP 278 (CORE-CLS-04); RD 132 |
| $1,161.67 = $240,000 × 0.1025 ÷ 360 × 17 = $1,161.666… | RD 132; Formula Library F-CORE-33, F-CORE-41 example |
| $90,900 = $95,000 + $28,000 + $42,000 + $0 − $74,100 | RD 102; inputs RD 22, 84 |
| $89,738.33 = $90,900 − $1,161.666… | RD 132 |
| $75,261.67 = $74,100 + $1,161.67 | RD 132 |
| $34,000 required; $56,900 cushion | RD 103 |
| $55,738.33 = $89,738.333… − $34,000 | Derived |

### Change 3: Maple Run analyst

| Figure | Source or working |
| --- | --- |
| Tier 2, 6 counted | RD 70 |
| $340,000; $240,000; $100,000; 1.50 points = $5,100; 10.250% | RD 75-79 |
| LTC 85.0%; LTARV 65.4%; LTAIV 80.0% | RD 98 |
| DSCR 0.76x (rental exit) | RD 106 |
| 15 Jan 2028; 15 Jul 2028 | RD 50, 156 |
| Tier 2 cap $7,500,000 and 10 loans | MCP 350 (CORE-CONC-01); RD 105 |
| $7,160,000 room = $7,500,000 − $340,000 | Derived |
| 5% cap | MCP 351 (CORE-CONC-02) |
| $6,800,000 = $340,000 ÷ 0.05 | Derived |
| $40,000,000 Residential; $9,000,000 ground-up; 22.50% | MCP 374-376 (F-CORE-30 example) |
| $40,340,000 = $40,000,000 + $340,000 | Derived |
| 0.84% = $340,000 ÷ $40,340,000 = 0.8428% | Derived |
| 22.31% = $9,000,000 ÷ $40,340,000 = 22.3104% | Derived |
| $1,085,000 = 0.25 × $40,340,000 − $9,000,000 | Derived |
| 25% ground-up, 25% no-rehab, 10% 5-9 units | MCP 352-354 (CORE-CONC-03 to -05) |
| 25% state, 15% MSA | MCP 355 (CORE-CONC-06) |
| $1,360,000 = $340,000 ÷ 0.25 | Derived |
| $2,266,666.67 = $340,000 ÷ 0.15 = $2,266,666.666… | Derived |

### Change 4: Maple Run founder

| Figure | Source or working |
| --- | --- |
| Ohio license, broker and rate-cap cells; 8% base; $100,000 exemption; 1% / 5 years / 2 units | SLT 26, 35, 44 |
| Open items 3 and 4 | SLT 70-71 |
| "First loan in a new state" | MCP 397 (CORE-AUTH-01) |
| D-CORE-12 options: 2 × 3 months at 0.50 point; 1 × 6 months at 1.00 point; default +5.00% or +3.00% | MCP 431 |
| $1,700 = $340,000 × 0.005; $3,400 = × 2 | RD 147; derived |
| $3,400 = $340,000 × 0.01 (option B) | Derived |
| 15.25%; $315,000 balance; $133.44; $89.69; $43.75; $1,968.75 | RD 158-159 |
| 13.25% = 10.25% + 3.00% | Derived |
| $115.94 = $315,000 × 0.1325 ÷ 360 = $115.9375 | Derived |
| $26.25 = $315,000 × 0.03 ÷ 360; $1,181.25 = $26.25 × 45 | Derived |
| $787.50 = $1,968.75 − $1,181.25 | Derived |
| 15 Apr 2028; 15 Jul 2028; 100% complete | RD 147, 156 |

### Changes 5 and 6: Cedar Court

| Figure | Source or working |
| --- | --- |
| 50 units; 88%; Charlotte | RD 184-186 |
| Tier 1, 2 counted | RD 272 |
| $5,140,000; $4,340,000; $800,000; 7.65%; SOFR 3.65%; $51,400; exit 0.50% | RD 230, 236-241 |
| Cap 4.25%, 24 months, $5,140,000, $60,000 | RD 199 |
| 70.0% of $6,200,000 | RD 262 ($4,340,000 ÷ $6,200,000 = 70.0%) |
| 71.4% of cost | RD 230 ($5,140,000 ÷ $7,200,000 = 71.39%) |
| Debt yields 9.10%, 10.89%; coverage 1.10x at 8.25% | RD 263-265 |
| $2,140,000 = $5,140,000 − $3,000,000 | RD 272; derived |
| Credit officer sponsor authority $5,000,000; $140,000 = $5,140,000 − $5,000,000 | MCP 397; derived |
| $102,800,000 = $5,140,000 ÷ 0.05 | Derived |
| $20,560,000 = $5,140,000 ÷ 0.25 | Derived |
| $34,266,666.67 = $5,140,000 ÷ 0.15 = $34,266,666.666… | Derived |
| North Carolina license, broker, rate-cap and late-fee cells | SLT 27, 36, 45; open item 2 at SLT 69 |
| Rent regulation not researched | RD 213 |
| D-CORE-30 options | MCP 449 |
| SOFR 5.00%; 9.00%; $4,740,000; $35,550.00; $3,212.50; $32,337.50; 8.187% | RD 298-301 |
| $2,712.50 = $4,340,000 × 0.0075 ÷ 360 × 30 | Derived |
| $32,837.50 = $35,550.00 − $2,712.50 | Derived |
| 8.313% = $32,837.50 ÷ $4,740,000 × 12 = 8.3133% | Derived |
| $2,962.50 = $4,740,000 × 0.0075 ÷ 360 × 30 | Derived |
| $32,587.50 = $35,550.00 − $2,962.50; 8.250% exactly | Derived |
| $400,000 = $5,140,000 − $4,740,000 = $4,740,000 − $4,340,000 | Derived |

### Changes 7 and 8: Birchwood Plaza

| Figure | Source or working |
| --- | --- |
| 40,000 sf; 11 suites; 70%; Indianapolis | RD 332-334 |
| Tier 1, 2 counted | RD 420 |
| $3,520,000; $2,860,000; $300,000; $360,000; 7.65%; $35,200; 0.25% | RD 378, 384-390 |
| Cap 4.25%, 24 months, $3,520,000 | RD 347 |
| 65.0% of $4,400,000 | RD 385 |
| LTC 68.0%; coverage 1.08x at 8.25%; exit 1.36x at 7.75%; exit debt yield 12.3%; interest reserve $23,983.33 | RD 411-413 |
| Stressed 1.29x | RD 414 |
| $520,000 = $3,520,000 − $3,000,000 | RD 420; derived |
| $70,400,000 = $3,520,000 ÷ 0.05 | Derived |
| $14,080,000 = $3,520,000 ÷ 0.25 | Derived |
| $23,466,666.67 = $3,520,000 ÷ 0.15 = $23,466,666.666… | Derived |
| $9,000,000 = $340,000 + $5,140,000 + $3,520,000 | Derived from RD 75, 236, 384 |
| 3.78% = 3.7778%; 57.11% = 57.1111%; 39.11% = 39.1111% | Derived |
| Indiana license, broker and rate-cap cells | SLT 28, 37, 46; open items 1 and 4 at SLT 68, 71 |
| D-CORE-31 options and the quoted warehouse-line text | MCP 450 |
| $3,900,000; $3,520,000 payoff; $380,000; full recourse | RD 442-445 |
| About 8.09% bank rates; about 250 bp CMBS spread | RD 441, 445 |
| $900,000 = $3,900,000 − $3,000,000 | Derived |
