import { MetadataRoute } from 'next'
import { getBlogPosts, getCaseStudies } from '@/lib/queries'
import { guides } from '@/lib/guides'
import { SITE_URL as BASE, SITE_UPDATED } from '@/lib/site'

export const revalidate = 3600

const updated = new Date(SITE_UPDATED)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: { slug: { current: string }; publishedAt: string }[] = []
  let caseStudies: { slug: { current: string }; publishedAt: string }[] = []

  try { blogPosts = await getBlogPosts() } catch {}
  try { caseStudies = await getCaseStudies() } catch {}

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: updated, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/workflow-automation`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/software-integrations`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/ai-implementation`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/custom-software`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/business-automation-review`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/website-audit`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: updated, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: updated, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: updated, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE}/blog/${g.slug}`,
    lastModified: new Date(g.updatedAt ?? g.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE}/case-studies/${study.slug.current}`,
    lastModified: new Date(study.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // The two hand-built case studies are not in Sanity, so list them here.
  const staticCaseStudies: MetadataRoute.Sitemap = [
    'planning-enforcement-advisory',
    'building-ventilation-services-redesign',
  ]
    .filter((slug) => !caseStudies.some((s) => s.slug.current === slug))
    .map((slug) => ({
      url: `${BASE}/case-studies/${slug}`,
      lastModified: updated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...guideRoutes, ...blogRoutes, ...caseStudyRoutes, ...staticCaseStudies]
}
