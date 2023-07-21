/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero': "url('./src/images/MiniQ.JPG')",
       },
    colors: {
      primary: "hsl(34, 100%, 96%)",
      secondary: "#13110C",
      tertiary: "hsl(48, 93%, 77%)",
      college: "hsl(43, 99%, 64%)",
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