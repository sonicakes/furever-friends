<template>
    <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Signup for Furever Friends</h3>
                <sl-form class="form-signup" v-on:sl-submit.prevent="signUpSubmitHandler">
                    <div class="form-label-group">
                        <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
                    </div>
                    <div class="form-label-group">
                        <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
                    </div>
                    <div class="form-label-group">
                        <sl-input name="email" type="email" placeholder="Email" required></sl-input>
                    </div>
                    <div class="form-label-group">
                        <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
                    </div>     

                    <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>
                    
                    <div class="text-center">
                      <a class="small" href="/login">Sign In</a>
                    </div>

                </sl-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




<!-- 
    <div class="row">
        <div class="col">
            <img src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" style="height: 100vh;">
        </div>
        <div class="col">
            <div class="page-content page-centered">      
                <div class="signinup-box">
                <img class="signinup-logo" src="../assets/logo.png">
                <h1>Sign Up</h1>
                
                <p>Have an account? <a href="/login">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>  -->
</template>

<script>
import Auth from '../Auth.js'
export default {
    methods: {
        signUpSubmitHandler: function(event){
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
