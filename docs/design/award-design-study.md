# Award design study: what winning learning design looks like, and how our templates compare

Internal design document. Not learner-facing. Prepared 22 Nov 2026.

**Scope.** This study adds what `competitive-benchmark.md` and `docs/standards/layout-patterns.md` (sections B and E) did not cover:

- award-winning designs we could actually see;
- the in-lesson experience of best-in-class learning products;
- a scored critique of the three new page templates: `Main.dc.html` (design system), `Lesson.dc.html` (desktop lesson with deal desk) and `LessonPhone.dc.html` (phone).

**Method.**

- 10 web searches and 14 page fetches.
- Playwright screenshots at 1440x1000 and 390x844 of 17 public pages. No logins.
- The templates were rendered statically. The `x-dc` wrapper was stripped and the bindings were filled with the 5-point stress state. They were captured at 1440 and at 390 wide.
- Screenshots are in the session scratchpad. They are not committed.

"Seen" means seen in a screenshot or on a fetched page. "Gated" means a login, demo request or paywall blocked it. "Reported" means the claim comes from the winner's or the award body's own text. Principles are extracted. No proprietary design is copied.

---

## A. Winners table

| # | What it is | Award, year | URL | What we could see |
|---|---|---|---|---|
| W1 | NatWest x Learning Pool, *Pay and Bonus Decisions*. A blended programme with a decision simulation for people leaders. | Learning Technologies Awards 2025: Gold, Excellence in the design of learning content (Commercial, UK). Also Gold, Best Learning Technologies Project (Commercial, UK). | learningtechnologies.co.uk/2025-winners; learningpool.com/case-studies/natwest | **Gated: no demo.** Reported design: a live virtual kickoff for 7,450 leaders, then a virtual simulation where leaders "make critical decisions about pay and bonus rewards based on contextual employee information". It used "authentic scenarios" and let leaders "explore the consequences of different decisions, receive feedback". It was built on "Learning by Doing" and delivered in 14 weeks. Reported outcome: a 61% drop in pay and bonus appeals. Sources disagree on reach (11,000 vs 12,000 leaders) and savings (over £5M vs 480,000 hours). Judges: "surprises, challenges and engages." |
| W2 | Q-CTRL *Black Opal*. A quantum computing course platform. | Learning Technologies Awards 2025: Gold, Excellence in the design of learning content (Commercial, International) | q-ctrl.com/black-opal | **Marketing page seen. Lessons gated behind signup.** Seen: a dark UI with large sans display type, product screenshots, and the award logos. Reported: "12 learning modules and over 500 interactive activities". The page also says "13 skills", so its own counts disagree. Each lesson offers Read, Apply and Ask modes. A Bloch-sphere control has angle sliders plus Reset and Submit. There is a drag-and-drop scale activity. The math builds up gradually from analogies ("Superposition in a jump rope", an "Analogy toolbox"). Also reported: works on "any device", WCAG 2.1 AA with a VPAT, and an admin progress dashboard. No outcome numbers are published. Judges: "makes it accessible to all." |
| W3 | HOT and Safer Business Network, *WAVE E-Learning Initiative* | Learning Technologies Awards 2025: Gold, Excellence in the design of learning content (Public and non-profit) | learningtechnologies.co.uk/2025-winners | **Gated: no public demo found.** Judges: "combined graphic-novel style imagery with purposeful interactions to address a sensitive topic." |
| W4 | NHS Blood and Transplant x Make Real, *Crossmatching* | Learning Technologies Awards 2025: Gold, Best use of simulations or virtual environments | same | **Gated.** Judges: "A very rigorous process and very well created." |
| W5 | *The Agency Algorithm*, an AI ethics e-learning experience built in Storyline | Best of DemoFest 2025 (Learning Guild, webinar 9 Dec 2025): Best Soft Skills Project | msit.bloomu.edu/amv42591/AgencyGOLD/story.html | **Seen (first 3 screens).** A full-bleed 3D render on a grey-teal gradient. Thin geometric sans title. One large teal "BEGIN" button. A letterboxed fixed 16:9 slide canvas. Screen 2 is a name-entry gate before any content ("Enter your name to begin"). Also on screen: a top-right MENU, a bottom-right BACK, and a promise of "interactive thought experiments" and "difficult choices in high-stakes situations". |
| W6 | *Succulent Success*, a care simulation (Storyline plus Unity) | Best of DemoFest 2025: Best Student Project | emilygreeninger.com/projects/succulent-success/story.html | **Splash only.** A black screen with a title and a play button. The content is inside a canvas player. |
| W7 | *Life of Agnes*, a medieval branching game | Best of DemoFest 2025: Best in Show, Non-Vendor | msit.bloomu.edu/mlf52460/LifeOfAgnes/story.html | **Did not render** in 10 seconds (a blank dark canvas). |
| W8 | *Outbreak: Pandemic Response Simulation Game* | Best of DemoFest 2025: Best in Show, Vendor | arthalearning.com/portfolio | Not opened (budget). Listed as public. |
| W9 | *Sesame Grief Project* ("Seasons of Grief") by Sesame Workshop with HELLO MONDAY/DEPT | Webby Awards 2025: People's Voice, Websites, Education | grief.sesameworkshop.org/en/ | **Seen, desktop and phone.** A loader gate with a percentage counter, then "Enter experience". A centred large sans H1. One watercolour illustration in a circular "window" that grows as you scroll. Short text blocks (about 25-30 words) are pinned left. A right-edge vertical chapter rail ("00 / Intro" and 4 dots). "Scroll to explore" sits bottom-left. The phone layout stacks the same pieces cleanly. |
| W10 | *25 Years of Wikipedia* (Wikimedia Foundation) | Webby Awards 2026: People's Voice, Websites, Education | wikipedia25.org/en/ | Not opened (budget). |
| W11 | Year Up United x D2L | Brandon Hall HCM Excellence 2025: Gold, Best Custom Content (reported by D2L) | d2l.com newsroom | **Gated.** Press release only. The category is "Best Custom Content", not "Best Advance in Custom Content". |
| W12 | VU Online (Victoria University) | LearnX 2025: Platinum, Best eLearning Design - Simulation, and Best eLearning Design - Product | vu.edu.au news | **Gated.** The news item gives no design detail and no demo. |

