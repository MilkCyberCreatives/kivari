/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false, // Disable if not using Next.js 13+ app directory
  },
}

export default nextConfig