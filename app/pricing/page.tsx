import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

const tiers = [
  {
    id: 'audit',
    name: 'Website Audits',
    price: 'From £145',
    description:
      "A thorough, written review of your website covering UX, messaging, structure, trust signals, responsiveness, performance, and SEO basics.",
    features: [
      'UX and conversion review',
      'Messaging and clarity review',
      'Trust signals and structure',
      'Responsiveness and performance',
      'SEO basics',
      'Written report with prioritised recommendations',
      'Short video walkthrough',
    ],
    cta: 'Get an audit',
    href: '/contact?service=audit',
    featured: false,
  },
  {
    id: 'design',
    name: 'Website Design & Development',
    price: 'From £1,495',
    description:
      'A complete website designed and built around your customers, ready to launch.',
    features: [
      'Up to 5 core pages',
      'Fully responsive design',
      'Contact forms',
      'Basic SEO setup',
      'Analytics integration',
      '2 rounds of refinements',
      'Launch support',
    ],
    cta: 'Start a project',
    href: '/contact?service=design',
    featured: true,
  },
  {
    id: 'support',
    name: 'Website Support & Improvements',
    price: '£30/hour',
    description:
      'Ongoing help with your existing website. Updates, fixes, new content, and improvements on an hourly basis.',
    features: [
      'Copy and content changes',
      'New pages or sections',
      'Design tweaks and refreshes',
      'Bug fixes and maintenance',
      'No retainer required',
    ],
    cta: 'Get in touch',
    href: '/contact?service=support',
    featured: false,
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Initial Discussion',
    description:
      'A short call to understand what you need, what you already have, and whether this project is the right fit. No commitment at this stage.',
  },
  {
    number: '02',
    title: 'Structure & Planning',
    description:
      'We map out the site structure, the pages needed, and what each one needs to achieve. This gives both of us a clear picture before any design work begins.',
  },
  {
    number: '03',
    title: 'Design Direction',
    description:
      'I put together the visual direction and layout for your site, working through feedback until the design feels right before moving into development.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'The site is built out in full. Responsive across devices, set up with contact forms, analytics, and basic SEO from the start.',
  },
  {
    number: '05',
    title: 'Review & Refinements',
    description:
      'Two rounds of revisions are included. We go through the site together, and I make any adjustments before the final version is signed off.',
  },
  {
    number: '06',
    title: 'Launch',
    description:
      'The site goes live. I handle the deployment and stay available for the first few days to make sure everything is running as it should.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24">
        {/* Header */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6">
              Clear pricing, clear outcomes.
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Three ways to work together, depending on what you need. Most
              clients start with an audit to understand what&apos;s holding their site back.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-none p-8 flex flex-col gap-8 ${
                  tier.featured
                    ? 'bg-ink text-white'
                    : 'bg-subtle text-ink'
                }`}
              >
                <div>
                  <p className={`text-xs uppercase tracking-widest mb-3 ${tier.featured ? 'text-white/50' : 'text-tertiary'}`}>
                    {tier.name}
                  </p>
                  <p
                    className={`text-4xl font-heading font-bold tracking-tight mb-4 ${
                      tier.featured ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      tier.featured ? 'text-white/50' : 'text-secondary'
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`mt-0.5 shrink-0 ${tier.featured ? 'text-white/40' : 'text-tertiary'}`}
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.featured ? 'text-white/70' : 'text-secondary'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`inline-block text-sm px-6 py-3.5 rounded-none text-center transition-colors ${
                    tier.featured
                      ? 'bg-white text-ink hover:bg-gray-100'
                      : 'bg-ink text-white hover:bg-ink/80'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Process section */}
        <section className="px-6 mb-24 bg-subtle py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-xs text-tertiary uppercase tracking-widest mb-4">Design &amp; Development</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink">
                How a project works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`border-t border-border-light py-10 ${
                    i % 3 !== 2 ? 'lg:pr-12' : ''
                  } ${
                    i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:border-l md:border-border-light'
                  } lg:border-l-0 lg:pl-0`}
                >
                  <p className="text-3xl font-heading font-bold text-ink/10 mb-5 tracking-tight">{step.number}</p>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
