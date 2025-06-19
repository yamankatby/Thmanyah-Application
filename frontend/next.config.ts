import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://is1-ssl.mzstatic.com/**/*")],
  },
};

export default nextConfig;
