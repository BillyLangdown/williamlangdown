'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const leadServices = [
  {
    title: 'Growth Websites',
    tag: 'Built to grow your business',
    price: 'Typically £1,500–£4,000',
    description:
      "Custom websites designed around your customers' journey, built to bring in enquiries and support growth, not just look good. Strategy, conversion and SEO foundations included.",
    cta: 'See Growth Websites',
    href: '/services/growth-websites',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M2 14l2-2 8-8 2 2-8 8-2 2H2v-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Starter Websites',
    tag: 'Fast & affordable',
    price: 'From £495',
    description:
      "Pick one of six polished designs, add your content and colours, live in about a week. See it live before you pay a penny.",
    cta: 'See Starter Websites',
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
    title: 'Custom Software',
    price: 'From £3,000',
    priceNote: '',
    description: 'Portals, dashboards, internal tools and business systems built around how you work.',
    href: '/services/custom-software',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Booking Systems & Automation',
    price: 'Priced individually',
    priceNote: '',
    description: 'Booking systems, reminders and workflows that cut admin and save time.',
    href: '/services/booking-systems-automation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2.5" y="3" width="13" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 6.5h13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 1.5v3M12 1.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Website Audit',
    price: 'From £145',
    priceNote: '',
    description: "A proper look at what's putting visitors off, and how to fix it.",
    href: '/services/website-audits',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 12.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Website Support',
    price: '£60–£90 / hour',
    priceNote: '',
    description: 'Development and consulting for ongoing updates, fixes and improvements.',
    href: '/services/website-support',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3 15l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 4l1.3.75v1.5l-1.3.75-1.3-.75v-1.5z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function FeaturedCard({ service, fromLeft }: { service: typeof leadServices[0]; fromLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -36 : 36, rotate: fromLeft ? -2.5 : 2.5 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative block p-7 sm:p-8 h-full overflow-hidden transition-transform hover:-translate-y-0.5"
        style={{ background: '#080e1c', borderRadius: '4px 32px 4px 32px' }}
      >
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-sm flex items-center justify-center bg-white/10 text-white">
              {service.icon}
            </div>
            <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white">
              {service.tag}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
          <p className="text-sm font-medium mb-4 text-white/80">{service.price}</p>
          <p className="text-sm text-white/60 leading-relaxed mb-6">{service.description}</p>
          <div className="flex justify-end mt-auto">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-white transition-colors">
              {service.cta}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function SecondaryCard({ service, index }: { service: typeof secondaryServices[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group rounded-sm border border-border-light p-6 flex flex-col h-full transition-colors hover:border-ink/20 bg-white/80"
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
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
        <span className="self-end inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors">
          Find out more
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </motion.div>
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
    <section
      id="services"
      className="py-20 md:py-24 px-6 bg-surface"
      style={{
        scrollSnapAlign: 'start',
        overflowX: 'hidden',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
      }}
    >
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
          {leadServices.map((service, i) => (
            <FeaturedCard key={service.title} service={service} fromLeft={i === 0} />
          ))}
        </div>

        <p className="mt-9 mb-3 text-[11px] font-semibold uppercase tracking-widest text-tertiary">Also available</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondaryServices.map((service, i) => (
            <SecondaryCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <ScrollReveal threshold={0.15} className="mt-5">
          <Link
            href="https://orlabooking.com"
            className="group flex items-center gap-5 rounded-sm border border-border-light bg-white px-6 py-6 sm:px-8 transition-colors hover:border-ink/20"
          >
            <Image src="/images/orla-logo-long-accent.png" alt="Orla" height={26} width={76} className="object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent mb-1.5">
                My own product
              </span>
              <p className="text-sm text-secondary">An AI booking system, built by me.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors shrink-0">
              <span className="hidden sm:inline">Visit orlabooking.com</span>
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
