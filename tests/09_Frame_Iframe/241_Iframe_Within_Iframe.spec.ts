
import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Iframe within Iframe test', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    let frame3: FrameLocator = frame2.frameLocator('#pact3');

    await frame1.locator('#inp_val').fill("Coding");
    await frame2.locator('#jex').fill("Still Coding");
    await frame3.locator('#glaf').fill("Goals");

    const headerText = await page.getByText("Free Tools").innerText();
    console.log("Header text: ", headerText);

    await page.waitForTimeout(5000);

});