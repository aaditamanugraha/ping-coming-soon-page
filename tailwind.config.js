/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      minWidth: {
        mobile: "23.438rem",
      },
      colors: {
        "primary-blue": "hsl(223, 87%, 63%)",
        "secondary-pale-blue": "hsl(223, 100%, 88%)",
        "secondary-light-red": "hsl(354, 100%, 66%)",
        "neutral-gray": "hsl(0, 0%, 59%)",
        "neutral-very-dark-blue": "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        libreFranklin: ['"Libre Franklin"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
