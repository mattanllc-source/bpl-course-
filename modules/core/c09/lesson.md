# C9: Loan documents, title, insurance and collateral

**Model policy for training - not for live lending decisions.** Fictional data only.

| Item | Detail |
| --- | --- |
| Assets in this tab | C9-lesson-v0, C9-quiz-v0 (sets A and B), C9-ojt-v0, C9-jobaid-v0 |
| Hours | 3 (180 minutes) plus a 45-minute OJT task |
| Prerequisite | C2 |
| Bloom's levels | 3 and 4 (LD-02) |
| Formulas | F-CORE-14, -34, -35, -37 |
| Rules | CORE-DOC-01 to -05; CORE-CLS-01, -06; CORE-INS-01 to -04; CORE-SVC-05; RES-GEN-07, -08; MF-GEN-08, -10; MF-BR-12, -13; COM-GEN-09, -12 to -14, -16; COM-BR-07; RES-GEN-11 |
| Running deals | Worked examples: RD-RES-01 Maple Run and RD-COM-01 Birchwood Plaza. Practice: RD-MF-01 Cedar Court (LD-08) |
| Status | v0. Self-review against Bible Section 7 is at the end of this tab |
| Change log | v0, 20 Nov 2026. v0.1, 22 Nov 2026. v0.2, 22 Nov 2026: review fixes, policy decisions D-CORE-17 onward, self-check |

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

A fire damages $500,000 of a strip center. The policy carries $4,400,000 against a $5,200,000 replacement cost, with a 90% coinsurance clause. The insurer pays $445,085.47, not $475,000. CORE-INS-01 bars that clause, and F-CORE-37 shows what it costs.

Nobody missed a payment, and the loan still lost cover. Closing documents decide what we can collect when things go wrong. This module teaches you to check them before the money goes out.

## 2. Objectives

By the end of C9, you will be able to:

1. **Select** the recourse structure and document set for a loan (CORE-DOC-01 to -04; RES-GEN-07; MF-BR-12; COM-BR-07).
2. **Review** a title commitment and decide which items must be cleared before closing, and set the policy amount (CORE-CLS-01, -06).
3. **Test** hazard, loss-of-rents and flood cover against policy (CORE-INS-01, -03, -04; F-CORE-34, -37; RES-GEN-08; MF-GEN-10; COM-GEN-16).
4. **Calculate** tax and insurance escrows, the closing cushion and other reserves (F-CORE-35; CORE-INS-02; MF-BR-13).
5. **Analyze** third-party reports and tenant documents: Phase I, estoppels, SNDAs and the lockbox (MF-GEN-08; COM-GEN-09, -12 to -14).

## 3. Teach

### T1. The document set and recourse (Objective 1, 15 minutes)

Every loan has a core set. The note is the promise to pay. The mortgage or deed of trust gives the lien. The loan agreement holds the covenants.

| Document | When | Rule |
| --- | --- | --- |
| Full-recourse guaranty | Every residential loan | CORE-DOC-01, RES-GEN-07 |
| Non-recourse carve-out guaranty (fraud, misapplied funds, unpermitted transfer, voluntary bankruptcy) | MF and COM bridges that are non-recourse | CORE-DOC-02 |
| Completion guaranty | Future funding or construction | CORE-DOC-03 |
| Environmental indemnity | Every MF and COM loan | CORE-DOC-03 |
| Business-purpose certification | Every loan | CORE-BP-01 (C2) |
| Assignment of leases and rents; UCC filings | Income property (market practice) | Standard; not a separate rule |

Recourse depends on family, size and LTV. Read across the row that fits the loan:

| Family | Size or LTV | Recourse | Rule |
| --- | --- | --- | --- |
| Residential (RTL and DSCR) | Any size, any LTV | Full-recourse guaranty | CORE-DOC-01; RES-GEN-07 |
| Multifamily bridge | Under $2,000,000 | Full-recourse guaranty | MF-BR-12 |
| Multifamily bridge | $2,000,000 and up | Non-recourse with carve-outs, plus a completion guaranty for capex | MF-BR-12; CORE-DOC-02 |
| Commercial bridge | LTV 60% or below | Non-recourse with carve-outs | COM-BR-07; CORE-DOC-02 |
| Commercial bridge | LTV above 60% | Full guarantee that burns off at stabilization | COM-BR-07 |

On top of any row, future funding adds a completion guaranty. Multifamily and commercial add an environmental indemnity (CORE-DOC-03).

**State law can blunt a guaranty.** CORE-DOC-04 requires a state check before the term sheet. Each running deal sits in a different state, and the State Law Table has a row for each.

