import json, pathlib
src = open(pathlib.Path(__file__).resolve().parent.parent.parent / "core" / "reference" / "library_source.py").read()
pre, post = src.split("def md(f):")
helpers = pre.split("F = []")[0]
exec(helpers)
F = []
def add(**k): F.append(k)
mdsrc = "def md(f):" + post.split("out = [md(f)")[0]
exec(mdsrc)

def fac(r, n=360):
    i = r/12
    return i/(1-(1+i)**-n)

add(id="F-RES-01", name="Total project cost (TPC)",
 purpose="All-in cost of a flip: purchase plus rehab budget.",
 plain="TPC = purchase price + rehab budget (incl. contingency)",
 latex=r"TPC = Price + Rehab",
 vars="Price (USD); Rehab = budget incl. 10% contingency (USD)",
 example=["$300,000 + $100,000 = $400,000.00."],
 interp="The base for LTC (F-RES-04) and profit margin (F-RES-19).",
 rules="RES-FF-03 (LTC base), RES-FF-06 (10% contingency)",
 mistakes=["Leaving the contingency out of the budget.", "Adding closing costs and points here; the course TPC excludes them (they sit in cash to close, F-RES-09)."],
 edges="Rehab 0 → a bridge with no rehab (RES-BR). Negative inputs invalid.",
 rounding="Round to the cent.",
 modules="R1, R2",
 tests=[("$300,000; $100,000", m(400000)), ("$185,000; $62,500", m(247500)), ("$420,000; $0", m(420000))])

add(id="F-RES-02", name="Loan-to-after-repair value (LTARV)",
 purpose="Total loan against the value after the rehab is done.",
 plain="LTARV = total commitment ÷ after-repair value",
 latex=r"LTARV = \frac{C}{ARV}",
 vars="C = initial advance + rehab holdback (USD); ARV (USD)",
 example=["$340,000 ÷ $520,000 = 65.4%."],
 interp="Checks the exit: the finished house must cover the loan with a cushion.",
 rules="RES-FF-04 (65% Tier 0; 70% Tier 1-3)",
 mistakes=["Using the initial advance instead of the full commitment.", "Accepting an ARV without comparable sales of finished homes."],
 edges="ARV 0 → undefined. ARV below as-is value → flag the appraisal.",
 rounding="Full precision; display one decimal.",
 modules="R1, R2",
 tests=[("$340,000; $520,000", pct(340000/520000,1)), ("$320,000; $520,000", pct(320000/520000,1)), ("$210,000; $300,000", pct(.7,1))])

add(id="F-RES-03", name="Loan-to-as-is value (LTAIV)",
 purpose="Day-one advance against current value.",
 plain="LTAIV = initial advance ÷ as-is value",
 latex=r"LTAIV = \frac{Adv_0}{V_{as\text{-}is}}",
 vars="Adv_0 = initial advance (USD); V_as-is (USD)",
 example=["Maple Run: as-is appraisal $310,000 is above the $300,000 price, so use $300,000 (F-CORE-14). $240,000 ÷ $300,000 = 80.0%."],
 interp="Exposure if the borrower walks away before any work.",
 rules="RES-FF-01, CORE-VAL-01",
 mistakes=["Including the rehab holdback in the numerator.", "Using ARV as the denominator."],
 edges="As-is below price → use the lower (F-CORE-14).",
 rounding="Full precision; display one decimal.",
 modules="R1",
 tests=[("$240,000; $310,000", pct(240000/310000,1)), ("$148,000; $185,000", pct(.8,1)), ("$255,000; $300,000", pct(.85,1))])

