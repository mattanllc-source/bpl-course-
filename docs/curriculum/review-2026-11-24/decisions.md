# Curriculum review, 24 Nov 2026: decisions for the owner

Model policy for training - not for live lending decisions.

Sources: [A-roles-and-mapping.md](A-roles-and-mapping.md) (job tasks, objective mapping, tracks, hours) and [B-reference-assessment-experience.md](B-reference-assessment-experience.md) (reference shelf, quizzes, learning experience). Spot-checked by the lead: C0 quiz items are open response with model answers; the built page shows 6 author tags such as "(Apply; the 'Reading market data' section)".

## The two numbers to read first

| Measure | Hours | Meaning |
| --- | --- | --- |
| Claimed today (Course Bible) | 38 | Stated, not measured |
| Written today, by the NASBA QAS word-count formula | about 11 | Only C0 and C3 are written to full depth |
| Planned by the blueprints (revised core) | about 46.5 | What the core reaches once every module is written to C0/C3 depth |
| Core + one role track | 54.5–58.5 | Inside the 50–70 h target |

The gap is writing, not design. Milestones M4–M5 close it.

## Decisions (recommendation in bold)

### Structure and audience
1. **Adopt the four-role task chart (31 tasks; 21 core, 10 track).** Closer, servicer and credit-officer work stays as core content, not separate audiences. (A1)
2. **The certificate is core + one role track** (originator ~8 h, underwriter ~8 h, analyst ~12 h, founder ~12 h, each ending in a capstone on the ground-up deal). Residential, multifamily and commercial product families become later electives. Course Bible §2–3 must be rewritten. (A2)
3. **One core for all four roles.** Originators who can size a loan and read a value make fewer bad promises. (A3)
4. **Founder track stays at issue-spotting** for securities, fund and licensing law; you supply any unit-economics formulas. No invented numbers, no legal advice. (A8)

### Module 0 and sequencing
5. **Adopt the new C0: five job objectives**, business-purpose screen first; then the loan life cycle and who does what, the two credit questions, LTV/LTC/LTARV/DSCR, and the five products. Move the life-cycle objective from C2 into C0. (A4, A5)
6. **Market data moves to the analyst track and C4, not cut**; the market cycle goes to C8 and C14. Funding routes and risk retention go to a shared analyst/founder unit, with a buyer-eligibility check kept in C14. (A6, A7)
7. **Move C07-O6 and C12-O8 to tracks; merge C09-O5 into C11-O2.** (A10)

### Assessments (the biggest quality gap)
8. **Convert all 166 open-response quiz items to multiple choice now** (C0–C2, C10–C14). They break the multiple-choice rule today. (B4)
9. **Rewrite, don't patch, the 164 existing multiple-choice items**: complete-question stems, a rationale for every option, balanced keys, exhibits and judgment items, no chained items. (B5)
10. **Critical items follow quality bar 8.7**: two items per critical skill; fail on both, or on one plus a score under 80%. (B6)
11. **Add a third form or a blueprint-drawn pool, and shuffle options**, so a third attempt cannot be memorised. Quiz intro text must match the page. (B7)

### Reference shelf
12. **Keep the Model Credit Policy; regroup the learner page into 13 deal-order topics** by a build-time map (rule text unchanged). Lessons cite "Credit Policy 4: Guarantor credit…", not "Core Part 2B". Phones: topic index, then topic page. Show the 147 core rules by default. (B1, B2)
13. **State law stays at four states**; add a "by topic" view, a "research a new state" page, and researched new dimensions (redemption, mechanics' liens, qualifying to lend in another state). (B3)
14. **Keep formulas, running deals and glossary**: core 73 formulas by default; add analyst and founder tasks to the deals; label Maple Run's two liquidity figures; drop 50 glossary examples that duplicate formula pages. (B3, B9)

### Format and hours
15. **Roll out the C4 sample lesson format to every module**, after fixing its off-objective case and open self-check; at most one interactive desk and one case per lesson. (B8)
16. **Claim only QAS-counted hours.** Show the measured figure, not 38, until modules are written to depth. (B10)
17. **Strip author metadata at build time** and make `check:copy` fail on it. (A9)

## Proposed order of work

| Milestone | Scope | Why first |
| --- | --- | --- |
| M3.5 (small) | Decision 17 (strip author tags), decision 16 (honest hours label), quiz-intro wording | Learner pages are wrong today; quick |
| M4a | Rebuild the Model Credit Policy learner page (12) and state-law views (13) | Every lesson rewrite cites them |
| M4 | Rewrite C0–C5 in the lesson format (5–7, 15), with new multiple-choice quizzes (8–11) | Largest value; foundations first |
| M5 | C6–C14, same method | |
| M6 | Role tracks, capstones, exams | Depends on core objectives |

Owner checks still needed: the founder task list rests on thin evidence (A §1); a practitioner should confirm it.
