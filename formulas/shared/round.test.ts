import { describe, expect, it } from "vitest";
import { money, pct, roundHalfUp } from "./round";

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
});
