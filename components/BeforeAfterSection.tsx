import Link from 'next/link'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'
import ScrollReveal from '@/components/ScrollReveal'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props {
  caseStudy: CaseStudy | null
}

export default function BeforeAfterSection({ caseStudy }: Props) {
  const clientName = caseStudy?.client ?? 'The Garden Tablecloth Co'
  const slug = caseStudy?.slug?.current ?? '#'
  const hasImages = caseStudy?.beforeImage && caseStudy?.afterImage

  return (
    <section className="py-24 px-6 bg-subtle">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-12">
          <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-4">
            Case Study
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink mb-4">
            Before &amp; After
          </h2>
          <p className="text-base text-secondary">
            {clientName}: a complete rethink of the customer journey.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mb-8">
          {hasImages ? (
            <BeforeAfterSlider
              beforeSrc={urlFor(caseStudy!.beforeImage!).width(1400).url()}
              afterSrc={urlFor(caseStudy!.afterImage!).width(1400).url()}
              beforeAlt={caseStudy!.beforeImage!.alt ?? `${clientName} — before`}
              afterAlt={caseStudy!.afterImage!.alt ?? `${clientName} — after`}
            />
          ) : (
            /* Fallback static layout when no Sanity images are present */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-tertiary uppercase tracking-widest mb-3">Before</p>
                <div className="aspect-[16/9] bg-border-light flex items-center justify-center">
                  <span className="text-sm text-tertiary">Before image</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-tertiary uppercase tracking-widest mb-3">After</p>
                <div className="aspect-[16/9] bg-ink flex items-center justify-center">
                  <span className="text-sm text-secondary">After image</span>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>

        <Link
          href={slug === '#' ? '/case-studies' : `/case-studies/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-ink underline underline-offset-4 hover:text-accent transition-colors"
        >
          View the case study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
