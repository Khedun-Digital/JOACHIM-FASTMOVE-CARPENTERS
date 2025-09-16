import { test, expect } from '@playwright/test';

test('home page loads and shows nav', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});

