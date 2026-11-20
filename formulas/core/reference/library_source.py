from decimal import Decimal, ROUND_HALF_UP
import json

D = Decimal
def c(x):  # round money to cent, half up
    return D(str(x)).quantize(D('0.01'), rounding=ROUND_HALF_UP)
def m(x):  # money display with cents
    v = c(x)
    s = f"{abs(v):,.2f}"
    return ("−$" if v < 0 else "$") + s
def pct(x, n):
    return f"{D(str(x*100)).quantize(D(1).scaleb(-n), rounding=ROUND_HALF_UP)}%"
def xx(x):
    return f"{D(str(x)).quantize(D('0.01'), rounding=ROUND_HALF_UP)}x"

def pmt(L, r, n):
    i = r/12
    if i == 0:
        return L/n
    return L*i/(1-(1+i)**-n)

F = []
def add(**k):
    F.append(k)

# ---------- F-CORE-01 ----------
def f01(L, r, d): return L*r/360*d
add(id="F-CORE-01", name="Interest-only payment (Actual/360)",
 purpose="Interest due for one billing period on an interest-only loan.",
 plain="Interest = Loan balance × annual rate ÷ 360 × actual days in the period",
 latex=r"I = L \times \frac{r}{360} \times d",
 vars="L = outstanding balance ($); r = annual note rate (%); d = actual days in the period (days)",
 example=["Inputs: $500,000 balance; 10.000%; 30-day month.",
          f"$500,000 × 10.000% ÷ 360 = {m(500000*.10/360)} a day (unrounded 138.888…).",
          f"× 30 days = {m(f01(500000,.10,30))}. A 31-day month gives {m(f01(500000,.10,31))}."],
 interp="What the borrower owes each period. Months with more days cost more under Actual/360.",
 rules="CORE-PRC-01, CORE-SVC-01; used in every interest-only bridge rule (RES-FF, MF-BR, COM-BR)",
 mistakes=["Dividing by 12 instead of using actual days; this understates interest in 31-day months.",
           "Using the commitment instead of the funded balance on future-funded loans.",
           "Rounding the daily rate before multiplying by days."],
 edges="Zero balance or rate → $0. Negative inputs are invalid. Partial period (funding mid-month) → count actual days funded, including the funding day and excluding the payoff day [CONFIRM]. Not affected by vacancy.",
 rounding="Actual/360. Keep full precision; round the period amount to the cent (half up) once.",
 modules="C3, C11, C12; also the family bridge modules",
 tests=[("$500,000; 10.000%; 30 days", m(f01(500000,.10,30))),
        ("$4,340,000; 7.650%; 31 days", m(f01(4340000,.0765,31))),
        ("$340,000; 11.500%; 28 days", m(f01(340000,.115,28)))])

# ---------- F-CORE-02 ----------
add(id="F-CORE-02", name="Amortizing payment (principal and interest)",
 purpose="Level monthly payment that repays a loan over its amortization term.",
 plain="Payment = L × i ÷ (1 − (1 + i)^−n), where i = annual rate ÷ 12 and n = months",
 latex=r"P = \frac{L \times i}{1-(1+i)^{-n}},\quad i=\frac{r}{12}",
 vars="L = loan amount ($); r = annual note rate (%); i = monthly rate (decimal); n = amortization (months)",
 example=["Inputs: $500,000; 7.000%; 360 months.", "i = 7.000% ÷ 12 = 0.0058333…",
          f"Payment = {m(pmt(500000,.07,360))} a month."],
 interp="The scheduled P&I payment. It is the debt-service base for DSCR on amortizing loans.",
 rules="RES-DSCR rules (F-RES-07, -08), MF-TRM, COM-TRM-02, COM-DSCR-09",
 mistakes=["Using the term (e.g. 10 years) instead of the amortization (e.g. 30 years) for n.",
           "Entering the annual rate without dividing by 12.",
           "Applying Actual/360 here; the payment formula uses a 12-period year by convention."],
 edges="Rate 0% → P = L ÷ n. n must be ≥ 1. Negative L invalid. Partial first period → interest for odd days is collected separately (F-CORE-33), not by changing P.",
 rounding="Monthly 30/360 payment convention (market standard for amortizing schedules; accrual on billing still follows the note) [CONFIRM]. Round P to the cent.",
 modules="C3, C8; also the family term-loan modules",
 tests=[("$500,000; 7.000%; 360 months", m(pmt(500000,.07,360))),
        ("$3,900,000; 7.000%; 300 months", m(pmt(3900000,.07,300))),
        ("$120,000; 0.000%; 120 months", m(pmt(120000,0,120)))])

# ---------- F-CORE-03 ----------
add(id="F-CORE-03", name="Annual debt service (ADS)",
 purpose="Total scheduled payments in a year, used in DSCR.",
 plain="ADS = monthly payment × 12 (amortizing) or Loan × annual rate (interest-only, underwriting basis)",
 latex=r"ADS = 12 \times P \quad\text{or}\quad ADS_{IO} = L \times r",
 vars="P = monthly payment from F-CORE-02 ($); L = balance ($); r = annual rate (%)",
 example=[f"Amortizing: {m(pmt(500000,.07,360))} × 12 = {m(c(pmt(500000,.07,360))*12)}.",
          "Interest-only (underwriting): $500,000 × 10.000% = $50,000.00."],
 interp="The yearly debt cost that NOI or NCF must cover.",
 rules="Every DSCR rule; F-CORE-11, F-MF-10, F-COM-08",
 mistakes=["Multiplying an unrounded payment by 12 in one place and a rounded one elsewhere.",
           "Using the Actual/360 billed interest (×365/360) in one test and nominal in another."],
 edges="Zero loan → $0. For IO loans the underwriting ADS uses the nominal rate (L × r); actual billed interest is ×365/360 higher [CONFIRM]. Not affected by vacancy.",
 rounding="Round the monthly payment to the cent first, then × 12, so ADS ties to the schedule.",
 modules="C3, C8, C14",
 tests=[("Payment $3,326.51", m(D('3326.51')*12)),
        ("IO: $2,860,000 at 8.250%", m(2860000*.0825)),
        ("Payment $27,564.39", m(D('27564.39')*12))])

