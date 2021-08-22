<template>
<div>
  <div id="navbar" style='background-color: #FFFBF8;'>
    <ul>
		<li id="nav-menu" class="nav-item dropdown" style="cursor: pointer;">
			<!-- <a class="nav-link dropdown-toggle top-navbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<div class="navTrigger">
					<i></i><i></i><i></i>
				</div>
			</a> -->
			<dropdown :before-open="callback" :is-icon="false" :class-name="'my-class'">
				<template slot="btn">
					<div class="navTriggerContainer">
					<div class="navTrigger" style="margin: auto; position: absolute; right: 0; left: 0; top: 0; bottom: 0;" onclick="$(this).toggleClass('active')">
						<i></i><i></i><i></i>
					</div>
					</div>
				</template>
				<template slot="body">
					<ul>
					<li class="padded"><a href="/"><img src="../assets/office-icon.png" style="height: 20px;"> Home</a></li>
					<li class="padded" v-if="accessLevel === 1"><a href="/matches"><img src="../assets/kennel.png" style="height: 20px;"> Your Matches</a></li>
					<li class="padded" v-else><a href="/matches"><img src="../assets/kennel.png" style="height: 20px;"> Your Matches</a></li>
					<li class="padded"><a href="/saved"><img src="../assets/heart-icon.png" style="height: 20px;"> Your Favourites</a></li>
					<li class="padded">
						<dropdown :trigger="'hover'" :role="'sublist'" :align="'bottom'">
						<template slot="btn"><img src="../assets/user.png" style="height: 20px; padding-right: 7px;">Account</template>
						<template slot="body">
							<ul>
								<li class="padded"><a style="text-decoration: none !important;" href="/profile">Profile</a></li>
								<li class="padded"><a style="text-decoration: none !important;" href="/edit">Edit Profile</a></li>
								<li class="padded"><a style="text-decoration: none !important;" v-on:click="logout()">Log Out</a></li>
							</ul>
						</template>
						</dropdown>
					</li>

					</ul>
				</template>
				</dropdown>
		</li>
        <li style="display:inline-block"><a href="/"><img class="navbar-img" src="../assets/logo.png" height="40px" style="margin-top:10px; position: absolute; right: 47vw"></a><li>

        <li style="float:right">
          <a href="/profile" class="nav-item top-navbar" id="user">
            <img src="../assets/user.png" height="100%">
          </a>
        </li> 	

        <li style="float:right">
          <a href="/saved" class="nav-item top-navbar" id="heart">
            <img src="../assets/heart-icon.png" class="heart" style="height: 80%">
          </a>
        </li>
		<li style="float:right">
          <a href="/matches" class="nav-item top-navbar" id="kennel" style="padding: 12px 12px;">
            <img src="../assets/kennel.png" style="height: 100%; width: 100%;">
          </a>
        </li>
    </ul> 
  </div>
</div>
</template>

<script>
import Dropdown from 'bp-vuejs-dropdown';
import {matches} from '../index.js';
import Auth from '../Auth.js';

	export default {
 	   name: 'navbar',
		methods: {
			callback: resolve => {
				setTimeout(() => {
					document.querySelector('.navTrigger').classList += ' active';
					resolve(); // don't forget call resolve!
				}, 3);
			},
            matches: () => {
                return matches;
            },
			logout: () => {
				event.preventDefault();
				Auth.signOut();
			}
        },
		data: {
			listOne:   false,
		},
		components: {
			Dropdown
		}
    }
</script>

<style scoped>

#user:hover {
	content:url('../assets/user-small-paw.png');
}

#kennel:hover {
	content:url('../assets/kennel-with-dog.png');
}

a {
	text-decoration: none;
}

a:hover {
	color: #637365;
}

.navTriggerContainer {
	height: 55px !important;
	width: 55px;
	border-width: 0px !important;
}

.my-class-bp__btn {
	border: none;
}

.padded {
	padding: 5px;
}

.dropdown-toggle::after {
	content: none;
}

#logo {
	width: 100vw; 
	margin: auto;
	position: fixed;
}
	
#navbar li ul li {
	width: 100%;
}

@keyframes heartbeat {
  0%
  {
    transform: scale( 1.25 );
  }
  20%
  {
    transform: scale( 1.5 );
  }
  40%
  {
    transform: scale( 1.25 );
  }
  60%
  {
    transform: scale( 1.5 );
  }
  80%
  {
    transform: scale( 1.25 );
  }
  100%
  {
    transform: scale( 1.25 );
  }
}
.cogs:hover .spin, .cogs:hover .spin-back {
  animation-play-state: running;
}

#heart:hover .heart {
	animation-play-state: running;
}

.heart {
	animation: heartbeat 1s infinite;
	animation-play-state: paused;
}

.three-cogs {
	position: relative;
    padding-top: 5px;
}

.spin {
  animation: cog-spin 4s infinite linear;
  animation-play-state: paused;
}

