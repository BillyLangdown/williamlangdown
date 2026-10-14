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

function Highlighted() {
  return (
    <>
      Practical technology and software solutions.
    </>
  )
}

/* Large desktop (1440px and above): static, bottom right, balancing the
   name on the left. */
function ValueStatement() {
  return (
    <p
      className="
        ml-auto
        max-w-[14ch]
        text-right
        font-display
        text-[clamp(1.75rem,3vw,3rem)]
        leading-[1.1]
        tracking-tight
        text-white
      "
    >
      <Highlighted />
    </p>
  )
}

/* Tablet and smaller desktop (below 1440px): sits in the same container as
   the name, directly beneath it and left-aligned with it. */
function StackedValueStatement() {
  return (
    <p
      className="
        mt-[clamp(0.75rem,2.5svh,1.5rem)]
        max-w-[40ch]
        text-left
        font-display
        text-[clamp(1.4rem,min(2.8vw,4svh),2.1rem)]
        leading-[1.2]
        tracking-tight
        text-white
        min-[1440px]:hidden
      "
    >
      <Highlighted />
    </p>
  )
}

function MobileValueStatement() {
  return (
    <p
      className="
        mt-5
        max-w-[18ch]
        text-left
        font-display
        text-[clamp(1.9rem,8.5vw,2.6rem)]
        leading-[1.1]
        tracking-tight
        text-white
      "
    >
      <Highlighted />
    </p>
  )
}

/* ================================================================
   MOBILE
   ================================================================ */

function MobileHero() {
  return (
    <>
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

        {/* Copy over locked image */}
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

            <MobileValueStatement />
          </div>
        </div>
      </section>

      <section
        data-nav-theme="light"
        className="
          relative
          flex
          h-[100svh]
          w-full
          items-center
          justify-center
          bg-bone
        "
        style={{ scrollSnapAlign: 'start' }}
      >
        <IntroStatement />
      </section>
    </>
  )
}

/* ================================================================
   DESKTOP
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

      {/* Content over shared image */}
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
          {/* Navigation */}
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
            <ul className="m-0 flex list-none items-center gap-8 p-0 lg:gap-10">
              {HERO_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="
                      block
                      text-[13px]
                      font-medium
                      leading-none
                      tracking-[-0.01em]
                      text-bone/80
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

          {/* Proposition */}
          <div
            className="
              absolute
              bottom-16
              right-10
              z-20
              hidden
              lg:right-12
              min-[1440px]:block
            "
          >
            <ValueStatement />
          </div>

          {/* Name */}
          <div
            className="
              flex
              h-full
              flex-col
              justify-end
              px-10
              pb-[clamp(2rem,8svh,4rem)]
              min-[1440px]:pb-16
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
                text-[clamp(2.75rem,min(11vw,20svh),9.5rem)]
                min-[1440px]:text-[clamp(2.75rem,12vw,9.5rem)]
              "
            >
              William
              <br />
              Langdown
            </h1>

            <StackedValueStatement />
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