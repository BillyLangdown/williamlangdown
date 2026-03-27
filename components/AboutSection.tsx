import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Portrait */}
        <div className="rounded-2xl overflow-hidden order-2 md:order-1 bg-gray-200">
          <Image
            src="/images/portrait.png"
            alt="William Langdown"
            width={600}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-8">
          <div>
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900">
              Design, Technology, and Human Behaviour
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base text-gray-500 leading-relaxed">
              I&apos;m a UX designer and web consultant with a background in
              advertising and front-end development. That combination — creative
              strategy, customer psychology, and the ability to build — means I
              can take a problem from insight all the way through to a live
              website.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              I&apos;ve spent years studying how people behave online and what
              makes them trust — or not trust — a brand. I apply that
              understanding to every project I take on, whether it&apos;s a
              quick audit or a full redesign and build.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              I work with small and medium-sized ecommerce businesses who know
              their product is good but feel like their website isn&apos;t
              doing it justice.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/williamlangdown"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors w-fit"
          >
            Connect on LinkedIn
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="mt-px"
            >
              <path
                d="M1 11L11 1M11 1H4M11 1v7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
