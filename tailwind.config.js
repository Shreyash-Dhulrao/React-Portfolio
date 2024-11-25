/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        Mona:["Mona Sans"],
        Imperial: ["Imperial Script"],
        Antic: ["Antic Didone"],
        Petit: ["Petit Formal Script"],
        Plaster: ["Plaster"]
      }
    },
  },
  plugins: [],
}

