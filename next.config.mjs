/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true, // This ignores ESLint warnings, like unused components, during build
  },
};

export default nextConfig;
