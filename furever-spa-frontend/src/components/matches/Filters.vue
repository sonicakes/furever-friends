<template>
  <div style="padding-top: 100px">
    <div id="mySidebar" class="sidebar">
      <a class="closebtn" v-on:click="closeNav()">&times;</a>
      <div v-if="!loaded">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center py-5">Loading</div>
          </div>
        </div>
      </div>
      <div v-else class="filters">
        <div class="filter" v-for="filter in filters">
          <div class="filter-name">
            {{ filter.name }}
          </div>
          <br />
          <select
            @change="updateFilter"
            :name="filter.name"
            :data-commit-method="filter.commitMethod"
          >
            <option
              v-for="filterValue in filter.values"
              :value="filterValue.value"
              :name="filter.key"
              :id="'input-' + filter.key + '-' + filterValue.value"
              :selected="state.matches.filters[filter.key] === filterValue.value"
            >
              {{ filterValue.label }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div id="main">
      <button class="openbtn" v-on:click="changeNav()">
        <i class="fas fa-filter"></i><span>Filter</span>
      </button>

      <button
        v-if="accessLevel === 1"
        v-b-modal.modal-1
        class="openbtn"
        style="position: absolute; right: 30px"
      >
        <i class="fas fa-plus"></i> <span>Add Pet</span>
      </button>

      <matchesCards></matchesCards>
      <div>
        <b-modal id="modal-1" title="Add Pet" style="width: 40vw">
          <div class="form-box">
            <div>
              <sl-form
                v-on:sl-submit.prevent="addPetSubmitHandler"
                id="form"
                style="padding: none"
              >
                <div class="input-group custom-input">
                  <sl-input
                    class="form-input"
                    label="Name"
                    name="petName"
                    type="text"
                    placeholder="Pet Name"
                    required
                  ></sl-input>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    label="Pet Type"
                    name="petType"
                    type="text"
                    placeholder="Select an animal type"
                    required
                  >
                    <sl-menu-item value="cat">Cat</sl-menu-item>
                    <sl-menu-item value="dog">Dog</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    label="Age"
                    name="age"
                    type="number"
                    placeholder="Please select an age"
                    required
                  >
                    <sl-menu-item value="0-1">0-1</sl-menu-item>
                    <sl-menu-item value="1-4">1-4</sl-menu-item>
                    <sl-menu-item value="4-8">4-8</sl-menu-item>
                    <sl-menu-item value=">8">&#62;8</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-input
                    class="form-input"
                    label="Breed"
                    name="breed"
                    type="text"
                    placeholder="Ragdoll"
                    required
                  ></sl-input>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    label="Sex"
                    name="sex"
                    type="text"
                    placeholder="Please select a gender"
                    required
                  >
                    <sl-menu-item value="male">Male</sl-menu-item>
                    <sl-menu-item value="female">Female</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    label="Weight (kg)"
                    name="weight"
                    type="text"
                    placeholder="Please select a weight"
                    required
                  >
                    <sl-menu-item value="<5">&#62;5</sl-menu-item>
                    <sl-menu-item value="5-10">5-10</sl-menu-item>
                    <sl-menu-item value="10-20">10-20</sl-menu-item>
                    <sl-menu-item value="20-30">20-30</sl-menu-item>
                    <sl-menu-item value=">30">&#62;30</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-input
                    label="Colour"
                    name="colour"
                    type="text"
                    placeholder="Colour"
                    required
                  ></sl-input>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    multiple
                    clearable
                    label="Activities"
                    name="activities"
                    type="text"
                    placeholder="Please select activities"
                    required
                  >
                    <sl-menu-item value="running">Running</sl-menu-item>
                    <sl-menu-item value="walking">Walking</sl-menu-item>
                    <sl-menu-item value="sleeping">Sleeping</sl-menu-item>
                    <sl-menu-item value="playing-toys"
                      >Playing with toys</sl-menu-item
                    >
                    <sl-menu-item value="playing-fetch"
                      >Playing fetch</sl-menu-item
                    >
                    <sl-menu-item value="swimming">Swimming</sl-menu-item>
                    <sl-menu-item value="bathing">Bathing</sl-menu-item>
                    <sl-menu-item value="grooming">Grooming</sl-menu-item>
                    <sl-menu-item value="dress-ups">Dress-ups</sl-menu-item>
                    <sl-menu-item value="bird-watching"
                      >Bird watching</sl-menu-item
                    >
                    <sl-menu-item value="lap-time">Lap time</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    multiple
                    clearable
                    label="Personality"
                    name="personality"
                    type="text"
                    placeholder="Please select personalities"
                    required
                  >
                    <sl-menu-item value="confident">Confident</sl-menu-item>
                    <sl-menu-item value="friendly">Friendly</sl-menu-item>
                    <sl-menu-item value="needsTraining"
                      >Needs Training</sl-menu-item
                    >
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
                  <sl-select
                    class="form-input"
                    label="Preferred Family"
                    name="preferredFamily"
                    type="text"
                    placeholder="Small"
                    required
                  >
                    <sl-menu-item value="small">Small</sl-menu-item>
                    <sl-menu-item value="medium">Medium</sl-menu-item>
                    <sl-menu-item value="large">Large</sl-menu-item>
                    <sl-menu-item value="any">Any</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    multiple
                    clearable
                    label="Preferred Living"
                    name="preferredLiving"
                    type="text"
                    placeholder="Outdoor, Indoor, Backyard"
                    required
                  >
                    <sl-menu-item value="outdoor">Outdoor</sl-menu-item>
                    <sl-menu-item value="indoor">Indoor</sl-menu-item>
                    <sl-menu-item value="backyard">Backyard</sl-menu-item>
                    <sl-menu-item value="balcony">Balcony</sl-menu-item>
                    <sl-menu-item value="house">House</sl-menu-item>
                    <sl-menu-item value="apartment">Apartment</sl-menu-item>
                    <sl-menu-item value="couch-potato"
                      >Couch Potato</sl-menu-item
                    >
                    <sl-menu-item value="on-the-road">On the road</sl-menu-item>
                  </sl-select>
                </div>
                <div class="input-group custom-input">
                  <sl-select
                    class="form-input"
                    multiple
                    clearable
                    label="Things to Avoid"
                    name="toAvoid"
                    type="text"
                    placeholder="Kids, Stairs, Cats"
                    required
                  >
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
                  <sl-textarea
                    class="form-input"
                    name="bio"
                    resize="auto"
                    label="Bio"
                    help-text="Tell us about the pet"
                  >
                  </sl-textarea>
                  <label>Pet Image</label><br />
                  <sl-image
                    image="$App.apiBase/images/this.pet.image"
                  ></sl-image>
                  <input type="file" name="image" />
                </div>
                <div
                  onclick="$('#form').get(0).submit()"
                  class="button"
                  id="button-3"
                >
                  <div id="circle"></div>
                  <a submit>Add Pet</a>
                </div>
              </sl-form>
            </div>
            <p>Cancel add? <a href="/">Return Home</a></p>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import add from '../add-pet.vue'
import matchesCards from '../Matches-Cards.vue'
import filterConfig from './config';
import App from "../../App";
import Auth from "../../Auth";

export default {
  data() {
    return {
      accessLevel: JSON.parse(localStorage.user).accessLevel,
      loaded: false,
      filters: filterConfig,
    }
  },
  computed: {
    state() {
      return this.$store.state;
    }
  },
  methods: {
    addPetSubmitHandler: function(event){
            event.preventDefault()
            const submitBtn = document.querySelector('#button-3')
            submitBtn.setAttribute('loading', '')
            const formData = event.detail.formData

            // addPet using Auth
            Auth.addPet(formData, () => {
                submitBtn.removeAttribute('loading')
            })
        },
    openNav() {
      document.getElementById("mySidebar").classList += " active"
      document.getElementById("main").style.marginLeft = "20vw"
    },
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
      document.getElementById("mySidebar").classList = "sidebar"
      document.getElementById("main").style.marginLeft = "0";
    },
    changeNav() {
      if (document.getElementById("mySidebar").classList === "sidebar active")
        this.closeNav()
      else
        this.openNav()
    },
    updateFilter(e) {
      const method = 'setMatchesFilter' + e.target.dataset.commitMethod;
      this.$store.commit(method, e.target.value);
    },
  },
  mounted() {
    const url = App.apiBase + '/user/' + Auth.currentUser._id;

    fetch(url, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }).then(r => r.json()).then(j => {

      const filters = ['Animal','Age','Sex','Family'];

      filters.forEach(field => {
        const key = 'questionFilter' + field;
        if (j.hasOwnProperty(key)) {
          if (this.accessLevel === 0) {
            this.$store.commit('setMatchesFilter' + field , j[key]);
          }
        }
      })

      this.loaded = true;
    })
  },
  components: {
    matchesCards
  }
}
</script>

