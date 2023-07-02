/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sunrise: '#FFB500',
        canyon: '#FF7F39',
        cardinal: '#CC004C',
        violet: '#6460AA',
        yellowRose: '#FFD03E',
        charcoal: {
          10: '#EEEEF1',
          25: '#D3D6DC',
          50: '#A8ACB9',
          75: '#7D8496',
          100: '#515A72',
          full: '#3F475A',
        },
      },
      fontSize: {
        minus2: ['14px', '22px'],
        minus1: ['16px', '26px'],
        base: ['18px', '24px'],
        plus1: ['20px', '26px'],
        plus2: ['24px', '30px'],
      },
      flexBasis: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '60p': '60%',
      },
      flex: {
        '0-0-auto': '0 0 auto',
        '10p': '0 0 10%',
        '14p': '0 0 14%',
        '24p': '0 0 24%',
      },
    },
  },
  plugins: [],
};

