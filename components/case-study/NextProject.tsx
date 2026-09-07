import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function NextProject({
  client,
  href,
}: {
  client: string
  href: string
}) {
  return (
    <section data-nav-theme="light" className="relative z-10 bg-bone px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <Link href={href} className="group block">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-tertiary">
              Next project
            </p>
            <span className="inline-flex items-center gap-4 font-display text-3xl text-ink transition-colors group-hover:text-terracotta md:text-5xl">
              {client}
              <svg width="20" height="20" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
