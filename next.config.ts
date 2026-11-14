import type { NextConfig } from "next";

const allowedOrigins = process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(',') ?? []

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      // The old performance case study was removed (its numbers belonged to
      // another job); send existing links to the current performance story.
      {
        source: '/:lang(en|lt)/work/performance-optimisation',
        destination: '/:lang/work/myurbanscoot-performance',
        permanent: true,
      },
    ];
  },
  ...(allowedOrigins.length > 0 && {
    allowedDevOrigins: allowedOrigins,
  }),
};

export default nextConfig;
