module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f2f6f3',
          100: '#e6ede7',
          200: '#bfd0c2',
          300: '#99b39e',
          400: '#4d7754',
          500: '#013a0a',
          600: '#013409',
          700: '#012c08',
          800: '#012306',
          900: '#001d05',
        },
        'bark': '#8B4513',
        'leaf': '#228B22',
        'moss': '#ADDFAD',
        'sunlight': '#FFF8DC',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}