<template>
    <div id="main" style="padding: 50px; padding-top: 118px; columns: 200px; column-gap: 20px; " min-height="100vh">
        <Waterfall >
            <WaterfallItem v-for="image in images"
                :key="image">
                <div class='grid-item' style="position: relative;">
                    <img 
                        :src="image"
                        alt="A kitten walks towards camera on top of pallet."
                        width="100%"
                    >
                    <h2><div>MORE INFO</div></h2>
                    <p id="match" onClick="$(this).toggleClass('matchClick');"></p>
                </div>
            </WaterfallItem>
        </Waterfall>
    </div>
</template>

<script>
import {Waterfall, WaterfallItem} from 'vue2-waterfall';
export default {
    name: 'matchesCards',
    data: function() {
        return {
            images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-1.jpg'), require('../assets/resized/cat-3.jpg'), require('../assets/cat-4.jpg'),  require('../assets/resized/cat-5.jpg'), require('../assets/resized/dog-1.jpg'), require('../assets/dog-3.jpg')],
            options: {  columnWidth: '.grid-item',
                        itemSelector: '.grid-item'},
            // images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg')]
        };
    },
}
</script>

<style scoped>
h2 > div {
    width: max-content;
    margin: auto;
    border: 4px solid transparent;
}

 h2 {
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

.grid-item {
    overflow: hidden;
}

.grid-item img:hover {
    -webkit-filter: grayscale(10%) blur(10px);
  filter: grayscale(10%) blur(2px);
  transition: .4s ease-in-out;
}
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
    position: relative;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    background: url('../assets/heart.png') no-repeat;
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