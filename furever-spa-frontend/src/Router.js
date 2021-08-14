import Vue from 'vue';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
Vue.use(BootstrapVue)
Vue.use(Vuex);

// import views
import fourOFourView from './views/pages/404'
// import signinView from './views/pages/signin'
// import signupView from './views/pages/signup'
// import profileView from './views/pages/profile'
// import editProfileView from './views/pages/editProfile'
import matches from './components/matches.vue'
import home from './components/home.vue'
import Signin from './components/signin.vue'
import Signup from './components/Signup.vue'
import Profile from './components/Profile.vue'
import { parseTwoDigitYear } from 'moment'
import addPet from './components/add-pet.vue'
import editPet from './components/edit-pet.vue'
import aboutYou from './components/about-you.vue'
import petPreferences from './components/pet-preferences.vue'
import editProfile from './components/edit-profile.vue'
import Settings from './components/Settings.vue'
import Pet from './components/Pet.vue'
import error from './components/404.vue'

import {store} from './store';


// define routes
const routes = {
	'/': home,	
	'/matches': matches,
	'/add': addPet,
	'/editpet': editPet,
	'/about': aboutYou,
	'/edit': editProfile,
	'/profile': Profile,
	'/preferences': petPreferences,
	'404' : fourOFourView,
	'/login': Signin,
	'/signup': Signup,
	'/profile': Profile,
	'/settings': Settings,
	'/pet': Pet
}

class Router {
	viewContainer = null;

	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		
		if(route){
			// See https://forum.vuejs.org/t/add-component-to-dom-programatically/7308/12
			if (null !== this.viewContainer) {
				// This is a page change, so delete the existing Vue instance
				// and create the child DIV.
				this.viewContainer.$destroy();
				document.querySelector('#app').appendChild(document.createElement('div'));
			}

			this.viewContainer = new Vue({
				render: createElement => createElement(this.routes[window.location.pathname]),
				store: store,
			}).$mount('#app div');

		} else {			
			// show 404 view instead
			this.viewContainer = new Vue({
				render: createElement => createElement(error),
				store: store,
			}).$mount('#app div');
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}