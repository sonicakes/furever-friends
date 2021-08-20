<template>
<div>
<div class="row"> 
          <div class="col">
            <div id="no-pets" style="display: none; margin: auto; padding-top: 10vh; text-align: center;">
              <!-- https://yourpng.com/photo/8780/cute-sad-puppy-sitting-dog-png-images -->
              <img src="../assets/sad-puppy.png" style="height: 25vh; width: auto;">
              <h1 style="text-align: center;">No Pets Found</h1>
              <h3 style="font-size: 18px; text-align: center; padding-bottom: 20px;">Maybe try changing the filters</h3>
            </div>
            <div id="main" style="columns: 260px; column-gap: 20px; " min-height="100vh">
              <div>
                <div v-for="pet in filteredPets()"
                      :key="pet.petName" style="position: relative; margin: auto;">
                  <div class='grid-item' style="position: relative;" >
                    <a :href="`/pet/${pet.petName}`">
                      <div style="position: relative; display: table; height: 100%;">
                        <img :src="srcImage(pet)">
                        <h2 style="margin: auto;">
                            <div style="font-size: 3vh;">{{ pet.petName }}</div>
                            <div>{{ pet.age }} years old</div>
                            <div>Breed: {{ pet.breed }}</div>
                                <div class="button" id="button-6">
                                  <div id="spin"></div>
                                  <a :href="`/pet/${pet.petName}`">More Info</a>
                                </div>
                        </h2>
                      </div>
                    </a>
                    <p v-if="checkHeart(pet.petName)" id="match" class="active matchClick" v-on:click="addFavHandler(pet.petName)" onclick="$(this).toggleClass('matchClick');"></p>
                    <p v-else id="match" v-on:click="addFavHandler(pet.petName)" onclick="$(this).toggleClass('matchClick');"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </div>
    <div class="info" v-if="accessLevel === 0">
          Showing {{ filteredPets().length }} of {{ this.$store.state.matches.results.length }} pets looking for their Furever Friend
        </div>
        <div class="info" v-else>
          Showing {{ filteredPets().length }} of {{ this.$store.state.matches.results.length }} pets
        </div>
        </div>
</template>
  
<script>
import App from '../App'
import Auth from '../Auth'
import UserAPI from '../UserAPI'
  import {imgSrcDog, imgSrcCat} from "./matches/imagePlaceholders";
  export default {
      name: 'matchesCards',
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
            try {
            if (filtered.length === 0) {
              document.getElementById('no-pets').style.display = "block";
            } else {
              document.getElementById('no-pets').style.display = "none";
            }
            } catch (e) {
              return filtered;
            }
          return filtered;
        },

      checkHeart(petName) {
          if (this.likedPets.indexOf(petName) !== -1) {
            return true
          } else {
            return false
          }
      },

      addFavHandler(petName) {    
        if (this.checkHeart(petName)) {
          try {
            UserAPI.removeFavPet(petName)
            this.likedPets.splice(this.likedPets.indexOf(petName),1)
            console.log(this.likedPets)
          } catch(err) {
            console.log(err)
          }
        } else {
          try {
            UserAPI.addFavPet(petName)
            this.likedPets.push(petName)
            // Toast.show('Pet added to favourites')
          }catch(err){
            // Toast.show(err, 'error')
            console.log(err)
          }
        }
        }
    },
    mounted() {
        const url = App.apiBase + '/user/' + Auth.currentUser._id;

        fetch(url, {
          headers: {
            'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }).then(r => r.json()).then(j => {
          this.likedPets = j.favouritePets
        })
    },
    data: function() {
      return {
        likedPets: [],
        accessLevel: JSON.parse(localStorage.user).accessLevel,
      }
    }
  }
</script>

<style scoped>
.info {
  text-align: center;

}

.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #ffffff;
  margin: 20px 20px 20px 20px;
  color: #BFC0C0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 1px;
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
    top: 15px;
    display: block;
    color: #ffffff;
    font-size: 2vh;
    font-weight: bold;
    z-index: 99;
    right: 0;
    left: 0;
    text-align: center;
    transition: .4s ease-in-out;
}
.grid-item {
    overflow: hidden;
    padding-bottom: 5vw;
}
.grid-item:hover a img {
    -webkit-filter: grayscale(50%) blur(10px);
    filter: brightness(50%) blur(2px);
    transition: .4s ease-in-out;
}
.grid-item:hover > a > div > h2 > div, .grid-item:active > div > h2 > div  {
    display: block;
}
.grid-item > a > div > h2 > div {
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
      z-index: 100;
        width: 131px;
        height: 131px;
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
