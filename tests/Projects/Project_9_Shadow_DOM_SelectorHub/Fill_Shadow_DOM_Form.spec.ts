import {test, expect} from '@playwright/test';

test('Fill Shadow DOM Form', async ({ page }) => {
    
    test.setTimeout(60000);
    await page.goto("https://selectorshub.com/xpath-practice-page");

    // Fill the form inside the shadow DOM

    // Enter username - shadow root (open)
    await page.locator('#kils').fill("Meeti");

    //Enter pizza - shadow root (open)
    await page.locator('#pizza').fill("Farmhouse");

    // SHADOW ROOT (closed) - so cant be automated 
    // Enter Concept
    //await page.locator('#training').fill("Playwright");

    //Enter password
    //await page.locator('#pwd').fill("Password123");


    // WORKAROUND TO FILL 
    page.keyboard.press('Tab'); // to move to the next field
    await page.keyboard.type("Playwright");

    page.keyboard.press('Tab+Tab'); // to move to the next field
    await page.keyboard.type("Password123");

    await page.waitForTimeout(5000);

});
