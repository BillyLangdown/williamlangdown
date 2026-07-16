import { createClient } from '@sanity/client'
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url'
import type { SanityImage } from '@/lib/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder'
const dataset = 'starter-demo'
const apiVersion = '2024-01-01'

// Public dataset: no token needed for reads, matches the `production` client's setup.
export const portfolioClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

// Write access for the self-serve upload/delete/reorder Server Actions.
export const portfolioWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

const builder = imageUrlBuilder(portfolioClient)

export function urlForPortfolio(source: SanityImage) {
  return builder.image(source).auto('format').quality(80)
}
