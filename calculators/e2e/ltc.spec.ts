import { expect, test } from "@playwright/test";

test("Maple Run LTC shows 85.00% and updates", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("LTC result")).toHaveText("85.00%");
  await page.getByLabel("Total project cost (USD)").fill("390000");
  await expect(page.getByLabel("LTC result")).toHaveText("87.18%");
});
