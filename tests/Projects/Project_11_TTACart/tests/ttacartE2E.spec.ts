import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/01_TTACartLoginPage';
import { TtacartinventoryPage } from '../pages/02_TTACartInventoryPage';
import { TTAcart } from '../pages/03_TTACart';
import { TTACartCheckoutPageStepOne} from '../pages/04_TTACartCheckoutPage_Step_One';
import { TTACartCheckoutPageStepTwo } from '../pages/05_TTACartCheckoutpage_Step_Two';
import { TTACartCheckoutComplete } from '../pages/06_TTACartCheckoutComplete';
import * as dotenv from 'dotenv';
import * as path from 'path';

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


    test('Login with valid credns', async ({ page }) => {
        const loginPage = new Loginpage(page);
        await loginPage.goto();
        await loginPage.login(ttacartUsername, ttacartPassword);


        const ttacartinventoryPage = new TtacartinventoryPage(page);
        await ttacartinventoryPage.addAllItemsToCart();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        
        await ttacartinventoryPage.goToShoppingCart();
        
        const ttacartCheckout = new TTACartCheckoutPageStepOne(page);
        await ttacartCheckout.fillCheckoutPage();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');


    });
});