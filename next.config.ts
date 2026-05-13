import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'staticdelivery.nexusmods.com',
        pathname: '/mods/**',
      },
    ],
  },
};

export default nextConfig;
