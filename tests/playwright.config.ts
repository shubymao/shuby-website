import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn start',
    port: 3000,
    timeout: 400 * 1000,
    reuseExistingServer: true,
  },
  timeout: 100 * 1000,
  outputDir: './output',
  snapshotDir: './snapshots',
  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
  use: {
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { outputFolder: 'tests/output/test-report', open: 'never' }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'webkit-mobile',
      use: { ...devices['iPhone 11'] },
    },
    {
      name: 'android',
      use: { ...devices['Pixel 4'] },
    },
  ],
};
export default config;
