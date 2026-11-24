"""Build the BPL Core Course page from the core lessons and the doc snapshots.

Reads modules/core/c00-c14/lesson.md, module titles and hours from docs/course-bible.md
(Section 3, Core table), and the references the lessons cite. Writes one self-contained
HTML page to exports/core-course.html, ready to publish. This is the redesigned
"BPL Academy" reader. It shares the exercises folder and the formula bundler with
scripts/course_site/ and keeps its own template, styles and app scripts in this folder.

Run: python scripts/course_site/build.py
Model policy for training - not for live lending decisions.
"""
import json
import os
import pathlib
import re
import shutil
import subprocess
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import lesson_format  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parents[2]
HERE = pathlib.Path(__file__).resolve().parent
SHARED = HERE                             # scripts/course_site: exercises, bundle_formulas.mjs, check_exercises.mjs
TEMPLATE = HERE / "template.html"
OUT = pathlib.Path(os.environ["BPL_OUT"]) if os.environ.get("BPL_OUT") else ROOT / "exports" / "core-course.html"


REFS = [
    ("policy", "Model Credit Policy", "docs/credit-policy/model-credit-policy.md"),
    ("formulas", "Formula Library", "docs/formulas/formula-library.md"),
    ("deals", "Running deals", "data/running-deals/running-deals.md"),
    ("state-law", "State Law Table", "docs/credit-policy/state-law-table.md"),
]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


# ---------- learner view: strip authoring scaffolding, keep all teaching content ----------
# Sections that exist only for the course author (Course Bible LD-04/LD-07 and Section 7 checks).
AUTHOR_SECTIONS = ("Timing plan", "Alignment matrix")
# "Rules" is left out on purpose: a bare list of rule IDs means nothing to a learner.
# Rules stay linked in the lesson text, where each chip shows the rule's name on hover.
KEEP_FACTS = ("Formulas", "Running deals")
# Author placeholders that must never reach the learner page.
AUTHOR_NOTE_RE = re.compile(r"^\s*[*_]{0,2}Author note\b", re.I)
PLACEHOLDER_RE = re.compile(r"^\s*(\*\*)?Review questions\.?(\*\*)?\s*Added in Phase 3\b.*$", re.I)


def formula_names() -> dict:
    """F-ID -> plain name, from the Formula Library headings ("### F-CORE-01: Interest-only payment")."""
    names = {}
    for m in re.finditer(r"^### (F-[A-Z]+-\d+):\s*(.+?)\s*$", read("docs/formulas/formula-library.md"), re.M):
        names[m.group(1)] = re.sub(r"\s*\(SUGGESTED\)$", "", m.group(2)).strip()
    return names


FORMULA_NAMES: dict = {}


def formula_list(cell: str) -> list:
    """Expand "F-CORE-01, -02; F-RES-09" into named bullets; return [] when no IDs are listed."""
    ids, family = [], None
    for tok in re.findall(r"F-[A-Z]+-\d+|(?<![\w-])-\d{2}\b|\bto\b", cell):
        if tok.startswith("F-"):
            family = tok.rsplit("-", 1)[0]
            ids.append(tok)
        elif tok == "to":
            ids.append("to")
        elif family:
            ids.append(f"{family}{tok}")
    out, i = [], 0
    while i < len(ids):                         # expand "F-CORE-40 to -43" ranges
        if ids[i] == "to" and out and i + 1 < len(ids):
            fam, a = out[-1].rsplit("-", 1)
            b = ids[i + 1].rsplit("-", 1)[1]
            out += [f"{fam}-{n:02d}" for n in range(int(a) + 1, int(b) + 1)]
            i += 2
            continue
        if ids[i] != "to" and ids[i] not in out:
            out.append(ids[i])
        i += 1
    # Learners see plain names only; the IDs stay available in Audit mode and the formula lookup.
    return [f"  - {FORMULA_NAMES[f]}" for f in out if f in FORMULA_NAMES]


# Learner-facing names for author section titles (the page's step tabs match these too).
SECTION_NAMES = {
    "hook": "Why this matters",
    "objectives": "What you will be able to do",
    "ojt task": "Workplace task",
    "job aid": "Quick reference",
    "wrap-up": "Review and next steps",
}
LABEL = "**Model policy for training - not for live lending decisions.**"


def _clean_paren(m: re.Match) -> str:
    """Drop internal cross-references (LD-xx, glossary item numbers) from a parenthetical."""
    space, inner = m.group(1), m.group(2)
    cleaned = re.sub(r",?\s*per LD-\d+", "", inner)
    parts = [p for p in cleaned.split(";")
             if not re.fullmatch(r"\s*(LD-\d+|(Main )?[Gg]lossary( item)? \d+(,\s*\d+)*|Main Sections?\b.*)\s*", p)]
    kept = ";".join(parts).strip()
    if kept == inner.strip():
        return m.group(0)                      # nothing to drop: leave it exactly as written
    return f"{space}({kept})" if kept else ""


def author_clean(line: str) -> str:
    """Research and author notes that never belong in learner copy (quality bar 1.2)."""
    line = re.sub(r"\s*\((?:N\.D\.|OLD|undated)\)", "", line)
    line = re.sub(r",\s*(?:N\.D\.|OLD)(?=[;),.])", "", line)
    line = re.sub(r"\bN\.D\.\s*", "", line)
    line = re.sub(r"\bSources for Teach\b", "Sources", line)
    line = re.sub(r"\bthe OJT\b", "the workplace task", line)
    line = re.sub(r"\bOJT\b", "Workplace task", line)
    line = re.sub(r"\b(?:Added|Revised) \d{1,2} [A-Z][a-z]{2} \d{4}(?: with C\d+)?(?: after [^.]*)?\.\s*", "", line)
    line = re.sub(r"\bYour decision,?\s*", "Course decision, ", line)
    line = re.sub(r"`\\?\[VERIFY: ([^`\]]*?)\\?\]`", r"“Source: \1”", line)
    line = re.sub(r"\\?\[VERIFY\\?\]\s+tags?\b", lambda m: "source tags" if m.group(0).endswith("s") else "source tag", line)
    line = re.sub(r"\bVERIFY tag", "source tag", line)
    line = re.sub(r"\[VERIFY\] source\b", "source", line)
    return bible_clean(line)


def bible_clean(line: str) -> str:
    """References to the author's Course Bible document read as plain course wording (or go, inside brackets)."""
    line = re.sub(r"\s*\((?:[^()]*?[;,]\s*)?(?:Course Bible|Main Sections?|Bible)\b[^()]*\)", "", line)
    line = re.sub(r"\bthe Course Bible's\b", "the course's", line)
    line = re.sub(r"\bCourse Bible glossary\b", "course glossary", line)
    line = re.sub(r"\b[Tt]he Course Bible\b", "the course", line)
    line = re.sub(r"\bCourse Bible(?: section \d+| \d+(?:\.\d+)?)?", "the course", line)
    line = re.sub(r"\bthis file\b", "this deal file", line)
    line = re.sub(r"\bfamilies set\b", "other loan types use", line)
    line = re.sub(r"\bfor the family\b", "for the loan type", line)
    return line


def mermaid_clean(line: str) -> str:
    """Author wording inside diagram labels (the renderer maps IDs to names)."""
    line = line.replace("VERIFY tag", "source tag").replace("the SLT row", "the state law entry")
    return line.replace("Course Bible glossary", "Course glossary").replace("Course Bible", "the course")


QO_RE = re.compile(r"^(\s*\d+\.\s+)(?:\*\*)?\((?:Critical,\s*)?O(\d+)\)")


def clean_line(line: str) -> str:
    qo = QO_RE.match(line)
    line = author_clean(line)
    line = _clean_line(line)
    if qo:
        # The objective a quiz item tests, as an empty marker: the quiz review links back to its lesson.
        line = re.sub(r"^(\s*\d+\.\s+)", lambda m: m.group(1) + f'<span class="qo" data-o="{qo.group(2)}"></span>', line, count=1)
    return line


