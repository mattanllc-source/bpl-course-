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


def measured_time() -> dict:
    """Study minutes per module from the QAS word-count worksheet (decision 16; scripts/count_credits.py).

    Only the figure the worksheet marks as shown ("spec": the qas-spec.md counting rule) reaches the page.
    CPE credits stay hidden while "claimable" is false (no question yet qualifies as a QAS review item)."""
    p = HERE / "measured-credits.json"
    if not p.exists():
        return {"modules": {}, "total": None, "claimable": False, "computed": ""}
    d = json.loads(p.read_text(encoding="utf-8"))
    key = "specMinutes" if d.get("shown") == "spec" else "minutes"
    return {"modules": {c: v[key] for c, v in d["modules"].items()}, "total": d["total"][key],
            "claimable": bool(d.get("claimable")), "computed": d.get("computed", "")}


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
            ex = "" if cells[3].lower() in ("none", "-", "") else cells[3]
            # A worked example that names a formula duplicates that formula's page and would drift from it
            # (decision 14): the learner gets a link to the formula page instead. Any other example is kept.
            fid = re.findall(r"\bF-(?:CORE|RES|MF|COM)-\d{2}\b", ex)
            out.append({"n": int(cells[0]), "term": cells[1], "def": cells[2],
                        "ex": "" if len(set(fid)) == 1 else ex, "formula": fid[0] if len(set(fid)) == 1 else "",
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


POLICY_STOP = r"^(\*\*[^*]+\*\*\s*$|#{1,4}\s|\|\s*Rule ID\s*\||\*\*Exceptions\.\*\*\s|---\s*$)"


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

    by_id = {}

    def add_rule(rule, group):
        """One card per rule ID. COM-BR-09 and COM-TRM-09 appear twice in the source: as a bold heading over
        the limits table and as a row in the rule table (spec section 10.2). Merge them: the row's text, then the table."""
        old = by_id.get(rule["id"])
        if not old:
            by_id[rule["id"]] = rule
            rules.append(rule); group["items"].append({"kind": "rule", "id": rule["id"]})
            return
        blk, row = (old, rule) if old.get("block") else (rule, old)
        old.update({"name": blk["name"], "block": True, "text": (row["text"] + "\n\n" + blk["text"]).strip(),
                    "basis": row["basis"] or blk["basis"], "why": row["why"] or blk["why"]})

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
            # The same table as rows, for the topic pages (spec section 6).
            fam.setdefault("tables", []).append({"head": heads, "rows": [[r[k] if k < len(r) else "" for k in keep] for r in rows[1:]], "foot": []})
            i = j; continue
        if part and part.startswith("3B") and l.strip() and not l.startswith(("**", "---")) and fam["limits"]:
            fam["limits"].append(author_clean(l))
            if fam.get("tables"):
                fam["tables"][-1]["foot"].append(author_clean(l))
            i += 1; continue
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
                # Stop at a rule table, an "Exceptions." paragraph or a rule line too (spec section 10.1):
                # without this the COM-NNN table after F-COM-11 was swallowed into the formula's example.
                j = i + 1; body = []
                while j < len(lines) and not re.match(POLICY_STOP, lines[j]):
                    body.append(lines[j]); j += 1
                while body and not body[-1].strip():
                    body.pop()
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
                while j < len(lines) and not re.match(POLICY_STOP, lines[j]):
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
                add_rule(rule, sub)
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
                    add_rule(rule, sub)
                sub["items"].append({"kind": "md", "md": md_table(rows)})
            elif rows and rows[0] and rows[0][0].lower() == "rule id":
                if not sub:
                    sub = {"title": "", "items": []}; sec["groups"].append(sub)
                for r in rows[1:]:
                    if len(r) < 4 or not re.fullmatch(r"(?:CORE|RES|MF|COM)-[A-Z]+-\d+", r[0]):
                        continue
                    rule = {"id": r[0], "name": "", "text": author_clean(r[1]), "basis": basis_text(r[2]), "why": why_clean(r[3]),
                            "topic": sub["title"] if sub["title"] not in ("", "Rules") else sec["title"], "section": sec["title"], "family": fam["name"]}
                    add_rule(rule, sub)
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
            if para[0].startswith("**Exceptions.**"):
                # A family's exceptions paragraph is its own group, so topic 10 can show it (spec section 10.3).
                sub = {"title": "Exceptions", "items": [{"kind": "md", "md": text}]}
                sec["groups"].append(sub)
                i = j; continue
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


RULE_ID = r"(?:CORE|RES|MF|COM)-[A-Z]{2,5}-\d{2}"
# A run of rule IDs joined by separators ("RES-FF-01, -03 to -05"): expanded as one citation group.
RULE_GROUP = re.compile(r"\b" + RULE_ID + r"\b(?:\s*(?:,|;|/|&|\band\b|\bor\b|\bto\b)\s*(?:\b" + RULE_ID + r"\b|(?<![\w-])-\d{2}\b))*")
LEARNER_CODE = re.compile(r"\b(?:F-(?:CORE|RES|MF|COM)-\d{2}|RD-(?:RES|MF|COM)-\d{2}|SLT-[A-Z]{2}-\d{2}|D-[A-Z]{2,5}-\d{2}|" + RULE_ID + r")\b")
TOPICS_FILE = HERE / "policy_topics.json"


def lesson_rule_use() -> dict:
    """Rule ID -> core modules whose lesson cites it, ranges and short forms expanded ("CORE-BOR-11 to -13")."""
    use = {}
    for n in range(15):
        raw = read(f"modules/core/c{n:02d}/lesson.md")
        for m in RULE_GROUP.finditer(raw):
            for rid in expand_ids(m.group(0)):
                use.setdefault(rid, [])
                if f"C{n}" not in use[rid]:
                    use[rid].append(f"C{n}")
    return use


def policy_topics(pol: dict) -> dict:
    """Load the deal-order topic map (decision 12; docs/design/policy-topics-spec.md) and check it against the
    parsed policy. The map is read at build time and never copied into code. Any mismatch stops the build."""
    data = json.loads(TOPICS_FILE.read_text(encoding="utf-8"))
    topics = data["topics"]
    rules = {r["id"]: r for r in pol["rules"]}
    errors = []
    home = {}                                   # rule ID -> (topic, product or None)
    for t in topics:
        for rid in t["rules"]:
            if rid in home:
                errors.append(f"{rid} is in topic {home[rid][0]['n']} and topic {t['n']}")
            home[rid] = (t, None)
        if t.get("products"):
            union = []
            for p in t["products"]:
                for rid in p["rules"]:
                    if rid in union:
                        errors.append(f"{rid} is in two products of topic {t['n']}")
                    union.append(rid)
                    home[rid] = (t, p)
            if sorted(union) != sorted(t["rules"]):
                errors.append(f"topic {t['n']} rules differ from the union of its products: "
                              f"{sorted(set(union) ^ set(t['rules']))}")
    for rid in rules:
        if rid not in home:
            errors.append(f"{rid} is parsed from the policy but is in no topic")
    for rid in home:
        if rid not in rules:
            errors.append(f"{rid} is in the topic map but not in the parsed policy")
    # Authored copy may hold no codes (quality bar 1.1), and every glance limit must quote its rule (assertions 3-5).
    def learner_copy(t):
        out = [t["name"], t.get("oneLine", ""), t.get("summary", ""), t.get("why", ""), *t.get("apply", [])]
        out += [g[0] for g in t.get("glance", [])]
        for c in [t.get("check")] + [p.get("check") for p in t.get("products", []) or []]:
            if c:
                out += [c.get("title", ""), c.get("result", "")] + [x for line in c.get("lines", []) for x in line]
        out += [p["name"] for p in t.get("products", []) or []]
        return out
    for t in topics:
        for s in learner_copy(t):
            for code in LEARNER_CODE.findall(s or ""):
                errors.append(f"topic {t['n']}: code {code} in learner copy: {s[:60]}")
        for label, limit, rid in t.get("glance", []):
            if rid not in rules:
                errors.append(f"topic {t['n']}: glance rule {rid} not found")
            elif limit not in rules[rid]["text"]:
                errors.append(f"topic {t['n']}: glance limit for {rid} is not in the rule text: {limit[:60]}")
        for rid in t.get("seeAlso", []):
            if rid not in rules:
                errors.append(f"topic {t['n']}: seeAlso {rid} not found")
            elif rid in t["rules"]:
                errors.append(f"topic {t['n']}: seeAlso {rid} is in its own topic")
        for c in [t.get("check")] + [p.get("check") for p in t.get("products", []) or []]:
            for rid in (c or {}).get("rules", []):
                if rid not in rules:
                    errors.append(f"topic {t['n']}: check rule {rid} not found")

    # Policy tables and formula examples a topic shows, found by family, section and group title.
    fams = {f["name"]: f for f in pol["families"]}

    def resolve(a, where):
        f = fams.get(a["family"])
        sec = next((s for s in (f or {}).get("sections", []) if s["title"] == a["section"]), None)
        grp = next((g for g in (sec or {}).get("groups", []) if g["title"] == a["group"]), None)
        if not grp:
            errors.append(f"{where}: attach not found: {a['family']} / {a['section']} / {a['group']!r}")
            return []
        if a["kind"] == "formula":
            hit = [it for it in grp["items"] if it["kind"] == "formula" and it["id"] == a["id"]]
            if not hit:
                errors.append(f"{where}: formula {a['id']} not in {a['group']!r}")
            return hit[:1]
        hit = [it for it in grp["items"] if it["kind"] == "md"]
        if not hit:
            errors.append(f"{where}: no table or text in {a['group']!r}")
        return hit

    # Part 3B tables: the Core table splits by row (first rule ID in its policy cell); the family tables are
    # shown whole on topic 7 and row by row on product pages (spec section 6).
    by_n = {t["n"]: t for t in topics}
    core_rows = {}
    ct = (fams["Core"].get("tables") or [None])[0]
    if not ct:
        errors.append("Core Part 3B table not found")
    else:
        ci = ct["head"].index("Policy section")
        for row in ct["rows"]:
            ids = expand_ids(row[ci])
            first = next((x for x in ids if x in home), None)
            if not first:
                errors.append(f"Core Part 3B row does not route: {row[0]}")
                continue
            core_rows.setdefault(home[first][0]["n"], []).append({"cells": row, "rule": first})
    fam_tables = {k: (fams[k].get("tables") or [None])[0] for k in ("Residential", "Multifamily", "Commercial")}

    use = lesson_rule_use()
    core = {rid for rid in use if rid in rules}
    out = []
    for t in topics:
        topic = {k: t.get(k) for k in ("n", "slug", "name", "oneLine", "summary", "apply", "why", "modules", "rules", "seeAlso", "glance", "check")}
        topic["attach"] = [x for a in t.get("attach") or [] for x in resolve(a, f"topic {t['n']}")]
        topic["coreRows"] = core_rows.get(t["n"], [])
        if t.get("products"):
            prods = []
            for p in t["products"]:
                q = {k: p.get(k) for k in ("slug", "name", "family", "kind", "rules", "check")}
                q["attach"] = [x for a in p.get("attach") or [] for x in resolve(a, f"product {p['slug']}")]
                q["rows"] = []
                tb = fam_tables.get(p["family"])
                for g in p.get("glanceRows") or []:
                    row = next((r for r in (tb or {}).get("rows", []) if r[0] == g), None)
                    if not row:
                        errors.append(f"product {p['slug']}: no Part 3B row {g!r}")
                    else:
                        q["rows"].append(row)
                prods.append(q)
            topic["products"] = prods
            topic["familyTables"] = {k: v for k, v in fam_tables.items() if v}
        out.append(topic)
    # Family "Exceptions." paragraphs go with approval authority and exceptions (spec section 10.3).
    t10 = next(x for x in out if x["n"] == 10)
    for f in pol["families"]:
        for s in f["sections"]:
            for g in s["groups"]:
                if g["title"] == "Exceptions" and f["name"] != "Core":
                    t10["attach"] += [it for it in g["items"] if it["kind"] == "md"]
    if errors:
        raise SystemExit("policy_topics.json does not match the policy:\n  " + "\n  ".join(errors))
    # Each rule learns its topic, its citation label and whether the core course uses it.
    for rid, (t, p) in home.items():
        r = rules[rid]
        label = f"Credit Policy {t['n']}: {t['name']}"
        if p:
            pname = p["name"] if p["kind"] == "product" else ("every loan" if p["kind"] == "all" else f"every {p['family'].lower()} loan")
            label += f", {pname}"
            r["product"] = p["slug"]
        r["topicN"] = t["n"]
        r["topicLabel"] = label
        r["sectionName"] = label           # every learner place that showed "Core Part 2B: ..." now shows the topic
        r["core"] = rid in core
        r["usedBy"] = use.get(rid, [])
    return {"version": data.get("version", ""), "topics": out, "coreCount": len(core)}


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
# The State Law Table's first two column groups. Labels use US spelling (decision 13); a table header in either
# spelling ("licence" or "license") maps to the same key. Any other group of columns is read from its own headers.
SLT_TOPICS = [("Lender license", "lender"), ("Broker license", "broker"), ("Interest rate cap", "usury"),
              ("Default interest and late fees", "default"), ("Prepayment", "prepay"), ("Foreclosure", "foreclosure"),
              ("Deficiency", "deficiency")]
# The table's own header for each core topic (either spelling), so a header maps to its key.
SLT_HEADERS = {"lender license": "lender", "broker license": "broker", "usury limit and exemptions": "usury",
               "default interest and late fees": "default", "prepayment limits": "prepay",
               "foreclosure method and timeline": "foreclosure", "deficiency rules": "deficiency"}
# Short route names for the dimension groups the Bible is adding (state-law-new-dimensions-draft.md). Any other
# group gets a slug of its heading.
SLT_GROUP_SLUGS = {"statutory right of redemption": "redemption", "mechanics' lien priority": "mechanics-liens",
                   "qualifying to do business as an out-of-state lender": "doing-business"}
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
            return ("License required", "check")
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
    # Dimension groups after the core topics (redemption, mechanics' liens, doing business). Other wording: "See detail".
    if topic.startswith("redemption-before") and re.search(r"\bmay (?:redeem|stop|reinstate)", low):
        return ("Allowed before sale", "info")
    if topic.startswith("redemption-after"):
        if re.match(r"^none found", low):
            return ("None found", "info")
        if re.match(r"^none\.", low):
            return ("None", "clear")
    if topic.startswith("doing-business-safe") and re.match(r"^not (?:transacting|doing) business", low):
        return ("Safe harbor", "clear")
    if topic.startswith("doing-business-consequence") and re.match(r"^may not maintain", low):
        return ("Suits barred until registered", "check")
    return ("See detail", "info")


def slt_learner(text: str) -> str:
    text = re.sub(r"\bSame as SLT-[A-Z]{2}-01\b", "Same as for 1-4 unit loans", text)
    text = re.sub(r"\b[Aa]s (?:in )?SLT-[A-Z]{2}-01\b", lambda m: ("As" if m.group(0)[0] == "A" else "as") + " for 1-4 unit loans", text)
    text = re.sub(r"\bsee SLT-[A-Z]{2}-0[12] ([a-z]+) cell\b", r"see the \1 topic", text)
    text = re.sub(r"\bSLT-[A-Z]{2}-01\b", "this state's 1-4 unit row", text)
    text = re.sub(r"\bSLT-[A-Z]{2}-02\b", "this state's commercial row", text)
    return text


def state_law_md() -> str:
    """The State Law Table export. BPL_STATE_LAW points the build at another copy (for example a merged test table)."""
    src = os.environ.get("BPL_STATE_LAW")
    return (pathlib.Path(src).read_text(encoding="utf-8") if src else read("docs/credit-policy/state-law-table.md")).replace("\r\n", "\n")


VERIFY_RE = re.compile(r"\s*\\?\[VERIFY:?\s*([^\]]*?)\\?\]")
CHECKED_RE = re.compile(r";?\s*checked (\d{1,2} [A-Z][a-z]{2} \d{4})")


def topic_key(header: str) -> str:
    """A table header -> topic key. Core headers map in either spelling; any other header gets a slug."""
    norm = re.sub(r"licen[cs]e", "license", header.strip().lower())
    return SLT_HEADERS.get(norm, slugify(header))


def slt_cell(key: str, label: str, cell: str, default_checked: str) -> dict:
    """One state-law answer: badge, learner text, statute, date checked and the counsel flag."""
    tags = VERIFY_RE.findall(cell)
    plain = VERIFY_RE.sub("", cell).strip()
    v, tone = verdict(key, plain)
    cites = []
    for c in re.findall(r"\(([^()]*(?:\([^()]*\)[^()]*)*)\)", plain):
        if re.search(r"\b(ORC|OAC|G\.S\.|IC \d|Civ\. Code|CCP|B&P|Fin\. Code|Cal\. Const|Corp\. Code|DFPI|Art\. XV|ELFA|secondary|Ohio Legal Help|Garrett|Honchariw|Stewart)", c):
            cites.append(c)
    checked = ""
    for t in tags:
        m = CHECKED_RE.search(t)
        if not m:
            continue                   # a tag without a date states a doubt ("whether ..."), not a source
        checked = m.group(1)
        # The tag's statute list, minus the check date and the note about which mirror was read.
        src = CHECKED_RE.sub("", t)
        src = re.sub(r",?\s*(?:FindLaw|california\.public\.law)[^;]*", "", src)
        src = re.sub(r"\s*\([^()]*refused[^()]*\)", "", src).strip(" ;,")
        if src and src not in cites:
            cites.append(src)
    confirm = bool(tags) or bool(re.search(r"counsel to confirm", plain, re.I))
    return {"topic": label, "key": key, "verdict": v, "tone": tone, "detail": slt_learner(plain),
            "cite": "; ".join(dict.fromkeys(cites)), "confirm": confirm, "checked": checked or default_checked}


def parse_state_law() -> dict:
    """The State Law Table: one answer per state, loan group and topic, for every column group the table has.

    Groups (a) and (b) hold the core topics, one table per loan group. Any other "## Group (x): title" table holds one
    dimension: its headers become sub-topic labels and its rows cover both loan groups (SLT-XX-01 and -02)."""
    md = state_law_md()
    states = {k: {"code": k.lower(), "name": v, "rows": {}, "changes": "", "sources": [], "checked": ""} for k, v in STATE_CODES.items()}
    dm = re.search(r"checked on (\d{1,2} [A-Z][a-z]{2} \d{4})", md) or DATE_RE.search(md)
    default_checked = dm.group(1) if dm and dm.lastindex == 1 else (f"{dm.group(1)} {dm.group(2)} {dm.group(3)}" if dm else "")
    topics = [{"key": k, "label": lab, "group": "core", "columns": [k], "why": ""} for lab, k in SLT_TOPICS]
    seen_core = set()
    for grp in re.finditer(r"^\| Row \|(.*)\n\|[- |]+\n((?:\|.*\n?)+)", md, re.M):
        head = [c.strip() for c in grp.group(1).strip().strip("|").split("|")]
        before = md[:grp.start()]
        heads = list(re.finditer(r"^## (.+?)\s*$", before, re.M))
        gh = re.match(r"Group \(([a-z])\):\s*(.+)$", heads[-1].group(1)) if heads else None
        dim = None
        if gh and not re.search(r"business-purpose loans|multifamily loans", gh.group(2)):
            # A dimension group: one topic with its own sub-columns and the "Why it matters" line under the table.
            title = gh.group(2).strip()
            slug = SLT_GROUP_SLUGS.get(title.lower(), slugify(title))
            after = md[grp.end():]
            nxt = re.search(r"^## ", after, re.M)
            why = re.search(r"\*\*Why it matters to the lender\.\*\*\s*(.+)", after[:nxt.start()] if nxt else after)
            dim = {"key": slug, "label": title[0].upper() + title[1:], "group": gh.group(1), "why": why.group(1).strip() if why else "",
                   "columns": [f"{slug}-{slugify(h)}" for h in head]}
            topics.append(dim)
        # A group's untagged cells were checked with the rest of that group: its newest tag date.
        gdates = CHECKED_RE.findall(grp.group(2))
        dim_checked = max(gdates, key=lambda d: (int(d.split()[2]), MONTHS[d.split()[1]], int(d.split()[0]))) if gdates else default_checked
        for row in table_rows(grp.group(2).strip().splitlines()):
            m = re.fullmatch(r"SLT-([A-Z]{2})-0(\d)", row[0])
            if not m or m.group(1) not in states:
                continue
            st, n = states[m.group(1)], m.group(2)
            if n in ("1", "2"):
                lt = "res" if n == "1" else "com"
                for k, (h, cell) in enumerate(zip(head, row[1:])):
                    if dim:
                        c = slt_cell(dim["columns"][k], h, cell, dim_checked)
                        c["group"] = dim["key"]
                    else:
                        key = topic_key(h)
                        c = slt_cell(key, next((lab for lab, kk in SLT_TOPICS if kk == key), h), cell, default_checked)
                        c["group"] = "core"
                        seen_core.add(key)
                    st["rows"].setdefault(lt, []).append(c)
            else:
                f = dict(zip(head, row[1:]))
                st["changes"] = f.get("Recent or pending changes", "")
                st["sources"] = [{"label": a, "url": u} for a, u in re.findall(r"\[([^\]]+)\]\((https?://[^)]+)\)", f.get("Primary source URLs", ""))]
                st["checked"] = f.get("Date checked", "")
    topics = [t for t in topics if t["group"] != "core" or t["key"] in seen_core]
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
            if re.search(r"\b(?:[Aa]s|[Ss]ame as)(?: in)? for 1-4 unit loans", r["detail"]) and r["key"] in res:
                src = res[r["key"]]
                if r["verdict"] == "See detail":
                    r["verdict"], r["tone"] = src["verdict"], src["tone"]
                if r["group"] != "core":
                    # A dimension cell with no tag of its own takes the 1-4 unit cell's date and counsel flag.
                    if not r["cite"]:
                        r["checked"] = src["checked"]
                    r["confirm"] = r["confirm"] or src["confirm"]
    return {"states": list(states.values()), "topics": topics, "patterns": patterns, "checked": default_checked,
            "open": open_points, "research": research_method()}


def research_method() -> dict:
    """How to research a new state (docs/credit-policy/state-law-research-method.md, a repo-owned learner source).
    Each [VERIFY: ...] tag becomes a numbered source footnote; the raw tag never reaches the page."""
    raw = read("docs/credit-policy/state-law-research-method.md").replace("\r\n", "\n")
    md = re.sub(r"^\**Model policy for training - not for live lending decisions\.\**\s*\n", "", raw)
    title = re.search(r"^# (.+)$", md, re.M)
    md = md[title.end():] if title else md
    notes = []

    def fn(m):
        t = m.group(1).strip()
        chk = CHECKED_RE.search(t)
        notes.append(CHECKED_RE.sub("", t).strip(" ;,") + (f". Checked {chk.group(1)}." if chk else "."))
        return f'<sup class="fnref" data-n="{len(notes)}">{len(notes)}</sup>'
    md = VERIFY_RE.sub(fn, md)
    md = re.sub(r'(<sup class="fnref"[^>]*>\d+</sup>)([.,;:])', r"\2\1", md)   # the note number follows the punctuation
    lede = re.match(r"\s*(.+?)\n", md)
    dates = [m.group(1) for m in re.finditer(r"checked (\d{1,2} [A-Z][a-z]{2} \d{4})", raw)]
    newest = max(dates, key=lambda d: (int(d.split()[2]), MONTHS[d.split()[1]], int(d.split()[0]))) if dates else ""
    return {"title": title.group(1).strip() if title else "How to research a new state", "lede": lede.group(1).strip() if lede else "",
            "md": md[lede.end():] if lede else md, "notes": notes, "reviewed": newest}


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
    timing = measured_time()
    for n in range(15):
        key, code = f"c{n:02d}", f"C{n}"
        if code not in table:
            raise SystemExit(f"{code} missing from the Course Bible Core table")
        raw = read(f"modules/core/{key}/lesson.md")
        md, comps = lesson_format.extract(learner_view(raw), f"modules/core/{key}/lesson.md", deals_md)
        modules.append({"key": key, "code": code, **table[code], **module_meta(raw), "md": md, "comps": comps,
                        "job": jobs.get(code, ""), "objPages": objective_pages(raw),
                        "exercises": exercises.get(key, [])})
        modules[-1]["minutes"] = timing["modules"].get(code)
        if not timing["claimable"]:
            modules[-1]["credits"] = None    # never show a CPE figure that cannot be claimed (quality bar 2.2)
    refs = [{"key": k, "title": t, "note": snapshot_note(p), "md": state_law_md() if k == "state-law" else read(p)} for k, t, p in REFS]
    gloss = glossary()
    lib, pol, slt = parse_formulas(), parse_policy(), parse_state_law()
    pol["topics"] = policy_topics(pol)
    deal_data = parse_deals()
    lib, pol, slt, deal_data, gloss = (deep_clean(x) for x in (lib, pol, slt, deal_data, gloss))
    cats = [{"title": t, "blurb": b, "modules": [f"c{int(c[1:]):02d}" for c in cs]} for t, b, cs in CATEGORIES]
    layer = {k: {**deep_clean({x: y for x, y in v.items() if x not in ("verify", "checks")}), "verify": v["verify"], "checks": v["checks"]}
             for k, v in learner_layer().items()}
    smp = samples(deals_md)
    data = json.dumps({"modules": modules, "refs": refs, "glossary": gloss, "deals": deal_data, "layer": layer, "samples": smp,
                       "library": lib, "policy": pol, "stateLaw": slt, "categories": cats,
                       "reviewed": snapshot_dates(), "outcomes": course_outcomes(),
                       "studyTime": {"total": timing["total"], "computed": timing["computed"]}}, ensure_ascii=False)
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
    print(f"{len(pol['topics']['topics'])} policy topics; {pol['topics']['coreCount']} rules used in the core course")
    print(f"{len(lib['formulas'])} formulas, {len(pol['rules'])} policy rules, {len(pol['decisions'])} decisions, "
          f"{sum(len(s['rows'].get('res', [])) + len(s['rows'].get('com', [])) for s in slt['states'])} state-law cells")
    print(f"{len(modules)} modules ({hours} planned hours), {len(refs)} references -> {OUT} "
          f"({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
