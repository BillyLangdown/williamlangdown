export default function CTABanner() {
  return (
    <section className="py-24 px-6 bg-ink">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-white mb-4">
            Feel free to schedule a quick call.
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            No commitment needed. Just a conversation to understand where you
            are and whether I can help.
          </p>
        </div>
        <a
          href="https://calendly.com/williamlangdown"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-ink text-sm px-7 py-4 rounded-none hover:bg-white/90 transition-colors shrink-0 font-medium"
        >
          Book a free call
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M7 1l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