| Deal | State row | Foreclosure | Deficiency |
| --- | --- | --- | --- |
| RD-RES-01 Maple Run | Ohio, SLT-OH-01 | Judicial only; about 6 months to 2 years from filing to sale | Allowed; the 2-year limit (ORC 2329.08) covers 1-2 family dwellings used as a home. Ask counsel whether a rented house counts |
| RD-MF-01 Cedar Court | North Carolina, SLT-NC-02 | Power of sale before the clerk; 10-day upset-bid periods | Allowed, but the borrower may prove fair value as a defense |
| RD-COM-01 Birchwood Plaza | Indiana, SLT-IN-02 | Judicial; no sale until 3 months after filing | Allowed, unless the borrower waives the wait with our consent |

[VERIFY: State Law Table SLT-OH-01, SLT-NC-02, SLT-IN-02; ORC 2329.08; N.C. Gen. Stat. 45-21.27, 45-21.36; IC 32-29-7-3, -5, via codes.findlaw.com; checked 22 Nov 2026]

California is the classic contrast. Its one-action rule, Code of Civil Procedure 726, makes a lender foreclose before other remedies on the debt. Section 580d bars a deficiency judgment after a trustee's sale [VERIFY: Cal. Code Civ. Proc. 726(a), 580d, Civ. Code 2856, via codes.findlaw.com; Black Sky Capital v. Cobb (Cal. 2019), courts.ca.gov opinion S243294; checked 22 Nov 2026]. A guaranty on California collateral carries the Civ. Code 2856 waivers (CORE-DOC-05). Local counsel confirms every state point on each live deal.

**Worked example 1: Birchwood recourse (RD-COM-01)**

1. **Rule.** COM-BR-07: non-recourse only at 60% LTV or below. LTV value is the lower of price and appraisal (F-CORE-14).
2. **Inputs.** Day-one advance $2,860,000; price $4,400,000; as-is appraisal $4,500,000.
3. **Apply.** $2,860,000 ÷ min($4,400,000, $4,500,000) = $2,860,000 ÷ $4,400,000 = 65.0%. That is above 60%.
4. **Result.** Full guarantee from Dana Whitlow and Leo Marsh that burns off at stabilization (COM-BR-07; CORE-BOR-03). The $660,000 of future funding adds a completion guaranty, and commercial adds an environmental indemnity (CORE-DOC-03). What-if: a $2,640,000 advance gives exactly 60.0%, so non-recourse with carve-outs.

**Worked example 2: Maple Run recourse (RD-RES-01)**

1. **Rule.** CORE-DOC-01 and RES-GEN-07: full recourse on every residential loan.
2. **Inputs.** $340,000 fix-and-flip commitment; borrower an LLC; two guarantors, Dana Reyes (60%) and Sam Okafor (40%).
3. **Apply.** Residential, so size and LTV do not matter. The $100,000 rehab holdback is future funding, so CORE-DOC-03 adds a completion guaranty. No environmental indemnity is required for residential.
4. **Result.** Both guarantors sign full-recourse guaranties and a completion guaranty at closing, with the business-purpose certifications.

### T2. Title (Objective 2, 15 minutes)

CORE-CLS-01 requires a title commitment and a lender's policy. The commitment is a promise to insure once listed items are met. It has three parts:

- **Schedule A:** proposed insured, policy amount, who holds title, and the legal description.
- **Schedule B-I (requirements):** what must happen before the policy issues. Examples: pay off the seller's loan, record our mortgage, release a lien.
- **Schedule B-II (exceptions):** what the policy will not cover. Read each one and decide: accept, remove, or insure over.

**Policy amount.** CORE-CLS-06 sets the lender's policy amount at the full commitment, including rehab, capex and TI holdbacks. It is never just the day-one advance. Sizing to the commitment avoids an amount increase later.

**Draw loans.** Each draw is insured as it funds, under a pending disbursement clause and a title date-down (CORE-CLS-06; CORE-SVC-05). The date-down catches new liens before funds go out. Rehab and construction loans add an ALTA 32-series endorsement, with an ALTA 33 at each draw. Other future advances use ALTA 14. ALTA 33 moves the coverage date forward without changing the policy date [VERIFY: ALTA 33-06 guideline, Stewart Title; checked 20 Nov 2026].

**Worked example 3: Maple Run title review (RD-RES-01; practice data)**

The Schedule B items below are practice data, not part of RD-RES-01.

1. **Rule.** CORE-CLS-01: lender's policy; clear every item that could prime our lien. CORE-CLS-06: insure the full commitment.
2. **Inputs.** (a) 2026 second-half taxes, not yet due. (b) Rear-lot 10-foot utility easement. (c) Mechanic's lien by the prior owner's roofer, $6,200. (d) Seller's deed of trust, $180,000.
3. **Apply.** Decide each item, as shown in the table below.
4. **Result.** Two items block closing: the roofer's lien and the seller's loan. Policy amount: the $340,000 commitment, with a date-down at each rehab draw (CORE-CLS-06).

