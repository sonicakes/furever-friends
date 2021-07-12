import App from './App.js'

// components (custom web components)
import './components/fur-app-header'

// styles
import './scss/master.scss'

// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})

import Vue from "vue";
import Navbar from "./components/Navbar.vue";

// The following creates a new instance of the component and puts it anywhere
// a element has a data-vue-component="navbar" attribute.
document
  .querySelectorAll("[data-vue-component=navbar")
  .forEach((element) => {
    new Vue(Navbar).$mount(element);
  });