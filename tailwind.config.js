/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: 'rgb(242, 243, 244)',  // or use 'rgb(242, 243, 244)'
        darkBackground: 'rgb(26, 24, 31)'
      },
    },
  },
  plugins: [],
}

