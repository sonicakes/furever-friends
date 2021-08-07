<template>
    <div>
        <navbar/>
        <div class="page-content" style="background-color: #d9cdbf">
            <div class="row" style="margin: auto; position: absolute; top: 10%">
                <div class="col-5" style="align: right; position: relative;">
                    <vueper-slides autoplay :slide-ratio="3 / 2" margin="auto" :bullets="false" style="right: 0px; width:20vw; position: absolute; margin-right: 5vw;" fixed-height="60vh">
                    <template #arrow-right>
                        <i class="fas fa-chevron-right" style="right: 10px; position: absolute; color: black;"></i>
                    </template>

                    <template #arrow-left>
                        <i class="fas fa-chevron-left" style="left: 10px; position: absolute; color: black;"></i>
                    </template>
                    <vueper-slide v-for="image in pet.images" 
                        :key="image"
                        :image = "image"/>

                    </vueper-slides>
                </div>
                <div class="col-6" style="align: left;">
                        <h1 style="text-align: center;">MEET {{ pet.name }}!</h1>
                        <p>{{ pet.description }}</p>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <blueFooter/>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
export default {
    data() {
        return {
            pet: {
                images: [require('../assets/resized/cat-2.jpg'), require('../assets/resized/cat-1.jpg'), require('../assets/resized/cat-3.jpg'), require('../assets/cat-4.jpg'),  require('../assets/resized/cat-5.jpg'), require('../assets/resized/dog-1.jpg'), require('../assets/dog-3.jpg')],
                name: 'Max'.toUpperCase(),
                description: "Lick sellotape adventure always shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff or sleeps on my head mice i like frogs and 0 gravity. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap cat is love, cat is life, or throwup on your pillow cat not kitten around but grass smells good or eat all the power cords. Under the bed carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Make meme, make cute face my slave human didn't give me any food so i pooped on the floor kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment for have my breakfast spaghetti yarn so why must they do that nya nya nyan but shred all toilet paper and spread around the house. Morning beauty routine of licking self sniff catnip and act crazy and russian blue. Hunt anything. Knock dish off table head butt cant eat out of my own dish cats are fats i like to pets them they like to meow back litter box is life pee on walls it smells like breakfast and meowwww cats secretly make all the worlds muffins or catch mouse and gave it as a "
            },
        }
    },
    components: {
        navbar,
        VueperSlides,
        VueperSlide,
        blueFooter  
    }   
}
</script>

<style scoped>
p {
    font-size: 1vw;
    color: black;
}
</style> 