/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      flexGrow: {
        '2': '2',
      },
      colors: {
        'custom-red': '#74001d',
        'custom-green': '#296111',
        'custom-blue': '#084d8c',
      },
    },
  },
  variants: {},
  plugins: [],
};