<template>
    <div>
        <navbar/>
        <div v-if="loading">
            <div style="position: absolute; z-index: 100; height: 90%; padding-top: 70px; padding-bottom: 45px; margin: auto; width: 100%;background-color: #d9cdbf;"><img src="../assets/loading.gif" style="height: 30vh; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px; margin: auto;"><h1 style="text-align: center;position: absolute;margin: auto;width: 100vw;bottom: 25vh;">Loading Pet</h1></div>
        </div>
        <div class="page-content calign" style="background-color: #d9cdbf" v-if="!loading" id="content">
          
        <div class="container emp-profile" style="position: relative;">
          <div v-if="accessLevel === 1" class="button_cont" align="center"><a class="example_b" :href="`/editpet/${pet.petName}`">Edit Pet</a></div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img :src="srcImage(pet)" :alt="pet.petName" />
                  <p v-if="checkHeart(pet.petName)" id="match" class="active matchClick" v-on:click="addFavHandler(pet.petName)" onclick="$(this).toggleClass('matchClick');"></p>
                  <p v-else id="match" v-on:click="addFavHandler(pet.petName)" onclick="$(this).toggleClass('matchClick');"></p>
              </div>
              <div v-if="accessLevel === 1" class="button" id="button-6">
                <div id="spin"></div>
                <a :href="`/pet/$ {pet.petName}`">Pet Adopted</a>
              </div>
              <div v-else class="button" id="button-6">
                <div id="spin"></div>
                <a v-on:click="saveDataToFile(pet.user)" data-toggle="modal" data-target="#exampleModal">Set me up for a date</a>
              </div>
                
               
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" style="padding-top: 100px;">
    <div class="modal-content">
      <div class="modal-header" style="padding: 0;">
       <img :src="srcImage(pet)" style="width: 100%; height: 20vh;object-fit: cover;object-position: top;">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: absolute; top: 20px; right: 0;">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1>SUCCESS</h1>
        <p style="text-align: center;">Get ready for your date with {{ this.pet.petName }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
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
                            <b-tab title="About" active>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ capitalizeFirstLetter(pet.petName) }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ capitalizeFirstLetter(pet.sex) }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Breed</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ capitalizeFirstLetter(pet.breed) }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Description</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ pet.bio }}</p>
                                    </div>
                                </div>
                        
                            </b-tab>
                            <b-tab title="More Info">
                                <div class="row">
                                    <div class="col-4">
                                        <label>Age</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ pet.age }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Weight</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ pet.weight }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Preferred Family</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ capitalizeFirstLetter(pet.preferredFamily) }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Colour</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ capitalizeFirstLetter(pet.colour) }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Favourite Activities</label>
                                    </div>
                                    <div class="col-8">
                                        <p v-if='pet.activities.length != 0'><span v-for="activity in pet.activities">{{ capitalizeFirstLetter(activity) }}</span></p>
                                        <p v-else>None</p>
                                    </div>
                                </div>

                                 <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Personality</label>
                                    </div>
                                    <div class="col-8">
                                      <p v-if="pet.personality.length != 0"><span v-for="personality in pet.personality">{{ capitalizeFirstLetter(personality) }}</span></p>
                                      <p v-else>Nothing</p>
                                    </div>
                                </div>
                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Preferred Living</label>
                                    </div>
                                    <div class="col-8">
                                      <p v-if="pet.preferredLiving.length != 0"><span v-for="living in pet.preferredLiving">{{ capitalizeFirstLetter(living) }}</span></p>
                                      <p v-else>Any</p>
                                    </div>
                                </div>
                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Things to Avoid</label>
                                    </div>
                                    <div class="col-8">
                                      <p v-if="pet.thingsToAvoid.length != 0"><span v-for="thingToAvoid in pet.thingsToAvoid">{{ capitalizeFirstLetter(thingToAvoid) }}</span></p>
                                      <p v-else>Nothing</p>
                                    </div>
                                </div>
                            </b-tab>
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
import { VueperSlides, VueperSlide } from 'vueperslides'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
import {store} from "../store";
import Router from "../Router";
import App from "../App";
import {imgSrcCat, imgSrcDog} from "./matches/imagePlaceholders";
import UserAPI from '../UserAPI'
import Auth from '../Auth'
import { saveAs } from 'file-saver'

