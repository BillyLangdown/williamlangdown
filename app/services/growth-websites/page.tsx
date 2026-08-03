import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import ProcessSteps from '@/components/ProcessSteps'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import { getCaseStudy } from '@/lib/queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growth Websites in Taunton & Somerset | William Langdown',
  description:
    'Custom websites designed around your customers’ journey, built to bring in enquiries and support business growth. Strategy, conversion optimisation and SEO foundations included, typically £1,500 to £4,000.',
  alternates: { canonical: 'https://williamlangdown.com/services/growth-websites' },
  openGraph: {
    title: 'Growth Websites in Taunton & Somerset | William Langdown',
    description:
      'Custom websites designed around your customers’ journey, built to bring in enquiries and support business growth. Typically £1,500 to £4,000.',
    url: 'https://williamlangdown.com/services/growth-websites',
  },
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

const signs = [
  "Your website was built years ago and hasn't kept up with your business",
  "It doesn't work properly on a phone, and most of your visitors are on one",
  "People land on it and aren't sure what you do or why they should choose you",
  "It's not bringing in enquiries, so it feels like dead weight rather than something helping you grow",
]

const included = [
  'Strategy and UX planning around how your customers actually find and buy from you',
  'Custom design, from 5 pages, fully responsive on every device',
  'Conversion-focused structure, contact forms and clear calls to action',
  'SEO foundations and analytics set up from day one',
  'Built to scale: room for more pages, features or integrations as you grow',
  'Two rounds of refinements before launch, with launch support included',
]

const faqs = [
  {
    q: 'Why is there such a range in price?',
    a: 'Every Growth Website is scoped around what the business actually needs. A five-page site with a contact form costs less than one with bookings, e-commerce or custom integrations built in, so the price reflects the scope rather than a fixed package.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most Growth Website projects take between three and six weeks from our first call to launch, depending on how much content you have ready and how many rounds of feedback we go through.',
  },
  {
    q: "What if I don't know exactly what I want yet?",
    a: "That's normal, and it's what the Discuss and Design stages are for. I'll ask the right questions about your business and your customers, and we'll shape the site together from there.",
  },
  {
    q: 'Do you write the copy for the site?',
    a: "I can, or I can work from copy you already have and tidy it up. Either way, we'll make sure it says clearly what you do and why someone should get in touch.",
  },
  {
    q: 'What happens to my site after it launches?',
    a: 'I stay on hand for the first few days after launch. After that, book Website Support whenever you need changes, or choose an optional Care Plan if you’d rather have hosting and a set amount of my time included each month. No minimum term either way.',
  },
]

export default async function GrowthWebsitesPage() {
  let caseStudy = null
  try {
    caseStudy = await getCaseStudy('the-garden-tablecloth-co')
  } catch {}

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-36 md:pb-24" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <p
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  Typically £1,500–£4,000
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink max-w-3xl">
                  Growth websites
                </h1>
                <p className="text-base text-secondary mt-4 max-w-xl leading-relaxed">
                  A website built around your customers&apos; journey, designed to turn visitors into
                  enquiries and support the business as it grows, not just a brochure with your logo on it.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact?service=growth"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Start a project
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Is this you? */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-10 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Does this sound familiar?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {signs.map((sign, i) => (
                <ScrollReveal key={sign} delay={i * 70}>
                  <div className="flex items-start gap-3 rounded-sm border border-border-light bg-white/80 px-5 py-4" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0 text-accent">
                      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 5.5v3.2M8 10.8v.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm text-secondary leading-relaxed">{sign}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Starter vs Growth: business outcome, not template vs custom */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-10 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Starter or Growth?</h2>
              <p className="text-sm text-secondary mt-1 max-w-lg">
                The difference isn&apos;t template versus custom. It&apos;s what the site is there to do for
                your business.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-border-light rounded-sm overflow-hidden">
              <div className="p-6 pt-7 sm:border-r border-border-light">
                <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-3">Starter Websites</p>
                <ul className="flex flex-col gap-2.5">
                  {['A professional online presence', 'A simple brochure website', 'Suitable for new or small businesses just getting started'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-tertiary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-7 border-t sm:border-t-0 border-border-light" style={{ background: 'rgba(37,99,235,0.03)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Growth Websites</p>
                <ul className="flex flex-col gap-2.5">
                  {["Designed around your customers' journey, from first click to enquiry", 'Built with conversion, SEO foundations and analytics from day one', 'Structured to scale as the business grows: more pages, features and traffic'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent mb-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What&apos;s included</h2>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                A complete website designed and built around how your customers actually find and buy
                from you. No idea is too big or too small to talk through.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ul className="flex flex-col gap-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-accent">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Results (real case study proof) */}
        <BeforeAfterSection caseStudy={caseStudy} />

        {/* Process */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-ink">
                How it works
              </h2>
            </ScrollReveal>
            <ProcessSteps />
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-12 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Common questions</h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 60}>
                  <h3 className="text-base font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-sm text-secondary leading-relaxed max-w-2xl">{faq.a}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-4">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white/80 px-6 py-6 sm:px-8" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <p className="text-sm text-secondary flex-1">
                  Just need something simple and fast? Starter Websites are ready in about a week, from £495.
                </p>
                <Link
                  href="/starter"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Starter Websites
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white/80 px-6 py-6 sm:px-8" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <p className="text-sm text-secondary flex-1">
                  Not sure where to start? A Website Audit gives you an honest second opinion first.
                </p>
                <Link
                  href="/services/website-audits"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Website Audits
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
