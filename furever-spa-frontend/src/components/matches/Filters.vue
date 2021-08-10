<template>
  <div style="padding-top: 100px">
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
      <div class="filter" v-for="filter in filters">
        <div class="filter-name">
          {{ filter.name }}
        </div>
        <div class="filter-value" v-for="filterValue in filter.values">
          <input type="radio" :key="filter.key" :value="filterValue.value"
                 :name="filter.key"
                 :id="'input-' + filter.key + '-' + filterValue.value"
                 :data-commit-method="filter.commitMethod"
                 @change="updateFilter"
                 :checked="state.matches.filters[filter.key] === filterValue.value">
          <label :for="'input-' + filter.key + '-' + filterValue.value">{{ filterValue.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .filter-name, .filter-value, .filter-value label {
    display: inline;
  }
</style>

<script>
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
    updateFilter (e) {
      const method = 'setMatchesFilter' + e.target.dataset.commitMethod;
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
    })
  }
}
</script>
