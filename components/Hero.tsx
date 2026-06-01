import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-5">
              Web Design &amp; Development · UK
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.08] tracking-tight text-ink mb-6">
              Websites that turn visitors into customers
            </h1>
            <p className="text-base text-secondary leading-relaxed max-w-lg mb-8">
              I design and build websites for small businesses that make it clear what you do,
              easy to trust you, and simple to get in touch. If your site isn&apos;t bringing
              in enquiries, I&apos;ll fix that.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/billy-langdown01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-accent text-white text-sm px-6 py-3 rounded-sm hover:bg-accent/90 transition-colors font-medium"
              >
                Book a free call
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/case-studies"
                className="inline-flex justify-center items-center gap-2 border border-ink text-ink text-sm px-6 py-3 rounded-sm hover:bg-ink hover:text-white transition-all"
              >
                See my work
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="shrink-0 flex flex-col items-start lg:items-center gap-5 w-full lg:w-auto lg:max-w-[260px]">
            <div className="relative w-48 lg:w-full">
              <Image
                src="/images/portrait.png"
                alt="William Langdown"
                className="w-full h-auto object-cover rounded-[4px] shadow-md"
                width={260}
                height={260}
                loading="eager"
                sizes="260px"
              />
            </div>
            <div className="flex items-center gap-2.5 px-3.5 py-2 bg-white border border-border-light rounded-sm">
              <div className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#488710] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#488710]" />
              </div>
              <p className="text-xs text-secondary">Currently taking on new projects</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
