'use client'

import HeroMedia from '@/components/HeroMedia'

export default function Hero() {
  return (
    <section data-nav-theme="dark" className="sticky top-0 z-0 w-full overflow-hidden" style={{ height: '100svh' }}>
      <div className="absolute inset-0">
        <HeroMedia
          imageSrc="/images/hero-brand-texture-navy-terracotta.jpg"
          imageAlt="Navy and terracotta brand texture, William Langdown"
        />
      </div>

      {/* Scrim: just enough for text contrast, not a heavy overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,24,48,0.15) 0%, rgba(10,24,48,0.05) 40%, rgba(10,24,48,0.55) 100%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-14 md:px-10 md:pb-16">
        <h1
          className="font-sans font-extrabold uppercase text-bone leading-[0.92] tracking-tight"
          style={{ fontSize: 'clamp(2.75rem, 12vw, 9.5rem)' }}
        >
          William
          <br />
          Langdown
        </h1>
        <p className="mt-5 md:mt-7 text-sm md:text-base font-medium tracking-wide text-bone/80">
          Brand <span className="text-terracotta">/</span> Digital <span className="text-terracotta">/</span> Technology
        </p>
      </div>

      {/* Quiet scroll cue, not a CTA */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-10 hidden sm:flex items-center gap-2 text-bone/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="rotate-90">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