def _clean_line(line: str) -> str:
    # Skip "](...)" link targets: only plain parentheticals are cleaned.
    line = re.sub(r"(?<!\])(\s?)\(([^()]*)\)", _clean_paren, line)
    line = re.sub(r"^(\s*\d+\.\s+)\(O\d+\)\s*", r"\1", line)          # quiz objective tags
    line = re.sub(r"\(Critical,\s*O\d+\)", "*(critical)*", line)
    # Multiple-choice options on one line -> one option per line.
    m = re.match(r"^(\s*\d+\.\s+)(.*?\S)\s+(A\)\s.*\sB\)\s.*)$", line)
    if m and re.search(r"\sC\)\s", m.group(3)):
        opts = re.split(r"\s+(?=[B-F]\)\s)", m.group(3))
        line = m.group(1) + m.group(2) + "".join("\n    - " + o.strip() for o in opts)
    # Bare spreadsheet formulas -> code spans, so "*" isn't read as italics.
    line = re.sub(r"(?<![`\w])(=[A-Z]+\((?:[^()`]|\([^()`]*\))*\)(?:\*\d+)?)", r"`\1`", line)
    line = re.sub(r"\bMain Sections? (\d)", r"Course Bible section \1", line)
    line = re.sub(r"\bMain (\d+\.\d+)", r"Course Bible \1", line)
    line = re.sub(r"(?<!Course )\bBible Section (\d+)", r"Course Bible section \1", line)
    line = line.replace("Self-review against this rubric, dated (solo mode, Course Bible section 7).",
                        "Check your work against this rubric and date it.")
    # A critical flag at the end of a hidden answer moves in front of it, so it shows before you reveal.
    m = re.match(r"^(\s*\d+\.\s+)(.*?)\s*(\*\*Answer:\*\*.*?)\s*\(C\)\s*$", line)
    if m:
        line = f"{m.group(1)}{m.group(2)} *(critical)* {m.group(3)}"
    else:
        # A question whose answer sits in a separate key (C10, C11) ends with a bare "(C)".
        line = re.sub(r"^(\s*\d+\.\s+.*?\S)\s*\(C\)\s*$", r"\1 *(critical)*", line)
    line = line.replace("Items marked (C) are critical", "Items marked (critical) are critical")
    line = re.sub(r"\b1 hours\b", "1 hour", line)
    return bible_clean(line)


def clean_heading(h: str) -> str:
    h = author_clean(h)
    h = re.sub(r"\s*\((?:SUGGESTED|REQUIRED)\)", "", h)
    h = re.sub(r"^(#+ )\d+\.\s+", r"\1", h)                             # "## 6. Quiz" -> "## Quiz"
    h = re.sub(r":\s*C\d+-(quiz|ojt|jobaid|lesson)-v[\d.]+(?:-draft)?", "", h)   # asset codes, e.g. C3-jobaid-v1.0-draft
    h = re.sub(r"\(Objective \d+,\s*", "(", h)
    h = re.sub(r"\s*\((solo mode|one page)\)", "", h)
    h = re.sub(r"\s*\((?:Objectives? [\d,\- ]+,\s*)?\d+ minutes?\)", "", h)   # "(15 minutes)"
    h = re.sub(r"\s*\(Objectives? [\d,\- ]+\)\s*$", "", h)                    # trailing "(Objective 2)"
    h = re.sub(r"^(#+ )T\d+\.\s+", r"\1", h)                           # "### T1. Title" -> "### Title"
    h = re.sub(r"\s*\(O\d+(?:\s*(?:,|and|-|to)\s*O?\d+)*\)", "", h)    # objective tags "(O1)", "(O2, O3)"
    m = re.match(r"^(## )(.+?)\s*$", h)
    if m:
        key = m.group(2).strip().lower()
        for author, learner in SECTION_NAMES.items():
            if key == author or key.startswith(author + " ") or key.startswith(author + ":"):
                return m.group(1) + learner
    return h


def teach_titles(md: str) -> dict:
    """Teach-chunk titles by number, so a body reference like "(T2)" can name the section."""
    return {m.group(1): clean_heading("## " + m.group(2))[3:].strip()
            for m in re.finditer(r"^### T(\d+)\.\s+(.+)$", md, re.M)}


def name_teach_refs(line: str, titles: dict) -> str:
    """Headings lose their T1-style labels, so point at the section by name instead."""
    def sub(m: re.Match) -> str:
        t = titles.get(m.group(1))
        if not t:
            return m.group(0)
        before = line[:m.start()]
        lead = "The" if re.search(r"(^|[.:]\s)(\w{1,2}\.\s)?$", before) else "the"
        return f"{lead} “{t}” section"
    return re.sub(r"(?<![\w-])T(\d)(?![\w-])", sub, line)


# Author metadata on objectives, e.g. "(Understand; T1)" or "(Apply)": Bloom level and section link are
# for course designers (CLAUDE.md, quality bar 1.2). The source keeps them; learners never see them.
BLOOM_TAG = re.compile(r"\s*\((?:Remember|Understand|Apply|Analy[sz]e|Evaluate|Create)(?:;[^)]*)?\)")


# The quiz page alternates the two forms on every retake (Milestone 2c). The Bible text still says
# "Two retakes, each with the other set"; show what the page does until the module moves into the repo.
RETAKE_TEXT = re.compile(r"Two retakes, each with the other set\.")


def learner_view(md: str) -> str:
    md = BLOOM_TAG.sub("", md)
    md = RETAKE_TEXT.sub("Each retake uses the other form.", md)
    titles = teach_titles(md)
    lines = md.replace("\r\n", "\n").split("\n")
    out, i, in_code, seen_section = [], 0, False, False
    # The page already shows the training label; drop it from the first paragraph.
    # The label sits under the "# C3: ..." title line. The notice bar shows it once, on every screen.
    for j, l in enumerate(lines):
        if l.startswith("## "):
            break
        if LABEL in l:
            rest = l.replace(LABEL, "").strip()
            lines[j] = "" if rest in ("", "Fictional data only.") else rest
            break
    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            in_code = not in_code
        if in_code:
            out.append(mermaid_clean(line)); i += 1; continue
        if PLACEHOLDER_RE.match(line) or AUTHOR_NOTE_RE.match(line):
            i += 1; continue
        # Module facts table (the one before the first section) -> short "In this module" list.
        # Later Item/Detail tables are OJT briefs and stay.
        if not seen_section and re.match(r"^\|\s*Item\s*\|\s*Detail\s*\|", line):
            facts = []
            i += 2
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if len(cells) >= 2 and cells[0] in KEEP_FACTS:
                    if cells[0] == "Formulas" and formula_list(cells[1]):
                        facts.append("- **Formulas you will use:**")
                        facts += formula_list(cells[1])
                    elif cells[0] == "Running deals":
                        deals = re.sub(r"\s*\((?:[^()]*\bLD-\d+[^()]*)\)", "", cells[1])
                        facts.append(f"- **Running deals:** {clean_line(deals)}")
                    elif cells[0] != "Formulas":
                        facts.append(f"- **{cells[0]}:** {clean_line(cells[1])}")
                i += 1
            if facts:
                out += ["**In this module**", ""] + facts
            continue
        if line.startswith("## "):
            seen_section = True
            title = re.sub(r"^## (\d+\.\s*)?", "", line)
            if title.startswith(AUTHOR_SECTIONS):
                i += 1
                while i < len(lines) and not lines[i].startswith("## "):
                    i += 1
                continue
            if title.startswith("Self-review"):
                # Drop the author's checklist table; keep the real-world check and the self-check lines.
                out.append("## Review and next steps")
                i += 1
                while i < len(lines) and not lines[i].startswith("|"):
                    if lines[i].strip():
                        break
                    i += 1
                while i < len(lines) and lines[i].startswith("|"):
                    i += 1
                continue
            out.append(clean_heading(line)); i += 1; continue
        if line.startswith("#"):
            out.append(clean_heading(line)); i += 1; continue
        out.append(name_teach_refs(clean_line(line), titles)); i += 1
    return problems_to_list("\n".join(out))


