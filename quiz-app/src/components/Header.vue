<template> 
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled>Got: {{ count }}/10</b-nav-item>
      <b-nav-item disabled>Question {{ index }} of {{ length }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>

export default {
  props: {
    count: Number, 
    index: Number,
    length: Number,
  }
}

</script>