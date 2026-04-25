import { test, expect } from "@playwright/test";

test("Invalid Login validation", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    await page.getByRole("textbox", { name: "Email address" }).fill("admin");
    await page.getByRole("textbox", { name: "Password" }).fill("pass123");

    // With only name: Sign in 4 elements are getting matched, so we need to use exact: true to match the exact element with name: Sign in
    // Can see all 4 element xpath in report generated after test execution
    
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    let error_message = page.locator('#js-notification-box-msg');

    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});