'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const capabilities = [
  {
    index: '01',
    name: 'Strategy & Brand',
    description: 'Understanding the business, the market and the audience before anything gets designed. Positioning, messaging and identity that hold up as the business keeps changing.',
    areas: ['Research', 'Positioning', 'Messaging', 'Identity'],
  },
  {
    index: '02',
    name: 'Digital',
    description: 'The website and digital experience that carries the strategy through: structure, UX, content and the technical foundations that make it findable and fast.',
    areas: ['UX & structure', 'Website design & build', 'Technical SEO', 'Analytics'],
  },
  {
    index: '03',
    name: 'Technology',
    description: 'Software built around how the business actually works: internal tools, integrations, and the automation that removes admin rather than adding another system to manage.',
    areas: ['Bespoke software', 'Integrations', 'Workflow automation', 'Applied AI'],
  },
]

export default function Capabilities({
  showIntro = true,
  showMoreLink = true,
}: {
  showIntro?: boolean
  showMoreLink?: boolean
}) {
  return (
    <section id="capabilities" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {showIntro && (
          <ScrollReveal className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">03 — Capabilities</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1] mb-5">
              Three disciplines. One line of thinking.
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              Not every project needs all three. The starting point is always working out what the
              business actually needs to change, then bringing in whichever of these apply.
            </p>
          </ScrollReveal>
        )}

        <div className="flex flex-col">
          {capabilities.map((cap) => (
            <ScrollReveal key={cap.index} threshold={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-4 md:gap-10 py-10 border-t border-border-light items-start">
                <span className="font-display text-3xl text-tertiary/60">{cap.index}</span>
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">{cap.name}</h3>
                <div>
                  <p className="text-base text-secondary leading-relaxed mb-4 max-w-md">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.areas.map((a) => (
                      <span
                        key={a}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-sm text-secondary"
                        style={{ background: 'rgba(15,23,42,0.04)' }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border-light" />
        </div>

        {showMoreLink && (
          <ScrollReveal threshold={0.15} className="mt-10 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              More on how these connect
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
