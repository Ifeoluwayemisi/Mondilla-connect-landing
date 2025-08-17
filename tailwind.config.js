/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '20xl': '20rem',
      }
    },
  },
  plugins: [],
  
}

