'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { upload } from '@vercel/blob/client'
import { submitStarterOrder } from '@/app/actions/starter-order'

/* ── Data ────────────────────────────────────────────────────────────── */

const VARIANTS = [
  { id: 'preview-1', name: 'Forge', style: 'Bold & modern', bg: '#0A0A0A', accent: '#FF5A1F', text: '#FFFFFF' },
  { id: 'preview-2', name: 'Willow', style: 'Warm & personal', bg: '#FBF6EF', accent: '#C97B5A', text: '#3A322A' },
  { id: 'preview-3', name: 'Hartley', style: 'Minimal & professional', bg: '#FFFFFF', accent: '#D9B96C', text: '#1C2333' },
  { id: 'preview-4', name: 'Ochre', style: 'Image-led & gallery-style', bg: '#FAFAF8', accent: '#A8683D', text: '#1C1B19' },
  { id: 'preview-5', name: 'Axium', style: 'Tech & interactive', bg: '#05060A', accent: '#22D3EE', text: '#FFFFFF' },
]

// What each template's home page actually needs, beyond the basics every
// site has. Drives which optional steps appear, so a client picking Ochre
// (no stats/services/reviews section) never sees fields for content their
// site doesn't have anywhere to show.
type OfferingsSpec = { label: string; itemLabel: string; hint: string }
type TemplateContent = {
  offerings: OfferingsSpec | false
  stats: boolean
  reviews: 'none' | 'single' | 'multi'
  values: boolean
}

const TEMPLATE_CONTENT: Record<string, TemplateContent> = {
  'preview-1': {
    offerings: { label: 'Classes or sessions', itemLabel: 'Class', hint: 'What you run and when.' },
    stats: true,
    reviews: 'multi',
    values: false,
  },
  'preview-2': {
    offerings: { label: 'What you offer', itemLabel: 'Offering', hint: 'The main things you sell or do.' },
    stats: true,
    reviews: 'multi',
    values: false,
  },
  'preview-3': {
    offerings: { label: 'Services', itemLabel: 'Service', hint: 'What you help clients with.' },
    stats: true,
    reviews: 'single',
    values: true,
  },
  'preview-4': {
    offerings: false,
    stats: false,
    reviews: 'none',
    values: false,
  },
  'preview-5': {
    offerings: { label: 'Features', itemLabel: 'Feature', hint: 'What your product does.' },
    stats: true,
    reviews: 'multi',
    values: true,
  },
}

type TextFieldDef = {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea'
  required?: boolean
  placeholder?: string
  hint?: string
}

type SimpleItem = { a: string; b: string }
type ReviewItem = { name: string; meta: string; quote: string }

const MAX_PHOTOS = 6
const MAX_FILE_MB = 15
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024

type StepDef = {
  id: string
  heading: string
  subheading: string
  fields?: TextFieldDef[]
}

const WELCOME_STEP: StepDef = {
  id: 'welcome',
  heading: "Let's get your order started",
  subheading: 'Just your name and email so I know who this is from.',
  fields: [
    { id: 'clientName', label: 'Your name', type: 'text', required: true, placeholder: 'Jane Smith' },
    { id: 'clientEmail', label: 'Your email', type: 'email', required: true, placeholder: 'your@email.co.uk' },
    { id: 'businessName', label: 'Business name', type: 'text', required: true, placeholder: 'Your business name' },
  ],
}

const DESIGN_STEP: StepDef = {
  id: 'design',
  heading: 'Pick your design',
  subheading: "Haven't browsed them yet? Open each in a new tab from the Starter page first.",
}

const ABOUT_YOU_STEP: StepDef = {
  id: 'about-you',
  heading: 'About your business',
  subheading: "Just the facts, not finished copy, I'll write the actual page from what you tell me here.",
  fields: [
    { id: 'whatYouDo', label: 'What do you do, in one line?', type: 'text', required: true, placeholder: 'e.g. Personal training and small-group fitness classes' },
    { id: 'whoFor', label: "Who's it for?", type: 'text', placeholder: 'e.g. Busy professionals who want proper coaching' },
    { id: 'story', label: 'Your story', type: 'textarea', required: true, hint: 'A few sentences: when you started, why, what makes it personal.', placeholder: "Tell me the short version, I'll turn it into your About page" },
    { id: 'address', label: 'Business address', type: 'text', placeholder: 'Optional, leave blank if not needed' },
    { id: 'phone', label: 'Phone number', type: 'text', placeholder: 'Optional' },
    { id: 'hours', label: 'Opening hours or availability', type: 'text', placeholder: 'Optional, e.g. Mon-Fri 9-5, or by appointment' },
    { id: 'contactEmail', label: 'Contact email to show on site', type: 'email', required: true, placeholder: 'hello@yourbusiness.co.uk' },
  ],
}