# ---------- F-CORE-04 ----------
k = c(pmt(500000,.07,360))*12/500000
add(id="F-CORE-04", name="Loan constant",
 purpose="Annual debt service per dollar of loan; lets sizing work without a loan amount.",
 plain="Constant = ADS ÷ loan amount",
 latex=r"K = \frac{ADS}{L} = \frac{12\,i}{1-(1+i)^{-n}}",
 vars="ADS = annual debt service ($); L = loan ($); i, n as F-CORE-02",
 example=["$39,918.12 ÷ $500,000 = 0.0798362 = 7.984%."],
 interp="A 7.98% constant means each $1 of loan costs about 8 cents a year.",
 rules="F-CORE-17, F-COM-08, F-COM-10, MF-TRM, COM-TRM-02",
 mistakes=["Using the note rate as the constant on an amortizing loan.",
           "Rounding the constant to two decimals before sizing; this moves loan size by thousands."],
 edges="Rate 0% → K = 12 ÷ n. IO loan → K = r. Not defined for L = 0.",
 rounding="Show at least 6 decimal places (e.g. 0.084814). Sizing divides by the unrounded constant, ADS ÷ L (corrected 20 Nov 2026). Display as percent, three decimals.",
 modules="C3, C8",
 tests=[("7.000%, 25 years", f"{12*(.07/12)/(1-(1+.07/12)**-300):.6f}"),
        ("7.750%, 25 years", f"{12*(.0775/12)/(1-(1+.0775/12)**-300):.6f}"),
        ("6.500%, 30 years", f"{12*(.065/12)/(1-(1+.065/12)**-360):.6f}")])

# ---------- F-CORE-05 ----------
add(id="F-CORE-05", name="Per diem interest",
 purpose="One day's interest; used for closings, payoffs and odd-day charges.",
 plain="Per diem = Loan × annual rate ÷ 360",
 latex=r"I_{day} = \frac{L \times r}{360}",
 vars="L = balance ($); r = annual rate (%)",
 example=[f"$500,000 × 10.000% ÷ 360 = {m(500000*.1/360)}."],
 interp="Each extra day the loan is outstanding costs this amount.",
 rules="CORE-CLS-01; F-CORE-01, -31, -32, -33",
 mistakes=["Rounding the per diem to the cent, then multiplying by many days (error grows).",
           "Using 365 for an Actual/360 note."],
 edges="Zero balance → $0. Default interest uses the default rate (F-CORE-31).",
 rounding="Actual/360. Display to the cent; calculate with the unrounded value.",
 modules="C3, C11, C12",
 tests=[("$500,000; 10.000%", m(500000*.1/360)),
        ("$3,520,000; 7.650%", m(3520000*.0765/360)),
        ("$5,140,000; 9.000%", m(5140000*.09/360))])

# ---------- F-CORE-06 ----------
add(id="F-CORE-06", name="Origination points",
 purpose="Upfront fee charged as a percent of the loan.",
 plain="Fee = Commitment × points ÷ 100",
 latex=r"Fee = C \times \frac{pts}{100}",
 vars="C = total commitment ($); pts = points (1 point = 1%)",
 example=["$500,000 × 2.00 points = $10,000.00."],
 interp="Raises lender yield; counts toward cash to close and state fee tests.",
 rules="CORE-PRC-01 (never below 1.00 point), CORE-PRC-02, CORE-PRC-03 [VERIFY: state fee limits]",
 mistakes=["Charging points on initial funding instead of total commitment (or the reverse) against the term sheet.",
           "Treating 1 point as 0.1%."],
 edges="Zero points below the 1.00 floor breaks CORE-PRC-01. Fees may be capped by state law [VERIFY].",
 rounding="Round to the cent.",
 modules="C8, C11",
 tests=[("$340,000; 2.00 points", m(340000*.02)),
        ("$3,520,000; 1.00 point", m(3520000*.01)),
        ("$5,140,000; 1.50 points", m(5140000*.015))])

# ---------- F-CORE-07/08/09 ----------
add(id="F-CORE-07", name="Gross potential rent (GPR)",
 purpose="Rent the property earns if every unit or suite is leased at its scheduled rent.",
 plain="GPR = Σ (scheduled monthly rent per unit) × 12",
 latex=r"GPR = 12 \sum_{u} Rent_u",
 vars="Rent_u = monthly in-place or market rent per unit ($/month)",
 example=["10 units × $1,500 × 12 = $180,000.00."],
 interp="The ceiling for rental income before vacancy and loss.",
 rules="MF-GEN-05, COM-GEN-05",
 mistakes=["Mixing market rent for vacant units with in-place rent for leased ones without saying so.",
           "Including concessions or other income in GPR."],
 edges="100% vacancy still has a GPR (market rent); income comes from F-CORE-09. Zero units → $0.",
 rounding="Round to the cent.",
 modules="C4",
 tests=[("10 units × $1,500", m(10*1500*12)), ("50 units, average $1,300", m(50*1300*12)),
        ("8 suites, $4,250 each", m(8*4250*12))])

add(id="F-CORE-08", name="Vacancy and credit loss",
 purpose="Income lost to empty space and unpaid rent.",
 plain="Vacancy = GPR × vacancy rate",
 latex=r"V = GPR \times v",
 vars="GPR ($/year); v = vacancy and credit loss rate (%)",
 example=["$180,000 × 5.0% = $9,000.00."],
 interp="Underwriting uses the greater of actual, market or the policy floor.",
 rules="MF-GEN-05 (floor 5%), COM-GEN-05 (5%, office 10%)",
 mistakes=["Using physical occupancy when economic vacancy (unpaid rent) is higher.",
           "Applying the floor on top of actual vacancy instead of taking the greater."],
 edges="v = 100% → EGI is other income only. v below the policy floor → use the floor.",
 rounding="Round to the cent.",
 modules="C4",
 tests=[("$180,000; 5.0%", m(180000*.05)), ("$780,000; 10.0%", m(780000*.10)),
        ("$720,000; 100.0%", m(720000*1.0))])

