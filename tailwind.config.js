/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        circusPurple: "#4c1d95",
        circusPink: "#db2777",
      }
    },
  },
  plugins: [],
}