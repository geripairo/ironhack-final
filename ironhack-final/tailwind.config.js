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
        "light-grey": "#f1f1f1",
        "light-green": "#6D856B",
        "skin-pink": "#F38080",
        "red": "#e5383b",
        "success": "#80ed99",
      },
      backgroundImage: {
        'skipping': "url('./src/assets/images/skipping.png')",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Silkscreen: ["Silkscreen"]
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
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
