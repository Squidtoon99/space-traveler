/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    // wikimedia
    domains: ['upload.wikimedia.org'],
  }
}

module.exports = nextConfig
