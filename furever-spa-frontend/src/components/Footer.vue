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
        z-index: 1000000;
    }

    p {
        padding-top: 10px;
        padding-bottom: 10px;
        margin: auto;
        vertical-align: middle;
        color: white;
        text-align: center;
    }
</style>