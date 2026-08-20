'use client'

import Link from 'next/link'
import HeroMedia from '@/components/HeroMedia'
import IntroStatement from '@/components/IntroStatement'
import ScrollReveal from '@/components/ScrollReveal'

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
      {/* MOBILE */}
      <div className="md:hidden">
        <MobileHero />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <DesktopHero />
      </div>
    </>
  )
}

/* ================================================================
   MOBILE

   Background stays locked.
   Copy scrolls upward.
   Bone FeaturedProject follows and visually covers the hero.
   No intro frame on mobile.
   ================================================================ */

function MobileHero() {
  return (
    <section
      data-nav-theme="dark"
      className="
        relative
        h-[115svh]
        w-full
      "
    >
      {/* Locked visual */}
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

      {/* Copy scrolls normally upward over the locked image */}
      <div
        className="
          relative
          z-10
          -mt-[100svh]
          h-[100svh]
          w-full
        "
      >
        <div
          className="
            flex
            h-full
            flex-col
            justify-end
            px-6
            pb-[calc(1.75rem+env(safe-area-inset-bottom,0px))]
          "
        >
          <h1
            className="
              font-sans
              font-extrabold
              uppercase
              leading-[0.9]
              tracking-tight
              text-bone
            "
            style={{
              fontSize: 'clamp(3.4rem, 15vw, 5.25rem)',
            }}
          >
            William
            <br />
            Langdown
          </h1>

          <p className="mt-5 text-[14px] font-medium tracking-wide text-bone/80">
            Brand <span className="text-terracotta">/</span> Digital{' '}
            <span className="text-terracotta">/</span> Technology
          </p>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   DESKTOP

   Frame 1 + Frame 2 on same sticky image.
   Frame 2 fades up in.
   Bone FeaturedProject follows afterwards.
   ================================================================ */

function DesktopHero() {
  return (
    <section
      data-nav-theme="dark"
      className="
        relative
        h-[200svh]
        bg-[#10233F]
      "
    >
      {/* Shared sticky image */}
      <div
        className="
          sticky
          top-0
          h-[100svh]
          w-full
          overflow-hidden
        "
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

      {/* Two real frames over same image */}
      <div className="relative z-10 -mt-[100svh]">

        {/* FRAME 1 */}
        <div
          className="
            relative
            h-[100svh]
            w-full
            [scroll-snap-align:start]
          "
        >
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

          <div
            className="
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
                fontSize: 'clamp(2.75rem, 12vw, 9.5rem)',
              }}
            >
              William
              <br />
              Langdown
            </h1>

            <p className="mt-7 text-base font-medium tracking-wide text-bone/80">
              Brand <span className="text-terracotta">/</span> Digital{' '}
              <span className="text-terracotta">/</span> Technology
            </p>
          </div>
        </div>

        {/* FRAME 2 */}
        <div
          className="
            relative
            flex
            h-[100svh]
            w-full
            items-center
            justify-center
            [scroll-snap-align:start]
          "
        >
          <ScrollReveal>
            <IntroStatement />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}