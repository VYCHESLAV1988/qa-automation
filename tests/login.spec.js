const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { USERNAME, PASSWORD } = require('../data/credentials');

// ===== ВАРИАНТ 1: хардкод (как новичок) =====
test('login hardcode', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
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