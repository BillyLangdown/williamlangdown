import Link from 'next/link'
import { ClientWork } from '@/components/ClientWork'
import ScrollReveal from '@/components/ScrollReveal'
import SectionNav from '@/components/SectionNav'
import BackgroundWord from '@/components/BackgroundWord'

interface ResultStat {
  value: string
  label: string
}

export default function FeaturedProject({
  name,
  client,
  tags,
  context,
  media,
  secondaryMedia,
  results,
  href,
}: {
  name: string
  client: string
  tags: string[]
  context: string
  media: { video?: string; src: string; caption: string }
  secondaryMedia?: { src: string; caption: string }
  results: ResultStat[]
  href: string
}) {
  return (
    <section data-nav-theme="light" className="relative z-10 overflow-hidden bg-bone">
      <SectionNav />
      <BackgroundWord
        word="Work"
        color="#10233F"
        opacity={0.045}
        vertical
        parallax
        className="top-16 right-0 md:top-16 md:right-auto md:left-0"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <p className="text-sm font-semibold text-secondary mb-5">Selected work</p>
          <p className="font-display text-3xl md:text-4xl text-ink leading-tight">{name}</p>
          <p className="text-sm text-tertiary mt-1">{client}</p>
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {tags.map((t) => (
              <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm text-secondary" style={{ background: 'rgba(16,35,63,0.05)' }}>
                {t}
              </span>
            ))}
          </div>
          <p className="text-base text-secondary max-w-xl leading-relaxed">{context}</p>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10 md:mt-12">
          <div
            className="grid grid-cols-[1fr_128px_160px_1fr] md:grid-cols-[1fr_140px] items-end md:items-start gap-4 md:gap-x-4 md:gap-y-8 [grid-template-areas:'main_main_main_main'_'._mockup_info_.'] md:[grid-template-areas:'main_mockup'_'info_info']"
          >
            <div className="[grid-area:main]">
              <ClientWork media={media} alt={`${client} interface`} caption={media.caption} aspect="2 / 1" />
            </div>
            {secondaryMedia && (
              <div className="[grid-area:mockup]">
                <ClientWork
                  media={{ src: secondaryMedia.src }}
                  alt={`${client} mobile interface`}
                  caption={secondaryMedia.caption}
                  aspect="9 / 16"
                  objectPosition="top"
                />
              </div>
            )}
            <div className="[grid-area:info] pl-4 border-l border-border-light md:pl-0 md:border-l-0 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                {results.map((r) => (
                  <div key={r.label}>
                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ink">{r.value}</p>
                    <p className="text-xs text-tertiary mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href={href}
                className="inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-wide text-ink border border-border-light rounded-full px-4 py-2 md:self-auto md:border-0 md:rounded-none md:px-0 md:py-0 md:normal-case md:tracking-normal md:text-sm md:font-medium hover:text-terracotta hover:border-terracotta/40 transition-colors"
              >
                View project
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
