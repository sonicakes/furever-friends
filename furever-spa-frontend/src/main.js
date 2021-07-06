import Vue from 'vue';
import Home from './components/Home.vue';
import { createRouter } from './Router.js';
import VueSlickCarousel from 'vue-slick-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


  const router = createRouter();
  const app = new Vue({
    el: '#root',
    router,
    render: h => h(Home)
  }); 