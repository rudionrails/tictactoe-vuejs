/* eslint-disable */
require('eventsource-polyfill');
var webpackHotClient = require('webpack-hot-middleware/client?reload=true');

webpackHotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
