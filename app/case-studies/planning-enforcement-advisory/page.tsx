import Image from 'next/image'
import type { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import PeaLogoVideo from '@/components/PeaLogoVideo'
import ProjectMeta from '@/components/case-study/ProjectMeta'
import TwoUpMedia from '@/components/case-study/TwoUpMedia'
import NextProject from '@/components/case-study/NextProject'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Planning Enforcement Advisory | William Langdown',
  description:
    'A new identity and mobile-first digital experience for a specialist planning enforcement consultancy: strategy, brand, UX/UI and development.',
  robots: { index: false, follow: true },
}

const LIVE_URL = 'https://pea-sooty.vercel.app/'

const SOURCES = [
  {
    n: '01',
    title:
      'Solicitors Regulation Authority, Better information in the legal services market',
  },
  {
    n: '02',
    title:
      'Solicitors Regulation Authority, consumer research on legal services',
  },
  {
    n: '03',
    title: 'GOV.UK, Enforcement and post permission matters',
  },
]

function ChapterTitle({
  number,
  children,
  inverse = false,
}: {
  number: string
  children: ReactNode
  inverse?: boolean
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span
        className={`font-display text-lg md:text-xl ${
          inverse ? 'text-bone/45' : 'text-tertiary'
        }`}
      >
        {number}
      </span>

      <h2
        className={`font-display text-4xl leading-none md:text-6xl ${
          inverse ? 'text-bone' : 'text-ink'
        }`}
      >
        {children}
      </h2>
    </div>
  )
}

function SubHeading({
  children,
  inverse = false,
}: {
  children: ReactNode
  inverse?: boolean
}) {
  return (
    <h3
      className={`font-display text-2xl leading-[1.15] md:text-3xl ${
        inverse ? 'text-bone' : 'text-ink'
      }`}
    >
      {children}
    </h3>
  )
}

function Body({
  children,
  inverse = false,
}: {
  children: ReactNode
  inverse?: boolean
}) {
  return (
    <p
      className={`text-base leading-[1.8] md:text-[17px] ${
        inverse ? 'text-bone/70' : 'text-secondary'
      }`}
    >
      {children}
    </p>
  )
}

function Cite({ n }: { n: number }) {
  return (
    <sup className="ml-0.5 text-[0.62em] font-semibold text-tertiary">
      {n}
    </sup>
  )
}

function Finding({
  number,
  title,
  evidence,
  implication,
}: {
  number: string
  title: string
  evidence: ReactNode
  implication: ReactNode
}) {
  return (
    <div className="grid gap-5 border-t border-border-light py-9 md:grid-cols-[4rem_1fr] md:gap-10 md:py-11">
      <span className="font-display text-lg text-tertiary">{number}</span>

      <div className="max-w-xl">
        <h4 className="font-display text-xl leading-snug text-ink md:text-2xl">
          {title}
        </h4>

        <p className="mt-4 text-base leading-[1.75] text-secondary">
          {evidence}
        </p>

        <p className="mt-4 text-base leading-[1.75] text-ink">
          {implication}
        </p>
      </div>
    </div>
  )
}

