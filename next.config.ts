import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2560, 3840],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
};

export default nextConfig;