import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vacationcappadocia.com" },
    ],
  },
};

export default nextConfig;
