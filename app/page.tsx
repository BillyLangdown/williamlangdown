import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import FrictionSection from '@/components/FrictionSection'
import ServicesSection from '@/components/ServicesSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import AboutSection from '@/components/AboutSection'
import ProblemsSection from '@/components/ProblemsSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import { getFeaturedCaseStudy } from '@/lib/queries'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let featuredCaseStudy = null
  try {
    featuredCaseStudy = await getFeaturedCaseStudy()
  } catch (err) {
    console.error('[HomePage] Failed to fetch featured case study:', err)
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <FrictionSection />
        <ServicesSection />
        <BeforeAfterSection caseStudy={featuredCaseStudy} />
        <AboutSection />
        <ProblemsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
