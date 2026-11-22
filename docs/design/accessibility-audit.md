# Accessibility and front-end audit: core course reader

- **Page:** `exports/core-course.html` (built from `scripts/course_site/template.html` by `build.py`)
- **Standard:** WCAG 2.2 Level AA, plus front-end best practice
- **Date:** 2026-11-22
- **Method:** axe-core 4.10.2 in headless Chromium (Playwright), scripted keyboard runs, computed-style contrast, reflow and robustness tests. Scripts and screenshots are in the session scratchpad (`a11y/`), not in the repo.
- **Scope:** home; every step of C0, C3, C7 and C12; the reference drawer; the Policy, Formulas, Running deals and State law pages. Light and dark themes. Exercise types checked: sort, order, build-up (C0), decision (C1), calculator and scenario (C4).

## Summary verdict

**Does not yet conform to WCAG 2.2 AA.** The base is good. Landmarks, one `h1` per view, no skipped heading levels, labelled form fields, visible focus rings and reduced-motion support are all in place. axe found only four rule types, and no control lacks an accessible name.

The page fails AA on nine success criteria. Most fixes are small CSS or focus-management changes in `template.html`:

| Criterion | Why it fails |
|---|---|
| 1.4.3 Contrast (Minimum) | Dark theme red (`#b3261e`) is 2.6:1 |
| 1.4.11 Non-text Contrast | Input borders 1.25 to 1.35:1; status dots 1.34:1 |
| 1.4.10 Reflow | Policy page scrolls sideways at 320 px |
| 2.4.11 Focus Not Obscured (Minimum) | The sticky quiz score fully covers focused controls |
| 2.4.3 Focus Order | Focus is lost or left off screen after Next, Close and decision leaves |
| 2.5.8 Target Size (Minimum) | Rule chips in tables are 15 to 18 px tall |
| 1.1.1 Non-text Content | Diagrams share one generic label; nav status dots have no text |
| 4.1.3 Status Messages | Build-up feedback is in a live region created already filled |
| 2.1.1 Keyboard | Wide tables scroll but cannot take focus (Safari) |

There is also a criterion to verify. The exported file has no `<html lang>` and loads in quirks mode on its own. It relies on the artifact host to add the document wrapper (3.1.1 Language of Page).

The largest non-WCAG risk is robustness. If the marked CDN fails, the page is blank. If the db capability's reads hang, modules never open. The largest performance cost is mermaid. It adds about 1 second to DOMContentLoaded on every page, but only 7 of 15 modules have diagrams.

## Findings

Severity: **critical** blocks a task for some users; **serious** is an AA failure or a major barrier; **moderate** is a partial barrier or a likely failure; **minor** is best practice.

