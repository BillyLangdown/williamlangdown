'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroMedia from '@/components/HeroMedia'
import IntroStatement from '@/components/IntroStatement'

const SCRIM =
  'linear-gradient(180deg, rgba(10,24,48,0.15) 0%, rgba(10,24,48,0.05) 40%, rgba(10,24,48,0.55) 100%)'

const IMAGE_SRC =
  '/images/hero-brand-texture-navy-terracotta.jpg'

const HERO_NAV = [
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'What I do' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Hero() {
  return (
    <>
      {/* Mobile implementation */}
      <div className="md:hidden">
        <MobileHero />
      </div>

      {/* Desktop implementation */}
      <div className="hidden md:block">
        <DesktopHero />
      </div>
    </>
  )
}

/* ================================================================
   MOBILE

   Sticky rather than fixed.

   The visual stage remains part of the hero's own scroll container,
   which avoids the problematic fixed-layer behaviour in iOS Safari.

   Scroll sequence:

   0 ─────────────── Frame 1
   ~85svh ────────── transition begins
   ~110svh ───────── Frame 2 established
   ~220svh ───────── hero ends
                      FeaturedProject follows naturally
   ================================================================ */

function MobileHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame: number | null = null

    const update = () => {
      const hero = heroRef.current
      if (!hero) return

      const rect = hero.getBoundingClientRect()

      /*
       * svh is useful here because it represents the stable,
       * small viewport while Safari's controls are visible.
       *
       * window.innerHeight is still used as a fallback.
       */
      const viewportHeight = window.innerHeight

      const travelled = Math.max(0, -rect.top)

      /*
       * Transition starts after roughly 85% of one viewport
       * and takes about 30% of a viewport to complete.
       *
       * This gives Frame 1 genuine scroll distance instead of
       * changing immediately after the first swipe.
       */
      const transitionStart = viewportHeight * 0.85
      const transitionDistance = viewportHeight * 0.3

      const rawProgress =
        (travelled - transitionStart) / transitionDistance

      const nextProgress = Math.min(
        1,
        Math.max(0, rawProgress)
      )

      setProgress(nextProgress)
    }

    const requestUpdate = () => {
      if (frame !== null) return

      frame = requestAnimationFrame(() => {
        update()
        frame = null
      })
    }

    update()

    window.addEventListener('scroll', requestUpdate, {
      passive: true,
    })

    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)

      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
    }
  }, [])

  const coverOpacity = 1 - progress
  const introOpacity = progress

  const coverTranslate = progress * -16
  const introTranslate = (1 - progress) * 18

  return (
    <section
      ref={heroRef}
      data-nav-theme="dark"
      className="
        relative
        h-[220svh]
        bg-[#10233F]
      "
    >
      {/*
       * Sticky stage.
       *
       * Crucially this is NOT fixed on mobile.
       * Safari keeps it associated with its containing section.
       */}
      <div
        className="
          sticky
          top-0
          h-[100svh]
          w-full
          overflow-hidden
          bg-[#10233F]
        "
      >
        {/* Background artwork */}
        <div className="absolute inset-0">
          <HeroMedia
            imageSrc={IMAGE_SRC}
            imageAlt="Navy and terracotta brand texture, William Langdown"
          />
        </div>

        {/* Scrim */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: SCRIM,
          }}
        />

        {/* ---------------- FRAME 1 ---------------- */}

        <div
          className="absolute inset-0 z-10"
          style={{
            opacity: coverOpacity,
            transform: `translate3d(0, ${coverTranslate}px, 0)`,
            pointerEvents:
              progress > 0.8 ? 'none' : 'auto',
          }}
        >
          <div
            className="
              relative
              flex
              h-full
              flex-col
              justify-end
              px-6
              pb-[calc(3.5rem+env(safe-area-inset-bottom))]
            "
          >
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
                fontSize:
                  'clamp(2.75rem, 12vw, 9.5rem)',
              }}
            >
              William
              <br />
              Langdown
            </h1>

            <p className="mt-5 text-sm font-medium tracking-wide text-bone/80">
              Brand{' '}
              <span className="text-terracotta">
                /
              </span>{' '}
              Digital{' '}
              <span className="text-terracotta">
                /
              </span>{' '}
              Technology
            </p>
          </div>
        </div>

        {/* ---------------- FRAME 2 ---------------- */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
          "
          style={{
            opacity: introOpacity,
            transform: `translate3d(0, ${introTranslate}px, 0)`,
            pointerEvents:
              progress < 0.8 ? 'none' : 'auto',
          }}
        >
          <IntroStatement />
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   DESKTOP

   Keeps the cinematic fixed-stage behaviour.
   ================================================================ */

function DesktopHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const [heroActive, setHeroActive] = useState(true)
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    let frame: number | null = null

    const updateHeroState = () => {
      const hero = heroRef.current
      if (!hero) return

      const rect = hero.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const active =
        rect.bottom > 0 &&
        rect.top < viewportHeight

      const scrolledIntoHero = Math.max(
        0,
        -rect.top
      )

      const introStart =
        viewportHeight * 0.88

      setHeroActive(active)

      setShowIntro(
        active &&
          scrolledIntoHero >= introStart
      )
    }

    const requestUpdate = () => {
      if (frame !== null) return

      frame = requestAnimationFrame(() => {
        updateHeroState()
        frame = null
      })
    }

    updateHeroState()

    window.addEventListener('scroll', requestUpdate, {
      passive: true,
    })

    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener(
        'scroll',
        requestUpdate
      )

      window.removeEventListener(
        'resize',
        requestUpdate
      )

      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
    }
  }, [])

  return (
    <>
      {/* Desktop scroll space */}
      <div
        ref={heroRef}
        className="
          relative
          h-[300svh]
          [scroll-snap-align:start]
        "
        aria-hidden
      />

      {/* Fixed desktop stage */}
      <div
        data-nav-theme="dark"
        aria-hidden={!heroActive}
        className={`
          fixed
          inset-0
          z-0
          overflow-hidden
          transition-opacity
          duration-150

          ${
            heroActive
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <HeroMedia
            imageSrc={IMAGE_SRC}
            imageAlt={
              showIntro
                ? ''
                : 'Navy and terracotta brand texture, William Langdown'
            }
          />
        </div>

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: SCRIM,
          }}
        />

        {/* ---------------- FRAME 1 ---------------- */}

        <div
          className={`
            absolute
            inset-0
            z-10
            transition-[opacity,transform]
            ease-out

            ${
              showIntro
                ? 'pointer-events-none -translate-y-3 opacity-0 duration-350'
                : 'translate-y-0 opacity-100 duration-180'
            }
          `}
        >
          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="
              absolute
              right-10
              top-9
              z-20
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

          {/* Main typography */}
          <div
            className="
              relative
              flex
              h-full
              flex-col
              justify-end
              px-10
              pb-16
            "
          >
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
                fontSize:
                  'clamp(2.75rem, 12vw, 9.5rem)',
              }}
            >
              William
              <br />
              Langdown
            </h1>

            <p className="mt-7 text-base font-medium tracking-wide text-bone/80">
              Brand{' '}
              <span className="text-terracotta">
                /
              </span>{' '}
              Digital{' '}
              <span className="text-terracotta">
                /
              </span>{' '}
              Technology
            </p>
          </div>
        </div>

        {/* ---------------- FRAME 2 ---------------- */}

        <div
          className={`
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
            transition-[opacity,transform]
            ease-out

            ${
              showIntro
                ? 'translate-y-0 opacity-100 duration-650'
                : 'pointer-events-none translate-y-4 opacity-0 duration-100'
            }
          `}
        >
          <IntroStatement />
        </div>
      </div>
    </>
  )
}