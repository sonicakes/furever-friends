<template>
    <div>
        <navbar/>
        <div v-if="loading">
            <div style="position: absolute; z-index: 100; height: 90%; padding-top: 70px; padding-bottom: 45px; margin: auto; width: 100%;background-color: #d9cdbf;"><img src="../assets/loading.gif" style="height: 30vh; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px; margin: auto;"><h1 style="text-align: center;position: absolute;margin: auto;width: 100vw;bottom: 25vh;">Loading Pet</h1></div>
        </div>
        <div class="page-content calign" style="background-color: #d9cdbf" v-if="!loading">
          
        <div class="container emp-profile" style="position: relative;">
 
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img :src="srcImage(pet)" :alt="pet.petName" />
                <div>
                  <sl-image></sl-image>
                  <input type="file" name="image" />
                </div>
              </div>
            </div>
            <div class="col-md-8">
              
              <div class="profile-head">
                <h5>
                  {{ pet.petName }}
                </h5>
                <h6></h6>
                <div>
                  
                    <div>
                        <b-tabs content-class="mt-3">
                                   <sl-form v-on:sl-submit="updatePetSubmitHandler">
                            <b-tab title="About" active>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-input class="form-input" name="petName" id="name" type="text" :value="pet.petName" v-model="questions.name" placeholder="Pet Name" required></sl-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-select class="form-input" name="sex" type="text" id="sex" placeholder="Male / Female" :value="pet.sex" v-model="questions.sex" required>
                                          <sl-menu-item value="male">Male</sl-menu-item>
                                          <sl-menu-item value="female">Female</sl-menu-item>
                                        </sl-select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Breed</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-input class="form-input" id="breed" name="breed" type="text" placeholder="Breed" v-model="questions.breed" :value="pet.breed" required></sl-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Description</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-textarea class="form-input" resize="auto" name="bio" :value="pet.bio" v-model="questions.bio" help-text="Tell us about the pet">
                                        </sl-textarea>
                                    </div>
                                </div>
                        
                            </b-tab>
                            <b-tab title="More Info">
                                <div class="row">
                                    <div class="col-4">
                                        <label>Age</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-select class="form-input" name="age" type="number"  placeholder="0-1" :value="pet.age" v-model="questions.age" required>
                                          <sl-menu-item value="0-1">0-1</sl-menu-item>
                                          <sl-menu-item value="1-4">1-4</sl-menu-item>
                                          <sl-menu-item value="4-8">4-8</sl-menu-item>
                                          <sl-menu-item value=">8">&#62;8</sl-menu-item>
                                        </sl-select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Weight (kg)</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-select class="form-input" name="weight" type="text"  placeholder="<5" :value="pet.weight" v-model="questions.weight" required>
                                          <sl-menu-item value="<5">&#62;5</sl-menu-item>
                                          <sl-menu-item value="5-10">5-10</sl-menu-item>
                                          <sl-menu-item value="10-20">10-20</sl-menu-item>
                                          <sl-menu-item value="20-30">20-30</sl-menu-item>
                                          <sl-menu-item value=">30">&#62;30</sl-menu-item>
                                        </sl-select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Preferred Family</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                      <sl-select class="form-input" name="preferredFamily" type="text"  placeholder="Small" :value="pet.preferredFamily" v-model="questions.preferredFamily" required>
                                        <sl-menu-item value="small">Small</sl-menu-item>
                                        <sl-menu-item value="medium">Medium</sl-menu-item>
                                        <sl-menu-item value="large">Large</sl-menu-item>
                                        <sl-menu-item value="any">Any</sl-menu-item>
                                      </sl-select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Colour</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                      <sl-input class="form-input" name="colour" type="text" placeholder="Colour" :value="pet.colour" v-model="questions.colour" required></sl-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Favourite Activities</label>
                                    </div>
                                    <div class="col-8">
                                        <sl-select class="form-input" multiple clearable name="activities" type="text" :value="pet.activities" placeholder="Favourite Activities" id="activities">
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
                                </div>

                                 <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Personality</label>
                                    </div>
                                    <div class="col-8">
                                      <sl-select class="form-input" multiple clearable label="Personality" id="personality" name="personality" type="text" id="personality" v-model="questions.personality" required v-on:sl-change="consoleLog()">
                                        <sl-menu-item checked value=confident>Confident</sl-menu-item>
                                        <sl-menu-item value="friendly">Friendly</sl-menu-item>
                                        <sl-menu-item value="needsTraining">Needs Training</sl-menu-item>
                                        <sl-menu-item value="shy-timid">Shy or timid</sl-menu-item>
                                        <sl-menu-item value="independant">Independant</sl-menu-item>
                                        <sl-menu-item value="laidback">Laidback</sl-menu-item>
                                        <sl-menu-item value=adaptable>Adaptable</sl-menu-item>
                                        <sl-menu-item value="energetic">Energetic</sl-menu-item>
                                        <sl-menu-item value="dependant">Dependant</sl-menu-item>
                                        <sl-menu-item value="serious">Serious</sl-menu-item>
                                        <sl-menu-item value="calm">Calm</sl-menu-item>
                                      </sl-select>
                                    </div>
                                </div>
                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Preferred Living</label>
                                    </div>
                                    <div class="col-8">
                                      <sl-select class="form-input" multiple clearable label="Preferred Living" id="preferredLiving" name="preferredLiving" type="text"  placeholder="Preferred Living" required v-model="questions.preferredLiving" v-on:sl-change="consoleLog()">
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
                                </div>
                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Things to Avoid</label>
                                    </div>
                                    <div class="col-8">
                                      <sl-select class="form-input" multiple clearable label="Things to Avoid" name="toAvoid" type="text"  placeholder="Kids, Stairs, Cats" required v-bind:value="questions.thingsToAvoid"
  v-on:sl-change="$emit('input', $event.target.value)">
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
                                </div>

                            </b-tab>
                            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Edit Pet</sl-button>
                          </sl-form>
                        </b-tabs>
                    </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
    <blueFooter/>
  </div>