| # | Severity | WCAG | Where | Evidence | Fix |
|---|---|---|---|---|---|
| 1 | serious | 1.4.3 | Dark theme: `.crit` "Critical" badge, `.qflag`, `.exbad`, pressed "Missed it" button | `#b3261e` on `#161e1b` is **2.6:1** (needs 4.5). axe flagged 21 nodes across the four quizzes. Pressed "Missed it" text on red is also 2.6:1. | Add a `--bad` token: light `#b3261e`, dark `#ff8a80` (7.44:1 on panel, 8.09:1 on bg). Use it in `.crit`, `.qflag`, `.exbad`, `.score[data-v=fail]`, `.qcard[data-m=missed]`, `.sortrow/.orderrow[data-r=wrong]` and `.btn.miss[aria-pressed=true]`. In dark, give that button text `#161e1b` on `#ff8a80` (7.44:1). |
| 2 | serious | 1.4.11 | All text inputs, textareas, selects, quiz answer boxes, notes | Field border `--rule` `#d9e0dc` on `#f5f7f6` is **1.25:1**; on panel it is 1.34:1. The dark border `#2a3632` is 1.35 to 1.47:1. The textarea fill (`--bg`) against the card (`--panel`) is only 1.08:1. A field's edge is barely visible. | Add a `--field-border` token: light `#7d8a84` (3.34:1 on bg, 3.60:1 on panel), dark `#6f7f78` (4.03:1 on panel, 4.38:1 on bg). Apply it to `.ex input/select/textarea`, `.qcard textarea` and `.notes textarea`. |
| 3 | serious | 2.4.11 | Quiz step: sticky `.score` bar (`position: sticky; top: 0`) | Shift+Tab back through C3 Set B put "Reveal answer" (Q10) at top 5 px under the score bar, which ends at 40 px. The control was **100% covered**. This happened 9 times in one pass. | Add `scroll-padding-top` to `html`, equal to the score height plus 8 px (about `4rem`) while a quiz is shown. Or make the score non-sticky and repeat it at the end of each set. |
| 4 | serious | 1.4.10 | Policy page at 320 px | The page scrolls sideways (393 px wide in a 320 px viewport). The cause is `.tag` source badges (`white-space: nowrap`) inside stacked table cells, e.g. "Source: 31 CFR 501.601, 501.603, 501.604". | In the `max-width: 599px` block add `.tag { white-space: normal; overflow-wrap: anywhere; }`. Or set `.tag { max-width: 100%; display: inline-block; white-space: normal; }` everywhere. |
| 5 | serious | 2.4.3 | Pager "Next" and "Back", step buttons | After Enter on "Next: Exercises", focus **stays on the Next button 39,000 px down** while the view jumps to the top. The next Tab continues from the bottom of the page. On the last step "Next" is hidden, so focus falls to `<body>`. | In `go()`, move focus to the new step's first heading (give it `tabindex="-1"`). Do this when the step was changed from the pager. When the step buttons were used, keep focus on the step button. Never hide the focused button: disable it, or move focus first. |
| 6 | serious | 2.4.3 | Reference drawer | Opening moves focus to "Close" (good). Closing with the button leaves focus on `<body>`. Escape also closes but does not return focus. Tab leaves the drawer into page content behind it. The drawer has no `role="dialog"` or heading. | Store the triggering `.ref` button and refocus it on close (button or Escape). Make the drawer `role="dialog"` with `aria-labelledby="drawer-title"`. Either trap focus with `aria-modal="true"`, or keep it non-modal and close it on route change. Make the title an `h2`. |
| 7 | moderate | 2.4.3 | Decision exercise (C1, C5, C6, C9, C10, C14) | Choosing the last option reaches a result leaf. The stage is rebuilt with no option buttons, so focus falls to `<body>`. "Undo last choice" and "Start over" also rebuild the stage and lose focus. | After `paint()`, focus the result `<b>` (with `tabindex="-1"`) at a leaf. After Undo or Start over, focus the first option. |
| 8 | moderate | 4.1.3 | Build-up exercise feedback | Each check calls `paint()`, which builds a **new** `.exnote[aria-live]` already filled with "Not quite. Hint: …". Live regions created with content are usually not announced. The input also has no `aria-invalid` or `aria-describedby`. | Keep one persistent live region per build-up and write the feedback into it after the rebuild. Also set `aria-invalid="true"` and `aria-describedby` on the wrong input. |
| 9 | moderate | 2.5.8 | Rule and formula chips (`.ref`) in table cells; 103 nodes, mostly the Policy page | The chips are 65 to 87 × **15 px**, with only 21.6 px of clear space around them. Chips inside sentences are exempt; chips listed in table cells are not. | Give `.ref` `padding: .2em .35em; line-height: 1.4; min-height: 24px; display: inline-block`. Or add `margin-block: 2px` and a row gap in cells. |
| 10 | moderate | 1.1.1 | Mermaid diagrams (13 diagrams: C0 4, C3 3, C7 2, C1, C2, C13 and C14 1 each) | Every diagram has the same label: "Diagram. A text version is in the source below." The "Diagram as text" panel shows raw mermaid syntax (`flowchart TD`, `-->`, `{…}`), which is not a usable text equivalent. | Write one short label per diagram (a markdown comment or a caption line before the block). Generate an ordered-list text version from the flowchart edges, or write one by hand, in place of the raw source. Keep the source behind a second "Show source" toggle. |
| 11 | moderate | 1.1.1, 1.3.1 | Sidebar status dots (`nav .st`) | The status is shown only by fill and a `title` on a non-focusable span. Screen readers do not get "Done" or "In progress" for each module. The not-started outline is 1.34:1 (1.4.11). | Add visually hidden text inside the link (", in progress"). Give the dot `aria-hidden="true"`. Use `--field-border` for the outline. |
| 12 | moderate | 1.3.1, 2.1.1 | Source badges (`.tag`) | The full `[VERIFY: source; checked date]` text is only in `title`. Keyboard, touch and most screen-reader users cannot read the date checked or the full source. | Render the badge as a `<button>` that opens the full tag in the drawer, or as a `<details>`. At minimum add the full text as visually hidden text. |
| 13 | moderate | 2.1.1 | Wide tables (`.tbl`, `overflow-x: auto`); 25 regions across Learn steps and references | axe: scrollable region not focusable. Chromium 130+ lets keyboard users focus scrollers, but Safari does not. | When `scrollWidth > clientWidth`, set `tabindex="0"`, `role="region"` and an `aria-label` from the preceding heading. Do the same for `pre` and `.mermaid-diagram`. |
| 14 | moderate | 3.1.1 (verify) | Whole page | The exported file has no doctype, `<html lang>` or viewport meta. Opened directly, it runs in quirks mode (`BackCompat`) with `lang=""`. The artifact host adds a document wrapper. Confirm that the wrapper sets `lang="en"`. | Add `document.documentElement.lang ||= "en";` as the first line of the app script. Check the published page once in the browser devtools. |
| 15 | moderate | 2.4.3, 4.1.3 | Route changes (`#home`, `#c00` …) | After a sidebar link is chosen, focus stays on that link. Nothing announces the new page. `document.title` never changes. | In `route()`, focus the new `h1` (`tabindex="-1"`) and set `document.title` to "C3: Real estate finance math · BPL Core Course". |
| 16 | moderate | 2.4.1 (best practice) | Every page, desktop | There is no skip link. Reaching the content takes 20 Tab presses (15 modules plus 5 references) on every module page. Landmarks (`main`, `nav`) do technically meet 2.4.1. | Add `<a class="skip" href="#main">Skip to lesson</a>` as the first focusable element. Show it on focus, and give `main` `tabindex="-1"`. |
| 17 | minor | 1.4.3 | Placeholder text in answer boxes | Chromium's default `#757575` is 4.28:1 on the light field fill and 4.01:1 on the dark one. | Set `::placeholder { color: var(--muted); opacity: 1; }` (5.41:1 light, 7.0:1 dark). |
| 18 | minor | 4.1.3 | Sidebar `.meter` (`aria-live="polite"`) | `paintProgress()` runs on every step change. It rewrites "0 of 15 modules done · 0 of 38 hours" and the sync text, so screen readers hear it again and again. | Remove `aria-live` from `.meter`. Put only the sync message in a separate `role="status"` element, and update it only when it changes. |
| 19 | minor | 4.1.2 | Quiz "Reveal answer", inline "Show answer", scenario "Show model answer" | The state is shown only by the label changing. There is no `aria-expanded` or `aria-controls`. | Add `aria-expanded` and `aria-controls` (or use `<details>`). |
| 20 | minor | 4.1.2 | "Mark done" and "Mark module done" | `aria-pressed="true"` and the label "Done. Undo" are used together, so it is read as "Done. Undo, toggle button, pressed". | Pick one: a fixed label with `aria-pressed`, or a changing label without it. |
| 21 | minor | 2.5.3 / readability | Sidebar links and step buttons | Their accessible names run together: "C0Program orientation…", "1Overview". | Add a space or a visually hidden separator ("C0: …", "Step 1: Overview"). |
| 22 | minor | 1.3.1 | Tables under 600 px (`.tbl.stack`) | Chromium keeps the table roles, but `thead` is `display:none`. Headers are read only through the CSS `::before` text, so column headers are lost. | Accept as is, or add `role="table/row/cell"` and a visually hidden label `span` per cell in `decorateTables()`. |
| 23 | minor | 1.3.1 | Quiz and practice cards (`article.qcard`) | The articles have no accessible name. | Add `aria-labelledby` pointing at the `.qnum` span. |
| 24 | serious (robustness) | n/a | marked or DOMPurify CDN unavailable | With `marked.min.js` blocked: `ReferenceError: marked is not defined`. The page shows only the sidebar header and "Loading your progress…", forever. Blocking all CDNs gives the same result. | Best: render markdown at build time in `build.py` and drop marked from the runtime. Otherwise inline marked and DOMPurify in the bundle (as BPLF is). At minimum, catch the error and show "The course could not load. Reload to try again." |
| 25 | serious (robustness) | n/a | db capability granted, but reads hang | `showModule()` awaits `loadQuiz` and `loadNote` with no timeout. Navigating to C3 left the page on the old view, with no spinner and no message, after 4 s. | Race the reads against a timeout of about 5 s. Fall back to local values and say so in `#sync`. Show a "Loading C3…" placeholder at once. |
| 26 | moderate (robustness) | n/a | db writes fail | With `set()` rejecting (`permission-denied`), the notes indicator still shows **"Saved"**. `store.write()` swallows the error, so `.then()` runs. Only the sidebar line says "Couldn't save". | Have `write()` re-throw after `setSync`. Show "Not saved" in the `.saved` span on failure. |
| 27 | minor (robustness) | n/a | `window.claude.use()` never resolves | The sync text says "Loading your progress…" forever. The 10 s timer starts only after the uid is known. | Start the timeout before `Promise.all`. |
| 28 | minor (robustness) | n/a | localStorage blocked | The page works (all access is wrapped in try/catch). But it says "Progress is saved in this browser only." when nothing is saved. | Detect the failure in `localSet` and say "Progress can't be saved in this browser." |
| 29 | moderate (perf) | n/a | Mermaid loaded on every page | `mermaid.min.js` is 757 KB over the wire and 3.34 MB decoded. It is a parser-blocking script before the app. DOMContentLoaded is **1,313 to 1,366 ms** with it and **365 to 390 ms** without it. It also causes the only long task (281 to 351 ms). Only 7 of 15 modules use diagrams. | Drop the static tag. In `renderDiagrams()`, load mermaid on demand with a script tag or `import()` the first time a step contains `.mermaid-diagram`. The existing source fallback already covers a failed load. |
| 30 | minor (perf) | n/a | The C0 and C3 Learn steps are very long | C0 Learn has 2,111 elements in the stage, 11,563 words and a 39,212 px page height, and takes 339 ms to render. C3 Learn has 1,878 elements and 11,062 words. That is fine for the DOM, but heavy for reading and for focus recovery. | Consider splitting Learn into sub-steps by `h3`, or adding an in-step table of contents (`.toc` already exists in CSS). |
| 31 | minor | n/a | Drawer and route change | The drawer stays open across hash navigation, because `route()` does not close it. | Hide the drawer in `route()`. |

