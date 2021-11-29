import Vue from 'vue'
import About from './views/About.vue';
import Mapz from './views/Mapz.vue';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/about': About,
  '/map': Mapz,
  '/notfound': NotFound
}

new Vue({
  vuetify,
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})