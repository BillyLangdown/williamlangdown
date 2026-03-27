import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-8">
            UX Design &amp; Web Consultancy
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-gray-900 mb-8">
            People buy when they feel understood.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-12">
            I audit, design, and build your website, guided by customer insight.
          </p>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 text-sm px-7 py-3.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
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
      </div>
    </section>
  )
}