<style scoped>
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  color: #bfc0c0;
  text-decoration: none !important;
  letter-spacing: 1px;
}

/* Third Button */

#button-3 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-3 a {
  position: relative;
  transition: all 0.45s ease-Out;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #bfc0c0;
  position: absolute;
  transition: all 0.5s ease-Out;
  top: 20px;
  left: 70px;
}

#button-3:hover #circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}

#button-3:hover a {
  color: #2d3142;
}

.filter-name,
.filter-value,
.filter-value label {
  display: inline;
}

button {
  width: auto;
}
.filter-name {
  font-family: "Montserrat", sans-serif;
  color: black;
  margin-left: 5%;
  font-size: 18px;
}

select {
  padding: 7px;
  width: 90%;
  margin-left: 5%;
  position: relative;
  border: none;
  background: white;
  color: black;
  margin-bottom: 10px;
}

body {
  background-color: #d1d7dc;
  font-family: "Fira Sans", sans-serif;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
code {
  background-color: #9aa3ac;
  padding: 0 8px;
}

option {
  font-family: "Montserrat", sans-serif;
}

.filter {
  color: white;
}

/* The sidebar menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #a2988d;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
  margin-top: 68px;
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}

.active {
  width: 20vw;
  height: 100vh;
}

/* The button used to open the sidebar */
.openbtn {
  width: auto;
  height: auto;
  font-size: 20px;
  cursor: pointer;
  background-color: #637365;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #7b8f7d;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-width: 450px) {
  .sidebar {
    z-index: 100000;
  }
  .active {
    width: 100vw;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