**Passed checks (no action needed):** one visible `h1` per view and no skipped heading levels anywhere tested. Landmarks: `aside`, `nav "Course"`, `main`. Every control has an accessible name (0 unnamed in C0, C1, C3, C4, C7, C12). Fieldset and legend on calculator inputs. The sort buttons sit in `role="group"` with labels and `aria-pressed`. Order moves announce "Moved to position 2 of 4" and keep focus on the moved row. The calculator result is `role="status"`. The empty-answer guard moves focus to the input. Focus rings are visible on every stop: a 2 px accent outline, 5.93:1 light and 8.57:1 dark. 200% zoom (1280 px at 2×) has no page-level horizontal scroll. WCAG 1.4.12 text spacing causes no clipping. Reduced motion leaves no transitions or animations running. No console errors or warnings in the baseline load. The mermaid CDN failing falls back to text cleanly.

## Contrast table

Computed from live styles; backgrounds are composited through ancestors. Text needs 4.5:1 (3:1 at 24 px, or 18.66 px bold). UI parts need 3:1. "FAIL" rows are in the findings above.

| Element | Light: fg / bg | Ratio | Dark: fg / bg | Ratio |
|---|---|---|---|---|
| Body text | `#16201c` / `#ffffff` | 16.70 | `#e3ebe7` / `#161e1b` | 14.00 |
| Muted text (facts, step bar) | `#5b6863` / `#f5f7f6` | 5.41 | `#93a39c` / `#0f1513` | 7.00 |
| Muted on panel (label, sync, notes) | `#5b6863` / `#ffffff` | 5.83 | `#93a39c` / `#161e1b` | 6.44 |
| Nav code on current item | `#5b6863` / `#e2efe9` | 4.93 | `#93a39c` / `#1b2f29` | 5.36 |
| Eyebrow (accent) | `#1d6b57` / `#f5f7f6` | 5.93 | `#5fc2a4` / `#0f1513` | 8.57 |
| Link in prose | `#1d6b57` / `#ffffff` | 6.38 | `#5fc2a4` / `#161e1b` | 7.88 |
| Rule/formula chip | `#1d6b57` / `#e2efe9` | 5.39 | `#5fc2a4` / `#1b2f29` | 6.56 |
| Source badge | `#5b6863` / `#eef2f0` | 5.16 | `#93a39c` / `#1d2723` | 5.82 |
| Status pill, in progress / draft stamp | `#9a5b07` / `#fbf0dc` | 4.80 | `#f0b45a` / `#33270f` | 7.92 |
| Deal chip | `#1d6b57` / `#e2efe9` | 5.39 | `#5fc2a4` / `#1b2f29` | 6.56 |
| Table header | `#16201c` / `#eef2f0` | 14.79 | `#e3ebe7` / `#1d2723` | 12.66 |
| Primary button, current step | `#ffffff` / `#1d6b57` | 6.38 | `#161e1b` / `#5fc2a4` | 7.88 |
| Secondary button text | `#16201c` / `#ffffff` | 16.70 | `#e3ebe7` / `#161e1b` | 14.00 |
| Critical badge, `.qflag`, `.exbad` | `#b3261e` / `#ffffff` | 6.54 | `#b3261e` / `#161e1b` | **2.60 FAIL** |
| "Missed it" pressed | `#ffffff` / `#b3261e` | 6.54 | `#161e1b` / `#b3261e` | **2.60 FAIL** |
| Placeholder text (on field fill) | `#757575` / `#f5f7f6` | **4.28 FAIL** | `#757575` / `#0f1513` | **4.01 FAIL** |
| Focus ring (UI, 3:1) | `#1d6b57` / `#f5f7f6` | 5.93 | `#5fc2a4` / `#0f1513` | 8.57 |
| Input / textarea border (UI) | `#d9e0dc` / `#f5f7f6` | **1.25 FAIL** | `#2a3632` / `#0f1513` | **1.47 FAIL** |
| Answer box border on card (UI) | `#d9e0dc` / `#ffffff` | **1.34 FAIL** | `#2a3632` / `#161e1b` | **1.35 FAIL** |
| Button and step-pill border (UI) | `#d9e0dc` / `#ffffff` | 1.34 (text label identifies it: pass) | `#2a3632` / `#161e1b` | 1.35 (pass, same reason) |
| Not-started status dot (UI) | `#d9e0dc` / `#ffffff` | **1.34 FAIL** | `#2a3632` / `#161e1b` | **1.35 FAIL** |
| Progress bar fill vs track (UI) | `#1d6b57` / `#d9e0dc` | 4.75 | `#5fc2a4` / `#2a3632` | 5.82 |

