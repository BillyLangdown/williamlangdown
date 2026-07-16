import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CopyValue from './CopyValue'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setting Up Your Domain | William Langdown',
  description: 'A simple, step-by-step guide to buying a domain and pointing it at your new website.',
  alternates: { canonical: 'https://williamlangdown.com/domain-setup' },
}

export default function DomainSetupPage() {
  return (
    <>
      <Nav />
      <main
        className="min-h-screen"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 md:pt-36">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>
              A simple guide
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-[1.1] tracking-tight text-ink">
              Setting up your domain
            </h1>
            <p className="mt-5 text-base md:text-lg text-secondary leading-relaxed max-w-xl mx-auto">
              No technical knowledge needed. Two steps, about ten minutes, and you can stop at any
              point and just ask me to finish it for you.
            </p>
          </div>
        </section>

        {/* What is a domain */}
        <section className="px-6 pb-16">
          <div className="max-w-2xl mx-auto rounded-sm p-6 md:p-8" style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(15,23,42,0.08)' }}>
            <h2 className="text-lg font-heading font-bold text-ink mb-2">What&apos;s a domain, exactly?</h2>
            <p className="text-sm text-secondary leading-relaxed">
              A domain is your website&apos;s address: the bit people type in, like{' '}
              <span className="text-ink font-medium">yourbusiness.com</span>. You buy it (a small
              yearly fee, usually £10–£15) from a company called a &ldquo;registrar,&rdquo; then
              tell it where your new website lives. That second part is what this guide walks
              through.
            </p>
          </div>
        </section>

        {/* Step 1 */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: '#2563EB' }}>1</span>
              <h2 className="text-2xl font-heading font-bold text-ink">Buy your domain</h2>
            </div>

            <p className="text-sm text-secondary leading-relaxed mb-6 pl-11">
              If you already own a domain, skip to Step 2 below. If not, here&apos;s where to get one.
            </p>

            {/* Recommended */}
            <div className="ml-11 mb-4">
              <a
                href="https://www.namecheap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-sm border-2 px-6 py-5 transition-colors"
                style={{ borderColor: '#2563EB', background: 'rgba(37,99,235,0.05)' }}
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0" style={{ background: '#2563EB', color: '#FFFFFF' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6.5l7-3 7 3v7l-7 3-7-3v-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M3 6.5l7 3 7-3M10 9.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-base font-semibold text-ink">Namecheap</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white" style={{ background: '#2563EB' }}>Recommended</span>
                  </div>
                  <p className="text-sm text-secondary mt-0.5">
                    The easiest for beginners: simple checkout, no confusing add-ons or upsells.
                  </p>
                </div>
                <svg className="text-tertiary group-hover:text-accent transition-colors shrink-0" width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Alternative */}
            <div className="ml-11">
              <a
                href="https://www.godaddy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-sm border border-border-light bg-white/80 px-6 py-5 transition-colors hover:border-accent/40"
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0 bg-accent/10 text-accent">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6.5l7-3 7 3v7l-7 3-7-3v-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M3 6.5l7 3 7-3M10 9.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-ink">GoDaddy</p>
                  <p className="text-sm text-secondary mt-0.5">
                    A well-known alternative. Just watch out for extra add-ons at checkout, you
                    only need the domain itself.
                  </p>
                </div>
                <svg className="text-tertiary group-hover:text-accent transition-colors shrink-0" width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="text-xs text-tertiary mt-4">
                Already have a preferred registrar? Any of them will work fine: the steps below
                apply everywhere, the menu names just vary slightly.
              </p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: '#2563EB' }}>2</span>
              <h2 className="text-2xl font-heading font-bold text-ink">Point it at your new site</h2>
            </div>

            <p className="text-sm text-secondary leading-relaxed mb-6 pl-11 max-w-xl">
              This is a one-time, five-minute task. You&apos;re changing two settings called{' '}
              <span className="text-ink font-medium">nameservers</span>: think of them as a
              forwarding address that tells the internet where your site actually lives.
            </p>

            <div className="ml-11 flex flex-col gap-3 mb-8">
              <CopyValue value="ns1.vercel-dns.com" />
              <CopyValue value="ns2.vercel-dns.com" />
            </div>

            <div className="ml-11 rounded-sm border border-border-light bg-white/80 p-6 mb-6">
              <p className="text-sm font-semibold text-ink mb-4">How to enter them, in general</p>
              <ol className="flex flex-col gap-3">
                {[
                  'Log in to whichever site you bought your domain from.',
                  'Find your domain in your account, and open its settings.',
                  'Look for a section called "Nameservers" or "DNS" (sometimes under "Manage DNS" or "Advanced DNS").',
                  'Choose "Custom" nameservers (not the default/registrar ones).',
                  'Enter the two values above, one in each box, then save.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" style={{ background: 'rgba(37,99,235,0.1)', color: '#2563EB' }}>
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-sm border border-border-light bg-white/80 p-5">
                <p className="text-sm font-semibold text-ink mb-1.5">If you bought from Namecheap</p>
                <p className="text-xs text-secondary leading-relaxed">
                  Domain List → Manage (next to your domain) → Nameservers → choose &ldquo;Custom
                  DNS&rdquo; → paste in the two values.
                </p>
              </div>
              <div className="rounded-sm border border-border-light bg-white/80 p-5">
                <p className="text-sm font-semibold text-ink mb-1.5">If you bought from GoDaddy</p>
                <p className="text-xs text-secondary leading-relaxed">
                  My Products → DNS (next to your domain) → Nameservers → Change → &ldquo;Enter my
                  own nameservers&rdquo; → paste in the two values.
                </p>
              </div>
            </div>

            <p className="ml-11 text-xs text-tertiary max-w-xl leading-relaxed">
              After saving, it can take anywhere from a few minutes up to 24–48 hours for your
              domain to fully switch over. That&apos;s completely normal, and you don&apos;t need to
              do anything else while you wait.
            </p>
          </div>
        </section>

        {/* Fallback */}
        <section className="px-6 pb-24">
          <div className="max-w-2xl mx-auto text-center rounded-sm p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(15,23,42,0.08)' }}>
            <h2 className="text-xl font-heading font-bold text-ink mb-2">Not sure, or would rather I just did it?</h2>
            <p className="text-sm text-secondary leading-relaxed mb-6 max-w-md mx-auto">
              That&apos;s completely fine. Send me your domain and login for the site you bought
              it from, and I&apos;ll take care of the whole thing.
            </p>
            <Link
              href="/contact?service=starter"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white rounded-sm transition-opacity hover:opacity-90"
              style={{ background: '#2563EB' }}
            >
              Ask me to help
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
