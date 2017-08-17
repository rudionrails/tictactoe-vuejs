import Vue from 'vue';

// local modules
import store from './store';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
