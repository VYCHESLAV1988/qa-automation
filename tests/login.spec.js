const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { USERNAME, PASSWORD, BASE_URL } = require('../data/credentials');

// SETUP — размер окна и открыть сайт перед каждым тестом
test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(BASE_URL);
});

// ===== ВАРИАНТ 1: хардкод (как новичок) =====
test('login hardcode', async ({ page }) => {
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
  await page.close();
});

// ===== ВАРИАНТ 2: с классом и переменными =====
test('login with page object', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);
  await expect(page).toHaveURL(/inventory/);
  await page.close();
});

// ===== ВАРИАНТ 3: Заблокированный пользователь =====
test('login blocked user', async ({ page }) => {
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  //await expect(page.locator('[data-test="error"]')).toBeVisible();   //Первый вариант проверки, что элемент видим!
  await expect(page.locator('[data-test="error"]')).toContainText('locked out');  //Второй вариант проверки, что элемент содержит текст!
  await page.close();
});

//ВАРИАНТ делаем логаут
test('logout from SauceDemo', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.login(USERNAME, PASSWORD);
await page.click('#react-burger-menu-btn'); //Открыть меню (гамбургер)
await page.click('#logout_sidebar_link'); //Кликнуть на кнопку логаута
await expect(page.locator('#login-button')).toBeVisible();
await page.close();
});


// =====  Негативный тест — пустые поля (ошибка Username is required) =====
test('login with empty fields', async ({ page }) => {
await page.click('#login-button');
await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
await page.close();
});

// ===== Негативный тест — пустое поле PASSWORD (ошибка Password is required) =====
test('login with empty password', async ({ page }) => {
  await page.fill('#user-name', 'standard_user');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
  await page.close();
});

// ===== Негативный тест — логин с большой буквы =====
test('login with uppercase username', async ({ page }) => {
  await page.fill('#user-name', 'Standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toContainText('do not match');
  await page.close();
});