# BPL Academy core course: design review

Reviewed: 22 Nov 2026. Page: `exports/core-course.html` (built from `scripts/course_site/template.html`).
Bar: award-level learning product (best finance-education platforms and top university online programs).
Scope: the design system, not lesson wording. C0 and C3 are the rewritten long-form modules.

Screenshots: 116 viewport captures at 1440x900 (`desk-*`) and 390x844 (`mob-*`), light and dark, in
`C:\Users\A\AppData\Local\Temp\claude\94e49ebb8f6c1066\914daea0-d3ea-49d0-a4d7-2f1807e15a53\scratchpad\design\shots\`
(scratchpad, may be cleared; re-run `scratchpad\design\capture.mjs` to rebuild). File names below refer to that folder.

Measured facts used below (Playwright, 1440 px):

| Step | Page height | Words | Rule/formula chips | Tables | Diagrams |
|---|---|---|---|---|---|
| C0 Learn | 35,560 px (68,990 px at 390) | 11,563 | 62 | 24 | 4 |
| C3 Learn | 34,403 px (63,754 px at 390) | 11,062 | 179 | 17 | 3 |
| C3 Quiz | 8,983 px | 727 | 19 | 0 | 0 |
| C7 Learn | 6,075 px | 1,773 | 36 | 4 | 2 |

C3 Learn has one chip every 62 words. Each Learn step has 1 H2 and 7 H3s and no in-step navigation.

---

## 1. Scores

| Area | Score | One-line justification |
|---|---|---|
| First impression and visual identity | **4/10** | Clean and calm, but generic: no "BPL Academy" brand, no mark, no imagery, one sans family, nothing memorable. |
| Information architecture and navigation | **4/10** | Steps are a good idea, but a 35,000 px Learn step has no outline, no in-step progress and no search or glossary. |
| Reading experience | **5/10** | Good measure (about 75 characters) and 1.6 leading, but flat hierarchy, raw LaTeX, raw `[VERIFY]` text, unreadable diagrams and noisy ID chips. |
| Interactive components | **5/10** | Exercise engine is solid. Quiz is multiple choice rendered as free text with self-marking; practice shows the answer reveal before the answer box. |
| Consistency (spacing, radii, states) | **6/10** | Tokens exist and are mostly used, but five radii, four border weights, hard-coded reds and mixed pill fonts. |
| Mobile (390 px) | **3/10** | The first screen of every step is 100% chrome; diagrams shrink to about 4 px text; stacked tables break inline content. |
| Dark theme | **6/10** | Well-tokenized and calm, mermaid follows the theme; hard-coded `#b3261e` fails contrast on dark panels. |
| **Overall** | **4.5/10** | A sound, honest engineering base that reads as an internal tool, not a premium course. The fixes below are mostly layout and components, not a rewrite. |

---

## 2. Findings, ranked

Severity: **critical** blocks learning or credibility; **major** is a clear gap against the bar; **minor** is polish.

### Critical

**F1. On mobile, the first screen of every step is all chrome, no lesson.**
- Screens: `mob-light_c03_2-learn.png`, `mob-dark_c03_3-exercises.png`, `mob-light_c07_quiz.png` (all 11 mobile step shots).
- Seen: sidebar block (brand, meter, sync note, "Show modules") about 260 px, label box 56 px, eyebrow and three-line H1 120 px, draft stamp 115 px, step pills wrapping to 3 rows 110 px, step bar 30 px. Lesson text starts at about 860 px, below an 844 px viewport.
- Why: a learner sees the same header on every tap of "Next". It feels like nothing changed and pushes the content off screen.
- Fix:
  - Replace the mobile sidebar block with a 56 px sticky app bar: menu icon, "BPL Academy" mark, module code, progress ring (24 px), search icon.
  - Collapse the training label and draft stamp into one 32 px line under the app bar: `Training model policy · Draft` with an info button that opens the full text. Keep the full label text in the DOM and in the drawer for audit.
  - Steps: a single 44 px row, `overflow-x: auto; scroll-snap-type: x mandatory`, active step scrolled into view, or a `Step 2 of 8 · Learn ▾` select. Never wrap.
  - Module title on steps after Overview: 1 line, 20 px, truncated; full H1 only on Overview.
  - Target: lesson text visible within the first 260 px.

