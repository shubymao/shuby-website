import { BrowserContext, expect, Page } from '@playwright/test';

async function goToAndWait(page: Page, url: string, timeout = 1000) {
  // Reduce motion to avoid animations.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url, { waitUntil: 'networkidle' });
  if (timeout !== 0) await page.waitForTimeout(timeout);
}

export async function visitAndSnapShot(
  context: BrowserContext,
  url: string,
  name: string,
  timeout = 1000,
  fullPage = true,
) {
  const page = await context.newPage();
  await goToAndWait(page, url, timeout);
  expect(
    await page.screenshot({ quality: 50, type: 'jpeg', fullPage: fullPage }),
  ).toMatchSnapshot(name);
  await page.close();
}
