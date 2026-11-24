"""Lesson-format blocks (docs/standards/lesson-format.md): parse, validate, and leave a placeholder.

A block is a fenced code block whose info string is ``bpl:<type>``. The builder turns each block into a
JSON spec and puts ``<div class="bplc" data-i="N"></div>`` in the Markdown, where the page script renders
the component. Every spec is validated here, so a bad block fails the build instead of reaching a learner.

Desk expressions are evaluated here too (same grammar and rounding as the page script), so each
``expect:`` line in a desk is a build-time test of the numbers the learner will see.
Model policy for training - not for live lending decisions.
"""
import re
from decimal import Decimal, ROUND_HALF_UP

TYPES = ("lesson", "highlights", "objectives", "takeaways", "formula", "worked", "predict", "desk",
         "check", "exhibit", "case", "policy")
OPT_RE = re.compile(r"^-\s+([A-F])(\*)?:\s*(.+)$")          # "- B*: Fail: 1.2495x is below 1.25x."
PRED_RE = re.compile(r"^-\s+(.+?)(\*)?\s*$")                 # "- About 5*"
KEY_RE = re.compile(r"^([a-z][a-z0-9-]*):\s?(.*)$")


class FormatError(SystemExit):
    pass


# ---------- expressions: + − × ÷ ( ) comparisons, names, numbers and percent literals ----------
TOK_RE = re.compile(r"\s*(?:(\d+(?:\.\d+)?%?)|([A-Za-z_][A-Za-z0-9_]*)|(>=|<=|==|[-+*/()<>×÷−≥≤]))")


def tokens(src: str) -> list:
    out, i = [], 0
    src = src.strip()
    while i < len(src):
        m = TOK_RE.match(src, i)
        if not m or m.end() == i:
            raise FormatError(f"bad expression near '{src[i:]}' in '{src}'")
        num, name, op = m.groups()
        if num:
            out.append(("n", float(num[:-1]) / 100 if num.endswith("%") else float(num)))
        elif name:
            out.append(("v", name))
        else:
            out.append(("o", {"×": "*", "÷": "/", "−": "-", "≥": ">=", "≤": "<="}.get(op, op)))
        i = m.end()
    return out


def evaluate(src: str, env: dict):
    toks, pos = tokens(src), [0]

    def peek():
        return toks[pos[0]] if pos[0] < len(toks) else ("e", None)

    def take():
        t = peek(); pos[0] += 1; return t

    def atom():
        t = take()
        if t[0] == "n":
            return t[1]
        if t[0] == "v":
            if t[1] not in env:
                raise FormatError(f"unknown name '{t[1]}' in '{src}'")
            return env[t[1]]
        if t == ("o", "("):
            v = cmp()
            if take() != ("o", ")"):
                raise FormatError(f"missing ')' in '{src}'")
            return v
        if t == ("o", "-"):
            return -atom()
        raise FormatError(f"bad expression '{src}'")

    def mul():
        v = atom()
        while peek() in (("o", "*"), ("o", "/")):
            op = take()[1]; r = atom()
            if op == "/" and r == 0:
                raise FormatError(f"division by zero in '{src}'")
            v = v * r if op == "*" else v / r
        return v

    def add():
        v = mul()
        while peek() in (("o", "+"), ("o", "-")):
            op = take()[1]; r = mul()
            v = v + r if op == "+" else v - r
        return v

    def cmp():
        v = add()
        if peek()[0] == "o" and peek()[1] in (">=", "<=", ">", "<", "=="):
            op = take()[1]; r = add()
            return {">=": v >= r, "<=": v <= r, ">": v > r, "<": v < r, "==": v == r}[op]
        return v

    v = cmp()
    if pos[0] != len(toks):
        raise FormatError(f"unexpected text in '{src}'")
    return v


def half_up(x: float, dp: int) -> Decimal:
    return Decimal(repr(x)).quantize(Decimal(1).scaleb(-dp), rounding=ROUND_HALF_UP)


MINUS = "−"


