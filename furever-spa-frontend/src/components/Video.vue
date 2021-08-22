<template>
  <div style="overflow: hidden;">
    <video autoplay muted loop id="myVideo" style="">
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
@media only screen and (max-width: 414px) {
  /* For mobile phones: */
  #myVideo {
  object-fit: cover;
  margin-left: -100% !important;
}
}

@media only screen and (max-width: 768px) and (min-height: 1024px) {
  /* For mobile phones: */
  #myVideo {
  object-fit: cover;
  margin-left: -70% !important;
}
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #myVideo {
  object-fit: cover;
}
}

.container{
    width: 100vw;
    overflow:hidden;
    display:block;
    height: 100px;
}

#myVideo {
  object-fit: cover;
  right: 0; left: 0; position: relative; min-width: 100vw; max-height: 100vh !important; background-size: cover;
}

  #text {
    font-family: 'Montserrat', sans-serif;  
    font-weight: bolder;
    font-size: 3rem;
    color: white;
    position:absolute;
    top:40vh;
    margin:auto;
    width:100%;
    text-align:center;
  }
</style>