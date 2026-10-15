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
  title: 'Workflow Automation & Software Consultant | William Langdown',
  description: 'Independent consultant in Somerset working UK-wide. Workflow automation, software integrations, practical AI and custom software, plus websites and UX.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'Workflow Automation & Software Consultant | William Langdown',
    description: 'Independent consultant in Somerset working UK-wide. Workflow automation, software integrations, practical AI and custom software, plus websites and UX.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Automation & Software Consultant | William Langdown',
    description: 'Independent consultant in Somerset working UK-wide. Workflow automation, software integrations, practical AI and custom software, plus websites and UX.',
  },
}

const svc = (name: string, description: string, path: string) => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'Service', name, description, url: `https://williamlangdown.com${path}` },
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://williamlangdown.com/#website',
      url: 'https://williamlangdown.com',
      name: 'William Langdown',
      inLanguage: 'en-GB',
      publisher: { '@id': 'https://williamlangdown.com/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://williamlangdown.com/#person',
      name: 'William Langdown',
      url: 'https://williamlangdown.com',
      jobTitle: 'Independent Technology, Automation & Digital Consultant',
      description: 'Independent consultant combining professional software development with a background in advertising and branding, helping businesses make better use of technology.',
      email: 'hello@williamlangdown.com',
      knowsAbout: ['Workflow Automation', 'Software Integration', 'Software Development', 'Applied AI', 'Web Development', 'UX', 'Branding'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://williamlangdown.com/#service',
      name: 'William Langdown',
      url: 'https://williamlangdown.com',
      description: 'Workflow automation, software integrations, practical AI implementation, custom software, website development, UX and branding for UK businesses. Based in Somerset, working locally and remotely across the UK.',
      founder: { '@id': 'https://williamlangdown.com/#person' },
      telephone: '+44 7446 856927',
      email: 'hello@williamlangdown.com',
      // Service-area business: locality only, no street address or
      // coordinates, because no public premises are advertised.
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Taunton',
        addressRegion: 'Somerset',
        addressCountry: 'GB',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Somerset' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
      knowsAbout: ['Workflow Automation', 'Software Integration', 'Software Development', 'Applied AI', 'Web Development', 'UX', 'Conversion Optimisation', 'Branding'],
      sameAs: [
        // TODO: add Google Business Profile URL once claimed/confirmed
        // TODO: add LinkedIn profile URL
      ],
      // aggregateRating intentionally omitted: no genuine aggregate review
      // source is wired up (one on-site client review is not an aggregate).
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          svc('Workflow automation', 'Automating repetitive business processes such as enquiry routing, follow-ups, onboarding, documents and reporting. Implementations typically start from £1,500.', '/services/workflow-automation'),
          svc('Software integrations', 'Connecting existing business software so data is entered once and stays consistent.', '/services/software-integrations'),
          svc('Practical AI implementation', 'AI for specific tasks such as document processing, triage and drafting, with human approval.', '/services/ai-implementation'),
          svc('Custom software and internal tools', 'Dashboards, administrative systems and tools for work off-the-shelf software does not cover.', '/services/custom-software'),
          svc('Business Automation Review', 'A focused review of selected workflows with a written report of prioritised recommendations. £395, credited against implementation commissioned within 60 days.', '/business-automation-review'),
          svc('UX & Conversion Audit', 'A recorded review of how well a website communicates, builds trust and helps visitors get in touch. £149.', '/website-audit'),
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
