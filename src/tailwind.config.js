module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
