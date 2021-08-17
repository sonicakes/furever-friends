<template>
    <div id="footer">
        <div class="row">
            <div class="col" style="margin: 20px;border-right-color: white;border-right-style: solid;border-width: 2px;">
                <div class="row" style="padding-top: 2vh;">
                    <div class="col-3">
                        <img src="../assets/favicon.png" style="height: 5vh;position: absolute;right: 0;">
                    </div>
                    <div class="col-9">
                        <img src="../assets/logo.png" style="height: 5vh;position: absolute;left: 0;">
                        <p style="padding-top: 5vh; text-align: left;">hello@fureverfriends.com</p>

                    </div>
                </div>
            </div>
            <div class="col" >
                <div class="row" style="margin: 20px; padding-top: 6%;">
                    <div class="col-1"></div>
                    <div class="col">
                        <i class="fab fa-facebook" style="color: white; font-size: 5vh;"></i>
                    </div>
                    <div class="col">
                       <i class="fab fa-twitter" style="color: white; font-size: 5vh;"></i> 
                    </div>
                    <div class="col">
                        <i class="fab fa-instagram" style="color: white; font-size: 5vh;"></i>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="col" style="margin: 20px; border-left-color: white;border-left-style: solid;border-width: 2px;">
                <a href="/" style="margin-right: 26px">Home </a><br>
                <a href="/matches">Your Matches <img src="../assets/kennel.png" style="height: 20px;"> </a><br>
                <a href="/saved">Your Favourites <img src="../assets/heart-icon.png" style="height: 20px;"></a><br>
                <a href="/profile">Account <img src="../assets/user.png" style="height: 20px;"></a><br>
            </div>
        </div>
        <p>Proudly presented by KRESS Studios. Copyright 2021</p>
    </div>
</template>

<script>
    export default {
        name: 'blueFooter',
    }
</script>

<style scoped>

    a:hover {
        color: #e0d1c4;
    }

    a {
        font-family: 'Montserrat', sans-serif;
        font-size: 19px;
        text-align: right !important;
        position: absolute;
        right: 20%;
        text-decoration: none;
        color: white;
        padding-right: 20px;
    }

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