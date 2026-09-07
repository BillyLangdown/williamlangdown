import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import SectionNav from '@/components/SectionNav'
import BackgroundWord from '@/components/BackgroundWord'
import PeaLogoVideo from '@/components/PeaLogoVideo'

interface ResultStat {
  value: string
  label: string
}

interface CollectionImage {
  src: string
  alt: string
  width: number
  height: number
}

interface LogoVideo {
  src: string
  poster: string
  width: number
  height: number
  alt: string
}

export default function FeaturedProject({
  name,
  client,
  tags,
  context,
  image,
  detail,
  video,
  results,
  href,
  ctaLabel = 'View project',
}: {
  name: string
  client: string
  tags: string[]
  context: string
  image: CollectionImage
  detail: CollectionImage
  video: LogoVideo
  results?: ResultStat[]
  href: string
  ctaLabel?: string
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

        {/* ==================================================================
            EDITORIAL SEQUENCE

            Mobile stacks all three in one reading order: identity video,
            then the detail crop, then the long product capture. From md
            up the first two pair into a left column (small video sitting
            above the detail shot) while the tall mobile capture stands
            alone on the right — never an equal-card grid. Straight
            edges, a single hairline border on the two static shots (just
            enough separation from the cream page), no border on the
            video — its own charcoal already reads apart from the page.
           ================================================================== */}
        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:flex-row md:items-start md:gap-10 lg:gap-14">
          <div className="flex flex-col gap-10 md:w-[44%] lg:w-[42%]">
            <ScrollReveal delay={80}>
              <PeaLogoVideo
                src={video.src}
                poster={video.poster}
                width={video.width}
                height={video.height}
                alt={video.alt}
              />
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                <Image
                  src={detail.src}
                  alt={detail.alt}
                  width={detail.width}
                  height={detail.height}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="w-full md:w-[50%] lg:w-[52%]">
            <div style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={240} className="mt-10 md:mt-12">
          <div
            className={`flex flex-col gap-7 border-t border-border-light pt-7 md:flex-row md:items-end ${
              results && results.length > 0 ? 'md:justify-between' : 'md:justify-start'
            }`}
          >
            {results && results.length > 0 && (
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
            )}

            <Link
              href={href}
              className="inline-flex self-start items-center gap-2 text-sm font-medium text-ink underline decoration-2 underline-offset-4 transition-colors hover:text-terracotta md:self-auto"
              style={{ textDecorationColor: '#C1613D' }}
            >
              {ctaLabel}

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
        </ScrollReveal>
      </div>
    </section>
  )
}
