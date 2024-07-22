import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig & import('next-pwa').PWAConfig} */
const nextConfig = withPWA({});

export default nextConfig;
