<template>
  <div id="home" class="small-container" style="">
    <navbar></navbar>    
    <frontVideo/>
    <carousel/>
    <div style="width: 100%; text-align: center;">
      <div class="button" id="button-2">
        <div id="slide"></div>
        <a href="/matches">Find your Match</a>
      </div> 
    </div>
    <counter/>
    <blueFooter></blueFooter>
  </div>
</template>

<script>
  import {updateUser} from '../UserAPI.js';
  import counter from './Counter.vue'
  import navbar from './Navbar.vue'
  import carousel from './Image-Carousel.vue'
  import frontVideo from './video.vue'
  import blueFooter from './footer.vue'

  export default {
    components: {
      navbar,
      frontVideo,
      carousel,
      counter,
      blueFooter
    },
  }

</script>

<style scoped>
  #home {
    padding-bottom:7.75rem;
    position: relative;
    background-color: #d9cdbf;
  }

  @media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #home {
  object-fit: cover;
  padding-bottom: 44px;
}
}



.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #637365;
  margin: 20px 20px 20px 20px;
  color: #637365;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 50px;
}

a {
  color: #637365;
  text-decoration: none;
  letter-spacing: 1px;
}


/* Second Button */

#button-2 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-2 a {
  position: relative;
  transition: all .35s ease-Out;
}

#slide {
  width: 100%;
  height: 100%;
  left: -200px;
  background: #637365;
  position: absolute;
  transition: all .35s ease-Out;
  bottom: 0;
}

#button-2:hover #slide {
  left: 0;
}

#button-2:hover a {
  color: #ffffff;
}


</style>