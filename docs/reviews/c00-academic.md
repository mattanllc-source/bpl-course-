# C0 academic review: Program orientation and the BPL market

Model policy for training - not for live lending decisions.

| Item | Detail |
| --- | --- |
| Module | C0, `modules/core/c00/lesson.md` (v1.0-draft header, rewritten to blueprint 22 Nov 2026; `docs/SNAPSHOT.md`: current) |
| Plan read | `docs/curriculum/c00-blueprint.md` v0; `docs/accreditation/qas-spec.md` |
| Also read | Model Credit Policy (CORE-BOR-01, CORE-SVC-07, MF-MEZ-01 to -03, COM-BR-02, -07, -09, MF-BR-08, -11); Formula Library (F-CORE-04, -13, -14, F-MF-12, -14, -16, -20, -27); `data/running-deals/running-deals.md` |
| Reviewer stance | Independent academic reviewer (graduate CRE finance; curriculum committee). Not the author |
| Date | 22 Nov 2026 |
| Method | Every number in T1-T6 and Practice was recomputed in Python (float, half-up display). Legal citations were checked for internal consistency, not re-opened online. Where I cite literature, I give full references; confirm bibliographic details before quoting (see the last section) |

## Overall grade: C+ (Teach section alone: B−)

**Justification.** The Teach section is a credible upper-undergraduate orientation. It cites primary law with dates, keeps every number tied to the running deals, and names the two canonical cycle models. Almost all of its arithmetic is correct to the cent.

Three things hold the grade down.

1. **The back half of the tab is still v0.** The quiz, alignment matrix, job aid and self-review use the old O1-O4 objectives. The quiz has yes/no, open-answer items that QAS Std 6.01.2 bars. As shipped, the module cannot be accredited or assessed against its own objectives.
2. **Several framing claims would not survive a graduate seminar.** Examples: banks do not do transitional lending; non-banks are reached by no regulator but their funders; the S&L crisis was about weak appraisals; vacancy is the first warning of a down-cycle. Each is a common simplification, and each plants a misconception that later modules must undo.
3. **The academic scaffolding is thin.** There is no textbook anchor and no securitization or credit-rationing literature. The core mechanism behind bank versus non-bank behavior (risk-based capital and HVCRE) is missing.

## Strengths

1. **Primary-source discipline.** Statutes and regulations are quoted, not paraphrased, with section-level pinpoints and check dates (T1 Reg Z and SAFE Act; T2 12 U.S.C. 1828(o), 12 CFR 34.62, Appendix A definitions; T3 17 CFR 246.4 and 246.7). This exceeds most undergraduate texts.
2. **Running-deal continuity.** Every worked example reconciles to `running-deals.md`. Cedar Court's sources and uses ties to $7,380,066.67 on both sides. The F-MF-16 mezzanine test case (combined LTC 82.5%, LTV 69.1%, combined DSCR 1.02x) recomputes exactly.
3. **Supervisory limit versus house limit (T2, WE3).** Showing that COM-BR-09's 65% as-is cap binds before the 85% improved-property guideline is a good, transferable insight. The appendix definitions of "extension of credit", LTV timing and "value" are well chosen.
4. **Percent versus percentage point (T4).** Clear, correctly worked, and reinforced with basis points and the SOFR conversion. The habit "record the vintage" is exactly right.
5. **Cycle models are named and quoted.** DiPasquale-Wheaton (1992) is cited correctly (*JAREUEA* 20(2), 181-198). Mueller's hypersupply warning, "participants do not recognize this peak turning point since occupancy rates are high," is the right quote for a lender.
6. **Exit framing.** "What is the exit, and how sure is it?" (T1) is a sound organizing question for a bridge-lending course.

## Findings

Ranked within each tier by impact on learning and accreditation.

### Critical

**C-1. The assessment, alignment matrix, job aid and self-review are v0 and contradict the new objectives.**

