/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002c54",
        secondary: "#c5001a",
        highlight: "#e53f55",
      },
      fontFamily: {
        main: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
