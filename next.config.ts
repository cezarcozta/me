import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  appDir: true,
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: 'github.com',
    }],
  }
};

export default nextConfig;