- *Location.* Section 6 (Quiz), Alignment matrix, Section 8 (Job aid), Self-review and Self-check (lines 932-1024).
- *Quote.* Quiz Set A item 1: "Can an individual borrow under our program? **Answer:** no". Alignment matrix: "O4 Course structure | T4 | — | 5 | 7-8". Job aid item 6: "A [VERIFY] tag marks a legal point that compliance has not yet confirmed." Self-review: "LD-04 order; fits 1 hour | Not met".
- *Why it matters.* (a) Std 6.01.2 bars yes/no exam items; items 1, 6 and 7 in Set A and 1 in Set B are yes/no, and all are open-response. (b) The matrix maps to O1-O4 with old labels, so LD-07 alignment is unverifiable for O1-O6. (c) The job aid and Quiz B item 7 define [VERIFY] as "awaiting compliance confirmation". T6 defines it as "authority, source, date checked". A learner meets two definitions of a core convention. (d) Self-check item 4 still asks for a CORE-SVC-07 rating, which blueprint 4.3.4 said to recast as a lookup drill. Self-check item 3 builds on a secondary-source forecast (HousingWire), against blueprint 4.3.2.
- *Fix.* Before any release: (1) delete Sections 6 and 8 and the v0 matrix and self-review, or move them to an author archive; (2) build the 8 review questions and two 12-item forms in blueprint section 6 to the item specification in "Assessment readiness" below; (3) replace job aid item 6 with: "A [VERIFY] tag names the legal authority, where it was read and the date checked. Re-check any tag older than six months (Course Bible 5.6)." (4) Replace self-check item 4 with: "Maple Run is 60 days from maturity with no confirmed exit. Which rule ID sets its minimum risk rating, and in which tab is it? **Answer:** CORE-SVC-07, Model Credit Policy. C2 teaches you to apply it." (5) Replace self-check item 3 with the primary KBRA rated-share calculation ($3.5 billion ÷ $4.8 billion = 72.9%).

**C-2. The 2.0-credit claim is not supported by the module's own word count.**

- *Location.* Facts table ("2.0 CPE credits projected") and Timing plan ("10,248 counted words ÷ 180").
- *Quote.* Blueprint section 7: "Do not let the final text fall below 10,341 words with this question count."
- *Why it matters.* With 23 scored items: (10,248 ÷ 180 + 23 × 1.85) ÷ 50 = (56.933 + 42.550) ÷ 50 = 1.990. Rounded down to fifths, that is **1.8 credits**, not 2.0. Overstating CPE credit is a QAS compliance failure (Std 7.02).
- *Fix.* Recount every countable word (Teach plus Practice plus job aid, excluding the facts table, instructions, sources list and glossary). If the total is under 10,341, either add at least 93 counted words of substantive teaching (C-tier additions below supply far more) or restate the projection as 1.8 credits. Record the count and date in the facts table.

### Major

**M-1. "Business-purpose" (a legal category) is conflated with "transitional" (a credit product), and banks are miscast.**

- *Location.* Hook; T1 "Four kinds of real estate loan" table and the sentence after it.
- *Quote.* "None of these properties earns what it could yet, so none fits a bank's standard loan." "A bank or agency lender wants a property that already works. A BPL lender lends because the property does not work yet."
- *Why it matters.* Banks are the largest US construction and land lenders, and many make bridge and value-add loans. The course's own DSCR product lends on a stabilized, rented house (RES-DSCR-10), so the claim contradicts T1's own product table. The real distinction has three parts: the legal purpose test (Reg Z), the lender's funding and capital (T2-T3), and product preference. Learners who absorb "banks don't do transition" will misread competition and the 2006 concentration guidance.
- *Fix.* Replace the two sentences with: "Banks also make construction and bridge loans. But capital rules and concentration reviews make that lending costly for them (T2). Specialist lenders focus on short, transitional loans and on rental loans that banks will not standardize. 'Business purpose' is a legal test of the loan's purpose. 'Transitional' describes the property. Most of our loans are both, but the DSCR loan is business-purpose on a stabilized house." In the four-column table, change bank collateral to "Stabilized property; also construction, land and some bridge loans".

**M-2. O2's "which regulator or law reaches each" is taught as "no bank examiner, so only funders".**

- *Location.* T2 "Where each lender sits" table and the three sentences below it.
- *Quote.* "Debt fund ... No bank examiner. Its investors' agreements and its own funders set the limits." "Mortgage REIT ... No bank examiner. Its shareholders, repo lenders and bond investors set the limits."
- *Why it matters.* No bank examiner does not mean no law. A mortgage REIT's asset mix is shaped by the REIT income and asset tests and by the Investment Company Act exemption for entities "primarily engaged in purchasing or otherwise acquiring mortgages and other liens on and interests in real estate". Debt-fund managers are usually SEC-registered investment advisers. Public REITs file with the SEC. Life insurers, a major CRE lender the table omits, face state insurance regulation and NAIC risk-based capital. The objective explicitly asks for "which regulator or law reaches each", so the current content cannot support a correct exam key.
- *Fix.* Add a column "Main law or regulator" and these rows or cells:
  - Mortgage REIT: "REIT tax tests [VERIFY: 26 U.S.C. 856(c); checked: pending]; Investment Company Act exemption for mortgage holders [VERIFY: 15 U.S.C. 80a-3(c)(5)(C); checked: pending]; SEC disclosure if public."
  - Debt fund: "Manager generally registered with the SEC as an investment adviser [VERIFY: 15 U.S.C. 80b-3; checked: pending]; fund documents; lenders' covenants."
  - Life insurance company (new row): "State insurance regulators; NAIC risk-based capital. Long-term, low-leverage senior loans on stabilized property."
  - Add the sentence: "No bank examiner does not mean no rules. Tax, securities and state lending laws reach non-banks. Their funders add contract rules on top."