#cog2 {
  position: absolute;
  top: -0.05em;
  right: -0.25em;
}

.spin-back {
  animation: cog-spin 2s infinite linear;
  animation-direction: reverse;
  animation-play-state: paused;
}

@keyframes cog-spin {
  from {
        transform:rotate(0deg);
    }
  to {
    transform:rotate(360deg);
  }
}
 

#navbar {
    position: fixed;
    width: 100%;
    z-index: 10000;
}

.navMenu {
  cursor: pointer;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
}

.top-navbar{
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 68px;
  width: 72px;
}

/* Change the link color on hover */
.top-navbar:hover {
  background-color: rgb(182, 182, 182);
}


/* Code from https://codepen.io/dicson/pen/waKPgQ used under education license */

.my-class-bp__btn .navTrigger {
	 cursor: pointer;
	 width: 30px;
	 height: 25px;
	 margin: auto;
   margin-top: 8px;
}
 .my-class-bp__btn .navTrigger i {
	 background-color: #000;
	 border-radius: 2px;
	 content: '';
	 display: block;
	 width: 100%;
	 height: 4px;
}
 .my-class-bp__btn .navTrigger i:nth-child(1) {
	 -webkit-animation: outT 0.8s backwards;
	 animation: outT 0.8s backwards;
	 -webkit-animation-direction: reverse;
	 animation-direction: reverse;
}
 .my-class-bp__btn .navTrigger i:nth-child(2) {
	 margin: 5px 0;
	 -webkit-animation: outM 0.8s backwards;
	 animation: outM 0.8s backwards;
	 -webkit-animation-direction: reverse;
	 animation-direction: reverse;
}
 .my-class-bp__btn .navTrigger i:nth-child(3) {
	 -webkit-animation: outBtm 0.8s backwards;
	 animation: outBtm 0.8s backwards;
	 -webkit-animation-direction: reverse;
	 animation-direction: reverse;
}
 .my-class-bp__btn--active .navTrigger i:nth-child(1) {
	 -webkit-animation: inT 0.8s forwards;
	 animation: inT 0.8s forwards;
}
 .my-class-bp__btn--active .navTrigger i:nth-child(2) {
	 -webkit-animation: inM 0.8s forwards;
	 animation: inM 0.8s forwards;
}
 .my-class-bp__btn--active .navTrigger i:nth-child(3) {
	 -webkit-animation: inBtm 0.8s forwards;
	 animation: inBtm 0.8s forwards;
}
 @-webkit-keyframes inM {
	 50% {
		 -webkit-transform: rotate(0deg);
	}
	 100% {
		 -webkit-transform: rotate(45deg);
	}
}
 @keyframes inM {
	 50% {
		 transform: rotate(0deg);
	}
	 100% {
		 transform: rotate(45deg);
	}
}
 @-webkit-keyframes outM {
	 50% {
		 -webkit-transform: rotate(0deg);
	}
	 100% {
		 -webkit-transform: rotate(45deg);
	}
}
 @keyframes outM {
	 50% {
		 transform: rotate(0deg);
	}
	 100% {
		 transform: rotate(45deg);
	}
}
 @-webkit-keyframes inT {
	 0% {
		 -webkit-transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 -webkit-transform: translateY(9px) rotate(0deg);
	}
	 100% {
		 -webkit-transform: translateY(9px) rotate(135deg);
	}
}
 @keyframes inT {
	 0% {
		 transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 transform: translateY(9px) rotate(0deg);
	}
	 100% {
		 transform: translateY(9px) rotate(135deg);
	}
}
 @-webkit-keyframes outT {
	 0% {
		 -webkit-transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 -webkit-transform: translateY(9px) rotate(0deg);
	}
	 100% {
		 -webkit-transform: translateY(9px) rotate(135deg);
	}
}
 @keyframes outT {
	 0% {
		 transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 transform: translateY(9px) rotate(0deg);
	}
	 100% {
		 transform: translateY(9px) rotate(135deg);
	}
}
 @-webkit-keyframes inBtm {
	 0% {
		 -webkit-transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 -webkit-transform: translateY(-9px) rotate(0deg);
	}
	 100% {
		 -webkit-transform: translateY(-9px) rotate(135deg);
	}
}
 @keyframes inBtm {
	 0% {
		 transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 transform: translateY(-9px) rotate(0deg);
	}
	 100% {
		 transform: translateY(-9px) rotate(135deg);
	}
}
 @-webkit-keyframes outBtm {
	 0% {
		 -webkit-transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 -webkit-transform: translateY(-9px) rotate(0deg);
	}
	 100% {
		 -webkit-transform: translateY(-9px) rotate(135deg);
	}
}
 @keyframes outBtm {
	 0% {
		 transform: translateY(0px) rotate(0deg);
	}
	 50% {
		 transform: translateY(-9px) rotate(0deg);
	}
	 100% {
		 transform: translateY(-9px) rotate(135deg);
	}
}
 
</style>