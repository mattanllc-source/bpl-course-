# Competitive benchmark: BPL Academy course page and lesson copy

**Model policy for training - not for live lending decisions.** Internal design note. Fictional data only.

- **Date of research:** 22 Nov 2026. Every URL below was read on that date.
- **Our product reviewed:** `exports/core-course.html` (redesign, Phase 5), `modules/core/c00/lesson.md`, `modules/core/c03/lesson.md`, `docs/curriculum/`, `docs/accreditation/compliance-matrix.md`.
- **Method:** Public pages only (landing pages, syllabi, free previews, public articles). No logins, no paywalls. Facts were read with WebFetch; screenshots were taken with Playwright.
- **Screenshots:** competitor pages are in `scratchpad/bench/` (full path: `C:\Users\A\AppData\Local\Temp\claude\94e49ebb8f6c1066\914daea0-d3ea-49d0-a4d7-2f1807e15a53\scratchpad\bench\`). Ours are in `scratchpad/redesign/shots/`. The scratchpad is temporary; copy any you want to keep.

## 1. Sources

| Provider | Page read | URL |
| --- | --- | --- |
| Wall Street Prep (WSP) | Real Estate Financial Modeling course | https://www.wallstreetprep.com/self-study-programs/real-estate-financial-modeling/ |
| WSP | Public lesson-style article: DSCR | https://www.wallstreetprep.com/knowledge/debt-service-coverage-ratio-dscr/ |
| Wharton Online + WSP (university) | Real Estate Investing & Analysis Certificate | https://wallstreetprep.wharton.upenn.edu/real-estate-investing-certificate/ |
| CFI | Commercial Real Estate Finance Specialist (CREF) | https://corporatefinanceinstitute.com/certifications/commercial-real-estate-finance-specialist/ |
| CFI | Real Estate Financial Modeling in Excel (course page) | https://corporatefinanceinstitute.com/course/real-estate-financial-modeling/ |
| CFI | Public lesson-style article: DSCR | https://corporatefinanceinstitute.com/resources/commercial-lending/debt-service-coverage-ratio/ |
| CFI on NASBA Registry | Course listing | https://www.nasbaregistry.org/course-library/real-estate-financial-modeling-course |
| Financial Edge / Felix | Real Estate Investing (Skills Certificate) | https://www.fe.training/product/online-finance-courses/real-estate/real-estate-investing |
| A.CRE Accelerator | Program page (redirects from adventuresincre.com/accelerator/) | https://adventuresincre.shop/accelerator/ |
| Coursera | Real Estate Finance & Credit Analysis (EDUCBA) | https://www.coursera.org/learn/real-estate-finance-credit-analysis |
| ProSight (formerly RMA) | Commercial Lending School | https://www.prosightfa.org/training/professional-development/commercial-lending-school/ |
| Cornell (eCornell) | Commercial Real Estate Certificate | https://ecornell.cornell.edu/certificates/real-estate/commercial-real-estate/ |
| MIT (OCW) | 11.431J Real Estate Finance and Investment, syllabus (Fall 2006) | https://ocw.mit.edu/courses/11-431j-real-estate-finance-and-investment-fall-2006/pages/syllabus |
| MBA | CREF Academy | https://mba.org/conferences-and-education/education-courses/core-courses/crefacademy |

**Gaps in the evidence.**

- **MBA CREF Academy:** mba.org returned HTTP 403 to both fetch and browser. Facts come from search-result snippets only: eight standalone commercial/multifamily courses, a Commercial Real Estate Professional Certificate and a Credly badge for all eight. Treat as unverified.
- **ProSight:** the two RMA CRE course pages (`rmahq.org/courses/...`) returned 404. Search snippets describe "Commercial Real Estate Lending I: Introduction" as a 7.5-hour instructor-led online course, and the "Commercial Real Estate Lending Decision Process" as a self-directed 20-35-hour course. Unverified.
- **A.CRE:** the page was read, but the screenshot failed (HTTP/2 protocol error).
- **Coursera:** no university-authored commercial real estate finance course turned up. The closest match is by EDUCBA. Wharton (via WSP), Cornell and MIT stand in for university courses.
- **Financial Edge:** Felix's lesson player is behind a login. Only the product page was reviewed.

## 2. Comparison table

Legend: ✓ present on public pages · ◐ partial · ✗ absent · ? not shown publicly.

| Dimension | BPL Academy (us) | WSP REFM | Wharton + WSP cert | CFI CREF | Financial Edge | A.CRE Accelerator | Coursera (EDUCBA) | ProSight | eCornell CRE | MIT 11.431 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total size | 15 modules, 39.4 study units on home page; C0 92 min, C3 ~3.4 CPE projected | 9 courses, 246 lessons, 20h 1m | 8 weeks × 8-10 h + capstone | 10 courses, 40-50 h | 4 h, 4 topics | 17 courses, ~100 h | 3 modules, 7 h | 6 courses, live | 6 × 2-week courses, 60 PDH | Semester, 2 lectures + 1 recitation a week |
| Lesson unit size | Teach chunk ≈ 10 min ("Learn · part 1 of 7 · about 10 min"), but 10-14 subsections each | Avg ≈ 5 min a lesson (20h ÷ 246); videos from seconds to ~22 min | Weekly: concept video → Excel lecture → guest + case | ~61 items in a 6.5 h course (≈ 6 min) | 140 video minutes + 22 Excel exercises | 4-8 h a course | 21 videos, 39-60 min a module | 2-day segments | Short videos + readings | 90-min lectures |
| Primary medium | Text, tables, KaTeX formulas, figures | Video + Excel | Video + Excel + live forum | Video + interactive exercises | Video + Excel | Video + Excel/Word/PDF | Video + assignments | Live classes + case work | Video, readings, discussion | Lecture + text + cases |
| Sequence inside a unit | Hook → Objectives → Teach (key idea, explain, worked example, common slips, why it matters) → Exercises → Practice → Quiz → OJT → Job aid → Wrap-up | Concept → build in Excel → module review quiz | Concept → model → case discussion | Lesson → interactive exercise → lesson exam → final assessment | Video → Excel exercise → quick quiz → exam | Video → build → case | Video → assignment | Teach → case → faculty critique | Video → reading → quiz → graded project | Lecture → problem set → case → exam |
| Case studies / capstone | 3 running deals in every module; no separate capstone yet | 2 case-study courses (office acquisition; MF development) | Capstone on a real deal: memo + model + due-diligence quiz | 1 mortgage case study | 74-min case-study model | Case-based throughout | ◐ | Two cases in Credit Analysis Basics; "Writing the Credit Analysis" | Applied spreadsheet projects | 4 graded group cases (40%) |
| Downloadable models / templates | ✗ (one-page job aid only; no .xlsx) | ✓ templates + "Step-by-Step Course Manual" | ✓ | ✓ blank + completed models | ✓ 22 Excel exercises | ✓ Excel, Word, PDF | ? | ? | ✓ spreadsheet tools | Argus + HP-10B required |
| In-lesson checks | ✗ in Learn ("Review questions. Added in Phase 3") | ◐ module review quiz | ? | ✓ 3 interactive exercises + lesson exams | ✓ "quick quizzes" | ✗ | ✓ 4 assignments a module | ✓ faculty-reviewed exercises | ✓ quizzes | ◐ ungraded problem sets |
| Final assessment | ◐ MC quiz, sets A/B, 80% + critical items; self-marked, not yet a QAS final exam (compliance matrix M14) | Final exams for 7 courses; pass mark not stated | Capstone deliverables | "Qualified assessment"; 80%; retakes; MC, fill-in, Excel items | 1 exam | ✗ not stated | Graded assignments | ✗ not stated | Graded assignments | Exam 1 25%, Exam 2 35% |
| Certificate | ✗ | ✓ REFM Certification | ✓ Wharton Online digital certificate | ✓ blockchain-verified CREF certificate | ✓ Skills Certificate | ✓ certificate + endorsement certificates | ✓ shareable | ✓ digital credential | ✓ Cornell certificate | Grade |
| CPE | Targeted (QAS self-study); projections shown per module | NASBA sponsor; hours not listed on the page | 65 CPE, NASBA | NASBA sponsor; 3 CPE for REFM course, field "Finance" | NASBA sponsor | ✗ | ✗ | ? | ✗ (PDH, BOMI CPD) | n/a |
| Support / community | ✗ (solo) | Live chat ("Get Live Support") | Live weekly forum, 1:1 office hours | ? | Instructor support via Felix | Instructor Q&A, 1,000+ answers | Forums | Faculty critiques | Facilitator feedback, cohort ~35 | TA recitation |
| Navigation and progress | Left course rail, step tabs (1-8), part pager 1/7, "On this page" TOC, reading progress, ring per module, search (/), glossary popovers, audit mode, dark mode | Article pages: guide sidebar + collapsible TOC + "6m Read Time" | Cohort calendar | Tabs: Lesson · Multimedia · Exams · Files | Web + mobile app | Membership page | Coursera player | LMS | LMS | Course site |
| Mobile | ✓ responsive, tested light/dark | ✓ | ? | ✓ + iOS/Android apps | ✓ app | ? | ✓ app | ? | ? | n/a |
| Lending-credit focus | BPL: RTL, DSCR rental, MF and COM bridge, policy + servicing | Equity investor modeling | Investing | 43% real estate lending | Investing; 22 video min on financing | Modeling (adds "Advanced Real Estate Debt") | Credit, DSCR | Commercial credit (C&I) | Development, investing | Institutional investing |

## 3. Copy and voice

### 3.1 How lessons open

| Source | Opening (verbatim, short) | Pattern |
| --- | --- | --- |
| CFI DSCR article | "The Debt Service Coverage Ratio (sometimes called DSC or DSCR) is a credit metric used to understand how easily a company's operating cash flow can cover its annual interest and principal obligations." | Definition first, one long sentence (35 words). Then "Key Highlights" bullets. |
| WSP DSCR article | "The Debt Service Coverage Ratio (DSCR) measures if the income generated by a commercial property is sufficient to fulfill its annual debt burden." | Definition first, then "How to calculate", formula, "What is a good DSCR?", then a 3-step worked example with a downloadable .xlsx. |
| Wharton + WSP | "The barriers to entry in real estate are low but the barriers to success are high." | Aphorism as a hook; marketing voice. |
| Cornell, Financing Real Estate Investments | "Real estate investment is a popular way to accumulate wealth, but you don't have to be rich to get started." | Consumer-friendly hook. |
| A.CRE | The program "breaks modeling down to basic building blocks"; "Get laser-focused results through practice." | Coach voice, energetic. |
| **Us, C3 hook** | "Harborline Holdings closed its $340,000 Maple Run loan on 15 Jan 2027. Dana Reyes calls on 2 April. Her February interest bill was $1,913.33. Her March bill was $2,263.54. 'Nothing changed but the month,' she says." | Story with a concrete puzzle, solved to the cent at the end of T1. |
| **Us, C3 T1 key idea** | "Period interest is the balance times the daily rate times the days, and the note's day-count clause decides what 'daily rate' means." | One-sentence thesis before the detail. |

**Read.** Competitors open with a definition (articles) or a marketing hook (programs). Our hook plus "Key idea" is the stronger opening. No public competitor page opens a lesson with a client problem that the lesson then solves. Keep it.

### 3.2 Objectives

| Source | Phrasing (verbatim) |
| --- | --- |
| CFI REFM | "Outline the development timeline and corresponding financing tools"; "Explain the importance of clearly identifying model inputs and assumptions" |
| CFI CREF | "Explain the differences and similarities between different types of real estate loans and different property classes." |
| Coursera (EDUCBA) | "Evaluate cash flows, rent rolls, and DSCR for credit assessment." |
| Cornell | "Structure private equity and debt financing to maximize returns on real estate investment deals" |
| NASBA listing of CFI's course | Lists "Includes blank and completed financial models to download" and "Certificate of completion" as objectives, and omits field of study, credits, level and prerequisites. |
| **Us, C3 O1** | "**Calculate** the interest for any billing period on an interest-only loan, Actual/360, with mid-period draws and paydowns, to the cent (F-CORE-01, F-CORE-05; D-CONV-02)." |

**Read.** Ours are the most measurable and the only ones tied to a Bloom level and a condition. They are also the densest. The ID string in parentheses is for auditors, not learners.

### 3.3 Section labels

- **CFI:** "Key Highlights", "Common Questions", "Take Your Credit Skills Further", "Additional Resources". Course tabs: "What You'll Learn", "Lesson / Multimedia / Exams / Files".
- **WSP:** question headings ("What is DSCR?", "What is a Good DSCR?", "What Does a DSCR of 1.25x Mean?"), a "DSCR Calculator" download, and "6m Read Time".
- **Us:** "Key idea", "Worked example", "Common slips", "Why it matters to a credit officer", "Self-check", "What to look up yourself", "How to check it".

**Read.** Our labels are better for learning: "Common slips" and "Why it matters" have no equal on competitor pages. We lack an end-of-chunk recap ("Key takeaways") and question-form headings, which make scanning easier.

### 3.4 Tone, reading level and jargon

- **Our reading level.** A rough Flesch-Kincaid estimate over Teach prose (tables, headings and parentheses removed) gives grade 7.3 for C0 and 5.8 for C3. Sentences average 12.8 and 11.7 words. That is plainer than CFI's 35-word opening sentence. Method: a quick script with a syllable heuristic; indicative only.
- **Our ID density.** C0 Teach has about 14 rule or formula IDs per 1,000 words; C3 has about 25. Example: "Formula. F-CORE-01, counting days up to but not including the payoff day (D-CONV-02)." No competitor uses internal codes in learner copy. WSP and CFI write "the minimum DSCR is widely recognized as 1.25x by commercial real estate lenders" (WSP) and cite no source at all.
- **Precision.** WSP states market norms as fact ("widely recognized as 1.25x"). We cite the model policy rule and tag legal points `[VERIFY]`. Our way is more honest and fits a credit audience. Keep it, but render citations more quietly.
- **Admin text in learner view.** C3's header table shows "Status", "Change log" and Bible section numbers. The C0 quiz carries an "Author note, 22 Nov 2026". The C3 overview page shows "Version 1.0-draft". No competitor exposes authoring metadata to learners.

## 4. Layout and UI

**Screenshots compared.**

- `desk-wsp-refm-course.png`: hero states "9 Courses · 20h 1m · 79,550 Students", with price and certificate image above the fold. The in-product mock-up shows "Supporting Documents Kit – Download" and "Step-by-Step Course Manual – Download" beside the welcome text.
- `desk-wsp-dscr-article.png`: left "Part of the Guide On... Commercial Lending" sidebar listing sibling topics (Loan Sizing, LTV, LTC, DSCR, DTI...). Collapsible "Table of Contents". "Updated Feb. 27, 2024 · 6m Read Time".
- `desk-cfi-refm-course.png` / `mob-cfi-refm-course.png`: intro video first, one CTA ("Start Learning"), then anchor tabs (Overview · What You'll Learn · Career Programs · What Students Say · FAQ). On mobile the video and CTA fill the first screen.
- `desk-fe-real-estate-investing.png`: stat strip "4 Hours to Complete · 4 Topics · 22 Practical exercises".
- Others captured, not discussed further: `desk-cfi-cref-cert.png`, `desk-cfi-dscr-article.png`, `desk-wharton-wsp-cert.png`, `desk-ecornell-cre.png`, `desk-mit-ocw-11431.png`, `desk-prosight-cls.png`, `mob-wsp-refm-course.png`, `mob-wsp-dscr-article.png`.
- Ours: `desk-light-home.png`, `desk-light-c03-overview.png`, `desk-light-c03-learn-1.png`, `desk-light-c03-quiz-answered.png`, `mob-light-c03-learn-2-math.png`.

**Observations on ours.**

- **Home** (`desk-light-home.png`): clear "Start here" card, learning path with status pills, and a progress ring. The ring caption ("The ring counts finished study load: CPE credits where a module projects them, Course Bible hours otherwise") explains internals rather than value. Units are mixed: "2 CPE credits (projected)" for C0, "2 hours" for C1.
- **Module overview** (`desk-light-c03-overview.png`): the first thing under "In this module" is a list of 13 formula IDs. The hook and objectives sit only in the "On this page" rail. Competitors lead with outcomes ("What You'll Learn"), length and what you get.
- **Learn** (`desk-light-c03-learn-1.png`): strong anatomy: a part pager (1/7), "about 10 min", a "Key idea" callout and an on-this-page TOC. That TOC lists 14 subsections in a "10 min" part. The first table is cut off at the right edge ("Full 365-day yea...") with no visible scroll cue.
- **Quiz** (`desk-light-c03-quiz-answered.png`): immediate feedback with worked rationale ("$600,000 × 9.5% ÷ 360 × 31 = $4,908.33 (F-CORE-01). A uses ÷ 12; B uses 365."). The distractor explanation is better than anything visible publicly from competitors. It is still self-study practice, not a graded final exam (compliance matrix M14).
- **Mobile** (`mob-light-c03-learn-2-math.png`): formulas render cleanly in a card; the text measure is comfortable.
- **"Progress is saved in this browser only."** Every competitor has an account, a certificate and a completion record.

## 5. Assessment and credentialing

| Item | Best public practice | Us now | Gap |
| --- | --- | --- | --- |
| Pass mark | CFI 80% with retakes; NASBA minimum 70% | 80% plus every critical item | None. Ours is stricter. |
| Item types | CFI: MC, fill-in-the-blank, Excel questions | MC only (by design, all tests MC) | Fine for QAS; consider numeric-entry practice items (not exam) |
| Lesson-level checks | CFI lesson exams + interactive exercises; FE quick quizzes | None inside Learn | Add review questions per chunk (QAS needs review questions with feedback anyway) |
| Final exam | CFI qualified assessment; WSP final exams | Self-marked quiz sets A/B | Build graded, locked final exam (Phase 3) |
| Capstone | Wharton: memo + model + due-diligence quiz on a real deal | C14 credit memo planned; OJT tasks | Make a formal capstone with a rubric |
| Certificate | All commercial providers; CFI blockchain-verified; MBA Credly badge | None | Add a printable certificate with CPE fields |
| CPE statement | WSP/FE: "registered with NASBA as a sponsor... State boards of accountancy have final authority..." Wharton: "65 CPE credits" | Projected credits per module | Add the standard sponsor statement and course-description fields (level, prerequisites, advance preparation, field of study, delivery method) once registered. Do not claim sponsor status before it is real. |
| Course description fields | NASBA Registry listing of CFI's course omits level, field, credits and prerequisites | C3 header already has knowledge level, prerequisite, advance preparation, credits | We are ahead. Surface them on the overview card. |

## 6. What competitors do better, and what we do better

**Competitors do better.**

1. **Downloadable working files.** WSP, CFI, FE and A.CRE all ship Excel models (CFI ships blank and completed versions). We ship none, though our math lessons are spreadsheet-ready.
2. **Practice inside the lesson.** CFI puts an interactive exercise in each module, and FE pairs 22 Excel exercises with 140 video minutes. Our Learn tab has no check until the separate Practice and Quiz tabs.
3. **Completion and proof.** Certificates, badges, final exams and a stated CPE sponsor line.
4. **At-a-glance packaging.** "9 Courses · 20h 1m"; "4 Hours · 4 Topics · 22 Practical exercises". Our home mixes hours and projected credits.
5. **A capstone that pulls everything together** (Wharton: memo + model + diligence quiz on a real deal and data room).
6. **Human feedback.** A.CRE Q&A (1,000+ answers), ProSight faculty critiques, eCornell facilitators, Wharton office hours.
7. **Video for orientation.** Every commercial provider leads with an instructor video.

**We do better.**

1. **Lending-credit focus.** No benchmark teaches RTL fix-and-flip, DSCR rental, bridge and servicing under one credit policy. CFI CREF is closest at 43% lending.
2. **Worked examples to the cent.** Our layout (Formula → Inputs → Substitution → Result), running deals and reconciliation tables ("$205.00 + $145.2083 = $350.21") are more rigorous than WSP's PMT screenshots.
3. **"Common slips" and "Why it matters to a credit officer."** No public competitor page has these.
4. **Traceable sources.** Rule and formula IDs, `[VERIFY]` legal tags and sourced market data. WSP and CFI state norms without sources.
5. **Measurable objectives with Bloom levels** and full QAS course-description fields. These are stronger than the NASBA Registry listing of CFI's own course.
6. **Plain English.** Grade ~6-7 reading level and short sentences.
7. **Reader UI.** Step tabs, part pager, on-this-page TOC, glossary popovers, search, dark mode and an accessibility audit. These match or beat the public pages of every benchmark.
8. **Quiz feedback that explains each distractor.**

## 7. Recommendations (ranked)

Effort: S = under a day, M = a few days, L = a week or more. Ranks run across both lists.

### (a) Lesson copy and structure

| # | Recommendation | Evidence | Effort |
| --- | --- | --- | --- |
| 1 | **Add 2-3 review questions with feedback at the end of every Teach chunk.** Use MC with a rationale per option, as the quiz does now. This also meets the QAS review-question rule. | CFI: interactive exercise per module and lesson exams. FE: "quick quizzes". C3 T1 ends "Review questions. Added in Phase 3". Compliance matrix M13-M16. | M |
| 2 | **Move rule and formula IDs out of running sentences.** Keep them as small chips at the end of a paragraph, or in a "Sources for this step" line. Keep IDs in worked-example "Formula" steps and in quiz rationales. | C3 Teach: ~25 IDs per 1,000 words. No competitor uses codes in prose. | M |
| 3 | **Ship a spreadsheet per math module (C3, C4, C5, C8): a blank and a completed workbook** for the worked examples and Practice items, built from fixtures and recalculated with `npm run xlsx:recalc`. | WSP "Supporting Documents Kit" and DSCR .xlsx. CFI blank + completed models. FE 22 Excel exercises. A.CRE Excel files. | M |
| 4 | **End each chunk with "Key takeaways" (3 bullets).** Pair it with the existing "Key idea" opener. | CFI "Key Highlights". WSP "Generate Key Takeaways". | S |
| 5 | **Build a capstone (after C14):** a fourth fictional deal with a data room (rent roll, appraisal, title, sponsor file). Deliverables: a sizing workbook, a credit memo with a rubric, and a graded MC diligence exam. | Wharton capstone: memo + model + due-diligence quiz. WSP case-study courses. CFI mortgage case study. | L |
| 6 | **Split long chunks so the "On this page" list stays under about 8 items.** Give each part a time label you have measured (180 wpm plus the worked examples). | C3 T1 lists 14 subsections in "about 10 min". WSP lessons average ~5 min. | M |
| 7 | **Add an "In Excel" line under each formula,** e.g. `=PMT(rate/12, n, -loan)` and `=ROUND(x,2)`, matching the F-CORE function. | WSP DSCR example uses Excel PMT. C3 prerequisite already assumes ROUND and absolute references. | S |
| 8 | **Hide authoring metadata from the learner view.** Status, change log, Bible section numbers and "Author note" belong in audit mode only. | C3 header table; C0 quiz author note; "Version 1.0-draft" on overview. No competitor shows these. | S |
| 9 | **Add a plain-English "You will be able to" line above the formal objectives.** Example: "Explain a borrower's interest bill to the cent." Keep the Bloom-verb objectives and IDs below it. | CFI "What You'll Learn"; Coursera outcome bullets. Our O1 is 30+ words with 3 IDs. | S |
| 10 | **Use question-form subheadings where a learner would ask one.** Example: "Why is March higher than February?" | WSP: "What is a Good DSCR?", "What Does a DSCR of 1.25x Mean?" | S |
| 11 | **Add an OJT self-assessment rubric** (criteria + model answer) so a solo learner can grade their own write-up. | ProSight "Writing the Credit Analysis" with faculty critique. eCornell graded assignments with facilitator feedback. | M |

### (b) Page layout and features

| # | Recommendation | Evidence | Effort |
| --- | --- | --- | --- |
| 12 | **Build the graded, locked final exam per module.** No answer reveal before submission, 80% plus critical items, two forms, and a retake rule. Record the result. | Compliance matrix M14/M18/M19. CFI "Qualified Assessment", 80%, retakes. WSP final exams. | L |
| 13 | **Add a completion certificate per module and for the course.** Show the learner name, course, date, credits, field of study, delivery method ("QAS Self Study") and the sponsor line *only once registered*. Make it printable to PDF. | WSP certificate pictured above the fold. CFI blockchain certificate. Wharton "65 CPE credits". FE/WSP NASBA statement. | M |
| 14 | **Reorder the module overview:** hook, outcomes, time and credits, then what you get (worked examples, exercises, downloads, quiz). Move the formula list to a collapsible "Formulas used" block. | `desk-light-c03-overview.png` opens with 13 formula IDs. CFI and WSP lead with outcomes and length. | S |
| 15 | **Add a stat strip to course home:** "15 modules · N CPE credits · N worked examples · N practice items · 3 running deals". Use one unit, not mixed hours and credits. | WSP "9 Courses · 20h 1m". FE "4 Hours · 4 Topics · 22 Practical exercises". Home shows "2 CPE credits (projected)" beside "2 hours". | S |
| 16 | **Make progress portable.** Add export/import of a progress file now. Later, add an account or server record, which QAS completion records need. | "Progress is saved in this browser only." Every benchmark keeps progress in an account. | S (export) / L (accounts) |
| 17 | **Add a "Downloads" or "Files" tab per module** (job aid PDF, workbook, print view). | CFI course tabs "Lesson · Multimedia · Exams · Files". WSP "Download" tiles. | S |
| 18 | **Show a scroll cue on wide tables** (edge fade or "scroll →"), or let the first column stick. | `desk-light-c03-learn-1.png`: the first table is clipped at "Full 365-day yea". | S |
| 19 | **Simplify the home progress caption.** For example: "You have finished 0 of 39.4 study hours." Move the explanation of how credits and hours mix into a tooltip. | `desk-light-home.png`: the ring caption explains the counting method. | S |
| 20 | **Add a 2-minute orientation clip or narrated walkthrough** for course home and C3 (screen recording of one worked example). Keep it optional, with a transcript. | CFI, WSP, FE and A.CRE all lead with instructor video. `mob-cfi-refm-course.png` shows video plus CTA as the first screen. | M |
| 21 | **Add an "Ask / flag this" link per section** that logs a question or error to a local list for the course owner. It stands in for forums in a solo course. | A.CRE Q&A (1,000+ answered). WSP "Get Live Support". eCornell facilitator feedback. | M |
| 22 | **Add a "Part of: Commercial lending ratios" sibling list on formula-heavy pages.** It links LTV, LTC, DSCR, debt yield and the loan constant across modules. | `desk-wsp-dscr-article.png`: "Part of the Guide On... Commercial Lending" sidebar. | M |

### Do not copy

- Marketing-led headers and sales banners (CFI and FE Black Friday bars, price above the fold).
- Unsourced norms stated as fact ("widely recognized as 1.25x").
- Video-only teaching. Our text-first lessons are searchable, accessible and auditable for QAS word-count credit. Add video only as an optional extra.
- Fill-in-the-blank or Excel-graded items on final exams. All our tests stay multiple choice.

## 8. What to look up yourself

- The MBA CREF Academy course pages (mba.org blocks automated access). Check the format, length and assessment of each of the eight courses.
- ProSight's current CRE course catalog (the `pd-catalog_2025-26.pdf` linked from prosightfa.org), for CRE lending hours and CPE fields.
- NASBA Registry entries for WSP and CFI real estate courses, to see how they state level, prerequisites and field of study.
- The current NASBA/AICPA Statement on Standards for CPE Programs (self-study final exam and certificate content) before building recommendations 12 and 13 [VERIFY: NASBA/AICPA Statement on Standards for CPE Programs; checked 22 Nov 2026].

## 9. How to check it

- Re-open each URL in section 1 and confirm the quoted lines; pages change, especially during sales.
- Re-run the screenshot script at `scratchpad/bench/shoot.cjs` to refresh the images.
- Re-run the reading-level estimate after any copy change. Confirm it with a standard tool (e.g. a Flesch-Kincaid checker) before you quote it outside this note.