def problems_to_list(md: str) -> str:
    """Practice written as "**Problem N (O1, T1).** text" + "**Model answer**" blocks (C3 pilot style)
    becomes the numbered list the page turns into practice cards, with each answer nested under its item."""
    out, in_practice, in_item, pad = [], False, False, "   "
    for line in md.split("\n"):
        if line.startswith("## "):
            in_practice, in_item = "Practice" in line, False
            out.append(line)
            continue
        if in_practice:
            # The bold label holds author tags such as "(O1, T1)"; the learner needs only the problem.
            m = re.match(r"^\*\*Problem (\d+)\b.*?\*\*\.?\s*(.*)$", line)
            if m:
                marker = f"{m.group(1)}. "
                out.append(marker + m.group(2))
                # Continuation lines align exactly with the item text ("1. " = 3, "10. " = 4);
                # an extra space would leave a stray text node before "Model answer".
                in_item, pad = True, " " * len(marker)
                continue
            if in_item:
                if not line.strip():
                    out.append("")
                    continue
                if re.fullmatch(r"\*\*Model answer\*\*\s*", line):
                    line = "**Model answer:**"
                out.append(pad + line)
                continue
        out.append(line)
    return "\n".join(out)


# A Core-table row marked "(working title)" names the module as planned, not the lesson as written.
# Until that module is rewritten (M4, decision 5), the page keeps the title that matches the lesson.
CURRENT_TITLES = {"C0": "Program orientation and the BPL market"}


def core_table() -> dict:
    """Module code, title, planned credits and prerequisite from the Course Bible's Core table (section 3).

    Rows read "| Category | C0 | Title | 2.0 | None | Roles |" (24 Nov 2026 layout). Planned credits are
    planning estimates (decision 16; quality bar 2.2): they only weight progress and are never shown."""
    rows = {}
    for line in read("docs/course-bible.md").splitlines():
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        for i, c in enumerate(cells[:-3]):
            if re.fullmatch(r"C\d{1,2}", c) and re.fullmatch(r"\d+(?:\.\d+)?", cells[i + 2]):
                title = cells[i + 1]
                if title.endswith("(working title)"):
                    title = CURRENT_TITLES.get(c, re.sub(r"\s*\(working title\)$", "", title))
                rows[c] = {"title": title, "planned": float(cells[i + 2]), "prereq": cells[i + 3]}
                break
    return rows


def snapshot_note(rel: str) -> str:
    for line in read("docs/SNAPSHOT.md").splitlines():
        name = rel.split("/", 1)[1] if rel.startswith("docs/") else "../" + rel
        if f"`{name}`" in line:
            cells = [c.strip() for c in line.strip("|").split("|")]
            status = re.sub(r"[*`]", "", cells[2]).strip().rstrip(".")
            return f"Snapshot taken {re.sub(r'[*`]', '', cells[1])}. {status}."
    return "Snapshot of the live Course Bible"


EX_DIR = pathlib.Path(os.environ["BPL_EX_DIR"]) if os.environ.get("BPL_EX_DIR") else SHARED / "exercises"


def run_node(*args: str) -> str:
    node = shutil.which("node")
    if not node:
        raise SystemExit("node is required to bundle the core formulas")
    r = subprocess.run([node, *args], capture_output=True, text=True, encoding="utf-8", cwd=ROOT)
    if r.returncode:
        raise SystemExit((r.stderr or r.stdout).strip() or "node failed")
    return r.stdout


def bundle_and_exercises() -> tuple[str, dict]:
    """Browser bundle of the core formulas, plus every exercise spec, validated against it."""
    here = SHARED
    bundle = run_node(str(here / "bundle_formulas.mjs"))
    tmp = ROOT / "exports" / ".bplf.js"
    tmp.parent.mkdir(exist_ok=True)
    tmp.write_text(bundle, encoding="utf-8")
    try:
        run_node(str(here / "check_exercises.mjs"), str(tmp), str(EX_DIR))   # fails loudly on any bad spec
    finally:
        tmp.unlink(missing_ok=True)
    ex = {}
    if EX_DIR.exists():
        for f in sorted(EX_DIR.glob("c[0-9][0-9].json")):
            ex[f.stem] = json.loads(f.read_text(encoding="utf-8"))["exercises"]
    return bundle.replace("</script", "<" + chr(92) + "/script"), ex


