import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F2EFE5',
        navy: {
          DEFAULT: '#162B44',
          dark: '#0F1E30',
          light: '#243F5F',
          muted: '#3A566E',
        },
        gold: {
          DEFAULT: '#A8721E',
          light: '#C28E35',
          muted: '#E2C98A',
          pale: '#F7F0DC',
        },
        warm: {
          white: '#FDFBF5',
          border: '#D2CCBC',
          'border-strong': '#AFA898',
          text: '#4A4A5A',
          muted: '#7A7A8A',
        },
        status: {
          official: '#155A38',
          'official-bg': '#E5F4ED',
          'official-border': '#9ACFB4',
          pending: '#8B4500',
          'pending-bg': '#FEF3E2',
          'pending-border': '#F0BE78',
          superseded: '#7F1414',
          'superseded-bg': '#FDEBEB',
          'superseded-border': '#F0A8A8',
          unofficial: '#173B7A',
          'unofficial-bg': '#EBF0FF',
          'unofficial-border': '#A8BEF5',
          adopted: '#155A38',
          'adopted-bg': '#E5F4ED',
          'adopted-border': '#9ACFB4',
          needs_review: '#6B4000',
          'needs_review-bg': '#FEF0D8',
          'needs_review-border': '#EDB968',
        },
      },
      fontFamily: {
        serif: ['var(--font-spectral)', 'Georgia', 'serif'],
        sans: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
