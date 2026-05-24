import { type Locator, type Page } from '@playwright/test';

export class TTACartCheckoutComplete {
    readonly page: Page;
    readonly title: Locator;
    readonly backHomeButton : Locator;
    
    

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }


    async getTitle() {
        return await this.title.textContent();
    }

    async goBackHome() {
        await this.backHomeButton.click();
    }

}