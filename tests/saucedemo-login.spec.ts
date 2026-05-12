import {test, expect} from '@playwright/test';
import { LoginPage } from '../page-objects/saucedemo/LoginPage'; 
import { ProductsPage } from '../page-objects/saucedemo/ProductsPage';   

test.describe ('SauceDemo Login Tests', () => {

    let loginPage: LoginPage;
    
    test.beforeEach(async ({page}) => {

        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test ('successful login with standard user', async ({page}) => {
        
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        const productsPage = new ProductsPage(page);
        await expect(productsPage.pageTitle).toHaveText('Products');

        //Verify that inventory is displayed
        const productCount = await productsPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    test ('login fails with invalid credentials', async () => {
        
        await loginPage.login('invalid_user', 'wrong_password');
        await expect(loginPage.errorMessage)
        .toBeVisible();
        await expect(loginPage.errorMessage)
        .toContainText('Username and password do not match');
    });

    test ('login fails with locked out user', async () => {
        
        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
        
    });

    test ('can clear error message', async () => {
        
        await loginPage.login('invalid_user', 'wrong');

        await expect(loginPage.errorMessage).toBeVisible();
        await loginPage.clearError();
        await expect(loginPage.errorMessage).not.toBeVisible();
    });
});