**M-3. The main reason banks and non-banks write different loans, risk-based capital, is missing.**

- *Location.* T2 "Why banks and non-banks write different loans".
- *Quote.* The section names the 1991 lending-standards statute, the 85% LTV guideline and the 2006 concentration guidance only.
- *Why it matters.* For acquisition, development and construction (ADC) and many transitional loans, the decisive constraint is the capital charge. Since 2015, US banks have assigned a 150% risk weight to "high volatility commercial real estate" (HVCRE) exposures. Congress narrowed the definition in 2018. This is the standard explanation in graduate courses for non-bank growth in transitional lending. It ties directly to C0's own market snapshot (alternative lenders at 38% of CBRE closings).
- *Fix.* Add after the concentration paragraph: "Capital is the third reason. Banks must hold capital against each loan, weighted by risk. Many acquisition, development and construction loans count as high volatility commercial real estate (HVCRE). They carry a 150% risk weight, versus 100% for most other commercial real estate loans [VERIFY: 12 U.S.C. 1831bb (EGRRCPA § 214, 2018); 12 CFR 3.2 and 3.32(j); checked: pending]. More capital per loan means a higher price or less lending. Non-banks face no such rule, so they price these loans differently. C2 and C14 return to it." Keep C0 to this one paragraph, consistent with the blueprint's preview limits.

**M-4. Consumer-law boundary is stated too broadly for business credit.**

- *Location.* T1 table "Governing law" row; "What makes a loan business-purpose".
- *Quote.* "Commercial law; most consumer rules do not apply if the purpose test is met".
- *Why it matters.* "Most" is defensible, but the lesson never names a federal rule that does apply. The Equal Credit Opportunity Act and Regulation B cover business credit, with modified notice rules. BSA/AML and OFAC also apply. A learner taking O1's "governing law" dimension literally will think business-purpose lending is outside fair-lending law. That is a compliance risk the course should prevent in module zero.
- *Fix.* Add after "A loan that falls outside Regulation Z generally does not.": "Some federal rules still apply. The Equal Credit Opportunity Act and Regulation B bar discrimination in business credit too [VERIFY: 15 U.S.C. 1691(a); 12 CFR 1002.9(a)(3); checked: pending]. Anti-money-laundering and sanctions rules also apply. C1 teaches these limits." Add "ECOA/Reg B, BSA/AML" to the BPL column of the governing-law row.

**M-5. The Cedar Court stress misstates when the exit cushion is exhausted.**

- *Location.* T5, Worked example 6, step 3.
- *Quote.* "The $443,273.69 cushion is gone after a drop in NCF of 1 − ($500,000 ÷ $560,000) = 10.7%."
- *Why it matters.* The cushion is gone at a much smaller drop. At the 7.25% constant (0.0818612), break-even NCF is $5,140,000 × 1.25 × 0.0818612 = $525,957.91, a 6.1% drop from $560,000. At the underwritten 7.05% (constant 0.0802397), break-even is $515,539.84, a 7.9% drop. The 10.7% drop overshoots break-even by a wide margin; that is why the shortfall is $253,677.46. The sentence also mixes the 7.05% cushion with the 7.25% stress. For an "Analyze" objective, break-even is the analytically interesting number.
- *Fix.* Replace with: "Result: the take-out falls $253,677.46 short of the payoff. The cushion runs out well before a 10.7% drop. At 7.25%, break-even NCF is $5,140,000 × 1.25 × 0.0818612 = $525,957.91, only 6.1% below plan. C8 owns this break-even." Keep the 10.7% as the size of the what-if, not the break-even.

**M-6. O5's indicator set omits the supply pipeline, and "vacancy warns first" is not right for hypersupply.**

