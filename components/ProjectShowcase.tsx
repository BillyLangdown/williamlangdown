'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'

interface Media {
  video?: string
  poster: string
}

interface Project {
  name: string
  description: string
  href: string
  external: boolean
  cta: string
  url: string
  mobile: Media
  desktop: Media
}

const PROJECTS: Project[] = [
  {
    name: 'BVS',
    description:
      'Full redesign for a 40-year-old commercial ventilation contractor. New site, brand touch-ups, and mobile PageSpeed jumping from 56 to 98.',
    href: '/case-studies/building-ventilation-services-ltd',
    external: false,
    cta: 'View case study',
    url: 'bvs-ltd.co.uk/ec-fan-upgrades-and-retrofits-for-hvac',
    mobile: { video: '/videos/bvs-mobile.mp4', poster: '/images/showcase-bvs-mobile.jpg' },
    desktop: { video: '/videos/bvs-desktop.mp4', poster: '/images/showcase-bvs-desktop.jpg' },
  },
  {
    name: 'The Garden Tablecloth Co.',
    description:
      'Audit and redesign of an existing Wix store for an independent tableware brand, adding trust signals and a clearer path to purchase. Enquiries rose 75%, bounce down 21%.',
    href: '/case-studies/the-garden-tablecloth-co',
    external: false,
    cta: 'View case study',
    url: 'gardentablecloth.co.uk',
    mobile: { poster: '/images/showcase-gtc-mobile.png' },
    desktop: { poster: '/images/showcase-gtc-desktop.png' },
  },
  {
    name: 'Ironclad',
    description:
      'A concept rebrand of one of my Starter Site templates for a powerlifting gym, built to show what the base design can become with a bolder direction. A proof of concept, not a real client project.',
    href: '/starter/remix-ironclad',
    external: false,
    cta: 'View concept',
    url: 'williamlangdown.com/starter/remix-ironclad',
    mobile: { poster: '/images/showcase-ironclad-mobile.png' },
    desktop: { poster: '/images/showcase-ironclad-desktop.png' },
  },
  {
    name: 'Axiom',
    description:
      'A concept case study exploring product design and copy for an AI ops platform.',
    href: 'https://axiom-showcase.vercel.app',
    external: true,
    cta: 'View concept',
    url: 'axiom-showcase.vercel.app',
    mobile: { video: '/videos/axiom-mobile.mp4', poster: '/images/showcase-axiom-mobile.jpg' },
    desktop: { video: '/videos/axiom-desktop.mp4', poster: '/images/showcase-axiom-desktop.jpg' },
  },
]

const SLIDE_COUNT = PROJECTS.length
const SWIPE_THRESHOLD_PX = 50

function CTALink({ project, className }: { project: Project; className: string }) {
  const content = (
    <>
      {project.cta}
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }
  return (
    <Link href={project.href} className={className}>
      {content}
    </Link>
  )
}

function AddressBar({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-center h-full px-3 min-w-0">
      <div className="flex items-center gap-1.5 min-w-0 max-w-full px-3 py-1 rounded-full bg-white/10 text-white/70">
        <svg width="9" height="9" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span className="text-[10px] leading-none truncate min-w-0">{url}</span>
      </div>
    </div>
  )
}

function Screen({ media }: { media: Media }) {
  if (!media.video) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={media.poster} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
  }
  return (
    <video
      key={media.video}
      className="absolute inset-0 w-full h-full object-cover object-top"
      src={media.video}
      poster={media.poster}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}

function MobileMockup({ project }: { project: Project }) {
  return (
    <div className="w-full mx-auto" style={{ maxWidth: '230px' }}>
      <div className="rounded-lg overflow-hidden shadow-xl border border-black/10">
        <div style={{ height: '24px', background: '#0B0F1A' }}>
          <AddressBar url={project.url} />
        </div>
        <div className="relative w-full" style={{ aspectRatio: '390 / 780', background: '#0B0F1A' }}>
          <Screen media={project.mobile} />
        </div>
      </div>
    </div>
  )
}

