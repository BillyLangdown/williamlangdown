import Image from 'next/image'
import Link from 'next/link'
import type { Icon as PhosphorIcon } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ScrollReveal'
import { Breadcrumbs } from '@/components/service/parts'

/**
 * Shared building blocks for the two homepage pathway pages (technology and
 * web & digital), so both read as one system: an asymmetric hero with a quiet
 * brand panel, then a navy band of recognisable problems.
 */
export function PathwayHero({
  trail,
  heading,
  intro,
  cta,
  Mark,
  image,
}: {
  trail: { name: string; href?: string }[]
  heading: string
  intro: string
  cta?: { href: string; label: string }
  Mark?: PhosphorIcon
  image?: { src: string; alt: string }
}) {
  const dark = Boolean(image)
  return (
    <section
      className={`relative overflow-hidden px-6 pt-28 pb-10 md:pt-32 md:pb-14 ${
        dark ? 'flex min-h-[44svh] items-end bg-navy md:min-h-[54svh]' : ''
      }`}
      style={
        dark
          ? undefined
          : {
              backgroundImage: 'radial-gradient(circle, rgba(16,35,63,0.07) 1.5px, transparent 1.5px)',
              backgroundSize: '22px 22px',
              backgroundColor: '#F6F3EE',
            }
      }
    >
      {image && (
        <>
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
          {/* Keeps the type readable over the left of the image */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(10,24,48,0.78) 0%, rgba(10,24,48,0.45) 55%, rgba(10,24,48,0.15) 100%), linear-gradient(180deg, rgba(10,24,48,0.35) 0%, rgba(10,24,48,0) 40%)',
            }}
          />
        </>
      )}
      <div
        className={`relative mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-10 ${
          dark ? '' : 'md:grid-cols-[1.35fr_1fr] md:gap-16 lg:gap-24'
        }`}
      >
        <div>
          <Breadcrumbs trail={trail} light={dark} />
          <h1
            className={`max-w-[14ch] font-display leading-[1.04] tracking-tight ${dark ? 'text-bone' : 'text-ink'}`}
            style={{ fontSize: 'clamp(2.6rem, 5.6vw, 4.75rem)' }}
          >
            {heading}
          </h1>
          <p className={`mt-6 max-w-lg text-base leading-relaxed md:mt-8 md:text-lg ${dark ? 'text-bone/80' : 'text-secondary'}`}>
            {intro}
          </p>
          {cta && (
            <div className="mt-8 md:mt-10">
              <Link
                href={cta.href}
                className={`group inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium transition-colors ${
                  dark ? 'bg-bone text-ink hover:bg-bone/90' : 'bg-ink text-bone hover:bg-ink/85'
                }`}
              >
                {cta.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
                >
                  <path d="M2 10 L10 2 M3.5 2 H10 V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Without a photograph: a single quiet brand mark, the homepage's
            tinted panel with an icon and the copper line that drops into it. */}
        {!dark && Mark && (
          <div aria-hidden="true" className="relative hidden aspect-[4/5] max-h-[26rem] w-full rounded-[2px] bg-terracotta/[0.08] md:block">
            <span className="absolute left-10 top-0 h-20 w-[2.5px] rounded-full bg-terracotta lg:left-12" />
            <span className="absolute left-10 top-20 h-2 w-2 -translate-x-[2.75px] rounded-full bg-terracotta lg:left-12" />
            <Mark weight="light" className="absolute bottom-10 left-8 h-40 w-40 text-ink lg:left-10 lg:h-48 lg:w-48" />
          </div>
        )}
      </div>
    </section>
  )
}

export type Problem = { Icon: PhosphorIcon; title: string; body: string }

export function ProblemBand({ heading, problems }: { heading: string; problems: Problem[] }) {
  return (
    <section data-nav-theme="dark" className="bg-navy px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl leading-[1.12] text-bone md:text-4xl lg:text-[2.75rem]">{heading}</h2>
        </ScrollReveal>
        <ul className="mt-8 border-b border-bone/15 md:mt-12">
          {problems.map(({ Icon, title, body }, i) => (
            <li key={title} className="border-t border-bone/15">
              <ScrollReveal delay={i * 60} className="flex items-center justify-between gap-6 py-7 md:gap-10 md:py-9">
                <div>
                  <h3 className="font-display text-2xl leading-[1.15] text-bone md:text-4xl">{title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-bone/75 md:mt-3">{body}</p>
                </div>
                <Icon weight="light" aria-hidden="true" className="h-11 w-11 shrink-0 text-bone md:h-16 md:w-16" />
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