- *Location.* T5 "Four indicators to watch"; "Name the indicator that warns first"; Practice 5 model answer.
- *Quote.* "Vacancy warns first. Rising vacancy in the submarket appears before rents fall and long before values are re-marked."
- *Why it matters.* In both DiPasquale-Wheaton and Mueller, hypersupply is driven by construction started at the peak. Permits, starts and space under construction are observable 12-36 months before completions raise vacancy. Vacancy does lead rents; that is the natural-vacancy-rate literature (Rosen and Smith, 1983; Wheaton and Torto, 1988). But it lags the pipeline. The lesson's own quadrant 3 (construction) has no indicator. An Analyze item that keys "vacancy" as the first warning would be contestable.
- *Fix.* (1) Rename the table "Five indicators" or replace "loan maturities" with it, and add a row: "Supply pipeline | Census new residential construction (permits, starts, completions; 5+ unit series) for MF; submarket construction reports for COM | New space that will compete for tenants at your exit, visible a year or more ahead." (2) Replace the "warns first" paragraph with: "The supply pipeline warns first. Permits and starts show new space a year or more before it opens. Vacancy then rises before rents fall, and rents fall before values are re-marked (Wheaton and Torto, 1988)." (3) Update the Practice 5 model answer to "construction pipeline and submarket vacancy". If the blueprint's "four indicators" wording is fixed, amend the blueprint O5 text.

**M-7. The S&L history is single-cause and misleading.**

- *Location.* T2 "Why these rules exist: two crises in one page".
- *Quote.* "In the 1980s many savings institutions grew fast in real estate lending, often on weak appraisals. Many failed".
- *Why it matters.* The standard account starts with maturity mismatch. Thrifts held long fixed-rate mortgages funded by short deposits, and the 1979-81 rate spike made many insolvent. Deregulation (1980 and 1982 Acts), regulatory forbearance and deposit-insurance moral hazard then encouraged risky CRE growth. Weak appraisals were one symptom. The mismatch lesson matters more to this course than the appraisal lesson: T3's warehouse margin calls are a funding-mismatch risk.
- *Fix.* Replace the first paragraph with: "In 1979-81 interest rates rose sharply. Savings institutions held long fixed-rate mortgages but paid short-term deposit rates, so many became insolvent. New laws in 1980 and 1982 widened their lending powers. Some grew fast in commercial real estate, often on weak appraisals, with insured deposits as backing. Many failed (FDIC, *History of the Eighties*, 1997, vol. 1, ch. 4)." Add a one-sentence link to T3: "Funding long loans with short money is the same risk a warehouse line carries."

**M-8. The 2008 and risk-retention argument is asserted without its evidence base.**

- *Location.* T2 "The 2008 crisis and the Dodd-Frank Act"; T3 "Risk retention: skin in the game".
- *Quote.* "A lender that keeps none of the risk has less reason to underwrite well." "That is the 'skin in the game' Dodd-Frank wanted."
- *Why it matters.* This is a testable economic claim with a well-known literature. A graduate course would cite the evidence and note that it is debated. It would also explain why tranching exists at all (information and pooling), which T3's securitization table skips. CRE CLO sponsors also commonly retain the junior notes and preferred shares, well above 5%. Presenting 5% as typical understates real alignment.
- *Fix.* Add to T2 after the Dodd-Frank sentence: "Research supports the worry. Loans that were easier to securitize were screened less carefully (Keys, Mukherjee, Seru and Vig, 2010). Other studies find the effect smaller, so the debate continues." Add to T3 under the securitization table: "Why tranche at all? Pooling diversifies loan-level risk. Selling the safest slice to investors who cannot judge single loans lowers the issuer's funding cost (DeMarzo, 2005)." Add to the risk-retention section: "In CRE CLOs, the bridge lender usually keeps the junior notes and preferred shares, often far more than 5%. Check a recent offering's risk-retention disclosure."

**M-9. C0 uses C3 and C8 machinery before any of it is taught.**

