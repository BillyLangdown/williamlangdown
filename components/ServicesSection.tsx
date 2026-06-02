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
    href: '/pricing',
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
    href: '/pricing',
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
    href: '/pricing',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3.5 14.5l5.5-5.5m3-6.5a3 3 0 013 3c0 .4-.08.78-.22 1.13L13 8.38l-1.5 1.5-1.76-1.76A3 3 0 016.5 5.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    <div ref={rowRef} className={`border-t border-border-light overflow-hidden${service.featured ? ' bg-subtle/50' : ''}`}>
      <div
        className="py-10 px-0 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
        style={{
          clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          transition: 'clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:w-[220px] shrink-0">
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center mb-3"
              style={{ background: `${service.color}18`, color: service.color }}
            >
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-ink leading-snug mb-1">{service.title}</h3>
            <p className="text-sm font-medium" style={{ color: service.color }}>{service.price}</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
            <Link
              href={service.href}
              className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors font-medium"
            >
              See pricing
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
    <section id="services" className="py-20 px-6 bg-surface border-t border-border-light">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headingRef}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What I do</h2>
          <Link href="/pricing" className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0">
            View all pricing
          </Link>
        </div>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
          <div className="border-t border-border-light" />
        </div>

        {/* Slick Booking */}
        <div className="mt-10 rounded-sm overflow-hidden" style={{ background: '#0F172A' }}>
          <div className="p-6 flex flex-col gap-5">
            <div className="flex justify-center">
              <Image
                src="/images/slick-booking.png"
                alt="Slick Booking"
                height={40}
                width={160}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-center leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              My own booking software. Customers book online, you confirm from your phone.
            </p>
            <div className="flex justify-center">
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
    </section>
  )
}
