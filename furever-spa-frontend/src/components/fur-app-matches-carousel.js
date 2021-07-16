import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('fur-app-matches-carousel', class AppMatche extends LitElement {
  constructor(){
    super()    
  }

 

  render(){    
    return html`
    <style>
    #home {
      min-height: 100vh;
      background-color: #EBDAD1;
      overflow: hidden;
    }
  
    button {
      background-color: #FFFBF8;
      border-radius: 40px;
      height: 5vh;
      width: 10vw;
      border-color: #f2a2b1;
      margin-bottom: 30px;
    }
    </style>

    <div id="home" class="small-container" style="  position: relative;
    min-height: 100vh;">
    <div id="content-wrap" style="padding-bottom: 2.5rem; ">
        <navbar/>
        <div>{{ currentUser }}</div>
        <matchesCards/>        
      </div>
      <blueFooter/>
    </div>
`
  }
})
