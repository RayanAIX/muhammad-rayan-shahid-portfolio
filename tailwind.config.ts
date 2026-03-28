import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#030303',
          secondary: '#0d0d0f',
          card: '#111116',
        },
        accent: {
          primary: '#00d4ff',
          secondary: '#7c3aed',
          glow: 'rgba(0, 212, 255, 0.2)',
        },
        text: {
          primary: '#f0f0f5',
          secondary: '#8888a0',
          dim: '#44445a',
        },
        border: {
          default: '#1a1a2e',
          glow: 'rgba(0, 212, 255, 0.13)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
