import App from './App.js'

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

// components (custom web components)
// import './components/fur-app-header'

// styles
import './scss/master.scss'

Vue.use(FontAwesomeIcon)
Vue.use(BootstrapVue) 
Vue.use(VueSlickCarousel)

// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})


