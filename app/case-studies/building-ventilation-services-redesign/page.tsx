import Image from 'next/image'
import type { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import PeaLogoVideo from '@/components/PeaLogoVideo'
import ProjectMeta from '@/components/case-study/ProjectMeta'
import ConceptNotice from '@/components/case-study/ConceptNotice'
import CaseStudyMedia from '@/components/case-study/CaseStudyMedia'
import NextProject from '@/components/case-study/NextProject'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Ventilation Services: Homepage Redesign (Concept) | William Langdown',
  description:
    'A self-initiated homepage redesign for a real client, built with my current process: audience research, a creative direction and a full rebuild. Not commissioned, not live.',
  alternates: {
    canonical: 'https://williamlangdown.com/case-studies/building-ventilation-services-redesign',
  },
  openGraph: {
    title: 'Building Ventilation Services: Homepage Redesign (Concept) | William Langdown',
    description:
      'A self-initiated homepage redesign for a real client, built with my current process: audience research, a creative direction and a full rebuild. Not commissioned, not live.',
    url: 'https://williamlangdown.com/case-studies/building-ventilation-services-redesign',
  },
}

const ORIGINAL_CASE_STUDY = '/case-studies/building-ventilation-services-ltd'

function ChapterTitle({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-lg text-tertiary md:text-xl">{number}</span>
      <h2 className="font-display text-4xl leading-none text-ink md:text-6xl">{children}</h2>
    </div>
  )
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">{children}</h3>
  )
}

function Body({ children }: { children: ReactNode }) {
  return <p className="text-base leading-[1.8] text-secondary md:text-[17px]">{children}</p>
}

