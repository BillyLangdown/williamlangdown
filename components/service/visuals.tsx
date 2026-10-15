// Small illustrative visuals for the service pages. Each is deliberately
// simple, labelled as an illustration where it appears, and built in plain
// HTML/SVG so it renders on the server and stays crawlable.

const INK = '#10233F'
const TERRA = '#C1613D'

/** Four applications exchanging data through one checked connection. */
export function IntegrationMap() {
  const apps = [
    { label: 'Website form', x: 20, y: 20 },
    { label: 'CRM', x: 440, y: 20 },
    { label: 'Accounting', x: 20, y: 240 },
    { label: 'Spreadsheet', x: 440, y: 240 },
  ]
  return (
    <figure>
      <svg viewBox="0 0 600 320" role="img" aria-label="Four applications connected through a single integration that checks and matches records" className="h-auto w-full">
        {/* connections */}
        {apps.map((a) => (
          <line
            key={a.label}
            x1={a.x + 70}
            y1={a.y + 25}
            x2={300}
            y2={160}
            stroke={INK}
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
        ))}
        {/* applications */}
        {apps.map((a) => (
          <g key={a.label}>
            <rect x={a.x} y={a.y} width="140" height="50" fill="#F6F3EE" stroke={INK} strokeWidth="1.5" />
            <text x={a.x + 70} y={a.y + 30} textAnchor="middle" fontSize="15" fill={INK} fontFamily="var(--font-jakarta), sans-serif" fontWeight="600">
              {a.label}
            </text>
          </g>
        ))}
        {/* integration */}
        <rect x="215" y="125" width="170" height="70" fill={INK} />
        <rect x="215" y="125" width="4" height="70" fill={TERRA} />
        <text x="300" y="152" textAnchor="middle" fontSize="16" fill="#F6F3EE" fontFamily="var(--font-fraunces), Georgia, serif">
          Your integration
        </text>
        <text x="300" y="175" textAnchor="middle" fontSize="12" fill="#F6F3EE" fillOpacity="0.7" fontFamily="var(--font-jakarta), sans-serif">
          checks, matches, retries
        </text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-tertiary">
        Illustrative example. The applications shown are typical categories, not a client project.
      </figcaption>
    </figure>
  )
}

