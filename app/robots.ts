import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/studio/',
        '/client-brief/',
        '/starter/preview-4/manage',
        // Starter Websites is retired from this brand (redirects to /pricing)
        // and no longer linked internally; these sub-pages stay in the repo
        // for a future Orla migration but shouldn't be crawled here.
        '/starter/preview-1/',
        '/starter/preview-2/',
        '/starter/preview-3/',
        '/starter/preview-4/',
        '/starter/preview-5/',
        '/starter/preview-6/',
        '/starter/remix-ironclad/',
        '/starter/order/',
      ],
    },
    sitemap: 'https://williamlangdown.com/sitemap.xml',
  }
}
