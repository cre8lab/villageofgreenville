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
        cream: '#F0F4EF',
        navy: {
          DEFAULT: '#162B44',
          dark: '#0F1E30',
          light: '#243F5F',
          muted: '#3A566E',
        },
        civic: {
          green: '#2B5744',
          'green-dark': '#1E3D30',
          'green-light': '#3D7A60',
          'green-pale': '#E8F2EC',
          'green-muted': '#8AB5A0',
          'green-border': '#B5D4C4',
        },
        gold: {
          DEFAULT: '#A8721E',
          light: '#C28E35',
          muted: '#E2C98A',
          pale: '#F7F0DC',
        },
        warm: {
          white: '#FAFDF8',
          border: '#C8D2C5',
          'border-strong': '#A8B4A4',
          text: '#4A5248',
          muted: '#7A8278',
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
    },
  },
  plugins: [],
}

export default config
