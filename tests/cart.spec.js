const { test, expect } = require('@playwright/test'); // достаём инструменты Playwright
const { LoginPage } = require('../pages/LoginPage'); // достаём класс логина
const { CartPage } = require('../pages/CartPage'); // достаём класс корзины
const { USERNAME, PASSWORD } = require('../data/credentials'); // достаём логин и пароль

// ========== ВАРИАНТ ХАРДКОД ==========

test('Add product to cart (hardcode)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com'); // перешли на сайт
  await page.fill('#user-name', 'standard_user'); // ввели логин
  await page.fill('#password', 'secret_sauce'); // ввели пароль
  await page.click('#login-button'); // нажали логин
  await page.click('#add-to-cart-sauce-labs-backpack'); // добавили товар
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // проверили корзину
  await page.close();
});

test('Remove product from cart (hardcode)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com'); // перешли на сайт
  await page.fill('#user-name', 'standard_user'); // ввели логин
  await page.fill('#password', 'secret_sauce'); // ввели пароль
  await page.click('#login-button'); // нажали логин
  await page.click('#add-to-cart-sauce-labs-backpack'); // добавили товар
  await page.click('#remove-sauce-labs-backpack'); // удалили товар
  await expect(page.locator('.shopping_cart_badge')).not.toBeVisible(); // корзина пуста
  await page.close();
});

// ========== ВАРИАНТ С КЛАССОМ И ПЕРЕМЕННЫМИ ==========

test('Add product to cart (page object)', async ({ page }) => {
  const loginPage = new LoginPage(page); // создали объект логина
  const cartPage = new CartPage(page); // создали объект корзины
  await loginPage.login(USERNAME, PASSWORD); // залогинились одной строкой
  await cartPage.addBackpack(); // добавили товар через класс
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // проверили корзину
  await page.close();
});

test('Remove product from cart (page object)', async ({ page }) => {
  const loginPage = new LoginPage(page); // создали объект логина
  const cartPage = new CartPage(page); // создали объект корзины
  await loginPage.login(USERNAME, PASSWORD); // залогинились одной строкой
  await cartPage.addBackpack(); // добавили товар через класс
  await cartPage.removeBackpack(); // удалили товар через класс
  await expect(page.locator('.shopping_cart_badge')).not.toBeVisible(); // корзина пуста
  await page.close();
});