/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir: true,
  },
  env: {
    customKey: 'my-value',
  },
}

module.exports = nextConfig
