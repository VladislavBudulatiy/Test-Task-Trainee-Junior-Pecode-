import type { Locator, Page } from '@playwright/test';

export class LaptopsPage {
    readonly page: Page;
    public brandFilterAsusCheckbox: Locator;
    public priceMiniInput: Locator;
    public priceMaxInput: Locator;
    public priceOkButton: Locator;
    public firstProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brandFilterAsusCheckbox = page.locator(`.checkbox-filter__link[data-id='ASUS']`);
        this.priceMiniInput = page.locator(`input[formcontrolname='min']`);
        this.priceMaxInput = page.locator(`input[formcontrolname='max']`);
        this.priceOkButton = page.locator(`button[type='submit']`);
        this.firstProduct = page.locator(`(//div[@class='goods-tile__inner'])[1]`);
    }

    
    getFirstProduct(): Locator {
        return this.firstProduct;
    }


    async clickBrandFilterAsusButton(): Promise<void> {
        await this.brandFilterAsusCheckbox.click();
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
}