MONTHS = {m: i + 1 for i, m in enumerate("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split())}
DATE_RE = re.compile(r"\b(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})\b")


def module_meta(raw: str) -> dict:
    """Version, last-reviewed date and CPE credits from the lesson's own header table."""
    cells = {}
    for line in raw.splitlines():
        if line.startswith("## "):
            break
        m = re.match(r"^\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|\s*$", line)
        if m:
            cells[m.group(1).lower()] = m.group(2)
    meta = {"version": None, "reviewed": None, "credits": None, "projected": False}
    # Newest version named in the Status cell or the change log ("v1.0-draft, 22 Nov 2026: ...").
    found = re.findall(r"^(v\d[\d.]*(?:-draft)?)", cells.get("status", ""))
    found += re.findall(r"\b(v\d[\d.]*(?:-draft)?),? \d{1,2} [A-Z][a-z]{2} \d{4}", cells.get("change log", ""))
    if found:
        num = lambda v: [int(x) for x in re.findall(r"\d+", v)]
        meta["version"] = max((v.rstrip(".") for v in found), key=num)
    hours = cells.get("hours", "") or cells.get("cpe credits", "") or cells.get("credits", "")
    cm = re.search(r"(\d+(?:\.\d+)?)\s*CPE credits?", hours)
    if cm and not re.search(r"project", hours, re.I):
        # A projected credit is a planning figure, not the computed QAS credit (quality bar 2.2): leave it out.
        meta["credits"] = float(cm.group(1))
    # Last reviewed: the newest date in the self-review heading or the change log.
    sr = re.search(r"^## Self-review.*$", raw, re.M)
    dates = (DATE_RE.findall(sr.group(0)) if sr else []) + DATE_RE.findall(cells.get("change log", ""))
    if dates:
        d = max(dates, key=lambda x: (int(x[2]), MONTHS[x[1]], int(x[0])))
        meta["reviewed"] = f"{int(d[0])} {d[1]} {d[2]}"
    return meta


def glossary() -> list:
    """The Course Bible glossary (section 6): one entry per term, with its family."""
    md = read("docs/course-bible.md")
    m = re.search(r"^## 6\. Glossary.*?(?=^## 7\. )", md, re.M | re.S)
    if not m:
        raise SystemExit("Glossary (section 6) not found in docs/course-bible.md")
    out, family = [], ""
    for line in m.group(0).splitlines():
        h = re.match(r"^### 6\.\d+\s+([A-Za-z]+)", line)
        if h:
            family = h.group(1)
            continue
        cells = [c.strip() for c in re.split(r"(?<!\\)\|", line.strip())[1:-1]]
        if len(cells) >= 5 and cells[0].isdigit():
            out.append({"n": int(cells[0]), "term": cells[1], "def": cells[2],
                        "ex": "" if cells[3].lower() in ("none", "-", "") else cells[3],
                        "first": cells[4], "family": family})
    return out


STATES = ("Ohio", "North Carolina", "Indiana")


def deals() -> list:
    """Card facts for the three running deals, taken verbatim from data/running-deals/running-deals.md."""
    md = read("data/running-deals/running-deals.md")
    out = []
    for m in re.finditer(r"^## (RD-[A-Z]+-\d+): (.+?) \((\w+)\)\s*$", md, re.M):
        body = md[m.end():]
        nxt = re.search(r"^## ", body, re.M)
        body = body[:nxt.start()] if nxt else body
        intro = next((l.strip() for l in body.splitlines() if l.strip() and not l.startswith(("|", "#", "*"))), "")
        first = re.match(r"(.*?[.!?])(\s|$)", intro)
        bm = re.search(r"^\|\s*Borrower\s*\|\s*(.+?)\s*\|\s*$", body, re.M)
        borrower = bm.group(1) if bm else ""
        state = next((s for s in STATES if s in borrower), "")
        out.append({"id": m.group(1), "title": m.group(2), "family": m.group(3),
                    "summary": first.group(1) if first else intro, "borrower": borrower.split(",")[0], "state": state})
    return out


# ---------- reference shelf: the four author exports, parsed into learner data ----------
# The exports mirror the Course Bible and are never edited. Only presentation is decided here.

CATEGORIES = [
    ("Foundations", "The market, the business-purpose test and the borrower.", ["C0", "C1", "C2"]),
    ("Real estate analysis", "Interest, property cash flow and value.", ["C3", "C4", "C5"]),
    ("Underwriting", "Sponsor strength, fraud screens and loan sizing.", ["C6", "C7", "C8"]),
    ("Legal and closing", "Documents, title, state law and the funding wire.", ["C9", "C10", "C11"]),
    ("Managing the loan", "Draws, servicing, defaults and the portfolio.", ["C12", "C13", "C14"]),
]

FAMILY_NAME = {"CORE": "Core", "RES": "Residential", "MF": "Multifamily", "COM": "Commercial"}
FAMILY_MODULE = {"R": "Residential", "M": "Multifamily", "CM": "Commercial"}

# Catalog topics for the core formulas (presentation only; the library groups by family).
CORE_TOPICS = [
    ("Loan payments and interest", "What the borrower pays, and when", [1, 2, 3, 4, 5, 31, 32, 33, 47, 49]),
    ("Rates, returns and time value", "Nominal and effective rates, present value and yield", [45, 46, 48, 44]),
    ("Property income", "From rent roll to net operating income", [7, 8, 9, 10, 12]),
    ("Value, leverage and coverage", "The ratios every credit memo reports", [11, 13, 14, 15, 16]),
    ("Loan sizing", "How big the loan can be", [17, 18, 19]),
    ("Pricing, fees and closing", "Rate, points, reserves and the funding wire", [6, 28, 20, 21, 22, 35, 40, 41]),
    ("Borrower strength", "Liquidity, net worth and experience", [24, 25, 26, 27]),
    ("Insurance and valuation", "Coverage and appraisal checks", [34, 36, 37]),
    ("Portfolio and loss", "Exposure, concentration and recovery", [23, 29, 30, 42, 43]),
]
FAMILY_TOPICS = {
    "RES": ("Residential formulas", "Fix-and-flip, ground-up and DSCR rental loans (1-4 units)"),
    "MF": ("Multifamily formulas", "Apartment bridge, term and construction loans (5+ units)"),
    "COM": ("Commercial formulas", "Retail, office and other commercial loans"),
}
UNITS = {"USD": "US dollars", "%": "percent", "days": "days", "months": "months", "count": "count",
         "decimal": "decimal", "x": "multiple, shown as 1.25x", "years": "years", "sf": "square feet",
         "USD a month": "US dollars a month", "USD a year": "US dollars a year"}


def slugify(s: str) -> str:
    s = re.sub(r"\(([^)]*)\)", r" \1 ", s.lower())
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:70]


def table_rows(lines: list) -> list:
    """Markdown table lines -> list of cell lists (header first, rule line dropped)."""
    rows = []
    for l in lines:
        if re.match(r"^\|\s*:?-{3}", l):
            continue
        rows.append([c.strip() for c in re.split(r"(?<!\\)\|", l.strip())[1:-1]])
    return rows


def md_table(rows: list, drop=("basis", "rationale", "rationale (part 1 source)", "source", "part 1 source")) -> str:
    """Rows back to a Markdown table, without the author columns (BASIS, research rationale)."""
    if not rows:
        return ""
    keep = [k for k, h in enumerate(rows[0]) if h.strip().lower() not in drop]
    out = ["| " + " | ".join(rows[0][k] for k in keep) + " |", "| " + " | ".join("---" for _ in keep) + " |"]
    out += ["| " + " | ".join(author_clean(r[k]) if k < len(r) else "" for k in keep) + " |" for r in rows[1:]]
    return "\n".join(out)


def split_top(s: str, sep: str = ";") -> list:
    """Split on sep, but not inside parentheses."""
    out, depth, cur = [], 0, ""
    for ch in s:
        depth += ch == "("
        depth -= ch == ")"
        if ch == sep and depth == 0:
            out.append(cur.strip()); cur = ""
        else:
            cur += ch
    if cur.strip():
        out.append(cur.strip())
    return out


def parse_vars(s: str) -> list:
    out = []
    for part in split_top(s):
        unit, extra = "", ""
        um = re.search(r"\s*\(([^()]*)\)\s*$", part)
        if um:
            bits = [b.strip() for b in um.group(1).split(",")]
            if bits[0] in UNITS or re.fullmatch(r"[A-Za-z%$/ ]{1,20}", bits[0]):
                unit = UNITS.get(bits[0], re.sub(r"\bUSD\b", "US dollars", bits[0]))
                extra = ", ".join(bits[1:])
                part = part[:um.start()].strip()
        sym, _, dfn = part.partition(" = ")
        dfn = dfn.strip()
        if extra:
            dfn = (dfn + "; " if dfn else "") + f"from {extra}"
        out.append({"sym": sym.strip(), "def": dfn, "unit": unit})
    return out


def parse_formulas() -> dict:
    md = read("docs/formulas/formula-library.md").replace("\r\n", "\n")
    conv = re.search(r"^## Library conventions.*?\n(.*?)(?=^## )", md, re.M | re.S)
    conventions = []
    if conv:
        for row in table_rows([l for l in conv.group(1).splitlines() if l.startswith("|")])[1:]:
            if row and row[0] not in ("Status",):
                conventions.append({"name": row[0], "rule": why_clean(row[1])})
    fam_intro = {}
    for m in re.finditer(r"^## \w+ formulas \(F-([A-Z]+)\)\s*\n(.*?)(?=^\| ID )", md, re.M | re.S):
        fam_intro[m.group(1)] = " ".join(l.strip() for l in m.group(2).splitlines() if l.strip())
    out, seen = [], set()
    for m in re.finditer(r"^### (F-([A-Z]+)-(\d+)):\s*(.+?)\s*$", md, re.M):
        fid, fam, num = m.group(1), m.group(2), int(m.group(3))
        body = md[m.end():]
        nxt = re.search(r"^#{2,3} ", body, re.M)
        body = body[:nxt.start()] if nxt else body
        name = re.sub(r"\s*\((?:SUGGESTED|REQUIRED)\)\s*$", "", m.group(4)).strip()
        fields, cur, tex, tests, in_tex = {}, None, "", [], False
        for line in body.split("\n"):
            if line.startswith("```"):
                in_tex = not in_tex
                continue
            if in_tex:
                tex += line + "\n"
                continue
            if line.startswith("|"):
                cells = [c.strip() for c in re.split(r"(?<!\\)\|", line.strip())[1:-1]]
                if cells and re.fullmatch(r"\d+", cells[0]) and len(cells) >= 3:
                    tests.append({"n": int(cells[0]), "inputs": cells[1], "expected": cells[2]})
                cur = None
                continue
            fm = re.match(r"^\*\*([A-Z][^*]+?)\.\*\*\s*(.*)$", line)
            if fm:
                cur = fm.group(1).lower()
                fields[cur] = fm.group(2).strip()
                continue
            if line.startswith("**") and line.rstrip().endswith("**"):
                cur = None                     # "**Core library complete ...**" and other author lines
                continue
            if cur is not None:
                fields[cur] = (fields[cur] + "\n" + line).strip("\n") if fields[cur] else line
        steps = [re.sub(r"^\d+\.\s+", "", l).strip() for l in fields.get("worked example", "").split("\n") if re.match(r"^\d+\.\s", l)]
        mistakes = [re.sub(r"^-\s+", "", l).strip() for l in fields.get("common mistakes", "").split("\n") if l.startswith("- ")]
        mods_cell = fields.get("modules", "")
        core_mods = sorted({f"C{int(x)}" for x in re.findall(r"\bC(\d{1,2})\b", mods_cell)}, key=lambda c: int(c[1:]))
        fam_mods = sorted({FAMILY_MODULE[x] for x in re.findall(r"\b(CM|R|M)\d\b", mods_cell)})
        if fam == "CORE":
            topic = next((t for t, _, ids in CORE_TOPICS if num in ids), "Other core formulas")
        else:
            topic = FAMILY_TOPICS[fam][0]
        slug = slugify(name)
        while slug in seen:
            slug += "-" + fam.lower()
        seen.add(slug)
        out.append({
            "id": fid, "fam": fam, "slug": slug, "name": name, "topic": topic,
            "purpose": fields.get("purpose", ""), "words": fields.get("formula", ""), "tex": tex.strip(),
            "vars": parse_vars(fields.get("variables and units", "")), "steps": steps,
            "read": fields.get("interpretation", ""), "related": fields.get("related rules", ""),
            "mistakes": mistakes, "edge": fields.get("edge cases", ""), "rounding": fields.get("rounding and day count", ""),
            "modules": core_mods, "familyModules": fam_mods, "tests": tests,
        })
    topics = [{"title": t, "blurb": b} for t, b, _ in CORE_TOPICS]
    if any(f["topic"] == "Other core formulas" for f in out):
        topics.append({"title": "Other core formulas", "blurb": ""})
    topics += [{"title": t, "blurb": b, "intro": fam_intro.get(k, "")} for k, (t, b) in FAMILY_TOPICS.items()]
    return {"formulas": out, "topics": topics, "conventions": conventions}


BASIS_WORDS = {"MARKET": "market practice", "JUDGMENT": "course judgment", "LEGAL": "law and regulation"}


def basis_text(cell: str) -> str:
    words = [BASIS_WORDS[w] for w in re.findall(r"MARKET|JUDGMENT|LEGAL", cell)]
    return (", ".join(words[:-1]) + " and " + words[-1] if len(words) > 1 else words[0]).capitalize() if words else ""


def why_clean(s: str) -> str:
    """A rationale cell, minus research bookkeeping: dates of decisions, undated flags, change notes."""
    s = author_clean(s)
    s = re.sub(r"\s*\((?:[^()]*?\b)?D-[A-Z]+-\d+(?:,? (?:decided )?\d{1,2} [A-Z][a-z]{2} \d{4})?\)", "", s)
    s = re.sub(r"\s*\((?:decided|set) \d{1,2} [A-Z][a-z]{2} \d{4}\)", "", s)
    s = re.sub(r",? (?:decided|set) \d{1,2} [A-Z][a-z]{2} \d{4}", "", s)
    s = re.sub(r"\bis (?:a )?JUDGMENT\b", "is a course judgment", s)
    s = re.sub(r"\bare JUDGMENT\b", "are course judgments", s)
    s = re.sub(r"\bJUDGMENT\b", "course judgment", s)
    s = re.sub(r"\(Part 1[A-H]?\)|\bPart 1[A-H]?\b", "the research notes", s)
    return re.sub(r"\s{2,}", " ", s).strip()


def clean_title(t: str) -> str:
    t = re.sub(r"^(?:CORE|RES|MF|COM)-[A-Z]+-\d+\s+(\w)", lambda m: m.group(1).upper(), t)   # "RES-DSCR-03 maximum LTV matrix"
    t = re.sub(r"\s*\((?:added|revised) [^)]*\)", "", t, flags=re.I)
    t = re.sub(r"\s*\((?:[A-Z]+-[A-Z]+(?:-\d+)?(?:,\s*)?)+(?:, applies to [^)]*)?\)", "", t)
    t = re.sub(r"\s*\((?:[A-Z]+-[A-Z]+-\d+)[^)]*\)", "", t)
    return t.strip()


def parse_policy() -> dict:
    md = read("docs/credit-policy/model-credit-policy.md").replace("\r\n", "\n")
    lines = md.split("\n")
    fams, rules, decisions, summary = [], [], [], {}
    fam = sec = sub = None
    part = None
    i = 0

    def block_lines(j):
        out = []
        while j < len(lines) and lines[j].startswith("|"):
            out.append(lines[j]); j += 1
        return out, j

    while i < len(lines):
        l = lines[i]
        fm = re.match(r"^# (Core|Residential|Multifamily|Commercial)\b(.*)$", l)
        if fm:
            fam = {"name": fm.group(1), "label": (fm.group(1) + fm.group(2)).strip(), "sections": [], "limits": []}
            fams.append(fam); sec = sub = None; part = None; i += 1; continue
        hm = re.match(r"^## (?:(Core|Residential|Multifamily|Commercial) )?Part (\d)([A-Z]?):?\s*(.*)$", l)
        if hm:
            part = hm.group(2) + hm.group(3)
            sec = None; sub = None
            if part.startswith("2"):
                sec = {"title": clean_title(hm.group(4)), "intro": "", "groups": [], "part": f"{fam['name']} Part {part}"}
                fam["sections"].append(sec)
            i += 1; continue
        if l.startswith("## "):
            part = "x"; sec = sub = None; i += 1; continue
        # decisions (author view and audit drawer)
        if l.startswith("|") and part and (part.startswith("3A") or part == "x" or fam is None):
            tl, j = block_lines(i)
            rows = table_rows(tl)
            head = rows[0] if rows else []
            for r in rows[1:]:
                if r and re.fullmatch(r"D-[A-Z]+-\d+", r[0]):
                    f = dict(zip(head, r))
                    decisions.append({"id": r[0], "question": f.get("Question", ""), "covered": f.get("Rules covered", f.get("Rules and formulas", "")),
                                      "decision": f.get("Decision", ""), "options": f.get("Options: pros (+) and cons (−)", ""), "recommend": f.get("Recommend", "")})
            i = j; continue
        if part and part.startswith("3B") and l.startswith("|"):
            tl, j = block_lines(i)
            rows = table_rows(tl)
            head = [h.lower() for h in rows[0]]
            keep = [k for k, h in enumerate(head) if h != "basis"]
            for r in rows[1:]:
                f = dict(zip(head, r))
                for k, cell in enumerate(r):
                    for rid in expand_ids(cell):
                        if "limit" in f and head[k] == "rule id":
                            summary.setdefault(rid, f"{f.get('area', r[0])}: {f['limit']}")
                        elif k:
                            plain = re.sub(r"\s*\((?:[A-Z]+-[A-Z]+-\d+[^)]*)\)", "", cell).strip()
                            summary.setdefault(rid, f"{r[0]}, {head[k]}: {plain}")
            heads = ["Policy section" if rows[0][k].strip().lower() == "rule id" else rows[0][k] for k in keep]
            md_rows = ["| " + " | ".join(heads) + " |", "| " + " | ".join("---" for _ in keep) + " |"]
            md_rows += ["| " + " | ".join(r[k] if k < len(r) else "" for k in keep) + " |" for r in rows[1:]]
            fam["limits"].append("\n".join(md_rows))
            i = j; continue
        if part and part.startswith("3B") and l.strip() and not l.startswith(("**", "---")) and fam["limits"]:
            fam["limits"].append(author_clean(l)); i += 1; continue
        if not sec:
            i += 1; continue
        # inside a Part 2 section
        if re.match(r"^---\s*$", l) or 'Say "continue"' in l or re.match(r"^\*\*New topic codes\.\*\*", l):
            i += 1; continue
        bm = re.match(r"^\*\*(.+?)\*\*\s*$", l)
        if bm:
            title = bm.group(1)
            fid = re.match(r"^(F-[A-Z]+-\d+)\b", title)
            rid = re.search(r"\(((?:CORE|RES|MF|COM)-[A-Z]+-\d+)(?:,[^)]*)?\)\s*$", title)
            if fid:
                # A formula worked in the policy: learners get it on the formula page; keep the policy's example.
                j = i + 1; body = []
                while j < len(lines) and not re.match(r"^(\*\*[^*]+\*\*\s*$|#{1,4}\s)", lines[j]):
                    body.append(lines[j]); j += 1
                target = sub if sub else {"title": "", "items": []}
                if not sub:
                    sec["groups"].append(target); sub = target
                target["items"].append({"kind": "formula", "id": fid.group(1), "md": "\n".join(body).strip()})
                i = j; continue
            sub = {"title": clean_title(title), "items": []}
            sec["groups"].append(sub)
            if rid:
                # The rule's own prose and tables, up to the next heading or the next rule table.
                j = i + 1; body = []
                while j < len(lines) and not re.match(r"^(\*\*[^*]+\*\*\s*$|#{1,4}\s|\|\s*Rule ID\s*\|)", lines[j]):
                    body.append(lines[j]); j += 1
                parts, k = [], 0
                while k < len(body):
                    if body[k].startswith("|"):
                        tl = []
                        while k < len(body) and body[k].startswith("|"):
                            tl.append(body[k]); k += 1
                        parts.append(md_table(table_rows(tl)))
                    else:
                        parts.append(author_clean(body[k])); k += 1
                text = "\n".join(parts).strip()
                basis = re.search(r"BASIS:\s*([A-Z +]+)", text)
                text = re.sub(r"BASIS:\s*([A-Z +]+?),\s*", lambda m: f"This rule is {basis_text(m.group(1)).lower()}, ", text)
                text = re.sub(r"\s*BASIS:\s*[A-Z +]+\.?\s*", " ", text).strip()
                rule = {"id": rid.group(1), "name": clean_title(title), "text": text, "basis": basis_text(basis.group(1)) if basis else "",
                        "why": "", "topic": sub["title"], "section": sec["title"], "family": fam["name"], "block": True}
                rules.append(rule); sub["items"].append({"kind": "rule", "id": rule["id"]})
                i = j; continue
            i += 1; continue
        if l.startswith("|"):
            tl, j = block_lines(i)
            rows = table_rows(tl)
            hl = [h.lower() for h in rows[0]] if rows else []
            if "rule id" in hl and hl[0] != "rule id":
                # A limits matrix (one row per rule, one column per tier or type)
                if not sub:
                    sub = {"title": "", "items": []}; sec["groups"].append(sub)
                ci, bi = hl.index("rule id"), hl.index("basis") if "basis" in hl else -1
                wi = next((k for k, h in enumerate(hl) if h.startswith("rationale")), -1)
                for r in rows[1:]:
                    if len(r) <= ci or not re.fullmatch(r"(?:CORE|RES|MF|COM)-[A-Z]+-\d+", r[ci]):
                        continue
                    vals = "; ".join(f"{rows[0][k]} {r[k]}" for k in range(1, len(r)) if k not in (ci, bi, wi) and r[k])
                    rule = {"id": r[ci], "name": r[0], "text": f"{r[0]}: {vals}.", "basis": basis_text(r[bi]) if bi >= 0 else "",
                            "why": why_clean(r[wi]) if wi >= 0 else "", "topic": sub["title"] if sub["title"] not in ("", "Rules") else sec["title"], "section": sec["title"], "family": fam["name"]}
                    rules.append(rule); sub["items"].append({"kind": "rule", "id": rule["id"]})
                sub["items"].append({"kind": "md", "md": md_table(rows)})
            elif rows and rows[0] and rows[0][0].lower() == "rule id":
                if not sub:
                    sub = {"title": "", "items": []}; sec["groups"].append(sub)
                for r in rows[1:]:
                    if len(r) < 4 or not re.fullmatch(r"(?:CORE|RES|MF|COM)-[A-Z]+-\d+", r[0]):
                        continue
                    rule = {"id": r[0], "name": "", "text": author_clean(r[1]), "basis": basis_text(r[2]), "why": why_clean(r[3]),
                            "topic": sub["title"] if sub["title"] not in ("", "Rules") else sec["title"], "section": sec["title"], "family": fam["name"]}
                    rules.append(rule); sub["items"].append({"kind": "rule", "id": rule["id"]})
            else:
                if not sub:
                    sub = {"title": "", "items": []}; sec["groups"].append(sub)
                sub["items"].append({"kind": "md", "md": md_table(rows)})
            i = j; continue
        if l.startswith("```"):
            j = i + 1
            while j < len(lines) and not lines[j].startswith("```"):
                j += 1
            if sub:
                sub["items"].append({"kind": "md", "md": "\n".join(lines[i:j + 1])})
            i = j + 1; continue
        if l.strip():
            # prose: the first paragraph under a section heading is its intro
            j = i; para = []
            while j < len(lines) and lines[j].strip() and not lines[j].startswith(("|", "#", "```")) \
                    and not re.match(r"^\*\*[^*]+\*\*\s*$", lines[j]):
                para.append(lines[j]); j += 1
            if not para:
                i += 1; continue
            text = author_clean("\n".join(para))
            if not sec["groups"] and not sec["intro"]:
                sec["intro"] = text
            else:
                if not sub:
                    sub = {"title": "", "items": []}; sec["groups"].append(sub)
                sub["items"].append({"kind": "md", "md": text})
            i = j; continue
        i += 1
    part_of = {(f["name"], sc["title"]): sc["part"] for f in fams for sc in f["sections"]}
    for r in rules:
        r["limit"] = summary.get(r["id"], "")
        part = part_of.get((r["family"], r["section"]))
        r["sectionName"] = f"{part}: {r['section']}" if part else r["section"]
    for f in fams:
        f["sections"] = [s for s in f["sections"] if s["groups"] or s["intro"]]
    return {"families": fams, "rules": rules, "decisions": decisions}


def expand_ids(cell: str) -> list:
    """"CORE-BOR-01, -02; CORE-CONC-03 to -05" -> every ID."""
    out, fam, rng = [], None, False
    for tok in re.findall(r"(?:F-)?(?:CORE|RES|MF|COM)-[A-Z]*-?\d{2}|(?<![\w-])-\d{2}\b|\bto\b", cell):
        if tok == "to":
            rng = True; continue
        rid = tok if not tok.startswith("-") else (fam + tok if fam else None)
        if not rid:
            continue
        fam = rid.rsplit("-", 1)[0]
        if rng and out and out[-1].rsplit("-", 1)[0] == fam:
            a, b = int(out[-1][-2:]), int(rid[-2:])
            out += [f"{fam}-{k:02d}" for k in range(a + 1, b)]
        rng = False
        if rid not in out:
            out.append(rid)
    return out


STATE_CODES = {"OH": "Ohio", "NC": "North Carolina", "IN": "Indiana", "CA": "California"}
SLT_TOPICS = [("Lender licence", "lender"), ("Broker licence", "broker"), ("Interest rate cap", "usury"),
              ("Default interest and late fees", "default"), ("Prepayment", "prepay"), ("Foreclosure", "foreclosure"),
              ("Deficiency", "deficiency")]
CITE_RE = re.compile(r"\b(?:ORC|OAC|G\.S\.|IC|Civ\. Code|CCP|B&P|Fin\. Code|Cal\. Const\.|Art\.|RMLA|DFPI FAQ|CLTA)\s?[\w.:()\-]*(?:[\w.:()\-]|\s(?:\(\w+\)|\d[\w.()-]*))*")


def verdict(topic: str, text: str) -> tuple:
    """A short badge for a state-law cell, from simple wording rules. Unclear wording gets a neutral badge."""
    t = text.strip()
    low = t.lower()
    if topic in ("lender", "broker"):
        if re.match(r"^(none (found )?for business purpose|same carve-out|same scope)", low):
            return ("None for business purpose", "clear")
        if low.startswith("possibly required"):
            return ("May be required", "check")
        if re.match(r"^none found", low):
            return ("None found", "info")
        if re.search(r"licen[cs]e (required|for any)|^(real estate broker licence|dre licence|cfl licence required|california financing law licence)", low):
            return ("Licence required", "check")
    if topic == "usury":
        if re.match(r"^10% cap", low):
            return ("Capped unless exempt", "check")
        if re.match(r"^(not capped|the uniform consumer credit code caps consumer loans only)", low):
            return ("Not capped", "clear")
        if "exempt" in low:
            return ("Exempt", "clear")
    if topic == "default":
        if re.match(r"^(no statutory cap found|not found)", low):
            return ("None found", "info")
        if re.search(r"late fee (up to|on a single)|4% late fee", low):
            return ("Late fees limited", "check")
        if "penalty" in low:
            return ("Limits apply", "check")
    if topic == "prepay":
        if re.match(r"^(no statutory limit found|not found|no statute found)", low):
            return ("None found", "info")
        if "contractual" in low or "may agree any terms" in low:
            return ("Contractual", "info")
        if "[verify" in low or "appears to" in low:
            return ("May apply", "check")
        if re.search(r"may be prepaid|charges only|^no penalty", low):
            return ("Limits apply", "check")
    if topic == "foreclosure":
        if low.startswith("judicial only"):
            return ("Judicial only", "info")
        if low.startswith("judicial"):
            return ("Judicial", "info")
        if low.startswith("power of sale"):
            return ("Power of sale", "info")
        if "non-judicial" in low[:40]:
            return ("Mostly non-judicial", "info")
    if topic == "deficiency":
        if low.startswith("allowed"):
            return ("Allowed", "clear")
        if "otherwise allowed" in low:
            return ("Allowed, with limits", "check")
        if re.match(r"^(no deficiency|barred)", low):
            return ("Limited", "check")
    return ("See detail", "info")


def slt_learner(text: str) -> str:
    text = re.sub(r"\bSame as SLT-[A-Z]{2}-01\b", "Same as for 1-4 unit loans", text)
    text = re.sub(r"\b[Aa]s (?:in )?SLT-[A-Z]{2}-01\b", lambda m: ("As" if m.group(0)[0] == "A" else "as") + " for 1-4 unit loans", text)
    text = re.sub(r"\bSLT-[A-Z]{2}-0[12]\b", "this state's other row", text)
    return text


def parse_state_law() -> dict:
    md = read("docs/credit-policy/state-law-table.md").replace("\r\n", "\n")
    states = {k: {"code": k.lower(), "name": v, "rows": {}, "changes": "", "sources": [], "checked": ""} for k, v in STATE_CODES.items()}
    for grp in re.finditer(r"^\| Row \|(.*)\n\|[- |]+\n((?:\|.*\n?)+)", md, re.M):
        head = [c.strip() for c in grp.group(1).strip().strip("|").split("|")]
        for row in table_rows(grp.group(2).strip().splitlines()):
            m = re.fullmatch(r"SLT-([A-Z]{2})-0(\d)", row[0])
            if not m or m.group(1) not in states:
                continue
            st, n = states[m.group(1)], m.group(2)
            if n in ("1", "2"):
                cells = {}
                for (label, key), cell in zip(SLT_TOPICS, row[1:]):
                    v, tone = verdict(key, cell)
                    cites = []
                    for c in re.findall(r"\(([^()]*(?:\([^()]*\)[^()]*)*)\)", cell):
                        if re.search(r"\b(ORC|OAC|G\.S\.|IC \d|Civ\. Code|CCP|B&P|Fin\. Code|Cal\. Const|DFPI|Art\. XV|ELFA|secondary|Ohio Legal Help|Garrett|Honchariw|Stewart)", c):
                            cites.append(c)
                    detail = slt_learner(cell)
                    confirm = "[VERIFY" in cell or "\\[VERIFY" in cell
                    detail = re.sub(r"\s*\\?\[VERIFY[^\]]*\\?\]", "", detail).strip()
                    st["rows"].setdefault("res" if n == "1" else "com", []).append(
                        {"topic": label, "key": key, "verdict": v, "tone": tone, "detail": detail,
                         "cite": "; ".join(dict.fromkeys(cites)), "confirm": confirm})
            else:
                f = dict(zip(head, row[1:]))
                st["changes"] = f.get("Recent or pending changes", "")
                st["sources"] = [{"label": a, "url": u} for a, u in re.findall(r"\[([^\]]+)\]\((https?://[^)]+)\)", f.get("Primary source URLs", ""))]
                st["checked"] = f.get("Date checked", "")
    pats = re.search(r"Three patterns hold in all four states:\s*\n((?:- .*\n?)+)", md)
    patterns = [author_clean(re.sub(r"\s*\((?:C\d+, )?CORE-[A-Z]+-\d+\)", "", l[2:].strip())) for l in pats.group(1).splitlines()] if pats else []
    notes = {}
    for m in re.finditer(r"^- \*\*(.+?)\*\*\s*(.*)$", md, re.M):
        title = re.sub(r"\s*\(SLT-[^)]*\)", "", m.group(1)).rstrip(".")
        for k, v in STATE_CODES.items():
            if v in title or (k == "CA" and "California" in title):
                notes[k] = {"title": title, "text": m.group(2)}
    for k, n in notes.items():
        states[k]["note"] = n
    deal_of = {"OH": ("Maple Run", "res"), "NC": ("Cedar Court", "com"), "IN": ("Birchwood Plaza", "com"), "CA": ("Teaching example", "")}
    for k, (d, t) in deal_of.items():
        states[k]["deal"], states[k]["dealType"] = d, t
    look = re.search(r"\*\*What to look up yourself\.\*\*[^\n]*\n\s*\n?((?:\d+\. .*\n?)+)", md)
    open_points = [re.sub(r"^\d+\.\s+", "", l).strip() for l in look.group(1).splitlines()] if look else []
    for st in states.values():
        res = {r["key"]: r for r in st["rows"].get("res", [])}
        for r in st["rows"].get("com", []):
            # "As SLT-NC-01" / "apply as in SLT-CA-01": the 1-4 unit verdict carries over.
            if r["verdict"] == "See detail" and re.search(r"\b(?:[Aa]s|[Ss]ame as)(?: in)? for 1-4 unit loans", r["detail"]) and r["key"] in res:
                r["verdict"], r["tone"] = res[r["key"]]["verdict"], res[r["key"]]["tone"]
    return {"states": list(states.values()), "patterns": patterns, "checked": "20 Nov 2026", "open": open_points}


def parse_deals() -> list:
    md = read("data/running-deals/running-deals.md").replace("\r\n", "\n")
    out = []
    heads = list(re.finditer(r"^## (RD-[A-Z]+-\d+): (.+?) \((\w+)\)\s*$", md, re.M))
    for k, m in enumerate(heads):
        body = md[m.end(): heads[k + 1].start() if k + 1 < len(heads) else len(md)]
        intro = next((l.strip() for l in body.splitlines() if l.strip() and not l.startswith(("|", "#", "*"))), "")
        # "Used in R1-R6; numbers match ..." names family modules this course does not have.
        intro = re.sub(r"\s*Used in [A-Z]+\d-[A-Z]+\d[;.]\s*(\w?)", lambda m: " " + m.group(1).upper(), intro).strip()
        # "Numbers match the ... examples" is a note about the author's files, not about the deal.
        intro = re.sub(r"\s*Numbers match [^.]*(?:\([^)]*\))?[^.]*\.", "", intro).strip()
        first = re.match(r"(.*?[.!?])(\s|$)", intro)
        title = m.group(2)
        name = " ".join(title.split(" ")[:2])
        tables, roles, cur_t = {}, [], None
        lines = body.split("\n")
        i = 0
        state_note = ""
        while i < len(lines):
            l = lines[i]
            bm = re.match(r"^\*\*(.+?)\*\*\s*$", l)
            if bm:
                cur_t = re.sub(r"\s*\(.*\)\s*$", "", bm.group(1)).strip()
                i += 1; continue
            sm = re.match(r"^\*\*State law notes\.\*\*\s*(.*)$", l)
            if sm:
                state_note = sm.group(1); i += 1; continue
            rm = re.match(r"^### (?:RD-[A-Z]+-\d+ )?(Role \d): (.+)$", l)
            if rm:
                j = i + 1; tasks = []; key = []; mode = None
                while j < len(lines) and not lines[j].startswith(("### ", "## ")):
                    x = lines[j]
                    if x.startswith("**Your tasks"):
                        mode = "t"
                    elif x.startswith("**Answer key") or x.startswith("**Credit memo outline"):
                        mode = "k"
                        if x.startswith("**Credit memo"):
                            key.append(x)
                    elif mode == "t" and re.match(r"^\d+\.\s", x):
                        tasks.append(re.sub(r"^\d+\.\s+", "", x))
                    elif mode == "k" and x.strip() != "---":
                        key.append(x)
                    j += 1
                roles.append({"title": f"{rm.group(1)}: {rm.group(2)}", "tasks": tasks, "key": "\n".join(key).strip()})
                i = j; continue
            if l.startswith("|") and cur_t and not roles:
                tl = []
                while i < len(lines) and lines[i].startswith("|"):
                    tl.append(lines[i]); i += 1
                tables[cur_t] = table_rows(tl)
                continue
            i += 1
        bm = re.search(r"^\|\s*Borrower\s*\|\s*(.+?)\s*\|\s*$", body, re.M)
        borrower = bm.group(1) if bm else ""
        state = next((s for s in STATES + ("California",) if s in borrower), "")
        facts = {}
        for t, rows in tables.items():
            if rows and [h.lower() for h in rows[0][:2]] in (["item", "detail"], ["item", "value"]):
                facts[t] = [{"k": r[0], "v": r[1], **({"src": r[2]} if len(r) > 2 else {})} for r in rows[1:] if len(r) >= 2]
        timeline = []
        for t, rows in tables.items():
            if t.startswith("Timeline") and rows:
                timeline = [{"when": r[0], "what": r[1]} for r in rows[1:] if len(r) >= 2]
        out.append({"id": m.group(1), "slug": slugify(name), "name": name, "title": title, "family": m.group(3),
                    "summary": first.group(1) if first else intro, "intro": intro, "borrower": borrower.split(",")[0], "state": state,
                    "facts": facts, "timeline": timeline, "stateNote": state_note, "roles": roles})
    return out


def snapshot_dates() -> dict:
    out = {}
    for line in read("docs/SNAPSHOT.md").splitlines():
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) >= 2:
            name = re.sub(r"[`*]", "", cells[0])
            d = DATE_RE.search(cells[1])
            if d:
                out[name] = f"{int(d.group(1))} {d.group(2)} {d.group(3)}"
    pick = lambda n: out.get(n, "")
    return {"policy": pick("credit-policy/model-credit-policy.md"), "formulas": pick("formulas/formula-library.md"),
            "state-law": pick("credit-policy/state-law-table.md"), "deals": pick("../data/running-deals/running-deals.md"),
            "glossary": pick("course-bible.md")}


