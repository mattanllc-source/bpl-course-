# Lesson format: Markdown conventions for the BPL Academy page

Status: v1, 23 Nov 2026. Model policy for training - not for live lending decisions.

This file defines how a lesson is written so the course builder (`scripts/course_site/build.py`) can render it with the approved finance-platform components. It is opt-in. A lesson written in plain Markdown still displays as before. A complete worked sample is [lesson-format-sample-c04.md](lesson-format-sample-c04.md); the page shows it at `#sample/c04-coverage`.

CLAUDE.md content rules apply in full: the training label, no invented limits, step-by-step working, `[VERIFY]` tags on legal statements, plain English and sentences of 25 words or fewer. Quality bar sections 1 to 5 are the acceptance criteria.

## 1. How it works

- A component is a fenced block whose info string is `bpl:<type>`, for example ```` ```bpl:check ````.
- The builder parses each block into a spec, validates it, and leaves a placeholder in the Markdown. The page script renders the component in its place.
- A bad block fails the build with the file, block number and reason. Nothing half-formed reaches a learner.
- Ordinary Markdown between blocks stays Markdown. In a sample lesson, each `##` heading starts a new white card. In a module lesson (the `###` teach parts), each `####` heading starts one.
- Rule and formula IDs may appear in any text. Learners see plain names and citation markers; Audit mode shows the IDs. The `audit:` key in any block is shown in Audit mode only.

## 2. Syntax inside a block

| Line | Meaning |
| --- | --- |
| `key: value` | A field. Keys are lowercase. |
| An indented line | Continues the field or option above it. A blank line inside a field starts a new paragraph. |
| `- A: text` and `- B*: text` | A lettered option. `*` marks the key. |
| `  why: text` (indented, under an option) | The rationale for that option. Every option needs one. |
| `- text` | A list item (highlights, objectives, takeaways, formula "Where" lines, predict options). |
| `\| ... \|` rows | A Markdown table (worked example, exhibit, case facts). |
| `step Label: text` | A worked-example step. |
| `deal-figures: $395,000; $358,050` | Each amount must appear in that deal's section of `data/running-deals/running-deals.md`, or the build fails. |
| `facts: Label = value; Label = value` | The deal-sheet header facts. |

**Input colours.** Wrap a term in `[ncf]...[/ncf]` (net cash flow, green), `[ds]...[/ds]` (debt service, amber) or `[rent]...[/rent]` (rent, blue). This works in any text, inside or outside blocks. The words themselves are the label, so colour is never the only signal.

## 3. Components

| Block | Renders as | Required keys | Optional keys |
| --- | --- | --- | --- |
| `bpl:lesson` | Nothing visible. Lesson metadata for the title card, rail and pager. | `module`, `key`, `number`, `title` | `summary`, `minutes`, `level`, `replaces` (Learn parts it stands in for, e.g. `4, 5`), `reviewed`, `policy` (rail note text), `audit` |
| `bpl:objectives` | "Objective 1." tiles in the title card | `- ` items | |
| `bpl:highlights` | The blue "Key highlights" card | `- ` items | `title` |
| `bpl:takeaways` | The blue "Key takeaways" card | `- ` items | `title` |
| `bpl:formula` | Formula box with a "Where:" list | `show` | `title`, `label` (spoken name), `- ` Where items, `audit` |
| `bpl:worked` | Deal-sheet card: header facts, ruled table, step reveal | `step` lines | `title`, `kicker`, `deal`, `facts`, `deal-figures`, table, `total` (row label to emphasise), `audit` |
| `bpl:predict` | "Predict first" question; the pick locks in | `id`, `stem`, 2 or more `- ` options with one `*` | `before`, `after` (notes shown before and after the pick) |
| `bpl:desk` | Guided exercise ("deal desk") | see section 4 | |
| `bpl:check` | Knowledge check with Check answer and one retry | `id`, `stem`, options A-D with one `*` and a `why:` each | `working`, `audit` |
| `bpl:exhibit` | Document exhibit (deal-sheet table) and a question; rows are flagged after the answer | as `check`, plus a table | `title`, `tag`, `deal`, `facts`, `deal-figures`, `caption`, `flag` (first-cell values to flag), `flag-text`, `next` (shown after answering) |
| `bpl:case` | Committee case: sequential decisions, each with its consequence and policy | `id`, one or more `decision:` sections | `title`, `kicker`, `tag`, `deal`, `facts`, `deal-figures`, `intro`, `situation`, table, `debrief:` (everything after it is Markdown) |
| `bpl:policy` | "From the credit policy" note | `text` | `title`, `audit` |

