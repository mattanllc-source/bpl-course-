import { describe, expect, it } from "vitest";
import fixtures from "./fixtures.json";
import * as core from "../index";
import { APPRAISAL_MAX_AGE_DAYS, RTL_GRID, SPONSOR_EXPOSURE_CAPS } from "../policy";
import { fixed, money, pct, ratioX } from "../../shared/round";

type Fixture = { id: string; name: string; tests: { inputs: string; expected: string }[] };
const all = fixtures as Fixture[];
const byId = (id: string) => {
  const f = all.find((x) => x.id === id);
  if (!f) throw new Error(`no fixture ${id}`);
  return f.tests.map((t) => t.expected);
};

/** Every core formula ID has a port, tested against its fixtures below (F-CORE-38 and -39 are reserved). */
const PORTED = [
  ...Array.from({ length: 37 }, (_, i) => `F-CORE-${String(i + 1).padStart(2, "0")}`),
  "F-CORE-40", "F-CORE-41", "F-CORE-42", "F-CORE-43", "F-CORE-44",
  "F-CORE-45", "F-CORE-46", "F-CORE-47", "F-CORE-48", "F-CORE-49",
];

describe("F-CORE-01 interest-only (Actual/360)", () => {
  const exp = byId("F-CORE-01");
  it.each([
    [500_000, 0.1, 30, exp[0]],
    [4_340_000, 0.0765, 31, exp[1]],
    [340_000, 0.115, 28, exp[2]],
  ])("%d at %d for %d days", (b, r, d, want) => {
    expect(money(core.interestOnly(b, r, d))).toBe(want);
  });
  it("rejects negative inputs", () => expect(() => core.interestOnly(-1, 0.1, 30)).toThrow(RangeError));
});

describe("F-CORE-02 amortizing payment", () => {
  const exp = byId("F-CORE-02");
  it.each([
    [500_000, 0.07, 360, exp[0]],
    [3_900_000, 0.07, 300, exp[1]],
    [120_000, 0, 120, exp[2]],
  ])("%d at %d over %d months", (l, r, n, want) => expect(money(core.amortizingPayment(l, r, n))).toBe(want));
  it("zero rate divides evenly", () => expect(core.amortizingPayment(360_000, 0, 360)).toBe(1000));
  it("rejects zero months", () => expect(() => core.amortizingPayment(1, 0.07, 0)).toThrow(RangeError));
});

describe("F-CORE-03 annual debt service", () => {
  const exp = byId("F-CORE-03");
  it("amortizing", () => expect(money(core.annualDebtService({ monthlyPayment: 3326.51 }))).toBe(exp[0]));
  it("interest-only", () => expect(money(core.annualDebtService({ ioLoan: 2_860_000, annualRate: 0.0825 }))).toBe(exp[1]));
  it("amortizing, Cedar Court", () => expect(money(core.annualDebtService({ monthlyPayment: 27_564.39 }))).toBe(exp[2]));
  it("rejects negatives", () => expect(() => core.annualDebtService({ monthlyPayment: -1 })).toThrow(RangeError));
});

describe("F-CORE-04 loan constant", () => {
  const exp = byId("F-CORE-04");
  it.each([
    [0.07, 300, exp[0]],
    [0.0775, 300, exp[1]],
    [0.065, 360, exp[2]],
  ])("%d over %d months", (r, n, want) => expect(fixed(core.loanConstant(r, n), 6)).toBe(want));
  it("rate 0 → 12 ÷ n", () => expect(core.loanConstant(0, 120)).toBe(0.1));
  it("rejects zero months", () => expect(() => core.loanConstant(0.07, 0)).toThrow(RangeError));
});

describe("F-CORE-05 per diem", () => {
  const exp = byId("F-CORE-05");
  it.each([
    [500_000, 0.1, exp[0]],
    [3_520_000, 0.0765, exp[1]],
    [5_140_000, 0.09, exp[2]],
  ])("%d at %d", (b, r, want) => expect(money(core.perDiem(b, r))).toBe(want));
  it("rejects negatives", () => expect(() => core.perDiem(-1, 0.1)).toThrow(RangeError));
});

describe("F-CORE-06 origination points", () => {
  const exp = byId("F-CORE-06");
  it.each([
    [340_000, 2, exp[0]],
    [3_520_000, 1, exp[1]],
    [5_140_000, 1.5, exp[2]],
  ])("%d at %d points", (c, p, want) => expect(money(core.originationPoints(c, p))).toBe(want));
  it("rejects negatives", () => expect(() => core.originationPoints(1, -1)).toThrow(RangeError));
});

describe("F-CORE-07 gross potential rent", () => {
  const exp = byId("F-CORE-07");
  it("10 units × $1,500", () => expect(money(core.grossPotentialRent(Array(10).fill(1500)))).toBe(exp[0]));
  it("50 units, average $1,300", () => expect(money(core.grossPotentialRent(Array(50).fill(1300)))).toBe(exp[1]));
  it("8 suites, $4,250 each", () => expect(money(core.grossPotentialRent(Array(8).fill(4250)))).toBe(exp[2]));
  it("rejects a negative rent", () => expect(() => core.grossPotentialRent([1000, -1])).toThrow(RangeError));
});

