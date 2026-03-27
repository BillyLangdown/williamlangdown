export default function CTABanner() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-white mb-4">
            Feel free to schedule a quick call.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            No commitment needed. Just a conversation to understand where you
            are and whether I can help.
          </p>
        </div>
        <a
          href="https://calendly.com/williamlangdown"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm px-7 py-4 rounded-full hover:bg-gray-100 transition-colors shrink-0 font-medium"
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