- *Location.* T2 WE2 (combined DSCR, 30-year ADS at 8% and 12%); T5 WE6 (constants 0.0802397 and 0.0818612, F-MF-14, F-MF-20); T5 "7.5% debt yield (MF-BR-11)".
- *Quote.* "Senior annual debt service (ADS) $452,586.00 (30 years at 8.00%) plus mezzanine ADS $98,746.80 ... Combined DSCR (F-MF-27) = ... 1.02x".
- *Why it matters.* C0 is Basic level with no prerequisites. A learner meets loan constants, DSCR, NCF and debt yield with no definition. That is extraneous cognitive load in an orientation module (Sweller's cognitive load theory). It also makes O2 and O5 items unanswerable without C3 knowledge, which breaks the C0-C3 sequence.
- *Fix.* Either (a) define each term in one sentence where first used: "A loan constant is the yearly payment per dollar of loan, interest plus principal (C3)." "DSCR is net cash flow divided by annual debt service (C4)." "Debt yield is net cash flow divided by the loan." Or (b) keep the results but move the arithmetic into a collapsed "For later: the numbers behind this" box, and state "you will compute this in C3 and C8". Do not set review or exam items on these computations in C0.

**M-10. O6 ("Locate") is Bloom level 1, not level 3, so the Apply count is overstated.**

- *Location.* Objectives (O6, "Apply; T6") and the claim "Four of the six objectives are at Apply or above."
- *Quote.* "**Locate**, for a given credit question, the governing rule ID, formula ID, State Law Table row and [VERIFY] source in the course tabs (Apply; T6)."
- *Why it matters.* In the revised taxonomy (Anderson and Krathwohl, 2001), locating and recognizing are Remember processes. With O6 at level 1, three of six objectives are Apply or above: exactly half, which still meets LD-02, but the stated mix is wrong. The objective is also course-navigation rather than a job competence.
- *Fix.* Rewrite O6: "**Determine**, for a given credit question, which source governs it (policy rule, formula, State Law Table row or legal source), and use its BASIS or [VERIFY] tag to judge how far to rely on it (Apply; T6)." Then teach one sentence per BASIS value on what reliance follows, which T6 already nearly does.

**M-11. The lender landscape omits half of the market's holders.**

- *Location.* T2 "Where each lender sits"; T4 Z.1 description.
- *Quote.* "Four kinds of lender compete for business-purpose loans."
- *Why it matters.* An academic course would show the whole US commercial and multifamily mortgage market by holder: banks, agencies (Fannie Mae, Freddie Mac, under FHFA), life insurers, CMBS and CLO trusts, and other lenders. The standard framing is the four quadrants of real estate capital, public and private by debt and equity (Geltner, Miller, Clayton and Eichholtz). Without it, learners cannot place the BPL niche or read the MBA maturity data in T5, which is reported by those same groups.
- *Fix.* Add a short table before "Where each lender sits": "Who holds US commercial and multifamily mortgage debt" with rows for banks, agencies and GSEs, life insurers, CMBS/CDO/other ABS, and other. Fill it from the MBA quarterly *Commercial/Multifamily Mortgage Debt Outstanding* release or Z.1 table L.220, with release date. Add one sentence: "Our niche is a small part of the 'other' and bank rows." Do not invent shares; pull them from the release.

### Minor

**m-1. Headline reconciliation rule is imprecise and one bound is wrong.** *Location:* T4 "Reconciling to the headline"; WE5 row 6. *Quote:* "A gap within rounding (a few tenths of a point)"; "A total of $5.05 trillion still rounds to $5.0 trillion". *Why:* Under the course's own half-up rule, $5.05 trillion rounds to $5.1 trillion. More important, "a few tenths" is not a method. Row 3 (−12.7% versus KBRA's 12%) is a 0.7-point gap. It is still consistent with rounding: inputs of $5.45-5.55 billion and $4.75-4.85 billion give −11.0% to −14.4%. *Fix:* Replace the rule with: "Compute the range the rounded inputs allow. If the headline falls inside it, the gap is rounding. If not, find the cause." Change row 6 to "Totals from $4.95 to just under $5.05 trillion give 17.3% to 17.7%".

**m-2. Survey sampling error is not taught.** *Location:* T4 "Four habits". *Why:* Census HVS rates are survey estimates with published 90% confidence intervals. The release says whether a change is statistically significant. A 0.5-point move should be read against that. *Fix:* Add habit 5: "Check the margin of error. Survey figures such as the Census vacancy rate come with a confidence interval. A change smaller than the margin may be noise."

**m-3. Price indices: appraisal smoothing and index choice.** *Location:* T4 table and T5 "Price index" row. *Why:* The standard CRE literature distinguishes appraisal-based indices, which lag and smooth (Geltner, 1991), from transaction-based and repeat-sales indices. A lender reading prices at a turning point needs this. *Fix:* Add one sentence to the "IMF CRE prices" bullet: "Appraisal-based price series lag turning points, because appraisers anchor on past values. Transaction-based indices turn sooner but are noisier." Name one transaction-based series the learner can open, with a date.

**m-4. Cap rates and interest rates.** *Location:* T5 "Two markets, not one". *Quote:* "Rising interest rates usually push cap rates up." *Why:* The relationship is partial and lagged. The cap rate is roughly the required return less expected income growth, so risk premiums and growth expectations also move it. *Fix:* Add: "A useful identity: cap rate ≈ required return − expected growth in NOI. Rates move the required return, but risk premiums and growth expectations move too. So cap rates follow rates only partly, and with a lag." Cite Geltner, Miller, Clayton and Eichholtz on cap-rate determinants.

