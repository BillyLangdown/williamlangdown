'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const leadServices = [
  {
    title: 'Website Design & Development',
    tag: 'Fully custom',
    price: 'From £1,495',
    color: '#2563EB',
    description:
      "Not a template. Designed and built from scratch around your brand, your customers, and how they actually buy. Your style, your colours, your voice, done properly.",
    cta: 'See Design & Build',
    href: '/services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M2 14l2-2 8-8 2 2-8 8-2 2H2v-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Starter Sites',
    tag: 'Fast & affordable',
    price: 'From £495',
    color: '#EA580C',
    description:
      "Pick one of four polished designs, add your content and colours, live in about a week. The easy way to get online and get found.",
    cta: 'See the Starter package',
    href: '/starter',
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M9 1.5L2.5 9h4.5L7 14.5 13.5 7H9V1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const secondaryServices = [
  {
    title: 'Website Audit',
    price: 'From £145',
    priceNote: '',
    description:
      "Not sure where to start? A proper look at what's putting people off, where the copy needs work, and how you perform on mobile. Written report plus a short video walkthrough.",
    href: '/services',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 12.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Website Support & Improvements',
    price: 'From £30 / hour',
    priceNote: 'Returning Design & Build clients: £30/hr · New clients: £60/hr',
    description:
      "Already have a site? Copy changes, new pages, design tweaks, or general upkeep. Billed by the hour, no contract.",
    href: '/services',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3 15l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 4l1.3.75v1.5l-1.3.75-1.3-.75v-1.5z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function FeaturedCard({ service }: { service: typeof leadServices[0] }) {
  return (
    <ScrollReveal threshold={0.15}>
      <Link
        href={service.href}
        className="group relative block rounded-sm p-7 sm:p-8 h-full overflow-hidden transition-transform hover:-translate-y-0.5"
        style={{ background: '#080e1c' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-70px', right: '-50px', width: '280px', height: '280px', borderRadius: '50%', background: `radial-gradient(circle, ${service.color}55 0%, transparent 68%)` }} />
        </div>
        <div className="relative z-10">
          <span
            className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
            style={{ background: `${service.color}22`, color: service.color }}
          >
            {service.tag}
          </span>
          <div className="w-11 h-11 rounded-sm flex items-center justify-center mb-5" style={{ background: `${service.color}22`, color: service.color }}>
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
          <p className="text-sm font-medium mb-4" style={{ color: service.color }}>{service.price}</p>
          <p className="text-sm text-white/55 leading-relaxed mb-6">{service.description}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            {service.cta}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  )
}

function SecondaryCard({ service }: { service: typeof secondaryServices[0] }) {
  return (
    <ScrollReveal threshold={0.15}>
      <Link
        href={service.href}
        className="group rounded-sm border border-border-light p-6 flex flex-col h-full transition-colors hover:border-ink/20"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: 'rgba(15,23,42,0.05)', color: '#475569' }}>
            {service.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{service.title}</p>
            <p className="text-xs font-medium text-secondary">{service.price}</p>
          </div>
        </div>
        {service.priceNote && (
          <p className="text-xs text-secondary font-medium leading-snug mb-3">{service.priceNote}</p>
        )}
        <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">{service.description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors">
          Learn more
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </ScrollReveal>
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
    <section id="services" className="py-20 md:py-24 px-6 bg-surface border-t border-border-light" style={{ scrollSnapAlign: 'start' }}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {leadServices.map((service) => (
            <FeaturedCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondaryServices.map((service) => (
            <SecondaryCard key={service.title} service={service} />
          ))}
        </div>

        <ScrollReveal threshold={0.15} className="mt-5">
          <Link
            href="/orla"
            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-sm border border-border-light px-6 py-5 transition-colors hover:border-accent/30"
          >
            <span
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0 self-start sm:self-auto"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
            >
              My own product
            </span>
            <Image src="/images/orla-logo.png" alt="Orla" height={18} width={62} className="object-contain shrink-0" />
            <p className="text-sm text-secondary flex-1">Booking software with an AI assistant, Google Calendar sync, and Gmail integration. Built by me.</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors shrink-0">
              Find out more
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}
