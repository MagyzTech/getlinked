/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient":
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
      colors: {
        primary: "#D434FE",
        secondary: "#FF26B9",
        borderBrand: "rgba(255, 255, 255, 0.18)",
        forgroud: "rgb(21, 14, 40)",
        input: "rgba(255, 255, 255, 0.03)",
      },
    },
  },
  plugins: [],
};