| Item | Decision | Why |
| --- | --- | --- |
| (a) 2026 second-half taxes, not yet due | Accept | A standard exception; the borrower pays them when due |
| (b) Rear-lot 10-foot utility easement | Accept if the survey shows no building on it | The survey confirms the easement is clear |
| (c) Roofer's mechanic's lien, $6,200 | Not acceptable: release or bond before closing | It could prime our lien (CORE-CLS-01) |
| (d) Seller's deed of trust, $180,000 | Move to B-I: pay off from sale proceeds and record a release | It stays ahead of our mortgage until released |

### T3. Insurance (Objective 3, 20 minutes)

CORE-INS-01 sets the base for all families. Property cover is special-form, at replacement cost, for at least 100% of insurable value. Insurable value is the cost to replace the improvements, excluding land. The loan amount or commitment never sets the limit. The policy has no coinsurance clause, or an agreed-amount provision of at least 100%. A margin clause does not count. Add general liability and a flood determination. Our lender is named as mortgagee and loss payee. Builder's risk follows CORE-INS-04. During rehab or construction it covers the work from start to completion, with no gap. It is written at 100% of completed value: all contracts, materials and soft costs. ARV is not completed value.

| Family | Extra cover | Rule |
| --- | --- | --- |
| Residential rehab | Vacant-property or builder's-risk cover during the work | RES-GEN-08; CORE-INS-04 |
| Residential rental | Landlord policy with 6 months' rent loss | RES-GEN-08 |
| Multifamily | 12 months' loss of rents; flood where required | MF-GEN-10 |
| Commercial | 12 months' loss of rents; flood where required | COM-GEN-16 |

**Insurance-to-value** (F-CORE-34) = coverage ÷ replacement cost. Below 100% fails CORE-INS-01. Test against replacement cost, never market value or the loan amount.

**Coinsurance** (F-CORE-37) measures what a coinsurance clause costs the owner when cover falls short. Payment = (carried ÷ required) × loss − deductible, where required = coinsurance % × replacement cost. Apply the ratio first, then the deductible. CORE-INS-01 does not accept a coinsurance clause unless an agreed-amount provision of at least 100% applies. F-CORE-37 shows what a clause costs, so you can explain the condition to the borrower.

**Flood.** Every loan gets a flood determination (CORE-INS-01). Federal law makes regulated lenders require flood cover on buildings in special flood hazard areas (42 USC 4012a) [VERIFY: 42 USC 4012a(b), law.cornell.edu; checked 22 Nov 2026]. That law does not bind us directly, so our policy sets its own rule. Any building in Zone A or V needs flood cover of at least the lesser of the loan and its replacement cost (CORE-INS-03). The NFIP caps building cover at $250,000 for one-to-four-family homes. Other residential and non-residential buildings are capped at $500,000 [VERIFY: 44 CFR 61.6, ecfr.gov; checked 22 Nov 2026]. Larger buildings need excess or private flood cover.

**NFIP lapse risk.** The NFIP is authorized only to 11 December 2026. It lapsed from 1 October to 12 November 2025, and again on 1-3 February 2026. During a lapse no new NFIP policies are sold or renewed [VERIFY: CRS Insight IN10835, updated 11 Sep 2026, via everycrsreport.com; checked 22 Nov 2026]. A loan that needs NFIP cover cannot close then. Plan private flood cover or move the closing date.

**Worked example 4: Birchwood cover test (RD-COM-01; what-if values)**

Replacement cost, limit, clause and loss are what-if figures, not deal facts.

1. **Formula.** F-CORE-34: coverage ÷ RC. F-CORE-37: min(1, did ÷ (c × RC)) × loss − deductible.
2. **Inputs.** RC $5,200,000; limit $4,400,000; 90% clause; loss $500,000; deductible $25,000.
3. **Substitution.** ITV = $4,400,000 ÷ $5,200,000 = 84.6%. Required = 90% × $5,200,000 = $4,680,000. Ratio = 0.940171. Payment = 0.940171 × $500,000 − $25,000 = $445,085.47.
4. **Result.** Fails CORE-INS-01 twice: ITV is under 100%, and the policy has a 90% coinsurance clause. The owner bears $54,914.53 of the loss. That is the $25,000 deductible plus a $29,914.53 coinsurance penalty ($475,000.00 − $445,085.47). Condition before closing: raise the limit to $5,200,000, and remove the clause or add an agreed-amount endorsement.

**Worked example 5: loss-of-rents limits (RD-COM-01, RD-RES-01)**

1. **Rule.** COM-GEN-16: 12 months' loss of rents. RES-GEN-08: 6 months' rent loss on rentals.
2. **Inputs.** Birchwood in-place base rent $420,000 plus recoveries $84,000. Maple Run lease $3,200 a month, signed in month 11 with an unrelated tenant.
3. **Apply.** Birchwood: $420,000 + $84,000 = $504,000 for 12 months. Maple Run: 6 × $3,200 = $19,200.
4. **Result.** Birchwood needs at least $504,000 of rent-loss cover, rising as leases sign. Maple Run's landlord policy needs at least $19,200 after the refinance. The lease itself must meet RES-GEN-11: a 12-36 month initial term, no purchase option, and a copy to us within 10 business days of signing.

