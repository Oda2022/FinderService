/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 20px 50px -10px rgba(2, 12, 27, 0.7)",
        titleShadow: "1px 5px 3px #000000",
      },
      colors:{
        bodyColor: "#d5d6da",
        activeColor: "#fffa64",
      },
      backgroundImage: {
        'herohome2': "url('../public/assets/images/hero.jpg')",
        'herohome': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  ],
}