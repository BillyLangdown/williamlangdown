import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/queries'
import { urlFor } from '@/sanity/client'
import type { BlogPost } from '@/lib/types'

export const dynamic = 'force-dynamic'

function BlogCard({ post }: { post: BlogPost }) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block border border-border-light overflow-hidden hover:border-tertiary transition-colors"
    >
      {/* Cover image */}
      {post.coverImage ? (
        <div className="aspect-[16/9] relative overflow-hidden bg-subtle">
          <Image
            src={urlFor(post.coverImage).width(900).height(506).url()}
            alt={post.coverImage.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-subtle flex items-center justify-center">
          <span className="text-sm text-tertiary">No image</span>
        </div>
      )}

      <div className="p-8 border-t border-border-light">
        <div className="flex flex-wrap gap-3 mb-4">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-xs text-tertiary uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-heading font-bold text-ink mb-2 tracking-tight group-hover:text-secondary transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-secondary leading-relaxed mb-6 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-tertiary">{publishedDate}</span>
          <span className="text-sm text-ink underline underline-offset-4 group-hover:text-secondary transition-colors">
            Read post →
          </span>
        </div>
      </div>
    </Link>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full py-24 text-center">
      <p className="text-gray-400 text-sm mb-2">No blog posts yet.</p>
      <p className="text-gray-400 text-xs">
        Add your first post in Sanity Studio at{' '}
        <code className="font-mono">/studio</code>.
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
      <main className="pt-40 pb-24">
        {/* Header */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6 max-w-2xl">
              Thoughts &amp; writing
            </h1>
            <p className="text-base text-secondary max-w-xl leading-relaxed">
              Notes on web design, conversion, and building things that work.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.length > 0 ? (
              posts.map((post) => <BlogCard key={post._id} post={post} />)
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
