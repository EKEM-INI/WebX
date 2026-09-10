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
          950: '#030508',
          900: '#060910',
          850: '#090d16',
          800: '#0d1320',
          750: '#11192a',
          700: '#172238',
          600: '#233250',
          500: '#384b70',
        },
        cyber: {
          cyan: '#00F0FF',
          blue: '#38BDF8',
          violet: '#818CF8',
          purple: '#A855F7',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        brand: {
          DEFAULT: '#00F0FF',
          muted: '#00B8C8',
          dark: '#007A85',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'glow-cyan-lg': '0 0 50px -10px rgba(0, 240, 255, 0.45)',
        'glow-violet': '0 0 25px -5px rgba(129, 140, 248, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'border-beam': 'border-beam 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(0,240,255,0.6))' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 10% 20%, rgba(0, 240, 255, 0.08) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(129, 140, 248, 0.08) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
