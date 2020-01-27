<template>
  <div class="about">
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>
 
<script>
// the '@' symbol is a symbol that vue cli lets us use, it refers to the source directory of a view project 
import { mapState } from 'vuex'

export default {
  computed: {
    // use the spread operator to access the state, then make an array containing the data you want to get from state 
    ...mapState([
      'cats'
    ])
  }
};
</script>