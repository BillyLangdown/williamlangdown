import Link from 'next/link'

// Closing links from a case study to the service it relates to and the
// contact page. Kept to a single line of prose so it sits quietly above the
// page's call to action.
export default function RelatedServices({
  links,
}: {
  links: { href: string; label: string }[]
}) {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-3xl border-t border-border-light pt-6">
        <p className="text-sm leading-relaxed text-secondary">
          Related:{' '}
          {links.map((l, i) => (
            <span key={l.href}>
              {i > 0 && (i === links.length - 1 ? ' and ' : ', ')}
              <Link href={l.href} className="text-ink underline underline-offset-4 transition-colors hover:text-terracotta">
                {l.label}
              </Link>
            </span>
          ))}
          . Or <Link href="/contact" className="text-ink underline underline-offset-4 transition-colors hover:text-terracotta">get in touch</Link> about
          a similar project.
        </p>
      </div>
    </section>
  )
}