### T4. Escrows and reserves (Objective 4, 15 minutes)

**Tax and insurance escrow** (F-CORE-35): monthly deposit = (annual taxes + annual insurance) ÷ 12. MF bridges require it (MF-BR-13). Where any loan escrows, CORE-INS-02 adds a closing cushion of 2 months' deposits.

**Why 2 months?** It mirrors the consumer cap in Regulation X, 12 CFR 1024.17(c)(1) and (c)(5): a cushion of no more than one-sixth of the estimated annual escrow payments or disbursements. RESPA does not apply to business-purpose loans (1024.5(b)(2)), so this is our choice, not a legal duty [VERIFY: 12 CFR 1024.17(c)(1), (c)(5), 1024.5(b)(2), ecfr.gov; checked 22 Nov 2026].

**Other MF bridge reserves** (MF-BR-13): replacement reserves of $300 per unit per year. A repair escrow of 125% of immediate repairs, funded at closing.

**Edge case.** If a premium or tax bill falls due before deposits build up, fund that shortfall at closing too (F-CORE-35 edge cases).

**Worked example 6: Maple Run refinance escrow (RD-RES-01)**

1. **Formula.** F-CORE-35: (Tax + Ins) ÷ 12; cushion = 2 × deposit (CORE-INS-02).
2. **Inputs.** Taxes $520 a month ($6,240 a year); landlord insurance $160 a month ($1,920 a year).
3. **Substitution.** ($6,240 + $1,920) ÷ 12 = $680.00. Cushion = 2 × $680.00 = $1,360.00. Check: $8,160 ÷ 6 = $1,360.00.
4. **Result.** If the refinance escrows, Dana Reyes deposits $680.00 a month and $1,360.00 at closing. The $680 is the "TIA" inside PITIA (F-RES-08).

### T5. Collateral reports and tenant documents (Objective 5, 15 minutes)

**Phase I.** COM-GEN-14 requires one on every commercial loan; MF-GEN-08 lists it for multifamily. The standard is ASTM E1527-21. A recognized environmental condition (REC) triggers a Phase II (COM-GEN-14). EPA's rule sets the age limits. The whole inquiry must be within one year before acquisition. Interviews, lien and records searches, the site visit and the EP's declaration must be within 180 days [VERIFY: 40 CFR 312.20(a)-(b), ecfr.gov; checked 22 Nov 2026]. An older report needs an update.

**Estoppels and SNDAs** (COM-GEN-09). An estoppel is the tenant's signed certificate of its lease terms and of any defaults. An SNDA subordinates the lease to our mortgage. It also keeps the lease in place if we foreclose, and binds the tenant to us. Collect estoppels from tenants paying 20% or more of rent and from the top five. Collect SNDAs from tenants paying 10% or more.

**Lockbox** (COM-GEN-12). Springing on most loans; hard lockbox for office bridges and Tier 2 NNN. Cash sweeps start when DSCR falls below 1.10x or a 20%+ tenant gives notice. The sweep DSCR uses trailing 3 months' NCF, annualized, over debt service actually due: note-rate interest net of any cap payment.

**Worked example 7: Birchwood estoppels and SNDAs (RD-COM-01; practice rent roll)**

The suite-by-suite rents are practice data. They add up to the deal's $420,000 base rent.

1. **Rule.** COM-GEN-09: estoppel if share ≥ 20% or top five; SNDA if share ≥ 10%.
2. **Inputs.** Nine suites, A to I. Their rents are in the table below.
3. **Apply.** Share = suite rent ÷ $420,000, ranked in the table below.
4. **Result.** Estoppels: A to E (A is over 20%; all five are the top five). SNDAs: A to D only. E at 9.52% needs an estoppel but no SNDA.

| Suite | Base rent | Share of $420,000 | Rank | Estoppel | SNDA |
| --- | --- | --- | --- | --- | --- |
| A | $90,000 | 21.43% | 1 | Yes | Yes |
| B | $66,000 | 15.71% | 2 | Yes | Yes |
| C | $52,000 | 12.38% | 3 | Yes | Yes |
| D | $46,000 | 10.95% | 4 | Yes | Yes |
| E | $40,000 | 9.52% | 5 | Yes | No |
| F | $36,000 | 8.57% | 6 | No | No |
| G | $34,000 | 8.10% | 7 | No | No |
| H | $30,000 | 7.14% | 8 | No | No |
| I | $26,000 | 6.19% | 9 | No | No |
| Total | $420,000 | 100.00% |  |  |  |

