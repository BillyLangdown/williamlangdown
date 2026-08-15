'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import BackgroundWord from '@/components/BackgroundWord'

export default function CTABanner() {
  return (
    <section data-nav-theme="light" className="relative z-10 overflow-hidden py-20 md:py-28 px-6 bg-bone">
      <BackgroundWord word="Contact" color="#10233F" opacity={0.045} parallax className="bottom-4 -left-1 md:bottom-6" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-3">
              Available for new projects.
            </h2>
            <p className="text-sm text-secondary">
              Not sure on budget yet?{' '}
              <Link href="/pricing" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">
                See how projects are priced
              </Link>
              .
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm px-7 py-3.5 rounded-sm font-medium shrink-0 transition-colors"
            style={{ background: '#10233F', color: '#F6F3EE' }}
          >
            Start a conversation
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
