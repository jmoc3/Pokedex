/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      width: {
        'vmin': '20vmin',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms'
      },
      translate: {
        '2/10': '22%',
      },
      inset: {
        '11/100': '10%',
      },
      screens: {
        '1830': '1830px',
        '1600': '1600px',
      },
    },
  },
  plugins: [],
}