add(id="F-RES-04", name="Loan-to-cost (flip)",
 purpose="Total commitment against total project cost.",
 plain="LTC = (initial advance + rehab holdback) ÷ TPC",
 latex=r"LTC = \frac{Adv_0 + HB}{TPC}",
 vars="Adv_0, HB = holdback (USD); TPC (F-RES-01)",
 example=["($240,000 + $100,000) ÷ $400,000 = 85.0%."],
 interp="Borrower skin in the game; caps rise with experience.",
 rules="RES-FF-03 (75% / 80% / 85% / 85% by tier)",
 mistakes=["Using TPC that excludes contingency while the holdback includes it.", "Leaving out the holdback; that gives LTAIV-style leverage, not LTC."],
 edges="TPC 0 → undefined.",
 rounding="Full precision; display one decimal.",
 modules="R1, R2",
 tests=[("$240,000 + $100,000; $400,000", pct(.85,1)), ("$220,000 + $100,000; $400,000", pct(.8,1)), ("$123,125 + $62,500; $247,500", pct(185625/247500,1))])

add(id="F-RES-05", name="Initial advance (purchase)",
 purpose="Day-one loan toward the purchase.",
 plain="Advance = advance rate × min(price, as-is value)",
 latex=r"Adv_0 = a \times \min(Price, V_{as\text{-}is})",
 vars="a = tier advance rate (%); Price, V (USD)",
 example=["80% × min($300,000, $310,000) = $240,000.00."],
 interp="Sets cash to close (F-RES-09).",
 rules="RES-FF-01, -02 (75% / 80% / 85% / 85%)",
 mistakes=["Applying the rate to the higher of price and value.", "Forgetting that F-RES-13 may cut the advance further."],
 edges="Advance may be reduced so the loan fits F-RES-13.",
 rounding="Round to the cent.",
 modules="R1",
 tests=[("Tier 1; $300,000; $310,000", m(240000)), ("Tier 0; $185,000; $180,000", m(.75*180000)), ("Tier 2; $300,000; $295,000", m(.85*295000))])

add(id="F-RES-06", name="Draw percent complete",
 purpose="Share of the rehab budget verified as done.",
 plain="% complete = inspector-verified work in place ÷ rehab budget",
 latex=r"PC = \frac{W_{verified}}{Rehab}",
 vars="W_verified (USD); Rehab (USD)",
 example=["$60,000 ÷ $100,000 = 60.0%."],
 interp="Drives draws (F-RES-18) and extension tests (75% complete).",
 rules="RES-FF-09 (draws after inspection), RES-FF-11 and RES-GU-09 (75% for extensions)",
 mistakes=["Using the borrower's invoices instead of the inspection.", "Counting materials on site but not installed [CONFIRM]."],
 edges="Over 100% → budget overrun; borrower funds the excess.",
 rounding="Display one decimal.",
 modules="R2",
 tests=[("$60,000; $100,000", pct(.6,1)), ("$46,875; $62,500", pct(.75,1)), ("$105,000; $100,000", f"{pct(1.05,1)} (overrun)")])

def pitia(L, r, tax, ins, hoa, n=360): return L*fac(r,n) + tax + ins + hoa
add(id="F-RES-07", name="Residential DSCR",
 purpose="Rental coverage on 1-4 unit and 5-10 unit DSCR loans.",
 plain="DSCR = qualifying monthly rent ÷ monthly PITIA (amortizing P&I)",
 latex=r"DSCR_{res} = \frac{Rent_q}{PITIA}",
 vars="Rent_q = F-RES-23 (USD per month); PITIA = F-RES-08 (USD per month)",
 example=["$2,300 ÷ $1,800.60 = 1.28x."],
 interp="Uses gross rent, not NOI (unlike F-CORE-11).",
 rules="RES-DSCR-01, -02 (1.00x; 1.10x cash-out), RES-STR-05 (1.15x); also small multifamily DSCR (5-10 units)",
 mistakes=["Using the IO payment on an IO loan; policy qualifies on amortizing PITIA (RES-DSCR-07).", "Using market rent when the lease is lower."],
 edges="Vacant property → market rent with LTV cut (RES-DSCR-04). PITIA 0 → undefined.",
 rounding="Full precision; display two decimals with x.",
 modules="R5",
 tests=[("$2,300; $1,800.60", xx(2300/1800.60)), ("$2,250; $2,262.22", "0.9946 → displays 0.99x; fails 1.00x"), ("$3,075; $2,500", xx(3075/2500))])