**F2. Learn is one 35,000 px scroll with no wayfinding.**
- Screens: `desk-light_c03_2-learn-18.png`, `-45.png`, `-72.png`; `desk-light_c00_2-learn-45.png`; `mob-light_c00_2-learn-72.png`.
- Seen: 11,000 words, 7 sections, 17-24 tables, all in one panel. No "On this page", no reading progress, no section numbers, and the Back/Next pager sits only at the very end. The step progress bar shows 2 of 8 the whole time.
- Why: learners new to lending cannot tell where they are, how much is left, or resume mid-step. This is the largest gap against leading platforms.
- Fix (do both):
  - **Split Learn into pages by H3** ("Learn 3 of 7: Time value of money"). Each page is about 1,600 words, about 8 minutes. Sub-steps show under the Learn tab as a mini stepper. Remember the last page per module.
  - **Sticky "On this page" rail** at 1200 px and wider: 240 px, `position: sticky; top: 72px`, lists H3/H4 with scrollspy (`IntersectionObserver`, rootMargin `-40% 0 -55% 0`), a 2 px reading-progress line, and per-section minutes. At under 1200 px it becomes a "Contents" button in the sub-bar that opens a sheet.
  - Add a pager at the top-right of each page (small) and a full-width pager at the bottom ("Next: Amortizing payments, 9 min").
  - Drop the redundant "Teach" H2 that sits under the "Learn" step (`desk-light_c03_2-learn.png`).

**F3. Math shows as raw LaTeX.**
- Screen: `mob-light_c03_2-learn-18.png`, `mob-dark_c03_2-learn-18.png`: a code block reads `FV = PV (1+i)^{n} \qquad PV = \frac{` and is clipped. Body text uses `(1 + i)^n` with a caret.
- Why: in a finance-math module this is the most visible credibility failure.
- Fix: load KaTeX 0.16.x from cdnjs (`katex.min.js`, `auto-render.min.js`, `katex.min.css`). Render `$...$` and `$$...$$` after Markdown, before `linkIds`. Wrap display math in a **Formula card** (spec in section 4): formula centered at 1.15em, the formula ID and name as a caption, variable legend as a two-column definition list. Provide `aria-label` from the TeX source. On mobile allow horizontal scroll inside the card only.

**F4. `[VERIFY: ...]` source tags render as raw bracket text when they contain italics.**
- Screens: `desk-light_c03_2-learn-45.png` ("[VERIFY: OCC, *Comptroller's Handbook...*; checked 22 Nov 2026]"), `desk-light_c00_2-learn-72.png` ("[VERIFY: OCC Bulletin 2024-29, *Commercial Lending: Refinance Risk*...]").
- Why: `TAG_RE` runs on single text nodes; Markdown italics split the tag across nodes, so it never matches. The same paragraph also shows a correctly parsed "Source" badge, so the page looks inconsistent and unfinished.
- Fix: convert tags at the Markdown string level before `marked.parse`: replace `\[(VERIFY:|POLICY\b|CONFIRM\b)([^\]]*)\]` with `<cite data-kind="..." data-src="...">` placeholders (escape the text), then style them. Add a build-time check that fails if the rendered DOM text still contains `[VERIFY`.

**F5. Diagrams are unreadable at most sizes.**
- Screens: `desk-light_c00_2-learn-45.png` (left-to-right flow scaled to about 5 px text inside a worked example), `mob-light_c00_2-learn-18.png` and `-72.png` (illegible), `desk-light_c03_2-learn-72.png` (a decision diamond 300 px tall dominates the screen), `mob-light_chips-in-prose.png`.
- Why: `svg { max-width: 100% }` shrinks wide diagrams instead of letting them scroll; mermaid diamonds grow with label length.
- Fix:
  - Render with `flowchart: { useMaxWidth: false, nodeSpacing: 28, rankSpacing: 36, htmlLabels: true, wrappingWidth: 180 }` and `themeVariables.fontSize: "14px"`.
  - If the SVG's natural width exceeds the container, keep natural size inside `overflow-x: auto` with edge fade masks, plus an "Expand" icon button that opens a full-screen lightbox (pinch-zoom on mobile).
  - Minimum rendered label size 12 px; below that, show the "Diagram as text" list by default on mobile.
  - Author rule (for content): prefer `flowchart TD` and labels under 40 characters; keep rule IDs out of node text (they cannot be clicked there).
  - Give the figure a numbered caption ("Figure 3.2 · Test-rate decision") above the diagram.

