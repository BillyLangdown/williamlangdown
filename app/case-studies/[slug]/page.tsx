import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import { getCaseStudy, getCaseStudies } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let study = null
  try {
    study = await getCaseStudy(params.slug)
  } catch {
    // no-op
  }
  if (!study) return {}
  return {
    title: `${study.title} — William Langdown`,
    description: study.description,
  }
}

export async function generateStaticParams() {
  try {
    const studies = await getCaseStudies()
    return studies.map((s) => ({ slug: s.slug.current }))
  } catch {
    return []
  }
}

export default async function CaseStudyPage({ params }: Props) {
  let study = null
  try {
    study = await getCaseStudy(params.slug)
  } catch {
    // no-op
  }

  if (!study) notFound()

  const publishedDate = new Date(study.publishedAt).toLocaleDateString(
    'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )

  return (
    <>
      <Nav />
      <main className="pt-40 pb-24">
        {/* Header */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {study.services?.map((service) => (
                <span
                  key={service}
                  className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight text-gray-900 mb-6">
              {study.title}
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-2xl">
              {study.description}
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Client
                </p>
                <p className="text-sm text-gray-700">{study.client}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Published
                </p>
                <p className="text-sm text-gray-700">{publishedDate}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/7] bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-sm text-gray-400">Cover image</span>
            </div>
          </div>
        </section>

        {/* Before & After */}
        {(study.beforeImage || study.afterImage) && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
                Before &amp; After
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                    Before
                  </p>
                  <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                    <span className="text-sm text-gray-400">Before</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                    After
                  </p>
                  <div className="aspect-[4/3] bg-gray-900 rounded-2xl flex items-center justify-center">
                    <span className="text-sm text-gray-500">After</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        {study.body && study.body.length > 0 && (
          <section className="px-6 mb-24">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mx-auto prose prose-gray prose-base">
                <PortableText value={study.body} />
              </div>
            </div>
          </section>
        )}

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
