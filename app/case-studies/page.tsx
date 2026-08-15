import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import Image from 'next/image'
import { getCaseStudies } from '@/lib/queries'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Work | William Langdown',
  description: 'Selected work: real businesses, real problems, and what changed. Strategy, brand, digital and technology projects for established UK businesses.',
  alternates: { canonical: 'https://williamlangdown.com/case-studies' },
  openGraph: {
    title: 'Work | William Langdown',
    description: 'Selected work: real businesses, real problems, and what changed.',
    url: 'https://williamlangdown.com/case-studies',
  },
}

// The strongest current commercial example. Swap this to the APE slug once
// that project is ready, and it becomes 01 / Featured without touching
// anything else on this page.
const FEATURED_SLUG = 'building-ventilation-services-ltd'

const isAuditOnly = (study: CaseStudy) =>
  !study.beforeImage &&
  !study.afterImage &&
  !!study.services?.length &&
  study.services.every((s) => s.toLowerCase().includes('audit'))

// Old client sites that no longer represent the work well as a live
// screenshot. Falls through to the branded name placeholder instead.
const NO_SCREENSHOT_SLUGS = ['vin-sheild']
const hideScreenshot = (study: CaseStudy) => NO_SCREENSHOT_SLUGS.includes(study.slug.current)

function FeaturedCard({ study }: { study: CaseStudy }) {
  return (
    <ScrollReveal>
      <Link href={`/case-studies/${study.slug.current}`} className="group block">
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-5">01 / Featured</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="font-display text-4xl md:text-5xl text-ink leading-tight">{study.client}</p>
            {study.services && study.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm text-secondary"
                    style={{ background: 'rgba(16,35,63,0.05)' }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
            <p className="text-base text-secondary leading-relaxed max-w-md">{study.description}</p>
            <span className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-ink group-hover:text-terracotta transition-colors">
              View case study
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          {study.coverImage && !hideScreenshot(study) ? (
            <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3', border: '1px solid rgba(16,35,63,0.14)' }}>
              <Image
                src={urlFor(study.coverImage).width(900).height(675).url()}
                alt={study.coverImage.alt ?? study.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="relative flex items-center justify-center overflow-hidden" style={{ aspectRatio: '4 / 3', background: '#10233F' }}>
              <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(193,97,61,0.45) 0%, transparent 68%)' }} />
              <p className="relative z-10 font-display text-2xl md:text-3xl text-white text-center px-8">{study.client}</p>
            </div>
          )}
        </div>
      </Link>
    </ScrollReveal>
  )
}

function CaseStudyCover({ study }: { study: CaseStudy }) {
  if (study.coverImage && !isAuditOnly(study) && !hideScreenshot(study)) {
    return (
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={urlFor(study.coverImage).width(900).height(506).url()}
          alt={study.coverImage.alt ?? study.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden" style={{ background: '#10233F' }}>
      <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(193,97,61,0.45) 0%, transparent 68%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-60px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 68%)' }} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        {study.services?.[0] && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
            {study.services[0]}
          </span>
        )}
        <p className="text-xl font-heading font-bold text-white leading-tight">{study.client}</p>
      </div>
    </div>
  )
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <Link
        href={`/case-studies/${study.slug.current}`}
        className="group block overflow-hidden"
        style={{ border: '1px solid rgba(16,35,63,0.1)' }}
      >
        <CaseStudyCover study={study} />

        <div className="p-6 md:p-7">
          {study.services && study.services.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(193,97,61,0.08)', color: '#C1613D' }}
                >
                  {service}
                </span>
              ))}
            </div>
          )}
          <h2 className="text-lg font-heading font-bold text-ink mb-2 tracking-tight leading-snug">
            {study.title}
          </h2>
          <p className="text-sm text-secondary leading-relaxed mb-5 line-clamp-2">
            {study.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-terracotta transition-colors">
            View case study
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full py-24 text-center">
      <p className="text-sm text-secondary mb-1">No case studies yet.</p>
      <p className="text-xs text-tertiary">
        Add your first in Sanity Studio at <code className="font-mono">/studio</code>.
      </p>
    </div>
  )
}

export default async function CaseStudiesPage() {
  let studies: CaseStudy[] = []
  try {
    studies = await getCaseStudies()
  } catch (err) {
    console.error('[CaseStudiesPage] Failed to fetch case studies:', err)
  }

  const featured = studies.find((s) => s.slug.current === FEATURED_SLUG) ?? studies[0]
  const rest = studies.filter((s) => s._id !== featured?._id)

  return (
    <>
      <Nav />
      <main className="bg-bone">

        <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-ink">
                Work
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {featured && (
          <section className="px-6 pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto">
              <FeaturedCard study={featured} />
            </div>
          </section>
        )}

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            {rest.length > 0 && (
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-8">Other work</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.length > 0 ? (
                rest.map((study, i) => (
                  <CaseStudyCard key={study._id} study={study} index={i} />
                ))
              ) : studies.length === 0 ? (
                <EmptyState />
              ) : null}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
