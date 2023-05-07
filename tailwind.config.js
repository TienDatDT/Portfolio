/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,.4), 1px,  #fff 20%);'
      }
    },
  },
  plugins: [],
}