add(id="F-CORE-09", name="Effective gross income (EGI)",
 purpose="Income actually expected after vacancy, plus other income.",
 plain="EGI = GPR − vacancy and credit loss + other income",
 latex=r"EGI = GPR - V + OI",
 vars="GPR, V, OI = other income (all $/year)",
 example=["$180,000 − $9,000 + $6,000 = $177,000.00."],
 interp="The top line for NOI.",
 rules="MF-GEN-05, COM-GEN-05",
 mistakes=["Applying vacancy to other income twice.", "Counting one-time income (e.g. a lease buyout) as recurring."],
 edges="100% vacancy → EGI = OI. Negative EGI is not possible unless OI is negative (invalid input).",
 rounding="Round to the cent.",
 modules="C4",
 tests=[("GPR $180,000; V $9,000; OI $6,000", m(177000)),
        ("GPR $720,000; V $36,000; OI $0", m(684000)),
        ("GPR $720,000; V $720,000; OI $18,000", m(18000))])

add(id="F-CORE-10", name="Net operating income (NOI)",
 purpose="Property cash flow before debt service and capital reserves.",
 plain="NOI = EGI − operating expenses",
 latex=r"NOI = EGI - OpEx",
 vars="EGI ($/year); OpEx = operating expenses incl. taxes, insurance, management ($/year)",
 example=["$177,000 − $72,000 = $105,000.00."],
 interp="The base for value (cap rate), debt yield and DSCR. Multifamily and commercial deduct reserves next (F-MF-09, F-COM-03).",
 rules="MF-GEN-06, COM-GEN-06 (greater of T-12 and appraiser; management ≥ 3%)",
 mistakes=["Deducting debt service or depreciation.", "Leaving out management because the owner self-manages."],
 edges="NOI can be negative (e.g. 100% vacancy); then DSCR and debt yield are negative and fail.",
 rounding="Round to the cent.",
 modules="C4, C5, C8",
 tests=[("EGI $177,000; OpEx $72,000", m(105000)), ("EGI $684,000; OpEx $204,000", m(480000)),
        ("EGI $18,000; OpEx $310,000", m(18000-310000))])

def dscr(n,a): return n/a
add(id="F-CORE-11", name="Debt service coverage ratio (DSCR)",
 purpose="How many times income covers debt service.",
 plain="DSCR = income ÷ annual debt service (income = NOI here; families set NCF or gross rent)",
 latex=r"DSCR = \frac{NOI}{ADS}",
 vars="NOI ($/year); ADS ($/year, F-CORE-03)",
 example=["$105,000 ÷ $84,000 = 1.25x."],
 interp="Below 1.00x the property cannot pay its debt from income.",
 rules="Family minimums: RES-DSCR (F-RES-07), MF-GEN-11 / F-MF-10, COM-GEN-11 / F-COM-08",
 mistakes=["Using the wrong income base for the family (NOI vs NCF vs gross rent).",
           "Rounding 1.2496x to 1.25x before comparing to a 1.25x minimum (not allowed: full precision)."],
 edges="ADS = 0 → undefined (no debt). Negative NOI → negative DSCR, fails.",
 rounding="Compare at full precision; display two decimals with x.",
 modules="C4, C8, C14",
 tests=[("NOI $105,000; ADS $84,000", xx(105000/84000)), ("NOI $434,000; ADS $330,772.68", f"{xx(434000/330772.68)} (1.3121)"),
        ("NOI $124,950; ADS $100,000", "1.2495 → displays 1.25x but FAILS a 1.25x minimum")])

add(id="F-CORE-12", name="Break-even occupancy",
 purpose="Occupancy needed to pay operating expenses and debt service.",
 plain="Break-even = (OpEx + ADS) ÷ GPR",
 latex=r"BE = \frac{OpEx + ADS}{GPR}",
 vars="OpEx, ADS, GPR ($/year)",
 example=["($72,000 + $84,000) ÷ $180,000 = 86.7%."],
 interp="The cushion is current occupancy minus break-even.",
 rules="Context for MF-GEN-05 and COM-GEN-05 vacancy assumptions",
 mistakes=["Leaving out ADS.", "Comparing to physical occupancy when economic occupancy is lower."],
 edges="Above 100% → the property cannot break even even fully leased. GPR = 0 → undefined.",
 rounding="Display percent, one decimal.",
 modules="C4, C8",
 tests=[("OpEx $72,000; ADS $84,000; GPR $180,000", pct(156000/180000,1)),
        ("OpEx $204,000; ADS $330,772.68; GPR $720,000", pct((204000+330772.68)/720000,1)),
        ("OpEx $310,000; ADS $500,000; GPR $780,000", pct(810000/780000,1))])

add(id="F-CORE-13", name="Capitalization (cap) rate",
 purpose="Converts NOI to value, or value to an income yield.",
 plain="Cap rate = NOI ÷ value; value = NOI ÷ cap rate",
 latex=r"CR = \frac{NOI}{V}, \qquad V = \frac{NOI}{CR}",
 vars="NOI ($/year); V = value ($); CR (%)",
 example=["$105,000 ÷ $1,500,000 = 7.00%; $105,000 ÷ 7.00% = $1,500,000."],
 interp="Lower cap rate = higher value for the same NOI.",
 rules="CORE-VAL-01 to -03 (the appraiser sets the rate)",
 mistakes=["Capping a projected NOI and calling it as-is value.", "Using a cap rate below the loan constant without noticing negative leverage."],
 edges="CR = 0 → undefined. Negative NOI → value not meaningful by this method.",
 rounding="Display cap rate as percent, two decimals; value to the dollar.",
 modules="C5",
 tests=[("NOI $105,000; V $1,500,000", pct(105000/1500000,2)), ("NOI $480,000; CR 8.00%", m(480000/.08)),
        ("NOI $240,000; V $4,000,000", pct(240000/4000000,2))])

