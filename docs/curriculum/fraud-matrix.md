# Fraud typology matrix

**Model policy for training - not for live lending decisions. Not legal advice.**

Author document for Milestone 3 (Course frame). It meets quality bar row 11.3. Each row gives a fraud typology, its red flags, the documents that reveal it, the control that stops it, and one multiple-choice item idea.

Built 22 Nov 2026. Machine-readable twin: [fraud-matrix.json](fraud-matrix.json). Documents carry their IDs from the [document registry](document-registry.md), section 6. Previews come before the teaching module; revisits come after it.

Exhibit figures that are not in `data/running-deals/` are what-if practice data. Label them that way on any item built from this file.

## Summary

| Row | Typology | Previews | Teaches | Revisits | Outcomes | Documents | Key control |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FRD-01 | Straw borrower or nominee owner | C1, C6 | C7 | - | C07-O3 | DOC-08, DOC-12, DOC-53, DOC-11, DOC-52 | CORE-KYC-02, CORE-KYC-07 |
| FRD-02 | Occupancy fraud | - | C1 | C7, C9, C12 | C01-O6, C07-O3, C09-O8, C12-O4 | DOC-46, DOC-35, DOC-06, DOC-53, DOC-50 | CORE-BP-01, CORE-BP-02 |
| FRD-03 | Inflated or broker-supplied after-repair value (ARV) | - | C5 | C7, C8 | C05-O7, C07-O3, C08-O1 | DOC-54, DOC-03, DOC-04, DOC-16 | CORE-VAL-01, CORE-VAL-03 |
| FRD-04 | Rapid flip chains (title chain and seasoning) | C5 | C7 | C9 | C07-O3, C09-O3 | DOC-19, DOC-05, DOC-52, DOC-03 | CORE-KYC-07, CORE-CLS-01 |
| FRD-05 | Fake leases or rent rolls | - | C4 | C7, C9, C12 | C04-O3, C07-O3, C09-O8, C12-O4 | DOC-01, DOC-35, DOC-26, DOC-11, DOC-02 | MF-GEN-04, MF-GEN-05 |
| FRD-06 | Altered bank statements | - | C6 | C7 | C06-O4, C07-O3 | DOC-11, DOC-10 | CORE-BOR-11, CORE-BOR-13 |
| FRD-07 | Related-party appraiser or contractor | - | C5 | C7, C8, C12 | C05-O7, C07-O3, C08-O4, C12-O1 | DOC-54, DOC-18, DOC-12, DOC-56 | CORE-VAL-01, CORE-SVC-05 |
| FRD-08 | Draw fraud | C7 | C12 | - | C12-O1 | DOC-29, DOC-30, DOC-33, DOC-51 | CORE-SVC-05, RES-FF-09 |
| FRD-09 | Closing wire fraud (business email compromise) | - | C7 | C11 | C07-O4, C11-O4 | DOC-13, DOC-27 | CORE-KYC-07, CORE-CLS-02 |
| FRD-10 | Double-pledged collateral | - | C9 | C11, C12 | C09-O3, C11-O5, C12-O1 | DOC-19, DOC-51, DOC-47 | CORE-CLS-01, CORE-CLS-05 |
| FRD-11 | Seller impersonation or title theft | - | C7 | C9, C11 | C07-O3, C09-O3, C11-O4 | DOC-19, DOC-53, DOC-05, DOC-28 | CORE-CLS-01, CORE-CLS-02 |
| FRD-12 | Dual contracts or undisclosed seller credits | C5 | C7 | C11 | C07-O3, C11-O3 | DOC-05, DOC-28, DOC-03, DOC-13 | CORE-KYC-07, CORE-CLS-03 |

## FRD-01: Straw borrower or nominee owner

**Red flags.**

- Owner with no real estate history fronting a deal an experienced party runs
- Track record borrowed from a partner who is not on the chart
- Third party pays the deposit or cash to close
- Guarantor cannot explain the project in a call

**Documents that reveal it.**

- Operating agreement and ownership chart
- Government ID and OFAC results
- Bank statements and source of cash to close
- Settlement statements and deeds for the track record

Registry IDs: DOC-08, DOC-12, DOC-53, DOC-11, DOC-52.

**Control that stops it.**

- Chart to natural persons and verify each 20% owner (CORE-KYC-02, -08)
- Verify experience by settlement statement or public record (CORE-BOR-15)
- Straw or nominee owner and unrelated third-party funds stop the file for the BSA officer (CORE-KYC-07)

