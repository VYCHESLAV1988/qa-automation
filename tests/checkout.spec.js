const { test, expect } = require('@playwright/test');
test('Complete checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');
    await page.click('#checkout'); //Checkout (начать оформление заказа)
    await page.fill('#first-name', 'Jon');
    await page.fill('#last-name', 'Test');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await page.click('#finish');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await page.close();
});