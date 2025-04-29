/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, { '@prisma/client': '@prisma/client' }];
    return config;
  },
};

module.exports = nextConfig;