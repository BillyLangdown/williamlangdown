'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavCTA from '@/components/NavCTA'

const links = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const HEADER_HEIGHT = 64

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'
  // Bar is always transparent; only the text/icon colour adapts to
  // whatever section is currently sitting behind it.
  const [overDark, setOverDark] = useState(isHome)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Full-screen takeover shouldn't let the page scroll behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Watches every section tagged data-nav-theme and flips overDark to
  // match whichever one currently sits behind the fixed bar, so nav text
  // stays readable over both dark and light sections without a background.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme]'))
    if (sections.length === 0) return

    const active = new Set<HTMLElement>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) active.add(el)
          else active.delete(el)
        })
        const current = [...sections].reverse().find((el) => active.has(el))
        if (current) setOverDark(current.dataset.navTheme === 'dark')
      },
      { rootMargin: `-${HEADER_HEIGHT}px 0px -${Math.max(window.innerHeight - HEADER_HEIGHT - 1, 0)}px 0px`, threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  const fg = overDark ? '#F6F3EE' : '#10233F'
  const fgDim = overDark ? 'rgba(246,243,238,0.7)' : '#8C887D'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isHome ? 'md:hidden' : ''}`}>
      <div className="relative z-[70] max-w-6xl mx-auto px-6 h-16 flex items-center justify-end md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        {/* Spacer, balances the CTA column so the nav below sits centred */}
        <div className="hidden md:block" aria-hidden />

        {/* Desktop nav: centred, spread */}
        <nav className="hidden md:flex items-center justify-self-center gap-11">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className="text-xs font-extrabold uppercase tracking-wide transition-colors"
                style={{ color: active ? '#C1613D' : fgDim }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex justify-self-end shrink-0">
          <NavCTA light={overDark} />
        </div>

        {/* Mobile burger / close */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: open ? '#F6F3EE' : fg, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{ background: open ? '#F6F3EE' : fg, opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: open ? '#F6F3EE' : fg, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu: full-screen navy takeover, iris-reveals from the burger */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60]"
            style={{
              background: '#10233F',
              backgroundImage: 'radial-gradient(circle, rgba(193,97,61,0.4) 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-full flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto">
              <nav className="flex flex-col">
                {links.map(({ href, label }, i) => {
                  const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 py-4 border-b border-bone/10"
                      >
                        <span className="text-xs font-semibold tabular-nums" style={{ color: '#C1613D' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="font-sans font-extrabold uppercase tracking-tight leading-none transition-colors"
                          style={{ fontSize: 'clamp(2rem, 9vw, 2.75rem)', color: active ? '#C1613D' : '#F6F3EE' }}
                        >
                          {label}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + links.length * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1">
                  <a href="tel:+447446856927" className="text-sm font-semibold text-bone">
                    +44 7446 856927
                  </a>
                  <p className="text-xs text-bone/50">Somerset-based, working UK-wide</p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center items-center gap-2 text-sm px-6 py-3.5 rounded-sm font-medium"
                  style={{ background: '#F6F3EE', color: '#10233F' }}
                >
                  Get in touch
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
