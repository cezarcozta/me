import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  appDir: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'github.com',
    },
    { protocol: 'https', hostname: 'drive.usercontent.google.com' },
    { protocol: 'https', hostname: 'drive.google.com' },],
  }
};

export default nextConfig;