const SOCIAL_STEP: StepDef = {
  id: 'social',
  heading: 'Any social media?',
  subheading: "So I can pull photos, tone of voice, and any real reviews from what you've already posted. All optional.",
  fields: [
    { id: 'instagram', label: 'Instagram', type: 'text', placeholder: '@yourbusiness or a link' },
    { id: 'facebook', label: 'Facebook', type: 'text', placeholder: 'A link to your page' },
    { id: 'otherLinks', label: 'Anything else', type: 'textarea', placeholder: 'Google Business Profile, TikTok, LinkedIn, anywhere else' },
  ],
}

const ANYTHING_ELSE_STEP: StepDef = {
  id: 'anything-else',
  heading: 'Anything else?',
  subheading: "Want an extra page, a different contact form, a booking system, or anything else? Ask here, it's easier to sort out now than after the site's built.",
  fields: [
    { id: 'anythingElse', label: 'Anything you want to ask or add', type: 'textarea', placeholder: 'Optional, leave blank if not' },
  ],
}

const ASSETS_STEP: StepDef = {
  id: 'assets',
  heading: 'Logo & photos',
  subheading: 'One logo file, and 3-6 photos if you have them. Both optional, I can work without them, just slower to get started. Filling this in on your phone? Straight from your camera roll works fine.',
}

function getSteps(variant: string): StepDef[] {
  const content = TEMPLATE_CONTENT[variant]
  const steps: StepDef[] = [WELCOME_STEP, DESIGN_STEP, ABOUT_YOU_STEP]

  if (content?.offerings) {
    steps.push({
      id: 'offerings',
      heading: content.offerings.label,
      subheading: `${content.offerings.hint} Optional, add as many as apply.`,
    })
  }
  if (content?.stats) {
    steps.push({
      id: 'stats',
      heading: 'A few numbers',
      subheading: "Three quick stats for your homepage. Optional, skip it and I'll suggest something.",
    })
  }
  if (content && content.reviews !== 'none') {
    steps.push({
      id: 'reviews',
      heading: 'Reviews',
      subheading: "Real reviews only, paste them in if you have them (Google, Facebook, anywhere). Don't have any yet? Skip this.",
    })
  }
  if (content?.values) {
    steps.push({
      id: 'values',
      heading: 'What makes you different',
      subheading: 'A few short things that set you apart. Optional.',
    })
  }

  steps.push(SOCIAL_STEP, ANYTHING_ELSE_STEP, ASSETS_STEP)
  return steps
}

/* ── Shared field ────────────────────────────────────────────────────── */

function TextField({ field, value, onChange }: { field: TextFieldDef; value: string; onChange: (v: string) => void }) {
  const base =
    'w-full border border-border-light bg-white/80 px-4 py-3 text-base md:text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-150 rounded-sm'

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-semibold uppercase tracking-wider text-secondary">
        {field.label}
        {field.required && <span className="ml-1 text-accent">*</span>}
      </label>
      {field.hint && <p className="text-[11px] text-tertiary leading-relaxed">{field.hint}</p>}
      {field.type === 'textarea' ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={field.placeholder} rows={3} className={`${base} resize-none`} />
      ) : (
        <input type={field.type} value={value} onChange={e => onChange(e.target.value)} placeholder={field.placeholder} className={`${base} h-11`} />
      )}
    </div>
  )
}

/* ── Repeaters ───────────────────────────────────────────────────────── */

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Remove" className="absolute top-3 right-3 text-tertiary hover:text-rose-500 transition-colors">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-ink transition-colors">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {label}
    </button>
  )
}

function SimpleRepeater({
  items, onChange, max, labelA, labelB, placeholderA, placeholderB, addLabel,
}: {
  items: SimpleItem[]
  onChange: (items: SimpleItem[]) => void
  max: number
  labelA: string
  labelB: string
  placeholderA?: string
  placeholderB?: string
  addLabel: string
}) {
  function update(i: number, key: 'a' | 'b', value: string) {
    const next = items.slice()
    next[i] = { ...next[i], [key]: value }
    onChange(next)
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="relative flex flex-col gap-4 border border-border-light rounded-sm p-4">
          <RemoveButton onClick={() => onChange(items.filter((_, idx) => idx !== i))} />
          <TextField field={{ id: 'a', label: labelA, type: 'text', placeholder: placeholderA }} value={item.a} onChange={v => update(i, 'a', v)} />
          <TextField field={{ id: 'b', label: labelB, type: 'text', placeholder: placeholderB }} value={item.b} onChange={v => update(i, 'b', v)} />
        </div>
      ))}
      {items.length < max && <AddButton label={addLabel} onClick={() => onChange([...items, { a: '', b: '' }])} />}
    </div>
  )
}