**m-5. Two stacks are conflated.** *Location:* T2 and T3. *Why:* T2 is the property's capital stack. T3's funding routes are the lender's own liability stack. T3 says securitization is "a capital stack built from loans" but does not name the parallel. *Fix:* Add at the top of T3: "A lender has its own capital stack. Its equity is the first loss on its loan book. Warehouse lines, loan buyers and bondholders sit above it." Note that many warehouse lines are documented as repurchase agreements, which can be withdrawn quickly in stress (Gorton and Metrick, 2012).

**m-6. Attachment and detachment.** *Location:* T2 WE2 step 3. *Why:* The lesson computes the "cushion" correctly (40.2% senior, 30.9% mezzanine) but does not name the standard terms that T3's tranches and C14 will use. *Fix:* Add: "Lenders call the loss level where a layer starts losing its attachment point. Our senior loan attaches at a 40.2% fall in value. The hypothetical mezzanine attaches at 30.9%."

**m-7. Hypothetical mezzanine terms are unlabeled.** *Location:* T2 WE2, F-MF-16 test case. *Why:* "Mezzanine ADS $98,746.80 (30 years at 12.00%)" assumes amortizing mezzanine. Real mezzanine is usually interest-only ($800,000 × 12% = $96,000 a year, slightly less than $98,746.80). A learner may wonder why the test uses amortizing debt service. The answer is policy: MF-MEZ-02 tests all debt on 30-year amortization. *Fix:* Add "(MF-MEZ-02 tests all debt on 30-year amortization, whatever the mezzanine's real terms)."

**m-8. Weak sources behind a policy rationale.** *Location:* T1 "Why the entity rule is stricter than the law". *Quote:* "OfferMarket, Apr 2025 ... Griffin, Aug 2026". *Why:* Lender marketing pages are thin evidence for "MARKET" basis. *Fix:* Keep them, but label them "lender program pages (secondary)". Add one rated RTL transaction's eligibility criteria from a KBRA or other agency presale as a primary market source.

**m-9. Unsourced secondary figure is used in assessment.** *Location:* Market snapshot row "CRE debt funds"; Quiz Set B item 4. *Quote:* "About 15% of CRE loans in 2025 ... primary data owner not found". *Why:* A figure whose owner cannot be found should not be the stem of a scored item. *Fix:* Drop the row or replace it with a Z.1 or MBA holder share. Never use it in review or exam items.

**m-10. Source hygiene.** *Location:* Sources row 13. *Quote:* "readkong.com copy". *Fix:* Cite the publisher record (Wiley, *Real Estate Economics*, DOI 10.1111/1540-6229.00579; confirm) and drop the document-sharing copy. Also cite Mueller's 1995 article directly in T5, as the blueprint asked: Mueller, "Understanding Real Estate's Physical and Financial Market Cycles," *Real Estate Finance* 12(3), 1995 (confirm pages).

**m-11. Accounting previews for a CPA audience.** *Location:* T3 "Why a lender sells loans at all". *Why:* The program is NASBA CPE. "Gain on sale" and "risk transfer" depend on sale accounting. *Fix:* Add: "Whether a transfer counts as a sale for accounting is set by ASC 860. If it fails, the loan stays on the seller's books and the cash is a borrowing." Tag [VERIFY: FASB ASC 860-10-40; checked: pending].

**m-12. Facts-table hygiene.** *Location:* Line 15 change log. *Why:* Three versions run together in one cell. *Fix:* One version per line, and add the knowledge level ("Basic") to the facts table, as qas-spec requires.

## Academic framing: what a university course would add at this level

