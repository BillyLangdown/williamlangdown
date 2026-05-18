import Image from 'next/image'
import { Link } from 'next-view-transitions'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    id: 'audit',

    title: 'Audit',
    image: '/images/audit.jpg',
    description:
      "A deep review of your website through the lens of your customers. I identify where you're losing people and why, with a prioritised report of what to fix first.",
    flip: false,
  },
  {
    id: 'design',

    title: 'Design',
    image: '/images/design.jpg',
    description:
      'UX and visual design rooted in customer insight. I redesign the pages and flows that matter most, turning hesitation into confidence.',
    flip: true,
  },
  {
    id: 'build',
    
    title: 'Build',
    image: '/images/build.jpg',
    description:
      'Development that brings the designs to life. Fast, accessible, and built to convert, with a CMS so you stay in control.',
    flip: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-tight text-ink max-w-xl">
            Three ways I can help improve your website
          </h2>
          <Link
            href="/pricing"
            className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0"
          >
            View pricing
          </Link>
        </ScrollReveal>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 80}>
              <div
                className={`group border-t border-border-light py-12 flex flex-col gap-10 ${
                  service.flip ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:gap-16 md:items-center`}
              >
                {/* Image with accent shadow */}
                <div className="w-full md:w-[40%] shrink-0">
                  <div className="relative">
                    {/* Peach offset shadow — same technique as portrait */}
                    <div className="absolute -bottom-3 -right-3 w-full h-full bg-accent/20 rounded-[10px]" />
                    <div className="relative aspect-[4/3] ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] rounded-[10px]"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="relative flex-1 flex flex-col gap-5 overflow-hidden">
                

                
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-ink tracking-tight leading-tight">
                    {service.title}
                  </h3>
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
          ))}

          <div className="border-t border-border-light" />
        </div>

      </div>
    </section>
  )
}
