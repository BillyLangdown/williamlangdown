'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

// Desktop columns are proportional to word length (Brand 5 chars : Digital
// 7 : Technology 10), not literally equal-width — the brief explicitly
// allows "asymmetry from grid spans" rather than arbitrary positioning.
// Sizing the columns this way means all three words can share ONE font
// size and still fill their column to the same degree: genuinely equal
// point size and equal fill-ratio, rather than fighting a fixed equal
// column with per-word font-size tricks (which either made Technology
// overflow its column at real viewport widths, or made it look small to
// stay safe — verified via scrollWidth vs clientWidth across 768–1920px).
// minmax(0, Nfr) — not bare Nfr — so a track can shrink below its
// content's natural (min-content) width instead of forcing the whole
// grid wider than its container at narrow viewports.
const columnRatios = 'minmax(0, 5fr) minmax(0, 7fr) minmax(0, 10fr)'
const headingSize = 'clamp(1.9rem, 4.7vw, 3.6rem)'

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

        {/* Desktop: three territories in one row, sized to the word each
            one holds. Same font size, same weight, same treatment for all
            three — equal hierarchy comes from that, not from column width. */}
        <ScrollReveal threshold={0.15}>
          <div
            className="hidden md:grid md:items-start md:gap-x-10 lg:gap-x-14"
            style={{ gridTemplateColumns: columnRatios }}
          >
            {disciplines.map((d, i) => (
              <div
                key={d.word}
                className={i > 0 ? 'border-l border-border-light pl-8 lg:pl-10' : ''}
              >
                <h3
                  className="mb-4 font-sans font-extrabold uppercase leading-[0.88] tracking-tight text-ink"
                  style={{ fontSize: headingSize }}
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
