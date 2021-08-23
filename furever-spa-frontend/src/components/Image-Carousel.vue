<template>
  <div style="max-width: 100vw; padding-top: 50px; padding-bottom: 20px;" >
    <h3 style="text-align:center; padding-bottom:10px;">ANIMALS WAITING FOR YOU</h3>
    <VueSlickCarousel v-bind="settings">
      <div class="card" v-for="pet in pets" :key="pet"><img :src="srcImage(pet)" height="350px" style="border-radius: 10px;"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import PetAPI from '../PetAPI.js'
  import {imgSrcDog, imgSrcCat} from "./matches/imagePlaceholders";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'carousel',
    components: { VueSlickCarousel },
    data() {  
      return {
        pets: PetAPI.getPets(),
        settings: {
          "dots": true,
          "infinite": true,
          "centerMode": true,
          "centerPadding": "20px",
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "speed": 500,
          "autoplaySpeed": 500,
          "variableWidth": true
        }
      }
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
    mounted() {
              var self = this;
        var petPromise = PetAPI.getPets();
        petPromise.then(function(response) {
            self.pets = response
        })
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');

h3 {
  font-family: 'Otomanopee One', sans-serif;
}
</style>