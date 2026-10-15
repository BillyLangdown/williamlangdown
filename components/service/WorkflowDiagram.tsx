// A restrained flow diagram in the site's grid-and-node language. Plain HTML,
// so it is crawlable, prints well and needs no client JavaScript.
export interface FlowStep {
  label: string
  note?: string
  human?: boolean
}

export default function WorkflowDiagram({
  steps,
  failure,
  caption,
}: {
  steps: FlowStep[]
  failure?: string
  caption?: string
}) {
  return (
    <figure className="border-t-2 border-ink pt-8">
      <ol className="relative grid grid-cols-1 gap-0 md:grid-flow-col md:auto-cols-fr md:gap-8">
        {steps.map((step, i) => (
          <li key={step.label} className="relative pb-8 pl-10 last:pb-0 md:pb-0 md:pl-0 md:pt-10">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 block h-4 w-4 md:top-0 ${step.human ? 'bg-terracotta' : 'bg-ink'}`}
            />
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-6 h-full w-px bg-ink/25 md:left-6 md:top-[7px] md:h-px md:w-[calc(100%+2rem-1.5rem)]"
              />
            )}
            <p className="font-display text-lg leading-snug text-ink md:text-xl">{step.label}</p>
            {step.note && <p className="mt-1.5 text-sm leading-relaxed text-secondary">{step.note}</p>}
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-4 border-t border-border-light pt-5 text-sm text-secondary md:flex-row md:items-start md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Key">
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="block h-2.5 w-2.5 bg-ink" /> Automatic
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="block h-2.5 w-2.5 bg-terracotta" /> Done by a person
          </li>
        </ul>
        {failure && (
          <p className="max-w-md leading-relaxed">
            <span className="font-semibold text-ink">If a step fails: </span>
            {failure}
          </p>
        )}
      </div>
      {caption && <figcaption className="mt-5 max-w-xl text-xs leading-relaxed text-tertiary">{caption}</figcaption>}
    </figure>
  )
}
