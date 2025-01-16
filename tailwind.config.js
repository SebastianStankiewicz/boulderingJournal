/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura-bold"]
      },
      colors: {
        primary: {
          100: "#E9F5DB",
          200: "#DCEBCA",
          300: "#CFE1B9",
          400: "#C2D5AA",
          500: "#B5C99A"
        },
        successGreen: {
          100: "#4CAF50",
        },
        regularFont: {
          100: "#1b4332"
        },
        buttonColor:{
          100: "#A855F7"
        }
      },
    

    },
  },
  plugins: [],
}