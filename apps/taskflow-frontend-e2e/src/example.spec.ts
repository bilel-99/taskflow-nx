import { test, expect } from '@playwright/test';

test.describe('TaskFlow Frontend', () => {
  test.beforeEach(async ({ page }) => {
    // Mock the API call to return an empty array of tasks
    await page.route('**/api/tasks', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            id: '1',
            title: 'Example Task',
            description: 'This is a test task',
            dueDate: new Date().toISOString(),
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ]),
      });
    });
  });

  test('should load the application', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check if the title is present
    const title = page.locator('h1');
    await expect(title).toBeVisible({ timeout: 10000 });
    await expect(title).toContainText('TaskFlow');
  });

  test('should display subtitle', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const subtitle = page.locator('.subtitle');
    await expect(subtitle).toBeVisible({ timeout: 10000 });
    await expect(subtitle).toContainText('Gérez vos tâches efficacement');
  });

  test('should display statistics cards', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check for stats cards
    const statsCards = page.locator('.stat-card');
    await expect(statsCards.first()).toBeVisible({ timeout: 10000 });
    await expect(statsCards).toHaveCount(3);

    // Check labels
    await expect(page.locator('.stat-label').first()).toContainText(
      'Tâches totales'
    );
  });

  test('should display add task button', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const addButton = page.locator('button.btn-primary');
    await expect(addButton).toBeVisible({ timeout: 10000 });
  });
});
