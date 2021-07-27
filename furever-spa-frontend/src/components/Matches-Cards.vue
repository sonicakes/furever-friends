<template>
    <div id="main" style="padding: 50px; padding-top: 118px; columns: 200px; column-gap: 20px; " min-height="100vh">
        <article>
        <li v-for="image in images" :key="image" style="list-style: none; margin: auto;">
                <img 
                  slot="image" 
                  :src="image"
                  alt="A kitten walks towards camera on top of pallet."
                  width="100%"
                >
                <p id="match" onClick="$(this).toggleClass('matchClick');"></p>
        </li>
        </article>
    </div>
</template>

<script>
export default {
    name: 'matchesCards',
    data: function() {
        return {
            images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-1.jpg'), require('../assets/resized/cat-3.jpg'), require('../assets/cat-4.jpg'),  require('../assets/resized/cat-5.jpg'), require('../assets/resized/dog-1.jpg'), require('../assets/dog-3.jpg')]
            // images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg')]
        };
    }
}
</script>

<style scoped>
    * {
	box-sizing: border-box;
}

    img {
      width: 100%;
    }

article {
	column-width: auto;
	column-gap: 0.5em;
}

section {
	display: inline-block;
	margin:  0.25rem;
	padding:  1rem;
	width:  100%; 
	border: 0.1em solid black;
}
    .matchClick {
        animation-play-state: running !important;
        transition: background 1s steps(28) !important;
        background-position: -2800px 0 !important; 

    }

    /* Code taken from https://codemyui.com/pure-css-twitter-heart-animation/ */
    #match {
    width: 100px;
    height: 100px;
    top: 25px;  
    position: relative;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    background: url(https://cssanimation.rocks/images/posts/steps/heart.png) no-repeat;
    background-position: 0 0;
    cursor: pointer;
    animation-play-state: paused;
    animation: fave-heart 1s steps(28);
    }
    
    @keyframes fave-heart {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -2800px 0;
    }
    }

    .card-image {
        max-width: 250px;
        margin: 10px;
    }

    .animal-img {
        height: 100%;
        width: 300px;
        
    }
</style>