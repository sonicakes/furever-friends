import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('fur-app-footer', class AppVideo extends LitElement {
  constructor(){
    super()    
  }

 

  render(){    
    return html`
    <style>
    #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.5rem;    
        height: 50px;   
        width: 100%;
        background-color: #C4F2EE;
        text-align: center;
    }

    #footer p {
        padding-top: 10px;
        margin: auto;
        vertical-align: middle;
        height: 50px;
    }
    </style>

    <div id="footer">
    <p>Proudly presented by KRESS Studios. Copyright 2021</p>
    </div>


    `

}

})