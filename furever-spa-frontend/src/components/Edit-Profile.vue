<template>
    <div>
        <navbar/>
        <blueFooter/>
    </div>
</template>

<script>
  import * as Auth from '../Auth.js'
  import navbar from './navbar.vue'
  import blueFooter from './footer.vue'

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