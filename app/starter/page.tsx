import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DesignPicker from './DesignPicker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starter Package (£495) | William Langdown',
  description: 'A simple 3-page website (home, about, and contact) for £495. Pick a design, send your content, live in about a week.',
  alternates: { canonical: 'https://williamlangdown.com/starter' },
}

const variants = [
  {
    id: 'preview-1',
    name: 'Forge',
    style: 'Bold & modern',
    bg: '#0A0A0A',
    accent: '#FF5A1F',
    text: '#FFFFFF',
    image: '/images/starter-previews/forge.jpg',
    desc: 'Sharp, high-contrast, big type. Suits fitness, trades, and anything that wants to feel confident.',
  },
  {
    id: 'preview-2',
    name: 'Willow',
    style: 'Warm & personal',
    bg: '#FBF6EF',
    accent: '#C97B5A',
    text: '#3A322A',
    image: '/images/starter-previews/willow.jpg',
    desc: 'Soft, rounded, photo-led. Suits independent shops, studios, and anything hand-made or personal.',
  },
  {
    id: 'preview-3',
    name: 'Hartley',
    style: 'Minimal & professional',
    bg: '#FFFFFF',
    accent: '#D9B96C',
    text: '#1C2333',
    image: '/images/starter-previews/hartley.jpg',
    desc: 'Clean, understated, lots of space. Suits consultants, advisors, and services that sell on trust.',
  },
  {
    id: 'preview-4',
    name: 'Ochre',
    style: 'Image-led & gallery-style',
    bg: '#FAFAF8',
    accent: '#A8683D',
    text: '#1C1B19',
    image: '/images/starter-previews/ochre.jpg',
    desc: 'Gallery grid, your work does the talking. Suits artists, photographers, and makers. Includes a simple page for uploading your own images after launch.',
  },
  {
    id: 'preview-5',
    name: 'Axium',
    style: 'Tech & interactive',
    bg: '#05060A',
    accent: '#22D3EE',
    text: '#FFFFFF',
    image: '/images/starter-previews/axium.jpg',
    desc: 'Dark, gradient-lit, with a hero you can move the mouse over. Suits SaaS, software, and anything technical that wants to feel modern.',
  },
  {
    id: 'preview-6',
    name: 'Keystone',
    style: 'Trade & dependable',
    bg: '#132A3D',
    accent: '#F2A93B',
    text: '#FFFFFF',
    image: '/images/starter-previews/keystone.jpg',
    desc: 'Clean, trustworthy, built to convert a call. Suits plumbers, electricians, builders, and independent trades.',
  },
]

const included = [
  'Three pages: Home, About, Contact',
  'Fully responsive on every device',
  'Your logo, your colours, your content',
  'Live in about a week',
  'One simple order form, no back and forth',
]

const steps = [
  ['01', 'Pick a design', 'Browse the six live previews below and choose the one closest to your style.'],
  ['02', 'Fill in the order form', 'Your content, photos, logo, and a colour choice, all in one form, ten minutes.'],
  ['03', 'Review it, live', 'I build your site and put it on a temporary web address so you can see the real thing before paying anything.'],
  ['04', 'Pay, then go live', "Happy with it? Pay the £495 and I'll move it onto your own domain within a day."],
]

export default function StarterPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section
          className="px-6 pt-32 pb-20 md:pt-36 md:pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>
                £495 · Live in about a week
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-ink text-balance">
                A great website, live in a week
              </h1>
              <p className="mt-5 text-base text-secondary max-w-md md:max-w-2xl mx-auto leading-relaxed whitespace-normal md:whitespace-nowrap">
                Pick a design, add your content, and see it live before you pay a penny.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/starter/order"
                  className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                >
                  Order now · £495
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a href="#designs" className="text-sm font-medium text-secondary hover:text-ink transition-colors">
                  See the six designs ↓
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="mb-12 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">How it works</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map(([num, title, body], i) => (
                <ScrollReveal key={num} delay={i * 80}>
                  <p className="text-xs font-semibold text-accent mb-3">{num}</p>
                  <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{body}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={320} className="mt-14">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 rounded-sm border border-border-light bg-white/80 px-6 py-5 sm:px-8 sm:py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 bg-accent/10 text-accent">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2.5 10h15M10 2.5c2 2.2 3 5 3 7.5s-1 5.3-3 7.5c-2-2.2-3-5-3-7.5s1-5.3 3-7.5z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-ink sm:hidden">You&apos;ll need your own domain</p>
                </div>
                <div className="flex-1">
                  <p className="hidden sm:block text-sm font-semibold text-ink">You&apos;ll need your own domain</p>
                  <p className="text-sm text-secondary leading-relaxed sm:mt-0.5">
                    Your web address, like yourbusiness.com. Don&apos;t have one? Here&apos;s a simple guide.
                  </p>
                </div>
                <Link
                  href="/domain-setup"
                  className="self-start sm:self-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  Domain guide
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Designs */}
        <section id="designs" className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-12 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Pick a design</h2>
              <p className="text-sm text-secondary mt-1">Six real, clickable previews. Browse them properly before choosing.</p>
            </ScrollReveal>

            <DesignPicker variants={variants} />
          </div>
        </section>

        {/* What's included */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-6">What&apos;s included</h2>
              <ul className="flex flex-col gap-4">
                {included.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-accent">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-6">Not included</h2>
              <p className="text-sm text-secondary leading-relaxed mb-4">
                This is deliberately simple, that&apos;s what keeps the price down. A few of these are available as{' '}
                <a href="#addons" className="text-accent underline underline-offset-2 hover:text-accent/80">add-ons</a>,
                for anything else see{' '}
                <Link href="/services" className="text-accent underline underline-offset-2 hover:text-accent/80">Design &amp; Build</Link>.
              </p>
              <ul className="flex flex-col gap-3">
                {["Editing the site yourself after it's live", 'Custom design beyond the 6 templates', 'Full online shop or member accounts'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-tertiary">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm text-tertiary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Add-ons */}
        <section id="addons" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-8 pl-4 border-l-4 border-accent">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink">Want a bit more?</h2>
              <p className="text-sm text-secondary mt-1">
                Things like an extra page, a proper contact form, or a booking system can usually be
                added on. Just mention it when you book and we&apos;ll sort out the details together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="rounded-sm px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-6" style={{ background: '#080e1c' }}>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-3">Need more than that? Design &amp; Build gets you:</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      'Built around your business and your customers, not a template',
                      "I research your target audience and design the site specifically for them",
                      'Real code: bookings, e-commerce, logins, no page-builder limits',
                      'A way to update the site yourself after launch',
                      "We work together until you're happy with it",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/60 leading-snug">
                        <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 text-white text-sm px-6 py-3.5 rounded-sm font-medium transition-opacity hover:opacity-90 shrink-0"
                  style={{ background: '#2563EB' }}
                >
                  See Design &amp; Build
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-6 overflow-hidden" style={{ background: '#080e1c' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.38) 0%, transparent 68%)' }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-white mb-4">
                Pick a design, send your content, get online
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">£495. Live in about a week. See it live before you pay. No contract, no deposit.</p>
              <Link
                href="/starter/order"
                className="inline-flex items-center justify-center gap-2 bg-white text-ink text-sm px-7 py-3.5 rounded-sm hover:bg-white/90 transition-colors font-medium"
              >
                Order now · £495
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
