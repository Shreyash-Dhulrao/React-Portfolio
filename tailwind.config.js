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
        Giarek: ['Antic Didone'],
        Raleway: ['Raleway']
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        '4xl': '2.6rem',}
    },
  },
  plugins: [],
}