Proposed fix colors (checked): `--bad` dark `#ff8a80` gives 7.44:1 on panel. `--field-border` gives 3.34:1 (light, on bg) and 4.03:1 (dark, on panel). Placeholder set to `var(--muted)` gives 5.41:1 light and 7.0:1 dark.

## Keyboard map

| Area | Keys | What happens | Status |
|---|---|---|---|
| Page start (desktop) | Tab | 15 module links, then 5 reference links, then main content. There is no skip link. | Works; add a skip link (#16) |
| Page start (≤ 860 px) | Tab, Enter | "Show modules" button (`aria-expanded`) is first, then the step buttons. The nav is hidden until opened. | Pass |
| Sidebar links | Enter | Routes by hash. `aria-current="page"` is set. Focus stays on the link and is not announced. | Partial (#15) |
| Home "Start module" / module list | Tab, Enter | Links with full names, including the status text. | Pass |
| Step buttons (`.steps button`) | Tab, Enter / Space | Shows the step and sets `aria-current="step"`. Focus stays on the button. | Pass |
| Pager Back / Next | Enter | Changes the step and scrolls to the top, but focus stays on the button far down the page. On the last step, focus is lost. | Fail (#5) |
| Rule/formula chip (`.ref`) | Enter | Opens the drawer and focuses "Close". | Pass |
| Drawer | Tab / Escape / Close | Tab moves through the chips in the drawer, then leaves to the page behind. Escape closes. Focus is not returned to the chip. | Fail (#6) |
| Source badge (`.tag`) | n/a | Not focusable; content only in `title`. | Fail (#12) |
| Answer reveal (`details.key`, `.reveal`, "Reveal answer") | Enter / Space | Toggles. `<details>` exposes its state; buttons have no `aria-expanded`. | Partial (#19) |
| Quiz answer box | Tab, typing | Labelled "Your answer to Set A question 1". It autosaves. | Pass |
| Quiz "Got it" / "Missed it" | Enter / Space | `aria-pressed` toggles and the score updates in a polite live region. | Pass, but the sticky score can cover focus (#3) |
| Sort exercise | Tab, Enter / Space on bucket buttons, then "Check" | `aria-pressed` updates and focus stays. The result goes to a polite live region. | Pass |
| Order exercise | Enter on "Move up/down: <step>" | Swaps the rows, focus follows the moved row, and it announces the new position. | Pass |
| Build-up exercise | Type, then Enter or "Check" | Wrong: focus returns to the input and a hint shows (likely not announced). Right: focus moves to the next line's input. | Partial (#8) |
| Decision exercise | Case `<select>`, Enter on options | Focus moves to the next question's first option. At a result leaf, Undo or Start over, focus is lost. | Fail (#7) |
| Calculator exercise | Tab through labelled inputs; "Calculate and compare" | With an empty answer, focus moves to "Your answer" with a status message. The result shows in `role="status"`. | Pass |
| Scenario exercise | "Show model answer" | With an empty answer, focus moves to the textarea. Rubric checkboxes are labelled. | Pass |
| Notes (OJT step) | Typing | Saves on input and blur. "Saved" is announced politely. | Pass (but see #26) |
| Wide tables, code, diagrams | Tab | Not focusable; cannot scroll by keyboard in Safari. | Fail (#13) |

**Focus visibility:** every stop showed `outline: 2px solid var(--accent)` with a 2 px offset. Screenshots confirmed this in both themes: nav link, step pill, sort choice, order buttons, "Missed it" (dark) and drawer "Close". There were no keyboard traps.

## Reflow, zoom and motion

| Test | Result |
|---|---|
| 320 px wide, home, C0, C3, C7, C12 (all steps), Formulas, Running deals | No page-level horizontal scroll. Wide tables scroll inside `.tbl` (allowed). |
| 320 px wide, Policy | **Fails**: page is 393 px wide because of `nowrap` source badges (#4). |
| 1280 px at 200% (640 CSS px) | No page-level horizontal scroll on any page tested. |
| Text spacing override (1.4.12) on all C3 steps | No clipped text and no horizontal scroll. |
| `prefers-reduced-motion: reduce` | No element keeps a transition or animation; `scroll-behavior: auto`. |

## Performance (headless Chromium, desktop, warm network, 2 runs)

| Measure | Value |
|---|---|
| HTML file | 1,158,503 bytes (350,728 gzip). Course JSON is 1,036,933 bytes of it; the BPLF bundle is 31,399. |
| Third-party | mermaid 3,335,717 B decoded / 757,187 B transfer; marked 35,479 / 10,208; DOMPurify 21,496 / 7,751; fonts 4 woff2 files, 72 KB in total |
| Total decoded weight | About 4.6 MB, of which mermaid is 72% |
| First contentful paint | 292 to 384 ms |
| DOMContentLoaded / load | 1,313 to 1,447 ms / 1,338 to 1,471 ms |
| Same, with mermaid removed | DCL 365 to 390 ms, load 402 to 430 ms, no long tasks |
| Home interactive (h1 rendered) | About 1.5 s from navigation |
| Long tasks | One per load, 281 to 351 ms (mermaid evaluation and JSON parse) |
| Module open (route to step 1) | 32 to 118 ms |
| Step switch | 27 to 95 ms typical; 339 ms (C0 Learn) and 279 ms (C3 Learn), mermaid included |
| Largest step DOM | C0 Learn: 2,111 elements in stage, 2,278 in the page, depth 19, 11,563 words, 39,212 px tall |
| JS heap after the tour | About 28 MB |
| Console errors / warnings (baseline) | None |

### Robustness tests

| Condition | Result |
|---|---|
| Mermaid CDN blocked | Pass. Diagrams fall back to `<pre>` source; everything else works. |
| marked CDN blocked (or all CDNs) | **Blank page**, `ReferenceError: marked is not defined` (#24) |
| localStorage throws on access | Works; the message wrongly claims progress is saved (#28) |
| `claude.use("db")` rejects | Falls back to browser storage. Pass. |
| `claude.use()` never resolves | Works locally; "Loading your progress…" forever (#27) |
| db granted, `get()` hangs | **Modules never open** after the first route (#25) |
| db granted, `set()` fails | Sidebar shows "Couldn't save…", but the notes indicator says **"Saved"** (#26) |

## Top fixes in order

1. Add a dark `--bad` red and a stronger `--field-border` and placeholder color (#1, #2, #11, #17).
2. Fix focus management: step change, drawer close and return, decision leaf, route change (#5, #6, #7, #15).
3. Stop the sticky quiz score covering focus with `scroll-padding-top` (#3).
4. Let `.tag` badges wrap on narrow screens (#4), and enlarge `.ref` chips to 24 px (#9).
5. Lazy-load mermaid; it cuts DCL from about 1.35 s to about 0.38 s (#29).
6. Remove the runtime dependency on marked (render at build time or inline it), and add timeouts and honest save status for the db (#24 to #26).
7. Give diagrams real labels and text versions, and make the source badges and status dots readable without hover (#10 to #12).
