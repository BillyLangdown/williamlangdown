import ScrollReveal from '@/components/ScrollReveal'
import ClipReveal from '@/components/ClipReveal'

export default function AboutSection() {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border-light" />

        <ClipReveal className="pt-16 mb-10">
          <h2 className="text-7xl md:text-[7rem] font-heading font-bold leading-none tracking-tight text-ink">
            About <em className="italic text-accent">me.</em>
          </h2>
        </ClipReveal>

        <ScrollReveal className="pb-24 flex flex-col gap-5 max-w-2xl">
          <p className="text-base text-secondary leading-[1.8]">
            Hi, I&apos;m William. I&apos;m a web designer and developer based in Taunton,
            Somerset, working with businesses across the South West and beyond.
          </p>
          <p className="text-base text-secondary leading-[1.8]">
            I handle every project myself, from the first message to the finished site,
            so you&apos;re always dealing directly with the person doing the work. I have
            a background in branding and development, and I take the time to understand
            who your customers are before I design anything.
          </p>
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
    </section>
  )
}
