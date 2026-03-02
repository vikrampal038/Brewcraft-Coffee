/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D46c11",
        cream: "#FDFCF8",
        "soft-brown": "#A68966",
        "deep-coffee": "#3D2B1F",
        "background-light": "#F9F7F2",
        "background-dark": "#221810",
        
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
