/**
 * Opening credits block: title, descriptor, disciplines and year, set
 * as running meta rather than a stats grid. Shared shape for any future
 * bespoke case study, not just this one.
 */
export default function ProjectMeta({
  title,
  descriptor,
  disciplines,
  year,
}: {
  title: string
  descriptor: string
  disciplines: string[]
  year: string
}) {
  return (
    <div>
      <h1 className="font-display text-4xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
        {title}
      </h1>

      <p className="mt-4 text-base text-secondary md:text-lg">{descriptor}</p>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border-light pt-6 text-xs uppercase tracking-widest text-tertiary">
        {disciplines.map((d, i) => (
          <span key={d} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden className="text-border-light">/</span>}
            {d}
          </span>
        ))}
        <span aria-hidden className="text-border-light">/</span>
        <span>{year}</span>
      </div>
    </div>
  )
}
