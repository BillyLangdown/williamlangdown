'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const capabilities = [
  { word: 'Brand', areas: 'Research / Positioning / Messaging / Identity / Creative direction', align: 'left' as const },
  { word: 'Digital', areas: 'UX / Web design / Digital experiences / Technical SEO / Analytics', align: 'right' as const },
  { word: 'Technology', areas: 'Development / Software / Integrations / Automation / Applied AI', align: 'left' as const },
]

export default function Capabilities({
  showIntro = true,
  showMoreLink = true,
}: {
  showIntro?: boolean
  showMoreLink?: boolean
}) {
  return (
    <section id="capabilities" data-nav-theme="light" className="py-16 md:py-24 px-6 bg-bone">
      <div className="max-w-6xl mx-auto">
        {showIntro && (
          <ScrollReveal className="mb-12 md:mb-16">
            <p className="text-sm font-semibold text-secondary">Capabilities</p>
          </ScrollReveal>
        )}

        <div className="flex flex-col">
          {capabilities.map((cap) => (
            <ScrollReveal key={cap.word} threshold={0.2} className="border-t border-border-light py-8 md:py-10">
              <div className={`flex flex-col gap-2 ${cap.align === 'right' ? 'items-start md:items-end md:text-right' : 'items-start'}`}>
                <h3
                  className="font-sans font-extrabold uppercase text-ink leading-[0.9] tracking-tight"
                  style={{ fontSize: 'clamp(2.25rem, 9vw, 6.5rem)' }}
                >
                  {cap.word}
                </h3>
                <p className="text-xs md:text-sm text-tertiary tracking-wide max-w-md">{cap.areas}</p>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border-light" />
        </div>

        {showMoreLink && (
          <ScrollReveal threshold={0.15} className="mt-8 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta transition-colors"
            >
              How these connect
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
