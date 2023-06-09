/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        lightgrey: "#78787A",
        grey: "#25242A",
        shadowgrey: "#302F37",
        darkgrey: "#1A191E",
        bggrey: "#0e0d12",
        blue: "#45C1D6",
        darkblue: "#289FB4",
        linkblue: "#2D649D",
        orange: "#FF6B2F",
        green: "#76CD54",
        yellow: "#FEEB47",
      },
      gridTemplateRows: {
        11: "repeat(11, minmax(0, 1fr))",
      },
      minHeight: {
        fullScreen: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
