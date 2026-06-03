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
  title: 'Case Studies | William Langdown',
  description: 'Real projects with real businesses: website audits, redesigns, and builds. See the work and results.',
  alternates: { canonical: 'https://williamlangdown.com/case-studies' },
  openGraph: {
    title: 'Case Studies | William Langdown',
    description: 'Real projects with real businesses: website audits, redesigns, and builds. See the work and results.',
    url: 'https://williamlangdown.com/case-studies',
  },
}

const isAuditOnly = (study: CaseStudy) =>
  !study.beforeImage &&
  !study.afterImage &&
  !!study.services?.length &&
  study.services.every((s) => s.toLowerCase().includes('audit'))

function CaseStudyCover({ study }: { study: CaseStudy }) {
  if (study.coverImage && !isAuditOnly(study)) {
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
    <div className="relative aspect-[16/9] overflow-hidden" style={{ background: '#080e1c' }}>
      <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 68%)' }} />
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
        className="group block overflow-hidden rounded-sm transition-all hover:shadow-md"
        style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(15,23,42,0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <CaseStudyCover study={study} />

        <div className="p-6 md:p-7">
          {study.services && study.services.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
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
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors">
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

  return (
    <>
      <Nav />
      <main>

        <section
          className="px-6 pt-32 pb-20 md:pt-36 md:pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink">
                  Case Studies
                </h1>
                <p className="text-base text-secondary mt-3 max-w-xl leading-relaxed">
                  Real work with real businesses. Auditing, redesigning, and rebuilding websites to get more visitors in touch.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          className="px-6 pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {studies.length > 0 ? (
              studies.map((study, i) => (
                <CaseStudyCard key={study._id} study={study} index={i} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
