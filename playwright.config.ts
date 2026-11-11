import { defineConfig, devices } from '@playwright/test';

// The build is served from a slow filesystem, so every route compiles on demand
// in dev. Default timeouts are far too tight: give assertions room to wait.
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  timeout: 90_000,
  expect: { timeout: 20_000 },
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'retain-on-failure',
    actionTimeout: 30_000,
    navigationTimeout: 90_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: { command: 'npm run dev', url: 'http://127.0.0.1:3000/fr', reuseExistingServer: !process.env.CI, timeout: 180_000 },
});
