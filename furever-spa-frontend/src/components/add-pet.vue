<template>
<div>
  <navbar/>
  <div class="page-centered" style="position: relative;">      
        <div class="add-pet-box">
          <h1>Add Pet</h1>
                    <div class="bg-container">
          <sl-form class="form-add-pet" v-on:sl-submit.prevent="addPetSubmitHandler">
            <div class="input-group custom-input">
              <sl-input class="add-pet-input" label="Name" name="petName" type="text" placeholder="Pet Name" required></sl-input>
            </div>
            <div class="input-group custom-input">
              <sl-select class="add-pet-input" label="Age" name="age" type="number" placeholder="0-1" required>
                <sl-menu-item value="0-1">0-1</sl-menu-item>
                <sl-menu-item value="1-4">1-4</sl-menu-item>
                <sl-menu-item value="4-8">4-8</sl-menu-item>
                <sl-menu-item value=">8">&#62;8</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-input class="add-pet-input" label="Breed" name="breed" type="text" placeholder="Ragdoll" required></sl-input>
            </div>
            <div class="input-group custom-input">
              <sl-select class="add-pet-input" label="Sex" name="sex" type="text" placeholder="Male / Female" required>
                <sl-menu-item value="male">Male</sl-menu-item>
                <sl-menu-item value="female">Female</sl-menu-item>
              </sl-select>
            </div>  
            <div class="input-group custom-input">
              <sl-select class="add-pet-input" label="Weight (kg)" name="weight" type="text" placeholder="<5" required>
                <sl-menu-item value="<5">&#62;5</sl-menu-item>
                <sl-menu-item value="5-10">5-10</sl-menu-item>
                <sl-menu-item value="10-20">10-20</sl-menu-item>
                <sl-menu-item value="20-30">20-30</sl-menu-item>
                <sl-menu-item value=">30">&#62;30</sl-menu-item>
              </sl-select>
            </div>  
            <div class="input-group custom-input">
              <sl-input label="Colour" name="colour" type="text" placeholder="Brindle" required></sl-input>
            </div>  
            <div class="input-group custom-input">
              <sl-select class="add-pet-input" multiple clearable label="Activities" name="activities" type="text" placeholder="Sleeping, Playing with toys" required>
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
              <sl-select class="add-pet-input" multiple clearable label="Personality" name="personality" type="text" placeholder="Confident, Friendly" required>
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
              <sl-select class="add-pet-input" label="Preferred Family" name="preferredFamily" type="text" placeholder="Small" required>
                <sl-menu-item value="small">Small</sl-menu-item>
                <sl-menu-item value="medium">Medium</sl-menu-item>
                <sl-menu-item value="large">Large</sl-menu-item>
                <sl-menu-item value="any">Any</sl-menu-item>
              </sl-select>
            </div> 
            <div class="input-group custom-input">
              <sl-select class="add-pet-input" multiple clearable label="Preferred Living" name="preferredLiving" type="text" placeholder="Outdoor, Indoor, Backyard" required>
                <sl-menu-item value="outdoor">Outdoor</sl-menu-item>
                <sl-menu-item value="indoor">Indoor</sl-menu-item>
                <sl-menu-item value="backyard">Backyard</sl-menu-item>
                <sl-menu-item value="balcony">Balcony</sl-menu-item>
                <sl-menu-item value="house">House</sl-menu-item>
                <sl-menu-item value="apartment">Apartment</sl-menu-item>
                <sl-menu-item value="couch-potato">Couch Potato</sl-menu-item>
                <sl-menu-item value="on-the-road">On the road</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-select class="add-pet-input " multiple clearable label="Things to Avoid" name="toAvoid" type="text" placeholder="Kids, Stairs, Cats" required>
                <sl-menu-item value="stairs">Stairs</sl-menu-item>
                <sl-menu-item value="cats">Cats</sl-menu-item>
                <sl-menu-item value="dogs">Dogs</sl-menu-item>
                <sl-menu-item value="otherPets">Other Pets</sl-menu-item>
                <sl-menu-item value="kids">Kids</sl-menu-item>
                <sl-menu-item value="carRides">Car Rides</sl-menu-item>
                <sl-menu-item value="offLeash">Off Leash</sl-menu-item>
                <sl-menu-item value="outdoors">Outdoors</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-textarea class="add-pet-input " resize="auto" label="Bio" help-text="Tell us about the pet">
              </sl-textarea>
              <label>Pet Image</label><br>          
                <sl-image image="${App.apiBase}/images/${this.pet.image}"></sl-image>
                <input type="file" name="image" />
            </div>   
            <sl-button type="button" class="add-pet-submit submit-btn" submit>Add Pet</sl-button>
          </sl-form>
                    </div>
          <p>Cancel add? <a href="/">Return Home</a></p>
        </div>
      </div>
      <blueFooter/>
      </div>
</template>

<script>
  import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'
import Auth from '../Auth.js'
export default {
    methods: {
        addPetSubmitHandler: function(event){
            console.log("I'm here")
            event.preventDefault()    
            const submitBtn = document.querySelector('.submit-btn')
            submitBtn.setAttribute('loading', '')    
            const formData = event.detail.formData
            
    
            // addPet using Auth
            Auth.addPetUp(formData, () => {
                submitBtn.removeAttribute('loading')
            })   
        },
    },
    components: {
      navbar,
      blueFooter
    },

}



</script>

<style>

</style>