**F6. Stacked (mobile) tables split inline content into the wrong column.**
- Screens: `mob-light_drawer.png`, `mob-dark_drawer.png`: "( F-CORE-33 )." lands in the label column under "Rule (course baseline)".
- Why: `.tbl.stack td { display: grid; grid-template-columns: ... }` makes every inline child (text run, chip span) its own grid item.
- Fix: wrap each cell's children in `<span class="v">` at decorate time, so the grid has exactly two items (`::before` label and `.v`). Or switch to `td { display: block } td::before { display: block; margin-bottom: 2px }` (label above value), which also reads better for long labels such as "Refinance $3,900,000 if the loan had been interest-only: DSCR" (`mob-light_c03_2-learn-45.png`). For tables with long numeric headers, prefer a horizontally scrolling table with a sticky first column over stacking.

### Major

**F7. The quiz is multiple choice, but it is built as free-text answers with self-marking.**
- Screens: `desk-light_c03_quiz-answered.png`, `mob-light_c03_quiz-answered.png`, `desk-light_c07_quiz.png`.
- Seen: options A-D are plain text lines; the learner types into a textarea, reveals, then presses "Got it". In the capture an unrelated typed answer ("LTV = loan / value...") was marked "Got it" on a critical item.
- Why: no retrieval-practice feedback, no integrity, and a pass mark that means little. Leading platforms grade knowledge checks instantly.
- Fix: detect `A) ... D)` lines and render **Option cards** (radio group, `role="radiogroup"`, full-width 48 px min height, letter badge left). On select, lock the item and show the correct option, the learner's choice, and the rationale. Score updates automatically. Keep the textarea plus self-mark only for open-response items. Show the set score as a ring plus "Pass mark 80% · every critical item" in a compact sticky header. Add "Retake with Set B" at the end.

**F8. Practice shows the reveal before the answer box.**
- Screens: `desk-light_c00_4-practice.png`, `desk-dark_c03_4-practice.png`: "Show model answer" sits above "Your working and answer".
- Why: the eye hits the reveal first, which invites peeking. It contradicts the instruction "Work each problem alone".
- Fix: order is prompt, then answer box, then a footer row: `[Check against model answer]` (primary, enabled once the box has 10+ characters) and a quiet "I'm stuck, show it" text link. After reveal, show "How close were you?" with three self-rating chips (Matched / Partly / Missed) saved with the answer.

**F9. ID chips dominate the prose.**
- Screens: `desk-light_c03_1-overview.png`, `desk-light_c03_2-learn-45.png` ("( `F-CORE-02` , `F-CORE-03` ). `COM-TRM-09` needs..."), `desk-dark_chips-in-prose.png`, `desk-light_c12_exercises.png`.
- Seen: 179 green monospace chips in C3 Learn; parentheses float apart from the chip ("( F-CORE-01 ,"); in exercise prompts the same IDs appear as raw, unlinked text ("(CORE-SVC-05)", "F-RES-25 (SUGGESTED): ..."); the exercise meta row shows up to 7 chips.
- Why: every chip is a high-contrast, colored, monospaced interruption. The owner dislikes them, and they make plain-English sentences read like code.
- Fix: the citation treatment in section 5.

**F10. No brand: it is "BPL Core Course", not "BPL Academy".**
- Screens: `desk-light_home.png`, `mob-light_home.png`.
- Seen: a bold sans text label, no mark, no imagery, no signature element. The H1 on home repeats the sidebar title.
- Fix: see section 4 (wordmark, palette, serif display face, running-deal illustrations, ledger-rule motif).

**F11. The lookup drawer is a raw policy row, with no scrim and no focus management.**
- Screens: `desk-light_drawer.png`, `desk-dark_drawer.png`, `mob-light_drawer.png`.
- Seen: a 4-column author table ("Rule ID / Rule (course baseline) / BASIS / Rationale (Part 1 source)") squeezed into 560 px, last column clipped; page behind is not dimmed; focus is not trapped or returned.
- Fix: **Reference drawer** spec:
  - Desktop: 480 px right panel, scrim `rgb(0 0 0 / 32%)`, slide 180 ms ease-out, focus trap, return focus to the chip, Esc and scrim click close.
  - Mobile: bottom sheet, 85vh max, drag handle, same content.
  - Content order: small mono ID and family tag; rule name as an 18 px heading; "The rule" in one or two sentences; for formulas the KaTeX formula card and a worked mini example; "Why" collapsed; "Used in" list of modules (links); "Open in Model Credit Policy" link; the training label as a 12 px footer line, not a boxed pill.
  - Back/forward inside the drawer when following nested IDs.

