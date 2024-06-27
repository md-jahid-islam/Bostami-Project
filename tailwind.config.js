/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'normal-text': '#ffffff',
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      'Poppins': [ "Poppins", "sans-serif;"],
     
    }
   
  },
  plugins: [],
}