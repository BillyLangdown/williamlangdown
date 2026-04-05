import type { Config } from 'tailwindcss'

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
        surface: '#FFFFFF',
        subtle: '#F5F5F5',
        'border-light': '#E5E5E5',
      },
    },
  },
  plugins: [],
}

export default config
