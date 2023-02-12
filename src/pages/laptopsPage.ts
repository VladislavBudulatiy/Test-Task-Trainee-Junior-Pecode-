import type { Locator, Page } from '@playwright/test';

export class LaptopsPage {
    readonly page: Page;
    public brandFilterAsusCheckbox: Locator;
    public priceMiniInput: Locator;
    public priceMaxInput: Locator;
    public priceOkButton: Locator;
    public firstProduct: Locator;
    public costFirstProduct: Locator;
    public itemFirstProductBasket: Locator;
    public continueBuyButton: Locator;
    public laptopsComputersButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brandFilterAsusCheckbox = page.locator(`.checkbox-filter__link[data-id='ASUS']`);
        this.priceMiniInput = page.getByRole('textbox').nth(1);
        this.priceMaxInput = page.getByRole('textbox').nth(2);
        this.priceOkButton = page.locator(`button[type='submit']`);
        this.firstProduct = page.locator(`(//div[@class='goods-tile__inner'])[1]`);
        this.costFirstProduct = page.locator(`.goods-tile__price-value`).nth(0);
        this.itemFirstProductBasket = page.locator(`(//*[name()='svg'])[51]`);
        this.continueBuyButton = page.locator(`.button.button_size_medium.button_color_gray.cart-footer__continue.ng-star-inserted`);
        this.laptopsComputersButton = page.locator(`(//span[contains(text(),'Компьютеры и ноутбуки')])[1]`);
    }

    
    getFirstProduct(): Locator {
        return this.firstProduct;
    }

    getCostFirstProduct(): Locator {
        return this.costFirstProduct;
    }

    async clickBrandFilterAsusButton(): Promise<void> {
        await this.brandFilterAsusCheckbox.click();
    }

    async clickPriceMiniInput(): Promise<void> {
        await this.priceMiniInput.click();
    }

    async clickPriceMaxInput(): Promise<void> {
        await this.priceMaxInput.click();
    }

    async cleanPriceMiniInput(): Promise<void> {
        await this.priceMiniInput.fill('');
    }

    async cleanPriceMaxInput(): Promise<void> {
        await this.priceMaxInput.fill('');
    }

    async typeMiniPrice(text: string): Promise<void> {
        await this.priceMiniInput.type(text);
    }

    async typeMaxPrice(text: string): Promise<void> {
        await this.priceMaxInput.type(text);
    }

    async clickPriceOkButton(): Promise<void> {
        await this.priceOkButton.click();
    }

    async clickItemFirstProductBasket(): Promise<void> {
        await this.itemFirstProductBasket.click();
    }

    async clickContinueBuyButton(): Promise<void> {
        await this.continueBuyButton.click();
    }

    async clickLaptopsComputersButton(): Promise<void> {
        await this.laptopsComputersButton.click();
    }
}
