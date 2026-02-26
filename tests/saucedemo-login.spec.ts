import {test, expect} from '@playwright/test';

test ('Login to Sauce Demo', async ({ page }) => {

    // Go to sauce demo
    await page.goto ('https://www.saucedemo.com');

    //fill in username
    await page.getByPlaceholder('Username').fill('standard_user');

    //fill in password
    await page.getByPlaceholder('Password').fill('secret_sauce');

    //click login button
    await page.getByRole('button', {name: 'Login'}).click();

    //wait for inventory page to load
    
    await page.waitForURL('**/inventory.html');

    //verify we are on the products page
    await expect(page.getByText('Products')).toBeVisible();
});