module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'dist/css/build/*.css',
    dest: 'dist/css/prefixed/'
  }
}
