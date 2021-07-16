import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('fur-app-video', class AppVideo extends LitElement {
  constructor(){
    super()    
  }

 

  render(){    
    return html`
    <style>
    #myVideo {
        position:static;
        width: 100vw;
    }

    #text {
        color: white;
        position:absolute;
        top:40vh;
        margin:auto;
        width:100%;
        text-align:center;
    }
    </style> 
    
    <div>
    <video loop="true" autoplay="autoplay" muted="true" id="myVideo">
        <source src="/images/video.mp4" type="video/mp4">
    </video>
    <h1 id="text">Find your pawfect match</h1>
    </div>
`

}

})