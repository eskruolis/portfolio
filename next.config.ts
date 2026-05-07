import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['192.168.1.210'],
  }),
};

export default nextConfig;
