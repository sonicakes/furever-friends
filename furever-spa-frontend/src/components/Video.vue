<template>
  <div style="overflow: hidden;">
    <video autoplay muted loop id="myVideo" style="right: 0; left: 0; position: relative; min-width: 100vw; max-height: 100vh !important; background-size: cover;">
        <source src="..\assets\video.mp4" type="video/mp4" >
    </video>
    <h1 id="text">Find your pawfect match</h1>
  </div>

</template>
<script>
  export default {
    name: 'frontVideo',
  }
</script>

<style scoped>

.container{
    width: 100vw;
    overflow:hidden;
    display:block;
    height: 100px;
}

#myVideo {
  object-fit: cover;
}

  #text {
    font-family: 'Otomanopee One', sans-serif;  
    color: white;
    position:absolute;
    top:40vh;
    margin:auto;
    width:100%;
    text-align:center;
  }
</style>