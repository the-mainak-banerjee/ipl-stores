/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        source: "'Source Sans Pro', sans-serif"
      },
      colors: {
        primary: '#453227',
        secondary: '#F7CA00',
        secondaryHover: '#fedc44',
        ternary: '#DADADA'
      }
    },
  },
  plugins: [],
}

// F3A847