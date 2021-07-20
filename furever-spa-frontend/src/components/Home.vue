<template>
  <div id="home" class="small-container" padding-bottom="50px" >
    <navbar></navbar>    
    <frontVideo/>
    <carousel/>
    <div style="width: 100%; text-align: center;">
      <button>Find a Match</button>
    </div>
    <blueFooter></blueFooter>
  </div>
</template>

<script>
  import {updateUser} from '../UserAPI.js';
  import navbar from './Navbar.vue'
  import carousel from './Image-Carousel.vue'
  import frontVideo from './Video.vue'
  import blueFooter from './Footer.vue'

  export default {
    components: {
      navbar,
      frontVideo,
      carousel,
      blueFooter
    },
  }

</script>

<style>
  #home {
    position: relative;
    background-color: #EBDAD1;
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