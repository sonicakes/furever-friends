<template>
  <div id="home" class="small-container" style="  position: relative;
  min-height: 100vh;">
  <div id="content-wrap">
    <div v-if="loading">
      <div style="position: absolute; z-index: 100; height: 90%; padding-top: 70px; padding-bottom: 45px; margin: auto; width: 100%;background-color: #d9cdbf;"><img src="../assets/loading.gif" style="height: 30vh; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px; margin: auto;"><h1 style="text-align: center;position: absolute;margin: auto;width: 100vw;bottom: 25vh;">Loading Matches</h1></div>
    </div>
      <navbar/>
      <matchesFilters/>
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
    name: 'matches',
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
    created () {
      this.fetchData();
    },
    methods: {
      fetchData () {
        if (JSON.parse(localStorage.user).accessLevel === 1) {
          fetch(`${App.apiBase}/shelter/`, { headers: { "Authorization": `Bearer ${localStorage.accessToken}`} }).then(r => r.json()).then(j => {
          this.$store.commit('setMatchesResults', j);
          setTimeout(() => this.loading = false, 1500);
        })
        }
         else {
           fetch(`${App.apiBase}/pet/`).then(r => r.json()).then(j => {
          this.$store.commit('setMatchesResults', j);
          setTimeout(() => this.loading = false, 1500);
        })
         }
      }
    },
  }

</script>

<style>
 #home {
    position: relative;
    background-color: #d9cdbf;
  }

  @media only screen and (max-width:375px) {
  /* For mobile phones: */
    #home {
    object-fit: cover;
    }
    #home::after {
      content: '';
      display: block;
      height: 68px !important;
    }
}
  @media only screen and (max-width:768px) {
  /* For mobile phones: */
    #home {
    object-fit: cover;
    }
    #home::after {
      content: '';
      display: block;
      height: 44px !important;
    }
}

#home::after {
    content: '';
    display: block;
    height: 150px;
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
