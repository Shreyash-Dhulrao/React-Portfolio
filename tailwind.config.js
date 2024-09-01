/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        Giarek: ['Bodoni Moda'],
        Raleway: ['Raleway']
      }
    },
  },
  plugins: [],
}

