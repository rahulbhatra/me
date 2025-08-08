/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#141628",
        pink: "#FD4370",
        white: "#fff",
      },
      fontSize: {
        huge: "3rem",
        superBig: "2rem",
        big: "1.2rem",
        med: "1rem",
        small: "0.9rem",
        superSmall: "0.6rem",
      }
    },
  },
  plugins: [],
}