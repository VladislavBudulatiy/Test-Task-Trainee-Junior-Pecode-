import type { Locator, Page } from '@playwright/test';

export class MonitorsPage {
    readonly page: Page;
    public itemFirstProductBasket: Locator;
    
    

    constructor(page: Page) {
        this.page = page;
        this.itemFirstProductBasket = page.locator(`(//*[name()='svg'])[49]`);
    }

    



    async clickItemFirstProductBasket(): Promise<void> {
        await this.itemFirstProductBasket.click();
    }

}
