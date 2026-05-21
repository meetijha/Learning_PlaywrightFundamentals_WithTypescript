import { test, expect } from '@playwright/test';
import profiledata from "./Data/register.json";

test.describe('DDT JSON', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of profiledata) {

        test(`Filling QA form for : ${data.firstName}`, async ({ page }) => {
            await page.getByTestId('first-name').fill(data.firstName);
            await page.getByTestId('last-name').fill(data.lastName);
            await page.getByTestId('profile-submit').click();
        });
            
    }

});