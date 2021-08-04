<template>
    <div id="footer">
        <p>Proudly presented by KRESS Studios. Copyright 2021</p>
    </div>
</template>

<script>
    export default {
        name: 'blueFooter',
    }
</script>

<style scoped>
    #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: min-content;
        width: 100%;
        background-color: #637365;
        text-align: center;
        right: 0;
    }

    p {
        padding-top: 10px;
        margin: auto;
        vertical-align: middle;
        height: 3rem;
        color: white;
        text-align: center;
    }
</style>