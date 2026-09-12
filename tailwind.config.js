/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040217', // Deepest cosmic void
          900: '#06042B', // Exact background from official logo image
          850: '#090738',
          800: '#0e0b4d',
          750: '#141063',
          700: '#1b177e',
          600: '#2621a6',
          500: '#3832d6',
        },
        cyber: {
          cyan: '#1AB5E3', // Luminous logo cyan
          electric: '#00D2FF', // Electric vibrant cyan
          sky: '#38BDF8',
          blue: '#0088FF',
          deepBlue: '#0055D4',
          cobalt: '#1A1D54',
          violet: '#818CF8',
          purple: '#A855F7',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        brand: {
          DEFAULT: '#1AB5E3',
          navy: '#06042B',
          void: '#040217',
          blue: '#0088FF',
          dark: '#090738',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 210, 255, 0.4)',
        'glow-cyan-lg': '0 0 50px -10px rgba(0, 210, 255, 0.5)',
        'glow-blue': '0 0 30px -5px rgba(0, 136, 255, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(2, 5, 20, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,210,255,0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(0,210,255,0.7))' },
        }
      }
    },
  },
  plugins: [],
}
