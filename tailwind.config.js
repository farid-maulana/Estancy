module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6078F8',
        'primary-300': '#DFEDFF',
        'primary-100': '#E9EFF6',
        'secondary': '#F48280',
      },
      fontFamily: {
        'Poppins': 'Poppins'
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      }
    },
  },
  plugins: [],
}