def course_outcomes() -> list:
    md = read("docs/course-bible.md")
    out = []
    g = re.search(r"A graduate can ([^.]+)\.", md)
    if g:
        out.append(g.group(1)[0].upper() + g.group(1)[1:] + ".")
    goals = re.search(r"\*\*Program goals\*\*\s*\n\n((?:\d+\. .*\n?)+)", md)
    if goals:
        for l in goals.group(1).splitlines():
            t = re.sub(r"^\d+\.\s+", "", l).strip()
            if re.search(r"rule ID|asset", t):
                continue
            t = re.sub(r"^Every learner can ", "", t)
            out.append(t[0].upper() + t[1:])
    return out



def job_tasks() -> dict:
    """Module code -> the job task it covers in full, in words (needs analysis, task-to-module map)."""
    md = read("docs/curriculum/needs-analysis.md")
    tasks = {}
    for m in re.finditer(r"^\| ([OUSFK]\d+) \| (.+?) \| (?:App|UW|Cls|Svc|Def)[^|]* \|", md, re.M):
        t = re.sub(r"\s*\([^()]*\)", "", m.group(2)).strip().rstrip(".")
        tasks.setdefault(m.group(1), t)
    out = {}
    for m in re.finditer(r"^\| (C\d{1,2}) \| [^|]+\| ([^|]+)\|", md, re.M):
        codes = re.findall(r"\b([OUSFK]\d+)\b", m.group(2))
        if codes and codes[0] in tasks:
            t = tasks[codes[0]]
            out[m.group(1)] = t[0].upper() + t[1:] + "."
    return out


