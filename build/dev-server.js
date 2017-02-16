var yargs = require('yargs');
var opn = require('opn');
var path = require('path');
var express = require('express');
var webpack = require('webpack');

// pargs arguments
var argv = yargs.argv;

var webpackConfig = process.env.NODE_ENV === 'test'
  ? require('./webpack.test.conf')
  : require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || 8080;
var uri = 'http://localhost:' + port;

/**
* compiler setup
*/
var compiler = webpack(webpackConfig);

// serve webpack bundle output
var webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  stats: {
    colors: true
  }
});

// compilation error display
var webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, callback) {
    webpackHotMiddleware.publish({
      action: 'reload'
    });

    callback();
  });
});

/**
* app setup
*/
var app = express();

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

// serve pure static assets
app.use(express.static('public'));

// listen
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  // Usage:
  //  yarn dev -- --open
  if (argv.open) {
    opn(uri);
  }
})
