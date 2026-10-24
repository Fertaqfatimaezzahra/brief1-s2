/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  theme: {
    extend: {
      // Thème NEUTRE de départ.
      // TODO (Partie 1) : remplacez ces valeurs par les couleurs et les polices de votre univers.
     colors: {
  brand: {
    DEFAULT: "#DC2626",
    dark: "#991B1B",
    light: "#FEE2E2",
  },
  ink: "#172033",
  muted: "#64748B",
  ground: "#FFF7ED",
  line: "#CBD5E1",
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