**Worked example 8: Phase I age and a sweep test (RD-COM-01; what-ifs)**

1. **Rule.** 40 CFR 312.20(b) 180-day components; COM-GEN-12 sweep below 1.10x.
2. **Inputs.** What-if Phase I site visit 15 Mar 2026; closing 20 Nov 2026. What-if trailing NCF $230,000; interest actually due at the 7.65% note rate, $2,860,000 × 7.65% = $218,790 (COM-GEN-12).
3. **Apply.** 15 Mar to 20 Nov 2026 = 250 days, over 180. DSCR = $230,000 ÷ $218,790 = 1.05x, under 1.10x.
4. **Result.** Order a Phase I update before closing. After closing, the lockbox springs and excess cash is swept until DSCR recovers.

## 5. Practice (45 minutes)

Work alone, then check the model answer. The case is RD-MF-01 Cedar Court, a $5,140,000 multifamily bridge (LD-05). Taxes and insurance come from RD-MF-01. Replacement cost and flood facts are practice data.

1. Which recourse structure and guaranties apply (MF-BR-12; CORE-DOC-02, -03)?
2. What policy amount should title insure, and what happens at each capex draw?
3. Cover check: RC $6,500,000; limit $6,000,000; 90% clause; $400,000 loss; $25,000 deductible. Find ITV and the claim payment. What loss-of-rents limit is needed on EGI of $720,000?
4. Escrows: taxes $74,000 and insurance $38,000 a year; 50 units; immediate repairs $40,000. Find the monthly deposits and the cash escrowed at closing.
5. Flood: one building is in Zone AE and needs $1,300,000 of cover. What can the NFIP provide, and what else is needed?

**Model answer**

1. $5,140,000 is $2,000,000 or more: non-recourse with carve-outs, plus a completion guaranty for the $800,000 capex. Environmental indemnity too.
2. Insure $5,140,000, the full commitment (CORE-CLS-06). Each capex draw is insured as it funds (CORE-CLS-06; CORE-SVC-05). Date down title at each capex draw before funding (ALTA 33 where the policy carries ALTA 32).
3. ITV = $6,000,000 ÷ $6,500,000 = 92.3%: fails CORE-INS-01, and so does the 90% clause. Required = $5,850,000, so no coinsurance penalty: pays $400,000 − $25,000 = $375,000.00. Loss of rents: $720,000.
4. Escrow ($74,000 + $38,000) ÷ 12 = $9,333.33; replacement reserve 50 × $300 ÷ 12 = $1,250.00; total $10,583.33 a month. At closing: cushion $18,666.67 + repair escrow $50,000 = $68,666.67.
5. NFIP caps other residential buildings at $500,000. CORE-INS-03 needs the full $1,300,000, so add $800,000 of excess or private flood cover. If the NFIP lapses after 11 Dec 2026, the NFIP part cannot be bought then.

**Self-score.** One point each (10): recourse; completion guaranty; policy amount; draw cover; ITV result; claim payment; loss-of-rents limit; monthly deposits; cash at closing; the NFIP and excess split. Score each against the model answer. Eight or more: move on. Fewer: redo the matching worked example.

> **Lesson from item 3.** Our 100% test is stricter than the insurer's 90% clause. A policy can pay a claim in full and still fail CORE-INS-01.

## 6. Quiz: C9-quiz-v0

Pass mark: 80% (10 of 12) and every item marked **critical** correct. Each retake uses the other form.

### Set A

1. (O1) A $420,000 fix-and-flip loan needs what recourse? A) Non-recourse B) Carve-outs only C) Full recourse D) Burn-off guarantee
2. (O1) A multifamily bridge commitment is $1,800,000. Recourse? A) Full recourse B) Non-recourse with carve-outs C) None D) Completion guaranty only
3. **(Critical, O1)** Commercial bridge: day-one $3,000,000; price $5,200,000; appraisal $5,000,000. Recourse? A) Full guarantee: 57.7% B) Non-recourse with carve-outs: 60.0% C) Full guarantee: 60.0% D) Non-recourse: 57.7%
4. (O2) Schedule B-II shows a recorded $12,400 mechanic's lien. What do you do? A) Accept it B) Require release or bond before closing C) Raise the rate D) Note it after closing
5. (O2) Day-one $2,000,000 plus $500,000 future funding. Lender's policy amount? A) $2,000,000 B) $500,000 C) $2,500,000 D) The appraised value
6. (O3) Coverage $2,100,000; replacement cost $2,400,000. ITV and result? A) 87.5%, passes B) 87.5%, fails C) 114.3%, passes D) 112.5%, fails
7. **(Critical, O3)** RC $2,400,000; 90% clause; carried $1,800,000; loss $300,000; deductible $10,000. Payment? A) $290,000.00 B) $241,666.67 C) $240,000.00 D) $215,000.00
8. (O3) Multifamily EGI is $960,000. Minimum loss-of-rents cover? A) $480,000 B) $960,000 C) $80,000 D) $1,920,000
9. (O4) Taxes $18,000 and insurance $6,000 a year. Monthly escrow? A) $1,500.00 B) $2,000.00 C) $500.00 D) $24,000.00
10. **(Critical, O4)** Same loan. Cushion at closing (CORE-INS-02)? A) $2,000.00 B) $6,000.00 C) $4,000.00 D) $0
11. (O5) A tenant pays 9.8% of rent and ranks fourth. What does it sign? A) Estoppel and SNDA B) Estoppel only C) SNDA only D) Neither
12. (O5) A Phase I site visit was 200 days before closing. What follows? A) Nothing B) Update the 180-day components C) A Phase II D) A new appraisal

