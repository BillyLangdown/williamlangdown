'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const serviceLinks = [
  { href: '/services/growth-websites', label: 'Growth Websites', desc: 'Custom sites built to grow your business' },
  { href: '/starter', label: 'Starter Websites', desc: 'A simple site to get online quickly' },
  { href: '/services/custom-software', label: 'Custom Software', desc: 'Portals, dashboards and internal tools' },
  { href: '/services/booking-systems-automation', label: 'Booking Systems & Automation', desc: 'Less admin, more time back' },
]

const links = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const servicesActive = pathname.startsWith('/services') || pathname.startsWith('/starter')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [servicesOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_1px_24px_rgba(0,0,0,0.07)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/Williamlangdown-logo-transparent.png"
            alt="William Langdown"
            height={36}
            width={171}
            className="hidden md:block object-contain"
            priority
          />
          <Image
            src="/images/Williamlangdown-logo-transparent.png"
            alt="William Langdown"
            height={34}
            width={161}
            className="md:hidden object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors relative pb-1 ${
              pathname === '/' ? 'text-ink' : 'text-tertiary hover:text-ink'
            }`}
          >
            Home
            {pathname === '/' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />}
          </Link>

          {/* Services dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm transition-colors relative pb-1 ${
                servicesActive ? 'text-ink' : 'text-tertiary hover:text-ink'
              }`}
              aria-expanded={servicesOpen}
            >
              Services
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {servicesActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />}
            </button>

            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
              style={{
                opacity: servicesOpen ? 1 : 0,
                visibility: servicesOpen ? 'visible' : 'hidden',
                transform: servicesOpen ? 'translate(-50%, 0)' : 'translate(-50%, -6px)',
                transition: 'opacity 0.18s ease, transform 0.18s ease',
              }}
            >
              <div
                className="rounded-sm border border-border-light overflow-hidden"
                style={{ background: '#FFFFFF', boxShadow: '0 12px 32px rgba(15,23,42,0.16)' }}
              >
                {serviceLinks.map(({ href, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-4 py-3 border-b border-border-light last:border-b-0 transition-colors hover:bg-accent/5 ${
                      pathname === href ? 'bg-accent/5' : ''
                    }`}
                  >
                    <p className="text-sm font-medium text-ink">{label}</p>
                    <p className="text-xs text-secondary mt-0.5">{desc}</p>
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-accent hover:bg-accent/5 transition-colors"
                >
                  See all services
                </Link>
              </div>
            </div>
          </div>

          {links.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors relative pb-1 ${
                pathname === href ? 'text-ink' : 'text-tertiary hover:text-ink'
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Phone + location: only shown once there's room alongside the full nav */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 text-xs text-tertiary mr-6">
          <span>Taunton, Somerset</span>
          <span aria-hidden className="text-border-light">|</span>
          <a href="tel:+447446856927" className="font-medium hover:text-ink transition-colors">
            +44 7446 856927
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-accent text-white text-sm px-5 py-2.5 rounded-sm hover:bg-accent/90 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px bg-gray-900 transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-gray-900 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-gray-900 transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: open ? '720px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.22s ease',
        }}
      >
        <div
          className="border-t"
          style={{
            borderBottom: '2px solid rgba(15,23,42,0.12)',
            boxShadow: '0 8px 24px rgba(15,23,42,0.08)',
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <nav className="px-6 pt-2 pb-6 flex flex-col">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between py-4 border-b border-border-light text-base font-medium transition-colors ${
                pathname === '/' ? 'text-ink' : 'text-secondary hover:text-ink'
              }`}
            >
              Home
              {pathname === '/' && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2563EB' }} />}
            </Link>

            {/* Services accordion */}
            <div className="border-b border-border-light">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full flex items-center justify-between py-4 text-base font-medium transition-colors ${
                  servicesActive ? 'text-ink' : 'text-secondary hover:text-ink'
                }`}
              >
                Services
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: mobileServicesOpen ? '320px' : '0',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div className="pb-3 flex flex-col gap-1">
                  {serviceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false) }}
                      className={`py-2.5 pl-3 text-sm rounded-sm transition-colors ${
                        pathname === href ? 'text-accent font-medium' : 'text-secondary hover:text-ink'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => { setOpen(false); setMobileServicesOpen(false) }}
                    className="py-2.5 pl-3 text-sm text-accent font-medium"
                  >
                    See all services
                  </Link>
                </div>
              </div>
            </div>

            {links.slice(1).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-border-light text-base font-medium transition-colors ${
                  pathname === href ? 'text-ink' : 'text-secondary hover:text-ink'
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2563EB' }} />
                )}
              </Link>
            ))}

            {/* Phone + location, visible in the mobile menu alongside the CTA */}
            <div className="pt-4 flex flex-col gap-1">
              <a href="tel:+447446856927" className="text-sm font-semibold text-ink">
                +44 7446 856927
              </a>
              <p className="text-xs text-tertiary">Taunton, Somerset</p>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex justify-center items-center gap-2 text-white text-sm px-6 py-3.5 rounded-sm font-medium"
              style={{ background: '#2563EB' }}
            >
              Let&apos;s talk
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
