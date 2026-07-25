'use client'

import { motion } from 'framer-motion'
import PhotoPlaceholder from '../../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem } from '../../_shared/Reveal'

export default function Preview1About() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 md:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#DC2626' }}>About</p>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              Built by lifters, for lifters
            </h1>
            <div className="mt-10 flex flex-col gap-5 text-white/60 leading-relaxed">
              <p>
                Ironclad started in 2017 because Manchester had plenty of gyms but nowhere serious about strength
                training without the influencer routine. So we built one.
              </p>
              <p>
                Every session is capped at 10 lifters. Every coach competes, or has competed, in powerlifting. No
                judgement, no fluff, no contracts you regret by February.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <PhotoPlaceholder
              label="A photo of the gym or coaches goes here"
              className="w-full aspect-[4/5]"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              iconColor="#FFFFFF"
            />
          </Reveal>
        </div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            ['Small groups', 'Capped at 10 so coaches can actually coach.'],
            ['Real qualifications', 'Every coach is certified and insured.'],
            ['No contracts', 'Pay monthly, leave whenever you want.'],
          ].map(([title, body]) => (
            <motion.div key={title} variants={gridItem} className="p-6 transition-colors duration-200 hover:bg-white/[0.03]" style={{ background: '#141414' }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#DC2626' }}>{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
