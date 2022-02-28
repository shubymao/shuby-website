import { test } from '@playwright/test';
import { visitAndSnapShot } from './test-helper';

test('Home Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL, 'home.png', 2000);
});

test('Software Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, `${baseURL}/software`, 'software.png');
});

test('System Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/system', 'system.png');
});

test('Contact Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/contact', 'contact.png');
});

test('Projects Pages', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/projects', 'projects.png');
});

test('Notes Pages', async ({ baseURL, context }) => {
  await visitAndSnapShot(context, baseURL + '/notes', 'notes.png');
});

test('Sample Note Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(
    context,
    baseURL + '/notes/sample-note',
    'sample-note.png',
  );
});

test('Sample Project Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(
    context,
    baseURL + '/projects/sample-project',
    'sample-project.png',
  );
});
