import Link from 'next/link'

const services = [
  {
    title: 'Website Audit',
    price: 'From £145',
    description:
      "A proper look at your website: what's putting people off, where the copy falls flat, how it performs on mobile, and how it sits in search. You get a written report and a short video walkthrough so you know what to tackle first.",
    href: '/pricing',
  },
  {
    title: 'Website Design & Development',
    price: 'From £1,495',
    description:
      "A website built to get people in touch. Up to five pages, works on every device, includes contact forms, basic SEO, and analytics. Two rounds of changes before it goes live.",
    href: '/pricing',
  },
  {
    title: 'Website Support & Improvements',
    price: '£30 / hour',
    description:
      "Help with what you've already got. Copy changes, new pages, design tweaks, or general upkeep. Billed by the hour, no contract.",
    href: '/pricing',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-surface border-t border-border-light">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">
            What I do
          </h2>
          <Link
            href="/pricing"
            className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0"
          >
            View all pricing
          </Link>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div key={service.title} className="border-t border-border-light py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
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

        <div className="mt-10 p-6 bg-subtle border border-border-light rounded-sm flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink mb-1">Also building custom booking systems</p>
            <p className="text-sm text-secondary leading-relaxed">
              For businesses that need customers to book online. Class schedules, appointment slots, custom flows. Built around how you actually work.
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
