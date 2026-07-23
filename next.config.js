/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        // Orla now has its own live site; this page no longer exists here.
        source: '/orla',
        destination: 'https://orlabooking.com',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
