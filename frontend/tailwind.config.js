/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        'tup-green': '#1B8E5F',
        'tup-soft-green': '#E9F5EF',
        'tup-navy': '#0A1D2D',
        'tup-bg': '#F8FAFB',
      },
      borderRadius: {
        'handbook': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};