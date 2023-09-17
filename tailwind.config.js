/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#eb0a0d',
        secondary: '#110d0e',
        dark: '#110d0e',
    
      },
      screens: {
        '2xl': '1328px',
      },
    },
  },
  plugins: [],
}

