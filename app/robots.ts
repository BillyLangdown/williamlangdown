import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/client-brief/', '/starter/preview-4/manage'],
    },
    sitemap: 'https://williamlangdown.com/sitemap.xml',
  }
}
