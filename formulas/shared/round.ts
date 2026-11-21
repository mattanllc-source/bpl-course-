/**
 * Rounding and display helpers that match the Python reference scripts
 * (Decimal(str(x)).quantize(..., ROUND_HALF_UP)).
 * Model policy for training - not for live lending decisions.
 */

const MINUS = "−"; // true minus sign (U+2212) for every negative display

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
  return (v < 0 ? `${MINUS}$` : "$") + s;
}

/** Ratio shown as a percentage with n decimals, half up, e.g. pct(0.7, 1) → "70.0%", pct(-0.094, 1) → "−9.4%". */
export function pct(ratio: number, n: number): string {
  const v = roundHalfUp(ratio * 100, n);
  return `${v < 0 ? MINUS : ""}${Math.abs(v).toFixed(n)}%`;
}

/** Coverage ratio with two decimals and "x", half up, e.g. ratioX(1.2495) → "1.25x" (matches the script's xx). */
export function ratioX(x: number): string {
  const v = roundHalfUp(x, 2);
  return `${v < 0 ? MINUS : ""}${Math.abs(v).toFixed(2)}x`;
}

/**
 * Plain number with n decimals, e.g. fixed(0.08481349, 6) → "0.084813".
 * Matches Python f"{x:.nf}", which the scripts use for loan constants, months and grid rates.
 * Python rounds the exact binary value and sends exact ties to even (1.25 → "1.2"), so this is
 * deliberately not roundHalfUp, and not toFixed either (toFixed sends ties up: 1.25 → "1.3").
 */
export function fixed(x: number, n: number): string {
  if (!Number.isFinite(x)) throw new RangeError(`not a finite number: ${x}`);
  if (!Number.isInteger(n) || n < 0 || n > 20) throw new RangeError("decimals must be an integer 0-20");
  const abs = Math.abs(x);
  if (abs >= 1e21) throw new RangeError(`too large to format: ${x}`);
  // toFixed(100) is the exact decimal expansion of any double in this range we use.
  const [ip, fp] = abs.toFixed(100).split(".");
  let digits = BigInt(ip + fp.slice(0, n));
  const next = fp[n];
  const tailNonZero = /[1-9]/.test(fp.slice(n + 1));
  if (next > "5" || (next === "5" && (tailNonZero || digits % 2n === 1n))) digits += 1n;
  const s = digits.toString().padStart(n + 1, "0");
  const out = n > 0 ? `${s.slice(0, -n)}.${s.slice(-n)}` : s;
  return (x < 0 && digits !== 0n ? MINUS : "") + out;
}
