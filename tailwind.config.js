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
        'secondary': '#eeeeee',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
