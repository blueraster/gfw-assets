'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');
var S3Plugin = require('webpack-s3-plugin');

// Importing dot env configuration
require('dotenv').config({silent: true});

module.exports = {

  context: path.join(__dirname, 'src'),

  entry: [
    'babel-polyfill',
    './index.html',
    './main.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'gfw-assets.nightly.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.html$/, loader: 'file?name=[name].[ext]'},
      {test: /\.tpl$/, loader: 'ejs-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
      {test: /\.css$/, loader: 'style!raw'},
      {test: /\.(eot|ttf|woff2|woff)$/, loader: 'url-loader?prefix=fonts/&context=./fonts'},
      {test: /\.png$/, loaders: ['file?name=i/[hash].[ext]']}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        drop_debugger: true,
        drop_console: true
      },
      comments: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new S3Plugin({
      directory: 'dist',
      exclude: /.*\.html$/,
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
      },
      s3UploadOptions: {
        Bucket: 'beta.blueraster.io/gfw-assets/static'
      }
    })
  ],

  sassLoader: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },

  postcss: function() {
    return [autoprefixer];
  }

};
