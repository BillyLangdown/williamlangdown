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
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#FF5A1F' }}>About</p>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              We built the gym we couldn&apos;t find
            </h1>
            <div className="mt-10 flex flex-col gap-5 text-white/60 leading-relaxed">
              <p>
                Forge started in 2019 because Bristol had plenty of gyms but nowhere that combined proper coaching
                with a space that didn&apos;t feel intimidating. So we built one.
              </p>
              <p>
                Every class is capped at 12 people. Every coach has a real qualification and actually watches your
                form. No judgement, no fluff, no six-month contracts you regret by February.
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
            ['Small classes', 'Capped at 12 so coaches can actually coach.'],
            ['Real qualifications', 'Every coach is certified and insured.'],
            ['No contracts', 'Pay monthly, leave whenever you want.'],
          ].map(([title, body]) => (
            <motion.div key={title} variants={gridItem} className="p-6 transition-colors duration-200 hover:bg-white/[0.03]" style={{ background: '#141414' }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#FF5A1F' }}>{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
