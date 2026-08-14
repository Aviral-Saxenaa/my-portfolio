/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./styles'],
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    buildTraces: false,
  },
  // Disable output file tracing to prevent stack overflow during build
  outputFileTracing: false,
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