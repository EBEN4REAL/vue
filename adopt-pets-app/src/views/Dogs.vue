<template>
  <div class="about">
    <h1>Adopt a new best friend</h1>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    // use the spread operator to access the state, then make an array containing the data you want to get from state
    ...mapState(["dogs"])
  }
};
</script>