/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "black-100": "#000000",
          "black-90": "#101010",
          "white-100": "#FFFFFF",
          "white-90": "#FAFAFA",
          "gray-80": "#F1F1F1",
          "gray-100": "#CFCFCF",
          "gray-90": "#979797",
        },
        secondary: {
          "brown-100": "#D87D4A",
          "peach-90": "#FBAF85",
          "red-100": "#CD2C2C",
        },
      },
      backgroundColor: {
        "white-90": "#FAFAFA",
        "black-80": "#191919",
        "brown-100": "#D87D4A",
        "peach-90": "#FBAF85",
      },
      backgroundImage: {
        headphoneBg: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
