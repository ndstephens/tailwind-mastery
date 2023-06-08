// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
  poweredByHeader: false,
  reactStrictMode: true,
  // experimental: {
  //   typedRoutes: true,
  // },
};

module.exports = nextConfig;
