<template>
<div>
  <navbar/>
  <div class="page-centered" style="position: relative;">      
      <div class="form-box">
      <h1>About You</h1>
        <div class="bg-container">
          <sl-form class="form" v-on:sl-submit.prevent="petPreferencesSubmitHandler">
            <div class="input-group custom-input">
              <sl-select class="form-input" label="Pet Type" name="petType" type="text" placeholder="Cat" required>
                <sl-menu-item value="cat">Cat</sl-menu-item>
                <sl-menu-item value="dog">Dog</sl-menu-item>
                <sl-menu-item value="any">Any</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-select class="form-input" label="Age" name="age" type="number" placeholder="<1" required>
                <sl-menu-item value="<1">&#62;1</sl-menu-item>
                <sl-menu-item value="1-4">1-4</sl-menu-item>
                <sl-menu-item value="4-8">4-8</sl-menu-item>
                <sl-menu-item value=">8">&#62;8</sl-menu-item>
                <sl-menu-item value="any">Any</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-input class="form-input" label="Breed" name="breed" type="text" placeholder="Ragdoll" required></sl-input>
            </div>
            <div class="input-group custom-input">
              <sl-select class="form-input" label="Sex" name="sex" type="text" placeholder="Male / Female" required>
                <sl-menu-item value="male">Male</sl-menu-item>
                <sl-menu-item value="female">Female</sl-menu-item>
                <sl-menu-item value="any">Any</sl-menu-item>
              </sl-select>
            </div>    
            <div class="input-group custom-input">
              <sl-input label="Colour" name="colour" type="text" placeholder="Brindle" required></sl-input>
            </div>  
            <div class="input-group custom-input">
              <sl-select class="form-input" multiple clearable label="Prefered pet personality?" name="personality" type="text" placeholder="Confident, Friendly" required>
                <sl-menu-item value="confident">Confident</sl-menu-item>
                <sl-menu-item value="friendly">Friendly</sl-menu-item>
                <sl-menu-item value="needsTraining">Needs Training</sl-menu-item>
                <sl-menu-item value="shy-timid">Shy or timid</sl-menu-item>
                <sl-menu-item value="independant">Independant</sl-menu-item>
                <sl-menu-item value="laidback">Laidback</sl-menu-item>
                <sl-menu-item value="adaptable">Adaptable</sl-menu-item>
                <sl-menu-item value="energetic">Energitic</sl-menu-item>
                <sl-menu-item value="dependant">Dependant</sl-menu-item>
                <sl-menu-item value="serious">Serious</sl-menu-item>
                <sl-menu-item value="calm">Calm</sl-menu-item>
              </sl-select>
            </div> 
            <div class="input-group custom-input">
              <sl-select class="form-input" multiple clearable label="What are your desired pet activities?" name="activities" type="text" placeholder="Sleeping, Playing with toys" required>
                <sl-menu-item value="running">Running</sl-menu-item>
                <sl-menu-item value="walking">Walking</sl-menu-item>
                <sl-menu-item value="sleeping">Sleeping</sl-menu-item>
                <sl-menu-item value="playing-toys">Playing with toys</sl-menu-item>
                <sl-menu-item value="playing-fetch">Playing fetch</sl-menu-item>
                <sl-menu-item value="swimming">Swimming</sl-menu-item>
                <sl-menu-item value="bathing">Bathing</sl-menu-item>
                <sl-menu-item value="grooming">Grooming</sl-menu-item>
                <sl-menu-item value="dress-ups">Dress-ups</sl-menu-item>
                <sl-menu-item value="bird-watching">Bird watching</sl-menu-item>
                <sl-menu-item value="lap-time">Lap time</sl-menu-item>
              </sl-select>
            </div>  
            <div class="input-group custom-input">
              <sl-textarea class="form-input " resize="auto" label="Bio" help-text="Tell us about your purrfect pet">
              </sl-textarea>
            </div>   
            <sl-button type="button" class="form-submit submit-btn" submit>Add Pet</sl-button>
          </sl-form>
        </div>
          <a href="/">Cancel edit?</a>
        </div>
      </div>
      <blueFooter/>
      </div>
</template>

<script>
import navbar from './navbar.vue'
import blueFooter from './footer.vue'
import Auth from '../Auth.js'
export default {
    methods: {
      async getUser(){
        try {
          this.user = await UserAPI.getUser(Auth.currentUser._id)      
          this.render()
        }catch(err){
          Toast.show(err, 'error')
        }
      },
      
      async petPreferencesSubmitHandler(e){
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
    },
    components: {
      navbar,
      blueFooter
    },

}



</script>

<style>

</style>