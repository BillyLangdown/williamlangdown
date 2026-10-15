// Implementation guides written in code. They live under /blog alongside the
// Sanity-managed posts and are merged into the blog index and sitemap, so
// there is a single Insights section rather than two competing ones.
export interface Guide {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
}

export const guides: Guide[] = [
  {
    slug: 'how-much-does-business-workflow-automation-cost-uk',
    title: 'How much does business workflow automation cost in the UK?',
    description:
      'What drives the cost of workflow automation: systems, APIs, data quality, human review, testing, subscriptions and maintenance, with honest guidance on what to expect before you ask for a quote.',
    publishedAt: '2026-10-15',
    tags: ['Automation', 'Pricing'],
  },
  {
    slug: 'when-should-a-business-replace-spreadsheets-with-custom-software',
    title: 'When should a business replace spreadsheets with custom software?',
    description:
      'A practical guide to deciding between keeping a spreadsheet, connecting your tools, automating around it or building an internal tool, including warning signs, costs and migration risks.',
    publishedAt: '2026-10-15',
    tags: ['Custom software', 'Spreadsheets'],
  },
]

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}