A `decision:` section inside a case takes `stem`, options A-D with `*` and `why:` (the consequence of that choice), `policy` (what the policy says, by section name) and `working`.

**Checks and feedback.** Practice only; nothing here is graded.

- Select an option, then press Check answer. Options are a radio group: arrow keys move, Space or Enter picks.
- A wrong first try marks "✗ Your answer", shows that option's rationale and offers Try again. The correct answer stays hidden.
- The second try, or a right first try, ends it. "✓ Correct answer" and "✗ Your answer" are shown in text with an icon. Every option's rationale and the working line appear.
- Predict, check, exhibit and case each count as one check in the in-lesson progress line ("2 checks left · about 6 min").
- Practice state is a per-viewer convenience saved in the browser.

## 4. The deal desk (`bpl:desk`)

A desk has one control, a live working line, a two-bar comparison with a threshold, and a verdict with a sentence and an icon.

| Line | Meaning |
| --- | --- |
| `title`, `deal`, `task` | Header, deal tag and the learner's task (Markdown). |
| `let name = expr` | A value. `let x = 395000 \| deal` marks a running-deal input: the number must appear in that deal's file. |
| `slider k = 0 \| min 0 \| max 10 \| step 1` | The one control. `input` instead of `slider` gives a number box. Start at the neutral value, never at the answer. |
| `label`, `valuetext` | Visible label and spoken value, with placeholders. |
| `bar: expr \| Label \| ncf` (twice) | The two bars. The colour is `ncf`, `ds`, `rent` or `ink`. |
| `scale: expr` | The full-width value for both bars. |
| `marker: expr \| text` | A dashed threshold line on both bars, with its legend text. |
| `working` | The live substitution line, in mono. |
| `pass-if: expr` | The test, e.g. `ncf >= ds`. |
| `pass: Head \| body` and `fail: Head \| body` | The verdict sentence. |
| `predict: <id>` and `reveal` | Links the desk to a predict block. Once the learner reaches a failing state, it says where the result first fails and whether the prediction was right. |
| `expect: k = 5 → cov\|x4 = 0.9986x` | A build-time test. The builder computes the value and fails if it differs. |

**Expressions.** These allow numbers, percent literals (`1%`), names, `+ − × ÷ * /`, brackets and comparisons (`>= <= > < ==`).

**Placeholders.** `{expr|format}` uses these formats:

- `money`: whole dollars show as `$395,000`; anything with cents shows to the cent.
- `money2`: always to the cent.
- `x2` and `x4`: a ratio with 2 or 4 decimals and an x.
- `pct1` and `pct2`: a percent.
- `int`: a whole number.
- `num`: up to 2 decimals.

Rounding is half up, matching `formulas/shared/round.ts` (`roundHalfUp`) and the Python reference scripts. Negatives use a true minus sign. The same grammar and formats run in the builder (`lesson_format.py`) and the page (`45-lessonfmt.js`).

**Accessibility.** The slider is a native range input with a label and `aria-valuetext`. The bars are decorative (`aria-hidden`); their numbers sit in the working line and the verdict. A screen reader hears the verdict once the control is released, not at every step.

## 5. Writing rules

- One desk per lesson, tied to the lesson's key idea. Put the predict question before it.
- Worked examples follow Inputs, Substitute, Compute, Read, Policy test, on a running deal. All steps print open.
- Cite policy by section name, e.g. "Model Credit Policy, Multifamily Part 2B: Value-add bridge and stabilized bridge". Put rule and formula IDs in `audit:` or in the text, where the page turns them into markers.
- Every number from a running deal goes in `deal-figures` or a `| deal` let, so the build checks it.
- End the lesson with Key takeaways, a self-check, "What to look up yourself" and "How to check it".
- No points, streaks, confetti, timers, auto-advance or splash screens.

## 6. Self-check

1. Which line marks option C as the key? **Answer:** `- C*: text`.
2. A desk starts at 5 points, which shows the failing result. What is wrong? **Answer:** it spoils the predict question. Start at the neutral value, 0.
3. Where does a rule ID go so learners never see it? **Answer:** in `audit:`, or in the text, where the page shows a citation marker instead.

## What to look up yourself

1. WCAG 2.2 success criterion 4.1.2 (Name, Role, Value), for how a custom radio group must expose its state.
2. The WAI-ARIA Authoring Practices "Radio Group" pattern, for the arrow-key behaviour the checks follow.

## How to check it

Change one `expect:` value in the sample and run `.venv\Scripts\python.exe scripts\course_site\build.py`. The build must fail and name the block. Put the value back, and the build passes.
