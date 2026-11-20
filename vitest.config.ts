import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["formulas/**/*.test.ts", "calculators/src/**/*.test.{ts,tsx}"],
    exclude: ["**/node_modules/**", "calculators/e2e/**"],
  },
});
