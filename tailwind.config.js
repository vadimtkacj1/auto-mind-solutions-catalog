/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#0070FF',
          light: '#4D94FF',
          dark: '#0056D6',
          darker: '#003D99',
        },
        // Accent Colors
        accent: {
          DEFAULT: '#00E690',
          light: '#1AFFAA',
          dark: '#00B574',
          darker: '#008A58',
        },
        // Dark Palette
        dark: {
          DEFAULT: '#0A0F1E',
          soft: '#1A2035',
          navy: '#020510',
          'navy-light': '#0C1429',
        },
      },
      fontFamily: {
        sans: ['Noto Sans Hebrew', 'Assistant', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
    },
  },
  plugins: [],
}
