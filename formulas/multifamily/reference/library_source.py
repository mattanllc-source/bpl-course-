import json, pathlib, re
src = open(pathlib.Path(__file__).resolve().parent.parent.parent / "core" / "reference" / "library_source.py").read()
pre, post = src.split("def md(f):")
exec(pre.split("F = []")[0])
F = []
def add(**k): F.append(k)
exec("def md(f):" + post.split("out = [md(f)")[0])

def fac(r, n=360):
    i = r/12
    return i/(1-(1+i)**-n)
def ads(L, r):  # monthly P&I rounded to the cent, x 12 (F-CORE-03)
    return float(c(L*fac(r)))*12
def K(r): return fac(r)*12
def p3(x): return pct(x, 3)

# ---------- REQUIRED 01-08 (Course Bible glossary) ----------
add(id="F-MF-01", name="Physical occupancy",
 purpose="Share of units with a tenant in place on the rent roll date.",
 plain="Physical occupancy = occupied units ÷ total units",
 latex=r"Occ_{phys} = \frac{U_{occ}}{U_{total}}",
 vars="U_occ = occupied units (count); U_total = all units, including down and model units (count)",
 example=["Cedar Court rent roll: 46 occupied of 50 units.", "46 ÷ 50 = 0.92 = 92.0%."],
 interp="Entry and stability gate for most multifamily products: 75% for value-add bridge, 90% for stabilized bridge and term, 50% for lease-up.",
 rules="MF-BR-01 (75%); MF-SB-01 and MF-TRM-01 (90% for 3 months); MF-LU-01 (50%); MF-DSCR-01 (at most 2 vacant)",
 mistakes=["Dropping down or model units from the denominator, which overstates occupancy.", "Counting signed leases with future move-in dates as occupied (that is leased, not occupied).", "Testing one month when the rule needs 3 months in a row."],
 edges="Total units 0 → undefined. 100% vacancy → 0.0%. Units occupied part of a month count as occupied on the rent roll date only.",
 rounding="Full precision for tests; display one decimal.",
 modules="M2, M3",
 tests=[("46 occupied; 50 units", pct(46/50,1)), ("0 occupied; 24 units", pct(0,1)+" (fails every entry test)"), ("38 occupied; 40 units", pct(38/40,1))])

add(id="F-MF-02", name="Economic occupancy",
 purpose="Share of gross potential rent actually collected.",
 plain="Economic occupancy = rent collected ÷ GPR",
 latex=r"Occ_{econ} = \frac{Collections}{GPR}",
 vars="Collections = rent received over the period (USD); GPR = F-CORE-07 for the same period (USD)",
 example=["Cedar Court: collections $702,000; GPR $780,000.", "$702,000 ÷ $780,000 = 0.90 = 90.0%."],
 interp="The gap to physical occupancy shows concessions, bad debt and loss-to-lease. A wide gap means the rent roll overstates income.",
 rules="MF-GEN-05 (vacancy at the greater of actual, market or 5%)",
 mistakes=["Using a different period for collections and GPR.", "Including other income (RUBS, fees) in collections.", "Treating physical occupancy as if it were economic occupancy."],
 edges="GPR 0 → undefined. 100% vacancy → 0.0%. Partial year: annualize both figures over the same months, or compare like months only.",
 rounding="Full precision; display one decimal.",
 modules="M2",
 tests=[("$702,000; $780,000", pct(.9,1)), ("$0; $360,000", pct(0,1)), ("$1,104,000; $1,200,000", pct(1104000/1200000,1))])

add(id="F-MF-03", name="Loss-to-lease",
 purpose="Gap between market rent and in-place lease rent, as a share of market.",
 plain="Loss-to-lease = (market GPR − in-place rent) ÷ market GPR",
 latex=r"LTL = \frac{GPR_{mkt} - Rent_{inplace}}{GPR_{mkt}}",
 vars="GPR_mkt = all units at market rent (USD per year); Rent_inplace = all units at current lease rent, vacant units at market (USD per year)",
 example=["Cedar Court: market GPR $780,000; in-place $741,000.", "($780,000 − $741,000) ÷ $780,000 = $39,000 ÷ $780,000 = 5.0%."],
 interp="Shows how much rent a value-add plan can capture by re-leasing. It is upside, never underwritten day-one income.",
 rules="MF-GEN-05 (underwrite in-place rents); MF-BR-08 (stabilized figures for the exit only)",
 mistakes=["Underwriting market rent instead of in-place rent.", "Leaving vacant units out of in-place rent, which mixes vacancy into loss-to-lease."],
 edges="Negative result = gain-to-lease (in-place above market): a warning that rents may fall at renewal. Market GPR 0 → undefined.",
 rounding="Full precision; display one decimal.",
 modules="M2, M4",
 tests=[("$780,000; $741,000", pct(39000/780000,1)), ("$600,000; $618,000", pct(-18000/600000,1).replace("-","−")+" (gain-to-lease)"), ("$960,000; $921,600", pct(38400/960000,1))])

add(id="F-MF-04", name="Expense ratio",
 purpose="Operating expenses as a share of EGI.",
 plain="Expense ratio = OpEx ÷ EGI",
 latex=r"ER = \frac{OpEx}{EGI}",
 vars="OpEx = underwritten operating expenses, before reserves (USD per year); EGI = F-CORE-09 (USD per year)",
 example=["Cedar Court: OpEx $310,000; EGI $720,000.", "$310,000 ÷ $720,000 = 0.430556 = 43.1%."],
 interp="A sanity check on the T-12. A ratio far below similar properties suggests missing expenses.",
 rules="MF-GEN-06 (greater of T-12 and appraiser; management at least 3% of EGI)",
 mistakes=["Including replacement reserves or debt service in OpEx.", "Comparing ratios across properties where tenants pay different utilities."],
 edges="EGI 0 (100% vacancy) → undefined; report OpEx per unit (F-MF-05) instead. Ratio above 100% means negative NOI.",
 rounding="Full precision; display one decimal.",
 modules="M2",
 tests=[("$310,000; $720,000", pct(310000/720000,1)), ("$51,300; $114,000", pct(51300/114000,1)), ("$420,000; $900,000", pct(420000/900000,1))])

