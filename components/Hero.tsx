import Link from 'next/link'
import Image from 'next/image'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden bg-surface">
      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN, opacity: 0.04 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT: TEXT */}
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-8">
              UX Design &amp; Web Consultancy
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-ink mb-8">
              Helping you build{' '}
              <em className="italic text-accent">trust</em>{' '}
              &amp; drive results.
            </h1>

            <p className="text-lg text-secondary leading-relaxed max-w-xl mb-10">
              I audit, design, and build websites so visitors instantly understand what
              you do, and trust you enough to buy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/billy-langdown01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm px-7 py-3.5 rounded-sm hover:bg-accent/90 transition-all duration-200 font-medium"
              >
                Book a free call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-px">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-ink text-ink text-sm px-7 py-3.5 rounded-sm hover:bg-ink hover:text-white transition-all duration-200"
              >
                See how I work
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="shrink-0 w-56 lg:w-full lg:max-w-xs flex flex-col items-center gap-5">
            <div className="relative w-full">
              {/* Warm offset depth block */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-accent/20 rounded-[12px]" />
              <Image
                src="/images/portrait.png"
                alt="William Langdown"
                className="relative w-full h-auto object-cover rounded-[10px] shadow-lg"
                width={300}
                height={300}
                loading="eager"
                sizes="(max-width: 1024px) 224px, 300px"
              />
            </div>
            {/* Availability badge */}
            <div className="flex items-center gap-2 text-xs text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              Available for new projects
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
