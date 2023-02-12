import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/mainPage';
import { baseUrl } from '../src/url.constant';
import { LaptopsPage } from '../src/pages/laptopsPage';


test('Test Case 1', async ({ page }) => {
    const mainPage = new MainPage(page);
    const laptopsPage = new LaptopsPage (page);

    // 1. Open marketplace url. Verify it.
    await mainPage.open();
    await expect(page).toHaveURL(baseUrl);
    //Open category and subcategory if it is necessary.
    await mainPage.clickLaptopsComputersButton();
    await mainPage.clickLaptopsButton();
    //Navigate to the filters section, for the following
    //marketplaces it is located on the left side. Apply
    //2-3 filters.
    await laptopsPage.clickBrandFilterAsusButton();
    await laptopsPage.clickPriceMiniInput();
    await laptopsPage.cleanPriceMiniInput();
    await laptopsPage.typeMiniPrice('20000');
    await laptopsPage.clickPriceMaxInput();
    await laptopsPage.cleanPriceMaxInput();
    await laptopsPage.typeMaxPrice('30000');
    await laptopsPage.clickPriceOkButton();
    //Verify that all the items on the page are sorted 
    //correctly by the from and to price filters you entered.
    await expect(laptopsPage.getFirstProduct()).toContainText('MSI');
    await expect(laptopsPage.getCostFirstProduct()).toContainText('27 999₴');
});