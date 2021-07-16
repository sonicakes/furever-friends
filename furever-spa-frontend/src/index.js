import App from './App.js'


// components (custom web components)
import './components/fur-app-header'
import './components/fur-app-video'
import './components/fur-app-slider'
import './components/fur-app-matches-carousel'
import './components/fur-app-footer'

// styles
import './scss/master.scss'


// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})

