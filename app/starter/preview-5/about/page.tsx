'use client'

import { motion } from 'framer-motion'
import PhotoPlaceholder from '../../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem } from '../../_shared/Reveal'

const values = [
  ['Built by operators', 'We ran infra teams before we built tools for them.'],
  ['No vendor lock-in', 'Standard Docker images, export your config any time.'],
  ['Transparent pricing', 'One plan, no seat-based surprises at renewal.'],
  ['Real support', 'A named engineer on Slack, not a ticket queue.'],
]

export default function Preview5About() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 md:order-1">
            <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: '#22D3EE' }}>About</p>
            <h1 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              Infrastructure, run by people who&apos;ve been paged at 3am
            </h1>
            <div className="mt-10 flex flex-col gap-5 text-slate-400 leading-relaxed">
              <p>
                Axium started after one too many nights debugging someone else&apos;s YAML. We wanted a platform
                that did the boring, critical parts of infrastructure well, so small teams could spend their
                time on the product instead.
              </p>
              <p>
                No enterprise sales calls, no seat-based pricing that punishes growth. Just a dashboard that
                tells you the truth about what&apos;s running, and where.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <PhotoPlaceholder
              label="A photo of the team goes here"
              className="w-full aspect-[4/5] rounded-xl"
              style={{ borderColor: 'rgba(148,163,255,0.18)' }}
              iconColor="#94A3B8"
            />
          </Reveal>
        </div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {values.map(([title, body]) => (
            <motion.div
              key={title}
              variants={gridItem}
              className="p-6 rounded-xl transition-colors duration-300 hover:bg-white/[0.03]"
              style={{ background: 'rgba(148,163,255,0.04)', border: '1px solid rgba(148,163,255,0.1)' }}
            >
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-sm font-semibold mb-2 text-white">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
