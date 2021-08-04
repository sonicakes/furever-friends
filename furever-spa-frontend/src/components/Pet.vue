<template>
    <div>
        <navbar/>
        <div class="page-content"></div>
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

<style>

</style>