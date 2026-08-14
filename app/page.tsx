import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeaturedProject from '@/components/FeaturedProject'
import Capabilities from '@/components/Capabilities'
import ProcessStrip from '@/components/ProcessStrip'
import SecondaryWork from '@/components/SecondaryWork'
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

        <FeaturedProject
          name="BVS"
          client="Building Ventilation Services"
          tags={['Digital', 'Development', 'Technical SEO']}
          context="An established ventilation contractor with a dated, slow WordPress site. Rebuilt as a fast headless site the team can manage themselves."
          media={{ src: '/images/bvs-service-after.png', caption: 'bvs-ltd.co.uk' }}
          secondaryMedia={{ src: '/images/showcase-bvs-mobile.jpg', caption: 'bvs-ltd.co.uk' }}
          results={[
            { value: '56 → 98', label: 'Mobile PageSpeed' },
            { value: '69 → 100', label: 'Desktop PageSpeed' },
          ]}
          href="/case-studies/building-ventilation-services-ltd"
        />

        <Capabilities />

        <ProcessStrip />

        <SecondaryWork />

        <ReviewSection />
        <AboutSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
