/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins": ["Poppins", 'sans-serif'],
        "montserrat":["Montserrat",'sans-serif'],
        "opensans":["Open Sans", 'sans-serif'],
        "madimi-one":["Madimi One", 'sans-serif']
      }
    },
  },
 
};
