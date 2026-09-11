'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

// Desktop font sizes are calibrated per word, not shared, so BRAND (5
// chars), DIGITAL (7) and TECHNOLOGY (10) fill their equal-width column to
// roughly the same degree and read with the same visual weight — a single
// shared size would either make Technology overflow/wrap or leave Brand and
// Digital looking small and empty in their column.
const disciplines = [
  {
    word: 'Brand',
    caption: 'Research / Positioning / Messaging / Identity / Creative direction',
    size: 'clamp(2.25rem, 6vw, 5.25rem)',
  },
  {
    word: 'Digital',
    caption: 'UX / Web design / Digital experiences / Technical SEO / Analytics',
    size: 'clamp(1.85rem, 5.25vw, 4.75rem)',
  },
  {
    word: 'Technology',
    caption: 'Development / Software / Integrations / Automation / Applied AI',
    size: 'clamp(1.6rem, 3.6vw, 3.4rem)',
  },
] as const

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

        {/* Mobile: clean vertical editorial sequence, all three at the same
            size — full viewport width removes the fit problem that makes
            desktop need per-word calibration, so equal size is already the
            equal-weight choice here. */}
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

        {/* Desktop: three equal territories, one row, three even columns.
            No column is wider, taller or higher-priority than another —
            equal hierarchy comes from the grid itself, not from size. */}
        <ScrollReveal threshold={0.15}>
          <div className="hidden md:grid md:grid-cols-3 md:items-start md:gap-x-10 lg:gap-x-14">
            {disciplines.map((d, i) => (
              <div
                key={d.word}
                className={i > 0 ? 'border-l border-border-light pl-8 lg:pl-10' : ''}
              >
                <h3
                  className="mb-4 font-sans font-extrabold uppercase leading-[0.88] tracking-tight text-ink"
                  style={{ fontSize: d.size }}
                >
                  {d.word}
                </h3>
                <p className="max-w-[26ch] text-sm tracking-wide text-tertiary">{d.caption}</p>
              </div>
            ))}
          </div>

          {/* Closing rule + link: the exit from the whole three-part
              composition, not attached to any one discipline. */}
          <div className="mt-12 hidden border-t border-border-light pt-6 md:flex md:justify-end lg:mt-14">
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
        </ScrollReveal>
      </div>
    </section>
  )
}
