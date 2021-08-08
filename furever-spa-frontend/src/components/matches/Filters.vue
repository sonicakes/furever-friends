<template>
  <div class="filters">
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
</template>

<style>
  .filters {
    padding-top: 100px; /* because of navbar */
  }
  .filter-name, .filter-value, .filter-value label {
    display: inline;
  }
</style>

<script>
import filterConfig from './config';

export default {
  data() {
    return {
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
}
</script>
