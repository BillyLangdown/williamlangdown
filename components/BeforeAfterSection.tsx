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

        {/* Header */}
        <ScrollReveal className="mb-12">
          <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-4">
            Case Study
          </p>

          <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight tracking-tight text-ink mb-4">
            Before &amp; After
          </h2>

          <p className="text-base text-secondary max-w-2xl leading-relaxed">
            {clientName} <br/> A complete rethink of the customer journey and conversion flow.
          </p>
        </ScrollReveal>

        {/* METRICS (moved ABOVE slider) */}
        <ScrollReveal delay={100}>
          <div className="border-t border-border-light pt-8 mb-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
              <p className="text-sm font-medium text-ink">
                Performance after redesign
              </p>

             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Conversion rate */}
              <div className="border-b border-border-light pb-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium text-ink">
                      Conversion rate
                    </p>

                    <p className="text-sm text-secondary mt-1">
                      2.3% → 4.1%
                    </p>

                    <p className="text-xs text-tertiary mt-3 leading-relaxed">
                      More visitors now complete enquiry forms or take action
                    </p>
                  </div>

                  <p className="text-3xl font-heading font-semibold text-ink">
                    +75%
                  </p>
                </div>
              </div>

              {/* Bounce rate */}
              <div className="border-b border-border-light pb-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium text-ink">
                      Bounce rate
                    </p>

                    <p className="text-sm text-secondary mt-1">
                      42% → 33%
                    </p>

                    <p className="text-xs text-tertiary mt-3 leading-relaxed">
                      Fewer users leave immediately after landing
                    </p>
                  </div>

                  <p className="text-3xl font-heading font-semibold text-ink">
                    −21%
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* BEFORE / AFTER PROOF */}
        <ScrollReveal delay={150} className="mb-10">
          {hasImages ? (
            <BeforeAfterSlider
              beforeSrc={urlFor(caseStudy!.beforeImage!).width(1400).url()}
              afterSrc={urlFor(caseStudy!.afterImage!).width(1400).url()}
              beforeAlt={caseStudy!.beforeImage!.alt ?? `${clientName} — before`}
              afterAlt={caseStudy!.afterImage!.alt ?? `${clientName} — after`}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-tertiary uppercase tracking-widest mb-3">
                  Before
                </p>
                <div className="aspect-[16/9] bg-border-light flex items-center justify-center">
                  <span className="text-sm text-tertiary">Before image</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-tertiary uppercase tracking-widest mb-3">
                  After
                </p>
                <div className="aspect-[16/9] bg-ink flex items-center justify-center">
                  <span className="text-sm text-secondary">After image</span>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <Link
            href={slug === '#' ? '/case-studies' : `/case-studies/${slug}`}
            className="inline-flex items-center gap-2 text-sm text-ink underline underline-offset-4 hover:text-accent transition-colors"
          >
            View the case study

            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}