/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yatra: ['"Yatra One"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },

      screens: {
        xs: "280px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
