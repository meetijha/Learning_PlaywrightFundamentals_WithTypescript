// test one browser with multiple contexts

import {chromium, Browser, BrowserContext, Page, test} from "@playwright/test";


test("One Browser Multiple Contexts", async () => {

    let browser:Browser= await chromium.launch({headless: false});
    console.log("Browser launched");

    // Context 1- Admin- Context means new incognito window, fresh session, isolated cookies
    
    let adminContext: BrowserContext= await browser.newContext();
    console.log("Admin Context created", adminContext);

    let adminPage: Page= await adminContext.newPage();
    console.log("Admin Page opened");

    await adminPage.goto("https://app.vwo.com/#login");
    console.log("Admin URL:", adminPage.url());

    // Context 2- Guest
    let guestContext: BrowserContext= await browser.newContext();
    console.log("Guest Context created", guestContext);

    let guestPage: Page= await guestContext.newPage();
    console.log("Guest Page opened");

    await guestPage.goto("https://app.vwo.com/#dashboard/home");
    console.log("Guest URL:", guestPage.url());

    // Cleanup - reverse order of creation
    await adminContext.close();
    await guestContext.close();
    await browser.close();

});