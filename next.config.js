/** @type {import('next').NextConfig} */

module.exports = {
  unstable_runtimeJS: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,

  mergeDuplicateChunks: true,

  experimental: {
    swcFileReading: false,
    legacyBrowsers: false,
    browsersListForSwc: true,
    images: { allowFutureImage: true },
  },

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["image/png", "image/webp", "mdbootstrap.com"],
  },
};
