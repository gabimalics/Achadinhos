import type { NextConfig } from "next";

// STATIC_EXPORT=1 npm run build → static site in ./out (used for the shareable preview)
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const } : {}),
  images: {
    unoptimized: isExport,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