**F12. The same warnings repeat on every step.**
- Screens: every `desk-*_c03_*` and `mob-*_c03_*` step.
- Seen: the training label appears as a boxed pill above the header and again as bold text inside the Overview; the amber draft stamp (80 px desktop, 115 px mobile) repeats on all 8 steps.
- Fix: one persistent 32 px "notice bar" under the app bar: `Model policy for training - not for live lending decisions.` left, `Draft snapshot` amber tag right with an info popover. Keep the exact required wording. Remove the boxed pill and the in-content duplicate from the layout (content can keep its line for exports).

**F13. Wide tables clip silently on desktop.**
- Screens: `desk-light_c03_2-learn-45.png` (third column cut at "Refinance $3,90("), `desk-light_c00_2-learn.png` (fifth column "Busi..." cut).
- Fix: scroll-shadow cues on `.tbl` (background-attachment local gradients on both edges), sticky first column (`th:first-child, td:first-child { position: sticky; left: 0; background: var(--surface) }`), and allow tables to break out of the 680 px column up to 880 px on wide screens (`.tbl.wide { margin-inline: calc((680px - min(880px, 100%)) / 2) }`). Right-align money columns (already done) and use tabular figures in Plex Mono or Plex Sans `tnum`.

**F14. The home dashboard is a list, not a dashboard.**
- Screens: `desk-light_home.png`, `desk-dark_home.png`, `mob-light_home.png`.
- Seen: a "Start with" card, then 15 identical rows with "Not started" pills; the sidebar repeats the same 15 rows beside it. No time remaining, no sense of path, no running deals, no recent activity.
- Fix: **Home** spec:
  - Hero: "Welcome back" + "Continue C3 · Learn 3 of 7 · 9 min left" resume card with a thumbnail and a big primary button.
  - Progress band: ring (modules done), hours done / 38, quiz average, "Next quiz due".
  - **Learning path**: the 15 modules as a vertical timeline grouped into 3-4 parts (Foundations C0-C3, Underwriting C4-C8, Documents and closing C9-C11, Servicing and exit C12-C14; confirm the grouping against the Course Bible). Each node shows status, hours, and quiz score.
  - **Running deals** row: three cards (Maple Run, Cedar Court, Birchwood Plaza) with a small property illustration, state, loan type and "Open deal file".
  - Reference tiles: Policy, Formulas, Deals, State law, Glossary.
  - Hide the sidebar module list on Home at 1200 px and wider (the path replaces it).

**F15. Missing tools: search, glossary, theme toggle; Listen is invisible.**
- Screens: all; `desk-light_home.png` (References and C13-C14 are below the sidebar fold at 900 px).
- Seen: no search; acronyms (DSCR, NCF, ADS, LTC, SOFR) are expanded once in prose only; `data-theme` is supported in CSS but there is no toggle; the Listen button is hidden unless `window.claude` exists, so most viewers never see it.
- Fix:
  - **Command palette search** (Ctrl/Cmd-K and a search icon): index headings, glossary terms, rule and formula IDs and names. Results grouped: Lessons, Rules, Formulas, Glossary.
  - **Glossary**: auto-link the first use of each term per page with a dotted underline; hover or tap shows a 2-line definition popover with "More" to the drawer. Add a Glossary reference page.
  - Theme toggle (System / Light / Dark) in the app bar, saved in localStorage.
  - Listen: if narration is unavailable, show the button disabled with a tooltip, or hide the whole feature consistently. When available, use a sticky mini-player (play/pause, speed, current paragraph highlighted).

**F16. Hard-coded red fails contrast in dark mode.**
- Screens: `mob-dark_c03_quiz-answered.png`, `desk-dark_c03_quiz-answered.png` ("Critical item: a miss fails the set." and the CRITICAL badge).
- Seen: `#b3261e` on `#161e1b` is about 2.6:1 (needs 4.5:1).
- Fix: tokenize `--danger` and `--danger-soft` with a light-mode `#B3261E` and dark-mode `#FF8A80`. Replace all nine hard-coded uses in the template.

