import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectShowcase from '@/components/ProjectShowcase'
import PointOfView from '@/components/PointOfView'
import Capabilities from '@/components/Capabilities'
import ProcessSteps from '@/components/ProcessSteps'
import ScrollReveal from '@/components/ScrollReveal'
import ReviewSection from '@/components/ReviewSection'
import AboutSection from '@/components/AboutSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'William Langdown | Brand, Digital & Technology Practice',
  description: 'An independent practice combining brand strategy, digital design and software development for established UK businesses. Somerset-based, working nationwide.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'William Langdown | Brand, Digital & Technology Practice',
    description: 'An independent practice combining brand strategy, digital design and software development for established UK businesses. Somerset-based, working nationwide.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Langdown | Brand, Digital & Technology Practice',
    description: 'An independent practice combining brand strategy, digital design and software development for established UK businesses.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://williamlangdown.com/#person',
      name: 'William Langdown',
      url: 'https://williamlangdown.com',
      jobTitle: 'Founder, Brand, Digital & Technology Practice',
      description: 'Independent practitioner combining a background in advertising and branding with professional software development, working across strategy, design and implementation for established UK businesses.',
      email: 'hello@williamlangdown.com',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://williamlangdown.com/#service',
      name: 'William Langdown - Brand, Digital & Technology Practice',
      url: 'https://williamlangdown.com',
      description: 'Brand strategy, digital design and software development for established UK businesses whose identity, digital presence or internal systems have not kept pace with the business itself. Somerset-based, working with clients across the UK, remotely.',
      provider: { '@id': 'https://williamlangdown.com/#person' },
      areaServed: ['Taunton', 'Chard', 'Frome', 'Somerset', 'Bristol', 'Exeter', 'GB'],
      knowsAbout: ['Brand Strategy', 'Positioning', 'Digital Design', 'Web Development', 'Software Development', 'Workflow Automation', 'Technical SEO'],
      telephone: '+44 7446 856927',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Taunton',
        addressRegion: 'Somerset',
        addressCountry: 'GB',
        // postalCode intentionally omitted: not yet confirmed for public
        // publication. Add once known.
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.0158,
        longitude: -3.1058,
      },
      sameAs: [
        // TODO: add Google Business Profile URL once claimed/confirmed
        // TODO: add LinkedIn profile URL
      ],
      // aggregateRating intentionally omitted: only one manually-verified
      // review (BVS, 5.0) currently exists on-site, which isn't real
      // aggregate data (ratingValue + reviewCount from an actual review
      // source). Add this once genuine aggregate review data is wired up,
      // e.g. from Google Business Profile or Sanity.
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Strategy & Brand',
              description: 'Research, positioning, messaging and identity for businesses whose brand has not kept pace with what they have become.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital',
              description: 'Website design, development, UX, technical SEO and analytics built around the customer journey.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technology',
              description: 'Bespoke software, internal tools, integrations and workflow automation built around how the business works.',
            },
          },
        ],
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <ProjectShowcase />
        <PointOfView />
        <Capabilities />

        <section
          className="py-20 md:py-24 px-6"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-14 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">04 — Process</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1]">
                Diagnosis before production.
              </h2>
            </ScrollReveal>
            <ProcessSteps />
          </div>
        </section>

        <ReviewSection />
        <AboutSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