/** What happens to one record, vertically, including the failure path. */
export function RecordTimeline({
  steps,
  failure,
}: {
  steps: { title: string; body: string }[]
  failure: string
}) {
  return (
    <ol className="relative space-y-7 border-l border-bone/25 pl-8">
      {steps.map((s) => (
        <li key={s.title} className="relative">
          <span aria-hidden="true" className="absolute -left-[39px] top-1 block h-3 w-3 bg-bone" />
          <p className="text-base font-semibold text-bone">{s.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-bone/65">{s.body}</p>
        </li>
      ))}
      <li className="relative">
        <span aria-hidden="true" className="absolute -left-[39px] top-1 block h-3 w-3 bg-terracotta" />
        <p className="text-base font-semibold text-bone">If something is rejected</p>
        <p className="mt-1 text-sm leading-relaxed text-bone/65">{failure}</p>
      </li>
    </ol>
  )
}

/** Three columns: which tool fits which step. Distinguished by the top rule, not by cards. */
export function AiLanes() {
  const lanes = [
    {
      title: 'Plain rules',
      tone: INK,
      lead: 'Predictable work with a known answer.',
      items: [
        'Matching an invoice number to an order',
        'Calculating a quote from a price list',
        'Copying a form field into the CRM',
        'Sending a reminder after an agreed delay',
      ],
    },
    {
      title: 'AI drafts, a person approves',
      tone: TERRA,
      lead: 'Reading and writing, where a quick check is enough.',
      items: [
        'Summarising a long enquiry',
        'Suggesting a category or urgency',
        'Drafting a reply from your own information',
        'Pulling fields out of a supplier PDF',
      ],
    },
    {
      title: 'A person decides',
      tone: '#8C887D',
      lead: 'Judgement, or mistakes that are costly.',
      items: [
        'Refunds, contract terms and pricing exceptions',
        'Complaints and sensitive messages',
        'Anything hard to check after the fact',
      ],
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
      {lanes.map((l) => (
        <div key={l.title} className="border-t-[3px] pt-5" style={{ borderColor: l.tone }}>
          <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">{l.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-secondary">{l.lead}</p>
          <ul className="mt-5 space-y-2.5 text-sm leading-snug text-ink">
            {l.items.map((i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.4em] block h-1.5 w-1.5 shrink-0" style={{ background: l.tone }} />
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/** A made-up message turned into a structured record awaiting approval. */
export function ExtractionPanel() {
  const fields = [
    ['Type', 'Sales enquiry'],
    ['Contact', 'Sam, joinery firm'],
    ['Needs', 'Enquiries gathered in one place'],
    ['Timing', 'A call before Friday'],
    ['Suggested owner', 'William'],
  ]
  return (
    <figure>
      <div className="grid grid-cols-1 border border-ink/20 md:grid-cols-2">
        <div className="bg-white/60 p-5 md:p-7">
          <p className="text-xs font-semibold text-tertiary">Message received</p>
          <p className="mt-3 font-display text-lg leading-[1.45] text-ink">
            Hi, we run a small joinery firm and our enquiries are scattered across email, the website
            and the phone. Could someone call me before Friday about getting them into one place?
            Thanks, Sam
          </p>
        </div>
        <div className="border-t border-ink/20 bg-navy p-5 md:border-l md:border-t-0 md:p-7">
          <p className="text-xs font-semibold text-bone/60">Record prepared</p>
          <dl className="mt-3 space-y-2.5">
            {fields.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 text-sm">
                <dt className="text-bone/55">{k}</dt>
                <dd className="text-bone">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 flex items-center gap-2 text-sm text-bone">
            <span aria-hidden="true" className="block h-2.5 w-2.5 bg-terracotta" />
            Draft reply ready. Awaiting approval.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-tertiary">
        Illustrative example with an invented message. The person approves or edits the draft before anything is sent.
      </figcaption>
    </figure>
  )
}

/** A spreadsheet that has outgrown its job beside a simple purpose-built screen. */
export function SpreadsheetToTool() {
  const cell = 'h-6 border border-ink/15 bg-white/50'
  return (
    <figure>
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div aria-hidden="true">
          <p className="mb-2 text-xs font-semibold text-tertiary">Today</p>
          <div className="grid grid-cols-5 gap-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className={`${cell} ${i === 7 ? 'bg-terracotta/25' : ''} ${i % 5 === 0 ? 'bg-subtle' : ''}`} />
            ))}
          </div>
          <p className="mt-2 text-xs text-secondary">Several people editing one file</p>
        </div>
        <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true" className="mx-auto rotate-90 md:rotate-0">
          <path d="M1 7h26M21 1l6 6-6 6" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div aria-hidden="true">
          <p className="mb-2 text-xs font-semibold text-tertiary">A focused tool</p>
          <div className="border border-ink/20 bg-white/70">
            <div className="flex items-center justify-between border-b border-ink/15 px-3 py-2 text-xs text-ink">
              <span className="font-semibold">Jobs</span>
              <span className="bg-ink px-2 py-0.5 text-[10px] text-bone">New job</span>
            </div>
            {[
              ['Job 1042', 'Awaiting approval', TERRA],
              ['Job 1041', 'In progress', INK],
              ['Job 1040', 'Complete', '#8C887D'],
            ].map(([a, b, c]) => (
              <div key={a} className="flex items-center justify-between border-b border-ink/10 px-3 py-2 text-xs last:border-b-0">
                <span className="text-ink">{a}</span>
                <span className="flex items-center gap-1.5 text-secondary">
                  <span className="block h-1.5 w-1.5" style={{ background: c }} />
                  {b}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-secondary">One place, clear status, the right access</p>
        </div>
      </div>
      <figcaption className="mt-4 text-xs leading-relaxed text-tertiary">
        Illustrative sketch, not a client project.
      </figcaption>
    </figure>
  )
}
