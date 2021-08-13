<template>
    <div>
        <navbar/>
        <div class="page-content" style="background-color: #d9cdbf">
            <div class="row" style="margin: auto;top: 10%">
                <!-- <div class="col-5 my-auto" style="align: right; position: relative;"> -->
                    <!-- <vueper-slides autoplay :slide-ratio="3 / 2" margin="auto" :bullets="false" style="right: 0px; width:20vw; position: absolute; margin-right: 5vw;" fixed-height="60vh">
                    <template #arrow-right>
                        <i class="fas fa-chevron-right" style="right: 10px; position: absolute; color: black;"></i>
                    </template>

                    <template #arrow-left>
                        <i class="fas fa-chevron-left" style="left: 10px; position: absolute; color: black;"></i>
                    </template>
                    <vueper-slide v-for="image in pet.images" 
                        :key="image"
                        :image = "image"/>

                    </vueper-slides> -->
                <img :src="srcImage(pet)" style="height: 40vh; width: auto; position: relative; margin: auto; border-radius: 30px;">
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-8">
                    <h1 style="text-align: center;">Meet {{ pet.petName }}!</h1>
                    <p>{{ pet.bio }}</p>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <blueFooter/>
    </div>
</template>

<script>
import {imgSrcDog, imgSrcCat} from "./matches/imagePlaceholders";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
import PetAPI from '../PetAPI'
export default {
    data() {
        return {
            pet: PetAPI.getPet(localStorage.getItem("currentPet"))
        }
    },
    components: {
        navbar,
        VueperSlides,
        VueperSlide,
        blueFooter  
    },
    mounted() {
        var self = this;
        var petPromise = PetAPI.getPet(localStorage.getItem("currentPet"));
        petPromise.then(function(response) {
            self.pet = response
            console.log(response)
        })
    },
    methods: {
        srcImage(pet) {
        let src;

        if (typeof(pet.photoData) !== 'undefined' && pet.photoData !== null) {
            src = 'data:' + pet.photoContentType + ';base64,' + Buffer.from(pet.photoData.data).toString('base64');

        } else if(pet.petType === 'dog') {
            src = imgSrcDog;

        } else {
            src = imgSrcCat;
        }

        return src;
        }
    },
}
</script>

<style scoped>
p {
    font-size: 15px;
    color: black;
    text-align: center;
}

h1 {
    padding: 10px;
}
</style> 