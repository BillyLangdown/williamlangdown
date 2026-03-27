import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'

interface Props {
  caseStudy: CaseStudy | null
}

export default function BeforeAfterSection({ caseStudy }: Props) {
  const clientName = caseStudy?.client ?? 'The Garden Tablecloth Co.'
  const slug = caseStudy?.slug?.current ?? '#'

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
            Case Study
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900 mb-4">
            Before &amp; After
          </h2>
          <p className="text-base text-gray-500">
            {clientName} — a complete rethink of the customer journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
              Before
            </p>
            {caseStudy?.beforeImage ? (
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={urlFor(caseStudy.beforeImage).width(1400).url()}
                  alt={caseStudy.beforeImage.alt ?? `${clientName} — before`}
                  width={700}
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-sm text-gray-400">Before image</span>
              </div>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
              After
            </p>
            {caseStudy?.afterImage ? (
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={urlFor(caseStudy.afterImage).width(1400).url()}
                  alt={caseStudy.afterImage.alt ?? `${clientName} — after`}
                  width={700}
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-sm text-gray-500">After image</span>
              </div>
            )}
          </div>
        </div>

        <Link
          href={slug === '#' ? '/case-studies' : `/case-studies/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
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
      </div>
    </section>
  )
}
