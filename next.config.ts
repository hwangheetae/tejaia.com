import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
        port: "",
        pathname: "/images/tejaia/post/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
