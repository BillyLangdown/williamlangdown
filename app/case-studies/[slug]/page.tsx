import { notFound } from 'next/navigation'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import { getCaseStudy, getCaseStudies } from '@/lib/queries'
import { urlFor } from '@/sanity/client'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { Metadata } from 'next'

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-heading font-bold text-ink mt-12 mb-4 tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-heading font-bold text-ink mt-8 mb-3 tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-heading font-bold text-ink mt-6 mb-2 tracking-tight">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-secondary leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-ink pl-6 my-8 text-secondary italic">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-ink font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-ink underline underline-offset-4 hover:text-secondary transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 text-secondary space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 text-secondary space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
}

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  let study = null
  try {
    study = await getCaseStudy(slug)
  } catch {
    // no-op
  }
  if (!study) return {}
  return {
    title: `${study.title} | William Langdown`,
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
  const { slug } = await params
  let study = null
  try {
    study = await getCaseStudy(slug)
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
          <div className="max-w-3xl mx-auto">
            {study.services && study.services.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs text-tertiary uppercase tracking-widest"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6">
              {study.title}
            </h1>
            <p className="text-lg text-secondary leading-relaxed mb-10">
              {study.description}
            </p>
            <div className="flex flex-wrap gap-10 pt-6 border-t border-border-light">
              <div>
                <p className="text-xs text-tertiary uppercase tracking-widest mb-1">Client</p>
                <p className="text-sm text-ink">{study.client}</p>
              </div>
              <div>
                <p className="text-xs text-tertiary uppercase tracking-widest mb-1">Published</p>
                <p className="text-sm text-ink">{publishedDate}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        {study.coverImage && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/7] overflow-hidden bg-subtle">
                <Image
                  src={urlFor(study.coverImage).width(1800).url()}
                  alt={study.coverImage.alt ?? study.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Before & After */}
        {(study.beforeImage || study.afterImage) && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xs text-tertiary uppercase tracking-widest mb-6">
                Before &amp; After
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.beforeImage && (
                  <div>
                    <p className="text-xs text-tertiary uppercase tracking-widest mb-3">Before</p>
                    <div className="relative aspect-[4/3] overflow-hidden bg-subtle border border-border-light">
                      <Image
                        src={urlFor(study.beforeImage).width(900).url()}
                        alt={study.beforeImage.alt ?? `${study.client} before`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}
                {study.afterImage && (
                  <div>
                    <p className="text-xs text-tertiary uppercase tracking-widest mb-3">After</p>
                    <div className="relative aspect-[4/3] overflow-hidden bg-subtle border border-border-light">
                      <Image
                        src={urlFor(study.afterImage).width(900).url()}
                        alt={study.afterImage.alt ?? `${study.client} after`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        {study.body && study.body.length > 0 && (
          <section className="px-6 mb-24">
            <div className="max-w-3xl mx-auto">
              <div>
                <PortableText value={study.body} components={portableTextComponents} />
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
