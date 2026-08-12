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
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      colors: {
        // Brand palette: warm bone environment, midnight navy for strong
        // typography/graphic fields, burnt terracotta as a graphic-design
        // accent (not a marketing CTA colour), stone as supporting neutral.
        bone: '#F6F3EE',
        'bone-deep': '#ECE6D9',
        navy: '#10233F',
        'navy-deep': '#0A1830',
        charcoal: '#2B2B2B',
        terracotta: '#C1613D',
        stone: '#A8A8A0',

        // Semantic aliases so existing components re-theme automatically.
        ink: '#10233F',
        secondary: '#4A463F',
        tertiary: '#8C887D',
        surface: '#F6F3EE',
        subtle: '#ECE6D9',
        'border-light': '#DEDACC',
        accent: '#C1613D',
      },
    },
  },
  plugins: [typography],
}

export default config
