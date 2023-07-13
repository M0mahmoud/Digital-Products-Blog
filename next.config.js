/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["images.pexels.com", "lh3.googleusercontent.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
