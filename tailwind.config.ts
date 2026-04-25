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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#1A1A1A',
        secondary: '#666666',
        tertiary: '#999999',
        surface: '#FAFAF7',
        subtle: '#F0EBE3',
        'border-light': '#E2DDD7',
        accent: '#C17A3A',
      },
    },
  },
  plugins: [typography],
}

export default config
