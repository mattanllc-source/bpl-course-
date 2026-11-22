import json, pathlib, re
src = open(pathlib.Path(__file__).resolve().parent.parent.parent / "core" / "reference" / "library_source.py").read()
pre, post = src.split("def md(f):")
exec(pre.split("F = []")[0])
F = []
def add(**k): F.append(k)
exec("def md(f):" + post.split("out = [md(f)")[0])

def fac(r, n): i = r/12; return i/(1-(1+i)**-n)
def K(r, n=300): return fac(r, n)*12
def ads(L, r, n=300): return float(c(L*fac(r, n)))*12
def p3(x): return pct(x, 3)
def dn(x, step=1000): return int(x//step*step)  # CORE-PRC-05: round loans down to the nearest $1,000

# ---------- REQUIRED 01-07 (Course Bible glossary) ----------
def walt(ts): return sum(y*r for y, r in ts)/sum(r for y, r in ts)
add(id="F-COM-01", name="Weighted average lease term (WALT)",
 purpose="Average remaining lease term, weighted by rent.",
 plain="WALT = Σ(years remaining × annual rent) ÷ Σ annual rent",
 latex=r"WALT = \frac{\sum_i y_i R_i}{\sum_i R_i}",
 vars="y_i = years left on lease i (months ÷ 12); R_i = annual base rent of lease i (USD per year)",
 example=["Bible building: A $300,000, 6 years; B $100,000, 2 years; C $100,000, 4 years.", "(6 × $300,000 + 2 × $100,000 + 4 × $100,000) ÷ $500,000 = $2,400,000 ÷ $500,000 = 4.80 years."],
 interp="A short WALT means income can disappear soon. Compare it with the loan term.",
 rules="COM-TRM-07 (rollover before maturity); COM-NNN-04 (lease cushion)",
 mistakes=["Weighting by square feet when the rule needs rent (state which you use).", "Counting renewal options as remaining term."],
 edges="Vacant space has no rent, so it drops out and WALT looks better than the building is. Leases past maturity: count actual years. Partial years: months ÷ 12.",
 rounding="Full precision; display two decimals in years.",
 modules="CM2",
 tests=[("A 6y $300k; B 2y $100k; C 4y $100k", f"{walt([(6,3e5),(2,1e5),(4,1e5)]):.2f} years"), ("One tenant, 14y, $240k", "14.00 years"), ("A 10y $200k; B 1y $200k; vacant $0", f"{walt([(10,2e5),(1,2e5)]):.2f} years")])

add(id="F-COM-02", name="Rollover risk",
 purpose="Share of rent from leases ending in a stated period.",
 plain="Rollover = rent expiring in the period ÷ total rent",
 latex=r"Roll = \frac{R_{exp}}{R_{total}}",
 vars="R_exp = annual base rent of leases ending in the period (USD per year); R_total (USD per year)",
 example=["Bible building, next 24 months: lease B, $100,000.", "$100,000 ÷ $500,000 = 20.0%."],
 interp="Above 15% within 24 months triggers the rollover stress (F-COM-09).",
 rules="COM-GEN-08 (15% in 24 months); COM-TRM-07",
 mistakes=["Leaving out month-to-month tenants (they expire now).", "Using a period that does not match the rule (24 months)."],
 edges="All rent expiring → 100%: treat as a bridge, not a term loan. Total rent 0 → undefined.",
 rounding="Full precision; display one decimal.",
 modules="CM2, CM3",
 tests=[("$100,000; $500,000", pct(.2,1)), ("$0; $480,000", pct(0,1)), ("$300,000; $500,000", pct(.6,1))])

add(id="F-COM-03", name="Commercial net cash flow (NCF)",
 purpose="Commercial sizing base: NOI after TI/LC and replacement reserves.",
 plain="NCF = NOI − (TI/LC rate × sf) − (replacement rate × sf)",
 latex=r"NCF = NOI - sf \times (TILC_{psf} + Rep_{psf})",
 vars="NOI (USD per year); sf = rentable square feet; TI/LC and replacement rates per COM-GEN-07 (USD per sf per year)",
 example=["Birchwood Plaza, 40,000 sf unanchored retail; NOI $480,000.", "TI/LC: 40,000 × $1.00 = $40,000. Replacement: 40,000 × $0.15 = $6,000.", "NCF = $480,000 − $40,000 − $6,000 = $434,000.00."],
 interp="Every commercial test uses NCF, except NNN and SBC DSCR loans, which use NOI (COM-GEN-11).",
 rules="COM-GEN-07; COM-GEN-11",
 mistakes=["Using retail rates for office space ($1.50 and $0.20 per sf).", "Deducting reserves already inside OpEx."],
 edges="Mixed-use: apply each rate to its own area. Negative NCF → no loan.",
 rounding="Round to the cent.",
 modules="CM3",
 tests=[("NOI $480,000; 40,000 sf retail", m(434000)), ("NOI $900,000; 50,000 sf office", m(900000-50000*1.7)), ("NOI $650,000; 100,000 sf industrial", m(650000-100000*.4))])

add(id="F-COM-04", name="Average daily rate (ADR)",
 purpose="Hotel room revenue per occupied room night.",
 plain="ADR = room revenue ÷ rooms sold",
 latex=r"ADR = \frac{Rev_{rooms}}{Rooms_{sold}}",
 vars="Rev_rooms (USD); Rooms_sold (room nights)",
 example=["$2,920,000 ÷ 20,000 = $146.00."],
 interp="Hospitality is outside our lending scope (COM-GEN-02). Learners use ADR to read appraisals and comparables in CM5.",
 rules="COM-GEN-02 (hospitality out of scope)",
 mistakes=["Including food, beverage or parking revenue.", "Dividing by available rooms (that is RevPAR)."],
 edges="Rooms sold 0 → undefined.",
 rounding="Round to the cent.",
 modules="CM5",
 tests=[("$2,920,000; 20,000", m(146)), ("$1,500,000; 12,500", m(120)), ("$4,380,000; 24,000", m(182.5))])

add(id="F-COM-05", name="Revenue per available room (RevPAR)",
 purpose="Room revenue per available room night; equals ADR × occupancy.",
 plain="RevPAR = room revenue ÷ (rooms × days)",
 latex=r"RevPAR = \frac{Rev_{rooms}}{Rooms \times Days}",
 vars="Rev_rooms (USD); Rooms (count); Days in the period (365, or 366 in a leap year)",
 example=["$2,920,000 ÷ (100 × 365) = $2,920,000 ÷ 36,500 = $80.00.", "Check: ADR $146.00 × occupancy 54.8% = $80.00."],
 interp="Combines price and occupancy; the standard hotel comparison measure (CM5 only).",
 rules="COM-GEN-02",
 mistakes=["Using 360 days (the Actual/360 billing basis is for interest, not hotel nights).", "Mixing a partial year's revenue with a full year's rooms."],
 edges="Leap year: 366 days. Rooms closed for renovation still count as available unless the comparison set excludes them.",
 rounding="Round to the cent.",
 modules="CM5",
 tests=[("$2,920,000; 100 rooms; 365", m(80)), ("$2,920,000; 100 rooms; 366", m(2920000/36600)), ("$1,500,000; 60 rooms; 365", m(1500000/21900))])

add(id="F-COM-06", name="Loan per square foot",
 purpose="Loan amount divided by rentable area.",
 plain="Loan per sf = loan ÷ rentable sf",
 latex=r"L_{sf} = \frac{L}{sf}",
 vars="L = loan, fully funded for bridge (USD); sf = rentable square feet",
 example=["$5,000,000 ÷ 50,000 = $100.00 per sf.", "Birchwood: $3,900,000 ÷ 40,000 = $97.50."],
 interp="Compared with sales per sf and replacement cost. Close to replacement cost is a warning.",
 rules="F-COM-08 (sizing)",
 mistakes=["Using gross building area instead of rentable area.", "Using funded instead of fully funded bridge amount."],
 edges="Land loans: per acre or per lot instead.",
 rounding="Round to the cent.",
 modules="CM4",
 tests=[("$5,000,000; 50,000 sf", m(100)), ("$3,900,000; 40,000 sf", m(97.5)), ("$5,969,000; 60,000 sf", m(5969000/60000))])

add(id="F-COM-07", name="Occupancy cost ratio",
 purpose="A retail tenant's rent and charges as a share of its sales.",
 plain="Occupancy cost = (base rent + CAM, tax and insurance charges) ÷ tenant sales",
 latex=r"OCR = \frac{Rent + Charges}{Sales}",
 vars="Rent, Charges, Sales for the same 12 months (USD per year)",
 example=["($75,000 + $15,000) ÷ $1,000,000 = 9.0%."],
 interp="A high ratio means the tenant may not renew, or may fail. NNN loans need 10% or less where sales are reported.",
 rules="COM-NNN-06 (10% or less)",
 mistakes=["Leaving out CAM and other charges.", "Using sales from a different year than rent."],
 edges="Sales not reported → no test; note it as a risk. Sales 0 → undefined.",
 rounding="Full precision; display one decimal.",
 modules="CM5",
 tests=[("$75,000 + $15,000; $1,000,000", pct(.09,1)), ("$180,000 + $0; $1,500,000", pct(.12,1)+": fails 10%"), ("$60,000 + $12,000; $900,000", pct(.08,1))])

# ---------- REQUIRED 08-14 (Model Credit Policy) ----------
def f08(V, ncf, ltv, d, dy, r, n=300):
    a = ltv*V; b = ncf/d/K(r, n); cc = ncf/dy if dy else float('inf'); return a, b, cc, min(a, b, cc)
b1 = f08(6e6, 434000, .65, 1.30, .09, .07)
b2 = f08(4e6, 240000, .70, 1.20, None, .065)
b3 = f08(10e6, 800000, .60, 1.40, .10, .0813)
add(id="F-COM-08", name="Three-test loan sizing",
 purpose="Largest commercial loan that passes LTV, DSCR and debt yield.",
 plain="Loan = min(LTV_max × value, NCF ÷ DSCR_min ÷ constant, NCF ÷ DY_min), rounded down to $1,000 (CORE-PRC-05)",
 latex=r"L = \min\left(LTV_{max} V,\ \frac{NCF}{DSCR_{min} K},\ \frac{NCF}{DY_{min}}\right)",
 vars="V (USD); NCF (USD per year; NOI for NNN); K = annual constant at the note rate, 25-year amortization (F-CORE-04); limits by property type (COM-TRM table)",
 example=["Birchwood term loan: value $6,000,000; NCF $434,000; 65% / 1.30x / 9.0%; 7.000%, K = $330,772.68 ÷ $3,900,000 (shown 0.084814).", f"LTV: {m(b1[0])}. DSCR: $434,000 ÷ 1.30 ÷ K = {m(b1[1])}.", f"Debt yield: $434,000 ÷ 9.0% = {m(b1[2])}.", f"Lowest: {m(b1[3])} (LTV binds). ADS {m(ads(3.9e6,.07))}; DSCR {xx(434000/ads(3.9e6,.07))}; debt yield {pct(434000/3.9e6,2)}."],
 interp="The binding test tells the borrower what would raise proceeds: more value, more income or a lower rate.",
 rules="COM-GEN-11; COM-TRM table; COM-TRM-04 (rate floor, F-COM-18); COM-NNN-02, -03",
 mistakes=["Using the rate before the Treasury + 300 bp floor (F-COM-18).", "Using NCF on an NNN loan, which tests on NOI.", "Rounding the result up."],
 edges="NCF zero or negative → no loan. NNN Tier 1 has no debt-yield test. The 7.000% example assumes a 4.00% Treasury (RD-COM-01); at 5.13% the floor is 8.130%.",
 rounding="Constant at full precision; payment to the cent; loan rounded down to $1,000 (CORE-PRC-05).",
 modules="CM4",
 tests=[("V $6.0M; NCF $434,000; 65% / 1.30x / 9.0%; 7.000%", f"{m(dn(b1[3]))} (LTV binds)"),
        ("NNN Tier 1: V $4.0M; NOI $240,000; 70% / 1.20x; 6.500%", f"{m(dn(b2[3]))} (DSCR binds; {m(b2[1])} before rounding)"),
        ("Office: V $10.0M; NCF $800,000; 60% / 1.40x / 10.0%; 8.130%", f"{m(dn(b3[3]))} (LTV binds; DSCR leg {m(b3[1])})")])

A1 = ads(3.9e6, .07)
add(id="F-COM-09", name="Rollover-stressed NCF",
 purpose="Cuts NCF for rent at risk when leases roll soon.",
 plain="If rollover (F-COM-02) > 15% in 24 months: stressed NCF = NCF − expiring rent × haircut (15%; 20% office); stressed DSCR ≥ 1.20x",
 latex=r"NCF_{stress} = NCF - h \times R_{exp,24m}",
 vars="NCF (USD per year); R_exp,24m = rent expiring within 24 months (USD per year); h = 15% or 20% for office",
 example=["Birchwood: $120,000 of $600,000 base rent expires within 24 months = 20.0% (above 15%).", "Stress: $120,000 × 15% = $18,000. Stressed NCF = $434,000 − $18,000 = $416,000.00.", f"Stressed DSCR: $416,000 ÷ {m(A1)} = {xx(416000/A1)}. Passes 1.20x."],
 interp="Shows whether the loan survives the expiring tenants re-leasing at lower rents.",
 rules="COM-GEN-08",
 mistakes=["Stressing at 15% for office (20%).", "Applying the stress when rollover is 15% or less."],
 edges="All expiring tenants are vacant already → the vacancy rule (F-COM-15) covers them, so do not stress twice.",
 rounding="NCF to the cent; DSCR at full precision, display two decimals with x.",
 modules="CM3, CM4",
 tests=[("NCF $434,000; $120,000 of $600,000 expiring; retail; ADS " + m(A1), f"{m(416000)}; {xx(416000/A1)}"),
        ("NCF $815,000; $300,000 of $1,000,000 expiring; office", m(815000-60000)),
        ("NCF $434,000; $60,000 of $600,000 expiring (10.0%)", m(434000)+": no stress")])

A10 = ads(4e6, .0775); mx10 = 430000/1.25/(ads(3.52e6, .0775)/3.52e6)  # K = $319,050.84 ÷ $3,520,000, as the Library shows
add(id="F-COM-10", name="Bridge exit test (take-out DSCR)",
 purpose="Checks that a permanent loan at the course take-out rate could repay the bridge.",
 plain="Exit DSCR = stabilized NCF ÷ ADS at 7.75%, 25-year amortization; max loan = NCF ÷ DSCR_exit ÷ constant",
 latex=r"DSCR_{exit} = \frac{NCF_{stab}}{12 \cdot PMT(L, 7.75\%, 300)}",
 vars="NCF_stab (USD per year); L = fully funded bridge (USD); 7.75% = course take-out rate (D-COM-08)",
 example=["Industrial flex bridge: $4,000,000 requested; stabilized NCF $430,000; K = $319,050.84 ÷ $3,520,000 (shown 0.090639).", f"ADS = {m(A10)}. Exit DSCR = $430,000 ÷ {m(A10)} = {xx(430000/A10)}: fails 1.25x.", f"Max loan = $430,000 ÷ 1.25 ÷ K = {m(mx10)}, rounded down to {m(dn(mx10))}.", f"Debt yield: $430,000 ÷ {m(dn(mx10))} = {pct(430000/dn(mx10),2)}: passes 9.0%."],
 interp="The bridge is sized to its exit, not to today's income.",
 rules="Bridge table (1.25-1.35x by type); COM-CON-07; D-COM-08",
 mistakes=["Using today's bridge rate instead of the take-out rate.", "Testing the funded amount instead of the fully funded amount."],
 edges="The take-out rate resets when the 10-year Treasury moves 25 bp [VERIFY: Treasury yield and date].",
 rounding="Payment to the cent; max loan rounded down to $1,000 (CORE-PRC-05).",
 modules="CM4",
 tests=[("$4,000,000; NCF $430,000; 1.25x", f"{xx(430000/A10)}: fails; max {m(dn(mx10))}"),
        ("$3,795,000; NCF $430,000; 1.25x", f"{xx(430000/ads(3.795e6,.0775))}: passes"),
        ("$5,969,000; NCF $720,000; 1.25x", f"{xx(720000/ads(5.969e6,.0775))}: passes")])

A11 = ads(8e5, .0875, 360)
add(id="F-COM-11", name="Small-balance commercial DSCR",
 purpose="Coverage for SBC DSCR loans on NOI and 30-year amortization.",
 plain="DSCR = NOI ÷ (monthly P&I at the note rate, 30 years × 12)",
 latex=r"DSCR_{SBC} = \frac{NOI}{12 \cdot PMT(L, r, 360)}",
 vars="NOI (USD per year; no TI/LC deduction); L (USD); r ≥ 8.50% floor (COM-DSCR-09)",
 example=["Linden Corner: NOI $96,000; loan $800,000; 8.750%, 30 years.", f"ADS = {m(A11)}. DSCR = $96,000 ÷ {m(A11)} = {xx(96000/A11)}: passes 1.25x.", f"Max loan at 1.25x: $96,000 ÷ 1.25 ÷ {K(.0875,360):.6f} = {m(96000/1.25/K(.0875,360))}."],
 interp="Minimum 1.25x, or 1.30x for office and unanchored retail. Uses NOI, so it is looser than the term-loan test.",
 rules="COM-DSCR-03; COM-DSCR-04 (mixed-use may use F-RES-07 at 1.15x); COM-DSCR-09",
 mistakes=["Deducting TI/LC (that is the term-loan basis).", "Pricing below the 8.50% floor."],
 edges="Loan above $2,000,000 → COM-TRM instead. NOI negative → decline.",
 rounding="Payment to the cent; DSCR at full precision; display two decimals with x.",
 modules="CM4",
 tests=[("NOI $96,000; $800,000; 8.750%", f"ADS {m(A11)}; {xx(96000/A11)}"),
        ("NOI $60,000; $600,000; 8.750%", f"ADS {m(ads(6e5,.0875,360))}; {xx(60000/ads(6e5,.0875,360))}: fails 1.25x"),
        ("Office NOI $120,000; $1,000,000; 9.000%", f"ADS {m(ads(1e6,.09,360))}; {xx(120000/ads(1e6,.09,360))}: fails 1.30x")])

add(id="F-COM-12", name="Dark-value coverage (NNN Tier 2)",
 purpose="Caps an unrated-tenant NNN loan at 80% of the building's value empty.",
 plain="Max = min(60% × value, 80% × dark value), then the 1.35x DSCR test",
 latex=r"L_{max} = \min(0.60\,V,\ 0.80\,V_{dark})",
 vars="V = as-is value with the lease (USD); V_dark = appraiser's value with the tenant gone (USD)",
 example=["Franchise restaurant: value $3,500,000; dark value $2,400,000.", "LTV: $2,100,000. Dark: 80% × $2,400,000 = $1,920,000.", "Dark value binds: $1,920,000.00 before the DSCR test."],
 interp="If the tenant leaves, the empty building must still cover most of the loan.",
 rules="COM-NNN-03",
 mistakes=["Using the leased value as the dark value.", "Skipping the DSCR test after the dark-value cap."],
 edges="Special-use building with no other user → dark value near 0: decline.",
 rounding="Round to the cent; loan rounded down to $1,000 (CORE-PRC-05).",
 modules="CM5",
 tests=[("$3,500,000; dark $2,400,000", m(1920000)+" (dark binds)"), ("$3,000,000; dark $2,500,000", m(1800000)+" (LTV binds)"), ("$3,500,000; dark $0", m(0)+": decline")])

add(id="F-COM-13", name="Lease-term cushion",
 purpose="Checks the NNN lease runs well past the loan.",
 plain="Cushion = years left on the primary lease − loan term; need ≥ 5 years and lease ≥ 7 years",
 latex=r"Cushion = y_{lease} - y_{loan} \geq 5,\quad y_{lease} \geq 7",
 vars="y_lease = years left at closing (months ÷ 12); y_loan = loan term (years)",
 example=["14 years left; 10-year loan: 14 − 10 = 4 years. Fails.", "Fix: 7-year loan gives 14 − 7 = 7 years. Passes."],
 interp="The tenant must stay through the loan and long enough for a refinance.",
 rules="COM-NNN-04",
 mistakes=["Counting renewal options as lease term.", "Measuring from lease start instead of loan closing."],
 edges="Partial years: count in months (e.g. 11 years 6 months = 11.5).",
 rounding="Full precision in years.",
 modules="CM2, CM5",
 tests=[("14 years; 10-year loan", "4.0 years: fails"), ("14 years; 7-year loan", "7.0 years: passes"), ("11.5 years; 5-year loan", "6.5 years: passes")])

def f14(base, r, mth, Vc, ltc=.65, ltv=.65):
    f = r*mth/12*.6; a = ltc*base/(1-ltc*f); b = ltv*Vc; return f, a, a*f, b, dn(min(a, b))
r14 = f14(8.7e6, .09, 18, 9.8e6); r14b = f14(5e6, .085, 15, 7e6); r14c = f14(8.7e6, .09, 18, 8.8e6)
add(id="F-COM-14", name="Construction sizing with interest reserve",
 purpose="Largest construction loan when the interest reserve sits inside cost.",
 plain="Loan = min(LTC × base cost ÷ (1 − LTC × rate × months ÷ 12 × 60%), LTV × as-complete value)",
 latex=r"L = \min\left(\frac{LTC \cdot C_{base}}{1 - LTC \cdot r \cdot \frac{m}{12} \cdot 0.60},\ LTV \cdot V_{comp}\right)",
 vars="C_base = land + hard + soft + contingency (USD); r (percent per year); m = months to stabilization; LTC, LTV = 65%",
 example=["Ridgeline Flex: base cost $8,700,000; 9.00%; 18 months.", f"Reserve factor: 9.00% × 18 ÷ 12 × 60% = {pct(r14[0],2)} of the loan.", f"LTC loan: 65% × $8,700,000 ÷ (1 − 65% × 8.10%) = $5,655,000 ÷ 0.94735 = {m(r14[1])}. Reserve {m(r14[2])}.", f"LTV: 65% × $9,800,000 = {m(r14[3])}. LTC binds: {m(r14[4])} rounded down."],
 interp="Putting the reserve inside cost stops the loan from funding its own interest above the LTC limit.",
 rules="COM-CON-01, -02, -03 (80% supervisory ceiling [VERIFY]), -06, -07",
 mistakes=["Adding the reserve on top of an already-maximum loan.", "Using 100% average balance or the 50% rule of thumb."],
 edges="Front-loaded draws (land funded at closing) → average above 60% [CONFIRM]. Then run the exit test (F-COM-10).",
 rounding="Full precision; loan rounded down to $1,000 (CORE-PRC-05).",
 modules="CM4, CM6",
 tests=[("Base $8.7M; 9.00%; 18 months; as-complete $9.8M", f"{m(r14[4])} (LTC binds)"),
        ("Base $5.0M; 8.50%; 15 months; as-complete $7.0M", f"{m(r14b[4])} (LTC binds; {m(r14b[1])} before rounding)"),
        ("Base $8.7M; 9.00%; 18 months; as-complete $8.8M", f"{m(r14c[4])} (LTV binds)")])

# ---------- SUGGESTED 15-24 ----------
add(id="F-COM-15", name="Underwritten vacancy (SUGGESTED)",
 purpose="Vacancy rate used in commercial underwriting.",
 plain="Vacancy = max(actual, market, 5%); floor 10% for office",
 latex=r"v_{uw} = \max(v_{act},\ v_{mkt},\ f),\ f = 5\%\ (10\%\ office)",
 vars="v_act, v_mkt (percent of potential rent)",
 example=["Retail: actual 3%, market 6%, floor 5% → 6.0%."],
 interp="Feeds F-CORE-08. Office carries the higher floor because re-leasing is slowest.",
 rules="COM-GEN-05",
 mistakes=["Using 5% for office.", "Using physical vacancy when rent-weighted vacancy is higher."],
 edges="Single-tenant NNN: vacancy is all or nothing; the dark-value test (F-COM-12) handles it.",
 rounding="Full precision; display one decimal.",
 modules="CM3",
 tests=[("Retail: 3%; 6%", pct(.06,1)), ("Office: 4%; 8%", pct(.10,1)+" (office floor)"), ("Industrial: 0%; 2%", pct(.05,1))])

add(id="F-COM-16", name="Tenant rent share (SUGGESTED)",
 purpose="Share of rent from one tenant; drives estoppels, SNDAs and the sweep rule.",
 plain="Share = tenant's annual base rent ÷ total base rent",
 latex=r"Share_i = \frac{R_i}{R_{total}}",
 vars="R_i, R_total (USD per year)",
 example=["Bible tenant A: $300,000 ÷ $500,000 = 60.0%. Needs estoppel (20%+), SNDA (10%+), and a lease past maturity or a sweep (25%+)."],
 interp="The bigger the tenant, the more of the loan rests on one lease.",
 rules="COM-GEN-09 (20% estoppel, 10% SNDA); COM-GEN-10 (25%); COM-GEN-12 (20% notice sweep)",
 mistakes=["Using square footage share.", "Forgetting the top five tenants also give estoppels."],
 edges="Single tenant → 100%: NNN rules apply.",
 rounding="Full precision; display one decimal.",
 modules="CM2",
 tests=[("$300,000; $500,000", pct(.6,1)+": estoppel, SNDA, 25% rule"), ("$100,000; $500,000", pct(.2,1)+": estoppel, SNDA"), ("$40,000; $500,000", pct(.08,1)+": none unless top five")])

def sh(L, r, ncf, mo): return max(0, L*r-ncf)*mo/12
add(id="F-COM-17", name="Bridge interest shortfall reserve (SUGGESTED)",
 purpose="Cash held when in-place NCF cannot cover bridge interest until stabilization.",
 plain="Reserve = max(0, funded loan × test rate − NCF) × months to stabilization ÷ 12",
 latex=r"IR = \max(0,\ L\,r_{test} - NCF) \times \frac{m}{12}",
 vars="L = funded loan (USD); r_test = higher of note rate and cap strike + spread (COM-BR-03); NCF (USD per year); m = months to stabilization",
 example=["$4,000,000; note 9.000%; cap 4.50% + 4.00% = 8.500%; test rate 9.000%.", "Interest $360,000; NCF $300,000; shortfall $60,000 a year.", "18 months: $60,000 × 18 ÷ 12 = $90,000.00."],
 interp="Unlike multifamily (12 months, MF-BR-07), commercial funds the gap all the way to stabilization.",
 rules="COM-BR-03, COM-BR-04",
 mistakes=["Sizing on 12 months by habit.", "Ignoring the cap strike when it is higher than the note rate."],
 edges="Actual/360 billing runs about 1.4% above this nominal figure [CONFIRM nominal basis].",
 rounding="Round to the cent.",
 modules="CM4",
 tests=[("$4,000,000; 9.000%; NCF $300,000; 18 months", m(sh(4e6,.09,3e5,18))), ("$4,000,000; 9.000%; NCF $380,000; 18 months", m(0)+" (coverage 1.06x)"), ("$3,000,000; 9.500%; NCF $150,000; 24 months", m(sh(3e6,.095,1.5e5,24)))])

add(id="F-COM-18", name="Fixed-rate floor (SUGGESTED)",
 purpose="Applies the Treasury-based rate floors to term and NNN loans.",
 plain="Rate = max(quoted rate, matching Treasury + floor spread)",
 latex=r"r = \max(r_{quote},\ T + s_{floor})",
 vars="T = matching Treasury yield (percent); s_floor = 300 bp term, 175 bp NNN Tier 1, 250 bp NNN Tier 2",
 example=["Term loan, Treasury 5.13% (16 Nov 2026): floor 8.13%. Quote 7.00% → 8.130%."],
 interp="Protects margin when the market quote is too tight for a private lender.",
 rules="COM-TRM-04; COM-NNN-08",
 mistakes=["Using a Treasury of a different maturity from the loan term.", "Sizing at the quoted rate and pricing at the floor."],
 edges="Treasury is a dated market input [VERIFY: US Treasury daily yield curve, date]. Floating bridge loans use COM-BR-06 instead.",
 rounding="Display three decimals.",
 modules="CM4",
 tests=[("Term; quote 7.000%; T 5.13%", p3(.0813)), ("NNN Tier 1; quote 6.500%; T 5.13%", p3(.0688)), ("NNN Tier 2; quote 7.900%; T 5.13%", p3(.079)+" (quote above 7.630% floor)")])

def sw(ncf, a): return (ncf-a)/12
add(id="F-COM-19", name="Cash sweep amount (SUGGESTED)",
 purpose="Monthly excess cash trapped once a sweep trigger is hit.",
 plain="If DSCR < 1.10x or a 20%+ tenant gives notice: sweep = (NCF − ADS) ÷ 12 per month, if positive",
 latex=r"Sweep_{month} = \max\left(0,\ \frac{NCF - ADS}{12}\right)",
 vars="NCF, ADS (USD per year)",
 example=[f"Birchwood NCF falls to $360,000; ADS {m(A1)}; DSCR {xx(360000/A1)}: trigger.", f"Sweep = ($360,000 − {m(A1)}) ÷ 12 = {m(sw(360000,A1))} a month."],
 interp="Trapped cash builds a reserve for re-leasing or pays down the loan.",
 rules="COM-GEN-12; COM-NNN-07; COM-TRM-07",
 mistakes=["Sweeping without a trigger.", "Releasing trapped cash before the cure test is met."],
 edges="NCF below ADS → nothing to sweep; the borrower must cover the gap.",
 rounding="Round to the cent.",
 modules="CM4",
 tests=[(f"NCF $360,000; ADS {m(A1)}", m(sw(360000,A1))), (f"NCF $400,000; ADS {m(A1)} (1.21x, no trigger)", m(0)), (f"NCF $434,000; tenant notice; ADS {m(A1)}", m(sw(434000,A1)))])

add(id="F-COM-20", name="Land loan maximum (SUGGESTED)",
 purpose="Largest loan on entitled land.",
 plain="Max = min(50% × as-is value, 60% × cost)",
 latex=r"L_{land} = \min(0.50\,V,\ 0.60\,C)",
 vars="V = as-is land value (USD); C = purchase cost (USD)",
 example=["Value $2,000,000; cost $1,800,000.", "min($1,000,000, $1,080,000) = $1,000,000.00."],
 interp="Land earns nothing, so leverage is low and the exit must be shown at approval.",
 rules="COM-LND-01, -02, -03",
 mistakes=["Lending on unentitled land.", "Using the borrower's planned value after entitlement."],
 edges="Supervisory ceilings: raw land 65%, land development 75% [VERIFY: 12 CFR 365 App. A]; ours sits below.",
 rounding="Round to the cent.",
 modules="CM4",
 tests=[("V $2,000,000; C $1,800,000", m(1e6)), ("V $1,500,000; C $1,200,000", m(720000)), ("V $3,000,000; C $3,200,000", m(1.5e6))])

def drw(pc, work): return work*(.9 if pc < .5 else 1)
add(id="F-COM-21", name="Construction draw with retainage (SUGGESTED)",
 purpose="Amount released for work inspected in a draw period.",
 plain="Draw = work in place this period × (1 − 10% retainage while under 50% complete)",
 latex=r"Draw = W \times (1 - 0.10 \cdot \mathbb{1}[pc < 50\%])",
 vars="W = inspected work in place this period (USD); pc = percent complete after this draw",
 example=["30% complete; work this period $600,000.", "$600,000 × 0.90 = $540,000.00; $60,000 held."],
 interp="Retainage keeps the contractor committed through the riskiest early stage.",
 rules="COM-CON-10",
 mistakes=["Funding before third-party inspection.", "Skipping the title date-down."],
 edges="When held retainage is released (at 50% or at completion) is not stated in COM-CON-10 [CONFIRM]. Equity goes in first.",
 rounding="Round to the cent.",
 modules="CM4, CM6",
 tests=[("30% complete; $600,000", m(drw(.3,6e5))), ("70% complete; $900,000", m(drw(.7,9e5))), ("45% complete; $250,000", m(drw(.45,2.5e5)))])

add(id="F-COM-22", name="Pre-leasing ratio (SUGGESTED)",
 purpose="Share of a planned building already leased before construction.",
 plain="Pre-leasing = signed lease sf ÷ rentable sf",
 latex=r"PL = \frac{sf_{signed}}{sf_{rentable}}",
 vars="sf_signed (sf under signed leases); sf_rentable",
 example=["Ridgeline: 24,000 ÷ 60,000 = 40.0%. Industrial needs 30%: passes."],
 interp="Retail and office need 50%; industrial 30% or speculative at 60% LTC.",
 rules="COM-CON-05",
 mistakes=["Counting letters of intent as signed leases.", "Using gross instead of rentable area."],
 edges="Self-storage: no pre-leasing, max 60% LTC.",
 rounding="Full precision; display one decimal.",
 modules="CM4, CM6",
 tests=[("Industrial: 24,000; 60,000", pct(.4,1)+": passes 30%"), ("Retail: 18,000; 40,000", pct(.45,1)+": fails 50%"), ("Office: 26,000; 50,000", pct(.52,1)+": passes 50%")])

add(id="F-COM-23", name="SBC DSCR maximum LTV (SUGGESTED)",
 purpose="Sets the LTV limit for a small-balance commercial loan.",
 plain="Max LTV = 70% (65% cash-out) − 5% if office or more than 20% vacant",
 latex=r"LTV_{max} = LTV_{base} - 5\% \cdot \mathbb{1}[office \lor vac > 20\%]",
 vars="LTV_base = 70% purchase or rate-term, 65% cash-out",
 example=["Retail purchase, 25% vacant: 70% − 5% = 65.0%."],
 interp="Office and partly empty buildings get less leverage.",
 rules="COM-DSCR-05",
 mistakes=["Taking 5% twice when the building is office and also over 20% vacant [CONFIRM: one cut or two]."],
 edges="Vacancy exactly 20% → no cut (rule says more than 20%).",
 rounding="Display one decimal.",
 modules="CM4",
 tests=[("Retail purchase; 25% vacant", pct(.65,1)), ("Office cash-out; 0% vacant", pct(.60,1)), ("Light industrial rate-term; 10% vacant", pct(.70,1))])

add(id="F-COM-24", name="Step-down prepayment premium (SUGGESTED)",
 purpose="Fee for repaying a term loan early under a 5-4-3-2-1 schedule.",
 plain="Premium = principal prepaid × step % for the loan year (5, 4, 3, 2, 1, then 0)",
 latex=r"PP = P \times s_{year}",
 vars="P = principal prepaid (USD); s_year = 5%, 4%, 3%, 2%, 1%, then 0%",
 example=["Year 2, balance $3,850,000: $3,850,000 × 4% = $154,000.00."],
 interp="Compensates the lender for lost interest; it is simpler than yield maintenance.",
 rules="COM-TRM-05; MF-TRM-06 (same schedule)",
 mistakes=["Counting the year from the first payment instead of closing [CONFIRM].", "Charging a premium the state does not allow [VERIFY: state law table]."],
 edges="Year 6 or later → 0%. Partial prepayment → premium on the amount prepaid only.",
 rounding="Round to the cent.",
 modules="CM4",
 tests=[("$3,850,000; year 2", m(154000)), ("$3,700,000; year 5", m(37000)), ("$3,600,000; year 6", m(0))])

out = [md(f) for f in F]
for f in F: print(f['id'], [t[1] for t in f['tests']])
idx = "## Commercial formulas (F-COM)\n\nHospitality formulas (F-COM-04, -05) are taught for analysis in CM5; hospitality lending is out of scope (COM-GEN-02). Construction and land formulas sit in CM4 and the CM6 capstone, as there is no separate construction module.\n\n| ID | Name | Status | Main rules |\n| --- | --- | --- | --- |\n"
for f in F:
    st = "SUGGESTED" if "SUGGESTED" in f['name'] else "REQUIRED"
    nm = f['name'].replace(" (SUGGESTED)", "")
    rl = re.sub(r"\s*\([^)]*\)", "", f['rules']).split(";")[0].strip()
    idx += f"| {f['id']} | {nm} | {st} | {rl} |\n"
end = "\n\n**Commercial library complete: 14 REQUIRED and 10 SUGGESTED formulas, 72 test cases. All four family libraries are done: 112 formulas and 336 test cases. Next: reconcile the running deals against the library.**"
chunks = [idx + "\n" + "\n\n".join(out[0:8]), "\n\n".join(out[8:15]), "\n\n".join(out[15:24]) + end]
for i, ch in enumerate(chunks): open(f'cchunk{i}.json', 'w').write(json.dumps(ch))
print([len(ch) for ch in chunks])
print("BAD $:", re.findall(r"\$[^0-9\s\-−]", "\n".join(chunks))[:10])
