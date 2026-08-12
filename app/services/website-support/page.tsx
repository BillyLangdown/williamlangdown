import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Support in Taunton | William Langdown',
  description:
    'Ongoing development and consulting for an existing website or system. Development work from £60/hr, consulting and strategy from £90/hr, with no retainer and no contract.',
  alternates: { canonical: 'https://williamlangdown.com/services/website-support' },
  openGraph: {
    title: 'Website Support in Taunton | William Langdown',
    description:
      'Ongoing development and consulting for an existing website or system. Development from £60/hr, consulting and strategy from £90/hr, with no retainer and no contract.',
    url: 'https://williamlangdown.com/services/website-support',
  },
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(16,35,63,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F6F3EE',
}

const examples = [
  { task: 'A few copy changes or a new page', time: 'Usually 1 to 2 hours' },
  { task: 'Design tweaks or refreshing a section', time: 'Usually 2 to 4 hours' },
  { task: 'A small bug fix', time: 'Often under an hour' },
  { task: 'Ongoing maintenance and monitoring', time: 'Billed only for the time it takes' },
]

const faqs = [
  {
    q: 'Do I need to sign a contract?',
    a: "No. You pay for the hours worked and nothing ongoing, so there's nothing to cancel if you don't need anything for a while.",
  },
  {
    q: "What's the difference between development and consulting?",
    a: "Development is hands-on work: building, fixing and updating a site or system. Consulting is more about planning and advice, working out the right approach before anything gets built, or giving technical direction on a project I'm not building myself.",
  },
  {
    q: 'How do you estimate how long something will take?',
    a: "I'll give you a rough estimate before starting, and let you know if anything looks like it's going to run over before it does, not after.",
  },
  {
    q: 'Does it need to be a big job, or can I ask for small changes only?',
    a: "Small changes are exactly what this is for. There's no minimum, and no job is too small to ask about.",
  },
]

export default function WebsiteSupportPage() {
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
                  style={{ background: 'rgba(193,97,61,0.08)', color: '#C1613D' }}
                >
                  £60 to £90 / hour
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink max-w-3xl">
                  Website support
                </h1>
                <p className="text-base text-secondary mt-4 max-w-xl leading-relaxed">
                  Ongoing development and consulting for an existing website or system. Updates, fixes,
                  strategy and improvements, without signing up to a retainer or a contract.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact?service=support"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Get in touch
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing clarity */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="rounded-sm overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-border-light rounded-sm">
                  <div className="p-6 pt-7 sm:border-r border-border-light">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Development work</p>
                    <p className="text-3xl font-heading font-bold text-ink mb-2">£60 / hour</p>
                    <p className="text-sm text-secondary leading-relaxed">
                      Updates, fixes, new features and general development work on an existing site or system.
                    </p>
                  </div>
                  <div className="p-6 pt-7 border-t sm:border-t-0 border-border-light">
                    <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Consulting &amp; strategy</p>
                    <p className="text-3xl font-heading font-bold text-ink mb-2">£90 / hour</p>
                    <p className="text-sm text-secondary leading-relaxed">
                      Planning, technical advice and strategy work that needs more than just implementation.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Typical tasks */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-10 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What this usually covers</h2>
              <p className="text-sm text-secondary mt-1 max-w-lg">
                A rough idea of typical jobs and how long they tend to take, so there are no surprises.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {examples.map((example, i) => (
                <ScrollReveal key={example.task} delay={i * 60}>
                  <div className="flex items-center justify-between gap-4 rounded-sm border border-border-light bg-white/80 px-6 py-5" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <span className="text-sm text-ink font-medium">{example.task}</span>
                    <span className="text-xs text-secondary shrink-0 text-right">{example.time}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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

        {/* Cross-link to Web Design */}
        <section className="px-6 pt-20 pb-0 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white px-6 py-6 sm:px-8">
                <p className="text-sm text-secondary flex-1">
                  If your site needs more than a few updates, a full redesign might be worth looking at
                  instead.
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

        {/* Cross-link to Care Plans */}
        <section className="px-6 pt-6 pb-0 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white px-6 py-6 sm:px-8">
                <p className="text-sm text-secondary flex-1">
                  Would rather a fixed monthly cost than billing as you go? Care Plans cover hosting, or
                  hosting plus a couple of guaranteed hours a month.
                </p>
                <Link
                  href="/services/care-plans"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Care Plans
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
