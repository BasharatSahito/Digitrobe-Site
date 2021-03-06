module.exports = {
  // mode: 'jit',
  purge: [
    './*.html',
    './*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    margin: ['hover']
  },
  plugins: [],
}
