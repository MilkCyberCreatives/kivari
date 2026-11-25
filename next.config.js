/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
  },
  // HTTP headers are applied by public/.htaccess on cPanel.
};

module.exports = nextConfig;