describe("F-CORE-08 vacancy and credit loss", () => {
  const exp = byId("F-CORE-08");
  it.each([
    [180_000, 0.05, exp[0]],
    [780_000, 0.1, exp[1]],
    [720_000, 1, exp[2]],
  ])("%d at %d", (g, v, want) => expect(money(core.vacancyLoss(g, v))).toBe(want));
  it("rejects a rate above 100%", () => expect(() => core.vacancyLoss(1, 1.01)).toThrow(RangeError));
});

describe("F-CORE-09 effective gross income", () => {
  const exp = byId("F-CORE-09");
  it.each([
    [180_000, 9_000, 6_000, exp[0]],
    [720_000, 36_000, 0, exp[1]],
    [720_000, 720_000, 18_000, exp[2]],
  ])("GPR %d − V %d + OI %d", (g, v, oi, want) => expect(money(core.effectiveGrossIncome(g, v, oi))).toBe(want));
  it("rejects negative other income", () => expect(() => core.effectiveGrossIncome(1, 0, -1)).toThrow(RangeError));
});

describe("F-CORE-10 net operating income", () => {
  const exp = byId("F-CORE-10");
  it.each([
    [177_000, 72_000, exp[0]],
    [684_000, 204_000, exp[1]],
    [18_000, 310_000, exp[2]],
  ])("EGI %d − OpEx %d", (e, o, want) => expect(money(core.netOperatingIncome(e, o))).toBe(want));
  it("rejects negative expenses", () => expect(() => core.netOperatingIncome(1, -1)).toThrow(RangeError));
});

describe("F-CORE-11 DSCR", () => {
  const exp = byId("F-CORE-11");
  it("plain", () => expect(ratioX(core.dscr(105_000, 84_000))).toBe(exp[0]));
  it("Birchwood exit", () => {
    const v = core.dscr(434_000, 330_772.68);
    expect(`${ratioX(v)} (${fixed(v, 4)})`).toBe(exp[1]);
  });
  it("displays 1.25x but fails a 1.25x minimum: test on full precision", () => {
    const v = core.dscr(124_950, 100_000);
    expect(v).toBeLessThan(1.25);
    expect(`${fixed(v, 4)} → displays ${ratioX(v)} but FAILS a 1.25x minimum`).toBe(exp[2]);
  });
  it("rejects zero debt service", () => expect(() => core.dscr(1, 0)).toThrow(RangeError));
});

describe("F-CORE-12 break-even occupancy", () => {
  const exp = byId("F-CORE-12");
  it.each([
    [72_000, 84_000, 180_000, exp[0]],
    [204_000, 330_772.68, 720_000, exp[1]],
    [310_000, 500_000, 780_000, exp[2]],
  ])("(%d + %d) ÷ %d", (o, a, g, want) => expect(pct(core.breakEvenOccupancy(o, a, g), 1)).toBe(want));
  it("rejects zero GPR", () => expect(() => core.breakEvenOccupancy(1, 1, 0)).toThrow(RangeError));
});

describe("F-CORE-13 cap rate", () => {
  const exp = byId("F-CORE-13");
  it("rate from value", () => expect(pct(core.capRate(105_000, 1_500_000), 2)).toBe(exp[0]));
  it("value from rate", () => expect(money(core.valueFromCapRate(480_000, 0.08))).toBe(exp[1]));
  it("rate from value, third case", () => expect(pct(core.capRate(240_000, 4_000_000), 2)).toBe(exp[2]));
  it("rejects zero value and zero rate", () => {
    expect(() => core.capRate(1, 0)).toThrow(RangeError);
    expect(() => core.valueFromCapRate(1, 0)).toThrow(RangeError);
  });
});

describe("F-CORE-14 LTV", () => {
  const exp = byId("F-CORE-14");
  it("plain value", () => expect(pct(core.ltv(1_050_000, 1_500_000), 1)).toBe(exp[0]));
  it("purchase uses the lower of price and appraisal", () =>
    expect(pct(core.ltv(2_860_000, 4_500_000, 4_400_000), 1)).toBe(exp[1]));
  it("third case", () => expect(pct(core.ltv(3_900_000, 6_000_000), 1)).toBe(exp[2]));
});

describe("F-CORE-15 LTC", () => {
  const exp = byId("F-CORE-15");
  it.each([
    [1_200_000, 1_600_000, exp[0]],
    [3_520_000, 5_180_000, exp[1]],
    [5_969_283, 9_183_512, exp[2]],
  ])("%d ÷ %d", (c, t, want) => expect(pct(core.ltc(c, t), 1)).toBe(want));
});