add(id="F-RES-08", name="PITIA",
 purpose="Monthly housing cost for DSCR.",
 plain="PITIA = principal and interest + taxes + insurance + HOA (monthly)",
 latex=r"PITIA = P\&I + T + I + HOA",
 vars="All USD per month; P&I from F-CORE-02 on 30-year amortization",
 example=["$1,330.60 + $300 + $120 + $50 = $1,800.60."],
 interp="The denominator of F-RES-07.",
 rules="RES-DSCR-01, -07, -10",
 mistakes=["Leaving out flood insurance or HOA dues.", "Using the IO payment."],
 edges="No HOA → $0. Escrow cushion is not part of PITIA.",
 rounding="Round P&I to the cent, then add.",
 modules="R5",
 tests=[("$200,000 at 7.000%; $300; $120; $50", m(c(200000*fac(.07))+470)), ("$225,000 at 7.750%; $350; $120; $0", m(c(225000*fac(.0775))+470)), ("$300,000 at 7.500%; $400; $150; $75", m(c(300000*fac(.075))+625))])

add(id="F-RES-09", name="Cash to close (flip purchase)",
 purpose="Borrower cash needed at closing.",
 plain="Cash to close = price + closing costs + points − initial advance",
 latex=r"CTC = Price + CC + Pts - Adv_0",
 vars="All USD",
 example=["$300,000 + $9,000 + $6,800 − $240,000 = $75,800.00."],
 interp="Must be sourced and seasoned; subtracted in F-CORE-24.",
 rules="CORE-BOR-11, -12; RES-FF-07 (Tier 0 interest escrow adds to cash to close)",
 mistakes=["Leaving out points (F-CORE-06).", "Forgetting the Tier 0 three-month interest escrow (RES-FF-07)."],
 edges="Negative → cash back at closing: not allowed on a purchase [CONFIRM].",
 rounding="Round to the cent.",
 modules="R1, R4",
 tests=[("$300,000; $9,000; $6,800; $240,000", m(75800)), ("$185,000; $5,500; $4,640.63; $123,125", m(185000+5500+4640.63-123125)), ("$400,000; $12,000; $8,500; $320,000", m(100500))])

add(id="F-RES-10", name="Flip profit",
 purpose="Projected borrower profit on sale.",
 plain="Profit = ARV − selling costs − price − rehab − closing − points − interest",
 latex=r"\Pi = ARV - SC - Price - Rehab - CC - Pts - Int",
 vars="All USD; SC usually 6% of ARV",
 example=["$520,000 − $31,200 − $300,000 − $100,000 − $9,000 − $6,800 − $18,700 = $54,300.00."],
 interp="The borrower's cushion; too thin and the exit fails.",
 rules="RES-FF-10 (profit ≥ 10% of TPC, F-RES-19)",
 mistakes=["Leaving out carry interest.", "Using list price instead of appraised ARV."],
 edges="Negative profit → decline.",
 rounding="Round to the cent.",
 modules="R1, R2",
 tests=[("Bible flip", m(54300)), ("ARV $300,000; SC 6%; $185,000; $62,500; $5,500; $4,640.63; $13,000", m(300000-18000-185000-62500-5500-4640.63-13000)), ("ARV $480,000; SC 6%; $320,000; $110,000; $9,000; $8,500; $22,000", m(480000-28800-320000-110000-9000-8500-22000))])

add(id="F-RES-11", name="Release price (portfolio)",
 purpose="Payment needed to release one property from a blanket loan.",
 plain="Release price = allocated loan amount × release premium",
 latex=r"RP = ALA \times p",
 vars="ALA (USD); p = premium (115%)",
 example=["$150,000 × 115% = $172,500.00."],
 interp="Protects the remaining collateral pool.",
 rules="RES-PF-05",
 mistakes=["Using sale price instead of allocated loan amount.", "Skipping the re-test of the remaining pool (F-RES-14)."],
 edges="Release that breaks RES-PF-02 or -03 → refuse or require paydown.",
 rounding="Round to the cent.",
 modules="R5",
 tests=[("$150,000; 115%", m(172500)), ("$212,400; 115%", m(212400*1.15)), ("$98,000; 115%", m(98000*1.15))])