def objective_pages(raw: str) -> dict:
    """Objective number -> Learn part (1-based), from the teach headings: "### T2. ... (Objective 2, ...)" or "(O2)"."""
    teach = re.search(r"^## (?:\d+\.\s*)?Teach\b.*?(?=^## )", raw, re.M | re.S)
    out = {}
    if not teach:
        return out
    for n, h in enumerate(re.findall(r"^### (.+)$", teach.group(0), re.M), 1):
        for o in re.findall(r"\((?:Objectives?|O)\s*(\d+)", h):
            out.setdefault(o, n)
    return out


def learner_layer() -> dict:
    """Formula ID -> its learner layer (docs/formulas/learner-layer-core.json)."""
    rows = json.loads(read("docs/formulas/learner-layer-core.json"))
    return {r["id"]: r for r in rows}


SAMPLES = [("docs/standards/lesson-format-sample-c04.md",)]


def samples(deals_md: str) -> list:
    out = []
    for (rel,) in SAMPLES:
        raw = read(rel).replace("\r\n", "\n")
        raw = re.sub(r"^\*\*Model policy for training - not for live lending decisions\.\*\*(?: Fictional data only\.)?\s*\n", "", raw)
        md, comps = lesson_format.extract(raw, rel, deals_md)
        meta = next((c for c in comps if c["type"] == "lesson"), None)
        if not meta or not meta.get("key") or not meta.get("module"):
            raise SystemExit(f"{rel}: a sample needs a bpl:lesson block with key and module")
        out.append({"key": meta["key"], "meta": meta, "md": md, "comps": comps, "source": rel})
    return out


