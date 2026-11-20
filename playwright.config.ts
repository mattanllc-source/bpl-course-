import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "calculators/e2e",
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: "http://localhost:5173" },
  // PW_CHANNEL=chrome uses an installed Google Chrome when Playwright browsers cannot be downloaded.
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], channel: process.env.PW_CHANNEL } }],
  webServer: {
    command: "npm run dev -w @bpl/calculators -- --port 5173 --strictPort",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
  },
});
