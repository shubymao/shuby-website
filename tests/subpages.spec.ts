import test from '@playwright/test';
import { visitAndSnapShot } from './test-helper';

test('All the notes pages', async ({ context, baseURL }) => {
  const page = await context.newPage();
  await page.goto(baseURL + '/notes');
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });
  const noteLinks = hrefs.filter((url) => url.match(/^.*\/notes\/.+$/));
  const promises: Promise<void>[] = [];
  for (const url of noteLinks) {
    const name = url.match(/^.*\/notes\/(.+$)/)[1];
    promises.push(visitAndSnapShot(context, url, name + '.jpg'));
  }
  await Promise.all(promises);
});

test('All the projects pages', async ({ context, baseURL }) => {
  const page = await context.newPage();
  await page.goto(baseURL + '/projects');
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });
  const projectLinks = hrefs.filter((url) => url.match(/^.*\/projects\/.+$/));
  const promises: Promise<void>[] = [];
  for (const url of projectLinks) {
    const name = url.match(/^.*\/projects\/(.+$)/)[1];
    promises.push(visitAndSnapShot(context, url, name + '.jpg'));
  }
  await Promise.all(promises);
});