| Topic | Why it belongs in C0 | Standard reference |
| --- | --- | --- |
| Four quadrants of real estate capital (public/private × debt/equity) | Places BPL lenders among all capital sources (M-11) | Geltner, Miller, Clayton and Eichholtz, *Commercial Real Estate Analysis and Investments*, 3rd ed. (2014), opening chapters |
| Credit rationing and specialization | Explains why some borrowers cannot get bank credit at any price, and why niche lenders exist | Stiglitz and Weiss, "Credit Rationing in Markets with Imperfect Information," *American Economic Review* 71(3), 1981, 393-410 |
| Risk-based capital and HVCRE | The mechanism behind bank pull-back (M-3) | 12 U.S.C. 1831bb; 12 CFR Part 3 |
| Expected loss = probability of default × loss given default | Gives "cushion" a theoretical home; LTV drives loss severity, DSCR drives default | Brueggeman and Fisher, *Real Estate Finance and Investments* (latest ed.), chapters on default risk and underwriting |
| Default as an option | Why LTV matters even when the borrower can pay | Titman and Torous, "Valuing Commercial Mortgages," *Journal of Finance* 44(2), 1989, 345-373 |
| Securitization, tranching and screening | Supports T3's claims (M-8) | DeMarzo, *Review of Financial Studies* 18(1), 2005, 1-35; Keys et al., *Quarterly Journal of Economics* 125(1), 2010, 307-362 |
| Wholesale funding fragility | Warehouse and repo margin calls (T3) | Gorton and Metrick, "Securitized Banking and the Run on Repo," *Journal of Financial Economics* 104(3), 2012, 425-451 |
| Cycle dynamics and overbuilding | Why supply lags create hypersupply (M-6) | Wheaton, "Real Estate 'Cycles': Some Fundamentals," *Real Estate Economics* 27(2), 1999, 209-230; DiPasquale and Wheaton, *Urban Economics and Real Estate Markets* (1996) |
| Vacancy and rent adjustment | Supports the vacancy-leads-rent claim | Wheaton and Torto, "Vacancy Rates and the Future of Office Rents," *AREUEA Journal* 16(4), 1988; Rosen and Smith, *American Economic Review* 73(4), 1983 |
| Appraisal smoothing | Reading price indices (m-3) | Geltner, "Smoothing in Appraisal-Based Returns," *Journal of Real Estate Finance and Economics* 4(3), 1991 |
| S&L crisis causes | Accurate history (M-7) | FDIC, *History of the Eighties: Lessons for the Future* (1997); Curry and Shibut, *FDIC Banking Review* 13(2), 2000 |

Add a short "Further reading" list at the end of T6 with three to five of these. C0 should not teach them all; it should show the learner that the course sits on a recognized body of theory.

## Use of sources

- **Law.** Strong. Pinpoint citations, quoted text, check dates. Two cautions. (1) The Ohio row in WE7 rests on a FindLaw mirror because codes.ohio.gov refused the connection; keep it in "What to look up yourself" until the official text is read. (2) OCC Bulletin 2026-56 (10 Nov 2026) is twelve days old at review. Re-open it before release in case of corrections.
- **Market data.** Mostly primary and dated. Three rows remain secondary (Multi-Housing News, HousingWire, National Mortgage Professional). They are labeled, which is good practice. But two of them feed scored or self-check items (C-1, m-9).
- **Theory.** Underweighted. Two theory papers against about 25 legal and market sources. No textbook is cited. See the framing table.
- **Overclaiming.** (a) "KBRA describes securitization as one funding channel. Warehouse lines and loan sales fund the rest" is labeled "course inference". Good. (b) "Its 4.25% strike matches the KBRA CLO weighted average" infers MF-BR-09 was set to fit CLO markets. Say "is consistent with" rather than causation. (c) T5 asserts that Cedar Court's NCF miss "fits the hypersupply phase". A single-asset miss can be idiosyncratic. Teach the distinction (see Pedagogy).

## Pedagogy

- **Alignment.** Teach chunks T1-T6 map cleanly to O1-O6, and each has a worked example. Practice items 1-7 cover all six objectives. Alignment collapses at assessment (C-1).
- **Scaffolding and load.** T1, T3 and T4 are well paced. T2 and T5 overload a Basic learner with C3/C8 arithmetic (M-9). About 15,500 words in the tab is heavy for an orientation module. Cut by moving the sources table, author notes and v0 material out of the learner page.
- **Worked examples.** The four-line form (formula, inputs, substitution, result) is good practice. Add one *faded* example in T4: give the formula and inputs, and leave substitution and result for the learner.
- **Transfer.** Practice 2 (bank versus debt-fund offer) and Practice 4 (CRE price series) are good near-transfer tasks. There is no far-transfer task. Add one: "A Phoenix industrial bridge request arrives in a market where permits doubled last year. Which two indicators do you pull, and what result would change your view of the exit?"
- **Analyze level (O5).** To reach level 4, the learner must separate systematic from idiosyncratic causes. Add to WE6: "Before blaming the cycle, check the property. Did comparable buildings also miss rent? If not, the cause is execution, not the market."
- **Misconceptions addressed well.** Percent versus point; supervisory versus house limits; "competitor offers more" (Practice 6). **Misconceptions created or left open:** banks avoid transition (M-1); non-banks are unregulated (M-2); business-purpose means no consumer or fair-lending law (M-4); vacancy is the first warning (M-6).
- **C0 to C3 sequence.** C0 uses constants and DSCR that C3 and C4 define (M-9). C0 and C3 also disagree on Birchwood's cap rate: C0 T5 uses NOI ($480,000 ÷ $6,000,000 = 8.00%, F-CORE-13), while C3 T4 uses NCF ($434,000 ÷ $6,000,000 = 7.23%). Use the F-CORE-13 definition in both (see the C3 review).

