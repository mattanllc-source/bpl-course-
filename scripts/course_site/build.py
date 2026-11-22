"""Build the BPL Core Course page from the core lessons and the doc snapshots.

Reads modules/core/c00-c14/lesson.md, module titles and hours from docs/course-bible.md
(Section 3, Core table), and the references the lessons cite. Writes one self-contained
HTML page (minus two pinned CDN scripts) to exports/core-course.html, ready to publish.

Run: python scripts/course_site/build.py
Model policy for training - not for live lending decisions.
"""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[2]
TEMPLATE = pathlib.Path(__file__).with_name("template.html")
OUT = ROOT / "exports" / "core-course.html"

# docs/SNAPSHOT.md: c00-c02 are current; c03-c14 are working drafts to check against the doc.
DRAFT = {f"c{n:02d}" for n in range(3, 15)}

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
KEEP_FACTS = ("Formulas", "Rules", "Running deals")
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


def clean_line(line: str) -> str:
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
    line = line.replace("Items marked (C) are critical", "Items marked (critical) are critical")
    line = re.sub(r"\b1 hours\b", "1 hour", line)
    return line


def clean_heading(h: str) -> str:
    h = re.sub(r"^(#+ )\d+\.\s+", r"\1", h)                             # "## 6. Quiz" -> "## Quiz"
    h = re.sub(r":\s*C\d+-(quiz|ojt|jobaid|lesson)-v\d+", "", h)        # asset codes
    h = re.sub(r"\(Objective \d+,\s*", "(", h)
    h = re.sub(r"\s*\((solo mode|one page)\)", "", h)
    h = re.sub(r"\s*\((?:Objectives? [\d,\- ]+,\s*)?\d+ minutes?\)", "", h)   # "(15 minutes)"
    h = re.sub(r"\s*\(Objectives? [\d,\- ]+\)\s*$", "", h)                    # trailing "(Objective 2)"
    h = re.sub(r"^(#+ )T\d+\.\s+", r"\1", h)                           # "### T1. Title" -> "### Title"
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


def learner_view(md: str) -> str:
    titles = teach_titles(md)
    lines = md.replace("\r\n", "\n").split("\n")
    out, i, in_code, seen_section = [], 0, False, False
    # The page already shows the training label; drop it from the first paragraph.
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i < len(lines) and LABEL in lines[i]:
        rest = lines[i].replace(LABEL, "").strip()
        if rest:
            out.append(rest)
        i += 1
    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            in_code = not in_code
        if in_code:
            out.append(line); i += 1; continue
        # Module facts table (the one before the first section) -> short "In this module" list.
        # Later Item/Detail tables are OJT briefs and stay.
        if not seen_section and re.match(r"^\|\s*Item\s*\|\s*Detail\s*\|", line):
            facts = []
            i += 2
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if len(cells) >= 2 and cells[0] in KEEP_FACTS:
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
                out.append("## Wrap-up")
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
    return "\n".join(out)


def core_table() -> dict:
    """Module code, title, hours and prerequisite from the Course Bible's Core table."""
    rows = {}
    for line in read("docs/course-bible.md").splitlines():
        m = re.match(r"^\| (C\d{1,2}) \| (.+?) \| (\d+) \| (.+?) \|$", line)
        if m:
            rows[m.group(1)] = {"title": m.group(2), "hours": int(m.group(3)), "prereq": m.group(4)}
    return rows


def snapshot_note(rel: str) -> str:
    for line in read("docs/SNAPSHOT.md").splitlines():
        name = rel.split("/", 1)[1] if rel.startswith("docs/") else "../" + rel
        if f"`{name}`" in line:
            cells = [c.strip() for c in line.strip("|").split("|")]
            return f"Snapshot taken {cells[1]} ({cells[2].lower()})"
    return "Snapshot of the live Course Bible"


def main() -> None:
    table = core_table()
    modules = []
    for n in range(15):
        key, code = f"c{n:02d}", f"C{n}"
        if code not in table:
            raise SystemExit(f"{code} missing from the Course Bible Core table")
        md = learner_view(read(f"modules/core/{key}/lesson.md"))
        modules.append({"key": key, "code": code, **table[code], "draft": key in DRAFT, "md": md})
    refs = [{"key": k, "title": t, "note": snapshot_note(p), "md": read(p)} for k, t, p in REFS]
    data = json.dumps({"modules": modules, "refs": refs}, ensure_ascii=False)
    data = data.replace("</", "<\\/")  # never close the JSON <script> early
    html = TEMPLATE.read_text(encoding="utf-8").replace("/*__DATA__*/", data)
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(html, encoding="utf-8")
    hours = sum(m["hours"] for m in modules)
    print(f"{len(modules)} modules ({hours} hours), {len(refs)} references -> {OUT.relative_to(ROOT)} "
          f"({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