export default {
    data() {
        return {
            loading: true,
            petName: null,
            user: null,
            pet: null,
            likedPets: [],
            accessLevel: JSON.parse(localStorage.getItem('user')).accessLevel,
            userID: null,
        }
    },
    components: {
        navbar,
        VueperSlides,
        VueperSlide,
        blueFooter  
    },
    methods: {
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
          } catch(err) {
            console.log(err)
          }
        } else {
          try {
            UserAPI.addFavPet(petName)
            this.likedPets.push(petName)
            Toast.show('Pet added to favourites')
          }catch(err){
            // Toast.show(err, 'error')
            console.log(err)
          }
          }
        },

		    saveDataToFile(userID) {
            const url2 = App.apiBase + '/user/' + userID;

            fetch(url2, {
              headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
              },
            }).then(r => r.json()).then(j => {
              var data = " Furever Friends \r\n------------------\r\n\r\nPet Info\r\n----------------\r\nName: " + this.pet.petName + "\r\n" + "Description: " + this.pet.bio + "\r\n" + "Age: " + this.pet.age + "\r\n" + "Breed: " + this.pet.breed + "\r\n\r\n" + "Contact Info" + "\r\n" + "----------------\r\n" + "Name: " + j.firstName + " " + j.lastName + "\r\n" + "Email: " + j.email + "\r\n\r\n\r\n" + '             xXXXX   xXXX\r\n            XXXXXXX XXXXXX\r\n            "XXXXXX XXXXXX\r\n             XXXXX  XXXXX xXx\r\n         XXXx XXXXX  XX" XXXX\r\n         XXXXx "XX"  "  XXXXXX\r\n          XXXXX   xXx  XXXXX"\r\n           """  xXXXXXx "XX"\r\n               XXXXXXXXXX\r\n            xXXXXXXXXXXXXXx\r\n            XXXXXXXXXXXXXXX\r\n             """"  """""""'

                var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
                saveAs(blob, "info-" + this.pet.petName + ".txt");
            })
            }

    
    },
    async created() {
      $('#modal-1').on('shown.bs.modal', function (e) {
        $("#content").css({ opacity: 0.5 });
      })

      //when modal closes
      $('#modal-1').on('hidden.bs.modal', function (e) {
        $("#content").css({ opacity: 1 });
      })

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
          this.userID = j.userID
          this.loading = false;
        }
      })

      const url2 = App.apiBase + '/user/' + Auth.currentUser._id;

        fetch(url2, {
          headers: {
            'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }).then(r => r.json()).then(j => {
          this.likedPets = j.favouritePets
          this.user = j;
        })

    }
}
</script>

<style scoped>
.modal-backdrop.show {
    opacity: 0.7;
}

.example_b {
  position: absolute;
  top: 10px;
  right: 10px;
	color: #fff !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #60a3bc;
	padding: 10px;
	border-radius: 50px;
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
}

.example_b:hover {
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;
}

.button {
    display: inline-flex;
    height: 40px;
    width: 200px;
    border: 2px solid #637365;
    margin: auto;
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


/* Sixth Button */

#button-6 {
  margin: auto;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-6 a {
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
  height: 600%;
  opacity: 1;
  left: -90px;
  top: -90px;
  background: #637365;
  transform: rotate(80deg);
}

#button-6:hover a {
  color: #ffffff;
}

.modal-backdrop
{
    opacity:0.5 !important;
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


.matchClick {
    animation-play-state: running !important;
    transition: background 1s steps(28) !important;
    background-position: right center !important; 
}
    /* Code taken from https://codemyui.com/pure-css-twitter-heart-animation/ */
    #match {
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