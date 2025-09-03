/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./styles'],
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    buildTraces: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  // Disable telemetry
  telemetry: false,
  // Use SWC for minification
  swcMinify: true,
}

module.exports = nextConfig