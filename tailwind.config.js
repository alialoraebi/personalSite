/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'xs': '430px', 
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'custom': ['IBM Plex Mono', 'monospace']
      },
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
  plugins: [
    require('tailwind-scrollbar')
  ],
};