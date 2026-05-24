import { type Locator, type Page } from '@playwright/test';

export class TTAcart{
    readonly page: Page;
    readonly removeBackpack: Locator;
    readonly removeTTABikeLight: Locator;
    readonly continueShoppingLink: Locator;
    readonly checkoutButton: Locator;


 constructor(page: Page) {
        this.page = page;
        this.removeBackpack = page.locator('[data-test="remove-tta-practice-backpack"]');
        this.removeTTABikeLight= page.locator('[data-test="remove-tta-bike-light"]');
        this.continueShoppingLink = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
 }


  async removeFewItems() {
        await this.removeBackpack.click();
        await this.removeTTABikeLight.click();
  }

  async continueShopping() {
        await this.continueShoppingLink.click();
  }

  async checkoutCart() {
        await this.checkoutButton.click();
  }

}