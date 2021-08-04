<template>
    <div>
        <navbar/>
        <div class="page-content" style="background-color: #D9CDBF;">
            <h1 style="text-align: center;">PREFERENCES</h1>
            <div class="row">
                <div class="col mx-auto">
                    <div class="ar-image" onclick='window.location.href="/about"'>
                        <div class="article-image">
                        </div>
                        <h2><div>ABOUT ME<br>Questionnaire</div></h2>
                    </div>
                    <h3 style="padding-top: 10px; width: 75%; margin: auto;">You last completed this questionnaire on [DATE]</h3>
                    <p style="width: 75%; margin: auto;">If your details have changed, please feel free to update your information by retaking the questionnaire.</p>
                </div>
                <div class="col mx-auto">
                    <div class="ar-image" onclick='window.location.href="/"'>
                        <div class="article-image-2">
                        </div>
                        <h2><div>MY IDEAL PET<br/> Questionnaire</div></h2>
                    </div>
                    <h3 style="padding-top: 10px; width: 75%; margin: auto;">You last completed this questionnaire on [DATE]</h3>
                    <p style="width: 75%; margin: auto;">If your details have changed, please feel free to update your information by retaking the questionnaire.</p>
                </div>
            </div>
        </div>
        <blueFooter/>
    </div>
</template>

<script>
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
export default {
    components: {
        navbar,
        blueFooter  
    }
}
</script>

<style scoped>
.article-image, .article-image-2 {
    height: 50vh;
    width: 80%;
}

.article-image::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: url('../assets/cat-4.jpg');
    -webkit-filter: grayscale(0) blur(0);
    filter: grayscale(0) blur(0);
    transition: .4s ease-in-out;
    background-size: cover;
    background-position: 10% 40%;
    background-clip: border-box;
    border-radius: 20px;
    margin: 0 auto;
}

.article-image-2::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: url('../assets/dog-2.jpg');
    -webkit-filter: grayscale(0) blur(0);
    filter: grayscale(0) blur(0);
    transition: .4s ease-in-out;
    background-size: cover;
    background-position: 10% 30%;
    background-clip: border-box;
    border-radius: 20px;
}

.ar-image:hover .article-image::before, .ar-image:hover .article-image-2::before {
  -webkit-filter: grayscale(10%) blur(10px);
  filter: grayscale(10%) blur(2px);
  transition: .4s ease-in-out;
}
.ar-image {
  position: relative;
  width: 80%;
  height: 70%;
  margin: 0 auto;
}

.ar-image > h2 {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 40%;
    display: block;
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    z-index: 999999;
    right: 0;
    left: 0;
    text-align: center;
    transition: .4s ease-in-out;
}

.ar-image > h2 > div {
    width: max-content;
    margin: auto;
    border: 4px solid transparent;
}

.ar-image:hover > h2 > div {
    border: 4px solid gray;
}

h1 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 2em;
    padding-bottom: 3vh;
    text-align: center;
}

h3 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1.25rem;
    text-align: left;
}

p {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1rem;
    text-align: left;
}
</style>