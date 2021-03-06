import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn start',
    port: 3000,
    timeout: 500 * 1000,
    reuseExistingServer: true,
  },
  workers: 1,
  timeout: 150 * 1000,
  outputDir: './output',
  snapshotDir: './snapshots',
  testMatch: ['**/integration.spec.ts'],
  expect: {
    toMatchSnapshot: { threshold: 0.4 },
  },
  use: {
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['html', { outputFolder: 'tests/output/test-report', open: 'never' }],
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: ['**/*.spec.ts'],
    },
    {
      name: 'webkit-mobile',
      use: { ...devices['iPhone 11'] },
    },
    {
      name: 'webkit-tablet',
      use: { ...devices['iPad (gen 7)'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'android',
      use: { ...devices['Galaxy S8'] },
    },
  ],
};
export default config;
