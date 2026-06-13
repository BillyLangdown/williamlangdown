import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import ProblemsSection from '@/components/ProblemsSection'
import ServicesSection from '@/components/ServicesSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import { getFeaturedCaseStudy } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'William Langdown | Web Designer & Consultant',
  description: 'I build websites that turn visitors into customers. Fast, clear, and designed to get enquiries for small businesses across the UK.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'William Langdown | Web Designer & Consultant',
    description: 'I build websites that turn visitors into customers. Fast, clear, and designed to get enquiries for small businesses across the UK.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Langdown | Web Designer & Consultant',
    description: 'I build websites that turn visitors into customers.',
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
      description: 'I audit, design, and build websites so visitors instantly understand what you do and trust you enough to buy.',
      email: 'hello@williamlangdown.com',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://williamlangdown.com/#service',
      name: 'William Langdown - Web Design & UX Consultancy',
      url: 'https://williamlangdown.com',
      description: 'Freelance web design, UX audits, and website development for small businesses across the UK.',
      provider: { '@id': 'https://williamlangdown.com/#person' },
      areaServed: 'GB',
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

export default async function HomePage() {
  let featuredCaseStudy = null
  try {
    featuredCaseStudy = await getFeaturedCaseStudy()
  } catch (err) {
    console.error('[HomePage] Failed to fetch featured case study:', err)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <BeforeAfterSection caseStudy={featuredCaseStudy} />
        <ProblemsSection />
        <ServicesSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
