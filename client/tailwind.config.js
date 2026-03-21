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
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Nunito", "ui-serif", "Georgia"],
        mono: ["Iosevka Charon Mono", "ui-monospace", "SFMono-Regular"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
