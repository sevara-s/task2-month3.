/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        text: "#333",
        prime1: "#ecba00",
        prime2: "#ffcd11",
        borderinputfocus: "#c0c0c0",
        dark: "#444",
        placeholder: "#aeaeae",
        borderinput: "#d1d1d1",
        background: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
