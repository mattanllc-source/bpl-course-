/**
 * Core formulas (F-CORE-NN). Each function mirrors the Formula Library entry of the same ID
 * and formulas/core/reference/library_source.py. Keep full precision; round only for display.
 *
 * Units: rates and percentages are decimals (7.65% → 0.0765). "Points" arguments are a point
 * count (1.50 points → 1.5), as the Library quotes them. Money is US dollars.
 * Invalid inputs (negative amounts, zero denominators) throw RangeError.
 *
 * Model policy for training - not for live lending decisions.
 */

import {
  APPRAISAL_MAX_AGE_DAYS,
  DEFAULT_RATE_ADD,
  EXPERIENCE,
  EXPERIENCE_TIER_MIN_COUNT,
  LIQUIDITY_HAIRCUTS,
  LOAN_ROUNDING_INCREMENT,
  POST_CLOSING_LIQUIDITY,
  RTL_GRID,
  type Tier,
} from "./policy";

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

/**
 * F-CORE-03: Annual debt service (ADS). Monthly payment × 12 (amortizing), or
 * loan × annual rate (interest-only, underwriting basis).
 */
export function annualDebtService(
  input: { monthlyPayment: number } | { ioLoan: number; annualRate: number },
): number {
  if ("monthlyPayment" in input) {
    assertNonNegative({ monthlyPayment: input.monthlyPayment });
    return input.monthlyPayment * 12;
  }
  assertNonNegative({ ioLoan: input.ioLoan, annualRate: input.annualRate });
  return input.ioLoan * input.annualRate;
}

/** F-CORE-04: Loan constant. ADS ÷ loan = 12 × i ÷ (1 − (1 + i)^−n); rate 0 → 12 ÷ n. */
export function loanConstant(annualRate: number, months: number): number {
  assertNonNegative({ annualRate });
  if (!(months > 0)) throw new RangeError("months must be > 0");
  const i = annualRate / 12;
  if (i === 0) return 12 / months;
  return (12 * i) / (1 - (1 + i) ** -months); // same operation order as the reference script
}

/** F-CORE-05: Per diem interest. Loan × annual rate ÷ 360. */
export function perDiem(balance: number, annualRate: number): number {
  assertNonNegative({ balance, annualRate });
  return (balance * annualRate) / 360;
}

/** F-CORE-06: Origination points. Commitment × points ÷ 100. */
export function originationPoints(commitment: number, points: number): number {
  assertNonNegative({ commitment, points });
  return (commitment * points) / 100;
}

/** F-CORE-07: Gross potential rent (GPR). Σ scheduled monthly rent per unit × 12. */
export function grossPotentialRent(monthlyRents: readonly number[]): number {
  let total = 0;
  for (const r of monthlyRents) {
    assertNonNegative({ monthlyRent: r });
    total += r;
  }
  return total * 12;
}

/** F-CORE-08: Vacancy and credit loss. GPR × vacancy rate. */
export function vacancyLoss(gpr: number, vacancyRate: number): number {
  assertNonNegative({ gpr, vacancyRate });
  if (vacancyRate > 1) throw new RangeError("vacancyRate must be ≤ 1");
  return gpr * vacancyRate;
}

/** F-CORE-09: Effective gross income (EGI). GPR − vacancy and credit loss + other income. */
export function effectiveGrossIncome(gpr: number, vacancy: number, otherIncome: number): number {
  assertNonNegative({ gpr, vacancy, otherIncome });
  if (vacancy > gpr) throw new RangeError("vacancy must be ≤ GPR");
  return gpr - vacancy + otherIncome;
}

/** F-CORE-10: Net operating income (NOI). EGI − operating expenses. May be negative. */
export function netOperatingIncome(egi: number, operatingExpenses: number): number {
  assertNonNegative({ egi, operatingExpenses });
  return egi - operatingExpenses;
}

