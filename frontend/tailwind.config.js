/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
     
      colors: {
        seaGreen : "#34C37C",
        seaBlue : "#006994",
      },
      backgroundImage: {
        'hero-image': "url('/assets/Wave.jpg')"
      }
    },
    
  },
  plugins: [],
}

