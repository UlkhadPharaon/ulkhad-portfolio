import { expect, test } from '@playwright/test';

async function waitForHydration(page: import('@playwright/test').Page) {
  await page.waitForSelector('html[data-hydrated="true"]');
}

test('French home loads, states the claim and reaches work', async ({ page }) => {
  await page.goto('/fr');
  await waitForHydration(page);
  await expect(page.getByRole('heading', { name: /Ulkhad/i })).toBeVisible();
  await expect(page.getByText('Des films. Des produits. Des systèmes.')).toBeVisible();
  await page.locator('.desktop-nav a').filter({ hasText: /projets/i }).click();
  // The /work route compiles on demand on a cold dev server (see playwright.config.ts),
  // so this wait uses the navigation timeout rather than a tighter default.
  await expect(page).toHaveURL(/\/fr\/work/, { timeout: 90_000 });
  await expect(page.getByRole('heading', { name: /Le travail parle/i })).toBeVisible();
});

test('language switch opens the English home', async ({ page }) => {
  await page.goto('/fr');
  await waitForHydration(page);
  await page.getByRole('button', { name: /change language/i }).click();
  // The /en route compiles on demand in dev: 5 s is too tight on a slow disk.
  await expect(page).toHaveURL(/\/en/, { timeout: 30_000 });
  await expect(page.getByText('Films. Products. Systems.')).toBeVisible({ timeout: 30_000 });
});

test('contact form validates required fields', async ({ page }) => {
  await page.goto('/fr/contact');
  await waitForHydration(page);
  await page.getByRole('button', { name: /envoyer le message/i }).click();
  await expect(page.getByText(/Votre nom est requis/i)).toBeVisible();
});

// TEMPORARILY SKIPPED: the network marquee is hidden at the owner's request.
// Un-skip this test when <EndorsementTicker /> returns to the homepage.
test.skip('network marquee names real collaborators without invented quotes', async ({ page }) => {
  await page.goto('/fr');
  await waitForHydration(page);
  await expect(page.getByRole('heading', { name: /Le travail se construit/i })).toBeVisible();
  await expect(page.getByText('BNV').first()).toBeVisible();
  await expect(page.getByText(/témoignage/i)).toHaveCount(0);
});

// The network section must stay absent while it is disabled.
test('network marquee stays hidden while disabled', async ({ page }) => {
  await page.goto('/fr');
  await waitForHydration(page);
  await expect(page.getByRole('heading', { name: /Le travail se construit/i })).toHaveCount(0);
  await expect(page.getByText(/RÉSEAU . HIGH FIVES/i)).toHaveCount(0);
  await expect(page.getByText('BNV')).toHaveCount(0);
  // Sections around it must be untouched.
  await expect(page.locator('#work-title')).toBeVisible();
  await expect(page.locator('#about-title')).toBeVisible();
  await expect(page.locator('#contact-title')).toBeVisible();
});
