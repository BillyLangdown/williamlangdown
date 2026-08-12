'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F8FAFC',
        scrollSnapAlign: 'start',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-10 md:gap-20">

            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink mb-4">
                Planning the next stage of the business?
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                Tell me what&apos;s changed, and what your brand or digital presence hasn&apos;t caught up with yet.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="flex md:inline-flex items-center justify-center gap-2 bg-accent text-white text-sm px-7 py-3.5 rounded-sm hover:bg-accent/90 transition-colors font-medium"
              >
                Start a conversation
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