add(id="F-CORE-14", name="Loan-to-value (LTV)",
 purpose="Leverage against value.",
 plain="LTV = loan ÷ value (value = lower of cost and appraisal on a purchase)",
 latex=r"LTV = \frac{L}{\min(Price,\ Appraisal)}",
 vars="L ($); Price ($); Appraisal ($)",
 example=["$1,050,000 ÷ $1,500,000 = 70.0%."],
 interp="Higher LTV = less borrower equity cushion.",
 rules="CORE-VAL-01, -02; family limits (RES, MF-BR, COM-BR, COM-TRM); 12 CFR 365 value definition [VERIFY]",
 mistakes=["Using appraised value above the purchase price on an acquisition.", "Mixing as-is and as-stabilized values."],
 edges="Value 0 → undefined. Loan above value → over 100%: fails every limit.",
 rounding="Compare at full precision; display one decimal.",
 modules="C5, C8",
 tests=[("$1,050,000; value $1,500,000", pct(1050000/1500000,1)), ("$2,860,000; price $4,400,000, appraisal $4,500,000", pct(2860000/4400000,1)),
        ("$3,900,000; value $6,000,000", pct(.65,1))])

add(id="F-CORE-15", name="Loan-to-cost (LTC)",
 purpose="Leverage against total project cost.",
 plain="LTC = total loan commitment ÷ total project cost",
 latex=r"LTC = \frac{C}{Cost_{total}}",
 vars="C = commitment incl. future funding ($); Cost_total = purchase or land + hard + soft + reserves ($)",
 example=["$1,200,000 ÷ $1,600,000 = 75.0%."],
 interp="Shows how much of the project the lender funds.",
 rules="COM-CON-01, COM-BR table, MF-BR, RES-FF",
 mistakes=["Leaving the interest reserve out of cost but in the loan.", "Using initial funding instead of total commitment."],
 edges="Cost 0 → undefined. Land counted at lower of cost and value.",
 rounding="Full precision; display one decimal.",
 modules="C8",
 tests=[("$1,200,000; $1,600,000", pct(.75,1)), ("$3,520,000; $5,180,000", pct(3520000/5180000,1)),
        ("$5,969,283; $9,183,512", pct(5969283/9183512,1))])

add(id="F-CORE-16", name="Debt yield",
 purpose="Income return on the loan, independent of rate and amortization.",
 plain="Debt yield = NOI ÷ loan",
 latex=r"DY = \frac{NOI}{L}",
 vars="NOI ($/year; families may use NCF); L ($)",
 example=["$105,000 ÷ $1,050,000 = 10.00%."],
 interp="The lender's income return if it took the property at the loan amount.",
 rules="MF-GEN-11 / F-MF-11, COM-GEN-11, COM-BR exit debt yields",
 mistakes=["Using NOI where the family requires NCF.", "Comparing as-is NOI to a stabilized loan amount."],
 edges="L = 0 → undefined. Negative NOI → negative, fails.",
 rounding="Full precision; display two decimals.",
 modules="C8",
 tests=[("$105,000; $1,050,000", pct(.1,2)), ("$434,000; $3,520,000", pct(434000/3520000,2)), ("$254,000; $2,860,000", pct(254000/2860000,2))])

add(id="F-CORE-17", name="Maximum loan by DSCR",
 purpose="Largest loan the income supports at a minimum DSCR.",
 plain="Max loan = NOI ÷ minimum DSCR ÷ loan constant",
 latex=r"L_{DSCR} = \frac{NOI}{DSCR_{min} \times K}",
 vars="NOI ($/year); DSCR_min (x); K = loan constant (F-CORE-04)",
 example=["$105,000 ÷ 1.25 ÷ 8.00% = $1,050,000.00."],
 interp="Usually the binding test when rates are high relative to cap rates.",
 rules="COM-GEN-11, F-COM-08, MF-TRM, RES-DSCR",
 mistakes=["Rounding the constant first.", "Dividing by DSCR × rate on an amortizing loan."],
 edges="NOI ≤ 0 → $0 loan. K must be > 0.",
 rounding="Full precision; round the loan down to policy increments (examples use $10,000).",
 modules="C8",
 tests=[("$105,000; 1.25x; 8.00%", m(105000/1.25/.08)), ("$434,000; 1.30x; K = $330,772.68 ÷ $3,900,000", m(434000/1.3/(330772.68/3900000))),
        ("$430,000; 1.25x; K = $319,050.84 ÷ $3,520,000", m(430000/1.25/(319050.84/3520000)))])

add(id="F-CORE-18", name="Maximum loan by debt yield",
 purpose="Largest loan at a minimum debt yield.",
 plain="Max loan = NOI ÷ minimum debt yield",
 latex=r"L_{DY} = \frac{NOI}{DY_{min}}",
 vars="NOI ($/year); DY_min (%)",
 example=["$105,000 ÷ 10.50% = $1,000,000.00."],
 interp="A rate-free cap on loan size.",
 rules="COM-GEN-11, MF-GEN-11, COM-BR table",
 mistakes=["Using a stabilized debt yield floor against in-place NOI."],
 edges="NOI ≤ 0 → $0.",
 rounding="Full precision; round down to policy increments.",
 modules="C8",
 tests=[("$105,000; 10.50%", m(105000/.105)), ("$434,000; 9.00%", m(434000/.09)), ("$720,000; 9.00%", m(720000/.09))])

