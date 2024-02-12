/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        DarkBlue: 'hsl(233, 26%, 24%)',
        LimeGreen: 'hsl(136, 65%, 51%)',
        BrightCyan: 'hsl(192, 70%, 51%)',
        GrayishBlue: 'hsl(233, 8%, 62%)',
        LightGrayishBlue: 'hsl(220, 16%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

