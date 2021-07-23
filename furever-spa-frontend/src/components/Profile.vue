<template>
    <div class="page-content calign">    
        <sl-avatar style="--size: 200px; margin-bottom: 1em;">
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        <h2>{{ currentUser }}</h2>
</template>

<script>
import Auth from '../Auth.js'
export default {
    data: function() {
        return {
            currentUser: Auth.currentUser.firstName + " " + Auth.currentUser.lastName     
        }
    }
}
</script>

<style>

</style>