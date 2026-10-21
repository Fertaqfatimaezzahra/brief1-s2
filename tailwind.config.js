/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  theme: {
    extend: {
      // Thème NEUTRE de départ.
      // TODO (Partie 1) : remplacez ces valeurs par les couleurs et les polices de votre univers.
      colors: {
        brand: {
          DEFAULT: "#395377",
          dark: "#374151",
          light: "#E5E7EB",
        },
        ink: "#a02b83",
        muted: "#254787",
        ground: "#EDEFF3",
        line: "#395388",
      },
      fontFamily: {
        display: ["Arial", "sans-serif"],
        body: ["Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