**F17. Authoring artifacts leak into the learner view.**
- Screens: `desk-light_c03_7-jobaid.png` ("Job aid.0-draft"), `desk-light_c00_5-quiz.png` ("Author note, 22 Nov 2026 (v1.0-draft): ..."), `desk-dark_ref-formulas.png` and `desk-dark_ref-policy.png` (subtitle "(includes f-core-44 to -48; ...)", "*thorp v. hartigan*" with literal asterisks), `desk-light_drawer.png` ("Rationale (Part 1 source)").
- Why: the design system has no place for author-only content, so it shows as lesson text.
- Fix: an `author-note` block (`> [!AUTHOR]` or a paragraph starting "Author note") that is hidden by default and shown only with `?author=1`, styled as a dashed purple note. Strip version suffixes from headings at build time. Render reference subtitles through Markdown, or drop them.

**F18. Headings are too close to bold body text.**
- Screens: `desk-light_c03_2-learn.png`, `desk-light_c03_2-learn-18.png`.
- Seen: H3 section titles are 17.3 px bold; the paragraph lead-ins ("The point.", "Why time changes value.") are 16 px bold. A long page reads as one undifferentiated column.
- Fix: the type scale in section 4. Section titles become serif 28 px with a section number ("3.2"), and a "The point" lead-in becomes a **Key idea** callout (left brass rule, 18 px).

### Minor

**F19. Default body margin is not reset.** `desk-light_home.png`: an 8 px gray strip shows above and left of the sidebar. Fix: `body { margin: 0 }`.

**F20. The status pill changes font.** In the module header the pill inherits the mono `.eyebrow` font ("In progress" in Plex Mono, `desk-light_c03_2-learn.png`); on Home it is sans. Fix: `.pill { font-family: var(--font-body) }`.

**F21. Hyphenated IDs break across lines.** `desk-light_c03_4-practice.png`: "RD-" / "MF-01". `overflow-wrap: anywhere` on `.prose p` causes it. Fix: wrap every ID (including running-deal IDs) in `.nb` at link time, and use `overflow-wrap: break-word` instead of `anywhere`.

**F22. Step tabs show position, not completion.** Step pills never show a done state; the bar under them fills by position. Fix: each step gets a status glyph (empty circle, half, check). The bar becomes "Module progress: 3 of 8 steps complete". Quiz step shows its score once marked.

**F23. Exercise cards are heavy and have two competing actions.** `desk-light_c07_exercises-30.png`, `desk-light_c12_exercises-60.png`: every sort row repeats 2-5 outlined buttons; "Check" (primary) and "Mark done" (ghost, below) compete; the meta row mixes outlined deal pills and filled ID chips. Fix: sort as a **segmented control** per row (one bordered group, selected segment filled); one primary action per card that changes label ("Check" to "Try again" to "Done"); exercise marked done automatically on all-correct; meta row reduced to type tag + deal tag, with rule IDs moved to a "Based on" footer line using the citation treatment.

**F24. Too many radii and border styles.** Radii in use: 3, 4, 6, 8, 10, 999. Borders: 1 px, 1 px dashed, 2 px (rubric, job aid), 4 px and 5 px left rules. Fix: radii `--r-sm: 6px` (inputs, chips), `--r-md: 10px` (cards), `--r-lg: 16px` (hero, drawer), `--r-pill: 999px` (tags only). Borders: 1 px hairline everywhere; 3 px left rule reserved for callouts; no dashed borders except author notes.

**F25. Mobile menu pushes the page down.** `mob-light_menu-open.png`: the full module list expands inline above the content. Fix: left drawer (85vw) with scrim, current module expanded to show its steps.

**F26. Long single-line score banner.** `desk-light_c03_quiz-answered.png`: "Set A: 1 of 12 got it (8%) · 1 marked · pass mark 80% (10 of 12) with every critical item right." Fix: score ring + "1 / 12" + a 2-segment bar (marked, correct) + "Pass: 10 of 12, all critical" as a caption.

---

## 3. Patterns to adopt from leading course platforms

1. **Lesson pagination with item checkmarks** (Coursera, edX, LinkedIn Learning). Break Learn into short pages with a left list of items, each with a duration and a check when done. Fixes F2 and F22.
2. **Sticky "On this page" outline with scrollspy** (Stripe Docs, MDN, Harvard Online course readers). A right rail that tracks the current section and shows remaining time. Fixes F2.
3. **Inline knowledge checks after each section** (Brilliant, Khan Academy, Codecademy). One or two auto-graded questions at the end of each Learn page, with instant feedback, before moving on. The existing Exercise engine can power this.
4. **Key takeaways and formula cards** (CFI, Wall Street Prep, Investopedia Academy). A boxed 3-bullet "Key takeaways" at the end of each section, and a rendered formula with a variable legend and a downloadable worked example.
5. **Audio with a synced transcript** (MasterClass, Coursera video transcripts). A sticky mini-player for Listen that highlights the sentence being read and lets learners click a paragraph to start there.