add(id="F-CORE-19", name="Maximum loan (lowest of all tests)",
 purpose="Final loan size from every applicable test.",
 plain="Max loan = minimum of the LTV, LTC, DSCR and debt-yield results that apply",
 latex=r"L = \min(L_{LTV}, L_{LTC}, L_{DSCR}, L_{DY})",
 vars="Each test result ($)",
 example=["min($1,125,000; $1,050,000; $1,000,000) = $1,000,000.00. Debt yield binds."],
 interp="Name the binding test in the credit memo.",
 rules="COM-GEN-11 (F-COM-08), MF-GEN-11, family sizing rules",
 mistakes=["Skipping a test because it 'usually doesn't bind'.", "Rounding up to a round number above the binding test."],
 edges="If any test gives $0 or less, no loan.",
 rounding="Round down to policy increments after taking the minimum.",
 modules="C8, C14",
 tests=[("$1,125,000; $1,050,000; $1,000,000", m(1000000)), ("$3,900,000; $3,936,238; $4,822,222", m(3900000)),
        ("$2,800,000; $2,468,378 (NNN)", m(2468378))])

add(id="F-CORE-20", name="Interest reserve (straight-line)",
 purpose="Loan proceeds held back to pay interest for a set period.",
 plain="Reserve = balance × annual rate ÷ 360 × actual days in the reserve period",
 latex=r"IR = L \times \frac{r}{360} \times d",
 vars="L = funded balance ($); r (%); d = days covered (days)",
 example=["$500,000 × 10.000% ÷ 360 × 180 days = $25,000.00. Over 182 actual days: " + m(500000*.1/360*182) + "."],
 interp="Straight-line reserves suit fully funded loans. Construction uses an average-balance version (F-RES-16, F-MF-15, F-COM-14).",
 rules="COM-BR-04, CORE-SVC-01",
 mistakes=["Counting 6 × 30 = 180 days instead of actual days.", "Sizing on initial funding when draws will raise the balance."],
 edges="Zero days → $0. Floating rate → size at cap strike + spread (COM-BR-03).",
 rounding="Actual/360; round to the cent.",
 modules="C8, C11, C12",
 tests=[("$500,000; 10.000%; 182 days", m(500000*.1/360*182)), ("$2,860,000; 8.250%; 184 days", m(2860000*.0825/360*184)),
        ("$340,000; 11.500%; 90 days", m(340000*.115/360*90))])

add(id="F-CORE-21", name="Months of reserves",
 purpose="How many monthly payments liquid assets cover.",
 plain="Months = adjusted liquid assets ÷ monthly payment (PITIA or interest)",
 latex=r"Months = \frac{LA_{adj}}{P_{month}}",
 vars="LA_adj = F-CORE-24 ($); P_month = monthly PITIA or interest ($)",
 example=["$60,000 ÷ $5,000 = 12.0 months."],
 interp="Tests staying power if the property stops paying.",
 rules="COM-DSCR-07 (6 months PITIA), RES-DSCR reserve rules",
 mistakes=["Using gross, not adjusted, liquidity.", "Using P&I only when the rule says PITIA."],
 edges="P_month = 0 → undefined. Negative liquidity → negative months, fails.",
 rounding="Full precision; display one decimal.",
 modules="C6",
 tests=[("$60,000; $5,000", "12.0 months"), ("$45,313.80; $7,552.30", f"{45313.80/7552.30:.1f} months"), ("$20,000; $3,043.35", f"{20000/3043.35:.1f} months")])

add(id="F-CORE-22", name="Extension fee",
 purpose="Fee to extend maturity.",
 plain="Fee = commitment (or balance, per the note) × fee rate",
 latex=r"Fee_{ext} = C \times f",
 vars="C ($); f = fee (%)",
 example=["$500,000 × 0.50% = $2,500.00."],
 interp="Compensates the lender for added time risk.",
 rules="CORE-SVC-01, CORE-SVC-02 (0.50 point of commitment), COM-BR-02 (≥ 0.25%), MF-BR-11",
 mistakes=["Using the outstanding balance when the rule says commitment.", "Granting the extension before the progress test (CORE-SVC-01) is met."],
 edges="A failed extension test means no fee and no extension.",
 rounding="Round to the cent.",
 modules="C12",
 tests=[("$340,000; 0.50%", m(1700)), ("$3,520,000; 0.25%", m(8800)), ("$5,140,000; 0.50%", m(25700))])

add(id="F-CORE-23", name="Loss severity",
 purpose="Loss as a share of the balance at default.",
 plain="Severity = (balance + costs − net recovery) ÷ balance",
 latex=r"LS = \frac{B + Costs - Recovery}{B}",
 vars="B = balance at default ($); Costs = legal, carry, sale costs ($); Recovery = net sale proceeds ($)",
 example=["($500,000 + $40,000 − $430,000) ÷ $500,000 = 22.0%."],
 interp="Feeds recourse, pricing and reserve judgements.",
 rules="CORE-DOC-01, CORE-DOC-02 (recourse), CORE-SVC-03",
 mistakes=["Leaving out accrued interest and carry costs.", "Using gross, not net, sale proceeds."],
 edges="Recovery above B + costs → negative severity (a gain); report 0% loss [CONFIRM]. B = 0 → undefined.",
 rounding="Display one decimal.",
 modules="C13, C14",
 tests=[("$500,000; $40,000; $430,000", pct(110000/500000,1)), ("$3,520,000; $310,000; $3,150,000", pct(680000/3520000,1)),
        ("$340,000; $28,000; $400,000", "−9.4% → report 0.0% loss")])

add(id="F-CORE-24", name="Adjusted liquid assets",
 purpose="Liquidity after haircuts and cash to close.",
 plain="Adjusted = cash × 1.00 + securities × 0.70 + vested retirement × 0.70 + HELOC × 0 − cash to close",
 latex=r"LA_{adj} = Cash + 0.70\,Sec + 0.70\,Ret - CTC",
 vars="Cash, Sec, Ret, CTC ($)",
 example=["$110,000 + $21,000 + $35,000 + $0 − $75,800 = $90,200.00."],
 interp="Post-closing liquidity available to the guarantor.",
 rules="CORE-BOR-11",
 mistakes=["Counting an unused credit line as liquidity.", "Forgetting to subtract cash to close."],
 edges="Negative result → borrower cannot close from own funds.",
 rounding="Round to the cent.",
 modules="C6",
 tests=[("$110,000; $30,000; $50,000; CTC $75,800", m(90200)), ("$550,000; $300,000; $0; CTC $0", m(760000)),
        ("$40,000; $10,000; $0; CTC $60,000", m(40000+7000-60000))])