def deep_clean(obj):
    """bible_clean over every string in parsed shelf data (IDs and slugs are left alone)."""
    if isinstance(obj, str):
        return bible_clean(obj)
    if isinstance(obj, list):
        return [deep_clean(x) for x in obj]
    if isinstance(obj, dict):
        return {k: (v if k in ("id", "slug", "url", "tex") else deep_clean(v)) for k, v in obj.items()}
    return obj


def inline_js(path: pathlib.Path) -> str:
    return path.read_text(encoding="utf-8").replace("</script", "<" + chr(92) + "/script")


def main() -> None:
    FORMULA_NAMES.update(formula_names())
    table = core_table()
    bplf, exercises = bundle_and_exercises()
    modules = []
    deals_md = read("data/running-deals/running-deals.md").replace("\r\n", "\n")
    jobs = job_tasks()
    for n in range(15):
        key, code = f"c{n:02d}", f"C{n}"
        if code not in table:
            raise SystemExit(f"{code} missing from the Course Bible Core table")
        raw = read(f"modules/core/{key}/lesson.md")
        md, comps = lesson_format.extract(learner_view(raw), f"modules/core/{key}/lesson.md", deals_md)
        modules.append({"key": key, "code": code, **table[code], **module_meta(raw), "md": md, "comps": comps,
                        "job": jobs.get(code, ""), "objPages": objective_pages(raw),
                        "exercises": exercises.get(key, [])})
    refs = [{"key": k, "title": t, "note": snapshot_note(p), "md": read(p)} for k, t, p in REFS]
    gloss = glossary()
    lib, pol, slt = parse_formulas(), parse_policy(), parse_state_law()
    deal_data = parse_deals()
    lib, pol, slt, deal_data, gloss = (deep_clean(x) for x in (lib, pol, slt, deal_data, gloss))
    cats = [{"title": t, "blurb": b, "modules": [f"c{int(c[1:]):02d}" for c in cs]} for t, b, cs in CATEGORIES]
    layer = {k: {**deep_clean({x: y for x, y in v.items() if x not in ("verify", "checks")}), "verify": v["verify"], "checks": v["checks"]}
             for k, v in learner_layer().items()}
    smp = samples(deals_md)
    data = json.dumps({"modules": modules, "refs": refs, "glossary": gloss, "deals": deal_data, "layer": layer, "samples": smp,
                       "library": lib, "policy": pol, "stateLaw": slt, "categories": cats,
                       "reviewed": snapshot_dates(), "outcomes": course_outcomes()}, ensure_ascii=False)
    data = data.replace("</", "<\\/")  # never close the JSON <script> early
    app = "\n".join(inline_js(f) for f in sorted((HERE / "app").glob("*.js")))
    html = TEMPLATE.read_text(encoding="utf-8")
    for mark, text in (("/*__CSS__*/", (HERE / "styles.css").read_text(encoding="utf-8")),
                       ("/*__MARKED__*/", inline_js(HERE / "vendor" / "marked.min.js")),
                       ("/*__PURIFY__*/", inline_js(HERE / "vendor" / "purify.min.js")),
                       ("/*__BPLF__*/", bplf), ("/*__APP__*/", app), ("/*__DATA__*/", data)):
        if mark not in html:
            raise SystemExit(f"template.html is missing the {mark} placeholder")
        html = html.replace(mark, text)
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(html, encoding="utf-8")
    hours = round(sum(m["planned"] for m in modules) * 50 / 60, 1)  # planning estimate, console only
    nex = sum(len(v) for v in exercises.values())
    print(f"{nex} exercises in {len(exercises)} modules")
    print(f"{len(gloss)} glossary terms; {len(layer)} formula learner layers; "
          f"{len(smp)} lesson-format sample(s) with {sum(len(x['comps']) for x in smp)} blocks")
    print(f"{len(lib['formulas'])} formulas, {len(pol['rules'])} policy rules, {len(pol['decisions'])} decisions, "
          f"{sum(len(s['rows'].get('res', [])) + len(s['rows'].get('com', [])) for s in slt['states'])} state-law cells")
    print(f"{len(modules)} modules ({hours} planned hours), {len(refs)} references -> {OUT} "
          f"({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
