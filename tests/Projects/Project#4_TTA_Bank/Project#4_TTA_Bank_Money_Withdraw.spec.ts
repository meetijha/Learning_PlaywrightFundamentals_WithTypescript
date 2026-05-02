import {test,expect} from "@playwright/test";

test('Check If Balance is refelcted after withdraw',async ({page})=>{

    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole('button', { name : 'Sign Up'}).click();

    // Fill the form and create account
    await page.getByPlaceholder('John Doe').fill("Meeti");
    await page.getByPlaceholder('you@example.com').fill("meeti@example.com");
    await page.locator("input[type='password']").fill("ThisIsNotAPassword");
    await page.getByRole('button', { name : 'Create Account'}).click();

    // Click on transfer funds and fill the details and click on transfer
    await page.getByRole('button', { name : 'Transfer Funds'}).click();
    await page.getByPlaceholder('0.00').fill("5000");
    await page.getByPlaceholder('e.g. Rent for October').fill("Rent");
    await page.getByRole('button', { name : 'Continue'}).click();

    //Confirm the transfer and click on confirm
    await page.getByRole('button', { name : 'Confirm Transfer'}).click();

    //Go to Dashboard again
    await page.getByRole('button', { name : 'Dashboard'}).click();

    // Validate the balance after transfer
    let balance= page.locator('//p[text()="Total Balance"]/following-sibling::h3');
    await expect(balance).toHaveText("$45,000.00");
    
});