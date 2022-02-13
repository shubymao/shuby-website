import { test, expect, Page, BrowserContext } from '@playwright/test';

async function goToAndWait(page: Page, url: string, timeout = 0) {
  // Reduce motion to avoid animations.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(timeout);
}

async function visitAndSnapShot(
  context: BrowserContext,
  url: string,
  name: string,
  timeout = 0,
) {
  const page = await context.newPage();
  await goToAndWait(page, url, timeout);
  expect(
    await page.screenshot({ quality: 50, type: 'jpeg', fullPage: true }),
  ).toMatchSnapshot(name);
  await page.close();
}

test('Home Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL, 'home.jpg', 2000);
});

test('Software Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, `${baseURL}/software`, 'software.jpg', 750);
});

test('System Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/system', 'system.jpg', 750);
});

test('Contact Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/contact', 'contact.jpg', 750);
});

test('Projects Pages', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/projects', 'projects.jpg', 750);
});

test('Notes Pages', async ({ baseURL, context }) => {
  await visitAndSnapShot(context, baseURL + '/notes', 'notes.jpg', 750);
});

test('Sample Note Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(context, baseURL + '/notes/sample-note', 'sample-note.jpg', 750);
});

test('Sample Project Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(
    context,
    baseURL + '/projects/sample-project',
    'sample-project.jpg',
    750,
  );
});
