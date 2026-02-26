/*import {test, expect} from '@playwright/test';

test ('Login with environment variables', async ({ page }) => {
    await page.goto ('/');


    // use credentials from environment variables
    await page.locator('#user-name').fill(process.env.SAUCEDEMO_STANDARD_USER!);
    await page.locator('#password').fill(process.env.SAUCE_DEMO_PASSWORD!);
    await page.locator('#login-button').click();


    await expect(page).toHaveURL('/inventory.html');


}); */

import { test, expect } from '@playwright/test';
import { SauceDemoUsers } from '../utils/test-data';

test ('Login with test data helper', async ({page}) => {

    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill(SauceDemoUsers.standard.username);
    await page.locator('#password').fill(SauceDemoUsers.standard.password);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('/inventory.html');

});