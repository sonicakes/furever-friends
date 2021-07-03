import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'
import moment from 'moment'

class EditProfileView {
  init(){
    console.log('EditProfileView.init')
    document.title = 'Edit Profile'    
    this.user = null
    this.render()    
    Utils.pageIntroAnim()
    this.getUser()    
  }

  async getUser(){
    try {
      this.user = await UserAPI.getUser(Auth.currentUser._id)      
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  async updateProfileSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')
    try {
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, formData)      
      delete updatedUser.password        
      this.user = updatedUser     
      Auth.currentUser = updatedUser
      this.render()
      Toast.show('profile updated')
    }catch(err){      
      Toast.show(err, 'error')
    }
    submitBtn.removeAttribute('loading')
  }

  render(){
    const template = html`
      <fur-app-header title="Edit Profile" user=${JSON.stringify(Auth.currentUser)}></fur-app-header>
      <div class="page-content">        
        ${(this.user == null) ? html`
          <sl-spinner></sl-spinner>
        `:html`
          <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>
          <sl-form class="page-form" @sl-submit=${this.updateProfileSubmitHandler.bind(this)}>
            <div class="input-group">
              <sl-input type="text" name="firstName" value="${this.user.firstName}" placeholder="First Name"></sl-input>
            </div>
            <div class="input-group">
              <sl-input type="text" name="lastName" value="${this.user.lastName}" placeholder="Last Name"></sl-input>
            </div>
            <div class="input-group">
              <sl-input type="text" name="email" value="${this.user.email}" placeholder="Email Address"></sl-input>
            </div>            
            <div class="input-group">
              <label>Avatar</label><br>          
              ${(this.user.avatar) ? html`
                <sl-avatar image="${App.apiBase}/images/${this.user.avatar}"></sl-avatar>
                <input type="file" name="avatar" />
              `: html`
                <input type="file" name="avatar" />
              `}
            </div>
            <sl-button type="primary" class="submit-btn" submit>Update Profile</sl-button>
          </sl-form>
        `}
      </div>
    `
    render(template, App.rootEl)
  }
}

export default new EditProfileView()