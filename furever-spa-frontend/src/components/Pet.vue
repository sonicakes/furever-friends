<template>
    <div>
        <navbar/>
        <div v-if="this.pet !== null" class="page-content" style="background-color: #d9cdbf">
            <div class="row" style="margin: auto; position: absolute; top: 10%">
                <div class="col-5" style="align: right; position: relative;">
                  <img :alt="pet.petName" :src="srcImage(pet)" style="width: 300px;" />
                </div>
                <div class="col-6" style="align: left;">
                  <div class="stats">
                    Name: {{ pet.petName }}<br>
                    Type: {{ pet.petType }}<br>
                    Preferred Family: {{ pet.preferredFamily }}<br>
                    Sex: {{ pet.sex }}<br>
                    Weight: {{ pet.weight }}<br>
                    Age: {{ pet.age }}<br>
                    Breed: {{ pet.breed }}<br>
                    Colour: {{ pet.colour }}<br>
                    Activities
                    <ul>
                      <li v-for="activities in pet.activities">{{ activities }}</li>
                    </ul>
                    Personality
                    <ul>
                      <li v-for="personality in pet.personality">{{ personality }}</li>
                    </ul>
                    Preferred Living
                    <ul>
                      <li v-for="preferredLiving in pet.preferredLiving">{{ preferredLiving }}</li>
                    </ul>
                    Things to Avoid
                    <ul>
                      <li v-for="thingsToAvoid in pet.thingsToAvoid">{{ thingsToAvoid }}</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  Bio<br>
                  {{pet.bio}}
                </div>
            </div>
        </div>
        <blueFooter/>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
import {store} from "../store";
import Router from "../Router";
import App from "../App";
import {imgSrcCat, imgSrcDog} from "./matches/imagePlaceholders";

export default {
    data() {
        return {
          petName: null,
          pet: null,
        }
    },
    components: {
        navbar,
        VueperSlides,
        VueperSlide,
        blueFooter  
    },
    methods: {
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
    created() {
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
      fetch(url, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }).then(r => r.json()).then(j => {
        if (j === null || typeof j === 'undefined') {
          Router.gotoRoute('/matches');
        } else {
          this.pet = j;
        }
      })
    }
}
</script>

<style scoped>
p {
    font-size: 1vw;
    color: black;
}
</style> 