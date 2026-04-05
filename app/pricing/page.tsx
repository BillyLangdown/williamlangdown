import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

const tiers = [
  {
    id: 'audit',
    name: 'Audit',
    price: '£997',
    description:
      'A thorough review of your website through the lens of your customers. You\'ll walk away knowing exactly what to fix and why.',
    features: [
      'Full UX and conversion audit',
      'Heatmap and session recording analysis',
      'Customer journey mapping',
      'Competitor review',
      'Written report with prioritised recommendations',
      '1-hour walkthrough call',
    ],
    cta: 'Start with an audit',
    featured: false,
  },
  {
    id: 'design',
    name: 'Design',
    price: '£2,497',
    description:
      'Everything from the Audit, plus a full redesign of your key pages, grounded in insight, not guesswork.',
    features: [
      'Everything in Audit',
      'Full redesign of key pages',
      'Desktop and mobile designs',
      'Interactive prototype',
      'Design system and style guide',
      'Handoff-ready files',
    ],
    cta: 'Redesign your site',
    featured: true,
  },
  {
    id: 'build',
    name: 'Build',
    price: 'From £4,997',
    description:
      'The complete package. Audit, design, and a built, deployed, and optimised website ready to convert.',
    features: [
      'Everything in Design',
      'Full development and deployment',
      'CMS integration',
      'Performance optimisation',
      'Analytics setup',
      '30 days post-launch support',
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
              Straightforward pricing. No surprises.
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Three clear engagements depending on where you are and what you
              need. All projects start with a free discovery call.
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
                  <p
                    className={`text-xs font-medium tracking-widest uppercase mb-3 ${
                      tier.featured ? 'text-tertiary' : 'text-tertiary'
                    }`}
                  >
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
                        className={`mt-0.5 shrink-0 ${
                          tier.featured ? 'text-tertiary' : 'text-tertiary'
                        }`}
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
                Not sure which is right for you?
              </h2>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                Most clients start with an Audit, which gives us both a clear
                picture of the problems and the best path forward. From there,
                we can decide whether design, build, or both makes sense.
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
