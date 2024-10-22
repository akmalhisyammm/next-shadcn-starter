import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Next Shadcn Starter',
  short_name: 'next-shadcn-starter',
  description: 'Next.js boilerplate with Shadcn UI and TypeScript setup',
  display: 'standalone',
  theme_color: '#020617',
  scope: '/',
  start_url: '/',
  icons: [
    {
      src: '/icons/icon-48x48.png',
      sizes: '48x48',
      type: 'image/png',
    },
    {
      src: '/icons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png',
    },
    {
      src: '/icons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      src: '/icons/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
    },
    {
      src: '/icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
    },
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icons/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
});

export default manifest;