def fmt(kind: str, x) -> str:
    """Display formats shared with the page script (45-lessonfmt.js). Rounding is half up, as in round.ts."""
    if isinstance(x, bool):
        return "yes" if x else "no"
    neg = x < 0
    if kind == "money":                     # whole dollars show without cents; anything else to the cent
        v = half_up(abs(x), 2)
        s = f"{v:,.0f}" if v == v.to_integral_value() else f"{v:,.2f}"
        return (MINUS if neg and v else "") + "$" + s
    if kind == "money2":
        v = half_up(abs(x), 2)
        return (MINUS if neg and v else "") + f"${v:,.2f}"
    if kind in ("x2", "x4"):
        v = half_up(abs(x), int(kind[1]))
        return (MINUS if neg and v else "") + f"{v}x"
    if kind in ("pct1", "pct2"):
        v = half_up(abs(x) * 100, int(kind[3]))
        return (MINUS if neg and v else "") + f"{v}%"
    if kind == "int":
        v = half_up(abs(x), 0)
        return (MINUS if neg and v else "") + f"{v:,}"
    if kind == "num":
        v = half_up(abs(x), 2).normalize()
        return (MINUS if neg and v else "") + f"{v:f}"
    raise FormatError(f"unknown format '{kind}'")


PH_RE = re.compile(r"\{([^{}|]+)(?:\|([a-z0-9]+))?\}")


def fill(text: str, env: dict) -> str:
    return PH_RE.sub(lambda m: fmt(m.group(2) or "num", evaluate(m.group(1), env)), text)


# ---------- block parsing ----------
def parse_block(kind: str, lines: list, where: str) -> dict:
    """One block body -> spec. Keys, options, steps, table rows and indented continuations."""
    spec = {"type": kind, "where": where}
    if kind not in TYPES:
        raise FormatError(f"{where}: unknown block type bpl:{kind}")
    items, opts, steps, table, decisions, directives = [], [], [], [], [], []
    target = spec            # where top-level keys go (a decision, inside a case)
    last = None              # (dict, key) that an indented line continues
    raw_tail = None          # "debrief:" collects everything after it
    for line in lines:
        if raw_tail is not None:
            raw_tail.append(line); continue
        if not line.strip():
            if last and isinstance(last[0], dict) and isinstance(last[0].get(last[1]), str) and last[0][last[1]]:
                last[0][last[1]] += "\n\n"
            continue
        if line.startswith(("  ", "\t")) and line.strip().startswith("why:"):
            line = line.strip()
        elif line.startswith(("  ", "\t")) and last is not None:
            d, k = last
            d[k] = (d[k].rstrip(" ") + (" " if not d[k].endswith("\n") else "") + line.strip()).strip()
            continue
        if line.startswith("|"):
            (target.setdefault("table", []) if target is not spec else table).append(line.rstrip())
            last = None; continue
        if kind == "case" and line.startswith("decision:"):
            target = {"title": line.split(":", 1)[1].strip(), "options": []}
            decisions.append(target); last = (target, "title"); continue
        if kind == "case" and line.startswith("debrief:"):
            raw_tail = [line.split(":", 1)[1].strip()]; continue
        m = re.match(r"^step\s+([^:]+):\s*(.*)$", line)
        if m and kind == "worked":
            steps.append({"label": m.group(1).strip(), "text": m.group(2).strip()}); last = (steps[-1], "text"); continue
        if kind == "desk" and re.match(r"^(let|slider|input)\s", line):
            directives.append(line.strip()); last = None; continue
        m = OPT_RE.match(line)
        if m and kind in ("check", "exhibit", "case"):
            o = {"key": m.group(1), "ok": bool(m.group(2)), "text": m.group(3).strip(), "why": ""}
            (target["options"] if target is not spec else opts).append(o); last = (o, "text"); continue
        if line.startswith("- "):
            if kind == "predict":
                pm = PRED_RE.match(line)
                opts.append({"text": pm.group(1).strip(), "ok": bool(pm.group(2))}); last = (opts[-1], "text"); continue
            items.append(line[2:].strip()); last = (items, len(items) - 1)
            continue
        m = KEY_RE.match(line.strip())
        if m:
            k, v = m.group(1), m.group(2).strip()
            if k == "why":
                bucket = target["options"] if target is not spec else opts
                if not bucket:
                    raise FormatError(f"{where}: 'why:' before any option")
                bucket[-1]["why"] = v; last = (bucket[-1], "why"); continue
            if kind == "desk" and k in ("bar", "expect", "marker"):
                directives.append(f"{k}: {v}"); last = None; continue
            target[k] = v; last = (target, k); continue
        raise FormatError(f"{where}: cannot read this line in bpl:{kind}: {line!r}")
    if items:
        spec["items"] = items
    if opts:
        spec["options"] = opts
    if steps:
        spec["steps"] = steps
    if table:
        spec["table"] = "\n".join(table)
    if decisions:
        for d in decisions:
            if "table" in d:
                d["table"] = "\n".join(d["table"])
        spec["decisions"] = decisions
    if raw_tail is not None:
        spec["debrief"] = "\n".join(raw_tail).strip()
    if directives:
        spec["directives"] = directives
    for k in [k for k, v in spec.items() if isinstance(v, str)]:
        spec[k] = spec[k].strip()
    return spec


