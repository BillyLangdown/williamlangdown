import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Website Audit',
    price: 'From £145',
    description:
      "A thorough review of your website covering messaging, UX, conversion friction, trust signals, responsiveness, performance, and SEO basics. You get a clear written report and a short video walkthrough so you know exactly what to fix and where to start.",
    href: '/pricing',
  },
  {
    number: '02',
    title: 'Website Design & Development',
    price: 'From £1,495',
    description:
      "A complete website designed and built around your customers and what you want them to do. Up to five core pages, fully responsive, with contact forms, basic SEO, analytics, and two rounds of revisions before launch.",
    href: '/pricing',
  },
  {
    number: '03',
    title: 'Website Support & Improvements',
    price: '£30 / hour',
    description:
      "Ongoing help with your existing website. Copy changes, new pages, section refreshes, or regular maintenance — picked up on an hourly basis without the overhead of a retainer.",
    href: '/pricing',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-surface border-t border-border-light">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">What I do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">
              Three ways I can help
            </h2>
          </div>
          <Link
            href="/pricing"
            className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0"
          >
            View all pricing
          </Link>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div key={service.number} className="border-t border-border-light py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <span className="text-xs font-medium text-tertiary tabular-nums shrink-0 mt-0.5">{service.number}</span>
              <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-[220px] shrink-0">
                  <h3 className="text-lg font-semibold text-ink leading-snug mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-accent">{service.price}</p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors font-medium"
                  >
                    See pricing
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border-light" />
        </div>

        {/* Booking systems callout */}
        <div className="mt-10 p-6 bg-subtle border border-border-light rounded-sm flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink mb-1">Also building custom booking systems</p>
            <p className="text-sm text-secondary leading-relaxed">
              For service businesses that need online bookings — class scheduling, appointment booking, and more.
              Built to fit your business, not the other way around.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-ink text-white text-sm px-5 py-2.5 rounded-sm hover:bg-ink/85 transition-colors whitespace-nowrap"
          >
            Find out more
          </Link>
        </div>

      </div>
    </section>
  )
}
