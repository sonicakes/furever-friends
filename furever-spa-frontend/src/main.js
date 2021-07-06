import Vue from 'vue';
import Home from './components/Home.vue';
import { createRouter } from './Router.js';
import VueSlickCarousel from 'vue-slick-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VueSlickCarousel)


  const router = createRouter;
  const app = new Vue({
    el: '#root',
    router,
    render: h => h(Home)
  }); 