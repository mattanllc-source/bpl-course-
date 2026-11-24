# Model Credit Policy: learner view by deal-order topic (build spec)

**Model policy for training - not for live lending decisions.**
Decision 12 (adopted 24 Nov 2026); to-do 10. Source analysis: `docs/curriculum/review-2026-11-24/B-reference-assessment-experience.md` section 1.
Data: `scripts/course_site/policy_topics.json`. Source of rule text: `docs/credit-policy/model-credit-policy.md` (Course Bible export; never edit).

This spec covers what a builder needs to know. It replaces `layout-patterns.md` section D item 3 ("grouped by family and topic code") for the policy shelf. The owner should update that line.

## 1. Data contract

`policy_topics.json` holds `{"_note", "version", "topics": [...]}`. Each topic has:

| Field | Use |
| --- | --- |
| `n`, `slug`, `name` | Topic number (1-13, deal order), URL slug, learner title |
| `oneLine` | 20 words or fewer. Phone index and desktop rail tooltip |
| `summary` | "In plain English" block (2-3 sentences) |
| `apply` | "How to apply it on a file" ordered list (may be empty) |
| `why` | "Why these rules exist" (1-2 sentences) |
| `modules` | Home modules, e.g. `["C6"]`. Shown first under "Where the course teaches it" |
| `rules` | Rule IDs in display order. For topic 7, the union of its products |
| `products` | Topic 7 only. See section 1.1 |
| `seeAlso` | Rule IDs whose home is another topic or product but that a reader of this topic needs (for example, product-specific FICO floors on topic 4). Shown as links, never as copies |
| `glance` | Authored "limits at a glance" rows `[label, limit, ruleId]`. `limit` is a **verbatim substring** of that rule's text |
| `check` | `null` or a worked check: `deal`, optional `otherDeals`, `title`, `lines` (`[label, working]`), `result`, `rules` |
| `attach` | Policy tables (`kind: "md"`) and embedded formula examples (`kind: "formula"`, `id`) to show on this topic, located by `family` + `section` + `group` title (`""` = untitled group) |

### 1.1 Topic 7 products

Each product: `slug`, `name`, `family`, `kind`, `rules`, optional `glanceRows`, optional `attach`, and `check` (`null` or a worked check).

- `kind: "all"`: one entry (`every-loan`) for the core rounding rule that applies to every product.
- `kind: "family"`: `res-all`, `mf-all`, `com-all`. These hold the rules that apply to every loan in a family (eligibility, minimums, the tests to report). Show the family block at the top of every product page in that family, under "Also applies to every residential loan", collapsed. The rules have one home; this is a second view of them, not a copy in the data.
- `kind: "product"`: 20 product pages. `glanceRows` names the first-cell text of this product's row(s) in the family's Part 3B limits table (section 6).

### 1.2 Build assertions (fail the build on any)

1. Every rule ID the parser returns appears in exactly one topic, and in topic 7 in exactly one product. Topic 7 `rules` equals the union of its product rules.
2. Every ID in the map exists in the parsed policy. **Today this fails for COM-NNN-01 to -08** because of a parser bug (section 10). Fix the parser first; do not drop the NNN product.
3. Every `glance[k][1]` is a substring of its rule's text, so the authored rows cannot drift from the Bible.
4. No rule, formula, deal, state-row or decision code appears in `name`, `oneLine`, `summary`, `apply`, `why`, `glance` labels or check `lines`/`result` (quality bar 1.1).
5. Every `seeAlso` and check `rules` ID exists. No `seeAlso` ID is in its own topic.

## 2. Routes and anchors

| Route | Shows |
| --- | --- |
| `#policy` | Desktop: rail plus topic 1. Phone: the topic index |
| `#policy/4` | Topic 4 page |
| `#policy/7` | Topic 7 index: product chooser plus the three family comparison tables |
| `#policy/7/res-fix-and-flip` | One product page |
| `#policy/CORE-BOR-12` | Legacy and lesson deep link. Resolves the rule's topic (and product), opens that page, expands "All rules in this topic", scrolls to `#rule-CORE-BOR-12`, focuses it and adds the `hit` class (as today) |
| `#policy/limits` | Printable "All limits at a glance": the four Part 3B tables intact |

Rule cards keep `id="rule-<ID>"`. A numeric second segment is a topic and a slug is a product. A segment that matches the rule-ID pattern is a rule. Unknown values fall back to `#policy` with a short "That rule or topic was not found" note.

## 3. Desktop layout (720 px and wider)

- **Head**: kicker "Reference · Model Credit Policy", H1 "Model Credit Policy", purpose line "The rules every loan in this course must meet, in the order you work a deal." Then "Last reviewed <month year>" and the training label in the notice strip (quality bar 1.4, 1.12).
- **Filter bar** (section 5) under the head, full width.
- **Left rail** (about 280 px, sticky): 13 rows, each "N  Topic name" plus a count badge ("9 rules", or "7 of 9" when the core filter is on). Topic 7 expands to its products in the rail when active, grouped under Residential, Multifamily and Commercial. The current row has `aria-current="page"`. The rail is a `nav` with the label "Policy topics".
- **Topic pane**: the topic page (section 4) at a 60-80 character measure. Previous and next topic links at the bottom, by number.

