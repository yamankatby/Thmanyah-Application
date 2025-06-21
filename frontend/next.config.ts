import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://is1-ssl.mzstatic.com/**/*")],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
