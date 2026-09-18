import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import BackgroundWord from '@/components/BackgroundWord'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | William Langdown',
  description: 'A degree in branding, and a career spent building software. Somerset-based, working with UK businesses nationwide.',
  alternates: { canonical: 'https://williamlangdown.com/about' },
  openGraph: {
    title: 'About | William Langdown',
    description: 'A degree in branding, and a career spent building software. Somerset-based, working with UK businesses nationwide.',
    url: 'https://williamlangdown.com/about',
  },
}

const facts = [
  'BA (Hons) Advertising & Branding',
  'Software development experience',
  'Somerset, UK, working nationwide',
  'Independent practice',
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-bone">

        {/* HEADER */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-semibold text-secondary mb-6">About</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink max-w-3xl">
                A degree in branding, and a career spent building software.
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* PORTRAIT + FACTS */}
        <section className="px-6 pb-24 md:pb-32">
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

        {/* STATEMENT */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="font-display text-3xl md:text-5xl leading-[1.15] text-ink">
                Most people specialise in one side of that or the other.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* NAVY CONTINUATION */}
        <section data-nav-theme="dark" className="relative z-10 overflow-hidden" style={{ background: '#10233F' }}>
          <BackgroundWord word="About" color="#F6F3EE" opacity={0.045} parallax className="top-8 right-0 md:top-10" />
          <div className="relative z-10 px-6 py-24 md:py-32">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
                <p className="font-display text-2xl md:text-3xl leading-[1.3] text-bone">
                  Working across both keeps strategy and implementation connected through a
                  project, rather than handed off between people who never talk to each other.
                </p>
                <p className="mt-6 text-base md:text-lg text-bone/70 leading-relaxed">
                  Collaborators come in where a project genuinely calls for it.
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
