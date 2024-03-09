/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    minimumCacheTTL: 120,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