## 4. Topic page order

1. Kicker "Credit Policy · Topic N of 13", then H1 topic name, then `oneLine` as the subtitle.
2. **In plain English**: `summary`.
3. **Limits at a glance**: a two-column table (Test, Limit). Rows come from (a) the Core Part 3B rows routed to this topic (section 6), then (b) `glance` rows. Each row ends with a small link to its rule card. Omit the block if there are no rows (topics 7 index and 13 still get routed rows).
4. **How to apply it on a file**: `apply` as an ordered list. Omit if empty.
5. **Worked check: <deal>**: a definition-style table, label | working, with the `result` row emphasised. Add a "Deal file" link to `#deals/<slug>` for `deal` and each `otherDeals`. Money is already formatted in the data; render as given. Note under it: "Numbers from the running deal file; results compared at full precision."
6. **Why these rules exist**: `why`.
7. **Where the course teaches it**: home `modules` first, by module name ("Module 6 · Borrower, sponsor and guarantor analysis"), then "Also used in" with every other module that cites a rule in this topic (computed from lesson citations, as `usedIn` does today).
8. **Related rules elsewhere**: `seeAlso` as plain-name links ("Ground-up: minimum completed builds", built from the target rule's topic or product name plus its rule name or first clause). Omit if empty.
9. **All rules in this topic (N)**: a `details`, collapsed by default, holding today's rule cards in `rules` order, then any `attach` items (tables in full; formula examples as today's collapsed "Worked example: <formula name>" box with a link to the formula page).
10. **Market evidence**: Audit mode only (section 8).

**Topic 7 index** replaces items 3-5 with a **product chooser**: three family columns (one stacked list on phones) of product cards. Each card shows the name, rule count and the product's key limits from its `glanceRows` (max leverage and coverage cells only). Below the chooser, "Compare products" shows the Residential, Multifamily and Commercial Part 3B tables with their footer lines.

