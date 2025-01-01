import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-5c803ffe5906471ca04240c4d5c8dfea.r2.dev",
      },
    ],
  },
};

export default nextConfig;
