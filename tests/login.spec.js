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