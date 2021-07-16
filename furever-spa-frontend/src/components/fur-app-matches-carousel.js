import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('fur-app-matches-carousel', class AppVideo extends LitElement {
  constructor(){
    super()    
  }

 

  render(){    
    return html`

    <div id="home" class="small-container" style="  position: relative;
    min-height: 100vh;">
    <div id="content-wrap" style="padding-bottom: 2.5rem; ">
        <navbar/>
        <div>{{ currentUser }}</div>
        <matchesCards/>        
      </div>
      <blueFooter/>
    </div>