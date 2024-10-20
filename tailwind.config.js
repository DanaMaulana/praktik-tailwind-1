/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF9357", // orange
        abu: "#A8A8AB", // abu-abu
        dark: "#141414", // dark
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