describe("F-CORE-16 debt yield", () => {
  const exp = byId("F-CORE-16");
  it.each([
    [105_000, 1_050_000, exp[0]],
    [434_000, 3_520_000, exp[1]],
    [254_000, 2_860_000, exp[2]],
  ])("%d ÷ %d", (n, l, want) => expect(pct(core.debtYield(n, l), 2)).toBe(want));
  it("rejects a zero loan", () => expect(() => core.debtYield(1, 0)).toThrow(RangeError));
});

describe("F-CORE-17 maximum loan by DSCR", () => {
  const exp = byId("F-CORE-17");
  it("IO constant 8.00%", () => expect(money(core.maxLoanByDscr(105_000, 1.25, 0.08))).toBe(exp[0]));
  it("Cedar Court constant", () =>
    expect(money(core.maxLoanByDscr(434_000, 1.3, 330_772.68 / 3_900_000))).toBe(exp[1]));
  it("Birchwood constant", () =>
    expect(money(core.maxLoanByDscr(430_000, 1.25, 319_050.84 / 3_520_000))).toBe(exp[2]));
  it("NOI ≤ 0 → $0", () => expect(core.maxLoanByDscr(-1, 1.25, 0.08)).toBe(0));
  it("rejects a zero constant", () => expect(() => core.maxLoanByDscr(1, 1.25, 0)).toThrow(RangeError));
});

describe("F-CORE-18 maximum loan by debt yield", () => {
  const exp = byId("F-CORE-18");
  it.each([
    [105_000, 0.105, exp[0]],
    [434_000, 0.09, exp[1]],
    [720_000, 0.09, exp[2]],
  ])("%d at %d", (n, dy, want) => expect(money(core.maxLoanByDebtYield(n, dy))).toBe(want));
  it("NOI ≤ 0 → $0", () => expect(core.maxLoanByDebtYield(-5, 0.1)).toBe(0));
  it("rejects a zero yield", () => expect(() => core.maxLoanByDebtYield(1, 0)).toThrow(RangeError));
});

describe("F-CORE-19 maximum loan (lowest test)", () => {
  const exp = byId("F-CORE-19");
  it("Maple-style tests", () => expect(money(core.maxLoan([1_125_000, 1_050_000, 1_000_000]))).toBe(exp[0]));
  it("Cedar Court", () => expect(money(core.maxLoan([3_900_000, 3_936_238, 4_822_222]))).toBe(exp[1]));
  it("NNN", () => expect(money(core.maxLoan([2_800_000, 2_468_378]))).toBe(exp[2]));
  it("rounds down to $1,000 (CORE-PRC-05): 2,468,378 → 2,468,000", () =>
    expect(core.maxLoan([2_800_000, 2_468_378])).toBe(2_468_000));
  it("never rounds up past the binding test", () => expect(core.maxLoan([5_472_681.99])).toBe(5_472_000));
  it("any test ≤ $0 → no loan", () => expect(core.maxLoan([1_000_000, -1])).toBe(0));
  it("a $0 test → no loan", () => expect(core.maxLoan([1_000_000, 0])).toBe(0));
  it("rejects an empty list", () => expect(() => core.maxLoan([])).toThrow(RangeError));
});

describe("F-CORE-20 interest reserve", () => {
  const exp = byId("F-CORE-20");
  it.each([
    [500_000, 0.1, 182, exp[0]],
    [2_860_000, 0.0825, 184, exp[1]],
    [340_000, 0.115, 90, exp[2]],
  ])("%d at %d for %d days", (b, r, d, want) => expect(money(core.interestReserve(b, r, d))).toBe(want));
  it("rejects negatives", () => expect(() => core.interestReserve(1, 0.1, -1)).toThrow(RangeError));
});

describe("F-CORE-21 months of reserves", () => {
  const exp = byId("F-CORE-21");
  it.each([
    [60_000, 5_000, exp[0]],
    [45_313.8, 7_552.3, exp[1]],
    [20_000, 3_043.35, exp[2]],
  ])("%d ÷ %d", (l, p, want) => expect(`${fixed(core.monthsOfReserves(l, p), 1)} months`).toBe(want));
  it("rejects a zero payment", () => expect(() => core.monthsOfReserves(1, 0)).toThrow(RangeError));
});

describe("F-CORE-22 extension fee", () => {
  const exp = byId("F-CORE-22");
  it.each([
    [340_000, 0.005, exp[0]],
    [3_520_000, 0.0025, exp[1]],
    [5_140_000, 0.005, exp[2]],
  ])("%d at %d", (a, f, want) => expect(money(core.extensionFee(a, f))).toBe(want));
  it("rejects negatives", () => expect(() => core.extensionFee(-1, 0.005)).toThrow(RangeError));
});