**Previews:** C1, C6. **Teaches:** C7. **Revisits:** none.

**Outcomes served:** C07-O3; previewed in C01-O6, C06-O6.

**Item idea (MCQ, review-only draft).** Exhibit: Maple Run track record listing 7 flips; one settlement statement shows Dana owned 15% of a deal. Which count does policy allow? *(Exhibit type: track record and settlement statement.)*

- Key: 6 projects; the 15% deal fails the 20% ownership test (CORE-BOR-15).
- Distractor: 7 projects, as listed.
- Distractor: 0, because one entry is doubtful.
- Distractor: 7, if Sam Okafor co-signs.

## FRD-02: Occupancy fraud

**Red flags.**

- Guarantor's ID, mail or utilities at the subject address
- Lease to a relative or with a shared surname
- No proof of the guarantor's other home
- Cash-out for personal use

**Documents that reveal it.**

- Business-purpose and non-occupancy certification
- Lease and tenant ID
- Utility bills, credit report address history
- Use-of-proceeds letter

Registry IDs: DOC-46, DOC-35, DOC-06, DOC-53, DOC-50.

**Control that stops it.**

- Certification before closing (CORE-BP-01)
- Red flag stops the file and needs written evidence, with contradictions sent to the BSA officer (CORE-BP-02)
- Cash-out majority-personal is declined (CORE-BP-04)
- Lease to an unrelated tenant (RES-GEN-11)

**Previews:** none. **Teaches:** C1. **Revisits:** C7, C9, C12.

**Outcomes served:** C01-O6, C07-O3, C09-O8, C12-O4.

**Item idea (MCQ, review-only draft).** Exhibit: Maple Run month-11 lease to 'C. Reyes' and the guarantor's credit report showing the subject as a current address. What happens? *(Exhibit type: lease and credit report.)*

- Key: The file stops; contradicting evidence goes to the BSA officer, who alone clears it (CORE-BP-02).
- Distractor: Accept the lease; a lease is enough.
- Distractor: Raise the rate for consumer risk.
- Distractor: Ask Chris Reyes to sign the guaranty.

## FRD-03: Inflated or broker-supplied after-repair value (ARV)

**Red flags.**

- Borrower or broker sends their own appraisal or names the appraiser
- Comparables are newer, larger or in a different market
- ARV per square foot far above the comparables
- Pressure to 'hit a value'

**Documents that reveal it.**

- Lender-ordered appraisal and AMC engagement letter
- Desk review
- Comparable sales grid
- Rehab budget and scope

Registry IDs: DOC-54, DOC-03, DOC-04, DOC-16.

**Control that stops it.**

- Appraisal ordered only through the lender's AMC from a certified appraiser (CORE-VAL-01)
- Desk review of every appraisal (CORE-VAL-03)
- BPOs and AVMs as checks only (CORE-VAL-03, RES-GEN-06)

**Previews:** none. **Teaches:** C5. **Revisits:** C7, C8.

**Outcomes served:** C05-O7, C07-O3, C08-O1.

**Item idea (MCQ, review-only draft).** Exhibit: a broker email attaching an 'updated ARV' of $575,000 for Maple Run, against the AMC's $520,000. What should the underwriter do? *(Exhibit type: broker email and appraisal summary.)*

- Key: Size on the AMC value and log the broker's pressure as a red flag (CORE-VAL-01).
- Distractor: Use $575,000; it is more recent.
- Distractor: Average the two values.
- Distractor: Order a BPO to break the tie.

## FRD-04: Rapid flip chains (title chain and seasoning)

**Red flags.**

- Seller took title weeks ago at a much lower price
- Related parties on both sides of prior sales
- Assignment of contract with a large fee
- No work done to explain the price jump

**Documents that reveal it.**

- Title commitment with 24-month chain of title
- Purchase contract and any assignment
- Prior settlement statements
- Appraisal sales history section

Registry IDs: DOC-19, DOC-05, DOC-52, DOC-03.

**Control that stops it.**

- A prior sale within 12 months at 20% or more below today's price or value stops the file for the BSA officer (CORE-KYC-07)
- Title commitment review (CORE-CLS-01)
- DSCR value is the lesser of appraisal and cost basis if owned under 6 months (RES-DSCR-05)

**Previews:** C5. **Teaches:** C7. **Revisits:** C9.

**Outcomes served:** C07-O3, C09-O3; previewed in C05-O4.

**Item idea (MCQ, review-only draft).** Exhibit: title chain showing the subject sold 4 months ago for $230,000; contract price now $300,000. Does a policy flag fire? *(Exhibit type: title chain.)*