def req(C_, r, other): return max(.1*C_, C_*r/12*6)+.05*other
add(id="F-CORE-25", name="Required post-closing liquidity",
 purpose="Minimum liquidity a guarantor must hold after closing.",
 plain="Required = max(10% × commitment, 6 months' interest) + 5% × other open commitments with us",
 latex=r"LR = \max(0.10\,C,\ 6 \times \tfrac{C\,r}{12}) + 0.05\,O",
 vars="C = commitment ($); r = note rate (%); O = other open commitments ($)",
 example=["max($34,000; $18,700) + $30,000 = $64,000.00."],
 interp="Compare to F-CORE-24.",
 rules="CORE-BOR-12",
 mistakes=["Using Actual/360 billed interest here; the test uses nominal months [CONFIRM].", "Leaving out other open commitments."],
 edges="O = 0 → no add-on.",
 rounding="Underwriting test: nominal monthly interest (r ÷ 12). Round to the cent.",
 modules="C6",
 tests=[("$340,000; 11.000%; O $600,000", m(req(340000,.11,600000))), ("$3,520,000; 7.650%; O $0", m(req(3520000,.0765,0))),
        ("$5,140,000; 7.650%; O $0", m(req(5140000,.0765,0)))])

add(id="F-CORE-26", name="Adjusted net worth",
 purpose="Guarantor net worth without equity in the subject property.",
 plain="Adjusted NW = total assets − total liabilities − equity in subject property",
 latex=r"NW_{adj} = A - Lb - E_{subj}",
 vars="A, Lb, E_subj ($)",
 example=["$900,000 − $500,000 − $0 = $400,000.00."],
 interp="Compare to the family test (25% of commitment residential; 100% MF and commercial).",
 rules="CORE-BOR-14",
 mistakes=["Counting the subject property's equity.", "Using stated, not documented, assets."],
 edges="Negative NW → fails.",
 rounding="Round to the cent.",
 modules="C6",
 tests=[("$900,000; $500,000; $0", m(400000)), ("$7,500,000; $2,300,000; $0", m(5200000)), ("$2,000,000; $1,200,000; $300,000", m(500000))])

add(id="F-CORE-27", name="Experience count and tier",
 purpose="Counts qualifying projects to set the experience tier.",
 plain="Count = completed projects in the last 36 months where ownership ≥ 20%; tier 0 / 1-4 / 5-9 / 10+",
 latex=r"N = \sum_{p} \mathbf{1}[t_p \le 36\ \text{mo} \wedge own_p \ge 20\%]",
 vars="t_p = months since completion; own_p = ownership share (%)",
 example=["3 sold + 1 refinanced = 4 (40-month sale and 10% stake excluded) → Tier 1."],
 interp="Drives pricing (F-CORE-28) and exposure caps (CORE-CONC-01).",
 rules="CORE-BOR-15, CORE-BOR-16; family experience rules (MF-GEN-07, COM-GEN-15)",
 mistakes=["Counting projects under 20% ownership.", "Counting projects outside the lookback."],
 edges="Exactly 36 months → counts [CONFIRM]. Exactly 20% → counts.",
 rounding="Integer count.",
 modules="C6",
 tests=[("3 sold, 1 refi, 1 at 40 months, 1 at 10%", "4 → Tier 1"), ("0 projects", "0 → Tier 0"), ("11 qualifying", "11 → Tier 3")])

def rate(t, fico, lev, gu):
    base = {0:.115,1:.1075,2:.10,3:.095}[t]
    r = base + (.005 if 680<=fico<=699 else 0) + (.0025 if lev else 0) + (.0075 if gu else 0)
    return min(max(r,.085),.1275)
add(id="F-CORE-28", name="Note rate (RTL grid)",
 purpose="Builds the residential RTL note rate from the grid.",
 plain="Rate = tier base + FICO adjuster + leverage adjuster + ground-up adjuster, bounded 8.500%-12.750%",
 latex=r"r = \min(\max(b_{tier} + a_{FICO} + a_{lev} + a_{GU},\ 8.5\%),\ 12.75\%)",
 vars="b_tier (%); adjusters (%)",
 example=["10.750% + 0.500% + 0.250% + 0.000% = 11.500%."],
 interp="Higher risk, higher rate, within the band.",
 rules="CORE-PRC-01, CORE-PRC-02, CORE-PRC-03 [VERIFY: usury]",
 mistakes=["Applying the FICO adjuster to 700+ scores.", "Ignoring the 12.750% cap."],
 edges="Tier 0 + all adjusters = 13.000% → capped at 12.750%.",
 rounding="Display three decimals.",
 modules="C8",
 tests=[("Tier 1, FICO 690, near max, rehab", f"{rate(1,690,True,False)*100:.3f}%"), ("Tier 3, FICO 760, no adjusters", f"{rate(3,760,False,False)*100:.3f}%"),
        ("Tier 0, FICO 685, near max, ground-up", f"{rate(0,685,True,True)*100:.3f}% (capped)")])

add(id="F-CORE-29", name="Aggregate sponsor exposure",
 purpose="Total commitments to one sponsor, for concentration caps.",
 plain="Exposure = new commitment + all open commitments to the sponsor and affiliates",
 latex=r"E = C_{new} + \sum C_{open}",
 vars="Commitments ($); count of open loans",
 example=["$340,000 + $250,000 + $350,000 = $940,000.00; 3 loans."],
 interp="Compare to the tier cap in CORE-CONC-01.",
 rules="CORE-CONC-01, CORE-CONC-02",
 mistakes=["Using outstanding balances instead of commitments.", "Missing affiliate entities."],
 edges="Paid-off loans drop out.",
 rounding="Round to the cent.",
 modules="C6, C14",
 tests=[("$340,000 + $250,000 + $350,000", m(940000)), ("$3,520,000 + none", f"{m(3520000)} (over Tier 1 cap)"), ("$5,140,000 + none", f"{m(5140000)} (over Tier 1 cap)")])

