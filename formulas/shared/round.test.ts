import { describe, expect, it } from "vitest";
import { fixed, money, pct, ratioX, roundHalfUp } from "./round";

describe("rounding helpers", () => {
  it("rounds half up, not to even", () => {
    expect(roundHalfUp(2.675, 2)).toBe(2.68); // binary float would give 2.67
    expect(roundHalfUp(0.125, 2)).toBe(0.13);
    expect(roundHalfUp(-0.125, 2)).toBe(-0.13);
  });
  it("formats money with a true minus sign", () => {
    expect(money(1234.5)).toBe("$1,234.50");
    expect(money(-50)).toBe("−$50.00");
  });
  it("formats percentages", () => expect(pct(0.7, 1)).toBe("70.0%"));
  it("formats negative percentages with a true minus sign", () => {
    expect(pct(-0.094, 1)).toBe("−9.4%");
    expect(pct(-0.00001, 1)).toBe("0.0%");
  });
  it("formats coverage ratios half up", () => {
    expect(ratioX(1.2495)).toBe("1.25x");
    expect(ratioX(1.3121)).toBe("1.31x");
    expect(ratioX(-0.5)).toBe("−0.50x");
  });
  it("formats plain decimals like Python's format(), ties to even", () => {
    // Expected values are Python 3.12 format() output (minus shown as a true minus).
    const cases: [number, number, string][] = [
      [-1.25, 1, "−1.2"], [0.125, 2, "0.12"], [2.675, 2, "2.67"], [0.375, 2, "0.38"],
      [12, 1, "12.0"], [0.08481349, 6, "0.084813"], [1e-7, 6, "0.000000"],
      [9.5, 0, "10"], [10.5, 0, "10"], [45313.8 / 7552.3, 1, "6.0"],
    ];
    for (const [x, n, want] of cases) expect(fixed(x, n)).toBe(want);
    expect(fixed(-0.01, 1)).toBe("0.0");
  });
});
