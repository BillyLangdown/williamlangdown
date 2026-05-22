'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitQuestionnaire } from '@/app/actions/questionnaire'

/* ── Types ───────────────────────────────────────────────────────────── */

type FieldType = 'text' | 'email' | 'textarea' | 'url'

interface Field {
  id: string
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
  hint?: string
}

interface Section {
  id: string
  label: string
  num: string
  heading: string
  subheading: string
  skippable: boolean
  milestone?: string
  fields: Field[]
}

/* ── Sections ────────────────────────────────────────────────────────── */

const SECTIONS: Section[] = [
  {
    id: 'welcome',
    label: 'Welcome',
    num: '00',
    heading: "Let's get started",
    subheading: 'Just your name and email so I know who this is from.',
    skippable: false,
    fields: [
      { id: 'clientName', label: 'Your name', type: 'text', required: true, placeholder: 'Jane Smith' },
      { id: 'clientEmail', label: 'Your email', type: 'email', required: true, placeholder: 'your@email.co.uk' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    num: '01',
    heading: 'About the business',
    subheading: 'Help me understand what you do and who you are. Rough notes are fine.',
    skippable: true,
    fields: [
      { id: 'businessName', label: 'Business name', type: 'text', placeholder: 'Your business name' },
      { id: 'businessOverview', label: 'What does your business do and what do you offer?', type: 'textarea', placeholder: 'What you do, who you help, and the main products or services you provide...' },
      { id: 'differentiation', label: 'What makes your business different from competitors?', type: 'textarea', placeholder: 'What sets you apart?' },
      { id: 'currentWorking', label: 'Are there any parts of your current website that are already working well?', type: 'textarea', placeholder: 'Or leave blank if you do not have one yet' },
    ],
  },
  {
    id: 'goals',
    label: 'Goals',
    num: '02',
    heading: 'Project goals',
    subheading: 'What do you want this website to do for your business?',
    skippable: true,
    fields: [
      { id: 'mainReason', label: 'What is the main reason for the new website or redesign?', type: 'textarea', hint: 'e.g. more enquiries, improving trust, modernising the look, better SEO visibility', placeholder: 'Tell me the main driver...' },
      { id: 'successDefinition', label: 'What would make this project feel successful to you?', type: 'textarea', placeholder: 'What does a great outcome look like?' },
      { id: 'visitorActions', label: 'What actions do you want visitors to take on the website?', type: 'textarea', hint: 'e.g. contact you, request a quote, book a call, make a purchase, sign up', placeholder: 'List the main actions...' },
      { id: 'priorityAction', label: 'Which of those is the highest priority?', type: 'text', placeholder: 'The single most important one' },
    ],
  },
  {
    id: 'audience',
    label: 'Audience',
    num: '03',
    heading: 'Your audience',
    subheading: 'Tell me about the people you want to reach.',
    skippable: true,
    milestone: 'Halfway there. You are doing great.',
    fields: [
      { id: 'idealCustomers', label: 'Who are your ideal customers, and what type of client do you want to attract more of?', type: 'textarea', placeholder: 'Who they are, what they need, and who you want more of...' },
      { id: 'bToB', label: 'Are you targeting businesses, consumers, or both?', type: 'text', placeholder: 'B2B, B2C, or both' },
      { id: 'customerValues', label: 'What matters most to your customers when choosing a business like yours?', type: 'textarea', hint: 'e.g. trust, reliability, speed, quality, price, experience', placeholder: 'What do they care about most?' },
      { id: 'customerDecision', label: 'Do your customers usually know what they want, or are they comparing options and looking for guidance?', type: 'textarea', placeholder: 'Decided, comparing, or a mix?' },
      { id: 'avoidCustomers', label: 'Are there any types of customers you would rather not attract?', type: 'textarea', placeholder: 'Optional' },
    ],
  },
  {
    id: 'pages',
    label: 'Pages',
    num: '04',
    heading: 'Website pages',
    subheading: 'For each page, add whatever you already have or plan to include. Rough notes are fine.',
    skippable: true,
    fields: [
      { id: 'homePage', label: 'Home page', type: 'textarea', placeholder: 'Purpose, key messages, what it should achieve...' },
      { id: 'aboutPage', label: 'About page', type: 'textarea', placeholder: 'Story, team, background, key info to include...' },
      { id: 'servicesPage', label: 'Services page(s)', type: 'textarea', placeholder: 'Services to list, key details, common questions...' },
      { id: 'portfolioPage', label: 'Portfolio or projects page', type: 'textarea', placeholder: 'Projects to showcase, results, images available...' },
      { id: 'contactPage', label: 'Contact page', type: 'textarea', placeholder: 'Contact details, preferred methods, areas covered...' },
      { id: 'additionalPages', label: 'Any additional pages needed?', type: 'textarea', placeholder: 'Blog, pricing, booking, FAQ, landing pages...' },
    ],
  },
  {
    id: 'branding',
    label: 'Branding',
    num: '05',
    heading: 'Branding and visuals',
    subheading: 'Help me understand the look and feel you are after.',
    skippable: true,
    milestone: 'Nearly done. Just two sections left.',
    fields: [
      { id: 'overallFeel', label: 'How would you like the website to feel overall?', type: 'textarea', hint: 'e.g. modern, clean, premium, approachable, bold, minimal, warm, technical', placeholder: 'Describe the feeling or tone...' },
      { id: 'colours', label: 'Are there any colours you would like included or avoided?', type: 'textarea', placeholder: 'Brand colours, colours you love or hate...' },
      { id: 'logoGuidelines', label: 'Do you already have a logo or brand guidelines?', type: 'text', placeholder: 'Yes / No / In progress' },
      { id: 'fontsStyles', label: 'Are there any fonts or styles you particularly like or dislike?', type: 'textarea', placeholder: 'Any preferences or styles to avoid...' },
      { id: 'inspiration', label: 'Are there any websites you like the look or structure of?', type: 'textarea', placeholder: 'Paste links and explain what you like about them...' },
      { id: 'designAvoid', label: 'Are there any design approaches you definitely want to avoid?', type: 'textarea', placeholder: 'Anything you want to stay away from...' },
      { id: 'existingMedia', label: 'Do you have photography or media available?', type: 'textarea', hint: 'e.g. team photos, project photos, office images, product photos, videos', placeholder: 'Describe what you have...' },
      { id: 'mediaLink', label: 'Share a link to any files, photos, or brand assets', type: 'url', hint: 'Google Drive, Dropbox, WeTransfer, or anywhere you can share a link', placeholder: 'https://drive.google.com/...' },
    ],
  },
  {
    id: 'features',
    label: 'Features',
    num: '06',
    heading: 'Features and technical',
    subheading: 'The practical side of how the site needs to work.',
    skippable: true,
    fields: [
      { id: 'functionality', label: 'Does the website need any specific functionality?', type: 'textarea', hint: 'e.g. enquiry forms, booking systems, ecommerce, galleries, blog, CMS editing, maps', placeholder: 'List anything specific you need...' },
      { id: 'integrations', label: 'Do you need any third-party integrations?', type: 'textarea', hint: 'e.g. CRM, Mailchimp, Stripe, HubSpot, Google Reviews, booking software', placeholder: 'List any tools or platforms to connect...' },
      { id: 'seoTargets', label: 'Are there specific services, products, or locations you want to rank for on Google?', type: 'textarea', placeholder: 'Key terms or locations to target...' },
      { id: 'analyticsAndSeo', label: 'Do you currently use Google Analytics or Search Console, and do you want help with ongoing SEO after launch?', type: 'textarea', placeholder: 'Current setup and what level of ongoing help you would want...' },
      { id: 'domainHosting', label: 'Tell me about your domain and hosting situation', type: 'textarea', hint: 'Do you own a domain? Who hosts your current site? Do you have access to your accounts?', placeholder: 'e.g. Domain owned at GoDaddy, hosted on Squarespace, full access...' },
      { id: 'launchTimeframe', label: 'Do you have a preferred launch timeframe?', type: 'text', placeholder: 'e.g. 6 to 8 weeks, ASAP, no rush, by [month]' },
    ],
  },
  {
    id: 'final',
    label: 'Final notes',
    num: '07',
    heading: 'Final notes',
    subheading: 'Almost done. Anything else worth knowing?',
    skippable: true,
    fields: [
      { id: 'anythingElse', label: 'Is there anything else that would be useful for me to know before starting?', type: 'textarea', placeholder: 'Constraints, priorities, context, anything at all...' },
      { id: 'frustrations', label: 'Any frustrations or bad experiences with previous websites, agencies, or freelancers?', type: 'textarea', placeholder: 'Honest feedback helps me understand what to avoid...' },
    ],
  },
]

const CONTENT_SECTIONS = SECTIONS.slice(1)
const TOTAL_STEPS = SECTIONS.length

/* ── Variants ────────────────────────────────────────────────────────── */

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 36 : -36, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -36 : 36, opacity: 0 }),
}