/** F-CORE-11: Debt service coverage ratio (DSCR). Income ÷ annual debt service. Negative income → negative DSCR. */
export function dscr(income: number, annualDebtService: number): number {
  assertFinite({ income });
  assertPositive({ annualDebtService });
  return income / annualDebtService;
}

/** F-CORE-12: Break-even occupancy. (OpEx + ADS) ÷ GPR. Above 1 → cannot break even fully leased. */
export function breakEvenOccupancy(operatingExpenses: number, annualDebtService: number, gpr: number): number {
  assertNonNegative({ operatingExpenses, annualDebtService });
  assertPositive({ gpr });
  return (operatingExpenses + annualDebtService) / gpr;
}

/** F-CORE-13: Capitalization (cap) rate. NOI ÷ value. Negative NOI gives a negative rate. */
export function capRate(noi: number, value: number): number {
  assertFinite({ noi });
  assertPositive({ value });
  return noi / value;
}

/** F-CORE-13 (inverse): Value from a cap rate. NOI ÷ cap rate. */
export function valueFromCapRate(noi: number, rate: number): number {
  assertNonNegative({ noi });
  assertPositive({ rate });
  return noi / rate;
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

/** F-CORE-16: Debt yield. NOI ÷ loan. Negative NOI gives a negative yield. */
export function debtYield(noi: number, loan: number): number {
  assertFinite({ noi });
  assertPositive({ loan });
  return noi / loan;
}

/** F-CORE-17: Maximum loan by DSCR. NOI ÷ minimum DSCR ÷ loan constant; NOI ≤ 0 → $0. */
export function maxLoanByDscr(noi: number, minDscr: number, loanConstant: number): number {
  assertFinite({ noi });
  assertPositive({ minDscr, loanConstant });
  return Math.max(0, noi / minDscr / loanConstant);
}

/** F-CORE-18: Maximum loan by debt yield. NOI ÷ minimum debt yield; NOI ≤ 0 → $0. */
export function maxLoanByDebtYield(noi: number, minDebtYield: number): number {
  assertFinite({ noi });
  assertPositive({ minDebtYield });
  return Math.max(0, noi / minDebtYield);
}

/**
 * F-CORE-19: Maximum loan. floor(min(test results) ÷ $1,000) × $1,000: the lowest sizing test,
 * taken at full precision, then rounded down to the nearest $1,000 (CORE-PRC-05). Any test ≤ $0 → no loan.
 */
export function maxLoan(testResults: readonly number[]): number {
  if (testResults.length === 0) throw new RangeError("at least one sizing test is required");
  for (const t of testResults) assertFinite({ test: t });
  const lowest = Math.min(...testResults);
  if (lowest <= 0) return 0;
  return Math.floor(lowest / LOAN_ROUNDING_INCREMENT) * LOAN_ROUNDING_INCREMENT;
}

/** F-CORE-20: Interest reserve (straight-line). Balance × rate ÷ 360 × actual days. */
export function interestReserve(balance: number, annualRate: number, days: number): number {
  return interestOnly(balance, annualRate, days);
}

/** F-CORE-21: Months of reserves. Adjusted liquid assets ÷ monthly payment. Negative liquidity → negative months. */
export function monthsOfReserves(adjustedLiquidAssets: number, monthlyPayment: number): number {
  assertFinite({ adjustedLiquidAssets });
  assertPositive({ monthlyPayment });
  return adjustedLiquidAssets / monthlyPayment;
}

/** F-CORE-22: Extension fee. Commitment (or balance, per the note) × fee rate. */
export function extensionFee(amount: number, feeRate: number): number {
  assertNonNegative({ amount, feeRate });
  return amount * feeRate;
}

/**
 * F-CORE-23: Loss severity. (Balance + costs − net recovery) ÷ balance.
 * A negative severity is a gain; the reported loss is floored at 0% (Library edge case).
 */
export function lossSeverity(
  balance: number,
  costs: number,
  netRecovery: number,
): { severity: number; reportedLoss: number } {
  assertNonNegative({ costs, netRecovery });
  assertPositive({ balance });
  const severity = (balance + costs - netRecovery) / balance;
  return { severity, reportedLoss: Math.max(0, severity) };
}

/**
 * F-CORE-24: Adjusted liquid assets. Cash × 1.00 + securities × 0.70 + vested retirement × 0.70
 * + unused credit lines × 0 − cash to close (haircuts per CORE-BOR-11). May be negative.
 */
export function adjustedLiquidAssets(a: {
  cash: number;
  securities: number;
  retirement: number;
  creditLines?: number;
  cashToClose: number;
}): number {
  const creditLines = a.creditLines ?? 0;
  assertNonNegative({ cash: a.cash, securities: a.securities, retirement: a.retirement, creditLines, cashToClose: a.cashToClose });
  const h = LIQUIDITY_HAIRCUTS;
  return a.cash * h.cash + a.securities * h.securities + a.retirement * h.retirement + creditLines * h.creditLines - a.cashToClose;
}

/**
 * F-CORE-25: Required post-closing liquidity. max(10% × commitment, 6 months' nominal interest)
 * + 5% × other open commitments with us (CORE-BOR-12).
 */
export function requiredLiquidity(commitment: number, annualRate: number, otherOpenCommitments = 0): number {
  assertNonNegative({ commitment, annualRate, otherOpenCommitments });
  const p = POST_CLOSING_LIQUIDITY;
  return Math.max(p.commitmentShare * commitment, (commitment * annualRate) / 12 * p.interestMonths)
    + p.otherCommitmentsShare * otherOpenCommitments;
}

/** F-CORE-26: Adjusted net worth. Total assets − total liabilities − equity in the subject property. */
export function adjustedNetWorth(totalAssets: number, totalLiabilities: number, subjectEquity: number): number {
  assertNonNegative({ totalAssets, totalLiabilities, subjectEquity });
  return totalAssets - totalLiabilities - subjectEquity;
}

/**
 * F-CORE-27: Experience count and tier. Count = completed projects in the last 36 months with ownership ≥ 20%
 * (CORE-BOR-15; exactly 36 months and exactly 20% both count). Tier 0 / 1-4 / 5-9 / 10+ (CORE-BOR-16).
 */
export function experienceTier(
  projects: readonly { monthsSinceCompletion: number; ownership: number }[],
): { count: number; tier: Tier } {
  let count = 0;
  for (const p of projects) {
    assertNonNegative({ monthsSinceCompletion: p.monthsSinceCompletion, ownership: p.ownership });
    if (p.ownership > 1) throw new RangeError("ownership must be ≤ 1");
    if (p.monthsSinceCompletion <= EXPERIENCE.lookbackMonths && p.ownership >= EXPERIENCE.minOwnership) count++;
  }
  const tiers: Tier[] = [3, 2, 1, 0];
  const tier = tiers.find((t) => count >= EXPERIENCE_TIER_MIN_COUNT[t]) ?? 0;
  return { count, tier };
}

/**
 * F-CORE-28: Note rate (RTL grid). Tier base + FICO adjuster + leverage adjuster + ground-up adjuster,
 * bounded 8.500%-12.750% (CORE-PRC-02).
 */
export function noteRate(a: { tier: Tier; fico: number; nearMaxLeverage: boolean; groundUp: boolean }): number {
  const g = RTL_GRID;
  const base = g.baseRate[a.tier];
  if (base === undefined) throw new RangeError("tier must be 0-3");
  if (!Number.isInteger(a.fico) || a.fico < 300 || a.fico > 850) throw new RangeError("fico must be an integer 300-850");
  const r = base
    + (a.fico >= g.ficoAdjuster.min && a.fico <= g.ficoAdjuster.max ? g.ficoAdjuster.add : 0)
    + (a.nearMaxLeverage ? g.leverageAdjuster : 0)
    + (a.groundUp ? g.groundUpAdjuster : 0);
  return Math.min(Math.max(r, g.band.min), g.band.max);
}

/** F-CORE-29: Aggregate sponsor exposure. New commitment + all open commitments to the sponsor and affiliates. */
export function sponsorExposure(
  newCommitment: number,
  openCommitments: readonly number[] = [],
): { exposure: number; loanCount: number } {
  assertNonNegative({ newCommitment });
  let exposure = newCommitment;
  for (const c of openCommitments) {
    assertNonNegative({ openCommitment: c });
    exposure += c;
  }
  return { exposure, loanCount: openCommitments.length + 1 };
}

/** F-CORE-30: Bucket concentration. Commitments in the bucket ÷ total commitments for that base. */
export function bucketConcentration(bucket: number, base: number): number {
  assertNonNegative({ bucket });
  assertPositive({ base });
  if (bucket > base) throw new RangeError("bucket must be ≤ base");
  return bucket / base;
}

/**
 * F-CORE-31: Default interest. Balance × (note rate + 5.00%) ÷ 360 × days in default (CORE-SVC-03).
 * Pass the state usury cap, if any, to charge the lower of the two [VERIFY: State Law Table].
 */
export function defaultInterest(balance: number, noteRate: number, days: number, usuryCap?: number): number {
  assertNonNegative({ balance, noteRate, days });
  if (usuryCap !== undefined) assertNonNegative({ usuryCap });
  const rate = usuryCap === undefined ? noteRate + DEFAULT_RATE_ADD : Math.min(noteRate + DEFAULT_RATE_ADD, usuryCap);
  return interestOnly(balance, rate, days);
}

/** F-CORE-32: Payoff amount. Principal + accrued interest (Actual/360, payoff day excluded) + exit fee + unpaid fees. */
export function payoffAmount(principal: number, annualRate: number, days: number, exitFee = 0, unpaidFees = 0): number {
  assertNonNegative({ exitFee, unpaidFees });
  return principal + interestOnly(principal, annualRate, days) + exitFee + unpaidFees;
}

/** F-CORE-33: Prepaid (odd-days) interest. Funded amount × rate ÷ 360 × days to period end (funding day counts). */
export function prepaidInterest(funded: number, annualRate: number, days: number): number {
  return interestOnly(funded, annualRate, days);
}

/** F-CORE-34: Insurance-to-value ratio. Hazard coverage limit ÷ replacement cost. */
export function insuranceToValue(coverageLimit: number, replacementCost: number): number {
  assertNonNegative({ coverageLimit });
  assertPositive({ replacementCost });
  return coverageLimit / replacementCost;
}

/** F-CORE-35: Monthly tax and insurance escrow. (Taxes + insurance) ÷ 12; closing cushion = 2 × deposit. */
export function escrowDeposit(annualTaxes: number, annualInsurance: number): { monthly: number; cushion: number } {
  assertNonNegative({ annualTaxes, annualInsurance });
  const monthly = (annualTaxes + annualInsurance) / 12;
  return { monthly, cushion: 2 * monthly };
}

/**
 * F-CORE-36: Appraisal age. Closing date − appraisal effective date, in actual calendar days.
 * Passes at no more than 120 days (CORE-VAL-02). Dates are ISO "YYYY-MM-DD".
 */
export function appraisalAge(effectiveDate: string, closingDate: string): { days: number; pass: boolean } {
  const days = Math.round((isoDay(closingDate) - isoDay(effectiveDate)) / 86_400_000);
  if (days < 0) throw new RangeError("effective date must not be after closing");
  return { days, pass: days <= APPRAISAL_MAX_AGE_DAYS };
}

/**
 * F-CORE-37: Coinsurance recovery. min(1, carried ÷ (coinsurance % × replacement cost)) × loss − deductible,
 * floored at $0 and capped at the limit carried.
 */
export function coinsuranceRecovery(
  limitCarried: number,
  replacementCost: number,
  coinsurance: number,
  loss: number,
  deductible: number,
): number {
  assertNonNegative({ limitCarried, loss, deductible });
  assertPositive({ replacementCost, coinsurance });
  if (coinsurance > 1) throw new RangeError("coinsurance must be ≤ 1");
  const ratio = Math.min(1, limitCarried / (replacementCost * coinsurance));
  return Math.max(0, Math.min(limitCarried, ratio * loss - deductible));
}

/** F-CORE-40: All-in annual cost screen. Note rate + (points % + other lender fees %) ÷ term in years. */
export function allInCost(noteRate: number, points: number, otherFeesRate: number, termMonths: number): number {
  assertNonNegative({ noteRate, points, otherFeesRate });
  assertPositive({ termMonths });
  return noteRate + (points / 100 + otherFeesRate) / (termMonths / 12);
}

/**
 * F-CORE-41: Net funding wire. Initial funding − points − lender fees − prepaid interest − lender-held escrows.
 * A negative wire means the deal is mis-built (Library: stop and recheck), so it throws.
 */
export function netFundingWire(
  initialFunding: number,
  points: number,
  lenderFees: number,
  prepaid: number,
  escrows: number,
): number {
  assertNonNegative({ initialFunding, points, lenderFees, prepaid, escrows });
  const wire = initialFunding - points - lenderFees - prepaid - escrows;
  if (wire < 0) throw new RangeError("negative wire: the deal is mis-built; recheck sources and uses");
  return wire;
}

/**
 * F-CORE-42: REO carrying value and charge-off. Carrying value = min(loan, fair value − cost to sell);
 * charge-off = max(0, loan − (fair value − cost to sell)) (CORE-DEF-06).
 */
export function reoCarryingValue(
  recordedLoan: number,
  fairValue: number,
  costToSell: number,
): { carryingValue: number; chargeOff: number } {
  assertNonNegative({ recordedLoan, fairValue, costToSell });
  if (costToSell > fairValue) throw new RangeError("cost to sell must be ≤ fair value");
  const net = fairValue - costToSell;
  return { carryingValue: Math.min(recordedLoan, net), chargeOff: Math.max(0, recordedLoan - net) };
}

/** F-CORE-43: Bucket headroom. (cap × total − bucket) ÷ (1 − cap). Negative → bucket already over its cap. */
export function bucketHeadroom(cap: number, totalCommitments: number, bucketCommitments: number): number {
  assertNonNegative({ cap, totalCommitments, bucketCommitments });
  if (!(cap < 1)) throw new RangeError("cap must be < 1");
  return (cap * totalCommitments - bucketCommitments) / (1 - cap);
}

/**
 * F-CORE-44: Cash-on-cash return. (NOI − annual debt service) ÷ total cash invested.
 * Negative cash flow gives a negative return; zero or negative cash invested is undefined, so it throws.
 */
export function cashOnCash(noi: number, annualDebtService: number, cashInvested: number): number {
  assertFinite({ noi });
  assertNonNegative({ annualDebtService });
  assertPositive({ cashInvested });
  return (noi - annualDebtService) / cashInvested;
}

/** Parse an ISO "YYYY-MM-DD" date as UTC midnight, in milliseconds. */
function isoDay(s: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) throw new RangeError(`date must be YYYY-MM-DD: ${s}`);
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const t = Date.UTC(y, mo - 1, d);
  const back = new Date(t);
  if (back.getUTCFullYear() !== y || back.getUTCMonth() !== mo - 1 || back.getUTCDate() !== d) {
    throw new RangeError(`not a real date: ${s}`);
  }
  return t;
}

function assertFinite(vals: Record<string, number>): void {
  for (const [k, v] of Object.entries(vals)) {
    if (!Number.isFinite(v)) throw new RangeError(`${k} must be a finite number`);
  }
}

function assertNonNegative(vals: Record<string, number>): void {
  for (const [k, v] of Object.entries(vals)) {
    if (!(v >= 0) || !Number.isFinite(v)) throw new RangeError(`${k} must be ≥ 0`);
  }
}

function assertPositive(vals: Record<string, number>): void {
  for (const [k, v] of Object.entries(vals)) {
    if (!(v > 0) || !Number.isFinite(v)) throw new RangeError(`${k} must be > 0`);
  }
}