**Product page** uses the same order: summary line "Every limit for <product> in one place." Then limits at a glance (the product's Part 3B row(s), transposed to Test | Limit), the family block (section 1.1), the worked check if present, and the rules. The breadcrumb is "Reference shelf › Model Credit Policy › 7 Limits and terms by product › <product>".

## 5. Filters and search

- **Used in the core course**: a switch, on by default. The core set is every rule ID cited in `modules/core/c*/lesson.md`, computed at build time (160 today; the "147" in decision 12 is stale). When on, rule cards outside the set are hidden, counts read "7 of 9", and topics or products with zero core rules stay listed but dimmed, with "Not used in the core course". Topic content above the rule list (summary, glance, check) never hides. A note in the collapsed list reads "2 more rules apply outside the core course. Show all rules."
- **Product**: a select ("All products" plus the 20 products, grouped by family). It applies only to topic 7 and to rule cards whose home is a product. On other topics it filters nothing but shows a line: "Showing rules for every product." Picking a product while on topic 7 opens that product page.
- **Search**: one box, scoped to the whole policy, not the open topic. Typing (debounce 150 ms, every word must match, as today) swaps the topic pane for a **results list grouped by topic**: "Topic 4 · Guarantor credit… (3)", each with matching rule cards expanded and the match highlighted. Haystack: rule ID, rule name, rule text, why, topic name, product name. The rail counts show matches per topic; topics with no match dim. Clearing the box restores the topic that was open. Search respects the core filter, and the empty state says "No rule matches in the core course. Search all rules" with a one-click switch.
- Filter state lives in the URL query (`#policy/4?all=1&q=liquidity`) so a link reproduces the view.

## 6. Part 3B "limits at a glance" tables

Keep all four tables, unchanged in content.

- **Core table**: split by row. Route each row to the topic that holds the **first rule ID** in its "Policy section" cell (`CORE-BOR-12 (F-CORE-25)` routes to topic 4). Expected spread: topic 2 (2 rows), 4 (9), 5 (1), 8 (4), 9 (1), 10 (4), 13 (3). Assert that every row routes.
- **Residential, Multifamily, Commercial tables**: shown whole on the topic 7 index ("Compare products"), and row by row on each product page via `glanceRows`. Footer lines (for example, "All loans: $75,000-$2,000,000…") show under the family table and in the family block.
- **Print**: `#policy/limits` shows all four tables intact, with the snapshot date from `docs/SNAPSHOT.md` and the training label.
- **Learner mode**: hide the "Policy section" column and strip product codes in parentheses from the first cell, so "Value-add bridge (MF-BR)" shows as "Value-add bridge". Audit mode shows both.

## 7. Phone (under 720 px; designed at 390 px)

- `#policy` is a **full-screen topic index**: the H1, the training label in the page flow, a filter button ("Filters · Core course"), then 13 rows. Each row shows the number, the name, `oneLine` and the rule count. Rows are at least 44 px tall and are whole-row links.
- Tapping a row opens the topic page in single-column order (section 4). The bottom bar's Previous and Next name the adjacent topics. A back link "All topics" sits at the top.
- "All rules in this topic" is collapsed. Rule cards are edge to edge with 16 px gutters (layout pattern P19). Limits tables become stacked label/value rows with no sideways scroll (quality bar 1.7, 1.8).
- **Filters** open in a sheet (dialog with focus trap, Escape and a Done button): core switch, product select, search box. Search results replace the index while a query is active.
- Topic 7 on a phone: the product chooser is a list grouped by family. A product opens its own page.

## 8. Audit mode

Audit mode (the existing toggle) adds these, and the learner view never shows them:

- the rule ID on every card (today's `codeA` chip) and the "Policy section" column in the limits tables;
- "Market evidence": the rationale text with sources and dates, collapsed per card (today's regex split stays until the Bible separates reasons from evidence);
- "Basis" (Market, Judgment, Legal) per card;
- a "Map check" panel per topic listing its rule IDs, `seeAlso` IDs, the core-used count and any `glance` row's rule ID;
- the author view (research, decision log, change notes), unchanged.

## 9. Citation labels

- **Format**: `Credit Policy N: Topic name`, for example "Credit Policy 4: Guarantor credit, liquidity, net worth and experience". For a product: "Credit Policy 7: Limits and terms by product, Commercial bridge".
- **Markers in lessons**: the `bpl:policy` note and inline citation markers show that label and link to `#policy/<rule ID>`, which opens the rule's topic. This replaces `r.sectionName` ("Core Part 2B: …"). Add `topicLabel` to each rule at build time and use it in `policyUsed()` (module rail card "Policy used in this module") and in the citation popover.
- **Lesson text and memo practice**: learners cite "Credit Policy N: Topic name". `lesson-format.md` section 5 and the C4 sample need the same change (owner to approve).
- Topic numbers are stable. If a topic is ever added, append it at 14; do not renumber.

## 10. Known source and parser issues the build must handle

1. **COM-NNN-01 to -08 are dropped by `parse_policy()`.** The formula-block reader (`build.py`, the `if fid:` branch) consumes lines up to the next bold or `#` heading. It does not stop at a `| Rule ID |` table, so the NNN rule table after F-COM-11 is swallowed into that formula's example. Fix: add `\|\s*Rule ID\s*\|` to that loop's stop pattern, as the block-rule loop already has. Re-run assertion 1.2.1.
2. **COM-BR-09 and COM-TRM-09 are parsed twice**: once as a block rule (bold heading with the table) and once as a table row with the same ID. The map lists each ID once. The builder should merge the two into one card: the row's text, then the table.
3. **MF-BR-14 swallows the multifamily "Exceptions." paragraph** and a trailing `---`. Split the paragraph off as an `md` item and attach it to topic 10 (multifamily exceptions).
4. **Rule text still carries codes** (76 rules cite other IDs). On learner cards, render an in-text rule ID as a link labelled with the target's plain name, and a formula ID as the formula's name, as the citation renderer already does elsewhere. Do not change the rule text.

## 11. Why this shape (cognitive load)

- **One question per screen.** The policy is reorganised around the question a learner has on a file ("can this guarantor sign?"), not the order it was researched in. Thirteen topics fall within the range a reader can scan, and the deal order gives them a built-in sequence (signalling).
- **Summary before detail.** Each page opens with three sentences and a short limits table. The full rules wait in a collapsed list. This follows pretraining and segmenting: the reader gets the frame first, then the 9-16 cards.
- **Worked check next to the rules.** A running-deal example sits on the same page as the limits it applies (contiguity), with the same deals the lessons use. That keeps the example close to practice.
- **No copies.** Every rule has one home, and `seeAlso` and the family block link to it rather than repeating it (redundancy principle; one source of truth).
- **Default to what the course uses.** The core filter hides about 45% of the 289 rules on first visit, the parts a core learner does not need yet, without removing them.
- **Codes out of the reading path.** Plain names and topic labels carry the meaning, and IDs stay one click away in Audit mode (quality bar 1.1).

## 12. Accessibility

- Rail and phone index are lists of links. The current topic has `aria-current`. Counts are in text, not only in badges.
- "All rules in this topic" uses native `details`/`summary`. The filter sheet is a labelled dialog that returns focus on close.
- The search results region is `aria-live="polite"` and announces "N rules in M topics".
- Worked-check and limits tables have `caption`s and header cells. On phones the stacked rows keep their labels.
- Deep-link focus goes to the rule card (`tabIndex=-1`), as today. Contrast and keyboard checks run through the existing `check:a11y` gate.
