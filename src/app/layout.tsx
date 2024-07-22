import '@/styles/globals.css';

import { Inter as FontSans } from 'next/font/google';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';

import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_URL,
  APP_AUTHOR,
} from '@/constants/app';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import Providers from '@/app/providers';

import type { Metadata } from 'next';

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    // images: [
    //   {
    //     url: '/og-image.png',
    //     alt: 'Next Shadcn Starter',
    //   },
    // ],
    siteName: APP_NAME,
    type: 'website',
  },
  twitter: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
    creator: '@akmalhisyammm',
  },
  authors: {
    name: APP_AUTHOR,
    url: APP_URL,
  },
  keywords: [
    'next.js',
    'typescript',
    'tailwindcss',
    'shadcn',
    'starter',
    'boilerplate',
  ],
  creator: APP_AUTHOR,
  publisher: APP_AUTHOR,
  generator: 'Next.js',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <NextTopLoader color="#3b82f6" showSpinner={false} />
          <header className="sticky top-0 z-50 shadow-sm bg-background/80 backdrop-blur-md">
            <div className="container flex items-center justify-end h-16 px-4 mx-auto md:px-6">
              <ModeToggle />
            </div>
          </header>
          <main className="container p-4 mx-auto space-y-4 md:px-6">
            {children}
          </main>
          <footer className="container p-4 mx-auto text-center md:px-6">
            <p>
              &copy; {new Date().getFullYear()} &bull;{' '}
              <Link
                href="https://akmalhisyam.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {APP_AUTHOR}
              </Link>
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
