/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tunehive: {
          100: '#dbf7dd',
          200: '#c9f2cd',
          300: '#b8eebe',
          400: '#a5e9ae',
          500: '#92e59f',
          600: '#7de08f',
          700: '#66db80',
          800: '#4bd571',
          900: '#21d061',
        },
      }
    },
  },
  plugins: [],
}
