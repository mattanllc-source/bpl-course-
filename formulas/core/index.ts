/**
 * Core formulas (F-CORE-NN). Each function mirrors the Formula Library entry of the same ID
 * and formulas/core/reference/library_source.py. Keep full precision; round only for display.
 * Model policy for training - not for live lending decisions.
 */

/** F-CORE-01: Interest-only payment, Actual/360. balance × rate ÷ 360 × days. */
export function interestOnly(balance: number, annualRate: number, days: number): number {
  assertNonNegative({ balance, annualRate, days });
  return (balance * annualRate) / 360 * days;
}

/** F-CORE-02: Level monthly P&I payment. L × i ÷ (1 − (1 + i)^−n), i = rate ÷ 12. */
export function amortizingPayment(loan: number, annualRate: number, months: number): number {
  assertNonNegative({ loan, annualRate });
  if (!(months > 0)) throw new RangeError("months must be > 0");
  const i = annualRate / 12;
  if (i === 0) return loan / months;
  return (loan * i) / (1 - (1 + i) ** -months);
}

/** F-CORE-14: Loan-to-value. On a purchase, value = lower of price and appraisal. */
export function ltv(loan: number, appraisal: number, purchasePrice?: number): number {
  const value = purchasePrice === undefined ? appraisal : Math.min(purchasePrice, appraisal);
  if (!(value > 0)) throw new RangeError("value must be > 0");
  return loan / value;
}

/** F-CORE-15: Loan-to-cost. Total loan commitment ÷ total project cost. */
export function ltc(commitment: number, totalCost: number): number {
  if (!(totalCost > 0)) throw new RangeError("total cost must be > 0");
  return commitment / totalCost;
}

function assertNonNegative(vals: Record<string, number>): void {
  for (const [k, v] of Object.entries(vals)) {
    if (!(v >= 0)) throw new RangeError(`${k} must be ≥ 0`);
  }
}
