/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["images.pexels.com", "lh3.googleusercontent.com"],
  // },
  // output: "export",
  // runtime: "nodejs", // or "edge"
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;
