const { test, expect } = require('@playwright/test'); // инструменты Playwright
const { LoginPage } = require('../pages/LoginPage'); // класс логина
const { CartPage } = require('../pages/CartPage'); // класс корзины
const { CheckoutPage } = require('../pages/CheckoutPage'); // класс заказа
const { USERNAME, PASSWORD } = require('../data/credentials'); // логин и пароль

// ========== ВАРИАНТ ХАРДКОД ==========

test('Complete checkout (hardcode)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com'); // перешли на сайт
  await page.fill('#user-name', 'standard_user'); // ввели логин
  await page.fill('#password', 'secret_sauce'); // ввели пароль
  await page.click('#login-button'); // нажали логин
  await page.click('#add-to-cart-sauce-labs-backpack'); // добавили товар
  await page.click('.shopping_cart_link'); // открыли корзину
  await page.click('#checkout'); // начали оформление
  await page.fill('#first-name', 'Jon'); // имя
  await page.fill('#last-name', 'Test'); // фамилия
  await page.fill('#postal-code', '12345'); // индекс
  await page.click('#continue'); // продолжить
  await page.click('#finish'); // завершить заказ
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!'); // проверка
  await page.close();
});

// ========== ВАРИАНТ С КЛАССАМИ ==========

test('Complete checkout (page object)', async ({ page }) => {
  const loginPage = new LoginPage(page); // объект логина
  const cartPage = new CartPage(page); // объект корзины
  const checkoutPage = new CheckoutPage(page); // объект заказа

  await loginPage.login(USERNAME, PASSWORD); // залогинились
  await cartPage.addBackpack(); // добавили товар
  await checkoutPage.openCart(); // открыли корзину
  await checkoutPage.startCheckout(); // начали оформление
  await checkoutPage.fillInfo('Jon', 'Test', '12345'); // заполнили данные
  await checkoutPage.finish(); // завершили заказ
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!'); // проверка
  await page.close();
});