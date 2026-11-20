/**
 * Rounding and display helpers that match the Python reference scripts
 * (Decimal(str(x)).quantize(..., ROUND_HALF_UP)).
 * Model policy for training - not for live lending decisions.
 */

/** Round half away from zero at `dp` decimals, working on the decimal string of x. */
export function roundHalfUp(x: number, dp: number): number {
  if (!Number.isFinite(x)) throw new RangeError(`not a finite number: ${x}`);
  const sign = x < 0 ? -1 : 1;
  const [mant, exp = "0"] = Math.abs(x).toString().split("e");
  const shifted = Math.round(Number(`${mant}e${Number(exp) + dp}`));
  const [m2, e2 = "0"] = shifted.toString().split("e");
  return sign * Number(`${m2}e${Number(e2) - dp}`);
}

/** Money to the cent, e.g. $4,166.67 or −$1,250.00 (true minus sign). */
export function money(x: number): string {
  const v = roundHalfUp(x, 2);
  const s = Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (v < 0 ? "−$" : "$") + s;
}

/** Ratio shown as a percentage with n decimals, e.g. pct(0.7, 1) → "70.0%". */
export function pct(ratio: number, n: number): string {
  return `${roundHalfUp(ratio * 100, n).toFixed(n)}%`;
}
