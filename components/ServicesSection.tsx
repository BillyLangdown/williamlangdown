import Link from 'next/link'

const services = [
  {
    id: 'audit',
    title: 'Audit',
    description:
      'A deep review of your website through the lens of your customers. I identify where you\'re losing people and why, with a prioritised report of what to fix first.',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'UX and visual design rooted in customer insight. I redesign the pages and flows that matter most, turning hesitation into confidence.',
  },
  {
    id: 'build',
    title: 'Build',
    description:
      'Development that brings the designs to life. Fast, accessible, and built to convert — with a CMS so you stay in control.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900 max-w-xl">
            Three ways I can help improve your website
          </h2>
          <Link
            href="/pricing"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4 shrink-0"
          >
            View pricing
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 flex flex-col gap-6"
            >
              {/* Image placeholder */}
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-xs text-gray-400 tracking-wide uppercase">
                  {service.title}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link
                href="/pricing"
                className="mt-auto text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
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