function ReviewRepeater({ items, onChange, max }: { items: ReviewItem[]; onChange: (items: ReviewItem[]) => void; max: number }) {
  function update(i: number, key: keyof ReviewItem, value: string) {
    const next = items.slice()
    next[i] = { ...next[i], [key]: value }
    onChange(next)
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="relative flex flex-col gap-4 border border-border-light rounded-sm p-4">
          <RemoveButton onClick={() => onChange(items.filter((_, idx) => idx !== i))} />
          <TextField field={{ id: 'name', label: 'Their name', type: 'text', placeholder: 'e.g. Sam Ellis' }} value={item.name} onChange={v => update(i, 'name', v)} />
          <TextField field={{ id: 'meta', label: 'Optional detail', type: 'text', placeholder: 'e.g. Member since 2022' }} value={item.meta} onChange={v => update(i, 'meta', v)} />
          <TextField field={{ id: 'quote', label: 'What they said', type: 'textarea', placeholder: 'Paste their review here' }} value={item.quote} onChange={v => update(i, 'quote', v)} />
        </div>
      ))}
      {items.length < max && <AddButton label="Add a review" onClick={() => onChange([...items, { name: '', meta: '', quote: '' }])} />}
    </div>
  )
}

/* ── Main ────────────────────────────────────────────────────────────── */

