import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import { Breadcrumbs } from '@/components/service/parts'
import { articleSchema, breadcrumbSchema, graph } from '@/lib/schema'
import { guides, type Guide } from '@/lib/guides'

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export function ArticleAuthor() {
  return (
    <aside className="border-t border-border-light pt-6" aria-label="About the author">
      <p className="text-sm font-semibold text-ink">William Langdown</p>
      <p className="mt-1 max-w-xl text-sm text-secondary leading-relaxed">
        Independent technology and digital consultant based in Somerset, working with UK businesses on
        automation, integrations, software and websites.{' '}
        <Link href="/about" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">
          More about me
        </Link>
        .
      </p>
    </aside>
  )
}

export default function ArticleShell({
  guide,
  cta,
  children,
}: {
  guide: Guide
  cta: { heading: string; description: string; label: string; href: string }
  children: React.ReactNode
}) {
  const path = `/blog/${guide.slug}`
  const others = guides.filter((g) => g.slug !== guide.slug)

  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({
            title: guide.title,
            description: guide.description,
            path,
            publishedAt: guide.publishedAt,
            updatedAt: guide.updatedAt,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/blog' },
            { name: guide.title, path },
          ]),
        )}
      />
      <Nav />
      <main className="bg-bone pt-32 md:pt-40">
        <article>
          <header className="px-6 pb-10 md:pb-14">
            <div className="max-w-3xl mx-auto">
              <Breadcrumbs
                trail={[
                  { name: 'Home', href: '/' },
                  { name: 'Insights', href: '/blog' },
                  { name: 'Guide' },
                ]}
              />
              <h1 className="font-display text-4xl md:text-5xl leading-[1.08] text-ink">{guide.title}</h1>
              <p className="mt-6 text-lg text-secondary leading-relaxed">{guide.description}</p>
              <p className="mt-6 text-sm text-secondary">
                By William Langdown
                <span className="mx-2 text-terracotta">&middot;</span>
                <time dateTime={guide.publishedAt}>{fmt(guide.publishedAt)}</time>
                {guide.updatedAt && (
                  <>
                    <span className="mx-2 text-terracotta">&middot;</span>
                    Updated <time dateTime={guide.updatedAt}>{fmt(guide.updatedAt)}</time>
                  </>
                )}
              </p>
            </div>
          </header>

          <div className="px-6 pb-16">
            <div className="mx-auto max-w-[42rem] prose prose-lg prose-headings:font-display prose-headings:font-normal prose-headings:text-ink prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-xl prose-p:text-secondary prose-li:text-secondary prose-strong:text-ink prose-a:text-ink prose-a:underline-offset-4 hover:prose-a:text-terracotta prose-li:marker:text-terracotta">
              {children}
            </div>
          </div>

          <div className="px-6 pb-16">
            <div className="max-w-[42rem] mx-auto">
              <ArticleAuthor />
            </div>
          </div>
        </article>

        <nav aria-label="More guides" className="px-6 pb-16">
          <div className="max-w-[42rem] mx-auto flex flex-col gap-3 text-sm">
            <Link href="/blog" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">
              All insights
            </Link>
            {others.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`} className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">
                Next guide: {g.title}
              </Link>
            ))}
          </div>
        </nav>

        <CTABanner heading={cta.heading} description={cta.description} cta={cta.label} href={cta.href} />
      </main>
      <Footer />
    </>
  )
}
