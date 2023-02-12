import type { Locator, Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    public laptopsComputersButton: Locator;
    public laptopsButton: Locator;
    public monitorsButton: Locator;
    public mainBasket: Locator;
    public listSelectedProducts: Locator;
    public cartProductFirst: Locator;
    public deleteFirstСartProduct: Locator;
    public searchFormImput: Locator;
    public searchingRequest: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.laptopsComputersButton = page.locator(`div[class='fat-wrap'] li:nth-child(1)`);
        this.laptopsButton = page.locator(`(//div[@class='tile-cats'])[1]`);
        this.monitorsButton = page.locator(`(//div[@class='tile-cats'])[3]`);
        this.mainBasket = page.locator(`(//*[name()='svg'][@aria-hidden='true'])[18]`);
        this.listSelectedProducts = page.locator(`//ul[@class='cart-list']`);
        this.cartProductFirst = page.locator(`#cartProductActions0`);
        this.deleteFirstСartProduct = page.locator(`button[class='button button--medium button--with-icon button--link']`);
        this.searchFormImput = page.locator(`search-form__input ng-untouched ng-pristine ng-valid`);
        this.searchingRequest = page.locator(`.catalog-grid.ng-star-inserted`);

    }

    
    getListSelectedProducts(): Locator {
        return this.listSelectedProducts;
    }

    getDeleteFirstСartProduct(): Locator {
        return this.deleteFirstСartProduct;
    }

    getSearchingRequest(): Locator {
        return this.searchingRequest;
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

    async clickMonitorsButton(): Promise<void> {
        await this.monitorsButton.click();
    }

    async clickMainBasket(): Promise<void> {
        await this.mainBasket.click();
    }

    async clickCartProduct(): Promise<void> {
        await this.cartProductFirst.click();
    }

    async hoverDeleteFirstСartProduct(): Promise<void> {
        await this.deleteFirstСartProduct.hover();
    }

    async typeSearchFormImput(text: string): Promise<void> {
        await this.searchFormImput.type(text);
    }

}