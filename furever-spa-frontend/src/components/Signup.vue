<template>
  <div class="page-content page-centered">      
        <div class="signinup-box">
        <img class="signinup-logo" src="../assets/logo.png">
          <h1>Sign Up</h1>
          <sl-form class="form-signup" v-on:sl-submit.prevent="signUpSubmitHandler">
            <div class="input-group">
              <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div>            
            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>
          </sl-form>
          <p>Have an account? <a href="/signin">Sign In</a></p>
        </div>
      </div>
</template>

<script>
import Auth from '../Auth.js'
export default {
    methods: {
        signUpSubmitHandler: function(event){
            console.log("I'm here")
            event.preventDefault()    
            const submitBtn = document.querySelector('.submit-btn')
            submitBtn.setAttribute('loading', '')    
            const formData = event.detail.formData
    
            // sign up using Auth
            Auth.signUp(formData, () => {
                submitBtn.removeAttribute('loading')
            })   
        }
    }

}
</script>

<style>

</style>