/* ── Field ───────────────────────────────────────────────────────────── */

function Field({
  field,
  value,
  onChange,
}: {
  field: Field
  value: string
  onChange: (val: string) => void
}) {
  const base =
    'w-full border border-[#E2DDD7] bg-white px-4 py-3 text-base md:text-sm text-[#1A1A1A] placeholder:text-[#ccc] focus:outline-none focus:border-[#C17A3A] focus:ring-2 focus:ring-[#C17A3A]/10 transition-all duration-150'

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#999]">
        {field.label}
        {field.required && <span className="ml-1 text-[#C17A3A]">*</span>}
      </label>
      {field.hint && (
        <p className="text-[11px] text-[#bbb] leading-relaxed">{field.hint}</p>
      )}
      {field.type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={field.type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={`${base} h-11`}
        />
      )}
    </div>
  )
}

/* ── Success ─────────────────────────────────────────────────────────── */

function SuccessScreen({ name, skipped }: { name: string; skipped: string[] }) {
  const completed = CONTENT_SECTIONS.filter((s) => !skipped.includes(s.id)).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center text-center px-4 py-16"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, type: 'spring', stiffness: 200 }}
        className="mb-8 flex h-16 w-16 items-center justify-center border border-[#E2DDD7] bg-[#F0EBE3]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="#C17A3A"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="max-w-sm"
      >
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C17A3A]">
          Brief received
        </p>
        <h2 className="font-heading text-3xl text-[#1A1A1A] mb-4">
          Thanks{name ? `, ${name.split(' ')[0]}` : ''}
        </h2>
        <p className="text-sm text-[#666] leading-relaxed mb-10">
          Your brief has been sent. I will review it and be in touch shortly. You completed{' '}
          <span className="font-semibold text-[#1A1A1A]">{completed} of {CONTENT_SECTIONS.length}</span> sections, which is plenty to get started.
        </p>

        <div className="grid grid-cols-2 gap-2 text-left mb-10">
          {CONTENT_SECTIONS.map((s) => {
            const done = !skipped.includes(s.id)
            return (
              <div key={s.id} className="flex items-center gap-2 text-xs">
                <span className={done ? 'text-[#C17A3A]' : 'text-[#ddd]'}>
                  {done ? '✓' : '○'}
                </span>
                <span className={done ? 'text-[#555]' : 'text-[#ccc]'}>{s.label}</span>
              </div>
            )
          })}
        </div>

        <p className="text-xs text-[#bbb]">You can close this window whenever you are ready.</p>
      </motion.div>
    </motion.div>
  )
}

