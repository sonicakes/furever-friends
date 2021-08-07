<template>
    <div id="main" style="padding: 50px; padding-top: 118px; columns: 250px; column-gap: 20px; " min-height="100vh">
        <Waterfall>
            <WaterfallItem v-for="image in images"
                :key="image">
                <div class='grid-item' style="position: relative;">
                    <img 
                        :src="image"
                        alt="A kitten walks towards camera on top of pallet."
                        
                    >
                    <h2>
                        <div style="font-size: 3vh">Max</div>
                        <div>2 years old</div>
                        <div>MORE INFO</div>
                    </h2>
                    <p id="match" onClick="$(this).toggleClass('matchClick');"></p>
                </div>
            </WaterfallItem>
        </Waterfall>
    </div>
</template>

<script>
import {Waterfall, WaterfallItem} from 'vue2-waterfall';
import PetAPI from '../PetAPI.js'
export default {
    name: 'matchesCards',
    data: function() {
        return {
            pet: PetAPI.getPet('Test1'),
            images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-1.jpg'), require('../assets/resized/cat-3.jpg'), require('../assets/cat-4.jpg'),  require('../assets/resized/cat-5.jpg'), require('../assets/resized/dog-1.jpg'), require('../assets/dog-3.jpg')],
            options: {  columnWidth: '.grid-item',
                        itemSelector: '.grid-item'},
            // images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-2.jpg')]
        };
    },
    mounted() {
    },
}
</script>

<style scoped>

img {
    width: 100%;
    height: 100%;
}

h2 > div {
    width: max-content;
    margin: auto;
    border: 4px solid transparent;
}

 h2 {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 0;
    display: block;
    color: #ffffff;
    font-size: 2vh;
    font-weight: bold;
    z-index: 999999;
    right: 0;
    left: 0;
    text-align: center;
    transition: .4s ease-in-out;
}


.grid-item {
    overflow: hidden;
    padding-bottom: 5vw;
}

.grid-item:hover img {
    -webkit-filter: grayscale(50%) blur(10px);
    filter: brightness(50%) blur(2px);
    transition: .4s ease-in-out;
}

.grid-item:hover > h2 > div {
    display: block;
}

.grid-item h2 > div {
    display: none;
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
    background-position: right center !important; 
}

    /* Code taken from https://codemyui.com/pure-css-twitter-heart-animation/ */
    #match {
        width: 10vw;
        height: 10vw;
        position: absolute;
        left: 50%;
        right: 50%;
        background-size: cover;
        transform: translate(-50%, -50%);
        background-image: url('../assets/heart.png');
        background-repeat: no-repeat;
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
        background-position: left center;
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