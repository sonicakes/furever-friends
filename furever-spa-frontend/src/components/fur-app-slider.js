import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'
import Glide from '@glidejs/glide'


customElements.define('fur-app-slider', class AppFooter extends LitElement {
  constructor(){
    super()    
  }
  

  render(){    
    return html`

    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide"><img src="/images/cat-1.jpg" height="350px" style="border-radius: 10px;"></li>
          <li class="glide__slide"><img src="/images/dog-1.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/cat-2.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/dog-2.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/resized/cat-3.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/resized/dog-3.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/resized/cat-4.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/resized/dog-4.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/resized/cat-5.jpg" height="350px"></li>
          <li class="glide__slide"><img src="/images/resized/dog-5.jpg" height="350px"></li>
        </ul>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
    </div>
  
    `

}

})