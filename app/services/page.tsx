import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import ProcessSteps from '@/components/ProcessSteps'
import Capabilities from '@/components/Capabilities'
import EntryServices from '@/components/EntryServices'
import JsonLd from '@/components/JsonLd'
import { graph, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services: Automation, Integrations, AI & Software | William Langdown',
  description: 'Workflow automation, software integrations, practical AI implementation and custom software, plus websites, UX and branding. Independent consultant based in Somerset, working across the UK.',
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Services: Automation, Integrations, AI & Software | William Langdown',
    description: 'Workflow automation, software integrations, practical AI implementation and custom software, plus websites, UX and branding.',
    url: 'https://williamlangdown.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]))} />
      <Nav />
      <main>

        {/* Header */}
        <section
          className="px-6 pt-28 pb-10 md:pt-32 md:pb-12"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16,35,63,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F6F3EE',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-ink mb-6">
                Technology and automation, with websites and digital experiences alongside.
              </h1>
              <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
                You can come with a specific project or with a problem you are not sure how to solve.
                Technology and automation is the main focus, with web and digital work alongside.
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
            </div>
          </div>
        </section>

        <Capabilities />

        {/* Engagement / process */}
        <section className="px-6 py-12 md:py-16 border-t border-border-light">
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
