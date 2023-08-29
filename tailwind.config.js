module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'red' : '#EF233C',
        'dark-red': '#D90429',
        'white' : '#F5F5F5',
        'light-red' : '#ED6E44',
        'black' : '#171215',
        'yellow' : '#F6AE28',
        'pizza' :'#EF233C'
      },
      screens: {
        'cel': {'max': '1100px'},
        'tiny': {'max': '500px'}
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}