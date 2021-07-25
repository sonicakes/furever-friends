<template>
    <div>
        <navbar/>
        <blueFooter/>
    </div>
</template>

<script>
  import * as Auth from '../Auth.js'
  import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'

export default {
    data() {
        return {
            currentUser: `${Auth.currentUser}`
        }
    }
}
</script>

<style>

</style>