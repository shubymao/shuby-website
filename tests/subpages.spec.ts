import test from '@playwright/test';
import { visitAndSnapShot } from './test-helper';

const prjectPattern = new RegExp(/^.*\/projects\/(.+$)/);
const notePattern = new RegExp(/^.*\/notes\/(.+$)/);

test('All the notes pages', async ({ context, baseURL }) => {
  const page = await context.newPage();
  await page.goto(baseURL + '/notes');
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });
  const noteLinks = hrefs.filter((url) => url.match(/^.*\/notes\/.+$/));
  for (const url of noteLinks) {
    const name = url.match(notePattern)[1];
    await visitAndSnapShot(context, url, name + '.jpg', 1000, false);
  }
});

test('All the projects pages', async ({ context, baseURL }) => {
  const page = await context.newPage();
  await page.goto(baseURL + '/projects');
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });
  const projectLinks = hrefs.filter((url) => url.match(/^.*\/projects\/.+$/));
  for (const url of projectLinks) {
    const name = url.match(prjectPattern)[1];
    await visitAndSnapShot(context, url, name + '.jpg', 1000, false);
  }
});
