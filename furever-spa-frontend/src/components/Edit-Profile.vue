<template>
  <div>
    <navbar />
    <div id="home" class="page-content calign" style="background-color: #d9cdbf">
      <div class="container emp-profile">
        <sl-form>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src="../assets/user.png" alt="" />
                <div>
                </div>
              </div>
              </div>
            <div class="col-md-8">
              <div class="profile-head">
                <h5>
                  {{ currentUser }}
                </h5>
                <h6></h6>
                <div>

                    <div>
                        <b-tabs content-class="mt-3">
                            <b-tab title="About" active>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-input name="name" type="text" placeholder="Name" :value='currentUser' required></sl-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <sl-input name="email" type="email" placeholder="Email" :value='user.email' required></sl-input>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Children</label>
                                    </div>
                                    <div class="col-8">
                                      <select class="form-control" id="input-questionHasChildren" v-model="questions.hasChildren">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                      </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Youngest Child's Age</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionYoungestChild" :value='questions.questionYoungestChild' v-model="questions.youngestChild">
                                          <option value="na">Not applicable</option>
                                          <option value="under-2">Under 2</option>
                                          <option value="3-6">3-6 yrs old</option>
                                          <option value="7-10">7-10 yrs old</option>
                                        </select>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Home Type</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionBuildingType" v-model="questions.buildingType">
                                        <option value="suburban-home">Suburban Home</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="acreage">Acreage</option>
                                      </select>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Yard Space</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionYardSize" v-model="questions.yardSize">
                                          <option value="non-existent">Non-existent</option>
                                          <option value="average-size">Average Size</option>
                                          <option value="larger-side">On the larger side</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Other Animals</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionHasOtherPets" v-model="questions.hasOtherPets">
                                          <option value="yes">Yes</option>
                                          <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Existing Pet Temperament</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionOtherPetTemperament" v-model="questions.otherPetTemperament">
                                          <option value="na">Not applicable</option>
                                          <option value="quiet">Quiet</option>
                                          <option value="neutral">Neutral</option>
                                          <option value="energetic">Energetic</option>
                                        </select>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Ideal Pet">
                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Species</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionFilterAnimal" v-model="questions.filterAnimal">
                                          <option value="any">Any</option>
                                          <option value="dog">Dog</option>
                                          <option value="cat">Cat</option>
                                        </select>
                                    </div>
                                </div>

                                 <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Animal Gender</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionFilterSex" v-model="questions.filterSex">
                                          <option value="any">Any</option>
                                          <option value="male">Male</option>
                                          <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Animal Family Size</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-control" id="input-questionFilterFamily" v-model="questions.filterFamily">
                                          <option value="any">Any</option>
                                          <option value="small">Small</option>
                                          <option value="medium">Medium</option>
                                          <option value="large">Large</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Animal Age</label>
                                    </div>
                                    <div class="col-8">
                                      <select class="form-control" id="input-questionFilterAge" v-model="questions.filterAge">
                                        <option value="any">Any age</option>
                                        <option value="0-1">0-1 years</option>
                                        <option value="1-4">1-4 years</option>
                                        <option value="4-8">4-8 years</option>
                                        <option value=">8">&gt;8 years</option>
                                      </select>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
              </div>
            </div>
              <div class="button" id="button-2" style="padding-right: 10px; padding-left: 10px;">
                <div id="slide"></div>
                <a v-on:click="submitForm">Save Changes</a>
              </div> 
        </sl-form>
      </div>
    </div>
    <blueFooter />
  </div>
</template>

<script>
import App from './../App';
import Auth from '../Auth.js'
import Router from '../Router';
import { BootstrapVue } from 'bootstrap-vue'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
export default {
    data() {
    return {
      currentUser: JSON.parse(localStorage.user).firstName +  " " + JSON.parse(localStorage.user).lastName,
      user: JSON.parse(localStorage.user),
      loaded: false,
      questions: {
        buildingType: 'suburban-home',
        yardSize: 'non-existent',
        hasOtherPets: 'no',
        otherPetTemperament: 'na',
        hasChildren: 'no',
        youngestChild: 'na',
        filterAnimal: 'any',
        filterSex: 'any',
        filterFamily: 'any',
        filterAge: 'any',
      }
    }
  },
  methods: {
    submitForm: function (event) {
      const data = {
        questionBuildingType: this.questions.buildingType,
        questionYardSize: this.questions.yardSize,
        questionHasOtherPets: this.questions.hasOtherPets,
        questionOtherPetTemperament: this.questions.otherPetTemperament,
        questionHasChildren: this.questions.hasChildren,
        questionYoungestChild: this.questions.youngestChild,
        questionFilterAnimal: this.questions.filterAnimal,
        questionFilterSex: this.questions.filterSex,
        questionFilterFamily: this.questions.filterFamily,
        questionFilterAge: this.questions.filterAge,
      };

      const url = App.apiBase + '/user/' + Auth.currentUser._id;

      fetch(url, {
        method: 'PATCH',
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(r => r.json()).then(j => {
        Router.gotoRoute('/profile');
      })
    },
  },
  mounted() {
    const url = App.apiBase + '/user/' + Auth.currentUser._id;

    fetch(url, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }).then(r => r.json()).then(j => {
      for (const question in this.questions) {
        const key = 'question' + question.charAt(0).toUpperCase() + question.slice(1);
        if (j.hasOwnProperty(key)) {
          this.questions[question] = j[key];
        }
      }
      this.loaded = true;
    })
  },
  components: {
    navbar,
    blueFooter
  },
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


.row {
  padding-bottom: 10px;
}

label {
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

</style>
