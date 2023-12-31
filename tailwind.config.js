/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        dark: '#272643',
        lightGreen: '#BAE8E8',
        white: "#fff",
        aqua: "#e3f6f5",
        lightBlue: "#2c698d",
        gray: "#888a8b",
        "black-second": "#222"
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
