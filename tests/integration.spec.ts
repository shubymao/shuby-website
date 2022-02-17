import { test } from '@playwright/test';
import { visitAndSnapShot } from './test-helper';

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
  await visitAndSnapShot(context, baseURL + '/notes', 'notes.jpg', 750);
});

test('Sample Project Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(context, baseURL + '/projects', 'projects.jpg', 750);
});
