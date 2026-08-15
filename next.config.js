/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
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
      {
        // Starter Websites is moving to Orla. Code kept in place for that
        // migration (see /docs/orla-migration-notes.md), but no longer
        // promoted or reachable from williamlangdown.com.
        source: '/starter',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/starter/order',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/starter/:path*',
        destination: '/pricing',
        permanent: true,
      },
      {
        // Low-cost, commodity-priced pages retired as part of the move to
        // an engagement-based model. Working Together explains how ongoing
        // support and smaller pieces of work are now scoped.
        source: '/services/website-audits',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/services/website-support',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/services/care-plans',
        destination: '/pricing',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