export default function PlanningEnforcementAdvisoryCaseStudy() {
  return (
    <>
      <Nav />

      <main className="bg-bone">
        {/* OPENING */}
        <section
          data-nav-theme="light"
          className="relative z-10 bg-bone px-6 pb-28 pt-32 md:pb-40 md:pt-40"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ProjectMeta
                title="The Planning Enforcement Advisory"
                descriptor="Planning enforcement consultancy"
                disciplines={[
                  'Strategy',
                  'Brand identity',
                  'UX/UI',
                  'Development',
                ]}
                year="2026"
              />
            </ScrollReveal>
             <section
          data-nav-theme="light"
          className="relative z-10 bg-bone px-6 pb-44 md:pb-56"
        >
          <div className="mx-auto max-w-5xl mt-10">
            <PeaLogoVideo
              src="/videos/pea-lockup.mp4"
              poster="/images/pea-logo-poster.jpg"
              width={2400}
              height={1500}
              alt="The Planning Enforcement Advisory, animated identity mark"
            />

            <ScrollReveal delay={100} className="mt-12">
              <p className="max-w-2xl text-lg leading-[1.7] text-secondary md:text-xl">
                A new specialist planning enforcement consultancy needed a
                brand, positioning and digital experience that could turn
                genuine expertise into something people could quickly
                understand and trust, without an existing reputation to lean
                on.
              </p>
            </ScrollReveal>
           
          </div>
        </section>


          </div>
        </section>

        {/* 01 UNDERSTAND */}
      <section
  data-nav-theme="light"
  className="relative z-10 bg-bone px-6 pb-40 md:pb-52"
>
  <div className="mx-auto max-w-4xl border-t border-border-light pt-10 md:pt-14">
    <ScrollReveal>
      <ChapterTitle number="01">Understand</ChapterTitle>
    </ScrollReveal>

    {/* Brief */}
    <div className="mt-20 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
      <ScrollReveal>
        <SubHeading>The brief</SubHeading>

        <p className="mt-6 font-display text-xl leading-[1.25] text-ink md:text-2xl">
          A new business with real expertise, but no established reputation
          to lean on.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <ul className="border-t border-border-light">
          <li className="border-b border-border-light py-5">
            <p className="font-medium text-ink">New business</p>
            <p className="mt-1 text-base leading-[1.65] text-secondary">
              No existing brand recognition, reviews or reputation.
            </p>
          </li>

          <li className="border-b border-border-light py-5">
            <p className="font-medium text-ink">Strong expertise</p>
            <p className="mt-1 text-base leading-[1.65] text-secondary">
              The founder had worked council side, investigating the same
              kinds of planning enforcement cases the consultancy would now
              advise on.
            </p>
          </li>

          <li className="border-b border-border-light py-5">
            <p className="font-medium text-ink">Broad audience</p>
            <p className="mt-1 text-base leading-[1.65] text-secondary">
              Homeowners, landowners and businesses, many with little prior
              understanding of planning enforcement.
            </p>
          </li>

          <li className="border-b border-border-light py-5">
            <p className="font-medium text-ink">Brand problem</p>
            <p className="mt-1 text-base leading-[1.65] text-secondary">
              An earlier A.P.E. direction introduced an animal association
              that risked making a serious advisory service feel gimmicky or
              aggressive.
            </p>
          </li>
        </ul>

        <p className="mt-8 font-display text-xl leading-snug text-ink md:text-2xl">
          Trust had to come from the founder&rsquo;s expertise, useful
          information and a professional identity.
        </p>
      </ScrollReveal>
    </div>

    {/* Research */}
    <div className="mt-28 md:mt-36">
      <ScrollReveal className="max-w-2xl">
        <SubHeading>Research</SubHeading>

        <p className="mt-6 text-base leading-[1.8] text-secondary md:text-[17px]">
          I looked at the market, what people were searching for, and what
          information they needed before choosing professional help.
        </p>

        <ul className="mt-7 grid gap-x-15 gap-y-3 text-md leading-relaxed text-secondary sm:grid-cols-2">
          <li>Planning enforcement competitors</li>
          <li>Wider planning consultancies</li>
          <li>Government planning guidance</li>
          <li>Search intent around notices and breaches</li>
          <li>Consumer research from legal services</li>
          <li>How complex public information is explained</li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={100} className="mt-16">
        <div className="border-b border-border-light">
          <div className="grid gap-4 border-t border-border-light py-8 md:grid-cols-[4rem_1fr] md:gap-10">
            <span className="font-display text-lg text-tertiary">01</span>

            <div className="max-w-xl">
              <h3 className="font-display text-xl text-ink md:text-2xl">
                People want information before making contact.
              </h3>

              <p className="mt-4 text-base leading-[1.7] text-secondary">
                85% of consumers in the SRA&rsquo;s research on legal services
                wanted more information before choosing a provider.
                <Cite n={1} />
              </p>

              <p className="mt-3 text-base leading-[1.7] text-ink">
                So I made the site useful before asking anyone to enquire.
              </p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-border-light py-8 md:grid-cols-[4rem_1fr] md:gap-10">
            <span className="font-display text-lg text-tertiary">02</span>

            <div className="max-w-xl">
              <h3 className="font-display text-xl text-ink md:text-2xl">
                Professional processes are not always easy to understand.
              </h3>

              <p className="mt-4 text-base leading-[1.7] text-secondary">
                SRA research found that legal and professional processes are
                not always clearly explained to the people using them.
                <Cite n={2} />
              </p>

              <p className="mt-3 text-base leading-[1.7] text-ink">
                So the site uses plain English and makes the next step clear.
              </p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-border-light py-8 md:grid-cols-[4rem_1fr] md:gap-10">
            <span className="font-display text-lg text-tertiary">03</span>

            <div className="max-w-xl">
              <h3 className="font-display text-xl text-ink md:text-2xl">
                Some deadlines are genuinely urgent.
              </h3>

              <p className="mt-4 text-base leading-[1.7] text-secondary">
                GOV.UK guidance sets a statutory 21-day window for responding
                to a Planning Contravention Notice.
                <Cite n={3} />
              </p>

              <p className="mt-3 text-base leading-[1.7] text-ink">
                So deadlines are shown clearly instead of manufacturing
                urgency through marketing.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120} className="mt-8 max-w-2xl">
        <details className="group border-b border-border-light pb-6">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm text-tertiary">
            Sources
            <span className="text-lg transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <ol className="mt-5 space-y-3">
            {SOURCES.map((source) => (
              <li
                key={source.n}
                className="grid grid-cols-[2rem_1fr] gap-2 text-xs leading-relaxed text-tertiary"
              >
                <span>{source.n}</span>
                <span>
                  {source.title}{' '}
                  <span className="text-tertiary/60">(link pending)</span>
                </span>
              </li>
            ))}
          </ol>
        </details>
      </ScrollReveal>
    </div>

    {/* Conclusion */}
    <ScrollReveal delay={140} className="mt-28 max-w-3xl md:mt-40">
      <p className="font-display text-3xl leading-[1.12] text-ink md:text-5xl">
        People did not need to understand planning enforcement. They needed
        to recognise their situation and know what to do next.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiary">
        <span>Recognition</span>
        <span aria-hidden>→</span>
        <span>Understanding</span>
        <span aria-hidden>→</span>
        <span>Action</span>
      </div>
    </ScrollReveal>
  </div>
</section>

        {/* 02 DEFINE */}
        <section
          data-nav-theme="dark"
          className="relative z-10 bg-[#10233F] px-6 py-28 md:py-40"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ChapterTitle number="02" inverse>
                Define
              </ChapterTitle>
            </ScrollReveal>

            <div className="mt-20 grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
              <ScrollReveal>
                <p className="font-display text-3xl leading-[1.12] text-bone md:text-4xl">
                  Specialist planning enforcement advice built around genuine
                  former council-side experience.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="space-y-7">
                  <Body inverse>
                    That expertise needed to make sense to someone who might
                    know almost nothing about planning enforcement. So the
                    direction came down to a few concrete decisions:
                  </Body>

                  <ul className="border-t border-bone/15">
                    {[
                      'Position the business as a specialist, not a generalist agency',
                      'Lead with genuine former council-side experience',
                      'Organise the site around situations people recognise, not service names',
                      'Use plain English throughout',
                      'Surface real deadlines clearly',
                      'Make contacting a real person straightforward',
                      'Build a distinctive identity without making the subject feel playful',
                      'Avoid looking indistinguishable from a traditional law firm',
                    ].map((item) => (
                      <li
                        key={item}
                        className="border-b border-bone/15 py-3 text-sm text-bone/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120} className="mt-24 max-w-2xl md:mt-32">
              <p className="text-base leading-[1.8] text-bone/70 md:text-[17px]">
                Because whoever landed on the site needed to answer three
                questions quickly:
              </p>

              <div className="mt-6 space-y-3 font-display text-xl text-bone md:text-2xl">
                <p>Do you understand my situation?</p>
                <p>Can I trust you?</p>
                <p>What should I do next?</p>
              </div>
            </ScrollReveal>

         
          </div>
        </section>

        {/* 03 CREATE */}
        <section
          data-nav-theme="light"
          className="relative z-10 bg-bone px-6 py-32 md:py-44"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <ChapterTitle number="03">Create</ChapterTitle>
            </ScrollReveal>

            {/* Structure */}
            <div className="mx-auto mt-20 max-w-4xl">
              <ScrollReveal className="max-w-2xl">
                <SubHeading>Structure</SubHeading>

                <p className="mt-6 text-base leading-[1.8] text-secondary md:text-[17px]">
                  I mapped the navigation and key journeys before styling
                  anything. The research showed people would often recognise
                  their situation before they knew which professional service
                  they needed, so the navigation had to solve that problem
                  first.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80} className="mt-12">
                <div className="grid gap-4 md:grid-cols-[1.35fr_1fr]">
                  <div className="flex items-center bg-bone-deep p-4 md:p-6">
                    <Image
                      src="/images/pea-sitemap.png"
                      alt="The Planning Enforcement Advisory navigation and sitemap planning"
                      width={5231}
                      height={1531}
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="overflow-hidden border border-border-light">
                    <Image
                      src="/images/pea-wireframes.png"
                      alt="Early low-fidelity Planning Enforcement Advisory wireframes"
                      width={744}
                      height={681}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Three directions */}
  <section
  data-nav-theme="light"
  className="relative z-10 bg-bone-deep px-6 py-28 md:py-40"
>
  <div className="mx-auto max-w-4xl">
    <ScrollReveal>
      <SubHeading>Three directions</SubHeading>
    </ScrollReveal>

    {/* Research + visual references */}
    <div className="mt-6 grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
      <ScrollReveal>
        <div className="max-w-2xl">
          <p className="text-base leading-[1.8] text-secondary md:text-[17px]">
            For influences I looked at professional services, legal brands,
            planning consultancies, editorial design, government and civic
            communication, and geometric identity systems. The goal was not
            to copy any of them, but to see how they balanced credibility,
            clarity, distinctiveness and accessibility.
          </p>

          <p className="mt-5 text-base leading-[1.8] text-secondary md:text-[17px]">
            From there I explored three substantially different directions,
            each testing a different balance between traditional professional
            authority and a more distinctive, approachable identity.
          </p>

          <p className="mt-5 text-base leading-[1.8] text-secondary md:text-[17px]">
            Rather than show three logos, I built each direction into a full
            landing page. This let the client judge typography, colour,
            hierarchy and tone in context, not in isolation.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <Image
          src="/images/pea-visual-research.png"
          alt="Reference research into professional, legal and editorial identities, and early wordmark tests"
          width={713}
          height={694}
          sizes="(max-width: 768px) 90vw, 340px"
          className="mx-auto h-auto w-full max-w-[340px] md:ml-auto md:mr-0"
        />
      </ScrollReveal>
    </div>

    {/* Three developed concepts */}
    <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-20">
      <ScrollReveal delay={40}>
        <Image
          src="/images/pea-concept-a.png"
          alt="Concept A: bold lime-forward direction"
          width={812}
          height={1458}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="h-auto w-full"
        />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <Image
          src="/images/pea-concept-b.png"
          alt="Concept B: calmer navy-led direction"
          width={816}
          height={1456}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="h-auto w-full"
        />
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <Image
          src="/images/pea-concept-c.png"
          alt="Concept C: more traditional institutional direction"
          width={810}
          height={1454}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="h-auto w-full"
        />
      </ScrollReveal>
    </div>

    {/* Concept comparison */}
    <ScrollReveal delay={140} className="mt-10">
      <div className="grid gap-6 border-y border-border-light py-8 md:grid-cols-3 md:gap-10 md:py-10">
        <p className="text-sm leading-[1.7] text-secondary md:text-base">
          <span className="font-medium text-ink">01</span>
          <br />
          A brighter, more distinctive lime-led identity.
        </p>

        <p className="text-sm leading-[1.7] text-secondary md:text-base">
          <span className="font-medium text-ink">02</span>
          <br />
          A calmer, more structured professional direction.
        </p>

        <p className="text-sm leading-[1.7] text-secondary md:text-base">
          <span className="font-medium text-ink">03</span>
          <br />
          A more traditional institutional direction. Credible, but too
          distant for the service.
        </p>
      </div>
    </ScrollReveal>

    {/* Client decision */}
    <ScrollReveal delay={160} className="mt-14 max-w-2xl md:mt-16">
      <p className="font-display text-xl leading-[1.35] text-ink md:text-2xl">
        The client chose direction two.
      </p>

      <p className="mt-4 text-base leading-[1.8] text-secondary md:text-[17px]">
        I asked what specifically was working for him rather than treating the
        whole concept as finished. His feedback became the starting point for
        the next round of refinement.
      </p>
    </ScrollReveal>
  </div>
</section>

        {/* Refinement */}
       <section
  data-nav-theme="light"
  className="relative z-10 bg-bone px-6 py-28 md:py-40"
>
  <div className="mx-auto max-w-4xl">
    <ScrollReveal>
      <SubHeading>Refinement</SubHeading>
    </ScrollReveal>

    {/* Refinement thinking + communication research */}
    <div className="mt-6 grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
      <ScrollReveal>
        <div className="max-w-2xl">
          <p className="text-base leading-[1.8] text-secondary md:text-[17px]">
            The chosen direction needed to feel professional and distinctive,
            but planning enforcement pages carry a lot of unfamiliar
            information. It would have been easy to make the design look
            impressive and harder to actually use.
          </p>

          <p className="mt-5 text-base leading-[1.8] text-secondary md:text-[17px]">
            So as the direction developed, I looked more closely at GOV.UK and
            Citizens Advice. Not for their visual style, but for how they make
            complicated information easier to navigate. The challenge became
            keeping enough detail to be genuinely useful without the site
            feeling dense or bureaucratic.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <Image
          src="/images/pea-communication-research.png"
          alt="Research into how GOV.UK and Citizens Advice communicate complex information clearly"
          width={628}
          height={563}
          sizes="(max-width: 768px) 90vw, 340px"
          className="mx-auto h-auto w-full max-w-[340px] md:ml-auto md:mr-0"
        />
      </ScrollReveal>
    </div>

    {/* What changed */}
    <ScrollReveal delay={60} className="mt-14 max-w-2xl md:mt-20">
      <Body>
        In practice that meant a clearer hierarchy, more direct headings,
        shorter explanations and a more obvious next step on every page, with
        colour used more sparingly around serious guidance rather than
        decoratively.
      </Body>
    </ScrollReveal>

    {/* Refinement progression */}
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <ScrollReveal delay={40}>
        <div
          style={{ border: '1px solid rgba(16,35,63,0.1)' }}
          className="overflow-hidden"
        >
          <Image
            src="/images/pea-concept-b-dev1.png"
            alt="Selected identity direction, early refinement"
            width={818}
            height={1462}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-auto w-full scale-[1.015]"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div
          style={{ border: '1px solid rgba(16,35,63,0.1)' }}
          className="overflow-hidden"
        >
          <Image
            src="/images/pea-concept-b-dev2.png"
            alt="Selected identity direction, further refinement"
            width={812}
            height={1458}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-auto w-full"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div
          style={{ border: '1px solid rgba(16,35,63,0.1)' }}
          className="overflow-hidden"
        >
          <Image
            src="/images/pea-concept-b-dev3.png"
            alt="Selected identity direction close to final form"
            width={822}
            height={1462}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-auto w-full scale-[1.015]"
          />
        </div>
      </ScrollReveal>
    </div>

    {/* Mark refinement */}
    <div className="mt-16 grid items-center gap-10 md:mt-24 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
      <ScrollReveal delay={140}>
        <div className="max-w-xl">
          <p className="text-base leading-[1.8] text-secondary md:text-[17px]">
            Alongside the interface, I tightened the mark through tests of
            proportion, negative space, colour and construction.
          </p>

          <p className="mt-5 text-base leading-[1.8] text-secondary md:text-[17px]">
            The finished system pairs bold typography with a restrained cream
            and charcoal foundation. Lime carries visibility, while blue and
            yellow act as supporting signals. The geometric mark stays precise
            and memorable without relying on obvious planning or legal
            imagery.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <Image
          src="/images/pea-identity-development.png"
          alt="Working Figma board showing development of the Planning Enforcement Advisory mark"
          width={686}
          height={539}
          sizes="(max-width: 768px) 70vw, 300px"
          className="mx-auto h-auto w-full max-w-[300px] md:ml-auto md:mr-0"
        />
      </ScrollReveal>
    </div>
  </div>
</section>

       
        {/* 04 BUILD */}
        <section
          data-nav-theme="light"
          className="relative z-10 bg-bone-deep px-6 py-32 md:py-44"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ChapterTitle number="04">Build</ChapterTitle>
            </ScrollReveal>

            <ScrollReveal delay={60} className="mt-20 max-w-3xl">
              <p className="font-display text-3xl leading-[1.12] text-ink md:text-5xl">
                This is what those decisions became.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80} className="mt-10 max-w-2xl space-y-5">
              <Body>
                A mobile-first site with situation-led navigation,
                notice-specific service pages, plain-English explanations,
                clear deadline guidance, numbered next steps and a direct
                route to contact me. The founder&rsquo;s council-side
                background is referenced throughout rather than tucked away
                on an About page.
              </Body>

              <Body>
                People said they wanted useful information before choosing
                help, so service pages answer the immediate question before
                pushing anyone towards contact. Professional processes are
                not always clearly explained, so complex processes are
                broken into plain English with numbered next steps.
              </Body>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
              <ScrollReveal>
                <p className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                  Most people do not know which service they need.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <Body>
                  People often recognise their situation before they know
                  which service they need, so the site&rsquo;s main routes
                  start with a situation, not a service name.
                </Body>

                <ul className="mt-8 border-t border-border-light">
                  {[
                    'Received a council notice',
                    'Work already carried out',
                    'Planning some work',
                    'Report a planning breach',
                    'I’m not sure what I need',
                  ].map((item) => (
                    <li
                      key={item}
                      className="border-b border-border-light py-3 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={100} className="mx-auto mt-20 max-w-6xl">
            <Image
              src="/images/pea-situation-mockups.png"
              alt="The Planning Enforcement Advisory on device: the notice explainer, situation router, PCN steps and site navigation"
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </ScrollReveal>
        </section>

        <section
          data-nav-theme="light"
          className="relative z-10 bg-bone px-6 py-28 md:py-40"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal className="max-w-2xl">
              <SubHeading>Urgency without alarm</SubHeading>

              <p className="mt-6 text-base leading-[1.8] text-secondary md:text-[17px]">
                Planning enforcement can involve genuine statutory deadlines,
                so the interface surfaces them directly instead of
                manufacturing urgency through conversion copy. The same
                21-day PCN window from the research
                <Cite n={3} /> becomes practical guidance rather than a
                countdown timer.
              </p>
            </ScrollReveal>
          </div>
        </section>
<section
  data-nav-theme="light"
  className="relative z-10 bg-bone px-6 pb-44 md:pb-56"
>
  <div className="mx-auto max-w-4xl">
    <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-16">
      {/* Tall image */}
      <ScrollReveal>
        <Image
          src="/images/pea-her0-mockup-2.png"
          alt="The Planning Enforcement Advisory homepage, finished on device"
          width={1024}
          height={1536}
          sizes="(max-width: 768px) 100vw, 55vw"
          className="h-auto w-full"
        />
      </ScrollReveal>

      {/* Text + supporting image */}
      <div className="flex flex-col">
        <ScrollReveal delay={80}>
          <SubHeading>Designed from the smallest screen up</SubHeading>

          <p className="mt-6 text-base leading-[1.8] text-secondary md:text-[17px]">
            The core journeys were designed mobile first, with clear touch
            targets, readable guidance and direct routes to human contact.
            Desktop expands the system rather than defining it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-10">
          <div style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
            <Image
              src="/images/pea-what-is-pnc-mockup.png"
              alt="The Planning Enforcement Advisory notice explainer: what is a Planning Contravention Notice, on device"
              width={1023}
              height={970}
              sizes="(max-width: 768px) 100vw, 340px"
              className="h-auto w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </div>
</section>

        {/* 05 EVOLVE */}
        <section
          data-nav-theme="dark"
          className="relative z-10 bg-[#10233F] px-6 py-28 md:py-40"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <ChapterTitle number="05" inverse>
                Evolve
              </ChapterTitle>
            </ScrollReveal>

            <div className="mt-20 grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-24">
              <ScrollReveal>
                <p className="font-display text-3xl leading-[1.12] text-bone md:text-4xl">
                  Launch is the start of the next stage.
                </p>

                <p className="mt-7 max-w-xl text-base leading-[1.8] text-bone/65 md:text-[17px]">
                  The business is new, so there are no invented success
                  metrics here. The platform was built to evolve through real
                  search behaviour, enquiry data, Search Console performance
                  and genuine case studies as the consultancy grows.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="border-t border-bone/15">
                  <li className="border-b border-bone/15 py-4 text-sm text-bone">
                    Search-led resource expansion
                  </li>
                  <li className="border-b border-bone/15 py-4 text-sm text-bone">
                    Illustrative scenarios replaced by genuine client cases
                  </li>
                  <li className="border-b border-bone/15 py-4 text-sm text-bone">
                    Conversion refinement from real behaviour
                  </li>
                </ul>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120} className="mt-20 max-w-2xl">
              <p className="text-xs leading-[1.8] text-bone/40">
                Built with Next.js and Sanity, deployed on Vercel, with
                Cal.com for bookings, Resend for email and reCAPTCHA for form
                protection. Google Analytics and Search Console configured
                ahead of launch.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ENDING */}
        <section
          data-nav-theme="light"
          className="relative z-10 bg-bone px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="mb-4 text-sm text-secondary">
                Launching September 2026
              </p>

              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-medium text-ink underline decoration-2 underline-offset-4 transition-colors hover:text-terracotta md:text-xl"
                style={{ textDecorationColor: '#C1613D' }}
              >
                Preview The Planning Enforcement Advisory

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 11L11 3M11 3H4M11 3V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>

        <NextProject
          client="Building Ventilation Services"
          href="/case-studies/building-ventilation-services-ltd"
        />

        <CTABanner />
      </main>

      <Footer />
    </>
  )
}