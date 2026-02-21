/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",
        cream: "#FDFCF8",
        "soft-brown": "#A68966",
        "deep-coffee": "#3D2B1F",
        "background-light": "#F9F7F2",
        caramel: "#C68F5D",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