**Answer key, Set A**

1. C. CORE-DOC-01.
2. A. Under $2,000,000 (MF-BR-12).
3. B. Use the lower of price and appraisal: $3,000,000 ÷ $5,000,000 = 60.0%, which is "at or below" 60% (COM-BR-07; F-CORE-14).
4. B. A lien that could prime ours must go (CORE-CLS-01).
5. C. The policy covers the full commitment (CORE-CLS-06).
6. B. $2,100,000 ÷ $2,400,000 = 87.5%, below 100% (F-CORE-34).
7. C. Required $2,160,000; ratio 0.833333; 0.833333 × $300,000 − $10,000 (F-CORE-37).
8. B. 12 months (MF-GEN-10).
9. B. $24,000 ÷ 12 (F-CORE-35).
10. C. 2 × $2,000.00.
11. B. Top five, but under 10% (COM-GEN-09).
12. B. 40 CFR 312.20(b).

### Set B

1. (O1) A multifamily bridge commitment is exactly $2,000,000. Recourse? A) Full recourse B) Non-recourse with carve-outs plus completion guaranty C) None D) Burn-off guarantee
2. (O1) Which document is required on every MF and COM loan? A) Completion guaranty B) Environmental indemnity C) Full-recourse guaranty D) Hard lockbox
3. **(Critical, O1)** Commercial bridge: day-one $3,120,000; price $5,000,000; appraisal $5,400,000. Recourse? A) Non-recourse: 57.8% B) Full guarantee that burns off: 62.4% C) Non-recourse: 62.4% D) Full guarantee: 57.8%
4. (O2) The seller's deed of trust appears on the commitment. Best handling? A) Accept it B) Pay it off from proceeds and record a release (B-I) C) Subordinate our loan D) Ignore it
5. (O2) What protects the lender at each construction draw? A) An estoppel B) A title date-down (ALTA 33 with ALTA 32) C) An SNDA D) A new appraisal
6. (O3) Coverage $3,300,000; replacement cost $3,000,000. ITV and result? A) 110.0%, passes B) 90.9%, fails C) 110.0%, fails D) 100.0%, passes
7. **(Critical, O3)** RC $4,000,000; 80% clause; carried $2,800,000; loss $500,000; deductible $25,000. Payment? A) $475,000.00 B) $415,625.00 C) $350,000.00 D) $412,500.00
8. (O3) A residential rental leases at $2,400 a month. Minimum rent-loss cover? A) $28,800 B) $14,400 C) $7,200 D) $2,400
9. (O4) Taxes $54,000 and insurance $21,000 a year. Monthly escrow? A) $6,250.00 B) $4,500.00 C) $1,750.00 D) $75,000.00
10. **(Critical, O4)** Same loan. Cushion at closing? A) $6,250.00 B) $18,750.00 C) $0 D) $12,500.00
11. (O5) A tenant pays exactly 10.0% of rent and ranks sixth. What does it sign? A) Estoppel and SNDA B) Estoppel only C) SNDA only D) Neither
12. (O3) Maximum NFIP building cover on a 40-unit apartment building? A) $250,000 B) $500,000 C) $1,000,000 D) No limit

**Answer key, Set B**

1. B. $2,000,000 and up (MF-BR-12).
2. B. CORE-DOC-03.
3. B. $3,120,000 ÷ $5,000,000 = 62.4%, above 60% (COM-BR-07).
4. B. CORE-CLS-01.
5. B. Each draw is insured after a date-down (CORE-CLS-06; CORE-SVC-05).
6. A. $3,300,000 ÷ $3,000,000 (F-CORE-34).
7. D. Required $3,200,000; ratio 0.875; 0.875 × $500,000 − $25,000 (F-CORE-37).
8. B. 6 × $2,400 (RES-GEN-08).
9. A. $75,000 ÷ 12.
10. D. 2 × $6,250.00 (CORE-INS-02).
11. C. 10% or more needs an SNDA; not 20%+ or top five, so no estoppel.
12. B. Other residential building cap (44 CFR 61.6).

