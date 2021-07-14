import Vue from 'vue'
import App from './App.js'


// components (custom web components)
import './components/fur-app-header'
<<<<<<< HEAD
import Home from './components/Home.vue'
import frontVideo from './components/Video.vue'
=======
import './components/fur-app-video'
>>>>>>> StevenSPA

// styles
import './scss/master.scss'


// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})

<<<<<<< HEAD
new Vue({ render: createElement => createElement(Home) }).$mount('#app');
new Vue({ render: createElement => createElement(frontVideo) }).$mount('#app');
=======

>>>>>>> StevenSPA
