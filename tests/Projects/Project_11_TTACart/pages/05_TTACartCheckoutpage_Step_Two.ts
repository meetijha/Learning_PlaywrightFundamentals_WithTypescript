import { type Locator, type Page } from '@playwright/test';

export class TTACartCheckoutPageStepTwo {
    readonly page: Page;
    readonly finishButton: Locator;
    readonly buttonCancel: Locator;
    readonly totalAmount: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
        this.buttonCancel = page.locator('[data-test="cancel"]');
        this.totalAmount = page.locator('[data-test="total-label"]');
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async cancelCheckout() {
        await this.buttonCancel.click();
    }

    async getTotalAmount() {
        return await this.totalAmount.innerText();
    }

}