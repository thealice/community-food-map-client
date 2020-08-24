module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
