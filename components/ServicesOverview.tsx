import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

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
    headline: 'Practical technology that makes everyday work easier.',
    description:
      'I help businesses automate repetitive tasks, connect existing software and introduce technology that reduces unnecessary manual work. This can include AI tools, integrations and custom software developed around specific needs.',
    covers: [
      'Workflow automation',
      'Software integrations',
      'Practical AI implementation',
      'Custom internal tools',
      'Software development',
      'Business Automation Reviews',
    ],
  },
  {
    heading: (
      <>
        Web
        <br />
        &amp; Digital
      </>
    ),
    headline: 'Websites and digital experiences designed around your customers.',
    description:
      'I design and develop websites and digital experiences that are clear, easy to use and built around what customers need. My work also covers UX, conversion optimisation and branding.',
    covers: [
      'Website design and development',
      'UX design',
      'Conversion optimisation',
      'Branding',
      'Digital experiences',
      'UX & Conversion Audits',
    ],
  },
]

export default function ServicesOverview() {
  return (
    <section id="capabilities" data-nav-theme="light" className="relative z-10 bg-bone px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 border-t border-border-light md:grid-cols-2">
          {services.map((s, i) => (
            <ScrollReveal
              key={i}
              threshold={0.15}
              delay={i * 60}
              className={
                i === 0
                  ? 'py-10 md:py-14 md:pr-10 lg:pr-14'
                  : 'border-t border-border-light py-10 md:border-l md:border-t-0 md:py-14 md:pl-10 lg:pl-14'
              }
            >
              <h3 className={wordClass} style={wordStyle}>
                {s.heading}
              </h3>
              <p className="mt-6 max-w-md font-display text-lg leading-snug text-ink md:text-xl">{s.headline}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-secondary md:text-base">{s.description}</p>
              <ul className="mt-8 max-w-sm border-t border-border-light">
                {s.covers.map((item) => (
                  <li key={item} className="border-b border-border-light py-3">
                    <p className="text-sm text-ink">{item}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal threshold={0.15} className="border-t border-border-light pt-6 md:flex md:justify-end">
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
    </section>
  )
}
