'use client'

import { useState, useCallback } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { submitContactForm } from '@/app/actions/contact'
import { gtagEvent } from '@/lib/gtag'

const services = [
  { value: 'audit', label: 'Website Audit', desc: 'Find out what\'s holding your site back', price: '£145' },
  { value: 'build', label: 'Design & Build', desc: 'A new website, start to finish', price: 'From £1,495' },
  { value: 'development', label: 'Development Help', desc: 'Updates, fixes, or ongoing support', price: '£30 / hr' },
  { value: 'other', label: 'Something else', desc: 'Not sure yet, happy to talk it through', price: '' },
]

function Form({ defaultService }: { defaultService?: string }) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [step, setStep] = useState(() =>
    defaultService && services.some(s => s.value === defaultService) ? 2 : 1
  )
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedService, setSelectedService] = useState(defaultService ?? '')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')

  const selectService = (value: string) => {
    setSelectedService(value)
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
        website,
        service: selectedService,
        message,
        recaptchaToken: token,
      })

      if (result.success) {
        setStatus('success')
        gtagEvent('generate_lead', { service: selectedService || 'not_specified' })
      } else {
        setStatus('error')
        setErrorMessage(result.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }, [executeRecaptcha, name, email, website, selectedService, message])

  const selectedLabel = services.find(s => s.value === selectedService)?.label

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-5 py-10 text-center">
        <div className="w-11 h-11 rounded-sm flex items-center justify-center" style={{ background: '#2563EB' }}>
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
            setSelectedService('')
            setMessage('')
            setName('')
            setEmail('')
            setWebsite('')
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
              background: s <= step ? '#2563EB' : 'rgba(15,23,42,0.1)',
            }}
          />
        ))}
        <span className="text-xs text-secondary shrink-0 ml-1 tabular-nums">{step} / 3</span>
      </div>

      {/* Step 1 — service selection */}
      {step === 1 && (
        <div>
          <p className="text-sm font-semibold text-ink mb-4">What are you interested in?</p>
          <div className="flex flex-col gap-2">
            {services.map(s => (
              <button
                key={s.value}
                onClick={() => selectService(s.value)}
                className={`group text-left px-4 py-3.5 border rounded-sm transition-all ${
                  selectedService === s.value
                    ? 'border-accent bg-accent/5'
                    : 'border-border-light bg-white/80 hover:border-accent/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-sm font-medium text-ink">{s.label}</span>
                    <span className="text-xs text-secondary block mt-0.5">{s.desc}</span>
                  </div>
                  {s.price && (
                    <span className="text-xs font-medium shrink-0" style={{ color: '#2563EB' }}>{s.price}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — message */}
      {step === 2 && (
        <div className="flex flex-col gap-5">
          {selectedLabel && (
            <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>
              {selectedLabel}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold text-ink mb-1">What&apos;s the situation?</p>
            <p className="text-xs text-secondary mb-3">Tell me what you&apos;re trying to improve or fix.</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={6}
              autoFocus
              placeholder="e.g. My site gets traffic but nobody fills in the contact form..."
              className="w-full border border-border-light rounded-sm px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-accent transition-colors resize-none bg-white/80"
            />
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
              style={{ background: '#2563EB' }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — details */}
      {step === 3 && (
        <div className="flex flex-col gap-5">
          {selectedLabel && (
            <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>
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
                value={website}
                onChange={e => setWebsite(e.target.value)}
                type="text"
                placeholder="Your website (optional)"
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
              style={{ background: '#2563EB' }}
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
