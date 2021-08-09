<template>
<div>
  <div id="navbar" style='background-color: #FFFBF8;'>
    <ul>
		<li id="nav-menu" class="nav-item dropdown" style="cursor: pointer;">
			<a class="nav-link dropdown-toggle top-navbar" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<div class="navTrigger">
					<i></i><i></i><i></i>
				</div>
			</a>
			<ul class="dropdown-menu" id="dropdown" aria-labelledby="navbarDarkDropdownMenuLink" style="border-radius: 0px; background-color: rgb(255, 251, 248); border-color: rgb(255, 251, 248); position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 68px);">
				<li onclick="$('sub-dropdown').toggleClass('display')" id="subDropdownLink"><a class="dropdown-item">Account</a></li>
				<li><a class="dropdown-item" href="#">Another action</a></li>
				<li><a class="dropdown-item" v-on:click="logout">Logout</a></li>
			</ul>
		</li>
        <li style="display:inline-block"><img class="navbar-img" src="../assets/logo.png" height="40px" style="margin-top:10px; position: absolute; right: 47vw"><li>


        <li class="cogs" style="float:right" onmouseover="function() { $('#cog1').removeClass('paused'); $('#cog1').addClass() }" onmouseout="function() { $('#cog1').addClass('paused'); }">
          <a class="nav-item top-navbar" exact href="/settings">
            <div class="three-cogs fa-1x">
              <i class="fa fa-cog fa-2x fa-fw spin" id="cog1"></i>
              <i class="fa fa-cog fa-1x fa-fw spin-back" id="cog2"></i>
            </div>
          </a>
        </li>

        <li style="float:right">
          <a href="/profile" class="nav-item top-navbar" exact>
            <i class="fas fa-user" style="margin-top: 10px"></i>
          </a>
        </li> 	

        <li style="float:right">
          <a href="/matches" class="nav-item top-navbar" exact id="heart">
            <i class="fas fa-heart heart" style="margin-top: 10px;scale: 1.25;"></i>
          </a>
        </li>
    </ul> 
  </div>
</div>
</template>

<script>

	import {matches} from '../index.js';
	import Auth from '../Auth.js';

	export default {
 	   name: 'navbar',
		methods: {
            matches: () => {
                return matches;
            },
			logout: () => {
				event.preventDefault();
				Auth.signOut();
			}
        },
		data: {listOne:   false},
		mounted() {

			$('#subDropdownLink').on('click', function() {
				e.preventDefault();
				$('#subDropdown').toggleClass('display');
			})

			$('#navbarDarkDropdownMenuLink').on('show.bs.dropdown', function () {
				$('.navTrigger').addClass('active');
			})

			$('#navbarDarkDropdownMenuLink').on('hide.bs.dropdown', function () {
				$('.navTrigger').removeClass('active');
			})
		}
    }
</script>

<style scoped>
.dropdown-submenu{
    position: relative;
}
.dropdown-submenu a::after{
    transform: rotate(-90deg);
    position: absolute;
    right: 3px;
    top: 40%;
}
.dropdown-submenu:hover .dropdown-menu, .dropdown-submenu:focus .dropdown-menu{
    display: flex;
    flex-direction: column;
    position: absolute !important;
    margin-top: -30px;
    left: 100%;
}


@media (max-width: 992px) {
    .dropdown-menu{
        width: 50%;
    }
    .dropdown-menu .dropdown-submenu{
        width: auto;
    }
}

.display {
	display: none;
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
    z-index: 100;
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

.navTrigger {
	 cursor: pointer;
	 width: 30px;
	 height: 25px;
	 margin: auto;
   margin-top: 8px;
}
 .navTrigger i {
	 background-color: #000;
	 border-radius: 2px;
	 content: '';
	 display: block;
	 width: 100%;
	 height: 4px;
}
 .navTrigger i:nth-child(1) {
	 -webkit-animation: outT 0.8s backwards;
	 animation: outT 0.8s backwards;
	 -webkit-animation-direction: reverse;
	 animation-direction: reverse;
}
 .navTrigger i:nth-child(2) {
	 margin: 5px 0;
	 -webkit-animation: outM 0.8s backwards;
	 animation: outM 0.8s backwards;
	 -webkit-animation-direction: reverse;
	 animation-direction: reverse;
}
 .navTrigger i:nth-child(3) {
	 -webkit-animation: outBtm 0.8s backwards;
	 animation: outBtm 0.8s backwards;
	 -webkit-animation-direction: reverse;
	 animation-direction: reverse;
}
 .navTrigger.active i:nth-child(1) {
	 -webkit-animation: inT 0.8s forwards;
	 animation: inT 0.8s forwards;
}
 .navTrigger.active i:nth-child(2) {
	 -webkit-animation: inM 0.8s forwards;
	 animation: inM 0.8s forwards;
}
 .navTrigger.active i:nth-child(3) {
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