'use client'

import { useState, useCallback } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { submitContactForm } from '@/app/actions/contact'

function Form({ defaultService }: { defaultService?: string }) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!executeRecaptcha) {
        console.error('[ContactForm] executeRecaptcha is not available — reCAPTCHA may not have loaded')
        return
      }

      setStatus('submitting')
      setErrorMessage('')

      // Capture form ref before any awaits — e.currentTarget is nullified after async suspension
      const form = e.currentTarget
      const formData = new FormData(form)

      try {
        console.log('[ContactForm] Executing reCAPTCHA...')
        const token = await executeRecaptcha('contact_form')
        console.log('[ContactForm] reCAPTCHA token received:', token ? `${token.slice(0, 20)}…` : 'EMPTY')

        console.log('[ContactForm] Submitting to server action...')
        const result = await submitContactForm({
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          website: formData.get('website') as string,
          service: formData.get('service') as string,
          message: formData.get('message') as string,
          recaptchaToken: token,
        })

        console.log('[ContactForm] Server action result:', result)

        if (result.success) {
          setStatus('success')
          form.reset()
        } else {
          setStatus('error')
          setErrorMessage(result.error ?? 'Something went wrong.')
        }
      } catch (err) {
        console.error('[ContactForm] Caught error during submission:', err)
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again.')
      }
    },
    [executeRecaptcha]
  )

  if (status === 'success') {
    return (
      <div className="flex flex-col gap-4 py-12">
        <div className="w-10 h-10 rounded-none bg-ink flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.5 9.5l4 4 7-8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-ink tracking-tight">
          Message sent.
        </h3>
        <p className="text-sm text-secondary leading-relaxed max-w-sm">
          Thanks for getting in touch. I&apos;ll come back to you within one
          business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-secondary underline underline-offset-4 hover:text-ink transition-colors w-fit mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs text-tertiary uppercase tracking-widest"
          >
            Name <span className="text-gray-300">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            disabled={status === 'submitting'}
            className="w-full border border-border-light rounded-none px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-tertiary transition-colors disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs text-tertiary uppercase tracking-widest"
          >
            Email <span className="text-gray-300">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            disabled={status === 'submitting'}
            className="w-full border border-border-light rounded-none px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-tertiary transition-colors disabled:opacity-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="website"
          className="text-xs text-tertiary uppercase tracking-widest"
        >
          Website URL
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://yourwebsite.com"
          disabled={status === 'submitting'}
          className="w-full border border-border-light rounded-none px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-tertiary transition-colors disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="service"
          className="text-xs text-tertiary uppercase tracking-widest"
        >
          I&apos;m interested in
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService ?? ''}
          disabled={status === 'submitting'}
          className="w-full border border-border-light rounded-none px-4 py-3 text-sm text-ink focus:outline-none focus:border-tertiary transition-colors bg-white disabled:opacity-50"
        >
          <option value="">Select a service</option>
          <option value="audit">Audit (£149)</option>
          <option value="design">Design (£749)</option>
          <option value="build">Build (from £1,495)</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs text-tertiary uppercase tracking-widest"
        >
          Message <span className="text-gray-300">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you trying to improve? What's not working?"
          disabled={status === 'submitting'}
          className="w-full border border-border-light rounded-none px-4 py-3 text-sm text-ink placeholder:text-tertiary focus:outline-none focus:border-tertiary transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 rounded-none px-4 py-3">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-ink text-white text-sm py-4 rounded-none hover:bg-ink/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </button>

      <p className="text-xs text-tertiary text-center">
        Protected by reCAPTCHA.{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          Privacy
        </a>{' '}
        &amp;{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          Terms
        </a>
      </p>
    </form>
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
