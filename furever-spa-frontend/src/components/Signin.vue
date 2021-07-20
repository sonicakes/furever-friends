<template>
  <div class="page-content page-centered">
        <div class="signinup-box">
          <img class="signinup-logo" src="../assets/logo.png">          
          <sl-form class="form-signup dark-theme" v-on:sl-submit="signInSubmitHandler">          
            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div>
            <sl-button class="submit-btn" type="primary" submit style="width: 100%;">Sign In</sl-button>
          </sl-form>
          <p>No Account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
</template>

<script>
import Auth from '../Auth.js'
export default {
    methods: {
        signInSubmitHandler: function(event) {
            event.preventDefault()
            const formData = event.detail.formData
            const submitBtn = document.querySelector('.submit-btn')
            submitBtn.setAttribute('loading', '')    
    
            // sign in using Auth    
            Auth.signIn(formData, () => {
                submitBtn.removeAttribute('loading')
            })
        }
    }
}
</script>

<style>

</style>