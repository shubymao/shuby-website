import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn start',
    port: 3000,
    timeout: 120 * 1000,
  },
  outputDir: './output',
  snapshotDir: './snapshots',
  use: {
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { outputFolder: 'tests/output/test-report' }]],
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
