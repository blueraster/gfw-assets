// Karma configuration
var webpack = require('webpack');

module.exports = function(config) {

  config.set({

    browsers: ['PhantomJS'],

    reporters: ['nyan'],

    basePath: './',

    frameworks: ['mocha', 'chai', 'sinon'],

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
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.json$/, loader: 'json'},
          {test: /\.html$/, loader: 'file?name=[name].[ext]'},
          {test: /\.tpl$/, loader: 'ejs-loader'},
          {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-mocha'),
      require('karma-sinon'),
      require('karma-chai'),
      require('karma-nyan-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]

  });

};
