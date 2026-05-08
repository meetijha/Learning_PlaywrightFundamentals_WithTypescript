// open this - https://app.thetestingacademy.com/playwright/webtable
// Search  Kabir, Verify that it is visible and checkbox it also, 

import { test, expect, Page } from '@playwright/test';

test('Verify if a name is visible and checked in a Web Table', async({page})=>{

const BASE_URL="https://app.thetestingacademy.com/playwright/webtable";

await page.goto(BASE_URL);
const usernameRow= page.locator("tr[data-username='Kabir.Khan']");
await expect (usernameRow.locator('td', { hasText: 'Kabir.Khan' })).toBeVisible();

await usernameRow.locator('td').first().click();
await expect (usernameRow.locator("input[type='checkbox']")).toBeChecked();
});