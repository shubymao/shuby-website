import { test } from '@playwright/test';
import { visitAndSnapShot } from './test-helper';

test('Home Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL, 'home.jpg');
});

test('Software Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, `${baseURL}/software`, 'software.jpg');
});

test('System Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/system', 'system.jpg');
});

test('Contact Page', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/contact', 'contact.jpg');
});

test('Projects Pages', async ({ context, baseURL }) => {
  await visitAndSnapShot(context, baseURL + '/projects', 'projects.jpg');
});

test('Notes Pages', async ({ baseURL, context }) => {
  await visitAndSnapShot(context, baseURL + '/notes', 'notes.jpg');
});

test('Sample Note Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(
    context,
    baseURL + '/notes/sample-note',
    'sample-note.jpg',
  );
});

test('Sample Project Page', async ({ baseURL, context }) => {
  await visitAndSnapShot(
    context,
    baseURL + '/projects/sample-project',
    'sample-project.jpg',
  );
});
