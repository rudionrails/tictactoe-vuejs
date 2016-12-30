import Vue from 'vue';
import Router from 'vue-router';

import Game from '../components/pages/Game';
import About from '../components/pages/About';

Vue.use(Router);

/* eslint-disable no-new */
export default new Router({
  mode: 'history',

  routes: [
    { name: 'root', path: '/', component: Game },
    { name: 'about', path: '/about', component: About },
  ],
});
