'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Media {
  video?: string
  poster: string
}

interface ProjectFeatureProps {
  index: string
  name: string
  tags: string[]
  description: string
  href: string
  external?: boolean
  cta: string
  media: Media
  variant: 'bleed' | 'stacked'
}

function Screen({ media, className }: { media: Media; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
  }, [])

  if (media.video && !reduceMotion) {
    return (
      <video
        ref={videoRef}
        className={className}
        src={media.video}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
      />
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={media.poster} alt="" className={className} />
}

function CTALink({ href, external, cta, className }: { href: string; external?: boolean; cta: string; className: string }) {
  const content = (
    <>
      {cta}
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}

export default function ProjectFeature({ index, name, tags, description, href, external, cta, media, variant }: ProjectFeatureProps) {
  if (variant === 'bleed') {
    return (
      <section className="relative w-full overflow-hidden h-[78vh] md:h-[min(88vh,900px)]">
        <Screen media={media} className="absolute inset-0 w-full h-full object-cover object-top" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,24,48,0.05) 0%, rgba(10,24,48,0.1) 45%, rgba(10,24,48,0.82) 100%)' }}
        />
        <div className="relative z-10 h-full flex flex-col justify-between px-6 py-8 md:px-10 md:py-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-bone/70">{index}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((t) => (
                  <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm" style={{ background: 'rgba(246,243,238,0.12)', color: '#F6F3EE' }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-4xl md:text-6xl text-bone leading-[1.02] max-w-2xl">{name}</h3>
              <p className="text-sm md:text-base text-bone/70 mt-3 max-w-lg leading-relaxed">{description}</p>
            </div>
            <CTALink
              href={href}
              external={external}
              cta={cta}
              className="self-start md:self-end shrink-0 inline-flex items-center gap-2 text-sm font-medium text-navy bg-bone px-5 py-3 rounded-full hover:bg-bone/90 transition-colors"
            />
          </div>
        </div>
      </section>
    )
  }

  // 'stacked': media full-width top, content below in a bone field, index /
  // title / metadata reading order per the brief's editorial-feature spec.
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <Screen media={media} className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>
      <div className="px-6 md:px-10 py-10 md:py-14 bg-bone">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-4 md:gap-10 md:items-end">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">{index}</p>
          <div>
            <h3 className="font-display text-3xl md:text-5xl text-ink leading-[1.05]">{name}</h3>
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              {tags.map((t) => (
                <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm text-secondary" style={{ background: 'rgba(16,35,63,0.05)' }}>
                  {t}
                </span>
              ))}
            </div>
            <p className="text-sm md:text-base text-secondary max-w-lg leading-relaxed">{description}</p>
          </div>
          <CTALink
            href={href}
            external={external}
            cta={cta}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta transition-colors md:justify-self-end"
          />
        </div>
      </div>
    </section>
  )
}
