/**
 * Model Credit Policy limits used by the core formulas, each tagged with its rule ID.
 * Values come only from docs/credit-policy/model-credit-policy.md (snapshot 21 Nov 2026)
 * and formulas/core/reference/library_source.py. Do not add a limit that is not in either.
 * Model policy for training - not for live lending decisions.
 */

export type Tier = 0 | 1 | 2 | 3;

/** CORE-BOR-11: liquid-asset haircuts (F-CORE-24). Unused credit lines, crypto and business equity count 0%. */
export const LIQUIDITY_HAIRCUTS = { cash: 1.0, securities: 0.7, retirement: 0.7, creditLines: 0 } as const;

/** CORE-BOR-12: post-closing liquidity (F-CORE-25) = max(10% × commitment, 6 months' interest) + 5% × other open commitments. */
export const POST_CLOSING_LIQUIDITY = { commitmentShare: 0.1, interestMonths: 6, otherCommitmentsShare: 0.05 } as const;

/** CORE-BOR-15: experience lookback (months) and minimum ownership. Exactly 36 months counts (D-CONV-03). */
export const EXPERIENCE = { lookbackMonths: 36, minOwnership: 0.2 } as const;

/** CORE-BOR-16: experience tiers by qualifying-project count. Tier 0 = 0; Tier 1 = 1-4; Tier 2 = 5-9; Tier 3 = 10+. */
export const EXPERIENCE_TIER_MIN_COUNT: Readonly<Record<Tier, number>> = { 0: 0, 1: 1, 2: 5, 3: 10 };

/** CORE-PRC-02: RTL pricing grid (illustrative course figures) used by F-CORE-28. */
export const RTL_GRID = {
  baseRate: { 0: 0.115, 1: 0.1075, 2: 0.1, 3: 0.095 } as Readonly<Record<Tier, number>>,
  /** Qualifying FICO 680-699. */
  ficoAdjuster: { min: 680, max: 699, add: 0.005 },
  /** Leverage within 2.5 points of the product maximum. */
  leverageAdjuster: 0.0025,
  /** Ground-up construction. */
  groundUpAdjuster: 0.0075,
  /** Final rate must stay within 8.50%-12.75%. */
  band: { min: 0.085, max: 0.1275 },
} as const;

/** CORE-SVC-03: default interest = note rate + 5.00%, capped by state usury (F-CORE-31). */
export const DEFAULT_RATE_ADD = 0.05;

/** CORE-VAL-02: appraisal effective date no more than 120 days before closing (F-CORE-36). */
export const APPRAISAL_MAX_AGE_DAYS = 120;

/** CORE-CONC-01: aggregate sponsor exposure caps (F-CORE-29) by experience tier. Above these, committee only. */
export const SPONSOR_EXPOSURE_CAPS: Readonly<Record<Tier, { amount: number; openLoans: number }>> = {
  0: { amount: 1_000_000, openLoans: 2 },
  1: { amount: 3_000_000, openLoans: 5 },
  2: { amount: 7_500_000, openLoans: 10 },
  3: { amount: 15_000_000, openLoans: 20 },
};
