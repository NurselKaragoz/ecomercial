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
        gray100: "#ECECEC",
        blue100: "#96e8fa",
        green100: "#aaebd6",
        blue200: "#2A7CC7",
        yellow: "#F3CD03",
        red: "#E74040",
        blue300: "#2D8BC0BF",
      },
      background: {
        productbg: "url('companents/images/backs.png')",
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin.cjs")],
};
