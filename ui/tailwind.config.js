/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monteserret: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#0FC25D',
        input: '#1C1C24',
      },
    },
  },
  plugins: [],
};
