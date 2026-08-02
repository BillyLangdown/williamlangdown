import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import { getCaseStudy } from '@/lib/queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Audits in Taunton & Somerset | William Langdown',
  description:
    'A thorough written review of your website covering design, messaging, trust signals and performance, with a video walkthrough. From £145.',
  alternates: { canonical: 'https://williamlangdown.com/services/website-audits' },
  openGraph: {
    title: 'Website Audits in Taunton & Somerset | William Langdown',
    description:
      'A thorough written review of your website covering design, messaging, trust signals and performance, with a video walkthrough. From £145.',
    url: 'https://williamlangdown.com/services/website-audits',
  },
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

const checks = [
  { title: 'UX and conversion', body: 'How easy it is to find what they need and take the next step, whether that’s a call, an enquiry, or a purchase.' },
  { title: 'Messaging and trust signals', body: 'Whether it’s clear what you do, who it’s for, and why someone should choose you over anyone else.' },
  { title: 'Structure and navigation', body: 'How the site is laid out and whether visitors can move through it without getting lost or giving up.' },
  { title: 'Mobile responsiveness', body: 'How it actually behaves on a phone, since that’s where most visitors will meet it first.' },
  { title: 'Performance', body: 'Load times and technical issues that quietly cost you visitors before they’ve even read a word.' },
  { title: 'SEO basics', body: 'Whether the fundamentals are in place to help the right people find you in search.' },
]

const faqs = [
  {
    q: 'Will you just tell me to rebuild my whole site?',
    a: "Not necessarily. Plenty of issues can be fixed without starting again, and the report always separates quick fixes from anything bigger. If a rebuild genuinely is the right call, I'll explain why, but there's no obligation to take it further.",
  },
  {
    q: 'Does this work if I’m on Wix, Squarespace, or something else?',
    a: 'Yes. The audit looks at how your site works and reads for visitors, not the platform it’s built on, so it applies whatever you’re using.',
  },
  {
    q: 'How long does it take to get my report?',
    a: 'Usually within a few working days of getting access to your site and a bit of background on your business.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You get a written report and a video walkthrough talking through each point. What you do with it is up to you, whether that’s making the changes yourself, coming back for a full redesign, or nothing at all.',
  },
  {
    q: 'Is this just a sales pitch for a redesign?',
    a: "No. Plenty of audits stop there, with the business making the changes themselves or with someone else. It's priced and structured to stand on its own.",
  },
]

export default async function WebsiteAuditsPage() {
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
                  From £145
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink max-w-3xl">
                  Website audits
                </h1>
                <p className="text-base text-secondary mt-4 max-w-xl leading-relaxed">
                  If you&apos;re not sure why your site isn&apos;t bringing in enquiries, or you just
                  want a second opinion before a bigger project, this is a straightforward, honest
                  review of what&apos;s working and what isn&apos;t.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact?service=audit"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Get an audit
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What's checked */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-10 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What gets checked</h2>
              <p className="text-sm text-secondary mt-1 max-w-lg">
                A general review, not a narrow technical SEO report. Everything that affects whether a
                visitor trusts you and gets in touch.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {checks.map((check, i) => (
                <ScrollReveal key={check.title} delay={i * 60}>
                  <div className="rounded-sm border border-border-light bg-white/80 p-6 h-full" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <h3 className="text-sm font-semibold text-ink mb-2">{check.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{check.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">What you get</h2>
              <p className="text-sm text-secondary leading-relaxed">
                A written report covering everything above in plain English, plus a video walkthrough
                talking through the findings so nothing gets lost in translation. Issues are separated
                into quick fixes and bigger changes, so you know what to prioritise first.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Results: honest framing, audit led to a full redesign here */}
        <section className="px-6 pt-4 pb-0">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-sm text-secondary leading-relaxed">
                A couple of the audits I&apos;ve carried out led to a full redesign afterwards. Here&apos;s
                what changed for one of them.
              </p>
            </ScrollReveal>
          </div>
        </section>
        <BeforeAfterSection caseStudy={caseStudy} />

        {/* FAQ */}
        <section className="px-6 py-20 bg-subtle">
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

        {/* Cross-link to Web Design */}
        <section className="px-6 pt-20 pb-0" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white/80 px-6 py-6 sm:px-8" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <p className="text-sm text-secondary flex-1">
                  If the audit turns up bigger issues than a few tweaks can fix, a Growth Website might
                  be the better starting point.
                </p>
                <Link
                  href="/services/growth-websites"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Growth Websites
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
