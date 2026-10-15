import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import SectionNav from '@/components/SectionNav'

const wordClass = 'font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-ink'
const wordStyle = { fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)' }

const services = [
  {
    heading: (
      <>
        Technology
        <br />
        &amp; Automation
      </>
    ),
    description:
      'I develop automations, connect existing systems and build software that helps businesses reduce manual work.',
    cta: 'Explore technology services',
    href: '/services#technology-automation',
  },
  {
    heading: (
      <>
        Web
        <br />
        &amp; Digital
      </>
    ),
    description:
      'I design and develop websites and digital experiences that are easier to use, understand and navigate.',
    cta: 'Explore web & digital services',
    href: '/services#web-digital',
  },
]

export default function ServicesOverview() {
  return (
    <section id="capabilities" data-nav-theme="light" className="relative z-10 bg-bone">
      <SectionNav />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 border-y border-border-light md:grid-cols-2">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.href}
              threshold={0.15}
              delay={i * 60}
              className={
                i === 0
                  ? 'py-10 md:py-12 md:pr-10 lg:pr-14'
                  : 'border-t border-border-light py-10 md:border-l md:border-t-0 md:py-12 md:pl-10 lg:pl-14'
              }
            >
              <h2 className={wordClass} style={wordStyle}>
                {s.heading}
              </h2>
              <p className="mt-6 max-w-md font-display text-lg leading-snug text-ink md:text-xl">{s.description}</p>
              <div className="mt-6">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
                >
                  {s.cta}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
