import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import ProcessSteps from '@/components/ProcessSteps'
import Capabilities from '@/components/Capabilities'
import Link from 'next/link'
import Image from 'next/image'
import { getCaseStudies } from '@/lib/queries'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Capabilities | Brand, Digital & Technology | William Langdown',
  description: 'Strategy & Brand, Digital and Technology, for established UK businesses whose identity or digital presence hasn’t kept pace with what they’ve become. Somerset-based, working nationwide.',
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Capabilities | Brand, Digital & Technology | William Langdown',
    description: 'Strategy & Brand, Digital and Technology capabilities for established UK businesses. Somerset-based, working nationwide.',
    url: 'https://williamlangdown.com/services',
  },
}

async function SelectedWork() {
  let studies: CaseStudy[] = []
  try {
    studies = (await getCaseStudies()).slice(0, 3)
  } catch {
    // no-op
  }
  if (studies.length === 0) return null

  return (
    <section className="px-6 py-20 md:py-24 bg-white border-t border-border-light">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-12 max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1]">Where this shows up in practice.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <ScrollReveal key={study._id} delay={i * 80}>
              <Link href={`/case-studies/${study.slug.current}`} className="group block">
                <div className="aspect-[4/3] relative overflow-hidden rounded-sm bg-subtle border border-border-light mb-4">
                  {study.coverImage ? (
                    <Image
                      src={urlFor(study.coverImage).width(600).height(450).url()}
                      alt={study.coverImage.alt ?? study.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center" style={{ background: '#10233F' }}>
                      <p className="font-display text-lg text-white">{study.client}</p>
                    </div>
                  )}
                </div>
                <p className="text-base font-semibold text-ink group-hover:text-accent transition-colors">{study.title}</p>
                <p className="text-sm text-secondary mt-1 leading-relaxed line-clamp-2">{study.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors">
            See all work
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Header */}
        <section
          className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16,35,63,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F6F3EE',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Capabilities</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-ink mb-6">
                Strategy, design and software, considered together.
              </h1>
              <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
                Every project starts with the same question: what does this business actually need
                to change? The answer determines which of these three areas gets involved, and how much.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Capabilities showIntro={false} showMoreLink={false} />

        <SelectedWork />

        {/* Engagement / process */}
        <section className="px-6 py-20 md:py-24 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1]">
                How a project works.
              </h2>
            </ScrollReveal>

            <ProcessSteps />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
