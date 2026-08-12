'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#10233F' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-5">About</p>
            <p className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-bone leading-[1.15] mb-6">
              A degree in branding, and a career spent building software.
            </p>
            <p className="text-base leading-relaxed max-w-md mb-6" style={{ color: 'rgba(246,243,238,0.65)' }}>
              Most people specialise in one or the other. William Langdown is built on both.
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
