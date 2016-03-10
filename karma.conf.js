// Karma configuration
var webpack = require('webpack');

module.exports = function(config) {

  config.set({

    browsers: ['PhantomJS'],

    singleRun: true,

    reporters: ['nyan'],

    basePath: './',

    frameworks: ['mocha', 'chai'],

    files: [
      'test/specs/*_spec.js'
    ],

    preprocessors: {
      'test/specs/*_spec.js': ['webpack']
    },

    webpack: {
      resolve: {
        extensions: ['', '.js']
      },
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-nyan-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]

  });

};
