// Print all items of 2nd Unordered list of the page https://awesomeqa.com/css

import { test, expect } from "@playwright/test";

test("Print all items in Unordered list", async ({ page }) => {

    await page.goto("https://awesomeqa.com/css");

    const reqUl= page.locator('ul').nth(1);
    const allLis = reqUl.locator('li');

    for(let i=0;i< await allLis.count(); i++){
        let li_ith = await allLis.nth(i).textContent();
        console.log(li_ith);
    }

});

// Output:
//HTML
//CSS
//PHP