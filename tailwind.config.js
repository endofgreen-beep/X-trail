/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#1a1a1a', // Deep graphic/black
        secondary: '#f5f5f7', // Apple light gray
      }
    },
  },
  plugins: [],
}