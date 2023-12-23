/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5A83C",
        secondary: "#E26E33",
        dark: "#090100",
        lightDark: "#161E26",
        darkGray: "#2D2D2D",
        milk: "#F2F2F2",
      },
      fontFamily: {
        antonion: "Antonio",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
