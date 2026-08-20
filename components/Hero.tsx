'use client'

import Link from 'next/link'
import HeroMedia from '@/components/HeroMedia'
import IntroStatement from '@/components/IntroStatement'

const SCRIM =
  'linear-gradient(180deg, rgba(10,24,48,0.15) 0%, rgba(10,24,48,0.05) 40%, rgba(10,24,48,0.55) 100%)'

const IMAGE_SRC = '/images/hero-brand-texture-navy-terracotta.jpg'

const HERO_NAV = [
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'What I do' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// One image, pinned via `sticky` the whole way through, on every
// screen size. The heading scrolls away over it (normal flow, negative
// margin so it starts coincident with the image), then the intro line
// - also just `sticky`, nothing fancier - takes its place and holds for
// a screen before the next section naturally scrolls up and over both.
// No JS, no `position: fixed`, no state toggling - the earlier version
// added that specifically to keep the image frozen while being
// covered, but it's what kept breaking on mobile. This version moves
// image + intro together with the next section during that final
// handoff instead of holding them frozen underneath it - a smaller
// visual trade against something that actually works everywhere.
export default function Hero() {
  return (
    <div className="relative" style={{ height: 'calc(200vh + 240px)', background: '#10233F' }}>
      <div
        data-nav-theme="dark"
        className="sticky top-0 z-0 w-full overflow-hidden"
        style={{ height: 'calc(100vh + 120px)' }}
      >
        <div className="absolute inset-0">
          <HeroMedia
            imageSrc={IMAGE_SRC}
            imageAlt="Navy and terracotta brand texture, William Langdown"
          />
        </div>
        <div aria-hidden className="absolute inset-0" style={{ background: SCRIM }} />
      </div>

      <div
        className="relative z-10"
        style={{ height: 'calc(100vh + 120px)', marginTop: 'calc(-100vh - 120px)' }}
      >
        <nav
          aria-label="Main navigation"
          className="absolute right-10 top-9 z-20 hidden md:block lg:right-12 lg:top-10"
        >
          <ul className="m-0 flex list-none flex-col items-end gap-[13px] p-0">
            {HERO_NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    block
                    text-right
                    text-[13px]
                    font-medium
                    leading-none
                    tracking-[-0.01em]
                    text-bone
                    transition-colors
                    duration-200
                    hover:text-terracotta
                    lg:text-[14px]
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*
         * Fixed, plain bottom offset - no `lvh`/`svh`/`calc()` mixing
         * newer viewport units. Those units may not be reliably
         * supported on your browser, which is the likely reason the
         * previous calc()-based fix didn't actually work. This is a
         * flat, generous safety margin using nothing but a normal
         * value, so there's no feature-support risk left to guess at.
         */}
        <div className="absolute inset-x-0 bottom-24 px-6 md:bottom-16 md:px-10">
          <h1
            className="font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-bone"
            style={{ fontSize: 'clamp(2.75rem, 12vw, 9.5rem)' }}
          >
            William
            <br />
            Langdown
          </h1>

          <p className="mt-5 text-sm font-medium tracking-wide text-bone/80 md:mt-7 md:text-base">
            Brand <span className="text-terracotta">/</span> Digital{' '}
            <span className="text-terracotta">/</span> Technology
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-10 flex w-full items-center justify-center" style={{ height: 'calc(100vh + 120px)' }}>
        <IntroStatement />
      </div>
    </div>
  )
}
