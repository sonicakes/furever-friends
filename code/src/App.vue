<template>
  <div id="app" class="small-container">
    <navbar/>    
    <frontVideo/>
    <carousel/>

  </div>
</template>

<script>
  import navbar from './components/Navbar.vue'
  import carousel from './components/Image-Carousel.vue'
  import frontVideo from './components/Video.vue'

  export default {
    name: 'app',
    components: {
      navbar,
      frontVideo,
      carousel
    },
  }

  
</script>

<style scoped>
  #app {
    background-color: #EBDAD1;
  }


</style>