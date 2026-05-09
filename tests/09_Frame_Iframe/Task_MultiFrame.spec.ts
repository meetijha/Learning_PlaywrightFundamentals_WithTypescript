
import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Iframe within Iframe test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    let frame3: FrameLocator = frame2.frameLocator('#pact3');

    await frame1.locator('#inp_val').fill("Playwright");
    await frame2.locator('#jex').fill("POM");
    await frame3.locator('#glaf').fill("Typescript");

    const headerText = await page.locator("h3").first().innerText();
    console.log("Header text", headerText);

    await page.waitForTimeout(5000);

});