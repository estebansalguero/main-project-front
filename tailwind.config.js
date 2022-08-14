const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      em_black: "#010000",
      em_orange: "#fe8c0c",
      em_orange_hover: "#c96f0a",
      em_yellow: "#ffde02",
      em_yellow_hover: "#c2a900",
      em_white: "#f5f4f2",
      em_white_hover: "#d6d6d6",
      em_brown: "#774108",
      em_brown_hover: "#522d07",
      em_gray: "#727272",
      em_gray_hover: "#666666",
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
