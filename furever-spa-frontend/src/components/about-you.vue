<template>
<div>
  <navbar/>
  <div class="page-centered" style="position: relative;">      
        <div class="add-pet-box">
          <h1>About You</h1>
          <div class="bg-container">
          <sl-form class="form-add-pet" v-on:sl-submit.prevent="addPetSubmitHandler">
                  <div class="input-group custom-input">
              <sl-select  class="add-pet-input" multiple clearable label="What best describes where you live?" name="preferredLiving" type="text" placeholder="suburban home, apartment, acreage" required>
                <sl-menu-item value="suburban-home">Suburban Home</sl-menu-item>
                <sl-menu-item value="apartment">Apartment</sl-menu-item>
                <sl-menu-item value="acreage">Acreage</sl-menu-item>
              </sl-select>
            </div>
                      <div class="input-group custom-input">
              <sl-select  class="add-pet-input" multiple clearable label="How large is your yard space?" name="accomodationSize" type="text" placeholder="Non-existent/average size/on the larger side 
" required>
                <sl-menu-item value="non-existent">Non-existent</sl-menu-item>
                <sl-menu-item value="average-size">Average Size</sl-menu-item>
                <sl-menu-item value="larger-side">On the larger side</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-radio-group label="Select an item" class="add-pet-input">
                <fieldset part="base" role="radiogroup" class="radio-group">
        <legend part="label" class="radio-group__label">
          <slot name="label">Do you have any other animals in the home?</slot>
        </legend>
        <slot></slot>
      </fieldset>
  <sl-radio value="yes">Yes</sl-radio>
  <sl-radio value="no">No</sl-radio>
</sl-radio-group>
            </div>
                               <div class="input-group custom-input">
              <sl-select class="add-pet-input" multiple clearable label="If yes, how would you describe your existing pet?" name="accomodationSize" type="text" placeholder="Non-existent/average size/on the larger side 
" required>
                <sl-menu-item value="quiet">Quiet</sl-menu-item>
                <sl-menu-item value="neutral">Neutral</sl-menu-item>
                <sl-menu-item value="energetic">Energretic</sl-menu-item>
              </sl-select>
            </div>
                  <div class="input-group custom-input">
              <sl-radio-group label="Do you have children?">
                <fieldset part="base" role="radiogroup" class="radio-group">
        <legend part="label" class="radio-group__label">
          <slot name="label">Do you have children?</slot>
        </legend>
        <slot></slot>
      </fieldset>
  <sl-radio value="yes">Yes</sl-radio>
  <sl-radio value="no">No</sl-radio>
</sl-radio-group>
            </div>
                               <div class="input-group custom-input">
              <sl-select class="add-pet-input" multiple clearable label="If yes, what is the age of your youngest child?" name="accomodationSize" type="text" placeholder="Children age
" required>
                <sl-menu-item value="under-2">under 2</sl-menu-item>
                <sl-menu-item value="3-6">3-6 yrs old</sl-menu-item>
                <sl-menu-item value="7-10">7-10 yrs old</sl-menu-item>
              </sl-select>
            </div>
            <sl-button type="primary" class="add-pet-submit submit-btn" submit>Submit Your Information</sl-button>
          </sl-form>
          </div>
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