import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

const tiers = [
  {
    id: 'audit',
    name: 'Audit',
    price: '£149',
    description:
      'A clear, practical breakdown of what’s holding your website back and what to fix first.',
    features: [
      'UX and conversion review',
      'Key issues identified',
      'Prioritised list of fixes',
      'Short PDF summary',
      '10–15 min video walkthrough',
    ],
    cta: 'Get an audit',
    featured: false,
  },
  {
    id: 'design',
    name: 'Design',
    price: '£749',
    description:
      'A focused redesign of your most important page, based on real user behaviour.',
    features: [
      'Everything in Audit',
      'Redesign of 1 key page',
      'Desktop and mobile layouts',
      'Clean, developer-ready Figma file',
    ],
    cta: 'Redesign your page',
    featured: true,
  },
  {
    id: 'build',
    name: 'Build',
    price: 'From £1,495',
    description:
      'A complete redesign and build of your website, ready to launch.',
    features: [
      'Everything in Design',
      'Frontend development',
      'Basic CMS setup',
      'Performance and responsiveness',
      'Deployment support',
    ],
    cta: 'Get a full build',
    featured: false,
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
            <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-6">
              Pricing
            </p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6">
              Simple pricing. Clear outcomes.
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Three ways to improve your website depending on where you are. Most
              clients start with an audit to understand what’s holding them back.
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
                  <p className="text-xs font-medium tracking-widest uppercase mb-3 text-tertiary">
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
                      tier.featured ? 'text-tertiary' : 'text-secondary'
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
                        className="mt-0.5 shrink-0 text-tertiary"
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
                          tier.featured ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
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

        {/* FAQ note */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto max-w-2xl">
            <div className="bg-subtle rounded-none p-10">
              <h2 className="text-2xl font-heading font-bold text-ink mb-4 tracking-tight">
                Not sure where to start?
              </h2>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                The audit is the best starting point. It gives a clear picture of
                what’s working, what’s not, and what to improve first. From there,
                we can decide whether a redesign or full build makes sense.
              </p>
              <Link
                href="/contact"
                className="inline-block border border-ink text-ink text-sm px-6 py-3 rounded-none hover:bg-ink hover:text-white transition-colors"
              >
                Book a free call
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}