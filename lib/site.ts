export const SITE_URL = 'https://williamlangdown.com'
export const SITE_NAME = 'William Langdown'

// Date the commercial pages were last substantively revised. Used for
// sitemap lastModified so it reflects real edits rather than "now".
export const SITE_UPDATED = '2026-10-15'

export const PERSON_ID = `${SITE_URL}/#person`
export const BUSINESS_ID = `${SITE_URL}/#service`

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '' : path}`
}

/** Contact link that pre-selects the enquiry type and records which page it came from. */
export function contactHref(topic?: string, service = 'technology') {
  const params = new URLSearchParams({ service })
  if (topic) params.set('topic', topic)
  return `/contact?${params.toString()}`
}
