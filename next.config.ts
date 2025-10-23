import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
    
    // Configure image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimize quality for faster loading (adjust based on needs)
    minimumCacheTTL: 60,
  },
  
  // Enable compression
  compress: true,
  
  // Optimize production builds
  swcMinify: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
};

export default nextConfig;