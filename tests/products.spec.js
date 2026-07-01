const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { USERNAME, PASSWORD, BASE_URL } = require('../data/credentials');

// SETUP — размер окна и открыть сайт перед каждым тестом
test.beforeEach(async ({ page }) => {
await page.setViewportSize({ width: 1920, height: 1080 });  
await page.goto(BASE_URL);
});

// ===== ВАРИАНТ 1: Cортировка товаров по цене от низкой к высокой =====
test('sort products by price low to high', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.login(USERNAME, PASSWORD);
await page.selectOption('.product_sort_container', 'lohi'); //Выпадающий список .selectOption
await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99'); //Проверка — первый товар самый дешёвый
await page.close();
});

// ===== ВАРИАНТ 2: Сортировка товаров по цене от высокой к низкой =====
test('sort products by price high to low', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);
  await page.selectOption('.product_sort_container', 'hilo');
  await expect(page.locator('.inventory_item_price').first()).toHaveText('$49.99');
  await page.close();
});

//===== ВАРИАНТ 3: Сортировка товаров по названию от А до Z =====
test('sort products by name A to Z', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);
  await page.selectOption('.product_sort_container', 'az');
  await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack');
  await page.close();
});

//===== ВАРИАНТ 4: 6 товаров на странице =====
test('inventory has 6 products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);
  await expect(page.locator('.inventory_item')).toHaveCount(6);
  await page.close();
});