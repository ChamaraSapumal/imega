import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: "/imega", // Replace with your GitHub repo name
  assetPrefix: "/imega/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
