<template>
  <div id="home" class="small-container" style="  position: relative;
  min-height: 100vh;">
  <div id="content-wrap" style="padding-bottom: 2.5rem;">
      <navbar/>
      <matchesFilters/>
    <blueFooter/>
  </div>
      </div>
</template>

<script>
  import Auth from '../Auth'
  import navbar from './Navbar.vue'
  import blueFooter from './Footer.vue'
  import matchesCards from './Matches-Cards.vue'
  import matchesFilters from './matches/Filters'
  import App from "../App"

  export default {
    name: 'matches',
    data: function () {
      return {
        loading: true,
        currentUser: `${Auth.currentUser}`
      }
    },
    components: {
      navbar,
      matchesCards,
      blueFooter,
      matchesFilters,
    },
    created () {
      this.fetchData();
    },
    methods: {
      async fetchData () {
        var petNames;
        var pets = [];
        const url = App.apiBase + '/user/' + Auth.currentUser._id;

        await fetch(url, {
          headers: {
            'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }).then(r => r.json()).then(j => {
          console.log(' ')
          petNames = j.favouritePets
        })
        console.log(petNames.length)
        for (var i = 0; i < petNames.length; i++) {
          fetch(`${App.apiBase}/pet/${petNames[i]}`).then(r => r.json()).then(j => {
            console.log(pets)
            pets.push(j)
          })
        }
        this.$store.commit('setMatchesResults', pets);
        // fetch(`${App.apiBase}/shelter/`).then(r => r.json()).then(j => {
        //   this.$store.commit('setMatchesResults', j);
        //   setTimeout(() => this.loading = false, 1500);
        // })
      }
    }
  }

</script>

<style>
  #home {
    min-height: 100vh;
    background-color: #D9CDBF;
    overflow: hidden;
  }

  button {
    background-color: #FFFBF8;
    border-radius: 40px;
    height: 5vh;
    width: 10vw;
    border-color: #f2a2b1;
    margin-bottom: 30px;
  }
  .loading {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #EBDAD1;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
  }
</style>
