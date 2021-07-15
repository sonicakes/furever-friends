<template>
  <div style="max-width: 100vw; padding-top: 50px; padding-bottom: 20px;" >
    <h3 style="text-align:center; padding-bottom:10px;">ANIMALS WAITING FOR YOU</h3>
    <VueSlickCarousel :arrows="true" :slidesToShow="3" :speed="500" :variableWidth="true" :dots="true" :centerMode="true">
      <div class="card"><img src="../assets/resized/cat-1.jpg" height="350px" style="border-radius: 10px;"></div>
      <div class="card"><img src="../assets/resized/dog-1.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/cat-2.jpg" height="350px"></div>
      <div class="card"><img src="../assets/dog-2.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/cat-3.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/dog-3.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/cat-4.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/dog-4.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/cat-5.jpg" height="350px"></div>
      <div class="card"><img src="../assets/resized/dog-5.jpg" height="350px"></div>
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
@import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');

h3 {
  font-family: 'Otomanopee One', sans-serif;
}
</style>