add(id="F-CORE-30", name="Bucket concentration",
 purpose="Share of the book in one product, state or market.",
 plain="Bucket % = commitments in the bucket ÷ total commitments for that base",
 latex=r"B\% = \frac{C_{bucket}}{C_{base}}",
 vars="C_bucket, C_base ($)",
 example=["$5,000,000 ground-up ÷ $25,000,000 residential = 20.0% (cap 25%)."],
 interp="A breached bucket takes no new loans without committee.",
 rules="CORE-CONC-03 to -07",
 mistakes=["Using the wrong base (total book vs residential only).", "Measuring before adding the new loan."],
 edges="Base 0 → undefined.",
 rounding="Full precision; display one decimal.",
 modules="C14",
 tests=[("$5,000,000; $25,000,000", pct(.2,1)), ("$6,500,000 + new $340,000; $25,340,000", pct(6840000/25340000,1)), ("$3,900,000; $26,000,000 (one MSA)", pct(.15,1))])

# ---------- SUGGESTED ----------
add(id="F-CORE-31", name="Default interest (SUGGESTED)",
 purpose="Interest on a loan in default, at the default rate.",
 plain="Default interest = balance × (note rate + 5.00%) ÷ 360 × days in default, capped by state usury",
 latex=r"I_{def} = L \times \frac{r + 5\%}{360} \times d",
 vars="L ($); r (%); d = days in default (days)",
 example=["$500,000 × 15.000% ÷ 360 × 30 = $6,250.00."],
 interp="The extra charge over normal interest is L × 5% ÷ 360 × d.",
 rules="CORE-SVC-03, CORE-PRC-03 [VERIFY: state usury]",
 mistakes=["Charging default interest from the missed payment date when the note says from notice.", "Ignoring the usury cap."],
 edges="Usury cap below r + 5% → charge the cap. d = 0 → $0.",
 rounding="Actual/360; round to the cent.",
 modules="C10, C12, C13",
 tests=[("$500,000; 10.000%; 30 days", m(500000*.15/360*30)), ("$3,520,000; 7.650%; 45 days", m(3520000*.1265/360*45)),
        ("$340,000; 11.500%; 61 days", m(340000*.165/360*61))])

add(id="F-CORE-32", name="Payoff amount (SUGGESTED)",
 purpose="Amount needed to repay the loan on a given date.",
 plain="Payoff = principal + accrued interest (Actual/360 days since last paid-to date) + exit fee + unpaid fees",
 latex=r"PO = L + L\frac{r}{360}d + Fee_{exit} + Fees",
 vars="L ($); r (%); d (days); fees ($)",
 example=["$500,000 + $500,000 × 10.000% ÷ 360 × 12 + $0 = " + m(500000+500000*.1/360*12) + "."],
 interp="What the title company wires to close out the loan.",
 rules="CORE-SVC-01; exit fees in MF-BR-14 and term sheets",
 mistakes=["Counting the payoff day as an interest day [CONFIRM: note language].", "Forgetting the exit fee."],
 edges="Payoff on a paid-to date → zero accrued interest.",
 rounding="Actual/360; round to the cent.",
 modules="C12, C13",
 tests=[("$500,000; 10.000%; 12 days; no fees", m(500000+500000*.1/360*12)), ("$3,520,000; 7.650%; 15 days; exit $0", m(3520000+3520000*.0765/360*15)),
        ("$5,140,000; 9.000%; 9 days; exit 0.50%", m(5140000+5140000*.09/360*9+25700))])

add(id="F-CORE-33", name="Prepaid (odd-days) interest at closing (SUGGESTED)",
 purpose="Interest from funding to the end of the first period, collected at closing.",
 plain="Prepaid interest = funded amount × rate ÷ 360 × days from funding date to period end (funding day counts)",
 latex=r"I_{odd} = L_0 \times \frac{r}{360} \times d_{odd}",
 vars="L_0 = initial funding ($); r (%); d_odd (days)",
 example=["$500,000 funded 20 Nov at 10.000%: 11 days → " + m(500000*.1/360*11) + "."],
 interp="Lines the loan up with the first regular payment date.",
 rules="CORE-CLS-01",
 mistakes=["Using the commitment instead of initial funding.", "Off-by-one on the day count."],
 edges="Funding on the first day of a period → a full period or $0, per the note [CONFIRM].",
 rounding="Actual/360; round to the cent.",
 modules="C11",
 tests=[("$500,000; 10.000%; 11 days", m(500000*.1/360*11)), ("$2,860,000; 7.650%; 13 days", m(2860000*.0765/360*13)),
        ("$4,340,000; 7.650%; 1 day", m(4340000*.0765/360))])

add(id="F-CORE-34", name="Insurance-to-value ratio (SUGGESTED)",
 purpose="Checks hazard cover against replacement cost.",
 plain="Ratio = hazard coverage limit ÷ replacement cost estimate",
 latex=r"ITV = \frac{Coverage}{RC}",
 vars="Coverage ($); RC = replacement cost from the appraisal or insurer ($)",
 example=["$1,800,000 ÷ $2,000,000 = 90.0%: below 100%, fails."],
 interp="Under 100% means a total loss is not fully covered.",
 rules="CORE-INS-01",
 mistakes=["Comparing coverage to market value or loan amount instead of replacement cost.", "Ignoring a coinsurance clause that cuts the payout when cover is under a set percent."],
 edges="RC = 0 → undefined. Builder's risk on construction is tested against hard cost.",
 rounding="Full precision; display one decimal.",
 modules="C9",
 tests=[("$1,800,000; $2,000,000", pct(.9,1)), ("$6,000,000; $5,600,000", pct(6000000/5600000,1)), ("$2,500,000; $2,500,000", pct(1,1))])

