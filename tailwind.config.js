/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F8F0FE",
          100: "#EEDDFD",
          200: "#DCBBFC",
          300: "#CB99FA",
          400: "#BA77F9",
          500: "#A855F7",
          600: "#8815F4",
          700: "#6609BE",
          800: "#44067F",
          900: "#22033F",
        },
        blue: {
          50: "#F5FAFF",
          100: "#EBF4FF",
          200: "#D2E7FE",
          300: "#BEDCFE",
          400: "#AAD1FD",
          500: "#93C5FD",
          600: "#469BFC",
          700: "#0470EB",
          800: "#034A9B",
          900: "#012650",
        },
        grey: {
          50: "#EBEBEB",
          100: "#D9D9D9",
          200: "#B0B0B0",
          300: "#8A8A8A",
          400: "#636363",
          500: "#3C3C3C",
          600: "#303030",
          700: "#242424",
          800: "#171717",
          900: "#0D0D0D",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    utils: true,
    themes: [
      {
        main: {
          primary: "#F2E5E5",
          secondary: "#E8C4C4",
          accent: "#CE7777",
        },
      },
    ],
    base: false,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
