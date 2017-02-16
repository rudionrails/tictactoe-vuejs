var path = require('path');

// webpack + plugins
var webpack = require('webpack');
var merge = require('webpack-merge');

// local config
var webpackBaseConfig = require('./webpack.base.conf');

var webpackConfig = merge(webpackBaseConfig, {
  // target: 'node',
  devtool: 'inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    }),
  ]
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
