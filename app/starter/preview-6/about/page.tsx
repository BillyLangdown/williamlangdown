'use client'

import { motion } from 'framer-motion'
import PhotoPlaceholder from '../../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem } from '../../_shared/Reveal'

const values = [
  ['Gas Safe registered', 'Every engineer checked, certified, and on the register.'],
  ['No callout games', 'One fixed callout fee, quoted upfront, no surprises on the invoice.'],
  ['We turn up', 'A time slot that means something, and a call if we’re running late.'],
  ['Guaranteed work', '10-year guarantee on installations, 12 months on repairs.'],
]

export default function Preview6About() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 md:order-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#8A5E13' }}>About</p>
            <h1 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight" >
              Trade skills, straight talking
            </h1>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed" style={{ color: '#4B5A66' }}>
              <p>
                Keystone started in 2013 doing boiler repairs out of a van with a ladder rack. Twelve years on,
                we&apos;re still small enough that you&apos;ll speak to the person doing the job, not a call centre.
              </p>
              <p>
                Every engineer is Gas Safe registered and fully insured. We quote up front, turn up when we
                say we will, and stand behind the work with a proper guarantee.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <PhotoPlaceholder
              label="A photo of you or your team at work goes here"
              className="w-full aspect-[4/5]"
              style={{ borderColor: '#D9DFE4' }}
              iconColor="#132A3D"
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
            <motion.div key={title} variants={gridItem} className="p-6 transition-colors duration-200 hover:bg-[#F5F7F9]" style={{ border: '1px solid #E4E9EE' }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#132A3D' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C6B78' }}>{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
