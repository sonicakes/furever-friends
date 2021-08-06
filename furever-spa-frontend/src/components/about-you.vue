<template>
<div>
  <navbar/>
  <div class="page-centered" style="position: relative;">      
      <div class="form-box">
      <h1>About You</h1>
        <div class="bg-container">
          <sl-form class="form" v-on:sl-submit.prevent="aboutYouSubmitHandler">
            <div class="input-group custom-input">
              <sl-select  class="form-input" multiple clearable label="What best describes where you live?" name="preferredLiving" type="text" placeholder="suburban home, apartment, acreage" required>
                <sl-menu-item value="suburban-home">Suburban Home</sl-menu-item>
                <sl-menu-item value="apartment">Apartment</sl-menu-item>
                <sl-menu-item value="acreage">Acreage</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-select  class="form-input" multiple clearable label="How large is your yard space?" name="accomodationSize" type="text" placeholder="Non-existent / average size / on the larger side">
                <sl-menu-item value="non-existent">Non-existent</sl-menu-item>
                <sl-menu-item value="average-size">Average Size</sl-menu-item>
                <sl-menu-item value="larger-side">On the larger side</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group custom-input">
              <sl-radio-group label="Select an item" class="form-input">
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
              <sl-select class="form-input" multiple clearable label="If yes, how would you describe your existing pet?" name="accomodationSize" type="text" placeholder="Non-existent/average size/on the larger side" required>
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
            <!-- <div class="input-group custom-input">
              <sl-select class="form-input" multiple clearable label="If yes, what is the age of your youngest child?" name="accomodationSize" type="text" placeholder="Children age" required>
                <sl-menu-item value="under-2">under 2</sl-menu-item>
                <sl-menu-item value="3-6">3-6 yrs old</sl-menu-item>
                <sl-menu-item value="7-10">7-10 yrs old</sl-menu-item>
              </sl-select>
            </div> -->
            <div class="input-group custom-input">
              <sl-select class="form-input" label="Family size?" name="familySize" type="text" placeholder="Small" required>
                <sl-menu-item value="small">Small</sl-menu-item>
                <sl-menu-item value="medium">Medium</sl-menu-item>
                <sl-menu-item value="large">Large</sl-menu-item>
                <sl-menu-item value="any">N/A</sl-menu-item>
              </sl-select>
            </div> 
                        <div class="input-group custom-input">
              <sl-select class="form-input" multiple clearable label="Preferred Living" name="preferredLiving" type="text" placeholder="Outdoor, Indoor, Backyard" required>
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
            <sl-button type="primary" class="form-submit submit-btn" submit>Submit Your Information</sl-button>
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
      async getUser(){
        try {
          this.user = await UserAPI.getUser(Auth.currentUser._id)      
          this.render()
        }catch(err){
          Toast.show(err, 'error')
        }
      },
      
      async aboutYouSubmitHandler(e){
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