add(id="F-CORE-35", name="Monthly tax and insurance escrow (SUGGESTED)",
 purpose="Monthly deposit to pay taxes and insurance when due.",
 plain="Deposit = (annual taxes + annual insurance) ÷ 12. Cushion at closing = 2 × deposit (one-sixth of the annual total)",
 latex=r"Esc = \frac{Tax + Ins}{12},\quad Cushion = 2 \times Esc",
 vars="Tax, Ins ($/year)",
 example=["($36,000 + $9,600) ÷ 12 = $3,800.00 a month.", "Cushion = 2 × $3,800.00 = $7,600.00, collected at closing (CORE-INS-02)."],
 interp="Part of PITIA in DSCR tests. The cushion absorbs a tax or premium rise before the yearly escrow review.",
 rules="CORE-INS-02, MF-BR-13, CORE-INS-01; F-RES-08 (PITIA)",
 mistakes=["Leaving out the 2-month cushion required by CORE-INS-02.", "Using last year's tax bill after a sale-triggered reassessment."],
 edges="Annual premium due soon after closing → fund at closing.",
 rounding="Round to the cent.",
 modules="C9, C11, C12",
 tests=[("$36,000; $9,600", m(3800)+" a month; cushion "+m(7600)), ("$3,600; $1,440", m(420)+" a month; cushion "+m(840)), ("$84,000; $26,500", m(110500/12)+" a month; cushion "+m(110500/6))])

add(id="F-CORE-36", name="Appraisal age (SUGGESTED)",
 purpose="Days between the appraisal's effective date and closing.",
 plain="Age = closing date − appraisal effective date (actual days)",
 latex=r"Age = Date_{close} - Date_{eff}",
 vars="Dates (days)",
 example=["Effective 1 Aug 2026; closing 18 Nov 2026 → 109 days: passes 120."],
 interp="Over 120 days needs a new appraisal or update.",
 rules="CORE-VAL-02",
 mistakes=["Using the report date instead of the effective date.", "Measuring to the application date instead of the closing date."],
 edges="Exactly 120 days → passes (no more than 120).",
 rounding="Actual calendar days.",
 modules="C5, C11",
 tests=[("1 Aug 2026 → 18 Nov 2026", "109 days: pass"), ("21 Jul 2026 → 18 Nov 2026", "120 days: pass"), ("15 Jul 2026 → 18 Nov 2026", "126 days: fail")])

def coins(did, rc, pctreq, loss, ded):
    should = rc*pctreq
    ratio = min(1, did/should)
    return max(0, min(did, ratio*loss - ded))
add(id="F-CORE-37", name="Coinsurance recovery (SUGGESTED)",
 purpose="Shows what a property claim pays when cover is below the policy's coinsurance requirement.",
 plain="Payment = (carried ÷ required) × loss − deductible, where required = coinsurance % × replacement cost. The ratio is capped at 1; payment is capped at the limit",
 latex=r"Pay = \min\left(1, \frac{Did}{c \times RC}\right) \times Loss - Ded",
 vars="Did = limit carried ($); c = coinsurance percent; RC = replacement cost at the time of loss ($); Loss ($); Ded = deductible ($)",
 example=["Inputs: RC $5,200,000; 90% clause; carried $4,400,000; loss $500,000; deductible $25,000.",
          "Required = 90% × $5,200,000 = $4,680,000. Ratio = $4,400,000 ÷ $4,680,000 = 0.940171.",
          f"Payment = 0.940171 × $500,000 − $25,000 = {m(coins(4400000,5200000,.9,500000,25000))}. The owner bears {m(500000-coins(4400000,5200000,.9,500000,25000))}."],
 interp="A shortfall cuts every partial claim, not just a total loss. That is why F-CORE-34 must reach 100%.",
 rules="CORE-INS-01; F-CORE-34",
 mistakes=["Subtracting the deductible before applying the ratio.", "Testing against market value instead of replacement cost.", "Assuming no penalty because the loss is smaller than the limit."],
 edges="Carried ≥ required → ratio 1, no penalty. Total loss → pays the limit. An agreed-value endorsement suspends the clause for its term.",
 rounding="Keep the ratio at full precision; round the payment to the cent.",
 modules="C9",
 tests=[("Did $4,400,000; RC $5,200,000; 90%; loss $500,000; ded $25,000", m(coins(4400000,5200000,.9,500000,25000))),
        ("Did $1,800,000; RC $2,400,000; 90%; loss $300,000; ded $10,000", m(coins(1800000,2400000,.9,300000,10000))),
        ("Did $2,800,000; RC $4,000,000; 80%; loss $500,000; ded $25,000", m(coins(2800000,4000000,.8,500000,25000)))])

def md(f):
    o = [f"### {f['id']}: {f['name']}", "",
         f"**Purpose.** {f['purpose']}", "",
         f"**Formula.** {f['plain']}", "", "```latex", f['latex'], "```", "",
         f"**Variables and units.** {f['vars'].replace('($/month)','(USD per month)').replace('($/year)','(USD per year)').replace('$/year','USD per year').replace('($)','(USD)').replace('(all ','(all ')}", "", "**Worked example.**", ""]
    o += [f"{i+1}. {s}" for i,s in enumerate(f['example'])]
    o += ["", f"**Interpretation.** {f['interp']}", "",
          f"**Related rules.** {f['rules']}", "", "**Common mistakes.**", ""]
    o += [f"- {s}" for s in f['mistakes']]
    o += ["", f"**Edge cases.** {f['edges']}", "",
          f"**Rounding and day count.** {f['rounding']}", "",
          f"**Modules.** {f['modules']}", "",
          "| Test | Inputs | Expected |", "| --- | --- | --- |"]
    o += [f"| {i+1} | {a} | {b} |" for i,(a,b) in enumerate(f['tests'])]
    return "\n".join(o)

out = [md(f) for f in F]
json.dump(out, open('/home/claude/flib/core.json','w'))
print(len(out))
for f in F:
    print(f['id'], [t[1] for t in f['tests']])
