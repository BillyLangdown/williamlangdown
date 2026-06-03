'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Website Audit',
    price: 'From £145',
    color: '#2563EB',
    description:
      "A proper look at your website: what's putting people off, where the copy falls flat, how it performs on mobile, and how it sits in search. You get a written report and a short video walkthrough so you know what to tackle first.",
    href: '/services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 12.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Website Design & Development',
    price: 'From £1,495',
    color: '#2563EB',
    featured: true,
    description:
      "A website built to get people in touch. Up to five pages, works on every device, includes contact forms, basic SEO, and analytics. Two rounds of changes before it goes live.",
    href: '/services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M2 14l2-2 8-8 2 2-8 8-2 2H2v-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Website Support & Improvements',
    price: '£30 / hour',
    color: '#2563EB',
    description:
      "Help with what you've already got. Copy changes, new pages, design tweaks, or general upkeep. Billed by the hour, no contract.",
    href: '/services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3 15l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 4l1.3.75v1.5l-1.3.75-1.3-.75v-1.5z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [visible, setVisible] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      className={`border-t border-border-light overflow-hidden lg:border lg:border-border-light lg:rounded-sm${service.featured ? ' relative -mx-6 lg:mx-0 max-lg:bg-[#080e1c] lg:bg-accent/[0.03] lg:border-t-[3px] lg:border-t-accent' : ''}`}
    >

      {/* Gradient blobs — mobile only, hidden on desktop */}
      {service.featured && (
        <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-80px', right: '-40px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 68%)' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 68%)' }} />
        </div>
      )}

      <div
        className={`py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 lg:flex-col lg:p-8 lg:h-full relative z-10 ${service.featured ? 'px-6' : 'px-0'}`}
        style={{
          clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          transition: 'clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
          ...(service.featured ? { backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' } : {}),
        }}
      >
        <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-12 lg:flex-col lg:flex-1 lg:gap-5">
          <div className="md:w-[220px] lg:w-auto shrink-0">
            {/* Icon inline with title on mobile, stacked above on desktop */}
            <div className="flex items-start gap-3 lg:block">
              <div
                className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 lg:mb-3 ${service.featured ? 'bg-white/10 text-white lg:text-accent' : ''}`}
                style={!service.featured ? { background: `${service.color}18`, color: service.color } : undefined}
              >
                {service.icon}
              </div>
              <div>
                <h3 className={`text-lg font-semibold leading-snug mb-1 ${service.featured ? 'text-white lg:text-ink' : 'text-ink'}`}>{service.title}</h3>
                <p className="text-sm font-medium" style={{ color: service.color }}>{service.price}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className={`text-sm leading-relaxed ${service.featured ? 'text-white/60 lg:text-secondary' : 'text-secondary'}`}>{service.description}</p>
            <Link
              href={service.href}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${service.featured ? 'text-white/60 hover:text-white lg:text-ink lg:hover:text-accent' : 'text-ink hover:text-accent'}`}
            >
              Learn more
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const [headingVisible, setHeadingVisible] = useState(false)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 px-6 bg-surface border-t border-border-light" style={{ scrollSnapAlign: 'start' }}>
      <div className="max-w-6xl mx-auto">

        <div
          ref={headingRef}
          className="mb-12 pl-4 border-l-4 border-accent"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What I do</h2>
          <p className="text-sm text-secondary mt-1">
            Can&apos;t find what you need?{' '}
            <Link href="/contact" className="underline underline-offset-4 hover:text-ink transition-colors">
              Send me a message
            </Link>
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-5">
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              service={service}
              index={i}
            />
          ))}
        </div>
   

        {/* Slick Booking */}
        <div className="mt-10 rounded-sm overflow-hidden" style={{ background: '#0F172A' }}>
          <div className="px-8 py-6 flex flex-col md:flex-row md:items-center md:gap-12 gap-5 max-w-2xl mx-auto w-full">
            {/* Logo — left on desktop, centred on mobile */}
            <div className="flex justify-center md:justify-start md:shrink-0">
              <Image
                src="/images/slick-booking.png"
                alt="Slick Booking"
                height={40}
                width={160}
                className="object-contain"
              />
            </div>
            {/* Copy + button stacked, left-aligned */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-center md:text-left leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                My own booking software. <br/> Customers book online, you confirm from your phone.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/slick-booking"
                  className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-sm transition-colors border"
                  style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
                >
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