## Assessment readiness

Item specifications for the 8 review questions and two 12-item forms (blueprint section 6). All four-option, one best answer, feedback on every option.

| Obj. | Bloom (as written → recommended) | What review and exam items should test | Example stem | Assessable as written? |
| --- | --- | --- | --- | --- |
| O1 | 2 → 2 | Classify a fictional request by family, product and exit; identify which feature (borrower, purpose, collateral) moves a loan out of Reg Z; identify a rule that *still* applies (ECOA) | "A trust asks for a 12-month loan to renovate a duplex for sale. Which statement is correct under our policy?" (critical: CORE-BOR-01) | Yes, after M-1 and M-4 fixes |
| O2 | 2 → 2 | Order of loss in a given stack; compute a cushion from given figures; identify the law or regulator that reaches a named lender type; explain why a house limit binds before a supervisory one | "Which constraint most directly limits a mortgage REIT's holdings of non-mortgage assets?" | **No.** The lesson gives no law for non-banks, so the key would be "its funders". Fix M-2 first |
| O3 | 3 → 3 | Given a funding chain, identify whose criteria apply at a step; compute a vertical-interest retention amount; identify the consequence of a breached representation | "Cedar Court is placed in a CRE CLO. Which party's criteria apply at that step?" | Yes |
| O4 | 3 → 3 | Compute a percentage-point and a relative change from two given readings; decide whether a headline gap is within the rounding range; identify units (level, change, index) | "Vacancy moved from 6.8% to 7.4%. Which headline is accurate?" Distractors: 0.6%, 8.8 points, 6 bp | Yes, after m-1 |
| O5 | 4 → 4 | Given indicator readings, infer the likely phase and the effect on a bridge exit; choose the indicator that warns earliest; distinguish market from property causes | "Permits for 5+ unit buildings in the submarket doubled 18 months ago; occupancy is 95%. Which phase and which exit risk?" | Partly. The current "vacancy warns first" key is contestable; fix M-6 |
| O6 | 3 claimed; actually 1 → rewrite to 3 | Given a question, pick the governing source; interpret a BASIS or [VERIFY] tag's implication for reliance | "A rule is tagged JUDGMENT. What does that tell an underwriter?" (critical: model policy never used live) | Only at Remember level as written (M-10) |

Distractor design: build each wrong option from a named misconception (percent versus point; using price not lower-of-cost-or-value; treating mezzanine as a cushion; reading "no examiner" as "no rules").

## Writing

- **Register.** Clear and concrete. For graduate learners it is sometimes too simple ("Think of it as a column"). The under-25-word rule produces staccato paragraphs that hide causal links. Allow one connective ("because", "so", "which means") per pair of sentences.
- **Precision.** Good on legal quotations. Imprecise phrasing to fix: "where banks ... sit in the capital stack" (O2; lenders fill layers of a property's stack); "exit risk is lowest in expansion" (lowest for exits *during* expansion, but loans written then exit later, as the lesson itself says); "SOFR ... the base rate for most floating bridge loans" (Term SOFR is the index; overnight SOFR is the input).
- **Long sentences.** About 30 sentences in the tab exceed 25 words (mostly in tables and model answers). Split them during the Phase 3 rebuild.

## What to look up yourself

1. 12 CFR 3.2 (HVCRE definition) and 12 CFR 3.32 (150% risk weight), and 12 U.S.C. 1831bb, for M-3.
2. 15 U.S.C. 80a-3(c)(5)(C) and the current SEC staff position on mortgage REITs, for M-2.
3. The latest MBA *Commercial/Multifamily Mortgage Debt Outstanding* release, for the holder table in M-11.
4. The Census HVS Q3 2026 release's confidence interval for the 7.6% rental vacancy rate, for m-2.
5. Bibliographic details of every reference in the framing table. I cited them from memory as a reviewer; confirm volume and pages before the lesson quotes any of them.

## How to check it

1. Credit (C-2): `=ROUNDDOWN(((10248/180)+(23*1.85))/50*5,0)/5` returns 1.8. Replace 10,248 with your recount.
2. Break-even (M-5): `=5140000*1.25*0.0818612` returns about 525,957.91; `=1-525957.91/560000` returns about 6.1%.
3. Rounding range (m-1): `=(4.75-5.55)/5.55` and `=(4.85-5.45)/5.45` return −14.4% and −11.0%; −12% lies inside.
4. Combined DSCR (WE2): `=560000/(ROUND(PMT(8%/12,360,-5140000),2)*12+ROUND(PMT(12%/12,360,-800000),2)*12)` returns 1.0157, shown as 1.02x.
