'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import BackgroundWord from '@/components/BackgroundWord'

export default function AboutSection() {
  return (
    <section data-nav-theme="dark" className="relative overflow-hidden" style={{ background: '#10233F' }}>
      <BackgroundWord word="About" color="#F6F3EE" opacity={0.045} parallax className="top-8 right-0 md:top-10" />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
        <div className="relative w-full" style={{ aspectRatio: '4 / 5' }}>
          <Image
            src="/images/portrait.png"
            alt="William Langdown"
            fill
            className="object-cover object-top"
            style={{ filter: 'grayscale(1) contrast(1.05) brightness(0.95)' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(16,35,63,0.4) 0%, transparent 35%)' }} />
          <div className="absolute top-0 left-0 w-[3px] h-full bg-terracotta" />
        </div>

        <div className="flex items-center px-6 py-14 md:px-14 md:py-0">
          <ScrollReveal>
            <p className="text-sm font-semibold text-bone/70 mb-5">About</p>
            <p className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-bone leading-[1.15] mb-6">
              A degree in branding, and a career spent building software.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-bone hover:text-terracotta transition-colors"
            >
              More about the practice
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
