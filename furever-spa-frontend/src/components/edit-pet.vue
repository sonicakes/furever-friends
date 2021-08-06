<template>
<div>
    <navbar/>
  <div class="page-content page-centered">      
        <div class="form-box">
          <h1>Edit Pet</h1>
          <div class="bg-container">
          <sl-form class="form" v-on:sl-submit.prevent="addPetSubmitHandler">
            <div class="input-group custom-input">
              <sl-input label="Name" name="petName" type="text" value="Test1" placeholder="Pet Name" required></sl-input>
            </div>
            <div class="input-group custom-input">
              <sl-select label="Age" name="age" type="number" v-on:value="this.pet.age" placeholder="0-1" required>
                <sl-menu-item value="0-1">0-1</sl-menu-item>
                <sl-menu-item value="1-4">1-4</sl-menu-item>
                <sl-menu-item value="4-8">4-8</sl-menu-item>
                <sl-menu-item value=">8">&#62;8</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-input label="Breed" name="breed" type="text" v-on:value="this.pet.breed" placeholder="Ragdoll" required></sl-input>
            </div>
            <div class="input-group custom-input">
              <sl-select label="Sex" name="sex" type="text" v-on:value="this.pet.sex" placeholder="Male / Female" required>
                <sl-menu-item value="male">Male</sl-menu-item>
                <sl-menu-item value="female">Female</sl-menu-item>
              </sl-select>
            </div>  
            <div class="input-group custom-input">
              <sl-select label="Weight (kg)" name="weight" type="text" v-on:value="this.pet.weight" placeholder="<5" required>
                <sl-menu-item value="<5">&#62;5</sl-menu-item>
                <sl-menu-item value="5-10">5-10</sl-menu-item>
                <sl-menu-item value="10-20">10-20</sl-menu-item>
                <sl-menu-item value="20-30">20-30</sl-menu-item>
                <sl-menu-item value=">30">&#62;30</sl-menu-item>
              </sl-select>
            </div>  
            <div class="input-group custom-input">
              <sl-input label="Colour" name="colour" type="text" v-on:value="this.pet.colour" placeholder="Brindle" required></sl-input>
            </div>  
            <div class="input-group custom-input">
              <sl-select multiple clearable label="Activities" name="activities" type="text" v-on:value="this.pet.activities" placeholder="Sleeping, Playing with toys" required>
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
              <sl-select multiple clearable label="Personality" name="personality" type="text" v-on:value="this.pet.personality" placeholder="Confident, Friendly" required>
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
              <sl-select label="Preferred Family" name="preferredFamily" type="text" v-on:value="this.pet.preferredFamily" placeholder="Small" required>
                <sl-menu-item value="small">Small</sl-menu-item>
                <sl-menu-item value="medium">Medium</sl-menu-item>
                <sl-menu-item value="large">Large</sl-menu-item>
                <sl-menu-item value="any">Any</sl-menu-item>
              </sl-select>
            </div> 
            <div class="input-group custom-input">
              <sl-select multiple clearable label="Preferred Living" name="preferredLiving" type="text" v-on:value="this.pet.preferredLiving" placeholder="Outdoor, Indoor, Backyard" required>
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
              <sl-select multiple clearable label="Things to Avoid" name="toAvoid" type="text" v-on:value="this.pet.toAvoid" placeholder="Kids, Stairs, Cats" required>
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
              <sl-textarea resize="auto" name="bio" v-on:value="this.pet.bio" label="Bio" help-text="Tell us about the pet">
              </sl-textarea>
            <div class="input-group custom-input">
              <label>Pet Image</label><br>          
                <sl-image v-on:image="App.apiBase/images/this.pet.image"></sl-image>
                <input type="file" name="image" />
            </div>   
            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Edit Pet</sl-button>
          </sl-form>
          <a href="/">Cancel edit?</a>
        </div>
      </div>
      </div>
</template>

<script>
import App from './../App'
import {gotoRoute, anchorRoute} from './../Router'
import Auth from './../Auth'
import Utils from './../Utils'
import PetAPI from './../PetAPI'
import Toast from '../Toast'
import moment from 'moment'

export default {
    
    methods: {

        async getPet(){
            try {
            this.pet = await PetAPI.getPet(petName.Test1) 
            console.log(pet)
            this.render()
            }catch(err){
            Toast.show(err, 'error')
            }
        },

        async updatePetSubmitHandler(e){
            e.preventDefault()
            const formData = e.detail.formData
            const submitBtn = document.querySelector('.submit-btn')
            submitBtn.setAttribute('loading', '')
            try {
            const updatedPet = await PetAPI.updatePet(petName, formData)      
            delete updatedPet.password        
            this.pet = updatedPet    
            petName = updatedPet
            this.render()
            Toast.show('Pet updated')
            }catch(err){      
            Toast.show(err, 'error')
            }
            submitBtn.removeAttribute('loading')
        }
        
    }

}

</script>

<style>

</style>