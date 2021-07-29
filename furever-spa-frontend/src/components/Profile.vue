<template>
<div>
        <navbar/>
    <div class="page-content calign">    

        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        <h2>{{ currentUser }}</h2>

        <div class="row">
            <div class="col">
                <a href="/add">Add Pet</a>
            </div>
            <div class="col">
                <a href="/add">Update Info</a>
            </div>
        <div>
    </div>
    <blueFooter/>
    </div>
</template>

<script>
import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'
export default {
    data: function() {
        return {
            currentUser: JSON.parse(localStorage.user).firstName +  " " + JSON.parse(localStorage.user).lastName
        }
    },
    components: {
        navbar,
        blueFooter
    }
}
</script>

<style>

</style>