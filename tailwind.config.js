/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#01AEA8',
      },
    },
    fontFamily: {
      japanese: ['Noto Sans JP'],
    },
  },
  plugins: [],
}