## 7. OJT task: C9-ojt-v0 (solo mode)

| Item | Detail |
| --- | --- |
| Role | Closer |
| Output | A closing-conditions sign-off for the Birchwood bridge: each condition, its rule, status (met or open) and the fix |
| Source | RD-COM-01 closing conditions; worked examples 1, 4, 5, 7 and 8 |
| Time allowed | 45 minutes |
| Sign-off | Self-review against the rubric and model answer (solo mode). Record your score and gaps with the date |
| Data | All fictional; what-if and practice items are labelled |

**Rubric (meets standard = all four)**

1. Covers recourse, title, insurance, escrows and tenant documents, each with its rule.
2. Uses the lower of price and appraisal for the recourse LTV.
3. Shows the ITV and coinsurance numbers, not just "insurance received".
4. Marks every open item with a specific fix and says funding waits for it.

**Model answer**

| Condition | Rule | Status | Fix |
| --- | --- | --- | --- |
| Full guarantee that burns off (LTV 65.0% > 60%) | COM-BR-07 | Met when signed | None |
| Environmental indemnity | CORE-DOC-03 | Met when signed | None |
| Completion guaranty for the $660,000 future funding | CORE-DOC-03 | Met when signed | None |
| Lender's policy for $3,520,000; date-down at each TI/LC draw | CORE-CLS-01, -06 | Open until B-I items clear | Title officer confirms |
| Hazard ITV 84.6% (what-if) | CORE-INS-01; F-CORE-34 | Open | Raise limit to $5,200,000; no coinsurance clause |
| Loss of rents at least $504,000 | COM-GEN-16 | Check certificate | Endorse if short |
| Flood determination | CORE-INS-01 | Check | If in Zone A or V, cover to CORE-INS-03: NFIP $500,000 plus excess; watch the 11 Dec 2026 expiry |
| Estoppels A-E; SNDAs A-D | COM-GEN-09 | Open until received | Chase tenants |
| Phase I updated (250 days old, what-if) | COM-GEN-14; 40 CFR 312.20 | Open | Order update |
| Springing lockbox documents | COM-GEN-12 | Met when signed | None |

Funding waits until every open line is met.

## 8. Job aid: C9-jobaid-v0 (one page)

**Recourse:** residential full (CORE-DOC-01). MF bridge under $2,000,000 full; $2,000,000 and up non-recourse plus carve-outs plus completion guaranty (MF-BR-12). COM bridge non-recourse at LTV ≤ 60%, else burn-off guarantee (COM-BR-07). Environmental indemnity on all MF and COM (CORE-DOC-03). State one-action and anti-deficiency check (CORE-DOC-04).

**Title:** read A, B-I and B-II. Clear liens that could prime ours. Insure the full commitment (CORE-CLS-06). Date down at every draw (CORE-SVC-05).

**Insurance:** ITV = cover ÷ replacement cost, at least 100% (F-CORE-34). Coinsurance pay = min(1, did ÷ (c × RC)) × loss − deductible (F-CORE-37). Rent loss: 12 months MF and COM; 6 months residential rentals. No coinsurance clause unless agreed amount is at least 100% (CORE-INS-01). Builder's risk at 100% of completed value (CORE-INS-04). Lender named as mortgagee and loss payee.

**Flood:** determination on every loan. Zone A or V: cover at least the lesser of loan and replacement cost (CORE-INS-03). NFIP caps: $250,000 one-to-four family; $500,000 other buildings. NFIP authorized to 11 Dec 2026.

**Escrow:** (tax + insurance) ÷ 12; cushion 2 months (F-CORE-35; CORE-INS-02). MF: reserves $300 per unit per year; repair escrow 125% of immediate repairs (MF-BR-13).

**Reports:** Phase I to E1527-21; key parts within 180 days, all within 1 year. Estoppels ≥ 20% or top five; SNDAs ≥ 10%. Sweep below 1.10x DSCR or on a 20%+ tenant's notice.

**Mini-example:** taxes $12,000 and insurance $3,600 → $1,300.00 a month; cushion $2,600.00.

## Alignment matrix (LD-07)

| Objective | Teach | Worked example | Practice | Quiz A / B | OJT rubric |
| --- | --- | --- | --- | --- | --- |
| O1 Recourse and documents | T1 | 1, 2 | 1 | 1-3 / 1-3 | 1, 2 |
| O2 Title | T2 | 3 | 2 | 4, 5 / 4, 5 | 1, 4 |
| O3 Insurance | T3 | 4, 5 | 3, 5 | 6-8 / 6-8, 12 | 3 |
| O4 Escrows | T4 | 6 | 4 | 9, 10 / 9, 10 | 1 |
| O5 Reports and tenant documents | T5 | 7, 8 | 5 | 11, 12 / 11 | 1, 4 |

