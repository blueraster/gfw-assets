module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'dist/css/build/global.css': 'src/css/global.scss'
    }
  }
}
