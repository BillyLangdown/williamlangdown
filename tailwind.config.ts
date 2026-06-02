import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0F172A',
        secondary: '#64748B',
        tertiary: '#94A3B8',
        surface: '#F8FAFC',
        subtle: '#F1F5F9',
        'border-light': '#E2E8F0',
        accent: '#2563EB',
      },
    },
  },
  plugins: [typography],
}

export default config