- Key: Yes: $230,000 is 23.3% below $300,000, within 12 months (CORE-KYC-07).
- Distractor: No: the gap is under 25%.
- Distractor: No: only the appraiser reviews prior sales.
- Distractor: No: the lookback covers refinances, not purchases.

## FRD-05: Fake leases or rent rolls

**Red flags.**

- Rent roll income not seen in bank deposits
- Many leases signed the same week at above-market rents
- Tenant names repeat or match related parties
- No security deposits held

**Documents that reveal it.**

- Certified rent roll
- Leases and estoppel certificates
- Three months of operating bank statements
- T-12 operating statement

Registry IDs: DOC-01, DOC-35, DOC-26, DOC-11, DOC-02.

**Control that stops it.**

- Rent roll must tie to bank deposits within 5% for the last 3 months (MF-GEN-04)
- Underwritten income is the lesser of rent roll and trailing 3 months (MF-GEN-05)
- Estoppels (COM-GEN-09)

**Previews:** none. **Teaches:** C4. **Revisits:** C7, C9, C12.

**Outcomes served:** C04-O3, C07-O3, C09-O8, C12-O4.

**Item idea (MCQ, review-only draft).** Cedar Court what-if: rent roll annualized $702,000 against deposits annualized $640,000 for three months. What does policy say? *(Exhibit type: rent roll and bank summary.)*

- Key: It fails the 5% tie-out ($62,000 is 8.8% of $702,000), so income must be explained before underwriting (MF-GEN-04).
- Distractor: It passes; deposits are within 10%.
- Distractor: Use the rent roll; deposits lag.
- Distractor: Use GPR instead.

## FRD-06: Altered bank statements

**Red flags.**

- Fonts, alignment or totals that do not foot
- Round-number deposits just before application
- Statement dates outside the 60-day window
- Balances that differ from a verification of deposit

**Documents that reveal it.**

- Two most recent monthly bank statements
- Direct bank verification or account-aggregation report
- Brokerage and retirement statements

Registry IDs: DOC-11, DOC-10.

**Control that stops it.**

- Two most recent statements dated within 60 days of closing (CORE-BOR-13)
- Conflicting documents stop the file for the BSA officer (CORE-KYC-07)

**Policy gap.** No rule requires direct verification from the bank. Ask the owner whether to add one.

**Previews:** none. **Teaches:** C6. **Revisits:** C7.

**Outcomes served:** C06-O4, C07-O3.

**Item idea (MCQ, review-only draft).** Exhibit: Dana Reyes's statement showing a $95,000 ending balance, but the transaction lines add to $59,000. What is the next step? *(Exhibit type: bank statement.)*

- Key: Treat it as conflicting documents: stop the file and send it to the BSA officer (CORE-KYC-07).
- Distractor: Use the ending balance shown.
- Distractor: Use the average of the two figures.
- Distractor: Ask the borrower for a letter explaining it, then proceed.

## FRD-07: Related-party appraiser or contractor

**Red flags.**

- Contractor owned by the borrower or a relative
- Appraiser named by the borrower or broker
- Draw inspector paid by the borrower
- Budget lines far above local costs

**Documents that reveal it.**

- AMC engagement letter
- Contractor licence, insurance and state business-entity record
- Ownership chart cross-checked against the contractor
- Third-party plan and cost review

Registry IDs: DOC-54, DOC-18, DOC-12, DOC-56.

**Control that stops it.**

- Appraiser engaged through the AMC (CORE-VAL-01)
- Third-party draw inspections (CORE-SVC-05)
- Licensed, insured contractor and third-party cost review on ground-up (RES-GU-10)

**Policy gap.** No rule bans or discloses a related-party contractor on rehab loans. Ask the owner.

**Previews:** none. **Teaches:** C5. **Revisits:** C7, C8, C12.

**Outcomes served:** C05-O7, C07-O3, C08-O4, C12-O1.

**Item idea (MCQ, review-only draft).** Exhibit: a state business-entity record showing Maple Run's general contractor is managed by Sam Okafor. What is the strongest response? *(Exhibit type: entity record.)*

- Key: Flag the related party, require third-party inspection before each draw, and refer the gap to a credit officer.
- Distractor: No issue; related contractors save cost.
- Distractor: Release draws on the contractor's own invoices.
- Distractor: Decline the loan automatically under policy.

## FRD-08: Draw fraud

**Red flags.**

- Draw requests for work not in place
- Photos reused or not of the subject
- Missing or unsigned lien waivers
- Subcontractor complaints or mechanics' liens

