module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#2c3e50',
        'navy-darker': '#26384a',
        'navy-lighter': '#34495E',
        'navy-very-light': '#485867',
        'highlight': '#ffb300',
        'primary': '#ffffff',
        'secondary': '#d7d7d7',
        'tertiary': '#9ca3af',
        'warning': '#e04848',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      minHeight: {
        '24': '6rem'
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [],
}
