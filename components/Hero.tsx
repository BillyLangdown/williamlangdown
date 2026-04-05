import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: TEXT */}
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-8">
              UX Design &amp; Web Consultancy
            </p>
  
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-ink mb-8">
              People buy when they feel understood.
            </h1>
  
            <p className="text-lg text-secondary leading-relaxed max-w-xl mb-12">
              I audit, design, and build your website, guided by customer insight.
            </p>
  
            <Link
              href="#services"
              className="inline-flex items-center gap-2 border border-ink text-ink text-sm px-7 py-3.5 rounded-none hover:bg-ink hover:text-white transition-all duration-200"
            >
              See how I work
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="mt-px"
              >
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
  
          {/* RIGHT: IMAGE */}
          <div className="w-full max-w-xs lg:max-w-xsm">
            <Image
          src="/images/portrait.png"
              alt="Portrait"
              className="w-full h-auto object-contain"
              width={250}
              height={250}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
  
        </div>
      </div>
    </section>
  );
  
}
