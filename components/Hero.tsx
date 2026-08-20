'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showFixedLayer, setShowFixedLayer] = useState(false)

  useEffect(() => {
    const updateHeroState = () => {
      const hero = heroRef.current
      if (!hero) return

      const rect = hero.getBoundingClientRect()
      const scrolledIntoHero = -rect.top
      const isMobile = window.innerWidth < 768

      /*
       * Mobile switches into the intro slightly earlier and has less
       * total scroll space. This avoids exposing an empty spacer while
       * Safari changes viewport height / browser chrome on reverse scroll.
       */
      const introStart = isMobile
        ? window.innerHeight * 0.72
        : window.innerHeight * 0.88

      setShowFixedLayer(scrolledIntoHero >= introStart)
    }

    updateHeroState()

    window.addEventListener('scroll', updateHeroState, { passive: true })
    window.addEventListener('resize', updateHeroState)

    return () => {
      window.removeEventListener('scroll', updateHeroState)
      window.removeEventListener('resize', updateHeroState)
    }
  }, [])

  return (
    <>
      {/*
       * MOBILE
       * 200svh total:
       * cover -> intro -> next section
       *
       * DESKTOP
       * 300svh total:
       * preserves the slower cinematic sequence.
       */}
      <div
        ref={heroRef}
        className="
          relative
          h-[200svh]
          md:h-[300svh]
          md:[scroll-snap-align:start]
        "
      >
        {/* Sticky background */}
        <div
          data-nav-theme="dark"
          className="sticky top-0 z-0 h-[100svh] w-full overflow-hidden"
        >
          <div className="absolute inset-0">
            <HeroMedia
              imageSrc={IMAGE_SRC}
              imageAlt="Navy and terracotta brand texture, William Langdown"
            />
          </div>

          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: SCRIM }}
          />
        </div>

        {/* First hero frame */}
        <div
          className="relative z-10 h-[100svh]"
          style={{
            marginTop: '-100svh',
          }}
        >
          {/* Desktop hero navigation */}
          <nav
            aria-label="Main navigation"
            className="
              absolute
              right-10
              top-9
              z-20
              hidden
              md:block
              lg:right-12
              lg:top-10
            "
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

          {/* Main hero typography */}
          <div className="relative flex h-full flex-col justify-end px-6 pb-14 md:px-10 md:pb-16">
            <h1
              className="
                font-sans
                font-extrabold
                uppercase
                leading-[0.92]
                tracking-tight
                text-bone
              "
              style={{
                fontSize: 'clamp(2.75rem, 12vw, 9.5rem)',
              }}
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

        {/*
         * Desktop-only snap point.
         * Avoid scroll snapping on mobile Safari.
         */}
        <div
          aria-hidden
          className="
            absolute
            left-0
            hidden
            h-px
            w-full
            md:block
            md:[scroll-snap-align:start]
          "
          style={{
            top: '100svh',
          }}
        />
      </div>

      {/*
       * Fixed intro frame.
       * The next normal-flow section should remain above this, e.g.
       * relative z-10, so it scrolls over the intro.
       */}
      <div
        data-nav-theme="dark"
        aria-hidden={!showFixedLayer}
        className={`
          fixed
          inset-0
          z-0
          flex
          items-center
          justify-center
          overflow-hidden
          transition-opacity
          ${
            showFixedLayer
              ? 'pointer-events-auto opacity-100 duration-300'
              : 'pointer-events-none opacity-0 duration-100'
          }
        `}
      >
        <div className="absolute inset-0">
          <HeroMedia imageSrc={IMAGE_SRC} imageAlt="" />
        </div>

        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: SCRIM }}
        />

        {/* Intro copy */}
        <div
          className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            transition-[opacity,transform]
            ease-out
            ${
              showFixedLayer
                ? 'translate-y-0 opacity-100 duration-700'
                : 'translate-y-4 opacity-0 duration-100'
            }
          `}
        >
          <IntroStatement />
        </div>
      </div>
    </>
  )
}