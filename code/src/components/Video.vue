<template>
  <div>
    <video autoplay muted loop id="myVideo">
        <source src="..\assets\video.mp4" type="video/mp4">
    </video>
    <h1 id="text">Find your pawfect match</h1>
  </div>

</template>
<script>
  export default {
    name: 'frontVideo',
  }
</script>

<style>
  #myVideo {
    position:static;
    width: 100%;
  }

  #text {
    color: white;
    position:absolute;
    top:40vh;
    margin:auto;
    width:100%;
    text-align:center;
  }
</style>