add(id="F-RES-12", name="Cash-out proceeds",
 purpose="Net cash to the borrower on a refinance.",
 plain="Cash-out = new loan − payoff − closing costs",
 latex=r"CO = L_{new} - Payoff - CC",
 vars="All USD",
 example=["$260,000 − $200,000 − $7,000 = $53,000.00."],
 interp="Tested against the cash-out cap.",
 rules="RES-DSCR-06 ($500,000 cap), RES-DSCR-08 (cash-out does not count as reserves)",
 mistakes=["Counting cash-out as reserves.", "Ignoring the payoff's accrued interest (F-CORE-32)."],
 edges="Negative → borrower brings cash: a rate-term refinance.",
 rounding="Round to the cent.",
 modules="R5",
 tests=[("$260,000; $200,000; $7,000", m(53000)), ("$900,000; $350,000; $14,000", f"{m(536000)} (over $500,000 cap)"), ("$180,000; $185,000; $4,000", m(-9000))])

def flip(tpc, arv, price, asis, rehab, c1, c2, c3):
    return min(c1*tpc, c2*arv, c3*min(price,asis)+rehab)
add(id="F-RES-13", name="Fix-and-flip maximum loan",
 purpose="Largest flip loan under all three tests.",
 plain="Max = min(LTC cap × TPC, LTARV cap × ARV, purchase cap × min(price, as-is) + rehab)",
 latex=r"L = \min(c_{LTC} TPC,\ c_{ARV} ARV,\ c_{P}\min(P,V) + R)",
 vars="Caps by tier (RES-FF-01, -03, -04); all amounts USD",
 example=["Tier 1: min($320,000; $364,000; $340,000) = $320,000.00 (LTC binds)."],
 interp="Then initial advance = max loan − rehab holdback.",
 rules="RES-FF-01, -02, -03, -04",
 mistakes=["Skipping the purchase test.", "Applying the Tier 2 caps to a Tier 1 borrower."],
 edges="Rehab 0 → product is RES-BR, not RES-FF.",
 rounding="Round to the cent; then down to policy increments.",
 modules="R1",
 tests=[("Tier 1 Bible flip", m(flip(400000,520000,300000,310000,100000,.8,.7,.8))), ("Tier 2 Bible flip", m(flip(400000,520000,300000,310000,100000,.85,.7,.85))),
        ("Tier 0: TPC $247,500; ARV $300,000; price $185,000; as-is $180,000; rehab $62,500", m(flip(247500,300000,185000,180000,62500,.75,.65,.75)))])

add(id="F-RES-14", name="Portfolio DSCR",
 purpose="Coverage across all properties in a blanket loan.",
 plain="Portfolio DSCR = Σ qualifying rent ÷ Σ PITIA",
 latex=r"DSCR_{pf} = \frac{\sum Rent_q}{\sum PITIA}",
 vars="Sums across properties (USD per month)",
 example=["$13,800 ÷ $11,200 = 1.23x."],
 interp="Pool test; each house must also be ≥ 0.80x.",
 rules="RES-PF-03 (1.20x pool; 0.80x per property)",
 mistakes=["Averaging property DSCRs instead of summing rent and PITIA.", "Skipping the 0.80x single-property floor."],
 edges="A release changes both sums; re-test.",
 rounding="Full precision; two decimals with x.",
 modules="R6",
 tests=[("$13,800; $11,200", xx(13800/11200)), ("$12,100; $9,600", xx(12100/9600)), ("$9,000; $7,560", "1.1905 → 1.19x: fails 1.20x")])

add(id="F-RES-15", name="STR qualifying monthly rent",
 purpose="Converts short-term rental revenue into qualifying rent.",
 plain="Rent_q = 75% × min(AirDNA projection, 12-month platform revenue) ÷ 12",
 latex=r"Rent_{STR} = \frac{0.75 \times \min(P, H)}{12}",
 vars="P = projection (USD per year); H = trailing history (USD per year)",
 example=["75% × $49,200 ÷ 12 = $3,075.00."],
 interp="Feeds F-RES-07 at a 1.15x minimum.",
 rules="RES-STR-04, -05",
 mistakes=["Using gross bookings before platform fees.", "Using the higher of the two sources."],
 edges="No history → projection only.",
 rounding="Round to the cent.",
 modules="R5",
 tests=[("$54,000; $49,200", m(.75*49200/12)), ("$60,000; none", m(.75*60000/12)), ("$41,000; $46,500", m(.75*41000/12))])

