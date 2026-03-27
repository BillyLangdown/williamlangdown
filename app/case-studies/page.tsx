import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import Image from 'next/image'
import { getCaseStudies } from '@/lib/queries'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'

export const dynamic = 'force-dynamic'

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug.current}`}
      className="group block bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors"
    >
      {/* Cover image */}
      {study.coverImage ? (
        <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
          <Image
            src={urlFor(study.coverImage).width(900).height(506).url()}
            alt={study.coverImage.alt ?? study.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
          <span className="text-sm text-gray-400">{study.client}</span>
        </div>
      )}

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-5">
          {study.services?.map((service) => (
            <span
              key={service}
              className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-light text-gray-900 mb-2 tracking-tight group-hover:text-gray-600 transition-colors">
          {study.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
          {study.description}
        </p>
        <span className="text-sm text-gray-900 underline underline-offset-4 group-hover:text-gray-600 transition-colors">
          View case study →
        </span>
      </div>
    </Link>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full py-24 text-center">
      <p className="text-gray-400 text-sm mb-2">No case studies yet.</p>
      <p className="text-gray-400 text-xs">
        Add your first case study in Sanity Studio at{' '}
        <code className="font-mono">/studio</code>.
      </p>
    </div>
  )
}

export default async function CaseStudiesPage() {
  let studies: CaseStudy[] = []
  try {
    studies = await getCaseStudies()
  } catch (err) {
    console.error('[CaseStudiesPage] Failed to fetch case studies:', err)
  }

  return (
    <>
      <Nav />
      <main className="pt-40 pb-24">
        {/* Header */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">
              Case Studies
            </p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight text-gray-900 mb-6 max-w-2xl">
              Projects I&apos;ve worked on
            </h1>
            <p className="text-base text-gray-500 max-w-xl leading-relaxed">
              Real work with real businesses — auditing, redesigning, and
              rebuilding websites to convert more visitors into buyers.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {studies.length > 0 ? (
              studies.map((study) => (
                <CaseStudyCard key={study._id} study={study} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
