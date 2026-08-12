'use client'

import { motion } from 'framer-motion'

const REVIEW_TEXT =
  'We cannot recommend William enough. Within a week we had a test site that was ready to preview, and it was absolutely brilliant. William mainly led the way with the design and he hit the brief perfectly. The level of service, detail and care he has provided us has been exceptional during this process. We could not be happier with our new site.'

export default function ReviewSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-bone">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-display italic text-5xl text-terracotta leading-none">&ldquo;</span>
          <p className="font-display italic text-2xl md:text-3xl text-ink leading-[1.35] -mt-4">
            {REVIEW_TEXT}
          </p>
          <p className="mt-6 text-sm font-medium text-ink">Building Ventilation Services Ltd</p>
        </motion.div>
      </div>
    </section>
  )
}
