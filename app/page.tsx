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
  title: 'William Langdown | Web Designer in Taunton & Somerset',
  description: 'Web designer based in Taunton, Somerset, working with businesses from Bristol to Exeter. I build websites that turn visitors into customers, backed by a degree in branding and a real understanding of how people decide to trust a business.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'William Langdown | Web Designer in Taunton & Somerset',
    description: 'Web designer based in Taunton, Somerset, working with businesses from Bristol to Exeter. I build websites that turn visitors into customers.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Langdown | Web Designer in Taunton & Somerset',
    description: 'Web designer based in Taunton, Somerset, working with businesses from Bristol to Exeter.',
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
      name: 'William Langdown - Web Design & UX Consultancy',
      url: 'https://williamlangdown.com',
      description: 'Freelance web design, UX audits, and website development based in Taunton, Somerset, serving businesses across the South West and further afield.',
      provider: { '@id': 'https://williamlangdown.com/#person' },
      areaServed: ['Taunton', 'Chard', 'Frome', 'Somerset', 'Bristol', 'Exeter', 'GB'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design Services',
        itemListElement: [
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
              name: 'Website Design & Development',
              description: 'A complete website designed and built around your customers, ready to launch.',
            },
            priceSpecification: { '@type': 'PriceSpecification', price: '1495', priceCurrency: 'GBP', minPrice: '1495' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Starter Sites',
              description: 'A simple three-page website, home, about, and contact, built from a ready-made design and live in about a week.',
            },
            priceSpecification: { '@type': 'PriceSpecification', price: '495', priceCurrency: 'GBP', minPrice: '495' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Support & Improvements',
              description: 'Ongoing help with your existing website. Updates, fixes, and improvements on an hourly basis.',
            },
            priceSpecification: { '@type': 'PriceSpecification', price: '50', priceCurrency: 'GBP', unitCode: 'HUR' },
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
        <ProblemsSection />
        <ProjectShowcase />
        <ServicesSection />
        <AboutSection />
        <ReviewSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
