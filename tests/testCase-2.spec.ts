import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/mainPage';
import { baseUrl } from '../src/url.constant';
import { LaptopsPage } from '../src/pages/laptopsPage';
import { MonitorsPage } from '../src/pages/monitorsPage';


test('Test Case 2', async ({ page }) => {
    const mainPage = new MainPage(page);
    const laptopsPage = new LaptopsPage (page);
    const monitorsPage = new  MonitorsPage (page);

    // 1. Open marketplace url. Verify it.
    await mainPage.open();
    await expect(page).toHaveURL(baseUrl);
    //Open category and subcategory if it is necessary.
    await mainPage.clickLaptopsComputersButton();
    await mainPage.clickLaptopsButton();
    //Add any item to the basket.
    await laptopsPage.clickItemFirstProductBasket();
    //4. Select another category and add an item from that category.
    await laptopsPage.clickContinueBuyButton();
    await laptopsPage.clickLaptopsComputersButton();
    await mainPage.clickMonitorsButton();
    await monitorsPage.clickItemFirstProductBasket();
    //Verify information of items inside the basket.
    await mainPage.clickMainBasket();
    await expect(mainPage.getListSelectedProducts()).toBeVisible();
    //Verify that the delete item button is clickable.
    await mainPage.clickCartProduct();
    await mainPage.hoverDeleteFirstСartProduct();
    await expect(mainPage.getDeleteFirstСartProduct()).toBeEnabled();

});