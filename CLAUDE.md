# CLAUDE.md

Internal training course on business-purpose real estate lending (BPL). Solo learner and course owner. Fictional data only.

## Source of truth

- The live **Course Bible** (a Claude Doc) is the source of truth for course content, policy and formulas. This repo cannot reach it.
- Files in `docs/` and `data/running-deals/` are exported snapshots. Check `docs/SNAPSHOT.md` before relying on one. If a snapshot is stale, say so; don't guess at newer content.
- `formulas/<family>/reference/library_source.py` are the scripts that generated the Formula Library. `formulas/<family>/tests/fixtures.json` holds their test cases (rebuild with `npm run fixtures`, never edit by hand).
- All 118 formulas (354 test cases) are in the reference scripts. F-CORE-38 and -39 are reserved for the C7 proposals.

## Content rules (non-negotiable)

- Label every learner-facing output: **"Model policy for training - not for live lending decisions."**
- Never invent a policy limit, threshold or rate. Use only the Model Credit Policy and the Formula Library. If a needed limit is missing, stop and ask.
- Cite rule IDs (`FAMILY-TOPIC-NN`, e.g. `CORE-AUTH-01`) and formula IDs (`F-FAMILY-NN`, e.g. `F-CORE-14`).
- Work every formula step by step with real numbers.
- Tag every legal statement `[VERIFY: source; checked <date>]`. US sources only, preferring statutes and regulators.
- Plain English. Sentences under 25 words. US dollars. Fictional borrowers and deals.
- Running deals: RD-RES-01 Maple Run (Ohio), RD-MF-01 Cedar Court (North Carolina), RD-COM-01 Birchwood Plaza (Indiana). Their numbers must match `data/running-deals/`.
- End module outputs with: a self-check, "What to look up yourself" and "How to check it". Research open items yourself before listing them.

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
- `npm test` (Vitest), `npm run test:excel` (pytest + LibreOffice), `npm run test:e2e` (Playwright)
- `npm run fixtures`, `npm run xlsx:recalc -- <files>`
- All checks must pass before a commit. CI runs them on every push.

## Repo rules

- `assessments/answer-keys/` is git-ignored. Never commit answer keys.
- Never commit secrets, `.env` files or credentials.
- Ask before pushing, rewriting history, or installing system packages.
- Keep `docs/changelog.md` current for every change to content or formulas.