**Documents that reveal it.**

- Draw request against the budget
- Third-party inspection report with dated photos
- Conditional and unconditional lien waivers
- Title date-down

Registry IDs: DOC-29, DOC-30, DOC-33, DOC-51.

**Control that stops it.**

- Inspection of work in place
- Conditional waivers for this draw and unconditional for the last
- Date-down with no new liens
- Loan in balance (CORE-SVC-05)
- Reimbursement only, one draw per 30 days, 10% held to completion (RES-FF-09)

**Previews:** C7. **Teaches:** C12. **Revisits:** none.

**Outcomes served:** C12-O1; previewed in C07-O3.

**Item idea (MCQ, review-only draft).** Exhibit: Maple Run month-8 draw. The roof is 60% done but billed at 100%. Last draw's unconditional waiver is missing. What may be released? *(Exhibit type: draw request and inspection.)*

- Key: Nothing until the missing waiver arrives; then only work in place (CORE-SVC-05).
- Distractor: The full request, since the budget allows it.
- Distractor: 60% of the roof line now.
- Distractor: The full request, holding back 10%.

## FRD-09: Closing wire fraud (business email compromise)

**Red flags.**

- Changed wire instructions
- New or look-alike email domain or phone number
- Rush to fund early or skip a step
- Payee name not the CPL agent's escrow account

**Documents that reveal it.**

- Closing protection letter
- Written closing instructions
- Wire instructions on file
- Callback log

Registry IDs: DOC-13, DOC-27.

**Control that stops it.**

- CPL in hand (CORE-CLS-02)
- Callback to a number already on file, never one from the request
- Stop-and-verify flags hold the wire (CORE-KYC-07)
- Dual control and receipt confirmation (CORE-CLS-03)

**Previews:** none. **Teaches:** C7. **Revisits:** C11.

**Outcomes served:** C07-O4, C11-O4.

**Item idea (MCQ, review-only draft).** Exhibit: an email from 'title-agency-closings.co' on funding day with new wire instructions and a phone number to confirm. What does policy require? *(Exhibit type: email.)*

- Key: Hold the wire and call the agent on the number already on file (CORE-KYC-07; CORE-CLS-03).
- Distractor: Call the number in the email to confirm.
- Distractor: Wire to the new account; the CPL covers it.
- Distractor: Reply to the email asking if it is genuine.

## FRD-10: Double-pledged collateral

**Red flags.**

- Second lender's mortgage or deed of trust recorded after ours
- Borrower refinancing the same asset elsewhere
- UCC filings by another lender on rents or fixtures
- Title date-down shows new liens

**Documents that reveal it.**

- Title commitment and date-down
- UCC search
- Recorded security instrument and assignment of rents
- Final lender's title policy

Registry IDs: DOC-19, DOC-51, DOC-47.

**Control that stops it.**

- Title commitment with lender's policy (CORE-CLS-01)
- Trailing documents logged and chased (CORE-CLS-05)
- Date-down at each draw (CORE-SVC-05)

**Policy gap.** No rule requires a UCC search at origination, or a periodic lien search on loans with no draws. Ask the owner.

**Previews:** none. **Teaches:** C9. **Revisits:** C11, C12.

**Outcomes served:** C09-O3, C11-O5, C12-O1.

**Item idea (MCQ, review-only draft).** Exhibit: a Birchwood title date-down at month 6 shows a $400,000 mortgage to another lender. What does this most likely show? *(Exhibit type: title date-down.)*

- Key: A second pledge of our collateral, which is likely a default under the loan documents.
- Distractor: A routine tax lien.
- Distractor: Our own recording, filed twice.
- Distractor: A mechanics' lien from the capex work.

## FRD-11: Seller impersonation or title theft

**Red flags.**

- Vacant land or a free-and-clear property
- Seller reachable only by email or text, often out of state
- Price below market and a rush to close
- Seller asks for proceeds by wire to a new account

**Documents that reveal it.**

- Title commitment and vesting deed
- Seller's government ID and signature
- Purchase contract
- Settlement statement and seller proceeds instructions

Registry IDs: DOC-19, DOC-53, DOC-05, DOC-28.

**Control that stops it.**

- Title commitment with lender's policy (CORE-CLS-01)
- Closing agent under a closing protection letter (CORE-CLS-02)
- Callback and stop-and-verify flags on any wire (CORE-KYC-07; CORE-CLS-03)

**Policy gap.** No rule requires the lender to confirm the seller's identity on a purchase. Ask the owner.

