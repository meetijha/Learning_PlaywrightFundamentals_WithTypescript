import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/01_TTACartLoginPage';
import { TtacartinventoryPage } from '../pages/02_TTACartInventoryPage';
import { TTAcart } from '../pages/03_TTACart';
import { TTACartCheckoutPageStepOne} from '../pages/04_TTACartCheckoutPage_Step_One';
import { TTACartCheckoutPageStepTwo } from '../pages/05_TTACartCheckoutpage_Step_Two';
import { TTACartCheckoutComplete } from '../pages/06_TTACartCheckoutComplete';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { TTACatOpenMenu } from '../pages/07_TTACartOpenMenu';

//dotenv.config();

dotenv.config({ path: path.resolve(__dirname, '../.env') });

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

const ttacartUsername = getRequiredEnv('TTACART_USERNAME');
const ttacartPassword = getRequiredEnv('TTACART_PASSWORD');

test.describe('TTA Cart Autoamtion', () => {


    test('Perform CRUD operations on TTA Cart', async ({ page }) => {

        // Page 1: Login Page.................................................
        const loginPage = new Loginpage(page);
        await loginPage.goto();
        await loginPage.login("username", "password");
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain("Epic sadface: Username and password do not match any user in this service");
        
        await loginPage.login(ttacartUsername, ttacartPassword);
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/inventory');

        // Page 2: Inventory Page................................................
        const ttacartinventoryPage = new TtacartinventoryPage(page);
        ttacartinventoryPage.sortProductsByName();
        let firstProductName = await ttacartinventoryPage.getFirstProductName();
        await expect(firstProductName).toContain("T-Shirt (Red)");

        //SORTING
        ttacartinventoryPage.sortProductsByNameReverse();
        await page.waitForTimeout(2000);
        firstProductName = await ttacartinventoryPage.getFirstProductName();
        await expect(firstProductName).toContain("TTA Practice Backpack");

        ttacartinventoryPage.sortProductsByPriceLowToHigh();
        await page.waitForTimeout(2000);
        firstProductName = await ttacartinventoryPage.getFirstProductName();
        await expect(firstProductName).toContain("TTA Junior Tester Onesie");

        ttacartinventoryPage.sortProductsByPriceHighToLow();
        await page.waitForTimeout(2000);
        firstProductName = await ttacartinventoryPage.getFirstProductName();
        await expect(firstProductName).toContain("TTA Fleece Jacket");

        // Add items to cart and go to cart page
        await ttacartinventoryPage.addAllItemsToCart();
        await ttacartinventoryPage.goToShoppingCart();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        
        // Page 3: Cart Page................................................
        const ttacartCartPage = new TTAcart(page);
        await ttacartCartPage.removeFewItems();
        await ttacartCartPage.checkoutCart();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one');

        // Page 4: Checkout Step One................................................
        const ttacartCheckout = new TTACartCheckoutPageStepOne(page);
        await ttacartCheckout.fillCheckoutPage();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');

        // Page 5: Checkout Step Two................................................
        const ttacartCheckoutStepTwo = new TTACartCheckoutPageStepTwo(page);
        await page.waitForTimeout(2000);
        const totalAmount = await ttacartCheckoutStepTwo.getTotalAmount();
        expect(totalAmount).toBe("Total: $97.16");
        await ttacartCheckoutStepTwo.finishCheckout();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-complete');

        // Page 6: Checkout Complete................................................
        const ttacartCheckoutComplete = new TTACartCheckoutComplete(page);
        const title = await ttacartCheckoutComplete.getTitle();
        expect(title).toBe("Checkout: Complete!");
        await ttacartCheckoutComplete.goBackHome();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/inventory');

        // Page 7: Open Menu................................................
        const ttacartOpenMenu = new TTACatOpenMenu(page);
        ttacartOpenMenu.openMenu();
        await ttacartOpenMenu.logout();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/');
    });
});
        
       