add(id="F-MF-05", name="Expense per unit",
 purpose="Annual operating expenses per apartment unit.",
 plain="Expense per unit = OpEx ÷ units",
 latex=r"OpEx_{unit} = \frac{OpEx}{U_{total}}",
 vars="OpEx (USD per year); U_total (count)",
 example=["Cedar Court: $310,000 ÷ 50 = $6,200.00 per unit per year."],
 interp="Compared with the appraiser's survey of similar buildings. Unlike the expense ratio, it still works when income is low.",
 rules="MF-GEN-06",
 mistakes=["Dividing by occupied units instead of total units.", "Mixing a partial-year T-12 with a full-year comparison."],
 edges="Units 0 → undefined. 100% vacancy still gives a valid result. Partial year: annualize OpEx first, and watch seasonal items such as heating.",
 rounding="Round to the cent.",
 modules="M2",
 tests=[("$310,000; 50 units", m(6200)), ("$51,300; 8 units", m(51300/8)), ("$420,000; 72 units", m(420000/72))])

add(id="F-MF-06", name="Replacement reserves",
 purpose="Annual allowance for roofs, HVAC and other capital items, deducted before sizing.",
 plain="Reserves = units × $300 per unit per year",
 latex=r"Res = U_{total} \times 300",
 vars="U_total (count); 300 = policy reserve (USD per unit per year)",
 example=["Cedar Court: 50 × $300 = $15,000.00 per year.", "Monthly escrow: $15,000 ÷ 12 = $1,250.00."],
 interp="Reserves turn NOI into NCF (F-MF-09). They are also collected monthly as an escrow.",
 rules="MF-GEN-06 ($300 per unit); MF-BR-13 (escrow)",
 mistakes=["Using a lower reserve because the T-12 shows little capital spending.", "Deducting reserves twice: once inside OpEx and again in NCF."],
 edges="An appraiser or property condition report above $300 per unit governs (use the greater). Partial year: escrow by month.",
 rounding="Round to the cent.",
 modules="M3",
 tests=[("50 units", m(15000)), ("8 units", m(2400)), ("72 units", m(21600))])

add(id="F-MF-07", name="Loan per unit",
 purpose="Loan amount divided by unit count; a quick leverage check.",
 plain="Loan per unit = loan ÷ units",
 latex=r"L_{unit} = \frac{L}{U_{total}}",
 vars="L = loan; use the fully funded commitment for bridge loans (USD); U_total (count)",
 example=["Bible example: $6,000,000 ÷ 50 = $120,000.00.", "Cedar Court bridge: $5,140,000 ÷ 50 = $102,800.00."],
 interp="Compared with recent sales per unit and replacement cost. A loan per unit near either is a warning.",
 rules="MF-GEN-03 (value at least $75,000 per unit; see F-MF-26)",
 mistakes=["Using the initial funded amount on a bridge loan with future funding.", "Comparing across markets without adjusting for unit size."],
 edges="Units 0 → undefined.",
 rounding="Round to the cent.",
 modules="M3",
 tests=[("$6,000,000; 50 units", m(120000)), ("$5,140,000; 50 units", m(102800)), ("$840,000; 8 units", m(105000))])

add(id="F-MF-08", name="Return on cost",
 purpose="Stabilized NOI as a share of all-in cost; tests whether the plan creates value.",
 plain="Return on cost = stabilized NOI ÷ total cost",
 latex=r"RoC = \frac{NOI_{stab}}{Cost_{total}}",
 vars="NOI_stab (USD per year); Cost_total = price + capex + closing costs (USD)",
 example=["Bible example: $520,000 ÷ $8,000,000 = 6.50%.", "Cedar Court: stabilized NCF $560,000 + reserves $15,000 = NOI $575,000.", "$575,000 ÷ $7,200,000 = 7.99%."],
 interp="If return on cost is not clearly above the market cap rate, the plan adds little value and the exit is at risk.",
 rules="MF-BR-01 (light value-add); MF-BR-08 (exit test)",
 mistakes=["Using NCF on one side and a cap rate built on NOI on the other.", "Leaving closing costs or carry out of total cost."],
 edges="Negative NOI → negative return: decline. Cost 0 → undefined.",
 rounding="Full precision; display two decimals.",
 modules="M4",
 tests=[("$520,000; $8,000,000", pct(.065,2)), ("$575,000; $7,200,000", pct(575000/7200000,2)), ("$410,000; $6,200,000", pct(410000/6200000,2)+" (going-in, before the plan)")])

