import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/mainPage';
import { baseUrl } from '../src/url.constant';



test('Test Case 3', async ({ page }) => {
    const mainPage = new MainPage(page);

    // 1. Open marketplace url. Verify it.
    await mainPage.open();
    await expect(page).toHaveURL(baseUrl);
    //2. Search random item by name.
    await mainPage.typeSearchFormImput('Samsung Galaxy S23');
    //3. Verify that all items are correctly displayed according to your searching request (only on the first page).
    await expect(mainPage.getSearchingRequest()).toBeVisible();
});