**What this tells us.**

- **Award-winning L&D work is mostly invisible.** Of 12 winners, we could see only 3 in any depth (W5, W9, and W2's marketing page). The rest are behind client walls or exist only as press releases.
- **Judges reward a performance need plus evidence.** The common thread is not a visual style. It is a clear performance need, a decision-making simulation (W1, W4, W5, W8), and outcome data (W1's 61%). This matches `layout-patterns.md` section E.
- **Visible "showcase" winners use fixed-canvas players.** These are Storyline slides and loader gates. They look striking in a webinar. They are weak on reading, search, accessibility and phones (see section E).

---

## B. Design moves that recur (D1-D12)

**D1. Decision first, explanation second.**
- Seen: W1 (decisions on "contextual employee information", then consequences and feedback). W5 ("confront difficult choices"). Brilliant's "How Brilliant teaches math" ("often asks a question before presenting a procedure"). Its home page demo leaves blanks to fill in `(x+4)(x+2) = x² + _ + _ + _`.
- Apply: Open each lesson's deal-desk moment with a decision: "You are the credit officer on Cedar Court. Vacancy is about to rise 5 points. Does income still pay the loan?" The learner commits to an MC answer, then uses the desk, then reads the explanation.

**D2. One manipulable model per idea, placed next to the prose.**
- Seen: Seeing Theory (prose column at left, live chart at right). Setosa "Conditional probability" (three sliders drive a live simulation and the formula values). Black Opal (Bloch sphere with angle sliders). Bartosz Ciechanowski "GPS" (one draggable figure per idea, inline in the column).
- Apply: The deal desk is this model. Keep one desk per lesson, and tie it to the lesson's single key idea. Do not add a second widget.

**D3. Colour links words to marks.**
- Seen: Setosa (the words "red shelf" and "blue shelf" are tinted to match their bars, sliders and counts). Bartosz (the word "yellow figurine" is the same yellow as the object).
- Apply: Give each running input a fixed colour token across prose, formula, worked example and desk. For example: net cash flow in brand green, debt service in ink, rent in brass. Keep a second cue (underline style or a small marker) so colour is never the only signal.

**D4. Numbers that update in place, inside sentences.**
- Seen: Tangle ("When you eat [3 cookies], you consume 150 calories"; the dotted-underlined number is draggable). Setosa shows each value in two forms ("0.200 or 20.0%").
- Apply: In the "Reading" line, make the shock an inline adjustable number: "If vacancy rises [5] points, coverage falls to 0.9943x." Build it as a keyboard spin button, not drag-only.

**D5. Show the working live, not just the answer.**
- Seen: Setosa updates the formula's terms and an "actual vs expected" bar pair as the sliders move. Khan Academy's hints add up to a full worked example ("viewing all the hints produces a worked example", from Khan's chief learning officer).
- Apply: Under the desk result, print the live substitution: `$395,000 − 5 × $7,800 = $356,000`, then `$356,000 ÷ $358,050 = 0.9943x`.

**D6. Feedback explains both right and wrong, at the moment of commitment.**
- Seen: Duolingo "Explain My Answer" (shows the correct form beside the learner's answer, with a short rule, after both right and wrong answers). Codecademy post-quiz review (testing found learners "valued explanations for both correct and incorrect answers"). After launch, scores rose from 84% to 87%. Brilliant ("a chance to revise rather than simply marking the attempt wrong").
- Apply: Label "Your answer" and "Correct answer" in text and with an icon, not only by colour. Give a rationale for every option. Add "Show the working" as a step reveal.

**D7. Brief immediate feedback; fuller review at the end.**
- Seen: Codecademy kept popups short "to keep learners' momentum". Longer explanations moved to a review page with the score at the top, in-page navigation to missed items, and a retake option.
- Apply: In-lesson checks give one or two sentences. The module quiz ends with a review page: score, missed items first, each linked back to the lesson section.

**D8. Position in a sequence is always visible and calm.**
- Seen: Sesame's right-edge chapter rail ("00 / Intro" and dots). Khan's mastery levels (attempted, familiar, proficient, mastered). Black Opal's admin progress table (reported).
- Apply: Keep the module bar. Add in-lesson section progress ("Section 3 of 5 · 2 checks left · about 6 min"). Show mastery per skill (formula ID), not points.

**D9. Short text blocks, one idea per screen.**
- Seen: Sesame (about 25-30 words per scene). Brilliant (each section is "a manageable idea", starting with "the simplest useful case").
- Apply: Our 25-word sentence rule already fits. Cap explanatory blocks at about 3 sentences before a figure, example or check.

**D10. One strong visual metaphor carries the identity.**
- Seen: Sesame (the circular watercolour window grows into the scene). W5 (one 3D object per screen). Brilliant (a warm off-white ground, a serif display face, one mascot).
- Apply: Our metaphor is the **deal sheet**: the term-sheet and credit-memo artefact a lender actually uses. Push ledger rules, tabular figures and memo headers further. Generic rounded cards are not an identity.

**D11. Analogy before notation, then notation exactly.**
- Seen: Black Opal ("Superposition in a jump rope", then "Do you |ket⟩ it?"). Bartosz builds a simple positioning system first, then refines it "step-by-step".
- Apply: Use one plain analogy per formula (for example, "the cushion is the slack in the rope"). Then show the exact formula with a "Where:" list (layout-patterns P6).

**D12. Responsive by reflow, not by shrinking a canvas.**
- Seen (positive): Sesame and Bartosz reflow cleanly at 390 px. Seen (negative): Seeing Theory at 390 px keeps its two-column split; the text overlaps the menu and squeezes into a 150 px column. W5 and W6 are fixed 16:9 canvases.
- Apply: At phone width, the desk becomes an in-flow card placed right after the worked example. Navigation moves to a drawer. The title must be the first thing on screen.

---

## C. Teaching-with-numbers patterns

| Pattern | Where seen | What it does | BPL Academy use |
|---|---|---|---|
| **C1. Predict, then manipulate** | Brilliant (question before procedure); W1 (decide, then see consequences) | Makes the learner commit. The model then confirms or corrects their intuition. | The check question comes first. The desk unlocks after an answer, or stays visible but starts at 0 points. |
| **C2. Linked slider and readout** | Setosa, Seeing Theory, Black Opal | Shows sensitivity: how much the output moves per unit of input. | The vacancy-shock slider. Add a 1.00x threshold line and a cushion bar. |
| **C3. Inline adjustable numbers** | Tangle | Puts the variable inside the sentence that interprets it. | The "Reading" line and the key-highlights sentence. |
| **C4. Live substitution line** | Setosa (formula values update) | Keeps the arithmetic visible, so the result is never a black box. | Under the desk verdict. Use mono figures, the `money()` format and a true minus sign. |
| **C5. Step reveal** | Khan hints adding up to a worked example | Learners pull help one step at a time and explain each step to themselves. | The worked example becomes Inputs, Substitute, Compute, Read, then Policy test. Each step opens on request, with all open in print. |
| **C6. Actual vs expected** | Setosa (two stacked proportion bars) | Compares a result with a benchmark visually. | Coverage vs the minimum as two bars, with the minimum cited by rule ID in a footnote. |
| **C7. Two forms of a number** | Setosa ("0.200 or 20.0%") | Builds fluency between representations. | Cushion as "$36,950 or 4.74% of rent". The template already does this. Keep it everywhere. |
| **C8. Simulation with play and speed controls** | The Pudding "afterlife of pi" card (Play, Restart, slow, medium, fast), seen as a thumbnail only | Lets a process unfold at the learner's pace. | Interest accrual over a month (Actual/360) as a day-by-day stepper. Use with care. |
| **C9. Rationale per option** | Duolingo, Codecademy, our own template code | Turns a wrong answer into a targeted lesson. | Already in `Lesson.dc.html` logic. Show it for the chosen option and the correct one. |
| **C10. Practice until proficient** | Khan mastery levels; Codecademy's minimum score before moving on | Separates practice from proof. | Practice checks allow retry. The graded quiz does not. Show "proficient" per formula ID. |

---

## D. Critique of our three templates

### D.1 What the templates are

**`Main.dc.html` (design system, 1440 wide).** "Editorial calm. A desk for the numbers."
- Three typefaces: Source Serif 4 for reading, IBM Plex Sans for interface, IBM Plex Mono for figures.
- Two palettes: a warm learning surface (ground #F6F4EF, brand green #0F5A47, brass #8A5D0B) and a dark "deal desk" (#16201C with amber #E0A23A).
- Pass, fail and info states. A 4-64 spacing scale. Radii of 6, 10 and 14.
- Components: buttons, chips, a progress bar, Key highlights, a Worked example card, Watch out, a Policy note, a Market data note, MC option states, a Deal desk readout and a citation marker.

**`Lesson.dc.html` (desktop).** Three columns.
- Left: module navigation with a % bar and ticks, plus course files.
- Centre: a 760 px article. It contains a mono meta line, a serif H1, a lede, "You will be able to" (2 outcomes), Key highlights, "The idea", a formula figure, a Cedar Court worked example table, an MC check with live per-option rationale, and prev/next.
- Right: a dark deal desk with an input ledger, a 0-10 point vacancy slider, a live coverage verdict, and a policy footnote.

**`LessonPhone.dc.html` (390 wide).**
- A compact header with menu and search icons, then the disclaimer.
- The same content, condensed. Key highlights sits in a `<details>`.
- The deal desk is collapsible and defaults to open at 5 points.
- The check shows 2 static options.
- A sticky bottom bar shows module % and "Next lesson".

### D.2 Scores (0 = absent, 1 = weak, 2 = solid, 3 = best-in-class)

| Criterion | Main | Lesson | Phone | Notes |
|---|---|---|---|---|
| Hierarchy | 2 | 2 | 2 | The title block and outcomes are strong. On desktop, the dark desk is the heaviest object on the first screen before the learner needs it. |
| Typography | 3 | 3 | 2 | A strong serif, sans and mono system with good measure. Phone: the formula wraps mid-term ("Annual / debt service"). |
| Colour | 2 | 2 | 2 | Disciplined. Text contrast passes (4.5:1 or better everywhere checked). There are no variable-linked colours (D3) and no chart palette. |
| Interaction and feedback | 1 | 2 | 1 | Lesson: the slider works and the MC rationale is good. But a click instantly reveals; there is no commit, no retry and no step reveal. Phone: the check does nothing and shows 2 of 4 options. |
| Teaching with numbers | 2 | 2 | 1 | Substitution rows are good. The desk shows the result but not the working, and there is no visual of the cushion. The phone drops inputs and the reading line. |
| Progress and motivation | 1 | 2 | 2 | Module % and ticks. "1 of 2" checks. No in-lesson section progress, time left or per-skill mastery. |
| Mobile | 1 | 1 | 2 | Desktop Lesson at 390 px: the whole module nav stacks first, pushing the H1 below the fold. Phone: good sticky bar and 44 px targets, but 2400 px min-height leaves a blank tail. |
| Accessibility | 2 | 2 | 2 | Labels, `aria-current`, focus ring and 44 px targets are good. Fails: MC option borders are #C9C2B4 on white at 1.77:1, and the to-do circle is #9AA39F at 2.35:1 (WCAG 1.4.11 wants 3:1). `role="status"` on the desk announces every slider step. The tick `aria-label` sits on a plain `span`. |
| Distinctiveness | 2 | 2 | 2 | The editorial serif plus a dark desk is more distinctive than CFI or Coursera. But Brilliant now uses a similar warm off-white with a serif display. The deal-sheet metaphor is underused. |
| **Total (of 27)** | **16** | **18** | **16** | |

### D.3 Defects found (fix before any build)

1. **Wrong running-deal label in `Main.dc.html`.** The worked example and desk read "Cedar Court" but use $434,000 ÷ $330,772.68 = 1.3121. Those are RD-COM-01 Birchwood Plaza month-24 term-loan figures (NCF $434,000; ADS on $3,900,000; F-COM-08). Cedar Court's coverage in `data/running-deals/running-deals.md` is $395,000 ÷ $358,050 = 1.10x (F-MF-12).
2. **Label drift in `Lesson.dc.html`.** The formula figure says "Annual debt service". The example and desk say "Test debt service". The running deal defines it as interest coverage at the higher of 7.65% and 8.25%: $4,340,000 × 8.25% = $358,050 (F-MF-12, minimum 1.00x under MF-BR-07). The lesson should use one term and cite F-MF-12 in a source note.
3. **The phone spoils its own question.** The phone desk opens at 5 points, showing 0.9943x and "INCOME NO LONGER PAYS THE LOAN" directly above "Vacancy rises five points. What happens to coverage?"
4. **"Full precision" is a 4-decimal display made with `toFixed(4)`.** The 4 decimals are fine for display. But CLAUDE.md requires `roundHalfUp` for display, and the label should read "to 4 decimals".
5. **Is $7,800 per vacancy point right?** The desk takes $7,800 (1% of $780,000 GPR) off cash flow per point. Cedar Court's management fee is 4% of EGI, so lost rent may also cut the fee. Confirm the intended stress convention in the Course Bible before shipping. It is not stated in `running-deals.md`; do not guess.
6. **The phone check is static.** It shows 2 of 4 options and has no handler or feedback.

### D.4 Ranked changes

1. **Make the deal desk show its working and the cushion.**
   - Add a live substitution line (C4).
   - Add a horizontal bar: cash flow vs test debt service, with a 1.00x marker and the cushion shaded (C2, C6).
   - On desktop, make the desk `position: sticky` so it stays beside the worked example and check.
   - Seen in: Setosa, Seeing Theory, Black Opal.
2. **Reorder to predict, then manipulate, then explain (C1, D1).**
   - Put the check before the desk interaction, or start the desk at 0 points and say "Answer the check, then test it here."
   - Fix the phone spoiler (defect 3).
3. **Commit, then rich feedback (D6, D7).**
   - Select an option, then "Check answer".
   - Mark "Your answer" and "Correct answer" with a text label and an icon.
   - Give a rationale for the chosen and correct options, then a "Show the working" step reveal (C5).
   - Allow one retry in practice checks. Make the phone check fully working, with 4 options.
4. **Fix data integrity (defects 1, 2, 4, 5).**
   - Generate every template number from `data/running-deals/` and `fixtures.json`.
   - Use `roundHalfUp`/`money` for display.
   - Use one term for the denominator, with the formula ID in the source note.
5. **Mobile reflow (D12).**
   - Below about 900 px, move module navigation into a drawer so the H1 is the first content.
   - Place the desk card right after the worked example.
   - Keep the phone's sticky progress bar. Drop the fixed `min-height: 2400px`.
6. **Variable colour linking (D3) and inline adjustable numbers (D4).**
   - Assign tokens for NCF, debt service and GPR. Use them in prose, formula, example and desk.
   - Make the "Reading" sentence's shock value a keyboard spin button.
7. **In-lesson progress and mastery (D8, C10).**
   - Add "Section 3 of 5 · 2 checks left · about 6 min".
   - End each lesson with a summary card: checks right, formulas practised by ID, and "proficient" status. No points, no streaks.
8. **Accessibility and non-text contrast.**
   - Raise option and track borders to at least 3:1 (for example, #8C8574 or darker on white; check it).
   - Give the to-do circle text or a 3:1 colour.
   - Debounce the desk's live region (announce on release).
   - Put state words in visible or screen-reader text ("Done", "Current", "Not started").
9. **Lighten the desk's first impression.** Keep the dark desk, but shrink its idle state to the input ledger plus a "Try a shock" prompt. It then expands on first interaction. This keeps the article the first focus.
10. **Lean into the deal-sheet identity (D10).** Use ledger rules, tabular-figure alignment, memo-style section heads ("Inputs / Working / Reading / Policy") and a term-sheet header on the running-deal card. Cut decorative card chrome where a ruled table will do.
11. **Design-system gaps (Main).** Add specs for hover, focus, pressed, disabled and loading. Add the slider, step-reveal, spin-button, chart and review-page components. Add a phone type scale and dark-mode tokens.
12. **Print and export.** Provide a print stylesheet that opens all step reveals and prints the desk at its default state. This is useful for NASBA QAS review evidence.

---

## E. What NOT to copy

- **Streaks, XP, leagues, leaderboards and mascots** (Duolingo, Brilliant's "Koji"). They push daily-habit metrics, not credit judgment. Adult professionals read them as childish. Khan teachers report students fixating on "green and grey right/wrong dots".
- **Loader gates and "Enter experience" splash screens** (W9). They add a wait and a click before any learning. They suit an emotional story, not a reference-heavy course.
- **Name-entry gates and fake personalisation** (W5, "Enter your name to begin"). They create friction and a privacy question for no learning gain.
- **Fixed-canvas slide players** (W5, W6, W7). Text is not searchable or selectable. They letterbox on wide screens, shrink on phones, and are hard for screen readers. W7 did not render at all in 10 seconds.
- **3D hero renders and decorative imagery** (W5, Black Opal marketing). They cost load time and say nothing about the numbers.
- **Scroll-jacking and parallax scenes** (W9). They work for 6 scenes on grief. They would fight a learner scrolling back to re-read a worked example.
- **Side-by-side explainers that do not reflow** (Seeing Theory at 390 px: overlapping text in a 150 px column).
- **Ads, email capture and promo bars above content** (IxDF "Get 1 Powerful Email Each Week" before the definition; Investopedia ad blocks between paragraphs; a Khan donation modal over the unit page).
- **AI tutors that hand over answers.** Even Brilliant positions its tutor as "not a cheating machine". Any AI help must ask guiding questions and must never state a policy limit that is not in the Model Credit Policy.
- **Confetti, sound effects, countdown timers on practice, and auto-advance.** They raise anxiety and remove the pause where a learner checks their arithmetic.
- **Points-for-attempts mastery inflation** (requested in the Khan forums). Proficiency must mean correct answers at full precision.

---

## F. Sources (all accessed 22 Nov 2026)

| Source | URL | Type | Notes |
|---|---|---|---|
| Learning Technologies Awards 2025 winners | https://www.learningtechnologies.co.uk/2025-winners | Award body | Gold winners and judges' quotes for W1-W4 |
| Learning Pool (now confirm.com), double Gold 2025 | https://confirm.com/blog/learning-pool-wins-double-gold-at-2025-learning-technologies-awards | Winner PR | NatWest; 14 weeks; no design detail |
| Learning Pool NatWest case study and blog (via search snippets) | https://learningpool.com/case-studies/natwest | Winner PR | 7,450 kickoff; 61% fewer appeals; figures disagree between pages |
| Q-CTRL Black Opal | https://q-ctrl.com/black-opal | Winner product page | Screenshots plus fetched text |
| Best of DemoFest webinar project list, 9 Dec 2025 | https://www.learningguild.com/wp-content/uploads/251209BestofDemoFest_project-information.pdf | Award body PDF | Categories and public links for W5-W8 |
| The Agency Algorithm demo | https://msit.bloomu.edu/amv42591/AgencyGOLD/story.html | Winner demo | 3 screens captured |
| Succulent Success demo | https://emilygreeninger.com/projects/succulent-success/story.html | Winner demo | Splash only |
| Life of Agnes demo | https://msit.bloomu.edu/mlf52460/LifeOfAgnes/story.html | Winner demo | Did not render |
| Webby 2025 Education, Sesame Grief Project | https://winners.webbyawards.com/2025/websites-and-mobile-sites/general-desktop-mobile-sites/education/332965/sesame-grief-project | Award body | People's Voice |
| Sesame "Seasons of Grief" | https://grief.sesameworkshop.org/en/ | Winner site | Desktop and phone screenshots |
| Webby 2026 Education, 25 Years of Wikipedia | https://winners.webbyawards.com/2026/websites-and-mobile-sites/general-desktop-mobile-sites/education/380761/25-years-of-wikipedia | Award body | Not opened |
| D2L Brandon Hall 2025 release | https://www.d2l.com/en-eu/newsroom/d2l-jointly-awarded-eight-2025-brandon-hall-group-hcm-excellence-awards/ | Winner PR (search snippet) | Category name check |
| VU Online LearnX 2025 | https://www.vu.edu.au/about-vu/news-events/news/vu-online-awarded-learnx-platinum-in-5-categories | Winner PR | No design detail |
| Brilliant home page | https://brilliant.org/ | Product | Screenshots |
| How Brilliant teaches math | https://brilliant.org/resources/choosing-brilliant/how-brilliant-teaches-math/ | Product docs | Problem-first; feedback "to revise" |
| Seeing Theory, Basic Probability (Brown University; site marked archived) | https://seeing-theory.brown.edu/basic-probability/index.html | Explainer | Desktop good; phone broken |
| Setosa, Conditional probability explained visually | https://setosa.io/ev/conditional-probability/ | Explainer | Colour-linked sliders and bars |
| Bartosz Ciechanowski, GPS | https://ciechanow.ski/gps/ | Explainer | Inline colour-linked words; phone reflow |
| Tangle (Bret Victor) | https://worrydream.com/Tangle/ | Explainer library | Inline adjustable numbers |
| The Pudding home page | https://pudding.cool/ | Data essays | Simulation-control thumbnail; a guessed essay URL returned 404 |
| NYT Upshot buy-vs-rent calculator | https://www.nytimes.com/interactive/2024/upshot/buy-rent-calculator.html | Explainer | **Blocked** (bot wall). Not assessed. |
| Khan Academy unit page | https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial | Product | Donation modal and cookie banner covered the content |
| Khan Academy practice and mastery (blog and help, via search snippets) | https://blog.khanacademy.org/?p=963 | Product docs | Hints add up to a worked example; mastery levels |
| Duolingo, Explain My Answer | https://blog.duolingo.com/explain-my-answer-now-free | Product blog (search snippet) | Feedback on right and wrong answers |
| Codecademy, designing post-quiz review (6 Sep 2024) | https://www.codecademy.com/resources/blog/behind-the-build-designing-post-quiz-review | Product blog | Score 84% to 87% after launch |
| Interaction Design Foundation, UX Design topic | https://www.interaction-design.org/literature/topics/ux-design | Product | Email capture above content |
| Investopedia, DSCR | https://www.investopedia.com/terms/d/dscr.asp | Reference | Key Takeaways box; ads between paragraphs |
| Our templates | scratchpad `templates/project/Main.dc.html`, `Lesson.dc.html`, `LessonPhone.dc.html` | Internal | Rendered statically |
| Running deals | `data/running-deals/running-deals.md` (snapshot 22 Nov 2026, current per `docs/SNAPSHOT.md`) | Internal | Cedar Court and Birchwood figures |

Not reached (budget, or no public artefact): MasterClass lesson pages (gated), Coursera and edX lecture pages (login), Kineo and Mind Tools award case studies, Awwwards and CSS Design Awards education winners (no 2025 education Site of the Day confirmed), Articulate E-Learning Heroes showcase (403 on the article fetched), Bloomberg and Morningstar explainers.

---

## Self-check

1. Which of the 12 winners could we actually inspect? *W2 (marketing page only), W5 and W9 in depth, and W6 as a splash. The rest were gated.*
2. Why is "decision first" (D1) ranked above visual polish? *The winners' judges cite performance need, interactivity that "reinforces learning", and outcome data. None cites style.*
3. What is wrong with the `Main.dc.html` worked example? *It labels Birchwood Plaza's $434,000 ÷ $330,772.68 as Cedar Court.*
4. Why must the phone desk not default to 5 points? *It shows the answer to the check placed directly below it.*
5. Which WCAG criterion do the MC option borders fail, and by how much? *1.4.11 Non-text Contrast: 1.77:1 against 3:1 required.*

## What to look up yourself

- Whether Cedar Court's vacancy stress should also reduce the 4% management fee. The Course Bible governs; `running-deals.md` does not say.
- The full Learning Pool NatWest case study and webinar, to settle the 11,000 vs 12,000 leaders and £5M vs 480,000 hours discrepancy before quoting either.
- The current Brandon Hall HCM Excellence winners list (excellenceawards.brandonhall.com/winners/). Check for any Best Custom Content Gold with a public demo.
- Black Opal's free tier, if one exists without signup, to see a real lesson screen.
- Best of DemoFest *Outbreak* (arthalearning.com/portfolio) and *25 Years of Wikipedia*, which this study did not open.
- MasterClass and Coursera lesson pages, which need an account. Do this only with your own login and only for personal review.

## How to check it

- Re-run the screenshots: `node` with `createRequire("C:/Users/A/bpl-course/package.json")("@playwright/test")`, chromium, viewports 1440x1000 and 390x844, on the URLs in section F. Compare with the "What we could see" column.
- Confirm defect 1: search `data/running-deals/running-deals.md` for `$434,000` and `$330,772.68`. Both sit under RD-COM-01 (Birchwood Plaza), not RD-MF-01.
- Confirm the contrast figures: compute WCAG ratios for #C9C2B4 on #FFFFFF (1.77) and #9AA39F on #F6F4EF (2.35) in any contrast checker.
- Confirm the phone reflow: render `Lesson.dc.html` at 390 px and check that the H1 sits below the first screen.
- Arithmetic: $395,000 − 5 × $7,800 = $356,000. $356,000 ÷ $358,050 = 0.99427…, shown as 0.9943x. $36,950 ÷ $780,000 = 4.737…%, shown as 4.74%.
