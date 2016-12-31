import Vue from 'vue';

// ES2015+ polyfills
import 'core-js/fn/array/fill';

// local modules
import store from './store';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
