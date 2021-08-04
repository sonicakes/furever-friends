<template>
  <div id="home" class="small-container" style="  position: relative;
  min-height: 100vh;">
  <div id="content-wrap" style="padding-bottom: 2.5rem; ">
      <navbar/>
      <div>{{ currentUser }}</div>
      <matchesCards/>        
    </div>
    <blueFooter/>
  </div>
</template>

<script>
  import * as Auth from '../Auth.js'
  import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'
  import matchesCards from './Matches-Cards.vue'

  export default {
    name: 'matches',
    data() {
      return {
        currentUser: `${Auth.currentUser}`
      }
    },
    components: {
      navbar,
      matchesCards,
      blueFooter
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

</style>