export default function BvsRedesignCaseStudy() {
  return (
    <>
      <Nav />

      <main className="bg-bone">
        {/* OPENING */}
        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ProjectMeta
                title="Building Ventilation Services"
                descriptor="Homepage redesign, self-initiated. An experiment in what my current process would do differently."
                disciplines={['Self-initiated', 'Art direction', 'Brand', 'UX/UI']}
                year="2026"
              />
            </ScrollReveal>

            <div className="mt-10">
              <ConceptNotice
                client="Building Ventilation Services Ltd"
                originalLabel="View the original case study"
                originalHref={ORIGINAL_CASE_STUDY}
              />
            </div>
          </div>
        </section>

        {/* HERO ARTEFACT */}
        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="overflow-hidden" style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                <Image
                  src="/images/bvs-redesign-hero.jpg"
                  alt="Redesigned BVS homepage hero: black-and-white motion photography of a moving crowd inside a transit hall, with a situation-led search prompt over it"
                  width={1700}
                  height={1560}
                  sizes="(max-width: 768px) 100vw, 1000px"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="mt-10 max-w-2xl">
              <p className="text-lg leading-[1.7] text-secondary md:text-xl">
                BVS is a real client. I built and shipped their current site last year, and it
                genuinely improved things for them. This is a different exercise: taking the
                same brand and audience, and asking what I&rsquo;d do now that I look at research,
                insight and creative direction before I touch layout.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 01 UNDERSTAND */}
        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 pb-40 md:pb-52">
          <div className="mx-auto max-w-4xl border-t border-border-light pt-10 md:pt-14">
            <ScrollReveal>
              <ChapterTitle number="01">Understand</ChapterTitle>
            </ScrollReveal>

            <div className="mt-20 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
              <ScrollReveal>
                <SubHeading>The original brief</SubHeading>
                <p className="mt-6 font-display text-xl leading-[1.25] text-ink md:text-2xl">
                  A site that loaded fast, ranked, and spoke to the people who actually commission
                  ventilation work.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="border-t border-border-light">
                  <li className="border-b border-border-light py-5">
                    <p className="font-medium text-ink">Mobile PageSpeed: 56 → 98</p>
                  </li>
                  <li className="border-b border-border-light py-5">
                    <p className="font-medium text-ink">Desktop PageSpeed: 69 → 100</p>
                  </li>
                  <li className="border-b border-border-light py-5">
                    <p className="font-medium text-ink">Enquiries up 75%, bounce rate down 21%</p>
                  </li>
                  <li className="border-b border-border-light py-5">
                    <p className="font-medium text-ink">Structure and copy built around real service lines</p>
                    <p className="mt-1 text-base leading-[1.65] text-secondary">
                      Facilities managers, estates teams and M&amp;E consultants, not a general
                      audience.
                    </p>
                  </li>
                </ul>
              </ScrollReveal>
            </div>

            <div className="mt-28 max-w-2xl md:mt-36">
              <ScrollReveal>
                <SubHeading>Where it stopped short</SubHeading>
                <p className="mt-6 text-base leading-[1.8] text-secondary md:text-[17px]">
                  The technical foundation held up and the messaging was correctly targeted. What
                  it never got was a strong point of view. The layout was competent and safe: the
                  kind of clean, generic structure that most AI website builders would also
                  produce, because nothing in it was designed to be unmistakably BVS.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120} className="mt-16 max-w-3xl">
              <p className="font-display text-3xl leading-[1.12] text-ink md:text-5xl">
                The technical work was sound. The creative direction wasn&rsquo;t.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 02 DIRECTION */}
        <section data-nav-theme="dark" className="relative z-10 bg-navy px-6 py-28 md:py-40">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="font-display text-lg text-bone/45 md:text-xl">02</span>
              <h2 className="mt-4 font-display text-4xl leading-none text-bone md:text-6xl">
                Direction
              </h2>
            </ScrollReveal>

            <div className="mt-20 grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
              <ScrollReveal>
                <p className="font-display text-3xl leading-[1.12] text-bone md:text-4xl">
                  What UK ventilation and M&amp;E contractor sites actually look like.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <p className="text-base leading-[1.8] text-bone/70 md:text-[17px]">
                  I looked across the category BVS competes in: plant photography on white
                  backgrounds, the same engineering-blue palette, badge walls, and near-identical
                  page structures. Most of it is interchangeable: swap the logo and you couldn&rsquo;t
                  tell one contractor from another. Competent, and completely forgettable.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100} className="mt-24 max-w-2xl md:mt-32">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-bone/50">
                Four directions
              </p>
              <p className="text-base leading-[1.8] text-bone/70 md:text-[17px]">
                Rather than jump straight to layout, I moodboarded four substantially different
                takes on what BVS could feel like, each testing a different relationship between
                the brand and the buildings it works in.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <ScrollReveal delay={40}>
                <div className="overflow-hidden border border-bone/15">
                  <Image
                    src="/images/bvs-redesign-mood-manufacturing.jpg"
                    alt="Moodboard: Manufacturing, Critical Infrastructure. Technical manuals, engineering diagrams and industrial brand books"
                    width={1200}
                    height={938}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-xs text-bone/50">
                  01 &middot; Manufacturing, critical infrastructure. Technical documentation and
                  industrial brand systems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="overflow-hidden border border-bone/15">
                  <Image
                    src="/images/bvs-redesign-mood-guided-simplicity.jpg"
                    alt="Moodboard: Complex Problem and Guided Simplicity. Wayfinding signage, transit information and clear directional systems"
                    width={1200}
                    height={778}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-xs text-bone/50">
                  02 &middot; Complex problem, guided simplicity. Wayfinding and transit
                  signage as the model for clarity.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="overflow-hidden border border-bone/15">
                  <Image
                    src="/images/bvs-redesign-mood-no-drama.jpg"
                    alt="Moodboard: Concept 3, No Drama. Raw black-and-white industrial photography of plant, pipework and structure"
                    width={1200}
                    height={760}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-xs text-bone/50">
                  03 &middot; No drama. Raw, unstyled industrial photography, plant and
                  pipework as found.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <div className="overflow-hidden border border-bone/15">
                  <Image
                    src="/images/bvs-redesign-mood-invisible-infrastructure.jpg"
                    alt="Moodboard: Concept 4, BVS does its job so everyone else can carry on doing theirs. Soft hospitality interiors, natural light and fabric in motion"
                    width={1200}
                    height={1037}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-xs text-bone/50">
                  04 &middot; &ldquo;BVS does its job so everyone else can carry on doing
                  theirs.&rdquo; Soft, ambient, hospitality-led. BVS as invisible infrastructure.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100} className="mt-24 max-w-2xl md:mt-32">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-bone/50">
                The one that stuck
              </p>
              <p className="text-base leading-[1.8] text-bone/70 md:text-[17px]">
                Concept four. Not because it was the most decorated, but because the logic behind
                it matched what BVS actually does: keep buildings running well enough that nobody
                inside them has to think about it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={140} className="mt-10">
              <div className="overflow-hidden border border-bone/15">
                <Image
                  src="/images/bvs-redesign-mood-final-direction.jpg"
                  alt="Final direction moodboard, titled Above deck, life continues: long exposure photography of people blurred in motion through stable architecture, paired with AHU fan and plant photography"
                  width={1800}
                  height={1169}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="h-auto w-full"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160} className="mt-10 max-w-2xl">
              <p className="font-display text-2xl leading-[1.2] text-bone md:text-3xl">
                &ldquo;Above deck, life continues.&rdquo;
              </p>
              <p className="mt-5 text-base leading-[1.8] text-bone/70 md:text-[17px]">
                The working rationale I wrote against this board: long exposure and slow shutter,
                people blurred through movement, architecture staying relatively stable, natural
                atmospheric light, wide compositions with room to breathe, a sense of continuous
                flow, and BVS itself largely invisible in the frame. The buildings and the people
                in them carry the story. BVS is the reason it&rsquo;s able to continue, not the
                subject of the photograph.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={180} className="mt-24 max-w-3xl md:mt-32">
              <p className="font-display text-3xl leading-[1.12] text-bone md:text-4xl">
                BVS&rsquo;s entire business is one thing: keeping air moving, in buildings that
                never stop running.
              </p>
              <p className="mt-7 text-base leading-[1.8] text-bone/65 md:text-[17px]">
                That&rsquo;s a stronger identity than another photo of ductwork. The direction became
                movement itself, air, people and places in motion, instead of static equipment
                shots.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="mt-24 md:mt-32">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-bone/50">
                What changed
              </p>
              <ul className="border-t border-bone/15">
                {[
                  'Editorial black-and-white photography built around motion, not stock plant shots',
                  'A bolder, condensed display typeface for pace and authority',
                  'A tightened, more contemporary version of the BVS mark',
                  'A dark, premium palette with one sharp accent, not engineering-blue everywhere',
                  'A situation-led entry point: visitors start from what’s wrong, not a service menu',
                ].map((item) => (
                  <li key={item} className="border-b border-bone/15 py-4 text-sm text-bone/80 md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* 03 BUILD */}
        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 py-28 md:py-40">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ChapterTitle number="03">Build</ChapterTitle>
            </ScrollReveal>

            <ScrollReveal delay={60} className="mt-16 max-w-2xl">
              <Body>
                Homepage only. The point was to prove the direction under real content and a real
                brand, not to rebuild the full site speculatively.
              </Body>
            </ScrollReveal>

            <div className="mt-14">
              <CaseStudyMedia
                src="/images/bvs-redesign-fan.jpg"
                alt="Black-and-white motion photograph of an AHU in a plant room, with a technician walking past in motion blur"
                width={1122}
                height={1402}
                caption="Keeping air moving, made literal: the same motion blur used for the crowd in the hero carries through to the plant itself."
              />
            </div>
          </div>
        </section>

        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 py-28 md:py-40">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <SubHeading>Real environments, shown editorially</SubHeading>
              <p className="mt-6 max-w-2xl text-base leading-[1.8] text-secondary md:text-[17px]">
                The client roster is genuinely strong: NHS trusts, Disney, Marriott, Waitrose,
                Westfield. The original site listed them as logos. Here they&rsquo;re shown as the
                buildings BVS actually keeps running, photographed the same way as the rest of the
                site, from the O2&rsquo;s roof canopy down to the individual sites where the work
                happened.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80} className="mt-10">
              <div className="overflow-hidden" style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                <Image
                  src="/images/bvs-redesign-places.jpg"
                  alt="Full places section of the redesigned homepage: the Keeping the UK moving intro, a large O2 arena and pool-hall pair, then the Keeping the O2 moving heading with NHS, shopping centre and hotel case tiles"
                  width={1400}
                  height={1194}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="h-auto w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 pb-28 md:pb-40">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <SubHeading>Start from what&rsquo;s wrong</SubHeading>
              <p className="mt-6 max-w-2xl text-base leading-[1.8] text-secondary md:text-[17px]">
                Facilities managers don&rsquo;t arrive knowing they need &ldquo;AHU
                refurbishment.&rdquo; They arrive knowing something&rsquo;s wrong: a fan&rsquo;s
                failing, a room&rsquo;s too hot, a system&rsquo;s reaching end of life. The hero
                is built around that. Click the underlined phrase, pick the situation that matches
                from the list, and it takes you straight to the relevant information, meeting
                people in the mindset they actually showed up in, instead of asking them to
                translate their problem into a service name first.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80} className="mt-10">
              <div className="overflow-hidden" style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                <PeaLogoVideo
                  src="/videos/bvs-redesign-showcase.mp4"
                  poster="/images/bvs-redesign-poster.jpg"
                  width={1920}
                  height={1110}
                  alt="Screen recording of the situation-finder in the redesigned BVS hero: clicking the underlined phrase opens a list of problems to choose from, which jumps straight to the relevant information"
                />
              </div>
            </ScrollReveal>

          </div>
        </section>

        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 pb-28 md:pb-40">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <SubHeading>Photography direction</SubHeading>
              <p className="mt-6 max-w-2xl text-base leading-[1.8] text-secondary md:text-[17px]">
                The full homepage, top to bottom, and the reference photography I used to test how
                far the blur and motion could go before it stopped reading as BVS&rsquo;s own
                plant and started looking like generic stock.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={60} className="mt-10">
              <div
                className="mx-auto max-w-xs overflow-y-auto"
                style={{ maxHeight: '560px', border: '1px solid rgba(16,35,63,0.1)' }}
              >
                <Image
                  src="/images/bvs-redesign-full-scroll.jpg"
                  alt="Full-length screenshot of the entire redesigned BVS homepage, from hero to footer"
                  width={1400}
                  height={6285}
                  sizes="320px"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-center text-xs text-tertiary">
                The full homepage. Scroll inside the frame to see it top to bottom.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="mt-16">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-tertiary">
                Reference photography
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { src: '/images/bvs-redesign-ref-1.jpg', alt: 'Reference photograph: spinning AHU fans in a plant corridor with a technician blurred in motion' },
                  { src: '/images/bvs-redesign-ref-2.jpg', alt: 'Reference photograph: an AHU filter unit with a technician walking past in motion blur' },
                  { src: '/images/bvs-redesign-ref-3.jpg', alt: 'Reference photograph: rooftop AHU plant against a city skyline, with a technician blurred in motion' },
                  { src: '/images/bvs-redesign-ref-4.jpg', alt: 'Reference photograph: fabrication of ductwork with welding sparks and a figure blurred in the background' },
                  { src: '/images/bvs-redesign-ref-5.jpg', alt: 'Reference photograph: a controls panel with a technician’s hand blurred in motion' },
                  { src: '/images/bvs-redesign-ref-6.jpg', alt: 'Reference photograph: a plant room boiler and pipework with a technician blurred in motion' },
                ].map((img) => (
                  <div key={img.src} className="overflow-hidden" style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1122}
                      height={1402}
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 04 REFLECT */}
        <section data-nav-theme="light" className="relative z-10 bg-bone px-6 py-28 md:py-40">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ChapterTitle number="04">Reflect</ChapterTitle>
            </ScrollReveal>

            <ScrollReveal delay={80} className="mt-16 max-w-2xl space-y-6">
              <Body>
                BVS didn&rsquo;t ask for this and hasn&rsquo;t seen it. It exists to show the gap between
                delivering a site that performs and delivering one with a real point of view, and
                what closing that gap actually looks like when I apply my current process to work
                I&rsquo;ve already shipped.
              </Body>
              <Body>
                If it ever became real, that&rsquo;s a conversation for BVS to have with me, not a
                roadmap I&rsquo;m building towards on my own.
              </Body>
            </ScrollReveal>

            <ScrollReveal delay={120} className="mt-14">
              <a
                href={ORIGINAL_CASE_STUDY}
                className="inline-flex items-center gap-2 text-lg font-medium text-ink underline decoration-2 underline-offset-4 transition-colors hover:text-terracotta md:text-xl"
                style={{ textDecorationColor: '#C1613D' }}
              >
                View the original case study
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>

        <NextProject client="The Planning Enforcement Advisory" href="/case-studies/planning-enforcement-advisory" />

        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
