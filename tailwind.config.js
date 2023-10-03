/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      colors: {
        lacivert: "#252B42",
        white: "#ffffff",
        gray: "#737373",
        blue: "#23A6F0",
        gray100: "#FAFAFA",
        black: "#000000",
        green: "#23856D",
      },
      background: {
        productbg: "url('companents/images/backs.png')",
      },
      // listStyleImage: {
      //   checkmark: 'url("companents/checkmark.svg")',
      // },
    },
  },
  plugins: [],
};
