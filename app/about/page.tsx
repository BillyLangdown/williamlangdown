import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
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

        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-6">About</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink max-w-3xl">
                A degree in branding, and a career spent building software.
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <ScrollReveal>
              <div className="relative w-full max-w-sm" style={{ aspectRatio: '4 / 5', border: '1px solid rgba(16,35,63,0.14)' }}>
                <Image src="/images/portrait.png" alt="William Langdown" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 400px" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {facts.map((f) => (
                  <li key={f} className="text-sm text-secondary border-t border-border-light pt-3">{f}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <p className="text-base md:text-lg text-secondary leading-relaxed">
                Most people specialise in one side of that or the other. Working across both keeps
                strategy and implementation connected through a project, rather than handed off
                between people who never talk to each other. Collaborators come in where a project
                genuinely calls for it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
