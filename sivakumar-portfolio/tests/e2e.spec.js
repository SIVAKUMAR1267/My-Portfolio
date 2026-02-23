import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  
  test('should load the homepage and display correct name', async ({ page }) => {
    // 1. Navigate to the local server
    await page.goto('http://localhost:5173');

    // 2. Verify the page title
    await expect(page).toHaveTitle(/Sivakumar/);

    // 3. Verify your name is visible in the Hero section
    const heroName = page.locator('h1', { hasText: 'Sivakumar R' });
    await expect(heroName).toBeVisible();
  });

  test('navigation should scroll to correct sections', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Click the "Projects" link in the header
    await page.click('nav a[href="#projects"]');

    // Verify the Projects section title becomes visible
    const projectsTitle = page.locator('h2', { hasText: 'Featured Projects' });
    await expect(projectsTitle).toBeInViewport();
  });

  test('theme toggle should change attributes', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Find the desktop theme toggle button
    const themeBtn = page.locator('button.desktop-toggle');
    
    // Click it to swap themes
    await themeBtn.click();

    // Verify the HTML tag received the data-theme attribute
    const htmlTag = page.locator('html');
    await expect(htmlTag).toHaveAttribute('data-theme', /dark|light/);
  });
});