Also worth borrowing: HBS Online's "case protagonist" framing for the running deals (a deal file card with a photo-style illustration and key facts), and Duolingo-style streaks are **not** a fit for this audience.

---

## 4. Proposed design direction: BPL Academy

### 4.1 Concept

"The credit file, refined." A calm editorial reading surface (warm paper, serif headings) framed by a precise ledger system (hairline rules, tabular figures, mono IDs). Ledger green stays as the brand color. Brass is the signature accent for key ideas and achievement. The three running deals are illustrated properties that recur as visual anchors.

Signature details:
- **Wordmark**: "BPL" in Source Serif 4 Semibold, small-caps "ACADEMY" in IBM Plex Sans 600 at 0.62em with 0.14em tracking, separated by a 1 px vertical ledger rule. Mark: a square monogram with a double rule at the base (a ledger total line).
- **Ledger total rule**: double hairline (`border-bottom: 3px double var(--line-strong)`) under results, totals in worked examples and the score.
- **Deal avatars**: three simple line illustrations (single-family house, 3-story garden apartment, strip retail) in brand green on paper. Used on deal tags, deal cards and worked examples.
- **Section numbers**: "3.2" in Plex Mono, brass, before section titles.

### 4.2 Color tokens

```css
:root {
  /* surfaces */
  --bg: #F6F4EF;          /* warm paper */
  --surface: #FFFFFF;
  --surface-2: #EFEBE3;   /* table heads, code, inset */
  --line: #E2DDD2;        /* hairlines */
  --line-strong: #C9C2B4;
  /* text */
  --ink: #15201B;
  --ink-2: #3A4641;       /* secondary body */
  --muted: #646F6A;       /* captions; 5.0:1 on --bg */
  /* brand */
  --brand: #0F5A47;       /* ledger green; buttons, links */
  --brand-hover: #0B4738;
  --brand-soft: #E3EFE9;
  --on-brand: #FFFFFF;
  --brass: #9A6A12;       /* signature accent; key ideas, section numbers */
  --brass-soft: #F8EFD9;
  /* semantic */
  --info: #2C5A86;  --info-soft: #E7EEF6;    /* notes, sources */
  --warn: #9A5B07;  --warn-soft: #FBF0DC;    /* draft, what-if */
  --danger: #B3261E; --danger-soft: #FBE9E7; /* critical, wrong */
  --success: #1E7A4C; --success-soft: #E4F3EA;
  --focus: #2C5A86;
  /* elevation */
  --shadow-1: 0 1px 2px rgb(21 32 27 / 6%);
  --shadow-2: 0 2px 6px rgb(21 32 27 / 6%), 0 12px 32px rgb(21 32 27 / 8%);
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { /* same as below */ } }
:root[data-theme="dark"] {
  --bg: #0D1311; --surface: #141C19; --surface-2: #1A2420; --line: #26322D; --line-strong: #34433D;
  --ink: #E7EEEA; --ink-2: #C3CDC8; --muted: #94A49D;
  --brand: #6DCBAE; --brand-hover: #86D8BF; --brand-soft: #16302A; --on-brand: #0D1311;
  --brass: #E3B55E; --brass-soft: #2E2512;
  --info: #8DB8E6; --info-soft: #172433;
  --warn: #F0B45A; --warn-soft: #33270F;
  --danger: #FF8A80; --danger-soft: #3A1A18;
  --success: #6FD29C; --success-soft: #15301F;
  --focus: #8DB8E6;
  --shadow-1: 0 1px 2px rgb(0 0 0 / 40%); --shadow-2: 0 2px 8px rgb(0 0 0 / 40%), 0 16px 40px rgb(0 0 0 / 35%);
  color-scheme: dark;
}
```

Verify every text pair at 4.5:1 (3:1 for 18 px+ bold) before shipping.

### 4.3 Typography (Google Fonts)

