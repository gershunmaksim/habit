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
        gray1: "#4C5980",
        gray2: "#8E8E93",
      },
      fontSize: {
        "12": [12, { lineHeight: "15px" }],
        "14": 14,
        "16": 16,
        "18": [18, { lineHeight: "26px" }],
        "22": 22,
        "20": 20,
        "30": 30,
      },
     
      fontFamily: {
        sans400: "DMSans-Regular",
        sans500: "DMSans-Medium",
        sans600: "DMSans-SemiBold",
        sans700: "DMSans-Bold",
      },
      borderRadius: {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8, 
        "9": 9,
        "10": 10,
        "12": 12,
        "16": 16,
        "15": 15,
        "20": 20,
      },
      borderWidth: {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
      },
    },
  },

  plugins: [],
};