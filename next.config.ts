import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; next/image picks AVIF first, then WebP, then JPEG fallback.
    formats: ["image/avif", "image/webp"],
    // Trim deviceSizes to reduce total optimized variants generated.
    deviceSizes: [640, 768, 1024, 1280, 1600, 1920, 2400],
    // Keep optimized versions cached for a year.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Drop console output in production builds (smaller bundles, no leaked debug).
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
