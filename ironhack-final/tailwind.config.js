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
        "pink": "#f38080",
        "logo-font-color": "#1A423F",
        "light-grey": "#f1f1f1",
        "light-green": "#6D856B",        
        "almost-white": "#fff6ee",
        "yellow": "#FFCD07",
        "orange": "#FFA00A",
        "green-low":"#6D856B",
        "green-strong": "#1A423F"
      },
      backgroundImage: {
        'skipping': "url('./src/assets/images/skipping.png')",
      }
    },
    fontFamily: {
      Silkscreen: ["Silkscreen"],
      Roboto: ["Roboto"],
      Lora: ["Lora"]
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
      6: '5.3rem',
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
