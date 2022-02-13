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
  const projectsRoot = baseURL + '/projects';
  await visitAndSnapShot(context, projectsRoot, 'projects.jpg', 750);
  const page = await context.newPage();
  await page.goto(projectsRoot);
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });
  const projectLinks = hrefs.filter((url) => url.match(/^.*\/projects\/.+$/));
  for (const url of projectLinks) {
    const name = url.match(/^.*\/projects\/(.+$)/)[1];
    await visitAndSnapShot(context, url, name + '.jpg', 300);
  }
});

test('Notes Pages', async ({ baseURL, context }) => {
  const notesRoot = baseURL + '/notes';
  await visitAndSnapShot(context, notesRoot, 'notes.jpg', 750);
  const page = await context.newPage();
  await page.goto(notesRoot);
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });
  const noteLinks = hrefs.filter((url) => url.match(/^.*\/notes\/.+$/));
  for (const url of noteLinks) {
    const name = url.match(/^.*\/notes\/(.+$)/)[1];
    await visitAndSnapShot(context, url, name + '.jpg', 300);
  }
});
