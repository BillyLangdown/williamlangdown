import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function SkeletonCard() {
  return (
    <div
      className="overflow-hidden rounded-sm"
      style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(15,23,42,0.08)' }}
    >
      <div className="aspect-[16/9] animate-pulse" style={{ background: 'rgba(15,23,42,0.06)' }} />
      <div className="p-6 md:p-7">
        <div className="h-5 w-20 rounded-sm animate-pulse mb-4" style={{ background: 'rgba(15,23,42,0.07)' }} />
        <div className="h-5 w-3/4 rounded-sm animate-pulse mb-2" style={{ background: 'rgba(15,23,42,0.08)' }} />
        <div className="h-5 w-1/2 rounded-sm animate-pulse mb-5" style={{ background: 'rgba(15,23,42,0.08)' }} />
        <div className="h-4 w-full rounded-sm animate-pulse mb-2" style={{ background: 'rgba(15,23,42,0.05)' }} />
        <div className="h-4 w-5/6 rounded-sm animate-pulse mb-5" style={{ background: 'rgba(15,23,42,0.05)' }} />
        <div className="flex justify-between">
          <div className="h-3 w-24 rounded-sm animate-pulse" style={{ background: 'rgba(15,23,42,0.04)' }} />
          <div className="h-3 w-16 rounded-sm animate-pulse" style={{ background: 'rgba(15,23,42,0.04)' }} />
        </div>
      </div>
    </div>
  )
}

export default function BlogLoading() {
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
            <div className="pl-4 border-l-4 border-accent">
              <div className="h-12 w-64 rounded-sm animate-pulse mb-3" style={{ background: 'rgba(15,23,42,0.08)' }} />
              <div className="h-5 w-80 rounded-sm animate-pulse" style={{ background: 'rgba(15,23,42,0.05)' }} />
            </div>
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
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
