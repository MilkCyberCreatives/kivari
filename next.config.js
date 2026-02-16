/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true
  },
  images: {
    // Add external domains here if you ever load remote images
    domains: []
  }
};

module.exports = nextConfig;
