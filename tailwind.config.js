/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1440px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
    },
    extend: {
      backgroundImage: {
        // 'hero': "url('./src/images/MiniQ.JPG')",
       },
    colors: {
      primary: "hsl(34, 100%, 96%)",
      secondary: "#13110C",
      tertiary: "hsl(48, 93%, 77%)",
      college: "hsl(43, 99%, 64%)",
      padrino: "#FECB4A",
    },
      fontFamily: {
        primary: "Konnect",
        secondary: "Hitchcut",
        tertiary: "VivaLa",
      },
    },
  },
  plugins: [],
}