import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

/**
 * Disclosure block for self-initiated work built on a real past client:
 * makes the client real, the work unsolicited, and the scope explicit,
 * up front. Shared shape for any future speculative/concept case study,
 * not just this one.
 */
export default function ConceptNotice({
  client,
  originalHref,
  originalLabel,
}: {
  client: string
  originalHref: string
  originalLabel: string
}) {
  return (
    <ScrollReveal delay={80}>
      <div className="border-t border-border-light">
        <div className="grid gap-6 border-b border-border-light py-6 sm:grid-cols-3">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-tertiary">
              Client
            </p>
            <p className="text-sm text-ink">{client}, a real, paying client</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-tertiary">
              Status
            </p>
            <p className="text-sm text-ink">Self-initiated concept. Not commissioned, not live.</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-tertiary">
              Scope
            </p>
            <p className="text-sm text-ink">Homepage only</p>
          </div>
        </div>

        <div className="pt-6 text-sm">
          <Link
            href={originalHref}
            className="text-ink underline underline-offset-4 transition-colors hover:text-terracotta"
          >
            {originalLabel}
          </Link>
        </div>
      </div>
    </ScrollReveal>
  )
}
