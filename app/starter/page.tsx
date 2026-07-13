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
    desc: 'Sharp, high-contrast, big type. Suits fitness, trades, and anything that wants to feel confident.',
  },
  {
    id: 'preview-2',
    name: 'Willow',
    style: 'Warm & personal',
    bg: '#FBF6EF',
    accent: '#C97B5A',
    text: '#3A322A',
    desc: 'Soft, rounded, photo-led. Suits independent shops, studios, and anything hand-made or personal.',
  },
  {
    id: 'preview-3',
    name: 'Hartley',
    style: 'Minimal & professional',
    bg: '#FFFFFF',
    accent: '#D9B96C',
    text: '#1C2333',
    desc: 'Clean, understated, lots of space. Suits consultants, advisors, and services that sell on trust.',
  },
  {
    id: 'preview-4',
    name: 'Ochre',
    style: 'Image-led & gallery-style',
    bg: '#FAFAF8',
    accent: '#A8683D',
    text: '#1C1B19',
    desc: 'Gallery grid, your work does the talking. Suits artists, photographers, and makers. Includes a simple page for uploading your own images after launch.',
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
  ['01', 'Pick a design', 'Browse the four live previews below and choose the one closest to your style.'],
  ['02', 'Fill in the order form', 'Your content, photos, logo, and a colour choice, all in one form, ten minutes.'],
  ['03', 'It gets built', 'I build your site using the layout you picked, with your content in place.'],
  ['04', "It's live", "Live in about a week. If it needs a small tweak, just ask."],
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
                Cheap and cheerful
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-ink">
                A simple website, for £495
              </h1>
              <p className="mt-5 text-base text-secondary max-w-lg mx-auto leading-relaxed">
                Not every business needs a big custom build. If you just need three clean pages online
                fast, this is that. Pick a design, send your content, done.
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
                  See the four designs ↓
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Designs */}
        <section id="designs" className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-12 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Pick a design</h2>
              <p className="text-sm text-secondary mt-1">Four real, clickable previews. Browse them properly before choosing.</p>
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
                This is deliberately simple. That&apos;s what keeps the price down. If you need any of this,
                the <Link href="/services" className="text-accent underline underline-offset-2 hover:text-accent/80">Design &amp; Build service</Link> is
                the better fit. (Ochre is the one exception — it comes with a simple page for uploading your own images after launch, not a full CMS.)
              </p>
              <ul className="flex flex-col gap-3">
                {['Contact forms or booking systems', 'A content management system', 'Custom design beyond the 4 templates', 'Blog, shop, or extra pages'].map(item => (
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

        {/* How it works */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="mb-14 pl-4 border-l-4 border-accent">
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
              <p className="text-white/40 text-sm leading-relaxed mb-8">£495. Live in about a week. No contract.</p>
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
