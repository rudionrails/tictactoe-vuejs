import Vue from 'vue';
import { sync } from 'vuex-router-sync';

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
