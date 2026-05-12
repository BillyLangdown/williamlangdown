import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import { getBlogPost, getBlogPosts } from '@/lib/queries'
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
  let post = null
  try {
    post = await getBlogPost(slug)
  } catch {
    // no-op
  }
  if (!post) return {}
  return {
    title: `${post.title} | William Langdown`,
    description: post.description,
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    return posts.map((p) => ({ slug: p.slug.current }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post = null
  try {
    post = await getBlogPost(slug)
  } catch {
    // no-op
  }

  if (!post) notFound()

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <Nav />
      <main className="pt-40 pb-24">

        {/* Header */}
        <section className="px-6 mb-16">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-xs text-tertiary uppercase tracking-widest hover:text-ink transition-colors mb-8 inline-block"
            >
              ← All posts
            </Link>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-tertiary uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-secondary leading-relaxed mb-10">
              {post.description}
            </p>
            <div className="pt-6 border-t border-border-light">
              <p className="text-xs text-tertiary uppercase tracking-widest mb-1">Published</p>
              <p className="text-sm text-ink">{publishedDate}</p>
            </div>
          </div>
        </section>

        {/* Cover image */}
        {post.coverImage && (
          <section className="px-6 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/7] overflow-hidden bg-subtle">
                <Image
                  src={urlFor(post.coverImage).width(1800).url()}
                  alt={post.coverImage.alt ?? post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        {post.body && post.body.length > 0 && (
          <section className="px-6 mb-24">
            <div className="max-w-3xl mx-auto">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          </section>
        )}

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
