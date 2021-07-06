<template>
  <div id="home" class="small-container">
    <navbar/>        
    <blueFooter/>
  </div>
</template>

<script>
  import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'

  export default {
    name: 'matches',
    components: {
      navbar,
      blueFooter
    },
  }

</script>

<style>
  #home {
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