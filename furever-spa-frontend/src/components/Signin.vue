<template>
  <div class="login-signup container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Login to Furever Friends</h3>
                <sl-form class="form-signup dark-theme" v-on:sl-submit="signInSubmitHandler">          
                  <div class="form-label-group">
                    <sl-input name="email" type="email" placeholder="Email" required></sl-input>
                  </div>
                  <div class="form-label-group">
                    <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                  </div>

                  <sl-button class="submit-btn" type="primary" submit style="width: 100%;">Sign In</sl-button>
                    <div class="text-center">
                      <a class="small" href="/signup">No Account? Sign Up</a>
                    </div>
                </sl-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '../Auth.js'
export default {
    methods: {
        signInSubmitHandler: function (e) {
            e.preventDefault()
            const formData = e.detail.formData
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
/* https://jsfiddle.net/StartBootstrap/efvg9j7a/ */
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}
.login,
.image {
  min-height: 100vh;
}

.login-signup{
      background-color: #ffffff;
}

.bg-image {
  background-image: url('https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80');
  background-size: cover;
  background-position: center;
}
.login-heading {
  font-weight: 300;
}
.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  border-radius: 2rem;
}
.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}
.form-label-group>input {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}
.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}
.form-label-group input:-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-ms-input-placeholder {
  color: transparent;
}
.form-label-group input::-moz-placeholder {
  color: transparent;
}
.form-label-group input::placeholder {
  color: transparent;
}
.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}
/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}
/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>