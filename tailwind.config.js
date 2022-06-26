/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'n-orange' :'hsl(26,100%,55%)',
        'n-pale-orange' :'hsl(25,100%,94%)',
        'n-dark-blue' :'hsl(220, 13%,13%)',
        'n-dark-grayish-blue' :'hsl(219,9%,45%)',
        'n-grayish-blue' :'hsl(220,14%,75%)',
        'n-light-grayish-blue' :'hsl(223,64%,98%)',
        'n-white' :'hsl(0,0%,100%)',
        'n-bg-black': 'hsl(0,0%,0%)'
      }
    },
  },
  plugins: [],
}