def facts(cell: str) -> list:
    """"Deal = Cedar Court; Property = 50 units" -> [[k, v], ...]."""
    out = []
    for part in [p for p in cell.split(";") if p.strip()]:
        if "=" not in part:
            raise FormatError(f"facts need 'Label = value' pairs: {cell!r}")
        k, v = part.split("=", 1)
        out.append([k.strip(), v.strip()])
    return out


def check_options(spec: dict, where: str, n: int = 4) -> None:
    os_ = spec.get("options", [])
    if len(os_) != n:
        raise FormatError(f"{where}: a {spec['type']} needs exactly {n} options, found {len(os_)}")
    if sum(o["ok"] for o in os_) != 1:
        raise FormatError(f"{where}: mark exactly one option as the key with '*'")
    if any(not o["why"] for o in os_):
        raise FormatError(f"{where}: every option needs a 'why:' rationale")
    if [o["key"] for o in os_] != list("ABCDEF"[:n]):
        raise FormatError(f"{where}: options must be lettered A to {'ABCDEF'[n - 1]} in order")


def deal_section(deals_md: str, name: str) -> str:
    m = re.search(rf"^## RD-[A-Z]+-\d+: {re.escape(name)}\b.*?(?=^## RD-|\Z)", deals_md, re.M | re.S)
    if not m:
        raise FormatError(f"running deal '{name}' is not in data/running-deals/running-deals.md")
    return m.group(0)


def money_forms(x: float) -> list:
    v = half_up(x, 2)
    return [f"${v:,.2f}", f"${v:,.0f}"] if v == v.to_integral_value() else [f"${v:,.2f}"]


def validate(spec: dict, deals_md: str) -> None:
    where, t = spec["where"], spec["type"]
    deal_text = deal_section(deals_md, spec["deal"]) if spec.get("deal") else ""
    for f in ("facts",):
        if f in spec:
            spec[f] = facts(spec[f])
    for fig in [x.strip() for x in spec.get("deal-figures", "").split(";") if x.strip()]:
        if not deal_text or fig not in deal_text:
            raise FormatError(f"{where}: {fig} is not in the {spec.get('deal') or '(no deal named)'} running-deal file")
    if t in ("check", "exhibit"):
        if not spec.get("stem"):
            raise FormatError(f"{where}: {t} needs a 'stem:'")
        check_options(spec, where)
    if t == "exhibit" and not spec.get("table"):
        raise FormatError(f"{where}: an exhibit needs a table")
    if t == "predict":
        if len(spec.get("options", [])) < 2 or sum(o["ok"] for o in spec["options"]) != 1:
            raise FormatError(f"{where}: a predict needs at least 2 options and one key marked '*'")
    if t in ("highlights", "takeaways", "objectives") and not spec.get("items"):
        raise FormatError(f"{where}: {t} needs '- ' items")
    if t == "worked" and not spec.get("steps"):
        raise FormatError(f"{where}: a worked example needs 'step Label: text' lines")
    if t == "case":
        if not spec.get("decisions"):
            raise FormatError(f"{where}: a case needs at least one 'decision:'")
        for i, d in enumerate(spec["decisions"]):
            dw = f"{where} decision {i + 1}"
            d["type"] = "decision"
            check_options(d, dw)
            for k in ("stem", "policy"):
                if not d.get(k):
                    raise FormatError(f"{dw}: needs '{k}:'")
    if t == "desk":
        validate_desk(spec, deal_text)