def gures(C_, r, mo): return C_*r/12*mo*.6
add(id="F-RES-16", name="Ground-up interest reserve",
 purpose="Interest reserve for a construction draw schedule.",
 plain="Reserve = commitment × rate ÷ 12 × months × 60% average outstanding",
 latex=r"IR_{GU} = C \times \frac{r}{12} \times m \times 0.60",
 vars="C (USD); r (%); m = term (months)",
 example=["$600,000 × 11.50% ÷ 12 × 18 × 0.60 = $62,100.00."],
 interp="Counted inside TPC (RES-GU-06).",
 rules="RES-GU-06; D-MF-11 (60%)",
 mistakes=["Using 50% average outstanding (superseded).", "Leaving the reserve out of TPC."],
 edges="Front-loaded land draw → consider more than 60% [CONFIRM].",
 rounding="Underwriting estimate on nominal months; billing later accrues Actual/360. Round to the cent.",
 modules="R3",
 tests=[("$600,000; 11.500%; 18 months", m(gures(600000,.115,18))), ("$450,000; 12.250%; 12 months", m(gures(450000,.1225,12))), ("$800,000; 11.250%; 18 months", m(gures(800000,.1125,18)))])

def dscrloan(rent, d, tia, r): return (rent/d - tia)/fac(r)
add(id="F-RES-17", name="Maximum loan by DSCR (residential)",
 purpose="Largest loan whose PITIA meets the minimum DSCR.",
 plain="Max loan = (rent ÷ DSCR min − taxes, insurance, HOA) ÷ monthly P&I factor",
 latex=r"L = \frac{Rent_q / DSCR_{min} - TIA}{f_{P\&I}}",
 vars="TIA (USD per month); f = monthly P&I per dollar (30-year)",
 example=["($2,250 ÷ 1.00 − $470) ÷ 0.0071641 = $248,460 (7.750%)."],
 interp="Compare with the LTV limit; the lower binds (F-CORE-19).",
 rules="RES-DSCR-02, -03",
 mistakes=["Forgetting to subtract TIA.", "Using an IO factor."],
 edges="Rent ÷ DSCR ≤ TIA → $0.",
 rounding="Full precision; round down to policy increments.",
 modules="R5",
 tests=[("$2,250; 1.00x; $470; 7.750%", m(dscrloan(2250,1,470,.0775))), ("$2,250; 1.10x; $470; 7.750%", m(dscrloan(2250,1.1,470,.0775))), ("$3,075; 1.15x; $550; 7.500%", m(dscrloan(3075,1.15,550,.075)))])

# SUGGESTED
def draw(budget, pc, prior, retain=.10):
    eligible = min(pc,1)*budget
    cap = budget*(1-retain) if pc < 1 else budget
    return max(min(eligible, cap) - prior, 0)
add(id="F-RES-18", name="Draw amount (SUGGESTED)",
 purpose="Holdback released on a draw request.",
 plain="Draw = min(% complete × holdback, 90% of holdback until completion) − prior draws",
 latex=r"D = \min(PC \cdot HB,\ 0.90\,HB) - D_{prior}",
 vars="PC (F-RES-06); HB = rehab holdback (USD); D_prior (USD)",
 example=["min(60% × $100,000, $90,000) − $25,000 = $35,000.00."],
 interp="Keeps 10% back until the job is finished.",
 rules="RES-FF-09 (inspection; final 10% at completion)",
 mistakes=["Releasing the final 10% before the completion inspection.", "Paying against invoices, not verified work."],
 edges="At 100% complete the final 10% is released. Result below 0 → $0.",
 rounding="Round to the cent.",
 modules="R2",
 tests=[("60%; $100,000; prior $25,000", m(draw(100000,.6,25000))), ("95%; $100,000; prior $60,000", m(draw(100000,.95,60000))), ("100%; $100,000; prior $90,000", m(draw(100000,1,90000)))])

