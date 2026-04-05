import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'audit',
    title: 'Audit',
    image: '/images/audit.jpg',
    description:
      'A deep review of your website through the lens of your customers. I identify where you\'re losing people and why, with a prioritised report of what to fix first.',
  },
  {
    id: 'design',
    title: 'Design',
    image: '/images/design.jpg',
    description:
      'UX and visual design rooted in customer insight. I redesign the pages and flows that matter most, turning hesitation into confidence.',
  },
  {
    id: 'build',
    title: 'Build',
    image: '/images/build.jpg',
    description:
      'Development that brings the designs to life. Fast, accessible, and built to convert, with a CMS so you stay in control.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink max-w-xl">
            Three ways I can help improve your website
          </h2>
          <Link
            href="/pricing"
            className="text-sm text-secondary hover:text-ink transition-colors underline underline-offset-4 shrink-0"
          >
            View pricing
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 flex flex-col gap-6"
            >
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-subtle">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link
                href="/pricing"
                className="mt-auto text-sm text-ink underline underline-offset-4 hover:text-secondary transition-colors"
              >
                See pricing →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
