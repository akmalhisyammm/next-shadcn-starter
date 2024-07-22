import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test('should render the home page', () => {
  render(<Home />);

  // Expect the headings to be defined.
  expect(screen.getByText('Next Shadcn Starter')).toBeDefined();
  expect(
    screen.getByText(
      'Next.js boilerplate with Shadcn UI and TypeScript setup.',
    ),
  ).toBeDefined();

  // Expect the image to be defined.
  const image = screen.getByRole('img', { name: 'Morty' });
  expect(image).toBeDefined();
  expect(image).toHaveProperty('src', expect.stringMatching(/morty\.gif/));

  // Expect the code snippet to be defined.
  expect(
    screen.getByText('npx degit akmalhisyammm/next-shadcn-starter <APP_NAME>'),
  ).toBeDefined();

  // Expect the first CTA to be defined.
  const firstCTA = screen.getByRole('link', {
    name: 'Use This Template',
  });
  expect(firstCTA).toBeDefined();
  expect(firstCTA).toHaveProperty(
    'href',
    'https://github.com/akmalhisyammm/next-shadcn-starter/generate',
  );

  // Expect the second CTA to be defined.
  const secondCTA = screen.getByRole('link', {
    name: 'Open Repository',
  });
  expect(secondCTA).toBeDefined();
  expect(secondCTA).toHaveProperty(
    'href',
    'https://github.com/akmalhisyammm/next-shadcn-starter',
  );
});
