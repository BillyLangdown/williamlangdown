import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import BackgroundWord from '@/components/BackgroundWord'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const description =
  'William Langdown is an independent technology and digital consultant based in Taunton, Somerset. Background in software development, web development and branding. Working with UK businesses locally and remotely.'

export const metadata: Metadata = {
  title: 'About William Langdown, Independent Consultant in Somerset',
  description,
  alternates: { canonical: 'https://williamlangdown.com/about' },
  openGraph: {
    title: 'About William Langdown, Independent Consultant in Somerset',
    description,
    url: 'https://williamlangdown.com/about',
  },
}

const facts = [
  'BA (Hons) Advertising & Branding',
  'Software and web development experience',
  'Based in Taunton, Somerset, working across the UK',
  'Independent consultant',
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-bone">

        {/* HEADER */}
        <section className="px-6 pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-ink max-w-3xl">
                I&apos;m William, an independent technology and digital consultant.
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* PORTRAIT + FACTS */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end">
            <ScrollReveal>
              <div className="relative w-full" style={{ aspectRatio: '4 / 5' }}>
                <Image
                  src="/images/portrait.jpg"
                  alt="William Langdown"
                  fill
                  className="object-cover object-top"
                  style={{ filter: 'grayscale(1) contrast(1.05) brightness(0.95)' }}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
                <div className="absolute top-0 left-0 w-[3px] h-full bg-terracotta" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <ul className="border-t border-border-light">
                {facts.map((f) => (
                  <li key={f} className="border-b border-border-light py-5">
                    <p className="text-sm text-ink">{f}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="font-display text-2xl md:text-3xl leading-[1.3] text-ink">
                I studied advertising and branding, then spent my career building software and
                websites. That means I can design something and build it myself, with no hand-off
                between a designer and a developer.
              </p>
              <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-secondary">
                Today I work independently from Taunton, Somerset, with local businesses and with
                clients across the UK remotely. I help them
                reduce manual work through automation and integrations, and I build websites and
                digital experiences that are easier to use. Recent projects include a new identity
                and website for{' '}
                <Link
                  href="/case-studies/planning-enforcement-advisory"
                  className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors"
                >
                  The Planning Enforcement Advisory
                </Link>{' '}
                and a faster website for{' '}
                <Link
                  href="/case-studies/building-ventilation-services-ltd"
                  className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors"
                >
                  Building Ventilation Services
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* WORKING WITH ME */}
        <section data-nav-theme="dark" className="relative z-10 overflow-hidden" style={{ background: '#10233F' }}>
          <BackgroundWord word="About" color="#F6F3EE" opacity={0.045} parallax className="top-8 right-0 md:top-10" />
          <div className="relative z-10 px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-bone">
                  Working with me
                </h2>
                <p className="mt-6 text-base md:text-lg text-bone/75 leading-relaxed">
                  You deal with me directly, from the first conversation to the finished project.
                  We agree the scope, timing and cost before any work begins, and you can approach
                  me with a rough idea or just a problem. Where a project needs another specialist,
                  I will say so at the start.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
