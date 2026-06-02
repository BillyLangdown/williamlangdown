'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Website Audit',
    price: 'From £145',
    description:
      "A proper look at your website: what's putting people off, where the copy falls flat, how it performs on mobile, and how it sits in search. You get a written report and a short video walkthrough so you know what to tackle first.",
    href: '/pricing',
  },
  {
    title: 'Website Design & Development',
    price: 'From £1,495',
    description:
      "A website built to get people in touch. Up to five pages, works on every device, includes contact forms, basic SEO, and analytics. Two rounds of changes before it goes live.",
    href: '/pricing',
  },
  {
    title: 'Website Support & Improvements',
    price: '£30 / hour',
    description:
      "Help with what you've already got. Copy changes, new pages, design tweaks, or general upkeep. Billed by the hour, no contract.",
    href: '/pricing',
  },
]

export default function ServicesSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 px-6 bg-surface border-t border-border-light">
      <div className="max-w-6xl mx-auto">

        <div
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">
            What I do
          </h2>
          <Link
            href="/pricing"
            className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0"
          >
            View all pricing
          </Link>
        </div>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="border-t border-border-light py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
              style={{
                clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                transition: `clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${80 + i * 130}ms`,
              }}
            >
              <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-[220px] shrink-0">
                  <h3 className="text-lg font-semibold text-ink leading-snug mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-accent">{service.price}</p>
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
          ))}
          <div
            className="border-t border-border-light"
            style={{
              clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: `clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${80 + services.length * 130}ms`,
            }}
          />
        </div>

        {/* Slick Booking */}
        <div
          className="mt-10 rounded-sm overflow-hidden"
          style={{
            background: '#0F172A',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: `opacity 0.6s ease ${80 + services.length * 130 + 80}ms, transform 0.6s ease ${80 + services.length * 130 + 80}ms`,
          }}
        >
          <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <div className="mb-3">
                <Image
                  src="/images/slick-booking.png"
                  alt="Slick Booking"
                  height={36}
                  width={140}
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                My own booking platform built for businesses that need customers to book online. Class schedules, appointment slots, custom flows — built around how you actually work.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-sm transition-colors whitespace-nowrap border"
              style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
            >
              Find out more
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
