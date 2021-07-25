<template>
  <div style="max-width: 100vw;" >
    <h3 style="text-align:center; padding-bottom:10px;">ANIMALS WAITING FOR YOU</h3>
    <VueSlickCarousel :arrows="true" :slidesToShow="3" :speed="500" :variableWidth="true" :dots="true" :centerMode="true">
      <div class="card"><img src="../assets/cat-1.jpg" height="350px" style="border-radius: 10px;"></div>
      <div class="card"><img src="../assets/dog-1.jpg" height="350px"></div>
      <div class="card"><img src="../assets/cat-2.jpg" height="350px"></div>
      <div class="card"><img src="../assets/dog-2.jpg" height="350px"></div>
      <div class="card"><img src="../assets/cat-3.jpg" height="350px"></div>
      <div class="card"><img src="../assets/dog-3.jpg" height="350px"></div>
      <div class="card"><img src="../assets/cat-4.jpg" height="350px"></div>
      <div class="card"><img src="../assets/dog-4.jpg" height="350px"></div>
      <div class="card"><img src="../assets/cat-5.jpg" height="350px"></div>
      <div class="card"><img src="../assets/dog-5.jpg" height="350px"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'carousel',
    components: { VueSlickCarousel },
  }
</script>

<style>
</style>