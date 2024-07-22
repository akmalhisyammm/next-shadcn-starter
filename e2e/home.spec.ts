import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should render the home page', async ({ page }) => {
  // Expect the title to be "Next Shadcn Starter".
  await expect(page).toHaveTitle(/Next Shadcn Starter/);

  // Expect the headings to be visible.
  await expect(
    page.getByRole('heading', { name: 'Next Shadcn Starter' }),
  ).toBeVisible();
  await expect(
    page.getByText('Next.js boilerplate with Shadcn UI and TypeScript setup.'),
  ).toBeVisible();

  // Expect the image to be visible.
  const image = page.getByRole('img', { name: 'Morty' });
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('src', /morty\.gif/);

  // Expect the code snippet to be visible.
  await expect(
    page.getByText('npx degit akmalhisyammm/next-shadcn-starter <APP_NAME>'),
  ).toBeVisible();

  // Expect the first CTA to be visible.
  const firstCTA = page.getByRole('link', { name: 'Use This Template' });
  await expect(firstCTA).toBeVisible();
  await expect(firstCTA).toHaveAttribute(
    'href',
    'https://github.com/akmalhisyammm/next-shadcn-starter/generate',
  );

  // Expect the second CTA to be visible.
  const secondCTA = page.getByRole('link', { name: 'Open Repository' });
  await expect(secondCTA).toBeVisible();
  await expect(secondCTA).toHaveAttribute(
    'href',
    'https://github.com/akmalhisyammm/next-shadcn-starter',
  );
});

test('should redirect to github create repository page when clicking on first CTA', async ({
  context,
  page,
}) => {
  // Click on the first CTA.
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Use This Template' }).click(),
  ]);

  // Expect the new page to be the GitHub create repository page.
  await expect(newPage).toHaveURL(
    'https://github.com/akmalhisyammm/next-shadcn-starter/generate',
  );
});

test('should redirect to github repository page when clicking on second CTA', async ({
  context,
  page,
}) => {
  // Click on the second CTA.
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Open Repository' }).click(),
  ]);

  // Expect the new page to be the GitHub repository page.
  await expect(newPage).toHaveURL(
    'https://github.com/akmalhisyammm/next-shadcn-starter',
  );
});
