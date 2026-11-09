/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: { DEFAULT: '#7546E8', soft: '#E9E1FC' },
        pink: { DEFAULT: '#F45B9A', soft: '#FDE3EE' },
        coral: { DEFAULT: '#FF725E', soft: '#FFE4DE' },
        butter: { DEFAULT: '#F9D978', soft: '#FDF1C9' },
        cobalt: { DEFAULT: '#3157D5', soft: '#DFE6FA' },
        cream: { DEFAULT: '#FFF8ED', deep: '#F6EADB' },
        plum: { DEFAULT: '#28152F', soft: '#4A3352', muted: '#6B5470' },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        mega: ['clamp(4.2rem, 10.5vw, 10.5rem)', { lineHeight: '0.88', letterSpacing: '-0.03em' }],
        giant: ['clamp(2.6rem, 6.6vw, 6.4rem)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        spin: { to: { transform: 'rotate(360deg)' } },
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
