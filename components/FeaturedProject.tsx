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
  results,
  href,
}: {
  name: string
  client: string
  tags: string[]
  context: string
  media: {
    video?: string
    src: string
    caption: string
  }
  results: ResultStat[]
  href: string
}) {
  return (
    <section
      data-nav-theme="dark"
      className="relative z-10 overflow-hidden bg-bone"
      style={{ scrollSnapAlign: 'start' }}
    >
      <SectionNav />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
        <BackgroundWord
          word="Work"
          color="#10233F"
          opacity={0.045}
          vertical
          parallax
          className="top-0 right-0 md:top-0 md:right-auto md:left-[calc(50%-50vw)]"
        />

        <ScrollReveal>
          <p className="mb-5 text-sm font-semibold text-secondary">
            Selected work
          </p>

          <p className="font-display text-3xl leading-tight text-ink md:text-4xl">
            {name}
          </p>

          <p className="mt-1 text-sm text-tertiary">
            {client}
          </p>

          <div className="mb-6 mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-secondary"
                style={{ background: 'rgba(16,35,63,0.05)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="max-w-xl text-base leading-relaxed text-secondary">
            {context}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10 md:mt-12">
          {/* Single desktop presentation */}
          <div>
            {/* Dark outer frame */}
           
              
                <ClientWork
                  media={media}
                  alt={`${client} website`}
                  caption=""
                  aspect="16 / 9"
                  objectPosition="top"
                />
            
            

            {media.caption && (
              <p className="mt-3 text-xs text-tertiary">
                {media.caption}
              </p>
            )}

            {/* Project results */}
            <div className="mt-8 flex flex-col gap-7 border-t border-border-light pt-7 md:flex-row md:items-end md:justify-between">
              <div className="flex gap-8 md:gap-12">
                {results.map((result) => (
                  <div key={result.label}>
                    <p className="font-display text-2xl text-ink md:text-3xl lg:text-4xl">
                      {result.value}
                    </p>

                    <p className="mt-1 text-xs text-tertiary">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={href}
                className="inline-flex self-start items-center gap-2 text-sm font-medium text-ink underline decoration-2 underline-offset-4 transition-colors hover:text-terracotta md:self-auto"
                style={{ textDecorationColor: '#C1613D' }}
              >
                View project

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}