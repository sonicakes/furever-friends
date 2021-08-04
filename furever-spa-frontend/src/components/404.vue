<template>
    <div>
        <navbar/>
        <div class="page-content">
            <h1>Error 404</h1>
            <h4>Oh no - it appears this page has been catnapped!</h4>
            <img src="../assets/cat-404-small.jpg" style="height: 50vh;margin: auto;position: absolute;left: 0;right: 0;">
            <div class="button" id="button-6">
                <div id="spin"></div>
                <a href="/">Go Back Home</a>
            </div>
        </div>
        <blueFooter/>
        </div>
</template>

<script>
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
export default {
    name: 'error',
    components: {
        navbar,
        blueFooter  
    }
}
</script>

<style scoped>

/* https://codepen.io/atloomer/pen/JEaRWX */
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400');
    
.button {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 20vh;
    display: inline-flex;
    height: 40px;
    width: 150px;
    border: 2px solid #D9CDBF;
    margin: auto;
    color: #D9CDBF;
    text-transform: uppercase;
    text-decoration: none;
    font-size: .8em;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

a {
    color: #c4b8ab;
    text-decoration: none;
    letter-spacing: 1px;
}


#button-6 {
    overflow: hidden;
    cursor: pointer;
}

#button-6 a {
    position: relative;
    transition: all .45s ease-Out;
}

#spin {
    width: 0;
    height: 0;
    opacity: 0;
    left: 70px;
    top: 20px;
    transform: rotate(0deg);
    background: none;
    position: absolute;
    transition: all .5s ease-Out;
}

#button-6:hover #spin {
    width: 200%;
    height: 500%;
    opacity: 1;
    left: -70px;
    top: -70px;
    background: #d9cdbf;
    transform: rotate(80deg);
}

#button-6:hover a {
    color: #2D3142;
}



    
h1 {
    padding-top: 6vh;
    text-align: center;
}

h4 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1.25rem;
    text-align: center;
}

button {

    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
}
</style>