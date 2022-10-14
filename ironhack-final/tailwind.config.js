/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-purple": "#b79ced",
        "background-pink": "#efd9ce",
        "logo-font-color": "#1A423F",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Silkscreen: ["Silkscreen"]
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      2: '1.563rem',
      3: '1.953rem',
      4: '2.441rem',
      5: '3.052rem',
      6: '6rem',
      7:'8rem'
    },
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
