import { SITE_URL, SITE_NAME, PERSON_ID, BUSINESS_ID, absoluteUrl } from '@/lib/site'

export const personRef = { '@type': 'Person', '@id': PERSON_ID, name: SITE_NAME, url: SITE_URL }

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

interface ServiceSchemaInput {
  name: string
  serviceType: string
  description: string
  path: string
  /** Minimum price in GBP, only where the visible page states one. */
  priceFrom?: number
}

export function serviceSchema({ name, serviceType, description, path, priceFrom }: ServiceSchemaInput) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: personRef,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Somerset' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    ...(priceFrom && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: priceFrom,
          priceCurrency: 'GBP',
        },
      },
    }),
  }
}

interface ArticleSchemaInput {
  title: string
  description: string
  path: string
  publishedAt: string
  updatedAt?: string
  image?: string
}

export function articleSchema({ title, description, path, publishedAt, updatedAt, image }: ArticleSchemaInput) {
  return {
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: personRef,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-GB',
    ...(image && { image }),
  }
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