add(id="F-RES-19", name="Flip profit margin (SUGGESTED)",
 purpose="Profit as a share of total project cost.",
 plain="Margin = flip profit (F-RES-10) ÷ TPC",
 latex=r"PM = \frac{\Pi}{TPC}",
 vars="Π, TPC (USD)",
 example=["$54,300 ÷ $400,000 = 13.6%."],
 interp="Exit test: at least 10%.",
 rules="RES-FF-10",
 mistakes=["Dividing by ARV.", "Comparing a rounded 9.96% as 10.0% (full precision fails it)."],
 edges="Negative profit → negative margin, fails.",
 rounding="Full precision; display one decimal.",
 modules="R1, R2",
 tests=[("$54,300; $400,000", pct(54300/400000,1)), ("$11,359.37; $247,500", f"{pct(11359.37/247500,1)}: fails 10%"), ("$39,900; $400,000", "9.975% → shows 10.0% but FAILS 10%")])

def gumax(tpc, ltc, acv): return min(ltc*tpc, .7*acv)
add(id="F-RES-20", name="Ground-up maximum loan (SUGGESTED)",
 purpose="Largest construction loan under LTC and as-completed value.",
 plain="Max = min(LTC cap × TPC incl. reserve, 70% × as-completed value)",
 latex=r"L_{GU} = \min(c_{LTC}\,TPC,\ 0.70\,V_{AC})",
 vars="c_LTC = 80% (2-4 builds) or 85% (5+); TPC, V_AC (USD)",
 example=["min(80% × $700,000, 70% × $850,000) = min($560,000, $595,000) = $560,000.00."],
 interp="Borrower funds the rest, equity first (F-RES-22).",
 rules="RES-GU-02, RES-GU-03, RES-GU-06",
 mistakes=["Leaving the interest reserve out of TPC.", "Using the 85% cap for a 3-build sponsor."],
 edges="Under 2 builds → ineligible except as a committee exception (RES-GU-01).",
 rounding="Round down to policy increments.",
 modules="R3",
 tests=[("3 builds; TPC $700,000; V_AC $850,000", m(gumax(700000,.8,850000))), ("6 builds; TPC $700,000; V_AC $850,000", m(gumax(700000,.85,850000))), ("2 builds; TPC $900,000; V_AC $980,000", m(gumax(900000,.8,980000)))])

add(id="F-RES-21", name="Land advance (SUGGESTED)",
 purpose="Part of the ground-up loan that funds the lot.",
 plain="Land advance = 65% (permitted) or 50% (unpermitted) × min(land value, price)",
 latex=r"A_{land} = a \times \min(V_{land}, P_{land})",
 vars="a = 65% or 50%; V_land, P_land (USD)",
 example=["65% × min($150,000, $140,000) = $91,000.00."],
 interp="No construction draw until permits are issued.",
 rules="RES-GU-04",
 mistakes=["Using the higher of value and price.", "Using 65% before permits are in hand."],
 edges="Land owned free and clear → its equity counts toward the 15% (F-RES-22) [CONFIRM].",
 rounding="Round to the cent.",
 modules="R3",
 tests=[("Permitted; $150,000; $140,000", m(.65*140000)), ("Unpermitted; $150,000; $140,000", m(.5*140000)), ("Permitted; $95,000; $110,000", m(.65*95000))])

add(id="F-RES-22", name="Equity-first requirement (SUGGESTED)",
 purpose="Borrower equity that must be spent or escrowed before draws.",
 plain="Required equity = max(15% × TPC, TPC − loan)",
 latex=r"E = \max(0.15\,TPC,\ TPC - L)",
 vars="TPC, L (USD)",
 example=["max(15% × $700,000, $700,000 − $560,000) = max($105,000, $140,000) = $140,000.00."],
 interp="Lender money goes in last.",
 rules="RES-GU-07",
 mistakes=["Counting soft costs paid before application without receipts.", "Allowing draws before equity is in."],
 edges="Loan at 85% LTC → equity is exactly 15%.",
 rounding="Round to the cent.",
 modules="R3",
 tests=[("TPC $700,000; L $560,000", m(140000)), ("TPC $700,000; L $595,000", m(105000)), ("TPC $900,000; L $686,000", m(214000))])