describe("F-CORE-23 loss severity", () => {
  const exp = byId("F-CORE-23");
  it("plain", () => expect(pct(core.lossSeverity(500_000, 40_000, 430_000).severity, 1)).toBe(exp[0]));
  it("Birchwood", () => expect(pct(core.lossSeverity(3_520_000, 310_000, 3_150_000).severity, 1)).toBe(exp[1]));
  it("a gain reports 0.0% loss", () => {
    const { severity, reportedLoss } = core.lossSeverity(340_000, 28_000, 400_000);
    expect(`${pct(severity, 1)} → report ${pct(reportedLoss, 1)} loss`).toBe(exp[2]);
  });
  it("rejects a zero balance", () => expect(() => core.lossSeverity(0, 0, 0)).toThrow(RangeError));
});

describe("F-CORE-24 adjusted liquid assets", () => {
  const exp = byId("F-CORE-24");
  it.each([
    [110_000, 30_000, 50_000, 75_800, exp[0]],
    [550_000, 300_000, 0, 0, exp[1]],
    [40_000, 10_000, 0, 60_000, exp[2]],
  ])("cash %d; securities %d; retirement %d; CTC %d", (cash, securities, retirement, cashToClose, want) =>
    expect(money(core.adjustedLiquidAssets({ cash, securities, retirement, cashToClose }))).toBe(want));
  it("unused credit lines count 0% (CORE-BOR-11)", () =>
    expect(core.adjustedLiquidAssets({ cash: 0, securities: 0, retirement: 0, creditLines: 75_000, cashToClose: 0 })).toBe(0));
  it("rejects negatives", () =>
    expect(() => core.adjustedLiquidAssets({ cash: -1, securities: 0, retirement: 0, cashToClose: 0 })).toThrow(RangeError));
});

describe("F-CORE-25 required post-closing liquidity", () => {
  const exp = byId("F-CORE-25");
  it.each([
    [340_000, 0.11, 600_000, exp[0]],
    [3_520_000, 0.0765, 0, exp[1]],
    [5_140_000, 0.0765, 0, exp[2]],
  ])("%d at %d; other %d", (c, r, o, want) => expect(money(core.requiredLiquidity(c, r, o))).toBe(want));
  it("6 months' interest wins at a high rate", () => expect(core.requiredLiquidity(100_000, 0.24)).toBeCloseTo(12_000, 9));
  it("rejects negatives", () => expect(() => core.requiredLiquidity(-1, 0.1)).toThrow(RangeError));
});

describe("F-CORE-26 adjusted net worth", () => {
  const exp = byId("F-CORE-26");
  it.each([
    [900_000, 500_000, 0, exp[0]],
    [7_500_000, 2_300_000, 0, exp[1]],
    [2_000_000, 1_200_000, 300_000, exp[2]],
  ])("%d − %d − %d", (a, l, e, want) => expect(money(core.adjustedNetWorth(a, l, e))).toBe(want));
  it("rejects negatives", () => expect(() => core.adjustedNetWorth(1, -1, 0)).toThrow(RangeError));
});

describe("F-CORE-27 experience count and tier", () => {
  const exp = byId("F-CORE-27");
  const show = (r: { count: number; tier: number }) => `${r.count} → Tier ${r.tier}`;
  const done = (n: number) => Array.from({ length: n }, () => ({ monthsSinceCompletion: 12, ownership: 1 }));
  it("3 sold, 1 refi, 1 at 40 months, 1 at 10%", () => {
    const projects = [...done(4), { monthsSinceCompletion: 40, ownership: 1 }, { monthsSinceCompletion: 6, ownership: 0.1 }];
    expect(show(core.experienceTier(projects))).toBe(exp[0]);
  });
  it("0 projects", () => expect(show(core.experienceTier([]))).toBe(exp[1]));
  it("11 qualifying", () => expect(show(core.experienceTier(done(11)))).toBe(exp[2]));
  it("exactly 36 months and exactly 20% count (D-CONV-03)", () =>
    expect(core.experienceTier([{ monthsSinceCompletion: 36, ownership: 0.2 }]).count).toBe(1));
  it("tier boundaries 1 / 5 / 10 (CORE-BOR-16)", () => {
    expect(core.experienceTier(done(4)).tier).toBe(1);
    expect(core.experienceTier(done(5)).tier).toBe(2);
    expect(core.experienceTier(done(9)).tier).toBe(2);
    expect(core.experienceTier(done(10)).tier).toBe(3);
  });
  it("rejects ownership over 100%", () =>
    expect(() => core.experienceTier([{ monthsSinceCompletion: 1, ownership: 1.5 }])).toThrow(RangeError));
});

