// open this - https://app.thetestingacademy.com/playwright/webtable
// Search  Kabir, Verify that it is visible and checkbox it also, 

import { test, expect, Page } from '@playwright/test';

test('Verify if a name is visible and checked in a Web Table', async({page})=>{

const BASE_URL="https://app.thetestingacademy.com/playwright/webtable";

// Open website
await page.goto(BASE_URL);

// fill search box and press button to search
await page.getByLabel('Search employee table').fill('Kabir');
await page.getByRole('button', {name : 'Select Cloud QA'}).click();

//validate visibility
const usernameRow= page.locator("tr[data-username='Kabir.Khan']");
await expect (usernameRow.locator('td', { hasText: 'Kabir.Khan' })).toBeVisible();

// validate if checkbox is checked
await usernameRow.locator('td').first().click(); // one way to get checkbox locator
await expect (usernameRow.locator("input[type='checkbox']")).toBeChecked(); // another way

//validate if selected username appears
await expect(page.locator('.selected-output')).toContainText("Kabir.Khan");
});