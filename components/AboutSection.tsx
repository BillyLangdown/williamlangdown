import Image from 'next/image'
import illustration from '../public/images/illustrated-portrait.jpeg'
import ScrollReveal from '@/components/ScrollReveal'
import ClipReveal from '@/components/ClipReveal'

export default function AboutSection() {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border-light" />

        <ClipReveal className="pt-16 mb-14">
          <h2 className="text-7xl md:text-[7rem] font-heading font-bold leading-none tracking-tight text-ink">
            About <em className="italic text-accent">me.</em>
          </h2>
        </ClipReveal>

        <div className="pb-24 flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Abstract illustration */}
          <ScrollReveal className="flex-shrink-0 w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-subtle rounded-lg" />
              <Image
                src={illustration}
                alt="William Langdown, illustrated portrait"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative rounded-lg object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal delay={150} className="flex flex-col gap-8 max-w-xl md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink">
              Design, Technology, and Human Behaviour
            </h3>
            <div className="flex flex-col gap-5">
              <p className="text-base text-secondary leading-[1.8]">
                I&apos;m a web designer and developer based in Taunton, Somerset, working
                with businesses from Bristol to Exeter. I have a degree in branding and
                years of front-end development experience, so I can take a project from
                strategy through to a live, working website.
              </p>
              <p className="text-base text-secondary leading-[1.8]">
                I&apos;ve spent a long time studying how people behave online and what
                actually makes them trust a business enough to buy from it or get in
                touch. I put real thought into your target audience before I design
                anything, so the site fits the people you&apos;re trying to reach.
              </p>
              <p className="text-base text-secondary leading-[1.8]">
                Alongside websites, I build apps and help businesses get started with AI,
                through consulting and training. I work solo, so you deal with me directly
                from the first message to the finished site, not an account manager or a
                rotating team.
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
