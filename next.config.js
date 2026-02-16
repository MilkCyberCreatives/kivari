/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true
  },
  images: {
    // Add external domains here if you ever load remote images
    domains: [],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
};

module.exports = nextConfig;
