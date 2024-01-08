const isProd = process.env.STAGE !== 'TEST' && process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENDPOINT: 'https://api.iseser.com',
    DOMAIN: isProd ? 'https://iseser.com' : 'http://localhost:3000'
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig

