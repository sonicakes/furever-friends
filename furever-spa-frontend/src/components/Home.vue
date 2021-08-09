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
  import navbar from './navbar.vue'
  import carousel from './image-carousel.vue'
  import frontVideo from './video.vue'
  import blueFooter from './footer.vue'

  export default {
    components: {
      navbar,
      frontVideo,
      carousel,
      blueFooter
    },
  }

</script>

<style scoped>
  #home {
    position: relative;
    background-color: #d9cdbf;
  }

  button {
    background-color: #FFFBF8;
    border-radius: 40px;
    height: 5vh;
    width: auto;
    padding-right: 40px;
    padding-left: 40px;
    border-color: #f2a2b1;
    margin-bottom: 8vh;
  }

</style>