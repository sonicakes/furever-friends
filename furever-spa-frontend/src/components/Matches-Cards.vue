<template>
    <div class="pets">
        <div class="pet" v-for="pet in filteredPets()">
            Name: {{ pet.petName }}<br>
            Type: {{ pet.petType }}<br>
            Preferred Family: {{ pet.preferredFamily }}<br>
            Sex: {{ pet.sex }}<br>
            Weight: {{ pet.weight }}<br>
            Age: {{ pet.age }}<br>
            Breed: {{ pet.breed }}<br>
            Colour: {{ pet.colour }}<br>
            Activities
            <ul>
                <li v-for="activities in pet.activities">{{ activities }}</li>
            </ul>
            Personality
            <ul>
                <li v-for="personality in pet.personality">{{ personality }}</li>
            </ul>
            Preferred Living
            <ul>
                <li v-for="preferredLiving in pet.preferredLiving">{{ preferredLiving }}</li>
            </ul>
            Things to Avoid
            <ul>
                <li v-for="thingsToAvoid in pet.thingsToAvoid">{{ thingsToAvoid }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    filteredPets() {
      let filtered = this.$store.state.matches.results;

      if (this.$store.state.matches.filters.animal !== 'any') {
        filtered = filtered.filter(pet => pet.petType === this.$store.state.matches.filters.animal);
      }

      if (this.$store.state.matches.filters.sex !== 'any') {
        filtered = filtered.filter(pet => pet.sex === this.$store.state.matches.filters.sex);
      }

      if (this.$store.state.matches.filters.age !== 'any') {
        filtered = filtered.filter(pet => pet.age === this.$store.state.matches.filters.age);
      }

      if (this.$store.state.matches.filters.family !== 'any') {
        filtered = filtered.filter(pet => pet.preferredFamily === this.$store.state.matches.filters.family);
      }

      return filtered;
    }
  }
}
</script>

<style scoped>
.pets {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.pet {
  border: 1px solid red;
}
</style>