/* ── Main ────────────────────────────────────────────────────────────── */

export default function Questionnaire() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [skipped, setSkipped] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const topRef = useRef<HTMLDivElement>(null)

  const section = SECTIONS[step]
  const isLast = step === SECTIONS.length - 1

  function scrollTop() {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function setAnswer(id: string, val: string) {
    setAnswers((prev) => ({ ...prev, [id]: val }))
  }

  function canAdvance() {
    if (step === 0) return !!(answers.clientName?.trim() && answers.clientEmail?.trim())
    return true
  }

  function goNext() {
    if (!canAdvance()) return
    setDir(1)
    setStep((s) => s + 1)
    scrollTop()
  }

  function goBack() {
    if (step === 0) return
    setDir(-1)
    setStep((s) => s - 1)
    scrollTop()
  }

  function skipSection() {
    setSkipped((prev) => [...prev, section.id])
    setDir(1)
    setStep((s) => s + 1)
    scrollTop()
  }

  async function handleSubmit() {
    setSubmitting(true)
    setError('')
    const result = await submitQuestionnaire(
      answers.clientName ?? '',
      answers.clientEmail ?? '',
      answers,
      skipped
    )
    setSubmitting(false)
    if (result.success) {
      setSubmitted(true)
      scrollTop()
    } else {
      setError(result.error ?? 'Something went wrong.')
    }
  }

  const pct = Math.round((step / (TOTAL_STEPS - 1)) * 100)

  return (
    <div ref={topRef}>
      {/* Sticky progress strip */}
      <div className="sticky top-16 z-40 bg-[#FAFAF7] border-b border-[#E2DDD7]">
        {/* Bar */}
        <div className="h-0.5 w-full bg-[#E2DDD7]">
          <motion.div
            className="h-full bg-[#C17A3A]"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        {/* Nav row */}
        <div className="max-w-6xl mx-auto px-6 h-11 flex items-center justify-between">
          {step > 0 && !submitted ? (
            <button
              onClick={goBack}
              className="flex items-center gap-1.5 text-xs text-[#aaa] hover:text-[#666] transition-colors"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          ) : (
            <span />
          )}

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bbb]">
            {submitted
              ? 'Complete'
              : step === 0
              ? 'Getting started'
              : `${step} of ${SECTIONS.length - 1}`}
          </p>

          {/* Dots */}
          <div className="hidden sm:flex items-center gap-1">
            {SECTIONS.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i < step
                    ? 'h-1 w-3 bg-[#C17A3A]'
                    : i === step
                    ? 'h-1 w-5 bg-[#C17A3A]'
                    : 'h-1 w-1.5 bg-[#E2DDD7]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xl mx-auto px-6 py-14">
        {submitted ? (
          <SuccessScreen name={answers.clientName ?? ''} skipped={skipped} />
        ) : (
          <>
            {/* Milestone */}
            <AnimatePresence>
              {section.milestone && step > 1 && (
                <motion.div
                  key={`milestone-${step}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 border border-[#E2DDD7] bg-[#F0EBE3] px-4 py-3 text-xs text-[#9a6535] leading-relaxed"
                >
                  {section.milestone}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22, ease: 'easeInOut' }}
              >
                {/* Header */}
                <div className="mb-10">
                  <span className="font-heading text-6xl font-bold text-[#C17A3A]/20 select-none leading-none block mb-4">
                    {section.num}
                  </span>
                  <h1 className="font-heading text-3xl sm:text-4xl text-[#1A1A1A] mb-3">
                    {section.heading}
                  </h1>
                  <p className="text-sm text-[#666] leading-relaxed">{section.subheading}</p>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-5">
                  {section.fields.map((field) => (
                    <Field
                      key={field.id}
                      field={field}
                      value={answers[field.id] ?? ''}
                      onChange={(val) => setAnswer(field.id, val)}
                    />
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-col gap-3">
                  {error && (
                    <p className="text-xs text-red-500 text-center">{error}</p>
                  )}

                  {isLast ? (
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full bg-[#C17A3A] text-white py-4 text-sm font-medium tracking-wide hover:bg-[#a86830] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending
                        </>
                      ) : (
                        <>
                          Send brief
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
                      className="w-full bg-[#1A1A1A] text-white py-4 text-sm font-medium tracking-wide hover:bg-[#2a2a2a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continue
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}

                  {section.skippable && (
                    <button
                      onClick={skipSection}
                      className="text-center text-xs text-[#ccc] hover:text-[#999] transition-colors py-1 underline underline-offset-4"
                    >
                      Skip this section
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  )
}
