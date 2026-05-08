import { test, expect } from "@playwright/test";

test("Swiggy - Get high rated restaurants", async ({ page }) => {
  await page.goto("https://www.swiggy.com/");

  // Enter Location
  await page.getByPlaceholder("Enter your delivery location").fill("Bhubaneswar");
  await page.keyboard.press("Enter");
  await page.getByPlaceholder("Search for restaurant, item or more").fill("Roll");
  await page.keyboard.press("Enter");

  await page.waitForSelector('[data-testid="search-pl-dish-first-v2-card"]');
  let cards= page.locator('[data-testid="search-pl-dish-first-v2-card"]');
  const count= await cards.count();

  for(let i=0;i<count;i++)
  {
    const name= cards.nth(i).
  }

});