**Previews:** none. **Teaches:** C7. **Revisits:** C9, C11.

**Outcomes served:** C07-O3, C09-O3, C11-O4.

**Item idea (MCQ, review-only draft).** Fictional what-if: a free-and-clear lot whose 'seller' signs remotely, wants a quick close and asks for proceeds to a new overseas account. What is the strongest response? *(Exhibit type: contract and wire request.)*

- Key: Treat it as possible seller impersonation: hold closing and ask the title agent to verify the owner's identity.
- Distractor: Close, because title insurance covers every forgery loss.
- Distractor: Close, but wire the proceeds in two parts.
- Distractor: Close, once the buyer confirms the seller by email.

## FRD-12: Dual contracts or undisclosed seller credits

**Red flags.**

- Two versions of the purchase contract
- Seller credits on the settlement statement that are not in the contract
- Price raised with a matching credit back to the buyer
- Large assignment fee to a related party

**Documents that reveal it.**

- Purchase contract and all addenda
- Settlement statement
- Appraisal contract-review section
- Wire and funds-flow record

Registry IDs: DOC-05, DOC-28, DOC-03, DOC-13.

**Control that stops it.**

- Value is the lower of price and appraised value (F-CORE-14)
- The wire must tie to the settlement statement (F-CORE-41; CORE-CLS-03)
- Conflicting documents stop the file (CORE-KYC-07)

**Policy gap.** No rule nets seller credits from price or caps them. Ask the owner; no limit is set here.

**Previews:** C5. **Teaches:** C7. **Revisits:** C11.

**Outcomes served:** C07-O3, C11-O3; previewed in C05-O4.

**Item idea (MCQ, review-only draft).** Fictional what-if: the contract says $300,000, and the settlement statement shows a $30,000 seller credit not in the contract. What does this most likely show? *(Exhibit type: contract and settlement statement.)*

- Key: A dual contract or hidden credit that overstates the price and the borrower's equity.
- Distractor: A routine closing-cost credit that needs no review.
- Distractor: An appraisal error that the desk review will fix.
- Distractor: A title charge the closing agent forgot to list.

## Legal hooks

- False statements to a mortgage lending business, private lenders included: 18 USC 1014 and 27 [VERIFY: 18 USC 1014, 27; not opened; C7 blueprint lists them as checked 22 Nov 2026].
- Red flags trigger diligence and a SAR decision, not proof (FIN-2012-A009) [VERIFY: FinCEN advisory FIN-2012-A009; not opened; CORE-BP-02 lists it as read 22 Nov 2026].
- SAR timing and threshold: 31 CFR 1029.320 [VERIFY: 31 CFR 1029.320; not opened; CORE-KYC-05 lists it as checked 20 Nov 2026].

## Self-check

| Check | Result |
| --- | --- |
| One row per quality bar 11.3 typology | Met: 10 rows, plus FRD-11 and FRD-12 (CCO review 14) |
| No revisit before its teaching module | Met: earlier modules moved to Previews (FRD-01, -04, -08) |
| Documents carry registry IDs | Met |
| Each row has red flags, a document, a control, a module and an MCQ idea | Met |
| Controls cite real policy rules | Met. Five gaps flagged (FRD-06, -07, -10, -11, -12) |
| Running-deal numbers match data/running-deals | Met: Maple Run ARV $520,000 and Cedar Court collections $702,000. Figures not in the deal file are labelled what-if (FRD-05, -11, -12) |

## What to look up yourself

1. Read FinCEN advisory FIN-2012-A009 and FIN-2019-A005 for each red-flag family.
2. Read the FBI IC3 2025 annual report for current real estate and BEC loss figures.
3. Ask the owner to decide the three policy gaps: direct bank verification, related-party contractors, UCC and lien searches.
4. Look for FinCEN or FBI material on seller impersonation of vacant and free-and-clear property (FRD-11).
5. Ask the owner to decide the two new policy gaps: seller identity on purchases (FRD-11) and seller credits (FRD-12).

## How to check it

1. Check that the ten quality bar 11.3 typologies, FRD-11 and FRD-12 each have a row with a document, an outcome and an MCQ idea.
2. Look up each policy rule ID in the Model Credit Policy and confirm it says what the control column claims.
3. Re-work the MCQ calculations: ($300,000 − $230,000) ÷ $300,000 = 23.3%; ($702,000 − $640,000) ÷ $702,000 = 8.83%.
4. For any row, confirm each DOC ID exists in `document-registry.json` and lists this typology.
