'use client'

import { useState, useCallback, useEffect } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { submitContactForm } from '@/app/actions/contact'
import { gtagEvent } from '@/lib/gtag'

const areas = [
  {
    value: 'strategy',
    label: 'Strategy & Brand',
    desc: 'Positioning, messaging, identity',
    placeholder: 'e.g. Our brand and messaging haven\'t kept up with what the business has become...',
  },
  {
    value: 'digital',
    label: 'Digital',
    desc: 'Website, UX, technical SEO',
    placeholder: 'e.g. Our website doesn\'t reflect the quality of the work we actually do...',
  },
  {
    value: 'technology',
    label: 'Technology',
    desc: 'Software, integrations, automation',
    placeholder: 'e.g. We\'re running the business through spreadsheets and it needs something better...',
  },
  {
    value: 'not-sure',
    label: 'Not sure yet',
    desc: 'Happy to talk it through',
    placeholder: 'e.g. Something isn\'t working, but I\'m not sure exactly what needs to change...',
  },
]

const timingOptions = [
  { value: 'now', label: 'Ready to start now' },
  { value: 'soon', label: 'In the next 1–3 months' },
  { value: 'later', label: 'Further out, still planning' },
  { value: 'exploring', label: 'Just exploring for now' },
]

const DEFAULT_PLACEHOLDER = 'e.g. Tell me a bit about the business and what you\'re trying to change...'

function Form({ defaultService }: { defaultService?: string }) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [step, setStep] = useState(() =>
    defaultService && areas.some(s => s.value === defaultService) ? 2 : 1
  )
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedArea, setSelectedArea] = useState(defaultService ?? '')
  const [timing, setTiming] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')

  // Arriving with a preselected area jumps straight to step 2: scroll
  // the form into view too, since on the /contact page it otherwise starts
  // below the fold and the visitor has to scroll down manually to see it.
  useEffect(() => {
    if (defaultService && areas.some(s => s.value === defaultService)) {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [defaultService])

  const selectArea = (value: string) => {
    setSelectedArea(value)
    setTimeout(() => setStep(2), 150)
  }

  const handleSubmit = useCallback(async () => {
    if (!executeRecaptcha) return
    setStatus('submitting')
    setErrorMessage('')

    try {
      const token = await executeRecaptcha('contact_form')
      const result = await submitContactForm({
        name,
        email,
        website: company,
        service: selectedArea,
        message: timing ? `${message}\n\nTiming: ${timingOptions.find(t => t.value === timing)?.label ?? timing}` : message,
        recaptchaToken: token,
      })

      if (result.success) {
        setStatus('success')
        gtagEvent('generate_lead', { service: selectedArea || 'not_specified' })
        gtagEvent('conversion', { send_to: 'AW-11171125987/ImpVCJzmqdccEOO1584p' })
      } else {
        setStatus('error')
        setErrorMessage(result.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }, [executeRecaptcha, name, email, company, selectedArea, message, timing])

  const selectedLabel = areas.find(s => s.value === selectedArea)?.label

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-5 py-10 text-center">
        <div className="w-11 h-11 rounded-sm flex items-center justify-center" style={{ background: '#C1613D' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 9.5l4 4 7-8" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-ink mb-1">Message sent.</h3>
          <p className="text-sm text-secondary leading-relaxed max-w-xs mx-auto">
            Thanks for getting in touch. I&apos;ll come back to you within one business day.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus('idle')
            setStep(1)
            setSelectedArea('')
            setTiming('')
            setMessage('')
            setName('')
            setEmail('')
            setCompany('')
          }}
          className="text-sm text-secondary underline underline-offset-4 hover:text-ink transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-7">

      {/* Progress bar */}
      <div className="flex items-center gap-1.5">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              flex: s < step ? 1 : 'none',
              width: s >= step ? (s === step ? '28px' : '8px') : undefined,
              background: s <= step ? '#C1613D' : 'rgba(16,35,63,0.1)',
            }}
          />
        ))}
        <span className="text-xs text-secondary shrink-0 ml-1 tabular-nums">{step} / 3</span>
      </div>

      {/* Step 1: area selection */}
      {step === 1 && (
        <div>
          <p className="text-sm font-semibold text-ink mb-4">What&apos;s this mostly about?</p>
          <div className="flex flex-col gap-2">
            {areas.map(s => (
              <button
                key={s.value}
                onClick={() => selectArea(s.value)}
                className={`group text-left px-4 py-3.5 border rounded-sm transition-all ${
                  selectedArea === s.value
                    ? 'border-accent bg-accent/5'
                    : 'border-border-light bg-white/80 hover:border-accent/40'
                }`}
              >
                <span className="text-sm font-medium text-ink">{s.label}</span>
                <span className="text-xs text-secondary block mt-0.5">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: what's changing */}
      {step === 2 && (
        <div className="flex flex-col gap-5">
          {selectedLabel && (
            <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: 'rgba(193,97,61,0.08)', color: '#C1613D' }}>
              {selectedLabel}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold text-ink mb-1">What are you trying to change, and what&apos;s in the way?</p>
            <p className="text-xs text-secondary mb-3">A few lines is plenty. We&apos;ll go into detail on a call.</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              autoFocus
              placeholder={areas.find(s => s.value === selectedArea)?.placeholder ?? DEFAULT_PLACEHOLDER}
              className="w-full border border-border-light rounded-sm px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent transition-colors resize-none bg-white/80"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink mb-3">Timing</p>
            <div className="flex flex-wrap gap-2">
              {timingOptions.map(t => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTiming(timing === t.value ? '' : t.value)}
                  className={`text-xs font-medium px-3 py-2 rounded-sm border transition-colors ${
                    timing === t.value ? 'border-accent bg-accent/5 text-ink' : 'border-border-light text-secondary hover:border-accent/40'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-secondary hover:text-ink transition-colors px-4 py-2.5 border border-border-light rounded-sm bg-white/80"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!message.trim()}
              className="flex-1 text-white text-sm py-2.5 rounded-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: '#C1613D' }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: details */}
      {step === 3 && (
        <div className="flex flex-col gap-5">
          {selectedLabel && (
            <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: 'rgba(193,97,61,0.08)', color: '#C1613D' }}>
              {selectedLabel}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold text-ink mb-4">Your details</p>
            <div className="flex flex-col gap-3">
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Your name *"
                autoFocus
                className="w-full border border-border-light rounded-sm px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent transition-colors bg-white/80"
              />
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Your email *"
                className="w-full border border-border-light rounded-sm px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent transition-colors bg-white/80"
              />
              <input
                value={company}
                onChange={e => setCompany(e.target.value)}
                type="text"
                placeholder="Business name or website (optional)"
                className="w-full border border-border-light rounded-sm px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent transition-colors bg-white/80"
              />
            </div>
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600 bg-red-50 rounded-sm px-4 py-3 border border-red-100">{errorMessage}</p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="text-sm text-secondary hover:text-ink transition-colors px-4 py-2.5 border border-border-light rounded-sm bg-white/80"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={status === 'submitting' || !name.trim() || !email.trim()}
              className="flex-1 text-white text-sm py-2.5 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ background: '#C1613D' }}
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                'Send message'
              )}
            </button>
          </div>

          <p className="text-xs text-tertiary text-center">
            Protected by reCAPTCHA.{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Privacy</a>
            {' '}&amp;{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Terms</a>
          </p>
        </div>
      )}

    </div>
  )
}

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <Form defaultService={defaultService} />
    </GoogleReCaptchaProvider>
  )
}
