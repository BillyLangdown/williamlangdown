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

export const revalidate = 3600

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
  const ogImage = study.coverImage
    ? urlFor(study.coverImage).width(1200).height(630).url()
    : undefined
  return {
    title: `${study.title} | William Langdown`,
    description: study.description,
    alternates: { canonical: `https://williamlangdown.com/case-studies/${slug}` },
    openGraph: {
      title: study.title,
      description: study.description,
      url: `https://williamlangdown.com/case-studies/${slug}`,
      type: 'article',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.description ?? undefined,
      ...(ogImage && { images: [ogImage] }),
    },
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
      <main
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >

        {/* Header */}
        <section className="px-6 pt-32 pb-12 md:pt-36 md:pb-16">
          <div className="max-w-3xl mx-auto">
            {study.services && study.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                    style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
            <div className="pl-4 border-l-4 border-accent mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold leading-[1.06] tracking-tight text-ink">
                {study.title}
              </h1>
            </div>
            <p className="text-base text-secondary leading-relaxed mb-10">
              {study.description}
            </p>
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border-light">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-1">Client</p>
                <p className="text-sm text-ink">{study.client}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-1">Published</p>
                <p className="text-sm text-ink">{publishedDate}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover image — or audit-only branded hero if no image */}
        {study.coverImage ? (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/7] overflow-hidden rounded-sm">
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
        ) : (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ background: '#080e1c', minHeight: '220px' }}
              >
                {/* Blobs */}
                <div className="absolute inset-0 pointer-events-none">
                  <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 68%)' }} />
                  <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.25) 0%, transparent 68%)' }} />
                </div>
                <div
                  className="relative z-10 px-10 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
                >
                  <div>
                    {study.services && study.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.services.map((service) => (
                          <span
                            key={service}
                            className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                            style={{ background: 'rgba(37,99,235,0.25)', color: 'rgba(255,255,255,0.8)' }}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                      {study.client}
                    </p>
                  </div>
                  <p className="text-sm text-white/50 max-w-sm leading-relaxed md:text-right">
                    {study.description}
                  </p>
                </div>
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
