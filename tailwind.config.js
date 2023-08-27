module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red' : '#E53D00',
        'white' : '#F4FFFD',
        'light-red' : '#ED6E44',
        'black' : '#555E65',
        'yellow' : '#F6AE28',
        'pizza' :'#E53D00'
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