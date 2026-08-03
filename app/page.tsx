import Nav from '@/components/Nav'
import PromoTicker from '@/components/PromoTicker'
import Hero from '@/components/Hero'
import ProjectShowcase from '@/components/ProjectShowcase'
import ProblemsSection from '@/components/ProblemsSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ReviewSection from '@/components/ReviewSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Web Developer & Web Designer in Taunton, Somerset | William Langdown',
  description: 'Web developer and designer based in Taunton, Somerset. I build websites, booking software and quoting tools for commercial trades and contractors, and for small businesses across the South West, personally, with no agency layers.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'Web Developer & Web Designer in Taunton, Somerset | William Langdown',
    description: 'Websites, booking software and quoting tools for commercial trades and contractors, and for any growing business. Based in Taunton, Somerset, working with businesses from Bristol to Exeter.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer & Web Designer in Taunton, Somerset | William Langdown',
    description: 'Websites, booking software and quoting tools for commercial trades and contractors, and for any growing business.',
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
      jobTitle: 'UX Designer & Web Consultant',
      description: 'I audit, design, and build websites so visitors instantly understand what you do and trust you enough to buy. I have a degree in branding and years spent studying how people behave online, and I also build apps and offer AI consulting and training.',
      email: 'hello@williamlangdown.com',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://williamlangdown.com/#service',
      name: 'William Langdown - Websites, Software & Automation',
      url: 'https://williamlangdown.com',
      description: 'Web developer and designer based in Taunton, Somerset, building websites, booking software and quoting tools for commercial trades and contractors, and custom software and automation for any growing business, serving the South West and further afield.',
      provider: { '@id': 'https://williamlangdown.com/#person' },
      areaServed: ['Taunton', 'Chard', 'Frome', 'Somerset', 'Bristol', 'Exeter', 'GB'],
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
              name: 'Growth Websites',
              description: 'Custom websites designed around your customers’ journey, built to bring in enquiries and support business growth.',
            },
            priceSpecification: { '@type': 'PriceSpecification', minPrice: '1495', maxPrice: '4000', priceCurrency: 'GBP' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Starter Websites',
              description: 'A simple three-page website, home, about, and contact, built from a ready-made design and live in about a week.',
            },
            priceSpecification: { '@type': 'PriceSpecification', price: '495', priceCurrency: 'GBP', minPrice: '495' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software & Digital Systems',
              description: 'Customer portals, internal tools, dashboards and business systems built around how a business works.',
            },
            priceSpecification: { '@type': 'PriceSpecification', price: '3000', priceCurrency: 'GBP', minPrice: '3000' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Booking Systems & Automation',
              description: 'Booking systems, automated reminders, customer management and enquiry workflows that reduce admin.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Audit',
              description: 'A thorough written review covering UX, messaging, trust signals, performance, and SEO basics.',
            },
            priceSpecification: { '@type': 'PriceSpecification', price: '145', priceCurrency: 'GBP', minPrice: '145' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Support',
              description: 'Ongoing development and consulting for an existing website or system, on an hourly basis.',
            },
            priceSpecification: { '@type': 'PriceSpecification', minPrice: '60', maxPrice: '90', priceCurrency: 'GBP', unitCode: 'HUR' },
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
        <PromoTicker />
        {/* Proof up front: ReviewSection + ProjectShowcase cover the BVS
            review, PageSpeed result and Garden Tablecloth stats, plus the
            other projects and links to their full case studies, so there's
            no separate before/after slider duplicating a subset of this. */}
        <ReviewSection />
        <ProjectShowcase />
        <AboutSection />
        <ProblemsSection />
        <ServicesSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