- **Display and headings**: Source Serif 4 (opsz 8..60, weights 600 and 700). Credible, editorial, excellent figures.
- **Body and UI**: IBM Plex Sans (400, 500, 600, italic 400). Highly legible at long length, with true tabular figures (`font-feature-settings: "tnum"`).
- **IDs, codes and numbers in tables**: IBM Plex Mono (400, 500). Same family as body, so IDs sit quietly in the text.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap">
```

Scale (desktop / mobile), ratio about 1.25:

| Token | Use | Desktop | Mobile | Font |
|---|---|---|---|---|
| `--t-display` | Home hero, module H1 | 44/1.1 | 30/1.15 | Serif 700 |
| `--t-h2` | Step or page title | 32/1.2 | 26/1.2 | Serif 700 |
| `--t-h3` | Section title (with number) | 26/1.25 | 22/1.25 | Serif 600 |
| `--t-h4` | Sub-section | 19/1.35 | 18/1.35 | Sans 600 |
| `--t-body` | Lesson prose | 18/1.65 | 17/1.6 | Sans 400 |
| `--t-ui` | Buttons, tables, cards | 15/1.45 | 15/1.45 | Sans 500 |
| `--t-small` | Captions, meta | 13/1.4 | 13/1.4 | Sans 400 |
| `--t-mono` | IDs, codes | 0.86em | 0.86em | Mono 500 |

Measure: prose max 66ch (about 680 px at 18 px). Paragraph spacing 0.9em. Section spacing 3.5rem above H3.

### 4.4 Layout system

- 8 px spacing base: `--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px`.
- **App bar** (all sizes): 56 px, sticky, surface with hairline bottom. Left: menu (under 1200 px), wordmark. Center (1024 px and up): breadcrumb `Core course / C3 Finance math / Learn 3 of 7`. Right: search, glossary, theme toggle, progress ring.
- **Notice bar**: 32 px under the app bar, the training label plus the draft tag (F12).
- **Module sub-bar**: 48 px, sticky under the notice bar: step tabs with status glyphs; Contents button under 1200 px.
- **Desktop at 1200 px and up**: 3 columns. Course rail 264 px (collapsible to a 64 px icon rail) | reading column 680 px (breakouts to 880 px for tables, figures and formula cards) | "On this page" rail 240 px. Gaps 48 px. Max content width 1360 px, centered.
- **Tablet 768-1199 px**: course rail becomes an off-canvas drawer; outline becomes the Contents sheet; reading column fluid to 680 px.
- **Mobile under 768 px**: 16 px gutters; full-width cards lose side borders (`border-inline: 0; border-radius: 0`) to gain 32 px of text width; bottom pager is sticky (56 px) with Back and Next.
- Remove the outer `.prose` card around the whole step on desktop. Let prose sit on the paper background; keep cards for interactive blocks only. This alone makes it feel like a reader, not a form.

### 4.5 Components to build

| Component | Spec summary |
|---|---|
| App bar, notice bar, module sub-bar | Section 4.4. Step tab: 36 px high, label + status glyph, active = brand underline 2 px + ink text (not a filled pill). |
| Course rail | Parts as groups; module rows 40 px with code (mono, muted), title (2-line clamp), status glyph; current module expands to its steps. |
| On-this-page outline | Scrollspy, 2 px progress line, minutes per section, sticky. |
| Learn page pager | Top-right "3 / 7" with arrows; bottom full-width cards "Previous / Next" with title and minutes. |
| Key idea callout | Replaces "The point." lead-in: brass 3 px left rule, `--brass-soft` background, 18 px text, label "Key idea" in small caps. |
| Worked example | Header bar with deal avatar, "Worked example 4", deal tag; numbered steps as a vertical stepper (Formula, Inputs, Substitution, Result); result row in a ledger-total box with double rule; collapsible "Show all steps" for long ones. |
| Formula card | KaTeX formula, ID + name caption, variable legend, "Try it" link that opens the matching calculator exercise. |
| Data table | Hairline rows, `--surface-2` head, tabular figures, sticky first column, scroll shadows, optional breakout; mobile = scroll for numeric tables, label-above-value stack for text tables. |
| Figure | Numbered caption, expand-to-lightbox, text alternative toggle. |
| Callouts | Note (info), What-if (warn), Watch out (danger), Key takeaways (brand). Same anatomy: 3 px left rule, icon, title, body. |
| Source citation | See section 5; sources collected in a "Sources" list at the end of each page. |
| Glossary term | Dotted underline (1 px, `--muted`), popover 320 px with definition and "More". |
| Reference drawer | F11 spec. |
| Option card (quiz) | F7 spec; states: default, hover, selected, correct (success), incorrect (danger), disabled-after-answer; letter badge 28 px circle. |
| Open-response card | Prompt, textarea, footer with Check-against-model, self-rating chips. |
| Exercise card | Header (type tag, deal tag, est. minutes), body, one primary action, result panel with ledger-total, "Based on" citations footer. |
| Segmented control | For sort and decision buttons; 40 px high; keyboard arrows move selection. |
| Score header | Ring, fraction, two-segment bar, pass rule caption; sticky in quiz. |
| Status glyph | Empty circle (not started), half (in progress), check in filled circle (done), lock (prerequisite not met; advisory only). |
| Buttons | Primary (brand fill), Secondary (surface + 1 px line), Ghost (text), Danger. Heights 40 px (36 px small, 48 px on mobile primary). Radius `--r-sm`. States: hover darken 6%, active inset 1 px, focus 2 px `--focus` ring with 2 px offset, disabled 45% opacity + `cursor: not-allowed`. |
| Empty states | "No exercises in this module yet" with a short line and a link to Practice; same for search no-results. |
| Mini-player | Listen controls, sticky bottom, current paragraph highlight `--brand-soft`. |
| Author note | Hidden by default; dashed purple border; visible with `?author=1`. |

Motion: 150-200 ms ease-out for drawers, popovers and reveals; respect `prefers-reduced-motion` (already done).

---

## 5. ID chip treatment: quiet, auditable citations

Goal: sentences read as plain English, every claim still traces to a rule or formula ID in one click, and an auditor can see every ID at once.

**Default (Reading mode)**
1. Remove the ID from the sentence flow. The author's parenthetical "(CORE-CLS-04; F-CORE-33)" becomes a citation marker after the sentence's punctuation: a small superscript reference number, `font: 500 0.7em/0 var(--font-mono); color: var(--brand); vertical-align: super; padding: 0 1px`, no background, no border. Example: "...collected at closing.¹"
2. Number markers per page. Several IDs in one parenthetical share one marker ("¹").
3. Desktop at 1200 px and up: show **margin notes** in the right gutter (below the outline rail when it is active, or in place of it on pages with heavy citation), aligned to the paragraph: "¹ CORE-CLS-04 · Prepaid interest to month-end" in 13 px `--muted`, the ID in mono. Click opens the drawer.
4. Under 1200 px: tapping the marker opens a small popover listing the IDs and names, each linking to the drawer.
5. Hover or focus on a marker highlights the sentence it cites (`background: var(--brand-soft)` on a wrapping span) so the scope of the citation is explicit.
6. Each page ends with a "Rules and formulas on this page" list (ID, name, link), which doubles as the audit trail and a study aid.

**Audit mode** (toggle in the app bar menu, saved in localStorage, also `?audit=1`)
- Markers are replaced by the inline IDs in quiet form: mono, `--muted` color, no fill, 1 px dotted underline, wrapped in `.nb`, with the original parentheses kept tight to the ID: "(CORE-CLS-04)".
- Source tags show their full `[VERIFY: source; checked date]` text inline in `--info`.
- Print stylesheet uses audit mode automatically.

**Where IDs stay visible by default**
- Formula lists ("Formulas you will use"), job aids, worked-example "Formula" steps and the drawer: these are reference contexts where the ID is the point. Use the quiet mono style above, not the filled green chip.
- Exercise "Based on" footers.

**Implementation notes**
- Keep the ID in the DOM: `<sup class="cite" data-refs="CORE-CLS-04 F-CORE-33" aria-label="Citations: CORE-CLS-04, F-CORE-33">1</sup>`. Screen readers hear the IDs; search and audit still find them.
- Apply `linkIds` to exercise prompts and options too (today they show raw text IDs, F9), and remove IDs from mermaid node labels (move them to the figure caption).
- Listen should skip markers by default (already skips `.tag`), with an option to read citations.

---

## 6. Suggested order of work

1. Fixes that are bugs: F4 (VERIFY parsing), F6 (stacked cells), F3 (KaTeX), F16 (danger token), F19-F21.
2. Mobile chrome and notice bar: F1, F12.
3. Learn pagination and outline: F2, F22.
4. Citation treatment and drawer: section 5, F9, F11.
5. Quiz and practice components: F7, F8, F23, F26.
6. Brand, type and palette: section 4, F10, F18, F24.
7. Home dashboard, search, glossary: F14, F15.
8. Diagrams and tables: F5, F13.

Each change to the template is a content-pipeline change: add a `docs/changelog.md` line and re-run `npm run test:e2e` when it lands.

*Model policy for training - not for live lending decisions.*