## Self-review against Bible Section 7 (20 Nov 2026)

| Check | Result |
| --- | --- |
| Named code-asset-vN with change log | Met (v0) |
| No open [POLICY], [CONFIRM] or [DATA] tags | Met. Legal points carry [VERIFY] tags |
| Every calculation cites a formula ID; thresholds cite rules | Met |
| Four-line worked formulas; re-checked by a second person | Four lines met; second-person check pending (solo: re-run in a spreadsheet) |
| Deal numbers match the running deals | Met: RD-RES-01, RD-MF-01, RD-COM-01. What-if and practice data are labelled |
| Lesson follows LD-04 order; alignment matrix; fits 3 hours | Met (180 minutes) |
| Quiz: 10-20 items, one per objective, critical flagged, two sets, pass mark | Met (12 items, 3 critical, sets A and B) |
| OJT: output, source, time, rubric, sign-off, data note | Met |
| Job aid fits one page | Met on screen; confirm when printed |
| Accessibility (LD-09) | Tables have headers; no colour-only meaning |

**Real-world check (researched 20 Nov 2026).**

- **NFIP deadline.** CRS reports the NFIP is authorized until 11 December 2026. Without reauthorization, its authority to issue new policies expires then ([CRS R44593, 5 Oct 2026](https://www.everycrsreport.com/files/2026-10-05_R44593_8e270232253192a97e17d2fbbae260754117a3b3.html)). It lapsed twice in the past 14 months ([CRS IN10835](https://www.everycrsreport.com/files/2026-09-11_IN10835_1177d2de1e2916fd50e80100ff618a10dbb6bb04.html)).
- **NFIP limits.** FEMA lists $250,000 for residential buildings and $500,000 for non-residential buildings ([FloodSmart](https://agents.floodsmart.gov/topics/selling-flood-insurance/coverage); [44 CFR 61.6](https://www.law.cornell.edu/cfr/text/44/61.6)). Five-plus family buildings also reach $500,000 ([FEMA](https://fema.gov/print/pdf/node/346358)).
- **Phase I age.** All appropriate inquiries must be within one year before acquisition, and key parts within 180 days ([eCFR 40 CFR 312.20](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-J/part-312/subpart-C/section-312.20)).
- **Coinsurance.** Industry training uses "did ÷ should × loss − deductible," with the deductible taken last ([Insurance Journal](https://www.insurancejournal.com/blogs/academy-journal/2015/08/11/378044.htm)).
- **Draw date-downs.** ALTA 33 extends the date of coverage under ALTA 32 at each construction draw ([Stewart Title guideline](https://assets.stewart.com/en/guidelines/2012-9/GL134869089900000008.html)).
- **One-action rule.** California requires foreclosure before other remedies on a secured debt ([Morgan Lewis](https://www.morganlewis.com/pubs/proceed-with-caution-californias-one-action-rule)). Section 580d bars deficiencies after a trustee's sale ([Black Sky Capital v. Cobb](https://scocal.stanford.edu/?p=34620)).

**Self-check.**

1. A commercial bridge has a $3,300,000 day-one advance, a $5,000,000 price and a $5,500,000 appraisal. What recourse applies? **Answer:** $3,300,000 ÷ min($5,000,000, $5,500,000) = 66.0%, above 60%. A full guarantee that burns off at stabilization (COM-BR-07; F-CORE-14).
2. A rehab loan has a $250,000 initial advance and a $90,000 holdback. What amount does the lender's title policy insure? **Answer:** $340,000, the full commitment, with each draw insured as it funds (CORE-CLS-06).
3. Property cover is $3,000,000 against a $3,200,000 replacement cost, with no coinsurance clause. Does it pass? **Answer:** ITV = $3,000,000 ÷ $3,200,000 = 93.75%, under 100%, so it fails (CORE-INS-01; F-CORE-34).
4. Taxes of $30,000 and insurance of $9,000 a year are escrowed. Find the monthly deposit and the closing cushion. **Answer:** ($30,000 + $9,000) ÷ 12 = $3,250.00; cushion 2 × $3,250.00 = $6,500.00 (F-CORE-35; CORE-INS-02).
5. A retail tenant pays 12% of base rent and ranks sixth. What does it sign? **Answer:** An SNDA only. It is at 10% or more, but under 20% and outside the top five (COM-GEN-09).

**What to look up yourself.** Whether Congress extends the NFIP before 11 December 2026. CRS reports that, without action, authority to issue new policies ends that day (CRS R44593, 5 Oct 2026). After that date, check congress.gov or FEMA's NFIP page, then update T3 and the job aid.

**How to check it:** in a spreadsheet, `=MIN(1,4400000/(0.9*5200000))*500000-25000` should give 445,085.47. `=(6240+1920)/12` should give 680, and `=2*680` should give 1,360. `=2860000/MIN(4400000,4500000)` should give 0.65.
