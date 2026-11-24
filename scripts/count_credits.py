"""Count NASBA QAS self-study credits (Std 7.02 word-count formula) for BPL Academy core modules.

Re-implements the method in docs/accreditation/credit-worksheet-baseline.md (22 Nov 2026, commit 2632c58).

Usage:
  python count_credits.py [--repo PATH] [--ref GITREF] [--json OUT] [--detail]

--ref reads lesson.md and exercise JSON from a git commit (e.g. 2632c58) instead of the working tree,
so the script can be calibrated against the baseline figures.

Words counted: section "3. Teach" (minus "### Sources..." reference lists, see SOURCES_IN_WORDS),
section "8. Job aid", and the learner closing parts "Real-world check", "What to look up yourself"
and "How to check it". Fenced code removed, link targets removed, table rule lines removed,
Markdown symbols stripped; a word is any whitespace token containing a letter, digit or "$".

Questions counted: Practice items + Self-check items + Quiz Set A items + exercises (one each).
"""
import argparse
import json
import re
import subprocess
import sys
from decimal import Decimal, ROUND_FLOOR, ROUND_HALF_UP
from pathlib import Path

MODULES = [f"c{n:02d}" for n in range(15)]
SOURCES_IN_WORDS = False  # baseline lessons had no "### Sources" list; today's choice: exclude (bibliography)

CLOSING_LABELS = ("real-world check", "what to look up yourself", "how to check it")


def read(repo, ref, rel):
    if ref:
        return subprocess.run(["git", "-C", repo, "show", f"{ref}:{rel}"], capture_output=True,
                              text=True, encoding="utf-8", check=True).stdout
    return (Path(repo) / rel).read_text(encoding="utf-8")


def h2_sections(md):
    """Split on '## ' headings -> list of (title, body)."""
    parts, title, buf = [], "_preamble", []
    in_fence = False
    for line in md.split("\n"):
        if line.startswith("```"):
            in_fence = not in_fence
        if not in_fence and line.startswith("## "):
            parts.append((title, "\n".join(buf)))
            title, buf = line[3:].strip(), []
        else:
            buf.append(line)
    parts.append((title, "\n".join(buf)))
    return parts


def find(sections, pattern):
    out = [b for t, b in sections if re.match(pattern, t, re.I)]
    return out[0] if out else ""


def strip_sources(teach):
    """Drop '### Sources...' subsections (reference list) from Teach."""
    out, skip = [], False
    for line in teach.split("\n"):
        if line.startswith("### "):
            skip = bool(re.match(r"### Sources", line))
        if not skip:
            out.append(line)
    return "\n".join(out)


def count_words(text):
    text = re.sub(r"```.*?```", " ", text, flags=re.S)          # fenced code (Mermaid)
    text = re.sub(r"\]\([^)]*\)", "]", text)                     # link targets
    lines = [l for l in text.split("\n") if not re.match(r"^\s*\|?\s*:?-{3,}", l)]  # table rules
    text = "\n".join(lines)
    text = re.sub(r"[*_`#>|]", " ", text)                        # Markdown symbols
    return sum(1 for tok in text.split() if re.search(r"[A-Za-z0-9$]", tok))


def label_blocks(body):
    """Split a section body into blocks starting at top-level bold labels '**Label...'."""
    blocks, label, buf = [], None, []
    for line in body.split("\n"):
        m = re.match(r"^\*\*([^*]+?)[.:*]", line)
        if m:
            blocks.append((label, "\n".join(buf)))
            label, buf = m.group(1).strip().lower(), [line]
        else:
            buf.append(line)
    blocks.append((label, "\n".join(buf)))
    return blocks


def closing_words(sections):
    total = 0
    for title, body in sections:
        if not re.match(r"self-review", title, re.I):
            continue
        # Every labeled block after the self-review table counts, except the Self-check (counted as
        # questions). Sub-labels inside the closing (e.g. "Data flags..." under a Real-world check) count
        # with it. The unlabeled lead block (the self-review table) is author scaffolding.
        for label, block in label_blocks(body):
            if label and not label.startswith("self-check"):
                total += count_words(block)
    return total


def top_numbered(text):
    return len(re.findall(r"^\d+\.\s", text, flags=re.M))


def practice_items(practice):
    """Top-level numbered items before a top-level 'Answer key' label; or '**Problem N' labels.

    Interleaved model answers (indented, or '**Model answer**' after each problem) do not stop the count;
    numbered lines inside a top-level '**Model answer**' block are not items.
    """
    problems = re.findall(r"^\*\*Problem \d+", practice, flags=re.M)
    if problems:
        return len(problems)
    n = 0
    for label, block in label_blocks(practice):
        if label and (label.startswith("answer key") or label.startswith("model answer")
                      or label.startswith("self-score")):
            if label.startswith("answer key"):
                break
            continue
        n += top_numbered(block)
    return n


def self_check_items(sections):
    for title, body in sections:
        for label, block in label_blocks(body):
            if label and label.startswith("self-check"):
                return top_numbered(block)
    return 0


def set_a_items(quiz):
    m = re.search(r"^### Set A\b(.*?)(?=^### |\Z)", quiz, flags=re.M | re.S)
    if not m:
        return 0
    body = m.group(1)
    body = re.split(r"^\*\*Answer key", body, flags=re.M)[0]
    return top_numbered(body)