# ---------- REQUIRED 09-16 (Model Credit Policy) ----------
add(id="F-MF-09", name="Net cash flow (NCF)",
 purpose="Multifamily sizing base: NOI after replacement reserves.",
 plain="NCF = EGI − OpEx − replacement reserves",
 latex=r"NCF = EGI - OpEx - Res",
 vars="EGI (F-CORE-09), OpEx, Res (F-MF-06), all USD per year",
 example=["Cedar Court: NOI = $720,000 − $310,000 = $410,000.", "Reserves = 50 × $300 = $15,000.", "NCF = $410,000 − $15,000 = $395,000.00."],
 interp="Every multifamily coverage and debt-yield test uses NCF, except the 5-10 unit DSCR loan (F-RES-07).",
 rules="MF-GEN-05, MF-GEN-06, MF-GEN-11",
 mistakes=["Sizing on NOI and forgetting reserves.", "Using pro forma income instead of in-place income (MF-GEN-05)."],
 edges="100% vacancy → NCF is minus OpEx and reserves: negative, so every test fails. Partial year: annualize before reserves.",
 rounding="Round to the cent.",
 modules="M2, M3",
 tests=[("EGI $720,000; OpEx $310,000; 50 units", m(395000)), ("EGI $114,000; OpEx $51,300; 8 units", m(60300)), ("EGI $0; OpEx $120,000; 20 units", m(-126000))])

def t10(n,L,r):
    a=ads(L,r); return f"ADS {m(a)}; {xx(n/a)}"
add(id="F-MF-10", name="Multifamily DSCR (amortizing)",
 purpose="Coverage of amortizing debt service by NCF, for term, stabilized and exit tests.",
 plain="DSCR = NCF ÷ annual debt service; ADS = monthly P&I (F-CORE-02, 30 years) × 12",
 latex=r"DSCR_{MF} = \frac{NCF}{12 \times PMT(L, r, 360)}",
 vars="NCF (USD per year); L (USD); r = note rate, or take-out rate for exit tests (percent per year)",
 example=[f"Cedar Court bridge: L $4,340,000 at 7.000%, 30 years. Monthly P&I {m(4340000*fac(.07))}.", f"ADS = {m(4340000*fac(.07))} × 12 = {m(ads(4340000,.07))}.", f"DSCR = $395,000 ÷ {m(ads(4340000,.07))} = {xx(395000/ads(4340000,.07))}."],
 interp="Minimum 1.25x for term loans (1.35x outside the top 50 metros) and for exit tests.",
 rules="MF-TRM-02; MF-BR-08; MF-LU-03; MF-CON-02; MF-DSCR-03 (NCF warning check)",
 mistakes=["Using the bridge's interest-only payment (that is F-MF-12).", "Using the rounded constant 7.9836% instead of the payment, which moves ADS by a few dollars.", "Rounding DSCR to 1.25x before comparing with 1.25x."],
 edges="NCF negative → negative DSCR: fails. Loan 0 → undefined. Interest-only term loans (MF-TRM-05) still test on 30-year amortization.",
 rounding="Payment rounded to the cent, then × 12; DSCR at full precision; display two decimals with x.",
 modules="M3, M4, M5",
 tests=[("NCF $395,000; $4,340,000; 7.000%", t10(395000,4340000,.07)), ("NCF $60,300; $840,000; 7.750%", t10(60300,840000,.0775)), ("NCF $560,000; $5,472,000; 7.250%", t10(560000,5472000,.0725)+" (1.2502x unrounded: passes)")])

add(id="F-MF-11", name="Debt yield on NCF",
 purpose="NCF as a share of the loan; a rate-free leverage test.",
 plain="Debt yield = NCF ÷ loan",
 latex=r"DY = \frac{NCF}{L}",
 vars="NCF (USD per year); L = funded loan for as-is tests, fully funded for stabilized tests (USD)",
 example=["Cedar Court as-is: $395,000 ÷ $4,340,000 = 9.10%.", "Stabilized: $560,000 ÷ $5,140,000 = 10.89%."],
 interp="Floors: 7.0% as-is and 8.5% stabilized for value-add bridge; 7.5% to extend; 8.0% for stabilized bridge and term.",
 rules="MF-BR-05, MF-BR-06, MF-BR-11, MF-SB-03, MF-TRM-04, MF-LU-03, MF-CON-02",
 mistakes=["Using NOI (F-CORE-16) instead of NCF; multifamily uses the stricter NCF base.", "Pairing stabilized NCF with the funded loan instead of the fully funded loan."],
 edges="Negative NCF → negative yield: fails. Loan 0 → undefined.",
 rounding="Full precision; display two decimals.",
 modules="M3, M4",
 tests=[("$395,000; $4,340,000", pct(395000/4340000,2)), ("$560,000; $5,140,000", pct(560000/5140000,2)), ("$560,000; $5,472,000", pct(560000/5472000,2))])

def cov(n,L,note,cap): r=max(note,cap); return f"{p3(r)} used; {xx(n/(L*r))}"
add(id="F-MF-12", name="In-place interest coverage (bridge)",
 purpose="Coverage of a floating-rate bridge loan's interest by today's NCF.",
 plain="Coverage = NCF ÷ (funded loan × max(note rate, cap strike + spread))",
 latex=r"IC = \frac{NCF}{L_{funded} \times \max(r_{note},\ K_{cap} + s)}",
 vars="NCF (USD per year); L_funded (USD); r_note, K_cap, s (percent per year)",
 example=["Cedar Court: funded $4,340,000; note rate 8.000% (F-MF-24); cap strike 4.25% + spread 4.00% (3.75% base + 0.25% leverage adjuster) = 8.250%.", "Higher rate = 8.250%. Interest = $4,340,000 × 8.250% = $358,050.", "Coverage = $395,000 ÷ $358,050 = 1.10x."],
 interp="Below 1.00x, fund a 12-month interest reserve (F-MF-21). Stabilized bridges need 1.05x.",
 rules="MF-BR-07, MF-BR-09, MF-SB-03",
 mistakes=["Testing at today's rate only, ignoring the cap strike.", "Using fully funded instead of funded loan.", "Using actual-day interest (Actual/360 gives about 1.4% more a year) instead of the nominal rate [CONFIRM nominal basis]."],
 edges="100% vacancy → 0.00x. Interest on future funding is added as it is drawn (MF-BR-10).",
 rounding="Full precision; display two decimals with x. Billing is Actual/360; the test uses the nominal rate.",
 modules="M4",
 tests=[("NCF $395,000; $4,340,000; note 8.000%; cap 8.250%", cov(395000,4340000,.08,.0825)), ("NCF $300,000; $4,340,000; note 8.100%; cap 8.000%", cov(300000,4340000,.081,.08)+": below 1.00x"), ("NCF $0; $3,000,000; note 8.250%; cap 8.000%", cov(0,3000000,.0825,.08))])

