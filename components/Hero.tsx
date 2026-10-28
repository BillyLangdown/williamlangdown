'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
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

/* Oversized horizontal name. Font size is derived from the viewport width
   so the two lines span the screen at any size. It drifts down slower than
   the page as the hero scrolls away; nothing clips it, the sticky image
   behind keeps filling the frame. */
function HeroName({ vertical = false }: { vertical?: boolean }) {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const vh = () => (typeof window === 'undefined' ? 800 : window.innerHeight)
  // Vertical (mobile) drifts down slowly. Horizontal (desktop) lifts away
  // faster than the page and fades out, so it's gone before the snap to
  // the next section.
  const y = useTransform(scrollY, (v) =>
    reduceMotion ? 0 : vertical ? Math.min(v, 1000) * 0.35 : -v * 0.5,
  )
  const opacity = useTransform(scrollY, (v) =>
    vertical ? 1 : Math.max(0, 1 - v / (vh() * 0.6)),
  )

  return (
    <motion.h1
      style={{
        y,
        opacity,
        fontSize: vertical
          ? 'min(calc(100svh / 6.4), 44vw)'
          : 'calc((100vw - 2rem) / 6.4)',
        willChange: 'transform',
        ...(vertical
          ? { writingMode: 'vertical-rl' as const, textOrientation: 'sideways' as const }
          : {}),
      }}
      className={`
        pointer-events-none
        absolute
        z-0
        select-none
        ${vertical ? 'left-0 top-0 pl-[0.06em]' : 'inset-x-0 bottom-0 px-4 pb-[0.05em]'}
        font-sans
        font-extrabold
        uppercase
        leading-[0.88]
        tracking-tight
        text-bone/[0.06]
      `}
    >
      William
      <br />
      Langdown
    </motion.h1>
  )
}

/* Desktop: bottom right, same three-line composition as mobile. Lifts
   away and fades with the scroll, like the name, so both are gone before
   the snap to the next section. */
function ValueStatement() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (v) => (reduceMotion ? 0 : -v * 0.5))
  const opacity = useTransform(scrollY, (v) =>
    Math.max(0, 1 - v / ((typeof window === 'undefined' ? 800 : window.innerHeight) * 0.6)),
  )

  return (
    <motion.p
      style={{ y, opacity, willChange: 'transform' }}
      className="
        ml-auto
        text-right
        font-display
        text-[clamp(1.75rem,2.6vw,3rem)]
        leading-[1.1]
        tracking-tight
        text-white
      "
    >
      <span className="block">Software,</span>
      <span className="block">AI automation</span>
      <span className="block">and digital solutions.</span>
    </motion.p>
  )
}

function MobileValueStatement() {
  return (
    <p
      className="
        mt-5
        text-right
        font-display
        text-[clamp(1.35rem,calc((100vw-3rem)/11.5),2.6rem)]
        leading-[1.1]
        tracking-tight
        text-white
      "
    >
      <span className="block">Software,</span>
      <span className="block">AI automation</span>
      <span className="block">and digital solutions.</span>
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
          <HeroName vertical />
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
              bottom-[clamp(2rem,6svh,4rem)]
              right-10
              z-20
              lg:right-12
            "
          >
            <ValueStatement />
          </div>

          <HeroName />
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