/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [
    "motion",
    "transform",
    "duration-500",
    "rotateY",
    "backfaceVisibility",
    "fade-right",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#2a3240",
        secundaria: "#88005b",
        DarkP1: "#E1BFD6",
        DarkP2: "#DCD6D1",
        DarkA1: "#CACCC4",
        DarkA2: "#666F7D",
        DarkA3: "#A9B8B6",
        DarkA4: "#6A7276",
        Destaque: "#FF0000",
        primary90: "#FF2F00",
        primary80: "#F9370B",
        primary70: "#FF481F",
        neutral10: "#E5E5E5",
        neutral80: "#333333",
        neutral90: "#1A1A1A",
      },
      fontFamily: {
        principal: ["Georama", "sans-serif"],
        destaque: ["Poppins", "sans-serif"],
        secundaria: ["Inter", "serif"],
      },
    },
  },
  plugins: [typography],
};
