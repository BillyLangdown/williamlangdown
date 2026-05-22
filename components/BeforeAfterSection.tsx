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
    <section className="py-24 px-6 bg-ink">
      <div className="max-w-6xl mx-auto">

        {/* Header — centred */}
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tight mb-4">
            Before &amp; After
          </h2>
          <p className="text-sm text-white/90 max-w-sm mx-auto leading-relaxed">
            {clientName}. A complete rethink of the customer journey and conversion flow.
          </p>
        </ScrollReveal>

        {/* Metrics */}
        <ScrollReveal delay={100} className="mb-16">
          <div className="grid grid-cols-2 gap-6 md:gap-10 border-t border-white/10 pt-10 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-xs text-white/90 uppercase tracking-widest mb-4">
                Conversion rate <span className="text-accent">up</span>
              </p>
              <p className="text-5xl md:text-7xl font-heading font-bold text-white leading-none tracking-tight mb-3">
                +75%
              </p>
              <p className="text-xs text-white/80 mb-1">2.3% to 4.1%</p>
              <p className="text-xs text-white/80 leading-relaxed">
                More visitors completing enquiry forms
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/90 uppercase tracking-widest mb-4">
                Bounce rate <span className="text-accent">down</span>
              </p>
              <p className="text-5xl md:text-7xl font-heading font-bold text-white leading-none tracking-tight mb-3">
                -21%
              </p>
              <p className="text-xs text-white/80 mb-1">42% to 33%</p>
              <p className="text-xs text-white/80 leading-relaxed">
                Fewer users leaving immediately after landing
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <ScrollReveal delay={150} className="mb-10">
          {hasImages ? (
            <BeforeAfterSlider
              beforeSrc={urlFor(caseStudy!.beforeImage!).width(1400).url()}
              afterSrc={urlFor(caseStudy!.afterImage!).width(1400).url()}
              beforeAlt={caseStudy!.beforeImage!.alt ?? `${clientName} before`}
              afterAlt={caseStudy!.afterImage!.alt ?? `${clientName} after`}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Before</p>
                <div className="aspect-[16/9] bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-sm text-white/20">Before image</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-3">After</p>
                <div className="aspect-[16/9] bg-white/10 border border-white/10 flex items-center justify-center">
                  <span className="text-sm text-white/40">After image</span>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200} className="text-center">
          <Link
            href={slug === '#' ? '/case-studies' : `/case-studies/${slug}`}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white underline underline-offset-4 transition-colors"
          >
            View the case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}
