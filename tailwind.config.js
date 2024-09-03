/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: 'rgb(242, 243, 244)',  // or use 'rgb(242, 243, 244)'
      },
    },
  },
  plugins: [],
}
