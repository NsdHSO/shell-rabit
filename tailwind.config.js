/** @type {DefaultColors} */
let colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  plugins: [],
  theme: {
    screens: {
      s: '320px',
      sx: '375px',
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'red': '#ff0000',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary':'#263238',
      'secondary':'#FFB6C1',
      'white':'#FFFFFF',
      ...colors

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}

