import Image from 'next/image'
import illustration from '../public/images/illustration.png'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutSection() {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border-light" />

        <div className="py-24 flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Image with warm offset depth block */}
          <ScrollReveal className="flex-shrink-0 w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-subtle rounded-lg" />
              <Image
                src={illustration}
                alt="Profile picture"
                width={500}
                height={500}
                className="relative rounded-lg object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal delay={150} className="flex flex-col gap-8 max-w-xl md:w-1/2">
            <div>
              <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-6">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink">
                Design, Technology, and Human Behaviour
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base text-secondary leading-[1.8]">
                I&apos;m a UX designer and web consultant with a background in advertising
                and front-end development. That combination - creative strategy, customer
                psychology, and the ability to build - means I can take a problem from
                insight all the way through to a live website.
              </p>
              <p className="text-base text-secondary leading-[1.8]">
                I&apos;ve spent years studying how people behave online and what makes
                them trust, or not trust, a brand. I apply that understanding to every
                project I take on, whether it&apos;s a quick audit or a full redesign and
                build.
              </p>
              <p className="text-base text-secondary leading-[1.8]">
                I work with small and medium-sized online businesses who know their
                product or service is good but feel like their website isn&apos;t doing it
                justice.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/william-l-263072142/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors w-fit"
            >
              LinkedIn →
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
