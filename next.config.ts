import type { NextConfig } from "next";

const allowedOrigins = process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(',') ?? []

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(allowedOrigins.length > 0 && {
    allowedDevOrigins: allowedOrigins,
  }),
};

export default nextConfig;
