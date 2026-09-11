'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const disciplines = [
  {
    word: 'Brand',
    caption: 'Research / Positioning / Messaging / Identity / Creative direction',
  },
  {
    word: 'Digital',
    caption: 'UX / Web design / Digital experiences / Technical SEO / Analytics',
  },
  {
    word: 'Technology',
    caption: 'Development / Software / Integrations / Automation / Applied AI',
  },
] as const

// Swiss/editorial grid: Brand (8/12, upper-left) and Digital (4/12,
// upper-right) share row 1 and a vertical rule at their shared edge.
// Technology spans the full width of row 2 — the larger lower territory.
// The Explore link is anchored to row 3 sharing Digital's column span, so
// the right-hand edge reads as one continuous line down through
// Digital -> Explore, rather than floating independently under everything.
const gridStyle: CSSProperties = {
  gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
  gridTemplateAreas:
    '"brand brand brand brand brand brand brand brand digital digital digital digital" ' +
    '"tech tech tech tech tech tech tech tech tech tech tech tech" ' +
    '". . . . . . . . explore explore explore explore"',
}

export default function BrandDigitalTechnology() {
  return (
    <section id="capabilities" data-nav-theme="light" className="relative z-10 bg-bone px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-secondary">What I bring together</p>
          <p className="max-w-xl font-display text-xl leading-snug text-ink md:text-2xl">
            For businesses whose brand, digital presence or systems haven&apos;t kept up with what they&apos;ve actually become.
          </p>
        </ScrollReveal>

        {/* Mobile: clean vertical editorial sequence, not a shrunk desktop grid */}
        <div className="flex flex-col md:hidden">
          {disciplines.map((d) => (
            <ScrollReveal key={d.word} threshold={0.2} className="border-t border-border-light py-7">
              <h3
                className="mb-2 font-sans font-extrabold uppercase leading-[0.9] tracking-tight text-ink"
                style={{ fontSize: 'clamp(2.25rem, 9vw, 3.5rem)' }}
              >
                {d.word}
              </h3>
              <p className="max-w-[32ch] text-xs tracking-wide text-tertiary">{d.caption}</p>
            </ScrollReveal>
          ))}
          <div className="border-t border-border-light" />

          <ScrollReveal threshold={0.15} className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
            >
              Explore what I do
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Desktop: disciplined CSS grid, three defined territories, shared edges */}
        <ScrollReveal threshold={0.15}>
          <div className="hidden md:grid md:gap-x-10 lg:gap-x-14" style={gridStyle}>
            <div style={{ gridArea: 'brand' }} className="pb-10">
              <h3
                className="mb-4 font-sans font-extrabold uppercase leading-[0.88] tracking-tight text-ink"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
              >
                Brand
              </h3>
              <p className="max-w-[40ch] text-sm tracking-wide text-tertiary">
                Research / Positioning / Messaging / Identity / Creative direction
              </p>
            </div>

            <div style={{ gridArea: 'digital' }} className="border-l border-border-light pb-10 pl-6 lg:pl-8">
              <h3
                className="mb-4 font-sans font-extrabold uppercase leading-[0.88] tracking-tight text-ink"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                Digital
              </h3>
              <p className="max-w-[22ch] text-sm tracking-wide text-tertiary">
                UX / Web design / Digital experiences / Technical SEO / Analytics
              </p>
            </div>

            <div
              style={{ gridArea: 'tech' }}
              className="flex flex-col gap-4 border-t border-border-light pt-10 md:flex-row md:items-end md:justify-between md:gap-10"
            >
              <h3
                className="font-sans font-extrabold uppercase leading-[0.88] tracking-tight text-ink"
                style={{ fontSize: 'clamp(3rem, 7.5vw, 7rem)' }}
              >
                Technology
              </h3>
              <p className="max-w-[28ch] text-sm tracking-wide text-tertiary md:pb-3 md:text-right">
                Development / Software / Integrations / Automation / Applied AI
              </p>
            </div>

            <div style={{ gridArea: 'explore' }} className="flex items-end border-t border-border-light pt-6 lg:pl-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
              >
                Explore what I do
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
