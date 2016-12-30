import Vue from 'vue';
import { sync } from 'vuex-router-sync';

// ES2015+ polyfills
import 'core-js/fn/array/fill';

// style loader
import './assets/main.css';

// local modules
import router from './router';
import store from './store';
import App from './App';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
