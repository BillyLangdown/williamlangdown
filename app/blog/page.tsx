import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/queries'
import { urlFor } from '@/sanity/client'
import type { BlogPost } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog | William Langdown',
  description: 'Thoughts on web design, UX, conversion rate optimisation, and building websites that work for your business.',
  alternates: { canonical: 'https://williamlangdown.com/blog' },
  openGraph: {
    title: 'Blog | William Langdown',
    description: 'Thoughts on web design, UX, conversion rate optimisation, and building websites that work for your business.',
    url: 'https://williamlangdown.com/blog',
  },
}

function BlogCover({ post }: { post: BlogPost }) {
  if (post.coverImage) {
    return (
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={urlFor(post.coverImage).width(900).height(506).url()}
          alt={post.coverImage.alt ?? post.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    )
  }

  return (
    <div
      className="aspect-[16/9] flex items-center justify-center"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#e8edf3',
      }}
    >
      {post.tags?.[0] && (
        <span className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.88)', color: '#64748b' }}>
          {post.tags[0]}
        </span>
      )}
    </div>
  )
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <ScrollReveal delay={index * 80}>
      <Link
        href={`/blog/${post.slug.current}`}
        className="group block overflow-hidden rounded-sm transition-all hover:shadow-md"
        style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(15,23,42,0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <BlogCover post={post} />

        <div className="p-6 md:p-7">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h2 className="text-lg font-heading font-bold text-ink mb-2 tracking-tight leading-snug">
            {post.title}
          </h2>
          <p className="text-sm text-secondary leading-relaxed mb-5 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-tertiary">{publishedDate}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors">
              Read post
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full py-24 text-center">
      <p className="text-sm text-secondary mb-1">No posts yet.</p>
      <p className="text-xs text-tertiary">
        Add your first in Sanity Studio at <code className="font-mono">/studio</code>.
      </p>
    </div>
  )
}

export default async function BlogPage() {
  let posts: BlogPost[] = []
  try {
    posts = await getBlogPosts()
  } catch (err) {
    console.error('[BlogPage] Failed to fetch blog posts:', err)
  }

  return (
    <>
      <Nav />
      <main>

        <section
          className="px-6 pt-32 pb-20 md:pt-36 md:pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink">
                  Thoughts &amp; writing
                </h1>
                <p className="text-base text-secondary mt-3 max-w-xl leading-relaxed">
                  Notes on web design, conversion, and building things that actually work.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          className="px-6 pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.length > 0 ? (
              posts.map((post, i) => <BlogCard key={post._id} post={post} index={i} />)
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
