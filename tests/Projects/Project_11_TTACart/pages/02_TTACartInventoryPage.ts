import { type Locator, type Page } from '@playwright/test';

export class TtacartinventoryPage {
    readonly page: Page;
    readonly addToCartReadTshirt: Locator;
    readonly addToCartTTABike:Locator
    readonly addTocartTTABoltTshirt: Locator;
    readonly addToCartTtaFleeceJacket: Locator;
    readonly addTocartTTAJuniorTesterOnesize: Locator;
    readonly addToCartTTAPracticeBackpack: Locator;
    
    readonly shoppingCartLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addToCartReadTshirt = page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]');
        this.addToCartTTABike= page.locator('[data-test="add-to-cart-tta-bike-light"]');
        this.addTocartTTABoltTshirt = page.locator('[data-test="add-to-cart-tta-bolt-tshirt"]');
        this.addToCartTtaFleeceJacket = page.locator('[data-test="add-to-cart-tta-fleece-jacket"]');
        this.addTocartTTAJuniorTesterOnesize = page.locator('[data-test="add-to-cart-tta-junior-tester-onesie"]');
        this.addToCartTTAPracticeBackpack = page.locator('[data-test="add-to-cart-tta-practice-backpack"]');
       
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');

        
    }

    async addAllItemsToCart() {
        await this.addToCartReadTshirt.click();
        await this.addToCartTTABike.click();
        await this.addTocartTTABoltTshirt.click();
        await this.addToCartTtaFleeceJacket.click();
        await this.addTocartTTAJuniorTesterOnesize.click();
        await this.addToCartTTAPracticeBackpack.click();
    }

    async goToShoppingCart() {
        await this.shoppingCartLink.click();
    }

    async sortProductsByName() {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('az');
    }

    async sortProductsByNameReverse() {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('za');
    }

    async sortProductsByPriceLowToHigh() {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    }

    async sortProductsByPriceHighToLow() {
        await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    }   

    async getFirstProductName() {
        return await this.page.locator('[data-test="inventory-item-name"]').first().textContent();
    }
}