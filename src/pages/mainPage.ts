import type { Locator, Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    public laptopsComputersButton: Locator;
    public laptopsButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.laptopsComputersButton = page.locator(`div[class='fat-wrap'] li:nth-child(1)`);
        this.laptopsButton = page.locator(`(//div[@class='tile-cats'])[1]`);
    }

    //нада удалити потом зараз хай буде
    getLaptopsComputersButton(): Locator {
        return this.laptopsComputersButton;
    }

    getComputersButton(): Locator {
        return this.laptopsButton;
    }



    async open() {
        await this.page.goto('https://rozetka.com.ua/');
    }

    async clickLaptopsComputersButton(): Promise<void> {
        await this.laptopsComputersButton.click();
    }

    async clickLaptopsButton(): Promise<void> {
        await this.laptopsButton.click();
    }

}