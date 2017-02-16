var path = require('path');

// webpack + plugins
var webpack = require('webpack');

// local config
var root = path.resolve(__dirname, '../');

module.exports = {
  entry: [
    path.resolve(root, 'src/main.js')
  ],

  output: {
    path: path.resolve(root, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  module: {
    // noParse: /jquery|lodash/,

    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                css: 'vue-style-loader!css-loader', // <style>
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(root, 'src'),
          path.resolve(root, 'test')
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.resolve(root, 'static', 'img/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.resolve(root, 'static', 'fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      }
    ]
  }
}
