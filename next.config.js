/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  async redirects() {
    return [
      {
        source: '/api/download/:id*',
        destination: `${process.env.VC_VIDEOCHAIN_API_URL}/download/:id*`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
