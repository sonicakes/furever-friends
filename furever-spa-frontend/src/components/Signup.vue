<template>
<div>
    <img src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" height="100vh">
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