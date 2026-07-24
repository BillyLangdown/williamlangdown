'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, GitBranch, LineChart, Clock3, Globe2 } from 'lucide-react'
import InteractiveHero from './InteractiveHero'
import Reveal, { staggerGrid, gridItem } from '../_shared/Reveal'
import StatCounter from '../_shared/StatCounter'

const features = [
  { icon: Zap, title: 'Instant deploys', desc: 'Push to main, live in under a minute. No pipelines to babysit.' },
  { icon: ShieldCheck, title: 'Built-in security', desc: 'Automatic TLS, isolated environments, audit logs by default.' },
  { icon: GitBranch, title: 'Preview branches', desc: 'Every pull request gets its own throwaway environment.' },
  { icon: LineChart, title: 'Real-time metrics', desc: 'Latency, errors, and usage in one dashboard, not five tabs.' },
  { icon: Clock3, title: '24/7 monitoring', desc: 'Alerts route straight to Slack before your customers notice.' },
  { icon: Globe2, title: 'Global edge', desc: 'Deployed close to your users on every continent, automatically.' },
]

const testimonials = [
  { name: 'Kayla Firth', role: 'CTO, Vantly', text: 'We moved off three separate tools onto Axium in an afternoon. Nothing broke.' },
  { name: 'Marcus Oduya', role: 'Founder, Ledgerly', text: 'The preview environments alone paid for themselves in the first sprint.' },
  { name: 'Priya Shah', role: 'Lead Eng, Northstack', text: 'Support actually understands infrastructure. Rare, these days.' },
]

export default function Preview5Home() {
  return (
    <>
      <InteractiveHero />

      {/* Stats strip */}
      <section className="border-y" style={{ borderColor: 'rgba(148,163,255,0.1)' }}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-3 divide-x"
          style={{ borderColor: 'rgba(148,163,255,0.1)' }}
        >
          {[['150+', 'Teams shipping'], ['99', 'Uptime %'], ['40', 'Avg. p95 ms']].map(([num, label]) => (
            <motion.div key={label} variants={gridItem}>
              <StatCounter
                value={num}
                label={label}
                numberColor="#FFFFFF"
                labelColor="#64748B"
                numberClassName="text-3xl md:text-4xl font-semibold"
                labelClassName="mt-1 text-xs font-mono uppercase tracking-widest"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: '#22D3EE' }}>Platform</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Everything your infra team wishes they had time to build
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={gridItem}
                className="group p-6 rounded-xl transition-colors duration-300 hover:bg-white/[0.03]"
                style={{ background: 'rgba(148,163,255,0.04)', border: '1px solid rgba(148,163,255,0.1)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(99,102,241,0.15)', color: '#A5B4FC' }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-base font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24" style={{ background: '#0B0D14' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: '#22D3EE' }}>Customers</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Trusted by teams who ship often
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {testimonials.map(t => (
              <motion.div key={t.name} variants={gridItem} className="p-6 rounded-xl" style={{ background: 'rgba(148,163,255,0.04)', border: '1px solid rgba(148,163,255,0.1)' }}>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)', color: '#05060A' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%)' }}
          aria-hidden
        />
        <Reveal className="relative max-w-2xl mx-auto text-center">
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Ship your next deploy in minutes, not sprints
          </h2>
          <p className="mt-4 text-sm text-slate-400">Free trial, no card required. Cancel any time.</p>
          <GlowCTA href="/starter/preview-5/contact">Start free trial</GlowCTA>
        </Reveal>
      </section>
    </>
  )
}

function GlowCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative inline-block mt-8">
      <motion.span
        className="absolute inset-0 rounded-md"
        animate={{ boxShadow: ['0 0 0px 0px rgba(34,211,238,0.4)', '0 0 32px 6px rgba(34,211,238,0.3)', '0 0 0px 0px rgba(34,211,238,0.4)'] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <span
        className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-md transition-all hover:scale-[1.02] active:scale-95"
        style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)', color: '#05060A' }}
      >
        {children}
      </span>
    </Link>
  )
}
