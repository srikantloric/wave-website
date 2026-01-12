import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Optimize React Icons
  transpilePackages: ['react-icons'],

  // 2. Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // Precise breakpoints for Lighthouse mobile devices
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], 
    minimumCacheTTL: 60,
  },

  // 3. Tree Shaking
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
};

export default nextConfig;