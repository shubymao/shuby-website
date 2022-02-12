import { test, expect, Page } from '@playwright/test';

async function goToAndWait(page: Page, url: string) {
  // Reduce motion to avoid animations.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url);
  await page.waitForTimeout(2000);
}

test('Home Page', async ({ page, baseURL }) => {
  await goToAndWait(page, baseURL);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('home.png');
});

test('Software Page', async ({ page, baseURL }) => {
  await goToAndWait(page, baseURL + '/software');
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('software.png');
});

test('System Page', async ({ page, baseURL }) => {
  await goToAndWait(page, baseURL + '/system');
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('system.png');
});

test('Contact Page', async ({ page, baseURL }) => {
  await goToAndWait(page, baseURL + '/contact');
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('contact.png');
});

test('Projects Page', async ({ page, baseURL }) => {
  await goToAndWait(page, baseURL + '/projects');
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('projects.png');
});

test('Notes Page', async ({ page, baseURL }) => {
  await goToAndWait(page, baseURL + '/notes');
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('notes.png');
});
