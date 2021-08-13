<template>
  <div style="padding-top: 100px">

    <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
    <div v-if="!loaded">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center py-5">
            Loading
          </div>
        </div>
      </div>
    </div>
    <div v-else class="filters">
      <div class="filter" v-for="filter in filters" :key="filter">
        <div class="filter-name">
          {{ filter.name }}
        </div><br>
        <select  @change="updateFilter" :name="filter.name">
          <option  v-for="filterValue in filter.values" :key="filterValue" :value="filterValue.value"
                 :name="filter.key"
                 :id="'input-' + filter.key + '-' + filterValue.value"
                 :data-commit-method="filter.commitMethod"
                 :selected="state.matches.filters[filter.key] === filterValue.value">{{ filterValue.label }}
          </option>
        </select>
      </div>
    </div>
    </div>

    <div id="main">
      <button class="openbtn" v-on:click="changeNav()"><i class="fas fa-filter"></i>    <span>Filter<span></button>
      <matchesCards/>
    </div>
  </div>
</template>

<script>
  import matchesCards from '../Matches-Cards.vue'
import filterConfig from './config';
import App from "../../App";
import Auth from "../../Auth";

export default {
  data() {
    return {
      loaded: false,
      filters: filterConfig,
    }
  },
  computed: {
    state() {
      return this.$store.state;
    }
  },
  methods: {
    openNav() {
      document.getElementById("mySidebar").classList += " active"
      document.getElementById("main").style.marginLeft = "20vw"
    },
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
      document.getElementById("mySidebar").classList = "sidebar"
      document.getElementById("main").style.marginLeft = "0";
    },
    changeNav() {
      if (document.getElementById("mySidebar").classList == "sidebar active")
        this.closeNav()
      else
        this.openNav()
    },
    updateFilter(e) {
      console.log(e.target.options[e.target.selectedIndex].dataset.commitMethod)
      const method = 'setMatchesFilter' + e.target.options[e.target.selectedIndex].dataset.commitMethod;
      this.$store.commit(method, e.target.value);
    },
  },
  mounted() {
    const url = App.apiBase + '/user/' + Auth.currentUser._id;

    fetch(url, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }).then(r => r.json()).then(j => {

      const filters = ['Animal','Age','Sex','Family'];

      filters.forEach(field => {
        const key = 'questionFilter' + field;
        if (j.hasOwnProperty(key)) {
          this.$store.commit('setMatchesFilter' + field , j[key]);
        }
      })

      this.loaded = true;
          console.log(this.filters)
    })
  },
  components: {
    matchesCards
  }
}
</script>

<style>
  .filter-name, .filter-value, .filter-value label {
    display: inline;
  }

  button {
    width: auto;
  }
.filter-name {
  font-family: 'Montserrat', sans-serif;
  color: black;
  margin-left: 5%;
  font-size: 18px;
}

select {
  padding: 7px;
  width: 90%;
  margin-left: 5%;
  position: relative;
  border: none;
  background: white;
  color: black;
  margin-bottom: 10px;
}

body {
	 background-color: #d1d7dc;
	 font-family: 'Fira Sans', sans-serif;
}
 *, *::before, *::after {
	 box-sizing: inherit;
}
 html {
	 box-sizing: border-box;
}
 code {
	 background-color: #9aa3ac;
	 padding: 0 8px;
}
 
option {
  font-family: 'Montserrat', sans-serif;
}

.filter {
  color: white;
}

 /* The sidebar menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #a2988d;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
  margin-top: 68px;
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.active {
  width: 20vw;
  height: 100vh;
}

/* The button used to open the sidebar */
.openbtn {
  width: auto;
  height: auto;
  font-size: 20px;
  cursor: pointer;
  background-color: #637365;
  color: white;
  padding: 10px 15px;
  border: none;
}


.openbtn:hover {
  background-color: #7b8f7d;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-width: 450px) {
  .sidebar {
    z-index: 100000;
  }
  .active { width: 100vw; }
  .sidebar a { font-size: 18px; }
} 

</style>