def measure(repo, ref, mod):
    md = read(repo, ref, f"modules/core/{mod}/lesson.md").replace("\r\n", "\n")
    secs = h2_sections(md)
    teach = find(secs, r"3\.\s*Teach")
    sources_words = count_words(teach) - count_words(strip_sources(teach))
    if not SOURCES_IN_WORDS:
        teach = strip_sources(teach)
    w_teach = count_words(teach)
    w_job = count_words(find(secs, r"8\.\s*Job aid"))
    w_close = closing_words(secs)
    practice = practice_items(find(secs, r"5\.\s*Practice"))
    selfc = self_check_items(secs)
    quiz_a = set_a_items(find(secs, r"6\.\s*Quiz"))
    ex = json.loads(read(repo, ref, f"scripts/course_site/exercises/{mod}.json"))
    exercises = len(ex["exercises"])
    words = w_teach + w_job + w_close
    q = practice + selfc + quiz_a + exercises
    wmin = Decimal(words) / Decimal(180)
    qmin = Decimal(q) * Decimal("1.85")
    total = wmin + qmin
    raw = total / Decimal(50)
    c02 = (raw * 5).to_integral_value(rounding=ROUND_FLOOR) / 5
    c05 = (raw * 2).to_integral_value(rounding=ROUND_FLOOR) / 2
    # spec rule (qas-spec.md, decided 22 Nov 2026): open-answer practice excluded
    raw_spec = (wmin + Decimal(selfc + quiz_a + exercises) * Decimal("1.85")) / 50
    return dict(module=f"C{int(mod[1:])}", words=words, w_teach=w_teach, w_job=w_job, w_close=w_close,
                sources_words=sources_words, practice=practice, self_check=selfc, quiz_a=quiz_a,
                exercises=exercises, questions=q, wmin=wmin, qmin=qmin, total=total, raw=raw,
                c02=c02, c05=c05, raw_spec=raw_spec,
                c02_spec=(raw_spec * 5).to_integral_value(rounding=ROUND_FLOOR) / 5)


def q3(d):
    return d.quantize(Decimal("0.001"), rounding=ROUND_HALF_UP)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default=r"c:\Users\A\bpl-course")
    ap.add_argument("--ref", default=None)
    ap.add_argument("--json", default=None)
    args = ap.parse_args()
    rows = [measure(args.repo, args.ref, m) for m in MODULES]
    hdr = "Mod words teach job close src | prac sc qA ex Qs | w_min q_min total raw c0.2 c0.5 | spec_raw spec0.2"
    print(hdr)
    for r in rows:
        print(f"{r['module']:4} {r['words']:6} {r['w_teach']:6} {r['w_job']:4} {r['w_close']:4} {r['sources_words']:4} | "
              f"{r['practice']:3} {r['self_check']:3} {r['quiz_a']:3} {r['exercises']:2} {r['questions']:3} | "
              f"{q3(r['wmin']):8} {q3(r['qmin']):8} {q3(r['total']):8} {q3(r['raw']):6} {r['c02']:4} {r['c05']:4} | "
              f"{q3(r['raw_spec']):6} {r['c02_spec']:4}")
    tw = sum(r["words"] for r in rows)
    tq = sum(r["questions"] for r in rows)
    tmin = sum(r["total"] for r in rows)
    print(f"TOTAL words {tw} questions {tq} practice {sum(r['practice'] for r in rows)} sc {sum(r['self_check'] for r in rows)} "
          f"qA {sum(r['quiz_a'] for r in rows)} ex {sum(r['exercises'] for r in rows)} sources {sum(r['sources_words'] for r in rows)}")
    print(f"      wmin {q3(sum(r['wmin'] for r in rows))} qmin {q3(sum(r['qmin'] for r in rows))} total {q3(tmin)} "
          f"hours {q3(tmin / 60)} raw {q3(tmin / 50)} sum0.2 {sum(r['c02'] for r in rows)} sum0.5 {sum(r['c05'] for r in rows)} "
          f"spec_sum0.2 {sum(r['c02_spec'] for r in rows)}")
    if args.json:
        out = {
            "computed": "24 Nov 2026",
            "method": "NASBA QAS self-study word count (Std 7.02)",
            "worksheet": "docs/accreditation/credit-worksheet-2026-11-24.md",
            "shown": "spec",
            "claimable": False,
            "modules": {r["module"]: {"minutes": float(q3(r["total"])), "credits": float(r["c02"]),
                                      "words": r["words"], "questions": r["questions"],
                                      "specMinutes": float(q3(r["raw_spec"] * 50)),
                                      "specCredits": float(r["c02_spec"])} for r in rows},
            "total": {"minutes": float(q3(tmin)), "hours": float(q3(tmin / 60)),
                      "credits": float(sum(r["c02"] for r in rows)),
                      "specMinutes": float(q3(sum(r["raw_spec"] * 50 for r in rows))),
                      "specHours": float(q3(sum(r["raw_spec"] * 50 for r in rows) / 60)),
                      "specCredits": float(sum(r["c02_spec"] for r in rows))},
        }
        Path(args.json).write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
        print("wrote", args.json)


if __name__ == "__main__":
    sys.exit(main())
