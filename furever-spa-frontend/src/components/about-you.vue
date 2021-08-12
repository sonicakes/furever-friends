<template>
  <div>
    <navbar/>
    <div style="background-color: #d9cdbf">
      <div class="container" style="padding-top: 100px; height: 100vh">

        <div v-if="!loaded">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center py-5">
                Loading
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row">
            <div class="col-12 py-2">
              <h1>Questionnaire</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-12 py-2">
              <h2>About You</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-2">
              <label for="input-questionBuildingType" class="form-label">What best describes where you live?</label>
              <select class="form-control" id="input-questionBuildingType" v-model="questions.buildingType">
                <option value="suburban-home">Suburban Home</option>
                <option value="apartment">Apartment</option>
                <option value="acreage">Acreage</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionYardSize" class="form-label">How large is your yard space?</label>
              <select class="form-control" id="input-questionYardSize" v-model="questions.yardSize">
                <option value="non-existent">Non-existent</option>
                <option value="average-size">Average Size</option>
                <option value="larger-side">On the larger side</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionHasOtherPets" class="form-label">Do you have any other animals in the home</label>
              <select class="form-control" id="input-questionHasOtherPets" v-model="questions.hasOtherPets">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionOtherPetTemperament" class="form-label">If yes, how would you describe your existing pet?</label>
              <select class="form-control" id="input-questionOtherPetTemperament" v-model="questions.otherPetTemperament">
                <option value="na">Not applicable</option>
                <option value="quiet">Quiet</option>
                <option value="neutral">Neutral</option>
                <option value="energetic">Energetic</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionHasChildren" class="form-label">Do you have children?</label>
              <select class="form-control" id="input-questionHasChildren" v-model="questions.hasChildren">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionYoungestChild" class="form-label">How old is your youngest child?</label>
              <select class="form-control" id="input-questionYoungestChild" v-model="questions.youngestChild">
                <option value="na">Not applicable</option>
                <option value="under-2">Under 2</option>
                <option value="3-6">3-6 yrs old</option>
                <option value="7-10">7-10 yrs old</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-12 py-2">
              <h2>Pet Preferences</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-2">
              <label for="input-questionFilterAnimal" class="form-label">Animal Species</label>
              <select class="form-control" id="input-questionFilterAnimal" v-model="questions.filterAnimal">
                <option value="any">Any</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionFilterSex" class="form-label">Animal Gender</label>
              <select class="form-control" id="input-questionFilterSex" v-model="questions.filterSex">
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionFilterFamily" class="form-label">Animal Size</label>
              <select class="form-control" id="input-questionFilterFamily" v-model="questions.filterFamily">
                <option value="any">Any</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div class="col-12 py-2">
              <label for="input-questionFilterAge" class="form-label">Animal Age</label>
              <select class="form-control" id="input-questionFilterAge" v-model="questions.filterAge">
                <option value="any">Any</option>
                <option value="0-1">0-1</option>
                <option value="1-4">1-4</option>
                <option value="4-8">4-8</option>
                <option value=">8">&gt;8</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-12 py-2">
              <button type="button" class="btn btn-primary" v-on:click="submitForm">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <blueFooter/>
  </div>
</template>

<script>
import App from './../App';
import Auth from '../Auth.js'
import Router from '../Router';
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'

export default {
  data() {
    return {
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
        Router.gotoRoute('/matches');
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