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
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.json$/, loader: 'json'},
          {test: /\.html$/, loader: 'file?name=[name].[ext]'},
          {test: /\.tpl$/, loader: 'raw!html-minify'},
          {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}
        ]
      }
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
