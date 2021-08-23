<template>
    <div id="footer">
        <div class="row top-footer">
            <div class="col" style="margin: 10px;border-right-color: white;border-right-style: solid;border-width: 2px;">
                <div class="row" style="padding-top: 1vh;">
                    <div class="col-3">
                        <img src="../assets/favicon.png" style="height: 4vh;position: absolute;right: 0;">
                    </div>
                    <div class="col-9">
                        <img src="../assets/logo.png" style="height: 4vh;position: absolute;left: 0;">
                        <p style="position: absolute;padding-top: 4vh; text-align: left; left: 0;">hello@fureverfriends.com</p>

                    </div>
                </div>
            </div>
            <div class="col" >
                <div class="row" style="margin: 10px; padding-top: 4%;">
                    <div class="col-1"></div>
                    <div class="col">
                        <i class="fab fa-facebook" style="color: white; font-size: 4vh;"></i>
                    </div>
                    <div class="col">
                       <i class="fab fa-twitter" style="color: white; font-size: 4vh;"></i> 
                    </div>
                    <div class="col">
                        <i class="fab fa-instagram" style="color: white; font-size: 4vh;"></i>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="col" style="margin: 10px; border-left-color: white;border-left-style: solid;border-width: 2px;">
                <a href="/">Home <img src="../assets/office-icon.png" style="height: 20px;"> </a><br>
                <a v-if="accessLevel === 0" href="/matches">Your Matches <img src="../assets/kennel.png" style="height: 20px;"> </a>
                <a v-else href="/matches">Your Matches <img src="../assets/kennel.png" style="height: 20px;"> </a><br>
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
        data() {
            return {
                accessLevel: JSON.parse(localStorage.getItem('user')).accessLevel
            }
        }
    }
</script>

<style scoped>



@media only screen and (max-width: 768px) {
  /* For mobile phones: */
    .top-footer {
        display: none;
    }
    p {
        padding-top: 10px;
    }
}

    a:hover {
        color: #e0d1c4;
    }

    a {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
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
        background-color: #778678;
        text-align: center;
        right: 0;
        z-index: 1000000;
    }

    p {
        padding-bottom: 10px;
        margin: auto;
        vertical-align: middle;
        color: white;
        text-align: center;
    }
</style>