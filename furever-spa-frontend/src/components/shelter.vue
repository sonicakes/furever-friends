<template>
  <div id="shelter" class="small-container" style="  position: relative;
  min-height: 100vh;">
  <div id="content-wrap" style="padding-bottom: 2.5rem;">
    <div v-if="loading">
              <div style="position: absolute; z-index: 100; height: 90%; padding-top: 70px; padding-bottom: 45px; margin: auto; width: 100%;background-color: #d9cdbf;"><img src="../assets/loading.gif" style="height: 30vh; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px; margin: auto;"></div>
      </div>
      <navbar/>
      <!-- <matchesFilters/> -->
    <blueFooter/>
  </div>
      </div>
</template>

<script>
  import * as Auth from '../Auth.js'
  import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'
  import matchesCards from './Matches-Cards.vue'
  import matchesFilters from './matches/Filters'
  import App from "../App";

  export default {
    name: 'shelter',
    data: function () {
      return {
        loading: true,
        currentUser: `${Auth.currentUser}`
      }
    },
    components: {
      navbar,
      matchesCards,
      blueFooter,
      matchesFilters,
    },
    
    methods: {
        async getShelterPets(){
            try{
            this.shelter = await ShelterAPI.getShelterPets()
            console.log(this.shelter)
            this.render()
            }catch(err){
            Toast(err, 'error')
            }
        }
    },
  }

</script>

<style>

  #home {
    min-height: 100vh;
    background-color: #D9CDBF;
    overflow: hidden;
  }

  button {
    background-color: #FFFBF8;
    border-radius: 40px;
    height: 5vh;
    width: 10vw;
    border-color: #f2a2b1;
    margin-bottom: 30px;
  }
  .loading {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #EBDAD1;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
  }
</style>