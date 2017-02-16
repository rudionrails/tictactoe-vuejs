var path = require('path');

// webpack + plugins
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');
var eslintFriendlyFormatter = require('eslint-friendly-formatter');

// local config
var webpackBaseConfig = require('./webpack.base.conf');
var root = path.resolve(__dirname, '../');

const host = 'http://localhost';
const port = '8080';

module.exports = merge(webpackBaseConfig, {
  entry: [
    path.resolve(__dirname, 'dev-client')
  ],

  // https://webpack.js.org/configuration/devtool/
  devtool: '#eval',

  devServer: {
    host,
    port,
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        include: [
          path.resolve(root, 'src'),
          path.resolve(root, 'test')
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFriendlyFormatter
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),

    new FriendlyErrors()
  ]
});