describe("F-CORE-28 note rate (RTL grid)", () => {
  const exp = byId("F-CORE-28");
  const show = (r: number) => `${fixed(r * 100, 3)}%`;
  it("Tier 1, FICO 690, near max, rehab", () =>
    expect(show(core.noteRate({ tier: 1, fico: 690, nearMaxLeverage: true, groundUp: false }))).toBe(exp[0]));
  it("Tier 3, FICO 760, no adjusters", () =>
    expect(show(core.noteRate({ tier: 3, fico: 760, nearMaxLeverage: false, groundUp: false }))).toBe(exp[1]));
  it("Tier 0 with every adjuster is capped at 12.750%", () => {
    const r = core.noteRate({ tier: 0, fico: 685, nearMaxLeverage: true, groundUp: true });
    expect(r).toBe(RTL_GRID.band.max);
    expect(`${show(r)} (capped)`).toBe(exp[2]);
  });
  it("Maple Run (RD-RES-01): Tier 2, FICO 712, LTC at the cap = 10.250%", () =>
    expect(show(core.noteRate({ tier: 2, fico: 712, nearMaxLeverage: true, groundUp: false }))).toBe("10.250%"));
  it("FICO 700 gets no adjuster", () =>
    expect(core.noteRate({ tier: 3, fico: 700, nearMaxLeverage: false, groundUp: false })).toBe(0.095));
  it("rejects an invalid FICO", () =>
    expect(() => core.noteRate({ tier: 1, fico: 900, nearMaxLeverage: false, groundUp: false })).toThrow(RangeError));
});

describe("F-CORE-29 aggregate sponsor exposure", () => {
  const exp = byId("F-CORE-29");
  const overTier1 = (x: number) => x > SPONSOR_EXPOSURE_CAPS[1].amount;
  it("three loans", () => {
    const r = core.sponsorExposure(340_000, [250_000, 350_000]);
    expect(money(r.exposure)).toBe(exp[0]);
    expect(r.loanCount).toBe(3);
  });
  it.each([
    [3_520_000, exp[1]],
    [5_140_000, exp[2]],
  ])("%d alone is over the Tier 1 cap (CORE-CONC-01)", (c, want) => {
    const { exposure } = core.sponsorExposure(c);
    expect(overTier1(exposure)).toBe(true);
    expect(`${money(exposure)} (over Tier 1 cap)`).toBe(want);
  });
  it("rejects negatives", () => expect(() => core.sponsorExposure(1, [-1])).toThrow(RangeError));
});

describe("F-CORE-30 bucket concentration", () => {
  const exp = byId("F-CORE-30");
  it("ground-up share", () => expect(pct(core.bucketConcentration(5_000_000, 25_000_000), 1)).toBe(exp[0]));
  it("after adding the new loan", () =>
    expect(pct(core.bucketConcentration(6_500_000 + 340_000, 25_340_000), 1)).toBe(exp[1]));
  it("one MSA", () => expect(pct(core.bucketConcentration(3_900_000, 26_000_000), 1)).toBe(exp[2]));
  it("rejects a zero base", () => expect(() => core.bucketConcentration(0, 0)).toThrow(RangeError));
});

describe("F-CORE-31 default interest", () => {
  const exp = byId("F-CORE-31");
  it.each([
    [500_000, 0.1, 30, exp[0]],
    [3_520_000, 0.0765, 45, exp[1]],
    [340_000, 0.115, 61, exp[2]],
  ])("%d at %d + 5.00%% for %d days", (b, r, d, want) => expect(money(core.defaultInterest(b, r, d))).toBe(want));
  it("a usury cap below rate + 5% is charged instead", () =>
    expect(core.defaultInterest(360_000, 0.1, 1, 0.12)).toBeCloseTo(120, 9));
  it("rejects negatives", () => expect(() => core.defaultInterest(1, 0.1, -1)).toThrow(RangeError));
});

describe("F-CORE-32 payoff amount", () => {
  const exp = byId("F-CORE-32");
  it("no fees", () => expect(money(core.payoffAmount(500_000, 0.1, 12))).toBe(exp[0]));
  it("exit $0", () => expect(money(core.payoffAmount(3_520_000, 0.0765, 15, 0))).toBe(exp[1]));
  it("exit 0.50%", () => expect(money(core.payoffAmount(5_140_000, 0.09, 9, core.extensionFee(5_140_000, 0.005)))).toBe(exp[2]));
  it("rejects negatives", () => expect(() => core.payoffAmount(1, 0.1, 1, -1)).toThrow(RangeError));
});

describe("F-CORE-33 prepaid interest", () => {
  const exp = byId("F-CORE-33");
  it.each([
    [500_000, 0.1, 11, exp[0]],
    [2_860_000, 0.0765, 13, exp[1]],
    [4_340_000, 0.0765, 1, exp[2]],
  ])("%d at %d for %d days", (b, r, d, want) => expect(money(core.prepaidInterest(b, r, d))).toBe(want));
  it("rejects negatives", () => expect(() => core.prepaidInterest(-1, 0.1, 1)).toThrow(RangeError));
});

