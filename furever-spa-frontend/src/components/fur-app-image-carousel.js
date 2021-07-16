import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

customElements.define('fur-app-image-carousel', class AppImage extends LitElement {
  constructor(){
    super()    
  }

 

  render(){    
    return html`
    <style>
   
    h3 {
    font-family: 'Otomanopee One', sans-serif;
    }
    </style>

    <div style="width: 100vw; max-width: 100vw; padding-top: 50px; padding-bottom: 20px;" >
    <h3 style="text-align:center; padding-bottom:10px;">ANIMALS WAITING FOR YOU</h3>
    <VueSlickCarousel :arrows="true" :slidesToShow="3" :speed="500" :variableWidth="true" :dots="true" :centerMode="true">
      <div class="card"><img src="/images/cat-1.jpg" height="350px" style="border-radius: 10px;"></div>
      <div class="card"><img src="/images/dog-1.jpg" height="350px"></div>
      <div class="card"><img src="/images/cat-2.jpg" height="350px"></div>
      <div class="card"><img src="/images/dog-2.jpg" height="350px"></div>
      <div class="card"><img src="/images/resized/cat-3.jpg" height="350px"></div>
      <div class="card"><img src="/images/resized/dog-3.jpg" height="350px"></div>
      <div class="card"><img src="/images/resized/cat-4.jpg" height="350px"></div>
      <div class="card"><img src="/images/resized/dog-4.jpg" height="350px"></div>
      <div class="card"><img src="/images/resized/cat-5.jpg" height="350px"></div>
      <div class="card"><img src="/images/resized/dog-5.jpg" height="350px"></div>
    </VueSlickCarousel>
  </div>

  `

}

})