</template>

<script>
import PetAPI from '../PetAPI'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
import {store} from "../store";
import Router from "../Router";
import App from "../App";
import {imgSrcCat, imgSrcDog} from "./matches/imagePlaceholders";
import Toast from '../Toast'

export default {
    data() {
        return {
            loading: true,
            petName: null,
            pet: null,
            accessLevel: JSON.parse(localStorage.getItem('user')).accessLevel,
            questions: {
              name: 'Name',
              sex: '',
              activities: [],
              preferredLiving: [],
              thingsToAvoid: [],
              age: '0',
              breed: '',
              weight: '',
              colour: '',
              bio: '',
            }
        }
    },
    components: {
        navbar,
        VueperSlides,
        VueperSlide,
        blueFooter  
    },
    methods: {
      consoleLog() {
        console.log(document.getElementById('personality').value)
      },

      async updatePetSubmitHandler(e) {
            e.preventDefault()
            const data = {
              name: document.getElementById('name').value,
              sex: document.getElementById('sex').value,
              activities: document.getElementById('activities').value,
              preferredLiving: this.questions.preferredLiving,
              thingsToAvoid: this.questions.thingsToAvoid,
              age: this.questions.age,
              breed: document.getElementById('breed').value,
              weight: this.questions.weight,
              colour: this.questions.colour,
              bio: this.questions.bio,
            };
            console.log(data)
            const submitBtn = document.querySelector('.submit-btn')
            submitBtn.setAttribute('loading', '')
            try {
            const updatedPet = await PetAPI.updatePet(petName, data)      
            // delete updatedPet.password        
            this.pet = updatedPet    
            petName = updatedPet
            this.render()
            Toast.show('Pet updated')
            }catch(err){      
            Toast.show(err, 'error')
            }
            submitBtn.removeAttribute('loading')
        },
        capitalizeFirstLetter(string) {
            var newString = string.charAt(0).toUpperCase() + string.slice(1);
            newString = newString.replace(/-/g, ' ')
            return newString;
        },
      srcImage(pet) {
        let src;

        if (typeof(pet.photoBase64) !== 'undefined' && pet.photoBase64 !== null) {
          src = 'data:' + pet.photoContentType + ';base64,' + pet.photoBase64;

        } else if(pet.petType === 'dog') {
          src = imgSrcDog;

        } else {
          src = imgSrcCat;
        }

        return src;
      },
    },
    async created() {
      // Load current path from store
      // Redirect if path name has not been saved in store,
      // but that should never happen
      let pathName = store.state.pathName;
      if (pathName === null || typeof pathName === 'undefined') {
        Router.gotoRoute('/matches');
      }

      // Extract pet name from current path
      // Redirect if no pet name value is in path
      let petName = pathName.split('/')[2];
      if (petName === null || typeof petName === 'undefined') {
        Router.gotoRoute('/matches');
      }

      // Try to load pet via name from backend
      // Redirect if pet does not exist
      const url = App.apiBase + '/pet/' + petName;
      await fetch(url, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }).then(r => r.json()).then(j => {
        if (j === null || typeof j === 'undefined') {
          Router.gotoRoute('/matches');
        } else {
          this.pet = j;
          console.log(j)
          this.loading = false;
        }
      })

    }
}
</script>

<style scoped>

.button {
  margin: auto;
  display: inline-flex;
  height: 40px;
  width: auto;
  border: 2px solid #637365;
  color: #637365;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  color: #637365;
  text-decoration: none;
  letter-spacing: 1px;
}


/* Second Button */

#button-2 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-2 a {
  position: relative;
  transition: all .35s ease-Out;
}

#slide {
  width: 100%;
  height: 100%;
  left: -200px;
  background: #637365;
  position: absolute;
  transition: all .35s ease-Out;
  bottom: 0;
}

#button-2:hover #slide {
  left: 0;
}

#button-2:hover a {
  color: #ffffff;
}


/* Sixth Button */

#button-6 {
  margin: auto;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-6 a {
  top: 9px;
  position: relative;
  transition: all .45s ease-Out;
}

#spin {
  width: 0;
  height: 0;
  opacity: 0;
  left: 70px;
  top: 20px;
  transform: rotate(0deg);
  background: none;
  position: absolute;
  transition: all .5s ease-Out;
}

#button-6:hover #spin {
  width: 200%;
  height: 500%;
  opacity: 1;
  left: -70px;
  top: -70px;
  background: #ffffff;
  transform: rotate(80deg);
}

#button-6:hover a {
  color: #2D3142;
}

span {
    background-color: lightgray;
    padding: 3px;
    border-style: hidden;
    border-radius: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
}

label{
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-align: left;
    display: block;
}

p {
    font-family: 'Montserrat', sans-serif;
    color: #0062cc;
    text-align: left;
    font-size: 1rem;
}

.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  border: none;
}

.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}

h1 {
    padding: 10px;
}
</style> 