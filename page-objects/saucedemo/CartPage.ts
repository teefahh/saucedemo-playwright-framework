import { Page, Locator} from "@playwright/test";

export class CartPage {

    readonly page: Page;
    readonly pageTitle: Locator;
    readonly cartItems: Locator;
    readonly removeButton: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.removeButton = page.locator('.cart_button');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }
    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count();
    }
    async getCartItemNames(): Promise<string[]> {
        const items = await this.cartItems.all();
        const names: string[] = [];
        for (const item of items) {
            const name = await item.locator('.inventory_item_name').textContent();
            if (name) names.push(name);
        }
        return names;    
    }
    async isItemInCart(productName: string): Promise<boolean> {
        const item = this.page.locator('[data-test="inventory-item"]', { hasText: productName });
        return await item.isVisible();
    }
    async removeItemByName(productName: string) {
        const item = this.page.locator('[data-test="inventory-item"]', { hasText: productName });
        await item.locator('button: has-text("Remove")').click();
    }
    async getItemPrice(productName: string): Promise<string> {
        const item = this.page.locator('[data-test="inventory-item"]', { hasText: productName });
        const price = await item.locator('.inventory-item-price').textContent();
        return price ?? '';
    }
    async gerCartItemDetails(productName: string){
        const item = this.page.locator('[data-test="inventory-item"]', { hasText: productName });
        const name = await item.locator('.inventory_item_name').textContent() || '';
        const quantity = parseInt(await item.locator('.cart_quantity').textContent() || '0');
    return { name, quantity };
    }
     async getProductDescription(productName: string): Promise<string> {
        const item = this.page.locator('.cart_item', { hasText: productName });
        return await item.locator('.inventory_item_desc').textContent() || '';
    }
    async clickCheckout() {
        await this.checkoutButton.click();
    }
    async clickRemove() {
        await this.removeButton.first().click();
    }
    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }





}