describe("F-CORE-34 insurance-to-value", () => {
  const exp = byId("F-CORE-34");
  it.each([
    [1_800_000, 2_000_000, exp[0]],
    [6_000_000, 5_600_000, exp[1]],
    [2_500_000, 2_500_000, exp[2]],
  ])("%d ÷ %d", (c, rc, want) => expect(pct(core.insuranceToValue(c, rc), 1)).toBe(want));
  it("rejects a zero replacement cost", () => expect(() => core.insuranceToValue(1, 0)).toThrow(RangeError));
});

describe("F-CORE-35 tax and insurance escrow", () => {
  const exp = byId("F-CORE-35");
  it.each([
    [36_000, 9_600, exp[0]],
    [3_600, 1_440, exp[1]],
    [84_000, 26_500, exp[2]],
  ])("%d + %d", (t, i, want) => {
    const { monthly, cushion } = core.escrowDeposit(t, i);
    expect(`${money(monthly)} a month; cushion ${money(cushion)}`).toBe(want);
  });
  it("rejects negatives", () => expect(() => core.escrowDeposit(-1, 0)).toThrow(RangeError));
});

describe("F-CORE-36 appraisal age", () => {
  const exp = byId("F-CORE-36");
  const show = (r: { days: number; pass: boolean }) => `${r.days} days: ${r.pass ? "pass" : "fail"}`;
  it.each([
    ["2026-08-01", "2026-11-18", exp[0]],
    ["2026-07-21", "2026-11-18", exp[1]],
    ["2026-07-15", "2026-11-18", exp[2]],
  ])("%s → %s", (e, c, want) => expect(show(core.appraisalAge(e, c))).toBe(want));
  it(`exactly ${APPRAISAL_MAX_AGE_DAYS} days passes (CORE-VAL-02)`, () =>
    expect(core.appraisalAge("2026-07-21", "2026-11-18")).toEqual({ days: 120, pass: true }));
  it("rejects an effective date after closing and bad dates", () => {
    expect(() => core.appraisalAge("2026-11-19", "2026-11-18")).toThrow(RangeError);
    expect(() => core.appraisalAge("2026-02-30", "2026-11-18")).toThrow(RangeError);
  });
});

describe("F-CORE-37 coinsurance recovery", () => {
  const exp = byId("F-CORE-37");
  it.each([
    [4_400_000, 5_200_000, 0.9, 500_000, 25_000, exp[0]],
    [1_800_000, 2_400_000, 0.9, 300_000, 10_000, exp[1]],
    [2_800_000, 4_000_000, 0.8, 500_000, 25_000, exp[2]],
  ])("carried %d; RC %d; %d", (did, rc, c, loss, ded, want) =>
    expect(money(core.coinsuranceRecovery(did, rc, c, loss, ded))).toBe(want));
  it("total loss pays at most the limit", () =>
    expect(core.coinsuranceRecovery(1_000_000, 1_000_000, 0.9, 5_000_000, 0)).toBe(1_000_000));
  it("rejects a zero replacement cost", () => expect(() => core.coinsuranceRecovery(1, 0, 0.9, 1, 0)).toThrow(RangeError));
});

describe("F-CORE-40 all-in annual cost screen", () => {
  const exp = byId("F-CORE-40");
  it.each([
    [0.1025, 1.5, 12, exp[0]],
    [0.0765, 1, 24, exp[1]],
    [0.12, 2, 6, exp[2]],
  ])("%d + %d points over %d months", (r, p, t, want) => expect(pct(core.allInCost(r, p, 0, t), 2)).toBe(want));
  it("rejects a zero term", () => expect(() => core.allInCost(0.1, 1, 0, 0)).toThrow(RangeError));
});

describe("F-CORE-41 net funding wire", () => {
  const exp = byId("F-CORE-41");
  it.each([
    [240_000, 5_100, 0, 1_161.67, 0, exp[0]],
    [4_340_000, 51_400, 0, 922.25, 68_666.67, exp[1]],
    [2_860_000, 35_200, 0, 7_900.75, 0, exp[2]],
  ])("%d − %d − %d − %d − %d", (l, p, f, i, e, want) =>
    expect(money(core.netFundingWire(l, p, f, i, e))).toBe(want));
  it("a negative wire throws (deal is mis-built)", () =>
    expect(() => core.netFundingWire(1_000, 2_000, 0, 0, 0)).toThrow(RangeError));
  it("rejects negatives", () => expect(() => core.netFundingWire(1, -1, 0, 0, 0)).toThrow(RangeError));
});

describe("F-CORE-42 REO carrying value and charge-off", () => {
  const exp = byId("F-CORE-42");
  it.each([
    [3_520_000, 3_400_000, 102_000, exp[0]],
    [5_140_000, 5_000_000, 150_000, exp[1]],
    [1_000_000, 900_000, 45_000, exp[2]],
  ])("loan %d; FV %d; CTS %d", (l, fv, cts, want) => {
    const { carryingValue, chargeOff } = core.reoCarryingValue(l, fv, cts);
    expect(`${money(carryingValue)}; ${money(chargeOff)}`).toBe(want);
  });
  it("value above the loan carries at the loan, no charge-off", () =>
    expect(core.reoCarryingValue(1_000, 2_000, 100)).toEqual({ carryingValue: 1_000, chargeOff: 0 }));
  it("rejects negatives", () => expect(() => core.reoCarryingValue(1, -1, 0)).toThrow(RangeError));
});

