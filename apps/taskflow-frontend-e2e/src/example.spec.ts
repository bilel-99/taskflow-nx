import { test, expect } from '@playwright/test';

test.describe('TaskFlow Frontend', () => {
  test('should load the application', async ({ page }) => {
    await page.goto('/');

    // Check if the title is present
    const title = page.locator('h1');
    await expect(title).toBeVisible();
    await expect(title).toContainText('TaskFlow');
  });

  test('should display subtitle', async ({ page }) => {
    await page.goto('/');

    const subtitle = page.locator('.subtitle');
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText('Gérez vos tâches efficacement');
  });

  test('should display statistics cards', async ({ page }) => {
    await page.goto('/');

    // Check for stats cards
    const statsCards = page.locator('.stat-card');
    await expect(statsCards).toHaveCount(3);

    // Check labels
    await expect(page.locator('.stat-label').first()).toContainText(
      'Tâches totales'
    );
  });

  test('should display add task button', async ({ page }) => {
    await page.goto('/');

    const addButton = page.locator('button.btn-primary');
    await expect(addButton).toBeVisible();
  });
});
