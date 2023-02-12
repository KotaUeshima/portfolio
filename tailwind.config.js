/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01aea8",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      japanese: ["Noto Sans JP"],
    },
  },
  plugins: [],
};
