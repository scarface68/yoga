/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#24b257",
      },
      fontFamily: {
        Baskerville: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
