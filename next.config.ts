import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  
  // 1. Package Optimization
  // We use this to ensure the heavy icon libraries are compiled correctly
  transpilePackages: ['react-icons', 'lucide-react'],

  // 2. Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // If you are on the latest Next.js and getting quality errors, 
    // it's best to set the quality directly in the <Image /> component to 75 (the default)
    // or use a custom loader.
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], 
    minimumCacheTTL: 31536000, 
  },

  // 3. Tree Shaking & Modern Optimization
  experimental: {
    optimizePackageImports: [
      'react-icons', 
      'lucide-react', 
    ],
  },
};

export default nextConfig;