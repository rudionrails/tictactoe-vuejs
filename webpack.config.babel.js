import path from 'path';
import webpack from 'webpack';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import WebpackManifestPlugin from 'webpack-manifest-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// see: https://github.com/webpack/webpack/issues/2537
const isProd = process.argv.indexOf('-p') !== -1;

const config = {
  context: __dirname,

  // Don't attempt to continue if there are any errors in production
  bail: isProd,

  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',

  entry: [
    './src/main.js',
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isProd ? '[hash]/[name].js' : '[name].js',
  },

  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  module: {
    // noParse: /jquery|lodash/,

    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Project is running at http://localhost:8080'],
        notes: ['Run linter with: yarn lint', 'Run tests with: yarn test'],
      },
    }),
  ],

  // from `webpack-dev-server` module
  devServer: {
    noInfo: true,
    quiet: true,

    // Shows a full-screen overlay in the browser when there
    // are compiler errors or warnings.
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

if (isProd) {
  config.plugins.push(
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new WebpackManifestPlugin(),

    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),

    // compress
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      minRatio: 0.8,
    }),
  );
}

module.exports = config;
