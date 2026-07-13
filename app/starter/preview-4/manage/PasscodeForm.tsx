'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { checkPortfolioPasscode } from '@/app/actions/portfolio-manage'

export default function PasscodeForm() {
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()
  const router = useRouter()

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await checkPortfolioPasscode(formData)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.error || 'Incorrect passcode.')
      }
    })
  }

  return (
    <form action={handleSubmit} className="text-center">
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: '#A8683D' }}>Manage artwork</p>
      <h1 style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1B19' }} className="text-2xl font-semibold mb-6">
        Enter your passcode
      </h1>
      <input
        type="password"
        name="passcode"
        required
        autoFocus
        className="w-full border px-4 py-3 text-sm mb-3 outline-none"
        style={{ borderColor: '#D9D2C7', background: '#FFFFFF', color: '#1C1B19' }}
        placeholder="Passcode"
      />
      {error && (
        <p className="text-sm mb-3" style={{ color: '#B4432F' }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full px-6 py-3 text-sm font-medium text-white disabled:opacity-60"
        style={{ background: '#A8683D' }}
      >
        {pending ? 'Checking…' : 'Continue'}
      </button>
    </form>
  )
}
