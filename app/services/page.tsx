import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import ProcessSteps from '@/components/ProcessSteps'
import Capabilities from '@/components/Capabilities'
import EntryServices from '@/components/EntryServices'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Technology, Automation & Digital | William Langdown',
  description: 'Technology and automation, plus websites, UX and branding, for UK businesses. Workflow automation, integrations, custom software and digital experiences. Somerset-based, working nationwide.',
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Services | Technology, Automation & Digital | William Langdown',
    description: 'Technology and automation, plus websites, UX and branding, for UK businesses.',
    url: 'https://williamlangdown.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Header */}
        <section
          className="px-6 pt-32 pb-14 md:pt-40 md:pb-16"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16,35,63,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F6F3EE',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-ink mb-6">
                Technology and automation, with websites and digital experiences alongside.
              </h1>
              <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
                I help businesses reduce manual work and build websites that are easier to use. You
                can come with a specific project or with a problem you are not sure how to solve.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                >
                  Discuss a project
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Capabilities />

        {/* Engagement / process */}
        <section className="px-6 py-16 md:py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-10 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1]">How a project works.</h2>
            </ScrollReveal>
            <ProcessSteps />
          </div>
        </section>

        <EntryServices />

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