add(id="F-RES-23", name="Qualifying rent (SUGGESTED)",
 purpose="Monthly rent used in residential DSCR.",
 plain="Rent_q = min(in-place lease rent, appraiser's market rent); vacant → market rent",
 latex=r"Rent_q = \min(Rent_{lease},\ Rent_{mkt})",
 vars="USD per month",
 example=["min($2,400 lease, $2,300 market) = $2,300.00."],
 interp="Conservative: no credit for above-market leases.",
 rules="RES-DSCR-01, -04",
 mistakes=["Using the higher lease rent.", "Using a lease under 12 months without checking market rent."],
 edges="Vacant refinance → market rent and max 70% LTV (RES-DSCR-04).",
 rounding="Round to the cent.",
 modules="R5",
 tests=[("$2,400; $2,300", m(2300)), ("$2,150; $2,300", m(2150)), ("vacant; $2,250", m(2250))])

def exitd(rent, L, r, tia): return rent/(L*fac(r)+tia)
add(id="F-RES-24", name="Rental exit DSCR (SUGGESTED)",
 purpose="Tests whether a bridge loan can refinance into a DSCR loan.",
 plain="Exit DSCR = projected rent ÷ PITIA at (current DSCR rate + 0.50%)",
 latex=r"DSCR_{exit} = \frac{Rent_q}{L \cdot f(r_{DSCR}+0.5\%) + TIA}",
 vars="L = bridge payoff (USD); f = monthly P&I factor; TIA (USD per month)",
 example=[f"$2,250 ÷ ($225,000 × f(8.250%) + $470) = {xx(exitd(2250,225000,.0825,470))}."],
 interp="At least 1.10x for the rental exit.",
 rules="RES-BR-04",
 mistakes=["Testing at today's rate without the 0.50% buffer.", "Using the bridge's IO payment."],
 edges="Below 1.10x → paydown or decline.",
 rounding="Full precision; two decimals with x.",
 modules="R4, R5",
 tests=[("$2,250; $225,000; 7.750% + 0.50%; $470", xx(exitd(2250,225000,.0825,470))+": fails 1.10x"), ("$2,650; $225,000; 7.750% + 0.50%; $470", xx(exitd(2650,225000,.0825,470))), ("$3,100; $300,000; 7.500% + 0.50%; $550", xx(exitd(3100,300000,.08,550)))])

MOD={'01':'R2','02':'R2','03':'R2','04':'R2','05':'R2','06':'R3','07':'R4','08':'R4','09':'R2, R6','10':'R2','11':'R5','12':'R4','13':'R2, R6','14':'R5','15':'R5','16':'R3','17':'R4','18':'R3','19':'R2','20':'R3','21':'R3','22':'R3','23':'R4','24':'R2, R4'}
for f in F: f['modules']=MOD[f['id'][-2:]]
out = [md(f) for f in F]
for f in F: print(f['id'], [t[1] for t in f['tests']])

import re
idx="## Residential formulas (F-RES)\n\n| ID | Name | Status | Main rules |\n| --- | --- | --- | --- |\n"
for f in F:
    st="SUGGESTED" if "SUGGESTED" in f['name'] else "REQUIRED"
    nm=f['name'].replace(" (SUGGESTED)","")
    rl=re.sub(r"\s*\([^)]*\)","",f['rules']).split(";")[0].strip()
    idx+=f"| {f['id']} | {nm} | {st} | {rl} |\n"
chunks=[idx+"\n"+"\n\n".join(out[0:8]), "\n\n".join(out[8:16]), "\n\n".join(out[16:24])+"\n\n**Residential library complete: 17 REQUIRED and 7 SUGGESTED formulas, 72 test cases. Say \"continue\" for the Multifamily library (F-MF).**"]
for i,c in enumerate(chunks): open(f'rchunk{i}.json','w').write(json.dumps(c))
print([len(c) for c in chunks]); print(idx)
