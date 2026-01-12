import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Optimize React Icons (Reduces main thread blocking time)
  transpilePackages: ['react-icons'],

  // 2. Image Optimization Strategy (Fixes "Image larger than displayed" & LCP)
  images: {
    // Prefer AVIF (smaller than WebP), then WebP
    formats: ['image/avif', 'image/webp'], 
    
    // Generate these specific widths for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Smaller sizes for thumbnails/icons
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache optimized images (helps server response time)
    minimumCacheTTL: 60,
  },

  // 3. Experimental features for tree-shaking (Removes unused code)
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'lucide-react'],
  },
};

export default nextConfig;