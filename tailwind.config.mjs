/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(coral|tangerine|sun|leaf|mint|azure|grape|bubble)(-soft)?$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1D1A2F", soft: "#4A4560" },
        paper: { DEFAULT: "#FFF6E5", deep: "#FBE7C6" },
        coral: { DEFAULT: "#FF5D5D", soft: "#FFE1DC" },
        tangerine: { DEFAULT: "#FF9F1C", soft: "#FFEBCF" },
        sun: { DEFAULT: "#FFD23F", soft: "#FFF3BF" },
        leaf: { DEFAULT: "#7BD389", soft: "#E1F6E4" },
        mint: { DEFAULT: "#2EC4B6", soft: "#D3F4F0" },
        azure: { DEFAULT: "#3A86FF", soft: "#DCE8FF" },
        grape: { DEFAULT: "#8338EC", soft: "#ECDFFF" },
        bubble: { DEFAULT: "#FF5CA8", soft: "#FFE0EF" },
      },
      fontFamily: {
        display: ["var(--font-press)", "system-ui", "sans-serif"],
        pixel: ["var(--font-body)", "system-ui", "sans-serif"],
        term: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        px: "6px 6px 0 0 #1D1A2F",
        "px-sm": "3px 3px 0 0 #1D1A2F",
        "px-lg": "10px 10px 0 0 #1D1A2F",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
      });
    },
  ],
};
