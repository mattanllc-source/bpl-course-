# CLAUDE.md

BPL Academy: a training course on business-purpose real estate lending (BPL). One course owner. Fictional data only.

## Audience and bar

- Learners: new underwriters, loan originators, analysts at private lenders or funds, and people starting their own lending business. Assume a college graduate with basic finance who is new to lending.
- Structure: a shared core (credit, policy, running deals, US law) plus short role tracks. Tag every module and objective with the roles it serves.
- Bar: university-level depth (upper undergraduate to early graduate), CFI and Wall Street Prep visual caliber, built to Quality Matters, NASBA QAS self-study and WCAG 2.2 AA.
- Objectives describe lending skills, not course navigation. No author metadata (Bloom levels, section names) on learner pages.

## Source of truth

- Migration from the live **Course Bible** (a Claude Doc) to this repo is under way. `docs/SNAPSHOT.md` records which parts have moved.
- Lessons rewritten from Milestone 4 on are written in this repo in `docs/standards/lesson-format.md` format. Once a module moves, the repo copy is the source of truth for it. Mark it in `docs/SNAPSHOT.md`.
- For anything not yet moved, the Bible is the source of truth and files in `docs/` and `data/running-deals/` are exported snapshots. Check `docs/SNAPSHOT.md` before relying on one. If a snapshot is stale, say so; don't guess at newer content.
- `formulas/<family>/reference/library_source.py` are the scripts that generated the Formula Library. `formulas/<family>/tests/fixtures.json` holds their test cases (rebuild with `npm run fixtures`, never edit by hand). For current formula counts, read the fixtures, not a number written here.

## Content rules (non-negotiable)

- Label every learner-facing output: **"Model policy for training - not for live lending decisions."**
- Never invent a policy limit, threshold or rate. Use only the Model Credit Policy and the Formula Library. If a needed limit is missing, stop and ask.
- Cite rule IDs (`FAMILY-TOPIC-NN`, e.g. `CORE-AUTH-01`) and formula IDs (`F-FAMILY-NN`, e.g. `F-CORE-14`) in source files, author notes and the reference shelf. Learner pages use plain names; an ID appears only as a small link to its source, never as a bare list.
- Work every formula step by step with real numbers.
- Tag every legal statement `[VERIFY: source; checked <date>]` in source files. Learner pages render it as a numbered source footnote, never the raw tag. US sources only, preferring statutes and regulators.
- Plain English. Sentences under 25 words. US dollars. Fictional borrowers and deals.
- Running deals: RD-RES-01 Maple Run (Ohio), RD-MF-01 Cedar Court (North Carolina), RD-COM-01 Birchwood Plaza (Indiana). Their numbers must match `data/running-deals/`.
- Each module's wrap-up page carries a self-check, "What to look up yourself" and "How to check it". Research open items yourself before listing them.
- Assessments (quizzes, self-checks, exams) are multiple choice only: single best answer, four options, auto-scored, mapped to objectives, with a rationale for every option.
- Every learner-facing page must pass `docs/standards/quality-bar.md` (with `lesson-format.md` and `layout-patterns.md`) before it is called done. Run its review gate and show the owner screenshots; never self-declare done.

## Number conventions

- Keep full precision. Round only for display, half up (`formulas/shared/round.ts`: `roundHalfUp`, `money`, `pct`), matching Python `Decimal(...).quantize(ROUND_HALF_UP)`.
- Interest is Actual/360. The funding day counts; the payoff day does not.
- Prepaid interest runs to month-end (CORE-CLS-04).
- Money shows as `$1,234.56`, negatives as `−$1,234.56` (true minus sign).

## Porting formulas to TypeScript

- One function per formula ID in `formulas/<family>/index.ts`, with a JSDoc line: ID, name, formula.
- Tests in `formulas/<family>/tests/<family>.test.ts` must check against `fixtures.json` expected values, using the same display rounding.
- Reject invalid inputs (negative amounts, zero denominators) with `RangeError`.
- Update the "Formula port status" in `README.md` and add a line to `docs/changelog.md`.

## Commands

- `npm run lint`, `npm run typecheck`, `npx tsc -b calculators`
- `npm test` (Vitest; run it from PowerShell — from Git Bash every suite fails to load with "reading 'config'"), `npm run test:excel` (pytest + LibreOffice), `npm run test:e2e` (Playwright), `npm run test:all`
- `npm run build:course` builds `exports/core-course.html`; then `npm run check:copy`, `check:layout` and `check:a11y`
- `npm run fixtures`, `npm run xlsx:recalc -- <files>`
- All checks must pass before a commit. CI runs them on every push.
- Run browser checks (layout, a11y) one at a time, never in parallel. Run each check once and read its own output; no polling or sleep loops. Check free memory first; the machine has crashed under load.

## Working method

- Work in milestones, each with a definition of done and owner sign-off. Ask questions up front instead of reworking.
- Explain each step in one line before running it. If a step fails, stop, show the error and suggest a fix.
- Never print or store secrets.

## Repo rules

- `assessments/answer-keys/` is git-ignored. Never commit answer keys.
- Never commit secrets, `.env` files or credentials.
- Ask before pushing, rewriting history, or installing system packages.
- Before committing, show git status and the commit message and wait for the owner's OK. Write each message to a uniquely named file (e.g. `commitmsg-<topic>-<date>.txt`) and check its first line before `git commit -F`.
- Keep `docs/changelog.md` current for every change to content or formulas.