def mf13(cost,vs,price,va,capex):
    v=min(price,va); a,b,cc=.75*cost,.70*vs,.70*v+capex; t=min(a,b,cc); f=min(.70*v,t-capex)
    return t,f
add(id="F-MF-13", name="Value-add bridge maximum loan",
 purpose="Largest total commitment and day-one funding for a value-add bridge.",
 plain="Total = min(75% × total cost, 70% × as-stabilized value, 70% × as-is value + capex); funded = min(70% × as-is value, total − capex). On a purchase, as-is value = lower of price and appraisal (F-CORE-14)",
 latex=r"L_{total} = \min(0.75\,C,\ 0.70\,V_{stab},\ 0.70\,\min(P, V_{asis}) + Capex)",
 vars="C = price + capex + closing costs (USD); P = purchase price (USD); V_stab, V_asis = appraised values (USD); Capex = future funding (USD)",
 example=["Cedar Court: price $6,200,000; as-is appraisal $6,300,000; cost $7,200,000; as-stabilized $8,600,000; capex $800,000.", "LTC: 75% × $7,200,000 = $5,400,000. Stabilized LTV: 70% × $8,600,000 = $6,020,000.", "As-is: value = lower of $6,200,000 and $6,300,000 = $6,200,000. 70% × $6,200,000 + $800,000 = $5,140,000. Smallest = $5,140,000.", "Funded = $4,340,000; capex future funding $800,000."],
 interp="Then check the debt-yield floors (F-MF-11), coverage (F-MF-12) and the exit (F-MF-20) before approving.",
 rules="MF-BR-02, MF-BR-03, MF-BR-04, MF-BR-05, MF-BR-06; value definition 12 CFR 365 App. A",
 mistakes=["Using an appraisal above the purchase price for the as-is test.", "Stopping at the leverage tests and skipping the debt-yield and exit tests.", "Funding capex at closing instead of in arrears (MF-BR-10)."],
 edges="Refinance (no purchase) → use the as-is appraisal. Capex 0 → a stabilized bridge (MF-SB). Capex over 50% of price → ineligible (MF-BR-01).",
 rounding="Full precision; round the final commitment down to the nearest $10,000 if the term sheet needs a round figure.",
 modules="M4",
 tests=[("Price $6.2M; as-is $6.3M; capex $800k; cost $7.2M; V_stab $8.6M", f"Total {m(mf13(7.2e6,8.6e6,6.2e6,6.3e6,8e5)[0])} (as-is binds); funded {m(mf13(7.2e6,8.6e6,6.2e6,6.3e6,8e5)[1])}"),
        ("Price $6.2M; as-is $6.3M; capex $2.0M; cost $8.4M; V_stab $9.5M", f"Total {m(mf13(8.4e6,9.5e6,6.2e6,6.3e6,2e6)[0])} (LTC binds); funded {m(mf13(8.4e6,9.5e6,6.2e6,6.3e6,2e6)[1])}"),
        ("Price $6.2M; as-is $6.3M; capex $800k; cost $7.2M; V_stab $7.2M", f"Total {m(mf13(7.2e6,7.2e6,6.2e6,6.3e6,8e5)[0])} (stabilized LTV binds); funded {m(mf13(7.2e6,7.2e6,6.2e6,6.3e6,8e5)[1])}")])

