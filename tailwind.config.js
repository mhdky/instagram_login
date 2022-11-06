/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'black-transperent': '#00000055',
        'form-bg': '#fbfbfb',
        'form-border': '[#d0d0d0]',
      },
      screens: {
        'mobile': '400px'
      }
    },
  },
  plugins: [],
}