def validate_desk(spec: dict, deal_text: str) -> None:
    where = spec["where"]
    for k in ("title", "working", "pass-if", "pass", "fail", "label"):
        if not spec.get(k):
            raise FormatError(f"{where}: a desk needs '{k}:'")
    env, lets, ctl, bars, expects, marker = {}, [], None, [], [], None
    for d in spec["directives"]:
        m = re.match(r"^let\s+([A-Za-z_]\w*)\s*=\s*([^|]+?)\s*(?:\|\s*(deal))?$", d)
        if m:
            lets.append({"name": m.group(1), "expr": m.group(2), "deal": bool(m.group(3))}); continue
        m = re.match(r"^(slider|input)\s+([A-Za-z_]\w*)\s*=\s*(\S+)\s*\|\s*min\s+(\S+)\s*\|\s*max\s+(\S+)\s*\|\s*step\s+(\S+)$", d)
        if m:
            if ctl:
                raise FormatError(f"{where}: one slider or number input per desk")
            ctl = {"kind": m.group(1), "name": m.group(2), "start": float(m.group(3)), "min": float(m.group(4)),
                   "max": float(m.group(5)), "step": float(m.group(6))}
            continue
        m = re.match(r"^bar:\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(ncf|ds|rent|ink)$", d)
        if m:
            bars.append({"expr": m.group(1), "label": m.group(2), "color": m.group(3)}); continue
        m = re.match(r"^marker:\s*([^|]+?)\s*\|\s*(.+)$", d)
        if m:
            marker = {"expr": m.group(1), "label": m.group(2)}; continue
        m = re.match(r"^expect:\s*([A-Za-z_]\w*)\s*=\s*(\S+)\s*→\s*(.+?)\s*=\s*(.+)$", d)
        if m:
            expects.append(m.groups()); continue
        raise FormatError(f"{where}: cannot read desk line {d!r}")
    if not ctl:
        raise FormatError(f"{where}: a desk needs one 'slider' or 'input' line")
    if len(bars) != 2:
        raise FormatError(f"{where}: a desk needs exactly two 'bar:' lines (the comparison)")
    if not ctl["min"] <= ctl["start"] <= ctl["max"]:
        raise FormatError(f"{where}: the start value is outside min..max")
    spec["lets"], spec["control"], spec["bars"], spec["marker"] = lets, ctl, bars, marker
    spec["scale"] = spec.get("scale", "")

    def run(v):
        e = {ctl["name"]: v}
        for L in lets:
            e[L["name"]] = evaluate(L["expr"], e)
        return e

    # Deal inputs: a literal marked "| deal" must appear in that deal's file.
    for L in lets:
        if L["deal"]:
            if not re.fullmatch(r"\d+(?:\.\d+)?", L["expr"].strip()):
                raise FormatError(f"{where}: '| deal' needs a plain number, not {L['expr']!r}")
            if not deal_text or not any(f in deal_text for f in money_forms(float(L["expr"]))):
                raise FormatError(f"{where}: {L['name']} = {L['expr']} is not in the {spec.get('deal')} running-deal file")
    # Every text and bar evaluates at every control value (no runtime errors on the page).
    n = int(round((ctl["max"] - ctl["min"]) / ctl["step"]))
    for k in range(n + 1):
        v = ctl["min"] + k * ctl["step"]
        e = run(v)
        for key in ("label", "valuetext", "working", "pass", "fail", "reveal"):
            if spec.get(key):
                fill(spec[key], e)
        for b in bars:
            evaluate(b["expr"], e)
        if marker:
            evaluate(marker["expr"], e)
        if spec["scale"]:
            evaluate(spec["scale"], e)
        evaluate(spec["pass-if"], e)
    for name, val, expr, want in expects:
        if name != ctl["name"]:
            raise FormatError(f"{where}: expect names '{name}', but the control is '{ctl['name']}'")
        e = run(float(val))
        ex, _, f = expr.partition("|")
        got = fmt(f or "num", evaluate(ex, e))
        if got != want.strip():
            raise FormatError(f"{where}: expected {expr} = {want.strip()} at {name} = {val}, the desk computes {got}")


BLOCK_RE = re.compile(r"^```bpl:([a-z]+)\s*\n(.*?)^```\s*$", re.M | re.S)


def extract(md: str, where: str, deals_md: str) -> tuple:
    """Markdown with bpl blocks -> (Markdown with placeholders, [specs])."""
    specs = []

    def sub(m: re.Match) -> str:
        spec = parse_block(m.group(1), m.group(2).rstrip("\n").split("\n"), f"{where} block {len(specs) + 1} (bpl:{m.group(1)})")
        validate(spec, deals_md)
        spec.pop("where", None)
        specs.append(spec)
        if spec["type"] == "lesson":
            return ""
        return f'\n<div class="bplc" data-i="{len(specs) - 1}"></div>\n'

    out = BLOCK_RE.sub(sub, md)
    if "```bpl:" in out:
        raise FormatError(f"{where}: a bpl block is not closed with ```")
    return out, specs
