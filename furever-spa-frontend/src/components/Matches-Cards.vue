<template>
    <div id="main" style="padding: 50px; padding-top: 118px; columns: 250px; column-gap: 20px; " min-height="100vh">
        <Waterfall>
            <WaterfallItem v-for="pet in pets"
                :key="pet" style="position: relative; margin: auto;">
                <div class='grid-item' style="position: relative;">
                    <img 
                        :src="srcImage(pet)"
                    >
                    <h2>
                        <div style="font-size: 3vh">{{ pet.petName }}</div>
                        <div>{{ pet.age }} years old</div>
                        <div>Breed: {{ pet.breed }}</div>
                        <div class="button" id="button-6">
                            <div id="spin"></div>
                            <a href="/pet" v-on:click="setCurrentPet(pet.petName)">MORE INFO</a>
                        </div>
                    </h2>
                    <p id="match" onClick="$(this).toggleClass('matchClick'); "></p>
                </div>
            </WaterfallItem>
        </Waterfall>
    </div>
</template>

<script>
import App from './../App';
import PetAPI from '../PetAPI.js'
import {imgSrcDog, imgSrcCat} from "./matches/imagePlaceholders";
export default {
    name: 'matchesCards',
    data() {
      return {
        pets: PetAPI.getPets(),
        images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-1.jpg'), require('../assets/resized/cat-3.jpg'), require('../assets/cat-4.jpg'),  require('../assets/resized/cat-5.jpg'), require('../assets/resized/dog-1.jpg'), require('../assets/dog-3.jpg')],
        options: {  columnWidth: '.grid-item',
                    itemSelector: '.grid-item'
                }
      };
    },
    mounted() {
        var self = this;
        var petPromise = PetAPI.getPets();
        petPromise.then(function(response) {
            self.pets = response
            console.log(response)
        })
    },
    methods: {
        setCurrentPet(petName) {
            localStorage.setItem("currentPet", petName)
        },
        
        srcImage(pet) {
      let src;

      if (typeof(pet.photoData) !== 'undefined' && pet.photoData !== null) {
        src = 'data:' + pet.photoContentType + ';base64,' + Buffer.from(pet.photoData.data).toString('base64');

      } else if(pet.petType === 'dog') {
        src = imgSrcDog;

      } else {
        src = imgSrcCat;
      }

      return src;
    },
    filteredPets() {
      let filtered = this.$store.state.matches.results;

      if (this.$store.state.matches.filters.animal !== 'any') {
        filtered = filtered.filter(pet => pet.petType === this.$store.state.matches.filters.animal);
      }

      if (this.$store.state.matches.filters.sex !== 'any') {
        filtered = filtered.filter(pet => pet.sex === this.$store.state.matches.filters.sex);
      }

      if (this.$store.state.matches.filters.age !== 'any') {
        filtered = filtered.filter(pet => pet.age === this.$store.state.matches.filters.age);
      }

      if (this.$store.state.matches.filters.family !== 'any') {
        filtered = filtered.filter(pet => pet.preferredFamily === this.$store.state.matches.filters.family);
      }

      return filtered;
    }
  }
}
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}
h2 > div {
    width: max-content;
    margin: auto;
    border: 4px solid transparent;
}
 h2 {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 0;
    display: block;
    color: #ffffff;
    font-size: 2vh;
    font-weight: bold;
    z-index: 999999;
    right: 0;
    left: 0;
    text-align: center;
    transition: .4s ease-in-out;
}
.grid-item {
    overflow: hidden;
    padding-bottom: 5vw;
}
.grid-item:hover img {
    -webkit-filter: grayscale(50%) blur(10px);
    filter: brightness(50%) blur(2px);
    transition: .4s ease-in-out;
}
.grid-item:hover > h2 > div {
    display: block;
}
.grid-item h2 > div {
    display: none;
}
    * {
	box-sizing: border-box;
}

.matchClick {
    animation-play-state: running !important;
    transition: background 1s steps(28) !important;
    background-position: right center !important; 
}
    /* Code taken from https://codemyui.com/pure-css-twitter-heart-animation/ */
    #match {
        width: 10vw;
        height: 10vw;
        position: absolute;
        left: 50%;
        right: 50%;
        background-size: cover;
        transform: translate(-50%, -50%);
        background-image: url('../assets/heart.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        cursor: pointer;
        animation-play-state: paused;
        animation: fave-heart 1s steps(28);
    }
    
    @keyframes fave-heart {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: left center;
        }
    }

    .card-image {
        max-width: 250px;
        margin: 10px;
    }
    .animal-img {
        height: 100%;
        width: 300px;
        
    }
</style>