function DesktopMockup({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-3xl lg:max-w-4xl min-w-0 mx-auto">
      <div className="rounded-lg overflow-hidden shadow-xl border border-black/10">
        <div className="flex items-center h-9 min-w-0" style={{ background: '#0B0F1A' }}>
          <div className="flex items-center gap-1.5 pl-3.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
          </div>
          <div className="flex-1 min-w-0">
            <AddressBar url={project.url} />
          </div>
        </div>
        <div className="relative w-full" style={{ aspectRatio: '1280 / 800', background: '#0B0F1A' }}>
          <Screen media={project.desktop} />
        </div>
      </div>
    </div>
  )
}

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('desktop')

  const [dragging, setDragging] = useState(false)
  const dragState = useRef({ startX: 0, deltaX: 0, pointerId: -1 })
  const [dragDeltaPx, setDragDeltaPx] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const goToSlide = useCallback((idx: number) => {
    setActiveSlide((idx + SLIDE_COUNT) % SLIDE_COUNT)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, deltaX: 0, pointerId: e.pointerId }
    setDragging(true)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || e.pointerId !== dragState.current.pointerId) return
    const delta = e.clientX - dragState.current.startX
    dragState.current.deltaX = delta
    setDragDeltaPx(delta)
  }

  const endDrag = (e: React.PointerEvent) => {
    if (!dragging || e.pointerId !== dragState.current.pointerId) return
    const delta = dragState.current.deltaX
    if (delta > SWIPE_THRESHOLD_PX) {
      goToSlide(activeSlide - 1)
    } else if (delta < -SWIPE_THRESHOLD_PX) {
      goToSlide(activeSlide + 1)
    }
    setDragging(false)
    setDragDeltaPx(0)
  }

  // Scale-in from slightly zoomed, rather than a plain fade-up: gives the
  // showcase a bit more entrance weight than the smaller nav controls.
  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  })

  const trackWidth = trackRef.current?.offsetWidth || 1
  const dragPercent = (dragDeltaPx / trackWidth) * 100

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-24 px-6"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F8FAFC',
        scrollSnapAlign: 'start',
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-12 pl-4 border-l-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Recent work</h2>
          <p className="text-sm text-secondary mt-1">A few things I&apos;ve designed and built recently. Swipe through.</p>
        </div>

        {/* Nav: view toggle, dots, arrows */}
        <div className="flex items-center justify-between gap-3 mb-5 flex-wrap" style={fadeIn(0)}>
          <div className="inline-flex rounded-full border border-border-light p-0.5">
            {(['mobile', 'desktop'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className="px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors"
                style={{
                  background: viewMode === mode ? '#2563EB' : 'transparent',
                  color: viewMode === mode ? '#fff' : '#64748B',
                }}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goToSlide(activeSlide - 1)}
              className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
              aria-label="Previous project"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  height: '6px',
                  width: i === activeSlide ? '20px' : '6px',
                  background: i === activeSlide ? '#2563EB' : 'rgba(15,23,42,0.12)',
                }}
                aria-label={`Project ${i + 1}`}
              />
            ))}
            <button
              onClick={() => goToSlide(activeSlide + 1)}
              className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
              aria-label="Next project"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swipeable track */}
        <div ref={trackRef} className="overflow-hidden touch-pan-y" style={fadeIn(60)}>
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="flex cursor-grab active:cursor-grabbing select-none items-start"
            style={{
              transform: `translateX(calc(-${activeSlide * 100}% + ${dragging ? dragPercent : 0}%))`,
              transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {PROJECTS.map((project, i) => (
              <div key={project.name} className="min-w-full flex flex-col items-center gap-8 px-1">
                <div className="w-full min-w-0 flex justify-center">
                  {viewMode === 'mobile' ? (
                    <MobileMockup project={project} />
                  ) : (
                    <DesktopMockup project={project} />
                  )}
                </div>

                <div className="w-full max-w-3xl lg:max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-left">
                  <div>
                    <p className="text-2xl lg:text-3xl font-heading font-bold text-ink">{project.name}</p>
                    <p className="text-base text-secondary mt-3 leading-relaxed max-w-xl">{project.description}</p>
                  </div>
                  <CTALink
                    project={project}
                    className="self-end shrink-0 inline-flex items-center gap-2 text-sm font-medium text-white bg-ink hover:bg-accent transition-colors px-5 py-3 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
