# Style guide

Extracted from the Course Bible, Section 5 (snapshot 20 Nov 2026, 10:21). The Bible stays the source of truth.

## 5. Style guide, naming, data and ID rules

Every asset is written in plain US English, names itself `code-asset-vN`, uses only fictional data, and cites rule and formula IDs. Four placeholder tags mark anything not yet settled.

### 5.1 Writing style

- Sentences under 25 words. Paragraphs of three sentences or fewer.
- Second person, active voice: "You size the loan", not "The loan is sized".
- Define every acronym at first use in each asset, then use the acronym.
- Use the glossary term exactly. Say "LTARV", never "ARV LTV" or "LTV on ARV".
- One idea per bullet. Numbered lists only for steps in order.
- No idioms, sports metaphors or humour that depends on culture.

### 5.2 Numbers and units

| Item | Format | Example |
| --- | --- | --- |
| Money | US dollars, comma separators, no cents unless under $100 | $1,250,000 |
| Interest rate | Percent, three decimals | 10.250% |
| Leverage (LTV, LTC, LTARV) | Percent, one decimal | 72.5% |
| Coverage (DSCR) | Two decimals with "x" | 1.25x |
| Debt yield, cap rate | Percent, two decimals | 9.50% |
| Dates | Day, short month, year | 18 Nov 2026 |
| Area | Square feet, "sf" | 12,400 sf |

Keep full precision in working steps. Round only the final answer. Decided 19 Nov 2026: test results are compared to limits at full precision, never rounded or truncated first (Formula Library conventions).

**Worked formulas** always show four lines: formula ID and formula; inputs with sources; substitution; result with units and the policy test it feeds.

### 5.3 Asset naming: `code-asset-vN`

| Part | Allowed values | Notes |
| --- | --- | --- |
| code | C0-C14, R1-R6, M1-M6, CM1-CM6, or BPL for program-wide | Upper case, no spaces |
| asset | lesson, jobaid, quiz, scenario, ojt, script, deck, calc, xlsx, video | Lower case. Add a two-digit part number if a module has several: `video-02` |
| vN | v0 = draft; v1 = first approved; +1 for every published change | Never reuse a number. Never append "final" |

Examples: `C3-lesson-v1`, `R2-calc-v2`, `M3-video-02-v1`, `BPL-glossary-v1`.

### 5.4 Data rules

1. **All people, entities and properties are fictional.** Never use a real borrower, broker, sponsor or address.
2. Entities use a fictional name plus a real entity type: "Harborline Holdings LLC".
3. Property addresses use fictional street names in a real US state, so state-law content stays meaningful.
4. Phone numbers use 555-0100 to 555-0199. Emails use the example.com domain.
5. Deal numbers come only from the running deals file. Never change a running-deal input inside one asset.
6. Market rates and ranges are labelled "market range" with a source and date. They are context, never policy.
7. Policy limits come only from the credit policy, cited by rule ID. If missing, write `[POLICY: description]`.
8. OJT outputs from live files leave the file with personal data removed.

### 5.5 Placeholder tags

| Tag | Meaning | Who clears it |
| --- | --- | --- |
| `[VERIFY: …]` | A legal or regulatory statement that needs checking | Legal or compliance reviewer |
| `[POLICY: …]` | A threshold, limit or rule that must come from the credit policy | Chief Credit Officer delegate |
| `[CONFIRM: …]` | A program design choice awaiting sign-off | Program owner |
| `[DATA: …]` | A deal number missing from the running deals file | Instructional designer |

No asset with an open tag may move past v0.

### 5.6 The \[VERIFY\] convention

Every legal or regulatory statement carries a VERIFY tag in this form:

`[VERIFY: authority and section; source link or document; date checked]`

Example: `[VERIFY: 12 CFR 1026.3(a), Official Interpretation 3(a)-4; consumerfinance.gov; checked 18 Nov 2026]`

- Write legal content as "generally", "may" or "can". Never as a final legal conclusion.
- Prefer primary sources (statute, regulation, agency guidance) over law-firm or industry summaries.
- A VERIFY tag older than 6 months must be re-checked before any re-release. \[CONFIRM\]
- State-law statements also cite the state law table row, e.g. `SLT-CA-04`. \[CONFIRM: table row ID format\]

### 5.7 Policy rule IDs: `FAMILY-TOPIC-NN`

FAMILY is CORE, RES, MF or COM. TOPIC is a 2-4 letter code below. NN is a two-digit number, never reused. Example: `RES-FF-03` is the third Residential fix-and-flip rule.

| Family | Topic codes (proposed) |
| --- | --- |
| CORE | BP business purpose · KYC know your customer and AML · BOR borrower and guarantor · VAL valuation · SZ sizing and structure · DOC documents and collateral · INS insurance · CLS closing · SVC servicing · DEF default and workout · AUTH approval authority · PRC pricing · CONC concentration · EXC exceptions |
| RES | FF fix-and-flip and RTL · GU ground-up construction · DRW draws · DSCR rental · PF rental portfolio · STR short-term rental · BR bridge with no rehab · LND land and lots · GEN rules for all residential loans |
| MF | RR rent roll · BR bridge and value-add · TRM stabilized term · CON construction · LU lease-up · SB stabilized bridge · DSCR small multifamily DSCR (5-10 units) · MEZ mezzanine and preferred equity · GEN rules for all multifamily loans |
| COM | LS leases and tenants · OFF office · RTL retail · IND industrial · HOS hospitality · SS self-storage · MX mixed-use · CM cash management · GEN rules for all commercial loans · BR commercial bridge · TRM term loans · DSCR small-balance commercial DSCR · NNN single-tenant net lease · CON construction · LND land |

Note: COM-RTL means commercial retail. Residential transition loans are RES-FF.

### 5.8 Formula IDs: `F-FAMILY-NN`

Example: `F-RES-07` is formula 7 in the Residential library. The IDs in Section 6 are **confirmed**: since 19 Nov 2026 every ID here matches an entry in the Formula Library tab (112 formulas, 336 test cases). The library governs if the two ever differ.

