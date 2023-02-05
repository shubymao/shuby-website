import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:3000/',
    reuseExistingServer: false,
  },
  workers: 1,
  timeout: 150 * 1000,
  outputDir: './output',
  snapshotDir: './snapshots',
  testMatch: ['**/integration.spec.ts'],
  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
  use: {
    trace: 'on',
    screenshot: 'only-on-failure',
    baseURL: 'http://localhost:3000/',
  },
  reporter: [
    [
      'html',
      { outputFolder: 'output/playwright-report/index.html', open: 'never' },
    ],
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
