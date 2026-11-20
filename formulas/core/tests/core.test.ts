import { describe, expect, it } from "vitest";
import fixtures from "./fixtures.json";
import { amortizingPayment, interestOnly, ltc, ltv } from "../index";
import { money, pct } from "../../shared/round";

type Fixture = { id: string; name: string; tests: { inputs: string; expected: string }[] };
const byId = (id: string) => {
  const f = (fixtures as Fixture[]).find((x) => x.id === id);
  if (!f) throw new Error(`no fixture ${id}`);
  return f.tests.map((t) => t.expected);
};

describe("F-CORE-01 interest-only (Actual/360)", () => {
  const exp = byId("F-CORE-01");
  it.each([
    [500_000, 0.1, 30, exp[0]],
    [4_340_000, 0.0765, 31, exp[1]],
    [340_000, 0.115, 28, exp[2]],
  ])("%d at %d for %d days", (b, r, d, want) => {
    expect(money(interestOnly(b, r, d))).toBe(want);
  });
  it("rejects negative inputs", () => expect(() => interestOnly(-1, 0.1, 30)).toThrow());
});

describe("F-CORE-02 amortizing payment", () => {
  it("matches the library: $500,000, 7.000%, 360 months", () => {
    expect(money(amortizingPayment(500_000, 0.07, 360))).toBe(byId("F-CORE-02")[0]);
  });
  it("zero rate divides evenly", () => expect(amortizingPayment(360_000, 0, 360)).toBe(1000));
});

describe("F-CORE-14 LTV", () => {
  const exp = byId("F-CORE-14");
  it("plain value", () => expect(pct(ltv(1_050_000, 1_500_000), 1)).toBe(exp[0]));
  it("purchase uses the lower of price and appraisal", () =>
    expect(pct(ltv(2_860_000, 4_500_000, 4_400_000), 1)).toBe(exp[1]));
  it("third case", () => expect(pct(ltv(3_900_000, 6_000_000), 1)).toBe(exp[2]));
});

describe("F-CORE-15 LTC", () => {
  const exp = byId("F-CORE-15");
  it.each([
    [1_200_000, 1_600_000, exp[0]],
    [3_520_000, 5_180_000, exp[1]],
    [5_969_283, 9_183_512, exp[2]],
  ])("%d ÷ %d", (c, t, want) => expect(pct(ltc(c, t), 1)).toBe(want));
});

describe("fixture catalogue", () => {
  it("core has 37 scripted formulas with 3 cases each", () => {
    const f = fixtures as Fixture[];
    expect(f).toHaveLength(37);
    for (const x of f) expect(x.tests).toHaveLength(3);
  });
});
