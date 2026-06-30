
const { test, expect } = require('@playwright/test'); // мы достаём из Playwright два инструмента — test 
console.log("==========================================================================================");
console.log("=                        01 TEST ADD PRODUCT TO CART                                     =");
console.log("==========================================================================================")
test('Add product to cart', async ({ page }) => {  
    await page.goto('https://saucedemo.com'); // Перешли по ссылке в браузере
    await page.fill('#user-name', 'standard_user'); // В поле юзера заполнил данные юзера
    await page.fill('#password', 'secret_sauce'); // В поле пароль заполнил данные пароля
    await page.click('#login-button'); // нажал на кнопку логин
    await page.click('#add-to-cart-sauce-labs-backpack'); // Добавил товар в карзину 
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); //Проверить, что товар в корзине
    await page.close();
});

test('Remove product from cart', async({ page }) => {
console.log("==========================================================================================");
console.log("=                        02 TEST REMOVE PRODUCT FROM CART                                =");
console.log("==========================================================================================")   
 await page.goto('https://www.saucedemo.com');
 await page.fill('#user-name', 'standard_user');
 await page.fill('#password', 'secret_sauce');
 await page.click('#login-button');
 await page.click('#add-to-cart-sauce-labs-backpack');
 await page.click('#remove-sauce-labs-backpack');
 await page.close();
});


