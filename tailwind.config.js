/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // "Teacher's notebook" palette — warm, credible, not childish.
        cream: {
          50: "#FDFBF6",
          100: "#FBF6EC",
          200: "#F3EBDA",
        },
        ink: {
          50: "#E9EFEC",
          200: "#9FB8AE",
          400: "#4C6E62",
          600: "#2B4A40",
          800: "#1F3B33",
          900: "#16302A",
        },
        coral: {
          100: "#FBE1D3",
          300: "#F0AB86",
          500: "#E17A4C",
          600: "#C5613A",
        },
        gold: {
          400: "#E3B23C",
          500: "#CE9A26",
        },
        charcoal: "#2A2620",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'General Sans'", "'Inter'", "system-ui", "sans-serif"],
        hand: ["'Caveat'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "notebook-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 34px, rgba(43,74,64,0.08) 35px)",
      },
      keyframes: {
        "draw-underline": {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
      },
      animation: {
        "draw-underline": "draw-underline 1.2s ease-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
