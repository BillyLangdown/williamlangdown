import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const arrow = (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const textLinkClass =
  'text-ink underline underline-offset-4 decoration-ink/30 hover:text-terracotta hover:decoration-terracotta transition-colors'

export function Breadcrumbs({ trail, light = false }: { trail: { name: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-8 text-sm ${light ? 'text-bone/60' : 'text-secondary'}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-tertiary">/</span>}
            {item.href ? (
              <Link href={item.href} className="underline underline-offset-4 hover:text-terracotta transition-colors">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className={light ? 'text-bone' : 'text-ink'}>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
    >
      {children}
      {arrow}
    </Link>
  )
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={textLinkClass}>
      {children}
    </Link>
  )
}

/**
 * Service hero. The service name is set large in the brand's uppercase sans
 * so it is identified instantly; the outcome follows in the editorial serif.
 * Both sit inside the single h1, so the heading still reads as a sentence.
 */
export function ServiceHero({
  crumbs,
  name,
  outcome,
  intro,
  price,
  priceNote,
  cta,
  secondary,
}: {
  crumbs: { name: string; href?: string }[]
  name: string
  outcome: string
  intro: string
  price: string
  priceNote: string
  cta: { href: string; label: string }
  secondary?: React.ReactNode
}) {
  return (
    <section
      className="px-6 pt-28 pb-12 md:pt-32 md:pb-14"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(16,35,63,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F6F3EE',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs trail={crumbs} />
        <div>
          <h1>
            <span
              className="block font-sans font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.4rem, 6.4vw, 5rem)' }}
            >
              {name}
            </span>{' '}
            <span className="mt-4 block max-w-4xl font-display text-2xl leading-[1.15] text-ink md:text-4xl">
              {outcome}
            </span>
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
            <p className="max-w-xl text-base leading-relaxed text-secondary md:text-lg">{intro}</p>
            <div className="flex flex-col items-start gap-5">
              <div>
                <p className="font-display text-3xl leading-none text-ink">{price}</p>
                <p className="mt-2 text-sm text-secondary">{priceNote}</p>
              </div>
              <PrimaryLink href={cta.href}>{cta.label}</PrimaryLink>
              {secondary && <p className="text-sm leading-relaxed text-secondary">{secondary}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Short, recognisable problems set large on navy. */
export function StatementBand({ items, note }: { items: string[]; note?: React.ReactNode }) {
  return (
    <section data-nav-theme="dark" className="bg-navy px-6 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-10">
          {items.map((t, i) => (
            <li key={t}>
              <ScrollReveal delay={i * 50} className="flex gap-4">
                <span aria-hidden="true" className="mt-[0.65em] block h-2.5 w-2.5 shrink-0 bg-terracotta" />
                <p className="font-display text-xl leading-[1.3] text-bone md:text-[1.65rem]">{t}</p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
        {note && (
          <ScrollReveal className="mt-10 max-w-xl border-t border-bone/15 pt-6 text-sm leading-relaxed text-bone/65 md:text-base">
            {note}
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

/** Section heading plus optional lead, used above visuals. */
export function SectionHead({
  title,
  lead,
  light = false,
}: {
  title: string
  lead?: React.ReactNode
  light?: boolean
}) {
  return (
    <ScrollReveal className="mb-8 max-w-2xl md:mb-10">
      <h2 className={`font-display text-3xl leading-[1.1] md:text-4xl ${light ? 'text-bone' : 'text-ink'}`}>{title}</h2>
      {lead && (
        <p className={`mt-3 text-base leading-relaxed ${light ? 'text-bone/70' : 'text-secondary'}`}>{lead}</p>
      )}
    </ScrollReveal>
  )
}

/** Real work as evidence: image beside a short, honest explanation. */
export function Evidence({
  image,
  imageSide = 'left',
  title,
  children,
  stats,
  href,
  hrefLabel,
}: {
  image: { src: string; alt: string; width: number; height: number; className?: string }
  imageSide?: 'left' | 'right'
  title: string
  children: React.ReactNode
  stats?: { value: string; label: string }[]
  href: string
  hrefLabel: string
}) {
  return (
    <section className="px-6 py-14 md:py-20">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 md:gap-16 ${
          imageSide === 'left' ? 'md:grid-cols-[1.15fr_1fr]' : 'md:grid-cols-[1fr_1.15fr]'
        }`}
      >
        <ScrollReveal className={imageSide === 'right' ? 'md:order-2' : ''}>
          <div className="relative overflow-hidden border border-border-light bg-subtle">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, 55vw"
              className={`h-auto w-full ${image.className ?? ''}`}
            />
            <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] bg-terracotta" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={80} className="max-w-md">
          <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">{title}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-secondary">{children}</div>
          {stats && (
            <dl className="mt-6 flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-2xl text-ink md:text-3xl">{s.value}</dd>
                  <dt className="mt-0.5 text-xs text-tertiary">{s.label}</dt>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-6">
            <TextLink href={href}>{hrefLabel}</TextLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/** Price on the left, a short process on the right. */
export function PriceProcess({
  amount,
  children,
  steps,
}: {
  amount: string
  children: React.ReactNode
  steps: { title: string; body: string }[]
}) {
  return (
    <section data-nav-theme="dark" className="bg-navy px-6 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <ScrollReveal>
            <p className="font-display text-5xl leading-none text-bone lg:text-6xl">{amount}</p>
            <div className="mt-6 max-w-md space-y-4 text-sm leading-relaxed text-bone/70 md:text-base">{children}</div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <ol className="relative space-y-6 border-l border-bone/20 pl-7">
              {steps.map((s) => (
                <li key={s.title} className="relative">
                  <span aria-hidden="true" className="absolute -left-[33px] top-1.5 block h-2.5 w-2.5 bg-terracotta" />
                  <p className="text-base font-semibold text-bone">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-bone/65">{s.body}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/** The optional review, offered once, near the end. */
export function ReviewOffer({ children }: { children?: React.ReactNode }) {
  return (
    <section className="px-6 py-12 md:py-16">
      <ScrollReveal className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-16">
        <p className="max-w-2xl font-display text-xl leading-[1.35] text-ink md:text-2xl">
          {children ?? (
            <>
              Not sure what is worth doing first? The Business Automation Review is a £395 look at
              the workflows you choose, credited against implementation commissioned within 60 days.
            </>
          )}
        </p>
        <Link
          href="/business-automation-review"
          className={`shrink-0 inline-flex items-center gap-2 text-sm font-medium ${textLinkClass}`}
        >
          About the review
          {arrow}
        </Link>
      </ScrollReveal>
    </section>
  )
}

/** One quiet line of onward links. */
export function AlsoLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Related" className="px-6 pb-12">
      <p className="max-w-6xl mx-auto text-sm leading-relaxed text-secondary">
        Also:{' '}
        {links.map((l, i) => (
          <span key={l.href}>
            {i > 0 && (i === links.length - 1 ? ' and ' : ', ')}
            <Link href={l.href} className={textLinkClass}>
              {l.label}
            </Link>
          </span>
        ))}
        .
      </p>
    </nav>
  )
}
