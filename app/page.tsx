import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeaturedProject from '@/components/FeaturedProject'
import ServicesOverview from '@/components/ServicesOverview'
import EntryServices from '@/components/EntryServices'
import SecondaryWork from '@/components/SecondaryWork'
import ReviewSection from '@/components/ReviewSection'
import AboutSection from '@/components/AboutSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'William Langdown | Technology, Automation & Digital Consultant',
  description: 'Independent consultant in technology, automation and digital. Workflow automation, integrations, software development, websites, UX and branding for UK businesses.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'William Langdown | Technology, Automation & Digital Consultant',
    description: 'Independent consultant in technology, automation and digital. Workflow automation, integrations, software development, websites, UX and branding for UK businesses.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Langdown | Technology, Automation & Digital Consultant',
    description: 'Independent consultant in technology, automation and digital, helping UK businesses make better use of technology.',
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
      jobTitle: 'Independent Technology, Automation & Digital Consultant',
      description: 'Independent consultant combining professional software development with a background in advertising and branding, helping businesses make better use of technology.',
      email: 'hello@williamlangdown.com',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://williamlangdown.com/#service',
      name: 'William Langdown - Technology, Automation & Digital Consultant',
      url: 'https://williamlangdown.com',
      description: 'Workflow automation, software integrations, custom software, website development, UX and branding for UK businesses. Somerset-based, working with clients across the UK, remotely.',
      provider: { '@id': 'https://williamlangdown.com/#person' },
      areaServed: ['Taunton', 'Chard', 'Frome', 'Somerset', 'Bristol', 'Exeter', 'GB'],
      knowsAbout: ['Workflow Automation', 'Software Integration', 'Software Development', 'Applied AI', 'Web Development', 'UX', 'Conversion Optimisation', 'Branding', 'Technical SEO'],
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
        name: 'Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Automation Review',
              description: 'A focused review of selected workflows to find opportunities for automation, integrations and better use of existing software, with a written report of prioritised recommendations.',
              url: 'https://williamlangdown.com/business-automation-review',
            },
            price: '395',
            priceCurrency: 'GBP',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UX & Conversion Audit',
              description: 'A recorded review of how well a website communicates, builds trust and helps visitors get in touch.',
              url: 'https://williamlangdown.com/website-audit',
            },
            price: '149',
            priceCurrency: 'GBP',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technology & Automation',
              description: 'Workflow automation, software integrations, practical AI implementation, custom internal tools and software development.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web & Digital',
              description: 'Website design and development, UX, conversion optimisation, branding and digital experiences.',
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
      <Nav isHome />
      <main>
        <Hero />

<ServicesOverview />

        <FeaturedProject
  name="The Planning Enforcement Advisory"
  client="Planning enforcement consultancy"
  tags={['Strategy', 'Brand', 'UX/UI', 'Development']}
  context="A new identity and mobile-first digital experience for a specialist planning enforcement consultancy, designed to make a complex process feel clear and approachable."
  image={{
    src: '/images/pea-her0-mockup-2.png',
    alt: 'The Planning Enforcement Advisory homepage hero mockup',
    width: 1024,
    height: 1536,
  }}
  detail={{
    src: '/images/pea-what-is-pnc-mockup.png',
    alt: 'The Planning Enforcement Advisory notice explainer: "What is a Planning Contravention Notice?"',
    width: 1023,
    height: 970,
  }}
  video={{
    src: '/videos/pea-lockup.mp4',
    poster: '/images/pea-logo-poster.jpg',
    width: 2400,
    height: 1500,
    alt: 'The Planning Enforcement Advisory: animated identity mark',
  }}
  href="/case-studies/planning-enforcement-advisory"
  ctaLabel="Read case study"
/>

        <SecondaryWork />

        <ReviewSection />

        <AboutSection />

        <EntryServices />

        <CTABanner
          heading="Have a project in mind?"
          description="Tell me what you're looking to build or improve, and I'll let you know whether I can help."
          cta="Discuss a project"
        />
      </main>
      <Footer />
    </>
  )
}