describe("F-CORE-43 bucket headroom", () => {
  const exp = byId("F-CORE-43");
  it.each([
    [0.25, 120_000_000, 28_500_000, exp[0]],
    [0.25, 120_000_000, 26_000_000, exp[1]],
    [0.15, 120_000_000, 17_500_000, exp[2]],
  ])("%d cap; %d total; %d bucket", (c, t, b, want) => expect(money(core.bucketHeadroom(c, t, b))).toBe(want));
  it("over the cap → negative", () => expect(core.bucketHeadroom(0.25, 100, 30)).toBeLessThan(0));
  it("rejects a cap of 100%", () => expect(() => core.bucketHeadroom(1, 1, 0)).toThrow(RangeError));
});

describe("F-CORE-44 cash-on-cash return", () => {
  const exp = byId("F-CORE-44");
  it.each([
    [480_000, 330_772.68, 2_100_000, exp[0]],
    [480_000, 330_772.68, 1_918_181.82, exp[1]],
    [300_000, 330_772.68, 2_100_000, exp[2]],
  ])("NOI %d; ADS %d; cash %d", (noi, ads, cash, want) => expect(pct(core.cashOnCash(noi, ads, cash), 2)).toBe(want));
  it("rejects zero cash invested", () => expect(() => core.cashOnCash(480_000, 330_772.68, 0)).toThrow(RangeError));
  it("rejects negative cash invested", () => expect(() => core.cashOnCash(480_000, 330_772.68, -1)).toThrow(RangeError));
  it("rejects negative debt service", () => expect(() => core.cashOnCash(480_000, -1, 2_100_000)).toThrow(RangeError));
});

describe("F-CORE-45 present and future value", () => {
  const exp = byId("F-CORE-45");
  it.each([
    [0.07 / 12, 300, 27_564.39, 0, exp[0]],
    [0.1025 / 12, 12, 2_904.17, 340_000, exp[1]],
    [0.0725 / 12, 120, 37_328.69, 4_722_901.67, exp[2]],
  ])("i %d; n %d; PMT %d; lump %d", (i, n, p, fv, want) => {
    const r = core.presentFutureValue(i, n, p, fv);
    expect(`PV ${money(r.pv)}; FV ${money(r.fv)}`).toBe(want);
  });
  it("zero rate sums the payments", () => expect(core.presentFutureValue(0, 10, 100, 1_000)).toEqual({ pv: 2_000, fv: 2_000 }));
  it("rejects a rate of −100%", () => expect(() => core.presentFutureValue(-1, 10, 100, 0)).toThrow(RangeError));
  it("rejects zero periods", () => expect(() => core.presentFutureValue(0.01, 0, 100, 0)).toThrow(RangeError));
  it("rejects a negative payment", () => expect(() => core.presentFutureValue(0.01, 10, -1, 0)).toThrow(RangeError));
});

describe("F-CORE-46 effective annual rate", () => {
  const exp = byId("F-CORE-46");
  it.each([
    [0.07, 12, 360, exp[0]],
    [0.1025, 12, 365, exp[1]],
    [0.0765, 1, 365, exp[2]],
  ] as const)("%d; m %d; D %d", (r, m, d, want) => expect(pct(core.effectiveAnnualRate(r, m, d), 3)).toBe(want));
  it("m = 1 on 30/360 is the nominal rate", () => expect(core.effectiveAnnualRate(0.08, 1)).toBeCloseTo(0.08, 15));
  it("rejects zero periods a year", () => expect(() => core.effectiveAnnualRate(0.07, 0)).toThrow(RangeError));
  it("rejects a negative rate", () => expect(() => core.effectiveAnnualRate(-0.01, 12)).toThrow(RangeError));
});

describe("F-CORE-47 remaining balance after k payments", () => {
  const exp = byId("F-CORE-47");
  it.each([
    [3_900_000, 0.07, 300, 120, exp[0]],
    [5_472_000, 0.0725, 360, 120, exp[1]],
    [3_900_000, 0.07, 300, 60, exp[2]],
  ])("%d at %d over %d months, after %d", (l, r, n, k, want) => expect(money(core.remainingBalance(l, r, n, k))).toBe(want));
  it("k = 0 is the loan", () => expect(core.remainingBalance(3_900_000, 0.07, 300, 0)).toBe(3_900_000));
  it("k = n leaves the payment-rounding residue", () => expect(money(core.remainingBalance(3_900_000, 0.07, 300, 300))).toBe("−$1.06"));
  it("zero rate → L − P × k", () => expect(core.remainingBalance(120_000, 0, 120, 60)).toBe(60_000));
  it("rejects k above n", () => expect(() => core.remainingBalance(1_000, 0.07, 12, 13)).toThrow(RangeError));
  it("rejects a negative loan", () => expect(() => core.remainingBalance(-1, 0.07, 12, 1)).toThrow(RangeError));
});

