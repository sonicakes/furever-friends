<template>
  <div id="navbar">
    <ul style='background-color: rgb(255, 253, 232);'>
        <li><a class="active" href="#about"><i class="fas fa-bars fa-xl" style="margin-top: 10px"></i></a></li>
        <li style="display:inline-block"><img src="../assets/logo.png" height="40px" style="margin-top:10px; position: absolute; right: 47vw"><li>
        <li style="float:right"><a href="#contact"><i class="fas fa-cogs" style="margin-top: 10px"></i></a></li>
        <li style="float:right"><a href="#news"><i class="fas fa-user" style="margin-top: 10px"></i></a></li>
        <li style="float:right"><a href="#home"><i class="fas fa-heart" style="margin-top: 10px"></i></a></li>
    </ul> 
  </div>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<style>
#navbar {
    position: sticky;
    max-width: 100vw;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 68px;
  width: 68px;
}

/* Change the link color on hover */
li a:hover {
  background-color: rgb(182, 182, 182);
}
</style>