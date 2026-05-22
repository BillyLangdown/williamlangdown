import { Link } from 'next-view-transitions'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    id: 'audit',
    title: 'Website Audits',
    price: 'From £145',
    description:
      "A thorough review of your website covering UX, messaging, conversion friction, structure, responsiveness, trust signals, performance, and SEO basics. You get a clear written report and a short video walkthrough of what I found and where to focus first.",
    flip: false,
  },
  {
    id: 'design',
    title: 'Website Design & Development',
    price: 'From £1,495',
    description:
      "A complete website designed and built around your customers and what you want them to do. Up to five core pages, fully responsive, with contact forms, basic SEO setup, analytics, and two rounds of refinements before launch.",
    flip: true,
  },
  {
    id: 'support',
    title: 'Website Support & Improvements',
    price: '£30/hour',
    description:
      "Ongoing help with your existing website. Whether you need copy changes, new pages, a refresh to specific sections, or regular maintenance, I can pick things up on an hourly basis without the overhead of a retainer.",
    flip: false,
  },
]

function AuditShape() {
  return (
    <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden flex items-center justify-center" style={{ background: '#F5EDE0' }}>
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
        {/* Large open arc ~300 degrees */}
        <path
          d="M 310 160 A 120 120 0 1 0 222 272"
          stroke="#C17A3A"
          strokeWidth="38"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function DesignShape() {
  return (
    <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden flex items-center justify-center" style={{ background: '#ECEAE5' }}>
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
        {/* Three staggered horizontal bars */}
        <rect x="60" y="95" width="230" height="30" rx="15" fill="#1A1A1A" />
        <rect x="110" y="145" width="180" height="30" rx="15" fill="#1A1A1A" opacity="0.55" />
        <rect x="60" y="195" width="270" height="30" rx="15" fill="#1A1A1A" opacity="0.25" />
      </svg>
    </div>
  )
}

function SupportShape() {
  return (
    <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden flex items-center justify-center" style={{ background: '#EDE8DF' }}>
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
        {/* Two parallel flowing S-curves */}
        <path
          d="M 50 200 C 110 200, 140 80, 200 80 S 290 200, 350 200"
          stroke="#C17A3A"
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          d="M 50 200 C 110 200, 140 80, 200 80 S 290 200, 350 200"
          stroke="#C17A3A"
          strokeWidth="34"
          strokeLinecap="round"
          opacity="0.18"
          transform="translate(0 30)"
        />
      </svg>
    </div>
  )
}

const shapes: Record<string, React.FC> = {
  audit: AuditShape,
  design: DesignShape,
  support: SupportShape,
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.02] tracking-tight text-ink max-w-2xl">
            Three ways I can help
          </h2>
          <Link
            href="/pricing"
            className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0"
          >
            View pricing
          </Link>
        </ScrollReveal>

        <div className="flex flex-col">
          {services.map((service, i) => {
            const Shape = shapes[service.id]
            return (
              <ScrollReveal key={service.id} delay={i * 80}>
                <div
                  className={`group border-t border-border-light py-12 flex flex-col gap-10 ${
                    service.flip ? 'md:flex-row-reverse' : 'md:flex-row'
                  } md:gap-16 md:items-center`}
                >
                  {/* Shape */}
                  <div className="w-full md:w-[40%] shrink-0">
                    <Shape />
                  </div>

                  {/* Text */}
                  <div className="relative flex-1 flex flex-col gap-5 overflow-hidden">
                    <div>
                      <p className="text-xs text-tertiary uppercase tracking-widest mb-3">{service.price}</p>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-ink tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
                    >
                      See pricing
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}

          <div className="border-t border-border-light" />
        </div>

      </div>
    </section>
  )
}
