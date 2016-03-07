module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['src/js/**/*.js'],
    tasks: ['concat'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['src/css/*.scss', 'src/css/modules/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['src/images/**/*.{png,jpg,gif}', 'src/images/*.{png,jpg,gif}'],
    tasks: ['sprite:all'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./dist/**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
};
