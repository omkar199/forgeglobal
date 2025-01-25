import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: { min: '360px', max: '743px' }, // for mobile
        lg: { min: '744px', max: '1439px' }, // for tablet
        xl: { min: '1440px' }, // for desktop
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-green': 'rgb(22, 163, 74)',
        'custom-green-light': 'rgba(34, 197, 94, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
