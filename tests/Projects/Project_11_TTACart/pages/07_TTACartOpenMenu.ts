import { type Locator, type Page } from '@playwright/test';

export class TTACatOpenMenu {
    readonly page: Page;
    readonly openMenuButton: Locator;
    readonly allItemsLink: Locator;
    readonly aboutLink : Locator;
    readonly logoutLink : Locator;
    readonly resetAppStateLink : Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.openMenuButton = page.locator('[data-test="open-menu"]');
        this.allItemsLink = page.locator('[data-test="inventory-sidebar-link"]');
        this.aboutLink = page.locator('[data-test="about-sidebar-link"]');
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
        this.resetAppStateLink = page.locator('[data-test="reset-sidebar-link"]');
    }


    async openMenu() {
        await this.openMenuButton.click();
    }
    
    async logout() {
        return await this.logoutLink.click();
    }

    async reset() {
        await this.resetAppStateLink.click();
    }

    async getAllItems()
    {
        await this.allItemsLink.click();
    }

}