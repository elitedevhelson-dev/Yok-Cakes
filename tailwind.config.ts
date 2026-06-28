import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF0F3',
          100: '#FFE4EA',
          200: '#F9CED6',
          300: '#F5B0C0',
          400: '#F08090',
          500: '#E8607A',
          600: '#D4547A',
          700: '#B83A60',
          800: '#9A2848',
          900: '#7D1A35',
        },
        cream: {
          50: '#FFFBF8',
          100: '#FFF5EC',
          200: '#F5E6D3',
          300: '#EDD9B8',
          400: '#DFC49A',
          500: '#CFB07D',
        },
        gold: {
          300: '#E8D5A3',
          400: '#D4B896',
          500: '#C9A96E',
          600: '#B8945A',
          700: '#9A7840',
        },
        brand: {
          muted: '#F8F5F2',
          surface: '#FDFCFB',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFF5EC 0%, #F5E6D3 40%, #FFE4EA 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,245,236,0.7) 100%)',
        'section-gradient': 'linear-gradient(180deg, #FDFCFB 0%, #FFF5EC 100%)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(201, 169, 110, 0.10)',
        'card-hover': '0 12px 48px rgba(201, 169, 110, 0.22)',
        rose: '0 4px 24px rgba(212, 84, 122, 0.18)',
        gold: '0 4px 20px rgba(201, 169, 110, 0.30)',
        glass: '0 8px 32px rgba(201, 169, 110, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
