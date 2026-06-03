import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPostLoading() {
  return (
    <>
      <Nav />
      <main>
        <section
          className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="h-4 w-28 rounded-sm animate-pulse mb-6" style={{ background: 'rgba(37,99,235,0.15)' }} />
            <div className="h-10 w-full rounded-sm animate-pulse mb-3" style={{ background: 'rgba(15,23,42,0.08)' }} />
            <div className="h-10 w-3/4 rounded-sm animate-pulse mb-6" style={{ background: 'rgba(15,23,42,0.08)' }} />
            <div className="h-5 w-full rounded-sm animate-pulse mb-2" style={{ background: 'rgba(15,23,42,0.05)' }} />
            <div className="h-5 w-5/6 rounded-sm animate-pulse mb-8" style={{ background: 'rgba(15,23,42,0.05)' }} />
            <div className="h-3 w-36 rounded-sm animate-pulse" style={{ background: 'rgba(15,23,42,0.04)' }} />
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-[16/9] w-full rounded-sm animate-pulse mb-12" style={{ background: 'rgba(15,23,42,0.06)' }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-8">
                <div className="h-4 w-full rounded-sm animate-pulse mb-2" style={{ background: 'rgba(15,23,42,0.05)' }} />
                <div className="h-4 w-full rounded-sm animate-pulse mb-2" style={{ background: 'rgba(15,23,42,0.05)' }} />
                <div className="h-4 w-4/5 rounded-sm animate-pulse" style={{ background: 'rgba(15,23,42,0.05)' }} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
