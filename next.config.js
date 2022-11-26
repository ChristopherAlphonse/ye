/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    domains: ["files.stripe.com"],
  },
};

module.exports = nextConfig;
