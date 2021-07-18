<template>
<div>
    <img src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" height="100vh">
  <div class="page-content page-centered">      
        <div class="add-pet-box">
        <img class="add-pet-logo" src="../assets/logo.png">
          <h1>Sign Up</h1>
          <sl-form class="form-add-pet" v-on:sl-submit.prevent="addPetSubmitHandler">
            <div class="input-group">
              <sl-input name="petName" type="text" placeholder="Pet Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="type" type="text" placeholder="Type" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="age" type="age" placeholder="Age" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="breed" type="breed" placeholder="Breed" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="sex" type="sex" placeholder="Sex" required></sl-input>
            </div>  
            <div class="input-group">
              <sl-input name="weight" type="weight" placeholder="Weight" required></sl-input>
            </div>  
            <div class="input-group">
              <sl-input name="colour" type="colour" placeholder="colour" required></sl-input>
            </div>  
            <div class="input-group">
              <sl-input name="activities" type="activities" placeholder="Activities" required></sl-input>
            </div>  
            <div class="input-group">
              <sl-input name="personality" type="personality" placeholder="Personality" required></sl-input>
            </div> 
            <div class="input-group">
              <sl-input name="preferredFamily" type="preferredFamily" placeholder="Preferred Family Size" required></sl-input>
            </div> 
            <div class="input-group">
              <sl-input name="preferredLiving" type="preferredLiving" placeholder="Preferred Living" required></sl-input>
            </div>      
                    
            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>
          </sl-form>
          <p>Pet added<a href="/">Pet Added</a></p>
        </div>
      </div>
      </div>
</template>

<script>
import Auth from '../Auth.js'
export default {
    methods: {
        addPetSubmitHandler: function(event){
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