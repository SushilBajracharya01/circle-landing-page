/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '25': '#f5fafe',
          '50': '#edf7ff',
          '100': '#d6eaff',
          '200': '#b5ddff',
          '300': '#83c8ff',
          '400': '#48aaff',
          '500': '#1e83ff',
          '600': '#0661ff',
          '700': '#004cff',
          '800': '#083bc5',
          '900': '#0d379b',
          '950': '#0e235d',
        },
        secondary: {
          400: "#FFB531",
          500: "#FFA300",
          700: "#CC8300",
        },
        success: {
          500: "#40A140",
          800: "#27641B",
        },
        danger: {
          500: "#A14040",
          800: "#641B1B",
        },
      }
    },
    fontFamily: {
      'primary': ['Asap', 'sans-serif'],
      'heading': ['Josefin Sans', 'sans-serif'],
      'secondary': ['Inder', 'sans-serif'],
      'generic': ['Be Vietnam Pro', 'sans-serif'],
    }
  },
  plugins: [],
}