export default function OrderForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [variant, setVariant] = useState('')
  const [colourNote, setColourNote] = useState('')
  const [offerings, setOfferings] = useState<SimpleItem[]>([])
  const [stats, setStats] = useState<SimpleItem[]>([])
  const [reviews, setReviews] = useState<ReviewItem[]>([])
  const [values, setValues] = useState<SimpleItem[]>([])
  const [logo, setLogo] = useState<File | null>(null)
  const [photos, setPhotos] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitStage, setSubmitStage] = useState<'idle' | 'uploading' | 'sending'>('idle')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const topRef = useRef<HTMLDivElement>(null)

  const STEPS = getSteps(variant)
  const section = STEPS[step] ?? STEPS[STEPS.length - 1]
  const isLast = step === STEPS.length - 1
  const content = TEMPLATE_CONTENT[variant]

  function scrollTop() {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function setAnswer(id: string, val: string) {
    setAnswers(prev => ({ ...prev, [id]: val }))
  }

  function canAdvance() {
    if (section.id === 'welcome') {
      return !!(answers.clientName?.trim() && answers.clientEmail?.trim() && answers.businessName?.trim())
    }
    if (section.id === 'design') {
      return !!variant
    }
    if (section.id === 'about-you') {
      return !!(answers.whatYouDo?.trim() && answers.story?.trim() && answers.contactEmail?.trim())
    }
    // Offerings, stats, reviews, values, social, and assets are all optional.
    return true
  }

  function goNext() {
    if (!canAdvance()) return
    setStep(s => Math.min(s + 1, STEPS.length - 1))
    scrollTop()
  }

  function goBack() {
    if (step === 0) return
    setStep(s => s - 1)
    scrollTop()
  }

  async function handleSubmit() {
    if (!canAdvance()) return

    setSubmitting(true)
    setError('')

    try {
      setSubmitStage('uploading')

      const [logoUrl, photoUrls] = await Promise.all([
        logo
          ? upload(`starter-orders/logo-${Date.now()}-${logo.name}`, logo, {
              access: 'public',
              handleUploadUrl: '/api/starter-upload',
            }).then(blob => blob.url)
          : Promise.resolve(null),
        Promise.all(
          photos.map((p, i) =>
            upload(`starter-orders/photo-${Date.now()}-${i}-${p.name}`, p, {
              access: 'public',
              handleUploadUrl: '/api/starter-upload',
            }).then(blob => blob.url)
          )
        ),
      ])

      setSubmitStage('sending')

      const result = await submitStarterOrder({
        ...answers,
        variant,
        colourNote,
        offerings: offerings.filter(o => o.a.trim() || o.b.trim()),
        stats: stats.filter(s => s.a.trim() || s.b.trim()),
        reviews: reviews.filter(r => r.name.trim() || r.quote.trim()),
        values: values.filter(v => v.a.trim() || v.b.trim()),
        logoUrl,
        photoUrls,
      })

      if (result.success) {
        setSubmitted(true)
        scrollTop()
      } else {
        setError(result.error ?? 'Something went wrong.')
      }
    } catch {
      setError('Could not upload your photos. Check your connection and try again.')
    } finally {
      setSubmitting(false)
      setSubmitStage('idle')
    }
  }

  const pct = Math.round((step / (STEPS.length - 1)) * 100)

  if (submitted) {
    return (
      <div ref={topRef} className="max-w-xl mx-auto px-6 py-24 text-center">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-sm mx-auto" style={{ background: '#2563EB' }}>
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-accent">Order received</p>
        <h2 className="font-heading text-3xl text-ink mb-4">Thanks{answers.clientName ? `, ${answers.clientName.split(' ')[0]}` : ''}</h2>
        <p className="text-sm text-secondary leading-relaxed mb-10">
          Your order is in. Before I start building, I&apos;ll be in touch at {answers.clientEmail} to confirm
          everything and ask anything I need to. Then I&apos;ll send you a link to review, usually within about a week.
        </p>
        <p className="text-xs text-tertiary">You can close this window whenever you&apos;re ready.</p>
      </div>
    )
  }

  return (
    <div ref={topRef}>
      {/* Sticky progress strip */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{
          borderColor: 'rgba(15,23,42,0.08)',
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <div className="h-0.5 w-full" style={{ background: 'rgba(15,23,42,0.08)' }}>
          <motion.div className="h-full" style={{ background: '#2563EB' }} initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 h-11 flex items-center justify-between">
          {step > 0 ? (
            <button onClick={goBack} className="flex items-center gap-1.5 text-xs text-tertiary hover:text-secondary transition-colors">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          ) : <span />}
          <p className="text-[10px] font-semibold uppercase tracking-wider text-tertiary">{`${step + 1} of ${STEPS.length}`}</p>
          <div className="hidden sm:flex items-center gap-1">
            {STEPS.map((_, i) => (
              <div key={i} className="rounded-full transition-all duration-300" style={{ height: '4px', width: i < step ? '12px' : i === step ? '20px' : '6px', background: i <= step ? '#2563EB' : 'rgba(15,23,42,0.12)' }} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 py-14">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            <div className="mb-10">
              <h1 className="font-heading text-3xl sm:text-4xl text-ink mb-3 pl-4 border-l-4 border-accent">{section.heading}</h1>
              <p className="text-sm text-secondary leading-relaxed mt-3">{section.subheading}</p>
            </div>

            {/* Text fields */}
            {section.fields && section.fields.length > 0 && (
              <div className="flex flex-col gap-5">
                {section.fields.map(field => (
                  <TextField key={field.id} field={field} value={answers[field.id] ?? ''} onChange={val => setAnswer(field.id, val)} />
                ))}
              </div>
            )}

            {/* Design picker */}
            {section.id === 'design' && (
              <div className="flex flex-col gap-4">
                {VARIANTS.map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariant(v.id)}
                    className="flex items-center gap-4 p-4 rounded-sm border-2 text-left transition-colors"
                    style={{ borderColor: variant === v.id ? '#2563EB' : 'rgba(15,23,42,0.1)' }}
                  >
                    <div style={{ background: v.bg }} className="h-14 w-14 rounded-sm shrink-0 flex items-center justify-center">
                      <div style={{ background: v.accent }} className="h-2 w-6 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink">{v.name}</p>
                      <p className="text-xs text-secondary">{v.style}</p>
                    </div>
                    <a
                      href={`/starter/${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-xs text-accent underline underline-offset-2 shrink-0"
                    >
                      View
                    </a>
                  </button>
                ))}

                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-secondary">Colour note (optional)</label>
                  <p className="text-[11px] text-tertiary leading-relaxed">Want something other than the preview&apos;s default colours? Tell me what.</p>
                  <input
                    type="text"
                    value={colourNote}
                    onChange={e => setColourNote(e.target.value)}
                    placeholder="e.g. forest green instead of orange, or leave blank to keep the preview as-is"
                    className="w-full border border-border-light bg-white/80 px-4 py-3 h-11 text-base md:text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-150 rounded-sm"
                  />
                </div>
              </div>
            )}

            {/* Offerings / services / classes / features */}
            {section.id === 'offerings' && content?.offerings && (
              <SimpleRepeater
                items={offerings}
                onChange={setOfferings}
                max={6}
                labelA="Name"
                labelB="Short detail"
                placeholderA={`e.g. ${content.offerings.itemLabel} name`}
                placeholderB="A short line about it"
                addLabel={`Add a ${content.offerings.itemLabel.toLowerCase()}`}
              />
            )}

            {/* Stats */}
            {section.id === 'stats' && (
              <SimpleRepeater
                items={stats}
                onChange={setStats}
                max={3}
                labelA="Number"
                labelB="Label"
                placeholderA="e.g. 5"
                placeholderB="e.g. Years running"
                addLabel="Add a stat"
              />
            )}

            {/* Reviews */}
            {section.id === 'reviews' && (
              <ReviewRepeater items={reviews} onChange={setReviews} max={3} />
            )}

            {/* Values / what makes you different */}
            {section.id === 'values' && (
              <SimpleRepeater
                items={values}
                onChange={setValues}
                max={4}
                labelA="Title"
                labelB="One-liner"
                placeholderA="e.g. Independent"
                placeholderB="e.g. No ties to any product provider"
                addLabel="Add one"
              />
            )}

            {/* Logo & photos */}
            {section.id === 'assets' && (
              <div className="flex flex-col gap-6">
                {variant === 'preview-4' && (
                  <div className="flex items-start gap-3 rounded-sm border border-accent/20 bg-accent/5 px-4 py-3">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-accent">
                      <path d="M2 4h12M2 8h8M2 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <p className="text-xs text-secondary leading-relaxed">
                      These are just to help get started, not your gallery images. Once your site&apos;s live,
                      you&apos;ll get your own page to upload up to 20 gallery images yourself, any time.
                    </p>
                  </div>
                )}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-secondary">Logo</label>
                  <p className="text-[11px] text-tertiary leading-relaxed">Up to {MAX_FILE_MB}MB. On your phone, this opens your photo library or files.</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={e => {
                      const file = e.target.files?.[0] ?? null
                      if (file && file.size > MAX_FILE_BYTES) {
                        setFileError(`"${file.name}" is too large (max ${MAX_FILE_MB}MB per file).`)
                        e.target.value = ''
                        return
                      }
                      setFileError('')
                      setLogo(file)
                    }}
                    className="text-sm text-secondary file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-medium file:bg-accent file:text-white hover:file:bg-accent/90 file:cursor-pointer"
                  />
                  {logo && <p className="text-xs text-secondary">{logo.name}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-secondary">Photos (up to {MAX_PHOTOS})</label>
                  <p className="text-[11px] text-tertiary leading-relaxed">
                    Select several at once, or add them one at a time. Each new selection adds to the list below.
                    Straight from your phone&apos;s camera roll works fine, up to {MAX_FILE_MB}MB per photo.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={e => {
                      const newFiles = Array.from(e.target.files ?? [])
                      const oversized = newFiles.filter(f => f.size > MAX_FILE_BYTES)
                      const validFiles = newFiles.filter(f => f.size <= MAX_FILE_BYTES)

                      setFileError(
                        oversized.length > 0
                          ? `${oversized.map(f => `"${f.name}"`).join(', ')} ${oversized.length === 1 ? 'is' : 'are'} too large (max ${MAX_FILE_MB}MB per file) and ${oversized.length === 1 ? "wasn't" : "weren't"} added.`
                          : ''
                      )

                      setPhotos(prev => {
                        const combined = [...prev, ...validFiles]
                        const deduped = combined.filter((f, i) =>
                          combined.findIndex(g => g.name === f.name && g.size === f.size) === i
                        )
                        return deduped.slice(0, MAX_PHOTOS)
                      })
                      e.target.value = ''
                    }}
                    className="text-sm text-secondary file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-medium file:bg-accent file:text-white hover:file:bg-accent/90 file:cursor-pointer"
                  />
                  {fileError && <p className="text-xs text-red-500">{fileError}</p>}
                  {photos.length > 0 && (
                    <ul className="flex flex-col gap-1.5 mt-1">
                      {photos.map((p, i) => (
                        <li key={`${p.name}-${p.size}`} className="flex items-center justify-between text-xs text-secondary bg-subtle rounded-sm px-3 py-2">
                          <span className="truncate">{p.name}</span>
                          <button
                            type="button"
                            onClick={() => setPhotos(prev => prev.filter((_, idx) => idx !== i))}
                            className="text-tertiary hover:text-rose-500 transition-colors ml-3 shrink-0"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3">
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}

              {isLast ? (
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !canAdvance()}
                  className="w-full text-white py-4 text-sm font-medium tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-sm"
                  style={{ background: '#2563EB' }}
                >
                  {submitting ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {submitStage === 'uploading' ? 'Uploading photos' : 'Sending'}
                    </>
                  ) : (
                    <>
                      Send order
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={goNext}
                  disabled={!canAdvance()}
                  className="w-full text-white py-4 text-sm font-medium tracking-wide transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-sm"
                  style={{ background: '#2563EB' }}
                >
                  Continue
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
