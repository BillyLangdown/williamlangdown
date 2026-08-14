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
    <section data-nav-theme="light" className="relative overflow-hidden bg-bone">
      <SectionNav />
      <BackgroundWord
        word="Work"
        color="#10233F"
        opacity={0.045}
        vertical
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
          <div className="grid grid-cols-1 md:grid-cols-[1fr_140px] gap-4 items-end">
            <ClientWork media={media} alt={`${client} interface`} caption={media.caption} aspect="2 / 1" />
            {secondaryMedia && (
              <ClientWork
                media={{ src: secondaryMedia.src }}
                alt={`${client} mobile interface`}
                caption={secondaryMedia.caption}
                aspect="9 / 16"
                objectPosition="top"
              />
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140} className="mt-10 md:mt-12 flex flex-wrap items-end justify-between gap-8">
          <div className="flex gap-10">
            {results.map((r) => (
              <div key={r.label}>
                <p className="font-display text-3xl md:text-4xl text-ink">{r.value}</p>
                <p className="text-xs text-tertiary mt-1">{r.label}</p>
              </div>
            ))}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta transition-colors"
          >
            View project
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
