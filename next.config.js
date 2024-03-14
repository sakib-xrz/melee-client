/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "dev.melee.la"],
    minimumCacheTTL: 120,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
      },
      {
        protocol: "http",
        hostname: "dev.melee.la",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dev.melee.la",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
