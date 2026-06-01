import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    // Skip on-the-fly optimization in dev to avoid sharp RAM spikes on large source images
    unoptimized: process.env.NODE_ENV === "development",
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [40, 45, 60, 70, 72, 75, 80, 85],
    // Insert 1440w so 1280-1440px viewports don't reach for the 1920w bucket
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },
};

export default nextConfig;
