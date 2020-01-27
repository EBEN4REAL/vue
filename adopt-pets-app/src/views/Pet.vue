<template>
  <div class="about">
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.age }}</p>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    // use the spread operator to access the state, then make an array containing the data you want to get from state
    ...mapState(["dogs", "cats"])
    // you can also use the below syntax, although it is almost never used
    // cats() {
    //   return this.$store.state.cats
    // }
  },
  mounted() {
    this.animal = this[this.$route.params.species][this.$route.params.id];
  }
};
</script>