def mf14(n,v,r,d,dy=.08,ltv=.75):
    a=n/d/K(r); b=ltv*v; cc=n/dy; t=min(a,b,cc); return a,b,cc,int(t//1000*1000)
x=mf14(560000,8600000,.0725,1.25)
add(id="F-MF-14", name="Term loan maximum",
 purpose="Largest small-balance term loan that passes DSCR, LTV and debt yield.",
 plain="Max = min(NCF ÷ DSCR_min ÷ constant, LTV_max × value, NCF ÷ 8.0%), rounded down to $1,000",
 latex=r"L_{max} = \min\left(\frac{NCF}{DSCR_{min} \cdot K},\ LTV_{max} V,\ \frac{NCF}{0.08}\right)",
 vars="NCF (USD per year); DSCR_min = 1.25x or 1.35x; K = annual loan constant at the note rate (F-CORE-04, 30 years); LTV_max = 75% (70% cash-out); V (USD)",
 example=["Cedar Court stabilized: NCF $560,000; value $8,600,000; try the 7.25% band, K = 0.081861.", f"DSCR: $560,000 ÷ 1.25 ÷ 0.081861 = {m(x[0])}.", f"LTV: {m(x[1])}. Debt yield: {m(x[2])}.", f"Smallest, rounded down: {m(x[3])}. LTV 63.6%, so the 7.25% band holds."],
 interp="The rate depends on LTV and DSCR (F-MF-25), and they depend on the loan. Re-run until the band is stable.",
 rules="MF-TRM-02, MF-TRM-03, MF-TRM-04, MF-TRM-08",
 mistakes=["Using the 1.25x minimum for a property outside the top 50 metros (1.35x).", "Not re-checking the rate band after sizing."],
 edges="NCF zero or negative → no loan. Cash-out: LTV 70%.",
 rounding="Constant at full precision; final loan rounded down to $1,000 so tests still pass.",
 modules="M3",
 tests=[("NCF $560,000; V $8,600,000; 7.250%; 1.25x", m(x[3])),
        ("NCF $395,000; V $6,300,000; 7.250%; 1.25x", m(mf14(395000,6300000,.0725,1.25)[3])),
        ("NCF $560,000; V $8,600,000; 7.000%; 1.35x (outside top 50)", m(mf14(560000,8600000,.07,1.35)[3]))])

def mf15(C,r,n,a=.6): return C*r/12*n*a
add(id="F-MF-15", name="Construction interest reserve",
 purpose="Interest budget for a construction loan drawn over time.",
 plain="Reserve = commitment × rate ÷ 12 × months × 60% average outstanding",
 latex=r"IR = C \times \frac{r}{12} \times n \times 0.60",
 vars="C = commitment (USD); r (percent per year); n = construction months; 0.60 = average balance factor",
 example=["Commitment $10,000,000; 8.00%; 24 months.", "$10,000,000 × 8.00% ÷ 12 = $66,666.67 a month; × 24 = $1,600,000.", "× 0.60 = $960,000.00. The 50% rule of thumb gives $800,000: $160,000 short."],
 interp="If the reserve runs out before completion, the guarantor's interest carry guaranty pays.",
 rules="MF-CON-05; MF-CON-03 (carry guaranty); D-MF-11 (60% for MF and RES ground-up)",
 mistakes=["Using the 50% rule of thumb.", "Forgetting that Actual/360 billing costs about 1.4% more than r ÷ 12 over a year."],
 edges="Front-loaded draws (land at closing) → average above 60% [CONFIRM]. Partial months: count the month.",
 rounding="Round to the cent.",
 modules="M5",
 tests=[("$10,000,000; 8.000%; 24", m(mf15(1e7,.08,24))), ("$6,000,000; 8.500%; 18", m(mf15(6e6,.085,18))), ("$12,500,000; 7.750%; 20", m(mf15(12.5e6,.0775,20)))])

add(id="F-MF-16", name="Combined leverage",
 purpose="Leverage of our senior loan plus any mezzanine or hard-pay preferred equity.",
 plain="Combined LTC = (senior + subordinate) ÷ total cost; combined LTV = (senior + subordinate) ÷ as-stabilized value",
 latex=r"CLTC = \frac{L_{sr} + L_{sub}}{C};\quad CLTV = \frac{L_{sr} + L_{sub}}{V_{stab}}",
 vars="L_sr, L_sub = fully funded amounts (USD); C, V_stab (USD)",
 example=["Cedar Court: $5,140,000 + mezzanine $800,000 = $5,940,000.", "CLTC: $5,940,000 ÷ $7,200,000 = 82.5% (cap 85%).", "CLTV: $5,940,000 ÷ $8,600,000 = 69.1% (cap 80%). Passes on leverage, but fails combined DSCR (F-MF-27)."],
 interp="Subordinate capital raises our default risk even though it sits behind us. Always run F-MF-27 too.",
 rules="MF-MEZ-02 (85% / 80%); MF-MEZ-03 (hard-pay preferred equity counts)",
 mistakes=["Leaving hard-pay preferred equity out.", "Using the funded senior amount instead of the fully funded amount."],
 edges="No subordinate capital → same as F-CORE-15 and F-CORE-14.",
 rounding="Full precision; display one decimal.",
 modules="M4, M6",
 tests=[("$5,140,000 + $800,000; C $7,200,000; V $8,600,000", f"{pct(5940000/7200000,1)}; {pct(5940000/8600000,1)}"),
        ("$5,140,000 + $1,000,000; same", f"{pct(6140000/7200000,1)} (fails 85%); {pct(6140000/8600000,1)}"),
        ("$5,400,000 + hard-pay pref $600,000; same", f"{pct(6e6/7.2e6,1)}; {pct(6e6/8.6e6,1)}")])

# ---------- SUGGESTED 17-28 ----------
add(id="F-MF-17", name="Underwritten in-place rent (SUGGESTED)",
 purpose="The rent figure that underwriting starts from.",
 plain="In-place rent = min(current rent roll × 12, trailing 3 months' collections × 4)",
 latex=r"Rent_{uw} = \min(RR_{month} \times 12,\ T3 \times 4)",
 vars="RR_month = scheduled monthly rent on the rent roll (USD); T3 = rent collected in the last 3 months (USD)",
 example=["Rent roll $63,000 a month × 12 = $756,000.", "T-3 collections $183,000 × 4 = $732,000.", "Lesser: $732,000.00."],
 interp="Stops a freshly raised rent roll from being underwritten before the rents are collected.",
 rules="MF-GEN-05",
 mistakes=["Taking the higher of the two.", "Then applying the full vacancy factor to a T-3 figure that already reflects vacancy [CONFIRM how the vacancy factor applies when T-3 binds]."],
 edges="Vacant building → $0. A T-3 with a one-off catch-up payment overstates income: remove it.",
 rounding="Round to the cent.",
 modules="M2",
 tests=[("$63,000; $183,000", m(732000)), ("$58,500; $180,000", m(702000)), ("$0; $0", m(0))])

add(id="F-MF-18", name="Underwritten vacancy rate (SUGGESTED)",
 purpose="Vacancy and credit loss rate used in underwriting.",
 plain="Vacancy = max(actual vacancy, market vacancy, 5%)",
 latex=r"v_{uw} = \max(v_{act},\ v_{mkt},\ 5\%)",
 vars="v_act = 1 − economic occupancy (F-MF-02); v_mkt from the appraisal (percent)",
 example=["Actual 8.0%; market 6.0%; floor 5.0%.", "max(8.0%, 6.0%, 5.0%) = 8.0%."],
 interp="Feeds F-CORE-08. The 5% floor applies even to a fully leased building.",
 rules="MF-GEN-05",
 mistakes=["Using physical vacancy when economic vacancy is higher.", "Dropping the 5% floor for a 100% occupied building."],
 edges="100% vacancy → 100%. Lease-up loans use projected stabilized vacancy for the exit test only.",
 rounding="Full precision; display one decimal.",
 modules="M2",
 tests=[("8.0%; 6.0%", pct(.08,1)), ("3.0%; 4.5%", pct(.05,1)+" (floor)"), ("100.0%; 6.0%", pct(1,1))])

add(id="F-MF-19", name="Rent roll to deposits variance (SUGGESTED)",
 purpose="Checks that the rent roll matches cash actually banked.",
 plain="Variance = (rent roll rent for 3 months − bank deposits for 3 months) ÷ rent roll rent",
 latex=r"Var = \frac{RR_{3m} - Dep_{3m}}{RR_{3m}}",
 vars="RR_3m = scheduled rent for 3 months (USD); Dep_3m = rent deposits for the same months (USD)",
 example=["Rent roll $189,000; deposits $182,000.", "($189,000 − $182,000) ÷ $189,000 = 3.7%. Within 5%: passes."],
 interp="A large positive gap means rent is not being collected or the rent roll is padded.",
 rules="MF-GEN-04 (within 5%)",
 mistakes=["Including security deposits or other income in deposits.", "Testing the absolute value only and missing which way the gap runs."],
 edges="Negative result (deposits above rent roll): catch-up payments or other income; investigate. Rent roll 0 → undefined.",
 rounding="Full precision; display one decimal.",
 modules="M2",
 tests=[("$189,000; $182,000", pct(7000/189000,1)+": passes"), ("$189,000; $176,000", pct(13000/189000,1)+": fails"), ("$189,000; $191,000", pct(-2000/189000,1).replace("-","−")+": passes, investigate")])

def ex20(n,v,r,L):
    a=n/1.25/K(r+.005); b=.8*v; t=min(a,b); return t, t-L
e1=ex20(560000,8600000,.0655,5140000); e2=ex20(500000,8600000,.0655,5140000); e3=ex20(700000,8000000,.0655,6500000)
add(id="F-MF-20", name="Bridge exit take-out test (SUGGESTED)",
 purpose="Checks that an agency-style loan could repay the bridge at stabilization.",
 plain="Take-out = min(stabilized NCF ÷ 1.25 ÷ K at (agency rate + 0.50%), 80% × as-stabilized value); pass if take-out ≥ fully funded loan",
 latex=r"TO = \min\left(\frac{NCF_{stab}}{1.25 \cdot K(r_{ag} + 0.5\%)},\ 0.80\,V_{stab}\right) \geq L_{total}",
 vars="NCF_stab (USD per year); r_ag = current agency rate (percent); K = 30-year constant; V_stab, L_total (USD)",
 example=["Cedar Court: NCF $560,000; agency 6.55% + 0.50% = 7.05%; K = 0.080240.", f"DSCR leg: $560,000 ÷ 1.25 ÷ 0.080240 = {m(e1[0])}. LTV leg: $6,880,000.", f"Take-out {m(e1[0])} − $5,140,000 = {m(e1[1])} spare: passes."],
 interp="The bridge is only as good as its exit. A fail means a smaller loan or a larger equity check.",
 rules="MF-BR-08, MF-SB-04",
 mistakes=["Testing at today's agency rate with no 0.50% buffer.", "Comparing with the funded loan instead of the fully funded loan."],
 edges="Agency rate is a dated market input [VERIFY: source and date each time]. Negative spare = shortfall.",
 rounding="Constant at full precision; result to the cent.",
 modules="M4",
 tests=[("NCF $560,000; V $8,600,000; 6.550%; loan $5,140,000", f"{m(e1[0])}; spare {m(e1[1])}"),
        ("NCF $500,000; V $8,600,000; 6.550%; loan $5,140,000", f"{m(e2[0])}; short {m(-e2[1])}: fails"),
        ("NCF $700,000; V $8,000,000; 6.550%; loan $6,500,000", f"{m(e3[0])} (LTV binds); short {m(-e3[1])}: fails")])

add(id="F-MF-21", name="Interest shortfall reserve (SUGGESTED)",
 purpose="Cash held at closing when in-place NCF cannot cover bridge interest.",
 plain="Reserve = max(0, funded loan × test rate − NCF), for 12 months",
 latex=r"IR_{short} = \max(0,\ L_{funded} \cdot r_{test} - NCF)",
 vars="L_funded (USD); r_test = the higher rate in F-MF-12 (percent per year); NCF (USD per year)",
 example=["Funded $4,340,000 at 8.100%: interest $351,540.", "NCF $300,000. Reserve = $351,540 − $300,000 = $51,540.00."],
 interp="Funds the gap until the business plan lifts NCF. Coverage of 1.00x or more needs no reserve.",
 rules="MF-BR-07",
 mistakes=["Sizing on today's rate when the cap strike + spread is higher.", "Releasing the reserve before coverage reaches 1.00x."],
 edges="NCF negative → reserve also covers the operating deficit. Actual/360 billing runs about 1.4% above this nominal figure.",
 rounding="Round to the cent.",
 modules="M4",
 tests=[("$4,340,000; 8.100%; NCF $300,000", m(4340000*.081-300000)), ("$4,340,000; 8.250%; NCF $395,000", m(0)+" (coverage 1.10x)"), ("$3,000,000; 8.250%; NCF $0", m(247500))])

add(id="F-MF-22", name="Maximum rate cap strike (SUGGESTED)",
 purpose="Highest cap strike that keeps in-place coverage at 1.00x.",
 plain="Max strike = NCF ÷ funded loan − spread",
 latex=r"K_{max} = \frac{NCF}{L_{funded}} - s",
 vars="NCF (USD per year); L_funded (USD); s = loan spread over SOFR (percent)",
 example=["Cedar Court: $395,000 ÷ $4,340,000 = 9.101%.", "Spread 4.00% (F-MF-24). 9.101% − 4.00% = 5.101%. A 4.25% strike passes."],
 interp="The borrower buys a cap at or below this strike.",
 rules="MF-BR-09",
 mistakes=["Setting the strike off today's SOFR instead of coverage.", "Forgetting the cap must cover any extension too."],
 edges="Result at or below 0% → no cap can fix coverage; use an interest reserve (F-MF-21) or a smaller loan.",
 rounding="Full precision; display three decimals; buy the strike at or below.",
 modules="M4",
 tests=[("$395,000; $4,340,000; 4.00%", p3(395000/4340000-.04)), ("$300,000; $4,340,000; 3.75%", p3(300000/4340000-.0375)), ("$250,000; $5,000,000; 3.75%", p3(.05-.0375))])

add(id="F-MF-23", name="Repair escrow (SUGGESTED)",
 purpose="Cash held at closing for immediate repairs.",
 plain="Repair escrow = 125% × immediate repairs in the property condition report",
 latex=r"RE = 1.25 \times Repairs_{imm}",
 vars="Repairs_imm (USD)",
 example=["Immediate repairs $120,000 × 1.25 = $150,000.00."],
 interp="The extra 25% covers cost overruns.",
 rules="MF-BR-13",
 mistakes=["Using total capex instead of immediate (life-safety) repairs.", "Funding the repairs out of the capex holdback instead of a separate escrow."],
 edges="No immediate repairs → $0.",
 rounding="Round to the cent.",
 modules="M4",
 tests=[("$120,000", m(150000)), ("$0", m(0)), ("$37,450", m(37450*1.25))])

def br(sofr,base,adj): return p3(sofr+base+adj)
add(id="F-MF-24", name="Bridge note rate (SUGGESTED)",
 purpose="Builds the floating rate from the MF-BR-14 grid.",
 plain="Rate = 1-month Term SOFR + base spread + adjusters",
 latex=r"r = SOFR_{1M} + s_{base} + \sum adj",
 vars="SOFR_1M (percent, illustrative; set each period); base 3.75% value-add or 3.25% stabilized; adjusters 0.25% each",
 example=["Cedar Court: SOFR 4.00% (illustrative); value-add base 3.75%.", "Total commitment 71.4% of cost → +0.25%. Debt yield 9.10% and occupancy 92%: no other adjusters.", "Rate = 4.00% + 3.75% + 0.25% = 8.000%."],
 interp="Each adjuster prices a known risk: high leverage, thin debt yield, low occupancy.",
 rules="MF-BR-14 (applies to MF-BR and MF-SB)",
 mistakes=["Missing the leverage adjuster when the total commitment is above 70% of cost.", "Quoting a fixed rate when the product floats."],
 edges="SOFR is a market input [VERIFY: New York Fed or CME Term SOFR, date]. Course figures are illustrative.",
 rounding="Display three decimals.",
 modules="M4",
 tests=[("SOFR 4.00%; value-add; LTC 71.4%; DY 9.10%; occ 92%", br(.04,.0375,.0025)), ("SOFR 3.80%; value-add; LTC 74.0%; DY 7.50%; occ 80%", br(.038,.0375,.0075)), ("SOFR 4.00%; stabilized; LTC 65.0%; DY 9.00%; occ 93%", br(.04,.0325,0))])

add(id="F-MF-25", name="Term loan note rate (SUGGESTED)",
 purpose="Builds the fixed rate from the MF-TRM-08 grid.",
 plain="Rate = 7.00% + 0.25% (LTV 65.01-75%) + 0.25% (DSCR 1.25-1.34x) + 0.25% (interest-only)",
 latex=r"r = 7.00\% + \sum adj",
 vars="LTV (F-CORE-14), DSCR (F-MF-10), IO flag",
 example=["Cedar Court term: LTV 63.6%; DSCR 1.25x; amortizing.", "7.00% + 0.00% + 0.25% + 0.00% = 7.250%."],
 interp="Rate, DSCR and loan size depend on each other; re-run F-MF-14 until the band holds.",
 rules="MF-TRM-08; MF-TRM-05 (IO only at LTV 65% or less and DSCR 1.35x or more)",
 mistakes=["Pricing interest-only on a loan that does not qualify for it.", "Using the band from before sizing."],
 edges="DSCR below 1.25x → no rate: the loan fails MF-TRM-02.",
 rounding="Display three decimals.",
 modules="M3",
 tests=[("LTV 63.6%; DSCR 1.25x; amortizing", p3(.0725)), ("LTV 72.0%; DSCR 1.30x; amortizing", p3(.075)), ("LTV 60.0%; DSCR 1.40x; IO", p3(.0725))])

add(id="F-MF-26", name="Value per unit (SUGGESTED)",
 purpose="Checks the property clears the minimum value per unit.",
 plain="Value per unit = value ÷ units (on a purchase, value = lower of price and appraisal)",
 latex=r"V_{unit} = \frac{V}{U_{total}}",
 vars="V = as-is value; lower of price and appraisal on a purchase (USD); U_total (count)",
 example=["Cedar Court: value = lower of price $6,200,000 and appraisal $6,300,000 (F-CORE-14). $6,200,000 ÷ 50 = $124,000.00. Above $75,000: eligible."],
 interp="Very low value per unit signals weak rents, poor condition or a small market.",
 rules="MF-GEN-03 ($75,000 minimum)",
 mistakes=["Using as-stabilized value to clear the minimum.", "Counting unpermitted units."],
 edges="Units 0 → undefined.",
 rounding="Round to the cent.",
 modules="M1",
 tests=[("$6,200,000; 50 units", m(124000)), ("$1,200,000; 8 units", m(150000)), ("$2,880,000; 48 units", m(60000)+": ineligible")])

def cd(n,a,ra,b,rb):
    x1,x2=ads(a,ra),ads(b,rb); return f"ADS {m(x1+x2)}; {xx(n/(x1+x2))}"
add(id="F-MF-27", name="Combined DSCR (SUGGESTED)",
 purpose="Coverage of senior plus subordinate debt service.",
 plain="Combined DSCR = NCF ÷ (senior ADS + subordinate ADS), each on 30-year amortization at its rate",
 latex=r"DSCR_{comb} = \frac{NCF}{ADS_{sr} + ADS_{sub}}",
 vars="NCF (USD per year); ADS by F-CORE-03 for each layer (USD per year)",
 example=[f"Cedar Court stabilized NCF $560,000. Senior $5,140,000 at 8.000%: ADS {m(ads(5140000,.08))}.", f"Mezzanine $800,000 at 12.000%: ADS {m(ads(800000,.12))}.", f"Combined = $560,000 ÷ {m(ads(5140000,.08)+ads(800000,.12))} = {xx(560000/(ads(5140000,.08)+ads(800000,.12)))}. Fails 1.10x.", "So the $800,000 mezzanine in the F-MF-16 example passes on leverage but fails on coverage: it is not allowed."],
 interp="Minimum 1.10x. Leverage alone (F-MF-16) can pass while coverage fails, so always run both.",
 rules="MF-MEZ-02, MF-MEZ-03",
 mistakes=["Using interest-only on the mezzanine.", "Leaving out hard-pay preferred equity."],
 edges="Which NCF to use, in-place or stabilized, is not stated in MF-MEZ-02 [CONFIRM]. Examples use stabilized.",
 rounding="Payments to the cent; DSCR at full precision; display two decimals with x.",
 modules="M4, M6",
 tests=[("$560,000; $5,140,000 at 8.000%; $800,000 at 12.000%", cd(560000,5140000,.08,800000,.12)+": fails"),
        ("$650,000; $5,400,000 at 8.000%; pref $600,000 at 11.000%", cd(650000,5400000,.08,600000,.11)+": passes"),
        ("$395,000; $5,140,000 at 8.000%; $800,000 at 12.000%", cd(395000,5140000,.08,800000,.12)+": fails")])

add(id="F-MF-28", name="Residential income share (SUGGESTED)",
 purpose="Decides whether a mixed-use property counts as multifamily.",
 plain="Residential share = residential income ÷ total income",
 latex=r"Share_{res} = \frac{Inc_{res}}{Inc_{total}}",
 vars="Income figures for the same period (USD per year)",
 example=["$640,000 ÷ $720,000 = 88.9%. At least 80%: multifamily."],
 interp="Below 80%, the loan goes under the Commercial mixed-use rules.",
 rules="MF-GEN-01",
 mistakes=["Using square footage instead of income.", "Counting parking or laundry as commercial income (they follow the residential units)."],
 edges="Total income 0 → use appraiser's market income.",
 rounding="Full precision; display one decimal.",
 modules="M1",
 tests=[("$640,000; $720,000", pct(640000/720000,1)), ("$540,000; $720,000", pct(.75,1)+": not multifamily"), ("$720,000; $720,000", pct(1,1))])

MOD = {}
out = [md(f) for f in F]
for f in F: print(f['id'], [t[1] for t in f['tests']])
idx = "## Multifamily formulas (F-MF)\n\nThe 5-10 unit DSCR loan (MF-DSCR) uses the Residential formula F-RES-07 (gross rent ÷ PITIA). Every other multifamily test uses NCF (F-MF-09).\n\n| ID | Name | Status | Main rules |\n| --- | --- | --- | --- |\n"
for f in F:
    st = "SUGGESTED" if "SUGGESTED" in f['name'] else "REQUIRED"
    nm = f['name'].replace(" (SUGGESTED)", "")
    rl = re.sub(r"\s*\([^)]*\)", "", f['rules']).split(";")[0].strip()
    idx += f"| {f['id']} | {nm} | {st} | {rl} |\n"
end = "\n\n**Multifamily library complete: 16 REQUIRED and 12 SUGGESTED formulas, 84 test cases.**"
chunks = [idx + "\n" + "\n\n".join(out[0:8]), "\n\n".join(out[8:16]), "\n\n".join(out[16:22]), "\n\n".join(out[22:28]) + end]
for i, ch in enumerate(chunks): open(f'mchunk{i}.json', 'w').write(json.dumps(ch))
print([len(ch) for ch in chunks])
allt = "\n".join(chunks)
print("BAD $:", re.findall(r"\$[^0-9\s\-−]", allt)[:10])