describe("F-CORE-49 remaining balance with Actual/360 accrual", () => {
  const exp = byId("F-CORE-49");
  it.each([
    [3_900_000, 0.07, 300, 120, "2029-01", exp[0]],
    [5_472_000, 0.0725, 360, 120, "2029-04", exp[1]],
    [500_000, 0.07, 360, 360, "2027-01", exp[2]],
  ])("%d at %d over %d months, after %d from %s", (l, r, n, k, start, want) =>
    expect(money(core.remainingBalanceActual360(l, r, n, k, start))).toBe(want));
  it("month 1 of Birchwood (31 days) repays $4,056.06", () =>
    expect(money(core.remainingBalanceActual360(3_900_000, 0.07, 300, 1, "2029-01"))).toBe("$3,895,943.94"));
  it("is above the 30/360 balance (F-CORE-47) after 120 payments", () =>
    expect(core.remainingBalanceActual360(3_900_000, 0.07, 300, 120, "2029-01")).toBeGreaterThan(core.remainingBalance(3_900_000, 0.07, 300, 120)));
  it("k = 0 is the loan", () => expect(core.remainingBalanceActual360(3_900_000, 0.07, 300, 0, "2029-01")).toBe(3_900_000));
  it("rejects k above n", () => expect(() => core.remainingBalanceActual360(1_000, 0.07, 12, 13, "2029-01")).toThrow(RangeError));
  it("rejects a negative loan", () => expect(() => core.remainingBalanceActual360(-1, 0.07, 12, 1, "2029-01")).toThrow(RangeError));
  it("rejects a bad start month", () => expect(() => core.remainingBalanceActual360(1_000, 0.07, 12, 1, "2029-13")).toThrow(RangeError));
});

/** Maple Run's real draw pattern (Running Deals Role 3): lender's monthly net cash flows, F-CORE-48 test 3. */
const MAPLE_RUN_DRAWS = [
  -234_900, 2_050, -27_950, 2_306.25, -22_693.75, 2_519.79, -17_480.21, 2_690.63, -12_309.37, 2_818.75, -7_181.25, 2_904.17,
  342_904.17,
];

describe("F-CORE-48 internal rate of return", () => {
  const exp = byId("F-CORE-48");
  const flows = (out: number, coupon: number, n: number, last: number) => [out, ...Array<number>(n - 1).fill(coupon), last];
  it.each([
    [flows(-334_900, 2_904.17, 12, 342_904.17), exp[0]],
    [flows(-3_484_800, 22_440, 24, 3_542_440), exp[1]],
    [MAPLE_RUN_DRAWS, exp[2]],
  ])("case %#", (cfs, want) => {
    const r = core.internalRateOfReturn(cfs, 12);
    expect(`${pct(r.nominal, 3)} nominal; ${pct(r.effective, 3)} effective`).toBe(want);
  });
  it("a loan with no fees yields its note rate", () => {
    const r = core.internalRateOfReturn(flows(-340_000, 2_904.17, 12, 342_904.17), 12);
    expect(pct(r.nominal, 3)).toBe("10.250%");
  });
  it("accepts many sign changes when the running total changes sign once (draws)", () => {
    const cum = MAPLE_RUN_DRAWS.map((_, t) => MAPLE_RUN_DRAWS.slice(0, t + 1).reduce((a, b) => a + b, 0));
    expect(money(cum[11])).toBe("−$307,224.99");
    expect(money(cum[12])).toBe("$35,679.18");
    expect(core.netPresentValue(0.01, MAPLE_RUN_DRAWS)).toBeCloseTo(222.37, 2);
  });
  it("NPV at the IRR is zero", () => {
    const cfs = flows(-334_900, 2_904.17, 12, 342_904.17);
    expect(Math.abs(core.netPresentValue(core.internalRateOfReturn(cfs, 12).periodic, cfs))).toBeLessThan(1e-4);
  });
  it("rejects a single cash flow", () => expect(() => core.internalRateOfReturn([-100], 12)).toThrow(RangeError));
  it("rejects flows with no sign change", () => expect(() => core.internalRateOfReturn([100, 10, 110], 12)).toThrow(RangeError));
  it("rejects flows with two sign changes", () => expect(() => core.internalRateOfReturn([-100, 230, -132], 1)).toThrow(RangeError));
});

describe("fixture catalogue", () => {
  it("core has 47 scripted formulas with 3 cases each", () => {
    expect(all).toHaveLength(47);
    for (const x of all) expect(x.tests).toHaveLength(3);
  });
  it("every fixture ID is ported, and nothing else", () => {
    expect(all.map((f) => f.id).sort()).toEqual([...PORTED].sort());
  });
});
