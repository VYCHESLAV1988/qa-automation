const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('../data/credentials');

// Тест специально падает, чтобы проверить работу скриншота при падении
test('screenshot on failure', async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('#login-button')).toHaveText('НЕТ');
  await page.close();
});