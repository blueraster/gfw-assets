module.exports = {
  dist: {
    src: [
      'src/js/libs/*.js',
      'src/js/init.js',

      'src/js/app/urls.js',

      'src/js/app/my_gfw/User.js',
      'src/js/app/my_gfw/LoginModal.js',
      'src/js/app/my_gfw/LoginButton.js',

      'src/js/app/feedback.js',
      'src/js/app/menu.js',
      'src/js/app/menujson.js',

      'src/js/app/app.js',
      'src/js/app/loader.js',
    ],
    dest: 'dist/js/production.js'
  }
};
