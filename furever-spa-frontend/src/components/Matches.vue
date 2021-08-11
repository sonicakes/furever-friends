<template>
  <div id="home" class="small-container" style="  position: relative;
  min-height: 100vh;">
  <div id="content-wrap" style="padding-bottom: 2.5rem;">
      <navbar/>
      <matchesFilters/>
      <matchesCards/>
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
        fetch(`${App.apiBase}/pet/`).then(r => r.json()).then(j => {
          this.$store.commit('setMatchesResults', j);
        })
      }
    }
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
</style>
