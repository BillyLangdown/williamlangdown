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
            Helping you build trust & drive results.
            </h1>

            <p className="text-lg text-secondary leading-relaxed max-w-xl mb-6">
              I audit, design, and build websites so visitors instantly understand what you do, and trust you enough to buy.
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
          <div className="shrink-0 w-48 lg:w-full lg:max-w-xs">
            <Image
              src="/images/portrait.png"
              alt="William Langdown"
              className="w-full h-auto object-cover rounded-[10px]"
              width={250}
              height={250}
              loading="eager"
              sizes="(max-width: 1024px) 128px, 250px"
            />
          </div>
  
        </div>
      </div>
    </section>
  );
  
}
