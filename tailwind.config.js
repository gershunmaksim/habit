/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        mainBlack: "#000000",
        white1: "#FFFFFF",
        green1: "#334B37",
        blue1: "#0000FF",
        orange1: "#F6D790",
      },
      fontSize: {
        "12": [12, { lineHeight: "15px" }],
        "16": 16,
        "22": 22,
        "30": 30,
      },
    },
  },

  plugins: [],
};