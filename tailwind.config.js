/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ['Roboto','sans-serif'],
      },
        colors: {
          'firstColor' : '#9eeacd',
          
          'primaryColor': {
            50 : 'EDFCF6',
            100 : '#d4f7e8',
            200 : '9EEACD',
            300 : '77DEBD',
            400 : '40C7A1',
            500 : '1DAC88',
            600 : '108B6F',
            700 : '0D6F5B',
            800 : '#0d5849',
            900 : '0B493D',
            950 : '#052923'
          }
        },
    },
  },
  plugins: [],
}

